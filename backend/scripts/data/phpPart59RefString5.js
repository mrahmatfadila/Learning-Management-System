// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (STRING PART 5: 643-655)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart59RefString5 = [
  // 643. SSCANF
  {
    id: 'php-ref-str-sscanf',
    title: 'PHP sscanf()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 643,
    overview: 'Kuasai fungsi sscanf(): mengurai (parse) data dari sebuah string berdasarkan pola format scanf (%s, %d, %f) menjadi variabel-variabel terpisah.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">STRING SCANNER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 643 / 666</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Parsing Teks Berpola (sscanf)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>sscanf(string $string, string $format, mixed &...$vars): array|int|null</code> membaca teks dan mengekstrak nilai-nilai sesuai spesifikasi format ke variabel referensi.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$dataLog = "USER:1042 ROLE:Admin LOGIN:2026-08-27";

// Ekstraksi data via sscanf
sscanf($dataLog, "USER:%d ROLE:%s LOGIN:%s", $userId, $role, $loginDate);

echo "<h3>Hasil Penggunaan sscanf():</h3>";
echo "<p>User ID    : <strong style='color:#059669;'>$userId</strong> (tipe: " . gettype($userId) . ")</p>";
echo "<p>Role       : <strong>$role</strong></p>";
echo "<p>Login Date : <em>$loginDate</em></p>";
?>`,
    codeExplanation: [
      'sscanf() otomatis mengonversi %d ke integer dan %s ke string ke masing-masing variabel.'
    ],
    challenge: {
      instruction: 'Ekstrak nomor versi dari "PHP 8.2" dengan sscanf("PHP 8.2", "PHP %f", $v).',
      starterCode: `<?php
sscanf("PHP 8.2", "PHP %f", $v);
echo "Versi: " . $v;
?>`,
      hint: 'Panggil sscanf("PHP 8.2", "PHP %f", $v).'
    },
    quiz: {
      question: 'Tipe data apakah yang dihasilkan oleh penentu format `%d` pada pemanggilan `sscanf()`?',
      options: [
        'Tipe data `int` (bilangan bulat)',
        'Tipe data `string`',
        'Tipe data `float`',
        'Array'
      ],
      correctIndex: 0,
      explanation: '%d pada sscanf otomatis mengonversi nilai menjadi integer numerik.'
    }
  },

  // 644. STR_CONTAINS
  {
    id: 'php-ref-str-contains',
    title: 'PHP str_contains() (PHP 8.0+)',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 644,
    overview: 'Kuasai fungsi str_contains(): fitur unggulan PHP 8.0+ untuk memeriksa apakah sebuah string mengandung substring tertentu secara ekspresif dan mengembalikan nilai boolean murni.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">PHP 8 MODERN</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 644 / 666</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Pengecekan Substring Modern (str_contains)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>str_contains(string $haystack, string $needle): bool</code> mengembalikan <code>true</code> jika <code>$needle</code> ditemukan di dalam <code>$haystack</code>. Menggantikan pola lawas <code>strpos(...) !== false</code> yang rawan bug falsy index 0.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$email = "developer@devgrow.id";

// Pengecekan domain email dengan str_contains
if (str_contains($email, "@devgrow.id")) {
    echo "<h3>Hasil Pengujian str_contains():</h3>";
    echo "<p style='color:#059669; font-size:18px;'>✓ Email Resmi Internal DevGrow Terverifikasi!</p>";
}
?>`,
    codeExplanation: [
      'str_contains($email, "@devgrow.id") mengembalikan true tanpa risiko bug falsy 0.'
    ],
    challenge: {
      instruction: 'Periksa apakah "Mastering PHP" mengandung "PHP" dengan str_contains.',
      starterCode: `<?php
$str = "Mastering PHP";
echo str_contains($str, "PHP") ? "Ada PHP" : "Tidak ada";
?>`,
      hint: 'Panggil str_contains($str, "PHP").'
    },
    quiz: {
      question: 'Mengapa `str_contains()` di PHP 8 jauh lebih disukai dibandingkan `strpos($haystack, $needle) !== false`?',
      options: [
        'Karena sintaksnya lebih intuitif, ekspresif, dan langsung mengembalikan boolean `true`/`false` murni tanpa jebakan bug indeks 0 (falsy value)',
        'Karena hanya berjalan di Linux',
        'Karena mengembalikan array',
        'Hanya untuk regex'
      ],
      correctIndex: 0,
      explanation: 'str_contains dirancang untuk keterbacaan kode bersih dan menghilangkan kesalahan logika falsy pada indeks 0.'
    }
  },

  // 645. STR_ENDS_WITH
  {
    id: 'php-ref-str-ends-with',
    title: 'PHP str_ends_with() (PHP 8.0+)',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 645,
    overview: 'Kuasai fungsi str_ends_with(): fitur PHP 8.0+ untuk memeriksa apakah sebuah string diakhiri dengan substring tertentu (misal validasi ekstensi file .pdf, .png, .json).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">PHP 8 MODERN</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 645 / 666</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏁 Cek Akhiran String (str_ends_with)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>str_ends_with(string $haystack, string $needle): bool</code> mengembalikan <code>true</code> jika ujung akhir string cocok dengan <code>$needle</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$namaFile = "laporan-keuangan-2026.pdf";

if (str_ends_with($namaFile, ".pdf")) {
    echo "<h3>Hasil Pengujian str_ends_with():</h3>";
    echo "<p>File <strong>$namaFile</strong> adalah dokumen <span style='color:#059669;'>PDF Valid</span>.</p>";
}
?>`,
    codeExplanation: [
      'str_ends_with($namaFile, ".pdf") memvalidasi ekstensi file dalam 1 baris kode elegan.'
    ],
    challenge: {
      instruction: 'Cek apakah "avatar.png" berakhiran ".png" dengan str_ends_with.',
      starterCode: `<?php
echo str_ends_with("avatar.png", ".png") ? "File PNG" : "Bukan PNG";
?>`,
      hint: 'Panggil str_ends_with("avatar.png", ".png").'
    },
    quiz: {
      question: 'Berapakah nilai yang dikembalikan oleh `str_ends_with("index.php", ".php")`?',
      options: [
        'Boolean `true`',
        'Boolean `false`',
        'Integer `6`',
        '`null`'
      ],
      correctIndex: 0,
      explanation: 'str_ends_with mengembalikan boolean true jika string diakhiri dengan needle yang ditentukan.'
    }
  },

  // 646. STR_GETCSV
  {
    id: 'php-ref-str-getcsv',
    title: 'PHP str_getcsv()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 646,
    overview: 'Kuasai fungsi str_getcsv(): mengurai (parse) satu baris teks CSV menjadi array elemen dengan penanganan tanda kutip ganda pembungkus dan delimiter kustom.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CSV PARSER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 646 / 666</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📊 Parser Baris CSV Cerdas (str_getcsv)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>str_getcsv(string $string, string $separator = ",", string $enclosure = "\"", string $escape = "\\\\"): array</code> mengurai baris CSV. Jauh lebih andal dibanding <code>explode(',', ...)</code> karena tidak rusak ketika isi kolom mengandung koma di dalam tanda kutip (misal: <code>"Jakarta, Indonesia",30000</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$barisCsv = '101,"Fadila, Rahmat","Jakarta, Indonesia",2500000';

$kolom = str_getcsv($barisCsv);

echo "<h3>Hasil Penggunaan str_getcsv():</h3>";
echo "<ul>";
echo "<li>ID     : <strong>{$kolom[0]}</strong></li>";
echo "<li>Nama   : <strong style='color:#059669;'>{$kolom[1]}</strong></li>";
echo "<li>Alamat : <strong>{$kolom[2]}</strong></li>";
echo "<li>Gaji   : Rp " . number_format((int)$kolom[3], 0, ',', '.') . "</li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'str_getcsv() mengenali tanda kutip pembungkus sehingga koma di dalam "Jakarta, Indonesia" tidak memecah kolom.'
    ],
    challenge: {
      instruction: 'Parse CSV string "A,B,C" dengan str_getcsv("A,B,C").',
      starterCode: `<?php
$arr = str_getcsv("A,B,C");
echo "Item ke-2: " . $arr[1];
?>`,
      hint: 'Panggil str_getcsv("A,B,C").'
    },
    quiz: {
      question: 'Mengapa kita harus menggunakan `str_getcsv()` daripada `explode(\',\', ...)` saat membaca file CSV?',
      options: [
        'Karena `str_getcsv()` mampu menangani nilai data kolom yang mengandung tanda koma di dalam tanda kutip pembungkus (`"Jakarta, Indonesia"`) tanpa salah memecahnya',
        'Karena explode tidak bisa membaca array',
        'Karena str_getcsv hanya untuk JSON',
        'Keduanya identik'
      ],
      correctIndex: 0,
      explanation: 'str_getcsv mematuhi standar RFC 4180 CSV enclosure parsing.'
    }
  },

  // 647. STR_IREPLACE
  {
    id: 'php-ref-str-ireplace',
    title: 'PHP str_ireplace()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 647,
    overview: 'Kuasai fungsi str_ireplace(): mencari dan mengganti teks tanpa membedakan huruf besar dan huruf kecil (Case-Insensitive String Replacement).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CASE-INSENSITIVE REPLACE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 647 / 666</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔄 Penggantian Teks Case-Insensitive (str_ireplace)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>str_ireplace(array|string $search, array|string $replace, array|string $subject, int &$count = null): array|string</code> mengganti kata tanpa peduli apakah ditulis <code>php</code>, <code>PHP</code>, atau <code>Php</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$teks = "Saya suka belajar php, PHP 8, dan Php Framework.";

// Ganti semua variasi kata 'php' menjadi 'PHP 8.3 Enterprise'
$hasil = str_ireplace('php', 'PHP 8.3 Enterprise', $teks, $totalGanti);

echo "<h3>Hasil Penggunaan str_ireplace():</h3>";
echo "<p>Sebelum : $teks</p>";
echo "<p>Sesudah : <strong style='color:#059669;'>$hasil</strong></p>";
echo "<p>Total kata diganti : <strong>$totalGanti kali</strong></p>";
?>`,
    codeExplanation: [
      'str_ireplace("php", ...) mengganti kata "php", "PHP", dan "Php" sekaligus dalam sekali jalan.'
    ],
    challenge: {
      instruction: 'Ganti kata "apel" (case-insensitive) pada "APEL merah" menjadi "jeruk" dengan str_ireplace.',
      starterCode: `<?php
echo str_ireplace("apel", "jeruk", "APEL merah");
?>`,
      hint: 'Panggil str_ireplace("apel", "jeruk", "APEL merah").'
    },
    quiz: {
      question: 'Apa perbedaan antara `str_replace()` dan `str_ireplace()`?',
      options: [
        '`str_replace()` peka huruf besar/kecil (case-sensitive), sedangkan `str_ireplace()` TIDAK membedakan huruf besar/kecil (case-insensitive)',
        '`str_ireplace` hanya untuk regex',
        '`str_replace` mengembalikan boolean',
        'Keduanya identik'
      ],
      correctIndex: 0,
      explanation: 'Huruf "i" pada str_ireplace menandakan case-insensitive.'
    }
  },

  // 648. STR_PAD
  {
    id: 'php-ref-str-pad-detail',
    title: 'PHP str_pad()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 648,
    overview: 'Kuasai fungsi str_pad(): mengisi string dengan karakter padding hingga mencapai panjang tertentu (STR_PAD_LEFT, STR_PAD_RIGHT, STR_PAD_BOTH).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">STRING PADDING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 648 / 666</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔢 Padding String Presisi (str_pad)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>str_pad(string $string, int $length, string $pad_string = " ", int $pad_type = STR_PAD_RIGHT): string</code> menyisipkan karakter pengisi. Pilihan arah: <code>STR_PAD_LEFT</code>, <code>STR_PAD_RIGHT</code>, atau <code>STR_PAD_BOTH</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$judul = "MENU UTAMA";

// Padding rata tengah (STR_PAD_BOTH) dengan karakter '='
$banner = str_pad($judul, 30, "=", STR_PAD_BOTH);

echo "<h3>Hasil Penggunaan str_pad(..., STR_PAD_BOTH):</h3>";
echo "<pre style='background:#0f172a; color:#38bdf8; padding:12px; border-radius:8px; font-size:16px;'>";
echo $banner;
echo "</pre>";
?>`,
    codeExplanation: [
      'str_pad($judul, 30, "=", STR_PAD_BOTH) menyisipkan tanda sama dengan di sisi kiri dan kanan secara seimbang.'
    ],
    challenge: {
      instruction: 'Pad angka "5" dengan 0 di kiri hingga 4 digit: str_pad("5", 4, "0", STR_PAD_LEFT).',
      starterCode: `<?php
echo str_pad("5", 4, "0", STR_PAD_LEFT);
?>`,
      hint: 'Panggil str_pad("5", 4, "0", STR_PAD_LEFT).'
    },
    quiz: {
      question: 'Flag konstanta apakah pada `str_pad()` yang digunakan untuk meratakan string di tengah dengan menambahkan padding seimbang di kiri dan kanan?',
      options: [
        '`STR_PAD_BOTH`',
        '`STR_PAD_CENTER`',
        '`STR_PAD_MIDDLE`',
        '`STR_PAD_EQUAL`'
      ],
      correctIndex: 0,
      explanation: 'STR_PAD_BOTH membagi padding secara merata di sisi kiri dan kanan.'
    }
  },

  // 649. STR_REPEAT
  {
    id: 'php-ref-str-repeat',
    title: 'PHP str_repeat()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 649,
    overview: 'Kuasai fungsi str_repeat(): mengulang string sebanyak N kali (Generator Garis Pembatas Konsol & Masker Password).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">STRING REPEATER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 649 / 666</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔁 Mengulang Karakter String (str_repeat)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>str_repeat(string $string, int $times): string</code> mengalikan string sebanyak <code>$times</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Generator Bintang Rating Ulasan
$bintang = 5;
$ratingBintang = str_repeat("⭐", $bintang);

echo "<h3>Hasil Penggunaan str_repeat():</h3>";
echo "<p>Rating Kursus DevGrow: <span style='font-size:24px;'>$ratingBintang</span> (5.0 / 5.0)</p>";
?>`,
    codeExplanation: [
      'str_repeat("⭐", 5) mengulang emoji bintang sebanyak 5 kali.'
    ],
    challenge: {
      instruction: 'Ulangi tanda strip "-" sebanyak 10 kali dengan str_repeat("-", 10).',
      starterCode: `<?php
echo str_repeat("-", 10);
?>`,
      hint: 'Panggil str_repeat("-", 10).'
    },
    quiz: {
      question: 'Berapakah string yang dihasilkan oleh `str_repeat("Na", 3)`?',
      options: [
        'String `"NaNaNa"`',
        'String `"Na3"`',
        'String `"Na Na Na"`',
        'Error'
      ],
      correctIndex: 0,
      explanation: 'str_repeat menggandakan string tanpa spasi pemisah.'
    }
  },

  // 650. STR_REPLACE
  {
    id: 'php-ref-str-replace-detail',
    title: 'PHP str_replace()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 650,
    overview: 'Kuasai fungsi str_replace(): mencari dan mengganti teks (case-sensitive) dengan dukungan multi-search array dan penghitungan jumlah penggantian ($count).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">STRING REPLACE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 650 / 666</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔄 Penggantian Teks Cepat (str_replace)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>str_replace(array|string $search, array|string $replace, array|string $subject, int &$count = null): array|string</code>. Sangat cepat karena tidak memuat engine regex PCRE.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Template Email Selamat Datang
$template = "Halo {NAMA}, selamat datang di kursus {KURSUS}!";
$pencarian = ["{NAMA}", "{KURSUS}"];
$pengganti = ["Budi Santoso", "PHP 8 Backend Mastery"];

$pesan = str_replace($pencarian, $pengganti, $template);

echo "<h3>Hasil Penggunaan str_replace() Template Engine:</h3>";
echo "<p><strong style='color:#059669;'>$pesan</strong></p>";
?>`,
    codeExplanation: [
      'str_replace($pencarian, $pengganti, $template) mengganti placeholder token dalam sekali pemanggilan.'
    ],
    challenge: {
      instruction: 'Ganti "World" dengan "PHP" pada "Hello World" menggunakan str_replace.',
      starterCode: `<?php
echo str_replace("World", "PHP", "Hello World");
?>`,
      hint: 'Panggil str_replace("World", "PHP", "Hello World").'
    },
    quiz: {
      question: 'Manakah yang lebih cepat performanya untuk penggantian string statis sederhana di PHP: `str_replace()` atau `preg_replace()`?',
      options: [
        '`str_replace()` (jauh lebih cepat dan hemat RAM karena tidak memerlukan inisialisasi mesin regex PCRE)',
        '`preg_replace()`',
        'Sama persis',
        '`substr_replace()`'
      ],
      correctIndex: 0,
      explanation: 'str_replace adalah fungsi manipulasi string C murni yang sangat teroptimasi.'
    }
  },

  // 651. STR_ROT13
  {
    id: 'php-ref-str-rot13',
    title: 'PHP str_rot13()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 651,
    overview: 'Kuasai fungsi str_rot13(): melakukan enkripsi/dekripsi Caesar Cipher ROT13 (menggeser setiap huruf alfabet 13 posisi ke depan).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CAESAR CIPHER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 651 / 666</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔏 Cipher ROT13 Simetris (str_rot13)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>str_rot13(string $string): string</code> menggeser huruf 13 posisi. Karena alfabet berjumlah 26 huruf (13 x 2 = 26), fungsi ini bersifat simetris dua arah: <code>str_rot13(str_rot13($teks)) === $teks</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$pesanRahasia = "Kunci Rahasia LMS 2026";

// 1. Obfuscate (ROT13)
$terenkripsi = str_rot13($pesanRahasia);

// 2. Dekripsi kembali
$terbaca = str_rot13($terenkripsi);

echo "<h3>Hasil Pengujian str_rot13():</h3>";
echo "<p>Pesan Asli   : $pesanRahasia</p>";
echo "<p>ROT13 Cipher : <code style='color:#dc2626;'>$terenkripsi</code></p>";
echo "<p>Hasil Balik  : <strong style='color:#059669;'>$terbaca</strong></p>";
?>`,
    codeExplanation: [
      'str_rot13() memutar huruf alfabet 13 langkah.'
    ],
    challenge: {
      instruction: 'Obfuscate "PHP" dengan str_rot13("PHP").',
      starterCode: `<?php
$r = str_rot13("PHP");
echo "ROT13: $r | Balik: " . str_rot13($r);
?>`,
      hint: 'Panggil str_rot13("PHP").'
    },
    quiz: {
      question: 'Mengapa memanggil `str_rot13(str_rot13($text))` akan mengembalikan teks asli kembali?',
      options: [
        'Karena alfabet Inggris memiliki 26 huruf, sehingga pergeseran 13 + 13 = 26 langkah menghasilkan rotasi 360 derajat kembali ke huruf semula',
        'Karena PHP menyimpannya di memori',
        'Karena fungsi ini membalikkan string',
        'Hanya untuk angka'
      ],
      correctIndex: 0,
      explanation: 'Sifat simetris 13 + 13 = 26 dari alfabet latin.'
    }
  },

  // 652. STR_SHUFFLE
  {
    id: 'php-ref-str-shuffle',
    title: 'PHP str_shuffle()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 652,
    overview: 'Kuasai fungsi str_shuffle(): mengacak (shuffle) urutan posisi seluruh karakter dalam string (Generator Karakter Acak OTP / CAPTCHA).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">STRING SHUFFLER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 652 / 666</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎲 Mengacak Karakter String (str_shuffle)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>str_shuffle(string $string): string</code> membuat permutasi acak dari karakter string input. Sangat berguna untuk generator kode OTP atau password sementara.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$karakter = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

// Buat Kode OTP 6 Karakter Unik
$otp = substr(str_shuffle($karakter), 0, 6);

echo "<h3>Hasil Penggunaan str_shuffle() (Generator OTP):</h3>";
echo "<p>Pool Karakter : <code>$karakter</code></p>";
echo "<p>Kode OTP Acak  : <strong style='color:#059669; font-size:24px; letter-spacing:4px;'>$otp</strong></p>";
?>`,
    codeExplanation: [
      'substr(str_shuffle($karakter), 0, 6) menghasilkan kode OTP acak non-repetitif.'
    ],
    challenge: {
      instruction: 'Acak string "123456" dengan str_shuffle("123456").',
      starterCode: `<?php
echo "Acak: " . str_shuffle("123456");
?>`,
      hint: 'Panggil str_shuffle("123456").'
    },
    quiz: {
      question: 'Berapakah panjang string hasil yang dikembalikan oleh `str_shuffle($str)`?',
      options: [
        'Sama persis dengan panjang string aslinya (`strlen($str)`)',
        'Selalu 10 karakter',
        'Setengah dari panjang asli',
        'Acak'
      ],
      correctIndex: 0,
      explanation: 'str_shuffle hanya mengacak urutan susunan karakter tanpa menambah atau mengurangi panjangnya.'
    }
  },

  // 653. STR_SPLIT
  {
    id: 'php-ref-str-split',
    title: 'PHP str_split()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 653,
    overview: 'Kuasai fungsi str_split(): memecah string menjadi array potongan karakter individual (atau blok N-karakter) tanpa memerlukan karakter delimiter pemisah.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CHARACTER ARRAY</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 653 / 666</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">✂️ Memecah String per Karakter (str_split)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>str_split(string $string, int $length = 1): array</code> mengubah string menjadi array karakter tunggal (jika <code>$length = 1</code>) atau array potongan blok N-karakter.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$kata = "DEVGROW";

// Pecah menjadi array huruf individual
$huruf = str_split($kata);

echo "<h3>Hasil Penggunaan str_split():</h3>";
echo "<div style='display:flex; gap:8px;'>";
foreach ($huruf as $h) {
    echo "<span style='background:#e0e7ff; color:#4338ca; padding:8px 12px; border-radius:6px; font-weight:bold;'>$h</span>";
}
echo "</div>";
?>`,
    codeExplanation: [
      'str_split("DEVGROW") menghasilkan array ["D", "E", "V", "G", "R", "O", "W"].'
    ],
    challenge: {
      instruction: 'Pecah "PHP" ke array karakter dengan str_split("PHP").',
      starterCode: `<?php
$arr = str_split("PHP");
echo "Huruf pertama: " . $arr[0];
?>`,
      hint: 'Panggil str_split("PHP").'
    },
    quiz: {
      question: 'Apa perbedaan antara `str_split()` dan `explode()`?',
      options: [
        '`str_split()` memotong string berdasarkan jumlah karakter tetap tanpa delimiter, sedangkan `explode()` memerlukan string delimiter pemisah khusus',
        '`str_split` hanya untuk angka',
        '`explode` menghasilkan string',
        'Keduanya identik'
      ],
      correctIndex: 0,
      explanation: 'str_split memotong berdasarkan panjang karakter tetap (default 1 karakter).'
    }
  },

  // 654. STR_STARTS_WITH
  {
    id: 'php-ref-str-starts-with',
    title: 'PHP str_starts_with() (PHP 8.0+)',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 654,
    overview: 'Kuasai fungsi str_starts_with(): fitur PHP 8.0+ untuk memeriksa apakah sebuah string diawali dengan substring tertentu (misal otentikasi Bearer Token atau URL HTTPS).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">PHP 8 MODERN</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 654 / 666</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🚀 Cek Awalan String (str_starts_with)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>str_starts_with(string $haystack, string $needle): bool</code> mengembalikan <code>true</code> jika string diawali oleh teks <code>$needle</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$authHeader = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...";

if (str_starts_with($authHeader, "Bearer ")) {
    $token = substr($authHeader, 7);
    echo "<h3>Hasil Pengujian str_starts_with():</h3>";
    echo "<p style='color:#059669;'>✓ Format Bearer Token Divalidasi Sukses!</p>";
}
?>`,
    codeExplanation: [
      'str_starts_with($authHeader, "Bearer ") memastikan header otentikasi API valid.'
    ],
    challenge: {
      instruction: 'Cek apakah "https://devgrow.id" diawali "https://" dengan str_starts_with.',
      starterCode: `<?php
echo str_starts_with("https://devgrow.id", "https://") ? "Aman" : "Insecure";
?>`,
      hint: 'Panggil str_starts_with("https://devgrow.id", "https://").'
    },
    quiz: {
      question: 'Berapakah nilai yang dikembalikan oleh `str_starts_with("AdminUser", "Admin")`?',
      options: [
        'Boolean `true`',
        'Boolean `false`',
        'Integer `0`',
        '`null`'
      ],
      correctIndex: 0,
      explanation: 'str_starts_with mengembalikan boolean true jika awalan string cocok.'
    }
  },

  // 655. STR_WORD_COUNT
  {
    id: 'php-ref-str-word-count',
    title: 'PHP str_word_count()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 655,
    overview: 'Kuasai fungsi str_word_count(): menghitung jumlah kata di dalam teks, mengekstrak array seluruh kata, atau memetakan posisi offset setiap kata (Reading Time Engine).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">WORD COUNTER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 655 / 666</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📖 Penghitung Kata & Metrik Teks (str_word_count)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>str_word_count(string $string, int $format = 0, ?string $characters = null): array|int</code>. Format 0 mengembalikan integer jumlah kata, format 1 mengembalikan array kata, format 2 mengembalikan array dengan key posisi byte karakter awal kata.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$artikel = "Belajar PHP 8 di DevGrow LMS sangat menyenangkan dan interaktif untuk karir backend developer.";

$totalKata = str_word_count($artikel);
$estimasiMenit = ceil($totalKata / 200);

echo "<h3>Hasil Penggunaan str_word_count():</h3>";
echo "<p>Total Jumlah Kata   : <strong style='color:#059669; font-size:18px;'>$totalKata kata</strong></p>";
echo "<p>Estimasi Waktu Baca : <em>$estimasiMenit menit baca (200 kata/menit)</em></p>";
?>`,
    codeExplanation: [
      'str_word_count($artikel) menghitung total kata untuk metrik analitik artikel.'
    ],
    challenge: {
      instruction: 'Hitung jumlah kata pada "PHP is awesome" dengan str_word_count("PHP is awesome").',
      starterCode: `<?php
echo "Total kata: " . str_word_count("PHP is awesome");
?>`,
      hint: 'Panggil str_word_count("PHP is awesome").'
    },
    quiz: {
      question: 'Format apakah pada `str_word_count($str, 1)` yang mengembalikan seluruh kata dalam bentuk array numerik?',
      options: [
        'Format `1`',
        'Format `0` (integer)',
        'Format `2` (asosiatif dengan offset byte)',
        'Format `3`'
      ],
      correctIndex: 0,
      explanation: 'Format 1 mengembalikan array daftar kata yang ditemukan.'
    }
  }
];

module.exports = phpPart59RefString5;
