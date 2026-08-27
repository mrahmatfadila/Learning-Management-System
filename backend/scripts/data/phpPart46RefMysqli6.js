// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (MYSQLI PART 6: 503-511)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart46RefMysqli6 = [
  // 503. FETCH_ROW
  {
    id: 'php-ref-mysqli-fetch-row',
    title: 'PHP MySQLi: fetch_row()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 503,
    overview: 'Kuasai method $result->fetch_row() / mysqli_fetch_row(): mengambil satu baris data hasil query sebagai Array Numerik murni (indeks 0, 1, 2, ...) yang paling hemat alokasi memori.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">NUMERIC ROW FETCH</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 503 / 511</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔢 Pengambilan Baris Indeks Numerik (fetch_row)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$result->fetch_row(): array|null|false</code> mengembalikan satu baris data dalam format array terindeks numerik (<code>$row[0]</code>, <code>$row[1]</code>). Sangat ideal untuk query agregat sederhana seperti <code>SELECT COUNT(*), SUM(total) FROM orders</code> di mana nama kolom tidak terlalu penting.
          </p>
        </div>
      </div>
    `,
    code: `<?php
class MockResultRow {
    private array $data = [
        [101, "Mastering PHP 8", 250000],
        [102, "PostgreSQL Pro", 350000]
    ];
    private int $idx = 0;

    public function fetch_row(): ?array {
        return $this->data[$this->idx++] ?? null;
    }
}

$res = new MockResultRow();

echo "<h3>Hasil Penggunaan \$result->fetch_row():</h3>";
while ($row = $res->fetch_row()) {
    echo "<p>ID: <strong>$row[0]</strong> | Kursus: <strong style='color:#059669;'>$row[1]</strong> | Harga: Rp " . number_format($row[2], 0, ',', '.') . "</p>";
}
?>`,
    codeExplanation: [
      '$result->fetch_row() mengembalikan array dengan key angka integer [0, 1, 2, ...].',
      'Memiliki konsumsi RAM paling rendah dibanding fetch_assoc() dan fetch_array().'
    ],
    challenge: {
      instruction: 'Ambil kolom pertama $row[0] dari fetch_row().',
      starterCode: `<?php
$row = [1, 'Rahmat', 'admin'];
echo "ID: " . $row[0];
?>`,
      hint: 'Akses elemen pertama $row[0].'
    },
    quiz: {
      question: 'Format array apakah yang dikembalikan oleh `$result->fetch_row()`?',
      options: [
        'Array numerik (indeks angka 0, 1, 2, ...)',
        'Array asosiatif dengan nama kolom',
        'Objek stdClass',
        'String CSV'
      ],
      correctIndex: 0,
      explanation: 'fetch_row selalu mengembalikan array numerik murni.'
    }
  },

  // 504. GET_CLIENT_STATS
  {
    id: 'php-ref-mysqli-get-client-stats',
    title: 'PHP MySQLi: get_client_stats()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 504,
    overview: 'Kuasai fungsi mysqli_get_client_stats(): mendapatkan metrik statistik global penggunaan driver MySQL client (mysqlnd) di seluruh proses PHP.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">GLOBAL CLIENT METRICS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 504 / 511</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📊 Statistik Global Driver MySQL (get_client_stats)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>mysqli_get_client_stats(): array</code> mengembalikan array komprehensif berisi metrik global driver mysqlnd: total koneksi dibuat, memory usage, cache hit rate, query duration, dan payload byte.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Hasil Penggunaan mysqli_get_client_stats():</h3>";
if (function_exists('mysqli_get_client_stats')) {
    $stats = mysqli_get_client_stats();
    echo "<p>Total Bytes Sent: <strong style='color:#059669;'>" . ($stats['bytes_sent'] ?? 0) . " bytes</strong></p>";
    echo "<p>Total Bytes Received: <strong style='color:#4f46e5;'>" . ($stats['bytes_received'] ?? 0) . " bytes</strong></p>";
    echo "<p>Total Query Dijalankan: <strong>" . ($stats['num_queries_executed'] ?? 0) . "</strong></p>";
} else {
    echo "<p>Driver mysqlnd aktif untuk membaca statistik client.</p>";
}
?>`,
    codeExplanation: [
      'mysqli_get_client_stats() membaca performa agregat client-side untuk monitoring APM (Application Performance Monitoring).'
    ],
    challenge: {
      instruction: 'Pahami fungsi mysqli_get_client_stats().',
      starterCode: `<?php
echo "mysqli_get_client_stats() mengembalikan statistik global driver mysqlnd.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Apa perbedaan mendasar antara `mysqli_get_client_stats()` dan `$mysqli->get_connection_stats()`?',
      options: [
        '`mysqli_get_client_stats()` mencakup statistik global seluruh proses PHP, sedangkan `get_connection_stats()` spesifik untuk satu koneksi socket aktif saja',
        '`get_client_stats` hanya untuk query SELECT',
        'Keduanya identik',
        '`get_client_stats` mengembalikan string'
      ],
      correctIndex: 0,
      explanation: 'get_client_stats adalah level global proses, sedangkan get_connection_stats adalah level instance koneksi.'
    }
  },

  // 505. GET_HOST_INFO
  {
    id: 'php-ref-mysqli-get-host-info',
    title: 'PHP MySQLi: get_host_info() / host_info',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 505,
    overview: 'Kuasai properti $mysqli->host_info / mysqli_get_host_info(): mendapatkan string informasi host koneksi dan tipe protokol transportasi jaringan (TCP/IP socket atau UNIX domain socket).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TRANSPORT PROTOCOL</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 505 / 511</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌐 Info Host & Transportasi Socket (host_info)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$mysqli->host_info</code> mengembalikan string seperti <em>"localhost via TCP/IP"</em> atau <em>"Localhost via UNIX socket"</em> untuk memverifikasi jalur transmisi jaringan yang dipakai.
          </p>
        </div>
      </div>
    `,
    code: `<?php
class MockHostInfo {
    public string $host_info = "127.0.0.1 via TCP/IP";
}

$conn = new MockHostInfo();

echo "<h3>Hasil \$mysqli->host_info:</h3>";
echo "<p>Jalur Koneksi: <strong style='color:#059669;'>{$conn->host_info}</strong></p>";
?>`,
    codeExplanation: [
      '$mysqli->host_info memastikan koneksi berjalan lewat UNIX socket lokal yang lebih cepat atau TCP/IP.'
    ],
    challenge: {
      instruction: 'Akses properti host_info dari $mysqli.',
      starterCode: `<?php
$db = (object)['host_info' => 'localhost via TCP/IP'];
echo $db->host_info;
?>`,
      hint: 'Akses $db->host_info.'
    },
    quiz: {
      question: 'Informasi apa sajakah yang terdapat pada string properti `$mysqli->host_info`?',
      options: [
        'Nama host tujuan dan metode koneksi yang digunakan (contoh: "localhost via TCP/IP" atau "UNIX socket")',
        'Hanya IP address',
        'Password database',
        'Nama tabel'
      ],
      correctIndex: 0,
      explanation: 'host_info menjelaskan endpoint host dan jenis protokol transportasinya.'
    }
  },

  // 506. GET_PROTO_INFO
  {
    id: 'php-ref-mysqli-get-proto-info',
    title: 'PHP MySQLi: get_proto_info() / protocol_version',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 506,
    overview: 'Kuasai properti $mysqli->protocol_version / mysqli_get_proto_info(): mengetahui nomor versi protokol wire-protocol client/server MySQL yang digunakan (standar: 10).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">WIRE PROTOCOL</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 506 / 511</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔌 Versi Protokol MySQL (protocol_version)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$mysqli->protocol_version</code> mengembalikan integer nomor versi protokol komunikasi biner MySQL (pada MySQL modern bernilai <code>10</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
class MockProto {
    public int $protocol_version = 10;
}

$db = new MockProto();

echo "<h3>Hasil \$mysqli->protocol_version:</h3>";
echo "<p>Versi Protokol Biner: <strong style='color:#059669;'>{$db->protocol_version}</strong> (MySQL Protocol v10)</p>";
?>`,
    codeExplanation: [
      '$mysqli->protocol_version membaca versi protokol wire MySQL (standar industri: 10).'
    ],
    challenge: {
      instruction: 'Akses protocol_version dari $mysqli.',
      starterCode: `<?php
$conn = (object)['protocol_version' => 10];
echo "Protokol: " . $conn->protocol_version;
?>`,
      hint: 'Akses $conn->protocol_version.'
    },
    quiz: {
      question: 'Berapakah nilai standar `$mysqli->protocol_version` pada server MySQL/MariaDB modern?',
      options: [
        'Integer `10`',
        'Integer `1`',
        'Integer `8`',
        'Integer `4`'
      ],
      correctIndex: 0,
      explanation: 'Protokol client/server MySQL menggunakan versi 10 (Protocol version 10).'
    }
  },

  // 507. INIT
  {
    id: 'php-ref-mysqli-init',
    title: 'PHP MySQLi: init() / mysqli_init()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 507,
    overview: 'Kuasai method $mysqli->init() / mysqli_init(): menginisialisasi resource koneksi MySQLi baru tanpa membuka koneksi socket seketika (langkah persiapan sebelum ssl_set, options, dan real_connect).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">INITIALIZATION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 507 / 511</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚙️ Inisialisasi Objek Pra-Koneksi (init)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>mysqli_init(): mysqli|false</code> membuat handle objek koneksi kosong. Sangat esensial ketika Anda perlu menyetel opsi timeout (<code>$mysqli->options()</code>) atau sertifikat SSL (<code>$mysqli->ssl_set()</code>) sebelum pemanggilan <code>$mysqli->real_connect()</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Alur Kerja mysqli_init():</h3>";
$initPattern = <<<PHP
<?php
// 1. Buat handle objek kosong
\$mysqli = mysqli_init();

// 2. Konfigurasi opsi sebelum socket dibuka
\$mysqli->options(MYSQLI_OPT_CONNECT_TIMEOUT, 3); // Timeout 3 detik

// 3. Buka koneksi nyata
\$mysqli->real_connect("localhost", "root", "", "app_db");
?>
PHP;

echo "<pre style='background:#0f172a; color:#38bdf8; padding:12px; border-radius:8px;'>";
echo htmlspecialchars($initPattern);
echo "</pre>";
?>`,
    codeExplanation: [
      'mysqli_init() memisahkan pembuatan objek dari pembukaan socket jaringan.'
    ],
    challenge: {
      instruction: 'Pahami peran mysqli_init() sebelum real_connect().',
      starterCode: `<?php
echo "\$mysqli = mysqli_init(); memungkinkan konfigurasi sebelum koneksi dibuka.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Kapan programmer wajib menggunakan `mysqli_init()` alih-alih `new mysqli(...)` langsung?',
      options: [
        'Ketika perlu mengonfigurasi opsi pra-koneksi (seperti batas waktu koneksi atau sertifikat SSL) sebelum socket jaringan terhubung',
        'Hanya untuk query SELECT',
        'Ketika password kosong',
        'Tidak pernah'
      ],
      correctIndex: 0,
      explanation: 'mysqli_init memungkinkan konfigurasi opsi (options/ssl_set) sebelum handshake socket jaringan dilakukan.'
    }
  },

  // 508. POLL
  {
    id: 'php-ref-mysqli-poll',
    title: 'PHP MySQLi: poll() / mysqli_poll()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 508,
    overview: 'Kuasai fungsi mysqli_poll(): melakukan polling status beberapa koneksi query asinkron (Asynchronous Queries) secara non-blocking secara simultan (High-Concurrency Parallel Queries).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ASYNC PARALLEL</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 508 / 511</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚡ Polling Query Paralel Asinkron (poll)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>mysqli_poll(array &$read, array &$error, array &$reject, int $seconds, int $microseconds = 0): int|false</code> memantau banyak koneksi yang menjalankan query asinkron (<code>MYSQLI_ASYNC</code>), memungkinkan eksekusi 5+ query database secara paralel bersamaan!
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Konsep Query Paralel Asinkron dengan mysqli_poll:</h3>";
$pollCode = <<<PHP
<?php
\$conn1 = new mysqli("localhost", "root", "", "db");
\$conn2 = new mysqli("localhost", "root", "", "db");

// Jalankan query secara asinkron (paralel)
\$conn1->query("SELECT * FROM users", MYSQLI_ASYNC);
\$conn2->query("SELECT * FROM products", MYSQLI_ASYNC);

\$links = [\$conn1, \$conn2];
\$errors = [];
\$reject = [];

// Tunggu hingga ada hasil yang siap dibaca
if (mysqli_poll(\$links, \$errors, \$reject, 5) > 0) {
    foreach (\$links as \$link) {
        \$result = \$link->reap_async_query();
        // Proses hasil query
    }
}
?>
PHP;

echo "<pre style='background:#0f172a; color:#38bdf8; padding:12px; border-radius:8px;'>";
echo htmlspecialchars($pollCode);
echo "</pre>";
?>`,
    codeExplanation: [
      'mysqli_poll() memangkas waktu total dari T1 + T2 menjadi MAX(T1, T2) dengan mengeksekusi query secara bersamaan.'
    ],
    challenge: {
      instruction: 'Pahami konsep eksekusi query asinkron paralel dengan mysqli_poll().',
      starterCode: `<?php
echo "mysqli_poll() memungkinkan eksekusi query paralel non-blocking.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Flag konstanta apakah yang harus dikirim ke `$mysqli->query($sql, ...)` agar query dieksekusi secara asinkron untuk dipantau oleh `mysqli_poll()`?',
      options: [
        '`MYSQLI_ASYNC`',
        '`MYSQLI_PARALLEL`',
        '`MYSQLI_BACKGROUND`',
        '`MYSQLI_NON_BLOCKING`'
      ],
      correctIndex: 0,
      explanation: 'Flag MYSQLI_ASYNC menjalankan query di latar belakang tanpa menunggu respons seketika.'
    }
  },

  // 509. REAP_ASYNC_QUERY
  {
    id: 'php-ref-mysqli-reap-async-query',
    title: 'PHP MySQLi: reap_async_query()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 509,
    overview: 'Kuasai method $mysqli->reap_async_query() / mysqli_reap_async_query(): memanen/mengambil hasil dari query yang sebelumnya dikirim dengan mode asinkron MYSQLI_ASYNC.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ASYNC HARVEST</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 509 / 511</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌾 Memanen Hasil Query Asinkron (reap_async_query)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$mysqli->reap_async_query(): mysqli_result|bool</code> mengambil result set dari koneksi yang telah selesai memproses query asinkron setelah ditandai siap oleh <code>mysqli_poll()</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Alur Eksekusi Asinkron: query(..., MYSQLI_ASYNC) -> poll() -> reap_async_query()</h3>";
echo "<ol style='line-height:1.8;'>";
echo "<li>Kirim query: <code>\$mysqli->query(\"SELECT * FROM sales\", MYSQLI_ASYNC);</code></li>";
echo "<li>Lakukan tugas PHP lain sembari database memproses query di latar belakang...</li>";
echo "<li>Panen hasil: <code><strong style='color:#059669;'>\$result = \$mysqli->reap_async_query();</strong></code></li>";
echo "</ol>";
?>`,
    codeExplanation: [
      'reap_async_query() melengkapi siklus query asinkron non-blocking di PHP.'
    ],
    challenge: {
      instruction: 'Pahami fungsi reap_async_query.',
      starterCode: `<?php
echo "\$res = \$mysqli->reap_async_query(); mengambil hasil query asinkron.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Kapan method `$mysqli->reap_async_query()` harus dipanggil?',
      options: [
        'Setelah query asinkron (`MYSQLI_ASYNC`) selesai diproses dan siap dibaca (biasanya divalidasi via `mysqli_poll`)',
        'Sebelum query dikirim',
        'Hanya jika terjadi error',
        'Kapan saja'
      ],
      correctIndex: 0,
      explanation: 'reap_async_query dipanggil untuk mengambil result set dari query asinkron yang telah selesai diproses.'
    }
  },

  // 510. SET_LOCAL_INFILE_HANDLER
  {
    id: 'php-ref-mysqli-set-local-infile-handler',
    title: 'PHP MySQLi: set_local_infile_handler()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 510,
    overview: 'Kuasai fungsi mysqli_set_local_infile_handler(): mendaftarkan fungsi callback kustom untuk mengontrol proses impor file masif LOAD DATA LOCAL INFILE secara aman.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">BULK IMPORT HANDLER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 510 / 511</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📥 Handler Impor Data Masif (set_local_infile_handler)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>mysqli_set_local_infile_handler(mysqli $link, callable $callback): bool</code> mencegat operasi <code>LOAD DATA LOCAL INFILE</code> dengan fungsi callback PHP untuk memfilter baris data CSV secara on-the-fly sebelum dimasukkan ke dalam tabel database.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Pola Callback LOAD DATA LOCAL INFILE Handler:</h3>";
$handlerCode = <<<PHP
<?php
\$mysqli = new mysqli("localhost", "root", "", "db");

// Daftarkan handler kustom
mysqli_set_local_infile_handler(\$mysqli, function(\$stream, &\$buffer, \$buflen, &\$errormsg) {
    // Baca dan sanitasi chunk data file CSV sebelum masuk database
    \$buffer = fread(\$stream, \$buflen);
    return strlen(\$buffer);
});

\$mysqli->query("LOAD DATA LOCAL INFILE 'transaksi.csv' INTO TABLE transaksi");
mysqli_set_local_infile_default(\$mysqli); // Kembalikan ke handler bawaan
?>
PHP;

echo "<pre style='background:#0f172a; color:#38bdf8; padding:12px; border-radius:8px;'>";
echo htmlspecialchars($handlerCode);
echo "</pre>";
?>`,
    codeExplanation: [
      'set_local_infile_handler() memungkinkan transformasi data streaming kecepatan tinggi saat bulk insert CSV jutaan baris.'
    ],
    challenge: {
      instruction: 'Pahami fungsi callback set_local_infile_handler.',
      starterCode: `<?php
echo "mysqli_set_local_infile_handler mendaftarkan callback impor LOAD DATA.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Perintah SQL mass-import apakah yang dikontrol oleh `mysqli_set_local_infile_handler()`?',
      options: [
        '`LOAD DATA LOCAL INFILE`',
        '`BULK INSERT`',
        '`IMPORT CSV`',
        '`SELECT INTO OUTFILE`'
      ],
      correctIndex: 0,
      explanation: 'set_local_infile_handler bertindak sebagai stream interceptor untuk operasi LOAD DATA LOCAL INFILE.'
    }
  },

  // 511. SSL_SET
  {
    id: 'php-ref-mysqli-ssl-set',
    title: 'PHP MySQLi: ssl_set() / mysqli_ssl_set()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 511,
    overview: 'Kuasai method $mysqli->ssl_set() / mysqli_ssl_set(): mengonfigurasi jalur sertifikat kunci privat SSL/TLS (key, cert, CA certificate, CA path, cipher) untuk koneksi database terenkripsi kelas enterprise.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ENTERPRISE SSL/TLS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 511 / 511</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔐 Konfigurasi Enkripsi SSL/TLS (ssl_set)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$mysqli->ssl_set(?string $key, ?string $certificate, ?string $ca_certificate, ?string $ca_path, ?string $cipher_algos): bool</code> mengaktifkan enkripsi SSL end-to-end antara server PHP dan MySQL. Wajib untuk koneksi database lintas cloud / public internet (AWS RDS, Google Cloud SQL, Azure Database for MySQL).
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Konfigurasi Koneksi Cloud MySQL dengan TLS/SSL:</h3>";
$sslSetup = <<<PHP
<?php
// 1. Inisialisasi handle
\$mysqli = mysqli_init();

// 2. Setel sertifikat SSL Cloud Provider (misal AWS RDS CA)
\$mysqli->ssl_set(
    null,                          // Private key klien (opsional)
    null,                          // Sertifikat klien (opsional)
    "/etc/ssl/certs/global-bundle.pem", // CA Bundle Server
    null,                          // CA Directory
    "DHE-RSA-AES256-SHA:AES128-SHA" // Cipher Suite
);

// 3. Hubungkan dengan flag SSL aktif
\$mysqli->real_connect("db-cluster.aws.com", "app_admin", "strong_pass", "core_db", 3306, null, MYSQLI_CLIENT_SSL);
echo "Tersambung dengan aman melalui enkripsi TLS/SSL!";
?>
PHP;

echo "<pre style='background:#0f172a; color:#38bdf8; padding:12px; border-radius:8px;'>";
echo htmlspecialchars($sslSetup);
echo "</pre>";
?>`,
    codeExplanation: [
      '$mysqli->ssl_set() melindungi data sensitif kredensial dan query dari intersepsi sniffing jaringan (Man-In-The-Middle attack).'
    ],
    challenge: {
      instruction: 'Pahami fungsi ssl_set untuk keamanan TLS/SSL database.',
      starterCode: `<?php
echo "\$mysqli->ssl_set(...) mengamankan koneksi dengan enkripsi TLS.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Parameter apakah pada `$mysqli->ssl_set()` yang digunakan untuk menentukan file sertifikat Certificate Authority (CA) server?',
      options: [
        'Parameter ke-3: `$ca_certificate` (contoh: path ke `ca-cert.pem` atau `global-bundle.pem`)',
        'Parameter ke-1: `$key`',
        'Parameter ke-5: `$cipher_algos`',
        'Parameter ke-2: `$certificate`'
      ],
      correctIndex: 0,
      explanation: 'Parameter ketiga $ca_certificate adalah lokasi file sertifikat CA otoritatif untuk memverifikasi keaslian server MySQL.'
    }
  }
];

module.exports = phpPart46RefMysqli6;
