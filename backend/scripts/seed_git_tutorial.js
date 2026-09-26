const { Pool } = require('pg');
const gitPart1Tutorial = require('./data/gitPart1Tutorial');

async function seedGitTutorial() {
  const pTarget = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_content_db' });
  const pSource = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db' });

  console.log('🚀 Memulai pengisian modul Git ke database lms_content_db & lms_edutech_db...');

  // 1. Pastikan Modul Git ada di lms_content_db
  await pTarget.query(`
    INSERT INTO "Module" (id, title, description, category, "order", "isPublished", level, duration, "createdAt", "updatedAt")
    VALUES ($1, $2, $3, $4, $5, true, 'Semua Level', '4-6 Minggu', NOW(), NOW())
    ON CONFLICT (id) DO UPDATE SET
      title = EXCLUDED.title,
      description = EXCLUDED.description,
      category = EXCLUDED.category,
      "isPublished" = true,
      "updatedAt" = NOW()
  `, [
    'git',
    'Git & GitHub: Version Control, Branching, Workflow & Collaboration',
    'Kuasai version control modern dengan Git dan kolaborasi GitHub profesional: snapshot, branching, merge conflict, PR, dan best practices enterprise.',
    'Tools & DevOps',
    5
  ]);

  // 2. Sinkronkan Modul Git ke lms_edutech_db
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
        'git',
        'Git & GitHub: Version Control, Branching, Workflow & Collaboration',
        'Kuasai version control modern dengan Git dan kolaborasi GitHub profesional: snapshot, branching, merge conflict, PR, dan best practices enterprise.',
        'Tools & DevOps',
        instructorId
      ]);
    }
  } catch (err) {
    console.log('⚠️ Note for lms_edutech_db module:', err.message);
  }

  // 3. Pastikan Chapter "Git Tutorial" ada
  await pTarget.query(`
    INSERT INTO "Chapter" (id, title, "moduleId", "order", "createdAt", "updatedAt")
    VALUES ($1, $2, $3, $4, NOW(), NOW())
    ON CONFLICT (id) DO UPDATE SET
      title = EXCLUDED.title,
      "moduleId" = EXCLUDED."moduleId",
      "order" = EXCLUDED."order",
      "updatedAt" = NOW()
  `, [
    'git-chap-tutorial',
    'Git Tutorial',
    'git',
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
      'git-chap-tutorial',
      'Git Tutorial',
      'git',
      1
    ]);
  } catch (err) {
    console.log('⚠️ Note for lms_edutech_db chapter:', err.message);
  }

  // 4. Masukkan seluruh 17 Materi Git Bab 1 (Git Tutorial)
  console.log(`\n📚 Memasukkan ${gitPart1Tutorial.length} materi Bab 1 (Git Tutorial)...`);

  for (const item of gitPart1Tutorial) {
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

    console.log(`  ✅ [${item.order}/${gitPart1Tutorial.length}] ${item.title} (${item.id}) -> Berhasil tersimpan`);
  }

  // 5. Verifikasi Total Materi Git di lms_content_db
  const resCount = await pTarget.query(`SELECT count(*) FROM "Lesson" WHERE "moduleId" = 'git'`);
  console.log(`\n🎉 SEEDING SELESAI! Total materi Git di lms_content_db: ${resCount.rows[0].count} materi.`);

  await pTarget.end();
  await pSource.end();
}

seedGitTutorial().catch(console.error);
