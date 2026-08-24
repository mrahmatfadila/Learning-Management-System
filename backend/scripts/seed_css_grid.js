const { Pool } = require('pg');
require('dotenv').config({ path: 'c:/xampp/htdocs/Learning Management System/backend/.env' });

const dbs = [
  'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db',
  'postgresql://postgres:Dil1212@localhost:5432/lms_content_db'
];

const gridLessons = [
  {
    id: 'grid-intro',
    title: 'Grid Intro',
    order: 1,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-teal-600 to-emerald-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-teal-150 border border-white/20">CSS Grid</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Grid Intro: Tata Letak 2 Dimensi Modern</h1>
    <p class="text-teal-100 text-sm md:text-base leading-relaxed">
      CSS Grid Layout adalah sistem tata letak <strong>2 Dimensi (Baris DAN Kolom sekaligus)</strong> paling kuat dalam CSS, memungkinkan pembuatan tata letak halaman web yang kompleks dengan sangat mudah.
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Perbedaan Utama: Flexbox vs CSS Grid</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
      <div class="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40 rounded-xl space-y-1">
        <strong class="text-blue-900 dark:text-blue-300">Flexbox (1 Dimensi):</strong>
        <p class="text-blue-800 dark:text-blue-400">Terbaik untuk komponen baris tunggal ATAU kolom tunggal (seperti Navbar, baris tombol, atau form input).</p>
      </div>
      <div class="p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 rounded-xl space-y-1">
        <strong class="text-emerald-900 dark:text-emerald-300">CSS Grid (2 Dimensi ⭐):</strong>
        <p class="text-emerald-800 dark:text-emerald-400">Terbaik untuk struktur tata letak makro seluruh halaman web (Header, Sidebar, Main Content, dan Footer dalam matriks baris & kolom).</p>
      </div>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-950/20 dark:to-emerald-950/20 border border-teal-200 dark:border-teal-900/40 rounded-2xl">
    <h4 class="text-teal-900 dark:text-teal-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-teal-800 dark:text-teal-400 text-xs leading-relaxed">
      Di Live Editor, amati bagaimana 6 kotak otomatis tersusun rapi menjadi matriks 3 kolom x 2 baris menggunakan <code>display: grid; grid-template-columns: repeat(3, 1fr);</code>!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #f8fafc; padding: 30px; }
    
    .grid-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr); /* 3 Kolom sama lebar */
      gap: 12px;
      max-width: 480px;
    }
    
    .grid-item {
      background: #0d9488;
      color: white;
      padding: 25px;
      border-radius: 12px;
      font-weight: bold;
      text-align: center;
      font-size: 14px;
    }
  </style>
</head>
<body>

  <h3>Matriks CSS Grid 2 Dimensi:</h3>
  <div class="grid-container">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
    <div class="grid-item">5</div>
    <div class="grid-item">6</div>
  </div>

</body>
</html>`,
    quiz: {
      question: "Apakah perbedaan fundamental paling mendasar antara CSS Flexbox dan CSS Grid?",
      options: [
        "Flexbox adalah model layout 1 Dimensi (baris ATAU kolom), sedangkan CSS Grid adalah model 2 Dimensi (baris DAN kolom sekaligus)",
        "Flexbox hanya untuk JavaScript, sedangkan Grid untuk HTML",
        "Grid tidak bisa menggunakan warna background",
        "Flexbox hanya bekerja di smartphone"
      ],
      correctIndex: 0,
      explanation: "Flexbox berfokus pada alur 1 sumbu (1D), sedangkan CSS Grid mampu mengontrol koordinasi baris dan kolom secara bersamaan (2D)."
    }
  },
  {
    id: 'grid-container',
    title: 'Grid Container',
    order: 2,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-emerald-600 to-teal-800 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-emerald-150 border border-white/20">CSS Grid Layout</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">Grid Container: Kolom, Baris, fr, & minmax()</h1>
    <p class="text-emerald-100 text-sm md:text-base leading-relaxed">
      Pelajari cara mendefinisikan trek kolom dan baris menggunakan satuan fraksi <code>fr</code>, fungsi <code>repeat()</code>, dan kartu otomatis responsif via <code>auto-fit / minmax()</code>.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <h3 class="font-bold text-emerald-600 text-sm">1. Satuan Fraksi (fr)</h3>
      <p class="text-slate-600 dark:text-slate-400"><code>grid-template-columns: 1fr 2fr 1fr;</code> membagi ruang sisa menjadi 4 bagian proporsional.</p>
    </div>

    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <h3 class="font-bold text-emerald-600 text-sm">2. Auto-Fit Responsif Tanpa Media Query ⭐</h3>
      <div class="bg-slate-900 text-slate-100 p-2.5 rounded-lg font-mono text-[11px]">
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      </div>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border border-emerald-200 dark:border-emerald-900/40 rounded-2xl">
    <h4 class="text-emerald-900 dark:text-emerald-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-emerald-800 dark:text-emerald-400 text-xs leading-relaxed">
      Di Live Editor, atur <code>gap: 20px;</code> pada grid container untuk memberi ruang spasi yang lega antar kartu!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #f8fafc; padding: 25px; }
    
    /* Grid Auto-Fit Responsif */
    .responsive-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 16px;
    }
    
    .card {
      background: white;
      padding: 20px;
      border-radius: 12px;
      border: 1px solid #cbd5e1;
      box-shadow: 0 4px 6px rgba(0,0,0,0.05);
      text-align: center;
      font-weight: bold;
      color: #0f172a;
    }
  </style>
</head>
<body>

  <h3>Grid Auto-Fit Responsif (minmax 160px):</h3>
  <div class="responsive-grid">
    <div class="card">Modul 1</div>
    <div class="card">Modul 2</div>
    <div class="card">Modul 3</div>
    <div class="card">Modul 4</div>
  </div>

</body>
</html>`,
    quiz: {
      question: "Kombinasi fungsi CSS Grid apa yang mampu membuat grid kartu otomatis bertambah/berkurang jumlah kolomnya sesuai lebar layar tanpa membutuhkan @media queries?",
      options: [
        "grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));",
        "grid-template-columns: auto auto auto;",
        "display: flex-grid;",
        "grid-columns: responsive;"
      ],
      correctIndex: 0,
      explanation: "'repeat(auto-fit, minmax(200px, 1fr));' secara cerdas menghitung berapa banyak kolom berukuran minimal 200px yang muat di layar saat ini."
    }
  },
  {
    id: 'grid-items',
    title: 'Grid Items',
    order: 3,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-cyan-700 to-blue-800 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-cyan-150 border border-white/20">CSS Grid Positioning</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">Grid Items: grid-column, grid-row, & grid-template-areas</h1>
    <p class="text-cyan-100 text-sm md:text-base leading-relaxed">
      Kendalikan posisi elemen anak di atas kanvas grid: membentang beberapa kolom (<code>grid-column: span 2</code>) atau merancang layout via visual template bernama (<code>grid-template-areas</code>).
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Merancang Tata Letak Bernama via grid-template-areas</h2>
    <div class="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed">
      .container {<br/>
      &nbsp;&nbsp;display: grid;<br/>
      &nbsp;&nbsp;grid-template-areas:<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;"header header header"<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;"sidebar content content"<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;"footer footer footer";<br/>
      }
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border border-cyan-200 dark:border-cyan-900/40 rounded-2xl">
    <h4 class="text-cyan-900 dark:text-cyan-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-cyan-800 dark:text-cyan-400 text-xs leading-relaxed">
      Di Live Editor, atur kartu header dengan <code>grid-column: span 3;</code> agar membentang penuh di 3 kolom!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #0f172a; padding: 25px; color: white; }
    
    .layout-grid {
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
      gap: 12px;
      max-width: 500px;
    }
    
    .item {
      background: #1e293b;
      padding: 18px;
      border-radius: 10px;
      border: 1px solid #334155;
      text-align: center;
      font-weight: bold;
      font-size: 13px;
    }
    
    /* Membentang 3 Kolom */
    .header-item {
      grid-column: span 3;
      background: #0284c7;
    }
    .main-item {
      grid-column: span 2;
      background: #4f46e5;
    }
  </style>
</head>
<body>

  <div class="layout-grid">
    <div class="item header-item">Header (grid-column: span 3)</div>
    <div class="item main-item">Main Content (span 2)</div>
    <div class="item">Sidebar</div>
    <div class="item header-item" style="background:#334155;">Footer (span 3)</div>
  </div>

</body>
</html>`,
    quiz: {
      question: "Deklarasi CSS apa yang digunakan agar sebuah grid item membentang selebar 2 kolom ke samping?",
      options: ["grid-column: span 2;", "grid-width: 2;", "grid-colspan: 2;", "column-size: double;"],
      correctIndex: 0,
      explanation: "'grid-column: span 2;' memerintahkan item membentang melintasi 2 jalur trek kolom grid."
    }
  },
  {
    id: 'grid-12-column-layout',
    title: 'Grid 12-column Layout',
    order: 4,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-indigo-700 to-purple-900 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-indigo-200 border border-white/20">CSS Architecture</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Grid 12-Column Layout: Standar Desain Dunia</h1>
    <p class="text-indigo-100 text-sm md:text-base leading-relaxed">
      Sistem Grid 12 Kolom adalah standar emas desain antarmuka (UI Design) di Bootstrap, Tailwind, dan Figma karena angka 12 dapat dibagi habis oleh 1, 2, 3, 4, 6, dan 12.
    </p>
  </div>

  <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono">
    <div class="p-3 bg-white dark:bg-[#0c0e18] rounded-xl border border-slate-200 dark:border-slate-800">
      <code>col-12</code> (100% Lebar Penuh)
    </div>
    <div class="p-3 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800">
      <code>col-6</code> (50% Setengah Layar)
    </div>
    <div class="p-3 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800">
      <code>col-4</code> (33.3% Sepertiga Layar)
    </div>
    <div class="p-3 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800">
      <code>col-3</code> (25% Seperempat Layar)
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border border-indigo-200 dark:border-indigo-900/40 rounded-2xl">
    <h4 class="text-indigo-900 dark:text-indigo-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-indigo-800 dark:text-indigo-400 text-xs leading-relaxed">
      Di Live Editor, rancang dashboard modern dengan kombinasi kartu 8 kolom untuk statistik grafik dan 4 kolom untuk daftar transaksi terbaru!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #f8fafc; padding: 25px; }
    
    /* Standar 12-Column Grid */
    .grid-12 {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 15px;
    }
    
    .card-box {
      background: white;
      padding: 20px;
      border-radius: 12px;
      border: 1px solid #cbd5e1;
      box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    }
    
    .col-12 { grid-column: span 12; }
    .col-8  { grid-column: span 8; }
    .col-4  { grid-column: span 4; }
  </style>
</head>
<body>

  <div class="grid-12">
    <div class="card-box col-12" style="background:#0f172a; color:white;">
      <h3 style="margin:0;">Dashboard Header (col-12: Lebar Penuh)</h3>
    </div>
    
    <div class="card-box col-8">
      <h4 style="margin:0 0 10px 0; color:#2563eb;">Statistik Grafik (col-8: 66.6%)</h4>
      <p style="color:#64748b; font-size:13px; margin:0;">Area visualisasi grafik penjualan utama.</p>
    </div>
    
    <div class="card-box col-4">
      <h4 style="margin:0 0 10px 0; color:#10b981;">Aktivitas (col-4: 33.3%)</h4>
      <p style="color:#64748b; font-size:13px; margin:0;">Notifikasi & transaksi terkini.</p>
    </div>
  </div>

</body>
</html>`,
    quiz: {
      question: "Mengapa angka 12 dipilih sebagai standar industri untuk sistem grid layout?",
      options: [
        "Karena angka 12 memiliki banyak faktor pembagi (1, 2, 3, 4, 6, 12), memberikan fleksibilitas layout tertinggi",
        "Karena ukuran resolusi monitor komputer harus kelipatan 12",
        "Karena diatur oleh hukum hak cipta W3C",
        "Karena browser tidak bisa membaca angka ganjil"
      ],
      correctIndex: 0,
      explanation: "Angka 12 sangat fleksibel karena dapat dibagi menjadi 2 kolom (6-6), 3 kolom (4-4-4), 4 kolom (3-3-3-3), maupun kombinasi asimetris (8-4, 9-3)."
    }
  },
  {
    id: 'css-supports',
    title: 'CSS @supports',
    order: 5,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-slate-800 to-indigo-950 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-indigo-300 border border-white/20">Feature Queries</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS @supports: Deteksi Fitur Browser</h1>
    <p class="text-slate-300 text-sm md:text-base leading-relaxed">
      Aturan <code>@supports</code> (Feature Query) memeriksa apakah browser pengguna mendukung fitur CSS modern tertentu (seperti <code>backdrop-filter</code> atau <code>display: grid</code>) sebelum menerapkannya, dengan fallback yang aman.
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Sintaks @supports</h2>
    <div class="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed">
      /* Gaya Dasar Fallback */<br/>
      .card { background: rgba(0, 0, 0, 0.9); }<br/><br/>
      /* Jika browser mendukung efek kaca buram modern: */<br/>
      @supports (backdrop-filter: blur(10px)) {<br/>
      &nbsp;&nbsp;.card {<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;background: rgba(255, 255, 255, 0.1);<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;backdrop-filter: blur(10px);<br/>
      &nbsp;&nbsp;}<br/>
      }
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-slate-100 to-indigo-50 dark:from-slate-900 dark:to-indigo-950/30 border border-slate-300 dark:border-slate-800 rounded-2xl">
    <h4 class="text-slate-900 dark:text-white font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
      Di Live Editor, perhatikan bagaimana <code>@supports</code> menguji dukungan fitur secara otomatis dan menerapkan efek styling terbaik yang didukung browser Anda!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: radial-gradient(circle, #312e81, #0f172a);
      min-height: 80vh;
      padding: 40px;
      color: white;
    }
    
    /* Fallback Default */
    .smart-card {
      background: #1e293b;
      padding: 24px;
      border-radius: 16px;
      max-width: 320px;
    }
    
    /* Pemeriksaan Fitur Modern @supports */
    @supports (backdrop-filter: blur(10px)) {
      .smart-card {
        background: rgba(255, 255, 255, 0.08);
        backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 20px 40px rgba(0,0,0,0.4);
      }
    }
  </style>
</head>
<body>

  <div class="smart-card">
    <h3 style="margin-top:0; color:#38bdf8;">CSS @supports Active</h3>
    <p style="font-size:13px; color:#cbd5e1; line-height:1.5;">
      Browser Anda mendukung backdrop-filter sehingga kartu kaca buram transparan diaktifkan secara otomatis!
    </p>
  </div>

</body>
</html>`,
    quiz: {
      question: "Apakah tujuan utama penggunaan aturan '@supports' di dalam stylesheet CSS?",
      options: [
        "Memeriksa apakah browser mendukung pasangan property: value CSS tertentu sebelum mengeksekusi blok kode di dalamnya",
        "Mengirim laporan tiket bantuan teknis ke W3C",
        "Menambah font baru ke sistem operasi",
        "Mematikan browser yang sudah usang"
      ],
      correctIndex: 0,
      explanation: "'@supports' bertindak sebagai feature query kondisional untuk menerapkan fitur CSS baru hanya pada peramban yang telah mendukungnya secara penuh."
    }
  }
];

async function run() {
  const modId = 'ba1383a2-219d-44ab-bf63-804d5a0f0902';
  const chapTitle = 'CSS Grid';

  for (const dbUrl of dbs) {
    const dbName = dbUrl.split('/').pop();
    console.log(`\n🚀 [${dbName}] Seeding Chapter "${chapTitle}" & 5 Lessons...`);
    const pool = new Pool({ connectionString: dbUrl });

    try {
      // 1. Check or Create Chapter "CSS Grid"
      let chRes = await pool.query(`SELECT id FROM "Chapter" WHERE "moduleId" = $1 AND title = $2`, [modId, chapTitle]);
      let chapterId;
      if (chRes.rowCount === 0) {
        const insertChap = await pool.query(`
          INSERT INTO "Chapter" (id, title, "moduleId", "order", "createdAt", "updatedAt")
          VALUES (gen_random_uuid(), $1, $2, 4, NOW(), NOW())
          RETURNING id
        `, [chapTitle, modId]);
        chapterId = insertChap.rows[0].id;
        console.log(`  ➕ Created Chapter: ${chapTitle} (${chapterId})`);
      } else {
        chapterId = chRes.rows[0].id;
        console.log(`  📌 Existing Chapter: ${chapTitle} (${chapterId})`);
      }

      // 2. Insert or update each of the 5 grid lessons
      for (const l of gridLessons) {
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
          chapTitle,
          l.order,
          JSON.stringify(contentJson)
        ]);
        console.log(`    ✅ [${l.order}] ${l.title} (${l.id})`);
      }

      const totalRes = await pool.query(`SELECT count(*) FROM "Lesson" WHERE "chapterId" = $1`, [chapterId]);
      console.log(`  🎉 [${dbName}] Total lessons in "${chapTitle}": ${totalRes.rows[0].count}`);
    } catch (err) {
      console.error(`  ❌ Error on ${dbName}:`, err.message);
    } finally {
      await pool.end();
    }
  }

  console.log('\n✨ ALL 5 CSS GRID LESSONS POPULATED ACROSS BOTH DATABASES!');
}

run().catch(console.error);
