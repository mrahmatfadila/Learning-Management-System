const { Pool } = require('pg');
require('dotenv').config({ path: 'c:/xampp/htdocs/Learning Management System/backend/.env' });
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const batch2Lessons = [
  {
    id: 'css-padding',
    title: 'CSS Padding',
    order: 12,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-blue-600 to-cyan-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-cyan-150 border border-white/20">CSS Spacing</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Padding & Box Sizing</h1>
    <p class="text-cyan-100 text-sm md:text-base leading-relaxed">
      Padding adalah ruang kosong di **dalam** elemen, terletak di antara konten sebenarnya dan batas border. Pelajari cara mengaturnya secara presisi.
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Padding Individual & Shorthand</h2>
    <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
      Anda dapat mengatur padding untuk setiap sisi secara individual (<code>padding-top</code>, <code>padding-right</code>, <code>padding-bottom</code>, <code>padding-left</code>) atau menggunakan format Shorthand:
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
      <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 font-mono">
        <span class="font-bold text-blue-600">4 Nilai (Searah Jarum Jam):</span><br/>
        <code>padding: 10px 20px 15px 25px;</code><br/>
        <span class="text-slate-400 font-sans mt-1 block">Top: 10px, Right: 20px, Bottom: 15px, Left: 25px</span>
      </div>

      <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 font-mono">
        <span class="font-bold text-blue-600">2 Nilai (Vertikal & Horizontal):</span><br/>
        <code>padding: 12px 24px;</code><br/>
        <span class="text-slate-400 font-sans mt-1 block">Top/Bottom: 12px, Left/Right: 24px (Standar tombol modern)</span>
      </div>

      <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 font-mono">
        <span class="font-bold text-blue-600">1 Nilai (Semua Sisi):</span><br/>
        <code>padding: 20px;</code><br/>
        <span class="text-slate-400 font-sans mt-1 block">Semua 4 sisi mendapat padding 20px</span>
      </div>

      <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 font-mono">
        <span class="font-bold text-purple-600">Perbedaan Margin vs Padding:</span><br/>
        <span class="text-slate-600 dark:text-slate-300 font-sans mt-1 block">
          • <strong>Margin:</strong> Jarak di <em>luar</em> border.<br/>
          • <strong>Padding:</strong> Jarak di <em>dalam</em> border (memiliki warna background yang sama dengan elemen).
        </span>
      </div>
    </div>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white flex items-center gap-2">
      <span class="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 flex items-center justify-center font-bold text-sm">⚠️</span>
      Masalah Lebar Elemen & Solusi: <code>box-sizing: border-box</code>
    </h2>
    <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
      Secara default (<code>box-sizing: content-box</code>), jika Anda memberi elemen <code>width: 300px</code> dan menambahkan <code>padding: 25px</code>, lebar total elemen di layar akan membengkak menjadi <strong>350px</strong> (300px + 25px kiri + 25px kanan). Hal ini sering merusak tata letak grid!
    </p>
    <div class="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-500 rounded-r-xl">
      <h4 class="font-bold text-emerald-900 dark:text-emerald-300 text-xs mb-1">✅ Solusi Standar Industri:</h4>
      <p class="text-xs text-emerald-800 dark:text-emerald-400 leading-relaxed font-mono">
        * { box-sizing: border-box; }
      </p>
      <p class="text-xs text-emerald-700 dark:text-emerald-400 mt-1">
        Dengan <code>border-box</code>, nilai padding dan border akan dihitung <strong>ke dalam</strong> lebar elemen. Jika <code>width: 300px</code>, maka lebar totalnya akan tetap 300px secara konsisten!
      </p>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border border-blue-200 dark:border-blue-900/40 rounded-2xl">
    <h4 class="text-blue-900 dark:text-blue-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-blue-800 dark:text-blue-400 text-xs leading-relaxed">
      Ubah tombol <code>.custom-btn</code> di Live Editor agar memiliki padding vertikal <code>14px</code> dan horizontal <code>32px</code>, lalu tambahkan <code>box-sizing: border-box</code> pada kartu.
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    * {
      box-sizing: border-box;
      font-family: Arial, sans-serif;
    }
    .card {
      width: 320px;
      background: white;
      border: 2px solid #e2e8f0;
      border-radius: 16px;
      padding: 24px; /* Padding di dalam kartu */
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
    }
    .custom-btn {
      background: #2563eb;
      color: white;
      border: none;
      border-radius: 10px;
      padding: 12px 24px; /* Padding atas-bawah 12px, kiri-kanan 24px */
      font-weight: bold;
      font-size: 14px;
      cursor: pointer;
      width: 100%;
      margin-top: 15px;
    }
    .custom-btn:hover {
      background: #1d4ed8;
    }
  </style>
</head>
<body style="background: #f8fafc; padding: 30px;">

  <div class="card">
    <h3 style="margin-top:0; color:#1e293b;">Produk Unggulan</h3>
    <p style="color:#64748b; font-size:14px; line-height:1.5;">
      Padding memberikan ruang nafas yang lega di dalam kartu sehingga teks tidak menempel ke garis border.
    </p>
    <button class="custom-btn">Beli Sekarang</button>
  </div>

</body>
</html>`,
    quiz: {
      question: "Apa fungsi dari properti 'box-sizing: border-box;' pada elemen CSS?",
      options: [
        "Membuat sudut border menjadi lingkaran penuh",
        "Menyertakan padding dan border ke dalam total lebar (width) dan tinggi (height) elemen",
        "Menghilangkan margin luar elemen secara otomatis",
        "Mengubah warna border menjadi hitam pekat"
      ],
      correctIndex: 1,
      explanation: "Dengan 'box-sizing: border-box', nilai width dan height yang ditentukan sudah mencakup area konten, padding, dan border sehingga lebar elemen tidak membesar saat diberi padding."
    }
  },
  {
    id: 'css-height-width',
    title: 'CSS Height / Width',
    order: 13,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-teal-600 to-cyan-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-teal-150 border border-white/20">CSS Dimensions</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Height, Width, & Min/Max</h1>
    <p class="text-teal-100 text-sm md:text-base leading-relaxed">
      Mengontrol dimensi ukuran tinggi dan lebar elemen secara fleksibel serta responsif di berbagai perangkat.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
    <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
      <h3 class="font-black text-slate-800 dark:text-white text-base">1. Properti height & width Dasar</h3>
      <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
        Mengatur tinggi dan lebar spesifik. Satuan yang dapat digunakan: <code>px</code>, <code>%</code> (persentase dari parent), <code>vh/vw</code> (viewport height/width), atau <code>auto</code> (default).
      </p>
      <div class="bg-slate-900 p-3 rounded-xl text-xs font-mono text-slate-200">
        width: 300px;<br/>
        height: 150px;
      </div>
    </div>

    <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
      <h3 class="font-black text-slate-800 dark:text-white text-base">2. max-width untuk Desain Responsif</h3>
      <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
        Menggunakan <code>max-width: 600px;</code> jauh lebih baik daripada <code>width: 600px;</code> karena elemen akan otomatis mengecil jika layar HP lebarnya kurang dari 600px, sehingga tidak muncul scroll horizontal yang merusak tampilan!
      </p>
      <div class="bg-slate-900 p-3 rounded-xl text-xs font-mono text-slate-200">
        max-width: 600px;<br/>
        width: 100%;
      </div>
    </div>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Properti Pembatas (Min & Max)</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
      <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <code class="font-bold text-teal-600">min-width & min-height</code>
        <p class="text-slate-600 dark:text-slate-400 mt-1">Menentukan batas ukuran minimum. Elemen tidak boleh lebih kecil dari nilai ini meskipun kontennya sedikit.</p>
      </div>
      <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <code class="font-bold text-teal-600">max-width & max-height</code>
        <p class="text-slate-600 dark:text-slate-400 mt-1">Menentukan batas ukuran maksimum. Elemen tidak boleh membesar melebihi batas ini.</p>
      </div>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20 border border-teal-200 dark:border-teal-900/40 rounded-2xl">
    <h4 class="text-teal-900 dark:text-teal-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-teal-800 dark:text-teal-400 text-xs leading-relaxed">
      Di Live Editor, atur kotak <code>.responsive-box</code> dengan <code>max-width: 450px;</code> dan <code>min-height: 180px;</code>, lalu amati bagaimana kotak menyesuaikan ukuran secara proporsional.
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    .responsive-box {
      max-width: 450px;
      min-height: 150px;
      width: 100%;
      background: linear-gradient(135deg, #0d9488, #0284c7);
      color: white;
      padding: 25px;
      border-radius: 16px;
      font-family: Arial, sans-serif;
      box-shadow: 0 10px 20px rgba(0,0,0,0.1);
      margin: 0 auto;
    }
  </style>
</head>
<body style="background: #f1f5f9; padding: 20px;">

  <div class="responsive-box">
    <h2 style="margin-top:0;">Kotak Responsif Modern</h2>
    <p style="font-size:14px; line-height:1.6; opacity:0.9;">
      Menggunakan <strong>max-width: 450px</strong> dan <strong>width: 100%</strong> memastikan elemen ini tetap maksimal 450px di layar lebar desktop, namun otomatis menciut rapi saat dibuka di layar smartphone!
    </p>
  </div>

</body>
</html>`,
    quiz: {
      question: "Mengapa 'max-width: 500px;' lebih disukai daripada 'width: 500px;' untuk membuat desain web responsif?",
      options: [
        "Karena max-width otomatis membuat font menjadi tebal (bold)",
        "Karena saat lebar browser lebih kecil dari 500px, elemen dengan max-width akan fleksibel mengecil mengikuti layar",
        "Karena max-width menghapus border secara otomatis",
        "Karena max-width hanya berfungsi di peramban Google Chrome"
      ],
      correctIndex: 1,
      explanation: "'max-width' menetapkan batas maksimal 500px, tetapi jika layar pengguna lebih sempit (misal HP 360px), lebar elemen otomatis mengecil menjadi 100% dari layar sehingga tidak terpotong."
    }
  },
  {
    id: 'css-box-model',
    title: 'CSS Box Model',
    order: 14,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-indigo-700 to-purple-800 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-indigo-150 border border-white/20">CSS Core Concepts</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Box Model: Inti Tata Letak Web</h1>
    <p class="text-indigo-100 text-sm md:text-base leading-relaxed">
      Semua elemen HTML di halaman web dibungkus dalam sebuah "kotak" (*box*). Memahami Box Model adalah kunci utama menjadi master CSS.
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">4 Lapisan Box Model (Dari Luar ke Dalam)</h2>

    <!-- Visual Box Model Diagram -->
    <div class="p-4 bg-orange-100 dark:bg-orange-950/40 border-2 border-dashed border-orange-400 rounded-3xl text-center">
      <span class="text-xs font-black text-orange-800 dark:text-orange-300 uppercase tracking-wider">1. MARGIN (Area Terluar, Transparan)</span>
      
      <div class="m-3 p-4 bg-amber-100 dark:bg-amber-950/60 border-2 border-amber-500 rounded-2xl text-center">
        <span class="text-xs font-black text-amber-800 dark:text-amber-300 uppercase tracking-wider">2. BORDER (Garis Batas Sekeliling Padding & Konten)</span>
        
        <div class="m-3 p-4 bg-emerald-100 dark:bg-emerald-950/60 border-2 border-emerald-500 rounded-xl text-center">
          <span class="text-xs font-black text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">3. PADDING (Ruang Kosong di Sekitar Konten)</span>
          
          <div class="m-3 p-5 bg-blue-500 text-white rounded-lg font-black text-sm shadow-md">
            4. CONTENT (Teks, Gambar, Video, atau Ikon)
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2">
      <div class="p-3.5 bg-blue-50 dark:bg-blue-950/30 rounded-xl border border-blue-200 dark:border-blue-900/30">
        <strong class="text-blue-700 dark:text-blue-300">Content:</strong> Konten sebenarnya dari elemen (teks atau gambar).
      </div>
      <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/30 rounded-xl border border-emerald-200 dark:border-emerald-900/30">
        <strong class="text-emerald-700 dark:text-emerald-300">Padding:</strong> Membersihkan area transparan di sekitar konten di dalam border.
      </div>
      <div class="p-3.5 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-900/30">
        <strong class="text-amber-700 dark:text-amber-300">Border:</strong> Garis pembatas yang membungkus padding dan konten.
      </div>
      <div class="p-3.5 bg-orange-50 dark:bg-orange-950/30 rounded-xl border border-orange-200 dark:border-orange-900/30">
        <strong class="text-orange-700 dark:text-orange-300">Margin:</strong> Membersihkan area transparan di luar border untuk memisahkan dari elemen lain.
      </div>
    </div>
  </div>

  <div class="bg-indigo-50 dark:bg-indigo-950/20 border-l-4 border-indigo-500 p-5 rounded-r-2xl">
    <h4 class="text-indigo-900 dark:text-indigo-300 font-black text-sm mb-1">
      📐 Rumus Menghitung Lebar Total Elemen:
    </h4>
    <p class="text-indigo-800 dark:text-indigo-400 text-xs font-mono leading-relaxed">
      Total Lebar = Width + Padding Kiri + Padding Kanan + Border Kiri + Border Kanan + Margin Kiri + Margin Kanan
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    .box-model-demo {
      font-family: Arial, sans-serif;
      width: 300px;
      padding: 20px;
      border: 5px solid #4f46e5;
      margin: 30px auto;
      background-color: #e0e7ff;
      color: #1e1b4b;
      border-radius: 12px;
      text-align: center;
    }
  </style>
</head>
<body style="background: #f8fafc;">

  <div class="box-model-demo">
    <h3 style="margin-top:0;">Demonstrasi Box Model</h3>
    <p style="font-size:13px; margin-bottom:0;">
      • Width: 300px<br>
      • Padding: 20px<br>
      • Border: 5px solid #4f46e5<br>
      • Margin: 30px auto
    </p>
  </div>

</body>
</html>`,
    quiz: {
      question: "Manakah urutan lapisan Box Model yang benar dari LAPISAN PALING DALAM ke LAPISAN PALING LUAR?",
      options: [
        "Content -> Padding -> Border -> Margin",
        "Margin -> Border -> Padding -> Content",
        "Border -> Margin -> Padding -> Content",
        "Padding -> Content -> Margin -> Border"
      ],
      correctIndex: 0,
      explanation: "Urutan Box Model dari dalam ke luar adalah: Content (inti) -> Padding (bantalan dalam) -> Border (garis batas) -> Margin (jarak luar)."
    }
  },
  {
    id: 'css-outline',
    title: 'CSS Outline',
    order: 15,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-violet-600 to-fuchsia-700 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-violet-150 border border-white/20">CSS Accents</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Outline & Outline Offset</h1>
    <p class="text-violet-100 text-sm md:text-base leading-relaxed">
      Outline adalah garis yang digambar di **luar** batas border elemen. Berbeda dengan border, outline TIDAK memakan ruang pada layout!
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Perbedaan Utama: Border vs Outline</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
      <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
        <h4 class="font-bold text-slate-800 dark:text-white">Border:</h4>
        <p class="text-slate-600 dark:text-slate-400">• Termasuk dalam perhitungan dimensi box model.</p>
        <p class="text-slate-600 dark:text-slate-400">• Bisa diatur sisi individual (<code>border-top</code>, <code>border-bottom</code>, dll).</p>
      </div>
      <div class="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-xl border border-purple-200 dark:border-purple-900/30 space-y-1.5">
        <h4 class="font-bold text-purple-900 dark:text-purple-300">Outline:</h4>
        <p class="text-purple-800 dark:text-purple-400">• Digambar melayang di atas elemen lain (tidak menggeser tata letak).</p>
        <p class="text-purple-800 dark:text-purple-400">• Selalu mengelilingi ke-4 sisi secara bersamaan.</p>
        <p class="text-purple-800 dark:text-purple-400">• Sering digunakan untuk indikator fokus keyboard (Aksesibilitas / a11y).</p>
      </div>
    </div>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Properti & Efek Jarak (outline-offset)</h2>
    <div class="space-y-3 text-xs">
      <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl font-mono">
        <code class="font-bold text-purple-600">outline: 3px solid #8b5cf6;</code>
        <p class="text-slate-500 font-sans mt-1">Outline Shorthand (width, style, color).</p>
      </div>
      <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl font-mono">
        <code class="font-bold text-purple-600">outline-offset: 6px;</code>
        <p class="text-slate-500 font-sans mt-1">Memberi jarak spasi kosong transparan antara border elemen dan garis outline!</p>
      </div>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-violet-50 to-fuchsia-50 dark:from-violet-950/20 dark:to-fuchsia-950/20 border border-violet-200 dark:border-violet-900/40 rounded-2xl">
    <h4 class="text-violet-900 dark:text-violet-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-violet-800 dark:text-violet-400 text-xs leading-relaxed">
      Di Live Editor, atur <code>outline-offset: 8px;</code> dan <code>outline: 3px dashed #ec4899;</code> pada tombol profil untuk melihat efek border ganda berjarak.
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    .outline-card {
      width: 280px;
      margin: 40px auto;
      padding: 25px;
      background: white;
      border: 3px solid #6366f1;
      border-radius: 12px;
      font-family: Arial, sans-serif;
      text-align: center;
      
      /* Outline dengan offset (jarak spasi luar) */
      outline: 3px dashed #ec4899;
      outline-offset: 8px;
    }
  </style>
</head>
<body style="background: #fdf4ff; padding: 20px;">

  <div class="outline-card">
    <h3 style="color:#4338ca; margin-top:0;">Efek Outline Offset</h3>
    <p style="color:#64748b; font-size:13px;">
      Garis putus-putus merah muda di luar adalah outline yang berjarak 8px dari border utama.
    </p>
  </div>

</body>
</html>`,
    quiz: {
      question: "Apa perbedaan paling mendasar antara CSS Outline dan CSS Border?",
      options: [
        "Outline mengubah warna font teks menjadi transparan",
        "Outline tidak memakan ruang layout (tidak mengubah dimensi box model)",
        "Outline hanya bisa berwarna hitam dan putih",
        "Outline wajib memiliki lebar minimal 50px"
      ],
      correctIndex: 1,
      explanation: "CSS Outline digambar di luar elemen tanpa memakan ruang pada box model, sehingga penambahan outline tidak akan menggeser posisi elemen-elemen di sekitarnya."
    }
  },
  {
    id: 'css-text',
    title: 'CSS Text',
    order: 16,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-rose-600 to-orange-600 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-rose-150 border border-white/20">CSS Typography</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Text: Tipografi & Efek Teks Lengkap</h1>
    <p class="text-rose-100 text-sm md:text-base leading-relaxed">
      Kuasai seluruh properti penataan teks CSS: perataan, dekorasi, transformasi huruf kapital, spasi huruf/baris, hingga bayangan (*text-shadow*).
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">Properti Utama CSS Text</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
      <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <code class="font-bold text-rose-600">text-align: left | center | right | justify</code>
        <p class="text-slate-600 dark:text-slate-400 mt-1">Mengatur perataan horizontal teks di dalam kontainer.</p>
      </div>

      <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <code class="font-bold text-rose-600">text-decoration: underline | line-through | none</code>
        <p class="text-slate-600 dark:text-slate-400 mt-1">Garis bawah, garis coret, atau <code>none</code> (menghilangkan garis bawah default pada link <code>&lt;a&gt;</code>).</p>
      </div>

      <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <code class="font-bold text-rose-600">text-transform: uppercase | lowercase | capitalize</code>
        <p class="text-slate-600 dark:text-slate-400 mt-1">Mengubah huruf menjadi kapital semua, huruf kecil, atau huruf depan kapital.</p>
      </div>

      <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <code class="font-bold text-rose-600">line-height: 1.6</code>
        <p class="text-slate-600 dark:text-slate-400 mt-1">Mengatur jarak vertikal antar baris teks (sangat penting untuk kenyamanan membaca artikel).</p>
      </div>

      <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <code class="font-bold text-rose-600">letter-spacing: 2px / word-spacing: 5px</code>
        <p class="text-slate-600 dark:text-slate-400 mt-1">Mengatur jarak renggang antar karakter huruf atau antar kata.</p>
      </div>

      <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <code class="font-bold text-rose-600">text-shadow: 2px 2px 4px rgba(0,0,0,0.5)</code>
        <p class="text-slate-600 dark:text-slate-400 mt-1">Memberi efek bayangan pada teks: (offset-x, offset-y, blur-radius, color).</p>
      </div>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-rose-50 to-orange-50 dark:from-rose-950/20 dark:to-orange-950/20 border border-rose-200 dark:border-rose-900/40 rounded-2xl">
    <h4 class="text-rose-900 dark:text-rose-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-rose-800 dark:text-rose-400 text-xs leading-relaxed">
      Di Live Editor, atur judul artikel dengan <code>text-transform: uppercase;</code>, <code>letter-spacing: 3px;</code>, dan <code>text-shadow: 2px 2px 8px rgba(0,0,0,0.2);</code>.
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
      background: #fafaf9;
      padding: 30px;
    }
    .article-header {
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 4px;
      color: #e11d48;
      font-size: 24px;
      font-weight: 900;
      text-shadow: 2px 2px 5px rgba(225, 29, 72, 0.25);
    }
    .article-body {
      max-width: 550px;
      margin: 20px auto;
      text-align: justify;
      line-height: 1.8; /* Kenyamanan membaca tinggi */
      color: #44403c;
      font-size: 15px;
    }
    .clean-link {
      color: #2563eb;
      text-decoration: none;
      font-weight: bold;
      border-bottom: 2px solid #93c5fd;
      transition: all 0.2s;
    }
    .clean-link:hover {
      color: #1d4ed8;
      border-color: #1d4ed8;
    }
  </style>
</head>
<body>

  <h1 class="article-header">Mastering Tipografi CSS</h1>
  <p class="article-body">
    Kombinasi <strong>line-height: 1.8</strong> dan <strong>letter-spacing</strong> yang tepat akan mengubah artikel biasa menjadi bacaan premium yang sangat nyaman bagi mata pengunjung website Anda. Kunjungi <a href="#" class="clean-link">Dokumentasi Lengkap</a> untuk tips lanjutan.
  </p>

</body>
</html>`,
    quiz: {
      question: "Properti CSS apa yang digunakan untuk mengubah semua huruf teks menjadi huruf besar (kapital) secara otomatis tanpa mengubah teks asli di HTML?",
      options: [
        "font-weight: bold;",
        "text-transform: uppercase;",
        "text-decoration: uppercase;",
        "font-style: italic;"
      ],
      correctIndex: 1,
      explanation: "'text-transform: uppercase;' akan mengubah semua karakter teks yang ditargetkan menjadi huruf kapital di layar browser."
    }
  },
  {
    id: 'css-fonts',
    title: 'CSS Fonts',
    order: 17,
    theory: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-amber-600 to-yellow-600 p-8 rounded-3xl text-white shadow-xl">
    <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-amber-150 border border-white/20">CSS Typography</span>
    <h1 class="text-3xl md:text-4xl font-black mt-3 mb-2">CSS Fonts & Google Fonts Integration</h1>
    <p class="text-amber-100 text-sm md:text-base leading-relaxed">
      Memilih font yang tepat memberikan kepribadian dan identitas kuat pada website Anda. Pelajari Web Safe Fonts, Fallbacks, hingga integrasi Google Fonts.
    </p>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">1. Font Families & Web Safe Fonts</h2>
    <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
      Ada 5 kategori generik font keluarga di CSS:
    </p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
      <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <strong class="text-amber-600">Serif (Berkait):</strong><br/>
        Times New Roman, Georgia, Garamond.
      </div>
      <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <strong class="text-blue-600">Sans-Serif (Modern Bersih):</strong><br/>
        Arial, Helvetica, Inter, Roboto, Segoe UI.
      </div>
      <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <strong class="text-emerald-600">Monospace (Lebar Tetap):</strong><br/>
        Courier New, Consolas, Fira Code (Coding).
      </div>
    </div>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">2. Konsep Font Fallbacks (Sistem Cadangan)</h2>
    <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
      Selalu sertakan beberapa pilihan font dipisahkan tanda koma. Jika font pilihan pertama tidak terinstal di laptop user, browser akan menggunakan pilihan kedua, dan seterusnya:
    </p>
    <div class="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs">
      font-family: 'Poppins', 'Segoe UI', Tahoma, sans-serif;
    </div>
  </div>

  <div class="bg-white dark:bg-[#0c0e18] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
    <h2 class="text-xl font-black text-slate-800 dark:text-white">3. Menggunakan Google Fonts</h2>
    <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
      Google Fonts menyediakan ribuan font gratis berkualitas tinggi. Cukup tautkan link Google Fonts di dalam <code>&lt;head&gt;</code>:
    </p>
    <div class="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs overflow-x-auto">
      &lt;link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700;900&display=swap" rel="stylesheet"&gt;
    </div>
  </div>

  <div class="p-5 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 border border-amber-200 dark:border-amber-900/40 rounded-2xl">
    <h4 class="text-amber-900 dark:text-amber-300 font-black text-sm mb-1">🎯 Code Challenge:</h4>
    <p class="text-amber-800 dark:text-amber-400 text-xs leading-relaxed">
      Di Live Editor, coba ganti <code>font-family</code> judul utama menjadi <code>'Georgia', serif</code> dan amati perubahan karakternya menjadi elegan dan klasik!
    </p>
  </div>
</div>
`,
    code: `<!DOCTYPE html>
<html>
<head>
  <!-- Import Google Fonts: Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;800&display=swap" rel="stylesheet">

  <style>
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      background: #f8fafc;
      padding: 30px;
      color: #0f172a;
    }
    .hero-title {
      font-size: 32px;
      font-weight: 800;
      letter-spacing: -1px;
      color: #1e293b;
      margin-bottom: 8px;
    }
    .hero-sub {
      font-size: 15px;
      color: #64748b;
      font-weight: 400;
      line-height: 1.6;
    }
    .code-snippet {
      font-family: 'Consolas', 'Courier New', monospace;
      background: #1e293b;
      color: #38bdf8;
      padding: 12px 18px;
      border-radius: 10px;
      font-size: 13px;
      display: inline-block;
      margin-top: 15px;
    }
  </style>
</head>
<body>

  <h1 class="hero-title">Integrasi Google Fonts</h1>
  <p class="hero-sub">
    Halaman ini menggunakan font modern <strong>Plus Jakarta Sans</strong> yang dimuat langsung dari Google Fonts CDN.
  </p>
  <div class="code-snippet">
    font-family: 'Plus Jakarta Sans', sans-serif;
  </div>

</body>
</html>`,
    quiz: {
      question: "Mengapa kita selalu menyertakan nama font generik seperti 'sans-serif' atau 'serif' di urutan paling akhir pada properti 'font-family'?",
      options: [
        "Sebagai cadangan darurat (fallback) jika font utama tidak tersedia di komputer user",
        "Untuk memaksa browser merender font dalam format 3D",
        "Sebagai aturan wajib W3C yang jika dihilangkan akan menyebabkan error fatal",
        "Untuk mengubah warna font menjadi hitam secara default"
      ],
      correctIndex: 0,
      explanation: "Font generik (seperti sans-serif atau serif) diletakkan di akhir sebagai fallback terakhir agar browser tetap menampilkan jenis font serupa jika font khusus di urutan awal gagal dimuat."
    }
  }
];

async function run() {
  const modId = 'ba1383a2-219d-44ab-bf63-804d5a0f0902';
  console.log('🚀 Populating CSS Batch 2 lessons for module:', modId);

  // 1. Get Chapter ID for "CSS Tutorial"
  const chRes = await pool.query(`SELECT id, title FROM "Chapter" WHERE "moduleId" = $1 AND title = 'CSS Tutorial' LIMIT 1`, [modId]);
  if (chRes.rowCount === 0) {
    throw new Error('Chapter CSS Tutorial not found!');
  }
  const chapterId = chRes.rows[0].id;
  console.log(`📌 Using Chapter: ${chRes.rows[0].title} (${chapterId})`);

  // 2. Insert or update batch 2 lessons
  for (const l of batch2Lessons) {
    const contentJson = {
      theory: l.theory,
      code: l.code,
      quiz: l.quiz
    };

    // Upsert lesson
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

  console.log('\n🎉 ALL 6 CSS BATCH 2 LESSONS SUCCESSFULLY INSERTED/UPDATED!');
  await pool.end();
}

run().catch(console.error);
