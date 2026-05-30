import { Request, Response } from 'express';
import prisma from '../lib/prisma';

export const getLessonsByModuleId = async (req: Request, res: Response): Promise<any> => {
  try {
    const moduleId = req.params.moduleId as string;
    const lessons = await prisma.lesson.findMany({
      where: { moduleId },
      orderBy: { order: 'asc' }
    });
    res.json(lessons);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching lessons' });
  }
};

export const getLessonById = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.id as string;
    const lesson = await prisma.lesson.findUnique({ where: { id } });
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
    
    const currentLesson = await prisma.lesson.findUnique({ where: { id } });
    if (!currentLesson) return res.status(404).json({ message: 'Lesson not found' });
    
    let chapterId = currentLesson.chapterId;
    if (chapter && chapter !== currentLesson.chapter) {
      const existingChapter = await prisma.chapter.findFirst({ where: { moduleId: currentLesson.moduleId, title: chapter } });
      if (existingChapter) {
        chapterId = existingChapter.id;
      } else {
        const count = await prisma.chapter.count({ where: { moduleId: currentLesson.moduleId } });
        const newChapter = await prisma.chapter.create({ data: { moduleId: currentLesson.moduleId, title: chapter, order: count } });
        chapterId = newChapter.id;
      }
    }

    const updatedLesson = await prisma.lesson.update({
      where: { id },
      data: { title, content, videoUrl, type, order, chapter, chapterId }
    });
    res.json(updatedLesson);
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
