import { Router } from 'express';
import {
  getMessagesByChannel,
  createMessage,
  pinMessage,
  deleteMessage
} from '../controllers/messageController';

const router = Router();

router.get('/:channelId', getMessagesByChannel);
router.post('/', createMessage);
router.patch('/:id/pin', pinMessage);
router.delete('/:id', deleteMessage);

export default router;
