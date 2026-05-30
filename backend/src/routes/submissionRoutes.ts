import { Router } from 'express';
import {
  submitTask,
  getSubmissionsByTask,
  gradeSubmission
} from '../controllers/submissionController';

const router = Router();

router.post('/', submitTask);
router.get('/task/:taskId', getSubmissionsByTask);
router.patch('/:id/grade', gradeSubmission);

export default router;
