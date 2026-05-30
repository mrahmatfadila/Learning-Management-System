import { Router } from 'express';
import { login, register, verifyEmail, resendVerification } from '../controllers/authController';

const router = Router();

// POST /api/auth/register
router.post('/register', register);

// POST /api/auth/login
router.post('/login', login);

router.post('/verify-email', verifyEmail);
router.post('/resend-verification', resendVerification);

export default router;
