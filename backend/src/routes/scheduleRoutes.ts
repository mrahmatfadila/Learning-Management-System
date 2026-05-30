import express from 'express';
import { createSchedule, getInstructorSchedules, getStudentSchedules, deleteSchedule } from '../controllers/scheduleController';

const router = express.Router();

router.post('/', createSchedule);
router.get('/instructor/:instructorId', getInstructorSchedules);
router.get('/student/:studentId', getStudentSchedules);
router.delete('/:id', deleteSchedule);

export default router;
