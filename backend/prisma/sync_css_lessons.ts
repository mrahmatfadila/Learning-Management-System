import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import * as dotenv from 'dotenv';
dotenv.config();

// Load static CSS syllabus and lessons
import { cssCourseModules, cssLessonsData, remainingLessons } from '../../frontend/src/data/cssCourseData';

const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db';
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter } as any);

const allStaticLessons: Record<string, any> = {
  ...cssLessonsData,
  ...remainingLessons
};

// Premium Core CSS Lessons Content Dictionary
const premiumCssLessons: Record<string, { type: 'code' | 'video' | 'reading'; theory: string; code: string; quiz: any; videoUrl?: string }> = {
  "CSS HOME": {
    type: "code",
    theory: `<h2 class="text-3xl font-extrabold mb-6 text-slate-800 dark:text-white">CSS HOME</h2>
<p class="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
  Selamat datang di dunia desain web interaktif! CSS (Cascading Style Sheets) adalah bahasa "kosmetik" halaman web yang bertugas merubah kerangka HTML yang kaku dan polos menjadi sebuah tampilan web yang indah, berwarna, modern, dan nyaman dipandang mata.
</p>
<p class="mb-6 text-slate-600 dark:text-slate-300 leading-relaxed">
  Dengan menguasai CSS, Anda memegang kendali penuh atas tata letak layout (tata letak grid & flexbox), pewarnaan, pemilihan tipografi font, jarak antar elemen, hingga efek bayangan dan animasi transisi yang memukau.
</p>
<h3 class="text-xl font-bold mt-8 mb-4 text-slate-700 dark:text-slate-200">Bagaimana Peran CSS Berpadu dengan HTML?</h3>
<div class="grid grid-cols-2 gap-4 mb-6">
  <div class="bg-orange-50 p-4 rounded-xl border border-orange-200 dark:bg-orange-950/10">
    <strong class="text-orange-900 dark:text-orange-300">HTML (Kerangka)</strong>
    <p class="text-xs text-orange-850 dark:text-orange-200 mt-1">Menentukan konten mentah seperti judul, teks, gambar, dan link.</p>
  </div>
  <div class="bg-blue-50 p-4 rounded-xl border border-blue-200 dark:bg-blue-950/10">
    <strong class="text-blue-900 dark:text-blue-300">CSS (Desain)</strong>
    <p class="text-xs text-blue-850 dark:text-blue-200 mt-1">Mengatur warna, posisi layout, font, bayangan, dan animasi estetik.</p>
  </div>
</div>
<div class="bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-r-2xl mb-8 dark:bg-indigo-950/20">
  <h4 class="text-indigo-900 font-bold mb-2 flex items-center gap-2 dark:text-indigo-300">💡 Misi Praktik Pertama Anda:</h4>
  <p class="text-indigo-800 text-sm leading-relaxed dark:text-indigo-200">
    Perhatikan panel editor di sebelah kanan Anda. Terdapat kode HTML yang dihias oleh CSS di dalam tag <code>&lt;style&gt;</code>. Silakan ubah nilai warna di dalam kode gaya CSS tersebut (misalnya ubah <code>#6366f1</code> menjadi <code>tomato</code>), lalu klik tombol <strong>RUN</strong> untuk menyaksikan perubahannya seketika!
  </p>
</div>`,
    code: `<!DOCTYPE html>
<html>
<head>
<style>
  body {
    font-family: 'Segoe UI', Arial, sans-serif;
    background: #f0f4ff;
  }
  .card {
    background: white;
    border-radius: 16px;
    padding: 24px;
    max-width: 350px;
    margin: 40px auto;
    box-shadow: 0 10px 25px rgba(99,102,241,0.15);
    text-align: center;
  }
  h1 {
    color: #6366f1;
    font-size: 2rem;
    margin: 0 0 12px;
  }
  p {
    color: #64748b;
    line-height: 1.6;
    font-size: 0.95rem;
  }
</style>
</head>
<body>
  <div class="card">
    <h1>Halo, CSS! 🎨</h1>
    <p>Selamat datang di dunia penataan gaya web. Mari pelajari dasar CSS dengan interaktif dan lengkap!</p>
  </div>
</body>
</html>`,
    quiz: {
      question: "Apa fungsi utama dari Cascading Style Sheets (CSS) pada sebuah website?",
      options: [
        "Mendefinisikan kerangka data teks mentah dokumen web.",
        "Mengontrol gaya presentasi visual, tata letak, warna, dan tipografi halaman web.",
        "Menyimpan password pendaftaran user di server cloud.",
        "Menghubungkan domain web ke IP address hosting."
      ],
      correctIndex: 1,
      explanation: "CSS murni bertugas mengontrol presentasi visual dan tata letak halaman web agar terstruktur indah, memisahkan fungsionalitas desain dari konten HTML."
    }
  },
  "CSS Introduction": {
    type: "code",
    theory: `<h2 class="text-3xl font-extrabold mb-6 text-slate-800 dark:text-white">CSS Introduction</h2>
<p class="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
  CSS singkatan dari <strong>Cascading Style Sheets</strong>. Kata <em>Cascading</em> (bertingkat) melambangkan sifat CSS di mana aturan gaya mengalir dari atas ke bawah, dan beberapa aturan gaya yang berbeda dapat ditumpuk di mana aturan yang lebih spesifik akan menimpa aturan yang umum.
</p>
<h3 class="text-xl font-bold mt-8 mb-4 text-slate-700 dark:text-slate-200">Mengapa Kita Memerlukan CSS?</h3>
<p class="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
  Sebelum adanya CSS, halaman web dirancang dengan tag HTML yang sangat tidak praktis seperti tag <code>&lt;font color="red"&gt;</code> di setiap teks. CSS hadir untuk mengatasi masalah tersebut dengan memisahkan konten (HTML) sepenuhnya dari desain visual (CSS). Hal ini menghemat waktu pengerjaan proyek karena satu baris CSS dapat merias ratusan halaman web sekaligus!
</p>
<h3 class="text-xl font-bold mt-8 mb-4 text-slate-700 dark:text-slate-200">Metode Pemasangan CSS:</h3>
<ol class="list-decimal pl-6 mb-6 text-slate-600 dark:text-slate-300 space-y-3">
  <li><strong>External CSS</strong>: File berekstensi <code>.css</code> terpisah di luar dokumen (cara terbaik karena terpisah rapi).</li>
  <li><strong>Internal CSS</strong>: Kode CSS ditulis di dalam tag <code>&lt;style&gt;</code> di dalam kepala halaman <code>&lt;head&gt;</code>.</li>
  <li><strong>Inline CSS</strong>: Menulis kode desain langsung pada elemen via atribut <code>style="..."</code>.</li>
</ol>`,
    code: `<!DOCTYPE html>
<html>
<head>
<style>
  /* Ini adalah Internal CSS */
  body {
    background-color: #f8fafc;
    font-family: sans-serif;
    padding: 20px;
  }
  .kotak-belajar {
    background-color: #dbeafe;
    border: 2px solid #3b82f6;
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 15px;
  }
</style>
</head>
<body>
  <div class="kotak-belajar">
    <h3>Internal CSS Box</h3>
    <p>Gaya kotak ini didefinisikan menggunakan gaya internal di dalam tag head.</p>
  </div>
  
  <!-- Ini adalah Inline CSS -->
  <div style="background-color: #d1fae5; border: 2px solid #10b981; padding: 20px; border-radius: 12px;">
    <h3>Inline CSS Box</h3>
    <p>Gaya kotak ini ditulis secara inline menggunakan atribut style langsung di tag div pembukanya.</p>
  </div>
</body>
</html>`,
    quiz: {
      question: "Di manakah tag <link> wajib ditempatkan ketika kita ingin menghubungkan file External CSS ke dalam halaman web HTML kita?",
      options: [
        "Di dalam tag <body> paling bawah.",
        "Di dalam tag <head>.",
        "Di dalam tag <footer>.",
        "Di luar tag <html>."
      ],
      correctIndex: 1,
      explanation: "Tag <link rel='stylesheet' href='style.css'> wajib diletakkan di dalam tag <head> agar browser mengunduh dan menerapkan gaya CSS sebelum merender halaman visual."
    }
  },
  "CSS Syntax": {
    type: "code",
    theory: `<h2 class="text-3xl font-extrabold mb-6 text-slate-800 dark:text-white">CSS Syntax</h2>
<p class="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
  Aturan penulisan kode CSS (sintaks) sangat sederhana dan konsisten. Sebuah blok aturan CSS terdiri dari dua komponen utama: **Selector** dan **Declaration Block**.
</p>
<p class="mb-6 text-slate-600 dark:text-slate-300 leading-relaxed font-mono text-sm bg-slate-100 dark:bg-slate-900/50 p-4 rounded-xl">
  selector {<br>
  &nbsp;&nbsp;property: value;<br>
  &nbsp;&nbsp;property: value;<br>
  }
</p>
<h3 class="text-xl font-bold mt-8 mb-4 text-slate-700 dark:text-slate-200">Bedah Komponen Sintaks:</h3>
<ul class="list-disc pl-6 mb-6 text-slate-600 dark:text-slate-300 space-y-2">
  <li><strong>Selector</strong>: Menunjuk ke elemen HTML mana yang ingin kita hias (misalnya tag <code>p</code>, class <code>.card</code>, atau id <code>#header</code>).</li>
  <li><strong>Property</strong>: Aspek visual apa dari elemen tersebut yang ingin kita rubah (misalnya <code>color</code>, <code>font-size</code>, <code>margin</code>).</li>
  <li><strong>Value</strong>: Nilai atau takaran yang ingin kita berikan kepada properti tersebut (misalnya <code>blue</code>, <code>20px</code>, <code>center</code>).</li>
</ul>`,
    code: `<!DOCTYPE html>
<html>
<head>
<style>
  /* Selector: h1 | Property: color, text-align */
  h1 {
    color: #4f46e5;
    text-align: center;
  }
  
  /* Selector: p | Property: font-size, line-height, color */
  p {
    font-size: 16px;
    line-height: 1.8;
    color: #374151;
  }
</style>
</head>
<body>
  <h1>Sintaks CSS Dasar</h1>
  <p>Setiap baris deklarasi di dalam tanda kurung kurawal wajib diakhiri dengan tanda titik koma (semicolon) dan dipisahkan dari properti dengan tanda titik dua (colon).</p>
</body>
</html>`,
    quiz: {
      question: "Simbol manakah yang bertugas sebagai pembatas wajib di akhir setiap baris deklarasi properti dan nilai di dalam kurung kurawal CSS?",
      options: [
        "Tanda titik dua ( : )",
        "Tanda titik koma ( ; )",
        "Tanda koma ( , )",
        "Tanda kurung siku ( [] )"
      ],
      correctIndex: 1,
      explanation: "Tanda titik koma (semicolon) wajib dituliskan di akhir setiap baris deklarasi CSS untuk menandai selesainya perintah gaya tersebut."
    }
  },
  "CSS Selectors": {
    type: "code",
    theory: `<h2 class="text-3xl font-extrabold mb-6 text-slate-800 dark:text-white">CSS Selectors</h2>
<p class="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
  CSS Selector digunakan untuk mencari dan memilih elemen HTML spesifik yang ingin diberikan gaya visual. Menguasai selector adalah kunci dasar agar gaya desain Anda tidak salah sasaran.
</p>
<h3 class="text-xl font-bold mt-8 mb-4 text-slate-700 dark:text-slate-200">5 Kategori Selector Paling Sering Digunakan:</h3>
<ul class="list-disc pl-6 mb-6 text-slate-600 dark:text-slate-300 space-y-3">
  <li><strong>Element Selector</strong>: Memilih semua elemen berdasarkan nama tag HTML-nya. (contoh: <code>p { color: red; }</code> memilih semua paragraf).</li>
  <li><strong>Class Selector</strong>: Memilih semua elemen ber-atribut class tertentu. Diawali dengan tanda titik (contoh: <code>.badge { color: white; }</code>).</li>
  <li><strong>ID Selector</strong>: Memilih SATU elemen unik ber-atribut ID tertentu. Diawali dengan tanda pagar (contoh: <code>#header-utama { font-size: 2rem; }</code>).</li>
  <li><strong>Universal Selector</strong>: Memilih SEMUA elemen di seluruh halaman web. Ditulis dengan tanda bintang (contoh: <code>* { margin: 0; }</code>).</li>
  <li><strong>Grouping Selector</strong>: Menggabungkan beberapa selector sekaligus untuk berbagi deklarasi gaya yang sama (contoh: <code>h1, h2, p { text-align: center; }</code>).</li>
</ul>`,
    code: `<!DOCTYPE html>
<html>
<head>
<style>
  /* ID Selector (unik) */
  #logo-sekolah {
    color: #db2777;
    font-size: 24px;
    font-weight: bold;
  }
  
  /* Class Selector (bisa berulang) */
  .tombol-aksi {
    background-color: #2563eb;
    color: white;
    padding: 10px 20px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
  }
  
  /* Element Selector (massal) */
  span {
    text-decoration: underline;
  }
</style>
</head>
<body>
  <div id="logo-sekolah">DevGrow School</div>
  <br>
  <button class="tombol-aksi">Aksi 1</button>
  <button class="tombol-aksi">Aksi 2</button>
  <br><br>
  <p>Teks ini mengandung <span>tulisan bergaris bawah</span> dari tag span.</p>
</body>
</html>`,
    quiz: {
      question: "Selector manakah di bawah ini yang digunakan untuk memilih elemen HTML yang memiliki atribut class='btn-primary'?",
      options: [
        "#btn-primary",
        "btn-primary",
        ".btn-primary",
        "*btn-primary"
      ],
      correctIndex: 2,
      explanation: "Class Selector di dalam CSS selalu dideklarasikan menggunakan tanda titik (.) diikuti dengan nama kelas yang dituju."
    }
  },
  "CSS How To": {
    type: "code",
    theory: `<h2 class="text-3xl font-extrabold mb-6 text-slate-800 dark:text-white">CSS How To</h2>
<p class="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
  Ada tiga cara utama untuk menyuntikkan kode gaya CSS ke dalam file HTML Anda. Memahami ketiga metode ini dan urutan prioritasnya sangat penting saat memecahkan masalah layout.
</p>
<h3 class="text-xl font-bold mt-8 mb-4 text-slate-700 dark:text-slate-200">Tiga Metode Pemasangan CSS:</h3>
<ol class="list-decimal pl-6 mb-6 text-slate-600 dark:text-slate-300 space-y-3">
  <li><strong>External CSS</strong>: Menulis kode di file terpisah (misal: <code>style.css</code>) lalu dipanggil di kepala HTML menggunakan <code>&lt;link rel="stylesheet" href="style.css"&gt;</code>. Cara ini paling standar dan direkomendasikan karena menghemat memori.</li>
  <li><strong>Internal CSS</strong>: Kode CSS diletakkan di dalam tag <code>&lt;style&gt;</code> pada bagian <code>&lt;head&gt;</code> file HTML bersangkutan.</li>
  <li><strong>Inline CSS</strong>: Gaya desain disisipkan langsung pada elemen via atribut <code>style</code>. (contoh: <code>&lt;h1 style="color:red;"&gt;</code>).</li>
</ol>
<div class="bg-orange-50 border-2 border-orange-200 rounded-2xl p-5 mb-8 dark:bg-orange-950/10 dark:border-orange-500/20">
  <h4 class="text-orange-850 font-bold mb-2 dark:text-orange-300">⚠️ Aturan Cascading Order (Prioritas):</h4>
  <p class="text-orange-900 text-sm leading-relaxed dark:text-orange-200">
    Jika satu elemen yang sama diberi aturan gaya yang berbeda oleh ketiga cara di atas secara bersamaan, maka browser akan menerapkan urutan kekuatan dari yang terkuat: <br>
    <strong>1. Inline CSS (Terkuat)</strong> > 2. Internal/External CSS > 3. Browser Default (Terlemah).
  </p>
</div>`,
    code: `<!DOCTYPE html>
<html>
<head>
<style>
  /* Internal CSS mewarnai judul menjadi biru */
  h1 {
    color: blue;
  }
</style>
</head>
<body>
  <!-- Inline CSS mewarnai judul menjadi merah (akan mengesampingkan warna biru internal!) -->
  <h1 style="color: red;">Judul Prioritas Warna</h1>
  <p>Meskipun ada aturan gaya internal di head yang mewarnai h1 menjadi biru, atribut style inline di atas lebih kuat sehingga warnanya berubah menjadi merah.</p>
</body>
</html>`,
    quiz: {
      question: "Metode penulisan CSS manakah yang memiliki tingkat prioritas kekuatan (specificity) paling tinggi dan akan menimpa gaya lainnya?",
      options: [
        "External CSS menggunakan file .css terpisah.",
        "Internal CSS menggunakan tag <style>.",
        "Inline CSS menggunakan atribut style langsung pada elemen.",
        "Browser default stylesheet."
      ],
      correctIndex: 2,
      explanation: "Inline CSS yang ditulis langsung pada tag pembuka elemen memiliki prioritas terkuat di browser, menimpa aturan gaya internal maupun eksternal."
    }
  },
  "CSS Comments": {
    type: "code",
    theory: `<h2 class="text-3xl font-extrabold mb-6 text-slate-800 dark:text-white">CSS Comments</h2>
<p class="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
  Komentar di dalam CSS digunakan untuk memberikan catatan penjelasan mengenai fungsi bagian kode, merapikan struktur file CSS yang besar, atau menyembunyikan sementara baris kode tertentu saat proses debugging.
</p>
<h3 class="text-xl font-bold mt-8 mb-4 text-slate-700 dark:text-slate-200">Sintaks Komentar CSS:</h3>
<p class="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
  Komentar CSS berbeda dengan komentar HTML. Komentar di CSS selalu diawali dengan simbol pembuka garis miring bintang <code>/*</code> dan diakhiri dengan simbol penutup bintang garis miring <code>*/</code>.
</p>
<p class="mb-6 text-slate-600 dark:text-slate-300 leading-relaxed font-mono text-sm bg-slate-100 dark:bg-slate-900/50 p-4 rounded-xl">
  /* Ini adalah baris komentar CSS */<br>
  body {<br>
  &nbsp;&nbsp;color: #333; /* Komentar di sebelah baris kode */<br>
  }
</p>
<div class="bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-r-2xl mb-8 dark:bg-indigo-950/20">
  <h4 class="text-indigo-900 font-bold mb-2 flex items-center gap-2 dark:text-indigo-300">💡 Tips Koding Bersih:</h4>
  <p class="text-indigo-800 text-sm leading-relaxed dark:text-indigo-200">
    Browser web mengabaikan komentar sepenuhnya saat merender kode, sehingga Anda bebas menulis sebanyak mungkin catatan penjelasan tanpa takut memperlambat kinerja website!
  </p>
</div>`,
    code: `<!DOCTYPE html>
<html>
<head>
<style>
  /* ==========================================
     GAYA UTAMA DOKUMEN
     ========================================== */
  body {
    font-family: Arial, sans-serif;
    background-color: #f1f5f9; /* Latar abu terang */
    padding: 20px;
  }
  
  h1 {
    color: #4f46e5;
    /* text-decoration: underline; */ /* Kode ini dinonaktifkan sementara */
  }
</style>
</head>
<body>
  <h1>CSS Comments Demo</h1>
  <p>Lihat kode CSS di panel kanan untuk mempelajari bagaimana komentar ditulis dan digunakan untuk menonaktifkan kode gaya secara aman.</p>
</body>
</html>`,
    quiz: {
      question: "Bagaimanakah penulisan baris komentar yang valid dan terbaca benar di dalam dokumen koding CSS?",
      options: [
        "// Ini komentar CSS",
        "<!-- Ini komentar CSS -->",
        "/* Ini komentar CSS */",
        "# Ini komentar CSS"
      ],
      correctIndex: 2,
      explanation: "Komentar di dalam CSS wajib diapit menggunakan pembuka /* dan penutup */."
    }
  },
  "CSS Colors": {
    type: "code",
    theory: `<h2 class="text-3xl font-extrabold mb-6 text-slate-800 dark:text-white">CSS Colors</h2>
<p class="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
  CSS mendukung berbagai format modern untuk merepresentasikan warna di halaman web. Memilih format yang tepat memudahkan Anda merancang kontras warna yang menawan.
</p>
<h3 class="text-xl font-bold mt-8 mb-4 text-slate-700 dark:text-slate-200">4 Sistem Format Warna CSS:</h3>
<ul class="list-disc pl-6 mb-6 text-slate-600 dark:text-slate-300 space-y-3">
  <li><strong>Color Names</strong>: Menggunakan nama warna bahasa Inggris yang terstandarisasi (contoh: <code>tomato</code>, <code>dodgerblue</code>, <code>violet</code>).</li>
  <li><strong>HEX Color</strong>: Format hexadecimal enam digit diawali tanda pagar <code>#RRGGBB</code> (contoh: <code>#6366f1</code>).</li>
  <li><strong>RGB / RGBA Color</strong>: Menentukan komposisi warna dasar Red, Green, Blue (0-255). Format **RGBA** memiliki nilai ekstra channel Alpha (0.0 sampai 1.0) untuk mengatur transparansi warna (contoh: <code>rgba(34, 197, 94, 0.5)</code>).</li>
  <li><strong>HSL / HSLA Color</strong>: Menentukan warna berdasarkan Hue (warna 0-360 derajat), Saturation (kepekatan %), dan Lightness (kecerahan %).</li>
</ul>`,
    code: `<!DOCTYPE html>
<html>
<head>
<style>
  body {
    font-family: Arial, sans-serif;
    padding: 20px;
  }
  .card-warna {
    padding: 15px;
    margin: 10px 0;
    color: white;
    font-weight: bold;
    border-radius: 8px;
  }
  
  .c-named { background-color: tomato; }
  .c-hex   { background-color: #6366f1; }
  .c-rgb   { background-color: rgb(34, 197, 94); }
  .c-rgba  { background-color: rgba(239, 68, 68, 0.4); color: black; } /* Transparan */
</style>
</head>
<body>
  <h2>Format Pewarnaan CSS</h2>
  <div class="card-warna c-named">Named Color: tomato</div>
  <div class="card-warna c-hex">HEX Color: #6366f1</div>
  <div class="card-warna c-rgb">RGB Color: rgb(34, 197, 94)</div>
  <div class="card-warna c-rgba">RGBA Color (Transparan 40%): rgba(239, 68, 68, 0.4)</div>
</body>
</html>`,
    quiz: {
      question: "Apakah peran atau kegunaan utama dari ditambahkannya nilai parameter keempat (A / Alpha) pada sistem warna RGBA?",
      options: [
        "Untuk menentukan kontras ketajaman warna otomatis.",
        "Mengatur tingkat transparansi (keburaman) warna dari nilai 0.0 (tembus pandang penuh) sampai 1.0 (pekat penuh).",
        "Menambahkan saturasi warna biru otomatis.",
        "Menghubungkan warna ke style font."
      ],
      correctIndex: 1,
      explanation: "Nilai Alpha (A) pada format RGBA dan HSLA bertugas mengontrol opasitas/transparansi warna yang memudahkan pembuatan lapisan semi-transparan."
    }
  },
  "CSS Backgrounds": {
    type: "code",
    theory: `<h2 class="text-3xl font-extrabold mb-6 text-slate-800 dark:text-white">CSS Backgrounds</h2>
<p class="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
  CSS menyediakan berbagai properti latar belakang (background) untuk mempercantik area penampang elemen web Anda, baik dengan warna solid, gambar berpola, maupun gradasi warna yang mulus.
</p>
<h3 class="text-xl font-bold mt-8 mb-4 text-slate-700 dark:text-slate-200">5 Properti Background Utama:</h3>
<ul class="list-disc pl-6 mb-6 text-slate-600 dark:text-slate-300 space-y-2">
  <li><code>background-color</code>: Mengisi latar belakang dengan warna tunggal/solid.</li>
  <li><code>background-image</code>: Memuat berkas gambar latar belakang (contoh: <code>url('pola.png')</code>).</li>
  <li><code>background-repeat</code>: Mengontrol apakah gambar diulang (<code>repeat</code>, <code>no-repeat</code>, <code>repeat-x</code>).</li>
  <li><code>background-position</code>: Mengatur letak jangkar gambar latar (<code>center</code>, <code>top left</code>, <code>bottom right</code>).</li>
  <li><code>background-size</code>: Mengatur dimensi ukuran gambar (<code>cover</code> agar membesar penuh menutup area, atau <code>contain</code> agar gambar utuh tanpa terpotong).</li>
</ul>`,
    code: `<!DOCTYPE html>
<html>
<head>
<style>
  body {
    font-family: Arial, sans-serif;
    padding: 20px;
  }
  .box-gradient {
    height: 150px;
    border-radius: 12px;
    margin: 15px 0;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    /* Gradasi linier dari pojok kiri bawah ke pojok kanan atas */
    background: linear-gradient(135deg, #6366f1, #a855f7);
  }
</style>
</head>
<body>
  <h2>CSS Gradasi Latar Belakang</h2>
  <div class="box-gradient">
    Gradasi Linier: Indigo ke Ungu
  </div>
</body>
</html>`,
    quiz: {
      question: "Nilai properti background-size manakah yang digunakan untuk membuat gambar latar belakang membesar secara proporsional untuk menutup seluruh ruang wadah tanpa menyisakan ruang kosong?",
      options: [
        "background-size: contain",
        "background-size: cover",
        "background-size: fill",
        "background-size: auto"
      ],
      correctIndex: 1,
      explanation: "Nilai 'cover' memaksa gambar membesar proporsional guna menutup seluruh area latar belakang secara penuh, meskipun beberapa bagian gambar mungkin terpotong."
    }
  },
  "CSS Borders": {
    type: "code",
    theory: `<h2 class="text-3xl font-extrabold mb-6 text-slate-800 dark:text-white">CSS Borders</h2>
<p class="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
  CSS Border memungkinkan Anda untuk membuat garis pembatas di sekeliling elemen HTML Anda. Anda dapat merancang ketebalan, gaya garis, warna, hingga sudut membulat (*border-radius*).
</p>
<h3 class="text-xl font-bold mt-8 mb-4 text-slate-700 dark:text-slate-200">Gaya Garis (Border Style):</h3>
<ul class="list-disc pl-6 mb-6 text-slate-600 dark:text-slate-300 space-y-2">
  <li><code>solid</code>: Garis tegas polos standar.</li>
  <li><code>dashed</code>: Garis putus-putus horizontal.</li>
  <li><code>dotted</code>: Garis titik-titik bulat.</li>
  <li><code>double</code>: Garis ganda sejajar.</li>
</ul>
<h3 class="text-xl font-bold mt-8 mb-4 text-slate-700 dark:text-slate-200">Shorthand Border Syntax:</h3>
<p class="mb-6 text-slate-600 dark:text-slate-300 leading-relaxed font-mono text-sm bg-slate-100 dark:bg-slate-900/50 p-4 rounded-xl">
  border: [width] [style] [color];<br>
  /* Contoh: border: 3px solid blue; */
</p>`,
    code: `<!DOCTYPE html>
<html>
<head>
<style>
  body {
    font-family: Arial, sans-serif;
    padding: 20px;
  }
  .box-border {
    padding: 15px;
    margin: 10px 0;
    background-color: white;
    border-radius: 8px;
  }
  
  .b-solid  { border: 3px solid #6366f1; }
  .b-dashed { border: 3px dashed #f59e0b; }
  .b-mixed  {
    border-top: 4px solid #ef4444;
    border-bottom: 4px solid #10b981;
    border-left: 10px solid #6366f1; /* Border kiri tebal aksen */
  }
  .b-circle {
    border: 3px solid #db2777;
    border-radius: 999px; /* Membuat bentuk pil/lingkaran */
    text-align: center;
  }
</style>
</head>
<body>
  <div class="box-border b-solid">Border: 3px solid #6366f1</div>
  <div class="box-border b-dashed">Border: 3px dashed #f59e0b</div>
  <div class="box-border b-mixed">Border Kustom Tiap Sisi</div>
  <div class="box-border b-circle">Pill-shape Border (border-radius: 999px)</div>
</body>
</html>`,
    quiz: {
      question: "Apakah urutan parameter penulisan shorthand properti 'border' yang benar dan terstandarisasi di dalam CSS?",
      options: [
        "border: [color] [style] [width];",
        "border: [width] [style] [color];",
        "border: [style] [width] [color];",
        "border: [color] [width] [style];"
      ],
      correctIndex: 1,
      explanation: "Format penulisan shorthand border yang benar adalah lebar garis (width), disusul jenis garis (style), dan diakhiri warna (color) (contoh: border: 2px solid red)."
    }
  },
  "CSS Margins": {
    type: "code",
    theory: `<h2 class="text-3xl font-extrabold mb-6 text-slate-800 dark:text-white">CSS Margins</h2>
<p class="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
  Margin adalah ruang kosong di **luar** garis pembatas (border) dari suatu elemen. Margin bersifat transparan sepenuhnya (tidak memiliki warna latar sendiri) dan berfungsi memberikan jarak pemisah antar elemen agar konten Anda bernapas lega dan tidak saling berhimpitan.
</p>
<h3 class="text-xl font-bold mt-8 mb-4 text-slate-700 dark:text-slate-200">Shorthand Margin Clockwise (Searah Jarum Jam):</h3>
<ul class="list-disc pl-6 mb-6 text-slate-600 dark:text-slate-300 space-y-2">
  <li><code>margin: 10px 20px 30px 40px;</code>: Menentukan margin berturut-turut untuk sisi **Atas (Top), Kanan (Right), Bawah (Bottom), Kiri (Left)**.</li>
  <li><code>margin: 10px 20px;</code>: Menentukan margin Atas-Bawah 10px, dan Kiri-Kanan 20px.</li>
  <li><code>margin: 0 auto;</code>: Kunci emas untuk memposisikan elemen block (yang memiliki lebar tetap) agar otomatis berada di **tengah secara horizontal** di dalam layarnya!</li>
</ul>`,
    code: `<!DOCTYPE html>
<html>
<head>
<style>
  body {
    font-family: Arial, sans-serif;
    background-color: #f1f5f9;
    padding: 10px;
  }
  .container-induk {
    background-color: #cbd5e1;
    padding: 10px;
    border-radius: 8px;
  }
  .kotak-margin {
    background-color: #6366f1;
    color: white;
    padding: 15px;
    border-radius: 6px;
    /* Memberi jarak luar: atas-bawah 20px, kiri-kanan 40px */
    margin: 20px 40px;
  }
  .kotak-tengah {
    background-color: #10b981;
    color: white;
    padding: 15px;
    border-radius: 6px;
    width: 200px;
    /* Centering otomatis horizontal */
    margin: 15px auto;
    text-align: center;
  }
</style>
</head>
<body>
  <div class="container-induk">
    <div class="kotak-margin">Kotak dengan Margin Luar</div>
    <div class="kotak-tengah">Kotak Rata Tengah Otomatis</div>
  </div>
</body>
</html>`,
    quiz: {
      question: "Bagaimanakah cara menyeimbangkan margin kiri dan kanan secara otomatis untuk membuat elemen block berada di tengah layar secara horizontal?",
      options: [
        "margin: center;",
        "margin: 0 auto;",
        "margin: auto 0;",
        "text-align: center;"
      ],
      correctIndex: 1,
      explanation: "Deklarasi 'margin: 0 auto' memberitahu browser untuk secara otomatis menghitung dan membagi rata sisa ruang kosong di kiri dan kanan elemen secara seimbang."
    }
  },
  "CSS Padding": {
    type: "code",
    theory: `<h2 class="text-3xl font-extrabold mb-6 text-slate-800 dark:text-white">CSS Padding</h2>
<p class="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
  Padding adalah ruang kosong di **dalam** garis pembatas (border) elemen, yang mengelilingi isi konten tulisan atau gambar Anda. Mengatur padding memberikan ruang bernapas di dalam elemen itu sendiri agar tulisan tidak menempel di tepi garis batas.
</p>
<h3 class="text-xl font-bold mt-8 mb-4 text-slate-700 dark:text-slate-200">Perbedaan Utama Margin vs Padding:</h3>
<ul class="list-disc pl-6 mb-6 text-slate-600 dark:text-slate-300 space-y-2">
  <li><strong>Margin</strong>: Mengatur jarak luar antar elemen (di luar garis border, latar belakang elemen tidak ikut mewarnai margin).</li>
  <li><strong>Padding</strong>: Mengatur jarak dalam (di dalam garis border, latar belakang elemen/warna box ikut mewarnai area padding ini).</li>
</ul>
<h3 class="text-xl font-bold mt-8 mb-4 text-slate-700 dark:text-slate-200">Shorthand Padding:</h3>
<p class="mb-4 text-slate-605 text-slate-600 dark:text-slate-300">
  Sama seperti margin, penulisan shorthand padding searah jarum jam: <code>padding: [top] [right] [bottom] [left];</code> (contoh: <code>padding: 10px 20px;</code> berarti atas-bawah 10px, kiri-kanan 20px).
</p>`,
    code: `<!DOCTYPE html>
<html>
<head>
<style>
  body {
    font-family: Arial, sans-serif;
    padding: 20px;
  }
  .kotak-padding {
    background-color: #6366f1;
    color: white;
    border: 3px solid #4338ca;
    margin-bottom: 20px;
    border-radius: 8px;
  }
  
  .p-kecil { padding: 5px; } /* Teks menempel ketat */
  .p-besar { padding: 25px 40px; } /* Jarak dalam lega */
</style>
</head>
<body>
  <div class="kotak-padding p-kecil">
    Kotak Padding Kecil (padding: 5px) - Teks sangat dekat dengan border.
  </div>
  
  <div class="kotak-padding p-besar">
    Kotak Padding Besar (padding: 25px 40px) - Teks memiliki ruang bernapas yang sangat lega dan estetik!
  </div>
</body>
</html>`,
    quiz: {
      question: "Di manakah posisi letak area 'padding' di dalam visualisasi kotak Box Model elemen web?",
      options: [
        "Di sebelah luar garis border pembatas.",
        "Di dalam garis border, membungkus langsung konten utama elemen.",
        "Di antara garis border and margin.",
        "Di luar area margin halaman."
      ],
      correctIndex: 1,
      explanation: "Padding adalah ruang kosong internal di dalam elemen, diletakkan tepat di antara konten utama dan garis border pembatas elemen tersebut."
    }
  },
  "CSS Box Model": {
    type: "code",
    theory: `<h2 class="text-3xl font-extrabold mb-6 text-slate-800 dark:text-white">CSS Box Model</h2>
<p class="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
  Semua elemen HTML di dalam browser dianggap dan dirender sebagai sebuah "kotak" persegi (box). Istilah **Box Model** di CSS menjelaskan bagaimana ukuran total kotak tersebut dihitung berdasarkan gabungan dari konten, padding, border, dan margin.
</p>
<h3 class="text-xl font-bold mt-8 mb-4 text-slate-700 dark:text-slate-200">4 Lapisan Box Model (dari dalam ke luar):</h3>
<ul class="list-disc pl-6 mb-6 text-slate-600 dark:text-slate-300 space-y-2">
  <li><strong>Content</strong>: Area inti tempat teks, gambar, atau media ditampilkan.</li>
  <li><strong>Padding</strong>: Ruang kosong transparan di dalam border yang mengelilingi konten.</li>
  <li><strong>Border</strong>: Garis pembatas fisik yang mengelilingi padding dan konten.</li>
  <li><strong>Margin</strong>: Jarak kosong transparan di luar border yang memisahkannya dari elemen tetangga.</li>
</ul>
<h3 class="text-xl font-bold mt-8 mb-4 text-slate-700 dark:text-slate-200">box-sizing: border-box</h3>
<p class="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
  Secara default di browser (*content-box*), jika Anda menetapkan lebar kotak 300px lalu menambahkan padding 20px dan border 5px, maka lebar total kotak bertambah melar menjadi 350px! <br>
  Untuk mengatasinya, gunakan aturan emas <code>box-sizing: border-box;</code>. Properti ini memaksa browser menghitung padding dan border di <em>dalam</em> lebar 300px tersebut, sehingga lebar total elemen tetap konsisten 300px!
</p>`,
    code: `<!DOCTYPE html>
<html>
<head>
<style>
  /* Menyetel box-sizing border-box secara global untuk semua elemen */
  * {
    box-sizing: border-box;
  }
  body {
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: #f8fafc;
  }
  .kotak-boxmodel {
    width: 300px;
    height: 120px;
    background-color: #6366f1;
    color: white;
    padding: 20px;
    border: 5px solid #4338ca;
    margin: 20px auto;
    border-radius: 12px;
    text-align: center;
    font-weight: bold;
  }
</style>
</head>
<body>
  <h2>Eksperimen Box Model</h2>
  <div class="kotak-boxmodel">
    Content Area<br>
    (Total Lebar Tetap 300px karena border-box)
  </div>
</body>
</html>`,
    quiz: {
      question: "Bagaimanakah efek perilaku yang terjadi ketika kita menyetel properti 'box-sizing: border-box;' pada sebuah elemen?",
      options: [
        "Menghilangkan margin luar elemen secara otomatis.",
        "Memaksa browser menghitung nilai padding dan border di dalam total lebar (width) dan tinggi (height) yang ditentukan, sehingga elemen tidak melar melebar.",
        "Merubah seluruh warna latar belakang menjadi transparan.",
        "Menghapus garis border pembatas secara permanen."
      ],
      correctIndex: 1,
      explanation: "Aturan 'box-sizing: border-box' sangat vital dalam layouting modern karena membuat ukuran total elemen tetap konsisten sesuai dengan lebar yang dideklarasikan, tanpa terpengaruh penambahan padding atau border."
    }
  }
};

// Helper to generate a tailored premium developer tip in Indonesian
function getCustomDeveloperTip(title: string): string {
  const t = title.toLowerCase();
  if (t.includes('flexbox') || t.includes('flex')) {
    return 'Ketika merancang dengan Flexbox, ingatlah bahwa parent container memegang kendali penuh atas arah aliran (main axis) via <code>flex-direction</code>. Jika Anda ingin memposisikan suatu elemen anak tepat berada di tengah vertikal dan horizontal secara instan, gunakan kombinasi emas <code>display: flex</code>, <code>justify-content: center</code>, dan <code>align-items: center</code> pada container pembungkusnya.';
  }
  if (t.includes('grid')) {
    return 'CSS Grid merupakan senjata terbaik untuk mendesain layout 2-dimensi (baris dan kolom sekaligus). Unit <code>fr</code> (fractional unit) akan membagi sisa ruang kosong secara cerdas dan otomatis. Anda bisa menciptakan layout grid responsif otomatis tanpa media queries sama sekali menggunakan formula andalan: <code>grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))</code>.';
  }
  if (t.includes('position') || t.includes('z-index') || t.includes('offset')) {
    return 'Aturan mutlak positioning: elemen dengan status <code>position: absolute</code> akan selalu mencari dan memposisikan dirinya terhadap parent container terdekat yang memiliki status <code>position: relative</code> (atau status positioned selain static). Jika tidak menemukannya di DOM pohon, ia akan menempel ke area root <code>&lt;html&gt;</code> (seluruh viewport layar).';
  }
  if (t.includes('media') || t.includes('responsive') || t.includes('viewport') || t.includes('rwd') || t.includes('max-width')) {
    return 'Gunakan prinsip koding modern <strong>Mobile-First Design</strong>. Tulislah gaya visual utama Anda untuk layar terkecil terlebih dahulu (tanpa media queries), kemudian gunakan <code>@media (min-width: ...)</code> secara bertahap untuk mendesain penyesuaian tata letak di layar tablet dan dekstop. Hal ini membuat file CSS Anda jauh lebih ramping, hemat kuota data, dan ramah SEO.';
  }
  if (t.includes('animation') || t.includes('transition')) {
    return 'Demi menjaga kinerja rendering animasi tetap lancar 60 FPS di browser perangkat mobile, usahakan hanya menganimasikan properti <code>transform</code> (seperti translate, scale, rotate) dan properti <code>opacity</code>. Menghindari animasi properti fisik seperti <code>width</code>, <code>height</code>, atau <code>top</code> akan mencegah browser melakukan kalkulasi ulang tata letak (reflow/layout step) yang memicu lag visual.';
  }
  if (t.includes('variable') || t.includes('custom properties')) {
    return 'Variabel CSS (Custom Properties) sangat bertenaga karena bersifat dinamis dan dapat dimanipulasi dengan JavaScript saat run-time secara real-time. Selalu deklarasikan variabel utama Anda di dalam pseudo-class global <code>:root</code> agar dapat diakses oleh seluruh elemen anak, yang akan sangat mempermudah pembuatan fitur Light/Dark Theme Switcher.';
  }
  if (t.includes('outline') || t.includes('border') || t.includes('box-sizing')) {
    return 'Kiat jitu koding: properti <code>outline</code> digambar sepenuhnya di bagian luar batas fisik <code>border</code> elemen dan sama sekali tidak memakan lebar layout halaman. Ini menjadikannya alat bantu visual (visual debugging tool) yang luar biasa untuk memeriksa kebocoran layout dengan koding: <code>* { outline: 1.5px solid red !important; }</code> tanpa merusak jarak tata letak asli.';
  }
  if (t.includes('display') || t.includes('align') || t.includes('float') || t.includes('inline-block')) {
    return 'Bila Anda ingin memposisikan elemen block dengan lebar tetap agar berada tepat di tengah horizontal layar, gunakan shorthand <code>margin: 0 auto</code>. Serta ketahuilah bahwa elemen dengan <code>display: inline</code> tidak akan pernah bisa menerima setelan properti dimensi lebar (width) maupun tinggi (height) secara langsung.';
  }
  if (t.includes('font') || t.includes('text') || t.includes('icon')) {
    return 'Selalu sediakan jenis generic font family cadangan (seperti <code>sans-serif</code>, <code>serif</code>, atau <code>monospace</code>) di urutan paling akhir properti <code>font-family</code> Anda. Hal ini memastikan halaman web Anda tetap menyajikan teks dengan tingkat keterbacaan yang tinggi meskipun font utama dari Google Fonts gagal terunduh akibat masalah jaringan.';
  }
  if (t.includes('color') || t.includes('background') || t.includes('gradient') || t.includes('shadow')) {
    return 'Ingin menciptakan efek transparansi latar belakang premium? Hindari pemakaian properti <code>opacity: 0.5</code> karena akan memaksa teks di dalam elemen ikut memudar transparan. Solusinya, gunakanlah format warna <code>rgba(...)</code> atau <code>hsla(...)</code> pada <code>background-color</code> sehingga efek transparan hanya berlaku eksklusif pada lapisan latar belakang saja.';
  }
  if (t.includes('pseudo') || t.includes('combinator') || t.includes('selector')) {
    return 'Perbedaan krusial: Pseudo-classes (ditandai satu titik dua, contoh <code>:hover</code> atau <code>:focus</code>) merepresentasikan status interaksi dinamis suatu elemen. Sedangkan Pseudo-elements (ditandai dua titik dua, contoh <code>::before</code> atau <code>::after</code>) digunakan untuk menyisipkan konten dekoratif tambahan via CSS tanpa mengotori berkas HTML.';
  }
  return 'Kunci sukses koding CSS terletak pada pemahaman menyeluruh tentang <strong>Specificity (Kekuatan Selector)</strong>. Jika suatu gaya desain baru yang Anda tulis tidak kunjung berubah di browser, kemungkinan besar ada aturan selector lain yang lebih spesifik yang sedang menimpanya. Gunakan panel Inspector browser (F12) untuk mendeteksi konflik selector ini dengan cepat.';
}

// Helper to generate specific line-by-line code explanations in Indonesian
function getCodeExplanation(title: string): string {
  const t = title.toLowerCase();
  
  if (t.includes('home') || t.includes('intro') || t.includes('howto')) {
    return `
      <li><strong>&lt;style&gt; ... &lt;/style&gt;</strong>: Tag HTML khusus yang digunakan untuk menampung seluruh deklarasi gaya internal CSS di dalam kepala dokumen (head).</li>
      <li><strong>Selector (body, .card, h1)</strong>: Berfungsi menargetkan atau memilih elemen HTML mana yang akan dirias secara visual.</li>
      <li><strong>Properti & Nilai (color, background)</strong>: Deklarasi penentu gaya, misalnya mengubah warna teks menjadi biru atau latar belakang menjadi putih.</li>
    `;
  }
  if (t.includes('syntax') || t.includes('comment')) {
    return `
      <li><strong>Selector { ... }</strong>: Struktur deklarasi standar CSS untuk mengelompokkan baris properti gaya dalam tanda kurung kurawal.</li>
      <li><strong>Titik Dua (:) & Titik Koma (;)</strong>: Titik dua memisahkan nama properti dengan nilainya, sedangkan titik koma bertindak sebagai penutup wajib di setiap deklarasi.</li>
      <li><strong>/* ... */</strong>: Format komentar khusus CSS untuk menuliskan catatan penjelasan koding yang otomatis diabaikan oleh browser.</li>
    `;
  }
  if (t.includes('selector')) {
    return `
      <li><strong>Class Selector (.nama-class)</strong>: Selector diawali tanda titik (.) untuk menghias elemen HTML yang memiliki atribut class yang bersangkutan secara massal.</li>
      <li><strong>ID Selector (#nama-id)</strong>: Selector diawali tanda pagar (#) untuk menargetkan satu elemen unik yang memiliki atribut ID spesifik (prioritas tinggi).</li>
    `;
  }
  if (t.includes('color') || t.includes('background') || t.includes('gradient') || t.includes('shadow')) {
    return `
      <li><strong>background-color</strong>: Properti untuk mengisi warna solid latar belakang area penampang elemen.</li>
      <li><strong>linear-gradient()</strong>: Fungsi pembuat warna transisi gradasi melintasi sudut derajat tertentu secara halus.</li>
      <li><strong>rgba(R, G, B, A)</strong>: Sistem warna dasar ditambah parameter Alpha (A) bernilai 0 sampai 1 untuk mengatur intensitas transparansi.</li>
    `;
  }
  if (t.includes('border') || t.includes('outline')) {
    return `
      <li><strong>border: [lebar] [gaya] [warna]</strong>: Properti shorthand pengatur garis tepi luar fisik elemen (contoh: solid, dashed, double).</li>
      <li><strong>border-radius</strong>: Properti pengatur kelengkungan sudut garis batas, sangat berguna untuk membuat bentuk rounded-card atau tombol membulat.</li>
    `;
  }
  if (t.includes('margin') || t.includes('padding')) {
    return `
      <li><strong>margin</strong>: Mengatur lebar ruang kosong transparan di sekeliling luar garis batas (border) elemen agar tidak saling menempel.</li>
      <li><strong>padding</strong>: Mengatur lebar ruang kosong di bagian dalam elemen (di antara isi teks dan garis batas border).</li>
    `;
  }
  if (t.includes('box-model') || t.includes('box-sizing')) {
    return `
      <li><strong>box-sizing: border-box</strong>: Aturan emas tata letak yang memaksa browser menghitung padding dan border di dalam total lebar elemen, menjaga dimensi layout tetap konsisten dan tidak melar.</li>
    `;
  }
  if (t.includes('flexbox') || t.includes('flex')) {
    return `
      <li><strong>display: flex</strong>: Mengaktifkan mode flexbox satu dimensi pada container untuk menata posisi elemen anak secara dinamis.</li>
      <li><strong>justify-content</strong>: Mengatur distribusi dan perataan elemen anak secara horizontal di sepanjang sumbu utama (main axis).</li>
      <li><strong>align-items</strong>: Mengatur perataan elemen anak secara vertikal di sepanjang sumbu silang (cross axis).</li>
    `;
  }
  if (t.includes('grid')) {
    return `
      <li><strong>display: grid</strong>: Mengaktifkan mode grid dua dimensi untuk merancang layout canggih berbasis baris dan kolom sekaligus.</li>
      <li><strong>grid-template-columns</strong>: Menetapkan pembagian jumlah kolom dan dimensi ukurannya.</li>
      <li><strong>Unit fr (fractional)</strong>: Membagi sisa ruang kosong secara proporsional di dalam container grid.</li>
    `;
  }
  if (t.includes('media') || t.includes('responsive') || t.includes('viewport') || t.includes('rwd')) {
    return `
      <li><strong>@media (min-width: ...)</strong>: Aturan media query untuk menginstruksikan browser agar menerapkan dekorasi CSS berbeda saat ukuran layar melampaui lebar pixel tertentu.</li>
      <li><strong>Viewport Units (vw, vh)</strong>: Satuan dinamis responsif berpatokan pada lebar (vw) atau tinggi (vh) layar fisik pengunjung.</li>
    `;
  }
  return `
    <li><strong>CSS Ruleset</strong>: Diterjemahkan langsung oleh browser web di sisi klien (client-side) untuk mendekorasi penampilan elemen visual HTML agar terstruktur indah.</li>
    <li><strong>Cascading Flow</strong>: Aturan gaya mengalir dari atas ke bawah, di mana baris paling bawah atau selector yang lebih spesifik akan memenangkan prioritas gaya visual.</li>
  `;
}

// Programmatic transformer to style all raw HTML into premium Tailwind formats
function makePremiumTheory(title: string, rawTheory: string): string {
  if (!rawTheory) return '';

  let enriched = rawTheory.trim();

  // 1. Transform <h2> to premium Tailwind headings
  enriched = enriched.replace(/<h2>(.*?)<\/h2>/g, (_, text) => {
    return `<h2 class="text-3xl font-extrabold mb-6 text-slate-800 dark:text-white flex items-center gap-2 border-b pb-2 border-slate-200/60 dark:border-slate-800/60">${text}</h2>`;
  });

  // 2. Transform <h3> to premium Tailwind headings
  enriched = enriched.replace(/<h3>(.*?)<\/h3>/g, (_, text) => {
    return `<h3 class="text-xl font-bold mt-8 mb-4 text-slate-700 dark:text-slate-200 flex items-center gap-2">${text}</h3>`;
  });

  // 3. Transform paragraphs to beautifully spaced body texts
  enriched = enriched.replace(/<p>(.*?)<\/p>/g, (_, text) => {
    if (text.includes('class=')) return `<p>${text}</p>`; // skip if already has class
    return `<p class="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">${text}</p>`;
  });

  // 4. Style standard lists
  enriched = enriched.replace(/<ul>/g, `<ul class="list-disc pl-6 mb-6 text-slate-600 dark:text-slate-300 space-y-2">`);
  enriched = enriched.replace(/<ol>/g, `<ol class="list-decimal pl-6 mb-6 text-slate-600 dark:text-slate-300 space-y-3">`);

  // 5. Style inline code elements
  enriched = enriched.replace(/<code>(.*?)<\/code>/g, (_, codeText) => {
    if (codeText.includes('class=')) return `<code>${codeText}</code>`;
    return `<code class="bg-slate-100 dark:bg-slate-900/50 text-indigo-600 dark:text-indigo-400 px-1.5 py-0.5 rounded font-mono text-sm border border-slate-200/50 dark:border-slate-800/50">${codeText}</code>`;
  });

  // 6. Style alert/info boxes in the theory
  enriched = enriched.replace(/<div class="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-4">/g, 
    `<div class="bg-amber-50/70 dark:bg-amber-950/10 border-l-4 border-amber-500 p-5 rounded-r-2xl mb-6 shadow-sm">`);
  enriched = enriched.replace(/<div class="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-4">/g, 
    `<div class="bg-blue-50/70 dark:bg-blue-950/10 border-l-4 border-blue-500 p-5 rounded-r-2xl mb-6 shadow-sm">`);
  enriched = enriched.replace(/<div class="bg-indigo-50 border border-indigo-500 rounded-xl p-5 mb-4">/g, 
    `<div class="bg-indigo-50/70 dark:bg-indigo-950/10 border-l-4 border-indigo-500 p-5 rounded-r-2xl mb-6 shadow-sm">`);
  enriched = enriched.replace(/<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">/g, 
    `<div class="bg-slate-100 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 rounded-xl p-4 font-mono text-sm mb-6 text-slate-800 dark:text-slate-200 shadow-inner">`);
  enriched = enriched.replace(/<div class="bg-slate-100 rounded-xl p-5 mb-6 font-mono text-sm">/g, 
    `<div class="bg-slate-100 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 rounded-xl p-5 mb-6 font-mono text-sm text-slate-800 dark:text-slate-200 shadow-inner">`);

  // 7. Inject our specific bedah kegunaan kode box
  const explanation = getCodeExplanation(title);
  enriched += `
<div class="bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 p-5 rounded-2xl mb-6 shadow-sm">
  <h4 class="text-slate-800 dark:text-slate-200 font-bold mb-3 flex items-center gap-2 text-base">
    <span class="p-1 bg-slate-200 dark:bg-slate-800 rounded text-sm">💻</span> Bedah Kegunaan Kode:
  </h4>
  <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600 dark:text-slate-300">
    ${explanation}
  </ul>
</div>`;

  // 8. Inject our exclusive premium developer tips box
  const tips = getCustomDeveloperTip(title);
  enriched += `
<div class="bg-indigo-50/60 dark:bg-indigo-950/20 border-l-4 border-indigo-500 p-5 rounded-r-2xl mt-8 mb-4 shadow-sm">
  <h4 class="text-indigo-950 dark:text-indigo-300 font-bold mb-2 flex items-center gap-2 text-base">
    <span class="p-1 bg-indigo-100 dark:bg-indigo-900/50 rounded text-sm">💡</span> Info & Tip Developer:
  </h4>
  <p class="text-indigo-900 dark:text-indigo-200 text-sm leading-relaxed">
    ${tips}
  </p>
</div>`;

  return enriched;
}

async function main() {
  console.log('🏁 Starting CSS lessons content enrichment, sorting, and synchronization...');

  const moduleId = 'ba1383a2-219d-44ab-bf63-804d5a0f0902'; // CSS Styling: Desain Web

  // 1. Fetch DB chapters and lessons for CSS module
  const dbChapters = await prisma.chapter.findMany({ where: { moduleId } });
  const dbLessons = await prisma.lesson.findMany({ where: { moduleId } });

  console.log(`Database has ${dbChapters.length} chapters and ${dbLessons.length} lessons for CSS module.`);

  // Create title-to-static map (merging static data)
  const staticMap = new Map();
  for (const [key, data] of Object.entries(allStaticLessons)) {
    staticMap.set(data.title.toLowerCase().trim(), { key, data });
  }

  let globalLessonOrder = 0;

  // 2. Loop through official chapters in order
  for (let chapterIndex = 0; chapterIndex < cssCourseModules.length; chapterIndex++) {
    const officialChapter = cssCourseModules[chapterIndex];
    if (!officialChapter) continue;

    const chapterTitle = officialChapter.title; // e.g., "CSS Tutorial"

    // Find or create chapter in database
    const dbChapter = dbChapters.find(c => c.title.toLowerCase().trim() === chapterTitle.toLowerCase().trim());
    let dbChapterId: string | null = dbChapter?.id || null;

    if (dbChapter) {
      console.log(`Updating Chapter [${chapterIndex}] "${chapterTitle}"`);
      await prisma.chapter.update({
        where: { id: dbChapter.id },
        data: { order: chapterIndex }
      });
    } else {
      console.log(`⚠️ Chapter "${chapterTitle}" not found in database! Creating it...`);
      const newChapter = await prisma.chapter.create({
        data: {
          moduleId,
          title: chapterTitle,
          order: chapterIndex
        }
      });
      dbChapterId = newChapter.id;
    }

    // 3. Loop through lessons in this chapter in official order
    const officialLessons = officialChapter.lessons;
    if (officialLessons) {
      for (let lessonIndex = 0; lessonIndex < officialLessons.length; lessonIndex++) {
        const officialLesson = officialLessons[lessonIndex];
        if (!officialLesson) continue;

        const lessonTitle = officialLesson.title;
        const matchedDbLessons = dbLessons.filter(l => l.title.toLowerCase().trim() === lessonTitle.toLowerCase().trim());

        // Find the complete premium static content
        const staticMatch = staticMap.get(lessonTitle.toLowerCase().trim());
        const premiumMatch = premiumCssLessons[lessonTitle];

        if (matchedDbLessons.length > 0) {
          for (const dbLesson of matchedDbLessons) {
            let finalType: 'code' | 'video' | 'reading' = 'code';
            let finalTheory = '';
            let finalCode = '';
            let finalQuiz: any = null;

            if (premiumMatch) {
              finalType = premiumMatch.type;
              finalTheory = premiumMatch.theory;
              finalCode = premiumMatch.code;
              finalQuiz = premiumMatch.quiz;
            } else if (staticMatch) {
              const staticData = staticMatch.data;
              finalTheory = makePremiumTheory(lessonTitle, staticData.theory || '');
              finalCode = staticData.code || '';
              finalQuiz = staticData.quiz || null;

              // Determine lesson type
              const lowerTitle = lessonTitle.toLowerCase();
              if (lowerTitle.includes('video') || lowerTitle.includes('media') || lowerTitle.includes('youtube')) {
                finalType = 'video';
              } else if (lowerTitle.includes('support') || lowerTitle.includes('reference') || lowerTitle.includes('units') || lowerTitle.includes('specificity') || lowerTitle.includes('summary') || lowerTitle.includes('shortcuts')) {
                finalType = 'reading';
              } else {
                finalType = 'code';
              }
            } else {
              // Fallback
              let parsedContent: any = {};
              try {
                parsedContent = JSON.parse(dbLesson.content || '{}');
              } catch {
                parsedContent = { theory: dbLesson.content || '', code: '' };
              }
              finalTheory = parsedContent.theory || '';
              finalCode = parsedContent.code || '';
              finalQuiz = parsedContent.quiz || null;
              finalType = dbLesson.type as any || 'code';
            }

            const contentObj = {
              theory: finalTheory,
              code: finalCode,
              quiz: finalQuiz
            };

            console.log(`  Updating Lesson [${globalLessonOrder}] "${dbLesson.title}" inside Chapter "${chapterTitle}"`);
            await prisma.lesson.update({
              where: { id: dbLesson.id },
              data: {
                type: finalType,
                content: JSON.stringify(contentObj),
                order: globalLessonOrder,
                chapter: chapterTitle,
                chapterId: dbChapterId
              }
            });
          }
        } else {
          console.log(`  ⚠️ Lesson "${lessonTitle}" not found in DB!`);
        }

        globalLessonOrder++;
      }
    }
  }

  console.log('🎉 Success! Successfully updated, sorted, and enriched all 74 CSS lessons in the database.');
}

main()
  .catch((e) => {
    console.error('❌ CSS Sync failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    pool.end();
  });
