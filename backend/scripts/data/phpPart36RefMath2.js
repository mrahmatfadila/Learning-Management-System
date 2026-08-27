// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (MATH PART 2: 384-395)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart36RefMath2 = [
  // 384. DECBIN()
  {
    id: 'php-ref-math-decbin',
    title: 'PHP decbin()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 384,
    overview: 'Kuasai fungsi decbin(): mengonversi angka desimal integer (basis 10) menjadi representasi string biner (basis 2).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DECIMAL TO BINARY</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 384 / 395</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔢 Desimal ke Biner (decbin)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>decbin(int $num): string</code> menghasilkan string digit biner (<code>'0'</code> dan <code>'1'</code>) dari integer positif yang diberikan.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$angka = 43;
$biner = decbin($angka);

echo "<h3>Hasil Penggunaan decbin():</h3>";
echo "<p>Desimal: <strong>$angka</strong></p>";
echo "<p>Biner: <strong style='color: #059669; font-family: monospace; font-size: 18px;'>$biner</strong></p>";
echo "<p>decbin(255) = <strong>" . decbin(255) . "</strong></p>";
?>`,
    codeExplanation: [
      'decbin(43) menghasilkan string "101011".'
    ],
    challenge: {
      instruction: 'Ubah desimal 15 ke string biner dengan decbin(15).',
      starterCode: `<?php
echo decbin(15);
?>`,
      hint: 'Panggil decbin(15).'
    },
    quiz: {
      question: 'Berapakah string biner yang dihasilkan oleh `decbin(8)`?',
      options: [
        'String "1000"',
        'String "1111"',
        'String "0100"',
        'Integer 8'
      ],
      correctIndex: 0,
      explanation: '8 desimal = 2^3 = "1000" biner.'
    }
  },

  // 385. DECHEX()
  {
    id: 'php-ref-math-dechex',
    title: 'PHP dechex()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 385,
    overview: 'Kuasai fungsi dechex(): mengonversi angka desimal integer (basis 10) menjadi representasi string heksadesimal huruf kecil (basis 16), sangat populer untuk kalkulasi kode warna HEX RGB (#RRGGBB).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DECIMAL TO HEX</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 385 / 395</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎨 Desimal ke Heksadesimal (dechex)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>dechex(int $num): string</code> mengonversi integer ke string heksadesimal (karakter <code>0-9</code> dan <code>a-f</code>). Sangat sering digunakan untuk membuat kode warna HEX CSS dari nilai kanal RGB (0-255).
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Mengonversi RGB (Red: 79, Green: 70, Blue: 229) ke Kode Warna HEX
$r = 79;
$g = 70;
$b = 229;

$hexColor = sprintf("#%02s%02s%02s", dechex($r), dechex($g), dechex($b));

echo "<h3>Hasil Penggunaan dechex() (Pembuat Warna HEX):</h3>";
echo "<p>RGB: ($r, $g, $b)</p>";
echo "<p>Kode HEX: <strong style='color: $hexColor; font-size: 18px;'>$hexColor</strong></p>";
echo "<p>dechex(255) = <strong>" . dechex(255) . "</strong></p>";
?>`,
    codeExplanation: [
      'dechex(255) menghasilkan "ff".',
      'sprintf("#%02s...", dechex(...)) memastikan leading zero pada angka di bawah 16.'
    ],
    challenge: {
      instruction: 'Ubah desimal 254 ke heksadesimal dengan dechex(254).',
      starterCode: `<?php
echo dechex(254);
?>`,
      hint: 'Panggil dechex(254).'
    },
    quiz: {
      question: 'Berapakah string heksadesimal yang dihasilkan oleh `dechex(255)`?',
      options: [
        'String "ff"',
        'String "100"',
        'String "ee"',
        'String "f0"'
      ],
      correctIndex: 0,
      explanation: '255 desimal setara dengan heksadesimal "ff".'
    }
  },

  // 386. DECOCT()
  {
    id: 'php-ref-math-decoct',
    title: 'PHP decoct()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 386,
    overview: 'Kuasai fungsi decoct(): mengonversi angka desimal integer (basis 10) menjadi representasi string oktal (basis 8), sangat populer untuk representasi permission chmod Linux (0755, 0644).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DECIMAL TO OCTAL</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 386 / 395</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📦 Desimal ke Oktal (decoct)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>decoct(int $num): string</code> mengonversi angka desimal ke string bilangan berbasis 8 (digit <code>0-7</code>). Digunakan untuk membaca bitmask hak akses berkas UNIX dari fungsi <code>fileperms()</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$desimal = 493; // 0755 oktal = (7*64) + (5*8) + 5 = 493 desimal
$oktal = decoct($desimal);

echo "<h3>Hasil Penggunaan decoct():</h3>";
echo "<p>Desimal: <strong>$desimal</strong></p>";
echo "<p>Oktal CHMOD: <strong style='color: #059669; font-size: 18px;'>0$oktal</strong> (Izin Akses 0755)</p>";
echo "<p>decoct(64) = <strong>" . decoct(64) . "</strong></p>";
?>`,
    codeExplanation: [
      'decoct(493) menghasilkan "755" (standar izin file executable Linux).'
    ],
    challenge: {
      instruction: 'Ubah desimal 8 ke oktal dengan decoct(8).',
      starterCode: `<?php
echo decoct(8);
?>`,
      hint: 'Panggil decoct(8).'
    },
    quiz: {
      question: 'Berapakah nilai string oktal dari `decoct(8)`?',
      options: [
        'String "10"',
        'String "8"',
        'String "7"',
        'String "08"'
      ],
      correctIndex: 0,
      explanation: 'Angka 8 desimal setara dengan 10 oktal (1*8 + 0*1).'
    }
  },

  // 387. DEG2RAD()
  {
    id: 'php-ref-math-deg2rad',
    title: 'PHP deg2rad()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 387,
    overview: 'Kuasai fungsi deg2rad(): mengonversi sudut dari satuan Derajat (Degrees) menjadi satuan Radian (Radians) untuk komputasi trigonometri presisi.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DEGREES TO RADIANS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 387 / 395</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📐 Derajat ke Radian (deg2rad)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>deg2rad(float $num): float</code> menghitung rumus <code>$num * (M_PI / 180)</code>. Wajib dipanggil sebelum mengirimkan nilai sudut berderajat ke fungsi <code>sin()</code>, <code>cos()</code>, atau <code>tan()</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$derajat = 180;
$radian = deg2rad($derajat);

echo "<h3>Hasil Penggunaan deg2rad():</h3>";
echo "<p>$derajat derajat = <strong style='color: #059669;'>" . round($radian, 6) . " rad</strong> (Nilai PI = " . M_PI . ")</p>";
echo "<p>90 derajat = <strong>" . deg2rad(90) . " rad</strong> (PI/2)</p>";
?>`,
    codeExplanation: [
      'deg2rad(180) menghasilkan nilai tepat pi (3.1415926535...).'
    ],
    challenge: {
      instruction: 'Konversi 360 derajat ke radian dengan deg2rad(360).',
      starterCode: `<?php
echo round(deg2rad(360), 4);
?>`,
      hint: 'Panggil deg2rad(360).'
    },
    quiz: {
      question: 'Berapakah nilai radian yang dihasilkan oleh `deg2rad(180)`?',
      options: [
        'Nilai konstanta Pi (M_PI ≈ 3.14159265...)',
        'Float 1.0',
        'Float 180.0',
        'Float 0.0'
      ],
      correctIndex: 0,
      explanation: '180 derajat setara dengan 1 Pi Radian.'
    }
  },

  // 388. EXP()
  {
    id: 'php-ref-math-exp',
    title: 'PHP exp()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 388,
    overview: 'Kuasai fungsi exp(): menghitung nilai konstanta Euler (e ≈ 2.71828) yang dipangkatkan dengan x (e^x), pondasi bunga majemuk finansial dan model pertumbuhan machine learning.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">EXPONENTIAL</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 388 / 395</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📈 Eksponensial Basis Euler (exp)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>exp(float $num): float</code> mengembalikan <code>e^num</code> di mana <code>e</code> adalah basis logaritma natural (M_E ≈ 2.718281828459).
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Hasil Penggunaan exp():</h3>";
echo "<p>exp(0) [e^0] = <strong>" . exp(0) . "</strong></p>";
echo "<p>exp(1) [e^1] = <strong style='color: #059669;'>" . exp(1) . "</strong> (Konstanta M_E)</p>";
echo "<p>exp(2) [e^2] = <strong>" . round(exp(2), 4) . "</strong></p>";
?>`,
    codeExplanation: [
      'exp(1) mengembalikan nilai konstanta Euler (M_E).'
    ],
    challenge: {
      instruction: 'Hitung exp(0) dengan echo exp(0);.',
      starterCode: `<?php
echo "e^0 = " . exp(0);
?>`,
      hint: 'Panggil exp(0).'
    },
    quiz: {
      question: 'Berapakah nilai kembalian dari `exp(0)`?',
      options: [
        'Float 1.0 (karena bilangan apa pun dipangkatkan 0 menghasilkan 1)',
        'Float 0.0',
        'Float 2.718',
        'NAN'
      ],
      correctIndex: 0,
      explanation: 'e^0 = 1.0.'
    }
  },

  // 389. EXPM1()
  {
    id: 'php-ref-math-expm1',
    title: 'PHP expm1()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 389,
    overview: 'Kuasai fungsi expm1(): menghitung nilai (e^x - 1) dengan presisi tinggi bahkan ketika nilai x mendekati nol (mencegah catastrophic cancellation).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">HIGH PRECISION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 389 / 395</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔬 Eksponensial Presisi Tinggi (expm1)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>expm1(float $num): float</code> menghitung <code>exp($num) - 1</code>. Sangat akurat ketika <code>$num</code> sangat kecil (seperti <code>1e-15</code>) di mana perhitungan <code>exp($x) - 1</code> biasa akan kehilangan presisi desimal akibat floating-point roundoff.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$smallVal = 0.0000001;

$hasilBiasa = exp($smallVal) - 1;
$hasilPresisi = expm1($smallVal);

echo "<h3>Hasil Penggunaan expm1():</h3>";
echo "<p>exp(\$x) - 1 = <strong>$hasilBiasa</strong></p>";
echo "<p>expm1(\$x)   = <strong style='color: #059669;'>$hasilPresisi</strong> (Presisi Tinggi)</p>";
echo "<p>expm1(0)    = <strong>" . expm1(0) . "</strong></p>";
?>`,
    codeExplanation: [
      'expm1($x) menghindari kesalahan pengurangan presisi floating-point pada angka yang sangat kecil.'
    ],
    challenge: {
      instruction: 'Hitung expm1(0) dan cetak hasilnya.',
      starterCode: `<?php
echo "expm1(0) = " . expm1(0);
?>`,
      hint: 'Panggil expm1(0).'
    },
    quiz: {
      question: 'Apa fungsi utama dari `expm1($x)` dibandingkan menulis `exp($x) - 1` manual?',
      options: [
        'Menjaga presisi floating point yang sangat akurat ketika nilai $x sangat kecil mendekati nol',
        'Mengubah nilai menjadi integer',
        'Menghitung akar kuadrat',
        'Hanya untuk mempercepat kalkulasi string'
      ],
      correctIndex: 0,
      explanation: 'expm1 dirancang untuk kestabilan numerik pada bilangan floating-point mikro.'
    }
  },

  // 390. FLOOR()
  {
    id: 'php-ref-math-floor',
    title: 'PHP floor()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 390,
    overview: 'Kuasai fungsi floor(): membulatkan angka pecahan float KE BAWAH menuju integer terdekat (Floor Rounding), fungsi esensial untuk kalkulasi durasi waktu jam/menit.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ROUND DOWN</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 390 / 395</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔽 Pembulatan ke Bawah (floor)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>floor(int|float $num): float</code> mengembalikan bilangan bulat terbesar yang lebih kecil atau sama dengan <code>$num</code>. Contoh: <code>floor(4.9)</code> menghasilkan <code>4.0</code>, dan <code>floor(-3.1)</code> menghasilkan <code>-4.0</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Konversi total detik ke Jam dan Menit
$totalDetik = 3750; // 1 Jam, 2 Menit, 30 Detik

$jam = floor($totalDetik / 3600);
$sisaDetik = $totalDetik % 3600;
$menit = floor($sisaDetik / 60);
$detik = $sisaDetik % 60;

echo "<h3>Hasil Penggunaan floor() (Kalkulator Durasi):</h3>";
echo "<p>Total Detik: <strong>$totalDetik detik</strong></p>";
echo "<p>Durasi: <strong style='color: #059669; font-size: 18px;'>$jam Jam $menit Menit $detik Detik</strong></p>";
echo "<p>floor(9.99) = <strong>" . floor(9.99) . "</strong> | floor(-3.1) = <strong>" . floor(-3.1) . "</strong></p>";
?>`,
    codeExplanation: [
      'floor(4.99) membulatkan ke bawah menjadi 4.',
      'floor(-3.1) membulatkan ke bawah menjadi -4.'
    ],
    challenge: {
      instruction: 'Bulatkan angka 7.9 ke bawah dengan floor(7.9).',
      starterCode: `<?php
echo "Floor: " . floor(7.9);
?>`,
      hint: 'Panggil floor(7.9).'
    },
    quiz: {
      question: 'Berapakah nilai yang dihasilkan oleh `floor(-3.1)`?',
      options: [
        '-4 (karena -4 lebih kecil dari -3.1 pada garis bilangan)',
        '-3',
        '-3.0',
        '3'
      ],
      correctIndex: 0,
      explanation: 'floor membulatkan ke arah bilangan bulat yang lebih kecil (-4 < -3.1).'
    }
  },

  // 391. FMOD()
  {
    id: 'php-ref-math-fmod',
    title: 'PHP fmod()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 391,
    overview: 'Kuasai fungsi fmod(): menghitung sisa hasil bagi (Modulo) untuk bilangan pecahan float (Floating-point Modulo) di mana operator % biasa tidak dapat bekerja.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">FLOAT MODULO</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 391 / 395</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">➗ Modulo Bilangan Pecahan (fmod)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Operator modulo biasa <code>%</code> di PHP hanya bekerja pada integer (mengonversi float ke int). <code>fmod(float $num1, float $num2): float</code> mempertahankan nilai desimal pecahan float untuk menghitung sisa bagi presisi.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$x = 5.7;
$y = 1.3;

$sisaFloat = fmod($x, $y);

echo "<h3>Hasil Penggunaan fmod():</h3>";
echo "<p>$x fmod $y = <strong style='color: #059669; font-size: 18px;'>$sisaFloat</strong></p>";
echo "<p>Pembuktian: 4 x 1.3 = 5.2. Sisa bagi: 5.7 - 5.2 = <strong>0.5</strong></p>";
?>`,
    codeExplanation: [
      'fmod(5.7, 1.3) menghasilkan 0.5.',
      'Sangat penting saat membagi satuan float (seperti berat gram atau koordinat waktu desimal).'
    ],
    challenge: {
      instruction: 'Hitung sisa bagi float 7.5 dibagi 2 dengan fmod(7.5, 2).',
      starterCode: `<?php
echo fmod(7.5, 2);
?>`,
      hint: 'Panggil fmod(7.5, 2).'
    },
    quiz: {
      question: 'Mengapa kita harus menggunakan `fmod()` alih-alih operator `%` saat melakukan operasi modulo pada bilangan berkoma (float)?',
      options: [
        'Karena operator `%` secara otomatis mengubah kedua operan menjadi integer dan membuang angka desimalnya',
        'Karena operator % menghasilkan string',
        'Karena fmod lebih lambat',
        'Keduanya identik'
      ],
      correctIndex: 0,
      explanation: 'Operator % di PHP melakukan integer cast sehingga tidak akurat untuk pecahan float.'
    }
  },

  // 392. GETRANDMAX()
  {
    id: 'php-ref-math-getrandmax',
    title: 'PHP getrandmax()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 392,
    overview: 'Kuasai fungsi getrandmax(): mengetahui nilai integer acak maksimum tertinggi yang dapat dihasilkan oleh pemanggilan fungsi rand().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">RANDOM BOUNDS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 392 / 395</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎲 Batas Nilai Acak Maksimum (getrandmax)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>getrandmax(): int</code> mengembalikan angka integer terbesar yang mungkin dihasilkan oleh <code>rand()</code> (biasanya 2147483647 pada sistem 32/64-bit). Digunakan untuk normalisasi nilai float acak 0.0 hingga 1.0: <code>rand() / getrandmax()</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$maxRand = getrandmax();

// Menghasilkan Float Acak antara 0.0 dan 1.0
$randomFloat = rand() / $maxRand;

echo "<h3>Hasil Penggunaan getrandmax():</h3>";
echo "<p>Batas Integer Acak Maksimum: <strong style='color: #4f46e5;'>" . number_format($maxRand, 0, ',', '.') . "</strong></p>";
echo "<p>Nilai Float Acak [0.0 - 1.0]: <strong style='color: #059669;'>" . round($randomFloat, 6) . "</strong></p>";
?>`,
    codeExplanation: [
      'getrandmax() mengembalikan 2147483647.',
      'Membagi rand() dengan getrandmax() adalah teknik klasik menghasilkan float acak seragam antara 0 dan 1.'
    ],
    challenge: {
      instruction: 'Cetak nilai getrandmax().',
      starterCode: `<?php
echo "Max Rand: " . getrandmax();
?>`,
      hint: 'Panggil getrandmax().'
    },
    quiz: {
      question: 'Bagaimana rumus klasik menghasilkan angka float acak seragam di rentang `[0.0, 1.0]` menggunakan `getrandmax()`?',
      options: [
        '`rand() / getrandmax()`',
        '`rand() * getrandmax()`',
        '`getrandmax() - rand()`',
        '`rand(0, 1)`'
      ],
      correctIndex: 0,
      explanation: 'Membagi nilai acak rand() dengan batas maksimumnya menghasilkan rasio float 0.0 hingga 1.0.'
    }
  },

  // 393. HEXDEC()
  {
    id: 'php-ref-math-hexdec',
    title: 'PHP hexdec()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 393,
    overview: 'Kuasai fungsi hexdec(): mengonversi string heksadesimal (basis 16) menjadi angka desimal integer (basis 10), fungsi utama parsing kode warna HEX CSS ke RGB.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">HEX TO DECIMAL</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 393 / 395</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎨 Heksadesimal ke Desimal (hexdec)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>hexdec(string $hex_string): int|float</code> mengubah string heksadesimal (misal <code>"FF"</code>, <code>"1A"</code>) menjadi representasi desimal integer.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Mengurai Kode Warna CSS HEX (#4f46e5) ke Nilai RGB
$hexColor = "4f46e5";

$red   = hexdec(substr($hexColor, 0, 2)); // "4f" -> 79
$green = hexdec(substr($hexColor, 2, 2)); // "46" -> 70
$blue  = hexdec(substr($hexColor, 4, 2)); // "e5" -> 229

echo "<h3>Hasil Penggunaan hexdec() (Parser Warna HEX ke RGB):</h3>";
echo "<p>Kode HEX: <strong>#$hexColor</strong></p>";
echo "<p>Komponen RGB: <strong style='color: #4f46e5;'>rgb($red, $green, $blue)</strong></p>";
echo "<p>hexdec('FF') = <strong>" . hexdec("FF") . "</strong></p>";
?>`,
    codeExplanation: [
      'hexdec("FF") mengembalikan integer 255.',
      'Sangat efisien untuk pengolahan gambar (image processing GD / Imagick).'
    ],
    challenge: {
      instruction: 'Konversi heksadesimal "1A" ke desimal dengan hexdec("1A").',
      starterCode: `<?php
echo hexdec("1A");
?>`,
      hint: 'Panggil hexdec("1A").'
    },
    quiz: {
      question: 'Berapakah nilai integer desimal yang dihasilkan oleh `hexdec("A")`?',
      options: [
        'Integer 10',
        'Integer 16',
        'Integer 1',
        'Integer 100'
      ],
      correctIndex: 0,
      explanation: 'Dalam sistem heksadesimal, digit A setara dengan angka 10.'
    }
  },

  // 394. HYPOT()
  {
    id: 'php-ref-math-hypot',
    title: 'PHP hypot()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 394,
    overview: 'Kuasai fungsi hypot(): menghitung panjang sisi miring segitiga siku-siku (Hipotenusa Pythagoras sqrt(x^2 + y^2)) dan jarak Euclidean 2D tanpa risiko underflow/overflow.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PYTHAGORAS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 394 / 395</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📐 Hipotenusa & Jarak 2D (hypot)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>hypot(float $x, float $y): float</code> menghitung <code>sqrt($x*$x + $y*$y)</code> secara stabil. Digunakan untuk menghitung jarak lurus (Euclidean Distance) antara dua titik koordinat.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Menghitung Jarak Euclidean Titik A (0,0) ke Titik B (3, 4)
$alas = 3;
$tinggi = 4;
$sisiMiring = hypot($alas, $tinggi);

echo "<h3>Hasil Penggunaan hypot():</h3>";
echo "<p>Alas: $alas, Tinggi: $tinggi</p>";
echo "<p>Sisi Miring (Hipotenusa): <strong style='color: #059669; font-size: 18px;'>$sisiMiring</strong> (Tripel Pythagoras 3, 4, 5)</p>";
echo "<p>hypot(6, 8) = <strong>" . hypot(6, 8) . "</strong> (10)</p>";
?>`,
    codeExplanation: [
      'hypot(3, 4) menghitung sqrt(9 + 16) = sqrt(25) = 5.0.'
    ],
    challenge: {
      instruction: 'Hitung hipotenusa untuk alas 5 dan tinggi 12 dengan hypot(5, 12).',
      starterCode: `<?php
echo "Sisi miring: " . hypot(5, 12);
?>`,
      hint: 'Panggil hypot(5, 12).'
    },
    quiz: {
      question: 'Berapakah nilai kembalian dari `hypot(3, 4)`?',
      options: [
        'Float 5.0',
        'Float 7.0',
        'Float 25.0',
        'Float 12.0'
      ],
      correctIndex: 0,
      explanation: 'sqrt(3^2 + 4^2) = sqrt(9 + 16) = sqrt(25) = 5.0.'
    }
  },

  // 395. INTDIV()
  {
    id: 'php-ref-math-intdiv',
    title: 'PHP intdiv()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 395,
    overview: 'Kuasai fungsi intdiv(): melakukan pembagian bilangan bulat integer murni (Integer Division) tanpa pecahan desimal float.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">INTEGER DIVISION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 395 / 395</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">➗ Pembagian Integer Murni (intdiv)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>intdiv(int $num1, int $num2): int</code> mengembalikan hasil bagi integer (membuang sisa bagi tanpa float). Jika pembagi bernilai 0, fungsi melempar <code>DivisionByZeroError</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$totalKue = 10;
$jumlahAnak = 3;

// Pembagian Integer
$kuePerAnak = intdiv($totalKue, $jumlahAnak);
$sisaKue = $totalKue % $jumlahAnak;

echo "<h3>Hasil Penggunaan intdiv():</h3>";
echo "<p>Total Kue: $totalKue, Jumlah Anak: $jumlahAnak</p>";
echo "<p>Setiap anak mendapat: <strong style='color: #059669; font-size: 18px;'>$kuePerAnak kue utuh</strong></p>";
echo "<p>Sisa kue yang belum dibagi (%): <strong>$sisaKue kue</strong></p>";
echo "<p>intdiv(8, 3) = <strong>" . intdiv(8, 3) . "</strong></p>";
?>`,
    codeExplanation: [
      'intdiv(10, 3) mengembalikan integer 3 (membuang 0.333...).',
      'Lebih aman dan berkinerja tinggi dibanding (int)($10 / 3).'
    ],
    challenge: {
      instruction: 'Bagi 17 dengan 5 secara integer menggunakan intdiv(17, 5).',
      starterCode: `<?php
echo intdiv(17, 5);
?>`,
      hint: 'Panggil intdiv(17, 5).'
    },
    quiz: {
      question: 'Berapakah nilai kembalian dari `intdiv(10, 3)`?',
      options: [
        'Integer 3',
        'Float 3.3333',
        'Integer 1',
        'Float 3.0'
      ],
      correctIndex: 0,
      explanation: 'intdiv menghasilkan bagian bulat integer murni (3).'
    }
  }
];

module.exports = phpPart36RefMath2;
