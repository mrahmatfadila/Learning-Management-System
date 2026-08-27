// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (STRING PART 8: 677-686)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart62RefString8 = [
  // 677. STRRIPOS
  {
    id: 'php-ref-str-strripos',
    title: 'PHP strripos()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 677,
    overview: 'Kuasai fungsi strripos(): mencari posisi indeks integer kemunculan TERAKHIR dari substring secara case-insensitive (Reverse Case-Insensitive Search).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">REVERSE SEARCH</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 677 / 695</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Posisi Terakhir Case-Insensitive (strripos)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>strripos(string $haystack, string $needle, int $offset = 0): int|false</code> mencari kemunculan paling belakang dari <code>$needle</code> tanpa membedakan huruf besar/kecil.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$teks = "Belajar PHP di pagi hari dan belajar php di malam hari.";

// Cari posisi kata "php" terakhir (case-insensitive)
$posisiTerakhir = strripos($teks, "php");

echo "<h3>Hasil Penggunaan strripos():</h3>";
echo "<p>Teks : $teks</p>";
echo "<p>Posisi 'php' terakhir: indeks ke-<strong style='color:#059669; font-size:18px;'>$posisiTerakhir</strong></p>";
?>`,
    codeExplanation: [
      'strripos() menemukan kata "php" kedua yang terletak menjelang akhir kalimat.'
    ],
    challenge: {
      instruction: 'Cari indeks terakhir huruf "a" pada "banana" dengan strripos("banana", "A").',
      starterCode: `<?php
echo "Indeks terakhir: " . strripos("banana", "A");
?>`,
      hint: 'Panggil strripos("banana", "A").'
    },
    quiz: {
      question: 'Berapakah indeks yang dikembalikan oleh `strripos("banana", "a")`?',
      options: [
        'Integer `5` (huruf \'a\' paling belakang)',
        'Integer `1`',
        'Integer `3`',
        'Integer `0`'
      ],
      correctIndex: 0,
      explanation: 'Indeks huruf "a" terakhir pada kata "banana" adalah 5.'
    }
  },

  // 678. STRRPOS
  {
    id: 'php-ref-str-strrpos-detail',
    title: 'PHP strrpos()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 678,
    overview: 'Kuasai fungsi strrpos(): mencari posisi indeks integer kemunculan TERAKHIR dari substring secara case-sensitive (Reverse Case-Sensitive Search).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">REVERSE CASE-SENSITIVE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 678 / 695</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Posisi Terakhir Case-Sensitive (strrpos)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>strrpos(string $haystack, string $needle, int $offset = 0): int|false</code> mencari kemunculan paling belakang dengan membedakan huruf besar dan kecil.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$path = "/var/www/html/devgrow/index.php";

$posisiSlash = strrpos($path, "/");
$namaFile = substr($path, $posisiSlash + 1);

echo "<h3>Hasil Penggunaan strrpos():</h3>";
echo "<p>Path Lengkap : $path</p>";
echo "<p>Slash Terakhir: Indeks $posisiSlash</p>";
echo "<p>Nama File     : <strong style='color:#059669; font-size:18px;'>$namaFile</strong></p>";
?>`,
    codeExplanation: [
      'strrpos($path, "/") menemukan pembatas folder terakhir untuk mengekstrak nama file.'
    ],
    challenge: {
      instruction: 'Cari posisi titik terakhir pada "data.final.csv" dengan strrpos("data.final.csv", ".").',
      starterCode: `<?php
echo "Posisi titik terakhir: " . strrpos("data.final.csv", ".");
?>`,
      hint: 'Panggil strrpos("data.final.csv", ".").'
    },
    quiz: {
      question: 'Apa perbedaan antara `strpos()` dan `strrpos()`?',
      options: [
        '`strpos()` mencari kemunculan PERTAMA dari depan, sedangkan `strrpos()` mencari kemunculan TERAKHIR dari belakang',
        '`strrpos` hanya untuk 1 karakter',
        '`strpos` mengembalikan string',
        'Keduanya identik'
      ],
      correctIndex: 0,
      explanation: 'Huruf "r" pada strrpos menandakan reverse (pencarian dari belakang).'
    }
  },

  // 679. STRSPN
  {
    id: 'php-ref-str-strspn',
    title: 'PHP strspn()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 679,
    overview: 'Kuasai fungsi strspn(): menghitung panjang segmen awal string yang HANYA terdiri dari karakter-karakter yang diizinkan dalam daftar masker.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CHARACTER WHITELIST</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 679 / 695</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📏 Panjang Rentang Karakter Valid (strspn)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>strspn(string $string, string $characters, int $offset = 0, ?int $length = null): int</code> menghitung berapa banyak karakter awal yang memenuhi whitelist. Sangat cepat untuk validasi format digit biner/desimal/hex.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$pin = "489234";

// Cek apakah seluruh string hanya terdiri dari angka (0-9)
$isAllDigit = (strspn($pin, "0123456789") === strlen($pin));

echo "<h3>Validasi PIN via strspn():</h3>";
echo "<p>PIN: $pin -> " . ($isAllDigit ? "<strong style='color:green;'>✓ PIN Angka Valid</strong>" : "Invalid") . "</p>";
?>`,
    codeExplanation: [
      'strspn($pin, "0123456789") === strlen($pin) memverifikasi bahwa 100% karakter adalah digit numerik.'
    ],
    challenge: {
      instruction: 'Hitung panjang karakter biner pada "10102" dengan strspn("10102", "01").',
      starterCode: `<?php
echo "Panjang biner murni: " . strspn("10102", "01"); // 4
?>`,
      hint: 'Panggil strspn("10102", "01").'
    },
    quiz: {
      question: 'Berapakah nilai yang dikembalikan oleh `strspn("123abc", "0123456789")`?',
      options: [
        'Integer `3` (karena "123" adalah 3 digit angka pertama sebelum bertemu huruf "a")',
        'Integer `6`',
        'Integer `0`',
        'Boolean `true`'
      ],
      correctIndex: 0,
      explanation: 'strspn berhenti begitu menemukan karakter pertama yang tidak ada dalam masker ("a").'
    }
  },

  // 680. STRSTR
  {
    id: 'php-ref-str-strstr-detail',
    title: 'PHP strstr()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 680,
    overview: 'Kuasai fungsi strstr(): mencari kemunculan pertama string dan mengembalikan sisa string dari posisi tersebut (dengan opsi $before_needle).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SUBSTRING FINDER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 680 / 695</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Pencarian Substring Case-Sensitive (strstr)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>strstr(string $haystack, string $needle, bool $before_needle = false): string|false</code> mengembalikan bagian string dari kemunculan pertama jarum pencari.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$teks = "Invoice ID: INV-98242 (Lunas)";

$noInvoice = strstr($teks, "INV-");

echo "<h3>Hasil Penggunaan strstr():</h3>";
echo "<p>Hasil Ekstraksi: <strong style='color:#059669;'>$noInvoice</strong></p>";
?>`,
    codeExplanation: [
      'strstr($teks, "INV-") mengembalikan "INV-98242 (Lunas)".'
    ],
    challenge: {
      instruction: 'Ambil substring mulai "@" dari "budi@mail.com" dengan strstr.',
      starterCode: `<?php
echo strstr("budi@mail.com", "@");
?>`,
      hint: 'Panggil strstr("budi@mail.com", "@").'
    },
    quiz: {
      question: 'Apa yang dikembalikan oleh `strstr("user@domain.com", "@", true)` jika `$before_needle` bernilai `true`?',
      options: [
        'String `"user"`',
        'String `"@domain.com"`',
        'String `"domain.com"`',
        'Boolean `true`'
      ],
      correctIndex: 0,
      explanation: '$before_needle = true memotong teks di sebelah kiri jarum pencari.'
    }
  },

  // 681. STRTOK
  {
    id: 'php-ref-str-strtok',
    title: 'PHP strtok()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 681,
    overview: 'Kuasai fungsi strtok(): memecah string menjadi token-token kecil secara sekuensial (Tokenizer Memory-Efficient) berdasarkan beberapa karakter pemisah.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">STRING TOKENIZER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 681 / 695</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🪙 Tokenisasi String Sekuensial (strtok)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>strtok(string $string, string $token): string|false</code> menginisialisasi tokenisasi pada panggilan pertama, dan panggilan berikutnya <code>strtok(string $token)</code> mengambil token selanjutnya tanpa perlu mengoperkan string induk kembali.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$kalimat = "PHP, JavaScript / TypeScript; PostgreSQL";

// Inisialisasi token dengan multi-delimiter: koma, spasi, slash, titik koma
$token = strtok($kalimat, " ,/;");

echo "<h3>Hasil Tokenisasi via strtok():</h3>";
echo "<ul>";
while ($token !== false) {
    echo "<li>Token: <strong style='color:#059669;'>$token</strong></li>";
    $token = strtok(" ,/;"); // Ambil token berikutnya
}
echo "</ul>";
?>`,
    codeExplanation: [
      'strtok() mengingat posisi parsing internal sehingga sangat hemat memori pada teks panjang.'
    ],
    challenge: {
      instruction: 'Pahami fungsi strtok.',
      starterCode: `<?php
$t = strtok("A-B-C", "-");
while ($t !== false) { echo "$t "; $t = strtok("-"); }
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Bagaimana cara mengambil token kedua dan seterusnya menggunakan `strtok()`?',
      options: [
        'Hanya mengoperkan string delimiter saja: `strtok($delimiter)` tanpa argumen string pertama',
        'Mengoperkan string asli kembali',
        '`strtok_next()`',
        '`next($token)`'
      ],
      correctIndex: 0,
      explanation: 'strtok mempertahankan pointer internal pada pemanggilan kedua dengan hanya 1 argumen delimiter.'
    }
  },

  // 682. STRTOLOWER & STRTOUPPER
  {
    id: 'php-ref-str-strtolower-strtoupper',
    title: 'PHP strtolower() & strtoupper()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 682,
    overview: 'Kuasai fungsi strtolower() & strtoupper(): mengubah seluruh karakter string menjadi huruf kecil (lowercase) atau huruf besar (uppercase) untuk normalisasi email dan query.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">CASE CONVERTER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 682 / 695</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔤 Transformasi Huruf Besar & Kecil (strtolower / strtoupper)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>strtolower(string $string): string</code> mengubah ke huruf kecil. <code>strtoupper(string $string): string</code> mengubah ke huruf kapital. (Untuk UTF-8 multibyte, gunakan <code>mb_strtolower</code> / <code>mb_strtoupper</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$inputEmail = "  User.Admin@DevGrow.ID  ";

// Normalisasi email untuk database: trim spasi dan ubah ke huruf kecil
$emailNormal = strtolower(trim($inputEmail));

echo "<h3>Hasil Penggunaan strtolower():</h3>";
echo "<p>Input Mentah : <code>'$inputEmail'</code></p>";
echo "<p>Normalisasi  : <strong style='color:#059669;'>$emailNormal</strong></p>";
?>`,
    codeExplanation: [
      'strtolower(trim($email)) adalah standar normalisasi sebelum menyimpan email ke database.'
    ],
    challenge: {
      instruction: 'Ubah "php" menjadi huruf besar dengan strtoupper("php").',
      starterCode: `<?php
echo strtoupper("php");
?>`,
      hint: 'Panggil strtoupper("php").'
    },
    quiz: {
      question: 'Fungsi apakah yang merupakan pasangan pengubah string menjadi huruf kapital semua?',
      options: [
        '`strtoupper()`',
        '`str_to_upper()`',
        '`ucwords()`',
        '`ucfirst()`'
      ],
      correctIndex: 0,
      explanation: 'strtoupper mengubah semua karakter alfabet menjadi huruf besar.'
    }
  },

  // 683. STRTR
  {
    id: 'php-ref-str-strtr',
    title: 'PHP strtr()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 683,
    overview: 'Kuasai fungsi strtr(): menerjemahkan/mengganti karakter atau substring berpasangan berdasarkan tabel array translasi asosiatif secara simultan (Multi-character Translation).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">STRING TRANSLATOR</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 683 / 695</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔄 Translasi Karakter Simultan (strtr)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>strtr(string $string, array $replace_pairs): string</code> mengganti banyak pola sekaligus tanpa risiko benturan penggantian ganda bertahap (sangat ideal untuk generator slug atau template translasi).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$teks = "Halo :nama:, selamat datang di :peran:!";

// Translasi multi-pola secara simultan
$kamus = [
    ":nama:" => "Rahmat Fadila",
    ":peran:" => "DevGrow LMS"
];

$hasil = strtr($teks, $kamus);

echo "<h3>Hasil Penggunaan strtr():</h3>";
echo "<p><strong style='color:#059669;'>$hasil</strong></p>";
?>`,
    codeExplanation: [
      'strtr($teks, $kamus) mengganti seluruh placeholder sekaligus secara paralel.'
    ],
    challenge: {
      instruction: 'Ganti "a" ke "4" dan "e" ke "3" pada "game" dengan strtr("game", ["a"=>"4", "e"=>"3"]).',
      starterCode: `<?php
echo strtr("game", ["a" => "4", "e" => "3"]);
?>`,
      hint: 'Panggil strtr dengan array mapping.'
    },
    quiz: {
      question: 'Apa keunggulan `strtr($str, $mapArray)` dibandingkan serangkaian `str_replace()` berulang?',
      options: [
        '`strtr()` memproses seluruh penggantian secara paralel/simultan dalam sekali baca sehingga string yang baru diganti tidak akan tertimpa lagi oleh aturan pengganti berikutnya',
        '`strtr` hanya untuk angka',
        '`str_replace` tidak bisa array',
        'Keduanya identik'
      ],
      correctIndex: 0,
      explanation: 'strtr tidak mengganti kembali substring yang telah dihasilkan dari proses translasi sebelumnya.'
    }
  },

  // 684. SUBSTR
  {
    id: 'php-ref-str-substr-advanced',
    title: 'PHP substr() & mb_substr()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 684,
    overview: 'Kuasai fungsi substr(): memotong dan mengekstrak bagian string berdasarkan offset positif/negatif dan panjang panjang tertentu (Excerpt Generator).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">SUBSTRING SLICER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 684 / 695</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">✂️ Pemotongan Substring Presisi (substr)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>substr(string $string, int $offset, ?int $length = null): string</code> memotong teks. Offset negatif menghitung dari belakang (misal <code>-4</code> = 4 huruf terakhir).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$judul = "Tutorial Lengkap Mastering PHP 8 Backend";

$preview = substr($judul, 0, 20) . "...";
$empatTerakhir = substr($judul, -7);

echo "<h3>Hasil Penggunaan substr():</h3>";
echo "<p>Potongan Awal (20 char) : <strong style='color:#059669;'>$preview</strong></p>";
echo "<p>7 Huruf Terakhir        : <strong style='color:#4f46e5;'>$empatTerakhir</strong></p>";
?>`,
    codeExplanation: [
      'substr($judul, 0, 20) mengambil 20 huruf pertama.',
      'substr($judul, -7) mengambil kata "Backend".'
    ],
    challenge: {
      instruction: 'Ambil 3 karakter terakhir dari "DevGrow" dengan substr("DevGrow", -3).',
      starterCode: `<?php
echo substr("DevGrow", -3);
?>`,
      hint: 'Panggil substr("DevGrow", -3).'
    },
    quiz: {
      question: 'Berapakah string yang dikembalikan oleh `substr("abcdef", 2, 3)`?',
      options: [
        'String `"cde"` (mulai indeks 2 sebanyak 3 karakter)',
        'String `"bcd"`',
        'String `"def"`',
        'String `"cd"`'
      ],
      correctIndex: 0,
      explanation: 'Indeks 2 adalah karakter "c", diambil sebanyak 3 karakter ("cde").'
    }
  },

  // 685. SUBSTR_COMPARE
  {
    id: 'php-ref-str-substr-compare',
    title: 'PHP substr_compare()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 685,
    overview: 'Kuasai fungsi substr_compare(): membandingkan potongan substring dari posisi offset tertentu secara biner tanpa perlu membuat alokasi string baru terlebih dahulu (Hemat RAM).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SUBSTRING COMPARE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 685 / 695</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚖️ Perbandingan Substring Efisien (substr_compare)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>substr_compare(string $main_str, string $str, int $offset, ?int $length = null, bool $case_insensitivity = false): int</code> membandingkan bagian string langsung di memori tanpa overhead membuat potongan string baru via <code>substr()</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$teksUtama = "PREFIX_USER_4092";

// Bandingkan apakah mulai indeks 0 sepanjang 7 karakter sama dengan "PREFIX_"
$isPrefix = (substr_compare($teksUtama, "PREFIX_", 0, 7) === 0);

echo "<h3>Hasil Pengujian substr_compare():</h3>";
echo "<p>Prefix Sesuai: <strong style='color:#059669;'>" . ($isPrefix ? 'Ya (True)' : 'Tidak') . "</strong></p>";
?>`,
    codeExplanation: [
      'substr_compare($teksUtama, "PREFIX_", 0, 7) mengembalikan 0 (cocok).'
    ],
    challenge: {
      instruction: 'Bandingkan substring mulai indeks 0 dengan substr_compare("abc", "a", 0, 1).',
      starterCode: `<?php
echo (substr_compare("abc", "a", 0, 1) === 0) ? "Cocok" : "Beda";
?>`,
      hint: 'Panggil substr_compare.'
    },
    quiz: {
      question: 'Apa keunggulan utama `substr_compare()` dibandingkan `strcmp(substr($str, 0, 5), $target)`?',
      options: [
        '`substr_compare()` tidak mengalokasikan memori string baru untuk potongan substring, sehingga jauh lebih cepat dan hemat RAM pada pemrosesan teks berukuran besar',
        '`substr_compare` hanya untuk float',
        'Keduanya identik',
        '`substr_compare` menghapus spasi'
      ],
      correctIndex: 0,
      explanation: 'substr_compare membandingkan pointer byte memori secara langsung.'
    }
  },

  // 686. SUBSTR_COUNT (PREVIEW RECAP)
  {
    id: 'php-ref-str-substr-count-preview',
    title: 'PHP substr_count()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 686,
    overview: 'Kuasai fungsi substr_count(): menghitung berapa kali sebuah substring muncul di dalam string utama (Keyword Density Counter).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SUBSTRING FREQUENCY</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 686 / 695</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔢 Menghitung Frekuensi Substring (substr_count)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>substr_count(string $haystack, string $needle, int $offset = 0, ?int $length = null): int</code> menghitung frekuensi kemunculan kata <code>$needle</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$paragraf = "PHP adalah bahasa backend populer. Belajar PHP di DevGrow membuat PHP terasa mudah.";

$jumlahKata = substr_count($paragraf, "PHP");

echo "<h3>Hasil Penggunaan substr_count():</h3>";
echo "<p>Kata 'PHP' muncul sebanyak: <strong style='color:#059669; font-size:18px;'>$jumlahKata kali</strong></p>";
?>`,
    codeExplanation: [
      'substr_count($paragraf, "PHP") menghitung bahwa kata "PHP" muncul 3 kali.'
    ],
    challenge: {
      instruction: 'Hitung berapa kali huruf "a" muncul pada "banana" dengan substr_count("banana", "a").',
      starterCode: `<?php
echo "Jumlah 'a': " . substr_count("banana", "a");
?>`,
      hint: 'Panggil substr_count("banana", "a").'
    },
    quiz: {
      question: 'Berapakah angka yang dikembalikan oleh `substr_count("test@test.com", "test")`?',
      options: [
        'Integer `2`',
        'Integer `1`',
        'Integer `0`',
        'Boolean `true`'
      ],
      correctIndex: 0,
      explanation: 'Kata "test" muncul sebanyak 2 kali dalam string.'
    }
  }
];

module.exports = phpPart62RefString8;
