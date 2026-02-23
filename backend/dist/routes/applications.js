"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const database_1 = require("../config/database");
const cloudflare_r2_1 = require("../config/cloudflare-r2");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
const uploader_1 = __importDefault(require("../config/uploader"));
const googlesheets_1 = __importDefault(require("../config/googlesheets"));
// Submit job application (public)
router.post("/", async (req, res) => {
    try {
        const { jobId, firstName, lastName, dateOfBirth, gender, email, phone, facebookUrl, country, nearestStation, residenceStatus, japaneseLevel, workingDays, daysPerWeek, coverLetter, resume } = req.body;
        let driveFileLink = null;
        let resumeUrl = null;
        let resumeKey = null;
        if (resume) {
            const buffer = Buffer.from(resume, "base64");
            const fileName = `resumes/${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
            const result = await (0, cloudflare_r2_1.uploadFileToR2)(buffer, fileName);
            driveFileLink = await (0, uploader_1.default)(buffer, fileName);
            console.log('✅ Resume uploaded to Drive:', driveFileLink);
            resumeUrl = result.url;
            resumeKey = result.key;
        }
        const connection = await (0, database_1.getConnection)();
        const [result] = await connection.query("INSERT INTO job_applications (job_id,first_name,last_name,date_of_birth,gender,email,phone,facebook_url,country,nearest_station,residence_status,japanese_level,working_days,days_per_week,cover_letter, resume_key,resume_url) VALUES (?, ?, ?, ?, ?, ?, ?,?,?,?,?,?,?,?,?,?,?)", [jobId, firstName, lastName, dateOfBirth, gender, email, phone, facebookUrl, country, nearestStation, residenceStatus, japaneseLevel, JSON.stringify(workingDays), daysPerWeek, coverLetter, resumeKey, resumeUrl]);
        connection.release();
        try {
            await (0, googlesheets_1.default)(req.body, driveFileLink);
            console.log('Google Sheet updated');
        }
        catch (sheetError) {
            console.error('Google Sheet update failed:', sheetError);
            // Log but don't fail the response
        }
        res.status(201).json({ id: result.insertId, message: "Application submitted successfully" });
    }
    catch (error) {
        res.status(500).json({ error: "Failed to submit application" });
    }
});
// Get applications for a job (admin only)
router.get("/job/:jobId", auth_1.verifyAdmin, async (req, res) => {
    try {
        const connection = await (0, database_1.getConnection)();
        const [applications] = await connection.query("SELECT * FROM job_applications WHERE job_id = ? ORDER BY created_at DESC", [req.params.jobId]);
        connection.release();
        res.json(applications);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch applications" });
    }
});
// Get all applications (admin only)
router.get("/", auth_1.verifyAdmin, async (req, res) => {
    try {
        const connection = await (0, database_1.getConnection)();
        const [applications] = await connection.query("SELECT a.*, j.title as job_title FROM job_applications a JOIN jobs j ON a.job_id = j.id ORDER BY a.created_at DESC");
        connection.release();
        res.json(applications);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch applications" });
    }
});
router.put('/:id/status', auth_1.verifyAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const validStatuses = ['pending', 'reviewing', 'shortlisted', 'accepted', 'rejected'];
        if (!validStatuses.includes(status)) {
            return res.status(400).json({ error: 'Invalid status' });
        }
        const connection = await (0, database_1.getConnection)();
        const [result] = await connection.query('UPDATE job_applications SET application_status = ?, updated_at = NOW() WHERE id = ? ', [status, id]);
        connection.release();
        res.json(result);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.get('/:id/resume', auth_1.verifyAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await (0, database_1.getConnection)();
        const [result] = await connection.query('SELECT resume_key,first_name,last_name FROM job_applications WHERE id = ?', [id]);
        if (!result[0]?.resume_key) {
            return res.status(404).json({ error: 'Resume not found' });
        }
        const { resume_key, first_name, last_name } = result[0];
        // Generate signed URL for R2
        const signedUrl = await (0, cloudflare_r2_1.getResumeFromR2)(resume_key, first_name + last_name);
        res.json({ url: signedUrl });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// Delete application (admin only)
router.delete("/:id", auth_1.verifyAdmin, async (req, res) => {
    try {
        const connection = await (0, database_1.getConnection)();
        const [apps] = await connection.query("SELECT resume_key FROM job_applications WHERE id = ?", [req.params.id]);
        if (apps[0]?.resume_key) {
            await (0, cloudflare_r2_1.deleteFileFromR2)(apps[0].resume_key);
        }
        await connection.query("DELETE FROM job_applications WHERE id = ?", [req.params.id]);
        connection.release();
        res.json({ success: true });
    }
    catch (error) {
        res.status(500).json({ error: "Failed to delete application" });
    }
});
exports.default = router;
