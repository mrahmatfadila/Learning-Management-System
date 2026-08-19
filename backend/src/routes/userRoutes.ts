import express from 'express';
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  bulkUpdateRole,
  bulkVerifyUsers,
  bulkDeleteUsers,
  resetUserPassword
} from '../controllers/userController';

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.post('/bulk-role', bulkUpdateRole);
router.post('/bulk-verify', bulkVerifyUsers);
router.post('/bulk-delete', bulkDeleteUsers);
router.post('/:id/reset-password', resetUserPassword);

export default router;
