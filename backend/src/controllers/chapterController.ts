import { Request, Response } from 'express';
import prisma from '../lib/prisma';

export const createChapter = async (req: Request, res: Response): Promise<any> => {
  try {
    const { moduleId, title } = req.body;
    const count = await prisma.chapter.count({ where: { moduleId } });
    const chapter = await prisma.chapter.create({
      data: { moduleId, title, order: count }
    });
    res.json(chapter);
  } catch (error) {
    res.status(500).json({ message: 'Error creating chapter' });
  }
};

export const updateChapter = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.id as string;
    const { title, order } = req.body;
    const chapter = await prisma.chapter.update({
      where: { id },
      data: { title, order }
    });
    res.json(chapter);
  } catch (error) {
    res.status(500).json({ message: 'Error updating chapter' });
  }
};

export const deleteChapter = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.id as string;
    await prisma.chapter.delete({ where: { id } });
    res.json({ message: 'Chapter deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting chapter' });
  }
};
