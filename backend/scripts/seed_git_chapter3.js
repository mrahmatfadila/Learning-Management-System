const { Pool } = require('pg');
const gitPart3Contribute = require('./data/gitPart3Contribute');

async function seedGitChapter3() {
  const pTarget = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_content_db' });
  const pSource = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db' });

  console.log('🚀 Memulai pengisian Bab 3: Git Contribute ke database...');

  // 1. Pastikan Chapter 3 "Git Contribute" ada di lms_content_db
  await pTarget.query(`
    INSERT INTO "Chapter" (id, title, "moduleId", "order", "createdAt", "updatedAt")
    VALUES ($1, $2, $3, $4, NOW(), NOW())
    ON CONFLICT (id) DO UPDATE SET
      title = EXCLUDED.title,
      "moduleId" = EXCLUDED."moduleId",
      "order" = EXCLUDED."order",
      "updatedAt" = NOW()
  `, [
    'git-chap-contribute',
    'Git Contribute',
    'git',
    3
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
      'git-chap-contribute',
      'Git Contribute',
      'git',
      3
    ]);
  } catch (err) {
    console.log('⚠️ Note for lms_edutech_db chapter 3:', err.message);
  }

  // 2. Masukkan seluruh 3 Materi Git Bab 3 (Git Contribute)
  console.log(`\n📚 Memasukkan ${gitPart3Contribute.length} materi Bab 3 (Git Contribute)...`);

  for (const item of gitPart3Contribute) {
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
      'git',
      item.chapterId,
      item.chapter,
      'coding',
      item.order,
      JSON.stringify(fullContent)
    ]);

    // Insert ke lms_edutech_db
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
        'git',
        item.chapterId,
        item.chapter,
        'coding',
        item.order,
        JSON.stringify(fullContent)
      ]);
    } catch (e) {
      console.log(`⚠️ Note for lms_edutech_db lesson ${item.id}:`, e.message);
    }

    console.log(`  ✅ [${item.order}/${gitPart3Contribute.length}] ${item.title} (${item.id}) -> Berhasil tersimpan`);
  }

  // 3. Verifikasi Total Materi Git di lms_content_db
  const resCount = await pTarget.query(`SELECT count(*) FROM "Lesson" WHERE "moduleId" = 'git'`);
  console.log(`\n🎉 SEEDING BAB 3 SELESAI! Total materi Git di lms_content_db sekarang: ${resCount.rows[0].count} materi.`);

  await pTarget.end();
  await pSource.end();
}

seedGitChapter3().catch(console.error);
