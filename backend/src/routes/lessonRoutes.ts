import { Router } from 'express';
import { getLessonsByModuleId, getLessonById, createLesson, updateLesson, deleteLesson } from '../controllers/lessonController';

const router = Router();

router.get('/module/:moduleId', getLessonsByModuleId);
router.get('/:id', getLessonById);
router.post('/', createLesson);
router.put('/:id', updateLesson);
router.delete('/:id', deleteLesson);

export default router;
