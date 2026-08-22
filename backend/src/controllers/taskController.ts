import { Request, Response } from 'express';
import prisma from '../lib/prisma';

export const getTasksByModule = async (req: Request, res: Response): Promise<any> => {
  try {
    const moduleId = req.params.moduleId as string;
    const tasks = await prisma.task.findMany({
      where: { moduleId },
      include: {
        submissions: true,
        assignedStudents: { select: { id: true, name: true, profilePicture: true } }
      },
      orderBy: { createdAt: 'desc' }
    });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tasks' });
  }
};

export const getTasksByStudent = async (req: Request, res: Response): Promise<any> => {
  try {
    const studentId = req.params.studentId as string;

    const enrollments = await prisma.enrollment.findMany({
      where: { studentId, status: 'APPROVED' },
      select: { moduleId: true }
    });
    const moduleIds = enrollments.map(e => e.moduleId);

    const tasks = await prisma.task.findMany({
      where: {
        moduleId: { in: moduleIds },
        OR: [
          { assignedStudents: { some: { id: studentId } } },
          { assignedStudents: { none: {} } }
        ]
      },
      include: {
        module: {
          select: {
            title: true,
            instructor: { select: { id: true, name: true, profilePicture: true } }
          }
        },
        submissions: { where: { studentId } }
      },
      orderBy: { createdAt: 'desc' }
    });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching student tasks' });
  }
};


export const createTask = async (req: Request, res: Response): Promise<any> => {
  try {
    const { moduleId, title, description, deadline, studentIds } = req.body;
    const data: any = { 
      moduleId, 
      title, 
      description, 
      deadline: deadline ? new Date(deadline) : null,
    };

    if (studentIds && studentIds.length > 0) {
      data.assignedStudents = {
        connect: studentIds.map((id: string) => ({ id }))
      };
    }

    const task = await prisma.task.create({ data });
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: 'Error creating task' });
  }
};

export const updateTask = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.id as string;
    const { title, description, deadline } = req.body;
    const data: any = {};
    if (title !== undefined) data.title = title;
    if (description !== undefined) data.description = description;
    if (deadline !== undefined) data.deadline = deadline ? new Date(deadline) : null;
    const task = await prisma.task.update({ where: { id }, data });
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: 'Error updating task' });
  }
};


export const deleteTask = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.id as string;
    await prisma.task.delete({ where: { id } });
    res.json({ message: 'Task deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting task' });
  }
};
