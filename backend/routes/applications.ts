import { Router, type Request, type Response } from "express"
import { getConnection } from "../config/database"
import { uploadFileToR2, deleteFileFromR2, getFileFromR2, getResumeFromR2 } from "../config/cloudflare-r2"
import { verifyAdmin } from "../middleware/auth"
import { ResultSetHeader } from "mysql2"
const router = Router()
import { RowDataPacket } from "mysql2/promise";



// Submit job application (public)
router.post("/", async (req: Request, res: Response) => {
  try {
    const { jobId, firstName, lastName, dateOfBirth, gender, email, phone, facebookUrl, country, nearestStation, residenceStatus, japaneseLevel, workingDays, daysPerWeek, coverLetter, resume } = req.body

    let resumeUrl = null
    let resumeKey = null

    if (resume) {
      const buffer = Buffer.from(resume, "base64")
      const fileName = `resumes/${Date.now()}-${Math.random().toString(36).substring(2, 9)}`
      const result = await uploadFileToR2(buffer, fileName)
      resumeUrl = result.url
      resumeKey = result.key
    }

    const connection = await getConnection()
    const [result] = await connection.query<ResultSetHeader>(
      "INSERT INTO job_applications (job_id,first_name,last_name,date_of_birth,gender,email,phone,facebook_url,country,nearest_station,residence_status,japanese_level,working_days,days_per_week,cover_letter, resume_key,resume_url) VALUES (?, ?, ?, ?, ?, ?, ?,?,?,?,?,?,?,?,?,?,?)",
      [jobId, firstName, lastName, dateOfBirth, gender, email, phone, facebookUrl, country, nearestStation, residenceStatus, japaneseLevel, JSON.stringify(workingDays), daysPerWeek, coverLetter, resumeKey, resumeUrl],
    )
    connection.release()

    res.status(201).json({ id: result.insertId, message: "Application submitted successfully" })
  } catch (error) {
    
    res.status(500).json({ error: "Failed to submit application" })
  }
})


// Get applications for a job (admin only)
router.get("/job/:jobId", verifyAdmin, async (req: Request, res: Response) => {
  try {
    const connection = await getConnection()
    const [applications] = await connection.query(
      "SELECT * FROM job_applications WHERE job_id = ? ORDER BY created_at DESC",
      [req.params.jobId],
    )
    connection.release()
    res.json(applications)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch applications" })
  }
})



// Get all applications (admin only)
router.get("/", verifyAdmin, async (req: Request, res: Response) => {
  try {
    const connection = await getConnection()
    const [applications] = await connection.query(
      "SELECT a.*, j.title as job_title FROM job_applications a JOIN jobs j ON a.job_id = j.id ORDER BY a.created_at DESC",
    )
    connection.release()

    res.json(applications)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch applications" })
  }
})

router.put('/:id/status', verifyAdmin,async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    const validStatuses = ['pending', 'reviewing','shortlisted', 'accepted', 'rejected'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }
    const connection = await getConnection()
    const [result] = await connection.query(
      'UPDATE job_applications SET application_status = ?, updated_at = NOW() WHERE id = ? ',
      [status, id]
    );
    connection.release()
    
    res.json(result);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id/resume', verifyAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection()
    const [result] = await connection.query<RowDataPacket[]>(
      'SELECT resume_key,first_name,last_name FROM job_applications WHERE id = ?',
      [id]
    );

    if (!result[0]?.resume_key) {
      return res.status(404).json({ error: 'Resume not found' });
    }
    const{resume_key,first_name,last_name} = result[0]
    
    // Generate signed URL for R2
    const signedUrl = await getResumeFromR2(resume_key,first_name+last_name);

    res.json({ url: signedUrl });
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
});





// Delete application (admin only)
router.delete("/:id", verifyAdmin, async (req: Request, res: Response) => {
  try {
    const connection = await getConnection()
    const [apps] = await connection.query<RowDataPacket[]>("SELECT resume_key FROM job_applications WHERE id = ?", [req.params.id])

    if (apps[0]?.resume_key) {
      await deleteFileFromR2(apps[0].resume_key)
    }

    await connection.query("DELETE FROM job_applications WHERE id = ?", [req.params.id])
    connection.release()

    res.json({ success: true })
  } catch (error) {
    res.status(500).json({ error: "Failed to delete application" })
  }
})

export default router
