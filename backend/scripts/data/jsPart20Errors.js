module.exports = [
  // ── 113. JS ERRORS INTRO ────────────────────────────────────────────────
  {
    id: 'js-errors-intro',
    title: 'JS Errors Intro',
    chapter: 'JS Errors',
    chapterId: 'js-chap-errors',
    order: 113,
    overview: 'Pengenalan Exception Handling di JavaScript: anatomi error runtime, alur interupsi eksekusi kode saat terjadi kesalahan, dan pentingnya penanganan error secara anggun (Graceful Degradation).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS ERRORS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 113 / 126</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛑 Penanganan Error di JavaScript (Exception Handling)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Ketika sebuah error terjadi saat program berjalan (*runtime error*), JavaScript akan menghentikan eksekusi script seketika (*crash*). Tanpa mekanisme penanganan error yang baik, seluruh aplikasi web akan membeku.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Errors Intro Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Simulasi Crash vs Penanganan Error Anggun</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    log += '1. Memulai proses aplikasi...<br>';

    try {
      // Baris beresiko: Memanggil fungsi yang belum pernah dibuat
      fungsiYangTidakAda();
    } catch (error) {
      log += '2. ⚠️ <strong>Error Tertangkap Aman:</strong> ' + error.message + '<br>';
    }

    log += '3. Aplikasi tetap hidup dan melanjutkan eksekusi berikutnya! ✅';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Blok try { ... } membungkus kode beresiko tinggi.',
      'catch (error) menangkap exception secara anggun sehingga mencegah seluruh aplikasi browser crash.',
      'Baris ke-3 tetap dapat dieksekusi dengan normal.'
    ],
    quiz: {
      question: 'Apa dampak yang terjadi pada eksekusi kode JavaScript jika terjadi Runtime Error tanpa dibungkus blok penanganan error?',
      options: [
        'JavaScript otomatis mengabaikannya dan lanjut ke baris berikutnya',
        'Eksekusi program terhenti seketika (Crash/Halt)',
        'Browser otomatis me-refresh halaman',
        'Variabel otomatis berubah menjadi null'
      ],
      answer: 1,
      explanation: 'Uncaught Exception akan menghentikan alur eksekusi script JavaScript saat itu juga.'
    },
    challenge: {
      title: 'Tantangan: Tangkap Error dengan try...catch',
      description: 'Bungkus pemanggilan fungsi yang beresiko di dalam blok `try { uji(); } catch(e) {}`.',
      startingCode: `// Tulis try...catch di bawah:\n`,
      solution: `try {\n  uji();\n} catch (e) {}\n`
    }
  },

  // ── 114. JS ERRORS SILENT ───────────────────────────────────────────────
  {
    id: 'js-errors-silent',
    title: 'JS Errors Silent',
    chapter: 'JS Errors',
    chapterId: 'js-chap-errors',
    order: 114,
    overview: 'Pahami bahaya Silent Errors di JavaScript: kesalahan logika yang tidak melempar error nyata tetapi merusak data (NaN propagation, undefined fallback, type coercion bugs).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS ERRORS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 114 / 126</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">👻 Bahaya Silent Errors (Bugs Tak Terlihat)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Silent errors lebih berbahaya daripada error crash biasa karena program tetap berjalan tanpa melempar error, namun menghasilkan data yang rusak (seperti menyimpan nilai <code>NaN</code> atau <code>undefined</code> ke database).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Silent Errors Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Pencegahan Propagasi Nilai Rusak (Silent Bugs)</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // Silent Bug: Akses properti typo pada objek
    const user = { nama: 'Rahmat', saldo: 500000 };
    let potongan = user.diskon; // Typo: diskon tidak ada (bernilai undefined)

    // Perhitungan kalkulasi diam-diam rusak menjadi NaN
    let totalBayar = user.saldo - potongan;
    log += '• Total Bayar Tanpa Guard (Silent NaN): <strong>' + totalBayar + '</strong> ⚠️<br><br>';

    // Mitigasi dengan Nullish Coalescing (??) & Validasi
    let potonganAman = user.diskon ?? 0;
    let totalAman = user.saldo - potonganAman;
    log += '• Total Bayar Terlindungi (?? 0): <strong>Rp ' + totalAman.toLocaleString('id-ID') + '</strong> ✅';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'user.saldo - undefined menghasilkan NaN tanpa melempar error apapun (Silent Error).',
      'Operator Nullish Coalescing (user.diskon ?? 0) memberikan nilai cadangan 0 jika properti bernilai undefined atau null.'
    ],
    quiz: {
      question: 'Operator modern apakah yang digunakan untuk memberikan nilai default fallback jika suatu variabel bernilai null atau undefined guna mencegah silent errors?',
      options: [
        '&&',
        '||',
        '?? (Nullish Coalescing)',
        '?:'
      ],
      answer: 2,
      explanation: 'Operator `??` (*Nullish Coalescing*) secara khusus memeriksa apakah nilai sebelah kiri bernilai `null` atau `undefined` dan memberikan nilai cadangan.'
    },
    challenge: {
      title: 'Tantangan: Cegah Undefined dengan Nullish Coalescing',
      description: 'Gunakan `val ?? 0` untuk menetapkan nilai cadangan pada `let nilai = undefined ?? 0;`.',
      startingCode: `// Tetapkan nilai aman di bawah:\nlet nilai = undefined ?? 0;`,
      solution: `let nilai = undefined ?? 0;`
    }
  },

  // ── 115. JS ERROR STATEMENTS ────────────────────────────────────────────
  {
    id: 'js-error-statements',
    title: 'JS Error Statements',
    chapter: 'JS Errors',
    chapterId: 'js-chap-errors',
    order: 115,
    overview: 'Kuasai seluruh blok statement penanganan error: try...catch...finally, melempar custom exception dengan kata kunci throw, dan pola re-throwing error.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS ERRORS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 115 / 126</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛡️ Blok try...catch...finally & Kata Kunci throw</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Kata kunci <code>throw</code> memungkinkan Anda melempar error kustom secara manual. Blok <code>finally</code> <strong>selalu dieksekusi tanpa kecuali</strong> (baik saat terjadi error maupun saat sukses), ideal untuk membersihkan koneksi atau menutup loading spinner.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Error Statements Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Validasi Form dengan throw & finally Cleanup</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    function verifikasiUmur(umur) {
      let loadingSpinner = true;
      log += '1. [Loading ON] Memulai verifikasi...<br>';

      try {
        if (typeof umur !== 'number') {
          throw new TypeError('Input umur harus berupa angka!');
        }
        if (umur < 17) {
          throw new RangeError('Usia minimal harus 17 tahun ke atas!');
        }
        log += '2. ✅ Pendaftaran Berhasil untuk usia ' + umur + ' tahun.<br>';
      } catch (err) {
        log += '2. ❌ <strong>[' + err.name + ']</strong>: ' + err.message + '<br>';
      } finally {
        loadingSpinner = false; // Selalu dijalankan untuk cleanup!
        log += '3. [Loading OFF] Blok finally selesai dibersihkan. ✨<br><br>';
      }
    }

    verifikasiUmur('dua puluh'); // Trigger TypeError
    verifikasiUmur(21); // Sukses

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'throw new TypeError(...) melempar error buatan dengan tipe yang tepat.',
      'Blok finally selalu dijalankan di akhir untuk mematikan loading spinner dan merapikan resource memori.'
    ],
    quiz: {
      question: 'Kapan statement di dalam blok finally{} akan dieksekusi oleh JavaScript?',
      options: [
        'Hanya ketika terjadi error di blok try',
        'Hanya ketika tidak ada error sama sekali',
        'Selalu dieksekusi baik terjadi error ataupun tidak',
        'Hanya ketika kata kunci throw dipanggil'
      ],
      answer: 2,
      explanation: 'Blok `finally` dijamin akan selalu dieksekusi dalam kondisi apapun setelah blok `try` dan `catch` selesai.'
    },
    challenge: {
      title: 'Tantangan: Lempar Error dengan throw',
      description: 'Lengkapi fungsi untuk melempar error jika nilai x negatif: `if (x < 0) throw new Error("Negatif");`.',
      startingCode: `function cek(x) {\n  // Lempar error jika x < 0 di bawah:\n}`,
      solution: `function cek(x) {\n  if (x < 0) throw new Error("Negatif");\n}`
    }
  },

  // ── 116. JS ERROR OBJECT ────────────────────────────────────────────────
  {
    id: 'js-error-object',
    title: 'JS Error Object',
    chapter: 'JS Errors',
    chapterId: 'js-chap-errors',
    order: 116,
    overview: 'Kuasai properti objek Error bawaan (name, message, stack), jenis error standar (TypeError, ReferenceError, SyntaxError, RangeError, URIError), dan pembuatan Custom Error Class turunan.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS ERRORS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 116 / 126</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧩 Objek Error & Custom Error Classes</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Objek <code>Error</code> menyimpan informasi lengkap mengenai penyebab error (<code>message</code>), nama tipe (<code>name</code>), dan jejak baris file tempat error terjadi (<code>stack</code>).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Error Object Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Pembuatan Custom Error Class untuk API LMS</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // Membuat Custom Error Class dengan HTTP Status Code
    class DatabaseError extends Error {
      constructor(pesan, statusCode = 500) {
        super(pesan);
        this.name = 'DatabaseError';
        this.statusCode = statusCode;
      }
    }

    try {
      throw new DatabaseError('Koneksi PostgreSQL Timeout', 504);
    } catch (err) {
      log += '• Nama Error: <strong>' + err.name + '</strong><br>';
      log += '• Pesan: ' + err.message + '<br>';
      log += '• HTTP Status: <strong>' + err.statusCode + '</strong><br><br>';
      log += '• Apakah instanceof Error? ' + (err instanceof Error) + ' ✅';
    }

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'class DatabaseError extends Error mewarisi properti bawaan Error dan menambahkan metadata kustom statusCode.',
      'super(pesan) memanggil konstruktor induk Error agar properti message dan stack terisi otomatis.'
    ],
    quiz: {
      question: 'Properti objek Error manakah yang berisi jejak urutan baris kode dan file tempat error pertama kali terjadi?',
      options: [
        'error.trace',
        'error.stack',
        'error.history',
        'error.line'
      ],
      answer: 1,
      explanation: 'Properti `error.stack` berisi rekaman jejak panggilan tumpukan (*stack trace*) dari baris kode tempat terjadinya error.'
    },
    challenge: {
      title: 'Tantangan: Buat Objek Error Baru',
      description: 'Buat objek error `const err = new Error("Data tidak valid");`.',
      startingCode: `// Buat objek error di bawah:\n`,
      solution: `const err = new Error("Data tidak valid");`
    }
  }
];
