import { Request, Response } from 'express';
import prisma from '../lib/prisma';

// ==========================================
// 🌐 PUBLIC READ-ONLY CONTENT API ENDPOINTS
// ==========================================

// GET /api/v1/modules
export const getAllModules = async (req: Request, res: Response): Promise<any> => {
  try {
    const modules = await prisma.module.findMany({
      where: { isPublished: true },
      orderBy: { order: 'asc' },
      include: {
        chapters: {
          orderBy: { order: 'asc' },
          select: { id: true, title: true, order: true }
        },
        _count: {
          select: { lessons: true, chapters: true }
        }
      }
    });

    const response = modules.map((m) => ({
      id: m.id,
      title: m.title,
      category: m.category,
      description: m.description,
      thumbnail: m.thumbnail,
      level: m.level,
      duration: m.duration,
      order: m.order,
      totalLessons: m._count.lessons,
      totalChapters: m._count.chapters,
      chapters: m.chapters
    }));

    res.json({
      success: true,
      count: response.length,
      data: response
    });
  } catch (error: any) {
    console.error('Error fetching modules from Content API:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
  }
};

// GET /api/v1/modules/:id
export const getModuleById = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.id as string;
    const moduleItem = await prisma.module.findUnique({
      where: { id },
      include: {
        chapters: {
          orderBy: { order: 'asc' },
          include: {
            lessons: {
              orderBy: { order: 'asc' },
              select: {
                id: true,
                title: true,
                type: true,
                order: true,
                chapter: true
              }
            }
          }
        },
        lessons: {
          orderBy: { order: 'asc' },
          select: {
            id: true,
            title: true,
            type: true,
            order: true,
            chapter: true,
            chapterId: true
          }
        }
      }
    });

    if (!moduleItem) {
      return res.status(404).json({ success: false, message: `Module with ID '${id}' not found` });
    }

    res.json({
      success: true,
      data: moduleItem
    });
  } catch (error: any) {
    console.error('Error fetching module by ID:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
  }
};

// GET /api/v1/lessons/:id
export const getLessonById = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.id as string;
    const lesson = await prisma.lesson.findUnique({
      where: { id },
      include: {
        module: {
          select: { id: true, title: true, category: true }
        },
        chapterRef: {
          select: { id: true, title: true, order: true }
        }
      }
    });

    if (!lesson) {
      return res.status(404).json({ success: false, message: `Lesson with ID '${id}' not found` });
    }

    // Parse JSON payload inside content if applicable
    let parsedContent: any = lesson.content;
    try {
      if (lesson.content && typeof lesson.content === 'string' && lesson.content.startsWith('{')) {
        parsedContent = JSON.parse(lesson.content);
      }
    } catch {
      parsedContent = lesson.content;
    }

    res.json({
      success: true,
      data: {
        id: lesson.id,
        moduleId: lesson.moduleId,
        moduleTitle: lesson.module?.title,
        chapter: lesson.chapter,
        chapterId: lesson.chapterId,
        title: lesson.title,
        type: lesson.type,
        order: lesson.order,
        starterCode: lesson.starterCode,
        videoUrl: lesson.videoUrl,
        content: parsedContent
      }
    });
  } catch (error: any) {
    console.error('Error fetching lesson by ID:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
  }
};

// ==========================================
// 🔒 ADMIN ONLY WRITE ENDPOINTS (Protected)
// ==========================================

export const createModule = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id, title, category, description, thumbnail, level, duration, order } = req.body;
    if (!id || !title || !category) {
      return res.status(400).json({ success: false, message: 'id, title, and category are required' });
    }

    const created = await prisma.module.create({
      data: { id, title, category, description, thumbnail, level, duration, order: order || 0 }
    });

    res.status(201).json({ success: true, message: 'Module created successfully', data: created });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createLesson = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id, moduleId, chapterId, chapter, title, type, content, starterCode, videoUrl, order } = req.body;
    if (!id || !moduleId || !title) {
      return res.status(400).json({ success: false, message: 'id, moduleId, and title are required' });
    }

    const contentStr = typeof content === 'object' ? JSON.stringify(content) : content;

    const created = await prisma.lesson.create({
      data: {
        id,
        moduleId,
        chapterId: chapterId || null,
        chapter: chapter || null,
        title,
        type: type || 'code',
        content: contentStr,
        starterCode: starterCode || null,
        videoUrl: videoUrl || null,
        order: order || 0
      }
    });

    res.status(201).json({ success: true, message: 'Lesson created successfully', data: created });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
