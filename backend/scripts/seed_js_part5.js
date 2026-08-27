const { Pool } = require('pg');
require('dotenv').config({ path: 'c:/xampp/htdocs/Learning Management System/backend/.env' });

const setsLessons = require('./data/jsPart14Sets');
const mapsLessons = require('./data/jsPart15Maps');
const iterationsLessons = require('./data/jsPart16Iterations');
const mathLessons = require('./data/jsPart17Math');

const allNewJsLessons = [
  ...setsLessons,
  ...mapsLessons,
  ...iterationsLessons,
  ...mathLessons
];

const newChapters = [
  { id: 'js-chap-sets', title: 'JS Sets', order: 14 },
  { id: 'js-chap-maps', title: 'JS Maps', order: 15 },
  { id: 'js-chap-iterations', title: 'JS Iterations', order: 16 },
  { id: 'js-chap-math', title: 'JS Math', order: 17 }
];

async function seedJavaScriptPart5() {
  const pContent = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_content_db' });
  const pEdutech = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db' });

  console.log('🚀 Memulai proses seeding 16 materi baru JS (Sets, Maps, Iterations, Math)...');

  try {
    // 1. SEEDING KE LMS_CONTENT_DB
    console.log('\n📦 [1/2] Menyimpan ke lms_content_db...');
    for (const chap of newChapters) {
      await pContent.query(`
        INSERT INTO "Chapter" (id, "moduleId", title, "order", "createdAt", "updatedAt")
        VALUES ($1, 'javascript', $2, $3, NOW(), NOW())
        ON CONFLICT (id) DO UPDATE SET
          title = EXCLUDED.title,
          "order" = EXCLUDED."order",
          "updatedAt" = NOW();
      `, [chap.id, chap.title, chap.order]);
      console.log(`  📁 Chapter: ${chap.title} (${chap.id})`);
    }

    for (const item of allNewJsLessons) {
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
      `, [
        item.id,
        item.chapterId,
        item.chapter,
        item.title,
        item.order,
        contentPayload,
        item.code
      ]);
      console.log(`    📄 [${item.order}/90] ${item.title} -> OK`);
    }

    // 2. SINKRONISASI KE LMS_EDUTECH_DB
    console.log('\n📦 [2/2] Melakukan sinkronisasi ke lms_edutech_db...');
    const modRes = await pEdutech.query(`
      SELECT id FROM "Module" 
      WHERE id = 'mastering-ui-design-for-impactful-solutions' 
         OR id = 'javascript' 
         OR title ILIKE '%javascript%'
      LIMIT 1
    `);

    let edutechModId = 'mastering-ui-design-for-impactful-solutions';
    if (modRes.rowCount > 0) {
      edutechModId = modRes.rows[0].id;
    }

    for (const chap of newChapters) {
      await pEdutech.query(`
        INSERT INTO "Chapter" (id, "moduleId", title, "order", "createdAt", "updatedAt")
        VALUES ($1, $2, $3, $4, NOW(), NOW())
        ON CONFLICT (id) DO UPDATE SET
          "moduleId" = EXCLUDED."moduleId",
          title = EXCLUDED.title,
          "order" = EXCLUDED."order",
          "updatedAt" = NOW();
      `, [chap.id, edutechModId, chap.title, chap.order]);
    }

    for (const item of allNewJsLessons) {
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

      await pEdutech.query(`
        INSERT INTO "Lesson" (id, "moduleId", "chapterId", chapter, title, type, "order", content, "createdAt", "updatedAt")
        VALUES ($1, $2, $3, $4, $5, 'code', $6, $7, NOW(), NOW())
        ON CONFLICT (id) DO UPDATE SET
          "moduleId" = EXCLUDED."moduleId",
          "chapterId" = EXCLUDED."chapterId",
          chapter = EXCLUDED.chapter,
          title = EXCLUDED.title,
          type = 'code',
          "order" = EXCLUDED."order",
          content = EXCLUDED.content,
          "updatedAt" = NOW();
      `, [
        item.id,
        edutechModId,
        item.chapterId,
        item.chapter,
        item.title,
        item.order,
        contentPayload
      ]);
    }

    console.log(`\n🎉 SEEDING PART 5 SUKSES! Total: ${allNewJsLessons.length} materi baru berhasil dimasukkan ke database.`);
  } catch (err) {
    console.error('❌ Error saat seeding part 5:', err);
    throw err;
  } finally {
    await pContent.end();
    await pEdutech.end();
  }
}

seedJavaScriptPart5().catch(console.error);
