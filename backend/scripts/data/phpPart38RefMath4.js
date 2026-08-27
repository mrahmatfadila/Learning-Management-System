// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (MATH PART 4: 408-419)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart38RefMath4 = [
  // 408. OCTDEC()
  {
    id: 'php-ref-math-octdec',
    title: 'PHP octdec()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 408,
    overview: 'Kuasai fungsi octdec(): mengonversi string bilangan oktal (basis 8) menjadi angka desimal (basis 10) integer/float.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">OCTAL TO DECIMAL</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 408 / 419</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔢 Oktal ke Desimal (octdec)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>octdec(string $octal_string): int|float</code> mengubah string digit oktal (<code>0-7</code>) menjadi nilai desimal integer.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Hasil Penggunaan octdec():</h3>";
echo "<p>Oktal '77' -> Desimal: <strong style='color: #059669;'>" . octdec("77") . "</strong> (63)</p>";
echo "<p>Oktal '755' (CHMOD) -> Desimal: <strong>" . octdec("755") . "</strong> (493)</p>";
?>`,
    codeExplanation: [
      'octdec("77") menghitung 7*8 + 7*1 = 63.'
    ],
    challenge: {
      instruction: 'Konversi oktal "10" ke desimal dengan octdec("10").',
      starterCode: `<?php
echo octdec("10");
?>`,
      hint: 'Panggil octdec("10").'
    },
    quiz: {
      question: 'Berapakah nilai desimal yang dihasilkan oleh `octdec("10")`?',
      options: [
        'Integer 8',
        'Integer 10',
        'Integer 16',
        'Integer 2'
      ],
      correctIndex: 0,
      explanation: 'Oktal "10" = 1*8 + 0 = 8 desimal.'
    }
  },

  // 409. PI()
  {
    id: 'php-ref-math-pi',
    title: 'PHP pi()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 409,
    overview: 'Kuasai fungsi pi(): mengembalikan nilai presisi tinggi dari konstanta matematika Pi (π ≈ 3.1415926535898), ekuivalen dengan konstanta M_PI.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PI CONSTANT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 409 / 419</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🥧 Konstanta Pi (pi)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>pi(): float</code> mengembalikan rasio keliling lingkaran terhadap diameternya dengan tingkat presisi penuh float sistem (3.1415926535898).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$jariJari = 7;
// Rumus Luas Lingkaran = pi * r^2
$luasLingkaran = pi() * pow($jariJari, 2);

echo "<h3>Hasil Penggunaan pi() (Kalkulator Lingkaran):</h3>";
echo "<p>Jari-jari: <strong>$jariJari cm</strong></p>";
echo "<p>Luas Lingkaran: <strong style='color: #059669; font-size: 18px;'>" . round($luasLingkaran, 2) . " cm²</strong></p>";
echo "<p>Nilai pi() Presisi: <strong>" . pi() . "</strong></p>";
?>`,
    codeExplanation: [
      'pi() * pow($r, 2) menghitung luas lingkaran secara presisi tinggi.'
    ],
    challenge: {
      instruction: 'Hitung keliling lingkaran dengan rumus 2 * pi() * 10 dan bulatkan 2 digit.',
      starterCode: `<?php
echo round(2 * pi() * 10, 2);
?>`,
      hint: 'Panggil round(2 * pi() * 10, 2).'
    },
    quiz: {
      question: 'Konstanta bawaan PHP apakah yang memiliki nilai yang identik persis dengan fungsi `pi()`?',
      options: [
        '`M_PI`',
        '`M_E`',
        '`PI`',
        '`MATH_PI`'
      ],
      correctIndex: 0,
      explanation: 'M_PI adalah konstanta bawaan PHP untuk nilai Pi rasio lingkaran.'
    }
  },

  // 410. POW()
  {
    id: 'php-ref-math-pow',
    title: 'PHP pow()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 410,
    overview: 'Kuasai fungsi pow(): menghitung nilai perpangkatan eksponensial (base dipangkatkan exp) dan padanan operator modern ** ($base ** $exp).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">POWER EXPONENT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 410 / 419</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚡ Perpangkatan Angka (pow)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>pow(mixed $base, mixed $exp): int|float|object</code> menghitung <code>base^exp</code>. Sejak PHP 5.6, operator <code>**</code> diperkenalkan sebagai shorthand (misal: <code>2 ** 8</code> = 256).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$basis = 2;
$pangkat = 8;

$hasilPow = pow($basis, $pangkat);
$hasilOperator = $basis ** $pangkat;

echo "<h3>Hasil Penggunaan pow() dan Operator **:</h3>";
echo "<p>pow($basis, $pangkat) = <strong style='color: #059669; font-size: 18px;'>$hasilPow</strong></p>";
echo "<p>2 ** 8 = <strong>$hasilOperator</strong></p>";
echo "<p>pow(9, 0.5) [Akar 9] = <strong>" . pow(9, 0.5) . "</strong></p>";
?>`,
    codeExplanation: [
      'pow(2, 8) menghasilkan 256.',
      'Pangkat pecahan pow(9, 0.5) menghasilkan akar kuadrat (3).'
    ],
    challenge: {
      instruction: 'Hitung 3 pangkat 4 menggunakan pow(3, 4).',
      starterCode: `<?php
echo pow(3, 4);
?>`,
      hint: 'Panggil pow(3, 4).'
    },
    quiz: {
      question: 'Operator matematika apakah di PHP yang merupakan padanan langsung dari fungsi `pow($a, $b)`?',
      options: [
        'Operator eksponensial `**` (contoh: `$a ** $b`)',
        'Operator `^`',
        'Operator `//`',
        'Operator `%%`'
      ],
      correctIndex: 0,
      explanation: 'Operator ** diperkenalkan di PHP 5.6 sebagai sintaks eksponensial shorthand.'
    }
  },

  // 411. RAD2DEG()
  {
    id: 'php-ref-math-rad2deg',
    title: 'PHP rad2deg()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 411,
    overview: 'Kuasai fungsi rad2deg(): mengonversi sudut dari satuan Radian (Radians) menjadi satuan Derajat (Degrees) untuk visualisasi UI.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">RADIANS TO DEGREES</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 411 / 419</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📐 Radian ke Derajat (rad2deg)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>rad2deg(float $num): float</code> mengalikan nilai radian dengan <code>180 / M_PI</code> untuk menghasilkan satuan derajat sudut lingkaran (0° - 360°).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$radianPi = M_PI;
$derajat = rad2deg($radianPi);

echo "<h3>Hasil Penggunaan rad2deg():</h3>";
echo "<p>PI Radian (" . round($radianPi, 4) . " rad) = <strong style='color: #059669; font-size: 18px;'>$derajat°</strong></p>";
echo "<p>PI / 2 Radian = <strong>" . rad2deg(M_PI / 2) . "°</strong> (90 derajat)</p>";
?>`,
    codeExplanation: [
      'rad2deg(M_PI) menghasilkan 180 derajat.'
    ],
    challenge: {
      instruction: 'Ubah M_PI / 4 radian ke derajat dengan rad2deg(M_PI / 4).',
      starterCode: `<?php
echo rad2deg(M_PI / 4) . " derajat";
?>`,
      hint: 'Panggil rad2deg(M_PI / 4).'
    },
    quiz: {
      question: 'Berapakah nilai derajat yang dihasilkan oleh `rad2deg(M_PI / 2)`?',
      options: [
        'Float 90.0 Derajat',
        'Float 180.0 Derajat',
        'Float 45.0 Derajat',
        'Float 360.0 Derajat'
      ],
      correctIndex: 0,
      explanation: 'Setengah Pi radian sama dengan tepat 90 derajat.'
    }
  },

  // 412. RAND()
  {
    id: 'php-ref-math-rand',
    title: 'PHP rand()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 412,
    overview: 'Kuasai fungsi rand(): menghasilkan bilangan bulat integer acak (sejak PHP 7.1 rand() otomatis dialihkan menggunakan algoritma Mersenne Twister mt_rand()).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">RANDOM GENERATOR</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 412 / 419</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎲 Generator Angka Acak (rand)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>rand(int $min, int $max): int</code> menghasilkan angka acak antara <code>$min</code> dan <code>$max</code>. Pada PHP modern (PHP 7.1+), <code>rand()</code> adalah alias resmi yang langsung mengeksekusi Mersenne Twister.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Mengambil Angka Acak 1 s/d 100
$nilaiAcak = rand(1, 100);

echo "<h3>Hasil Penggunaan rand():</h3>";
echo "<p>Angka Keberuntungan: <strong style='color: #059669; font-size: 18px;'>$nilaiAcak</strong></p>";
echo "<p>rand(10, 20) = <strong>" . rand(10, 20) . "</strong></p>";
?>`,
    codeExplanation: [
      'rand(1, 100) mengembalikan angka integer acak antara 1 sampai 100.'
    ],
    challenge: {
      instruction: 'Hasilkan angka acak dari 1 sampai 10 dengan rand(1, 10).',
      starterCode: `<?php
echo rand(1, 10);
?>`,
      hint: 'Panggil rand(1, 10).'
    },
    quiz: {
      question: 'Algoritma apakah yang mendasari fungsi `rand()` di PHP 7.1+ ke atas?',
      options: [
        'Mersenne Twister (karena rand() sudah dialihkan ke mt_rand() secara internal)',
        'Linear Congruential Generator lama',
        'MD5 hash',
        'Hardware TRNG'
      ],
      correctIndex: 0,
      explanation: 'PHP 7.1 mengganti implementasi internal rand() dengan Mersenne Twister.'
    }
  },

  // 413. ROUND()
  {
    id: 'php-ref-math-round',
    title: 'PHP round()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 413,
    overview: 'Kuasai fungsi round(): membulatkan angka float ke jumlah desimal tertentu dengan 4 mode pembulatan standar (PHP_ROUND_HALF_UP, PHP_ROUND_HALF_DOWN, PHP_ROUND_HALF_EVEN - Bankers Rounding, PHP_ROUND_HALF_ODD).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PRECISION ROUNDING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 413 / 419</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎯 Pembulatan Desimal Presisi (round)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>round(int|float $num, int $precision = 0, int $mode = PHP_ROUND_HALF_UP): float</code> membulatkan angka desimal. Parameter mode <code>PHP_ROUND_HALF_EVEN</code> (Banker's Rounding) sangat penting dalam aplikasi perbankan dan akuntansi untuk meminimalisasi bias akumulasi saldo.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$hargaPajak = 125450.678;

// 1. Pembulatan 2 Digit Desimal (Standar Mata Uang)
$pembulatanStandar = round($hargaPajak, 2);

// 2. Pembulatan ke Puluhan Terdekat (Presisi Negatif -1)
$kePuluhan = round(125458, -1); // 125460

// 3. Banker's Rounding (PHP_ROUND_HALF_EVEN)
$banker1 = round(1.5, 0, PHP_ROUND_HALF_EVEN); // 2
$banker2 = round(2.5, 0, PHP_ROUND_HALF_EVEN); // 2

echo "<h3>Hasil Penggunaan round():</h3>";
echo "<p>Harga Asli: <strong>$hargaPajak</strong></p>";
echo "<p>Format 2 Desimal: <strong style='color: #059669;'>Rp " . number_format($pembulatanStandar, 2) . "</strong></p>";
echo "<p>Pembulatan ke Puluhan (-1): <strong>$kePuluhan</strong></p>";
echo "<p>Banker's Rounding (1.5 -> $banker1, 2.5 -> $banker2)</p>";
?>`,
    codeExplanation: [
      'round($val, 2) membulatkan ke 2 angka di belakang koma.',
      'round($val, -1) membulatkan ke kelipatan 10 terdekat.',
      'PHP_ROUND_HALF_EVEN membulatkan angka .5 ke bilangan genap terdekat (Banker\'s Rounding).'
    ],
    challenge: {
      instruction: 'Bulatkan angka 3.14159 ke 2 desimal dengan round(3.14159, 2).',
      starterCode: `<?php
echo round(3.14159, 2);
?>`,
      hint: 'Panggil round(3.14159, 2).'
    },
    quiz: {
      question: 'Mode pembulatan apakah yang digunakan pada industri perbankan (Banker\'s Rounding) untuk membulatkan nilai tengah .5 ke bilangan genap terdekat?',
      options: [
        '`PHP_ROUND_HALF_EVEN`',
        '`PHP_ROUND_HALF_UP`',
        '`PHP_ROUND_HALF_DOWN`',
        '`PHP_ROUND_HALF_ODD`'
      ],
      correctIndex: 0,
      explanation: 'PHP_ROUND_HALF_EVEN menerapkan aturan Banker\'s Rounding untuk mencegah bias statistik pada perhitungan finansial.'
    }
  },

  // 414. SIN()
  {
    id: 'php-ref-math-sin',
    title: 'PHP sin()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 414,
    overview: 'Kuasai fungsi sin(): menghitung nilai Sinus dari suatu sudut dalam satuan radian.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TRIGONOMETRY</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 414 / 419</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📐 Sinus Sudut (sin)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>sin(float $num): float</code> menghitung sinus dari sudut radian (menghasilkan nilai antara -1.0 hingga 1.0).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$derajat = 90;
$radian = deg2rad($derajat);
$nilaiSin = sin($radian);

echo "<h3>Hasil Penggunaan sin():</h3>";
echo "<p>sin($derajat°) = <strong style='color: #059669; font-size: 18px;'>$nilaiSin</strong> (1.0)</p>";
echo "<p>sin(0) = <strong>" . sin(0) . "</strong> (0.0)</p>";
echo "<p>sin(30°) = <strong>" . round(sin(deg2rad(30)), 2) . "</strong> (0.5)</p>";
?>`,
    codeExplanation: [
      'sin(deg2rad(90)) bernilai tepat 1.0.'
    ],
    challenge: {
      instruction: 'Hitung sin dari 0 radian dengan sin(0).',
      starterCode: `<?php
echo "sin(0) = " . sin(0);
?>`,
      hint: 'Panggil sin(0).'
    },
    quiz: {
      question: 'Berapakah nilai dari `sin(deg2rad(90))`?',
      options: [
        'Float 1.0',
        'Float 0.0',
        'Float 0.5',
        'Float -1.0'
      ],
      correctIndex: 0,
      explanation: 'Sinus 90 derajat sama dengan 1.0.'
    }
  },

  // 415. SINH()
  {
    id: 'php-ref-math-sinh',
    title: 'PHP sinh()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 415,
    overview: 'Kuasai fungsi sinh(): menghitung Hyperbolic Sine (sinus hiperbolik) dari suatu bilangan real.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">HYPERBOLIC</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 415 / 419</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📐 Sinus Hiperbolik (sinh)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>sinh(float $num): float</code> menghitung nilai <code>(e^num - e^-num) / 2</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Hasil Penggunaan sinh():</h3>";
echo "<p>sinh(0) = <strong>" . sinh(0) . "</strong></p>";
echo "<p>sinh(1) = <strong style='color: #059669;'>" . round(sinh(1), 4) . "</strong></p>";
?>`,
    codeExplanation: [
      'sinh(0) bernilai tepat 0.0.'
    ],
    challenge: {
      instruction: 'Hitung sinh(0) dengan echo sinh(0);.',
      starterCode: `<?php
echo "sinh(0) = " . sinh(0);
?>`,
      hint: 'Panggil sinh(0).'
    },
    quiz: {
      question: 'Berapakah nilai dari `sinh(0)`?',
      options: [
        'Float 0.0',
        'Float 1.0',
        'Float -1.0',
        'NAN'
      ],
      correctIndex: 0,
      explanation: 'sinh(0) = (e^0 - e^-0) / 2 = (1 - 1) / 2 = 0.0.'
    }
  },

  // 416. SQRT()
  {
    id: 'php-ref-math-sqrt',
    title: 'PHP sqrt()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 416,
    overview: 'Kuasai fungsi sqrt(): menghitung akar kuadrat (Square Root) dari bilangan non-negatif.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SQUARE ROOT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 416 / 419</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">√ Akar Kuadrat (sqrt)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>sqrt(float $num): float</code> mengembalikan akar kuadrat dari <code>$num</code>. Jika angka negatif diberikan, fungsi mengembalikan <code>NAN</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Hasil Penggunaan sqrt():</h3>";
echo "<p>Akar Kuadrat 64: <strong style='color: #059669; font-size: 18px;'>" . sqrt(64) . "</strong></p>";
echo "<p>Akar Kuadrat 144: <strong>" . sqrt(144) . "</strong></p>";
echo "<p>Akar Kuadrat 2: <strong>" . round(sqrt(2), 4) . "</strong></p>";
?>`,
    codeExplanation: [
      'sqrt(64) menghasilkan 8.0.'
    ],
    challenge: {
      instruction: 'Hitung akar kuadrat dari 81 dengan sqrt(81).',
      starterCode: `<?php
echo "Akar 81: " . sqrt(81);
?>`,
      hint: 'Panggil sqrt(81).'
    },
    quiz: {
      question: 'Apa yang dikembalikan oleh fungsi `sqrt(-9)` pada angka negatif?',
      options: [
        'Konstanta `NAN` (Not A Number)',
        'Float -3.0',
        'Fatal Error',
        'Null'
      ],
      correctIndex: 0,
      explanation: 'Akar dari angka negatif tidak terdefinisi pada bilangan real sehingga menghasilkan NAN.'
    }
  },

  // 417. SRAND()
  {
    id: 'php-ref-math-srand',
    title: 'PHP srand()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 417,
    overview: 'Kuasai fungsi srand(): menginisialisasi benih acak (Seed) untuk fungsi rand() standar.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">RANDOM SEED</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 417 / 419</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌱 Menanam Seed Rand (srand)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>srand(int $seed = 0): void</code> menanamkan nilai seed ke generator pseudo-random <code>rand()</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
srand(999);
$acakA = rand(1, 100);

echo "<h3>Hasil Penggunaan srand():</h3>";
echo "<p>Angka Acak dari Seed 999: <strong style='color: #059669;'>$acakA</strong></p>";
?>`,
    codeExplanation: [
      'srand(999) menginisialisasi state awal generator rand().'
    ],
    challenge: {
      instruction: 'Tanam seed dengan srand(100); dan cetak rand(1, 50).',
      starterCode: `<?php
srand(100);
echo rand(1, 50);
?>`,
      hint: 'Panggil srand(100).'
    },
    quiz: {
      question: 'Apa efek dari memanggil `srand(seed)` dengan nilai integer yang sama sebelum memanggil `rand()`?',
      options: [
        'Urutan angka acak yang dihasilkan oleh rand() akan selalu identik dan dapat direproduksi',
        'Menonaktifkan rand()',
        'Membuat rand() hanya menghasilkan angka 0',
        'Tidak ada efek'
      ],
      correctIndex: 0,
      explanation: 'Seed yang sama menghasilkan deretan angka pseudo-random yang sama.'
    }
  },

  // 418. TAN()
  {
    id: 'php-ref-math-tan',
    title: 'PHP tan()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 418,
    overview: 'Kuasai fungsi tan(): menghitung nilai Tangent dari suatu sudut dalam satuan radian.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TRIGONOMETRY</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 418 / 419</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📐 Tangen Sudut (tan)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>tan(float $num): float</code> menghitung rasio sinus dibagi kosinus (<code>sin($x) / cos($x)</code>) untuk sudut dalam radian.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$sudut45 = deg2rad(45);
$nilaiTan = tan($sudut45);

echo "<h3>Hasil Penggunaan tan():</h3>";
echo "<p>tan(45°) = <strong style='color: #059669; font-size: 18px;'>" . round($nilaiTan) . "</strong> (1.0)</p>";
echo "<p>tan(0) = <strong>" . tan(0) . "</strong> (0.0)</p>";
?>`,
    codeExplanation: [
      'tan(deg2rad(45)) bernilai 1.0.'
    ],
    challenge: {
      instruction: 'Hitung tan dari 0 radian dengan tan(0).',
      starterCode: `<?php
echo "tan(0) = " . tan(0);
?>`,
      hint: 'Panggil tan(0).'
    },
    quiz: {
      question: 'Berapakah nilai dari `round(tan(deg2rad(45)))`?',
      options: [
        'Float 1.0',
        'Float 0.0',
        'Float 0.5',
        'INF'
      ],
      correctIndex: 0,
      explanation: 'Tangen 45 derajat adalah 1.0.'
    }
  },

  // 419. TANH()
  {
    id: 'php-ref-math-tanh',
    title: 'PHP tanh()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 419,
    overview: 'Kuasai fungsi tanh(): menghitung Hyperbolic Tangent (tangen hiperbolik) dari suatu bilangan real, fungsi aktivasi esensial dalam arsitektur Neural Network dan Machine Learning.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ACTIVATION FUNCTION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 419 / 419</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧠 Tangen Hiperbolik & AI (tanh)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>tanh(float $num): float</code> menghitung <code>sinh($num) / cosh($num)</code>. Menghasilkan rentang kurva S yang simetris antara -1.0 hingga 1.0, sangat populer sebagai fungsi aktivasi pada model Artificial Neural Network (ANN).
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Hasil Penggunaan tanh() (Fungsi Aktivasi AI):</h3>";
echo "<p>tanh(0) = <strong>" . tanh(0) . "</strong></p>";
echo "<p>tanh(1) = <strong style='color: #059669;'>" . round(tanh(1), 4) . "</strong></p>";
echo "<p>tanh(-5) [Mendekati Asimtot -1]: <strong>" . round(tanh(-5), 4) . "</strong></p>";
echo "<p>tanh(5)  [Mendekati Asimtot +1]: <strong>" . round(tanh(5), 4) . "</strong></p>";
?>`,
    codeExplanation: [
      'tanh(x) memetakan bilangan real apa pun ke dalam rentang (-1.0, 1.0).'
    ],
    challenge: {
      instruction: 'Hitung tanh(0) dengan echo tanh(0);.',
      starterCode: `<?php
echo "tanh(0) = " . tanh(0);
?>`,
      hint: 'Panggil tanh(0).'
    },
    quiz: {
      question: 'Berapakah rentang nilai batas (asimtot) yang dihasilkan oleh fungsi `tanh($x)` untuk bilangan real apa pun?',
      options: [
        'Antara -1.0 hingga 1.0 (interval terbuka (-1, 1))',
        'Antara 0.0 hingga 1.0',
        'Tak terhingga',
        'Antara 0 hingga 100'
      ],
      correctIndex: 0,
      explanation: 'Fungsi kurva sigmoid tanh membatasi output pada interval (-1, 1).'
    }
  }
];

module.exports = phpPart38RefMath4;
