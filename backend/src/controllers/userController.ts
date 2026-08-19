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

    const users = await prisma.user.findMany({
      where: filter,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        specialty: true,
        phone: true,
        bio: true,
        profilePicture: true,
        isVerified: true,
        createdAt: true,
        _count: {
          select: {
            enrollments: true,
            modules: true,
            submissions: true
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

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
        isVerified: true,
        emailNotifications: true,
        darkMode: true,
        createdAt: true,
        modules: {
          select: { id: true, title: true, category: true, isVerified: true }
        },
        enrollments: {
          select: { id: true, module: { select: { id: true, title: true } }, status: true }
        }
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
    const { name, email, password, role, specialty, isVerified } = req.body;

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email sudah terdaftar!' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password || 'password123', salt);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: role || 'STUDENT',
        specialty: specialty || null,
        isVerified: isVerified !== undefined ? Boolean(isVerified) : true
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        specialty: true,
        isVerified: true,
        createdAt: true,
      }
    });

    res.status(201).json({ message: 'Pengguna berhasil dibuat!', user: newUser });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Terjadi kesalahan pada server saat membuat pengguna.' });
  }
};

export const updateUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.id as string;
    const { name, email, password, role, specialty, phone, bio, profilePicture, emailNotifications, darkMode, isVerified } = req.body;

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
    if (isVerified !== undefined) updateData.isVerified = Boolean(isVerified);

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
        isVerified: true,
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

    // Clean up dependent user records if needed
    await prisma.submission.deleteMany({ where: { studentId: id } });
    await prisma.enrollment.deleteMany({ where: { studentId: id } });
    await prisma.message.deleteMany({ where: { senderId: id } });

    await prisma.user.delete({ where: { id } });

    res.status(200).json({ message: 'Pengguna berhasil dihapus!' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Terjadi kesalahan pada server saat menghapus pengguna. Pastikan pengguna tidak memiliki relasi modul aktif.' });
  }
};

export const bulkUpdateRole = async (req: Request, res: Response): Promise<any> => {
  try {
    const { ids, role } = req.body;
    if (!Array.isArray(ids) || ids.length === 0 || !role) {
      return res.status(400).json({ message: 'ID pengguna dan Role baru wajib diisi' });
    }

    await prisma.user.updateMany({
      where: { id: { in: ids } },
      data: { role: role.toUpperCase() as Role }
    });

    res.json({ message: `Berhasil mengubah role ${ids.length} pengguna menjadi ${role}` });
  } catch (error) {
    console.error('Error bulk updating role:', error);
    res.status(500).json({ message: 'Gagal mengubah role secara massal' });
  }
};

export const bulkVerifyUsers = async (req: Request, res: Response): Promise<any> => {
  try {
    const { ids, isVerified } = req.body;
    if (!Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({ message: 'Daftar ID pengguna wajib disertakan' });
    }

    await prisma.user.updateMany({
      where: { id: { in: ids } },
      data: { isVerified: Boolean(isVerified) }
    });

    res.json({ message: `Berhasil memperbarui status verifikasi ${ids.length} pengguna` });
  } catch (error) {
    console.error('Error bulk verifying users:', error);
    res.status(500).json({ message: 'Gagal memperbarui verifikasi massal' });
  }
};

export const bulkDeleteUsers = async (req: Request, res: Response): Promise<any> => {
  try {
    const { ids } = req.body;
    if (!Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({ message: 'Daftar ID pengguna wajib disertakan' });
    }

    for (const id of ids) {
      try {
        await prisma.submission.deleteMany({ where: { studentId: id } });
        await prisma.enrollment.deleteMany({ where: { studentId: id } });
        await prisma.message.deleteMany({ where: { senderId: id } });
        await prisma.user.delete({ where: { id } });
      } catch (e) {
        console.warn(`Could not delete user ${id}`, e);
      }
    }

    res.json({ message: `Selesai memproses penghapusan massal ${ids.length} pengguna` });
  } catch (error) {
    console.error('Error bulk deleting users:', error);
    res.status(500).json({ message: 'Gagal menghapus pengguna secara massal' });
  }
};

export const resetUserPassword = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.id as string;
    const { newPassword } = req.body;

    if (!newPassword || newPassword.length < 6) {
      return res.status(400).json({ message: 'Password baru minimal 6 karakter' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    await prisma.user.update({
      where: { id },
      data: { password: hashedPassword }
    });

    res.json({ message: 'Password pengguna berhasil direset!' });
  } catch (error) {
    console.error('Error resetting password:', error);
    res.status(500).json({ message: 'Gagal mereset password pengguna' });
  }
};
