const { Pool } = require('pg');
const phpPart8Xml = require('./data/phpPart8Xml');

async function seedPhpPart8() {
  const pTarget = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_content_db' });
  const pSource = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db' });

  console.log('🚀 Memulai pengisian Bab 6 (PHP XML) ke database lms_content_db & lms_edutech_db...');

  // 1. Pastikan Chapter 6: PHP XML ada
  await pTarget.query(`
    INSERT INTO "Chapter" (id, title, "moduleId", "order", "createdAt", "updatedAt")
    VALUES ($1, $2, $3, $4, NOW(), NOW())
    ON CONFLICT (id) DO UPDATE SET
      title = EXCLUDED.title,
      "moduleId" = EXCLUDED."moduleId",
      "order" = EXCLUDED."order",
      "updatedAt" = NOW()
  `, [
    'php-chap-xml',
    'PHP XML',
    'php',
    6
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
      'php-chap-xml',
      'PHP XML',
      'php',
      6
    ]);
  } catch (err) {
    console.log('⚠️ Note for lms_edutech_db chapter:', err.message);
  }

  // 2. Masukkan 5 Materi Bab 6 (PHP XML)
  console.log(`\n📚 Memproses ${phpPart8Xml.length} materi Bab 6 (PHP XML)...`);

  for (const item of phpPart8Xml) {
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

    console.log(`  ✅ [Bab 6 / Materi ${item.order}] ${item.title} (${item.id}) -> Sukses tersimpan`);
  }

  // Verifikasi Total Materi PHP di lms_content_db
  const resCount = await pTarget.query(`SELECT count(*) FROM "Lesson" WHERE "moduleId" = 'php'`);
  const chapCount = await pTarget.query(`SELECT count(*) FROM "Chapter" WHERE "moduleId" = 'php'`);
  console.log(`\n🎉 BAB 6 SELESAI! Total materi PHP di lms_content_db sekarang: ${resCount.rows[0].count} materi (${chapCount.rows[0].count} Bab).`);

  await pTarget.end();
  await pSource.end();
}

seedPhpPart8().catch(console.error);
