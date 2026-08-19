import { Router } from 'express';
import {
  getAllQuizizz,
  getQuizizzById,
  createQuizizz,
  deleteQuizizz,
  submitQuizizzAttempt,
  getQuizizzLeaderboard
} from '../controllers/quizizzController';

const router = Router();

router.get('/', getAllQuizizz);
router.get('/:id', getQuizizzById);
router.post('/', createQuizizz);
router.delete('/:id', deleteQuizizz);
router.post('/attempt', submitQuizizzAttempt);
router.get('/:id/leaderboard', getQuizizzLeaderboard);

export default router;
