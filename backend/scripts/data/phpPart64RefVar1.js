// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (VARIABLE HANDLING PART 1: 696-705)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart64RefVar1 = [
  // 696. BOOLVAL
  {
    id: 'php-ref-var-boolval',
    title: 'PHP boolval()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 696,
    overview: 'Kuasai fungsi boolval(): mengekstrak dan mengonversi nilai skalar apa pun menjadi nilai boolean murni (true atau false) berdasarkan aturan evaluasi kebenaran PHP (Truthy vs Falsy).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TYPE CASTING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 696 / 723</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚖️ Konversi ke Boolean Murni (boolval)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>boolval(mixed $value): bool</code> (atau casting <code>(bool)$value</code>) mengonversi nilai menjadi <code>true</code> atau <code>false</code>. Nilai yang dianggap falsy: <code>0</code>, <code>0.0</code>, <code>""</code>, <code>"0"</code>, <code>[]</code>, dan <code>null</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$nilaiTest = [
    "1" => boolval(1),
    "0" => boolval(0),
    "''" => boolval(""),
    "'0'" => boolval("0"),
    "'hello'" => boolval("hello"),
    "[]" => boolval([]),
    "[1,2]" => boolval([1, 2]),
    "null" => boolval(null)
];

echo "<h3>Hasil Evaluasi Truthy vs Falsy (boolval):</h3>";
echo "<ul>";
foreach ($nilaiTest as $label => $hasil) {
    $warna = $hasil ? "#059669" : "#dc2626";
    $teks = $hasil ? "TRUE" : "FALSE";
    echo "<li>Nilai <code>$label</code> -> <strong style='color:$warna;'>$teks</strong></li>";
}
echo "</ul>";
?>`,
    codeExplanation: [
      'boolval("0") bernilai false di PHP karena "0" dianggap sebagai falsy string.'
    ],
    challenge: {
      instruction: 'Uji nilai array kosong dengan boolval([]).',
      starterCode: `<?php
echo boolval([]) ? "True" : "False";
?>`,
      hint: 'Panggil boolval([]).'
    },
    quiz: {
      question: 'Manakah di antara nilai berikut yang menghasilkan `false` saat dievaluasi oleh `boolval()` di PHP?',
      options: [
        'String `"0"` (string berisi angka nol)',
        'String `"false"`',
        'Array `[0]`',
        'Integer `-1`'
      ],
      correctIndex: 0,
      explanation: 'String "0" adalah aturan khusus di PHP yang dievaluasi sebagai false (falsy).'
    }
  },

  // 697. DEBUG_ZVAL_DUMP
  {
    id: 'php-ref-var-debug-zval-dump',
    title: 'PHP debug_zval_dump()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 697,
    overview: 'Kuasai fungsi debug_zval_dump(): mencetak representasi internal struktur zval PHP (termasuk tipe data, nilai, dan jumlah penghitung referensi memori refcount).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ENGINE INTROSPECTION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 697 / 723</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔬 Introspeksi Memori Internal Mesin Zend (debug_zval_dump)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>debug_zval_dump(mixed ...$values): void</code> menampilkan informasi struktur data internal mesin Zend Engine C PHP untuk menganalisis Copy-on-Write (COW) dan alokasi memori.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$data = "DevGrow LMS";
$referensi = &$data;

echo "<h3>Struktur zval Internal PHP:</h3>";
echo "<pre style='background:#0f172a; color:#38bdf8; padding:12px; border-radius:8px;'>";
debug_zval_dump($data);
echo "</pre>";
?>`,
    codeExplanation: [
      'debug_zval_dump() menampilkan refcount yang mengindikasikan berapa banyak variabel yang merujuk ke memori tersebut.'
    ],
    challenge: {
      instruction: 'Pahami fungsi debug_zval_dump.',
      starterCode: `<?php
$x = "Testing";
debug_zval_dump($x);
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Informasi tambahan apakah yang ditampilkan oleh `debug_zval_dump()` yang TIDAK ada pada `var_dump()` biasa?',
      options: [
        'Nilai `refcount` (jumlah referensi memori penunjuk zval internal mesin Zend PHP)',
        'Ukuran RAM server',
        'Versi database',
        'Nama file script'
      ],
      correctIndex: 0,
      explanation: 'debug_zval_dump dirancang khusus untuk menganalisis reference count memori variabel.'
    }
  },

  // 698. DOUBLEVAL / FLOATVAL
  {
    id: 'php-ref-var-doubleval-floatval',
    title: 'PHP doubleval() & floatval()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 698,
    overview: 'Kuasai fungsi doubleval() & floatval(): mengonversi string atau integer menjadi nilai bilangan pecahan mengambang (Floating-point / Double precision).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">FLOAT CASTING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 698 / 723</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔢 Konversi Bilangan Pecahan (floatval / doubleval)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>floatval(mixed $value): float</code> dan alias resminya <code>doubleval()</code> mengekstrak nilai angka desimal dari string (misal: <code>"12500.75 USD"</code> -> <code>12500.75</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$inputHarga = "149.99 USD";
$angkaPecahan = floatval($inputHarga);

echo "<h3>Hasil Penggunaan floatval():</h3>";
echo "<p>Input String : <code>$inputHarga</code></p>";
echo "<p>Tipe Data    : <strong>" . gettype($angkaPecahan) . "</strong></p>";
echo "<p>Nilai Float  : <strong style='color:#059669;'>$angkaPecahan</strong></p>";
?>`,
    codeExplanation: [
      'floatval("149.99 USD") membuang karakter non-angka di belakang desimal dan menghasilkan float 149.99.'
    ],
    challenge: {
      instruction: 'Ubah string "99.5%" menjadi float dengan floatval("99.5%").',
      starterCode: `<?php
echo floatval("99.5%");
?>`,
      hint: 'Panggil floatval("99.5%").'
    },
    quiz: {
      question: 'Apakah perbedaan antara `doubleval()` dan `floatval()` di PHP?',
      options: [
        'Tidak ada perbedaan sama sekali, `doubleval()` adalah alias identik 100% dari `floatval()` (karena tipe double dan float adalah tipe data yang sama di PHP)',
        '`doubleval` memiliki presisi 2x lipat',
        '`floatval` hanya untuk bilangan bulat',
        '`doubleval` telah dihapus'
      ],
      correctIndex: 0,
      explanation: 'double dan float di PHP mengacu pada tipe data IEEE 754 64-bit yang identik.'
    }
  },

  // 699. IS_COUNTABLE
  {
    id: 'php-ref-var-is-countable',
    title: 'PHP is_countable()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 699,
    overview: 'Kuasai fungsi is_countable(): memeriksa apakah sebuah variabel berupa array atau mengimplementasikan interface Countable sehingga aman dihitung dengan count() tanpa menyebabkan TypeError.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">TYPE SAFETY</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 699 / 723</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛡️ Keamanan Hitung Array (is_countable)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>is_countable(mixed $value): bool</code> mengembalikan <code>true</code> jika <code>$value</code> adalah array atau objek yang mengimplementasikan <code>Countable</code>. Di PHP 8.x, memanggil <code>count()</code> pada variabel non-countable akan memicu Fatal <code>TypeError</code>, sehingga fungsi ini adalah pelindung wajib.
          </p>
        </div>
      </div>
    `,
    code: `<?php
function hitungDataAman($data): int {
    if (is_countable($data)) {
        return count($data);
    }
    return 0; // Kembalikan default 0 jika bukan array/countable
}

echo "<h3>Hasil Pengujian is_countable():</h3>";
echo "<p>Array [1, 2, 3] : <strong>" . hitungDataAman([1, 2, 3]) . " item</strong></p>";
echo "<p>Variabel null   : <strong style='color:#059669;'>" . hitungDataAman(null) . " item (Aman dari Fatal TypeError!)</strong></p>";
?>`,
    codeExplanation: [
      'is_countable($data) mencegah error fatal saat data dari database/API bernilai null atau string.'
    ],
    challenge: {
      instruction: 'Periksa apakah [1, 2] dapat dihitung dengan is_countable([1, 2]).',
      starterCode: `<?php
echo is_countable([1, 2]) ? "Countable" : "Not countable";
?>`,
      hint: 'Panggil is_countable([1, 2]).'
    },
    quiz: {
      question: 'Apa yang terjadi di PHP 8.x jika kita memanggil `count($var)` di mana `$var` bernilai `null` tanpa memeriksa `is_countable()` terlebih dahulu?',
      options: [
        'Memicu fatal `TypeError` exception',
        'Mengembalikan 0 tanpa peringatan',
        'Mengembalikan false',
        'Mengembalikan string kosong'
      ],
      correctIndex: 0,
      explanation: 'PHP 8 memperketat pengetikan data sehingga pemanggilan count() pada tipe non-countable memicu TypeError.'
    }
  },

  // 700. EMPTY
  {
    id: 'php-ref-var-empty',
    title: 'PHP empty()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 700,
    overview: 'Kuasai konstruksi bahasa empty(): memeriksa apakah sebuah variabel dianggap kosong (tidak ada / bernilai falsy) tanpa memicu error "Undefined variable".',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">INPUT VALIDATION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 700 / 723</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">❓ Pengecekan Variabel Kosong (empty)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>empty(mixed $var): bool</code> mengembalikan <code>true</code> jika variabel belum didefinisikan atau bernilai: <code>""</code>, <code>0</code>, <code>0.0</code>, <code>"0"</code>, <code>null</code>, <code>false</code>, atau <code>[]</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$formulir = [
    "nama" => "Rahmat Fadila",
    "catatan" => "",
    "diskon" => "0"
];

echo "<h3>Hasil Pengujian empty():</h3>";
echo "<p>Nama (Rahmat Fadila) : <strong>" . (empty($formulir['nama']) ? 'Kosong' : 'Ada Isi') . "</strong></p>";
echo "<p>Catatan ('')          : <strong style='color:#dc2626;'>" . (empty($formulir['catatan']) ? 'Kosong (True)' : 'Ada') . "</strong></p>";
echo "<p>Diskon ('0')          : <strong style='color:#dc2626;'>" . (empty($formulir['diskon']) ? 'Kosong (True)' : 'Ada') . "</strong></p>";
echo "<p>Alamat (Undefined)    : <strong style='color:#059669;'>" . (empty($formulir['alamat']) ? 'Kosong (Aman tanpa Notice Error!)' : 'Ada') . "</strong></p>";
?>`,
    codeExplanation: [
      'empty() tidak memicu warning Undefined Array Key saat mengakses $formulir["alamat"].'
    ],
    challenge: {
      instruction: 'Periksa apakah string "" kosong dengan empty("").',
      starterCode: `<?php
echo empty("") ? "Kosong" : "Ada";
?>`,
      hint: 'Panggil empty("").'
    },
    quiz: {
      question: 'Manakah nilai yang dianggap KOSONG (`true`) oleh konstruksi `empty()` di PHP?',
      options: [
        'Semua jawaban benar (`""`, `0`, `"0"`, `null`, `[]`, dan variabel yang belum dibuat)',
        'Hanya string kosong `""`',
        'Hanya nilai `null`',
        'Hanya array kosong `[]`'
      ],
      correctIndex: 0,
      explanation: 'empty() mengevaluasi semua nilai falsy dan variabel undefined sebagai kosong (true).'
    }
  },

  // 701. GET_DEFINED_VARS
  {
    id: 'php-ref-var-get-defined-vars',
    title: 'PHP get_defined_vars()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 701,
    overview: 'Kuasai fungsi get_defined_vars(): mengembalikan array asosiatif berisi seluruh variabel yang saat ini terdefinisi dalam scope lokal pemanggilan.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SCOPE INSPECTION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 701 / 723</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📋 Daftar Variabel Terdefinisi (get_defined_vars)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>get_defined_vars(): array</code> mengumpulkan semua variabel aktif di dalam fungsi atau script global saat itu. Sangat berguna untuk framework template rendering engine (seperti Blade / Twig view data pass-through).
          </p>
        </div>
      </div>
    `,
    code: `<?php
function renderView() {
    $judul = "Mastering PHP 8";
    $instruktur = "Rahmat Fadila";
    $rating = 5.0;

    // Ambil semua variabel lokal di dalam fungsi ini
    $semuaVariabel = get_defined_vars();
    
    return $semuaVariabel;
}

$viewData = renderView();

echo "<h3>Variabel yang Didefinisikan dalam Fungsi:</h3>";
echo "<ul>";
foreach ($viewData as $varName => $varVal) {
    echo "<li>Variabel <code>\$$varName</code> = <strong style='color:#059669;'>$varVal</strong></li>";
}
echo "</ul>";
?>`,
    codeExplanation: [
      'get_defined_vars() mengembalikan array ["judul" => "...", "instruktur" => "...", "rating" => 5.0].'
    ],
    challenge: {
      instruction: 'Pahami fungsi get_defined_vars.',
      starterCode: `<?php
$a = 10; $b = 20;
$vars = get_defined_vars();
echo "Total variabel terdefinisi: " . count($vars);
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Tipe data apakah yang dikembalikan oleh pemanggilan `get_defined_vars()`?',
      options: [
        'Array asosiatif (berisi pasangan `nama_variabel => nilai`)',
        'String JSON',
        'Objek stdClass',
        'Integer jumlah variabel'
      ],
      correctIndex: 0,
      explanation: 'get_defined_vars menghasilkan array asosiatif dari seluruh variabel aktif dalam scope.'
    }
  },

  // 702. GET_RESOURCE_TYPE
  {
    id: 'php-ref-var-get-resource-type',
    title: 'PHP get_resource_type()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 702,
    overview: 'Kuasai fungsi get_resource_type(): mengidentifikasi nama tipe resource khusus (misal: "stream", "OpenSSL X.509", "curl") dari variabel bertipe resource.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">RESOURCE INSPECTOR</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 702 / 723</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏷️ Identifikasi Tipe Resource (get_resource_type)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>get_resource_type(resource $resource): string</code> mengembalikan nama string tipe resource eksternal yang sedang dibuka oleh PHP.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$fileResource = fopen("php://memory", "r");

if (is_resource($fileResource)) {
    $tipeResource = get_resource_type($fileResource);
    echo "<h3>Hasil Penggunaan get_resource_type():</h3>";
    echo "<p>Tipe Resource: <strong style='color:#059669; font-size:18px;'>$tipeResource</strong></p>";
}

fclose($fileResource);
?>`,
    codeExplanation: [
      'get_resource_type($fileResource) mengembalikan string "stream".'
    ],
    challenge: {
      instruction: 'Pahami fungsi get_resource_type.',
      starterCode: `<?php
$fp = fopen("php://temp", "w");
echo get_resource_type($fp);
fclose($fp);
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Apa nama tipe resource yang dikembalikan oleh `get_resource_type()` untuk file pointer yang dibuka dengan `fopen()`?',
      options: [
        'String `"stream"`',
        'String `"file"`',
        'String `"pointer"`',
        'String `"handle"`'
      ],
      correctIndex: 0,
      explanation: 'Semua file handle dan URL network stream di PHP dikategorikan sebagai resource stream.'
    }
  },

  // 703. GETTYPE
  {
    id: 'php-ref-var-gettype',
    title: 'PHP gettype()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 703,
    overview: 'Kuasai fungsi gettype(): mendapatkan nama tipe data primitif PHP dari sebuah variabel ("boolean", "integer", "double", "string", "array", "object", "resource", "NULL", "unknown type").',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TYPE REFLECTION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 703 / 723</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏷️ Nama Tipe Data Variabel (gettype)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>gettype(mixed $value): string</code> mengembalikan nama string tipe data PHP standar. Untuk pengecekan tipe kondisional, fungsi khusus seperti <code>is_int()</code>, <code>is_string()</code>, <code>is_array()</code> lebih disarankan karena lebih cepat.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$sampelData = [
    42,
    3.14159,
    "DevGrow",
    true,
    [1, 2, 3],
    new stdClass(),
    null
];

echo "<h3>Hasil Pengujian gettype():</h3>";
echo "<ul>";
foreach ($sampelData as $item) {
    echo "<li>Nilai: <code>" . json_encode($item) . "</code> -> Tipe: <strong style='color:#059669;'>" . gettype($item) . "</strong></li>";
}
echo "</ul>";
?>`,
    codeExplanation: [
      'gettype() mendeteksi integer, double, string, boolean, array, object, dan NULL.'
    ],
    challenge: {
      instruction: 'Cek tipe data dari 100 dengan gettype(100).',
      starterCode: `<?php
echo gettype(100);
?>`,
      hint: 'Panggil gettype(100).'
    },
    quiz: {
      question: 'String apakah yang dikembalikan oleh `gettype(3.14)` untuk bilangan desimal di PHP?',
      options: [
        'String `"double"` (alasan historis internal PHP)',
        'String `"float"`',
        'String `"decimal"`',
        'String `"number"`'
      ],
      correctIndex: 0,
      explanation: 'gettype() mengembalikan string "double" untuk angka pecahan floating point.'
    }
  },

  // 704. INTVAL
  {
    id: 'php-ref-var-intval',
    title: 'PHP intval()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 704,
    overview: 'Kuasai fungsi intval(): mengonversi variabel menjadi nilai integer bilangan bulat dengan dukungan basis bilangan kustom (Desimal, Biner, Oktal, Heksadesimal).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">INTEGER CASTING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 704 / 723</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔢 Konversi Bilangan Bulat (intval)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>intval(mixed $value, int $base = 10): int</code> mengonversi nilai menjadi integer. Mendukung basis 2 (biner), basis 8 (oktal), basis 10 (desimal), dan basis 16 (hex).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$desimal = intval("42 item");
$biner   = intval("1010", 2); // 10
$hex     = intval("1A", 16);  // 26

echo "<h3>Hasil Penggunaan intval() Multi-Basis:</h3>";
echo "<ul>";
echo "<li>intval('42 item')       : <strong style='color:#059669;'>$desimal</strong></li>";
echo "<li>intval('1010', 2) [Biner]: <strong>$biner</strong></li>";
echo "<li>intval('1A', 16) [Hex]   : <strong style='color:#4f46e5;'>$hex</strong></li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'intval("42 item") mengekstrak angka 42 di awal string.',
      'intval("1A", 16) mengonversi bilangan heksadesimal ke desimal 26.'
    ],
    challenge: {
      instruction: 'Ubah hex "FF" ke integer desimal dengan intval("FF", 16).',
      starterCode: `<?php
echo intval("FF", 16);
?>`,
      hint: 'Panggil intval("FF", 16).'
    },
    quiz: {
      question: 'Berapakah angka integer yang dihasilkan oleh `intval("1111", 2)` (basis 2 biner)?',
      options: [
        'Integer `15` (1+2+4+8)',
        'Integer `1111`',
        'Integer `4`',
        'Error'
      ],
      correctIndex: 0,
      explanation: '1111 biner sama dengan 15 desimal.'
    }
  },

  // 705. IS_ARRAY
  {
    id: 'php-ref-var-is-array',
    title: 'PHP is_array()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 705,
    overview: 'Kuasai fungsi is_array(): memeriksa apakah sebuah variabel bertipe array PHP (Indexed Array maupun Associative Array).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">TYPE GUARD</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 705 / 723</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📦 Type Guard Array (is_array)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>is_array(mixed $value): bool</code> mengembalikan <code>true</code> jika <code>$value</code> adalah array. Wajib digunakan sebelum mengeksekusi loop <code>foreach</code> pada data payload JSON API yang dinamis.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$data = ["PHP", "JavaScript", "PostgreSQL"];

if (is_array($data)) {
    echo "<h3>Daftar Elemen Array Terverifikasi:</h3>";
    echo "<ul>";
    foreach ($data as $item) {
        echo "<li><strong style='color:#059669;'>$item</strong></li>";
    }
    echo "</ul>";
}
?>`,
    codeExplanation: [
      'is_array($data) bertindak sebagai Type Guard yang memastikan operasi array aman dijalankan.'
    ],
    challenge: {
      instruction: 'Cek apakah ["A"] adalah array dengan is_array(["A"]).',
      starterCode: `<?php
echo is_array(["A"]) ? "Array" : "Bukan Array";
?>`,
      hint: 'Panggil is_array(["A"]).'
    },
    quiz: {
      question: 'Berapakah nilai yang dikembalikan oleh `is_array(new ArrayObject())`?',
      options: [
        'Boolean `false` (karena `ArrayObject` adalah objek bertipe instance class, bukan tipe data primitif array PHP)',
        'Boolean `true`',
        '`null`',
        'Error'
      ],
      correctIndex: 0,
      explanation: 'is_array hanya memeriksa tipe array primitif, bukan objek yang mengimplementasikan ArrayAccess/Countable.'
    }
  }
];

module.exports = phpPart64RefVar1;
