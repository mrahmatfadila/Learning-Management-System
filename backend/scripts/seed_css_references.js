const { Pool } = require('pg');
require('dotenv').config({ path: 'c:/xampp/htdocs/Learning Management System/backend/.env' });

const dbs = [
  'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db',
  'postgresql://postgres:Dil1212@localhost:5432/lms_content_db'
];

const referencesLessons = [
  {
    id: 'css-ref-main',
    title: 'CSS Reference',
    order: 1,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-blue-700 to-indigo-800 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-blue-150 border border-white/20">Encyclopedia</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Reference: Direktori Properti Lengkap (A-Z)</h1>
    <p class="text-blue-100 text-sm md:text-base leading-relaxed">
      Kamus referensi alfabetis seluruh properti CSS modern standar W3C beserta kategori fungsional dan kompatibilitas peramban global.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
      <strong class="text-blue-600 font-bold">1. Box Model & Layout</strong>
      <p class="text-slate-600 dark:text-slate-400"><code>margin</code>, <code>padding</code>, <code>border</code>, <code>display</code>, <code>position</code>, <code>width</code>, <code>height</code>.</p>
    </div>
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
      <strong class="text-indigo-600 font-bold">2. Visual & FX</strong>
      <p class="text-slate-600 dark:text-slate-400"><code>background</code>, <code>color</code>, <code>box-shadow</code>, <code>filter</code>, <code>opacity</code>, <code>backdrop-filter</code>.</p>
    </div>
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
      <strong class="text-purple-600 font-bold">3. Motion & Transforms</strong>
      <p class="text-slate-600 dark:text-slate-400"><code>transform</code>, <code>transition</code>, <code>animation</code>, <code>@keyframes</code>, <code>will-change</code>.</p>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-900/40 rounded-2xl">
    <h4 class="text-blue-900 dark:text-blue-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-blue-800 dark:text-blue-400 text-xs leading-relaxed">
      Di Live Editor, eksplorasi kartu kamus referensi CSS ini!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; background: #0f172a; padding: 30px; color: white; display: flex; justify-content: center; }
    
    .ref-box {
      background: #1e293b;
      border: 1px solid #334155;
      border-radius: 16px;
      padding: 24px;
      max-width: 380px;
    }
    .prop-tag {
      background: #3b82f6;
      color: white;
      padding: 3px 8px;
      border-radius: 6px;
      font-family: monospace;
      font-size: 12px;
    }
  </style>
</head>
<body>

  <div class="ref-box">
    <h3 style="margin-top:0; color:#38bdf8;">📖 Kamus Properti CSS</h3>
    <p style="font-size:13px; color:#94a3b8;"><span class="prop-tag">accent-color</span> : Mengatur warna aksen elemen form seperti checkbox & radio.</p>
    <p style="font-size:13px; color:#94a3b8;"><span class="prop-tag">aspect-ratio</span> : Mengunci rasio dimensi lebar banding tinggi.</p>
  </div>

</body>
</html>`,
    quiz: {
      question: "Organisasi standar internasional mana yang merumuskan dan menerbitkan spesifikasi resmi CSS?",
      options: ["W3C (World Wide Web Consortium)", "IEEE", "ISO", "Google & Apple"],
      correctIndex: 0,
      explanation: "W3C (World Wide Web Consortium) bertanggung jawab memelihara dan menerbitkan spesifikasi resmi standar web termasuk HTML dan CSS."
    }
  },
  {
    id: 'css-ref-selectors',
    title: 'CSS Selectors',
    order: 2,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-violet-600 to-purple-800 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-violet-150 border border-white/20">Targeting Specs</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Selectors Reference: Ringkasan Lengkap</h1>
    <p class="text-violet-100 text-sm md:text-base leading-relaxed">
      Tabel referensi seluruh jenis selector CSS: Element, ID, Class, Universal, Atribut, Pseudo-class, dan Pseudo-element.
    </p>
  </div>

  <div class="space-y-2 text-xs font-mono">
    <div class="p-3 bg-white dark:bg-[#0c0e18] rounded-xl border border-slate-200 dark:border-slate-800 flex justify-between items-center">
      <code class="text-violet-600 font-bold font-sans">#id</code>
      <span class="text-slate-600 dark:text-slate-400 font-sans">Menargetkan elemen dengan atribut id spesifik</span>
    </div>
    <div class="p-3 bg-white dark:bg-[#0c0e18] rounded-xl border border-slate-200 dark:border-slate-800 flex justify-between items-center">
      <code class="text-blue-600 font-bold font-sans">.class</code>
      <span class="text-slate-600 dark:text-slate-400 font-sans">Menargetkan semua elemen dengan atribut class</span>
    </div>
    <div class="p-3 bg-white dark:bg-[#0c0e18] rounded-xl border border-slate-200 dark:border-slate-800 flex justify-between items-center">
      <code class="text-emerald-600 font-bold font-sans">[attr=val]</code>
      <span class="text-slate-600 dark:text-slate-400 font-sans">Menargetkan elemen dengan nilai atribut tertentu</span>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20 border border-violet-200 dark:border-violet-900/40 rounded-2xl">
    <h4 class="text-violet-900 dark:text-violet-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-violet-800 dark:text-violet-400 text-xs leading-relaxed">
      Di Live Editor, uji selector atribut <code>[data-status="active"]</code>!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #f8fafc; padding: 25px; }
    
    /* Attribute Selector */
    div[data-status="active"] {
      background: #dcfce7;
      color: #15803d;
      border: 1px solid #86efac;
      padding: 10px 15px;
      border-radius: 8px;
      font-weight: bold;
    }
  </style>
</head>
<body>

  <div data-status="active">🟢 Status: Akun Pengguna Aktif</div>

</body>
</html>`,
    quiz: {
      question: "Selector manakah yang menargetkan tag <input> yang memiliki type='email'?",
      options: ["input[type='email']", "input:email", "#input-email", ".input-email"],
      correctIndex: 0,
      explanation: "Sintaks selector atribut adalah 'tag[atribut=\"nilai\"]', sehingga 'input[type=\"email\"]' memilih input dengan tipe email."
    }
  },
  {
    id: 'css-ref-combinators',
    title: 'CSS Combinators',
    order: 3,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-indigo-700 to-blue-800 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-indigo-150 border border-white/20">Relationships</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Combinators: Relasi Hierarki Elemen</h1>
    <p class="text-indigo-100 text-sm md:text-base leading-relaxed">
      4 jenis combinator penentu hubungan struktural antar elemen: Keturunan (*Descendant*), Anak Langsung (*Child*), Saudara Dekat (*Adjacent Sibling*), dan Saudara Umum (*General Sibling*).
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
      <strong class="text-indigo-600 font-sans">1. Descendant (spasi)</strong>
      <p class="text-slate-600 dark:text-slate-400 font-sans"><code>div p</code> : Semua &lt;p&gt; di dalam &lt;div&gt;.</p>
    </div>
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
      <strong class="text-blue-600 font-sans">2. Child ( > )</strong>
      <p class="text-slate-600 dark:text-slate-400 font-sans"><code>div > p</code> : Hanya &lt;p&gt; yang anak langsung &lt;div&gt;.</p>
    </div>
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
      <strong class="text-emerald-600 font-sans">3. Adjacent Sibling ( + )</strong>
      <p class="text-slate-600 dark:text-slate-400 font-sans"><code>div + p</code> : &lt;p&gt; persis tepat setelah &lt;div&gt;.</p>
    </div>
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
      <strong class="text-amber-600 font-sans">4. General Sibling ( ~ )</strong>
      <p class="text-slate-600 dark:text-slate-400 font-sans"><code>div ~ p</code> : Semua &lt;p&gt; setelah &lt;div&gt; (satu level).</p>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 border border-indigo-200 dark:border-indigo-900/40 rounded-2xl">
    <h4 class="text-indigo-900 dark:text-indigo-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-indigo-800 dark:text-indigo-400 text-xs leading-relaxed">
      Di Live Editor, amati perbedaan gaya antara anak langsung vs keturunan bertingkat!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #f8fafc; padding: 25px; }
    
    /* Child Combinator */
    .parent > p {
      color: #2563eb;
      font-weight: bold;
    }
  </style>
</head>
<body>

  <div class="parent">
    <p>Saya anak langsung (berwarna biru tebal).</p>
    <div>
      <p>Saya bukan anak langsung (tidak berwarna biru).</p>
    </div>
  </div>

</body>
</html>`,
    quiz: {
      question: "Simbol apakah yang digunakan untuk Child Combinator (menargetkan hanya anak langsung satu tingkat di bawah induk)?",
      options: ["> (tanda lebih besar)", "+ (tanda tambah)", "~ (tanda tilde)", "Spasi kosong"],
      correctIndex: 0,
      explanation: "Karakter '>' adalah child combinator yang hanya menargetkan anak langsung (direct child) dari elemen induk."
    }
  },
  {
    id: 'css-ref-pseudo-classes',
    title: 'CSS Pseudo-classes',
    order: 4,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-emerald-700 to-teal-800 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-emerald-150 border border-white/20">State Modifiers</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Pseudo-classes: Referensi Status Elemen</h1>
    <p class="text-emerald-100 text-sm md:text-base leading-relaxed">
      Pseudo-class (diawali satu titik dua <code>:</code>) menargetkan status interaksi dinamis atau posisi struktural elemen: <code>:hover</code>, <code>:focus</code>, <code>:nth-child()</code>, <code>:is()</code>, <code>:not()</code>.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
      <strong class="text-emerald-600 font-bold">:hover & :focus</strong>
      <p class="text-slate-600 dark:text-slate-400">Saat kursor melayang di atas elemen atau elemen form sedang menerima fokus ketikan.</p>
    </div>
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
      <strong class="text-teal-600 font-bold">:nth-child(even/odd)</strong>
      <p class="text-slate-600 dark:text-slate-400">Menargetkan baris zebra genap/ganjil pada tabel atau daftar berulang.</p>
    </div>
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
      <strong class="text-cyan-600 font-bold">:not(selector)</strong>
      <p class="text-slate-600 dark:text-slate-400">Selector negasi untuk memilih semua elemen kecuali yang cocok dengan kriteria.</p>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border border-emerald-200 dark:border-emerald-900/40 rounded-2xl">
    <h4 class="text-emerald-900 dark:text-emerald-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-emerald-800 dark:text-emerald-400 text-xs leading-relaxed">
      Di Live Editor, uji interaksi <code>:focus-visible</code> dan <code>:checked</code>!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #f8fafc; padding: 25px; }
    
    input:focus {
      outline: 2px solid #059669;
      background: #f0fdf4;
      border-radius: 6px;
      padding: 6px;
    }
  </style>
</head>
<body>

  <label>Klik input di bawah:</label><br><br>
  <input type="text" placeholder="Fokus pada saya...">

</body>
</html>`,
    quiz: {
      question: "Simbol apakah yang mengawali penulisan sebuah Pseudo-class di CSS?",
      options: [": (Satu titik dua)", ":: (Dua titik dua)", "# (Pagar)", ". (Titik)"],
      correctIndex: 0,
      explanation: "Pseudo-class diawali dengan satu tanda titik dua (contoh: :hover, :active), sedangkan Pseudo-element diawali dengan dua titik dua (contoh: ::before, ::after)."
    }
  },
  {
    id: 'css-ref-pseudo-elements',
    title: 'CSS Pseudo-elements',
    order: 5,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-pink-700 to-rose-800 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-pink-150 border border-white/20">Virtual DOM</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Pseudo-elements: Referensi Elemen Semu</h1>
    <p class="text-pink-100 text-sm md:text-base leading-relaxed">
      Pseudo-element (diawali dua titik dua <code>::</code>) digunakan untuk menata bagian tertentu dari elemen tanpa menambah tag HTML baru: <code>::before</code>, <code>::after</code>, <code>::placeholder</code>, <code>::selection</code>.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
      <strong class="text-pink-600 font-sans">::before & ::after</strong>
      <p class="text-slate-600 dark:text-slate-400 font-sans">Menyisipkan konten dekoratif kosmetik sebelum atau sesudah isi elemen (wajib <code>content: "";</code>).</p>
    </div>
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
      <strong class="text-rose-600 font-sans">::selection</strong>
      <p class="text-slate-600 dark:text-slate-400 font-sans">Mengatur warna latar dan teks saat pengguna menyorot (*highlight*) teks dengan kursor mouse.</p>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 border border-pink-200 dark:border-pink-900/40 rounded-2xl">
    <h4 class="text-pink-900 dark:text-pink-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-pink-800 dark:text-pink-400 text-xs leading-relaxed">
      Di Live Editor, blok atau sorot teks menggunakan mouse untuk melihat efek <code>::selection</code> custom!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #0f172a; padding: 30px; color: white; }
    
    /* Custom Text Selection */
    ::selection {
      background: #f43f5e;
      color: #ffffff;
    }
  </style>
</head>
<body>

  <h3>Sorot (Highlight) Kalimat Ini dengan Mouse!</h3>
  <p>Warna seleksi kursor akan otomatis berubah menjadi merah muda mawar yang estetik.</p>

</body>
</html>`,
    quiz: {
      question: "Properti CSS apa yang WAJIB dideklarasikan agar pseudo-element ::before atau ::after dapat tampil di layar?",
      options: ["content: \"\";", "display: flex;", "z-index: 1;", "opacity: 1;"],
      correctIndex: 0,
      explanation: "Tanpa mendeklarasikan properti 'content' (meskipun hanya berupa string kosong content: \"\"), pseudo-element ::before atau ::after tidak akan di-render oleh peramban."
    }
  },
  {
    id: 'css-ref-at-rules',
    title: 'CSS At-rules',
    order: 6,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-amber-600 to-orange-800 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-amber-150 border border-white/20">Directives</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS At-rules: Referensi Direktif (@)</h1>
    <p class="text-amber-100 text-sm md:text-base leading-relaxed">
      At-rule adalah instruksi perintah khusus yang diawali simbol <code>@</code> untuk menginstruksikan bagaimana CSS harus berperilaku.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
    <div class="p-3.5 bg-white dark:bg-[#0c0e18] rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
      <strong class="text-amber-600 font-sans">@media</strong>
      <p class="text-slate-600 dark:text-slate-400 font-sans">Mengatur tata letak responsif berdasarkan lebar layar atau mode cetak.</p>
    </div>
    <div class="p-3.5 bg-white dark:bg-[#0c0e18] rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
      <strong class="text-orange-600 font-sans">@keyframes</strong>
      <p class="text-slate-600 dark:text-slate-400 font-sans">Mendefinisikan langkah-langkah tahapan animasi visual.</p>
    </div>
    <div class="p-3.5 bg-white dark:bg-[#0c0e18] rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
      <strong class="text-rose-600 font-sans">@font-face</strong>
      <p class="text-slate-600 dark:text-slate-400 font-sans">Memuat file font kustom eksternal (WOFF2, TTF).</p>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border border-amber-200 dark:border-amber-900/40 rounded-2xl">
    <h4 class="text-amber-900 dark:text-amber-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-amber-800 dark:text-amber-400 text-xs leading-relaxed">
      Di Live Editor, amati integrasi at-rule <code>@keyframes</code> untuk animasi putaran loading spinner!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #0f172a; padding: 40px; text-align: center; }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    .spinner {
      width: 40px;
      height: 40px;
      border: 4px solid rgba(255,255,255,0.2);
      border-top: 4px solid #f59e0b;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin: auto;
    }
  </style>
</head>
<body>

  <div class="spinner"></div>
  <p style="color:#94a3b8; font-size:13px; margin-top:15px;">Animasi @keyframes Spin</p>

</body>
</html>`,
    quiz: {
      question: "At-rule manakah yang digunakan untuk memuat file font kustom ke dalam website?",
      options: ["@font-face", "@import-font", "@custom-font", "@typography"],
      correctIndex: 0,
      explanation: "'@font-face' adalah aturan direktif standar CSS untuk mendeklarasikan nama dan tautan file font kustom lokal/eksternal."
    }
  },
  {
    id: 'css-ref-functions',
    title: 'CSS Functions',
    order: 7,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-cyan-700 to-blue-800 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-cyan-150 border border-white/20">Calculations</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Functions: Fungsi Matematika & Transformasi</h1>
    <p class="text-cyan-100 text-sm md:text-base leading-relaxed">
      Fungsi bawaan CSS yang menerima argumen untuk menghasilkan nilai dinamis: <code>calc()</code>, <code>clamp()</code>, <code>min()</code>, <code>max()</code>, <code>linear-gradient()</code>, <code>url()</code>, <code>var()</code>.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
    <div class="p-3.5 bg-white dark:bg-[#0c0e18] rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
      <strong class="text-cyan-600 font-sans">calc(100% - 40px)</strong>
      <p class="text-slate-600 dark:text-slate-400 font-sans">Kalkulasi matematis kombinasi unit persentase dan piksel absolut.</p>
    </div>
    <div class="p-3.5 bg-white dark:bg-[#0c0e18] rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
      <strong class="text-blue-600 font-sans">clamp(1rem, 2.5vw, 2rem)</strong>
      <p class="text-slate-600 dark:text-slate-400 font-sans">Ukuran fluida otomatis dengan batas nilai minimum dan maksimum.</p>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border border-cyan-200 dark:border-cyan-900/40 rounded-2xl">
    <h4 class="text-cyan-900 dark:text-cyan-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-cyan-800 dark:text-cyan-400 text-xs leading-relaxed">
      Di Live Editor, uji fungsi kalkulasi <code>calc()</code> pada lebar kartu!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #f8fafc; padding: 20px; }
    
    .full-minus-padding {
      width: calc(100% - 40px);
      background: #0284c7;
      color: white;
      padding: 20px;
      border-radius: 12px;
      text-align: center;
      font-weight: bold;
    }
  </style>
</head>
<body>

  <div class="full-minus-padding">
    calc(100% - 40px) Lebar Dinamis
  </div>

</body>
</html>`,
    quiz: {
      question: "Fungsi CSS mana yang menerima 3 parameter (nilai minimum, nilai ideal, nilai maksimum) untuk membuat ukuran tipografi fluida responsif?",
      options: ["clamp()", "calc()", "fit()", "bound()"],
      correctIndex: 0,
      explanation: "Fungsi clamp(MIN, VAL, MAX) mengunci nilai agar bergerak fleksibel mengikuti VAL namun tidak pernah lebih kecil dari MIN atau lebih besar dari MAX."
    }
  },
  {
    id: 'css-ref-aural',
    title: 'CSS Reference Aural',
    order: 8,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-teal-700 to-emerald-900 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-teal-150 border border-white/20">Speech Media</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Reference Aural: Media Suara & Aksesibilitas</h1>
    <p class="text-teal-100 text-sm md:text-base leading-relaxed">
      Spesifikasi modul audio & *Speech Synthesis* (Aural CSS) yang digunakan oleh screen reader bagi tunanetra untuk mengatur volume, nada suara, dan jeda jeda baca.
    </p>
  </div>

  <div class="p-5 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
    <h3 class="font-bold text-teal-600 text-sm">Properti Speech CSS</h3>
    <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
      Termasuk <code>voice-family</code>, <code>voice-rate</code>, <code>voice-pitch</code>, <code>speak</code>, dan <code>pause</code> yang disesuaikan dalam media query <code>@media speech { ... }</code>.
    </p>
  </div>

  <div class="p-5 bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-950/20 dark:to-emerald-950/20 border border-teal-200 dark:border-teal-900/40 rounded-2xl">
    <h4 class="text-teal-900 dark:text-teal-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-teal-800 dark:text-teal-400 text-xs leading-relaxed">
      Di Live Editor, eksplorasi konfigurasi media query <code>@media speech</code>!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #f8fafc; padding: 25px; }
    
    @media speech {
      h1 {
        voice-rate: fast;
        voice-pitch: high;
      }
    }
  </style>
</head>
<body>

  <h2>Aural / Speech Media CSS</h2>
  <p>Digunakan untuk mengoptimalkan pembacaan artikel oleh perangkat Screen Reader pembantu aksesibilitas.</p>

</body>
</html>`,
    quiz: {
      question: "Media query apa yang digunakan untuk menuliskan aturan gaya khusus pembaca layar (screen reader audio)?",
      options: ["@media speech", "@media audio", "@media sound", "@media mic"],
      correctIndex: 0,
      explanation: "'@media speech' (menggantikan aural di standar modern) menargetkan perangkat sintesis suara dan pembaca layar."
    }
  },
  {
    id: 'css-ref-web-safe-fonts',
    title: 'CSS Web Safe Fonts',
    order: 9,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-indigo-800 to-purple-900 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-indigo-200 border border-white/20">Typography</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Web Safe Fonts: Tipografi Aman Universal</h1>
    <p class="text-indigo-100 text-sm md:text-base leading-relaxed">
      Daftar font bawaan yang terpasang di hampir 100% sistem operasi komputer (Windows, macOS, Linux, Android, iOS) tanpa perlu mengunduh file font eksternal.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
      <strong class="text-indigo-600 font-bold font-sans">Sans-serif</strong>
      <p class="text-slate-600 dark:text-slate-400 font-sans">Arial, Helvetica, Segoe UI, Trebuchet MS, Verdana.</p>
    </div>
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
      <strong class="text-purple-600 font-bold font-serif">Serif</strong>
      <p class="text-slate-600 dark:text-slate-400 font-sans">Times New Roman, Georgia, Garamond.</p>
    </div>
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
      <strong class="text-pink-600 font-bold font-mono">Monospace</strong>
      <p class="text-slate-600 dark:text-slate-400 font-sans">Courier New, Lucida Console, Monaco.</p>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border border-indigo-200 dark:border-indigo-900/40 rounded-2xl">
    <h4 class="text-indigo-900 dark:text-indigo-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-indigo-800 dark:text-indigo-400 text-xs leading-relaxed">
      Di Live Editor, uji perbandingan tampilan font Serif vs Sans-serif!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { background: #f8fafc; padding: 25px; }
    
    .serif-text { font-family: Georgia, 'Times New Roman', serif; font-size: 18px; color: #1e293b; }
    .sans-text { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 16px; color: #475569; }
  </style>
</head>
<body>

  <p class="serif-text">📖 Contoh Font Serif (Georgia) - Elegan untuk artikel panjang.</p>
  <p class="sans-text">💻 Contoh Font Sans-serif (Segoe UI) - Bersih dan modern untuk antarmuka UI.</p>

</body>
</html>`,
    quiz: {
      question: "Mengapa penting mencantumkan font fallback generik (misal: 'sans-serif') di akhir deklarasi font-family?",
      options: [
        "Sebagai cadangan jika font utama tidak tersedia di perangkat pengunjung",
        "Untuk mempercepat loading CSS 100 kali",
        "Wajib menurut aturan hukum peramban",
        "Supaya warna teks otomatis hitam"
      ],
      correctIndex: 0,
      explanation: "Fallback generik (serif, sans-serif, monospace) memastikan sistem menggunakan font bawaan kategori serupa jika font utama gagal dimuat."
    }
  },
  {
    id: 'css-ref-animatable',
    title: 'CSS Animatable',
    order: 10,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-rose-700 to-pink-800 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-rose-150 border border-white/20">Transition Capabilities</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Animatable Properties: Properti yang Dapat Dianimasikan</h1>
    <p class="text-rose-100 text-sm md:text-base leading-relaxed">
      Tidak semua properti CSS dapat diinterpolasi secara halus. Pelajari daftar properti yang mendukung animasi dan transisi bertahap.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
      <strong class="text-emerald-600 font-bold">✅ Animatable (Dapat Dianimasikan)</strong>
      <p class="text-slate-600 dark:text-slate-400"><code>opacity</code>, <code>transform</code>, <code>color</code>, <code>background-color</code>, <code>width</code>, <code>height</code>, <code>border-radius</code>, <code>box-shadow</code>.</p>
    </div>
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
      <strong class="text-rose-600 font-bold">❌ Non-Animatable (Tidak Dapat Dianimasikan)</strong>
      <p class="text-slate-600 dark:text-slate-400"><code>display</code> (misal none ke block), <code>position</code>, <code>font-family</code>, <code>visibility</code> (berubah diskrit).</p>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20 border border-rose-200 dark:border-rose-900/40 rounded-2xl">
    <h4 class="text-rose-900 dark:text-rose-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-rose-800 dark:text-rose-400 text-xs leading-relaxed">
      Di Live Editor, amati transisi mulus pada <code>border-radius</code> dan <code>transform</code> saat hover!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #0f172a; padding: 40px; display: flex; justify-content: center; }
    
    .shape {
      width: 100px;
      height: 100px;
      background: #f43f5e;
      border-radius: 12px;
      transition: all 0.5s ease;
      cursor: pointer;
    }
    .shape:hover {
      border-radius: 50%;
      background: #8b5cf6;
      transform: rotate(180deg) scale(1.15);
    }
  </style>
</head>
<body>

  <div class="shape"></div>

</body>
</html>`,
    quiz: {
      question: "Manakah properti CSS berikut yang TIDAK DAPAT dianimasikan secara halus (non-animatable)?",
      options: ["display", "opacity", "background-color", "transform"],
      correctIndex: 0,
      explanation: "Properti 'display' (seperti dari none ke block) berubah secara instan/diskrit tanpa memiliki nilai perantara sehingga tidak bisa dianimasikan secara halus."
    }
  },
  {
    id: 'css-ref-units',
    title: 'CSS Units',
    order: 11,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-blue-700 to-cyan-800 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-blue-150 border border-white/20">Measurement</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Units: Referensi Satuan Ukuran</h1>
    <p class="text-blue-100 text-sm md:text-base leading-relaxed">
      Panduan komprehensif satuan ukuran absolut (<code>px</code>, <code>pt</code>, <code>cm</code>) vs relatif (<code>rem</code>, <code>em</code>, <code>%</code>, <code>vw</code>, <code>vh</code>, <code>ch</code>).
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
      <strong class="text-blue-600 font-sans">rem (Root EM)</strong>
      <p class="text-slate-600 dark:text-slate-400 font-sans">Relatif terhadap font-size elemen root &lt;html&gt; (standar 1rem = 16px).</p>
    </div>
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
      <strong class="text-cyan-600 font-sans">vw & vh</strong>
      <p class="text-slate-600 dark:text-slate-400 font-sans">1vw = 1% dari lebar jendela layar; 1vh = 1% dari tinggi layar.</p>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border border-blue-200 dark:border-blue-900/40 rounded-2xl">
    <h4 class="text-blue-900 dark:text-blue-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-blue-800 dark:text-blue-400 text-xs leading-relaxed">
      Di Live Editor, uji penerapan unit <code>rem</code> pada ukuran heading dan padding!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    html { font-size: 16px; } /* 1rem = 16px */
    body { font-family: Arial, sans-serif; background: #f8fafc; padding: 2rem; }
    
    .card-rem {
      font-size: 1.25rem; /* 20px */
      padding: 1.5rem;    /* 24px */
      background: white;
      border: 1px solid #cbd5e1;
      border-radius: 0.75rem;
    }
  </style>
</head>
<body>

  <div class="card-rem">
    Ukuran proporsional berbasis rem (Root EM).
  </div>

</body>
</html>`,
    quiz: {
      question: "Jika font-size default pada root <html> adalah 16px, berapakah nilai piksel dari '2rem'?",
      options: ["32px", "16px", "24px", "64px"],
      correctIndex: 0,
      explanation: "2rem = 2 * 16px = 32px."
    }
  },
  {
    id: 'css-ref-px-em-converter',
    title: 'CSS PX-EM Converter',
    order: 12,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-purple-700 to-indigo-900 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-purple-200 border border-white/20">Converter Math</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS PX to EM / REM Converter: Formula Konversi</h1>
    <p class="text-purple-100 text-sm md:text-base leading-relaxed">
      Rumus matematis kalkulasi cepat mengubah nilai absolut Pixel (PX) ke nilai relatif EM dan REM.
    </p>
  </div>

  <div class="p-5 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
    <h3 class="font-bold text-purple-600 text-sm">Formula Baku Konversi:</h3>
    <div class="p-3 bg-slate-900 text-emerald-400 font-mono text-xs rounded-xl">
      rem = pixels / root_font_size (biasanya 16px)
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs text-slate-600 dark:text-slate-400 pt-2">
      <div>12px = <strong>0.75rem</strong></div>
      <div>14px = <strong>0.875rem</strong></div>
      <div>16px = <strong>1rem</strong></div>
      <div>24px = <strong>1.5rem</strong></div>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 border border-purple-200 dark:border-purple-900/40 rounded-2xl">
    <h4 class="text-purple-900 dark:text-purple-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-purple-800 dark:text-purple-400 text-xs leading-relaxed">
      Di Live Editor, eksplorasi konverter mini tabel ukuran ini!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #f8fafc; padding: 25px; }
    
    table { width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; }
    th, td { padding: 10px 15px; border: 1px solid #e2e8f0; font-size: 13px; text-align: left; }
    th { background: #f1f5f9; color: #334155; }
  </style>
</head>
<body>

  <h3>Tabel Cepat Konversi (Base 16px):</h3>
  <table>
    <tr><th>Pixels (PX)</th><th>REM Value</th></tr>
    <tr><td>16px</td><td>1.0rem</td></tr>
    <tr><td>20px</td><td>1.25rem</td></tr>
    <tr><td>32px</td><td>2.0rem</td></tr>
  </table>

</body>
</html>`,
    quiz: {
      question: "Berapakah nilai REM untuk 24px jika ukuran dasar font adalah 16px?",
      options: ["1.5rem", "1.25rem", "2.0rem", "0.75rem"],
      correctIndex: 0,
      explanation: "24 / 16 = 1.5rem."
    }
  },
  {
    id: 'css-ref-colors',
    title: 'CSS Colors',
    order: 13,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-pink-600 to-rose-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-pink-150 border border-white/20">Color Models</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Colors: Nama Warna & Palet Standar</h1>
    <p class="text-pink-100 text-sm md:text-base leading-relaxed">
      Daftar 140 nama warna resmi HTML/CSS (seperti <code>crimson</code>, <code>royalblue</code>, <code>tomato</code>, <code>gold</code>, <code>teal</code>).
    </p>
  </div>

  <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-center font-bold">
    <div class="p-3 bg-red-500 text-white rounded-xl">Crimson</div>
    <div class="p-3 bg-blue-600 text-white rounded-xl">RoyalBlue</div>
    <div class="p-3 bg-teal-600 text-white rounded-xl">Teal</div>
    <div class="p-3 bg-amber-500 text-white rounded-xl">Gold</div>
  </div>

  <div class="p-5 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 border border-pink-200 dark:border-pink-900/40 rounded-2xl">
    <h4 class="text-pink-900 dark:text-pink-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-pink-800 dark:text-pink-400 text-xs leading-relaxed">
      Di Live Editor, ganti nama warna ke salah satu dari 140 keyword resmi!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #f8fafc; padding: 25px; text-align: center; }
    
    .color-pill {
      background: dodgerblue;
      color: white;
      padding: 12px 24px;
      border-radius: 50px;
      display: inline-block;
      font-weight: bold;
    }
  </style>
</head>
<body>

  <div class="color-pill">Warna Resmi: DodgerBlue</div>

</body>
</html>`,
    quiz: {
      question: "Berapa banyak nama warna resmi (Color Keywords) yang diakui standar HTML/CSS tanpa perlu kode HEX?",
      options: ["140 Warna Standar", "16 Warna saja", "1000 Warna", "Hanya 3 warna (Merah, Hijau, Biru)"],
      correctIndex: 0,
      explanation: "Standar CSS mendefinisikan 140 nama warna resmi yang didukung secara universal oleh seluruh peramban web."
    }
  },
  {
    id: 'css-ref-color-values',
    title: 'CSS Color Values',
    order: 14,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-violet-700 to-indigo-900 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-violet-200 border border-white/20">Color Spaces</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Color Values: Format HEX, RGB, HSL, & OKLCH</h1>
    <p class="text-violet-100 text-sm md:text-base leading-relaxed">
      Perbandingan teknis format nilai warna di CSS: Hexadecimal (<code>#RRGGBB</code>), RGB/RGBA, HSL/HSLA, dan ruang warna modern Color 4 (<code>oklch()</code>, <code>lab()</code>).
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
      <strong class="text-violet-600 font-sans">HEX & RGB</strong>
      <p class="text-slate-600 dark:text-slate-400 font-sans"><code>#3b82f6</code> atau <code>rgb(59, 130, 246)</code></p>
    </div>
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
      <strong class="text-indigo-600 font-sans">HSL & OKLCH</strong>
      <p class="text-slate-600 dark:text-slate-400 font-sans"><code>hsl(217, 91%, 60%)</code> atau <code>oklch(0.65 0.24 260)</code></p>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-violet-50 to-indigo-50 dark:from-violet-950/20 dark:to-indigo-950/20 border border-violet-200 dark:border-violet-900/40 rounded-2xl">
    <h4 class="text-violet-900 dark:text-violet-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-violet-800 dark:text-violet-400 text-xs leading-relaxed">
      Di Live Editor, amati representasi warna transparan via <code>rgba(...)</code>!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #0f172a; padding: 30px; display: flex; justify-content: center; }
    
    .color-chip {
      background: hsla(217, 91%, 60%, 0.25);
      border: 1px solid hsl(217, 91%, 60%);
      color: #60a5fa;
      padding: 16px 24px;
      border-radius: 12px;
      font-weight: bold;
    }
  </style>
</head>
<body>

  <div class="color-chip">
    HSLA Alpha Color Chip
  </div>

</body>
</html>`,
    quiz: {
      question: "Huruf 'A' pada format RGBA dan HSLA merupakan singkatan dari apa?",
      options: ["Alpha (tingkat transparansi dari 0.0 hingga 1.0)", "Angle", "Amplitude", "Absolute"],
      correctIndex: 0,
      explanation: "Alpha channel mengatur tingkat opasitas/transparansi warna, di mana 0 berarti tembus pandang mutlak dan 1 berarti solid penuh."
    }
  },
  {
    id: 'css-ref-default-values',
    title: 'CSS Default Values',
    order: 15,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-slate-700 to-slate-900 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-slate-200 border border-white/20">Initial Specs</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Default Values: Nilai Awal Browser (*Initial*)</h1>
    <p class="text-slate-300 text-sm md:text-base leading-relaxed">
      Referensi nilai default awal bawaan W3C untuk setiap properti sebelum didefinisikan oleh developer (misal: <code>position: static</code>, <code>display: inline/block</code>, <code>box-sizing: content-box</code>).
    </p>
  </div>

  <div class="p-5 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2 text-xs">
    <div class="flex justify-between border-b pb-1"><span>Properti</span><strong class="text-slate-800 dark:text-slate-200">Default Value</strong></div>
    <div class="flex justify-between py-1"><span>position</span><code>static</code></div>
    <div class="flex justify-between py-1"><span>box-sizing</span><code>content-box</code></div>
    <div class="flex justify-between py-1"><span>opacity</span><code>1</code></div>
    <div class="flex justify-between py-1"><span>visibility</span><code>visible</code></div>
  </div>

  <div class="p-5 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 border border-slate-300 dark:border-slate-700 rounded-2xl">
    <h4 class="text-slate-900 dark:text-white font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
      Di Live Editor, uji keyword <code>initial</code> untuk me-reset properti ke nilai default aslinya!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { color: red; font-family: Arial, sans-serif; padding: 25px; }
    
    .reset-initial {
      color: initial; /* Kembali ke hitam default browser */
    }
  </style>
</head>
<body>

  <p>Teks ini merah karena mewarisi warna body.</p>
  <p class="reset-initial">Teks ini di-reset ke initial default browser.</p>

</body>
</html>`,
    quiz: {
      question: "Nilai default bawaan untuk properti 'position' pada semua elemen HTML sebelum diubah adalah?",
      options: ["static", "relative", "absolute", "fixed"],
      correctIndex: 0,
      explanation: "Semua elemen HTML secara default memiliki 'position: static' dan mengalir sesuai susunan dokumen normal."
    }
  },
  {
    id: 'css-ref-browser-support',
    title: 'CSS Browser Support',
    order: 16,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-blue-600 to-emerald-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-blue-150 border border-white/20">Compatibility</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Browser Support: Kompatibilitas Lintas Peramban</h1>
    <p class="text-blue-100 text-sm md:text-base leading-relaxed">
      Panduan memeriksa kompatibilitas fitur modern menggunakan portal <strong>Can I Use</strong>, teknik progressive enhancement, dan vendor prefixes (<code>-webkit-</code>, <code>-moz-</code>).
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
      <strong class="text-blue-600 font-bold">1. CanIUse.com</strong>
      <p class="text-slate-600 dark:text-slate-400">Database terlengkap untuk memvalidasi persentase pengguna global yang mendukung suatu fitur CSS baru.</p>
    </div>
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
      <strong class="text-emerald-600 font-bold">2. Feature Detection (@supports)</strong>
      <p class="text-slate-600 dark:text-slate-400">Menyediakan fallback otomatis jika browser pengguna belum mendukung properti canggih tertentu.</p>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-blue-950/20 dark:to-emerald-950/20 border border-blue-200 dark:border-blue-900/40 rounded-2xl">
    <h4 class="text-blue-900 dark:text-blue-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-blue-800 dark:text-blue-400 text-xs leading-relaxed">
      Di Live Editor, amati penggunaan vendor prefix <code>-webkit-</code> untuk kompatibilitas peramban lawas!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #f8fafc; padding: 25px; }
    
    .compat-box {
      -webkit-user-select: none; /* Safari / Chrome lama */
      -moz-user-select: none;    /* Firefox lama */
      user-select: none;         /* Standar W3C */
      
      background: #e2e8f0;
      padding: 15px;
      border-radius: 8px;
      text-align: center;
      font-weight: bold;
      color: #334155;
    }
  </style>
</head>
<body>

  <div class="compat-box">
    🚫 Teks ini tidak bisa diseleksi (user-select: none lintas browser).
  </div>

</body>
</html>`,
    quiz: {
      question: "Platform website terpopuler apa yang menjadi rujukan standar developer dunia untuk memeriksa tingkat dukungan fitur CSS di berbagai peramban?",
      options: ["CanIUse.com", "Google Search", "Wikipedia", "StackOverflow"],
      correctIndex: 0,
      explanation: "CanIUse.com adalah basis data terlengkap dan terpercaya untuk memeriksa tabel kompatibilitas browser bagi fitur HTML, CSS, dan Web API."
    }
  }
];

async function run() {
  const modId = 'ba1383a2-219d-44ab-bf63-804d5a0f0902';
  const chapTitle = 'CSS References';

  for (const dbUrl of dbs) {
    const dbName = dbUrl.split('/').pop();
    console.log(`\n🚀 [${dbName}] Seeding Chapter "${chapTitle}" & 16 Lessons...`);
    const pool = new Pool({ connectionString: dbUrl });

    try {
      // 1. Check or Create Chapter "CSS References"
      let chRes = await pool.query(`SELECT id FROM "Chapter" WHERE "moduleId" = $1 AND title = $2`, [modId, chapTitle]);
      let chapterId;
      if (chRes.rowCount === 0) {
        const insertChap = await pool.query(`
          INSERT INTO "Chapter" (id, title, "moduleId", "order", "createdAt", "updatedAt")
          VALUES (gen_random_uuid(), $1, $2, 9, NOW(), NOW())
          RETURNING id
        `, [chapTitle, modId]);
        chapterId = insertChap.rows[0].id;
        console.log(`  ➕ Created Chapter: ${chapTitle} (${chapterId})`);
      } else {
        chapterId = chRes.rows[0].id;
        console.log(`  📌 Existing Chapter: ${chapTitle} (${chapterId})`);
      }

      // 2. Insert or update each of the 16 lessons
      for (const l of referencesLessons) {
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

  console.log('\n✨ ALL 16 CSS REFERENCES LESSONS POPULATED ACROSS BOTH DATABASES!');
}

run().catch(console.error);
