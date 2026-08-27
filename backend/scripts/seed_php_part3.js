const { Pool } = require('pg');
const phpPart3FunctionsArrays = require('./data/phpPart3FunctionsArrays');

async function seedPhpPart3() {
  const pTarget = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_content_db' });
  const pSource = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db' });

  console.log('🚀 Memulai pengisian batch 3 materi PHP ke database lms_content_db & lms_edutech_db...');
  console.log(`📚 Memproses ${phpPart3FunctionsArrays.length} materi (Order 37 s/d 56)...`);

  for (const item of phpPart3FunctionsArrays) {
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

    console.log(`  ✅ [${item.order}/56] ${item.title} (${item.id}) -> Sukses tersimpan`);
  }

  // Verifikasi Total Materi PHP di lms_content_db
  const resCount = await pTarget.query(`SELECT count(*) FROM "Lesson" WHERE "moduleId" = 'php'`);
  console.log(`\n🎉 BATCH 3 SELESAI! Total materi PHP di lms_content_db sekarang: ${resCount.rows[0].count} materi.`);

  await pTarget.end();
  await pSource.end();
}

seedPhpPart3().catch(console.error);
