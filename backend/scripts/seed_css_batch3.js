const { Pool } = require('pg');
require('dotenv').config({ path: 'c:/xampp/htdocs/Learning Management System/backend/.env' });
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const batch3Lessons = [
  {
    id: 'css-icons',
    title: 'CSS Icons',
    order: 18,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-sky-600 to-indigo-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-sky-150 border border-white/20">CSS Visuals</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Icons: Font Awesome, Bootstrap, & Google Icons</h1>
    <p class="text-sky-100 text-sm md:text-base leading-relaxed">
      Ikon memberikan petunjuk visual yang intuitif bagi pengguna. Anda dapat menyematkan dan mengubah ukuran, warna, serta bayangan ikon persis seperti teks biasa menggunakan CSS!
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
    <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
      <div class="flex items-center justify-between">
        <h3 class="font-black text-slate-800 dark:text-white text-base">1. Font Awesome</h3>
        <span class="px-2 py-0.5 bg-blue-100 dark:bg-blue-950 text-blue-600 text-xs rounded font-bold">Populer</span>
      </div>
      <p class="text-xs text-slate-600 dark:text-slate-400">Library ikon terlengkap di dunia.</p>
      <div class="bg-slate-900 p-2.5 rounded-lg text-[11px] font-mono text-slate-200 overflow-x-auto">
        &lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"&gt;<br/><br/>
        &lt;i class="fa-solid fa-heart"&gt;&lt;/i&gt;
      </div>
    </div>

    <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
      <div class="flex items-center justify-between">
        <h3 class="font-black text-slate-800 dark:text-white text-base">2. Bootstrap Icons</h3>
        <span class="px-2 py-0.5 bg-purple-100 dark:bg-purple-950 text-purple-600 text-xs rounded font-bold">SVG Modern</span>
      </div>
      <p class="text-xs text-slate-600 dark:text-slate-400">Didesain khusus untuk integrasi cepat.</p>
      <div class="bg-slate-900 p-2.5 rounded-lg text-[11px] font-mono text-slate-200 overflow-x-auto">
        &lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css"&gt;<br/><br/>
        &lt;i class="bi bi-star-fill"&gt;&lt;/i&gt;
      </div>
    </div>

    <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
      <div class="flex items-center justify-between">
        <h3 class="font-black text-slate-800 dark:text-white text-base">3. Google Material Icons</h3>
        <span class="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 text-xs rounded font-bold">Resmi Google</span>
      </div>
      <p class="text-xs text-slate-600 dark:text-slate-400">Material Symbols & Icons Google.</p>
      <div class="bg-slate-900 p-2.5 rounded-lg text-[11px] font-mono text-slate-200 overflow-x-auto">
        &lt;link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"&gt;<br/><br/>
        &lt;i class="material-icons"&gt;home&lt;/i&gt;
      </div>
    </div>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Mengapa Ikon Font Sangat Hebat?</h2>
    <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
      Karena ikon berbasis font (*vector fonts*), Anda dapat memanipulasi tampilannya langsung dengan properti CSS tipografi standar:
    </p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
      <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <code>font-size: 32px;</code> (Mengubah ukuran tanpa pecah)
      </div>
      <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <code>color: #ef4444;</code> (Mengubah warna dengan bebas)
      </div>
      <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <code>text-shadow: 0 4px 10px rgba(0,0,0,0.2);</code> (Efek bayangan)
      </div>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-sky-50 to-indigo-50 dark:from-sky-950/20 dark:to-indigo-950/20 border border-sky-200 dark:border-sky-900/40 rounded-2xl">
    <h4 class="text-sky-900 dark:text-sky-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-sky-800 dark:text-sky-400 text-xs leading-relaxed">
      Di Live Editor, perbesar ukuran ikon keranjang belanja menjadi <code>font-size: 36px</code> dan berikan efek hover yang mengubah warnanya menjadi hijau (<code>#10b981</code>).
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <!-- Load Font Awesome 6 Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f8fafc;
      padding: 30px;
      display: flex;
      gap: 20px;
    }
    .icon-card {
      background: white;
      padding: 25px;
      border-radius: 16px;
      border: 2px solid #e2e8f0;
      text-align: center;
      width: 140px;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
      transition: transform 0.2s, border-color 0.2s;
    }
    .icon-card:hover {
      transform: translateY(-4px);
      border-color: #3b82f6;
    }
    .icon-style {
      font-size: 32px;
      color: #3b82f6;
      margin-bottom: 12px;
      display: inline-block;
    }
    .icon-red { color: #ef4444; }
    .icon-green { color: #10b981; }
  </style>
</head>
<body>

  <div class="icon-card">
    <i class="fa-solid fa-house icon-style"></i>
    <div style="font-size:12px; font-weight:bold; color:#475569;">Beranda</div>
  </div>

  <div class="icon-card">
    <i class="fa-solid fa-heart icon-style icon-red"></i>
    <div style="font-size:12px; font-weight:bold; color:#475569;">Favorit</div>
  </div>

  <div class="icon-card">
    <i class="fa-solid fa-shield-halved icon-style icon-green"></i>
    <div style="font-size:12px; font-weight:bold; color:#475569;">Keamanan</div>
  </div>

</body>
</html>`,
    quiz: {
      question: "Properti CSS apa yang digunakan untuk memperbesar ukuran ikon berbasis icon font (seperti Font Awesome)?",
      options: [
        "width & height",
        "font-size",
        "icon-size",
        "scale-transform"
      ],
      correctIndex: 1,
      explanation: "Karena icon font diperlakukan sebagai karakter font/vektor tipografi oleh browser, ukurannya dikontrol menggunakan properti 'font-size'."
    }
  },
  {
    id: 'css-links',
    title: 'CSS Links',
    order: 19,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-blue-150 border border-white/20">CSS Interactivity</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Links & Link Buttons</h1>
    <p class="text-blue-100 text-sm md:text-base leading-relaxed">
      Tautan (*links*) dapat ditata dengan warna, garis bawah kustom, status pseudo-class, hingga disulap menjadi tombol modern yang interaktif.
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">4 Status Pseudo-Class pada Link (Aturan LVHA)</h2>
    <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
      Untuk memastikan aturan link berjalan sempurna tanpa konflik, tulis selalu dengan urutan <strong>LVHA</strong>:
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
      <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <code class="font-bold text-blue-600">a:link</code>
        <p class="text-slate-600 dark:text-slate-400 mt-1">Status tautan normal yang belum pernah dikunjungi oleh pengguna.</p>
      </div>

      <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <code class="font-bold text-purple-600">a:visited</code>
        <p class="text-slate-600 dark:text-slate-400 mt-1">Status tautan yang sudah pernah dikunjungi oleh pengguna sebelumnya.</p>
      </div>

      <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <code class="font-bold text-emerald-600">a:hover</code>
        <p class="text-slate-600 dark:text-slate-400 mt-1">Status saat kursor mouse pengguna melayang di atas tautan.</p>
      </div>

      <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <code class="font-bold text-amber-600">a:active</code>
        <p class="text-slate-600 dark:text-slate-400 mt-1">Status tepat saat tautan sedang ditekan/diklik oleh pengguna.</p>
      </div>
    </div>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Menghilangkan Garis Bawah & Membuat Link Button</h2>
    <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
      Gunakan <code>text-decoration: none;</code> untuk membuang garis bawah default link, lalu tambahkan <code>display: inline-block</code>, <code>padding</code>, dan <code>border-radius</code> untuk membuat tombol klik yang menarik:
    </p>
    <div class="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs overflow-x-auto">
      a.btn {<br/>
      &nbsp;&nbsp;text-decoration: none;<br/>
      &nbsp;&nbsp;background: #2563eb;<br/>
      &nbsp;&nbsp;color: white;<br/>
      &nbsp;&nbsp;padding: 10px 20px;<br/>
      &nbsp;&nbsp;border-radius: 8px;<br/>
      &nbsp;&nbsp;display: inline-block;<br/>
      }
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-900/40 rounded-2xl">
    <h4 class="text-blue-900 dark:text-blue-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-blue-800 dark:text-blue-400 text-xs leading-relaxed">
      Di Live Editor, atur <code>a:hover</code> agar latar belakang tombol berubah dari biru menjadi biru gelap (<code>#1e40af</code>) dengan transisi halus <code>transition: 0.3s</code>.
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
      padding: 30px;
      background: #f8fafc;
    }
    
    /* 1. Text Link dengan Hover Modern */
    .smart-link {
      color: #2563eb;
      text-decoration: none;
      font-weight: bold;
      border-bottom: 2px solid transparent;
      transition: border-color 0.2s;
    }
    .smart-link:hover {
      border-bottom-color: #2563eb;
    }

    /* 2. Link yang disulap menjadi Tombol */
    .button-link {
      display: inline-block;
      text-decoration: none;
      background-color: #2563eb;
      color: white;
      padding: 12px 24px;
      border-radius: 10px;
      font-weight: bold;
      font-size: 14px;
      box-shadow: 0 4px 10px rgba(37,99,235,0.25);
      transition: all 0.2s;
      margin-top: 15px;
    }
    .button-link:hover {
      background-color: #1d4ed8;
      transform: translateY(-2px);
      box-shadow: 0 6px 15px rgba(37,99,235,0.35);
    }
    .button-link:active {
      transform: translateY(0);
    }
  </style>
</head>
<body>

  <h3>Styling Link di CSS</h3>
  <p>Ini adalah contoh <a href="#" class="smart-link">Tautan Teks Elegan</a>.</p>

  <a href="#" class="button-link">Mulai Belajar Sekarang →</a>

</body>
</html>`,
    quiz: {
      question: "Apakah urutan penulisan pseudo-class link yang benar menurut aturan LVHA?",
      options: [
        ":hover -> :link -> :active -> :visited",
        ":link -> :visited -> :hover -> :active",
        ":active -> :hover -> :visited -> :link",
        ":visited -> :active -> :link -> :hover"
      ],
      correctIndex: 1,
      explanation: "Urutan wajib penulisan pseudo-class tautan adalah LVHA: :link, :visited, :hover, lalu :active."
    }
  },
  {
    id: 'css-lists',
    title: 'CSS Lists',
    order: 20,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-emerald-600 to-teal-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-emerald-150 border border-white/20">CSS Lists</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Lists: Kustomisasi Daftar & Navigasi</h1>
    <p class="text-emerald-100 text-sm md:text-base leading-relaxed">
      Daftar HTML (<code>&lt;ul&gt;</code> dan <code>&lt;ol&gt;</code>) dapat diubah bentuk penomoran atau bullet-nya, bahkan dapat disulap menjadi menu navigasi horizontal (*navbar*).
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Properti Utama CSS Lists</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
      <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <code class="font-bold text-emerald-600">list-style-type</code>
        <p class="text-slate-600 dark:text-slate-400 mt-1">
          • Unordered: <code>disc</code>, <code>circle</code>, <code>square</code>, <code>none</code> (tanpa bullet).<br/>
          • Ordered: <code>decimal</code>, <code>upper-roman</code>, <code>lower-alpha</code>.
        </p>
      </div>

      <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <code class="font-bold text-emerald-600">list-style-position</code>
        <p class="text-slate-600 dark:text-slate-400 mt-1">
          • <code>outside</code> (default, bullet berada di luar blok teks).<br/>
          • <code>inside</code> (bullet berada di dalam batas padding teks).
        </p>
      </div>

      <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 md:col-span-2">
        <code class="font-bold text-emerald-600">list-style: none; padding: 0; margin: 0;</code>
        <p class="text-slate-600 dark:text-slate-400 mt-1">
          Trik standar industri untuk me-reset list menjadi elemen bersih sebelum membuat Navbar atau Grid Menu.
        </p>
      </div>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border border-emerald-200 dark:border-emerald-900/40 rounded-2xl">
    <h4 class="text-emerald-900 dark:text-emerald-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-emerald-800 dark:text-emerald-400 text-xs leading-relaxed">
      Di Live Editor, hilangkan bullet bawaan list dan ubah menjadi list bergaya modern dengan ikon centang dan background hover lembut.
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
      background: #f8fafc;
      padding: 30px;
    }
    
    /* List Modern Bergaya Card */
    .feature-list {
      list-style: none; /* Hilangkan bullet default */
      padding: 0;
      margin: 0;
      max-width: 380px;
    }
    .feature-list li {
      padding: 12px 16px;
      background: white;
      margin-bottom: 8px;
      border-radius: 10px;
      border: 1px solid #e2e8f0;
      font-size: 14px;
      font-weight: 600;
      color: #1e293b;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .feature-list li::before {
      content: "✓";
      color: #10b981;
      font-weight: 900;
    }
  </style>
</head>
<body>

  <h3>Daftar Fitur Kursus:</h3>
  <ul class="feature-list">
    <li>Materi Lengkap dari Dasar hingga Mahir</li>
    <li>Interactive Live Code Editor</li>
    <li>Kuis Evaluasi & Sertifikat Resmi</li>
  </ul>

</body>
</html>`,
    quiz: {
      question: "Nilai properti apa yang digunakan untuk menghapus tanda titik (bullet) pada elemen <ul>?",
      options: [
        "list-style: none;",
        "list-bullet: hide;",
        "text-decoration: none;",
        "list-type: clear;"
      ],
      correctIndex: 0,
      explanation: "'list-style: none;' (atau list-style-type: none;) digunakan untuk menghapus bullet bawaan dari list HTML."
    }
  },
  {
    id: 'css-tables',
    title: 'CSS Tables',
    order: 21,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-violet-600 to-purple-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-violet-150 border border-white/20">CSS Data Presentation</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Tables: Tabel Bersih, Zebra Striping, & Responsif</h1>
    <p class="text-violet-100 text-sm md:text-base leading-relaxed">
      Tabel HTML default terlihat kaku dan kuno. Dengan CSS, Anda dapat menyatukan border, menambahkan efek belang (*zebra stripes*), hover baris, dan membuatnya responsif.
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Aturan Emas Tabel CSS: <code>border-collapse: collapse;</code></h2>
    <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
      Secara default, setiap sel tabel memiliki border ganda yang terpisah. Properti <code>border-collapse: collapse;</code> menyatukan border sel menjadi satu garis tunggal yang ramping dan profesional.
    </p>

    <div class="space-y-3 text-xs pt-2">
      <div class="p-3.5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <strong class="text-violet-600">Zebra Striping:</strong> <code>tr:nth-child(even) { background-color: #f8fafc; }</code> (Membuat baris genap berwarna abu-abu muda untuk kemudahan membaca baris panjang).
      </div>
      <div class="p-3.5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <strong class="text-violet-600">Hover Baris:</strong> <code>tr:hover { background-color: #f1f5f9; }</code> (Memberi highlight baris saat kursor melayang).
      </div>
      <div class="p-3.5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <strong class="text-violet-600">Tabel Responsif:</strong> Bungkus tag <code>&lt;table&gt;</code> di dalam <code>&lt;div style="overflow-x: auto;"&gt;</code> agar tabel bisa digeser halus di layar smartphone.
      </div>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20 border border-violet-200 dark:border-violet-900/40 rounded-2xl">
    <h4 class="text-violet-900 dark:text-violet-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-violet-800 dark:text-violet-400 text-xs leading-relaxed">
      Di Live Editor, atur header tabel (<code>th</code>) dengan background biru gelap (<code>#1e293b</code>), teks putih, dan padding <code>14px</code>.
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
      background: #f8fafc;
      padding: 30px;
    }
    .modern-table-wrap {
      overflow-x: auto;
      border-radius: 12px;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
      border: 1px solid #e2e8f0;
    }
    table {
      width: 100%;
      border-collapse: collapse; /* Menyatukan border ganda */
      background: white;
      text-align: left;
      font-size: 14px;
    }
    th {
      background-color: #4f46e5;
      color: white;
      padding: 12px 16px;
      font-weight: bold;
    }
    td {
      padding: 12px 16px;
      border-bottom: 1px solid #f1f5f9;
      color: #334155;
    }
    tr:nth-child(even) {
      background-color: #f8fafc; /* Zebra Striping */
    }
    tr:hover {
      background-color: #e0e7ff; /* Highlight baris */
    }
  </style>
</head>
<body>

  <div class="modern-table-wrap">
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Nama Siswa</th>
          <th>Kursus</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Rian Pratama</td>
          <td>HTML & CSS Fundamental</td>
          <td><span style="color:#16a34a; font-weight:bold;">Lulus</span></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Siti Rahma</td>
          <td>JavaScript Mastery</td>
          <td><span style="color:#2563eb; font-weight:bold;">Belajar</span></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Budi Santoso</td>
          <td>PHP & MySQL</td>
          <td><span style="color:#16a34a; font-weight:bold;">Lulus</span></td>
        </tr>
      </tbody>
    </table>
  </div>

</body>
</html>`,
    quiz: {
      question: "Properti CSS apa yang wajib digunakan untuk menyatukan border ganda tabel HTML menjadi satu garis tunggal?",
      options: [
        "border-single: true;",
        "border-collapse: collapse;",
        "border-merge: join;",
        "table-layout: fixed;"
      ],
      correctIndex: 1,
      explanation: "'border-collapse: collapse;' menggabungkan border yang berdekatan pada tabel menjadi satu garis batas tunggal."
    }
  },
  {
    id: 'css-display',
    title: 'CSS Display',
    order: 22,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-cyan-600 to-blue-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-cyan-150 border border-white/20">CSS Layout Core</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Display: Block, Inline, & None vs Hidden</h1>
    <p class="text-cyan-100 text-sm md:text-base leading-relaxed">
      Properti <code>display</code> adalah properti terpenting untuk mengontrol bagaimana sebuah elemen berperilaku dan ditampilkan di dalam alur dokumen (*normal flow*).
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="bg-white dark:bg-[#0c0e18] p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <span class="px-2 py-0.5 bg-blue-100 dark:bg-blue-950 text-blue-600 text-xs rounded font-mono font-bold">display: block</span>
      <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
        Selalu dimulai pada baris baru dan mengambil lebar penuh 100% dari kiri ke kanan (contoh: <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>). Bisa diberi <code>width</code> dan <code>height</code>.
      </p>
    </div>

    <div class="bg-white dark:bg-[#0c0e18] p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <span class="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 text-xs rounded font-mono font-bold">display: inline</span>
      <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
        Tidak memulai baris baru dan hanya memakan lebar sebesar isi kontennya (contoh: <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>). <strong>TIDAK BISA</strong> diberi <code>width</code> dan <code>height</code>.
      </p>
    </div>

    <div class="bg-white dark:bg-[#0c0e18] p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <span class="px-2 py-0.5 bg-purple-100 dark:bg-purple-950 text-purple-600 text-xs rounded font-mono font-bold">display: inline-block</span>
      <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
        Kombinasi terbaik! Mengalir berdampingan secara horizontal seperti inline, tetapi <strong>BISA</strong> diberi <code>width</code>, <code>height</code>, padding, dan margin.
      </p>
    </div>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Perbedaan Krusial: <code>display: none</code> vs <code>visibility: hidden</code></h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
      <div class="p-4 bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 rounded-xl space-y-1">
        <strong class="text-rose-900 dark:text-rose-300">display: none</strong>
        <p class="text-rose-800 dark:text-rose-400">Elemen disembunyikan <strong>DAN ruangnya dihapus total</strong> seolah-olah elemen tidak pernah ada di dokumen.</p>
      </div>
      <div class="p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 rounded-xl space-y-1">
        <strong class="text-amber-900 dark:text-amber-300">visibility: hidden</strong>
        <p class="text-amber-800 dark:text-amber-400">Elemen tidak terlihat tetapi <strong>ruang fisiknya tetap dipertahankan</strong> (menyisakan ruang kosong transparan).</p>
      </div>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border border-cyan-200 dark:border-cyan-900/40 rounded-2xl">
    <h4 class="text-cyan-900 dark:text-cyan-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-cyan-800 dark:text-cyan-400 text-xs leading-relaxed">
      Di Live Editor, ubah tautan <code>&lt;a&gt;</code> menjadi <code>display: inline-block;</code> agar bisa diberi padding dan lebar yang seragam.
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
      padding: 20px;
    }
    .box-inline-block {
      display: inline-block;
      width: 120px;
      height: 80px;
      background-color: #3b82f6;
      color: white;
      text-align: center;
      line-height: 80px;
      border-radius: 10px;
      margin: 5px;
      font-weight: bold;
    }
  </style>
</head>
<body>

  <h3>display: inline-block Demo</h3>
  <p>Elemen-elemen ini berjajar rapi ke samping DAN memiliki ukuran width & height yang pasti:</p>

  <div class="box-inline-block">Kotak 1</div>
  <div class="box-inline-block">Kotak 2</div>
  <div class="box-inline-block">Kotak 3</div>

</body>
</html>`,
    quiz: {
      question: "Apa perbedaan antara 'display: none;' dan 'visibility: hidden;'?",
      options: [
        "display: none menghapus elemen dan ruangnya dari layout, sedangkan visibility: hidden menyembunyikan elemen tetapi tetap memakan ruang fisik di layar",
        "visibility: hidden hanya bekerja pada teks, sedangkan display: none hanya bekerja pada gambar",
        "Keduanya sama persis dan tidak ada perbedaan",
        "display: none mengubah warna elemen menjadi transparan 50%"
      ],
      correctIndex: 0,
      explanation: "'display: none' menghilangkan elemen beserta ruang tata letaknya dari alur dokumen, sedangkan 'visibility: hidden' membuat elemen tidak terlihat namun ruang fisiknya tetap dipertahankan."
    }
  },
  {
    id: 'css-max-width',
    title: 'CSS Max-width',
    order: 23,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-teal-600 to-emerald-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-teal-150 border border-white/20">CSS Responsiveness</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Max-width & Container Centering</h1>
    <p class="text-teal-100 text-sm md:text-base leading-relaxed">
      <code>max-width</code> adalah fondasi dari responsive web design. Menjaga elemen agar tidak terlalu lebar di monitor ultra-wide, namun tetap fleksibel menciut di layar smartphone.
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Perbandingan Nyata: <code>width: 500px</code> vs <code>max-width: 500px</code></h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
      <div class="p-4 bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 rounded-xl space-y-1">
        <strong class="text-rose-900 dark:text-rose-300">width: 500px (Kaku)</strong>
        <p class="text-rose-800 dark:text-rose-400">Jika dibuka di HP dengan lebar 360px, elemen tetap memaksakan diri selebar 500px sehingga muncul scrollbar horizontal yang merusak desain.</p>
      </div>
      <div class="p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 rounded-xl space-y-1">
        <strong class="text-emerald-900 dark:text-emerald-300">max-width: 500px; width: 100%; (Fleksibel)</strong>
        <p class="text-emerald-800 dark:text-emerald-400">Di desktop, lebar maksimal 500px. Di layar HP 360px, lebarnya otomatis menciut 100% mengikuti lebar layar HP dengan rapi!</p>
      </div>
    </div>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Pola Layout Kontainer Standar Dunia</h2>
    <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
      Hampir setiap website modern (termasuk YouTube, Medium, dan DevGrow LMS) menggunakan kombinasi berikut untuk membungkus konten utama:
    </p>
    <div class="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs overflow-x-auto">
      .container {<br/>
      &nbsp;&nbsp;max-width: 1200px; /* Batas lebar konten */<br/>
      &nbsp;&nbsp;margin: 0 auto;    /* Menengahkan kontainer di layar */<br/>
      &nbsp;&nbsp;padding: 0 20px;   /* Jarak aman di sisi layar HP */<br/>
      }
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-950/20 dark:to-emerald-950/20 border border-teal-200 dark:border-teal-900/40 rounded-2xl">
    <h4 class="text-teal-900 dark:text-teal-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-teal-800 dark:text-teal-400 text-xs leading-relaxed">
      Di Live Editor, atur gambar agar responsif dengan menyematkan <code>max-width: 100%; height: auto;</code> sehingga gambar tidak pernah meluap keluar dari kontainernya.
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
      background: #f1f5f9;
      margin: 0;
      padding: 20px;
    }
    .wrapper {
      max-width: 500px;
      margin: 30px auto;
      background: white;
      padding: 30px;
      border-radius: 16px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.05);
      border: 1px solid #cbd5e1;
    }
    img.responsive-img {
      max-width: 100%;
      height: auto;
      border-radius: 12px;
      display: block;
      margin-bottom: 15px;
    }
  </style>
</head>
<body>

  <div class="wrapper">
    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80" alt="Coding" class="responsive-img">
    <h3 style="margin:0 0 10px 0; color:#0f172a;">Gambar & Kontainer Responsif</h3>
    <p style="color:#64748b; font-size:14px; line-height:1.6; margin:0;">
      Menggunakan <strong>max-width: 100%</strong> pada gambar mencegah gambar meluap melebihi batas kontainer pembungkusnya.
    </p>
  </div>

</body>
</html>`,
    quiz: {
      question: "Kombinasi CSS apa yang paling tepat untuk membuat gambar otomatis responsif menyesuaikan ukuran lebar kontainernya?",
      options: [
        "max-width: 100%; height: auto;",
        "width: 1000px; height: 500px;",
        "display: none;",
        "position: absolute;"
      ],
      correctIndex: 0,
      explanation: "'max-width: 100%; height: auto;' memastikan gambar tidak pernah lebih lebar dari kontainernya dan aspek rasio tinggi gambar tetap proporsional."
    }
  },
  {
    id: 'css-position',
    title: 'CSS Position',
    order: 24,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-amber-600 to-orange-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-amber-150 border border-white/20">CSS Positioning</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Position: Static, Relative, Absolute, Fixed, & Sticky</h1>
    <p class="text-amber-100 text-sm md:text-base leading-relaxed">
      Properti <code>position</code> menentukan metode pemosisian elemen di halaman. Memahami cara kerja ke-5 posisi ini akan membuka kemampuan membangun layout tingkat mahir.
    </p>
  </div>

  <div class="space-y-3">
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800">
      <code class="font-bold text-amber-600">1. position: static (Default)</code>
      <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Mengikuti alur normal halaman. Properti offset (top, bottom, left, right) tidak berpengaruh pada posisi static.</p>
    </div>

    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800">
      <code class="font-bold text-amber-600">2. position: relative</code>
      <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Diposisikan relatif terhadap posisi aslinya. Sering digunakan sebagai <strong>titik acuan (parent reference)</strong> bagi elemen child yang memiliki <code>position: absolute</code>.</p>
    </div>

    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800">
      <code class="font-bold text-amber-600">3. position: absolute</code>
      <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Dikeluarkan dari alur dokumen normal dan melayang tepat di posisi yang ditentukan (top, right, dll) relatif terhadap elemen parent terdekat yang memiliki posisi non-static.</p>
    </div>

    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800">
      <code class="font-bold text-amber-600">4. position: fixed</code>
      <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Menempel tetap pada layar (*viewport*). Tidak akan bergeser sedikit pun meskipun halaman di-scroll (contoh: tombol chat WhatsApp di pojok kanan bawah).</p>
    </div>

    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800">
      <code class="font-bold text-amber-600">5. position: sticky</code>
      <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Kombinasi relative dan fixed. Berperilaku seperti relative saat berada di posisinya, namun akan langsung 'menempel' di atas layar saat pengguna men-scroll melewatinya (contoh: sticky navbar).</p>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border border-amber-200 dark:border-amber-900/40 rounded-2xl">
    <h4 class="text-amber-900 dark:text-amber-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-amber-800 dark:text-amber-400 text-xs leading-relaxed">
      Di Live Editor, buat badge diskon "PROMO 50%" yang melayang di pojok kanan atas kartu menggunakan kombinasi <code>position: relative</code> pada parent dan <code>position: absolute; top: 10px; right: 10px;</code> pada badge.
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
      background: #f8fafc;
      padding: 30px;
    }
    /* Parent: Titik Acuan */
    .card-product {
      position: relative;
      width: 280px;
      background: white;
      border: 2px solid #e2e8f0;
      border-radius: 16px;
      padding: 25px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    }
    /* Child: Melayang di pojok kanan atas parent */
    .badge-promo {
      position: absolute;
      top: -10px;
      right: -10px;
      background: #ef4444;
      color: white;
      font-size: 11px;
      font-weight: 900;
      padding: 6px 12px;
      border-radius: 50px;
      box-shadow: 0 4px 10px rgba(239,68,68,0.3);
    }
  </style>
</head>
<body>

  <div class="card-product">
    <div class="badge-promo">DISKON 50%</div>
    <h3 style="margin-top:0; color:#0f172a;">Sepatu Lari Pro</h3>
    <p style="color:#64748b; font-size:13px;">Kombinasi position: relative (Parent) dan position: absolute (Child).</p>
  </div>

</body>
</html>`,
    quiz: {
      question: "Nilai posisi mana yang membuat sebuah elemen tetap melayang diam di koordinat layar tertentu meskipun halaman di-scroll ke bawah?",
      options: [
        "position: static;",
        "position: fixed;",
        "position: relative;",
        "position: inherit;"
      ],
      correctIndex: 1,
      explanation: "'position: fixed;' memosisikan elemen relatif terhadap viewport browser sehingga posisinya tidak berubah saat halaman di-scroll."
    }
  },
  {
    id: 'css-position-offsets',
    title: 'CSS Position Offsets',
    order: 25,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-purple-700 to-indigo-800 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-purple-150 border border-white/20">CSS Coordinates</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Position Offsets & Z-Index</h1>
    <p class="text-purple-100 text-sm md:text-base leading-relaxed">
      Setelah elemen diberi properti <code>position</code> (relative, absolute, fixed, atau sticky), gunakan koordinat offset (top, right, bottom, left) dan tumpukan kedalaman (*z-index*).
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">1. Koordinat Offset (Top, Right, Bottom, Left)</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono">
      <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-center">
        <code>top: 20px;</code><br/><span class="text-slate-400 font-sans">Jarak dari batas atas</span>
      </div>
      <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-center">
        <code>right: 0;</code><br/><span class="text-slate-400 font-sans">Menempel batas kanan</span>
      </div>
      <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-center">
        <code>bottom: 15px;</code><br/><span class="text-slate-400 font-sans">Jarak dari batas bawah</span>
      </div>
      <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-center">
        <code>left: 50%;</code><br/><span class="text-slate-400 font-sans">Geser 50% dari kiri</span>
      </div>
    </div>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white flex items-center gap-2">
      <span class="w-8 h-8 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 flex items-center justify-center font-bold text-sm">📚</span>
      Konsep Tumpukan Layer: <code>z-index</code>
    </h2>
    <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
      Ketika dua elemen berposisi saling bertumpukan di layar, <code>z-index</code> menentukan elemen mana yang berada di lapisan paling depan (*front layer*):
    </p>
    <div class="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl text-xs text-purple-900 dark:text-purple-300 space-y-1">
      <p>• Semakin besar angka <code>z-index</code> (misal: <code>z-index: 100</code>), elemen tersebut akan berada di atas elemen dengan angka lebih kecil (misal: <code>z-index: 1</code>).</p>
      <p>• <strong>Catatan Kritis:</strong> <code>z-index</code> hanya berfungsi pada elemen yang memiliki properti <code>position</code> (relative, absolute, fixed, atau sticky).</p>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 border border-purple-200 dark:border-purple-900/40 rounded-2xl">
    <h4 class="text-purple-900 dark:text-purple-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-purple-800 dark:text-purple-400 text-xs leading-relaxed">
      Di Live Editor, atur <code>z-index: 10</code> pada kotak ungu agar kotak tersebut tampil di depan kotak biru!
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
      padding: 30px;
    }
    .parent-container {
      position: relative;
      height: 180px;
      background: #f1f5f9;
      border-radius: 16px;
      padding: 20px;
    }
    .box-blue {
      position: absolute;
      top: 30px;
      left: 30px;
      width: 140px;
      height: 100px;
      background-color: #3b82f6;
      color: white;
      padding: 15px;
      border-radius: 12px;
      z-index: 1; /* Layer bawah */
    }
    .box-purple {
      position: absolute;
      top: 60px;
      left: 80px;
      width: 140px;
      height: 100px;
      background-color: #8b5cf6;
      color: white;
      padding: 15px;
      border-radius: 12px;
      z-index: 2; /* Layer atas karena z-index lebih tinggi */
      box-shadow: 0 10px 20px rgba(0,0,0,0.15);
    }
  </style>
</head>
<body>

  <div class="parent-container">
    <div class="box-blue">Kotak Biru<br>(z-index: 1)</div>
    <div class="box-purple">Kotak Ungu<br>(z-index: 2)</div>
  </div>

</body>
</html>`,
    quiz: {
      question: "Syarat apa yang wajib dipenuhi agar properti 'z-index' dapat berfungsi pada sebuah elemen?",
      options: [
        "Elemen wajib memiliki tag <img> di dalamnya",
        "Elemen wajib memiliki properti position selain static (seperti relative, absolute, fixed, atau sticky)",
        "Elemen wajib memiliki border-radius 50%",
        "Elemen wajib ditulis di dalam tag <header>"
      ],
      correctIndex: 1,
      explanation: "'z-index' hanya berlaku pada elemen yang diposisikan (memiliki nilai position selain static, seperti relative, absolute, fixed, atau sticky)."
    }
  }
];

async function run() {
  const modId = 'ba1383a2-219d-44ab-bf63-804d5a0f0902';
  console.log('🚀 Populating CSS Batch 3 lessons for module:', modId);

  // 1. Get Chapter ID for "CSS Tutorial"
  const chRes = await pool.query(`SELECT id, title FROM "Chapter" WHERE "moduleId" = $1 AND title = 'CSS Tutorial' LIMIT 1`, [modId]);
  if (chRes.rowCount === 0) {
    throw new Error('Chapter CSS Tutorial not found!');
  }
  const chapterId = chRes.rows[0].id;
  console.log(`📌 Using Chapter: ${chRes.rows[0].title} (${chapterId})`);

  // 2. Insert or update batch 3 lessons
  for (const l of batch3Lessons) {
    const contentJson = {
      theory: l.theory,
      code: l.code,
      quiz: l.quiz
    };

    await pool.query(`
      INSERT INTO "Lesson" (id, title, "moduleId", "chapterId", chapter, type, "order", content, "createdAt", "updatedAt")
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW(), NOW())
      ON CONFLICT (id) DO UPDATE SET
        title = EXCLUDED.title,
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
      'CSS Tutorial',
      'code',
      l.order,
      JSON.stringify(contentJson)
    ]);
    console.log(`  ➕ [${l.order}] Inserted/Updated Lesson: ${l.title} (${l.id})`);
  }

  console.log('\n🎉 ALL 8 CSS BATCH 3 LESSONS (18-25) SUCCESSFULLY INSERTED/UPDATED!');
  await pool.end();
}

run().catch(console.error);
