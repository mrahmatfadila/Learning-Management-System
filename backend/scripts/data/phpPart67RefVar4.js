// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (VARIABLE HANDLING PART 4: 724-730)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart67RefVar4 = [
  // 724. SERIALIZE
  {
    id: 'php-ref-var-serialize',
    title: 'PHP serialize()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 724,
    overview: 'Kuasai fungsi serialize(): menghasilkan representasi string byte-stream yang dapat disimpan (storable) dari nilai variabel, array, atau objek PHP untuk penyimpanan sesi atau cache.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DATA SERIALIZATION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 724 / 730</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">💾 Serialisasi Struktur Data PHP (serialize)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>serialize(mixed $value): string</code> mengonversi array kompleks atau objek instance class menjadi format string baku PHP (mempertahankan tipe data integer, float, array, dan nama kelas aslinya).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$sesiPengguna = [
    "user_id" => 1042,
    "username" => "rahmatfadila",
    "roles" => ["instructor", "admin"],
    "is_active" => true
];

$serialized = serialize($sesiPengguna);

echo "<h3>Hasil Penggunaan serialize():</h3>";
echo "<p>Data Asli: Array (" . count($sesiPengguna) . " keys)</p>";
echo "<p>Serialized String:</p>";
echo "<pre style='background:#0f172a; color:#38bdf8; padding:12px; border-radius:8px; word-break:break-all;'>";
echo htmlspecialchars($serialized);
echo "</pre>";
?>`,
    codeExplanation: [
      'serialize() mempertahankan struktur relasi tipe data array dan boolean murni di dalam string.'
    ],
    challenge: {
      instruction: 'Serialisasi array ["A", "B"] dengan serialize(["A", "B"]).',
      starterCode: `<?php
echo serialize(["A", "B"]);
?>`,
      hint: 'Panggil serialize(["A", "B"]).'
    },
    quiz: {
      question: 'Fungsi apakah yang merupakan pasangan kebalikan untuk merekonstruksi kembali string serialisasi menjadi nilai data PHP asli?',
      options: [
        '`unserialize()`',
        '`json_decode()`',
        '`deserialize()`',
        '`restore()`'
      ],
      correctIndex: 0,
      explanation: 'unserialize() memulihkan string hasil serialize() kembali ke bentuk aslinya.'
    }
  },

  // 725. SETTYPE
  {
    id: 'php-ref-var-settype',
    title: 'PHP settype()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 725,
    overview: 'Kuasai fungsi settype(): mengubah tipe data dari variabel yang bersangkutan secara in-place (langsung memodifikasi variabel asli by-reference).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">MUTATING CASTING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 725 / 730</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔄 Konversi Tipe In-Place (settype)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>settype(mixed &$var, string $type): bool</code> mengubah tipe variabel target secara langsung. Pilihan tipe: <code>"boolean"</code>, <code>"integer"</code>, <code>"float"</code>, <code>"string"</code>, <code>"array"</code>, <code>"object"</code>, <code>"null"</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$data = "42"; // Awalnya bertipe string

echo "<h3>Hasil Penggunaan settype():</h3>";
echo "<p>Sebelum : \$data = '$data' (Tipe: " . gettype($data) . ")</p>";

// Ubah tipe $data menjadi integer secara langsung
settype($data, "integer");

echo "<p>Sesudah : \$data = $data (Tipe: <strong style='color:#059669;'>" . gettype($data) . "</strong>)</p>";
?>`,
    codeExplanation: [
      'settype($data, "integer") mengubah tipe variabel $data asli secara langsung tanpa perlu assignment $data = (int)$data.'
    ],
    challenge: {
      instruction: 'Ubah tipe variabel $x = "100" menjadi integer dengan settype($x, "integer").',
      starterCode: `<?php
$x = "100";
settype($x, "integer");
echo gettype($x);
?>`,
      hint: 'Panggil settype($x, "integer").'
    },
    quiz: {
      question: 'Apa perbedaan antara type casting biasa `(int)$var` dan fungsi `settype($var, "integer")`?',
      options: [
        '`(int)$var` mengembalikan salinan nilai baru tanpa mengubah variabel asli, sedangkan `settype()` langsung mengubah tipe data variabel `$var` asli secara in-place',
        '`settype` lebih lambat',
        'Keduanya identik',
        '`settype` hanya untuk array'
      ],
      correctIndex: 0,
      explanation: 'settype menerima variabel by-reference dan memutasi tipe variabel aslinya secara langsung.'
    }
  },

  // 726. STRVAL
  {
    id: 'php-ref-var-strval',
    title: 'PHP strval()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 726,
    overview: 'Kuasai fungsi strval(): mengonversi nilai skalar (angka integer, float, boolean) atau objek yang mengimplementasikan method __toString() menjadi tipe data string.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">STRING CASTING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 726 / 730</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔤 Konversi Nilai ke String (strval)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>strval(mixed $value): string</code> (atau tipe casting <code>(string)$value</code>) mengonversi nilai menjadi string murni.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$angka = 1250000;
$strAngka = strval($angka);

echo "<h3>Hasil Penggunaan strval():</h3>";
echo "<p>Nilai Asli : $angka (Tipe: " . gettype($angka) . ")</p>";
echo "<p>Hasil strval : <strong style='color:#059669;'>'$strAngka'</strong> (Tipe: " . gettype($strAngka) . ")</p>";
?>`,
    codeExplanation: [
      'strval(1250000) menghasilkan string "1250000".'
    ],
    challenge: {
      instruction: 'Ubah angka 99 ke string dengan strval(99).',
      starterCode: `<?php
echo gettype(strval(99));
?>`,
      hint: 'Panggil strval(99).'
    },
    quiz: {
      question: 'Berapakah string yang dihasilkan oleh `strval(true)` di PHP?',
      options: [
        'String `"1"`',
        'String `"true"`',
        'String `"TRUE"`',
        'String kosong `""`'
      ],
      correctIndex: 0,
      explanation: 'Konversi boolean true ke string di PHP menghasilkan karakter "1".'
    }
  },

  // 727. UNSERIALIZE
  {
    id: 'php-ref-var-unserialize',
    title: 'PHP unserialize() & Keamanan allowed_classes',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 727,
    overview: 'Kuasai fungsi unserialize(): merekonstruksi kembali nilai PHP asli dari string serialisasi dengan konfigurasi opsi keamanan allowed_classes untuk mencegah kerentanan PHP Object Injection (RCE).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-red-600 text-white">SECURITY CRITICAL</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 727 / 730</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛡️ Deserialisasi Aman (unserialize)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>unserialize(string $data, array $options = []): mixed</code> memulihkan data. <strong>Wajib Keamanan:</strong> Jangan pernah memanggil <code>unserialize()</code> pada input user yang tidak tepercaya tanpa menyetel opsi <code>['allowed_classes' => false]</code> untuk mencegah serangan Remote Code Execution (PHP Object Injection).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$serializedData = 'a:3:{s:4:"nama";s:13:"Rahmat Fadila";s:4:"role";s:5:"admin";s:5:"aktif";b:1;}';

// Deserialisasi aman dengan menonaktifkan pemuatan kelas sembarangan
$dataPulih = unserialize($serializedData, ["allowed_classes" => false]);

echo "<h3>Hasil Penggunaan unserialize() Aman:</h3>";
echo "<ul>";
echo "<li>Nama  : <strong style='color:#059669;'>{$dataPulih['nama']}</strong></li>";
echo "<li>Role  : <strong>{$dataPulih['role']}</strong></li>";
echo "<li>Aktif : <strong>" . ($dataPulih['aktif'] ? 'Ya' : 'Tidak') . "</strong></li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'unserialize($data, ["allowed_classes" => false]) mengembalikan array aman tanpa risiko instansiasi kelas berbahaya.'
    ],
    challenge: {
      instruction: 'Pulihkan string serialisasi dengan unserialize.',
      starterCode: `<?php
$str = serialize(["status" => "OK"]);
$res = unserialize($str);
echo $res['status'];
?>`,
      hint: 'Panggil unserialize($str).'
    },
    quiz: {
      question: 'Opsi parameter apakah yang WAJIB ditambahkan pada `unserialize()` untuk mencegah serangan kerentanan PHP Object Injection saat membaca data dari sumber eksternal?',
      options: [
        '`["allowed_classes" => false]`',
        '`["safe_mode" => true]`',
        '`["no_objects" => 1]`',
        '`["secure" => true]`'
      ],
      correctIndex: 0,
      explanation: 'allowed_classes => false mencegah PHP menginstansiasi objek kelas yang berpotensi memicu exploit magic method.'
    }
  },

  // 728. UNSET
  {
    id: 'php-ref-var-unset',
    title: 'PHP unset()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 728,
    overview: 'Kuasai konstruksi bahasa unset(): menghancurkan dan menghapus variabel atau elemen kunci array tertentu dari memori (Memory Garbage Collection Trigger).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">MEMORY CLEANUP</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 728 / 730</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🗑️ Menghapus Variabel & Elemen Array (unset)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>unset(mixed ...$vars): void</code> menghapus referensi variabel sehingga memori yang dialokasikan dapat dibebaskan oleh Garbage Collector PHP. Sangat penting untuk menghapus key sensitif seperti password dari array sebelum dikirim sebagai respons API (<code>unset($user['password'])</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$userPayload = [
    "id" => 101,
    "nama" => "Rahmat Fadila",
    "email" => "rahmat@devgrow.id",
    "password" => "\$2y\$10\$K9x...", // Data sensitif!
];

// Hapus password sebelum me-return data ke frontend
unset($userPayload['password']);

echo "<h3>Hasil Penggunaan unset() untuk Keamanan API Payload:</h3>";
echo "<pre style='background:#0f172a; color:#38bdf8; padding:12px; border-radius:8px;'>";
print_r($userPayload);
echo "</pre>";
?>`,
    codeExplanation: [
      'unset($userPayload["password"]) menghapus kunci password sehingga aman dari kebocoran credential.'
    ],
    challenge: {
      instruction: 'Hapus variabel $token dengan unset($token).',
      starterCode: `<?php
$token = "SECRET";
unset($token);
echo isset($token) ? "Ada" : "Terhapus";
?>`,
      hint: 'Panggil unset($token).'
    },
    quiz: {
      question: 'Apa status sebuah variabel setelah dipanggil dengan `unset($var)` saat diperiksa kembali menggunakan `isset($var)`?',
      options: [
        'Mengembalikan `false` (karena variabel telah dihancurkan dari tabel simbol memori)',
        'Mengembalikan `true`',
        '`null`',
        'Fatal Error'
      ],
      correctIndex: 0,
      explanation: 'unset menghapus variabel dari memory scope sehingga isset($var) menghasilkan false.'
    }
  },

  // 729. VAR_DUMP
  {
    id: 'php-ref-var-var-dump',
    title: 'PHP var_dump()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 729,
    overview: 'Kuasai fungsi var_dump(): alat debugging paling mendasar di PHP untuk mencetak informasi terperinci mengenai satu atau lebih ekspresi (termasuk tipe data, panjang string, dan isi struktur).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DEBUGGING TOOL</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 729 / 730</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Inspeksi Debugging Lengkap (var_dump)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>var_dump(mixed ...$values): void</code> menampilkan informasi struktural tentang satu atau lebih variabel, termasuk tipe data dan nilai yang tepat tanpa ambiguitas (misal: membedakan <code>int(0)</code>, <code>string(1) "0"</code>, <code>bool(false)</code>, dan <code>NULL</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$data = [
    "nama" => "DevGrow LMS",
    "versi" => 2.0,
    "aktif" => true,
    "tags" => ["php", "oop", "psql"]
];

echo "<h3>Hasil Penggunaan var_dump():</h3>";
echo "<pre style='background:#0f172a; color:#38bdf8; padding:12px; border-radius:8px; font-family:monospace;'>";
var_dump($data);
echo "</pre>";
?>`,
    codeExplanation: [
      'var_dump() menampilkan tipe data array(4), string(11), float(2), bool(true) secara presisi.'
    ],
    challenge: {
      instruction: 'Dump variabel $x = "PHP 8" dengan var_dump($x).',
      starterCode: `<?php
$x = "PHP 8";
var_dump($x);
?>`,
      hint: 'Panggil var_dump($x).'
    },
    quiz: {
      question: 'Apa keunggulan `var_dump()` dibandingkan `print_r()` saat mendebug variabel bertipe boolean `false` atau `null`?',
      options: [
        '`var_dump()` secara eksplisit mencetak `bool(false)` atau `NULL`, sedangkan `print_r()` tidak menampilkan karakter apa pun untuk `false` dan `null` sehingga membingungkan developer',
        '`var_dump` menghasilkan array',
        'Keduanya identik',
        '`var_dump` lebih lambat'
      ],
      correctIndex: 0,
      explanation: 'print_r tidak mencetak teks apa pun untuk nilai false/null, sementara var_dump mencetak representasi tipenya secara jelas.'
    }
  },

  // 730. VAR_EXPORT
  {
    id: 'php-ref-var-var-export',
    title: 'PHP var_export() & Code Generation',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 730,
    overview: 'Kuasai fungsi var_export(): mengekspor representasi kode PHP valid yang dapat di-eval atau ditulis langsung ke file konfigurasi PHP (Config Cache Generator).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">CODE GENERATOR</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 730 / 730</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚙️ Generator Kode PHP Valid (var_export)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>var_export(mixed $value, bool $return = false): ?string</code> mengembalikan representasi kode PHP yang 100% valid secara sintaksis. Digunakan oleh framework modern (seperti Laravel <code>php artisan config:cache</code>) untuk menulis array konfigurasi langsung ke file PHP disk berkecepatan OPcache tinggi.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$configApp = [
    'name' => 'DevGrow Learning System',
    'env' => 'production',
    'debug' => false,
    'database' => [
        'driver' => 'pgsql',
        'host' => '127.0.0.1',
        'port' => 5432,
        'database' => 'lms_db'
    ]
];

// Generate sintaks kode PHP valid untuk disimpan ke file cache
$kodePhpValid = "<?php\nreturn " . var_export($configApp, true) . ";\n";

echo "<h3>Hasil Penggunaan var_export() (Config Cache Generator):</h3>";
echo "<pre style='background:#0f172a; color:#38bdf8; padding:12px; border-radius:8px; font-family:monospace;'>";
echo htmlspecialchars($kodePhpValid);
echo "</pre>";
echo "<p style='color:green; font-weight:bold; font-size:18px;'>🎉 Selamat! Seluruh kurikulum PHP Variable Handling Reference (Materi 696 - 730) berhasil Anda kuasai dengan sempurna!</p>";
?>`,
    codeExplanation: [
      'var_export($config, true) menghasilkan kode array PHP valid yang siap dieksekusi secara instan oleh OPcache mesin Zend.'
    ],
    challenge: {
      instruction: 'Ekspor array ["app" => "LMS"] ke kode PHP dengan var_export.',
      starterCode: `<?php
echo var_export(["app" => "LMS"], true);
?>`,
      hint: 'Panggil var_export(["app" => "LMS"], true).'
    },
    quiz: {
      question: 'Mengapa framework modern seperti Laravel menggunakan `var_export()` saat membuat file cache konfigurasi (`config:cache`)?',
      options: [
        'Karena menghasilkan file kode PHP valid (`return array(...);`) yang dapat langsung di-cache oleh OPcache memori PHP sehingga loading konfigurasi berkecepatan nyaris instan (zero-cost parsing)',
        'Karena mengenkripsi file',
        'Karena mengubah menjadi JSON',
        'Hanya untuk styling'
      ],
      correctIndex: 0,
      explanation: 'var_export menghasilkan native PHP array code yang di-compile langsung ke bytecode oleh OPcache.'
    }
  }
];

module.exports = phpPart67RefVar4;
