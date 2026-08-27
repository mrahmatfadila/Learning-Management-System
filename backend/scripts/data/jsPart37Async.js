module.exports = [
  // ── 240. ASYNC STUDY PATH ──────────────────────────────────────────────
  {
    id: 'async-study-path',
    title: 'Async Study Path',
    chapter: 'JS Asynchronous',
    chapterId: 'js-chap-async',
    order: 240,
    overview: 'Peta jalan penguasaan asynchronous JavaScript: dari Callbacks tradisional, Promises, async/await modern, concurrency combinators, hingga arsitektur Event Loop dan Microtask Queue.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS ASYNCHRONOUS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 240 / 257</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚡ Peta Jalur Penguasaan Asynchronous JavaScript</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            JavaScript beroperasi pada <strong>Single Thread</strong> tetapi mampu menangani ribuan operasi jaringan secara simultan tanpa membeku (*non-blocking*). Menguasai model asynchronous adalah pembeda utama antara developer pemula dan arsitek software profesional.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Async Study Path Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Evolusi Pola Asinkronus JavaScript</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    log += '<strong>Evolusi Pemrograman Asinkronus:</strong><br>';
    log += '1. <strong>Era Callbacks (ES5 kebawah):</strong> Rentan Callback Hell / Pyramid of Doom.<br>';
    log += '2. <strong>Era Promises (ES6 2015):</strong> .then() / .catch() chaining.<br>';
    log += '3. <strong>Era Async/Await (ES8 2017):</strong> Penulisan asinkronus dengan gaya sekuensial bersih.<br>';
    log += '4. <strong>Era Concurrency & Signals:</strong> Promise.allSettled() & AbortSignal.';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Model asynchronous JavaScript dijalankan oleh Event Loop yang mengoordinasikan eksekusi Call Stack, Web APIs, dan Queues.'
    ],
    quiz: {
      question: 'Manakah fitur JavaScript yang diperkenalkan pada ES2017 (ES8) untuk menulis kode asinkronus dengan gaya yang tampak seperti kode sinkronus?',
      options: [
        'XMLHttpRequest',
        'async / await',
        'setTimeout',
        'Callback functions'
      ],
      answer: 1,
      explanation: 'Sintaks `async / await` diperkenalkan pada ES2017 untuk menyederhanakan konsumsi Promises.'
    },
    challenge: {
      title: 'Tantangan: Buat Fungsi Async Sederhana',
      description: 'Lengkapi `async function getData() { return 100; }`.',
      startingCode: `async function getData() {\n  return 100;\n}`,
      solution: `async function getData() {\n  return 100;\n}`
    }
  },

  // ── 241. ASYNC PROGRAMMING ──────────────────────────────────────────────
  {
    id: 'async-programming',
    title: 'Async Programming',
    chapter: 'JS Asynchronous',
    chapterId: 'js-chap-async',
    order: 241,
    overview: 'Konsep Non-blocking I/O vs Blocking Single-threaded: mengapa operasi berat (fetch database/API) tidak boleh menghentikan UI render thread di browser.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS ASYNCHRONOUS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 241 / 257</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⏳ Blocking vs Non-Blocking I/O</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Jika JavaScript menunggu (*blocking*) operasi download file 5 detik, antarmuka browser akan membeku (*UI freeze*) dan tombol tidak bisa diklik. Dengan <strong>Non-Blocking I/O</strong>, JavaScript mendelegasikan tugas ke background Web API dan melanjutkan eksekusi kode lainnya.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Async Programming Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Simulasi Non-Blocking Execution</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    log += '1. Mulai eksekusi sinkronus<br>';

    // Operasi didelegasikan ke background timer Web API
    setTimeout(() => {
      log += '3. ⏰ Operasi asinkronus selesai dieksekusi di akhir!<br>';
      document.getElementById('output').innerHTML = log;
    }, 100);

    log += '2. Baris berikutnya langsung jalan tanpa terblokir! 🚀<br>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'setTimeout(..., 100) mendaftarkan callback ke Web API browser tanpa menghentikan thread JavaScript utama.'
    ],
    quiz: {
      question: 'Apa dampak buruk yang terjadi jika browser menjalankan operasi jaringan secara sinkronus (blocking)?',
      options: [
        'Antarmuka halaman web membeku (freeze) dan tombol tidak dapat diklik hingga request selesai',
        'Website otomatis ter-refresh',
        'Warna teks berubah menjadi hitam putih',
        'Koneksi internet menjadi lebih cepat'
      ],
      answer: 0,
      explanation: 'Operasi blocking akan membekukan Main Thread browser sehingga UI tidak responsif terhadap input pengguna.'
    },
    challenge: {
      title: 'Tantangan: Pasang Timeout Non-Blocking',
      description: 'Gunakan `setTimeout(() => {}, 1000);`.',
      startingCode: `function delayRun(cb) {\n  setTimeout(cb, 1000);\n}`,
      solution: `function delayRun(cb) {\n  setTimeout(cb, 1000);\n}`
    }
  },

  // ── 242. ASYNC CALLBACKS ────────────────────────────────────────────────
  {
    id: 'async-callbacks',
    title: 'Async Callbacks',
    chapter: 'JS Asynchronous',
    chapterId: 'js-chap-async',
    order: 242,
    overview: 'Pola Callback asinkronus: penanganan tugas bertingkat, masalah Pyramid of Doom (Callback Hell), dan teknik modularisasi untuk menjaga kerapian kode.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS ASYNCHRONOUS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 242 / 257</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧱 Bahaya Callback Hell & Pyramid of Doom</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Ketika beberapa operasi asinkronus harus dijalankan secara berurutan (misal: login -> ambil profil -> ambil nilai ujian), penulisan callback bertingkat membuat kode menjorok ke kanan menyerupai piramida (*Pyramid of Doom*).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Async Callbacks Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Simulasi Callback Bertingkat (Pyramid of Doom)</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    function step1(cb) { setTimeout(() => { log += '• Langkah 1 Selesai<br>'; cb(); }, 50); }
    function step2(cb) { setTimeout(() => { log += '• Langkah 2 Selesai<br>'; cb(); }, 50); }
    function step3(cb) { setTimeout(() => { log += '• Langkah 3 Selesai (Semua Beres!) ✅<br>'; cb(); }, 50); }

    // Callback Hell
    step1(() => {
      step2(() => {
        step3(() => {
          document.getElementById('output').innerHTML = log;
        });
      });
    });
  </script>

</body>
</html>`,
    codeExplanation: [
      'Pola ini sulit di-maintain dan menangani error secara terpusat, yang memicu lahirnya standar Promises.'
    ],
    quiz: {
      question: 'Istilah populer apakah yang menggambarkan struktur kode callback yang bersarang terlalu dalam sehingga sulit dibaca dan dirawat?',
      options: [
        'Callback Hell / Pyramid of Doom',
        'Stack Overflow',
        'Memory Leak',
        'Deadlock'
      ],
      answer: 0,
      explanation: 'Struktur kode callback yang menjorok bersarang sangat dalam dikenal sebagai `Callback Hell` atau `Pyramid of Doom`.'
    },
    challenge: {
      title: 'Tantangan: Panggil Callback Sederhana',
      description: 'Lakukan `cb("Done");`.',
      startingCode: `function exec(cb) {\n  cb("Done");\n}`,
      solution: `function exec(cb) {\n  cb("Done");\n}`
    }
  },

  // ── 243. ASYNC PROMISES ─────────────────────────────────────────────────
  {
    id: 'async-promises',
    title: 'Async Promises',
    chapter: 'JS Asynchronous',
    chapterId: 'js-chap-async',
    order: 243,
    overview: 'Siklus hidup Promise di JavaScript: 3 status (Pending, Fulfilled, Rejected), method .then(), .catch(), dan .finally(), serta Promise Chaining.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS ASYNCHRONOUS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 243 / 257</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🤝 Objek Janji Masa Depan: Promise</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <strong>Promise</strong> adalah objek yang merepresentasikan penyelesaian (atau kegagalan) dari sebuah operasi asinkronus di masa depan. Promise memiliki 3 status: <code>pending</code> (menunggu), <code>fulfilled</code> (berhasil diselesaikan), dan <code>rejected</code> (gagal/error).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Async Promises Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Promise Creation & Chaining</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    function unduhDataMateri() {
      return new Promise((resolve, reject) => {
        const sukses = true;
        setTimeout(() => {
          if (sukses) resolve({ id: 243, judul: 'Async Promises Mastery' });
          else reject(new Error('Koneksi terputus!'));
        }, 100);
      });
    }

    unduhDataMateri()
      .then(data => {
        log += '• 1. Data Diterima: ' + data.judul + '<br>';
        return data.id; // Mengembalikan nilai ke chain berikutnya
      })
      .then(id => {
        log += '• 2. Memproses ID Materi: ' + id + ' ✅<br>';
      })
      .catch(err => {
        log += '❌ Error: ' + err.message + '<br>';
      })
      .finally(() => {
        log += '• 3. Cleanup Selesai (.finally).';
        document.getElementById('output').innerHTML = log;
      });
  </script>

</body>
</html>`,
    codeExplanation: [
      '.then() menangani hasil sukses, .catch() menangkap error di seluruh rantai chain, dan .finally() selalu dieksekusi di akhir.'
    ],
    quiz: {
      question: 'Manakah dari berikut ini yang BUKAN merupakan status resmi dari siklus hidup Promise di JavaScript?',
      options: [
        'pending',
        'fulfilled',
        'rejected',
        'stopped'
      ],
      answer: 3,
      explanation: 'Tiga status resmi Promise adalah `pending`, `fulfilled`, dan `rejected`.'
    },
    challenge: {
      title: 'Tantangan: Buat Promise Resolved',
      description: 'Lakukan `return Promise.resolve("OK");`.',
      startingCode: `function getResolved() {\n  return Promise.resolve("OK");\n}`,
      solution: `function getResolved() {\n  return Promise.resolve("OK");\n}`
    }
  },

  // ── 244. ASYNC AWAIT ────────────────────────────────────────────────────
  {
    id: 'async-await-adv',
    title: 'Async Await',
    chapter: 'JS Asynchronous',
    chapterId: 'js-chap-async',
    order: 244,
    overview: 'Sintaks Modern async/await: mengubah konsumsi Promise menjadi sekuensial linear, penanganan error komprehensif menggunakan blok try...catch...finally.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS ASYNCHRONOUS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 244 / 257</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">✨ Penulisan Asinkronus Linear: async / await</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Kata kunci <code>async</code> menandai sebuah fungsi otomatis mengembalikan Promise. Kata kunci <code>await</code> hanya dapat digunakan di dalam fungsi async untuk <strong>menjeda eksekusi</strong> hingga Promise selesai di-resolve.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Async Await Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Penanganan Asinkronus dengan try...catch</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    async function muatDataSiswa() {
      const output = document.getElementById('output');
      output.innerHTML = '⏳ Menunggu data siswa...';

      try {
        const promiseSiswa = new Promise((res) => setTimeout(() => res({ nama: 'Rahmat', nilai: 98 }), 300));
        const siswa = await promiseSiswa; // Menjeda hingga Promise selesai!

        output.innerHTML = '✅ <strong>Data Diterima:</strong> ' + siswa.nama + ' (Nilai: ' + siswa.nilai + ')';
      } catch (err) {
        output.innerHTML = '❌ Terjadi kesalahan: ' + err.message;
      }
    }

    muatDataSiswa();
  </script>

</body>
</html>`,
    codeExplanation: [
      'await membuat kode tampak seperti kode sinkronus tanpa memblokir thread JavaScript di balik layar.',
      'Error pada Promise yang di-await otomatis ditangkap oleh blok catch.'
    ],
    quiz: {
      question: 'Struktur kendali error apakah yang digunakan bersama async/await untuk menangani penolakan (rejection) Promise?',
      options: [
        'try ... catch ... finally',
        'if ... else',
        'switch ... case',
        'for ... of'
      ],
      answer: 0,
      explanation: 'Blok `try ... catch ... finally` digunakan untuk menangani error pada kode `async/await`.'
    },
    challenge: {
      title: 'Tantangan: Await Promise',
      description: 'Lakukan await `const res = await p;`.',
      startingCode: `async function testAwait(p) {\n  let res = await p;\n  return res;\n}`,
      solution: `async function testAwait(p) {\n  let res = await p;\n  return res;\n}`
    }
  },

  // ── 245. ASYNC PARALLEL ─────────────────────────────────────────────────
  {
    id: 'async-parallel-adv',
    title: 'Async Parallel',
    chapter: 'JS Asynchronous',
    chapterId: 'js-chap-async',
    order: 245,
    overview: 'Eksekusi Konkuren Paralel: Promise.all() (fail-fast), Promise.allSettled() (menunggu semua hasil), Promise.race() (siapa tercepat), dan Promise.any() (sukses pertama).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS ASYNCHRONOUS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 245 / 257</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🚀 Eksekusi Paralel (Promise Combinators)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Jangan jalankan request secara sekuensial jika data tidak saling bergantung. Menjalankan request secara paralel menggunakan <code>Promise.all()</code> dapat memangkas waktu loading hingga 70%!
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Async Parallel Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Uji Promise.allSettled() Paralel</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    async function loadSemuaLayanan() {
      const p1 = Promise.resolve('Database Server: OK');
      const p2 = Promise.reject('Redis Cache: OFFLINE');
      const p3 = Promise.resolve('Storage S3: OK');

      // allSettled menunggu SEMUA selesai tanpa melempar fatal error jika ada yang gagal!
      const hasil = await Promise.allSettled([p1, p2, p3]);

      let log = '<strong>Hasil Inspeksi Layanan:</strong><br>';
      hasil.forEach((h, idx) => {
        log += '• Layanan ' + (idx + 1) + ': ' + h.status + ' ➔ ' + (h.value || h.reason) + '<br>';
      });

      document.getElementById('output').innerHTML = log;
    }

    loadSemuaLayanan();
  </script>

</body>
</html>`,
    codeExplanation: [
      'Promise.all([p1, p2]) gagal seketika jika salah satu reject (Fail-fast).',
      'Promise.allSettled([p1, p2]) menunggu seluruh promise selesai dan mengembalikan array status: "fulfilled" atau "rejected".'
    ],
    quiz: {
      question: 'Method Promise manakah yang menunggu seluruh Promise selesai dieksekusi tanpa membatalkan proses meskipun ada Promise yang gagal (rejected)?',
      options: [
        'Promise.all()',
        'Promise.allSettled()',
        'Promise.race()',
        'Promise.any()'
      ],
      answer: 1,
      explanation: '`Promise.allSettled()` menunggu seluruh Promise selesai dan mengembalikan ringkasan status masing-masing.'
    },
    challenge: {
      title: 'Tantangan: Jalankan Promise.all',
      description: 'Lakukan `Promise.all([p1, p2]);`.',
      startingCode: `function runBoth(p1, p2) {\n  return Promise.all([p1, p2]);\n}`,
      solution: `function runBoth(p1, p2) {\n  return Promise.all([p1, p2]);\n}`
    }
  },

  // ── 246. ASYNC EVENT LOOP ───────────────────────────────────────────────
  {
    id: 'async-event-loop',
    title: 'Async Event Loop',
    chapter: 'JS Asynchronous',
    chapterId: 'js-chap-async',
    order: 246,
    overview: 'Arsitektur Internal Event Loop di Browser & Node.js: Call Stack, Web APIs, Microtask Queue (Promises, queueMicrotask), dan Macrotask Queue (setTimeout, I/O).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS ASYNCHRONOUS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 246 / 257</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔄 Anatomi Event Loop & Antrean Microtask</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Event Loop bertugas memeriksa apakah <strong>Call Stack</strong> kosong. Jika kosong:
            1. Seluruh antrean <strong>Microtask Queue</strong> (Promise <code>.then</code>, <code>queueMicrotask</code>) dieksekusi terlebih dahulu hingga tuntas.
            2. Baru kemudian 1 tugas dari <strong>Macrotask Queue</strong> (<code>setTimeout</code>, <code>setInterval</code>) dieksekusi.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Async Event Loop Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Urutan Eksekusi Event Loop</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    log += '1. Sinkronus Utama<br>';

    // Macrotask
    setTimeout(() => {
      log += '4. Macrotask (setTimeout 0ms)<br>';
      document.getElementById('output').innerHTML = log;
    }, 0);

    // Microtask (Prioritas lebih tinggi dari Macrotask!)
    Promise.resolve().then(() => {
      log += '3. Microtask (Promise .then)<br>';
    });

    log += '2. Sinkronus Akhir<br>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Urutan eksekusi: Sinkronus -> Microtask (Promise) -> Macrotask (setTimeout).'
    ],
    quiz: {
      question: 'Antrean manakah yang memiliki prioritas eksekusi lebih tinggi dan akan dikosongkan seluruhnya oleh Event Loop sebelum Macrotask dieksekusi?',
      options: [
        'Microtask Queue (Promise callbacks)',
        'Macrotask Queue (setTimeout)',
        'Worker Queue',
        'Disk Queue'
      ],
      answer: 0,
      explanation: '`Microtask Queue` (seperti Promise callbacks) selalu diproses hingga tuntas sebelum Macrotask berikutnya dijalankan.'
    },
    challenge: {
      title: 'Tantangan: Jadwalkan Microtask',
      description: 'Gunakan `queueMicrotask(() => {});`.',
      startingCode: `function schedule(cb) {\n  queueMicrotask(cb);\n}`,
      solution: `function schedule(cb) {\n  queueMicrotask(cb);\n}`
    }
  },

  // ── 247. ASYNC FETCH API ────────────────────────────────────────────────
  {
    id: 'async-fetch-api',
    title: 'Async Fetch API',
    chapter: 'JS Asynchronous',
    chapterId: 'js-chap-async',
    order: 247,
    overview: 'Integrasi Tingkat Lanjut Fetch API: pembacaan response stream body (JSON & Text), penanganan status code HTTP non-200, dan konfigurasi request headers.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS ASYNCHRONOUS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 247 / 257</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌐 Pola Bersih Fetch API dengan async / await</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Fetch API tidak melempar error pada kode status HTTP 404 atau 500 (Fetch hanya reject jika ada kegagalan jaringan fisik). Oleh karena itu, kita <strong>wajib memeriksa <code>if (!response.ok)</code></strong> secara manual.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Async Fetch API Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Pola Baku Handler Fetch API</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    async function ambilDataMateri(url) {
      // Mock Response
      const mockRes = {
        ok: true,
        status: 200,
        json: async () => ({ modul: 'JavaScript Advanced', status: 'Online' })
      };

      if (!mockRes.ok) {
        throw new Error('HTTP Error: ' + mockRes.status);
      }

      const data = await mockRes.json();
      document.getElementById('output').innerHTML = 
        '• Modul: <strong>' + data.modul + '</strong><br>' +
        '• Status: ' + data.status + ' ✅';
    }

    ambilDataMateri('/api/status');
  </script>

</body>
</html>`,
    codeExplanation: [
      'Memeriksa response.ok menjamin kita dapat menangkap respons error 4xx dan 5xx dari server dengan tepat.'
    ],
    quiz: {
      question: 'Mengapa kita perlu memeriksa properti response.ok saat menggunakan Fetch API?',
      options: [
        'Karena Fetch API tidak melempar reject Promise untuk error HTTP seperti status 404 atau 500',
        'Karena Fetch selalu lambat',
        'Untuk mematikan koneksi internet',
        'Agar CSS bisa ter-load'
      ],
      answer: 0,
      explanation: 'Fetch API hanya melempar reject jika terjadi kegagalan jaringan murni; status HTTP 404 atau 500 tetap dianggap resolved oleh Promise.'
    },
    challenge: {
      title: 'Tantangan: Cek response.ok',
      description: 'Lakukan `if (!res.ok) throw new Error();`.',
      startingCode: `function checkOk(res) {\n  if (!res.ok) throw new Error("Gagal");\n  return res;\n}`,
      solution: `function checkOk(res) {\n  if (!res.ok) throw new Error("Gagal");\n  return res;\n}`
    }
  },

  // ── 248. ASYNC MISTAKES ─────────────────────────────────────────────────
  {
    id: 'async-mistakes',
    title: 'Async Mistakes',
    chapter: 'JS Asynchronous',
    chapterId: 'js-chap-async',
    order: 248,
    overview: 'Jebakan kesalahan fatal asinkronus: penggunaan async pada Array.prototype.forEach (unhandled concurrency), lupa kata kunci await, dan Unhandled Promise Rejections.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS ASYNCHRONOUS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 248 / 257</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚠️ Kesalahan Klasik: async di dalam forEach</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array.forEach(async (item) => ...)</code> <strong>TIDAK MENUNGGU</strong> promise di dalamnya selesai sebelum berpindah ke baris berikutnya! Untuk perulangan asinkronus sekuensial, gunakan <code>for...of</code>. Untuk paralel, gunakan <code>Promise.all(array.map(...))</code>.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Async Mistakes Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Perulangan Asinkronus yang Benar: for...of</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    async function prosesDaftar(ids) {
      let log = '';

      // BENAR: for...of menunggu setiap iterasi secara teratur
      for (const id of ids) {
        await new Promise(r => setTimeout(r, 50));
        log += '• Item ID: ' + id + ' selesai diproses!<br>';
      }

      log += '✅ Semua item selesai diproses secara sekuensial aman!';
      document.getElementById('output').innerHTML = log;
    }

    prosesDaftar([101, 102, 103]);
  </script>

</body>
</html>`,
    codeExplanation: [
      'Gunakan for...of jika Anda membutuhkan eksekusi antrean berurutan satu per satu.',
      'Gunakan Promise.all(ids.map(async id => ...)) jika Anda ingin memproses semuanya secara serentak (paralel).'
    ],
    quiz: {
      question: 'Mengapa kita tidak boleh menggunakan method array.forEach(async () => {}) jika ingin menunggu semua operasi asinkronus selesai?',
      options: [
        'Karena forEach mengabaikan Promise yang dikembalikan oleh callback dan langsung selesai seketika',
        'Karena forEach hanya bisa digunakan untuk angka',
        'Karena forEach otomatis melempar SyntaxError',
        'Karena forEach mematikan browser'
      ],
      answer: 0,
      explanation: '`forEach` dirancang sinkronus dan tidak mempedulikan kembalian Promise dari callback-nya.'
    },
    challenge: {
      title: 'Tantangan: Gunakan for...of untuk Async',
      description: 'Lakukan loop `for (const x of items) { await proc(x); }`.',
      startingCode: `async function runAll(items, proc) {\n  for (const x of items) {\n    await proc(x);\n  }\n}`,
      solution: `async function runAll(items, proc) {\n  for (const x of items) {\n    await proc(x);\n  }\n}`
    }
  },

  // ── 249. ASYNC DEBUGGING ────────────────────────────────────────────────
  {
    id: 'async-debugging',
    title: 'Async Debugging',
    chapter: 'JS Asynchronous',
    chapterId: 'js-chap-async',
    order: 249,
    overview: 'Teknik Debugging Kode Asinkronus: Async Stack Traces di Chrome DevTools, penggunaan Async Breakpoints, dan pelacakan Unhandled Rejections.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS ASYNCHRONOUS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 249 / 257</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Menelusuri Jejak Eksekusi (Async Stack Traces)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Browser modern mendukung <strong>Async Stack Traces</strong> yang mempertahankan riwayat pemanggilan fungsi bahkan melintasi batasan event loop, sehingga mempermudah menemukan baris penyebab error asinkronus.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Async Debugging Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Global Unhandled Rejection Listener</h2>
  <div id="output" style="background: #0f172a; color: #f87171; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    // Menangkap Promise Rejection yang lupa di-catch
    window.addEventListener('unhandledrejection', (event) => {
      document.getElementById('output').innerHTML = 
        '🚨 <strong>Terdeteksi Unhandled Promise Rejection:</strong><br>' +
        '• Alasan: ' + event.reason;
      event.preventDefault(); // Mencegah pesan merah di console
    });

    // Simulasi Promise tanpa .catch
    Promise.reject('Token Autentikasi Kadaluarsa!');
  </script>

</body>
</html>`,
    codeExplanation: [
      'Event unhandledrejection menangkap semua kegagalan Promise yang tidak memiliki blok .catch().'
    ],
    quiz: {
      question: 'Event window apakah yang dipicu saat sebuah Promise mengalami reject tetapi tidak memiliki penanganan .catch()?',
      options: [
        'unhandledrejection',
        'promiseerror',
        'asyncfail',
        'rejecterror'
      ],
      answer: 0,
      explanation: 'Event `unhandledrejection` dipicu di level global window/process saat ada Promise yang di-reject tanpa penanganan catch.'
    },
    challenge: {
      title: 'Tantangan: Tangkap Unhandled Rejection',
      description: 'Pasang `window.addEventListener("unhandledrejection", (e) => {});`.',
      startingCode: `// Pasang listener di bawah:\n`,
      solution: `window.addEventListener("unhandledrejection", (e) => {});`
    }
  },

  // ── 250. ASYNC ABORTCONTROL ─────────────────────────────────────────────
  {
    id: 'async-abortcontrol',
    title: 'Async AbortControl',
    chapter: 'JS Asynchronous',
    chapterId: 'js-chap-async',
    order: 250,
    overview: 'Membatalkan Operasi Asinkronus: AbortController, AbortSignal.timeout(), pembersihan event listener dengan signal, dan penghentian fetch request yang lambat.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS ASYNCHRONOUS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 250 / 257</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛑 Membatalkan Request dengan AbortController</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>AbortController</code> memungkinkan kita membatalkan request jaringan Fetch atau operasi asinkronus lainnya kapan saja (misal saat pengguna berpindah halaman atau request melebihi batas waktu timeout).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Async AbortControl Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Simulasi Timeout Otomatis (AbortSignal.timeout)</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const controller = new AbortController();
    const signal = controller.signal;

    signal.addEventListener('abort', () => {
      log += '🛑 Sinyal Abort Terpicu: Operasi Asinkronus Berhasil Dibatalkan! ✅';
      document.getElementById('output').innerHTML = log;
    });

    // Batalkan operasi
    controller.abort();
  </script>

</body>
</html>`,
    codeExplanation: [
      'fetch(url, { signal }) akan otomatis terputus dan membuang AbortError ketika controller.abort() dipanggil.'
    ],
    quiz: {
      question: 'Objek standar bawaan browser apakah yang digunakan untuk membatalkan operasi Fetch API yang sedang berlangsung?',
      options: [
        'CancelToken',
        'AbortController',
        'StopHandler',
        'BreakSignal'
      ],
      answer: 1,
      explanation: '`AbortController` adalah objek standar W3C untuk mengirimkan sinyal pembatalan ke operasi asinkronus.'
    },
    challenge: {
      title: 'Tantangan: Buat AbortController',
      description: 'Lakukan `const ctrl = new AbortController();`.',
      startingCode: `const ctrl = new AbortController();`,
      solution: `const ctrl = new AbortController();`
    }
  },

  // ── 251. ASYNC WEB WORKERS ──────────────────────────────────────────────
  {
    id: 'async-web-workers',
    title: 'Async Web Workers',
    chapter: 'JS Asynchronous',
    chapterId: 'js-chap-async',
    order: 251,
    overview: 'Pemrosesan Komputasi Berat di Latar Belakang: mengombinasikan Web Workers dengan Promises untuk arsitektur aplikasi bebas lag 60 FPS.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS ASYNCHRONOUS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 251 / 257</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧵 Promise-based Web Workers</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Membungkus komunikasi <code>Worker.postMessage()</code> di dalam objek Promise menghasilkan antarmuka fungsi async yang bersih untuk mengeksekusi algoritma berat di background thread tanpa memblokir animasi antarmuka UI.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Async Web Workers Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Promise Wrapper untuk Web Worker</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    function jalankanKomputasiWorker(inputData) {
      return new Promise((resolve) => {
        // Simulasi kalkulasi thread terpisah
        setTimeout(() => {
          resolve('Hasil Komputasi Paralel untuk: ' + inputData + ' (Selesai)');
        }, 150);
      });
    }

    async function main() {
      const hasil = await jalankanKomputasiWorker('Data Enkripsi LMS');
      document.getElementById('output').innerHTML = '✅ ' + hasil;
    }

    main();
  </script>

</body>
</html>`,
    codeExplanation: [
      'Pola pembungkusan Promise memudahkan pemanggilan tugas worker menggunakan sintaks await yang elegan.'
    ],
    quiz: {
      question: 'Mengapa komputasi intensif (seperti manipulasi ribuan gambar) lebih baik dijalankan di Web Worker daripada di Main Thread?',
      options: [
        'Agar UI thread utama tidak mengalami stutter/freeze dan animasi tetap berjalan lancar 60 FPS',
        'Karena Web Worker memiliki akses ke file lokal rahasia',
        'Karena CSS hanya bisa dibaca di Worker',
        'Karena memori RAM otomatis digandakan'
      ],
      answer: 0,
      explanation: 'Web Worker menjalankan kode di background thread terpisah sehingga Main Thread bebas merender UI tanpa lag.'
    },
    challenge: {
      title: 'Tantangan: Buat Worker Promise',
      description: 'Lengkapi promise `return new Promise(r => r("OK"));`.',
      startingCode: `function runTask() {\n  return new Promise(r => r("OK"));\n}`,
      solution: `function runTask() {\n  return new Promise(r => r("OK"));\n}`
    }
  },

  // ── 252. ASYNC REFERENCE ────────────────────────────────────────────────
  {
    id: 'async-reference',
    title: 'Async Reference',
    chapter: 'JS Asynchronous',
    chapterId: 'js-chap-async',
    order: 252,
    overview: 'Kamus referensi komprehensif seluruh method Promise, sintaks async/await, utilitas microtask, dan tabel perbandingan Promise Combinators.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS ASYNCHRONOUS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 252 / 257</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📚 Kamus Referensi Asynchronous JavaScript</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Tabel berikut merangkum seluruh method statis <code>Promise</code> dan utilitas asinkronus inti di JavaScript.
          </p>
        </div>

        <div class="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-xl text-xs">
          <table class="w-full text-left">
            <thead class="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white">
              <tr>
                <th class="p-3">Method / Fitur</th>
                <th class="p-3">Perilaku & Karakteristik Utama</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-800 font-mono text-slate-600 dark:text-slate-300">
              <tr><td class="p-3 font-bold text-amber-500">Promise.all()</td><td>Paralel, fail-fast (reject jika ada 1 yang error).</td></tr>
              <tr><td class="p-3 font-bold text-amber-500">Promise.allSettled()</td><td>Paralel, menunggu seluruh promise selesai (sukses & gagal).</td></tr>
              <tr><td class="p-3 font-bold text-amber-500">Promise.race()</td><td>Mengembalikan hasil pertama yang selesai (sukses / reject).</td></tr>
              <tr><td class="p-3 font-bold text-amber-500">Promise.any()</td><td>Mengembalikan hasil sukses pertama yang selesai (abaikan reject).</td></tr>
              <tr><td class="p-3 font-bold text-amber-500">queueMicrotask()</td><td>Menjadwalkan fungsi di Microtask Queue prioritas tinggi.</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Async Reference Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Uji Promise.any() Sukses Pertama</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    async function ujiAny() {
      const server1 = new Promise((_, reject) => setTimeout(() => reject('Server 1 Sibuk'), 50));
      const server2 = new Promise((resolve) => setTimeout(() => resolve('Server 2 Menjawab! 🚀'), 100));

      const pemenang = await Promise.any([server1, server2]);
      document.getElementById('output').innerHTML = '• Hasil Promise.any: <strong>' + pemenang + '</strong> ✅';
    }

    ujiAny();
  </script>

</body>
</html>`,
    codeExplanation: [
      'Promise.any() mengabaikan penolakan Server 1 dan berhasil mengembalikan respons sukses dari Server 2.'
    ],
    quiz: {
      question: 'Method Promise manakah yang mengembalikan hasil dari Promise pertama yang BERHASIL (fulfilled) dan mengabaikan Promise yang gagal?',
      options: [
        'Promise.any()',
        'Promise.race()',
        'Promise.all()',
        'Promise.first()'
      ],
      answer: 0,
      explanation: '`Promise.any()` mencari hasil sukses pertama dan hanya akan reject jika semua promise dalam array gagal.'
    },
    challenge: {
      title: 'Tantangan: Panggil Promise.any',
      description: 'Lakukan `Promise.any(promises);`.',
      startingCode: `function getFirstSuccess(promises) {\n  return Promise.any(promises);\n}`,
      solution: `function getFirstSuccess(promises) {\n  return Promise.any(promises);\n}`
    }
  }
];
