import { Request, Response } from 'express';
import prisma from '../lib/prisma';

// Helper to generate unique 6-character PIN code (e.g., QZ-7829)
const generatePinCode = () => {
  const num = Math.floor(1000 + Math.random() * 9000);
  return `QZ-${num}`;
};

export const getAllQuizizz = async (req: Request, res: Response): Promise<any> => {
  try {
    const { moduleId } = req.query;
    const whereCondition: any = {};
    if (moduleId && typeof moduleId === 'string') {
      whereCondition.moduleId = moduleId;
    }

    const quizzes = await (prisma as any).quizizz.findMany({
      where: whereCondition,
      include: {
        creator: { select: { id: true, name: true, email: true, profilePicture: true } },
        module: { select: { id: true, title: true, category: true } },
        _count: { select: { questions: true, attempts: true } }
      },
      orderBy: { createdAt: 'desc' }
    });

    res.json(quizzes);
  } catch (error) {
    console.error('Error fetching Quizizz list:', error);
    res.status(500).json({ message: 'Gagal mengambil daftar Quizizz' });
  }
};

export const getQuizizzById = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.id as string;
    const quiz = await (prisma as any).quizizz.findUnique({
      where: { id },
      include: {
        creator: { select: { id: true, name: true, email: true, profilePicture: true } },
        module: { select: { id: true, title: true } },
        questions: { orderBy: { order: 'asc' } },
        attempts: {
          include: { student: { select: { id: true, name: true, email: true, profilePicture: true } } },
          orderBy: [{ totalScore: 'desc' }, { avgTimeSeconds: 'asc' }]
        }
      }
    });

    if (!quiz) {
      return res.status(404).json({ message: 'Quizizz tidak ditemukan' });
    }

    res.json(quiz);
  } catch (error) {
    console.error('Error fetching Quizizz:', error);
    res.status(500).json({ message: 'Gagal mengambil detail Quizizz' });
  }
};

export const createQuizizz = async (req: Request, res: Response): Promise<any> => {
  try {
    const { title, description, moduleId, creatorId, timePerQuestion, questions } = req.body;

    if (!title || !creatorId || !questions || !Array.isArray(questions) || questions.length === 0) {
      return res.status(400).json({ message: 'Judul, pembuat, dan minimal 1 pertanyaan wajib diisi' });
    }

    const pinCode = generatePinCode();

    const newQuizizz = await (prisma as any).quizizz.create({
      data: {
        title,
        description: description || '',
        pinCode,
        moduleId: moduleId || null,
        creatorId,
        timePerQuestion: Number(timePerQuestion) || 20,
        questions: {
          create: questions.map((q: any, idx: number) => ({
            question: q.question,
            optionA: q.optionA,
            optionB: q.optionB,
            optionC: q.optionC,
            optionD: q.optionD,
            correctOption: q.correctOption || 'A',
            explanation: q.explanation || '',
            points: Number(q.points) || 1000,
            order: idx + 1
          }))
        }
      },
      include: {
        questions: true
      }
    });

    res.status(201).json({ message: 'Quizizz berhasil dibuat!', quizizz: newQuizizz });
  } catch (error) {
    console.error('Error creating Quizizz:', error);
    res.status(500).json({ message: 'Terjadi kesalahan server saat membuat Quizizz' });
  }
};

export const deleteQuizizz = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.id as string;
    await (prisma as any).quizizz.delete({ where: { id } });
    res.json({ message: 'Quizizz berhasil dihapus' });
  } catch (error) {
    console.error('Error deleting Quizizz:', error);
    res.status(500).json({ message: 'Gagal menghapus Quizizz' });
  }
};

export const submitQuizizzAttempt = async (req: Request, res: Response): Promise<any> => {
  try {
    const { quizizzId, studentId, totalScore, correctCount, totalQuestions, accuracyPct, maxStreak, avgTimeSeconds } = req.body;

    if (!quizizzId || !studentId) {
      return res.status(400).json({ message: 'quizizzId dan studentId diperlukan' });
    }

    const attempt = await (prisma as any).quizizzAttempt.create({
      data: {
        quizizzId,
        studentId,
        totalScore: Number(totalScore) || 0,
        correctCount: Number(correctCount) || 0,
        totalQuestions: Number(totalQuestions) || 0,
        accuracyPct: Number(accuracyPct) || 0,
        maxStreak: Number(maxStreak) || 0,
        avgTimeSeconds: Number(avgTimeSeconds) || 0
      },
      include: {
        student: { select: { id: true, name: true, email: true, profilePicture: true } }
      }
    });

    res.status(201).json({ message: 'Hasil Quizizz berhasil disimpan!', attempt });
  } catch (error) {
    console.error('Error submitting Quizizz attempt:', error);
    res.status(500).json({ message: 'Gagal menyimpan hasil Quizizz' });
  }
};

export const getQuizizzLeaderboard = async (req: Request, res: Response): Promise<any> => {
  try {
    const quizizzId = req.params.id as string;
    const leaderboard = await (prisma as any).quizizzAttempt.findMany({
      where: { quizizzId },
      include: {
        student: { select: { id: true, name: true, email: true, profilePicture: true } }
      },
      orderBy: [
        { totalScore: 'desc' },
        { maxStreak: 'desc' },
        { createdAt: 'asc' }
      ],
      take: 20
    });

    res.json(leaderboard);
  } catch (error) {
    console.error('Error fetching Quizizz leaderboard:', error);
    res.status(500).json({ message: 'Gagal mengambil peringkat Quizizz' });
  }
};
