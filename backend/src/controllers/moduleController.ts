import { Request, Response } from 'express';
import prisma from '../lib/prisma';

export const getAllModules = async (req: Request, res: Response): Promise<any> => {
  try {
    const modules = await prisma.module.findMany({
      include: {
        instructor: true,
        chapters: true,
        lessons: {
          select: { id: true, title: true, type: true, order: true, chapter: true }
        },
        enrollments: true
      },
      orderBy: { createdAt: 'desc' }
    });

    res.json(modules);
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
      const contentApiSlug = id === '67adde6d-81a6-4470-b88d-506b733f87ee' ? 'html' : id;
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

    res.json(moduleItem);
  } catch (error) {
    console.error('Error fetching module:', error);
    res.status(500).json({ message: 'Error fetching module' });
  }
};

export const createModule = async (req: Request, res: Response): Promise<any> => {
  try {
    const { title, category, description, instructorId } = req.body;
    
    if (!title || !category || !instructorId) {
      return res.status(400).json({ message: 'Title, category, and instructorId are required' });
    }

    const newModule = await prisma.module.create({
      data: {
        title,
        category,
        description,
        instructorId
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
    const { title, category, description } = req.body;

    const existingModule = await prisma.module.findUnique({ where: { id } });
    if (!existingModule) {
      return res.status(404).json({ message: 'Module not found' });
    }

    const updatedModule = await prisma.module.update({
      where: { id },
      data: {
        title: title || existingModule.title,
        category: category || existingModule.category,
        description: description !== undefined ? description : existingModule.description
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
