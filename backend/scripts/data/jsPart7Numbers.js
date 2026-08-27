module.exports = [
  // ── 34. JS NUMBERS ──────────────────────────────────────────────────────
  {
    id: 'js-numbers',
    title: 'JS Numbers',
    chapter: 'JS Numbers',
    chapterId: 'js-chap-numbers',
    order: 34,
    overview: 'Kuasai konsep tipe data numerik JavaScript: standar IEEE 754 64-bit Floating Point, notasi ilmiah (e), presisi floating point (0.1 + 0.2), nilai khusus NaN (Not-a-Number), dan Infinity.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS NUMBERS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 34 / 39</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔢 Tipe Data Angka & Presisi Floating Point</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Di JavaScript, semua angka disimpan dalam format <strong>64-bit Floating Point (IEEE 754)</strong>. Berbeda dengan bahasa lain yang membedakan <code>int</code>, <code>float</code>, <code>double</code>, di JavaScript semuanya adalah tipe <strong>Number</strong>.
          </p>
        </div>

        <div class="p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 rounded-xl space-y-1.5 text-xs">
          <strong class="text-amber-900 dark:text-amber-300 text-sm">⚠️ Fenomena Presisi Desimal (0.1 + 0.2):</strong>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
            Karena representasi biner pecahan floating point, <code>0.1 + 0.2</code> menghasilkan <code>0.30000000000000004</code>. Untuk transaksi finansial, selalu gunakan pembulatan dengan <code>toFixed(2)</code> atau simpan dalam satuan sen terkecil.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Numbers Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Demonstrasi Angka Khusus & Presisi JS</h2>
  <div id="output" style="background: #f8fafc; border: 1px solid #cbd5e1; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. Notasi Eksponensial (e)
    let populasi = 2.5e6; // 2.5 x 10^6 = 2.500.000
    log += 'Notasi 2.5e6: ' + populasi.toLocaleString('id-ID') + '<br>';

    // 2. Masalah Presisi Pecahan
    let a = 0.1, b = 0.2;
    log += '0.1 + 0.2 Asli ➔ ' + (a + b) + '<br>';
    log += '0.1 + 0.2 Dibulatkan (toFixed(2)) ➔ ' + (a + b).toFixed(2) + '<br><br>';

    // 3. Nilai Khusus: Infinity (Pembagian dengan Nol)
    let bagiNol = 100 / 0;
    log += '100 / 0 ➔ <strong>' + bagiNol + '</strong><br>';

    // 4. Nilai Khusus: NaN (Not a Number)
    let operasiRusak = 'Halo' / 5;
    log += '"Halo" / 5 ➔ <strong style="color:red">' + operasiRusak + '</strong><br>';
    log += 'isNaN(operasiRusak)? ➔ ' + isNaN(operasiRusak);

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      '2.5e6 adalah notasi ilmiah yang merepresentasikan 2.500.000.',
      'toFixed(2) mengembalikan format string dengan tepat 2 angka di belakang koma untuk memperbaiki ketidakakuratan biner pecahan.',
      'Pembagian angka positif dengan nol di JavaScript menghasilkan nilai khusus Infinity tanpa melempar error crash.',
      'Operasi aritmatika pada string non-angka menghasilkan NaN (Not a Number).'
    ],
    quiz: {
      question: 'Fungsi global manakah yang digunakan untuk memeriksa apakah suatu nilai adalah Not-a-Number (NaN)?',
      options: [
        'isFinite()',
        'isNaN()',
        'isNumber()',
        'isInteger()'
      ],
      answer: 1,
      explanation: 'Fungsi `isNaN(value)` atau `Number.isNaN(value)` digunakan untuk menguji apakah nilai tersebut merupakan NaN.'
    },
    challenge: {
      title: 'Tantangan: Bulatkan Angka Desimal',
      description: 'Gunakan method `(0.1 + 0.2).toFixed(1)` untuk membulatkan hasil penjumlahan desimal menjadi 1 digit di belakang koma.',
      startingCode: `let hasil = (0.1 + 0.2);\n// Bulatkan ke 1 angka di belakang koma:\nlet desimal = "";`,
      solution: `let hasil = (0.1 + 0.2);\nlet desimal = (0.1 + 0.2).toFixed(1);`
    }
  },

  // ── 35. JS NUMBER METHODS ───────────────────────────────────────────────
  {
    id: 'js-number-methods',
    title: 'JS Number Methods',
    chapter: 'JS Numbers',
    chapterId: 'js-chap-numbers',
    order: 35,
    overview: 'Kuasai method objek Number dan fungsi parsing global: toString(), toFixed(), toPrecision(), Number(), parseInt(), dan parseFloat().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS NUMBERS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 35 / 39</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚙️ Method Konversi & Format Angka</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Untuk mengonversi teks input pengguna menjadi angka murni atau memformat angka ke dalam format desimal tertentu, JavaScript menyediakan method instan dan fungsi konverter global.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
            <strong class="text-amber-500">Number(str)</strong>
            <p class="text-slate-600 dark:text-slate-400">Konversi nilai apa pun menjadi angka.</p>
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
            <strong class="text-amber-500">parseInt(str)</strong>
            <p class="text-slate-600 dark:text-slate-400">Mengekstrak bilangan bulat dari teks.</p>
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
            <strong class="text-amber-500">parseFloat(str)</strong>
            <p class="text-slate-600 dark:text-slate-400">Mengekstrak bilangan desimal dari teks.</p>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Number Methods</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Praktik Konversi Nilai Input Form</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. parseInt() - Mengabaikan karakter satuan di belakang
    let inputLebar = '350px';
    let lebarAngka = parseInt(inputLebar);
    log += 'parseInt("350px") ➔ <strong>' + lebarAngka + '</strong> (Tipe: ' + typeof lebarAngka + ')<br>';

    // 2. parseFloat() - Mendukung titik desimal
    let inputBerat = '74.85 kg';
    let beratAngka = parseFloat(inputBerat);
    log += 'parseFloat("74.85 kg") ➔ <strong>' + beratAngka + '</strong><br><br>';

    // 3. toFixed(digit) - Format desimal
    let nilaiRasio = 12.345678;
    log += 'nilaiRasio.toFixed(2) ➔ "' + nilaiRasio.toFixed(2) + '"<br>';
    log += 'nilaiRasio.toPrecision(4) ➔ "' + nilaiRasio.toPrecision(4) + '"';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'parseInt("350px") secara cerdas membaca angka 350 dan membuang teks satuan "px".',
      'parseFloat("74.85 kg") mengekstrak angka desimal 74.85.',
      'toPrecision(4) membatasi panjang total digit angka yang bermakna menjadi 4 digit.'
    ],
    quiz: {
      question: 'Berapakah hasil dari pemanggilan parseInt("42.89 meter") di JavaScript?',
      options: [
        '42.89',
        '42',
        'NaN',
        '"42"'
      ],
      answer: 1,
      explanation: '`parseInt()` hanya mengekstrak bagian bilangan bulat (integer) paling depan yang ditemukannya, sehingga menghasilkan angka 42.'
    },
    challenge: {
      title: 'Tantangan: Parsing Angka dari String',
      description: 'Gunakan `parseInt("1500px")` untuk mengisi variabel `let ukuran = parseInt("1500px");`.',
      startingCode: `// Tulis kode parseInt di bawah:\nlet ukuran = 0;`,
      solution: `let ukuran = parseInt("1500px");`
    }
  },

  // ── 36. JS NUMBER PROPERTIES ────────────────────────────────────────────
  {
    id: 'js-number-properties',
    title: 'JS Number Properties',
    chapter: 'JS Numbers',
    chapterId: 'js-chap-numbers',
    order: 36,
    overview: 'Pahami konstanta batas angka dan properti statis Number: MAX_VALUE, MIN_VALUE, POSITIVE_INFINITY, NEGATIVE_INFINITY, MAX_SAFE_INTEGER, dan EPSILON.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS NUMBERS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 36 / 39</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏛️ Properti & Batas Aman Angka (Number Properties)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Objek <code>Number</code> di JavaScript menyediakan sekumpulan konstanta bawaan (properties) yang mendefinisikan batas limit angka yang dapat ditampung secara presisi.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Number Properties</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Konstanta Batas Angka di JavaScript</h2>
  <div id="output" style="background: #f8fafc; border: 1px solid #cbd5e1; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    log += '1. Number.MAX_SAFE_INTEGER: <strong>' + Number.MAX_SAFE_INTEGER + '</strong> (2^53 - 1)<br>';
    log += '2. Number.MIN_SAFE_INTEGER: <strong>' + Number.MIN_SAFE_INTEGER + '</strong><br><br>';

    log += '3. Number.MAX_VALUE: ' + Number.MAX_VALUE + '<br>';
    log += '4. Number.MIN_VALUE: ' + Number.MIN_VALUE + '<br><br>';

    log += '5. Number.EPSILON: ' + Number.EPSILON + ' (Selisih terkecil antara 1 dan float berikutnya)';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Number.MAX_SAFE_INTEGER bernilai 9.007.199.254.740.991 (9 triliun+), yaitu batas maksimum angka bulat yang dapat dihitung secara akurat tanpa kehilangan presisi.',
      'Number.MAX_VALUE adalah angka terbesar yang mungkin direpresentasikan sebelum menjadi Infinity.',
      'Properti ini adalah properti statis yang diakses langsung melalui namespace Number, bukan pada variabel instan.'
    ],
    quiz: {
      question: 'Berapakah nilai batas integer aman maksimum di JavaScript (Number.MAX_SAFE_INTEGER)?',
      options: [
        '2^31 - 1 (2.147.483.647)',
        '2^53 - 1 (9.007.199.254.740.991)',
        '1.000.000.000',
        'Tak terhingga'
      ],
      answer: 1,
      explanation: 'Di JavaScript, `Number.MAX_SAFE_INTEGER` adalah `2^53 - 1` (9007199254740991).'
    },
    challenge: {
      title: 'Tantangan: Cek Integer Aman dengan isSafeInteger',
      description: 'Gunakan method `Number.isSafeInteger(1000)` untuk memastikan angka tersebut adalah integer yang aman.',
      startingCode: `// Cek integer aman di bawah:\nlet isAman = false;`,
      solution: `let isAman = Number.isSafeInteger(1000);`
    }
  },

  // ── 37. JS NUMBER REFERENCE ─────────────────────────────────────────────
  {
    id: 'js-number-reference',
    title: 'JS Number Reference',
    chapter: 'JS Numbers',
    chapterId: 'js-chap-numbers',
    order: 37,
    overview: 'Tabel panduan referensi lengkap seluruh method statis dan properti global objek Number standar JavaScript.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS NUMBERS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 37 / 39</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📚 Kamus Referensi Objek Number JavaScript</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Tabel berikut merangkum seluruh method verifikasi numerik dan properti penting untuk mempermudah referensi harian Anda.
          </p>
        </div>

        <div class="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-xl text-xs">
          <table class="w-full text-left">
            <thead class="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white">
              <tr>
                <th class="p-3">Method / Properti</th>
                <th class="p-3">Deskripsi Singkat</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-800 font-mono text-slate-600 dark:text-slate-300">
              <tr><td class="p-3 text-amber-500 font-bold">Number.isInteger(x)</td><td>Memeriksa apakah x adalah bilangan bulat murni.</td></tr>
              <tr><td class="p-3 text-amber-500 font-bold">Number.isNaN(x)</td><td>Memeriksa apakah x bertipe NaN secara ketat.</td></tr>
              <tr><td class="p-3 text-amber-500 font-bold">Number.isFinite(x)</td><td>Memeriksa apakah x adalah bilangan berhingga (bukan Infinity).</td></tr>
              <tr><td class="p-3 text-amber-500 font-bold">Number.isSafeInteger(x)</td><td>Memeriksa apakah x berada dalam rentang integer aman.</td></tr>
              <tr><td class="p-3 text-amber-500 font-bold">Number.parseInt(str)</td><td>Memparsing string menjadi integer (identik dengan global parseInt).</td></tr>
              <tr><td class="p-3 text-amber-500 font-bold">Number.parseFloat(str)</td><td>Memparsing string menjadi float (identik dengan global parseFloat).</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Number Reference Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Uji Validasi Angka dengan Method Statis</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    log += 'Number.isInteger(42) ➔ ' + Number.isInteger(42) + ' ✅<br>';
    log += 'Number.isInteger(42.5) ➔ ' + Number.isInteger(42.5) + ' ❌<br><br>';

    log += 'Number.isFinite(1000) ➔ ' + Number.isFinite(1000) + ' ✅<br>';
    log += 'Number.isFinite(Infinity) ➔ ' + Number.isFinite(Infinity) + ' ❌';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Number.isInteger(42) menghasilkan true, sedangkan Number.isInteger(42.5) menghasilkan false.',
      'Number.isFinite() memvalidasi apakah angka tersebut valid dan bukan nilai tak terhingga Infinity.'
    ],
    quiz: {
      question: 'Manakah pemanggilan di bawah ini yang mengembalikan nilai true?',
      options: [
        'Number.isInteger("10")',
        'Number.isInteger(10.5)',
        'Number.isInteger(10)',
        'Number.isInteger(NaN)'
      ],
      answer: 2,
      explanation: 'Hanya `Number.isInteger(10)` yang bernilai true karena 10 adalah bilangan bulat murni bertipe Number.'
    },
    challenge: {
      title: 'Tantangan: Cek Bilangan Bulat',
      description: 'Gunakan `Number.isInteger(500)` dan simpan hasilnya ke variabel `let cek = Number.isInteger(500);`.',
      startingCode: `// Tulis kode cek integer di bawah:\nlet cek = false;`,
      solution: `let cek = Number.isInteger(500);`
    }
  },

  // ── 38. JS BITWISE ──────────────────────────────────────────────────────
  {
    id: 'js-bitwise',
    title: 'JS Bitwise',
    chapter: 'JS Numbers',
    chapterId: 'js-chap-numbers',
    order: 38,
    overview: 'Pelajari operasi tingkat bit (Bitwise Operations 32-bit): AND (&), OR (|), XOR (^), NOT (~), Zero-fill Right Shift (>>>), dan manipulasi bit flags.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS NUMBERS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 38 / 39</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚙️ Operasi Bitwise (Biner 32-Bit)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Operator bitwise memperlakukan angka sebagai urutan 32 bit biner (angka 0 dan 1). Operasi ini berjalan sangat cepat di level hardware dan umum digunakan untuk sistem perizinan (Permission Flags), kompresi data, dan manipulasi piksel grafis.
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs font-mono">
          <div class="p-2.5 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800">
            <strong class="text-amber-500">& (Bitwise AND)</strong>
          </div>
          <div class="p-2.5 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800">
            <strong class="text-amber-500">| (Bitwise OR)</strong>
          </div>
          <div class="p-2.5 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800">
            <strong class="text-amber-500">^ (Bitwise XOR)</strong>
          </div>
          <div class="p-2.5 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800">
            <strong class="text-amber-500">~ (Bitwise NOT)</strong>
          </div>
          <div class="p-2.5 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800">
            <strong class="text-amber-500">&lt;&lt; (Left Shift)</strong>
          </div>
          <div class="p-2.5 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800">
            <strong class="text-amber-500">&gt;&gt; (Right Shift)</strong>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Bitwise Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Sistem Hak Akses Menggunakan Bitwise Flag</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // Definisi Bitmask Izin (Flags)
    const BACA  = 1; // 001 biner
    const TULIS = 2; // 010 biner
    const HAPUS = 4; // 100 biner

    // Beri izin BACA dan TULIS ke user dengan Bitwise OR (|)
    let izinUser = BACA | TULIS; // 001 | 010 = 011 (Nilai 3)
    log += 'Kode Hak Akses User: ' + izinUser + ' (Biner: ' + izinUser.toString(2) + ')<br><br>';

    // Periksa apakah user boleh BACA dengan Bitwise AND (&)
    let bolehBaca = (izinUser & BACA) !== 0;
    log += 'Boleh Membaca Dokumen? ➔ <strong>' + (bolehBaca ? 'YA ✅' : 'TIDAK ❌') + '</strong><br>';

    // Periksa apakah user boleh HAPUS
    let bolehHapus = (izinUser & HAPUS) !== 0;
    log += 'Boleh Menghapus Dokumen? ➔ <strong>' + (bolehHapus ? 'YA ✅' : 'TIDAK ❌') + '</strong>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'BACA | TULIS menggabungkan izin biner (001 | 010 = 011).',
      '(izinUser & BACA) !== 0 memeriksa keberadaan bit izin secara instan dengan efisiensi memori tingkat tinggi.',
      'Sistem bitmask ini adalah teknik yang sama yang digunakan oleh sistem operasi Linux/Unix untuk permission file (chmod 777).'
    ],
    quiz: {
      question: 'Berapakah hasil operasi bitwise 5 & 1 di JavaScript? (Petunjuk: 5 = 101 biner, 1 = 001 biner)',
      options: [
        '5',
        '1',
        '0',
        '6'
      ],
      answer: 1,
      explanation: 'Dalam biner: 101 & 001 = 001 (yaitu angka 1 desimal).'
    },
    challenge: {
      title: 'Tantangan: Operasi Bitwise OR',
      description: 'Hitung operasi bitwise OR antara `4 | 1` dan simpan hasilnya ke `let hasil = (4 | 1);`.',
      startingCode: `// Tulis operasi bitwise OR di bawah:\nlet hasil = 0;`,
      solution: `let hasil = (4 | 1);`
    }
  },

  // ── 39. JS BIGINT ───────────────────────────────────────────────────────
  {
    id: 'js-bigint',
    title: 'JS BigInt',
    chapter: 'JS Numbers',
    chapterId: 'js-chap-numbers',
    order: 39,
    overview: 'Kuasai tipe data BigInt (ES2020) untuk menampung bilangan bulat bernilai raksasa tanpa batas presisi integer, penulisan literal n (123n), fungsi BigInt(), serta aturan operasi.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS NUMBERS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 39 / 39</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🪐 Tipe Data Angka Raksasa (BigInt)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Tipe data <code>BigInt</code> (diperkenalkan pada ES2020) digunakan untuk menyimpan bilangan bulat dengan presisi arbitrer tanpa batas, jauh melampaui limit <code>Number.MAX_SAFE_INTEGER</code> (9 triliun+).
          </p>
        </div>

        <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
          <h3 class="text-sm font-bold text-slate-800 dark:text-white">Cara Membuat BigInt:</h3>
          <ul class="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-1">
            <li>Tambahkan huruf <code>n</code> di ujung bilangan bulat: <code>9007199254740999n</code></li>
            <li>Panggil fungsi konstruktor: <code>BigInt("9007199254740999")</code></li>
          </ul>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS BigInt Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Perbandingan Presisi Number Biasa vs BigInt</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. Masalah Number Biasa Melampaui Batas MAX_SAFE_INTEGER
    let angkaNormal = 9007199254740991;
    log += 'Number Normal + 1: ' + (angkaNormal + 1) + '<br>';
    log += 'Number Normal + 2: <span style="color:#f87171">' + (angkaNormal + 2) + '</span> (Rusak! Menghasilkan angka yang sama karena presisi overflow)<br><br>';

    // 2. Solusi Sempurna dengan BigInt (n)
    let angkaRaksasa = 9007199254740991n;
    log += 'BigInt + 1n: ' + (angkaRaksasa + 1n) + '<br>';
    log += 'BigInt + 2n: <strong>' + (angkaRaksasa + 2n) + '</strong> (Akurat 100%! ✅)<br><br>';

    // 3. Operasi Bilangan Sangat Besar (Kriptografi / Saldo Kripto Satuan Wei)
    let ethWei = 1000000000000000000n; // 1 ETH dalam satuan Wei
    let totalWei = ethWei * 5n;
    log += '5 ETH dalam Satuan Wei: <strong>' + totalWei + 'n</strong> (typeof: ' + typeof totalWei + ')';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Number biasa kehilangan presisi saat menambahkan angka di atas 9007199254740991.',
      'BigInt (angka berakhiran n) melakukan perhitungan matematika eksak tanpa kehilangan satu digit pun.',
      'typeof totalWei menghasilkan tipe primitif resmi "bigint".'
    ],
    quiz: {
      question: 'Bagaimana cara menulis literal BigInt bernilai 100 di JavaScript?',
      options: [
        '100B',
        '100n',
        'Big(100)',
        '#100'
      ],
      answer: 1,
      explanation: 'Literal BigInt ditulis dengan menambahkan akhiran huruf `n` di ujung angka, contoh: `100n`.'
    },
    challenge: {
      title: 'Tantangan: Buat BigInt Perkalian',
      description: 'Deklarasikan variabel `let raksasa = 1000000000000000000n * 2n;` dan cetak tipenya.',
      startingCode: `// Tulis deklarasi BigInt di bawah:\nlet raksasa = 0n;`,
      solution: `let raksasa = 1000000000000000000n * 2n;`
    }
  }
];
