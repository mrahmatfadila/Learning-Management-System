// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (REGEX PCRE: 561-570)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart52RefRegex = [
  // 561. PREG_FILTER
  {
    id: 'php-ref-regex-preg-filter',
    title: 'PHP preg_filter()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 561,
    overview: 'Kuasai fungsi preg_filter(): melakukan pencarian dan penggantian pola RegEx pada array/string, tetapi HANYA mengembalikan elemen yang cocok dengan pola (Filter and Replace).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PHP REGEX PCRE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 561 / 570</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Filter & Ganti Pola Sekaligus (preg_filter)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>preg_filter(string|array $pattern, string|array $replacement, string|array $subject, int $limit = -1, int &$count = null): string|array|null</code> bekerja mirip dengan <code>preg_replace()</code>, namun elemen array yang <strong>TIDAK cocok</strong> dengan pola akan otomatis dibuang/dieliminasi dari hasil kembalian.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$dataInput = [
    "harga: 15000",
    "nama produk: Mousepad Gaming",
    "harga: 450000",
    "diskon: 20%",
    "harga: 75000"
];

// Ganti "harga: [angka]" menjadi "IDR [angka]" dan buang baris yang bukan harga
$hasilFilter = preg_filter('/harga:\\s*(\\d+)/', 'IDR $1', $dataInput);

echo "<h3>Hasil Penggunaan preg_filter():</h3>";
echo "<ul>";
foreach ($hasilFilter as $item) {
    echo "<li><strong style='color:#059669;'>$item</strong></li>";
}
echo "</ul>";
?>`,
    codeExplanation: [
      'preg_filter() hanya mengembalikan elemen yang cocok dengan pola regex dan telah diganti.',
      'Elemen "nama produk" dan "diskon" otomatis disaring/dihapus dari output array.'
    ],
    challenge: {
      instruction: 'Filter array dan ambil hanya teks yang mengandung angka dengan preg_filter("/(\\d+)/", "[$1]", $arr).',
      starterCode: `<?php
$data = ['item 1', 'tanpa angka', 'item 2'];
$res = preg_filter('/(\\d+)/', '[$1]', $data);
echo implode(", ", $res);
?>`,
      hint: 'Panggil preg_filter.'
    },
    quiz: {
      question: 'Apa perbedaan mendasar antara `preg_filter()` dan `preg_replace()` ketika memproses Array subject?',
      options: [
        '`preg_filter()` hanya mengembalikan elemen array yang COCOK dengan regex (elemen yang tidak cocok dibuang), sedangkan `preg_replace()` mengembalikan seluruh elemen array tanpa terkecuali',
        '`preg_filter()` tidak mendukung grup tangkapan ($1)',
        '`preg_replace()` hanya untuk 1 string',
        'Keduanya identik'
      ],
      correctIndex: 0,
      explanation: 'preg_filter memfilter out elemen yang tidak match, menghasilkan array yang hanya berisi elemen yang cocok & diganti.'
    }
  },

  // 562. PREG_GREP
  {
    id: 'php-ref-regex-preg-grep',
    title: 'PHP preg_grep()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 562,
    overview: 'Kuasai fungsi preg_grep(): menyaring (filter) elemen array berdasarkan kecocokan pola RegEx tanpa melakukan modifikasi/penggantian teks (Pattern Match Filtering).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ARRAY GREP</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 562 / 570</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔎 Penyaringan Array via RegEx (preg_grep)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>preg_grep(string $pattern, array $array, int $flags = 0): array|false</code> mengembalikan array baru berisi elemen-elemen yang cocok dengan pola. Menambahkan flag <code>PREG_GREP_INVERT</code> akan membalikkan logika (mengambil hanya elemen yang TIDAK cocok).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$daftarEmail = [
    "rahmat@devgrow.id",
    "budi.santoso@gmail.com",
    "admin@devgrow.id",
    "kontak@yahoo.co.id",
    "support@devgrow.id"
];

// Ambil hanya email internal berdomain @devgrow.id
$emailDevgrow = preg_grep('/@devgrow\\.id$/i', $daftarEmail);

// Ambil email non-devgrow dengan flag PREG_GREP_INVERT
$emailLain = preg_grep('/@devgrow\\.id$/i', $daftarEmail, PREG_GREP_INVERT);

echo "<h3>Email Internal DevGrow (preg_grep):</h3>";
echo "<ul>";
foreach ($emailDevgrow as $em) {
    echo "<li><strong style='color:#059669;'>$em</strong></li>";
}
echo "</ul>";

echo "<h3>Email Domain Luar (PREG_GREP_INVERT):</h3>";
echo "<ul>";
foreach ($emailLain as $em) {
    echo "<li><strong style='color:#4f46e5;'>$em</strong></li>";
}
echo "</ul>";
?>`,
    codeExplanation: [
      'preg_grep("/@devgrow\\.id$/i", $arr) memfilter array email berdomain @devgrow.id.',
      'Flag PREG_GREP_INVERT membalikkan filter untuk mencari elemen yang tidak cocok.'
    ],
    challenge: {
      instruction: 'Saring angka dari array [10, "abc", 25, "xyz"] dengan preg_grep("/^\\d+$/", $data).',
      starterCode: `<?php
$data = [10, "abc", 25, "xyz"];
$angka = preg_grep('/^\\d+$/', $data);
echo implode(", ", $angka);
?>`,
      hint: 'Panggil preg_grep.'
    },
    quiz: {
      question: 'Flag konstanta apakah yang digunakan pada `preg_grep()` untuk membalikkan kondisi pencarian (mengambil elemen yang TIDAK cocok)?',
      options: [
        '`PREG_GREP_INVERT`',
        '`PREG_REVERSE`',
        '`PREG_NOT_MATCH`',
        '`PREG_INVERT_MATCH`'
      ],
      correctIndex: 0,
      explanation: 'PREG_GREP_INVERT membalikkan hasil pencocokan pola.'
    }
  },

  // 563. PREG_LAST_ERROR
  {
    id: 'php-ref-regex-preg-last-error',
    title: 'PHP preg_last_error()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 563,
    overview: 'Kuasai fungsi preg_last_error() & preg_last_error_msg(): membaca kode dan pesan kesalahan evaluasi mesin RegEx PCRE terakhir (ReDoS Backtracking Limit & Bad UTF-8).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ERROR INSPECTION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 563 / 570</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🩺 Diagnosa Kesalahan PCRE (preg_last_error)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>preg_last_error(): int</code> mengembalikan kode kesalahan PCRE: <code>PREG_NO_ERROR (0)</code>, <code>PREG_INTERNAL_ERROR (1)</code>, <code>PREG_BACKTRACK_LIMIT_ERROR (2)</code>, <code>PREG_RECURSION_LIMIT_ERROR (3)</code>, <code>PREG_BAD_UTF8_ERROR (4)</code>, atau <code>PREG_JIT_STACKLIMIT_ERROR (6)</code>. Di PHP 8.0+, gunakan <code>preg_last_error_msg()</code> untuk mendapatkan pesan teks deskriptif.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Uji pola valid
preg_match('/^[a-z]+$/', 'devgrow');

$errCode = preg_last_error();
$errMsg = preg_last_error_msg();

echo "<h3>Hasil Pengujian preg_last_error():</h3>";
echo "<p>Kode Error  : <strong style='color:#059669;'>$errCode</strong> (PREG_NO_ERROR)</p>";
echo "<p>Pesan Error : <strong style='color:#059669;'>$errMsg</strong></p>";

echo "<h4>Daftar Konstanta Error PCRE:</h4>";
echo "<ul>";
echo "<li><code>PREG_NO_ERROR (0)</code>: Operasi RegEx Sukses</li>";
echo "<li><code>PREG_BACKTRACK_LIMIT_ERROR (2)</code>: Batas backtracking habis (Gejala ReDoS attack)</li>";
echo "<li><code>PREG_BAD_UTF8_ERROR (4)</code>: String mengandung byte UTF-8 korup</li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'preg_last_error() mendeteksi masalah kompleksitas waktu RegEx (Regular Expression Denial of Service - ReDoS).',
      'preg_last_error_msg() (PHP 8.0+) mengembalikan string pesan error yang manusiawi.'
    ],
    challenge: {
      instruction: 'Periksa error regex terakhir dengan preg_last_error() === PREG_NO_ERROR.',
      starterCode: `<?php
preg_match('/\\d+/', '123');
echo (preg_last_error() === PREG_NO_ERROR) ? "RegEx Sehat" : "RegEx Error";
?>`,
      hint: 'Bandingkan dengan PREG_NO_ERROR.'
    },
    quiz: {
      question: 'Error kode apakah yang dihasilkan oleh `preg_last_error()` saat sebuah pola RegEx yang tidak efisien mengalami catastrophic backtracking melebihi `pcre.backtrack_limit`?',
      options: [
        '`PREG_BACKTRACK_LIMIT_ERROR` (Kode 2)',
        '`PREG_SYNTAX_ERROR`',
        '`PREG_TIMEOUT_ERROR`',
        '`PREG_MEMORY_ERROR`'
      ],
      correctIndex: 0,
      explanation: 'PREG_BACKTRACK_LIMIT_ERROR menandakan mesin PCRE kehabisan jatah langkah backtracking.'
    }
  },

  // 564. PREG_MATCH
  {
    id: 'php-ref-regex-preg-match',
    title: 'PHP preg_match()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 564,
    overview: 'Kuasai fungsi preg_match(): memeriksa apakah suatu pola RegEx cocok dengan string dan mengekstrak grup tangkapan (Capture Groups & Named Groups) dari kecocokan pertama (First Match Validation).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">PATTERN MATCHING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 564 / 570</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎯 Pencocokan Pola Tunggal (preg_match)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>preg_match(string $pattern, string $subject, array &$matches = null, int $flags = 0, int $offset = 0): int|false</code> mengembalikan <code>1</code> jika cocok, <code>0</code> jika tidak cocok, dan mengisi array <code>$matches</code> dengan teks hasil tangkapan. Mendukung Named Capture Groups: <code>(?<nama_group>pola)</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$teks = "Tanggal Registrasi: 2026-08-27 oleh user #402";

// Pola dengan Named Capture Groups: (?<tahun>...) (?<bulan>...) (?<hari>...)
$pola = '/(?<tahun>\\d{4})-(?<bulan>\\d{2})-(?<hari>\\d{2})/';

if (preg_match($pola, $teks, $matches)) {
    echo "<h3>Hasil Penggunaan preg_match() dengan Named Groups:</h3>";
    echo "<p>Kecocokan Penuh : <strong style='color:#059669;'>{$matches[0]}</strong></p>";
    echo "<p>Tahun Tangkapan : <strong>{$matches['tahun']}</strong></p>";
    echo "<p>Bulan Tangkapan : <strong>{$matches['bulan']}</strong></p>";
    echo "<p>Hari Tangkapan  : <strong>{$matches['hari']}</strong></p>";
}
?>`,
    codeExplanation: [
      'preg_match() berhenti segera setelah menemukan kecocokan pertama (short-circuiting), sangat cepat untuk validasi format.',
      '$matches["tahun"] menangkap grup bernilai "2026".'
    ],
    challenge: {
      instruction: 'Cocokkan nomor HP Indonesia (format 08...) dengan preg_match("/^08\\d{8,11}$/", "08123456789").',
      starterCode: `<?php
$hp = "081234567890";
echo preg_match('/^08\\d{8,11}$/', $hp) ? "Nomor Valid" : "Nomor Tidak Valid";
?>`,
      hint: 'Panggil preg_match.'
    },
    quiz: {
      question: 'Berapakah nilai kembalian `preg_match()` jika pola RegEx yang dicari DITEMUKAN pada string subject?',
      options: [
        'Integer `1`',
        'Boolean `true`',
        'Integer `0`',
        'String `"match"`'
      ],
      correctIndex: 0,
      explanation: 'preg_match mengembalikan integer 1 jika cocok (atau 0 jika tidak ada, false jika syntax error).'
    }
  },

  // 565. PREG_MATCH_ALL
  {
    id: 'php-ref-regex-preg-match-all',
    title: 'PHP preg_match_all()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 565,
    overview: 'Kuasai fungsi preg_match_all(): mencari dan mengekstrak SELURUH kecocokan pola RegEx di sepanjang teks dokumen (Global Match Extraction) ke dalam array 2 dimensi multidimensi.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">GLOBAL EXTRACTION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 565 / 570</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌐 Ekstraksi Seluruh Kecocokan (preg_match_all)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>preg_match_all(string $pattern, string $subject, array &$matches = null, int $flags = PREG_PATTERN_ORDER, int $offset = 0): int|false</code> mengekstrak semua kemunculan pola. Flag <code>PREG_SET_ORDER</code> menyusun array per baris kecocokan (sangat nyaman untuk loop <code>foreach ($matches as $item)</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$htmlContent = '<a href="https://devgrow.id">Home</a> dan <a href="https://devgrow.id/courses">Kursus</a> serta <a href="https://devgrow.id/blog">Artikel</a>';

// Ekstraksi seluruh tag link dan teks anchor
$polaLink = '/<a\\s+href="(?<url>[^"]+)">(?<label>[^<]+)<\\/a>/i';

$totalLink = preg_match_all($polaLink, $htmlContent, $matches, PREG_SET_ORDER);

echo "<h3>Hasil Ekstraksi Link (Total $totalLink Ditemukan):</h3>";
echo "<ul>";
foreach ($matches as $link) {
    echo "<li>Label: <strong>{$link['label']}</strong> -> URL: <code style='color:#059669;'>{$link['url']}</code></li>";
}
echo "</ul>";
?>`,
    codeExplanation: [
      'preg_match_all() menemukan seluruh kemunculan tag <a> di dalam dokumen.',
      'Flag PREG_SET_ORDER memudahkan iterasi tiap match sebagai array asosiatif.'
    ],
    challenge: {
      instruction: 'Ekstrak semua angka dalam teks "Rp 15000 dan Rp 35000" dengan preg_match_all("/\\d+/", $txt, $m).',
      starterCode: `<?php
$txt = "Item 100 dan Item 250";
preg_match_all('/\\d+/', $txt, $m);
echo "Ditemukan: " . implode(", ", $m[0]);
?>`,
      hint: 'Panggil preg_match_all.'
    },
    quiz: {
      question: 'Flag apakah pada `preg_match_all()` yang menyusun array `$matches` sedemikian rupa sehingga setiap elemen mewakili satu kesatuan baris hasil tangkapan (`$matches[0]`, `$matches[1]`)?',
      options: [
        '`PREG_SET_ORDER`',
        '`PREG_PATTERN_ORDER` (default)',
        '`PREG_OFFSET_CAPTURE`',
        '`PREG_UNMATCHED_AS_NULL`'
      ],
      correctIndex: 0,
      explanation: 'PREG_SET_ORDER mengelompokkan hasil per entitas match.'
    }
  },

  // 566. PREG_REPLACE
  {
    id: 'php-ref-regex-preg-replace',
    title: 'PHP preg_replace()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 566,
    overview: 'Kuasai fungsi preg_replace(): mencari dan mengganti pola RegEx dengan string pengganti atau referensi grup tangkapan ($1, $2) di seluruh teks (Pattern Substitution & Data Sanitizer).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TEXT SUBSTITUTION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 566 / 570</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔄 Penggantian Teks Berpola (preg_replace)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>preg_replace(string|array $pattern, string|array $replacement, string|array $subject, int $limit = -1, int &$count = null): string|array|null</code> menggantikan setiap bagian teks yang cocok dengan regex. Menggunakan <code>$1</code>, <code>$2</code> (backreferences) untuk menyisipkan kembali grup yang ditangkap.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// 1. Generator Slug URL Ramah SEO
$judulArtikel = "Belajar PHP 8 & MySQLi di Tahun 2026!";
$slug = strtolower(preg_replace('/[^a-zA-Z0-9]+/', '-', trim($judulArtikel)));
$slug = trim($slug, '-');

// 2. Sensor Nomor Kartu Kredit (Menyisakan 4 digit terakhir)
$ccNumber = "4111-2222-3333-4444";
$ccMasked = preg_replace('/\\d{4}-\\d{4}-\\d{4}-(\\d{4})/', '****-****-****-$1', $ccNumber);

echo "<h3>Hasil Penggunaan preg_replace():</h3>";
echo "<p>Slug URL Ramah SEO : <strong style='color:#059669;'>$slug</strong></p>";
echo "<p>Sensor Kartu Kredit : <strong style='color:#4f46e5;'>$ccMasked</strong></p>";
?>`,
    codeExplanation: [
      'preg_replace("/[^a-zA-Z0-9]+/", "-", $str) membersihkan simbol dan spasi menjadi tanda strip slug.',
      '$1 pada penggantian kartu kredit mengembalikan grup tangkapan (\\d{4}) terakhir.'
    ],
    challenge: {
      instruction: 'Hapus semua karakter non-angka dari "Rp 150.000,-" dengan preg_replace("/\\D/", "", $str).',
      starterCode: `<?php
$harga = "Rp 150.000,-";
$bersih = preg_replace('/\\D/', '', $harga);
echo "Angka Murni: " . $bersih;
?>`,
      hint: 'Gunakan pattern /\\D/ (non-digit).'
    },
    quiz: {
      question: 'Sintaks apakah yang digunakan dalam string replacement untuk merujuk kembali ke grup tangkapan ke-1 (First Capture Group)?',
      options: [
        '`$1` atau `\\1`',
        '`{1}`',
        '`%1`',
        '`#1`'
      ],
      correctIndex: 0,
      explanation: 'PHP PCRE menggunakan $1 (atau \\1) sebagai backreference ke grup tangkapan pertama.'
    }
  },

  // 567. PREG_REPLACE_CALLBACK
  {
    id: 'php-ref-regex-preg-replace-callback',
    title: 'PHP preg_replace_callback()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 567,
    overview: 'Kuasai fungsi preg_replace_callback(): mengeksekusi fungsi callback kustom untuk setiap kecocokan RegEx (Dynamic Calculation & Markdown/BBCode Parser).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DYNAMIC REPLACER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 567 / 570</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚙️ Penggantian Dinamis Berbasis Callback (preg_replace_callback)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>preg_replace_callback(string|array $pattern, callable $callback, string|array $subject, int $limit = -1, int &$count = null, int $flags = 0): string|array|null</code> memanggil fungsi callback yang menerima array <code>$matches</code> dan mengembalikan string pengganti hasil komputasi (seperti konversi mata uang atau parsing Markdown).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$teks = "Produk A harganya $10, Produk B harganya $25, dan Produk C $100.";
$kursUsd = 16000;

// Konversi harga dollar $XX ke Rupiah secara dinamis
$teksRupiah = preg_replace_callback('/\\$(\\d+)/', function(array $m) use ($kursUsd) {
    $dollar = (int)$m[1];
    $rupiah = $dollar * $kursUsd;
    return "Rp " . number_format($rupiah, 0, ',', '.');
}, $teks);

echo "<h3>Hasil Penggunaan preg_replace_callback():</h3>";
echo "<p>Teks Awal : $teks</p>";
echo "<p>Hasil Konversi : <strong style='color:#059669;'>$teksRupiah</strong></p>";
?>`,
    codeExplanation: [
      'preg_replace_callback() mengeksekusi operasi matematika $dollar * 16000 pada setiap match $XX.'
    ],
    challenge: {
      instruction: 'Ubah semua teks dalam kurung [teks] menjadi huruf besar dengan preg_replace_callback.',
      starterCode: `<?php
$str = "Halo [dunia] php [keren]";
$res = preg_replace_callback('/\\[([^\\]]+)\\]/', fn($m) => "[" . strtoupper($m[1]) . "]", $str);
echo $res;
?>`,
      hint: 'Gunakan fn($m) => strtoupper($m[1]).'
    },
    quiz: {
      question: 'Argumen apakah yang diterima oleh fungsi `$callback` pada pemanggilan `preg_replace_callback()`?',
      options: [
        'Array `$matches` yang berisi teks kecocokan penuh di indeks 0 dan grup-grup tangkapan di indeks 1, 2, ...',
        'String tunggal',
        'Nomor indeks kecocokan',
        'Boolean'
      ],
      correctIndex: 0,
      explanation: 'Callback menerima array $matches hasil tangkapan regex untuk setiap match.'
    }
  },

  // 568. PREG_REPLACE_CALLBACK_ARRAY
  {
    id: 'php-ref-regex-preg-replace-callback-array',
    title: 'PHP preg_replace_callback_array()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 568,
    overview: 'Kuasai fungsi preg_replace_callback_array(): memetakan array beberapa pola RegEx ke masing-masing fungsi callback handler yang berbeda dalam 1 kali eksekusi efisien (Full Markdown Engine Parser).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">MULTI CALLBACK ROUTER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 568 / 570</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎛️ Router Multi-Pola Callback (preg_replace_callback_array)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>preg_replace_callback_array(array $pattern_to_callback, string|array $subject, int $limit = -1, int &$count = null, int $flags = 0): string|array|null</code> menerima array asosiatif <code>['/pola_1/' => callback1, '/pola_2/' => callback2]</code>. Sangat bersih dan terstruktur untuk membuat parser teks sintaks BBCode/Markdown.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$markdown = "Belajar **PHP 8** dan *MySQLi* di 'DevGrow LMS'.";

// Mini Markdown Parser menggunakan callback array terstruktur
$html = preg_replace_callback_array([
    '/\\*\\*(.*?)\\*\\*/' => fn($m) => "<strong style='color:#059669;'>{$m[1]}</strong>",
    '/\\*(.*?)\\*/'     => fn($m) => "<em>{$m[1]}</em>",
    '/\\\'(.*?)\\\'/'     => fn($m) => "<code style='background:#f1f5f9; padding:2px 6px; border-radius:4px;'>{$m[1]}</code>",
], $markdown);

echo "<h3>Hasil Penggunaan preg_replace_callback_array() (Markdown Parser):</h3>";
echo "<p>Input Markdown : <code>$markdown</code></p>";
echo "<p>Hasil HTML Render : $html</p>";
?>`,
    codeExplanation: [
      'preg_replace_callback_array() mengeksekusi aturan bold (**), italic (*), dan code (`) secara bersih dalam satu pemanggilan.'
    ],
    challenge: {
      instruction: 'Pahami struktur array pola => callback pada preg_replace_callback_array.',
      starterCode: `<?php
$res = preg_replace_callback_array([
    '/a/' => fn() => 'A',
    '/b/' => fn() => 'B'
], 'abc');
echo $res;
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Struktur data apakah yang diterima oleh parameter pertama `preg_replace_callback_array()`?',
      options: [
        'Array asosiatif dengan kunci berupa string pola RegEx (`/pattern/`) dan nilai berupa fungsi callback callable',
        'Array string biasa',
        'Objek stdClass',
        'String pola tunggal'
      ],
      correctIndex: 0,
      explanation: 'Array asosiatif memetakan setiap regex pattern ke handler fungsi callback-nya masing-masing.'
    }
  },

  // 569. PREG_SPLIT
  {
    id: 'php-ref-regex-preg-split',
    title: 'PHP preg_split()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 569,
    overview: 'Kuasai fungsi preg_split(): memecah string menjadi array berdasarkan pembatas pola RegEx fleksibel (seperti memecah teks berdasarkan spasi ganda, koma, titik koma, atau newline sekaligus).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">STRING SPLITTER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 569 / 570</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">✂️ Memecah Teks via Pola RegEx (preg_split)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>preg_split(string $pattern, string $subject, int $limit = -1, int $flags = 0): array|false</code> jauh lebih fleksibel daripada <code>explode()</code>. Flag <code>PREG_SPLIT_NO_EMPTY</code> otomatis membuang elemen kosong, dan <code>PREG_SPLIT_DELIM_CAPTURE</code> menyertakan delimiter tangkapan ke dalam array hasil.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// String tag yang dipisahkan oleh campuran koma, spasi ganda, titik koma, dan pipe |
$inputTags = "php,   mysql;  react |  nextjs , typescript";

// Pecah string dengan delimiter regex: [,;|\\s]+
$daftarTags = preg_split('/[,;|\\s]+/', $inputTags, -1, PREG_SPLIT_NO_EMPTY);

echo "<h3>Hasil Penggunaan preg_split() (Multi-Delimiter):</h3>";
echo "<p>Input Mentah : <code>$inputTags</code></p>";
echo "<p>Hasil Array :</p>";
echo "<ul>";
foreach ($daftarTags as $tag) {
    echo "<li>Tag: <strong style='color:#059669;'>$tag</strong></li>";
}
echo "</ul>";
?>`,
    codeExplanation: [
      'preg_split("/[,;|\\s]+/", ..., PREG_SPLIT_NO_EMPTY) memecah string dengan delimiter campuran dalam 1 langkah rapi.'
    ],
    challenge: {
      instruction: 'Pecah teks "satu, dua; tiga" dengan delimiter regex /[,;\\s]+/ menggunakan preg_split.',
      starterCode: `<?php
$kata = preg_split('/[,;\\s]+/', "satu, dua; tiga", -1, PREG_SPLIT_NO_EMPTY);
echo implode(" - ", $kata);
?>`,
      hint: 'Panggil preg_split.'
    },
    quiz: {
      question: 'Flag apakah pada `preg_split()` yang digunakan untuk mencegah string kosong (`""`) masuk ke dalam array hasil pecahan?',
      options: [
        '`PREG_SPLIT_NO_EMPTY`',
        '`PREG_SPLIT_DELIM_CAPTURE`',
        '`PREG_SPLIT_OFFSET_CAPTURE`',
        '`PREG_TRIM_EMPTY`'
      ],
      correctIndex: 0,
      explanation: 'PREG_SPLIT_NO_EMPTY menyaring keluar semua elemen kosong dari array hasil.'
    }
  },

  // 570. PREG_QUOTE
  {
    id: 'php-ref-regex-preg-quote',
    title: 'PHP preg_quote()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 570,
    overview: 'Kuasai fungsi preg_quote(): meng-escape seluruh karakter khusus RegEx (. \\ + * ? [ ^ ] $ ( ) { } = ! < > | : - #) dari string input dinamis agar aman disisipkan ke dalam pola regex.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">REGEX ESCAPING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 570 / 570</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛡️ Sanitasi Karakter Pola RegEx (preg_quote)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>preg_quote(string $str, ?string $delimiter = null): string</code> menambahkan backslash <code>\\</code> di depan karakter spesial regex. Sangat wajib digunakan ketika Anda membuat fitur pencarian di mana kata kunci dari user (yang mungkin mengandung simbol seperti <code>$100 (Diskon?)</code>) disuntikkan ke dalam pola regex dinamis.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$keywordUser = "$45.00 (Diskon?)";
$kataKunciAman = preg_quote($keywordUser, '/');

$dokumen = "Daftar harga item A adalah $45.00 (Diskon?) untuk member baru.";

// Gunakan kata kunci yang sudah di-quote dengan aman di dalam regex
$pola = '/' . $kataKunciAman . '/i';
$isFound = preg_match($pola, $dokumen);

echo "<h3>Hasil Penggunaan preg_quote():</h3>";
echo "<p>Keyword Asli User : <code>$keywordUser</code></p>";
echo "<p>Keyword Safe RegEx: <strong style='color:#059669;'>$kataKunciAman</strong></p>";
echo "<p>Pola Regex Valid   : <code>$pola</code></p>";
echo "<p>Status Pencarian   : " . ($isFound ? "<strong style='color:green;'>✓ Ditemukan Cocok!</strong>" : "Tidak Cocok") . "</p>";
?>`,
    codeExplanation: [
      'preg_quote("$45.00 (Diskon?)", "/") menghasilkan "\\$45\\.00 \\(Diskon\\?\\)".',
      'Mencegah runtime Warning: Compilation failed pada mesin PCRE akibat tanda kurung/tanya yang tidak seimbang.'
    ],
    challenge: {
      instruction: 'Escape karakter spesial pada string "C++ (100%)" dengan preg_quote("C++ (100%)", "/").',
      starterCode: `<?php
$safe = preg_quote("C++ (100%)", "/");
echo $safe;
?>`,
      hint: 'Panggil preg_quote($str, "/").'
    },
    quiz: {
      question: 'Karakter apakah yang ditambahkan oleh `preg_quote()` di depan setiap simbol meta-karakter RegEx?',
      options: [
        'Karakter Backslash `\\` (escape slash)',
        'Tanda kutip ganda `"`',
        'Tanda strip `-`',
        'Tanda pagar `#`'
      ],
      correctIndex: 0,
      explanation: 'preg_quote menambahkan backslash untuk meng-escape karakter-karakter spesial regex.'
    }
  }
];

module.exports = phpPart52RefRegex;
