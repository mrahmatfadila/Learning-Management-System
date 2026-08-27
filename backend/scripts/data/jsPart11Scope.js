module.exports = [
  // ── 57. JS SCOPE ────────────────────────────────────────────────────────
  {
    id: 'js-scope',
    title: 'JS Scope',
    chapter: 'JS Scope',
    chapterId: 'js-chap-scope',
    order: 57,
    overview: 'Kuasai konsep cakupan (Scope) di JavaScript: Global Scope, Function/Local Scope, Block Scope, dan Lexical Scope yang menentukan keterjangkauan akses variabel dalam program.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS SCOPE</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 57 / 74</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌐 Memahami Cakupan Variabel (Scope)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Scope menentukan di mana sebuah variabel dapat diakses atau dimodifikasi dalam kode Anda. JavaScript memiliki 3 jenis scope utama: <strong>Global Scope</strong>, <strong>Function Scope</strong>, dan <strong>Block Scope</strong>.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
            <strong class="text-amber-500 text-sm">1. Global Scope</strong>
            <p class="text-slate-600 dark:text-slate-400">Variabel dideklarasikan di luar fungsi/blok; dapat diakses dari mana saja di seluruh aplikasi.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
            <strong class="text-amber-500 text-sm">2. Function Scope</strong>
            <p class="text-slate-600 dark:text-slate-400">Variabel dideklarasikan di dalam sebuah fungsi; hanya hidup dan dapat dibaca di dalam fungsi tersebut.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
            <strong class="text-amber-500 text-sm">3. Block Scope (ES6)</strong>
            <p class="text-slate-600 dark:text-slate-400">Variabel <code>let</code> & <code>const</code> yang dideklarasikan di dalam kurung kurawal <code>{ }</code> terisolasi di dalam blok itu saja.</p>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Scope Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Demonstrasi Global vs Local vs Block Scope</h2>
  <div id="output" style="background: #f8fafc; border: 1px solid #cbd5e1; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. Global Scope
    let namaAplikasi = 'LMS DevGrow';

    function hitungNilai() {
      // 2. Function / Local Scope
      let skorLokal = 95;
      log += 'Di dalam fungsi: Bisa akses Global (' + namaAplikasi + ') & Lokal (' + skorLokal + ')<br>';
    }

    hitungNilai();
    log += 'Di luar fungsi: Akses Global (' + namaAplikasi + ') ✅<br>';

    // 3. Block Scope
    {
      let kunciRahasia = 'TOKEN-12345';
      log += 'Di dalam Block Scope {}: ' + kunciRahasia + ' ✅<br>';
    }

    log += 'Di luar Block Scope: kunciRahasia tidak bisa diakses dari luar (ReferenceError)!';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'namaAplikasi bersifat Global sehingga bisa dibaca baik dari dalam fungsi hitungNilai maupun di luar.',
      'skorLokal bersifat Function Scope dan akan terhapus dari memori saat fungsi selesai dieksekusi.',
      'kunciRahasia dideklarasikan dengan let di dalam { ... } sehingga terisolasi murni di dalam block scope tersebut.'
    ],
    quiz: {
      question: 'Manakah jenis variabel yang memiliki Block Scope di JavaScript modern (ES6)?',
      options: [
        'Hanya var',
        'let dan const',
        'Semua jenis variabel',
        'Hanya variabel tanpa keyword'
      ],
      answer: 1,
      explanation: 'Kata kunci `let` dan `const` memiliki Block Scope sejati di mana variabel hanya dapat diakses di dalam blok kurung kurawal `{ ... }` tempat ia dideklarasikan.'
    },
    challenge: {
      title: 'Tantangan: Isolasi Variabel dalam Block',
      description: 'Buat block scope `{ let angka = 50; }` dan pastikan variabel let tersebut berada di dalam kurung kurawal.',
      startingCode: `// Tulis block scope di bawah:\n{\n  let angka = 50;\n}`,
      solution: `{\n  let angka = 50;\n}`
    }
  },

  // ── 58. JS CODE BLOCKS ──────────────────────────────────────────────────
  {
    id: 'js-code-blocks',
    title: 'JS Code Blocks',
    chapter: 'JS Scope',
    chapterId: 'js-chap-scope',
    order: 58,
    overview: 'Pahami peran kurung kurawal {} sebagai pembatas Code Blocks: mengelompokkan beberapa statement, menciptakan scope mandiri, dan mencegah tabrakan nama variabel.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS SCOPE</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 58 / 74</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧱 Blok Kode Mandiri (Standalone Code Blocks)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Code Blocks adalah sekumpulan statement yang dibungkus di dalam sepasang kurung kurawal <code>{ ... }</code>. Selain digunakan pada <code>if</code>, <code>for</code>, dan fungsi, Anda juga bisa membuat <strong>Standalone Block</strong> untuk mengisolasi variabel sementara tanpa mencemari scope di luar.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Code Blocks Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Isolasi Variabel dengan Standalone Code Blocks</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    let totalHarga = 100000;
    log += 'Total Harga Awal: Rp ' + totalHarga.toLocaleString('id-ID') + '<br><br>';

    // Standalone Code Block 1: Hitung Biaya Tambahan Sementara
    {
      let biayaAdmin = 2500;
      let ongkir = 15000;
      totalHarga += biayaAdmin + ongkir;
      log += 'Di dalam Blok 1: Biaya admin (' + biayaAdmin + ') & ongkir (' + ongkir + ') ditambahkan.<br>';
    }

    // Variabel biayaAdmin dan ongkir sudah hancur di sini (memori bersih)
    log += '<br>Total Harga Akhir: <strong>Rp ' + totalHarga.toLocaleString('id-ID') + '</strong>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Kurung kurawal { ... } membentuk Standalone Code Block.',
      'Variabel biayaAdmin dan ongkir hanya hidup saat blok tersebut dieksekusi.',
      'Setelah keluar dari blok, variabel sementara tersebut otomatis dibersihkan oleh Garbage Collector, menjaga memori tetap efisien.'
    ],
    quiz: {
      question: 'Karakter apa yang digunakan untuk membungkus sebuah Code Block di JavaScript?',
      options: [
        '( )',
        '[ ]',
        '{ }',
        '< >'
      ],
      answer: 2,
      explanation: 'Kurung kurawal `{ }` digunakan untuk membungkus serangkaian statement menjadi satu Code Block.'
    },
    challenge: {
      title: 'Tantangan: Buat Blok Penghitungan',
      description: 'Bungkus deklarasi `let temp = 100;` di dalam blok kurung kurawal `{ let temp = 100; }`.',
      startingCode: `// Tulis standalone block di bawah:\n`,
      solution: `{\n  let temp = 100;\n}`
    }
  },

  // ── 59. JS HOISTING ─────────────────────────────────────────────────────
  {
    id: 'js-hoisting',
    title: 'JS Hoisting',
    chapter: 'JS Scope',
    chapterId: 'js-chap-scope',
    order: 59,
    overview: 'Kuasai perilaku Hoisting di JavaScript: pengangkatan deklarasi ke puncak scope saat fase kompilasi, perbedaan hoisting var vs let/const, serta Temporal Dead Zone (TDZ).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS SCOPE</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 59 / 74</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏗️ Mekanisme JavaScript Hoisting & TDZ</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Hoisting adalah perilaku default JavaScript di mana seluruh deklarasi variabel dan fungsi "diangkat" (*hoisted*) ke bagian paling atas dari scope-nya sebelum kode benar-benar dieksekusi.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
            <strong class="text-amber-500 text-sm">Hoisting pada var</strong>
            <p class="text-slate-600 dark:text-slate-400">Di-hoist dan diinisialisasi otomatis dengan nilai <code>undefined</code> (tidak melempar error jika diakses sebelum deklarasi).</p>
          </div>
          <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
            <strong class="text-amber-500 text-sm">Hoisting pada let & const (TDZ)</strong>
            <p class="text-slate-600 dark:text-slate-400">Di-hoist tetapi <strong>TIDAK diinisialisasi</strong>. Berada di <em>Temporal Dead Zone</em> dan akan melempar <code>ReferenceError</code> jika diakses sebelum baris deklarasinya.</p>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Hoisting Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Demonstrasi Perilaku Hoisting</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. Function Hoisting (Aman & Berjalan Sempurna)
    log += '1. Panggil fungsi sebelum deklarasi: ' + getSalam() + '<br><br>';
    function getSalam() {
      return 'Halo dari fungsi yang di-hoist! ✨';
    }

    // 2. var Hoisting (Bernilai undefined sebelum deklarasi)
    log += '2. Akses var sebelum baris deklarasi: ' + typeof x + ' (Nilai: ' + x + ')<br>';
    var x = 100;
    log += '   Akses var setelah inisialisasi: ' + x + '<br><br>';

    // 3. let & const TDZ (Temporal Dead Zone)
    log += '3. let dan const aman karena memicu ReferenceError jika diakses di TDZ.';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'getSalam() bisa dipanggil di baris paling atas karena fungsi deklarasi di-hoist sepenuhnya bersama badan fungsinya.',
      'var x di-hoist deklarasinya saja ke atas, sehingga x bernilai undefined saat dibaca sebelum baris var x = 100.',
      'let dan const memiliki perlindungan Temporal Dead Zone (TDZ) untuk mencegah bug membaca variabel yang belum siap.'
    ],
    quiz: {
      question: 'Apa nilai yang dikembalikan jika kita mengakses variabel var sebelum baris deklarasinya dieksekusi?',
      options: [
        'ReferenceError',
        'undefined',
        'null',
        '0'
      ],
      answer: 1,
      explanation: 'Variabel yang dideklarasikan dengan `var` di-hoist dan diinisialisasi secara otomatis dengan nilai `undefined`.'
    },
    challenge: {
      title: 'Tantangan: Manfaatkan Function Hoisting',
      description: 'Panggil fungsi `pesan()` sebelum baris deklarasi fungsinya `function pesan() { return "OK"; }`.',
      startingCode: `// Panggil fungsi di sini:\nlet teks = pesan();\nfunction pesan() {\n  return "OK";\n}`,
      solution: `let teks = pesan();\nfunction pesan() {\n  return "OK";\n}`
    }
  },

  // ── 60. JS VAR/LET/CONST ────────────────────────────────────────────────
  {
    id: 'js-var-let-const',
    title: 'JS var/let/const',
    chapter: 'JS Scope',
    chapterId: 'js-chap-scope',
    order: 60,
    overview: 'Matriks perbandingan komparatif mendalam antara var, let, dan const dalam hal Scope, Re-declaration, Re-assignment, Hoisting, dan Best Practice industri modern.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS SCOPE</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 60 / 74</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚖️ Matriks Perbandingan: var vs let vs const</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Pedoman industri modern (ES6+): <strong>Gunakan <code>const</code> sebagai pilihan utama default</strong>. Jika nilai variabel perlu diubah/reassign, gunakan <code>let</code>. Hindari penggunaan <code>var</code> pada kode baru.
          </p>
        </div>

        <div class="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-xl text-xs">
          <table class="w-full text-left">
            <thead class="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white">
              <tr>
                <th class="p-3">Fitur</th>
                <th class="p-3">var (Legacy)</th>
                <th class="p-3">let (Modern)</th>
                <th class="p-3">const (Modern)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-800 font-mono text-slate-600 dark:text-slate-300">
              <tr><td class="p-3 font-bold">Scope</td><td>Function Scope</td><td>Block Scope {}</td><td>Block Scope {}</td></tr>
              <tr><td class="p-3 font-bold">Re-declare</td><td>Bisa (Beresiko)</td><td>Tidak Boleh (Error)</td><td>Tidak Boleh (Error)</td></tr>
              <tr><td class="p-3 font-bold">Re-assign</td><td>Bisa</td><td>Bisa</td><td>Tidak Boleh (Tetap)</td></tr>
              <tr><td class="p-3 font-bold">Hoisting</td><td>Di-hoist (undefined)</td><td>Di-hoist (TDZ Error)</td><td>Di-hoist (TDZ Error)</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS var vs let vs const Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Praktik Best Practice Deklarasi Variabel</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. Gunakan const untuk data tetap & konfigurasi
    const NAMA_LMS = 'Antigravity LMS';
    const TARIF_PPN = 0.11;

    // 2. Gunakan let untuk variabel counter/akumulator yang nilainya berubah
    let totalTransaksi = 0;
    for (let i = 1; i <= 3; i++) {
      totalTransaksi += 50000;
    }

    log += 'Nama Platform (const): ' + NAMA_LMS + '<br>';
    log += 'Tarif PPN (const): ' + (TARIF_PPN * 100) + '%<br>';
    log += 'Total Akumulasi (let): Rp ' + totalTransaksi.toLocaleString('id-ID');

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'const digunakan untuk nilai konfigurasi NAMA_LMS dan TARIF_PPN agar tidak bisa diubah tanpa sengaja.',
      'let digunakan untuk totalTransaksi dan counter loop i karena nilainya terus bertambah.',
      'Pola ini menjamin kode bebas bug mutasi yang tidak diinginkan.'
    ],
    quiz: {
      question: 'Manakah pedoman deklarasi variabel yang menjadi standar best practice di JavaScript modern?',
      options: [
        'Selalu gunakan var di semua tempat',
        'Gunakan const secara default, gunakan let jika nilai berubah, dan tinggalkan var',
        'Gunakan let untuk semua jenis data',
        'Jangan gunakan keyword deklarasi sama sekali'
      ],
      answer: 1,
      explanation: 'Standar industri JavaScript modern menganjurkan: Gunakan `const` sebagai default utama, gunakan `let` hanya jika nilainya perlu di-reassign, dan hindari penggunaan `var`.'
    },
    challenge: {
      title: 'Tantangan: Deklarasi Const dan Let Sesuai Best Practice',
      description: 'Deklarasikan konstanta `const API_URL = "https://api.com";` dan variabel counter `let counter = 1;`.',
      startingCode: `// Tulis deklarasi const dan let di bawah:\n`,
      solution: `const API_URL = "https://api.com";\nlet counter = 1;`
    }
  },

  // ── 61. JS STRICT MODE ──────────────────────────────────────────────────
  {
    id: 'js-strict-mode',
    title: 'JS Strict Mode',
    chapter: 'JS Scope',
    chapterId: 'js-chap-scope',
    order: 61,
    overview: 'Kuasai direktif "use strict": mengaktifkan mode ketat JavaScript untuk menghentikan silent errors, melarang variabel tanpa deklarasi, dan mengamankan kode produksi.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS SCOPE</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 61 / 74</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔒 Menulis Kode Bersih dengan "use strict"</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Strict Mode diperkenalkan di ECMAScript 5 (ES5) untuk memberlakukan aturan penulisan kode yang lebih ketat. Dengan menambahkan <code>"use strict";</code> di awal script atau fungsi, JavaScript akan melempar error nyata pada kesalahan yang sebelumnya diabaikan secara diam-diam (*silent bugs*).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Strict Mode Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Pengujian JavaScript Strict Mode</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    function ujiKodeKetat() {
      'use strict'; // Aktifkan Strict Mode di dalam fungsi ini
      
      try {
        // Kesalahan: Mengisi variabel tanpa deklarasi let/const/var
        // angkaTanpaDeklarasi = 50; // Akan memicu ReferenceError di Strict Mode!
        
        let angkaSah = 100;
        log += 'Kode berjalan dalam Strict Mode yang aman: ' + angkaSah + ' ✅';
      } catch (err) {
        log += 'Strict Mode Error: ' + err.message;
      }
    }

    ujiKodeKetat();
    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      '"use strict"; di awal fungsi mengaktifkan mode ketat.',
      'Di mode non-strict biasa, menulis angka = 50 otomatis menciptakan variabel global liar.',
      'Di Strict Mode, tindakan tersebut langsung memicu ReferenceError untuk melindungi arsitektur kode.'
    ],
    quiz: {
      question: 'Bagaimana cara mengaktifkan JavaScript Strict Mode di dalam file script atau fungsi?',
      options: [
        'strict: true;',
        '#strict-mode',
        '"use strict";',
        'enableStrictMode()'
      ],
      answer: 2,
      explanation: 'Strict Mode diaktifkan dengan menambahkan string literal `"use strict";` di baris paling awal dari file script atau fungsi.'
    },
    challenge: {
      title: 'Tantangan: Deklarasikan Strict Mode',
      description: 'Tulis direktif `"use strict";` di baris pertama fungsi `cek()`.',
      startingCode: `function cek() {\n  // Tulis direktif use strict di bawah:\n  let ok = true;\n  return ok;\n}`,
      solution: `function cek() {\n  "use strict";\n  let ok = true;\n  return ok;\n}`
    }
  }
];
