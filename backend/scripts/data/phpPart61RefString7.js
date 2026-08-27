// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (STRING PART 7: 667-676)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart61RefString7 = [
  // 667. STRISTR
  {
    id: 'php-ref-str-stristr',
    title: 'PHP stristr()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 667,
    overview: 'Kuasai fungsi stristr(): mencari kemunculan pertama substring tanpa membedakan huruf besar/kecil (case-insensitive) dan mengembalikan sisa string dari titik tersebut.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CASE-INSENSITIVE SUBSTRING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 667 / 695</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Pencarian Substring Case-Insensitive (stristr)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>stristr(string $haystack, string $needle, bool $before_needle = false): string|false</code> mencari teks tanpa peduli huruf kapital/kecil. Jika <code>$before_needle = true</code>, mengembalikan teks sebelum kata yang dicari.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$email = "User.Support@DevGrow.ID";

// Ekstrak domain (case-insensitive)
$domain = stristr($email, "@");

echo "<h3>Hasil Penggunaan stristr():</h3>";
echo "<p>Email  : $email</p>";
echo "<p>Domain : <strong style='color:#059669;'>$domain</strong></p>";
?>`,
    codeExplanation: [
      'stristr($email, "@") mengembalikan "@DevGrow.ID" tanpa memedulikan perbedaan case.'
    ],
    challenge: {
      instruction: 'Ambil teks mulai dari "php" pada "Belajar PHP 8" dengan stristr.',
      starterCode: `<?php
echo stristr("Belajar PHP 8", "php");
?>`,
      hint: 'Panggil stristr("Belajar PHP 8", "php").'
    },
    quiz: {
      question: 'Apa perbedaan utama antara `strstr()` dan `stristr()`?',
      options: [
        '`strstr()` peka huruf besar/kecil (case-sensitive), sedangkan `stristr()` tidak membedakan huruf besar/kecil (case-insensitive)',
        '`stristr` mengembalikan boolean',
        '`strstr` hanya untuk regex',
        'Keduanya identik'
      ],
      correctIndex: 0,
      explanation: 'Huruf "i" pada stristr menandakan pencarian case-insensitive.'
    }
  },

  // 668. STRLEN
  {
    id: 'php-ref-str-strlen-detail',
    title: 'PHP strlen() & mb_strlen()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 668,
    overview: 'Kuasai fungsi strlen() & mb_strlen(): mengukur panjang string dalam jumlah byte ASCII murni serta penanganan multibyte UTF-8 / Emoji.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">STRING LENGTH</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 668 / 695</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📏 Pengukuran Panjang String (strlen vs mb_strlen)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>strlen(string $string): int</code> menghitung total byte. Untuk teks multi-bahasa UTF-8 atau emoji (yang terdiri dari 2-4 byte per karakter), selalu gunakan <code>mb_strlen(string $string, ?string $encoding = "UTF-8"): int</code> untuk mendapatkan jumlah karakter visual yang sebenarnya.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$teksBiasa = "DevGrow";
$teksEmoji = "DevGrow 🚀";

echo "<h3>Hasil Pengujian strlen() vs mb_strlen():</h3>";
echo "<p>Panjang Byte '$teksBiasa' : <strong>" . strlen($teksBiasa) . " byte</strong></p>";
echo "<p>Panjang Byte '$teksEmoji' : <strong>" . strlen($teksEmoji) . " byte</strong> (Emoji roket memakan 4 byte!)</p>";
echo "<p>Karakter Visual '$teksEmoji' : <strong style='color:#059669;'>" . mb_strlen($teksEmoji, 'UTF-8') . " karakter</strong></p>";
?>`,
    codeExplanation: [
      'strlen() menghitung panjang byte, sedangkan mb_strlen() menghitung karakter visual UTF-8.'
    ],
    challenge: {
      instruction: 'Ukur panjang string "PHP 8" dengan strlen("PHP 8").',
      starterCode: `<?php
echo "Panjang: " . strlen("PHP 8");
?>`,
      hint: 'Panggil strlen("PHP 8").'
    },
    quiz: {
      question: 'Fungsi apakah yang WAJIB digunakan untuk menghitung panjang karakter yang akurat pada teks berbahasa Jepang, Arab, atau mengandung Emoji di PHP?',
      options: [
        '`mb_strlen($str, \'UTF-8\')`',
        '`strlen($str)`',
        '`str_word_count($str)`',
        '`count_chars($str)`'
      ],
      correctIndex: 0,
      explanation: 'mb_strlen mengenali multi-byte encoding sehingga menghitung 1 karakter UTF-8 utuh.'
    }
  },

  // 669. STRNATCASECMP
  {
    id: 'php-ref-str-strnatcasecmp',
    title: 'PHP strnatcasecmp()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 669,
    overview: 'Kuasai fungsi strnatcasecmp(): membandingkan dua string menggunakan algoritma Natural Order (urutan alami manusia, misal img2.jpg < img10.jpg) tanpa membedakan huruf besar/kecil.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">NATURAL ORDER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 669 / 695</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔢 Urutan Alami Manusia Case-Insensitive (strnatcasecmp)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>strnatcasecmp(string $string1, string $string2): int</code> membandingkan angka di dalam string sesuai logika manusia: <code>"file2.png"</code> lebih kecil daripada <code>"file10.png"</code> (berbeda dengan <code>strcmp</code> komputer standar yang menganggap <code>"file10.png"</code> lebih kecil karena karakter <code>'1' &lt; '2'</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$fileA = "photo2.jpg";
$fileB = "photo10.jpg";

$standar = strcasecmp($fileA, $fileB);
$natural = strnatcasecmp($fileA, $fileB);

echo "<h3>Perbandingan Standar vs Natural Order:</h3>";
echo "<p>Perbandingan Standar (strcasecmp) : <strong>$standar</strong> (menganggap photo10 duluan karena '1' < '2')</p>";
echo "<p>Perbandingan Alami (strnatcasecmp)  : <strong style='color:#059669;'>$natural</strong> (menganggap photo2 duluan karena 2 < 10)</p>";
?>`,
    codeExplanation: [
      'strnatcasecmp() mengurutkan nomor file secara natural sesuai persepsi manusia.'
    ],
    challenge: {
      instruction: 'Bandingkan "a2" dan "a10" dengan strnatcasecmp("a2", "a10").',
      starterCode: `<?php
echo strnatcasecmp("a2", "a10"); // Negatif karena 2 < 10
?>`,
      hint: 'Panggil strnatcasecmp.'
    },
    quiz: {
      question: 'Mengapa algoritma Natural Order (`strnatcmp` / `strnatcasecmp`) sangat direkomendasikan untuk pengurutan nama file atau nomor versi?',
      options: [
        'Karena algoritma ini menganggap angka multi-digit sebagai nilai numerik utuh (sehingga `file2` berada sebelum `file10`), bukan urutan alfabetik karakter individual',
        'Karena hanya berjalan di Windows',
        'Karena mengabaikan huruf',
        'Keduanya identik'
      ],
      correctIndex: 0,
      explanation: 'Natural Order mengurutkan angka dalam string berdasarkan nilai numeriknya.'
    }
  },

  // 670. STRNATCMP
  {
    id: 'php-ref-str-strnatcmp',
    title: 'PHP strnatcmp()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 670,
    overview: 'Kuasai fungsi strnatcmp(): membandingkan dua string menggunakan algoritma Natural Order yang peka huruf besar dan kecil (case-sensitive).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">NATURAL CASE-SENSITIVE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 670 / 695</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔢 Natural Order Case-Sensitive (strnatcmp)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>strnatcmp(string $string1, string $string2): int</code> membandingkan dua string secara natural sekaligus membedakan besar-kecilnya huruf.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$versi = ["v1.0", "v1.10", "v1.2", "v1.20", "v1.3"];

// Urutkan array menggunakan fungsi perbandingan alami
usort($versi, 'strnatcmp');

echo "<h3>Hasil Pengurutan Versi via usort + strnatcmp:</h3>";
echo "<ol>";
foreach ($versi as $v) {
    echo "<li><strong style='color:#059669;'>$v</strong></li>";
}
echo "</ol>";
?>`,
    codeExplanation: [
      'usort($versi, "strnatcmp") mengurutkan versi dari v1.0 -> v1.2 -> v1.3 -> v1.10 -> v1.20 secara akurat.'
    ],
    challenge: {
      instruction: 'Urutkan array ["item2", "item1", "item10"] dengan natsort($arr).',
      starterCode: `<?php
$arr = ["item2", "item1", "item10"];
natsort($arr);
echo implode(", ", $arr);
?>`,
      hint: 'Panggil natsort($arr).'
    },
    quiz: {
      question: 'Fungsi pengurutan array apakah yang menggunakan algoritma `strnatcmp()` di balik layar?',
      options: [
        '`natsort()`',
        '`sort()`',
        '`asort()`',
        '`ksort()`'
      ],
      correctIndex: 0,
      explanation: 'natsort() mengimplementasikan algoritma natural order sorting pada array.'
    }
  },

  // 671. STRNCASECMP
  {
    id: 'php-ref-str-strncasecmp',
    title: 'PHP strncasecmp()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 671,
    overview: 'Kuasai fungsi strncasecmp(): membandingkan N karakter pertama dari dua string secara case-insensitive (misal validasi prefix API token atau awalan URL).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PREFIX COMPARISON</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 671 / 695</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Perbandingan N Karakter Awal Case-Insensitive (strncasecmp)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>strncasecmp(string $string1, string $string2, int $length): int</code> membandingkan hanya sebanyak <code>$length</code> karakter pertama tanpa membedakan huruf besar/kecil.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$url = "HTTPS://devgrow.id/dashboard";
$target = "https://";

// Bandingkan 8 karakter pertama
if (strncasecmp($url, $target, 8) === 0) {
    echo "<h3>Hasil Pengujian strncasecmp():</h3>";
    echo "<p style='color:#059669; font-size:18px;'>✓ Protokol HTTPS Valid (8 karakter awal cocok)</p>";
}
?>`,
    codeExplanation: [
      'strncasecmp("HTTPS://...", "https://", 8) mengembalikan 0 karena 8 huruf pertamanya cocok.'
    ],
    challenge: {
      instruction: 'Bandingkan 4 huruf awal "DEVGROW" dan "devtest" dengan strncasecmp("DEVGROW", "devtest", 3).',
      starterCode: `<?php
echo (strncasecmp("DEVGROW", "devtest", 3) === 0) ? "3 Huruf Awal Cocok" : "Beda";
?>`,
      hint: 'Panggil strncasecmp.'
    },
    quiz: {
      question: 'Berapakah angka yang dikembalikan oleh `strncasecmp("ADMIN_USER", "admin_guest", 6)`?',
      options: [
        'Integer `0` (karena 6 karakter pertama `"ADMIN_"` dan `"admin_"` identik)',
        'Integer `1`',
        'Integer `-1`',
        'Boolean `false`'
      ],
      correctIndex: 0,
      explanation: '6 karakter awal keduanya adalah admin_ sehingga hasilnya adalah 0 (sama).'
    }
  },

  // 672. STRNCMP
  {
    id: 'php-ref-str-strncmp',
    title: 'PHP strncmp()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 672,
    overview: 'Kuasai fungsi strncmp(): membandingkan N karakter pertama dari dua string secara biner peka huruf besar dan kecil (case-sensitive).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PREFIX CASE-SENSITIVE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 672 / 695</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Perbandingan N Karakter Case-Sensitive (strncmp)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>strncmp(string $string1, string $string2, int $length): int</code> membandingkan tepat <code>$length</code> karakter pertama dengan membedakan besar-kecilnya huruf.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$tokenA = "JWT_SECRET_KEY_PROD";
$tokenB = "JWT_SECRET_KEY_DEV";

// Bandingkan 14 karakter pertama ("JWT_SECRET_KEY")
$isPrefixSama = (strncmp($tokenA, $tokenB, 14) === 0);

echo "<h3>Hasil Penggunaan strncmp():</h3>";
echo "<p>Prefix 14 Karakter Sama: <strong style='color:#059669;'>" . ($isPrefixSama ? 'Ya (True)' : 'Tidak') . "</strong></p>";
?>`,
    codeExplanation: [
      'strncmp($tokenA, $tokenB, 14) memverifikasi bahwa kedua token memiliki namespace prefix yang sama.'
    ],
    challenge: {
      instruction: 'Bandingkan 3 karakter awal "abc" dan "abz" dengan strncmp("abc", "abz", 2).',
      starterCode: `<?php
echo (strncmp("abc", "abz", 2) === 0) ? "2 Karakter Awal Sama" : "Beda";
?>`,
      hint: 'Panggil strncmp.'
    },
    quiz: {
      question: 'Apa perbedaan antara `strncmp()` dan `strcmp()`?',
      options: [
        '`strncmp()` hanya membandingkan sebanyak N karakter pertama yang ditentukan oleh parameter panjang (`$length`), sedangkan `strcmp()` membandingkan seluruh panjang string sampai selesai',
        '`strncmp` case-insensitive',
        'Keduanya identik',
        '`strncmp` untuk angka saja'
      ],
      correctIndex: 0,
      explanation: 'strncmp membatasi perbandingan leksikografis hingga panjang N karakter.'
    }
  },

  // 673. STRPBRK
  {
    id: 'php-ref-str-strpbrk',
    title: 'PHP strpbrk()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 673,
    overview: 'Kuasai fungsi strpbrk(): mencari karakter mana pun dari daftar set karakter dalam sebuah string dan mengembalikan sisa string mulai dari karakter yang pertama kali ditemukan.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CHARACTER SET SEARCH</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 673 / 695</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎯 Cari Karakter dalam Set (strpbrk)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>strpbrk(string $string, string $characters): string|false</code> mencari kemunculan karakter apa pun yang ada di <code>$characters</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$teks = "Order ID: #4092-B";

// Cari simbol khusus pertama (# atau @ atau $)
$sisa = strpbrk($teks, "#@$");

echo "<h3>Hasil Penggunaan strpbrk():</h3>";
echo "<p>Teks Asli   : $teks</p>";
echo "<p>Mulai Simbol: <strong style='color:#059669;'>$sisa</strong></p>";
?>`,
    codeExplanation: [
      'strpbrk($teks, "#@$") menemukan karakter "#" dan mengembalikan string "#4092-B".'
    ],
    challenge: {
      instruction: 'Cari angka pertama pada "kode: 900" dengan strpbrk("kode: 900", "0123456789").',
      starterCode: `<?php
echo strpbrk("kode: 900", "0123456789");
?>`,
      hint: 'Panggil strpbrk.'
    },
    quiz: {
      question: 'Apa yang dikembalikan oleh `strpbrk($str, $chars)` jika tidak ada satu pun karakter dari `$chars` yang ditemukan di dalam `$str`?',
      options: [
        'Boolean `false`',
        'String kosong `""`',
        '`null`',
        'Integer `-1`'
      ],
      correctIndex: 0,
      explanation: 'strpbrk mengembalikan false jika tidak ada karakter pencocokan.'
    }
  },

  // 674. STRPOS
  {
    id: 'php-ref-str-strpos-detail',
    title: 'PHP strpos()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 674,
    overview: 'Kuasai fungsi strpos(): mencari posisi indeks integer pertama kemunculan substring (case-sensitive) dengan dukungan parameter offset.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">CORE SEARCH</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 674 / 695</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Posisi Substring Pertama (strpos)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>strpos(string $haystack, string $needle, int $offset = 0): int|false</code> mengembalikan indeks integer posisi teks (0-indexed).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$kalimat = "Belajar PHP 8 di DevGrow LMS";

$posisi = strpos($kalimat, "PHP");

echo "<h3>Hasil Penggunaan strpos():</h3>";
if ($posisi !== false) {
    echo "<p>Kata 'PHP' ditemukan pada indeks ke: <strong style='color:#059669; font-size:18px;'>$posisi</strong></p>";
}
?>`,
    codeExplanation: [
      'strpos("Belajar PHP...", "PHP") mengembalikan integer 8.'
    ],
    challenge: {
      instruction: 'Temukan posisi kata "LMS" pada "DevGrow LMS" dengan strpos.',
      starterCode: `<?php
echo "Posisi: " . strpos("DevGrow LMS", "LMS");
?>`,
      hint: 'Panggil strpos("DevGrow LMS", "LMS").'
    },
    quiz: {
      question: 'Berapakah nilai yang dikembalikan oleh `strpos("PHP", "P")` (mencari huruf pertama)?',
      options: [
        'Integer `0` (karena posisi huruf pertama berada pada indeks ke-0)',
        'Integer `1`',
        'Boolean `true`',
        '`null`'
      ],
      correctIndex: 0,
      explanation: 'Indeks string di PHP dimulai dari 0 (zero-indexed).'
    }
  },

  // 675. STRRCHR
  {
    id: 'php-ref-str-strrchr-detail',
    title: 'PHP strrchr()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 675,
    overview: 'Kuasai fungsi strrchr(): mencari kemunculan TERAKHIR dari sebuah karakter dalam string dan mengembalikan sisa string dari posisi tersebut (Ekstraksi Ekstensi File).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">REVERSE CHAR SEARCH</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 675 / 695</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📂 Ekstraksi Karakter Terakhir (strrchr)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>strrchr(string $haystack, string $needle, bool $before_needle = false): string|false</code> mencari karakter dari belakang string. Sangat efisien untuk membaca ekstensi file <code>strrchr($file, '.')</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$namaFile = "backup.database.2026.sql";

$ekstensi = strrchr($namaFile, '.');

echo "<h3>Hasil Penggunaan strrchr():</h3>";
echo "<p>Nama File : $namaFile</p>";
echo "<p>Ekstensi  : <strong style='color:#059669; font-size:18px;'>$ekstensi</strong></p>";
?>`,
    codeExplanation: [
      'strrchr() menemukan titik terakhir dan mengembalikan ".sql".'
    ],
    challenge: {
      instruction: 'Ambil ekstensi dari "app.bundle.js" dengan strrchr("app.bundle.js", ".").',
      starterCode: `<?php
echo strrchr("app.bundle.js", ".");
?>`,
      hint: 'Panggil strrchr("app.bundle.js", ".").'
    },
    quiz: {
      question: 'Berapakah string yang dihasilkan oleh `strrchr("user@mail.co.id", "@")`?',
      options: [
        'String `"@mail.co.id"`',
        'String `".id"`',
        'String `"user"`',
        'Boolean `false`'
      ],
      correctIndex: 0,
      explanation: 'strrchr mencari karakter @ terakhir dan mengembalikan @mail.co.id.'
    }
  },

  // 676. STRREV
  {
    id: 'php-ref-str-strrev',
    title: 'PHP strrev()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 676,
    overview: 'Kuasai fungsi strrev(): membalikkan susunan karakter dalam sebuah string (String Reversal & Palindrome Checker).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">STRING REVERSAL</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 676 / 695</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔄 Membalikkan String (strrev)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>strrev(string $string): string</code> membalikkan karakter (misal: <code>"KODOK"</code> -> <code>"KODOK"</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$kata = "KASUR RUSAK";
$terbalik = strrev($kata);

$isPalindrom = ($kata === $terbalik);

echo "<h3>Hasil Pengujian Palindrom via strrev():</h3>";
echo "<p>Kata Asli : $kata</p>";
echo "<p>Terbalik  : <strong style='color:#059669;'>$terbalik</strong></p>";
echo "<p>Status Palindrom: " . ($isPalindrom ? "<strong style='color:green;'>✓ Merupakan Kata Palindrom!</strong>" : "Bukan") . "</p>";
?>`,
    codeExplanation: [
      'strrev() membalikkan urutan karakter teks dari ujung belakang ke depan.'
    ],
    challenge: {
      instruction: 'Balikkan kata "DEVGROW" dengan strrev("DEVGROW").',
      starterCode: `<?php
echo strrev("DEVGROW");
?>`,
      hint: 'Panggil strrev("DEVGROW").'
    },
    quiz: {
      question: 'Berapakah string yang dihasilkan oleh `strrev("PHP")`?',
      options: [
        'String `"PHP"`',
        'String `"php"`',
        'String `"HPP"`',
        'Error'
      ],
      correctIndex: 0,
      explanation: 'Karena huruf depan dan belakang adalah P, strrev("PHP") tetap menghasilkan "PHP".'
    }
  }
];

module.exports = phpPart61RefString7;
