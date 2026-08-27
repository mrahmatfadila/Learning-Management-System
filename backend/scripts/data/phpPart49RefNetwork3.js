// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (NETWORK PART 3: 534-544)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart49RefNetwork3 = [
  // 534. IP2LONG
  {
    id: 'php-ref-net-ip2long',
    title: 'PHP ip2long()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 534,
    overview: 'Kuasai fungsi ip2long(): mengonversi string alamat IPv4 desimal bertitik (misal: "192.168.1.1") menjadi integer 32-bit untuk penyimpanan database super cepat dan pencarian subnet IP CIDR.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">IP CONVERSION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 534 / 544</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔢 Konversi IPv4 ke Integer (ip2long)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ip2long(string $ip): int|false</code> mengubah IPv4 menjadi signed integer 32-bit. Menggunakan <code>sprintf('%u', ip2long($ip))</code> mengubahnya menjadi unsigned integer yang sangat efisien untuk index pencarian rentang IP (Geolokasi IP) di database <code>INT UNSIGNED</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$ip = "192.168.1.1";

$ipInteger = ip2long($ip);
$ipUnsigned = sprintf('%u', $ipInteger);

echo "<h3>Hasil Penggunaan ip2long():</h3>";
echo "<p>Alamat IPv4 : <strong>$ip</strong></p>";
echo "<p>Integer 32-bit : <strong style='color:#059669; font-size:18px;'>$ipUnsigned</strong> ($ipInteger)</p>";
?>`,
    codeExplanation: [
      'ip2long($ip) mengonversi format "a.b.c.d" menjadi formula matematis (a*256^3 + b*256^2 + c*256 + d).'
    ],
    challenge: {
      instruction: 'Ubah "127.0.0.1" ke integer dengan ip2long("127.0.0.1").',
      starterCode: `<?php
echo ip2long("127.0.0.1");
?>`,
      hint: 'Panggil ip2long("127.0.0.1").'
    },
    quiz: {
      question: 'Tipe data kolom database SQL apakah yang paling optimal dan hemat tempat untuk menyimpan hasil `sprintf("%u", ip2long($ip))`?',
      options: [
        '`INT UNSIGNED` (hanya 4 byte memori)',
        '`VARCHAR(45)`',
        '`TEXT`',
        '`FLOAT`'
      ],
      correctIndex: 0,
      explanation: 'IPv4 integer muat sempurna dalam kolom INT UNSIGNED 4 byte.'
    }
  },

  // 535. LONG2IP
  {
    id: 'php-ref-net-long2ip',
    title: 'PHP long2ip()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 535,
    overview: 'Kuasai fungsi long2ip(): mengonversi integer alamat 32-bit kembali menjadi format string IPv4 desimal bertitik standar (a.b.c.d).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">INTEGER TO IP</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 535 / 544</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔄 Konversi Integer ke IPv4 (long2ip)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>long2ip(int|string $ip): string|false</code> membaca angka integer 32-bit dari database dan mengubahnya kembali menjadi string IPv4 yang mudah dibaca manusia.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$integerDb = 2130706433; // 127.0.0.1
$ipFormatted = long2ip($integerDb);

echo "<h3>Hasil Penggunaan long2ip():</h3>";
echo "<p>Integer dari Database : <code>$integerDb</code></p>";
echo "<p>Format IPv4 Standar  : <strong style='color:#059669; font-size:18px;'>$ipFormatted</strong></p>";
?>`,
    codeExplanation: [
      'long2ip() adalah kebalikan langsung dari fungsi ip2long().'
    ],
    challenge: {
      instruction: 'Ubah integer 2130706433 ke IP dengan long2ip(2130706433).',
      starterCode: `<?php
echo long2ip(2130706433);
?>`,
      hint: 'Panggil long2ip(2130706433).'
    },
    quiz: {
      question: 'Berapakah string IPv4 yang dihasilkan oleh `long2ip(2130706433)`?',
      options: [
        'String `"127.0.0.1"`',
        'String `"192.168.1.1"`',
        'String `"0.0.0.0"`',
        'String `"255.255.255.255"`'
      ],
      correctIndex: 0,
      explanation: 'Integer 2130706433 merepresentasikan IP loopback 127.0.0.1.'
    }
  },

  // 536. OPENLOG
  {
    id: 'php-ref-net-openlog',
    title: 'PHP openlog()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 536,
    overview: 'Kuasai fungsi openlog(): membuka koneksi ke fasilitas sistem logging OS (Syslog) dengan tag identitas aplikasi, opsi PID proses, dan fasilitas logging.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SYS LOGGING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 536 / 544</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📋 Inisialisasi Logger Sistem (openlog)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>openlog(string $prefix, int $flags, int $facility): bool</code> mengonfigurasi pencatatan log ke <code>/var/log/syslog</code> atau journald. Opsi <code>LOG_PID</code> menyertakan Process ID pada setiap entri log.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Buka log sistem dengan tag identitas "LMS-Backend"
$ok = openlog("LMS-Backend", LOG_PID | LOG_CONS, LOG_LOCAL0);

echo "<h3>Hasil Penggunaan openlog():</h3>";
echo "<p>Status Inisialisasi Syslog: <strong style='color:#059669;'>" . ($ok ? "Berhasil Dibuka" : "Gagal") . "</strong></p>";
closelog();
?>`,
    codeExplanation: [
      'openlog() memberi label tag pada setiap pesan log sehingga mudah difilter di log management tool (Grafana Loki, Datadog).'
    ],
    challenge: {
      instruction: 'Pahami inisialisasi openlog.',
      starterCode: `<?php
openlog("MyApp", LOG_PID, LOG_USER);
closelog();
echo "Log configured.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Flag konstanta apakah pada `openlog()` yang menyertakan nomor Process ID (PID) pada setiap baris log?',
      options: [
        '`LOG_PID`',
        '`LOG_NOW`',
        '`LOG_TIME`',
        '`LOG_DEBUG`'
      ],
      correctIndex: 0,
      explanation: 'LOG_PID menambahkan informasi PID proses saat ini ke setiap baris log.'
    }
  },

  // 537. PFSOCKOPEN
  {
    id: 'php-ref-net-pfsockopen',
    title: 'PHP pfsockopen()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 537,
    overview: 'Kuasai fungsi pfsockopen(): membuka koneksi Persistent Socket TCP/IP yang tetap terbuka (tidak ditutup saat skrip PHP selesai) untuk digunakan kembali pada request berikutnya (Connection Pooling Socket).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PERSISTENT SOCKETS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 537 / 544</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚡ Socket Persisten Berkinerja Tinggi (pfsockopen)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>pfsockopen(string $hostname, int $port = -1, int &$error_code = null, string &$error_message = null, ?float $timeout = null): resource|false</code> bekerja persis seperti <code>fsockopen()</code> namun koneksi socket tetap bertahan melintasi siklus HTTP request, mengeliminasi biaya handshake TCP/TLS.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Perbandingan fsockopen vs pfsockopen:</h3>";
echo "<ul>";
echo "<li><code>fsockopen():</code> Membuka socket baru & otomatis ditutup saat skrip PHP selesai.</li>";
echo "<li><strong style='color:#059669;'>pfsockopen():</strong> Mendaur ulang socket yang sudah ada di memori proses, 3-5x lebih cepat untuk antrean pesan Redis/Memcached.</li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'pfsockopen() mempertahankan koneksi socket aktif di level worker PHP-FPM.'
    ],
    challenge: {
      instruction: 'Pahami fungsi socket persisten pfsockopen.',
      starterCode: `<?php
echo "pfsockopen() mendaur ulang socket yang sudah ada.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Apa keunggulan performa utama `pfsockopen()` dibandingkan `fsockopen()` standar?',
      options: [
        'Menghilangkan overhead TCP handshake 3-way dengan menggunakan kembali koneksi socket yang sudah ada pada pool proses PHP-FPM',
        'Mengenkripsi semua data otomatis',
        'Mendukung IPv7',
        'Tidak ada bedanya'
      ],
      correctIndex: 0,
      explanation: 'pfsockopen mendaur ulang koneksi persistent socket.'
    }
  },

  // 538. SETCOOKIE
  {
    id: 'php-ref-net-setcookie',
    title: 'PHP setcookie()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 538,
    overview: 'Kuasai fungsi setcookie(): mengirim cookie HTTP ke browser dengan parameter keamanan enterprise (httponly, secure, samesite: Strict/Lax) untuk mencegah serangan XSS dan CSRF.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">SECURE COOKIES</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 538 / 544</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🍪 Pengaturan Cookie Aman (setcookie)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>setcookie(string $name, string $value = "", array $options = []): bool</code>. Di PHP modern, parameter opsi array memungkinkan pengaturan <code>['httponly' => true, 'secure' => true, 'samesite' => 'Strict']</code> untuk perlindungan penuh dari pencurian token sesi via XSS.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Format Pembuatan Cookie Aman (PHP 7.3+ / 8.x):</h3>";
$cookieCode = <<<PHP
<?php
// Setel cookie sesi aman (JWT / Refresh Token)
setcookie("auth_token", "jwt_token_value_here", [
    'expires'  => time() + (86400 * 30), // 30 hari
    'path'     => '/',
    'domain'   => 'devgrow.id',
    'secure'   => true,     // Hanya dikirim via HTTPS
    'httponly' => true,     // Mencegah akses dari JavaScript document.cookie (Anti XSS)
    'samesite' => 'Strict'  // Mencegah pengiriman lintas situs (Anti CSRF)
]);

// Cara Menghapus Cookie: setel waktu expires ke masa lalu (time() - 3600)
setcookie("auth_token", "", ['expires' => time() - 3600, 'path' => '/']);
?>
PHP;

echo "<pre style='background:#0f172a; color:#38bdf8; padding:12px; border-radius:8px;'>";
echo htmlspecialchars($cookieCode);
echo "</pre>";
?>`,
    codeExplanation: [
      'httponly: true memblokir JavaScript agar hacker tidak bisa mencuri cookie sesi lewat celah XSS.',
      'samesite: "Strict" memblokir pengiriman cookie saat di-request dari website lain (Anti CSRF).'
    ],
    challenge: {
      instruction: 'Pahami cara menghapus cookie dengan menyetel expires ke time() - 3600.',
      starterCode: `<?php
echo "Hapus cookie: setcookie('nama', '', time() - 3600);";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Opsi cookie apakah yang WAJIB disetel bernilai `true` untuk mencegah pencurian token autentikasi oleh script JavaScript jahat (Cross-Site Scripting - XSS)?',
      options: [
        '`httponly` (`true`)',
        '`secure`',
        '`samesite`',
        '`path`'
      ],
      correctIndex: 0,
      explanation: 'httponly menyembunyikan cookie dari akses document.cookie di browser DOM.'
    }
  },

  // 539. SETRAWCOOKIE
  {
    id: 'php-ref-net-setrawcookie',
    title: 'PHP setrawcookie()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 539,
    overview: 'Kuasai fungsi setrawcookie(): mengirimkan cookie HTTP ke browser TANPA melakukan URL-encoding otomatis pada nilai cookie-nya.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">RAW COOKIES</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 539 / 544</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🍪 Cookie Tanpa URL-Encoding (setrawcookie)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>setrawcookie(string $name, string $value = "", array $options = []): bool</code> bekerja identik dengan <code>setcookie()</code> tetapi tidak memanggil <code>urlencode()</code> pada <code>$value</code> (sangat berguna jika nilai cookie sudah di-encode sebelumnya atau format Base64 kustom).
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Perbedaan setcookie() vs setrawcookie():</h3>";
echo "<ul>";
echo "<li><code>setcookie('tag', 'dev grow'):</code> Mengirim header <code>Set-Cookie: tag=dev+grow</code> (di-urlencode otomatis).</li>";
echo "<li><code>setrawcookie('tag', 'dev_grow'):</code> Mengirim nilai persis apa adanya tanpa modifikasi encoding.</li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'setrawcookie() mencegah double-encoding pada token Base64 yang sudah berisi padding URL-safe.'
    ],
    challenge: {
      instruction: 'Pahami fungsi setrawcookie.',
      starterCode: `<?php
echo "setrawcookie() mengirim cookie tanpa urlencode otomatis.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Apa perbedaan utama antara `setcookie()` dan `setrawcookie()`?',
      options: [
        '`setcookie()` otomatis melakukan urlencode pada nilai cookie, sedangkan `setrawcookie()` mengirim nilai persis apa adanya',
        '`setrawcookie()` hanya untuk HTTPS',
        '`setcookie()` tidak mendukung masa berlaku',
        'Keduanya identik'
      ],
      correctIndex: 0,
      explanation: 'setrawcookie melewatkan proses otomatisasi URL encoding.'
    }
  },

  // 540. SOCKET_GET_STATUS
  {
    id: 'php-ref-net-socket-get-status',
    title: 'PHP socket_get_status() / stream_get_meta_data()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 540,
    overview: 'Kuasai fungsi socket_get_status(): alias resmi dari stream_get_meta_data() untuk membaca status socket (EOF, timeout, unread bytes, mode blocking).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">STREAM META</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 540 / 544</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📊 Status Stream Socket (socket_get_status)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>socket_get_status(resource $stream): array</code> mengembalikan array meta: <code>timed_out</code>, <code>blocked</code>, <code>eof</code>, <code>unread_bytes</code>, dan <code>stream_type</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$tempStream = fopen("php://memory", "r+");
$status = socket_get_status($tempStream);

echo "<h3>Hasil Pengujian socket_get_status():</h3>";
echo "<ul>";
echo "<li>Timed Out : <strong>" . ($status['timed_out'] ? 'Ya' : 'Tidak') . "</strong></li>";
echo "<li>Blocked   : <strong>" . ($status['blocked'] ? 'Ya' : 'Tidak') . "</strong></li>";
echo "<li>EOF       : <strong>" . ($status['eof'] ? 'Ya' : 'Tidak') . "</strong></li>";
echo "<li>Stream    : <strong style='color:#059669;'>{$status['stream_type']}</strong></li>";
echo "</ul>";
fclose($tempStream);
?>`,
    codeExplanation: [
      'socket_get_status($stream) mendeteksi apakah pembacaan socket mengalami timeout jaringan.'
    ],
    challenge: {
      instruction: 'Pahami fungsi socket_get_status pada stream.',
      starterCode: `<?php
$s = fopen("php://temp", "r");
$meta = socket_get_status($s);
echo "Type: " . $meta['stream_type'];
fclose($s);
?>`,
      hint: 'Panggil socket_get_status($s).'
    },
    quiz: {
      question: 'Fungsi modern apakah yang merupakan target alias resmi dari `socket_get_status()`?',
      options: [
        '`stream_get_meta_data()`',
        '`stream_status()`',
        '`socket_info()`',
        '`stream_info()`'
      ],
      correctIndex: 0,
      explanation: 'socket_get_status adalah alias dari stream_get_meta_data.'
    }
  },

  // 541. SOCKET_SET_BLOCKING
  {
    id: 'php-ref-net-socket-set-blocking',
    title: 'PHP socket_set_blocking() / stream_set_blocking()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 541,
    overview: 'Kuasai fungsi socket_set_blocking(): mengatur mode blocking atau non-blocking pada stream socket untuk event-driven I/O asynchronous.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">NON-BLOCKING I/O</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 541 / 544</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚡ Mode Socket Blocking vs Non-Blocking (socket_set_blocking)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>socket_set_blocking(resource $stream, bool $enable): bool</code> (alias <code>stream_set_blocking()</code>). Pada mode non-blocking (<code>$enable = false</code>), pemanggilan <code>fgets()</code> atau <code>fread()</code> akan langsung mengembalikan data yang ada tanpa menunggu server lain selesai mengirim (fondasi arsitektur ReactPHP / Swoole).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$stream = fopen("php://temp", "r+");

// Nonaktifkan blocking mode (Non-blocking I/O)
socket_set_blocking($stream, false);

echo "<h3>Hasil Pengaturan socket_set_blocking:</h3>";
echo "<p style='color:#059669;'>✓ Mode Non-blocking aktif: Operasi baca stream tidak akan pernah menggantung (freeze) aplikasi.</p>";
fclose($stream);
?>`,
    codeExplanation: [
      'socket_set_blocking($stream, false) memungkinkan pembuatan server socket asynchronous non-blocking di PHP.'
    ],
    challenge: {
      instruction: 'Pahami fungsi socket_set_blocking.',
      starterCode: `<?php
echo "socket_set_blocking(\$s, false) mengaktifkan non-blocking I/O.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Apa perilaku fungsi `fread()` ketika stream socket berada dalam mode Non-Blocking (`enable = false`)?',
      options: [
        'Langsung mengembalikan buffer data yang sudah ada di socket saat itu juga tanpa menunggu (tidak freeze)',
        'Menunggu sampai seluruh 1MB data selesai',
        'Memicu Fatal Error',
        'Menutup socket'
      ],
      correctIndex: 0,
      explanation: 'Non-blocking I/O mengembalikan kontrol eksekusi seketika tanpa menahan proses.'
    }
  },

  // 542. SOCKET_SET_TIMEOUT
  {
    id: 'php-ref-net-socket-set-timeout',
    title: 'PHP socket_set_timeout() / stream_set_timeout()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 542,
    overview: 'Kuasai fungsi socket_set_timeout(): mengatur batas waktu maksimum (Read/Write Timeout) pada stream socket sebelum operasi dibatalkan.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SOCKET TIMEOUT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 542 / 544</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⏳ Batas Waktu Socket (socket_set_timeout)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>socket_set_timeout(resource $stream, int $seconds, int $microseconds = 0): bool</code> (alias <code>stream_set_timeout()</code>) mencegah proses PHP menggantung tanpa batas jika server remote mengalami downtime.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$stream = fopen("php://temp", "r+");

// Setel timeout baca maksimal 3 detik + 500.000 mikrodetik (3.5 detik)
socket_set_timeout($stream, 3, 500000);

echo "<h3>Hasil Pengaturan socket_set_timeout:</h3>";
echo "<p style='color:#059669;'>✓ Batas waktu pembacaan socket diatur ke 3.5 detik.</p>";
fclose($stream);
?>`,
    codeExplanation: [
      'socket_set_timeout() melindungi API client dari hanging saat server remote tidak merespons.'
    ],
    challenge: {
      instruction: 'Pahami fungsi socket_set_timeout.',
      starterCode: `<?php
echo "socket_set_timeout(\$stream, 5) mengatur timeout ke 5 detik.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Fungsi modern apakah yang merupakan target alias resmi dari `socket_set_timeout()`?',
      options: [
        '`stream_set_timeout()`',
        '`socket_timeout()`',
        '`set_socket_time()`',
        '`stream_timeout()`'
      ],
      correctIndex: 0,
      explanation: 'socket_set_timeout adalah alias dari stream_set_timeout.'
    }
  },

  // 543. SYSLOG
  {
    id: 'php-ref-net-syslog',
    title: 'PHP syslog()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 543,
    overview: 'Kuasai fungsi syslog(): mencatat pesan log sistem operasi dengan tingkat prioritas resmi syslog RFC 5424 (LOG_EMERG, LOG_ALERT, LOG_CRIT, LOG_ERR, LOG_WARNING, LOG_NOTICE, LOG_INFO, LOG_DEBUG).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SYSTEM LOG</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 543 / 544</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📝 Pencatatan Log Sistem (syslog)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>syslog(int $priority, string $message): bool</code> mengirim pesan ke log daemon OS Linux. Sangat terintegrasi dengan SIEM (Security Information and Event Management) untuk audit trail keamanan.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Tingkat Prioritas Log Syslog (RFC 5424):</h3>";
$priorities = [
    'LOG_EMERG'   => 'Sistem tidak dapat digunakan (Panic)',
    'LOG_ALERT'   => 'Tindakan harus segera diambil',
    'LOG_CRIT'    => 'Kondisi kritis (Database cluster down)',
    'LOG_ERR'     => 'Kondisi error pemrosesan',
    'LOG_WARNING' => 'Peringatan potensi masalah',
    'LOG_NOTICE'  => 'Kejadian normal namun signifikan',
    'LOG_INFO'    => 'Informasi alur operasional',
    'LOG_DEBUG'   => 'Pesan debugging pengembang',
];

echo "<ul>";
foreach ($priorities as $lvl => $desc) {
    echo "<li><code>$lvl</code>: <strong>$desc</strong></li>";
}
echo "</ul>";
?>`,
    codeExplanation: [
      'syslog(LOG_ERR, "Pesan error") mengirim alert ke log server terpusat.'
    ],
    challenge: {
      instruction: 'Pahami fungsi pencatatan log dengan syslog(LOG_INFO, "Pesan").',
      starterCode: `<?php
echo "syslog(LOG_INFO, 'Transaksi sukses'); mencatat log ke syslog daemon.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Tingkat prioritas log tertinggi manakah yang merepresentasikan kondisi sistem darurat/panic pada `syslog()`?',
      options: [
        '`LOG_EMERG` (Emergency)',
        '`LOG_ERR`',
        '`LOG_CRIT`',
        '`LOG_ALERT`'
      ],
      correctIndex: 0,
      explanation: 'LOG_EMERG (0) adalah level prioritas log paling gawat pada standar syslog.'
    }
  },

  // 544. INET_NTOP STANDALONE / NETWORK COMPLETE ARCHITECTURE
  {
    id: 'php-ref-net-inet-ntop',
    title: 'PHP inet_ntop() & Arsitektur Jaringan Backend',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 544,
    overview: 'Kuasai fungsi inet_ntop(): decoding alamat biner 4-byte/16-byte ke format IPv4/IPv6 teks dan rangkuman arsitektur jaringan PHP backend.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">NETWORK COMPLETE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 544 / 544</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌐 Rekapitulasi Modul Jaringan PHP (Network Recap)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>inet_ntop(string $ip): string|false</code> melengkapi toolkit jaringan PHP untuk memanipulasi protokol TCP/IP, DNS records, HTTP headers, socket stream, dan audit trail log.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$binaryIpv4 = chr(127) . chr(0) . chr(0) . chr(1);
$textIp = inet_ntop($binaryIpv4);

echo "<h3>Hasil Penggunaan inet_ntop():</h3>";
echo "<p>Biner 4-byte : <code>" . bin2hex($binaryIpv4) . "</code> (Hex: 7f000001)</p>";
echo "<p>IP Teks Hasil : <strong style='color:#059669; font-size:18px;'>$textIp</strong></p>";
echo "<p style='color:green;'>🎉 Selamat! Seluruh referensi Network PHP berhasil Anda kuasai!</p>";
?>`,
    codeExplanation: [
      'inet_ntop() menyelesaikan decoding biner IP ke representasi string terbaca.'
    ],
    challenge: {
      instruction: 'Pahami peran inet_ntop() dalam membaca biner IP.',
      starterCode: `<?php
echo "inet_ntop mengonversi biner IP ke string terbaca.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Berapakah jumlah karakter biner yang diterima oleh `inet_ntop()` untuk alamat IPv4 standar?',
      options: [
        'Tepat `4 karakter / 4 byte biner`',
        '16 byte',
        '32 byte',
        '8 byte'
      ],
      correctIndex: 0,
      explanation: 'IPv4 berukuran 32 bit = 4 byte biner.'
    }
  }
];

module.exports = phpPart49RefNetwork3;
