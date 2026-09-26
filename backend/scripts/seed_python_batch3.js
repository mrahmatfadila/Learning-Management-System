const { Pool } = require('pg');
const pythonPart3OperatorsLists = require('./data/pythonPart3OperatorsLists');

async function seedPythonBatch3() {
  const pTarget = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_content_db' });
  const pSource = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db' });

  console.log('🚀 Memulai pengisian Batch 3 Materi Python (Lessons 13 - 14) ke database...');

  console.log(`\n📚 Memasukkan ${pythonPart3OperatorsLists.length} materi ke lms_content_db & lms_edutech_db...`);

  for (const item of pythonPart3OperatorsLists) {
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

    console.log(`  ✅ [${item.order}/14] ${item.title} (${item.id}) -> Berhasil tersimpan`);
  }

  // Verifikasi Total Materi Python di kedua database
  const resCount1 = await pTarget.query(`SELECT count(*) FROM "Lesson" WHERE "moduleId" = 'python'`);
  const resCount2 = await pSource.query(`SELECT count(*) FROM "Lesson" WHERE "moduleId" = 'python'`);
  console.log(`\n🎉 SEEDING BATCH 3 SELESAI!`);
  console.log(`- Total materi Python di lms_content_db: ${resCount1.rows[0].count} materi`);
  console.log(`- Total materi Python di lms_edutech_db: ${resCount2.rows[0].count} materi`);

  await pTarget.end();
  await pSource.end();
}

seedPythonBatch3().catch(console.error);
