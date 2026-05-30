// CSS Course Data
// CSS Course Modules & Lessons Data

export const cssCourseModules = [
  {
    id: 'css-mod-1', title: 'CSS Tutorial',
    lessons: [
      { id: 'css-home', title: 'CSS HOME' },
      { id: 'css-intro', title: 'CSS Introduction' },
      { id: 'css-syntax', title: 'CSS Syntax' },
      { id: 'css-selectors', title: 'CSS Selectors' },
      { id: 'css-howto', title: 'CSS How To' },
      { id: 'css-comments', title: 'CSS Comments' },
      { id: 'css-colors', title: 'CSS Colors' },
      { id: 'css-backgrounds', title: 'CSS Backgrounds' },
      { id: 'css-borders', title: 'CSS Borders' },
      { id: 'css-margins', title: 'CSS Margins' },
      { id: 'css-padding', title: 'CSS Padding' },
      { id: 'css-height-width', title: 'CSS Height / Width' },
      { id: 'css-box-model', title: 'CSS Box Model' },
      { id: 'css-outline', title: 'CSS Outline' },
      { id: 'css-text', title: 'CSS Text' },
      { id: 'css-fonts', title: 'CSS Fonts' },
      { id: 'css-icons', title: 'CSS Icons' },
      { id: 'css-links', title: 'CSS Links' },
      { id: 'css-lists', title: 'CSS Lists' },
      { id: 'css-tables', title: 'CSS Tables' },
      { id: 'css-display', title: 'CSS Display' },
      { id: 'css-max-width', title: 'CSS Max-width' },
      { id: 'css-position', title: 'CSS Position' },
      { id: 'css-position-offsets', title: 'CSS Position Offsets' },
      { id: 'css-z-index', title: 'CSS Z-index' },
      { id: 'css-overflow', title: 'CSS Overflow' },
      { id: 'css-float', title: 'CSS Float' },
      { id: 'css-inline-block', title: 'CSS Inline-block' },
      { id: 'css-align', title: 'CSS Align' },
      { id: 'css-combinators', title: 'CSS Combinators' },
      { id: 'css-pseudo-classes', title: 'CSS Pseudo-classes' },
      { id: 'css-pseudo-elements', title: 'CSS Pseudo-elements' },
      { id: 'css-opacity', title: 'CSS Opacity' },
      { id: 'css-navbar', title: 'CSS Navigation Bars' },
      { id: 'css-dropdowns', title: 'CSS Dropdowns' },
      { id: 'css-image-gallery', title: 'CSS Image Gallery' },
      { id: 'css-attr-selectors', title: 'CSS Attribute Selectors' },
      { id: 'css-forms', title: 'CSS Forms' },
      { id: 'css-counters', title: 'CSS Counters' },
      { id: 'css-units', title: 'CSS Units' },
      { id: 'css-specificity', title: 'CSS Specificity' },
      { id: 'css-important', title: 'CSS !important' },
    ]
  },
  {
    id: 'css-mod-2', title: 'CSS Advanced',
    lessons: [
      { id: 'css-rounded-corners', title: 'CSS Rounded Corners' },
      { id: 'css-border-images', title: 'CSS Border Images' },
      { id: 'css-gradients', title: 'CSS Gradients' },
      { id: 'css-shadows', title: 'CSS Shadows' },
      { id: 'css-text-effects', title: 'CSS Text Effects' },
      { id: 'css-custom-fonts', title: 'CSS Custom Fonts' },
      { id: 'css-2d-transforms', title: 'CSS 2D Transforms' },
      { id: 'css-3d-transforms', title: 'CSS 3D Transforms' },
      { id: 'css-transitions', title: 'CSS Transitions' },
      { id: 'css-animations', title: 'CSS Animations' },
      { id: 'css-tooltips', title: 'CSS Tooltips' },
      { id: 'css-image-styling', title: 'CSS Image Styling' },
      { id: 'css-object-fit', title: 'CSS object-fit' },
      { id: 'css-masking', title: 'CSS Masking' },
      { id: 'css-buttons', title: 'CSS Buttons' },
      { id: 'css-pagination', title: 'CSS Pagination' },
      { id: 'css-columns', title: 'CSS Multiple Columns' },
      { id: 'css-variables', title: 'CSS Variables' },
      { id: 'css-box-sizing', title: 'CSS Box Sizing' },
      { id: 'css-media-queries', title: 'CSS Media Queries' },
    ]
  },
  {
    id: 'css-mod-3', title: 'CSS Flexbox',
    lessons: [
      { id: 'css-flexbox-intro', title: 'Flexbox Intro' },
      { id: 'css-flex-container', title: 'Flex Container' },
      { id: 'css-flex-items', title: 'Flex Items' },
      { id: 'css-flex-responsive', title: 'Flex Responsive' },
    ]
  },
  {
    id: 'css-mod-4', title: 'CSS Grid',
    lessons: [
      { id: 'css-grid-intro', title: 'Grid Intro' },
      { id: 'css-grid-container', title: 'Grid Container' },
      { id: 'css-grid-items', title: 'Grid Items' },
    ]
  },
  {
    id: 'css-mod-5', title: 'CSS Responsive',
    lessons: [
      { id: 'css-rwd-intro', title: 'RWD Intro' },
      { id: 'css-rwd-viewport', title: 'RWD Viewport' },
      { id: 'css-rwd-grid', title: 'RWD Grid View' },
      { id: 'css-rwd-media', title: 'RWD Media Queries' },
      { id: 'css-rwd-images', title: 'RWD Images' },
    ]
  },
];

export const cssLessonsData: Record<string, any> = {

// ---------------------------------------------
// CSS HOME
// ---------------------------------------------
'css-home': {
  courseId: 'css', title: 'CSS HOME', chapter: 'CSS Tutorial', color: 'blue',
  theory: `
    <div class="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
      <h2 class="text-2xl font-black text-blue-900 mb-2">Selamat Datang di CSS Tutorial! ??</h2>
      <p class="text-blue-800">Pelajari CSS dari dasar hingga mahir "” lengkap dengan contoh interaktif dan live preview.</p>
    </div>
    <h2>Apa yang akan kamu pelajari?</h2>
    <ul>
      <li><strong>CSS Dasar</strong> "” Syntax, Selector, Properties</li>
      <li><strong>Box Model</strong> "” Margin, Padding, Border</li>
      <li><strong>Layout</strong> "” Flexbox, Grid, Position</li>
      <li><strong>Advanced</strong> "” Animasi, Transisi, Transform</li>
      <li><strong>Responsive</strong> "” Media Queries, RWD</li>
    </ul>
    <h2>Contoh CSS</h2>
    <div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
      <span class="text-red-600">h1</span> {<br/>
      &nbsp;&nbsp;<span class="text-blue-600">color</span>: <span class="text-green-600">tomato</span>;<br/>
      &nbsp;&nbsp;<span class="text-blue-600">font-size</span>: <span class="text-orange-600">2rem</span>;<br/>
      }
    </div>
    <p>CSS (Cascading Style Sheets) adalah bahasa yang digunakan untuk mendeskripsikan presentasi dokumen HTML. CSS mengontrol warna, font, ukuran, jarak, tata letak, dan banyak lagi.</p>
  `,
  code: `<!DOCTYPE html>
<html>
<head>
<style>
  body { font-family: Arial, sans-serif; background: #f0f4ff; }
  .card {
    background: white;
    border-radius: 16px;
    padding: 24px;
    max-width: 400px;
    margin: 40px auto;
    box-shadow: 0 4px 24px rgba(99,102,241,0.15);
  }
  h1 { color: #6366f1; font-size: 2rem; margin: 0 0 8px; }
  p { color: #64748b; line-height: 1.6; }
  .badge {
    display: inline-block;
    background: #e0e7ff;
    color: #4338ca;
    padding: 4px 12px;
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: bold;
  }
</style>
</head>
<body>
  <div class="card">
    <span class="badge">CSS Tutorial</span>
    <h1>Halo, CSS! ??</h1>
    <p>Selamat datang di dunia styling web. CSS membuat halaman menjadi indah!</p>
  </div>
</body>
</html>`,
  quiz: { question: 'Apa kepanjangan dari CSS?', options: ['Computer Style Sheets', 'Cascading Style Sheets', 'Creative Style System', 'Colorful Style Sheets'], correctIndex: 1, explanation: 'CSS adalah singkatan dari Cascading Style Sheets.' },
  nextPath: 'css-intro', prevPath: null
},

// ---------------------------------------------
// CSS INTRODUCTION
// ---------------------------------------------
'css-intro': {
  courseId: 'css', title: 'CSS Introduction', chapter: 'CSS Tutorial', color: 'blue',
  theory: `
    <h2>Apa itu CSS?</h2>
    <p>CSS adalah bahasa stylesheet yang digunakan untuk mendeskripsikan presentasi dokumen HTML. CSS mendeskripsikan bagaimana elemen HTML harus ditampilkan di layar, kertas, atau media lainnya.</p>
    <h3>Mengapa CSS?</h3>
    <ul>
      <li>CSS menghemat banyak pekerjaan "” dapat mengontrol layout banyak halaman web sekaligus</li>
      <li>CSS disimpan dalam file <code>.css</code> terpisah</li>
      <li>CSS memisahkan konten (HTML) dari presentasi (tampilan)</li>
    </ul>
    <h3>3 Cara Menambahkan CSS</h3>
    <div class="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-4">
      <p class="text-orange-900 font-bold mb-2">1. External CSS</p>
      <p class="text-orange-800 text-sm">File CSS terpisah, dihubungkan dengan tag <code>&lt;link&gt;</code> di dalam <code>&lt;head&gt;</code>.</p>
    </div>
    <div class="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-4">
      <p class="text-blue-900 font-bold mb-2">2. Internal CSS</p>
      <p class="text-blue-800 text-sm">CSS ditulis di dalam tag <code>&lt;style&gt;</code> di dalam <code>&lt;head&gt;</code>.</p>
    </div>
    <div class="bg-indigo-50 border border-indigo-500 rounded-xl p-5 mb-4">
      <p class="text-indigo-900 font-bold mb-2">3. Inline CSS</p>
      <p class="text-indigo-800 text-sm">CSS ditulis langsung di atribut <code>style</code> pada elemen HTML.</p>
    </div>
  `,
  code: `<!DOCTYPE html>
<html>
<head>
<style>
  /* Internal CSS */
  body { font-family: 'Segoe UI', sans-serif; padding: 20px; background: #f8fafc; }
  h1 { color: #3b82f6; }
  .external-demo { background: #fef3c7; border: 2px solid #f59e0b; border-radius: 12px; padding: 16px; margin: 12px 0; }
  .internal-demo { background: #dbeafe; border: 2px solid #3b82f6; border-radius: 12px; padding: 16px; margin: 12px 0; }
</style>
</head>
<body>
  <h1>3 Cara CSS</h1>
  <div class="external-demo">
    <strong>External CSS</strong> "” file .css terpisah
  </div>
  <div class="internal-demo">
    <strong>Internal CSS</strong> "” di dalam &lt;style&gt;
  </div>
  <!-- Inline CSS langsung di elemen -->
  <div style="background:#f0fdf4; border:2px solid #22c55e; border-radius:12px; padding:16px; margin:12px 0;">
    <strong>Inline CSS</strong> "” langsung di atribut style
  </div>
</body>
</html>`,
  quiz: { question: 'Manakah cara yang PALING direkomendasikan untuk menulis CSS?', options: ['Inline CSS', 'Internal CSS', 'External CSS'], correctIndex: 2, explanation: 'External CSS adalah cara terbaik karena memisahkan konten dari presentasi dan bisa digunakan ulang di banyak halaman.' },
  nextPath: 'css-syntax', prevPath: 'css-home'
},

// ---------------------------------------------
// CSS SYNTAX
// ---------------------------------------------
'css-syntax': {
  courseId: 'css', title: 'CSS Syntax', chapter: 'CSS Tutorial', color: 'blue',
  theory: `
    <h2>Sintaks CSS</h2>
    <p>Sebuah aturan CSS terdiri dari <strong>selector</strong> dan <strong>declaration block</strong>.</p>
    <div class="bg-slate-100 rounded-xl p-5 mb-6 font-mono text-sm">
      <span class="text-red-600 font-bold">selector</span> {<br/>
      &nbsp;&nbsp;<span class="text-blue-600">property</span>: <span class="text-green-600">value</span>;<br/>
      &nbsp;&nbsp;<span class="text-blue-600">property</span>: <span class="text-green-600">value</span>;<br/>
      }
    </div>
    <h3>Penjelasan</h3>
    <ul>
      <li><strong>Selector</strong> "” menunjuk elemen HTML yang ingin di-style (contoh: <code>h1</code>, <code>.class</code>, <code>#id</code>)</li>
      <li><strong>Declaration block</strong> "” berisi satu atau lebih deklarasi, dipisahkan titik koma</li>
      <li><strong>Property</strong> "” nama style yang ingin diubah (contoh: <code>color</code>, <code>font-size</code>)</li>
      <li><strong>Value</strong> "” nilai dari property tersebut (contoh: <code>red</code>, <code>16px</code>)</li>
    </ul>
    <h3>Contoh Nyata</h3>
    <div class="bg-slate-100 rounded-xl p-5 font-mono text-sm">
      <span class="text-red-600">p</span> {<br/>
      &nbsp;&nbsp;<span class="text-blue-600">color</span>: <span class="text-green-600">red</span>;<br/>
      &nbsp;&nbsp;<span class="text-blue-600">text-align</span>: <span class="text-green-600">center</span>;<br/>
      }
    </div>
  `,
  code: `<!DOCTYPE html>
<html>
<head>
<style>
  /* Selector: h1 | Property: color, text-align */
  h1 {
    color: #6366f1;
    text-align: center;
    font-size: 2.5rem;
  }

  /* Selector: p | Property: color, font-size, line-height */
  p {
    color: #475569;
    font-size: 1.1rem;
    line-height: 1.8;
    max-width: 500px;
    margin: 0 auto;
  }

  /* Selector: .highlight | Property: background, padding, border-radius */
  .highlight {
    background: #fef9c3;
    padding: 12px 20px;
    border-radius: 8px;
    border-left: 4px solid #eab308;
    margin: 16px auto;
    max-width: 500px;
  }
</style>
</head>
<body>
  <h1>Belajar CSS Syntax</h1>
  <p>Setiap aturan CSS punya selector dan declaration block.</p>
  <div class="highlight">
    ?? Selector ? Property: Value;
  </div>
</body>
</html>`,
  quiz: { question: 'Apa yang dimaksud dengan "selector" dalam CSS?', options: ['Nilai dari sebuah property', 'Elemen HTML yang ingin di-style', 'Tanda kurung kurawal {}', 'Nama file CSS'], correctIndex: 1, explanation: 'Selector menunjuk elemen HTML mana yang akan diberi style.' },
  nextPath: 'css-selectors', prevPath: 'css-intro'
},

// ---------------------------------------------
// CSS SELECTORS
// ---------------------------------------------
'css-selectors': {
  courseId: 'css', title: 'CSS Selectors', chapter: 'CSS Tutorial', color: 'blue',
  theory: `
    <h2>CSS Selectors</h2>
    <p>CSS selector digunakan untuk "menemukan" (atau memilih) elemen HTML yang ingin kamu style.</p>
    <h3>5 Kategori Selector Utama</h3>
    <div class="bg-slate-100 rounded-xl p-5 mb-4">
      <p class="font-bold mb-2">1. Element Selector</p>
      <code>p { color: red; }</code>
      <p class="text-sm text-slate-600 mt-1">Memilih semua elemen &lt;p&gt;</p>
    </div>
    <div class="bg-slate-100 rounded-xl p-5 mb-4">
      <p class="font-bold mb-2">2. ID Selector</p>
      <code>#myId { color: blue; }</code>
      <p class="text-sm text-slate-600 mt-1">Memilih elemen dengan id="myId" (unik, hanya 1)</p>
    </div>
    <div class="bg-slate-100 rounded-xl p-5 mb-4">
      <p class="font-bold mb-2">3. Class Selector</p>
      <code>.myClass { color: green; }</code>
      <p class="text-sm text-slate-600 mt-1">Memilih semua elemen dengan class="myClass"</p>
    </div>
    <div class="bg-slate-100 rounded-xl p-5 mb-4">
      <p class="font-bold mb-2">4. Universal Selector</p>
      <code>* { margin: 0; }</code>
      <p class="text-sm text-slate-600 mt-1">Memilih SEMUA elemen HTML</p>
    </div>
    <div class="bg-slate-100 rounded-xl p-5 mb-4">
      <p class="font-bold mb-2">5. Grouping Selector</p>
      <code>h1, h2, p { color: purple; }</code>
      <p class="text-sm text-slate-600 mt-1">Memilih beberapa elemen sekaligus</p>
    </div>
  `,
  code: `<!DOCTYPE html>
<html>
<head>
<style>
  /* 1. Element Selector */
  body { font-family: Arial, sans-serif; padding: 20px; }

  /* 2. ID Selector */
  #judul-utama {
    color: #6366f1;
    font-size: 2rem;
    border-bottom: 3px solid #6366f1;
    padding-bottom: 8px;
  }

  /* 3. Class Selector */
  .kartu {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 16px;
    margin: 12px 0;
  }
  .kartu.biru { border-left: 4px solid #3b82f6; }
  .kartu.hijau { border-left: 4px solid #22c55e; }
  .kartu.merah { border-left: 4px solid #ef4444; }

  /* 4. Universal Selector */
  * { box-sizing: border-box; }

  /* 5. Grouping Selector */
  h2, h3 { color: #334155; }
</style>
</head>
<body>
  <h1 id="judul-utama">CSS Selectors</h1>
  <div class="kartu biru"><strong>ID Selector</strong> "” #judul-utama</div>
  <div class="kartu hijau"><strong>Class Selector</strong> "” .kartu.hijau</div>
  <div class="kartu merah"><strong>Class Selector</strong> "” .kartu.merah</div>
</body>
</html>`,
  quiz: { question: 'Selector mana yang digunakan untuk memilih elemen dengan id="header"?', options: ['.header', '#header', 'header', '*header'], correctIndex: 1, explanation: 'ID selector menggunakan tanda # diikuti nama id.' },
  nextPath: 'css-howto', prevPath: 'css-syntax'
},

// CSS HOW TO
'css-howto': {
  courseId: 'css', title: 'CSS How To', chapter: 'CSS Tutorial', color: 'blue',
  theory: `
    <h2>Cara Menambahkan CSS ke HTML</h2>
    <h3>1. External CSS</h3>
    <p>Buat file <code>style.css</code> terpisah, lalu hubungkan di <code>&lt;head&gt;</code>:</p>
    <div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
      &lt;<span class="text-blue-600">link</span> <span class="text-purple-600">rel</span>="stylesheet" <span class="text-purple-600">href</span>="style.css"&gt;
    </div>
    <h3>2. Internal CSS</h3>
    <p>Tulis CSS di dalam tag <code>&lt;style&gt;</code> di <code>&lt;head&gt;</code>:</p>
    <div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
      &lt;<span class="text-blue-600">style</span>&gt;<br/>
      &nbsp;&nbsp;body { background-color: linen; }<br/>
      &lt;/<span class="text-blue-600">style</span>&gt;
    </div>
    <h3>3. Inline CSS</h3>
    <p>Tulis CSS langsung di atribut <code>style</code>:</p>
    <div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
      &lt;<span class="text-blue-600">h1</span> <span class="text-purple-600">style</span>="color:blue;"&gt;Judul&lt;/<span class="text-blue-600">h1</span>&gt;
    </div>
    <h3>Urutan Prioritas (Cascading Order)</h3>
    <ol>
      <li>Inline CSS (prioritas tertinggi)</li>
      <li>External dan Internal CSS (urutan di HTML)</li>
      <li>Browser default (prioritas terendah)</li>
    </ol>
  `,
  code: `<!DOCTYPE html>
<html>
<head>
<style>
  /* Internal CSS */
  body { font-family: Arial, sans-serif; padding: 24px; background: #f1f5f9; }
  h1 { color: #6366f1; }
  .box {
    background: white;
    border-radius: 12px;
    padding: 20px;
    margin: 12px 0;
    border: 2px solid #e2e8f0;
  }
  .label {
    font-size: 0.7rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #94a3b8;
    margin-bottom: 4px;
  }
</style>
</head>
<body>
  <h1>CSS How To</h1>
  <div class="box">
    <div class="label">Internal CSS</div>
    <p>Style ini dari tag &lt;style&gt; di &lt;head&gt;</p>
  </div>
  <div class="box" style="border-color: #6366f1; border-width: 2px;">
    <div class="label">Inline CSS</div>
    <p style="color: #6366f1; font-weight: bold;">Style ini dari atribut style langsung</p>
  </div>
</body>
</html>`,
  quiz: { question: 'CSS mana yang memiliki prioritas TERTINGGI?', options: ['External CSS', 'Internal CSS', 'Inline CSS', 'Browser default'], correctIndex: 2, explanation: 'Inline CSS memiliki prioritas tertinggi karena langsung diterapkan pada elemen.' },
  nextPath: 'css-comments', prevPath: 'css-selectors'
},

// CSS COMMENTS
'css-comments': {
  courseId: 'css', title: 'CSS Comments', chapter: 'CSS Tutorial', color: 'blue',
  theory: `
    <h2>CSS Comments</h2>
    <p>Komentar CSS digunakan untuk menjelaskan kode dan membuatnya lebih mudah dipahami. Komentar diabaikan oleh browser.</p>
    <h3>Sintaks Komentar CSS</h3>
    <div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
      <span class="text-slate-400">/* Ini adalah komentar CSS */</span>
    </div>
    <p>Komentar CSS dimulai dengan <code>/*</code> dan diakhiri dengan <code>*/</code>.</p>
    <h3>Contoh Penggunaan</h3>
    <div class="bg-slate-100 rounded-xl p-4 font-mono text-sm">
      <span class="text-slate-400">/* Styling untuk header */</span><br/>
      <span class="text-red-600">header</span> {<br/>
      &nbsp;&nbsp;<span class="text-blue-600">background</span>: <span class="text-green-600">#333</span>; <span class="text-slate-400">/* warna gelap */</span><br/>
      &nbsp;&nbsp;<span class="text-blue-600">color</span>: <span class="text-green-600">white</span>;<br/>
      }
    </div>
    <div class="bg-orange-50 border border-orange-200 rounded-xl p-4 mt-4">
      <p class="text-orange-800"><strong>Tips:</strong> Gunakan komentar untuk mengelompokkan section CSS, menjelaskan logika kompleks, atau menonaktifkan kode sementara.</p>
    </div>
  `,
  code: `<!DOCTYPE html>
<html>
<head>
<style>
  /* ===========================
     GLOBAL STYLES
     =========================== */
  body {
    font-family: Arial, sans-serif;
    background: #f8fafc; /* warna latar belakang terang */
    padding: 24px;
  }

  /* Heading utama */
  h1 {
    color: #1e293b; /* warna gelap */
    font-size: 2rem;
    /* text-decoration: underline; */ /* dinonaktifkan */
  }

  /* Kartu konten */
  .card {
    background: white;
    border-radius: 16px; /* sudut membulat */
    padding: 24px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.08);
    max-width: 480px;
  }

  /* Teks deskripsi */
  p {
    color: #64748b; /* abu-abu sedang */
    line-height: 1.7;
  }
</style>
</head>
<body>
  <div class="card">
    <h1>CSS Comments</h1>
    <p>Komentar membantu kamu dan tim memahami kode CSS dengan lebih mudah.</p>
  </div>
</body>
</html>`,
  quiz: { question: 'Bagaimana cara menulis komentar di CSS?', options: ['// komentar', '<!-- komentar -->', '/* komentar */', '# komentar'], correctIndex: 2, explanation: 'Komentar CSS menggunakan /* untuk membuka dan */ untuk menutup.' },
  nextPath: 'css-colors', prevPath: 'css-howto'
},

// CSS COLORS
'css-colors': {
  courseId: 'css', title: 'CSS Colors', chapter: 'CSS Tutorial', color: 'blue',
  theory: `
    <h2>CSS Colors</h2>
    <p>CSS mendukung berbagai cara untuk menentukan warna.</p>
    <h3>Format Warna CSS</h3>
    <div class="bg-slate-100 rounded-xl p-4 mb-3 font-mono text-sm">
      <span class="text-blue-600">color</span>: <span class="text-green-600">red</span>; <span class="text-slate-400">/* Named color */</span>
    </div>
    <div class="bg-slate-100 rounded-xl p-4 mb-3 font-mono text-sm">
      <span class="text-blue-600">color</span>: <span class="text-green-600">#ff0000</span>; <span class="text-slate-400">/* HEX */</span>
    </div>
    <div class="bg-slate-100 rounded-xl p-4 mb-3 font-mono text-sm">
      <span class="text-blue-600">color</span>: <span class="text-green-600">rgb(255, 0, 0)</span>; <span class="text-slate-400">/* RGB */</span>
    </div>
    <div class="bg-slate-100 rounded-xl p-4 mb-3 font-mono text-sm">
      <span class="text-blue-600">color</span>: <span class="text-green-600">rgba(255, 0, 0, 0.5)</span>; <span class="text-slate-400">/* RGBA (dengan opacity) */</span>
    </div>
    <div class="bg-slate-100 rounded-xl p-4 mb-3 font-mono text-sm">
      <span class="text-blue-600">color</span>: <span class="text-green-600">hsl(0, 100%, 50%)</span>; <span class="text-slate-400">/* HSL */</span>
    </div>
    <h3>Properties Warna</h3>
    <ul>
      <li><code>color</code> "” warna teks</li>
      <li><code>background-color</code> "” warna latar belakang</li>
      <li><code>border-color</code> "” warna border</li>
    </ul>
  `,
  code: `<!DOCTYPE html>
<html>
<head>
<style>
  body { font-family: Arial, sans-serif; padding: 20px; }
  .grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; max-width: 500px; }
  .swatch {
    padding: 20px;
    border-radius: 12px;
    color: white;
    font-weight: bold;
    font-size: 0.85rem;
  }
  .named   { background-color: tomato; }
  .hex     { background-color: #6366f1; }
  .rgb     { background-color: rgb(34, 197, 94); }
  .rgba    { background-color: rgba(234, 179, 8, 0.85); color: #1a1a1a; }
  .hsl     { background-color: hsl(280, 70%, 55%); }
  .dark    { background-color: #0f172a; }
</style>
</head>
<body>
  <h2 style="color:#1e293b; margin-bottom:16px;">CSS Color Formats</h2>
  <div class="grid">
    <div class="swatch named">Named: tomato</div>
    <div class="swatch hex">HEX: #6366f1</div>
    <div class="swatch rgb">RGB: (34,197,94)</div>
    <div class="swatch rgba">RGBA: opacity 0.85</div>
    <div class="swatch hsl">HSL: (280,70%,55%)</div>
    <div class="swatch dark">Dark: #0f172a</div>
  </div>
</body>
</html>`,
  quiz: { question: 'Format warna mana yang mendukung transparansi (opacity)?', options: ['HEX (#rrggbb)', 'Named color (red)', 'RGBA', 'RGB'], correctIndex: 2, explanation: 'RGBA menambahkan channel Alpha (0-1) untuk mengatur transparansi.' },
  nextPath: 'css-backgrounds', prevPath: 'css-comments'
},

// CSS BACKGROUNDS
'css-backgrounds': {
  courseId: 'css', title: 'CSS Backgrounds', chapter: 'CSS Tutorial', color: 'blue',
  theory: `
    <h2>CSS Backgrounds</h2>
    <p>CSS background properties digunakan untuk menambahkan efek latar belakang pada elemen.</p>
    <h3>Properties Background</h3>
    <ul>
      <li><code>background-color</code> "” warna latar belakang</li>
      <li><code>background-image</code> "” gambar latar belakang</li>
      <li><code>background-repeat</code> "” pengulangan gambar (repeat, no-repeat, repeat-x, repeat-y)</li>
      <li><code>background-attachment</code> "” fixed atau scroll</li>
      <li><code>background-position</code> "” posisi gambar (center, top, left, dll)</li>
      <li><code>background-size</code> "” ukuran gambar (cover, contain, px)</li>
    </ul>
    <h3>Shorthand</h3>
    <div class="bg-slate-100 rounded-xl p-4 font-mono text-sm">
      <span class="text-blue-600">background</span>: <span class="text-green-600">#fff url('img.png') no-repeat center/cover</span>;
    </div>
  `,
  code: `<!DOCTYPE html>
<html>
<head>
<style>
  body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
  .box {
    height: 120px;
    border-radius: 12px;
    margin: 12px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: white;
    font-size: 0.9rem;
  }
  .bg1 { background-color: #6366f1; }
  .bg2 { background: linear-gradient(135deg, #6366f1, #8b5cf6); }
  .bg3 { background: linear-gradient(135deg, #f59e0b, #ef4444); }
  .bg4 {
    background-color: #0f172a;
    background-image: radial-gradient(circle at 20% 50%, #6366f1 0%, transparent 50%),
                      radial-gradient(circle at 80% 50%, #8b5cf6 0%, transparent 50%);
  }
</style>
</head>
<body>
  <div class="box bg1">background-color: #6366f1</div>
  <div class="box bg2">linear-gradient (indigo ? violet)</div>
  <div class="box bg3">linear-gradient (amber ? red)</div>
  <div class="box bg4">radial-gradient multi-color</div>
</body>
</html>`,
  quiz: { question: 'Property CSS mana yang digunakan untuk mengatur warna latar belakang?', options: ['color', 'background-color', 'bg-color', 'fill'], correctIndex: 1, explanation: 'background-color digunakan untuk mengatur warna latar belakang elemen.' },
  nextPath: 'css-borders', prevPath: 'css-colors'
},

// CSS BORDERS
'css-borders': {
  courseId: 'css', title: 'CSS Borders', chapter: 'CSS Tutorial', color: 'blue',
  theory: `
    <h2>CSS Borders</h2>
    <p>CSS border properties memungkinkan kamu menentukan style, lebar, dan warna border elemen.</p>
    <h3>Border Style</h3>
    <ul>
      <li><code>solid</code> "” garis solid</li>
      <li><code>dashed</code> "” garis putus-putus</li>
      <li><code>dotted</code> "” titik-titik</li>
      <li><code>double</code> "” garis ganda</li>
      <li><code>none</code> "” tidak ada border</li>
    </ul>
    <h3>Shorthand Border</h3>
    <div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
      <span class="text-blue-600">border</span>: <span class="text-green-600">2px solid #6366f1</span>;
    </div>
    <h3>Border Individual Sisi</h3>
    <div class="bg-slate-100 rounded-xl p-4 font-mono text-sm">
      <span class="text-blue-600">border-top</span>: <span class="text-green-600">3px solid red</span>;<br/>
      <span class="text-blue-600">border-right</span>: <span class="text-green-600">3px dashed blue</span>;<br/>
      <span class="text-blue-600">border-bottom</span>: <span class="text-green-600">3px dotted green</span>;<br/>
      <span class="text-blue-600">border-left</span>: <span class="text-green-600">3px double orange</span>;
    </div>
  `,
  code: `<!DOCTYPE html>
<html>
<head>
<style>
  body { font-family: Arial, sans-serif; padding: 20px; background: #f8fafc; }
  .box {
    padding: 16px 20px;
    margin: 10px 0;
    border-radius: 8px;
    background: white;
    font-size: 0.9rem;
    color: #334155;
  }
  .solid  { border: 3px solid #6366f1; }
  .dashed { border: 3px dashed #f59e0b; }
  .dotted { border: 3px dotted #22c55e; }
  .double { border: 6px double #ef4444; }
  .mixed  {
    border-top: 4px solid #6366f1;
    border-right: 4px dashed #8b5cf6;
    border-bottom: 4px dotted #ec4899;
    border-left: 4px double #f59e0b;
  }
  .rounded { border: 2px solid #6366f1; border-radius: 999px; }
</style>
</head>
<body>
  <div class="box solid">border: 3px solid #6366f1</div>
  <div class="box dashed">border: 3px dashed #f59e0b</div>
  <div class="box dotted">border: 3px dotted #22c55e</div>
  <div class="box double">border: 6px double #ef4444</div>
  <div class="box mixed">border berbeda tiap sisi</div>
  <div class="box rounded">border-radius: 999px (pill shape)</div>
</body>
</html>`,
  quiz: { question: 'Shorthand yang benar untuk border adalah?', options: ['border: color style width', 'border: width style color', 'border: style width color', 'border: color width style'], correctIndex: 1, explanation: 'Urutan shorthand border: width style color. Contoh: border: 2px solid red.' },
  nextPath: 'css-margins', prevPath: 'css-backgrounds'
},

// CSS MARGINS
'css-margins': {
  courseId: 'css', title: 'CSS Margins', chapter: 'CSS Tutorial', color: 'blue',
  theory: `
    <h2>CSS Margins</h2>
    <p>Margin adalah ruang di <strong>luar</strong> border elemen. Margin transparan (tidak berwarna).</p>
    <h3>Individual Margin</h3>
    <div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
      <span class="text-blue-600">margin-top</span>: <span class="text-green-600">20px</span>;<br/>
      <span class="text-blue-600">margin-right</span>: <span class="text-green-600">10px</span>;<br/>
      <span class="text-blue-600">margin-bottom</span>: <span class="text-green-600">20px</span>;<br/>
      <span class="text-blue-600">margin-left</span>: <span class="text-green-600">10px</span>;
    </div>
    <h3>Shorthand Margin</h3>
    <ul>
      <li><code>margin: 20px</code> "” semua sisi 20px</li>
      <li><code>margin: 20px 10px</code> "” atas-bawah 20px, kiri-kanan 10px</li>
      <li><code>margin: 10px 20px 30px</code> "” atas 10px, kiri-kanan 20px, bawah 30px</li>
      <li><code>margin: 10px 20px 30px 40px</code> "” atas, kanan, bawah, kiri (searah jarum jam)</li>
    </ul>
    <h3>Auto Margin (Centering)</h3>
    <div class="bg-indigo-50 border border-indigo-500 rounded-xl p-4 font-mono text-sm">
      <span class="text-blue-600">margin</span>: <span class="text-green-600">0 auto</span>; <span class="text-slate-400">/* center horizontal */</span>
    </div>
  `,
  code: `<!DOCTYPE html>
<html>
<head>
<style>
  body { font-family: Arial, sans-serif; background: #e2e8f0; }
  .container { background: #cbd5e1; padding: 4px; }
  .box {
    background: #6366f1;
    color: white;
    padding: 16px;
    font-size: 0.85rem;
    font-weight: bold;
    border-radius: 8px;
  }
  .m1 { margin: 8px; }
  .m2 { margin: 20px 40px; }
  .m3 { margin: 10px 20px 30px 40px; }
  .center {
    background: #22c55e;
    width: 200px;
    margin: 16px auto; /* centering */
    padding: 16px;
    color: white;
    font-weight: bold;
    border-radius: 8px;
    text-align: center;
  }
</style>
</head>
<body>
  <div class="container">
    <div class="box m1">margin: 8px (semua sisi)</div>
  </div>
  <div class="container" style="margin-top:8px">
    <div class="box m2">margin: 20px 40px (atas-bawah kiri-kanan)</div>
  </div>
  <div class="container" style="margin-top:8px">
    <div class="box m3">margin: 10px 20px 30px 40px</div>
  </div>
  <div class="center">margin: auto (centered)</div>
</body>
</html>`,
  quiz: { question: 'Bagaimana cara membuat elemen berada di tengah secara horizontal menggunakan margin?', options: ['margin: center', 'margin: 0 auto', 'margin: auto 0', 'text-align: center'], correctIndex: 1, explanation: 'margin: 0 auto membuat elemen berada di tengah secara horizontal (elemen harus punya width).' },
  nextPath: 'css-padding', prevPath: 'css-borders'
},

// CSS PADDING
'css-padding': {
  courseId: 'css', title: 'CSS Padding', chapter: 'CSS Tutorial', color: 'blue',
  theory: `
    <h2>CSS Padding</h2>
    <p>Padding adalah ruang di <strong>dalam</strong> border elemen, antara konten dan border.</p>
    <h3>Perbedaan Margin vs Padding</h3>
    <div class="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-4">
      <p class="text-orange-900"><strong>Margin</strong> = ruang di LUAR border (antara elemen)</p>
      <p class="text-orange-900"><strong>Padding</strong> = ruang di DALAM border (antara konten dan border)</p>
    </div>
    <h3>Shorthand Padding</h3>
    <ul>
      <li><code>padding: 20px</code> "” semua sisi</li>
      <li><code>padding: 10px 20px</code> "” atas-bawah, kiri-kanan</li>
      <li><code>padding: 10px 20px 30px 40px</code> "” atas, kanan, bawah, kiri</li>
    </ul>
    <div class="bg-indigo-50 border border-indigo-500 rounded-xl p-4 mt-4">
      <p class="text-indigo-900"><strong>Catatan:</strong> Padding menambah ukuran total elemen kecuali menggunakan <code>box-sizing: border-box</code>.</p>
    </div>
  `,
  code: `<!DOCTYPE html>
<html>
<head>
<style>
  body { font-family: Arial, sans-serif; padding: 20px; background: #f1f5f9; }
  .demo {
    background: #6366f1;
    color: white;
    border: 3px solid #4338ca;
    border-radius: 8px;
    margin: 12px 0;
    font-size: 0.85rem;
    font-weight: bold;
  }
  .p0  { padding: 0; }
  .p1  { padding: 8px; }
  .p2  { padding: 16px; }
  .p3  { padding: 24px 48px; }
  .p4  { padding: 8px 16px 24px 32px; }
</style>
</head>
<body>
  <div class="demo p0">padding: 0</div>
  <div class="demo p1">padding: 8px</div>
  <div class="demo p2">padding: 16px</div>
  <div class="demo p3">padding: 24px 48px (atas-bawah kiri-kanan)</div>
  <div class="demo p4">padding: 8px 16px 24px 32px (atas kanan bawah kiri)</div>
</body>
</html>`,
  quiz: { question: 'Padding berada di mana relatif terhadap border?', options: ['Di luar border', 'Di dalam border', 'Sama dengan margin', 'Di antara dua elemen'], correctIndex: 1, explanation: 'Padding adalah ruang di dalam border, antara konten dan border elemen.' },
  nextPath: 'css-height-width', prevPath: 'css-margins'
},

// CSS HEIGHT / WIDTH
'css-height-width': {
  courseId: 'css', title: 'CSS Height / Width', chapter: 'CSS Tutorial', color: 'blue',
  theory: `
    <h2>CSS Height dan Width</h2>
    <p>Properties <code>height</code> dan <code>width</code> digunakan untuk mengatur ukuran elemen.</p>
    <h3>Nilai yang Bisa Digunakan</h3>
    <ul>
      <li><code>auto</code> "” browser menghitung otomatis (default)</li>
      <li><code>px</code> "” ukuran tetap dalam pixel</li>
      <li><code>%</code> "” persentase dari elemen induk</li>
      <li><code>vw / vh</code> "” persentase dari viewport width/height</li>
      <li><code>em / rem</code> "” relatif terhadap font-size</li>
    </ul>
    <h3>Max dan Min</h3>
    <div class="bg-slate-100 rounded-xl p-4 font-mono text-sm">
      <span class="text-blue-600">max-width</span>: <span class="text-green-600">800px</span>; <span class="text-slate-400">/* tidak lebih dari 800px */</span><br/>
      <span class="text-blue-600">min-height</span>: <span class="text-green-600">200px</span>; <span class="text-slate-400">/* minimal 200px */</span>
    </div>
  `,
  code: `<!DOCTYPE html>
<html>
<head>
<style>
  body { font-family: Arial, sans-serif; padding: 20px; background: #f8fafc; }
  .box {
    background: #6366f1;
    color: white;
    border-radius: 8px;
    margin: 10px 0;
    padding: 12px;
    font-size: 0.8rem;
    font-weight: bold;
  }
  .w100  { width: 100px; }
  .w50p  { width: 50%; }
  .w100p { width: 100%; }
  .h50   { height: 50px; width: 100%; display: flex; align-items: center; }
  .h100  { height: 100px; width: 100%; display: flex; align-items: center; }
  .maxw  { max-width: 300px; background: #22c55e; }
  .minw  { min-width: 200px; width: auto; display: inline-block; background: #f59e0b; color: #1a1a1a; }
</style>
</head>
<body>
  <div class="box w100">width: 100px</div>
  <div class="box w50p">width: 50%</div>
  <div class="box w100p">width: 100%</div>
  <div class="box h50">height: 50px</div>
  <div class="box h100">height: 100px</div>
  <div class="box maxw">max-width: 300px</div>
  <div class="box minw">min-width: 200px</div>
</body>
</html>`,
  quiz: { question: 'Apa fungsi dari property max-width?', options: ['Mengatur lebar minimum elemen', 'Membatasi lebar maksimum elemen', 'Mengatur lebar tetap elemen', 'Menyembunyikan elemen yang terlalu lebar'], correctIndex: 1, explanation: 'max-width membatasi lebar maksimum elemen sehingga tidak melebihi nilai yang ditentukan.' },
  nextPath: 'css-box-model', prevPath: 'css-padding'
},

// CSS BOX MODEL
'css-box-model': {
  courseId: 'css', title: 'CSS Box Model', chapter: 'CSS Tutorial', color: 'blue',
  theory: `
    <h2>CSS Box Model</h2>
    <p>Semua elemen HTML adalah sebuah "kotak". Box Model CSS mendeskripsikan kotak yang membungkus setiap elemen HTML.</p>
    <div class="bg-slate-100 rounded-xl p-6 mb-6 text-center font-mono text-sm">
      <div style="border:2px dashed #94a3b8; padding:16px; border-radius:8px;">
        <span class="text-slate-500">MARGIN</span>
        <div style="border:2px solid #f59e0b; padding:12px; margin:8px; border-radius:6px; background:#fef3c7;">
          <span class="text-amber-700">BORDER</span>
          <div style="border:2px dashed #22c55e; padding:10px; margin:8px; border-radius:4px; background:#f0fdf4;">
            <span class="text-green-700">PADDING</span>
            <div style="background:#dbeafe; padding:8px; margin:8px; border-radius:4px;">
              <span class="text-blue-700">CONTENT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h3>Komponen Box Model</h3>
    <ul>
      <li><strong>Content</strong> "” area konten (teks, gambar)</li>
      <li><strong>Padding</strong> "” ruang di dalam border</li>
      <li><strong>Border</strong> "” garis di sekitar padding</li>
      <li><strong>Margin</strong> "” ruang di luar border</li>
    </ul>
    <h3>box-sizing: border-box</h3>
    <div class="bg-indigo-50 border border-indigo-500 rounded-xl p-4">
      <p class="text-indigo-900">Dengan <code>box-sizing: border-box</code>, padding dan border dihitung di DALAM width/height yang ditentukan.</p>
    </div>
  `,
  code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { box-sizing: border-box; }
  body { font-family: Arial, sans-serif; padding: 20px; background: #f1f5f9; }

  .box-demo {
    width: 300px;
    height: 150px;
    background: #6366f1;
    color: white;
    padding: 20px;
    border: 4px solid #4338ca;
    margin: 20px auto;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    text-align: center;
    font-size: 0.85rem;
  }

  .info {
    max-width: 300px;
    margin: 0 auto;
    background: white;
    border-radius: 12px;
    padding: 16px;
    font-size: 0.8rem;
    color: #475569;
  }
  .info div { display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px solid #f1f5f9; }
  .info span { font-weight: bold; color: #1e293b; }
</style>
</head>
<body>
  <div class="box-demo">
    Content Area<br/>(box-sizing: border-box)
  </div>
  <div class="info">
    <div><span>Width:</span> 300px (total)</div>
    <div><span>Padding:</span> 20px semua sisi</div>
    <div><span>Border:</span> 4px solid</div>
    <div><span>Content:</span> 300 - 40 - 8 = 252px</div>
  </div>
</body>
</html>`,
  quiz: { question: 'Dengan box-sizing: border-box, apa yang terjadi pada padding dan border?', options: ['Ditambahkan ke luar width', 'Dihitung di dalam width yang ditentukan', 'Diabaikan', 'Otomatis menjadi 0'], correctIndex: 1, explanation: 'box-sizing: border-box membuat padding dan border dihitung di dalam total width/height.' },
  nextPath: 'css-outline', prevPath: 'css-height-width'
},

// CSS TEXT
'css-text': {
  courseId: 'css', title: 'CSS Text', chapter: 'CSS Tutorial', color: 'blue',
  theory: `
    <h2>CSS Text</h2>
    <p>CSS menyediakan banyak properties untuk mengatur tampilan teks.</p>
    <h3>Properties Teks Utama</h3>
    <ul>
      <li><code>color</code> "” warna teks</li>
      <li><code>text-align</code> "” perataan (left, right, center, justify)</li>
      <li><code>text-decoration</code> "” dekorasi (underline, overline, line-through, none)</li>
      <li><code>text-transform</code> "” transformasi (uppercase, lowercase, capitalize)</li>
      <li><code>text-indent</code> "” indentasi baris pertama</li>
      <li><code>letter-spacing</code> "” jarak antar huruf</li>
      <li><code>word-spacing</code> "” jarak antar kata</li>
      <li><code>line-height</code> "” tinggi baris</li>
      <li><code>text-shadow</code> "” bayangan teks</li>
    </ul>
  `,
  code: `<!DOCTYPE html>
<html>
<head>
<style>
  body { font-family: Arial, sans-serif; padding: 24px; background: #f8fafc; }
  .demo { background: white; border-radius: 12px; padding: 16px; margin: 10px 0; border: 1px solid #e2e8f0; }
  .label { font-size: 0.7rem; font-weight: bold; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 6px; }

  .t1 { color: #6366f1; font-size: 1.5rem; font-weight: bold; }
  .t2 { text-align: center; color: #334155; }
  .t3 { text-decoration: underline; color: #22c55e; }
  .t4 { text-transform: uppercase; letter-spacing: 0.2em; color: #f59e0b; font-weight: bold; }
  .t5 { line-height: 2; color: #475569; }
  .t6 { text-shadow: 2px 2px 4px rgba(99,102,241,0.4); font-size: 1.5rem; font-weight: black; color: #6366f1; }
</style>
</head>
<body>
  <div class="demo"><div class="label">color + font-size</div><p class="t1">Teks Berwarna Indigo</p></div>
  <div class="demo"><div class="label">text-align: center</div><p class="t2">Teks di tengah</p></div>
  <div class="demo"><div class="label">text-decoration: underline</div><p class="t3">Teks bergaris bawah</p></div>
  <div class="demo"><div class="label">text-transform + letter-spacing</div><p class="t4">uppercase dengan spasi</p></div>
  <div class="demo"><div class="label">line-height: 2</div><p class="t5">Teks dengan jarak baris yang lebih lebar untuk keterbacaan yang lebih baik.</p></div>
  <div class="demo"><div class="label">text-shadow</div><p class="t6">Teks dengan Shadow</p></div>
</body>
</html>`,
  quiz: { question: 'Property CSS mana yang digunakan untuk membuat teks menjadi HURUF KAPITAL semua?', options: ['text-decoration: uppercase', 'font-style: uppercase', 'text-transform: uppercase', 'text-case: upper'], correctIndex: 2, explanation: 'text-transform: uppercase mengubah semua huruf menjadi kapital.' },
  nextPath: 'css-fonts', prevPath: 'css-outline'
},

// CSS FONTS
'css-fonts': {
  courseId: 'css', title: 'CSS Fonts', chapter: 'CSS Tutorial', color: 'blue',
  theory: `
    <h2>CSS Fonts</h2>
    <p>CSS font properties mendefinisikan font family, ukuran, ketebalan, dan style teks.</p>
    <h3>Font Family</h3>
    <div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
      <span class="text-blue-600">font-family</span>: <span class="text-green-600">"Helvetica Neue", Arial, sans-serif</span>;
    </div>
    <p>Selalu sediakan beberapa font sebagai fallback. Akhiri dengan generic family: <code>serif</code>, <code>sans-serif</code>, <code>monospace</code>.</p>
    <h3>Google Fonts</h3>
    <div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
      &lt;<span class="text-blue-600">link</span> href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet"&gt;
    </div>
    <h3>Properties Font</h3>
    <ul>
      <li><code>font-size</code> "” ukuran font (px, rem, em, %)</li>
      <li><code>font-weight</code> "” ketebalan (normal, bold, 100-900)</li>
      <li><code>font-style</code> "” style (normal, italic, oblique)</li>
      <li><code>font-variant</code> "” small-caps</li>
    </ul>
  `,
  code: `<!DOCTYPE html>
<html>
<head>
<style>
  body { padding: 24px; background: #f8fafc; }
  .demo { background: white; border-radius: 12px; padding: 16px; margin: 10px 0; border: 1px solid #e2e8f0; }
  .label { font-size: 0.7rem; font-weight: bold; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px; }

  .f1 { font-family: Georgia, serif; font-size: 1.3rem; color: #1e293b; }
  .f2 { font-family: Arial, sans-serif; font-size: 1.3rem; color: #1e293b; }
  .f3 { font-family: 'Courier New', monospace; font-size: 1.1rem; color: #6366f1; }
  .f4 { font-size: 2rem; font-weight: 900; color: #1e293b; }
  .f5 { font-size: 0.85rem; font-weight: 300; color: #64748b; }
  .f6 { font-style: italic; font-size: 1.2rem; color: #8b5cf6; }
</style>
</head>
<body>
  <div class="demo"><div class="label">Serif Font</div><p class="f1">Georgia "” font serif klasik</p></div>
  <div class="demo"><div class="label">Sans-serif Font</div><p class="f2">Arial "” font sans-serif modern</p></div>
  <div class="demo"><div class="label">Monospace Font</div><p class="f3">Courier New "” font monospace untuk kode</p></div>
  <div class="demo"><div class="label">font-weight: 900</div><p class="f4">Super Bold Text</p></div>
  <div class="demo"><div class="label">font-weight: 300</div><p class="f5">Light weight text untuk body copy yang panjang</p></div>
  <div class="demo"><div class="label">font-style: italic</div><p class="f6">Teks miring untuk penekanan</p></div>
</body>
</html>`,
  quiz: { question: 'Apa fungsi dari font-weight: bold?', options: ['Membuat teks miring', 'Membuat teks tebal', 'Mengubah ukuran font', 'Mengubah jenis font'], correctIndex: 1, explanation: 'font-weight: bold membuat teks menjadi tebal.' },
  nextPath: 'css-display', prevPath: 'css-text'
},

// CSS DISPLAY
'css-display': {
  courseId: 'css', title: 'CSS Display', chapter: 'CSS Tutorial', color: 'blue',
  theory: `
    <h2>CSS Display</h2>
    <p>Property <code>display</code> menentukan bagaimana elemen ditampilkan di halaman.</p>
    <h3>Nilai Display Utama</h3>
    <ul>
      <li><code>block</code> "” elemen mengambil lebar penuh, mulai baris baru (div, p, h1)</li>
      <li><code>inline</code> "” elemen hanya selebar kontennya, tidak mulai baris baru (span, a)</li>
      <li><code>inline-block</code> "” seperti inline tapi bisa punya width/height</li>
      <li><code>flex</code> "” flexbox layout</li>
      <li><code>grid</code> "” grid layout</li>
      <li><code>none</code> "” elemen disembunyikan (tidak ada di layout)</li>
    </ul>
    <div class="bg-orange-50 border border-orange-200 rounded-xl p-4 mt-4">
      <p class="text-orange-900"><strong>display: none</strong> vs <strong>visibility: hidden</strong>: none menghapus elemen dari layout, hidden menyembunyikan tapi tetap mengambil ruang.</p>
    </div>
  `,
  code: `<!DOCTYPE html>
<html>
<head>
<style>
  body { font-family: Arial, sans-serif; padding: 20px; background: #f8fafc; }
  .label { font-size: 0.7rem; font-weight: bold; color: #94a3b8; text-transform: uppercase; margin-bottom: 8px; }
  .section { background: white; border-radius: 12px; padding: 16px; margin: 12px 0; border: 1px solid #e2e8f0; }

  /* Block elements */
  .block-demo { display: block; background: #dbeafe; padding: 8px 12px; border-radius: 6px; margin: 4px 0; color: #1e40af; font-size: 0.85rem; }

  /* Inline elements */
  .inline-demo { display: inline; background: #fef3c7; padding: 4px 8px; border-radius: 4px; color: #92400e; font-size: 0.85rem; margin: 2px; }

  /* Inline-block */
  .iblock { display: inline-block; width: 80px; height: 60px; background: #d1fae5; border-radius: 8px; margin: 4px; text-align: center; line-height: 60px; font-size: 0.75rem; color: #065f46; font-weight: bold; }

  /* Flex */
  .flex-demo { display: flex; gap: 8px; }
  .flex-item { flex: 1; background: #ede9fe; padding: 12px; border-radius: 8px; text-align: center; font-size: 0.8rem; color: #5b21b6; font-weight: bold; }
</style>
</head>
<body>
  <div class="section">
    <div class="label">display: block</div>
    <div class="block-demo">Block 1 (lebar penuh)</div>
    <div class="block-demo">Block 2 (baris baru)</div>
  </div>
  <div class="section">
    <div class="label">display: inline</div>
    <span class="inline-demo">Inline 1</span>
    <span class="inline-demo">Inline 2</span>
    <span class="inline-demo">Inline 3</span>
  </div>
  <div class="section">
    <div class="label">display: inline-block</div>
    <div class="iblock">Box 1</div>
    <div class="iblock">Box 2</div>
    <div class="iblock">Box 3</div>
  </div>
  <div class="section">
    <div class="label">display: flex</div>
    <div class="flex-demo">
      <div class="flex-item">Flex 1</div>
      <div class="flex-item">Flex 2</div>
      <div class="flex-item">Flex 3</div>
    </div>
  </div>
</body>
</html>`,
  quiz: { question: 'Apa perbedaan display: none dan visibility: hidden?', options: ['Tidak ada perbedaan', 'none menghapus dari layout, hidden tetap mengambil ruang', 'hidden menghapus dari layout, none tetap mengambil ruang', 'Keduanya menghapus dari layout'], correctIndex: 1, explanation: 'display: none menghapus elemen dari layout sepenuhnya, sedangkan visibility: hidden menyembunyikan elemen tapi tetap mengambil ruang.' },
  nextPath: 'css-position', prevPath: 'css-fonts'
},

// CSS POSITION
'css-position': {
  courseId: 'css', title: 'CSS Position', chapter: 'CSS Tutorial', color: 'blue',
  theory: `
    <h2>CSS Position</h2>
    <p>Property <code>position</code> menentukan metode positioning yang digunakan untuk elemen.</p>
    <h3>Nilai Position</h3>
    <ul>
      <li><code>static</code> "” default, mengikuti alur normal dokumen</li>
      <li><code>relative</code> "” relatif terhadap posisi normalnya</li>
      <li><code>absolute</code> "” relatif terhadap ancestor positioned terdekat</li>
      <li><code>fixed</code> "” relatif terhadap viewport, tidak bergerak saat scroll</li>
      <li><code>sticky</code> "” kombinasi relative dan fixed</li>
    </ul>
    <h3>Offset Properties</h3>
    <p>Digunakan bersama position (kecuali static): <code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code></p>
  `,
  code: `<!DOCTYPE html>
<html>
<head>
<style>
  body { font-family: Arial, sans-serif; padding: 20px; background: #f8fafc; }
  .container { position: relative; height: 200px; background: #e2e8f0; border-radius: 12px; margin: 12px 0; overflow: hidden; }
  .label { font-size: 0.7rem; font-weight: bold; color: #94a3b8; text-transform: uppercase; margin-bottom: 8px; }
  .box { padding: 8px 14px; border-radius: 8px; font-size: 0.8rem; font-weight: bold; color: white; }

  .static-box { background: #6366f1; display: inline-block; }
  .relative-box { position: relative; top: 20px; left: 30px; background: #22c55e; display: inline-block; }
  .absolute-box { position: absolute; top: 20px; right: 20px; background: #ef4444; }
  .absolute-box2 { position: absolute; bottom: 20px; left: 20px; background: #f59e0b; }
</style>
</head>
<body>
  <div class="label">position: static (default)</div>
  <div class="box static-box">Static "” alur normal</div>

  <div class="label" style="margin-top:16px">position: relative</div>
  <div class="box relative-box">Relative "” geser 20px bawah, 30px kanan</div>

  <div class="label" style="margin-top:36px">position: absolute (dalam container relative)</div>
  <div class="container">
    <div class="box absolute-box">Absolute "” top:20 right:20</div>
    <div class="box absolute-box2">Absolute "” bottom:20 left:20</div>
    <span style="color:#94a3b8; font-size:0.8rem; padding:8px;">Container (position: relative)</span>
  </div>
</body>
</html>`,
  quiz: { question: 'Elemen dengan position: fixed akan...', options: ['Bergerak mengikuti scroll', 'Tetap di posisi yang sama meski halaman di-scroll', 'Mengikuti posisi parent-nya', 'Mengikuti alur normal dokumen'], correctIndex: 1, explanation: 'position: fixed membuat elemen tetap di posisi yang sama relatif terhadap viewport, tidak bergerak saat scroll.' },
  nextPath: 'css-flexbox-intro', prevPath: 'css-display'
},
// CSS FLEXBOX INTRO
'css-flexbox-intro': {
  courseId: 'css', title: 'Flexbox Intro', chapter: 'CSS Flexbox', color: 'blue',
  theory: `<h2>CSS Flexbox</h2><p>Flexbox adalah metode layout satu dimensi untuk mengatur item dalam baris atau kolom.</p><h3>Mengaktifkan Flexbox</h3><div class='bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4'><span class='text-blue-600'>display</span>: <span class='text-green-600'>flex</span>;</div><h3>Konsep Utama</h3><ul><li><strong>Flex Container</strong> "” elemen induk dengan display: flex</li><li><strong>Flex Items</strong> "” elemen anak langsung dari flex container</li><li><strong>Main Axis</strong> "” sumbu utama (default: horizontal)</li><li><strong>Cross Axis</strong> "” sumbu silang (default: vertical)</li></ul><h3>Properties Container</h3><ul><li><code>flex-direction</code> "” row, column, row-reverse, column-reverse</li><li><code>justify-content</code> "” perataan di main axis</li><li><code>align-items</code> "” perataan di cross axis</li><li><code>flex-wrap</code> "” wrap atau nowrap</li><li><code>gap</code> "” jarak antar item</li></ul>`,
  code: `<!DOCTYPE html><html><head><style>body{font-family:Arial,sans-serif;padding:20px;background:#f8fafc;}.label{font-size:0.7rem;font-weight:bold;color:#94a3b8;text-transform:uppercase;margin-bottom:8px;}.section{background:white;border-radius:12px;padding:16px;margin:12px 0;border:1px solid #e2e8f0;}.flex{display:flex;gap:8px;}.item{background:#6366f1;color:white;padding:12px 16px;border-radius:8px;font-weight:bold;font-size:0.85rem;}.center{justify-content:center;}.between{justify-content:space-between;}.column{flex-direction:column;}.wrap{flex-wrap:wrap;}</style></head><body><div class='section'><div class='label'>justify-content: flex-start (default)</div><div class='flex'><div class='item'>1</div><div class='item'>2</div><div class='item'>3</div></div></div><div class='section'><div class='label'>justify-content: center</div><div class='flex center'><div class='item'>1</div><div class='item'>2</div><div class='item'>3</div></div></div><div class='section'><div class='label'>justify-content: space-between</div><div class='flex between'><div class='item'>1</div><div class='item'>2</div><div class='item'>3</div></div></div><div class='section'><div class='label'>flex-direction: column</div><div class='flex column'><div class='item'>Item 1</div><div class='item'>Item 2</div></div></div></body></html>`,
  quiz: { question: 'Property apa yang digunakan untuk mengaktifkan Flexbox?', options: ['position: flex', 'display: flex', 'layout: flex', 'flex: true'], correctIndex: 1, explanation: 'display: flex mengaktifkan flexbox pada container.' },
  nextPath: 'css-flex-container', prevPath: 'css-position'
},

};


export const remainingLessons: Record<string, any> = {

// ── CSS OUTLINE ──────────────────────────────
'css-outline': {
  courseId:'css', title:'CSS Outline', chapter:'CSS Tutorial', color:'blue',
  theory:`<h2>CSS Outline</h2>
<p>Outline adalah garis yang digambar di <strong>luar</strong> border elemen. Berbeda dengan border, outline tidak mempengaruhi ukuran atau posisi elemen.</p>
<h3>Properties Outline</h3>
<ul>
  <li><code>outline-style</code> - solid, dashed, dotted, double, groove, ridge, inset, outset</li>
  <li><code>outline-color</code> - warna outline</li>
  <li><code>outline-width</code> - ketebalan outline</li>
  <li><code>outline-offset</code> - jarak antara outline dan border</li>
</ul>
<h3>Shorthand</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm">
  <span class="text-blue-600">outline</span>: <span class="text-green-600">3px solid #6366f1</span>;
</div>
<div class="bg-orange-50 border border-orange-200 rounded-xl p-4 mt-4">
  <p class="text-orange-900"><strong>Perbedaan Outline vs Border:</strong> Outline tidak mengambil ruang layout, border mengambil ruang.</p>
</div>`,
  code:`<!DOCTYPE html>
<html><head><style>
body { font-family: Arial, sans-serif; padding: 24px; background: #f8fafc; }
.box { padding: 16px 20px; margin: 12px 0; background: white; border-radius: 8px; font-size: 0.9rem; color: #334155; }
.o1 { outline: 3px solid #6366f1; }
.o2 { outline: 3px dashed #f59e0b; }
.o3 { outline: 3px dotted #22c55e; }
.o4 { outline: 3px solid #ef4444; outline-offset: 6px; }
.o5 { border: 2px solid #6366f1; outline: 3px solid #f59e0b; outline-offset: 4px; }
</style></head><body>
<div class="box o1">outline: 3px solid indigo</div>
<div class="box o2">outline: 3px dashed amber</div>
<div class="box o3">outline: 3px dotted green</div>
<div class="box o4">outline dengan offset 6px</div>
<div class="box o5">border + outline bersamaan</div>
</body></html>`,
  quiz:{ question:'Apa perbedaan utama outline dengan border?', options:['Outline lebih tebal','Outline tidak mempengaruhi ukuran/posisi elemen','Outline hanya untuk teks','Outline tidak bisa berwarna'], correctIndex:1, explanation:'Outline digambar di luar border dan tidak mempengaruhi layout elemen.' },
  prevPath:'css-box-model', nextPath:'css-text'
},

// ── CSS ICONS ────────────────────────────────
'css-icons': {
  courseId:'css', title:'CSS Icons', chapter:'CSS Tutorial', color:'blue',
  theory:`<h2>CSS Icons</h2>
<p>Cara termudah menambahkan icon ke halaman HTML adalah menggunakan icon library seperti Font Awesome atau Google Material Icons.</p>
<h3>Font Awesome</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  &lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"&gt;
</div>
<h3>Cara Pakai</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  &lt;<span class="text-blue-600">i</span> <span class="text-purple-600">class</span>="<span class="text-green-600">fa-solid fa-house</span>"&gt;&lt;/<span class="text-blue-600">i</span>&gt;
</div>
<h3>Styling Icon dengan CSS</h3>
<ul>
  <li>Ubah ukuran: <code>font-size: 2rem</code></li>
  <li>Ubah warna: <code>color: #6366f1</code></li>
  <li>Tambah shadow: <code>text-shadow</code></li>
</ul>`,
  code:`<!DOCTYPE html>
<html><head>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
<style>
body { font-family: Arial, sans-serif; padding: 24px; background: #f8fafc; }
.icon-grid { display: flex; flex-wrap: wrap; gap: 16px; }
.icon-card {
  background: white; border-radius: 12px; padding: 20px;
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  border: 1px solid #e2e8f0; min-width: 80px;
}
.icon-card i { font-size: 1.8rem; }
.icon-card span { font-size: 0.7rem; color: #94a3b8; }
.blue { color: #3b82f6; }
.red { color: #ef4444; }
.green { color: #22c55e; }
.purple { color: #8b5cf6; }
.orange { color: #f59e0b; }
</style></head><body>
<h2 style="color:#1e293b;margin-bottom:16px">Font Awesome Icons</h2>
<div class="icon-grid">
  <div class="icon-card"><i class="fa-solid fa-house blue"></i><span>fa-house</span></div>
  <div class="icon-card"><i class="fa-solid fa-heart red"></i><span>fa-heart</span></div>
  <div class="icon-card"><i class="fa-solid fa-star orange"></i><span>fa-star</span></div>
  <div class="icon-card"><i class="fa-solid fa-user purple"></i><span>fa-user</span></div>
  <div class="icon-card"><i class="fa-solid fa-check green"></i><span>fa-check</span></div>
  <div class="icon-card"><i class="fa-solid fa-code blue"></i><span>fa-code</span></div>
  <div class="icon-card"><i class="fa-brands fa-github" style="color:#1e293b"></i><span>fa-github</span></div>
  <div class="icon-card"><i class="fa-solid fa-rocket purple"></i><span>fa-rocket</span></div>
</div>
</body></html>`,
  quiz:{ question:'Bagaimana cara mengubah ukuran icon Font Awesome dengan CSS?', options:['icon-size: 2rem','width: 2rem','font-size: 2rem','size: 2rem'], correctIndex:2, explanation:'Icon Font Awesome adalah font, jadi diubah ukurannya dengan font-size.' },
  prevPath:'css-fonts', nextPath:'css-links'
},

// ── CSS LINKS ────────────────────────────────
'css-links': {
  courseId:'css', title:'CSS Links', chapter:'CSS Tutorial', color:'blue',
  theory:`<h2>CSS Links</h2>
<p>Link dapat di-style dengan CSS. Link memiliki 4 state yang bisa di-style berbeda.</p>
<h3>4 State Link</h3>
<ul>
  <li><code>a:link</code> - link normal yang belum dikunjungi</li>
  <li><code>a:visited</code> - link yang sudah dikunjungi</li>
  <li><code>a:hover</code> - saat mouse di atas link</li>
  <li><code>a:active</code> - saat link diklik</li>
</ul>
<div class="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-4">
  <p class="text-orange-900"><strong>Urutan penting!</strong> Gunakan urutan: link, visited, hover, active (LoVe HAte).</p>
</div>
<h3>Menghilangkan Underline</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm">
  <span class="text-red-600">a</span> { <span class="text-blue-600">text-decoration</span>: <span class="text-green-600">none</span>; }
</div>`,
  code:`<!DOCTYPE html>
<html><head><style>
body { font-family: Arial, sans-serif; padding: 24px; background: #f8fafc; }
.demo { background: white; border-radius: 12px; padding: 20px; margin: 12px 0; border: 1px solid #e2e8f0; }
.label { font-size: 0.7rem; font-weight: bold; color: #94a3b8; text-transform: uppercase; margin-bottom: 10px; }

/* Style 1: Classic */
.link1 { color: #6366f1; text-decoration: none; font-weight: bold; }
.link1:hover { color: #4338ca; text-decoration: underline; }

/* Style 2: Button-like */
.link2 {
  display: inline-block; background: #6366f1; color: white;
  padding: 8px 20px; border-radius: 8px; text-decoration: none;
  font-weight: bold; transition: background 0.2s;
}
.link2:hover { background: #4338ca; }

/* Style 3: Underline animation */
.link3 {
  color: #1e293b; text-decoration: none; font-weight: bold;
  border-bottom: 2px solid transparent; transition: border-color 0.2s;
}
.link3:hover { border-bottom-color: #6366f1; color: #6366f1; }
</style></head><body>
<div class="demo">
  <div class="label">Classic Link</div>
  <a href="#" class="link1">Klik link ini</a>
</div>
<div class="demo">
  <div class="label">Button-style Link</div>
  <a href="#" class="link2">Tombol Link</a>
</div>
<div class="demo">
  <div class="label">Underline Animation</div>
  <a href="#" class="link3">Hover untuk efek underline</a>
</div>
</body></html>`,
  quiz:{ question:'Pseudo-class mana yang aktif saat mouse berada di atas link?', options:['a:link','a:visited','a:hover','a:active'], correctIndex:2, explanation:'a:hover aktif saat mouse berada di atas elemen link.' },
  prevPath:'css-icons', nextPath:'css-lists'
},

// ── CSS LISTS ────────────────────────────────
'css-lists': {
  courseId:'css', title:'CSS Lists', chapter:'CSS Tutorial', color:'blue',
  theory:`<h2>CSS Lists</h2>
<p>CSS menyediakan beberapa properties untuk mengatur tampilan list HTML.</p>
<h3>Properties List</h3>
<ul>
  <li><code>list-style-type</code> - tipe marker (disc, circle, square, decimal, none)</li>
  <li><code>list-style-image</code> - gambar sebagai marker</li>
  <li><code>list-style-position</code> - inside atau outside</li>
</ul>
<h3>Shorthand</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  <span class="text-blue-600">list-style</span>: <span class="text-green-600">square inside</span>;
</div>
<h3>Menghilangkan Default Style</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm">
  <span class="text-red-600">ul</span> { <span class="text-blue-600">list-style</span>: <span class="text-green-600">none</span>; <span class="text-blue-600">padding</span>: <span class="text-green-600">0</span>; <span class="text-blue-600">margin</span>: <span class="text-green-600">0</span>; }
</div>`,
  code:`<!DOCTYPE html>
<html><head><style>
body { font-family: Arial, sans-serif; padding: 24px; background: #f8fafc; }
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.card { background: white; border-radius: 12px; padding: 16px; border: 1px solid #e2e8f0; }
.label { font-size: 0.7rem; font-weight: bold; color: #94a3b8; text-transform: uppercase; margin-bottom: 8px; }

.disc li { color: #475569; margin: 4px 0; }
.square { list-style-type: square; }
.square li { color: #6366f1; margin: 4px 0; }
.none-list { list-style: none; padding: 0; margin: 0; }
.none-list li {
  padding: 8px 12px; margin: 4px 0; background: #f1f5f9;
  border-radius: 8px; color: #334155; font-size: 0.9rem;
  border-left: 3px solid #6366f1;
}
.decimal { list-style-type: decimal; padding-left: 20px; }
.decimal li { color: #475569; margin: 4px 0; }
</style></head><body>
<div class="grid">
  <div class="card">
    <div class="label">disc (default)</div>
    <ul class="disc"><li>Item satu</li><li>Item dua</li><li>Item tiga</li></ul>
  </div>
  <div class="card">
    <div class="label">square</div>
    <ul class="square"><li>Item satu</li><li>Item dua</li><li>Item tiga</li></ul>
  </div>
  <div class="card">
    <div class="label">list-style: none (custom)</div>
    <ul class="none-list"><li>Custom item 1</li><li>Custom item 2</li><li>Custom item 3</li></ul>
  </div>
  <div class="card">
    <div class="label">decimal (ordered)</div>
    <ol class="decimal"><li>Langkah pertama</li><li>Langkah kedua</li><li>Langkah ketiga</li></ol>
  </div>
</div>
</body></html>`,
  quiz:{ question:'Property CSS mana yang menghilangkan bullet point dari list?', options:['list-style-type: none','list-remove: true','bullet: none','marker: hidden'], correctIndex:0, explanation:'list-style-type: none atau list-style: none menghilangkan marker dari list.' },
  prevPath:'css-links', nextPath:'css-tables'
},

// ── CSS TABLES ───────────────────────────────
'css-tables': {
  courseId:'css', title:'CSS Tables', chapter:'CSS Tutorial', color:'blue',
  theory:`<h2>CSS Tables</h2>
<p>CSS dapat membuat tabel HTML terlihat jauh lebih baik.</p>
<h3>Properties Penting</h3>
<ul>
  <li><code>border-collapse</code> - collapse (gabung border) atau separate</li>
  <li><code>border-spacing</code> - jarak antar cell (jika separate)</li>
  <li><code>width</code> - lebar tabel</li>
  <li><code>text-align</code> - perataan teks di cell</li>
  <li><code>vertical-align</code> - perataan vertikal</li>
  <li><code>padding</code> - padding di dalam cell</li>
</ul>
<h3>Striped Table</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm">
  <span class="text-red-600">tr:nth-child(even)</span> { <span class="text-blue-600">background</span>: <span class="text-green-600">#f8fafc</span>; }
</div>`,
  code:`<!DOCTYPE html>
<html><head><style>
body { font-family: Arial, sans-serif; padding: 24px; background: #f8fafc; }
table { width: 100%; border-collapse: collapse; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 8px rgba(0,0,0,0.08); }
thead { background: #6366f1; color: white; }
th { padding: 14px 16px; text-align: left; font-size: 0.85rem; font-weight: bold; text-transform: uppercase; letter-spacing: 0.05em; }
td { padding: 12px 16px; font-size: 0.9rem; color: #334155; border-bottom: 1px solid #f1f5f9; }
tr:nth-child(even) td { background: #f8fafc; }
tr:hover td { background: #ede9fe; }
.badge { display: inline-block; padding: 2px 10px; border-radius: 999px; font-size: 0.75rem; font-weight: bold; }
.active { background: #dcfce7; color: #166534; }
.pending { background: #fef9c3; color: #854d0e; }
</style></head><body>
<table>
  <thead>
    <tr><th>Nama</th><th>Kursus</th><th>Progress</th><th>Status</th></tr>
  </thead>
  <tbody>
    <tr><td>Arif Rahmat</td><td>HTML Dasar</td><td>85%</td><td><span class="badge active">Aktif</span></td></tr>
    <tr><td>Siti Nurhaliza</td><td>CSS Styling</td><td>60%</td><td><span class="badge pending">Pending</span></td></tr>
    <tr><td>Budi Santoso</td><td>JavaScript</td><td>100%</td><td><span class="badge active">Selesai</span></td></tr>
    <tr><td>Dewi Kartika</td><td>React.js</td><td>30%</td><td><span class="badge pending">Pending</span></td></tr>
  </tbody>
</table>
</body></html>`,
  quiz:{ question:'Property CSS mana yang menggabungkan border antar cell tabel?', options:['border-merge: true','border-collapse: collapse','table-border: single','border-join: collapse'], correctIndex:1, explanation:'border-collapse: collapse menggabungkan border yang berdekatan menjadi satu.' },
  prevPath:'css-lists', nextPath:'css-display'
},

// ── CSS MAX-WIDTH ─────────────────────────────
'css-max-width': {
  courseId:'css', title:'CSS Max-width', chapter:'CSS Tutorial', color:'blue',
  theory:`<h2>CSS Max-width</h2>
<p><code>max-width</code> membatasi lebar maksimum elemen. Sangat berguna untuk membuat layout yang responsif.</p>
<h3>Perbedaan width vs max-width</h3>
<div class="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-4">
  <p class="text-orange-900"><strong>width: 600px</strong> - selalu 600px, bisa overflow di layar kecil</p>
  <p class="text-orange-900 mt-2"><strong>max-width: 600px</strong> - maksimal 600px, tapi bisa lebih kecil di layar kecil</p>
</div>
<h3>Centering dengan max-width</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm">
  <span class="text-red-600">.container</span> {<br/>
  &nbsp;&nbsp;<span class="text-blue-600">max-width</span>: <span class="text-green-600">1200px</span>;<br/>
  &nbsp;&nbsp;<span class="text-blue-600">margin</span>: <span class="text-green-600">0 auto</span>;<br/>
  }
</div>`,
  code:`<!DOCTYPE html>
<html><head><style>
body { font-family: Arial, sans-serif; padding: 20px; background: #e2e8f0; }
.box { padding: 16px; border-radius: 8px; color: white; font-weight: bold; font-size: 0.85rem; margin: 10px 0; text-align: center; }
.w-fixed { width: 300px; background: #ef4444; }
.w-max { max-width: 300px; background: #6366f1; }
.w-full { width: 100%; background: #22c55e; }
.w-max-full { max-width: 600px; margin: 10px auto; background: #f59e0b; color: #1a1a1a; }
.label { font-size: 0.7rem; color: #64748b; margin-bottom: 4px; font-weight: bold; text-transform: uppercase; }
</style></head><body>
<div class="label">width: 300px (fixed)</div>
<div class="box w-fixed">width: 300px</div>
<div class="label">max-width: 300px</div>
<div class="box w-max">max-width: 300px</div>
<div class="label">width: 100%</div>
<div class="box w-full">width: 100%</div>
<div class="label">max-width: 600px + margin: auto (centered)</div>
<div class="box w-max-full">max-width: 600px, centered</div>
</body></html>`,
  quiz:{ question:'Apa keuntungan menggunakan max-width dibanding width?', options:['max-width lebih cepat','max-width responsif - bisa lebih kecil di layar kecil','max-width tidak bisa diubah','max-width hanya untuk gambar'], correctIndex:1, explanation:'max-width membuat elemen responsif karena bisa menyesuaikan ukuran layar yang lebih kecil.' },
  prevPath:'css-display', nextPath:'css-position'
},

// ── CSS POSITION OFFSETS ──────────────────────
'css-position-offsets': {
  courseId:'css', title:'CSS Position Offsets', chapter:'CSS Tutorial', color:'blue',
  theory:`<h2>CSS Position Offsets</h2>
<p>Offset properties (<code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code>) digunakan bersama position untuk menggeser elemen.</p>
<h3>Cara Kerja</h3>
<ul>
  <li><code>top: 20px</code> - geser 20px dari atas</li>
  <li><code>right: 20px</code> - geser 20px dari kanan</li>
  <li><code>bottom: 20px</code> - geser 20px dari bawah</li>
  <li><code>left: 20px</code> - geser 20px dari kiri</li>
</ul>
<div class="bg-indigo-50 border border-indigo-500 rounded-xl p-4 mt-4">
  <p class="text-indigo-900">Nilai negatif juga bisa digunakan untuk menggeser ke arah berlawanan.</p>
</div>`,
  code:`<!DOCTYPE html>
<html><head><style>
body { font-family: Arial, sans-serif; padding: 20px; background: #f8fafc; }
.container { position: relative; height: 220px; background: #e2e8f0; border-radius: 12px; margin: 12px 0; }
.box { position: absolute; padding: 10px 14px; border-radius: 8px; color: white; font-weight: bold; font-size: 0.8rem; }
.top-left { top: 10px; left: 10px; background: #6366f1; }
.top-right { top: 10px; right: 10px; background: #ef4444; }
.bottom-left { bottom: 10px; left: 10px; background: #22c55e; }
.bottom-right { bottom: 10px; right: 10px; background: #f59e0b; color: #1a1a1a; }
.center { top: 50%; left: 50%; transform: translate(-50%, -50%); background: #8b5cf6; }
</style></head><body>
<div class="container">
  <div class="box top-left">top:10 left:10</div>
  <div class="box top-right">top:10 right:10</div>
  <div class="box center">center (transform)</div>
  <div class="box bottom-left">bottom:10 left:10</div>
  <div class="box bottom-right">bottom:10 right:10</div>
</div>
</body></html>`,
  quiz:{ question:'Untuk menggunakan top/right/bottom/left, position harus bernilai?', options:['static','auto','relative, absolute, fixed, atau sticky','inherit'], correctIndex:2, explanation:'Offset properties hanya bekerja jika position bukan static.' },
  prevPath:'css-position', nextPath:'css-z-index'
},

// ── CSS Z-INDEX ───────────────────────────────
'css-z-index': {
  courseId:'css', title:'CSS Z-index', chapter:'CSS Tutorial', color:'blue',
  theory:`<h2>CSS Z-index</h2>
<p><code>z-index</code> mengontrol urutan tumpukan (stacking order) elemen yang saling tumpang tindih. Nilai lebih tinggi = di depan.</p>
<h3>Aturan Z-index</h3>
<ul>
  <li>Hanya bekerja pada elemen dengan position selain static</li>
  <li>Nilai bisa positif, negatif, atau 0</li>
  <li>Elemen dengan z-index lebih tinggi tampil di depan</li>
</ul>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mt-4">
  <span class="text-red-600">.modal</span> { <span class="text-blue-600">position</span>: <span class="text-green-600">fixed</span>; <span class="text-blue-600">z-index</span>: <span class="text-green-600">1000</span>; }<br/>
  <span class="text-red-600">.overlay</span> { <span class="text-blue-600">position</span>: <span class="text-green-600">fixed</span>; <span class="text-blue-600">z-index</span>: <span class="text-green-600">999</span>; }
</div>`,
  code:`<!DOCTYPE html>
<html><head><style>
body { font-family: Arial, sans-serif; padding: 20px; background: #f8fafc; }
.stack { position: relative; height: 180px; margin: 20px 0; }
.box { position: absolute; width: 120px; height: 80px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.85rem; color: white; }
.b1 { background: #6366f1; top: 0; left: 0; z-index: 1; }
.b2 { background: #ef4444; top: 20px; left: 40px; z-index: 3; }
.b3 { background: #22c55e; top: 40px; left: 80px; z-index: 2; }
.b4 { background: #f59e0b; top: 60px; left: 120px; z-index: 4; color: #1a1a1a; }
</style></head><body>
<h2 style="color:#1e293b">Z-index Stacking</h2>
<p style="color:#64748b;font-size:0.9rem">Nilai z-index lebih tinggi = tampil di depan</p>
<div class="stack">
  <div class="box b1">z-index: 1</div>
  <div class="box b2">z-index: 3</div>
  <div class="box b3">z-index: 2</div>
  <div class="box b4">z-index: 4</div>
</div>
</body></html>`,
  quiz:{ question:'Elemen dengan z-index berapa yang tampil paling depan?', options:['z-index: 0','z-index: -1','z-index: 100','z-index: 1'], correctIndex:2, explanation:'Nilai z-index lebih tinggi membuat elemen tampil di depan elemen lain.' },
  prevPath:'css-position-offsets', nextPath:'css-overflow'
},

// ── CSS OVERFLOW ──────────────────────────────
'css-overflow': {
  courseId:'css', title:'CSS Overflow', chapter:'CSS Tutorial', color:'blue',
  theory:`<h2>CSS Overflow</h2>
<p>Property <code>overflow</code> mengontrol apa yang terjadi ketika konten melebihi ukuran elemen.</p>
<h3>Nilai Overflow</h3>
<ul>
  <li><code>visible</code> - konten terlihat di luar elemen (default)</li>
  <li><code>hidden</code> - konten yang melebihi dipotong/disembunyikan</li>
  <li><code>scroll</code> - selalu tampilkan scrollbar</li>
  <li><code>auto</code> - tampilkan scrollbar hanya jika diperlukan</li>
</ul>
<h3>Overflow Spesifik</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm">
  <span class="text-blue-600">overflow-x</span>: <span class="text-green-600">hidden</span>; <span class="text-slate-400">/* horizontal */</span><br/>
  <span class="text-blue-600">overflow-y</span>: <span class="text-green-600">scroll</span>; <span class="text-slate-400">/* vertical */</span>
</div>`,
  code:`<!DOCTYPE html>
<html><head><style>
body { font-family: Arial, sans-serif; padding: 20px; background: #f8fafc; }
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.box { height: 100px; background: white; border: 2px solid #e2e8f0; border-radius: 12px; padding: 12px; font-size: 0.85rem; color: #334155; }
.label { font-size: 0.7rem; font-weight: bold; color: #94a3b8; text-transform: uppercase; margin-bottom: 6px; }
.visible { overflow: visible; }
.hidden { overflow: hidden; }
.scroll { overflow: scroll; }
.auto { overflow: auto; }
</style></head><body>
<div class="grid">
  <div>
    <div class="label">overflow: visible</div>
    <div class="box visible">Konten panjang yang melebihi batas kotak akan terlihat keluar dari kotak ini dan menimpa elemen lain di sekitarnya.</div>
  </div>
  <div>
    <div class="label">overflow: hidden</div>
    <div class="box hidden">Konten panjang yang melebihi batas kotak akan dipotong dan tidak terlihat. Teks ini tidak akan terlihat setelah batas kotak.</div>
  </div>
  <div>
    <div class="label">overflow: scroll</div>
    <div class="box scroll">Konten panjang yang melebihi batas kotak akan bisa di-scroll. Scrollbar selalu muncul meski konten tidak melebihi batas.</div>
  </div>
  <div>
    <div class="label">overflow: auto</div>
    <div class="box auto">Konten panjang yang melebihi batas kotak akan bisa di-scroll. Scrollbar hanya muncul jika diperlukan saja.</div>
  </div>
</div>
</body></html>`,
  quiz:{ question:'Nilai overflow mana yang menyembunyikan konten yang melebihi batas elemen?', options:['overflow: visible','overflow: hidden','overflow: scroll','overflow: clip'], correctIndex:1, explanation:'overflow: hidden memotong dan menyembunyikan konten yang melebihi batas elemen.' },
  prevPath:'css-z-index', nextPath:'css-float'
},

// ── CSS FLOAT ─────────────────────────────────
'css-float': {
  courseId:'css', title:'CSS Float', chapter:'CSS Tutorial', color:'blue',
  theory:`<h2>CSS Float</h2>
<p>Property <code>float</code> digunakan untuk memposisikan elemen ke kiri atau kanan, membiarkan konten lain mengalir di sekitarnya.</p>
<h3>Nilai Float</h3>
<ul>
  <li><code>left</code> - elemen mengapung ke kiri</li>
  <li><code>right</code> - elemen mengapung ke kanan</li>
  <li><code>none</code> - tidak mengapung (default)</li>
</ul>
<h3>Clear Float</h3>
<p>Gunakan <code>clear</code> untuk menghentikan efek float:</p>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  <span class="text-blue-600">clear</span>: <span class="text-green-600">both</span>; <span class="text-slate-400">/* clear kiri dan kanan */</span>
</div>
<div class="bg-orange-50 border border-orange-200 rounded-xl p-4">
  <p class="text-orange-900"><strong>Modern CSS:</strong> Untuk layout, lebih disarankan menggunakan Flexbox atau Grid daripada float.</p>
</div>`,
  code:`<!DOCTYPE html>
<html><head><style>
body { font-family: Arial, sans-serif; padding: 20px; background: #f8fafc; }
.demo { background: white; border-radius: 12px; padding: 16px; margin: 12px 0; border: 1px solid #e2e8f0; overflow: hidden; }
.label { font-size: 0.7rem; font-weight: bold; color: #94a3b8; text-transform: uppercase; margin-bottom: 10px; }
.img-box { width: 100px; height: 80px; background: #6366f1; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 0.8rem; }
.float-left { float: left; margin-right: 16px; margin-bottom: 8px; }
.float-right { float: right; margin-left: 16px; margin-bottom: 8px; }
p { color: #475569; font-size: 0.9rem; line-height: 1.6; margin: 0; }
.clearfix::after { content: ""; display: table; clear: both; }
</style></head><body>
<div class="demo clearfix">
  <div class="label">float: left</div>
  <div class="img-box float-left">IMG</div>
  <p>Teks ini mengalir di sebelah kanan gambar yang mengapung ke kiri. Float membuat elemen keluar dari alur normal dokumen dan konten lain mengalir di sekitarnya.</p>
</div>
<div class="demo clearfix">
  <div class="label">float: right</div>
  <div class="img-box float-right">IMG</div>
  <p>Teks ini mengalir di sebelah kiri gambar yang mengapung ke kanan. Ini adalah penggunaan float yang paling umum untuk layout teks dengan gambar.</p>
</div>
</body></html>`,
  quiz:{ question:'Property CSS mana yang digunakan untuk menghentikan efek float?', options:['stop-float: true','float: none','clear: both','overflow: hidden'], correctIndex:2, explanation:'clear: both menghentikan efek float dari kiri maupun kanan.' },
  prevPath:'css-overflow', nextPath:'css-inline-block'
},

// ── CSS INLINE-BLOCK ──────────────────────────
'css-inline-block': {
  courseId:'css', title:'CSS Inline-block', chapter:'CSS Tutorial', color:'blue',
  theory:`<h2>CSS Inline-block</h2>
<p><code>display: inline-block</code> menggabungkan sifat inline (tidak mulai baris baru) dan block (bisa punya width/height).</p>
<h3>Perbandingan</h3>
<div class="bg-slate-100 rounded-xl p-4 mb-4">
  <p><strong>inline</strong>: tidak bisa set width/height, tidak mulai baris baru</p>
  <p class="mt-2"><strong>block</strong>: bisa set width/height, selalu mulai baris baru</p>
  <p class="mt-2"><strong>inline-block</strong>: bisa set width/height, tidak mulai baris baru</p>
</div>
<h3>Penggunaan Umum</h3>
<ul>
  <li>Membuat tombol/badge sejajar</li>
  <li>Navigation menu horizontal</li>
  <li>Grid sederhana sebelum Flexbox/Grid</li>
</ul>`,
  code:`<!DOCTYPE html>
<html><head><style>
body { font-family: Arial, sans-serif; padding: 24px; background: #f8fafc; }
.section { background: white; border-radius: 12px; padding: 16px; margin: 12px 0; border: 1px solid #e2e8f0; }
.label { font-size: 0.7rem; font-weight: bold; color: #94a3b8; text-transform: uppercase; margin-bottom: 10px; }

/* inline - tidak bisa set width/height */
.inline-demo span { display: inline; background: #dbeafe; color: #1e40af; padding: 4px 8px; border-radius: 4px; margin: 2px; }

/* inline-block - bisa set width/height */
.iblock-demo div {
  display: inline-block;
  width: 80px; height: 60px;
  background: #6366f1; color: white;
  border-radius: 8px; margin: 4px;
  text-align: center; line-height: 60px;
  font-weight: bold; font-size: 0.8rem;
}

/* Navigation contoh */
.nav { background: #1e293b; border-radius: 8px; padding: 4px; }
.nav a {
  display: inline-block;
  color: white; text-decoration: none;
  padding: 8px 16px; border-radius: 6px;
  font-size: 0.85rem; font-weight: bold;
  transition: background 0.2s;
}
.nav a:hover { background: #6366f1; }
</style></head><body>
<div class="section">
  <div class="label">display: inline</div>
  <div class="inline-demo">
    <span>Tag 1</span><span>Tag 2</span><span>Tag 3</span>
  </div>
</div>
<div class="section">
  <div class="label">display: inline-block (dengan width & height)</div>
  <div class="iblock-demo">
    <div>Box 1</div><div>Box 2</div><div>Box 3</div>
  </div>
</div>
<div class="section">
  <div class="label">Navigation dengan inline-block</div>
  <div class="nav">
    <a href="#">Home</a><a href="#">Kursus</a><a href="#">Tentang</a><a href="#">Kontak</a>
  </div>
</div>
</body></html>`,
  quiz:{ question:'Apa keunggulan display: inline-block dibanding display: inline?', options:['Lebih cepat','Bisa set width dan height','Selalu mulai baris baru','Tidak perlu margin'], correctIndex:1, explanation:'inline-block memungkinkan pengaturan width dan height, tidak seperti inline biasa.' },
  prevPath:'css-float', nextPath:'css-align'
},

// ── CSS ALIGN ─────────────────────────────────
'css-align': {
  courseId:'css', title:'CSS Align', chapter:'CSS Tutorial', color:'blue',
  theory:`<h2>CSS Align</h2>
<p>Ada beberapa teknik untuk mengatur perataan elemen di CSS.</p>
<h3>Horizontal Centering</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-3">
  <span class="text-slate-400">/* Block element */</span><br/>
  <span class="text-blue-600">margin</span>: <span class="text-green-600">0 auto</span>; <span class="text-slate-400">/* + width */</span>
</div>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-3">
  <span class="text-slate-400">/* Teks */</span><br/>
  <span class="text-blue-600">text-align</span>: <span class="text-green-600">center</span>;
</div>
<h3>Vertical Centering (Flexbox)</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-3">
  <span class="text-blue-600">display</span>: <span class="text-green-600">flex</span>;<br/>
  <span class="text-blue-600">align-items</span>: <span class="text-green-600">center</span>;<br/>
  <span class="text-blue-600">justify-content</span>: <span class="text-green-600">center</span>;
</div>
<h3>Absolute Centering</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm">
  <span class="text-blue-600">position</span>: <span class="text-green-600">absolute</span>;<br/>
  <span class="text-blue-600">top</span>: <span class="text-green-600">50%</span>; <span class="text-blue-600">left</span>: <span class="text-green-600">50%</span>;<br/>
  <span class="text-blue-600">transform</span>: <span class="text-green-600">translate(-50%, -50%)</span>;
</div>`,
  code:`<!DOCTYPE html>
<html><head><style>
body { font-family: Arial, sans-serif; padding: 20px; background: #f8fafc; }
.demo { background: white; border-radius: 12px; padding: 16px; margin: 12px 0; border: 1px solid #e2e8f0; }
.label { font-size: 0.7rem; font-weight: bold; color: #94a3b8; text-transform: uppercase; margin-bottom: 10px; }
.box { background: #6366f1; color: white; padding: 12px 20px; border-radius: 8px; font-weight: bold; font-size: 0.85rem; }

/* Horizontal center dengan margin auto */
.h-center { width: 200px; margin: 0 auto; }

/* Text center */
.t-center { text-align: center; }

/* Flex center */
.flex-center { display: flex; align-items: center; justify-content: center; height: 80px; background: #f1f5f9; border-radius: 8px; }

/* Absolute center */
.abs-container { position: relative; height: 80px; background: #f1f5f9; border-radius: 8px; }
.abs-center { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); }
</style></head><body>
<div class="demo">
  <div class="label">margin: 0 auto (horizontal)</div>
  <div class="box h-center">Centered</div>
</div>
<div class="demo">
  <div class="label">text-align: center</div>
  <p class="t-center" style="color:#334155">Teks ini berada di tengah</p>
</div>
<div class="demo">
  <div class="label">Flexbox center (horizontal + vertical)</div>
  <div class="flex-center"><div class="box">Flex Center</div></div>
</div>
<div class="demo">
  <div class="label">Absolute + transform center</div>
  <div class="abs-container"><div class="box abs-center">Absolute Center</div></div>
</div>
</body></html>`,
  quiz:{ question:'Cara paling modern untuk center elemen secara horizontal DAN vertikal adalah?', options:['margin: auto','text-align: center','display: flex + align-items: center + justify-content: center','position: absolute + top: 50%'], correctIndex:2, explanation:'Flexbox dengan align-items dan justify-content: center adalah cara paling mudah dan modern untuk centering.' },
  prevPath:'css-inline-block', nextPath:'css-combinators'
},

// ── CSS COMBINATORS ───────────────────────────
'css-combinators': {
  courseId:'css', title:'CSS Combinators', chapter:'CSS Tutorial', color:'blue',
  theory:`<h2>CSS Combinators</h2>
<p>Combinator menjelaskan hubungan antara selector. Ada 4 jenis combinator di CSS.</p>
<h3>1. Descendant Selector (spasi)</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-3">
  <span class="text-red-600">div p</span> { color: red; } <span class="text-slate-400">/* semua p di dalam div */</span>
</div>
<h3>2. Child Selector (&gt;)</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-3">
  <span class="text-red-600">div &gt; p</span> { color: blue; } <span class="text-slate-400">/* p anak langsung div */</span>
</div>
<h3>3. Adjacent Sibling (+)</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-3">
  <span class="text-red-600">h1 + p</span> { color: green; } <span class="text-slate-400">/* p tepat setelah h1 */</span>
</div>
<h3>4. General Sibling (~)</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm">
  <span class="text-red-600">h1 ~ p</span> { color: purple; } <span class="text-slate-400">/* semua p setelah h1 */</span>
</div>`,
  code:`<!DOCTYPE html>
<html><head><style>
body { font-family: Arial, sans-serif; padding: 20px; background: #f8fafc; }
.demo { background: white; border-radius: 12px; padding: 16px; margin: 12px 0; border: 1px solid #e2e8f0; }
.label { font-size: 0.7rem; font-weight: bold; color: #94a3b8; text-transform: uppercase; margin-bottom: 10px; }

/* 1. Descendant */
.desc-demo p { color: #6366f1; font-weight: bold; }

/* 2. Child */
.child-demo > p { color: #22c55e; font-weight: bold; }
.child-demo div p { color: #94a3b8; } /* tidak kena child selector */

/* 3. Adjacent sibling */
.adj-demo h3 + p { color: #ef4444; font-weight: bold; }

/* 4. General sibling */
.gen-demo h3 ~ p { color: #f59e0b; font-weight: bold; }
</style></head><body>
<div class="demo">
  <div class="label">Descendant (div p)</div>
  <div class="desc-demo">
    <p>Paragraph langsung (kena)</p>
    <div><p>Paragraph nested (juga kena)</p></div>
  </div>
</div>
<div class="demo">
  <div class="label">Child (div > p)</div>
  <div class="child-demo">
    <p>Anak langsung (kena - hijau)</p>
    <div><p>Cucu (tidak kena - abu)</p></div>
  </div>
</div>
<div class="demo">
  <div class="label">Adjacent Sibling (h3 + p)</div>
  <div class="adj-demo">
    <h3>Heading</h3>
    <p>Tepat setelah h3 (kena - merah)</p>
    <p>Paragraph kedua (tidak kena)</p>
  </div>
</div>
<div class="demo">
  <div class="label">General Sibling (h3 ~ p)</div>
  <div class="gen-demo">
    <h3>Heading</h3>
    <p>Semua p setelah h3 (kena - kuning)</p>
    <p>Ini juga kena</p>
  </div>
</div>
</body></html>`,
  quiz:{ question:'Selector "div > p" memilih elemen apa?', options:['Semua p di dalam div','Hanya p yang merupakan anak langsung div','p yang tepat setelah div','Semua p setelah div'], correctIndex:1, explanation:'Child combinator (>) hanya memilih elemen yang merupakan anak langsung (direct child).' },
  prevPath:'css-align', nextPath:'css-pseudo-classes'
},

// ── CSS PSEUDO-CLASSES ────────────────────────
'css-pseudo-classes': {
  courseId:'css', title:'CSS Pseudo-classes', chapter:'CSS Tutorial', color:'blue',
  theory:`<h2>CSS Pseudo-classes</h2>
<p>Pseudo-class digunakan untuk mendefinisikan state khusus dari elemen.</p>
<h3>Pseudo-class Umum</h3>
<ul>
  <li><code>:hover</code> - saat mouse di atas elemen</li>
  <li><code>:focus</code> - saat elemen mendapat fokus</li>
  <li><code>:active</code> - saat elemen diklik</li>
  <li><code>:visited</code> - link yang sudah dikunjungi</li>
  <li><code>:first-child</code> - elemen pertama dari parent</li>
  <li><code>:last-child</code> - elemen terakhir dari parent</li>
  <li><code>:nth-child(n)</code> - elemen ke-n dari parent</li>
  <li><code>:not(selector)</code> - elemen yang tidak cocok selector</li>
  <li><code>:checked</code> - checkbox/radio yang dicentang</li>
  <li><code>:disabled</code> - elemen yang dinonaktifkan</li>
</ul>`,
  code:`<!DOCTYPE html>
<html><head><style>
body { font-family: Arial, sans-serif; padding: 20px; background: #f8fafc; }
.demo { background: white; border-radius: 12px; padding: 16px; margin: 12px 0; border: 1px solid #e2e8f0; }
.label { font-size: 0.7rem; font-weight: bold; color: #94a3b8; text-transform: uppercase; margin-bottom: 10px; }

/* :hover */
.btn { padding: 10px 20px; background: #6366f1; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; transition: all 0.2s; }
.btn:hover { background: #4338ca; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(99,102,241,0.4); }

/* :focus */
.input { padding: 10px 14px; border: 2px solid #e2e8f0; border-radius: 8px; outline: none; width: 100%; font-size: 0.9rem; transition: border-color 0.2s; }
.input:focus { border-color: #6366f1; box-shadow: 0 0 0 3px rgba(99,102,241,0.1); }

/* :nth-child */
.list-demo li { padding: 8px 12px; border-radius: 6px; margin: 4px 0; color: #334155; }
.list-demo li:nth-child(odd) { background: #f1f5f9; }
.list-demo li:nth-child(even) { background: #e0e7ff; }
.list-demo li:first-child { font-weight: bold; color: #6366f1; }
.list-demo li:last-child { font-style: italic; color: #94a3b8; }
</style></head><body>
<div class="demo">
  <div class="label">:hover - hover tombol ini</div>
  <button class="btn">Hover Saya!</button>
</div>
<div class="demo">
  <div class="label">:focus - klik input ini</div>
  <input class="input" type="text" placeholder="Klik untuk fokus...">
</div>
<div class="demo">
  <div class="label">:nth-child, :first-child, :last-child</div>
  <ul class="list-demo" style="list-style:none;padding:0;margin:0">
    <li>Item pertama (:first-child)</li>
    <li>Item kedua</li>
    <li>Item ketiga</li>
    <li>Item keempat</li>
    <li>Item terakhir (:last-child)</li>
  </ul>
</div>
</body></html>`,
  quiz:{ question:'Pseudo-class mana yang aktif saat elemen input mendapat fokus?', options:[':hover',':active',':focus',':selected'], correctIndex:2, explanation:':focus aktif saat elemen (seperti input) mendapat fokus dari keyboard atau klik.' },
  prevPath:'css-combinators', nextPath:'css-pseudo-elements'
},

// ── CSS PSEUDO-ELEMENTS ───────────────────────
'css-pseudo-elements': {
  courseId:'css', title:'CSS Pseudo-elements', chapter:'CSS Tutorial', color:'blue',
  theory:`<h2>CSS Pseudo-elements</h2>
<p>Pseudo-element digunakan untuk meng-style bagian tertentu dari elemen.</p>
<h3>Pseudo-elements Utama</h3>
<ul>
  <li><code>::before</code> - menyisipkan konten sebelum elemen</li>
  <li><code>::after</code> - menyisipkan konten setelah elemen</li>
  <li><code>::first-line</code> - baris pertama teks</li>
  <li><code>::first-letter</code> - huruf pertama teks</li>
  <li><code>::selection</code> - teks yang dipilih user</li>
  <li><code>::placeholder</code> - placeholder input</li>
</ul>
<div class="bg-indigo-50 border border-indigo-500 rounded-xl p-4 mt-4">
  <p class="text-indigo-900"><code>::before</code> dan <code>::after</code> memerlukan property <code>content</code> untuk bekerja.</p>
</div>`,
  code:`<!DOCTYPE html>
<html><head><style>
body { font-family: Arial, sans-serif; padding: 20px; background: #f8fafc; }
.demo { background: white; border-radius: 12px; padding: 16px; margin: 12px 0; border: 1px solid #e2e8f0; }
.label { font-size: 0.7rem; font-weight: bold; color: #94a3b8; text-transform: uppercase; margin-bottom: 10px; }

/* ::before dan ::after */
.quote { position: relative; padding: 16px 24px; background: #f1f5f9; border-radius: 8px; color: #334155; font-style: italic; }
.quote::before { content: '"'; font-size: 3rem; color: #6366f1; position: absolute; top: -10px; left: 8px; line-height: 1; }
.quote::after { content: '"'; font-size: 3rem; color: #6366f1; position: absolute; bottom: -20px; right: 8px; line-height: 1; }

/* ::first-letter */
.drop-cap::first-letter { font-size: 3rem; font-weight: bold; color: #6366f1; float: left; line-height: 0.8; margin-right: 6px; }

/* ::selection */
.select-demo { color: #334155; }
.select-demo::selection { background: #6366f1; color: white; }

/* ::placeholder */
.input-demo { padding: 10px 14px; border: 2px solid #e2e8f0; border-radius: 8px; outline: none; width: 100%; font-size: 0.9rem; }
.input-demo::placeholder { color: #a5b4fc; font-style: italic; }
</style></head><body>
<div class="demo">
  <div class="label">::before dan ::after (kutipan)</div>
  <div class="quote">CSS adalah bahasa yang membuat web menjadi indah.</div>
</div>
<div class="demo">
  <div class="label">::first-letter (drop cap)</div>
  <p class="drop-cap">Cascading Style Sheets adalah bahasa stylesheet yang digunakan untuk mendeskripsikan presentasi dokumen HTML.</p>
</div>
<div class="demo">
  <div class="label">::selection - coba pilih teks ini</div>
  <p class="select-demo">Pilih teks ini untuk melihat warna selection yang berbeda dari default browser.</p>
</div>
<div class="demo">
  <div class="label">::placeholder</div>
  <input class="input-demo" type="text" placeholder="Placeholder berwarna indigo...">
</div>
</body></html>`,
  quiz:{ question:'Property apa yang WAJIB ada pada ::before dan ::after?', options:['display','position','content','color'], correctIndex:2, explanation:'::before dan ::after memerlukan property content (bisa berupa string kosong "") untuk ditampilkan.' },
  prevPath:'css-pseudo-classes', nextPath:'css-opacity'
},

// ── CSS OPACITY ───────────────────────────────
'css-opacity': {
  courseId:'css', title:'CSS Opacity', chapter:'CSS Tutorial', color:'blue',
  theory:`<h2>CSS Opacity</h2>
<p>Property <code>opacity</code> mengatur tingkat transparansi elemen. Nilai 0 = transparan penuh, 1 = tidak transparan.</p>
<h3>Sintaks</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  <span class="text-blue-600">opacity</span>: <span class="text-green-600">0.5</span>; <span class="text-slate-400">/* 50% transparan */</span>
</div>
<h3>Opacity vs RGBA</h3>
<div class="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-4">
  <p class="text-orange-900"><strong>opacity</strong> mempengaruhi SELURUH elemen termasuk konten di dalamnya.</p>
  <p class="text-orange-900 mt-2"><strong>rgba()</strong> hanya mempengaruhi warna background, konten tetap solid.</p>
</div>
<h3>Hover Effect dengan Opacity</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm">
  <span class="text-red-600">img</span>:<span class="text-purple-600">hover</span> { <span class="text-blue-600">opacity</span>: <span class="text-green-600">0.7</span>; }
</div>`,
  code:`<!DOCTYPE html>
<html><head><style>
body { font-family: Arial, sans-serif; padding: 20px; background: #f8fafc; }
.grid { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 16px; }
.box { width: 80px; height: 80px; background: #6366f1; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 0.8rem; }
.o10 { opacity: 1.0; }
.o08 { opacity: 0.8; }
.o06 { opacity: 0.6; }
.o04 { opacity: 0.4; }
.o02 { opacity: 0.2; }

/* Hover effect */
.card { background: white; border-radius: 12px; padding: 20px; border: 1px solid #e2e8f0; transition: opacity 0.3s; cursor: pointer; }
.card:hover { opacity: 0.7; }

/* rgba vs opacity */
.rgba-demo { background: rgba(99,102,241,0.3); padding: 16px; border-radius: 8px; color: #1e293b; font-weight: bold; }
.opacity-demo { background: #6366f1; opacity: 0.3; padding: 16px; border-radius: 8px; color: #1e293b; font-weight: bold; }
</style></head><body>
<div class="grid">
  <div class="box o10">1.0</div>
  <div class="box o08">0.8</div>
  <div class="box o06">0.6</div>
  <div class="box o04">0.4</div>
  <div class="box o02">0.2</div>
</div>
<div class="card" style="margin-bottom:12px">
  <strong style="color:#1e293b">Hover card ini</strong>
  <p style="color:#64748b;margin:4px 0 0;font-size:0.85rem">opacity berubah saat hover</p>
</div>
<p style="color:#64748b;font-size:0.8rem;margin-bottom:8px">rgba (teks tetap solid):</p>
<div class="rgba-demo">Teks ini tetap gelap</div>
<p style="color:#64748b;font-size:0.8rem;margin:8px 0">opacity (teks ikut transparan):</p>
<div class="opacity-demo">Teks ini ikut transparan</div>
</body></html>`,
  quiz:{ question:'Nilai opacity berapa yang membuat elemen sepenuhnya transparan (tidak terlihat)?', options:['opacity: 1','opacity: 100','opacity: 0','opacity: -1'], correctIndex:2, explanation:'opacity: 0 membuat elemen sepenuhnya transparan (tidak terlihat), tapi masih ada di layout.' },
  prevPath:'css-pseudo-elements', nextPath:'css-navbar'
},

// ── CSS NAVBAR ────────────────────────────────
'css-navbar': {
  courseId:'css', title:'CSS Navigation Bars', chapter:'CSS Tutorial', color:'blue',
  theory:`<h2>CSS Navigation Bars</h2>
<p>Navigation bar (navbar) adalah elemen penting di setiap website. CSS memungkinkan kita membuat navbar yang menarik.</p>
<h3>Struktur Dasar</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  &lt;<span class="text-blue-600">nav</span>&gt;<br/>
  &nbsp;&nbsp;&lt;<span class="text-blue-600">ul</span>&gt;<br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="text-blue-600">li</span>&gt;&lt;<span class="text-blue-600">a</span> href="#"&gt;Home&lt;/<span class="text-blue-600">a</span>&gt;&lt;/<span class="text-blue-600">li</span>&gt;<br/>
  &nbsp;&nbsp;&lt;/<span class="text-blue-600">ul</span>&gt;<br/>
  &lt;/<span class="text-blue-600">nav</span>&gt;
</div>
<h3>Tips Navbar</h3>
<ul>
  <li>Gunakan <code>position: sticky; top: 0</code> untuk navbar yang mengikuti scroll</li>
  <li>Tambahkan <code>z-index</code> tinggi agar navbar selalu di atas konten</li>
  <li>Gunakan Flexbox untuk layout navbar modern</li>
</ul>`,
  code:`<!DOCTYPE html>
<html><head><style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: Arial, sans-serif; background: #f8fafc; }

/* Navbar */
nav {
  background: #1e293b;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 12px rgba(0,0,0,0.15);
}
.logo { color: white; font-weight: 900; font-size: 1.2rem; }
.logo span { color: #6366f1; }
.nav-links { display: flex; list-style: none; gap: 4px; }
.nav-links a {
  color: #94a3b8;
  text-decoration: none;
  padding: 8px 14px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.2s;
}
.nav-links a:hover { color: white; background: rgba(255,255,255,0.1); }
.nav-links a.active { color: white; background: #6366f1; }
.nav-cta {
  background: #6366f1;
  color: white;
  padding: 8px 18px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.85rem;
  transition: background 0.2s;
}
.nav-cta:hover { background: #4338ca; }

.content { padding: 40px 24px; }
h1 { color: #1e293b; margin-bottom: 12px; }
p { color: #64748b; line-height: 1.6; }
</style></head><body>
<nav>
  <div class="logo">Dev<span>Grow</span>.</div>
  <ul class="nav-links">
    <li><a href="#" class="active">Home</a></li>
    <li><a href="#">Kursus</a></li>
    <li><a href="#">Tentang</a></li>
    <li><a href="#">Blog</a></li>
  </ul>
  <a href="#" class="nav-cta">Daftar Gratis</a>
</nav>
<div class="content">
  <h1>Selamat Datang!</h1>
  <p>Ini adalah contoh navbar modern dengan CSS. Navbar ini sticky dan akan tetap di atas saat scroll.</p>
</div>
</body></html>`,
  quiz:{ question:'Property CSS mana yang membuat navbar tetap di atas saat halaman di-scroll?', options:['position: fixed','position: sticky; top: 0','position: absolute','display: fixed'], correctIndex:1, explanation:'position: sticky; top: 0 membuat elemen menempel di atas viewport saat di-scroll melewatinya.' },
  prevPath:'css-opacity', nextPath:'css-dropdowns'
},

// ── CSS DROPDOWNS ─────────────────────────────
'css-dropdowns': {
  courseId:'css', title:'CSS Dropdowns', chapter:'CSS Tutorial', color:'blue',
  theory:`<h2>CSS Dropdowns</h2>
<p>Dropdown menu bisa dibuat hanya dengan CSS menggunakan <code>:hover</code> dan <code>display</code>.</p>
<h3>Teknik Dasar</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  <span class="text-red-600">.dropdown-content</span> { <span class="text-blue-600">display</span>: <span class="text-green-600">none</span>; }<br/>
  <span class="text-red-600">.dropdown:hover .dropdown-content</span> { <span class="text-blue-600">display</span>: <span class="text-green-600">block</span>; }
</div>
<h3>Tips Dropdown</h3>
<ul>
  <li>Gunakan <code>position: absolute</code> pada dropdown content</li>
  <li>Parent harus <code>position: relative</code></li>
  <li>Tambahkan <code>z-index</code> agar dropdown di atas konten lain</li>
  <li>Tambahkan transisi untuk animasi smooth</li>
</ul>`,
  code:`<!DOCTYPE html>
<html><head><style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: Arial, sans-serif; background: #f8fafc; padding: 20px; }

nav { background: #1e293b; padding: 0 20px; display: flex; align-items: center; gap: 4px; height: 52px; border-radius: 12px; }

.nav-item { position: relative; }
.nav-btn {
  color: #94a3b8; background: none; border: none; cursor: pointer;
  padding: 8px 14px; border-radius: 8px; font-size: 0.9rem; font-weight: 600;
  transition: all 0.2s; display: flex; align-items: center; gap: 6px;
}
.nav-btn:hover { color: white; background: rgba(255,255,255,0.1); }
.nav-btn::after { content: " v"; font-size: 0.7rem; }

.dropdown {
  display: none;
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.15);
  min-width: 180px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  z-index: 100;
}
.nav-item:hover .dropdown { display: block; }
.dropdown a {
  display: block; padding: 10px 16px;
  color: #334155; text-decoration: none;
  font-size: 0.85rem; font-weight: 500;
  transition: background 0.15s;
}
.dropdown a:hover { background: #f1f5f9; color: #6366f1; }
.dropdown-divider { height: 1px; background: #f1f5f9; margin: 4px 0; }
</style></head><body>
<nav>
  <div class="nav-item">
    <button class="nav-btn">Kursus</button>
    <div class="dropdown">
      <a href="#">HTML Dasar</a>
      <a href="#">CSS Styling</a>
      <a href="#">JavaScript</a>
      <div class="dropdown-divider"></div>
      <a href="#">React.js</a>
      <a href="#">Node.js</a>
    </div>
  </div>
  <div class="nav-item">
    <button class="nav-btn">Tentang</button>
    <div class="dropdown">
      <a href="#">Tim Kami</a>
      <a href="#">Karir</a>
      <a href="#">Blog</a>
    </div>
  </div>
</nav>
<p style="color:#64748b;margin-top:16px;font-size:0.9rem">Hover menu di atas untuk melihat dropdown</p>
</body></html>`,
  quiz:{ question:'Bagaimana cara menampilkan dropdown saat hover menggunakan CSS?', options:['.dropdown { display: block }','.parent:hover .dropdown { display: block }','.dropdown:hover { visible: true }','.show-dropdown { display: flex }'], correctIndex:1, explanation:'Gunakan .parent:hover .dropdown { display: block } untuk menampilkan dropdown saat parent di-hover.' },
  prevPath:'css-navbar', nextPath:'css-image-gallery'
},

'css-image-gallery': {
  courseId:'css', title:'CSS Image Gallery', chapter:'CSS Tutorial', color:'blue',
  theory:`<h2>CSS Image Gallery</h2>
<p>CSS Grid dan Flexbox memudahkan pembuatan galeri gambar yang responsif dan menarik.</p>
<h3>Teknik Grid Gallery</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  <span class="text-red-600">.gallery</span> {<br/>
  &nbsp;&nbsp;<span class="text-blue-600">display</span>: <span class="text-green-600">grid</span>;<br/>
  &nbsp;&nbsp;<span class="text-blue-600">grid-template-columns</span>: <span class="text-green-600">repeat(3, 1fr)</span>;<br/>
  &nbsp;&nbsp;<span class="text-blue-600">gap</span>: <span class="text-green-600">12px</span>;<br/>
  }
</div>
<h3>Hover Effect pada Gambar</h3>
<ul>
  <li>Scale dengan <code>transform: scale(1.05)</code></li>
  <li>Overlay dengan <code>::after</code> pseudo-element</li>
  <li>Filter dengan <code>filter: brightness(0.8)</code></li>
</ul>`,
  code:`<!DOCTYPE html>
<html><head><style>
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: Arial, sans-serif; padding: 20px; background: #0f172a; }
h2 { color: white; margin-bottom: 16px; font-size: 1.3rem; }

.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.gallery-item {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 1;
  cursor: pointer;
}
.gallery-item .img-placeholder {
  width: 100%; height: 100%;
  display: flex; align-items: center; justify-content: center;
  font-size: 2rem;
  transition: transform 0.3s;
}
.gallery-item:hover .img-placeholder { transform: scale(1.08); }
.gallery-item .overlay {
  position: absolute; inset: 0;
  background: rgba(0,0,0,0);
  display: flex; align-items: flex-end;
  padding: 12px;
  transition: background 0.3s;
}
.gallery-item:hover .overlay { background: rgba(0,0,0,0.4); }
.overlay span {
  color: white; font-size: 0.75rem; font-weight: bold;
  opacity: 0; transform: translateY(8px);
  transition: all 0.3s;
}
.gallery-item:hover .overlay span { opacity: 1; transform: translateY(0); }

.c1 { background: linear-gradient(135deg,#6366f1,#8b5cf6); }
.c2 { background: linear-gradient(135deg,#f59e0b,#ef4444); }
.c3 { background: linear-gradient(135deg,#22c55e,#06b6d4); }
.c4 { background: linear-gradient(135deg,#ec4899,#f43f5e); }
.c5 { background: linear-gradient(135deg,#3b82f6,#6366f1); }
.c6 { background: linear-gradient(135deg,#f97316,#eab308); }
</style></head><body>
<h2>🖼️ CSS Image Gallery</h2>
<div class="gallery">
  <div class="gallery-item"><div class="img-placeholder c1">🌌</div><div class="overlay"><span>Galaksi</span></div></div>
  <div class="gallery-item"><div class="img-placeholder c2">🌅</div><div class="overlay"><span>Sunset</span></div></div>
  <div class="gallery-item"><div class="img-placeholder c3">🌊</div><div class="overlay"><span>Laut</span></div></div>
  <div class="gallery-item"><div class="img-placeholder c4">🌸</div><div class="overlay"><span>Bunga</span></div></div>
  <div class="gallery-item"><div class="img-placeholder c5">🏔️</div><div class="overlay"><span>Gunung</span></div></div>
  <div class="gallery-item"><div class="img-placeholder c6">🌻</div><div class="overlay"><span>Matahari</span></div></div>
</div>
</body></html>`,
  quiz:{ question:'Property CSS mana yang membuat kolom grid sama lebar secara otomatis?', options:['grid-template-columns: auto','grid-template-columns: repeat(3, 1fr)','grid-columns: equal','columns: 3'], correctIndex:1, explanation:'repeat(3, 1fr) membuat 3 kolom dengan lebar yang sama (1 fraction unit masing-masing).' },
  prevPath:'css-dropdowns', nextPath:'css-attr-selectors'
},

// ── CSS ATTRIBUTE SELECTORS ───────────────────
'css-attr-selectors': {
  courseId:'css', title:'CSS Attribute Selectors', chapter:'CSS Tutorial', color:'blue',
  theory:`<h2>CSS Attribute Selectors</h2>
<p>Attribute selector memilih elemen berdasarkan atribut atau nilai atributnya.</p>
<h3>Jenis Attribute Selector</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-3">
  <span class="text-red-600">[attr]</span> - elemen yang punya atribut attr
</div>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-3">
  <span class="text-red-600">[attr="val"]</span> - nilai atribut tepat sama dengan val
</div>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-3">
  <span class="text-red-600">[attr^="val"]</span> - nilai atribut dimulai dengan val
</div>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-3">
  <span class="text-red-600">[attr$="val"]</span> - nilai atribut diakhiri dengan val
</div>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-3">
  <span class="text-red-600">[attr*="val"]</span> - nilai atribut mengandung val
</div>`,
  code:`<!DOCTYPE html>
<html><head><style>
body { font-family: Arial, sans-serif; padding: 20px; background: #f8fafc; }
.demo { background: white; border-radius: 12px; padding: 16px; margin: 12px 0; border: 1px solid #e2e8f0; }
.label { font-size: 0.7rem; font-weight: bold; color: #94a3b8; text-transform: uppercase; margin-bottom: 10px; }

/* [type="text"] */
input[type="text"] { border: 2px solid #6366f1; border-radius: 8px; padding: 8px 12px; outline: none; }
input[type="password"] { border: 2px solid #ef4444; border-radius: 8px; padding: 8px 12px; outline: none; }
input[type="email"] { border: 2px solid #22c55e; border-radius: 8px; padding: 8px 12px; outline: none; }

/* [href^="https"] - link aman */
a[href^="https"] { color: #22c55e; font-weight: bold; }
a[href^="https"]::before { content: "🔒 "; }

/* [href$=".pdf"] */
a[href$=".pdf"] { color: #ef4444; }
a[href$=".pdf"]::before { content: "📄 "; }

/* [class*="btn"] */
[class*="btn"] { padding: 8px 16px; border-radius: 8px; border: none; cursor: pointer; font-weight: bold; margin: 4px; }
.btn-primary { background: #6366f1; color: white; }
.btn-danger { background: #ef4444; color: white; }
.btn-success { background: #22c55e; color: white; }
</style></head><body>
<div class="demo">
  <div class="label">input[type="..."] - border berbeda per tipe</div>
  <input type="text" placeholder="text - indigo"><br><br>
  <input type="password" placeholder="password - merah"><br><br>
  <input type="email" placeholder="email - hijau">
</div>
<div class="demo">
  <div class="label">a[href^="https"] dan a[href$=".pdf"]</div>
  <a href="https://devgrow.id">Link HTTPS (aman)</a><br>
  <a href="http://example.com">Link HTTP biasa</a><br>
  <a href="dokumen.pdf">Download PDF</a>
</div>
<div class="demo">
  <div class="label">[class*="btn"] - semua class yang mengandung "btn"</div>
  <button class="btn-primary">Primary</button>
  <button class="btn-danger">Danger</button>
  <button class="btn-success">Success</button>
</div>
</body></html>`,
  quiz:{ question:'Selector [href$=".pdf"] memilih elemen dengan?', options:['href yang dimulai dengan .pdf','href yang mengandung .pdf','href yang diakhiri dengan .pdf','href yang sama persis dengan .pdf'], correctIndex:2, explanation:'$ dalam attribute selector berarti "diakhiri dengan" (ends with).' },
  prevPath:'css-image-gallery', nextPath:'css-forms'
},

// ── CSS FORMS ─────────────────────────────────
'css-forms': {
  courseId:'css', title:'CSS Forms', chapter:'CSS Tutorial', color:'blue',
  theory:`<h2>CSS Forms</h2>
<p>CSS dapat mengubah tampilan form HTML yang membosankan menjadi modern dan user-friendly.</p>
<h3>Elemen Form yang Bisa Di-style</h3>
<ul>
  <li><code>input</code> - text, email, password, number, dll</li>
  <li><code>textarea</code> - area teks multi-baris</li>
  <li><code>select</code> - dropdown pilihan</li>
  <li><code>button</code> - tombol submit</li>
  <li><code>label</code> - label untuk input</li>
</ul>
<h3>Pseudo-class Penting untuk Form</h3>
<ul>
  <li><code>:focus</code> - saat input aktif</li>
  <li><code>:valid</code> - input valid</li>
  <li><code>:invalid</code> - input tidak valid</li>
  <li><code>:disabled</code> - input dinonaktifkan</li>
  <li><code>:placeholder-shown</code> - saat placeholder terlihat</li>
</ul>`,
  code:`<!DOCTYPE html>
<html><head><style>
* { box-sizing: border-box; }
body { font-family: 'Segoe UI', Arial, sans-serif; background: #f0f4ff; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; padding: 20px; }

.form-card {
  background: white;
  border-radius: 20px;
  padding: 32px;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 8px 32px rgba(99,102,241,0.12);
}
.form-title { font-size: 1.5rem; font-weight: 900; color: #1e293b; margin-bottom: 4px; }
.form-subtitle { color: #94a3b8; font-size: 0.85rem; margin-bottom: 24px; }

.form-group { margin-bottom: 18px; }
label { display: block; font-size: 0.8rem; font-weight: 700; color: #475569; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.05em; }

input[type="text"],
input[type="email"],
input[type="password"],
select, textarea {
  width: 100%;
  padding: 12px 14px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 0.9rem;
  color: #1e293b;
  background: #f8fafc;
  outline: none;
  transition: all 0.2s;
}
input:focus, select:focus, textarea:focus {
  border-color: #6366f1;
  background: white;
  box-shadow: 0 0 0 4px rgba(99,102,241,0.1);
}
input:valid:not(:placeholder-shown) { border-color: #22c55e; }
input:invalid:not(:placeholder-shown) { border-color: #ef4444; }

textarea { resize: vertical; min-height: 100px; }
select { cursor: pointer; }

.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }

.btn-submit {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 8px;
}
.btn-submit:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(99,102,241,0.4); }
.btn-submit:active { transform: translateY(0); }

.checkbox-group { display: flex; align-items: center; gap: 10px; }
.checkbox-group input[type="checkbox"] { width: 18px; height: 18px; accent-color: #6366f1; cursor: pointer; }
.checkbox-group label { margin: 0; text-transform: none; font-size: 0.85rem; color: #64748b; font-weight: 500; }
</style></head><body>
<div class="form-card">
  <div class="form-title">Buat Akun</div>
  <div class="form-subtitle">Bergabung dan mulai belajar hari ini</div>

  <div class="form-row">
    <div class="form-group">
      <label>Nama Depan</label>
      <input type="text" placeholder="Arif">
    </div>
    <div class="form-group">
      <label>Nama Belakang</label>
      <input type="text" placeholder="Rahmat">
    </div>
  </div>

  <div class="form-group">
    <label>Email</label>
    <input type="email" placeholder="arif@email.com">
  </div>

  <div class="form-group">
    <label>Password</label>
    <input type="password" placeholder="Min. 8 karakter">
  </div>

  <div class="form-group">
    <label>Kursus Minat</label>
    <select>
      <option value="">Pilih kursus...</option>
      <option>HTML & CSS</option>
      <option>JavaScript</option>
      <option>React.js</option>
      <option>Node.js</option>
    </select>
  </div>

  <div class="form-group">
    <label>Tentang Kamu</label>
    <textarea placeholder="Ceritakan sedikit tentang dirimu..."></textarea>
  </div>

  <div class="form-group">
    <div class="checkbox-group">
      <input type="checkbox" id="agree">
      <label for="agree">Saya setuju dengan syarat dan ketentuan</label>
    </div>
  </div>

  <button class="btn-submit">Daftar Sekarang →</button>
</div>
</body></html>`,
  quiz:{ question:'Pseudo-class mana yang aktif saat input sedang dalam fokus?', options:[':active',':hover',':focus',':selected'], correctIndex:2, explanation:':focus aktif saat elemen input sedang aktif/dipilih oleh user.' },
  prevPath:'css-attr-selectors', nextPath:'css-counters'
},

// ── CSS COUNTERS ──────────────────────────────
'css-counters': {
  courseId:'css', title:'CSS Counters', chapter:'CSS Tutorial', color:'blue',
  theory:`<h2>CSS Counters</h2>
<p>CSS Counters memungkinkan kamu membuat penomoran otomatis menggunakan CSS tanpa JavaScript.</p>
<h3>Functions Counter</h3>
<ul>
  <li><code>counter-reset</code> - membuat atau mereset counter</li>
  <li><code>counter-increment</code> - menambah nilai counter</li>
  <li><code>counter(name)</code> - menampilkan nilai counter</li>
  <li><code>counters(name, str)</code> - counter bersarang</li>
</ul>
<h3>Contoh Dasar</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm">
  <span class="text-red-600">body</span> { <span class="text-blue-600">counter-reset</span>: <span class="text-green-600">section</span>; }<br/>
  <span class="text-red-600">h2::before</span> {<br/>
  &nbsp;&nbsp;<span class="text-blue-600">counter-increment</span>: <span class="text-green-600">section</span>;<br/>
  &nbsp;&nbsp;<span class="text-blue-600">content</span>: <span class="text-green-600">counter(section) ". "</span>;<br/>
  }
</div>`,
  code:`<!DOCTYPE html>
<html><head><style>
body { font-family: Arial, sans-serif; padding: 24px; background: #f8fafc; counter-reset: section; }

h2 {
  color: #1e293b;
  font-size: 1.2rem;
  margin: 20px 0 8px;
  display: flex;
  align-items: center;
  gap: 10px;
}
h2::before {
  counter-increment: section;
  content: counter(section);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: #6366f1;
  color: white;
  border-radius: 50%;
  font-size: 0.85rem;
  font-weight: bold;
  flex-shrink: 0;
}

/* Nested counter */
.nested-list { counter-reset: item; list-style: none; padding: 0; }
.nested-list li { counter-increment: item; padding: 8px 0 8px 40px; position: relative; color: #475569; border-bottom: 1px solid #f1f5f9; }
.nested-list li::before {
  content: counter(item, decimal-leading-zero);
  position: absolute;
  left: 0;
  font-weight: bold;
  color: #6366f1;
  font-size: 0.85rem;
}

p { color: #64748b; font-size: 0.9rem; margin-bottom: 4px; }
</style></head><body>
<h2>Pengenalan CSS</h2>
<p>CSS adalah bahasa untuk mendesain halaman web.</p>

<h2>Selector dan Properties</h2>
<p>Selector memilih elemen, properties mengatur tampilannya.</p>

<h2>Box Model</h2>
<p>Setiap elemen HTML adalah sebuah kotak.</p>

<h2>Flexbox dan Grid</h2>
<p>Layout modern menggunakan Flexbox dan Grid.</p>

<hr style="margin: 24px 0; border-color: #e2e8f0;">
<p style="font-weight:bold;color:#1e293b;margin-bottom:12px">Daftar dengan counter otomatis:</p>
<ul class="nested-list">
  <li>HTML Dasar</li>
  <li>CSS Styling</li>
  <li>JavaScript</li>
  <li>React.js</li>
  <li>Node.js</li>
</ul>
</body></html>`,
  quiz:{ question:'Property CSS mana yang digunakan untuk membuat counter baru?', options:['counter-create','counter-reset','counter-start','new-counter'], correctIndex:1, explanation:'counter-reset digunakan untuk membuat counter baru atau mereset nilai counter yang ada.' },
  prevPath:'css-forms', nextPath:'css-units'
},

// ── CSS UNITS ─────────────────────────────────
'css-units': {
  courseId:'css', title:'CSS Units', chapter:'CSS Tutorial', color:'blue',
  theory:`<h2>CSS Units</h2>
<p>CSS memiliki beberapa unit untuk mengekspresikan panjang/ukuran. Ada dua kategori: <strong>Absolute</strong> dan <strong>Relative</strong>.</p>
<h3>Absolute Units</h3>
<ul>
  <li><code>px</code> - pixel (paling umum)</li>
  <li><code>pt</code> - point (1pt = 1/72 inch)</li>
  <li><code>cm</code>, <code>mm</code>, <code>in</code> - centimeter, milimeter, inch</li>
</ul>
<h3>Relative Units</h3>
<ul>
  <li><code>em</code> - relatif terhadap font-size parent</li>
  <li><code>rem</code> - relatif terhadap font-size root (html)</li>
  <li><code>%</code> - persentase dari parent</li>
  <li><code>vw</code> - 1% dari lebar viewport</li>
  <li><code>vh</code> - 1% dari tinggi viewport</li>
  <li><code>vmin</code> / <code>vmax</code> - min/max dari vw dan vh</li>
</ul>
<div class="bg-indigo-50 border border-indigo-500 rounded-xl p-4 mt-4">
  <p class="text-indigo-900"><strong>Tips:</strong> Gunakan <code>rem</code> untuk font-size agar konsisten, <code>%</code> atau <code>vw/vh</code> untuk layout responsif.</p>
</div>`,
  code:`<!DOCTYPE html>
<html><head><style>
body { font-family: Arial, sans-serif; padding: 20px; background: #f8fafc; font-size: 16px; }
.demo { background: white; border-radius: 12px; padding: 16px; margin: 10px 0; border: 1px solid #e2e8f0; }
.label { font-size: 0.7rem; font-weight: bold; color: #94a3b8; text-transform: uppercase; margin-bottom: 8px; }
.bar { height: 36px; background: #6366f1; border-radius: 6px; display: flex; align-items: center; padding: 0 12px; color: white; font-weight: bold; font-size: 0.8rem; margin: 4px 0; }
.px200 { width: 200px; }
.pct50 { width: 50%; background: #22c55e; }
.vw40 { width: 40vw; background: #f59e0b; color: #1a1a1a; }
.em3 { width: 20em; background: #ef4444; }
.rem3 { width: 20rem; background: #8b5cf6; }
</style></head><body>
<div class="demo">
  <div class="label">Absolute: px</div>
  <div class="bar px200">width: 200px</div>
</div>
<div class="demo">
  <div class="label">Relative: % (dari parent)</div>
  <div class="bar pct50">width: 50%</div>
</div>
<div class="demo">
  <div class="label">Relative: vw (dari viewport)</div>
  <div class="bar vw40">width: 40vw</div>
</div>
<div class="demo">
  <div class="label">Relative: em (dari font-size parent = 16px, jadi 20em = 320px)</div>
  <div class="bar em3">width: 20em</div>
</div>
<div class="demo">
  <div class="label">Relative: rem (dari root font-size = 16px, jadi 20rem = 320px)</div>
  <div class="bar rem3">width: 20rem</div>
</div>
</body></html>`,
  quiz:{ question:'Unit CSS mana yang relatif terhadap font-size elemen ROOT (html)?', options:['em','px','rem','vw'], correctIndex:2, explanation:'rem (root em) selalu relatif terhadap font-size elemen html, tidak terpengaruh nesting.' },
  prevPath:'css-counters', nextPath:'css-specificity'
},

// ── CSS SPECIFICITY ───────────────────────────
'css-specificity': {
  courseId:'css', title:'CSS Specificity', chapter:'CSS Tutorial', color:'blue',
  theory:`<h2>CSS Specificity</h2>
<p>Specificity menentukan aturan CSS mana yang diterapkan ketika ada konflik. Nilai lebih tinggi = menang.</p>
<h3>Hierarki Specificity (dari tertinggi)</h3>
<ol>
  <li><strong>Inline styles</strong> - <code>style="..."</code> → nilai: 1000</li>
  <li><strong>ID selectors</strong> - <code>#id</code> → nilai: 100</li>
  <li><strong>Class, pseudo-class, attribute</strong> - <code>.class</code>, <code>:hover</code>, <code>[attr]</code> → nilai: 10</li>
  <li><strong>Element, pseudo-element</strong> - <code>p</code>, <code>::before</code> → nilai: 1</li>
</ol>
<div class="bg-orange-50 border border-orange-200 rounded-xl p-4 mt-4">
  <p class="text-orange-900"><strong>Contoh:</strong> <code>#nav .link:hover</code> = 100 + 10 + 10 = 120</p>
</div>
<h3>Universal Selector</h3>
<p><code>*</code> memiliki specificity 0 — tidak mempengaruhi perhitungan.</p>`,
  code:`<!DOCTYPE html>
<html><head><style>
body { font-family: Arial, sans-serif; padding: 20px; background: #f8fafc; }
.demo { background: white; border-radius: 12px; padding: 16px; margin: 12px 0; border: 1px solid #e2e8f0; }
.label { font-size: 0.7rem; font-weight: bold; color: #94a3b8; text-transform: uppercase; margin-bottom: 10px; }

/* Specificity: 1 (element) */
p { color: #94a3b8; font-size: 0.9rem; }

/* Specificity: 10 (class) - menang dari element */
.text-blue { color: #3b82f6; }

/* Specificity: 100 (id) - menang dari class */
#text-red { color: #ef4444; }

/* Specificity: 11 (element + class) */
p.text-green { color: #22c55e; }

/* Specificity: 110 (id + class) */
#text-purple.special { color: #8b5cf6; font-weight: bold; }

.spec-table { width: 100%; border-collapse: collapse; font-size: 0.85rem; }
.spec-table th { background: #6366f1; color: white; padding: 8px 12px; text-align: left; }
.spec-table td { padding: 8px 12px; border-bottom: 1px solid #f1f5f9; color: #334155; }
.spec-table tr:nth-child(even) td { background: #f8fafc; }
</style></head><body>
<div class="demo">
  <div class="label">Contoh Specificity</div>
  <p>Element selector (specificity: 1) - abu</p>
  <p class="text-blue">Class selector (specificity: 10) - biru</p>
  <p id="text-red">ID selector (specificity: 100) - merah</p>
  <p class="text-green">Element + Class (specificity: 11) - hijau</p>
  <p id="text-purple" class="special">ID + Class (specificity: 110) - ungu</p>
</div>
<div class="demo">
  <div class="label">Tabel Specificity</div>
  <table class="spec-table">
    <tr><th>Selector</th><th>Nilai</th></tr>
    <tr><td>*</td><td>0</td></tr>
    <tr><td>p, div, h1</td><td>1</td></tr>
    <tr><td>.class, :hover, [attr]</td><td>10</td></tr>
    <tr><td>#id</td><td>100</td></tr>
    <tr><td>style=""</td><td>1000</td></tr>
  </table>
</div>
</body></html>`,
  quiz:{ question:'Selector mana yang memiliki specificity TERTINGGI?', options:['p.class','#id','div p','.class:hover'], correctIndex:1, explanation:'ID selector (#id) memiliki specificity 100, lebih tinggi dari class (10) dan element (1).' },
  prevPath:'css-units', nextPath:'css-important'
},

// ── CSS !IMPORTANT ────────────────────────────
'css-important': {
  courseId:'css', title:'CSS !important', chapter:'CSS Tutorial', color:'blue',
  theory:`<h2>CSS !important</h2>
<p><code>!important</code> mengesampingkan semua aturan specificity lainnya dan memaksa style diterapkan.</p>
<h3>Sintaks</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  <span class="text-red-600">p</span> { <span class="text-blue-600">color</span>: <span class="text-green-600">red</span> <span class="text-orange-600 font-bold">!important</span>; }
</div>
<div class="bg-red-50 border border-red-200 rounded-xl p-4 mb-4">
  <p class="text-red-900"><strong>⚠️ Peringatan:</strong> Hindari penggunaan !important sebisa mungkin. Ini membuat CSS sulit di-debug dan di-maintain.</p>
</div>
<h3>Kapan Boleh Pakai?</h3>
<ul>
  <li>Override style dari library pihak ketiga</li>
  <li>Utility classes (seperti Tailwind CSS)</li>
  <li>Debugging sementara</li>
</ul>`,
  code:`<!DOCTYPE html>
<html><head><style>
body { font-family: Arial, sans-serif; padding: 20px; background: #f8fafc; }
.demo { background: white; border-radius: 12px; padding: 16px; margin: 12px 0; border: 1px solid #e2e8f0; }
.label { font-size: 0.7rem; font-weight: bold; color: #94a3b8; text-transform: uppercase; margin-bottom: 10px; }

/* Tanpa !important - ID menang */
#box1 { color: #ef4444; }
.blue-text { color: #3b82f6; }

/* Dengan !important - class menang meski specificity lebih rendah */
#box2 { color: #ef4444; }
.important-blue { color: #3b82f6 !important; }

/* Utility class contoh */
.text-center { text-align: center !important; }
.font-bold { font-weight: bold !important; }
.text-indigo { color: #6366f1 !important; }

p { font-size: 0.9rem; padding: 8px 12px; border-radius: 6px; background: #f8fafc; }
</style></head><body>
<div class="demo">
  <div class="label">Tanpa !important - ID (#box1) menang</div>
  <p id="box1" class="blue-text">Teks ini merah karena #id (100) > .class (10)</p>
</div>
<div class="demo">
  <div class="label">Dengan !important - .class menang meski specificity lebih rendah</div>
  <p id="box2" class="important-blue">Teks ini biru karena !important mengalahkan ID</p>
</div>
<div class="demo">
  <div class="label">Utility classes dengan !important</div>
  <p class="text-center font-bold text-indigo">Teks ini center, bold, dan indigo</p>
</div>
</body></html>`,
  quiz:{ question:'Kapan sebaiknya menggunakan !important?', options:['Selalu, untuk memastikan style diterapkan','Sesering mungkin','Hanya saat perlu override library pihak ketiga atau utility class','Tidak pernah'], correctIndex:2, explanation:'!important sebaiknya hanya digunakan untuk override style library eksternal atau utility class, bukan untuk styling biasa.' },
  prevPath:'css-specificity', nextPath:'css-rounded-corners'
},

// ── CSS ROUNDED CORNERS ───────────────────────
'css-rounded-corners': {
  courseId:'css', title:'CSS Rounded Corners', chapter:'CSS Advanced', color:'blue',
  theory:`<h2>CSS Rounded Corners</h2>
<p>Property <code>border-radius</code> digunakan untuk membuat sudut elemen menjadi membulat.</p>
<h3>Sintaks</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  <span class="text-blue-600">border-radius</span>: <span class="text-green-600">12px</span>; <span class="text-slate-400">/* semua sudut */</span><br/>
  <span class="text-blue-600">border-radius</span>: <span class="text-green-600">10px 20px 30px 40px</span>; <span class="text-slate-400">/* TL TR BR BL */</span><br/>
  <span class="text-blue-600">border-radius</span>: <span class="text-green-600">50%</span>; <span class="text-slate-400">/* lingkaran penuh */</span>
</div>
<h3>Individual Corner</h3>
<ul>
  <li><code>border-top-left-radius</code></li>
  <li><code>border-top-right-radius</code></li>
  <li><code>border-bottom-right-radius</code></li>
  <li><code>border-bottom-left-radius</code></li>
</ul>`,
  code:`<!DOCTYPE html>
<html><head><style>
body { font-family: Arial, sans-serif; padding: 24px; background: #f1f5f9; }
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.box { height: 80px; background: #6366f1; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 0.75rem; text-align: center; }
.r0  { border-radius: 0; }
.r8  { border-radius: 8px; }
.r16 { border-radius: 16px; }
.r50p { border-radius: 50%; }
.pill { border-radius: 999px; }
.mixed { border-radius: 0 24px 0 24px; }
.tl { border-top-left-radius: 32px; }
</style></head><body>
<div class="grid">
  <div class="box r0">0px</div>
  <div class="box r8">8px</div>
  <div class="box r16">16px</div>
  <div class="box r50p">50%<br/>(circle)</div>
  <div class="box pill">999px<br/>(pill)</div>
  <div class="box mixed">0 24px<br/>0 24px</div>
</div>
</body></html>`,
  quiz:{ question:'Nilai border-radius berapa yang membuat elemen menjadi lingkaran?', options:['border-radius: 100px','border-radius: 50%','border-radius: round','border-radius: circle'], correctIndex:1, explanation:'border-radius: 50% membuat elemen menjadi lingkaran sempurna (jika width = height).' },
  prevPath:'css-important', nextPath:'css-border-images'
},

// ── CSS BORDER IMAGES ─────────────────────────
'css-border-images': {
  courseId:'css', title:'CSS Border Images', chapter:'CSS Advanced', color:'blue',
  theory:`<h2>CSS Border Images</h2>
<p>Property <code>border-image</code> memungkinkan penggunaan gambar sebagai border elemen.</p>
<h3>Properties</h3>
<ul>
  <li><code>border-image-source</code> - sumber gambar</li>
  <li><code>border-image-slice</code> - cara memotong gambar</li>
  <li><code>border-image-width</code> - lebar border image</li>
  <li><code>border-image-repeat</code> - cara pengulangan (stretch, repeat, round)</li>
</ul>
<h3>Shorthand</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  <span class="text-blue-600">border-image</span>: <span class="text-green-600">url(border.png) 30 round</span>;
</div>
<h3>Gradient sebagai Border</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm">
  <span class="text-blue-600">border-image</span>: <span class="text-green-600">linear-gradient(red, blue) 1</span>;
</div>`,
  code:`<!DOCTYPE html>
<html><head><style>
body { font-family: Arial, sans-serif; padding: 24px; background: #f8fafc; }
.box { padding: 20px; margin: 16px 0; font-weight: bold; color: #334155; border: 6px solid transparent; border-radius: 0; }
.b1 { border-image: linear-gradient(135deg, #6366f1, #8b5cf6) 1; }
.b2 { border-image: linear-gradient(135deg, #f59e0b, #ef4444) 1; }
.b3 { border-image: linear-gradient(135deg, #22c55e, #06b6d4) 1; }
/* Gradient border dengan border-radius trick */
.grad-border {
  background: white;
  border-radius: 12px;
  padding: 20px;
  position: relative;
  margin: 16px 0;
  color: #334155;
  font-weight: bold;
}
.grad-border::before {
  content: '';
  position: absolute;
  inset: -3px;
  border-radius: 14px;
  background: linear-gradient(135deg, #6366f1, #ec4899);
  z-index: -1;
}
</style></head><body>
<div class="box b1">border-image: gradient indigo-violet</div>
<div class="box b2">border-image: gradient amber-red</div>
<div class="box b3">border-image: gradient green-cyan</div>
<div class="grad-border">Gradient border dengan border-radius (trick ::before)</div>
</body></html>`,
  quiz:{ question:'Property apa yang digunakan untuk membuat gradient border?', options:['border-color: gradient','border-image: linear-gradient(...)','background-border: gradient','border-style: gradient'], correctIndex:1, explanation:'border-image: linear-gradient(...) 1 digunakan untuk membuat gradient border.' },
  prevPath:'css-rounded-corners', nextPath:'css-gradients'
},

// ── CSS GRADIENTS ─────────────────────────────
'css-gradients': {
  courseId:'css', title:'CSS Gradients', chapter:'CSS Advanced', color:'blue',
  theory:`<h2>CSS Gradients</h2>
<p>CSS gradient memungkinkan transisi halus antara dua atau lebih warna.</p>
<h3>Jenis Gradient</h3>
<ul>
  <li><code>linear-gradient()</code> - gradient garis lurus</li>
  <li><code>radial-gradient()</code> - gradient melingkar dari titik pusat</li>
  <li><code>conic-gradient()</code> - gradient melingkar seperti kerucut</li>
  <li><code>repeating-linear-gradient()</code> - gradient berulang</li>
</ul>
<h3>Sintaks Linear Gradient</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  <span class="text-blue-600">background</span>: <span class="text-green-600">linear-gradient(direction, color1, color2)</span>;
</div>
<h3>Arah Gradient</h3>
<ul>
  <li><code>to right</code>, <code>to left</code>, <code>to bottom</code></li>
  <li><code>to bottom right</code> (diagonal)</li>
  <li><code>45deg</code>, <code>135deg</code> (sudut)</li>
</ul>`,
  code:`<!DOCTYPE html>
<html><head><style>
body { font-family: Arial, sans-serif; padding: 20px; background: #f8fafc; }
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.box { height: 90px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 0.8rem; text-align: center; padding: 8px; }
.g1 { background: linear-gradient(to right, #6366f1, #8b5cf6); }
.g2 { background: linear-gradient(135deg, #f59e0b, #ef4444); }
.g3 { background: linear-gradient(to bottom, #22c55e, #06b6d4); }
.g4 { background: radial-gradient(circle, #6366f1, #1e1b4b); }
.g5 { background: linear-gradient(135deg, #ec4899, #8b5cf6, #6366f1); }
.g6 { background: conic-gradient(#6366f1, #8b5cf6, #ec4899, #f59e0b, #6366f1); }
</style></head><body>
<div class="grid">
  <div class="box g1">linear to right<br/>indigo-violet</div>
  <div class="box g2">linear 135deg<br/>amber-red</div>
  <div class="box g3">linear to bottom<br/>green-cyan</div>
  <div class="box g4">radial-gradient<br/>circle</div>
  <div class="box g5">linear 3 warna<br/>pink-violet-indigo</div>
  <div class="box g6">conic-gradient</div>
</div>
</body></html>`,
  quiz:{ question:'Fungsi CSS mana yang membuat gradient melingkar dari titik pusat?', options:['linear-gradient()','conic-gradient()','radial-gradient()','circle-gradient()'], correctIndex:2, explanation:'radial-gradient() membuat gradient yang memancar dari titik pusat ke luar secara melingkar.' },
  prevPath:'css-border-images', nextPath:'css-shadows'
},

// ── CSS SHADOWS ───────────────────────────────
'css-shadows': {
  courseId:'css', title:'CSS Shadows', chapter:'CSS Advanced', color:'blue',
  theory:`<h2>CSS Shadows</h2>
<p>CSS menyediakan dua jenis shadow: <code>box-shadow</code> untuk elemen dan <code>text-shadow</code> untuk teks.</p>
<h3>box-shadow</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  <span class="text-blue-600">box-shadow</span>: <span class="text-green-600">h-offset v-offset blur spread color</span>;<br/>
  <span class="text-blue-600">box-shadow</span>: <span class="text-green-600">4px 4px 12px rgba(0,0,0,0.15)</span>;
</div>
<h3>text-shadow</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  <span class="text-blue-600">text-shadow</span>: <span class="text-green-600">2px 2px 4px rgba(0,0,0,0.3)</span>;
</div>
<h3>Multiple Shadows</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm">
  <span class="text-blue-600">box-shadow</span>: <span class="text-green-600">0 2px 4px rgba(0,0,0,0.1), 0 8px 24px rgba(0,0,0,0.15)</span>;
</div>`,
  code:`<!DOCTYPE html>
<html><head><style>
body { font-family: Arial, sans-serif; padding: 24px; background: #f1f5f9; }
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.card { background: white; border-radius: 12px; padding: 20px; font-size: 0.85rem; color: #334155; font-weight: bold; }
.s1 { box-shadow: 2px 2px 8px rgba(0,0,0,0.1); }
.s2 { box-shadow: 0 4px 16px rgba(99,102,241,0.3); }
.s3 { box-shadow: 0 8px 32px rgba(0,0,0,0.15), 0 2px 8px rgba(0,0,0,0.08); }
.s4 { box-shadow: inset 0 2px 8px rgba(0,0,0,0.1); background: #f8fafc; }
.s5 { box-shadow: 0 0 0 4px #6366f1, 0 0 0 8px rgba(99,102,241,0.2); }
.t1 { text-shadow: 2px 2px 4px rgba(0,0,0,0.3); font-size: 1.5rem; color: #1e293b; }
.t2 { text-shadow: 0 0 10px #6366f1, 0 0 20px #8b5cf6; font-size: 1.5rem; color: white; background: #1e293b; padding: 12px; border-radius: 8px; }
</style></head><body>
<div class="grid">
  <div class="card s1">box-shadow ringan</div>
  <div class="card s2">colored shadow (indigo)</div>
  <div class="card s3">multiple shadows</div>
  <div class="card s4">inset shadow</div>
  <div class="card s5">ring shadow</div>
  <div class="card t1">text-shadow</div>
</div>
<div class="card t2" style="margin-top:20px">Glow text-shadow</div>
</body></html>`,
  quiz:{ question:'Parameter apa saja yang ada di box-shadow?', options:['color, size, blur','h-offset v-offset blur spread color','x y radius color','top right bottom left color'], correctIndex:1, explanation:'box-shadow: h-offset v-offset blur spread color. Contoh: 4px 4px 12px 0 rgba(0,0,0,0.2)' },
  prevPath:'css-gradients', nextPath:'css-text-effects'
},

// ── CSS TEXT EFFECTS ──────────────────────────
'css-text-effects': {
  courseId:'css', title:'CSS Text Effects', chapter:'CSS Advanced', color:'blue',
  theory:`<h2>CSS Text Effects</h2>
<p>CSS menyediakan berbagai efek teks yang menarik.</p>
<h3>Properties Text Effects</h3>
<ul>
  <li><code>text-overflow</code> - menangani teks yang melebihi container (ellipsis)</li>
  <li><code>word-wrap</code> / <code>overflow-wrap</code> - memotong kata panjang</li>
  <li><code>word-break</code> - mengatur pemecahan kata</li>
  <li><code>writing-mode</code> - arah penulisan teks</li>
  <li><code>text-shadow</code> - bayangan teks</li>
  <li><code>background-clip: text</code> - gradient pada teks</li>
</ul>
<h3>Gradient Text</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm">
  <span class="text-blue-600">background</span>: <span class="text-green-600">linear-gradient(135deg, #6366f1, #ec4899)</span>;<br/>
  <span class="text-blue-600">-webkit-background-clip</span>: <span class="text-green-600">text</span>;<br/>
  <span class="text-blue-600">color</span>: <span class="text-green-600">transparent</span>;
</div>`,
  code:`<!DOCTYPE html>
<html><head><style>
body { font-family: Arial, sans-serif; padding: 24px; background: #f8fafc; }
.demo { background: white; border-radius: 12px; padding: 16px; margin: 12px 0; border: 1px solid #e2e8f0; }
.label { font-size: 0.7rem; font-weight: bold; color: #94a3b8; text-transform: uppercase; margin-bottom: 8px; }

/* text-overflow */
.ellipsis { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 200px; color: #334155; }

/* Gradient text */
.gradient-text {
  font-size: 2rem; font-weight: 900;
  background: linear-gradient(135deg, #6366f1, #ec4899);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* Glow effect */
.glow { font-size: 1.5rem; font-weight: bold; color: #6366f1; text-shadow: 0 0 10px rgba(99,102,241,0.5), 0 0 20px rgba(99,102,241,0.3); }

/* Stroke text */
.stroke { font-size: 2rem; font-weight: 900; color: transparent; -webkit-text-stroke: 2px #6366f1; }

/* writing-mode */
.vertical { writing-mode: vertical-rl; height: 120px; color: #334155; font-weight: bold; }
</style></head><body>
<div class="demo"><div class="label">text-overflow: ellipsis</div><div class="ellipsis">Teks yang sangat panjang ini akan dipotong dengan titik-titik</div></div>
<div class="demo"><div class="label">Gradient Text</div><div class="gradient-text">DevGrow.</div></div>
<div class="demo"><div class="label">Glow Effect</div><div class="glow">Glowing Text</div></div>
<div class="demo"><div class="label">Stroke Text (-webkit-text-stroke)</div><div class="stroke">Outline</div></div>
<div class="demo"><div class="label">writing-mode: vertical-rl</div><div class="vertical">Teks Vertikal</div></div>
</body></html>`,
  quiz:{ question:'Bagaimana cara membuat teks dengan warna gradient di CSS?', options:['color: gradient(...)','text-gradient: linear','background: gradient + background-clip: text + color: transparent','font-color: gradient'], correctIndex:2, explanation:'Kombinasi background gradient + -webkit-background-clip: text + color: transparent menghasilkan teks bergradient.' },
  prevPath:'css-shadows', nextPath:'css-custom-fonts'
},

// ── CSS CUSTOM FONTS ──────────────────────────
'css-custom-fonts': {
  courseId:'css', title:'CSS Custom Fonts', chapter:'CSS Advanced', color:'blue',
  theory:`<h2>CSS Custom Fonts</h2>
<p>Dengan <code>@font-face</code> kamu bisa menggunakan font kustom di website.</p>
<h3>@font-face</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  @<span class="text-purple-600">font-face</span> {<br/>
  &nbsp;&nbsp;<span class="text-blue-600">font-family</span>: <span class="text-green-600">'MyFont'</span>;<br/>
  &nbsp;&nbsp;<span class="text-blue-600">src</span>: <span class="text-green-600">url('myfont.woff2') format('woff2')</span>;<br/>
  }
</div>
<h3>Google Fonts (Cara Termudah)</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  &lt;<span class="text-blue-600">link</span> href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet"&gt;
</div>
<h3>Format Font</h3>
<ul>
  <li><code>woff2</code> - format terbaik, ukuran terkecil</li>
  <li><code>woff</code> - dukungan browser luas</li>
  <li><code>ttf</code> - TrueType Font</li>
</ul>`,
  code:`<!DOCTYPE html>
<html><head>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&family=Playfair+Display:wght@700;900&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
<style>
body { padding: 24px; background: #f8fafc; }
.demo { background: white; border-radius: 12px; padding: 20px; margin: 12px 0; border: 1px solid #e2e8f0; }
.label { font-size: 0.7rem; font-weight: bold; color: #94a3b8; text-transform: uppercase; margin-bottom: 8px; font-family: Arial; }
.inter { font-family: 'Inter', sans-serif; font-size: 1.3rem; color: #1e293b; }
.inter-bold { font-family: 'Inter', sans-serif; font-weight: 900; font-size: 1.5rem; color: #6366f1; }
.playfair { font-family: 'Playfair Display', serif; font-size: 1.5rem; color: #1e293b; }
.mono { font-family: 'JetBrains Mono', monospace; font-size: 1rem; color: #6366f1; background: #f1f5f9; padding: 8px 12px; border-radius: 6px; }
</style></head><body>
<div class="demo"><div class="label">Inter (sans-serif) - weight 400</div><div class="inter">The quick brown fox jumps over the lazy dog</div></div>
<div class="demo"><div class="label">Inter - weight 900</div><div class="inter-bold">DevGrow Academy</div></div>
<div class="demo"><div class="label">Playfair Display (serif)</div><div class="playfair">Elegant Typography</div></div>
<div class="demo"><div class="label">JetBrains Mono (monospace)</div><div class="mono">const hello = "world";</div></div>
</body></html>`,
  quiz:{ question:'Format font mana yang paling direkomendasikan untuk web karena ukurannya terkecil?', options:['ttf','otf','woff','woff2'], correctIndex:3, explanation:'woff2 adalah format font web terbaik dengan kompresi terbaik dan dukungan browser modern.' },
  prevPath:'css-text-effects', nextPath:'css-2d-transforms'
},

// ── CSS 2D TRANSFORMS ─────────────────────────
'css-2d-transforms': {
  courseId:'css', title:'CSS 2D Transforms', chapter:'CSS Advanced', color:'blue',
  theory:`<h2>CSS 2D Transforms</h2>
<p>Property <code>transform</code> memungkinkan kamu memodifikasi elemen secara 2D.</p>
<h3>Fungsi Transform 2D</h3>
<ul>
  <li><code>translate(x, y)</code> - memindahkan elemen</li>
  <li><code>rotate(deg)</code> - memutar elemen</li>
  <li><code>scale(x, y)</code> - mengubah ukuran</li>
  <li><code>skew(x, y)</code> - memiringkan elemen</li>
  <li><code>matrix()</code> - kombinasi semua transform</li>
</ul>
<h3>Contoh</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm">
  <span class="text-blue-600">transform</span>: <span class="text-green-600">rotate(45deg)</span>;<br/>
  <span class="text-blue-600">transform</span>: <span class="text-green-600">scale(1.5)</span>;<br/>
  <span class="text-blue-600">transform</span>: <span class="text-green-600">translate(50px, 20px)</span>;
</div>`,
  code:`<!DOCTYPE html>
<html><head><style>
body { font-family: Arial, sans-serif; padding: 24px; background: #f8fafc; }
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; padding: 20px; }
.box { width: 80px; height: 80px; background: #6366f1; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 0.7rem; text-align: center; margin: auto; transition: transform 0.3s; }
.box:hover { background: #4338ca; }
.translate:hover { transform: translate(10px, -10px); }
.rotate:hover { transform: rotate(45deg); }
.scale:hover { transform: scale(1.3); }
.skew:hover { transform: skew(15deg, 5deg); }
.combo:hover { transform: rotate(15deg) scale(1.2); }
.flip:hover { transform: scaleX(-1); }
.label { text-align: center; font-size: 0.7rem; color: #64748b; margin-top: 8px; font-weight: bold; }
</style></head><body>
<p style="color:#64748b;margin-bottom:16px;font-size:0.9rem">Hover setiap kotak untuk melihat transform:</p>
<div class="grid">
  <div><div class="box translate">Hover</div><div class="label">translate</div></div>
  <div><div class="box rotate">Hover</div><div class="label">rotate</div></div>
  <div><div class="box scale">Hover</div><div class="label">scale</div></div>
  <div><div class="box skew">Hover</div><div class="label">skew</div></div>
  <div><div class="box combo">Hover</div><div class="label">rotate+scale</div></div>
  <div><div class="box flip">Hover</div><div class="label">flip (scaleX)</div></div>
</div>
</body></html>`,
  quiz:{ question:'Fungsi transform mana yang digunakan untuk memindahkan elemen?', options:['transform: move()','transform: position()','transform: translate()','transform: shift()'], correctIndex:2, explanation:'translate(x, y) memindahkan elemen dari posisi aslinya tanpa mempengaruhi layout.' },
  prevPath:'css-custom-fonts', nextPath:'css-3d-transforms'
},

// ── CSS 3D TRANSFORMS ─────────────────────────
'css-3d-transforms': {
  courseId:'css', title:'CSS 3D Transforms', chapter:'CSS Advanced', color:'blue',
  theory:`<h2>CSS 3D Transforms</h2>
<p>CSS juga mendukung transformasi 3D menggunakan sumbu X, Y, dan Z.</p>
<h3>Fungsi Transform 3D</h3>
<ul>
  <li><code>rotateX(deg)</code> - putar di sumbu X</li>
  <li><code>rotateY(deg)</code> - putar di sumbu Y</li>
  <li><code>rotateZ(deg)</code> - putar di sumbu Z</li>
  <li><code>translateZ(px)</code> - pindah di sumbu Z</li>
  <li><code>perspective(px)</code> - kedalaman perspektif</li>
</ul>
<h3>Setup 3D</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm">
  <span class="text-red-600">.container</span> { <span class="text-blue-600">perspective</span>: <span class="text-green-600">1000px</span>; }<br/>
  <span class="text-red-600">.box</span> { <span class="text-blue-600">transform-style</span>: <span class="text-green-600">preserve-3d</span>; }
</div>`,
  code:`<!DOCTYPE html>
<html><head><style>
body { font-family: Arial, sans-serif; padding: 24px; background: #f8fafc; }
.scene { perspective: 600px; display: flex; gap: 40px; flex-wrap: wrap; padding: 20px; }
.box {
  width: 100px; height: 100px; background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border-radius: 8px; display: flex; align-items: center; justify-content: center;
  color: white; font-weight: bold; font-size: 0.75rem; text-align: center;
  transition: transform 0.5s; cursor: pointer;
}
.box:hover { background: linear-gradient(135deg, #4338ca, #7c3aed); }
.rx:hover { transform: rotateX(45deg); }
.ry:hover { transform: rotateY(45deg); }
.rz:hover { transform: rotateZ(45deg); }
.flip-card { width: 120px; height: 80px; perspective: 600px; }
.flip-inner { width: 100%; height: 100%; position: relative; transform-style: preserve-3d; transition: transform 0.6s; }
.flip-card:hover .flip-inner { transform: rotateY(180deg); }
.flip-front, .flip-back {
  position: absolute; width: 100%; height: 100%; backface-visibility: hidden;
  border-radius: 8px; display: flex; align-items: center; justify-content: center;
  font-weight: bold; font-size: 0.8rem; color: white;
}
.flip-front { background: #6366f1; }
.flip-back { background: #22c55e; transform: rotateY(180deg); }
.label { text-align: center; font-size: 0.7rem; color: #64748b; margin-top: 8px; }
</style></head><body>
<p style="color:#64748b;margin-bottom:8px;font-size:0.9rem">Hover untuk melihat 3D transform:</p>
<div class="scene">
  <div><div class="box rx">Hover</div><div class="label">rotateX</div></div>
  <div><div class="box ry">Hover</div><div class="label">rotateY</div></div>
  <div><div class="box rz">Hover</div><div class="label">rotateZ</div></div>
  <div>
    <div class="flip-card"><div class="flip-inner"><div class="flip-front">DEPAN</div><div class="flip-back">BELAKANG</div></div></div>
    <div class="label">Flip Card</div>
  </div>
</div>
</body></html>`,
  quiz:{ question:'Property apa yang diperlukan pada container untuk mengaktifkan efek 3D?', options:['transform: 3d','display: 3d','perspective: nilai','depth: true'], correctIndex:2, explanation:'perspective pada container parent diperlukan untuk memberikan kedalaman pada efek 3D.' },
  prevPath:'css-2d-transforms', nextPath:'css-transitions'
},

// ── CSS TRANSITIONS ───────────────────────────
'css-transitions': {
  courseId:'css', title:'CSS Transitions', chapter:'CSS Advanced', color:'blue',
  theory:`<h2>CSS Transitions</h2>
<p>Transition memungkinkan perubahan nilai property CSS terjadi secara halus dalam durasi tertentu.</p>
<h3>Properties Transition</h3>
<ul>
  <li><code>transition-property</code> - property yang di-transisi</li>
  <li><code>transition-duration</code> - durasi (0.3s, 500ms)</li>
  <li><code>transition-timing-function</code> - kurva kecepatan</li>
  <li><code>transition-delay</code> - penundaan sebelum mulai</li>
</ul>
<h3>Shorthand</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  <span class="text-blue-600">transition</span>: <span class="text-green-600">property duration timing-function delay</span>;<br/>
  <span class="text-blue-600">transition</span>: <span class="text-green-600">all 0.3s ease</span>;
</div>
<h3>Timing Functions</h3>
<ul>
  <li><code>ease</code> - lambat-cepat-lambat (default)</li>
  <li><code>linear</code> - kecepatan konstan</li>
  <li><code>ease-in</code> - mulai lambat</li>
  <li><code>ease-out</code> - akhir lambat</li>
  <li><code>cubic-bezier()</code> - kustom</li>
</ul>`,
  code:`<!DOCTYPE html>
<html><head><style>
body { font-family: Arial, sans-serif; padding: 24px; background: #f8fafc; }
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.btn {
  padding: 14px 20px; border: none; border-radius: 10px; cursor: pointer;
  font-weight: bold; font-size: 0.9rem; color: white; background: #6366f1;
}
/* Berbagai transition */
.t1 { transition: background 0.3s ease; }
.t1:hover { background: #4338ca; }
.t2 { transition: transform 0.3s ease, box-shadow 0.3s ease; }
.t2:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(99,102,241,0.4); }
.t3 { transition: all 0.3s ease; border-radius: 10px; }
.t3:hover { border-radius: 999px; background: #22c55e; }
.t4 { transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); }
.t4:hover { transform: scale(1.1); }
.t5 { background: white; color: #6366f1; border: 2px solid #6366f1; transition: all 0.3s ease; }
.t5:hover { background: #6366f1; color: white; }
.t6 { transition: all 0.5s ease; }
.t6:hover { background: #ec4899; transform: rotate(5deg) scale(1.05); }
</style></head><body>
<p style="color:#64748b;margin-bottom:16px;font-size:0.9rem">Hover setiap tombol:</p>
<div class="grid">
  <button class="btn t1">Color Transition</button>
  <button class="btn t2">Lift + Shadow</button>
  <button class="btn t3">Shape Change</button>
  <button class="btn t4">Bounce (cubic-bezier)</button>
  <button class="btn t5">Fill Effect</button>
  <button class="btn t6">Multi Transition</button>
</div>
</body></html>`,
  quiz:{ question:'Property transition mana yang mengatur kecepatan perubahan?', options:['transition-speed','transition-duration','transition-time','transition-rate'], correctIndex:1, explanation:'transition-duration mengatur berapa lama transisi berlangsung (contoh: 0.3s atau 300ms).' },
  prevPath:'css-3d-transforms', nextPath:'css-animations'
},

// ── CSS ANIMATIONS ────────────────────────────
'css-animations': {
  courseId:'css', title:'CSS Animations', chapter:'CSS Advanced', color:'blue',
  theory:`<h2>CSS Animations</h2>
<p>CSS Animations memungkinkan animasi elemen HTML tanpa JavaScript menggunakan <code>@keyframes</code>.</p>
<h3>@keyframes</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  @<span class="text-purple-600">keyframes</span> <span class="text-red-600">namaAnimasi</span> {<br/>
  &nbsp;&nbsp;<span class="text-green-600">from</span> { <span class="text-blue-600">opacity</span>: 0; }<br/>
  &nbsp;&nbsp;<span class="text-green-600">to</span> { <span class="text-blue-600">opacity</span>: 1; }<br/>
  }
</div>
<h3>Properties Animation</h3>
<ul>
  <li><code>animation-name</code> - nama @keyframes</li>
  <li><code>animation-duration</code> - durasi</li>
  <li><code>animation-timing-function</code> - kurva kecepatan</li>
  <li><code>animation-delay</code> - penundaan</li>
  <li><code>animation-iteration-count</code> - jumlah pengulangan (infinite)</li>
  <li><code>animation-direction</code> - arah (normal, reverse, alternate)</li>
  <li><code>animation-fill-mode</code> - state sebelum/sesudah animasi</li>
</ul>`,
  code:`<!DOCTYPE html>
<html><head><style>
body { font-family: Arial, sans-serif; padding: 24px; background: #f8fafc; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
@keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.1); } }
@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
@keyframes colorShift { 0% { background: #6366f1; } 33% { background: #ec4899; } 66% { background: #f59e0b; } 100% { background: #6366f1; } }
@keyframes slideIn { from { transform: translateX(-100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }

.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.box { height: 80px; border-radius: 12px; background: #6366f1; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 0.8rem; }
.fade { animation: fadeIn 1s ease forwards; }
.pulse { animation: pulse 1.5s ease infinite; }
.spin { animation: spin 2s linear infinite; width: 60px; height: 60px; border-radius: 50%; margin: auto; }
.bounce { animation: bounce 1s ease infinite; }
.color { animation: colorShift 3s ease infinite; }
.slide { animation: slideIn 0.8s ease forwards; }
</style></head><body>
<div class="grid">
  <div class="box fade">fadeIn</div>
  <div class="box pulse">pulse</div>
  <div class="box"><div class="spin"></div></div>
  <div class="box bounce">bounce</div>
  <div class="box color">colorShift</div>
  <div class="box slide">slideIn</div>
</div>
</body></html>`,
  quiz:{ question:'Apa fungsi @keyframes dalam CSS Animation?', options:['Mendefinisikan durasi animasi','Mendefinisikan tahapan/frame animasi','Mengulang animasi','Menghentikan animasi'], correctIndex:1, explanation:'@keyframes mendefinisikan tahapan animasi - dari state awal hingga akhir dengan persentase atau from/to.' },
  prevPath:'css-transitions', nextPath:'css-tooltips'
},

// ── CSS TOOLTIPS ──────────────────────────────
'css-tooltips': {
  courseId:'css', title:'CSS Tooltips', chapter:'CSS Advanced', color:'blue',
  theory:`<h2>CSS Tooltips</h2>
<p>Tooltip adalah kotak kecil yang muncul saat hover elemen, memberikan informasi tambahan.</p>
<h3>Teknik Dasar</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  <span class="text-red-600">.tooltip</span> { <span class="text-blue-600">position</span>: <span class="text-green-600">relative</span>; }<br/>
  <span class="text-red-600">.tooltip .tip</span> { <span class="text-blue-600">visibility</span>: <span class="text-green-600">hidden</span>; <span class="text-blue-600">position</span>: <span class="text-green-600">absolute</span>; }<br/>
  <span class="text-red-600">.tooltip:hover .tip</span> { <span class="text-blue-600">visibility</span>: <span class="text-green-600">visible</span>; }
</div>
<h3>Posisi Tooltip</h3>
<ul>
  <li>Top: <code>bottom: 100%</code></li>
  <li>Bottom: <code>top: 100%</code></li>
  <li>Left: <code>right: 100%</code></li>
  <li>Right: <code>left: 100%</code></li>
</ul>`,
  code:`<!DOCTYPE html>
<html><head><style>
body { font-family: Arial, sans-serif; padding: 60px 24px; background: #f8fafc; }
.row { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; }
.tooltip { position: relative; display: inline-block; }
.btn { padding: 10px 20px; background: #6366f1; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 0.85rem; }
.tip {
  visibility: hidden; opacity: 0;
  background: #1e293b; color: white;
  padding: 6px 12px; border-radius: 6px;
  font-size: 0.75rem; white-space: nowrap;
  position: absolute; z-index: 10;
  transition: opacity 0.2s;
}
.tooltip:hover .tip { visibility: visible; opacity: 1; }
/* Arrow */
.tip::after { content: ''; position: absolute; border: 5px solid transparent; }
/* Top */
.tip-top { bottom: calc(100% + 8px); left: 50%; transform: translateX(-50%); }
.tip-top::after { top: 100%; left: 50%; transform: translateX(-50%); border-top-color: #1e293b; }
/* Bottom */
.tip-bottom { top: calc(100% + 8px); left: 50%; transform: translateX(-50%); }
.tip-bottom::after { bottom: 100%; left: 50%; transform: translateX(-50%); border-bottom-color: #1e293b; }
/* Left */
.tip-left { right: calc(100% + 8px); top: 50%; transform: translateY(-50%); }
.tip-left::after { left: 100%; top: 50%; transform: translateY(-50%); border-left-color: #1e293b; }
/* Right */
.tip-right { left: calc(100% + 8px); top: 50%; transform: translateY(-50%); }
.tip-right::after { right: 100%; top: 50%; transform: translateY(-50%); border-right-color: #1e293b; }
</style></head><body>
<div class="row">
  <div class="tooltip"><button class="btn">Top</button><span class="tip tip-top">Tooltip di atas!</span></div>
  <div class="tooltip"><button class="btn">Bottom</button><span class="tip tip-bottom">Tooltip di bawah!</span></div>
  <div class="tooltip"><button class="btn">Left</button><span class="tip tip-left">Tooltip kiri!</span></div>
  <div class="tooltip"><button class="btn">Right</button><span class="tip tip-right">Tooltip kanan!</span></div>
</div>
</body></html>`,
  quiz:{ question:'Property CSS mana yang digunakan untuk menyembunyikan tooltip secara default?', options:['display: none','opacity: 0','visibility: hidden','hidden: true'], correctIndex:2, explanation:'visibility: hidden menyembunyikan tooltip tapi tetap mengambil ruang, sehingga posisi tidak bergeser.' },
  prevPath:'css-animations', nextPath:'css-image-styling'
},

// ── CSS IMAGE STYLING ─────────────────────────
'css-image-styling': {
  courseId:'css', title:'CSS Image Styling', chapter:'CSS Advanced', color:'blue',
  theory:`<h2>CSS Image Styling</h2>
<p>CSS menyediakan banyak cara untuk mempercantik tampilan gambar.</p>
<h3>Properties Gambar</h3>
<ul>
  <li><code>border-radius</code> - sudut membulat / lingkaran</li>
  <li><code>box-shadow</code> - bayangan gambar</li>
  <li><code>filter</code> - efek visual (blur, grayscale, brightness, dll)</li>
  <li><code>object-fit</code> - cara gambar mengisi container</li>
  <li><code>opacity</code> - transparansi</li>
</ul>
<h3>CSS Filter</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm">
  <span class="text-blue-600">filter</span>: <span class="text-green-600">grayscale(100%)</span>;<br/>
  <span class="text-blue-600">filter</span>: <span class="text-green-600">blur(4px)</span>;<br/>
  <span class="text-blue-600">filter</span>: <span class="text-green-600">brightness(1.5)</span>;<br/>
  <span class="text-blue-600">filter</span>: <span class="text-green-600">sepia(80%)</span>;
</div>`,
  code:`<!DOCTYPE html>
<html><head><style>
body { font-family: Arial, sans-serif; padding: 24px; background: #f8fafc; }
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.img-wrap { text-align: center; }
.label { font-size: 0.7rem; font-weight: bold; color: #94a3b8; text-transform: uppercase; margin-top: 8px; }
img { width: 100%; height: 100px; object-fit: cover; border-radius: 8px; display: block; }
.normal {}
.rounded { border-radius: 50%; height: 100px; width: 100px; margin: auto; }
.shadow { box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
.grayscale { filter: grayscale(100%); }
.sepia { filter: sepia(80%); }
.blur { filter: blur(3px); }
.bright { filter: brightness(1.4) saturate(1.3); }
.hover-zoom { transition: transform 0.3s; cursor: pointer; }
.hover-zoom:hover { transform: scale(1.05); }
</style></head><body>
<div class="grid">
  <div class="img-wrap"><img src="https://picsum.photos/200/100?random=1" class="normal"><div class="label">Normal</div></div>
  <div class="img-wrap"><img src="https://picsum.photos/200/100?random=1" class="shadow"><div class="label">box-shadow</div></div>
  <div class="img-wrap"><img src="https://picsum.photos/200/100?random=1" class="grayscale"><div class="label">grayscale</div></div>
  <div class="img-wrap"><img src="https://picsum.photos/200/100?random=1" class="sepia"><div class="label">sepia</div></div>
  <div class="img-wrap"><img src="https://picsum.photos/200/100?random=1" class="blur"><div class="label">blur</div></div>
  <div class="img-wrap"><img src="https://picsum.photos/200/100?random=1" class="bright hover-zoom"><div class="label">bright + hover zoom</div></div>
</div>
</body></html>`,
  quiz:{ question:'Property CSS mana yang digunakan untuk membuat gambar menjadi hitam putih?', options:['color: grayscale','filter: grayscale(100%)','image-filter: bw','opacity: grayscale'], correctIndex:1, explanation:'filter: grayscale(100%) mengubah gambar menjadi hitam putih sepenuhnya.' },
  prevPath:'css-tooltips', nextPath:'css-object-fit'
},

// ── CSS OBJECT-FIT ────────────────────────────
'css-object-fit': {
  courseId:'css', title:'CSS object-fit', chapter:'CSS Advanced', color:'blue',
  theory:`<h2>CSS object-fit</h2>
<p>Property <code>object-fit</code> menentukan bagaimana gambar atau video mengisi container-nya.</p>
<h3>Nilai object-fit</h3>
<ul>
  <li><code>fill</code> - mengisi penuh, bisa terdistorsi (default)</li>
  <li><code>contain</code> - muat seluruh gambar, ada ruang kosong</li>
  <li><code>cover</code> - mengisi penuh, dipotong jika perlu</li>
  <li><code>none</code> - ukuran asli gambar</li>
  <li><code>scale-down</code> - pilih yang lebih kecil antara none dan contain</li>
</ul>
<h3>object-position</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm">
  <span class="text-blue-600">object-position</span>: <span class="text-green-600">center top</span>; <span class="text-slate-400">/* posisi fokus gambar */</span>
</div>`,
  code:`<!DOCTYPE html>
<html><head><style>
body { font-family: Arial, sans-serif; padding: 24px; background: #f8fafc; }
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.img-box { background: #e2e8f0; border-radius: 8px; overflow: hidden; }
img { width: 100%; height: 120px; display: block; }
.fill { object-fit: fill; }
.contain { object-fit: contain; background: #dbeafe; }
.cover { object-fit: cover; }
.none-fit { object-fit: none; }
.scale { object-fit: scale-down; }
.pos { object-fit: cover; object-position: top; }
.label { font-size: 0.7rem; font-weight: bold; color: #64748b; text-align: center; padding: 6px; text-transform: uppercase; }
</style></head><body>
<div class="grid">
  <div><div class="img-box"><img src="https://picsum.photos/300/200?random=5" class="fill"></div><div class="label">fill (distorsi)</div></div>
  <div><div class="img-box"><img src="https://picsum.photos/300/200?random=5" class="contain"></div><div class="label">contain</div></div>
  <div><div class="img-box"><img src="https://picsum.photos/300/200?random=5" class="cover"></div><div class="label">cover (terbaik)</div></div>
  <div><div class="img-box"><img src="https://picsum.photos/300/200?random=5" class="none-fit"></div><div class="label">none</div></div>
  <div><div class="img-box"><img src="https://picsum.photos/300/200?random=5" class="scale"></div><div class="label">scale-down</div></div>
  <div><div class="img-box"><img src="https://picsum.photos/300/200?random=5" class="pos"></div><div class="label">cover + top</div></div>
</div>
</body></html>`,
  quiz:{ question:'Nilai object-fit mana yang paling sering digunakan untuk gambar thumbnail?', options:['fill','contain','cover','none'], correctIndex:2, explanation:'object-fit: cover mengisi container penuh sambil mempertahankan rasio aspek gambar, ideal untuk thumbnail.' },
  prevPath:'css-image-styling', nextPath:'css-masking'
},

// ── CSS MASKING ───────────────────────────────
'css-masking': {
  courseId:'css', title:'CSS Masking', chapter:'CSS Advanced', color:'blue',
  theory:`<h2>CSS Masking</h2>
<p>CSS Masking memungkinkan kamu menyembunyikan bagian elemen menggunakan mask image.</p>
<h3>Properties Masking</h3>
<ul>
  <li><code>mask-image</code> - gambar atau gradient sebagai mask</li>
  <li><code>mask-size</code> - ukuran mask</li>
  <li><code>mask-position</code> - posisi mask</li>
  <li><code>mask-repeat</code> - pengulangan mask</li>
</ul>
<h3>clip-path</h3>
<p>Alternatif masking yang lebih sederhana:</p>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm">
  <span class="text-blue-600">clip-path</span>: <span class="text-green-600">circle(50%)</span>;<br/>
  <span class="text-blue-600">clip-path</span>: <span class="text-green-600">polygon(50% 0%, 100% 100%, 0% 100%)</span>;<br/>
  <span class="text-blue-600">clip-path</span>: <span class="text-green-600">ellipse(50% 30% at 50% 50%)</span>;
</div>`,
  code:`<!DOCTYPE html>
<html><head><style>
body { font-family: Arial, sans-serif; padding: 24px; background: #f8fafc; }
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.shape { width: 100px; height: 100px; background: linear-gradient(135deg, #6366f1, #ec4899); margin: auto; }
.circle { clip-path: circle(50%); }
.triangle { clip-path: polygon(50% 0%, 100% 100%, 0% 100%); }
.diamond { clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); }
.star { clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%); }
.hexagon { clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%); }
.arrow { clip-path: polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%); }
.label { text-align: center; font-size: 0.7rem; color: #64748b; margin-top: 8px; font-weight: bold; text-transform: uppercase; }
/* Mask gradient */
.mask-demo { width: 100%; height: 80px; background: linear-gradient(135deg, #6366f1, #ec4899); border-radius: 8px; -webkit-mask-image: linear-gradient(to right, transparent, black 30%, black 70%, transparent); mask-image: linear-gradient(to right, transparent, black 30%, black 70%, transparent); }
</style></head><body>
<div class="grid">
  <div><div class="shape circle"></div><div class="label">circle</div></div>
  <div><div class="shape triangle"></div><div class="label">triangle</div></div>
  <div><div class="shape diamond"></div><div class="label">diamond</div></div>
  <div><div class="shape star"></div><div class="label">star</div></div>
  <div><div class="shape hexagon"></div><div class="label">hexagon</div></div>
  <div><div class="shape arrow"></div><div class="label">arrow</div></div>
</div>
<div style="margin-top:20px"><div class="label" style="text-align:left;margin-bottom:8px">mask-image gradient (fade edges)</div><div class="mask-demo"></div></div>
</body></html>`,
  quiz:{ question:'Property CSS mana yang digunakan untuk memotong elemen menjadi bentuk tertentu?', options:['shape-outside','clip-path','mask-shape','border-clip'], correctIndex:1, explanation:'clip-path memotong elemen menjadi bentuk yang ditentukan seperti circle, polygon, dll.' },
  prevPath:'css-object-fit', nextPath:'css-buttons'
},

// ── CSS BUTTONS ───────────────────────────────
'css-buttons': {
  courseId:'css', title:'CSS Buttons', chapter:'CSS Advanced', color:'blue',
  theory:`<h2>CSS Buttons</h2>
<p>CSS memungkinkan pembuatan tombol yang menarik dan interaktif.</p>
<h3>Properties Penting untuk Tombol</h3>
<ul>
  <li><code>padding</code> - ukuran tombol</li>
  <li><code>border-radius</code> - sudut membulat</li>
  <li><code>cursor: pointer</code> - kursor tangan</li>
  <li><code>transition</code> - animasi hover</li>
  <li><code>box-shadow</code> - efek kedalaman</li>
  <li><code>:hover</code> dan <code>:active</code> - state interaktif</li>
</ul>
<h3>Jenis Tombol Umum</h3>
<ul>
  <li>Solid / Filled</li>
  <li>Outline / Ghost</li>
  <li>Gradient</li>
  <li>Icon button</li>
  <li>Loading state</li>
</ul>`,
  code:`<!DOCTYPE html>
<html><head><style>
body { font-family: Arial, sans-serif; padding: 24px; background: #f8fafc; }
.row { display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 16px; }
.btn { padding: 10px 22px; border-radius: 8px; font-weight: bold; font-size: 0.9rem; cursor: pointer; transition: all 0.2s; border: none; }

/* Solid */
.solid { background: #6366f1; color: white; }
.solid:hover { background: #4338ca; transform: translateY(-2px); box-shadow: 0 6px 20px rgba(99,102,241,0.4); }
.solid:active { transform: translateY(0); }

/* Outline */
.outline { background: transparent; color: #6366f1; border: 2px solid #6366f1; }
.outline:hover { background: #6366f1; color: white; }

/* Gradient */
.gradient { background: linear-gradient(135deg, #6366f1, #ec4899); color: white; }
.gradient:hover { opacity: 0.9; transform: translateY(-2px); box-shadow: 0 6px 20px rgba(99,102,241,0.4); }

/* Pill */
.pill { border-radius: 999px; background: #22c55e; color: white; }
.pill:hover { background: #16a34a; }

/* Danger */
.danger { background: #ef4444; color: white; }
.danger:hover { background: #dc2626; }

/* Disabled */
.disabled { background: #e2e8f0; color: #94a3b8; cursor: not-allowed; }

/* Icon */
.icon-btn { display: flex; align-items: center; gap: 8px; background: #1e293b; color: white; }
.icon-btn:hover { background: #334155; }

/* Loading */
.loading { background: #6366f1; color: white; display: flex; align-items: center; gap: 8px; }
.spinner { width: 14px; height: 14px; border: 2px solid rgba(255,255,255,0.3); border-top-color: white; border-radius: 50%; animation: spin 0.8s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
</style></head><body>
<div class="row">
  <button class="btn solid">Solid Button</button>
  <button class="btn outline">Outline Button</button>
  <button class="btn gradient">Gradient Button</button>
</div>
<div class="row">
  <button class="btn pill">Pill Button</button>
  <button class="btn danger">Danger Button</button>
  <button class="btn disabled" disabled>Disabled</button>
</div>
<div class="row">
  <button class="btn icon-btn">&#128640; Icon Button</button>
  <button class="btn loading"><div class="spinner"></div>Loading...</button>
</div>
</body></html>`,
  quiz:{ question:'Property CSS mana yang mengubah kursor menjadi tangan saat hover tombol?', options:['cursor: hand','cursor: pointer','mouse: pointer','hover: cursor'], correctIndex:1, explanation:'cursor: pointer mengubah kursor menjadi ikon tangan, menandakan elemen bisa diklik.' },
  prevPath:'css-masking', nextPath:'css-pagination'
},

// ── CSS PAGINATION ────────────────────────────
'css-pagination': {
  courseId:'css', title:'CSS Pagination', chapter:'CSS Advanced', color:'blue',
  theory:`<h2>CSS Pagination</h2>
<p>Pagination digunakan untuk membagi konten menjadi beberapa halaman dengan navigasi.</p>
<h3>Struktur HTML</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  &lt;<span class="text-blue-600">nav</span> class="pagination"&gt;<br/>
  &nbsp;&nbsp;&lt;<span class="text-blue-600">a</span> href="#"&gt;&amp;laquo;&lt;/<span class="text-blue-600">a</span>&gt;<br/>
  &nbsp;&nbsp;&lt;<span class="text-blue-600">a</span> href="#" class="active"&gt;1&lt;/<span class="text-blue-600">a</span>&gt;<br/>
  &nbsp;&nbsp;&lt;<span class="text-blue-600">a</span> href="#"&gt;2&lt;/<span class="text-blue-600">a</span>&gt;<br/>
  &lt;/<span class="text-blue-600">nav</span>&gt;
</div>
<h3>Tips Styling</h3>
<ul>
  <li>Gunakan Flexbox untuk layout horizontal</li>
  <li>Highlight halaman aktif dengan warna berbeda</li>
  <li>Tambahkan hover effect untuk UX yang baik</li>
  <li>Pastikan ukuran klik cukup besar (min 44px)</li>
</ul>`,
  code:`<!DOCTYPE html>
<html><head><style>
body { font-family: Arial, sans-serif; padding: 24px; background: #f8fafc; }

/* Style 1: Classic */
.pagination-1 { display: flex; gap: 4px; margin-bottom: 24px; }
.pagination-1 a {
  display: flex; align-items: center; justify-content: center;
  width: 40px; height: 40px; border-radius: 8px;
  text-decoration: none; font-weight: bold; font-size: 0.9rem;
  color: #475569; background: white; border: 1px solid #e2e8f0;
  transition: all 0.2s;
}
.pagination-1 a:hover { background: #f1f5f9; border-color: #6366f1; color: #6366f1; }
.pagination-1 a.active { background: #6366f1; color: white; border-color: #6366f1; }
.pagination-1 a.disabled { color: #cbd5e1; cursor: not-allowed; }

/* Style 2: Rounded */
.pagination-2 { display: flex; gap: 6px; margin-bottom: 24px; }
.pagination-2 a {
  display: flex; align-items: center; justify-content: center;
  min-width: 40px; height: 40px; padding: 0 12px; border-radius: 999px;
  text-decoration: none; font-weight: bold; font-size: 0.85rem;
  color: #6366f1; background: #ede9fe; transition: all 0.2s;
}
.pagination-2 a:hover { background: #6366f1; color: white; }
.pagination-2 a.active { background: #6366f1; color: white; }

/* Style 3: Minimal */
.pagination-3 { display: flex; align-items: center; gap: 4px; }
.pagination-3 a {
  display: flex; align-items: center; justify-content: center;
  width: 36px; height: 36px; border-radius: 6px;
  text-decoration: none; font-size: 0.85rem; color: #64748b;
  transition: all 0.2s;
}
.pagination-3 a:hover { background: #f1f5f9; color: #1e293b; }
.pagination-3 a.active { font-weight: bold; color: #6366f1; background: #ede9fe; }
</style></head><body>
<p style="color:#64748b;font-size:0.8rem;font-weight:bold;text-transform:uppercase;margin-bottom:8px">Style 1: Classic</p>
<nav class="pagination-1">
  <a href="#" class="disabled">&laquo;</a>
  <a href="#" class="active">1</a>
  <a href="#">2</a><a href="#">3</a><a href="#">4</a><a href="#">5</a>
  <a href="#">&raquo;</a>
</nav>
<p style="color:#64748b;font-size:0.8rem;font-weight:bold;text-transform:uppercase;margin-bottom:8px">Style 2: Rounded</p>
<nav class="pagination-2">
  <a href="#">&laquo;</a>
  <a href="#">1</a><a href="#" class="active">2</a><a href="#">3</a><a href="#">4</a>
  <a href="#">&raquo;</a>
</nav>
<p style="color:#64748b;font-size:0.8rem;font-weight:bold;text-transform:uppercase;margin-bottom:8px">Style 3: Minimal</p>
<nav class="pagination-3">
  <a href="#">&lsaquo;</a>
  <a href="#">1</a><a href="#">2</a><a href="#" class="active">3</a><a href="#">4</a><a href="#">5</a>
  <a href="#">&rsaquo;</a>
</nav>
</body></html>`,
  quiz:{ question:'Layout CSS mana yang paling tepat untuk membuat pagination horizontal?', options:['display: block','display: grid','display: flex','display: inline'], correctIndex:2, explanation:'Flexbox (display: flex) adalah cara terbaik untuk membuat pagination horizontal dengan gap yang konsisten.' },
  prevPath:'css-buttons', nextPath:'css-columns'
},

// ── CSS MULTIPLE COLUMNS ──────────────────────
'css-columns': {
  courseId:'css', title:'CSS Multiple Columns', chapter:'CSS Advanced', color:'blue',
  theory:`<h2>CSS Multiple Columns</h2>
<p>CSS Multi-column layout memungkinkan teks mengalir dalam beberapa kolom seperti koran.</p>
<h3>Properties Utama</h3>
<ul>
  <li><code>column-count</code> - jumlah kolom</li>
  <li><code>column-width</code> - lebar minimum kolom</li>
  <li><code>columns</code> - shorthand (width count)</li>
  <li><code>column-gap</code> - jarak antar kolom</li>
  <li><code>column-rule</code> - garis pemisah kolom</li>
  <li><code>column-span</code> - elemen melintasi semua kolom</li>
</ul>
<h3>Shorthand</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm">
  <span class="text-blue-600">columns</span>: <span class="text-green-600">3</span>; <span class="text-slate-400">/* 3 kolom */</span><br/>
  <span class="text-blue-600">column-rule</span>: <span class="text-green-600">1px solid #e2e8f0</span>;
</div>`,
  code:`<!DOCTYPE html>
<html><head><style>
body { font-family: Arial, sans-serif; padding: 24px; background: #f8fafc; }
.demo { background: white; border-radius: 12px; padding: 20px; margin: 16px 0; border: 1px solid #e2e8f0; }
.label { font-size: 0.7rem; font-weight: bold; color: #94a3b8; text-transform: uppercase; margin-bottom: 12px; }

.col2 { column-count: 2; column-gap: 24px; column-rule: 1px solid #e2e8f0; }
.col3 { column-count: 3; column-gap: 20px; column-rule: 2px dashed #6366f1; }
.col-auto { columns: 150px; column-gap: 20px; }

.col-heading { column-span: all; font-size: 1.1rem; font-weight: bold; color: #6366f1; margin-bottom: 8px; }
p { color: #475569; font-size: 0.9rem; line-height: 1.7; margin: 0 0 8px; }
</style></head><body>
<div class="demo">
  <div class="label">column-count: 2</div>
  <div class="col2">
    <p>CSS Multi-column layout memungkinkan konten mengalir dalam beberapa kolom seperti koran atau majalah. Ini sangat berguna untuk artikel panjang.</p>
    <p>Dengan column-rule kamu bisa menambahkan garis pemisah antar kolom untuk tampilan yang lebih rapi dan profesional.</p>
  </div>
</div>
<div class="demo">
  <div class="label">column-count: 3 + column-span</div>
  <div class="col3">
    <h3 class="col-heading">Judul Melintasi Semua Kolom</h3>
    <p>Kolom pertama berisi teks yang mengalir secara otomatis ke kolom berikutnya.</p>
    <p>Kolom kedua melanjutkan teks dari kolom pertama secara otomatis.</p>
    <p>Kolom ketiga adalah kolom terakhir dalam layout tiga kolom ini.</p>
  </div>
</div>
</body></html>`,
  quiz:{ question:'Property CSS mana yang menambahkan garis pemisah antar kolom?', options:['column-border','column-divider','column-rule','column-line'], correctIndex:2, explanation:'column-rule menambahkan garis pemisah antar kolom, mirip dengan border.' },
  prevPath:'css-pagination', nextPath:'css-variables'
},

// ── CSS VARIABLES ─────────────────────────────
'css-variables': {
  courseId:'css', title:'CSS Variables', chapter:'CSS Advanced', color:'blue',
  theory:`<h2>CSS Variables (Custom Properties)</h2>
<p>CSS Variables memungkinkan kamu menyimpan nilai yang bisa digunakan berulang kali di seluruh stylesheet.</p>
<h3>Mendefinisikan Variable</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  <span class="text-red-600">:root</span> {<br/>
  &nbsp;&nbsp;<span class="text-blue-600">--primary</span>: <span class="text-green-600">#6366f1</span>;<br/>
  &nbsp;&nbsp;<span class="text-blue-600">--radius</span>: <span class="text-green-600">12px</span>;<br/>
  &nbsp;&nbsp;<span class="text-blue-600">--shadow</span>: <span class="text-green-600">0 4px 16px rgba(0,0,0,0.1)</span>;<br/>
  }
</div>
<h3>Menggunakan Variable</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  <span class="text-blue-600">background</span>: <span class="text-green-600">var(--primary)</span>;<br/>
  <span class="text-blue-600">border-radius</span>: <span class="text-green-600">var(--radius)</span>;
</div>
<h3>Keuntungan CSS Variables</h3>
<ul>
  <li>Mudah mengubah tema secara global</li>
  <li>Bisa diubah dengan JavaScript</li>
  <li>Mendukung dark mode</li>
  <li>Lebih mudah maintenance</li>
</ul>`,
  code:`<!DOCTYPE html>
<html><head><style>
:root {
  --primary: #6366f1;
  --primary-dark: #4338ca;
  --secondary: #ec4899;
  --success: #22c55e;
  --radius: 12px;
  --shadow: 0 4px 16px rgba(99,102,241,0.2);
  --font-size-base: 0.9rem;
  --spacing: 16px;
}

body { font-family: Arial, sans-serif; padding: 24px; background: #f8fafc; }

.card {
  background: white;
  border-radius: var(--radius);
  padding: var(--spacing);
  box-shadow: var(--shadow);
  margin-bottom: var(--spacing);
  border-left: 4px solid var(--primary);
}

.btn {
  padding: 10px 20px;
  border-radius: var(--radius);
  border: none;
  font-weight: bold;
  font-size: var(--font-size-base);
  cursor: pointer;
  margin: 4px;
  transition: all 0.2s;
}
.btn-primary { background: var(--primary); color: white; }
.btn-primary:hover { background: var(--primary-dark); }
.btn-secondary { background: var(--secondary); color: white; }
.btn-success { background: var(--success); color: white; }

/* Dark theme dengan variable */
.dark-theme {
  --primary: #818cf8;
  background: #1e293b;
  color: white;
  padding: var(--spacing);
  border-radius: var(--radius);
  margin-top: var(--spacing);
}
.dark-theme .card { background: #334155; border-left-color: var(--primary); color: white; }
</style></head><body>
<div class="card">
  <strong style="color:var(--primary)">CSS Variables</strong>
  <p style="color:#64748b;margin:4px 0 0;font-size:0.85rem">Menggunakan --primary, --radius, --shadow</p>
</div>
<div>
  <button class="btn btn-primary">Primary</button>
  <button class="btn btn-secondary">Secondary</button>
  <button class="btn btn-success">Success</button>
</div>
<div class="dark-theme">
  <div class="card">Dark theme - variable --primary berubah menjadi #818cf8</div>
</div>
</body></html>`,
  quiz:{ question:'Di mana sebaiknya CSS Variables global didefinisikan?', options:['Di dalam body {}','Di dalam html {}','Di dalam :root {}','Di dalam * {}'], correctIndex:2, explanation:':root adalah pseudo-class yang merepresentasikan elemen root (html), tempat terbaik untuk mendefinisikan CSS Variables global.' },
  prevPath:'css-columns', nextPath:'css-box-sizing'
},

// ── CSS BOX SIZING ────────────────────────────
'css-box-sizing': {
  courseId:'css', title:'CSS Box Sizing', chapter:'CSS Advanced', color:'blue',
  theory:`<h2>CSS Box Sizing</h2>
<p>Property <code>box-sizing</code> menentukan bagaimana total lebar dan tinggi elemen dihitung.</p>
<h3>Nilai Box Sizing</h3>
<div class="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-4">
  <p class="text-orange-900"><strong>content-box (default):</strong></p>
  <p class="text-orange-800 text-sm">width = content saja. Padding dan border DITAMBAHKAN ke luar.</p>
  <p class="text-orange-900 mt-2"><strong>border-box:</strong></p>
  <p class="text-orange-800 text-sm">width = content + padding + border. Semua dihitung di DALAM.</p>
</div>
<h3>Best Practice</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm">
  <span class="text-red-600">*</span>, <span class="text-red-600">*::before</span>, <span class="text-red-600">*::after</span> {<br/>
  &nbsp;&nbsp;<span class="text-blue-600">box-sizing</span>: <span class="text-green-600">border-box</span>;<br/>
  }
</div>
<p class="mt-4">Hampir semua developer modern menggunakan <code>box-sizing: border-box</code> secara global.</p>`,
  code:`<!DOCTYPE html>
<html><head><style>
body { font-family: Arial, sans-serif; padding: 24px; background: #f1f5f9; }
.row { display: flex; gap: 20px; margin-bottom: 20px; flex-wrap: wrap; }
.label { font-size: 0.7rem; font-weight: bold; color: #94a3b8; text-transform: uppercase; margin-bottom: 8px; }

/* content-box: total = 200 + 40 + 4 = 244px */
.content-box {
  box-sizing: content-box;
  width: 200px;
  padding: 20px;
  border: 2px solid #ef4444;
  background: #fee2e2;
  color: #991b1b;
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 8px;
}

/* border-box: total = 200px (padding & border di dalam) */
.border-box {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 2px solid #22c55e;
  background: #dcfce7;
  color: #166534;
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 8px;
}
</style></head><body>
<div class="label">content-box (default) - total lebar LEBIH dari 200px</div>
<div class="row">
  <div class="content-box">
    width: 200px<br/>
    padding: 20px<br/>
    border: 2px<br/>
    <strong>Total: 244px!</strong>
  </div>
</div>
<div class="label">border-box - total lebar TEPAT 200px</div>
<div class="row">
  <div class="border-box">
    width: 200px<br/>
    padding: 20px (di dalam)<br/>
    border: 2px (di dalam)<br/>
    <strong>Total: 200px</strong>
  </div>
</div>
</body></html>`,
  quiz:{ question:'Dengan box-sizing: border-box, jika width: 300px dan padding: 20px, berapa total lebar elemen?', options:['340px','300px','260px','320px'], correctIndex:1, explanation:'border-box membuat padding dihitung di dalam width, jadi total tetap 300px.' },
  prevPath:'css-variables', nextPath:'css-media-queries'
},

// ── CSS MEDIA QUERIES ─────────────────────────
'css-media-queries': {
  courseId:'css', title:'CSS Media Queries', chapter:'CSS Advanced', color:'blue',
  theory:`<h2>CSS Media Queries</h2>
<p>Media queries memungkinkan CSS diterapkan berdasarkan kondisi perangkat (ukuran layar, orientasi, dll).</p>
<h3>Sintaks</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  @<span class="text-purple-600">media</span> (<span class="text-blue-600">max-width</span>: <span class="text-green-600">768px</span>) {<br/>
  &nbsp;&nbsp;<span class="text-red-600">body</span> { <span class="text-blue-600">font-size</span>: <span class="text-green-600">14px</span>; }<br/>
  }
</div>
<h3>Breakpoint Umum</h3>
<ul>
  <li><code>max-width: 480px</code> - Mobile kecil</li>
  <li><code>max-width: 768px</code> - Tablet</li>
  <li><code>max-width: 1024px</code> - Laptop</li>
  <li><code>min-width: 1200px</code> - Desktop besar</li>
</ul>
<h3>Mobile First vs Desktop First</h3>
<div class="bg-indigo-50 border border-indigo-500 rounded-xl p-4">
  <p class="text-indigo-900"><strong>Mobile First:</strong> gunakan <code>min-width</code> - mulai dari mobile, tambah style untuk layar lebih besar.</p>
</div>`,
  code:`<!DOCTYPE html>
<html><head><style>
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: Arial, sans-serif; padding: 20px; background: #f8fafc; }

.container { max-width: 900px; margin: 0 auto; }
h1 { color: #1e293b; margin-bottom: 16px; font-size: 1.5rem; }

/* Grid responsif */
.grid { display: grid; gap: 16px; }

/* Mobile: 1 kolom */
.grid { grid-template-columns: 1fr; }

/* Tablet: 2 kolom */
@media (min-width: 600px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
  h1 { font-size: 2rem; }
}

/* Desktop: 3 kolom */
@media (min-width: 900px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
  h1 { font-size: 2.5rem; }
}

.card { background: white; border-radius: 12px; padding: 20px; border: 1px solid #e2e8f0; }
.card h3 { color: #6366f1; margin-bottom: 8px; }
.card p { color: #64748b; font-size: 0.85rem; line-height: 1.6; }

/* Responsive navbar */
.nav { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 20px; }
.nav a { padding: 8px 14px; background: #6366f1; color: white; border-radius: 8px; text-decoration: none; font-size: 0.85rem; font-weight: bold; }
@media (max-width: 480px) {
  .nav a { flex: 1; text-align: center; }
}
</style></head><body>
<div class="container">
  <nav class="nav"><a href="#">Home</a><a href="#">Kursus</a><a href="#">Blog</a><a href="#">Kontak</a></nav>
  <h1>Responsive Layout</h1>
  <div class="grid">
    <div class="card"><h3>HTML</h3><p>Struktur dasar halaman web dengan elemen semantik.</p></div>
    <div class="card"><h3>CSS</h3><p>Styling dan layout untuk tampilan yang menarik.</p></div>
    <div class="card"><h3>JavaScript</h3><p>Interaktivitas dan logika untuk web dinamis.</p></div>
  </div>
</div>
</body></html>`,
  quiz:{ question:'Pendekatan "Mobile First" menggunakan media query dengan?', options:['max-width','min-width','screen-width','device-width'], correctIndex:1, explanation:'Mobile First menggunakan min-width - mulai dari style mobile, lalu tambahkan style untuk layar yang lebih besar.' },
  prevPath:'css-box-sizing', nextPath:'css-flexbox-intro'
},

// ── FLEX CONTAINER ────────────────────────────
'css-flex-container': {
  courseId:'css', title:'Flex Container', chapter:'CSS Flexbox', color:'blue',
  theory:`<h2>Flex Container</h2>
<p>Flex container adalah elemen induk dengan <code>display: flex</code>. Semua anak langsungnya menjadi flex items.</p>
<h3>Properties Flex Container</h3>
<ul>
  <li><code>flex-direction</code> - arah main axis (row, column, row-reverse, column-reverse)</li>
  <li><code>flex-wrap</code> - wrap atau nowrap</li>
  <li><code>justify-content</code> - perataan di main axis (flex-start, flex-end, center, space-between, space-around, space-evenly)</li>
  <li><code>align-items</code> - perataan di cross axis (stretch, flex-start, flex-end, center, baseline)</li>
  <li><code>align-content</code> - perataan baris (jika wrap)</li>
  <li><code>gap</code> - jarak antar item</li>
</ul>`,
  code:`<!DOCTYPE html>
<html><head><style>
body { font-family: Arial, sans-serif; padding: 20px; background: #f8fafc; }
.demo { background: white; border-radius: 12px; padding: 16px; margin: 12px 0; border: 1px solid #e2e8f0; }
.label { font-size: 0.7rem; font-weight: bold; color: #94a3b8; text-transform: uppercase; margin-bottom: 8px; }
.flex { display: flex; background: #f1f5f9; border-radius: 8px; padding: 8px; min-height: 60px; }
.item { background: #6366f1; color: white; padding: 8px 14px; border-radius: 6px; font-weight: bold; font-size: 0.8rem; }

.jc-start { justify-content: flex-start; gap: 8px; }
.jc-center { justify-content: center; gap: 8px; }
.jc-between { justify-content: space-between; }
.jc-around { justify-content: space-around; }
.ai-center { align-items: center; gap: 8px; }
.item-tall { height: 50px; display: flex; align-items: center; }
.col { flex-direction: column; gap: 6px; }
.wrap { flex-wrap: wrap; gap: 6px; }
</style></head><body>
<div class="demo"><div class="label">justify-content: flex-start</div><div class="flex jc-start"><div class="item">A</div><div class="item">B</div><div class="item">C</div></div></div>
<div class="demo"><div class="label">justify-content: center</div><div class="flex jc-center"><div class="item">A</div><div class="item">B</div><div class="item">C</div></div></div>
<div class="demo"><div class="label">justify-content: space-between</div><div class="flex jc-between"><div class="item">A</div><div class="item">B</div><div class="item">C</div></div></div>
<div class="demo"><div class="label">align-items: center (cross axis)</div><div class="flex ai-center" style="height:80px"><div class="item">A</div><div class="item item-tall">B (tall)</div><div class="item">C</div></div></div>
<div class="demo"><div class="label">flex-direction: column</div><div class="flex col" style="width:120px"><div class="item">A</div><div class="item">B</div><div class="item">C</div></div></div>
</body></html>`,
  quiz:{ question:'Property mana yang mengatur perataan flex items di sepanjang MAIN AXIS?', options:['align-items','align-content','justify-content','flex-align'], correctIndex:2, explanation:'justify-content mengatur perataan di main axis (horizontal jika flex-direction: row).' },
  prevPath:'css-flexbox-intro', nextPath:'css-flex-items'
},

// ── FLEX ITEMS ────────────────────────────────
'css-flex-items': {
  courseId:'css', title:'Flex Items', chapter:'CSS Flexbox', color:'blue',
  theory:`<h2>Flex Items</h2>
<p>Flex items adalah elemen anak langsung dari flex container. Ada beberapa properties khusus untuk flex items.</p>
<h3>Properties Flex Items</h3>
<ul>
  <li><code>flex-grow</code> - seberapa besar item tumbuh (0 = tidak tumbuh)</li>
  <li><code>flex-shrink</code> - seberapa kecil item menyusut (1 = bisa menyusut)</li>
  <li><code>flex-basis</code> - ukuran awal item sebelum grow/shrink</li>
  <li><code>flex</code> - shorthand (grow shrink basis)</li>
  <li><code>align-self</code> - override align-items untuk item ini</li>
  <li><code>order</code> - urutan tampilan item</li>
</ul>
<h3>Shorthand flex</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm">
  <span class="text-blue-600">flex</span>: <span class="text-green-600">1</span>; <span class="text-slate-400">/* flex: 1 1 0 */</span><br/>
  <span class="text-blue-600">flex</span>: <span class="text-green-600">2 1 200px</span>; <span class="text-slate-400">/* grow shrink basis */</span>
</div>`,
  code:`<!DOCTYPE html>
<html><head><style>
body { font-family: Arial, sans-serif; padding: 20px; background: #f8fafc; }
.demo { background: white; border-radius: 12px; padding: 16px; margin: 12px 0; border: 1px solid #e2e8f0; }
.label { font-size: 0.7rem; font-weight: bold; color: #94a3b8; text-transform: uppercase; margin-bottom: 8px; }
.flex { display: flex; background: #f1f5f9; border-radius: 8px; padding: 8px; gap: 8px; }
.item { background: #6366f1; color: white; padding: 10px; border-radius: 6px; font-weight: bold; font-size: 0.75rem; text-align: center; }
.grow1 { flex: 1; }
.grow2 { flex: 2; }
.grow3 { flex: 3; }
.basis { flex: 1 1 100px; }
.no-shrink { flex-shrink: 0; width: 120px; }
.align-start { align-self: flex-start; }
.align-end { align-self: flex-end; }
.align-center { align-self: center; }
</style></head><body>
<div class="demo">
  <div class="label">flex-grow (1:2:3)</div>
  <div class="flex">
    <div class="item grow1">flex:1</div>
    <div class="item grow2">flex:2</div>
    <div class="item grow3">flex:3</div>
  </div>
</div>
<div class="demo">
  <div class="label">align-self (override align-items)</div>
  <div class="flex" style="height:80px;align-items:stretch">
    <div class="item grow1 align-start">start</div>
    <div class="item grow1 align-center">center</div>
    <div class="item grow1 align-end">end</div>
    <div class="item grow1">stretch</div>
  </div>
</div>
<div class="demo">
  <div class="label">order (urutan tampilan)</div>
  <div class="flex">
    <div class="item" style="order:3">order:3</div>
    <div class="item" style="order:1">order:1</div>
    <div class="item" style="order:2">order:2</div>
  </div>
</div>
</body></html>`,
  quiz:{ question:'Property flex-grow: 2 artinya?', options:['Item berukuran 2x lebih besar dari default','Item tumbuh 2x lebih banyak dari item dengan flex-grow: 1','Item memiliki 2 kolom','Item tidak bisa menyusut'], correctIndex:1, explanation:'flex-grow: 2 berarti item ini akan mengambil 2x lebih banyak ruang kosong dibanding item dengan flex-grow: 1.' },
  prevPath:'css-flex-container', nextPath:'css-flex-responsive'
},

// ── FLEX RESPONSIVE ───────────────────────────
'css-flex-responsive': {
  courseId:'css', title:'Flex Responsive', chapter:'CSS Flexbox', color:'blue',
  theory:`<h2>Flexbox Responsive</h2>
<p>Flexbox sangat powerful untuk membuat layout yang responsif tanpa banyak media queries.</p>
<h3>Teknik Responsif dengan Flexbox</h3>
<ul>
  <li><code>flex-wrap: wrap</code> - item pindah ke baris baru jika tidak muat</li>
  <li><code>flex-basis</code> - ukuran minimum sebelum wrap</li>
  <li>Kombinasi dengan media queries untuk kontrol lebih</li>
</ul>
<h3>Pola Umum</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm">
  <span class="text-red-600">.container</span> { <span class="text-blue-600">display</span>: <span class="text-green-600">flex</span>; <span class="text-blue-600">flex-wrap</span>: <span class="text-green-600">wrap</span>; <span class="text-blue-600">gap</span>: <span class="text-green-600">16px</span>; }<br/>
  <span class="text-red-600">.item</span> { <span class="text-blue-600">flex</span>: <span class="text-green-600">1 1 250px</span>; } <span class="text-slate-400">/* min 250px, grow */</span>
</div>`,
  code:`<!DOCTYPE html>
<html><head><style>
* { box-sizing: border-box; }
body { font-family: Arial, sans-serif; padding: 20px; background: #f8fafc; }

/* Responsive card grid dengan flexbox */
.card-grid { display: flex; flex-wrap: wrap; gap: 16px; }
.card {
  flex: 1 1 200px; /* min 200px, bisa tumbuh */
  background: white; border-radius: 12px; padding: 20px;
  border: 1px solid #e2e8f0; box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.card h3 { color: #6366f1; margin-bottom: 8px; font-size: 1rem; }
.card p { color: #64748b; font-size: 0.85rem; line-height: 1.5; }

/* Responsive navbar */
.navbar { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; background: #1e293b; padding: 12px 20px; border-radius: 12px; gap: 12px; margin-bottom: 20px; }
.logo { color: white; font-weight: 900; font-size: 1.1rem; }
.nav-links { display: flex; flex-wrap: wrap; gap: 8px; }
.nav-links a { color: #94a3b8; text-decoration: none; padding: 6px 12px; border-radius: 6px; font-size: 0.85rem; font-weight: 600; }
.nav-links a:hover { color: white; background: rgba(255,255,255,0.1); }
</style></head><body>
<nav class="navbar">
  <div class="logo">DevGrow.</div>
  <div class="nav-links">
    <a href="#">Home</a><a href="#">Kursus</a><a href="#">Blog</a><a href="#">Kontak</a>
  </div>
</nav>
<div class="card-grid">
  <div class="card"><h3>HTML</h3><p>Struktur dasar halaman web.</p></div>
  <div class="card"><h3>CSS</h3><p>Styling dan layout yang menarik.</p></div>
  <div class="card"><h3>JavaScript</h3><p>Interaktivitas dan logika.</p></div>
  <div class="card"><h3>React</h3><p>Library UI modern.</p></div>
</div>
</body></html>`,
  quiz:{ question:'Kombinasi property flexbox mana yang membuat item otomatis pindah baris jika tidak muat?', options:['flex-direction: column','flex-wrap: wrap','overflow: wrap','flex-break: true'], correctIndex:1, explanation:'flex-wrap: wrap membuat flex items pindah ke baris baru secara otomatis jika tidak cukup ruang.' },
  prevPath:'css-flex-items', nextPath:'css-grid-intro'
},

// ── GRID INTRO ────────────────────────────────
'css-grid-intro': {
  courseId:'css', title:'Grid Intro', chapter:'CSS Grid', color:'blue',
  theory:`<h2>CSS Grid Layout</h2>
<p>CSS Grid adalah sistem layout dua dimensi yang memungkinkan pengaturan baris DAN kolom sekaligus.</p>
<h3>Flexbox vs Grid</h3>
<div class="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-4">
  <p class="text-orange-900"><strong>Flexbox</strong> = 1 dimensi (baris ATAU kolom)</p>
  <p class="text-orange-900 mt-1"><strong>Grid</strong> = 2 dimensi (baris DAN kolom)</p>
</div>
<h3>Mengaktifkan Grid</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  <span class="text-blue-600">display</span>: <span class="text-green-600">grid</span>;<br/>
  <span class="text-blue-600">grid-template-columns</span>: <span class="text-green-600">repeat(3, 1fr)</span>;<br/>
  <span class="text-blue-600">gap</span>: <span class="text-green-600">16px</span>;
</div>
<h3>Unit fr (fraction)</h3>
<p><code>fr</code> adalah unit khusus grid yang merepresentasikan bagian dari ruang yang tersedia.</p>`,
  code:`<!DOCTYPE html>
<html><head><style>
* { box-sizing: border-box; }
body { font-family: Arial, sans-serif; padding: 20px; background: #f8fafc; }
.label { font-size: 0.7rem; font-weight: bold; color: #94a3b8; text-transform: uppercase; margin-bottom: 8px; }
.demo { margin-bottom: 20px; }
.grid { display: grid; gap: 10px; background: #e2e8f0; padding: 10px; border-radius: 12px; }
.item { background: #6366f1; color: white; padding: 16px; border-radius: 8px; font-weight: bold; font-size: 0.85rem; text-align: center; }
.g1 { grid-template-columns: 1fr 1fr 1fr; }
.g2 { grid-template-columns: 1fr 2fr 1fr; }
.g3 { grid-template-columns: repeat(4, 1fr); }
.g4 { grid-template-columns: 200px 1fr; }
</style></head><body>
<div class="demo"><div class="label">3 kolom sama rata (1fr 1fr 1fr)</div>
<div class="grid g1"><div class="item">1</div><div class="item">2</div><div class="item">3</div><div class="item">4</div><div class="item">5</div><div class="item">6</div></div></div>
<div class="demo"><div class="label">Kolom berbeda (1fr 2fr 1fr)</div>
<div class="grid g2"><div class="item">Kecil</div><div class="item">Besar (2fr)</div><div class="item">Kecil</div></div></div>
<div class="demo"><div class="label">4 kolom dengan repeat()</div>
<div class="grid g3"><div class="item">A</div><div class="item">B</div><div class="item">C</div><div class="item">D</div></div></div>
<div class="demo"><div class="label">Fixed + Fluid (200px 1fr)</div>
<div class="grid g4"><div class="item">Sidebar 200px</div><div class="item">Main Content (1fr)</div></div></div>
</body></html>`,
  quiz:{ question:'Apa perbedaan utama CSS Grid dengan Flexbox?', options:['Grid lebih cepat','Grid adalah 2 dimensi (baris dan kolom), Flexbox 1 dimensi','Grid hanya untuk gambar','Flexbox lebih modern dari Grid'], correctIndex:1, explanation:'CSS Grid bekerja dalam 2 dimensi (baris dan kolom sekaligus), sedangkan Flexbox hanya 1 dimensi.' },
  prevPath:'css-flex-responsive', nextPath:'css-grid-container'
},

// ── GRID CONTAINER ────────────────────────────
'css-grid-container': {
  courseId:'css', title:'Grid Container', chapter:'CSS Grid', color:'blue',
  theory:`<h2>Grid Container</h2>
<p>Grid container adalah elemen dengan <code>display: grid</code>. Properties container mengontrol struktur grid.</p>
<h3>Properties Grid Container</h3>
<ul>
  <li><code>grid-template-columns</code> - definisi kolom</li>
  <li><code>grid-template-rows</code> - definisi baris</li>
  <li><code>grid-template-areas</code> - layout dengan nama area</li>
  <li><code>gap</code> / <code>column-gap</code> / <code>row-gap</code> - jarak</li>
  <li><code>justify-items</code> - perataan item horizontal</li>
  <li><code>align-items</code> - perataan item vertikal</li>
</ul>
<h3>grid-template-areas</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm">
  <span class="text-blue-600">grid-template-areas</span>:<br/>
  &nbsp;&nbsp;<span class="text-green-600">"header header"</span><br/>
  &nbsp;&nbsp;<span class="text-green-600">"sidebar main"</span><br/>
  &nbsp;&nbsp;<span class="text-green-600">"footer footer"</span>;
</div>`,
  code:`<!DOCTYPE html>
<html><head><style>
* { box-sizing: border-box; }
body { font-family: Arial, sans-serif; padding: 20px; background: #f8fafc; }

/* Layout dengan grid-template-areas */
.layout {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  gap: 12px;
  min-height: 300px;
}
.header { grid-area: header; background: #6366f1; color: white; padding: 16px; border-radius: 8px; font-weight: bold; }
.sidebar { grid-area: sidebar; background: #8b5cf6; color: white; padding: 16px; border-radius: 8px; }
.main { grid-area: main; background: white; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0; }
.footer { grid-area: footer; background: #1e293b; color: white; padding: 12px 16px; border-radius: 8px; font-size: 0.85rem; }

.sidebar ul { list-style: none; padding: 0; margin: 8px 0 0; }
.sidebar li { padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.2); font-size: 0.85rem; }
</style></head><body>
<div class="layout">
  <header class="header">Header (span 2 kolom)</header>
  <aside class="sidebar">
    <strong>Sidebar</strong>
    <ul><li>Menu 1</li><li>Menu 2</li><li>Menu 3</li></ul>
  </aside>
  <main class="main">
    <h3 style="color:#1e293b;margin-bottom:8px">Main Content</h3>
    <p style="color:#64748b;font-size:0.9rem">Area konten utama menggunakan grid-area: main. Layout ini dibuat dengan grid-template-areas.</p>
  </main>
  <footer class="footer">Footer (span 2 kolom) &copy; 2024 DevGrow</footer>
</div>
</body></html>`,
  quiz:{ question:'Property CSS Grid mana yang memungkinkan kamu memberi nama pada area layout?', options:['grid-layout-names','grid-template-areas','grid-area-names','grid-zones'], correctIndex:1, explanation:'grid-template-areas memungkinkan kamu mendefinisikan layout dengan nama area yang mudah dibaca.' },
  prevPath:'css-grid-intro', nextPath:'css-grid-items'
},

// ── GRID ITEMS ────────────────────────────────
'css-grid-items': {
  courseId:'css', title:'Grid Items', chapter:'CSS Grid', color:'blue',
  theory:`<h2>Grid Items</h2>
<p>Grid items adalah elemen anak langsung dari grid container. Kamu bisa mengontrol posisi dan ukuran setiap item.</p>
<h3>Properties Grid Items</h3>
<ul>
  <li><code>grid-column</code> - posisi dan span kolom</li>
  <li><code>grid-row</code> - posisi dan span baris</li>
  <li><code>grid-area</code> - nama area atau shorthand posisi</li>
  <li><code>justify-self</code> - perataan horizontal item ini</li>
  <li><code>align-self</code> - perataan vertikal item ini</li>
</ul>
<h3>Spanning</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm">
  <span class="text-blue-600">grid-column</span>: <span class="text-green-600">1 / 3</span>; <span class="text-slate-400">/* dari kolom 1 ke 3 */</span><br/>
  <span class="text-blue-600">grid-column</span>: <span class="text-green-600">span 2</span>; <span class="text-slate-400">/* melebar 2 kolom */</span>
</div>`,
  code:`<!DOCTYPE html>
<html><head><style>
* { box-sizing: border-box; }
body { font-family: Arial, sans-serif; padding: 20px; background: #f8fafc; }
.grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; background: #e2e8f0; padding: 10px; border-radius: 12px; }
.item { background: #6366f1; color: white; padding: 16px; border-radius: 8px; font-weight: bold; font-size: 0.8rem; text-align: center; }
.span2 { grid-column: span 2; background: #8b5cf6; }
.span3 { grid-column: span 3; background: #ec4899; }
.span4 { grid-column: 1 / -1; background: #f59e0b; color: #1a1a1a; }
.row2 { grid-row: span 2; background: #22c55e; display: flex; align-items: center; justify-content: center; }
</style></head><body>
<p style="color:#64748b;margin-bottom:12px;font-size:0.9rem">Grid 4 kolom dengan item yang melebar:</p>
<div class="grid">
  <div class="item span4">span 4 (1 / -1) - full width</div>
  <div class="item">1</div>
  <div class="item span2">span 2</div>
  <div class="item">4</div>
  <div class="item span3">span 3</div>
  <div class="item row2">row<br/>span 2</div>
  <div class="item">A</div>
  <div class="item">B</div>
  <div class="item">C</div>
</div>
</body></html>`,
  quiz:{ question:'Apa arti grid-column: 1 / -1?', options:['Item di kolom pertama saja','Item melebar dari kolom 1 hingga kolom terakhir','Item di kolom negatif','Item tidak terlihat'], correctIndex:1, explanation:'grid-column: 1 / -1 berarti item melebar dari kolom pertama (1) hingga kolom terakhir (-1), yaitu full width.' },
  prevPath:'css-grid-container', nextPath:'css-rwd-intro'
},

// ── RWD INTRO ─────────────────────────────────
'css-rwd-intro': {
  courseId:'css', title:'RWD Intro', chapter:'CSS Responsive', color:'blue',
  theory:`<h2>Responsive Web Design (RWD)</h2>
<p>Responsive Web Design adalah pendekatan desain web yang membuat halaman terlihat baik di semua perangkat dan ukuran layar.</p>
<h3>3 Pilar RWD</h3>
<ul>
  <li><strong>Fluid Grid</strong> - layout menggunakan persentase, bukan pixel tetap</li>
  <li><strong>Flexible Images</strong> - gambar menyesuaikan ukuran container</li>
  <li><strong>Media Queries</strong> - CSS berbeda untuk ukuran layar berbeda</li>
</ul>
<h3>Viewport Meta Tag</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  &lt;<span class="text-blue-600">meta</span> <span class="text-purple-600">name</span>="viewport" <span class="text-purple-600">content</span>="width=device-width, initial-scale=1.0"&gt;
</div>
<div class="bg-orange-50 border border-orange-200 rounded-xl p-4">
  <p class="text-orange-900"><strong>Wajib!</strong> Tanpa viewport meta tag, halaman tidak akan responsif di mobile.</p>
</div>`,
  code:`<!DOCTYPE html>
<html><head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: Arial, sans-serif; background: #f8fafc; }
.container { max-width: 900px; margin: 0 auto; padding: 20px; }
h1 { color: #1e293b; margin-bottom: 8px; }
p { color: #64748b; margin-bottom: 16px; line-height: 1.6; }

/* Fluid layout */
.row { display: flex; flex-wrap: wrap; gap: 16px; margin-bottom: 16px; }
.col { flex: 1 1 200px; background: white; border-radius: 12px; padding: 16px; border: 1px solid #e2e8f0; }
.col h3 { color: #6366f1; margin-bottom: 8px; }

/* Flexible image */
img { max-width: 100%; height: auto; border-radius: 8px; }

/* Responsive text */
h1 { font-size: clamp(1.5rem, 4vw, 2.5rem); }
</style></head><body>
<div class="container">
  <h1>Responsive Web Design</h1>
  <p>Coba ubah ukuran browser untuk melihat layout berubah secara responsif.</p>
  <div class="row">
    <div class="col"><h3>Mobile First</h3><p>Desain untuk mobile dulu, lalu tambahkan untuk layar lebih besar.</p></div>
    <div class="col"><h3>Fluid Grid</h3><p>Gunakan % dan fr, bukan px tetap untuk layout yang fleksibel.</p></div>
    <div class="col"><h3>Media Queries</h3><p>Terapkan CSS berbeda untuk breakpoint yang berbeda.</p></div>
  </div>
</div>
</body></html>`,
  quiz:{ question:'Tag HTML mana yang WAJIB ada agar halaman responsif di mobile?', options:['<meta name="mobile">','<meta name="viewport" content="width=device-width">','<meta name="responsive">','<link rel="responsive">'], correctIndex:1, explanation:'Viewport meta tag memberitahu browser untuk menggunakan lebar perangkat sebagai lebar viewport.' },
  prevPath:'css-grid-items', nextPath:'css-rwd-viewport'
},

// ── RWD VIEWPORT ──────────────────────────────
'css-rwd-viewport': {
  courseId:'css', title:'RWD Viewport', chapter:'CSS Responsive', color:'blue',
  theory:`<h2>RWD Viewport</h2>
<p>Viewport adalah area yang terlihat oleh user di browser. Ukurannya berbeda di setiap perangkat.</p>
<h3>Viewport Meta Tag</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  &lt;<span class="text-blue-600">meta</span> name="viewport" content="<span class="text-green-600">width=device-width, initial-scale=1.0</span>"&gt;
</div>
<h3>Viewport Units</h3>
<ul>
  <li><code>vw</code> - 1% dari lebar viewport</li>
  <li><code>vh</code> - 1% dari tinggi viewport</li>
  <li><code>vmin</code> - 1% dari dimensi viewport terkecil</li>
  <li><code>vmax</code> - 1% dari dimensi viewport terbesar</li>
</ul>
<h3>Fungsi clamp()</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm">
  <span class="text-blue-600">font-size</span>: <span class="text-green-600">clamp(1rem, 2.5vw, 2rem)</span>;<br/>
  <span class="text-slate-400">/* min, preferred, max */</span>
</div>`,
  code:`<!DOCTYPE html>
<html><head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
* { box-sizing: border-box; }
body { font-family: Arial, sans-serif; padding: 20px; background: #f8fafc; margin: 0; }

/* Viewport units */
.hero {
  width: 100vw;
  height: 40vh;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  display: flex; align-items: center; justify-content: center;
  margin: 0 -20px 20px;
}
.hero h1 { color: white; font-size: clamp(1.5rem, 5vw, 3rem); font-weight: 900; }

/* Responsive font dengan clamp */
.text-responsive { font-size: clamp(0.875rem, 2vw, 1.125rem); color: #475569; line-height: 1.7; margin-bottom: 16px; }
.heading-responsive { font-size: clamp(1.25rem, 3vw, 2rem); color: #1e293b; font-weight: bold; margin-bottom: 8px; }

/* Full viewport height section */
.full-vh { height: 30vh; background: white; border-radius: 12px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: center; }
.full-vh p { color: #64748b; font-size: 0.9rem; }
</style></head><body>
<div class="hero"><h1>100vw x 40vh</h1></div>
<h2 class="heading-responsive">Responsive Typography dengan clamp()</h2>
<p class="text-responsive">Font size ini menggunakan clamp(0.875rem, 2vw, 1.125rem) - otomatis menyesuaikan ukuran viewport antara minimum dan maksimum.</p>
<div class="full-vh"><p>height: 30vh - 30% dari tinggi viewport</p></div>
</body></html>`,
  quiz:{ question:'Unit CSS mana yang merepresentasikan 1% dari lebar viewport?', options:['%','px','vw','em'], correctIndex:2, explanation:'vw (viewport width) = 1% dari lebar viewport. 100vw = lebar penuh viewport.' },
  prevPath:'css-rwd-intro', nextPath:'css-rwd-grid'
},

// ── RWD GRID VIEW ─────────────────────────────
'css-rwd-grid': {
  courseId:'css', title:'RWD Grid View', chapter:'CSS Responsive', color:'blue',
  theory:`<h2>RWD Grid View</h2>
<p>Grid view adalah sistem kolom yang digunakan untuk membuat layout responsif. Sistem 12 kolom adalah yang paling umum.</p>
<h3>Sistem 12 Kolom</h3>
<p>Dengan 12 kolom, kamu bisa membuat berbagai kombinasi layout:</p>
<ul>
  <li>12/12 = full width</li>
  <li>6/12 = setengah lebar</li>
  <li>4/12 = sepertiga lebar</li>
  <li>3/12 = seperempat lebar</li>
</ul>
<h3>Implementasi dengan CSS Grid</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm">
  <span class="text-red-600">.grid-12</span> { <span class="text-blue-600">display</span>: <span class="text-green-600">grid</span>; <span class="text-blue-600">grid-template-columns</span>: <span class="text-green-600">repeat(12, 1fr)</span>; }<br/>
  <span class="text-red-600">.col-6</span> { <span class="text-blue-600">grid-column</span>: <span class="text-green-600">span 6</span>; }
</div>`,
  code:`<!DOCTYPE html>
<html><head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
* { box-sizing: border-box; }
body { font-family: Arial, sans-serif; padding: 20px; background: #f8fafc; }

/* 12-column grid system */
.grid-12 { display: grid; grid-template-columns: repeat(12, 1fr); gap: 10px; margin-bottom: 16px; }
.col-12 { grid-column: span 12; }
.col-6  { grid-column: span 6; }
.col-4  { grid-column: span 4; }
.col-3  { grid-column: span 3; }
.col-8  { grid-column: span 8; }

.box { background: #6366f1; color: white; padding: 12px; border-radius: 8px; font-weight: bold; font-size: 0.8rem; text-align: center; }
.box.green { background: #22c55e; }
.box.pink { background: #ec4899; }
.box.amber { background: #f59e0b; color: #1a1a1a; }

/* Responsive: di mobile semua jadi full width */
@media (max-width: 600px) {
  .col-6, .col-4, .col-3, .col-8 { grid-column: span 12; }
}
</style></head><body>
<p style="color:#64748b;font-size:0.85rem;margin-bottom:12px">Sistem 12 kolom responsif:</p>
<div class="grid-12">
  <div class="box col-12">col-12 (full)</div>
  <div class="box col-6">col-6</div>
  <div class="box col-6 green">col-6</div>
  <div class="box col-4">col-4</div>
  <div class="box col-4 pink">col-4</div>
  <div class="box col-4 amber">col-4</div>
  <div class="box col-3">col-3</div>
  <div class="box col-3 green">col-3</div>
  <div class="box col-3 pink">col-3</div>
  <div class="box col-3 amber">col-3</div>
  <div class="box col-8">col-8 (sidebar main)</div>
  <div class="box col-4 green">col-4</div>
</div>
</body></html>`,
  quiz:{ question:'Dalam sistem 12 kolom, berapa span yang dibutuhkan untuk layout 3 kolom sama rata?', options:['span 3','span 4','span 6','span 12'], correctIndex:1, explanation:'12 / 3 = 4. Setiap kolom menggunakan span 4 untuk membuat 3 kolom sama rata.' },
  prevPath:'css-rwd-viewport', nextPath:'css-rwd-media'
},

// ── RWD MEDIA QUERIES ─────────────────────────
'css-rwd-media': {
  courseId:'css', title:'RWD Media Queries', chapter:'CSS Responsive', color:'blue',
  theory:`<h2>RWD Media Queries</h2>
<p>Media queries adalah inti dari Responsive Web Design - memungkinkan CSS berbeda untuk ukuran layar berbeda.</p>
<h3>Breakpoint Standar</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  <span class="text-slate-400">/* Mobile */</span><br/>
  @<span class="text-purple-600">media</span> (max-width: 480px) { ... }<br/><br/>
  <span class="text-slate-400">/* Tablet */</span><br/>
  @<span class="text-purple-600">media</span> (min-width: 481px) and (max-width: 768px) { ... }<br/><br/>
  <span class="text-slate-400">/* Desktop */</span><br/>
  @<span class="text-purple-600">media</span> (min-width: 769px) { ... }
</div>
<h3>Media Features Lain</h3>
<ul>
  <li><code>orientation: landscape/portrait</code></li>
  <li><code>prefers-color-scheme: dark</code></li>
  <li><code>prefers-reduced-motion</code></li>
  <li><code>hover: hover/none</code></li>
</ul>`,
  code:`<!DOCTYPE html>
<html><head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: Arial, sans-serif; background: #f8fafc; }

.container { max-width: 900px; margin: 0 auto; padding: 20px; }

/* Base (mobile first) */
.grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
.card { background: white; border-radius: 12px; padding: 20px; border: 1px solid #e2e8f0; }
.card h3 { color: #6366f1; margin-bottom: 8px; }
.card p { color: #64748b; font-size: 0.85rem; line-height: 1.5; }
h1 { color: #1e293b; margin-bottom: 16px; font-size: 1.5rem; }

/* Tablet */
@media (min-width: 600px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
  h1 { font-size: 2rem; }
}

/* Desktop */
@media (min-width: 900px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
  h1 { font-size: 2.5rem; }
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  body { background: #0f172a; }
  .card { background: #1e293b; border-color: #334155; }
  .card p { color: #94a3b8; }
  h1 { color: white; }
}

/* Landscape orientation */
@media (orientation: landscape) and (max-height: 500px) {
  .container { padding: 10px; }
  h1 { font-size: 1.2rem; margin-bottom: 8px; }
}
</style></head><body>
<div class="container">
  <h1>RWD Media Queries</h1>
  <div class="grid">
    <div class="card"><h3>Mobile</h3><p>1 kolom, font kecil. Base style tanpa media query.</p></div>
    <div class="card"><h3>Tablet</h3><p>2 kolom saat min-width: 600px. Font lebih besar.</p></div>
    <div class="card"><h3>Desktop</h3><p>3 kolom saat min-width: 900px. Font paling besar.</p></div>
  </div>
</div>
</body></html>`,
  quiz:{ question:'Media query mana yang aktif saat user menggunakan dark mode di sistem operasi?', options:['@media (dark-mode: true)','@media (theme: dark)','@media (prefers-color-scheme: dark)','@media (color: dark)'], correctIndex:2, explanation:'prefers-color-scheme: dark mendeteksi preferensi dark mode dari sistem operasi user.' },
  prevPath:'css-rwd-grid', nextPath:'css-rwd-images'
},

// ── RWD IMAGES ────────────────────────────────
'css-rwd-images': {
  courseId:'css', title:'RWD Images', chapter:'CSS Responsive', color:'blue',
  theory:`<h2>RWD Images</h2>
<p>Gambar responsif menyesuaikan ukurannya dengan container dan perangkat.</p>
<h3>Gambar Responsif Dasar</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  <span class="text-red-600">img</span> {<br/>
  &nbsp;&nbsp;<span class="text-blue-600">max-width</span>: <span class="text-green-600">100%</span>;<br/>
  &nbsp;&nbsp;<span class="text-blue-600">height</span>: <span class="text-green-600">auto</span>;<br/>
  }
</div>
<h3>Teknik Lanjutan</h3>
<ul>
  <li><code>object-fit: cover</code> - gambar mengisi container tanpa distorsi</li>
  <li><code>srcset</code> - gambar berbeda untuk resolusi berbeda</li>
  <li><code>picture</code> element - gambar berbeda untuk breakpoint berbeda</li>
  <li><code>aspect-ratio</code> - mempertahankan rasio aspek</li>
</ul>
<h3>Background Image Responsif</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm">
  <span class="text-blue-600">background-size</span>: <span class="text-green-600">cover</span>;<br/>
  <span class="text-blue-600">background-position</span>: <span class="text-green-600">center</span>;
</div>`,
  code:`<!DOCTYPE html>
<html><head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
* { box-sizing: border-box; }
body { font-family: Arial, sans-serif; padding: 20px; background: #f8fafc; }
.label { font-size: 0.7rem; font-weight: bold; color: #94a3b8; text-transform: uppercase; margin-bottom: 8px; }
.demo { background: white; border-radius: 12px; padding: 16px; margin: 12px 0; border: 1px solid #e2e8f0; }

/* Responsive image dasar */
.responsive-img { max-width: 100%; height: auto; border-radius: 8px; display: block; }

/* Aspect ratio container */
.aspect-16-9 { aspect-ratio: 16/9; overflow: hidden; border-radius: 8px; }
.aspect-16-9 img { width: 100%; height: 100%; object-fit: cover; }

/* Responsive grid gambar */
.img-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 8px; }
.img-grid img { width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: 8px; }

/* Background image responsif */
.bg-hero {
  background: url('https://picsum.photos/800/300?random=10') center/cover no-repeat;
  height: 150px; border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
}
.bg-hero span { background: rgba(0,0,0,0.5); color: white; padding: 8px 16px; border-radius: 6px; font-weight: bold; }
</style></head><body>
<div class="demo">
  <div class="label">max-width: 100% (responsive)</div>
  <img src="https://picsum.photos/600/200?random=1" class="responsive-img">
</div>
<div class="demo">
  <div class="label">aspect-ratio: 16/9 + object-fit: cover</div>
  <div class="aspect-16-9"><img src="https://picsum.photos/600/400?random=2"></div>
</div>
<div class="demo">
  <div class="label">Grid gambar responsif (auto-fill)</div>
  <div class="img-grid">
    <img src="https://picsum.photos/150/150?random=3">
    <img src="https://picsum.photos/150/150?random=4">
    <img src="https://picsum.photos/150/150?random=5">
    <img src="https://picsum.photos/150/150?random=6">
    <img src="https://picsum.photos/150/150?random=7">
  </div>
</div>
<div class="demo">
  <div class="label">Background image responsif</div>
  <div class="bg-hero"><span>background-size: cover</span></div>
</div>
</body></html>`,
  quiz:{ question:'CSS minimal apa yang diperlukan untuk membuat gambar responsif?', options:['width: 100%','max-width: 100%; height: auto','display: responsive','flex: 1'], correctIndex:1, explanation:'max-width: 100% mencegah gambar melebihi container, height: auto mempertahankan rasio aspek.' },
  prevPath:'css-rwd-media', nextPath: null
},

};

