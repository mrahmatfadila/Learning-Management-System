const { Pool } = require('pg');
require('dotenv').config({ path: 'c:/xampp/htdocs/Learning Management System/backend/.env' });

const dbs = [
  'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db',
  'postgresql://postgres:Dil1212@localhost:5432/lms_content_db'
];

const responsiveLessons = [
  {
    id: 'rwd-intro',
    title: 'RWD Intro',
    order: 1,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-blue-150 border border-white/20">CSS Responsive</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">RWD Intro: Responsive Web Design</h1>
    <p class="text-blue-100 text-sm md:text-base leading-relaxed">
      Responsive Web Design (RWD) adalah pendekatan desain web yang memastikan tampilan website otomatis menyesuaikan diri (*re-flow*) dengan nyaman di berbagai ukuran layar: smartphone, tablet, laptop, hingga TV 4K.
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">3 Pilar Utama Desain Responsif (Ethan Marcotte)</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
      <div class="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40 rounded-xl space-y-1">
        <strong class="text-blue-900 dark:text-blue-300">1. Fluid Grid Layout:</strong>
        <p class="text-blue-800 dark:text-blue-400">Menggunakan satuan relatif (%, fr, rem) alih-alih piksel kaku (px).</p>
      </div>
      <div class="p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 rounded-xl space-y-1">
        <strong class="text-emerald-900 dark:text-emerald-300">2. Flexible Media:</strong>
        <p class="text-emerald-800 dark:text-emerald-400">Gambar dan video yang tidak pernah meluber (<code>max-width: 100%</code>).</p>
      </div>
      <div class="p-4 bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-900/40 rounded-xl space-y-1">
        <strong class="text-purple-900 dark:text-purple-300">3. Media Queries:</strong>
        <p class="text-purple-800 dark:text-purple-400">Aturan kondisional CSS berdasarkan resolusi layar (<code>@media</code>).</p>
      </div>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-900/40 rounded-2xl">
    <h4 class="text-blue-900 dark:text-blue-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-blue-800 dark:text-blue-400 text-xs leading-relaxed">
      Di Live Editor, amati bagaimana kartu profil menyesuaikan ukurannya secara elastis menggunakan lebar persentase dan max-width!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: Arial, sans-serif; background: #f8fafc; padding: 25px; margin: 0; }
    
    .fluid-container {
      width: 90%;
      max-width: 500px;
      margin: 0 auto;
      background: white;
      padding: 24px;
      border-radius: 16px;
      border: 1px solid #cbd5e1;
      box-shadow: 0 4px 6px rgba(0,0,0,0.05);
      text-align: center;
    }
  </style>
</head>
<body>

  <div class="fluid-container">
    <h3 style="margin-top:0; color:#2563eb;">Desain Responsif Fleksibel</h3>
    <p style="color:#64748b; font-size:14px;">Kontainer ini memiliki lebar 90% di layar smartphone kecil dan terkunci maksimal di 500px di layar desktop lebar.</p>
  </div>

</body>
</html>`,
    quiz: {
      question: "Apakah tujuan utama dari penerapan Responsive Web Design (RWD)?",
      options: [
        "Membuat website mampu menyesuaikan tampilan dan navigasi secara optimal di berbagai resolusi layar perangkat",
        "Mengganti seluruh kode HTML menjadi JavaScript",
        "Memaksa tampilan website di smartphone persis sama kaku seperti di monitor komputer 24 inci",
        "Menghilangkan fungsi database"
      ],
      correctIndex: 0,
      explanation: "RWD memungkinkan satu kode website yang sama untuk tampil proporsional, nyaman dibaca, dan mudah dinavigasi di segala perangkat."
    }
  },
  {
    id: 'rwd-viewport',
    title: 'RWD Viewport',
    order: 2,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-teal-600 to-emerald-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-teal-150 border border-white/20">Mobile Viewport</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">RWD Viewport: Tag Meta Wajib & Satuan Layar</h1>
    <p class="text-teal-100 text-sm md:text-base leading-relaxed">
      Viewport adalah area pandang layar pengguna di browser. Tanpa tag meta viewport, browser smartphone akan mengasumsikan website dibuat untuk desktop dan memperkecil font menjadi sangat kecil (zoom-out).
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Tag Meta Viewport Wajib di Seluruh Dokumen HTML</h2>
    <div class="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs overflow-x-auto">
      &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-2">
      <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl">
        <code>width=device-width</code>: Menyetel lebar halaman mengikuti lebar fisik layar HP.
      </div>
      <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl">
        <code>initial-scale=1.0</code>: Menetapkan tingkat zoom awal 100% saat halaman pertama kali dimuat.
      </div>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-950/20 dark:to-emerald-950/20 border border-teal-200 dark:border-teal-900/40 rounded-2xl">
    <h4 class="text-teal-900 dark:text-teal-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-teal-800 dark:text-teal-400 text-xs leading-relaxed">
      Di Live Editor, terapkan tinggi layar penuh <code>min-height: 100vh;</code> pada kontainer agar selalu mengisi penuh 100% tinggi jendela browser!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <!-- Tag Meta Viewport Wajib -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { margin: 0; font-family: Arial, sans-serif; }
    
    .hero-fullscreen {
      min-height: 80vh; /* 80% dari tinggi layar */
      background: linear-gradient(135deg, #0d9488, #047857);
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 20px;
    }
  </style>
</head>
<body>

  <div class="hero-fullscreen">
    <h1 style="margin:0; font-size:32px;">Viewport Units (80vh)</h1>
    <p style="opacity:0.9; margin-top:8px;">Tinggi elemen ini selalu mengisi 80% dari ketinggian layar peramban.</p>
  </div>

</body>
</html>`,
    quiz: {
      question: "Apa fungsi utama dari tag '<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">' di dalam tag <head>?",
      options: [
        "Memberi instruksi kepada browser smartphone agar merender lebar halaman sesuai lebar fisik layar HP dengan skala 1:1 tanpa zoom-out",
        "Menghubungkan file gambar ikon",
        "Mengganti font sistem",
        "Menghubungkan script database"
      ],
      correctIndex: 0,
      explanation: "Meta viewport mengontrol dimensi dan penskalaan viewport perangkat seluler agar tata letak responsif ditampilkan proporsional 1:1."
    }
  },
  {
    id: 'rwd-grid-view',
    title: 'RWD Grid View',
    order: 3,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-purple-600 to-indigo-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-purple-150 border border-white/20">CSS Grid View</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">RWD Grid View: Sistem Kolom Persentase Fluida</h1>
    <p class="text-purple-100 text-sm md:text-base leading-relaxed">
      Grid View fluida membagi lebar halaman menjadi kolom-kolom persentase yang otomatis menyusut dan melebar mengikuti ukuran jendela browser pengguna.
    </p>
  </div>

  <div class="p-5 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 border border-purple-200 dark:border-purple-900/40 rounded-2xl">
    <h4 class="text-purple-900 dark:text-purple-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-purple-800 dark:text-purple-400 text-xs leading-relaxed">
      Di Live Editor, atur 2 kolom fluida masing-masing dengan <code>width: 50%;</code> dan amati bagaimana keduanya membagi layar sama rata secara dinamis!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * { box-sizing: border-box; }
    body { font-family: Arial, sans-serif; padding: 20px; background: #f8fafc; }
    
    .row {
      display: flex;
      flex-wrap: wrap;
      margin: -10px;
    }
    .col-6 {
      flex: 0 0 50%;
      padding: 10px;
    }
    .box {
      background: white;
      padding: 20px;
      border-radius: 12px;
      border: 1px solid #cbd5e1;
      text-align: center;
      font-weight: bold;
      color: #4338ca;
    }
  </style>
</head>
<body>

  <div class="row">
    <div class="col-6">
      <div class="box">Kolom Kiri (50%)</div>
    </div>
    <div class="col-6">
      <div class="box">Kolom Kanan (50%)</div>
    </div>
  </div>

</body>
</html>`,
    quiz: {
      question: "Mengapa persentase (%) digunakan dalam sistem Fluid Grid View dibanding satuan piksel (px)?",
      options: [
        "Karena persentase bersifat elastis menyesuaikan ukuran kontainer induknya pada setiap resolusi layar",
        "Karena browser tidak bisa membaca piksel",
        "Agar teks menjadi huruf kapital",
        "Sebagai aturan wajib W3C"
      ],
      correctIndex: 0,
      explanation: "Satuan persentase (%) berskala fleksibel mengikuti lebar wadahnya sehingga elemen tidak kaku saat layar mengecil atau membesar."
    }
  },
  {
    id: 'rwd-media-queries',
    title: 'RWD Media Queries',
    order: 4,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-rose-600 to-pink-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-rose-150 border border-white/20">CSS Breakpoints</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">RWD Media Queries: Breakpoint Standar Dunia</h1>
    <p class="text-rose-100 text-sm md:text-base leading-relaxed">
      Media Queries menerapkan aturan gaya yang berbeda berdasarkan lebar layar (*breakpoint*) atau orientasi perangkat (portrait vs landscape).
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Standar Breakpoints Industri</h2>
    <div class="space-y-2 text-xs font-mono">
      <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl"><code>@media (min-width: 640px) { ... }</code> (Smartphone Landscape / Small Tablet)</div>
      <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl"><code>@media (min-width: 768px) { ... }</code> (Tablet Portrait)</div>
      <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl"><code>@media (min-width: 1024px) { ... }</code> (Laptop / Desktop)</div>
      <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl"><code>@media (orientation: landscape) { ... }</code> (Perangkat Diputar Horizontal)</div>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20 border border-rose-200 dark:border-rose-900/40 rounded-2xl">
    <h4 class="text-rose-900 dark:text-rose-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-rose-800 dark:text-rose-400 text-xs leading-relaxed">
      Di Live Editor, kecilkan jendela preview untuk melihat sidebar otomatis disembunyikan pada layar kecil dengan <code>display: none;</code>!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
    
    .layout {
      display: flex;
      gap: 20px;
    }
    .main {
      flex: 1;
      background: #3b82f6;
      color: white;
      padding: 25px;
      border-radius: 12px;
    }
    .sidebar {
      width: 180px;
      background: #0f172a;
      color: white;
      padding: 25px;
      border-radius: 12px;
    }

    /* Di layar HP (< 600px), sembunyikan sidebar */
    @media (max-width: 600px) {
      .sidebar {
        display: none;
      }
    }
  </style>
</head>
<body>

  <div class="layout">
    <main class="main">
      <h2>Konten Utama</h2>
      <p>Sidebar di sebelah kanan akan otomatis disembunyikan jika lebar layar &lt; 600px.</p>
    </main>
    <aside class="sidebar">
      <h3>Sidebar</h3>
    </aside>
  </div>

</body>
</html>`,
    quiz: {
      question: "Sintaks Media Query apa yang digunakan untuk mendeteksi apakah pengguna sedang memegang perangkat dalam posisi rebah (landscape)?",
      options: ["@media (orientation: landscape)", "@media (device: horizontal)", "@media (view: wide)", "@media screen-rotate"],
      correctIndex: 0,
      explanation: "'@media (orientation: landscape)' mendeteksi ketika lebar viewport lebih besar daripada tinggi viewport."
    }
  },
  {
    id: 'rwd-images',
    title: 'RWD Images',
    order: 5,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-emerald-600 to-teal-800 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-emerald-150 border border-white/20">CSS Responsive Images</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">RWD Images: max-width & Tag &lt;picture&gt;</h1>
    <p class="text-emerald-100 text-sm md:text-base leading-relaxed">
      Pastikan gambar tidak pernah meluap merusak layout dengan aturan emas <code>max-width: 100%; height: auto;</code> dan sajikan resolusi foto berbeda via tag HTML5 <code>&lt;picture&gt;</code>.
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Aturan Emas Gambar Responsif</h2>
    <div class="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs overflow-x-auto">
      img {<br/>
      &nbsp;&nbsp;max-width: 100%; /* Tidak pernah melebihi lebar kontainer */<br/>
      &nbsp;&nbsp;height: auto;    /* Menjaga aspek rasio gambar tetap proporsional */<br/>
      }
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border border-emerald-200 dark:border-emerald-900/40 rounded-2xl">
    <h4 class="text-emerald-900 dark:text-emerald-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-emerald-800 dark:text-emerald-400 text-xs leading-relaxed">
      Di Live Editor, ubah ukuran jendela browser dan amati bagaimana gambar berskala menyusut dengan mulus tanpa terdistorsi!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: Arial, sans-serif; padding: 25px; background: #f8fafc; }
    
    .responsive-img-box {
      max-width: 450px;
      border: 1px solid #cbd5e1;
      padding: 15px;
      background: white;
      border-radius: 14px;
    }
    
    /* Gambar Responsif Sempurna */
    .responsive-img-box img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
      display: block;
    }
  </style>
</head>
<body>

  <div class="responsive-img-box">
    <h3 style="margin-top:0;">Gambar Responsif (max-width: 100%)</h3>
    <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80" alt="Pantai">
    <p style="font-size:12px; color:#64748b; margin-bottom:0;">Gambar ini akan menyusut mengikuti kontainer jika dibuka di layar kecil.</p>
  </div>

</body>
</html>`,
    quiz: {
      question: "Mengapa 'max-width: 100%; height: auto;' lebih disukai daripada menyetel 'width: 100%;' pada gambar?",
      options: [
        "Karena jika gambar asli lebih kecil dari kontainer, 'max-width: 100%' tidak akan memaksa gambar membesar pecah buram melebihi resolusi aslinya",
        "Karena width 100% menghapus warna gambar",
        "Karena max-width otomatis mengunduh gambar 4K",
        "Sebagai aturan wajib peramban Safari"
      ],
      correctIndex: 0,
      explanation: "'max-width: 100%' memungkinkan gambar menyusut saat kontainer mengecil, namun mencegah gambar membesar pecah melebihi dimensi asli pikselnya."
    }
  },
  {
    id: 'rwd-videos',
    title: 'RWD Videos',
    order: 6,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-indigo-700 to-purple-800 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-indigo-150 border border-white/20">CSS Video Ratios</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">RWD Videos: aspect-ratio & Video 16:9 Fluida</h1>
    <p class="text-indigo-100 text-sm md:text-base leading-relaxed">
      Sematkan video YouTube/Vimeo atau tag video HTML5 yang mempertahankan rasio sinematik <code>16 / 9</code> secara responsif tanpa menghasilkan bilah hitam (*black bars*).
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Properti Modern: aspect-ratio: 16 / 9;</h2>
    <div class="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs overflow-x-auto">
      iframe, video {<br/>
      &nbsp;&nbsp;width: 100%;<br/>
      &nbsp;&nbsp;aspect-ratio: 16 / 9; /* Otomatis menghitung tinggi proporsional */<br/>
      &nbsp;&nbsp;border: none;<br/>
      &nbsp;&nbsp;border-radius: 12px;<br/>
      }
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border border-indigo-200 dark:border-indigo-900/40 rounded-2xl">
    <h4 class="text-indigo-900 dark:text-indigo-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-indigo-800 dark:text-indigo-400 text-xs leading-relaxed">
      Di Live Editor, amati bagaimana video mempertahankan rasio 16:9 sempurna saat kontainer diperlebar atau dipersempit!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: Arial, sans-serif; padding: 25px; background: #0f172a; color: white; }
    
    .video-container {
      max-width: 480px;
      margin: 0 auto;
    }
    
    /* Responsive Video via aspect-ratio */
    .responsive-video {
      width: 100%;
      aspect-ratio: 16 / 9;
      border-radius: 16px;
      border: 1px solid #334155;
    }
  </style>
</head>
<body>

  <div class="video-container">
    <h3>Video Player Responsif (aspect-ratio: 16/9):</h3>
    <iframe class="responsive-video" src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowfullscreen></iframe>
  </div>

</body>
</html>`,
    quiz: {
      question: "Properti CSS modern apa yang secara otomatis mempertahankan rasio lebar-ke-tinggi video (seperti 16:9) tanpa membutuhkan pembungkus padding-bottom hack?",
      options: ["aspect-ratio: 16 / 9;", "video-ratio: 16:9;", "dimension-lock: 16x9;", "scale-ratio: maintain;"],
      correctIndex: 0,
      explanation: "'aspect-ratio: 16 / 9;' adalah standar CSS modern untuk mengunci rasio aspek elemen kotak."
    }
  },
  {
    id: 'rwd-frameworks',
    title: 'RWD Frameworks',
    order: 7,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-blue-700 to-indigo-900 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-blue-150 border border-white/20">CSS Ecosystem</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">RWD Frameworks: Tailwind CSS, Bootstrap, & Bulma</h1>
    <p class="text-blue-100 text-sm md:text-base leading-relaxed">
      Framework CSS menyediakan kelas-kelas utilitas responsif siap pakai (seperti <code>md:flex</code> atau <code>col-md-6</code>) untuk mempercepat pembuatan prototipe aplikasi web skala besar.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <h3 class="font-bold text-blue-600">Tailwind CSS (Utility-First ⭐)</h3>
      <p class="text-slate-600 dark:text-slate-400">Menyediakan utilitas atomik cepat seperti <code>grid grid-cols-1 md:grid-cols-3 gap-4</code>.</p>
    </div>
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <h3 class="font-bold text-indigo-600">Bootstrap (Component-Based)</h3>
      <p class="text-slate-600 dark:text-slate-400">Menyediakan komponen UI jadi seperti modal, navbar, dan grid 12 kolom (<code>col-lg-4</code>).</p>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-900/40 rounded-2xl">
    <h4 class="text-blue-900 dark:text-blue-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-blue-800 dark:text-blue-400 text-xs leading-relaxed">
      Di Live Editor, amati bagaimana simulasi utilitas responsif ala framework mengubah susunan kolom secara instan!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: Arial, sans-serif; background: #f8fafc; padding: 25px; }
    
    /* Simulasi Kelas Utilitas Framework */
    .flex-col-mobile {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    
    @media (min-width: 768px) {
      .flex-col-mobile {
        flex-direction: row; /* Berjajar ke samping di tablet/desktop */
      }
    }
    
    .card {
      flex: 1;
      background: white;
      padding: 20px;
      border-radius: 12px;
      border: 1px solid #cbd5e1;
      text-align: center;
      font-weight: bold;
    }
  </style>
</head>
<body>

  <h3>Konsep Utility Framework (Mobile: Tumpuk ➔ Desktop: Jejer):</h3>
  <div class="flex-col-mobile">
    <div class="card" style="color:#2563eb;">Fitur 1</div>
    <div class="card" style="color:#7c3aed;">Fitur 2</div>
    <div class="card" style="color:#059669;">Fitur 3</div>
  </div>

</body>
</html>`,
    quiz: {
      question: "Apa keuntungan utama menggunakan framework CSS responsif seperti Tailwind CSS atau Bootstrap?",
      options: [
        "Menyediakan sistem grid dan class utilitas responsif yang telah teruji kompatibilitasnya di berbagai peramban, mempercepat proses development",
        "Menghilangkan kewajiban menulis tag HTML",
        "Menggantikan fungsi web server",
        "Otomatis memenangkan peringkat 1 SEO Google"
      ],
      correctIndex: 0,
      explanation: "Framework mempercepat proses coding antarmuka dengan menyediakan class terstandarisasi untuk layout responsif."
    }
  },
  {
    id: 'rwd-templates',
    title: 'RWD Templates',
    order: 8,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-slate-900 to-indigo-950 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-indigo-300 border border-white/20">Master Project</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">RWD Templates: Template Web Responsif Lengkap</h1>
    <p class="text-slate-300 text-sm md:text-base leading-relaxed">
      Mengintegrasikan seluruh prinsip RWD ke dalam template landing page utuh yang responsif: <strong>Navbar Adaptif, Hero Banner, Grid Fitur, & Footer Multi-Device</strong>.
    </p>
  </div>

  <div class="p-5 bg-gradient-to-r from-slate-100 to-indigo-50 dark:from-slate-900 dark:to-indigo-950/30 border border-slate-300 dark:border-slate-800 rounded-2xl">
    <h4 class="text-slate-900 dark:text-white font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
      Di Live Editor, uji template landing page lengkap di berbagai ukuran viewport desktop dan smartphone!
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
    body { font-family: 'Segoe UI', Arial, sans-serif; background: #f8fafc; color: #1e293b; }

    /* Responsive Navbar */
    .navbar {
      background: #0f172a;
      color: white;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
    }
    .nav-links {
      display: flex;
      gap: 1.5rem;
      list-style: none;
    }
    .nav-links a { color: #94a3b8; text-decoration: none; font-weight: 600; font-size: 14px; }
    .nav-links a:hover { color: #38bdf8; }

    /* Hero */
    .hero {
      background: linear-gradient(135deg, #1e293b, #0f172a);
      color: white;
      text-align: center;
      padding: 3rem 1.5rem;
    }
    .hero h1 { font-size: clamp(1.8rem, 4vw, 2.5rem); color: #38bdf8; }
    .hero p { color: #94a3b8; margin-top: 0.5rem; font-size: 14px; }

    /* Responsive Grid Section */
    .container {
      max-width: 1000px;
      margin: 2rem auto;
      padding: 0 1.5rem;
    }
    .feature-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 1.5rem;
    }
    .feature-card {
      background: white;
      padding: 1.5rem;
      border-radius: 12px;
      border: 1px solid #e2e8f0;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
      text-align: center;
    }

    /* Footer */
    footer {
      background: #0f172a;
      color: #94a3b8;
      text-align: center;
      padding: 1.5rem;
      margin-top: 3rem;
      font-size: 13px;
    }

    @media (max-width: 600px) {
      .navbar { flex-direction: column; gap: 1rem; text-align: center; }
    }
  </style>
</head>
<body>

  <nav class="navbar">
    <h2 style="color:#38bdf8; font-size:18px;">⚡ DevGrow LMS</h2>
    <ul class="nav-links">
      <li><a href="#">Beranda</a></li>
      <li><a href="#">Kursus</a></li>
      <li><a href="#">Tentang</a></li>
    </ul>
  </nav>

  <header class="hero">
    <h1>Platform Belajar Coding Masa Depan</h1>
    <p>Akses ratusan modul materi interaktif dari perangkat mana pun.</p>
  </header>

  <div class="container">
    <div class="feature-grid">
      <div class="feature-card">
        <h3 style="color:#0284c7; margin-bottom:8px;">📱 Mobile First</h3>
        <p style="font-size:13px; color:#64748b;">Nyaman diakses dari layar smartphone kecil.</p>
      </div>
      <div class="feature-card">
        <h3 style="color:#7c3aed; margin-bottom:8px;">⚡ Super Cepat</h3>
        <p style="font-size:13px; color:#64748b;">Dioptimasi dengan performa GPU 60 FPS.</p>
      </div>
      <div class="feature-card">
        <h3 style="color:#059669; margin-bottom:8px;">💻 Desktop Ready</h3>
        <p style="font-size:13px; color:#64748b;">Tampilan multi-kolom luas di layar monitor.</p>
      </div>
    </div>
  </div>

  <footer>
    &copy; 2026 DevGrow Learning Management System. All rights reserved.
  </footer>

</body>
</html>`,
    quiz: {
      question: "Prinsip desain apa yang mengutamakan perancangan layout untuk layar smartphone kecil terlebih dahulu sebelum memperluasnya ke desktop?",
      options: ["Mobile-First Design", "Desktop-First Design", "Screen-Last Design", "Fixed-Width Design"],
      correctIndex: 0,
      explanation: "Mobile-First Design memprioritaskan esensi konten untuk pengguna ponsel, lalu menggunakan min-width media queries untuk memperkaya tata letak di layar lebar."
    }
  }
];

async function run() {
  const modId = 'ba1383a2-219d-44ab-bf63-804d5a0f0902';
  const chapTitle = 'CSS Responsive';

  for (const dbUrl of dbs) {
    const dbName = dbUrl.split('/').pop();
    console.log(`\n🚀 [${dbName}] Seeding Chapter "${chapTitle}" & 8 Lessons...`);
    const pool = new Pool({ connectionString: dbUrl });

    try {
      // 1. Check or Create Chapter "CSS Responsive"
      let chRes = await pool.query(`SELECT id FROM "Chapter" WHERE "moduleId" = $1 AND title = $2`, [modId, chapTitle]);
      let chapterId;
      if (chRes.rowCount === 0) {
        const insertChap = await pool.query(`
          INSERT INTO "Chapter" (id, title, "moduleId", "order", "createdAt", "updatedAt")
          VALUES (gen_random_uuid(), $1, $2, 5, NOW(), NOW())
          RETURNING id
        `, [chapTitle, modId]);
        chapterId = insertChap.rows[0].id;
        console.log(`  ➕ Created Chapter: ${chapTitle} (${chapterId})`);
      } else {
        chapterId = chRes.rows[0].id;
        console.log(`  📌 Existing Chapter: ${chapTitle} (${chapterId})`);
      }

      // 2. Insert or update each of the 8 responsive lessons
      for (const l of responsiveLessons) {
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

  console.log('\n✨ ALL 8 CSS RESPONSIVE LESSONS POPULATED ACROSS BOTH DATABASES!');
}

run().catch(console.error);
