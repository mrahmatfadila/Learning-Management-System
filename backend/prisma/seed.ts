import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import bcrypt from 'bcryptjs';
import * as dotenv from 'dotenv';
dotenv.config();

const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db';
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter } as any);

async function main() {
  console.log('🌱 Seeding database...');

  const salt = await bcrypt.genSalt(10);

  // --- USERS ---
  const studentPass = await bcrypt.hash('password123', salt);
  const student = await prisma.user.upsert({
    where: { email: 'student@lms.test' },
    update: {},
    create: {
      name: 'Demo Student',
      email: 'student@lms.test',
      password: studentPass,
      role: 'STUDENT',
    },
  });

  const adminPass = await bcrypt.hash('admin123', salt);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@lms.test' },
    update: {},
    create: {
      name: 'Demo Admin',
      email: 'admin@lms.test',
      password: adminPass,
      role: 'ADMIN',
    },
  });

  // Instructors
  const ins1Pass = await bcrypt.hash('password123', salt);
  const bagusRahmat = await prisma.user.upsert({
    where: { email: 'bagus@lms.test' },
    update: { name: 'Bagus Rahmat' },
    create: {
      name: 'Bagus Rahmat',
      email: 'bagus@lms.test',
      password: ins1Pass,
      role: 'INSTRUCTOR',
    },
  });

  const ins2Pass = await bcrypt.hash('password123', salt);
  const raihanRahmat = await prisma.user.upsert({
    where: { email: 'raihan@lms.test' },
    update: { name: 'Raihan Rahmat' },
    create: {
      name: 'Raihan Rahmat',
      email: 'raihan@lms.test',
      password: ins2Pass,
      role: 'INSTRUCTOR',
    },
  });

  console.log('✅ Users seeded');

  // --- MODULES ---
  const modulesData = [
    { title: 'General Knowledge & Methodology', category: 'General', description: 'Pelajari metodologi dan pengetahuan dasar.', instructorId: bagusRahmat.id },
    { title: 'Mastering UI Design for Impactful Solutions', category: 'UI/UX', description: 'Materi mendalam tentang UI Design.', instructorId: bagusRahmat.id },
    { title: 'A Symphony of Colors in UI Design', category: 'Instructional Design', description: 'Teori warna dan penerapannya.', instructorId: raihanRahmat.id },
    { title: 'Bridging Users and UI in Design Harmony', category: 'Experience Design', description: 'Menyelaraskan UX dan UI.', instructorId: bagusRahmat.id },
    { title: 'Creating Engaging Learning Journeys: UI/UX Best Practices', category: 'UI/UX', description: 'Praktik terbaik UI/UX.', instructorId: raihanRahmat.id },
    { title: 'Designing Intuitive User Interfaces', category: 'User Interface (UI)', description: 'Desain intuitif.', instructorId: bagusRahmat.id },
    { title: 'Optimizing User Experience in Educational Platforms', category: 'User Experience', description: 'Optimasi UX untuk edukasi.', instructorId: raihanRahmat.id },
    { title: 'Responsive Design Principles for Modern Web', category: 'Web Design', description: 'Prinsip desain responsif.', instructorId: bagusRahmat.id },
    { title: 'Visual Hierarchy and Layout Fundamentals', category: 'UI/UX', description: 'Hierarki visual.', instructorId: raihanRahmat.id },
    { title: 'Accessibility in Digital Products', category: 'Accessibility', description: 'Aksesibilitas digital.', instructorId: bagusRahmat.id },
  ];

  for (const m of modulesData) {
    const createdMod = await prisma.module.upsert({
      where: { id: m.title.replace(/\s+/g, '-').toLowerCase() },
      update: { title: m.title, instructorId: m.instructorId, category: m.category, description: m.description },
      create: {
        id: m.title.replace(/\s+/g, '-').toLowerCase(),
        title: m.title,
        category: m.category,
        description: m.description,
        instructorId: m.instructorId,
      }
    });

    // Create some dummy lessons
    await prisma.lesson.upsert({
      where: { id: createdMod.id + '-lesson-1' },
      update: {},
      create: {
        id: createdMod.id + '-lesson-1',
        moduleId: createdMod.id,
        title: 'Component of Design',
        type: 'video',
        order: 1
      }
    });

    await prisma.lesson.upsert({
      where: { id: createdMod.id + '-lesson-2' },
      update: {},
      create: {
        id: createdMod.id + '-lesson-2',
        moduleId: createdMod.id,
        title: 'Chapter 1: Visibility of system status',
        type: 'reading',
        order: 2
      }
    });

    // Enroll students (fake assignees)
    await prisma.enrollment.upsert({
      where: { studentId_moduleId: { studentId: student.id, moduleId: createdMod.id } },
      update: {},
      create: {
        studentId: student.id,
        moduleId: createdMod.id,
        progress: Math.floor(Math.random() * 100)
      }
    });
  }

  // --- CHAT MESSAGES SEED ---
  console.log('💬 Seeding chat messages...');
  const globalMessages = [
    { content: 'Halo semuanya! Selamat datang di forum diskusi LMS Edutech! 👋', senderId: admin.id, channelId: 'global', isPinned: true },
    { content: 'Halo Admin! Terima kasih sudah membuat platform keren ini.', senderId: student.id, channelId: 'global' },
    { content: 'Halo murid-murid sekalian! Jangan ragu untuk bertanya di sini ya jika ada kesulitan materi.', senderId: bagusRahmat.id, channelId: 'global' },
    { content: 'Pesan ini berisi spam iklan tidak sopan.', senderId: student.id, channelId: 'global', isDeleted: true },
    { content: 'Selamat pagi pak Bagus! Siap belajar hari ini!', senderId: student.id, channelId: 'global' }
  ];

  for (const msg of globalMessages) {
    await prisma.message.create({
      data: {
        content: msg.content,
        senderId: msg.senderId,
        channelId: msg.channelId,
        isPinned: msg.isPinned || false,
        isDeleted: msg.isDeleted || false
      }
    });
  }

  // Seed message in instructor room
  await prisma.message.create({
    data: {
      content: 'Halo pak Bagus, saya mau tanya tentang tugas React Native, apakah dikumpul besok?',
      senderId: student.id,
      channelId: bagusRahmat.id
    }
  });
  await prisma.message.create({
    data: {
      content: 'Halo! Ya betul, silakan dikumpulkan sebelum jam 23.59 WIB ya.',
      senderId: bagusRahmat.id,
      channelId: bagusRahmat.id
    }
  });

  // Seed message in HTML module room
  await prisma.message.create({
    data: {
      content: 'Teman-teman, ada yang tahu beda semantic tag <article> dan <section>?',
      senderId: student.id,
      channelId: 'general-knowledge-&-methodology'
    }
  });
  await prisma.message.create({
    data: {
      content: 'Semoga info link ini membantu: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article',
      senderId: bagusRahmat.id,
      channelId: 'general-knowledge-&-methodology',
      isPinned: true
    }
  });

  console.log('✅ Modules, Lessons, Enrollments, Messages seeded');
  console.log('\n🎉 Seed selesai!');
}

main()
  .catch((e) => {
    console.error('❌ Seed gagal:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
