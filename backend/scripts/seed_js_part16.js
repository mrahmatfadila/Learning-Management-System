const { Pool } = require('pg');
require('dotenv').config({ path: 'c:/xampp/htdocs/Learning Management System/backend/.env' });

const metaProxyLessons = require('./data/jsPart39MetaProxy');
const typedArraysLessons = require('./data/jsPart40TypedArrays');
const domNavLessons = require('./data/jsPart41DomNav');
const graphicsLessons = require('./data/jsPart42Graphics');

const allNewJsLessons = [
  ...metaProxyLessons,
  ...typedArraysLessons,
  ...domNavLessons,
  ...graphicsLessons
];

const newChapters = [
  { id: 'js-chap-metaproxy', title: 'JS Meta & Proxy', order: 39 },
  { id: 'js-chap-typedarrays', title: 'JS Typed Arrays', order: 40 },
  { id: 'js-chap-domnav', title: 'JS DOM Navigation', order: 41 },
  { id: 'js-chap-graphics', title: 'JS Graphics', order: 42 }
];

async function seedJavaScriptPart16() {
  const pContent = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_content_db' });
  const pEdutech = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db' });

  console.log('🚀 Memulai proses seeding 20 materi baru JS (Meta & Proxy, Typed Arrays, DOM Nav, Graphics)...');

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
      console.log(`    📄 [${item.order}/277] ${item.title} -> OK`);
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

    console.log(`\n🎉 SEEDING PART 16 SUKSES! Total: ${allNewJsLessons.length} materi baru berhasil dimasukkan ke database.`);
  } catch (err) {
    console.error('❌ Error saat seeding part 16:', err);
    throw err;
  } finally {
    await pContent.end();
    await pEdutech.end();
  }
}

seedJavaScriptPart16().catch(console.error);
