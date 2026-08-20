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
  }
];

async function main() {
  console.log('🌱 Starting Master Curriculum Seeding into lms_content_db...');

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
  const chaptersSet = new Set(htmlLessonsList.map((l) => l.chapter));
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

  for (const item of htmlLessonsList) {
    const lessonId = `html-lesson-${item.title.toLowerCase().replace(/[^a-z0-9]/g, '-').slice(0, 40)}`;
    const contentPayload = JSON.stringify({
      theory: item.theory,
      code: item.code || '',
      quiz: item.quiz || null,
      challenge: (item as any).challenge || null
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

  console.log(`✅ MASTER CURRICULUM SEEDING COMPLETED FOR lms_content_db!`);
}

main()
  .catch((e) => {
    console.error('❌ Error seeding content db:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
