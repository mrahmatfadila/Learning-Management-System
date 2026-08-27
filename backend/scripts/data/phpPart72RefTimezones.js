// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (TIMEZONES: 765-771)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart72RefTimezones = [
  // 765. TIMEZONE_IDENTIFIERS_LIST
  {
    id: 'php-ref-timezone-identifiers-list',
    title: 'PHP timezone_identifiers_list() & DateTimeZone::listIdentifiers()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 765,
    overview: 'Kuasai fungsi timezone_identifiers_list() & DateTimeZone::listIdentifiers(): mendapatkan daftar lengkap nama zona waktu IANA resmi (misal: "Asia/Jakarta", "UTC", "America/New_York") dengan filter per benua.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">IANA TIMEZONES</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 765 / 771</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌍 Daftar Zona Waktu IANA (timezone_identifiers_list)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>timezone_identifiers_list(int $timezoneGroup = DateTimeZone::ALL, ?string $countryCode = null): array</code> mengembalikan daftar string zona waktu resmi dunia. Sangat berguna untuk mengisi dropdown pilihan zona waktu pada formulir pengaturan profil pengguna (User Settings).
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Ambil seluruh zona waktu untuk wilayah Indonesia (ID)
$zonaIndonesia = DateTimeZone::listIdentifiers(DateTimeZone::PER_COUNTRY, 'ID');

echo "<h3>Zona Waktu Resmi Indonesia (WIB, WITA, WIT):</h3>";
echo "<ol>";
foreach ($zonaIndonesia as $tz) {
    $dt = new DateTime('now', new DateTimeZone($tz));
    echo "<li>Zona: <strong style='color:#059669;'>$tz</strong> -> Jam Saat Ini: " . $dt->format('H:i:s (P)') . "</li>";
}
echo "</ol>";
?>`,
    codeExplanation: [
      'DateTimeZone::listIdentifiers(DateTimeZone::PER_COUNTRY, "ID") mengembalikan Asia/Jakarta (WIB +07:00), Asia/Makassar (WITA +08:00), Asia/Jayapura (WIT +09:00), dan Asia/Pontianak.'
    ],
    challenge: {
      instruction: 'Ambil daftar zona waktu Asia dengan DateTimeZone::listIdentifiers(DateTimeZone::ASIA).',
      starterCode: `<?php
$asia = DateTimeZone::listIdentifiers(DateTimeZone::ASIA);
echo "Total zona di Asia: " . count($asia);
?>`,
      hint: 'Panggil DateTimeZone::listIdentifiers(DateTimeZone::ASIA).'
    },
    quiz: {
      question: 'Konstanta filter apakah yang digunakan untuk memfilter daftar zona waktu berdasarkan kode 2 huruf negara ISO (misal: "ID" untuk Indonesia)?',
      options: [
        '`DateTimeZone::PER_COUNTRY`',
        '`DateTimeZone::BY_ISO`',
        '`DateTimeZone::FILTER_COUNTRY`',
        '`DateTimeZone::COUNTRY_ONLY`'
      ],
      correctIndex: 0,
      explanation: 'DateTimeZone::PER_COUNTRY dipadukan dengan kode negara 2 digit (seperti "ID").'
    }
  },

  // 766. TIMEZONE_ABBREVIATIONS_LIST
  {
    id: 'php-ref-timezone-abbreviations-list',
    title: 'PHP timezone_abbreviations_list() & DateTimeZone::listAbbreviations()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 766,
    overview: 'Kuasai fungsi timezone_abbreviations_list(): mengembalikan array multidimensi komprehensif berisi seluruh singkatan zona waktu di dunia (WIB, UTC, EST, GMT, PST), offset detik, dan status Daylight Saving Time (DST).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TIMEZONE ABBREVIATIONS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 766 / 771</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📋 Kamus Singkatan Zona Waktu (timezone_abbreviations_list)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>timezone_abbreviations_list(): array</code> mengembalikan kamus lengkap pemetaan singkatan zona waktu ke offset detik dan timezone ID resminya.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$abbrList = timezone_abbreviations_list();

// Cek info untuk singkatan 'wib'
$wibInfo = $abbrList['wib'] ?? [];

echo "<h3>Metadata Singkatan Zona Waktu 'WIB':</h3>";
if (!empty($wibInfo)) {
    echo "<ul>";
    echo "<li>Offset Detik : <strong style='color:#059669;'>{$wibInfo[0]['offset']} detik (+7 jam)</strong></li>";
    echo "<li>Timezone ID  : <strong>{$wibInfo[0]['timezone_id']}</strong></li>";
    echo "<li>Status DST   : <strong>" . ($wibInfo[0]['dst'] ? 'Aktif' : 'Tidak Ada DST') . "</strong></li>";
    echo "</ul>";
}
?>`,
    codeExplanation: [
      'timezone_abbreviations_list() memberikan rincian offset detik (25200 detik = +7 jam untuk WIB).'
    ],
    challenge: {
      instruction: 'Pahami fungsi timezone_abbreviations_list.',
      starterCode: `<?php
$abbr = timezone_abbreviations_list();
echo "Total singkatan terdaftar: " . count($abbr);
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Berapakah offset detik dari UTC yang dimiliki oleh zona waktu WIB (Waktu Indonesia Barat)?',
      options: [
        '`25200` detik (+7 jam * 3600 detik/jam)',
        '`28800` detik',
        '`32400` detik',
        '`0` detik'
      ],
      correctIndex: 0,
      explanation: '7 jam x 3600 detik = 25.200 detik.'
    }
  },

  // 767. TIMEZONE_NAME_FROM_ABBR
  {
    id: 'php-ref-timezone-name-from-abbr',
    title: 'PHP timezone_name_from_abbr()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 767,
    overview: 'Kuasai fungsi timezone_name_from_abbr(): mengonversi singkatan zona waktu atau offset detik menjadi nama timezone IANA kanonikal (misal: "WIB" / 25200 -> "Asia/Jakarta").',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ABBR RESOLVER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 767 / 771</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Resolusi Nama Zona dari Singkatan (timezone_name_from_abbr)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>timezone_name_from_abbr(string $abbr, int $utcOffset = -1, int $isDST = -1): string|false</code> menyelesaikan ambiguitas singkatan menjadi nama zona IANA yang tepat.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$namaZonaWib = timezone_name_from_abbr("WIB", 7 * 3600);
$namaZonaEst = timezone_name_from_abbr("EST");
$namaZonaGmt = timezone_name_from_abbr("UTC");

echo "<h3>Hasil Penggunaan timezone_name_from_abbr():</h3>";
echo "<p>Singkatan 'WIB' (+7 jam) -> IANA ID: <strong style='color:#059669;'>$namaZonaWib</strong></p>";
echo "<p>Singkatan 'EST'          -> IANA ID: <strong>$namaZonaEst</strong></p>";
echo "<p>Singkatan 'UTC'          -> IANA ID: <strong>$namaZonaGmt</strong></p>";
?>`,
    codeExplanation: [
      'timezone_name_from_abbr("WIB", 25200) mengembalikan string nama zona resmi "Asia/Jakarta".'
    ],
    challenge: {
      instruction: 'Cari nama zona dari singkatan "WIB" dengan timezone_name_from_abbr("WIB", 25200).',
      starterCode: `<?php
echo timezone_name_from_abbr("WIB", 25200);
?>`,
      hint: 'Panggil timezone_name_from_abbr("WIB", 25200).'
    },
    quiz: {
      question: 'Mengapa parameter kedua `$utcOffset` sangat dianjurkan saat memanggil `timezone_name_from_abbr()`?',
      options: [
        'Karena banyak singkatan zona waktu yang sama digunakan di berbagai belahan benua (ambigu, contoh: CST bisa China Standard Time atau Central Standard Time USA), sehingga offset detik memastikan identifikasi yang 100% akurat',
        'Karena fungsi akan error jika tanpa offset',
        'Untuk mengubah timezone server',
        'Hanya untuk angka'
      ],
      correctIndex: 0,
      explanation: 'Offset membedakan singkatan yang tumpang tindih secara global.'
    }
  },

  // 768. TIMEZONE_LOCATION_GET
  {
    id: 'php-ref-timezone-location-get',
    title: 'PHP timezone_location_get() & DateTimeZone::getLocation()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 768,
    overview: 'Kuasai fungsi timezone_location_get() & DateTimeZone::getLocation(): mengekstrak informasi geografis lokasi zona waktu (kode negara ISO 2 huruf, garis lintang latitude, garis bujur longitude, dan komentar).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">GEO LOCATION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 768 / 771</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📍 Koordinat Geografis Zona Waktu (getLocation)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>timezone_location_get(DateTimeZone $object): array|false</code> mengembalikan array koordinat GPS: <code>country_code</code>, <code>latitude</code>, <code>longitude</code>, dan <code>comments</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$tz = new DateTimeZone("Asia/Jakarta");
$lokasi = $tz->getLocation();

echo "<h3>Koordinat Geografis Zona 'Asia/Jakarta':</h3>";
echo "<ul>";
echo "<li>Kode Negara  : <strong style='color:#059669;'>{$lokasi['country_code']}</strong> (Indonesia)</li>";
echo "<li>Garis Lintang: <strong>{$lokasi['latitude']}</strong></li>";
echo "<li>Garis Bujur  : <strong>{$lokasi['longitude']}</strong></li>";
echo "<li>Komentar     : <strong>{$lokasi['comments']}</strong></li>";
echo "</ul>";
?>`,
    codeExplanation: [
      '$tz->getLocation() mengembalikan data geografis presisi dari database IANA Timezone.'
    ],
    challenge: {
      instruction: 'Ambil lokasi zona "Asia/Jakarta" dengan (new DateTimeZone("Asia/Jakarta"))->getLocation().',
      starterCode: `<?php
$loc = (new DateTimeZone("Asia/Jakarta"))->getLocation();
echo "Country: " . $loc['country_code'];
?>`,
      hint: 'Panggil getLocation().'
    },
    quiz: {
      question: 'Kunci array apa sajakah yang ada dalam hasil kembalian `DateTimeZone::getLocation()`?',
      options: [
        '`country_code`, `latitude`, `longitude`, dan `comments`',
        '`name`, `city`, `zipcode`',
        '`offset`, `dst`, `time`',
        '`ip`, `isp`, `country`'
      ],
      correctIndex: 0,
      explanation: 'getLocation mengembalikan kode negara, lintang, bujur, dan catatan.'
    }
  },

  // 769. TIMEZONE_TRANSITIONS_GET
  {
    id: 'php-ref-timezone-transitions-get',
    title: 'PHP timezone_transitions_get() & Daylight Saving Time (DST)',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 769,
    overview: 'Kuasai fungsi timezone_transitions_get() & DateTimeZone::getTransitions(): melacak seluruh riwayat transisi pergeseran waktu dan Daylight Saving Time (DST) dari sebuah zona waktu.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DST TRANSITIONS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 769 / 771</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⏱️ Riwayat Transisi Waktu & DST (getTransitions)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>timezone_transitions_get(DateTimeZone $object, int $timestampBegin = PHP_INT_MIN, int $timestampEnd = PHP_INT_MAX): array|false</code> melacak kapan suatu negara memajukan atau memundurkan jam 1 jam karena pergantian musim (Daylight Saving Time).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$tzNy = new DateTimeZone("America/New_York");

// Ambil transisi untuk tahun berjalan
$waktuMulai = (new DateTime('2026-01-01', new DateTimeZone('UTC')))->getTimestamp();
$waktuSelesai = (new DateTime('2026-12-31', new DateTimeZone('UTC')))->getTimestamp();

$transisi = $tzNy->getTransitions($waktuMulai, $waktuSelesai);

echo "<h3>Jadwal Transisi DST America/New_York (2026):</h3>";
echo "<ul>";
foreach ($transisi as $t) {
    $statusDst = $t['isdst'] ? "Aktif (Musim Panas EDT)" : "Nonaktif (Musim Dingin EST)";
    echo "<li>Waktu: <strong>{$t['time']}</strong> | Offset: " . ($t['offset'] / 3600) . " jam | DST: <strong style='color:#059669;'>$statusDst</strong></li>";
}
echo "</ul>";
?>`,
    codeExplanation: [
      'getTransitions() menampilkan titik waktu eksak kapan pergeseran jam DST terjadi.'
    ],
    challenge: {
      instruction: 'Pahami fungsi getTransitions.',
      starterCode: `<?php
$tz = new DateTimeZone("UTC");
$tr = $tz->getTransitions(time(), time() + 86400);
echo "Transisi UTC: " . count($tr);
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Apakah zona waktu di Indonesia (seperti `Asia/Jakarta`) memiliki transisi Daylight Saving Time (DST)?',
      options: [
        'Tidak, zona waktu Indonesia berada di garis khatulistiwa tropis sehingga tidak pernah menerapkan Daylight Saving Time (`isdst = false`)',
        'Ya, setiap bulan Juni',
        'Ya, setiap akhir pekan',
        'Tergantung musim hujan'
      ],
      correctIndex: 0,
      explanation: 'Indonesia tidak menerapkan DST sehingga offset waktu konstan +7 (WIB), +8 (WITA), +9 (WIT).'
    }
  },

  // 770. TIMEZONE_OFFSET_GET
  {
    id: 'php-ref-timezone-offset-get',
    title: 'PHP timezone_offset_get() & DateTimeZone::getOffset()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 770,
    overview: 'Kuasai fungsi timezone_offset_get() & DateTimeZone::getOffset(): menghitung selisih perbedaan detik eksak zona waktu relatif terhadap UTC (Greenwich Mean Time) pada titik waktu tertentu.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">OFFSET CALCULATOR</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 770 / 771</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📐 Menghitung Selisih Offset UTC (getOffset)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>timezone_offset_get(DateTimeZone $object, DateTimeInterface $datetime): int</code> mengembalikan angka integer selisih offset dalam detik terhadap UTC pada titik waktu <code>$datetime</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$sekarang = new DateTime('now', new DateTimeZone('UTC'));

$tzWib = new DateTimeZone('Asia/Jakarta');
$tzLondon = new DateTimeZone('Europe/London');
$tzTokyo = new DateTimeZone('Asia/Tokyo');

$offsetWib = $tzWib->getOffset($sekarang);       // 25200 detik (+7 jam)
$offsetTokyo = $tzTokyo->getOffset($sekarang);   // 32400 detik (+9 jam)

echo "<h3>Hasil Penghitungan Offset Zona Waktu:</h3>";
echo "<p>Offset Asia/Jakarta : <strong style='color:#059669;'>+" . ($offsetWib / 3600) . " jam (+$offsetWib detik)</strong></p>";
echo "<p>Offset Asia/Tokyo   : <strong style='color:#4f46e5;'>+" . ($offsetTokyo / 3600) . " jam (+$offsetTokyo detik)</strong></p>";
?>`,
    codeExplanation: [
      '$tz->getOffset($datetime) memperhitungkan tanggal eksak untuk mengembalikan offset yang akurat terhadap DST.'
    ],
    challenge: {
      instruction: 'Hitung offset Asia/Jakarta dengan (new DateTimeZone("Asia/Jakarta"))->getOffset(new DateTime()).',
      starterCode: `<?php
$tz = new DateTimeZone("Asia/Jakarta");
echo "Offset Jam: " . ($tz->getOffset(new DateTime()) / 3600);
?>`,
      hint: 'Panggil getOffset(new DateTime()).'
    },
    quiz: {
      question: 'Berapakah nilai yang dikembalikan oleh `$tz->getOffset(new DateTime())` untuk zona waktu UTC?',
      options: [
        'Integer `0` detik',
        'Integer `3600` detik',
        'String `"+00:00"`',
        'Boolean `true`'
      ],
      correctIndex: 0,
      explanation: 'Zona UTC adalah titik acuan nol sehingga offset-nya adalah 0 detik.'
    }
  },

  // 771. TIMEZONES COMPLETE MASTER ARCHITECTURE
  {
    id: 'php-ref-timezones-complete-master',
    title: 'PHP Timezones Master Architecture & Database Standard',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 771,
    overview: 'Kuasai standar enterprise penanganan waktu global: simpan selalu di database dalam UTC (TIMESTAMPTZ), konversi ke zona waktu lokal pengguna saat ditampilkan, dan format ISO 8601.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">TIMEZONE ARCHITECTURE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 771 / 771</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏆 Master Lengkap Arsitektur Zona Waktu Enterprise</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <strong>Golden Rule Aplikasi Global:</strong> Simpan seluruh timestamp di database dalam format <strong>UTC murni (ISO 8601)</strong>. Saat me-render halaman ke pengguna, konversikan objek <code>DateTime</code> ke zona waktu preferensi pengguna (misal <code>$user->timezone = "Asia/Jakarta"</code>) menggunakan <code>$dt->setTimezone()</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// 1. Simpan transaksi di server dalam UTC
$transaksiUtc = new DateTime('now', new DateTimeZone('UTC'));
$waktuDatabase = $transaksiUtc->format('Y-m-d H:i:s'); // Masuk DB PostgreSQL

// 2. Tampilkan ke User di Jakarta (WIB)
$tampilWib = clone $transaksiUtc;
$tampilWib->setTimezone(new DateTimeZone('Asia/Jakarta'));

// 3. Tampilkan ke User di New York (EDT/EST)
$tampilNy = clone $transaksiUtc;
$tampilNy->setTimezone(new DateTimeZone('America/New_York'));

echo "<h3>Simulasi Standar Waktu Enterprise Multi-Timezone:</h3>";
echo "<ul>";
echo "<li>Tersimpan di Database (UTC) : <code>$waktuDatabase UTC</code></li>";
echo "<li>Tampil di Jakarta (WIB)      : <strong style='color:#059669;'>" . $tampilWib->format('d F Y, H:i:s (P)') . "</strong></li>";
echo "<li>Tampil di New York (USA)     : <strong style='color:#4f46e5;'>" . $tampilNy->format('d F Y, H:i:s (P)') . "</strong></li>";
echo "</ul>";
echo "<p style='color:green; font-weight:bold; font-size:18px;'>🎉 Selamat! Seluruh kurikulum PHP Timezones Reference (Materi 765 - 771) telah selesai secara paripurna!</p>";
?>`,
    codeExplanation: [
      'Pola standar emas (Gold Standard): Simpan UTC di PostgreSQL, render sesuai zona waktu lokal klien.'
    ],
    challenge: {
      instruction: 'Pahami arsitektur timezone enterprise.',
      starterCode: `<?php
echo "Selalu simpan UTC di Database dan render zona lokal pengguna!";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Mengapa praktik terbaik (best practice) industri mewajibkan penyimpanan seluruh timestamp waktu di database dalam format UTC?',
      options: [
        'Karena UTC bersifat universal dan bebas dari anomali Daylight Saving Time (DST), sehingga mempermudah sorting data, audit log, dan konversi ke zona waktu pengguna mana pun di seluruh dunia',
        'Karena database tidak bisa menyimpan angka selain 0',
        'Hanya untuk menghemat memori',
        'Keduanya identik'
      ],
      correctIndex: 0,
      explanation: 'Menyimpan waktu dalam UTC adalah standar industri mutlak untuk mencegah kekacauan zona waktu dan DST.'
    }
  }
];

module.exports = phpPart72RefTimezones;
