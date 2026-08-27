// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (DATE & TIME FUNCTIONS)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart16RefDate = [
  // 98. CHECKDATE()
  {
    id: 'php-ref-checkdate',
    title: 'PHP checkdate()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 98,
    overview: 'Fungsi checkdate(): memvalidasi keabsahan tanggal Gregorian Masehi (memeriksa rentang bulan 1-12, jumlah hari per bulan, dan validasi tahun kabisat 29 Februari).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DATE REFERENCE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 98 / 118</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📅 Validasi Keabsahan Tanggal (checkdate)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>checkdate($month, $day, $year)</code> memeriksa apakah kombinasi tanggal tersebut benar-benar ada di kalender Masehi. Mengembalikan boolean <code>true</code> jika sah, atau <code>false</code> jika tidak valid (misal: 31 Februari atau 29 Februari di tahun bukan kabisat).
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Uji validasi tanggal input formulir
$uji1 = checkdate(2, 29, 2024); // Kabisat -> Sah (TRUE)
$uji2 = checkdate(2, 29, 2025); // Bukan kabisat -> Tidak Sah (FALSE)
$uji3 = checkdate(4, 31, 2026); // April hanya 30 hari -> Tidak Sah (FALSE)

echo "<h3>Hasil Validasi checkdate():</h3>";
echo "<ul>";
echo "<li>29 Februari 2024: " . ($uji1 ? "<strong style='color: green;'>✓ Valid (Tahun Kabisat)</strong>" : "✗ Tidak Valid") . "</li>";
echo "<li>29 Februari 2025: " . ($uji2 ? "✓ Valid" : "<strong style='color: red;'>✗ Tidak Valid (Hanya 28 Hari)</strong>") . "</li>";
echo "<li>31 April 2026: " . ($uji3 ? "✓ Valid" : "<strong style='color: red;'>✗ Tidak Valid (April Hanya 30 Hari)</strong>") . "</li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'Urutan parameter checkdate adalah ($month, $day, $year).',
      'Standar validasi formulir input tanggal lahir agar tidak terjadi bug kalender di database.'
    ],
    challenge: {
      instruction: 'Periksa apakah tanggal 31 Desember 2026 valid dengan checkdate(12, 31, 2026).',
      starterCode: `<?php
$valid = checkdate(12, 31, 2026);
echo "Status: " . ($valid ? "Valid" : "Invalid");
?>`,
      hint: 'Panggil checkdate(12, 31, 2026).'
    },
    quiz: {
      question: 'Urutan parameter yang benar pada fungsi checkdate() adalah:',
      options: [
        'checkdate($month, $day, $year)',
        'checkdate($day, $month, $year)',
        'checkdate($year, $month, $day)',
        'checkdate($dateString)'
      ],
      correctIndex: 0,
      explanation: 'checkdate menerima parameter berturut-turut: Bulan ($month), Hari ($day), dan Tahun ($year).'
    }
  },

  // 99. DATE_ADD()
  {
    id: 'php-ref-date-add',
    title: 'PHP date_add()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 99,
    overview: 'Fungsi date_add(): menambahkan sejumlah interval waktu (hari, bulan, tahun, jam) ke objek DateTime.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DATE ADD</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 99 / 118</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">➕ Menambah Waktu Tanggal (date_add)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>date_add($dateObject, $intervalObject)</code> menambahkan durasi waktu (misal: 30 hari masa aktif langganan atau 1 tahun garansi) ke dalam objek <code>DateTime</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$tanggalMulai = date_create("2026-08-27");

// Tambahkan interval 30 Hari masa aktif kursus Pro
$interval30Hari = date_interval_create_from_date_string("30 days");
date_add($tanggalMulai, $interval30Hari);

echo "<h3>Hasil Penggunaan date_add():</h3>";
echo "<p>Tanggal Berakhir Masa Aktif (30 Hari): <strong style='color: #4f46e5;'>" . date_format($tanggalMulai, "d F Y") . "</strong></p>";
?>`,
    codeExplanation: [
      'date_add() memodifikasi objek DateTime $tanggalMulai secara langsung (mutasi in-place).',
      'date_interval_create_from_date_string("30 days") membuat objek DateInterval dari string manusiawi.'
    ],
    challenge: {
      instruction: 'Tambahkan 1 tahun ke tanggal hari ini dengan date_add.',
      starterCode: `<?php
$tgl = date_create("2026-01-01");
date_add($tgl, date_interval_create_from_date_string("1 year"));
echo "Tahun depan: " . date_format($tgl, "Y-m-d");
?>`,
      hint: 'Panggil date_add($tgl, date_interval_create_from_date_string("1 year")).'
    },
    quiz: {
      question: 'Objek kelas apakah yang dibutuhkan pada parameter kedua fungsi date_add($datetime, $interval)?',
      options: [
        'DateInterval',
        'DateTimeZone',
        'DateString',
        'Integer timestamp'
      ],
      correctIndex: 0,
      explanation: 'Parameter kedua date_add() harus berupa objek instance dari kelas DateInterval.'
    }
  },

  // 100. DATE_CREATE_FROM_FORMAT()
  {
    id: 'php-ref-date-create-from-format',
    title: 'PHP date_create_from_format()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 100,
    overview: 'Kuasai date_create_from_format(): mem-parsing string tanggal dengan pola kustom (misal "d/m/Y H:i" atau "d-M-Y") menjadi objek DateTime secara presisi.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DATE PARSE FORMAT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 100 / 118</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎯 Parsing Tanggal Kustom (date_create_from_format)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>date_create_from_format($format, $datetime, $timezone)</code> mengonversi format tanggal non-standar (seperti format Indonesia <code>"27/08/2026"</code>) menjadi objek <code>DateTime</code> yang dapat disimpan ke database MySQL <code>YYYY-MM-DD</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$inputUserIndo = "27/08/2026"; // Format Hari/Bulan/Tahun

// Parsing dari pola 'd/m/Y'
$objTanggal = date_create_from_format("d/m/Y", $inputUserIndo);

// Format ulang ke standar database MySQL (Y-m-d)
$formatSql = date_format($objTanggal, "Y-m-d");

echo "<h3>Hasil Parsing Format Tanggal:</h3>";
echo "<p>Input Asli: <code>$inputUserIndo</code> (d/m/Y)</p>";
echo "<p>Standar Database MySQL: <strong style='color: #059669;'>$formatSql</strong> (Y-m-d)</p>";
?>`,
    codeExplanation: [
      'date_create_from_format("d/m/Y", $str) mengenali "27" sebagai hari dan "08" sebagai bulan.',
      'Sangat krusial untuk mencegah tertukarnya bulan dan hari pada input formulir pengguna.'
    ],
    challenge: {
      instruction: 'Parsing tanggal format "2026.12.31" dengan pola "Y.m.d".',
      starterCode: `<?php
$d = date_create_from_format("Y.m.d", "2026.12.31");
echo "Format standar: " . date_format($d, "Y-m-d");
?>`,
      hint: 'Gunakan date_create_from_format("Y.m.d", "2026.12.31").'
    },
    quiz: {
      question: 'Apa keuntungan utama menggunakan date_create_from_format() dibanding date_create() biasa?',
      options: [
        'Mampu membaca format tanggal kustom apapun secara presisi tanpa salah tafsir urutan hari dan bulan',
        'Otomatis mempercepat query database',
        'Menghapus timezone',
        'Hanya untuk angka'
      ],
      correctIndex: 0,
      explanation: 'date_create_from_format mendiktekan pola format secara eksplisit sehingga parsing tanggal non-ISO tidak akan salah tebak.'
    }
  },

  // 101. DATE_CREATE()
  {
    id: 'php-ref-date-create',
    title: 'PHP date_create()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 101,
    overview: 'Fungsi date_create(): alias prosedural dari konstruktor new DateTime() untuk membuat objek DateTime baru dari string waktu atau saat ini.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DATE CREATE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 101 / 118</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🕒 Membuat Objek DateTime (date_create)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>date_create($datetime, $timezone)</code> membuat instance objek <code>DateTime</code>. Fungsi ini ekuivalen 100% dengan pendekatan OOP <code>new DateTime($datetime)</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// 1. Tanggal Hari Ini (Saat Ini)
$sekarang = date_create();

// 2. Tanggal Spesifik
$jadwalRilis = date_create("2026-12-31 23:59:59");

echo "<h3>Hasil Penggunaan date_create():</h3>";
echo "<p>Waktu Sekarang: <strong>" . date_format($sekarang, "d-m-Y H:i:s") . "</strong></p>";
echo "<p>Jadwal Rilis: <strong>" . date_format($jadwalRilis, "d F Y - H:i") . " WIB</strong></p>";
?>`,
    codeExplanation: [
      'date_create() tanpa argumen menghasilkan waktu detik ini juga.',
      'Mendukung string deskriptif seperti "now", "+2 days", "next monday".'
    ],
    challenge: {
      instruction: 'Buat objek DateTime untuk "next monday" dengan date_create("next monday").',
      starterCode: `<?php
$d = date_create("next monday");
echo "Hari Senin depan: " . date_format($d, "l, d F Y");
?>`,
      hint: 'Panggil date_create("next monday").'
    },
    quiz: {
      question: 'Sintaks OOP apakah yang ekuivalen dengan fungsi prosedural date_create("2026-01-01")?',
      options: [
        'new DateTime("2026-01-01")',
        'DateTime::create("2026-01-01")',
        'DateTimeObject.new("2026-01-01")',
        'Date.parse("2026-01-01")'
      ],
      correctIndex: 0,
      explanation: 'date_create() adalah pembungkus fungsi prosedural untuk konstruktor new DateTime().'
    }
  },

  // 102. DATE_DATE_SET()
  {
    id: 'php-ref-date-date-set',
    title: 'PHP date_date_set()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 102,
    overview: 'Fungsi date_date_set(): menyetel atau mengganti nilai Tahun, Bulan, dan Hari pada objek DateTime yang sudah ada secara langsung.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DATE SET</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 102 / 118</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📅 Menyetel Tanggal (date_date_set)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>date_date_set($object, $year, $month, $day)</code> menyetel ulang komponen tanggal (Tahun, Bulan, Hari) pada objek DateTime tanpa mengubah komponen jam/menit/detik yang sudah tersimpan.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$jadwal = date_create("2026-01-15 14:30:00");

// Ubah tanggal menjadi 27 Agustus 2026 (Jam 14:30:00 tetap utuh)
date_date_set($jadwal, 2026, 8, 27);

echo "<h3>Hasil Penggunaan date_date_set():</h3>";
echo "<p>Jadwal Baru: <strong>" . date_format($jadwal, "d F Y H:i:s") . "</strong></p>";
?>`,
    codeExplanation: [
      'date_date_set mengubah tanggal menjadi 27 Agustus 2026, sementara waktu 14:30:00 tidak terganggu.'
    ],
    challenge: {
      instruction: 'Setel tanggal menjadi 2027-12-25 dengan date_date_set($d, 2027, 12, 25).',
      starterCode: `<?php
$d = date_create();
date_date_set($d, 2027, 12, 25);
echo "Tanggal baru: " . date_format($d, "Y-m-d");
?>`,
      hint: 'Panggil date_date_set($d, 2027, 12, 25).'
    },
    quiz: {
      question: 'Urutan parameter angka yang benar pada fungsi date_date_set($obj, ...) adalah:',
      options: [
        '($year, $month, $day)',
        '($day, $month, $year)',
        '($month, $day, $year)',
        '($hour, $minute, $second)'
      ],
      correctIndex: 0,
      explanation: 'date_date_set menerima Tahun ($year), Bulan ($month), dan Hari ($day).'
    }
  },

  // 103. DATE_DEFAULT_TIMEZONE_GET()
  {
    id: 'php-ref-date-default-timezone-get',
    title: 'PHP date_default_timezone_get()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 103,
    overview: 'Fungsi date_default_timezone_get(): mengambil nama zona waktu aktif (Default Timezone) yang saat ini digunakan oleh skrip PHP server.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TIMEZONE GET</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 103 / 118</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌍 Mengambil Zona Waktu Server</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>date_default_timezone_get()</code> mengembalikan identifier zona waktu resmi IANA yang sedang aktif di runtime PHP (seperti <code>"Asia/Jakarta"</code> atau <code>"UTC"</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$tzAktif = date_default_timezone_get();

echo "<h3>Informasi Zona Waktu Server:</h3>";
echo "<p>Default Timezone Saat Ini: <strong style='color: #4f46e5;'>$tzAktif</strong></p>";
echo "<p>Waktu Server Sekarang: <strong>" . date("d F Y, H:i:s") . "</strong></p>";
?>`,
    codeExplanation: [
      'Mengetahui zona waktu server sangat penting untuk memastikan waktu transaksi pembayaran dicatat sesuai zona waktu lokal pengguna (WIB/WITA/WIT).'
    ],
    challenge: {
      instruction: 'Cetak zona waktu aktif dengan date_default_timezone_get().',
      starterCode: `<?php
echo "Timezone: " . date_default_timezone_get();
?>`,
      hint: 'Panggil date_default_timezone_get().'
    },
    quiz: {
      question: 'Apa nilai kembalian dari fungsi date_default_timezone_get()?',
      options: [
        'String nama zona waktu resmi (seperti "Asia/Jakarta" atau "UTC")',
        'Angka selisih jam (misal: +7)',
        'Timestamp detik',
        'Boolean'
      ],
      correctIndex: 0,
      explanation: 'Fungsi mengembalikan string nama identifier zona waktu IANA standar.'
    }
  },

  // 104. DATE_DEFAULT_TIMEZONE_SET()
  {
    id: 'php-ref-date-default-timezone-set',
    title: 'PHP date_default_timezone_set()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 104,
    overview: 'Kuasai date_default_timezone_set(): menyetel zona waktu default runtime PHP (seperti "Asia/Jakarta" WIB, "Asia/Makassar" WITA, atau "Asia/Jayapura" WIT).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TIMEZONE SET</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 104 / 118</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🇮🇩 Menyetel Zona Waktu Indonesia</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Secara default, server cloud (AWS/GCP/DigitalOcean) beroperasi pada zona waktu <code>UTC</code>. Gunakan <code>date_default_timezone_set("Asia/Jakarta")</code> di baris bootstrap aplikasi Anda agar seluruh fungsi <code>date()</code> otomatis menghasilkan waktu lokal Indonesia (WIB).
          </p>
        </div>
      </div>
    `,
    code: `<?php
// 1. Setel ke Waktu Indonesia Barat (WIB)
date_default_timezone_set("Asia/Jakarta");
$waktuJakarta = date("H:i:s");

// 2. Bandingkan dengan Waktu London (UTC)
date_default_timezone_set("UTC");
$waktuUtc = date("H:i:s");

// Kembalikan ke Jakarta
date_default_timezone_set("Asia/Jakarta");

echo "<h3>Perbandingan Jam Berdasarkan Timezone:</h3>";
echo "<ul>";
echo "<li>Waktu Jakarta (WIB / UTC+7): <strong style='color: green;'>$waktuJakarta WIB</strong></li>";
echo "<li>Waktu Standar Dunia (UTC): <strong>$waktuUtc UTC</strong></li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'date_default_timezone_set("Asia/Jakarta") secara instan menyelaraskan seluruh perhitungan tanggal PHP dengan waktu lokal Indonesia.'
    ],
    challenge: {
      instruction: 'Setel zona waktu ke "Asia/Jakarta" dan cetak jam saat ini.',
      starterCode: `<?php
date_default_timezone_set("Asia/Jakarta");
echo "WIB Time: " . date("H:i:s");
?>`,
      hint: 'Panggil date_default_timezone_set("Asia/Jakarta").'
    },
    quiz: {
      question: 'Nama zona waktu IANA manakah yang mewakili Waktu Indonesia Barat (WIB - UTC+7) di PHP?',
      options: [
        'Asia/Jakarta',
        'Asia/Makassar',
        'Asia/Jayapura',
        'Indonesia/WIB'
      ],
      correctIndex: 0,
      explanation: '"Asia/Jakarta" adalah identifier resmi standar IANA untuk zona waktu WIB (UTC+7).'
    }
  },

  // 105. DATE_DIFF()
  {
    id: 'php-ref-date-diff',
    title: 'PHP date_diff()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 105,
    overview: 'Kuasai date_diff(): menghitung selisih jarak antara dua tanggal (Tahun, Bulan, Hari, Jam, Menit) dan mengembalikannya sebagai objek DateInterval.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DATE DIFF</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 105 / 118</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⏱️ Menghitung Selisih Tanggal & Umur</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>date_diff($datetime1, $datetime2)</code> menghitung selisih presisi antara dua tanggal dan mengembalikan objek <code>DateInterval</code> yang memiliki properti <code>->y</code> (tahun), <code>->m</code> (bulan), <code>->d</code> (hari), dan <code>->days</code> (total hari).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$tanggalLahir = date_create("2000-05-15");
$hariIni = date_create("2026-08-27");

// Hitung umur secara presisi
$selisih = date_diff($tanggalLahir, $hariIni);

echo "<h3>Kalkulator Usia Presisi (date_diff):</h3>";
echo "<p>Tanggal Lahir: <strong>15 Mei 2000</strong></p>";
echo "<p>Usia Anda: <strong style='color: #059669; font-size: 16px;'>{$selisih->y} Tahun, {$selisih->m} Bulan, {$selisih->d} Hari</strong></p>";
echo "<p>Total Hari yang Telah Dijalani: <strong>{$selisih->days} Hari</strong></p>";
?>`,
    codeExplanation: [
      '$selisih->y membaca selisih tahun secara otomatis.',
      '$selisih->days menghasilkan total hari absolut antara kedua tanggal.'
    ],
    challenge: {
      instruction: 'Hitung selisih hari antara "2026-01-01" dan "2026-01-31" dengan date_diff.',
      starterCode: `<?php
$d1 = date_create("2026-01-01");
$d2 = date_create("2026-01-31");
$diff = date_diff($d1, $d2);
echo "Selisih: {$diff->d} hari";
?>`,
      hint: 'Panggil date_diff($d1, $d2).'
    },
    quiz: {
      question: 'Properti apakah pada objek DateInterval hasil date_diff() yang menyimpan total selisih hari secara keseluruhan?',
      options: [
        '$diff->days',
        '$diff->d',
        '$diff->total_days',
        '$diff->count'
      ],
      correctIndex: 0,
      explanation: '$diff->days menyimpan total hari kumulatif, sedangkan $diff->d hanya menyimpan sisa hari dalam bulan.'
    }
  },

  // 106. DATE_FORMAT()
  {
    id: 'php-ref-date-format',
    title: 'PHP date_format()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 106,
    overview: 'Kuasai date_format(): memformat objek DateTime menjadi string tanggal yang rapi dan mudah dibaca menggunakan pola karakter token standar PHP.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DATE FORMAT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 106 / 118</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎨 Memformat Tampilan Tanggal (date_format)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>date_format($object, $format)</code> mengubah objek DateTime menjadi string terformat (<code>d</code>=01-31, <code>m</code>=01-12, <code>Y</code>=2026, <code>l</code>=Nama Hari, <code>F</code>=Nama Bulan, <code>H:i:s</code>=Jam Menit Detik).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$tgl = date_create("2026-08-27 15:45:30");

echo "<h3>Variasi Pola Format Tanggal:</h3>";
echo "<ul>";
echo "<li>Format Database: <code>" . date_format($tgl, "Y-m-d H:i:s") . "</code></li>";
echo "<li>Format Lengkap: <code>" . date_format($tgl, "l, d F Y - H:i") . "</code></li>";
echo "<li>Format Ringkas: <code>" . date_format($tgl, "d/m/y") . "</code></li>";
echo "<li>ISO 8601 (JSON API): <code>" . date_format($tgl, "c") . "</code></li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'Token "c" menghasilkan standar format ISO 8601 internasional yang umum dipakai pada REST API.'
    ],
    challenge: {
      instruction: 'Format tanggal hari ini menjadi format "d-m-Y" dengan date_format(date_create(), "d-m-Y").',
      starterCode: `<?php
echo "Tanggal: " . date_format(date_create(), "d-m-Y");
?>`,
      hint: 'Panggil date_format(date_create(), "d-m-Y").'
    },
    quiz: {
      question: 'Karakter token format manakah yang menghasilkan nama hari lengkap dalam bahasa Inggris (seperti "Thursday")?',
      options: [
        'l (huruf L kecil)',
        'D (D besar)',
        'd (d kecil)',
        'H'
      ],
      correctIndex: 0,
      explanation: 'Token "l" (L kecil) menghasilkan representasi tekstual nama hari lengkap ("Sunday" sampai "Saturday").'
    }
  },

  // 107. DATE_GET_LAST_ERRORS()
  {
    id: 'php-ref-date-get-last-errors',
    title: 'PHP date_get_last_errors()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 107,
    overview: 'Fungsi date_get_last_errors(): mengembalikan array rincian pesan peringatan (warnings) dan kesalahan (errors) yang terjadi saat parsing tanggal terakhir kali.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DATE ERRORS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 107 / 118</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Mendeteksi Error Parsing Tanggal</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>date_get_last_errors()</code> mengembalikan array berisi jumlah kesalahan (<code>error_count</code>) dan daftar pesan error jika string tanggal yang di-parse memiliki format rusak/cacat.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Coba parsing tanggal yang rusak polanya
date_create_from_format("d/m/Y", "99-99-9999");

$errors = date_get_last_errors();

echo "<h3>Hasil Pemeriksaan Error Parsing Tanggal:</h3>";
if ($errors && $errors['error_count'] > 0) {
    echo "<p style='color: red;'><strong>Terdeteksi " . $errors['error_count'] . " Kesalahan Parsing:</strong></p>";
    echo "<pre style='background: #0f172a; color: #f87171; padding: 12px; border-radius: 8px;'>" . print_r($errors['errors'], true) . "</pre>";
} else {
    echo "<p style='color: green;'>Format tanggal valid tanpa error.</p>";
}
?>`,
    codeExplanation: [
      'date_get_last_errors() menangkap posisi karakter spesifik di mana parsing format tanggal mengalami kegagalan.'
    ],
    challenge: {
      instruction: 'Pelajari penanganan error parsing tanggal dengan date_get_last_errors().',
      starterCode: `<?php
date_create_from_format("Y-m-d", "invalid-date");
$err = date_get_last_errors();
echo "Jumlah error: " . $err['error_count'];
?>`,
      hint: 'Klik RUN untuk mencoba date_get_last_errors.'
    },
    quiz: {
      question: 'Kapan date_get_last_errors() paling sering dimanfaatkan?',
      options: [
        'Untuk memvalidasi dan mendebug input tanggal pengguna yang gagal diproses oleh date_create_from_format()',
        'Untuk mengukur kecepatan koneksi internet',
        'Untuk menghapus cache database',
        'Tidak pernah dipakai'
      ],
      correctIndex: 0,
      explanation: 'Sangat berguna untuk menangkap alasan teknis mengapa string tanggal tidak sesuai dengan pola format yang diharapkan.'
    }
  },

  // 108. DATE_INTERVAL_CREATE_FROM_DATE_STRING()
  {
    id: 'php-ref-date-interval-create-from-date-string',
    title: 'PHP date_interval_create_from_date_string()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 108,
    overview: 'Kuasai date_interval_create_from_date_string(): membuat objek DateInterval menggunakan teks deskriptif manusiawi (seperti "1 month 2 days", "3 weeks", "1 hour 30 mins").',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">INTERVAL STRING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 108 / 118</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🗣️ Interval dari Bahasa Manusiawi</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>date_interval_create_from_date_string($datetime)</code> mengonversi teks seperti <code>"2 months and 5 days"</code> atau <code>"1 year"</code> menjadi objek <code>DateInterval</code> tanpa perlu menghafal format ISO 8601 (<code>P2M5D</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$tanggal = date_create("2026-08-27");

// Tambah durasi 2 bulan dan 10 hari menggunakan teks bahasa Inggris manusiawi
$durasi = date_interval_create_from_date_string("2 months and 10 days");
date_add($tanggal, $durasi);

echo "<h3>Hasil Penambahan Waktu Deskriptif:</h3>";
echo "<p>Tanggal Akhir Proyek: <strong style='color: #059669; font-size: 16px;'>" . date_format($tanggal, "d F Y") . "</strong></p>";
?>`,
    codeExplanation: [
      'Teks deskriptif manusiawi membuat kode sangat mudah dibaca oleh sesama programmer tim.'
    ],
    challenge: {
      instruction: 'Buat interval "3 days" dengan date_interval_create_from_date_string("3 days").',
      starterCode: `<?php
$i = date_interval_create_from_date_string("3 days");
echo "Hari: " . $i->d;
?>`,
      hint: 'Panggil date_interval_create_from_date_string("3 days").'
    },
    quiz: {
      question: 'Manakah contoh penulisan interval yang valid pada date_interval_create_from_date_string()?',
      options: [
        '"1 year 2 months 15 days"',
        '"SELECT * FROM date"',
        '"true / false"',
        'Angka float 3.14'
      ],
      correctIndex: 0,
      explanation: 'Fungsi menerima teks representasi durasi waktu dalam bahasa Inggris.'
    }
  },

  // 109. DATE_INTERVAL_FORMAT()
  {
    id: 'php-ref-date-interval-format',
    title: 'PHP date_interval_format()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 109,
    overview: 'Fungsi date_interval_format(): memformat objek DateInterval menjadi string representasi durasi menggunakan token penanda persen (%y tahun, %m bulan, %d hari, %a total hari).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">INTERVAL FORMAT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 109 / 118</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⏱️ Memformat Durasi Interval (date_interval_format)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>date_interval_format($object, $format)</code> memformat objek <code>DateInterval</code> menjadi teks. Karakter token wajib diawali simbol persen (<code>%Y</code>=tahun, <code>%m</code>=bulan, <code>%d</code>=hari, <code>%H</code>=jam, <code>%i</code>=menit, <code>%a</code>=total hari).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$d1 = date_create("2026-01-01");
$d2 = date_create("2026-08-27");
$interval = date_diff($d1, $d2);

// Format teks durasi
$teksDurasi = date_interval_format($interval, "%m Bulan, %d Hari (Total %a Hari)");

echo "<h3>Hasil Penggunaan date_interval_format():</h3>";
echo "<p>Durasi Pembelajaran: <strong style='color: #4f46e5;'>$teksDurasi</strong></p>";
?>`,
    codeExplanation: [
      'Perhatikan bahwa pada date_interval_format() setiap token wajib diawali tanda persen (misal %m, %d, %a).'
    ],
    challenge: {
      instruction: 'Format interval dengan pola "%d hari".',
      starterCode: `<?php
$int = date_interval_create_from_date_string("5 days");
echo date_interval_format($int, "%d hari");
?>`,
      hint: 'Panggil date_interval_format($int, "%d hari").'
    },
    quiz: {
      question: 'Karakter apakah yang wajib diletakkan di depan token format pada date_interval_format()?',
      options: [
        'Tanda Persen (%) (seperti %y, %m, %d, %a)',
        'Tanda Dollar ($)',
        'Tanda Hashtag (#)',
        'Tanda Titik (.)'
      ],
      correctIndex: 0,
      explanation: 'date_interval_format mewajibkan simbol % di depan setiap placeholder karakter formatnya.'
    }
  },

  // 110. DATE_ISODATE_SET()
  {
    id: 'php-ref-date-isodate-set',
    title: 'PHP date_isodate_set()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 110,
    overview: 'Fungsi date_isodate_set(): menyetel tanggal pada objek DateTime berdasarkan standar ISO 8601 (Tahun, Nomor Pekan ke-N dalam setahun, dan Hari ke-N dalam pekan).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ISO DATE SET</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 110 / 118</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌐 Penyetelan Tanggal Standar ISO 8601</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>date_isodate_set($object, $year, $week, $dayOfWeek)</code> menyetel tanggal berdasarkan nomor minggu ke-N dalam setahun (1-53) dan hari ke-N dalam minggu (1=Senin s/d 7=Minggu).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$d = date_create();

// Setel ke Tahun 2026, Pekan ke-35, Hari ke-4 (Kamis)
date_isodate_set($d, 2026, 35, 4);

echo "<h3>Hasil Penggunaan date_isodate_set():</h3>";
echo "<p>Tahun 2026, Minggu ke-35, Hari ke-4: <strong>" . date_format($d, "l, d F Y") . "</strong></p>";
?>`,
    codeExplanation: [
      'date_isodate_set sangat populer dalam aplikasi manufaktur dan rantai pasokan logistik (Supply Chain Week Numbering).'
    ],
    challenge: {
      instruction: 'Setel tanggal ke pekan ke-1 hari ke-1 tahun 2026 dengan date_isodate_set($d, 2026, 1, 1).',
      starterCode: `<?php
$d = date_create();
date_isodate_set($d, 2026, 1, 1);
echo "Senin pertama 2026: " . date_format($d, "Y-m-d");
?>`,
      hint: 'Panggil date_isodate_set($d, 2026, 1, 1).'
    },
    quiz: {
      question: 'Berapakah angka hari untuk hari Senin pada parameter ke-4 date_isodate_set() standar ISO 8601?',
      options: [
        '1 (Senin adalah hari pertama)',
        '0',
        '7',
        '2'
      ],
      correctIndex: 0,
      explanation: 'Menurut standar ISO 8601, pekan dimulai pada hari Senin (nilai 1) dan berakhir pada hari Minggu (nilai 7).'
    }
  },

  // 111. DATE_MODIFY()
  {
    id: 'php-ref-date-modify',
    title: 'PHP date_modify()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 111,
    overview: 'Kuasai date_modify(): memodifikasi nilai tanggal/waktu pada objek DateTime secara ringkas menggunakan string relatif (misal: "+1 day", "-2 weeks", "+1 month").',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DATE MODIFY</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 111 / 118</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚡ Modifikasi Waktu Relatif Cepat (date_modify)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>date_modify($object, $modifierString)</code> adalah cara tercepat memajukan atau memundurkan waktu objek DateTime menggunakan string intuitif tanpa harus membuat objek DateInterval terpisah.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$tgl = date_create("2026-08-27");

// 1. Tambah 1 Bulan
date_modify($tgl, "+1 month");
echo "<p>Setelah +1 Bulan: <strong>" . date_format($tgl, "d F Y") . "</strong></p>";

// 2. Mundurkan 5 Hari
date_modify($tgl, "-5 days");
echo "<p>Setelah -5 Hari: <strong>" . date_format($tgl, "d F Y") . "</strong></p>";
?>`,
    codeExplanation: [
      'date_modify() langsung memutasi objek DateTime asli secara cepat dan bersih.'
    ],
    challenge: {
      instruction: 'Tambahkan 7 hari ke tanggal "2026-01-01" dengan date_modify($tgl, "+7 days").',
      starterCode: `<?php
$tgl = date_create("2026-01-01");
date_modify($tgl, "+7 days");
echo "Hasil: " . date_format($tgl, "Y-m-d");
?>`,
      hint: 'Panggil date_modify($tgl, "+7 days").'
    },
    quiz: {
      question: 'Apa keunggulan date_modify() dibanding date_add() / date_sub()?',
      options: [
        'Lebih ringkas karena langsung menerima string relatif seperti "+2 days" atau "-1 month" tanpa perlu membuat objek DateInterval terpisah',
        'Menghapus database',
        'Mengubah waktu komputer',
        'Hanya untuk angka'
      ],
      correctIndex: 0,
      explanation: 'date_modify menerima string ekspresi relatif secara langsung sehingga koding terasa jauh lebih ringkas.'
    }
  },

  // 112. DATE_OFFSET_GET()
  {
    id: 'php-ref-date-offset-get',
    title: 'PHP date_offset_get()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 112,
    overview: 'Fungsi date_offset_get(): mengembalikan selisih waktu zona waktu (Timezone Offset) dalam satuan DETIK terhadap Greenwich Mean Time (GMT/UTC).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">OFFSET GET</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 112 / 118</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⏱️ Menghitung Selisih Offset Waktu (GMT)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>date_offset_get($object)</code> mengembalikan angka integer selisih detik zona waktu terhadap UTC (misal: <code>Asia/Jakarta</code> adalah UTC+7 = <code>+25200</code> detik).
          </p>
        </div>
      </div>
    `,
    code: `<?php
date_default_timezone_set("Asia/Jakarta");
$tgl = date_create();

$offsetDetik = date_offset_get($tgl);
$offsetJam = $offsetDetik / 3600;

echo "<h3>Hasil Pengukuran Offset Waktu (Asia/Jakarta):</h3>";
echo "<p>Offset Detik: <strong>+$offsetDetik Detik</strong></p>";
echo "<p>Offset Jam: <strong style='color: #059669;'>UTC +$offsetJam Jam (WIB)</strong></p>";
?>`,
    codeExplanation: [
      '7 jam dikali 3600 detik = 25200 detik offset.'
    ],
    challenge: {
      instruction: 'Ukur offset zona waktu saat ini dengan date_offset_get(date_create()).',
      starterCode: `<?php
echo "Offset: " . date_offset_get(date_create()) . " detik";
?>`,
      hint: 'Panggil date_offset_get(date_create()).'
    },
    quiz: {
      question: 'Berapakah nilai yang dikembalikan oleh date_offset_get() untuk zona waktu "Asia/Jakarta" (UTC+7)?',
      options: [
        '25200 detik (7 jam * 3600 detik)',
        '7 detik',
        '3600 detik',
        '0 detik'
      ],
      correctIndex: 0,
      explanation: '7 jam x 3600 detik/jam = 25200 detik.'
    }
  },

  // 113. DATE_PARSE_FROM_FORMAT()
  {
    id: 'php-ref-date-parse-from-format',
    title: 'PHP date_parse_from_format()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 113,
    overview: 'Fungsi date_parse_from_format(): membedah string tanggal dengan format tertentu dan mengembalikannya sebagai array asosiatif informasi terperinci.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DATE PARSE FORMAT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 113 / 118</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔬 Membedah Tanggal Berformat ke Array</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>date_parse_from_format($format, $datetime)</code> mengekstrak setiap komponen tanggal (year, month, day, hour, minute, second) ke dalam struktur array asosiatif berdasarkan pola format spesifik.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$data = date_parse_from_format("d.m.Y H:i", "27.08.2026 15:30");

echo "<h3>Hasil Penguraian date_parse_from_format():</h3>";
echo "<ul>";
echo "<li>Tahun: <strong>{$data['year']}</strong></li>";
echo "<li>Bulan: <strong>{$data['month']}</strong></li>";
echo "<li>Hari: <strong>{$data['day']}</strong></li>";
echo "<li>Jam: <strong>{$data['hour']}:{$data['minute']}</strong></li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'Mengembalikan array lengkap tanpa perlu membuat objek DateTime.'
    ],
    challenge: {
      instruction: 'Urai string "2026-12-31" dengan pola "Y-m-d".',
      starterCode: `<?php
$res = date_parse_from_format("Y-m-d", "2026-12-31");
echo "Bulan: " . $res['month'];
?>`,
      hint: 'Panggil date_parse_from_format("Y-m-d", "2026-12-31").'
    },
    quiz: {
      question: 'Apa tipe data nilai kembalian dari date_parse_from_format()?',
      options: [
        'Array asosiatif berisi breakdown detail tanggal dan status error',
        'String',
        'Integer timestamp',
        'Boolean'
      ],
      correctIndex: 0,
      explanation: 'Fungsi mengembalikan array asosiatif berisi informasi tahun, bulan, hari, jam, dsb.'
    }
  },

  // 114. DATE_PARSE()
  {
    id: 'php-ref-date-parse',
    title: 'PHP date_parse()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 114,
    overview: 'Fungsi date_parse(): membedah string tanggal/waktu standar menjadi array asosiatif informasi terperinci secara otomatis tanpa mendefinisikan pola format.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DATE PARSE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 114 / 118</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔬 Penguraian Tanggal Otomatis (date_parse)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>date_parse($datetimeString)</code> secara cerdas mendeteksi dan membedah string tanggal standar (seperti <code>"2026-08-27 10:00:00"</code>) menjadi array informasi.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$info = date_parse("2026-08-27 16:20:00");

echo "<h3>Hasil Penguraian date_parse():</h3>";
echo "<pre style='background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 8px;'>" . print_r($info, true) . "</pre>";
?>`,
    codeExplanation: [
      'date_parse otomatis mengidentifikasi tahun 2026, bulan 8, hari 27, jam 16, menit 20.'
    ],
    challenge: {
      instruction: 'Uji fungsi date_parse("2026-01-01").',
      starterCode: `<?php
$p = date_parse("2026-01-01");
echo "Tahun: " . $p['year'];
?>`,
      hint: 'Panggil date_parse("2026-01-01").'
    },
    quiz: {
      question: 'Apa perbedaan antara date_parse() dan date_parse_from_format()?',
      options: [
        'date_parse() menguraikan string tanggal standar secara otomatis tanpa pola, sedangkan date_parse_from_format() memerlukan pola format eksplisit',
        'date_parse() hanya untuk angka',
        'date_parse_from_format() menghapus timezone',
        'Keduanya identik'
      ],
      correctIndex: 0,
      explanation: 'date_parse mendeteksi format otomatis, sedangkan date_parse_from_format membutuhkan parameter pola format kustom.'
    }
  },

  // 115. DATE_SUB()
  {
    id: 'php-ref-date-sub',
    title: 'PHP date_sub()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 115,
    overview: 'Fungsi date_sub(): mengurangkan sejumlah interval waktu (hari, bulan, tahun, jam) dari objek DateTime.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DATE SUB</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 115 / 118</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">➖ Mengurangkan Waktu Tanggal (date_sub)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>date_sub($dateObject, $intervalObject)</code> memundurkan tanggal pada objek DateTime (kebalikan dari <code>date_add()</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$hariIni = date_create("2026-08-27");

// Mundurkan 7 hari ke belakang (melihat riwayat transaksi 7 hari terakhir)
$interval7Hari = date_interval_create_from_date_string("7 days");
date_sub($hariIni, $interval7Hari);

echo "<h3>Hasil Pengurangan Waktu (date_sub):</h3>";
echo "<p>7 Hari yang Lalu adalah Tanggal: <strong style='color: #4f46e5;'>" . date_format($hariIni, "l, d F Y") . "</strong></p>";
?>`,
    codeExplanation: [
      'date_sub memodifikasi objek $hariIni dari 27 Agustus menjadi 20 Agustus 2026.'
    ],
    challenge: {
      instruction: 'Mundurkan 10 hari dari "2026-05-20" dengan date_sub.',
      starterCode: `<?php
$d = date_create("2026-05-20");
date_sub($d, date_interval_create_from_date_string("10 days"));
echo "Hasil: " . date_format($d, "Y-m-d");
?>`,
      hint: 'Panggil date_sub($d, date_interval_create_from_date_string("10 days")).'
    },
    quiz: {
      question: 'Fungsi apakah yang merupakan kebalikan langsung dari date_add()?',
      options: [
        'date_sub()',
        'date_modify()',
        'date_diff()',
        'date_set()'
      ],
      correctIndex: 0,
      explanation: 'date_sub() mengurangkan interval waktu, sedangkan date_add() menambahkan interval waktu.'
    }
  },

  // 116. DATE_SUN_INFO()
  {
    id: 'php-ref-date-sun-info',
    title: 'PHP date_sun_info()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 116,
    overview: 'Kuasai date_sun_info(): menghitung waktu matahari terbit (sunrise), terbenam (sunset), waktu fajar sipil/astronomi (twilight/dawn), dan titik tengah hari (zenith/noon) berdasarkan titik koordinat Latitude dan Longitude GPS.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SOLAR EPHEMERIS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 116 / 118</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">☀️ Informasi Matahari & Waktu Astronomi</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>date_sun_info($timestamp, $latitude, $longitude)</code> menghitung jadwal astronomi matahari lengkap untuk koordinat geografis bumi tertentu (sangat populer untuk jadwal waktu sholat dan waktu sahur/berbuka).
          </p>
        </div>
      </div>
    `,
    code: `<?php
date_default_timezone_set("Asia/Jakarta");

// Koordinat Kota Bandung: Latitude -6.9175, Longitude 107.6191
$latBandung = -6.9175;
$lngBandung = 107.6191;

$sunInfo = date_sun_info(time(), $latBandung, $lngBandung);

echo "<h3>Jadwal Matahari Kota Bandung Hari Ini:</h3>";
echo "<ul>";
echo "<li>Fajar Pertama (Astronomical Dawn): <strong>" . date("H:i:s", $sunInfo['astronomical_twilight_begin']) . " WIB</strong></li>";
echo "<li>Matahari Terbit (Sunrise): <strong style='color: #d97706;'>" . date("H:i:s", $sunInfo['sunrise']) . " WIB</strong></li>";
echo "<li>Tengah Hari (Solar Noon): <strong>" . date("H:i:s", $sunInfo['transit']) . " WIB</strong></li>";
echo "<li>Matahari Terbenam (Sunset): <strong style='color: #dc2626;'>" . date("H:i:s", $sunInfo['sunset']) . " WIB</strong></li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'date_sun_info menghasilkan array UNIX timestamp untuk 9 fase posisi matahari astronomis yang presisi.'
    ],
    challenge: {
      instruction: 'Hitung waktu matahari terbit di koordinat Jakarta (-6.2088, 106.8456) dengan date_sun_info.',
      starterCode: `<?php
date_default_timezone_set("Asia/Jakarta");
$s = date_sun_info(time(), -6.2088, 106.8456);
echo "Sunrise Jakarta: " . date("H:i", $s['sunrise']);
?>`,
      hint: 'Panggil date_sun_info(time(), -6.2088, 106.8456).'
    },
    quiz: {
      question: 'Parameter apa saja yang dibutuhkan oleh fungsi date_sun_info()?',
      options: [
        'UNIX Timestamp, Latitude (Garis Lintang), dan Longitude (Garis Bujur)',
        'Hanya tanggal string',
        'Hanya nama kota',
        'Tinggi gedung'
      ],
      correctIndex: 0,
      explanation: 'date_sun_info membutuhkan 3 parameter: $timestamp, $latitude, dan $longitude.'
    }
  },

  // 117. DATE_SUNRISE()
  {
    id: 'php-ref-date-sunrise',
    title: 'PHP date_sunrise()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 117,
    overview: 'Fungsi date_sunrise(): fungsi legacy penghitung waktu matahari terbit (disarankan menggunakan date_sun_info() di PHP 8.1+).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-amber-600 text-white">SUNRISE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 117 / 118</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌅 Waktu Terbit Fajar (date_sunrise)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>date_sunrise($timestamp, $format, $latitude, $longitude, $zenith, $offset)</code> mengembalikan waktu terbit matahari. Di PHP 8.1+, fungsi ini didepresiasi dan direkomendasikan digantikan oleh <code>date_sun_info()</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
date_default_timezone_set("Asia/Jakarta");

// Cara Modern yang Direkomendasikan di PHP 8+:
$sun = date_sun_info(time(), -6.9175, 107.6191);
$waktuTerbit = date("H:i", $sun['sunrise']);

echo "<h3>Waktu Matahari Terbit (Standar PHP 8):</h3>";
echo "<p>Matahari Terbit Pukul: <strong style='color: #d97706; font-size: 18px;'>$waktuTerbit WIB</strong></p>";
?>`,
    codeExplanation: [
      'date_sun_info() adalah pengganti resmi yang lebih cepat dan bebas dari peringatan deprecation warning di PHP 8.1+.'
    ],
    challenge: {
      instruction: 'Pahami migrasi dari date_sunrise() ke date_sun_info() di PHP modern.',
      starterCode: `<?php
echo "Gunakan date_sun_info() untuk kode aplikasi modern PHP 8.x.";
?>`,
      hint: 'Klik RUN untuk mereview date_sun_info.'
    },
    quiz: {
      question: 'Fungsi modern manakah di PHP 8.x yang direkomendasikan menggantikan date_sunrise() dan date_sunset()?',
      options: [
        'date_sun_info()',
        'date_sunrise_new()',
        'solar_calc()',
        'sun_time()'
      ],
      correctIndex: 0,
      explanation: 'date_sun_info() adalah fungsi pengganti resmi yang menyediakan informasi fase matahari lengkap.'
    }
  },

  // 118. DATE_SUNSET()
  {
    id: 'php-ref-date-sunset',
    title: 'PHP date_sunset()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 118,
    overview: 'Fungsi date_sunset(): fungsi legacy penghitung waktu matahari terbenam (Maghrib/Senja) dan integrasi perhitungannya di PHP modern.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-rose-600 text-white">SUNSET</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 118 / 118</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌇 Waktu Terbenam Senja (date_sunset)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>date_sunset($timestamp, ...)</code> menghitung waktu terbenamnya piringan matahari. Digunakan pada penentuan waktu berbuka puasa dan pergantian tanggal pada kalender berbasis peredaran bulan.
          </p>
        </div>
      </div>
    `,
    code: `<?php
date_default_timezone_set("Asia/Jakarta");

$sunInfo = date_sun_info(time(), -6.9175, 107.6191);
$waktuTerbenam = date("H:i", $sunInfo['sunset']);

echo "<h3>Waktu Matahari Terbenam (Senja / Sunset):</h3>";
echo "<p>Matahari Terbenam Pukul: <strong style='color: #dc2626; font-size: 18px;'>$waktuTerbenam WIB</strong></p>";
?>`,
    codeExplanation: [
      'Menghasilkan waktu terbenam presisi berdasarkan garis lintang dan bujur lokasi perangkat.'
    ],
    challenge: {
      instruction: 'Cetak waktu sunset hari ini dengan date("H:i:s", $sunInfo[\'sunset\']).',
      starterCode: `<?php
date_default_timezone_set("Asia/Jakarta");
$s = date_sun_info(time(), -6.2, 106.8);
echo "Sunset: " . date("H:i:s", $s['sunset']) . " WIB";
?>`,
      hint: 'Panggil date("H:i:s", $s[\'sunset\']).'
    },
    quiz: {
      question: 'Informasi apa yang diperoleh dari properti $sunInfo["sunset"] pada fungsi date_sun_info()?',
      options: [
        'UNIX Timestamp saat matahari terbenam sempurna di bawah garis cakrawala',
        'Suhu udara',
        'Arah kiblat',
        'Ketinggian awan'
      ],
      correctIndex: 0,
      explanation: 'Nilai tersebut merupakan integer UNIX timestamp waktu matahari tenggelam di cakrawala.'
    }
  }
];

module.exports = phpPart16RefDate;
