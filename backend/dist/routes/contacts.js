"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const database_1 = require("../config/database");
const auth_1 = require("../middleware/auth");
const cloudflare_r2_1 = require("../config/cloudflare-r2");
const cloudflare_r2_2 = require("../config/cloudflare-r2");
const router = (0, express_1.Router)();
// Submit contact form (public)
router.post("/", async (req, res) => {
    try {
        const { firstName, lastName, email, phone, jobType, hearAbout, message, companyName, position, contactType, resume } = req.body;
        let resumeUrl = null;
        let resumeKey = null;
        if (resume) {
            const buffer = Buffer.from(resume, "base64");
            const fileName = `interested_resumes/${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
            const result = await (0, cloudflare_r2_1.uploadFileToR2)(buffer, fileName);
            resumeUrl = result.url;
            resumeKey = result.key;
        }
        const connection = await (0, database_1.getConnection)();
        if (contactType === "individual") {
            const [result] = await connection.query("INSERT INTO contacts (first_name,last_name, email, phone, contact_type,job_type,hear_about,position,resume_key,resume_url,message) VALUES (?, ?, ?,?,?,?,?,?,?,?,?)", [
                firstName, lastName, email, phone, contactType, jobType, hearAbout, position, resumeKey, resumeUrl, message,
            ]);
            res.status(201).json({ id: result.insertId, message: "Message sent successfully" });
        }
        else {
            const [result] = await connection.query("INSERT INTO contacts (first_name,last_name, email, phone, contact_type,hear_about,message,company_name) VALUES (?, ?, ?,?,?,?,?,?)", [
                firstName, lastName, email, phone, contactType, hearAbout, message, companyName
            ]);
            res.status(201).json({ id: result.insertId, message: "Message sent successfully" });
        }
        connection.release();
    }
    catch (error) {
        res.status(500).json({ error: "Failed to send message" });
    }
});
// Get all contacts (admin only)
router.get("/", auth_1.verifyAdmin, async (req, res) => {
    try {
        const connection = await (0, database_1.getConnection)();
        const [contacts] = await connection.query("SELECT * FROM contacts ORDER BY created_at DESC");
        connection.release();
        res.json(contacts);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch contacts" });
    }
});
router.get('/:id/resume', auth_1.verifyAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await (0, database_1.getConnection)();
        const [result] = await connection.query('SELECT resume_key,first_name,last_name FROM contacts WHERE id = ?', [id]);
        if (!result[0]?.resume_key) {
            return res.status(404).json({ error: 'Resume not found' });
        }
        const { resume_key, first_name, last_name } = result[0];
        // Generate signed URL for R2
        const signedUrl = await (0, cloudflare_r2_2.getResumeFromR2)(resume_key, first_name + last_name);
        res.json({ url: signedUrl });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.default = router;
