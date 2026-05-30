import { Request, Response } from 'express';
import prisma from '../lib/prisma';

export const getAllModules = async (req: Request, res: Response): Promise<any> => {
  try {
    const modules = await prisma.module.findMany({
      include: {
        instructor: { select: { id: true, name: true, email: true, profilePicture: true } },
        _count: {
          select: { enrollments: true, lessons: true, tasks: true }
        }
      }
    });

    // Format the response to match what frontend expects for cards
    const formattedModules = modules.map(m => ({
      id: m.id,
      title: m.title,
      category: m.category,
      description: m.description,
      enr: m._count.enrollments,
      lessonsCount: m._count.lessons,
      tasksCount: m._count.tasks,
      instructor: m.instructor,
      isVerified: m.isVerified
    }));

    res.json(formattedModules);
  } catch (error) {
    console.error('Error fetching modules:', error);
    res.status(500).json({ message: 'Error fetching modules' });
  }
};

export const getModuleById = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.id as string;
    const moduleItem = await prisma.module.findUnique({
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
      return res.status(404).json({ message: 'Module not found' });
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
