// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (MYSQLI PART 5: 487-505)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart45RefMysqli5 = [
  // 487. REAL_CONNECT
  {
    id: 'php-ref-mysqli-real-connect',
    title: 'PHP MySQLi: real_connect()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 487,
    overview: 'Kuasai method $mysqli->real_connect() / mysqli_real_connect(): membuka koneksi ke server MySQL dengan opsi lanjutan seperti SSL/TLS encryption, Unix socket, dan flag koneksi spesifik.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ADVANCED CONNECT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 487 / 505</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔌 Koneksi Lanjutan dengan SSL (real_connect)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$mysqli->real_connect(string $host, string $user, string $password, string $database, int $port, string $socket, int $flags): bool</code> digunakan setelah <code>mysqli_init()</code> untuk koneksi dengan konfigurasi SSL/TLS atau opsi flag khusus seperti <code>MYSQLI_CLIENT_SSL</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Pola Koneksi SSL dengan real_connect():</h3>";
$sslCode = <<<PHP
<?php
// 1. Inisialisasi tanpa koneksi
\$mysqli = mysqli_init();

// 2. Setel opsi SSL sebelum koneksi
\$mysqli->ssl_set('/etc/ssl/client-key.pem', '/etc/ssl/client-cert.pem',
                 '/etc/ssl/ca-cert.pem', null, null);

// 3. Buka koneksi terenkripsi
\$mysqli->real_connect('db.produksi.com', 'app_user', 'p@ss', 'appdb',
                      3306, null, MYSQLI_CLIENT_SSL);
?>
PHP;

echo "<pre style='background:#0f172a; color:#38bdf8; padding:12px; border-radius:8px;'>";
echo htmlspecialchars($sslCode);
echo "</pre>";
?>`,
    codeExplanation: [
      'real_connect() digunakan bersama mysqli_init() + ssl_set() untuk koneksi database terenkripsi TLS/SSL di lingkungan produksi.'
    ],
    challenge: {
      instruction: 'Pahami pola real_connect dengan SSL.',
      starterCode: `<?php
echo "real_connect() mendukung koneksi SSL/TLS ke MySQL.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Fungsi apa yang harus dipanggil sebelum `real_connect()` agar opsi koneksi lanjutan dapat disetel?',
      options: [
        '`mysqli_init()` untuk mendapatkan objek mysqli tanpa koneksi aktif',
        '`mysqli_connect()`',
        '`new mysqli()`',
        '`mysqli_open()`'
      ],
      correctIndex: 0,
      explanation: 'mysqli_init() menciptakan objek mysqli tanpa membuka koneksi, memungkinkan konfigurasi sebelum real_connect.'
    }
  },

  // 488. REAL_ESCAPE_STRING
  {
    id: 'php-ref-mysqli-real-escape-string',
    title: 'PHP MySQLi: real_escape_string()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 488,
    overview: 'Kuasai method $mysqli->real_escape_string() / mysqli_real_escape_string(): meng-escape karakter berbahaya dalam string input agar aman digunakan dalam query SQL (alternatif Prepared Statement).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-600 text-white">INPUT SANITIZATION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 488 / 505</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧹 Escape Karakter SQL (real_escape_string)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$mysqli->real_escape_string(string $string): string</code> menambahkan backslash pada karakter <code>'</code>, <code>"</code>, <code>\</code>, <code>\0</code>, <code>\n</code>, <code>\r</code>, dan <code>CTRL-Z</code>. <strong>Penting:</strong> Meskipun lebih baik dari tanpa sanitasi, Prepared Statement tetap lebih direkomendasikan untuk keamanan tertinggi.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Simulasi input berbahaya dari pengguna
$inputBerbahaya = "'; DROP TABLE users; --";

// Escape dengan real_escape_string (tanpa koneksi aktif, kita simulasi)
$inputAman = addslashes($inputBerbahaya); // Simulasi escape

echo "<h3>Hasil Penggunaan real_escape_string():</h3>";
echo "<p>Input Berbahaya: <code style='color:red;'>$inputBerbahaya</code></p>";
echo "<p>Setelah Escape: <code style='color:#059669;'>$inputAman</code></p>";
echo "<p style='color:#92400e;'>⚠️ Rekomendasi: Gunakan <strong>Prepared Statement</strong> untuk keamanan tertinggi!</p>";
?>`,
    codeExplanation: [
      'real_escape_string() menetralisir karakter spesial SQL agar tidak diinterpretasikan sebagai perintah SQL.'
    ],
    challenge: {
      instruction: 'Pahami perbedaan real_escape_string vs Prepared Statement.',
      starterCode: `<?php
$input = "Robert'); DROP TABLE users;--";
echo "Bahaya: $input";
?>`,
      hint: 'Selalu gunakan Prepared Statement untuk keamanan optimal.'
    },
    quiz: {
      question: 'Mengapa Prepared Statement (`prepare()`) lebih direkomendasikan dibandingkan `real_escape_string()` untuk pencegahan SQL Injection?',
      options: [
        'Prepared Statement memisahkan SQL dari data di level protokol driver sehingga data tidak pernah bisa diinterpretasikan sebagai SQL, sedangkan escape_string masih bisa dilewati pada edge case encoding tertentu',
        'real_escape_string lebih cepat',
        'Prepared Statement hanya untuk INSERT',
        'Keduanya sama aman'
      ],
      correctIndex: 0,
      explanation: 'Prepared statement memisahkan SQL dan data secara fundamental di level protokol, menjadikannya lebih aman.'
    }
  },

  // 489. REAL_QUERY
  {
    id: 'php-ref-mysqli-real-query',
    title: 'PHP MySQLi: real_query()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 489,
    overview: 'Kuasai method $mysqli->real_query() / mysqli_real_query(): mengeksekusi query tanpa langsung mengambil hasilnya — dipakai bersama use_result() atau store_result() untuk kontrol pengambilan data.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">LOW-LEVEL QUERY</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 489 / 505</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚙️ Eksekusi Query Tingkat Rendah (real_query)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$mysqli->real_query(string $query): bool</code> mengirim query ke server namun tidak mengambil hasilnya. Anda kemudian pilih antara <code>store_result()</code> (buffered, seluruh data masuk RAM PHP) atau <code>use_result()</code> (unbuffered, baca satu-satu dari server).
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Pola Penggunaan real_query + use_result:</h3>";
$code = <<<PHP
<?php
\$mysqli = new mysqli("localhost", "root", "", "db");

// Kirim query tanpa buffer
\$mysqli->real_query("SELECT * FROM products ORDER BY id");

// Gunakan unbuffered result (hemat RAM untuk dataset besar)
\$result = \$mysqli->use_result();
while (\$row = \$result->fetch_assoc()) {
    echo \$row['nama'];
}
\$result->close();
?>
PHP;

echo "<pre style='background:#0f172a; color:#38bdf8; padding:12px; border-radius:8px;'>";
echo htmlspecialchars($code);
echo "</pre>";
?>`,
    codeExplanation: [
      'real_query() + use_result() adalah kombinasi optimal untuk membaca dataset besar karena tidak memuat seluruh data ke RAM PHP.'
    ],
    challenge: {
      instruction: 'Pahami kombinasi real_query dan use_result.',
      starterCode: `<?php
echo "real_query() + use_result() ideal untuk dataset besar.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Apa keunggulan menggunakan `real_query()` + `use_result()` dibandingkan `query()` biasa?',
      options: [
        'Membaca data secara streaming satu baris per baris dari server tanpa memuat seluruh dataset ke RAM PHP (mode unbuffered)',
        'Lebih cepat 100x',
        'Mendukung lebih banyak kolom',
        'Tidak ada bedanya'
      ],
      correctIndex: 0,
      explanation: 'use_result mengembalikan cursor unbuffered yang membaca dari socket langsung, ideal untuk data besar.'
    }
  },

  // 490. REFRESH
  {
    id: 'php-ref-mysqli-refresh',
    title: 'PHP MySQLi: refresh()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 490,
    overview: 'Kuasai method $mysqli->refresh() / mysqli_refresh(): mengirim perintah REFRESH ke server MySQL untuk membersihkan cache tabel, log, grant tables, dan statistik host.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SERVER REFRESH</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 490 / 505</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔄 Refresh Server MySQL (refresh)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$mysqli->refresh(int $flags): bool</code> mengirim perintah REFRESH berdasarkan bitmask flag: <code>MYSQLI_REFRESH_GRANT</code>, <code>MYSQLI_REFRESH_LOG</code>, <code>MYSQLI_REFRESH_TABLES</code>, <code>MYSQLI_REFRESH_HOSTS</code>, dsb.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Konstanta Flag \$mysqli->refresh():</h3>";
$flags = [
    'MYSQLI_REFRESH_GRANT'  => 'Reload privilege tables',
    'MYSQLI_REFRESH_LOG'    => 'Flush log files',
    'MYSQLI_REFRESH_TABLES' => 'Flush table cache',
    'MYSQLI_REFRESH_HOSTS'  => 'Flush host cache',
];

echo "<ul>";
foreach ($flags as $const => $desc) {
    echo "<li><code>$const</code>: <strong>$desc</strong></li>";
}
echo "</ul>";
?>`,
    codeExplanation: [
      'refresh() membutuhkan hak akses RELOAD atau SUPER pada user database.'
    ],
    challenge: {
      instruction: 'Pahami flag-flag konstanta refresh().',
      starterCode: `<?php
echo "Sintaks: \$mysqli->refresh(MYSQLI_REFRESH_TABLES);";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Perintah SQL apakah yang setara dengan `$mysqli->refresh(MYSQLI_REFRESH_GRANT)`?',
      options: [
        '`FLUSH PRIVILEGES`',
        '`TRUNCATE TABLE`',
        '`RESET QUERY CACHE`',
        '`REPAIR TABLE`'
      ],
      correctIndex: 0,
      explanation: 'MYSQLI_REFRESH_GRANT setara dengan perintah SQL FLUSH PRIVILEGES.'
    }
  },

  // 491. ROLLBACK
  {
    id: 'php-ref-mysqli-rollback',
    title: 'PHP MySQLi: rollback()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 491,
    overview: 'Kuasai method $mysqli->rollback() / mysqli_rollback(): membatalkan seluruh perubahan data yang belum di-commit dalam transaksi aktif — penyelamat integritas data saat terjadi error.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-red-600 text-white">TRANSACTION ROLLBACK</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 491 / 505</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">↩️ Pembatalan Transaksi (rollback)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$mysqli->rollback(): bool</code> mengembalikan database ke keadaan sebelum transaksi dimulai (<code>autocommit(false)</code>). Prinsip Atomicity ACID: jika satu operasi gagal, semua operasi dalam satu transaksi dibatalkan bersama.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Pola Transaksi ACID dengan rollback():</h3>";
$transCode = <<<PHP
<?php
\$mysqli->autocommit(false);
try {
    \$mysqli->query("UPDATE rekening SET saldo = saldo - 1000000 WHERE id = 1");
    \$mysqli->query("UPDATE rekening SET saldo = saldo + 1000000 WHERE id = 2");
    \$mysqli->commit(); // Simpan permanen
    echo "Transfer berhasil!";
} catch (Exception \$e) {
    \$mysqli->rollback(); // Batalkan SEMUA perubahan
    echo "Transfer gagal - saldo aman!";
}
?>
PHP;

echo "<pre style='background:#0f172a; color:#38bdf8; padding:12px; border-radius:8px;'>";
echo htmlspecialchars($transCode);
echo "</pre>";
?>`,
    codeExplanation: [
      'rollback() menjamin bahwa kegagalan pada langkah mana pun akan membatalkan seluruh transaksi secara atomik.'
    ],
    challenge: {
      instruction: 'Pahami peran rollback dalam blok try-catch transaksi.',
      starterCode: `<?php
echo "\$mysqli->rollback() membatalkan semua perubahan transaksi yang belum di-commit.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Prinsip ACID apakah yang diimplementasikan oleh `rollback()` — yaitu semua operasi dalam satu transaksi harus berhasil seluruhnya atau gagal seluruhnya?',
      options: [
        '**Atomicity** (A dalam ACID)',
        'Consistency',
        'Isolation',
        'Durability'
      ],
      correctIndex: 0,
      explanation: 'Atomicity memastikan transaksi bersifat all-or-nothing.'
    }
  },

  // 492. SELECT_DB
  {
    id: 'php-ref-mysqli-select-db',
    title: 'PHP MySQLi: select_db()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 492,
    overview: 'Kuasai method $mysqli->select_db() / mysqli_select_db(): mengganti database aktif pada koneksi MySQLi yang sedang terbuka tanpa perlu membuat koneksi baru.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DATABASE SWITCH</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 492 / 505</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🗄️ Ganti Database Aktif (select_db)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$mysqli->select_db(string $database): bool</code> setara dengan menjalankan perintah SQL <code>USE nama_database;</code> namun lebih efisien karena tidak perlu membuka koneksi baru.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Contoh Penggunaan \$mysqli->select_db():</h3>";
$code = <<<PHP
<?php
\$mysqli = new mysqli("localhost", "root", "", "lms_users_db");

// Ambil data user dari database pertama
\$users = \$mysqli->query("SELECT id FROM users WHERE aktif = 1")->fetch_all(MYSQLI_ASSOC);

// Ganti ke database konten tanpa reconnect
\$mysqli->select_db("lms_content_db");

// Query di database baru
\$kursus = \$mysqli->query("SELECT id, judul FROM kursus LIMIT 5");
?>
PHP;

echo "<pre style='background:#0f172a; color:#38bdf8; padding:12px; border-radius:8px;'>";
echo htmlspecialchars($code);
echo "</pre>";
?>`,
    codeExplanation: [
      'select_db() menghemat overhead pembuatan koneksi baru saat perlu mengakses beberapa database dalam satu sesi.'
    ],
    challenge: {
      instruction: 'Pahami penggunaan select_db untuk berpindah database.',
      starterCode: `<?php
echo "Sintaks: \$mysqli->select_db('nama_database_baru');";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Pernyataan SQL apakah yang setara secara fungsional dengan `$mysqli->select_db("db_baru")`?',
      options: [
        '`USE db_baru;`',
        '`CREATE DATABASE db_baru;`',
        '`SHOW DATABASES;`',
        '`DROP DATABASE db_baru;`'
      ],
      correctIndex: 0,
      explanation: 'select_db sama dengan perintah SQL USE nama_database.'
    }
  },

  // 493. SET_CHARSET
  {
    id: 'php-ref-mysqli-set-charset',
    title: 'PHP MySQLi: set_charset()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 493,
    overview: 'Kuasai method $mysqli->set_charset() / mysqli_set_charset(): mengatur charset encoding koneksi database — wajib dipanggil segera setelah koneksi dibuat dengan nilai "utf8mb4".',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">MANDATORY SETUP</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 493 / 505</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔤 Atur Charset Koneksi (set_charset)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$mysqli->set_charset(string $charset): bool</code> adalah satu-satunya cara yang benar untuk mengatur charset koneksi MySQLi. <strong>JANGAN gunakan</strong> <code>$mysqli->query("SET NAMES utf8mb4")</code> karena tidak memperbarui charset di sisi PHP client library.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Praktik Terbaik Inisialisasi Koneksi MySQLi:</h3>";
$code = <<<PHP
<?php
\$mysqli = new mysqli("localhost", "root", "", "db");

// WAJIB dipanggil setelah koneksi dibuat
\$mysqli->set_charset("utf8mb4");

// Verifikasi
echo "Charset aktif: " . \$mysqli->character_set_name(); // utf8mb4
?>
PHP;

echo "<pre style='background:#0f172a; color:#38bdf8; padding:12px; border-radius:8px;'>";
echo htmlspecialchars($code);
echo "</pre>";
echo "<p style='color:#dc2626;'>⚠️ HINDARI: <code>\$mysqli->query(\"SET NAMES utf8mb4\")</code> karena tidak memperbarui PHP client!</p>";
?>`,
    codeExplanation: [
      'set_charset("utf8mb4") wajib dipanggil agar real_escape_string() menggunakan encoding yang benar dan mencegah karakter rusak.'
    ],
    challenge: {
      instruction: 'Atur charset utf8mb4 dengan $mysqli->set_charset("utf8mb4").',
      starterCode: `<?php
echo "Wajib: \$mysqli->set_charset('utf8mb4');";
?>`,
      hint: 'Panggil set_charset segera setelah koneksi.'
    },
    quiz: {
      question: 'Mengapa `$mysqli->set_charset("utf8mb4")` lebih direkomendasikan dibandingkan `$mysqli->query("SET NAMES utf8mb4")`?',
      options: [
        'Karena set_charset juga memperbarui charset di sisi PHP client library (real_escape_string), sedangkan SET NAMES hanya mengubah charset di sisi server saja',
        'Karena set_charset lebih cepat',
        'Tidak ada perbedaan',
        'SET NAMES lebih aman'
      ],
      correctIndex: 0,
      explanation: 'set_charset memperbarui informasi charset di kedua sisi: server dan library client PHP.'
    }
  },

  // 494. SET_OPT (MYSQLI_OPT)
  {
    id: 'php-ref-mysqli-set-opt',
    title: 'PHP MySQLi: options() / set_opt()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 494,
    overview: 'Kuasai method $mysqli->options() / mysqli_options(): mengatur opsi koneksi lanjutan (timeout, protokol, SSL key, reporting mode) sebelum membuka koneksi dengan real_connect().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CONNECTION OPTIONS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 494 / 505</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚙️ Opsi Koneksi Lanjutan (options)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$mysqli->options(int $option, mixed $value): bool</code> mengatur opsi seperti <code>MYSQLI_OPT_CONNECT_TIMEOUT</code>, <code>MYSQLI_OPT_READ_TIMEOUT</code>, <code>MYSQLI_OPT_INT_AND_FLOAT_NATIVE</code>, dan lainnya sebelum <code>real_connect()</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Opsi Koneksi MySQLi yang Tersedia:</h3>";
$opts = [
    'MYSQLI_OPT_CONNECT_TIMEOUT' => 'Batas waktu koneksi (detik)',
    'MYSQLI_OPT_READ_TIMEOUT'    => 'Batas waktu baca (detik)',
    'MYSQLI_INIT_COMMAND'        => 'Query yang dieksekusi setelah koneksi',
    'MYSQLI_OPT_INT_AND_FLOAT_NATIVE' => 'Kembalikan int/float asli (bukan string)',
];

echo "<ul>";
foreach ($opts as $opt => $desc) {
    echo "<li><code>$opt</code>: $desc</li>";
}
echo "</ul>";
?>`,
    codeExplanation: [
      'options() wajib dipanggil antara mysqli_init() dan real_connect() agar opsi diterapkan sebelum koneksi terbentuk.'
    ],
    challenge: {
      instruction: 'Pahami opsi MYSQLI_OPT_CONNECT_TIMEOUT.',
      starterCode: `<?php
echo "Sintaks: \$mysqli->options(MYSQLI_OPT_CONNECT_TIMEOUT, 5);";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Konstanta apakah yang digunakan untuk membatasi durasi maksimum inisialisasi koneksi MySQLi?',
      options: [
        '`MYSQLI_OPT_CONNECT_TIMEOUT`',
        '`MYSQLI_OPT_READ_TIMEOUT`',
        '`MYSQLI_TIMEOUT`',
        '`MYSQLI_CONNECT_LIMIT`'
      ],
      correctIndex: 0,
      explanation: 'MYSQLI_OPT_CONNECT_TIMEOUT mengatur batas waktu pembukaan koneksi dalam detik.'
    }
  },

  // 495. SQLSTATE
  {
    id: 'php-ref-mysqli-sqlstate',
    title: 'PHP MySQLi: sqlstate',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 495,
    overview: 'Kuasai properti $mysqli->sqlstate / mysqli_sqlstate(): mendapatkan kode error SQLSTATE standar ANSI/ISO 5 karakter dari operasi database terakhir.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ANSI SQL STATE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 495 / 505</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📋 Kode Error Standar ANSI (sqlstate)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$mysqli->sqlstate</code> mengembalikan string 5 karakter standar ANSI/ISO (misal: <code>"00000"</code> = sukses, <code>"23000"</code> = constraint violation, <code>"42S02"</code> = table not found).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$sqlstates = [
    "00000" => "Sukses - Tidak ada error",
    "23000" => "Integrity Constraint Violation (Duplicate / NULL)",
    "42S02" => "Base Table or View Not Found",
    "HY000" => "General Error",
    "08001" => "Client Unable to Establish Connection",
];

echo "<h3>Kode SQLSTATE Umum (\$mysqli->sqlstate):</h3>";
echo "<table border='1' cellpadding='6' style='border-collapse:collapse;'>";
echo "<tr style='background:#e0e7ff;'><th>SQLSTATE</th><th>Deskripsi</th></tr>";
foreach ($sqlstates as $code => $desc) {
    $color = $code === '00000' ? '#059669' : '#dc2626';
    echo "<tr><td><strong style='color:$color;'>$code</strong></td><td>$desc</td></tr>";
}
echo "</table>";
?>`,
    codeExplanation: [
      '$mysqli->sqlstate memberikan kode error portabel lintas database yang berbeda (MySQL, MariaDB, PostgreSQL via driver masing-masing).'
    ],
    challenge: {
      instruction: 'Periksa $mysqli->sqlstate === "00000" untuk status sukses.',
      starterCode: `<?php
$state = "00000";
echo ($state === "00000") ? "Sukses" : "Error: $state";
?>`,
      hint: 'Akses $mysqli->sqlstate.'
    },
    quiz: {
      question: 'Berapakah nilai `$mysqli->sqlstate` yang menandakan operasi database berhasil tanpa error?',
      options: [
        'String `"00000"`',
        'String `"00001"`',
        'String `"HY000"`',
        'Integer `0`'
      ],
      correctIndex: 0,
      explanation: '"00000" adalah kode SQLSTATE standar untuk sukses tanpa error.'
    }
  },

  // 496. STAT
  {
    id: 'php-ref-mysqli-stat',
    title: 'PHP MySQLi: stat()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 496,
    overview: 'Kuasai method $mysqli->stat() / mysqli_stat(): mendapatkan string status sistem server MySQL (uptime, thread, query, dll.) mirip dengan perintah SHOW STATUS.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SERVER STATUS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 496 / 505</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📊 Status Server MySQL (stat)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$mysqli->stat(): string|false</code> mengembalikan string status seperti: <em>"Uptime: 86400  Threads: 3  Questions: 1234  Slow queries: 0  Opens: 56  ..."</em>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$serverStat = "Uptime: 86400  Threads: 3  Questions: 4521  Slow queries: 0  Opens: 56  Flush tables: 3  Open tables: 45  Queries per second avg: 0.052";

echo "<h3>Hasil \$mysqli->stat():</h3>";
echo "<pre style='background:#f1f5f9; padding:10px; border-radius:6px; font-size:12px; word-wrap:break-word;'>";
echo htmlspecialchars($serverStat);
echo "</pre>";
?>`,
    codeExplanation: [
      '$mysqli->stat() memberikan snapshot cepat kondisi server MySQL untuk monitoring operasional.'
    ],
    challenge: {
      instruction: 'Cetak status server dengan $mysqli->stat().',
      starterCode: `<?php
echo "Sintaks: echo \$mysqli->stat();";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Informasi server apakah yang dapat dilihat dari string hasil `$mysqli->stat()`?',
      options: [
        'Uptime, jumlah thread aktif, total query, slow queries, dan statistik operasional server MySQL lainnya',
        'Hanya nama database',
        'Daftar tabel',
        'Versi MySQL'
      ],
      correctIndex: 0,
      explanation: 'stat() mengembalikan ringkasan metrik operasional server MySQL mirip SHOW STATUS.'
    }
  },

  // 497. STMT_INIT
  {
    id: 'php-ref-mysqli-stmt-init',
    title: 'PHP MySQLi: stmt_init()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 497,
    overview: 'Kuasai method $mysqli->stmt_init() / mysqli_stmt_init(): menginisialisasi objek mysqli_stmt secara manual sebelum memanggil $stmt->prepare().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">STATEMENT INIT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 497 / 505</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚙️ Inisialisasi Statement Manual (stmt_init)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$mysqli->stmt_init(): mysqli_stmt|false</code> menciptakan objek statement yang belum disiapkan, memungkinkan Anda mengatur atribut statement sebelum memanggil <code>$stmt->prepare()</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Pola stmt_init() vs prepare() Langsung:</h3>";
$code = <<<PHP
<?php
\$mysqli = new mysqli("localhost", "root", "", "db");

// Cara 1: Shorthand (lebih umum)
\$stmt = \$mysqli->prepare("SELECT nama FROM users WHERE id = ?");

// Cara 2: Manual via stmt_init (untuk konfigurasi pre-prepare)
\$stmt2 = \$mysqli->stmt_init();
\$stmt2->prepare("SELECT email FROM users WHERE id = ?");
\$stmt2->bind_param("i", \$id);
\$stmt2->execute();
?>
PHP;

echo "<pre style='background:#0f172a; color:#38bdf8; padding:12px; border-radius:8px;'>";
echo htmlspecialchars($code);
echo "</pre>";
?>`,
    codeExplanation: [
      'stmt_init() berguna saat perlu mengatur atribut statement seperti MYSQLI_STMT_ATTR_CURSOR_TYPE sebelum prepare.'
    ],
    challenge: {
      instruction: 'Pahami perbedaan stmt_init() vs prepare() langsung.',
      starterCode: `<?php
echo "\$stmt = \$mysqli->stmt_init(); \$stmt->prepare(\"SELECT ...\");";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Apa kegunaan khusus `$mysqli->stmt_init()` dibandingkan langsung memanggil `$mysqli->prepare()`?',
      options: [
        'Memungkinkan konfigurasi atribut statement (seperti cursor type) sebelum query SQL dikompilasi di server',
        'Lebih cepat dari prepare()',
        'Tidak ada perbedaan sama sekali',
        'Hanya untuk DELETE'
      ],
      correctIndex: 0,
      explanation: 'stmt_init memberikan objek statement kosong untuk dikonfigurasi sebelum compile query.'
    }
  },

  // 498. STORE_RESULT
  {
    id: 'php-ref-mysqli-store-result',
    title: 'PHP MySQLi: store_result()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 498,
    overview: 'Kuasai method $mysqli->store_result() / mysqli_store_result(): mengambil dan menyimpan seluruh result set ke buffer memori PHP (Buffered Mode) — memungkinkan operasi data_seek dan num_rows.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">BUFFERED RESULT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 498 / 505</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">💾 Penyimpanan Result Buffered (store_result)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$mysqli->store_result(): mysqli_result|false</code> digunakan setelah <code>real_query()</code> atau dalam siklus <code>multi_query()</code> untuk menyimpan result set ke buffer PHP. Mode buffered memungkinkan penggunaan <code>$result->num_rows</code> dan <code>$result->data_seek()</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Perbandingan store_result vs use_result:</h3>";
echo "<table border='1' cellpadding='8' style='border-collapse:collapse; width:100%;'>";
echo "<tr style='background:#e0e7ff;'><th>Aspek</th><th>store_result (Buffered)</th><th>use_result (Unbuffered)</th></tr>";
$perbandingan = [
    ['Penyimpanan', 'Seluruh data ke RAM PHP', 'Baca baris per baris dari server'],
    ['num_rows', '✓ Tersedia', '✗ Tidak tersedia'],
    ['data_seek', '✓ Tersedia', '✗ Tidak tersedia'],
    ['Cocok untuk', 'Data kecil-menengah', 'Dataset sangat besar'],
];
foreach ($perbandingan as $r) {
    echo "<tr><td>{$r[0]}</td><td style='color:#059669;'>{$r[1]}</td><td style='color:#dc2626;'>{$r[2]}</td></tr>";
}
echo "</table>";
?>`,
    codeExplanation: [
      'store_result() memuat seluruh data ke RAM PHP, memungkinkan navigasi bebas namun menggunakan lebih banyak memori.'
    ],
    challenge: {
      instruction: 'Pahami perbedaan store_result (buffered) vs use_result (unbuffered).',
      starterCode: `<?php
echo "store_result = buffered (RAM), use_result = unbuffered (streaming).";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Fitur result apa yang hanya tersedia pada mode buffered (`store_result()`) dan TIDAK tersedia pada mode unbuffered (`use_result()`)?',
      options: [
        '`$result->num_rows` dan `$result->data_seek()`',
        '`$result->fetch_assoc()`',
        '`$result->free()`',
        '`$result->fetch_all()`'
      ],
      correctIndex: 0,
      explanation: 'num_rows dan data_seek hanya bekerja pada mode buffered karena seluruh data sudah dimuat ke RAM.'
    }
  },

  // 499. THREAD_ID
  {
    id: 'php-ref-mysqli-thread-id',
    title: 'PHP MySQLi: thread_id',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 499,
    overview: 'Kuasai properti $mysqli->thread_id / mysqli_thread_id(): mendapatkan ID thread koneksi aktif di server MySQL (digunakan untuk KILL QUERY pada antrian thread).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">THREAD ID</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 499 / 505</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🆔 ID Thread Koneksi (thread_id)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$mysqli->thread_id</code> mengembalikan integer ID thread koneksi MySQL saat ini. Thread ID ini dapat digunakan dengan <code>$mysqli->kill($threadId)</code> untuk membatalkan query yang terlalu lama berjalan dari koneksi lain.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$threadId = 12345; // Simulasi thread ID

echo "<h3>Hasil \$mysqli->thread_id:</h3>";
echo "<p>Thread ID Koneksi Aktif: <strong style='color:#059669; font-size:18px;'>$threadId</strong></p>";
echo "<p>Gunakan: <code>\$mysqli->kill($threadId);</code> untuk menghentikan query dari koneksi lain.</p>";
?>`,
    codeExplanation: [
      'thread_id berguna untuk implementasi query cancellation — membatalkan query long-running dari proses monitor.'
    ],
    challenge: {
      instruction: 'Akses thread_id dari $mysqli.',
      starterCode: `<?php
$tid = 555;
echo "Thread ID: $tid";
?>`,
      hint: 'Akses $mysqli->thread_id.'
    },
    quiz: {
      question: 'Untuk keperluan apa Thread ID dari `$mysqli->thread_id` paling sering digunakan?',
      options: [
        'Dioperkan ke `$mysqli->kill($threadId)` untuk menghentikan paksa query yang berjalan terlalu lama di thread tersebut',
        'Untuk login ke database',
        'Untuk membuat tabel baru',
        'Untuk mengekspor database'
      ],
      correctIndex: 0,
      explanation: 'thread_id digunakan bersama kill() untuk menghentikan query long-running.'
    }
  },

  // 500. THREAD_SAFE
  {
    id: 'php-ref-mysqli-thread-safe',
    title: 'PHP MySQLi: thread_safe()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 500,
    overview: 'Kuasai fungsi mysqli_thread_safe(): memeriksa apakah library client MySQL yang digunakan dikompilasi dengan dukungan thread-safe (penting untuk PHP multi-threaded).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">THREAD SAFETY</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 500 / 505</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔒 Keamanan Thread Library (thread_safe)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>mysqli_thread_safe(): bool</code> mengembalikan <code>true</code> jika library client MySQL dikompilasi dengan flag thread-safe. Relevan pada lingkungan PHP yang menggunakan threading seperti PHP dengan Apache mpm_worker.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$isThreadSafe = mysqli_thread_safe();

echo "<h3>Hasil Penggunaan mysqli_thread_safe():</h3>";
echo "<p>Thread Safe: <strong style='color:" . ($isThreadSafe ? '#059669' : '#dc2626') . ";'>";
echo $isThreadSafe ? "✓ YA (Thread-Safe)" : "✗ TIDAK (Non Thread-Safe)";
echo "</strong></p>";
?>`,
    codeExplanation: [
      'mysqli_thread_safe() relevan pada penggunaan PHP sebagai Apache DSO module dengan MPM worker/event.'
    ],
    challenge: {
      instruction: 'Cek thread safety dengan mysqli_thread_safe().',
      starterCode: `<?php
echo mysqli_thread_safe() ? "Thread Safe" : "Non Thread Safe";
?>`,
      hint: 'Panggil mysqli_thread_safe().'
    },
    quiz: {
      question: 'Apa yang dikembalikan oleh `mysqli_thread_safe()` jika library client MySQL mendukung thread safety?',
      options: [
        'Boolean `true`',
        'Boolean `false`',
        'Integer `1`',
        'String `"safe"`'
      ],
      correctIndex: 0,
      explanation: 'mysqli_thread_safe() mengembalikan boolean true jika thread-safe.'
    }
  },

  // 501. USE_RESULT
  {
    id: 'php-ref-mysqli-use-result',
    title: 'PHP MySQLi: use_result()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 501,
    overview: 'Kuasai method $mysqli->use_result() / mysqli_use_result(): mengambil result dalam mode Unbuffered — membaca baris satu-satu langsung dari server tanpa menyimpan seluruh dataset ke memori PHP.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">UNBUFFERED STREAM</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 501 / 505</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌊 Streaming Result Unbuffered (use_result)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$mysqli->use_result(): mysqli_result|false</code> digunakan setelah <code>real_query()</code> untuk membaca data secara streaming. Ideal untuk dataset jutaan baris karena hanya menyimpan satu baris di memori sekaligus.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Kapan Memilih use_result() vs store_result():</h3>";
echo "<ul>";
echo "<li>✓ <strong>use_result():</strong> Ekspor jutaan baris ke CSV/JSON streaming</li>";
echo "<li>✓ <strong>use_result():</strong> Report bulanan data transaksi yang sangat besar</li>";
echo "<li>✓ <strong>store_result():</strong> Data kecil yang perlu di-scroll bolak-balik (data_seek)</li>";
echo "<li>✓ <strong>store_result():</strong> Saat butuh mengetahui total baris (num_rows)</li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'use_result() harus diikuti dengan pembacaan seluruh baris sebelum query lain dapat dieksekusi pada koneksi yang sama.'
    ],
    challenge: {
      instruction: 'Pahami keunggulan use_result untuk dataset besar.',
      starterCode: `<?php
echo "use_result() hemat RAM untuk jutaan baris data.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Untuk skenario manakah `use_result()` (unbuffered) lebih tepat digunakan dibandingkan `store_result()` (buffered)?',
      options: [
        'Ketika membaca dan memproses dataset yang sangat besar (jutaan baris) untuk mencegah kehabisan memori PHP',
        'Ketika butuh menggunakan num_rows',
        'Ketika butuh data_seek',
        'Tidak ada kasus penggunaan'
      ],
      correctIndex: 0,
      explanation: 'use_result streaming satu baris per baris mencegah memory exhausted pada dataset besar.'
    }
  },

  // 502. WARNING_COUNT
  {
    id: 'php-ref-mysqli-warning-count',
    title: 'PHP MySQLi: warning_count',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 502,
    overview: 'Kuasai properti $mysqli->warning_count / mysqli_warning_count(): mengetahui jumlah peringatan (MySQL Warning) yang dihasilkan oleh query terakhir.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-600 text-white">QUERY WARNINGS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 502 / 505</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚠️ Jumlah Peringatan Query (warning_count)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$mysqli->warning_count</code> mengembalikan integer jumlah peringatan dari operasi terakhir. Peringatan (bukan error) terjadi saat MySQL melakukan konversi tipe data implisit atau truncasi nilai yang melebihi panjang kolom.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Simulasi: insert nilai terlalu panjang menghasilkan warning
$warningCount = 2;

echo "<h3>Hasil \$mysqli->warning_count:</h3>";
echo "<p>Jumlah Warning: <strong style='color:" . ($warningCount > 0 ? '#d97706' : '#059669') . "; font-size:18px;'>$warningCount peringatan</strong></p>";
if ($warningCount > 0) {
    echo "<p>Jalankan: <code>\$mysqli->query('SHOW WARNINGS');</code> untuk detail peringatan.</p>";
}
?>`,
    codeExplanation: [
      '$mysqli->warning_count > 0 memerlukan pemeriksaan SHOW WARNINGS untuk mengetahui detail truncasi atau konversi implisit.'
    ],
    challenge: {
      instruction: 'Periksa warning_count setelah query INSERT.',
      starterCode: `<?php
$wc = 0;
echo ($wc > 0) ? "Ada $wc warning" : "Tidak ada warning";
?>`,
      hint: 'Akses $mysqli->warning_count.'
    },
    quiz: {
      question: 'Dalam kondisi apa MySQL menghasilkan Warning (bukan Error) yang dapat dibaca via `$mysqli->warning_count`?',
      options: [
        'Saat MySQL melakukan konversi tipe data implisit atau memotong nilai yang melebihi panjang kolom (truncation)',
        'Saat tabel tidak ditemukan',
        'Saat password salah',
        'Saat database penuh'
      ],
      correctIndex: 0,
      explanation: 'MySQL menghasilkan warning saat memaksa konversi data implisit atau memotong string yang terlalu panjang.'
    }
  }
];

module.exports = phpPart45RefMysqli5;
