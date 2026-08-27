import { Request, Response } from 'express';
import prisma from '../lib/prisma';

export const getAllModules = async (req: Request, res: Response): Promise<any> => {
  try {
    const modules = await prisma.module.findMany({
      include: {
        instructor: { select: { id: true, name: true, email: true, role: true, profilePicture: true } },
        chapters: { select: { id: true, title: true, order: true } },
        lessons: {
          select: { id: true, title: true, type: true, order: true, chapter: true }
        },
        tasks: {
          select: { id: true, title: true }
        },
        enrollments: {
          select: { id: true, studentId: true, status: true, progress: true }
        },
        reviews: {
          select: { id: true, rating: true }
        },
        likes: {
          select: { id: true, userId: true }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    const formatted = modules.map(m => {
      const approvedEnrollments = m.enrollments.filter(e => e.status === 'APPROVED');
      const totalStudents = approvedEnrollments.length > 0 ? approvedEnrollments.length : m.enrollments.length;

      const totalReviews = m.reviews.length;
      const avgRating = totalReviews > 0
        ? Math.round((m.reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews) * 10) / 10
        : 0;
      const likesCount = m.likes.length;

      return {
        ...m,
        enr: totalStudents,
        totalEnrollments: m.enrollments.length,
        lessonsCount: m.lessons.length,
        tasksCount: m.tasks.length,
        reviewsCount: totalReviews,
        avgRating,
        totalRatings: totalReviews,
        likesCount
      };
    });

    res.json(formatted);
  } catch (error) {
    console.error('Error fetching modules:', error);
    res.status(500).json({ message: 'Error fetching modules' });
  }
};

export const getModuleById = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.id as string;
    let moduleItem = await prisma.module.findUnique({
      where: { id },
      include: {
        instructor: true,
        chapters: {
          orderBy: { order: 'asc' }
        },
        lessons: {
          include: { chapterRef: true },
          orderBy: { order: 'asc' }
        },
        tasks: {
          orderBy: { createdAt: 'desc' }
        },
        reviews: {
          include: { user: { select: { id: true, name: true, role: true } } },
          orderBy: { createdAt: 'desc' }
        },
        enrollments: {
          include: { student: { select: { id: true, name: true, email: true } } }
        }
      }
    });

    if (!moduleItem) {
      // Coba cari alias module
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

      if (aliasMap[id]) {
        moduleItem = await prisma.module.findUnique({
          where: { id: aliasMap[id] },
          include: {
            instructor: true,
            chapters: { orderBy: { order: 'asc' } },
            lessons: { include: { chapterRef: true }, orderBy: { order: 'asc' } },
            tasks: { orderBy: { createdAt: 'desc' } },
            reviews: {
              include: { user: { select: { id: true, name: true, role: true } } },
              orderBy: { createdAt: 'desc' }
            },
            enrollments: { include: { student: { select: { id: true, name: true, email: true } } } }
          }
        });
      }
    }

    if (!moduleItem) {
      return res.status(404).json({ message: 'Module not found' });
    }

    // 🌐 INTEGRASI CONTENT-API-SERVER (lms_content_db)
    // Ambil materi kurikulum resmi langsung dari Content API port 5001
    try {
      const contentApiSlug = id === '67adde6d-81a6-4470-b88d-506b733f87ee' ? 'html' : (id === 'ba1383a2-219d-44ab-bf63-804d5a0f0902' ? 'css' : (id === 'mastering-ui-design-for-impactful-solutions' || id === 'javascript' ? 'javascript' : (id === 'php-backend-mastery' || id === 'php' ? 'php' : id)));
      const contentRes = await fetch(`http://127.0.0.1:5001/api/v1/modules/${contentApiSlug}`, {
        signal: AbortSignal.timeout(2000)
      });
      if (contentRes.ok) {
        const contentData = await contentRes.json();
        if (contentData.success && contentData.data) {
          const extModule = contentData.data;
          if (extModule.chapters && extModule.chapters.length > 0) {
            moduleItem.chapters = extModule.chapters.map((c: any) => ({
              id: c.id,
              moduleId: moduleItem.id,
              title: c.title,
              order: c.order,
              createdAt: new Date(),
              updatedAt: new Date()
            }));
          }
          if (extModule.lessons && extModule.lessons.length > 0) {
            moduleItem.lessons = extModule.lessons.map((l: any) => ({
              id: l.id,
              moduleId: moduleItem.id,
              chapterId: l.chapterId,
              chapter: l.chapter,
              title: l.title,
              type: l.type,
              order: l.order,
              content: null,
              videoUrl: null,
              starterCode: null,
              createdAt: new Date(),
              updatedAt: new Date(),
              chapterRef: { id: l.chapterId, title: l.chapter, order: l.order }
            }));
          }
        }
      }
    } catch (e) {
      // Fallback ke data lokal jika Content API sedang tidak aktif
    }

    // Hitung statistik real-time
    const enrollments = moduleItem.enrollments || [];
    const approvedEnrollments = enrollments.filter(e => e.status === 'APPROVED');
    const completedStudents = enrollments.filter(e => e.progress >= 100);
    const inProgressStudents = enrollments.filter(e => e.progress > 0 && e.progress < 100);
    const pendingStudents = enrollments.filter(e => e.status === 'PENDING');
    
    const reviews = moduleItem.reviews || [];
    const avgRating = reviews.length > 0
      ? Number((reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1))
      : 0;

    const lessons = moduleItem.lessons || [];
    const videoLessons = lessons.filter(l => l.type === 'video');
    const articleLessons = lessons.filter(l => l.type !== 'video');

    const result = {
      ...moduleItem,
      enrolledStudentsCount: approvedEnrollments.length || enrollments.length || 0,
      completedStudentsCount: completedStudents.length,
      inProgressStudentsCount: inProgressStudents.length,
      pendingStudentsCount: pendingStudents.length,
      totalStudentsCount: enrollments.length,
      avgRating,
      totalRatings: reviews.length,
      videoLessonsCount: videoLessons.length,
      articleLessonsCount: articleLessons.length,
      tasksCount: moduleItem.tasks?.length || 0
    };

    res.json(result);
  } catch (error) {
    console.error('Error fetching module:', error);
    res.status(500).json({ message: 'Error fetching module' });
  }
};

export const createModule = async (req: Request, res: Response): Promise<any> => {
  try {
    const { title, category, description, instructorId, thumbnail } = req.body;
    
    if (!title || !category || !instructorId) {
      return res.status(400).json({ message: 'Title, category, and instructorId are required' });
    }

    const newModule = await prisma.module.create({
      data: {
        title,
        category,
        description,
        instructorId,
        thumbnail: thumbnail || null
      }
    });

    res.status(201).json({ message: 'Module created successfully', module: newModule });
  } catch (error) {
    console.error('Error creating module:', error);
    res.status(500).json({ message: 'Error creating module' });
  }
};

export const updateModule = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.id as string;
    const { title, category, description, thumbnail } = req.body;

    const existingModule = await prisma.module.findUnique({ where: { id } });
    if (!existingModule) {
      return res.status(404).json({ message: 'Module not found' });
    }

    const updatedModule = await prisma.module.update({
      where: { id },
      data: {
        title: title || existingModule.title,
        category: category || existingModule.category,
        description: description !== undefined ? description : existingModule.description,
        thumbnail: thumbnail !== undefined ? (thumbnail || null) : existingModule.thumbnail
      }
    });

    res.json({ message: 'Module updated successfully', module: updatedModule });
  } catch (error) {
    console.error('Error updating module:', error);
    res.status(500).json({ message: 'Error updating module' });
  }
};

export const deleteModule = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.id as string;

    const existingModule = await prisma.module.findUnique({ where: { id } });
    if (!existingModule) {
      return res.status(404).json({ message: 'Module not found' });
    }

    await prisma.lesson.deleteMany({ where: { moduleId: id } });
    await prisma.task.deleteMany({ where: { moduleId: id } });
    await prisma.enrollment.deleteMany({ where: { moduleId: id } });

    await prisma.module.delete({ where: { id } });

    res.json({ message: 'Module deleted successfully' });
  } catch (error) {
    console.error('Error deleting module:', error);
    res.status(500).json({ message: 'Error deleting module' });
  }
};

export const verifyModule = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.id as string;
    const { isVerified } = req.body;

    const existingModule = await prisma.module.findUnique({ where: { id } });
    if (!existingModule) {
      return res.status(404).json({ message: 'Module not found' });
    }

    const updatedModule = await prisma.module.update({
      where: { id },
      data: {
        isVerified: typeof isVerified === 'boolean' ? isVerified : Boolean(isVerified)
      }
    });

    res.json({ message: 'Module verification status updated successfully', module: updatedModule });
  } catch (error) {
    console.error('Error verifying module:', error);
    res.status(500).json({ message: 'Error verifying module' });
  }
};

export const duplicateModule = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.id as string;
    const { targetInstructorId } = req.body;

    const sourceModule = await prisma.module.findUnique({
      where: { id },
      include: {
        chapters: { orderBy: { order: 'asc' } },
        lessons: { orderBy: { order: 'asc' } }
      }
    });

    if (!sourceModule) {
      return res.status(404).json({ message: 'Module not found' });
    }

    const instructorId = targetInstructorId || sourceModule.instructorId;

    const newModule = await prisma.module.create({
      data: {
        title: `${sourceModule.title} (Salinan)`,
        category: sourceModule.category,
        description: sourceModule.description,
        thumbnail: sourceModule.thumbnail,
        instructorId: instructorId,
        isVerified: false
      }
    });

    const chapterMap = new Map<string, string>();
    for (const chap of sourceModule.chapters) {
      const newChap = await prisma.chapter.create({
        data: {
          title: chap.title,
          order: chap.order,
          moduleId: newModule.id
        }
      });
      chapterMap.set(chap.id, newChap.id);
    }

    for (const lesson of sourceModule.lessons) {
      const newChapterId = lesson.chapterId ? chapterMap.get(lesson.chapterId) || null : null;
      await prisma.lesson.create({
        data: {
          title: lesson.title,
          type: lesson.type,
          order: lesson.order,
          chapter: lesson.chapter,
          content: lesson.content,
          videoUrl: lesson.videoUrl,
          chapterId: newChapterId,
          moduleId: newModule.id
        }
      });
    }

    const createdModule = await prisma.module.findUnique({
      where: { id: newModule.id },
      include: { instructor: true, chapters: true, lessons: true }
    });

    res.status(201).json({ message: 'Modul berhasil diduplikasi', module: createdModule });
  } catch (error) {
    console.error('Error duplicating module:', error);
    res.status(500).json({ message: 'Error duplicating module' });
  }
};

export const bulkVerifyModules = async (req: Request, res: Response): Promise<any> => {
  try {
    const { ids, isVerified } = req.body;
    if (!Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({ message: 'ids array is required' });
    }
    await prisma.module.updateMany({
      where: { id: { in: ids } },
      data: { isVerified: Boolean(isVerified) }
    });
    res.json({ message: 'Status verifikasi berhasil diperbarui massal' });
  } catch (error) {
    console.error('Error bulk verifying modules:', error);
    res.status(500).json({ message: 'Error bulk verifying modules' });
  }
};

export const bulkReassignModules = async (req: Request, res: Response): Promise<any> => {
  try {
    const { ids, instructorId } = req.body;
    if (!Array.isArray(ids) || ids.length === 0 || !instructorId) {
      return res.status(400).json({ message: 'ids and instructorId are required' });
    }
    await prisma.module.updateMany({
      where: { id: { in: ids } },
      data: { instructorId }
    });
    res.json({ message: 'Instruktur berhasil dipindahkan' });
  } catch (error) {
    console.error('Error bulk reassigning modules:', error);
    res.status(500).json({ message: 'Error bulk reassigning modules' });
  }
};

// POST /api/modules/:id/like — toggle like (heart) for a module
export const toggleModuleLike = async (req: Request, res: Response): Promise<void> => {
  try {
    const moduleId = String(req.params.id);
    const userId = String(req.body.userId || '');

    if (!userId) {
      res.status(400).json({ error: 'userId wajib diisi' });
      return;
    }

    const existing = await prisma.moduleLike.findUnique({
      where: { userId_moduleId: { userId, moduleId } }
    });

    if (existing) {
      // Already liked → unlike
      await prisma.moduleLike.delete({ where: { id: existing.id } });
      res.json({ liked: false, message: 'Kursus dihapus dari wishlist' });
    } else {
      // Not liked → like
      await prisma.moduleLike.create({
        data: { userId, moduleId }
      });
      res.json({ liked: true, message: 'Kursus ditambahkan ke wishlist' });
    }
  } catch (error) {
    console.error('Error toggling module like:', error);
    res.status(500).json({ error: 'Gagal memproses like' });
  }
};

