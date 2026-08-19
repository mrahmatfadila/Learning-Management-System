import { Router } from 'express';
import {
  getModuleReviews,
  upsertModuleReview,
  deleteModuleReview,
  getLessonComments,
  createLessonComment,
  deleteLessonComment
} from '../controllers/reviewController';

const router = Router();

// Module Review Routes
router.get('/modules/:moduleId/reviews', getModuleReviews);
router.post('/modules/:moduleId/reviews', upsertModuleReview);
router.delete('/reviews/:reviewId', deleteModuleReview);

// Lesson Comment Routes
router.get('/lessons/:lessonId/comments', getLessonComments);
router.post('/lessons/:lessonId/comments', createLessonComment);
router.delete('/lessons/comments/:commentId', deleteLessonComment);

export default router;
