const { Pool } = require('pg');
require('dotenv').config({ path: 'c:/xampp/htdocs/Learning Management System/backend/.env' });
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const cssLessons = [
  {
    id: 'css-home',
    title: 'CSS HOME',
    order: 1,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-blue-150 border border-white/20">CSS Tutorial</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS HOME: Selamat Datang di Dunia Desain Web</h1>
    <p class="text-blue-100 text-sm md:text-base leading-relaxed">
      CSS (Cascading Style Sheets) adalah bahasa desain standar dunia yang digunakan untuk mempercantik, menata tata letak, dan menghidupkan seluruh halaman web yang dibuat dengan HTML.
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white flex items-center gap-2">
      <span class="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 flex items-center justify-center font-bold text-sm">1</span>
      Mengapa Kita Membutuhkan CSS?
    </h2>
    <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
      Jika dianalogikan dengan pembangunan rumah:
    </p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
      <div class="p-4 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900/40 rounded-2xl">
        <h4 class="font-extrabold text-orange-900 dark:text-orange-300 text-sm mb-1">🏗️ HTML</h4>
        <p class="text-xs text-orange-800 dark:text-orange-400">Pondasi, batu bata, dan tiang bangunan (struktur rangka konten).</p>
      </div>
      <div class="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40 rounded-2xl">
        <h4 class="font-extrabold text-blue-900 dark:text-blue-300 text-sm mb-1">🎨 CSS</h4>
        <p class="text-xs text-blue-800 dark:text-blue-400">Cat dinding, wallpaper, pencahayaan, dekorasi, dan tata letak interior ruangan.</p>
      </div>
      <div class="p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 rounded-2xl">
        <h4 class="font-extrabold text-amber-900 dark:text-amber-300 text-sm mb-1">⚡ JavaScript</h4>
        <p class="text-xs text-amber-800 dark:text-amber-400">Sistem kelistrikan otomatis, pintu sensor pintar, dan interaktivitas.</p>
      </div>
    </div>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white flex items-center gap-2">
      <span class="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 flex items-center justify-center font-bold text-sm">2</span>
      Bagaimana Browser Membaca CSS?
    </h2>
    <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
      Ketika membuka halaman website, browser Anda menjalankan tahapan rendering berikut secara instan:
    </p>
    <ol class="list-decimal list-inside space-y-2 text-xs md:text-sm text-slate-600 dark:text-slate-300 font-medium">
      <li><strong>Membaca HTML (Parsing HTML):</strong> Membangun pohon struktur elemen yang disebut <code>DOM (Document Object Model)</code>.</li>
      <li><strong>Membaca CSS (Parsing CSS):</strong> Mengonversi aturan style menjadi <code>CSSOM (CSS Object Model)</code>.</li>
      <li><strong>Render Tree:</strong> Menggabungkan DOM dan CSSOM untuk menentukan elemen mana yang tampil dan aturan gayanya.</li>
      <li><strong>Layout (Reflow):</strong> Menghitung posisi dan ukuran setiap kotak (*box*) di layar.</li>
      <li><strong>Paint (Repaint):</strong> Mewarnai piksel, border, bayangan, dan teks sehingga tampil sempurna di layar Anda.</li>
    </ol>
  </div>

  <div class="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-500 p-5 rounded-r-2xl">
    <h4 class="text-emerald-900 dark:text-emerald-300 font-black text-sm flex items-center gap-2 mb-1">
      💡 Tips Belajar di LMS Ini:
    </h4>
    <p class="text-emerald-800 dark:text-emerald-400 text-xs leading-relaxed">
      Gunakan panel <strong>Live Code Editor</strong> di sebelah kanan (atau di bawah) untuk langsung mencoba mengubah warna, ukuran huruf, dan padding. Perubahan akan langsung tercermin secara instan di layar pratinjau!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: #f0f4f8;
      padding: 30px;
      display: flex;
      justify-content: center;
    }
    .card {
      background: white;
      padding: 30px;
      border-radius: 20px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.08);
      max-width: 400px;
      text-align: center;
      border: 2px solid #e2e8f0;
    }
    h1 {
      color: #2563eb;
      font-size: 24px;
      margin-bottom: 10px;
    }
    p {
      color: #64748b;
      font-size: 14px;
      line-height: 1.6;
    }
    .badge {
      display: inline-block;
      background: #dbeafe;
      color: #1e40af;
      font-size: 12px;
      font-weight: bold;
      padding: 4px 12px;
      border-radius: 50px;
      margin-bottom: 15px;
    }
  </style>
</head>
<body>

  <div class="card">
    <span class="badge">Selamat Datang</span>
    <h1>Halo CSS!</h1>
    <p>Ini adalah tampilan halaman web yang telah dipercantik menggunakan aturan CSS murni. Desain menjadi bersih, modern, dan nyaman dibaca.</p>
  </div>

</body>
</html>`,
    quiz: {
      question: "Apa fungsi utama dari CSS (Cascading Style Sheets) dalam pengembangan web?",
      options: [
        "Menyimpan data user ke dalam database server",
        "Mengatur tata letak visual, warna, font, dan tampilan estetika halaman web",
        "Menjalankan query SQL untuk manipulasi tabel",
        "Mengirim email notifikasi secara otomatis"
      ],
      correctIndex: 1,
      explanation: "CSS bertanggung jawab penuh atas lapisan presentasi (tampilan visual, warna, tipografi, dan layout) dari sebuah halaman web."
    }
  },
  {
    id: 'css-intro',
    title: 'CSS Introduction',
    order: 2,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-indigo-600 to-purple-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-indigo-150 border border-white/20">CSS Fundamentals</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Introduction: Pengenalan Lengkap</h1>
    <p class="text-indigo-100 text-sm md:text-base leading-relaxed">
      Memahami definisi, sejarah, filosofi pemisahan konten & tampilan, serta mengapa CSS adalah pilar utama internet modern.
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white flex items-center gap-2">
      <span class="w-8 h-8 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 flex items-center justify-center font-bold text-sm">1</span>
      Apa itu CSS?
    </h2>
    <ul class="space-y-2 text-sm text-slate-600 dark:text-slate-300">
      <li>• <strong>CSS</strong> singkatan dari <em>Cascading Style Sheets</em>.</li>
      <li>• Diciptakan oleh <strong>Håkon Wium Lie</strong> pada 10 Oktober 1994 saat bekerja di CERN bersama Tim Berners-Lee.</li>
      <li>• CSS mendeskripsikan bagaimana elemen-elemen HTML harus ditampilkan di berbagai media layar (komputer desktop, tablet, smartphone, hingga dokumen cetak).</li>
      <li>• CSS menghemat banyak waktu kerja developer karena satu file stylesheet dapat mengontrol tampilan ribuan halaman website sekaligus!</li>
    </ul>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white flex items-center gap-2">
      <span class="w-8 h-8 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 flex items-center justify-center font-bold text-sm">2</span>
      Masalah Besar yang Diselesaikan oleh CSS
    </h2>
    <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
      Pada awal lahirnya HTML (HTML 1.0 & 2.0), tag HTML hanya dimaksudkan untuk mendefinisikan konten teks seperti <code>&lt;h1&gt;</code> (heading) dan <code>&lt;p&gt;</code> (paragraf).
    </p>
    <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
      Ketika website semakin populer, browser mulai menambahkan tag styling seperti <code>&lt;font color="red"&gt;</code> atau atribut <code>bgcolor="blue"</code>. Hal ini menciptakan mimpi buruk bagi developer: jika sebuah website memiliki 100 halaman dan ingin mengubah warna font, developer harus mengedit ratusan tag font di setiap file secara manual!
    </p>
    <div class="p-4 bg-slate-100 dark:bg-slate-900 rounded-xl text-xs font-mono text-slate-700 dark:text-slate-300">
      W3C kemudian merilis standar <strong>CSS</strong> untuk memisahkan struktur isi dokumen (HTML) dari tata letak desain (CSS).
    </div>
  </div>

  <div class="bg-indigo-50 dark:bg-indigo-950/20 border-l-4 border-indigo-500 p-5 rounded-r-2xl">
    <h4 class="text-indigo-900 dark:text-indigo-300 font-black text-sm mb-1">
      🌟 Konsep Penting: Arti Kata "Cascading"
    </h4>
    <p class="text-indigo-800 dark:text-indigo-400 text-xs leading-relaxed">
      Kata <em>"Cascading"</em> (bertingkat / mengalir seperti air terjun) berarti jika ada beberapa aturan style yang menargetkan elemen yang sama, browser akan menggunakan aturan prioritas tertinggi berdasarkan urutan spesifisitas (*specificity*) dan posisi urutan kode paling akhir.
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* CSS Style Sheet */
    body {
      background-color: #0f172a;
      color: #f8fafc;
      font-family: Arial, sans-serif;
      padding: 40px;
    }
    .header-box {
      border-bottom: 2px solid #38bdf8;
      padding-bottom: 10px;
      margin-bottom: 20px;
    }
    h1 {
      color: #38bdf8;
      margin: 0;
    }
    p {
      color: #94a3b8;
      line-height: 1.6;
    }
    .highlight {
      color: #f43f5e;
      font-weight: bold;
    }
  </style>
</head>
<body>

  <div class="header-box">
    <h1>Pengenalan CSS</h1>
  </div>
  <p>CSS membuat konten HTML menjadi <span class="highlight">menarik</span> dan mudah disesuaikan secara global.</p>

</body>
</html>`,
    quiz: {
      question: "Apa kepanjangan dari singkatan CSS?",
      options: [
        "Creative Style Sheets",
        "Cascading Style Sheets",
        "Computer Style Software",
        "Colorful Standard Syntax"
      ],
      correctIndex: 1,
      explanation: "CSS adalah singkatan dari Cascading Style Sheets."
    }
  },
  {
    id: 'css-syntax',
    title: 'CSS Syntax',
    order: 3,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-cyan-600 to-blue-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-cyan-150 border border-white/20">CSS Rules</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Syntax: Anatomi Aturan CSS</h1>
    <p class="text-cyan-100 text-sm md:text-base leading-relaxed">
      Aturan CSS (*Rule Set*) terdiri dari Selector dan Declaration Block. Pahami bagian-bagiannya dengan jelas agar tidak terjadi kesalahan sintaks.
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Anatomi Rule Set CSS</h2>
    <div class="bg-slate-900 text-slate-100 p-5 rounded-2xl font-mono text-sm overflow-x-auto shadow-inner leading-relaxed">
      <span class="text-amber-400 font-bold">h1</span> <span class="text-slate-400">{</span><br/>
      &nbsp;&nbsp;<span class="text-sky-400">color</span><span class="text-slate-400">:</span> <span class="text-emerald-400">blue</span><span class="text-slate-400">;</span><br/>
      &nbsp;&nbsp;<span class="text-sky-400">font-size</span><span class="text-slate-400">:</span> <span class="text-emerald-400">24px</span><span class="text-slate-400">;</span><br/>
      <span class="text-slate-400">}</span>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
      <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <span class="font-black text-amber-600 dark:text-amber-400">1. Selector (h1)</span>
        <p class="text-slate-600 dark:text-slate-400 mt-1">Menunjuk elemen HTML mana yang ingin Anda beri gaya.</p>
      </div>
      <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <span class="font-black text-slate-700 dark:text-slate-300">2. Declaration Block { ... }</span>
        <p class="text-slate-600 dark:text-slate-400 mt-1">Dikelilingi tanda kurung kurawal, berisi satu atau lebih deklarasi yang dipisahkan titik koma (<code>;</code>).</p>
      </div>
      <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <span class="font-black text-sky-600 dark:text-sky-400">3. Property (color, font-size)</span>
        <p class="text-slate-600 dark:text-slate-400 mt-1">Atribut gaya yang ingin diubah (misal warna, margin, padding, border).</p>
      </div>
      <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <span class="font-black text-emerald-600 dark:text-emerald-400">4. Value (blue, 24px)</span>
        <p class="text-slate-600 dark:text-slate-400 mt-1">Nilai atau konfigurasi yang diberikan kepada properti tersebut.</p>
      </div>
    </div>
  </div>

  <div class="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 p-5 rounded-r-2xl">
    <h4 class="text-amber-900 dark:text-amber-300 font-black text-sm mb-1">
      ⚠️ Aturan Penting Titik Dua (:) dan Titik Koma (;)
    </h4>
    <p class="text-amber-800 dark:text-amber-400 text-xs leading-relaxed">
      • Selalu gunakan <strong>titik dua (:)</strong> untuk memisahkan properti dari nilainya.<br/>
      • Selalu akhiri setiap baris deklarasi dengan <strong>titik koma (;)</strong>. Menghilangkan titik koma adalah kesalahan paling umum yang membuat baris CSS berikutnya gagal dieksekusi browser.
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Sintaks Rule Set CSS */
    p {
      color: #dc2626;
      text-align: center;
      font-size: 18px;
      font-weight: bold;
    }
  </style>
</head>
<body>

  <p>Paragraf ini otomatis berwarna merah, berada di tengah (center), dan berukuran 18px berkat deklarasi CSS!</p>

</body>
</html>`,
    quiz: {
      question: "Di dalam aturan CSS: 'p { color: red; }', bagian manakah yang bertindak sebagai Property?",
      options: [
        "p",
        "color",
        "red",
        "{ color: red; }"
      ],
      correctIndex: 1,
      explanation: "'color' adalah Property, 'p' adalah Selector, dan 'red' adalah Value."
    }
  },
  {
    id: 'css-selectors',
    title: 'CSS Selectors',
    order: 4,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-violet-600 to-indigo-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-violet-150 border border-white/20">CSS Targeting</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Selectors & Grouping</h1>
    <p class="text-violet-100 text-sm md:text-base leading-relaxed">
      CSS Selector digunakan untuk "menemukan" atau memilih elemen HTML yang ingin Anda beri gaya.
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Jenis-Jenis Selector Dasar</h2>

    <div class="space-y-3">
      <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <div class="flex items-center gap-2">
          <span class="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-mono text-xs rounded font-bold">Element Selector</span>
          <code class="text-xs font-bold text-slate-800 dark:text-slate-200">p { ... }</code>
        </div>
        <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Memilih semua elemen berdasarkan nama tag HTML-nya (misal seluruh tag <code>&lt;p&gt;</code> di halaman).</p>
      </div>

      <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <div class="flex items-center gap-2">
          <span class="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 font-mono text-xs rounded font-bold">Class Selector</span>
          <code class="text-xs font-bold text-slate-800 dark:text-slate-200">.kotak-biru { ... }</code>
        </div>
        <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Memilih elemen yang memiliki atribut <code>class</code> tertentu. Ditulis dengan awalan tanda titik (<code>.</code>). Satu class bisa dipakai oleh banyak elemen sekaligus.</p>
      </div>

      <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <div class="flex items-center gap-2">
          <span class="px-2 py-0.5 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 font-mono text-xs rounded font-bold">ID Selector</span>
          <code class="text-xs font-bold text-slate-800 dark:text-slate-200">#navbar-utama { ... }</code>
        </div>
        <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Memilih elemen unik dengan atribut <code>id</code> tertentu. Ditulis dengan awalan tanda pagar (<code>#</code>). Nilai ID harus unik di satu halaman.</p>
      </div>

      <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <div class="flex items-center gap-2">
          <span class="px-2 py-0.5 bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 font-mono text-xs rounded font-bold">Universal Selector</span>
          <code class="text-xs font-bold text-slate-800 dark:text-slate-200">* { margin: 0; }</code>
        </div>
        <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Tanda bintang (<code>*</code>) menargetkan <strong>semua</strong> elemen HTML di seluruh halaman web tanpa terkecuali (biasanya digunakan untuk CSS reset).</p>
      </div>
    </div>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Grouping Selectors (Pengelompokan)</h2>
    <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
      Jika beberapa elemen memiliki aturan style yang sama persis, gunakan tanda koma (<code>,</code>) untuk mengelompokkannya sehingga kode Anda bersih dan tidak berulang (*DRY - Don't Repeat Yourself*):
    </p>
    <div class="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs">
      <span class="text-sky-400">h1</span>, <span class="text-sky-400">h2</span>, <span class="text-sky-400">p</span> {<br/>
      &nbsp;&nbsp;text-align: center;<br/>
      &nbsp;&nbsp;color: #1e293b;<br/>
      }
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border border-amber-200 dark:border-amber-900/40 rounded-2xl">
    <h4 class="text-amber-900 dark:text-amber-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-amber-800 dark:text-amber-400 text-xs leading-relaxed">
      Di Live Editor, buat class baru bernama <code>.btn-success</code> dengan background hijau (<code>#10b981</code>), text putih, dan padding <code>10px 20px</code>, lalu pasang class tersebut pada tag <code>&lt;button&gt;</code>.
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* 1. Element Selector */
    h1 {
      color: #4f46e5;
    }

    /* 2. Class Selector */
    .highlight-card {
      background-color: #f1f5f9;
      border-left: 5px solid #4f46e5;
      padding: 15px;
      margin-bottom: 15px;
      border-radius: 8px;
    }

    /* 3. ID Selector */
    #special-banner {
      background-color: #fef08a;
      color: #854d0e;
      padding: 10px;
      font-weight: bold;
      border-radius: 6px;
    }

    /* 4. Grouping Selector */
    h2, h3 {
      font-family: Arial, sans-serif;
      letter-spacing: -0.5px;
    }
  </style>
</head>
<body>

  <h1>CSS Selectors Demo</h1>

  <div class="highlight-card">
    <h2>Ini adalah elemen dengan Class .highlight-card</h2>
    <p>Class selector sangat fleksibel dan dapat digunakan kembali berkali-kali.</p>
  </div>

  <div id="special-banner">
    ⚠️ ID Selector: Pengumuman Khusus (Elemen Tunggal)
  </div>

</body>
</html>`,
    quiz: {
      question: "Karakter apa yang digunakan sebagai awalan untuk menulis Class Selector di dalam file CSS?",
      options: [
        "Tanda Pagar (#)",
        "Tanda Titik (.)",
        "Tanda Seru (!)",
        "Tanda Bintang (*)"
      ],
      correctIndex: 1,
      explanation: "Class Selector di CSS selalu diawali dengan tanda titik (e.g. .nama-class), sedangkan ID Selector diawali dengan tanda pagar (#nama-id)."
    }
  },
  {
    id: 'css-howto',
    title: 'CSS How To',
    order: 5,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-teal-600 to-emerald-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-teal-150 border border-white/20">CSS Insertion</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS How To: 3 Cara Menyisipkan CSS</h1>
    <p class="text-teal-100 text-sm md:text-base leading-relaxed">
      Ada 3 cara untuk menerapkan CSS ke dokumen HTML: External CSS, Internal CSS, dan Inline Styles.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
    <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
      <div class="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 flex items-center justify-center font-black text-sm">1</div>
      <h3 class="font-black text-slate-800 dark:text-white text-base">External CSS</h3>
      <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
        Ditulis di file terpisah dengan ekstensi <code>.css</code> dan dihubungkan via tag <code>&lt;link&gt;</code> di dalam tag <code>&lt;head&gt;</code>.
      </p>
      <div class="bg-slate-900 p-2.5 rounded-lg text-[11px] font-mono text-slate-200 overflow-x-auto">
        &lt;link rel="stylesheet" href="style.css"&gt;
      </div>
      <span class="inline-block text-[10px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded">Sangat Direkomendasikan ⭐</span>
    </div>

    <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
      <div class="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 flex items-center justify-center font-black text-sm">2</div>
      <h3 class="font-black text-slate-800 dark:text-white text-base">Internal CSS</h3>
      <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
        Ditulis langsung di dalam tag <code>&lt;style&gt;</code> pada bagian <code>&lt;head&gt;</code> dokumen HTML tersebut.
      </p>
      <div class="bg-slate-900 p-2.5 rounded-lg text-[11px] font-mono text-slate-200 overflow-x-auto">
        &lt;style&gt;<br/>
        &nbsp;&nbsp;body { color: red; }<br/>
        &lt;/style&gt;
      </div>
      <span class="inline-block text-[10px] font-bold text-blue-600 bg-blue-50 dark:bg-blue-950/30 px-2 py-0.5 rounded">Cocok untuk 1 halaman tunggal</span>
    </div>

    <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
      <div class="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 flex items-center justify-center font-black text-sm">3</div>
      <h3 class="font-black text-slate-800 dark:text-white text-base">Inline Style</h3>
      <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
        Ditulis langsung di dalam tag HTML menggunakan atribut <code>style="..."</code>.
      </p>
      <div class="bg-slate-900 p-2.5 rounded-lg text-[11px] font-mono text-slate-200 overflow-x-auto">
        &lt;h1 style="color: blue;"&gt;Halo&lt;/h1&gt;
      </div>
      <span class="inline-block text-[10px] font-bold text-amber-600 bg-amber-50 dark:bg-amber-950/30 px-2 py-0.5 rounded">Gunakan hanya jika darurat</span>
    </div>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Cascading Order: Urutan Siapa yang Menang?</h2>
    <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
      Jika suatu elemen ditargetkan oleh beberapa style sekaligus, browser menerapkan prioritas dari urutan terendah ke tertinggi:
    </p>
    <ol class="list-decimal list-inside space-y-1.5 text-xs md:text-sm text-slate-700 dark:text-slate-300 font-medium">
      <li>Default style bawaan browser (*Browser default*)</li>
      <li>External dan Internal style sheets (tergantung mana yang dibaca paling akhir di <code>&lt;head&gt;</code>)</li>
      <li><strong>Inline Style</strong> (memiliki prioritas tertinggi dan akan menimpa style external/internal)</li>
    </ol>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <!-- Metode 2: Internal CSS -->
  <style>
    .box {
      background-color: #e0e7ff;
      border: 2px solid #6366f1;
      padding: 20px;
      border-radius: 12px;
      color: #312e81;
    }
  </style>
</head>
<body>

  <!-- Menggunakan class dari Internal CSS -->
  <div class="box">
    Ini diatur oleh Internal CSS.
  </div>

  <br>

  <!-- Metode 3: Inline Style (Menimpa warna secara lokal) -->
  <div class="box" style="background-color: #fef08a; border-color: #ca8a04; color: #713f12;">
    Ini menggunakan class .box tetapi warnanya ditimpa oleh Inline Style!
  </div>

</body>
</html>`,
    quiz: {
      question: "Metode mana yang memiliki prioritas paling tinggi untuk diterapkan pada elemen jika terjadi konflik aturan warna?",
      options: [
        "Browser default stylesheet",
        "External stylesheet (.css)",
        "Internal stylesheet (<style>)",
        "Inline Style (atribut style='')"
      ],
      correctIndex: 3,
      explanation: "Inline Style memiliki spesifisitas paling tinggi dibanding internal/external style dan akan menimpa deklarasi warna yang sama."
    }
  },
  {
    id: 'css-comments',
    title: 'CSS Comments',
    order: 6,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-slate-700 to-slate-900 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-slate-200 border border-white/20">CSS Documentation</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Comments: Dokumentasi Kode yang Rapi</h1>
    <p class="text-slate-300 text-sm md:text-base leading-relaxed">
      Komentar digunakan untuk menjelaskan kode, memberi catatan pengingat bagi tim developer, atau menonaktifkan kode tertentu saat debugging.
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Sintaks Komentar di CSS</h2>
    <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
      Komentar CSS selalu dimulai dengan <code>/*</code> dan diakhiri dengan <code>*/</code>. Browser akan sepenuhnya mengabaikan teks di dalamnya.
    </p>
    
    <div class="bg-slate-900 text-slate-100 p-5 rounded-2xl font-mono text-sm space-y-2 shadow-inner">
      <div class="text-emerald-400">/* Ini adalah komentar satu baris */</div>
      <div>p {</div>
      <div>&nbsp;&nbsp;color: #2563eb; <span class="text-emerald-400">/* Memberi warna teks biru */</span></div>
      <div>}</div>
      <div class="text-emerald-400 mt-2">
        /* =====================================<br/>
        &nbsp;&nbsp;&nbsp;KOMENTAR MULTI-BARIS: STRUKTUR NAVBAR<br/>
        &nbsp;&nbsp;&nbsp;===================================== */
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40 rounded-2xl">
      <h4 class="font-extrabold text-red-900 dark:text-red-300 text-xs mb-1">❌ Komentar HTML di CSS</h4>
      <p class="text-xs text-red-800 dark:text-red-400">Jangan gunakan <code>&lt;!-- --&gt;</code> di dalam file CSS! Ini adalah error sintaks.</p>
    </div>
    <div class="p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40 rounded-2xl">
      <h4 class="font-extrabold text-red-900 dark:text-red-300 text-xs mb-1">❌ Komentar JS di CSS</h4>
      <p class="text-xs text-red-800 dark:text-red-400">Jangan gunakan garis miring ganda <code>// komentar</code> di file CSS standar.</p>
    </div>
    <div class="p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 rounded-2xl">
      <h4 class="font-extrabold text-emerald-900 dark:text-emerald-300 text-xs mb-1">✅ Standar Resmi CSS</h4>
      <p class="text-xs text-emerald-800 dark:text-emerald-400">Selalu gunakan format <code>/* komentar */</code> di semua skenario CSS.</p>
    </div>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Styling bagian utama judul */
    h1 {
      color: #4338ca;
      font-size: 28px;
    }

    /* 
      Catatan Tim:
      Warna tombol ini disesuaikan dengan tema brand
    */
    .btn {
      background-color: #4338ca;
      color: white;
      padding: 10px 20px;
      border-radius: 8px;
      text-decoration: none;
      display: inline-block;
    }

    /* p { color: red; } */ /* Baris ini sengaja dinonaktifkan sementara */
  </style>
</head>
<body>

  <h1>Contoh Penerapan Komentar CSS</h1>
  <p>Komentar membuat struktur stylesheet Anda sangat mudah dipahami oleh rekan tim developer.</p>
  <a href="#" class="btn">Klik Disini</a>

</body>
</html>`,
    quiz: {
      question: "Bagaimana cara penulisan komentar yang benar di dalam file CSS?",
      options: [
        "// ini komentar",
        "<!-- ini komentar -->",
        "/* ini komentar */",
        "' ini komentar"
      ],
      correctIndex: 2,
      explanation: "Komentar di dalam CSS ditulis di antara tanda /* dan */."
    }
  },
  {
    id: 'css-errors',
    title: 'CSS Errors',
    order: 7,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-rose-600 to-pink-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-rose-150 border border-white/20">CSS Debugging</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Errors: Cara Browser Menangani Error</h1>
    <p class="text-rose-100 text-sm md:text-base leading-relaxed">
      Berbeda dengan bahasa pemrograman lain yang akan *crash*, CSS memiliki sifat toleran (*Fault Tolerance*). Pelajari cara mendeteksi dan memperbaikinya.
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Prinsip Toleransi Error CSS</h2>
    <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
      Jika browser menemukan baris CSS yang salah ketik (*invalid syntax*), browser <strong>tidak akan memunculkan pesan error di layar pengguna</strong>. Sebaliknya, browser akan mengabaikan (*skip*) baris yang rusak tersebut dan langsung melanjutkan ke baris deklarasi berikutnya yang valid.
    </p>

    <div class="space-y-3 pt-2">
      <h3 class="font-bold text-slate-800 dark:text-white text-sm">Kesalahan-Kesalahan Umum yang Sering Terjadi:</h3>
      
      <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <span class="font-black text-rose-600 text-xs uppercase">1. Lupa Titik Koma (Missing Semicolon)</span>
        <div class="font-mono text-xs text-slate-700 dark:text-slate-300 mt-1">
          <code>h1 { color: red <span class="text-rose-500 font-bold">/* tanpa ; */</span> font-size: 20px; }</code>
          <p class="text-slate-500 mt-1">Akibat: Browser mengira <code>red font-size: 20px</code> adalah satu nilai yang tidak valid, sehingga kedua properti gagal diterapkan.</p>
        </div>
      </div>

      <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <span class="font-black text-rose-600 text-xs uppercase">2. Typo Nama Properti / Value</span>
        <div class="font-mono text-xs text-slate-700 dark:text-slate-300 mt-1">
          <code>p { <span class="text-rose-500 line-through">colr</span>: blue; <span class="text-rose-500 line-through">background-colr</span>: yellow; }</code>
          <p class="text-slate-500 mt-1">Akibat: Properti yang salah eja diabaikan oleh browser.</p>
        </div>
      </div>

      <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <span class="font-black text-rose-600 text-xs uppercase">3. Lupa Satuan Unit (Missing Unit)</span>
        <div class="font-mono text-xs text-slate-700 dark:text-slate-300 mt-1">
          <code>div { width: <span class="text-rose-500">200</span>; } /* Salah! Wajib tulis unit: 200px atau 200% */</code>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-5 rounded-r-2xl">
    <h4 class="text-blue-900 dark:text-blue-300 font-black text-sm mb-1">
      🔍 Tips Debugging: Gunakan Inspect Element (F12)
    </h4>
    <p class="text-blue-800 dark:text-blue-400 text-xs leading-relaxed">
      Tekan tombol <strong>F12</strong> pada keyboard Anda di browser, lalu buka tab <strong>Elements > Styles</strong>. Properti CSS yang salah ketik atau ditimpa akan dicoret garis (*strikethrough*) dengan ikon tanda seru kuning oleh browser.
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* CONTOH ERROR YANG DIABAIKAN BROWSER */
    .card {
      background-color: #f8fafc;
      border: 2px solid #cbd5e1;
      border-radius: 12px;
      padding: 20px;
      
      /* Baris error di bawah ini diabaikan browser: */
      warna-teks: merah; 
      
      /* Baris valid di bawah ini tetap berjalan normal: */
      color: #0f172a;
    }
  </style>
</head>
<body>

  <div class="card">
    <h3>Toleransi Error CSS</h3>
    <p>Meskipun ada baris 'warna-teks: merah' yang tidak valid di stylesheet, browser tetap merender box ini dengan rapi tanpa error crash.</p>
  </div>

</body>
</html>`,
    quiz: {
      question: "Apa yang dilakukan oleh browser ketika menemukan baris properti CSS yang salah ketik (misal: 'colr: red;')?",
      options: [
        "Menampilkan layar putih bertuliskan 'Fatal Error'",
        "Mengabaikan baris tersebut dan tetap mengeksekusi baris CSS lainnya yang valid",
        "Menghentikan seluruh proses rendering halaman HTML",
        "Menghapus file CSS secara otomatis"
      ],
      correctIndex: 1,
      explanation: "Browser memiliki sifat Fault Tolerance: properti yang tidak dikenali akan diabaikan tanpa menghentikan rendering elemen lainnya."
    }
  },
  {
    id: 'css-colors',
    title: 'CSS Colors',
    order: 8,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-pink-600 to-rose-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-pink-150 border border-white/20">CSS Color Formats</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Colors: Color Names, RGB, HEX, & HSL</h1>
    <p class="text-pink-100 text-sm md:text-base leading-relaxed">
      Pelajari 4 format penulisan warna di CSS dan kapan harus menggunakan masing-masing format untuk menciptakan estetika desain kelas dunia.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
    <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
      <div class="flex items-center justify-between">
        <h3 class="font-black text-slate-800 dark:text-white text-base">1. Color Names</h3>
        <span class="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 text-xs rounded font-bold">140+ Nama</span>
      </div>
      <p class="text-xs text-slate-600 dark:text-slate-400">Nama warna bawaan HTML/CSS standar.</p>
      <div class="bg-slate-900 p-3 rounded-xl text-xs font-mono text-slate-200">
        color: Tomato;<br/>
        background-color: DodgerBlue;
      </div>
    </div>

    <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
      <div class="flex items-center justify-between">
        <h3 class="font-black text-slate-800 dark:text-white text-base">2. HEX (Hexadecimal)</h3>
        <span class="px-2 py-0.5 bg-blue-100 dark:bg-blue-950 text-blue-600 text-xs rounded font-bold">#RRGGBB</span>
      </div>
      <p class="text-xs text-slate-600 dark:text-slate-400">Kombinasi 6 digit heksadesimal (0-9, A-F).</p>
      <div class="bg-slate-900 p-3 rounded-xl text-xs font-mono text-slate-200">
        color: #ff6347; /* Merah Tomat */<br/>
        color: #ffffff; /* Putih Bersih */
      </div>
    </div>

    <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
      <div class="flex items-center justify-between">
        <h3 class="font-black text-slate-800 dark:text-white text-base">3. RGB & RGBA</h3>
        <span class="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 text-xs rounded font-bold">Red, Green, Blue</span>
      </div>
      <p class="text-xs text-slate-600 dark:text-slate-400">Intensitas warna 0-255. Huruf <strong>A</strong> adalah Alpha (Transparansi 0.0 - 1.0).</p>
      <div class="bg-slate-900 p-3 rounded-xl text-xs font-mono text-slate-200">
        color: rgb(255, 99, 71);<br/>
        background: rgba(0, 0, 0, 0.5); /* Hitam 50% transparan */
      </div>
    </div>

    <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
      <div class="flex items-center justify-between">
        <h3 class="font-black text-slate-800 dark:text-white text-base">4. HSL & HSLA</h3>
        <span class="px-2 py-0.5 bg-purple-100 dark:bg-purple-950 text-purple-600 text-xs rounded font-bold">Hue, Saturation, Lightness</span>
      </div>
      <p class="text-xs text-slate-600 dark:text-slate-400">
        <strong>Hue</strong> (derajat 0-360), <strong>Saturation</strong> (0%-100%), <strong>Lightness</strong> (0%=hitam, 100%=putih).
      </p>
      <div class="bg-slate-900 p-3 rounded-xl text-xs font-mono text-slate-200">
        color: hsl(9, 100%, 64%);<br/>
        color: hsla(9, 100%, 64%, 0.8);
      </div>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-950/20 dark:to-purple-950/20 border border-pink-200 dark:border-pink-900/40 rounded-2xl">
    <h4 class="text-pink-900 dark:text-pink-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-pink-800 dark:text-pink-400 text-xs leading-relaxed">
      Ubah background box di Live Editor menggunakan format <code>rgba(37, 99, 235, 0.15)</code> untuk menghasilkan efek latar biru lembut transparan!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    .color-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
      font-family: Arial, sans-serif;
    }
    .box {
      padding: 20px;
      border-radius: 12px;
      color: white;
      font-weight: bold;
      text-align: center;
    }
    .named { background-color: DodgerBlue; }
    .hex { background-color: #10b981; }
    .rgb { background-color: rgb(239, 68, 68); }
    .hsl { background-color: hsl(270, 70%, 55%); }
    .rgba-demo {
      grid-column: span 2;
      background-color: rgba(15, 23, 42, 0.1);
      color: #0f172a;
      border: 2px dashed #94a3b8;
    }
  </style>
</head>
<body>

  <div class="color-grid">
    <div class="box named">Color Name<br><small>DodgerBlue</small></div>
    <div class="box hex">HEX Code<br><small>#10b981</small></div>
    <div class="box rgb">RGB Code<br><small>rgb(239, 68, 68)</small></div>
    <div class="box hsl">HSL Code<br><small>hsl(270, 70%, 55%)</small></div>
    <div class="box rgba-demo">RGBA Transparan: rgba(15, 23, 42, 0.1)</div>
  </div>

</body>
</html>`,
    quiz: {
      question: "Nilai Alpha pada format RGBA 'rgba(255, 0, 0, 0.5)' mengontrol apa?",
      options: [
        "Tingkat ketebalan font teks",
        "Tingkat kecerahan warna merah",
        "Tingkat transparansi (opacity) sebesar 50%",
        "Ukuran radius sudut border"
      ],
      correctIndex: 2,
      explanation: "Nilai Alpha (0.0 sampai 1.0) mengatur tingkat transparansi (opacity) elemen, di mana 0.5 adalah 50% transparan."
    }
  },
  {
    id: 'css-backgrounds',
    title: 'CSS Backgrounds',
    order: 9,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-amber-600 to-orange-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-amber-150 border border-white/20">CSS Visuals</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Backgrounds: Warna, Gambar, & Efek</h1>
    <p class="text-amber-100 text-sm md:text-base leading-relaxed">
      Pelajari properti background CSS lengkap untuk membangun hero section, banner menarik, dan kartu antarmuka elegan.
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Properti Utama CSS Background</h2>

    <div class="space-y-3">
      <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <code class="text-xs font-bold text-amber-600 dark:text-amber-400">background-color</code>
        <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Mengatur warna latar belakang elemen (misal: <code>background-color: #f8fafc;</code>).</p>
      </div>

      <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <code class="text-xs font-bold text-amber-600 dark:text-amber-400">background-image: url('gambar.jpg')</code>
        <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Menampilkan gambar sebagai latar belakang.</p>
      </div>

      <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <code class="text-xs font-bold text-amber-600 dark:text-amber-400">background-repeat: no-repeat | repeat-x | repeat-y</code>
        <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Secara default, gambar latar akan diulang terus (*tiling*). Gunakan <code>no-repeat</code> agar gambar hanya tampil satu kali.</p>
      </div>

      <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <code class="text-xs font-bold text-amber-600 dark:text-amber-400">background-size: cover | contain | 100%</code>
        <p class="text-xs text-slate-600 dark:text-slate-400 mt-1"><strong>cover</strong>: Memperbesar gambar agar menutupi seluruh area kotak secara proporsional. <strong>contain</strong>: Menampilkan seluruh gambar utuh tanpa terpotong.</p>
      </div>

      <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <code class="text-xs font-bold text-amber-600 dark:text-amber-400">background-position: center | top right | 50% 50%</code>
        <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Mengatur posisi titik awal peletakan gambar di dalam kontainer.</p>
      </div>

      <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <code class="text-xs font-bold text-amber-600 dark:text-amber-400">background-attachment: scroll | fixed</code>
        <p class="text-xs text-slate-600 dark:text-slate-400 mt-1"><strong>fixed</strong>: Gambar latar tetap diam saat halaman di-scroll (menciptakan efek parallax klasik).</p>
      </div>
    </div>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Background Shorthand (Satu Baris Ringkas)</h2>
    <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
      Anda dapat menggabungkan semua properti background dalam satu baris dengan urutan:
    </p>
    <div class="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs overflow-x-auto">
      background: #0f172a url('hero.jpg') no-repeat center center / cover fixed;
    </div>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    .hero-banner {
      /* Background Shorthand dengan Linear Gradient Overlay */
      background: linear-gradient(135deg, rgba(30, 58, 138, 0.85), rgba(88, 28, 135, 0.85)),
                  url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80') center/cover no-repeat;
      padding: 50px 30px;
      border-radius: 24px;
      color: white;
      text-align: center;
      font-family: Arial, sans-serif;
      box-shadow: 0 20px 35px rgba(0,0,0,0.2);
    }
    .hero-banner h1 {
      font-size: 28px;
      margin-bottom: 10px;
    }
    .hero-banner p {
      font-size: 15px;
      color: #e2e8f0;
      max-width: 500px;
      margin: 0 auto;
    }
  </style>
</head>
<body>

  <div class="hero-banner">
    <h1>Kuasai Desain Web Modern</h1>
    <p>Kombinasi gambar background dengan linear-gradient overlay menghasilkan kontras teks yang sempurna dan profesional.</p>
  </div>

</body>
</html>`,
    quiz: {
      question: "Nilai apa pada 'background-size' yang membuat gambar otomatis menyesuaikan ukuran agar menutupi seluruh area kotak elemen tanpa merusak rasio aspek?",
      options: [
        "contain",
        "cover",
        "stretch",
        "auto-fill"
      ],
      correctIndex: 1,
      explanation: "'background-size: cover;' akan memperbesar dan memotong gambar secara proporsional agar seluruh area elemen terisi penuh."
    }
  },
  {
    id: 'css-borders',
    title: 'CSS Borders',
    order: 10,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-emerald-600 to-teal-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-emerald-150 border border-white/20">CSS Boundaries</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Borders & Rounded Corners</h1>
    <p class="text-emerald-100 text-sm md:text-base leading-relaxed">
      Properti border menentukan garis batas, ketebalan, gaya garis, warna, dan kebulatan sudut elemen (*border-radius*).
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
    <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
      <h3 class="font-black text-slate-800 dark:text-white text-base">Gaya Garis (border-style)</h3>
      <p class="text-xs text-slate-600 dark:text-slate-400">Wajib ditentukan agar border terlihat!</p>
      <div class="space-y-2 text-xs font-mono">
        <div class="p-2 border border-slate-400 rounded">solid (garis lurus biasa)</div>
        <div class="p-2 border-2 border-dashed border-slate-400 rounded">dashed (garis putus-putus)</div>
        <div class="p-2 border-2 border-dotted border-slate-400 rounded">dotted (titik-titik)</div>
        <div class="p-2 border-4 border-double border-slate-400 rounded">double (garis ganda)</div>
      </div>
    </div>

    <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
      <h3 class="font-black text-slate-800 dark:text-white text-base">Border Shorthand</h3>
      <p class="text-xs text-slate-600 dark:text-slate-400">Urutan penulisan 3-in-1: <strong>width style color</strong></p>
      <div class="bg-slate-900 p-3 rounded-xl text-xs font-mono text-slate-200">
        border: 2px solid #3b82f6;<br/>
        border-top: 4px solid #ef4444;<br/>
        border-bottom: 1px dashed #cbd5e1;
      </div>
      <h4 class="font-bold text-slate-800 dark:text-white text-xs mt-3">Sudut Membulat (border-radius):</h4>
      <div class="bg-slate-900 p-3 rounded-xl text-xs font-mono text-slate-200">
        border-radius: 12px; /* Sudut halus */<br/>
        border-radius: 50%;  /* Lingkaran sempurna */
      </div>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border border-emerald-200 dark:border-emerald-900/40 rounded-2xl">
    <h4 class="text-emerald-900 dark:text-emerald-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-emerald-800 dark:text-emerald-400 text-xs leading-relaxed">
      Di Live Editor, buat avatar bulat sempurna dengan menambahkan <code>border-radius: 50%;</code> dan border <code>4px solid #10b981</code> pada gambar profil!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    .card-container {
      display: flex;
      gap: 15px;
      font-family: Arial, sans-serif;
    }
    .box-solid {
      border: 3px solid #3b82f6;
      border-radius: 16px;
      padding: 20px;
      background: #eff6ff;
    }
    .box-dashed {
      border: 3px dashed #8b5cf6;
      border-radius: 16px;
      padding: 20px;
      background: #f5f3ff;
    }
    .avatar {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      border: 4px solid #10b981;
      display: block;
      margin-bottom: 10px;
    }
  </style>
</head>
<body>

  <div class="card-container">
    <div class="box-solid">
      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" class="avatar" alt="Avatar">
      <h4>Border Solid & Radius</h4>
      <p>Sudut membulat 16px.</p>
    </div>

    <div class="box-dashed">
      <h4>Border Dashed</h4>
      <p>Garis putus-putus ungu.</p>
    </div>
  </div>

</body>
</html>`,
    quiz: {
      question: "Manakah sintaks penulisan Border Shorthand yang paling tepat dan valid?",
      options: [
        "border: 2px solid #2563eb;",
        "border: solid 2px;",
        "border: #2563eb 2px;",
        "border-style-color: 2px #2563eb;"
      ],
      correctIndex: 0,
      explanation: "Shorthand border ditulis dengan urutan: [border-width] [border-style] [border-color], contohnya: 'border: 2px solid #2563eb;'."
    }
  },
  {
    id: 'css-margins',
    title: 'CSS Margins',
    order: 11,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-purple-600 to-indigo-800 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-purple-150 border border-white/20">CSS Spacing</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Margins & Margin Collapse</h1>
    <p class="text-purple-100 text-sm md:text-base leading-relaxed">
      Margin adalah ruang kosong di **luar** border elemen yang digunakan untuk memberi jarak antar elemen di halaman web.
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Margin Shorthand (Format Nilai)</h2>
    <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
      Anda dapat menentukan jarak 4 sisi (Atas, Kanan, Bawah, Kiri) dengan notasi ringkas searah jarum jam:
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
      <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 font-mono">
        <span class="font-bold text-indigo-600">4 Nilai:</span> margin: 10px 20px 30px 40px;<br/>
        <span class="text-slate-400 font-sans mt-1 block">Top: 10px, Right: 20px, Bottom: 30px, Left: 40px</span>
      </div>

      <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 font-mono">
        <span class="font-bold text-indigo-600">2 Nilai:</span> margin: 20px 40px;<br/>
        <span class="text-slate-400 font-sans mt-1 block">Top/Bottom: 20px, Left/Right: 40px</span>
      </div>

      <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 font-mono">
        <span class="font-bold text-indigo-600">1 Nilai:</span> margin: 25px;<br/>
        <span class="text-slate-400 font-sans mt-1 block">Semua 4 sisi mendapat jarak 25px</span>
      </div>

      <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 font-mono">
        <span class="font-bold text-emerald-600">Trik Center:</span> margin: 0 auto;<br/>
        <span class="text-slate-400 font-sans mt-1 block">Menengahkan elemen block secara horizontal di tengah layar!</span>
      </div>
    </div>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Fenomena "Margin Collapse"</h2>
    <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
      Ketika dua elemen block vertikal berdampingan (misal elemen atas memiliki <code>margin-bottom: 30px</code> dan elemen bawah memiliki <code>margin-top: 20px</code>):
    </p>
    <div class="p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 rounded-xl text-xs text-amber-900 dark:text-amber-300">
      Jarak total keduanya <strong>BUKAN 50px</strong>, melainkan akan digabungkan (*collapsed*) menjadi nilai margin terbesar yaitu <strong>30px</strong>. Margin collapse hanya terjadi pada sumbu vertikal (atas-bawah), tidak pada horizontal (kiri-kanan).
    </div>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      background: #f8fafc;
      font-family: Arial, sans-serif;
      padding: 20px;
    }
    .container {
      max-width: 500px;
      margin: 0 auto; /* Menengahkan container di layar */
    }
    .card-one {
      background: #dbeafe;
      border: 2px solid #3b82f6;
      padding: 20px;
      border-radius: 12px;
      margin-bottom: 30px; /* Margin bawah 30px */
    }
    .card-two {
      background: #fce7f3;
      border: 2px solid #ec4899;
      padding: 20px;
      border-radius: 12px;
      margin-top: 20px; /* Margin atas 20px (akan collapse menjadi 30px) */
    }
  </style>
</head>
<body>

  <div class="container">
    <div class="card-one">
      <h3>Kotak Pertama</h3>
      <p>Memiliki margin-bottom: 30px.</p>
    </div>

    <div class="card-two">
      <h3>Kotak Kedua</h3>
      <p>Memiliki margin-top: 20px. Jarak antara kedua kotak ini adalah 30px (Margin Collapse).</p>
    </div>
  </div>

</body>
</html>`,
    quiz: {
      question: "Jika elemen A memiliki 'margin-bottom: 40px' dan elemen B di bawahnya memiliki 'margin-top: 25px', berapakah jarak vertikal akhir antara kedua elemen tersebut?",
      options: [
        "65px (40px + 25px)",
        "40px (Margin Collapse ke nilai terbesar)",
        "25px (Margin Collapse ke nilai terkecil)",
        "15px (40px - 25px)"
      ],
      correctIndex: 1,
      explanation: "Karena fenomena Margin Collapse, margin vertikal antara dua elemen block yang berdampingan digabung menjadi nilai margin yang paling besar (40px)."
    }
  }
];

async function run() {
  const modId = 'ba1383a2-219d-44ab-bf63-804d5a0f0902';
  console.log('🚀 Resetting & Populating CSS lessons for module:', modId);

  // 1. Delete all existing lessons for CSS module (and 'css' alias if any)
  const delRes = await pool.query('DELETE FROM "Lesson" WHERE "moduleId" = $1 OR "moduleId" = $2', [modId, 'css']);
  console.log(`🗑️ Deleted ${delRes.rowCount} old CSS lessons.`);

  // 2. Delete old chapters for CSS module
  const delChRes = await pool.query('DELETE FROM "Chapter" WHERE "moduleId" = $1 OR "moduleId" = $2', [modId, 'css']);
  console.log(`🗑️ Deleted ${delChRes.rowCount} old CSS chapters.`);

  // 3. Create fresh Chapter "CSS Tutorial"
  const chRes = await pool.query(`
    INSERT INTO "Chapter" (id, title, "moduleId", "order", "createdAt", "updatedAt")
    VALUES (gen_random_uuid(), 'CSS Tutorial', $1, 1, NOW(), NOW())
    RETURNING id, title
  `, [modId]);
  const chapterId = chRes.rows[0].id;
  console.log(`✅ Created Chapter: ${chRes.rows[0].title} (${chapterId})`);

  // 4. Insert all 11 new comprehensive lessons
  for (const l of cssLessons) {
    const contentJson = {
      theory: l.theory,
      code: l.code,
      quiz: l.quiz
    };

    await pool.query(`
      INSERT INTO "Lesson" (id, title, "moduleId", "chapterId", chapter, type, "order", content, "createdAt", "updatedAt")
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW(), NOW())
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
    console.log(`  ➕ [${l.order}] Inserted Lesson: ${l.title} (${l.id})`);
  }

  console.log('\n🎉 ALL 11 CSS TUTORIAL LESSONS SUCCESSFULLY INSERTED!');
  await pool.end();
}

run().catch(console.error);
