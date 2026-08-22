import { Request, Response } from 'express';
import prisma from '../lib/prisma';

const aliasMap: Record<string, string> = {
  'html': '67adde6d-81a6-4470-b88d-506b733f87ee',
  '67adde6d-81a6-4470-b88d-506b733f87ee': 'html',
  'css': 'ba1383a2-219d-44ab-bf63-804d5a0f0902',
  'ba1383a2-219d-44ab-bf63-804d5a0f0902': 'css',
  'javascript': 'mastering-ui-design-for-impactful-solutions',
  'mastering-ui-design-for-impactful-solutions': 'javascript',
  'php': 'php-backend-mastery',
  'php-backend-mastery': 'php',
  'mysql': 'mysql-relational-database',
  'mysql-relational-database': 'mysql',
  'git': 'git-github-version-control',
  'git-github-version-control': 'git',
  'mobile': 'mobile-app-java-android',
  'mobile-app-java-android': 'mobile',
  'cisco': 'cisco-packet-tracer',
  'cisco-packet-tracer': 'cisco'
};

const resolveTargetModuleId = async (inputModuleId: string): Promise<string> => {
  const altId = aliasMap[inputModuleId];
  const found = await prisma.module.findFirst({
    where: {
      OR: [
        { id: inputModuleId },
        ...(altId ? [{ id: altId }] : []),
        { title: { contains: inputModuleId, mode: 'insensitive' } }
      ]
    },
    select: { id: true }
  });
  return found?.id || altId || inputModuleId;
};

// GET /api/modules/:moduleId/reviews
export const getModuleReviews = async (req: Request, res: Response): Promise<void> => {
  try {
    const rawModuleId = String(req.params.moduleId);
    const targetModuleId = await resolveTargetModuleId(rawModuleId);
    const altId = aliasMap[rawModuleId];

    const reviews = await prisma.review.findMany({
      where: {
        OR: [
          { moduleId: targetModuleId },
          { moduleId: rawModuleId },
          ...(altId ? [{ moduleId: altId }] : [])
        ]
      },
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
    const rawModuleId = String(req.params.moduleId);
    const { userId, rating, comment } = req.body;

    if (!userId || !rating || !comment) {
      res.status(400).json({ error: 'User, rating, dan komentar wajib diisi' });
      return;
    }

    const targetModuleId = await resolveTargetModuleId(rawModuleId);

    // Verify user exists
    let targetUserId = String(userId);
    const userExists = await prisma.user.findUnique({
      where: { id: targetUserId },
      select: { id: true }
    });

    if (!userExists) {
      const fallbackUser = await prisma.user.findFirst({ select: { id: true } });
      if (fallbackUser) {
        targetUserId = fallbackUser.id;
      } else {
        res.status(400).json({ error: 'User tidak ditemukan' });
        return;
      }
    }

    const numRating = Math.max(1, Math.min(5, Number(rating)));

    const review = await prisma.review.upsert({
      where: {
        userId_moduleId: { userId: targetUserId, moduleId: targetModuleId }
      },
      update: {
        rating: numRating,
        comment: String(comment).trim(),
        updatedAt: new Date()
      },
      create: {
        userId: targetUserId,
        moduleId: targetModuleId,
        rating: numRating,
        comment: String(comment).trim()
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
    const rawLessonId = String(req.params.lessonId);
    const cleaned = rawLessonId.replace(/^html-lesson-/, '').replace(/---.*$/, '');

    const comments = await prisma.lessonComment.findMany({
      where: {
        OR: [
          { lessonId: rawLessonId },
          { lessonId: cleaned },
          { lessonId: `html-${cleaned}` }
        ]
      },
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

// POST /api/lessons/comments / POST /api/lessons/:lessonId/comments
export const createLessonComment = async (req: Request, res: Response): Promise<void> => {
  try {
    const rawLessonId = String(req.params.lessonId);
    const { userId, content } = req.body;

    if (!userId || !content?.trim()) {
      res.status(400).json({ error: 'User dan isi komentar wajib diisi' });
      return;
    }

    let targetUserId = String(userId);
    const userExists = await prisma.user.findUnique({
      where: { id: targetUserId },
      select: { id: true }
    });
    if (!userExists) {
      const fallbackUser = await prisma.user.findFirst({ select: { id: true } });
      if (fallbackUser) targetUserId = fallbackUser.id;
    }

    // Resolve target lesson
    const cleaned = rawLessonId.replace(/^html-lesson-/, '').replace(/---.*$/, '');
    const foundLesson = await prisma.lesson.findFirst({
      where: {
        OR: [
          { id: rawLessonId },
          { id: cleaned },
          { id: `html-${cleaned}` }
        ]
      },
      select: { id: true }
    });
    const targetLessonId = foundLesson?.id || rawLessonId;

    const comment = await prisma.lessonComment.create({
      data: {
        userId: targetUserId,
        lessonId: targetLessonId,
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
