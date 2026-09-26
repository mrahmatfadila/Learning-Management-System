const { Pool } = require('pg');

async function syncGitCurriculum() {
  const pContent = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_content_db' });
  const pEdutech = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db' });

  console.log('🔄 Memulai sinkronisasi dan penyesuaian judul modul Git & GitHub...');

  const gitTitle = 'Git & GitHub: Version Control, Branching, Workflow & Enterprise DevOps';
  const gitCategory = 'Tools & DevOps';
  const gitDescription = 'Kuasai kontrol versi modern dengan Git dan kolaborasi GitHub kelas industri mulai dari fundamental snapshot, branching & merge, forking open-source, recovery reflog & undo, GitHub Actions CI/CD, Git Hooks, hingga strategi rilis enterprise.';

  const gitModuleIds = ['git', 'git-github-version-control'];

  // 1. Update Judul & Deskripsi di lms_content_db
  for (const id of ['git']) {
    await pContent.query(`
      INSERT INTO "Module" (id, title, category, description, level, duration, "order", "isPublished", "createdAt", "updatedAt")
      VALUES ($1, $2, $3, $4, 'Semua Level', '4-6 Minggu', 5, true, NOW(), NOW())
      ON CONFLICT (id) DO UPDATE SET
        title = EXCLUDED.title,
        category = EXCLUDED.category,
        description = EXCLUDED.description,
        "isPublished" = true,
        "updatedAt" = NOW()
    `, [id, gitTitle, gitCategory, gitDescription]);
  }
  console.log('  ✅ Judul & metadata modul Git di lms_content_db berhasil disesuaikan.');

  // 2. Update Judul & Deskripsi di lms_edutech_db
  const adminUser = await pEdutech.query(`SELECT id FROM "User" WHERE role = 'ADMIN' OR role = 'INSTRUCTOR' LIMIT 1`);
  const instructorId = adminUser.rows[0]?.id || '0c4daa73-9a80-45b5-b0b4-9ebe39ed0a44';

  for (const id of gitModuleIds) {
    await pEdutech.query(`
      INSERT INTO "Module" (id, title, category, description, "instructorId", "isVerified", "createdAt", "updatedAt")
      VALUES ($1, $2, $3, $4, $5, true, NOW(), NOW())
      ON CONFLICT (id) DO UPDATE SET
        title = EXCLUDED.title,
        category = EXCLUDED.category,
        description = EXCLUDED.description,
        "updatedAt" = NOW()
    `, [id, gitTitle, gitCategory, gitDescription, instructorId]);
  }
  console.log('  ✅ Judul & metadata modul Git di lms_edutech_db berhasil disesuaikan.');

  // 3. Ambil seluruh 7 Chapters dari lms_content_db
  const chaptersRes = await pContent.query(`SELECT * FROM "Chapter" WHERE "moduleId" = 'git' ORDER BY "order" ASC`);
  console.log(`\n📁 Menyinkronkan ${chaptersRes.rowCount} Chapters ke lms_edutech_db...`);

  for (const id of gitModuleIds) {
    for (const chap of chaptersRes.rows) {
      await pEdutech.query(`
        INSERT INTO "Chapter" (id, title, "moduleId", "order", "createdAt", "updatedAt")
        VALUES ($1, $2, $3, $4, NOW(), NOW())
        ON CONFLICT (id) DO UPDATE SET
          title = EXCLUDED.title,
          "moduleId" = EXCLUDED."moduleId",
          "order" = EXCLUDED."order",
          "updatedAt" = NOW()
      `, [chap.id, chap.title, id, chap.order]);
    }
  }

  // 4. Ambil seluruh 54 Lessons dari lms_content_db
  const lessonsRes = await pContent.query(`SELECT * FROM "Lesson" WHERE "moduleId" = 'git' ORDER BY "order" ASC`);
  console.log(`📚 Menyinkronkan ${lessonsRes.rowCount} Lessons ke lms_edutech_db...`);

  for (const id of gitModuleIds) {
    for (const les of lessonsRes.rows) {
      await pEdutech.query(`
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
        les.id,
        les.title,
        id,
        les.chapterId,
        les.chapter,
        les.type,
        les.order,
        typeof les.content === 'object' ? JSON.stringify(les.content) : les.content
      ]);
    }
  }

  // 5. Bersihkan data duplikat/chapter lama di lms_edutech_db
  const validChapterIds = chaptersRes.rows.map(c => c.id);
  const validLessonIds = lessonsRes.rows.map(l => l.id);

  // Bersihkan lesson usang
  const delOldLessons = await pEdutech.query(`
    DELETE FROM "Lesson"
    WHERE ("moduleId" = 'git' OR "moduleId" = 'git-github-version-control')
      AND id != ALL($1::text[])
  `, [validLessonIds]);
  console.log(`🧹 Membersihkan ${delOldLessons.rowCount} materi usang di lms_edutech_db.`);

  // Bersihkan chapter usang
  const delOldChaps = await pEdutech.query(`
    DELETE FROM "Chapter"
    WHERE ("moduleId" = 'git' OR "moduleId" = 'git-github-version-control')
      AND id != ALL($1::text[])
  `, [validChapterIds]);
  console.log(`🧹 Membersihkan ${delOldChaps.rowCount} chapter usang di lms_edutech_db.`);

  // 6. Verifikasi Akhir
  const finalContent = await pContent.query(`SELECT "moduleId", count(*) FROM "Lesson" WHERE "moduleId" = 'git' GROUP BY "moduleId"`);
  const finalEdutech = await pEdutech.query(`SELECT "moduleId", count(*) FROM "Lesson" WHERE "moduleId" = 'git' OR "moduleId" = 'git-github-version-control' GROUP BY "moduleId"`);

  console.log('\n📊 STATUS AKHIR MATERI:');
  console.log('lms_content_db:');
  console.table(finalContent.rows);
  console.log('lms_edutech_db:');
  console.table(finalEdutech.rows);

  await pContent.end();
  await pEdutech.end();
}

syncGitCurriculum().catch(console.error);
