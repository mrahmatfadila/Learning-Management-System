import { Request, Response } from 'express';
import prisma from '../lib/prisma';
import fs from 'fs';
import path from 'path';

export const uploadSubmissionFile = async (req: Request, res: Response): Promise<any> => {
  try {
    const { fileName, fileData } = req.body;
    if (!fileName || !fileData) {
      return res.status(400).json({ message: 'Nama file dan konten file diperlukan' });
    }

    // Ensure upload directory exists
    const uploadDir = path.join(__dirname, '../../uploads/submissions');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Clean filename and make unique
    const sanitizedName = fileName.replace(/[^a-zA-Z0-9.-]/g, '_');
    const uniqueName = `${Date.now()}_${sanitizedName}`;
    const filePath = path.join(uploadDir, uniqueName);

    // Extract base64 buffer
    const base64Data = fileData.includes(';base64,') 
      ? fileData.split(';base64,').pop() 
      : fileData;
    
    fs.writeFileSync(filePath, Buffer.from(base64Data, 'base64'));

    const fileUrl = `http://localhost:5000/uploads/submissions/${uniqueName}`;
    const downloadUrl = `http://localhost:5000/api/submissions/download/${uniqueName}`;
    return res.json({ 
      success: true, 
      fileUrl, 
      downloadUrl,
      fileName: sanitizedName,
      sizeBytes: fs.statSync(filePath).size
    });
  } catch (error: any) {
    console.error('Error uploading submission file:', error);
    return res.status(500).json({ message: 'Gagal mengunggah file tugas: ' + error.message });
  }
};

export const downloadSubmissionFile = async (req: Request, res: Response): Promise<any> => {
  try {
    const rawParam = req.params.filename;
    const rawFilename = Array.isArray(rawParam) ? rawParam[0] : rawParam;
    if (!rawFilename || typeof rawFilename !== 'string') {
      return res.status(400).json({ message: 'Nama file diperlukan' });
    }
    const filename = path.basename(rawFilename);
    const uploadDir = path.join(__dirname, '../../uploads/submissions');
    let filePath = path.join(uploadDir, filename);

    // If exact name does not exist, search for matching timestamped file (e.g. 179..._filename)
    if (!fs.existsSync(filePath) && fs.existsSync(uploadDir)) {
      const files = fs.readdirSync(uploadDir);
      const cleanTarget = filename.replace(/[^a-zA-Z0-9.-]/g, '_').toLowerCase();
      const matched = files.find(f => {
        const lower = f.toLowerCase();
        return lower === cleanTarget || lower.endsWith('_' + cleanTarget) || lower.includes(cleanTarget);
      });
      if (matched) {
        filePath = path.join(uploadDir, matched);
      }
    }

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ message: 'File tugas tidak ditemukan di server' });
    }

    // Clean original name by stripping timestamp prefix (e.g. 1790447957033_myfile.zip -> myfile.zip)
    const displayName = path.basename(filePath).replace(/^\d+_/, '') || filename;
    return res.download(filePath, displayName);
  } catch (error: any) {
    console.error('Error downloading submission file:', error);
    return res.status(500).json({ message: 'Gagal mengunduh file tugas: ' + error.message });
  }
};

export const submitTask = async (req: Request, res: Response): Promise<any> => {
  try {
    const { taskId, studentId, fileUrl, githubUrl, submissionType, notes, branch, liveUrl, fileName } = req.body;
    
    if (!taskId || !studentId) {
      return res.status(400).json({ message: 'taskId dan studentId wajib diisi' });
    }

    // Construct standard serialized storage payload if rich submission is provided
    let finalFileUrl = fileUrl || '';
    if (githubUrl || submissionType || notes || branch || liveUrl || fileName) {
      finalFileUrl = JSON.stringify({
        submissionType: submissionType || (githubUrl && fileUrl ? 'BOTH' : githubUrl ? 'GITHUB' : 'FILE'),
        fileUrl: fileUrl || '',
        githubUrl: githubUrl || '',
        fileName: fileName || '',
        branch: branch || 'main',
        liveUrl: liveUrl || '',
        notes: notes || '',
        submittedAt: new Date().toISOString()
      });
    } else if (!finalFileUrl) {
      return res.status(400).json({ message: 'File atau tautan GitHub wajib dilampirkan' });
    }

    // Check if submission already exists
    const existing = await prisma.submission.findFirst({
      where: { taskId, studentId }
    });

    if (existing) {
      const updated = await prisma.submission.update({
        where: { id: existing.id },
        data: { 
          fileUrl: finalFileUrl, 
          submittedAt: new Date(),
          status: 'PENDING' // Reset to pending if updated by student
        }
      });
      return res.json(updated);
    }

    const submission = await prisma.submission.create({
      data: { 
        taskId, 
        studentId, 
        fileUrl: finalFileUrl,
        status: 'PENDING'
      }
    });
    res.json(submission);
  } catch (error: any) {
    console.error('Error submitting task:', error);
    res.status(500).json({ message: 'Error submitting task: ' + (error?.message || error) });
  }
};

export const getSubmissionsByTask = async (req: Request, res: Response): Promise<any> => {
  try {
    const taskId = req.params.taskId as string;
    const submissions = await prisma.submission.findMany({
      where: { taskId },
      include: {
        student: { select: { id: true, name: true, email: true, profilePicture: true } }
      },
      orderBy: { submittedAt: 'desc' }
    });
    res.json(submissions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching submissions' });
  }
};

export const gradeSubmission = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.id as string;
    const { score, feedback, status } = req.body;
    
    const data: any = { 
      status: status || 'GRADED'
    };
    if (score !== undefined && score !== null && score !== '') {
      data.score = Number(score);
    }
    if (feedback !== undefined) {
      data.feedback = feedback;
    }

    const submission = await prisma.submission.update({
      where: { id },
      data
    });
    res.json(submission);
  } catch (error) {
    res.status(500).json({ message: 'Error grading submission' });
  }
};
