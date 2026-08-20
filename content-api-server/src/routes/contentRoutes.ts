import { Router, Request, Response, NextFunction } from 'express';
import {
  getAllModules,
  getModuleById,
  getLessonById,
  createModule,
  createLesson
} from '../controllers/contentController';

const router = Router();

// Master API Key Middleware for Admin writes
const requireMasterKey = (req: Request, res: Response, next: NextFunction): any => {
  const masterKey = process.env.API_MASTER_KEY || 'content_provider_master_secret_2026_xyz';
  const headerKey = req.headers['x-api-key'] || req.headers['authorization'];

  if (!headerKey || headerKey !== masterKey) {
    return res.status(403).json({
      success: false,
      message: 'Forbidden: You do not have permission to modify content. Content is read-only.'
    });
  }
  next();
};

// 🌐 Public Read-Only Routes
router.get('/modules', getAllModules);
router.get('/modules/:id', getModuleById);
router.get('/lessons/:id', getLessonById);

// 🔒 Protected Admin Write Routes
router.post('/admin/modules', requireMasterKey, createModule);
router.post('/admin/lessons', requireMasterKey, createLesson);

export default router;
