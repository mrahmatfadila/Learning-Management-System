import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import bcrypt from 'bcryptjs';
import * as dotenv from 'dotenv';
dotenv.config();

import { coursesData, lessons } from '../../frontend/src/data/lessonData';

const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db';
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter } as any);

async function main() {
  console.log('🌱 Full Database Seeding Starting...');

  const salt = await bcrypt.genSalt(10);

  // 1. SEED USERS
  const studentPass = await bcrypt.hash('password123', salt);
  const student = await prisma.user.upsert({
    where: { email: 'student@lms.test' },
    update: { password: studentPass, role: 'STUDENT', isVerified: true },
    create: {
      name: 'Demo Student',
      email: 'student@lms.test',
      password: studentPass,
      role: 'STUDENT',
      isVerified: true
    },
  });

  const adminPass = await bcrypt.hash('admin123', salt);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@lms.test' },
    update: { password: adminPass, role: 'ADMIN', isVerified: true },
    create: {
      name: 'Demo Admin',
      email: 'admin@lms.test',
      password: adminPass,
      role: 'ADMIN',
      isVerified: true
    },
  });

  const ins1Pass = await bcrypt.hash('password123', salt);
  const bagusRahmat = await prisma.user.upsert({
    where: { email: 'bagus@lms.test' },
    update: { name: 'Bagus Rahmat', password: ins1Pass, role: 'INSTRUCTOR', isVerified: true },
    create: {
      name: 'Bagus Rahmat',
      email: 'bagus@lms.test',
      password: ins1Pass,
      role: 'INSTRUCTOR',
      isVerified: true
    },
  });

  const ins2Pass = await bcrypt.hash('password123', salt);
  const raihanRahmat = await prisma.user.upsert({
    where: { email: 'raihan@lms.test' },
    update: { name: 'Raihan Rahmat', password: ins2Pass, role: 'INSTRUCTOR', isVerified: true },
    create: {
      name: 'Raihan Rahmat',
      email: 'raihan@lms.test',
      password: ins2Pass,
      role: 'INSTRUCTOR',
      isVerified: true
    },
  });

  console.log('✅ Users seeded:');
  console.log('   👤 Student:    student@lms.test / password123');
  console.log('   👑 Admin:      admin@lms.test / admin123');
  console.log('   👨‍🏫 Instructor: bagus@lms.test / password123');

  // Map for module ID aliases
  const moduleIdMap: Record<string, string> = {
    'html': '67adde6d-81a6-4470-b88d-506b733f87ee',
    'css': 'ba1383a2-219d-44ab-bf63-804d5a0f0902',
    'javascript': 'mastering-ui-design-for-impactful-solutions',
    'php': 'php-backend-mastery',
    'mysql': 'mysql-relational-database',
    'git': 'git-github-version-control',
    'mobile': 'mobile-app-java-android',
    'cisco': 'cisco-packet-tracer'
  };

  const categoryMap: Record<string, string> = {
    'html': 'Programming',
    'css': 'Web Design',
    'javascript': 'Programming',
    'php': 'Programming',
    'mysql': 'Database',
    'git': 'General',
    'mobile': 'Mobile',
    'cisco': 'Jaringan'
  };

  // 2. SEED COURSES & LESSONS FROM COURSESDATA
  for (const course of coursesData) {
    const primaryId = moduleIdMap[course.id] || course.id;
    const instructorId = course.id === 'php' || course.id === 'mysql' || course.id === 'cisco' ? raihanRahmat.id : bagusRahmat.id;
    const category = categoryMap[course.id] || 'Programming';

    // Create primary module
    const mod = await prisma.module.upsert({
      where: { id: primaryId },
      update: {
        title: course.title,
        category,
        description: course.description,
        instructorId,
        isVerified: true
      },
      create: {
        id: primaryId,
        title: course.title,
        category,
        description: course.description,
        instructorId,
        isVerified: true
      }
    });

    // Also alias standard slug ID if different
    if (primaryId !== course.id) {
      await prisma.module.upsert({
        where: { id: course.id },
        update: {
          title: course.title,
          category,
          description: course.description,
          instructorId,
          isVerified: true
        },
        create: {
          id: course.id,
          title: course.title,
          category,
          description: course.description,
          instructorId,
          isVerified: true
        }
      });
    }

    // Enroll student as APPROVED
    await prisma.enrollment.upsert({
      where: { studentId_moduleId: { studentId: student.id, moduleId: mod.id } },
      update: { status: 'APPROVED' },
      create: {
        studentId: student.id,
        moduleId: mod.id,
        status: 'APPROVED',
        progress: 100
      }
    });

    if (primaryId !== course.id) {
      await prisma.enrollment.upsert({
        where: { studentId_moduleId: { studentId: student.id, moduleId: course.id } },
        update: { status: 'APPROVED' },
        create: {
          studentId: student.id,
          moduleId: course.id,
          status: 'APPROVED',
          progress: 100
        }
      });
    }

    // Seed chapters & lessons
    const courseModulesList: any[] = course.modules || [];
    let globalOrder = 0;

    for (let cIdx = 0; cIdx < courseModulesList.length; cIdx++) {
      const chapterData = courseModulesList[cIdx];
      if (!chapterData) continue;
      const chapTitle = chapterData.title || `Bab ${cIdx + 1}`;

      const chap = await prisma.chapter.create({
        data: {
          moduleId: mod.id,
          title: chapTitle,
          order: cIdx
        }
      });

      const lessonList: any[] = chapterData.lessons || [];
      for (let lIdx = 0; lIdx < lessonList.length; lIdx++) {
        const lesRef = lessonList[lIdx];
        if (!lesRef) continue;
        globalOrder++;

        const lessonKey = lesRef.id;
        const staticData = (lessons as any)[lessonKey] || {};

        let contentStr = '';
        if (typeof staticData === 'string') {
          contentStr = staticData;
        } else if (staticData && (staticData.theory || staticData.code)) {
          contentStr = JSON.stringify({
            theory: staticData.theory || '',
            code: staticData.code || '',
            quiz: staticData.quiz || null
          });
        } else {
          contentStr = JSON.stringify({ theory: `<p>Materi pembelajaran ${lesRef.title}</p>` });
        }

        // Create lesson in primary module
        await prisma.lesson.upsert({
          where: { id: lesRef.id },
          update: {
            title: lesRef.title,
            chapter: chapTitle,
            chapterId: chap.id,
            content: contentStr,
            type: staticData.type || 'code',
            order: globalOrder
          },
          create: {
            id: lesRef.id,
            moduleId: mod.id,
            chapter: chapTitle,
            chapterId: chap.id,
            title: lesRef.title,
            type: staticData.type || 'code',
            content: contentStr,
            order: globalOrder
          }
        });

        // Also duplicate to secondary module ID if alias exists
        if (primaryId !== course.id) {
          const aliasLessonId = `${course.id}-${lesRef.id}`;
          await prisma.lesson.upsert({
            where: { id: aliasLessonId },
            update: {
              title: lesRef.title,
              chapter: chapTitle,
              content: contentStr,
              type: staticData.type || 'code',
              order: globalOrder
            },
            create: {
              id: aliasLessonId,
              moduleId: course.id,
              chapter: chapTitle,
              title: lesRef.title,
              type: staticData.type || 'code',
              content: contentStr,
              order: globalOrder
            }
          });
        }
      }
    }
  }

  // 3. SEED ADDITIONAL CATALOG MODULES
  const additionalModules = [
    { id: 'general-knowledge-&-methodology', title: 'General Knowledge & Methodology', category: 'General', description: 'Pelajari metodologi dan pengetahuan dasar.' },
    { id: 'a-symphony-of-colors-in-ui-design', title: 'A Symphony of Colors in UI Design', category: 'Instructional Design', description: 'Teori warna dan penerapannya.' },
    { id: 'bridging-users-and-ui-in-design-harmony', title: 'Bridging Users and UI in Design Harmony', category: 'Experience Design', description: 'Menyelaraskan UX dan UI.' },
    { id: 'creating-engaging-learning-journeys-ui-ux-best-practices', title: 'Creating Engaging Learning Journeys: UI/UX Best Practices', category: 'UI/UX', description: 'Praktik terbaik UI/UX.' },
    { id: 'designing-intuitive-user-interfaces', title: 'Designing Intuitive User Interfaces', category: 'User Interface (UI)', description: 'Desain intuitif.' },
    { id: 'optimizing-user-experience-in-educational-platforms', title: 'Optimizing User Experience in Educational Platforms', category: 'User Experience', description: 'Optimasi UX untuk edukasi.' },
    { id: 'responsive-design-principles-for-modern-web', title: 'Responsive Design Principles for Modern Web', category: 'Web Design', description: 'Prinsip desain responsif.' },
    { id: 'accessibility-in-digital-products', title: 'Accessibility in Digital Products', category: 'Accessibility', description: 'Aksesibilitas digital.' }
  ];

  for (const am of additionalModules) {
    await prisma.module.upsert({
      where: { id: am.id },
      update: { title: am.title, category: am.category, description: am.description },
      create: {
        id: am.id,
        title: am.title,
        category: am.category,
        description: am.description,
        instructorId: bagusRahmat.id,
        isVerified: true
      }
    });

    await prisma.enrollment.upsert({
      where: { studentId_moduleId: { studentId: student.id, moduleId: am.id } },
      update: { status: 'APPROVED' },
      create: {
        studentId: student.id,
        moduleId: am.id,
        status: 'APPROVED',
        progress: 50
      }
    });
  }

  console.log('✅ ALL COURSES, CHAPTERS & LESSONS SEEDED SUCCESSFULLY!');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
