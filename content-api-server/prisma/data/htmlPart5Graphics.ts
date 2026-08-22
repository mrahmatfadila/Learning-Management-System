import { HtmlLessonItem } from './htmlPart2';

export const htmlLessonsPart5Graphics: HtmlLessonItem[] = [
  // ── 1. HTML Canvas ────────────────────────────────────────────────────────
  {
    title: 'HTML Canvas - Grafika 2D Berbasis JavaScript (Pixel Raster)',
    chapter: 'HTML Canvas',
    type: 'code',
    order: 96,
    overview: 'Elemen <canvas> digunakan untuk menggambar grafis 2D, diagram interaktif, efek animasi, dan game web secara dinamis menggunakan JavaScript.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🎨 Apa itu HTML5 Canvas?</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Tag <code>&lt;canvas&gt;</code> hanyalah sebuah kanvas wadah kosong. Seluruh proses pembuatan gambar (garis, lingkaran, teks, gradasi warna, gambar) dilakukan secara terprogram melalui <strong>JavaScript 2D Rendering Context</strong>.
        </p>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto border border-slate-800">
          <div class="text-amber-400 mb-2 font-bold">// 3 Langkah Menggambar di Canvas:</div>
          <div>1. Buat elemen di HTML: &lt;<span class="text-rose-400">canvas</span> <span class="text-sky-400">id</span>="myCanvas" <span class="text-sky-400">width</span>="200" <span class="text-sky-400">height</span>="100"&gt;&lt;/<span class="text-rose-400">canvas</span>&gt;</div>
          <div>2. Ambil konteks di JS: <span class="text-emerald-400">const</span> ctx = canvas.<span class="text-sky-400">getContext</span>(<span class="text-amber-300">"2d"</span>);</div>
          <div>3. Gambar objek: ctx.<span class="text-sky-400">fillStyle</span> = <span class="text-amber-300">"#4f46e5"</span>; ctx.<span class="text-sky-400">fillRect</span>(10, 10, 150, 80);</div>
        </div>

        <div class="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-900/40 text-xs text-indigo-900 dark:text-indigo-300">
          <strong>💡 Karakteristik Canvas:</strong> Berbasis piksel (*raster*). Sangat cepat dan optimal untuk animasi berat, manipulasi foto, dan game 2D/3D (WebGL), namun grafis akan pecah jika diperbesar (zoom-in).
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo HTML Canvas</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Menggambar Bentuk dengan Canvas 2D</h2>
  
  <canvas id="demoCanvas" width="350" height="200" style="border: 2px solid #cbd5e1; border-radius: 8px; background: #f8fafc;"></canvas>

  <script>
    const canvas = document.getElementById('demoCanvas');
    const ctx = canvas.getContext('2d');

    // 1. Gambar Persegi Panjang Biru
    ctx.fillStyle = '#3b82f6';
    ctx.fillRect(20, 20, 120, 70);

    // 2. Gambar Lingkaran Oranye
    ctx.beginPath();
    ctx.arc(240, 55, 35, 0, 2 * Math.PI);
    ctx.fillStyle = '#f97316';
    ctx.fill();

    // 3. Tulis Teks di Canvas
    ctx.font = '16px sans-serif';
    ctx.fillStyle = '#1e293b';
    ctx.fillText('Halo Canvas HTML5!', 20, 150);
  </script>
</body>
</html>`,
    codeExplanation: [
      'Tag <canvas> menentukan area gambar dengan lebar 350px dan tinggi 200px.',
      'canvas.getContext("2d") mengambil objek render 2D bawaan browser.',
      'ctx.fillRect(x, y, width, height) menggambar kotak persegi berwana.',
      'ctx.arc(x, y, radius, startAngle, endAngle) menggambar lingkaran kurva busur.'
    ],
    quiz: {
      question: 'Method JavaScript apakah yang digunakan untuk mendapatkan konteks gambar 2D pada sebuah elemen canvas?',
      options: ['canvas.get2D()', 'canvas.getContext("2d")', 'canvas.renderContext()', 'canvas.create2D()'],
      answer: 1,
      explanation: 'canvas.getContext("2d") adalah method standar API HTML5 Canvas untuk memperoleh konteks rendering dua dimensi.'
    }
  },

  {
    title: 'HTML Canvas - Code Challenge (Membuat Kotak Merah di Canvas)',
    chapter: 'HTML Canvas',
    type: 'challenge',
    order: 97,
    overview: 'Tantangan membuat elemen canvas dan menggambar kotak merah menggunakan JavaScript.',
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🚀 Tantangan: Kotak Merah Canvas</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Buatlah elemen <code>&lt;canvas id="myCanvas" width="200" height="100"&gt;&lt;/canvas&gt;</code> dan isi script untuk menggambar kotak merah dengan <code>ctx.fillStyle = "red"; ctx.fillRect(10, 10, 80, 50);</code>.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Canvas</title>
</head>
<body>
  <canvas id="myCanvas" width="200" height="100"></canvas>
  <script>
    const c = document.getElementById("myCanvas");
    const ctx = c.getContext("2d");
    // Tulis kode gambar di sini
  </script>
</body>
</html>`,
    challenge: {
      instruction: 'Isi bagian script dengan ctx.fillStyle = "red"; ctx.fillRect(10, 10, 80, 50);.',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Canvas</title>
</head>
<body>
  <canvas id="myCanvas" width="200" height="100"></canvas>
  <script>
    const c = document.getElementById("myCanvas");
    const ctx = c.getContext("2d");

  </script>
</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Canvas</title>
</head>
<body>
  <canvas id="myCanvas" width="200" height="100"></canvas>
  <script>
    const c = document.getElementById("myCanvas");
    const ctx = c.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(10, 10, 80, 50);
  </script>
</body>
</html>`,
      hint: 'Gunakan ctx.fillStyle = "red"; ctx.fillRect(10, 10, 80, 50);'
    }
  },

  // ── 2. HTML SVG ───────────────────────────────────────────────────────────
  {
    title: 'HTML SVG - Grafika Vektor Skalabel Berbasis XML (Tanpa Pecah)',
    chapter: 'HTML SVG',
    type: 'code',
    order: 98,
    overview: 'SVG (Scalable Vector Graphics) mendefinisikan gambar grafis berbasis vektor menggunakan sintaks XML. Gambar SVG tidak akan pernah pecah atau buram meski diperbesar hingga tak terhingga.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">📐 Apa itu SVG?</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Berbeda dengan Canvas yang berupa kumpulan piksel, <strong>SVG</strong> adalah kumpulan rumus matematika bentuk geometri (lingkaran, kotak, garis, kurva bezier).
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-orange-500 font-bold block mb-1">Canvas (HTML5)</strong>
            <p class="text-slate-600 dark:text-slate-400">Raster / Piksel. Sangat cepat untuk game & manipulasi frame. Gambar pecah jika di-zoom.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-emerald-500 font-bold block mb-1">SVG (Scalable Vector)</strong>
            <p class="text-slate-600 dark:text-slate-400">Vektor / XML. Selalu tajam di layar Retina 4K/8K. Setiap elemen SVG adalah elemen DOM yang bisa diberi CSS dan event klik.</p>
          </div>
        </div>

        <div class="space-y-2 text-xs">
          <h3 class="font-bold text-slate-800 dark:text-white text-sm">🌟 Elemen-Elemen Bentuk Dasar SVG:</h3>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1 font-mono text-[11px]">
            <div>• <code>&lt;rect x="10" y="10" width="100" height="50"&gt;</code>: Persegi panjang.</div>
            <div>• <code>&lt;circle cx="50" cy="50" r="40"&gt;</code>: Lingkaran.</div>
            <div>• <code>&lt;line x1="0" y1="0" x2="200" y2="200"&gt;</code>: Garis lurus.</div>
            <div>• <code>&lt;polygon points="..."&gt;</code>: Poligon segitiga / bintang.</div>
            <div>• <code>&lt;path d="..."&gt;</code>: Bentuk kurva bebas kompleks (ikon UI modern).</div>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo HTML SVG</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Grafika Vektor SVG (Coba Zoom Halaman Browser Anda!)</h2>
  
  <svg width="350" height="150" style="border: 1px solid #cbd5e1; border-radius: 8px; background: white;">
    <!-- Persegi Sudut Membulat -->
    <rect x="20" y="25" width="100" height="100" rx="15" fill="#4f46e5" />
    
    <!-- Lingkaran -->
    <circle cx="200" cy="75" r="45" fill="#10b981" stroke="#059669" stroke-width="4" />
    
    <!-- Bintang Poligon -->
    <polygon points="300,30 310,65 345,65 315,85 325,120 300,95 275,120 285,85 255,65 290,65" fill="#f59e0b" />
  </svg>
</body>
</html>`,
    codeExplanation: [
      'Tag <svg> mendefinisikan kontainer grafis vektor di dalam HTML.',
      '<rect fill="#4f46e5" rx="15"> membuat kotak persegi dengan sudut melengkung.',
      '<circle cx="200" cy="75" r="45"> membuat lingkaran dengan titik pusat (200, 75) dan jari-jari 45px.',
      'stroke dan stroke-width mengatur warna dan ketebalan garis tepi vektor.'
    ],
    quiz: {
      question: 'Apakah keunggulan utama grafis format SVG dibandingkan dengan gambar raster biasa (PNG/JPEG)?',
      options: ['SVG ukuran filenya selalu lebih dari 100MB', 'SVG tidak pernah pecah atau buram saat diperbesar (skalabel)', 'SVG hanya bisa tampil di peramban Internet Explorer kuno', 'SVG tidak mendukung warna'],
      answer: 1,
      explanation: 'SVG berbasis rumus vektor matematika sehingga ketajaman visualnya tetap sempurna pada resolusi layar apa pun.'
    }
  },

  {
    title: 'HTML SVG - Code Challenge (Membuat Lingkaran Vektor SVG)',
    chapter: 'HTML SVG',
    type: 'challenge',
    order: 99,
    overview: 'Tantangan membuat elemen SVG dengan lingkaran berwarna.',
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🚀 Tantangan: Lingkaran Vektor Hijau</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Buatlah tag <code>&lt;svg width="100" height="100"&gt;&lt;circle cx="50" cy="50" r="40" fill="green" /&gt;&lt;/svg&gt;</code>.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan SVG</title>
</head>
<body>

</body>
</html>`,
    challenge: {
      instruction: 'Buat tag <svg width="100" height="100"><circle cx="50" cy="50" r="40" fill="green" /></svg>.',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan SVG</title>
</head>
<body>

</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan SVG</title>
</head>
<body>
  <svg width="100" height="100">
    <circle cx="50" cy="50" r="40" fill="green" />
  </svg>
</body>
</html>`,
      hint: 'Gunakan <svg width="100" height="100"> yang membungkus <circle cx="50" cy="50" r="40" fill="green" />'
    }
  }
];
