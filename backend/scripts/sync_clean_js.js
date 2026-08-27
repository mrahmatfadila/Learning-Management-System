const { Pool } = require('pg');

async function syncAndClean() {
  const pContent = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_content_db' });
  const pEdutech = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db' });

  console.log('🔄 Memeriksa & menyinkronkan data...');

  // 1. Re-seed Order 6 & 153 ke lms_content_db
  const syntaxData = require('./data/jsPart2Syntax');
  const versionsData = require('./data/jsPart25Versions');

  const order6 = syntaxData.find(x => x.order === 6);
  const order153 = versionsData.find(x => x.order === 153);

  for (const item of [order6, order153]) {
    if (!item) continue;
    const contentPayload = JSON.stringify({
      overview: item.overview,
      theory: item.theory,
      code: item.code,
      codeExplanation: item.codeExplanation,
      quiz: item.quiz,
      challenge: item.challenge,
      color: 'yellow',
      w3schoolStructure: {
        penjelasanJudul: item.overview,
        isiMateri: item.theory,
        contohCoding: item.code,
        penjelasanCodingSatuPerSatu: item.codeExplanation,
        pertanyaanKuis: item.quiz,
        codinganLatihan: item.challenge
      }
    });

    await pContent.query(`
      INSERT INTO "Lesson" (id, "moduleId", "chapterId", chapter, title, type, "order", content, "starterCode", "createdAt", "updatedAt")
      VALUES ($1, 'javascript', $2, $3, $4, 'code', $5, $6, $7, NOW(), NOW())
      ON CONFLICT (id) DO UPDATE SET
        "moduleId" = 'javascript',
        "chapterId" = EXCLUDED."chapterId",
        chapter = EXCLUDED.chapter,
        title = EXCLUDED.title,
        type = 'code',
        "order" = EXCLUDED."order",
        content = EXCLUDED.content,
        "starterCode" = EXCLUDED."starterCode",
        "updatedAt" = NOW();
    `, [item.id, item.chapterId, item.chapter, item.title, item.order, contentPayload, item.code]);

    console.log(`  ✅ Re-seeded [${item.order}/306] ${item.title} (${item.id}) ke lms_content_db`);
  }

  // 2. Cek total di lms_content_db
  const countContent = await pContent.query('SELECT count(*) FROM "Lesson" WHERE "moduleId" = \'javascript\'');
  console.log(`\n📊 Total Materi di lms_content_db: ${countContent.rows[0].count} materi.`);

  // 3. Ambil semua 306 materi dari lms_content_db dan sinkronkan ke lms_edutech_db
  const allContentLessons = await pContent.query('SELECT * FROM "Lesson" WHERE "moduleId" = \'javascript\' ORDER BY "order" ASC');
  
  let edutechModId = 'mastering-ui-design-for-impactful-solutions';
  for (const item of allContentLessons.rows) {
    await pEdutech.query(`
      INSERT INTO "Lesson" (id, "moduleId", "chapterId", chapter, title, type, "order", content, "createdAt", "updatedAt")
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW(), NOW())
      ON CONFLICT (id) DO UPDATE SET
        "moduleId" = EXCLUDED."moduleId",
        "chapterId" = EXCLUDED."chapterId",
        chapter = EXCLUDED.chapter,
        title = EXCLUDED.title,
        type = EXCLUDED.type,
        "order" = EXCLUDED."order",
        content = EXCLUDED.content,
        "updatedAt" = NOW();
    `, [item.id, edutechModId, item.chapterId, item.chapter, item.title, item.type, item.order, item.content]);
  }

  // 4. Identifikasi materi usang (obsolete) di lms_edutech_db yang TIDAK ada di lms_content_db (21 materi lama)
  const validIds = allContentLessons.rows.map(r => r.id);
  const obsoleteRes = await pEdutech.query(`
    SELECT id, title, "order" FROM "Lesson"
    WHERE ("moduleId" = 'mastering-ui-design-for-impactful-solutions' OR "moduleId" = 'javascript')
      AND id != ALL($1::text[])
    ORDER BY "order" ASC
  `, [validIds]);

  console.log(`\n🔍 Ditemukan ${obsoleteRes.rowCount} materi lama/usang di lms_edutech_db yang siap dibersihkan:`);
  console.table(obsoleteRes.rows);

  await pContent.end();
  await pEdutech.end();
}

syncAndClean().catch(console.error);
