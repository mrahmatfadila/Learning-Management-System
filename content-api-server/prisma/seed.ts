import prisma from '../src/lib/prisma';

export const htmlLessonsList = [
  // ── 1. HTML HOME ──────────────────────────────────────────────────────────
  {
    title: 'HTML HOME - Selamat Datang di Dunia Web',
    chapter: 'HTML Tutorial',
    type: 'code',
    order: 1,
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-transparent p-6 rounded-2xl border border-orange-500/20">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">🌐 Selamat Datang di HTML Tutorial</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
            HTML (<strong>HyperText Markup Language</strong>) adalah bahasa standar pondasi utama dalam pembuatan setiap halaman web di seluruh dunia. Tanpa HTML, browser tidak akan tahu bagaimana cara menampilkan teks, tombol, gambar, formulir, atau video.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div class="text-orange-500 font-black text-base mb-1">🏗️ Kerangka Utama</div>
            <p class="text-xs text-slate-500 leading-relaxed">HTML bertindak sebagai rangka dan struktur dasar dari sebuah bangunan website.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div class="text-amber-500 font-black text-base mb-1">📖 Sangat Mudah Dipelajari</div>
            <p class="text-xs text-slate-500 leading-relaxed">Sintaks berbasis tag yang intuitif dan mudah dipahami bahkan untuk pemula tanpa latar belakang coding.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div class="text-emerald-500 font-black text-base mb-1">⚡ Standar Global W3C</div>
            <p class="text-xs text-slate-500 leading-relaxed">Didukung penuh oleh seluruh peramban web modern (Google Chrome, Firefox, Safari, Edge).</p>
          </div>
        </div>

        <div class="p-5 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200/60 dark:border-indigo-800/40">
          <h3 class="text-sm font-bold text-indigo-900 dark:text-indigo-300 mb-2">🎯 Apa yang Akan Anda Kuasai di Modul Ini?</h3>
          <ul class="list-disc list-inside text-xs text-indigo-800 dark:text-indigo-300/80 space-y-1.5 leading-relaxed">
            <li>Memahami struktur anatomi dokumen HTML standar (Doctype, html, head, body).</li>
            <li>Menggunakan elemen teks, paragraf, heading, format teks, dan kutipan.</li>
            <li>Mengelola link navigasi, gambar responsif, warna (HEX, RGB, HSL), dan layout.</li>
            <li>Mengerjakan latihan interaktif (*Exercises*) dan tantangan coding (*Code Challenges*) di setiap bab.</li>
          </ul>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Website Pertama Saya</title>
</head>
<body>
  <h1>Selamat Datang di Dunia Web! 👋</h1>
  <p>Ini adalah halaman web pertama yang saya buat menggunakan <strong>HTML</strong>.</p>
  <button onclick="alert('Halo dari HTML!')">Klik Saya!</button>
</body>
</html>`,
    quiz: {
      question: 'Apa kepanjangan dari singkatan HTML?',
      options: [
        'Hyperlinks and Text Markup Language',
        'HyperText Markup Language',
        'Home Tool Markup Language',
        'High Tech Modern Language'
      ],
      answer: 1,
      explanation: 'HTML merupakan singkatan dari HyperText Markup Language, yaitu bahasa markup standar untuk menstrukturkan halaman web.'
    }
  },

  // ── 2. HTML Introduction ──────────────────────────────────────────────────
  {
    title: 'HTML Introduction - Pengenalan & Cara Kerja',
    chapter: 'HTML Introduction',
    type: 'code',
    order: 2,
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🔍 Apa Sebenarnya HTML Itu?</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          HTML bukanlah bahasa pemrograman logika, melainkan sebuah <strong>Markup Language</strong> (bahasa penanda). HTML menggunakan serangkaian <em>tags</em> untuk memberi tahu web browser bagaimana konten harus diinterpretasikan dan disajikan.
        </p>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto border border-slate-800">
          <div class="text-amber-400 mb-2 font-bold">// Anatomi Dasar Tag HTML:</div>
          <div>&lt;<span class="text-rose-400">tagname</span>&gt; Konten yang ditampilkan &lt;/<span class="text-rose-400">tagname</span>&gt;</div>
          <div class="text-slate-400 mt-2 text-[11px] font-sans">
            • <code>&lt;tagname&gt;</code> adalah <strong>Opening Tag</strong> (Tag Pembuka).<br>
            • Konten berada di tengah.<br>
            • <code>&lt;/tagname&gt;</code> adalah <strong>Closing Tag</strong> (Tag Penutup dengan garis miring <code>/</code>).
          </div>
        </div>

        <div class="space-y-3">
          <h3 class="text-base font-bold text-slate-800 dark:text-white">📜 Struktur Dokumen Wajib HTML5</h3>
          <div class="space-y-2 text-xs text-slate-600 dark:text-slate-300">
            <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <strong class="text-orange-500 font-mono">&lt;!DOCTYPE html&gt;</strong>: Deklarasi versi HTML5.
            </div>
            <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <strong class="text-orange-500 font-mono">&lt;html&gt;</strong>: Root element dokumen.
            </div>
            <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <strong class="text-orange-500 font-mono">&lt;head&gt;</strong>: Metadata, title, charset, dan external links.
            </div>
            <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <strong class="text-orange-500 font-mono">&lt;body&gt;</strong>: Konten visual halaman web.
            </div>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Pengenalan HTML</title>
</head>
<body>
  <h1>Judul Utama Artikel</h1>
  <p>HTML memberi tahu browser struktur dari tulisan ini.</p>
</body>
</html>`,
    quiz: {
      question: 'Bagian tag HTML manakah yang membungkus seluruh konten visual yang terlihat di layar browser?',
      options: ['<head>', '<title>', '<body>', '<meta>'],
      answer: 2,
      explanation: 'Tag <body> membungkus seluruh konten visual halaman yang ditampilkan langsung di jendela browser.'
    }
  },

  {
    title: 'HTML Introduction - Exercises (Latihan Pemahaman)',
    chapter: 'HTML Introduction',
    type: 'challenge',
    order: 3,
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">✍️ Latihan Pengenalan HTML</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Uji pemahaman dasar Anda mengenai anatomi dokumen HTML. Lengkapi kode di samping agar membentuk struktur halaman HTML5 yang valid dengan sebuah judul utama (<code>&lt;h1&gt;</code>) dan satu paragraf (<code>&lt;p&gt;</code>).
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan HTML</title>
</head>
<body>
  
</body>
</html>`,
    challenge: {
      instruction: 'Tambahkan elemen <h1> dengan teks "Belajar HTML" dan elemen <p> dengan teks "HTML itu mudah dan menyenangkan!" di dalam tag <body>.',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan HTML</title>
</head>
<body>
  
</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan HTML</title>
</head>
<body>
  <h1>Belajar HTML</h1>
  <p>HTML itu mudah dan menyenangkan!</p>
</body>
</html>`,
      hint: 'Gunakan <h1>Belajar HTML</h1> lalu ikuti dengan <p>HTML itu mudah dan menyenangkan!</p>'
    }
  },

  // ── 3. HTML Editors ───────────────────────────────────────────────────────
  {
    title: 'HTML Editors - Lingkungan Kerja & Tooling',
    chapter: 'HTML Editors',
    type: 'theory',
    order: 4,
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">💻 Memilih Editor Kode untuk HTML</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          File HTML adalah file teks murni (*plain text*) yang disimpan dengan ekstensi <code>.html</code> atau <code>.htm</code>. Penggunaan Code Editor modern seperti Visual Studio Code akan melipatgandakan kecepatan dan produktivitas Anda.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-5 rounded-2xl bg-indigo-50/40 dark:bg-slate-900 border border-indigo-100 dark:border-slate-800">
            <h3 class="font-black text-indigo-900 dark:text-indigo-300 mb-2">⭐ Visual Studio Code (Rekomendasi Utama)</h3>
            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
              Editor paling populer di dunia industri saat ini dari Microsoft. Gratis, ringan, dan memiliki ribuan ekstensi produktivitas.
            </p>
            <ul class="text-xs text-indigo-700 dark:text-indigo-400 list-disc list-inside space-y-1">
              <li><strong>Emmet Abbreviation</strong>: Ketik <code>!</code> lalu tekan Tab untuk generate template HTML instan.</li>
              <li><strong>Live Server Extension</strong>: Auto-reload browser saat file disimpan.</li>
              <li><strong>Auto Rename Tag</strong>: Mengubah tag penutup secara otomatis saat tag pembuka diedit.</li>
            </ul>
          </div>

          <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h3 class="font-black text-slate-800 dark:text-white mb-2">🛠️ Alternatif Editor Lainnya</h3>
            <ul class="text-xs text-slate-600 dark:text-slate-400 space-y-2">
              <li>• <strong>Sublime Text</strong>: Sangat cepat dan responsif.</li>
              <li>• <strong>WebStorm</strong>: IDE komersial berkemampuan tinggi.</li>
              <li>• <strong>Online Playgrounds</strong>: CodePen, JSFiddle, dan Live Editor LMS ini.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Tutorial Editor HTML</title>
</head>
<body>
  <h2>Menulis HTML di VS Code</h2>
  <p>Ketik tanda seru <code>!</code> lalu tekan Tab untuk membuat kerangka ini secara otomatis!</p>
</body>
</html>`,
    quiz: {
      question: 'Ekstensi file apakah yang wajib digunakan saat menyimpan dokumen web HTML?',
      options: ['.htmldoc', '.html atau .htm', '.web', '.txt'],
      answer: 1,
      explanation: 'File dokumen HTML wajib disimpan dengan ekstensi .html atau .htm agar browser dapat mengenalinya sebagai halaman web.'
    }
  },

  // ── 4. HTML Basic ─────────────────────────────────────────────────────────
  {
    title: 'HTML Basic - Sintaks Inti & Dokumen Dasar',
    chapter: 'HTML Basic',
    type: 'code',
    order: 5,
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🧱 4 Elemen Bangunan Dasar HTML</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Semua dokumen HTML di internet dibangun menggunakan 4 pilar elemen dasar utama berikut:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <span class="text-xs font-bold text-orange-500 font-mono block mb-1">1. Headings (&lt;h1&gt; s/d &lt;h6&gt;)</span>
            <p class="text-slate-600 dark:text-slate-400">Digunakan untuk judul dan sub-judul. &lt;h1&gt; paling penting, &lt;h6&gt; paling kecil.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <span class="text-xs font-bold text-orange-500 font-mono block mb-1">2. Paragraphs (&lt;p&gt;)</span>
            <p class="text-slate-600 dark:text-slate-400">Digunakan untuk membuat blok teks alinea dengan spasi vertikal otomatis.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <span class="text-xs font-bold text-orange-500 font-mono block mb-1">3. Links (&lt;a href="..."&gt;)</span>
            <p class="text-slate-600 dark:text-slate-400">Tautan tautan antar-halaman menggunakan atribut <code>href</code>.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <span class="text-xs font-bold text-orange-500 font-mono block mb-1">4. Images (&lt;img src="..."&gt;)</span>
            <p class="text-slate-600 dark:text-slate-400">Elemen gambar yang membutuhkan atribut <code>src</code> dan <code>alt</code>.</p>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Dasar HTML</title>
</head>
<body>
  <h1>Judul Halaman Utama</h1>
  <p>Ini adalah sebuah paragraf pengantar artikel.</p>
  <a href="https://google.com" target="_blank">Kunjungi Google</a>
  <br><br>
  <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400" alt="Coding Laptop" width="300" style="border-radius: 12px;" />
</body>
</html>`,
    quiz: {
      question: 'Atribut manakah yang digunakan pada tag <a> untuk menentukan alamat tujuan link?',
      options: ['src', 'link', 'href', 'to'],
      answer: 2,
      explanation: 'Atribut "href" (Hypertext REFerence) digunakan pada tag <a> untuk menentukan URL tujuan link.'
    }
  },

  {
    title: 'HTML Basic - Code Challenge (Tantangan Praktik)',
    chapter: 'HTML Basic',
    type: 'challenge',
    order: 6,
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🚀 Tantangan: Kartu Profil Sederhana</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Buatlah struktur HTML untuk profil pengembang dengan menggabungkan <strong>Heading</strong>, <strong>Paragraf</strong>, dan <strong>Link</strong>.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Profil Saya</title>
</head>
<body>

</body>
</html>`,
    challenge: {
      instruction: 'Buat <h1> dengan teks "Nama Saya", <p> dengan teks "Saya seorang web developer", dan tautan <a> dengan href="https://github.com" dan teks "Lihat Portofolio".',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Profil Saya</title>
</head>
<body>

</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Profil Saya</title>
</head>
<body>
  <h1>Nama Saya</h1>
  <p>Saya seorang web developer</p>
  <a href="https://github.com">Lihat Portofolio</a>
</body>
</html>`,
      hint: 'Gunakan kombinasi <h1>, <p>, dan <a href="https://github.com">Lihat Portofolio</a>'
    }
  },

  // ── 5. HTML Elements ──────────────────────────────────────────────────────
  {
    title: 'HTML Elements - Anatomi & Elemen Bersarang (Nested Elements)',
    chapter: 'HTML Elements',
    type: 'code',
    order: 7,
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🧩 Memahami Elemen HTML Lebih Dalam</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Sebuah <strong>HTML Element</strong> didefinisikan oleh tag pembuka, konten di dalamnya, dan tag penutup. Elemen dapat dimasukkan ke dalam elemen lain (disebut <em>Nested Elements</em> atau elemen bersarang).
        </p>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto border border-slate-800">
          <div class="text-amber-400 mb-2 font-bold">// Contoh Nested Elements:</div>
          <div>&lt;<span class="text-rose-400">body</span>&gt;</div>
          <div class="ml-4">&lt;<span class="text-sky-400">h1</span>&gt;Judul Blog &lt;<span class="text-emerald-400">span</span>&gt;Pribadi&lt;/<span class="text-emerald-400">span</span>&gt;&lt;/<span class="text-sky-400">h1</span>&gt;</div>
          <div class="ml-4">&lt;<span class="text-sky-400">p</span>&gt;Ini adalah &lt;<span class="text-amber-300">strong</span>&gt;teks tebal&lt;/<span class="text-amber-300">strong</span>&gt; di dalam paragraf.&lt;/<span class="text-sky-400">p</span>&gt;</div>
          <div>&lt;/<span class="text-rose-400">body</span>&gt;</div>
        </div>

        <div class="p-4 rounded-xl bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900/40">
          <h3 class="font-bold text-orange-900 dark:text-orange-300 text-xs mb-1">⚠️ Empty Elements (Void Elements)</h3>
          <p class="text-xs text-orange-800 dark:text-orange-300/80 leading-relaxed">
            Ada beberapa elemen HTML yang <strong>tidak memiliki tag penutup dan tidak memiliki konten teks</strong>, contohnya: <code>&lt;br&gt;</code> (pindah baris), <code>&lt;hr&gt;</code> (garis horizontal), dan <code>&lt;img&gt;</code> (gambar).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Nested Elements Demo</title>
</head>
<body>
  <div>
    <h2>Belajar <em>Elemen Bersarang</em></h2>
    <p>HTML memungkinkan kita menaruh tag <strong>&lt;strong&gt;</strong> atau <u>&lt;u&gt;</u> di dalam tag paragraf.</p>
  </div>
</body>
</html>`,
    quiz: {
      question: 'Manakah di bawah ini yang merupakan contoh dari Empty Element (elemen tanpa tag penutup)?',
      options: ['<p>', '<div>', '<br>', '<h1>'],
      answer: 2,
      explanation: 'Tag <br> (break line) adalah empty element yang tidak memerlukan tag penutup maupun konten teks di dalamnya.'
    }
  },

  {
    title: 'HTML Elements - Exercises (Latihan Bersarang & Empty Tags)',
    chapter: 'HTML Elements',
    type: 'challenge',
    order: 8,
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">✍️ Latihan Elemen Bersarang</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Tunjukkan keahlian Anda dalam menyusun elemen bersarang. Buat sebuah paragraf yang di dalamnya terdapat kata penting bercetak tebal menggunakan tag <code>&lt;strong&gt;</code> dan garis pembatas horizontal <code>&lt;hr&gt;</code>.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Elemen</title>
</head>
<body>
  
</body>
</html>`,
    challenge: {
      instruction: 'Buatlah elemen <h1>Info Produk</h1>, lalu garis pembatas <hr>, dan sebuah <p> dengan teks: "Produk ini <strong>Sangat Populer</strong> di pasaran."',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Elemen</title>
</head>
<body>

</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Elemen</title>
</head>
<body>
  <h1>Info Produk</h1>
  <hr>
  <p>Produk ini <strong>Sangat Populer</strong> di pasaran.</p>
</body>
</html>`,
      hint: 'Gunakan <h1>, <hr>, dan <p>Produk ini <strong>Sangat Populer</strong> di pasaran.</p>'
    }
  },

  {
    title: 'HTML Elements - Code Challenge (Membangun Kartu Berita)',
    chapter: 'HTML Elements',
    type: 'challenge',
    order: 9,
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🚀 Tantangan: Kartu Cuplikan Berita</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Susun elemen HTML hierarkis yang bersih untuk kartu berita dengan heading, teks cuplikan, dan kata kunci yang diberi penekanan <code>&lt;em&gt;</code>.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Kartu Berita</title>
</head>
<body>

</body>
</html>`,
    challenge: {
      instruction: 'Buat <h2>Berita Terkini</h2>, lalu <p>Teknologi AI berkembang dengan <em>sangat pesat</em> tahun ini.</p>, diakhiri dengan <hr>.',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Kartu Berita</title>
</head>
<body>

</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Kartu Berita</title>
</head>
<body>
  <h2>Berita Terkini</h2>
  <p>Teknologi AI berkembang dengan <em>sangat pesat</em> tahun ini.</p>
  <hr>
</body>
</html>`,
      hint: 'Gunakan <h2>, <p> dengan <em> di dalamnya, lalu <hr>'
    }
  },

  // ── 6. HTML Attributes ────────────────────────────────────────────────────
  {
    title: 'HTML Attributes - Karakteristik & Atribut Inti',
    chapter: 'HTML Attributes',
    type: 'code',
    order: 10,
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🏷️ Mengenal Atribut HTML</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          <strong>Atribut HTML</strong> memberikan informasi atau konfigurasi tambahan pada elemen HTML. Atribut <strong>selalu dituliskan di dalam tag pembuka</strong> dan umumnya hadir dalam pasangan <code>nama="nilai"</code> (*name="value"*).
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code class="text-orange-500 font-bold font-mono">href</code> (Hyperlink Reference):
            <p class="text-slate-600 dark:text-slate-400 mt-1">Menentukan URL tujuan pada tag <code>&lt;a&gt;</code>.</p>
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code class="text-orange-500 font-bold font-mono">src & alt</code> (Source & Alt text):
            <p class="text-slate-600 dark:text-slate-400 mt-1"><code>src</code> menentukan lokasi gambar, <code>alt</code> menyediakan teks alternatif jika gambar gagal dimuat (penting untuk SEO & pembaca tunanetra).</p>
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code class="text-orange-500 font-bold font-mono">title</code> (Tooltip Text):
            <p class="text-slate-600 dark:text-slate-400 mt-1">Menampilkan balon petunjuk (*tooltip*) saat mouse diarahkan ke elemen.</p>
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code class="text-orange-500 font-bold font-mono">width & height</code>:
            <p class="text-slate-600 dark:text-slate-400 mt-1">Menentukan dimensi ukuran lebar dan tinggi gambar dalam piksel.</p>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Contoh Atribut HTML</title>
</head>
<body>
  <h1 title="Ini adalah judul utama website">Arahkan Kursor ke Sini!</h1>
  
  <a href="https://w3schools.com" target="_blank" title="Kunjungi W3Schools">
    Belajar di W3Schools (Buka di Tab Baru)
  </a>
  <br><br>
  <img 
    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500" 
    alt="Meja Kerja Web Developer" 
    width="320" 
    height="200"
    style="border-radius: 8px;"
  />
</body>
</html>`,
    quiz: {
      question: 'Manakah alasan utama mengapa atribut "alt" wajib disertakan pada setiap tag <img>?',
      options: [
        'Hanya untuk mengatur warna background gambar.',
        'Menyediakan teks pengganti untuk aksesibilitas screen reader dan jika gambar gagal dimuat.',
        'Mempercepat koneksi internet pengguna.',
        'Mengubah format gambar dari PNG ke JPEG secara otomatis.'
      ],
      answer: 1,
      explanation: 'Atribut "alt" sangat penting untuk aksesibilitas (pembaca tunanetra) dan SEO jika gambar tidak dapat ditampilkan.'
    }
  },

  {
    title: 'HTML Attributes - Exercises (Latihan Konfigurasi Atribut)',
    chapter: 'HTML Attributes',
    type: 'challenge',
    order: 11,
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">✍️ Latihan Konfigurasi Atribut</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Uji kemampuan Anda memasang atribut wajib pada elemen link dan gambar.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Atribut</title>
</head>
<body>
  
</body>
</html>`,
    challenge: {
      instruction: 'Buatlah tag <a> dengan atribut href="https://example.com" dan target="_blank" bertuliskan "Kunjungi Example", serta tag <p title="Penjelasan Singkat">Arahkan ke paragraf ini</p>.',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Atribut</title>
</head>
<body>

</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Atribut</title>
</head>
<body>
  <a href="https://example.com" target="_blank">Kunjungi Example</a>
  <p title="Penjelasan Singkat">Arahkan ke paragraf ini</p>
</body>
</html>`,
      hint: 'Gunakan <a href="https://example.com" target="_blank">Kunjungi Example</a> dan <p title="Penjelasan Singkat">Arahkan ke paragraf ini</p>'
    }
  },

  {
    title: 'HTML Attributes - Code Challenge (Banner Promosi Lengkap)',
    chapter: 'HTML Attributes',
    type: 'challenge',
    order: 12,
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🚀 Tantangan: Banner Promosi</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Buatlah banner promosi dengan gambar berukuran proporsional yang memiliki tautan menuju halaman pendaftaran.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Banner Promosi</title>
</head>
<body>

</body>
</html>`,
    challenge: {
      instruction: 'Buat tag <img src="banner.jpg" alt="Diskon Kursus" width="400"> lalu di bawahnya buat tombol tautan <a href="/daftar" title="Daftar Sekarang">Daftar Sekarang</a>.',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Banner Promosi</title>
</head>
<body>

</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Banner Promosi</title>
</head>
<body>
  <img src="banner.jpg" alt="Diskon Kursus" width="400">
  <br>
  <a href="/daftar" title="Daftar Sekarang">Daftar Sekarang</a>
</body>
</html>`,
      hint: 'Gunakan kombinasi tag <img> dengan src, alt, width dan tag <a> dengan href, title'
    }
  },

  // ── 7. HTML Headings ──────────────────────────────────────────────────────
  {
    title: 'HTML Headings - Struktur Hirarki & Best Practice SEO',
    chapter: 'HTML Headings',
    type: 'code',
    order: 13,
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">📑 Heading HTML: Dari &lt;h1&gt; sampai &lt;h6&gt;</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Heading HTML digunakan untuk menandai judul dan subjudul pada dokumen. Mesin pencari seperti Google menggunakan heading untuk mengindeks struktur dan topik artikel Anda.
        </p>

        <div class="space-y-2 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div class="flex items-center justify-between py-1 border-b border-slate-200 dark:border-slate-800">
            <span class="text-lg font-black text-slate-800 dark:text-white">&lt;h1&gt; Heading Tingkat 1 (Paling Penting)</span>
            <span class="text-[10px] font-mono text-orange-500 font-bold">Maksimal 1x per halaman</span>
          </div>
          <div class="flex items-center justify-between py-1 border-b border-slate-200 dark:border-slate-800">
            <span class="text-base font-bold text-slate-800 dark:text-white">&lt;h2&gt; Heading Tingkat 2 (Bab Utama)</span>
            <span class="text-[10px] font-mono text-slate-400">Seksi Utama Konten</span>
          </div>
          <div class="flex items-center justify-between py-1 border-b border-slate-200 dark:border-slate-800">
            <span class="text-sm font-bold text-slate-700 dark:text-slate-300">&lt;h3&gt; Heading Tingkat 3 (Sub-bab)</span>
            <span class="text-[10px] font-mono text-slate-400">Rincian Bab</span>
          </div>
          <div class="flex items-center justify-between py-1 border-b border-slate-200 dark:border-slate-800">
            <span class="text-xs font-semibold text-slate-600 dark:text-slate-400">&lt;h4&gt; Heading Tingkat 4</span>
            <span class="text-[10px] font-mono text-slate-400">Detail Pendukung</span>
          </div>
          <div class="flex items-center justify-between py-1">
            <span class="text-[11px] font-medium text-slate-500">&lt;h5&gt; & &lt;h6&gt; Tingkat Terendah</span>
            <span class="text-[10px] font-mono text-slate-400">Catatan kecil / footer widget</span>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-300">
          <strong>⚠️ Golden Rule SEO:</strong> Jangan pernah menggunakan tag heading hanya untuk membuat teks menjadi berukuran besar. Gunakan CSS jika tujuannya murni estetika, dan gunakan heading murni untuk hierarki makna konten.
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Hierarki Heading</title>
</head>
<body>
  <h1>Panduan Lengkap Belajar Web Development</h1>
  
  <h2>1. Fondasi Frontend</h2>
  <p>Frontend adalah bagian visual yang berinteraksi dengan pengguna.</p>
  
  <h3>1.1 Menguasai HTML5</h3>
  <p>HTML5 adalah batu pertama yang wajib dipelajari.</p>
  
  <h3>1.2 Mempercantik dengan CSS3</h3>
  <p>CSS membuat tampilan web menjadi modern dan estetik.</p>
  
  <h2>2. Logika Backend</h2>
  <p>Backend mengelola database dan logika server.</p>
</body>
</html>`,
    quiz: {
      question: 'Berapa jumlah tag <h1> yang ideal dalam sebuah halaman web untuk optimasi SEO terbaik?',
      options: ['Bebas sebanyak mungkin', 'Tepat 1 buah', 'Minimal 5 buah', 'Tidak boleh ada h1'],
      answer: 1,
      explanation: 'Satu halaman web sebaiknya hanya memiliki tepat satu tag <h1> sebagai judul utama halaman tersebut untuk kejelasan struktur SEO.'
    }
  },

  {
    title: 'HTML Headings - Exercises (Menentukan Tingkatan Judul)',
    chapter: 'HTML Headings',
    type: 'challenge',
    order: 14,
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">✍️ Latihan Hierarki Heading</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Susun dokumen dengan 3 tingkatan judul yang berurutan secara logis: <code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>, dan <code>&lt;h3&gt;</code>.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Heading</title>
</head>
<body>

</body>
</html>`,
    challenge: {
      instruction: 'Tuliskan <h1>Belajar Coding</h1>, lalu <h2>Bahasa Web</h2>, lalu <h3>HTML dan CSS</h3> secara berurutan.',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Heading</title>
</head>
<body>

</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Heading</title>
</head>
<body>
  <h1>Belajar Coding</h1>
  <h2>Bahasa Web</h2>
  <h3>HTML dan CSS</h3>
</body>
</html>`,
      hint: 'Tuliskan tag <h1>, <h2>, dan <h3> secara berurutan'
    }
  },

  {
    title: 'HTML Headings - Code Challenge (Merapikan Kerangka Artikel)',
    chapter: 'HTML Headings',
    type: 'challenge',
    order: 15,
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🚀 Tantangan: Kerangka Struktur Berita</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Lengkapi kerangka artikel berita teknologi dengan judul utama, subjudul, dan dua seksi pembahasan.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Artikel Teknologi</title>
</head>
<body>

</body>
</html>`,
    challenge: {
      instruction: 'Buatlah <h1>Peluncuran Smartphone Terbaru</h1>, lalu <h2>Spesifikasi Utama</h2> dengan sebuah <p>Kamera 200MP</p>, dan <h2>Harga & Ketersediaan</h2> dengan sebuah <p>Mulai Rp 10 Juta</p>.',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Artikel Teknologi</title>
</head>
<body>

</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Artikel Teknologi</title>
</head>
<body>
  <h1>Peluncuran Smartphone Terbaru</h1>
  <h2>Spesifikasi Utama</h2>
  <p>Kamera 200MP</p>
  <h2>Harga & Ketersediaan</h2>
  <p>Mulai Rp 10 Juta</p>
</body>
</html>`,
      hint: 'Gunakan <h1> lalu buat dua blok <h2> dengan masing-masing <p> di bawahnya'
    }
  },

  // ── 8. HTML Paragraphs ────────────────────────────────────────────────────
  {
    title: 'HTML Paragraphs - Pemformatan Teks, Line Breaks & Divider',
    chapter: 'HTML Paragraphs',
    type: 'code',
    order: 16,
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">📝 Bekerja dengan Paragraf dan Baris</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Tag <code>&lt;p&gt;</code> digunakan untuk membuat blok paragraf teks. Browser secara otomatis menambahkan margin ruang kosong sebelum dan sesudah setiap elemen paragraf.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code class="text-orange-500 font-bold font-mono block mb-1">&lt;p&gt; (Paragraph)</code>
            <p class="text-slate-600 dark:text-slate-400">Blok teks mandiri. Spasi ganda atau tombol Enter berkali-kali di dalam HTML akan digabungkan (<em>collapsed</em>) menjadi 1 spasi oleh browser.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code class="text-orange-500 font-bold font-mono block mb-1">&lt;br&gt; (Line Break)</code>
            <p class="text-slate-600 dark:text-slate-400">Pindah ke baris baru tanpa memulai paragraf baru (sangat cocok untuk alamat surat atau baris puisi).</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code class="text-orange-500 font-bold font-mono block mb-1">&lt;pre&gt; (Preformatted)</code>
            <p class="text-slate-600 dark:text-slate-400">Mempertahankan seluruh spasi, spasi tab, dan baris baru persis seperti yang Anda ketikkan di editor.</p>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo Paragraf & Baris</title>
</head>
<body>
  <h2>Paragraf Standar</h2>
  <p>Ini adalah paragraf pertama. Meskipun kita tekan enter
  di kode editor, browser tetap menggabungkannya menjadi satu baris mengalir.</p>

  <p>Gunakan tag break:<br>
  Jalan Merdeka No. 45<br>
  Jakarta Pusat, Indonesia</p>

  <hr>

  <h2>Teks Preformatted (&lt;pre&gt;)</h2>
  <pre>
  Menulis puisi:
     Bintang bersinar di angkasa,
     Menerangi malam yang gulita.
  </pre>
</body>
</html>`,
    quiz: {
      question: 'Tag manakah yang dapat mempertahankan format spasi ganda dan baris baru persis seperti yang diketikkan?',
      options: ['<p>', '<pre>', '<text>', '<span>'],
      answer: 1,
      explanation: 'Tag <pre> (Preformatted Text) menampilkan teks dengan font monospace dan mempertahankan seluruh spasi dan baris baru yang diketikkan.'
    }
  },

  {
    title: 'HTML Paragraphs - Exercises (Mengatur Alamat & Baris Puisi)',
    chapter: 'HTML Paragraphs',
    type: 'challenge',
    order: 17,
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">✍️ Latihan Pemformatan Baris</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Buatlah format alamat kantor 3 baris menggunakan satu tag <code>&lt;p&gt;</code> dan tag line break <code>&lt;br&gt;</code>.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Paragraf</title>
</head>
<body>

</body>
</html>`,
    challenge: {
      instruction: 'Buatlah tag <p> yang berisi 3 baris alamat dengan dipisahkan <br>: "PT Edukasi Indonesia<br>Gedung Cyber Lt. 5<br>Jakarta Selatan".',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Paragraf</title>
</head>
<body>

</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Paragraf</title>
</head>
<body>
  <p>PT Edukasi Indonesia<br>Gedung Cyber Lt. 5<br>Jakarta Selatan</p>
</body>
</html>`,
      hint: 'Gunakan satu tag <p> dan tempatkan <br> di antara baris-baris alamat'
    }
  },

  {
    title: 'HTML Paragraphs - Code Challenge (Studi Kasus Artikel Blog)',
    chapter: 'HTML Paragraphs',
    type: 'challenge',
    order: 18,
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🚀 Tantangan: Artikel Blog dengan Divider</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Susun artikel blog dengan 2 paragraf cerita yang dipisahkan oleh garis batas horizontal <code>&lt;hr&gt;</code>.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Blog Saya</title>
</head>
<body>

</body>
</html>`,
    challenge: {
      instruction: 'Buatlah <h1>Cerita Hari Ini</h1>, lalu <p>Pagi ini saya mulai belajar HTML.</p>, lalu <hr>, lalu <p>Sangat seru dan mudah dipahami!</p>.',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Blog Saya</title>
</head>
<body>

</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Blog Saya</title>
</head>
<body>
  <h1>Cerita Hari Ini</h1>
  <p>Pagi ini saya mulai belajar HTML.</p>
  <hr>
  <p>Sangat seru dan mudah dipahami!</p>
</body>
</html>`,
      hint: 'Gunakan <h1>, <p>, <hr>, dan <p>'
    }
  },

  // ── 9. HTML Styles ────────────────────────────────────────────────────────
  {
    title: 'HTML Styles - Inline Styling & Properti Desain Inti',
    chapter: 'HTML Styles',
    type: 'code',
    order: 19,
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🎨 Mengatur Tampilan dengan Atribut Style</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Atribut <code>style</code> digunakan untuk menambahkan gaya desain (CSS) langsung ke dalam elemen HTML secara instan (*inline styling*). Sintaksnya adalah <code>style="property: value;"</code>.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code class="text-orange-500 font-bold font-mono">background-color</code>:
            <p class="text-slate-600 dark:text-slate-400 mt-1">Mengatur warna latar belakang elemen, contoh: <code>style="background-color: #f1f5f9;"</code>.</p>
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code class="text-orange-500 font-bold font-mono">color</code>:
            <p class="text-slate-600 dark:text-slate-400 mt-1">Mengatur warna teks, contoh: <code>style="color: #4f46e5;"</code>.</p>
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code class="text-orange-500 font-bold font-mono">font-family & font-size</code>:
            <p class="text-slate-600 dark:text-slate-400 mt-1">Mengatur jenis huruf (font) dan ukuran huruf (misal <code>24px</code> atau <code>1.5rem</code>).</p>
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code class="text-orange-500 font-bold font-mono">text-align</code>:
            <p class="text-slate-600 dark:text-slate-400 mt-1">Mengatur perataan horizontal teks (<code>left</code>, <code>center</code>, <code>right</code>, <code>justify</code>).</p>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Styling HTML Demo</title>
</head>
<body style="background-color: #0f172a; color: #f8fafc; font-family: 'Segoe UI', sans-serif; padding: 20px;">
  
  <h1 style="color: #38bdf8; text-align: center; font-size: 32px;">Desain Modern dengan HTML Styles</h1>
  
  <p style="background-color: #1e293b; padding: 15px; border-radius: 10px; text-align: justify; line-height: 1.6;">
    Dengan menambahkan atribut <code style="color: #f43f5e;">style</code>, kita dapat langsung mengubah warna latar belakang, warna teks, padding, serta tata letak elemen tanpa perlu file CSS terpisah!
  </p>

</body>
</html>`,
    quiz: {
      question: 'Properti CSS manakah yang digunakan di dalam atribut style untuk mengubah warna teks?',
      options: ['text-color', 'font-color', 'color', 'background-color'],
      answer: 2,
      explanation: 'Properti "color" digunakan untuk mengatur warna teks elemen HTML.'
    }
  },

  {
    title: 'HTML Styles - Exercises (Kustomisasi Warna Background & Teks)',
    chapter: 'HTML Styles',
    type: 'challenge',
    order: 20,
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">✍️ Latihan Kustomisasi Gaya</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Uji pemahaman Anda menggunakan atribut <code>style</code> untuk memformat judul dengan warna merah marun dan perataan tengah.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Styles</title>
</head>
<body>

</body>
</html>`,
    challenge: {
      instruction: 'Buat tag <h1 style="color: red; text-align: center;">Judul Tengah Merah</h1> dan <p style="font-size: 20px;">Teks Ukuran Besar</p>.',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Styles</title>
</head>
<body>

</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Styles</title>
</head>
<body>
  <h1 style="color: red; text-align: center;">Judul Tengah Merah</h1>
  <p style="font-size: 20px;">Teks Ukuran Besar</p>
</body>
</html>`,
      hint: 'Gunakan style="color: red; text-align: center;" pada h1 dan style="font-size: 20px;" pada p'
    }
  },

  {
    title: 'HTML Styles - Code Challenge (Mendesain Hero Banner Estetik)',
    chapter: 'HTML Styles',
    type: 'challenge',
    order: 21,
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🚀 Tantangan: Kotak Notifikasi Berwarna</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Buatlah kotak notifikasi informasi sukses dengan latar belakang hijau muda, teks hijau tua, dan sudut membulat.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Notifikasi</title>
</head>
<body>

</body>
</html>`,
    challenge: {
      instruction: 'Buat tag <div style="background-color: lightgreen; color: darkgreen; text-align: center;"><h3>Pembayaran Berhasil!</h3><p>Terima kasih atas pesanan Anda.</p></div>.',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Notifikasi</title>
</head>
<body>

</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Notifikasi</title>
</head>
<body>
  <div style="background-color: lightgreen; color: darkgreen; text-align: center;">
    <h3>Pembayaran Berhasil!</h3>
    <p>Terima kasih atas pesanan Anda.</p>
  </div>
</body>
</html>`,
      hint: 'Gunakan atribut style pada <div> dengan background-color: lightgreen; color: darkgreen; text-align: center;'
    }
  },

  // ── 10. HTML Formatting ───────────────────────────────────────────────────
  {
    title: 'HTML Formatting - Tag Pemformatan Teks Semantik',
    chapter: 'HTML Formatting',
    type: 'code',
    order: 22,
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">✨ Elemen Pemformatan Teks Khusus</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          HTML menyediakan elemen khusus untuk memformat teks dengan makna semantik tertentu tanpa harus menulis CSS:
        </p>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-2.5 text-xs">
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code class="text-orange-500 font-bold">&lt;b&gt; & &lt;strong&gt;</code>
            <p class="text-slate-500 mt-1">Teks tebal. <code>&lt;strong&gt;</code> memiliki arti semantik "sangat penting".</p>
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code class="text-orange-500 font-bold">&lt;i&gt; & &lt;em&gt;</code>
            <p class="text-slate-500 mt-1">Teks miring. <code>&lt;em&gt;</code> memberikan penekanan intonasi (*emphasis*).</p>
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code class="text-orange-500 font-bold">&lt;mark&gt;</code>
            <p class="text-slate-500 mt-1">Menyorot teks dengan stabilo kuning (*highlight*).</p>
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code class="text-orange-500 font-bold">&lt;small&gt;</code>
            <p class="text-slate-500 mt-1">Teks berukuran lebih kecil (biasa untuk hak cipta / disclaimer).</p>
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code class="text-orange-500 font-bold">&lt;del&gt; & &lt;ins&gt;</code>
            <p class="text-slate-500 mt-1"><code>&lt;del&gt;</code> teks dicoret (harga lama), <code>&lt;ins&gt;</code> teks bergaris bawah (harga baru).</p>
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code class="text-orange-500 font-bold">&lt;sub&gt; & &lt;sup&gt;</code>
            <p class="text-slate-500 mt-1"><code>&lt;sub&gt;</code> indeks bawah (H<sub>2</sub>O), <code>&lt;sup&gt;</code> pangkat atas (X<sup>2</sup>).</p>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo HTML Formatting</title>
</head>
<body>
  <h2>Contoh Pemformatan Teks</h2>
  <p>Peringatan: <strong>Dilarang keras merokok!</strong></p>
  <p>Promo Spesial: <del>Rp 200.000</del> <ins>Rp 99.000</ins> saja!</p>
  <p>Catatan penting ini telah di-<mark>stabilo kuning</mark> oleh instruktur.</p>
  <p>Rumus Kimia Air: H<sub>2</sub>O dan Rumus Luas: r<sup>2</sup></p>
  <p><small>&copy; 2026 Hak Cipta Dilindungi Undang-Undang.</small></p>
</body>
</html>`,
    quiz: {
      question: 'Tag manakah yang paling tepat digunakan untuk menuliskan rumus kimia H2O (angka 2 berada di bawah)?',
      options: ['<sup>', '<sub>', '<small>', '<down>'],
      answer: 1,
      explanation: 'Tag <sub> (subscript) merender teks setengah karakter di bawah garis tulisan normal, cocok untuk rumus kimia.'
    }
  },

  {
    title: 'HTML Formatting - Exercises (Format Rumus Kimia & Diskon)',
    chapter: 'HTML Formatting',
    type: 'challenge',
    order: 23,
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">✍️ Latihan Tag Formatting</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Gunakan tag <code>&lt;del&gt;</code>, <code>&lt;ins&gt;</code>, dan <code>&lt;mark&gt;</code> untuk memformat informasi promo produk.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Formatting</title>
</head>
<body>

</body>
</html>`,
    challenge: {
      instruction: 'Buatlah tag <p>Harga Normal: <del>Rp 50.000</del> Harga Promo: <ins>Rp 25.000</ins></p> dan tag <p>Status: <mark>TERLARIS</mark></p>.',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Formatting</title>
</head>
<body>

</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Formatting</title>
</head>
<body>
  <p>Harga Normal: <del>Rp 50.000</del> Harga Promo: <ins>Rp 25.000</ins></p>
  <p>Status: <mark>TERLARIS</mark></p>
</body>
</html>`,
      hint: 'Gunakan <del>Rp 50.000</del>, <ins>Rp 25.000</ins>, dan <mark>TERLARIS</mark>'
    }
  },

  {
    title: 'HTML Formatting - Code Challenge (Rumus Matematika & Kimia)',
    chapter: 'HTML Formatting',
    type: 'challenge',
    order: 24,
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🚀 Tantangan: Soal Sains Digital</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Buatlah dokumen soal sains yang menampilkan rumus kuadrat matematika dan rumus gas karbon dioksida dengan tag semantik yang tepat.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Soal Sains</title>
</head>
<body>

</body>
</html>`,
    challenge: {
      instruction: 'Buatlah <h2>Sains Web</h2>, lalu <p>Rumus Pythagoras: a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup></p>, dan <p>Gas Buang: CO<sub>2</sub></p>.',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Soal Sains</title>
</head>
<body>

</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Soal Sains</title>
</head>
<body>
  <h2>Sains Web</h2>
  <p>Rumus Pythagoras: a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup></p>
  <p>Gas Buang: CO<sub>2</sub></p>
</body>
</html>`,
      hint: 'Gunakan <sup>2</sup> untuk pangkat atas dan <sub>2</sub> untuk indeks bawah'
    }
  },

  // ── 11. HTML Quotations ───────────────────────────────────────────────────
  {
    title: 'HTML Quotations - Kutipan, Singkatan & Kontak',
    chapter: 'HTML Quotations',
    type: 'code',
    order: 25,
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">💬 Elemen Kutipan & Informasi Rujukan</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          HTML menyediakan elemen semantik yang kaya untuk mengutip perkataan orang lain, menampilkan kontak penulis, dan mendefinisikan singkatan:
        </p>

        <div class="space-y-2.5 text-xs">
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-orange-500 font-mono">&lt;blockquote cite="..."&gt;</strong>: Blok kutipan panjang dari sumber eksternal. Biasanya otomatis memiliki margin indentasi ke dalam oleh browser.
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-orange-500 font-mono">&lt;q&gt;</strong>: Kutipan inline pendek. Browser secara otomatis membungkus teks di dalamnya dengan tanda petik ganda <code>"..."</code>.
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-orange-500 font-mono">&lt;abbr title="..."&gt;</strong>: Menandai singkatan (akronim). Saat pengguna mengarahkan mouse, balon petunjuk (*tooltip*) akan menampilkan kepanjangannya.
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-orange-500 font-mono">&lt;address&gt;</strong>: Informasi kontak pemilik/penulis dokumen (biasanya dirender dengan teks miring).
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo Quotations HTML</title>
</head>
<body>
  <h2>Kutipan Inspiratif</h2>
  
  <blockquote cite="https://id.wikipedia.org/wiki/Steve_Jobs">
    "Satu-satunya cara untuk melakukan pekerjaan hebat adalah dengan mencintai apa yang Anda lakukan."
  </blockquote>
  
  <p>Albert Einstein pernah berkata: <q>Imajinasi lebih penting daripada pengetahuan.</q></p>
  
  <p>Organisasi kesehatan dunia adalah <abbr title="World Health Organization">WHO</abbr>.</p>
  
  <hr>
  <address>
    Ditulis oleh: Bagus Rahmat<br>
    Email: bagus@lms.test<br>
    Jakarta, Indonesia
  </address>
</body>
</html>`,
    quiz: {
      question: 'Tag manakah yang secara otomatis menambahkan tanda petik ganda (quotation marks) di sekitar teks kutipan pendek?',
      options: ['<quote>', '<q>', '<blockquote>', '<cite>'],
      answer: 1,
      explanation: 'Tag <q> (inline quotation) otomatis menyisipkan tanda petik dua di sekitar teks yang dibungkus.'
    }
  },

  {
    title: 'HTML Quotations - Exercises (Membuat Kutipan & Kontak Penulis)',
    chapter: 'HTML Quotations',
    type: 'challenge',
    order: 26,
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">✍️ Latihan Elemen Kutipan</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Buatlah blok kutipan menggunakan <code>&lt;blockquote&gt;</code> dan definisikan singkatan menggunakan <code>&lt;abbr&gt;</code>.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Quotations</title>
</head>
<body>

</body>
</html>`,
    challenge: {
      instruction: 'Buatlah <blockquote>Belajar tanpa berpikir itu sia-sia.</blockquote> dan sebuah <p>Badan antariksa AS adalah <abbr title="National Aeronautics and Space Administration">NASA</abbr>.</p>.',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Quotations</title>
</head>
<body>

</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Quotations</title>
</head>
<body>
  <blockquote>Belajar tanpa berpikir itu sia-sia.</blockquote>
  <p>Badan antariksa AS adalah <abbr title="National Aeronautics and Space Administration">NASA</abbr>.</p>
</body>
</html>`,
      hint: 'Gunakan <blockquote> dan <abbr title="National Aeronautics and Space Administration">NASA</abbr>'
    }
  },

  {
    title: 'HTML Quotations - Code Challenge (Kartu Testimoni Pelanggan)',
    chapter: 'HTML Quotations',
    type: 'challenge',
    order: 27,
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🚀 Tantangan: Kartu Testimoni</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Buatlah kartu testimoni pelanggan lengkap dengan kutipan ulasan dan tag <code>&lt;address&gt;</code> sebagai identitas pengulas.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Testimoni Pelanggan</title>
</head>
<body>

</body>
</html>`,
    challenge: {
      instruction: 'Buat <h2>Testimoni Klien</h2>, lalu <blockquote>Layanan platform LMS ini sangat cepat dan mudah digunakan!</blockquote>, dan <address>Budi Santoso - CTO Tech Corp</address>.',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Testimoni Pelanggan</title>
</head>
<body>

</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Testimoni Pelanggan</title>
</head>
<body>
  <h2>Testimoni Klien</h2>
  <blockquote>Layanan platform LMS ini sangat cepat dan mudah digunakan!</blockquote>
  <address>Budi Santoso - CTO Tech Corp</address>
</body>
</html>`,
      hint: 'Gunakan <h2>, <blockquote>, dan <address>'
    }
  },

  // ── 12. HTML Comments ─────────────────────────────────────────────────────
  {
    title: 'HTML Comments - Menulis Komentar Bersih & Debugging',
    chapter: 'HTML Comments',
    type: 'code',
    order: 28,
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">💬 Komentar dalam Kode HTML</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Komentar HTML digunakan untuk menyisipkan catatan pengingat bagi developer, memberi dokumentasi pada bagian kode, atau menyembunyikan elemen sementara waktu saat melakukan *debugging*. Komentar <strong>tidak akan ditampilkan oleh browser ke layar pengguna</strong>.
        </p>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto border border-slate-800">
          <div class="text-emerald-400 mb-1">&lt;!-- Ini adalah komentar satu baris --&gt;</div>
          <div class="text-emerald-400">&lt;!-- </div>
          <div class="text-emerald-400 ml-4">Ini komentar multi-baris</div>
          <div class="text-emerald-400 ml-4">Browser akan mengabaikan seluruh isi blok ini</div>
          <div class="text-emerald-400">--&gt;</div>
        </div>

        <div class="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-900/40 text-xs text-indigo-900 dark:text-indigo-300">
          <strong>💡 Shortcut Keyboard VS Code:</strong> Tekan <code>Ctrl + /</code> (di Windows) atau <code>Cmd + /</code> (di Mac) untuk secara otomatis membuat komentar pada baris kode yang sedang Anda pilih!
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Tutorial Komentar HTML</title>
</head>
<body>
  <!-- HEADER SECTION START -->
  <h1>Website Perusahaan Kami</h1>
  <p>Selamat datang di portal resmi perusahaan.</p>
  <!-- HEADER SECTION END -->

  <!-- 
  <p>Paragraf promosi ini disembunyikan sementara untuk keperluan maintenance.</p> 
  -->

  <!-- FOOTER START -->
  <p><small>&copy; 2026 Perusahaan Terpercaya.</small></p>
  <!-- FOOTER END -->
</body>
</html>`,
    quiz: {
      question: 'Manakah sintaks yang benar untuk menuliskan komentar di dalam dokumen HTML?',
      options: [
        '// Ini komentar',
        '/* Ini komentar */',
        '<!-- Ini komentar -->',
        '# Ini komentar'
      ],
      answer: 2,
      explanation: 'Komentar HTML selalu diawali dengan <!-- dan diakhiri dengan -->'
    }
  },

  {
    title: 'HTML Comments - Exercises (Menyembunyikan Kode Sementara)',
    chapter: 'HTML Comments',
    type: 'challenge',
    order: 29,
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">✍️ Latihan Komentar & Debugging</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Tambahkan komentar penanda seksi dan sembunyikan salah satu paragraf agar tidak tampil di layar browser.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Komentar</title>
</head>
<body>
  <h1>Menu Utama</h1>
  <p>Menu 1: Nasi Goreng</p>
  <p>Menu 2: Mie Goreng (Habis)</p>
  <p>Menu 3: Ayam Bakar</p>
</body>
</html>`,
    challenge: {
      instruction: 'Sembunyikan paragraf "Menu 2: Mie Goreng (Habis)" dengan membungkusnya ke dalam komentar HTML <!-- ... -->.',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Komentar</title>
</head>
<body>
  <h1>Menu Utama</h1>
  <p>Menu 1: Nasi Goreng</p>
  <p>Menu 2: Mie Goreng (Habis)</p>
  <p>Menu 3: Ayam Bakar</p>
</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Komentar</title>
</head>
<body>
  <h1>Menu Utama</h1>
  <p>Menu 1: Nasi Goreng</p>
  <!-- <p>Menu 2: Mie Goreng (Habis)</p> -->
  <p>Menu 3: Ayam Bakar</p>
</body>
</html>`,
      hint: 'Bungkus baris Menu 2 dengan <!-- <p>Menu 2: Mie Goreng (Habis)</p> -->'
    }
  },

  {
    title: 'HTML Comments - Code Challenge (Dokumentasi Seksi Halaman)',
    chapter: 'HTML Comments',
    type: 'challenge',
    order: 30,
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🚀 Tantangan: Dokumentasi Kode Rapi</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Dokumentasikan struktur halaman web sederhana dengan memberikan komentar penanda <code>&lt;!-- Bagian Utama --&gt;</code> sebelum <code>&lt;h1&gt;</code> dan <code>&lt;!-- Bagian Kontak --&gt;</code> sebelum <code>&lt;p&gt;</code>.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Struktur Web</title>
</head>
<body>

</body>
</html>`,
    challenge: {
      instruction: 'Tulis <!-- Bagian Utama --> lalu <h1>Toko Online</h1> lalu <!-- Bagian Kontak --> lalu <p>Hubungi: 08123456789</p>.',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Struktur Web</title>
</head>
<body>

</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Struktur Web</title>
</head>
<body>
  <!-- Bagian Utama -->
  <h1>Toko Online</h1>
  <!-- Bagian Kontak -->
  <p>Hubungi: 08123456789</p>
</body>
</html>`,
      hint: 'Gunakan komentar <!-- Bagian Utama --> dan <!-- Bagian Kontak --> tepat di atas elemen masing-masing'
    }
  },

  // ── 13. HTML Colors ───────────────────────────────────────────────────────
  {
    title: 'HTML Colors - Color Names & Format RGB/RGBA',
    chapter: 'HTML Colors',
    type: 'code',
    order: 31,
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🎨 Model Pewarnaan HTML: Nama & RGB</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Warna dalam HTML dapat ditentukan menggunakan <strong>Nama Warna Standar</strong> (terdapat 140 nama warna standar seperti <code>DodgerBlue</code>, <code>Tomato</code>, <code>MediumSeaGreen</code>) atau menggunakan format nilai matematis <strong>RGB</strong>.
        </p>

        <div class="space-y-3 text-xs">
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-orange-500 font-mono">RGB (Red, Green, Blue)</strong>:
            <p class="text-slate-600 dark:text-slate-400 mt-1">
              Format: <code>rgb(merah, hijau, biru)</code> dengan rentang nilai masing-masing dari <strong>0 hingga 255</strong>.<br>
              Contoh: <code>rgb(255, 0, 0)</code> = Merah murni, <code>rgb(0, 0, 0)</code> = Hitam, <code>rgb(255, 255, 255)</code> = Putih.
            </p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-orange-500 font-mono">RGBA (Red, Green, Blue, Alpha)</strong>:
            <p class="text-slate-600 dark:text-slate-400 mt-1">
              Menambahkan parameter <strong>Alpha</strong> (transparansi) dengan rentang dari <code>0.0</code> (transparan penuh) hingga <code>1.0</code> (padat/solid).<br>
              Contoh: <code>rgba(255, 99, 71, 0.5)</code> = Warna Tomato dengan transparansi 50%.
            </p>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo Warna RGB</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2 style="background-color: DodgerBlue; color: white; padding: 10px; border-radius: 8px;">Warna Nama Standar: DodgerBlue</h2>
  <h2 style="background-color: rgb(255, 99, 71); color: white; padding: 10px; border-radius: 8px;">Warna RGB: rgb(255, 99, 71)</h2>
  <h2 style="background-color: rgba(79, 70, 229, 0.4); color: #312e81; padding: 10px; border-radius: 8px;">Warna RGBA (40% Opasitas): rgba(79, 70, 229, 0.4)</h2>
</body>
</html>`,
    quiz: {
      question: 'Parameter apakah yang ditambahkan pada format RGBA yang membedakannya dengan format RGB standar?',
      options: ['Brightness', 'Alpha (Tingkat Transparansi)', 'Saturation', 'Contrast'],
      answer: 1,
      explanation: 'Huruf "A" pada RGBA mewakili "Alpha", yaitu tingkat transparansi/opasitas warna bernilai 0.0 sampai 1.0.'
    }
  },

  {
    title: 'HTML Colors - Format Nilai HEX (Hexadecimal)',
    chapter: 'HTML Colors',
    type: 'code',
    order: 32,
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">#️⃣ Format Warna Heksadesimal (HEX)</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Warna <strong>HEX</strong> adalah format paling populer yang digunakan oleh para web developer dan UI designer di seluruh dunia. Formatnya diawali dengan tanda pagar <code>#RRGGBB</code>, di mana RR (Red), GG (Green), dan BB (Blue) adalah nilai heksadesimal antara <code>00</code> dan <code>FF</code>.
        </p>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-2.5 text-xs font-mono">
          <div class="p-3 rounded-xl bg-red-500 text-white text-center font-bold">#FF0000<br><span class="text-[10px] font-sans font-normal">Merah Murni</span></div>
          <div class="p-3 rounded-xl bg-green-600 text-white text-center font-bold">#00FF00<br><span class="text-[10px] font-sans font-normal">Hijau Murni</span></div>
          <div class="p-3 rounded-xl bg-blue-600 text-white text-center font-bold">#0000FF<br><span class="text-[10px] font-sans font-normal">Biru Murni</span></div>
          <div class="p-3 rounded-xl bg-slate-900 text-white text-center font-bold">#0F172A<br><span class="text-[10px] font-sans font-normal">Dark Slate</span></div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo Warna HEX</title>
</head>
<body style="background-color: #f8fafc; font-family: sans-serif; padding: 20px;">
  <div style="background-color: #4f46e5; color: #ffffff; padding: 20px; border-radius: 12px; text-align: center;">
    <h1>Indigo Modern (#4f46e5)</h1>
    <p>Format HEX sangat ringkas dan mudah disalin dari Figma / Adobe XD!</p>
  </div>
</body>
</html>`,
    quiz: {
      question: 'Kode warna HEX manakah yang merepresentasikan warna putih bersih?',
      options: ['#000000', '#FFFFFF', '#FF0000', '#CCCCCC'],
      answer: 1,
      explanation: '#FFFFFF merepresentasikan nilai maksimal untuk komponen Red, Green, dan Blue sehingga menghasilkan warna putih bersih.'
    }
  },

  {
    title: 'HTML Colors - Format HSL & HSLA',
    chapter: 'HTML Colors',
    type: 'code',
    order: 33,
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🌈 Format HSL (Hue, Saturation, Lightness)</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          <strong>HSL</strong> adalah format warna yang paling intuitif bagi manusia karena memisahkan corak warna (*Hue*), kepekatan (*Saturation*), dan tingkat terang-gelap (*Lightness*):
        </p>

        <div class="space-y-2 text-xs">
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>Hue (Derajat Warna 0 - 360)</strong>: 0 = Merah, 120 = Hijau, 240 = Biru.
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>Saturation (Persentase 0% - 100%)</strong>: 0% = Abu-abu pudar, 100% = Warna cerah penuh.
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>Lightness (Persentase 0% - 100%)</strong>: 0% = Hitam pekat, 50% = Normal, 100% = Putih bersih.
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo Warna HSL</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <div style="background-color: hsl(210, 100%, 56%); color: white; padding: 15px; border-radius: 8px;">
    <h3>HSL Biru Cerah: hsl(210, 100%, 56%)</h3>
  </div>
  <br>
  <div style="background-color: hsla(140, 80%, 45%, 0.6); color: #064e3b; padding: 15px; border-radius: 8px;">
    <h3>HSLA Hijau Segar Transparan: hsla(140, 80%, 45%, 0.6)</h3>
  </div>
</body>
</html>`,
    quiz: {
      question: 'Berapa nilai Lightness (%) pada HSL untuk menghasilkan warna yang seimbang (tidak terlalu gelap dan tidak terlalu pudar/putih)?',
      options: ['0%', '25%', '50%', '100%'],
      answer: 2,
      explanation: 'Nilai Lightness 50% menghasilkan warna alami murni, sedangkan 0% menghasilkan hitam dan 100% menghasilkan putih.'
    }
  },

  {
    title: 'HTML Colors - Exercises (Eksperimen Warna Web)',
    chapter: 'HTML Colors',
    type: 'challenge',
    order: 34,
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">✍️ Latihan Format Warna</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Buatlah elemen dengan warna latar belakang menggunakan kode HEX <code>#10b981</code> (Emerald) dan teks putih <code>#ffffff</code>.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Warna</title>
</head>
<body>

</body>
</html>`,
    challenge: {
      instruction: 'Buat tag <div style="background-color: #10b981; color: #ffffff;"><h3>Sukses Terkirim</h3></div>.',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Warna</title>
</head>
<body>

</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Warna</title>
</head>
<body>
  <div style="background-color: #10b981; color: #ffffff;">
    <h3>Sukses Terkirim</h3>
  </div>
</body>
</html>`,
      hint: 'Gunakan style="background-color: #10b981; color: #ffffff;"'
    }
  },

  {
    title: 'HTML Colors - Code Challenge (Mendesain Kartu Palet Warna)',
    chapter: 'HTML Colors',
    type: 'challenge',
    order: 35,
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🚀 Tantangan: Kartu Tiga Warna</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Buatlah 3 kotak warna sejajar dengan format Nama Warna (Tomato), Format HEX (#3b82f6), dan Format RGB (rgb(16, 185, 129)).
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Palet Warna</title>
</head>
<body>

</body>
</html>`,
    challenge: {
      instruction: 'Buatlah 3 paragraf: <p style="background-color: Tomato; color: white;">Merah</p>, <p style="background-color: #3b82f6; color: white;">Biru</p>, dan <p style="background-color: rgb(16, 185, 129); color: white;">Hijau</p>.',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Palet Warna</title>
</head>
<body>

</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Palet Warna</title>
</head>
<body>
  <p style="background-color: Tomato; color: white;">Merah</p>
  <p style="background-color: #3b82f6; color: white;">Biru</p>
  <p style="background-color: rgb(16, 185, 129); color: white;">Hijau</p>
</body>
</html>`,
      hint: 'Gunakan 3 tag <p> dengan background-color masing-masing Tomato, #3b82f6, dan rgb(16, 185, 129)'
    }
  },

  // ── 14. HTML CSS ──────────────────────────────────────────────────────────
  {
    title: 'HTML CSS - 3 Cara Menyisipkan CSS ke Dokumen HTML',
    chapter: 'HTML CSS',
    type: 'code',
    order: 36,
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🎨 3 Metode Menghubungkan CSS</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          CSS (<strong>Cascading Style Sheets</strong>) digunakan untuk mengatur seluruh tampilan visual, tata letak, dan animasi web. Terdapat 3 cara memasang CSS ke dalam HTML:
        </p>

        <div class="space-y-3 text-xs">
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-orange-500 font-mono">1. Inline CSS</strong>: Ditulis langsung di dalam atribut elemen (<code>&lt;h1 style="color: blue;"&gt;</code>).
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-orange-500 font-mono">2. Internal CSS</strong>: Ditulis di dalam tag <code>&lt;style&gt;</code> di dalam seksi <code>&lt;head&gt;</code> file HTML.
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-orange-500 font-mono">3. External CSS (Best Practice Industri)</strong>: Ditulis dalam file terpisah <code>style.css</code> dan dihubungkan via tag <code>&lt;link rel="stylesheet" href="style.css"&gt;</code> di dalam tag <code>&lt;head&gt;</code>.
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo Internal CSS</title>
  <style>
    body {
      background-color: #f1f5f9;
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
    }
    .card {
      background: white;
      padding: 24px;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
      max-width: 400px;
    }
    .btn-primary {
      background-color: #6366f1;
      color: white;
      padding: 10px 18px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="card">
    <h2>Internal CSS Demo</h2>
    <p>Semua gaya diatur rapi di dalam tag &lt;style&gt; pada bagian head!</p>
    <button class="btn-primary">Tombol Keren</button>
  </div>
</body>
</html>`,
    quiz: {
      question: 'Tag apakah yang digunakan di dalam tag <head> untuk menghubungkan file CSS eksternal (style.css)?',
      options: ['<script>', '<link rel="stylesheet">', '<css src="...">', '<style href="...">'],
      answer: 1,
      explanation: 'Tag <link rel="stylesheet" href="style.css"> adalah cara standar untuk memanggil file CSS eksternal ke dalam dokumen HTML.'
    }
  },

  {
    title: 'HTML CSS - Exercises (Menyusun Tag Style Internal)',
    chapter: 'HTML CSS',
    type: 'challenge',
    order: 37,
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">✍️ Latihan Internal CSS</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Buatlah aturan CSS internal di dalam tag <code>&lt;style&gt;</code> untuk mewarnai semua elemen <code>&lt;h1&gt;</code> menjadi biru (<code>color: blue;</code>).
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan CSS</title>
  <!-- Tuliskan tag style di sini -->

</head>
<body>
  <h1>Judul Halaman Biru</h1>
</body>
</html>`,
    challenge: {
      instruction: 'Tambahkan tag <style> h1 { color: blue; } </style> di dalam tag <head>.',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan CSS</title>

</head>
<body>
  <h1>Judul Halaman Biru</h1>
</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan CSS</title>
  <style>
    h1 { color: blue; }
  </style>
</head>
<body>
  <h1>Judul Halaman Biru</h1>
</body>
</html>`,
      hint: 'Letakkan <style> h1 { color: blue; } </style> di dalam <head>'
    }
  },

  {
    title: 'HTML CSS - Code Challenge (Mendesain Card Produk Berkelas)',
    chapter: 'HTML CSS',
    type: 'challenge',
    order: 38,
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🚀 Tantangan: Kartu Produk Cantik</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Gunakan Internal CSS untuk mendesain kelas <code>.product-card</code> dengan latar belakang putih, garis batas halus, dan padding.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Kartu Produk</title>
  <style>
    /* Buat rule .product-card di sini */
  </style>
</head>
<body>
  <div class="product-card">
    <h3>Sepatu Sneakers</h3>
    <p>Harga: Rp 450.000</p>
  </div>
</body>
</html>`,
    challenge: {
      instruction: 'Tambahkan aturan CSS: .product-card { background: white; padding: 20px; border: 1px solid #ccc; } di dalam tag <style>.',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Kartu Produk</title>
  <style>

  </style>
</head>
<body>
  <div class="product-card">
    <h3>Sepatu Sneakers</h3>
    <p>Harga: Rp 450.000</p>
  </div>
</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Kartu Produk</title>
  <style>
    .product-card {
      background: white;
      padding: 20px;
      border: 1px solid #ccc;
    }
  </style>
</head>
<body>
  <div class="product-card">
    <h3>Sepatu Sneakers</h3>
    <p>Harga: Rp 450.000</p>
  </div>
</body>
</html>`,
      hint: 'Isi bagian <style> dengan .product-card { background: white; padding: 20px; border: 1px solid #ccc; }'
    }
  },

  // ── 15. HTML Links ────────────────────────────────────────────────────────
  {
    title: 'HTML Links - Sintaks Hyperlink & Atribut Target',
    chapter: 'HTML Links',
    type: 'code',
    order: 39,
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🔗 Navigasi Web dengan Tag &lt;a&gt;</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Hyperlink adalah inti dari jaringan internet (World Wide Web) yang memungkinkan pengguna berpindah dari satu halaman ke halaman lainnya secara instan.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code class="text-orange-500 font-bold font-mono">target="_self"</code> (Default):
            <p class="text-slate-600 dark:text-slate-400 mt-1">Membuka link di tab/jendela yang sama saat ini.</p>
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code class="text-orange-500 font-bold font-mono">target="_blank"</code>:
            <p class="text-slate-600 dark:text-slate-400 mt-1">Membuka tautan di tab peramban baru yang terpisah.</p>
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code class="text-orange-500 font-bold font-mono">mailto: & tel:</code>:
            <p class="text-slate-600 dark:text-slate-400 mt-1">Membuka aplikasi email (<code>href="mailto:halo@lms.test"</code>) atau melakukan panggilan telepon (<code>href="tel:08123456"</code>).</p>
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code class="text-orange-500 font-bold font-mono">Link sebagai Gambar / Tombol</code>:
            <p class="text-slate-600 dark:text-slate-400 mt-1">Bungkus elemen <code>&lt;img&gt;</code> atau <code>&lt;button&gt;</code> di dalam tag <code>&lt;a&gt;</code> agar dapat diklik.</p>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo Links HTML</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Contoh Berbagai Jenis Link</h2>
  
  <p><a href="https://google.com" target="_blank">1. Link Tab Baru (Google)</a></p>
  <p><a href="mailto:admin@lms.test">2. Kirim Email ke Admin</a></p>
  <p><a href="tel:+628123456789">3. Hubungi via Telepon</a></p>
  
  <br>
  <h3>Gambar yang Dapat Diklik:</h3>
  <a href="https://w3schools.com" target="_blank">
    <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300" alt="Matrix Code" width="200" style="border-radius: 8px;">
  </a>
</body>
</html>`,
    quiz: {
      question: 'Nilai atribut target apakah yang digunakan untuk membuka halaman tautan di tab baru?',
      options: ['_new', '_parent', '_blank', '_top'],
      answer: 2,
      explanation: 'Nilai target="_blank" secara universal memberitahu browser untuk membuka URL tujuan di tab atau jendela baru.'
    }
  },

  {
    title: 'HTML Links - Link Bookmarks (Navigasi Anchor Lompat Halaman)',
    chapter: 'HTML Links',
    type: 'code',
    order: 40,
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">📍 Link Bookmarks (Anchor Links)</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Link Bookmark digunakan untuk melompat langsung ke bagian tertentu pada halaman yang panjang tanpa perlu scroll manual.
        </p>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto border border-slate-800">
          <div class="text-amber-400 mb-2 font-bold">// 2 Langkah Membuat Anchor Link:</div>
          <div>1. Beri atribut <code>id</code> pada target seksi: &lt;h2 <span class="text-emerald-400">id="faq"</span>&gt;Tanya Jawab&lt;/h2&gt;</div>
          <div class="mt-2">2. Buat link dengan tanda pagar (<code>#</code>): &lt;a <span class="text-sky-400">href="#faq"</span>&gt;Lompat ke FAQ&lt;/a&gt;</div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo Anchor Links</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h1>Daftar Isi Artikel</h1>
  <ul>
    <li><a href="#bab1">Lompat ke Bab 1</a></li>
    <li><a href="#bab2">Lompat ke Bab 2</a></li>
    <li><a href="#bab3">Lompat ke Bab 3</a></li>
  </ul>

  <div style="height: 300px; background: #e2e8f0; margin: 20px 0; padding: 20px; border-radius: 8px;">
    <h2 id="bab1">📖 Bab 1: Pengenalan</h2>
    <p>Ini adalah isi dari Bab 1.</p>
  </div>

  <div style="height: 300px; background: #cbd5e1; margin: 20px 0; padding: 20px; border-radius: 8px;">
    <h2 id="bab2">💻 Bab 2: Praktik Koding</h2>
    <p>Ini adalah isi dari Bab 2.</p>
  </div>

  <div style="height: 300px; background: #94a3b8; color: white; margin: 20px 0; padding: 20px; border-radius: 8px;">
    <h2 id="bab3">🎯 Bab 3: Kesimpulan</h2>
    <p>Ini adalah isi dari Bab 3.</p>
    <a href="#" style="color: yellow;">Kembali ke Paling Atas</a>
  </div>
</body>
</html>`,
    quiz: {
      question: 'Karakter apakah yang wajib diawali pada nilai atribut href saat membuat anchor link menuju elemen dengan id tertentu?',
      options: ['@', '#', '$', '/'],
      answer: 1,
      explanation: 'Karakter tanda pagar (#) menandakan bahwa link tersebut menargetkan ID elemen di dalam halaman yang sama (contoh: href="#seksi-1").'
    }
  },

  {
    title: 'HTML Links - Exercises (Membuat Menu Navigasi Anchor)',
    chapter: 'HTML Links',
    type: 'challenge',
    order: 41,
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">✍️ Latihan Hyperlink & Anchor</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Buatlah tautan anchor yang mengarah ke seksi kontak dengan <code>id="kontak"</code>.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Link</title>
</head>
<body>
  <!-- Buat link menuju #kontak di sini -->

  <br><br>
  <h2 id="kontak">Hubungi Kami</h2>
  <p>Email: support@example.com</p>
</body>
</html>`,
    challenge: {
      instruction: 'Buatlah tag <a href="#kontak">Menuju Bagian Kontak</a> di bagian atas halaman.',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Link</title>
</head>
<body>

  <br><br>
  <h2 id="kontak">Hubungi Kami</h2>
  <p>Email: support@example.com</p>
</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Link</title>
</head>
<body>
  <a href="#kontak">Menuju Bagian Kontak</a>
  <br><br>
  <h2 id="kontak">Hubungi Kami</h2>
  <p>Email: support@example.com</p>
</body>
</html>`,
      hint: 'Gunakan <a href="#kontak">Menuju Bagian Kontak</a>'
    }
  },

  {
    title: 'HTML Links - Code Challenge (Navbar Header Lengkap)',
    chapter: 'HTML Links',
    type: 'challenge',
    order: 42,
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🚀 Tantangan: Menu Navigasi Website</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Buatlah navigasi bar horizontal dengan 3 menu: "Beranda" (href="/"), "Fitur" (href="#fitur"), dan "Bantuan" (href="https://help.com" target="_blank").
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Navbar</title>
</head>
<body>

</body>
</html>`,
    challenge: {
      instruction: 'Buat <nav><a href="/">Beranda</a> | <a href="#fitur">Fitur</a> | <a href="https://help.com" target="_blank">Bantuan</a></nav>.',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Navbar</title>
</head>
<body>

</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Navbar</title>
</head>
<body>
  <nav>
    <a href="/">Beranda</a> | 
    <a href="#fitur">Fitur</a> | 
    <a href="https://help.com" target="_blank">Bantuan</a>
  </nav>
</body>
</html>`,
      hint: 'Gunakan tag <nav> yang membungkus ketiga tag <a> tersebut'
    }
  },

  // ── 16. HTML Images ───────────────────────────────────────────────────────
  {
    title: 'HTML Images - Format Gambar, Dimensi & Responsif',
    chapter: 'HTML Images',
    type: 'code',
    order: 43,
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🖼️ Mengoptimalkan Gambar dalam HTML</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Tag <code>&lt;img&gt;</code> digunakan untuk menyematkan gambar ke dalam dokumen. Gambar secara teknis tidak disisipkan langsung ke file HTML, melainkan ditautkan melalui URL alamat file sumber (<code>src</code>).
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-orange-500 font-mono">Format Gambar Populer</strong>:
            <ul class="mt-1 space-y-1 text-slate-600 dark:text-slate-400">
              <li>• <strong>WebP / AVIF</strong>: Format modern paling ringan & kompresi terbaik.</li>
              <li>• <strong>PNG</strong>: Mendukung latar belakang transparan.</li>
              <li>• <strong>SVG</strong>: Grafis vektor tanpa pecah saat di-zoom.</li>
              <li>• <strong>JPG/JPEG</strong>: Foto dengan gradasi warna kompleks.</li>
            </ul>
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-orange-500 font-mono">Gambar Responsif (CSS)</strong>:
            <p class="text-slate-600 dark:text-slate-400 mt-1">
              Gunakan aturan <code>style="max-width: 100%; height: auto;"</code> agar gambar otomatis menyesuaikan lebar layar smartphone secara proporsional.
            </p>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo Gambar Responsif</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Gambar Responsif Modern</h2>
  <img 
    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800" 
    alt="Web Development Workspace" 
    style="max-width: 100%; height: auto; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);" 
  />
  <p><small>Gambar akan otomatis mengecil saat layar dipersempit.</small></p>
</body>
</html>`,
    quiz: {
      question: 'Aturan CSS manakah yang membuat gambar tidak pernah melebihi lebar wadah pembungkusnya (responsif)?',
      options: ['min-width: 100%;', 'max-width: 100%; height: auto;', 'width: 1000px;', 'display: none;'],
      answer: 1,
      explanation: 'max-width: 100%; height: auto; memastikan gambar fleksibel mengikuti lebar container dan menjaga rasio tinggi-lebar tetap proporsional.'
    }
  },

  {
    title: 'HTML Images - The Picture Element (<picture> & Art Direction)',
    chapter: 'HTML Images',
    type: 'code',
    order: 44,
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">📱 Elemen &lt;picture&gt; untuk Multi-Perangkat</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Elemen <code>&lt;picture&gt;</code> memberikan fleksibilitas penuh kepada pengembang web untuk menampilkan gambar yang berbeda berdasarkan ukuran layar perangkat (*Media Queries*).
        </p>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto border border-slate-800">
          <div class="text-amber-400 mb-2 font-bold">// Contoh Penggunaan Tag Picture:</div>
          <div>&lt;<span class="text-rose-400">picture</span>&gt;</div>
          <div class="ml-4">&lt;<span class="text-sky-400">source</span> media="(min-width: 800px)" srcset="desktop.jpg"&gt;</div>
          <div class="ml-4">&lt;<span class="text-sky-400">source</span> media="(min-width: 480px)" srcset="tablet.jpg"&gt;</div>
          <div class="ml-4">&lt;<span class="text-emerald-400">img</span> src="mobile.jpg" alt="Banner Responsif"&gt;</div>
          <div>&lt;/<span class="text-rose-400">picture</span>&gt;</div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo Picture Element</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Art Direction dengan &lt;picture&gt;</h2>
  
  <picture>
    <source media="(min-width: 650px)" srcset="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=700">
    <source media="(min-width: 450px)" srcset="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500">
    <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300" alt="Tech Setup" style="width: 100%; border-radius: 8px;">
  </picture>
</body>
</html>`,
    quiz: {
      question: 'Tag child apakah di dalam <picture> yang digunakan untuk mendefinisikan sumber gambar alternatif beserta media query?',
      options: ['<image>', '<source>', '<src>', '<media>'],
      answer: 1,
      explanation: 'Tag <source> di dalam <picture> menggunakan atribut media dan srcset untuk menentukan gambar yang cocok sesuai ukuran layar.'
    }
  },

  {
    title: 'HTML Images - Exercises (Menyusun Tag Gambar Lengkap)',
    chapter: 'HTML Images',
    type: 'challenge',
    order: 45,
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">✍️ Latihan Tag Gambar</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Buatlah tag gambar lengkap dengan atribut <code>src</code>, <code>alt</code>, <code>width="300"</code>, dan <code>height="200"</code>.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Gambar</title>
</head>
<body>

</body>
</html>`,
    challenge: {
      instruction: 'Buat tag <img src="pemandangan.jpg" alt="Gunung Bromo" width="300" height="200">.',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Gambar</title>
</head>
<body>

</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Gambar</title>
</head>
<body>
  <img src="pemandangan.jpg" alt="Gunung Bromo" width="300" height="200">
</body>
</html>`,
      hint: 'Gunakan <img src="pemandangan.jpg" alt="Gunung Bromo" width="300" height="200">'
    }
  },

  {
    title: 'HTML Images - Code Challenge (Galeri Foto Kartu)',
    chapter: 'HTML Images',
    type: 'challenge',
    order: 46,
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🚀 Tantangan: Kartu Profil Gambar</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Buat kartu profil yang menggabungkan foto profil lingkaran, nama, dan deskripsi singkat.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Kartu Profil</title>
</head>
<body>

</body>
</html>`,
    challenge: {
      instruction: 'Buatlah <div style="text-align: center;"><img src="avatar.png" alt="Avatar" width="100" style="border-radius: 50%;"><h3>John Doe</h3><p>Software Engineer</p></div>.',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Kartu Profil</title>
</head>
<body>

</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Kartu Profil</title>
</head>
<body>
  <div style="text-align: center;">
    <img src="avatar.png" alt="Avatar" width="100" style="border-radius: 50%;">
    <h3>John Doe</h3>
    <p>Software Engineer</p>
  </div>
</body>
</html>`,
      hint: 'Gunakan div ber-style text-align: center yang membungkus img bulat (border-radius: 50%), h3, dan p'
    }
  },

  // ── 17. HTML Project ──────────────────────────────────────────────────────
  {
    title: 'HTML Project - Membangun Web Landing Page Portfolio Lengkap',
    chapter: 'HTML Project',
    type: 'challenge',
    order: 47,
    theory: `
      <div class="space-y-6">
        <div class="p-6 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-transparent border border-indigo-500/20">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">🏆 Mini Project: Website Portofolio Lengkap</h2>
          <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Selamat! Anda telah mempelajari seluruh materi inti HTML5. Sekarang saatnya menggabungkan semua keahlian Anda (Headings, Paragraphs, Images, Links, Inline CSS, Formatting, dan Quotations) untuk membangun <strong>Halaman Web Portofolio Pribadi yang Lengkap & Memukau</strong>!
          </p>
        </div>

        <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs space-y-2">
          <h3 class="font-bold text-slate-800 dark:text-white text-sm mb-2">📋 Komponen Wajib dalam Proyek Ini:</h3>
          <div>1. <strong>Header & Navigasi</strong>: Logo judul dan link navigasi anchor (#tentang, #keahlian, #kontak).</div>
          <div>2. <strong>Hero Section</strong>: Foto profil, nama besar <code>&lt;h1&gt;</code>, dan status ketersediaan kerja ber-stabilo <code>&lt;mark&gt;</code>.</div>
          <div>3. <strong>Seksi Tentang Saya</strong>: Paragraf deskripsi dengan teks tebal <code>&lt;strong&gt;</code> dan kutipan inspiratif <code>&lt;blockquote&gt;</code>.</div>
          <div>4. <strong>Seksi Kontak</strong>: Tag <code>&lt;address&gt;</code> dengan email dan nomor WhatsApp.</div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Portofolio Pengembang Web</title>
  <style>
    body {
      font-family: 'Segoe UI', Arial, sans-serif;
      margin: 0;
      background-color: #0f172a;
      color: #f8fafc;
      line-height: 1.6;
    }
    header {
      background-color: #1e293b;
      padding: 16px 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #334155;
    }
    nav a {
      color: #38bdf8;
      text-decoration: none;
      margin-left: 20px;
      font-weight: bold;
    }
    .container {
      max-width: 750px;
      margin: 30px auto;
      padding: 0 20px;
    }
    .hero {
      text-align: center;
      padding: 40px 20px;
      background: #1e293b;
      border-radius: 16px;
      border: 1px solid #334155;
    }
    .avatar {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      border: 4px solid #6366f1;
    }
    blockquote {
      background: #334155;
      padding: 15px 20px;
      border-left: 4px solid #38bdf8;
      border-radius: 0 8px 8px 0;
      font-style: italic;
    }
  </style>
</head>
<body>

  <!-- HEADER & NAVBAR -->
  <header>
    <h2 style="margin: 0; color: #6366f1;">DevGrow.id</h2>
    <nav>
      <a href="#tentang">Tentang</a>
      <a href="#keahlian">Keahlian</a>
      <a href="#kontak">Kontak</a>
    </nav>
  </header>

  <div class="container">
    <!-- HERO SECTION -->
    <div class="hero">
      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300" alt="Foto Profil" class="avatar">
      <h1 style="color: #ffffff; margin: 15px 0 5px;">Rian Pratama</h1>
      <p style="color: #94a3b8; margin: 0;">Junior Web Developer &bull; <mark style="background: #fbbf24; padding: 2px 8px; border-radius: 4px; font-weight: bold;">Open for Hire</mark></p>
    </div>

    <!-- TENTANG SECTION -->
    <h2 id="tentang" style="color: #38bdf8; margin-top: 40px;">👨‍💻 Tentang Saya</h2>
    <p>Halo! Saya adalah seorang pengembang web yang bersemangat dalam membangun antarmuka web modern menggunakan <strong>HTML5, CSS3, dan JavaScript</strong>.</p>
    
    <blockquote>
      "Kualitas kode yang baik adalah seni memecahkan masalah dengan sederhana."
    </blockquote>

    <hr style="border: 0; border-top: 1px solid #334155; margin: 40px 0;">

    <!-- KONTAK SECTION -->
    <h2 id="kontak" style="color: #38bdf8;">📬 Hubungi Saya</h2>
    <address style="background: #1e293b; padding: 20px; border-radius: 12px; border: 1px solid #334155;">
      Email: <a href="mailto:rian@devgrow.id" style="color: #38bdf8;">rian@devgrow.id</a><br>
      GitHub: <a href="https://github.com" target="_blank" style="color: #38bdf8;">github.com/rianpratama</a><br>
      Lokasi: Jakarta, Indonesia
    </address>
  </div>

</body>
</html>`,
    challenge: {
      instruction: 'Bangun dokumen portofolio lengkap yang memuat elemen <header>, <nav> dengan 3 tautan anchor (#tentang, #keahlian, #kontak), seksi hero dengan <img> dan <h1>, serta bagian <address> untuk kontak.',
      starterCode: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Portofolio Saya</title>
</head>
<body>

</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Portofolio Saya</title>
</head>
<body>
  <header>
    <h2>Portofolio</h2>
    <nav>
      <a href="#tentang">Tentang</a>
      <a href="#kontak">Kontak</a>
    </nav>
  </header>

  <main>
    <h1>Halo, Saya Web Developer</h1>
    <p>Saya menguasai <strong>HTML5</strong> dan <strong>CSS3</strong>.</p>

    <h2 id="tentang">Tentang Saya</h2>
    <blockquote>Belajar coding dengan tekun setiap hari.</blockquote>

    <h2 id="kontak">Kontak</h2>
    <address>
      Email: developer@lms.test<br>
      Indonesia
    </address>
  </main>
</body>
</html>`,
      hint: 'Gunakan kombinasi lengkap header, nav, main, h1, h2 dengan id anchor, blockquote, dan address'
    }
  }
];

import { htmlLessonsPart2 } from './data/htmlPart2';

const allHtmlLessons = [...htmlLessonsList, ...htmlLessonsPart2];

async function main() {
  console.log(`🌱 Starting Master Curriculum Seeding (${allHtmlLessons.length} total HTML lessons) into lms_content_db...`);

  // 1. SEED HTML MODULE
  await prisma.module.upsert({
    where: { id: 'html' },
    update: {
      title: 'HTML Dasar: Kerangka Web',
      category: 'Programming',
      description: 'Kuasai fondasi utama web modern dengan HTML5 dari konsep dasar hingga proyek nyata.',
      level: 'Semua Level',
      duration: '4 Minggu',
      order: 1,
      isPublished: true
    },
    create: {
      id: 'html',
      title: 'HTML Dasar: Kerangka Web',
      category: 'Programming',
      description: 'Kuasai fondasi utama web modern dengan HTML5 dari konsep dasar hingga proyek nyata.',
      level: 'Semua Level',
      duration: '4 Minggu',
      order: 1,
      isPublished: true
    }
  });

  // 2. SEED OTHER MODULES (CSS, JS, PHP, MySQL, Git, Mobile, Cisco)
  const modulesList = [
    { id: 'css', title: 'CSS Styling: Desain Web', category: 'Web Design', order: 2 },
    { id: 'javascript', title: 'JavaScript: Logika & Interaktivitas', category: 'Programming', order: 3 },
    { id: 'php', title: 'PHP & MySQL Backend Mastery', category: 'Programming', order: 4 },
    { id: 'mysql', title: 'MySQL: Relational Database', category: 'Database', order: 5 },
    { id: 'git', title: 'Git & GitHub Version Control', category: 'General', order: 6 },
    { id: 'mobile', title: 'Mobile App: Java Android', category: 'Mobile', order: 7 },
    { id: 'cisco', title: 'Cisco Packet Tracer', category: 'Jaringan', order: 8 }
  ];

  for (const m of modulesList) {
    await prisma.module.upsert({
      where: { id: m.id },
      update: { title: m.title, category: m.category, order: m.order, isPublished: true },
      create: { id: m.id, title: m.title, category: m.category, order: m.order, isPublished: true }
    });
  }

  // 3. SEED CHAPTERS & LESSONS FOR HTML
  const chaptersSet = new Set(allHtmlLessons.map((l) => l.chapter));
  const chapterIdMap: Record<string, string> = {};

  let chapterOrder = 1;
  for (const chapTitle of chaptersSet) {
    const chapId = `html-chap-${chapTitle.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
    const chap = await prisma.chapter.upsert({
      where: { id: chapId },
      update: { title: chapTitle, order: chapterOrder },
      create: {
        id: chapId,
        moduleId: 'html',
        title: chapTitle,
        order: chapterOrder
      }
    });
    chapterIdMap[chapTitle] = chap.id;
    chapterOrder++;
  }

  for (const item of allHtmlLessons) {
    const lessonId = `html-lesson-${item.title.toLowerCase().replace(/[^a-z0-9]/g, '-').slice(0, 40)}`;
    const anyItem = item as any;
    const contentPayload = JSON.stringify({
      overview: anyItem.overview || null,
      theory: item.theory,
      code: item.code || '',
      codeExplanation: anyItem.codeExplanation || null,
      quiz: item.quiz || null,
      challenge: anyItem.challenge || null
    });

    await prisma.lesson.upsert({
      where: { id: lessonId },
      update: {
        moduleId: 'html',
        chapterId: chapterIdMap[item.chapter] || null,
        chapter: item.chapter,
        title: item.title,
        type: item.type,
        content: contentPayload,
        order: item.order
      },
      create: {
        id: lessonId,
        moduleId: 'html',
        chapterId: chapterIdMap[item.chapter] || null,
        chapter: item.chapter,
        title: item.title,
        type: item.type,
        content: contentPayload,
        order: item.order
      }
    });
  }

  console.log(`✅ MASTER CURRICULUM SEEDING COMPLETED FOR lms_content_db! Total: ${allHtmlLessons.length} lessons.`);
}

main()
  .catch((e) => {
    console.error('❌ Error seeding content db:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

