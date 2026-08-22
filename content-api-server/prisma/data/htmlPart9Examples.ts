import { HtmlLessonItem } from './htmlPart2';

export const htmlLessonsPart9Examples: HtmlLessonItem[] = [
  // ── 1. HTML Examples ──────────────────────────────────────────────────────
  {
    title: 'HTML Examples - Kompilasi Contoh Kode Praktis Terlengkap',
    chapter: 'HTML Examples',
    type: 'code',
    order: 114,
    overview: 'Koleksi lengkap contoh kode HTML yang dapat Anda salin, modifikasi, dan jalankan langsung untuk berbagai kebutuhan web.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">📚 Galeri Contoh Kode HTML</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Melihat dan membedah contoh kode nyata adalah cara tercepat menguasai pembuatan web. Di bab ini disajikan pola kode gabungan untuk komponen umum (Kartu Profil, Navbar Responsif, Alert Notifikasi, dan Galeri Foto).
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Kompilasi Komponen Web</title>
  <style>
    body { font-family: sans-serif; background: #f8fafc; padding: 20px; }
    .card { background: white; border: 1px solid #e2e8f0; border-radius: 10px; padding: 20px; max-width: 320px; }
    .badge { background: #e0e7ff; color: #4338ca; padding: 4px 8px; border-radius: 4px; font-size: 11px; font-weight: bold; }
  </style>
</head>
<body>
  <div class="card">
    <span class="badge">PRODUK UNGGULAN</span>
    <h3>Keyboard Mekanikal Pro</h3>
    <p style="color: #64748b; font-size: 13px;">Switch Linear Red, RGB Backlight, dan Wireless Tri-Mode.</p>
    <p><strong>Harga: Rp 850.000</strong></p>
    <button style="background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; width: 100%;">Beli Sekarang</button>
  </div>
</body>
</html>`,
    codeExplanation: [
      'Contoh perpaduan elemen semantik div, span badge, heading h3, paragraf p, dan button interaktif.',
      'Dapat langsung disalin dan disesuaikan untuk komponen eCommerce.'
    ],
    quiz: {
      question: 'Apakah keuntungan utama mempelajari kompilasi contoh kode praktis dalam web development?',
      options: ['Mengetahui cara perpaduan berbagai elemen HTML dalam studi kasus nyata', 'Tidak perlu lagi menulis CSS', 'Membuat server backend otomatis jadi', 'Menghilangkan kebutuhan database'],
      answer: 0,
      explanation: 'Mempelajari contoh kode praktis melatih pemahaman integrasi antar elemen HTML dan styling dalam komponen antarmuka nyata.'
    }
  },

  // ── 2. HTML Editor ────────────────────────────────────────────────────────
  {
    title: 'HTML Editor - Panduan Live Playground & Ekstensi Produktivitas',
    chapter: 'HTML Editor',
    type: 'code',
    order: 115,
    overview: 'Mengoptimalkan lingkungan kerja editor kode (VS Code, CodePen, Live Server) untuk efisiensi coding 10x lebih cepat.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">⚡ Produktivitas Editor Modern</h2>
        <div class="space-y-3 text-xs">
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>1. Emmet Abbreviations</strong>: Ketik <code>!</code> + Tab untuk boilerplate HTML5 instan; ketik <code>ul>li*5>a</code> untuk membuat list navigasi 5 link dalam 1 detik.
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>2. Live Server Extension</strong>: Otomatis memuat ulang (auto-reload) browser setiap kali file disimpan (<kbd>Ctrl</kbd> + <kbd>S</kbd>).
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>3. Auto Rename Tag</strong>: Mengubah tag penutup secara otomatis saat tag pembuka diedit.
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo Emmet Shortcut</title>
</head>
<body>
  <!-- Dihasilkan dengan: header>nav>ul>li*3>a{Menu $} -->
  <header>
    <nav>
      <ul>
        <li><a href="#">Menu 1</a></li>
        <li><a href="#">Menu 2</a></li>
        <li><a href="#">Menu 3</a></li>
      </ul>
    </nav>
  </header>
</body>
</html>`,
    codeExplanation: [
      'Sintaks Emmet ul>li*3>a menghasilkan 3 butir item list beserta linknya secara instan.'
    ],
    quiz: {
      question: 'Kombinasi shortcut Emmet manakah yang paling cepat untuk membuat kerangka dasar dokumen HTML5 lengkap di VS Code?',
      options: ['html:5 atau ! lalu tekan tombol Tab', 'Ctrl + N', 'Shift + Insert', 'F5'],
      answer: 0,
      explanation: 'Mengetik tanda seru (!) atau html:5 lalu menekan Tab adalah shortcut resmi Emmet untuk membuat boilerplate HTML5.'
    }
  },

  // ── 3. HTML Quiz ──────────────────────────────────────────────────────────
  {
    title: 'HTML Quiz - Bank Kuis Evaluasi Pemahaman Menyeluruh',
    chapter: 'HTML Quiz',
    type: 'code',
    order: 116,
    overview: 'Uji daya ingat dan pemahaman konsep HTML Anda melalui simulasi kuis terstandarisasi.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🎯 Bank Soal Evaluasi Mandiri</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Kuis ini menguji pemahaman Anda seputar tag semantik, atribut form, tabel, audio/video, dan manipulasi Web APIs.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Simulasi Kuis HTML</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Kuis Evaluasi Singkat</h2>
  <p>Pilih jawaban yang paling benar:</p>
  <form onsubmit="alert('Jawaban berhasil dikumpulkan!'); return false;">
    <p>1. Tag apakah yang mendefinisikan navigasi utama?</p>
    <input type="radio" id="q1a" name="q1" value="a"> <label for="q1a">&lt;navigation&gt;</label><br>
    <input type="radio" id="q1b" name="q1" value="b"> <label for="q1b">&lt;nav&gt;</label><br><br>
    <button type="submit">Cek Jawaban</button>
  </form>
</body>
</html>`,
    codeExplanation: [
      'Simulasi kuis menggunakan elemen radio button untuk pilihan ganda tunggal.'
    ],
    quiz: {
      question: 'Tag manakah yang benar untuk menyisipkan baris baru (line break) tanpa membuat paragraf baru?',
      options: ['<break>', '<br>', '<lb>', '<newline>'],
      answer: 1,
      explanation: '<br> adalah empty tag resmi untuk membuat pergantian baris tunggal (line break).'
    }
  },

  // ── 4. HTML Exercises ─────────────────────────────────────────────────────
  {
    title: 'HTML Exercises - Bank Latihan Interaktif dari Dasar ke Mahir',
    chapter: 'HTML Exercises',
    type: 'challenge',
    order: 117,
    overview: 'Latihan praktik terstruktur melengkapi atribut dan tag HTML.',
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">✍️ Latihan Terpadu: Form Kontak Lengkap</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Lengkapi form berikut dengan atribut <code>action="/kontak"</code>, <code>method="POST"</code>, dan input email wajib diisi (<code>required</code>).
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Terpadu</title>
</head>
<body>
  <!-- Buat form di sini -->

</body>
</html>`,
    challenge: {
      instruction: 'Buat tag <form action="/kontak" method="POST"><input type="email" name="email" required><button type="submit">Kirim</button></form>.',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Terpadu</title>
</head>
<body>

</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Terpadu</title>
</head>
<body>
  <form action="/kontak" method="POST">
    <input type="email" name="email" required>
    <button type="submit">Kirim</button>
  </form>
</body>
</html>`,
      hint: 'Gunakan <form action="/kontak" method="POST"> dengan input email required'
    }
  },

  // ── 5. HTML Challenges ────────────────────────────────────────────────────
  {
    title: 'HTML Challenges - Kumpulan Tantangan Studi Kasus Nyata',
    chapter: 'HTML Challenges',
    type: 'challenge',
    order: 118,
    overview: 'Tantangan membangun komponen antarmuka web modern mandiri tanpa bantuan.',
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🚀 Tantangan: Kartu Profil Tim</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Buatlah sebuah <code>&lt;section&gt;</code> yang memuat <code>&lt;img src="avatar.jpg" alt="Foto Profil"&gt;</code>, <code>&lt;h3&gt;Nama Lengkap&lt;/h3&gt;</code>, dan <code>&lt;p&gt;Frontend Developer&lt;/p&gt;</code>.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Tantangan Profil</title>
</head>
<body>

</body>
</html>`,
    challenge: {
      instruction: 'Buat tag <section><img src="avatar.jpg" alt="Foto Profil"><h3>Nama Lengkap</h3><p>Frontend Developer</p></section>.',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Tantangan Profil</title>
</head>
<body>

</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Tantangan Profil</title>
</head>
<body>
  <section>
    <img src="avatar.jpg" alt="Foto Profil">
    <h3>Nama Lengkap</h3>
    <p>Frontend Developer</p>
  </section>
</body>
</html>`,
      hint: 'Gunakan <section> yang membungkus <img>, <h3>, dan <p>'
    }
  },

  // ── 6. HTML Website ───────────────────────────────────────────────────────
  {
    title: 'HTML Website - Proyek Website Multi-Halaman Lengkap',
    chapter: 'HTML Website',
    type: 'code',
    order: 119,
    overview: 'Panduan merancang dan menghubungkan struktur website multi-halaman lengkap (Beranda, Tentang, Layanan, & Kontak).',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🌐 Anatomi Website Multi-Halaman</h2>
        <div class="space-y-2.5 text-xs">
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>index.html</strong>: Halaman beranda utama tempat pengunjung pertama mendarat.
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>about.html</strong>: Profil perusahaan/pribadi, visi misi, dan kisah perjalanan.
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>contact.html</strong>: Formulir pesan, peta Google Maps (iframe), dan alamat kontak.
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Website EduTech - Beranda</title>
  <style>
    body { font-family: sans-serif; margin: 0; padding: 20px; background: #f8fafc; }
    nav a { margin-right: 15px; text-decoration: none; color: #4f46e5; font-weight: bold; }
    header, footer { background: #1e293b; color: white; padding: 20px; border-radius: 8px; }
  </style>
</head>
<body>
  <header>
    <h1>EduTech Global</h1>
    <nav>
      <a href="index.html" style="color: #38bdf8;">Beranda</a>
      <a href="about.html">Tentang</a>
      <a href="contact.html">Kontak</a>
    </nav>
  </header>

  <main style="padding: 20px 0;">
    <h2>Masa Depan Pembelajaran Digital</h2>
    <p>Platform edukasi teknologi terlengkap di Indonesia.</p>
  </main>

  <footer>
    <p>&copy; 2026 EduTech Global. Seluruh hak cipta dilindungi.</p>
  </footer>
</body>
</html>`,
    codeExplanation: [
      'Tautan navigasi di dalam <header> menghubungkan seluruh berkas HTML lokal.',
      'Penggunaan tag semantik memastikan konsistensi layout di seluruh halaman.'
    ],
    quiz: {
      question: 'Nama file default apakah yang secara universal selalu dicari dan dieksekusi pertama kali oleh web server sebagai halaman beranda utama?',
      options: ['home.html', 'main.html', 'index.html', 'default.html'],
      answer: 2,
      explanation: 'index.html adalah nama standar konvensi internasional untuk halaman utama (root homepage) sebuah website.'
    }
  },

  // ── 7. HTML Syllabus ──────────────────────────────────────────────────────
  {
    title: 'HTML Syllabus - Peta Jalan Silabus Lengkap HTML5',
    chapter: 'HTML Syllabus',
    type: 'code',
    order: 120,
    overview: 'Daftar silabus terstruktur memetakan seluruh kompetensi dari tingkat dasar (pemula), menengah, hingga tingkat lanjut (advanced).',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🗺️ Roadmap Pembelajaran HTML5</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-sky-500 font-bold block mb-1">Tingkat Dasar (Beginner)</strong>
            <p class="text-slate-600 dark:text-slate-400">Struktur HTML5, Headings, Paragraf, Format Teks, Links, Images, & List.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-amber-500 font-bold block mb-1">Tingkat Menengah (Intermediate)</strong>
            <p class="text-slate-600 dark:text-slate-400">Tabel Kompleks, Formulir Web, Input Types, Semantik Layout, & RWD Meta.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-emerald-500 font-bold block mb-1">Tingkat Lanjut (Advanced)</strong>
            <p class="text-slate-600 dark:text-slate-400">Canvas 2D, SVG Vektor, Multimedia Video/Audio, Web Storage, & Web Workers.</p>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Silabus Pembelajaran</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Silabus HTML5 Lengkap (3 Tingkat Keahlian)</h2>
  <ul>
    <li><strong>Level 1:</strong> Fondasi Tag & Struktur Dokumen</li>
    <li><strong>Level 2:</strong> Formulir & Layouting Semantik</li>
    <li><strong>Level 3:</strong> Grafika, Multimedia & Web APIs</li>
  </ul>
</body>
</html>`,
    codeExplanation: [
      'Peta jalan ini memandu Anda belajar secara bertahap tanpa kebingungan menentukan prioritas materi.'
    ],
    quiz: {
      question: 'Manakah materi yang tepat dipelajari setelah menguasai elemen teks dasar (heading & paragraf)?',
      options: ['Web Workers dan SSE', 'Tautan (Links), Gambar (Images), dan Lists', 'Database MySQL Backend', 'Server Docker'],
      answer: 1,
      explanation: 'Setelah memahami teks, langkah logis berikutnya adalah mempelajari navigasi link, media gambar, dan list sebelum masuk ke formulir dan API.'
    }
  },

  // ── 8. HTML Study Plan ────────────────────────────────────────────────────
  {
    title: 'HTML Study Plan - Jadwal Rencana Belajar Terstruktur (14 Hari)',
    chapter: 'HTML Study Plan',
    type: 'code',
    order: 121,
    overview: 'Jadwal terencana harian untuk menguasai HTML dari nol dalam waktu 14 hari dengan alokasi 1 jam per hari.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">📅 Jadwal Belajar 14 Hari (1 Jam/Hari)</h2>
        <div class="space-y-2 text-xs">
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>Hari 1-3</strong>: Sintaks Dasar, Headings, Paragraf, Format Teks, & Komentar.
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>Hari 4-6</strong>: Links, Images, Favicon, Tables, & Lists (ul/ol/dl).
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>Hari 7-9</strong>: Block vs Inline, Div, Classes, Id, & Formulir Web Lengkap.
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>Hari 10-12</strong>: Layout Semantik, HTML Media, Canvas & SVG.
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>Hari 13-14</strong>: Web APIs, Proyek Website Akhir, & Ujian Sertifikasi.
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Study Plan Tracker</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Target Belajar Hari Ini</h2>
  <p><input type="checkbox" id="t1" checked> <label for="t1">Hari 1: Struktur Dokumen & Headings</label></p>
  <p><input type="checkbox" id="t2"> <label for="t2">Hari 2: Paragraf & Format Teks</label></p>
</body>
</html>`,
    codeExplanation: [
      'Konsistensi 1 jam per hari jauh lebih efektif dibandingkan belajar maraton 10 jam dalam 1 hari.'
    ],
    quiz: {
      question: 'Berapakah waktu alokasi ideal harian yang direkomendasikan untuk belajar HTML secara konsisten dan efektif?',
      options: ['10 jam sehari tanpa istirahat', '1 jam setiap hari secara konsisten dan terarah', '1 jam per bulan', 'Cukup membaca tanpa mencoba coding'],
      answer: 1,
      explanation: 'Belajar 1 jam setiap hari secara konsisten dengan praktik langsung adalah metode retensi otak terbaik.'
    }
  },

  // ── 9. HTML Interview Prep ────────────────────────────────────────────────
  {
    title: 'HTML Interview Prep - Soal Wawancara Kerja Frontend Terpopuler',
    chapter: 'HTML Interview Prep',
    type: 'code',
    order: 122,
    overview: 'Kumpulan pertanyaan teknis seputar HTML yang paling sering ditanyakan oleh interviewer dalam wawancara kerja Frontend & Fullstack Developer.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">💼 4 Pertanyaan Wawancara Paling Populer</h2>
        <div class="space-y-3 text-xs">
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-indigo-500 font-bold">Q1: Apa pentingnya Doctype dan tag semantik untuk SEO?</strong>
            <p class="text-slate-600 dark:text-slate-400 mt-1">Jawaban: Doctype mengaktifkan mode standar peramban. Tag semantik memudahkan web crawler (Googlebot) mengindeks hirarki dan arti konten artikel.</p>
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-indigo-500 font-bold">Q2: Apa perbedaan atribut alt vs title pada tag img?</strong>
            <p class="text-slate-600 dark:text-slate-400 mt-1">Jawaban: <code>alt</code> dibaca oleh screen reader tunanetra dan tampil saat gambar rusak. <code>title</code> memunculkan tooltip saat mouse melayang (hover).</p>
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-indigo-500 font-bold">Q3: Apa perbedaan localStorage, sessionStorage, dan Cookie?</strong>
            <p class="text-slate-600 dark:text-slate-400 mt-1">Jawaban: LocalStorage permanen (5MB); SessionStorage hilang saat tab tutup; Cookies berkapasitas kecil (4KB) dan otomatis dikirimkan ke server di setiap HTTP header request.</p>
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-indigo-500 font-bold">Q4: Kapan memilih Canvas vs SVG?</strong>
            <p class="text-slate-600 dark:text-slate-400 mt-1">Jawaban: Gunakan SVG untuk logo/ikon yang butuh ketajaman resolusi tak terbatas; gunakan Canvas untuk animasi game & manipulasi piksel cepat.</p>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Simulasi Interview Prep</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Kesiapan Wawancara Kerja</h2>
  <p>Pahami konsep fundamental dan jangan hanya menghafal sintaks!</p>
</body>
</html>`,
    codeExplanation: [
      'Interviewer mencari developer yang memahami "mengapa" sebuah tag digunakan, bukan sekadar "bagaimana" mengetiknya.'
    ],
    quiz: {
      question: 'Jika interviewer bertanya apa fungsi utama atribut alt pada gambar, manakah jawaban yang paling profesional dan komprehensif?',
      options: ['Sebagai hiasan agar kode terlihat panjang', 'Menyediakan teks alternatif saat gambar gagal dimuat dan membantu aksesibilitas screen reader tunanetra', 'Mengubah ukuran gambar menjadi kecil', 'Mempercepat kecepatan internet server'],
      answer: 1,
      explanation: 'Atribut alt sangat penting untuk aksesibilitas (a11y) pengguna disabilitas tunanetra serta teks cadangan saat koneksi lambat.'
    }
  },

  // ── 10. HTML Bootcamp ─────────────────────────────────────────────────────
  {
    title: 'HTML Bootcamp - Panduan Belajar Intensif Siap Industri',
    chapter: 'HTML Bootcamp',
    type: 'code',
    order: 123,
    overview: 'Kurikulum intensif ala Bootcamp coding berorientasi proyek (Project-Based Learning) untuk mempersiapkan Anda masuk ke dunia kerja industri tech.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🚀 Metode Belajar Bootcamp</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-orange-500 font-bold block mb-1">1. 80% Praktik Langsung</strong>
            <p class="text-slate-600 dark:text-slate-400">Langsung mengetik kode dan memecahkan error sendiri (Hands-on coding).</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-emerald-500 font-bold block mb-1">2. Standar Clean Code</strong>
            <p class="text-slate-600 dark:text-slate-400">Membiasakan penulisan kode bersih, semantik rapi, dan mudah dibaca oleh tim.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-indigo-500 font-bold block mb-1">3. Portofolio Nyata</strong>
            <p class="text-slate-600 dark:text-slate-400">Membangun proyek website nyata yang dapat dipamerkan ke calon klien/recruiter.</p>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Bootcamp Challenge</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Prinsip Bootcamp Developer:</h2>
  <ol>
    <li>Belajar Konsep</li>
    <li>Ketik & Eksperimen Kode</li>
    <li>Perbaiki Error Mandiri</li>
    <li>Bangun Proyek Nyata</li>
  </ol>
</body>
</html>`,
    codeExplanation: [
      'Metode hands-on project-based learning meningkatkan daya ingat coding hingga 90%.'
    ],
    quiz: {
      question: 'Metode pembelajaran manakah yang terbukti paling efektif untuk menguasai coding pemrograman web secara mendalam?',
      options: ['Hanya membaca buku tanpa memegang keyboard', 'Project-Based Learning (Langsung praktik membangun proyek nyata)', 'Menghafal seluruh nama tag di luar kepala', 'Menonton video tutorial tanpa mengetik kode'],
      answer: 1,
      explanation: 'Project-Based Learning memaksa otak mempraktikkan sintaks, memecahkan error nyata, dan menghasilkan portofolio kerja.'
    }
  },

  // ── 11. HTML Summary ──────────────────────────────────────────────────────
  {
    title: 'HTML Summary - Cheatsheet Rangkuman Tag & Atribut Penting',
    chapter: 'HTML Summary',
    type: 'code',
    order: 124,
    overview: 'Lembar contekan cepat (Cheatsheet) seluruh tag, atribut, dan aturan sintaks HTML5 terpenting yang sering digunakan sehari-hari.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">📑 Ringkasan Kilat Seluruh Tag Pokok</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs font-mono">
          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">&lt;html&gt;, &lt;head&gt;, &lt;body&gt;</div>
          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">&lt;h1&gt; s/d &lt;h6&gt;, &lt;p&gt;, &lt;br&gt;</div>
          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">&lt;a href="..."&gt;, &lt;img src="..."&gt;</div>
          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">&lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;, &lt;dl&gt;</div>
          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">&lt;table&gt;, &lt;tr&gt;, &lt;th&gt;, &lt;td&gt;</div>
          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">&lt;form&gt;, &lt;input&gt;, &lt;button&gt;</div>
          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">&lt;header&gt;, &lt;nav&gt;, &lt;footer&gt;</div>
          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">&lt;video&gt;, &lt;audio&gt;, &lt;canvas&gt;</div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Ringkasan HTML5</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Semua Tag Pokok dalam Satu Halaman</h2>
  <p>Gunakan halaman ini sebagai referensi kilat saat Anda sedang membangun aplikasi web.</p>
</body>
</html>`,
    codeExplanation: [
      'Gunakan cheatsheet ini untuk mengingat kembali fungsi tag tanpa harus mencari dari awal.'
    ],
    quiz: {
      question: 'Manakah tag yang digunakan untuk menyisipkan judul utama paling penting dalam sebuah halaman web?',
      options: ['<h6>', '<h1>', '<head>', '<title>'],
      answer: 1,
      explanation: '<h1> adalah heading level tertinggi dan paling penting dalam hirarki dokumen HTML.'
    }
  },

  // ── 12. HTML Accessibility ────────────────────────────────────────────────
  {
    title: 'HTML Accessibility (a11y) - Aksesibilitas Ramah Disabilitas & ARIA',
    chapter: 'HTML Accessibility',
    type: 'code',
    order: 125,
    overview: 'Aksesibilitas Web (a11y) memastikan website dapat diakses dan dinavigasi dengan nyaman oleh semua orang, termasuk penyandang disabilitas tunanetra dan motorik.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">♿ 4 Pilar Aksesibilitas Web (a11y)</h2>
        <div class="space-y-3 text-xs">
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>1. Atribut Alt Gambar yang Deskriptif</strong>: Selalu beri keterangan teks gambar untuk dibaca oleh peranti Screen Reader (contoh: <code>alt="Grafik kenaikan omset kuartal 4"</code> bukan sekadar <code>alt="gambar"</code>).
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>2. Hubungkan Label ke Input</strong>: Selalu gunakan <code>&lt;label for="id_input"&gt;</code> agar pengguna tunanetra mengetahui isian formulir.
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>3. Atribut ARIA (Accessible Rich Internet Applications)</strong>: Tambahkan <code>aria-label</code>, <code>role="alert"</code>, atau <code>aria-expanded="false"</code> untuk komponen dinamis.
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>4. Navigasi Keyboard</strong>: Pastikan semua tombol dan link dapat dijangkau menggunakan tombol <kbd>Tab</kbd> dan diaktifkan dengan tombol <kbd>Enter</kbd> atau <kbd>Space</kbd>.
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo Web Aksesibel (a11y)</title>
  <style>
    body { font-family: sans-serif; padding: 20px; }
    .btn-icon {
      background: #4f46e5; color: white; border: none; padding: 10px; border-radius: 8px; cursor: pointer;
    }
  </style>
</head>
<body>
  <h2>Form Aksesibel (Screen-Reader Friendly)</h2>
  
  <form action="/cari">
    <!-- Input dengan Label Terhubung -->
    <label for="search-input">Cari Artikel:</label>
    <input type="text" id="search-input" name="q" placeholder="Ketik kata kunci...">
    
    <!-- Tombol Icon dengan ARIA Label Penjelas -->
    <button type="submit" class="btn-icon" aria-label="Lakukan Pencarian Artikel">
      🔍
    </button>
  </form>
</body>
</html>`,
    codeExplanation: [
      'label for="search-input" secara semantik terhubung dengan id="search-input".',
      'aria-label="Lakukan Pencarian Artikel" memberitahu pembaca layar tujuan tombol ikon kaca pembesar 🔍.'
    ],
    quiz: {
      question: 'Apakah fungsi dari atribut aria-label pada sebuah tombol yang hanya memuat ikon gambar visual tanpa teks tulisan?',
      options: ['Mengubah warna tombol jadi biru', 'Memberikan teks penjelas fungsi tombol kepada perangkat Screen Reader bagi penyandang tunanetra', 'Memperbesar ukuran ikon', 'Membuat tombol menjadi link download'],
      answer: 1,
      explanation: 'Atribut aria-label memberikan label aksesibilitas deskriptif kepada software pembaca layar (screen reader).'
    }
  }
];
