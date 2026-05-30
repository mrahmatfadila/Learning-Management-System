import { Router } from 'express';
import {
  getTasksByModule,
  getTasksByStudent,
  createTask,
  updateTask,
  deleteTask
} from '../controllers/taskController';

const router = Router();

router.get('/module/:moduleId', getTasksByModule);
router.get('/student/:studentId', getTasksByStudent);
router.post('/', createTask);
router.patch('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;
