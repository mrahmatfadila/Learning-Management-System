// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (CALENDAR FUNCTIONS)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart15RefCalendar = [
  // 80. CAL_DAYS_IN_MONTH()
  {
    id: 'php-ref-cal-days-in-month',
    title: 'PHP cal_days_in_month()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 80,
    overview: 'Fungsi cal_days_in_month(): menghitung jumlah hari dalam satu bulan tertentu pada kalender dan tahun tertentu (menangani tahun kabisat / leap year otomatis).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CALENDAR REFERENCE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 80 / 97</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📅 Menghitung Jumlah Hari dalam Bulan</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>cal_days_in_month($calendar, $month, $year)</code> mengembalikan total hari dalam bulan tertentu. Sangat berguna untuk membuat widget kalender interaktif dan memeriksa tahun kabisat (Leap Year) Februari (28 atau 29 hari).
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Hitung jumlah hari Februari 2024 (Tahun Kabisat) vs Februari 2025
$feb2024 = cal_days_in_month(CAL_GREGORIAN, 2, 2024);
$feb2025 = cal_days_in_month(CAL_GREGORIAN, 2, 2025);
$des2026 = cal_days_in_month(CAL_GREGORIAN, 12, 2026);

echo "<h3>Hasil Kalkulasi cal_days_in_month():</h3>";
echo "<ul>";
echo "<li>Februari 2024: <strong>$feb2024 Hari</strong> (Tahun Kabisat)</li>";
echo "<li>Februari 2025: <strong>$feb2025 Hari</strong> (Tahun Biasa)</li>";
echo "<li>Desember 2026: <strong>$des2026 Hari</strong></li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'CAL_GREGORIAN adalah konstanta kalender standar internasional (Masehi).',
      'Fungsi secara otomatis memperhitungkan aturan astronomi tahun kabisat.'
    ],
    challenge: {
      instruction: 'Hitung jumlah hari pada bulan Januari 2026 menggunakan cal_days_in_month(CAL_GREGORIAN, 1, 2026).',
      starterCode: `<?php
$hari = cal_days_in_month(CAL_GREGORIAN, 1, 2026);
echo "Jumlah hari Januari 2026: $hari";
?>`,
      hint: 'Panggil cal_days_in_month(CAL_GREGORIAN, 1, 2026).'
    },
    quiz: {
      question: 'Konstanta kalender apakah yang mewakili sistem kalender Masehi standar internasional pada cal_days_in_month()?',
      options: [
        'CAL_GREGORIAN',
        'CAL_JULIAN',
        'CAL_JEWISH',
        'CAL_FRENCH'
      ],
      correctIndex: 0,
      explanation: 'CAL_GREGORIAN adalah kalender Gregorian (Masehi) yang digunakan secara global saat ini.'
    }
  },

  // 81. CAL_FROM_JD()
  {
    id: 'php-ref-cal-from-jd',
    title: 'PHP cal_from_jd()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 81,
    overview: 'Fungsi cal_from_jd(): mengonversi hitungan hari Julian (Julian Day Count) menjadi array informasi tanggal lengkap (hari, bulan, tahun, nama hari, dll.).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CAL FROM JD</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 81 / 97</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔭 Mengonversi Julian Day ke Detail Tanggal</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <strong>Julian Day (JD)</strong> adalah hitungan hari berurutan yang digunakan astronom sejak 1 Januari 4713 SM. <code>cal_from_jd($jd, $calendar)</code> mengubah angka Julian Day menjadi array asosiatif rincian kalender.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$jdSekarang = unixtojd(time());

// Konversi Julian Day ke detail kalender Gregorian
$infoTanggal = cal_from_jd($jdSekarang, CAL_GREGORIAN);

echo "<h3>Hasil Penguraian cal_from_jd():</h3>";
echo "<pre style='background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 8px;'>" . print_r($infoTanggal, true) . "</pre>";
echo "<p>Hari: <strong>{$infoTanggal['dayname']}</strong>, Tanggal: <strong>{$infoTanggal['day']} {$infoTanggal['monthname']} {$infoTanggal['year']}</strong></p>";
?>`,
    codeExplanation: [
      'cal_from_jd mengembalikan array berisi date, month, day, year, dayname, dan monthname.'
    ],
    challenge: {
      instruction: 'Uji fungsi cal_from_jd dengan Julian Day hari ini.',
      starterCode: `<?php
$jd = unixtojd(time());
$cal = cal_from_jd($jd, CAL_GREGORIAN);
echo "Tahun: " . $cal['year'];
?>`,
      hint: 'Klik RUN untuk mencoba cal_from_jd.'
    },
    quiz: {
      question: 'Apa format nilai kembalian dari fungsi cal_from_jd()?',
      options: [
        'Array asosiatif berisi detail tanggal (day, month, year, dayname, monthname)',
        'String tanggal tunggal',
        'Integer timestamp',
        'Boolean true/false'
      ],
      correctIndex: 0,
      explanation: 'cal_from_jd mengembalikan array asosiatif berisi rincian tanggal lengkap dari kalender target.'
    }
  },

  // 82. CAL_INFO()
  {
    id: 'php-ref-cal-info',
    title: 'PHP cal_info()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 82,
    overview: 'Fungsi cal_info(): mengembalikan metadata dan informasi kalender tertentu (daftar nama bulan, nama singkatan, dan jumlah bulan dalam setahun).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CAL INFO</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 82 / 97</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">ℹ️ Metadata Kalender (cal_info)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>cal_info($calendar)</code> mengembalikan array metadata kalender, seperti nama kalender, jumlah bulan, dan array seluruh nama bulan dari kalender tersebut.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Ambil metadata kalender Gregorian (Masehi)
$info = cal_info(CAL_GREGORIAN);

echo "<h3>Metadata Kalender Gregorian:</h3>";
echo "<p>Nama Kalender: <strong>{$info['calname']}</strong></p>";
echo "<p>Jumlah Bulan: <strong>{$info['nmonths']} Bulan</strong></p>";
echo "<p>Nama Bulan #1: <strong>{$info['months'][1]}</strong>, Nama Bulan #12: <strong>{$info['months'][12]}</strong></p>";
?>`,
    codeExplanation: [
      'cal_info() sangat praktis untuk menghasilkan daftar opsi dropdown bulan tanpa hardcode manual.'
    ],
    challenge: {
      instruction: 'Cetak nama kalender dari cal_info(CAL_GREGORIAN).',
      starterCode: `<?php
$inf = cal_info(CAL_GREGORIAN);
echo "Nama Kalender: " . $inf['calname'];
?>`,
      hint: 'Panggil cal_info(CAL_GREGORIAN).'
    },
    quiz: {
      question: 'Informasi apa saja yang termuat di dalam kembalian cal_info()?',
      options: [
        'Nama kalender, jumlah bulan (nmonths), daftar nama bulan (months), dan singkatannya (abbrevmonths)',
        'Hanya jam server',
        'Hanya tahun kabisat',
        'Kapasitas memori PHP'
      ],
      correctIndex: 0,
      explanation: 'cal_info memuat metadata lengkap seputar nama kalender, struktur bulan, dan singkatan resminya.'
    }
  },

  // 83. CAL_TO_JD()
  {
    id: 'php-ref-cal-to-jd',
    title: 'PHP cal_to_jd()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 83,
    overview: 'Fungsi cal_to_jd(): mengonversi tanggal dari kalender tertentu (Gregorian, Julian, Jewish, French) menjadi hitungan hari Julian (Julian Day Count).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CAL TO JD</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 83 / 97</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔄 Konversi Kalender ke Julian Day</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>cal_to_jd($calendar, $month, $day, $year)</code> mengubah tanggal kalender apapun menjadi angka universal <em>Julian Day Count</em> untuk keperluan perbandingan dan selisih hari antar-kalender.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Konversi Tanggal 17 Agustus 1945 (Kemerdekaan RI) ke Julian Day
$jdKemerdekaan = cal_to_jd(CAL_GREGORIAN, 8, 17, 1945);

echo "<h3>Hasil Konversi Tanggal ke Julian Day:</h3>";
echo "<p>Tanggal: <strong>17 Agustus 1945</strong></p>";
echo "<p>Julian Day Count: <strong style='color: #4f46e5;'>$jdKemerdekaan</strong></p>";
?>`,
    codeExplanation: [
      'Julian Day adalah bilangan bulat universal yang memudahkan kalkulasi selisih hari yang presisi lintas abad.'
    ],
    challenge: {
      instruction: 'Konversi tanggal 1 Januari 2000 ke Julian Day dengan cal_to_jd(CAL_GREGORIAN, 1, 1, 2000).',
      starterCode: `<?php
$jd = cal_to_jd(CAL_GREGORIAN, 1, 1, 2000);
echo "Julian Day Y2K: $jd";
?>`,
      hint: 'Panggil cal_to_jd(CAL_GREGORIAN, 1, 1, 2000).'
    },
    quiz: {
      question: 'Apa kegunaan utama dari angka universal Julian Day Count (JD) di pemrograman astronomi & kalender?',
      options: [
        'Sebagai jembatan perantara universal untuk mengonversi tanggal antar berbagai sistem kalender dunia (Masehi, Julian, Yahudi, Hijriah)',
        'Untuk memformat JSON',
        'Untuk enkripsi password',
        'Untuk menghapus cookies'
      ],
      correctIndex: 0,
      explanation: 'Julian Day adalah sistem hitung hari kontinu yang menjadi standar konversi universal antar semua sistem kalender.'
    }
  },

  // 84. EASTER_DATE()
  {
    id: 'php-ref-easter-date',
    title: 'PHP easter_date()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 84,
    overview: 'Fungsi easter_date(): menghitung timestamp UNIX tengah malam untuk hari Paskah (Easter Sunday) pada tahun tertentu menggunakan algoritma gerejawi Computus.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">EASTER DATE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 84 / 97</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">✝️ Menghitung Tanggal Hari Paskah</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Hari Paskah adalah hari libur yang tanggalnya berpindah-pindah setiap tahun berdasarkan siklus bulan purnama musim semi. <code>easter_date($year)</code> menghitung UNIX timestamp tepat pada hari Paskah.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Hitung Hari Paskah untuk tahun 2025 dan 2026
$paskah2025 = easter_date(2025);
$paskah2026 = easter_date(2026);

echo "<h3>Tanggal Hari Paskah (Easter Sunday):</h3>";
echo "<ul>";
echo "<li>Tahun 2025: <strong>" . date("d F Y", $paskah2025) . "</strong></li>";
echo "<li>Tahun 2026: <strong>" . date("d F Y", $paskah2026) . "</strong></li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'easter_date() mengembalikan UNIX timestamp yang dapat langsung diformat dengan date("d F Y", $timestamp).'
    ],
    challenge: {
      instruction: 'Cetak tanggal Paskah tahun 2027 dengan date("d F Y", easter_date(2027)).',
      starterCode: `<?php
echo "Paskah 2027: " . date("d F Y", easter_date(2027));
?>`,
      hint: 'Panggil date("d F Y", easter_date(2027)).'
    },
    quiz: {
      question: 'Tipe data nilai kembalian apakah yang dihasilkan oleh fungsi easter_date($year)?',
      options: [
        'UNIX Timestamp (integer detik sejak 1 Jan 1970)',
        'String tanggal format YYYY-MM-DD',
        'Array kalender',
        'Float'
      ],
      correctIndex: 0,
      explanation: 'easter_date() mengembalikan UNIX Timestamp integer.'
    }
  },

  // 85. EASTER_DAYS()
  {
    id: 'php-ref-easter-days',
    title: 'PHP easter_days()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 85,
    overview: 'Fungsi easter_days(): menghitung jumlah hari antara 21 Maret dan hari Paskah pada tahun tertentu.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">EASTER DAYS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 85 / 97</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🗓️ Jumlah Hari Setelah 21 Maret</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>easter_days($year)</code> mengembalikan angka integer selisih hari antara tanggal 21 Maret (ekuinoks musim semi) dengan hari Minggu Paskah.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$hariPaskah2026 = easter_days(2026);

echo "<h3>Kalkulasi easter_days(2026):</h3>";
echo "<p>Hari Paskah 2026 jatuh pada <strong>$hariPaskah2026 hari</strong> setelah tanggal 21 Maret.</p>";
?>`,
    codeExplanation: [
      'easter_days() bekerja untuk rentang tahun yang sangat luas melebihi batasan 32-bit UNIX timestamp.'
    ],
    challenge: {
      instruction: 'Hitung selisih hari Paskah tahun 2025 dengan easter_days(2025).',
      starterCode: `<?php
echo "Hari setelah 21 Maret: " . easter_days(2025);
?>`,
      hint: 'Panggil easter_days(2025).'
    },
    quiz: {
      question: 'Tanggal patokan awal apakah yang digunakan oleh fungsi easter_days() untuk menghitung selisih hari?',
      options: [
        '21 Maret (Musim Semi)',
        '1 Januari',
        '25 Desember',
        '17 Agustus'
      ],
      correctIndex: 0,
      explanation: 'easter_days menghitung jumlah hari terhitung sejak tanggal 21 Maret.'
    }
  },

  // 86. FRENCHTOJD()
  {
    id: 'php-ref-frenchtojd',
    title: 'PHP frenchtojd()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 86,
    overview: 'Fungsi frenchtojd(): mengonversi tanggal dari sistem Kalender Republik Perancis (French Republican Calendar pasca Revolusi Perancis 1792-1806) ke Julian Day Count.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">FRENCH REVOLUTION CALENDAR</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 86 / 97</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🇫🇷 Kalender Republik Perancis ke Julian Day</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>frenchtojd($month, $day, $year)</code> mengonversi penanggalan Republik Perancis ke hitungan hari Julian Day (valid dari Tahun 1 hingga Tahun 14 / 1792 - 1806 M).
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Konversi Bulan 1 (Vendémiaire), Hari 1, Tahun 1 (22 September 1792)
$jdAwalRepublik = frenchtojd(1, 1, 1);

echo "<h3>Konversi Kalender Republik Perancis (frenchtojd):</h3>";
echo "<p>Vendémiaire 1, An I = Julian Day: <strong>$jdAwalRepublik</strong></p>";
echo "<p>Kalender Masehi: <strong>" . jdtogregorian($jdAwalRepublik) . "</strong> (22 September 1792)</p>";
?>`,
    codeExplanation: [
      'frenchtojd memungkinkan pembacaan dokumen sejarah arsip Revolusi Perancis.'
    ],
    challenge: {
      instruction: 'Uji konversi frenchtojd(1, 1, 1).',
      starterCode: `<?php
$jd = frenchtojd(1, 1, 1);
echo "Julian Day: $jd";
?>`,
      hint: 'Panggil frenchtojd(1, 1, 1).'
    },
    quiz: {
      question: 'Sistem kalender sejarah manakah yang dikonversi oleh fungsi frenchtojd()?',
      options: [
        'Kalender Republik Perancis (1792-1806 M)',
        'Kalender Masehi standar',
        'Kalender Hijriah',
        'Kalender Maya'
      ],
      correctIndex: 0,
      explanation: 'frenchtojd mengonversi penanggalan French Republican Calendar ke Julian Day.'
    }
  },

  // 87. GREGORIANTOJD()
  {
    id: 'php-ref-gregoriantojd',
    title: 'PHP gregoriantojd()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 87,
    overview: 'Fungsi gregoriantojd(): mengonversi tanggal Kalender Gregorian (Masehi) ke hitungan hari Julian Day Count.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">GREGORIAN TO JD</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 87 / 97</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌐 Kalender Masehi ke Julian Day</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>gregoriantojd($month, $day, $year)</code> mengubah tanggal Masehi menjadi nilai integer Julian Day (rentang valid: 4714 SM s/d 9999 M).
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Hitung selisih hari antara Tahun Baru 2026 dan Hari Kemerdekaan RI 2026
$jdTahunBaru = gregoriantojd(1, 1, 2026);
$jdHUTRI = gregoriantojd(8, 17, 2026);

$selisihHari = $jdHUTRI - $jdTahunBaru;

echo "<h3>Hasil Kalkulasi gregoriantojd():</h3>";
echo "<p>JD Tahun Baru 2026: <strong>$jdTahunBaru</strong></p>";
echo "<p>JD HUT RI 2026: <strong>$jdHUTRI</strong></p>";
echo "<p>Selisih Hari: <strong style='color: #059669;'>$selisihHari Hari</strong></p>";
?>`,
    codeExplanation: [
      'gregoriantojd memudahkan kalkulasi selisih hari dengan pengurangan matematika biasa ($jd2 - $jd1).'
    ],
    challenge: {
      instruction: 'Konversi tanggal 25 Desember 2026 ke Julian Day dengan gregoriantojd(12, 25, 2026).',
      starterCode: `<?php
$jd = gregoriantojd(12, 25, 2026);
echo "Julian Day Natal 2026: $jd";
?>`,
      hint: 'Panggil gregoriantojd(12, 25, 2026).'
    },
    quiz: {
      question: 'Urutan parameter yang benar pada fungsi gregoriantojd() adalah:',
      options: [
        'gregoriantojd($month, $day, $year)',
        'gregoriantojd($day, $month, $year)',
        'gregoriantojd($year, $month, $day)',
        'gregoriantojd($dateString)'
      ],
      correctIndex: 0,
      explanation: 'Fungsi kalender PHP menggunakan urutan standar format Amerika: ($month, $day, $year).'
    }
  },

  // 88. JDDAYOFWEEK()
  {
    id: 'php-ref-jddayofweek',
    title: 'PHP jddayofweek()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 88,
    overview: 'Fungsi jddayofweek(): mengetahui hari dalam sepekan (nama hari string atau angka 0=Minggu, 1=Senin) dari nilai Julian Day.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">JD DAY OF WEEK</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 88 / 97</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📆 Mengetahui Nama Hari dari Julian Day</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>jddayofweek($julianday, $mode)</code> mengembalikan nomor hari (mode 0), nama hari bahasa Inggris lengkap (mode 1: "Friday"), atau nama hari singkatan (mode 2: "Fri").
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Tanggal 17 Agustus 1945
$jd = gregoriantojd(8, 17, 1945);

$namaHari = jddayofweek($jd, CAL_DOW_LONG); // Mode 1: Long Name
$singkat = jddayofweek($jd, CAL_DOW_SHORT); // Mode 2: Short Name
$nomorHari = jddayofweek($jd, CAL_DOW_DAYNO); // Mode 0: 0=Sunday, 5=Friday

echo "<h3>Hari Kemerdekaan RI (17 Agustus 1945):</h3>";
echo "<ul>";
echo "<li>Nama Hari Lengkap: <strong>$namaHari</strong></li>";
echo "<li>Nama Singkat: <strong>$singkat</strong></li>";
echo "<li>Nomor Hari: <strong>$nomorHari (Jumat)</strong></li>";
echo "</ul>";
?>`,
    codeExplanation: [
      '17 Agustus 1945 jatuh tepat pada hari Jumat (Friday).'
    ],
    challenge: {
      instruction: 'Cari nama hari untuk Julian Day hari ini.',
      starterCode: `<?php
$jd = unixtojd(time());
echo "Hari ini: " . jddayofweek($jd, CAL_DOW_LONG);
?>`,
      hint: 'Panggil jddayofweek($jd, CAL_DOW_LONG).'
    },
    quiz: {
      question: 'Konstanta mode apakah yang digunakan pada jddayofweek() untuk mengembalikan nama hari lengkap dalam bahasa Inggris (seperti "Monday")?',
      options: [
        'CAL_DOW_LONG (atau integer 1)',
        'CAL_DOW_SHORT',
        'CAL_DOW_DAYNO',
        'CAL_NAME'
      ],
      correctIndex: 0,
      explanation: 'CAL_DOW_LONG (mode 1) mengembalikan string nama hari lengkap dalam bahasa Inggris.'
    }
  },

  // 89. JDMONTHNAME()
  {
    id: 'php-ref-jdmonthname',
    title: 'PHP jdmonthname()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 89,
    overview: 'Fungsi jdmonthname(): mengembalikan nama bulan dari nilai Julian Day berdasarkan mode kalender tertentu.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">JD MONTH NAME</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 89 / 97</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌙 Mengambil Nama Bulan dari Julian Day</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>jdmonthname($julianday, $mode)</code> mengembalikan nama bulan dari kalender Masehi (CAL_MONTH_GREGORIAN_LONG), Julian, Jewish, atau French Republican.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$jd = gregoriantojd(8, 17, 1945);

$namaBulan = jdmonthname($jd, CAL_MONTH_GREGORIAN_LONG);
$singkatanBulan = jdmonthname($jd, CAL_MONTH_GREGORIAN_SHORT);

echo "<h3>Hasil Pengambilan Nama Bulan:</h3>";
echo "<p>Nama Bulan: <strong>$namaBulan</strong> (Singkatan: $singkatanBulan)</p>";
?>`,
    codeExplanation: [
      'jdmonthname($jd, CAL_MONTH_GREGORIAN_LONG) menghasilkan "August".'
    ],
    challenge: {
      instruction: 'Ambil nama bulan untuk tanggal 1 Januari dengan jdmonthname(gregoriantojd(1, 1, 2026), CAL_MONTH_GREGORIAN_LONG).',
      starterCode: `<?php
$jd = gregoriantojd(1, 1, 2026);
echo "Bulan: " . jdmonthname($jd, CAL_MONTH_GREGORIAN_LONG);
?>`,
      hint: 'Panggil jdmonthname($jd, CAL_MONTH_GREGORIAN_LONG).'
    },
    quiz: {
      question: 'Apa hasil kembalian dari jdmonthname()?',
      options: [
        'String nama bulan (seperti "January", "August")',
        'Nomor bulan integer',
        'Jumlah hari dalam bulan',
        'Array'
      ],
      correctIndex: 0,
      explanation: 'jdmonthname mengembalikan teks nama bulan sesuai kalender yang diminta.'
    }
  },

  // 90. JDTOFRENCH()
  {
    id: 'php-ref-jdtofrench',
    title: 'PHP jdtofrench()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 90,
    overview: 'Fungsi jdtofrench(): mengonversi hitungan hari Julian Day Count ke string tanggal Kalender Republik Perancis (format: "month/day/year").',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">JD TO FRENCH</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 90 / 97</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🇫🇷 Julian Day ke Kalender Republik Perancis</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>jdtofrench($julianday)</code> mengubah angka Julian Day ke format tanggal Republik Perancis <code>"bulan/hari/tahun"</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$jd = frenchtojd(1, 1, 1);
$tanggalFrench = jdtofrench($jd);

echo "<h3>Hasil Konversi jdtofrench():</h3>";
echo "<p>Tanggal Republik Perancis: <strong>$tanggalFrench</strong> (Bulan 1 / Hari 1 / Tahun 1)</p>";
?>`,
    codeExplanation: [
      'jdtofrench mengembalikan string format "1/1/1".'
    ],
    challenge: {
      instruction: 'Uji fungsi jdtofrench($jd).',
      starterCode: `<?php
$jd = frenchtojd(2, 15, 3);
echo "French Date: " . jdtofrench($jd);
?>`,
      hint: 'Panggil jdtofrench($jd).'
    },
    quiz: {
      question: 'Format string apa yang dihasilkan oleh fungsi jdtofrench()?',
      options: [
        '"month/day/year"',
        '"YYYY-MM-DD"',
        '"day-month-year"',
        'Timestamp'
      ],
      correctIndex: 0,
      explanation: 'jdtofrench mengembalikan string tanggal berformat "month/day/year".'
    }
  },

  // 91. JDTOGREGORIAN()
  {
    id: 'php-ref-jdtogregorian',
    title: 'PHP jdtogregorian()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 91,
    overview: 'Fungsi jdtogregorian(): mengonversi hitungan hari Julian Day Count ke string tanggal Kalender Gregorian (Masehi) format "month/day/year".',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">JD TO GREGORIAN</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 91 / 97</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌐 Julian Day ke Kalender Masehi</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>jdtogregorian($julianday)</code> adalah fungsi konversi standar yang mengubah Julian Day Count kembali menjadi string tanggal Masehi <code>"month/day/year"</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$jd = gregoriantojd(8, 17, 1945);
$tanggalMasehi = jdtogregorian($jd);

echo "<h3>Hasil Konversi jdtogregorian():</h3>";
echo "<p>Julian Day: <strong>$jd</strong> &rarr; Masehi: <strong>$tanggalMasehi</strong> (Bulan 8 / Tanggal 17 / Tahun 1945)</p>";
?>`,
    codeExplanation: [
      'jdtogregorian($jd) mengembalikan "8/17/1945".'
    ],
    challenge: {
      instruction: 'Konversi Julian Day 2460000 ke kalender Masehi dengan jdtogregorian(2460000).',
      starterCode: `<?php
echo "Tanggal Masehi: " . jdtogregorian(2460000);
?>`,
      hint: 'Panggil jdtogregorian(2460000).'
    },
    quiz: {
      question: 'Fungsi apakah yang merupakan kebalikan langsung dari gregoriantojd()?',
      options: [
        'jdtogregorian()',
        'cal_from_jd()',
        'unixtojd()',
        'jddayofweek()'
      ],
      correctIndex: 0,
      explanation: 'jdtogregorian() mengonversi JD kembali ke string tanggal Gregorian (Masehi).'
    }
  },

  // 92. JDTOJEWISH()
  {
    id: 'php-ref-jdtojewish',
    title: 'PHP jdtojewish()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 92,
    overview: 'Fungsi jdtojewish(): mengonversi hitungan hari Julian Day ke string tanggal Kalender Yahudi (Jewish Calendar).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">JD TO JEWISH</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 92 / 97</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">✡️ Julian Day ke Kalender Yahudi</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>jdtojewish($julianday, $hebrew, $fl)</code> mengonversi nilai Julian Day menjadi tanggal Kalender Yahudi (opsi huruf Latin atau aksara Ibrani).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$jdSekarang = unixtojd(time());
$tanggalYahudi = jdtojewish($jdSekarang);

echo "<h3>Hasil Konversi jdtojewish():</h3>";
echo "<p>Tanggal Kalender Yahudi Hari Ini: <strong>$tanggalYahudi</strong></p>";
?>`,
    codeExplanation: [
      'jdtojewish berguna untuk aplikasi multikultural yang mendukung penanggalan berbasis bulan tradisional.'
    ],
    challenge: {
      instruction: 'Uji konversi jdtojewish($jd).',
      starterCode: `<?php
$jd = gregoriantojd(1, 1, 2026);
echo "Tanggal Jewish: " . jdtojewish($jd);
?>`,
      hint: 'Panggil jdtojewish($jd).'
    },
    quiz: {
      question: 'Sistem penanggalan apakah yang dihasilkan oleh jdtojewish()?',
      options: [
        'Kalender Yahudi (Jewish Calendar)',
        'Kalender Julian',
        'Kalender Masehi',
        'Kalender Perancis'
      ],
      correctIndex: 0,
      explanation: 'jdtojewish mengonversi Julian Day ke tanggal kalender Yahudi.'
    }
  },

  // 93. JDTOJULIAN()
  {
    id: 'php-ref-jdtojulian',
    title: 'PHP jdtojulian()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 93,
    overview: 'Fungsi jdtojulian(): mengonversi hitungan hari Julian Day ke string tanggal Kalender Julian kuno (kalender Julius Caesar 45 SM - 1582 M).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">JD TO JULIAN</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 93 / 97</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏛️ Julian Day ke Kalender Julian (Kuno)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>jdtojulian($julianday)</code> mengonversi angka Julian Day ke format tanggal Kalender Julian kuno yang berlaku sebelum reformasi Paus Gregorius XIII pada Oktober 1582.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Tanggal 4 Oktober 1582 (Hari terakhir kalender Julian digunakan di Roma)
$jd = juliantojd(10, 4, 1582);
$tglJulian = jdtojulian($jd);

echo "<h3>Hasil Konversi jdtojulian():</h3>";
echo "<p>Tanggal Julian Kuno: <strong>$tglJulian</strong></p>";
?>`,
    codeExplanation: [
      'jdtojulian mengembalikan string format "month/day/year".'
    ],
    challenge: {
      instruction: 'Uji konversi jdtojulian($jd).',
      starterCode: `<?php
$jd = juliantojd(1, 1, 1500);
echo "Julian Date: " . jdtojulian($jd);
?>`,
      hint: 'Panggil jdtojulian($jd).'
    },
    quiz: {
      question: 'Kapan sistem Kalender Julian kuno secara resmi digantikan oleh Kalender Gregorian (Masehi modern)?',
      options: [
        'Tahun 1582 (Reformasi Paus Gregorius XIII)',
        'Tahun 2000',
        'Tahun 1945',
        'Tahun 100 SM'
      ],
      correctIndex: 0,
      explanation: 'Paus Gregorius XIII mereformasi kalender pada Oktober 1582 untuk memperbaiki pergeseran ekuinoks musim semi.'
    }
  },

  // 94. JDTOUNIX()
  {
    id: 'php-ref-jdtounix',
    title: 'PHP jdtounix()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 94,
    overview: 'Fungsi jdtounix(): mengonversi hitungan hari Julian Day menjadi timestamp UNIX (detik sejak 1970) untuk integrasi dengan fungsi date() PHP.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">JD TO UNIX</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 94 / 97</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⏱️ Julian Day ke Timestamp UNIX</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>jdtounix($julianday)</code> mengonversi angka Julian Day menjadi UNIX timestamp (detik) sehingga dapat diformat secara fleksibel menggunakan fungsi bawaan <code>date()</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$jdSekarang = gregoriantojd((int)date('m'), (int)date('d'), (int)date('Y'));

// Ubah Julian Day ke UNIX timestamp
$unixTime = jdtounix($jdSekarang);

echo "<h3>Hasil Konversi jdtounix():</h3>";
echo "<p>Julian Day: <strong>$jdSekarang</strong></p>";
echo "<p>UNIX Timestamp: <strong>$unixTime</strong></p>";
echo "<p>Format Tanggal Standar PHP: <strong>" . date("l, d F Y", $unixTime) . "</strong></p>";
?>`,
    codeExplanation: [
      'jdtounix menjembatani dunia perhitungan astronomi Julian Day ke dalam ekosistem waktu UNIX PHP.'
    ],
    challenge: {
      instruction: 'Uji konversi jdtounix(gregoriantojd(1, 1, 2026)).',
      starterCode: `<?php
$jd = gregoriantojd(1, 1, 2026);
$ts = jdtounix($jd);
echo "Timestamp: $ts | Tanggal: " . date("Y-m-d", $ts);
?>`,
      hint: 'Panggil jdtounix($jd).'
    },
    quiz: {
      question: 'Apa fungsi utama dari jdtounix()?',
      options: [
        'Mengonversi Julian Day Count menjadi UNIX timestamp standar (detik)',
        'Menghapus timezone',
        'Mengubah detik menjadi mikrodetik',
        'Membuat database MySQL'
      ],
      correctIndex: 0,
      explanation: 'jdtounix mengubah angka Julian Day menjadi integer UNIX timestamp.'
    }
  },

  // 95. JEWISHTOJD()
  {
    id: 'php-ref-jewishtojd',
    title: 'PHP jewishtojd()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 95,
    overview: 'Fungsi jewishtojd(): mengonversi tanggal dari Kalender Yahudi (Jewish Calendar) menjadi hitungan hari Julian Day Count.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">JEWISH TO JD</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 95 / 97</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">✡️ Kalender Yahudi ke Julian Day</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>jewishtojd($month, $day, $year)</code> mengonversi tanggal dari penanggalan Yahudi ke hitungan universal Julian Day.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Konversi Bulan 1 (Tishri), Hari 1, Tahun 5786 (Tahun Baru Rosh Hashanah)
$jdRoshHashanah = jewishtojd(1, 1, 5786);

echo "<h3>Hasil Konversi jewishtojd():</h3>";
echo "<p>Rosh Hashanah 5786 = Julian Day: <strong>$jdRoshHashanah</strong></p>";
echo "<p>Kalender Masehi: <strong>" . jdtogregorian($jdRoshHashanah) . "</strong></p>";
?>`,
    codeExplanation: [
      'jewishtojd dan jdtogregorian memungkinkan penentuan tanggal masehi untuk hari raya tradisional secara presisi.'
    ],
    challenge: {
      instruction: 'Uji fungsi jewishtojd(1, 1, 5785).',
      starterCode: `<?php
$jd = jewishtojd(1, 1, 5785);
echo "Julian Day: $jd";
?>`,
      hint: 'Panggil jewishtojd(1, 1, 5785).'
    },
    quiz: {
      question: 'Fungsi apakah yang merupakan kebalikan dari jdtojewish()?',
      options: [
        'jewishtojd()',
        'gregoriantojd()',
        'juliantojd()',
        'unixtojd()'
      ],
      correctIndex: 0,
      explanation: 'jewishtojd mengonversi tanggal kalender Yahudi menjadi Julian Day Count.'
    }
  },

  // 96. JULIANTOJD()
  {
    id: 'php-ref-juliantojd',
    title: 'PHP juliantojd()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 96,
    overview: 'Fungsi juliantojd(): mengonversi tanggal dari Kalender Julian kuno menjadi hitungan hari Julian Day Count.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">JULIAN TO JD</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 96 / 97</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏛️ Kalender Julian Kuno ke Julian Day</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>juliantojd($month, $day, $year)</code> mengonversi tanggal dari sistem Kalender Julian (4713 SM s/d 9999 M) ke Julian Day Count.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Konversi Tanggal 1 Januari 1492 (Tahun Columbus menemukan Benua Amerika)
$jdColumbus = juliantojd(1, 1, 1492);

echo "<h3>Hasil Konversi juliantojd():</h3>";
echo "<p>1 Januari 1492 (Julian Kuno) = Julian Day: <strong>$jdColumbus</strong></p>";
?>`,
    codeExplanation: [
      'juliantojd mengonversi penanggalan kuno sebelum tahun 1582.'
    ],
    challenge: {
      instruction: 'Uji fungsi juliantojd(1, 1, 1500).',
      starterCode: `<?php
$jd = juliantojd(1, 1, 1500);
echo "Julian Day tahun 1500: $jd";
?>`,
      hint: 'Panggil juliantojd(1, 1, 1500).'
    },
    quiz: {
      question: 'Apa fungsi dari juliantojd()?',
      options: [
        'Mengonversi tanggal dari sistem Kalender Julian kuno menjadi Julian Day Count',
        'Mengonversi mata uang Euro',
        'Menghitung kecepatan server',
        'Membuat backup'
      ],
      correctIndex: 0,
      explanation: 'juliantojd mengubah tanggal kalender Julian kuno menjadi hitungan hari Julian.'
    }
  },

  // 97. UNIXTOJD()
  {
    id: 'php-ref-unixtojd',
    title: 'PHP unixtojd()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 97,
    overview: 'Fungsi unixtojd(): mengonversi timestamp UNIX (detik atau time()) menjadi hitungan hari Julian Day Count.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">UNIX TO JD</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 97 / 97</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⏱️ Timestamp UNIX ke Julian Day</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>unixtojd($timestamp)</code> mengubah UNIX timestamp (seperti hasil fungsi <code>time()</code>) menjadi angka Julian Day integer (atau menggunakan waktu saat ini jika parameter dikosongkan).
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Ambil Julian Day detik ini juga
$jdSekarang = unixtojd(); // Parameter default = time()

echo "<h3>Hasil Konversi unixtojd():</h3>";
echo "<p>Waktu Server UNIX (time()): <strong>" . time() . " Detik</strong></p>";
echo "<p>Hitungan Julian Day Hari Ini: <strong style='color: #4f46e5; font-size: 16px;'>$jdSekarang</strong></p>";
echo "<p>Hari: <strong>" . jddayofweek($jdSekarang, CAL_DOW_LONG) . "</strong></p>";
?>`,
    codeExplanation: [
      'unixtojd() tanpa parameter otomatis menggunakan waktu saat ini time().',
      'Fungsi paling praktis untuk memulai kalkulasi astronomi kalender di PHP.'
    ],
    challenge: {
      instruction: 'Cetak Julian Day hari ini menggunakan unixtojd().',
      starterCode: `<?php
echo "Julian Day sekarang: " . unixtojd();
?>`,
      hint: 'Panggil unixtojd().'
    },
    quiz: {
      question: 'Fungsi apakah yang merupakan kebalikan langsung dari jdtounix()?',
      options: [
        'unixtojd()',
        'gregoriantojd()',
        'cal_to_jd()',
        'time()'
      ],
      correctIndex: 0,
      explanation: 'unixtojd() mengonversi UNIX timestamp menjadi Julian Day Count.'
    }
  }
];

module.exports = phpPart15RefCalendar;
