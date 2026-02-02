"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const database_1 = require("../config/database");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const router = (0, express_1.Router)();
const auth_1 = __importDefault(require("../middleware/auth"));
// Login
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const connection = await (0, database_1.getConnection)();
        const [users] = await connection.query("SELECT * FROM admin_users WHERE email = ?", [email]);
        connection.release();
        if (!users || users.length === 0) {
            return res.status(401).json({ error: "Invalid credentials" });
        }
        const user = users[0];
        const passwordMatch = await bcryptjs_1.default.compare(password, user.password_hash);
        if (!passwordMatch) {
            console.log('password match vayena jasto xa');
            return res.status(401).json({ error: "Invalid credentials" });
        }
        const token = jsonwebtoken_1.default.sign({ userId: user.id }, process.env.JWT_SECRET, {
            expiresIn: "24h",
        });
        res.json({
            user: { id: user.id, email: user.email, name: user.name },
            token,
        });
    }
    catch (error) {
        res.status(500).json({ error: "Login failed" });
    }
});
// Register (for initial setup only)
router.post("/register", async (req, res) => {
    try {
        const { email, password, name } = req.body;
        const hashedPassword = await bcryptjs_1.default.hash(password, 10);
        const connection = await (0, database_1.getConnection)();
        const [result] = await connection.query("INSERT INTO admin_users (email, password_hash, name) VALUES (?, ?, ?)", [
            email,
            hashedPassword,
            name,
        ]);
        connection.release();
        res.status(201).json({ id: result.insertId, email, name });
    }
    catch (error) {
        res.status(500).json({ error: "Registration failed" });
    }
});
//adding funcionality to change passwords for the admin
router.put("/change-password", auth_1.default, async (req, res) => {
    try {
        const userId = req.userId;
        const { oldPassword, newPassword } = req.body;
        const connection = await (0, database_1.getConnection)();
        const [rows] = await connection.query("SELECT password_hash FROM admin_users WHERE id = ?", [userId]);
        if (!rows || rows.length === 0) {
            connection.release();
            return res.status(404).json({ error: "Admin not found" });
        }
        const user = rows[0];
        const match = await bcryptjs_1.default.compare(oldPassword, user.password_hash);
        if (!match) {
            connection.release();
            return res.status(401).json({ error: "Old password is incorrect" });
        }
        const hashedNewPassword = await bcryptjs_1.default.hash(newPassword, 10);
        await connection.query("UPDATE admin_users SET password_hash = ? WHERE id = ?", [hashedNewPassword, userId]);
        connection.release();
        res.status(200).json({ message: "Password changed successfully" });
    }
    catch (error) {
        res.status(500).json({ error: "Failed to change password" });
    }
});
exports.default = router;
