import express from 'express';
import { createChapter, updateChapter, deleteChapter } from '../controllers/chapterController';

const router = express.Router();

router.post('/', createChapter);
router.put('/:id', updateChapter);
router.delete('/:id', deleteChapter);

export default router;
