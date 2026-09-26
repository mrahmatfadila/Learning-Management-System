const { Pool } = require('pg');
const pythonPart2Variables = require('./data/pythonPart2Variables');

async function seedPythonBatch2() {
  const pTarget = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_content_db' });
  const pSource = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db' });

  console.log('🚀 Memulai pengisian Batch 2 Materi Python (Lessons 07 - 12) ke database...');

  console.log(`\n📚 Memasukkan ${pythonPart2Variables.length} materi ke lms_content_db & lms_edutech_db...`);

  for (const item of pythonPart2Variables) {
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

    console.log(`  ✅ [${item.order}/12] ${item.title} (${item.id}) -> Berhasil tersimpan`);
  }

  // Verifikasi Total Materi Python di kedua database
  const resCount1 = await pTarget.query(`SELECT count(*) FROM "Lesson" WHERE "moduleId" = 'python'`);
  const resCount2 = await pSource.query(`SELECT count(*) FROM "Lesson" WHERE "moduleId" = 'python'`);
  console.log(`\n🎉 SEEDING BATCH 2 SELESAI!`);
  console.log(`- Total materi Python di lms_content_db: ${resCount1.rows[0].count} materi`);
  console.log(`- Total materi Python di lms_edutech_db: ${resCount2.rows[0].count} materi`);

  await pTarget.end();
  await pSource.end();
}

seedPythonBatch2().catch(console.error);
