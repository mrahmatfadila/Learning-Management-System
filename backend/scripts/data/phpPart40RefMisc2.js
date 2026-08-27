// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (MISC PART 2: 433-444)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart40RefMisc2 = [
  // 433. HRTIME()
  {
    id: 'php-ref-misc-hrtime',
    title: 'PHP hrtime()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 433,
    overview: 'Kuasai fungsi hrtime(): mengukur durasi waktu eksekusi kode (High-Resolution Time) dalam satuan Nanodetik menggunakan jam monotonik perangkat keras yang kebal terhadap pergeseran jam NTP sistem.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">HIGH RESOLUTION TIME</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 433 / 444</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⏱️ Timer Presisi Tinggi Nanodetik (hrtime)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>hrtime(bool $as_number = false): array|int|float</code> adalah standar benchmarking modern di PHP 7.3+. Berbeda dengan <code>microtime()</code> yang bergantung pada jam sistem (yang bisa bergeser mundur saat sinkronisasi NTP), <code>hrtime()</code> menggunakan <em>Monotonic Clock</em> yang selalu maju konstan.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Mulai Benchmark Waktu Monotonik (Nanodetik)
$mulai = hrtime(true);

// Operasi yang diukur: Perulangan 100.000 iterasi
$total = 0;
for ($i = 1; $i <= 100000; $i++) {
    $total += $i;
}

$selesai = hrtime(true);
$durasiNano = $selesai - $mulai;
$durasiMili = $durasiNano / 1e+6; // Konversi ke Milidetik (ms)

echo "<h3>Hasil Benchmark Presisi Tinggi (hrtime):</h3>";
echo "<p>Durasi Eksekusi: <strong style='color: #059669; font-size: 18px;'>" . round($durasiMili, 3) . " ms</strong> ($durasiNano nanodetik)</p>";
echo "<p>Total Akumulasi: <strong>$total</strong></p>";
?>`,
    codeExplanation: [
      'hrtime(true) mengembalikan integer 64-bit nanodetik.',
      'Membagi durasi nano dengan 1.000.000 menghasilkan milidetik presisi tinggi.'
    ],
    challenge: {
      instruction: 'Ukur durasi eksekusi menggunakan hrtime(true).',
      starterCode: `<?php
$start = hrtime(true);
$sum = array_sum(range(1, 1000));
$end = hrtime(true);
echo "Selesai dalam: " . ($end - $start) . " ns";
?>`,
      hint: 'Gunakan hrtime(true).'
    },
    quiz: {
      question: 'Mengapa `hrtime()` jauh lebih akurat dibandingkan `microtime()` untuk benchmarking kinerja kode?',
      options: [
        'Karena menggunakan Monotonic Clock perangkat keras yang kebal terhadap perubahan/penyesuaian jam sistem operasi (NTP clock drift)',
        'Karena hrtime menghasilkan string',
        'Karena microtime hanya bekerja di Linux',
        'Keduanya identik'
      ],
      correctIndex: 0,
      explanation: 'Monotonic clock tidak terpengaruh oleh penyesuaian waktu sistem operasi.'
    }
  },

  // 434. IGNORE_USER_ABORT()
  {
    id: 'php-ref-misc-ignore-user-abort',
    title: 'PHP ignore_user_abort()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 434,
    overview: 'Kuasai fungsi ignore_user_abort(): menginstruksikan PHP agar TETAP MENYELESAIKAN eksekusi skrip sampai tuntas meskipun klien/browser telah memutuskan sambungan jaringan (Background Worker / Job Processing).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">BACKGROUND EXECUTION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 434 / 444</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛡️ Abaikan Pemutusan Klien (ignore_user_abort)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ignore_user_abort(?bool $enable): int</code> memastikan proses kritis seperti pembayaran payment gateway, pengiriman email massal, atau generate file PDF tetap berjalan di background server hingga selesai 100% tanpa terputus jika user menutup browser.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Aktifkan agar proses kritis tidak terhenti jika koneksi klien putus
$statusLama = ignore_user_abort(true);

echo "<h3>Hasil Pengaturan ignore_user_abort:</h3>";
echo "<p>Status Eksekusi Background: <strong style='color: #059669;'>AKTIF (ignore_user_abort = true)</strong></p>";
echo "<p>Proses transaksi kritis dijamin tetap berjalan sampai tuntas di server.</p>";
?>`,
    codeExplanation: [
      'ignore_user_abort(true) melindungi transaksi database multi-step dari kegagalan state akibat tab browser ditutup.'
    ],
    challenge: {
      instruction: 'Aktifkan ignore_user_abort dengan ignore_user_abort(true).',
      starterCode: `<?php
ignore_user_abort(true);
echo "Background execution aktif.";
?>`,
      hint: 'Panggil ignore_user_abort(true).'
    },
    quiz: {
      question: 'Kapan programmer sebaiknya menyetel `ignore_user_abort(true)`?',
      options: [
        'Pada pemrosesan transaksi kritis di latar belakang (seperti settlement pembayaran atau batch processing) yang tidak boleh berhenti di tengah jalan saat pengguna menutup halaman',
        'Untuk membuat animasi CSS',
        'Hanya saat download file zip',
        'Tidak pernah'
      ],
      correctIndex: 0,
      explanation: 'ignore_user_abort(true) menjamin kelangsungan proses server independen dari koneksi client.'
    }
  },

  // 435. PACK()
  {
    id: 'php-ref-misc-pack',
    title: 'PHP pack()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 435,
    overview: 'Kuasai fungsi pack(): mengemas data nilai PHP menjadi string biner mentah (Binary Packing) berformat tertentu (C, n, N, V, J, dll.), fondasi protokol jaringan biner dan parsing header file.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">BINARY PACKING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 435 / 444</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📦 Pengemasan Data Biner (pack)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>pack(string $format, mixed ...$values): string</code> mengubah angka/string menjadi deretan byte biner format C (unsigned char), N (unsigned long big endian), V (little endian), dll.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Mengemas angka 65 ('A') dan 66 ('B') ke format biner karakter (C)
$biner = pack("C*", 68, 101, 118, 71, 114, 111, 119); // "DevGrow"

// Mengemas Integer 32-bit Big Endian (format N)
$intBiner = pack("N", 305419896); // 0x12345678

echo "<h3>Hasil Penggunaan pack():</h3>";
echo "<p>Karakter Biner Hasil Pack: <strong style='color: #059669;'>$biner</strong></p>";
echo "<p>Panjang Byte Integer 32-bit: <strong>" . strlen($intBiner) . " bytes</strong> (Hex: " . bin2hex($intBiner) . ")</p>";
?>`,
    codeExplanation: [
      'pack("C*", ...) mengonversi byte ASCII integer menjadi string biner.',
      'pack("N", ...) mengemas integer 32-bit menjadi tepat 4 bytes network byte order.'
    ],
    challenge: {
      instruction: 'Kemas karakter ASCII 72, 105 ("Hi") dengan pack("C*", 72, 105).',
      starterCode: `<?php
echo pack("C*", 72, 105);
?>`,
      hint: 'Panggil pack("C*", 72, 105).'
    },
    quiz: {
      question: 'Kode format apakah pada fungsi `pack()` yang merepresentasikan unsigned 32-bit integer dalam urutan Network Byte Order (Big Endian)?',
      options: [
        '`"N"`',
        '`"V"` (Little Endian)',
        '`"C"` (Unsigned Char)',
        '`"s"`'
      ],
      correctIndex: 0,
      explanation: 'Format "N" menghasilkan 32-bit unsigned long dalam format Big Endian (standar protokol jaringan TCP/IP).'
    }
  },

  // 436. PHP_STRIP_WHITESPACE()
  {
    id: 'php-ref-misc-php-strip-whitespace',
    title: 'PHP php_strip_whitespace()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 436,
    overview: 'Kuasai fungsi php_strip_whitespace(): menghapus seluruh komentar kode (//, /* */) dan spasi berlebih dari file PHP (Minifikasi Kode Sumber).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">MINIFICATION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 436 / 444</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧹 Minifikasi Kode Sumber PHP (php_strip_whitespace)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>php_strip_whitespace(string $filename): string</code> membaca file PHP dan mengembalikan isinya dalam bentuk minified (semua whitespace, tab, baris kosong, dan komentar kode dihapus bersih tanpa merusak sintaks).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$tempScript = __DIR__ . "/full_code.php";
$codeWithComments = <<<PHP
<?php
// Komentar Header Pengembang
/*
 * Modul Akuntansi
 */
function hitungPajak(\$nilai) {
    // Hitung PPN 11%
    return \$nilai * 0.11;
}
?>
PHP;
file_put_contents($tempScript, $codeWithComments);

// Bersihkan spasi dan komentar
$minifiedCode = php_strip_whitespace($tempScript);

echo "<h3>Hasil Penggunaan php_strip_whitespace():</h3>";
echo "<pre style='background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 8px;'>";
echo htmlspecialchars($minifiedCode);
echo "</pre>";

unlink($tempScript);
?>`,
    codeExplanation: [
      'php_strip_whitespace() mengecilkan ukuran berkas PHP untuk bundler produksi.'
    ],
    challenge: {
      instruction: 'Pahami fungsi minifikasi php_strip_whitespace().',
      starterCode: `<?php
echo "php_strip_whitespace() menghapus komentar & spasi berlebih.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Bagian apa sajakah dari file PHP yang DIHAPUS oleh fungsi `php_strip_whitespace()`?',
      options: [
        'Semua komentar kode (single-line // dan multi-line /* */) serta spasi putih, tab, dan baris kosong yang tidak diperlukan',
        'Seluruh nama fungsi',
        'Hanya tag pembuka <?php',
        'Variabel global'
      ],
      correctIndex: 0,
      explanation: 'Fungsi ini membuang komentar dan whitespace berlebih untuk menghasilkan kode yang ramping.'
    }
  },

  // 437. SHOW_SOURCE()
  {
    id: 'php-ref-misc-show-source',
    title: 'PHP show_source()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 437,
    overview: 'Kuasai fungsi show_source(): alias resmi 100% dari fungsi highlight_file() untuk menampilkan kode sumber file dengan syntax highlighting.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ALIAS CONSTRUCT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 437 / 444</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎨 Alias Penyorotan Berkas (show_source)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>show_source(string $filename, bool $return = false): string|bool</code> adalah sinonim bawaan dari <code>highlight_file()</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$fileUji = __DIR__ . "/simple_test.php";
file_put_contents($fileUji, "<?php echo 'Halo Dunia PHP 8'; ?>");

$outputHtml = show_source($fileUji, true);

echo "<h3>Hasil Penggunaan show_source():</h3>";
echo "<div style='background: #f1f5f9; padding: 12px; border-radius: 8px;'>";
echo $outputHtml;
echo "</div>";

unlink($fileUji);
?>`,
    codeExplanation: [
      'show_source() dan highlight_file() bekerja identik.'
    ],
    challenge: {
      instruction: 'Pahami alias show_source.',
      starterCode: `<?php
echo "show_source() adalah alias dari highlight_file().";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Fungsi utama apakah yang merupakan target asli dari alias `show_source()`?',
      options: [
        '`highlight_file()`',
        '`highlight_string()`',
        '`readfile()`',
        '`file_get_contents()`'
      ],
      correctIndex: 0,
      explanation: 'show_source() adalah alias resmi dari highlight_file().'
    }
  },

  // 438. SLEEP()
  {
    id: 'php-ref-misc-sleep',
    title: 'PHP sleep()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 438,
    overview: 'Kuasai fungsi sleep(): menunda (pause) eksekusi program selama sejumlah Detik integer yang ditentukan (Rate Limiting, Polling Delay, retry backoff).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">EXECUTION DELAY</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 438 / 444</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⏱️ Jeda Eksekusi Detik (sleep)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>sleep(int $seconds): int|false</code> menghentikan proses PHP selama <code>$seconds</code> detik. Mengembalikan <code>0</code> jika sukses, atau sisa waktu jika diinterupsi oleh OS signal.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Hasil Penggunaan sleep():</h3>";
echo "<p>1. Waktu Awal: <strong>" . date("H:i:s") . "</strong></p>";

// Jeda 1 detik (simulasi rate limiter)
sleep(1);

echo "<p>2. Waktu Selesai: <strong style='color: #059669;'>" . date("H:i:s") . "</strong> (Jeda 1 detik berhasil)</p>";
?>`,
    codeExplanation: [
      'sleep(1) menunda proses selama tepat 1 detik.'
    ],
    challenge: {
      instruction: 'Pahami pemanggilan sleep(1) untuk delay 1 detik.',
      starterCode: `<?php
sleep(1);
echo "Delay 1 detik selesai.";
?>`,
      hint: 'Panggil sleep(1).'
    },
    quiz: {
      question: 'Satuan waktu apakah yang diterima oleh fungsi `sleep($seconds)`?',
      options: [
        'Detik (Seconds) dalam bilangan bulat integer',
        'Milidetik (ms)',
        'Mikrodetik (μs)',
        'Menit'
      ],
      correctIndex: 0,
      explanation: 'sleep() menerima durasi dalam satuan detik integer (untuk mikrodetik gunakan usleep).'
    }
  },

  // 439. SYS_GETLOADAVG()
  {
    id: 'php-ref-misc-sys-getloadavg',
    title: 'PHP sys_getloadavg()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 439,
    overview: 'Kuasai fungsi sys_getloadavg(): mengambil rata-rata beban sistem (System Load Average) server Linux dalam interval 1, 5, dan 15 menit terakhir untuk monitoring beban CPU server.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SERVER MONITORING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 439 / 444</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📊 Beban Sistem Rata-rata (sys_getloadavg)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>sys_getloadavg(): array|false</code> mengembalikan array 3 elemen float yang merepresentasikan load average sistem operasi pada interval 1 menit, 5 menit, dan 15 menit terakhir.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$load = sys_getloadavg();

echo "<h3>Hasil Monitoring Beban Server:</h3>";
if ($load !== false) {
    echo "<p>Load 1 Menit: <strong style='color: #059669;'>{$load[0]}</strong></p>";
    echo "<p>Load 5 Menit: <strong>{$load[1]}</strong></p>";
    echo "<p>Load 15 Menit: <strong>{$load[2]}</strong></p>";
} else {
    echo "<p>sys_getloadavg() didukung pada lingkungan server Linux/UNIX.</p>";
}
?>`,
    codeExplanation: [
      'sys_getloadavg() membaca metrik /proc/loadavg di Linux untuk health check sistem.'
    ],
    challenge: {
      instruction: 'Pahami fungsi monitoring beban server sys_getloadavg().',
      starterCode: `<?php
echo "sys_getloadavg() mengembalikan array 3 metrik load average.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Tiga interval waktu apakah yang dikembalikan dalam array oleh fungsi `sys_getloadavg()`?',
      options: [
        '1 Menit, 5 Menit, dan 15 Menit terakhir',
        '1 Detik, 10 Detik, dan 1 Menit',
        '1 Jam, 12 Jam, dan 24 Jam',
        'Hanya 1 Menit'
      ],
      correctIndex: 0,
      explanation: 'Load average standar Unix mengukur beban antrean CPU dalam rentang 1, 5, dan 15 menit.'
    }
  },

  // 440. TIME_NANOSLEEP()
  {
    id: 'php-ref-misc-time-nanosleep',
    title: 'PHP time_nanosleep()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 440,
    overview: 'Kuasai fungsi time_nanosleep(): menunda eksekusi skrip dengan tingkat presisi tinggi hingga satuan Detik dan Nanodetik.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">NANO DELAY</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 440 / 444</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⏱️ Jeda Presisi Nanodetik (time_nanosleep)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>time_nanosleep(int $seconds, int $nanoseconds): bool|array</code> memungkinkan programmer menunda proses selama rentang waktu yang sangat halus (misal 0 detik dan 500.000.000 nanodetik = 0.5 detik).
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Hasil Penggunaan time_nanosleep():</h3>";
if (function_exists('time_nanosleep')) {
    // Jeda 0 detik + 100.000.000 nanodetik (0.1 detik)
    time_nanosleep(0, 100000000);
    echo "<p style='color: #059669;'>✓ Jeda 100 juta nanodetik (0.1s) sukses dieksekusi.</p>";
} else {
    usleep(100000);
    echo "<p>Simulasi jeda 0.1 detik via usleep.</p>";
}
?>`,
    codeExplanation: [
      'time_nanosleep($sec, $nano) memberikan resolusi delay paling presisi di PHP.'
    ],
    challenge: {
      instruction: 'Pahami fungsi time_nanosleep.',
      starterCode: `<?php
echo "time_nanosleep() menerima parameter detik dan nanodetik.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Berapakah jumlah nanodetik dalam 1 detik penuh?',
      options: [
        '1.000.000.000 (1 Miliar Nanodetik)',
        '1.000.000 (1 Juta)',
        '1.000',
        '100'
      ],
      correctIndex: 0,
      explanation: '1 detik = 10^9 = 1.000.000.000 nanodetik.'
    }
  },

  // 441. TIME_SLEEP_UNTIL()
  {
    id: 'php-ref-misc-time-sleep-until',
    title: 'PHP time_sleep_until()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 441,
    overview: 'Kuasai fungsi time_sleep_until(): menunda eksekusi skrip hingga mencapai waktu timestamp masa depan yang ditentukan (Cron & Scheduled Task synchronization).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TIMESTAMP SLEEP</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 441 / 444</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📅 Jeda Hingga Waktu Tertentu (time_sleep_until)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>time_sleep_until(float $timestamp): bool</code> menidurkan skrip hingga jam server mencapai timestamp float yang ditargetkan (misal: <code>time_sleep_until(microtime(true) + 0.5)</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$targetWaktu = microtime(true) + 0.5; // Target 0.5 detik dari sekarang

echo "<h3>Hasil Penggunaan time_sleep_until():</h3>";
if (time_sleep_until($targetWaktu)) {
    echo "<p style='color: #059669;'><strong>✓ Skrip terbangun tepat saat target waktu timestamp tercapai!</strong></p>";
}
?>`,
    codeExplanation: [
      'time_sleep_until() memudahkan penjadwalan interval eksekusi periodik pada worker daemon PHP CLI.'
    ],
    challenge: {
      instruction: 'Pahami fungsi time_sleep_until(microtime(true) + 0.2).',
      starterCode: `<?php
time_sleep_until(microtime(true) + 0.1);
echo "Terbangun.";
?>`,
      hint: 'Jalankan time_sleep_until.'
    },
    quiz: {
      question: 'Apa yang terjadi jika kita mengirimkan nilai timestamp masa lalu (yang sudah lewat) ke `time_sleep_until($past)`?',
      options: [
        'Memicu E_WARNING dan mengembalikan boolean false',
        'Skrip tidur selamanya',
        'Waktu server diputar mundur',
        'Tidak ada error'
      ],
      correctIndex: 0,
      explanation: 'Target waktu harus berada di masa depan, timestamp lampau memicu warning.'
    }
  },

  // 442. UNIQID()
  {
    id: 'php-ref-misc-uniqid',
    title: 'PHP uniqid()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 442,
    overview: 'Kuasai fungsi uniqid(): menghasilkan pengenal unik berbasis waktu mikrodetik (Prefix + Microtime ID) untuk penamaan file upload acak (uniqid("img_", true)).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">UNIQUE IDENTIFIER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 442 / 444</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔑 Generator ID Unik Mikrodetik (uniqid)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>uniqid(string $prefix = "", bool $more_entropy = false): string</code> menghasilkan string hex unik berdasarkan waktu mikrodetik. Menyetel <code>$more_entropy = true</code> menambahkan entropi LCG untuk menjamin keunikan tinggi pada penamaan berkas upload.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// 1. ID Unik Standar
$idBiasa = uniqid();

// 2. ID Unik dengan Prefix dan More Entropy (Direkomendasikan untuk Nama File Upload)
$namaFileUnik = uniqid("avatar_", true) . ".webp";

echo "<h3>Hasil Penggunaan uniqid():</h3>";
echo "<p>ID Unik Biasa: <code>$idBiasa</code></p>";
echo "<p>Nama File Upload Unik: <strong style='color: #059669; font-size: 18px;'>$namaFileUnik</strong></p>";
?>`,
    codeExplanation: [
      'uniqid("prefix_", true) menghasilkan 23 karakter unik ber-entropi tinggi yang ideal untuk nama berkas upload.'
    ],
    challenge: {
      instruction: 'Buat ID unik transaksi dengan prefix "TRX-" menggunakan uniqid("TRX-").',
      starterCode: `<?php
echo uniqid("TRX-");
?>`,
      hint: 'Panggil uniqid("TRX-").'
    },
    quiz: {
      question: 'Parameter apakah yang harus disetel `true` pada `uniqid("prefix_", true)` untuk menambahkan entropi acak ekstra agar mencegah tabrakan ID pada traffic tinggi?',
      options: [
        'Parameter `$more_entropy`',
        'Parameter `$secure`',
        'Parameter `$crypto`',
        'Parameter `$strict`'
      ],
      correctIndex: 0,
      explanation: '$more_entropy menambahkan 9 karakter ekstra kombinasi Linear Congruential Generator.'
    }
  },

  // 443. UNPACK()
  {
    id: 'php-ref-misc-unpack',
    title: 'PHP unpack()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 443,
    overview: 'Kuasai fungsi unpack(): membongkar (Unpacking) deretan byte biner mentah menjadi Array data PHP terstruktur sesuai format format string.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">BINARY UNPACKING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 443 / 444</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📦 Membongkar Data Biner (unpack)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>unpack(string $format, string $string, int $offset = 0): array|false</code> membaca buffer biner dan mengembalikannya dalam array asosiatif (misal membaca header file biner BMP/PNG/WAV).
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Buat data biner 2 bilangan integer 16-bit (format n: unsigned short big-endian)
$binaryData = pack("n2", 1024, 2048);

// Bongkar kembali ke Array Asosiatif
$hasilUnpack = unpack("nNilaiA/nNilaiB", $binaryData);

echo "<h3>Hasil Penggunaan unpack():</h3>";
echo "<p>Nilai A: <strong style='color: #059669;'>{$hasilUnpack['NilaiA']}</strong></p>";
echo "<p>Nilai B: <strong style='color: #4f46e5;'>{$hasilUnpack['NilaiB']}</strong></p>";
?>`,
    codeExplanation: [
      'unpack("nNilaiA/nNilaiB", $data) memetakan 4 byte biner menjadi array asosiatif [NilaiA => 1024, NilaiB => 2048].'
    ],
    challenge: {
      instruction: 'Bongkar byte biner karakter ASCII dengan unpack("C*", pack("C*", 65, 66)).',
      starterCode: `<?php
$data = pack("C*", 65, 66);
$arr = unpack("C*", $data);
echo implode(", ", $arr);
?>`,
      hint: 'Panggil unpack("C*", $data).'
    },
    quiz: {
      question: 'Tipe data apakah yang dikembalikan oleh pemanggilan fungsi `unpack()` jika operasi pembongkaran biner sukses?',
      options: [
        'Array asosiatif / numerik berisi data hasil ekstraksi biner',
        'String',
        'Integer',
        'Objek stdClass'
      ],
      correctIndex: 0,
      explanation: 'unpack mengembalikan array yang memetakan label field biner ke nilai PHP.'
    }
  },

  // 444. USLEEP()
  {
    id: 'php-ref-misc-usleep',
    title: 'PHP usleep()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 444,
    overview: 'Kuasai fungsi usleep(): menunda (pause) eksekusi program dalam satuan Mikrodetik (1/1.000.000 detik) untuk throttle API, animasi CLI, dan polling frekuensi tinggi.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">MICRO DELAY</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 444 / 444</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⏱️ Jeda Eksekusi Mikrodetik (usleep)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>usleep(int $microseconds): void</code> menunda eksekusi dalam satuan mikrodetik (<code>1 detik = 1.000.000 mikrodetik</code>). Contoh: <code>usleep(250000)</code> memberikan jeda tepat seperempat detik (250 ms).
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Hasil Penggunaan usleep():</h3>";
$start = hrtime(true);

// Jeda 250.000 mikrodetik (0.25 detik)
usleep(250000);

$end = hrtime(true);
$durasiMs = ($end - $start) / 1e+6;

echo "<p>Jeda 250.000 mikrodetik (250ms): <strong style='color: #059669;'>" . round($durasiMs, 1) . " ms</strong></p>";
?>`,
    codeExplanation: [
      'usleep(250000) menunda proses selama 250 milidetik.'
    ],
    challenge: {
      instruction: 'Jeda program selama 100.000 mikrodetik (0.1 detik) dengan usleep(100000).',
      starterCode: `<?php
usleep(100000);
echo "Jeda 0.1s selesai.";
?>`,
      hint: 'Panggil usleep(100000).'
    },
    quiz: {
      question: 'Berapakah nilai mikrodetik yang harus diberikan ke `usleep()` untuk membuat jeda tepat selama SETENGAH DETIK (0.5 detik)?',
      options: [
        '`500000` (500 Ribu Mikrodetik)',
        '`500`',
        '`5000`',
        '`50`'
      ],
      correctIndex: 0,
      explanation: '0.5 detik = 500.000 mikrodetik.'
    }
  }
];

module.exports = phpPart40RefMisc2;
