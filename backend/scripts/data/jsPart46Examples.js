module.exports = [
  // ── 293. JS EXAMPLES ────────────────────────────────────────────────────
  {
    id: 'js-examples-overview',
    title: 'JS Examples',
    chapter: 'JS Examples',
    chapterId: 'js-chap-examples',
    order: 293,
    overview: 'Koleksi Contoh Kode Esensial JavaScript: rangkuman pola kode praktis dari tingkat dasar, manipulasi string & array, fungsi, hingga asynchronous programming.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS EXAMPLES</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 293 / 306</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">💡 Galeri Contoh Kode Esensial JavaScript</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Bab ini berisi rangkuman studi kasus nyata, contoh interaksi DOM, form input, event handling, latihan terpadu, hingga persiapan wawancara kerja teknis dan sertifikasi kelulusan JavaScript.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Examples Overview Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Katalog Contoh Praktis JavaScript</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    log += '<strong>Contoh Operasi Cepat:</strong><br>';
    log += '• Membalik String: <code>"halo".split("").reverse().join("")</code> ➔ "olah"<br>';
    log += '• Nilai Maksimal Array: <code>Math.max(...[10, 50, 20])</code> ➔ 50<br>';
    log += '• Format Mata Uang: <code>(150000).toLocaleString("id-ID")</code> ➔ "150.000" ✅';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Gunakan spread operator (...) bersama Math.max untuk mencari nilai tertinggi dalam array.'
    ],
    quiz: {
      question: 'Sintaks manakah yang paling ringkas dan modern untuk mencari nilai tertinggi di dalam sebuah array numerik const arr = [5, 12, 8]?',
      options: [
        'Math.max(...arr)',
        'arr.getMax()',
        'Math.highest(arr)',
        'arr.sort().first()'
      ],
      answer: 0,
      explanation: '`Math.max(...arr)` mengekspansi elemen array menjadi argumen individual ke dalam `Math.max()`.'
    },
    challenge: {
      title: 'Tantangan: Cari Nilai Maksimal',
      description: 'Lakukan `Math.max(...arr);`.',
      startingCode: `function cariMaks(arr) {\n  return Math.max(...arr);\n}`,
      solution: `function cariMaks(arr) {\n  return Math.max(...arr);\n}`
    }
  },

  // ── 294. JS HTML DOM ────────────────────────────────────────────────────
  {
    id: 'js-html-dom-examples',
    title: 'JS HTML DOM',
    chapter: 'JS Examples',
    chapterId: 'js-chap-examples',
    order: 294,
    overview: 'Koleksi Contoh Manipulasi Elemen DOM Praktis: mengubah teks, atribut src gambar, styling kelas CSS dinamis, serta membuat dan menghapus elemen secara interaktif.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS EXAMPLES</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 294 / 306</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏗️ Contoh Manipulasi Dinamis Pohon DOM</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Manipulasi DOM adalah inti interaktivitas web. Mulai dari mengubah teks tombol saat diklik, memanipulasi class <code>classList.toggle()</code> untuk mode gelap, hingga menyisipkan kartu konten baru secara dinamis.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS HTML DOM Examples Demo</title>
  <style>
    .dark-mode { background: #0f172a; color: #38bdf8; }
  </style>
</head>
<body id="halamanBody" style="font-family: sans-serif; padding: 24px; transition: 0.3s;">

  <h2>Toggle Mode Gelap & Manipulasi DOM</h2>
  <p id="teksInfo">Mode Terang Aktif</p>
  <button onclick="ubahMode()" style="padding: 8px 16px; background: #0284c7; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">
    Ganti Tema Halaman
  </button>

  <script>
    function ubahMode() {
      const body = document.getElementById('halamanBody');
      const info = document.getElementById('teksInfo');

      body.classList.toggle('dark-mode');
      const isDark = body.classList.contains('dark-mode');
      info.textContent = isDark ? '🌙 Mode Gelap Aktif!' : '☀️ Mode Terang Aktif!';
    }
  </script>

</body>
</html>`,
    codeExplanation: [
      'classList.toggle() menambahkan class jika belum ada dan menghapusnya jika sudah ada.',
      'classList.contains() mengembalikan nilai boolean status keberadaan class.'
    ],
    quiz: {
      question: 'Method classList manakah yang digunakan untuk memeriksa apakah sebuah elemen memiliki nama class CSS tertentu?',
      options: [
        'classList.contains()',
        'classList.has()',
        'classList.exists()',
        'classList.check()'
      ],
      answer: 0,
      explanation: '`classList.contains("nama-class")` mengembalikan `true` jika class tersebut terpasang pada elemen.'
    },
    challenge: {
      title: 'Tantangan: Periksa Class',
      description: 'Lakukan `el.classList.contains(cls);`.',
      startingCode: `function hasClass(el, cls) {\n  return el.classList.contains(cls);\n}`,
      solution: `function hasClass(el, cls) {\n  return el.classList.contains(cls);\n}`
    }
  },

  // ── 295. JS HTML INPUT ──────────────────────────────────────────────────
  {
    id: 'js-html-input-examples',
    title: 'JS HTML Input',
    chapter: 'JS Examples',
    chapterId: 'js-chap-examples',
    order: 295,
    overview: 'Contoh Interaksi Form Input: membaca nilai text input, checkbox checked status, radio button group, select option, range slider live update, dan validasi form interaktif.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS EXAMPLES</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 295 / 306</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📋 Kontrol & Pembacaan Nilai Form Input</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            JavaScript menangkap input pengguna melalui properti <code>input.value</code> untuk teks/angka dan <code>input.checked</code> untuk checkbox dan radio button. Event <code>input</code> memberikan respons seketika saat slider digeser.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS HTML Input Examples Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Range Slider & Checkbox Live Binding</h2>
  <label>Tingkat Volume: <span id="labelVolume" style="font-weight: bold; color: #0284c7;">50</span>%</label><br>
  <input type="range" id="sliderVolume" min="0" max="100" value="50" oninput="updateVolume(this.value)" style="margin: 10px 0;"><br>

  <label>
    <input type="checkbox" id="muteCheck" onchange="toggleMute(this.checked)"> Mute Audio
  </label>

  <script>
    function updateVolume(val) {
      document.getElementById('labelVolume').textContent = val;
    }

    function toggleMute(isMuted) {
      const slider = document.getElementById('sliderVolume');
      slider.disabled = isMuted;
      document.getElementById('labelVolume').textContent = isMuted ? 'Muted (0)' : slider.value;
    }
  </script>

</body>
</html>`,
    codeExplanation: [
      'Event oninput memicu update secara instan setiap milimeter pergeseran range slider.',
      'Properti .checked bernilai boolean true jika checkbox dicentang.'
    ],
    quiz: {
      question: 'Properti DOM apakah yang digunakan untuk memeriksa apakah sebuah elemen input type="checkbox" sedang dicentang oleh pengguna?',
      options: [
        'input.checked',
        'input.selected',
        'input.value',
        'input.active'
      ],
      answer: 0,
      explanation: '`input.checked` mengembalikan nilai boolean `true` jika checkbox sedang dicentang.'
    },
    challenge: {
      title: 'Tantangan: Periksa Status Checked',
      description: 'Kembalikan `checkbox.checked;`.',
      startingCode: `function isChecked(cb) {\n  return cb.checked;\n}`,
      solution: `function isChecked(cb) {\n  return cb.checked;\n}`
    }
  },

  // ── 296. JS HTML OBJECTS ────────────────────────────────────────────────
  {
    id: 'js-html-objects-examples',
    title: 'JS HTML Objects',
    chapter: 'JS Examples',
    chapterId: 'js-chap-examples',
    order: 296,
    overview: 'Contoh Manipulasi Objek HTML Khusus: mengontrol elemen media audio/video (.play(), .pause(), .currentTime), manipulasi gambar (img.src, onload), dan link navigasi.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS EXAMPLES</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 296 / 306</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎬 Mengontrol Media HTML5 (Audio & Video)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            HTML5 Media Elements (<code>&lt;audio&gt;</code> dan <code>&lt;video&gt;</code>) menyediakan API JavaScript lengkap seperti <code>.play()</code>, <code>.pause()</code>, <code>.currentTime</code>, dan event <code>timeupdate</code> untuk membangun custom video player interaktif.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS HTML Objects Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Katalog Method Objek Media HTML5</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    log += '<strong>API Pemutar Media JavaScript:</strong><br>';
    log += '• <code>video.play()</code>: Memulai pemutaran video.<br>';
    log += '• <code>video.pause()</code>: Menghentikan sementara pemutaran.<br>';
    log += '• <code>video.currentTime = 0</code>: Mengulang ke detik awal.<br>';
    log += '• <code>video.volume = 0.8</code>: Mengatur volume (0.0 s/d 1.0) ✅';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'video.play() mengembalikan Promise yang me-resolve jika media diizinkan diputar oleh browser (kebijakan Autoplay).'
    ],
    quiz: {
      question: 'Method DOM apakah yang dipanggil pada elemen <video> untuk menghentikan pemutaran video sementara?',
      options: [
        'video.stop()',
        'video.pause()',
        'video.halt()',
        'video.freeze()'
      ],
      answer: 1,
      explanation: 'Elemen HTML5 `<video>` menggunakan method `.pause()` untuk menjeda pemutaran.'
    },
    challenge: {
      title: 'Tantangan: Panggil Pause Video',
      description: 'Lakukan `video.pause();`.',
      startingCode: `function pauseVideo(video) {\n  video.pause();\n}`,
      solution: `function pauseVideo(video) {\n  video.pause();\n}`
    }
  },

  // ── 297. JS HTML EVENTS ─────────────────────────────────────────────────
  {
    id: 'js-html-events-examples',
    title: 'JS HTML Events',
    chapter: 'JS Examples',
    chapterId: 'js-chap-examples',
    order: 297,
    overview: 'Koleksi Contoh Penanganan Event Terpadu: click, dblclick, mousemove, keydown, scroll, submit form dengan e.preventDefault(), dan event delegation.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS EXAMPLES</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 297 / 306</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎯 Event Listeners & Delegasi Event</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Dengan <code>addEventListener()</code>, kita dapat memisahkan logika JavaScript dari file markup HTML. Teknik <strong>Event Delegation</strong> memanfaatkan fase <em>Event Bubbling</em> untuk menangani ratusan elemen dinamis hanya dengan 1 listener pada elemen induk.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS HTML Events Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Pencegahan Reload Form & Event Delegation</h2>
  <form id="formDemo" style="margin-bottom: 15px;">
    <input type="text" id="namaPeserta" placeholder="Nama Peserta..." required style="padding: 8px; border-radius: 6px; border: 1px solid #cbd5e1;">
    <button type="submit" style="padding: 8px 16px; background: #0284c7; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">
      Kirim Form
    </button>
  </form>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    document.getElementById('formDemo').addEventListener('submit', function(event) {
      // Mencegah halaman me-reload ke server!
      event.preventDefault();

      const nama = document.getElementById('namaPeserta').value;
      document.getElementById('output').innerHTML = 
        '🎉 Form Berhasil Dikirim via JS: <strong>' + nama + '</strong> (Halaman Tidak Reload) ✅';
    });
  </script>

</body>
</html>`,
    codeExplanation: [
      'event.preventDefault() membatalkan perilaku default browser (seperti form submission reload halaman atau membuka tautan link).'
    ],
    quiz: {
      question: 'Method event object apakah yang wajib dipanggil pada handler onsubmit agar form tidak menyebabkan reload seluruh halaman?',
      options: [
        'event.preventDefault()',
        'event.stopPropagation()',
        'event.cancel()',
        'event.halt()'
      ],
      answer: 0,
      explanation: '`event.preventDefault()` membatalkan aksi bawaan browser (seperti reload saat submit form).'
    },
    challenge: {
      title: 'Tantangan: Cegah Default Event',
      description: 'Lakukan `event.preventDefault();`.',
      startingCode: `function handleForm(e) {\n  e.preventDefault();\n}`,
      solution: `function handleForm(e) {\n  e.preventDefault();\n}`
    }
  },

  // ── 298. JS BROWSER ─────────────────────────────────────────────────────
  {
    id: 'js-browser-examples',
    title: 'JS Browser',
    chapter: 'JS Examples',
    chapterId: 'js-chap-examples',
    order: 298,
    overview: 'Contoh Interaksi Browser Object Model (BOM): membaca dimensi jendela (window.innerWidth/innerHeight), navigator.onLine, riwayat navigasi (history.back), dan local storage persistent state.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS EXAMPLES</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 298 / 306</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌐 Berinteraksi dengan Objek Browser (BOM)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Objek <code>window</code> menyediakan informasi lingkungan eksekusi seperti status koneksi internet pengguna (<code>navigator.onLine</code>) dan penyimpanan lokal persisten (<code>localStorage</code>) yang tidak hilang saat browser ditutup.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Browser Examples Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Informasi Lingkungan Browser (BOM)</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    log += '• Lebar Jendela Viewport: <strong>' + window.innerWidth + 'px</strong><br>';
    log += '• Tinggi Jendela Viewport: <strong>' + window.innerHeight + 'px</strong><br>';
    log += '• Status Koneksi Internet: <strong>' + (navigator.onLine ? '🟢 Online' : '🔴 Offline') + '</strong><br>';
    log += '• URL Halaman Saat Ini: ' + window.location.href + ' ✅';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'navigator.onLine mengembalikan boolean true jika browser memiliki koneksi internet aktif.'
    ],
    quiz: {
      question: 'Properti BOM manakah yang mengembalikan status apakah perangkat pengguna sedang terhubung ke internet?',
      options: [
        'navigator.onLine',
        'window.hasInternet',
        'document.networkStatus',
        'location.connected'
      ],
      answer: 0,
      explanation: '`navigator.onLine` mengembalikan boolean `true` jika terhubung ke internet dan `false` jika offline.'
    },
    challenge: {
      title: 'Tantangan: Periksa Status Online',
      description: 'Kembalikan `navigator.onLine;`.',
      startingCode: `function checkOnline() {\n  return navigator.onLine;\n}`,
      solution: `function checkOnline() {\n  return navigator.onLine;\n}`
    }
  },

  // ── 299. JS EDITOR ──────────────────────────────────────────────────────
  {
    id: 'js-editor-tool',
    title: 'JS Editor',
    chapter: 'JS Examples',
    chapterId: 'js-chap-examples',
    order: 299,
    overview: 'Code Editor Interaktif di Web: panduan menjalankan kode JavaScript langsung di platform LMS, mengevaluasi output konsol, dan fitur live playground sandbox.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS EXAMPLES</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 299 / 306</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">💻 Menjalankan Kode Interaktif (Live Code Sandbox)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Platform LMS ini dilengkapi dengan <strong>Interactive Code Runner</strong> yang mengeksekusi kode JavaScript Anda di lingkungan terisolasi (sandbox), menampilkan output DOM secara real-time dan memverifikasi solusi tantangan coding otomatis.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Editor Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Simulasi Runner Editor</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;">
    ⚡ Menjalankan skrip editor JavaScript secara instan...
  </div>

  <script>
    setTimeout(() => {
      document.getElementById('output').innerHTML = 
        '🎉 <strong>Kode Berhasil Dieksekusi 100%!</strong><br>' +
        'Waktu Eksekusi: <strong>2.4 ms</strong> | Status: Zero Error ✅';
    }, 200);
  </script>

</body>
</html>`,
    codeExplanation: [
      'Editor interaktif memungkinkan siswa mencoba dan memodifikasi setiap contoh kode langsung di browser tanpa instalasi software tambahan.'
    ],
    quiz: {
      question: 'Apa manfaat utama dari fitur Interactive Code Runner bawaan pada platform LMS?',
      options: [
        'Memungkinkan siswa menulis, menguji, dan melihat hasil eksekusi kode JavaScript secara instan langsung di browser',
        'Menghapus file komputer siswa',
        'Mematikan koneksi internet',
        'Mengubah format teks menjadi PDF'
      ],
      answer: 0,
      explanation: 'Interactive Code Runner memungkinkan latihan coding instan langsung di browser tanpa instalasi tools tambahan.'
    },
    challenge: {
      title: 'Tantangan: Log Pesan Konsol',
      description: 'Lakukan `console.log("Ready!");`.',
      startingCode: `function runReady() {\n  console.log("Ready!");\n}`,
      solution: `function runReady() {\n  console.log("Ready!");\n}`
    }
  },

  // ── 300. JS EXERCISES ───────────────────────────────────────────────────
  {
    id: 'js-exercises-suite',
    title: 'JS Exercises',
    chapter: 'JS Examples',
    chapterId: 'js-chap-examples',
    order: 300,
    overview: 'Bank Latihan Coding Komprehensif: 30+ soal tantangan coding terstruktur mencakup manipulasi Array, perulangan, percabangan, fungsi rekursif, dan Object data modeling.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS EXAMPLES</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 300 / 306</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏋️ Bank Soal Latihan Coding JavaScript (Milestone 300)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Selamat! Anda telah mencapai <strong>Materi ke-300</strong>. Latihan intensif adalah kunci menguasai logika algoritma pemrograman: mulai dari filtering array data, deduplikasi set, hingga transformasi data JSON bertingkat.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Exercises Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Latihan: Filter Nilai Lulus & Rata-rata</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    const nilaiSiswa = [65, 80, 92, 55, 78, 95];

    // 1. Filter nilai >= 75
    const lulus = nilaiSiswa.filter(n => n >= 75);
    // 2. Hitung rata-rata nilai lulus
    const rataRata = lulus.reduce((acc, curr) => acc + curr, 0) / lulus.length;

    let log = '';
    log += '• Daftar Nilai: [' + nilaiSiswa.join(', ') + ']<br>';
    log += '• Siswa yang Lulus: <strong>[' + lulus.join(', ') + ']</strong> (' + lulus.length + ' orang)<br>';
    log += '• Rata-rata Nilai Lulus: <strong>' + rataRata.toFixed(1) + '</strong> ✅';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Kombinasi method chaining .filter() dan .reduce() adalah standar industri dalam pengolahan data array fungsional.'
    ],
    quiz: {
      question: 'Method Array manakah yang digunakan untuk mengagregasi seluruh nilai di dalam array menjadi satu nilai tunggal (seperti menghitung total penjumlahan)?',
      options: [
        'array.reduce()',
        'array.map()',
        'array.filter()',
        'array.forEach()'
      ],
      answer: 0,
      explanation: '`array.reduce(callback, initialValue)` mengakumulasi seluruh elemen array menjadi satu nilai tunggal.'
    },
    challenge: {
      title: 'Tantangan: Hitung Total Penjumlahan Array',
      description: 'Lakukan `arr.reduce((a, b) => a + b, 0);`.',
      startingCode: `function hitungTotal(arr) {\n  return arr.reduce((a, b) => a + b, 0);\n}`,
      solution: `function hitungTotal(arr) {\n  return arr.reduce((a, b) => a + b, 0);\n}`
    }
  },

  // ── 301. JS QUIZ ────────────────────────────────────────────────────────
  {
    id: 'js-quiz-exam',
    title: 'JS Quiz',
    chapter: 'JS Examples',
    chapterId: 'js-chap-examples',
    order: 301,
    overview: 'Ujian Kuis Komprehensif JavaScript: evaluasi penguasaan konsep tipe data, scope hoisting, closure, asynchronous promise, dan DOM events.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS EXAMPLES</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 301 / 306</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎯 Evaluasi Kuis Pengetahuan JavaScript</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Ujian kuis ini menguji pemahaman konsep fundamental dan advanced: perbedaan <code>==</code> vs <code>===</code>, perilaku <code>this</code> pada arrow functions, serta pemahaman siklus hidup Microtask Queue pada Event Loop.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Quiz Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Kuis Kilat: Strict Equality vs Loose Equality</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    log += '• ("5" == 5): <strong>' + ("5" == 5) + '</strong> (Type Coercion terjadi)<br>';
    log += '• ("5" === 5): <strong>' + ("5" === 5) + '</strong> (Tipe String vs Number berbeda!)<br>';
    log += '• (null === undefined): <strong>' + (null === undefined) + '</strong> ✅';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Operator === (Strict Equality) membandingkan nilai dan tipe data tanpa melakukan konversi tipe otomatis.'
    ],
    quiz: {
      question: 'Apakah hasil evaluasi dari ekspresi JavaScript: typeof NaN?',
      options: [
        '"number"',
        '"NaN"',
        '"undefined"',
        '"object"'
      ],
      answer: 0,
      explanation: 'Di JavaScript, `typeof NaN` secara resmi mengembalikan tipe string `"number"` (Not-a-Number adalah nilai numerik khusus IEEE-754).'
    },
    challenge: {
      title: 'Tantangan: Periksa Strict Equality',
      description: 'Lakukan `a === b;`.',
      startingCode: `function isStrictEqual(a, b) {\n  return a === b;\n}`,
      solution: `function isStrictEqual(a, b) {\n  return a === b;\n}`
    }
  },

  // ── 302. JS WEBSITE ─────────────────────────────────────────────────────
  {
    id: 'js-website-project',
    title: 'JS Website',
    chapter: 'JS Examples',
    chapterId: 'js-chap-examples',
    order: 302,
    overview: 'Proyek Membangun Website Portofolio Interaktif: struktur HTML5 semantik, CSS Modern Tailwind/Flexbox, dan JavaScript murni untuk navbar sticky, smooth scrolling, modal popup, dan contact form validation.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS EXAMPLES</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 302 / 306</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🚀 Proyek Praktis: Website Portofolio Interaktif</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Saatnya menggabungkan seluruh pengetahuan: membangun website responsif dengan interaksi JavaScript seperti <strong>Sticky Navbar saat scroll</strong>, <strong>Dark/Light mode switcher</strong>, <strong>Filter galeri proyek</strong>, dan <strong>Modal formulir kontak</strong>.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Website Capstone Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Komponen Website: Sticky Navbar Handler</h2>
  <nav id="myNavbar" style="background: #0284c7; color: white; padding: 12px 20px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
    <strong>MyPortfolio.dev</strong>
    <div>
      <span style="margin-right: 15px; cursor: pointer;">Tentang</span>
      <span style="margin-right: 15px; cursor: pointer;">Proyek</span>
      <span style="cursor: pointer;">Kontak</span>
    </div>
  </nav>
  <div id="output" style="margin-top: 15px; background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;">
    ✅ Komponen Navbar Interaktif Siap Ditempelkan ke Website Portofolio!
  </div>

</body>
</html>`,
    codeExplanation: [
      'Proyek website mandiri adalah portofolio terbaik untuk melamar pekerjaan sebagai Frontend Developer.'
    ],
    quiz: {
      question: 'Event window browser apakah yang dipantau untuk membuat efek navbar transparan menjadi solid saat pengguna menggulir halaman?',
      options: [
        'window.onscroll / window.addEventListener("scroll", ...)',
        'window.onmove',
        'window.onwheel',
        'document.onhover'
      ],
      answer: 0,
      explanation: 'Event `scroll` pada `window` memantau posisi pengguliran vertikal halaman (`window.scrollY`).'
    },
    challenge: {
      title: 'Tantangan: Pantau Posisi Scroll',
      description: 'Kembalikan `window.scrollY;`.',
      startingCode: `function getScrollPos() {\n  return window.scrollY;\n}`,
      solution: `function getScrollPos() {\n  return window.scrollY;\n}`
    }
  },

  // ── 303. JS SYLLABUS ────────────────────────────────────────────────────
  {
    id: 'js-syllabus-curriculum',
    title: 'JS Syllabus',
    chapter: 'JS Examples',
    chapterId: 'js-chap-examples',
    order: 303,
    overview: 'Silabus Resmi Kurikulum JavaScript Lengkap: tinjauan struktur 46 Bab dan 306 Materi terpadu berstandar industri mulai dari Basic Syntax hingga Web Graphics & Capstone.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS EXAMPLES</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 303 / 306</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📜 Silabus Lengkap 46 Bab Kurikulum JavaScript</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Kurikulum ini dirancang komprehensif mengikuti standar internasional:
            1. <strong>Fondasi Dasar:</strong> Sintaks, Variabel, Tipe Data, Operator, Kondisi, Perulangan, Strings, Numbers, Arrays, Dates.
            2. <strong>Struktur Data & Lanjut:</strong> Sets, Maps, RegExp, Debugging, Versi ES2015-ES2027.
            3. <strong>DOM & Web API:</strong> DOM Manipulation, Event Listeners, Window API, Fetch API, JSON, Storage.
            4. <strong>Modern JS Suite:</strong> Temporal API (21 materi), Advanced Functions, Advanced Objects, Classes, Asynchronous Programming (13 materi), ES Modules, Metaprogramming (Proxy & Reflect), Typed Arrays & Atomics, Graphics (Canvas, Chart.js, D3.js), dan Capstone Projects.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Syllabus Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Statistik Silabus Kurikulum LMS</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    log += '<strong>Ringkasan Kurikulum:</strong><br>';
    log += '• Total Bab (Chapters): <strong>46 Bab</strong><br>';
    log += '• Total Pelajaran (Lessons): <strong>306 Materi Komprehensif</strong><br>';
    log += '• Tingkat Kesulitan: Beginner ➔ Intermediate ➔ Advanced ➔ Expert Master ✅';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Silabus yang terstruktur rapi menjamin pemahaman konsep yang kokoh tanpa kesenjangan pengetahuan.'
    ],
    quiz: {
      question: 'Berapa jumlah total materi kurikulum JavaScript lengkap yang telah Anda pelajari di platform LMS ini?',
      options: [
        '306 Materi Komprehensif',
        '50 Materi',
        '100 Materi',
        '20 Materi'
      ],
      answer: 0,
      explanation: 'Kurikulum JavaScript LMS ini terdiri dari 306 materi komprehensif yang terbagi dalam 46 bab.'
    },
    challenge: {
      title: 'Tantangan: Kembalikan Total Materi',
      description: 'Lakukan `return 306;`.',
      startingCode: `function getTotalLessons() {\n  return 306;\n}`,
      solution: `function getTotalLessons() {\n  return 306;\n}`
    }
  },

  // ── 304. JS STUDY PLAN ──────────────────────────────────────────────────
  {
    id: 'js-study-plan-roadmap',
    title: 'JS Study Plan',
    chapter: 'JS Examples',
    chapterId: 'js-chap-examples',
    order: 304,
    overview: 'Rencana Belajar & Roadmap Terstruktur: jadwal 30 hari intensif menguasai JavaScript dari nol hingga siap membangun aplikasi web modern.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS EXAMPLES</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 304 / 306</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📅 Roadmap Belajar 30 Hari Menguasai JavaScript</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Konsistensi adalah kunci. Alokasikan 1-2 jam per hari:
            • <strong>Minggu 1 (Hari 1-7):</strong> JavaScript Basics, Logika Percabangan, Loops, Functions, & Arrays.
            • <strong>Minggu 2 (Hari 8-14):</strong> DOM Manipulation, Form Events, & Projects Interaktif.
            • <strong>Minggu 3 (Hari 15-21):</strong> Asynchronous (Promises, Async/Await), Fetch API, & JSON.
            • <strong>Minggu 4 (Hari 22-30):</strong> OOP Classes, ES Modules, Metaprogramming, Web Graphics, & Capstone Project.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Study Plan Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Kalkulator Estimasi Waktu Belajar</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    const totalMateri = 306;
    const targetHari = 30;
    const materiPerHari = Math.ceil(totalMateri / targetHari);

    let log = '';
    log += '• Target Selesai: <strong>' + targetHari + ' Hari</strong><br>';
    log += '• Kecepatan Belajar yang Disarankan: <strong>' + materiPerHari + ' Materi / Hari</strong> (±1 Jam/Hari) ✅';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Menyelesaikan 10-11 materi per hari memungkinkan siswa menguasai seluruh materi dalam 1 bulan.'
    ],
    quiz: {
      question: 'Berapa estimasi waktu harian yang direkomendasikan untuk belajar secara konsisten agar menguasai materi JavaScript secara optimal?',
      options: [
        '1 hingga 2 jam per hari secara konsisten',
        '24 jam tanpa tidur',
        '10 menit per bulan',
        'Hanya di akhir pekan saja'
      ],
      answer: 0,
      explanation: 'Belajar konsisten 1-2 jam setiap hari terbukti jauh lebih efektif daripada belajar maraton tanpa jeda.'
    },
    challenge: {
      title: 'Tantangan: Hitung Target Belajar',
      description: 'Lakukan `Math.ceil(total / days);`.',
      startingCode: `function getPace(total, days) {\n  return Math.ceil(total / days);\n}`,
      solution: `function getPace(total, days) {\n  return Math.ceil(total / days);\n}`
    }
  },

  // ── 305. JS INTERVIEW PREP ──────────────────────────────────────────────
  {
    id: 'js-interview-prep-questions',
    title: 'JS Interview Prep',
    chapter: 'JS Examples',
    chapterId: 'js-chap-examples',
    order: 305,
    overview: 'Bank Soal Wawancara Kerja (Technical Interview Questions): 50+ pertanyaan konsep JavaScript paling sering ditanyakan di perusahaan teknologi (Closure, Event Loop, Hoisting, Prototype Chain, Promises, dan Debounce/Throttle).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS EXAMPLES</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 305 / 306</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">💼 Persiapan Wawancara Kerja (Technical Interview)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Topik wajib wawancara JavaScript Developer:
            1. <strong>Closure:</strong> Kemampuan fungsi mengingat scope leksikal tempat ia diciptakan.
            2. <strong>Event Loop:</strong> Cara kerja non-blocking, Call Stack, Microtask vs Macrotask.
            3. <strong>Hoisting:</strong> Pengangkatan deklarasi variabel/fungsi ke atas scope.
            4. <strong>Prototypes:</strong> Pewarisan berbasis rantai prototipe (<code>__proto__</code>).
            5. <strong>Debounce & Throttle:</strong> Optimasi pembatasan frekuensi eksekusi event listener.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Interview Prep Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Soal Interview Populer: Debounce Function</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    // Implementasi Debounce klasik (Sering ditanyakan saat Live Coding Interview!)
    function debounce(fn, delay) {
      let timer;
      return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
      };
    }

    let log = '';
    log += '<strong>Implementasi Fungsi Debounce:</strong><br>';
    log += '• Mencegah pemanggilan API berlebihan saat mengetik di search bar.<br>';
    log += '• Menggunakan konsep <strong>Closure</strong> untuk menyimpan variabel timer! ✅';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Fungsi debounce adalah salah satu soal live coding paling sering diuji dalam wawancara Frontend Developer.'
    ],
    quiz: {
      question: 'Konsep apakah di JavaScript yang memungkinkan sebuah fungsi anak mengakses variabel dari outer scope (fungsi induknya) meskipun fungsi induk tersebut telah selesai dieksekusi?',
      options: [
        'Closure',
        'Hoisting',
        'Polyfill',
        'Garbage Collection'
      ],
      answer: 0,
      explanation: '`Closure` mempertahankan referensi variabel di leksikal scope sekitarnya bahkan setelah outer function selesai return.'
    },
    challenge: {
      title: 'Tantangan: Buat Fungsi Closure',
      description: 'Lengkapi closure `function outer() { const x = 10; return function() { return x; }; }`.',
      startingCode: `function outer() {\n  const x = 10;\n  return function() {\n    return x;\n  };\n}`,
      solution: `function outer() {\n  const x = 10;\n  return function() {\n    return x;\n  };\n}`
    }
  },

  // ── 306. JS CERTIFICATE ─────────────────────────────────────────────────
  {
    id: 'js-certificate-exam',
    title: 'JS Certificate',
    chapter: 'JS Examples',
    chapterId: 'js-chap-examples',
    order: 306,
    overview: 'Ujian Kelulusan Akhir & Penerbitan Sertifikat Resmi: verifikasi kompetensi penguasaan 306 materi JavaScript dan penerbitan sertifikat digital terverifikasi LMS.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS EXAMPLES</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 306 / 306 (MATERI PENUTUP LENGKAP)</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏆 Sertifikat Kompetensi Resmi JavaScript Developer</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <strong>SELAMAT DAN SUKSES BESAR!</strong> Anda telah berhasil menuntaskan seluruh <strong>306 materi komprehensif</strong> di dalam <strong>46 bab</strong> kurikulum JavaScript resmi platform LMS ini. Sertifikat digital ini membuktikan keahlian profesional Anda dalam ekosistem pemrograman web modern!
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Certificate Grand Finale Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px; text-align: center;">

  <div style="border: 4px double #eab308; padding: 30px; border-radius: 16px; background: #0f172a; color: white; max-width: 600px; margin: 0 auto;">
    <h1 style="color: #eab308; margin-bottom: 5px;">🎓 SERTIFIKAT KELULUSAN RESMI</h1>
    <h3 style="color: #38bdf8; font-weight: normal; margin-top: 0;">Certified JavaScript Professional Developer</h3>
    <hr style="border: 0; border-top: 1px solid #334155; margin: 20px 0;">
    <p style="font-size: 16px; line-height: 1.6; color: #cbd5e1;">
      Diberikan kepada siswa berprestasi yang telah berhasil menuntaskan secara lengkap dan sempurna seluruh <strong>306 Materi JavaScript</strong> di dalam <strong>46 Bab</strong> terakreditasi.
    </p>
    <div style="margin-top: 25px; padding: 12px; background: #1e293b; border-radius: 8px; color: #4ade80; font-family: monospace; font-size: 14px;">
      ID Sertifikat: LMS-JS-CERT-306-VERIFIED ✅
    </div>
  </div>

</body>
</html>`,
    codeExplanation: [
      'Sertifikat ini menjadi bukti otentik penguasaan penuh bahasa pemrograman JavaScript dari level dasar hingga mahir.'
    ],
    quiz: {
      question: 'Berapakah jumlah bab total yang berhasil Anda tuntaskan dalam kurikulum resmi JavaScript di platform LMS ini?',
      options: [
        '46 Bab',
        '10 Bab',
        '25 Bab',
        '5 Bab'
      ],
      answer: 0,
      explanation: 'Kurikulum JavaScript LMS ini berhasil dituntaskan secara sempurna sebanyak 46 Bab komprehensif.'
    },
    challenge: {
      title: 'Tantangan Terakhir: Sertifikat Kelulusan',
      description: 'Lakukan `return "GRADUATED";`.',
      startingCode: `function getStatus() {\n  return "GRADUATED";\n}`,
      solution: `function getStatus() {\n  return "GRADUATED";\n}`
    }
  }
];
