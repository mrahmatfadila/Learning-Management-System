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
// Mendukung query ?full=true jika ingin memuat seluruh isi materi lengkap di daftar
export const getModuleById = async (req: Request, res: Response): Promise<any> => {
  try {
    const rawId = req.params.id as string;
    const isFull = req.query.full === 'true' || req.query.content === 'true';

    const aliasMap: Record<string, string> = {
      'html': '67adde6d-81a6-4470-b88d-506b733f87ee',
      '67adde6d-81a6-4470-b88d-506b733f87ee': '67adde6d-81a6-4470-b88d-506b733f87ee',
      'css': 'ba1383a2-219d-44ab-bf63-804d5a0f0902',
      'ba1383a2-219d-44ab-bf63-804d5a0f0902': 'ba1383a2-219d-44ab-bf63-804d5a0f0902',
      'mastering-ui-design-for-impactful-solutions': 'javascript',
      'javascript': 'javascript'
    };

    const targetId = aliasMap[rawId] || rawId;

    let moduleItem = await prisma.module.findUnique({
      where: { id: targetId },
      include: {
        chapters: {
          orderBy: { order: 'asc' },
          include: {
            lessons: {
              orderBy: { order: 'asc' }
            }
          }
        },
        lessons: {
          orderBy: { order: 'asc' }
        }
      }
    });

    if (!moduleItem) {
      moduleItem = await prisma.module.findFirst({
        where: {
          OR: [
            { id: { contains: rawId, mode: 'insensitive' } },
            { title: { contains: rawId, mode: 'insensitive' } }
          ]
        },
        include: {
          chapters: {
            orderBy: { order: 'asc' },
            include: {
              lessons: {
                orderBy: { order: 'asc' }
              }
            }
          },
          lessons: {
            orderBy: { order: 'asc' }
          }
        }
      });
    }

    if (!moduleItem) {
      return res.status(404).json({ success: false, message: `Module with ID '${rawId}' not found` });
    }

    // Helper untuk mem-parsing konten JSON jika ?full=true diminta
    const formatLessonItem = (l: any) => {
      let parsedContent: any = l.content;
      try {
        if (l.content && typeof l.content === 'string' && l.content.startsWith('{')) {
          parsedContent = JSON.parse(l.content);
        }
      } catch {
        parsedContent = l.content;
      }

      if (!isFull) {
        return {
          id: l.id,
          title: l.title,
          type: l.type,
          order: l.order,
          chapter: l.chapter,
          chapterId: l.chapterId,
          hasContent: !!l.content
        };
      }

      return {
        id: l.id,
        title: l.title,
        type: l.type,
        order: l.order,
        chapter: l.chapter,
        chapterId: l.chapterId,
        content: parsedContent
      };
    };

    const formattedChapters = moduleItem.chapters.map((chap) => ({
      id: chap.id,
      title: chap.title,
      order: chap.order,
      lessons: chap.lessons.map(formatLessonItem)
    }));

    res.json({
      success: true,
      data: {
        id: moduleItem.id,
        title: moduleItem.title,
        category: moduleItem.category,
        description: moduleItem.description,
        thumbnail: moduleItem.thumbnail,
        level: moduleItem.level,
        duration: moduleItem.duration,
        totalChapters: formattedChapters.length,
        totalLessons: moduleItem.lessons.length,
        chapters: formattedChapters,
        lessons: moduleItem.lessons.map(formatLessonItem)
      }
    });
  } catch (error: any) {
    console.error('Error fetching module by ID:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
  }
};

// GET /api/v1/lessons/:id
// Menghasilkan struktur ala W3Schools (Penjelasan judul, isi materi, coding, penjelasan coding satu per satu, pertanyaan kuis, dan codingan latihan)
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

    let parsedContent: any = {};
    try {
      if (lesson.content && typeof lesson.content === 'string' && lesson.content.startsWith('{')) {
        parsedContent = JSON.parse(lesson.content);
      } else {
        parsedContent = { theory: lesson.content };
      }
    } catch {
      parsedContent = { theory: lesson.content };
    }

    // Ekstrak bagian-bagian gaya W3Schools
    const overview = parsedContent.overview || `Pelajari konsep fundamental dan praktik langsung mengenai ${lesson.title}.`;
    const theory = parsedContent.theory || '';
    const code = parsedContent.code || lesson.starterCode || '';
    const codeExplanation = parsedContent.codeExplanation || [
      'Struktur dokumen diawali dengan tag pembuka dan ditutup dengan tag penutup.',
      'Konten di dalam tag akan dirender secara visual oleh browser.',
      'Atribut memberikan konfigurasi dan konteks tambahan pada elemen terkait.'
    ];
    const quiz = parsedContent.quiz || null;
    const exercise = parsedContent.challenge || parsedContent.exercise || null;

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
        w3schoolStructure: {
          penjelasanJudul: overview,
          isiMateri: theory,
          contohCoding: code,
          penjelasanCodingSatuPerSatu: codeExplanation,
          pertanyaanKuis: quiz,
          codinganLatihan: exercise
        },
        // Backward compatibility payload
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
