module.exports = [
  // ── 117. DEBUG INTRO ────────────────────────────────────────────────────
  {
    id: 'debug-intro',
    title: 'Debug Intro',
    chapter: 'JS Debugging',
    chapterId: 'js-chap-debugging',
    order: 117,
    overview: 'Pengenalan filosofi & metodologi debugging modern di JavaScript: membaca pesan error, menelusuri Stack Trace, dan navigasi Chrome DevTools (F12).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS DEBUGGING</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 117 / 126</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🐞 Seni Menemukan & Memperbaiki Bug (Debugging)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Debugging adalah proses sistematis untuk mengidentifikasi, mengisolasi, dan memperbaiki bug atau kesalahan logika di dalam kode program. Browser modern dilengkapi dengan alat inspeksi canggih bernama <strong>Browser Developer Tools (DevTools)</strong> yang dapat dibuka dengan menekan tombol <code>F12</code>.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Debug Intro Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Simulasi Pembacaan Stack Trace</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    function prosesLevel3() {
      // Menghasilkan Error untuk mempelajari Call Stack
      throw new Error('Titik Bug Ditemukan di prosesLevel3()');
    }

    function prosesLevel2() {
      prosesLevel3();
    }

    function prosesLevel1() {
      prosesLevel2();
    }

    try {
      prosesLevel1();
    } catch (e) {
      log += '⚠️ <strong>Pesan:</strong> ' + e.message + '<br><br>';
      log += '📜 <strong>Alur Call Stack (Dari Bawah ke Atas):</strong><br>';
      log += '&nbsp;&nbsp;1. prosesLevel1() memanggil ➔<br>';
      log += '&nbsp;&nbsp;2. prosesLevel2() memanggil ➔<br>';
      log += '&nbsp;&nbsp;3. prosesLevel3() [LOKASI CRASH]';
    }

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Call Stack melacak urutan pemanggilan fungsi dari tingkat terluar (level 1) hingga fungsi paling dalam tempat error meledak (level 3).',
      'Membaca Call Stack dari atas ke bawah adalah langkah pertama dalam menemukan sumber masalah.'
    ],
    quiz: {
      question: 'Tombol pintasan (shortcut) keyboard apakah yang umum digunakan di sebagian besar browser untuk membuka Developer Tools?',
      options: [
        'F5',
        'F12',
        'Ctrl + S',
        'Alt + F4'
      ],
      answer: 1,
      explanation: 'Tombol `F12` (atau `Ctrl + Shift + I` pada Windows / `Cmd + Option + I` pada Mac) membuka Browser DevTools.'
    },
    challenge: {
      title: 'Tantangan: Log Pesan Debug',
      description: 'Gunakan `console.log("Debug Mode Aktif");` untuk mencatat log ke konsol.',
      startingCode: `// Tulis console.log di bawah:\n`,
      solution: `console.log("Debug Mode Aktif");`
    }
  },

  // ── 118. DEBUG CONSOLE ──────────────────────────────────────────────────
  {
    id: 'debug-console',
    title: 'Debug Console',
    chapter: 'JS Debugging',
    chapterId: 'js-chap-debugging',
    order: 118,
    overview: 'Kuasai seluruh API Console canggih: console.table() (menampilkan tabel data), console.time() / console.timeEnd() (pengukur benchmark kecepatan eksekusi), console.group(), dan console.assert().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS DEBUGGING</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 118 / 126</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📊 Console API Tingkat Lanjut</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Jangan hanya menggunakan <code>console.log()</code>. Objek <code>console</code> memiliki beragam method canggih untuk memformat data tabel, mengukur waktu eksekusi kode, dan mengelompokkan pesan log.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Debug Console Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Pengukuran Kecepatan & Format Tabel (Console API)</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. Data Siswa
    const siswa = [
      { id: 1, nama: 'Rahmat', nilai: 95 },
      { id: 2, nama: 'Alex', nilai: 88 }
    ];

    // console.table(siswa) menampilkan tabel interaktif di tab F12 Console
    console.table(siswa);
    log += '1. <strong>console.table(siswa)</strong> berhasil dicetak di Browser Console (Tekan F12)!<br><br>';

    // 2. Mengukur Durasi Eksekusi Loop dengan console.time()
    console.time('Kalkulasi Benchmark');
    let total = 0;
    for (let i = 0; i < 100000; i++) {
      total += i;
    }
    console.timeEnd('Kalkulasi Benchmark');

    log += '2. <strong>console.time()</strong> menghitung durasi 100.000 iterasi.<br><br>';
    log += '3. <strong>console.assert(1 === 2, "Salah!")</strong> mencatat error hanya jika kondisi false.';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'console.table() mengubah array of objects menjadi tabel visual yang sangat rapi di Console DevTools.',
      'console.time("label") dan console.timeEnd("label") mengukur durasi milidetik proses komputasi secara presisi.'
    ],
    quiz: {
      question: 'Method Console manakah yang digunakan untuk memformat dan menampilkan array of objects dalam bentuk tabel kolom di DevTools?',
      options: [
        'console.grid()',
        'console.table()',
        'console.view()',
        'console.list()'
      ],
      answer: 1,
      explanation: 'Method `console.table()` menyajikan data array atau objek dalam format tabel visual dua dimensi.'
    },
    challenge: {
      title: 'Tantangan: Cetak Tabel Console',
      description: 'Gunakan `console.table([{ id: 1 }, { id: 2 }]);`.',
      startingCode: `// Tulis console.table di bawah:\n`,
      solution: `console.table([{ id: 1 }, { id: 2 }]);`
    }
  },

  // ── 119. DEBUG BREAKPOINTS ──────────────────────────────────────────────
  {
    id: 'debug-breakpoints',
    title: 'Debug Breakpoints',
    chapter: 'JS Debugging',
    chapterId: 'js-chap-debugging',
    order: 119,
    overview: 'Kuasai teknik Breakpoints: kata kunci debugger;, Step Over (F10), Step Into (F11), Step Out (Shift+F11), Conditional Breakpoints, dan pengawasan variabel (Watch Expressions).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS DEBUGGING</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 119 / 126</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⏸️ Menghentikan Program Sementara dengan Breakpoints</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Breakpoints memungkinkan Anda menghentikan eksekusi kode tepat di baris tertentu sehingga Anda bisa memeriksa nilai variabel saat itu juga. Anda dapat memasang breakpoint langsung dari tab Sources DevTools atau menulis kata kunci <code>debugger;</code> di dalam kode.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Debug Breakpoints Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Kalkulator Diskon dengan Instruksi debugger;</h2>
  <button onclick="hitungDiskonLive()" style="padding: 10px 18px; background: #0284c7; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer;">
    Uji Debugger (Buka F12 Dulu!)
  </button>
  <div id="output" style="margin-top: 15px; background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    function hitungDiskonLive() {
      let harga = 500000;
      let persen = 20;

      // Jika DevTools (F12) terbuka, eksekusi akan OTOMATIS BERHENTI tepat di baris ini!
      // debugger; 

      let nominalDiskon = harga * (persen / 100);
      let totalAkhir = harga - nominalDiskon;

      document.getElementById('output').innerHTML = 'Total Bayar: Rp ' + totalAkhir.toLocaleString('id-ID');
    }
  </script>

</body>
</html>`,
    codeExplanation: [
      'Kata kunci debugger; bertindak sebagai breakpoint otomatis jika Developer Tools browser sedang terbuka.',
      'Developer dapat menginspeksi nilai variabel harga dan persen sebelum baris perhitungan berikutnya dieksekusi.'
    ],
    quiz: {
      question: 'Kata kunci JavaScript apakah yang secara otomatis memicu browser untuk menghentikan program di breakpoint saat DevTools terbuka?',
      options: [
        'pause;',
        'break;',
        'debugger;',
        'stop;'
      ],
      answer: 2,
      explanation: 'Kata kunci `debugger;` memicu browser untuk menghentikan program pada posisi tersebut layaknya memasang breakpoint manual di DevTools.'
    },
    challenge: {
      title: 'Tantangan: Pasang Instruksi debugger;',
      description: 'Tulis statement `debugger;` di dalam fungsi `function debugMe() { debugger; }`.',
      startingCode: `function debugMe() {\n  // Pasang debugger di bawah:\n}`,
      solution: `function debugMe() {\n  debugger;\n}`
    }
  },

  // ── 120. DEBUG ERRORS ───────────────────────────────────────────────────
  {
    id: 'debug-errors',
    title: 'Debug Errors',
    chapter: 'JS Debugging',
    chapterId: 'js-chap-debugging',
    order: 120,
    overview: 'Strategi melacak dan menuntaskan 3 bug paling umum di JavaScript: "Cannot read properties of undefined", ReferenceError TDZ, dan Call Stack Overflow (rekursi tanpa henti).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS DEBUGGING</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 120 / 126</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎯 Mengatasi "Cannot read property of undefined"</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Error paling terkenal di dunia JavaScript adalah <code>TypeError: Cannot read properties of undefined</code>. Ini terjadi ketika kita mencoba mengakses properti dari objek yang nilainya belum ada. Di ES2020, kita menyelesaikannya dengan <strong>Optional Chaining (<code>?.</code>)</strong>.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Debug Common Errors Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Pencegahan Crash Objek Bersarang (Optional Chaining)</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const dataResponServer = {
      status: 200,
      user: {
        id: 'U-101',
        nama: 'Rahmat'
        // properti alamat belum diisi oleh user
      }
    };

    // Tanpa Optional Chaining: dataResponServer.user.alamat.kota ➔ CRASH!
    // Dengan Optional Chaining (?.) : Mengembalikan undefined tanpa melempar TypeError!
    let kotaUser = dataResponServer.user?.alamat?.kota ?? 'Kota Belum Diisi';

    log += 'Akses properti aman (?.) ➔ <strong>' + kotaUser + '</strong> ✅';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'dataResponServer.user?.alamat?.kota memeriksa keberadaan setiap cabang objek sebelum mencoba membaca properti berikutnya.',
      'Jika salah satu cabang null/undefined, evaluasi berhenti dan menghasilkan undefined dengan aman tanpa melempar TypeError.'
    ],
    quiz: {
      question: 'Operator modern apakah yang digunakan untuk membaca properti bersarang tanpa resiko error "Cannot read properties of undefined"?',
      options: [
        '?. (Optional Chaining)',
        '?? (Nullish Coalescing)',
        '!! (Double Bang)',
        '&&'
      ],
      answer: 0,
      explanation: 'Operator `?.` (*Optional Chaining*) menghentikan evaluasi dan mengembalikan `undefined` jika nilai sebelum tanda titik bernilai `null` atau `undefined`.'
    },
    challenge: {
      title: 'Tantangan: Gunakan Optional Chaining',
      description: 'Baca properti kota dengan aman dari `user?.alamat?.kota;`.',
      startingCode: `const user = {};\n// Baca kota dengan aman di bawah:\nlet kota = user?.alamat?.kota;`,
      solution: `const user = {};\nlet kota = user?.alamat?.kota;`
    }
  },

  // ── 121. DEBUG ASYNC ────────────────────────────────────────────────────
  {
    id: 'debug-async',
    title: 'Debug Async',
    chapter: 'JS Debugging',
    chapterId: 'js-chap-debugging',
    order: 121,
    overview: 'Kuasai teknik debugging kode asinkronus: pelacakan Unhandled Promise Rejection, breakpoint pada fungsi async/await, dan navigasi Async Stack Traces.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS DEBUGGING</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 121 / 126</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚡ Debugging Kode Asinkronus (Async/Await & Promises)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Kode asinkronus berjalan di luar alur utama (Event Loop). Jika sebuah Promise gagal (*rejected*) tanpa memiliki blok <code>.catch()</code> atau <code>try...catch</code>, browser akan melempar peringatan <strong>Unhandled Promise Rejection</strong>.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Debug Async Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Simulasi Fetch Data Asinkronus & Error Boundary</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // Simulasi Request API Asinkronus
    async function ambilDataMateri(idMateri) {
      log += '1. Mengirim request ke Content API server...<br>';
      
      try {
        if (!idMateri) {
          throw new Error('ID Materi tidak boleh kosong (Bad Request 400)');
        }
        
        // Simulasi sukses
        return { id: idMateri, judul: 'Async Debugging Masterclass' };
      } catch (err) {
        log += '⚠️ <strong>[Async Catch]:</strong> ' + err.message + '<br>';
        return null;
      }
    }

    ambilDataMateri('').then(() => {
      log += '2. Alur Promise selesai ditangani dengan aman. ✅';
      document.getElementById('output').innerHTML = log;
    });
  </script>

</body>
</html>`,
    codeExplanation: [
      'Fungsi async selalu membungkus alur kode di dalam try...catch untuk menangkap rejection secara rapi.',
      'Unhandled Rejections dapat ditangkap secara global menggunakan window.addEventListener("unhandledrejection", ...).'
    ],
    quiz: {
      question: 'Event listener global manakah pada browser yang digunakan untuk menangkap seluruh kegagalan Promise yang tidak ditangani (Unhandled Rejections)?',
      options: [
        'window.onerror',
        'window.onpromise',
        'window.addEventListener("unhandledrejection", fn)',
        'document.oncatch'
      ],
      answer: 2,
      explanation: 'Event `unhandledrejection` pada window menangkap seluruh Promise yang di-reject tanpa blok `.catch()`.'
    },
    challenge: {
      title: 'Tantangan: Tangani Error Async dengan try/catch',
      description: 'Lengkapi blok `async function fetchData() { try {} catch(e) {} }`.',
      startingCode: `async function fetchData() {\n  try {\n  } catch (e) {\n  }\n}`,
      solution: `async function fetchData() {\n  try {\n  } catch (e) {\n  }\n}`
    }
  },

  // ── 122. DEBUG REFERENCE ────────────────────────────────────────────────
  {
    id: 'debug-reference',
    title: 'Debug Reference',
    chapter: 'JS Debugging',
    chapterId: 'js-chap-debugging',
    order: 122,
    overview: 'Kamus referensi lengkap seluruh shortcut keyboard Browser DevTools dan cheatsheet method debugging objek Console di JavaScript.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS DEBUGGING</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 122 / 126</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📚 Kamus Pintasan Debugging & DevTools</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Tabel berikut merangkum tombol pintasan navigasi breakpoints di browser.
          </p>
        </div>

        <div class="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-xl text-xs">
          <table class="w-full text-left">
            <thead class="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white">
              <tr>
                <th class="p-3">Shortcut</th>
                <th class="p-3">Aksi DevTools</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-800 font-mono text-slate-600 dark:text-slate-300">
              <tr><td class="p-3 text-amber-500 font-bold">F8 / Ctrl + \\</td><td>Resume eksekusi script sampai breakpoint berikutnya.</td></tr>
              <tr><td class="p-3 text-amber-500 font-bold">F10</td><td>Step Over: Jalankan baris berikutnya tanpa masuk ke dalam fungsi.</td></tr>
              <tr><td class="p-3 text-amber-500 font-bold">F11</td><td>Step Into: Masuk ke dalam detail kode fungsi yang dipanggil.</td></tr>
              <tr><td class="p-3 text-amber-500 font-bold">Shift + F11</td><td>Step Out: Keluar dari fungsi aktif saat ini dan kembali ke pemanggil.</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Debug Reference Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Rangkuman Cheatsheet Console API</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    log += '<strong>Cheatsheet Console API:</strong><br>';
    log += '• <code>console.log()</code>: Informasi umum.<br>';
    log += '• <code>console.warn()</code>: Peringatan kuning.<br>';
    log += '• <code>console.error()</code>: Pesan error merah.<br>';
    log += '• <code>console.table()</code>: Format tabel 2D.<br>';
    log += '• <code>console.clear()</code>: Bersihkan layar konsol.';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'console.warn() mencetak log dengan warna kuning dan ikon peringatan.',
      'console.error() mencetak log dengan warna merah dan menyertakan rekaman stack trace.'
    ],
    quiz: {
      question: 'Tombol keyboard apakah di DevTools yang digunakan untuk "Step Over" (melangkah ke baris berikutnya tanpa masuk ke dalam fungsi)?',
      options: [
        'F10',
        'F11',
        'F8',
        'F5'
      ],
      answer: 0,
      explanation: 'Tombol `F10` digunakan untuk *Step Over* ke statement berikutnya.'
    },
    challenge: {
      title: 'Tantangan: Cetak Warning Console',
      description: 'Gunakan `console.warn("Peringatan Sistem");`.',
      startingCode: `// Tulis console.warn di bawah:\n`,
      solution: `console.warn("Peringatan Sistem");`
    }
  }
];
