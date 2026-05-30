import { Request, Response } from 'express';
import prisma from '../lib/prisma';

export const submitTask = async (req: Request, res: Response): Promise<any> => {
  try {
    const { taskId, studentId, fileUrl } = req.body;
    
    // Check if submission already exists
    const existing = await prisma.submission.findFirst({
      where: { taskId, studentId }
    });

    if (existing) {
      const updated = await prisma.submission.update({
        where: { id: existing.id },
        data: { fileUrl, submittedAt: new Date() }
      });
      return res.json(updated);
    }

    const submission = await prisma.submission.create({
      data: { taskId, studentId, fileUrl }
    });
    res.json(submission);
  } catch (error) {
    res.status(500).json({ message: 'Error submitting task' });
  }
};

export const getSubmissionsByTask = async (req: Request, res: Response): Promise<any> => {
  try {
    const taskId = req.params.taskId as string;
    const submissions = await prisma.submission.findMany({
      where: { taskId },
      include: {
        student: { select: { name: true, email: true } }
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
    const { score, feedback } = req.body;
    
    const submission = await prisma.submission.update({
      where: { id },
      data: { 
        score: Number(score), 
        feedback,
        status: 'GRADED'
      }
    });
    res.json(submission);
  } catch (error) {
    res.status(500).json({ message: 'Error grading submission' });
  }
};
