const { Pool } = require('pg');
require('dotenv').config({ path: 'c:/xampp/htdocs/Learning Management System/backend/.env' });

const dbs = [
  'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db',
  'postgresql://postgres:Dil1212@localhost:5432/lms_content_db'
];

const examplesLessons = [
  {
    id: 'css-templates',
    title: 'CSS Templates',
    order: 1,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-blue-150 border border-white/20">CSS Showcase</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Templates: Template Desain Siap Pakai</h1>
    <p class="text-blue-100 text-sm md:text-base leading-relaxed">
      Kumpulan template layout profesional responsif siap pakai: Landing Page Produk, Portfolio Developer, Dashboard Admin, dan Kartu Harga (*Pricing Table*).
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <h3 class="font-bold text-blue-600">1. Portfolio Template</h3>
      <p class="text-slate-600 dark:text-slate-400">Hero profil elegan, galeri karya proyek, dan form kontak.</p>
    </div>
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <h3 class="font-bold text-indigo-600">2. Pricing Table</h3>
      <p class="text-slate-600 dark:text-slate-400">Kartu perbandingan paket harga bertingkat dengan efek badge terpopuler.</p>
    </div>
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <h3 class="font-bold text-purple-600">3. SaaS Landing Page</h3>
      <p class="text-slate-600 dark:text-slate-400">Header navigasi melayang (*sticky*), grid fitur, dan tombol CTA bercahaya.</p>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-900/40 rounded-2xl">
    <h4 class="text-blue-900 dark:text-blue-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-blue-800 dark:text-blue-400 text-xs leading-relaxed">
      Di Live Editor, uji interaksi template kartu harga (*Pricing Card*) dengan efek hover elevasi modern!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #f1f5f9; padding: 30px; display: flex; justify-content: center; }
    
    .pricing-card {
      background: white;
      border-radius: 18px;
      padding: 30px;
      width: 260px;
      text-align: center;
      border: 2px solid #e2e8f0;
      box-shadow: 0 10px 20px rgba(0,0,0,0.05);
      position: relative;
      transition: transform 0.3s ease;
    }
    .pricing-card:hover { transform: translateY(-8px); }
    
    .badge-pop {
      position: absolute;
      top: -12px;
      left: 50%;
      transform: translateX(-50%);
      background: #2563eb;
      color: white;
      padding: 4px 14px;
      font-size: 11px;
      font-weight: bold;
      border-radius: 50px;
    }
    .price { font-size: 32px; font-weight: 900; color: #0f172a; margin: 15px 0; }
    .btn-buy {
      background: #2563eb;
      color: white;
      padding: 10px;
      width: 100%;
      border: none;
      border-radius: 10px;
      font-weight: bold;
      cursor: pointer;
      margin-top: 15px;
    }
  </style>
</head>
<body>

  <div class="pricing-card">
    <span class="badge-pop">TERPOPULER</span>
    <h3 style="color:#64748b; margin-top:10px;">Pro Plan</h3>
    <div class="price">Rp 99K<span style="font-size:14px; color:#94a3b8; font-weight:normal;">/bln</span></div>
    <p style="font-size:13px; color:#64748b;">Akses penuh seluruh 90+ materi coding & sertifikat resmi.</p>
    <button class="btn-buy">Langganan Sekarang</button>
  </div>

</body>
</html>`,
    quiz: {
      question: "Teknik positioning apa yang digunakan untuk menempatkan badge 'TERPOPULER' melayang persis di tengah batas atas kartu?",
      options: [
        "position: absolute; top: -12px; left: 50%; transform: translateX(-50%); dengan induk position: relative;",
        "float: center;",
        "display: inline-block;",
        "margin-top: -500px;"
      ],
      correctIndex: 0,
      explanation: "Kombinasi position: absolute, left: 50%, dan transform: translateX(-50%) adalah standar centering presisi elemen absolut di atas induk position: relative."
    }
  },
  {
    id: 'css-examples',
    title: 'CSS Examples',
    order: 2,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-indigo-600 to-purple-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-indigo-150 border border-white/20">Practical Library</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Examples: Galeri Contoh Praktik Nyata</h1>
    <p class="text-indigo-100 text-sm md:text-base leading-relaxed">
      Koleksi contoh implementasi praktis mulai dari efek teks gradien, tombol transisi halus, tata letak kartu grid, hingga animasi rotasi interaktif.
    </p>
  </div>

  <div class="p-5 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border border-indigo-200 dark:border-indigo-900/40 rounded-2xl">
    <h4 class="text-indigo-900 dark:text-indigo-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-indigo-800 dark:text-indigo-400 text-xs leading-relaxed">
      Di Live Editor, amati bagaimana teks gradien modern dibuat menggunakan <code>background-clip: text;</code> dan <code>color: transparent;</code>!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; background: #0f172a; padding: 40px; text-align: center; }
    
    /* Teks Gradien Mewah */
    .gradient-heading {
      font-size: 36px;
      font-weight: 900;
      background: linear-gradient(135deg, #38bdf8, #818cf8, #c084fc);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      margin: 0;
    }
  </style>
</head>
<body>

  <h1 class="gradient-heading">CSS Modern Examples</h1>
  <p style="color:#94a3b8; font-size:14px; margin-top:10px;">Efek teks gradien warna-warni yang memukau tanpa menggunakan gambar.</p>

</body>
</html>`,
    quiz: {
      question: "Dua deklarasi CSS apa yang wajib dikombinasikan untuk menghasilkan efek teks gradien?",
      options: [
        "background-clip: text; dan color: transparent; (dengan latar linear-gradient)",
        "font-color: gradient; dan text-style: bold;",
        "display: flex; dan text-align: center;",
        "opacity: 0.5; dan filter: blur();"
      ],
      correctIndex: 0,
      explanation: "background-clip: text memotong latar gradien mengikuti bentuk huruf, dan color: transparent membuat warna default teks tembus pandang sehingga gradien di baliknya terlihat."
    }
  },
  {
    id: 'css-editor',
    title: 'CSS Editor',
    order: 3,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-cyan-600 to-blue-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-cyan-150 border border-white/20">Developer Tooling</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Editor: Tips Live Coding & Browser DevTools</h1>
    <p class="text-cyan-100 text-sm md:text-base leading-relaxed">
      Tingkatkan kecepatan development Anda dengan menguasai alur kerja Live Editor, shortcut keyboard VS Code, dan teknik inspeksi CSS langsung via Chrome/Firefox DevTools (F12).
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <h3 class="font-bold text-cyan-600 text-sm">1. DevTools Styles Inspector (F12)</h3>
      <p class="text-slate-600 dark:text-slate-400">Mengedit warna, margin, dan melihat computed layout box model secara realtime di browser.</p>
    </div>
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <h3 class="font-bold text-blue-600 text-sm">2. Color Picker & Shorthand Tools</h3>
      <p class="text-slate-600 dark:text-slate-400">Klik kotak palet warna di DevTools untuk memilih warna HSL/HEX secara visual dengan eyedropper.</p>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border border-cyan-200 dark:border-cyan-900/40 rounded-2xl">
    <h4 class="text-cyan-900 dark:text-cyan-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-cyan-800 dark:text-cyan-400 text-xs leading-relaxed">
      Di Live Editor, ubah properti <code>border-color</code> dan <code>box-shadow</code> pada box editor simulasi ini!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Courier New', Courier, monospace; background: #0f172a; padding: 25px; color: white; }
    
    .editor-sim {
      background: #1e293b;
      border: 1px solid #334155;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.3);
      max-width: 400px;
    }
    .tag { color: #f43f5e; }
    .prop { color: #38bdf8; }
    .val { color: #a3e635; }
  </style>
</head>
<body>

  <div class="editor-sim">
    <div style="color:#64748b; font-size:12px; margin-bottom:8px;">// Live CSS Workspace</div>
    <div><span class="tag">.my-element</span> {</div>
    <div style="padding-left: 20px;"><span class="prop">color</span>: <span class="val">#38bdf8</span>;</div>
    <div style="padding-left: 20px;"><span class="prop">padding</span>: <span class="val">16px</span>;</div>
    <div>}</div>
  </div>

</body>
</html>`,
    quiz: {
      question: "Tombol pintas keyboard apa yang digunakan di browser untuk membuka panel DevTools Inspect Element?",
      options: ["F12 (atau Ctrl + Shift + I)", "Ctrl + S", "Alt + F4", "F5"],
      correctIndex: 0,
      explanation: "F12 atau kombinasi tombol Ctrl + Shift + I (Cmd + Option + I di Mac) membuka panel Developer Tools di semua peramban modern."
    }
  },
  {
    id: 'css-snippets',
    title: 'CSS Snippets',
    order: 4,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-purple-600 to-pink-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-purple-150 border border-white/20">Reusable Snippets</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Snippets: Potongan Kode Populer & Trik Modern</h1>
    <p class="text-purple-100 text-sm md:text-base leading-relaxed">
      Koleksi *snippet* paling sering dicari: Custom Scrollbar, Glassmorphism, Truncate Teks Elipsis (...), Centering Mutlak, dan Animasi Pulse.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
    <div class="p-3.5 bg-white dark:bg-[#0c0e18] rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
      <strong class="text-purple-600 font-sans">1. Teks Truncate (...)</strong>
      <p class="text-slate-600 dark:text-slate-400"><code>white-space: nowrap; overflow: hidden; text-overflow: ellipsis;</code></p>
    </div>
    <div class="p-3.5 bg-white dark:bg-[#0c0e18] rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
      <strong class="text-pink-600 font-sans">2. Centering Mutlak</strong>
      <p class="text-slate-600 dark:text-slate-400"><code>display: grid; place-items: center;</code></p>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border border-purple-200 dark:border-purple-900/40 rounded-2xl">
    <h4 class="text-purple-900 dark:text-purple-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-purple-800 dark:text-purple-400 text-xs leading-relaxed">
      Di Live Editor, amati bagaimana teks panjang otomatis dipotong rapi dengan elipsis (...) saat melebihi batas wadah!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #f8fafc; padding: 30px; }
    
    /* Snippet Truncate Teks 1 Baris */
    .truncate-box {
      width: 240px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      
      background: white;
      padding: 12px 16px;
      border-radius: 8px;
      border: 1px solid #cbd5e1;
      font-size: 13px;
      color: #334155;
    }
  </style>
</head>
<body>

  <div class="truncate-box">
    Judul artikel yang sangat panjang sekali sehingga tidak muat di dalam kotak kartu ini.
  </div>

</body>
</html>`,
    quiz: {
      question: "Tiga properti CSS apa yang wajib dikombinasikan untuk membuat teks panjang terpotong rapi dengan titik-titik elipsis (...)?",
      options: [
        "white-space: nowrap; overflow: hidden; text-overflow: ellipsis;",
        "display: none; visibility: hidden; opacity: 0;",
        "font-size: 0px; line-height: 0; width: 100%;",
        "word-break: break-all; margin: auto; float: left;"
      ],
      correctIndex: 0,
      explanation: "Kombinasi white-space: nowrap (mencegah teks turun baris), overflow: hidden (menyembunyikan teks yang meluber), dan text-overflow: ellipsis (menambahkan ...) adalah formula standar text truncation."
    }
  },
  {
    id: 'css-quiz',
    title: 'CSS Quiz',
    order: 5,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-amber-600 to-orange-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-amber-150 border border-white/20">Knowledge Test</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Quiz: Uji Pemahaman Komprehensif</h1>
    <p class="text-amber-100 text-sm md:text-base leading-relaxed">
      Evaluasi menyeluruh mencakup sintaks CSS, Selector, Spesifisitas, Box Model, Positioning, Flexbox, Grid, dan Media Queries.
    </p>
  </div>

  <div class="p-5 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border border-amber-200 dark:border-amber-900/40 rounded-2xl">
    <h4 class="text-amber-900 dark:text-amber-300 font-black text-sm mb-1">🎯 Kuis Evaluasi:</h4>
    <p class="text-amber-800 dark:text-amber-400 text-xs leading-relaxed">
      Jawab pertanyaan kuis di bawah ini untuk menguji tingkat penguasaan materi CSS Anda!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #0f172a; padding: 30px; color: white; display: flex; justify-content: center; }
    
    .quiz-card {
      background: #1e293b;
      border: 1px solid #334155;
      border-radius: 16px;
      padding: 24px;
      max-width: 380px;
      text-align: center;
    }
  </style>
</head>
<body>

  <div class="quiz-card">
    <h3 style="color:#fbbf24; margin-top:0;">📝 Evaluasi CSS</h3>
    <p style="color:#94a3b8; font-size:13px;">Pilihlah jawaban kuis yang tepat di panel bawah untuk memvalidasi skor Anda.</p>
  </div>

</body>
</html>`,
    quiz: {
      question: "Manakah nilai properti position yang membuat elemen tetap menempel di posisi layar yang sama meskipun halaman di-scroll ke bawah?",
      options: ["position: fixed;", "position: relative;", "position: static;", "position: inherit;"],
      correctIndex: 0,
      explanation: "'position: fixed;' mengunci posisi elemen relatif terhadap jendela peramban (viewport) sehingga tidak bergerak saat di-scroll."
    }
  },
  {
    id: 'css-exercises',
    title: 'CSS Exercises',
    order: 6,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-emerald-600 to-teal-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-emerald-150 border border-white/20">Interactive Practice</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Exercises: Latihan Interaktif Mandiri</h1>
    <p class="text-emerald-100 text-sm md:text-base leading-relaxed">
      Latihan praktis menyelesaikan studi kasus penataan gaya: Memperbaiki margin runtuh, menyelaraskan form input, dan menyusun kartu produk.
    </p>
  </div>

  <div class="p-5 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border border-emerald-200 dark:border-emerald-900/40 rounded-2xl">
    <h4 class="text-emerald-900 dark:text-emerald-300 font-black text-sm mb-1">🎯 Exercise Task:</h4>
    <p class="text-emerald-800 dark:text-emerald-400 text-xs leading-relaxed">
      Di Live Editor, selesaikan latihan dengan menambahkan efek hover transisi lembut pada tombol aksi!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #f8fafc; padding: 30px; }
    
    .exercise-btn {
      background: #059669;
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .exercise-btn:hover {
      background: #047857;
      transform: scale(1.05);
      box-shadow: 0 6px 15px rgba(5,150,105,0.3);
    }
  </style>
</head>
<body>

  <h3>Latihan Interaktif CSS:</h3>
  <button class="exercise-btn">Uji Hover State 🎯</button>

</body>
</html>`,
    quiz: {
      question: "Properti CSS apa yang mengatur durasi dan kehalusan animasi perubahan nilai ketika pseudo-class :hover aktif?",
      options: ["transition", "animation-delay", "transform-origin", "display-mode"],
      correctIndex: 0,
      explanation: "'transition' memungkinkan perubahan properti CSS terjadi secara halus selama durasi waktu tertentu alih-alih berubah secara kaku seketika."
    }
  },
  {
    id: 'css-code-challenges',
    title: 'CSS Code Challenges',
    order: 7,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-rose-600 to-pink-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-rose-150 border border-white/20">Coding Challenges</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Code Challenges: Tantangan Coding Riil</h1>
    <p class="text-rose-100 text-sm md:text-base leading-relaxed">
      Tantangan tingkat lanjut: Bangun komponen Glassmorphism Card dengan efek blur dan gradien border animasi tanpa library eksternal.
    </p>
  </div>

  <div class="p-5 bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20 border border-rose-200 dark:border-rose-900/40 rounded-2xl">
    <h4 class="text-rose-900 dark:text-rose-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-rose-800 dark:text-rose-400 text-xs leading-relaxed">
      Di Live Editor, ubah intensitas efek blur pada <code>backdrop-filter: blur(15px);</code> untuk melihat perubahan transparansi kaca!
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
      background: radial-gradient(circle, #e11d48, #4c0519);
      min-height: 80vh;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }
    
    /* Glassmorphism Challenge */
    .glass-card {
      background: rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      padding: 30px;
      border-radius: 20px;
      color: white;
      text-align: center;
      box-shadow: 0 20px 40px rgba(0,0,0,0.3);
      max-width: 300px;
    }
  </style>
</head>
<body>

  <div class="glass-card">
    <h2 style="margin-top:0;">Glassmorphism</h2>
    <p style="font-size:13px; opacity:0.9;">Efek kartu kaca tembus pandang modern dengan backdrop-filter blur.</p>
  </div>

</body>
</html>`,
    quiz: {
      question: "Properti CSS apa yang memberikan efek buram transparan pada latar belakang di balik elemen (efek kaca iOS/macOS)?",
      options: ["backdrop-filter: blur(...);", "filter: blur(...);", "background-opacity", "border-blur"],
      correctIndex: 0,
      explanation: "'backdrop-filter: blur();' memburamkan area di belakang elemen kaca, berbeda dari 'filter: blur()' yang memburamkan isi elemen itu sendiri."
    }
  },
  {
    id: 'css-website',
    title: 'CSS Website',
    order: 8,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-teal-600 to-cyan-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-teal-150 border border-white/20">Full Project</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Website: Membangun Website Utuh</h1>
    <p class="text-teal-100 text-sm md:text-base leading-relaxed">
      Integrasi menyeluruh dari seluruh konsep: Struktur Semantik, Header Sticky, Hero Animasi, Fitur Multi-Kolom, dan Formulir Kontak Terstruktur.
    </p>
  </div>

  <div class="p-5 bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20 border border-teal-200 dark:border-teal-900/40 rounded-2xl">
    <h4 class="text-teal-900 dark:text-teal-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-teal-800 dark:text-teal-400 text-xs leading-relaxed">
      Di Live Editor, eksplorasi kode sumber website utuh ini dan uji responsivitasnya di panel preview!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Segoe UI', Arial, sans-serif; background: #f8fafc; color: #334155; }
    
    header { background: #0f172a; color: white; padding: 20px; text-align: center; }
    .hero-sec { padding: 40px 20px; text-align: center; background: white; border-bottom: 1px solid #e2e8f0; }
    .hero-sec h1 { color: #0d9488; font-size: 28px; margin-bottom: 8px; }
    
    .grid-sec { max-width: 800px; margin: 30px auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; padding: 0 15px; }
    .card { background: white; padding: 20px; border-radius: 12px; border: 1px solid #cbd5e1; text-align: center; }
  </style>
</head>
<body>

  <header><h3>⚡ Studio Web Modern</h3></header>
  
  <section class="hero-sec">
    <h1>Solusi Desain Antarmuka Berkualitas</h1>
    <p style="font-size:14px; color:#64748b;">Membangun website modern dengan performa tinggi & responsif.</p>
  </section>

  <div class="grid-sec">
    <div class="card"><strong>🎨 UI Estetik</strong></div>
    <div class="card"><strong>📱 Mobile Friendly</strong></div>
    <div class="card"><strong>⚡ Loading Cepat</strong></div>
  </div>

</body>
</html>`,
    quiz: {
      question: "Apakah keuntungan menyusun kode CSS secara modular dengan variabel dan reset universal dalam membangun website lengkap?",
      options: [
        "Mempermudah perawatan kode (maintainability), konsistensi tema warna, dan skalabilitas jangka panjang",
        "Mengurangi memori RAM pengguna hingga 0MB",
        "Menghilangkan kebutuhan file HTML",
        "Otomatis mempublikasikan website ke domain .com gratis"
      ],
      correctIndex: 0,
      explanation: "Arsitektur CSS modular mempermudah perawatan kode skala besar dan menjamin konsistensi desain antar seluruh halaman website."
    }
  },
  {
    id: 'css-syllabus',
    title: 'CSS Syllabus',
    order: 9,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-blue-700 to-indigo-900 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-blue-150 border border-white/20">Roadmap Curriculum</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Syllabus: Silabus Lengkap Kurikulum</h1>
    <p class="text-blue-100 text-sm md:text-base leading-relaxed">
      Peta navigasi 8 Bab dan 97+ materi pembelajaran CSS dari tingkat pemula hingga profesional siap kerja.
    </p>
  </div>

  <div class="space-y-3 text-xs">
    <div class="p-3.5 bg-white dark:bg-[#0c0e18] rounded-xl border border-slate-200 dark:border-slate-800 font-bold text-blue-600">
      Bab 1: CSS Tutorial Dasar (49 Materi) - Sintaks, Selector, Box Model, Text, Table, Nav, Form.
    </div>
    <div class="p-3.5 bg-white dark:bg-[#0c0e18] rounded-xl border border-slate-200 dark:border-slate-800 font-bold text-purple-600">
      Bab 2: CSS Advanced (29 Materi) - Gradients, 2D/3D Transforms, Transitions, Animations, Variables, @property.
    </div>
    <div class="p-3.5 bg-white dark:bg-[#0c0e18] rounded-xl border border-slate-200 dark:border-slate-800 font-bold text-emerald-600">
      Bab 3-5: Modern Layouts - Flexbox (4 Materi), CSS Grid (5 Materi), & RWD (8 Materi).
    </div>
    <div class="p-3.5 bg-white dark:bg-[#0c0e18] rounded-xl border border-slate-200 dark:border-slate-800 font-bold text-amber-600">
      Bab 6-8: Mastery - Certificate, SASS Preprocessor, & Examples Showcase.
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-900/40 rounded-2xl">
    <h4 class="text-blue-900 dark:text-blue-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-blue-800 dark:text-blue-400 text-xs leading-relaxed">
      Di Live Editor, eksplorasi kartu silabus interaktif ini!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #f8fafc; padding: 25px; }
    
    .syllabus-badge {
      display: flex;
      align-items: center;
      gap: 12px;
      background: white;
      padding: 14px 20px;
      border-radius: 12px;
      border: 1px solid #cbd5e1;
      margin-bottom: 10px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.04);
    }
    .badge-num {
      background: #2563eb;
      color: white;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 12px;
    }
  </style>
</head>
<body>

  <h3>Kurikulum Lengkap CSS:</h3>
  <div class="syllabus-badge">
    <div class="badge-num">1</div>
    <div><strong>CSS Fundamentals:</strong> Sintaks, Box Model, & Navbars</div>
  </div>
  <div class="syllabus-badge">
    <div class="badge-num" style="background:#7c3aed;">2</div>
    <div><strong>CSS Advanced:</strong> 3D Transforms, Animasi, & Variables</div>
  </div>
  <div class="syllabus-badge">
    <div class="badge-num" style="background:#059669;">3</div>
    <div><strong>Layout Systems:</strong> Flexbox, Grid, & RWD Multi-Device</div>
  </div>

</body>
</html>`,
    quiz: {
      question: "Berapa total modul bab kurikulum CSS yang tersedia dalam platform LMS ini?",
      options: ["8 Bab Komprehensif (97+ Materi)", "1 Bab saja", "Hanya 3 video", "100 Bab acak"],
      correctIndex: 0,
      explanation: "Kurikulum CSS ini terbagi rapi ke dalam 8 bab komprehensif yang mencakup seluruh aspek dasar hingga preprosesor modern."
    }
  },
  {
    id: 'css-study-plan',
    title: 'CSS Study Plan',
    order: 10,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-purple-700 to-indigo-900 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-purple-200 border border-white/20">30-Day Plan</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Study Plan: Jadwal Belajar 30 Hari</h1>
    <p class="text-purple-100 text-sm md:text-base leading-relaxed">
      Panduan terstruktur langkah demi langkah untuk menguasai CSS secara konsisten dalam 30 hari (1 jam per hari).
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
      <strong class="text-purple-600 font-bold">Minggu 1: Fondasi & Box Model</strong>
      <p class="text-slate-600 dark:text-slate-400">Selector, Colors, Padding, Margin, Border, Box-sizing, dan Positioning.</p>
    </div>
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
      <strong class="text-indigo-600 font-bold">Minggu 2: Efek Visual & Animasi</strong>
      <p class="text-slate-600 dark:text-slate-400">Gradients, Box Shadow, Transforms, Transitions, Keyframes, dan CSS Variables.</p>
    </div>
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
      <strong class="text-emerald-600 font-bold">Minggu 3: Flexbox & CSS Grid</strong>
      <p class="text-slate-600 dark:text-slate-400">Tata letak 1D Flexbox, Tata letak 2D Grid, Auto-fit Minmax, dan 12-Column System.</p>
    </div>
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
      <strong class="text-amber-600 font-bold">Minggu 4: RWD & SASS Master</strong>
      <p class="text-slate-600 dark:text-slate-400">Media queries responsif, SASS Preprocessor, dan Proyek Akhir Website.</p>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 border border-purple-200 dark:border-purple-900/40 rounded-2xl">
    <h4 class="text-purple-900 dark:text-purple-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-purple-800 dark:text-purple-400 text-xs leading-relaxed">
      Di Live Editor, amati progress bar target belajar CSS ini!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #f8fafc; padding: 25px; }
    
    .plan-card {
      background: white;
      padding: 20px;
      border-radius: 14px;
      border: 1px solid #cbd5e1;
      max-width: 360px;
    }
    .progress-bar {
      background: #e2e8f0;
      border-radius: 50px;
      height: 12px;
      overflow: hidden;
      margin: 10px 0;
    }
    .progress-fill {
      background: linear-gradient(90deg, #8b5cf6, #ec4899);
      height: 100%;
      width: 85%;
      border-radius: 50px;
    }
  </style>
</head>
<body>

  <div class="plan-card">
    <h4 style="margin:0; color:#4c1d95;">Progress Kurikulum 30 Hari</h4>
    <div class="progress-bar">
      <div class="progress-fill"></div>
    </div>
    <div style="display:flex; justify-content:space-between; font-size:12px; color:#64748b;">
      <span>Target Selesai</span>
      <strong>85% Tercapai</strong>
    </div>
  </div>

</body>
</html>`,
    quiz: {
      question: "Berapa alokasi waktu ideal yang disarankan per hari untuk menguasai seluruh materi CSS secara efektif?",
      options: ["45 - 60 menit per hari secara konsisten dengan praktik langsung di editor", "10 jam sekali seminggu", "Tanpa praktik sama sekali", "1 menit per hari"],
      correctIndex: 0,
      explanation: "Konsistensi belajar harian 45-60 menit disertai praktik langsung di code editor jauh lebih efektif dalam membangun muscle memory coding dibanding belajar maraton seminggu sekali."
    }
  },
  {
    id: 'css-interview-prep',
    title: 'CSS Interview Prep',
    order: 11,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-slate-900 to-indigo-950 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-indigo-300 border border-white/20">Career Ready</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Interview Prep: Tanya Jawab Interview Frontend</h1>
    <p class="text-slate-300 text-sm md:text-base leading-relaxed">
      Bocoran 10 pertanyaan teknis CSS paling sering ditanyakan pada tahap interview kerja posisi Frontend Developer di perusahaan teknologi.
    </p>
  </div>

  <div class="space-y-3 text-xs">
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
      <strong class="text-indigo-600 font-bold">Q1: Jelaskan perbedaan 'display: none' vs 'visibility: hidden'!</strong>
      <p class="text-slate-600 dark:text-slate-400"><code>display: none</code> menghapus elemen dari flow rendering (tidak memakan ruang), sedangkan <code>visibility: hidden</code> menyembunyikan visual namun tetap mempertahankan ruang fisiknya di layar.</p>
    </div>

    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
      <strong class="text-indigo-600 font-bold">Q2: Bagaimana cara menghitung Spesifisitas (Specificity)?</strong>
      <p class="text-slate-600 dark:text-slate-400">Urutan bobot: Inline Style (1000) > ID Selector (100) > Class/Pseudo-class (10) > Element/Pseudo-element (1).</p>
    </div>

    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
      <strong class="text-indigo-600 font-bold">Q3: Mengapa GPU Acceleration penting pada animasi CSS?</strong>
      <p class="text-slate-600 dark:text-slate-400">Menggunakan <code>transform</code> dan <code>opacity</code> dieksekusi langsung oleh Composite layer GPU tanpa memicu Reflow/Repaint di CPU utama, menghasilkan animasi mulus 60 FPS.</p>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-slate-100 to-indigo-50 dark:from-slate-900 dark:to-indigo-950/30 border border-slate-300 dark:border-slate-800 rounded-2xl">
    <h4 class="text-slate-900 dark:text-white font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
      Di Live Editor, uji animasi terakselerasi GPU via <code>transform: translate3d(...)</code>!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #0f172a; padding: 40px; color: white; display: flex; justify-content: center; }
    
    /* Animasi GPU Accelerated (60 FPS) */
    .gpu-card {
      background: linear-gradient(135deg, #4f46e5, #7c3aed);
      padding: 24px;
      border-radius: 16px;
      text-align: center;
      max-width: 320px;
      cursor: pointer;
      transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      will-change: transform;
    }
    .gpu-card:hover {
      transform: translateY(-8px) scale(1.02);
      box-shadow: 0 20px 30px rgba(124,58,237,0.4);
    }
  </style>
</head>
<body>

  <div class="gpu-card">
    <h3 style="margin-top:0;">⚡ GPU Accelerated</h3>
    <p style="font-size:13px; opacity:0.9;">Animasi performa tinggi 60 FPS menggunakan transform & will-change.</p>
  </div>

</body>
</html>`,
    quiz: {
      question: "Dua properti CSS apa yang direkomendasikan untuk dianimasikan karena dieksekusi secara efisien oleh GPU tanpa memicu layout reflow?",
      options: [
        "transform dan opacity",
        "width dan height",
        "top dan left",
        "margin dan padding"
      ],
      correctIndex: 0,
      explanation: "Animasi pada 'transform' dan 'opacity' ditangani langsung pada tahap Compositing oleh GPU sehingga tidak memicu kalkulasi ulang Layout (Reflow) atau Paint yang berat di CPU."
    }
  }
];

async function run() {
  const modId = 'ba1383a2-219d-44ab-bf63-804d5a0f0902';
  const chapTitle = 'CSS Examples';

  for (const dbUrl of dbs) {
    const dbName = dbUrl.split('/').pop();
    console.log(`\n🚀 [${dbName}] Seeding Chapter "${chapTitle}" & 11 Lessons...`);
    const pool = new Pool({ connectionString: dbUrl });

    try {
      // 1. Check or Create Chapter "CSS Examples"
      let chRes = await pool.query(`SELECT id FROM "Chapter" WHERE "moduleId" = $1 AND title = $2`, [modId, chapTitle]);
      let chapterId;
      if (chRes.rowCount === 0) {
        const insertChap = await pool.query(`
          INSERT INTO "Chapter" (id, title, "moduleId", "order", "createdAt", "updatedAt")
          VALUES (gen_random_uuid(), $1, $2, 8, NOW(), NOW())
          RETURNING id
        `, [chapTitle, modId]);
        chapterId = insertChap.rows[0].id;
        console.log(`  ➕ Created Chapter: ${chapTitle} (${chapterId})`);
      } else {
        chapterId = chRes.rows[0].id;
        console.log(`  📌 Existing Chapter: ${chapTitle} (${chapterId})`);
      }

      // 2. Insert or update each of the 11 lessons
      for (const l of examplesLessons) {
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

  console.log('\n✨ ALL 11 CSS EXAMPLES LESSONS POPULATED ACROSS BOTH DATABASES!');
}

run().catch(console.error);
