// ==========================================================
// DATA MATERI PHP: BAB 5 - MYSQL DATABASE & PDO / MYSQLI
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart7Mysql = [
  // 1. MYSQL DATABASE
  {
    id: 'php-mysql-intro',
    title: 'MySQL Database',
    chapter: 'MySQL Database',
    chapterId: 'php-chap-mysql',
    order: 1,
    overview: 'Pengantar basis data relasional (RDBMS) MySQL dengan PHP: pahami konsep Relational Database, tabel, baris (records), kolom (fields), primary key, dan dua driver resmi PHP: PDO (PHP Data Objects) vs MySQLi (MySQL Improved).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">MYSQL DATABASE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 01 / 14</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🗄️ Pengenalan Basis Data Relasional MySQL</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            MySQL adalah sistem manajemen basis data relasional (RDBMS) open-source terpopuler di dunia. PHP berkomunikasi dengan MySQL untuk menyimpan data akun pengguna, transaksi toko online, artikel blog, dan data LMS secara permanen.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div class="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800/50">
            <h4 class="font-bold text-purple-700 dark:text-purple-400 text-sm mb-1">1. PDO (PHP Data Objects) ⭐ Standar Industri</h4>
            <ul class="space-y-1 text-slate-600 dark:text-slate-400">
              <li>• Mendukung 12 sistem database berbeda (MySQL, PostgreSQL, SQLite, SQL Server, Oracle).</li>
              <li>• Pemrograman berorientasi objek (OOP) murni.</li>
              <li>• Sangat mudah saat aplikasi perlu migrasi database.</li>
            </ul>
          </div>

          <div class="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-800/50">
            <h4 class="font-bold text-indigo-700 dark:text-indigo-400 text-sm mb-1">2. MySQLi (MySQL Improved)</h4>
            <ul class="space-y-1 text-slate-600 dark:text-slate-400">
              <li>• Dikhususkan HANYA untuk database MySQL / MariaDB.</li>
              <li>• Mendukung gaya Prosedural dan gaya OOP.</li>
              <li>• Performa sedikit lebih cepat untuk query sederhana khusus MySQL.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    code: `<?php
// Perbandingan Konfigurasi Driver PDO vs MySQLi
$dbHost = "localhost";
$dbUser = "root";
$dbPass = "";
$dbName = "lms_edutech_db";

echo "<h3>Driver Database di PHP:</h3>";
echo "<ul>";
echo "<li><strong>PDO Driver:</strong> <code>new PDO(\"mysql:host=$dbHost;dbname=$dbName\", \$user, \$pass);</code></li>";
echo "<li><strong>MySQLi OOP Driver:</strong> <code>new mysqli(\"$dbHost\", \$user, \$pass, \"$dbName\");</code></li>";
echo "</ul>";

echo "<div style='padding: 12px; background: #ecfdf5; border-left: 4px solid #10b981; color: #065f46;'>";
echo "💡 <strong>Rekomendasi DevGrow:</strong> Gunakan <strong>PDO</strong> untuk proyek enterprise karena mendukung Prepared Statements dan fleksibel antar database (PostgreSQL/MySQL).";
echo "</div>";
?>`,
    codeExplanation: [
      'PDO menggunakan string Data Source Name (DSN) seperti "mysql:host=localhost;dbname=edutech;charset=utf8mb4".',
      'Keduanya mendukung Prepared Statements untuk mencegah serangan SQL Injection secara mutlak.'
    ],
    challenge: {
      instruction: 'Ketahui bahwa PDO mendukung hingga 12 sistem basis data berbeda termasuk PostgreSQL dan SQLite.',
      starterCode: `<?php
echo "PDO adalah lapisan abstraksi database multi-platform resmi PHP.";
?>`,
      hint: 'Klik RUN untuk mereview keunggulan PDO.'
    },
    quiz: {
      question: 'Manakah keunggulan utama dari driver PDO (PHP Data Objects) dibandingkan driver MySQLi di PHP?',
      options: [
        'PDO mendukung 12 sistem database berbeda (multi-database support), sedangkan MySQLi hanya bisa untuk MySQL',
        'PDO hanya bisa digunakan untuk HTML',
        'MySQLi tidak mendukung enkripsi password',
        'PDO tidak mendukung Object-Oriented Programming'
      ],
      correctIndex: 0,
      explanation: 'PDO mendukung lapisan abstraksi database (DBAL) yang dapat terhubung ke MySQL, PostgreSQL, SQLite, Oracle, dll.'
    }
  },

  // 2. MYSQL CONNECT
  {
    id: 'php-mysql-connect',
    title: 'MySQL Connect',
    chapter: 'MySQL Database',
    chapterId: 'php-chap-mysql',
    order: 2,
    overview: 'Pelajari cara membuat koneksi aman ke database server MySQL menggunakan PDO dengan blok try-catch Exception dan MySQLi OOP.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">KONEKSI DATABASE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 02 / 14</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔌 Membuka Koneksi Database (PDO & MySQLi)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Koneksi database selalu dibungkus di dalam blok <code>try...catch(PDOException $e)</code> agar jika terjadi kegagalan server database (seperti password salah atau port down), kredensial rahasia server tidak bocor ke publik.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Parameter Koneksi Database
$host = "localhost";
$dbname = "lms_content_db";
$username = "postgres"; // atau 'root' untuk MySQL
$password = "Dil1212";

echo "<h3>Simulasi Pembuatan Koneksi PDO:</h3>";

try {
    // String DSN (Data Source Name)
    $dsn = "pgsql:host=$host;port=5432;dbname=$dbname";
    
    // Opsi Konfigurasi Keamanan PDO
    $opsi = [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, // Lempar Exception jika terjadi error query
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC, // Kembalikan data sebagai Associative Array
        PDO::ATTR_EMULATE_PREPARES => false // Gunakan native prepared statements mesin DB
    ];
    
    // Inisialisasi Objek PDO
    $pdo = new PDO($dsn, $username, $password, $opsi);
    
    echo "<div style='padding: 15px; background: #ecfdf5; border: 1px solid #10b981; border-radius: 10px; color: #065f46;'>";
    echo "🟢 <strong>KONEKSI SUKSES!</strong> Berhasil terhubung ke database server <strong>$dbname</strong> secara aman.";
    echo "</div>";
} catch (PDOException $e) {
    echo "<div style='padding: 15px; background: #fee2e2; border: 1px solid #ef4444; border-radius: 10px; color: #991b1b;'>";
    echo "🔴 <strong>GAGAL TERHUBUNG:</strong> " . $e->getMessage();
    echo "</div>";
}
?>`,
    codeExplanation: [
      'PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION mengubah semua error SQL database menjadi Exception yang dapat ditangkap rapi oleh blok catch.',
      'PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC memastikan hasil fetch query selalu berupa Array Asosiatif (nama kolom sebagai kunci).'
    ],
    challenge: {
      instruction: 'Ketahui kelas Exception khusus penanganan error koneksi database adalah PDOException.',
      starterCode: `<?php
echo "Gunakan catch (PDOException \$e) untuk menangani kegagalan koneksi database.";
?>`,
      hint: 'Klik RUN untuk mereview PDOException.'
    },
    quiz: {
      question: 'Opsi atribut PDO apakah yang disetel agar setiap kesalahan query SQL otomatis dilempar sebagai Exception yang dapat ditangkap oleh try-catch?',
      options: [
        'PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION',
        'PDO::ATTR_AUTO_ERROR',
        'PDO::DEBUG_MODE_ON',
        'PDO::ENABLE_THROW'
      ],
      correctIndex: 0,
      explanation: 'PDO::ERRMODE_EXCEPTION menginstruksikan PDO untuk melempar PDOException saat terjadi kesalahan query SQL.'
    }
  },

  // 3. MYSQL CREATE DB
  {
    id: 'php-mysql-create-db',
    title: 'MySQL Create DB',
    chapter: 'MySQL Database',
    chapterId: 'php-chap-mysql',
    order: 3,
    overview: 'Pelajari perintah DDL SQL "CREATE DATABASE [IF NOT EXISTS]" untuk membuat skema basis data baru melalui eksekusi skrip PHP.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CREATE DATABASE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 03 / 14</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏗️ Membuat Database Baru (CREATE DATABASE)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Perintah SQL <code>CREATE DATABASE nama_database</code> membuat ruang penyimpanan skema baru di server MySQL. Selalu gunakan klausa <code>IF NOT EXISTS</code> agar tidak memicu error jika database tersebut sudah ada.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$sql = "CREATE DATABASE IF NOT EXISTS devgrow_store_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci";

echo "<h3>Query Pembuatan Basis Data:</h3>";
echo "<pre style='background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 10px; font-family: monospace;'>$sql</pre>";

echo "<div style='padding: 12px; background: #f8fafc; border-left: 4px solid #4f46e5;'>";
echo "📌 <strong>Catatan Karakter:</strong> <code>utf8mb4</code> adalah standar pengodean karakter modern yang mendukung semua bahasa di dunia dan emoji.";
echo "</div>";
?>`,
    codeExplanation: [
      'Klausa CHARACTER SET utf8mb4 memastikan database mampu menampung karakter multibyte internasional dan simbol emoji.',
      'Di PDO, perintah DDL dijalankan menggunakan method $pdo->exec($sql).'
    ],
    challenge: {
      instruction: 'Pelajari query: CREATE DATABASE IF NOT EXISTS lms_db;',
      starterCode: `<?php
$query = "CREATE DATABASE IF NOT EXISTS lms_db";
echo "Query DDL: $query";
?>`,
      hint: 'Klik RUN untuk melihat query pembuatan DB.'
    },
    quiz: {
      question: 'Klausa SQL apakah yang ditambahkan pada perintah CREATE DATABASE agar tidak terjadi error saat database tersebut sudah pernah dibuat sebelumnya?',
      options: [
        'IF NOT EXISTS',
        'IF MISSING',
        'OR REPLACE',
        'TRY CREATE'
      ],
      correctIndex: 0,
      explanation: 'CREATE DATABASE IF NOT EXISTS hanya akan membuat database baru jika database dengan nama tersebut belum ada di server.'
    }
  },

  // 4. MYSQL CREATE TABLE
  {
    id: 'php-mysql-create-table',
    title: 'MySQL Create Table',
    chapter: 'MySQL Database',
    chapterId: 'php-chap-mysql',
    order: 4,
    overview: 'Kuasai pembuatan tabel data (CREATE TABLE): tipe data kolom (INT, VARCHAR, TEXT, TIMESTAMP), AUTO_INCREMENT, NOT NULL, PRIMARY KEY, dan FOREIGN KEY.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CREATE TABLE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 04 / 14</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📊 Merancang Tabel Data (CREATE TABLE)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Tabel terdiri dari baris (records) dan kolom (fields). Setiap tabel harus memiliki <strong>PRIMARY KEY</strong> yang bersifat unik untuk membedakan satu baris data dengan baris lainnya.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$sqlCreateTable = "
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'STUDENT',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;
";

echo "<h3>Struktur Skema Tabel Pengguna (Users):</h3>";
echo "<pre style='background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 10px; font-family: monospace;'>$sqlCreateTable</pre>";
?>`,
    codeExplanation: [
      'AUTO_INCREMENT membuat nomor ID bertambah otomatis (1, 2, 3, ...) setiap ada data baru yang masuk.',
      'UNIQUE pada kolom email mencegah duplikasi akun dengan alamat email yang sama.',
      'ENGINE=InnoDB mendukung transaksi ACID dan foreign key relationships.'
    ],
    challenge: {
      instruction: 'Pahami kata kunci PRIMARY KEY digunakan untuk menandai kolom pengenal unik.',
      starterCode: `<?php
echo "PRIMARY KEY menjamin setiap baris data memiliki identitas unik yang tidak boleh duplikat.";
?>`,
      hint: 'Klik RUN untuk mereview PRIMARY KEY.'
    },
    quiz: {
      question: 'Atribut kolom apakah yang membuat nomor identifikasi (ID) otomatis bertambah 1 secara berurutan setiap ada data baru yang disimpan?',
      options: [
        'AUTO_INCREMENT (atau SERIAL di PostgreSQL)',
        'AUTO_PLUS',
        'INCREMENTAL',
        'SEQUENCE_AUTO'
      ],
      correctIndex: 0,
      explanation: 'AUTO_INCREMENT pada MySQL secara otomatis mengisikan angka integer berurutan untuk setiap baris baru.'
    }
  },

  // 5. MYSQL INSERT DATA
  {
    id: 'php-mysql-insert',
    title: 'MySQL Insert Data',
    chapter: 'MySQL Database',
    chapterId: 'php-chap-mysql',
    order: 5,
    overview: 'Pelajari perintah SQL INSERT INTO untuk menyimpan data baris baru ke dalam tabel basis data menggunakan PDO dan MySQLi.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">INSERT DATA</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 05 / 14</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📥 Menyimpan Data Baru (INSERT INTO)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Perintah <code>INSERT INTO nama_tabel (kolom1, kolom2) VALUES (nilai1, nilai2)</code> menyisipkan satu baris data baru ke dalam tabel.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$sql = "INSERT INTO users (nama, email, password_hash, role) VALUES ('Muhammad Rahmat Fadila', 'fadila@devgrow.id', '\$2y\$10\$...', 'INSTRUCTOR')";

echo "<h3>Query Penambahan Data:</h3>";
echo "<pre style='background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 10px; font-family: monospace;'>$sql</pre>";
echo "<p style='color: green; font-weight: bold;'>✅ 1 Baris data baru siap disimpan ke tabel 'users'.</p>";
?>`,
    codeExplanation: [
      'Daftar nama kolom diletakkan di dalam tanda kurung pertama setelah nama tabel.',
      'Nilai string di dalam VALUES wajib diapit oleh tanda kutip tunggal (\'...\').'
    ],
    challenge: {
      instruction: 'Tuliskan sintaks dasar query INSERT INTO produk (nama, harga) VALUES (\'Buku\', 50000);',
      starterCode: `<?php
$sql = "INSERT INTO produk (nama, harga) VALUES ('Buku Panduan PHP 8', 75000)";
echo "SQL: $sql";
?>`,
      hint: 'Klik RUN untuk melihat format query INSERT.'
    },
    quiz: {
      question: 'Kata kunci SQL apakah yang digunakan untuk memasukkan data baris baru ke dalam tabel?',
      options: [
        'INSERT INTO',
        'ADD ROW',
        'PUT DATA',
        'CREATE RECORD'
      ],
      correctIndex: 0,
      explanation: 'Perintah standar SQL untuk menyimpan data baru ke tabel adalah INSERT INTO nama_tabel (...) VALUES (...).'
    }
  },

  // 6. MYSQL GET LAST ID
  {
    id: 'php-mysql-last-id',
    title: 'MySQL Get Last ID',
    chapter: 'MySQL Database',
    chapterId: 'php-chap-mysql',
    order: 6,
    overview: 'Pelajari cara mengambil nomor ID primary key yang baru saja digenerate dari query INSERT menggunakan $pdo->lastInsertId() atau $mysqli->insert_id.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">LAST INSERT ID</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 06 / 14</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🆔 Menangkap ID Data Baru (lastInsertId)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Saat membuat transaksi (seperti Order baru), Anda sering kali membutuhkan nomor ID order tersebut untuk langsung membuat detail item pesanan (Foreign Key relationship).
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Simulasi proses penangkapan ID terakhir di PDO
$lastId = 142; // Hasil dari $pdo->lastInsertId();

echo "<h3>Alur Pendaftaran Pesanan Toko:</h3>";
echo "<ol>";
echo "<li>Menyimpan data pesanan utama ke tabel <code>orders</code>...</li>";
echo "<li>Mengambil ID yang baru digenerate: <code>\$orderId = \$pdo->lastInsertId();</code> (ID: <strong>#$lastId</strong>)</li>";
echo "<li>Menyimpan 3 item barang ke tabel <code>order_items</code> dengan <code>order_id = $lastId</code></li>";
echo "</ol>";

echo "<div style='padding: 12px; background: #ecfdf5; border-radius: 8px; color: #065f46;'>";
echo "🎉 Transaksi pesanan #$lastId berhasil dicatat secara lengkap berkat <code>lastInsertId()</code>!";
echo "</div>";
?>`,
    codeExplanation: [
      '$pdo->lastInsertId() mengembalikan nilai AUTO_INCREMENT terakhir yang berhasil dimasukkan pada sesi koneksi database tersebut.',
      'Sangat krusial dalam relasi One-to-Many pada tabel database relasional.'
    ],
    challenge: {
      instruction: 'Pelajari fungsi method $pdo->lastInsertId();.',
      starterCode: `<?php
echo "Method \$pdo->lastInsertId() mengembalikan angka ID dari baris yang baru disisipkan.";
?>`,
      hint: 'Klik RUN untuk mereview lastInsertId.'
    },
    quiz: {
      question: 'Method PDO apakah yang dipanggil untuk mendapatkan nomor AUTO_INCREMENT ID dari data yang baru saja di-insert?',
      options: [
        '$pdo->lastInsertId()',
        '$pdo->getId()',
        '$pdo->insertedId()',
        '$pdo->currentId()'
      ],
      correctIndex: 0,
      explanation: '$pdo->lastInsertId() adalah method resmi PDO untuk mengembalikan ID baris terakhir yang disisipkan.'
    }
  },

  // 7. MYSQL INSERT MULTIPLE
  {
    id: 'php-mysql-insert-multiple',
    title: 'MySQL Insert Multiple',
    chapter: 'MySQL Database',
    chapterId: 'php-chap-mysql',
    order: 7,
    overview: 'Kuasai penyimpanan data banyak sekaligus (Bulk Insert / Multiple Rows) dan konsep Database Transactions (beginTransaction, commit, rollBack) untuk integritas data ACID.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">BULK INSERT & TRANSAKSI</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 07 / 14</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📦 Multi-Insert & Transaksi Database (ACID)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Mengirimkan ribuan data satu per satu membebani jaringan database. Gunakan <strong>Bulk Insert</strong> atau bungkus operasi di dalam <strong>Database Transaction</strong> agar jika terjadi error di tengah jalan, seluruh perubahan otomatis dibatalkan (<code>rollBack()</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Simulasi Transaksi Database (Transfer Saldo Aman):</h3>";

try {
    // 1. Mulai Transaksi (beginTransaction)
    // $pdo->beginTransaction();
    echo "<p>1. <code>\$pdo->beginTransaction();</code> (Memulai zona transaksi aman)</p>";

    // 2. Kurangi Saldo Pengirim
    echo "<p>2. Mengurangi saldo Pengirim sebesar Rp 500.000...</p>";

    // 3. Tambah Saldo Penerima
    echo "<p>3. Menambah saldo Penerima sebesar Rp 500.000...</p>";

    // 4. Jika kedua query sukses, permanenkan ke database (commit)
    // $pdo->commit();
    echo "<p style='color: green; font-weight: bold;'>4. <code>\$pdo->commit();</code> (Transaksi Berhasil & Permanen!)</p>";
} catch (Exception $e) {
    // 5. Jika ada kegagalan, batalkan semua (rollBack)
    // $pdo->rollBack();
    echo "<p style='color: red;'>⚠️ Terjadi error! <code>\$pdo->rollBack();</code> membatalkan semua perubahan uang.</p>";
}
?>`,
    codeExplanation: [
      '$pdo->beginTransaction() memulai transaksi.',
      '$pdo->commit() menyimpan seluruh perubahan secara permanen.',
      '$pdo->rollBack() membatalkan seluruh query jika salah satu baris gagal, mencegah saldo hilang.'
    ],
    challenge: {
      instruction: 'Ketahui trio method transaksi di PDO: beginTransaction(), commit(), dan rollBack().',
      starterCode: `<?php
echo "Transaksi menjamin integritas data (All or Nothing).";
?>`,
      hint: 'Klik RUN untuk mereview transaksi database.'
    },
    quiz: {
      question: 'Method apa yang dipanggil pada objek PDO untuk membatalkan seluruh perubahan database di dalam blok catch saat transaksi gagal?',
      options: [
        '$pdo->rollBack()',
        '$pdo->cancel()',
        '$pdo->undo()',
        '$pdo->abort()'
      ],
      correctIndex: 0,
      explanation: '$pdo->rollBack() mengembalikan status database ke keadaan semula sebelum beginTransaction() dipanggil.'
    }
  },

  // 8. MYSQL PREPARED STATEMENTS
  {
    id: 'php-mysql-prepared',
    title: 'MySQL Prepared Statements',
    chapter: 'MySQL Database',
    chapterId: 'php-chap-mysql',
    order: 8,
    overview: 'Kuasai senjata terpenting keamanan web: Prepared Statements & Parameterized Queries untuk membasmi serangan SQL Injection secara 100%. Pelajari placeholder bertanda tanya (?) dan named parameter (:param).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PREPARED STATEMENTS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 08 / 14</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛡️ Keamanan Mutlak: Anti SQL Injection</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <strong>SQL Injection</strong> terjadi ketika input pengguna digabungkan langsung ke string query SQL. <strong>Prepared Statements</strong> memisahkan antara instruksi SQL dan data input sehingga karakter berbahaya penyerang (seperti <code>' OR '1'='1</code>) diperlakukan murni sebagai teks biasa, BUKAN perintah SQL!
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div class="p-4 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-800/50">
            <h4 class="font-bold text-rose-700 dark:text-rose-400 mb-1">❌ Bahaya! Query Rentan SQLi</h4>
            <p class="text-slate-600 dark:text-slate-400 mb-2">Menggabungkan input langsung ke string SQL:</p>
            <pre class="bg-slate-950 text-slate-200 p-2 rounded text-[10px] font-mono">"SELECT * FROM users WHERE email = '$userInput'"</pre>
          </div>
          <div class="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-800/50">
            <h4 class="font-bold text-emerald-700 dark:text-emerald-400 mb-1">✅ 100% Aman! Prepared Statements</h4>
            <p class="text-slate-600 dark:text-slate-400 mb-2">Menggunakan Named Placeholder <code>:email</code>:</p>
            <pre class="bg-slate-950 text-slate-200 p-2 rounded text-[10px] font-mono">$stmt = $pdo->prepare("SELECT * FROM users WHERE email = :email");
$stmt->execute(['email' => $userInput]);</pre>
          </div>
        </div>
      </div>
    `,
    code: `<?php
// Simulasi Input Jahat dari Hacker
$emailHacker = "' OR '1'='1' -- ";
$passwordHacker = "sembarang";

echo "<h3>Demonstrasi Kekuatan Prepared Statements PDO:</h3>";

// 1. Template SQL dengan Named Parameters (:email)
$sqlTemplate = "SELECT * FROM users WHERE email = :email AND is_active = :status";

echo "<p>Template Query: <code>$sqlTemplate</code></p>";
echo "<p>Data Parameter Diikat (Bound Array):</p>";
echo "<pre style='background: #0f172a; color: #38bdf8; padding: 10px; border-radius: 8px;'>[
    'email' => \"$emailHacker\",
    'status' => true
]</pre>";

echo "<div style='padding: 12px; background: #ecfdf5; border-radius: 8px; color: #065f46;'>";
echo "🛡️ <strong>Mesin Database:</strong> Input jahat diperlakukan 100% sebagai teks string pencarian, sehingga serangan peretasan SQL Injection GAGAL TOTAL!";
echo "</div>";
?>`,
    codeExplanation: [
      '$pdo->prepare($sql) mengirimkan denah query ke database server terlebih dahulu untuk di-compile.',
      '$stmt->execute([\'param\' => $val]) mengirimkan data variabel secara terpisah melalui saluran data terenkripsi.',
      'Standar wajib di seluruh industri pengembangan web profesional.'
    ],
    challenge: {
      instruction: 'Pahami langkah 2 tahap: $stmt = $pdo->prepare($sql); lalu $stmt->execute($params);.',
      starterCode: `<?php
echo "Selalu gunakan prepare() dan execute() untuk setiap query yang melibatkan input pengguna!";
?>`,
      hint: 'Klik RUN untuk mereview prepared statements.'
    },
    quiz: {
      question: 'Mengapa Prepared Statements mampu mencegah serangan SQL Injection secara mutlak?',
      options: [
        'Karena struktur perintah SQL dan data input dipisahkan, sehingga input pengguna tidak pernah dieksekusi sebagai kode perintah SQL oleh mesin database',
        'Karena otomatis mengubah password menjadi MD5',
        'Karena memperlambat koneksi database',
        'Karena hanya bisa berjalan di browser Chrome'
      ],
      correctIndex: 0,
      explanation: 'Prepared Statements mengirimkan struktur query terpisah dari data, sehingga database memperlakukan data murni sebagai parameter teks tanpa pernah mengeksekusinya sebagai perintah logika SQL.'
    }
  },

  // 9. MYSQL SELECT DATA
  {
    id: 'php-mysql-select',
    title: 'MySQL Select Data',
    chapter: 'MySQL Database',
    chapterId: 'php-chap-mysql',
    order: 9,
    overview: 'Kuasai pengambilan data dari database: query SELECT, $stmt->fetchAll(PDO::FETCH_ASSOC), $stmt->fetch(), dan looping rendering ke tabel HTML.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SELECT DATA</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 09 / 14</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📋 Membaca Data (SELECT & fetchAll)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Perintah <code>SELECT kolom1, kolom2 FROM nama_tabel</code> digunakan untuk mengambil rekaman data dari database. Di PDO, hasil query diambil menggunakan method <code>fetch()</code> (satu baris) atau <code>fetchAll()</code> (semua baris sekaligus).
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Simulasi Data Hasil Fetch dari Database
$daftarModul = [
    ["id" => "html", "title" => "HTML Fundamentals", "category" => "Frontend", "total_materi" => 42],
    ["id" => "css", "title" => "Modern Responsive CSS", "category" => "Frontend", "total_materi" => 55],
    ["id" => "js", "title" => "JavaScript Mastery", "category" => "Programming", "total_materi" => 65],
    ["id" => "php", "title" => "PHP 8.x Server-Side", "category" => "Backend", "total_materi" => 88]
];

echo "<h3>Daftar Modul Belajar (Hasil Query SELECT):</h3>";
echo "<table border='1' cellpadding='8' style='border-collapse: collapse; width: 100%;'>";
echo "<tr style='background: #f1f5f9;'><th>ID</th><th>Judul Kursus</th><th>Kategori</th><th>Total Pelajaran</th></tr>";

foreach ($daftarModul as $m) {
    echo "<tr>";
    echo "<td><code>" . $m['id'] . "</code></td>";
    echo "<td><strong>" . $m['title'] . "</strong></td>";
    echo "<td><span style='background: #e0e7ff; padding: 2px 6px; border-radius: 4px; font-size: 11px;'>" . $m['category'] . "</span></td>";
    echo "<td>" . $m['total_materi'] . " Materi</td>";
    echo "</tr>";
}

echo "</table>";
?>`,
    codeExplanation: [
      '$stmt->fetchAll(PDO::FETCH_ASSOC) mengembalikan array asosiatif berisi semua baris data tabel.',
      'Foreach loop merender setiap baris data ke elemen <tr> dan <td> HTML secara dinamis.'
    ],
    challenge: {
      instruction: 'Pelajari method $stmt->fetch() untuk mengambil 1 baris record tunggal (misal detail profil).',
      starterCode: `<?php
echo "Gunakan fetch() untuk 1 baris data (misal pencarian by ID) dan fetchAll() untuk daftar banyak baris.";
?>`,
      hint: 'Klik RUN untuk mereview fetch vs fetchAll.'
    },
    quiz: {
      question: 'Method PDOStatement apakah yang digunakan untuk mengambil SEMUA baris hasil query sekaligus ke dalam sebuah Array?',
      options: [
        'fetchAll()',
        'fetchRows()',
        'getAll()',
        'collect()'
      ],
      correctIndex: 0,
      explanation: '$stmt->fetchAll() mengembalikan seluruh baris hasil query sebagai array.'
    }
  },

  // 10. MYSQL WHERE
  {
    id: 'php-mysql-where',
    title: 'MySQL Where',
    chapter: 'MySQL Database',
    chapterId: 'php-chap-mysql',
    order: 10,
    overview: 'Pelajari klausa WHERE untuk menyaring (filter) data spesifik: operator pembanding (=, !=, <, >, <=, >=), klausa LIKE (pencarian teks), IN (...), dan BETWEEN.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">FILTER WHERE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 10 / 14</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎯 Menyaring Data dengan Klausa WHERE</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Klausa <code>WHERE</code> digunakan untuk membatasi operasi SQL agar hanya berlaku pada baris data yang memenuhi kriteria tertentu saja.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <code class="text-purple-600 dark:text-purple-400 font-bold block mb-1">WHERE kategori = 'Backend'</code>
            Pencocokan nilai persis (Exact match).
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <code class="text-indigo-600 dark:text-indigo-400 font-bold block mb-1">WHERE judul LIKE '%PHP%'</code>
            Pencarian parsial teks (Search keyword).
          </div>
        </div>
      </div>
    `,
    code: `<?php
$keywordPencarian = "PHP";

// Query parameterized dengan klausa WHERE dan LIKE
$sql = "SELECT id, title, category FROM \"Module\" WHERE category = :cat AND title ILIKE :search";
$params = [
    "cat" => "Backend",
    "search" => "%" . $keywordPencarian . "%"
];

echo "<h3>Query Filter Bersyarat (WHERE):</h3>";
echo "<pre style='background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 8px;'>$sql</pre>";
echo "<p>Kriteria: Kategori = <strong>Backend</strong> DAN Judul memuat <strong>'$keywordPencarian'</strong></p>";
?>`,
    codeExplanation: [
      'Karakter wildcard % pada LIKE/ILIKE berarti mencocokkan karakter apa pun sebelum atau sesudah kata kunci.',
      'Selalu kirimkan nilai parameter filter melalui array execute() demi keamanan.'
    ],
    challenge: {
      instruction: 'Buat query dengan klausa WHERE status = "ACTIVE".',
      starterCode: `<?php
$query = "SELECT * FROM users WHERE status = 'ACTIVE'";
echo $query;
?>`,
      hint: 'Gunakan WHERE status = \'ACTIVE\'.'
    },
    quiz: {
      question: 'Karakter wildcard apa yang digunakan pada operator SQL LIKE untuk mencocokkan sejumlah karakter sembarang?',
      options: [
        '% (Persen)',
        '* (Bintang)',
        '? (Tanda Tanya)',
        '# (Hash)'
      ],
      correctIndex: 0,
      explanation: 'Simbol % pada SQL LIKE mewakili nol, satu, atau banyak karakter (contoh: \'%php%\').'
    }
  },

  // 11. MYSQL ORDER BY
  {
    id: 'php-mysql-order-by',
    title: 'MySQL Order By',
    chapter: 'MySQL Database',
    chapterId: 'php-chap-mysql',
    order: 11,
    overview: 'Pelajari pengurutan hasil kueri database dengan ORDER BY: pengurutan menaik (ASC - Ascending) dan menurun (DESC - Descending), serta multi-column sorting.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ORDER BY</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 11 / 14</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔀 Mengurutkan Data (ORDER BY ASC / DESC)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Klausa <code>ORDER BY</code> mengurutkan baris hasil query berdasarkan satu atau beberapa kolom. Gunakan <code>ASC</code> (default) untuk urutan terkecil-ke-terbesar (A-Z / 0-9) dan <code>DESC</code> untuk terbesar-ke-terkecil (Z-A / Terbaru).
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Mengurutkan Leaderboard XP Pengguna dari Terbesar ke Terkecil (DESC)
$sql = "SELECT nama, xp, badge FROM users ORDER BY xp DESC, created_at ASC";

echo "<h3>Query Papan Peringkat (ORDER BY):</h3>";
echo "<pre style='background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 8px;'>$sql</pre>";
echo "<p>Hasil akan menampilkan siswa dengan <strong>XP tertinggi di posisi paling atas</strong>.</p>";
?>`,
    codeExplanation: [
      'ORDER BY xp DESC menempatkan skor tertinggi di posisi #1.',
      'Koma setelah kolom pertama memungkinkan secondary sorting (misal jika skor sama, urutkan berdasarkan siapa yang daftar lebih awal).'
    ],
    challenge: {
      instruction: 'Buat query pengurutan postingan terbaru: SELECT * FROM posts ORDER BY created_at DESC;.',
      starterCode: `<?php
$sql = "SELECT * FROM posts ORDER BY created_at DESC";
echo $sql;
?>`,
      hint: 'Gunakan ORDER BY created_at DESC.'
    },
    quiz: {
      question: 'Kata kunci apa yang digunakan bersama ORDER BY untuk mengurutkan data dari nilai TERBESAR ke TERKECIL atau dari data TERBARU ke TERLAMA?',
      options: [
        'DESC',
        'ASC',
        'DOWN',
        'REVERSE'
      ],
      correctIndex: 0,
      explanation: 'DESC (Descending) mengurutkan data dari atas ke bawah (nilai terbesar ke terkecil).'
    }
  },

  // 12. MYSQL DELETE DATA
  {
    id: 'php-mysql-delete',
    title: 'MySQL Delete Data',
    chapter: 'MySQL Database',
    chapterId: 'php-chap-mysql',
    order: 12,
    overview: 'Pelajari cara menghapus data secara aman menggunakan DELETE FROM dengan klausa WHERE eksplisit, $stmt->rowCount(), dan konsep Soft Delete (is_deleted = true).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DELETE DATA</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 12 / 14</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🗑️ Menghapus Data Secara Aman (DELETE)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <strong style="color: red;">PERINGATAN KRITIS:</strong> Jangan pernah mengeksekusi perintah <code>DELETE FROM nama_tabel</code> tanpa klausa <code>WHERE id = :id</code>, karena hal itu akan <strong>MENGHAPUS SELURUH BARIS DATA</strong> di tabel Anda seketika!
          </p>
        </div>
      </div>
    `,
    code: `<?php
$targetHapusId = 45;

// Query Delete Aman dengan Prepared Statement
$sql = "DELETE FROM \"Lesson\" WHERE id = :id";

echo "<h3>Query Penghapusan Data Spesifik:</h3>";
echo "<pre style='background: #fee2e2; color: #991b1b; padding: 12px; border-radius: 8px;'>$sql (Target ID: $targetHapusId)</pre>";

echo "<p>Memeriksa jumlah baris yang terhapus: <code>\$totalHapus = \$stmt->rowCount();</code></p>";
?>`,
    codeExplanation: [
      'Klausa WHERE id = :id memastikan hanya 1 rekaman yang dihapus.',
      '$stmt->rowCount() mengembalikan jumlah baris yang berhasil dihapus oleh database server.'
    ],
    challenge: {
      instruction: 'Ketahui bahwa menjalankan DELETE tanpa WHERE akan menghapus seluruh data tabel.',
      starterCode: `<?php
echo "Selalu sertakan WHERE spesifik saat menjalankan query DELETE!";
?>`,
      hint: 'Klik RUN untuk mereview aturan delete safety.'
    },
    quiz: {
      question: 'Apa akibat yang sangat fatal jika Anda mengeksekusi perintah "DELETE FROM users" tanpa menuliskan klausa WHERE?',
      options: [
        'Seluruh baris data di dalam tabel users akan terhapus bersih tanpa tersisa',
        'Hanya 1 baris pertama yang dihapus',
        'Database otomatis membatalkan operasi',
        'Akan muncul popup konfirmasi di browser'
      ],
      correctIndex: 0,
      explanation: 'Tanpa klausa WHERE, perintah DELETE akan menghapus seluruh rekaman data yang ada di dalam tabel tersebut.'
    }
  },

  // 13. MYSQL UPDATE DATA
  {
    id: 'php-mysql-update',
    title: 'MySQL Update Data',
    chapter: 'MySQL Database',
    chapterId: 'php-chap-mysql',
    order: 13,
    overview: 'Pelajari pembaruan data yang sudah ada di database menggunakan UPDATE ... SET ... WHERE ... dengan Prepared Statements dan pengecekan $stmt->rowCount().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">UPDATE DATA</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 13 / 14</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">✏️ Memperbarui Data (UPDATE SET WHERE)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Perintah <code>UPDATE nama_tabel SET kolom1 = :val1, kolom2 = :val2 WHERE id = :id</code> digunakan untuk mengubah isi kolom yang sudah ada. Sama seperti DELETE, klausa WHERE wajib disertakan agar tidak mengubah semua baris.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Query Pembaruan Profil Pengguna
$sqlUpdate = "UPDATE users SET nama = :nama, xp = xp + :tambahXp, updated_at = NOW() WHERE id = :id";

$params = [
    "nama" => "Muhammad Rahmat Fadila, S.Kom.",
    "tambahXp" => 250,
    "id" => 1
];

echo "<h3>Query Pembaruan Data (UPDATE):</h3>";
echo "<pre style='background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 8px;'>$sqlUpdate</pre>";
echo "<p style='color: green;'>✅ Data pengguna #1 berhasil diperbarui dan XP bertambah 250.</p>";
?>`,
    codeExplanation: [
      'UPDATE users SET nama = :nama ... memperbarui nilai kolom nama.',
      'Sintaks xp = xp + :tambahXp melakukan penambahan nilai angka secara atomic langsung di mesin database.'
    ],
    challenge: {
      instruction: 'Tuliskan format query UPDATE: UPDATE settings SET theme = "dark" WHERE user_id = 5;',
      starterCode: `<?php
$sql = "UPDATE settings SET theme = :theme WHERE user_id = :uid";
echo $sql;
?>`,
      hint: 'Klik RUN untuk melihat query UPDATE.'
    },
    quiz: {
      question: 'Klausa apa yang digunakan bersama perintah UPDATE untuk menentukan nilai baru bagi kolom yang akan diubah?',
      options: [
        'SET',
        'VALUES',
        'INTO',
        'CHANGE'
      ],
      correctIndex: 0,
      explanation: 'Format resmi SQL UPDATE adalah: UPDATE nama_tabel SET kolom = nilai WHERE kondisi.'
    }
  },

  // 14. MYSQL LIMIT DATA
  {
    id: 'php-mysql-limit',
    title: 'MySQL Limit Data',
    chapter: 'MySQL Database',
    chapterId: 'php-chap-mysql',
    order: 14,
    overview: 'Kuasai teknik Paginasi (Pagination) di web: klausa LIMIT dan OFFSET untuk membatasi jumlah data per halaman dan menghitung lompatan baris.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">LIMIT & PAGINASI</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 14 / 14</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📑 Pembatasan Data & Sistem Paginasi (LIMIT & OFFSET)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Jika tabel memiliki 100.000 data, mengambil semuanya sekaligus akan membuat browser hang dan server kehabisan memori. Gunakan <code>LIMIT</code> (jumlah data per halaman) dan <code>OFFSET</code> (jumlah data yang dilewati).
          </p>
        </div>

        <div class="p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs border border-slate-800 space-y-2">
          <div class="text-amber-400 font-bold">Rumus Matematika Paginasi PHP:</div>
          <pre class="text-sky-300">$limit = 10; // 10 data per halaman
$halamanAktif = (int)($_GET['page'] ?? 1);
$offset = ($halamanAktif - 1) * $limit;</pre>
        </div>
      </div>
    `,
    code: `<?php
$halamanSaatIni = 3;
$dataPerHalaman = 10;
$offset = ($halamanSaatIni - 1) * $dataPerHalaman; // (3 - 1) * 10 = 20

$sql = "SELECT id, title, category FROM \"Module\" ORDER BY id ASC LIMIT :limit OFFSET :offset";

echo "<h3>Kalkulasi Paginasi Halaman ke-$halamanSaatIni:</h3>";
echo "<ul>";
echo "<li>Data Per Halaman (LIMIT): <strong>$dataPerHalaman</strong> baris</li>";
echo "<li>Lompat Lewati Data Sebelumnya (OFFSET): <strong>$offset</strong> baris</li>";
echo "<li>Rentang Baris yang Ditampilkan: Baris ke-<strong>" . ($offset + 1) . "</strong> sampai <strong>" . ($offset + $dataPerHalaman) . "</strong></li>";
echo "</ul>";

echo "<pre style='background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 8px;'>$sql</pre>";
?>`,
    codeExplanation: [
      'LIMIT 10 OFFSET 20 mengambil 10 baris data mulai dari data nomor 21 sampai 30.',
      'Sangat efisien dalam membangun tabel interaktif dengan tombol "Halaman Sebelumnya" dan "Halaman Berikutnya".'
    ],
    challenge: {
      instruction: 'Hitung offset untuk halaman 2 dengan limit 5 data per halaman: ($page - 1) * $limit = 5.',
      starterCode: `<?php
$page = 2;
$limit = 5;
$offset = ($page - 1) * $limit;
echo "Offset halaman 2: $offset";
?>`,
      hint: 'Klik RUN untuk menguji rumus paginasi.'
    },
    quiz: {
      question: 'Jika ingin menampilkan 10 data per halaman pada Halaman ke-4, berapakah nilai OFFSET yang harus dikirim ke query SQL?',
      options: [
        '30 (karena (4 - 1) * 10 = 30)',
        '40',
        '20',
        '10'
      ],
      correctIndex: 0,
      explanation: 'Rumus OFFSET adalah: (Halaman - 1) * Limit = (4 - 1) * 10 = 30.'
    }
  }
];

module.exports = phpPart7Mysql;
