const { Pool } = require('pg');
require('dotenv').config({ path: 'c:/xampp/htdocs/Learning Management System/backend/.env' });

const dbs = [
  'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db',
  'postgresql://postgres:Dil1212@localhost:5432/lms_content_db'
];

const advancedBatch2Lessons = [
  {
    id: 'css-object-position',
    title: 'CSS object-position',
    order: 20,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-emerald-600 to-teal-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-emerald-150 border border-white/20">CSS Framing</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS object-position: Penataan Titik Fokus Gambar</h1>
    <p class="text-emerald-100 text-sm md:text-base leading-relaxed">
      Ketika menggunakan <code>object-fit: cover</code>, bagian gambar yang terpotong secara default berada di tengah. Dengan <code>object-position</code>, Anda dapat mengarahkan fokus ke wajah orang di atas atau objek di sisi samping.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <code class="font-bold text-emerald-600">top center (Fokus Wajah)</code>
      <p class="text-slate-600 dark:text-slate-400">Sangat penting untuk foto profil portrait agar bagian kepala tidak terpotong.</p>
    </div>
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <code class="font-bold text-emerald-600">center center (Default)</code>
      <p class="text-slate-600 dark:text-slate-400">Memotong seimbang dari 4 sisi menuju titik pusat gambar.</p>
    </div>
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <code class="font-bold text-emerald-600">Koordinat Persentase / Pixel</code>
      <p class="text-slate-600 dark:text-slate-400"><code>object-position: 80% 20%;</code> (X% dan Y% presisi).</p>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border border-emerald-200 dark:border-emerald-900/40 rounded-2xl">
    <h4 class="text-emerald-900 dark:text-emerald-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-emerald-800 dark:text-emerald-400 text-xs leading-relaxed">
      Di Live Editor, bandingkan foto banner yang menggunakan <code>object-position: top;</code> dengan posisi default <code>center;</code>!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #f8fafc; padding: 25px; }
    
    .banner-container {
      display: flex;
      gap: 20px;
    }
    .banner-card {
      background: white;
      padding: 12px;
      border-radius: 14px;
      border: 1px solid #cbd5e1;
      width: 220px;
    }
    .banner-img {
      width: 100%;
      height: 120px;
      object-fit: cover;
      border-radius: 8px;
    }
    
    .pos-center { object-position: center center; }
    .pos-top { object-position: top center; }
  </style>
</head>
<body>

  <h3>Perbandingan object-position:</h3>
  <div class="banner-container">
    <div class="banner-card">
      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&q=80" class="banner-img pos-center" alt="Center">
      <p style="font-size:12px; margin:8px 0 0 0; color:#64748b;"><strong>Center (Default):</strong> Wajah terpotong setengah</p>
    </div>

    <div class="banner-card">
      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&q=80" class="banner-img pos-top" alt="Top">
      <p style="font-size:12px; margin:8px 0 0 0; color:#059669;"><strong>Top Center:</strong> Wajah tampil utuh sempurna ✅</p>
    </div>
  </div>

</body>
</html>`,
    quiz: {
      question: "Nilai properti 'object-position' apa yang paling tepat untuk foto profil portrait agar bagian kepala/wajah di bagian atas selalu terlihat jelas?",
      options: ["object-position: bottom center;", "object-position: top center;", "object-position: 0 100%;", "object-position: right;"],
      correctIndex: 1,
      explanation: "'top center' memastikan titik potong gambar terkunci di bagian atas tengah tempat wajah biasanya berada."
    }
  },
  {
    id: 'css-masking',
    title: 'CSS Masking',
    order: 21,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-purple-700 to-indigo-800 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-purple-150 border border-white/20">CSS Masking</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Masking: Masking PNG, Gradient, & SVG</h1>
    <p class="text-purple-100 text-sm md:text-base leading-relaxed">
      Masking menggunakan gambar PNG transparan, gradien hitam-putih, atau bentuk SVG sebagai cetakan topeng untuk menentukan bagian mana dari elemen yang terlihat dan bagian mana yang tembus pandang.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <h3 class="font-bold text-purple-600 text-sm">1. Gradient Masking (Fade Out)</h3>
      <p class="text-slate-600 dark:text-slate-400">Membuat foto memudar secara halus ke arah bawah:</p>
      <div class="bg-slate-900 text-slate-100 p-2.5 rounded-lg font-mono text-[11px]">
        mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
      </div>
    </div>

    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <h3 class="font-bold text-purple-600 text-sm">2. SVG / PNG Shape Mask</h3>
      <p class="text-slate-600 dark:text-slate-400">Memotong elemen mengikuti siluet ikon logo atau bentuk kustom:</p>
      <div class="bg-slate-900 text-slate-100 p-2.5 rounded-lg font-mono text-[11px]">
        mask-image: url('star.svg'); mask-repeat: no-repeat;
      </div>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 border border-purple-200 dark:border-purple-900/40 rounded-2xl">
    <h4 class="text-purple-900 dark:text-purple-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-purple-800 dark:text-purple-400 text-xs leading-relaxed">
      Di Live Editor, amati bagaimana gambar memudar secara dramatis menggunakan <code>-webkit-mask-image: linear-gradient(...);</code>!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #0f172a; padding: 40px; color: white; }
    
    .masked-photo {
      width: 300px;
      height: 200px;
      object-fit: cover;
      border-radius: 12px;
      
      /* Efek Fade Out Halus ke Bawah */
      -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%);
      mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%);
    }
  </style>
</head>
<body>

  <h3>Gradient Fade Masking:</h3>
  <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500&q=80" class="masked-photo" alt="Gunung">
  <p style="color:#94a3b8; font-size:13px; max-width:300px;">
    Bagian bawah foto di atas memudar transparan secara mulus menyatu dengan latar belakang gelap.
  </p>

</body>
</html>`,
    quiz: {
      question: "Pada CSS Gradient Masking, area gambar yang tertutup oleh warna 'transparent' pada topeng (mask) akan menjadi...",
      options: ["Berwarna hitam pekat", "Tembus pandang (transparan/tak terlihat)", "Berwarna putih", "Memperbesar ukuran gambar"],
      correctIndex: 1,
      explanation: "Di dalam mask-image, warna hitam (pekat) membuat konten terlihat 100%, sedangkan warna transparan menyembunyikan konten di area tersebut."
    }
  },
  {
    id: 'css-buttons',
    title: 'CSS Buttons',
    order: 22,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-blue-150 border border-white/20">CSS UI Buttons</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Buttons: Desain Tombol, Efek Hover, & Button Groups</h1>
    <p class="text-blue-100 text-sm md:text-base leading-relaxed">
      Tombol adalah elemen interaksi utama (*Call to Action*). Pelajari cara mendesain tombol solid, outline, efek ripple/glow saat hover, dan kelompok tombol berdampingan (*Button Groups*).
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <h3 class="font-bold text-blue-600">1. Solid Gradient Button</h3>
      <p class="text-slate-600 dark:text-slate-400">Tombol aksi utama yang menarik perhatian dengan bayangan lembut.</p>
    </div>
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <h3 class="font-bold text-slate-800 dark:text-white">2. Outline Button</h3>
      <p class="text-slate-600 dark:text-slate-400">Tombol sekunder dengan latar transparan dan border berwarna.</p>
    </div>
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <h3 class="font-bold text-indigo-600">3. Button Group</h3>
      <p class="text-slate-600 dark:text-slate-400">Deretan tombol yang menyatu menggunakan penghapusan border-radius di tengah.</p>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-900/40 rounded-2xl">
    <h4 class="text-blue-900 dark:text-blue-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-blue-800 dark:text-blue-400 text-xs leading-relaxed">
      Di Live Editor, uji interaksi tombol solid dan button group dengan mengarahkan kursor dan mengkliknya!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #f8fafc; padding: 30px; }
    
    /* 1. Primary Glow Button */
    .btn-primary {
      background: linear-gradient(135deg, #3b82f6, #2563eb);
      color: white;
      padding: 12px 24px;
      font-size: 14px;
      font-weight: bold;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      box-shadow: 0 4px 14px rgba(37,99,235,0.3);
      transition: all 0.25s ease;
    }
    .btn-primary:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(37,99,235,0.45);
    }
    .btn-primary:active { transform: translateY(0); }

    /* 2. Button Group */
    .btn-group {
      display: inline-flex;
      border-radius: 10px;
      overflow: hidden;
      border: 1px solid #cbd5e1;
      margin-top: 20px;
    }
    .btn-group button {
      background: white;
      border: none;
      border-right: 1px solid #cbd5e1;
      padding: 10px 18px;
      font-size: 13px;
      font-weight: 600;
      color: #334155;
      cursor: pointer;
      transition: background 0.2s;
    }
    .btn-group button:last-child { border-right: none; }
    .btn-group button:hover { background: #f1f5f9; color: #2563eb; }
  </style>
</head>
<body>

  <h3>Koleksi Tombol Modern:</h3>
  <button class="btn-primary">Mulai Belajar Sekarang 🚀</button>

  <br><br>
  <div class="btn-group">
    <button>Harian</button>
    <button>Mingguan</button>
    <button>Bulanan</button>
  </div>

</body>
</html>`,
    quiz: {
      question: "Teknik apa yang digunakan untuk membuat sekumpulan tombol 'Button Group' menyatu rapi tanpa celah pemisah?",
      options: [
        "display: inline-flex; pada kontainer dan menghilangkan border-radius pada tombol anak di tengah",
        "float: center;",
        "position: sticky;",
        "margin: 50px;"
      ],
      correctIndex: 0,
      explanation: "'display: inline-flex;' menyatukan tombol-tombol berdampingan secara rapat dengan sudut luar melengkung via overflow: hidden pada pembungkusnya."
    }
  },
  {
    id: 'css-pagination',
    title: 'CSS Pagination',
    order: 23,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-indigo-700 to-violet-800 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-indigo-150 border border-white/20">CSS Navigation</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Pagination: Penomoran Halaman Responsif</h1>
    <p class="text-indigo-100 text-sm md:text-base leading-relaxed">
      Pagination membagi ribuan data artikel atau produk menjadi halaman-halaman kecil bernomor agar pengguna dapat bernavigasi dengan mudah dan cepat.
    </p>
  </div>

  <div class="p-5 bg-gradient-to-r from-indigo-50 to-violet-50 dark:from-indigo-950/20 dark:to-violet-950/20 border border-indigo-200 dark:border-indigo-900/40 rounded-2xl">
    <h4 class="text-indigo-900 dark:text-indigo-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-indigo-800 dark:text-indigo-400 text-xs leading-relaxed">
      Di Live Editor, ubah nomor halaman aktif (<code>.active</code>) dari halaman 1 menjadi halaman 2 dengan latar ungu!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #f8fafc; padding: 40px; }
    
    .pagination {
      display: inline-flex;
      gap: 6px;
      align-items: center;
    }
    .pagination a {
      color: #475569;
      padding: 8px 14px;
      text-decoration: none;
      font-size: 13px;
      font-weight: bold;
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      background: white;
      transition: all 0.2s;
    }
    .pagination a:hover {
      background-color: #ede9fe;
      color: #6366f1;
      border-color: #c4b5fd;
    }
    .pagination a.active {
      background-color: #6366f1;
      color: white;
      border-color: #6366f1;
      box-shadow: 0 4px 10px rgba(99,102,241,0.3);
    }
  </style>
</head>
<body>

  <h3>Navigasi Pagination Modern:</h3>
  <div class="pagination">
    <a href="#">&laquo; Prev</a>
    <a href="#" class="active">1</a>
    <a href="#">2</a>
    <a href="#">3</a>
    <a href="#">4</a>
    <a href="#">Next &raquo;</a>
  </div>

</body>
</html>`,
    quiz: {
      question: "Mengapa disarankan menggunakan class '.active' pada salah satu link tombol di dalam komponen Pagination?",
      options: [
        "Untuk memberi penanda visual yang jelas kepada pengguna mengenai nomor halaman yang sedang dibuka saat ini",
        "Agar link berubah menjadi input search",
        "Untuk menghapus seluruh isi database",
        "Sebagai syarat mutlak agar link dapat diklik"
      ],
      correctIndex: 0,
      explanation: "Class '.active' memberikan feedback status aktif (warna berbeda) sehingga pengguna langsung tahu posisi halaman mereka saat ini."
    }
  },
  {
    id: 'css-multiple-columns',
    title: 'CSS Multiple Columns',
    order: 24,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-amber-600 to-orange-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-amber-150 border border-white/20">CSS Multi-Column</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Multiple Columns: Tata Letak Kolom Koran</h1>
    <p class="text-amber-100 text-sm md:text-base leading-relaxed">
      Membuat teks artikel mengalir ke dalam beberapa kolom koran otomatis menggunakan <code>column-count</code>, <code>column-gap</code>, dan garis pemisah <code>column-rule</code>.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
    <div class="p-3.5 bg-white dark:bg-[#0c0e18] rounded-xl border border-slate-200 dark:border-slate-800">
      <code>column-count: 3;</code><br/><span class="text-slate-400 font-sans">Membagi teks menjadi 3 kolom.</span>
    </div>
    <div class="p-3.5 bg-white dark:bg-[#0c0e18] rounded-xl border border-slate-200 dark:border-slate-800">
      <code>column-gap: 30px;</code><br/><span class="text-slate-400 font-sans">Jarak spasi antar kolom.</span>
    </div>
    <div class="p-3.5 bg-white dark:bg-[#0c0e18] rounded-xl border border-slate-200 dark:border-slate-800">
      <code>column-rule: 1px solid #ccc;</code><br/><span class="text-slate-400 font-sans">Garis pemisah vertikal antar kolom.</span>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border border-amber-200 dark:border-amber-900/40 rounded-2xl">
    <h4 class="text-amber-900 dark:text-amber-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-amber-800 dark:text-amber-400 text-xs leading-relaxed">
      Di Live Editor, atur artikel menjadi 3 kolom dengan garis pemisah vertikal via <code>column-rule: 2px dashed #f59e0b;</code>!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; background: #f8fafc; padding: 30px; }
    
    .newspaper-article {
      background: white;
      padding: 25px;
      border-radius: 16px;
      border: 1px solid #e2e8f0;
      max-width: 600px;
      
      /* Kolom Koran */
      column-count: 2;
      column-gap: 30px;
      column-rule: 1px solid #cbd5e1;
      text-align: justify;
      font-size: 13px;
      line-height: 1.6;
      color: #334155;
    }
  </style>
</head>
<body>

  <div class="newspaper-article">
    CSS Multiple Columns memungkinkan browser membagi aliran paragraf panjang menjadi beberapa kolom vertikal persis seperti surat kabar profesional. Teks mengalir otomatis dari dasar kolom pertama langsung naik ke puncak kolom kedua tanpa perlu memotong tag HTML secara manual.
  </div>

</body>
</html>`,
    quiz: {
      question: "Properti apa yang digunakan untuk memberi garis pembatas vertikal dekoratif di antara kolom-kolom teks?",
      options: ["column-divider", "column-rule", "column-border", "column-line"],
      correctIndex: 1,
      explanation: "'column-rule' bertindak seperti border vertikal yang muncul tepat di tengah celah (gap) antar kolom."
    }
  },
  {
    id: 'css-user-interface',
    title: 'CSS User Interface',
    order: 25,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-teal-600 to-cyan-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-teal-150 border border-white/20">CSS UI Controls</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS User Interface: resize, cursor, & user-select</h1>
    <p class="text-teal-100 text-sm md:text-base leading-relaxed">
      Kendalikan interaktivitas antarmuka: kemampuan pengguna mengubah ukuran kotak (<code>resize</code>), bentuk ikon kursor mouse, dan pencegahan seleksi blok teks (<code>user-select: none</code>).
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <code class="font-bold text-teal-600">resize: both | horizontal | vertical</code>
      <p class="text-slate-600 dark:text-slate-400">Mengizinkan pengguna menarik sudut elemen untuk mengubah ukuran (wajib disertai <code>overflow: auto;</code>).</p>
    </div>
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <code class="font-bold text-teal-600">user-select: none;</code>
      <p class="text-slate-600 dark:text-slate-400">Mencegah teks terpilih/terblok saat pengguna mengklik tombol atau kartu aplikasi berkali-kali.</p>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20 border border-teal-200 dark:border-teal-900/40 rounded-2xl">
    <h4 class="text-teal-900 dark:text-teal-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-teal-800 dark:text-teal-400 text-xs leading-relaxed">
      Di Live Editor, tarik sudut kanan bawah kotak resizable untuk memperbesar dan memperkecil kotak secara bebas!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #f8fafc; padding: 30px; }
    
    .resizable-box {
      border: 2px solid #0d9488;
      padding: 18px;
      background: white;
      width: 260px;
      border-radius: 12px;
      
      /* Properti Resizable UI */
      resize: both;
      overflow: auto;
    }
    
    .unselectable-badge {
      display: inline-block;
      margin-top: 15px;
      padding: 8px 16px;
      background: #0f172a;
      color: white;
      border-radius: 50px;
      font-size: 12px;
      font-weight: bold;
      user-select: none; /* Teks tidak bisa diblok kursor */
      cursor: pointer;
    }
  </style>
</head>
<body>

  <div class="resizable-box">
    <h4 style="margin:0 0 6px 0; color:#0d9488;">Kotak Resizable</h4>
    <p style="font-size:12px; color:#64748b; margin:0;">Tarik pegangan di sudut kanan bawah kotak ini untuk mengubah ukurannya sesuka hati!</p>
  </div>

  <div class="unselectable-badge">Klik Cepat Saya (user-select: none)</div>

</body>
</html>`,
    quiz: {
      question: "Properti apa yang wajib dideklarasikan bersamaan dengan 'resize: both;' agar kotak dapat ditarik ukurannya oleh pengguna?",
      options: ["display: flex;", "overflow: auto (atau hidden / scroll);", "position: absolute;", "float: left;"],
      correctIndex: 1,
      explanation: "Fitur 'resize' memerlukan properti 'overflow' yang disetel selain 'visible' (seperti auto, hidden, atau scroll) agar dapat berfungsi."
    }
  },
  {
    id: 'css-variables',
    title: 'CSS Variables',
    order: 26,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-blue-700 to-indigo-800 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-blue-150 border border-white/20">CSS Custom Properties</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Variables: var() & Dynamic Theming</h1>
    <p class="text-blue-100 text-sm md:text-base leading-relaxed">
      CSS Custom Properties (Variabel CSS) diawali tanda strip ganda (<code>--nama-variabel</code>) dan dipanggil via fungsi <code>var(--nama-variabel)</code> untuk pengelolaan warna tema secara global.
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Deklarasi Global di :root</h2>
    <div class="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs overflow-x-auto">
      :root {<br/>
      &nbsp;&nbsp;--primary-color: #6366f1;<br/>
      &nbsp;&nbsp;--card-radius: 16px;<br/>
      }<br/>
      .btn {<br/>
      &nbsp;&nbsp;background: var(--primary-color);<br/>
      &nbsp;&nbsp;border-radius: var(--card-radius);<br/>
      }
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-900/40 rounded-2xl">
    <h4 class="text-blue-900 dark:text-blue-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-blue-800 dark:text-blue-400 text-xs leading-relaxed">
      Di Live Editor, ubah nilai <code>--theme-color: #ec4899;</code> di <code>:root</code> dan lihat bagaimana seluruh tombol dan badge otomatis berubah warna seketika!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* 1. Global Variables */
    :root {
      --brand-color: #2563eb;
      --brand-bg: #eff6ff;
      --border-radius: 12px;
    }
    
    body { font-family: Arial, sans-serif; background: #f8fafc; padding: 30px; }
    
    .card {
      background: white;
      border: 2px solid var(--brand-color);
      border-radius: var(--border-radius);
      padding: 20px;
      max-width: 320px;
    }
    .badge {
      background: var(--brand-bg);
      color: var(--brand-color);
      padding: 4px 10px;
      border-radius: 6px;
      font-size: 12px;
      font-weight: bold;
    }
    .btn {
      background: var(--brand-color);
      color: white;
      border: none;
      padding: 10px 18px;
      border-radius: var(--border-radius);
      font-weight: bold;
      margin-top: 10px;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <div class="card">
    <span class="badge">Variabel CSS</span>
    <h3 style="color:#0f172a; margin:10px 0;">Pengelolaan Tema Terpusat</h3>
    <button class="btn">Aksi Brand</button>
  </div>

</body>
</html>`,
    quiz: {
      question: "Awalan karakter apa yang wajib digunakan untuk menamai variabel CSS (Custom Property)?",
      options: ["Tanda Dolar ($nama)", "Dua Tanda Hubung (--nama)", "Tanda Pagar (#nama)", "Tanda At (@nama)"],
      correctIndex: 1,
      explanation: "Variabel CSS wajib diawali dengan dua tanda minus/hubung, seperti '--primary-color'."
    }
  },
  {
    id: 'css-property',
    title: 'CSS @property',
    order: 27,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-fuchsia-600 to-purple-800 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-fuchsia-150 border border-white/20">CSS Houdini</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS @property: Variabel Bertipe & Animasi Gradien</h1>
    <p class="text-fuchsia-100 text-sm md:text-base leading-relaxed">
      Fitur mutakhir CSS Houdini <code>@property</code> memberikan tipe data (seperti <code>&lt;color&gt;</code> atau <code>&lt;angle&gt;</code>) pada variabel CSS sehingga gradien warna dapat dianimasikan secara mulus!
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Sintaks Aturan @property</h2>
    <div class="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs overflow-x-auto">
      @property --gradient-angle {<br/>
      &nbsp;&nbsp;syntax: '&lt;angle&gt;';<br/>
      &nbsp;&nbsp;initial-value: 0deg;<br/>
      &nbsp;&nbsp;inherits: false;<br/>
      }
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-fuchsia-50 to-purple-50 dark:from-fuchsia-950/20 dark:to-purple-950/20 border border-fuchsia-200 dark:border-fuchsia-900/40 rounded-2xl">
    <h4 class="text-fuchsia-900 dark:text-fuchsia-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-fuchsia-800 dark:text-fuchsia-400 text-xs leading-relaxed">
      Di Live Editor, saksikan animasi border gradien berputar 360 derajat secara magis berkat <code>@property</code>!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Definisi Variabel Bertipe Angle */
    @property --rotate-angle {
      syntax: '<angle>';
      initial-value: 0deg;
      inherits: false;
    }

    body { font-family: Arial, sans-serif; background: #0f172a; padding: 40px; display: flex; justify-content: center; }

    @keyframes spinGrad {
      0% { --rotate-angle: 0deg; }
      100% { --rotate-angle: 360deg; }
    }

    .glowing-card {
      width: 260px;
      padding: 24px;
      background: #1e293b;
      border-radius: 16px;
      position: relative;
      color: white;
      text-align: center;
    }
    
    .glowing-card::before {
      content: "";
      position: absolute;
      inset: -3px;
      border-radius: 18px;
      background: conic-gradient(from var(--rotate-angle), #ec4899, #8b5cf6, #3b82f6, #ec4899);
      z-index: -1;
      animation: spinGrad 3s linear infinite;
    }
  </style>
</head>
<body>

  <div class="glowing-card">
    <h3 style="margin-top:0;">CSS @property</h3>
    <p style="color:#94a3b8; font-size:13px;">Border berputar 360° menggunakan animasi custom property ber-tipe &lt;angle&gt;.</p>
  </div>

</body>
</html>`,
    quiz: {
      question: "Apa keunggulan utama mendeklarasikan variabel melalui @property dibanding variabel CSS :root biasa?",
      options: [
        "Browser mengenali tipe datanya (syntax) sehingga nilainya dapat dianimasikan menggunakan @keyframes atau transisi",
        "Otomatis mematikan seluruh JavaScript",
        "Menggandakan kecepatan internet pengguna",
        "Mewajibkan penggunaan browser Safari saja"
      ],
      correctIndex: 0,
      explanation: "@property mendefinisikan tipe data sintaks resmi (seperti <color>, <angle>, <percentage>) yang memungkinkan browser menginterpolasi nilainya dalam transisi dan animasi."
    }
  },
  {
    id: 'css-box-sizing',
    title: 'CSS Box Sizing',
    order: 28,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-rose-600 to-pink-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-rose-150 border border-white/20">CSS Box Sizing</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Box Sizing: content-box vs border-box</h1>
    <p class="text-rose-100 text-sm md:text-base leading-relaxed">
      <code>box-sizing: border-box</code> adalah penyelamat seluruh developer dunia untuk memastikan penambahan <strong>padding dan border tidak membuat ukuran total kotak melebar</strong> keluar batas.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <code class="font-bold text-rose-600 text-sm">content-box (Default Lama)</code>
      <p class="text-slate-600 dark:text-slate-400">Total Lebar = width + padding-left/right + border-left/right. Kotak akan membesar meluber.</p>
    </div>

    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <code class="font-bold text-emerald-600 text-sm">border-box (Standar Industri ⭐)</code>
      <p class="text-slate-600 dark:text-slate-400">Total Lebar = Persis sama dengan nilai width yang Anda tentukan (padding menyerap ke dalam).</p>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20 border border-rose-200 dark:border-rose-900/40 rounded-2xl">
    <h4 class="text-rose-900 dark:text-rose-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-rose-800 dark:text-rose-400 text-xs leading-relaxed">
      Di Live Editor, perhatikan perbedaan ukuran fisik kedua kotak yang sama-sama memiliki <code>width: 200px;</code> namun berbeda <code>box-sizing</code>!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #f8fafc; padding: 30px; }
    
    .box-content {
      box-sizing: content-box;
      width: 200px;
      padding: 25px;
      border: 10px solid #ef4444;
      background: #fee2e2;
      margin-bottom: 20px;
    }
    
    .box-border {
      box-sizing: border-box;
      width: 200px;
      padding: 25px;
      border: 10px solid #10b981;
      background: #d1fae5;
    }
  </style>
</head>
<body>

  <div class="box-content">
    <strong>content-box:</strong><br>
    Lebar total = 200 + 50 + 20 = <strong>270px</strong> (Melebar!)
  </div>

  <div class="box-border">
    <strong>border-box:</strong><br>
    Lebar total tetap pas = <strong>200px</strong> ✅
  </div>

</body>
</html>`,
    quiz: {
      question: "Aturan universal CSS reset apa yang selalu disematkan di baris teratas stylesheet proyek profesional?",
      options: [
        "* { box-sizing: border-box; }",
        "* { display: none; }",
        "* { width: 100%; }",
        "* { margin: auto; }"
      ],
      correctIndex: 0,
      explanation: "'* { box-sizing: border-box; }' memastikan seluruh elemen di aplikasi web menghitung dimensi lebar dan tinggi secara proporsional dan mudah diprediksi."
    }
  },
  {
    id: 'css-media-queries',
    title: 'CSS Media Queries',
    order: 29,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-blue-600 to-indigo-800 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-blue-150 border border-white/20">CSS Responsive</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Media Queries: Desain Web Responsif Multi-Device</h1>
    <p class="text-blue-100 text-sm md:text-base leading-relaxed">
      Media Queries (<code>@media</code>) memungkinkan stylesheet mendeteksi ukuran layar (viewport), orientasi HP (portrait/landscape), hingga preferensi tema gelap (Dark Mode) pengguna.
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Breakpoint Standar Responsif</h2>
    <div class="space-y-2 text-xs font-mono">
      <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl"><code>@media (max-width: 640px) { ... }</code> (Layar Ponsel Smartphone)</div>
      <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl"><code>@media (min-width: 768px) { ... }</code> (Layar Tablet)</div>
      <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl"><code>@media (min-width: 1024px) { ... }</code> (Layar Desktop / Laptop)</div>
      <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl"><code>@media (prefers-color-scheme: dark) { ... }</code> (Deteksi Otomatis Dark Mode)</div>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-900/40 rounded-2xl">
    <h4 class="text-blue-900 dark:text-blue-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-blue-800 dark:text-blue-400 text-xs leading-relaxed">
      Di Live Editor, ubah lebar layar pratinjau untuk melihat kartu berubah warna dari biru (desktop) menjadi hijau (layar HP)!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 25px; }
    
    /* Default Style: Desktop */
    .responsive-card {
      background-color: #3b82f6;
      color: white;
      padding: 30px;
      border-radius: 16px;
      text-align: center;
    }
    .device-text::after {
      content: "🖥️ Layar Desktop Lebar";
    }

    /* Media Query Khusus Layar HP (< 600px) */
    @media (max-width: 600px) {
      .responsive-card {
        background-color: #10b981;
      }
      .device-text::after {
        content: "📱 Layar Ponsel Mobile (< 600px)";
      }
    }
  </style>
</head>
<body>

  <div class="responsive-card">
    <h2 class="device-text" style="margin:0;"></h2>
    <p style="margin:8px 0 0 0; font-size:13px; opacity:0.9;">Kecilkan lebar jendela browser Anda untuk melihat perubahan warna dan teks secara responsif!</p>
  </div>

</body>
</html>`,
    quiz: {
      question: "Sintaks Media Query apa yang digunakan untuk menerapkan aturan CSS HANYA ketika lebar layar perangkat kurang dari atau sama dengan 768px?",
      options: ["@media (max-width: 768px)", "@media (min-width: 768px)", "@media screen-size(768px)", "@media device == mobile"],
      correctIndex: 0,
      explanation: "'@media (max-width: 768px)' menargetkan layar dari lebar 0px hingga maksimum batas 768px (layar tablet dan mobile)."
    }
  }
];

async function run() {
  const modId = 'ba1383a2-219d-44ab-bf63-804d5a0f0902';
  const chapTitle = 'CSS Advanced';

  for (const dbUrl of dbs) {
    const dbName = dbUrl.split('/').pop();
    console.log(`\n🚀 [${dbName}] Seeding Chapter "${chapTitle}" Batch 2 (Lessons 20-29)...`);
    const pool = new Pool({ connectionString: dbUrl });

    try {
      // 1. Check or Create Chapter "CSS Advanced"
      let chRes = await pool.query(`SELECT id FROM "Chapter" WHERE "moduleId" = $1 AND title = $2`, [modId, chapTitle]);
      let chapterId;
      if (chRes.rowCount === 0) {
        const insertChap = await pool.query(`
          INSERT INTO "Chapter" (id, title, "moduleId", "order", "createdAt", "updatedAt")
          VALUES (gen_random_uuid(), $1, $2, 2, NOW(), NOW())
          RETURNING id
        `, [chapTitle, modId]);
        chapterId = insertChap.rows[0].id;
        console.log(`  ➕ Created Chapter: ${chapTitle} (${chapterId})`);
      } else {
        chapterId = chRes.rows[0].id;
        console.log(`  📌 Existing Chapter: ${chapTitle} (${chapterId})`);
      }

      // 2. Insert or update each of the 10 lessons
      for (const l of advancedBatch2Lessons) {
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

  console.log('\n✨ ALL 10 CSS ADVANCED BATCH 2 LESSONS (20-29) POPULATED ACROSS BOTH DATABASES!');
}

run().catch(console.error);
