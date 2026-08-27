const { Pool } = require('pg');
const phpPart68RefXml1 = require('./data/phpPart68RefXml1');
const phpPart69RefXml2 = require('./data/phpPart69RefXml2');
const phpPart70RefXml3 = require('./data/phpPart70RefXml3');

async function seedPhpPart68_70() {
  const pTarget = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_content_db' });
  const pSource = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db' });

  const allLessons = [
    ...phpPart68RefXml1,
    ...phpPart69RefXml2,
    ...phpPart70RefXml3
  ];

  console.log(`🚀 Memulai pengisian ${allLessons.length} materi XML Parser Reference Bab 10 (PHP Reference XML 731-754)...`);

  for (const item of allLessons) {
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
  console.log(`\n🎉 SELURUH XML PARSER REFERENCE SELESAI! Total materi PHP di lms_content_db sekarang: ${resCount.rows[0].count} materi (${chapCount.rows[0].count} Bab).`);

  await pTarget.end();
  await pSource.end();
}

seedPhpPart68_70().catch(console.error);
