import { Request, Response } from 'express';
import prisma from '../lib/prisma';

export const getLessonsByModuleId = async (req: Request, res: Response): Promise<any> => {
  try {
    const moduleId = req.params.moduleId as string;
    const contentApiSlug = moduleId === '67adde6d-81a6-4470-b88d-506b733f87ee' ? 'html' : moduleId;

    // Coba ambil dari Content API terlebih dahulu
    try {
      const contentRes = await fetch(`http://127.0.0.1:5001/api/v1/modules/${contentApiSlug}`, {
        signal: AbortSignal.timeout(2000)
      });
      if (contentRes.ok) {
        const contentData = await contentRes.json();
        if (contentData.success && contentData.data?.lessons?.length > 0) {
          return res.json(contentData.data.lessons);
        }
      }
    } catch {}

    let lessons = await prisma.lesson.findMany({
      where: { moduleId },
      orderBy: { order: 'asc' }
    });

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

    if (lessons.length === 0 && aliasMap[moduleId]) {
      lessons = await prisma.lesson.findMany({
        where: { moduleId: aliasMap[moduleId] },
        orderBy: { order: 'asc' }
      });
    }

    res.json(lessons);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching lessons' });
  }
};

export const getLessonById = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.id as string;

    // 🌐 INTEGRASI CONTENT-API-SERVER (lms_content_db)
    try {
      const contentRes = await fetch(`http://127.0.0.1:5001/api/v1/lessons/${id}`, {
        signal: AbortSignal.timeout(2000)
      });
      if (contentRes.ok) {
        const contentData = await contentRes.json();
        if (contentData.success && contentData.data) {
          const l = contentData.data;
          return res.json({
            id: l.id,
            moduleId: l.moduleId,
            chapterId: l.chapterId,
            chapter: l.chapter,
            title: l.title,
            type: l.type,
            order: l.order,
            content: typeof l.content === 'object' ? JSON.stringify(l.content) : l.content,
            w3schoolStructure: l.w3schoolStructure,
            starterCode: l.content?.code || null,
            videoUrl: null,
            createdAt: new Date(),
            updatedAt: new Date()
          });
        }
      }
    } catch {}

    let lesson = await prisma.lesson.findUnique({ where: { id } });
    if (!lesson) {
      lesson = await prisma.lesson.findFirst({
        where: {
          OR: [
            { id: { contains: id } },
            { title: { contains: id, mode: 'insensitive' } }
          ]
        }
      });
    }
    if (!lesson) return res.status(404).json({ message: 'Lesson not found' });
    res.json(lesson);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching lesson' });
  }
};

export const createLesson = async (req: Request, res: Response): Promise<any> => {
  try {
    const { moduleId, title, content, videoUrl, type, order, chapter } = req.body;
    if (!moduleId || !title || !type) {
      return res.status(400).json({ message: 'moduleId, title, and type are required' });
    }
    
    let chapterId = null;
    if (chapter) {
      const existingChapter = await prisma.chapter.findFirst({ where: { moduleId, title: chapter } });
      if (existingChapter) {
        chapterId = existingChapter.id;
      } else {
        const count = await prisma.chapter.count({ where: { moduleId } });
        const newChapter = await prisma.chapter.create({ data: { moduleId, title: chapter, order: count } });
        chapterId = newChapter.id;
      }
    }

    const newLesson = await prisma.lesson.create({
      data: { moduleId, title, content, videoUrl, type, order: order || 0, chapter, chapterId }
    });
    res.status(201).json(newLesson);
  } catch (error) {
    res.status(500).json({ message: 'Error creating lesson' });
  }
};

export const updateLesson = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.id as string;
    const { title, content, videoUrl, type, order, chapter } = req.body;

    const data: any = {};
    if (title !== undefined) data.title = title;
    if (content !== undefined) data.content = content;
    if (videoUrl !== undefined) data.videoUrl = videoUrl;
    if (type !== undefined) data.type = type;
    if (order !== undefined) data.order = order;
    if (chapter !== undefined) data.chapter = chapter;

    const updated = await prisma.lesson.update({
      where: { id },
      data
    });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Error updating lesson' });
  }
};

export const deleteLesson = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.id as string;
    await prisma.lesson.delete({ where: { id } });
    res.json({ message: 'Lesson deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting lesson' });
  }
};
