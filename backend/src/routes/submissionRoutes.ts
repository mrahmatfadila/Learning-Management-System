import { Router } from 'express';
import {
  submitTask,
  getSubmissionsByTask,
  gradeSubmission,
  uploadSubmissionFile,
  downloadSubmissionFile
} from '../controllers/submissionController';

const router = Router();

router.post('/', submitTask);
router.post('/upload', uploadSubmissionFile);
router.get('/download/:filename', downloadSubmissionFile);
router.get('/task/:taskId', getSubmissionsByTask);
router.patch('/:id/grade', gradeSubmission);

export default router;
