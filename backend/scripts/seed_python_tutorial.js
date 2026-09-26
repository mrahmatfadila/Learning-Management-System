const { Pool } = require('pg');
const pythonPart1Tutorial = require('./data/pythonPart1Tutorial');

async function seedPythonTutorial() {
  const pTarget = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_content_db' });
  const pSource = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db' });

  console.log('🚀 Memulai pengisian modul Python ke database lms_content_db & lms_edutech_db...');

  const pythonTitle = 'Python 3: Pemrograman Modern, Data Science, AI & Backend';
  const pythonCategory = 'Backend';
  const pythonDesc = 'Kuasai pemrograman Python 3 modern dari dasar logika, manipulasi string, struktur data (List, Tuple, Set, Dict), fungsi, OOP, penanganan error, pengolahan file, hingga integrasi database dan REST API.';

  // 1. Pastikan Modul Python ada di lms_content_db
  await pTarget.query(`
    INSERT INTO "Module" (id, title, description, category, "order", "isPublished", level, duration, "createdAt", "updatedAt")
    VALUES ($1, $2, $3, $4, 6, true, 'Semua Level', '6-8 Minggu', NOW(), NOW())
    ON CONFLICT (id) DO UPDATE SET
      title = EXCLUDED.title,
      description = EXCLUDED.description,
      category = EXCLUDED.category,
      "isPublished" = true,
      "updatedAt" = NOW()
  `, [
    'python',
    pythonTitle,
    pythonDesc,
    pythonCategory
  ]);

  // 2. Sinkronkan Modul Python ke lms_edutech_db
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
  `, [
    'python',
    pythonTitle,
    pythonDesc,
    pythonCategory,
    instructorId
  ]);

  // 3. Pastikan Chapter 1 "Python Tutorial" ada di kedua database
  await pTarget.query(`
    INSERT INTO "Chapter" (id, title, "moduleId", "order", "createdAt", "updatedAt")
    VALUES ($1, $2, $3, $4, NOW(), NOW())
    ON CONFLICT (id) DO UPDATE SET
      title = EXCLUDED.title,
      "moduleId" = EXCLUDED."moduleId",
      "order" = EXCLUDED."order",
      "updatedAt" = NOW()
  `, [
    'python-chap-tutorial',
    'Python Tutorial',
    'python',
    1
  ]);

  await pSource.query(`
    INSERT INTO "Chapter" (id, title, "moduleId", "order", "createdAt", "updatedAt")
    VALUES ($1, $2, $3, $4, NOW(), NOW())
    ON CONFLICT (id) DO UPDATE SET
      title = EXCLUDED.title,
      "moduleId" = EXCLUDED."moduleId",
      "order" = EXCLUDED."order",
      "updatedAt" = NOW()
  `, [
    'python-chap-tutorial',
    'Python Tutorial',
    'python',
    1
  ]);

  // 4. Masukkan seluruh 6 Materi Python Bab 1
  console.log(`\n📚 Memasukkan ${pythonPart1Tutorial.length} materi Bab 1 (Python Tutorial)...`);

  for (const item of pythonPart1Tutorial) {
    const fullContent = {
      overview: item.overview,
      theory: item.theory,
      code: item.code,
      codeExplanation: item.codeExplanation,
      challenge: item.challenge,
      quiz: item.quiz
    };

    // Insert ke lms_content_db
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

    // Insert ke lms_edutech_db
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

    console.log(`  ✅ [${item.order}/${pythonPart1Tutorial.length}] ${item.title} (${item.id}) -> Berhasil tersimpan`);
  }

  // 5. Auto-enroll student users agar langsung muncul di dashboard student
  const students = await pSource.query(`SELECT id FROM "User" WHERE role = 'STUDENT'`);
  for (const s of students.rows) {
    await pSource.query(`
      INSERT INTO "Enrollment" (id, "studentId", "moduleId", status, progress, "enrolledAt", "updatedAt")
      VALUES (gen_random_uuid(), $1, 'python', 'APPROVED', 0, NOW(), NOW())
      ON CONFLICT ("studentId", "moduleId") DO UPDATE SET status = 'APPROVED'
    `, [s.id]);
    console.log(`  🎓 Siswa (${s.id}) otomatis terdaftar (APPROVED) di modul Python`);
  }

  // 6. Verifikasi Total Materi Python di lms_content_db
  const resCount1 = await pTarget.query(`SELECT count(*) FROM "Lesson" WHERE "moduleId" = 'python'`);
  const resCount2 = await pSource.query(`SELECT count(*) FROM "Lesson" WHERE "moduleId" = 'python'`);
  console.log(`\n🎉 SEEDING SELESAI!`);
  console.log(`- Total materi Python di lms_content_db: ${resCount1.rows[0].count} materi`);
  console.log(`- Total materi Python di lms_edutech_db: ${resCount2.rows[0].count} materi`);

  await pTarget.end();
  await pSource.end();
}

seedPythonTutorial().catch(console.error);
