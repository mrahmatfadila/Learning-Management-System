export interface HtmlLessonItem {
  title: string;
  chapter: string;
  type: 'code' | 'theory' | 'challenge';
  order: number;
  overview?: string;
  theory: string;
  code?: string;
  codeExplanation?: string[];
  quiz?: {
    question: string;
    options: string[];
    answer: number;
    explanation: string;
  };
  challenge?: {
    instruction: string;
    starterCode: string;
    solutionCode: string;
    hint: string;
  };
}

export const htmlLessonsPart2: HtmlLessonItem[] = [
  // ── 1. HTML Favicon ───────────────────────────────────────────────────────
  {
    title: 'HTML Favicon - Ikon Identitas Tab Browser',
    chapter: 'HTML Favicon',
    type: 'code',
    order: 48,
    overview: 'Favicon adalah ikon kecil yang muncul di sebelah judul halaman pada tab peramban web (browser).',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">⭐ Apa itu Favicon?</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          <strong>Favicon</strong> (singkatan dari <em>Favorite Icon</em>) adalah gambar ikon kecil berukuran 16x16 atau 32x32 piksel yang ditampilkan di tab browser, bookmark bar, dan riwayat browsing.
        </p>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto border border-slate-800">
          <div class="text-amber-400 mb-2 font-bold">// Sintaks Menambahkan Favicon (di dalam tag &lt;head&gt;):</div>
          <div>&lt;<span class="text-rose-400">link</span> <span class="text-sky-400">rel</span>="icon" <span class="text-sky-400">type</span>="image/x-icon" <span class="text-sky-400">href</span>="/favicon.ico"&gt;</div>
        </div>

        <div class="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-900/40 text-xs text-indigo-900 dark:text-indigo-300">
          <strong>💡 Format Gambar yang Didukung:</strong> File <code>.ico</code>, <code>.png</code>, <code>.svg</code>, dan <code>.gif</code>. Format <code>.svg</code> kini sangat populer karena tetap tajam di layar Retina.
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Website dengan Favicon</title>
  <!-- Menambahkan Favicon PNG -->
  <link rel="icon" type="image/png" href="https://cdn-icons-png.flaticon.com/512/919/919827.png">
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Perhatikan Ikon di Tab Browser Anda!</h2>
  <p>Favicon membuat website terlihat lebih profesional dan mudah dikenali saat membuka banyak tab.</p>
</body>
</html>`,
    codeExplanation: [
      'Tag <link> diletakkan di dalam seksi <head>.',
      'Atribut rel="icon" memberitahu browser bahwa file yang ditautkan adalah favicon.',
      'Atribut type="image/png" mendefinisikan format file gambar.',
      'Atribut href="/favicon.ico" menunjukkan lokasi file gambar favicon.'
    ],
    quiz: {
      question: 'Di bagian manakah tag <link rel="icon"> untuk favicon harus diletakkan dalam struktur HTML?',
      options: ['Di dalam tag <body>', 'Di dalam tag <head>', 'Di dalam tag <footer>', 'Di luar tag <html>'],
      answer: 1,
      explanation: 'Tag <link rel="icon"> wajib diletakkan di dalam seksi <head> dokumen HTML.'
    }
  },

  {
    title: 'HTML Favicon - Exercises (Memasang Favicon)',
    chapter: 'HTML Favicon',
    type: 'challenge',
    order: 49,
    overview: 'Latihan memasang ikon favicon pada dokumen HTML.',
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">✍️ Latihan Memasang Favicon</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Lengkapi tag <code>&lt;link&gt;</code> di dalam <code>&lt;head&gt;</code> untuk memanggil favicon bernama <code>logo.png</code>.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Toko Saya</title>
  <!-- Pasang favicon di sini -->

</head>
<body>
  <h1>Selamat Datang</h1>
</body>
</html>`,
    challenge: {
      instruction: 'Tambahkan <link rel="icon" type="image/png" href="logo.png"> di dalam tag <head>.',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Toko Saya</title>

</head>
<body>
  <h1>Selamat Datang</h1>
</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Toko Saya</title>
  <link rel="icon" type="image/png" href="logo.png">
</head>
<body>
  <h1>Selamat Datang</h1>
</body>
</html>`,
      hint: 'Gunakan <link rel="icon" type="image/png" href="logo.png">'
    }
  },

  // ── 2. HTML Page Title ────────────────────────────────────────────────────
  {
    title: 'HTML Page Title - Judul Tab & Optimasi Mesin Pencari',
    chapter: 'HTML Page Title',
    type: 'code',
    order: 50,
    overview: 'Tag <title> menentukan judul dokumen yang sangat krusial untuk SEO dan pengalaman pengguna.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🏷️ Pentingnya Elemen &lt;title&gt;</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Tag <code>&lt;title&gt;</code> wajib ada di setiap dokumen HTML. Teks di dalam tag ini memiliki 3 fungsi vital:
        </p>

        <div class="space-y-2 text-xs">
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>1. Judul di Tab Browser</strong>: Teks pertama yang dibaca pengunjung pada tab browser.
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>2. Hasil Pencarian Google (SERP)</strong>: Menjadi baris judul biru yang diklik pengguna di Google Search.
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>3. Nama Default Bookmark</strong>: Menjadi nama otomatis saat halaman di-bookmark.
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Kursus Web Development Terbaik di Indonesia | DevGrow</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h1>Belajar Web Development dari Nol</h1>
  <p>Perhatikan judul tab di atas: format yang baik memadukan topik dan nama brand.</p>
</body>
</html>`,
    codeExplanation: [
      'Tag <title> ditempatkan di dalam tag <head>.',
      'Panjang judul ideal untuk SEO adalah antara 50 hingga 60 karakter.',
      'Sertakan kata kunci utama diikuti nama brand website.'
    ],
    quiz: {
      question: 'Di manakah teks yang ditulis di dalam tag <title>...</title> akan ditampilkan?',
      options: ['Di tengah halaman web', 'Pada judul tab browser dan hasil pencarian Google', 'Di bagian footer bawah halaman', 'Sebagai teks watermark di belakang gambar'],
      answer: 1,
      explanation: 'Tag <title> ditampilkan pada tab browser pengguna dan dijadikan judul tautan di hasil pencarian search engine.'
    }
  },

  {
    title: 'HTML Page Title - Exercises (Membuat Judul SEO-Friendly)',
    chapter: 'HTML Page Title',
    type: 'challenge',
    order: 51,
    overview: 'Latihan membuat judul halaman yang informatif.',
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">✍️ Latihan Menulis Page Title</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Buatlah tag <code>&lt;title&gt;</code> dengan teks <strong>"Tentang Kami - EduTech ID"</strong> di dalam seksi <code>&lt;head&gt;</code>.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <!-- Tuliskan tag title di sini -->

</head>
<body>
  <h1>Halaman Tentang Kami</h1>
</body>
</html>`,
    challenge: {
      instruction: 'Tambahkan tag <title>Tentang Kami - EduTech ID</title> di dalam tag <head>.',
      starterCode: `<!DOCTYPE html>
<html>
<head>

</head>
<body>
  <h1>Halaman Tentang Kami</h1>
</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Tentang Kami - EduTech ID</title>
</head>
<body>
  <h1>Halaman Tentang Kami</h1>
</body>
</html>`,
      hint: 'Gunakan <title>Tentang Kami - EduTech ID</title>'
    }
  },

  // ── 3. HTML Tables ────────────────────────────────────────────────────────
  {
    title: 'HTML Tables - Struktur Dasar Tabel (table, tr, th, td)',
    chapter: 'HTML Tables',
    type: 'code',
    order: 52,
    overview: 'Tabel HTML digunakan untuk menyajikan data tabular yang terdiri dari baris dan kolom.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">📊 4 Elemen Utama Tabel HTML</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Data tabular dalam HTML disusun menggunakan 4 elemen pokok berikut:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code class="text-orange-500 font-bold">&lt;table&gt;</code>: Pembungkus seluruh struktur tabel.
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code class="text-orange-500 font-bold">&lt;tr&gt; (Table Row)</code>: Menandai satu baris horizontal data.
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code class="text-orange-500 font-bold">&lt;th&gt; (Table Header)</code>: Sel judul kolom (otomatis tebal & rata tengah).
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code class="text-orange-500 font-bold">&lt;td&gt; (Table Data)</code>: Sel data reguler tabel.
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo Tabel HTML</title>
  <style>
    table { width: 100%; border-collapse: collapse; font-family: sans-serif; }
    th, td { border: 1px solid #cbd5e1; padding: 10px; text-align: left; }
    th { background-color: #f1f5f9; color: #1e293b; }
  </style>
</head>
<body>
  <h2>Daftar Siswa Kursus</h2>
  <table>
    <tr>
      <th>No</th>
      <th>Nama Lengkap</th>
      <th>Modul</th>
      <th>Status</th>
    </tr>
    <tr>
      <td>1</td>
      <td>Ahmad Rifai</td>
      <td>HTML & CSS</td>
      <td>Lulus</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Siti Nurhaliza</td>
      <td>JavaScript</td>
      <td>Sedang Belajar</td>
    </tr>
  </table>
</body>
</html>`,
    codeExplanation: [
      'Tag <table> membungkus tabel.',
      'Tag <tr> membuat baris pertama yang berisi header <th>.',
      'Baris berikutnya diisi dengan sel data <td>.',
      'border-collapse: collapse; pada CSS menghilangkan jarak ganda antar border sel.'
    ],
    quiz: {
      question: 'Tag manakah yang digunakan untuk membuat baris (row) pada tabel HTML?',
      options: ['<td>', '<th>', '<tr>', '<row>'],
      answer: 2,
      explanation: 'Tag <tr> (Table Row) digunakan untuk mendefinisikan baris horizontal tabel.'
    }
  },

  {
    title: 'HTML Tables - Colspan & Rowspan (Menggabungkan Sel)',
    chapter: 'HTML Tables',
    type: 'code',
    order: 53,
    overview: 'Atribut colspan dan rowspan memungkinkan penggabungan beberapa kolom atau beberapa baris sekaligus.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🔀 Menggabungkan Sel: Colspan & Rowspan</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Sama seperti fitur *Merge Cells* di Microsoft Excel, HTML menyediakan 2 atribut sakti:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-orange-500 font-mono">colspan="jumlah_kolom"</strong>:
            <p class="text-slate-600 dark:text-slate-400 mt-1">Menggabungkan sel secara horizontal (ke samping).</p>
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-orange-500 font-mono">rowspan="jumlah_baris"</strong>:
            <p class="text-slate-600 dark:text-slate-400 mt-1">Menggabungkan sel secara vertikal (ke bawah).</p>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Colspan & Rowspan Demo</title>
  <style>
    table { width: 100%; border-collapse: collapse; font-family: sans-serif; }
    th, td { border: 1px solid #94a3b8; padding: 12px; text-align: center; }
    th { background: #38bdf8; color: white; }
  </style>
</head>
<body>
  <h2>Jadwal Pelatihan (Colspan Demo)</h2>
  <table>
    <tr>
      <th>Hari</th>
      <th colspan="2">Sesi Pembelajaran (2 Jam)</th>
    </tr>
    <tr>
      <td>Senin</td>
      <td>09:00 - 10:00 (HTML)</td>
      <td>10:00 - 11:00 (CSS)</td>
    </tr>
  </table>
</body>
</html>`,
    codeExplanation: [
      '<th colspan="2"> membentang selebar 2 kolom di bawahnya.',
      'Atribut rowspan digunakan dengan cara yang sama untuk membentang ke beberapa baris di bawahnya.'
    ],
    quiz: {
      question: 'Atribut apakah yang digunakan untuk menggabungkan sel tabel ke samping (horizontal melintasi kolom)?',
      options: ['rowspan', 'colspan', 'mergespan', 'cellspan'],
      answer: 1,
      explanation: 'Atribut colspan (Column Span) digunakan untuk membentangkan satu sel melintasi beberapa kolom.'
    }
  },

  {
    title: 'HTML Tables - Code Challenge (Tabel Laporan Nilai Siswa)',
    chapter: 'HTML Tables',
    type: 'challenge',
    order: 54,
    overview: 'Tantangan praktik membuat tabel laporan dengan border dan sel header.',
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🚀 Tantangan: Tabel Transaksi</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Buatlah tabel sederhana 2 baris yang memiliki 2 kolom header (Nama Produk, Harga) dan 1 baris data (Laptop, Rp 10 Juta).
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Tabel Produk</title>
</head>
<body>

</body>
</html>`,
    challenge: {
      instruction: 'Buat tag <table> yang memuat <tr> dengan dua <th> (Nama Produk, Harga) dan satu <tr> dengan dua <td> (Laptop, Rp 10 Juta).',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Tabel Produk</title>
</head>
<body>

</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Tabel Produk</title>
</head>
<body>
  <table>
    <tr>
      <th>Nama Produk</th>
      <th>Harga</th>
    </tr>
    <tr>
      <td>Laptop</td>
      <td>Rp 10 Juta</td>
    </tr>
  </table>
</body>
</html>`,
      hint: 'Gunakan <table> dengan baris pertama <tr><th>...</th><th>...</th></tr> dan baris kedua <tr><td>...</td><td>...</td></tr>'
    }
  },

  // ── 4. HTML Lists ─────────────────────────────────────────────────────────
  {
    title: 'HTML Lists - Unordered, Ordered & Description Lists',
    chapter: 'HTML Lists',
    type: 'code',
    order: 55,
    overview: 'HTML menyediakan 3 jenis daftar: Unordered List (bullet), Ordered List (nomor), dan Description List (glosarium).',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">📋 3 Tipe List dalam HTML</h2>
        <div class="space-y-3 text-xs">
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-orange-500 font-mono">1. Unordered List (&lt;ul&gt; & &lt;li&gt;)</strong>: Daftar berpoin/bullet (urutan tidak penting).
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-orange-500 font-mono">2. Ordered List (&lt;ol&gt; & &lt;li&gt;)</strong>: Daftar bernomor 1, 2, 3 atau A, B, C (urutan langkah penting).
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-orange-500 font-mono">3. Description List (&lt;dl&gt;, &lt;dt&gt;, &lt;dd&gt;)</strong>: Daftar definisi istilah (<code>&lt;dt&gt;</code> = istilah, <code>&lt;dd&gt;</code> = penjelasan).
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo HTML Lists</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>1. Unordered List (Belanja)</h2>
  <ul>
    <li>Kopi Espresso</li>
    <li>Susu Segar</li>
    <li>Gula Aren</li>
  </ul>

  <h2>2. Ordered List (Langkah Memasak)</h2>
  <ol type="1">
    <li>Rebus air hingga mendidih</li>
    <li>Masukkan mie instan</li>
    <li>Sajikan selagi hangat</li>
  </ol>

  <h2>3. Description List (Glosarium)</h2>
  <dl>
    <dt><strong>HTML</strong></dt>
    <dd>Bahasa penanda struktur halaman web.</dd>
    <dt><strong>CSS</strong></dt>
    <dd>Bahasa styling untuk mempercantik web.</dd>
  </dl>
</body>
</html>`,
    codeExplanation: [
      'Tag <ul> membuat daftar berpoin bulat.',
      'Tag <ol> membuat daftar berurutan nomor.',
      'Tag <dl> membungkus pasangan <dt> (istilah) dan <dd> (deskripsi).'
    ],
    quiz: {
      question: 'Tag child apakah yang digunakan di dalam <ol> dan <ul> untuk menandai setiap butir item daftar?',
      options: ['<item>', '<list>', '<li>', '<dt>'],
      answer: 2,
      explanation: 'Tag <li> (List Item) digunakan untuk setiap butir item di dalam tag <ol> maupun <ul>.'
    }
  },

  {
    title: 'HTML Lists - Code Challenge (Menu Makanan & Resep)',
    chapter: 'HTML Lists',
    type: 'challenge',
    order: 56,
    overview: 'Tantangan membuat daftar berpoin dan berurutan.',
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🚀 Tantangan: Daftar Rencana Belajar</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Buatlah sebuah <code>&lt;ol&gt;</code> yang memuat 3 item urutan belajar: "HTML", "CSS", dan "JavaScript".
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Rencana Belajar</title>
</head>
<body>

</body>
</html>`,
    challenge: {
      instruction: 'Buatlah tag <ol> yang berisi <li>HTML</li>, <li>CSS</li>, dan <li>JavaScript</li>.',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Rencana Belajar</title>
</head>
<body>

</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Rencana Belajar</title>
</head>
<body>
  <ol>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
  </ol>
</body>
</html>`,
      hint: 'Gunakan <ol> dengan tiga tag <li> di dalamnya'
    }
  },

  // ── 5. HTML Block & Inline ────────────────────────────────────────────────
  {
    title: 'HTML Block & Inline - Karakteristik & Perbedaan Elemen',
    chapter: 'HTML Block & Inline',
    type: 'code',
    order: 57,
    overview: 'Setiap elemen HTML memiliki nilai tampilan default: Block-level (mengambil lebar penuh) atau Inline (mengambil lebar seperlunya).',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🧱 Block-level vs Inline Elements</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-orange-500 font-bold block mb-1">Block-level Elements</strong>
            <p class="text-slate-600 dark:text-slate-400">Selalu dimulai di baris baru dan mengambil lebar 100% dari container. Contoh: <code>&lt;div&gt;</code>, <code>&lt;h1&gt;-&lt;h6&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;ul&gt;</code>, <code>&lt;header&gt;</code>.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-orange-500 font-bold block mb-1">Inline Elements</strong>
            <p class="text-slate-600 dark:text-slate-400">Tidak memulai baris baru dan hanya mengambil lebar selebar kontennya saja. Contoh: <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code>, <code>&lt;img&gt;</code>.</p>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Block vs Inline</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <!-- Block Element -->
  <div style="background-color: #cbd5e1; padding: 10px; margin-bottom: 10px;">
    Ini adalah <strong>Block Element (&lt;div&gt;)</strong> (Lebar 100%)
  </div>

  <!-- Inline Elements -->
  <span style="background-color: #fde047; padding: 5px;">Inline 1</span>
  <span style="background-color: #86efac; padding: 5px;">Inline 2</span>
  <a href="#" style="background-color: #93c5fd; padding: 5px;">Inline Link</a>
</body>
</html>`,
    codeExplanation: [
      'Elemen <div> memenuhi satu baris penuh dari kiri ke kanan.',
      'Elemen <span> mengalir berdampingan di baris yang sama.'
    ],
    quiz: {
      question: 'Manakah di antara elemen berikut yang termasuk elemen bertipe Inline?',
      options: ['<div>', '<h1>', '<span>', '<p>'],
      answer: 2,
      explanation: '<span> adalah elemen inline murni yang tidak membuat baris baru.'
    }
  },

  {
    title: 'HTML Block & Inline - Code Challenge (Highlight Teks Inline)',
    chapter: 'HTML Block & Inline',
    type: 'challenge',
    order: 58,
    overview: 'Latihan menggunakan elemen inline di dalam elemen block.',
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🚀 Tantangan: Memberi Warna Kata Tertentu</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Buatlah tag <code>&lt;p&gt;</code> dengan teks "Belajar <span style="color: red;">HTML</span> sangat seru!", menggunakan tag <code>&lt;span&gt;</code> ber-style warna merah.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Inline</title>
</head>
<body>

</body>
</html>`,
    challenge: {
      instruction: 'Buat tag <p>Belajar <span style="color: red;">HTML</span> sangat seru!</p>.',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Inline</title>
</head>
<body>

</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Inline</title>
</head>
<body>
  <p>Belajar <span style="color: red;">HTML</span> sangat seru!</p>
</body>
</html>`,
      hint: 'Gunakan <p>Belajar <span style="color: red;">HTML</span> sangat seru!</p>'
    }
  },

  // ── 6. HTML Div ───────────────────────────────────────────────────────────
  {
    title: 'HTML Div - Elemen Kontainer Universal & Layouting',
    chapter: 'HTML Div',
    type: 'code',
    order: 59,
    overview: 'Tag <div> adalah elemen kontainer serbaguna yang digunakan untuk mengelompokkan elemen lain dan mengatur tata letak dengan CSS.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">📦 Fungsi Utama Tag &lt;div&gt;</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          <code>&lt;div&gt;</code> (singkatan dari <em>division</em>) adalah elemen non-semantik yang bertindak sebagai wadah (*container*) pembungkus untuk mempermudah pemberian style CSS dan scripting JavaScript.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo Tag Div</title>
  <style>
    .card-container {
      background-color: white;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.05);
      max-width: 350px;
    }
  </style>
</head>
<body style="background: #f8fafc; font-family: sans-serif; padding: 20px;">
  <div class="card-container">
    <h3 style="margin-top: 0; color: #4f46e5;">Paket Pro Developer</h3>
    <p>Akses ke seluruh 8 modul materi dan sertifikat kelulusan resmi.</p>
    <button style="background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;">Pilih Paket</button>
  </div>
</body>
</html>`,
    codeExplanation: [
      '<div> mengelompokkan elemen h3, p, dan button ke dalam satu kesatuan kotak kartu.',
      'Class .card-container memberikan padding, bayangan, dan radius sudut.'
    ],
    quiz: {
      question: 'Apakah nilai display default dari elemen <div>?',
      options: ['inline', 'block', 'inline-block', 'none'],
      answer: 1,
      explanation: 'Elemen <div> secara default adalah block-level element.'
    }
  },

  {
    title: 'HTML Div - Code Challenge (Membangun Dua Kolom Sejajar)',
    chapter: 'HTML Div',
    type: 'challenge',
    order: 60,
    overview: 'Latihan membungkus seksi halaman dengan tag <div>.',
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🚀 Tantangan: Kontainer Banner</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Buatlah tag <code>&lt;div style="background: #3b82f6; color: white; padding: 15px;"&gt;</code> yang membungkus sebuah <code>&lt;h2&gt;Pengumuman&lt;/h2&gt;</code> dan <code>&lt;p&gt;Ujian dimulai besok.&lt;/p&gt;</code>.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Banner Div</title>
</head>
<body>

</body>
</html>`,
    challenge: {
      instruction: 'Buat <div style="background: #3b82f6; color: white; padding: 15px;"><h2>Pengumuman</h2><p>Ujian dimulai besok.</p></div>.',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Banner Div</title>
</head>
<body>

</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Banner Div</title>
</head>
<body>
  <div style="background: #3b82f6; color: white; padding: 15px;">
    <h2>Pengumuman</h2>
    <p>Ujian dimulai besok.</p>
  </div>
</body>
</html>`,
      hint: 'Gunakan <div> dengan atribut style yang membungkus <h2> dan <p>'
    }
  },

  // ── 7. HTML Classes ───────────────────────────────────────────────────────
  {
    title: 'HTML Classes - Penamaan Kelas & Penggunaan Berulang',
    chapter: 'HTML Classes',
    type: 'code',
    order: 61,
    overview: 'Atribut class digunakan untuk menetapkan satu atau beberapa nama kelas pada elemen HTML agar dapat diberi style CSS yang sama secara berulang.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🏷️ Penggunaan Atribut Class</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Nama kelas diawali dengan titik (<code>.nama-kelas</code>) di dalam file CSS. Satu elemen bisa memiliki beberapa class sekaligus (dipisahkan spasi), dan satu nama class bisa dipakai oleh banyak elemen berbeda.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo HTML Classes</title>
  <style>
    .badge {
      display: inline-block;
      padding: 4px 10px;
      border-radius: 999px;
      font-size: 12px;
      font-weight: bold;
    }
    .badge-success { background: #dcfce7; color: #15803d; }
    .badge-danger { background: #fee2e2; color: #b91c1c; }
  </style>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Status Siswa</h2>
  <p>Rian Pratama: <span class="badge badge-success">Aktif</span></p>
  <p>Budi Santoso: <span class="badge badge-danger">Nonaktif</span></p>
</body>
</html>`,
    codeExplanation: [
      'class="badge badge-success" menggabungkan styling umum .badge dan warna spesifik .badge-success.',
      'Banyak elemen dapat berbagi class yang sama.'
    ],
    quiz: {
      question: 'Karakter apakah yang digunakan di dalam CSS untuk menyeleksi elemen berdasarkan nama kelasnya?',
      options: ['Tanda pagar (#)', 'Tanda titik (.)', 'Tanda seru (!)', 'Tanda bintang (*)'],
      answer: 1,
      explanation: 'Tanda titik (.) digunakan di CSS untuk menargetkan class (contoh: .badge).'
    }
  },

  {
    title: 'HTML Classes - Code Challenge (Menerapkan Multi-Class)',
    chapter: 'HTML Classes',
    type: 'challenge',
    order: 62,
    overview: 'Tantangan membuat elemen dengan atribut class.',
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🚀 Tantangan: Tombol dengan Class</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Buatlah tombol <code>&lt;button class="btn btn-primary"&gt;Daftar&lt;/button&gt;</code>.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Class</title>
</head>
<body>

</body>
</html>`,
    challenge: {
      instruction: 'Buat tag <button class="btn btn-primary">Daftar</button>.',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Class</title>
</head>
<body>

</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Class</title>
</head>
<body>
  <button class="btn btn-primary">Daftar</button>
</body>
</html>`,
      hint: 'Gunakan <button class="btn btn-primary">Daftar</button>'
    }
  },

  // ── 8. HTML Id ────────────────────────────────────────────────────────────
  {
    title: 'HTML Id - Identitas Unik Elemen (#id)',
    chapter: 'HTML Id',
    type: 'code',
    order: 63,
    overview: 'Atribut id digunakan untuk memberikan identitas unik pada tepat satu elemen HTML dalam satu halaman.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🆔 Aturan Emas Atribut ID</h2>
        <div class="space-y-2 text-xs">
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>1. Wajib Unik</strong>: Nilai ID tidak boleh ada yang kembar di dalam satu dokumen HTML.
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>2. Selektor CSS (#)</strong>: Dipanggil dengan tanda pagar di CSS (contoh: <code>#header-utama { ... }</code>).
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>3. Target JavaScript & Bookmark</strong>: Digunakan dalam <code>document.getElementById("nama-id")</code> dan anchor links <code>href="#nama-id"</code>.
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo HTML ID</title>
  <style>
    #main-header {
      background-color: #0284c7;
      color: white;
      padding: 20px;
      text-align: center;
      border-radius: 8px;
    }
  </style>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h1 id="main-header">Judul Utama Website Eksklusif</h1>
</body>
</html>`,
    codeExplanation: [
      '#main-header menargetkan elemen tunggal dengan id="main-header".',
      'ID tidak boleh diawali dengan angka.'
    ],
    quiz: {
      question: 'Berapa kali sebuah nilai ID yang sama boleh digunakan dalam satu halaman web HTML?',
      options: ['Bebas sebanyak mungkin', 'Tepat 1 kali (harus unik)', 'Maksimal 5 kali', 'Tergantung ukuran file'],
      answer: 1,
      explanation: 'Atribut ID bersifat unik dan hanya boleh digunakan satu kali per halaman untuk satu elemen saja.'
    }
  },

  {
    title: 'HTML Id - Code Challenge (Membuat Elemen Ber-ID)',
    chapter: 'HTML Id',
    type: 'challenge',
    order: 64,
    overview: 'Latihan membuat elemen heading dengan ID unik.',
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🚀 Tantangan: ID Unik Header</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Buatlah tag <code>&lt;h1 id="judul-blog"&gt;Blog Harian Saya&lt;/h1&gt;</code>.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan ID</title>
</head>
<body>

</body>
</html>`,
    challenge: {
      instruction: 'Buat tag <h1 id="judul-blog">Blog Harian Saya</h1>.',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan ID</title>
</head>
<body>

</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan ID</title>
</head>
<body>
  <h1 id="judul-blog">Blog Harian Saya</h1>
</body>
</html>`,
      hint: 'Gunakan <h1 id="judul-blog">Blog Harian Saya</h1>'
    }
  },

  // ── 9. HTML Buttons ───────────────────────────────────────────────────────
  {
    title: 'HTML Buttons - Elemen Tombol Klik & Interaksi',
    chapter: 'HTML Buttons',
    type: 'code',
    order: 65,
    overview: 'Tag <button> digunakan untuk membuat tombol yang dapat diklik untuk memicu aksi JavaScript atau submit formulir.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🔘 Elemen &lt;button&gt;</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Di dalam tag <code>&lt;button&gt;</code>, Anda dapat meletakkan teks, gambar ikon, maupun format tebal.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo Tombol HTML</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <button type="button" onclick="alert('Tombol Berhasil Diklik!')" style="background: #10b981; color: white; border: none; padding: 10px 20px; font-size: 16px; border-radius: 8px; cursor: pointer;">
    🚀 Klik Saya!
  </button>
</body>
</html>`,
    codeExplanation: [
      'type="button" menandai tombol biasa.',
      'onclick="alert(...)" mengeksekusi kode JavaScript saat tombol ditekan.'
    ],
    quiz: {
      question: 'Atribut apakah yang digunakan pada tag <button> untuk menentukan aksinya (seperti tombol submit formulir)?',
      options: ['kind', 'type', 'action', 'role'],
      answer: 1,
      explanation: 'Atribut type (contoh: type="button", type="submit", type="reset") menentukan tipe fungsi tombol.'
    }
  },

  // ── 10. HTML Iframes ──────────────────────────────────────────────────────
  {
    title: 'HTML Iframes - Menyematkan Halaman & Video YouTube',
    chapter: 'HTML Iframes',
    type: 'code',
    order: 66,
    overview: 'Tag <iframe> (Inline Frame) digunakan untuk menampilkan dokumen web atau media video eksternal di dalam halaman saat ini.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🖼️ Menyematkan Konten Eksternal</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Sintaks: <code>&lt;iframe src="URL" width="600" height="400" title="Deskripsi"&gt;&lt;/iframe&gt;</code>. Sangat sering digunakan untuk menyematkan Google Maps dan Video YouTube.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo Iframe</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Menyematkan Halaman Eksternal</h2>
  <iframe 
    src="https://www.wikipedia.org" 
    width="100%" 
    height="350" 
    title="Wikipedia Frame" 
    style="border: 2px solid #cbd5e1; border-radius: 10px;">
  </iframe>
</body>
</html>`,
    codeExplanation: [
      'Atribut src menunjukkan URL halaman yang disematkan.',
      'Atribut title wajib disertakan untuk aksesibilitas pembaca layar (screen reader).'
    ],
    quiz: {
      question: 'Atribut apakah yang menentukan alamat URL halaman yang disematkan ke dalam tag <iframe>?',
      options: ['href', 'src', 'url', 'target'],
      answer: 1,
      explanation: 'Atribut src (Source) menentukan link URL dari halaman web eksternal yang dimuat di dalam iframe.'
    }
  },

  // ── 11. HTML JavaScript ───────────────────────────────────────────────────
  {
    title: 'HTML JavaScript - Tag Script & Manipulasi DOM Dasar',
    chapter: 'HTML JavaScript',
    type: 'code',
    order: 67,
    overview: 'Tag <script> digunakan untuk menyematkan kode JavaScript agar halaman web menjadi interaktif dan dinamis.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">⚡ Menghubungkan JavaScript ke HTML</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          JavaScript dapat memanipulasi elemen HTML secara langsung melalui Document Object Model (DOM), seperti mengubah teks, warna, atau menyembunyikan elemen.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo HTML JavaScript</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2 id="demo-text">Teks Sebelum Diubah</h2>
  <button type="button" onclick="ubahTeks()" style="padding: 8px 16px; background: #6366f1; color: white; border: none; border-radius: 6px; cursor: pointer;">
    Ubah Teks dengan JS
  </button>

  <script>
    function ubahTeks() {
      document.getElementById('demo-text').innerHTML = '🎉 Teks Berhasil Diubah oleh JavaScript!';
      document.getElementById('demo-text').style.color = '#10b981';
    }
  </script>
</body>
</html>`,
    codeExplanation: [
      'Tag <script> membungkus kode JavaScript.',
      'document.getElementById() mencari elemen berdasarkan ID-nya.',
      'innerHTML mengganti konten teks di dalam elemen tersebut.'
    ],
    quiz: {
      question: 'Tag apakah yang digunakan dalam dokumen HTML untuk menyisipkan kode JavaScript?',
      options: ['<javascript>', '<script>', '<js>', '<code>'],
      answer: 1,
      explanation: 'Tag <script> digunakan untuk menuliskan kode JavaScript inline atau menghubungkan file script eksternal.'
    }
  },

  // ── 12. HTML File Paths ───────────────────────────────────────────────────
  {
    title: 'HTML File Paths - Jalur File Relatif vs Absolut',
    chapter: 'HTML File Paths',
    type: 'code',
    order: 68,
    overview: 'Memahami cara menulis path file gambar, stylesheet, dan halaman lain dengan benar.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">📁 Jalur File dalam Web Development</h2>
        <div class="space-y-2 text-xs">
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>1. Relatif ke Folder yang Sama</strong>: <code>src="gambar.jpg"</code>
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>2. Relatif ke Subfolder</strong>: <code>src="images/gambar.jpg"</code>
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>3. Naik Satu Tingkat Folder</strong>: <code>src="../gambar.jpg"</code>
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>4. Jalur Absolut (URL Lengkap)</strong>: <code>src="https://domain.com/foto.jpg"</code>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo File Paths</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Contoh Jalur Gambar</h2>
  <!-- Jalur Absolut -->
  <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300" alt="Laptop" width="200">
</body>
</html>`,
    codeExplanation: [
      'Jalur absolut diawali dengan http:// atau https://.',
      'Jalur relatif ../ digunakan untuk keluar dari satu folder ke atas.'
    ],
    quiz: {
      question: 'Sintaks manakah yang digunakan pada jalur file relatif untuk naik satu tingkat ke folder di atasnya?',
      options: ['./', '../', '//', '.../'],
      answer: 1,
      explanation: '../ memberitahu peramban untuk naik 1 tingkat direktori ke atas.'
    }
  },

  // ── 13. HTML Head ─────────────────────────────────────────────────────────
  {
    title: 'HTML Head - Komponen Metadata & Konfigurasi Dokumen',
    chapter: 'HTML Head',
    type: 'code',
    order: 69,
    overview: 'Elemen <head> adalah wadah untuk seluruh metadata dokumen HTML yang tidak tampil langsung di badan halaman.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🧠 Otak Dokumen: Tag &lt;head&gt;</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code>&lt;meta charset="UTF-8"&gt;</code>: Encoding karakter universal (mendukung semua huruf dunia dan emoji).
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code>&lt;meta name="viewport" content="..."&gt;</code>: Kunci agar web responsif di HP.
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code>&lt;meta name="description" content="..."&gt;</code>: Deskripsi snippet di hasil pencarian Google.
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code>&lt;base href="..." target="_blank"&gt;</code>: Menetapkan basis URL default untuk seluruh link.
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Platform pembelajaran LMS terlengkap.">
  <meta name="author" content="Bagus Rahmat">
  <title>Dokumen Lengkap Head</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Metadata Head Lengkap</h2>
  <p>Seluruh konfigurasi penting tersimpan rapi di dalam seksi &lt;head&gt;.</p>
</body>
</html>`,
    codeExplanation: [
      'charset="UTF-8" memastikan teks dan simbol emoji tampil tanpa error.',
      'viewport membuat tampilan responsif di layar mobile.'
    ],
    quiz: {
      question: 'Tag meta apakah yang wajib disertakan agar website dapat menyesuaikan skala layarnya pada perangkat smartphone?',
      options: ['<meta name="mobile">', '<meta name="viewport" content="width=device-width, initial-scale=1.0">', '<meta name="screen">', '<meta name="responsive">'],
      answer: 1,
      explanation: 'Tag meta viewport mengatur lebar area pandang (viewport) agar sesuai dengan lebar fisik layar perangkat.'
    }
  },

  // ── 14. HTML Layout ───────────────────────────────────────────────────────
  {
    title: 'HTML Layout - Elemen Semantik Struktur Web Modern',
    chapter: 'HTML Layout',
    type: 'code',
    order: 70,
    overview: 'HTML5 memperkenalkan elemen tata letak semantik yang memiliki arti jelas bagi mesin pencari dan browser.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🏛️ Struktur Layout Semantik HTML5</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-2.5 text-xs">
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono">
            <strong>&lt;header&gt;</strong>: Kepala halaman / logo.
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono">
            <strong>&lt;nav&gt;</strong>: Menu navigasi utama.
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono">
            <strong>&lt;section&gt;</strong>: Seksi konten bertema.
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono">
            <strong>&lt;article&gt;</strong>: Artikel mandiri / blog post.
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono">
            <strong>&lt;aside&gt;</strong>: Sidebar samping / iklan.
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono">
            <strong>&lt;footer&gt;</strong>: Catatan kaki / hak cipta.
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Layout Semantik</title>
  <style>
    header, nav, section, footer { padding: 15px; margin-bottom: 10px; border-radius: 8px; }
    header { background: #6366f1; color: white; }
    nav { background: #e0e7ff; }
    section { background: white; border: 1px solid #cbd5e1; }
    footer { background: #1e293b; color: white; text-align: center; }
  </style>
</head>
<body style="font-family: sans-serif; padding: 20px; background: #f8fafc;">
  <header><h1>Portal Berita EduTech</h1></header>
  <nav><a href="#">Home</a> | <a href="#">Tutorial</a></nav>
  <section>
    <h2>Artikel Utama</h2>
    <p>HTML5 Semantics mempermudah mesin pencari memahami struktur konten kita.</p>
  </section>
  <footer><p>&copy; 2026 EduTech</p></footer>
</body>
</html>`,
    codeExplanation: [
      '<header>, <nav>, <section>, dan <footer> menggantikan <div> generik untuk struktur semantik yang ramah SEO.'
    ],
    quiz: {
      question: 'Tag semantik manakah yang paling tepat digunakan untuk membungkus tautan-tautan navigasi menu utama?',
      options: ['<menu>', '<nav>', '<links>', '<navigate>'],
      answer: 1,
      explanation: 'Tag <nav> (Navigation) khusus dirancang untuk membungkus kumpulan tautan navigasi utama website.'
    }
  },

  // ── 15. HTML Responsive ───────────────────────────────────────────────────
  {
    title: 'HTML Responsive - Desain Web Ramah Semua Perangkat',
    chapter: 'HTML Responsive',
    type: 'code',
    order: 71,
    overview: 'Responsive Web Design (RWD) memastikan halaman web tampil proporsional dan nyaman dibaca di desktop, tablet, maupun smartphone.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">📱 3 Fondasi Web Responsif</h2>
        <div class="space-y-2 text-xs">
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>1. Meta Viewport</strong>: <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code>
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>2. Fluid Images</strong>: <code>max-width: 100%; height: auto;</code>
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>3. CSS Media Queries</strong>: Menyesuaikan tata letak kolom berdasarkan lebar layar.
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Demo Web Responsif</title>
  <style>
    .container {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
    }
    .box {
      flex: 1 1 250px;
      background: #e0f2fe;
      padding: 20px;
      border-radius: 8px;
      border: 1px solid #7dd3fc;
      text-align: center;
    }
  </style>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Layout Responsif (Resize Browser Anda!)</h2>
  <div class="container">
    <div class="box">Kolom 1</div>
    <div class="box">Kolom 2</div>
    <div class="box">Kolom 3</div>
  </div>
</body>
</html>`,
    codeExplanation: [
      'flex-wrap: wrap memungkinkan kotak-kotak kolom turun ke bawah saat layar menyempit.'
    ],
    quiz: {
      question: 'Apa fungsi dari pengaturan flex: 1 1 250px pada kotak layout di atas?',
      options: ['Mengunci lebar kotak agar selalu 250px tanpa berubah', 'Membuat kotak fleksibel dengan batas minimal 250px sebelum membungkus ke baris baru', 'Menyembunyikan kotak di HP', 'Mengubah warna teks otomatis'],
      answer: 1,
      explanation: 'Pengaturan flex basis 250px membuat kotak menyesuaikan ruang kosong dan otomatis berpindah ke bawah jika layar lebih kecil dari 250px.'
    }
  },

  // ── 16. HTML Computercode ─────────────────────────────────────────────────
  {
    title: 'HTML Computercode - Elemen Kode Pemrograman & Keyboard',
    chapter: 'HTML Computercode',
    type: 'code',
    order: 72,
    overview: 'HTML menyediakan elemen khusus untuk menampilkan cuplikan kode pemrograman, tombol keyboard, output komputer, dan variabel matematika.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">💻 Elemen Kode Komputer</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-2.5 text-xs">
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code>&lt;code&gt;</code>: Cuplikan kode program pendek (font monospace).
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code>&lt;kbd&gt;</code>: Tombol keyboard pengguna (misal: <kbd>Ctrl</kbd> + <kbd>C</kbd>).
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code>&lt;samp&gt;</code>: Output hasil dari program komputer.
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code>&lt;var&gt;</code>: Variabel dalam matematika atau coding (x, y).
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code>&lt;pre&gt;</code>: Blok kode multi-baris yang mempertahankan spasi & indentasi.
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo Computer Code</title>
  <style>
    kbd {
      background-color: #eee;
      border-radius: 3px;
      border: 1px solid #b4b4b4;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
      color: #333;
      display: inline-block;
      font-size: 0.85em;
      font-weight: 700;
      line-height: 1;
      padding: 2px 4px;
      white-space: nowrap;
    }
  </style>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Tutorial Shortcut</h2>
  <p>Tekan <kbd>Ctrl</kbd> + <kbd>S</kbd> untuk menyimpan file di editor.</p>
  
  <h3>Cuplikan Kode JavaScript:</h3>
  <pre><code>let x = 10;
let y = 20;
console.log(x + y);</code></pre>
  
  <p>Output konsol: <samp>30</samp></p>
</body>
</html>`,
    codeExplanation: [
      '<kbd> memberi efek visual tombol keyboard fisik.',
      '<pre><code> membungkus blok kode multi-baris tanpa menghilangkan spasi indentasi.'
    ],
    quiz: {
      question: 'Tag manakah yang paling tepat digunakan untuk menandai input tombol keyboard yang harus ditekan oleh pengguna?',
      options: ['<key>', '<kbd>', '<button>', '<input>'],
      answer: 1,
      explanation: 'Tag <kbd> (Keyboard Input) secara semantik menandai tombol keyboard fisik yang harus ditekan pengguna.'
    }
  },

  {
    title: 'HTML Computercode - Code Challenge (Panduan Terminal)',
    chapter: 'HTML Computercode',
    type: 'challenge',
    order: 73,
    overview: 'Tantangan membuat dokumentasi perintah terminal dengan tag kbd dan code.',
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🚀 Tantangan: Panduan Terminal</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Buatlah tag <code>&lt;p&gt;Jalankan perintah &lt;code&gt;npm run dev&lt;/code&gt; di terminal.&lt;/p&gt;</code>.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Panduan</title>
</head>
<body>

</body>
</html>`,
    challenge: {
      instruction: 'Buat tag <p>Jalankan perintah <code>npm run dev</code> di terminal.</p>.',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Panduan</title>
</head>
<body>

</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Panduan</title>
</head>
<body>
  <p>Jalankan perintah <code>npm run dev</code> di terminal.</p>
</body>
</html>`,
      hint: 'Gunakan <p>Jalankan perintah <code>npm run dev</code> di terminal.</p>'
    }
  }
];
