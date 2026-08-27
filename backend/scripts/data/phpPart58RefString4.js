// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (STRING PART 4: 632-643)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart58RefString4 = [
  // 632. PARSE_STR
  {
    id: 'php-ref-str-parse-str',
    title: 'PHP parse_str()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 632,
    overview: 'Kuasai fungsi parse_str(): mengurai (parse) string query URL (query string: name=John&age=25&hobbies[]=coding) menjadi array asosiatif variabel.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">QUERY STRING PARSER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 632 / 666</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌐 Mengurai Query String URL (parse_str)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>parse_str(string $string, array &$result): void</code> mengurai string berformat <code>key1=val1&amp;key2=val2</code> ke dalam array <code>$result</code>. Wajib selalu menyertakan parameter kedua <code>$result</code> di PHP modern untuk mencegah polusi global scope.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$queryString = "nama=Rahmat+Fadila&kursus=PHP8&kategori=backend&tags[]=oop&tags[]=db";

// Parse ke array terstruktur
parse_str($queryString, $data);

echo "<h3>Hasil Penggunaan parse_str():</h3>";
echo "<p>Nama Instruktur : <strong style='color:#059669;'>{$data['nama']}</strong></p>";
echo "<p>Kursus          : <strong>{$data['kursus']}</strong></p>";
echo "<p>Tags            : " . implode(', ', $data['tags']) . "</p>";
?>`,
    codeExplanation: [
      'parse_str($queryString, $data) mengisi variabel array $data dengan pasangan key-value.'
    ],
    challenge: {
      instruction: 'Parse string "a=1&b=2" ke dalam array $out dengan parse_str("a=1&b=2", $out).',
      starterCode: `<?php
parse_str("a=1&b=2", $out);
echo "a: " . $out['a'] . ", b: " . $out['b'];
?>`,
      hint: 'Panggil parse_str("a=1&b=2", $out).'
    },
    quiz: {
      question: 'Mengapa pemanggilan `parse_str()` dengan 2 parameter (menyertakan array target `&$result`) bersifat WAJIB di PHP 8.x?',
      options: [
        'Karena pemanggilan tanpa parameter kedua telah dihapus untuk mencegah overwrite variabel global yang membahayakan keamanan aplikasi (Variable Injection)',
        'Hanya untuk mempercepat eksekusi',
        'Agar bisa membaca JSON',
        'Tidak wajib'
      ],
      correctIndex: 0,
      explanation: 'PHP 8 mewajibkan parameter array target kedua demi keamanan dan stabilitas scope variabel.'
    }
  },

  // 633. PRINT
  {
    id: 'php-ref-str-print',
    title: 'PHP print',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 633,
    overview: 'Kuasai konstruksi bahasa print: mencetak satu string teks dan selalu mengembalikan nilai integer 1 (berguna dalam ekspresi ternary).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">OUTPUT CONSTRUCT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 633 / 666</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📢 Output Bernilai Kembalian (print)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>print(string $expression): int</code> mencetak satu argumen string dan selalu mengembalikan angka <code>1</code>. Karena mengembalikan nilai, <code>print</code> dapat diletakkan di dalam ekspresi ternary atau inline condition: <code>$isLoggedIn ? print "Halo User" : print "Silakan Login";</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$status = true;

echo "<h3>Hasil Penggunaan print dalam Ekspresi:</h3>";
$res = $status ? print("<p style='color:#059669;'>✓ Status Aktif Diverifikasi</p>") : print("Nonaktif");

echo "<p>Nilai Return print: <strong>$res</strong> (selalu 1)</p>";
?>`,
    codeExplanation: [
      'print selalu mengembalikan integer 1 sehingga valid digunakan dalam ekspresi matematika / ternary.'
    ],
    challenge: {
      instruction: 'Gunakan print untuk mencetak "DevGrow LMS".',
      starterCode: `<?php
print "DevGrow LMS";
?>`,
      hint: 'Panggil print "DevGrow LMS".'
    },
    quiz: {
      question: 'Apa perbedaan utama antara `echo` dan `print` di PHP?',
      options: [
        '`echo` bisa menerima banyak argumen koma dan tidak mengembalikan nilai (void), sedangkan `print` hanya menerima 1 argumen dan selalu mengembalikan integer `1`',
        '`print` lebih cepat dari `echo`',
        '`echo` hanya untuk HTML',
        'Keduanya identik'
      ],
      correctIndex: 0,
      explanation: 'echo lebih cepat dan mendukung koma multi-argumen, sedangkan print bertindak sebagai ekspresi bernilai 1.'
    }
  },

  // 634. PRINTF
  {
    id: 'php-ref-str-printf',
    title: 'PHP printf()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 634,
    overview: 'Kuasai fungsi printf(): memformat dan langsung mencetak string berformat (format specifiers: %s, %d, %f, %02d, %b, %x) ke output browser.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">FORMATTED OUTPUT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 634 / 666</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🖨️ Cetak Teks Berformat (printf)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>printf(string $format, mixed ...$values): int</code> mencetak string sesuai template penentu format:
            <code>%s</code> (string), <code>%d</code> (integer), <code>%02d</code> (dua digit angka nol di depan), <code>%0.2f</code> (float 2 desimal), <code>%x</code> (hexadecimal).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$produk = "SSD NVMe 1TB";
$harga = 1250000.50;
$stok = 7;

echo "<h3>Hasil Penggunaan printf():</h3>";
printf("<p>Produk: <strong style='color:#059669;'>%s</strong> | Stok: <strong style='color:#4f46e5;'>%02d unit</strong> | Harga: <strong>Rp %01.2f</strong></p>", $produk, $stok, $harga);
?>`,
    codeExplanation: [
      'printf() menggantikan penentu format %s, %02d, dan %01.2f dengan nilai variabel secara presisi.'
    ],
    challenge: {
      instruction: 'Cetak "Nilai: 05" dengan printf("Nilai: %02d", 5).',
      starterCode: `<?php
printf("Nilai: %02d", 5);
?>`,
      hint: 'Panggil printf("Nilai: %02d", 5).'
    },
    quiz: {
      question: 'Penentu format (specifier) apakah yang digunakan pada `printf()` untuk memformat angka desimal (float) dengan tepat 2 angka di belakang koma?',
      options: [
        '`%.2f`',
        '`%2d`',
        '`%s`',
        '`%f.2`'
      ],
      correctIndex: 0,
      explanation: '%.2f membatasi angka pecahan floating point menjadi tepat 2 angka desimal.'
    }
  },

  // 635. QUOTED_PRINTABLE_DECODE & ENCODE
  {
    id: 'php-ref-str-quoted-printable',
    title: 'PHP quoted_printable_encode() & quoted_printable_decode()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 635,
    overview: 'Kuasai fungsi quoted_printable_encode() & quoted_printable_decode(): meng-encode string 8-bit menjadi format Quoted-Printable (RFC 2045) untuk transmisi email MIME yang aman.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">MIME ENCODING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 635 / 666</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📧 Quoted-Printable Email Encoding (RFC 2045)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>quoted_printable_encode(string $string): string</code> mengonversi karakter non-ASCII menjadi format heksadesimal berawalan tanda sama dengan (seperti <code>=E9</code> untuk karakter é). <code>quoted_printable_decode(string $string): string</code> mengembalikannya ke teks asli.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$teksEmail = "Harga kopi spesial café: €3.50 = Rp 60.000";

// 1. Encode
$encoded = quoted_printable_encode($teksEmail);

// 2. Decode
$decoded = quoted_printable_decode($encoded);

echo "<h3>Hasil Pengujian Quoted-Printable:</h3>";
echo "<p>Teks Asli   : $teksEmail</p>";
echo "<p>QP Encoded  : <code style='background:#0f172a; color:#38bdf8; padding:4px 8px; border-radius:4px;'>$encoded</code></p>";
echo "<p>Hasil Decode: <strong style='color:#059669;'>$decoded</strong></p>";
?>`,
    codeExplanation: [
      'quoted_printable_encode() memastikan karakter spesial tidak rusak saat dilewatkan melalui mail server SMTP lama.'
    ],
    challenge: {
      instruction: 'Encode string "A=B" dengan quoted_printable_encode.',
      starterCode: `<?php
$enc = quoted_printable_encode("A=B");
echo quoted_printable_decode($enc);
?>`,
      hint: 'Panggil quoted_printable_encode dan decode.'
    },
    quiz: {
      question: 'Karakter apakah yang digunakan sebagai penanda prefix escape pada format Quoted-Printable (RFC 2045)?',
      options: [
        'Tanda sama dengan (`=`)',
        'Tanda persen (`%`)',
        'Tanda ampersand (`&`)',
        'Tanda dollar (`$`)'
      ],
      correctIndex: 0,
      explanation: 'Format Quoted-Printable meng-escape karakter non-ASCII dengan bentuk =XX (misal =3D untuk tanda =).'
    }
  },

  // 636. QUOTEMETA
  {
    id: 'php-ref-str-quotemeta',
    title: 'PHP quotemeta()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 636,
    overview: 'Kuasai fungsi quotemeta(): menambahkan tanda backslash (\\) di depan setiap karakter meta (., \\, +, *, ?, [, ^, ], (, $, )).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">METACHAR ESCAPING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 636 / 666</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛡️ Escape Karakter Meta (quotemeta)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>quotemeta(string $string): string</code> meng-escape 11 karakter meta matematika/regex dasar: <code>. \\ + * ? [ ^ ] ( $ )</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$formula = "Total = (100 * $qty) + 50.00?";

$escaped = quotemeta($formula);

echo "<h3>Hasil Penggunaan quotemeta():</h3>";
echo "<p>Formula Asli : $formula</p>";
echo "<p>Hasil Escape : <strong style='color:#059669;'>$escaped</strong></p>";
?>`,
    codeExplanation: [
      'quotemeta() menambahkan backslash di depan tanda (, *, $, ), +, ., dan ?.'
    ],
    challenge: {
      instruction: 'Escape karakter meta dari "1+1=2" dengan quotemeta("1+1=2").',
      starterCode: `<?php
echo quotemeta("1+1=2");
?>`,
      hint: 'Panggil quotemeta("1+1=2").'
    },
    quiz: {
      question: 'Karakter apakah yang TIDAK di-escape oleh fungsi `quotemeta()`?',
      options: [
        'Huruf dan angka biasa (seperti `"A"`, `"1"`)',
        'Tanda tambah (`+`)',
        'Tanda bintang (`*`)',
        'Tanda titik (`.`)'
      ],
      correctIndex: 0,
      explanation: 'quotemeta hanya meng-escape 11 karakter meta khusus, huruf/angka dibiarkan apa adanya.'
    }
  },

  // 637. RTRIM
  {
    id: 'php-ref-str-rtrim',
    title: 'PHP rtrim()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 637,
    overview: 'Kuasai fungsi rtrim(): memotong spasi putih, newline, tab, atau karakter trailing tertentu di sisi kanan akhir string.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">RIGHT TRIMMING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 637 / 666</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">✂️ Pangkas Kanan String (rtrim)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>rtrim(string $string, string $characters = " \\n\\r\\t\\v\\x00"): string</code> membuang spasi kosong atau trailing slash dari URL (misal: <code>rtrim($url, '/')</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$urlApi = "https://api.devgrow.id/v1/users///";

// Bersihkan trailing slash berlebih di ujung kanan URL
$urlBersih = rtrim($urlApi, '/');

echo "<h3>Hasil Penggunaan rtrim():</h3>";
echo "<p>URL Mentah  : <code>$urlApi</code></p>";
echo "<p>URL Standar : <strong style='color:#059669;'>$urlBersih</strong></p>";
?>`,
    codeExplanation: [
      'rtrim($urlApi, "/") membuang seluruh karakter garis miring ganda di akhir string URL.'
    ],
    challenge: {
      instruction: 'Pangkas tanda koma trailing di ujung string "PHP, JS, SQL," dengan rtrim($str, ",").',
      starterCode: `<?php
echo rtrim("PHP, JS, SQL,", ",");
?>`,
      hint: 'Panggil rtrim($str, ",").'
    },
    quiz: {
      question: 'Bagaimana cara membuang karakter trailing slash di akhir URL menggunakan `rtrim()`?',
      options: [
        '`rtrim($url, "/")`',
        '`trim($url)`',
        '`ltrim($url, "/")`',
        '`substr($url, 1)`'
      ],
      correctIndex: 0,
      explanation: 'rtrim($url, "/") secara khusus memangkas karakter slash di ujung kanan string.'
    }
  },

  // 638. SETLOCALE
  {
    id: 'php-ref-str-setlocale',
    title: 'PHP setlocale()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 638,
    overview: 'Kuasai fungsi setlocale(): mengatur informasi regional dan bahasa locale (misal waktu bahasa Indonesia id_ID, format mata uang, format angka LC_ALL).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">LOCALE CONFIGURATION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 638 / 666</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌐 Konfigurasi Locale Regional (setlocale)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>setlocale(int $category, string|array ...$locales): string|false</code> mengaktifkan lokal regional seperti <code>'id_ID.UTF-8'</code>, <code>'ind'</code>, <code>'en_US'</code> untuk memengaruhi fungsi tanggal dan pemformatan angka.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Set locale ke bahasa Indonesia
$loc = setlocale(LC_ALL, 'id_ID.UTF-8', 'id_ID', 'ind', 'Indonesian');

echo "<h3>Hasil Penggunaan setlocale():</h3>";
echo "<p>Locale Aktif: <strong style='color:#059669;'>" . ($loc ?: 'Default System') . "</strong></p>";
?>`,
    codeExplanation: [
      'setlocale(LC_ALL, ...) mengatur konvensi bahasa di level thread eksekusi PHP.'
    ],
    challenge: {
      instruction: 'Pahami fungsi setlocale.',
      starterCode: `<?php
echo "setlocale(LC_ALL, 'id_ID.UTF-8') mengaktifkan locale Indonesia.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Kategori konstanta apakah pada `setlocale()` yang mengatur seluruh aspek lokal (waktu, moneter, numerik, karakter)?',
      options: [
        '`LC_ALL`',
        '`LC_TIME`',
        '`LC_MONETARY`',
        '`LC_NUMERIC`'
      ],
      correctIndex: 0,
      explanation: 'LC_ALL mencakup seluruh kategori pengaturan regional lokal.'
    }
  },

  // 639. SHA1 & SHA1_FILE
  {
    id: 'php-ref-str-sha1-file',
    title: 'PHP sha1() & sha1_file()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 639,
    overview: 'Kuasai fungsi sha1() & sha1_file(): menghitung hash 160-bit Secure Hash Algorithm 1 (40 karakter heksadesimal) dari string teks atau file fisik disk (Git Commit Checksum Engine).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SHA-1 HASHING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 639 / 666</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔑 Hash 40 Digit SHA-1 (sha1 / sha1_file)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>sha1(string $string, bool $binary = false): string</code> menghasilkan string heksadesimal 40 karakter. Digunakan oleh sistem Git secara internal sebagai ID objek commit blob. <code>sha1_file(string $filename)</code> menghitung SHA-1 langsung dari file fisik di disk.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$data = "DevGrow LMS Version 2.0.0 Release";

$hashSha1 = sha1($data);

echo "<h3>Hasil Pengujian sha1():</h3>";
echo "<p>Data Teks  : $data</p>";
echo "<p>Hash SHA-1 : <strong style='color:#059669; font-family:monospace;'>$hashSha1</strong></p>";
echo "<p>Panjang    : " . strlen($hashSha1) . " karakter (160 bit)</p>";
?>`,
    codeExplanation: [
      'sha1($data) selalu menghasilkan string tepat 40 karakter heksadesimal.'
    ],
    challenge: {
      instruction: 'Hitung hash SHA-1 dari string "php8" dengan sha1("php8").',
      starterCode: `<?php
echo sha1("php8");
?>`,
      hint: 'Panggil sha1("php8").'
    },
    quiz: {
      question: 'Berapakah panjang karakter string heksadesimal yang selalu dihasilkan oleh fungsi `sha1()`?',
      options: [
        'Tepat `40 karakter`',
        '32 karakter',
        '64 karakter',
        '16 karakter'
      ],
      correctIndex: 0,
      explanation: 'SHA-1 (160-bit) direpresentasikan dalam tepat 40 karakter heksadesimal.'
    }
  },

  // 640. SIMILAR_TEXT
  {
    id: 'php-ref-str-similar-text',
    title: 'PHP similar_text()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 640,
    overview: 'Kuasai fungsi similar_text(): menghitung persentase derajat kemiripan teks antara dua string (Algoritma Oliver [1993] untuk deteksi kemiripan esai / artikel).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SIMILARITY SCORE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 640 / 666</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📊 Persentase Kemiripan Teks (similar_text)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>similar_text(string $string1, string $string2, float &$percent = null): int</code> mengembalikan jumlah karakter yang sama dan mengisi persentase kemiripan (0.0% - 100.0%) ke parameter ketiga <code>$percent</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$teks1 = "Belajar pemrograman PHP 8 modern";
$teks2 = "Belajar pemrograman PHP 8 OOP";

$karakterCocok = similar_text($teks1, $teks2, $persen);

echo "<h3>Hasil Pengujian similar_text():</h3>";
echo "<p>Teks 1 : $teks1</p>";
echo "<p>Teks 2 : $teks2</p>";
echo "<p>Karakter Cocok : <strong>$karakterCocok karakter</strong></p>";
echo "<p>Kemiripan      : <strong style='color:#059669; font-size:18px;'>" . number_format($persen, 2) . "%</strong></p>";
?>`,
    codeExplanation: [
      'similar_text($t1, $t2, $persen) menghitung persentase kemiripan teks secara otomatis.'
    ],
    challenge: {
      instruction: 'Hitung persentase kemiripan antara "DevGrow" dan "DevGrow LMS".',
      starterCode: `<?php
similar_text("DevGrow", "DevGrow LMS", $p);
echo "Kemiripan: " . round($p, 1) . "%";
?>`,
      hint: 'Panggil similar_text("DevGrow", "DevGrow LMS", $p).'
    },
    quiz: {
      question: 'Di parameter manakah persentase kemiripan teks (0 - 100%) disimpan pada pemanggilan `similar_text()`?',
      options: [
        'Parameter ke-3: `&$percent`',
        'Nilai kembalian return function',
        'Parameter ke-1',
        'Parameter ke-2'
      ],
      correctIndex: 0,
      explanation: 'similar_text mengisi persentase kemiripan ke parameter ketiga yang dilewatkan by-reference.'
    }
  },

  // 641. SOUNDEX
  {
    id: 'php-ref-str-soundex',
    title: 'PHP soundex()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 641,
    overview: 'Kuasai fungsi soundex(): menghitung kunci 4-karakter fonetik algoritma Soundex (misal: "Robert" -> "R163", "Rupert" -> "R163") untuk pencocokan nama keluarga bahasa Inggris.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SOUNDEX ALGORITHM</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 641 / 666</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔊 Kunci Fonetik Klasik (soundex)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>soundex(string $string): string</code> menghasilkan string 4 karakter (1 huruf pertama + 3 angka digit kode kelompok vokal/konsonan).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$nama1 = "Robert";
$nama2 = "Rupert";

$snd1 = soundex($nama1);
$snd2 = soundex($nama2);

echo "<h3>Hasil Pengujian soundex():</h3>";
echo "<p>'$nama1' -> Soundex: <strong style='color:#059669;'>$snd1</strong></p>";
echo "<p>'$nama2' -> Soundex: <strong style='color:#059669;'>$snd2</strong></p>";
echo "<p>Status: " . ($snd1 === $snd2 ? "<strong style='color:green;'>✓ Kunci Fonetik Sama ($snd1)</strong>" : "Beda") . "</p>";
?>`,
    codeExplanation: [
      'soundex("Robert") dan soundex("Rupert") keduanya menghasilkan kode fonetik R163.'
    ],
    challenge: {
      instruction: 'Hitung soundex dari "Smith" dengan soundex("Smith").',
      starterCode: `<?php
echo "Soundex Smith: " . soundex("Smith");
?>`,
      hint: 'Panggil soundex("Smith").'
    },
    quiz: {
      question: 'Berapakah panjang string yang selalu dihasilkan oleh algoritma `soundex()` standar?',
      options: [
        'Tepat `4 karakter` (1 huruf kapital diikuti 3 digit angka)',
        '8 karakter',
        '2 karakter',
        'Panjang dinamis'
      ],
      correctIndex: 0,
      explanation: 'Algoritma Soundex selalu menghasilkan kode 4 karakter (misal S530).'
    }
  },

  // 642. SPRINTF
  {
    id: 'php-ref-str-sprintf',
    title: 'PHP sprintf()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 642,
    overview: 'Kuasai fungsi sprintf(): memformat string dengan template penentu format (%s, %d, %f, %02d, %b, %x) dan MENGEMBALIKANNYA sebagai string (bukan langsung mencetak).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">STRING BUILDER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 642 / 666</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏗️ String Formatter Presisi Tinggi (sprintf)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>sprintf(string $format, mixed ...$values): string</code> adalah salah satu fungsi paling sering digunakan dalam arsitektur backend untuk menyusun pesan log, query builder dinamis, nomor registrasi berformat, dan URL endpoint.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$userId = 452;
$totalBelanja = 850000;
$tanggal = "2026-08-27";

// Buat ID transaksi unik berformat: TRX-20260827-000452
$trxId = sprintf("TRX-%s-%06d", str_replace('-', '', $tanggal), $userId);

echo "<h3>Hasil Penggunaan sprintf():</h3>";
echo "<p>Kode Transaksi Terformat: <strong style='color:#059669; font-size:18px;'>$trxId</strong></p>";
?>`,
    codeExplanation: [
      'sprintf("TRX-%s-%06d", $tgl, $userId) memformat tanggal dan membuat ID angka 6 digit dengan padding nol depan.'
    ],
    challenge: {
      instruction: 'Format angka 7 menjadi 3 digit "007" dengan sprintf("%03d", 7).',
      starterCode: `<?php
echo sprintf("%03d", 7);
?>`,
      hint: 'Panggil sprintf("%03d", 7).'
    },
    quiz: {
      question: 'Apa perbedaan mendasar antara `printf()` dan `sprintf()`?',
      options: [
        '`printf()` langsung mencetak teks ke output buffer, sedangkan `sprintf()` mengembalikan string hasil format ke variabel tanpa mencetaknya',
        '`sprintf()` hanya untuk angka',
        '`printf()` lebih lambat',
        'Keduanya identik'
      ],
      correctIndex: 0,
      explanation: 'sprintf mengembalikan nilai string yang bisa disimpan ke variabel atau database.'
    }
  }
];

module.exports = phpPart58RefString4;
