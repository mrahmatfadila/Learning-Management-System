// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (MATH PART 1: 371-383)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart35RefMath1 = [
  // 371. ABS()
  {
    id: 'php-ref-math-abs',
    title: 'PHP abs()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 371,
    overview: 'Kuasai fungsi abs(): menghitung nilai mutlak / absolut (selalu positif) dari angka integer maupun float.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PHP MATH</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 371 / 395</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📏 Nilai Absolut Mutlak (abs)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>abs(int|float $num): int|float</code> mengubah angka negatif menjadi nilai positif absolut (jarak dari titik nol pada garis bilangan). Sangat penting untuk menghitung selisih jarak, margin error, dan selisih harga.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$saldoAwal = 50000;
$totalPengeluaran = 85000;
$selisih = $saldoAwal - $totalPengeluaran; // -35000

echo "<h3>Hasil Penggunaan abs():</h3>";
echo "<p>Selisih Mentah: <strong>$selisih</strong></p>";
echo "<p>Kekurangan Saldo (Absolut): <strong style='color: #059669; font-size: 18px;'>Rp " . number_format(abs($selisih), 0, ',', '.') . "</strong></p>";
echo "<p>abs(-12.75) = <strong>" . abs(-12.75) . "</strong></p>";
?>`,
    codeExplanation: [
      'abs($num) mengembalikan nilai non-negatif dari parameter yang diberikan.'
    ],
    challenge: {
      instruction: 'Ubah angka -42 menjadi nilai absolut dengan abs(-42).',
      starterCode: `<?php
echo "Absolut: " . abs(-42);
?>`,
      hint: 'Panggil abs(-42).'
    },
    quiz: {
      question: 'Berapakah nilai kembalian dari `abs(-99.5)`?',
      options: [
        'Float 99.5 positif',
        'Integer 99',
        'Float -99.5',
        'Error'
      ],
      correctIndex: 0,
      explanation: 'abs() mempertahankan tipe data float dan menghilangkan tanda negatifnya.'
    }
  },

  // 372. ACOS()
  {
    id: 'php-ref-math-acos',
    title: 'PHP acos()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 372,
    overview: 'Kuasai fungsi acos(): menghitung Arc Cosine (invers kosinus) dalam satuan radian untuk rentang nilai antara -1 hingga 1.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TRIGONOMETRY</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 372 / 395</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📐 Arc Cosine (acos)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>acos(float $num): float</code> mengembalikan sudut dalam radian (antara 0 hingga PI) dari nilai kosinus yang diberikan. Jika argumen di luar rentang [-1, 1], fungsi mengembalikan <code>NAN</code> (Not A Number).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$val = 0.5;
$radian = acos($val);
$derajat = rad2deg($radian);

echo "<h3>Hasil Penggunaan acos():</h3>";
echo "<p>acos($val) dalam Radian: <strong>" . round($radian, 4) . " rad</strong></p>";
echo "<p>Konversi ke Derajat: <strong style='color: #059669;'>" . round($derajat) . "°</strong> (60 derajat)</p>";
?>`,
    codeExplanation: [
      'acos(0.5) menghasilkan sudut pi/3 radian (60 derajat).',
      'rad2deg() mengonversi radian menjadi derajat sudut visual.'
    ],
    challenge: {
      instruction: 'Hitung acos(1) dan cetak hasilnya.',
      starterCode: `<?php
echo "acos(1): " . acos(1);
?>`,
      hint: 'Panggil acos(1).'
    },
    quiz: {
      question: 'Berapakah nilai kembalian dari `acos(1)`?',
      options: [
        'Float 0.0 radian (0 derajat)',
        'Float 1.0',
        'Float 90.0',
        'NAN'
      ],
      correctIndex: 0,
      explanation: 'Karena cos(0) = 1, maka acos(1) bernilai 0 radian.'
    }
  },

  // 373. ACOSH()
  {
    id: 'php-ref-math-acosh',
    title: 'PHP acosh()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 373,
    overview: 'Kuasai fungsi acosh(): menghitung Inverse Hyperbolic Cosine (area kosinus hiperbolik) untuk nilai float >= 1.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">HYPERBOLIC</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 373 / 395</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📐 Invers Kosinus Hiperbolik (acosh)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>acosh(float $num): float</code> menghitung nilai invers kosinus hiperbolik dari <code>$num</code>. Nilai parameter wajib bernilai minimal 1 (jika kurang dari 1 akan menghasilkan NAN).
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Hasil Penggunaan acosh():</h3>";
echo "<p>acosh(1) = <strong>" . acosh(1) . "</strong></p>";
echo "<p>acosh(2.5) = <strong style='color: #059669;'>" . round(acosh(2.5), 4) . "</strong></p>";
?>`,
    codeExplanation: [
      'acosh(1) bernilai tepat 0.',
      'Banyak diaplikasikan dalam kalkulasi fisika gelombang dan kurva tali gantung (catenary curve).'
    ],
    challenge: {
      instruction: 'Hitung acosh(7) dan bulatkan 2 desimal dengan round().',
      starterCode: `<?php
echo round(acosh(7), 2);
?>`,
      hint: 'Panggil round(acosh(7), 2).'
    },
    quiz: {
      question: 'Berapakah batas nilai parameter minimum yang diperbolehkan untuk fungsi `acosh($x)`?',
      options: [
        '$x >= 1.0 (nilai minimal 1)',
        '$x >= 0',
        '$x bebas',
        '$x <= 0'
      ],
      correctIndex: 0,
      explanation: 'Fungsi acosh hanya terdefinisi secara matematis pada domain real [1, tak hingga).'
    }
  },

  // 374. ASIN()
  {
    id: 'php-ref-math-asin',
    title: 'PHP asin()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 374,
    overview: 'Kuasai fungsi asin(): menghitung Arc Sine (invers sinus) dalam satuan radian untuk rentang nilai antara -1 hingga 1.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TRIGONOMETRY</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 374 / 395</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📐 Arc Sine (asin)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>asin(float $num): float</code> mengembalikan sudut dalam satuan radian (antara -PI/2 hingga PI/2).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$val = 1.0;
$radian = asin($val);

echo "<h3>Hasil Penggunaan asin():</h3>";
echo "<p>asin(1.0) = <strong>" . round($radian, 4) . " rad</strong></p>";
echo "<p>Sudut Derajat: <strong style='color: #059669;'>" . rad2deg($radian) . "°</strong> (90 derajat)</p>";
?>`,
    codeExplanation: [
      'asin(1.0) menghasilkan pi/2 radian atau tepat 90 derajat.'
    ],
    challenge: {
      instruction: 'Hitung asin(0) dengan echo asin(0);.',
      starterCode: `<?php
echo "asin(0): " . asin(0);
?>`,
      hint: 'Panggil asin(0).'
    },
    quiz: {
      question: 'Berapakah nilai derajat dari `rad2deg(asin(0.5))`?',
      options: [
        '30 Derajat',
        '45 Derajat',
        '60 Derajat',
        '90 Derajat'
      ],
      correctIndex: 0,
      explanation: 'sin(30°) = 0.5, sehingga asin(0.5) bernilai 30 derajat.'
    }
  },

  // 375. ASINH()
  {
    id: 'php-ref-math-asinh',
    title: 'PHP asinh()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 375,
    overview: 'Kuasai fungsi asinh(): menghitung Inverse Hyperbolic Sine (area sinus hiperbolik) untuk semua bilangan real.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">HYPERBOLIC</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 375 / 395</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📐 Invers Sinus Hiperbolik (asinh)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>asinh(float $num): float</code> menerima seluruh domain bilangan real (-tak hingga hingga +tak hingga) dan mengembalikan invers sinus hiperbolik.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Hasil Penggunaan asinh():</h3>";
echo "<p>asinh(0) = <strong>" . asinh(0) . "</strong></p>";
echo "<p>asinh(5) = <strong style='color: #059669;'>" . round(asinh(5), 4) . "</strong></p>";
echo "<p>asinh(-5) = <strong>" . round(asinh(-5), 4) . "</strong></p>";
?>`,
    codeExplanation: [
      'asinh() bersifat simetris ganjil: asinh(-x) = -asinh(x).'
    ],
    challenge: {
      instruction: 'Hitung asinh(2.7) dan cetak hasilnya.',
      starterCode: `<?php
echo round(asinh(2.7), 2);
?>`,
      hint: 'Panggil asinh(2.7).'
    },
    quiz: {
      question: 'Berapakah nilai kembalian dari `asinh(0)`?',
      options: [
        'Float 0.0',
        'Float 1.0',
        'Float -1.0',
        'NAN'
      ],
      correctIndex: 0,
      explanation: 'asinh(0) bernilai 0.0.'
    }
  },

  // 376. ATAN()
  {
    id: 'php-ref-math-atan',
    title: 'PHP atan()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 376,
    overview: 'Kuasai fungsi atan(): menghitung Arc Tangent (invers tangen) dalam satuan radian untuk bilangan real apa pun.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TRIGONOMETRY</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 376 / 395</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📐 Arc Tangent (atan)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>atan(float $num): float</code> mengembalikan sudut radian antara -PI/2 dan PI/2. Contoh klasik: <code>atan(1)</code> bernilai PI/4 (45 derajat).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$rad = atan(1);
$deg = rad2deg($rad);

echo "<h3>Hasil Penggunaan atan():</h3>";
echo "<p>atan(1) = <strong>" . round($rad, 4) . " rad (PI/4)</strong></p>";
echo "<p>Sudut Derajat: <strong style='color: #059669;'>$deg°</strong> (45 derajat)</p>";
?>`,
    codeExplanation: [
      'atan(1) bernilai 45 derajat (pi / 4).'
    ],
    challenge: {
      instruction: 'Hitung sudut derajat dari atan(1) dengan rad2deg(atan(1)).',
      starterCode: `<?php
echo rad2deg(atan(1)) . " derajat";
?>`,
      hint: 'Panggil rad2deg(atan(1)).'
    },
    quiz: {
      question: 'Berapakah sudut dalam derajat yang dihasilkan oleh `rad2deg(atan(1))`?',
      options: [
        '45 Derajat',
        '90 Derajat',
        '180 Derajat',
        '0 Derajat'
      ],
      correctIndex: 0,
      explanation: 'tan(45°) = 1, sehingga atan(1) = 45°.'
    }
  },

  // 377. ATAN2()
  {
    id: 'php-ref-math-atan2',
    title: 'PHP atan2()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 377,
    overview: 'Kuasai fungsi atan2(): menghitung Arc Tangent dari dua variabel koordinat Kartesius (y, x) dengan tanda kuadran penuh (-PI hingga +PI), pondasi algoritma rotasi game & radar navigasi.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">2D NAVIGATION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 377 / 395</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧭 Sudut Arah 2D Kuadran Penuh (atan2)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>atan2(float $y, float $x): float</code> menghitung sudut titik (x, y) terhadap sumbu X positif. Berbeda dengan <code>atan($y/$x)</code> yang rentan <em>division by zero</em> saat x=0, <code>atan2()</code> menangani semua kuadran secara akurat.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$y = 10;
$x = 10;
$sudutRadian = atan2($y, $x);
$sudutDerajat = rad2deg($sudutRadian);

echo "<h3>Hasil Penggunaan atan2(y, x):</h3>";
echo "<p>Titik Koordinat: ($x, $y)</p>";
echo "<p>Arah Heading: <strong style='color: #059669;'>$sudutDerajat°</strong></p>";
?>`,
    codeExplanation: [
      'atan2($y, $x) secara otomatis memperhitungkan tanda positif/negatif kuadran I, II, III, IV.'
    ],
    challenge: {
      instruction: 'Hitung sudut koordinat ($y=5, $x=0) dengan atan2.',
      starterCode: `<?php
echo rad2deg(atan2(5, 0)) . " derajat";
?>`,
      hint: 'Panggil rad2deg(atan2(5, 0)).'
    },
    quiz: {
      question: 'Mengapa `atan2($y, $x)` jauh lebih unggul dibandingkan `atan($y / $x)` dalam pemrograman game & grafik 2D?',
      options: [
        'Karena atan2() menangani pembagian dengan nol saat x=0 secara otomatis dan mengidentifikasi kuadran secara presisi 360 derajat',
        'Karena atan2 hanya menerima integer',
        'Karena atan2 lebih lambat',
        'Keduanya identik'
      ],
      correctIndex: 0,
      explanation: 'atan2 aman dari DivisionByZeroError dan mencakup seluruh 4 kuadran lingkaran.'
    }
  },

  // 378. ATANH()
  {
    id: 'php-ref-math-atanh',
    title: 'PHP atanh()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 378,
    overview: 'Kuasai fungsi atanh(): menghitung Inverse Hyperbolic Tangent untuk rentang nilai antara -1 hingga 1.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">HYPERBOLIC</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 378 / 395</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📐 Invers Tangen Hiperbolik (atanh)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>atanh(float $num): float</code> menghitung invers tangen hiperbolik pada domain terbuka (-1, 1).
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Hasil Penggunaan atanh():</h3>";
echo "<p>atanh(0) = <strong>" . atanh(0) . "</strong></p>";
echo "<p>atanh(0.5) = <strong style='color: #059669;'>" . round(atanh(0.5), 4) . "</strong></p>";
?>`,
    codeExplanation: [
      'atanh(0) menghasilkan 0.0.'
    ],
    challenge: {
      instruction: 'Hitung atanh(0.8) dan bulatkan 3 digit.',
      starterCode: `<?php
echo round(atanh(0.8), 3);
?>`,
      hint: 'Panggil round(atanh(0.8), 3).'
    },
    quiz: {
      question: 'Berapakah nilai domain parameter yang valid untuk fungsi `atanh($x)`?',
      options: [
        'Antara -1.0 dan 1.0 (nilai mutlak < 1)',
        'Semua angka positif',
        'Angka > 1 saja',
        'Hanya angka 0'
      ],
      correctIndex: 0,
      explanation: 'atanh terdefinisi pada interval terbuka -1 < x < 1.'
    }
  },

  // 379. BASE_CONVERT()
  {
    id: 'php-ref-math-base-convert',
    title: 'PHP base_convert()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 379,
    overview: 'Kuasai fungsi base_convert(): mengonversi representasi string angka antar basis bilangan apa pun secara fleksibel (antara basis 2 biner hingga basis 36 alphanumerik).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">RADIX CONVERTER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 379 / 395</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔄 Konversi Basis Bilangan Fleksibel (base_convert)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>base_convert(string $num, int $from_base, int $to_base): string</code> adalah utilitas serbaguna untuk mengubah angka biner (basis 2), oktal (8), desimal (10), heksadesimal (16), hingga base36 untuk pembuatan kode voucher pendek.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$desimal = "255";

// 1. Desimal ke Heksadesimal
$hex = base_convert($desimal, 10, 16);

// 2. Heksadesimal ke Biner
$bin = base_convert($hex, 16, 2);

// 3. Desimal ke Base36 (Pembuatan Voucher Kode Pendek)
$kodeVoucher = strtoupper(base_convert("10000001", 10, 36));

echo "<h3>Hasil Penggunaan base_convert():</h3>";
echo "<p>Desimal $desimal ke Hex: <strong style='color: #4f46e5;'>$hex</strong></p>";
echo "<p>Hex $hex ke Biner: <strong>$bin</strong></p>";
echo "<p>Voucher Base-36: <strong style='color: #059669;'>$kodeVoucher</strong></p>";
?>`,
    codeExplanation: [
      'base_convert("255", 10, 16) menghasilkan string "ff".',
      'Mendukung konversi antar basis 2 sampai basis 36.'
    ],
    challenge: {
      instruction: 'Ubah angka biner "1010" ke desimal dengan base_convert("1010", 2, 10).',
      starterCode: `<?php
echo "Desimal: " . base_convert("1010", 2, 10);
?>`,
      hint: 'Panggil base_convert("1010", 2, 10).'
    },
    quiz: {
      question: 'Berapakah rentang basis bilangan (radix) yang didukung oleh `base_convert()` di PHP?',
      options: [
        'Antara Basis 2 hingga Basis 36 inklusif',
        'Hanya basis 2, 8, 10, dan 16',
        'Hanya basis 10 ke 16',
        'Hingga basis 100'
      ],
      correctIndex: 0,
      explanation: 'base_convert mendukung basis 2 (biner) hingga basis 36 (menggunakan angka 0-9 dan huruf a-z).'
    }
  },

  // 380. BINDEC()
  {
    id: 'php-ref-math-bindec',
    title: 'PHP bindec()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 380,
    overview: 'Kuasai fungsi bindec(): mengonversi string bilangan biner (basis 2) menjadi angka desimal (basis 10) integer/float.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">BINARY TO DECIMAL</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 380 / 395</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔢 Biner ke Desimal (bindec)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>bindec(string $binary_string): int|float</code> mengubah string yang hanya berisi karakter <code>'0'</code> dan <code>'1'</code> menjadi representasi desimal integer.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Hasil Penggunaan bindec():</h3>";
echo "<p>Biner '1100' -> Desimal: <strong style='color: #059669;'>" . bindec("1100") . "</strong> (12)</p>";
echo "<p>Biner '11111111' -> Desimal: <strong>" . bindec("11111111") . "</strong> (255)</p>";
?>`,
    codeExplanation: [
      'bindec("1100") menghitung (1*8 + 1*4 + 0*2 + 0*1) = 12.'
    ],
    challenge: {
      instruction: 'Konversi biner "1000" ke desimal dengan bindec("1000").',
      starterCode: `<?php
echo bindec("1000");
?>`,
      hint: 'Panggil bindec("1000").'
    },
    quiz: {
      question: 'Berapakah hasil desimal dari `bindec("1010")`?',
      options: [
        'Integer 10',
        'Integer 8',
        'Integer 12',
        'Integer 1010'
      ],
      correctIndex: 0,
      explanation: '1010 biner = (1*8) + (0*4) + (1*2) + (0*1) = 10 desimal.'
    }
  },

  // 381. CEIL()
  {
    id: 'php-ref-math-ceil',
    title: 'PHP ceil()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 381,
    overview: 'Kuasai fungsi ceil(): membulatkan angka pecahan float KE ATAS menuju integer terdekat (Ceiling Rounding), fungsi mutlak untuk kalkulasi total halaman pagination (Pagination Total Pages).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ROUND UP</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 381 / 395</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔼 Pembulatan ke Atas (ceil)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ceil(int|float $num): float</code> mengembalikan bilangan bulat terkecil yang lebih besar atau sama dengan <code>$num</code>. Contoh: <code>ceil(4.1)</code> menghasilkan <code>5.0</code>. Standar industri untuk menghitung total halaman tabel: <code>ceil($totalItem / $perPage)</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$totalData = 105;
$perHalaman = 10;

// Kalkulasi Pagination
$totalHalaman = (int) ceil($totalData / $perHalaman);

echo "<h3>Hasil Penggunaan ceil() pada Pagination:</h3>";
echo "<p>Total Produk: <strong>$totalData item</strong></p>";
echo "<p>Item per Halaman: <strong>$perHalaman item</strong></p>";
echo "<p>Total Halaman Pagination: <strong style='color: #059669; font-size: 18px;'>$totalHalaman Halaman</strong></p>";
echo "<p>ceil(4.1) = <strong>" . ceil(4.1) . "</strong> | ceil(-3.9) = <strong>" . ceil(-3.9) . "</strong></p>";
?>`,
    codeExplanation: [
      '105 / 10 = 10.5. ceil(10.5) menghasilkan 11 sehingga seluruh sisa 5 data terakomodasi di halaman ke-11.'
    ],
    challenge: {
      instruction: 'Bulatkan angka 8.2 ke atas dengan ceil(8.2).',
      starterCode: `<?php
echo "Ceil: " . ceil(8.2);
?>`,
      hint: 'Panggil ceil(8.2).'
    },
    quiz: {
      question: 'Berapakah nilai yang dihasilkan oleh `ceil(-3.9)`?',
      options: [
        '-3 (karena -3 lebih besar dari -3.9 pada garis bilangan)',
        '-4',
        '-3.0',
        '4'
      ],
      correctIndex: 0,
      explanation: 'ceil membulatkan ke atas menuju angka yang lebih besar (-3 > -3.9).'
    }
  },

  // 382. COS()
  {
    id: 'php-ref-math-cos',
    title: 'PHP cos()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 382,
    overview: 'Kuasai fungsi cos(): menghitung nilai Cosine dari suatu sudut dalam satuan radian.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TRIGONOMETRY</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 382 / 395</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📐 Kosinus Sudut (cos)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>cos(float $num): float</code> menerima sudut dalam satuan radian dan mengembalikan nilai rasio kosinus antara -1.0 dan 1.0. Gunakan <code>deg2rad($derajat)</code> jika Anda memiliki input dalam derajat.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$sudutDerajat = 60;
$radian = deg2rad($sudutDerajat);
$nilaiCos = cos($radian);

echo "<h3>Hasil Penggunaan cos():</h3>";
echo "<p>Sudut: <strong>$sudutDerajat°</strong></p>";
echo "<p>cos($sudutDerajat°) = <strong style='color: #059669;'>" . round($nilaiCos, 2) . "</strong> (0.5)</p>";
echo "<p>cos(0) = <strong>" . cos(0) . "</strong></p>";
?>`,
    codeExplanation: [
      'cos(deg2rad(60)) bernilai 0.5.',
      'cos(0) bernilai 1.0.'
    ],
    challenge: {
      instruction: 'Hitung cosinus dari 0 radian dengan cos(0).',
      starterCode: `<?php
echo "cos(0) = " . cos(0);
?>`,
      hint: 'Panggil cos(0).'
    },
    quiz: {
      question: 'Satuan unit apakah yang diharapkan sebagai parameter masukan pada fungsi `cos()` di PHP?',
      options: [
        'Radian (Gunakan deg2rad() untuk mengonversi derajat ke radian)',
        'Derajat (°)',
        'Gradian',
        'Persentase'
      ],
      correctIndex: 0,
      explanation: 'Seluruh fungsi trigonometri PHP (sin, cos, tan) menerima sudut dalam satuan radian.'
    }
  },

  // 383. COSH()
  {
    id: 'php-ref-math-cosh',
    title: 'PHP cosh()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 383,
    overview: 'Kuasai fungsi cosh(): menghitung Hyperbolic Cosine dari suatu bilangan real.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">HYPERBOLIC</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 383 / 395</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📐 Kosinus Hiperbolik (cosh)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>cosh(float $num): float</code> menghitung nilai (e^x + e^-x) / 2 yang membentuk kurva rantai gantung alami (catenary).
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Hasil Penggunaan cosh():</h3>";
echo "<p>cosh(0) = <strong>" . cosh(0) . "</strong></p>";
echo "<p>cosh(2) = <strong style='color: #059669;'>" . round(cosh(2), 4) . "</strong></p>";
?>`,
    codeExplanation: [
      'cosh(0) bernilai tepat 1.0.'
    ],
    challenge: {
      instruction: 'Hitung cosh(1) dan bulatkan 2 angka di belakang koma.',
      starterCode: `<?php
echo round(cosh(1), 2);
?>`,
      hint: 'Panggil round(cosh(1), 2).'
    },
    quiz: {
      question: 'Berapakah nilai `cosh(0)`?',
      options: [
        'Float 1.0',
        'Float 0.0',
        'Float -1.0',
        'NAN'
      ],
      correctIndex: 0,
      explanation: 'cosh(0) = (e^0 + e^-0) / 2 = (1 + 1) / 2 = 1.0.'
    }
  }
];

module.exports = phpPart35RefMath1;
