import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import prisma, { pool } from '../lib/prisma';
import { Role } from '@prisma/client';

export const getUsers = async (req: Request, res: Response): Promise<any> => {
  try {
    const roleParam = req.query.role;
    let filter = {};
    if (typeof roleParam === 'string' && Object.values(Role).includes(roleParam.toUpperCase() as Role)) {
      filter = { role: roleParam.toUpperCase() as Role };
    }
    
    const roleStr = typeof roleParam === 'string' ? roleParam.toUpperCase() : undefined;

    const result = await pool.query(
      `SELECT id, name, email, role, specialty, "createdAt" FROM "User" ${roleStr ? 'WHERE role = $1' : ''} ORDER BY "createdAt" DESC`,
      roleStr ? [roleStr] : []
    );
    const users = result.rows;
    
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Terjadi kesalahan pada server saat mengambil data pengguna.' });
  }
};

export const getUserById = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.id as string;
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        specialty: true,
        phone: true,
        bio: true,
        profilePicture: true,
        emailNotifications: true,
        darkMode: true,
        createdAt: true,
      } as any
    });

    if (!user) {
      return res.status(404).json({ message: 'Pengguna tidak ditemukan.' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Terjadi kesalahan pada server saat mengambil data pengguna.' });
  }
};

export const createUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const { name, email, password, role, specialty } = req.body;

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email sudah terdaftar!' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: role || 'STUDENT',
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      }
    });

    if (role === 'INSTRUCTOR' && specialty) {
      await pool.query('UPDATE "User" SET specialty = $1 WHERE id = $2', [specialty, newUser.id]);
      (newUser as any).specialty = specialty;
    }

    res.status(201).json({ message: 'Pengguna berhasil dibuat!', user: newUser });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Terjadi kesalahan pada server saat membuat pengguna.' });
  }
};

export const updateUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.id as string;
    const { name, email, password, role, specialty, phone, bio, profilePicture, emailNotifications, darkMode } = req.body;

    const existingUser = await prisma.user.findUnique({ where: { id } });
    if (!existingUser) {
      return res.status(404).json({ message: 'Pengguna tidak ditemukan.' });
    }

    if (email && email !== existingUser.email) {
      const emailExists = await prisma.user.findUnique({ where: { email } });
      if (emailExists) {
        return res.status(400).json({ message: 'Email sudah digunakan pengguna lain!' });
      }
    }

    const updateData: any = {};
    if (name !== undefined) updateData.name = name;
    if (email !== undefined) updateData.email = email;
    if (role !== undefined) updateData.role = role;
    if (specialty !== undefined) updateData.specialty = specialty || null;
    if (phone !== undefined) updateData.phone = phone;
    if (bio !== undefined) updateData.bio = bio;
    if (profilePicture !== undefined) updateData.profilePicture = profilePicture;
    if (emailNotifications !== undefined) updateData.emailNotifications = emailNotifications;
    if (darkMode !== undefined) updateData.darkMode = darkMode;

    if (password && password.trim() !== '') {
      const salt = await bcrypt.genSalt(10);
      updateData.password = await bcrypt.hash(password, salt);
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: updateData,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        specialty: true,
        phone: true,
        bio: true,
        profilePicture: true,
        emailNotifications: true,
        darkMode: true,
        createdAt: true
      }
    });

    res.status(200).json({ message: 'Data pengguna berhasil diperbarui!', user: updatedUser });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Terjadi kesalahan pada server saat memperbarui data pengguna.' });
  }
};

export const deleteUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.id as string;

    const existingUser = await prisma.user.findUnique({ where: { id } });
    if (!existingUser) {
      return res.status(404).json({ message: 'Pengguna tidak ditemukan.' });
    }

    await prisma.user.delete({ where: { id } });

    res.status(200).json({ message: 'Pengguna berhasil dihapus!' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Terjadi kesalahan pada server saat menghapus pengguna. Pastikan pengguna tidak memiliki relasi dengan data lain.' });
  }
};
