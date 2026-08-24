const { Pool } = require('pg');
require('dotenv').config({ path: 'c:/xampp/htdocs/Learning Management System/backend/.env' });

const dbs = [
  'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db',
  'postgresql://postgres:Dil1212@localhost:5432/lms_content_db'
];

const flexboxLessons = [
  {
    id: 'flex-intro',
    title: 'Flexbox Intro',
    order: 1,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-blue-150 border border-white/20">CSS Flexbox</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Flexbox Intro: Tata Letak 1 Dimensi Fleksibel</h1>
    <p class="text-blue-100 text-sm md:text-base leading-relaxed">
      Flexbox (Flexible Box Layout Module) adalah model tata letak 1 dimensi yang dirancang untuk mendistribusikan ruang dan menyelaraskan elemen secara fleksibel dan otomatis.
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Dua Sumbu Utama Flexbox (Axes)</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
      <div class="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40 rounded-xl space-y-1">
        <strong class="text-blue-900 dark:text-blue-300">1. Sumbu Utama (Main Axis) ➔</strong>
        <p class="text-blue-800 dark:text-blue-400">Arah utama aliran item flex (default horizontal dari kiri ke kanan saat <code>flex-direction: row</code>).</p>
      </div>
      <div class="p-4 bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-900/40 rounded-xl space-y-1">
        <strong class="text-purple-900 dark:text-purple-300">2. Sumbu Silang (Cross Axis) ⬇️</strong>
        <p class="text-purple-800 dark:text-purple-400">Sumbu yang tegak lurus dengan Main Axis (default vertikal dari atas ke bawah).</p>
      </div>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-900/40 rounded-2xl">
    <h4 class="text-blue-900 dark:text-blue-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-blue-800 dark:text-blue-400 text-xs leading-relaxed">
      Di Live Editor, amati bagaimana 3 kotak block yang awalnya menumpuk ke bawah langsung berjajar rapi ke samping hanya dengan menyetel <code>display: flex;</code> pada kontainer!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #f8fafc; padding: 30px; }
    
    /* Mengaktifkan Model Flexbox */
    .flex-container {
      display: flex;
      gap: 15px;
      background: #e2e8f0;
      padding: 15px;
      border-radius: 14px;
    }
    
    .flex-item {
      background: #3b82f6;
      color: white;
      padding: 20px;
      border-radius: 10px;
      font-weight: bold;
      text-align: center;
      flex: 1; /* Membagi lebar sama rata */
    }
  </style>
</head>
<body>

  <h3>Contoh Flexbox Dasar (display: flex):</h3>
  <div class="flex-container">
    <div class="flex-item">Item 1</div>
    <div class="flex-item" style="background:#6366f1;">Item 2</div>
    <div class="flex-item" style="background:#8b5cf6;">Item 3</div>
  </div>

</body>
</html>`,
    quiz: {
      question: "Properti apa yang wajib disematkan pada elemen induk (parent) untuk mengaktifkan konteks formatting Flexbox?",
      options: ["display: flex;", "flex: active;", "layout: flexbox;", "box-type: flex;"],
      correctIndex: 0,
      explanation: "'display: flex;' (atau inline-flex) pada elemen parent akan langsung mengubah seluruh elemen anak langsungnya menjadi flex items."
    }
  },
  {
    id: 'flex-container',
    title: 'Flex Container',
    order: 2,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-indigo-600 to-purple-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-indigo-150 border border-white/20">CSS Parent Rules</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">Flex Container: Arah, Perataan, & Jarak Spasi</h1>
    <p class="text-indigo-100 text-sm md:text-base leading-relaxed">
      Kuasai properti pengatur induk Flexbox: arah aliran (<code>flex-direction</code>), pembungkusan baris baru (<code>flex-wrap</code>), perataan sumbu utama (<code>justify-content</code>), perataan sumbu silang (<code>align-items</code>), dan jarak celah modern (<code>gap</code>).
    </p>
  </div>

  <div class="space-y-4">
    <div class="bg-white dark:bg-[#0c0e18] p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <h3 class="font-bold text-indigo-600 text-sm">1. justify-content (Perataan Sumbu Utama / Horizontal)</h3>
      <p class="text-xs text-slate-600 dark:text-slate-400">
        • <code>center</code>: Menengahkan semua item di tengah.<br/>
        • <code>space-between</code>: Item pertama di ujung kiri, item terakhir di ujung kanan.<br/>
        • <code>space-around</code> & <code>space-evenly</code>: Membagi ruang spasi secara merata.
      </p>
    </div>

    <div class="bg-white dark:bg-[#0c0e18] p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <h3 class="font-bold text-purple-600 text-sm">2. align-items (Perataan Sumbu Silang / Vertikal)</h3>
      <p class="text-xs text-slate-600 dark:text-slate-400">
        • <code>center</code>: Menengahkan item secara vertikal.<br/>
        • <code>stretch</code> (Default): Memanjangkan tinggi item mengikuti kontainer tertinggi.<br/>
        • <code>flex-start</code> & <code>flex-end</code>: Menempel di atas atau bawah.
      </p>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border border-indigo-200 dark:border-indigo-900/40 rounded-2xl">
    <h4 class="text-indigo-900 dark:text-indigo-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-indigo-800 dark:text-indigo-400 text-xs leading-relaxed">
      Di Live Editor, atur <code>justify-content: space-between; align-items: center;</code> pada navbar untuk memisahkan logo di kiri dan link di kanan secara proporsional!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #0f172a; padding: 30px; }
    
    .nav-container {
      display: flex;
      justify-content: space-between; /* Pisahkan ke ujung kiri & kanan */
      align-items: center;            /* Tengah secara vertikal */
      background: #1e293b;
      padding: 16px 24px;
      border-radius: 14px;
      color: white;
    }
    .brand { font-size: 18px; font-weight: 900; color: #38bdf8; }
    .nav-menu { display: flex; gap: 20px; list-style: none; margin: 0; padding: 0; }
    .nav-menu a { color: #94a3b8; text-decoration: none; font-size: 14px; font-weight: 600; }
    .nav-menu a:hover { color: white; }
  </style>
</head>
<body>

  <header class="nav-container">
    <div class="brand">⚡ LMS Flex</div>
    <ul class="nav-menu">
      <li><a href="#">Beranda</a></li>
      <li><a href="#">Materi</a></li>
      <li><a href="#">Tugas</a></li>
    </ul>
  </header>

</body>
</html>`,
    quiz: {
      question: "Nilai properti 'justify-content' apa yang mendistribusikan item sehingga item pertama menempel di tepi paling kiri dan item terakhir di tepi paling kanan?",
      options: ["justify-content: space-around;", "justify-content: space-between;", "justify-content: space-evenly;", "justify-content: center;"],
      correctIndex: 1,
      explanation: "'justify-content: space-between;' memberikan spasi merata di antara elemen anak dengan menempelkan elemen paling awal dan paling akhir ke batas tepi kontainer."
    }
  },
  {
    id: 'flex-items',
    title: 'Flex Items',
    order: 3,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-purple-700 to-pink-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-purple-150 border border-white/20">CSS Child Rules</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">Flex Items: flex-grow, flex-shrink, & order</h1>
    <p class="text-purple-100 text-sm md:text-base leading-relaxed">
      Setiap anak di dalam kontainer flex memiliki kontrol individual untuk membesar menyerap ruang sisa (<code>flex-grow</code>), menyusut (<code>flex-shrink</code>), ukuran dasar (<code>flex-basis</code>), hingga mengubah urutan visual (<code>order</code>).
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <code class="font-bold text-purple-600">flex-grow: 2;</code>
      <p class="text-slate-600 dark:text-slate-400">Mengambil porsi sisa ruang dua kali lebih besar dibanding item dengan <code>flex-grow: 1</code>.</p>
    </div>
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <code class="font-bold text-purple-600">align-self: flex-end;</code>
      <p class="text-slate-600 dark:text-slate-400">Menimpa aturan perataan <code>align-items</code> induk hanya untuk satu item ini saja.</p>
    </div>
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <code class="font-bold text-purple-600">order: -1;</code>
      <p class="text-slate-600 dark:text-slate-400">Memaksa item tampil paling depan tanpa mengubah urutan baris kode HTML asli.</p>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border border-purple-200 dark:border-purple-900/40 rounded-2xl">
    <h4 class="text-purple-900 dark:text-purple-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-purple-800 dark:text-purple-400 text-xs leading-relaxed">
      Di Live Editor, amati bagaimana input pencarian dengan <code>flex-grow: 1;</code> otomatis memanjang menyerap seluruh ruang kosong yang tersisa!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #f8fafc; padding: 30px; }
    
    .search-bar-container {
      display: flex;
      gap: 10px;
      max-width: 450px;
      background: white;
      padding: 8px;
      border-radius: 12px;
      border: 1px solid #cbd5e1;
      box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    }
    
    /* Input mengambil seluruh sisa ruang */
    .search-input {
      flex-grow: 1;
      border: none;
      outline: none;
      padding: 8px 12px;
      font-size: 14px;
    }
    
    .search-btn {
      background: #7c3aed;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 8px;
      font-weight: bold;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <div class="search-bar-container">
    <input type="text" class="search-input" placeholder="Cari materi kursus...">
    <button class="search-btn">Cari</button>
  </div>

</body>
</html>`,
    quiz: {
      question: "Nilai properti flex-grow apa yang memungkinkan sebuah elemen anak flex mengisi seluruh sisa ruang kosong di dalam kontainer?",
      options: ["flex-grow: 0;", "flex-grow: 1;", "flex-grow: none;", "flex-grow: -1;"],
      correctIndex: 1,
      explanation: "'flex-grow: 1;' memberi tahu item untuk memperbesar dirinya dan menyerap seluruh ruang sisa yang belum terisi di kontainer."
    }
  },
  {
    id: 'flex-responsive',
    title: 'Flex Responsive',
    order: 4,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-rose-600 to-orange-600 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-rose-150 border border-white/20">CSS Responsive Flex</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">Flex Responsive: Kartu Grid & Tata Letak Mobile</h1>
    <p class="text-rose-100 text-sm md:text-base leading-relaxed">
      Dengan mengombinasikan <code>flex-wrap: wrap</code> dan Media Queries, Anda dapat membangun tata letak kartu grid yang otomatis beradaptasi dari 3 kolom di desktop menjadi 1 kolom tumpuk di layar HP.
    </p>
  </div>

  <div class="p-5 bg-gradient-to-r from-rose-50 to-orange-50 dark:from-rose-950/20 dark:to-orange-950/20 border border-rose-200 dark:border-rose-900/40 rounded-2xl">
    <h4 class="text-rose-900 dark:text-rose-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-rose-800 dark:text-rose-400 text-xs leading-relaxed">
      Di Live Editor, kecilkan lebar jendela browser Anda untuk melihat 3 kartu kursus secara otomatis membungkus diri ke baris baru (*wrap*) dengan anggun!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #f8fafc; padding: 25px; }
    
    .card-grid {
      display: flex;
      flex-wrap: wrap; /* Izinkan turun ke baris baru */
      gap: 16px;
    }
    
    .course-card {
      background: white;
      padding: 20px;
      border-radius: 14px;
      border: 1px solid #e2e8f0;
      box-shadow: 0 4px 6px rgba(0,0,0,0.05);
      
      /* Basis 1/3 lebar di desktop dikurangi celah gap */
      flex: 1 1 calc(33.333% - 16px);
      min-width: 180px;
      box-sizing: border-box;
    }
  </style>
</head>
<body>

  <h3>Grid Kartu Responsif (flex-wrap: wrap):</h3>
  <div class="card-grid">
    <div class="course-card">
      <h4 style="margin:0 0 6px 0; color:#e11d48;">HTML Dasar</h4>
      <p style="margin:0; font-size:13px; color:#64748b;">Fondasi struktur halaman web.</p>
    </div>
    <div class="course-card">
      <h4 style="margin:0 0 6px 0; color:#2563eb;">CSS Styling</h4>
      <p style="margin:0; font-size:13px; color:#64748b;">Desain & tata letak responsif.</p>
    </div>
    <div class="course-card">
      <h4 style="margin:0 0 6px 0; color:#d97706;">JavaScript</h4>
      <p style="margin:0; font-size:13px; color:#64748b;">Interaktivitas dinamis.</p>
    </div>
  </div>

</body>
</html>`,
    quiz: {
      question: "Properti apa yang harus disetel pada Flex Container agar item-item anaknya tidak dipaksa terjepit di satu baris dan diizinkan turun ke baris baru saat ruang habis?",
      options: ["flex-wrap: wrap;", "flex-break: true;", "flex-flow: column;", "overflow: new-line;"],
      correctIndex: 0,
      explanation: "'flex-wrap: wrap;' mengizinkan item flex mengalir membungkus diri ke baris baru ketika lebar kontainer tidak lagi mencukupi."
    }
  }
];

async function run() {
  const modId = 'ba1383a2-219d-44ab-bf63-804d5a0f0902';
  const chapTitle = 'CSS Flexbox';

  for (const dbUrl of dbs) {
    const dbName = dbUrl.split('/').pop();
    console.log(`\n🚀 [${dbName}] Seeding Chapter "${chapTitle}" & 4 Lessons...`);
    const pool = new Pool({ connectionString: dbUrl });

    try {
      // 1. Check or Create Chapter "CSS Flexbox"
      let chRes = await pool.query(`SELECT id FROM "Chapter" WHERE "moduleId" = $1 AND title = $2`, [modId, chapTitle]);
      let chapterId;
      if (chRes.rowCount === 0) {
        const insertChap = await pool.query(`
          INSERT INTO "Chapter" (id, title, "moduleId", "order", "createdAt", "updatedAt")
          VALUES (gen_random_uuid(), $1, $2, 3, NOW(), NOW())
          RETURNING id
        `, [chapTitle, modId]);
        chapterId = insertChap.rows[0].id;
        console.log(`  ➕ Created Chapter: ${chapTitle} (${chapterId})`);
      } else {
        chapterId = chRes.rows[0].id;
        console.log(`  📌 Existing Chapter: ${chapTitle} (${chapterId})`);
      }

      // 2. Insert or update each of the 4 flexbox lessons
      for (const l of flexboxLessons) {
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

  console.log('\n✨ ALL 4 CSS FLEXBOX LESSONS POPULATED ACROSS BOTH DATABASES!');
}

run().catch(console.error);
