// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (MYSQLI PART 3: 463-474)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart43RefMysqli3 = [
  // 463. FETCH_FIELD
  {
    id: 'php-ref-mysqli-fetch-field',
    title: 'PHP MySQLi: fetch_field()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 463,
    overview: 'Kuasai method $result->fetch_field() / mysqli_fetch_field(): mengambil metadata satu kolom (field) dari hasil query berupa object berisi nama kolom, tipe data, panjang, tabel asal, dll.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">FIELD METADATA</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 463 / 505</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Metadata Satu Kolom (fetch_field)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$result->fetch_field(): object|false</code> mengembalikan objek berisi properti metadata kolom saat ini: <code>name</code>, <code>orgname</code>, <code>table</code>, <code>def</code>, <code>max_length</code>, <code>length</code>, <code>charsetnr</code>, <code>flags</code>, <code>type</code>, dan <code>decimals</code>. Pointer kolom bergerak maju setiap kali dipanggil.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Simulasi objek metadata kolom
$fieldMeta = (object)[
    'name'       => 'email',
    'table'      => 'users',
    'type'       => 253, // MYSQL_TYPE_VAR_STRING
    'max_length' => 55,
    'length'     => 255,
    'flags'      => 4,
];

echo "<h3>Hasil Penggunaan \$result->fetch_field():</h3>";
echo "<p>Nama Kolom : <strong style='color: #059669;'>{$fieldMeta->name}</strong></p>";
echo "<p>Dari Tabel : <strong>{$fieldMeta->table}</strong></p>";
echo "<p>Panjang Max: <strong>{$fieldMeta->max_length}</strong> karakter</p>";
echo "<p>Tipe MySQL : <strong>{$fieldMeta->type}</strong> (VAR_STRING)</p>";
?>`,
    codeExplanation: [
      '$result->fetch_field() digunakan untuk membangun dynamic output seperti tabel HTML otomatis berbasis skema kolom database.'
    ],
    challenge: {
      instruction: 'Akses nama kolom dari objek hasil fetch_field().',
      starterCode: `<?php
$field = (object)['name' => 'username', 'type' => 253];
echo "Kolom: " . $field->name;
?>`,
      hint: 'Akses $field->name.'
    },
    quiz: {
      question: 'Objek apakah yang dikembalikan oleh `$result->fetch_field()` untuk setiap kolom dalam hasil query?',
      options: [
        'Objek berisi properti metadata kolom seperti `name`, `table`, `type`, `length`, dan `flags`',
        'Array numerik',
        'String nama kolom saja',
        'Integer kode tipe'
      ],
      correctIndex: 0,
      explanation: 'fetch_field mengembalikan objek stdClass berisi metadata lengkap setiap kolom.'
    }
  },

  // 464. FETCH_FIELD_DIRECT
  {
    id: 'php-ref-mysqli-fetch-field-direct',
    title: 'PHP MySQLi: fetch_field_direct()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 464,
    overview: 'Kuasai method $result->fetch_field_direct($fieldnr) / mysqli_fetch_field_direct(): mengambil metadata kolom berdasarkan nomor indeks kolom tertentu secara langsung tanpa harus iterasi urut.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DIRECT INDEX ACCESS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 464 / 505</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎯 Metadata Kolom via Indeks (fetch_field_direct)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$result->fetch_field_direct(int $index): object|false</code> langsung mengakses metadata kolom pada posisi indeks <code>$index</code> (berbasis 0) tanpa memindahkan pointer iterator kolom.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Simulasi array metadata kolom
$columns = [
    (object)['name' => 'id',    'type' => 3,   'length' => 11],
    (object)['name' => 'nama',  'type' => 253, 'length' => 100],
    (object)['name' => 'email', 'type' => 253, 'length' => 255],
];

// Ambil langsung kolom indeks ke-2 (email)
$fieldDirect = $columns[2];

echo "<h3>Hasil Penggunaan \$result->fetch_field_direct(2):</h3>";
echo "<p>Kolom Indeks 2: <strong style='color: #059669;'>{$fieldDirect->name}</strong> (panjang: {$fieldDirect->length})</p>";
?>`,
    codeExplanation: [
      'fetch_field_direct($index) berguna untuk mengambil metadata kolom tertentu secara cepat tanpa iterasi.'
    ],
    challenge: {
      instruction: 'Akses metadata kolom indeks 0 dengan fetch_field_direct(0).',
      starterCode: `<?php
$cols = [(object)['name' => 'id']];
echo "Kolom 0: " . $cols[0]->name;
?>`,
      hint: 'Akses $cols[0]->name.'
    },
    quiz: {
      question: 'Apa perbedaan utama antara `fetch_field()` dan `fetch_field_direct($index)`?',
      options: [
        '`fetch_field_direct` memungkinkan akses langsung ke kolom pada indeks tertentu tanpa memindahkan pointer iterator, sedangkan `fetch_field` selalu membaca kolom berikutnya secara berurutan',
        'Keduanya identik',
        '`fetch_field_direct` lebih lambat',
        '`fetch_field_direct` hanya untuk kolom PRIMARY KEY'
      ],
      correctIndex: 0,
      explanation: 'fetch_field_direct memberikan akses acak ke metadata kolom berdasarkan posisi indeks.'
    }
  },

  // 465. FETCH_FIELDS
  {
    id: 'php-ref-mysqli-fetch-fields',
    title: 'PHP MySQLi: fetch_fields()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 465,
    overview: 'Kuasai method $result->fetch_fields() / mysqli_fetch_fields(): mengambil metadata SEMUA kolom dalam hasil query sekaligus sebagai array objek.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ALL FIELDS META</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 465 / 505</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📋 Metadata Semua Kolom (fetch_fields)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$result->fetch_fields(): array</code> mengembalikan array berisi semua objek metadata kolom sekaligus. Sangat berguna untuk membuat header tabel HTML secara otomatis atau menghasilkan skema JSON dari hasil query SELECT.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$mockFields = [
    (object)['name' => 'id',         'type' => 3],
    (object)['name' => 'nama_kursus','type' => 253],
    (object)['name' => 'harga',      'type' => 246],
];

echo "<h3>Hasil Penggunaan \$result->fetch_fields():</h3>";
echo "<table border='1' cellpadding='6' style='border-collapse:collapse;'>";
echo "<tr style='background:#e0e7ff;'><th>Indeks</th><th>Nama Kolom</th><th>Tipe</th></tr>";
foreach ($mockFields as $i => $field) {
    echo "<tr><td>$i</td><td><strong>{$field->name}</strong></td><td>{$field->type}</td></tr>";
}
echo "</table>";
?>`,
    codeExplanation: [
      '$result->fetch_fields() memungkinkan pembangunan header tabel dinamis tanpa hardcode nama kolom.'
    ],
    challenge: {
      instruction: 'Iterasi semua field metadata dari fetch_fields().',
      starterCode: `<?php
$fields = [(object)['name' => 'id'], (object)['name' => 'nama']];
foreach ($fields as $f) echo $f->name . " ";
?>`,
      hint: 'Loop foreach pada array fields.'
    },
    quiz: {
      question: 'Tipe data apakah yang dikembalikan oleh `$result->fetch_fields()`?',
      options: [
        'Array berisi objek metadata untuk setiap kolom dalam hasil query',
        'String daftar nama kolom',
        'Satu objek saja',
        'Integer jumlah kolom'
      ],
      correctIndex: 0,
      explanation: 'fetch_fields mengembalikan array objek metadata seluruh kolom sekaligus.'
    }
  },

  // 466. FETCH_LENGTHS
  {
    id: 'php-ref-mysqli-fetch-lengths',
    title: 'PHP MySQLi: fetch_lengths()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 466,
    overview: 'Kuasai method $result->fetch_lengths() / mysqli_fetch_lengths(): mendapatkan panjang aktual (byte) setiap nilai kolom dari baris yang terakhir diambil oleh fetch_row/fetch_assoc.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">VALUE LENGTHS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 466 / 505</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📏 Panjang Nilai Kolom (fetch_lengths)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$result->fetch_lengths(): array|false</code> mengembalikan array integer panjang (dalam byte) dari nilai setiap kolom baris terakhir yang dibaca. Berguna untuk validasi ukuran data BLOB/TEXT sebelum diproses.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$baris = ['id' => '7', 'email' => 'rahmat@devgrow.id', 'bio' => 'PHP Developer'];

// Simulasi fetch_lengths: hitung panjang setiap nilai
$lengths = array_map('strlen', $baris);

echo "<h3>Simulasi Hasil \$result->fetch_lengths():</h3>";
foreach ($baris as $kolom => $nilai) {
    echo "<p><code>$kolom</code>: <strong style='color:#059669;'>\"$nilai\"</strong> = {$lengths[$kolom]} byte</p>";
}
?>`,
    codeExplanation: [
      'fetch_lengths() sangat berguna untuk validasi field BLOB yang memiliki batas ukuran upload tertentu.'
    ],
    challenge: {
      instruction: 'Hitung panjang nilai kolom dengan strlen.',
      starterCode: `<?php
$val = "devgrow";
echo "Panjang: " . strlen($val) . " byte";
?>`,
      hint: 'Gunakan strlen.'
    },
    quiz: {
      question: 'Kapan `$result->fetch_lengths()` harus dipanggil agar menghasilkan data yang valid?',
      options: [
        'Segera setelah memanggil `fetch_row()` atau `fetch_assoc()` untuk membaca baris yang ingin diukur',
        'Sebelum koneksi dibuka',
        'Setelah `$mysqli->close()`',
        'Kapan saja tidak ada bedanya'
      ],
      correctIndex: 0,
      explanation: 'fetch_lengths harus dipanggil segera setelah fetch_row/fetch_assoc karena ia membaca panjang baris terakhir yang diambil.'
    }
  },

  // 467. FETCH_OBJECT
  {
    id: 'php-ref-mysqli-fetch-object',
    title: 'PHP MySQLi: fetch_object()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 467,
    overview: 'Kuasai method $result->fetch_object() / mysqli_fetch_object(): mengambil satu baris hasil query sebagai Objek PHP dengan nama kolom sebagai properti objek ($row->nama).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">OOP ROW FETCH</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 467 / 505</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧩 Baris Data sebagai Objek (fetch_object)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$result->fetch_object(?string $class = "stdClass", array $constructor_args = []): object|null|false</code> mengembalikan baris data sebagai instance kelas (default <code>stdClass</code> atau kelas kustom Anda).
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Simulasi baris database sebagai objek
$row = (object)[
    'id'    => 42,
    'nama'  => 'Rahmat Fadila',
    'email' => 'rahmat@devgrow.id',
    'role'  => 'Instructor'
];

echo "<h3>Hasil Penggunaan \$result->fetch_object():</h3>";
echo "<p>Akses Properti OOP:</p>";
echo "<ul>";
echo "<li>ID: <strong style='color:#059669;'>{$row->id}</strong></li>";
echo "<li>Nama: <strong>{$row->nama}</strong></li>";
echo "<li>Email: <strong>{$row->email}</strong></li>";
echo "<li>Role: <strong style='color:#4f46e5;'>{$row->role}</strong></li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'fetch_object() memungkinkan akses baris database menggunakan notasi panah ($row->kolom) gaya OOP.'
    ],
    challenge: {
      instruction: 'Akses properti dari objek fetch_object.',
      starterCode: `<?php
$row = (object)['nama' => 'Budi', 'email' => 'budi@example.com'];
echo $row->nama;
?>`,
      hint: 'Akses $row->nama.'
    },
    quiz: {
      question: 'Apa kelas default yang digunakan oleh `$result->fetch_object()` jika parameter `$class` tidak diisi?',
      options: [
        '`stdClass`',
        '`mysqli_result`',
        '`ArrayObject`',
        '`DataObject`'
      ],
      correctIndex: 0,
      explanation: 'fetch_object() menghasilkan instance stdClass secara default.'
    }
  },

  // 468. FIELD_COUNT
  {
    id: 'php-ref-mysqli-field-count',
    title: 'PHP MySQLi: field_count',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 468,
    overview: 'Kuasai properti $mysqli->field_count / mysqli_field_count(): mendapatkan jumlah total kolom yang dikembalikan oleh query SELECT terakhir.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">COLUMN COUNT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 468 / 505</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔢 Jumlah Kolom Hasil Query (field_count)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$mysqli->field_count</code> mengembalikan integer jumlah kolom dari perintah SELECT terakhir yang dieksekusi. Berguna untuk membuat tabel HTML dinamis yang lebar kolomnya menyesuaikan query.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Simulasi: "SELECT id, nama, email, role FROM users"
$fieldCount = 4; // Jumlah kolom yang dikembalikan

echo "<h3>Hasil Penggunaan \$mysqli->field_count:</h3>";
echo "<p>Jumlah Kolom Hasil Query: <strong style='color: #059669; font-size: 18px;'>$fieldCount kolom</strong></p>";
echo "<p>Query SELECT id, nama, email, role -> field_count = <strong>$fieldCount</strong></p>";
?>`,
    codeExplanation: [
      '$mysqli->field_count berguna untuk membuat jumlah sel header tabel HTML secara programatis.'
    ],
    challenge: {
      instruction: 'Hitung jumlah kolom: SELECT id, nama, email = 3 kolom.',
      starterCode: `<?php
$fc = 3; // id, nama, email
echo "field_count: $fc";
?>`,
      hint: 'field_count = jumlah kolom di SELECT.'
    },
    quiz: {
      question: 'Apa yang dikembalikan oleh `$mysqli->field_count` setelah menjalankan query `SELECT id, nama, email FROM users`?',
      options: [
        'Integer `3` (jumlah kolom yang dipilih)',
        'Integer `0`',
        'Integer jumlah baris data',
        'Boolean true'
      ],
      correctIndex: 0,
      explanation: 'field_count menghitung kolom pada clause SELECT, bukan jumlah baris.'
    }
  },

  // 469. FIELD_SEEK
  {
    id: 'php-ref-mysqli-field-seek',
    title: 'PHP MySQLi: field_seek()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 469,
    overview: 'Kuasai method $result->field_seek($fieldnr) / mysqli_field_seek(): memindahkan pointer iterator kolom ke posisi indeks tertentu sebelum memanggil fetch_field().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">FIELD POINTER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 469 / 505</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📍 Memindahkan Pointer Kolom (field_seek)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$result->field_seek(int $index): bool</code> mengatur ulang posisi pointer kolom ke <code>$index</code> sehingga pemanggilan <code>fetch_field()</code> berikutnya membaca metadata kolom pada indeks tersebut.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$allFields = [
    (object)['name' => 'id'],
    (object)['name' => 'nama'],
    (object)['name' => 'email'],
];

// Setelah field_seek(2), fetch_field berikutnya membaca kolom indeks 2
$currentPointer = 2;
$targetField = $allFields[$currentPointer];

echo "<h3>Hasil Penggunaan \$result->field_seek(2):</h3>";
echo "<p>Pointer pindah ke indeks <strong>$currentPointer</strong></p>";
echo "<p>fetch_field() berikutnya akan membaca: <strong style='color:#059669;'>{$targetField->name}</strong></p>";
?>`,
    codeExplanation: [
      'field_seek(n) + fetch_field() digunakan bersama untuk membaca metadata kolom tertentu secara fleksibel.'
    ],
    challenge: {
      instruction: 'Pahami field_seek untuk mengatur posisi pointer kolom.',
      starterCode: `<?php
echo "Sintaks: \$result->field_seek(2); \$col = \$result->fetch_field();";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Method manakah yang harus dipanggil setelah `$result->field_seek($index)` agar pergeseran pointer kolom bermakna?',
      options: [
        '`$result->fetch_field()`',
        '`$result->fetch_assoc()`',
        '`$result->fetch_all()`',
        '`$result->data_seek()`'
      ],
      correctIndex: 0,
      explanation: 'field_seek dan fetch_field bekerja bersama: seek mengatur posisi, fetch_field membaca metadata kolom di posisi tersebut.'
    }
  },

  // 470. FIELD_TELL (via $result->current_field)
  {
    id: 'php-ref-mysqli-field-tell',
    title: 'PHP MySQLi: current_field (field_tell)',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 470,
    overview: 'Kuasai properti $result->current_field (padanan mysqli_field_tell()): mengetahui posisi pointer iterator kolom saat ini dalam hasil query.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">POINTER POSITION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 470 / 505</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📍 Posisi Pointer Kolom Saat Ini (current_field)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$result->current_field</code> (atau fungsi prosedural <code>mysqli_field_tell($result)</code>) mengembalikan integer posisi pointer kolom saat ini. Berguna untuk menyimpan posisi sebelum field_seek dan memulihkannya.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Simulasi state pointer kolom
$currentField = 0;

echo "<h3>Hasil Penggunaan \$result->current_field:</h3>";
echo "<p>Posisi Pointer Kolom Saat Ini: <strong style='color:#059669;'>$currentField</strong></p>";
echo "<p>Setelah field_seek(3): pointer akan pindah ke <strong>3</strong></p>";
?>`,
    codeExplanation: [
      '$result->current_field membaca posisi kursor kolom saat ini tanpa memindahkannya.'
    ],
    challenge: {
      instruction: 'Pahami current_field untuk mengetahui posisi pointer.',
      starterCode: `<?php
echo "current_field memberikan posisi pointer kolom iterator saat ini.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Berapakah nilai `$result->current_field` setelah baru saja memanggil `$result->field_seek(5)`?',
      options: [
        'Integer `5`',
        'Integer `0`',
        'Integer `-1`',
        'Null'
      ],
      correctIndex: 0,
      explanation: 'field_seek(5) memindahkan pointer ke indeks 5, sehingga current_field membaca 5.'
    }
  },

  // 471. FREE
  {
    id: 'php-ref-mysqli-free',
    title: 'PHP MySQLi: free() / free_result()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 471,
    overview: 'Kuasai method $result->free() / free_result() / close(): melepaskan memori yang digunakan oleh objek mysqli_result setelah selesai diproses.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">MEMORY MANAGEMENT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 471 / 505</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🗑️ Pembebasan Memori Result Set (free)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$result->free(): void</code> membebaskan memori alokasi buffer result set MySQL yang tersimpan di PHP. Pada skrip yang mengeksekusi banyak query besar secara berurutan, memanggil <code>$result->free()</code> setelah selesai memproses data sangat krusial untuk mencegah memory leak.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Pola Pengelolaan Memori Result Set:</h3>";
$kodePola = <<<PHP
<?php
\$mysqli = new mysqli("localhost", "root", "", "db");

\$result = \$mysqli->query("SELECT * FROM products");

// Proses data
while (\$row = \$result->fetch_assoc()) {
    echo \$row['nama'];
}

// Bebaskan memori result setelah selesai
\$result->free();

// Sekarang aman untuk query berikutnya tanpa memory leak
\$result2 = \$mysqli->query("SELECT * FROM orders");
?>
PHP;

echo "<pre style='background:#0f172a; color:#38bdf8; padding:12px; border-radius:8px;'>";
echo htmlspecialchars($kodePola);
echo "</pre>";
?>`,
    codeExplanation: [
      '$result->free() setara dengan $result->free_result() dan $result->close() - ketiganya identik.'
    ],
    challenge: {
      instruction: 'Pahami pentingnya $result->free() untuk pembebasan memori.',
      starterCode: `<?php
echo "\$result->free(); membebaskan memori buffer result set.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Mengapa penting memanggil `$result->free()` setelah selesai memproses data dari `mysqli_result`?',
      options: [
        'Untuk membebaskan memori buffer result set yang dialokasikan, mencegah memory leak pada skrip yang mengeksekusi banyak query besar',
        'Untuk menghapus data dari tabel',
        'Untuk menutup koneksi database',
        'Untuk mereset query ke awal'
      ],
      correctIndex: 0,
      explanation: 'free() melepaskan memori yang dipakai oleh buffer data hasil query.'
    }
  },

  // 472. GET_CHARSET
  {
    id: 'php-ref-mysqli-get-charset',
    title: 'PHP MySQLi: get_charset()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 472,
    overview: 'Kuasai method $mysqli->get_charset() / mysqli_get_charset(): mendapatkan informasi lengkap charset aktif koneksi dalam bentuk objek (nama, collation, directory, min/max byte).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CHARSET OBJECT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 472 / 505</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔤 Objek Informasi Charset (get_charset)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$mysqli->get_charset(): object</code> mengembalikan objek berisi: <code>charset</code>, <code>collation</code>, <code>dir</code>, <code>min_length</code>, <code>max_length</code>, <code>number</code>, dan <code>state</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$charsetObj = (object)[
    'charset'    => 'utf8mb4',
    'collation'  => 'utf8mb4_unicode_ci',
    'dir'        => '',
    'min_length' => 1,
    'max_length' => 4,
    'number'     => 45,
    'state'      => 0
];

echo "<h3>Hasil \$mysqli->get_charset():</h3>";
echo "<p>Charset    : <strong style='color:#059669;'>{$charsetObj->charset}</strong></p>";
echo "<p>Collation  : <strong>{$charsetObj->collation}</strong></p>";
echo "<p>Max Length : <strong>{$charsetObj->max_length} byte</strong> (4 byte = full emoji support)</p>";
?>`,
    codeExplanation: [
      'get_charset() memberikan informasi charset lebih lengkap dibandingkan character_set_name() yang hanya mengembalikan nama string.'
    ],
    challenge: {
      instruction: 'Akses properti charset dari objek get_charset().',
      starterCode: `<?php
$cs = (object)['charset' => 'utf8mb4', 'collation' => 'utf8mb4_unicode_ci'];
echo $cs->charset . " / " . $cs->collation;
?>`,
      hint: 'Akses $cs->charset.'
    },
    quiz: {
      question: 'Apa perbedaan antara `$mysqli->get_charset()` dan `$mysqli->character_set_name()`?',
      options: [
        '`get_charset()` mengembalikan objek lengkap berisi collation, max_length, dll., sedangkan `character_set_name()` hanya mengembalikan string nama charset saja',
        'Keduanya identik',
        '`get_charset()` hanya untuk UTF-8',
        '`character_set_name()` mengembalikan integer'
      ],
      correctIndex: 0,
      explanation: 'get_charset memberikan objek informasi charset yang lebih kaya detail dibandingkan character_set_name.'
    }
  },

  // 473. GET_CLIENT_INFO
  {
    id: 'php-ref-mysqli-get-client-info',
    title: 'PHP MySQLi: get_client_info()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 473,
    overview: 'Kuasai fungsi $mysqli->get_client_info() / mysqli_get_client_info(): mendapatkan string versi library client MySQL yang digunakan oleh instalasi PHP.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CLIENT VERSION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 473 / 505</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">ℹ️ Versi Library Client MySQL (get_client_info)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>mysqli_get_client_info(): string</code> mengembalikan versi library klien MySQL C (libmysqlclient atau mysqlnd) yang dikompilasi bersama PHP. Berguna untuk laporan kompatibilitas sistem.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$clientInfo = mysqli_get_client_info();

echo "<h3>Hasil Penggunaan mysqli_get_client_info():</h3>";
echo "<p>Versi Library Client MySQL: <strong style='color:#059669;'>$clientInfo</strong></p>";
?>`,
    codeExplanation: [
      'mysqli_get_client_info() membantu diagnosis kompatibilitas versi driver client MySQL dengan server.'
    ],
    challenge: {
      instruction: 'Cetak versi client dengan mysqli_get_client_info().',
      starterCode: `<?php
echo "Client: " . mysqli_get_client_info();
?>`,
      hint: 'Panggil mysqli_get_client_info().'
    },
    quiz: {
      question: 'Informasi apakah yang dikembalikan oleh `mysqli_get_client_info()`?',
      options: [
        'String versi library C client MySQL yang dikompilasi bersama PHP (contoh: "mysqlnd 8.1.0")',
        'Versi PHP',
        'Versi server MySQL',
        'Nama database aktif'
      ],
      correctIndex: 0,
      explanation: 'get_client_info mengembalikan versi driver client MySQL yang dipakai PHP, bukan versi server.'
    }
  },

  // 474. GET_CLIENT_VERSION
  {
    id: 'php-ref-mysqli-get-client-version',
    title: 'PHP MySQLi: get_client_version()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 474,
    overview: 'Kuasai fungsi $mysqli->get_client_version() / mysqli_get_client_version(): mendapatkan versi library client MySQL dalam format integer (misal 80028 untuk 8.0.28).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CLIENT VERSION INT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 474 / 505</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔢 Versi Client Integer (get_client_version)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>mysqli_get_client_version(): int</code> mengembalikan versi dalam format <code>major * 10000 + minor * 100 + patch</code>. Sangat praktis untuk perbandingan versi secara programatis (misal: <code>if ($v >= 80000)</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$clientVersion = mysqli_get_client_version();

// Decode format integer: major*10000 + minor*100 + patch
$major = (int)($clientVersion / 10000);
$minor = (int)(($clientVersion % 10000) / 100);
$patch = $clientVersion % 100;

echo "<h3>Hasil Penggunaan mysqli_get_client_version():</h3>";
echo "<p>Integer Versi Raw: <strong style='color:#059669;'>$clientVersion</strong></p>";
echo "<p>Versi Terbaca: <strong>$major.$minor.$patch</strong></p>";
?>`,
    codeExplanation: [
      'get_client_version() memudahkan pengecekan versi minimum client via perbandingan integer.'
    ],
    challenge: {
      instruction: 'Cetak versi integer client dengan mysqli_get_client_version().',
      starterCode: `<?php
$v = mysqli_get_client_version();
echo "Versi Integer: $v";
?>`,
      hint: 'Panggil mysqli_get_client_version().'
    },
    quiz: {
      question: 'Apa format encoding yang digunakan oleh integer yang dikembalikan `mysqli_get_client_version()` untuk MySQL versi 8.0.28?',
      options: [
        'Integer `80028` (formula: major×10000 + minor×100 + patch)',
        'Integer `8028`',
        'String `"8.0.28"`',
        'Float `8.028`'
      ],
      correctIndex: 0,
      explanation: 'MySQL versi 8.0.28 = 8×10000 + 0×100 + 28 = 80028.'
    }
  }
];

module.exports = phpPart43RefMysqli3;
