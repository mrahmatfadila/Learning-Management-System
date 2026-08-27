// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (VARIABLE HANDLING PART 3: 716-723)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart66RefVar3 = [
  // 716. IS_OBJECT
  {
    id: 'php-ref-var-is-object',
    title: 'PHP is_object()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 716,
    overview: 'Kuasai fungsi is_object(): memeriksa apakah sebuah variabel merupakan instance objek dari sebuah kelas PHP.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">OBJECT TYPE GUARD</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 716 / 723</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📦 Type Guard Objek (is_object)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>is_object(mixed $value): bool</code> mengembalikan <code>true</code> jika <code>$value</code> adalah instance objek (seperti <code>new DateTime()</code> atau <code>new stdClass()</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
class User { public string $name = "Rahmat"; }

$obj = new User();
$arr = ["name" => "Rahmat"];

echo "<h3>Hasil Pengujian is_object():</h3>";
echo "<p>Instance User class : <strong style='color:#059669;'>" . (is_object($obj) ? 'True (Objek Sah)' : 'False') . "</strong></p>";
echo "<p>Array Asosiatif     : <strong>" . (is_object($arr) ? 'True' : 'False (Bukan Objek)') . "</strong></p>";
?>`,
    codeExplanation: [
      'is_object($obj) memverifikasi tipe objek sebelum memanggil method/properti ->.'
    ],
    challenge: {
      instruction: 'Cek apakah new stdClass() adalah objek dengan is_object(new stdClass()).',
      starterCode: `<?php
echo is_object(new stdClass()) ? "Objek" : "Bukan";
?>`,
      hint: 'Panggil is_object(new stdClass()).'
    },
    quiz: {
      question: 'Berapakah nilai yang dikembalikan oleh `is_object(new DateTime())`?',
      options: [
        'Boolean `true`',
        'Boolean `false`',
        'String class name',
        '`null`'
      ],
      correctIndex: 0,
      explanation: 'Instance dari kelas mana pun dievaluasi sebagai true oleh is_object.'
    }
  },

  // 717. IS_REAL
  {
    id: 'php-ref-var-is-real',
    title: 'PHP is_real() & is_float()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 717,
    overview: 'Kuasai fungsi is_real(): fungsi historis alias is_float() dan standar modernnya di PHP 8.x.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-600 text-white">DEPRECATION NOTICE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 717 / 723</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔢 Alias Historis is_real (Gunakan is_float)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>is_real()</code> telah didepresiasi di PHP 7.4 dan dihapus di PHP 8.0+. Pengembang modern WAJIB menggunakan <code>is_float(mixed $value): bool</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$nilai = 75.5;

// Standar modern resmi PHP 8.x
if (is_float($nilai)) {
    echo "<h3>Standar Modern Pengecekan Desimal (is_float):</h3>";
    echo "<p>Nilai: <strong style='color:#059669;'>$nilai adalah float valid</strong></p>";
}
?>`,
    codeExplanation: [
      'is_float() adalah fungsi standar pengganti resmi untuk is_real().'
    ],
    challenge: {
      instruction: 'Gunakan is_float(10.5) untuk memeriksa angka desimal.',
      starterCode: `<?php
echo is_float(10.5) ? "Float Valid" : "Invalid";
?>`,
      hint: 'Panggil is_float(10.5).'
    },
    quiz: {
      question: 'Fungsi apakah yang merupakan standar resmi pengganti `is_real()` di PHP 8.x?',
      options: [
        '`is_float()`',
        '`is_int()`',
        '`is_numeric()`',
        '`floatval()`'
      ],
      correctIndex: 0,
      explanation: 'is_float() adalah fungsi standar resmi di seluruh PHP modern.'
    }
  },

  // 718. IS_RESOURCE
  {
    id: 'php-ref-var-is-resource',
    title: 'PHP is_resource()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 718,
    overview: 'Kuasai fungsi is_resource(): memeriksa apakah sebuah variabel bertipe resource khusus (seperti file handle fopen, curl handle, atau image resource GD).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">RESOURCE GUARD</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 718 / 723</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📄 Type Guard Resource (is_resource)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>is_resource(mixed $value): bool</code> mengembalikan <code>true</code> jika <code>$value</code> memegang resource pointer eksternal aktif.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$file = fopen("php://memory", "r");

echo "<h3>Hasil Pengujian is_resource():</h3>";
echo "<p>File Pointer Aktif : <strong style='color:#059669;'>" . (is_resource($file) ? 'True (Resource Aktif)' : 'False') . "</strong></p>";

fclose($file);

echo "<p>Setelah fclose()     : <strong>" . (is_resource($file) ? 'True' : 'False (Sudah Ditutup)') . "</strong></p>";
?>`,
    codeExplanation: [
      'is_resource() bernilai true selama handle file belum ditutup oleh fclose().'
    ],
    challenge: {
      instruction: 'Pahami fungsi is_resource.',
      starterCode: `<?php
$h = fopen("php://temp", "w");
echo is_resource($h) ? "Resource" : "Bukan";
fclose($h);
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Apa yang terjadi pada nilai kembalian `is_resource($handle)` setelah file pointer ditutup dengan `fclose($handle)`?',
      options: [
        'Mengembalikan `false` (karena resource telah dibebaskan / closed-resource)',
        'Tetap mengembalikan `true`',
        '`null`',
        'Error'
      ],
      correctIndex: 0,
      explanation: 'Setelah fclose(), tipe variabel berubah menjadi closed resource sehingga is_resource menghasilkan false.'
    }
  },

  // 719. IS_SCALAR
  {
    id: 'php-ref-var-is-scalar',
    title: 'PHP is_scalar()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 719,
    overview: 'Kuasai fungsi is_scalar(): memeriksa apakah sebuah variabel bernilai tipe skalar atomik tunggal (integer, float, string, atau boolean — bukan array/object/resource/null).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SCALAR GUARD</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 719 / 723</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚛️ Tipe Data Skalar Tunggal (is_scalar)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>is_scalar(mixed $value): bool</code> mengembalikan <code>true</code> HANYA jika variabel bertipe <code>int</code>, <code>float</code>, <code>string</code>, atau <code>bool</code>. Tipe majemuk (array, object, resource, null) bernilai <code>false</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$data = [
    "String 'PHP'" => is_scalar("PHP"),
    "Integer 42" => is_scalar(42),
    "Float 3.14" => is_scalar(3.14),
    "Boolean true" => is_scalar(true),
    "Array [1, 2]" => is_scalar([1, 2]),
    "Object stdClass" => is_scalar(new stdClass()),
    "Null" => is_scalar(null)
];

echo "<h3>Hasil Pengujian is_scalar():</h3>";
echo "<ul>";
foreach ($data as $tipe => $isScalar) {
    $warna = $isScalar ? "#059669" : "#dc2626";
    $status = $isScalar ? "✓ SKALAR" : "✗ BUKAN SKALAR";
    echo "<li>$tipe -> <strong style='color:$warna;'>$status</strong></li>";
}
echo "</ul>";
?>`,
    codeExplanation: [
      'is_scalar() memisahkan nilai atomik tunggal dari struktur data majemuk.'
    ],
    challenge: {
      instruction: 'Cek apakah "Halo" adalah skalar dengan is_scalar("Halo").',
      starterCode: `<?php
echo is_scalar("Halo") ? "Skalar" : "Bukan";
?>`,
      hint: 'Panggil is_scalar("Halo").'
    },
    quiz: {
      question: 'Manakah di antara tipe data berikut yang BUKAN merupakan tipe data skalar di PHP?',
      options: [
        '`array` (tipe majemuk)',
        '`integer`',
        '`float`',
        '`boolean`'
      ],
      correctIndex: 0,
      explanation: 'Array adalah tipe data komposit/majemuk, bukan skalar.'
    }
  },

  // 720. IS_STRING
  {
    id: 'php-ref-var-is-string',
    title: 'PHP is_string()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 720,
    overview: 'Kuasai fungsi is_string(): memeriksa apakah sebuah variabel bertipe teks string murni.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">TYPE GUARD</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 720 / 723</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔤 Type Guard String (is_string)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>is_string(mixed $value): bool</code> mengembalikan <code>true</code> jika <code>$value</code> adalah tipe string.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$nama = "Rahmat Fadila";
$angka = 123;

echo "<h3>Hasil Pengujian is_string():</h3>";
echo "<p>is_string('Rahmat Fadila'): <strong style='color:#059669;'>" . (is_string($nama) ? 'True (String Murni)' : 'False') . "</strong></p>";
echo "<p>is_string(123)            : <strong>" . (is_string($angka) ? 'True' : 'False') . "</strong></p>";
?>`,
    codeExplanation: [
      'is_string($nama) memastikan variabel bertipe teks sebelum menjalankan fungsi manipulasi string.'
    ],
    challenge: {
      instruction: 'Cek apakah "PHP" adalah string dengan is_string("PHP").',
      starterCode: `<?php
echo is_string("PHP") ? "String" : "Bukan";
?>`,
      hint: 'Panggil is_string("PHP").'
    },
    quiz: {
      question: 'Berapakah nilai yang dikembalikan oleh `is_string(true)`?',
      options: [
        'Boolean `false` (karena true adalah boolean literal)',
        'Boolean `true`',
        '`null`',
        'Error'
      ],
      correctIndex: 0,
      explanation: 'is_string hanya mengembalikan true untuk nilai string.'
    }
  },

  // 721. ISSET
  {
    id: 'php-ref-var-isset',
    title: 'PHP isset() & Null Coalescing Operator (??)',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 721,
    overview: 'Kuasai konstruksi bahasa isset(): memeriksa apakah sebuah variabel atau kunci array telah didefinisikan DAN tidak bernilai NULL, serta padanan modernnya null coalescing operator ($a ?? $default).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">CORE CONSTRUCT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 721 / 723</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Pengecekan Eksistensi Variabel (isset)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>isset(mixed ...$vars): bool</code> mengembalikan <code>true</code> hanya jika variabel ada DAN nilainya bukan <code>null</code>. Operator modern <code>$user['role'] ?? 'guest'</code> menggunakan logika <code>isset()</code> secara otomatis.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$pengguna = [
    "nama" => "Rahmat Fadila",
    "avatar" => null
];

// 1. Pengecekan isset
$adaNama = isset($pengguna['nama']);
$adaAvatar = isset($pengguna['avatar']); // False karena nilainya null
$adaEmail = isset($pengguna['email']);   // False karena key tidak ada

// 2. Null Coalescing Operator (??)
$avatarTampil = $pengguna['avatar'] ?? "default-avatar.png";

echo "<h3>Hasil Pengujian isset() & Operator ??:</h3>";
echo "<p>isset(nama)   : <strong style='color:#059669;'>" . ($adaNama ? 'True' : 'False') . "</strong></p>";
echo "<p>isset(avatar) : <strong>" . ($adaAvatar ? 'True' : 'False (Bernilai NULL)') . "</strong></p>";
echo "<p>isset(email)  : <strong>" . ($adaEmail ? 'True' : 'False (Key Tidak Ada)') . "</strong></p>";
echo "<p>Avatar Tampil : <strong style='color:#059669;'>$avatarTampil</strong></p>";
?>`,
    codeExplanation: [
      'isset() bernilai false jika variabel tidak ada ATAU bernilai null murni.'
    ],
    challenge: {
      instruction: 'Gunakan operator null coalescing $data["role"] ?? "guest".',
      starterCode: `<?php
$data = ["nama" => "Budi"];
echo $data['role'] ?? "guest";
?>`,
      hint: 'Akses $data["role"] ?? "guest".'
    },
    quiz: {
      question: 'Berapakah nilai yang dikembalikan oleh `isset($var)` jika `$var = null;`?',
      options: [
        'Boolean `false` (karena `isset()` mewajibkan variabel terdefinisi DAN tidak bernilai `null`)',
        'Boolean `true`',
        '`null`',
        'Notice Error'
      ],
      correctIndex: 0,
      explanation: 'Variabel yang bernilai null selalu dievaluasi sebagai false oleh isset().'
    }
  },

  // 722. PRINT_R
  {
    id: 'php-ref-var-print-r',
    title: 'PHP print_r()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 722,
    overview: 'Kuasai fungsi print_r(): mencetak representasi manusiawi yang mudah dibaca dari sebuah array atau objek (dengan opsi $return = true untuk logging).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">HUMAN-READABLE DUMP</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 722 / 723</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📊 Cetak Struktur Array & Objek (print_r)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>print_r(mixed $value, bool $return = false): string|bool</code> mencetak pohon array atau mengembalikan string pohon jika <code>$return = true</code> (sangat berguna untuk <code>error_log(print_r($data, true))</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$struktur = [
    "modul" => "PHP Variable Handling",
    "bab" => 10,
    "topik" => ["boolval", "isset", "empty", "print_r"]
];

// Tangkap output sebagai string ($return = true)
$dumpString = print_r($struktur, true);

echo "<h3>Hasil Penggunaan print_r(\$data, true):</h3>";
echo "<pre style='background:#0f172a; color:#38bdf8; padding:12px; border-radius:8px; font-family:monospace;'>";
echo htmlspecialchars($dumpString);
echo "</pre>";
?>`,
    codeExplanation: [
      'print_r($struktur, true) mengembalikan representasi teks pohon array untuk debugging log.'
    ],
    challenge: {
      instruction: 'Cetak array ["A", "B"] dengan print_r.',
      starterCode: `<?php
print_r(["A", "B"]);
?>`,
      hint: 'Panggil print_r(["A", "B"]).'
    },
    quiz: {
      question: 'Apa fungsi dari parameter kedua `$return = true` pada pemanggilan `print_r($data, true)`?',
      options: [
        'Menginstruksikan `print_r()` untuk MENGEMBALIKAN hasil cetak dalam bentuk string (bukan mencetaknya langsung ke browser), sangat ideal untuk logging file',
        'Untuk membalikkan urutan array',
        'Untuk enkripsi output',
        'Menghapus array'
      ],
      correctIndex: 0,
      explanation: 'Parameter $return = true mengembalikan string hasil print_r.'
    }
  },

  // 723. VARIABLE HANDLING MASTER RECAP
  {
    id: 'php-ref-var-complete-master',
    title: 'PHP Variable Handling Master Architecture',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 723,
    overview: 'Kuasai arsitektur menyeluruh sistem tipe data dinamis, casting tipe presisi, type guard sanitasi, dan manajemen siklus hidup variabel di PHP 8 backend.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">VARIABLE MASTER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 723 / 723</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏆 Master Lengkap Variable Handling PHP 8</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Seluruh fungsi penanganan variabel (casting <code>intval</code> / <code>floatval</code> / <code>boolval</code>, validasi <code>isset</code> / <code>empty</code> / <code>is_numeric</code>, guard <code>is_array</code> / <code>is_iterable</code> / <code>is_countable</code> / <code>is_callable</code>, dan inspeksi <code>gettype</code> / <code>print_r</code>) telah Anda kuasai dengan sempurna untuk membangun backend kelas enterprise.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Ringkasan Pilar Variable Handling PHP 8:</h3>";
echo "<ul>";
echo "<li>✓ <strong>Type Guards:</strong> is_array(), is_int(), is_float(), is_string(), is_bool(), is_object()</li>";
echo "<li>✓ <strong>Loop & Traversal:</strong> is_iterable(), is_countable(), is_callable()</li>";
echo "<li>✓ <strong>Pengecekan Eksistensi:</strong> isset(), empty(), is_null(), Null Coalescing (??)</li>";
echo "<li>✓ <strong>Type Casting:</strong> intval(), floatval(), boolval()</li>";
echo "<li>✓ <strong>Debugging & Logging:</strong> print_r(\$data, true), debug_zval_dump(), gettype()</li>";
echo "</ul>";
echo "<p style='color:green; font-weight:bold; font-size:18px;'>🎉 Selamat! Seluruh referensi PHP Variable Handling (Materi 696 - 723) telah Anda kuasai secara paripurna!</p>";
?>`,
    codeExplanation: [
      'Rekapitulasi lengkap fondasi sistem tipe variabel PHP 8 enterprise.'
    ],
    challenge: {
      instruction: 'Pahami arsitektur variable handling PHP.',
      starterCode: `<?php
echo "PHP Variable Handling Reference Selesai 100%!";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Manakah kombinasi fungsi yang paling tepat untuk memvalidasi data angka dari formulir `$_POST[\'jumlah\']` sebelum diproses ke transaksi database?',
      options: [
        '`isset($_POST[\'jumlah\']) && is_numeric($_POST[\'jumlah\']) && intval($_POST[\'jumlah\']) > 0`',
        '`empty($_POST[\'jumlah\'])`',
        '`is_null($_POST[\'jumlah\'])`',
        '`gettype($_POST[\'jumlah\']) === "integer"`'
      ],
      correctIndex: 0,
      explanation: 'Kombinasi isset + is_numeric + intval > 0 memastikan input ada, berupa angka valid, dan bernilai positif.'
    }
  }
];

module.exports = phpPart66RefVar3;
