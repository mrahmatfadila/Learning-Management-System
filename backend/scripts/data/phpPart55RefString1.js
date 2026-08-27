// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (STRING PART 1: 595-606)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart55RefString1 = [
  // 595. ADDCSLASHES
  {
    id: 'php-ref-str-addcslashes',
    title: 'PHP addcslashes()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 595,
    overview: 'Kuasai fungsi addcslashes(): meng-escape karakter-karakter tertentu dengan gaya bahasa C (C-style backslash) berdasarkan rentang karakter yang ditentukan.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">STRING SANITIZATION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 595 / 631</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛡️ Escape Karakter Gaya C (addcslashes)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>addcslashes(string $string, string $characters): string</code> menambahkan tanda backslash <code>\\</code> di depan karakter yang terdaftar pada parameter kedua (misal: <code>'A..z'</code> untuk semua huruf alfabet).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$teks = "Halo Dunia! Selamat belajar di DevGrow.";

// Escape huruf kapital A sampai Z
$escaped = addcslashes($teks, 'A..Z');

echo "<h3>Hasil Penggunaan addcslashes():</h3>";
echo "<p>Teks Asli    : $teks</p>";
echo "<p>Hasil Escape : <strong style='color:#059669;'>$escaped</strong></p>";
?>`,
    codeExplanation: [
      'addcslashes($teks, "A..Z") menambahkan backslash di depan huruf "H", "D", "S", "D", "G".'
    ],
    challenge: {
      instruction: 'Escape karakter "a" sampai "z" dengan addcslashes("Halo", "a..z").',
      starterCode: `<?php
echo addcslashes("Halo", "a..z");
?>`,
      hint: 'Panggil addcslashes("Halo", "a..z").'
    },
    quiz: {
      question: 'Bagaimana cara menentukan rentang karakter alfabet kecil dari a sampai z pada parameter kedua `addcslashes()`?',
      options: [
        '`"a..z"`',
        '`"a-z"`',
        '`"a:z"`',
        '`"a=>z"`'
      ],
      correctIndex: 0,
      explanation: 'addcslashes menggunakan sintaks dua titik (a..z) untuk rentang karakter.'
    }
  },

  // 596. ADDSLASHES
  {
    id: 'php-ref-str-addslashes',
    title: 'PHP addslashes()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 596,
    overview: 'Kuasai fungsi addslashes(): meng-escape karakter tanda kutip tunggal (\'), tanda kutip ganda ("), backslash (\\), dan byte NULL dengan menambahkan backslash.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">QUOTE ESCAPING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 596 / 631</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧹 Escape Tanda Kutip (addslashes)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>addslashes(string $string): string</code> menambahkan backslash pada karakter <code>'</code>, <code>"</code>, <code>\\</code>, dan <code>NUL</code>. Kebalikannya adalah fungsi <code>stripslashes()</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$nama = "O'Connor berkata: \"PHP 8 itu keren!\"";
$escaped = addslashes($nama);

echo "<h3>Hasil Penggunaan addslashes():</h3>";
echo "<p>Input Asli : $nama</p>";
echo "<p>Terescape  : <strong style='color:#059669;'>$escaped</strong></p>";
?>`,
    codeExplanation: [
      'addslashes() mengubah O\'Connor menjadi O\\\'Connor untuk mencegah syntax error string.'
    ],
    challenge: {
      instruction: 'Escape string "It\'s fine" dengan addslashes.',
      starterCode: `<?php
echo addslashes("It's fine");
?>`,
      hint: 'Panggil addslashes.'
    },
    quiz: {
      question: 'Fungsi apakah yang merupakan kebalikan langsung untuk menghapus backslash yang dibuat oleh `addslashes()`?',
      options: [
        '`stripslashes()`',
        '`removeslashes()`',
        '`unslash()`',
        '`clean_slashes()`'
      ],
      correctIndex: 0,
      explanation: 'stripslashes() memulihkan string yang di-escape dengan addslashes.'
    }
  },

  // 597. BIN2HEX
  {
    id: 'php-ref-str-bin2hex',
    title: 'PHP bin2hex()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 597,
    overview: 'Kuasai fungsi bin2hex(): mengonversi string biner (atau string teks byte apa pun) menjadi representasi heksadesimal (Hex String Generator & Token Maker).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">HEX ENCODING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 597 / 631</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔢 Biner ke Heksadesimal (bin2hex)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>bin2hex(string $string): string</code> mengonversi setiap byte menjadi 2 karakter hex. Pola standar pembuatan token CSRF/Reset Password kriptografis: <code>bin2hex(random_bytes(32))</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Generator Token Kriptografis 64 Karakter Hex
$randomBytes = random_bytes(32);
$csrfToken = bin2hex($randomBytes);

echo "<h3>Pembuatan Token Keamanan via bin2hex(random_bytes(32)):</h3>";
echo "<p>Token CSRF : <strong style='color:#059669; word-break:break-all;'>$csrfToken</strong></p>";
echo "<p>Panjang    : " . strlen($csrfToken) . " karakter</p>";
?>`,
    codeExplanation: [
      'bin2hex(random_bytes(32)) menghasilkan 64 karakter string hex acak yang aman dari serangan brute-force.'
    ],
    challenge: {
      instruction: 'Ubah teks "PHP" ke heksadesimal dengan bin2hex("PHP").',
      starterCode: `<?php
echo "Hex: " . bin2hex("PHP");
?>`,
      hint: 'Panggil bin2hex("PHP").'
    },
    quiz: {
      question: 'Berapa panjang karakter string heksadesimal yang dihasilkan jika `bin2hex()` menerima input biner sebesar 16 byte?',
      options: [
        'Tepat `32 karakter` (setiap 1 byte menghasilkan 2 digit hex)',
        '16 karakter',
        '64 karakter',
        '8 karakter'
      ],
      correctIndex: 0,
      explanation: 'Setiap byte biner (8 bit) dikonversi menjadi 2 karakter heksadesimal (nibble tinggi & rendah).'
    }
  },

  // 598. CHOP
  {
    id: 'php-ref-str-chop',
    title: 'PHP chop() / rtrim()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 598,
    overview: 'Kuasai fungsi chop(): alias resmi dari rtrim() untuk memotong spasi putih, newline, atau karakter tertentu di ujung akhir kanan string.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">STRING TRIMMING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 598 / 631</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">✂️ Pangkas Kanan String (chop)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>chop(string $string, string $characters = " \\n\\r\\t\\v\\x00"): string</code> adalah alias identik dari <code>rtrim()</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$teks = "Halo Dunia!     ";
$bersih = chop($teks);

echo "<h3>Hasil Penggunaan chop():</h3>";
echo "<p>Sebelum : '$teks' (Panjang: " . strlen($teks) . ")</p>";
echo "<p>Sesudah : <strong style='color:#059669;'>'$bersih'</strong> (Panjang: " . strlen($bersih) . ")</p>";
?>`,
    codeExplanation: [
      'chop() membuang spasi kosong di sebelah kanan string.'
    ],
    challenge: {
      instruction: 'Pangkas tanda seru di ujung kanan string dengan chop("Halo!!!", "!").',
      starterCode: `<?php
echo chop("Halo!!!", "!");
?>`,
      hint: 'Panggil chop("Halo!!!", "!").'
    },
    quiz: {
      question: 'Fungsi utama apakah yang di-alias oleh fungsi `chop()` di PHP?',
      options: [
        '`rtrim()`',
        '`ltrim()`',
        '`trim()`',
        '`substr()`'
      ],
      correctIndex: 0,
      explanation: 'chop() adalah alias bawaan dari rtrim().'
    }
  },

  // 599. CHR
  {
    id: 'php-ref-str-chr',
    title: 'PHP chr()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 599,
    overview: 'Kuasai fungsi chr(): mengonversi kode bilangan bulat ASCII integer (0-255) menjadi satu karakter string (misal: 65 -> "A", 97 -> "a", 10 -> Newline).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ASCII CHAR</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 599 / 631</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔤 Konversi Kode ASCII ke Karakter (chr)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>chr(int $codepoint): string</code> mengembalikan 1 karakter string dari byte ASCII. Kebalikannya adalah fungsi <code>ord()</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Tabel Konversi ASCII chr():</h3>";
echo "<ul>";
echo "<li>chr(65) : <strong style='color:#059669;'>" . chr(65) . "</strong></li>";
echo "<li>chr(66) : <strong>" . chr(66) . "</strong></li>";
echo "<li>chr(97) : <strong style='color:#4f46e5;'>" . chr(97) . "</strong></li>";
echo "<li>chr(36) : <strong>" . chr(36) . "</strong> ($)</li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'chr(65) menghasilkan huruf besar "A", chr(97) menghasilkan huruf kecil "a".'
    ],
    challenge: {
      instruction: 'Cetak huruf "Z" menggunakan kode ASCII 90 dengan chr(90).',
      starterCode: `<?php
echo "Huruf: " . chr(90);
?>`,
      hint: 'Panggil chr(90).'
    },
    quiz: {
      question: 'Karakter apakah yang dihasilkan oleh pemanggilan `chr(65)`?',
      options: [
        'Huruf besar `"A"`',
        'Huruf kecil `"a"`',
        'Angka `"6"`',
        'Spasi'
      ],
      correctIndex: 0,
      explanation: '65 adalah nilai ASCII standar untuk huruf kapital A.'
    }
  },

  // 600. CHUNK_SPLIT
  {
    id: 'php-ref-str-chunk-split',
    title: 'PHP chunk_split()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 600,
    overview: 'Kuasai fungsi chunk_split(): memotong string menjadi potongan-potongan kecil berukuran tetap yang disisipkan karakter pemisah (misal format Base64 RFC 2045 atau format nomor rekening).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">STRING CHUNKER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 600 / 631</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧩 Memotong String per Potongan Tetap (chunk_split)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>chunk_split(string $string, int $length = 76, string $separator = "\\r\\n"): string</code> menyisipkan separator setiap <code>$length</code> karakter.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$nomorKartu = "1234567890123456";

// Format 4 digit per kelompok dipisahkan tanda strip '-'
$formatKartu = trim(chunk_split($nomorKartu, 4, '-'), '-');

echo "<h3>Hasil Penggunaan chunk_split():</h3>";
echo "<p>Nomor Mentah : $nomorKartu</p>";
echo "<p>Format Rapi  : <strong style='color:#059669; font-size:18px;'>$formatKartu</strong></p>";
?>`,
    codeExplanation: [
      'chunk_split($nomor, 4, "-") memecah 16 digit menjadi 1234-5678-9012-3456-.'
    ],
    challenge: {
      instruction: 'Bagi string "AABBCCDD" per 2 karakter dipisahkan spasi dengan chunk_split("AABBCCDD", 2, " ").',
      starterCode: `<?php
echo trim(chunk_split("AABBCCDD", 2, " "));
?>`,
      hint: 'Panggil chunk_split.'
    },
    quiz: {
      question: 'Berapakah nilai default parameter panjang potongan (`$length`) pada `chunk_split()` untuk memenuhi spesifikasi email Base64 RFC 2045?',
      options: [
        'Integer `76` karakter',
        'Integer `64` karakter',
        'Integer `80` karakter',
        'Integer `32` karakter'
      ],
      correctIndex: 0,
      explanation: 'Standar RFC 2045 Base64 MIME membatasi baris maksimal 76 karakter.'
    }
  },

  // 601. CONVERT_CYR_STRING
  {
    id: 'php-ref-str-convert-cyr-string',
    title: 'PHP convert_cyr_string() & iconv() / mb_convert_encoding()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 601,
    overview: 'Kuasai fungsi convert_cyr_string(): fungsi historis konversi set karakter Cyrillic (Rusia/Slavia) dan padanan modernnya via mb_convert_encoding() / iconv().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-600 text-white">CHARSET ENCODING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 601 / 631</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌐 Konversi Charset Karakter (mb_convert_encoding)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>convert_cyr_string()</code> telah didepresiasi di PHP 7.4 dan dihapus di PHP 8.0+. Pengembang modern wajib menggunakan <code>mb_convert_encoding(string $string, string $to_encoding, array|string|null $from_encoding = null)</code> untuk konversi UTF-8, Windows-1251, ISO-8859-1, dll.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$teksUtf8 = "Привет, мир! (Halo Dunia dalam Cyrillic)";

// Konversi modern menggunakan mb_convert_encoding
$teksIso = mb_convert_encoding($teksUtf8, 'UTF-8', 'auto');

echo "<h3>Standar Modern Konversi Encoding (mb_convert_encoding):</h3>";
echo "<p>Teks UTF-8: <strong style='color:#059669;'>$teksIso</strong></p>";
?>`,
    codeExplanation: [
      'mb_convert_encoding() adalah standar resmi PHP 8.x untuk konversi set karakter multi-bahasa.'
    ],
    challenge: {
      instruction: 'Pahami fungsi modern mb_convert_encoding.',
      starterCode: `<?php
echo mb_convert_encoding("Halo Dunia", "UTF-8", "auto");
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Fungsi apakah yang merupakan pengganti modern resmi untuk `convert_cyr_string()` di PHP 8.x?',
      options: [
        '`mb_convert_encoding()` atau `iconv()`',
        '`utf8_encode()`',
        '`str_convert()`',
        '`bin2hex()`'
      ],
      correctIndex: 0,
      explanation: 'mb_convert_encoding dan iconv adalah standar pengganti resmi untuk konversi encoding.'
    }
  },

  // 602. CONVERT_UUDECODE & CONVERT_UUENCODE
  {
    id: 'php-ref-str-convert-uuencode-decode',
    title: 'PHP convert_uuencode() & convert_uudecode()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 602,
    overview: 'Kuasai fungsi convert_uuencode() & convert_uudecode(): meng-encode string teks biner menjadi format uuencoded (Unix-to-Unix Encoding) dan mengembalikannya ke bentuk asli.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">UUENCODE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 602 / 631</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📦 Unix-to-Unix Encoding (uuencode / uudecode)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>convert_uuencode(string $string): string</code> mengonversi data ke format UUEncode (protokol transmisi file biner historis jaringan Usenet/Unix). <code>convert_uudecode(string $string): string|false</code> mengembalikannya ke teks/biner asli.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$teksAsli = "Belajar PHP di DevGrow!";

// 1. Encode ke UUEncode
$encoded = convert_uuencode($teksAsli);

// 2. Decode kembali ke Asli
$decoded = convert_uudecode($encoded);

echo "<h3>Hasil Pengujian convert_uuencode & convert_uudecode:</h3>";
echo "<p>Teks Asli   : <strong>$teksAsli</strong></p>";
echo "<p>UUEncoded   : <pre style='background:#0f172a; color:#38bdf8; padding:8px; border-radius:6px;'>$encoded</pre></p>";
echo "<p>Hasil Decode: <strong style='color:#059669;'>$decoded</strong></p>";
?>`,
    codeExplanation: [
      'convert_uuencode() membungkus teks dalam format UUEncode dengan padding baris Unix.'
    ],
    challenge: {
      instruction: 'Encode teks "Test" dengan convert_uuencode("Test").',
      starterCode: `<?php
$enc = convert_uuencode("Test");
echo convert_uudecode($enc);
?>`,
      hint: 'Panggil convert_uuencode dan convert_uudecode.'
    },
    quiz: {
      question: 'Fungsi apakah yang digunakan untuk memulihkan string yang di-encode oleh `convert_uuencode()`?',
      options: [
        '`convert_uudecode()`',
        '`base64_decode()`',
        '`urldecode()`',
        '`unserialize()`'
      ],
      correctIndex: 0,
      explanation: 'convert_uudecode adalah pasangan decoder dari convert_uuencode.'
    }
  },

  // 603. COUNT_CHARS
  {
    id: 'php-ref-str-count-chars',
    title: 'PHP count_chars()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 603,
    overview: 'Kuasai fungsi count_chars(): menghitung statistik frekuensi kemunculan setiap karakter byte ASCII di dalam string (Analisis Frekuensi Karakter).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CHARACTER FREQUENCY</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 603 / 631</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📊 Analisis Frekuensi Karakter (count_chars)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>count_chars(string $string, int $mode = 0): array|string</code> dengan <code>$mode = 1</code> mengembalikan array berisi pasangan <code>[kode_ASCII => jumlah_kemunculan]</code> untuk karakter yang frekuensinya lebih dari 0.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$kalimat = "devgrow learning management system";

// Mode 1: Ambil hanya karakter yang muncul (frekuensi > 0)
$frekuensi = count_chars($kalimat, 1);

echo "<h3>Frekuensi Karakter pada '$kalimat':</h3>";
echo "<ul>";
foreach ($frekuensi as $asciiCode => $jumlah) {
    echo "<li>Karakter '<strong>" . chr($asciiCode) . "</strong>' (ASCII $asciiCode) : <strong style='color:#059669;'>$jumlah kali</strong></li>";
}
echo "</ul>";
?>`,
    codeExplanation: [
      'count_chars($kalimat, 1) menghitung jumlah kemunculan setiap huruf unik di dalam string.'
    ],
    challenge: {
      instruction: 'Gunakan count_chars("hello", 1) untuk menghitung karakter.',
      starterCode: `<?php
$res = count_chars("hello", 1);
echo "Huruf l muncul: " . $res[ord('l')] . " kali";
?>`,
      hint: 'Akses $res[ord("l")].'
    },
    quiz: {
      question: 'Mode apakah pada `count_chars($str, $mode)` yang mengembalikan array hanya untuk karakter-karakter yang memiliki frekuensi kemunculan lebih besar dari 0?',
      options: [
        'Mode `1`',
        'Mode `0` (semua 256 byte ASCII)',
        'Mode `3` (string karakter unik)',
        'Mode `4`'
      ],
      correctIndex: 0,
      explanation: 'Mode 1 mengembalikan array asosiatif dengan indeks kode byte dan nilai frekuensi > 0.'
    }
  },

  // 604. CRC32
  {
    id: 'php-ref-str-crc32',
    title: 'PHP crc32()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 604,
    overview: 'Kuasai fungsi crc32(): menghitung nilai checksum polinomial 32-bit Cyclic Redundancy Check untuk validasi integritas data transmisi cepat & sharding integer hash.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CHECKSUM POLYNOMIAL</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 604 / 631</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧮 Checksum Integritas Data (crc32)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>crc32(string $string): int</code> menghasilkan integer 32-bit checksum. Sangat cepat untuk verifikasi integritas paket data atau sharding database <code>crc32($userId) % $totalShards</code>. Selalu gunakan <code>sprintf('%u', crc32($str))</code> untuk representasi unsigned 32-bit.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$pesan = "Data transaksi penting #89234";

$checksum = sprintf('%u', crc32($pesan));

echo "<h3>Hasil Penggunaan crc32():</h3>";
echo "<p>Pesan Teks : $pesan</p>";
echo "<p>CRC32 Checksum (Unsigned) : <strong style='color:#059669; font-size:18px;'>$checksum</strong></p>";
?>`,
    codeExplanation: [
      'crc32() menghitung checksum 32-bit berkecepatan tinggi.'
    ],
    challenge: {
      instruction: 'Hitung checksum "DevGrow" dengan sprintf("%u", crc32("DevGrow")).',
      starterCode: `<?php
echo "CRC32: " . sprintf("%u", crc32("DevGrow"));
?>`,
      hint: 'Panggil crc32.'
    },
    quiz: {
      question: 'Mengapa format `sprintf("%u", crc32($str))` sering digunakan saat memanggil `crc32()`?',
      options: [
        'Karena pada sistem 32-bit nilai crc32 bisa menghasilkan signed integer negatif, dan `%u` memastikan hasilnya selalu bilangan bulat positif unsigned',
        'Untuk mengubah menjadi huruf besar',
        'Untuk enkripsi password',
        'Agar menjadi string biner'
      ],
      correctIndex: 0,
      explanation: '%u memformat integer 32-bit menjadi unsigned desimal positif.'
    }
  },

  // 605. CRYPT
  {
    id: 'php-ref-str-crypt',
    title: 'PHP crypt() & password_hash()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 605,
    overview: 'Kuasai fungsi crypt(): fungsi one-way hashing string Unix klasik berbasis algoritma DES, Blowfish ($2y$), SHA-256 ($5$), SHA-512 ($6$) serta padanan modernnya password_hash().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ONE-WAY HASHING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 605 / 631</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔒 Hashing Satu Arah (crypt)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>crypt(string $string, string $salt): string</code> mengembalikan hash string satu arah. Di PHP modern, <code>password_hash()</code> dan <code>password_verify()</code> menggunakan algoritma Bcrypt / Argon2id yang dibangun di atas fondasi <code>crypt()</code> dengan salt otomatis yang jauh lebih aman.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$password = "RahasiaP@ssw0rd123";

// Hashing menggunakan standar modern PHP 8.x
$hashModern = password_hash($password, PASSWORD_BCRYPT);
$isMatch = password_verify($password, $hashModern);

echo "<h3>Hasil Pengujian Password Hashing (Bcrypt):</h3>";
echo "<p>Password Asli : $password</p>";
echo "<p>Hash Bcrypt   : <strong style='color:#059669; word-break:break-all;'>$hashModern</strong></p>";
echo "<p>Verifikasi    : " . ($isMatch ? "<strong style='color:green;'>✓ Password Valid Cocok!</strong>" : "Salah") . "</p>";
?>`,
    codeExplanation: [
      'crypt() adalah fondasi algoritma hashing Unix.',
      'password_hash($pass, PASSWORD_BCRYPT) adalah standar terbaik untuk menyimpan password di database.'
    ],
    challenge: {
      instruction: 'Pahami fungsi hashing password dengan password_hash.',
      starterCode: `<?php
$hash = password_hash("admin123", PASSWORD_DEFAULT);
echo password_verify("admin123", $hash) ? "Valid" : "Invalid";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Algoritma hashing apakah yang direkomendasikan untuk keamanan password pengguna di PHP modern?',
      options: [
        '`PASSWORD_BCRYPT` atau `PASSWORD_ARGON2ID`',
        '`md5()`',
        '`sha1()`',
        '`crc32()`'
      ],
      correctIndex: 0,
      explanation: 'Bcrypt dan Argon2id adalah standar aman yang tahan terhadap serangan GPU cracking.'
    }
  },

  // 606. ECHO
  {
    id: 'php-ref-str-echo',
    title: 'PHP echo',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 606,
    overview: 'Kuasai konstruksi bahasa echo: konstruksi output paling fundamental dan tercepat di PHP untuk mencetak satu atau lebih string ke browser (termasuk shorthand <?= ?>).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">CORE OUTPUT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 606 / 631</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📢 Output Teks Fundamental (echo)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>echo</code> adalah konstruksi bahasa (bukan fungsi biasa) yang dapat mencetak banyak argumen yang dipisahkan oleh tanda koma: <code>echo "Satu", " ", "Dua";</code>. Shorthand <code>&lt;?= $var ?&gt;</code> adalah tag template resmi untuk <code>&lt;?php echo $var; ?&gt;</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$nama = "Rahmat Fadila";
$role = "Instructor";

echo "<h3>Hasil Penggunaan echo:</h3>";
echo "<p>Pengguna: <strong style='color:#059669;'>", $nama, "</strong> (Role: ", $role, ")</p>";
?>`,
    codeExplanation: [
      'echo mendukung multi-argumen dipisahkan koma tanpa overhead konkatenasi titik (.) string.'
    ],
    challenge: {
      instruction: 'Cetak "Hello World" menggunakan echo.',
      starterCode: `<?php
echo "Hello World";
?>`,
      hint: 'Panggil echo.'
    },
    quiz: {
      question: 'Manakah penulisan tag shorthand PHP yang ekuivalen persis dengan `<?php echo $judul; ?>` di dalam file template HTML?',
      options: [
        '`<?= $judul ?>`',
        '`<?: $judul ?>`',
        '`<# $judul #>`',
        '`<% $judul %>`'
      ],
      correctIndex: 0,
      explanation: '<?= $var ?> adalah shorthand resmi PHP untuk echo.'
    }
  }
];

module.exports = phpPart55RefString1;
