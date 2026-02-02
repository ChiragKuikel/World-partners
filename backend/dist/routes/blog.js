"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const database_1 = require("../config/database");
const cloudflare_r2_1 = require("../config/cloudflare-r2");
const auth_1 = require("../middleware/auth");
const cloudflare_r2_2 = require("../config/cloudflare-r2");
const router = (0, express_1.Router)();
// Get all blog posts (public)
router.get("/", async (req, res) => {
    try {
        const connection = await (0, database_1.getConnection)();
        const [posts] = await connection.query("SELECT id, title, content, image_url,image_key, slug, created_at FROM blog_posts WHERE published = TRUE ORDER BY created_at DESC");
        connection.release();
        const blogsWithUrls = await Promise.all(posts.map(async (blogs) => {
            if (blogs.image_key) {
                const signedUrl = await (0, cloudflare_r2_2.getFileFromR2)(blogs.image_key);
                return { ...blogs, imageSignedUrl: signedUrl };
            }
            return posts;
        }));
        res.json(blogsWithUrls);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch blog posts" });
    }
});
// Get blog post by slug (public)
router.get("/:slug", async (req, res) => {
    try {
        const connection = await (0, database_1.getConnection)();
        const [posts] = await connection.query("SELECT * FROM blog_posts WHERE slug = ? AND published = TRUE", [
            req.params.slug,
        ]);
        connection.release();
        if (!posts || posts.length === 0) {
            return res.status(404).json({ error: "Blog post not found" });
        }
        const blog = posts[0];
        let signedUrl = null;
        if (blog.image_key) {
            signedUrl = await (0, cloudflare_r2_2.getFileFromR2)(posts[0].image_key);
        }
        res.json({ ...blog, imageSignedUrl: signedUrl });
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch blog post" });
    }
});
// Create blog post (admin only)
router.post("/", auth_1.verifyAdmin, async (req, res) => {
    try {
        const { title, content, imageFile } = req.body;
        const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        let imageUrl = null;
        let imageKey = null;
        if (imageFile) {
            const buffer = Buffer.from(imageFile, "base64");
            const fileName = `blog/${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
            const result = await (0, cloudflare_r2_1.uploadFileToR2)(buffer, fileName);
            imageUrl = result.url;
            imageKey = result.key;
        }
        const connection = await (0, database_1.getConnection)();
        const [result] = await connection.query("INSERT INTO blog_posts (title, content, image_url, image_key, slug) VALUES (?, ?, ?, ?, ?)", [title, content, imageUrl, imageKey, slug]);
        connection.release();
        res.status(201).json({ id: result.insertId, title, slug });
    }
    catch (error) {
        res.status(500).json({ error: "Failed to create blog post" });
    }
});
// Update blog post (admin only)
router.put("/:id", auth_1.verifyAdmin, async (req, res) => {
    try {
        const { title, content, imageFile } = req.body;
        const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        const connection = await (0, database_1.getConnection)();
        const [posts] = await connection.query("SELECT image_key FROM blog_posts WHERE id = ?", [req.params.id]);
        let imageUrl = null;
        let imageKey = null;
        if (imageFile) {
            if (posts[0]?.image_key) {
                await (0, cloudflare_r2_1.deleteFileFromR2)(posts[0].image_key);
            }
            const buffer = Buffer.from(imageFile, "base64");
            const fileName = `blog/${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
            const result = await (0, cloudflare_r2_1.uploadFileToR2)(buffer, fileName);
            imageUrl = result.url;
            imageKey = result.key;
        }
        await connection.query("UPDATE blog_posts SET title = ?, content = ?, slug = ?, image_url = COALESCE(?, image_url), image_key = COALESCE(?, image_key) WHERE id = ?", [title, content, slug, imageUrl, imageKey, req.params.id]);
        connection.release();
        res.json({ id: req.params.id, title, slug });
    }
    catch (error) {
        res.status(500).json({ error: "Failed to update blog post" });
    }
});
// Delete blog post (admin only)
router.delete("/:id", auth_1.verifyAdmin, async (req, res) => {
    try {
        const connection = await (0, database_1.getConnection)();
        const [posts] = await connection.query("SELECT image_key FROM blog_posts WHERE id = ?", [req.params.id]);
        if (posts[0]?.image_key) {
            await (0, cloudflare_r2_1.deleteFileFromR2)(posts[0].image_key);
        }
        await connection.query("DELETE FROM blog_posts WHERE id = ?", [req.params.id]);
        connection.release();
        res.json({ success: true });
    }
    catch (error) {
        res.status(500).json({ error: "Failed to delete blog post" });
    }
});
exports.default = router;
