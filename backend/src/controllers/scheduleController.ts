import { Request, Response } from 'express';
import prisma from '../lib/prisma';

export const createSchedule = async (req: Request, res: Response): Promise<any> => {
  try {
    const { title, description, date, startTime, endTime, location, instructorId, moduleId } = req.body;
    const data: any = {
      title,
      description,
      date: new Date(date),
      startTime,
      endTime,
      location,
      instructorId,
    };
    if (moduleId) data.moduleId = moduleId;

    const schedule = await prisma.schedule.create({ data });
    res.status(201).json({ message: 'Schedule created', schedule });
  } catch (error) {
    console.error('Error creating schedule:', error);
    res.status(500).json({ error: 'Failed to create schedule' });
  }
};

export const getInstructorSchedules = async (req: Request, res: Response): Promise<any> => {
  try {
    const instructorId = req.params.instructorId as string;
    const schedules = await prisma.schedule.findMany({
      where: { instructorId },
      include: { module: true },
      orderBy: { date: 'asc' }
    });
    res.status(200).json(schedules);
  } catch (error) {
    console.error('Error fetching instructor schedules:', error);
    res.status(500).json({ error: 'Failed to fetch schedules' });
  }
};

export const getStudentSchedules = async (req: Request, res: Response): Promise<any> => {
  try {
    const studentId = req.params.studentId as string;
    
    // Find modules enrolled by student
    const enrollments = await prisma.enrollment.findMany({
      where: { studentId },
      select: { moduleId: true }
    });
    const moduleIds = enrollments.map(e => e.moduleId);

    // Find instructors of these modules
    const modules = await prisma.module.findMany({
      where: { id: { in: moduleIds } },
      select: { instructorId: true }
    });
    const instructorIds = Array.from(new Set(modules.map(m => m.instructorId)));

    // Fetch schedules: either direct module match OR general schedule (moduleId: null) from student's instructors
    const schedules = await prisma.schedule.findMany({
      where: {
        OR: [
          { moduleId: { in: moduleIds } },
          {
            AND: [
              { moduleId: null },
              { instructorId: { in: instructorIds } }
            ]
          }
        ]
      },
      include: { 
        module: true,
        instructor: { select: { id: true, name: true } }
      },
      orderBy: { date: 'asc' }
    });
    res.status(200).json(schedules);
  } catch (error) {
    console.error('Error fetching student schedules:', error);
    res.status(500).json({ error: 'Failed to fetch schedules' });
  }
};

export const deleteSchedule = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.id as string;
    await prisma.schedule.delete({ where: { id } });
    res.status(200).json({ message: 'Schedule deleted' });
  } catch (error) {
    console.error('Error deleting schedule:', error);
    res.status(500).json({ error: 'Failed to delete schedule' });
  }
};
