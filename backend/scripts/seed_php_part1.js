const { Pool } = require('pg');
const phpPart1Tutorial = require('./data/phpPart1Tutorial');

async function seedPhpPart1() {
  const pTarget = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_content_db' });
  const pSource = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db' });

  console.log('🚀 Memulai pengisian modul PHP ke database lms_content_db & lms_edutech_db...');

  // 1. Pastikan Modul PHP ada di lms_content_db
  await pTarget.query(`
    INSERT INTO "Module" (id, title, description, category, "order", "createdAt", "updatedAt")
    VALUES ($1, $2, $3, $4, $5, NOW(), NOW())
    ON CONFLICT (id) DO UPDATE SET
      title = EXCLUDED.title,
      description = EXCLUDED.description,
      category = EXCLUDED.category,
      "updatedAt" = NOW()
  `, [
    'php',
    'PHP: Server-Side Web Programming',
    'Kuasai PHP 8.x modern dari dasar hingga OOP, MySQL, REST API, dan manipulasi data dinamis dengan standar kurikulum enterprise.',
    'Backend',
    4
  ]);

  // 2. Pastikan Modul PHP ada di lms_edutech_db (jika ada instruktur)
  try {
    const adminUser = await pSource.query(`SELECT id FROM "User" WHERE role = 'ADMIN' OR role = 'INSTRUCTOR' LIMIT 1`);
    const instructorId = adminUser.rows[0]?.id;
    if (instructorId) {
      await pSource.query(`
        INSERT INTO "Module" (id, title, description, category, "instructorId", "isVerified", "createdAt", "updatedAt")
        VALUES ($1, $2, $3, $4, $5, true, NOW(), NOW())
        ON CONFLICT (id) DO UPDATE SET
          title = EXCLUDED.title,
          description = EXCLUDED.description,
          category = EXCLUDED.category,
          "updatedAt" = NOW()
      `, [
        'php',
        'PHP: Server-Side Web Programming',
        'Kuasai PHP 8.x modern dari dasar hingga OOP, MySQL, REST API, dan manipulasi data dinamis dengan standar kurikulum enterprise.',
        'Backend',
        instructorId
      ]);
    }
  } catch (err) {
    console.log('⚠️ Note for lms_edutech_db module:', err.message);
  }

  // 3. Pastikan Chapter 1: PHP Tutorial ada
  await pTarget.query(`
    INSERT INTO "Chapter" (id, title, "moduleId", "order", "createdAt", "updatedAt")
    VALUES ($1, $2, $3, $4, NOW(), NOW())
    ON CONFLICT (id) DO UPDATE SET
      title = EXCLUDED.title,
      "moduleId" = EXCLUDED."moduleId",
      "order" = EXCLUDED."order",
      "updatedAt" = NOW()
  `, [
    'php-chap-tutorial',
    'PHP Tutorial',
    'php',
    1
  ]);

  try {
    await pSource.query(`
      INSERT INTO "Chapter" (id, title, "moduleId", "order", "createdAt", "updatedAt")
      VALUES ($1, $2, $3, $4, NOW(), NOW())
      ON CONFLICT (id) DO UPDATE SET
        title = EXCLUDED.title,
        "moduleId" = EXCLUDED."moduleId",
        "order" = EXCLUDED."order",
        "updatedAt" = NOW()
    `, [
      'php-chap-tutorial',
      'PHP Tutorial',
      'php',
      1
    ]);
  } catch (err) {
    console.log('⚠️ Note for lms_edutech_db chapter:', err.message);
  }

  // 4. Masukkan 19 Materi PHP Bab 1
  console.log(`\n📚 Memasukkan ${phpPart1Tutorial.length} materi Bab 1 (PHP Tutorial)...`);

  for (const item of phpPart1Tutorial) {
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
      'php',
      item.chapterId,
      item.chapter,
      'coding',
      item.order,
      JSON.stringify(fullContent)
    ]);

    // Insert ke lms_edutech_db juga agar sinkron
    try {
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
        'php',
        item.chapterId,
        item.chapter,
        'coding',
        item.order,
        JSON.stringify(fullContent)
      ]);
    } catch (e) {}

    console.log(`  ✅ [${item.order}/19] ${item.title} (${item.id}) -> Sukses tersimpan`);
  }

  // 5. Verifikasi Total Materi PHP di lms_content_db
  const resCount = await pTarget.query(`SELECT count(*) FROM "Lesson" WHERE "moduleId" = 'php'`);
  console.log(`\n🎉 SEEDING SELESAI! Total materi PHP di lms_content_db: ${resCount.rows[0].count} materi.`);

  await pTarget.end();
  await pSource.end();
}

seedPhpPart1().catch(console.error);
