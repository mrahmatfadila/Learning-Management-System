const { Pool } = require('pg');
require('dotenv').config({ path: 'c:/xampp/htdocs/Learning Management System/backend/.env' });

const part1 = require('./data/jsPart1Tutorial');
const part2 = require('./data/jsPart2Syntax');
const part3 = require('./data/jsPart3Operators');
const part4 = require('./data/jsPart4IfConditions');

const allJsLessons = [...part1, ...part2, ...part3, ...part4];

// Definisi Chapters
const jsChapters = [
  { id: 'js-chap-tutorial', title: 'JS Tutorial', order: 1 },
  { id: 'js-chap-syntax', title: 'JS Syntax', order: 2 },
  { id: 'js-chap-operators', title: 'JS Operation: JS Operators', order: 3 },
  { id: 'js-chap-if-conditions', title: 'JS Operation: JS If Conditions', order: 4 }
];

async function seedJavaScriptCurriculum() {
  const pContent = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_content_db' });
  const pEdutech = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db' });

  console.log('🚀 Memulai proses seeding 22 materi kurikulum JS Tutorial...');

  try {
    // =========================================================================
    // 1. SEEDING KE LMS_CONTENT_DB (TARGET UTAMA CONTENT API)
    // =========================================================================
    console.log('\n📦 [1/2] Menyimpan ke lms_content_db...');

    // Pastikan module 'javascript' ada
    await pContent.query(`
      INSERT INTO "Module" (id, title, category, description, level, duration, "order", "isPublished", "createdAt", "updatedAt")
      VALUES ('javascript', 'JavaScript: Logika & Interaktivitas', 'Programming', 'Kuasai bahasa pemrograman web modern paling populer dari dasar logika, percabangan, hingga interaktivitas tingkat lanjut.', 'Semua Level', '6 Minggu', 3, true, NOW(), NOW())
      ON CONFLICT (id) DO UPDATE SET
        title = EXCLUDED.title,
        description = EXCLUDED.description,
        category = EXCLUDED.category,
        "isPublished" = true,
        "updatedAt" = NOW();
    `);
    console.log('  ✅ Module javascript terverifikasi di lms_content_db');

    // Buat Chapters di lms_content_db
    for (const chap of jsChapters) {
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

    // Masukkan semua 22 Lessons ke lms_content_db
    for (const item of allJsLessons) {
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
      console.log(`    📄 [${item.order}/22] ${item.title} -> OK`);
    }

    // =========================================================================
    // 2. SINKRONISASI KE LMS_EDUTECH_DB (DATABASE UTAMA LMS)
    // =========================================================================
    console.log('\n📦 [2/2] Melakukan sinkronisasi ke lms_edutech_db...');

    // Cari ID module JS di edutech_db
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
    console.log(`  📌 ID Module JS di lms_edutech_db: ${edutechModId}`);

    // Pastikan chapters ada di edutech
    for (const chap of jsChapters) {
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

    // Masukkan Lessons ke edutech
    for (const item of allJsLessons) {
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

    console.log(`\n🎉 SEEDING SELESAI SEMPURNA! Total: ${allJsLessons.length} materi JavaScript berhasil dimasukkan ke lms_content_db & lms_edutech_db.`);
  } catch (err) {
    console.error('❌ Terjadi kesalahan saat seeding:', err);
    throw err;
  } finally {
    await pContent.end();
    await pEdutech.end();
  }
}

seedJavaScriptCurriculum().catch(console.error);
