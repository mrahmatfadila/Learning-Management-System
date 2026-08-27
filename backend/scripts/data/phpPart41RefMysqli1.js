// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (MYSQLI PART 1: 445-453)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart41RefMysqli1 = [
  // 445. AFFECTED_ROWS
  {
    id: 'php-ref-mysqli-affected-rows',
    title: 'PHP MySQLi: affected_rows',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 445,
    overview: 'Kuasai properti $mysqli->affected_rows / mysqli_affected_rows(): mengetahui jumlah baris database yang terpengaruh/berubah akibat query INSERT, UPDATE, REPLACE, atau DELETE terakhir.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">MYSQLI OOP & PROCEDURAL</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 445 / 462</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📊 Baris Terpengaruh (affected_rows)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$mysqli->affected_rows</code> (atau procedural <code>mysqli_affected_rows($conn)</code>) mengembalikan integer jumlah baris yang berhasil dimanipulasi. Mengembalikan <code>-1</code> jika query SQL gagal dieksekusi.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Simulasi Objek Koneksi MySQLi
class MockMySQLi {
    public int $affected_rows = 3;
    public function query(string $sql) { return true; }
}

$db = new MockMySQLi();
$db->query("UPDATE users SET status = 'active' WHERE role = 'student'");

echo "<h3>Hasil Penggunaan \$mysqli->affected_rows:</h3>";
echo "<p>Jumlah User yang Diaktifkan: <strong style='color: #059669; font-size: 18px;'>{$db->affected_rows} baris</strong></p>";
echo "<p style='color: green;'>✓ Validasi update data berhasil tanpa error.</p>";
?>`,
    codeExplanation: [
      '$mysqli->affected_rows mengukur efektivitas operasi DML (INSERT, UPDATE, DELETE).',
      'Jika UPDATE tidak mengubah data (nilai baru sama dengan nilai lama), affected_rows bernilai 0.'
    ],
    challenge: {
      instruction: 'Akses properti affected_rows dari objek $mysqli.',
      starterCode: `<?php
$conn = (object)['affected_rows' => 5];
echo "Baris terpengaruh: " . $conn->affected_rows;
?>`,
      hint: 'Akses $conn->affected_rows.'
    },
    quiz: {
      question: 'Berapakah nilai yang dihasilkan oleh `$mysqli->affected_rows` jika query SQL yang dijalankan mengalami kesalahan/error sintaks?',
      options: [
        'Integer -1',
        'Integer 0',
        'Boolean false',
        'Null'
      ],
      correctIndex: 0,
      explanation: 'Nilai -1 menunjukkan query SQL mengalami kegagalan/error.'
    }
  },

  // 446. AUTOCOMMIT
  {
    id: 'php-ref-mysqli-autocommit',
    title: 'PHP MySQLi: autocommit()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 446,
    overview: 'Kuasai method $mysqli->autocommit() / mysqli_autocommit(): mengaktifkan atau menonaktifkan mode auto-commit transaksi database (ACID Transactions).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ACID TRANSACTIONS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 446 / 462</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔒 Kontrol Transaksi Database (autocommit)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$mysqli->autocommit(false)</code> memulai blok transaksi manual. Perubahan data di tabel tidak akan tersimpan permanen sampai Anda memanggil <code>$mysqli->commit()</code> atau membatalkannya dengan <code>$mysqli->rollback()</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Pola Transaksi Finansial Aman dengan autocommit(false):</h3>";
$simulasiKode = <<<PHP
<?php
\$mysqli = new mysqli("localhost", "root", "", "bank_db");

// 1. Matikan auto-commit (Mulai Transaksi)
\$mysqli->autocommit(false);

try {
    // 2. Kurangi Saldo Pengirim
    \$mysqli->query("UPDATE rekening SET saldo = saldo - 500000 WHERE no_rek = 'A101'");
    
    // 3. Tambah Saldo Penerima
    \$mysqli->query("UPDATE rekening SET saldo = saldo + 500000 WHERE no_rek = 'B202'");
    
    // 4. Simpan Permanen (Commit)
    \$mysqli->commit();
    echo "Transfer Sukses!";
} catch (Exception \$e) {
    // Batalkan seluruh perubahan jika ada kegagalan
    \$mysqli->rollback();
    echo "Transfer Gagal & Saldo Aman!";
}
?>
PHP;

echo "<pre style='background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 8px;'>";
echo htmlspecialchars($simulasiKode);
echo "</pre>";
?>`,
    codeExplanation: [
      'autocommit(false) menjamin integritas data ACID (Atomicity, Consistency, Isolation, Durability).',
      'Mencegah saldo terpotong jika server mati sebelum saldo penerima bertambah.'
    ],
    challenge: {
      instruction: 'Pahami pemanggilan $mysqli->autocommit(false) untuk transaksi ACID.',
      starterCode: `<?php
echo "Matikan autocommit: \$mysqli->autocommit(false);";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Apa fungsi utama memanggil `$mysqli->autocommit(false)` sebelum mengeksekusi serangkaian query transaksi keuangan?',
      options: [
        'Menahan perubahan query di memori sementara agar bisa di-commit bersamaan atau di-rollback total jika terjadi error di tengah jalan',
        'Menghapus tabel database',
        'Mempercepat koneksi internet',
        'Mengunci seluruh database selamanya'
      ],
      correctIndex: 0,
      explanation: 'autocommit(false) memulai transaksi manual untuk menjamin prinsip Atomicity pada basis data.'
    }
  },

  // 447. CHANGE_USER
  {
    id: 'php-ref-mysqli-change-user',
    title: 'PHP MySQLi: change_user()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 447,
    overview: 'Kuasai method $mysqli->change_user() / mysqli_change_user(): mengganti user autentikasi dan database aktif pada koneksi MySQLi yang sedang terbuka tanpa perlu menutup socket koneksi.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">USER CONTEXT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 447 / 462</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">👤 Mengganti User Koneksi (change_user)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$mysqli->change_user(string $username, string $password, ?string $database): bool</code> mengautentikasi ulang sesi socket koneksi aktif ke hak akses user database lain (seperti berpindah dari user readonly ke user admin dengan hak tulis).
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Contoh Penggunaan \$mysqli->change_user():</h3>";
$kode = <<<PHP
<?php
\$mysqli = new mysqli("localhost", "app_reader", "secret123", "tokoonline");

// ... Lakukan query SELECT data produk ...

// Beralih ke kredensial admin saat butuh menulis log audit
if (\$mysqli->change_user("app_writer", "admin_pass", "tokoonline")) {
    echo "Berhasil beralih ke user app_writer tanpa reconnect socket!";
}
?>
PHP;

echo "<pre style='background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 8px;'>";
echo htmlspecialchars($kode);
echo "</pre>";
?>`,
    codeExplanation: [
      'change_user() menghemat overhead handshake TCP socket saat berganti konteks user/database.'
    ],
    challenge: {
      instruction: 'Pahami fungsi change_user.',
      starterCode: `<?php
echo "Sintaks: \$mysqli->change_user('user', 'pass', 'db');";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Apa keunggulan memanggil `change_user()` dibandingkan membuat instance baru `new mysqli()`?',
      options: [
        'Menggunakan kembali koneksi TCP/IP socket yang sudah ada sehingga menghemat waktu dan beban koneksi server',
        'Menghapus database lama',
        'Mempercepat kecepatan query hingga 100x',
        'Tidak ada bedanya'
      ],
      correctIndex: 0,
      explanation: 'change_user mendaur ulang socket koneksi yang sedang terbuka.'
    }
  },

  // 448. CHARACTER_SET_NAME
  {
    id: 'php-ref-mysqli-character-set-name',
    title: 'PHP MySQLi: character_set_name()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 448,
    overview: 'Kuasai method $mysqli->character_set_name() / mysqli_character_set_name(): memeriksa nama encoding charset aktif koneksi database (wajib utf8mb4 untuk dukungan emoji penuh).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CHARSET ENCODING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 448 / 462</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔤 Memeriksa Karakter Set (character_set_name)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$mysqli->character_set_name(): string</code> mengembalikan nama kumpulan karakter aktif (misal <code>utf8mb4</code> atau <code>latin1</code>). Standar modern wajib menyetel <code>$mysqli->set_charset("utf8mb4")</code> agar mendukung karakter Unicode internasional dan emoji.
          </p>
        </div>
      </div>
    `,
    code: `<?php
class MockCharsetConn {
    public function character_set_name(): string {
        return "utf8mb4";
    }
}

$conn = new MockCharsetConn();

echo "<h3>Hasil Pengujian character_set_name():</h3>";
echo "<p>Charset Aktif: <strong style='color: #059669; font-size: 18px;'>" . $conn->character_set_name() . "</strong></p>";
echo "<p style='color: green;'>✓ Encoding utf8mb4 aktif: Siap menampung teks Unicode, karakter Asia, dan Emoji (🚀 🎉).</p>";
?>`,
    codeExplanation: [
      'character_set_name() mengonfirmasi bahwa koneksi aman dari masalah karakter rusak / tanda tanya ???.'
    ],
    challenge: {
      instruction: 'Periksa charset koneksi dengan $mysqli->character_set_name().',
      starterCode: `<?php
$db = (object)['character_set_name' => fn() => 'utf8mb4'];
echo "Charset: " . ($db->character_set_name)();
?>`,
      hint: 'Panggil method character_set_name.'
    },
    quiz: {
      question: 'Encoding charset standar apakah yang direkomendasikan untuk MySQL di PHP agar mendukung penuh 4-byte karakter Unicode dan emoji?',
      options: [
        '`utf8mb4`',
        '`latin1`',
        '`ascii`',
        '`utf8` (3-byte lama)'
      ],
      correctIndex: 0,
      explanation: 'utf8mb4 adalah encoding UTF-8 4-byte penuh resmi MySQL.'
    }
  },

  // 449. CLOSE
  {
    id: 'php-ref-mysqli-close',
    title: 'PHP MySQLi: close()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 449,
    overview: 'Kuasai method $mysqli->close() / mysqli_close(): menutup koneksi socket database secara anggun (graceful close) dan melepaskan resource koneksi ke pool database.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CONNECTION LIFECYCLE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 449 / 462</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🚪 Menutup Koneksi Database (close)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$mysqli->close(): bool</code> melepaskan handle koneksi MySQL. Menutup koneksi database sesegera mungkin saat query selesai sangat penting untuk mencegah error <em>"Too many connections"</em> pada server traffic tinggi.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Praktik Terbaik Penutupan Koneksi Database:</h3>";
$kodeClean = <<<PHP
<?php
\$mysqli = new mysqli("localhost", "root", "", "app_db");

// Jalankan query operasi database
\$result = \$mysqli->query("SELECT COUNT(*) FROM users");

// Tutup koneksi setelah seluruh operasi selesai
\$mysqli->close();
echo "Koneksi database berhasil dilepaskan.";
?>
PHP;

echo "<pre style='background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 8px;'>";
echo htmlspecialchars($kodeClean);
echo "</pre>";
?>`,
    codeExplanation: [
      '$mysqli->close() mengembalikan slot koneksi MySQL kembali ke connection pool server.'
    ],
    challenge: {
      instruction: 'Pahami fungsi penutupan koneksi $mysqli->close().',
      starterCode: `<?php
echo "\$mysqli->close(); melepaskan koneksi database.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Masalah server database apakah yang berhasil dicegah dengan disiplin menutup koneksi menggunakan `$mysqli->close()`?',
      options: [
        'Error `Too many connections` akibat koneksi idle yang menumpuk memenuhi kuota max_connections MySQL',
        'Database corrupt',
        'Tabel terhapus',
        'Error syntax'
      ],
      correctIndex: 0,
      explanation: 'Menutup koneksi mencegah penumpukan thread koneksi idle di server MySQL.'
    }
  },

  // 450. COMMIT
  {
    id: 'php-ref-mysqli-commit',
    title: 'PHP MySQLi: commit()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 450,
    overview: 'Kuasai method $mysqli->commit() / mysqli_commit(): menyimpan dan mengukuhkan seluruh modifikasi data transaksi secara permanen ke dalam tabel database MySQL.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TRANSACTION COMMIT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 450 / 462</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">💾 Pengukuhan Transaksi Permanen (commit)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$mysqli->commit(int $flags = 0, ?string $name = null): bool</code> menuliskan seluruh rangkaian transaksi aktif ke disk storage basis data InnoDB secara permanen.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Alur Kerja Transaksi MySQLi Commit:</h3>";
echo "<ol style='line-height: 1.8;'>";
echo "<li><code>\$mysqli->autocommit(false);</code> (Mulai Transaksi)</li>";
echo "<li><code>\$mysqli->query(\"INSERT INTO orders ...\");</code> (Simpan Order)</li>";
echo "<li><code>\$mysqli->query(\"INSERT INTO order_items ...\");</code> (Simpan Item)</li>";
echo "<li><strong style='color: #059669;'>\$mysqli->commit();</strong> (Pengukuhan Permanen)</li>";
echo "</ol>";
?>`,
    codeExplanation: [
      '$mysqli->commit() memastikan seluruh entri dalam batch transaksi berhasil ditulis bersama.'
    ],
    challenge: {
      instruction: 'Pahami urutan commit transaksi.',
      starterCode: `<?php
echo "\$mysqli->commit(); menyimpan perubahan transaksi permanen.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Mesin penyimpanan (Storage Engine) MySQL manakah yang wajib digunakan agar fitur Transaksi `commit()` dan `rollback()` dapat bekerja?',
      options: [
        '`InnoDB` (mendukung penuh transaksi ACID)',
        '`MyISAM` (tidak mendukung transaksi)',
        '`MEMORY`',
        '`CSV`'
      ],
      correctIndex: 0,
      explanation: 'InnoDB adalah storage engine standar MySQL yang mendukung transaksi ACID, foreign keys, dan row-level locking.'
    }
  },

  // 451. CONNECT
  {
    id: 'php-ref-mysqli-connect',
    title: 'PHP MySQLi: connect() / new mysqli()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 451,
    overview: 'Kuasai konstruktor new mysqli() & fungsi mysqli_connect(): membuka koneksi TCP/IP atau UNIX Socket baru ke server database MySQL/MariaDB.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CONNECTION INIT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 451 / 462</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔌 Inisialisasi Koneksi Database (connect)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>new mysqli(string $hostname, string $username, string $password, string $database, int $port, string $socket)</code> adalah pintu gerbang komunikasi PHP dengan MySQL. Di PHP 8.1+, kegagalan koneksi secara default melempar <code>mysqli_sql_exception</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Format Inisialisasi Koneksi MySQLi Modern (PHP 8.1+):</h3>";
$initCode = <<<PHP
<?php
// Aktifkan mode exception ketat
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

try {
    \$mysqli = new mysqli("localhost", "root", "", "edutech_db", 3306);
    \$mysqli->set_charset("utf8mb4");
    echo "Koneksi ke database edutech_db Sukses!";
} catch (mysqli_sql_exception \$e) {
    echo "Koneksi Gagal: " . \$e->getMessage();
}
?>
PHP;

echo "<pre style='background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 8px;'>";
echo htmlspecialchars($initCode);
echo "</pre>";
?>`,
    codeExplanation: [
      'new mysqli("host", "user", "pass", "db", port) menghubungkan PHP ke daemon MySQL.',
      'mysqli_report() melempar mysqli_sql_exception secara otomatis jika koneksi gagal.'
    ],
    challenge: {
      instruction: 'Pahami inisialisasi new mysqli("localhost", "root", "", "db").',
      starterCode: `<?php
echo "Inisialisasi: \$db = new mysqli('localhost', 'root', '', 'test');";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Tipe Exception apakah yang secara otomatis dilemparkan oleh PHP 8.1+ jika pembuatan objek `new mysqli()` gagal terhubung ke server database?',
      options: [
        '`mysqli_sql_exception`',
        '`PDOException`',
        '`DatabaseError`',
        '`ConnectionException`'
      ],
      correctIndex: 0,
      explanation: 'PHP 8.1+ mengaktifkan mode error MYSQLI_REPORT_STRICT secara default yang melempar mysqli_sql_exception.'
    }
  },

  // 452. CONNECT_ERRNO
  {
    id: 'php-ref-mysqli-connect-errno',
    title: 'PHP MySQLi: connect_errno',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 452,
    overview: 'Kuasai properti $mysqli->connect_errno / mysqli_connect_errno(): membaca kode numerik kesalahan saat koneksi database gagal dibuat (misal: 1045 Access Denied, 2002 Connection Refused).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ERROR CODES</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 452 / 462</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔢 Kode Error Koneksi (connect_errno)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$mysqli->connect_errno</code> (atau <code>mysqli_connect_errno()</code>) mengembalikan angka integer kode kesalahan koneksi (<code>0</code> jika koneksi berhasil).
          </p>
        </div>
      </div>
    `,
    code: `<?php
class MockConnectError {
    public int $connect_errno = 0;
}

$conn = new MockConnectError();

echo "<h3>Hasil Pengujian connect_errno:</h3>";
if ($conn->connect_errno) {
    echo "<p style='color: red;'>Koneksi Gagal dengan Kode Error: {$conn->connect_errno}</p>";
} else {
    echo "<p style='color: #059669;'><strong>✓ Kode Error: 0 (Koneksi Berhasil Sempurna)</strong></p>";
}
?>`,
    codeExplanation: [
      'connect_errno bernilai 0 jika tidak ada kesalahan koneksi.'
    ],
    challenge: {
      instruction: 'Periksa connect_errno dengan if ($mysqli->connect_errno).',
      starterCode: `<?php
$db = (object)['connect_errno' => 0];
echo ($db->connect_errno === 0) ? "Koneksi OK" : "Koneksi Error";
?>`,
      hint: 'Akses $db->connect_errno.'
    },
    quiz: {
      question: 'Berapakah nilai `$mysqli->connect_errno` jika koneksi ke database berhasil terhubung tanpa ada kendala?',
      options: [
        'Integer 0',
        'Integer 200',
        'Integer 1',
        'Boolean true'
      ],
      correctIndex: 0,
      explanation: '0 menandakan tidak ada error koneksi (no error).'
    }
  },

  // 453. CONNECT_ERROR
  {
    id: 'php-ref-mysqli-connect-error',
    title: 'PHP MySQLi: connect_error',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 453,
    overview: 'Kuasai properti $mysqli->connect_error / mysqli_connect_error(): membaca deskripsi pesan teks kesalahan saat proses inisialisasi koneksi database gagal.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ERROR MESSAGES</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 453 / 462</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🩺 Pesan Kesalahan Koneksi (connect_error)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$mysqli->connect_error</code> (atau <code>mysqli_connect_error()</code>) mengembalikan string pesan kegagalan (misal: <em>"Access denied for user 'root'@'localhost'"</em>) atau <code>null</code> jika sukses.
          </p>
        </div>
      </div>
    `,
    code: `<?php
class MockConnMsg {
    public ?string $connect_error = null;
}

$conn = new MockConnMsg();

echo "<h3>Hasil Pengujian connect_error:</h3>";
if ($conn->connect_error) {
    echo "<p style='color: red;'>Pesan Error: {$conn->connect_error}</p>";
} else {
    echo "<p style='color: #059669;'><strong>✓ Status connect_error: NULL (Tidak Ada Error)</strong></p>";
}
?>`,
    codeExplanation: [
      'connect_error memberikan pesan deskriptif untuk diagnosis log server.'
    ],
    challenge: {
      instruction: 'Akses properti connect_error.',
      starterCode: `<?php
$conn = (object)['connect_error' => null];
echo is_null($conn->connect_error) ? "Koneksi Normal" : $conn->connect_error;
?>`,
      hint: 'Akses $conn->connect_error.'
    },
    quiz: {
      question: 'Apa nilai dari `$mysqli->connect_error` jika koneksi database berhasil terjalin sempurna?',
      options: [
        '`null`',
        '`""` (string kosong)',
        '`"OK"`',
        '`false`'
      ],
      correctIndex: 0,
      explanation: 'connect_error bernilai null ketika koneksi berhasil.'
    }
  }
];

module.exports = phpPart41RefMysqli1;
