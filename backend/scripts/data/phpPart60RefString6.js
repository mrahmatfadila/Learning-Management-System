// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (STRING PART 6: 656-666)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart60RefString6 = [
  // 656. STRCASECMP
  {
    id: 'php-ref-str-strcasecmp',
    title: 'PHP strcasecmp()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 656,
    overview: 'Kuasai fungsi strcasecmp(): membandingkan dua string secara biner tanpa membedakan huruf besar dan huruf kecil (Case-Insensitive String Comparison).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">STRING COMPARISON</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 656 / 666</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚖️ Perbandingan Case-Insensitive (strcasecmp)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>strcasecmp(string $string1, string $string2): int</code> mengembalikan angka <code>0</code> jika kedua string sama persis (tanpa peduli huruf kapital/kecil), angka <code>&lt; 0</code> jika <code>$string1</code> lebih kecil, dan <code>&gt; 0</code> jika lebih besar.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$inputEmail = "User@DevGrow.ID";
$dbEmail = "user@devgrow.id";

if (strcasecmp($inputEmail, $dbEmail) === 0) {
    echo "<h3>Hasil Pengujian strcasecmp():</h3>";
    echo "<p style='color:#059669; font-size:18px;'>✓ Email Cocok (strcasecmp menghasilkan nilai 0)</p>";
}
?>`,
    codeExplanation: [
      'strcasecmp("User@DevGrow.ID", "user@devgrow.id") mengembalikan integer 0 karena isinya identik.'
    ],
    challenge: {
      instruction: 'Bandingkan "PHP" dan "php" dengan strcasecmp("PHP", "php").',
      starterCode: `<?php
echo (strcasecmp("PHP", "php") === 0) ? "Sama" : "Beda";
?>`,
      hint: 'Panggil strcasecmp("PHP", "php").'
    },
    quiz: {
      question: 'Berapakah angka yang dikembalikan oleh `strcasecmp($str1, $str2)` jika kedua string bernilai sama tanpa membedakan besar kecil huruf?',
      options: [
        'Integer `0`',
        'Boolean `true`',
        'Integer `1`',
        '`null`'
      ],
      correctIndex: 0,
      explanation: 'Nilai return 0 menandakan kesetaraan posisi leksikografis kedua string.'
    }
  },

  // 657. STRCHR
  {
    id: 'php-ref-str-strchr',
    title: 'PHP strchr() / strstr()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 657,
    overview: 'Kuasai fungsi strchr(): alias resmi dari strstr() untuk mencari kemunculan pertama karakter/string dan mengembalikan sisa potongan string tersebut.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">STRING SEARCH</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 657 / 666</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Pencarian Substring (strchr)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>strchr(string $haystack, string $needle, bool $before_needle = false): string|false</code> adalah alias identik dari <code>strstr()</code>. Jika <code>$before_needle = true</code>, mengembalikan potongan teks sebelum jarum pencarian.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$email = "rahmat.fadila@devgrow.id";

// Ambil domain setelah karakter '@'
$domain = strchr($email, '@');

// Ambil username sebelum karakter '@' ($before_needle = true)
$username = strchr($email, '@', true);

echo "<h3>Hasil Penggunaan strchr() / strstr():</h3>";
echo "<p>Username : <strong style='color:#059669;'>$username</strong></p>";
echo "<p>Domain   : <strong>$domain</strong></p>";
?>`,
    codeExplanation: [
      'strchr($email, "@", true) mengambil bagian teks di depan karakter @.'
    ],
    challenge: {
      instruction: 'Ambil ekstensi dari "file.tar.gz" menggunakan strchr("file.tar.gz", ".").',
      starterCode: `<?php
echo strchr("file.tar.gz", ".");
?>`,
      hint: 'Panggil strchr("file.tar.gz", ".").'
    },
    quiz: {
      question: 'Fungsi utama apakah yang di-alias oleh `strchr()` di PHP?',
      options: [
        '`strstr()`',
        '`strpos()`',
        '`strrpos()`',
        '`substr()`'
      ],
      correctIndex: 0,
      explanation: 'strchr() adalah alias resmi dari fungsi strstr().'
    }
  },

  // 658. STRCMP
  {
    id: 'php-ref-str-strcmp',
    title: 'PHP strcmp()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 658,
    overview: 'Kuasai fungsi strcmp(): membandingkan dua string secara biner peka huruf besar dan kecil (Case-Sensitive Binary String Comparison).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CASE-SENSITIVE COMPARE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 658 / 666</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚖️ Perbandingan Case-Sensitive (strcmp)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>strcmp(string $string1, string $string2): int</code> mengembalikan angka <code>0</code> jika kedua string sama persis hingga ke besar-kecilnya huruf, <code>&lt; 0</code> jika <code>$string1</code> lebih kecil, dan <code>&gt; 0</code> jika lebih besar.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$str1 = "DevGrow";
$str2 = "devgrow";

$hasilCmp = strcmp($str1, $str2);

echo "<h3>Hasil Pengujian strcmp():</h3>";
echo "<p>strcmp('$str1', '$str2') menghasilkan: <strong style='color:#dc2626;'>$hasilCmp</strong> (karena 'D' [ASCII 68] < 'd' [ASCII 100])</p>";
?>`,
    codeExplanation: [
      'strcmp membedakan huruf besar "D" dan kecil "d".'
    ],
    challenge: {
      instruction: 'Bandingkan "abc" dan "abc" dengan strcmp("abc", "abc").',
      starterCode: `<?php
echo (strcmp("abc", "abc") === 0) ? "Identik" : "Beda";
?>`,
      hint: 'Panggil strcmp("abc", "abc").'
    },
    quiz: {
      question: 'Berapakah nilai yang dikembalikan oleh `strcmp("A", "B")`?',
      options: [
        'Bilangan negatif (karena ASCII "A" [65] lebih kecil dari "B" [66])',
        'Bilangan positif',
        'Integer `0`',
        'Boolean `false`'
      ],
      correctIndex: 0,
      explanation: 'strcmp mengembalikan bilangan bulat negatif jika string pertama bernilai ASCII lebih kecil dari string kedua.'
    }
  },

  // 659. STRCOLL
  {
    id: 'php-ref-str-strcoll',
    title: 'PHP strcoll()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 659,
    overview: 'Kuasai fungsi strcoll(): membandingkan dua string berdasarkan aturan kolasi urutan abjad setlocale() regional lokal sistem.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">LOCALE COLLATION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 659 / 666</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌐 Perbandingan Kolasi Bahasa (strcoll)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>strcoll(string $string1, string $string2): int</code> membandingkan teks berdasarkan aturan abjad bahasa lokal yang diaktifkan oleh <code>setlocale(LC_COLLATE, ...)</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$str1 = "a";
$str2 = "B";

$hasil = strcoll($str1, $str2);

echo "<h3>Hasil Penggunaan strcoll():</h3>";
echo "<p>Hasil Kolasi Locale strcoll('$str1', '$str2'): <strong>$hasil</strong></p>";
?>`,
    codeExplanation: [
      'strcoll() mempertimbangkan aturan alfabetik regional locale sistem aktif.'
    ],
    challenge: {
      instruction: 'Pahami fungsi strcoll.',
      starterCode: `<?php
echo "strcoll membandingkan string berdasarkan LC_COLLATE locale.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Kategori locale apakah yang mengatur perilaku perbandingan pada fungsi `strcoll()`?',
      options: [
        '`LC_COLLATE`',
        '`LC_CTYPE`',
        '`LC_TIME`',
        '`LC_NUMERIC`'
      ],
      correctIndex: 0,
      explanation: 'LC_COLLATE menentukan aturan kolasi pengurutan abjad string.'
    }
  },

  // 660. STRCSPN
  {
    id: 'php-ref-str-strcspn',
    title: 'PHP strcspn() & strspn()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 660,
    overview: 'Kuasai fungsi strcspn(): menghitung panjang segmen awal string yang TIDAK mengandung karakter apa pun dari daftar karakter masker yang ditentukan.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CHARACTER SPAN</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 660 / 666</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📏 Panjang Rentang Karakter (strcspn)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>strcspn(string $string, string $characters, int $offset = 0, ?int $length = null): int</code> menghitung berapa banyak karakter dari awal string sebelum karakter terlarang pertama kali ditemukan.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$username = "fadila123";

// Cari panjang karakter alfabet sebelum menemukan angka pertama (0-9)
$panjangHuruf = strcspn($username, "0123456789");

echo "<h3>Hasil Penggunaan strcspn():</h3>";
echo "<p>Username         : <code>$username</code></p>";
echo "<p>Huruf Tanpa Angka: <strong style='color:#059669;'>" . substr($username, 0, $panjangHuruf) . "</strong> ($panjangHuruf karakter)</p>";
?>`,
    codeExplanation: [
      'strcspn("fadila123", "0123456789") mengembalikan 6 (panjang kata "fadila").'
    ],
    challenge: {
      instruction: 'Hitung panjang huruf sebelum angka pada "test99" dengan strcspn("test99", "0123456789").',
      starterCode: `<?php
echo "Panjang: " . strcspn("test99", "0123456789");
?>`,
      hint: 'Panggil strcspn("test99", "0123456789").'
    },
    quiz: {
      question: 'Berapakah nilai yang dikembalikan oleh `strcspn("Hello", "l")`?',
      options: [
        'Integer `2` (panjang huruf "He" sebelum bertemu huruf "l")',
        'Integer `5`',
        'Integer `3`',
        'Integer `0`'
      ],
      correctIndex: 0,
      explanation: 'Huruf "H" dan "e" berjumlah 2 karakter sebelum karakter "l" pertama kali ditemukan.'
    }
  },

  // 661. STRIP_TAGS
  {
    id: 'php-ref-str-strip-tags',
    title: 'PHP strip_tags()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 661,
    overview: 'Kuasai fungsi strip_tags(): menghapus seluruh tag HTML, XML, dan PHP dari sebuah string untuk menghasilkan teks murni (Plain Text Cleaner & Blog Excerpt Generator).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TAG STRIPPER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 661 / 666</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧹 Pembersih Tag HTML (strip_tags)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>strip_tags(string $string, array|string|null $allowed_tags = null): string</code> membuang tag HTML. Anda dapat mengizinkan tag tertentu dengan array: <code>strip_tags($teks, ['b', 'i'])</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$artikelHtml = "<p>Selamat datang di <strong>DevGrow LMS</strong>. Kunjungi <a href='#'>kursus kami</a> sekarang!</p>";

// 1. Bersihkan semua tag HTML
$teksMurni = strip_tags($artikelHtml);

// 2. Izinkan tag <strong> saja
$teksKhusus = strip_tags($artikelHtml, ['strong']);

echo "<h3>Hasil Penggunaan strip_tags():</h3>";
echo "<p>Teks Murni    : <strong style='color:#059669;'>$teksMurni</strong></p>";
echo "<p>Hanya Strong  : $teksKhusus</p>";
?>`,
    codeExplanation: [
      'strip_tags() membuang <p> dan <a>, menyisakan teks biasa.'
    ],
    challenge: {
      instruction: 'Hapus tag HTML dari "<h1>Judul</h1>" dengan strip_tags("<h1>Judul</h1>").',
      starterCode: `<?php
echo strip_tags("<h1>Judul</h1>");
?>`,
      hint: 'Panggil strip_tags("<h1>Judul</h1>").'
    },
    quiz: {
      question: 'Bagaimana cara mengizinkan tag `<b>` dan `<i>` agar tidak ikut terhapus oleh `strip_tags()` di PHP 8.x?',
      options: [
        'Mengoperkan array tag yang diizinkan pada parameter kedua: `strip_tags($str, [\'b\', \'i\'])`',
        'Menambahkan tanda kutip ganda',
        'Menggunakan preg_replace',
        'Tidak bisa diizinkan'
      ],
      correctIndex: 0,
      explanation: 'PHP 7.4+ dan PHP 8 mendukung penulisan array tag yang diizinkan pada parameter kedua.'
    }
  },

  // 662. STRIPCSLASHES
  {
    id: 'php-ref-str-stripcslashes',
    title: 'PHP stripcslashes()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 662,
    overview: 'Kuasai fungsi stripcslashes(): menghapus backslash yang ditambahkan dengan gaya C oleh addcslashes() (kebalikan dari addcslashes()).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CSLASHES UNESCAPER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 662 / 666</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔓 Unescape Backslash Gaya C (stripcslashes)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>stripcslashes(string $string): string</code> mengenali escape sequence gaya C seperti <code>\\n</code>, <code>\\r</code>, <code>\\t</code>, oktal, dan heksadesimal.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$escaped = addcslashes("Halo Dunia!", "A..z");
$pulih = stripcslashes($escaped);

echo "<h3>Hasil Pengujian addcslashes & stripcslashes:</h3>";
echo "<p>Terescape : $escaped</p>";
echo "<p>Terpulih  : <strong style='color:#059669;'>$pulih</strong></p>";
?>`,
    codeExplanation: [
      'stripcslashes() mengembalikan string yang di-escape dengan addcslashes.'
    ],
    challenge: {
      instruction: 'Pulihkan string "\\H\\a\\l\\o" dengan stripcslashes.',
      starterCode: `<?php
echo stripcslashes("\\H\\a\\l\\o");
?>`,
      hint: 'Panggil stripcslashes.'
    },
    quiz: {
      question: 'Fungsi apakah yang merupakan pasangan encoder dari `stripcslashes()`?',
      options: [
        '`addcslashes()`',
        '`addslashes()`',
        '`quotemeta()`',
        '`rawurlencode()`'
      ],
      correctIndex: 0,
      explanation: 'stripcslashes adalah kebalikan dari addcslashes.'
    }
  },

  // 663. STRIPSLASHES
  {
    id: 'php-ref-str-stripslashes',
    title: 'PHP stripslashes()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 663,
    overview: 'Kuasai fungsi stripslashes(): menghapus backslash dari string yang sebelumnya di-escape dengan addslashes() (misal memulihkan \\\' menjadi \').',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SLASHES REMOVER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 663 / 666</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔓 Menghapus Backslash Escape (stripslashes)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>stripslashes(string $string): string</code> menghapus backslash di depan tanda kutip (<code>\\'</code> menjadi <code>'</code>, <code>\\"</code> menjadi <code>"</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$dataEscaped = "O\\'Connor berkata: \\\"PHP 8 mantap!\\\"";

$dataMurni = stripslashes($dataEscaped);

echo "<h3>Hasil Penggunaan stripslashes():</h3>";
echo "<p>Sebelum : <code>$dataEscaped</code></p>";
echo "<p>Sesudah : <strong style='color:#059669;'>$dataMurni</strong></p>";
?>`,
    codeExplanation: [
      'stripslashes() memulihkan teks asli tanpa backslash.'
    ],
    challenge: {
      instruction: 'Bersihkan "It\\\'s OK" dengan stripslashes.',
      starterCode: `<?php
echo stripslashes("It\\'s OK");
?>`,
      hint: 'Panggil stripslashes.'
    },
    quiz: {
      question: 'Berapakah string yang dihasilkan oleh `stripslashes("Don\\\'t")`?',
      options: [
        'String `"Don\'t"`',
        'String `"Dont"`',
        'String `"Don\\\'t"`',
        'Error'
      ],
      correctIndex: 0,
      explanation: 'stripslashes menghapus karakter backslash sebelum tanda petik.'
    }
  },

  // 664. STRIPOS
  {
    id: 'php-ref-str-stripos',
    title: 'PHP stripos()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 664,
    overview: 'Kuasai fungsi stripos(): mencari posisi indeks angka pertama kemunculan substring tanpa membedakan huruf besar dan huruf kecil (Case-Insensitive Substring Position).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CASE-INSENSITIVE SEARCH</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 664 / 666</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Posisi Teks Case-Insensitive (stripos)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>stripos(string $haystack, string $needle, int $offset = 0): int|false</code> mengembalikan indeks integer posisi kemunculan teks pertama (dimulai dari 0). Selalu gunakan operator identik ketat <code>!== false</code> saat mengecek hasil kembaliannya.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$kalimat = "Selamat datang di Platform DEVGROw LMS";

// Cari posisi kata "devgrow" tanpa peduli huruf besar/kecil
$posisi = stripos($kalimat, "devgrow");

echo "<h3>Hasil Penggunaan stripos():</h3>";
if ($posisi !== false) {
    echo "<p>Kata 'devgrow' ditemukan pada indeks ke: <strong style='color:#059669; font-size:18px;'>$posisi</strong></p>";
} else {
    echo "<p>Kata tidak ditemukan.</p>";
}
?>`,
    codeExplanation: [
      'stripos($kalimat, "devgrow") menemukan "DEVGROw" pada indeks 27.'
    ],
    challenge: {
      instruction: 'Cari indeks kata "php" pada "Belajar PHP" dengan stripos("Belajar PHP", "php").',
      starterCode: `<?php
echo "Indeks: " . stripos("Belajar PHP", "php");
?>`,
      hint: 'Panggil stripos("Belajar PHP", "php").'
    },
    quiz: {
      question: 'Operator perbandingan apakah yang WAJIB digunakan saat menguji hasil dari `stripos()` / `strpos()`?',
      options: [
        'Operator identik ketat `!== false` (atau `=== false`)',
        'Operator longgar `!= false`',
        'Operator `== true`',
        'Operator `<>`'
      ],
      correctIndex: 0,
      explanation: 'Karena indeks 0 dianggap falsy dalam evaluasi longgar, perbandingan ketat !== false wajib digunakan.'
    }
  },

  // 665. STRISTR, STRPOS, STRRPOS, STRRCHR
  {
    id: 'php-ref-str-search-family',
    title: 'PHP stristr(), strpos(), strrpos(), strrchr()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 665,
    overview: 'Kuasai keluarga lengkap fungsi pencarian teks PHP: strpos() (posisi pertama case-sensitive), strrpos() (posisi terakhir), stristr() (substring case-insensitive), dan strrchr() (ekstraksi ekstensi file).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SEARCH MATRIX</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 665 / 666</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧭 Keluarga Pencarian String Lengkap</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>strrpos()</code> mencari posisi kemunculan terakhir (reverse position). <code>strrchr()</code> mencari kemunculan terakhir karakter dan mengembalikan sisa teks (sangat praktis untuk mengambil ekstensi file: <code>strrchr("gambar.final.png", ".")</code> -> <code>".png"</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$pathFile = "/var/www/uploads/dokumen.final.pdf";

// 1. Ekstrak ekstensi file menggunakan strrchr
$ekstensi = strrchr($pathFile, '.');

// 2. Cari posisi slash terakhir menggunakan strrpos
$posisiSlashTerakhir = strrpos($pathFile, '/');
$namaFile = substr($pathFile, $posisiSlashTerakhir + 1);

echo "<h3>Hasil Penggunaan strrpos & strrchr:</h3>";
echo "<p>Nama File : <strong style='color:#059669;'>$namaFile</strong></p>";
echo "<p>Ekstensi  : <strong style='color:#4f46e5;'>$ekstensi</strong></p>";
?>`,
    codeExplanation: [
      'strrchr($path, ".") mengambil bagian titik terakhir (".pdf").',
      'strrpos($path, "/") mencari garis miring paling belakang untuk memisahkan nama file dari foldernya.'
    ],
    challenge: {
      instruction: 'Ambil ekstensi dari "backup.2026.sql" dengan strrchr("backup.2026.sql", ".").',
      starterCode: `<?php
echo strrchr("backup.2026.sql", ".");
?>`,
      hint: 'Panggil strrchr("backup.2026.sql", ".").'
    },
    quiz: {
      question: 'Fungsi manakah yang paling ringkas untuk mengekstrak ekstensi file dari nama file bertitik ganda seperti `"archive.tar.gz"`?',
      options: [
        '`strrchr("archive.tar.gz", ".")` (menghasilkan `".gz"`)',
        '`strchr()`',
        '`strpos()`',
        '`stripos()`'
      ],
      correctIndex: 0,
      explanation: 'strrchr mencari kemunculan titik terakhir sehingga menghasilkan .gz dengan tepat.'
    }
  },

  // 666. PHP STRING MASTER REFERENCE
  {
    id: 'php-ref-str-ultimate-master',
    title: 'PHP String Reference Ultimate Master Recap',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 666,
    overview: 'Kuasai rekapitulasi menyeluruh seluruh ekosistem fungsi manipulasi string PHP 8.x: efisiensi memori, keamanan enkripsi, dan performa tinggi.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">PHP STRING MASTER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 666 / 666</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏆 Master Lengkap String PHP 8 Enterprise</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Seluruh fungsi string bawaan PHP (pencarian modern <code>str_contains</code> / <code>str_starts_with</code> / <code>str_ends_with</code>, sanitasi <code>strip_tags</code> &amp; <code>htmlspecialchars</code>, parsing <code>str_getcsv</code> &amp; <code>parse_str</code>, serta formatting <code>sprintf</code> &amp; <code>number_format</code>) telah Anda kuasai secara komprehensif.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Daftar Kapabilitas String PHP Backend yang Dikuasai:</h3>";
echo "<ul>";
echo "<li>✓ <strong>PHP 8 Modern:</strong> str_contains(), str_starts_with(), str_ends_with()</li>";
echo "<li>✓ <strong>Format Output:</strong> sprintf(), printf(), number_format(), nl2br()</li>";
echo "<li>✓ <strong>Security & Clean:</strong> htmlspecialchars(), strip_tags(), bin2hex(random_bytes)</li>";
echo "<li>✓ <strong>Parsing & Split:</strong> str_getcsv(), parse_str(), explode(), implode(), str_split()</li>";
echo "<li>✓ <strong>Algoritma Cerdas:</strong> levenshtein(), soundex(), metaphone(), similar_text()</li>";
echo "</ul>";
echo "<p style='color:green; font-weight:bold; font-size:18px;'>🎉 Selamat! Seluruh referensi String PHP 8 Bab 10 (Materi 595 - 666) telah selesai secara sempurna!</p>";
?>`,
    codeExplanation: [
      'Rekapitulasi lengkap kemampuan pemrosesan teks tingkat lanjut di PHP 8.'
    ],
    challenge: {
      instruction: 'Pahami arsitektur string master PHP.',
      starterCode: `<?php
echo "PHP String Reference Selesai 100%!";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Kombinasi fungsi apakah yang direkomendasikan untuk memvalidasi dan memformat input mata uang pengguna secara aman di PHP 8?',
      options: [
        '`is_numeric()` + `number_format()` + `htmlspecialchars()`',
        '`eval()` + `echo`',
        '`md5()` saja',
        '`chop()` saja'
      ],
      correctIndex: 0,
      explanation: 'Validasi numerik dikombinasikan dengan formatting dan escape HTML adalah standar keamanan backend.'
    }
  }
];

module.exports = phpPart60RefString6;
