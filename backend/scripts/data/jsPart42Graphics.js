module.exports = [
  // ── 272. JS GRAPHICS ────────────────────────────────────────────────────
  {
    id: 'js-graphics-overview',
    title: 'JS Graphics',
    chapter: 'JS Graphics',
    chapterId: 'js-chap-graphics',
    order: 272,
    overview: 'Ikhtisar Ekosistem Grafika Web di JavaScript: HTML5 Canvas 2D (berbasis piksel bitmap) vs SVG (grafik vektor berbasis XML DOM) vs WebGL (akselerasi grafis 3D GPU) vs Pustaka Charting modern.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS GRAPHICS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 272 / 277</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎨 Ekosistem Visualisasi & Grafika Web Modern</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            JavaScript mampu merender visualisasi data interaktif dan animasi grafis tinggi melalui 3 teknologi inti: <strong>HTML5 Canvas 2D</strong> (cepat untuk ribuan objek), <strong>SVG</strong> (tajam di resolusi retina tanpa pecah), dan <strong>WebGL / WebGPU</strong> (3D akselerasi hardware).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Graphics Overview Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Perbandingan Canvas vs SVG</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    log += '<strong>Spektrum Grafika Web:</strong><br>';
    log += '• <strong>HTML5 Canvas:</strong> Raster Bitmap (Game 2D, Chart.js, Pemrosesan Citra).<br>';
    log += '• <strong>SVG:</strong> Vector Graphics (Ikon, Diagram D3.js, Animasi CSS).<br>';
    log += '• <strong>WebGL / Three.js:</strong> 3D Rendering dengan Shader GPU.<br>';
    log += '• <strong>Libraries:</strong> Chart.js, Plotly.js, Google Charts, D3.js.';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Pilih Canvas untuk visualisasi jutaan data point dinamis; pilih SVG untuk grafik terukur berinteraktivitas event DOM tinggi.'
    ],
    quiz: {
      question: 'Teknologi grafika web manakah yang berbasis vektor matematika XML sehingga tidak akan pernah pecah atau buram saat di-zoom?',
      options: [
        'SVG (Scalable Vector Graphics)',
        'HTML5 Canvas 2D',
        'GIF',
        'JPEG'
      ],
      answer: 0,
      explanation: '`SVG` berbasis vektor matematika sehingga kualitasnya tetap tajam sempurna pada resolusi zoom apa pun.'
    },
    challenge: {
      title: 'Tantangan: Deteksi Dukungan Canvas',
      description: 'Periksa dukungan canvas `const hasCanvas = !!document.createElement("canvas").getContext;`.',
      startingCode: `let hasCanvas = false;`,
      solution: `const hasCanvas = !!document.createElement("canvas").getContext;`
    }
  },

  // ── 273. JS CANVAS ──────────────────────────────────────────────────────
  {
    id: 'js-canvas',
    title: 'JS Canvas',
    chapter: 'JS Graphics',
    chapterId: 'js-chap-graphics',
    order: 273,
    overview: 'HTML5 Canvas 2D API: canvas.getContext("2d"), menggambar garis, persegi (fillRect, strokeRect), lingkaran (arc), gradien warna linier, teks, dan animasi loop requestAnimationFrame().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS GRAPHICS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 273 / 277</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🖌️ Menggambar dengan HTML5 Canvas 2D API</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Elemen <code>&lt;canvas&gt;</code> menyediakan kanvas kosong yang dapat digambar secara terprogram melalui objek konteks <code>ctx = canvas.getContext('2d')</code>.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Canvas Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Kanvas Interaktif 2D</h2>
  <canvas id="myCanvas" width="320" height="160" style="background: #0f172a; border-radius: 10px;"></canvas>

  <script>
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    // 1. Gambar Gradien Persegi
    const gradien = ctx.createLinearGradient(0, 0, 320, 0);
    gradien.addColorStop(0, '#0284c7');
    gradien.addColorStop(1, '#ec4899');
    ctx.fillStyle = gradien;
    ctx.fillRect(20, 20, 280, 50);

    // 2. Gambar Teks di atas Kanvas
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 16px sans-serif';
    ctx.fillText('HTML5 Canvas 2D Mastery', 45, 52);

    // 3. Gambar Lingkaran Busur (arc)
    ctx.beginPath();
    ctx.arc(160, 115, 25, 0, Math.PI * 2);
    ctx.fillStyle = '#4ade80';
    ctx.fill();
    ctx.closePath();
  </script>

</body>
</html>`,
    codeExplanation: [
      'ctx.beginPath() dan ctx.arc(x, y, radius, startAngle, endAngle) digunakan untuk membentuk kurva lingkaran.',
      'ctx.fillStyle dan ctx.fill() mengisi warna di dalam bentuk yang digambar.'
    ],
    quiz: {
      question: 'Method apakah yang dipanggil pada elemen <canvas> untuk mendapatkan antarmuka konteks penggambaran 2D?',
      options: [
        'canvas.get2D()',
        'canvas.getContext("2d")',
        'canvas.createContext()',
        'canvas.init()'
      ],
      answer: 1,
      explanation: '`canvas.getContext("2d")` mengembalikan objek rendering context 2D untuk menggambar di kanvas.'
    },
    challenge: {
      title: 'Tantangan: Gambar Persegi Canvas',
      description: 'Lakukan `ctx.fillRect(0, 0, 100, 100);`.',
      startingCode: `function drawRect(ctx) {\n  ctx.fillRect(0, 0, 100, 100);\n}`,
      solution: `function drawRect(ctx) {\n  ctx.fillRect(0, 0, 100, 100);\n}`
    }
  },

  // ── 274. JS PLOTLY ──────────────────────────────────────────────────────
  {
    id: 'js-plotly',
    title: 'JS Plotly',
    chapter: 'JS Graphics',
    chapterId: 'js-chap-graphics',
    order: 274,
    overview: 'Plotly.js di JavaScript: visualisasi data ilmiah interaktif, konfigurasi trace data & layout, zoom/pan interaktif, dan rendering diagram garis serta 3D scatter plots.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS GRAPHICS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 274 / 277</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📈 Visualisasi Ilmiah & Statistik dengan Plotly.js</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <strong>Plotly.js</strong> adalah pustaka visualisasi grafik deklaratif tingkat tinggi yang dibangun di atas D3.js dan WebGL, sangat populer untuk visualisasi data sains, machine learning, dan statistik finansial.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Plotly Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Struktur Plotly.newPlot(container, data, layout)</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // Konfigurasi Trace Data Plotly
    const dataPlot = [{
      x: ['Modul 1', 'Modul 2', 'Modul 3', 'Modul 4'],
      y: [85, 92, 98, 100],
      type: 'bar',
      marker: { color: '#0284c7' }
    }];

    const layout = { title: 'Tingkat Kelulusan Siswa LMS' };

    log += '<strong>Pola Deklaratif Plotly:</strong><br>';
    log += '<code>Plotly.newPlot("chartDiv", dataPlot, layout);</code><br><br>';
    log += '• Otomatis dilengkapi fitur Hover tooltip, Export PNG, dan Zoom interaktif bawaan!';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Plotly.newPlot(elementId, dataArray, layoutObject) menyatukan data dan konfigurasi styling secara deklaratif.'
    ],
    quiz: {
      question: 'Method utama apakah yang dipanggil pada Plotly untuk merender grafik ke dalam elemen kontainer HTML?',
      options: [
        'Plotly.render()',
        'Plotly.newPlot()',
        'Plotly.draw()',
        'Plotly.init()'
      ],
      answer: 1,
      explanation: '`Plotly.newPlot(container, data, layout)` adalah method utama untuk menginisialisasi dan merender grafik Plotly.'
    },
    challenge: {
      title: 'Tantangan: Inisialisasi Plotly.newPlot',
      description: 'Lakukan `Plotly.newPlot("div", data, layout);`.',
      startingCode: `function renderPlot(data, layout) {\n  Plotly.newPlot("div", data, layout);\n}`,
      solution: `function renderPlot(data, layout) {\n  Plotly.newPlot("div", data, layout);\n}`
    }
  },

  // ── 275. JS CHART.JS ────────────────────────────────────────────────────
  {
    id: 'js-chart-js',
    title: 'JS Chart.js',
    chapter: 'JS Graphics',
    chapterId: 'js-chap-graphics',
    order: 275,
    overview: 'Chart.js di JavaScript: membuat grafik dashboard responsif (Bar Chart, Line Chart, Pie & Doughnut Chart) berbasis HTML5 Canvas dengan animasi transisi yang mulus.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS GRAPHICS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 275 / 277</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📊 Dashboard Visualisasi Responsif dengan Chart.js</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <strong>Chart.js</strong> adalah pustaka grafik open-source terpopuler di dunia berkat kemudahan penggunaannya, desain modern yang elegan, performa cepat berbasis Canvas, dan dukungan responsif otomatis untuk layar smartphone.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Chart.js Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Anatomi Konfigurasi new Chart()</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    log += '<strong>Struktur Inisialisasi Chart.js:</strong><br><br>';
    log += '<code>const myChart = new Chart(ctx, {</code><br>';
    log += '&nbsp;&nbsp;<code>type: "line", // bar, pie, doughnut, radar</code><br>';
    log += '&nbsp;&nbsp;<code>data: { labels: ["Jan", "Feb", "Mar"], datasets: [{ label: "Pengunjung", data: [120, 190, 300] }] },</code><br>';
    log += '&nbsp;&nbsp;<code>options: { responsive: true }</code><br>';
    log += '<code>});</code>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'new Chart(canvasContext, config) mengikat dataset ke elemen Canvas dan otomatis menganimasikan saat pertama kali muncul.'
    ],
    quiz: {
      question: 'Elemen HTML apakah yang digunakan oleh Chart.js sebagai tempat merender grafiknya?',
      options: [
        '<canvas>',
        '<svg>',
        '<div>',
        '<table>'
      ],
      answer: 0,
      explanation: 'Chart.js secara default merender visualisasi grafiknya ke dalam elemen `<canvas>` HTML5.'
    },
    challenge: {
      title: 'Tantangan: Buat Instansi Chart',
      description: 'Lakukan `return new Chart(ctx, config);`.',
      startingCode: `function initChart(ctx, config) {\n  return new Chart(ctx, config);\n}`,
      solution: `function initChart(ctx, config) {\n  return new Chart(ctx, config);\n}`
    }
  },

  // ── 276. JS GOOGLE CHART ────────────────────────────────────────────────
  {
    id: 'js-google-chart',
    title: 'JS Google Chart',
    chapter: 'JS Graphics',
    chapterId: 'js-chap-graphics',
    order: 276,
    overview: 'Google Charts API: memuat library loader (google.charts.load), DataTable API, Geo Charts (peta dunia), Org Charts, dan integrasi Google Sheets langsung.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS GRAPHICS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 276 / 277</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌍 Google Charts API & Visualisasi Geografis</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <strong>Google Charts</strong> menyediakan koleksi tipe diagram yang sangat luas (termasuk diagram peta geografis GeoChart, Gantt Chart, dan Timeline) dengan integrasi sumber data tabel <code>google.visualization.DataTable</code>.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Google Chart Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Pola Loader Google Charts</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    log += '<strong>Alur Penggunaan Google Charts:</strong><br>';
    log += '1. <code>google.charts.load("current", { packages: ["corechart"] });</code><br>';
    log += '2. <code>google.charts.setOnLoadCallback(gambarGrafik);</code><br>';
    log += '3. Susun data: <code>google.visualization.arrayToDataTable([...])</code><br>';
    log += '4. Render: <code>chart.draw(data, options);</code>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'google.charts.setOnLoadCallback(callback) memastikan library loader Google Charts telah siap sebelum fungsi render dijalankan.'
    ],
    quiz: {
      question: 'Method apakah yang dipanggil untuk mendaftarkan fungsi render agar dieksekusi setelah library Google Charts selesai diunduh?',
      options: [
        'google.charts.setOnLoadCallback(fn)',
        'google.charts.ready(fn)',
        'google.charts.init(fn)',
        'window.onload'
      ],
      answer: 0,
      explanation: '`google.charts.setOnLoadCallback(callback)` adalah fungsi pendaftaran handler resmi Google Charts.'
    },
    challenge: {
      title: 'Tantangan: Panggil setOnLoadCallback',
      description: 'Lakukan `google.charts.setOnLoadCallback(drawFn);`.',
      startingCode: `function registerChart(drawFn) {\n  google.charts.setOnLoadCallback(drawFn);\n}`,
      solution: `function registerChart(drawFn) {\n  google.charts.setOnLoadCallback(drawFn);\n}`
    }
  },

  // ── 277. JS D3.JS ───────────────────────────────────────────────────────
  {
    id: 'js-d3-js',
    title: 'JS D3.js',
    chapter: 'JS Graphics',
    chapterId: 'js-chap-graphics',
    order: 277,
    overview: 'D3.js (Data-Driven Documents): manipulasi DOM berbasis data, Skala (Linear & Ordinal Scales), seleksi siklus hidup data (Enter, Update, Exit), dan pembuatan visualisasi grafis SVG tingkat tinggi tanpa batas.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS GRAPHICS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 277 / 277 (FINAL MATERI JS LENGKAP)</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">👑 Mahkota Visualisasi Data: D3.js (Data-Driven Documents)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <strong>D3.js</strong> adalah standar emas industri visualisasi data kustom di web. D3 mengikat data mentah secara langsung ke elemen SVG DOM menggunakan pola siklus hidup <strong>Data Join (Enter, Update, Exit)</strong> dan menyediakan sistem kalkulasi matematika skala (*Scales*) yang sangat presisi.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS D3.js Landmark Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Selamat! Anda Telah Menyelesaikan Seluruh 277 Materi JavaScript 🎓</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 20px; border-radius: 12px; font-family: monospace;">
    🎉 <strong>PRESTASI LUAR BIASA TERCAPAI: 277 MATERI JAVASCRIPT LENGKAP!</strong><br><br>
    Dari Bab 1 (JS Home) hingga Bab 42 (JS D3.js Graphics), Anda telah menyelesaikan seluruh kurikulum resmi JavaScript modern mencakup Dasar, DOM, Events, Web API, Temporal API, Advanced Functions, Objects, Classes, Asynchronous, Modules, Metaprogramming, Typed Arrays, DOM Navigation, dan Web Graphics!
  </div>

</body>
</html>`,
    codeExplanation: [
      'D3.js adalah fondasi grafis interaktif paling berdaya guna tinggi di dunia teknologi visualisasi web.'
    ],
    quiz: {
      question: 'Pola siklus hidup apakah di D3.js yang digunakan untuk mengikat data ke elemen DOM dan menangani elemen baru yang masuk?',
      options: [
        'Enter, Update, Exit (Data Join Pattern)',
        'Create, Read, Delete',
        'Mount, Unmount, Render',
        'Push, Pop, Shift'
      ],
      answer: 0,
      explanation: 'Pola `Data Join (Enter, Update, Exit)` adalah pola fundamental D3.js dalam menyinkronkan data array ke elemen visual DOM.'
    },
    challenge: {
      title: 'Tantangan Puncak Kurikulum: Seleksi D3',
      description: 'Lakukan `d3.select("body");`.',
      startingCode: `function selectBody() {\n  return d3.select("body");\n}`,
      solution: `function selectBody() {\n  return d3.select("body");\n}`
    }
  }
];
