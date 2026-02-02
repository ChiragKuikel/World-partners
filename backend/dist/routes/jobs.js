"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const database_1 = require("../config/database");
const cloudflare_r2_1 = require("../config/cloudflare-r2");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
// Get all jobs (public)
router.get("/", async (req, res) => {
    try {
        const connection = await (0, database_1.getConnection)();
        const [jobs] = await connection.query("SELECT * FROM jobs ORDER BY created_at DESC");
        connection.release();
        const jobsWithUrls = await Promise.all(jobs.map(async (job) => {
            if (job.image_key) {
                const signedUrl = await (0, cloudflare_r2_1.getFileFromR2)(job.image_key);
                return { ...job, imageSignedUrl: signedUrl };
            }
            return job;
        }));
        res.json(jobsWithUrls);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch jobs" });
    }
});
// Get job by ID (public)
router.get("/:id", async (req, res) => {
    const connection = await (0, database_1.getConnection)();
    try {
        const [jobs] = await connection.query("SELECT * FROM jobs WHERE id = ?", [req.params.id]); //added RowDataPacket[] because the TS was not recognizing job as array
        if (!jobs || jobs.length === 0) {
            return res.status(404).json({ error: "Job not found" });
        }
        const job = jobs[0];
        let signedUrl = null;
        if (job.image_key) {
            signedUrl = await (0, cloudflare_r2_1.getFileFromR2)(jobs[0].image_key);
        }
        res.json({ ...job, imageSignedUrl: signedUrl });
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch job" });
    }
    finally {
        if (connection)
            connection.release();
    }
});
// Create job (admin only)
router.post("/", auth_1.verifyAdmin, async (req, res) => {
    try {
        const { title, description, image, benefits, place, contractType, employmentPeriod, trialPeriod, salary, workingDays, workTime, breakTime, holidays, gender, requirements, selectionMethod, applicationMethod, notification } = req.body;
        let imageUrl = null;
        let imageKey = null;
        if (image) {
            const buffer = Buffer.from(image, "base64");
            const fileName = `jobs/${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
            const result = await (0, cloudflare_r2_1.uploadFileToR2)(buffer, fileName);
            imageUrl = result.url;
            imageKey = result.key;
        }
        const connection = await (0, database_1.getConnection)();
        const [result] = await connection.query("INSERT INTO jobs (title,description,image_url,image_key,benefits,place,contractType,employmentPeriod, trialPeriod, salary, workingDays, workTime, breakTime, holidays, gender, requirements, selectionMethod, applicationMethod, notification) VALUES (?, ?, ?, ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [title, description, imageUrl, imageKey, benefits, place,
            contractType,
            employmentPeriod,
            trialPeriod,
            salary,
            workingDays,
            workTime,
            breakTime,
            holidays,
            gender,
            requirements,
            selectionMethod,
            applicationMethod,
            notification]);
        connection.release();
        res.status(201).json({ id: result.insertId, title, description, image_url: imageUrl });
    }
    catch (error) {
        res.status(500).json({ error: "Failed to create job" });
    }
});
// Update job (admin only)
router.put("/:id", auth_1.verifyAdmin, async (req, res) => {
    try {
        const { title, description, imageFile } = req.body;
        const connection = await (0, database_1.getConnection)();
        const [jobs] = await connection.query("SELECT image_key FROM jobs WHERE id = ?", [req.params.id]);
        let imageUrl = null;
        let imageKey = null;
        if (imageFile) {
            if (jobs[0]?.image_key) {
                await (0, cloudflare_r2_1.deleteFileFromR2)(jobs[0].image_key);
            }
            const buffer = Buffer.from(imageFile, "base64");
            const fileName = `jobs/${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
            const result = await (0, cloudflare_r2_1.uploadFileToR2)(buffer, fileName);
            imageUrl = result.url;
            imageKey = result.key;
        }
        await connection.query("UPDATE jobs SET title = ?, description = ?, image_url = COALESCE(?, image_url), image_key = COALESCE(?, image_key) WHERE id = ?", [title, description, imageUrl, imageKey, req.params.id]);
        connection.release();
        res.json({ id: req.params.id, title, description });
    }
    catch (error) {
        res.status(500).json({ error: "Failed to update job" });
    }
});
// Delete job (admin only)
router.delete("/:id", auth_1.verifyAdmin, async (req, res) => {
    try {
        const connection = await (0, database_1.getConnection)();
        const [jobs] = await connection.query("SELECT image_key FROM jobs WHERE id = ?", [req.params.id]);
        if (jobs[0]?.image_key) {
            await (0, cloudflare_r2_1.deleteFileFromR2)(jobs[0].image_key);
        }
        await connection.query("DELETE FROM jobs WHERE id = ?", [req.params.id]);
        connection.release();
        res.json({ success: true });
    }
    catch (error) {
        res.status(500).json({ error: "Failed to delete job" });
    }
});
exports.default = router;
