const { Pool } = require('pg');
require('dotenv').config({ path: 'c:/xampp/htdocs/Learning Management System/backend/.env' });
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const batch4Lessons = [
  {
    id: 'css-z-index',
    title: 'CSS Z-index',
    order: 26,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-violet-600 to-indigo-800 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-violet-150 border border-white/20">CSS 3D Layers</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Z-index & Stacking Context</h1>
    <p class="text-violet-100 text-sm md:text-base leading-relaxed">
      <code>z-index</code> mengontrol urutan tumpukan elemen sepanjang sumbu Z (kedalaman layar). Elemen dengan z-index lebih tinggi akan menutupi elemen dengan z-index lebih rendah.
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Aturan Emas Z-index</h2>
    <div class="p-4 bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 rounded-r-xl text-xs text-amber-900 dark:text-amber-300">
      <strong>PENTING:</strong> <code>z-index</code> HANYA berfungsi pada elemen yang memiliki properti <code>position</code> selain static (yaitu: <code>relative</code>, <code>absolute</code>, <code>fixed</code>, atau <code>sticky</code>).
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs pt-2">
      <div class="p-3.5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <code class="font-bold text-violet-600">Nilai Positif (1, 10, 999):</code>
        <p class="text-slate-600 dark:text-slate-400 mt-1">Mengangkat elemen ke lapisan paling depan (sering digunakan untuk Modal Popup & Toast Notification).</p>
      </div>
      <div class="p-3.5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <code class="font-bold text-slate-700 dark:text-slate-300">Nilai Default (auto / 0):</code>
        <p class="text-slate-600 dark:text-slate-400 mt-1">Mengikuti urutan rendering alami dokumen HTML.</p>
      </div>
      <div class="p-3.5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <code class="font-bold text-rose-600">Nilai Negatif (-1, -10):</code>
        <p class="text-slate-600 dark:text-slate-400 mt-1">Menenggelamkan elemen ke lapisan paling belakang di bawah elemen teks normal.</p>
      </div>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-violet-50 to-indigo-50 dark:from-violet-950/20 dark:to-indigo-950/20 border border-violet-200 dark:border-violet-900/40 rounded-2xl">
    <h4 class="text-violet-900 dark:text-violet-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-violet-800 dark:text-violet-400 text-xs leading-relaxed">
      Di Live Editor, atur <code>z-index: 50</code> pada modal popup agar melayang sempurna di atas backdrop gelap!
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
    .backdrop {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(15, 23, 42, 0.6);
      z-index: 10; /* Lapisan Overlay */
    }
    .modal {
      position: fixed;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      background: white;
      padding: 30px;
      border-radius: 16px;
      box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
      z-index: 20; /* Lebih tinggi dari backdrop sehingga modal di depan */
      max-width: 350px;
      text-align: center;
    }
  </style>
</head>
<body>

  <h1>Halaman Web Utama</h1>
  <p>Konten latar belakang di belakang modal.</p>

  <div class="backdrop"></div>
  <div class="modal">
    <h3 style="margin-top:0; color:#4338ca;">Modal Popup Aktif</h3>
    <p style="color:#64748b; font-size:13px;">Modal memiliki z-index: 20 dan backdrop memiliki z-index: 10.</p>
  </div>

</body>
</html>`,
    quiz: {
      question: "Jika Elemen A memiliki z-index: 10 dan Elemen B memiliki z-index: 5 (keduanya position: relative), elemen manakah yang berada di lapisan paling depan?",
      options: [
        "Elemen B",
        "Elemen A",
        "Keduanya berada di lapisan yang sama persis",
        "Elemen yang ditulis paling awal di HTML"
      ],
      correctIndex: 1,
      explanation: "Elemen A akan tampil di atas Elemen B karena memiliki nilai z-index yang lebih tinggi (10 > 5)."
    }
  },
  {
    id: 'css-overflow',
    title: 'CSS Overflow',
    order: 27,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-blue-600 to-teal-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-blue-150 border border-white/20">CSS Clipping</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Overflow: Mengontrol Konten yang Meluap</h1>
    <p class="text-blue-100 text-sm md:text-base leading-relaxed">
      Properti <code>overflow</code> mengontrol apa yang terjadi jika isi konten teks atau gambar terlalu besar untuk muat di dalam kotak elemen.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="bg-white dark:bg-[#0c0e18] p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <code class="font-bold text-blue-600 text-xs">overflow: visible (Default)</code>
      <p class="text-xs text-slate-600 dark:text-slate-400">Konten tidak dipotong dan akan meluber bocor keluar dari batas kotak elemen.</p>
    </div>

    <div class="bg-white dark:bg-[#0c0e18] p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <code class="font-bold text-rose-600 text-xs">overflow: hidden</code>
      <p class="text-xs text-slate-600 dark:text-slate-400">Konten yang meluap dipotong bersih dan disembunyikan tanpa memunculkan scrollbar.</p>
    </div>

    <div class="bg-white dark:bg-[#0c0e18] p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <code class="font-bold text-amber-600 text-xs">overflow: scroll</code>
      <p class="text-xs text-slate-600 dark:text-slate-400">Selalu menampilkan batang scroll horizontal dan vertikal, bahkan saat konten tidak meluap.</p>
    </div>

    <div class="bg-white dark:bg-[#0c0e18] p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <code class="font-bold text-emerald-600 text-xs">overflow: auto (Paling Direkomendasikan ⭐)</code>
      <p class="text-xs text-slate-600 dark:text-slate-400">Scrollbar HANYA akan muncul otomatis jika konten melebihi batas ukuran kotak.</p>
    </div>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
    <h2 class="text-lg font-black text-slate-800 dark:text-white">Mengontrol Sumbu Spesifik (overflow-x & overflow-y)</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
      <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl">
        <code>overflow-x: auto;</code> (Scroll geser ke samping horizontal, misal: tabel lebar atau baris kartu carousel).
      </div>
      <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl">
        <code>overflow-y: scroll;</code> (Scroll ke atas-bawah vertikal, misal: kotak percakapan chat).
      </div>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-950/20 dark:to-teal-950/20 border border-blue-200 dark:border-blue-900/40 rounded-2xl">
    <h4 class="text-blue-900 dark:text-blue-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-blue-800 dark:text-blue-400 text-xs leading-relaxed">
      Di Live Editor, atur <code>height: 120px;</code> dan <code>overflow-y: auto;</code> pada kotak teks agar konten artikel panjang dapat di-scroll vertikal dengan rapi.
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    .scroll-box {
      width: 300px;
      height: 130px;
      border: 2px solid #cbd5e1;
      border-radius: 12px;
      padding: 15px;
      background: white;
      font-family: Arial, sans-serif;
      font-size: 13px;
      line-height: 1.6;
      color: #334155;
      
      /* Mengizinkan scroll vertikal hanya saat konten meluap */
      overflow-y: auto;
    }
  </style>
</head>
<body style="background: #f8fafc; padding: 20px;">

  <h3>Kotak Pesan Ber-Scroll (overflow-y: auto)</h3>
  <div class="scroll-box">
    CSS Overflow sangat berguna untuk membuat panel log, kotak chat pesan, dan syarat ketentuan yang memiliki teks panjang. Pengguna dapat men-scroll ke bawah dengan nyaman tanpa merusak tata letak elemen lain di sekitarnya. Teks ini terus berlanjut hingga ke bawah untuk menunjukkan batang scroll aktif.
  </div>

</body>
</html>`,
    quiz: {
      question: "Nilai properti overflow apa yang secara cerdas hanya akan memunculkan scrollbar KETIKA konten melebihi batas ukuran kotak?",
      options: [
        "overflow: visible;",
        "overflow: auto;",
        "overflow: scroll;",
        "overflow: hidden;"
      ],
      correctIndex: 1,
      explanation: "'overflow: auto;' menambahkan scrollbar hanya saat diperlukan (ketika konten meluap), dan menyembunyikannya jika konten muat dengan sempurna."
    }
  },
  {
    id: 'css-float',
    title: 'CSS Float',
    order: 28,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-cyan-600 to-blue-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-cyan-150 border border-white/20">CSS Floating</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Float, Clear, & Clearfix Hack</h1>
    <p class="text-cyan-100 text-sm md:text-base leading-relaxed">
      Properti <code>float</code> digunakan untuk memposisikan elemen melayang ke sisi kiri atau kanan, sehingga teks di sekitarnya mengalir mengelilingi elemen tersebut (efek majalah/koran).
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Nilai Properti Float & Clear</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
      <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <code class="font-bold text-cyan-600">float: left | right | none</code>
        <p class="text-slate-600 dark:text-slate-400 mt-1">Membuat gambar atau kotak melayang ke tepi kiri/kanan, sementara teks mengisi sisi sebelahnya.</p>
      </div>
      <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <code class="font-bold text-cyan-600">clear: both | left | right</code>
        <p class="text-slate-600 dark:text-slate-400 mt-1">Mencegah elemen berikutnya mengalir di samping elemen yang di-float, memaksanya turun ke baris baru.</p>
      </div>
    </div>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Solusi Ketinggian Hilang: Modern Clearfix (::after)</h2>
    <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
      Jika semua elemen anak di dalam kontainer diberi <code>float</code>, tinggi kontainer induk akan mengecil menjadi 0 (*collapse*). Pasang pola Clearfix berikut pada elemen induk:
    </p>
    <div class="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs overflow-x-auto">
      .clearfix::after {<br/>
      &nbsp;&nbsp;content: "";<br/>
      &nbsp;&nbsp;clear: both;<br/>
      &nbsp;&nbsp;display: table;<br/>
      }
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border border-cyan-200 dark:border-cyan-900/40 rounded-2xl">
    <h4 class="text-cyan-900 dark:text-cyan-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-cyan-800 dark:text-cyan-400 text-xs leading-relaxed">
      Di Live Editor, atur gambar dengan <code>float: left; margin-right: 15px;</code> agar teks artikel mengalir membungkus gambar dengan rapi.
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
    .article-box {
      max-width: 480px;
      background: white;
      border: 1px solid #e2e8f0;
      padding: 20px;
      border-radius: 16px;
    }
    .article-img {
      float: left;
      width: 110px;
      height: 110px;
      border-radius: 12px;
      margin-right: 18px;
      margin-bottom: 10px;
      object-fit: cover;
    }
    .clearfix::after {
      content: "";
      clear: both;
      display: table;
    }
  </style>
</head>
<body style="background: #f8fafc;">

  <div class="article-box clearfix">
    <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200&q=80" alt="Code" class="article-img">
    <h3 style="margin-top:0; color:#0f172a;">Teknik Floating CSS</h3>
    <p style="color:#475569; font-size:13px; line-height:1.6; margin:0;">
      Dengan <strong>float: left</strong>, gambar berada di sisi kiri dan seluruh paragraf teks ini secara otomatis membungkus sisi kanan gambar persis seperti tata letak artikel koran profesional.
    </p>
  </div>

</body>
</html>`,
    quiz: {
      question: "Apa tujuan utama dari penerapan teknik 'Clearfix' pada kontainer induk yang memiliki elemen-elemen float?",
      options: [
        "Mengubah warna gambar menjadi hitam putih",
        "Mencegah tinggi kontainer induk menyusut/hilang (zero height collapse) akibat elemen anaknya yang melayang",
        "Menghapus seluruh tag HTML di dalam kontainer",
        "Memaksa gambar berukuran 100%"
      ],
      correctIndex: 1,
      explanation: "Clearfix memaksa elemen pembungkus (parent) memperhitungkan tinggi elemen-elemen anaknya yang diberi float sehingga tinggi parent tidak kolaps menjadi 0."
    }
  },
  {
    id: 'css-inline-block',
    title: 'CSS Inline-block',
    order: 29,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-indigo-600 to-violet-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-indigo-150 border border-white/20">CSS Layouts</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Inline-block: Terbaik dari Dua Dunia</h1>
    <p class="text-indigo-100 text-sm md:text-base leading-relaxed">
      <code>display: inline-block</code> menggabungkan keunggulan <strong>inline</strong> (elemen mengalir berdampingan secara horizontal) dengan kemampuan <strong>block</strong> (bisa mengatur width, height, padding, dan margin).
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Tabel Perbandingan 3 Display Utama</h2>
    <div class="overflow-x-auto">
      <table class="w-full text-xs text-left border-collapse">
        <thead>
          <tr class="bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-bold">
            <th class="p-3 border">Fitur Display</th>
            <th class="p-3 border">inline</th>
            <th class="p-3 border text-indigo-600">inline-block ⭐</th>
            <th class="p-3 border">block</th>
          </tr>
        </thead>
        <tbody class="text-slate-600 dark:text-slate-400">
          <tr>
            <td class="p-2.5 border font-semibold">Baris Baru?</td>
            <td class="p-2.5 border">Tidak</td>
            <td class="p-2.5 border font-bold text-emerald-600">Tidak (Berdampingan)</td>
            <td class="p-2.5 border">Ya (Baris Baru)</td>
          </tr>
          <tr>
            <td class="p-2.5 border font-semibold">Bisa atur Width & Height?</td>
            <td class="p-2.5 border text-rose-500 font-bold">Tidak Bisa</td>
            <td class="p-2.5 border font-bold text-emerald-600">Bisa ✅</td>
            <td class="p-2.5 border">Bisa ✅</td>
          </tr>
          <tr>
            <td class="p-2.5 border font-semibold">Margin & Padding Vertikal?</td>
            <td class="p-2.5 border text-rose-500">Tidak mempengaruhi alur</td>
            <td class="p-2.5 border font-bold text-emerald-600">Bekerja Sempurna ✅</td>
            <td class="p-2.5 border">Bekerja Sempurna ✅</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-indigo-50 to-violet-50 dark:from-indigo-950/20 dark:to-violet-950/20 border border-indigo-200 dark:border-indigo-900/40 rounded-2xl">
    <h4 class="text-indigo-900 dark:text-indigo-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-indigo-800 dark:text-indigo-400 text-xs leading-relaxed">
      Di Live Editor, atur 3 kartu produk dengan <code>display: inline-block; width: 30%;</code> dan <code>vertical-align: top;</code> untuk membuat grid produk horizontal yang rapi.
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
      padding: 20px;
    }
    .product-grid {
      text-align: center;
    }
    .product-card {
      display: inline-block;
      width: 140px;
      background: white;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 15px;
      margin: 8px;
      vertical-align: top;
      text-align: center;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
    }
    .price-tag {
      color: #2563eb;
      font-weight: bold;
      font-size: 14px;
      margin-top: 5px;
    }
  </style>
</head>
<body>

  <div class="product-grid">
    <div class="product-card">
      <div style="font-size:30px;">📱</div>
      <h4 style="margin:8px 0 0 0; font-size:13px;">Smartphone</h4>
      <div class="price-tag">Rp 3.5 Jt</div>
    </div>

    <div class="product-card">
      <div style="font-size:30px;">💻</div>
      <h4 style="margin:8px 0 0 0; font-size:13px;">Laptop Pro</h4>
      <div class="price-tag">Rp 12 Jt</div>
    </div>

    <div class="product-card">
      <div style="font-size:30px;">🎧</div>
      <h4 style="margin:8px 0 0 0; font-size:13px;">Headphone</h4>
      <div class="price-tag">Rp 850 Rb</div>
    </div>
  </div>

</body>
</html>`,
    quiz: {
      question: "Mengapa 'display: inline-block;' sering digunakan untuk membuat deretan tombol atau kartu produk daripada 'display: inline;' biasa?",
      options: [
        "Karena inline-block otomatis mengubah font menjadi tebal",
        "Karena elemen inline biasa tidak mengizinkan penentuan ukuran width, height, dan padding vertikal",
        "Karena inline-block hanya bisa digunakan pada tag <img>",
        "Karena inline biasa otomatis memecah baris baru"
      ],
      correctIndex: 1,
      explanation: "Elemen dengan 'display: inline;' tidak merespons properti width dan height, sedangkan 'inline-block' mengizinkan pengaturan width, height, serta margin/padding secara leluasa."
    }
  },
  {
    id: 'css-align',
    title: 'CSS Align',
    order: 30,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-teal-600 to-emerald-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-teal-150 border border-white/20">CSS Alignment</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Align: Menengahkan Teks & Elemen</h1>
    <p class="text-teal-100 text-sm md:text-base leading-relaxed">
      Kuasai berbagai teknik menengahkan konten secara horizontal maupun vertikal, mulai dari trik klasik hingga teknik modern Flexbox.
    </p>
  </div>

  <div class="space-y-4">
    <div class="bg-white dark:bg-[#0c0e18] p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <h3 class="font-bold text-slate-800 dark:text-white text-sm">1. Menengahkan Teks Horizontal: <code>text-align: center;</code></h3>
      <p class="text-xs text-slate-600 dark:text-slate-400">Bekerja pada teks dan elemen inline/inline-block di dalam kontainer.</p>
    </div>

    <div class="bg-white dark:bg-[#0c0e18] p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <h3 class="font-bold text-slate-800 dark:text-white text-sm">2. Menengahkan Kotak Block: <code>margin: 0 auto;</code></h3>
      <p class="text-xs text-slate-600 dark:text-slate-400">Wajib memiliki <code>width</code> yang sudah ditentukan agar margin otomatis membagi sisa ruang kiri dan kanan secara seimbang.</p>
    </div>

    <div class="bg-white dark:bg-[#0c0e18] p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <h3 class="font-bold text-emerald-600 text-sm">3. Jurus Sakti Menengahkan Horizontal & Vertikal: Modern Flexbox ⭐</h3>
      <div class="bg-slate-900 text-slate-100 p-3 rounded-xl font-mono text-xs overflow-x-auto">
        display: flex;<br/>
        justify-content: center; /* Tengah Horizontal */<br/>
        align-items: center;     /* Tengah Vertikal */
      </div>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-950/20 dark:to-emerald-950/20 border border-teal-200 dark:border-teal-900/40 rounded-2xl">
    <h4 class="text-teal-900 dark:text-teal-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-teal-800 dark:text-teal-400 text-xs leading-relaxed">
      Di Live Editor, atur <code>.center-container</code> dengan <code>display: flex; justify-content: center; align-items: center;</code> untuk menempatkan kartu persis di titik tengah layar!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    .viewport-box {
      height: 220px;
      background: #e0f2fe;
      border: 2px dashed #38bdf8;
      border-radius: 16px;
      
      /* Solusi Ultimate Flexbox Centering */
      display: flex;
      justify-content: center; /* Sumbu Horizontal */
      align-items: center;     /* Sumbu Vertikal */
    }
    .inner-card {
      background: white;
      padding: 20px 30px;
      border-radius: 12px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.08);
      text-align: center;
      font-family: Arial, sans-serif;
    }
  </style>
</head>
<body style="padding: 20px; background: #f8fafc;">

  <div class="viewport-box">
    <div class="inner-card">
      <h3 style="margin:0; color:#0369a1;">Tepat di Titik Tengah!</h3>
      <p style="margin:5px 0 0 0; color:#64748b; font-size:13px;">Horizontal & Vertikal Center via Flexbox</p>
    </div>
  </div>

</body>
</html>`,
    quiz: {
      question: "Kombinasi properti modern apa yang paling ringkas dan ampuh untuk menengahkan konten secara horizontal dan vertikal sekaligus?",
      options: [
        "display: flex; justify-content: center; align-items: center;",
        "text-align: middle; vertical-align: middle;",
        "float: center; margin: auto;",
        "position: static; top: 50%;"
      ],
      correctIndex: 0,
      explanation: "Kombinasi Flexbox 'display: flex; justify-content: center; align-items: center;' adalah cara paling andal dan modern untuk menengahkan elemen di kedua sumbu."
    }
  },
  {
    id: 'css-combinators',
    title: 'CSS Combinators',
    order: 31,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-orange-600 to-amber-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-orange-150 border border-white/20">CSS Selectors</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Combinators: 4 Hubungan Antar Elemen</h1>
    <p class="text-orange-100 text-sm md:text-base leading-relaxed">
      Combinator menjelaskan hubungan struktural antara dua selector di pohon dokumen HTML (keturunan, anak langsung, saudara terdekat, atau sesama saudara).
    </p>
  </div>

  <div class="space-y-3">
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800">
      <div class="flex items-center gap-2">
        <code class="font-bold text-orange-600">1. Descendant Selector (Spasi)</code>
        <code class="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">div p { ... }</code>
      </div>
      <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Memilih SEMUA elemen <code>&lt;p&gt;</code> yang berada di dalam <code>&lt;div&gt;</code>, tidak peduli seberapa dalam level sarangnya.</p>
    </div>

    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800">
      <div class="flex items-center gap-2">
        <code class="font-bold text-orange-600">2. Child Selector (&gt;)</code>
        <code class="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">div &gt; p { ... }</code>
      </div>
      <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">HANYA memilih elemen <code>&lt;p&gt;</code> yang merupakan <strong>anak langsung (direct child)</strong> dari <code>&lt;div&gt;</code> (tidak menargetkan cucu/cicit).</p>
    </div>

    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800">
      <div class="flex items-center gap-2">
        <code class="font-bold text-orange-600">3. Adjacent Sibling Selector (+)</code>
        <code class="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">div + p { ... }</code>
      </div>
      <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Memilih SATU elemen <code>&lt;p&gt;</code> yang berada <strong>tepat persis setelah</strong> penutup tag <code>&lt;div&gt;</code>.</p>
    </div>

    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800">
      <div class="flex items-center gap-2">
        <code class="font-bold text-orange-600">4. General Sibling Selector (~)</code>
        <code class="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">div ~ p { ... }</code>
      </div>
      <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Memilih SEMUA elemen saudara <code>&lt;p&gt;</code> yang muncul setelah tag <code>&lt;div&gt;</code>.</p>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border border-orange-200 dark:border-orange-900/40 rounded-2xl">
    <h4 class="text-orange-900 dark:text-orange-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-orange-800 dark:text-orange-400 text-xs leading-relaxed">
      Di Live Editor, gunakan selector <code>.card &gt; p</code> untuk hanya memberi warna teks pada paragraf anak langsung tanpa mempengaruhi paragraf di dalam sub-kotak.
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    
    /* 1. Child Selector: Hanya anak langsung */
    .parent > p {
      background-color: #fed7aa;
      padding: 8px;
      font-weight: bold;
      border-radius: 6px;
    }
    
    /* 2. Adjacent Sibling: Persis setelah parent */
    .parent + h4 {
      color: #ea580c;
    }
  </style>
</head>
<body>

  <div class="parent" style="border: 2px solid #fdba74; padding: 15px; border-radius: 10px;">
    <p>Paragraf 1 (Anak Langsung - Kena Style!)</p>
    <div>
      <p>Paragraf di dalam sub-div (Cucu - TIDAK kena style)</p>
    </div>
  </div>

  <h4>Judul Ini adalah Adjacent Sibling (.parent + h4)</h4>

</body>
</html>`,
    quiz: {
      question: "Simbol combinator apa yang digunakan untuk memilih hanya elemen anak langsung (direct child) dari sebuah parent?",
      options: [
        "Tanda Panah Kanan (>)",
        "Tanda Tambah (+)",
        "Tanda Gelombang (~)",
        "Tanda Spasi"
      ],
      correctIndex: 0,
      explanation: "Tanda panah kanan (>) adalah Child Selector yang menargetkan hanya elemen anak tingkat pertama (direct child)."
    }
  },
  {
    id: 'css-pseudo-classes',
    title: 'CSS Pseudo-classes',
    order: 32,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-pink-600 to-rose-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-pink-150 border border-white/20">CSS States</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Pseudo-classes: Interaktif & Struktural</h1>
    <p class="text-pink-100 text-sm md:text-base leading-relaxed">
      Pseudo-class diawali dengan satu titik dua (<code>:</code>) dan digunakan untuk mendefinisikan status khusus suatu elemen (misal saat kursor melayang, input difokuskan, atau urutan elemen ke-N).
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="bg-white dark:bg-[#0c0e18] p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
      <h3 class="font-black text-slate-800 dark:text-white text-base">1. Pseudo-class Interaktif (State)</h3>
      <div class="space-y-2 text-xs">
        <div><code>:hover</code> - Saat kursor mouse melayang di atas elemen.</div>
        <div><code>:focus</code> - Saat input form sedang aktif/diketik.</div>
        <div><code>:checked</code> - Saat checkbox/radio button terpilih.</div>
        <div><code>:disabled</code> - Saat elemen input dinonaktifkan.</div>
      </div>
    </div>

    <div class="bg-white dark:bg-[#0c0e18] p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
      <h3 class="font-black text-slate-800 dark:text-white text-base">2. Pseudo-class Struktural (Urutan)</h3>
      <div class="space-y-2 text-xs">
        <div><code>:first-child</code> - Elemen anak pertama di dalam parent.</div>
        <div><code>:last-child</code> - Elemen anak terakhir.</div>
        <div><code>:nth-child(even)</code> - Semua anak urutan genap (2, 4, 6...).</div>
        <div><code>:nth-child(3)</code> - Elemen anak urutan tepat ke-3.</div>
        <div><code>:not(.special)</code> - Memilih semua elemen kecuali yang memiliki class .special.</div>
      </div>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 border border-pink-200 dark:border-pink-900/40 rounded-2xl">
    <h4 class="text-pink-900 dark:text-pink-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-pink-800 dark:text-pink-400 text-xs leading-relaxed">
      Di Live Editor, atur <code>input:focus</code> agar memunculkan border biru (<code>#2563eb</code>) dan bayangan bercahaya (*glow shadow*) saat diklik!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 25px; background: #f8fafc; }
    
    /* Focus State Input */
    .text-input {
      padding: 10px 14px;
      border: 2px solid #cbd5e1;
      border-radius: 8px;
      outline: none;
      transition: all 0.2s;
      width: 240px;
      margin-bottom: 20px;
    }
    .text-input:focus {
      border-color: #ec4899;
      box-shadow: 0 0 0 4px rgba(236,72,153,0.2);
    }

    /* Structural nth-child */
    .menu-item:nth-child(odd) {
      background: #fce7f3;
      padding: 8px 12px;
      border-radius: 6px;
      margin-bottom: 4px;
    }
  </style>
</head>
<body>

  <h3>Input Focus Glow:</h3>
  <input type="text" class="text-input" placeholder="Klik input ini untuk melihat fokus!">

  <h3>Structural :nth-child(odd):</h3>
  <div class="menu-item">Item 1 (Ganjil - Kena Warna)</div>
  <div class="menu-item">Item 2 (Genap)</div>
  <div class="menu-item">Item 3 (Ganjil - Kena Warna)</div>

</body>
</html>`,
    quiz: {
      question: "Pseudo-class apa yang digunakan untuk memberi gaya pada input text saat pengguna sedang mengklik atau mengetik di dalamnya?",
      options: [
        ":hover",
        ":focus",
        ":active",
        ":visited"
      ],
      correctIndex: 1,
      explanation: "':focus' diterapkan ketika suatu elemen menerima fokus (seperti input teks yang sedang aktif dipilih oleh pengguna)."
    }
  },
  {
    id: 'css-pseudo-elements',
    title: 'CSS Pseudo-elements',
    order: 33,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-fuchsia-600 to-purple-800 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-fuchsia-150 border border-white/20">CSS Magic Elements</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Pseudo-elements (::before & ::after)</h1>
    <p class="text-fuchsia-100 text-sm md:text-base leading-relaxed">
      Pseudo-element diawali dengan dua titik dua (<code>::</code>) dan digunakan untuk menata bagian spesifik elemen atau menyisipkan konten dekoratif secara murni via CSS tanpa menambah tag HTML baru!
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Dua Bintang Utama: <code>::before</code> & <code>::after</code></h2>
    <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
      Digunakan untuk menyisipkan elemen virtual sebelum atau sesudah konten asli elemen.
    </p>
    <div class="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-xl text-xs text-purple-900 dark:text-purple-300">
      <strong>SYARAT MUTLAK:</strong> Anda <strong>WAJIB</strong> menyertakan properti <code>content: "";</code> agar <code>::before</code> atau <code>::after</code> dapat dirender oleh browser!
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
    <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
      <code class="font-bold text-fuchsia-600">::first-letter</code>
      <p class="text-slate-600 dark:text-slate-400 mt-1">Mengubah huruf pertama paragraf (efek Drop Cap koran).</p>
    </div>
    <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
      <code class="font-bold text-fuchsia-600">::first-line</code>
      <p class="text-slate-600 dark:text-slate-400 mt-1">Memberi gaya khusus pada baris pertama teks.</p>
    </div>
    <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
      <code class="font-bold text-fuchsia-600">::selection</code>
      <p class="text-slate-600 dark:text-slate-400 mt-1">Mengubah warna highlight saat pengguna memblok teks dengan mouse.</p>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-fuchsia-50 to-purple-50 dark:from-fuchsia-950/20 dark:to-purple-950/20 border border-fuchsia-200 dark:border-fuchsia-900/40 rounded-2xl">
    <h4 class="text-fuchsia-900 dark:text-fuchsia-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-fuchsia-800 dark:text-fuchsia-400 text-xs leading-relaxed">
      Di Live Editor, gunakan <code>::selection</code> untuk membuat efek seleksi blok teks berwarna latar ungu (<code>#c084fc</code>) dengan teks putih!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 25px; }

    /* Custom Selection Color */
    ::selection {
      background-color: #d946ef;
      color: white;
    }

    /* Efek Drop Cap Huruf Pertama */
    .dropcap::first-letter {
      font-size: 38px;
      font-weight: 900;
      color: #a21caf;
      float: left;
      line-height: 1;
      margin-right: 8px;
    }

    /* Badge dengan ::before dot indikator */
    .online-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: #fdf4ff;
      border: 1px solid #f0abfc;
      padding: 6px 14px;
      border-radius: 50px;
      font-size: 13px;
      font-weight: bold;
      color: #86198f;
    }
    .online-badge::before {
      content: "";
      width: 8px;
      height: 8px;
      background: #22c55e;
      border-radius: 50%;
    }
  </style>
</head>
<body>

  <div class="online-badge">Online Sekarang</div>
  
  <p class="dropcap" style="margin-top:20px; line-height:1.6; max-width:400px;">
    Blok teks ini dengan kursor mouse Anda untuk melihat efek warna ungu kustom dari pseudo-element ::selection!
  </p>

</body>
</html>`,
    quiz: {
      question: "Properti apa yang WAJIB disertakan agar pseudo-element '::before' atau '::after' dapat muncul di layar?",
      options: [
        "display: block;",
        "content: '';",
        "visibility: visible;",
        "opacity: 1;"
      ],
      correctIndex: 1,
      explanation: "Tanpa deklarasi 'content' (meskipun hanya string kosong content: ''), pseudo-element ::before dan ::after tidak akan dirender oleh browser."
    }
  },
  {
    id: 'css-opacity',
    title: 'CSS Opacity',
    order: 34,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-rose-600 to-pink-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-rose-150 border border-white/20">CSS Transparency</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Opacity: Transparansi Elemen</h1>
    <p class="text-rose-100 text-sm md:text-base leading-relaxed">
      Properti <code>opacity</code> mengatur tingkat transparansi elemen, dengan nilai rentang dari <code>0.0</code> (tembus pandang 100%) hingga <code>1.0</code> (buram pekat penuh).
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Perbedaan Penting: <code>opacity</code> vs <code>RGBA</code></h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
      <div class="p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 rounded-xl space-y-1">
        <strong class="text-amber-900 dark:text-amber-300">opacity: 0.5;</strong>
        <p class="text-amber-800 dark:text-amber-400">Seluruh elemen BESERTA SEMUA teks dan anak-anak di dalamnya ikut menjadi transparan.</p>
      </div>
      <div class="p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 rounded-xl space-y-1">
        <strong class="text-emerald-900 dark:text-emerald-300">background: rgba(0, 0, 0, 0.5);</strong>
        <p class="text-emerald-800 dark:text-emerald-400">HANYA warna latar belakang yang transparan, sedangkan teks di dalamnya tetap tebal dan tajam!</p>
      </div>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20 border border-rose-200 dark:border-rose-900/40 rounded-2xl">
    <h4 class="text-rose-900 dark:text-rose-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-rose-800 dark:text-rose-400 text-xs leading-relaxed">
      Di Live Editor, atur efek hover gambar: keadaan normal <code>opacity: 0.7;</code> dan saat di-hover menjadi <code>opacity: 1.0;</code> dengan transisi halus 0.3s.
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 25px; background: #f8fafc; }
    .gallery-preview {
      display: flex;
      gap: 15px;
    }
    .photo {
      width: 140px;
      height: 100px;
      border-radius: 12px;
      object-fit: cover;
      opacity: 0.6; /* Sedikit transparan saat diam */
      transition: opacity 0.3s, transform 0.3s;
      cursor: pointer;
    }
    .photo:hover {
      opacity: 1.0; /* Terang penuh saat dihover */
      transform: scale(1.05);
    }
  </style>
</head>
<body>

  <h3>Image Opacity Hover Effect:</h3>
  <div class="gallery-preview">
    <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=200&q=80" class="photo" alt="Pemandangan">
    <img src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=200&q=80" class="photo" alt="Pemandangan">
    <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=200&q=80" class="photo" alt="Pemandangan">
  </div>

</body>
</html>`,
    quiz: {
      question: "Berapakah nilai properti opacity untuk membuat sebuah elemen menjadi 50% transparan?",
      options: [
        "opacity: 50;",
        "opacity: 0.5;",
        "opacity: 50%;",
        "opacity: 0.05;"
      ],
      correctIndex: 1,
      explanation: "Nilai opacity diukur dari rentang desimal 0.0 (transparan total) hingga 1.0 (pekat penuh), sehingga 50% ditulis sebagai '0.5'."
    }
  },
  {
    id: 'css-navbar',
    title: 'CSS Navigation Bars',
    order: 35,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-blue-700 to-indigo-800 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-blue-150 border border-white/20">CSS UI Patterns</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Navigation Bars: Horizontal & Vertical</h1>
    <p class="text-blue-100 text-sm md:text-base leading-relaxed">
      Menu navigasi (*Navbar*) adalah pintu gerbang sebuah website. Pelajari cara mengubah list HTML standar menjadi navbar profesional modern.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="bg-white dark:bg-[#0c0e18] p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
      <h3 class="font-black text-slate-800 dark:text-white text-base">1. Horizontal Navbar</h3>
      <p class="text-xs text-slate-600 dark:text-slate-400">
        Menggunakan <code>display: flex</code> atau <code>display: inline-block</code> pada item menu agar berjajar ke samping, lengkap dengan status <code>.active</code>.
      </p>
      <div class="bg-slate-900 p-2.5 rounded-lg text-[11px] font-mono text-slate-200">
        ul { display: flex; list-style: none; }
      </div>
    </div>

    <div class="bg-white dark:bg-[#0c0e18] p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
      <h3 class="font-black text-slate-800 dark:text-white text-base">2. Vertical Navbar (Sidebar)</h3>
      <p class="text-xs text-slate-600 dark:text-slate-400">
        Menu vertikal yang biasa digunakan untuk Dashboard Admin atau sidebar dokumentasi.
      </p>
      <div class="bg-slate-900 p-2.5 rounded-lg text-[11px] font-mono text-slate-200">
        a { display: block; padding: 12px; }
      </div>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-900/40 rounded-2xl">
    <h4 class="text-blue-900 dark:text-blue-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-blue-800 dark:text-blue-400 text-xs leading-relaxed">
      Di Live Editor, tambahkan item menu baru "Tentang Kami" dan beri efek active pada menu "Beranda".
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; background: #f8fafc; }
    
    /* Modern Horizontal Navbar */
    .navbar {
      background: #0f172a;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 30px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    .brand-logo {
      color: #38bdf8;
      font-weight: 900;
      font-size: 18px;
    }
    .nav-links {
      list-style: none;
      display: flex;
      margin: 0;
      padding: 0;
    }
    .nav-links a {
      display: block;
      color: #94a3b8;
      text-decoration: none;
      padding: 18px 20px;
      font-weight: 600;
      font-size: 14px;
      transition: all 0.2s;
    }
    .nav-links a:hover, .nav-links a.active {
      color: white;
      background: #1e293b;
      border-bottom: 3px solid #38bdf8;
    }
  </style>
</head>
<body>

  <nav class="navbar">
    <div class="brand-logo">⚡ DevGrow LMS</div>
    <ul class="nav-links">
      <li><a href="#" class="active">Beranda</a></li>
      <li><a href="#">Kursus</a></li>
      <li><a href="#">Komunitas</a></li>
      <li><a href="#">Kontak</a></li>
    </ul>
  </nav>

</body>
</html>`,
    quiz: {
      question: "Mengapa tag <a> di dalam Navbar sebaiknya diberi 'display: block;'?",
      options: [
        "Agar seluruh area kotak menu (termasuk area padding) dapat diklik oleh pengguna",
        "Agar font menjadi berkedip",
        "Agar link berubah menjadi input text",
        "Sebagai aturan wajib untuk mengubah warna font"
      ],
      correctIndex: 0,
      explanation: "Memberikan 'display: block;' pada tag <a> di dalam list navbar memastikan seluruh area padding menjadi area aktif yang dapat diklik (*clickable target*), meningkatkan user experience."
    }
  },
  {
    id: 'css-dropdowns',
    title: 'CSS Dropdowns',
    order: 36,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-purple-700 to-indigo-800 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-purple-150 border border-white/20">CSS UI Components</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Dropdowns: Menu Bertingkat Modern</h1>
    <p class="text-purple-100 text-sm md:text-base leading-relaxed">
      Dropdown menu dibuat murni menggunakan kombinasi <code>position: relative</code> pada kontainer, <code>position: absolute</code> pada menu tersembunyi, dan dipicu oleh pseudo-class <code>:hover</code>.
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Anatomi Kode CSS Dropdown</h2>
    <div class="space-y-3 text-xs">
      <div class="p-3.5 bg-slate-50 dark:bg-slate-900 rounded-xl font-mono">
        <span class="text-purple-600 font-bold">1. Kontainer Pembungkus:</span> <code>position: relative; display: inline-block;</code>
      </div>
      <div class="p-3.5 bg-slate-50 dark:bg-slate-900 rounded-xl font-mono">
        <span class="text-purple-600 font-bold">2. Menu Dropdown:</span> <code>position: absolute; display: none; z-index: 10;</code>
      </div>
      <div class="p-3.5 bg-slate-50 dark:bg-slate-900 rounded-xl font-mono">
        <span class="text-emerald-600 font-bold">3. Pemicu Hover:</span> <code>.dropdown:hover .dropdown-content { display: block; }</code>
      </div>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 border border-purple-200 dark:border-purple-900/40 rounded-2xl">
    <h4 class="text-purple-900 dark:text-purple-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-purple-800 dark:text-purple-400 text-xs leading-relaxed">
      Di Live Editor, arahkan kursor mouse ke tombol "Pilih Kategori" untuk menguji menu dropdown melayang dengan bayangan halus.
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 40px; background: #f8fafc; }
    
    /* 1. Pembungkus Dropdown */
    .dropdown {
      position: relative;
      display: inline-block;
    }
    
    /* Tombol Utama */
    .dropbtn {
      background-color: #6366f1;
      color: white;
      padding: 12px 20px;
      font-size: 14px;
      font-weight: bold;
      border: none;
      border-radius: 10px;
      cursor: pointer;
    }

    /* 2. Isi Menu Tersembunyi */
    .dropdown-menu {
      display: none;
      position: absolute;
      top: 100%; left: 0;
      background-color: white;
      min-width: 180px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.12);
      border-radius: 12px;
      border: 1px solid #e2e8f0;
      z-index: 100;
      overflow: hidden;
      margin-top: 6px;
    }
    .dropdown-menu a {
      color: #334155;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      font-size: 13px;
      transition: background 0.2s;
    }
    .dropdown-menu a:hover {
      background-color: #f1f5f9;
      color: #6366f1;
      font-weight: bold;
    }

    /* 3. Tampilkan saat Hover */
    .dropdown:hover .dropdown-menu {
      display: block;
    }
  </style>
</head>
<body>

  <div class="dropdown">
    <button class="dropbtn">Pilih Kategori Kursus ▾</button>
    <div class="dropdown-menu">
      <a href="#">Frontend Web</a>
      <a href="#">Backend Node.js</a>
      <a href="#">Database PostgreSQL</a>
      <a href="#">UI/UX Design</a>
    </div>
  </div>

</body>
</html>`,
    quiz: {
      question: "Kombinasi selector dan pseudo-class apa yang digunakan untuk menampilkan menu dropdown ketika kursor diarahkan ke kontainer?",
      options: [
        ".dropdown:click .dropdown-content { display: block; }",
        ".dropdown:hover .dropdown-content { display: block; }",
        ".dropdown-content:active { opacity: 1; }",
        ".dropdown:focus { visibility: hidden; }"
      ],
      correctIndex: 1,
      explanation: "Dengan '.dropdown:hover .dropdown-content { display: block; }', ketika mouse berada di atas elemen .dropdown, menu anak .dropdown-content otomatis berubah dari display: none menjadi display: block."
    }
  },
  {
    id: 'css-image-gallery',
    title: 'CSS Image Gallery',
    order: 37,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-emerald-600 to-teal-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-emerald-150 border border-white/20">CSS Gallery</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Image Gallery: Galeri Foto Responsif</h1>
    <p class="text-emerald-100 text-sm md:text-base leading-relaxed">
      Membangun galeri foto modern yang responsif dengan kartu bergaya Polaroid, bayangan halus, dan efek zoom animasi saat di-hover.
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Komponen Galeri Foto Modern</h2>
    <div class="space-y-3 text-xs">
      <div class="p-3.5 bg-slate-50 dark:bg-slate-900 rounded-xl">
        <strong class="text-emerald-600">1. Grid Responsif:</strong> Menggunakan <code>display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;</code>
      </div>
      <div class="p-3.5 bg-slate-50 dark:bg-slate-900 rounded-xl">
        <strong class="text-emerald-600">2. Rasio Gambar Sempurna:</strong> <code>object-fit: cover; width: 100%; height: 160px;</code>
      </div>
      <div class="p-3.5 bg-slate-50 dark:bg-slate-900 rounded-xl">
        <strong class="text-emerald-600">3. Efek Hover Zoom:</strong> <code>transform: scale(1.04); transition: 0.3s;</code>
      </div>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border border-emerald-200 dark:border-emerald-900/40 rounded-2xl">
    <h4 class="text-emerald-900 dark:text-emerald-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-emerald-800 dark:text-emerald-400 text-xs leading-relaxed">
      Di Live Editor, tambahkan foto ke-4 pada galeri dan amati bagaimana layout grid otomatis menyesuaikan ukuran kartu secara proporsional.
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #f8fafc; padding: 25px; }
    
    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 20px;
    }
    .gallery-card {
      background: white;
      border-radius: 14px;
      overflow: hidden;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.06);
      border: 1px solid #e2e8f0;
      transition: all 0.3s;
    }
    .gallery-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px -5px rgba(0,0,0,0.15);
    }
    .gallery-card img {
      width: 100%;
      height: 130px;
      object-fit: cover;
      display: block;
    }
    .gallery-desc {
      padding: 12px;
      text-align: center;
      font-size: 13px;
      font-weight: bold;
      color: #334155;
    }
  </style>
</head>
<body>

  <h3>Galeri Foto Responsif:</h3>
  <div class="gallery-grid">
    <div class="gallery-card">
      <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&q=80" alt="Pantai">
      <div class="gallery-desc">Pantai Tropis</div>
    </div>
    <div class="gallery-card">
      <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=300&q=80" alt="Gunung">
      <div class="gallery-desc">Gunung Bintang</div>
    </div>
    <div class="gallery-card">
      <img src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=300&q=80" alt="Hutan">
      <div class="gallery-desc">Hutan Pinus</div>
    </div>
  </div>

</body>
</html>`,
    quiz: {
      question: "Properti CSS apa yang digunakan agar gambar di dalam kartu galeri tetap mempertahankan aspek rasionya tanpa gepeng saat dipaksa memiliki height tertentu?",
      options: [
        "image-style: fit;",
        "object-fit: cover;",
        "background-size: full;",
        "img-ratio: maintain;"
      ],
      correctIndex: 1,
      explanation: "'object-fit: cover;' memastikan gambar mengisi penuh dimensi kotak wadahnya secara proporsional dan terpotong rapi tanpa merusak aspek rasio gambar."
    }
  }
];

async function run() {
  const modId = 'ba1383a2-219d-44ab-bf63-804d5a0f0902';
  console.log('🚀 Populating CSS Batch 4 lessons (26-37) for module:', modId);

  // 1. Get Chapter ID for "CSS Tutorial"
  const chRes = await pool.query(`SELECT id, title FROM "Chapter" WHERE "moduleId" = $1 AND title = 'CSS Tutorial' LIMIT 1`, [modId]);
  if (chRes.rowCount === 0) {
    throw new Error('Chapter CSS Tutorial not found!');
  }
  const chapterId = chRes.rows[0].id;
  console.log(`📌 Using Chapter: ${chRes.rows[0].title} (${chapterId})`);

  // 2. Insert or update batch 4 lessons
  for (const l of batch4Lessons) {
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

  console.log('\n🎉 ALL 12 CSS BATCH 4 LESSONS (26-37) SUCCESSFULLY INSERTED/UPDATED!');
  await pool.end();
}

run().catch(console.error);
