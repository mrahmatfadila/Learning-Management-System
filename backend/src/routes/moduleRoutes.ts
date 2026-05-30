import { Router } from 'express';
import { getAllModules, getModuleById, createModule, updateModule, deleteModule, verifyModule } from '../controllers/moduleController';

const router = Router();

router.get('/', getAllModules);
router.get('/:id', getModuleById);
router.post('/', createModule);
router.put('/:id', updateModule);
router.delete('/:id', deleteModule);
router.patch('/:id/verify', verifyModule);

export default router;
