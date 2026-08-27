// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (DATE & TIMEZONE BAGIAN 2)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart17RefDateTimezone = [
  // 119. DATE_TIME_SET()
  {
    id: 'php-ref-date-time-set',
    title: 'PHP date_time_set()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 119,
    overview: 'Fungsi date_time_set(): menyetel komponen Jam (hour), Menit (minute), Detik (second), dan Mikrodetik (microsecond) pada objek DateTime.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DATE & TIMEZONE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 119 / 146</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🕒 Menyetel Waktu Jam & Menit (date_time_set)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>date_time_set($object, $hour, $minute, $second, $microsecond)</code> mengubah komponen waktu pada objek DateTime tanpa mengubah komponen tanggal (Tahun, Bulan, Hari) yang sudah ada.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$jadwal = date_create("2026-08-27 08:00:00");

// Ubah jam menjadi 19:30:00 (Waktu Webinar Malam)
date_time_set($jadwal, 19, 30, 0);

echo "<h3>Hasil Penggunaan date_time_set():</h3>";
echo "<p>Jadwal Baru: <strong>" . date_format($jadwal, "d F Y, H:i:s") . " WIB</strong></p>";
?>`,
    codeExplanation: [
      'date_time_set mengubah jam menjadi 19:30:00 dan membiarkan tanggal 27 Agustus 2026 tetap utuh.'
    ],
    challenge: {
      instruction: 'Setel waktu objek $d menjadi 23:59:59 dengan date_time_set($d, 23, 59, 59).',
      starterCode: `<?php
$d = date_create("2026-12-31");
date_time_set($d, 23, 59, 59);
echo "Tengah malam: " . date_format($d, "Y-m-d H:i:s");
?>`,
      hint: 'Panggil date_time_set($d, 23, 59, 59).'
    },
    quiz: {
      question: 'Parameter apa saja yang diterima oleh fungsi date_time_set()?',
      options: [
        '$object, $hour, $minute, $second (opsional $microsecond)',
        '$object, $year, $month, $day',
        '$object, $timezone',
        'Hanya $object'
      ],
      correctIndex: 0,
      explanation: 'date_time_set menerima komponen waktu: jam ($hour), menit ($minute), detik ($second), dan mikrodetik.'
    }
  },

  // 120. DATE_TIMESTAMP_GET()
  {
    id: 'php-ref-date-timestamp-get',
    title: 'PHP date_timestamp_get()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 120,
    overview: 'Fungsi date_timestamp_get(): mengambil nilai UNIX timestamp (jumlah detik sejak 1 Januari 1970 UTC) dari objek DateTime.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TIMESTAMP GET</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 120 / 146</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⏱️ Mengambil UNIX Timestamp dari Objek</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>date_timestamp_get($object)</code> mengekstrak bilangan bulat detik UNIX (Epoch) dari objek DateTime. Ekuivalen dengan pemanggilan method OOP <code>$datetime->getTimestamp()</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$tgl = date_create("2026-08-27 12:00:00");
$ts = date_timestamp_get($tgl);

echo "<h3>Hasil Penggunaan date_timestamp_get():</h3>";
echo "<p>Waktu: <strong>27 Agustus 2026 12:00:00</strong></p>";
echo "<p>UNIX Timestamp: <strong style='color: #4f46e5;'>$ts Detik</strong></p>";
?>`,
    codeExplanation: [
      'UNIX timestamp integer adalah format universal terbaik untuk perbandingan waktu di database.'
    ],
    challenge: {
      instruction: 'Ambil timestamp dari waktu saat ini dengan date_timestamp_get(date_create()).',
      starterCode: `<?php
$ts = date_timestamp_get(date_create());
echo "Timestamp sekarang: $ts";
?>`,
      hint: 'Panggil date_timestamp_get(date_create()).'
    },
    quiz: {
      question: 'Apa tipe data nilai kembalian dari date_timestamp_get()?',
      options: [
        'Integer (bilangan bulat detik sejak 1 Jan 1970)',
        'String tanggal',
        'Float',
        'Objek'
      ],
      correctIndex: 0,
      explanation: 'date_timestamp_get mengembalikan integer detik UNIX.'
    }
  },

  // 121. DATE_TIMESTAMP_SET()
  {
    id: 'php-ref-date-timestamp-set',
    title: 'PHP date_timestamp_set()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 121,
    overview: 'Fungsi date_timestamp_set(): menyetel tanggal dan waktu objek DateTime secara langsung berdasarkan nilai integer UNIX timestamp.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TIMESTAMP SET</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 121 / 146</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⏱️ Menyetel Objek DateTime dari Timestamp</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>date_timestamp_set($object, $timestamp)</code> mengupdate waktu objek DateTime menjadi waktu yang diwakili oleh angka detik <code>$timestamp</code>. Ekuivalen dengan <code>$datetime->setTimestamp($ts)</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$d = date_create();

// Setel waktu ke tanggal 1 Januari 2026 00:00:00 UTC (Timestamp: 1767225600)
date_timestamp_set($d, 1767225600);

echo "<h3>Hasil Penggunaan date_timestamp_set():</h3>";
echo "<p>Waktu yang Disetel: <strong>" . date_format($d, "d F Y H:i:s") . "</strong></p>";
?>`,
    codeExplanation: [
      'date_timestamp_set mengubah seluruh komponen tanggal dan waktu objek secara instan.'
    ],
    challenge: {
      instruction: 'Setel waktu objek ke timestamp 0 (1 Januari 1970) dengan date_timestamp_set($d, 0).',
      starterCode: `<?php
$d = date_create();
date_timestamp_set($d, 0);
echo "Awal Masa UNIX: " . date_format($d, "Y-m-d H:i:s");
?>`,
      hint: 'Panggil date_timestamp_set($d, 0).'
    },
    quiz: {
      question: 'Metode OOP apakah pada kelas DateTime yang setara dengan fungsi date_timestamp_set($d, $ts)?',
      options: [
        '$d->setTimestamp($ts)',
        '$d->setUnixTime($ts)',
        '$d->updateTimestamp($ts)',
        '$d->modify($ts)'
      ],
      correctIndex: 0,
      explanation: '$d->setTimestamp($ts) adalah metode OOP padanan dari date_timestamp_set().'
    }
  },

  // 122. DATE_TIMEZONE_GET()
  {
    id: 'php-ref-date-timezone-get',
    title: 'PHP date_timezone_get()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 122,
    overview: 'Fungsi date_timezone_get(): mengambil objek DateTimeZone yang terasosiasi dengan objek DateTime tertentu.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DATE TIMEZONE GET</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 122 / 146</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌍 Mengambil Objek DateTimeZone</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>date_timezone_get($object)</code> mengembalikan instance objek <code>DateTimeZone</code> yang melekat pada objek DateTime tersebut.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$d = date_create("now", timezone_open("Asia/Jakarta"));
$tzObj = date_timezone_get($d);

echo "<h3>Hasil Penggunaan date_timezone_get():</h3>";
echo "<p>Nama Zona Waktu: <strong style='color: #059669;'>" . timezone_name_get($tzObj) . "</strong></p>";
?>`,
    codeExplanation: [
      'date_timezone_get mengembalikan objek DateTimeZone yang dapat diinspeksi namanya dengan timezone_name_get.'
    ],
    challenge: {
      instruction: 'Ambil timezone objek dan cetak namanya.',
      starterCode: `<?php
$d = date_create("now", timezone_open("UTC"));
$tz = date_timezone_get($d);
echo "Timezone: " . timezone_name_get($tz);
?>`,
      hint: 'Panggil timezone_name_get(date_timezone_get($d)).'
    },
    quiz: {
      question: 'Tipe data objek apakah yang dikembalikan oleh date_timezone_get()?',
      options: [
        'Instance objek dari kelas DateTimeZone',
        'String nama kota',
        'Integer offset',
        'Array'
      ],
      correctIndex: 0,
      explanation: 'date_timezone_get mengembalikan instance objek DateTimeZone.'
    }
  },

  // 123. DATE_TIMEZONE_SET()
  {
    id: 'php-ref-date-timezone-set',
    title: 'PHP date_timezone_set()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 123,
    overview: 'Kuasai date_timezone_set(): mengonversi waktu objek DateTime ke zona waktu baru (Timezone Conversion) dengan penyesuaian jam otomatis.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TIMEZONE CONVERSION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 123 / 146</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">✈️ Konversi Jam Antar-Zona Waktu Dunia</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>date_timezone_set($object, $timezoneObject)</code> mengalihkan objek DateTime ke zona waktu lain dan <strong>secara otomatis menghitung penyesuaian selisih jamnya</strong>. Sangat ideal untuk jadwal penerbangan dan meeting global.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Waktu Acara di Jakarta (WIB - UTC+7) pukul 15:00
$jadwalWebinar = date_create("2026-08-27 15:00:00", timezone_open("Asia/Jakarta"));

echo "<h3>Konversi Waktu Acara Global:</h3>";
echo "<p>Jakarta (WIB): <strong>" . date_format($jadwalWebinar, "H:i") . " WIB</strong></p>";

// Konversi ke Waktu Tokyo Jepang (JST - UTC+9)
date_timezone_set($jadwalWebinar, timezone_open("Asia/Tokyo"));
echo "<p>Tokyo (JST): <strong style='color: #059669;'>" . date_format($jadwalWebinar, "H:i") . " JST (Maju 2 Jam)</strong></p>";

// Konversi ke Waktu London (BST / UTC+1)
date_timezone_set($jadwalWebinar, timezone_open("Europe/London"));
echo "<p>London (BST): <strong style='color: #4f46e5;'>" . date_format($jadwalWebinar, "H:i") . " Waktu Inggris</strong></p>";
?>`,
    codeExplanation: [
      'date_timezone_set mengonversi jam 15:00 WIB menjadi jam 17:00 di Tokyo dan jam 09:00 di London secara otomatis dan akurat.'
    ],
    challenge: {
      instruction: 'Konversi waktu jam 12:00 Jakarta ke waktu UTC dengan date_timezone_set.',
      starterCode: `<?php
$d = date_create("2026-01-01 12:00:00", timezone_open("Asia/Jakarta"));
date_timezone_set($d, timezone_open("UTC"));
echo "Waktu UTC: " . date_format($d, "H:i");
?>`,
      hint: 'Panggil date_timezone_set($d, timezone_open("UTC")).'
    },
    quiz: {
      question: 'Apa yang terjadi pada komponen jam ketika date_timezone_set() dipanggil untuk beralih zona waktu?',
      options: [
        'Jam otomatis disesuaikan (maju/mundur) secara akurat sesuai selisih zona waktu target',
        'Jam tidak berubah sama sekali',
        'Jam di-reset ke 00:00',
        'Menghasilkan error'
      ],
      correctIndex: 0,
      explanation: 'PHP otomatis mengalkulasi pergeseran offset waktu sehingga jam yang ditampilkan mencerminkan waktu lokal di zona waktu baru tersebut.'
    }
  },

  // 124. DATE()
  {
    id: 'php-ref-date-function',
    title: 'PHP date()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 124,
    overview: 'Kuasai fungsi date(): fungsi paling populer di PHP untuk memformat tanggal dan waktu lokal saat ini atau berdasarkan timestamp tertentu.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DATE FUNCTION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 124 / 146</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">👑 Fungsi Legendaris date()</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>date($format, $timestamp)</code> adalah fungsi built-in PHP yang paling sering dipanggil di dunia untuk menampilkan tahun hak cipta (<code>&copy; date("Y")</code>), tanggal postingan artikel, dan log transaksi.
          </p>
        </div>
      </div>
    `,
    code: `<?php
date_default_timezone_set("Asia/Jakarta");

echo "<h3>Showcase Format Fungsi date():</h3>";
echo "<ul>";
echo "<li>Tanggal Hari Ini: <strong>" . date("d-m-Y") . "</strong></li>";
echo "<li>Nama Hari & Bulan: <strong>" . date("l, d F Y") . "</strong></li>";
echo "<li>Jam 24-Format: <strong>" . date("H:i:s") . " WIB</strong></li>";
echo "<li>Jam 12-Format (AM/PM): <strong>" . date("h:i:s A") . "</strong></li>";
echo "<li>Tahun Copyright Footer: <strong>&copy; " . date("Y") . " DevGrow Academy</strong></li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'date("Y") mengambil 4 digit tahun saat ini (2026).',
      'Jika parameter kedua $timestamp tidak disertakan, date() otomatis menggunakan waktu server detik ini.'
    ],
    challenge: {
      instruction: 'Tampilkan tanggal dengan pola "Y/m/d H:i" menggunakan date("Y/m/d H:i").',
      starterCode: `<?php
echo "Waktu: " . date("Y/m/d H:i");
?>`,
      hint: 'Panggil date("Y/m/d H:i").'
    },
    quiz: {
      question: 'Karakter format apakah pada date() yang menampilkan format jam 24-jam dengan angka 2 digit (00 sampai 23)?',
      options: [
        'H (huruf H kapital)',
        'h (h kecil - 12 jam)',
        'G',
        'g'
      ],
      correctIndex: 0,
      explanation: 'Token "H" menghasilkan format 24 jam dengan leading zero (00-23).'
    }
  },

  // 125. GETDATE()
  {
    id: 'php-ref-getdate',
    title: 'PHP getdate()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 125,
    overview: 'Fungsi getdate(): mengembalikan array asosiatif berisi informasi lengkap waktu tanggal (seconds, minutes, hours, mday, wday, mon, year, yday, weekday, month, 0).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">GETDATE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 125 / 146</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📦 Array Informasi Waktu Lengkap (getdate)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>getdate($timestamp)</code> menguraikan waktu menjadi array asosiatif dengan kunci-kunci intuitif seperti <code>$info['year']</code>, <code>$info['month']</code>, dan <code>$info['weekday']</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$waktu = getdate();

echo "<h3>Struktur Data Array getdate():</h3>";
echo "<ul>";
echo "<li>Hari: <strong>{$waktu['weekday']}</strong> (Hari ke-{$waktu['wday']} dalam pekan)</li>";
echo "<li>Tanggal: <strong>{$waktu['mday']} {$waktu['month']} {$waktu['year']}</strong></li>";
echo "<li>Jam: <strong>{$waktu['hours']}:{$waktu['minutes']}:{$waktu['seconds']}</strong></li>";
echo "<li>Hari ke-N dalam setahun: <strong>Hari ke-{$waktu['yday']}</strong></li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'getdate() adalah cara paling mudah mengambil pecahan waktu tanpa memanggil fungsi string format berulang kali.'
    ],
    challenge: {
      instruction: 'Cetak tahun saat ini dari $d = getdate(); echo $d[\'year\'];.',
      starterCode: `<?php
$d = getdate();
echo "Tahun: " . $d['year'];
?>`,
      hint: 'Akses $d[\'year\'].'
    },
    quiz: {
      question: 'Kunci array apakah pada getdate() yang menyimpan nama hari lengkap dalam bahasa Inggris (seperti "Thursday")?',
      options: [
        '$waktu["weekday"]',
        '$waktu["dayname"]',
        '$waktu["day"]',
        '$waktu["wday"]'
      ],
      correctIndex: 0,
      explanation: '$waktu["weekday"] menyimpan string nama hari lengkap, sedangkan $waktu["wday"] menyimpan nomor harinya (0-6).'
    }
  },

  // 126. GETTIMEOFDAY()
  {
    id: 'php-ref-gettimeofday',
    title: 'PHP gettimeofday()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 126,
    overview: 'Fungsi gettimeofday(): mengembalikan waktu saat ini hingga tingkat presisi mikrodetik (sec, usec) atau nilai float waktu epoch.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">GET TIME OF DAY</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 126 / 146</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔬 Presisi Waktu Mikrodetik (gettimeofday)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>gettimeofday($as_float)</code> membaca waktu sistem langsung dari kernel OS hingga satuan sepersejuta detik (mikrodetik).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$timeData = gettimeofday();
$timeFloat = gettimeofday(true);

echo "<h3>Hasil Pengukuran gettimeofday():</h3>";
echo "<p>Detik (sec): <strong>{$timeData['sec']}</strong></p>";
echo "<p>Mikrodetik (usec): <strong>{$timeData['usec']} µs</strong></p>";
echo "<p>Presisi Float: <strong>$timeFloat</strong></p>";
?>`,
    codeExplanation: [
      'gettimeofday(true) mengembalikan angka float gabungan detik dan mikrodetik.'
    ],
    challenge: {
      instruction: 'Ambil waktu presisi float dengan gettimeofday(true).',
      starterCode: `<?php
echo "Waktu float: " . gettimeofday(true);
?>`,
      hint: 'Panggil gettimeofday(true).'
    },
    quiz: {
      question: 'Kunci apakah yang menyimpan nilai fraksi mikrodetik pada array kembalian gettimeofday()?',
      options: [
        '"usec"',
        '"msec"',
        '"nano"',
        '"micro"'
      ],
      correctIndex: 0,
      explanation: '"usec" (microsecond) menyimpan komponen pecahan mikrodetik (0 sampai 999999).'
    }
  },

  // 127. GMDATE()
  {
    id: 'php-ref-gmdate',
    title: 'PHP gmdate()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 127,
    overview: 'Kuasai gmdate(): memformat tanggal/waktu berdasarkan Greenwich Mean Time (GMT / UTC) murni, sangat krusial untuk HTTP Header cache expire dan cookie date.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">GMDATE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 127 / 146</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌐 Format Waktu Standar Dunia GMT/UTC</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>gmdate($format, $timestamp)</code> bekerja persis seperti <code>date()</code>, namun <strong>selalu memformat waktu dalam standar GMT/UTC 0</strong> tanpa memedulikan zona waktu lokal server. Standar wajib untuk header HTTP <code>Expires</code> dan <code>Last-Modified</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
date_default_timezone_set("Asia/Jakarta");

$waktuLokal = date("D, d M Y H:i:s") . " WIB";
$waktuGmt = gmdate("D, d M Y H:i:s") . " GMT";

echo "<h3>Perbandingan date() vs gmdate():</h3>";
echo "<ul>";
echo "<li>Waktu Lokal (date): <strong>$waktuLokal</strong></li>";
echo "<li>Waktu Standar Web (gmdate): <strong style='color: #4f46e5;'>$waktuGmt</strong></li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'Protokol HTTP mewajibkan seluruh header tanggal browser ditulis dalam format RFC 7231 GMT (hasil gmdate).'
    ],
    challenge: {
      instruction: 'Format waktu GMT saat ini dengan gmdate("Y-m-d H:i:s").',
      starterCode: `<?php
echo "UTC Time: " . gmdate("Y-m-d H:i:s");
?>`,
      hint: 'Panggil gmdate("Y-m-d H:i:s").'
    },
    quiz: {
      question: 'Kapan gmdate() wajib digunakan alih-alih fungsi date() biasa?',
      options: [
        'Saat menyetel header protokol HTTP web (seperti Cache-Control, Expires, Last-Modified) yang mewajibkan standar waktu GMT/UTC 0',
        'Saat membuat form HTML',
        'Saat menghubungkan database lokal',
        'Tidak ada bedanya'
      ],
      correctIndex: 0,
      explanation: 'Spesifikasi HTTP RFC mewajibkan header tanggal disajikan dalam zona waktu GMT/UTC murni.'
    }
  },

  // 128. GMMKTIME()
  {
    id: 'php-ref-gmmktime',
    title: 'PHP gmmktime()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 128,
    overview: 'Fungsi gmmktime(): membuat integer UNIX timestamp dari komponen jam, menit, detik, bulan, hari, tahun berdasarkan zona waktu GMT/UTC.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">GMMKTIME</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 128 / 146</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⏱️ Membuat Timestamp Standar GMT (gmmktime)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>gmmktime($hour, $minute, $second, $month, $day, $year)</code> menghasilkan UNIX timestamp dengan mengasumsikan parameter yang dimasukkan adalah waktu GMT/UTC.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Buat timestamp untuk 1 Januari 2026 00:00:00 GMT
$tsGmt = gmmktime(0, 0, 0, 1, 1, 2026);

echo "<h3>Hasil Penggunaan gmmktime():</h3>";
echo "<p>Timestamp 1 Jan 2026 GMT: <strong>$tsGmt</strong></p>";
echo "<p>Format GMT: <strong>" . gmdate("d F Y H:i:s", $tsGmt) . " GMT</strong></p>";
?>`,
    codeExplanation: [
      'gmmktime menghitung detik secara murni pada meridian Greenwich UTC 0.'
    ],
    challenge: {
      instruction: 'Buat timestamp GMT untuk jam 12:00:00 tanggal 15 Mei 2026.',
      starterCode: `<?php
$ts = gmmktime(12, 0, 0, 5, 15, 2026);
echo "Timestamp: $ts";
?>`,
      hint: 'Panggil gmmktime(12, 0, 0, 5, 15, 2026).'
    },
    quiz: {
      question: 'Apa perbedaan antara mktime() dan gmmktime()?',
      options: [
        'mktime() menggunakan zona waktu lokal server yang aktif, sedangkan gmmktime() selalu menggunakan zona waktu GMT/UTC',
        'gmmktime() mengembalikan string',
        'mktime() sudah dihapus',
        'Keduanya identik'
      ],
      correctIndex: 0,
      explanation: 'mktime menginterpretasikan waktu sebagai waktu lokal, sedangkan gmmktime menginterpretasikannya sebagai GMT.'
    }
  },

  // 129. GMSTRFTIME()
  {
    id: 'php-ref-gmstrftime',
    title: 'PHP gmstrftime() [Deprecated in PHP 8.1]',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 129,
    overview: 'Status gmstrftime(): fungsi pemformatan waktu GMT berbasis locale C yang telah DIDEPRESIASI di PHP 8.1+ dan panduan migrasi ke gmdate() atau IntlDateFormatter.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-rose-600 text-white">DEPRECATED (PHP 8.1+)</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 129 / 146</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚠️ Status gmstrftime() & Panduan Migrasi</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>gmstrftime()</code> dan <code>strftime()</code> bergantung pada pustaka C OS yang tidak konsisten lintas platform dan resmi <strong>Didepresiasi sejak PHP 8.1</strong>. Seluruh kode modern wajib beralih ke <code>gmdate()</code> atau ekstensi <code>IntlDateFormatter</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Standar Modern Pengganti gmstrftime() di PHP 8+:
$waktuUtc = gmdate("l, d F Y H:i:s") . " UTC";

echo "<h3>Standar Modern Pengganti gmstrftime():</h3>";
echo "<p>Waktu Terformat: <strong style='color: #059669;'>$waktuUtc</strong></p>";
?>`,
    codeExplanation: [
      'gmdate() bebas dari peringatan deprecation warning dan 100% kompatibel di seluruh server Linux/Windows.'
    ],
    challenge: {
      instruction: 'Pahami migrasi dari gmstrftime() ke gmdate().',
      starterCode: `<?php
echo "Gunakan gmdate() untuk pemformatan waktu GMT yang aman di PHP 8+.";
?>`,
      hint: 'Klik RUN untuk mereview gmdate.'
    },
    quiz: {
      question: 'Mengapa fungsi gmstrftime() dan strftime() didepresiasi di PHP 8.1+?',
      options: [
        'Karena perilakunya bergantung pada C library sistem operasi yang tidak konsisten dan tidak thread-safe',
        'Karena terlalu cepat',
        'Karena tidak mendukung angka',
        'Hanya berganti nama'
      ],
      correctIndex: 0,
      explanation: 'strftime bergantung pada locale C OS yang tidak portabel antar OS dan menimbulkan masalah konkurensi (not thread-safe).'
    }
  },

  // 130. IDATE()
  {
    id: 'php-ref-idate',
    title: 'PHP idate()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 130,
    overview: 'Fungsi idate(): memformat tanggal lokal dan mengembalikan hasilnya sebagai bilangan bulat INTEGER murni (tanpa leading zero).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">IDATE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 130 / 146</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔢 Mengambil Bagian Tanggal sebagai Integer</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Berbeda dengan <code>date()</code> yang selalu mengembalikan string, <code>idate($format, $timestamp)</code> mengembalikan <strong>bilangan bulat (integer)</strong> untuk 1 karakter format token tunggal (<code>Y</code>=tahun, <code>m</code>=bulan, <code>d</code>=hari, <code>H</code>=jam).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$tahun = idate("Y"); // Mengembalikan integer 2026
$bulan = idate("m"); // Mengembalikan integer 8 (Bukan string "08")
$hari = idate("d");  // Mengembalikan integer 27

echo "<h3>Hasil Penggunaan idate() (Tipe Data Integer):</h3>";
echo "<p>Tahun: <strong>$tahun</strong> (Tipe: " . gettype($tahun) . ")</p>";
echo "<p>Bulan: <strong>$bulan</strong> (Tipe: " . gettype($bulan) . ")</p>";
echo "<p>Hari: <strong>$hari</strong> (Tipe: " . gettype($hari) . ")</p>";
?>`,
    codeExplanation: [
      'idate() langsung menghasilkan angka integer murni tanpa perlu casting (int) manual.'
    ],
    challenge: {
      instruction: 'Ambil jam saat ini sebagai integer dengan idate("H").',
      starterCode: `<?php
$jam = idate("H");
echo "Jam saat ini: $jam (Tipe: " . gettype($jam) . ")";
?>`,
      hint: 'Panggil idate("H").'
    },
    quiz: {
      question: 'Apa perbedaan utama antara date("Y") dan idate("Y")?',
      options: [
        'date("Y") mengembalikan string "2026", sedangkan idate("Y") mengembalikan integer 2026',
        'idate() menghasilkan error',
        'date() hanya untuk angka genap',
        'Keduanya bertipe data array'
      ],
      correctIndex: 0,
      explanation: 'idate() secara khusus mengembalikan representasi integer dari komponen tanggal.'
    }
  },

  // 131. LOCALTIME()
  {
    id: 'php-ref-localtime',
    title: 'PHP localtime()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 131,
    overview: 'Fungsi localtime(): mengonversi timestamp menjadi array struktur waktu lokal mirip dengan fungsi C standard tm structure.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">LOCALTIME</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 131 / 146</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🕒 Struktur Waktu C-Style (localtime)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>localtime($timestamp, $associative)</code> mengembalikan array struktur waktu internal C. Jika <code>$associative = true</code>, kunci array berupa <code>tm_sec</code>, <code>tm_min</code>, <code>tm_hour</code>, <code>tm_mday</code>, <code>tm_mon</code> (0-11), <code>tm_year</code> (tahun terhitung sejak 1900).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$waktuC = localtime(time(), true);

// Perhatikan: tm_year dihitung sejak tahun 1900, dan tm_mon dimulai dari 0
$tahunSebenarnya = $waktuC['tm_year'] + 1900;
$bulanSebenarnya = $waktuC['tm_mon'] + 1;

echo "<h3>Struktur Array localtime(time(), true):</h3>";
echo "<ul>";
echo "<li>Tahun: <strong>$tahunSebenarnya</strong> (tm_year = {$waktuC['tm_year']} + 1900)</li>";
echo "<li>Bulan: <strong>$bulanSebenarnya</strong> (tm_mon = {$waktuC['tm_mon']} + 1)</li>";
echo "<li>Hari: <strong>{$waktuC['tm_mday']}</strong></li>";
echo "<li>Jam: <strong>{$waktuC['tm_hour']}:{$waktuC['tm_min']}:{$waktuC['tm_sec']}</strong></li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'Struktur standar bahasa C di mana tm_year bernilai 126 untuk tahun 2026 (2026 - 1900).'
    ],
    challenge: {
      instruction: 'Uji localtime(time(), true).',
      starterCode: `<?php
$lt = localtime(time(), true);
echo "tm_hour: " . $lt['tm_hour'];
?>`,
      hint: 'Panggil localtime(time(), true).'
    },
    quiz: {
      question: 'Berapakah nilai tm_year pada fungsi localtime() untuk tahun 2026?',
      options: [
        '126 (karena dihitung dari tahun 1900: 2026 - 1900 = 126)',
        '2026',
        '26',
        '0'
      ],
      correctIndex: 0,
      explanation: 'Sesuai standar struct tm bahasa C, tm_year mewakili jumlah tahun yang berlalu sejak 1900.'
    }
  },

  // 132. MICROTIME()
  {
    id: 'php-ref-microtime',
    title: 'PHP microtime()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 132,
    overview: 'Kuasai microtime(): mengukur waktu eksekusi kode (Performance Benchmarking & Profiling) hingga tingkat presisi pecahan mikrodetik.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">BENCHMARKING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 132 / 146</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚡ Benchmark Performa Kode (microtime)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>microtime($as_float)</code> mengembalikan waktu saat ini dalam detik dan mikrodetik. Gunakan <code>microtime(true)</code> untuk mengukur seberapa cepat fungsi algoritma atau query database Anda dieksekusi.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// 1. Catat Waktu Awal
$waktuAwal = microtime(true);

// 2. Eksekusi Pekerjaan Berat (Looping 100.000 kali)
$total = 0;
for ($i = 0; $i < 100000; $i++) {
    $total += $i;
}

// 3. Catat Waktu Selesai
$waktuSelesai = microtime(true);
$durasiEksekusi = round(($waktuSelesai - $waktuAwal) * 1000, 3); // Dalam Milidetik (ms)

echo "<h3>Hasil Pengukuran Waktu Eksekusi (Profiling):</h3>";
echo "<p>Total Hasil Komputasi: <strong>$total</strong></p>";
echo "<p>Kecepatan Eksekusi Script: <strong style='color: #059669; font-size: 16px;'>$durasiEksekusi ms (Milidetik)</strong></p>";
?>`,
    codeExplanation: [
      'microtime(true) mengembalikan float detik (seperti 1767225600.1234).',
      'Pengurangan $selesai - $awal dikali 1000 menghasilkan waktu eksekusi dalam satuan milidetik (ms).'
    ],
    challenge: {
      instruction: 'Ukur kecepatan eksekusi loop 10.000 angka dengan microtime(true).',
      starterCode: `<?php
$start = microtime(true);
for($i=0; $i<10000; $i++){}
$durasi = microtime(true) - $start;
echo "Durasi: " . round($durasi * 1000, 4) . " ms";
?>`,
      hint: 'Gunakan microtime(true) di awal dan akhir proses.'
    },
    quiz: {
      question: 'Tipe data apakah yang dikembalikan oleh microtime(true) saat parameter boolean disetel bernilai TRUE?',
      options: [
        'Float presisi tinggi (detik + mikrodetik)',
        'String dipisahkan spasi',
        'Integer detik',
        'Array'
      ],
      correctIndex: 0,
      explanation: 'microtime(true) mengembalikan nilai float bilangan desimal presisi tinggi yang siap dihitung.'
    }
  },

  // 133. MKTIME()
  {
    id: 'php-ref-mktime',
    title: 'PHP mktime()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 133,
    overview: 'Kuasai fungsi mktime(): membuat integer UNIX timestamp dari komponen jam, menit, detik, bulan, hari, tahun berdasarkan waktu lokal server.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">MKTIME</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 133 / 146</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⏰ Membuat Timestamp Lokal (mktime)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>mktime($hour, $minute, $second, $month, $day, $year)</code> membuat nilai integer UNIX timestamp. Sangat cerdas karena secara otomatis menangani matematika tanggal yang melampaui batas (misal: hari ke-32 atau bulan ke-13).
          </p>
        </div>
      </div>
    `,
    code: `<?php
date_default_timezone_set("Asia/Jakarta");

// 1. Buat timestamp untuk HUT RI 17 Agustus 2026 Jam 10:00:00
$tsUpacara = mktime(10, 0, 0, 8, 17, 2026);

// 2. Aritmatika Tanggal Otomatis: Tanggal besok (Hari ini + 1)
$tsBesok = mktime(0, 0, 0, (int)date('m'), (int)date('d') + 1, (int)date('Y'));

echo "<h3>Hasil Penggunaan mktime():</h3>";
echo "<p>Jadwal Upacara HUT RI 2026: <strong>" . date("l, d F Y - H:i", $tsUpacara) . " WIB</strong></p>";
echo "<p>Tanggal Besok: <strong>" . date("d F Y", $tsBesok) . "</strong></p>";
?>`,
    codeExplanation: [
      'mktime menerima urutan: Jam, Menit, Detik, Bulan, Hari, Tahun.',
      'Jika memasukkan $day = 32 pada bulan Januari, mktime otomatis mengonversinya menjadi 1 Februari.'
    ],
    challenge: {
      instruction: 'Buat timestamp tahun baru 2027 dengan mktime(0, 0, 0, 1, 1, 2027).',
      starterCode: `<?php
$ts = mktime(0, 0, 0, 1, 1, 2027);
echo "Tahun Baru 2027: " . date("Y-m-d", $ts);
?>`,
      hint: 'Panggil mktime(0, 0, 0, 1, 1, 2027).'
    },
    quiz: {
      question: 'Urutan parameter yang benar pada fungsi mktime() adalah:',
      options: [
        'mktime($hour, $minute, $second, $month, $day, $year)',
        'mktime($day, $month, $year, $hour, $minute, $second)',
        'mktime($year, $month, $day)',
        'mktime($timestamp)'
      ],
      correctIndex: 0,
      explanation: 'mktime menerima komponen waktu terlebih dahulu ($hour, $minute, $second), diikuti tanggal ($month, $day, $year).'
    }
  },

  // 134. STRFTIME()
  {
    id: 'php-ref-strftime',
    title: 'PHP strftime() [Deprecated in PHP 8.1]',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 134,
    overview: 'Status strftime(): fungsi pemformatan waktu berbasis locale bahasa yang telah DIDEPRESIASI di PHP 8.1+ dan panduan migrasi ke kelas modern IntlDateFormatter.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-rose-600 text-white">DEPRECATED (PHP 8.1+)</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 134 / 146</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚠️ Status strftime() & Standar Intl Modern</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>strftime()</code> resmi didepresiasi di PHP 8.1. Untuk memformat nama hari dan bulan dalam Bahasa Indonesia (seperti "Senin", "Agustus"), standar modern menggunakan kelas <strong>IntlDateFormatter</strong> dari ekstensi <code>intl</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Standar Industri Modern: IntlDateFormatter untuk Bahasa Indonesia (id_ID)
if (class_exists('IntlDateFormatter')) {
    $formatter = new IntlDateFormatter(
        'id_ID',
        IntlDateFormatter::FULL,
        IntlDateFormatter::NONE,
        'Asia/Jakarta',
        IntlDateFormatter::GREGORIAN,
        'EEEE, d MMMM yyyy'
    );
    $tanggalIndo = $formatter->format(time());
} else {
    $tanggalIndo = date("d F Y"); // Fallback jika ekstensi intl nonaktif
}

echo "<h3>Format Tanggal Bahasa Indonesia Resmi (IntlDateFormatter):</h3>";
echo "<p>Hari & Tanggal: <strong style='color: #059669; font-size: 16px;'>$tanggalIndo</strong></p>";
?>`,
    codeExplanation: [
      'IntlDateFormatter adalah standar resmi Unicode CLDR internasional untuk memformat tanggal ke ratusan bahasa di dunia.'
    ],
    challenge: {
      instruction: 'Pelajari penggunaan IntlDateFormatter untuk bahasa Indonesia ("id_ID").',
      starterCode: `<?php
echo "IntlDateFormatter adalah pengganti resmi strftime() di PHP 8.x modern.";
?>`,
      hint: 'Klik RUN untuk mereview IntlDateFormatter.'
    },
    quiz: {
      question: 'Kelas bawaan PHP modern apakah yang resmi menggantikan fungsi strftime() untuk format tanggal multibahasa?',
      options: [
        'IntlDateFormatter',
        'DateLocaleFormatter',
        'StringDateFormatter',
        'LanguageDate'
      ],
      correctIndex: 0,
      explanation: 'IntlDateFormatter adalah kelas standar internasional berbasis library ICU untuk lokalisasi tanggal.'
    }
  },

  // 135. STRPTIME()
  {
    id: 'php-ref-strptime',
    title: 'PHP strptime() [Deprecated in PHP 8.1]',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 135,
    overview: 'Status strptime(): fungsi parsing tanggal POSIX C yang telah DIDEPRESIASI di PHP 8.1+ dan digantikan oleh date_parse_from_format() atau DateTime::createFromFormat().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-rose-600 text-white">DEPRECATED (PHP 8.1+)</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 135 / 146</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚠️ Status strptime() & Pengganti Modern</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>strptime()</code> tidak tersedia di Windows dan didepresiasi di PHP 8.1. Standar pengganti resmi lintas platform adalah <code>date_parse_from_format()</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Standar Modern Pengganti strptime(): date_parse_from_format
$parsed = date_parse_from_format("d/m/Y", "27/08/2026");

echo "<h3>Standar Penguraian Tanggal Lintas Platform:</h3>";
echo "<p>Tahun: <strong>{$parsed['year']}</strong>, Bulan: <strong>{$parsed['month']}</strong>, Hari: <strong>{$parsed['day']}</strong></p>";
?>`,
    codeExplanation: [
      'date_parse_from_format() berjalan mulus di Windows, Linux, dan macOS tanpa ketergantungan POSIX C.'
    ],
    challenge: {
      instruction: 'Urai tanggal dengan date_parse_from_format("Y-m-d", "2026-01-01").',
      starterCode: `<?php
$res = date_parse_from_format("Y-m-d", "2026-01-01");
echo "Tahun: " . $res['year'];
?>`,
      hint: 'Panggil date_parse_from_format("Y-m-d", "2026-01-01").'
    },
    quiz: {
      question: 'Fungsi modern lintas platform apakah yang menggantikan strptime() di PHP?',
      options: [
        'date_parse_from_format() dan DateTime::createFromFormat()',
        'str_split()',
        'explode()',
        'parse_str()'
      ],
      correctIndex: 0,
      explanation: 'date_parse_from_format() dan DateTime::createFromFormat() adalah pengganti resmi standar.'
    }
  },

  // 136. STRTOTIME()
  {
    id: 'php-ref-strtotime',
    title: 'PHP strtotime()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 136,
    overview: 'Kuasai fungsi strtotime(): salah satu fungsi terhebat di PHP untuk mem-parsing string teks bahasa manusia (Natural Language String) menjadi integer UNIX timestamp secara ajaib.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">STRTOTIME</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 136 / 146</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🪄 Keajaiban Fungsi strtotime()</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>strtotime($timeString, $baseTimestamp)</code> memahami hampir seluruh frasa waktu bahasa Inggris seperti <code>"now"</code>, <code>"+1 week"</code>, <code>"next Monday"</code>, <code>"first day of next month"</code>, dan <code>"-3 days"</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
date_default_timezone_set("Asia/Jakarta");

echo "<h3>Contoh Kekuatan Parsing strtotime():</h3>";
echo "<ul>";
echo "<li>Sekarang (now): <strong>" . date("Y-m-d H:i:s", strtotime("now")) . "</strong></li>";
echo "<li>Besok (+1 day): <strong>" . date("Y-m-d", strtotime("+1 day")) . "</strong></li>";
echo "<li>Minggu Depan (+1 week): <strong>" . date("Y-m-d", strtotime("+1 week")) . "</strong></li>";
echo "<li>Hari Senin Depan (next Monday): <strong>" . date("l, d F Y", strtotime("next Monday")) . "</strong></li>";
echo "<li>Awal Bulan Depan (first day of next month): <strong>" . date("d F Y", strtotime("first day of next month")) . "</strong></li>";
echo "<li>Akhir Bulan Ini (last day of this month): <strong>" . date("d F Y", strtotime("last day of this month")) . "</strong></li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'strtotime() mengembalikan integer UNIX timestamp yang langsung dapat dimasukkan ke date().',
      'Mengembalikan boolean false jika teks tidak dapat dipahami.'
    ],
    challenge: {
      instruction: 'Hitung tanggal 3 bulan ke depan dengan date("Y-m-d", strtotime("+3 months")).',
      starterCode: `<?php
echo "3 Bulan lagi: " . date("Y-m-d", strtotime("+3 months"));
?>`,
      hint: 'Panggil date("Y-m-d", strtotime("+3 months")).'
    },
    quiz: {
      question: 'Apa hasil yang dikembalikan oleh strtotime("teks-sembarangan-rusak") jika string tidak dapat di-parse?',
      options: [
        'Boolean false',
        'Integer 0',
        'Null',
        'Fatal Error'
      ],
      correctIndex: 0,
      explanation: 'strtotime() mengembalikan boolean false saat gagal menguraikan teks waktu.'
    }
  },

  // 137. TIME()
  {
    id: 'php-ref-time',
    title: 'PHP time()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 137,
    overview: 'Kuasai fungsi time(): mengembalikan integer UNIX timestamp saat ini (jumlah total detik sejak 1 Januari 1970 00:00:00 UTC).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TIME FUNCTION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 137 / 146</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⏱️ Detak Jantung Waktu UNIX (time)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>time()</code> mengembalikan angka integer detik saat ini. Sangat sering dipakai untuk menghitung waktu kedaluwarsa sesi (Cookie Expiry: <code>time() + 3600</code>) dan token reset password.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$sekarang = time();
$satuJamKedepan = time() + (60 * 60); // + 3600 Detik
$tujuhHariKedepan = time() + (7 * 24 * 60 * 60); // + 604800 Detik

echo "<h3>Hasil Penggunaan time():</h3>";
echo "<p>Timestamp Sekarang: <strong style='color: #4f46e5;'>$sekarang Detik</strong></p>";
echo "<p>Expired Cookie 1 Jam: <strong>" . date("H:i:s", $satuJamKedepan) . "</strong></p>";
echo "<p>Expired Token 7 Hari: <strong>" . date("d F Y", $tujuhHariKedepan) . "</strong></p>";
?>`,
    codeExplanation: [
      'time() tidak memerlukan argumen apapun dan selalu mengembalikan waktu riil server.'
    ],
    challenge: {
      instruction: 'Hitung waktu 24 jam ke depan dengan time() + (24 * 3600).',
      starterCode: `<?php
$besok = time() + (24 * 3600);
echo "Besok: " . date("Y-m-d H:i", $besok);
?>`,
      hint: 'Gunakan time() + (24 * 3600).'
    },
    quiz: {
      question: 'Berapakah jumlah detik dalam 1 hari penuh (24 jam) yang sering ditambahkan ke time()?',
      options: [
        '86400 detik (24 * 60 * 60)',
        '3600 detik',
        '1440 detik',
        '60000 detik'
      ],
      correctIndex: 0,
      explanation: '24 jam x 60 menit x 60 detik = 86400 detik.'
    }
  },

  // 138. TIMEZONE_ABBREVIATIONS_LIST()
  {
    id: 'php-ref-timezone-abbreviations-list',
    title: 'PHP timezone_abbreviations_list()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 138,
    overview: 'Fungsi timezone_abbreviations_list(): mengembalikan array asosiatif daftar seluruh singkatan zona waktu dunia (seperti WIB, WITA, GMT, EST, PST, JST).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TIMEZONE ABBREVIATIONS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 138 / 146</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔤 Kamus Singkatan Zona Waktu Dunia</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>timezone_abbreviations_list()</code> mengembalikan peta seluruh singkatan timezone dunia beserta informasi offset detik dan status DST (Daylight Saving Time).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$abbrList = timezone_abbreviations_list();

echo "<h3>Informasi Singkatan Zona Waktu 'wib':</h3>";
if (isset($abbrList['wib'])) {
    foreach ($abbrList['wib'] as $item) {
        $offsetJam = $item['offset'] / 3600;
        echo "<p>Timezone ID: <strong>{$item['timezone_id']}</strong> (Offset: UTC +$offsetJam Jam)</p>";
    }
}
?>`,
    codeExplanation: [
      'Menampilkan bahwa singkatan "wib" terhubung ke timezone_id "Asia/Jakarta" dengan offset +7 jam.'
    ],
    challenge: {
      instruction: 'Periksa keberadaan singkatan "utc" di timezone_abbreviations_list().',
      starterCode: `<?php
$list = timezone_abbreviations_list();
echo "Total entri UTC: " . count($list['utc']);
?>`,
      hint: 'Klik RUN untuk mencoba timezone_abbreviations_list.'
    },
    quiz: {
      question: 'Apa isi dari nilai kembalian timezone_abbreviations_list()?',
      options: [
        'Array multidimensi yang memetakan setiap singkatan timezone (lowercase) ke detail offset dan timezone_id',
        'Hanya string tunggal',
        'Integer',
        'Boolean'
      ],
      correctIndex: 0,
      explanation: 'Fungsi mengembalikan array kamus lengkap seluruh singkatan timezone dunia.'
    }
  },

  // 139. TIMEZONE_IDENTIFIERS_LIST()
  {
    id: 'php-ref-timezone-identifiers-list',
    title: 'PHP timezone_identifiers_list()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 139,
    overview: 'Kuasai timezone_identifiers_list(): mengambil daftar seluruh nama identifier resmi zona waktu IANA (seperti "Asia/Jakarta", "America/New_York", "Europe/London") untuk membuat dropdown pilihan zona waktu.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TIMEZONE LIST</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 139 / 146</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📋 Daftar Resmi Identifier Zona Waktu IANA</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>timezone_identifiers_list($timezoneGroup, $countryCode)</code> mengembalikan array seluruh nama timezone yang sah di dunia (400+ zona waktu). Sangat ideal untuk mengisi elemen <code>&lt;select&gt;</code> pada halaman profil akun pengguna.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Ambil hanya zona waktu untuk negara Indonesia (Kode Negara: 'ID')
$zonaIndonesia = timezone_identifiers_list(DateTimeZone::PER_COUNTRY, "ID");

echo "<h3>Zona Waktu Resmi Negara Indonesia (Kode ID):</h3>";
echo "<select style='padding: 8px; border-radius: 6px; border: 1px solid #cbd5e1;'>";
foreach ($zonaIndonesia as $tz) {
    echo "<option value='$tz'>$tz</option>";
}
echo "</select>";
?>`,
    codeExplanation: [
      'Menghasilkan 4 zona waktu resmi Indonesia: Asia/Jakarta (WIB), Asia/Pontianak (WIB), Asia/Makassar (WITA), Asia/Jayapura (WIT).'
    ],
    challenge: {
      instruction: 'Ambil daftar zona waktu di benua Asia dengan timezone_identifiers_list(DateTimeZone::ASIA).',
      starterCode: `<?php
$asia = timezone_identifiers_list(DateTimeZone::ASIA);
echo "Total timezone di Asia: " . count($asia);
?>`,
      hint: 'Panggil timezone_identifiers_list(DateTimeZone::ASIA).'
    },
    quiz: {
      question: 'Berapa banyak zona waktu resmi IANA yang terdaftar untuk negara Indonesia (ID)?',
      options: [
        '4 Zona (Asia/Jakarta, Asia/Pontianak, Asia/Makassar, Asia/Jayapura)',
        '1 Zona',
        '10 Zona',
        'Tidak ada'
      ],
      correctIndex: 0,
      explanation: 'Indonesia memiliki 4 identifier resmi standar IANA di database tz.'
    }
  },

  // 140. TIMEZONE_LOCATION_GET()
  {
    id: 'php-ref-timezone-location-get',
    title: 'PHP timezone_location_get()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 140,
    overview: 'Fungsi timezone_location_get(): mengambil informasi lokasi geografis (Kode Negara, Garis Lintang/Latitude, Garis Bujur/Longitude, dan Komentar) dari objek DateTimeZone.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TIMEZONE LOCATION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 140 / 146</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📍 Lokasi Geografis Zona Waktu</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>timezone_location_get($tzObject)</code> mengembalikan array lokasi geografis ibukota zona waktu (<code>country_code</code>, <code>latitude</code>, <code>longitude</code>, <code>comments</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$tz = timezone_open("Asia/Jakarta");
$lokasi = timezone_location_get($tz);

echo "<h3>Informasi Geografis Asia/Jakarta:</h3>";
echo "<ul>";
echo "<li>Kode Negara: <strong>{$lokasi['country_code']}</strong> (Indonesia)</li>";
echo "<li>Koordinat GPS: <strong>{$lokasi['latitude']}, {$lokasi['longitude']}</strong></li>";
echo "<li>Keterangan: <strong>{$lokasi['comments']}</strong></li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'timezone_location_get menyediakan koordinat sentral zona waktu untuk integrasi peta atau penentuan waktu sholat.'
    ],
    challenge: {
      instruction: 'Ambil kode negara untuk timezone "Asia/Tokyo" dengan timezone_location_get.',
      starterCode: `<?php
$tz = timezone_open("Asia/Tokyo");
$loc = timezone_location_get($tz);
echo "Country: " . $loc['country_code'];
?>`,
      hint: 'Panggil timezone_location_get(timezone_open("Asia/Tokyo")).'
    },
    quiz: {
      question: 'Informasi apa saja yang dikembalikan oleh timezone_location_get()?',
      options: [
        'country_code (kode negara 2 huruf), latitude, longitude, dan comments',
        'Hanya nama jalan',
        'Hanya jam server',
        'IP Address'
      ],
      correctIndex: 0,
      explanation: 'Fungsi mengembalikan array data geografis lengkap sentral zona waktu.'
    }
  },

  // 141. TIMEZONE_NAME_FROM_ABBR()
  {
    id: 'php-ref-timezone-name-from-abbr',
    title: 'PHP timezone_name_from_abbr()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 141,
    overview: 'Fungsi timezone_name_from_abbr(): mengembalikan nama lengkap zona waktu IANA (seperti "Asia/Jakarta") berdasarkan singkatan (seperti "WIB") dan offset detiknya.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">NAME FROM ABBR</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 141 / 146</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Mencari Nama Timezone dari Singkatan</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>timezone_name_from_abbr($abbr, $utcOffset, $isDst)</code> menerjemahkan singkatan seperti <code>"WIB"</code> atau <code>"EST"</code> menjadi identifier IANA resmi.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Cari nama timezone untuk singkatan 'WIB' dengan offset +7 jam (25200 detik)
$namaTz = timezone_name_from_abbr("WIB", 25200);

echo "<h3>Hasil Pencarian timezone_name_from_abbr():</h3>";
echo "<p>Singkatan 'WIB' (+7 Jam) &rarr; Identifier Resmi: <strong style='color: #059669;'>$namaTz</strong></p>";
?>`,
    codeExplanation: [
      'timezone_name_from_abbr("WIB", 25200) menghasilkan "Asia/Jakarta".'
    ],
    challenge: {
      instruction: 'Cari nama timezone untuk "UTC" dengan offset 0.',
      starterCode: `<?php
echo "Nama: " . timezone_name_from_abbr("UTC", 0);
?>`,
      hint: 'Panggil timezone_name_from_abbr("UTC", 0).'
    },
    quiz: {
      question: 'Apa nilai kembalian dari timezone_name_from_abbr("WIB", 25200)?',
      options: [
        '"Asia/Jakarta"',
        '"WIB"',
        '25200',
        'null'
      ],
      correctIndex: 0,
      explanation: 'Fungsi mengembalikan string nama identifier resmi "Asia/Jakarta".'
    }
  },

  // 142. TIMEZONE_NAME_GET()
  {
    id: 'php-ref-timezone-name-get',
    title: 'PHP timezone_name_get()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 142,
    overview: 'Fungsi timezone_name_get(): mengembalikan string nama identifier dari objek DateTimeZone yang diberikan.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TIMEZONE NAME GET</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 142 / 146</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏷️ Membaca Nama Identifier Timezone</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>timezone_name_get($object)</code> membaca string nama resmi dari objek <code>DateTimeZone</code>. Ekuivalen dengan <code>$tz->getName()</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$tz = timezone_open("Asia/Makassar");

echo "<h3>Hasil Penggunaan timezone_name_get():</h3>";
echo "<p>Nama Zona Waktu WITA: <strong style='color: #4f46e5;'>" . timezone_name_get($tz) . "</strong></p>";
?>`,
    codeExplanation: [
      'timezone_name_get($tz) mengembalikan "Asia/Makassar".'
    ],
    challenge: {
      instruction: 'Cetak nama timezone dari $tz = timezone_open("Asia/Jayapura").',
      starterCode: `<?php
$tz = timezone_open("Asia/Jayapura");
echo "Nama: " . timezone_name_get($tz);
?>`,
      hint: 'Panggil timezone_name_get($tz).'
    },
    quiz: {
      question: 'Metode OOP apakah pada kelas DateTimeZone yang ekuivalen dengan timezone_name_get($tz)?',
      options: [
        '$tz->getName()',
        '$tz->toString()',
        '$tz->getIdentifier()',
        '$tz->readName()'
      ],
      correctIndex: 0,
      explanation: '$tz->getName() adalah metode OOP padanan dari timezone_name_get().'
    }
  },

  // 143. TIMEZONE_OFFSET_GET()
  {
    id: 'php-ref-timezone-offset-get',
    title: 'PHP timezone_offset_get()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 143,
    overview: 'Fungsi timezone_offset_get(): mengembalikan selisih waktu zona waktu terhadap GMT/UTC dalam satuan detik untuk tanggal tertentu.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TIMEZONE OFFSET</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 143 / 146</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⏱️ Mengukur Selisih Detik terhadap GMT</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>timezone_offset_get($tzObject, $datetimeObject)</code> mengembalikan offset detik zona waktu pada momen tanggal spesifik. Ekuivalen dengan <code>$tz->getOffset($datetime)</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$tzJakarta = timezone_open("Asia/Jakarta");
$tzLondon = timezone_open("Europe/London");
$now = date_create();

$offsetJkt = timezone_offset_get($tzJakarta, $now);
$offsetLdn = timezone_offset_get($tzLondon, $now);

echo "<h3>Offset Detik terhadap GMT/UTC:</h3>";
echo "<ul>";
echo "<li>Asia/Jakarta: <strong>+$offsetJkt Detik (+7 Jam)</strong></li>";
echo "<li>Europe/London: <strong>+$offsetLdn Detik (+1 Jam BST)</strong></li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'timezone_offset_get memperhitungkan apakah zona waktu tersebut sedang memberlakukan Daylight Saving Time (DST) atau tidak pada tanggal yang diberikan.'
    ],
    challenge: {
      instruction: 'Ukur offset detik timezone "Asia/Jayapura" (WIT - UTC+9 = 32400 detik).',
      starterCode: `<?php
$tz = timezone_open("Asia/Jayapura");
echo "Offset WIT: " . timezone_offset_get($tz, date_create()) . " detik";
?>`,
      hint: 'Panggil timezone_offset_get($tz, date_create()).'
    },
    quiz: {
      question: 'Berapakah offset detik untuk Waktu Indonesia Timur (WIT / Asia/Jayapura - UTC+9)?',
      options: [
        '32400 detik (9 jam * 3600 detik)',
        '25200 detik',
        '28800 detik',
        '0 detik'
      ],
      correctIndex: 0,
      explanation: '9 jam x 3600 detik/jam = 32400 detik.'
    }
  },

  // 144. TIMEZONE_OPEN()
  {
    id: 'php-ref-timezone-open',
    title: 'PHP timezone_open()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 144,
    overview: 'Fungsi timezone_open(): alias prosedural dari new DateTimeZone() untuk membuat objek DateTimeZone baru dari nama identifier string.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TIMEZONE OPEN</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 144 / 146</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌐 Membuat Objek DateTimeZone (timezone_open)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>timezone_open($timezoneName)</code> membuat instance objek <code>DateTimeZone</code>. Ekuivalen 100% dengan pendekatan OOP <code>new DateTimeZone($timezoneName)</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// 1. Cara Prosedural: timezone_open()
$tzProsedural = timezone_open("Asia/Jakarta");

// 2. Cara OOP: new DateTimeZone()
$tzOop = new DateTimeZone("Asia/Jakarta");

echo "<h3>Hasil Pembuatan Objek DateTimeZone:</h3>";
echo "<p>Nama Timezone (Prosedural): <strong>" . timezone_name_get($tzProsedural) . "</strong></p>";
echo "<p>Nama Timezone (OOP): <strong>" . $tzOop->getName() . "</strong></p>";
?>`,
    codeExplanation: [
      'Kedua pendekatan menghasilkan objek yang identik.'
    ],
    challenge: {
      instruction: 'Buat objek timezone "UTC" dengan timezone_open("UTC").',
      starterCode: `<?php
$tz = timezone_open("UTC");
echo "Timezone: " . timezone_name_get($tz);
?>`,
      hint: 'Panggil timezone_open("UTC").'
    },
    quiz: {
      question: 'Sintaks OOP apakah yang identik dengan pemanggilan fungsi timezone_open("Asia/Jakarta")?',
      options: [
        'new DateTimeZone("Asia/Jakarta")',
        'DateTimeZone::open("Asia/Jakarta")',
        'Timezone::new("Asia/Jakarta")',
        'Zone.create("Asia/Jakarta")'
      ],
      correctIndex: 0,
      explanation: 'timezone_open() adalah pembungkus fungsi prosedural untuk konstruktor new DateTimeZone().'
    }
  },

  // 145. TIMEZONE_TRANSITIONS_GET()
  {
    id: 'php-ref-timezone-transitions-get',
    title: 'PHP timezone_transitions_get()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 145,
    overview: 'Fungsi timezone_transitions_get(): mengembalikan seluruh riwayat transisi waktu (perubahan Daylight Saving Time / sejarah pergeseran jam) untuk zona waktu tertentu.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TIMEZONE TRANSITIONS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 145 / 146</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📜 Riwayat Transisi Perubahan Waktu (DST)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>timezone_transitions_get($tzObject, $timestampBegin, $timestampEnd)</code> mengembalikan array catatan historis kapan suatu negara memajukan atau memundurkan jam 1 jam (Daylight Saving Time).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$tzLondon = timezone_open("Europe/London");
$transitions = timezone_transitions_get($tzLondon, strtotime("2026-01-01"), strtotime("2026-12-31"));

echo "<h3>Jadwal Transisi DST London Tahun 2026:</h3>";
echo "<ul>";
foreach ($transitions as $t) {
    $dstStatus = $t['isdst'] ? "Mulai Musim Panas (Maju 1 Jam / BST)" : "Kembali ke Waktu Standar (GMT)";
    echo "<li>Tanggal: <strong>{$t['time']}</strong> &rarr; $dstStatus (Offset: {$t['offset']} dtk)</li>";
}
echo "</ul>";
?>`,
    codeExplanation: [
      'Menampilkan tanggal presisi kapan pergantian waktu musim panas dan musim dingin terjadi di London.'
    ],
    challenge: {
      instruction: 'Uji timezone_transitions_get untuk London tahun 2026.',
      starterCode: `<?php
$tz = timezone_open("Europe/London");
$tr = timezone_transitions_get($tz, strtotime("2026-01-01"), strtotime("2026-12-31"));
echo "Total transisi: " . count($tr);
?>`,
      hint: 'Klik RUN untuk mencoba timezone_transitions_get.'
    },
    quiz: {
      question: 'Kapan transisi waktu (Daylight Saving Time - DST) biasanya terjadi di negara-negara Eropa dan Amerika?',
      options: [
        'Dua kali setahun (Maju 1 jam di musim semi dan Mundur 1 jam di musim gugur)',
        'Setiap hari',
        'Setiap bulan',
        'Tidak pernah'
      ],
      correctIndex: 0,
      explanation: 'Negara dengan DST mengubah jam 2 kali dalam setahun untuk memaksimalkan pemanfaatan cahaya matahari musim panas.'
    }
  },

  // 146. TIMEZONE_VERSION_GET()
  {
    id: 'php-ref-timezone-version-get',
    title: 'PHP timezone_version_get()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 146,
    overview: 'Fungsi timezone_version_get(): mengembalikan versi database zona waktu IANA (Olson Timezone Database / timezonedb) yang terpasang di runtime PHP server.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TIMEZONE DB VERSION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 146 / 146</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📦 Versi Database IANA Timezone</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>timezone_version_get()</code> mengembalikan string rilis database zona waktu dunia (seperti <code>"2023.4"</code> atau <code>"2024.1"</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$versiTzDb = timezone_version_get();

echo "<h3>Informasi Database Zona Waktu PHP Server:</h3>";
echo "<p>Versi IANA Timezone Database (timezonedb): <strong style='color: #4f46e5; font-size: 16px;'>$versiTzDb</strong></p>";
echo "<p>Status: <strong style='color: green;'>✓ Database Zona Waktu Siap Digunakan</strong></p>";
?>`,
    codeExplanation: [
      'timezone_version_get() memastikan database waktu server mutakhir dan mematuhi aturan regulasi waktu internasional terbaru.'
    ],
    challenge: {
      instruction: 'Cetak versi database zona waktu dengan timezone_version_get().',
      starterCode: `<?php
echo "Timezone DB Version: " . timezone_version_get();
?>`,
      hint: 'Panggil timezone_version_get().'
    },
    quiz: {
      question: 'Apa fungsi dari timezone_version_get()?',
      options: [
        'Mengetahui versi database zona waktu IANA yang terinstal di server PHP',
        'Mengetahui versi MySQL',
        'Mengetahui IP server',
        'Menghitung kecepatan CPU'
      ],
      correctIndex: 0,
      explanation: 'timezone_version_get mengembalikan string nomor versi database IANA (timezonedb).'
    }
  }
];

module.exports = phpPart17RefDateTimezone;
