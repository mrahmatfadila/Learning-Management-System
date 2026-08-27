const { Pool } = require('pg');
const phpPart43RefMysqli3 = require('./data/phpPart43RefMysqli3');
const phpPart44RefMysqli4 = require('./data/phpPart44RefMysqli4');
const phpPart45RefMysqli5 = require('./data/phpPart45RefMysqli5');

async function seedPhpPart43_45() {
  const pTarget = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_content_db' });
  const pSource = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db' });

  const allLessons = [...phpPart43RefMysqli3, ...phpPart44RefMysqli4, ...phpPart45RefMysqli5];

  console.log(`🚀 Memulai pengisian ${allLessons.length} materi MySQLi Reference Bab 10 (PHP Reference MySQLi 463-502)...`);

  for (const item of allLessons) {
    const fullContent = {
      overview: item.overview,
      theory: item.theory,
      code: item.code,
      codeExplanation: item.codeExplanation,
      challenge: item.challenge,
      quiz: item.quiz
    };

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
    `, [item.id, item.title, 'php', item.chapterId, item.chapter, 'coding', item.order, JSON.stringify(fullContent)]);

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
      `, [item.id, item.title, 'php', item.chapterId, item.chapter, 'coding', item.order, JSON.stringify(fullContent)]);
    } catch (e) {}

    console.log(`  ✅ [Materi ${item.order}] ${item.title} -> Sukses tersimpan`);
  }

  const resCount = await pTarget.query(`SELECT count(*) FROM "Lesson" WHERE "moduleId" = 'php'`);
  console.log(`\n🎉 SELESAI! Total materi PHP di lms_content_db: ${resCount.rows[0].count} materi.`);

  await pTarget.end();
  await pSource.end();
}

seedPhpPart43_45().catch(console.error);
