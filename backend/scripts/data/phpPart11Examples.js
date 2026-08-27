// ==========================================================
// DATA MATERI PHP: BAB 9 - PHP EXAMPLES & PRACTICE TOOLKIT
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart11Examples = [
  // 1. PHP EXAMPLES
  {
    id: 'php-examples-showcase',
    title: 'PHP Examples',
    chapter: 'PHP Examples',
    chapterId: 'php-chap-examples',
    order: 1,
    overview: 'Koleksi lengkap contoh kode praktis (Cheat Sheet & Showcase) PHP 8.x: manipulasi string, array pipeline, pemrosesan form, operasi database PDO, dan pembuatan REST API siap pakai.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PHP EXAMPLES</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 01 / 08</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">💡 Showcase Contoh Kode Praktis PHP 8</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Kumpulan pola kode (Design Patterns) dan contoh sintaks siap pakai yang paling sering dicari dan diimplementasikan dalam pengembangan website backend komersial sehari-hari.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-purple-600 dark:text-purple-400 block mb-1">1. Enkripsi Password Aman</strong>
            <code>password_hash($pwd, PASSWORD_BCRYPT)</code> & <code>password_verify()</code>.
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-indigo-600 dark:text-indigo-400 block mb-1">2. Token Acak Kriptografis</strong>
            <code>bin2hex(random_bytes(32))</code> untuk CSRF Token & Reset Password.
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-emerald-600 dark:text-emerald-400 block mb-1">3. Respon JSON REST API</strong>
            <code>header('Content-Type: application/json');</code> + <code>json_encode()</code>.
          </div>
        </div>
      </div>
    `,
    code: `<?php
// 1. Contoh Hashing Password Standar Industri
$passwordAsli = "RahasiaSiswa123!";
$hashBcrypt = password_hash($passwordAsli, PASSWORD_BCRYPT);

// 2. Verifikasi Password saat Login
$ujiPasswordBenar = password_verify("RahasiaSiswa123!", $hashBcrypt);
$ujiPasswordSalah = password_verify("PasswordSalah", $hashBcrypt);

// 3. Pembuatan CSRF Token Kriptografis
$csrfToken = bin2hex(random_bytes(16));

echo "<h3>Contoh Kode Penting di Produksi:</h3>";
echo "<ul>";
echo "<li><strong>Password Asli:</strong> <code>$passwordAsli</code></li>";
echo "<li><strong>Hasil Hash BCrypt:</strong> <code style='font-size: 11px; word-break: break-all;'>$hashBcrypt</code></li>";
echo "<li><strong>Uji Login Benar:</strong> " . ($ujiPasswordBenar ? "<span style='color: green;'>✓ Password Cocok (Akses Diberikan)</span>" : "✗ Gagal") . "</li>";
echo "<li><strong>Uji Login Salah:</strong> " . ($ujiPasswordSalah ? "✓ Cocok" : "<span style='color: red;'>✗ Password Salah (Ditolak)</span>") . "</li>";
echo "<li><strong>CSRF Token Otomatis:</strong> <code>$csrfToken</code></li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'password_hash() menggunakan algoritma BCrypt yang tahan terhadap serangan brute-force dan rainbow tables.',
      'password_verify() membandingkan string mentah dengan hash secara konstan (Timing Attack Safe).',
      'random_bytes() menghasilkan bilangan acak yang aman secara kriptografi untuk kebutuhan token sesi/reset.'
    ],
    challenge: {
      instruction: 'Uji fungsi password_hash("admin123", PASSWORD_BCRYPT) dan cetak hasilnya.',
      starterCode: `<?php
$hash = password_hash("admin123", PASSWORD_BCRYPT);
echo "Hash: " . substr($hash, 0, 30) . "...";
?>`,
      hint: 'Panggil password_hash("admin123", PASSWORD_BCRYPT).'
    },
    quiz: {
      question: 'Fungsi resmi PHP apakah yang paling direkomendasikan untuk mengenkripsi/hashing kata sandi akun pengguna?',
      options: [
        'password_hash() dengan PASSWORD_BCRYPT atau PASSWORD_ARGON2ID',
        'md5()',
        'sha1()',
        'base64_encode()'
      ],
      correctIndex: 0,
      explanation: 'password_hash() adalah fungsi modern PHP yang secara otomatis mengelola salt dan algoritma penguncian aman (BCrypt/Argon2).'
    }
  },

  // 2. PHP COMPILER
  {
    id: 'php-examples-compiler',
    title: 'PHP Compiler',
    chapter: 'PHP Examples',
    chapterId: 'php-chap-examples',
    order: 2,
    overview: 'Pahami cara kerja mesin eksekusi PHP: Zend Engine, Opcode, OPcache, dan fitur Just-In-Time (JIT) Compiler di PHP 8.x yang melipatgandakan kecepatan komputasi CPU.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PHP ENGINE & JIT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 02 / 08</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚡ Arsitektur Zend Engine & JIT Compiler</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Bagaimana kode teks PHP dieksekusi oleh server? Skrip PHP melalui 4 tahapan: <strong>Lexing (Tokenisasi) &rarr; Parsing (AST) &rarr; Compilation (Opcode) &rarr; Execution (Zend VM / JIT Machine Code)</strong>.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div class="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800/50">
            <h4 class="font-bold text-purple-700 dark:text-purple-400 mb-1">1. OPcache</h4>
            <p class="text-slate-600 dark:text-slate-400">Menyimpan Opcode bytecode yang sudah terkompilasi di shared memory RAM sehingga PHP tidak perlu membaca dan mengkompilasi file ulang pada setiap request web.</p>
          </div>
          <div class="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/50">
            <h4 class="font-bold text-emerald-700 dark:text-emerald-400 mb-1">2. JIT (Just-In-Time) PHP 8+</h4>
            <p class="text-slate-600 dark:text-slate-400">Mengonversi Opcode langsung ke kode instruksi mesin CPU asli (x86/ARM) secara realtime, sangat cepat untuk komputasi berat, AI, dan pengolahan data masif.</p>
          </div>
        </div>
      </div>
    `,
    code: `<?php
// Menginspeksi Versi Engine dan Ekstensi OPcache Server
$versiPhp = phpversion();
$zendVersion = zend_version();
$isOpcacheActive = extension_loaded('Zend OPcache');

echo "<h3>Informasi Mesin Eksekusi PHP Server:</h3>";
echo "<ul>";
echo "<li><strong>Versi PHP Aktif:</strong> $versiPhp</li>";
echo "<li><strong>Versi Zend Engine:</strong> $zendVersion</li>";
echo "<li><strong>Status OPcache:</strong> " . ($isOpcacheActive ? "<span style='color: green; font-weight: bold;'>Aktif (Tersedia)</span>" : "<span style='color: gray;'>Nonaktif</span>") . "</li>";
echo "<li><strong>Penggunaan Memori Skrip (Peak):</strong> " . round(memory_get_peak_usage(true) / 1024 / 1024, 2) . " MB</li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'phpversion() dan zend_version() mengembalikan informasi inti runtime PHP server.',
      'memory_get_peak_usage() memantau konsumsi RAM tertinggi yang digunakan skrip untuk analisis optimasi performa.'
    ],
    challenge: {
      instruction: 'Cetak versi PHP aktif menggunakan phpversion().',
      starterCode: `<?php
echo "PHP Engine Version: " . phpversion();
?>`,
      hint: 'Panggil fungsi phpversion().'
    },
    quiz: {
      question: 'Fitur revolusioner apakah yang diperkenalkan pada PHP 8.0 untuk mengompilasi Opcode langsung ke instruksi mesin CPU asli?',
      options: [
        'JIT (Just-In-Time) Compiler',
        'V8 Engine',
        'Bytecode Optimizer',
        'PHP Virtual Machine'
      ],
      correctIndex: 0,
      explanation: 'JIT Compiler diperkenalkan di PHP 8 untuk mengubah bytecode Opcode langsung menjadi instruksi CPU arsitektur server.'
    }
  },

  // 3. PHP QUIZ
  {
    id: 'php-examples-quiz',
    title: 'PHP Quiz',
    chapter: 'PHP Examples',
    chapterId: 'php-chap-examples',
    order: 3,
    overview: 'Asesmen Kuis Interaktif Pemahaman Menyeluruh PHP 8: uji pengetahuan seputar loosely-typed vs strict-typing, array functions, OOP access modifiers, dan PDO Prepared Statements.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PHP QUIZ</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 03 / 08</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧠 Evaluasi Kuis Pemahaman PHP</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Uji ketelitian Anda terhadap detail sintaks PHP, aturan casting tipe data, penanganan scope variabel, dan pola arsitektur backend yang aman.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Generator Soal Kuis Interaktif
$pertanyaanKuis = [
    [
        "tanya" => "Apa hasil dari evaluasi: (5 <=> 10)?",
        "jawaban" => "-1 (karena 5 lebih kecil dari 10)",
        "kategori" => "Operator Spaceship"
    ],
    [
        "tanya" => "Apa fungsi dari null coalescing operator ($a ?? $b)?",
        "jawaban" => "Mengembalikan $b jika $a bernilai null atau belum terdefinisi",
        "kategori" => "Null Safety"
    ],
    [
        "tanya" => "Mengapa method __construct() penting dalam sebuah Class?",
        "jawaban" => "Menginisialisasi nilai properti secara otomatis saat objek dibuat dengan 'new'",
        "kategori" => "OOP Basics"
    ]
];

echo "<h3>Daftar Soal Latihan & Kunci Jawaban:</h3>";
foreach ($pertanyaanKuis as $idx => $q) {
    echo "<div style='margin-bottom: 12px; padding: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px;'>";
    echo "<p style='margin: 0 0 5px 0;'><strong>" . ($idx + 1) . ". {$q['tanya']}</strong> <span style='font-size: 11px; background: #e0e7ff; padding: 2px 6px; border-radius: 4px;'>{$q['kategori']}</span></p>";
    echo "<p style='margin: 0; font-size: 12px; color: #065f46;'>💡 <strong>Jawaban:</strong> {$q['jawaban']}</p>";
    echo "</div>";
}
?>`,
    codeExplanation: [
      'Latihan kuis interaktif memperkuat pemahaman konsep teoritis sebelum terjun ke skenario coding challenge yang sesungguhnya.'
    ],
    challenge: {
      instruction: 'Jawab kuis asesmen di panel bawah untuk menguji skor pemahaman Anda!',
      starterCode: `<?php
echo "Selesaikan kuis interaktif di bawah untuk menguji kompetensi Anda.";
?>`,
      hint: 'Klik RUN dan pilih jawaban yang benar di kuis.'
    },
    quiz: {
      question: 'Manakah deklarasi yang mewajibkan mode tipe data ketat (Strict Typing) di baris paling awal file PHP?',
      options: [
        'declare(strict_types=1);',
        'enable_strict_mode();',
        'use strict;',
        '#strict-types = true'
      ],
      correctIndex: 0,
      explanation: 'declare(strict_types=1); di baris pertama file menginstruksikan PHP untuk memberlakukan pemeriksaan tipe parameter & return type secara ketat (tanpa konversi otomatis).'
    }
  },

  // 4. PHP EXERCISES
  {
    id: 'php-examples-exercises',
    title: 'PHP Exercises',
    chapter: 'PHP Examples',
    chapterId: 'php-chap-examples',
    order: 4,
    overview: 'Kumpulan latihan soal terpandu (Guided Exercises): algoritma manipulasi string, perhitungan diskon bertingkat, pemfilteran array dengan array_filter, dan pemetaan data.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PHP EXERCISES</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 04 / 08</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏋️ Latihan Soal Terpandu (Guided Exercises)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Asah logika koding Anda dengan memecahkan studi kasus mini: kalkulasi harga belanja e-commerce dengan sistem voucher diskon dinamis.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Studi Kasus: Kalkulator Checkout E-Commerce
function hitungTotalBelanja(float $subtotal, ?string $kodeVoucher = null): array {
    $diskon = 0;
    $persenDiskon = 0;
    
    // Evaluasi Kode Voucher
    if ($kodeVoucher === "DEVGROWPRO") {
        $persenDiskon = 20; // Diskon 20%
        $diskon = $subtotal * 0.20;
    } elseif ($kodeVoucher === "DISKON10") {
        $persenDiskon = 10;
        $diskon = $subtotal * 0.10;
    }
    
    $ongkir = ($subtotal > 500000) ? 0 : 25000; // Gratis ongkir jika belanja di atas 500rb
    $totalAkhir = ($subtotal - $diskon) + $ongkir;
    
    return [
        "subtotal" => $subtotal,
        "diskon" => $diskon,
        "persen_diskon" => $persenDiskon,
        "ongkir" => $ongkir,
        "total_bayar" => $totalAkhir
    ];
}

$hasilCheckout = hitungTotalBelanja(750000, "DEVGROWPRO");

echo "<h3>Rincian Pembayaran Faktur:</h3>";
echo "<ul>";
echo "<li>Subtotal: Rp " . number_format($hasilCheckout['subtotal'], 0, ',', '.') . "</li>";
echo "<li>Diskon ({$hasilCheckout['persen_diskon']}%): <span style='color: green;'>- Rp " . number_format($hasilCheckout['diskon'], 0, ',', '.') . "</span></li>";
echo "<li>Ongkos Kirim: " . ($hasilCheckout['ongkir'] === 0 ? "<span style='color: green;'>Gratis Ongkir!</span>" : "Rp " . number_format($hasilCheckout['ongkir'], 0, ',', '.')) . "</li>";
echo "<li><strong>Total yang Harus Dibayar:</strong> <strong style='font-size: 16px; color: #4f46e5;'>Rp " . number_format($hasilCheckout['total_bayar'], 0, ',', '.') . "</strong></li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'Tipe parameter nullable ?string $kodeVoucher = null memungkinkan fungsi menerima string voucher atau nilai null jika pembeli tidak memakai kupon.',
      'Fungsi mengembalikan array asosiatif berisi breakdown lengkap rincian pembayaran.'
    ],
    challenge: {
      instruction: 'Ubah subtotal menjadi 400000 dan amati biaya ongkir Rp 25.000 otomatis ditambahkan.',
      starterCode: `<?php
$subtotal = 400000;
$ongkir = ($subtotal > 500000) ? 0 : 25000;
echo "Ongkir: Rp $ongkir";
?>`,
      hint: 'Klik RUN untuk menguji ternary ongkir.'
    },
    quiz: {
      question: 'Sintaks tipe data apakah (?string) yang menandakan bahwa parameter fungsi dapat menerima tipe data String atau nilai NULL?',
      options: [
        'Nullable Type (?type)',
        'Union Type (string|null)',
        'Keduanya benar dan sah di PHP 8+',
        'Optional String'
      ],
      correctIndex: 2,
      explanation: 'Di PHP 8+, Anda dapat menggunakan sintaks nullable ?string maupun union types string|null untuk mengizinkan nilai null.'
    }
  },

  // 5. PHP PRACTICE PROBLEMS
  {
    id: 'php-examples-practice-problems',
    title: 'PHP Practice Problems',
    chapter: 'PHP Examples',
    chapterId: 'php-chap-examples',
    order: 5,
    overview: 'Tantangan Problem-Solving algoritma: Algoritma Palindrom, FizzBuzz Test, Fibonacci Sequence Generator, dan Reverse Array tanpa fungsi bawaan.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PROBLEM SOLVING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 05 / 08</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧩 Tantangan Logika & Algoritma Populer</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Uji keterampilan problem-solving Anda dengan soal algoritma yang paling sering diujikan pada sesi <em>Technical Coding Interview</em> backend developer.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// 1. Algoritma Klasik FizzBuzz (1 sampai 15)
echo "<h3>1. Demonstrasi Algoritma FizzBuzz (1 s/d 15):</h3>";
echo "<p>";
for ($i = 1; $i <= 15; $i++) {
    if ($i % 15 === 0) {
        echo "<strong style='color: purple;'>[FizzBuzz]</strong> ";
    } elseif ($i % 3 === 0) {
        echo "<strong style='color: blue;'>[Fizz]</strong> ";
    } elseif ($i % 5 === 0) {
        echo "<strong style='color: green;'>[Buzz]</strong> ";
    } else {
        echo "$i ";
    }
}
echo "</p>";

// 2. Deteksi Kata Palindrom (Membaca sama dari depan dan belakang)
function cekPalindrom(string $kata): bool {
    $bersih = strtolower(preg_replace('/[^a-zA-Z0-9]/', '', $kata));
    return $bersih === strrev($bersih);
}

$kata1 = "Kasur Rusak";
$kata2 = "DevGrow";

echo "<h3>2. Uji Deteksi Palindrom:</h3>";
echo "<ul>";
echo "<li>'$kata1': " . (cekPalindrom($kata1) ? "<strong style='color: green;'>✓ Palindrom</strong>" : "✗ Bukan") . "</li>";
echo "<li>'$kata2': " . (cekPalindrom($kata2) ? "✓ Palindrom" : "<strong style='color: red;'>✗ Bukan Palindrom</strong>") . "</li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'Pada FizzBuzz, pemeriksaan kelipatan 15 ($i % 15 === 0) wajib diletakkan paling atas sebelum kelipatan 3 dan 5.',
      'strrev($str) membalikkan urutan karakter string untuk membandingkan palindrom.'
    ],
    challenge: {
      instruction: 'Uji kata "Katak" apakah palindrom dengan cekPalindrom("Katak").',
      starterCode: `<?php
function isPalindrom(string $str) {
    return strtolower($str) === strtolower(strrev($str));
}
echo "Katak: " . (isPalindrom("Katak") ? "Palindrom" : "Bukan");
?>`,
      hint: 'Klik RUN untuk menguji algoritma palindrom.'
    },
    quiz: {
      question: 'Mengapa pada algoritma FizzBuzz pengecekan kondisi kelipatan 15 ($i % 15 == 0) harus dilakukan sebelum pengecekan kelipatan 3 atau 5?',
      options: [
        'Karena jika kelipatan 3 dicek lebih awal, angka kelipatan 15 (seperti 15, 30) akan langsung dianggap Fizz dan tidak pernah mencapai FizzBuzz',
        'Karena angka 15 adalah angka ganjil',
        'Karena PHP tidak bisa menghitung angka 5',
        'Agar kode lebih lambat'
      ],
      correctIndex: 0,
      explanation: 'Karena angka kelipatan 15 juga habis dibagi 3. Jika $i % 3 dievaluasi lebih dahulu, angka 15 akan mencetak "Fizz" dan melewati blok FizzBuzz.'
    }
  },

  // 6. PHP SERVER
  {
    id: 'php-examples-server',
    title: 'PHP Server',
    chapter: 'PHP Examples',
    chapterId: 'php-chap-examples',
    order: 6,
    overview: 'Pelajari arsitektur server PHP di lingkungan produksi: PHP Built-in CLI Server (php -S), Web Server Apache/Nginx (PHP-FPM), konfigurasi php.ini, Composer package manager, dan Docker containerization.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PHP SERVER & DEVOPS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 06 / 08</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🖥️ Arsitektur Server & Deployment Produksi</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Di lingkungan lokal pengembang dapat menggunakan PHP Built-in Server. Namun di lingkungan produksi berskala jutaan pengguna (Production), arsitektur standar menggunakan <strong>Nginx + PHP-FPM (FastCGI Process Manager)</strong> atau kontainer Docker.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-purple-600 dark:text-purple-400 block mb-1">1. PHP-FPM</strong>
            Mengelola pool worker process independen untuk menangani ribuan request konkuren secara stabil.
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-indigo-600 dark:text-indigo-400 block mb-1">2. Composer</strong>
            Dependency Manager resmi ekosistem PHP untuk menginstal library Packagist dan autoloading PSR-4.
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-emerald-600 dark:text-emerald-400 block mb-1">3. php.ini Tuning</strong>
            Pengaturan memori (<code>memory_limit</code>), upload limit (<code>upload_max_filesize</code>), dan <code>display_errors = Off</code> di produksi.
          </div>
        </div>
      </div>
    `,
    code: `<?php
// Membaca Konfigurasi Server php.ini secara Dinamis
$memoryLimit = ini_get('memory_limit');
$maxUpload = ini_get('upload_max_filesize');
$maxExecution = ini_get('max_execution_time');
$displayErrors = ini_get('display_errors');

echo "<h3>Status Konfigurasi Lingkungan Server (php.ini):</h3>";
echo "<table border='1' cellpadding='8' style='border-collapse: collapse; width: 100%;'>";
echo "<tr style='background: #f1f5f9;'><th>Direktif php.ini</th><th>Nilai Saat Ini</th><th>Rekomendasi Produksi</th></tr>";
echo "<tr><td><code>memory_limit</code></td><td><strong>$memoryLimit</strong></td><td>256M / 512M</td></tr>";
echo "<tr><td><code>upload_max_filesize</code></td><td><strong>$maxUpload</strong></td><td>25M - 100M</td></tr>";
echo "<tr><td><code>max_execution_time</code></td><td><strong>$maxExecution detik</strong></td><td>30 - 60 detik</td></tr>";
echo "<tr><td><code>display_errors</code></td><td><strong>" . ($displayErrors ? "On" : "Off") . "</strong></td><td>Off (Log ke file demi keamanan)</td></tr>";
echo "</table>";
?>`,
    codeExplanation: [
      'ini_get("nama_direktif") membaca pengaturan runtime file konfigurasi php.ini.',
      'Di server produksi publik, display_errors WAJIB disetel ke Off agar pesan error tidak membocorkan jalur direktori server ke penyerang.'
    ],
    challenge: {
      instruction: 'Pelajari fungsi Composer sebagai package manager resmi PHP.',
      starterCode: `<?php
echo "Composer mengelola dependensi pihak ketiga dan menyediakan autoloader PSR-4 otomatis.";
?>`,
      hint: 'Klik RUN untuk mereview ekosistem server PHP.'
    },
    quiz: {
      question: 'Mengapa pengaturan "display_errors" pada file php.ini harus disetel ke "Off" pada server lingkungan produksi (Live Production)?',
      options: [
        'Untuk mencegah informasi sensitif seperti path direktori server, query database, dan kredensial bocor ke pengguna umum saat terjadi error',
        'Karena server akan me-restart otomatis',
        'Agar kode PHP berjalan 100x lebih cepat',
        'Hanya aturan opsional tanpa dampak keamanan'
      ],
      correctIndex: 0,
      explanation: 'Menampilkan error di browser pada server produksi sangat berbahaya karena membocorkan detail struktur sistem ke pihak luar. Error harus dialihkan ke file log privat.'
    }
  },

  // 7. PHP SYLLABUS
  {
    id: 'php-examples-syllabus',
    title: 'PHP Syllabus',
    chapter: 'PHP Examples',
    chapterId: 'php-chap-examples',
    order: 7,
    overview: 'Rangkuman Silabus Komprehensif Kurikulum PHP 8.x: dari pengenalan dasar, validasi form, arsitektur OOP, database MySQL PDO, pengolahan XML, integrasi AJAX, hingga sertifikasi kelulusan.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SILABUS RESMI</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 07 / 08</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📜 Silabus Kurikulum Lengkap PHP 8.x</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Kurikulum berstandar industri yang dirancang secara berjenjang untuk membawa siswa dari tingkat pemula tanpa pengalaman koding hingga menjadi Full-Stack Backend Web Developer siap kerja.
          </p>
        </div>

        <div class="space-y-3">
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h4 class="font-bold text-purple-600 dark:text-purple-400 text-sm mb-1">Bab 1 s/d 3: Fondasi Bahasa & Server-Side</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400">Sintaks dasar, Control Flow, Functions, Arrays, Superglobals, Keamanan Form OWASP, Sesi Login, dan REST API JSON.</p>
          </div>

          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h4 class="font-bold text-indigo-600 dark:text-indigo-400 text-sm mb-1">Bab 4 & 5: Arsitektur OOP & Database Relasional</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400">Object-Oriented Programming modern, Constructor Promotion, Interfaces, Traits, PDO MySQL, Prepared Statements, dan Transaksi ACID.</p>
          </div>

          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h4 class="font-bold text-emerald-600 dark:text-emerald-400 text-sm mb-1">Bab 6 s/d 9: Integrasi Asinkron & Sertifikasi</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400">XML Processing, AJAX Asinkron, Live Autocomplete, Polling Realtime, Ujian Sertifikasi, dan Toolkit Pemecahan Masalah.</p>
          </div>
        </div>
      </div>
    `,
    code: `<?php
$strukturSilabus = [
    "Bab 1: PHP Tutorial" => "56 Pelajaran (Dasar, Control Flow, Fungsi, Array, Superglobals, RegEx)",
    "Bab 2: PHP Forms" => "5 Pelajaran (Form Handling, Validasi OWASP, Sanitasi XSS, Sticky Forms)",
    "Bab 3: PHP Advanced" => "13 Pelajaran (DateTime, File I/O, Upload, Cookies, Sessions, JSON, Exceptions)",
    "Bab 4: PHP OOP" => "14 Pelajaran (Classes, Constructor Promotion, Inheritance, Interfaces, Traits, Namespaces)",
    "Bab 5: MySQL Database" => "14 Pelajaran (PDO Driver, Prepared Statements, CRUD, Transaksi ACID, Paginasi)",
    "Bab 6: PHP XML" => "5 Pelajaran (SimpleXML, DOMDocument W3C, Event Expat Parser)",
    "Bab 7: PHP - AJAX" => "6 Pelajaran (Fetch API Asinkron, Live Search, Realtime Polling, DB Integration)",
    "Bab 8: PHP Cert" => "1 Pelajaran (Ujian Sertifikasi Resmi & Penerbitan Sertifikat Kelulusan)",
    "Bab 9: PHP Examples" => "8 Pelajaran (Compiler JIT, Kuis, Latihan Algoritma, DevOps Server, Study Plan)"
];

echo "<h3>Struktur Kurikulum Resmi Modul PHP (122 Pelajaran):</h3>";
echo "<ol>";
foreach ($strukturSilabus as $bab => $keterangan) {
    echo "<li style='margin-bottom: 8px;'><strong>$bab:</strong> <span style='color: #4f46e5;'>$keterangan</span></li>";
}
echo "</ol>";
?>`,
    codeExplanation: [
      'Total 122 materi terstruktur rapi ke dalam 9 Bab komprehensif yang saling berkesinambungan.'
    ],
    challenge: {
      instruction: 'Pelajari peta pembelajaran silabus lengkap di atas.',
      starterCode: `<?php
echo "Silabus lengkap 122 materi PHP 8.x siap mengantarkan Anda menjadi Backend Engineer handal!";
?>`,
      hint: 'Klik RUN untuk mereview silabus.'
    },
    quiz: {
      question: 'Berapa total materi pembelajaran resmi yang tercakup di dalam seluruh kurikulum Modul PHP ini?',
      options: [
        '122 Materi Pembelajaran Terstruktur di 9 Bab',
        '20 Materi',
        '50 Materi',
        '10 Materi'
      ],
      correctIndex: 0,
      explanation: 'Kurikulum lengkap Modul PHP mencakup 122 materi berstandar industri yang terbagi ke dalam 9 Bab pembelajaran.'
    }
  },

  // 8. PHP STUDY PLAN
  {
    id: 'php-examples-study-plan',
    title: 'PHP Study Plan',
    chapter: 'PHP Examples',
    chapterId: 'php-chap-examples',
    order: 8,
    overview: 'Rencana Belajar Terstruktur (4-Week Intensive Study Plan): panduan roadmap mingguan alokasi waktu belajar harian, target proyek mingguan, dan strategi menguasai framework Laravel setelah lulus.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">STUDY PLAN</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 08 / 08</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📅 Rencana Belajar Intensif 4 Minggu (Roadmap)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Panduan jadwal terstruktur untuk menyelesaikan seluruh kurikulum PHP dalam waktu 4 minggu dengan komitmen belajar 1 hingga 2 jam per hari.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-purple-600 dark:text-purple-400 block mb-1">Minggu 1: Fondasi Bahasa & Form</strong>
            Sintaks, Variabel, Control Flow, Functions, Arrays, Sanitasi Form OWASP. Target: Membuat Form Kontak Validasi Aman.
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-indigo-600 dark:text-indigo-400 block mb-1">Minggu 2: Server-Side & Arsitektur OOP</strong>
            Session Authentication, File Upload, JSON REST API, OOP 4 Pilar, Interface & Traits. Target: Sistem Autentikasi Login OOP.
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-cyan-600 dark:text-cyan-400 block mb-1">Minggu 3: Database Relasional PDO & AJAX</strong>
            PDO MySQL, Anti-SQLi Prepared Statements, Transaksi ACID, Paginasi, AJAX Live Search. Target: Aplikasi Katalog Produk Realtime.
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-emerald-600 dark:text-emerald-400 block mb-1">Minggu 4: Capstone Project & Sertifikasi</strong>
            Membangun REST API Full-Stack, Penyelesaian Ujian Sertifikasi Resmi, dan Persiapan Mempelajari Laravel 11.
          </div>
        </div>
      </div>
    `,
    code: `<?php
// Kalender Belajar Mingguan
$jadwalMingguan = [
    "Senin - Selasa" => "Mempelajari Teori & Bedah Sintaks Kode Baru (45 Menit)",
    "Rabu - Kamis" => "Mengerjakan Tantangan Koding Sandbox & Kuis Asesmen (45 Menit)",
    "Jumat - Sabtu" => "Membangun Proyek Nyata / Implementasi Fitur Portofolio (60 Menit)",
    "Minggu" => "Review Evaluasi & Istirahat (Refresh Mental)"
];

echo "<h3>Jadwal Komitmen Belajar Harian:</h3>";
echo "<ul>";
foreach ($jadwalMingguan as $hari => $aktivitas) {
    echo "<li><strong>$hari:</strong> $aktivitas</li>";
}
echo "</ul>";

echo "<div style='padding: 15px; background: #ecfdf5; border: 1px solid #10b981; border-radius: 10px; color: #065f46;'>";
echo "🚀 <strong>Konsistensi adalah Kunci:</strong> Belajar 1 jam setiap hari secara konsisten jauh lebih efektif daripada belajar 7 jam dalam 1 hari!";
echo "</div>";
?>`,
    codeExplanation: [
      'Alokasi waktu belajar yang terdistribusi secara teratur menjaga daya ingat dan pemahaman konsep algoritma pemrograman.'
    ],
    challenge: {
      instruction: 'Terapkan komitmen belajar konsisten Anda untuk menyelesaikan seluruh modul di DevGrow LMS!',
      starterCode: `<?php
echo "Selamat belajar dan sukses meraih karir Full-Stack Backend Developer impian Anda!";
?>`,
      hint: 'Klik RUN untuk menyelesaikan kurikulum PHP.'
    },
    quiz: {
      question: 'Setelah menuntaskan seluruh 122 materi kurikulum PHP 8.x ini, langkah terbaik untuk melangkah ke level profesional industri adalah:',
      options: [
        'Membangun portofolio proyek dunia nyata dengan framework Laravel 11 dan mengunggahnya ke repositori GitHub publik',
        'Menghapus seluruh file kodingan',
        'Tidak pernah menyentuh kodingan lagi',
        'Menghapus database'
      ],
      correctIndex: 0,
      explanation: 'Membangun portofolio nyata dan menguasai framework Laravel adalah kunci sukses menembus industri teknologi backend.'
    }
  }
];

module.exports = phpPart11Examples;
