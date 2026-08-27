// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (MATH PART 3: 396-407)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart37RefMath3 = [
  // 396. IS_FINITE()
  {
    id: 'php-ref-math-is-finite',
    title: 'PHP is_finite()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 396,
    overview: 'Kuasai fungsi is_finite(): memeriksa apakah suatu nilai float merupakan bilangan berhingga (bukan INF, -INF, maupun NAN).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PHP MATH</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 396 / 419</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔢 Memeriksa Bilangan Berhingga (is_finite)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>is_finite(float $num): bool</code> mengembalikan <code>true</code> jika angka bernilai normal dalam batas floating-point standar platform dan bukan bernilai tak terhingga (<code>INF</code>) atau bukan angka (<code>NAN</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$angkaNormal = 12345.67;
$angkaRaksasa = log(0); // -INF
$angkaImajiner = acos(2); // NAN

echo "<h3>Hasil Pengujian is_finite():</h3>";
echo "<ul>";
echo "<li>is_finite($angkaNormal): " . (is_finite($angkaNormal) ? "<strong style='color: green;'>Berhingga (true)</strong>" : "Tidak") . "</li>";
echo "<li>is_finite(log(0)) [-INF]: " . (is_finite($angkaRaksasa) ? "Ya" : "<strong style='color: red;'>Tak Hingga (false)</strong>") . "</li>";
echo "<li>is_finite(acos(2)) [NAN]: " . (is_finite($angkaImajiner) ? "Ya" : "<strong style='color: red;'>Bukan Angka (false)</strong>") . "</li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'is_finite() menyaring angka floating-point agar aman untuk disimpan ke database tanpa memicu Numeric Overflow.'
    ],
    challenge: {
      instruction: 'Uji apakah 9999 adalah bilangan finite dengan is_finite(9999).',
      starterCode: `<?php
echo is_finite(9999) ? "Finite" : "Infinite";
?>`,
      hint: 'Panggil is_finite(9999).'
    },
    quiz: {
      question: 'Manakah nilai di bawah ini yang menghasilkan `false` saat diuji dengan `is_finite()`?',
      options: [
        'Konstanta `INF` dan `NAN`',
        'Angka 0.0',
        'Angka -1000',
        'Angka 1e10'
      ],
      correctIndex: 0,
      explanation: 'is_finite menghasilkan false untuk nilai tak hingga (INF/-INF) dan Not-a-Number (NAN).'
    }
  },

  // 397. IS_INFINITE()
  {
    id: 'php-ref-math-is-infinite',
    title: 'PHP is_infinite()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 397,
    overview: 'Kuasai fungsi is_infinite(): memeriksa apakah suatu nilai float bernilai tak terhingga (INF atau -INF) akibat overflow perhitungan matematika.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">INFINITY CHECK</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 397 / 419</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">♾️ Memeriksa Nilai Tak Terhingga (is_infinite)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>is_infinite(float $num): bool</code> mengembalikan <code>true</code> jika angka melampaui batas maksimum representasi floating-point arsitektur CPU (seperti <code>exp(1000)</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$overflowVal = exp(1000); // Melebihi batas float 1.8e308 -> INF

echo "<h3>Hasil Penggunaan is_infinite():</h3>";
echo "<p>Nilai exp(1000): <strong>$overflowVal</strong></p>";
echo "<p>Apakah Tak Terhingga: <strong style='color: #dc2626;'>" . (is_infinite($overflowVal) ? "YA (INF)" : "TIDAK") . "</strong></p>";
?>`,
    codeExplanation: [
      'is_infinite() mendeteksi kondisi numeric overflow.'
    ],
    challenge: {
      instruction: 'Periksa apakah INF adalah infinite dengan is_infinite(INF).',
      starterCode: `<?php
echo is_infinite(INF) ? "Tak Hingga" : "Hingga";
?>`,
      hint: 'Panggil is_infinite(INF).'
    },
    quiz: {
      question: 'Berapakah nilai yang dihasilkan oleh `is_infinite(INF)`?',
      options: [
        'Boolean true',
        'Boolean false',
        'Null',
        'Error'
      ],
      correctIndex: 0,
      explanation: 'INF adalah konstanta bawaan PHP untuk nilai tak terhingga (infinity).'
    }
  },

  // 398. IS_NAN()
  {
    id: 'php-ref-math-is-nan',
    title: 'PHP is_nan()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 398,
    overview: 'Kuasai fungsi is_nan(): memeriksa apakah suatu nilai merupakan Not-A-Number (NAN) hasil operasi matematika yang tidak terdefinisi (seperti acos(2) atau sqrt(-1)).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">NAN INSPECTION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 398 / 419</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚠️ Memeriksa Not-A-Number (is_nan)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>is_nan(float $num): bool</code> adalah satu-satunya cara yang valid untuk memeriksa NAN. <strong>PENTING:</strong> Anda tidak bisa menggunakan perbandingan <code>$x === NAN</code> karena menurut standar IEEE 754, <code>NAN !== NAN</code> selalu menghasilkan false!
          </p>
        </div>
      </div>
    `,
    code: `<?php
$hasilTidakTerdefinisi = acos(5); // Domain acos hanya [-1, 1]

echo "<h3>Hasil Penggunaan is_nan():</h3>";
echo "<p>Nilai mentah: <strong>$hasilTidakTerdefinisi</strong></p>";
echo "<p>Pemeriksaan is_nan(): <strong style='color: #dc2626;'>" . (is_nan($hasilTidakTerdefinisi) ? "Nilai adalah NAN (Operasi Ilegal)" : "Bukan NAN") . "</strong></p>";
?>`,
    codeExplanation: [
      'Gunakan selalu is_nan($x) karena $x === NAN tidak akan pernah bernilai true.'
    ],
    challenge: {
      instruction: 'Uji nilai NAN dengan is_nan(NAN).',
      starterCode: `<?php
echo is_nan(NAN) ? "Nilai NAN Valid" : "Bukan NAN";
?>`,
      hint: 'Panggil is_nan(NAN).'
    },
    quiz: {
      question: 'Mengapa kita WAJIB menggunakan fungsi `is_nan($val)` alih-alih `$val === NAN`?',
      options: [
        'Karena menurut spesifikasi IEEE 754, NAN tidak pernah sama dengan nilai apapun termasuk dirinya sendiri (NAN !== NAN)',
        'Karena NAN adalah string',
        'Karena operator === hanya untuk integer',
        'Hanya aturan gaya penulisan'
      ],
      correctIndex: 0,
      explanation: 'Sifat khusus floating-point NAN mengharuskan pengujian via fungsi built-in is_nan().'
    }
  },

  // 399. LCG_VALUE()
  {
    id: 'php-ref-math-lcg-value',
    title: 'PHP lcg_value()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 399,
    overview: 'Kuasai fungsi lcg_value(): menghasilkan angka float pseudo-random terdistribusi seragam pada interval terbuka (0, 1) menggunakan Linear Congruential Generator.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PSEUDO RANDOM</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 399 / 419</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎲 Float Acak Seragam (lcg_value)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>lcg_value(): float</code> mengembalikan bilangan acak pecahan antara 0.0 hingga 1.0 menggabungkan dua generator kongruen linier dengan periode 2^31 - 85 dan 2^31 - 249.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Hasil Penggunaan lcg_value():</h3>";
echo "<ul>";
for ($i = 1; $i <= 3; $i++) {
    $acak = lcg_value();
    echo "<li>Sampel Acak #$i: <strong style='color: #059669;'>" . round($acak, 6) . "</strong></li>";
}
echo "</ul>";
?>`,
    codeExplanation: [
      'lcg_value() menghasilkan float 0.0 < x < 1.0 secara instan tanpa butuh argumen min/max.'
    ],
    challenge: {
      instruction: 'Hasilkan float acak dengan lcg_value() dan cetak nilainya.',
      starterCode: `<?php
echo "Acak: " . round(lcg_value(), 4);
?>`,
      hint: 'Panggil lcg_value().'
    },
    quiz: {
      question: 'Berapakah rentang nilai yang dihasilkan oleh pemanggilan `lcg_value()`?',
      options: [
        'Float pecahan antara 0.0 hingga 1.0 (interval (0, 1))',
        'Integer antara 0 hingga 100',
        'Float antara -1.0 dan 1.0',
        'Integer acak 32-bit'
      ],
      correctIndex: 0,
      explanation: 'lcg_value selalu mengembalikan float desimal seragam di rentang (0, 1).'
    }
  },

  // 400. LOG()
  {
    id: 'php-ref-math-log',
    title: 'PHP log()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 400,
    overview: 'Kuasai fungsi log(): menghitung Logaritma Natural (basis e) dari suatu angka, atau logaritma dengan basis kustom (log($num, $base)).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">LOGARITHM</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 400 / 419</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📈 Logaritma Natural & Basis Kustom (log)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>log(float $num, float $base = M_E): float</code> menghitung invers dari fungsi eksponensial. Jika parameter <code>$base</code> tidak diisi, menghitung logaritma natural <code>ln(x)</code>. Jika diisi, menghitung <code>log_base(num)</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// 1. Logaritma Natural basis e (ln)
$lnE = log(M_E); // ln(e) = 1

// 2. Logaritma Basis 2
$logBasis2 = log(8, 2); // 2^3 = 8 -> 3

// 3. Logaritma Basis 10
$logBasis10 = log(1000, 10); // 10^3 = 1000 -> 3

echo "<h3>Hasil Penggunaan log():</h3>";
echo "<p>log(M_E) [ln e] = <strong style='color: #059669;'>$lnE</strong></p>";
echo "<p>log(8, 2) [Basis 2] = <strong>$logBasis2</strong></p>";
echo "<p>log(1000, 10) [Basis 10] = <strong>$logBasis10</strong></p>";
?>`,
    codeExplanation: [
      'log($num) menggunakan basis default konstanta Euler M_E.',
      'log(8, 2) menghitung logaritma biner (2^x = 8 -> 3).'
    ],
    challenge: {
      instruction: 'Hitung log basis 2 dari 16 dengan log(16, 2).',
      starterCode: `<?php
echo "log2(16) = " . log(16, 2);
?>`,
      hint: 'Panggil log(16, 2).'
    },
    quiz: {
      question: 'Berapakah nilai kembalian dari `log(8, 2)`?',
      options: [
        'Float 3.0 (karena 2^3 = 8)',
        'Float 4.0',
        'Float 2.0',
        'Float 8.0'
      ],
      correctIndex: 0,
      explanation: 'Logaritma basis 2 dari 8 bernilai 3.'
    }
  },

  // 401. LOG10()
  {
    id: 'php-ref-math-log10',
    title: 'PHP log10()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 401,
    overview: 'Kuasai fungsi log10(): menghitung Logaritma Umum (Common Logarithm basis 10), fungsi utama menghitung skala Richter gempa, skala pH kimia, dan tingkat kebisingan Decibel (dB).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">COMMON LOG</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 401 / 419</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔊 Logaritma Basis 10 (log10)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>log10(float $num): float</code> menghitung logaritma basis 10 secara optimal dan lebih cepat dibandingkan <code>log($num, 10)</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Hasil Penggunaan log10():</h3>";
echo "<p>log10(10)   = <strong>" . log10(10) . "</strong></p>";
echo "<p>log10(100)  = <strong>" . log10(100) . "</strong></p>";
echo "<p>log10(1000) = <strong style='color: #059669;'>" . log10(1000) . "</strong></p>";
?>`,
    codeExplanation: [
      'log10(1000) bernilai 3.0.'
    ],
    challenge: {
      instruction: 'Hitung log10(10000) dengan echo log10(10000);.',
      starterCode: `<?php
echo "log10(10000) = " . log10(10000);
?>`,
      hint: 'Panggil log10(10000).'
    },
    quiz: {
      question: 'Berapakah nilai yang dihasilkan oleh `log10(100)`?',
      options: [
        'Float 2.0',
        'Float 10.0',
        'Float 1.0',
        'Float 100.0'
      ],
      correctIndex: 0,
      explanation: '10^2 = 100, sehingga log10(100) = 2.0.'
    }
  },

  // 402. LOG1P()
  {
    id: 'php-ref-math-log1p',
    title: 'PHP log1p()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 402,
    overview: 'Kuasai fungsi log1p(): menghitung nilai log(1 + x) dengan presisi sangat akurat pada nilai pecahan x yang mendekati nol.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">HIGH PRECISION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 402 / 419</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔬 Logaritma Presisi Tinggi (log1p)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>log1p(float $num): float</code> menghitung <code>log(1 + $num)</code>. Mencegah hilangnya digit desimal presisi ketika <code>$num</code> sangat kecil (seperti <code>1e-15</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$smallX = 0.00000001;

$logBiasa = log(1 + $smallX);
$logPresisi = log1p($smallX);

echo "<h3>Hasil Penggunaan log1p():</h3>";
echo "<p>log(1 + \$x) = <strong>$logBiasa</strong></p>";
echo "<p>log1p(\$x)   = <strong style='color: #059669;'>$logPresisi</strong> (Presisi Tinggi)</p>";
echo "<p>log1p(0)    = <strong>" . log1p(0) . "</strong></p>";
?>`,
    codeExplanation: [
      'log1p(0) menghasilkan 0 (karena ln(1 + 0) = ln(1) = 0).'
    ],
    challenge: {
      instruction: 'Hitung log1p(0) dengan echo log1p(0);.',
      starterCode: `<?php
echo "log1p(0) = " . log1p(0);
?>`,
      hint: 'Panggil log1p(0).'
    },
    quiz: {
      question: 'Berapakah nilai kembalian dari `log1p(0)`?',
      options: [
        'Float 0.0 (karena ln(1 + 0) = ln(1) = 0)',
        'Float 1.0',
        'Float -1.0',
        'NAN'
      ],
      correctIndex: 0,
      explanation: 'log1p(0) = log(1) = 0.0.'
    }
  },

  // 403. MAX()
  {
    id: 'php-ref-math-max',
    title: 'PHP max()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 403,
    overview: 'Kuasai fungsi max(): mencari dan mengembalikan nilai terbesar (Maksimum) dari sekumpulan angka argumen atau elemen Array.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">EXTREMUM</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 403 / 419</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏆 Nilai Terbesar (max)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>max(mixed ...$values): mixed</code> menerima daftar parameter angka langsung (<code>max(2, 8, 4)</code>) atau sebuah array (<code>max([10, 50, 30])</code>) dan mengembalikan nilai tertinggi.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$skorPeserta = [85, 92, 78, 98, 64, 95];

$skorTertinggi = max($skorPeserta);
$maxLangsung = max(10, 45, 22, 99, 5);

echo "<h3>Hasil Penggunaan max():</h3>";
echo "<p>Daftar Skor: [" . implode(", ", $skorPeserta) . "]</p>";
echo "<p>Skor Tertinggi: <strong style='color: #059669; font-size: 18px;'>$skorTertinggi</strong></p>";
echo "<p>max(10, 45, 22, 99, 5) = <strong>$maxLangsung</strong></p>";
?>`,
    codeExplanation: [
      'max($array) mencari elemen numerik dengan nilai paling tinggi dalam O(n).'
    ],
    challenge: {
      instruction: 'Cari angka terbesar dari [5, 12, 8, 20] dengan max().',
      starterCode: `<?php
$data = [5, 12, 8, 20];
echo "Max: " . max($data);
?>`,
      hint: 'Panggil max($data).'
    },
    quiz: {
      question: 'Berapakah hasil dari `max(15, 80, 45, 80.5)`?',
      options: [
        'Float 80.5',
        'Integer 80',
        'Integer 45',
        'Float 15.0'
      ],
      correctIndex: 0,
      explanation: '80.5 adalah nilai tertinggi dari semua argumen.'
    }
  },

  // 404. MIN()
  {
    id: 'php-ref-math-min',
    title: 'PHP min()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 404,
    overview: 'Kuasai fungsi min(): mencari dan mengembalikan nilai terkecil (Minimum) dari sekumpulan angka argumen atau elemen Array.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">EXTREMUM</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 404 / 419</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📉 Nilai Terkecil (min)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>min(mixed ...$values): mixed</code> mengembalikan nilai terendah dari daftar angka atau array yang diberikan.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$hargaProduk = [150000, 75000, 320000, 50000, 120000];

$termurah = min($hargaProduk);

echo "<h3>Hasil Penggunaan min():</h3>";
echo "<p>Harga Termurah: <strong style='color: #059669; font-size: 18px;'>Rp " . number_format($termurah, 0, ',', '.') . "</strong></p>";
echo "<p>min(-5, 0, 10, -20) = <strong>" . min(-5, 0, 10, -20) . "</strong></p>";
?>`,
    codeExplanation: [
      'min($arr) mencari nilai terkecil di dalam array.'
    ],
    challenge: {
      instruction: 'Cari angka terkecil dari [100, 25, 60] dengan min().',
      starterCode: `<?php
$list = [100, 25, 60];
echo "Min: " . min($list);
?>`,
      hint: 'Panggil min($list).'
    },
    quiz: {
      question: 'Berapakah hasil dari `min(10, -5, 0, -25, 8)`?',
      options: [
        'Integer -25',
        'Integer -5',
        'Integer 0',
        'Integer 10'
      ],
      correctIndex: 0,
      explanation: '-25 adalah angka terkecil pada garis bilangan.'
    }
  },

  // 405. MT_GETRANDMAX()
  {
    id: 'php-ref-math-mt-getrandmax',
    title: 'PHP mt_getrandmax()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 405,
    overview: 'Kuasai fungsi mt_getrandmax(): mengetahui nilai integer acak maksimum tertinggi yang dapat dihasilkan oleh algoritma Mersenne Twister (mt_rand()).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">MERSENNE TWISTER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 405 / 419</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎲 Batas Maksimum Mersenne Twister (mt_getrandmax)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>mt_getrandmax(): int</code> mengembalikan angka integer terbesar yang mungkin dihasilkan oleh generator angka acak Mersenne Twister (2147483647).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$mtMax = mt_getrandmax();

echo "<h3>Hasil Penggunaan mt_getrandmax():</h3>";
echo "<p>Batas Maksimum mt_rand(): <strong style='color: #059669;'>" . number_format($mtMax, 0, ',', '.') . "</strong></p>";
?>`,
    codeExplanation: [
      'mt_getrandmax() bernilai 2147483647 (2^31 - 1).'
    ],
    challenge: {
      instruction: 'Cetak nilai batas maksimum Mersenne Twister dengan mt_getrandmax().',
      starterCode: `<?php
echo "Max MT: " . mt_getrandmax();
?>`,
      hint: 'Panggil mt_getrandmax().'
    },
    quiz: {
      question: 'Berapakah nilai default yang dikembalikan oleh `mt_getrandmax()` pada arsitektur sistem standar?',
      options: [
        'Integer 2147483647 (2^31 - 1)',
        'Integer 32767',
        'Integer 65535',
        'Integer 1000000'
      ],
      correctIndex: 0,
      explanation: 'mt_getrandmax menghasilkan 2147483647.'
    }
  },

  // 406. MT_RAND()
  {
    id: 'php-ref-math-mt-rand',
    title: 'PHP mt_rand()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 406,
    overview: 'Kuasai fungsi mt_rand(): menghasilkan bilangan acak berkualitas tinggi menggunakan algoritma Mersenne Twister (4x lebih cepat dan distribusi statistik jauh lebih unggul dibanding rand() standar).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">MERSENNE TWISTER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 406 / 419</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎲 Generator Angka Acak Cepat (mt_rand)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>mt_rand(int $min, int $max): int</code> menghasilkan angka acak antara <code>$min</code> dan <code>$max</code> inklusif. Mersenne Twister memiliki periode fantastis 2^19937-1 sehingga pola acak tidak mudah berulang.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Generator Kode OTP 6-Digit
$kodeOtp = mt_rand(100000, 999999);

// Simulasi Lempar Dadu (1-6)
$dadu = mt_rand(1, 6);

echo "<h3>Hasil Penggunaan mt_rand():</h3>";
echo "<p>Kode OTP 6-Digit: <strong style='background: #e0e7ff; color: #4338ca; padding: 4px 10px; border-radius: 6px; font-size: 18px;'>$kodeOtp</strong></p>";
echo "<p>Nilai Dadu: <strong style='color: #059669; font-size: 18px;'>$dadu</strong></p>";
?>`,
    codeExplanation: [
      'mt_rand(100000, 999999) menghasilkan angka acak 6 digit seragam.',
      'Jauh lebih cepat dan acak dibanding rand() libc bawaan.'
    ],
    challenge: {
      instruction: 'Hasilkan angka acak antara 10 sampai 50 dengan mt_rand(10, 50).',
      starterCode: `<?php
echo "Acak: " . mt_rand(10, 50);
?>`,
      hint: 'Panggil mt_rand(10, 50).'
    },
    quiz: {
      question: 'Mengapa `mt_rand()` lebih disukai dibandingkan `rand()` standar pada PHP legacy?',
      options: [
        'Menggunakan algoritma Mersenne Twister yang 4x lebih cepat dan menghasilkan karakteristik distribusi statistik acak yang jauh lebih superior',
        'Karena mt_rand menghasilkan huruf',
        'Karena mt_rand tidak butuh RAM',
        'Keduanya identik'
      ],
      correctIndex: 0,
      explanation: 'Mersenne Twister adalah algoritma PRNG standar industri dengan periode 2^19937-1.'
    }
  },

  // 407. MT_SRAND()
  {
    id: 'php-ref-math-mt-srand',
    title: 'PHP mt_srand()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 407,
    overview: 'Kuasai fungsi mt_srand(): menginisialisasi benih acak (Seed) Mersenne Twister PRNG untuk menghasilkan deretan angka acak yang dapat direproduksi (Deterministic Reproducible Randomness).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SEEDING PRNG</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 407 / 419</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌱 Menanam Seed Angka Acak (mt_srand)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>mt_srand(int $seed = 0, int $mode = MT_RAND_MT19937): void</code> mengunci urutan angka acak berdasarkan seed integer. Sangat penting pada automated unit testing dan simulasi sains di mana output acak harus identik di setiap pengujian.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Tanam Seed Tetap 12345
mt_srand(12345);
$angka1 = mt_rand(1, 100);
$angka2 = mt_rand(1, 100);

echo "<h3>Hasil Penggunaan mt_srand (Deterministik):</h3>";
echo "<p>Angka Acak 1 (Seed 12345): <strong style='color: #059669;'>$angka1</strong></p>";
echo "<p>Angka Acak 2 (Seed 12345): <strong style='color: #059669;'>$angka2</strong></p>";
echo "<p style='color: green;'>Dengan seed yang sama, urutan angka yang dihasilkan akan selalu 100% konsisten.</p>";
?>`,
    codeExplanation: [
      'mt_srand(12345) mengunci urutan pseudorandom sehingga hasil pengujian selalu stabil dan dapat direproduksi.'
    ],
    challenge: {
      instruction: 'Tanam seed acak dengan mt_srand(42); dan cetak mt_rand(1, 10).',
      starterCode: `<?php
mt_srand(42);
echo mt_rand(1, 10);
?>`,
      hint: 'Panggil mt_srand(42).'
    },
    quiz: {
      question: 'Kapan programmer sengaja menanam seed menggunakan `mt_srand(seed)`?',
      options: [
        'Pada skenario Unit Testing dan simulasi matematika di mana urutan output acak harus dapat direproduksi secara konsisten dan identik',
        'Untuk membuat password',
        'Hanya saat install database',
        'Tidak pernah'
      ],
      correctIndex: 0,
      explanation: 'Seeding memungkinkan reproducible randomness yang sangat penting untuk automated testing.'
    }
  }
];

module.exports = phpPart37RefMath3;
