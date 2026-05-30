import { Router } from 'express';
import {
  enrollStudent,
  checkEnrollment,
  getPendingEnrollments,
  getAllEnrollmentsByInstructor,
  approveEnrollment,
  rejectEnrollment,
  updateEnrollmentProgress,
  getStudentsByModule,
  getStudentsByInstructor,
  getModulesByStudent,
  getCertificateById
} from '../controllers/enrollmentController';

const router = Router();

router.post('/', enrollStudent);                                      // POST   /api/enrollments
router.get('/check', checkEnrollment);                               // GET    /api/enrollments/check?studentId=&moduleId=
router.get('/pending', getPendingEnrollments);                       // GET    /api/enrollments/pending  (admin)
router.get('/all', getAllEnrollmentsByInstructor);                    // GET    /api/enrollments/all?instructorId= (history)
router.patch('/:id/approve', approveEnrollment);                     // PATCH  /api/enrollments/:id/approve
router.patch('/:id/reject', rejectEnrollment);                       // PATCH  /api/enrollments/:id/reject
router.patch('/progress', updateEnrollmentProgress);                 // PATCH  /api/enrollments/progress
router.get('/module/:moduleId', getStudentsByModule);                // GET    /api/enrollments/module/:moduleId
router.get('/instructor/:instructorId', getStudentsByInstructor);   // GET    /api/enrollments/instructor/:instructorId
router.get('/student/:studentId', getModulesByStudent);             // GET    /api/enrollments/student/:studentId
router.get('/certificate/:id', getCertificateById);                  // GET    /api/enrollments/certificate/:id

export default router;
