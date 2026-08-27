// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (STRING PART 3: 620-631)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart57RefString3 = [
  // 620. LTRIM
  {
    id: 'php-ref-str-ltrim',
    title: 'PHP ltrim()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 620,
    overview: 'Kuasai fungsi ltrim(): memotong spasi putih, newline, tab, atau karakter tertentu dari sisi awal (kiri) string (Left Trimming).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">LEFT TRIMMING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 620 / 631</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">✂️ Pangkas Kiri String (ltrim)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ltrim(string $string, string $characters = " \\n\\r\\t\\v\\x00"): string</code> menghapus spasi atau karakter kustom dari sisi awal string.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$kode = "0000045231";
$angkaMurni = ltrim($kode, "0");

echo "<h3>Hasil Penggunaan ltrim():</h3>";
echo "<p>Kode Asli : $kode</p>";
echo "<p>Tanpa Nol : <strong style='color:#059669; font-size:18px;'>$angkaMurni</strong></p>";
?>`,
    codeExplanation: [
      'ltrim($kode, "0") membuang seluruh angka nol leading dari sebelah kiri string.'
    ],
    challenge: {
      instruction: 'Pangkas tanda strip dari kiri string "--test" dengan ltrim("--test", "-").',
      starterCode: `<?php
echo ltrim("--test", "-");
?>`,
      hint: 'Panggil ltrim("--test", "-").'
    },
    quiz: {
      question: 'Karakter default apa sajakah yang dihapus oleh `ltrim()` jika parameter kedua tidak ditentukan?',
      options: [
        'Spasi, tab (`\\t`), newline (`\\n`), carriage return (`\\r`), NUL-byte (`\\0`), dan vertical tab (`\\v`)',
        'Hanya spasi biasa',
        'Angka 0',
        'Tanda kutip'
      ],
      correctIndex: 0,
      explanation: 'ltrim secara default menghapus seluruh jenis karakter whitespace standar.'
    }
  },

  // 621. MD5
  {
    id: 'php-ref-str-md5',
    title: 'PHP md5()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 621,
    overview: 'Kuasai fungsi md5(): menghitung hash 128-bit Message Digest Algorithm 5 (32 karakter heksadesimal) untuk sidik jari string (Checksum File & Gravatar URL Generator).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">MD5 HASH</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 621 / 631</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔑 Hash MD5 (md5)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>md5(string $string, bool $binary = false): string</code> menghasilkan string hash 32 karakter hex. <strong>Catatan Keamanan:</strong> MD5 rentan collision sehingga DILARANG untuk hashing password (gunakan <code>password_hash</code>). MD5 tetap sangat berguna untuk URL avatar Gravatar dan ETag cache validator.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$email = "rahmat@devgrow.id";

// URL Gravatar Profile Picture
$gravatarUrl = "https://www.gravatar.com/avatar/" . md5(strtolower(trim($email)));

echo "<h3>Pembuatan URL Gravatar dengan md5():</h3>";
echo "<p>Email User   : $email</p>";
echo "<p>URL Gravatar : <strong style='color:#059669;'>$gravatarUrl</strong></p>";
?>`,
    codeExplanation: [
      'md5(strtolower(trim($email))) adalah standar spesifikasi Gravatar profile image URL.'
    ],
    challenge: {
      instruction: 'Hitung hash MD5 dari "admin" dengan md5("admin").',
      starterCode: `<?php
echo md5("admin");
?>`,
      hint: 'Panggil md5("admin").'
    },
    quiz: {
      question: 'Berapakah panjang karakter string heksadesimal yang selalu dihasilkan oleh `md5()`?',
      options: [
        'Tepat `32 karakter`',
        '16 karakter',
        '64 karakter',
        '40 karakter'
      ],
      correctIndex: 0,
      explanation: 'Hash MD5 (128-bit) direpresentasikan dalam 32 karakter string heksadesimal.'
    }
  },

  // 622. MD5_FILE
  {
    id: 'php-ref-str-md5-file',
    title: 'PHP md5_file()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 622,
    overview: 'Kuasai fungsi md5_file(): menghitung hash MD5 dari sebuah file fisik di disk (File Integrity Verification & Deduplication Check).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">FILE CHECKSUM</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 622 / 631</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📁 Checksum File Fisik (md5_file)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>md5_file(string $filename, bool $binary = false): string|false</code> membaca file dan menghitung hash-nya secara streaming tanpa memuat seluruh file ke memori RAM PHP.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Simulasi file
$tempFile = tempnam(sys_get_temp_dir(), 'lms_');
file_put_contents($tempFile, "Dokumen Kurikulum DevGrow LMS 2026");

$fileHash = md5_file($tempFile);
unlink($tempFile);

echo "<h3>Hasil Penggunaan md5_file():</h3>";
echo "<p>Hash Sidik Jari File: <strong style='color:#059669; font-size:18px;'>$fileHash</strong></p>";
?>`,
    codeExplanation: [
      'md5_file($path) digunakan untuk mendeteksi apakah file upload duplikat atau corrupt saat download.'
    ],
    challenge: {
      instruction: 'Pahami fungsi md5_file.',
      starterCode: `<?php
echo "md5_file('dokumen.pdf') menghitung hash checksum file di disk.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Apa keunggulan `md5_file($filename)` dibandingkan dengan `md5(file_get_contents($filename))`?',
      options: [
        '`md5_file()` membaca file secara streaming per blok buffer sehingga sangat hemat memori dan tidak menyebabkan Memory Exhausted pada file berukuran besar',
        '`md5_file` mengenkripsi file',
        'Keduanya memakan memori yang sama',
        '`md5_file` hanya untuk file teks'
      ],
      correctIndex: 0,
      explanation: 'md5_file melakukan streaming file langsung di level C tanpa memuat seluruh konten ke RAM PHP.'
    }
  },

  // 623. METAPHONE
  {
    id: 'php-ref-str-metaphone',
    title: 'PHP metaphone() / soundex()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 623,
    overview: 'Kuasai fungsi metaphone(): menghitung kunci fonetik pengucapan suara kata bahasa Inggris (Phonetic Algorithm yang lebih akurat daripada Soundex) untuk fitur pencarian berbasis bunyi pengucapan.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PHONETIC SEARCH</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 623 / 631</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔊 Pencocokan Berdasarkan Suara (metaphone)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>metaphone(string $string, int $max_phonemes = 0): string|false</code> mengubah kata menjadi kunci fonetik berdasarkan pelafalannya. Kata yang bunyinya sama (misal "Knight" dan "Night") akan menghasilkan kunci metaphone yang persis sama.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$kata1 = "Knight";
$kata2 = "Night";

$meta1 = metaphone($kata1);
$meta2 = metaphone($kata2);

echo "<h3>Hasil Pengujian Fonetik metaphone():</h3>";
echo "<p>Kata '$kata1' -> Kunci Fonetik: <strong style='color:#059669;'>$meta1</strong></p>";
echo "<p>Kata '$kata2'  -> Kunci Fonetik: <strong style='color:#059669;'>$meta2</strong></p>";
echo "<p>Status Kemiripan Bunyi: " . ($meta1 === $meta2 ? "<strong style='color:green;'>✓ Bunyi Pelafalan Sama Persis ($meta1)</strong>" : "Beda") . "</p>";
?>`,
    codeExplanation: [
      'metaphone("Knight") dan metaphone("Night") keduanya menghasilkan "NT".'
    ],
    challenge: {
      instruction: 'Bandingkan fonetik "Smith" dan "Smyth" dengan metaphone.',
      starterCode: `<?php
echo (metaphone("Smith") === metaphone("Smyth")) ? "Bunyi Sama" : "Beda";
?>`,
      hint: 'Panggil metaphone.'
    },
    quiz: {
      question: 'Apa hasil perbandingan `metaphone("Knight") === metaphone("Night")`?',
      options: [
        'Boolean `true` (keduanya menghasilkan kunci fonetik yang sama `"NT"`)',
        'Boolean `false`',
        '`null`',
        'Error'
      ],
      correctIndex: 0,
      explanation: 'Metaphone mengabaikan huruf K bisu di depan kata Knight sehingga menghasilkan kunci NT yang sama.'
    }
  },

  // 624. MONEY_FORMAT
  {
    id: 'php-ref-str-money-format',
    title: 'PHP money_format() & NumberFormatter::formatCurrency()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 624,
    overview: 'Kuasai fungsi money_format(): fungsi historis pemformatan mata uang dan standar modern resmi PHP 8.x menggunakan NumberFormatter (intl extension).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CURRENCY FORMATTER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 624 / 631</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">💰 Pemformatan Mata Uang Modern (NumberFormatter)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>money_format()</code> telah didepresiasi di PHP 7.4 dan dihapus di PHP 8.0+. Standar resmi modern adalah kelas <code>NumberFormatter</code> dari ekstensi <code>intl</code>: <code>$fmt = new NumberFormatter('id_ID', NumberFormatter::CURRENCY); echo $fmt->formatCurrency(250000, 'IDR');</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$nominal = 750000;

if (class_exists('NumberFormatter')) {
    $fmt = new NumberFormatter('id_ID', NumberFormatter::CURRENCY);
    $hasil = $fmt->formatCurrency($nominal, 'IDR');
} else {
    $hasil = "Rp " . number_format($nominal, 0, ',', '.');
}

echo "<h3>Standar Format Mata Uang Modern di PHP 8:</h3>";
echo "<p>Nominal : $nominal</p>";
echo "<p>Format  : <strong style='color:#059669; font-size:18px;'>$hasil</strong></p>";
?>`,
    codeExplanation: [
      'NumberFormatter("id_ID", NumberFormatter::CURRENCY) memformat angka menjadi format rupiah standar internasional.'
    ],
    challenge: {
      instruction: 'Format angka 1000000 menjadi format Rupiah.',
      starterCode: `<?php
echo "Rp " . number_format(1000000, 0, ',', '.');
?>`,
      hint: 'Gunakan number_format atau NumberFormatter.'
    },
    quiz: {
      question: 'Kelas manakah yang merupakan standar resmi pengganti `money_format()` di PHP 8.x?',
      options: [
        '`NumberFormatter` (dari ekstensi `intl`)',
        '`CurrencyFormatter`',
        '`Money`',
        '`IntlMoney`'
      ],
      correctIndex: 0,
      explanation: 'NumberFormatter adalah standar resmi internasionalisasi mata uang di PHP modern.'
    }
  },

  // 625. NL_LANGINFO
  {
    id: 'php-ref-str-nl-langinfo',
    title: 'PHP nl_langinfo()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 625,
    overview: 'Kuasai fungsi nl_langinfo(): meminta informasi spesifik konfigurasi locale sistem (seperti nama hari/bulan lokal, format tanggal D_T_FMT, dan encoding karakter CODESET).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">LOCALE INTROSPECTION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 625 / 631</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌐 Informasi Locale Sistem (nl_langinfo)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>nl_langinfo(int $item): string|false</code> membaca konstanta item seperti <code>CODESET</code>, <code>DAY_1</code>, <code>MON_1</code>, dll.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Informasi Locale Sistem via nl_langinfo():</h3>";
if (function_exists('nl_langinfo') && defined('CODESET')) {
    echo "<p>Codeset Sistem: <strong style='color:#059669;'>" . nl_langinfo(CODESET) . "</strong></p>";
} else {
    echo "<p>Konfigurasi Locale Sistem Aktif.</p>";
}
?>`,
    codeExplanation: [
      'nl_langinfo() berinteraksi dengan library locale C sistem operasi.'
    ],
    challenge: {
      instruction: 'Pahami fungsi nl_langinfo.',
      starterCode: `<?php
echo "nl_langinfo() membaca konstanta item locale.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Konstanta apakah yang digunakan pada `nl_langinfo()` untuk membaca set karakter encoding aktif sistem?',
      options: [
        '`CODESET`',
        '`CHARSET`',
        '`ENCODING`',
        '`LOCALE_CODE`'
      ],
      correctIndex: 0,
      explanation: 'CODESET membaca informasi encoding karakter (misal UTF-8).'
    }
  },

  // 626. NL2BR
  {
    id: 'php-ref-str-nl2br',
    title: 'PHP nl2br()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 626,
    overview: 'Kuasai fungsi nl2br(): menyisipkan tag HTML line break (<br /> atau <br>) sebelum setiap karakter baris baru (\\r\\n, \\n, \\r) di dalam teks.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">LINE BREAK CONVERTER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 626 / 631</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">↵ Konversi Newline ke HTML &lt;br&gt; (nl2br)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>nl2br(string $string, bool $use_xhtml = true): string</code> mengubah textarea input berbaris-baris menjadi paragraf HTML yang rapi dengan tag <code>&lt;br /&gt;</code> di setiap baris baru.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$catatanUser = "Catatan Belajar:\n1. Kuasai PHP 8 Dasar\n2. Kuasai MySQLi & PostgreSQL\n3. Bangun Aplikasi LMS";

// Sanitasi XSS dulu, lalu konversi newline ke <br>
$htmlAman = nl2br(htmlspecialchars($catatanUser, ENT_QUOTES, 'UTF-8'));

echo "<h3>Hasil Penggunaan nl2br():</h3>";
echo "<div style='background:#f8fafc; padding:12px; border-left:4px solid #059669; border-radius:6px;'>";
echo $htmlAman;
echo "</div>";
?>`,
    codeExplanation: [
      'nl2br() memastikan jeda baris pada textarea pengguna tampil sesuai aslinya di browser HTML.'
    ],
    challenge: {
      instruction: 'Ubah teks dua baris "Baris 1\\nBaris 2" ke HTML dengan nl2br.',
      starterCode: `<?php
echo nl2br("Baris 1\nBaris 2");
?>`,
      hint: 'Panggil nl2br.'
    },
    quiz: {
      question: 'Kapan urutan yang benar memanggil `nl2br()` dan `htmlspecialchars()` saat menampilkan komentar pengguna?',
      options: [
        '`nl2br(htmlspecialchars($text))` (sanitasi XSS terlebih dahulu, baru sisipkan `<br />`)',
        '`htmlspecialchars(nl2br($text))`',
        'Tidak ada bedanya',
        'Hanya salah satu'
      ],
      correctIndex: 0,
      explanation: 'Jika htmlspecialchars dipanggil setelah nl2br, maka tag <br> akan ikut ter-escape menjadi &lt;br /&gt;.'
    }
  },

  // 627. NUMBER_FORMAT
  {
    id: 'php-ref-str-number-format',
    title: 'PHP number_format()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 627,
    overview: 'Kuasai fungsi number_format(): memformat angka bilangan bulat atau desimal dengan pemisah ribuan dan desimal kustom (Format Rupiah Standar).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">NUMBER FORMATTER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 627 / 631</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">💵 Format Angka & Uang Rupiah (number_format)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>number_format(float $num, int $decimals = 0, ?string $decimal_separator = ".", ?string $thousands_separator = ","): string</code>. Format Indonesia: <code>number_format($harga, 0, ',', '.')</code> menggunakan koma untuk desimal dan titik untuk pemisah ribuan.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$hargaProduk = 15750000.75;

// Format Rupiah Indonesia: 0 desimal, desimal=',', ribuan='.'
$formatIndo = "Rp " . number_format($hargaProduk, 2, ',', '.');

// Format Internasional US: desimal='.', ribuan=','
$formatUs = "$" . number_format($hargaProduk, 2, '.', ',');

echo "<h3>Hasil Penggunaan number_format():</h3>";
echo "<p>Angka Mentah : <code>$hargaProduk</code></p>";
echo "<p>Format Indonesia (IDR) : <strong style='color:#059669; font-size:18px;'>$formatIndo</strong></p>";
echo "<p>Format Internasional (USD) : <strong style='color:#4f46e5;'>$formatUs</strong></p>";
?>`,
    codeExplanation: [
      'number_format($angka, 2, ",", ".") menghasilkan "15.750.000,75" sesuai konvensi perbankan Indonesia.'
    ],
    challenge: {
      instruction: 'Format angka 2500000 menjadi format Rupiah "Rp 2.500.000" dengan number_format(2500000, 0, ",", ".").',
      starterCode: `<?php
echo "Rp " . number_format(2500000, 0, ',', '.');
?>`,
      hint: 'Panggil number_format(2500000, 0, ",", ".").'
    },
    quiz: {
      question: 'Parameter apakah yang harus disetel pada `number_format($num, 0, ",", ".")` untuk menghasilkan pemisah ribuan bertitik gaya Indonesia?',
      options: [
        'Parameter ke-4 (`$thousands_separator = "."`)',
        'Parameter ke-3 (`$decimal_separator`)',
        'Parameter ke-2 (`$decimals`)',
        'Parameter ke-1'
      ],
      correctIndex: 0,
      explanation: 'Parameter keempat menentukan pemisah ribuan (titik untuk format ID).'
    }
  },

  // 628. ORD
  {
    id: 'php-ref-str-ord',
    title: 'PHP ord()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 628,
    overview: 'Kuasai fungsi ord(): mengembalikan nilai bilangan bulat ASCII integer (0-255) dari karakter pertama sebuah string (kebalikan dari chr()).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ASCII CODE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 628 / 631</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔢 Karakter ke Nilai ASCII (ord)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ord(string $character): int</code> mengembalikan angka kode byte ASCII karakter (misal: <code>"A"</code> -> <code>65</code>, <code>"a"</code> -> <code>97</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Tabel Nilai ASCII ord():</h3>";
echo "<ul>";
echo "<li>ord('A') : <strong style='color:#059669;'>" . ord('A') . "</strong></li>";
echo "<li>ord('B') : <strong>" . ord('B') . "</strong></li>";
echo "<li>ord('a') : <strong style='color:#4f46e5;'>" . ord('a') . "</strong></li>";
echo "<li>ord('$') : <strong>" . ord('$') . "</strong></li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'ord("A") menghasilkan integer 65.'
    ],
    challenge: {
      instruction: 'Dapatkan kode ASCII dari huruf "Z" dengan ord("Z").',
      starterCode: `<?php
echo "ASCII Z: " . ord("Z");
?>`,
      hint: 'Panggil ord("Z").'
    },
    quiz: {
      question: 'Berapakah angka integer yang dikembalikan oleh `ord("A")`?',
      options: [
        'Integer `65`',
        'Integer `97`',
        'Integer `0`',
        'Integer `1`'
      ],
      correctIndex: 0,
      explanation: 'Nilai ASCII untuk karakter huruf kapital A adalah 65.'
    }
  },

  // 629. STR_PAD & STRING SEARCH (RECAP)
  {
    id: 'php-ref-str-pad-search',
    title: 'PHP str_pad(), strpos(), str_replace()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 629,
    overview: 'Kuasai fungsi padding string str_pad() (Invoice Auto-Number Generator) serta manipulasi string cepat strpos() dan str_replace().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">STRING PADDING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 629 / 631</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔢 Padding Nomor Faktur (str_pad)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>str_pad(string $string, int $length, string $pad_string = " ", int $pad_type = STR_PAD_RIGHT): string</code> mengisi string hingga mencapai panjang <code>$length</code> (seperti membuat nomor invoice <code>INV-00042</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$orderId = 42;

// Format Nomor Invoice 6 Digit: INV-000042
$noInvoice = "INV-" . str_pad((string)$orderId, 6, "0", STR_PAD_LEFT);

echo "<h3>Hasil Penggunaan str_pad():</h3>";
echo "<p>ID Order    : $orderId</p>";
echo "<p>Nomor Invoice: <strong style='color:#059669; font-size:18px;'>$noInvoice</strong></p>";
?>`,
    codeExplanation: [
      'str_pad($orderId, 6, "0", STR_PAD_LEFT) menyisipkan angka 0 di sebelah kiri hingga total panjang 6 karakter.'
    ],
    challenge: {
      instruction: 'Buat nomor seri 5 digit dengan str_pad("7", 5, "0", STR_PAD_LEFT).',
      starterCode: `<?php
echo str_pad("7", 5, "0", STR_PAD_LEFT);
?>`,
      hint: 'Panggil str_pad.'
    },
    quiz: {
      question: 'Flag konstanta apakah pada `str_pad()` yang digunakan untuk menambahkan karakter padding di sebelah KIRI string?',
      options: [
        '`STR_PAD_LEFT`',
        '`STR_PAD_RIGHT`',
        '`STR_PAD_BOTH`',
        '`STR_PAD_START`'
      ],
      correctIndex: 0,
      explanation: 'STR_PAD_LEFT menyisipkan karakter padding di sebelah kiri string.'
    }
  },

  // 630. STRLEN & SUBSTR (RECAP)
  {
    id: 'php-ref-str-len-substr',
    title: 'PHP strlen(), substr(), strtolower(), strtoupper()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 630,
    overview: 'Kuasai fungsi fundamental manipulasi string: strlen() untuk mengukur panjang, substr() untuk memotong substring, serta strtolower() & strtoupper() untuk transformasi huruf.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">STRING ESSENTIALS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 630 / 631</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">✂️ Ekstraksi & Transformasi String (substr / strlen)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>substr(string $string, int $offset, ?int $length = null): string</code> memotong bagian string mulai dari indeks offset. <code>strlen()</code> mengembalikan panjang byte string.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$kalimat = "Belajar PHP 8 Fullstack di DevGrow LMS";

$potong = substr($kalimat, 0, 15);
$panjang = strlen($kalimat);
$hurufBesar = strtoupper($kalimat);

echo "<h3>Hasil Penggunaan strlen & substr:</h3>";
echo "<p>Panjang Total : $panjang karakter</p>";
echo "<p>Potongan Awal : <strong style='color:#059669;'>$potong...</strong></p>";
echo "<p>Uppercase     : $hurufBesar</p>";
?>`,
    codeExplanation: [
      'substr($str, 0, 15) memotong 15 karakter pertama untuk preview artikel / excerpt ringkasan.'
    ],
    challenge: {
      instruction: 'Potong 3 karakter pertama dari "DevGrow" dengan substr("DevGrow", 0, 3).',
      starterCode: `<?php
echo substr("DevGrow", 0, 3);
?>`,
      hint: 'Panggil substr("DevGrow", 0, 3).'
    },
    quiz: {
      question: 'Berapakah string yang dihasilkan oleh `substr("DevGrow", -4)` (menggunakan offset negatif)?',
      options: [
        'String `"Grow"` (4 karakter dari ujung akhir)',
        'String `"DevG"`',
        'String `"GrowLMS"`',
        'Error'
      ],
      correctIndex: 0,
      explanation: 'Offset negatif pada substr mulai menghitung dari karakter paling belakang string.'
    }
  },

  // 631. STRING & STREAM COMPLETE ARCHITECTURE
  {
    id: 'php-ref-str-complete',
    title: 'PHP String & Stream Master Architecture',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 631,
    overview: 'Kuasai arsitektur menyeluruh pemrosesan teks, manipulasi string berpresisi tinggi, dan sanitasi stream di ekosistem PHP 8 modern.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">PHP STRING COMPLETE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 631 / 631</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏆 Master Pemrosesan String PHP Backend</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Kombinasi fungsi string PHP (<code>htmlspecialchars</code> untuk proteksi XSS, <code>number_format</code> untuk format uang, <code>implode/explode</code> untuk tokenisasi, <code>bin2hex(random_bytes)</code> untuk security token, dan <code>mb_*</code> untuk multibyte UTF-8) adalah pilar fundamental software engineering backend enterprise.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Ringkasan Pilar String PHP 8 Enterprise:</h3>";
echo "<ul>";
echo "<li>✓ <strong>Keamanan:</strong> htmlspecialchars(ENT_QUOTES) & bin2hex(random_bytes(32))</li>";
echo "<li>✓ <strong>Format Keuangan:</strong> number_format(..., 0, ',', '.')</li>";
echo "<li>✓ <strong>Parsing:</strong> explode(), implode(), str_split(), chunk_split()</li>";
echo "<li>✓ <strong>Pencarian Cerdas:</strong> levenshtein(), metaphone(), strpos()</li>";
echo "</ul>";
echo "<p style='color:green;'>🎉 Selamat! Seluruh referensi PHP String & Stream berhasil Anda kuasai dengan sempurna!</p>";
?>`,
    codeExplanation: [
      'Pilar-pilar pemrosesan string PHP membentuk dasar aplikasi web yang tangguh dan aman.'
    ],
    challenge: {
      instruction: 'Pahami arsitektur string PHP enterprise.',
      starterCode: `<?php
echo "PHP String library lengkap siap digunakan!";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Fungsi manakah yang WAJIB selalu dipanggil saat menampilkan teks input pengguna ke dalam halaman web HTML untuk mencegah serangan XSS?',
      options: [
        '`htmlspecialchars($input, ENT_QUOTES, \'UTF-8\')`',
        '`strip_tags()` saja',
        '`addslashes()`',
        '`md5()`'
      ],
      correctIndex: 0,
      explanation: 'htmlspecialchars dengan flag ENT_QUOTES adalah benteng perlindungan standar industri dari serangan XSS.'
    }
  }
];

module.exports = phpPart57RefString3;
