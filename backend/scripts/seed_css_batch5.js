const { Pool } = require('pg');
require('dotenv').config({ path: 'c:/xampp/htdocs/Learning Management System/backend/.env' });
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const batch5Lessons = [
  {
    id: 'css-image-sprites',
    title: 'CSS Image Sprites',
    order: 38,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-teal-600 to-cyan-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-teal-150 border border-white/20">CSS Performance</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Image Sprites: Optimasi Gambar & Bandwidth</h1>
    <p class="text-teal-100 text-sm md:text-base leading-relaxed">
      Image Sprite adalah teknik menggabungkan puluhan gambar atau ikon kecil ke dalam <strong>satu file gambar tunggal</strong>, lalu menggunakan <code>background-position</code> untuk menampilkan potongan ikon tertentu.
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Mengapa Image Sprite Sangat Cepat?</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
      <div class="p-4 bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 rounded-xl space-y-1">
        <strong class="text-rose-900 dark:text-rose-300">❌ Tanpa Sprite (10 File Terpisah):</strong>
        <p class="text-rose-800 dark:text-rose-400">Browser harus melakukan 10 kali request HTTP ke server, membuat loading web terasa lambat dan ada jeda kedip saat hover.</p>
      </div>
      <div class="p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 rounded-xl space-y-1">
        <strong class="text-emerald-900 dark:text-emerald-300">✅ Menggunakan Image Sprite (1 File):</strong>
        <p class="text-emerald-800 dark:text-emerald-400">Browser HANYA melakukan 1 kali request HTTP. Semua ikon langsung terunduh secara instan tanpa ada jeda sama sekali!</p>
      </div>
    </div>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Cara Kerja Koordinat <code>background-position</code></h2>
    <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
      Kita menentukan lebar dan tinggi jendela pandang (viewport) elemen, lalu menggeser gambar latar belakang menggunakan koordinat negatif (X dan Y):
    </p>
    <div class="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs overflow-x-auto">
      #home-icon {<br/>
      &nbsp;&nbsp;width: 46px;<br/>
      &nbsp;&nbsp;height: 44px;<br/>
      &nbsp;&nbsp;background: url('img_navsprites.gif') 0 0;<br/>
      }<br/>
      #next-icon {<br/>
      &nbsp;&nbsp;width: 43px;<br/>
      &nbsp;&nbsp;height: 44px;<br/>
      &nbsp;&nbsp;background: url('img_navsprites.gif') -91px 0; /* Geser 91px ke kiri */<br/>
      }
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20 border border-teal-200 dark:border-teal-900/40 rounded-2xl">
    <h4 class="text-teal-900 dark:text-teal-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-teal-800 dark:text-teal-400 text-xs leading-relaxed">
      Di Live Editor, atur <code>#icon-flag</code> dengan <code>background-position: -48px 0;</code> untuk menampilkan bendera kedua dari sprite image!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 25px; background: #f8fafc; }
    
    /* Base Sprite Style */
    .sprite-icon {
      width: 44px;
      height: 44px;
      display: inline-block;
      border: 2px solid #cbd5e1;
      border-radius: 8px;
      background-image: url('https://www.w3schools.com/css/img_navsprites.gif');
      background-repeat: no-repeat;
    }

    /* Ikon 1: Beranda (Koordinat 0, 0) */
    .icon-home {
      background-position: 0 0;
    }

    /* Ikon 2: Panah Kanan (Koordinat -91px, 0) */
    .icon-next {
      background-position: -91px 0;
    }
  </style>
</head>
<body>

  <h3>Demo CSS Image Sprites:</h3>
  <p>Dua ikon berbeda ini berasal dari SATU file gambar yang sama persis:</p>

  <div class="sprite-icon icon-home" title="Beranda"></div>
  <div class="sprite-icon icon-next" title="Selanjutnya"></div>

</body>
</html>`,
    quiz: {
      question: "Apa keuntungan performa terbesar dari penerapan teknik CSS Image Sprites pada halaman web?",
      options: [
        "Meningkatkan resolusi foto menjadi 8K",
        "Mengurangi jumlah HTTP requests ke server secara drastis dengan menggabungkan banyak aset gambar menjadi satu file",
        "Otomatis memutar musik latar belakang",
        "Menghilangkan kebutuhan tag HTML"
      ],
      correctIndex: 1,
      explanation: "Image sprites memangkas jumlah permintaan HTTP (HTTP roundtrips) ke server karena browser hanya perlu mengunduh 1 file gambar gabungan saja."
    }
  },
  {
    id: 'css-attr-selectors',
    title: 'CSS Attribute Selectors',
    order: 39,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-blue-150 border border-white/20">CSS Selectors</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Attribute Selectors: Menargetkan Berdasarkan Atribut</h1>
    <p class="text-blue-100 text-sm md:text-base leading-relaxed">
      Attribute Selector memungkinkan Anda memilih elemen berdasarkan keberadaan atribut atau nilai spesifik dari atributnya (seperti <code>type</code>, <code>href</code>, <code>target</code>, <code>alt</code>).
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">6 Macam Attribute Selectors</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
      <div class="p-3.5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <code class="font-bold text-blue-600">[target]</code>
        <p class="text-slate-600 dark:text-slate-400 mt-1">Memilih semua elemen yang memiliki atribut <code>target</code> (apapun nilainya).</p>
      </div>

      <div class="p-3.5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <code class="font-bold text-blue-600">[type="password"]</code>
        <p class="text-slate-600 dark:text-slate-400 mt-1">Memilih elemen yang nilai atribut <code>type</code>-nya <strong>sama persis</strong> dengan "password".</p>
      </div>

      <div class="p-3.5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <code class="font-bold text-emerald-600">[href^="https"]</code>
        <p class="text-slate-600 dark:text-slate-400 mt-1">Memilih link yang nilai <code>href</code>-nya <strong>diawali (starts with)</strong> dengan kata "https".</p>
      </div>

      <div class="p-3.5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <code class="font-bold text-emerald-600">[href$=".pdf"]</code>
        <p class="text-slate-600 dark:text-slate-400 mt-1">Memilih link yang nilai <code>href</code>-nya <strong>diakhiri (ends with)</strong> dengan ekstensi ".pdf".</p>
      </div>

      <div class="p-3.5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 md:col-span-2">
        <code class="font-bold text-purple-600">[class*="btn-"]</code>
        <p class="text-slate-600 dark:text-slate-400 mt-1">Memilih elemen yang class-nya <strong>mengandung (contains)</strong> potongan teks "btn-".</p>
      </div>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-900/40 rounded-2xl">
    <h4 class="text-blue-900 dark:text-blue-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-blue-800 dark:text-blue-400 text-xs leading-relaxed">
      Di Live Editor, beri gaya khusus pada semua link unduhan file PDF dengan selector <code>a[href$=".pdf"]</code> agar memiliki badge warna merah!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 25px; background: #f8fafc; }
    
    /* 1. Target input password */
    input[type="password"] {
      border: 2px solid #ef4444;
      background: #fef2f2;
      padding: 10px;
      border-radius: 8px;
    }

    /* 2. Target link PDF secara otomatis */
    a[href$=".pdf"] {
      color: #dc2626;
      font-weight: bold;
      text-decoration: none;
      padding: 6px 12px;
      background: #fee2e2;
      border-radius: 6px;
      display: inline-block;
      margin-top: 10px;
    }
  </style>
</head>
<body>

  <h3>Attribute Selector Demo:</h3>
  <div>
    <label>Password Akun:</label><br>
    <input type="password" placeholder="Ketik kata sandi...">
  </div>

  <br>
  <a href="https://example.com/ebook-css-lengkap.pdf">📄 Unduh Ebook CSS (PDF)</a>

</body>
</html>`,
    quiz: {
      question: "Selector manakah yang digunakan untuk memilih semua elemen <a> yang link URL-nya diakhiri dengan ekstensi '.pdf'?",
      options: [
        "a[href^='.pdf']",
        "a[href$='.pdf']",
        "a[href*='.pdf']",
        "a[href~='.pdf']"
      ],
      correctIndex: 1,
      explanation: "Simbol dolar ($=) merepresentasikan 'ends with' (diakhiri dengan), sehingga a[href$='.pdf'] akan menargetkan semua link file PDF."
    }
  },
  {
    id: 'css-forms',
    title: 'CSS Forms',
    order: 40,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-indigo-600 to-purple-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-indigo-150 border border-white/20">CSS UI Forms</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Forms: Formulir Elegan, Fokus & Validasi</h1>
    <p class="text-indigo-100 text-sm md:text-base leading-relaxed">
      Formulir HTML default terlihat membosankan. Pelajari cara mengubah input, textarea, checkbox, dan tombol submit menjadi antarmuka formulir yang indah dan berkelas.
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Prinsip Desain Formulir Modern</h2>
    <div class="space-y-3 text-xs">
      <div class="p-3.5 bg-slate-50 dark:bg-slate-900 rounded-xl">
        <strong class="text-indigo-600">1. Atur Box-Sizing:</strong> Gunakan <code>box-sizing: border-box; width: 100%;</code> agar input mengisi lebar penuh kontainer tanpa meluap.
      </div>
      <div class="p-3.5 bg-slate-50 dark:bg-slate-900 rounded-xl">
        <strong class="text-indigo-600">2. Hilangkan Outline Kasar:</strong> Gunakan <code>outline: none;</code> dan gantikan dengan <code>border-color</code> + <code>box-shadow</code> lembut pada status <code>:focus</code>.
      </div>
      <div class="p-3.5 bg-slate-50 dark:bg-slate-900 rounded-xl">
        <strong class="text-indigo-600">3. Ikon di Dalam Input:</strong> Gunakan background image atau posisi absolut pada ikon di samping kotak input.
      </div>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border border-indigo-200 dark:border-indigo-900/40 rounded-2xl">
    <h4 class="text-indigo-900 dark:text-indigo-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-indigo-800 dark:text-indigo-400 text-xs leading-relaxed">
      Di Live Editor, uji interaktivitas formulir dengan mengklik input nama dan email untuk melihat efek fokus glowing yang halus!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #f1f5f9; padding: 30px; }
    
    .form-card {
      max-width: 360px;
      margin: 0 auto;
      background: white;
      padding: 25px;
      border-radius: 16px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.06);
    }
    .form-group {
      margin-bottom: 16px;
    }
    label {
      display: block;
      font-size: 13px;
      font-weight: bold;
      color: #334155;
      margin-bottom: 6px;
    }
    input[type="text"], input[type="email"] {
      width: 100%;
      box-sizing: border-box;
      padding: 12px 14px;
      border: 2px solid #e2e8f0;
      border-radius: 10px;
      font-size: 14px;
      outline: none;
      transition: all 0.2s;
    }
    input[type="text"]:focus, input[type="email"]:focus {
      border-color: #6366f1;
      box-shadow: 0 0 0 4px rgba(99,102,241,0.15);
    }
    .btn-submit {
      width: 100%;
      background: #6366f1;
      color: white;
      border: none;
      padding: 12px;
      border-radius: 10px;
      font-weight: bold;
      font-size: 14px;
      cursor: pointer;
      transition: background 0.2s;
    }
    .btn-submit:hover {
      background: #4f46e5;
    }
  </style>
</head>
<body>

  <div class="form-card">
    <h3 style="margin-top:0; color:#1e293b;">Daftar Akun Baru</h3>
    <form>
      <div class="form-group">
        <label>Nama Lengkap</label>
        <input type="text" placeholder="Masukkan nama Anda">
      </div>
      <div class="form-group">
        <label>Alamat Email</label>
        <input type="email" placeholder="nama@email.com">
      </div>
      <button type="button" class="btn-submit">Buat Akun Sekarang</button>
    </form>
  </div>

</body>
</html>`,
    quiz: {
      question: "Mengapa deklarasi 'box-sizing: border-box;' sangat penting disematkan pada input form yang memiliki 'width: 100%'?",
      options: [
        "Agar padding dan border tidak menambah ukuran total lebar input, sehingga tidak meluap keluar dari form",
        "Agar teks menjadi rata tengah",
        "Agar warna background input otomatis gelap",
        "Sebagai aturan wajib W3C untuk validasi email"
      ],
      correctIndex: 0,
      explanation: "'box-sizing: border-box;' memastikan lebar padding dan border dimasukkan ke dalam perhitungan width 100%, mencegah input melebar keluar kontainer formulir."
    }
  },
  {
    id: 'css-counters',
    title: 'CSS Counters',
    order: 41,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-amber-600 to-orange-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-amber-150 border border-white/20">CSS Automation</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Counters: Penomoran Otomatis Cerdas</h1>
    <p class="text-amber-100 text-sm md:text-base leading-relaxed">
      CSS Counters ibarat <strong>variabel penghitung angka</strong> yang dikelola langsung oleh CSS untuk menomori bab, sub-bab, atau langkah-langkah secara otomatis tanpa perlu menulis angka manual di HTML!
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">3 Properti Kunci CSS Counter</h2>
    <div class="space-y-3 text-xs">
      <div class="p-3.5 bg-slate-50 dark:bg-slate-900 rounded-xl font-mono">
        <strong class="text-amber-600">1. counter-reset:</strong> <code>counter-reset: step-counter;</code> (Membuat dan mereset variabel counter ke angka 0 pada elemen parent).
      </div>
      <div class="p-3.5 bg-slate-50 dark:bg-slate-900 rounded-xl font-mono">
        <strong class="text-amber-600">2. counter-increment:</strong> <code>counter-increment: step-counter;</code> (Menambah nilai hitungan +1 setiap kali elemen muncul).
      </div>
      <div class="p-3.5 bg-slate-50 dark:bg-slate-900 rounded-xl font-mono">
        <strong class="text-amber-600">3. content: counter(...):</strong> <code>content: "Langkah " counter(step-counter) ": ";</code> (Mencetak angka counter di dalam pseudo-element <code>::before</code>).
      </div>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border border-amber-200 dark:border-amber-900/40 rounded-2xl">
    <h4 class="text-amber-900 dark:text-amber-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-amber-800 dark:text-amber-400 text-xs leading-relaxed">
      Di Live Editor, tambahkan elemen <code>&lt;h4&gt;</code> baru di HTML dan lihat bagaimana CSS otomatis menghitung nomor langkah berikutnya tanpa Anda ubah secara manual!
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
      /* 1. Inisialisasi Counter */
      counter-reset: course-step;
    }
    
    /* 2. Tambah +1 dan Cetak Penomoran Otomatis */
    h4.step {
      counter-increment: course-step;
      color: #0f172a;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    h4.step::before {
      content: counter(course-step);
      background: #f97316;
      color: white;
      font-size: 12px;
      font-weight: 900;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  </style>
</head>
<body>

  <h3>Alur Belajar Web Development:</h3>
  <h4 class="step">Pelajari Struktur Dasar HTML</h4>
  <h4 class="step">Kuasai Desain & Tata Letak CSS</h4>
  <h4 class="step">Tambahkan Logika Interaktif JavaScript</h4>
  <h4 class="step">Pelajari Database & Backend API</h4>

</body>
</html>`,
    quiz: {
      question: "Properti CSS apa yang digunakan untuk menambah nilai (+1) pada variabel counter yang sedang berjalan?",
      options: [
        "counter-add;",
        "counter-increment;",
        "counter-step;",
        "counter-plus;"
      ],
      correctIndex: 1,
      explanation: "'counter-increment' menaikkan nilai variabel counter setiap kali selector elemen yang ditargetkan diproses oleh browser."
    }
  },
  {
    id: 'css-units',
    title: 'CSS Units',
    order: 42,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-emerald-600 to-teal-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-emerald-150 border border-white/20">CSS Dimensions</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Units: Satuan Ukuran Mutlak vs Relatif</h1>
    <p class="text-emerald-100 text-sm md:text-base leading-relaxed">
      Memahami satuan ukuran CSS adalah fondasi utama untuk membangun website yang responsif dan nyaman diakses di semua ukuran layar monitor maupun smartphone.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="bg-white dark:bg-[#0c0e18] p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
      <h3 class="font-black text-slate-800 dark:text-white text-base">1. Satuan Mutlak (Absolute Units)</h3>
      <p class="text-xs text-slate-600 dark:text-slate-400">Ukurannya tetap dan tidak berubah mengikuti ukuran layar:</p>
      <div class="text-xs space-y-1 font-mono">
        <div><code>px</code> (Pixels) - Standar layar digital (1px = 1 titik layar).</div>
        <div><code>pt</code>, <code>cm</code>, <code>in</code> - Biasa untuk media cetak/print stylesheet.</div>
      </div>
    </div>

    <div class="bg-white dark:bg-[#0c0e18] p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
      <h3 class="font-black text-slate-800 dark:text-white text-base">2. Satuan Relatif (Pilihan Standar Modern ⭐)</h3>
      <p class="text-xs text-slate-600 dark:text-slate-400">Menyesuaikan diri secara dinamis:</p>
      <div class="text-xs space-y-1 font-mono">
        <div><code>rem</code> - Relatif terhadap font-size elemen root (<code>&lt;html&gt;</code>, default 16px).</div>
        <div><code>em</code> - Relatif terhadap font-size elemen induknya (parent).</div>
        <div><code>vw / vh</code> - 1% dari lebar / tinggi viewport layar browser.</div>
        <div><code>%</code> - Persentase dari ukuran elemen parent.</div>
      </div>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border border-emerald-200 dark:border-emerald-900/40 rounded-2xl">
    <h4 class="text-emerald-900 dark:text-emerald-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-emerald-800 dark:text-emerald-400 text-xs leading-relaxed">
      Di Live Editor, ubah <code>font-size: 2rem;</code> (setara 32px) pada judul dan amati bagaimana teks berskala rapi mengikuti ukuran dasar root HTML.
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Default root HTML = 16px */
    html {
      font-size: 16px;
    }
    body {
      font-family: Arial, sans-serif;
      padding: 2rem;
      background: #f8fafc;
    }
    .hero-banner {
      background: #0f172a;
      color: white;
      padding: 2.5rem; /* 40px */
      border-radius: 1rem; /* 16px */
      text-align: center;
    }
    .hero-title {
      font-size: 2rem; /* 2 x 16px = 32px */
      margin: 0 0 1rem 0;
      color: #38bdf8;
    }
    .hero-desc {
      font-size: 1.125rem; /* 18px */
      color: #94a3b8;
    }
  </style>
</head>
<body>

  <div class="hero-banner">
    <h1 class="hero-title">Belajar Satuan rem Modern</h1>
    <p class="hero-desc">1rem bernilai 16px mengikuti ukuran font standar root browser.</p>
  </div>

</body>
</html>`,
    quiz: {
      question: "Jika ukuran font root <html> adalah 16px, berapakah ukuran piksel aktual dari '1.5rem'?",
      options: [
        "16px",
        "24px",
        "32px",
        "15px"
      ],
      correctIndex: 1,
      explanation: "1.5rem x 16px (root font size) = 24px."
    }
  },
  {
    id: 'css-inheritance',
    title: 'CSS Inheritance',
    order: 43,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-purple-600 to-indigo-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-purple-150 border border-white/20">CSS Cascade</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Inheritance: Pewarisan Properti ke Child</h1>
    <p class="text-purple-100 text-sm md:text-base leading-relaxed">
      Beberapa properti CSS secara alami <strong>diwariskan (*inherited*)</strong> dari elemen induk ke semua anak di dalamnya (seperti warna teks dan font), sementara properti tata letak (seperti border dan padding) tidak diwariskan.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="bg-white dark:bg-[#0c0e18] p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <h3 class="font-black text-emerald-600 text-sm">✅ Properti yang Diwariskan (Inherited)</h3>
      <p class="text-xs text-slate-600 dark:text-slate-400">
        <code>color</code>, <code>font-family</code>, <code>font-size</code>, <code>line-height</code>, <code>text-align</code>, <code>letter-spacing</code>.
      </p>
    </div>

    <div class="bg-white dark:bg-[#0c0e18] p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <h3 class="font-black text-rose-600 text-sm">❌ Properti yang TIDAK Diwariskan (Non-Inherited)</h3>
      <p class="text-xs text-slate-600 dark:text-slate-400">
        <code>border</code>, <code>margin</code>, <code>padding</code>, <code>width</code>, <code>height</code>, <code>background</code>, <code>position</code>.
      </p>
    </div>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
    <h2 class="text-lg font-black text-slate-800 dark:text-white">Kata Kunci Pengontrol Pewarisan</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
      <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl">
        <code>inherit</code> (Memaksa elemen mewarisi nilai dari parent-nya).
      </div>
      <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl">
        <code>initial</code> (Mereset properti ke nilai standar bawaan browser).
      </div>
      <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl">
        <code>unset</code> (Kombinasi cerdas inherit & initial).
      </div>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 border border-purple-200 dark:border-purple-900/40 rounded-2xl">
    <h4 class="text-purple-900 dark:text-purple-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-purple-800 dark:text-purple-400 text-xs leading-relaxed">
      Di Live Editor, atur <code>color: inherit;</code> pada tag <code>&lt;a&gt;</code> agar warna tautan otomatis mengikuti warna teks induknya.
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Parent memberikan pewarisan font dan warna ke semua anak */
    .parent-box {
      font-family: 'Segoe UI', sans-serif;
      color: #4338ca; /* Warna ungu diwariskan ke <p> dan <span> */
      border: 2px dashed #818cf8; /* Border TIDAK diwariskan */
      padding: 20px;
      border-radius: 12px;
    }
    .custom-link {
      color: inherit; /* Memaksa link mewarisi warna ungu parent */
      font-weight: bold;
    }
  </style>
</head>
<body style="background: #f8fafc; padding: 20px;">

  <div class="parent-box">
    <h3>Pewarisan CSS (Inheritance)</h3>
    <p>Teks paragraf ini otomatis berwarna ungu karena mewarisi aturan color dari .parent-box.</p>
    <a href="#" class="custom-link">Link ini menggunakan color: inherit!</a>
  </div>

</body>
</html>`,
    quiz: {
      question: "Manakah di antara properti CSS berikut yang secara default TIDAK diwariskan (non-inherited) ke elemen anaknya?",
      options: [
        "font-family",
        "color",
        "border",
        "line-height"
      ],
      correctIndex: 2,
      explanation: "'border', 'padding', dan 'margin' adalah properti box-model yang tidak diwariskan ke anak (child element)."
    }
  },
  {
    id: 'css-specificity',
    title: 'CSS Specificity',
    order: 44,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-red-600 to-rose-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-red-150 border border-white/20">CSS Hierarchy</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Specificity: Rumus Kekuatan Selector</h1>
    <p class="text-red-150 text-sm md:text-base leading-relaxed">
      Ketika ada dua atau lebih aturan CSS yang bertentangan menargetkan elemen yang sama, browser menghitung skor <strong>Spesifisitas</strong> untuk menentukan pemenangnya.
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Hierarki Skor Spesifisitas (Bobot Nilai)</h2>
    <div class="space-y-3 text-xs">
      <div class="p-3.5 bg-slate-50 dark:bg-slate-900 rounded-xl flex items-center justify-between">
        <div><strong class="text-purple-600 font-bold">1. Inline Style:</strong> <code>style="color: red;"</code></div>
        <span class="px-2.5 py-1 bg-purple-150 text-purple-700 dark:bg-purple-950 dark:text-purple-300 font-black rounded-lg">1000 Poin</span>
      </div>
      <div class="p-3.5 bg-slate-50 dark:bg-slate-900 rounded-xl flex items-center justify-between">
        <div><strong class="text-blue-600 font-bold">2. ID Selector:</strong> <code>#header</code></div>
        <span class="px-2.5 py-1 bg-blue-150 text-blue-700 dark:bg-blue-950 dark:text-blue-300 font-black rounded-lg">100 Poin</span>
      </div>
      <div class="p-3.5 bg-slate-50 dark:bg-slate-900 rounded-xl flex items-center justify-between">
        <div><strong class="text-emerald-600 font-bold">3. Class / Attribute / Pseudo-class:</strong> <code>.btn</code>, <code>[type]</code>, <code>:hover</code></div>
        <span class="px-2.5 py-1 bg-emerald-150 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 font-black rounded-lg">10 Poin</span>
      </div>
      <div class="p-3.5 bg-slate-50 dark:bg-slate-900 rounded-xl flex items-center justify-between">
        <div><strong class="text-slate-600 font-bold">4. Element / Pseudo-element:</strong> <code>p</code>, <code>div</code>, <code>::before</code></div>
        <span class="px-2.5 py-1 bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300 font-black rounded-lg">1 Poin</span>
      </div>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20 border border-red-200 dark:border-red-900/40 rounded-2xl">
    <h4 class="text-red-900 dark:text-red-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-red-800 dark:text-red-400 text-xs leading-relaxed">
      Di Live Editor, perhatikan bagaimana selector ID <code>#title</code> (100 poin) mengalahkan selector class <code>.heading</code> (10 poin) meskipun urutan class ditulis di baris paling bawah!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Element Selector: Skor 1 */
    h1 {
      color: #94a3b8;
    }

    /* Class Selector: Skor 10 */
    .heading {
      color: #10b981;
    }

    /* ID Selector: Skor 100 (PEMENANG!) */
    #title {
      color: #2563eb;
    }
  </style>
</head>
<body style="font-family: Arial, sans-serif; padding: 20px;">

  <h1 id="title" class="heading">Teks Ini Akan Berwarna Biru!</h1>
  <p>Karena ID (#title) memiliki spesifisitas 100, mengalahkan Class (10) dan Tag Element (1).</p>

</body>
</html>`,
    quiz: {
      question: "Selector manakah di bawah ini yang memiliki skor spesifisitas tertinggi dan mengalahkan yang lainnya?",
      options: [
        "div p (Skor 2)",
        ".alert-box (Skor 10)",
        "#main-nav (Skor 100)",
        "ul > li (Skor 2)"
      ],
      correctIndex: 2,
      explanation: "ID selector (#main-nav) memiliki bobot spesifisitas 100 poin, mengalahkan Class (10 poin) dan Element (1 poin)."
    }
  },
  {
    id: 'css-important',
    title: 'CSS !important',
    order: 45,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-red-700 to-rose-900 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-red-200 border border-white/20">CSS Override</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS !important: Aturan Pemungkas</h1>
    <p class="text-red-100 text-sm md:text-base leading-relaxed">
      Deklarasi <code>!important</code> mengesampingkan seluruh perhitungan spesifisitas standar dan memaksa aturan tersebut untuk menjadi pemenang mutlak di atas segalanya.
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Kapan Boleh & Dilarang Menggunakan !important?</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
      <div class="p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 rounded-xl space-y-1">
        <strong class="text-emerald-900 dark:text-emerald-300">✅ Kapan Boleh:</strong>
        <p class="text-emerald-800 dark:text-emerald-400">Pada utility helper class spesifik (seperti <code>.hidden { display: none !important; }</code>) atau saat menimpa library pihak ketiga yang sangat membandel.</p>
      </div>
      <div class="p-4 bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 rounded-xl space-y-1">
        <strong class="text-rose-900 dark:text-rose-300">❌ Mengapa Harus Dihindari:</strong>
        <p class="text-rose-800 dark:text-rose-400">Merusak alur cascading alami CSS dan membuat debugging kode di masa depan menjadi sangat sulit karena harus dilawan dengan <code>!important</code> lain.</p>
      </div>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20 border border-red-200 dark:border-red-900/40 rounded-2xl">
    <h4 class="text-red-900 dark:text-red-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-red-800 dark:text-red-400 text-xs leading-relaxed">
      Di Live Editor, amati bagaimana <code>background-color: #ef4444 !important;</code> mampu mengalahkan inline style yang biasanya memiliki poin spesifisitas tertinggi!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* !important mengalahkan inline style dan ID */
    .urgent-btn {
      background-color: #dc2626 !important;
      color: white !important;
      padding: 12px 20px;
      border: none;
      border-radius: 8px;
      font-weight: bold;
    }
  </style>
</head>
<body style="padding: 25px; font-family: Arial, sans-serif;">

  <!-- Inline style biasanya menang, tetapi kalah oleh !important -->
  <button class="urgent-btn" style="background-color: yellow; color: black;">
    Tombol Darurat (!important)
  </button>

</body>
</html>`,
    quiz: {
      question: "Apakah satu-satunya deklarasi yang mampu mengesampingkan (override) aturan CSS yang diberi '!important'?",
      options: [
        "Selector ID biasa",
        "Inline style biasa tanpa !important",
        "Deklarasi lain yang juga memiliki '!important' dengan tingkat spesifisitas lebih tinggi atau ditulis setelahnya",
        "Tag <h1>"
      ],
      correctIndex: 2,
      explanation: "Satu-satunya cara mengalahkan aturan !important adalah dengan aturan !important lain yang memiliki spesifisitas lebih tinggi atau dideklarasikan lebih akhir dalam urutan alur CSS."
    }
  },
  {
    id: 'css-math-functions',
    title: 'CSS Math Functions',
    order: 46,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-blue-600 to-indigo-800 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-blue-150 border border-white/20">CSS Calculations</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Math: calc(), min(), max(), & clamp()</h1>
    <p class="text-blue-100 text-sm md:text-base leading-relaxed">
      Fungsi matematika CSS memungkinkan perhitungan dinamis langsung di stylesheet tanpa JavaScript, menciptakan tipografi cair (*fluid typography*) yang otomatis responsif.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
      <code class="font-bold text-blue-600 text-sm">calc(100% - 40px)</code>
      <p class="text-slate-600 dark:text-slate-400">Menghitung kombinasi satuan berbeda (misal persentase dikurangi piksel tetap).</p>
    </div>

    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
      <code class="font-bold text-indigo-600 text-sm">min(500px, 80%)</code>
      <p class="text-slate-600 dark:text-slate-400">Memilih nilai yang <strong>paling kecil</strong> di antara opsi yang diberikan.</p>
    </div>

    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
      <code class="font-bold text-purple-600 text-sm">max(300px, 50%)</code>
      <p class="text-slate-600 dark:text-slate-400">Memilih nilai yang <strong>paling besar</strong> untuk menjaga batas minimal.</p>
    </div>

    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
      <code class="font-bold text-emerald-600 text-sm">clamp(1rem, 2.5vw, 2.5rem) ⭐</code>
      <p class="text-slate-600 dark:text-slate-400">Jurus sakti Fluid Typography: menetapkan batas minimal, nilai dinamis, dan batas maksimal!</p>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-900/40 rounded-2xl">
    <h4 class="text-blue-900 dark:text-blue-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-blue-800 dark:text-blue-400 text-xs leading-relaxed">
      Di Live Editor, atur <code>width: calc(100% - 60px);</code> pada kartu untuk memberikan jarak margin 30px di sisi kiri dan kanan secara proporsional.
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; background: #f8fafc; }
    
    /* Fluid Typography via clamp(MIN, VAL, MAX) */
    .fluid-title {
      font-size: clamp(1.5rem, 4vw, 3rem);
      color: #1e293b;
      margin-top: 0;
    }

    /* Dynamic Width via calc() */
    .smart-card {
      width: calc(100% - 40px);
      background: white;
      padding: 20px;
      border-radius: 16px;
      border: 2px solid #e2e8f0;
      box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    }
  </style>
</head>
<body>

  <div class="smart-card">
    <h1 class="fluid-title">Fluid Typography dengan clamp()</h1>
    <p style="color:#64748b; font-size:14px;">
      Ukuran font judul di atas otomatis membesar di desktop dan menciut di layar HP tanpa memerlukan Media Query sama sekali!
    </p>
  </div>

</body>
</html>`,
    quiz: {
      question: "Bagaimanakah urutan 3 parameter di dalam fungsi CSS clamp()?",
      options: [
        "clamp(MAX, IDEAL, MIN)",
        "clamp(MIN, PREFERRED, MAX)",
        "clamp(DEFAULT, AUTO, STATIC)",
        "clamp(X, Y, Z)"
      ],
      correctIndex: 1,
      explanation: "Format clamp adalah clamp(MINIMUM, NILAI_DINAMIS_PREFERRED, MAKSIMUM)."
    }
  },
  {
    id: 'css-optimization',
    title: 'CSS Optimization',
    order: 47,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-emerald-600 to-teal-800 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-emerald-150 border border-white/20">CSS Speed</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Optimization & High-Performance Web</h1>
    <p class="text-emerald-100 text-sm md:text-base leading-relaxed">
      Optimasi CSS yang baik menghasilkan waktu muat halaman (Page Speed) 90+ di Google Lighthouse dan animasi 60 FPS yang mulus tanpa lag.
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Praktek Terbaik Optimasi CSS</h2>
    <div class="space-y-3 text-xs">
      <div class="p-3.5 bg-slate-50 dark:bg-slate-900 rounded-xl">
        <strong class="text-emerald-600">1. Gunakan Akselerasi GPU (Hardware Accelerated):</strong>
        Animasi menggunakan <code>transform</code> (translate, scale) dan <code>opacity</code> diproses langsung oleh GPU kartu grafis, sedangkan animasi <code>top</code>/<code>left</code>/<code>margin</code> memicu reflow CPU yang berat.
      </div>
      <div class="p-3.5 bg-slate-50 dark:bg-slate-900 rounded-xl">
        <strong class="text-emerald-600">2. Minifikasi File CSS:</strong>
        Hapus spasi, komentar, dan baris baru di file production untuk memangkas ukuran download hingga 70%.
      </div>
      <div class="p-3.5 bg-slate-50 dark:bg-slate-900 rounded-xl">
        <strong class="text-emerald-600">3. Hindari Selector Terlalu Dalam:</strong>
        Gunakan class datar <code>.card-btn</code> daripada selector bertingkat berat <code>body div#main ul li.item a.btn</code>.
      </div>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border border-emerald-200 dark:border-emerald-900/40 rounded-2xl">
    <h4 class="text-emerald-900 dark:text-emerald-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-emerald-800 dark:text-emerald-400 text-xs leading-relaxed">
      Di Live Editor, gerakkan kartu dengan <code>transform: translateY(-6px);</code> untuk menghasilkan animasi 60fps yang super mulus!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 30px; background: #f8fafc; }
    
    /* Kartu Performa Tinggi (GPU 60fps) */
    .fast-card {
      background: white;
      width: 260px;
      padding: 20px;
      border-radius: 14px;
      border: 1px solid #e2e8f0;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
      
      /* Hardware Accelerated Properties */
      transition: transform 0.25s ease, box-shadow 0.25s ease;
      will-change: transform;
      cursor: pointer;
    }
    .fast-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
    }
  </style>
</head>
<body>

  <div class="fast-card">
    <h3 style="margin-top:0; color:#0f172a;">GPU Animated Card</h3>
    <p style="color:#64748b; font-size:13px;">Arahkan kursor ke kartu ini. Animasi translateY diproses oleh kartu grafis secara mulus 60 FPS.</p>
  </div>

</body>
</html>`,
    quiz: {
      question: "Properti manakah di bawah ini yang paling direkomendasikan untuk animasi CSS performa tinggi (60 FPS) karena diproses langsung oleh GPU?",
      options: [
        "top dan left",
        "transform dan opacity",
        "margin-top dan margin-left",
        "width dan height"
      ],
      correctIndex: 1,
      explanation: "'transform' dan 'opacity' tidak memicu layout reflow di CPU browser sehingga dirender secepat kilat oleh GPU (Compositor thread)."
    }
  },
  {
    id: 'css-accessibility',
    title: 'CSS Accessibility',
    order: 48,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-cyan-700 to-blue-800 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-cyan-150 border border-white/20">A11y Standards</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Accessibility (A11y): Web untuk Semua Orang</h1>
    <p class="text-cyan-100 text-sm md:text-base leading-relaxed">
      Aksesibilitas memastikan website Anda dapat digunakan dengan nyaman oleh penyandang disabilitas, pengguna navigasi keyboard, dan pembaca layar (*screen reader*).
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Pilar Utama Aksesibilitas CSS</h2>
    <div class="space-y-3 text-xs">
      <div class="p-3.5 bg-slate-50 dark:bg-slate-900 rounded-xl">
        <strong class="text-cyan-600">1. Indikator :focus-visible:</strong> Jangan pernah menghapus outline keyboard tanpa pengganti! Gunakan <code>:focus-visible</code> untuk menampilkan cincin fokus hanya saat pengguna menekan tombol Tab keyboard.
      </div>
      <div class="p-3.5 bg-slate-50 dark:bg-slate-900 rounded-xl">
        <strong class="text-cyan-600">2. Class Screen Reader Only (.sr-only):</strong> Menyembunyikan teks secara visual namun tetap terbaca jelas oleh software pembaca layar tunanetra.
      </div>
      <div class="p-3.5 bg-slate-50 dark:bg-slate-900 rounded-xl">
        <strong class="text-cyan-600">3. Menghargai Pengguna (prefers-reduced-motion):</strong> Matikan animasi otomatis bagi pengguna yang mengalami gangguan vestibular/pusing.
      </div>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border border-cyan-200 dark:border-cyan-900/40 rounded-2xl">
    <h4 class="text-cyan-900 dark:text-cyan-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-cyan-800 dark:text-cyan-400 text-xs leading-relaxed">
      Di Live Editor, tekan tombol <strong>TAB</strong> pada keyboard Anda untuk menguji cincin fokus aksesibilitas <code>:focus-visible</code> yang elegan!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 30px; background: #f8fafc; }
    
    .a11y-btn {
      background: #0284c7;
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-weight: bold;
      font-size: 14px;
      cursor: pointer;
    }
    
    /* Fokus cerdas khusus navigasi keyboard (Tombol Tab) */
    .a11y-btn:focus-visible {
      outline: 3px solid #0284c7;
      outline-offset: 4px;
    }

    /* Utilitas Teks Khusus Screen Reader */
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      border: 0;
    }
  </style>
</head>
<body>

  <h3>Aksesibilitas Navigasi Keyboard:</h3>
  <p>Tekan tombol <strong>TAB</strong> pada keyboard Anda untuk memfokuskan tombol di bawah:</p>

  <button class="a11y-btn">
    Lanjutkan Pembayaran
    <span class="sr-only">(Biaya total adalah Rp 150.000)</span>
  </button>

</body>
</html>`,
    quiz: {
      question: "Pseudo-class manakah yang secara khusus menampilkan cincin fokus HANYA ketika pengguna berinteraksi menggunakan navigasi keyboard (tombol Tab)?",
      options: [
        ":hover",
        ":focus-visible",
        ":active",
        ":link"
      ],
      correctIndex: 1,
      explanation: "':focus-visible' memungkinkan browser menampilkan indikator fokus visual saat pengguna bernavigasi menggunakan keyboard, tanpa mengganggu pengguna mouse."
    }
  },
  {
    id: 'css-website-layout',
    title: 'CSS Website Layout',
    order: 49,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-slate-800 to-indigo-950 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-indigo-300 border border-white/20">CSS Real-World Project</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Website Layout: Struktur Lengkap Web Modern</h1>
    <p class="text-slate-300 text-sm md:text-base leading-relaxed">
      Menggabungkan semua ilmu CSS yang telah dipelajari untuk merakit struktur layout website utuh yang responsif: <strong>Header, Navbar, Hero Section, Main Content, Sidebar, & Footer</strong>.
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Anatomi Layout Web Standar Dunia</h2>
    <div class="space-y-2 text-xs">
      <div class="p-3 bg-slate-100 dark:bg-slate-900 rounded-xl font-mono">1. <code>&lt;header&gt;</code> & <code>&lt;nav&gt;</code>: Identitas brand dan navigasi utama.</div>
      <div class="p-3 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-900 dark:text-indigo-300 rounded-xl font-mono">2. <code>&lt;section class="hero"&gt;</code>: Pesan utama & Call to Action.</div>
      <div class="p-3 bg-slate-100 dark:bg-slate-900 rounded-xl font-mono">3. <code>&lt;main&gt;</code> & <code>&lt;aside&gt;</code>: Konten artikel utama berdampingan dengan sidebar widget.</div>
      <div class="p-3 bg-slate-100 dark:bg-slate-900 rounded-xl font-mono">4. <code>&lt;footer&gt;</code>: Hak cipta dan tautan sekunder.</div>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-slate-100 to-indigo-50 dark:from-slate-900 dark:to-indigo-950/30 border border-slate-300 dark:border-slate-800 rounded-2xl">
    <h4 class="text-slate-900 dark:text-white font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
      Di Live Editor, eksplorasi kode layout halaman web utuh dan coba ubah warna tema header menjadi gradien modern!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Segoe UI', Arial, sans-serif; background: #f1f5f9; color: #1e293b; }

    /* Header & Nav */
    header {
      background: #0f172a;
      color: white;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    nav a {
      color: #94a3b8;
      text-decoration: none;
      margin-left: 1.5rem;
      font-weight: 600;
    }
    nav a:hover { color: #38bdf8; }

    /* Container Utama */
    .container {
      max-width: 1000px;
      margin: 1.5rem auto;
      padding: 0 1rem;
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 1.5rem;
    }

    /* Main Article & Sidebar */
    .main-content {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
    }
    .sidebar {
      background: white;
      padding: 1.5rem;
      border-radius: 12px;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
      height: fit-content;
    }

    /* Footer */
    footer {
      background: #0f172a;
      color: #94a3b8;
      text-align: center;
      padding: 1.5rem;
      margin-top: 2rem;
      font-size: 13px;
    }
  </style>
</head>
<body>

  <header>
    <h2>⚡ DevGrow</h2>
    <nav>
      <a href="#">Home</a>
      <a href="#">Articles</a>
      <a href="#">About</a>
    </nav>
  </header>

  <div class="container">
    <main class="main-content">
      <h1>Selamat Datang di Dunia Web</h1>
      <p style="margin-top:1rem; line-height:1.6; color:#475569;">
        Ini adalah contoh tata letak website lengkap yang dibangun menggunakan kombinasi Flexbox dan Grid yang terstruktur rapi.
      </p>
    </main>

    <aside class="sidebar">
      <h3>Kategori Populer</h3>
      <ul style="margin-top:1rem; padding-left:1.2rem; line-height:1.8; color:#64748b;">
        <li>HTML & CSS</li>
        <li>JavaScript Modern</li>
        <li>Database PostgreSQL</li>
      </ul>
    </aside>
  </div>

  <footer>
    &copy; 2026 DevGrow Learning Platform. All rights reserved.
  </footer>

</body>
</html>`,
    quiz: {
      question: "Tag semantik HTML5 manakah yang paling tepat digunakan untuk membungkus konten sekunder pendukung seperti sidebar artikel?",
      options: [
        "<aside>",
        "<header>",
        "<section>",
        "<footer>"
      ],
      correctIndex: 0,
      explanation: "Tag <aside> dirancang secara semantik untuk mewakili konten sekunder atau pendukung seperti sidebar, daftar widget, atau kutipan terkait."
    }
  }
];

async function run() {
  const modId = 'ba1383a2-219d-44ab-bf63-804d5a0f0902';
  console.log('🚀 Populating CSS Batch 5 lessons (38-49) for module:', modId);

  // 1. Get Chapter ID for "CSS Tutorial"
  const chRes = await pool.query(`SELECT id, title FROM "Chapter" WHERE "moduleId" = $1 AND title = 'CSS Tutorial' LIMIT 1`, [modId]);
  if (chRes.rowCount === 0) {
    throw new Error('Chapter CSS Tutorial not found!');
  }
  const chapterId = chRes.rows[0].id;
  console.log(`📌 Using Chapter: ${chRes.rows[0].title} (${chapterId})`);

  // 2. Insert or update batch 5 lessons
  for (const l of batch5Lessons) {
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

  console.log('\n🎉 ALL 12 CSS BATCH 5 LESSONS (38-49) SUCCESSFULLY INSERTED/UPDATED!');
  await pool.end();
}

run().catch(console.error);
