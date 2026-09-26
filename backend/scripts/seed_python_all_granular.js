const { Pool } = require('pg');

const part1 = require('./data/pythonPart1Basics');
const part2 = require('./data/pythonPart2Variables');
const part3 = require('./data/pythonPart3StringsBooleans');
const part4 = require('./data/pythonPart4Operators');
const part5 = require('./data/pythonPart5Lists');

const allLessons = [
  ...part1,
  ...part2,
  ...part3,
  ...part4,
  ...part5
];

async function seedAllGranular() {
  const pTarget = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_content_db' });
  const pSource = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db' });

  console.log(`🚀 Memulai pengisian ${allLessons.length} materi Python granular ke lms_content_db & lms_edutech_db...`);

  // 1. Pastikan Modul Python aktif
  const pythonTitle = 'Python 3: Pemrograman Modern, Data Science, AI & Backend';
  const pythonCategory = 'Backend';
  const pythonDesc = 'Kuasai pemrograman Python 3 modern dari dasar logika, manipulasi string, struktur data (List, Tuple, Set, Dict), fungsi, OOP, penanganan error, pengolahan file, hingga integrasi database dan REST API.';

  await pTarget.query(`
    INSERT INTO "Module" (id, title, description, category, "order", "isPublished", level, duration, "createdAt", "updatedAt")
    VALUES ($1, $2, $3, $4, 6, true, 'Semua Level', '6-8 Minggu', NOW(), NOW())
    ON CONFLICT (id) DO UPDATE SET
      title = EXCLUDED.title,
      description = EXCLUDED.description,
      category = EXCLUDED.category,
      "isPublished" = true,
      "updatedAt" = NOW()
  `, ['python', pythonTitle, pythonDesc, pythonCategory]);

  const adminUser = await pSource.query(`SELECT id FROM "User" WHERE role = 'ADMIN' OR role = 'INSTRUCTOR' LIMIT 1`);
  const instructorId = adminUser.rows[0]?.id || '0c4daa73-9a80-45b5-b0b4-9ebe39ed0a44';

  await pSource.query(`
    INSERT INTO "Module" (id, title, description, category, "instructorId", "isVerified", "createdAt", "updatedAt")
    VALUES ($1, $2, $3, $4, $5, true, NOW(), NOW())
    ON CONFLICT (id) DO UPDATE SET
      title = EXCLUDED.title,
      description = EXCLUDED.description,
      category = EXCLUDED.category,
      "instructorId" = EXCLUDED."instructorId",
      "isVerified" = true,
      "updatedAt" = NOW()
  `, ['python', pythonTitle, pythonDesc, pythonCategory, instructorId]);

  // 2. Pastikan Chapter 1 Python Tutorial
  await pTarget.query(`
    INSERT INTO "Chapter" (id, title, "moduleId", "order", "createdAt", "updatedAt")
    VALUES ($1, $2, $3, $4, NOW(), NOW())
    ON CONFLICT (id) DO UPDATE SET
      title = EXCLUDED.title,
      "moduleId" = EXCLUDED."moduleId",
      "order" = EXCLUDED."order",
      "updatedAt" = NOW()
  `, ['python-chap-tutorial', 'Python Tutorial', 'python', 1]);

  await pSource.query(`
    INSERT INTO "Chapter" (id, title, "moduleId", "order", "createdAt", "updatedAt")
    VALUES ($1, $2, $3, $4, NOW(), NOW())
    ON CONFLICT (id) DO UPDATE SET
      title = EXCLUDED.title,
      "moduleId" = EXCLUDED."moduleId",
      "order" = EXCLUDED."order",
      "updatedAt" = NOW()
  `, ['python-chap-tutorial', 'Python Tutorial', 'python', 1]);

  // 3. Bersihkan materi lama yang judulnya panjang/gabungan agar bersih
  const validIds = allLessons.map(l => l.id);
  await pTarget.query(`DELETE FROM "Lesson" WHERE "moduleId" = 'python' AND id != ALL($1::text[])`, [validIds]);
  await pSource.query(`DELETE FROM "Lesson" WHERE "moduleId" = 'python' AND id != ALL($1::text[])`, [validIds]);

  // 4. Masukkan seluruh 60 materi individual
  for (const item of allLessons) {
    const fullContent = {
      overview: item.overview,
      theory: item.theory,
      code: item.code,
      codeExplanation: item.codeExplanation,
      challenge: item.challenge,
      quiz: item.quiz
    };

    // Insert Target
    await pTarget.query(`
      INSERT INTO "Lesson" (id, title, "moduleId", "chapterId", chapter, type, "order", content, "createdAt", "updatedAt")
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW(), NOW())
      ON CONFLICT (id) DO UPDATE SET
        title = EXCLUDED.title,
        "moduleId" = EXCLUDED."moduleId",
        "chapterId" = EXCLUDED."chapterId",
        chapter = EXCLUDED.chapter,
        type = EXCLUDED.type,
        "order" = EXCLUDED."order",
        content = EXCLUDED.content,
        "updatedAt" = NOW()
    `, [
      item.id,
      item.title,
      'python',
      item.chapterId,
      item.chapter,
      'coding',
      item.order,
      JSON.stringify(fullContent)
    ]);

    // Insert Source
    await pSource.query(`
      INSERT INTO "Lesson" (id, title, "moduleId", "chapterId", chapter, type, "order", content, "createdAt", "updatedAt")
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW(), NOW())
      ON CONFLICT (id) DO UPDATE SET
        title = EXCLUDED.title,
        "moduleId" = EXCLUDED."moduleId",
        "chapterId" = EXCLUDED."chapterId",
        chapter = EXCLUDED.chapter,
        type = EXCLUDED.type,
        "order" = EXCLUDED."order",
        content = EXCLUDED.content,
        "updatedAt" = NOW()
    `, [
      item.id,
      item.title,
      'python',
      item.chapterId,
      item.chapter,
      'coding',
      item.order,
      JSON.stringify(fullContent)
    ]);

    console.log(`  ✅ [${item.order}/${allLessons.length}] ${item.title} (${item.id})`);
  }

  // 5. Pastikan Student ter-enroll
  const students = await pSource.query(`SELECT id FROM "User" WHERE role = 'STUDENT'`);
  for (const s of students.rows) {
    await pSource.query(`
      INSERT INTO "Enrollment" (id, "studentId", "moduleId", status, progress, "enrolledAt", "updatedAt")
      VALUES (gen_random_uuid(), $1, 'python', 'APPROVED', 0, NOW(), NOW())
      ON CONFLICT ("studentId", "moduleId") DO UPDATE SET status = 'APPROVED'
    `, [s.id]);
  }

  const count1 = await pTarget.query(`SELECT count(*) FROM "Lesson" WHERE "moduleId" = 'python'`);
  const count2 = await pSource.query(`SELECT count(*) FROM "Lesson" WHERE "moduleId" = 'python'`);

  console.log(`\n🎉 SEEDING SELESAI DENGAN TOTAL ${allLessons.length} SUB-JUDUL MATERI MANDIRI!`);
  console.log(`- lms_content_db: ${count1.rows[0].count} materi`);
  console.log(`- lms_edutech_db: ${count2.rows[0].count} materi`);

  await pTarget.end();
  await pSource.end();
}

seedAllGranular().catch(console.error);
