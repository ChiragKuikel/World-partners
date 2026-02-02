import { Router, type Request, type Response } from "express"
import { getConnection } from "../config/database"
import { uploadFileToR2, deleteFileFromR2 } from "../config/cloudflare-r2"
import { verifyAdmin } from "../middleware/auth"
import { RowDataPacket } from "mysql2/promise";
import { ResultSetHeader } from "mysql2"
const router = Router()



// Get all blog posts (public)
router.get("/", async (req: Request, res: Response) => {
  try {
    const connection = await getConnection()
    const [posts] = await connection.query(
      "SELECT id, title, content, image_url, slug, created_at FROM blog_posts WHERE published = TRUE ORDER BY created_at DESC",
    )
    connection.release()
    res.json(posts)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch blog posts" })
  }
})



// Get blog post by slug (public)
router.get("/:slug", async (req: Request, res: Response) => {
  try {
    const connection = await getConnection()
    const [posts] = await connection.query<RowDataPacket[]>("SELECT * FROM blog_posts WHERE slug = ? AND published = TRUE", [
      req.params.slug,
    ])
    connection.release()

    if (!posts || posts.length === 0) {
      return res.status(404).json({ error: "Blog post not found" })
    }

    res.json(posts[0])
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch blog post" })
  }
})


// Create blog post (admin only)
router.post("/", verifyAdmin, async (req: Request, res: Response) => {
  try {
    const { title, content, imageFile } = req.body
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-")

    let imageUrl = null
    let imageKey = null

    if (imageFile) {
      const buffer = Buffer.from(imageFile, "base64")
      const fileName = `blog/${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
      const result = await uploadFileToR2(buffer, fileName)
      imageUrl = result.url
      imageKey = result.key
    }

    const connection = await getConnection()
    const [result] = await connection.query<ResultSetHeader>(
      "INSERT INTO blog_posts (title, content, image_url, image_key, slug) VALUES (?, ?, ?, ?, ?)",
      [title, content, imageUrl, imageKey, slug],
    )
    connection.release()

    res.status(201).json({ id: result.insertId, title, slug })
  } catch (error) {
    res.status(500).json({ error: "Failed to create blog post" })
  }
})



// Update blog post (admin only)
router.put("/:id", verifyAdmin, async (req: Request, res: Response) => {
  try {
    const { title, content, imageFile } = req.body
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-")

    const connection = await getConnection()
    const [posts] = await connection.query<RowDataPacket[]>("SELECT image_key FROM blog_posts WHERE id = ?", [req.params.id])

    let imageUrl = null
    let imageKey = null

    if (imageFile) {
      if (posts[0]?.image_key) {
        await deleteFileFromR2(posts[0].image_key)
      }

      const buffer = Buffer.from(imageFile, "base64")
      const fileName = `blog/${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
      const result = await uploadFileToR2(buffer, fileName)
      imageUrl = result.url
      imageKey = result.key
    }

    await connection.query(
      "UPDATE blog_posts SET title = ?, content = ?, slug = ?, image_url = COALESCE(?, image_url), image_key = COALESCE(?, image_key) WHERE id = ?",
      [title, content, slug, imageUrl, imageKey, req.params.id],
    )
    connection.release()

    res.json({ id: req.params.id, title, slug })
  } catch (error) {
    res.status(500).json({ error: "Failed to update blog post" })
  }
})



// Delete blog post (admin only)
router.delete("/:id", verifyAdmin, async (req: Request, res: Response) => {
  try {
    const connection = await getConnection()
    const [posts] = await connection.query<RowDataPacket[]>("SELECT image_key FROM blog_posts WHERE id = ?", [req.params.id])

    if (posts[0]?.image_key) {
      await deleteFileFromR2(posts[0].image_key)
    }

    await connection.query("DELETE FROM blog_posts WHERE id = ?", [req.params.id])
    connection.release()

    res.json({ success: true })
  } catch (error) {
    res.status(500).json({ error: "Failed to delete blog post" })
  }
})

export default router
