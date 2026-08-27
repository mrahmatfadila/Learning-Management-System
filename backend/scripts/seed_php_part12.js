const { Pool } = require('pg');
const phpPart12RefArrays = require('./data/phpPart12RefArrays');

async function seedPhpPart12() {
  const pTarget = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_content_db' });
  const pSource = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db' });

  console.log('🚀 Memulai pengisian Bab 10 (PHP Reference) ke database lms_content_db & lms_edutech_db...');

  // 1. Pastikan Chapter 10: PHP Reference ada
  await pTarget.query(`
    INSERT INTO "Chapter" (id, title, "moduleId", "order", "createdAt", "updatedAt")
    VALUES ($1, $2, $3, $4, NOW(), NOW())
    ON CONFLICT (id) DO UPDATE SET
      title = EXCLUDED.title,
      "moduleId" = EXCLUDED."moduleId",
      "order" = EXCLUDED."order",
      "updatedAt" = NOW()
  `, [
    'php-chap-reference',
    'PHP Reference',
    'php',
    10
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
      'php-chap-reference',
      'PHP Reference',
      'php',
      10
    ]);
  } catch (err) {
    console.log('⚠️ Note for lms_edutech_db chapter:', err.message);
  }

  // 2. Masukkan 27 Materi Bab 10 (PHP Reference)
  console.log(`\n📚 Memproses ${phpPart12RefArrays.length} materi Bab 10 (PHP Reference)...`);

  for (const item of phpPart12RefArrays) {
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

    console.log(`  ✅ [Bab 10 / Materi ${item.order}] ${item.title} (${item.id}) -> Sukses tersimpan`);
  }

  // Verifikasi Total Materi PHP di lms_content_db
  const resCount = await pTarget.query(`SELECT count(*) FROM "Lesson" WHERE "moduleId" = 'php'`);
  const chapCount = await pTarget.query(`SELECT count(*) FROM "Chapter" WHERE "moduleId" = 'php'`);
  console.log(`\n🎉 BAB 10 SELESAI! Total materi PHP di lms_content_db sekarang: ${resCount.rows[0].count} materi (${chapCount.rows[0].count} Bab).`);

  await pTarget.end();
  await pSource.end();
}

seedPhpPart12().catch(console.error);
