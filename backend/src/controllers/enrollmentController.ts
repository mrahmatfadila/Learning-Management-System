import { Request, Response } from 'express';
import prisma, { pool } from '../lib/prisma';

// POST /api/enrollments — student request akses modul (status PENDING)
export const enrollStudent = async (req: Request, res: Response): Promise<any> => {
  try {
    const { studentId, moduleId } = req.body;
    if (!studentId || !moduleId) {
      return res.status(400).json({ message: 'studentId and moduleId are required' });
    }

    // Cek modul exist
    const modRes = await pool.query('SELECT id, title FROM "Module" WHERE id = $1', [moduleId]);
    if (modRes.rowCount === 0) return res.status(404).json({ message: 'Module not found' });

    // Cek student exist
    const stuRes = await pool.query('SELECT id, name FROM "User" WHERE id = $1', [studentId]);
    if (stuRes.rowCount === 0) return res.status(404).json({ message: 'Student not found' });

    // Cek apakah sudah ada enrollment
    const existing = await pool.query(
      'SELECT id, status FROM "Enrollment" WHERE "studentId" = $1 AND "moduleId" = $2',
      [studentId, moduleId]
    );
    if (existing.rowCount! > 0) {
      return res.status(200).json({
        message: 'Permintaan sudah ada sebelumnya.',
        enrollment: existing.rows[0],
        alreadyExists: true
      });
    }

    // Buat enrollment baru dengan status PENDING
    const result = await pool.query(
      `INSERT INTO "Enrollment" (id, "studentId", "moduleId", progress, status, "enrolledAt", "updatedAt")
       VALUES (gen_random_uuid(), $1, $2, 0, 'PENDING', NOW(), NOW())
       RETURNING *`,
      [studentId, moduleId]
    );

    return res.status(201).json({
      message: 'Permintaan akses modul berhasil dikirim! Menunggu persetujuan instruktur.',
      enrollment: result.rows[0]
    });
  } catch (error) {
    console.error('Error enrolling student:', error);
    res.status(500).json({ message: 'Terjadi kesalahan saat mengirim permintaan.' });
  }
};

// GET /api/enrollments/check?studentId=&moduleId=
export const checkEnrollment = async (req: Request, res: Response): Promise<any> => {
  try {
    const { studentId, moduleId } = req.query;
    if (!studentId || !moduleId) {
      return res.status(400).json({ message: 'studentId and moduleId are required' });
    }

    const result = await pool.query(
      'SELECT * FROM "Enrollment" WHERE "studentId" = $1 AND "moduleId" = $2',
      [studentId as string, moduleId as string]
    );

    if (result.rowCount === 0) {
      return res.json({ enrolled: false, status: null, enrollment: null });
    }

    const enr = result.rows[0];
    res.json({ enrolled: true, status: enr.status, enrollment: enr });
  } catch (error) {
    console.error('Error checking enrollment:', error);
    res.status(500).json({ message: 'Error checking enrollment' });
  }
};

// GET /api/enrollments/all — instructor lihat semua enrollment (semua status) untuk history
export const getAllEnrollmentsByInstructor = async (req: Request, res: Response): Promise<any> => {
  try {
    const { instructorId } = req.query;
    if (!instructorId) return res.status(400).json({ message: 'instructorId is required' });

    const result = await pool.query(
      `SELECT e.id, e."studentId", e."moduleId", e.status, e.note, e."enrolledAt", e."updatedAt",
              u.name as "studentName", u.email as "studentEmail",
              m.title as "moduleTitle", m.category as "moduleCategory",
              inst.name as "instructorName"
       FROM "Enrollment" e
       JOIN "User" u ON u.id = e."studentId"
       JOIN "Module" m ON m.id = e."moduleId"
       LEFT JOIN "User" inst ON inst.id = m."instructorId"
       WHERE m."instructorId" = $1
       ORDER BY e."updatedAt" DESC`,
      [instructorId]
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching all enrollments:', error);
    res.status(500).json({ message: 'Error fetching enrollments' });
  }
};

// GET /api/enrollments/pending — admin/instructor lihat semua request pending
export const getPendingEnrollments = async (req: Request, res: Response): Promise<any> => {
  try {
    const { instructorId } = req.query;
    let query = `SELECT e.id, e."studentId", e."moduleId", e.status, e.note, e."enrolledAt",
              u.name as "studentName", u.email as "studentEmail",
              m.title as "moduleTitle", m.category as "moduleCategory",
              inst.name as "instructorName"
       FROM "Enrollment" e
       JOIN "User" u ON u.id = e."studentId"
       JOIN "Module" m ON m.id = e."moduleId"
       LEFT JOIN "User" inst ON inst.id = m."instructorId"
       WHERE e.status = 'PENDING'`;
    
    const params: any[] = [];
    if (instructorId) {
      query += ` AND m."instructorId" = $1`;
      params.push(instructorId);
    }
    
    query += ` ORDER BY e."enrolledAt" DESC`;
    
    const result = await pool.query(query, params);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching pending enrollments:', error);
    res.status(500).json({ message: 'Error fetching enrollment requests' });
  }
};

// PATCH /api/enrollments/:id/approve — instruktur setujui
export const approveEnrollment = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.id as string;
    const { note } = req.body;

    const result = await pool.query(
      `UPDATE "Enrollment" SET status = $2, note = $3, "updatedAt" = NOW() WHERE id = $1 RETURNING *`,
      [id, 'APPROVED', note ? String(note) : null]
    );
    if (result.rowCount === 0) return res.status(404).json({ message: 'Enrollment not found' });

    res.json({ message: 'Permintaan disetujui!', enrollment: result.rows[0] });
  } catch (error: any) {
    console.error('Error approving enrollment:', error);
    res.status(500).json({ message: 'Error approving enrollment', detail: error.message });
  }
};

// PATCH /api/enrollments/:id/reject — instruktur tolak
export const rejectEnrollment = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.id as string;
    const { note } = req.body;

    const result = await pool.query(
      `UPDATE "Enrollment" SET status = $2, note = $3, "updatedAt" = NOW() WHERE id = $1 RETURNING *`,
      [id, 'REJECTED', note ? String(note) : 'Permintaan ditolak oleh instruktur.']
    );
    if (result.rowCount === 0) return res.status(404).json({ message: 'Enrollment not found' });

    res.json({ message: 'Permintaan ditolak.', enrollment: result.rows[0] });
  } catch (error: any) {
    console.error('Error rejecting enrollment:', error);
    res.status(500).json({ message: 'Error rejecting enrollment', detail: error.message });
  }
};

// GET /api/enrollments/module/:moduleId
export const getStudentsByModule = async (req: Request, res: Response): Promise<any> => {
  try {
    const { moduleId } = req.params;
    const result = await pool.query(
      `SELECT u.id, u.name, u.email, u."createdAt", e.progress, e.status, e."enrolledAt"
       FROM "Enrollment" e
       JOIN "User" u ON u.id = e."studentId"
       WHERE e."moduleId" = $1
       ORDER BY e."enrolledAt" DESC`,
      [moduleId]
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching students by module:', error);
    res.status(500).json({ message: 'Error fetching students' });
  }
};

// GET /api/enrollments/instructor/:instructorId
export const getStudentsByInstructor = async (req: Request, res: Response): Promise<any> => {
  try {
    const { instructorId } = req.params;
    const result = await pool.query(
      `SELECT e.id as "enrollmentId", e."studentId", u.name, u.email, u."createdAt",
              e.progress, e.status, e."enrolledAt",
              e."moduleId", m.title as "moduleTitle", m.category as "moduleCategory"
       FROM "Enrollment" e
       JOIN "User" u ON u.id = e."studentId"
       JOIN "Module" m ON m.id = e."moduleId"
       WHERE m."instructorId" = $1
       ORDER BY e."enrolledAt" DESC`,
      [instructorId]
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching students by instructor:', error);
    res.status(500).json({ message: 'Error fetching students' });
  }
};

// GET /api/enrollments/student/:studentId
export const getModulesByStudent = async (req: Request, res: Response): Promise<any> => {
  try {
    const { studentId } = req.params;
    const result = await pool.query(
      `SELECT m.*, e.status as "enrollmentStatus", e.progress, e."enrolledAt", e.id as "enrollmentId",
              (SELECT COUNT(*) FROM "Enrollment" e2 WHERE e2."moduleId" = m.id AND e2.status = 'APPROVED') AS enr
       FROM "Enrollment" e
       JOIN "Module" m ON m.id = e."moduleId"
       WHERE e."studentId" = $1
       ORDER BY e."enrolledAt" DESC`,
      [studentId]
    );
    // Parse enr as number
    const rows = result.rows.map((r: any) => ({ ...r, enr: parseInt(r.enr || '0', 10) }));
    res.json(rows);
  } catch (error) {
    console.error('Error fetching modules by student:', error);
    res.status(500).json({ message: 'Error fetching student modules' });
  }
};


// PATCH /api/enrollments/progress — update progress siswa
export const updateEnrollmentProgress = async (req: Request, res: Response): Promise<any> => {
  try {
    const { studentId, moduleId, progress } = req.body;
    if (!studentId || !moduleId || progress === undefined) {
      return res.status(400).json({ message: 'studentId, moduleId, and progress are required' });
    }
    const result = await pool.query(
      `UPDATE "Enrollment" SET progress = $3, "updatedAt" = NOW()
       WHERE "studentId" = $1 AND "moduleId" = $2 RETURNING *`,
      [studentId, moduleId, Math.min(100, Math.max(0, Number(progress)))]
    );
    if (result.rowCount === 0) return res.status(404).json({ message: 'Enrollment not found' });
    res.json({ message: 'Progress updated', enrollment: result.rows[0] });
  } catch (error) {
    console.error('Error updating progress:', error);
    res.status(500).json({ message: 'Error updating progress' });
  }
};

// GET /api/enrollments/certificate/:id
export const getCertificateById = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      `SELECT e.id as "enrollmentId", e.progress, e."updatedAt",
              u.name as "studentName", u.email as "studentEmail",
              m.title as "moduleTitle", m.description as "moduleDescription",
              i.name as "instructorName"
       FROM "Enrollment" e
       JOIN "User" u ON u.id = e."studentId"
       JOIN "Module" m ON m.id = e."moduleId"
       LEFT JOIN "User" i ON i.id = m."instructorId"
       WHERE e.id = $1`,
      [id]
    );
    if (result.rowCount === 0) return res.status(404).json({ message: 'Certificate not found' });
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching certificate:', error);
    res.status(500).json({ message: 'Error fetching certificate' });
  }
};
