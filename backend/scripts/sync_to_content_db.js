const { Pool } = require('pg');

async function syncDatabases() {
  const pSource = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db' });
  const pTarget = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_content_db' });

  console.log('🔄 Memulai sinkronisasi konten dari lms_edutech_db -> lms_content_db...');

  // 1. Ambil atau Buat Module CSS di lms_content_db
  const modRes = await pSource.query(`SELECT * FROM "Module" WHERE id LIKE '%css%' OR title ILIKE '%CSS%' LIMIT 1`);
  if (modRes.rowCount > 0) {
    const mod = modRes.rows[0];
    console.log(`📌 Syncing Module: ${mod.title} (${mod.id})`);
    
    // Pastikan module ada di lms_content_db (id bisa 'css' atau uuid)
    await pTarget.query(`
      INSERT INTO "Module" (id, title, description, category, "order", "createdAt", "updatedAt")
      VALUES ($1, $2, $3, $4, $5, NOW(), NOW())
      ON CONFLICT (id) DO UPDATE SET
        title = EXCLUDED.title,
        description = EXCLUDED.description,
        category = EXCLUDED.category,
        "updatedAt" = NOW()
    `, [mod.id, mod.title, mod.description, mod.category || 'Frontend', mod.order || 2]);
  }

  // 2. Sync Chapter CSS Tutorial
  const chapRes = await pSource.query(`SELECT * FROM "Chapter" WHERE title ILIKE '%CSS Tutorial%'`);
  for (const chap of chapRes.rows) {
    console.log(`📌 Syncing Chapter: ${chap.title} (${chap.id})`);
    await pTarget.query(`
      INSERT INTO "Chapter" (id, title, "moduleId", "order", "createdAt", "updatedAt")
      VALUES ($1, $2, $3, $4, NOW(), NOW())
      ON CONFLICT (id) DO UPDATE SET
        title = EXCLUDED.title,
        "moduleId" = EXCLUDED."moduleId",
        "order" = EXCLUDED."order",
        "updatedAt" = NOW()
    `, [chap.id, chap.title, chap.moduleId, chap.order || 1]);
  }

  // 3. Sync all CSS Lessons
  const lessonRes = await pSource.query(`SELECT * FROM "Lesson" WHERE id LIKE 'css%' ORDER BY "order" ASC`);
  console.log(`📚 Menemukan ${lessonRes.rowCount} materi CSS di lms_edutech_db. Memasukkan ke lms_content_db...`);

  for (const l of lessonRes.rows) {
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
      l.id,
      l.title,
      l.moduleId,
      l.chapterId,
      l.chapter,
      l.type,
      l.order,
      typeof l.content === 'string' ? l.content : JSON.stringify(l.content)
    ]);
    console.log(`  ✅ [${l.order}] ${l.title} (${l.id}) -> tersimpan di lms_content_db`);
  }

  // Verifikasi akhir di lms_content_db
  const countRes = await pTarget.query(`SELECT count(*) FROM "Lesson" WHERE id LIKE 'css%'`);
  console.log(`\n🎉 SINKRONISASI SUKSES! Total materi CSS di lms_content_db sekarang: ${countRes.rows[0].count}`);

  await pSource.end();
  await pTarget.end();
}

syncDatabases().catch(console.error);
