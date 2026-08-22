import { Router } from 'express';
import {
  getAllModules,
  getModuleById,
  createModule,
  updateModule,
  deleteModule,
  verifyModule,
  duplicateModule,
  bulkVerifyModules,
  bulkReassignModules,
  toggleModuleLike
} from '../controllers/moduleController';

const router = Router();

router.get('/', getAllModules);
router.post('/bulk-verify', bulkVerifyModules);
router.post('/bulk-reassign', bulkReassignModules);
router.get('/:id', getModuleById);
router.post('/', createModule);
router.put('/:id', updateModule);
router.delete('/:id', deleteModule);
router.patch('/:id/verify', verifyModule);
router.post('/:id/duplicate', duplicateModule);
router.post('/:id/like', toggleModuleLike);

export default router;
