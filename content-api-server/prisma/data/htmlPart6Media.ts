import { HtmlLessonItem } from './htmlPart2';

export const htmlLessonsPart6Media: HtmlLessonItem[] = [
  // ── 1. HTML Media ─────────────────────────────────────────────────────────
  {
    title: 'HTML Media - Pengenalan Format Multimedia di Web Modern',
    chapter: 'HTML Media',
    type: 'code',
    order: 100,
    overview: 'Multimedia di web hadir dalam berbagai bentuk seperti audio, musik, video, rekaman, animasi, dan siaran langsung streaming.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🎬 Era Multimedia Web Modern</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Pada masa awal web, halaman hanya berisi teks statis dan sedikit gambar. Kini berkat standar <strong>HTML5 Multimedia</strong>, browser dapat memutar video berkualitas 4K dan audio resolusi tinggi secara *native* langsung tanpa memerlukan plugin pihak ketiga seperti Adobe Flash Player.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-orange-500 font-bold block mb-1">Format Video Standar Web:</strong>
            <p class="text-slate-600 dark:text-slate-400 font-mono">
              • <strong>MP4</strong> (H.264 + AAC): Standar universal di semua browser & HP.<br>
              • <strong>WebM</strong> (VP8/VP9/AV1): Format terbuka Google dengan kompresi sangat hemat kuota.<br>
              • <strong>Ogg</strong> (Theora + Vorbis): Format sumber terbuka murni.
            </p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-emerald-500 font-bold block mb-1">Format Audio Standar Web:</strong>
            <p class="text-slate-600 dark:text-slate-400 font-mono">
              • <strong>MP3</strong>: Format audio paling populer di dunia.<br>
              • <strong>WAV</strong>: Format audio mentah tanpa kompresi (lossless).<br>
              • <strong>OGG</strong>: Format audio kompresi bebas paten.
            </p>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo Pengenalan Multimedia</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>HTML5 Native Multimedia</h2>
  <p>Browser modern memutar audio dan video tanpa perlu menginstal software tambahan!</p>
  <ul>
    <li>Video Player Bawaan: &lt;video&gt;</li>
    <li>Audio Player Bawaan: &lt;audio&gt;</li>
    <li>Embed Media Eksternal: &lt;iframe&gt; &bull; &lt;embed&gt; &bull; &lt;object&gt;</li>
  </ul>
</body>
</html>`,
    codeExplanation: [
      'HTML5 menghilangkan ketergantungan pada plugin eksternal seperti Adobe Flash.',
      'Format MP4 dan MP3 didukung 100% oleh semua browser modern di desktop dan mobile.'
    ],
    quiz: {
      question: 'Format video manakah yang memiliki kompatibilitas paling luas dan didukung secara universal oleh hampir seluruh browser dan sistem operasi smartphone modern?',
      options: ['AVI', 'WMV', 'MP4 (H.264)', 'FLV'],
      answer: 2,
      explanation: 'Format MP4 dengan codec video H.264 dan audio AAC didukung secara universal oleh seluruh peramban web modern.'
    }
  },

  // ── 2. HTML Video ─────────────────────────────────────────────────────────
  {
    title: 'HTML Video - Tag <video>, Kontrol Pemutar & Fallback Source',
    chapter: 'HTML Video',
    type: 'code',
    order: 101,
    overview: 'Elemen <video> digunakan untuk menampilkan video klip atau siaran streaming langsung di dalam halaman web.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">📹 Elemen &lt;video&gt; HTML5</h2>
        <div class="space-y-2.5 text-xs">
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono">
            <strong>controls</strong>: Menampilkan tombol Play, Pause, Pengatur Volume, dan Layar Penuh.
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono">
            <strong>autoplay</strong>: Memulai video otomatis saat halaman dimuat (sering wajib dipadukan dengan <code>muted</code>).
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono">
            <strong>muted</strong>: Membisukan suara audio video secara default.
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono">
            <strong>loop</strong>: Mengulang pemutaran video otomatis setelah durasi selesai.
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono">
            <strong>poster="thumbnail.jpg"</strong>: Gambar thumbnail yang tampil sebelum tombol play ditekan.
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo HTML Video Player</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Pemutar Video HTML5</h2>
  
  <video width="480" height="270" controls poster="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600" style="border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
    <source src="https://www.w3schools.com/html/mov_bbb.ogg" type="video/ogg">
    Browser Anda tidak mendukung tag pemutar video HTML5.
  </video>
</body>
</html>`,
    codeExplanation: [
      'controls memunculkan bar kontrol navigasi pemutar bawaan peramban.',
      'Tag <source> ganda memungkinkan browser memilih format pertama yang didukung (MP4 lalu OGG).',
      'Teks di bagian akhir menjadi teks fallback jika browser jadul tidak mendukung tag <video>.'
    ],
    quiz: {
      question: 'Atribut apakah yang harus ditambahkan pada tag <video> agar muncul tombol putar (play), jeda (pause), dan pengatur volume suara?',
      options: ['buttons', 'controls', 'player', 'actions'],
      answer: 1,
      explanation: 'Atribut controls wajib disertakan agar peramban menampilkan tombol navigasi pemutar video bawaan.'
    }
  },

  {
    title: 'HTML Video - Code Challenge (Membuat Video Player dengan Poster)',
    chapter: 'HTML Video',
    type: 'challenge',
    order: 102,
    overview: 'Tantangan membuat pemutar video dengan atribut controls dan source MP4.',
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🚀 Tantangan: Pemutar Video</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Buatlah elemen video <code>&lt;video width="320" height="240" controls&gt;&lt;source src="video.mp4" type="video/mp4"&gt;&lt;/video&gt;</code>.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Video</title>
</head>
<body>

</body>
</html>`,
    challenge: {
      instruction: 'Buat tag <video width="320" height="240" controls><source src="video.mp4" type="video/mp4"></video>.',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Video</title>
</head>
<body>

</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Video</title>
</head>
<body>
  <video width="320" height="240" controls>
    <source src="video.mp4" type="video/mp4">
  </video>
</body>
</html>`,
      hint: 'Gunakan <video width="320" height="240" controls> yang membungkus <source src="video.mp4" type="video/mp4">'
    }
  },

  // ── 3. HTML Audio ─────────────────────────────────────────────────────────
  {
    title: 'HTML Audio - Tag <audio>, Pemutar Suara Musik & Podcast',
    chapter: 'HTML Audio',
    type: 'code',
    order: 103,
    overview: 'Elemen <audio> digunakan untuk memutar berkas suara audio seperti podcast, musik latar, efek suara, atau narasi materi pembelajaran.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🎵 Elemen &lt;audio&gt; HTML5</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Sama seperti video, tag <code>&lt;audio&gt;</code> memiliki atribut <code>controls</code>, <code>autoplay</code>, <code>muted</code>, dan <code>loop</code>.
        </p>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto border border-slate-800">
          <div class="text-amber-400 mb-2 font-bold">// Format Audio Tag Standar:</div>
          <div>&lt;<span class="text-rose-400">audio</span> <span class="text-sky-400">controls</span>&gt;</div>
          <div class="ml-4">&lt;<span class="text-purple-400">source</span> <span class="text-sky-400">src</span>="podcast.mp3" <span class="text-sky-400">type</span>="audio/mpeg"&gt;</div>
          <div class="ml-4">&lt;<span class="text-purple-400">source</span> <span class="text-sky-400">src</span>="podcast.ogg" <span class="text-sky-400">type</span>="audio/ogg"&gt;</div>
          <div>&lt;/<span class="text-rose-400">audio</span>&gt;</div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo HTML Audio Player</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Podcast EduTech Episode #1</h2>
  
  <audio controls style="width: 350px;">
    <source src="https://www.w3schools.com/html/horse.ogg" type="audio/ogg">
    <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg">
    Browser Anda tidak mendukung elemen audio.
  </audio>
</body>
</html>`,
    codeExplanation: [
      '<audio controls> menghasilkan kontrol pemutar musik yang ringkas.',
      'type="audio/mpeg" mendefinisikan MIME-type untuk file berekstensi MP3.'
    ],
    quiz: {
      question: 'MIME type apakah yang benar untuk file audio berformat MP3 pada tag <source>?',
      options: ['audio/mp3', 'audio/mpeg', 'audio/sound', 'audio/music'],
      answer: 1,
      explanation: 'MIME-type resmi standar IANA untuk format file MP3 adalah audio/mpeg.'
    }
  },

  {
    title: 'HTML Audio - Code Challenge (Membuat Pemutar Audio MP3)',
    chapter: 'HTML Audio',
    type: 'challenge',
    order: 104,
    overview: 'Tantangan membuat pemutar audio interaktif dengan tag audio.',
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🚀 Tantangan: Pemutar Audio</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Buatlah pemutar audio <code>&lt;audio controls&gt;&lt;source src="musik.mp3" type="audio/mpeg"&gt;&lt;/audio&gt;</code>.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Audio</title>
</head>
<body>

</body>
</html>`,
    challenge: {
      instruction: 'Buat tag <audio controls><source src="musik.mp3" type="audio/mpeg"></audio>.',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Audio</title>
</head>
<body>

</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Audio</title>
</head>
<body>
  <audio controls>
    <source src="musik.mp3" type="audio/mpeg">
  </audio>
</body>
</html>`,
      hint: 'Gunakan <audio controls> yang membungkus <source src="musik.mp3" type="audio/mpeg">'
    }
  },

  // ── 4. HTML Plug-ins ──────────────────────────────────────────────────────
  {
    title: 'HTML Plug-ins - Elemen <object> & <embed> untuk Dokumen PDF',
    chapter: 'HTML Plug-ins',
    type: 'code',
    order: 105,
    overview: 'Elemen <object> dan <embed> digunakan untuk menyematkan konten eksternal seperti dokumen berkas PDF, applet Java, atau widget interaktif.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">📄 Elemen &lt;object&gt; & &lt;embed&gt;</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code class="text-orange-500 font-bold block mb-1">&lt;object data="dokumen.pdf"&gt;</code>
            <p class="text-slate-600 dark:text-slate-400">Dirancang untuk menyematkan dokumen eksternal dengan kemampuan menyediakan konten fallback jika file gagal dimuat.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code class="text-emerald-500 font-bold block mb-1">&lt;embed src="dokumen.pdf"&gt;</code>
            <p class="text-slate-600 dark:text-slate-400">Tag mandiri (self-closing) langsung tanpa fallback untuk menyematkan resource eksternal atau plugin media.</p>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo HTML Plugins (PDF Embed)</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Menyematkan Dokumen PDF ke Halaman Web</h2>
  
  <object data="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" type="application/pdf" width="100%" height="300px">
    <p>Browser Anda tidak memiliki PDF viewer terintegrasi. <a href="dummy.pdf">Klik di sini untuk mendownload PDF</a>.</p>
  </object>
</body>
</html>`,
    codeExplanation: [
      'data="file.pdf" mendefinisikan lokasi dokumen yang disematkan.',
      'type="application/pdf" memberitahu browser untuk mengaktifkan PDF viewer bawaan.'
    ],
    quiz: {
      question: 'Tag manakah yang paling ideal untuk menyematkan dokumen PDF ke dalam halaman web sekaligus menyediakan teks cadangan (fallback link)?',
      options: ['<pdf>', '<object>', '<frame>', '<doc>'],
      answer: 1,
      explanation: 'Tag <object> memungkinkan penyematan dokumen PDF dan menampilkan tautan cadangan di dalamnya jika browser tidak mendukung viewer PDF.'
    }
  },

  // ── 5. HTML YouTube ───────────────────────────────────────────────────────
  {
    title: 'HTML YouTube - Menyematkan Video YouTube Responsif (Iframe)',
    chapter: 'HTML YouTube',
    type: 'code',
    order: 106,
    overview: 'Cara paling populer dan efisien untuk menampilkan video di web adalah dengan menyematkan pemutar video YouTube melalui URL embed di tag <iframe>.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🔴 Menyematkan YouTube ke Website</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Format URL yang digunakan <strong>bukan</strong> <code>watch?v=ID</code>, melainkan format embed: <code>https://www.youtube.com/embed/VIDEO_ID</code>.
        </p>

        <div class="space-y-2 text-xs font-mono">
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>?autoplay=1&mute=1</strong>: Memutar video otomatis tanpa suara.
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>?controls=0</strong>: Menyembunyikan bar tombol kontrol YouTube.
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>?loop=1&playlist=VIDEO_ID</strong>: Memutar ulang video terus-menerus tanpa henti.
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo YouTube Embed</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Video Tutorial YouTube</h2>
  
  <iframe 
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/tgbNymZ7vqY" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen 
    style="border-radius: 12px; max-width: 100%;">
  </iframe>
</body>
</html>`,
    codeExplanation: [
      'URL https://www.youtube.com/embed/VIDEO_ID adalah format resmi YouTube Iframe Player.',
      'allowfullscreen memberikan izin tombol layar penuh kepada pengguna.'
    ],
    quiz: {
      question: 'Struktur URL YouTube manakah yang wajib digunakan pada atribut src di dalam tag <iframe> agar video dapat diputar langsung di halaman web?',
      options: ['https://www.youtube.com/watch?v=123', 'https://www.youtube.com/embed/123', 'https://youtu.be/123', 'https://www.youtube.com/video/123'],
      answer: 1,
      explanation: 'Format URL https://www.youtube.com/embed/VIDEO_ID adalah format resmi untuk menyematkan video player YouTube pada tag <iframe>.'
    }
  }
];
