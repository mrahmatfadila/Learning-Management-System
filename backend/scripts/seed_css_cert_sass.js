const { Pool } = require('pg');
require('dotenv').config({ path: 'c:/xampp/htdocs/Learning Management System/backend/.env' });

const dbs = [
  'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db',
  'postgresql://postgres:Dil1212@localhost:5432/lms_content_db'
];

const newChaptersAndLessons = [
  {
    chapterTitle: 'CSS Certificate',
    chapterOrder: 6,
    lesson: {
      id: 'css-certificate',
      title: 'CSS Certificate',
      order: 1,
      theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-amber-500 via-orange-600 to-amber-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-amber-100 border border-white/20">Official Certification</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">Sertifikasi Kompetensi CSS Developer</h1>
    <p class="text-amber-100 text-sm md:text-base leading-relaxed">
      Selamat! Anda telah menyelesaikan seluruh kurikulum pembelajaran CSS dari dasar, lanjutan, Flexbox, CSS Grid, hingga Responsive Web Design. Uji pemahaman Anda untuk memperoleh Sertifikat Resmi.
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Rangkuman Cakupan Ujian Kompetensi</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
      <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
        <strong class="text-blue-600 font-bold">1. CSS Core & Box Model:</strong>
        <p class="text-slate-600 dark:text-slate-400">Selector, Specificity, !important, Margin, Padding, Border, Box-sizing, dan Posisi (Relative, Absolute, Fixed, Sticky, Z-index).</p>
      </div>
      <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
        <strong class="text-purple-600 font-bold">2. Advanced Styling & Effects:</strong>
        <p class="text-slate-600 dark:text-slate-400">Gradien, Box Shadow, Glassmorphism, 2D/3D Transforms, Transitions, Keyframe Animations, Pseudo-classes & Pseudo-elements.</p>
      </div>
      <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
        <strong class="text-emerald-600 font-bold">3. Modern Layout Systems:</strong>
        <p class="text-slate-600 dark:text-slate-400">Flexbox (Justify, Align, Grow, Shrink) & CSS Grid 2D (fr, repeat, auto-fit minmax, 12-column layout).</p>
      </div>
      <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
        <strong class="text-amber-600 font-bold">4. Responsive Web Design (RWD):</strong>
        <p class="text-slate-600 dark:text-slate-400">Mobile-First, Meta Viewport, Breakpoint Media Queries, Gambar & Video Responsif (aspect-ratio).</p>
      </div>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border border-amber-200 dark:border-amber-900/40 rounded-2xl">
    <h4 class="text-amber-900 dark:text-amber-300 font-black text-sm mb-1">🎓 Syarat Kelulusan:</h4>
    <p class="text-amber-800 dark:text-amber-400 text-xs leading-relaxed">
      Selesaikan kuis final di bawah ini dengan skor minimal <strong>80%</strong> untuk memvalidasi kredensial kelulusan modul CSS Anda.
    </p>
  </div>
</div>
`,
      code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; background: #0f172a; padding: 30px; display: flex; justify-content: center; }
    
    .cert-badge {
      background: linear-gradient(135deg, #1e293b, #0f172a);
      border: 2px solid #f59e0b;
      padding: 30px;
      border-radius: 20px;
      text-align: center;
      color: white;
      max-width: 360px;
      box-shadow: 0 20px 40px rgba(245,158,11,0.15);
    }
    .cert-icon { font-size: 50px; margin-bottom: 10px; }
    .cert-title { font-size: 20px; font-weight: 900; color: #f59e0b; margin: 0; }
    .cert-desc { font-size: 13px; color: #94a3b8; margin: 10px 0 20px 0; }
    .cert-btn {
      background: #f59e0b;
      color: #0f172a;
      border: none;
      padding: 10px 24px;
      font-weight: 900;
      border-radius: 50px;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <div class="cert-badge">
    <div class="cert-icon">🏆</div>
    <h2 class="cert-title">Certified CSS Specialist</h2>
    <p class="cert-desc">Lulus kurikulum CSS Fundamentals, Advanced, Flexbox, Grid, & RWD.</p>
    <button class="cert-btn">Klaim Sertifikat 🎓</button>
  </div>

</body>
</html>`,
      quiz: {
        question: "Manakah kombinasi teknologi modern yang paling tepat digunakan untuk merakit layout website responsif tingkat industri?",
        options: [
          "HTML Semantik + CSS Grid (Struktur Makro) + Flexbox (Komponen Mikro) + Mobile-First Media Queries",
          "Tabel HTML bersarang (Nested Tables) + Float",
          "Inline CSS di setiap tag tanpa stylesheet",
          "Gambar statis satu halaman penuh tanpa teks"
        ],
        correctIndex: 0,
        explanation: "Standar modern industri menggabungkan HTML5 Semantik, CSS Grid untuk struktur makro halaman, Flexbox untuk komponen antarmuka mikro, dan Media Queries Mobile-First."
      }
    }
  },
  {
    chapterTitle: 'SASS Tutorial',
    chapterOrder: 7,
    lesson: {
      id: 'sass-tutorial',
      title: 'SASS Tutorial',
      order: 1,
      theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-pink-600 via-rose-600 to-purple-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-pink-150 border border-white/20">CSS Preprocessor</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">SASS / SCSS: CSS dengan Kekuatan Super</h1>
    <p class="text-pink-100 text-sm md:text-base leading-relaxed">
      SASS (Syntactically Awesome Style Sheets) adalah preprosesor CSS paling populer yang menambahkan fitur bahasa pemrograman seperti variabel, nesting bersarang, mixins, fungsi, dan inheritance ke dalam CSS.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <h3 class="font-bold text-pink-600 text-sm">1. Variables ($name)</h3>
      <p class="text-slate-600 dark:text-slate-400">Mendefinisikan variabel dengan tanda <code>$</code>:</p>
      <code>$primary-color: #ec4899; $radius: 12px;</code>
    </div>

    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <h3 class="font-bold text-pink-600 text-sm">2. Nesting (Selector Bersarang)</h3>
      <p class="text-slate-600 dark:text-slate-400">Menulis selector anak di dalam kurung kurawal parent, termasuk pseudo-class via <code>&amp;:hover</code>.</p>
    </div>

    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <h3 class="font-bold text-pink-600 text-sm">3. Mixins (@mixin & @include)</h3>
      <p class="text-slate-600 dark:text-slate-400">Blok kode yang dapat digunakan kembali dengan parameter argumen kustom:</p>
      <code>@mixin flex-center { display: flex; justify-content: center; align-items: center; }</code>
    </div>

    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <h3 class="font-bold text-pink-600 text-sm">4. Inheritance (@extend)</h3>
      <p class="text-slate-600 dark:text-slate-400">Mewarisi seluruh aturan style dari class lain tanpa menulis ulang kode.</p>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 border border-pink-200 dark:border-pink-900/40 rounded-2xl">
    <h4 class="text-pink-900 dark:text-pink-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-pink-800 dark:text-pink-400 text-xs leading-relaxed">
      Di Live Editor, amati bagaimana struktur SCSS dikompilasi menjadi CSS standar yang sangat bersih dan rapi!
    </p>
  </div>
</div>
`,
      code: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* HASIL KOMPILASI DARI KODE SCSS:
      $brand-color: #e11d48;
      
      .card {
        background: white;
        padding: 20px;
        border-radius: 14px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.05);
        
        h3 {
          color: $brand-color;
          margin-top: 0;
        }
        
        .btn {
          background: $brand-color;
          color: white;
          padding: 8px 16px;
          border-radius: 8px;
          text-decoration: none;
          
          &:hover {
            background: darken($brand-color, 10%);
          }
        }
      }
    */

    /* CSS Hasil Kompilasi Browser */
    body { font-family: Arial, sans-serif; background: #f8fafc; padding: 30px; }
    
    .card {
      background: white;
      padding: 24px;
      border-radius: 14px;
      border: 1px solid #e2e8f0;
      box-shadow: 0 4px 6px rgba(0,0,0,0.05);
      max-width: 320px;
    }
    .card h3 {
      color: #e11d48;
      margin-top: 0;
    }
    .card p {
      color: #64748b;
      font-size: 13px;
      line-height: 1.5;
    }
    .card .btn {
      display: inline-block;
      background: #e11d48;
      color: white;
      padding: 10px 18px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: bold;
      font-size: 13px;
      transition: background 0.2s;
    }
    .card .btn:hover {
      background: #be123c;
    }
  </style>
</head>
<body>

  <div class="card">
    <h3>SASS / SCSS Power</h3>
    <p>Nesting dan variabel $brand-color membuat arsitektur CSS modular dan mudah dirawat.</p>
    <a href="#" class="btn">Pelajari SCSS →</a>
  </div>

</body>
</html>`,
      quiz: {
        question: "Simbol apakah yang digunakan untuk mendefinisikan variabel di dalam bahasa SASS / SCSS?",
        options: ["Tanda Dolar ($)", "Tanda Titik Dua (:)", "Tanda Pagar (#)", "Tanda Persen (%)"],
        correctIndex: 0,
        explanation: "Di SASS/SCSS, variabel didefinisikan dengan awalan simbol dolar ($), contohnya: '$primary-color: #e11d48;'."
      }
    }
  }
];

async function run() {
  const modId = 'ba1383a2-219d-44ab-bf63-804d5a0f0902';

  for (const dbUrl of dbs) {
    const dbName = dbUrl.split('/').pop();
    console.log(`\n🚀 [${dbName}] Seeding Chapters "CSS Certificate" & "SASS Tutorial"...`);
    const pool = new Pool({ connectionString: dbUrl });

    try {
      for (const item of newChaptersAndLessons) {
        // 1. Check or Create Chapter
        let chRes = await pool.query(`SELECT id FROM "Chapter" WHERE "moduleId" = $1 AND title = $2`, [modId, item.chapterTitle]);
        let chapterId;
        if (chRes.rowCount === 0) {
          const insertChap = await pool.query(`
            INSERT INTO "Chapter" (id, title, "moduleId", "order", "createdAt", "updatedAt")
            VALUES (gen_random_uuid(), $1, $2, $3, NOW(), NOW())
            RETURNING id
          `, [item.chapterTitle, modId, item.chapterOrder]);
          chapterId = insertChap.rows[0].id;
          console.log(`  ➕ Created Chapter: ${item.chapterTitle} (${chapterId})`);
        } else {
          chapterId = chRes.rows[0].id;
          console.log(`  📌 Existing Chapter: ${item.chapterTitle} (${chapterId})`);
        }

        // 2. Insert or update Lesson
        const l = item.lesson;
        const contentJson = {
          theory: l.theory,
          code: l.code,
          quiz: l.quiz
        };

        await pool.query(`
          INSERT INTO "Lesson" (id, title, "moduleId", "chapterId", chapter, type, "order", content, "createdAt", "updatedAt")
          VALUES ($1, $2, $3, $4, $5, 'code', $6, $7, NOW(), NOW())
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
          modId,
          chapterId,
          item.chapterTitle,
          l.order,
          JSON.stringify(contentJson)
        ]);
        console.log(`    ✅ [${l.order}] ${l.title} (${l.id})`);
      }
    } catch (err) {
      console.error(`  ❌ Error on ${dbName}:`, err.message);
    } finally {
      await pool.end();
    }
  }

  console.log('\n✨ BOTH CSS CERTIFICATE & SASS TUTORIAL CHAPTERS POPULATED ACROSS BOTH DATABASES!');
}

run().catch(console.error);
