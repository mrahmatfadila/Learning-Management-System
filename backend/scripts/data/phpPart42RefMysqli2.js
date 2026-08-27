// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (MYSQLI PART 2: 454-462)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart42RefMysqli2 = [
  // 454. DATA_SEEK
  {
    id: 'php-ref-mysqli-data-seek',
    title: 'PHP MySQLi: data_seek()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 454,
    overview: 'Kuasai method $result->data_seek() / mysqli_data_seek(): memindahkan pointer baris hasil query ke nomor baris indeks tertentu (misal kembali ke baris 0 untuk melakukan perulangan ulang data).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">MYSQLI RESULT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 454 / 462</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📍 Memindahkan Pointer Baris (data_seek)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$result->data_seek(int $offset): bool</code> mengarahkan pointer pembacaan ke baris indeks <code>$offset</code> (berbasis 0). Sangat praktis saat Anda perlu melakukan looping hasil query dua kali tanpa perlu menjalankan query ulang ke server database.
          </p>
        </div>
      </div>
    `,
    code: `<?php
class MockResultSeek {
    private array $data = [
        ["id" => 1, "nama" => "Rahmat Fadila"],
        ["id" => 2, "nama" => "Siti Rahma"]
    ];
    private int $pointer = 0;

    public function data_seek(int $offset): bool {
        if (isset($this->data[$offset])) {
            $this->pointer = $offset;
            return true;
        }
        return false;
    }

    public function fetch_assoc(): ?array {
        return $this->data[$this->pointer++] ?? null;
    }
}

$res = new MockResultSeek();

// Putaran pertama: ambil data #1 dan #2
$r1 = $res->fetch_assoc();
$r2 = $res->fetch_assoc();

// Reset pointer kembali ke baris 0
$res->data_seek(0);
$rAwal = $res->fetch_assoc();

echo "<h3>Hasil Penggunaan data_seek(0):</h3>";
echo "<p>Baris Awal Setelah Reset: <strong style='color: #059669;'>{$rAwal['nama']}</strong> (ID: {$rAwal['id']})</p>";
?>`,
    codeExplanation: [
      '$result->data_seek(0) mereset pointer kembali ke baris pertama hasil query.'
    ],
    challenge: {
      instruction: 'Reset pointer result ke indeks 0 dengan $res->data_seek(0).',
      starterCode: `<?php
echo "Sintaks: \$result->data_seek(0);";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Berapakah nilai indeks offset yang harus dikirim ke `$result->data_seek()` untuk kembali ke baris pertama hasil query?',
      options: [
        'Integer `0` (berbasis indeks 0)',
        'Integer `1`',
        'Integer `-1`',
        'String `"first"`'
      ],
      correctIndex: 0,
      explanation: 'Indeks baris database pada data_seek dimulai dari 0 (zero-indexed).'
    }
  },

  // 455. DEBUG
  {
    id: 'php-ref-mysqli-debug',
    title: 'PHP MySQLi: debug()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 455,
    overview: 'Kuasai fungsi mysqli_debug(): mencatat trace debugging internal driver MySQLi ke dalam file log khusus (memerlukan kompilasi pustaka debugging DBUG).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DRIVER TRACE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 455 / 462</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🩺 Debugging Driver MySQLi (debug)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>mysqli_debug(string $options): bool</code> mengaktifkan pelacakan internal Fred Fish DBUG library untuk menganalisis payload protokol komunikasi driver database tingkat rendah.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Hasil Penggunaan mysqli_debug():</h3>";
if (function_exists('mysqli_debug')) {
    // mysqli_debug("d:t:O,/tmp/client.trace");
    echo "<p style='color: #059669;'>✓ Fungsi mysqli_debug() tersedia pada PHP runtime.</p>";
} else {
    echo "<p>mysqli_debug memerlukan dukungan kompilasi pustaka DBUG.</p>";
}
?>`,
    codeExplanation: [
      'mysqli_debug() digunakan pada pengujian low-level driver C client MySQL.'
    ],
    challenge: {
      instruction: 'Pahami fungsi mysqli_debug.',
      starterCode: `<?php
echo "mysqli_debug() mencatat trace client library.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Kapan fungsi `mysqli_debug()` umumnya digunakan?',
      options: [
        'Saat melakukan penelusuran kesalahan (debugging) tingkat rendah pada driver client C MySQL',
        'Untuk membuat tabel user',
        'Hanya untuk query SELECT',
        'Tidak pernah'
      ],
      correctIndex: 0,
      explanation: 'mysqli_debug mengontrol trace internal library client C.'
    }
  },

  // 456. DUMP_DEBUG_INFO
  {
    id: 'php-ref-mysqli-dump-debug-info',
    title: 'PHP MySQLi: dump_debug_info()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 456,
    overview: 'Kuasai method $mysqli->dump_debug_info() / mysqli_dump_debug_info(): meminta server MySQL untuk mencatat (dump) informasi thread internal ke error log server.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SERVER LOG DUMP</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 456 / 462</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📋 Dump Info Internal Server (dump_debug_info)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$mysqli->dump_debug_info(): bool</code> mengirim perintah <code>COM_DEBUG</code> ke server MySQL untuk mencetak info thread dan status memori ke file log daemon <code>mysqld.log</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Hasil Penggunaan \$mysqli->dump_debug_info():</h3>";
echo "<p style='color: #059669;'>✓ Mengirim sinyal COM_DEBUG ke daemon MySQL untuk mencatat status thread ke file log server.</p>";
?>`,
    codeExplanation: [
      'dump_debug_info() membutuhkan hak akses SUPER pada akun user database.'
    ],
    challenge: {
      instruction: 'Pahami fungsi dump_debug_info.',
      starterCode: `<?php
echo "Sintaks: \$mysqli->dump_debug_info();";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Di manakah output dari pemanggilan `$mysqli->dump_debug_info()` akan dicatat?',
      options: [
        'Pada file error log server daemon MySQL (`mysqld.log`)',
        'Langsung dicetak ke layar browser',
        'Di file .env',
        'Di tabel database'
      ],
      correctIndex: 0,
      explanation: 'Perintah ini menginstruksikan server MySQL untuk mendump metrik internal ke file log server.'
    }
  },

  // 457. ERRNO
  {
    id: 'php-ref-mysqli-errno',
    title: 'PHP MySQLi: errno',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 457,
    overview: 'Kuasai properti $mysqli->errno / mysqli_errno(): membaca kode numerik kesalahan dari pemanggilan query database terakhir (misal: 1062 Duplicate Entry, 1146 Table Doesn\'t Exist).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ERROR CODE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 457 / 462</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔢 Kode Error Query Terakhir (errno)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$mysqli->errno</code> (atau <code>mysqli_errno($conn)</code>) mengembalikan integer kode error MySQL. Kode <code>1062</code> menandakan pelanggaran constraint duplikasi data unik (Duplicate Entry).
          </p>
        </div>
      </div>
    `,
    code: `<?php
class MockErrno {
    public int $errno = 1062; // Kode Duplicate Key MySQL
    public string $error = "Duplicate entry 'rahmat@devgrow.id' for key 'users.email_unique'";
}

$conn = new MockErrno();

echo "<h3>Hasil Pengujian \$mysqli->errno:</h3>";
if ($conn->errno === 1062) {
    echo "<p style='color: #dc2626;'><strong>[Error 1062]</strong> Email sudah terdaftar! Gunakan email lain.</p>";
} else {
    echo "<p>Status Normal</p>";
}
?>`,
    codeExplanation: [
      '$mysqli->errno memungkinkan logika aplikasi menangani error spesifik secara terprogram (misal mendeteksi duplicate key 1062).'
    ],
    challenge: {
      instruction: 'Deteksi kode error 1062 dengan if ($mysqli->errno === 1062).',
      starterCode: `<?php
$db = (object)['errno' => 1062];
echo ($db->errno === 1062) ? "Duplikat Data" : "OK";
?>`,
      hint: 'Akses $db->errno.'
    },
    quiz: {
      question: 'Kode kesalahan numerik MySQL apakah (`$mysqli->errno`) yang merepresentasikan pelanggaran Unique Key (Duplicate Entry)?',
      options: [
        'Kode `1062`',
        'Kode `404`',
        'Kode `500`',
        'Kode `1045`'
      ],
      correctIndex: 0,
      explanation: 'Error 1062 adalah kode resmi MySQL untuk Duplicate entry.'
    }
  },

  // 458. ERROR
  {
    id: 'php-ref-mysqli-error',
    title: 'PHP MySQLi: error',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 458,
    overview: 'Kuasai properti $mysqli->error / mysqli_error(): membaca teks deskripsi pesan kesalahan dari query database yang terakhir dieksekusi.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ERROR STRING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 458 / 462</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🩺 Pesan Teks Error Query (error)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$mysqli->error</code> (atau <code>mysqli_error($conn)</code>) mengembalikan string deskriptif alasan kegagalan query SQL (misal: <em>"Table 'db.students' doesn't exist"</em>) atau string kosong jika query sukses.
          </p>
        </div>
      </div>
    `,
    code: `<?php
class MockErrorMsg {
    public string $error = "Table 'edutech_db.tbl_transaksi' doesn't exist";
}

$conn = new MockErrorMsg();

echo "<h3>Hasil Pengujian \$mysqli->error:</h3>";
echo "<div style='background: #fee2e2; border-left: 4px solid #ef4444; padding: 12px; border-radius: 6px;'>";
echo "<p style='color: #991b1b; margin: 0;'><strong>✗ MySQL Error:</strong> {$conn->error}</p>";
echo "</div>";
?>`,
    codeExplanation: [
      '$mysqli->error mempermudah developer mendiagnosis kesalahan nama kolom/tabel saat masa pengembangan (development).'
    ],
    challenge: {
      instruction: 'Akses properti error dari $mysqli.',
      starterCode: `<?php
$conn = (object)['error' => 'Syntax error in SQL'];
echo "Error: " . $conn->error;
?>`,
      hint: 'Akses $conn->error.'
    },
    quiz: {
      question: 'Apa nilai yang dikembalikan oleh `$mysqli->error` jika eksekusi query SQL berjalan sukses tanpa error?',
      options: [
        'String kosong `""`',
        '`null`',
        '`false`',
        'Integer `0`'
      ],
      correctIndex: 0,
      explanation: 'Jika tidak ada error, $mysqli->error mengembalikan string kosong ("").'
    }
  },

  // 459. ERROR_LIST
  {
    id: 'php-ref-mysqli-error-list',
    title: 'PHP MySQLi: error_list',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 459,
    overview: 'Kuasai properti $mysqli->error_list / mysqli_error_list(): mengambil daftar array asosiatif berisi seluruh rincian error, errno, dan kode sqlstate dari operasi database terakhir.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">STRUCTURED ERRORS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 459 / 462</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📋 Rincian Lengkap Daftar Error (error_list)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$mysqli->error_list</code> mengembalikan array berisi elemen-elemen berstruktur: <code>['errno' => 1062, 'sqlstate' => '23000', 'error' => '...']</code> untuk integrasi log monitoring JSON terstruktur.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$mockErrorList = [
    [
        "errno"    => 1048,
        "sqlstate" => "23000",
        "error"    => "Column 'user_id' cannot be null"
    ]
];

echo "<h3>Hasil Penggunaan \$mysqli->error_list:</h3>";
echo "<ul>";
foreach ($mockErrorList as $err) {
    echo "<li style='color: #dc2626;'>";
    echo "<strong>[SQLSTATE {$err['sqlstate']} / Error #{$err['errno']}]:</strong> {$err['error']}";
    echo "</li>";
}
echo "</ul>";
?>`,
    codeExplanation: [
      '$mysqli->error_list menyajikan informasi diagnostik lengkap termasuk kode SQLSTATE standar ANSI SQL.'
    ],
    challenge: {
      instruction: 'Akses array $mysqli->error_list.',
      starterCode: `<?php
$db = (object)['error_list' => [['errno' => 1048]]];
echo "Errno: " . $db->error_list[0]['errno'];
?>`,
      hint: 'Akses $db->error_list[0].'
    },
    quiz: {
      question: 'Tiga kunci asosiatif apakah yang terdapat pada setiap elemen array `$mysqli->error_list`?',
      options: [
        '`errno`, `sqlstate`, dan `error`',
        '`code`, `file`, dan `line`',
        '`id`, `name`, dan `status`',
        '`query`, `time`, dan `rows`'
      ],
      correctIndex: 0,
      explanation: 'error_list menyediakan rincian errno, sqlstate (kode ANSI), dan pesan error teks.'
    }
  },

  // 460. FETCH_ALL
  {
    id: 'php-ref-mysqli-fetch-all',
    title: 'PHP MySQLi: fetch_all()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 460,
    overview: 'Kuasai method $result->fetch_all() / mysqli_fetch_all(): mengambil SELURUH baris hasil query sekaligus ke dalam Array 2 Dimensi (dengan flag MYSQLI_ASSOC atau MYSQLI_NUM) dalam 1 baris kode efisien.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">BATCH FETCH</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 460 / 462</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📦 Ambil Semua Baris Sekaligus (fetch_all)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$result->fetch_all(int $mode = MYSQLI_NUM): array</code> mengambil seluruh dataset ke memori. Memberikan flag <code>MYSQLI_ASSOC</code> mengembalikan Array 2D Asosiatif (<code>[['id' => 1, 'nama' => '...'], ...]</code>) yang siap di-serialize menjadi JSON REST API.
          </p>
        </div>
      </div>
    `,
    code: `<?php
class MockResultFetchAll {
    public function fetch_all(int $mode = MYSQLI_ASSOC): array {
        return [
            ["id" => 1, "kursus" => "Mastering PHP 8", "harga" => 250000],
            ["id" => 2, "kursus" => "PostgreSQL Advanced", "harga" => 350000],
            ["id" => 3, "kursus" => "React & Next.js Pro", "harga" => 450000]
        ];
    }
}

$res = new MockResultFetchAll();
$dataSemua = $res->fetch_all(MYSQLI_ASSOC);

echo "<h3>Hasil Penggunaan \$result->fetch_all(MYSQLI_ASSOC):</h3>";
echo "<pre style='background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 8px;'>";
echo json_encode($dataSemua, JSON_PRETTY_PRINT);
echo "</pre>";
?>`,
    codeExplanation: [
      '$result->fetch_all(MYSQLI_ASSOC) meniadakan kebutuhan perulangan while($row = ...) manual saat ingin mengirim respons JSON.'
    ],
    challenge: {
      instruction: 'Ambil seluruh data sebagai array asosiatif dengan fetch_all(MYSQLI_ASSOC).',
      starterCode: `<?php
$mock = (object)['fetch_all' => fn() => [['nama' => 'Budi']]];
$all = ($mock->fetch_all)();
echo $all[0]['nama'];
?>`,
      hint: 'Panggil fetch_all(MYSQLI_ASSOC).'
    },
    quiz: {
      question: 'Flag konstanta apakah yang WAJIB dikirimkan ke `$result->fetch_all(MYSQLI_ASSOC)` agar array yang dihasilkan memiliki kunci nama kolom alih-alih indeks angka?',
      options: [
        '`MYSQLI_ASSOC`',
        '`MYSQLI_NUM`',
        '`MYSQLI_BOTH`',
        '`MYSQLI_OBJECT`'
      ],
      correctIndex: 0,
      explanation: 'MYSQLI_ASSOC menghasilkan array asosiatif dengan nama kolom sebagai key.'
    }
  },

  // 461. FETCH_ARRAY
  {
    id: 'php-ref-mysqli-fetch-array',
    title: 'PHP MySQLi: fetch_array()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 461,
    overview: 'Kuasai method $result->fetch_array() / mysqli_fetch_array(): mengambil satu baris hasil query sebagai array asosiatif, array numerik, atau kombinasi keduanya (MYSQLI_BOTH).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ROW FETCH</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 461 / 462</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔀 Ambil Baris Fleksibel (fetch_array)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$result->fetch_array(int $mode = MYSQLI_BOTH): array|null|false</code> mengembalikan satu baris data. Secara default (<code>MYSQLI_BOTH</code>), nilai dapat diakses via nama kolom <code>$row['email']</code> maupun nomor indeks <code>$row[1]</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
class MockResultArray {
    public function fetch_array(): array {
        return [
            0       => 101,
            "id"    => 101,
            1       => "rahmat@devgrow.id",
            "email" => "rahmat@devgrow.id"
        ];
    }
}

$res = new MockResultArray();
$row = $res->fetch_array();

echo "<h3>Hasil Penggunaan \$result->fetch_array():</h3>";
echo "<p>Akses via Nama Kolom: <strong style='color: #059669;'>{$row['email']}</strong></p>";
echo "<p>Akses via Indeks Numerik: <strong>{$row[1]}</strong></p>";
?>`,
    codeExplanation: [
      'fetch_array(MYSQLI_BOTH) menyediakan akses ganda (nama kolom dan indeks angka).'
    ],
    challenge: {
      instruction: 'Akses elemen baris dari fetch_array.',
      starterCode: `<?php
$row = ['nama' => 'Rahmat', 0 => 'Rahmat'];
echo $row['nama'] . " (" . $row[0] . ")";
?>`,
      hint: 'Akses $row[\'nama\'].'
    },
    quiz: {
      question: 'Apa mode default yang digunakan oleh `$result->fetch_array()` jika parameter mode tidak diisi?',
      options: [
        '`MYSQLI_BOTH` (menggandakan kunci array ke bentuk asosiatif dan numerik)',
        '`MYSQLI_ASSOC`',
        '`MYSQLI_NUM`',
        '`MYSQLI_OBJ`'
      ],
      correctIndex: 0,
      explanation: 'Default fetch_array adalah MYSQLI_BOTH yang menyertakan array asosiatif dan indeks numerik.'
    }
  },

  // 462. FETCH_ASSOC
  {
    id: 'php-ref-mysqli-fetch-assoc',
    title: 'PHP MySQLi: fetch_assoc()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 462,
    overview: 'Kuasai method $result->fetch_assoc() / mysqli_fetch_assoc(): mengambil baris data sebagai Array Asosiatif murni (nama kolom sebagai key) yang paling efisien memori dan paling populer dalam perulangan while ($row = $result->fetch_assoc()).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ASSOCIATIVE ROW</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 462 / 462</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">👑 Standar Emas Pengambilan Baris (fetch_assoc)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$result->fetch_assoc(): array|null|false</code> adalah method pengambilan data baris paling populer di dunia PHP. Mengembalikan array asosiatif murni tanpa duplikasi numerik, sehingga 50% lebih hemat RAM dibandingkan <code>fetch_array()</code>. Mengembalikan <code>null</code> saat semua baris selesai dibaca.
          </p>
        </div>
      </div>
    `,
    code: `<?php
class MockResultAssoc {
    private array $rows = [
        ["id" => 1, "nama" => "Rahmat Fadila", "role" => "Instructor"],
        ["id" => 2, "nama" => "Budi Santoso", "role" => "Student"]
    ];
    private int $idx = 0;

    public function fetch_assoc(): ?array {
        return $this->rows[$this->idx++] ?? null;
    }
}

$result = new MockResultAssoc();

echo "<h3>Iterasi Baris Data Standar (while fetch_assoc):</h3>";
echo "<ul>";
while ($row = $result->fetch_assoc()) {
    echo "<li><strong>#{$row['id']}</strong> {$row['nama']} - <span style='color: #059669;'>{$row['role']}</span></li>";
}
echo "</ul>";
?>`,
    codeExplanation: [
      'while ($row = $result->fetch_assoc()) membaca data baris demi baris hingga pointer mencapai akhir (null).',
      'Standar emas pembacaan record data di PHP native.'
    ],
    challenge: {
      instruction: 'Iterasi data dengan while ($row = $res->fetch_assoc()).',
      starterCode: `<?php
$res = (object)['fetch_assoc' => fn() => null];
echo "Pola: while (\$row = \$result->fetch_assoc()) { ... }";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Apa nilai yang dikembalikan oleh `$result->fetch_assoc()` ketika seluruh baris data di result set telah habis dibaca sampai akhir?',
      options: [
        '`null` (sehingga perulangan while otomatis berhenti)',
        '`false`',
        '`[]` (array kosong)',
        'Fatal Error'
      ],
      correctIndex: 0,
      explanation: 'fetch_assoc() mengembalikan null ketika tidak ada baris data tersisa, yang menghentikan loop while.'
    }
  }
];

module.exports = phpPart42RefMysqli2;
