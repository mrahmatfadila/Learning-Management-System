// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (MYSQLI PART 4: 475-486)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart44RefMysqli4 = [
  // 475. GET_CONNECTION_STATS
  {
    id: 'php-ref-mysqli-get-connection-stats',
    title: 'PHP MySQLi: get_connection_stats()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 475,
    overview: 'Kuasai method $mysqli->get_connection_stats() / mysqli_get_connection_stats(): mendapatkan statistik performa koneksi mysqlnd (bytes sent/received, command counts, dll.) untuk profiling.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CONNECTION PROFILING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 475 / 505</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📊 Statistik Performa Koneksi (get_connection_stats)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$mysqli->get_connection_stats(): array|false</code> mengembalikan array asosiatif berisi metrik performa koneksi mysqlnd seperti <code>bytes_sent</code>, <code>bytes_received</code>, <code>packets_sent</code>, <code>command_count</code>, dan lainnya.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Simulasi statistik koneksi mysqlnd
$stats = [
    'bytes_sent'     => 1024,
    'bytes_received' => 8192,
    'packets_sent'   => 4,
    'packets_received' => 12,
    'command_count'  => 3,
];

echo "<h3>Hasil Simulasi \$mysqli->get_connection_stats():</h3>";
echo "<ul>";
foreach ($stats as $key => $val) {
    echo "<li><code>$key</code>: <strong style='color:#059669;'>$val</strong></li>";
}
echo "</ul>";
?>`,
    codeExplanation: [
      'get_connection_stats() hanya tersedia pada PHP yang dikompilasi dengan driver mysqlnd (MySQL Native Driver).'
    ],
    challenge: {
      instruction: 'Pahami statistik koneksi dari get_connection_stats.',
      starterCode: `<?php
echo "get_connection_stats() mengembalikan metrik performa koneksi mysqlnd.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Driver MySQL manakah yang diperlukan agar `$mysqli->get_connection_stats()` dapat berfungsi?',
      options: [
        'Driver `mysqlnd` (MySQL Native Driver PHP)',
        'Driver `libmysqlclient`',
        'Semua driver mendukung',
        'PDO driver'
      ],
      correctIndex: 0,
      explanation: 'get_connection_stats adalah fitur eksklusif driver mysqlnd.'
    }
  },

  // 476. GET_SERVER_INFO
  {
    id: 'php-ref-mysqli-get-server-info',
    title: 'PHP MySQLi: get_server_info()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 476,
    overview: 'Kuasai method $mysqli->get_server_info() / mysqli_get_server_info(): mendapatkan string versi server MySQL/MariaDB yang sedang digunakan.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SERVER VERSION STRING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 476 / 505</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🖥️ Versi Server MySQL (get_server_info)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$mysqli->get_server_info(): string</code> mengembalikan string versi server database (misal <code>"8.0.32"</code> atau <code>"10.6.12-MariaDB"</code>). Berguna untuk pengecekan kompatibilitas fitur SQL saat runtime.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$serverInfo = "8.0.32-MySQL Community Server";

echo "<h3>Hasil \$mysqli->get_server_info():</h3>";
echo "<p>Versi Server: <strong style='color:#059669;'>$serverInfo</strong></p>";
echo "<p style='color: green;'>✓ Server MySQL 8.0+ mendukung fitur CTE (WITH clause), JSON Table, dan Window Functions.</p>";
?>`,
    codeExplanation: [
      'get_server_info() membantu validasi apakah server mendukung fitur SQL tertentu sebelum menggunakannya.'
    ],
    challenge: {
      instruction: 'Cetak info server dengan $mysqli->get_server_info().',
      starterCode: `<?php
echo "Sintaks: echo \$mysqli->get_server_info();";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Apa perbedaan antara `$mysqli->get_server_info()` dan `$mysqli->get_client_info()`?',
      options: [
        '`get_server_info()` mengembalikan versi daemon MySQL di server, sedangkan `get_client_info()` mengembalikan versi library driver client di sisi PHP',
        'Keduanya sama',
        '`get_server_info()` untuk versi PHP',
        '`get_client_info()` untuk versi server'
      ],
      correctIndex: 0,
      explanation: 'Server info = versi MySQL daemon; client info = versi library C/mysqlnd yang digunakan PHP.'
    }
  },

  // 477. GET_SERVER_VERSION
  {
    id: 'php-ref-mysqli-get-server-version',
    title: 'PHP MySQLi: get_server_version()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 477,
    overview: 'Kuasai method $mysqli->get_server_version() / mysqli_get_server_version(): mendapatkan versi server MySQL dalam format integer untuk perbandingan versi terprogram.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SERVER VERSION INT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 477 / 505</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔢 Versi Server Integer (get_server_version)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$mysqli->get_server_version(): int</code> mengembalikan versi server MySQL dalam format integer: <code>major * 10000 + minor * 100 + subminor</code>. MySQL 8.0.32 menghasilkan <code>80032</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$serverVersion = 80032; // Simulasi MySQL 8.0.32

$major = (int)($serverVersion / 10000);
$minor = (int)(($serverVersion % 10000) / 100);
$patch = $serverVersion % 100;

echo "<h3>Hasil \$mysqli->get_server_version():</h3>";
echo "<p>Integer Raw: <strong style='color:#059669;'>$serverVersion</strong></p>";
echo "<p>Versi Terbaca: <strong>$major.$minor.$patch</strong></p>";

if ($serverVersion >= 80000) {
    echo "<p style='color:green;'>✓ MySQL 8.0+ - Mendukung JSON, Window Functions, dan CTE.</p>";
}
?>`,
    codeExplanation: [
      'Pengecekan $mysqli->get_server_version() >= 80000 memastikan server mendukung fitur MySQL 8.0+.'
    ],
    challenge: {
      instruction: 'Cetak versi server integer dengan $mysqli->get_server_version().',
      starterCode: `<?php
$v = 80032;
echo "MySQL " . (int)($v/10000) . "." . (int)(($v%10000)/100) . "." . $v%100;
?>`,
      hint: 'Decode integer versi.'
    },
    quiz: {
      question: 'Berapakah nilai integer yang dikembalikan oleh `$mysqli->get_server_version()` untuk MySQL versi 8.0.32?',
      options: [
        'Integer `80032`',
        'Integer `8032`',
        'Float `8.032`',
        'String `"8.0.32"`'
      ],
      correctIndex: 0,
      explanation: '8×10000 + 0×100 + 32 = 80032.'
    }
  },

  // 478. INFO
  {
    id: 'php-ref-mysqli-info',
    title: 'PHP MySQLi: info',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 478,
    overview: 'Kuasai properti $mysqli->info / mysqli_info(): mendapatkan string informasi detail tentang query terakhir (misal "Records: 100 Duplicates: 0 Warnings: 0" setelah INSERT atau "Rows matched: 5 Changed: 3" setelah UPDATE).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">QUERY METADATA</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 478 / 505</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">ℹ️ Informasi Detail Query Terakhir (info)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$mysqli->info</code> mengembalikan string yang berisi ringkasan eksekusi query terakhir yang mendukung info tersebut (INSERT IGNORE, UPDATE, LOAD DATA, dan ALTER TABLE).
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Simulasi string info dari UPDATE query
$infoUpdate = "Rows matched: 25  Changed: 18  Warnings: 0";
$infoInsert = "Records: 100  Duplicates: 2  Warnings: 0";

echo "<h3>Simulasi \$mysqli->info setelah Query:</h3>";
echo "<p>Setelah UPDATE: <strong style='color:#059669;'>$infoUpdate</strong></p>";
echo "<p>Setelah INSERT: <strong>$infoInsert</strong></p>";
echo "<p style='color:gray;'>Tip: <code>\$mysqli->info</code> bernilai <code>null</code> untuk query SELECT biasa.</p>";
?>`,
    codeExplanation: [
      '$mysqli->info berguna untuk mendeteksi perbedaan antara "Rows matched" (baris yang cocok filter WHERE) dan "Changed" (baris yang benar-benar berubah nilai).'
    ],
    challenge: {
      instruction: 'Pahami output $mysqli->info setelah UPDATE.',
      starterCode: `<?php
$info = "Rows matched: 10  Changed: 7  Warnings: 0";
echo "Info: " . $info;
?>`,
      hint: 'Akses $mysqli->info.'
    },
    quiz: {
      question: 'Untuk jenis query manakah `$mysqli->info` menghasilkan string informasi yang bermakna?',
      options: [
        'INSERT, INSERT IGNORE, UPDATE, LOAD DATA, dan ALTER TABLE',
        'Hanya SELECT',
        'DELETE saja',
        'Semua query'
      ],
      correctIndex: 0,
      explanation: '$mysqli->info menghasilkan string bermakna untuk query data manipulation tertentu.'
    }
  },

  // 479. INSERT_ID
  {
    id: 'php-ref-mysqli-insert-id',
    title: 'PHP MySQLi: insert_id',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 479,
    overview: 'Kuasai properti $mysqli->insert_id / mysqli_insert_id(): mendapatkan nilai AUTO_INCREMENT ID yang dihasilkan oleh INSERT terakhir — fitur paling penting untuk mendapatkan primary key baris yang baru saja disimpan.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">AUTO_INCREMENT ID</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 479 / 505</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔑 ID Baris Baru Tersimpan (insert_id)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$mysqli->insert_id</code> mengembalikan nilai ID yang dibuat secara otomatis oleh kolom <code>AUTO_INCREMENT</code> setelah query <code>INSERT INTO</code> berhasil. Sangat krusial saat INSERT ke tabel master dan perlu segera INSERT ke tabel detail dengan foreign key yang sama.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Simulasi alur INSERT multi-tabel
$newOrderId = 10042; // ID yang dihasilkan oleh INSERT INTO orders
$newItemId  = 50231; // ID yang dihasilkan oleh INSERT INTO order_items

echo "<h3>Pola Penggunaan \$mysqli->insert_id:</h3>";
$kodeContoh = <<<PHP
\$mysqli->query("INSERT INTO orders (user_id, total) VALUES (7, 550000)");
\$orderId = \$mysqli->insert_id; // Dapatkan ID order baru

\$mysqli->query("INSERT INTO order_items (order_id, product_id, qty) VALUES (\$orderId, 21, 2)");
PHP;

echo "<pre style='background:#0f172a; color:#38bdf8; padding:12px; border-radius:8px;'>";
echo htmlspecialchars($kodeContoh);
echo "</pre>";
echo "<p>ID Order Baru: <strong style='color:#059669; font-size:18px;'>$newOrderId</strong></p>";
?>`,
    codeExplanation: [
      '$mysqli->insert_id harus dibaca segera setelah query INSERT sebelum ada query lain dieksekusi.'
    ],
    challenge: {
      instruction: 'Akses $mysqli->insert_id setelah INSERT query.',
      starterCode: `<?php
$lastId = 1001; // Simulasi insert_id
echo "ID Baru: " . $lastId;
?>`,
      hint: 'Akses $mysqli->insert_id.'
    },
    quiz: {
      question: 'Kapan paling tepat membaca nilai `$mysqli->insert_id`?',
      options: [
        'Segera setelah `$mysqli->query("INSERT INTO ...")` sebelum query lain dieksekusi',
        'Sebelum INSERT dijalankan',
        'Setelah $mysqli->close()',
        'Kapan saja'
      ],
      correctIndex: 0,
      explanation: 'insert_id harus dibaca segera karena query berikutnya bisa menimpanya dengan insert_id yang berbeda.'
    }
  },

  // 480. KILL
  {
    id: 'php-ref-mysqli-kill',
    title: 'PHP MySQLi: kill()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 480,
    overview: 'Kuasai method $mysqli->kill($processid) / mysqli_kill(): mengirim perintah ke server MySQL untuk menghentikan paksa thread database berdasarkan Process ID tertentu.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PROCESS CONTROL</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 480 / 505</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">☠️ Menghentikan Thread Paksa (kill)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$mysqli->kill(int $process_id): bool</code> mengirim perintah setara <code>KILL QUERY [process_id]</code> untuk menghentikan query yang terlalu lama berjalan. Membutuhkan hak akses SUPER atau PROCESS.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$threadId = 42; // Simulasi ID thread yang ingin dihentikan

echo "<h3>Simulasi \$mysqli->kill($threadId):</h3>";
echo "<p>Mengirim perintah KILL QUERY ke thread <strong>#$threadId</strong>...</p>";
echo "<p style='color:#059669;'>✓ Thread database berhasil dihentikan secara terkontrol.</p>";
?>`,
    codeExplanation: [
      '$mysqli->kill($id) biasanya digunakan bersama SHOW PROCESSLIST untuk menghentikan query yang sudah berjalan terlalu lama (slow query).'
    ],
    challenge: {
      instruction: 'Pahami fungsi kill untuk menghentikan thread.',
      starterCode: `<?php
echo "\$mysqli->kill(\$processId) menghentikan thread database.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Apa yang dilakukan oleh `$mysqli->kill($processId)` terhadap server MySQL?',
      options: [
        'Mengirim perintah KILL QUERY ke server untuk menghentikan paksa thread/query dengan ID proses tertentu',
        'Menghapus seluruh database',
        'Menutup koneksi saat ini',
        'Memulai ulang server MySQL'
      ],
      correctIndex: 0,
      explanation: 'kill() menghentikan query yang berjalan lama di server tanpa perlu akses langsung ke server.'
    }
  },

  // 481. MORE_RESULTS
  {
    id: 'php-ref-mysqli-more-results',
    title: 'PHP MySQLi: more_results()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 481,
    overview: 'Kuasai method $mysqli->more_results() / mysqli_more_results(): memeriksa apakah masih ada result set tambahan yang menunggu dari eksekusi multi_query().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">MULTI QUERY</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 481 / 505</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔁 Cek Result Set Berikutnya (more_results)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$mysqli->more_results(): bool</code> digunakan dalam kombinasi dengan <code>multi_query()</code> dan <code>next_result()</code> untuk mengiterasi seluruh result set dari beberapa query yang dieksekusi sekaligus.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Pola Lengkap multi_query + more_results + next_result:</h3>";
$multiCode = <<<PHP
<?php
\$mysqli = new mysqli("localhost", "root", "", "db");

\$queries = "SELECT * FROM users; SELECT * FROM products; SELECT * FROM orders;";
\$mysqli->multi_query(\$queries);

do {
    if (\$result = \$mysqli->store_result()) {
        while (\$row = \$result->fetch_assoc()) {
            print_r(\$row);
        }
        \$result->free();
    }
} while (\$mysqli->more_results() && \$mysqli->next_result());
?>
PHP;

echo "<pre style='background:#0f172a; color:#38bdf8; padding:12px; border-radius:8px;'>";
echo htmlspecialchars($multiCode);
echo "</pre>";
?>`,
    codeExplanation: [
      'more_results() mengembalikan true jika masih ada result set berikutnya yang belum diambil.'
    ],
    challenge: {
      instruction: 'Pahami pola do-while dengan more_results dan next_result.',
      starterCode: `<?php
echo "Pola: do { ... } while (\$mysqli->more_results() && \$mysqli->next_result());";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Method manakah yang harus dieksekusi bersama `more_results()` agar dapat berpindah ke result set berikutnya?',
      options: [
        '`$mysqli->next_result()`',
        '`$mysqli->fetch_all()`',
        '`$mysqli->store_result()`',
        '`$mysqli->data_seek()`'
      ],
      correctIndex: 0,
      explanation: 'next_result() memindahkan pointer ke result set berikutnya dari multi_query.'
    }
  },

  // 482. MULTI_QUERY
  {
    id: 'php-ref-mysqli-multi-query',
    title: 'PHP MySQLi: multi_query()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 482,
    overview: 'Kuasai method $mysqli->multi_query() / mysqli_multi_query(): mengeksekusi beberapa query SQL sekaligus dalam satu round-trip koneksi (dipisahkan tanda titik koma ;).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">BATCH QUERIES</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 482 / 505</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚡ Eksekusi Query Batch (multi_query)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$mysqli->multi_query(string $query): bool</code> menjalankan serangkaian pernyataan SQL yang dipisahkan oleh <code>;</code> secara asinkron. <strong>Peringatan Keamanan:</strong> Jangan gunakan multi_query dengan data input pengguna karena rentan SQL Injection multi-statement!
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Contoh Penggunaan \$mysqli->multi_query():</h3>";
$multiSql = "INSERT INTO log (event) VALUES ('login'); UPDATE user_sessions SET last_active = NOW() WHERE id = 7; SELECT COUNT(*) FROM active_users;";

echo "<p>String Query Multi-Pernyataan:</p>";
echo "<pre style='background:#1e293b; color:#94a3b8; padding:10px; border-radius:6px; font-size:12px;'>";
echo htmlspecialchars($multiSql);
echo "</pre>";
echo "<p style='color:#059669;'>✓ Seluruh 3 query dieksekusi dalam satu round-trip ke server MySQL.</p>";
?>`,
    codeExplanation: [
      'multi_query() menghemat latency jaringan dengan menggabungkan beberapa operasi dalam satu paket TCP.'
    ],
    challenge: {
      instruction: 'Pahami multi_query untuk eksekusi batch query.',
      starterCode: `<?php
echo "multi_query mengirim banyak query sekaligus dalam satu koneksi.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Apa risiko keamanan utama yang harus dihindari saat menggunakan `$mysqli->multi_query()`?',
      options: [
        'SQL Injection multi-statement — JANGAN pernah mengizinkan data input pengguna masuk ke string query multi_query',
        'Kehabisan RAM server',
        'Duplikasi data',
        'Tidak ada risiko'
      ],
      correctIndex: 0,
      explanation: 'multi_query memungkinkan eksekusi pernyataan SQL tambahan di query kedua/ketiga, sehingga sangat berbahaya jika diisi data pengguna.'
    }
  },

  // 483. NEXT_RESULT
  {
    id: 'php-ref-mysqli-next-result',
    title: 'PHP MySQLi: next_result()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 483,
    overview: 'Kuasai method $mysqli->next_result() / mysqli_next_result(): memindahkan pointer ke result set berikutnya dari eksekusi multi_query().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">RESULT NAVIGATION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 483 / 505</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⏭️ Pindah ke Result Set Berikutnya (next_result)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$mysqli->next_result(): bool</code> mengarahkan pointer ke result set berikutnya dari antrian multi_query. Mengembalikan <code>false</code> jika tidak ada result set lagi.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Alur Navigasi next_result dalam do-while:</h3>";
echo "<ol style='line-height:1.8;'>";
echo "<li>Jalankan: <code>\$mysqli->multi_query(\"SELECT 1; SELECT 2; SELECT 3;\");</code></li>";
echo "<li>Ambil result set pertama: <code>\$res = \$mysqli->store_result();</code></li>";
echo "<li>Periksa: <code>\$mysqli->more_results()</code></li>";
echo "<li>Pindah: <code><strong style='color:#059669;'>\$mysqli->next_result()</strong></code></li>";
echo "<li>Ulangi langkah 2-4 sampai more_results() = false</li>";
echo "</ol>";
?>`,
    codeExplanation: [
      'next_result() wajib dipanggil di antara setiap store_result() untuk mengonsumsi antrian paket dari server.'
    ],
    challenge: {
      instruction: 'Pahami peran next_result dalam iterasi multi_query.',
      starterCode: `<?php
echo "next_result() memindahkan pointer ke result set berikutnya dari multi_query.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Apa yang dikembalikan oleh `$mysqli->next_result()` ketika tidak ada result set berikutnya yang tersedia?',
      options: [
        'Boolean `false`',
        'Boolean `true`',
        'Null',
        'Integer 0'
      ],
      correctIndex: 0,
      explanation: 'next_result mengembalikan false ketika antrian result set sudah habis.'
    }
  },

  // 484. PING
  {
    id: 'php-ref-mysqli-ping',
    title: 'PHP MySQLi: ping()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 484,
    overview: 'Kuasai method $mysqli->ping() / mysqli_ping(): memeriksa apakah koneksi ke server MySQL masih aktif (keep-alive check) dan mencoba reconnect otomatis jika koneksi terputus.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CONNECTION HEALTH</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 484 / 505</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏓 Cek Kesehatan Koneksi (ping)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$mysqli->ping(): bool</code> mengirim paket ping ke server MySQL dan mengembalikan <code>true</code> jika server merespons. Pada skrip daemon PHP yang berjalan lama, ping() berguna untuk mempertahankan koneksi sebelum timeout.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Pola Health Check Koneksi dengan ping():</h3>";
$pingCode = <<<PHP
<?php
\$mysqli = new mysqli("localhost", "root", "", "db");

// Gunakan ping() untuk reconnect otomatis saat long-running script
if (!\$mysqli->ping()) {
    echo "Koneksi MySQL Terputus: " . \$mysqli->error;
} else {
    echo "Koneksi MySQL Normal.";
}
?>
PHP;

echo "<pre style='background:#0f172a; color:#38bdf8; padding:12px; border-radius:8px;'>";
echo htmlspecialchars($pingCode);
echo "</pre>";
?>`,
    codeExplanation: [
      '$mysqli->ping() mencoba reconnect otomatis jika koneksi terputus karena idle timeout MySQL.'
    ],
    challenge: {
      instruction: 'Pahami penggunaan ping() untuk cek koneksi hidup.',
      starterCode: `<?php
echo "\$mysqli->ping() mengembalikan true jika koneksi masih aktif.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Apa nilai kembalian `$mysqli->ping()` ketika koneksi ke server MySQL masih aktif dan responsif?',
      options: [
        'Boolean `true`',
        'Boolean `false`',
        'Integer `200`',
        'String `"pong"`'
      ],
      correctIndex: 0,
      explanation: 'ping() mengembalikan true jika server merespons ping dengan baik.'
    }
  },

  // 485. PREPARE
  {
    id: 'php-ref-mysqli-prepare',
    title: 'PHP MySQLi: prepare()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 485,
    overview: 'Kuasai method $mysqli->prepare() / mysqli_prepare(): membuat Prepared Statement yang aman dari SQL Injection — standar keamanan wajib pada seluruh query yang melibatkan input pengguna.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">SQL INJECTION PREVENTION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 485 / 505</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛡️ Prepared Statement Anti SQL Injection (prepare)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$mysqli->prepare(string $query): mysqli_stmt|false</code> menerima SQL dengan placeholder <code>?</code> dan mengkompilasi query di server MySQL. Data nilai dikirim terpisah melalui <code>$stmt->bind_param()</code>, sehingga data pengguna tidak pernah diinterpretasikan sebagai SQL.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Pola Prepared Statement Lengkap (Anti SQL Injection):</h3>";
$stmtCode = <<<PHP
<?php
\$mysqli = new mysqli("localhost", "root", "", "db");

// 1. Persiapkan template query dengan placeholder ?
\$stmt = \$mysqli->prepare("SELECT id, nama FROM users WHERE email = ? AND status = ?");

// 2. Bind parameter (s=string, i=integer, d=double, b=blob)
\$email = \$_POST['email']; // Input pengguna - AMAN karena di-bind terpisah
\$status = 1;
\$stmt->bind_param("si", \$email, \$status);

// 3. Eksekusi
\$stmt->execute();
\$result = \$stmt->get_result();
\$user = \$result->fetch_assoc();

\$stmt->close();
?>
PHP;

echo "<pre style='background:#0f172a; color:#38bdf8; padding:12px; border-radius:8px;'>";
echo htmlspecialchars($stmtCode);
echo "</pre>";
?>`,
    codeExplanation: [
      'prepare() memisahkan SQL template dari data nilai, sehingga SQL Injection secara fundamental tidak mungkin terjadi.',
      'bind_param("si", ...) menyetel tipe: s=string, i=integer, d=double, b=blob.'
    ],
    challenge: {
      instruction: 'Pahami pola prepare() -> bind_param() -> execute().',
      starterCode: `<?php
echo "prepare() adalah standar keamanan anti SQL Injection.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Karakter placeholder apakah yang digunakan dalam template SQL `$mysqli->prepare()`?',
      options: [
        'Tanda tanya `?`',
        'Tanda dollar `$1`, `$2`',
        'Tanda titik dua `:nama`',
        'Tanda persen `%s`'
      ],
      correctIndex: 0,
      explanation: 'MySQLi menggunakan ? sebagai placeholder posisional dalam prepared statement.'
    }
  },

  // 486. QUERY
  {
    id: 'php-ref-mysqli-query',
    title: 'PHP MySQLi: query()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 486,
    overview: 'Kuasai method $mysqli->query() / mysqli_query(): mengeksekusi satu pernyataan SQL (SELECT, INSERT, UPDATE, DELETE) terhadap database dan mengembalikan hasil query.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CORE QUERY METHOD</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 486 / 505</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🗄️ Eksekusi Query Tunggal (query)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$mysqli->query(string $query, int $result_mode = MYSQLI_STORE_RESULT): mysqli_result|bool</code> mengembalikan objek <code>mysqli_result</code> untuk query SELECT atau <code>true/false</code> untuk INSERT/UPDATE/DELETE.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Contoh Penggunaan \$mysqli->query():</h3>";
$queryCode = <<<PHP
<?php
\$mysqli = new mysqli("localhost", "root", "", "lms_db");

// Query SELECT
\$result = \$mysqli->query("SELECT id, nama, email FROM users WHERE aktif = 1");
while (\$row = \$result->fetch_assoc()) {
    echo "<li>{$row['nama']} ({$row['email']})</li>";
}
\$result->free();

// Query INSERT
\$ok = \$mysqli->query("INSERT INTO log (pesan) VALUES ('Login berhasil')");
echo \$ok ? "Log tersimpan (ID: " . \$mysqli->insert_id . ")" : "Gagal";
?>
PHP;

echo "<pre style='background:#0f172a; color:#38bdf8; padding:12px; border-radius:8px;'>";
echo htmlspecialchars($queryCode);
echo "</pre>";
?>`,
    codeExplanation: [
      '$mysqli->query() mengembalikan mysqli_result untuk SELECT, dan boolean untuk DML (INSERT/UPDATE/DELETE).',
      'Gunakan hanya dengan data tepercaya — untuk input pengguna wajib pakai prepare().'
    ],
    challenge: {
      instruction: 'Pahami nilai kembalian query() untuk SELECT vs INSERT.',
      starterCode: `<?php
echo "SELECT -> mysqli_result, INSERT/UPDATE/DELETE -> boolean.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Apa yang dikembalikan oleh `$mysqli->query("SELECT ...")` ketika query berhasil dieksekusi?',
      options: [
        'Objek `mysqli_result` yang berisi data hasil query SELECT',
        'Boolean `true`',
        'Array langsung berisi baris data',
        'Integer jumlah baris'
      ],
      correctIndex: 0,
      explanation: 'query SELECT mengembalikan objek mysqli_result; query DML mengembalikan boolean.'
    }
  }
];

module.exports = phpPart44RefMysqli4;
