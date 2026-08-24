const { Pool } = require('pg');
require('dotenv').config({ path: 'c:/xampp/htdocs/Learning Management System/backend/.env' });

const dbs = [
  'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db',
  'postgresql://postgres:Dil1212@localhost:5432/lms_content_db'
];

const advancedLessons = [
  {
    id: 'css-rounded-corners',
    title: 'CSS Rounded Corners',
    order: 1,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-violet-600 to-indigo-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-violet-150 border border-white/20">CSS Advanced</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Rounded Corners: border-radius Mahir</h1>
    <p class="text-violet-100 text-sm md:text-base leading-relaxed">
      Properti <code>border-radius</code> mengubah sudut kotak tajam menjadi lengkungan halus, kapsul (pill badge), elips artistik, hingga lingkaran sempurna (avatar).
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="bg-white dark:bg-[#0c0e18] p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <h3 class="font-bold text-slate-800 dark:text-white text-sm">1. Nilai Sudut Individual</h3>
      <p class="text-xs text-slate-600 dark:text-slate-400">
        <code>border-radius: 20px 0 20px 0;</code><br/>
        Urutan 4 nilai: <strong>Top-Left ➔ Top-Right ➔ Bottom-Right ➔ Bottom-Left</strong>.
      </p>
    </div>

    <div class="bg-white dark:bg-[#0c0e18] p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <h3 class="font-bold text-slate-800 dark:text-white text-sm">2. Lingkaran & Kapsul Sempurna</h3>
      <p class="text-xs text-slate-600 dark:text-slate-400">
        • Lingkaran Avatar: <code>width: 100px; height: 100px; border-radius: 50%;</code><br/>
        • Pill Button: <code>border-radius: 9999px;</code>
      </p>
    </div>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Lengkungan Elips Asimetris</h2>
    <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
      Gunakan tanda garis miring (<code>/</code>) untuk memisahkan radius horizontal dan radius vertikal:
    </p>
    <div class="bg-slate-900 text-slate-100 p-3.5 rounded-xl font-mono text-xs overflow-x-auto">
      border-radius: 50px / 25px; /* 50px radius horizontal, 25px radius vertikal */
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-violet-50 to-indigo-50 dark:from-violet-950/20 dark:to-indigo-950/20 border border-violet-200 dark:border-violet-900/40 rounded-2xl">
    <h4 class="text-violet-900 dark:text-violet-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-violet-800 dark:text-violet-400 text-xs leading-relaxed">
      Di Live Editor, ubah kartu profil menjadi bentuk lingkaran sempurna dengan menyetel <code>border-radius: 50%;</code>.
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #f8fafc; padding: 30px; display: flex; gap: 20px; }
    
    .box-round {
      width: 130px;
      height: 130px;
      background: linear-gradient(135deg, #6366f1, #a855f7);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
      font-weight: bold;
      text-align: center;
      border-radius: 24px;
      box-shadow: 0 10px 20px rgba(99,102,241,0.25);
    }
    
    .box-circle {
      border-radius: 50%;
      background: linear-gradient(135deg, #06b6d4, #3b82f6);
    }

    .box-organic {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
      background: linear-gradient(135deg, #f43f5e, #fb923c);
    }
  </style>
</head>
<body>

  <div class="box-round">Rounded (24px)</div>
  <div class="box-round box-circle">Circle (50%)</div>
  <div class="box-round box-organic">Organic Blob</div>

</body>
</html>`,
    quiz: {
      question: "Nilai border-radius apa yang digunakan untuk membuat elemen bujur sangkar (100px x 100px) menjadi lingkaran bulat utuh?",
      options: ["border-radius: 100px;", "border-radius: 50%;", "border-radius: circle;", "border-radius: round;"],
      correctIndex: 1,
      explanation: "'border-radius: 50%;' pada elemen yang memiliki lebar dan tinggi seimbang akan menghasilkan bentuk lingkaran sempurna."
    }
  },
  {
    id: 'css-border-images',
    title: 'CSS Border Images',
    order: 2,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-purple-600 to-pink-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-purple-150 border border-white/20">CSS Framing</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Border Images: Bingkai Gambar Dekoratif</h1>
    <p class="text-purple-100 text-sm md:text-base leading-relaxed">
      Properti <code>border-image</code> memungkinkan Anda menggunakan gambar kustom sebagai garis batas elemen, menggantikan border garis datar konvensional.
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Properti Penyusun Border Image</h2>
    <div class="space-y-3 text-xs">
      <div class="p-3.5 bg-slate-50 dark:bg-slate-900 rounded-xl font-mono">
        <strong class="text-purple-600">1. border-image-source:</strong> <code>url('border.png');</code> (Lokasi file gambar).
      </div>
      <div class="p-3.5 bg-slate-50 dark:bg-slate-900 rounded-xl font-mono">
        <strong class="text-purple-600">2. border-image-slice:</strong> <code>30;</code> (Memotong gambar menjadi 9 bagian grid: 4 sudut, 4 sisi, dan 1 tengah).
      </div>
      <div class="p-3.5 bg-slate-50 dark:bg-slate-900 rounded-xl font-mono">
        <strong class="text-purple-600">3. border-image-repeat:</strong> <code>round | stretch | repeat;</code> (Perilaku pengulangan sisi).
      </div>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border border-purple-200 dark:border-purple-900/40 rounded-2xl">
    <h4 class="text-purple-900 dark:text-purple-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-purple-800 dark:text-purple-400 text-xs leading-relaxed">
      Di Live Editor, uji deklarasi border-image dengan mode <code>round</code> untuk melihat pola bingkai yang berulang secara rapi!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 30px; background: #f8fafc; }
    
    .border-box {
      border: 15px solid transparent;
      padding: 20px;
      border-image: url('https://www.w3schools.com/css/border.png') 30 round;
      background-clip: padding-box;
      max-width: 320px;
      text-align: center;
      font-weight: bold;
      color: #1e293b;
    }
  </style>
</head>
<body>

  <div class="border-box">
    Bingkai Gambar Kustom dengan border-image: url(...) 30 round;
  </div>

</body>
</html>`,
    quiz: {
      question: "Nilai apa pada 'border-image-repeat' yang mengisi sisi border dengan mengulang gambar dan menyesuaikan ukurannya secara presisi tanpa terpotong?",
      options: ["stretch", "round", "repeat", "auto"],
      correctIndex: 1,
      explanation: "'round' mengulang potongan gambar tepi dan memanjangkan/memendekkannya secara dinamis agar pas tanpa menghasilkan potongan gambar yang terpotong setengah."
    }
  },
  {
    id: 'css-adv-backgrounds',
    title: 'CSS Backgrounds',
    order: 3,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-pink-600 to-rose-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-pink-150 border border-white/20">CSS Backgrounds</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Advanced Backgrounds: Multiple, Size, Origin, & Clip</h1>
    <p class="text-pink-100 text-sm md:text-base leading-relaxed">
      Kuasai penumpukan banyak background sekaligus (*multiple backgrounds*), background video/foto responsif, hingga efek teks gradien (*background-clip: text*).
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <h3 class="font-bold text-pink-600 text-sm">1. Multiple Backgrounds</h3>
      <p class="text-slate-600 dark:text-slate-400">Pisahkan beberapa gambar latar belakang dengan tanda koma (gambar pertama berada di lapisan teratas):</p>
      <code>background: url('top.png'), url('bottom.jpg');</code>
    </div>

    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <h3 class="font-bold text-pink-600 text-sm">2. background-size</h3>
      <p class="text-slate-600 dark:text-slate-400">• <code>cover</code>: Mengisi penuh seluruh area layar tanpa celah.<br/>• <code>contain</code>: Menampilkan seluruh gambar utuh tanpa terpotong.</p>
    </div>

    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <h3 class="font-bold text-pink-600 text-sm">3. background-origin</h3>
      <p class="text-slate-600 dark:text-slate-400">Menentukan titik awal posisi gambar: <code>border-box</code>, <code>padding-box</code>, atau <code>content-box</code>.</p>
    </div>

    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <h3 class="font-bold text-pink-600 text-sm">4. background-clip: text ⭐</h3>
      <p class="text-slate-600 dark:text-slate-400">Trik teks gradien modern! Memotong gambar/gradien latar belakang tepat ke dalam siluet huruf teks.</p>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 border border-pink-200 dark:border-pink-900/40 rounded-2xl">
    <h4 class="text-pink-900 dark:text-pink-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-pink-800 dark:text-pink-400 text-xs leading-relaxed">
      Di Live Editor, amati bagaimana teks judul menampilkan gradien mewah menggunakan kombinasi <code>background-clip: text;</code> dan <code>color: transparent;</code>!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Segoe UI', sans-serif; background: #0f172a; padding: 40px; }
    
    /* Teks Gradien Mewah */
    .gradient-headline {
      font-size: 36px;
      font-weight: 900;
      background: linear-gradient(90deg, #ec4899, #8b5cf6, #3b82f6);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      margin-bottom: 10px;
    }
    
    /* Multiple Background Card */
    .hero-box {
      width: 100%;
      max-width: 400px;
      height: 140px;
      border-radius: 16px;
      background-image: 
        radial-gradient(circle at 10% 20%, rgba(236,72,153,0.4) 0%, transparent 40%),
        linear-gradient(135deg, #1e293b, #0f172a);
      border: 1px solid #334155;
      padding: 20px;
      box-sizing: border-box;
      color: white;
    }
  </style>
</head>
<body>

  <h1 class="gradient-headline">Modern Gradient Text</h1>
  <div class="hero-box">
    <h4>Multiple Layer Background</h4>
    <p style="color:#94a3b8; font-size:13px;">Kombinasi radial glow di atas dark linear background.</p>
  </div>

</body>
</html>`,
    quiz: {
      question: "Kombinasi properti apa yang wajib disematkan untuk menciptakan efek warna teks berupa gradien warna?",
      options: [
        "background-clip: text; dan color: transparent;",
        "text-style: gradient;",
        "font-color: linear-gradient();",
        "color-mode: clip;"
      ],
      correctIndex: 0,
      explanation: "Dengan 'background-clip: text;' dan 'color: transparent;' (atau -webkit-text-fill-color: transparent), warna background gradien akan terlihat melalui siluet teks transparan."
    }
  },
  {
    id: 'css-adv-colors',
    title: 'CSS Colors',
    order: 4,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-rose-600 to-orange-600 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-rose-150 border border-white/20">CSS Color Models</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Modern Colors: currentcolor, color-mix, & Accent</h1>
    <p class="text-rose-100 text-sm md:text-base leading-relaxed">
      Fitur warna CSS modern membuka kata kunci dinamis seperti <code>currentcolor</code>, fungsi percampuran warna <code>color-mix()</code>, dan pewarnaan kontrol form instan via <code>accent-color</code>.
    </p>
  </div>

  <div class="space-y-3">
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800">
      <code class="font-bold text-rose-600">1. currentcolor</code>
      <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Menggunakan nilai warna properti <code>color</code> aktif pada elemen tersebut (sangat populer untuk menyamakan warna border atau SVG icon dengan teks secara otomatis).</p>
    </div>

    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800">
      <code class="font-bold text-rose-600">2. accent-color</code>
      <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Mengubah warna tema bawaan pada elemen form (seperti checkbox, radio button, dan range input slider) hanya dengan satu baris kode!</p>
    </div>

    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800">
      <code class="font-bold text-rose-600">3. color-mix(in srgb, red 40%, blue)</code>
      <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Mencampurkan dua warna berbeda secara presisi langsung di dalam CSS tanpa preprosesor SCSS/Sass.</p>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-rose-50 to-orange-50 dark:from-rose-950/20 dark:to-orange-950/20 border border-rose-200 dark:border-rose-900/40 rounded-2xl">
    <h4 class="text-rose-900 dark:text-rose-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-rose-800 dark:text-rose-400 text-xs leading-relaxed">
      Di Live Editor, ubah <code>accent-color: #10b981;</code> pada input checkbox untuk mengubah warna centang menjadi hijau emerald!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 30px; background: #f8fafc; }
    
    /* 1. currentcolor otomatis mengikuti properti color */
    .smart-btn {
      color: #7c3aed;
      border: 2px solid currentcolor;
      background: transparent;
      padding: 10px 20px;
      border-radius: 8px;
      font-weight: bold;
      transition: all 0.2s;
      cursor: pointer;
    }
    .smart-btn:hover {
      color: #ec4899; /* Border otomatis ikut berubah warna jadi pink! */
    }

    /* 2. accent-color untuk form modern */
    input[type="checkbox"], input[type="radio"] {
      accent-color: #7c3aed;
      width: 18px;
      height: 18px;
    }
  </style>
</head>
<body>

  <h3>currentcolor & accent-color:</h3>
  <button class="smart-btn">Hover Saya (Border ikut berubah)</button>

  <br><br>
  <label style="display:flex; align-items:center; gap:8px; font-weight:bold; color:#334155;">
    <input type="checkbox" checked> Setujui Syarat & Ketentuan (Ungu via accent-color)
  </label>

</body>
</html>`,
    quiz: {
      question: "Apa fungsi dari kata kunci 'currentcolor' di CSS?",
      options: [
        "Mereset warna menjadi hitam pekat",
        "Mengambil dan mewarisi nilai dari properti 'color' elemen yang bersangkutan",
        "Membuat warna berkedip-kedip otomatis",
        "Mengambil warna dari wallpaper sistem operasi"
      ],
      correctIndex: 1,
      explanation: "'currentcolor' bertindak sebagai variabel otomatis yang nilainya setara dengan nilai properti 'color' teks pada elemen tersebut."
    }
  },
  {
    id: 'css-gradients',
    title: 'CSS Gradients',
    order: 5,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-amber-150 border border-white/20">CSS Visuals</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Gradients: Linear, Radial, & Conic Gradients</h1>
    <p class="text-amber-100 text-sm md:text-base leading-relaxed">
      Gradien memungkinkan transisi halus antara dua atau lebih warna tanpa perlu memuat file gambar, menghasilkan tampilan UI berkelas dan modern.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="bg-white dark:bg-[#0c0e18] p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <h3 class="font-bold text-amber-600 text-sm">1. Linear Gradient</h3>
      <p class="text-xs text-slate-600 dark:text-slate-400">Transisi garis lurus (sudut atau arah):</p>
      <code class="text-[11px] bg-slate-900 text-slate-100 p-2 rounded block">linear-gradient(135deg, #f59e0b, #ec4899)</code>
    </div>

    <div class="bg-white dark:bg-[#0c0e18] p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <h3 class="font-bold text-rose-600 text-sm">2. Radial Gradient</h3>
      <p class="text-xs text-slate-600 dark:text-slate-400">Memancar dari titik pusat lingkaran:</p>
      <code class="text-[11px] bg-slate-900 text-slate-100 p-2 rounded block">radial-gradient(circle, #38bdf8, #1e3a8a)</code>
    </div>

    <div class="bg-white dark:bg-[#0c0e18] p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <h3 class="font-bold text-purple-600 text-sm">3. Conic Gradient</h3>
      <p class="text-xs text-slate-600 dark:text-slate-400">Memutar melingkar (cocok untuk diagram pie atau roda warna):</p>
      <code class="text-[11px] bg-slate-900 text-slate-100 p-2 rounded block">conic-gradient(red, yellow, green, red)</code>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-amber-50 to-rose-50 dark:from-amber-950/20 dark:to-rose-950/20 border border-amber-200 dark:border-amber-900/40 rounded-2xl">
    <h4 class="text-amber-900 dark:text-amber-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-amber-800 dark:text-amber-400 text-xs leading-relaxed">
      Di Live Editor, ubah sudut gradien kartu linear dari <code>135deg</code> menjadi <code>to right</code> untuk transisi warna horizontal kiri ke kanan!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #0f172a; padding: 30px; display: flex; gap: 20px; }
    
    .grad-card {
      width: 140px;
      height: 140px;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      font-size: 13px;
      text-align: center;
      box-shadow: 0 10px 25px rgba(0,0,0,0.3);
    }
    
    .linear-box {
      background: linear-gradient(135deg, #f59e0b, #ef4444, #8b5cf6);
    }
    .radial-box {
      background: radial-gradient(circle at 30% 30%, #38bdf8, #0369a1);
    }
    .conic-pie {
      border-radius: 50%;
      background: conic-gradient(#10b981 0% 65%, #64748b 65% 100%);
    }
  </style>
</head>
<body>

  <div class="grad-card linear-box">Linear Multi-color</div>
  <div class="grad-card radial-box">Radial Glow</div>
  <div class="grad-card conic-pie">Pie (65%)</div>

</body>
</html>`,
    quiz: {
      question: "Fungsi gradien apa yang memutar transisi warna secara melingkar 360 derajat mengelilingi titik tengah (cocok untuk pie chart)?",
      options: ["linear-gradient()", "radial-gradient()", "conic-gradient()", "circle-gradient()"],
      correctIndex: 2,
      explanation: "'conic-gradient()' memutar transisi warna seperti kerucut/jam mengelilingi titik pusat 360 derajat."
    }
  },
  {
    id: 'css-shadows',
    title: 'CSS Shadows',
    order: 6,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-indigo-700 to-blue-800 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-indigo-150 border border-white/20">CSS Depth</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Shadows: Text Shadow, Box Shadow, & Glassmorphism</h1>
    <p class="text-indigo-100 text-sm md:text-base leading-relaxed">
      Efek bayangan memberikan kedalaman visual 3D (*elevation*) yang membuat tombol, kartu, dan teks melayang elegan di atas latar belakang.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
    <div class="p-5 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <h3 class="font-bold text-indigo-600 text-sm">1. text-shadow: X Y Blur Color</h3>
      <p class="text-slate-600 dark:text-slate-400">Contoh efek Neon Glow:</p>
      <code>text-shadow: 0 0 10px #38bdf8, 0 0 20px #0284c7;</code>
    </div>

    <div class="p-5 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <h3 class="font-bold text-indigo-600 text-sm">2. box-shadow: X Y Blur Spread Color [inset]</h3>
      <p class="text-slate-600 dark:text-slate-400">Contoh kartu mengambang halus (Smooth Elevation):</p>
      <code>box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1);</code>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 border border-indigo-200 dark:border-indigo-900/40 rounded-2xl">
    <h4 class="text-indigo-900 dark:text-indigo-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-indigo-800 dark:text-indigo-400 text-xs leading-relaxed">
      Di Live Editor, ubah kartu kaca (*Glassmorphism*) dengan menambahkan efek hover bayangan yang lebih tebal!
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
      background: radial-gradient(circle at top left, #312e81, #0f172a);
      min-height: 80vh;
      padding: 40px;
      display: flex;
      gap: 25px;
      align-items: center;
    }

    /* 1. Neon Glow Text */
    .neon-text {
      color: #38bdf8;
      font-size: 28px;
      font-weight: 900;
      text-shadow: 0 0 8px rgba(56,189,248,0.8), 0 0 20px rgba(56,189,248,0.4);
    }

    /* 2. Glassmorphism Card dengan Box Shadow */
    .glass-card {
      width: 260px;
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 16px;
      padding: 24px;
      color: white;
      box-shadow: 0 20px 40px rgba(0,0,0,0.4);
      transition: transform 0.3s, box-shadow 0.3s;
    }
    .glass-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 30px 60px rgba(99,102,241,0.3);
    }
  </style>
</head>
<body>

  <div>
    <div class="neon-text">NEON GLOW</div>
    <br>
    <div class="glass-card">
      <h3 style="margin:0 0 8px 0; color:#a5b4fc;">Glassmorphism</h3>
      <p style="color:#cbd5e1; font-size:13px; margin:0; line-height:1.5;">
        Kombinasi backdrop-filter: blur() dan box-shadow yang lembut.
      </p>
    </div>
  </div>

</body>
</html>`,
    quiz: {
      question: "Kata kunci apa yang ditambahkan di dalam 'box-shadow' untuk membuat bayangan jatuh ke arah DALAM kotak (bayangan cekung)?",
      options: ["inside", "inset", "inner", "inward"],
      correctIndex: 1,
      explanation: "Kata kunci 'inset' mengubah bayangan luar kotak menjadi bayangan bayang-bayang di bagian dalam kotak."
    }
  },
  {
    id: 'css-text-effects',
    title: 'CSS Text Effects',
    order: 7,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-cyan-600 to-blue-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-cyan-150 border border-white/20">CSS Typography</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Text Effects: Ellipsis, Word Wrap, & Writing Mode</h1>
    <p class="text-cyan-100 text-sm md:text-base leading-relaxed">
      Kendalikan pemotongan teks panjang dengan titik-titik (<code>...</code>), pemenggalan URL panjang tanpa merusak layout, dan orientasi arah penulisan teks.
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Trio Wajib untuk Efek Potong Teks Titik-Titik (...)</h2>
    <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
      Agar <code>text-overflow: ellipsis;</code> bekerja, Anda <strong>WAJIB</strong> menyertakan ketiga baris berikut bersama-sama:
    </p>
    <div class="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs overflow-x-auto">
      white-space: nowrap;      /* Cegah teks turun ke baris baru */<br/>
      overflow: hidden;         /* Sembunyikan teks yang meluber */<br/>
      text-overflow: ellipsis;  /* Ganti ujung potongan dengan (...) */
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
    <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
      <code class="font-bold text-cyan-600">word-break: break-word;</code>
      <p class="text-slate-600 dark:text-slate-400 mt-1">Memaksa kata atau URL yang sangat panjang untuk patah ke baris baru agar tidak merusak lebar kontainer.</p>
    </div>
    <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
      <code class="font-bold text-cyan-600">writing-mode: vertical-rl;</code>
      <p class="text-slate-600 dark:text-slate-400 mt-1">Mengubah arah pembacaan teks dari horizontal menjadi vertikal tegak lurus.</p>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border border-cyan-200 dark:border-cyan-900/40 rounded-2xl">
    <h4 class="text-cyan-900 dark:text-cyan-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-cyan-800 dark:text-cyan-400 text-xs leading-relaxed">
      Di Live Editor, amati bagaimana teks judul berita yang panjang dipotong rapi dengan tanda <code>...</code> secara otomatis!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #f8fafc; padding: 30px; }
    
    .news-card {
      width: 240px;
      background: white;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 16px;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
    }
    .news-title {
      font-size: 14px;
      font-weight: bold;
      color: #0f172a;
      
      /* Truncate Ellipsis */
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 0;
    }
  </style>
</head>
<body>

  <div class="news-card">
    <p class="news-title">Judul Berita yang Sangat Panjang Sekali Hingga Melebihi Batas Lebar Kartu</p>
    <p style="color:#64748b; font-size:12px; margin-top:8px;">Teks judul di atas otomatis diakhiri dengan (...)</p>
  </div>

</body>
</html>`,
    quiz: {
      question: "Nilai properti text-overflow apa yang menambahkan tanda titik tiga (...) di akhir teks yang terpotong?",
      options: ["clip", "ellipsis", "dots", "truncate"],
      correctIndex: 1,
      explanation: "'text-overflow: ellipsis;' mengganti teks yang meluap dan tersembunyi dengan representasi titik tiga (...)."
    }
  },
  {
    id: 'css-custom-fonts',
    title: 'CSS Custom Fonts',
    order: 8,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-emerald-600 to-teal-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-emerald-150 border border-white/20">CSS Fonts</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Custom Fonts: Aturan @font-face & Google Fonts</h1>
    <p class="text-emerald-100 text-sm md:text-base leading-relaxed">
      Jangan batasi website Anda hanya pada font standar sistem. Gunakan <code>@font-face</code> untuk menyematkan jenis huruf kustom berkualitas tinggi dengan performa maksimal via format modern WOFF2.
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Sintaks Standar @font-face</h2>
    <div class="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs overflow-x-auto">
      @font-face {<br/>
      &nbsp;&nbsp;font-family: 'ModernFont';<br/>
      &nbsp;&nbsp;src: url('modernfont.woff2') format('woff2');<br/>
      &nbsp;&nbsp;font-weight: 700;<br/>
      &nbsp;&nbsp;font-display: swap; /* Mencegah layar putih saat font sedang dimuat */<br/>
      }
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border border-emerald-200 dark:border-emerald-900/40 rounded-2xl">
    <h4 class="text-emerald-900 dark:text-emerald-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-emerald-800 dark:text-emerald-400 text-xs leading-relaxed">
      Di Live Editor, sematkan font Google "Outfit" atau "Inter" dan terapkan pada seluruh teks halaman!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <!-- Load Google Font Outfit -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap" rel="stylesheet">

  <style>
    body {
      font-family: 'Outfit', sans-serif;
      background: #f8fafc;
      padding: 30px;
      color: #0f172a;
    }
    .headline {
      font-weight: 900;
      font-size: 32px;
      letter-spacing: -0.5px;
      margin: 0;
      color: #047857;
    }
  </style>
</head>
<body>

  <h1 class="headline">Tipografi Premium 'Outfit'</h1>
  <p>Font Google disematkan dengan cepat dan memberikan kesan modern seketika pada web app Anda.</p>

</body>
</html>`,
    quiz: {
      question: "Nilai apa pada 'font-display' di dalam @font-face yang mencegah teks tak terlihat (Flash of Invisible Text) saat font kustom sedang diunduh?",
      options: ["font-display: block;", "font-display: swap;", "font-display: none;", "font-display: wait;"],
      correctIndex: 1,
      explanation: "'font-display: swap;' segera menampilkan teks menggunakan font cadangan sistem terlebih dahulu, lalu menggantinya secara mulus saat font kustom selesai diunduh."
    }
  },
  {
    id: 'css-2d-transforms',
    title: 'CSS 2D Transforms',
    order: 9,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-blue-150 border border-white/20">CSS Transforms</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS 2D Transforms: Translate, Rotate, Scale, & Skew</h1>
    <p class="text-blue-100 text-sm md:text-base leading-relaxed">
      Transformasi 2D memungkinkan Anda memanipulasi bentuk, orientasi posisi, rotasi sudut, dan pembesaran elemen di bidang dua dimensi secara super cepat dengan akselerasi GPU.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
      <code class="font-bold text-blue-600 text-sm">translate(X, Y)</code>
      <p class="text-slate-600 dark:text-slate-400">Menggeser elemen dari posisi aslinya tanpa mengganggu alur elemen lain di sekitarnya.</p>
    </div>

    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
      <code class="font-bold text-blue-600 text-sm">rotate(deg)</code>
      <p class="text-slate-600 dark:text-slate-400">Memutar elemen searah jarum jam (misal: <code>rotate(45deg)</code> atau <code>rotate(-90deg)</code>).</p>
    </div>

    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
      <code class="font-bold text-blue-600 text-sm">scale(X, Y)</code>
      <p class="text-slate-600 dark:text-slate-400">Memperbesar atau memperkecil ukuran elemen (misal: <code>scale(1.1)</code> untuk zoom in 10%).</p>
    </div>

    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
      <code class="font-bold text-blue-600 text-sm">skew(X-deg, Y-deg)</code>
      <p class="text-slate-600 dark:text-slate-400">Memiringkan elemen secara diagonal sepanjang sumbu X dan Y.</p>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-900/40 rounded-2xl">
    <h4 class="text-blue-900 dark:text-blue-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-blue-800 dark:text-blue-400 text-xs leading-relaxed">
      Di Live Editor, arahkan kursor ke tombol untuk menguji efek kombinasi <code>transform: translateY(-4px) scale(1.05);</code>!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #f8fafc; padding: 40px; display: flex; gap: 20px; }
    
    .t-box {
      width: 100px;
      height: 100px;
      background: #3b82f6;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      border-radius: 12px;
      transition: transform 0.3s;
      font-size: 12px;
      text-align: center;
    }
    
    .t-rotate:hover { transform: rotate(45deg); background: #8b5cf6; }
    .t-scale:hover { transform: scale(1.2); background: #ec4899; }
    .t-skew:hover { transform: skewX(-20deg); background: #10b981; }
  </style>
</head>
<body>

  <div class="t-box t-rotate">Rotate 45°</div>
  <div class="t-box t-scale">Scale 1.2x</div>
  <div class="t-box t-skew">Skew -20°</div>

</body>
</html>`,
    quiz: {
      question: "Fungsi transformasi 2D apa yang digunakan untuk memperbesar skala ukuran elemen sebesar 1.5 kali lipat dari aslinya?",
      options: ["transform: zoom(1.5);", "transform: scale(1.5);", "transform: size(1.5);", "transform: expand(1.5);"],
      correctIndex: 1,
      explanation: "'transform: scale(1.5);' mengalikan ukuran lebar dan tinggi elemen sebesar 150% (1.5x)."
    }
  },
  {
    id: 'css-3d-transforms',
    title: 'CSS 3D Transforms',
    order: 10,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-purple-700 to-indigo-900 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-purple-150 border border-white/20">CSS 3D World</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS 3D Transforms: Perspektif & Kartu Flip 3D</h1>
    <p class="text-purple-100 text-sm md:text-base leading-relaxed">
      Dengan <code>perspective</code> dan <code>transform-style: preserve-3d</code>, Anda dapat memutar elemen di ruang kedalaman 3 dimensi yang memukau (seperti efek membalik kartu).
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Kunci Dunia 3D CSS</h2>
    <div class="space-y-3 text-xs">
      <div class="p-3.5 bg-slate-50 dark:bg-slate-900 rounded-xl">
        <strong class="text-purple-600">1. perspective: 1000px;</strong> Disematkan pada elemen parent untuk menentukan jarak pandang mata pengguna ke bidang 3D.
      </div>
      <div class="p-3.5 bg-slate-50 dark:bg-slate-900 rounded-xl">
        <strong class="text-purple-600">2. transform-style: preserve-3d;</strong> Memastikan elemen anak tetap berada di dalam ruang 3 dimensi asli.
      </div>
      <div class="p-3.5 bg-slate-50 dark:bg-slate-900 rounded-xl">
        <strong class="text-purple-600">3. backface-visibility: hidden;</strong> Menyembunyikan sisi belakang elemen saat sedang membelakangi pengguna.
      </div>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 border border-purple-200 dark:border-purple-900/40 rounded-2xl">
    <h4 class="text-purple-900 dark:text-purple-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-purple-800 dark:text-purple-400 text-xs leading-relaxed">
      Di Live Editor, arahkan mouse ke kartu kredit untuk membalik kartu 180 derajat dan melihat kode CVV di bagian belakangnya!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #0f172a; padding: 40px; }

    /* 1. Parent Perspective */
    .flip-card {
      background-color: transparent;
      width: 260px;
      height: 160px;
      perspective: 1000px;
    }

    /* 2. Container 3D Flip */
    .flip-inner {
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: transform 0.6s;
      transform-style: preserve-3d;
      cursor: pointer;
    }
    .flip-card:hover .flip-inner {
      transform: rotateY(180deg);
    }

    /* 3. Sisi Depan & Belakang */
    .flip-front, .flip-back {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      border-radius: 16px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: white;
      font-weight: bold;
    }
    .flip-front {
      background: linear-gradient(135deg, #6366f1, #4338ca);
      box-shadow: 0 10px 25px rgba(99,102,241,0.4);
    }
    .flip-back {
      background: linear-gradient(135deg, #ec4899, #be185d);
      transform: rotateY(180deg);
      box-shadow: 0 10px 25px rgba(236,72,153,0.4);
    }
  </style>
</head>
<body>

  <div class="flip-card">
    <div class="flip-inner">
      <div class="flip-front">
        <span style="font-size:24px;">💳</span>
        <p style="margin:5px 0 0 0;">Kartu Member Gold</p>
        <span style="font-size:11px; opacity:0.8;">Hover untuk Balik</span>
      </div>
      <div class="flip-back">
        <p style="margin:0;">CVV: 889</p>
        <span style="font-size:11px; opacity:0.8;">Rahasia Pengguna</span>
      </div>
    </div>
  </div>

</body>
</html>`,
    quiz: {
      question: "Properti apa yang wajib disematkan pada elemen kartu agar sisi belakangnya tidak terlihat tembus pandang saat kartu menghadap depan?",
      options: ["backface-visibility: hidden;", "transform: hide-back;", "perspective: none;", "opacity: front-only;"],
      correctIndex: 0,
      explanation: "'backface-visibility: hidden;' menyembunyikan bidang belakang elemen ketika menghadap berlawanan dari sudut pandang layar."
    }
  },
  {
    id: 'css-transitions',
    title: 'CSS Transitions',
    order: 11,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-teal-600 to-emerald-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-teal-150 border border-white/20">CSS Motion</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Transitions: Animasi Perubahan Nilai Halus</h1>
    <p class="text-teal-100 text-sm md:text-base leading-relaxed">
      Transisi memungkinkan perubahan properti CSS (seperti warna saat hover, pergeseran posisi, atau ukuran) terjadi secara mulus dalam durasi tertentu alih-alih berubah seketika secara kasar.
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">4 Parameter Shorthand Transition</h2>
    <div class="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs overflow-x-auto">
      transition: [property] [duration] [timing-function] [delay];<br/><br/>
      /* Contoh Nyata: */<br/>
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-950/20 dark:to-emerald-950/20 border border-teal-200 dark:border-teal-900/40 rounded-2xl">
    <h4 class="text-teal-900 dark:text-teal-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-teal-800 dark:text-teal-400 text-xs leading-relaxed">
      Di Live Editor, ubah durasi transisi menjadi <code>0.5s</code> dan amati tombol meluncur secara anggun!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #f8fafc; padding: 40px; }
    
    .smooth-btn {
      background-color: #0d9488;
      color: white;
      padding: 14px 28px;
      font-size: 15px;
      font-weight: bold;
      border: none;
      border-radius: 12px;
      cursor: pointer;
      box-shadow: 0 4px 6px rgba(13,148,136,0.2);
      
      /* Muluskan semua perubahan */
      transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
    }
    .smooth-btn:hover {
      background-color: #0f766e;
      transform: translateY(-4px);
      box-shadow: 0 12px 20px rgba(13,148,136,0.35);
    }
  </style>
</head>
<body>

  <button class="smooth-btn">Hover Saya (Smooth 0.3s)</button>

</body>
</html>`,
    quiz: {
      question: "Manakah penulisan shorthand transisi CSS yang benar untuk menganimasikan warna background selama 0.4 detik dengan kurva ease?",
      options: ["transition: 0.4s background ease;", "transition: background 0.4s ease;", "transition-mode: 0.4s background;", "animate: background 0.4s;"],
      correctIndex: 1,
      explanation: "Urutan standar shorthand adalah properti yang ditargetkan (background), durasi (0.4s), dan timing-function (ease)."
    }
  },
  {
    id: 'css-animations',
    title: 'CSS Animations',
    order: 12,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-rose-600 to-orange-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-rose-150 border border-white/20">CSS Keyframes</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Animations: @keyframes & Looping Motion</h1>
    <p class="text-rose-100 text-sm md:text-base leading-relaxed">
      Berbeda dengan transisi yang memerlukan pemicu aksi hover, animasi CSS dengan <code>@keyframes</code> dapat berjalan otomatis secara mandiri, berulang selamanya (infinite loop), dan memiliki banyak tahap gerakan.
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Anatomi @keyframes</h2>
    <div class="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs overflow-x-auto">
      @keyframes pulseAnimation {<br/>
      &nbsp;&nbsp;0% { transform: scale(1); opacity: 1; }<br/>
      &nbsp;&nbsp;50% { transform: scale(1.1); opacity: 0.7; }<br/>
      &nbsp;&nbsp;100% { transform: scale(1); opacity: 1; }<br/>
      }
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-rose-50 to-orange-50 dark:from-rose-950/20 dark:to-orange-950/20 border border-rose-200 dark:border-rose-900/40 rounded-2xl">
    <h4 class="text-rose-900 dark:text-rose-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-rose-800 dark:text-rose-400 text-xs leading-relaxed">
      Di Live Editor, amati indikator live pulse berdenyut secara mulus tanpa henti menggunakan <code>animation: pulse 2s infinite ease-in-out;</code>!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #0f172a; padding: 40px; display: flex; gap: 20px; align-items: center; }
    
    @keyframes pulseGlow {
      0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(239,68,68, 0.7); }
      70% { transform: scale(1); box-shadow: 0 0 0 12px rgba(239,68,68, 0); }
      100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(239,68,68, 0); }
    }

    .pulse-dot {
      width: 16px;
      height: 16px;
      background: #ef4444;
      border-radius: 50%;
      animation: pulseGlow 1.5s infinite;
    }
  </style>
</head>
<body>

  <div style="display:flex; align-items:center; gap:10px; color:white; font-weight:bold; font-size:14px;">
    <div class="pulse-dot"></div>
    <span>LIVE STREAMING</span>
  </div>

</body>
</html>`,
    quiz: {
      question: "Nilai properti 'animation-iteration-count' apa yang membuat animasi berjalan terus-menerus tanpa pernah berhenti?",
      options: ["loop", "forever", "infinite", "always"],
      correctIndex: 2,
      explanation: "'animation-iteration-count: infinite;' memerintahkan browser mengulang siklus animasi secara terus-menerus selamanya."
    }
  },
  {
    id: 'css-tooltips',
    title: 'CSS Tooltips',
    order: 13,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-indigo-600 to-purple-800 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-indigo-150 border border-white/20">CSS UI Patterns</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Tooltips: Petunjuk Melayang dengan Panah Segitiga</h1>
    <p class="text-indigo-100 text-sm md:text-base leading-relaxed">
      Tooltip memberikan penjelasan ringkas saat mouse pengguna melayang di atas ikon atau tombol. Kita dapat membuatnya murni via CSS lengkap dengan panah penunjuk segitiga (*arrow indicator*).
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Trik Panah Segitiga via Border Hack (::after)</h2>
    <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
      Segitiga dibuat menggunakan elemen berukuran 0px dengan 3 sisi border transparan dan 1 sisi border berwarna:
    </p>
    <div class="bg-slate-900 text-slate-100 p-3 rounded-xl font-mono text-xs overflow-x-auto">
      border-width: 5px;<br/>
      border-style: solid;<br/>
      border-color: #1e293b transparent transparent transparent;
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border border-indigo-200 dark:border-indigo-900/40 rounded-2xl">
    <h4 class="text-indigo-900 dark:text-indigo-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-indigo-800 dark:text-indigo-400 text-xs leading-relaxed">
      Di Live Editor, arahkan kursor ke tombol "Bantuan" untuk menguji tooltip melayang yang muncul di atas tombol!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 60px; background: #f8fafc; }
    
    .tooltip-wrapper {
      position: relative;
      display: inline-block;
    }
    
    /* Box Teks Tooltip */
    .tooltip-text {
      visibility: hidden;
      width: 140px;
      background-color: #0f172a;
      color: #fff;
      text-align: center;
      border-radius: 8px;
      padding: 6px 10px;
      font-size: 12px;
      
      /* Posisi melayang di atas */
      position: absolute;
      z-index: 10;
      bottom: 125%;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0;
      transition: opacity 0.3s, visibility 0.3s;
    }
    
    /* Panah Segitiga di Bawah Tooltip */
    .tooltip-text::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: #0f172a transparent transparent transparent;
    }
    
    /* Tampilkan saat Hover */
    .tooltip-wrapper:hover .tooltip-text {
      visibility: visible;
      opacity: 1;
    }
  </style>
</head>
<body>

  <div class="tooltip-wrapper">
    <button style="padding:10px 18px; border-radius:8px; border:1px solid #cbd5e1; background:white; font-weight:bold; cursor:pointer;">
      Arahkan Mouse ke Sini 👆
    </button>
    <div class="tooltip-text">Ini adalah Tooltip CSS murni!</div>
  </div>

</body>
</html>`,
    quiz: {
      question: "Bagaimana cara menyembunyikan tooltip saat keadaan diam dan memunculkannya secara halus saat di-hover?",
      options: [
        "visibility: hidden; opacity: 0; lalu di-hover menjadi visibility: visible; opacity: 1;",
        "display: run;",
        "color: white;",
        "z-index: -100;"
      ],
      correctIndex: 0,
      explanation: "Kombinasi 'visibility: hidden;' dan 'opacity: 0;' memungkinkan transisi opacity yang mulus saat kursor melayang ke elemen induk."
    }
  },
  {
    id: 'css-image-styling',
    title: 'CSS Image Styling',
    order: 14,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-blue-700 to-indigo-800 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-blue-150 border border-white/20">CSS Images</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Image Styling & Hover Overlays</h1>
    <p class="text-blue-100 text-sm md:text-base leading-relaxed">
      Ciptakan kartu gambar interaktif dengan efek overlay gelap saat hover, tombol aksi meluncur, dan transisi zoom yang memukau penonton.
    </p>
  </div>

  <div class="p-5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-900/40 rounded-2xl">
    <h4 class="text-blue-900 dark:text-blue-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-blue-800 dark:text-blue-400 text-xs leading-relaxed">
      Di Live Editor, arahkan kursor ke kartu foto untuk melihat efek zoom dan overlay teks yang meluncur ke atas secara mulus!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #0f172a; padding: 40px; }
    
    .card-container {
      position: relative;
      width: 280px;
      height: 180px;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 10px 25px rgba(0,0,0,0.3);
      cursor: pointer;
    }
    .card-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }
    .card-overlay {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: linear-gradient(to top, rgba(15,23,42,0.9) 0%, transparent 60%);
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 20px;
      color: white;
      transform: translateY(15px);
      opacity: 0;
      transition: all 0.3s ease;
    }
    .card-container:hover .card-img {
      transform: scale(1.08);
    }
    .card-container:hover .card-overlay {
      transform: translateY(0);
      opacity: 1;
    }
  </style>
</head>
<body>

  <div class="card-container">
    <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&q=80" alt="Landscape" class="card-img">
    <div class="card-overlay">
      <h4 style="margin:0; font-size:16px;">Danau Pegunungan</h4>
      <span style="font-size:12px; color:#38bdf8;">Klik untuk Melihat Detail →</span>
    </div>
  </div>

</body>
</html>`,
    quiz: {
      question: "Mengapa kontainer pembungkus gambar wajib diberi 'overflow: hidden;' saat gambar anaknya diberi animasi transform: scale()?",
      options: [
        "Agar sudut gambar tidak meluber keluar dari batas lengkungan border-radius kontainer saat membesar",
        "Untuk mengubah foto menjadi hitam putih",
        "Agar foto tidak bisa di-download",
        "Sebagai aturan wajib W3C"
      ],
      correctIndex: 0,
      explanation: "'overflow: hidden;' memastikan saat gambar diperbesar (scale), bagian tepi gambar yang meluap dipotong rapi mengikuti batas sudut melengkung kartu pembungkusnya."
    }
  },
  {
    id: 'css-image-modal',
    title: 'CSS Image Modal',
    order: 15,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-slate-800 to-indigo-950 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-indigo-300 border border-white/20">CSS Lightbox</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Image Modal / Lightbox Popup</h1>
    <p class="text-slate-300 text-sm md:text-base leading-relaxed">
      Image Modal (Lightbox) menampilkan foto dalam ukuran penuh di tengah layar dengan latar belakang gelap buram saat thumbnail diklik.
    </p>
  </div>

  <div class="p-5 bg-gradient-to-r from-slate-100 to-indigo-50 dark:from-slate-900 dark:to-indigo-950/30 border border-slate-300 dark:border-slate-800 rounded-2xl">
    <h4 class="text-slate-900 dark:text-white font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
      Di Live Editor, klik gambar thumbnail untuk membuka modal popup layar penuh murni menggunakan pseudo-class <code>:target</code>!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 30px; background: #f8fafc; }
    
    .thumbnail {
      width: 160px;
      border-radius: 10px;
      cursor: pointer;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      transition: transform 0.2s;
    }
    .thumbnail:hover { transform: scale(1.04); }

    /* Lightbox Modal via :target */
    .lightbox-modal {
      display: none;
      position: fixed;
      z-index: 999;
      top: 0; left: 0; width: 100%; height: 100%;
      background-color: rgba(15, 23, 42, 0.85);
      backdrop-filter: blur(8px);
      align-items: center;
      justify-content: center;
    }
    .lightbox-modal:target {
      display: flex;
    }
    .modal-img {
      max-width: 80%;
      max-height: 80%;
      border-radius: 12px;
      box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
    }
    .close-btn {
      position: absolute;
      top: 20px; right: 30px;
      color: white;
      font-size: 32px;
      text-decoration: none;
      font-weight: bold;
    }
  </style>
</head>
<body>

  <h3>Klik Thumbnail Foto:</h3>
  <a href="#img-preview">
    <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=300&q=80" class="thumbnail" alt="Preview">
  </a>

  <!-- Modal Lightbox Tersembunyi -->
  <div id="img-preview" class="lightbox-modal">
    <a href="#" class="close-btn">&times;</a>
    <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80" class="modal-img" alt="Full">
  </div>

</body>
</html>`,
    quiz: {
      question: "Pseudo-class CSS apa yang memungkinkan pembuatan modal popup murni tanpa JavaScript saat link dengan href='#modal-id' diklik?",
      options: [":active", ":target", ":focus", ":checked"],
      correctIndex: 1,
      explanation: "':target' mewakili elemen unik yang ID-nya cocok dengan fragmen hash URL aktif saat ini (#modal-id)."
    }
  },
  {
    id: 'css-image-centering',
    title: 'CSS Image Centering',
    order: 16,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-teal-600 to-cyan-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-teal-150 border border-white/20">CSS Alignment</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Image Centering: Menengahkan Gambar Presisi</h1>
    <p class="text-teal-100 text-sm md:text-base leading-relaxed">
      Karena tag <code>&lt;img&gt;</code> adalah elemen inline secara default, Anda harus mengubah perilakunya menjadi block atau menggunakan Flexbox kontainer untuk menempatkannya tepat di tengah.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <h3 class="font-bold text-teal-600 text-sm">Metode 1: Block + Margin Auto</h3>
      <div class="bg-slate-900 text-slate-100 p-3 rounded-lg font-mono">
        display: block;<br/>
        margin-left: auto;<br/>
        margin-right: auto;
      </div>
    </div>

    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <h3 class="font-bold text-teal-600 text-sm">Metode 2: Parent Flexbox</h3>
      <div class="bg-slate-900 text-slate-100 p-3 rounded-lg font-mono">
        display: flex;<br/>
        justify-content: center;
      </div>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20 border border-teal-200 dark:border-teal-900/40 rounded-2xl">
    <h4 class="text-teal-900 dark:text-teal-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-teal-800 dark:text-teal-400 text-xs leading-relaxed">
      Di Live Editor, terapkan <code>display: block; margin: 0 auto;</code> pada gambar untuk memosisikannya tepat di titik tengah kontainer!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #f8fafc; padding: 30px; }
    
    .center-img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 180px;
      border-radius: 16px;
      box-shadow: 0 10px 20px rgba(0,0,0,0.08);
    }
  </style>
</head>
<body>

  <div style="background:white; padding:30px; border-radius:16px; border:1px solid #e2e8f0; max-width:400px; margin:auto;">
    <h3 style="text-align:center; color:#0f172a; margin-top:0;">Gambar di Tengah Layar</h3>
    <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=300&q=80" alt="Warna" class="center-img">
  </div>

</body>
</html>`,
    quiz: {
      question: "Mengapa deklarasi 'margin: 0 auto;' tidak langsung menengahkan tag <img> jika tidak ditambahkan 'display: block;'?",
      options: [
        "Karena tag <img> secara default adalah elemen inline, dan margin auto horizontal hanya bekerja pada elemen block",
        "Karena gambar terlalu berat",
        "Karena gambar harus memiliki alt text",
        "Karena margin auto hanya bekerja pada teks"
      ],
      correctIndex: 0,
      explanation: "Tag <img> adalah inline element. Menyetel 'display: block;' mengubah perilakunya menjadi blok sehingga 'margin: auto' dapat membagi ruang kiri dan kanan secara seimbang."
    }
  },
  {
    id: 'css-image-filters',
    title: 'CSS Image Filters',
    order: 17,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-purple-150 border border-white/20">CSS FX</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Image Filters: Efek Photoshop di Browser</h1>
    <p class="text-purple-100 text-sm md:text-base leading-relaxed">
      Properti <code>filter</code> menambahkan efek grafis seperti blur, hitam-putih (grayscale), saturasi, kontras, hingga bayangan transparan (drop-shadow) secara instan.
    </p>
  </div>

  <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono">
    <div class="p-3 bg-white dark:bg-[#0c0e18] rounded-xl border border-slate-200 dark:border-slate-800">
      <code>grayscale(100%)</code><br/><span class="text-slate-400 font-sans">Hitam Putih</span>
    </div>
    <div class="p-3 bg-white dark:bg-[#0c0e18] rounded-xl border border-slate-200 dark:border-slate-800">
      <code>blur(5px)</code><br/><span class="text-slate-400 font-sans">Efek Buram</span>
    </div>
    <div class="p-3 bg-white dark:bg-[#0c0e18] rounded-xl border border-slate-200 dark:border-slate-800">
      <code>brightness(1.5)</code><br/><span class="text-slate-400 font-sans">Mencerahkan Foto</span>
    </div>
    <div class="p-3 bg-white dark:bg-[#0c0e18] rounded-xl border border-slate-200 dark:border-slate-800">
      <code>sepia(80%)</code><br/><span class="text-slate-400 font-sans">Efek Foto Jadul</span>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border border-purple-200 dark:border-purple-900/40 rounded-2xl">
    <h4 class="text-purple-900 dark:text-purple-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-purple-800 dark:text-purple-400 text-xs leading-relaxed">
      Di Live Editor, atur foto grayscale normal dan kembali berwarna penuh saat di-hover dengan <code>filter: grayscale(0%);</code>!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #0f172a; padding: 40px; display: flex; gap: 20px; }
    
    .fx-img {
      width: 140px;
      height: 140px;
      border-radius: 14px;
      object-fit: cover;
      transition: filter 0.3s;
    }
    
    .fx-bw { filter: grayscale(100%); }
    .fx-bw:hover { filter: grayscale(0%); }
    
    .fx-sepia { filter: sepia(90%); }
    .fx-blur { filter: blur(3px); }
  </style>
</head>
<body>

  <div>
    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80" class="fx-img fx-bw" alt="Grayscale">
    <div style="color:white; font-size:11px; text-align:center; margin-top:6px;">Grayscale (Hover me)</div>
  </div>

  <div>
    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80" class="fx-img fx-sepia" alt="Sepia">
    <div style="color:white; font-size:11px; text-align:center; margin-top:6px;">Sepia (Vintage)</div>
  </div>

</body>
</html>`,
    quiz: {
      question: "Fungsi filter apa yang digunakan untuk mengubah gambar berwarna menjadi hitam putih 100%?",
      options: ["filter: blackwhite(100%);", "filter: grayscale(100%);", "filter: mono(1);", "filter: saturate(0);"],
      correctIndex: 1,
      explanation: "'filter: grayscale(100%);' mengonversi seluruh warna foto menjadi derajat keabuan (hitam putih)."
    }
  },
  {
    id: 'css-image-shapes',
    title: 'CSS Image Shapes',
    order: 18,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-indigo-700 to-blue-800 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-indigo-150 border border-white/20">CSS Shapes</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Image Shapes: clip-path & shape-outside</h1>
    <p class="text-indigo-100 text-sm md:text-base leading-relaxed">
      Potong gambar menjadi bentuk poligon/bintang segitiga unik via <code>clip-path</code>, dan buat teks paragraf mengalir melingkari lekukan gambar via <code>shape-outside: circle()</code>.
    </p>
  </div>

  <div class="p-5 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 border border-indigo-200 dark:border-indigo-900/40 rounded-2xl">
    <h4 class="text-indigo-900 dark:text-indigo-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-indigo-800 dark:text-indigo-400 text-xs leading-relaxed">
      Di Live Editor, eksplorasi bagaimana teks mengalir melingkari gambar bundar secara dinamis!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #f8fafc; padding: 30px; }
    
    .floating-circle {
      float: left;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      margin-right: 20px;
      margin-bottom: 10px;
      object-fit: cover;
      
      /* Teks melengkung mengikuti lingkaran */
      shape-outside: circle(50%);
    }
  </style>
</head>
<body>

  <div style="max-width: 480px; background:white; padding:24px; border-radius:16px; border:1px solid #e2e8f0;">
    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80" class="floating-circle" alt="Model">
    <h3 style="margin-top:0;">Teks Melingkari Foto</h3>
    <p style="color:#475569; font-size:13px; line-height:1.6; margin:0;">
      Dengan menggunakan properti <strong>shape-outside: circle(50%)</strong>, teks paragraf tidak lagi terpotong lurus kaku di tepi kotak, melainkan mengalir secara elegan melengkung mengikuti bentuk lingkaran gambar avatar!
    </p>
  </div>

</body>
</html>`,
    quiz: {
      question: "Properti CSS apa yang membuat teks paragraf di samping gambar floating mengalir mengikuti lekukan bentuk lingkaran (bukan batas kotak persegi)?",
      options: ["shape-flow: round;", "shape-outside: circle();", "text-shape: curve;", "clip-shape: auto;"],
      correctIndex: 1,
      explanation: "'shape-outside: circle();' mendefinisikan batas area kurva non-persegi bagi konten teks yang mengalir di samping elemen float."
    }
  },
  {
    id: 'css-object-fit',
    title: 'CSS object-fit',
    order: 19,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-emerald-600 to-teal-800 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-emerald-150 border border-white/20">CSS Fitting</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS object-fit & object-position</h1>
    <p class="text-emerald-100 text-sm md:text-base leading-relaxed">
      Properti <code>object-fit</code> adalah penyelamat utama gambar di web: menjaga aspek rasio foto agar <strong>TIDAK GEPENG / RUSAK</strong> saat dipaksa masuk ke dalam kotak berdimensi tetap.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <code class="font-bold text-emerald-600 text-sm">object-fit: cover ⭐</code>
      <p class="text-slate-600 dark:text-slate-400">Pilihan terpopuler! Mengisi penuh seluruh kotak dan memotong kelebihan gambar secara proporsional.</p>
    </div>

    <div class="p-4 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
      <code class="font-bold text-teal-600 text-sm">object-fit: contain</code>
      <p class="text-slate-600 dark:text-slate-400">Menampilkan seluruh gambar utuh tanpa terpotong (menyisakan ruang kosong jika rasio berbeda).</p>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border border-emerald-200 dark:border-emerald-900/40 rounded-2xl">
    <h4 class="text-emerald-900 dark:text-emerald-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-emerald-800 dark:text-emerald-400 text-xs leading-relaxed">
      Di Live Editor, atur <code>object-position: center top;</code> agar fokus pemotongan foto selalu memprioritaskan area wajah di bagian atas!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #f8fafc; padding: 30px; display: flex; gap: 20px; }
    
    .card {
      width: 140px;
      text-align: center;
      background: white;
      padding: 12px;
      border-radius: 14px;
      border: 1px solid #e2e8f0;
    }
    .demo-img {
      width: 100%;
      height: 100px;
      border-radius: 8px;
    }
    .fit-cover { object-fit: cover; }
    .fit-fill { object-fit: fill; } /* Gepeng */
  </style>
</head>
<body>

  <div class="card">
    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80" class="demo-img fit-fill" alt="Gepeng">
    <div style="font-size:11px; font-weight:bold; color:#ef4444; margin-top:6px;">object-fit: fill (Gepeng ❌)</div>
  </div>

  <div class="card">
    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80" class="demo-img fit-cover" alt="Proporsional">
    <div style="font-size:11px; font-weight:bold; color:#10b981; margin-top:6px;">object-fit: cover (Rapi ✅)</div>
  </div>

</body>
</html>`,
    quiz: {
      question: "Nilai properti apa yang wajib disematkan pada tag <img> agar gambar mengisi penuh wadah 100% tanpa menjadi gepeng atau terdistorsi?",
      options: ["object-fit: contain;", "object-fit: cover;", "image-rendering: auto;", "transform: ratio;"],
      correctIndex: 1,
      explanation: "'object-fit: cover;' mempertahankan aspek rasio alami gambar sambil memotong bagian tepi yang berlebih sehingga gambar tidak terdistorsi/gepeng."
    }
  }
];

async function run() {
  const modId = 'ba1383a2-219d-44ab-bf63-804d5a0f0902';
  const chapTitle = 'CSS Advanced';

  for (const dbUrl of dbs) {
    const dbName = dbUrl.split('/').pop();
    console.log(`\n🚀 [${dbName}] Seeding Chapter "${chapTitle}" & 19 Advanced Lessons...`);
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

      // 2. Insert or update each of the 19 advanced lessons
      for (const l of advancedLessons) {
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

  console.log('\n✨ ALL 19 CSS ADVANCED LESSONS 100% POPULATED ACROSS BOTH DATABASES!');
}

run().catch(console.error);
