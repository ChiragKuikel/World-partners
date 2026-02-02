import { Router, type Request, type Response } from "express"
import { getConnection } from "../config/database"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { RowDataPacket } from "mysql2/promise";
const router = Router()
import { ResultSetHeader } from "mysql2"
import verifyAdmin from "../middleware/auth";

// Login
router.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body
    const connection = await getConnection()
    const [users] = await connection.query<RowDataPacket[]>("SELECT * FROM admin_users WHERE email = ?", [email])
    connection.release()

    if (!users || users.length === 0) {
      return res.status(401).json({ error: "Invalid credentials" })
    }

    const user = users[0]
    const passwordMatch = await bcrypt.compare(password, user.password_hash)

    if (!passwordMatch) {
      console.log('password match vayena jasto xa')
      return res.status(401).json({ error: "Invalid credentials" })
    }
    
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET as string,  {
      expiresIn: "24h",
    })
    res.json({
      user: { id: user.id, email: user.email, name: user.name },
      token,
    })
  } catch (error) {
    res.status(500).json({ error: "Login failed" })
  }
})

// Register (for initial setup only)
router.post("/register", async (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body

    const hashedPassword = await bcrypt.hash(password, 10)

    const connection = await getConnection()
    const [result] = await connection.query<ResultSetHeader>("INSERT INTO admin_users (email, password_hash, name) VALUES (?, ?, ?)", [
      email,
      hashedPassword,
      name,
    ])
    connection.release()

    res.status(201).json({ id: result.insertId, email, name })
  } catch (error) {
    res.status(500).json({ error: "Registration failed" })
  }
})

//adding funcionality to change passwords for the admin

router.put("/change-password", verifyAdmin , async (req: Request, res: Response) => {
  try {
    const userId = req.userId
    const { oldPassword, newPassword } = req.body

    const connection = await getConnection()
    const [rows] = await connection.query<RowDataPacket[]>(
      "SELECT password_hash FROM admin_users WHERE id = ?",
      [userId]
    )

    if (!rows || rows.length === 0) {
      connection.release()
      return res.status(404).json({ error: "Admin not found" })
    }

    const user = rows[0]
    const match = await bcrypt.compare(oldPassword, user.password_hash)
    if (!match) {
      connection.release()
      return res.status(401).json({ error: "Old password is incorrect" })
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10)
    await connection.query(
      "UPDATE admin_users SET password_hash = ? WHERE id = ?",
      [hashedNewPassword, userId]
    )
    connection.release()

    res.status(200).json({ message: "Password changed successfully" })
  } catch (error) {
    res.status(500).json({ error: "Failed to change password" })
  }
})

export default router
