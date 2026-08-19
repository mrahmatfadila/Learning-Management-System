import { Request, Response } from 'express';
import prisma from '../lib/prisma';

// GET /api/modules/:moduleId/reviews
export const getModuleReviews = async (req: Request, res: Response): Promise<void> => {
  try {
    const moduleId = String(req.params.moduleId);
    const reviews = await prisma.review.findMany({
      where: { moduleId },
      include: {
        user: {
          select: { id: true, name: true, profilePicture: true, role: true }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    const totalReviews = reviews.length;
    const avgRating = totalReviews > 0
      ? Math.round((reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews) * 10) / 10
      : 0;

    const ratingCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    reviews.forEach(r => {
      if (r.rating >= 1 && r.rating <= 5) {
        ratingCounts[r.rating as 1|2|3|4|5] = (ratingCounts[r.rating as 1|2|3|4|5] || 0) + 1;
      }
    });

    res.json({ reviews, avgRating, totalReviews, ratingCounts });
  } catch (error) {
    console.error('Error fetching module reviews:', error);
    res.status(500).json({ error: 'Gagal mengambil ulasan modul' });
  }
};

// POST /api/modules/:moduleId/reviews
export const upsertModuleReview = async (req: Request, res: Response): Promise<void> => {
  try {
    const moduleId = String(req.params.moduleId);
    const { userId, rating, comment } = req.body;

    if (!userId || !rating || !comment) {
      res.status(400).json({ error: 'User, rating, dan komentar wajib diisi' });
      return;
    }

    const numRating = Math.max(1, Math.min(5, Number(rating)));

    const review = await prisma.review.upsert({
      where: {
        userId_moduleId: { userId, moduleId }
      },
      update: {
        rating: numRating,
        comment,
        updatedAt: new Date()
      },
      create: {
        userId,
        moduleId,
        rating: numRating,
        comment
      },
      include: {
        user: {
          select: { id: true, name: true, profilePicture: true, role: true }
        }
      }
    });

    res.status(200).json(review);
  } catch (error) {
    console.error('Error upserting module review:', error);
    res.status(500).json({ error: 'Gagal menyimpan ulasan modul' });
  }
};

// DELETE /api/reviews/:reviewId
export const deleteModuleReview = async (req: Request, res: Response): Promise<void> => {
  try {
    const reviewId = String(req.params.reviewId);
    await prisma.review.delete({
      where: { id: reviewId }
    });
    res.json({ message: 'Ulasan berhasil dihapus' });
  } catch (error) {
    console.error('Error deleting module review:', error);
    res.status(500).json({ error: 'Gagal menghapus ulasan' });
  }
};

// GET /api/lessons/:lessonId/comments
export const getLessonComments = async (req: Request, res: Response): Promise<void> => {
  try {
    const lessonId = String(req.params.lessonId);
    const comments = await prisma.lessonComment.findMany({
      where: { lessonId },
      include: {
        user: {
          select: { id: true, name: true, profilePicture: true, role: true }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    res.json(comments);
  } catch (error) {
    console.error('Error fetching lesson comments:', error);
    res.status(500).json({ error: 'Gagal mengambil komentar materi' });
  }
};

// POST /api/lessons/:lessonId/comments
export const createLessonComment = async (req: Request, res: Response): Promise<void> => {
  try {
    const lessonId = String(req.params.lessonId);
    const { userId, content } = req.body;

    if (!userId || !content?.trim()) {
      res.status(400).json({ error: 'User dan isi komentar wajib diisi' });
      return;
    }

    const comment = await prisma.lessonComment.create({
      data: {
        userId,
        lessonId,
        content: content.trim()
      },
      include: {
        user: {
          select: { id: true, name: true, profilePicture: true, role: true }
        }
      }
    });

    res.status(201).json(comment);
  } catch (error) {
    console.error('Error creating lesson comment:', error);
    res.status(500).json({ error: 'Gagal menambahkan komentar materi' });
  }
};

// DELETE /api/lessons/comments/:commentId
export const deleteLessonComment = async (req: Request, res: Response): Promise<void> => {
  try {
    const commentId = String(req.params.commentId);
    await prisma.lessonComment.delete({
      where: { id: commentId }
    });
    res.json({ message: 'Komentar materi berhasil dihapus' });
  } catch (error) {
    console.error('Error deleting lesson comment:', error);
    res.status(500).json({ error: 'Gagal menghapus komentar materi' });
  }
};
