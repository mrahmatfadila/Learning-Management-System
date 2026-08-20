import { HtmlLessonItem } from './htmlPart2';

export const htmlLessonsPart3: HtmlLessonItem[] = [
  // ── 1. HTML Semantics ─────────────────────────────────────────────────────
  {
    title: 'HTML Semantics - Arti Makna Elemen Web',
    chapter: 'HTML Semantics',
    type: 'code',
    order: 74,
    overview: 'Elemen semantik adalah elemen HTML yang memiliki arti jelas dan dapat dipahami baik oleh browser, pengembang web, maupun mesin pencari (SEO).',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🏛️ Elemen Semantik vs Non-Semantik</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Dalam HTML, terdapat dua kategori elemen:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-rose-500 font-bold block mb-1">Non-Semantik (&lt;div&gt; & &lt;span&gt;)</strong>
            <p class="text-slate-600 dark:text-slate-400">Tidak menceritakan apa pun tentang konten di dalamnya kepada browser atau mesin pencari.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-emerald-500 font-bold block mb-1">Semantik (&lt;header&gt;, &lt;article&gt;, &lt;footer&gt;)</strong>
            <p class="text-slate-600 dark:text-slate-400">Mendefinisikan secara jelas perannya (kepala halaman, artikel berita, navigasi, catatan kaki).</p>
          </div>
        </div>

        <div class="space-y-2 text-xs">
          <h3 class="font-bold text-slate-800 dark:text-white text-sm">🌟 Daftar Tag Semantik Populer HTML5:</h3>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1 font-mono text-[11px]">
            <div>• <code>&lt;header&gt;</code>: Wadah pengantar / menu logo teratas.</div>
            <div>• <code>&lt;nav&gt;</code>: Seksi khusus tautan navigasi.</div>
            <div>• <code>&lt;main&gt;</code>: Konten inti dominan dari suatu halaman.</div>
            <div>• <code>&lt;section&gt;</code>: Bagian bab bertema tersendiri.</div>
            <div>• <code>&lt;article&gt;</code>: Konten mandiri yang bisa disebarkan ulang (blog post, forum thread).</div>
            <div>• <code>&lt;aside&gt;</code>: Konten samping / sidebar informasi pelengkap.</div>
            <div>• <code>&lt;figure&gt; & &lt;figcaption&gt;</code>: Media gambar beserta takarir/keterangannya.</div>
            <div>• <code>&lt;time&gt;</code>: Waktu atau tanggal yang dapat dipahami mesin.</div>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo HTML Semantics</title>
  <style>
    body { font-family: sans-serif; margin: 0; padding: 20px; background: #f8fafc; }
    header, nav, main, article, aside, footer { padding: 15px; margin-bottom: 10px; border-radius: 8px; }
    header { background: #6366f1; color: white; }
    nav { background: #e0e7ff; }
    article { background: white; border: 1px solid #cbd5e1; }
    figure { margin: 0; background: #f1f5f9; padding: 10px; border-radius: 8px; }
    figcaption { font-size: 12px; color: #64748b; margin-top: 5px; }
    footer { background: #1e293b; color: white; text-align: center; }
  </style>
</head>
<body>
  <header><h1>Tech Portal ID</h1></header>
  <nav><a href="#">Beranda</a> &bull; <a href="#">Tutorial</a></nav>
  
  <main>
    <article>
      <h2>Peluncuran Satelit Nusantara</h2>
      <p>Diterbitkan pada <time datetime="2026-08-20">20 Agustus 2026</time>.</p>
      <figure>
        <img src="https://images.unsplash.com/photo-1517976487502-570a273b0676?w=400" alt="Roket Antariksa" width="300" style="border-radius: 6px;">
        <figcaption>Gbr 1: Roket pembawa satelit lepas landas dengan sukses.</figcaption>
      </figure>
    </article>
  </main>

  <footer><p>&copy; 2026 Tech Portal ID</p></footer>
</body>
</html>`,
    codeExplanation: [
      '<article> menandakan konten berita mandiri yang memiliki nilai berdiri sendiri.',
      '<time datetime="2026-08-20"> memudahkan bot mesin pencari mengindeks tanggal artikel.',
      '<figure> dan <figcaption> mengelompokkan ilustrasi gambar dengan teks penjelasannya.'
    ],
    quiz: {
      question: 'Manakah tag semantik yang paling tepat untuk mengelompokkan gambar beserta teks takarir (caption) penjelasnya?',
      options: ['<div> dan <p>', '<figure> dan <figcaption>', '<picture> dan <alt>', '<image> dan <label>'],
      answer: 1,
      explanation: '<figure> digunakan untuk membungkus media mandiri dan <figcaption> mendefinisikan teks takarir (caption) penjelasnya.'
    }
  },

  {
    title: 'HTML Semantics - Exercises (Menyusun Artikel Berita Semantik)',
    chapter: 'HTML Semantics',
    type: 'challenge',
    order: 75,
    overview: 'Latihan menggunakan elemen semantik <article>, <header>, dan <footer>.',
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">✍️ Latihan Struktur Semantik</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Susun sebuah <code>&lt;article&gt;</code> yang memuat <code>&lt;header&gt;</code> dengan judul artikel dan <code>&lt;footer&gt;</code> dengan info penulis.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Semantik</title>
</head>
<body>

</body>
</html>`,
    challenge: {
      instruction: 'Buat tag <article><header><h2>Judul Berita</h2></header><p>Isi artikel berita hari ini.</p><footer>Penulis: Redaksi</footer></article>.',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Semantik</title>
</head>
<body>

</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Semantik</title>
</head>
<body>
  <article>
    <header>
      <h2>Judul Berita</h2>
    </header>
    <p>Isi artikel berita hari ini.</p>
    <footer>Penulis: Redaksi</footer>
  </article>
</body>
</html>`,
      hint: 'Gunakan <article> yang di dalamnya memiliki <header>, <p>, dan <footer>'
    }
  },

  // ── 2. HTML Style Guide ───────────────────────────────────────────────────
  {
    title: 'HTML Style Guide - Standar Konvensi Penulisan Kode Bersih',
    chapter: 'HTML Style Guide',
    type: 'code',
    order: 76,
    overview: 'Pedoman penulisan kode HTML bersih, konsisten, dan berstandar industri internasional.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">📐 Kaidah Penulisan HTML Standar Industri</h2>
        <div class="space-y-3 text-xs">
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>1. Selalu Gunakan Deklarasi Doctype</strong>: Awali file dengan <code>&lt;!DOCTYPE html&gt;</code>.
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>2. Gunakan Huruf Kecil (Lowercase)</strong>: Selalu tulis nama elemen dan nama atribut dalam huruf kecil (contoh: <code>&lt;section class="menu"&gt;</code> bukan <code>&lt;SECTION CLASS="MENU"&gt;</code>).
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>3. Selalu Tutup Elemen & Beri Tanda Petik</strong>: Jangan pernah lupa tag penutup dan selalu bungkus nilai atribut dengan tanda petik ganda <code>title="Deskripsi"</code>.
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>4. Indentasi Konsisten (2 Spasi)</strong>: Berikan 2 spasi indentasi untuk setiap elemen bersarang agar kode mudah dibaca oleh tim developer.
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Format Kode Bersih</title>
</head>
<body>
  <!-- Contoh Indentasi Bersih 2 Spasi -->
  <header>
    <nav>
      <a href="/">Beranda</a>
    </nav>
  </header>
  <main>
    <h1>Standar Kode Rapi</h1>
    <p>Penulisan huruf kecil dan tanda petik ganda membuat kode mudah dipelihara.</p>
  </main>
</body>
</html>`,
    codeExplanation: [
      'Semua tag menggunakan huruf kecil (lowercase).',
      'Nilai atribut selalu dibungkus tanda petik ganda "".',
      'Indentasi berjenjang 2 spasi memudahkan pembacaan hirarki.'
    ],
    quiz: {
      question: 'Manakah penulisan elemen dan atribut yang paling sesuai dengan rekomendasi standar HTML Style Guide modern?',
      options: ['<SECTION ID=MENU>', '<section id="menu">', '<Section Id="Menu">', '<SECTION id=menu>'],
      answer: 1,
      explanation: 'Standar HTML modern merekomendasikan penulisan huruf kecil murni (lowercase) dan nilai atribut dibungkus tanda petik ganda.'
    }
  },

  // ── 3. HTML Entities ──────────────────────────────────────────────────────
  {
    title: 'HTML Entities - Karakter Khusus & Tanda Dilindungi',
    chapter: 'HTML Entities',
    type: 'code',
    order: 77,
    overview: 'HTML Entities digunakan untuk menampilkan karakter khusus yang dilindungi oleh sintaks HTML (seperti <, >, &, dan hak cipta).',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🔣 Mengapa Kita Membutuhkan Entities?</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Jika Anda mengetik tanda <code>&lt;</code> atau <code>&gt;</code> langsung di dalam teks paragraf, browser akan mengiranya sebagai pembuka tag HTML baru! Untuk menampilkannya secara harfiah, kita menggunakan <strong>Entity Name</strong> (diawali <code>&amp;</code> dan diakhiri <code>;</code>).
        </p>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-2.5 text-xs font-mono">
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>&amp;lt;</strong> = <code>&lt;</code> (Less Than)
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>&amp;gt;</strong> = <code>&gt;</code> (Greater Than)
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>&amp;amp;</strong> = <code>&amp;</code> (Ampersand)
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>&amp;quot;</strong> = <code>"</code> (Double Quote)
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>&amp;copy;</strong> = <code>&copy;</code> (Copyright)
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>&amp;nbsp;</strong> = Spasi Non-Breaking
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo HTML Entities</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Karakter Khusus dalam HTML</h2>
  <p>Untuk membuat paragraf gunakan tag <code>&amp;lt;p&amp;gt;</code>.</p>
  <p>Perusahaan Tom &amp;amp; Jerry &copy; 2026.</p>
  <p>Menambahkan spasi ekstra:&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;Teks setelah 4 spasi.</p>
</body>
</html>`,
    codeExplanation: [
      '&lt; dirender menjadi simbol kurang dari (<).',
      '&amp; dirender menjadi simbol ampersand (&).',
      '&copy; dirender menjadi simbol hak cipta (©).',
      '&nbsp; (Non-Breaking Space) memaksa browser memberikan spasi ekstra tanpa digabungkan.'
    ],
    quiz: {
      question: 'Entity code manakah yang digunakan untuk menampilkan simbol hak cipta (©)?',
      options: ['&copy;', '&copyright;', '&cr;', '&reg;'],
      answer: 0,
      explanation: '&copy; adalah nama entity standar untuk menampilkan simbol copyright (©).'
    }
  },

  {
    title: 'HTML Entities - Code Challenge (Menampilkan Simbol Coding)',
    chapter: 'HTML Entities',
    type: 'challenge',
    order: 78,
    overview: 'Tantangan menampilkan sintaks tag dengan entities.',
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🚀 Tantangan: Dokumentasi Tag</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Buatlah tag <code>&lt;p&gt;Tag &amp;lt;h1&amp;gt; adalah judul utama &amp;copy; 2026.&lt;/p&gt;</code>.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Entities</title>
</head>
<body>

</body>
</html>`,
    challenge: {
      instruction: 'Buat tag <p>Tag &lt;h1&gt; adalah judul utama &copy; 2026.</p>.',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Entities</title>
</head>
<body>

</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Entities</title>
</head>
<body>
  <p>Tag &lt;h1&gt; adalah judul utama &copy; 2026.</p>
</body>
</html>`,
      hint: 'Gunakan &lt;h1&gt; dan &copy;'
    }
  },

  // ── 4. HTML Symbols ───────────────────────────────────────────────────────
  {
    title: 'HTML Symbols - Simbol Matematika, Mata Uang & Yunani',
    chapter: 'HTML Symbols',
    type: 'code',
    order: 79,
    overview: 'Banyak simbol matematika, teknis, mata uang, dan huruf Yunani yang tidak ada di keyboard fisik dapat ditampilkan menggunakan entitas simbol HTML.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">♾️ Simbol Matematika & Mata Uang</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-2.5 text-xs font-mono">
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>&amp;euro;</strong> = &euro; (Euro)
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>&amp;yen;</strong> = &yen; (Yen)
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>&amp;infin;</strong> = &infin; (Infinity)
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>&amp;sum;</strong> = &sum; (Sum / Sigma)
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>&amp;pi;</strong> = &pi; (Pi)
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>&amp;radic;</strong> = &radic; (Akar Kuadrat)
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo HTML Symbols</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Rumus & Simbol Finansial</h2>
  <p>Harga Tiket Eropa: &euro; 150</p>
  <p>Rumus Lingkaran: Luas = &pi; &times; r<sup>2</sup></p>
  <p>Penjumlahan Matriks: &sum; x = &infin;</p>
</body>
</html>`,
    codeExplanation: [
      '&euro; menampilkan simbol mata uang Euro (€).',
      '&pi; menampilkan huruf Yunani pi (π).',
      '&times; menampilkan simbol perkalian (×).'
    ],
    quiz: {
      question: 'Entity code manakah yang digunakan untuk menampilkan simbol tak hingga / infinity (∞)?',
      options: ['&infinite;', '&infin;', '&inf;', '&loop;'],
      answer: 1,
      explanation: '&infin; digunakan untuk merender simbol tak hingga (∞).'
    }
  },

  // ── 5. HTML Emojis ────────────────────────────────────────────────────────
  {
    title: 'HTML Emojis - Karakter Emoji UTF-8 Modern',
    chapter: 'HTML Emojis',
    type: 'code',
    order: 80,
    overview: 'Emoji adalah karakter UTF-8 standar yang dapat ditampilkan langsung sebagai teks atau menggunakan kode desimal UTF-8.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">😀 Menggunakan Emoji di HTML</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Karena emoji adalah karakter teks UTF-8, Anda bisa langsung menyalinnya (misal: 🚀, 🎉, 🔥) atau menggunakan entitas numerik seperti <code>&amp;#128512;</code> (😀).
        </p>

        <div class="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-300">
          <strong>⚠️ Syarat Wajib:</strong> Pastikan tag <code>&lt;meta charset="UTF-8"&gt;</code> selalu ada di dalam <code>&lt;head&gt;</code> agar emoji dirender dengan sempurna di semua perangkat!
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo HTML Emojis</title>
</head>
<body style="font-family: sans-serif; padding: 20px; text-align: center;">
  <h1 style="font-size: 48px;">🚀 🎉 🔥 💡</h1>
  <p>Emoji adalah karakter teks, sehingga ukurannya bisa diperbesar dengan <code>font-size</code>!</p>
  <p>Emoji via Kode Desimal: &#128525; (Love Face) dan &#128187; (Laptop)</p>
</body>
</html>`,
    codeExplanation: [
      '<meta charset="UTF-8"> mengaktifkan dukungan penuh set karakter Unicode.',
      'Emoji dapat diubah ukurannya menggunakan properti CSS font-size.'
    ],
    quiz: {
      question: 'Apakah jenis format data dari sebuah emoji dalam dokumen HTML modern?',
      options: ['File gambar PNG kecil', 'Karakter teks Unicode (UTF-8)', 'Animasi Flash', 'Script JavaScript'],
      answer: 1,
      explanation: 'Emoji adalah karakter teks Unicode resmi berstandar UTF-8.'
    }
  },

  // ── 6. HTML Charsets ──────────────────────────────────────────────────────
  {
    title: 'HTML Charsets - Karakter Set ASCII, ANSI & UTF-8',
    chapter: 'HTML Charsets',
    type: 'code',
    order: 81,
    overview: 'Encoding karakter menentukan bagaimana byte biner diterjemahkan menjadi huruf dan simbol visual.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🌐 Evolusi Karakter Set Web</h2>
        <div class="space-y-2 text-xs">
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>ASCII (1960-an)</strong>: Hanya 128 karakter alfabet bahasa Inggris standar.
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>ANSI / ISO-8859-1 (1980-an)</strong>: 256 karakter untuk bahasa Eropa barat.
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>UTF-8 (Standar Global Saat Ini)</strong>: Mencakup seluruh karakter bahasa dunia (Arab, Mandarin, Jepang, Cyrillic) serta ribuan simbol dan emoji.
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo Multi-Bahasa UTF-8</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Dukungan Bahasa Dunia (UTF-8)</h2>
  <p>Bahasa Arab: مرحباً بالعالم</p>
  <p>Bahasa Jepang: こんにちは世界</p>
  <p>Bahasa Rusia: Привет, мир</p>
  <p>Bahasa Indonesia: Selamat Pagi Dunia!</p>
</body>
</html>`,
    codeExplanation: [
      '<meta charset="UTF-8"> adalah standar mutlak untuk seluruh web modern.'
    ],
    quiz: {
      question: 'Karakter encoding manakah yang menjadi standar mutlak wajib untuk semua halaman web HTML5 modern?',
      options: ['ASCII', 'ISO-8859-1', 'UTF-8', 'Windows-1252'],
      answer: 2,
      explanation: 'UTF-8 adalah standar encoding karakter universal untuk HTML5.'
    }
  },

  // ── 7. HTML URL Encode ────────────────────────────────────────────────────
  {
    title: 'HTML URL Encode - Pengkodean Persen (%20) pada URL',
    chapter: 'HTML URL Encode',
    type: 'code',
    order: 82,
    overview: 'URL hanya dapat dikirim melalui internet menggunakan set karakter ASCII. Karakter di luar ASCII dan karakter spasi harus diubah menjadi format persen (%XX).',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🔗 Cara Kerja URL Encoding</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Karakter spasi diubah menjadi <code>%20</code> atau tanda tambah <code>+</code>. Tanda tanya <code>?</code> menjadi <code>%3F</code>.
        </p>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs font-mono">
          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">Spasi = <strong>%20</strong></div>
          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">! = <strong>%21</strong></div>
          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"># = <strong>%23</strong></div>
          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">$ = <strong>%24</strong></div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo URL Encode</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Contoh URL Encoded</h2>
  <p>Pencarian Google dengan spasi:</p>
  <a href="https://www.google.com/search?q=belajar%20html%20pemula" target="_blank">
    https://www.google.com/search?q=belajar%20html%20pemula
  </a>
</body>
</html>`,
    codeExplanation: [
      'Karakter spasi antara kata "belajar", "html", dan "pemula" diubah menjadi %20 agar valid sebagai URL.'
    ],
    quiz: {
      question: 'Berapakah kode persen (URL Encode) untuk karakter spasi kosong?',
      options: ['%00', '%20', '%50', '%99'],
      answer: 1,
      explanation: '%20 adalah kode heksadesimal URL encode untuk karakter spasi kosong.'
    }
  },

  // ── 8. HTML vs. XHTML ─────────────────────────────────────────────────────
  {
    title: 'HTML vs. XHTML - Perbedaan Sintaks Fleksibel vs Ketat',
    chapter: 'HTML vs. XHTML',
    type: 'code',
    order: 83,
    overview: 'XHTML adalah varian HTML yang didefinisikan sebagai aplikasi XML dengan aturan sintaks yang sangat ketat dan tanpa toleransi error.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">⚖️ Perbedaan Utama HTML vs XHTML</h2>
        <div class="space-y-2.5 text-xs">
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>1. Tag Penutup Wajib</strong>: Di XHTML, semua elemen (termasuk empty tag) wajib ditutup (contoh: <code>&lt;br /&gt;</code>, <code>&lt;img src="..." /&gt;</code>).
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>2. Case-Sensitive</strong>: XHTML mewajibkan seluruh tag dan atribut menggunakan huruf kecil murni (lowercase).
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>3. Atribut Wajib Penuh</strong>: Di XHTML, atribut boolean tidak boleh disingkat (harus <code>disabled="disabled"</code> bukan hanya <code>disabled</code>).
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Perbandingan HTML & XHTML</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Gaya Penulisan Ketat (XHTML-Compliant)</h2>
  
  <!-- Tag ditutup dengan garis miring / -->
  <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300" alt="Laptop" width="200" />
  <br />
  
  <p>Menulis dengan gaya XHTML yang rapi membuat kode Anda kompatibel dengan parser XML.</p>
</body>
</html>`,
    codeExplanation: [
      '<img ... /> dan <br /> menggunakan self-closing slash yang merupakan syarat wajib di XHTML.'
    ],
    quiz: {
      question: 'Bagaimanakah cara penulisan tag break (<br>) yang benar dan valid menurut aturan sintaks ketat XHTML?',
      options: ['<BR>', '<br>', '<br />', '<break></break>'],
      answer: 2,
      explanation: 'Dalam XHTML, semua empty tag wajib ditutup secara eksplisit dengan garis miring penutup (<br />).'
    }
  }
];
