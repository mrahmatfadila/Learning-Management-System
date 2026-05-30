import { Request, Response } from 'express';
import prisma from '../lib/prisma';

const senderSelect = {
  select: {
    id: true as const,
    name: true as const,
    email: true as const,
    role: true as const,
    profilePicture: true as const,
  },
};

export const getMessagesByChannel = async (req: Request, res: Response): Promise<void> => {
  try {
    const channelId = req.params['channelId'] as string | undefined;

    if (!channelId) {
      res.status(400).json({ message: 'channelId is required' });
      return;
    }

    const messages = await prisma.message.findMany({
      where: { channelId },
      orderBy: { createdAt: 'asc' },
      take: 100,
      include: { sender: senderSelect },
    });

    res.status(200).json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ message: 'Error fetching messages' });
  }
};

export const createMessage = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as { content?: string; senderId?: string; channelId?: string; messageType?: string; replyToId?: string };
    const { content, senderId, channelId } = body;

    if (!content || !senderId || !channelId) {
      res.status(400).json({ message: 'content, senderId, and channelId are required' });
      return;
    }

    const newMessage = await prisma.message.create({
      data: {
        content,
        senderId,
        channelId,
      },
      include: { sender: senderSelect },
    });

    res.status(201).json(newMessage);
  } catch (error) {
    console.error('Error creating message:', error);
    res.status(500).json({ message: 'Error creating message' });
  }
};

export const pinMessage = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params['id'] as string | undefined;

    if (!id) {
      res.status(400).json({ message: 'Message id is required' });
      return;
    }

    const existingMessage = await prisma.message.findUnique({ where: { id } });

    if (!existingMessage) {
      res.status(404).json({ message: 'Message not found' });
      return;
    }

    const newPinStatus = !existingMessage.isPinned;

    // Unpin all other messages in the same channel before pinning the new one
    if (newPinStatus) {
      await prisma.message.updateMany({
        where: {
          channelId: existingMessage.channelId,
          isPinned: { equals: true },
        },
        data: { isPinned: false },
      });
    }

    const updatedMessage = await prisma.message.update({
      where: { id },
      data: { isPinned: newPinStatus },
      include: { sender: senderSelect },
    });

    res.status(200).json(updatedMessage);
  } catch (error) {
    console.error('Error pinning message:', error);
    res.status(500).json({ message: 'Error pinning message' });
  }
};

export const deleteMessage = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params['id'] as string | undefined;

    if (!id) {
      res.status(400).json({ message: 'Message id is required' });
      return;
    }

    const existingMessage = await prisma.message.findUnique({ where: { id } });

    if (!existingMessage) {
      res.status(404).json({ message: 'Message not found' });
      return;
    }

    const updatedMessage = await prisma.message.update({
      where: { id },
      data: { isDeleted: true },
      include: { sender: senderSelect },
    });

    res.status(200).json(updatedMessage);
  } catch (error) {
    console.error('Error deleting message:', error);
    res.status(500).json({ message: 'Error deleting message' });
  }
};
