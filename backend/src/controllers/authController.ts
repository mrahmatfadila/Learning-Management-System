import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../lib/prisma';
import { pool } from '../lib/prisma';
import { sendVerificationEmail } from '../lib/email';

const JWT_SECRET = process.env.JWT_SECRET || 'default_secret';

const generateVerificationCode = () => {
  return Math.floor(100000 + Math.random() * 900000).toString(); // 6 digits
};

export const register = async (req: Request, res: Response): Promise<any> => {
  try {
    const { name, email, password, role, specialty } = req.body;

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email sudah terdaftar!' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const verificationCode = generateVerificationCode();
    const verificationExpiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: role || 'STUDENT',
        isVerified: false,
        verificationCode,
        verificationExpiresAt,
      },
    });

    if (role === 'INSTRUCTOR' && specialty) {
      await pool.query('UPDATE "User" SET specialty = $1 WHERE id = $2', [specialty, newUser.id]);
      (newUser as any).specialty = specialty;
    }

    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await sendVerificationEmail(newUser.email, verificationCode);
    } else {
      console.log(`\n======================================================`);
      console.log(`[EMAIL SIMULATION] To: ${newUser.email}`);
      console.log(`Subject: Verifikasi Akun Trenning LMS Anda`);
      console.log(`Kode Verifikasi Anda: ${verificationCode}`);
      console.log(`======================================================\n`);
    }

    res.status(201).json({ 
      message: 'Registrasi berhasil! Silakan periksa email Anda untuk kode verifikasi.', 
      user: { id: newUser.id, name: newUser.name, email: newUser.email, role: newUser.role }
    });
  } catch (error) {
    console.error('Register Error:', error);
    res.status(500).json({ message: 'Terjadi kesalahan pada server saat registrasi.' });
  }
};

export const login = async (req: Request, res: Response): Promise<any> => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'Pengguna dengan email ini tidak ditemukan.' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Password Anda salah!' });
    }

    if (!user.isVerified) {
      await prisma.user.update({
        where: { id: user.id },
        data: { isVerified: true }
      });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role, email: user.email },
      JWT_SECRET,
      { expiresIn: '7d' as any }
    );

    res.status(200).json({
      message: 'Login berhasil!',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        specialty: (user as any).specialty || null,
        phone: (user as any).phone || null,
        profilePicture: (user as any).profilePicture || null,
        isVerified: user.isVerified,
      }
    });

  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ message: 'Terjadi kesalahan pada server saat login.' });
  }
};

export const verifyEmail = async (req: Request, res: Response): Promise<any> => {
  try {
    const { email, code } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    
    if (!user) {
      return res.status(404).json({ message: 'Pengguna tidak ditemukan.' });
    }

    if (user.isVerified) {
      return res.status(400).json({ message: 'Email sudah terverifikasi sebelumnya.' });
    }

    if (user.verificationCode !== code) {
      return res.status(400).json({ message: 'Kode verifikasi tidak valid.' });
    }

    if (user.verificationExpiresAt && new Date() > user.verificationExpiresAt) {
      return res.status(400).json({ message: 'Kode verifikasi sudah kadaluarsa. Silakan minta kode baru.' });
    }

    // Update user
    const updatedUser = await prisma.user.update({
      where: { email },
      data: {
        isVerified: true,
        verificationCode: null,
        verificationExpiresAt: null,
      },
      select: { id: true, name: true, email: true, role: true, specialty: true, isVerified: true }
    });

    // Generate JWT so user is auto-logged in after verify
    const jwt = require('jsonwebtoken');
    const token = jwt.sign(
      { userId: updatedUser.id, role: updatedUser.role },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '7d' }
    );

    res.status(200).json({
      message: 'Verifikasi email berhasil!',
      user: updatedUser,
      token
    });
  } catch (error) {
    console.error('Verify Email Error:', error);
    res.status(500).json({ message: 'Terjadi kesalahan pada server saat verifikasi email.' });
  }
};

export const resendVerification = async (req: Request, res: Response): Promise<any> => {
  try {
    const { email } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    
    if (!user) {
      return res.status(404).json({ message: 'Pengguna tidak ditemukan.' });
    }

    if (user.isVerified) {
      return res.status(400).json({ message: 'Email sudah terverifikasi sebelumnya.' });
    }

    const verificationCode = generateVerificationCode();
    const verificationExpiresAt = new Date(Date.now() + 60 * 60 * 1000);

    await prisma.user.update({
      where: { email },
      data: {
        verificationCode,
        verificationExpiresAt
      }
    });

    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await sendVerificationEmail(user.email, verificationCode);
    } else {
      console.log(`\n======================================================`);
      console.log(`[EMAIL SIMULATION - RESEND] To: ${user.email}`);
      console.log(`Subject: Kode Verifikasi Baru Trenning LMS Anda`);
      console.log(`Kode Verifikasi Anda: ${verificationCode}`);
      console.log(`======================================================\n`);
    }

    res.status(200).json({ message: 'Kode verifikasi baru telah dikirim ke email Anda.' });
  } catch (error) {
    console.error('Resend Verification Error:', error);
    res.status(500).json({ message: 'Terjadi kesalahan pada server saat mengirim ulang kode.' });
  }
};
