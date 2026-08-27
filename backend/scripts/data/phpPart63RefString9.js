// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (STRING PART 9: 687-695)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart63RefString9 = [
  // 687. SUBSTR_COUNT
  {
    id: 'php-ref-str-substr-count-full',
    title: 'PHP substr_count()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 687,
    overview: 'Kuasai fungsi substr_count(): menghitung berapa kali sebuah substring muncul di dalam string utama (Keyword Density Counter).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SUBSTRING FREQUENCY</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 687 / 695</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔢 Menghitung Frekuensi Kata (substr_count)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>substr_count(string $haystack, string $needle, int $offset = 0, ?int $length = null): int</code> menghitung berapa kali kata <code>$needle</code> muncul di dalam teks dokumen.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$paragraf = "PHP adalah bahasa backend populer. Belajar PHP di DevGrow membuat PHP terasa menyenangkan.";

$totalPhp = substr_count($paragraf, "PHP");

echo "<h3>Hasil Penggunaan substr_count():</h3>";
echo "<p>Kata 'PHP' muncul sebanyak: <strong style='color:#059669; font-size:18px;'>$totalPhp kali</strong></p>";
?>`,
    codeExplanation: [
      'substr_count($paragraf, "PHP") menghitung bahwa kata "PHP" muncul tepat 3 kali.'
    ],
    challenge: {
      instruction: 'Hitung berapa kali huruf "o" muncul pada "Google" dengan substr_count("Google", "o").',
      starterCode: `<?php
echo "Jumlah 'o': " . substr_count("Google", "o");
?>`,
      hint: 'Panggil substr_count("Google", "o").'
    },
    quiz: {
      question: 'Berapakah nilai yang dikembalikan oleh `substr_count("ab_ab_ab", "ab")`?',
      options: [
        'Integer `3`',
        'Integer `2`',
        'Integer `1`',
        'Boolean `true`'
      ],
      correctIndex: 0,
      explanation: 'Pola "ab" muncul 3 kali.'
    }
  },

  // 688. SUBSTR_REPLACE
  {
    id: 'php-ref-str-substr-replace',
    title: 'PHP substr_replace()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 688,
    overview: 'Kuasai fungsi substr_replace(): mengganti bagian tertentu dari string pada posisi offset dan panjang karakter spesifik (Credit Card & Phone Masker).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SUBSTRING REPLACER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 688 / 695</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎭 Masking Data Sensitif (substr_replace)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>substr_replace(array|string $string, array|string $replace, array|int $offset, array|int|null $length = null): array|string</code> menimpa bagian substring dengan teks pengganti. Sangat ideal untuk sensor nomor telepon atau kartu kredit (misal: <code>0812****890</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$noHp = "081234567890";

// Sensor 6 digit di tengah mulai indeks ke-4 sepanjang 6 karakter
$noHpSensor = substr_replace($noHp, "******", 4, 6);

echo "<h3>Hasil Penggunaan substr_replace() (Masking Nomor HP):</h3>";
echo "<p>Nomor HP Asli   : $noHp</p>";
echo "<p>Nomor Tersensor : <strong style='color:#059669; font-size:18px;'>$noHpSensor</strong></p>";
?>`,
    codeExplanation: [
      'substr_replace($noHp, "******", 4, 6) mengubah "081234567890" menjadi "0812******90".'
    ],
    challenge: {
      instruction: 'Ganti 4 huruf terakhir dari "User1234" menjadi "XXXX" dengan substr_replace.',
      starterCode: `<?php
echo substr_replace("User1234", "XXXX", -4);
?>`,
      hint: 'Panggil substr_replace("User1234", "XXXX", -4).'
    },
    quiz: {
      question: 'Berapakah string yang dihasilkan oleh `substr_replace("Halo Dunia", "PHP", 5, 5)`?',
      options: [
        'String `"Halo PHP"`',
        'String `"Halo Dunia PHP"`',
        'String `"PHP Dunia"`',
        'Error'
      ],
      correctIndex: 0,
      explanation: 'Indeks 5 sepanjang 5 karakter ("Dunia") digantikan oleh "PHP" menjadi "Halo PHP".'
    }
  },

  // 689. TRIM
  {
    id: 'php-ref-str-trim-detail',
    title: 'PHP trim()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 689,
    overview: 'Kuasai fungsi trim(): memotong spasi putih, newline, tab, dan karakter yang tidak diinginkan dari KEDUA sisi (kiri dan kanan) string (Form Input Sanitizer).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">INPUT SANITIZER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 689 / 695</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">✂️ Pangkas Spasi Dua Arah (trim)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>trim(string $string, string $characters = " \\n\\r\\t\\v\\x00"): string</code> membuang whitespace di awal dan akhir string secara bersamaan.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$inputUser = "   \n\t Rahmat Fadila \r\n   ";

$namaBersih = trim($inputUser);

echo "<h3>Hasil Penggunaan trim():</h3>";
echo "<p>Panjang Sebelum: " . strlen($inputUser) . " karakter</p>";
echo "<p>Panjang Sesudah: " . strlen($namaBersih) . " karakter</p>";
echo "<p>Nama Bersih    : <strong style='color:#059669;'>'$namaBersih'</strong></p>";
?>`,
    codeExplanation: [
      'trim() membuang seluruh karakter spasi liar, newline, dan tab di kedua ujung string.'
    ],
    challenge: {
      instruction: 'Bersihkan spasi di kedua ujung "   PHP 8   " dengan trim.',
      starterCode: `<?php
echo trim("   PHP 8   ");
?>`,
      hint: 'Panggil trim("   PHP 8   ").'
    },
    quiz: {
      question: 'Karakter default apa sajakah yang dibersihkan oleh `trim()` jika parameter `$characters` tidak diisi?',
      options: [
        'Spasi biasa (`" "`), tab (`"\\t"`), newline (`"\\n"`), carriage return (`"\\r"`), NUL-byte (`"\\0"`), dan vertical tab (`"\\v"`)\'',
        'Hanya spasi biasa saja',
        'Semua karakter alfabet',
        'Tanda baca'
      ],
      correctIndex: 0,
      explanation: 'trim mencakup semua variasi karakter whitespace standar RFC.'
    }
  },

  // 690. UCFIRST
  {
    id: 'php-ref-str-ucfirst',
    title: 'PHP ucfirst()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 690,
    overview: 'Kuasai fungsi ucfirst(): mengubah karakter pertama dari string menjadi huruf besar (Upper Case First).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CAPITALIZE FIRST</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 690 / 695</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔤 Huruf Pertama Menjadi Kapital (ucfirst)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ucfirst(string $string): string</code> mengubah huruf pertama menjadi kapital (misal: <code>"administrator"</code> -> <code>"Administrator"</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$role = "instructor";

$roleTampil = ucfirst($role);

echo "<h3>Hasil Penggunaan ucfirst():</h3>";
echo "<p>Role Mentah : <code>$role</code></p>";
echo "<p>Role Tampil : <strong style='color:#059669;'>$roleTampil</strong></p>";
?>`,
    codeExplanation: [
      'ucfirst("instructor") menghasilkan "Instructor".'
    ],
    challenge: {
      instruction: 'Ubah huruf pertama "devgrow" menjadi kapital dengan ucfirst("devgrow").',
      starterCode: `<?php
echo ucfirst("devgrow");
?>`,
      hint: 'Panggil ucfirst("devgrow").'
    },
    quiz: {
      question: 'Berapakah string yang dihasilkan oleh `ucfirst("hello world")`?',
      options: [
        'String `"Hello world"` (hanya huruf pertama dari seluruh string)',
        'String `"Hello World"`',
        'String `"HELLO WORLD"`',
        'String `"hello World"`'
      ],
      correctIndex: 0,
      explanation: 'ucfirst hanya mengkapitalkan 1 karakter pertama di awal string kalimat.'
    }
  },

  // 691. UCWORDS
  {
    id: 'php-ref-str-ucwords',
    title: 'PHP ucwords()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 691,
    overview: 'Kuasai fungsi ucwords(): mengubah karakter pertama dari SETIAP KATA dalam string menjadi huruf besar (Title Case Formatter).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TITLE CASE FORMATTER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 691 / 695</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔠 Format Judul / Title Case (ucwords)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ucwords(string $string, string $separators = " \\t\\r\\n\\f\\v"): string</code> mengkapitalkan huruf awal setiap kata (misal: <code>"rahmat fadila"</code> -> <code>"Rahmat Fadila"</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$namaLengkap = "rahmat fadila, s.kom., m.cs.";

// Format Title Case
$namaRapi = ucwords(strtolower($namaLengkap));

echo "<h3>Hasil Penggunaan ucwords():</h3>";
echo "<p>Nama Input : $namaLengkap</p>";
echo "<p>Title Case : <strong style='color:#059669; font-size:18px;'>$namaRapi</strong></p>";
?>`,
    codeExplanation: [
      'ucwords("rahmat fadila...") mengubah setiap awalan kata menjadi huruf besar.'
    ],
    challenge: {
      instruction: 'Ubah "belajar php di devgrow" ke title case dengan ucwords.',
      starterCode: `<?php
echo ucwords("belajar php di devgrow");
?>`,
      hint: 'Panggil ucwords("belajar php di devgrow").'
    },
    quiz: {
      question: 'Berapakah string yang dihasilkan oleh `ucwords("belajar php modern")`?',
      options: [
        'String `"Belajar Php Modern"`',
        'String `"Belajar php modern"`',
        'String `"BELAJAR PHP MODERN"`',
        'Error'
      ],
      correctIndex: 0,
      explanation: 'ucwords mengkapitalkan huruf awal dari setiap kata di dalam kalimat.'
    }
  },

  // 692. VFPRINTF
  {
    id: 'php-ref-str-vfprintf',
    title: 'PHP vfprintf()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 692,
    overview: 'Kuasai fungsi vfprintf(): menulis string berformat ke stream file pointer di mana nilai argumen format diberikan dalam bentuk array tunggal.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ARRAY FILE STREAM</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 692 / 695</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📄 Format File Stream dari Array (vfprintf)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>vfprintf(resource $stream, string $format, array $values): int</code> bekerja seperti <code>fprintf()</code> namun menerima array nilai <code>$values</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$stream = fopen("php://memory", "r+");
$data = ["PHP 8.3", 2026, 99.5];

vfprintf($stream, "Versi: %s | Tahun: %d | Skor: %01.1f%%\n", $data);

rewind($stream);
$hasil = stream_get_contents($stream);
fclose($stream);

echo "<h3>Hasil Penggunaan vfprintf():</h3>";
echo "<pre style='background:#0f172a; color:#38bdf8; padding:12px; border-radius:8px;'>";
echo htmlspecialchars($hasil);
echo "</pre>";
?>`,
    codeExplanation: [
      'vfprintf() memudahkan penulisan data berformat dinamis dari array ke file pointer.'
    ],
    challenge: {
      instruction: 'Pahami fungsi vfprintf.',
      starterCode: `<?php
echo "vfprintf menulis format ke file stream menggunakan array argumen.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Apa perbedaan antara `fprintf()` dan `vfprintf()`?',
      options: [
        '`fprintf()` menerima argumen variadik terpisah (`...$values`), sedangkan `vfprintf()` menerima sekumpulan nilai dalam satu variabel `array $values`',
        '`vfprintf` lebih lambat',
        'Keduanya identik',
        '`vfprintf` hanya untuk biner'
      ],
      correctIndex: 0,
      explanation: 'Prefiks "v" menandakan penerimaan array nilai argumen format.'
    }
  },

  // 693. VPRINTF
  {
    id: 'php-ref-str-vprintf',
    title: 'PHP vprintf()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 693,
    overview: 'Kuasai fungsi vprintf(): memformat dan langsung mencetak string ke output browser di mana argumen format disuplai dalam bentuk array.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ARRAY PRINTF</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 693 / 695</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🖨️ Cetak Teks Berformat dari Array (vprintf)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>vprintf(string $format, array $values): int</code> mencetak langsung ke output buffer menggunakan array argumen.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$dataProduk = ["MacBook Air M3", 18500000, 10];

echo "<h3>Hasil Penggunaan vprintf():</h3>";
vprintf("<p>Produk: <strong style='color:#059669;'>%s</strong> | Harga: Rp %d | Stok: %d unit</p>", $dataProduk);
?>`,
    codeExplanation: [
      'vprintf() langsung memetakan elemen array ke %s dan %d pada template format.'
    ],
    challenge: {
      instruction: 'Cetak format dengan vprintf("%s: %d", ["Skor", 100]).',
      starterCode: `<?php
vprintf("%s: %d", ["Skor", 100]);
?>`,
      hint: 'Panggil vprintf("%s: %d", ["Skor", 100]).'
    },
    quiz: {
      question: 'Berapakah jumlah karakter output yang dikembalikan oleh return value dari fungsi `vprintf()`?',
      options: [
        'Integer panjang total string yang berhasil dicetak',
        'Boolean `true`',
        'Array nilai',
        '`null`'
      ],
      correctIndex: 0,
      explanation: 'vprintf mengembalikan panjang integer karakter yang berhasil dicetak.'
    }
  },

  // 694. VSPRINTF
  {
    id: 'php-ref-str-vsprintf',
    title: 'PHP vsprintf()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 694,
    overview: 'Kuasai fungsi vsprintf(): memformat string menggunakan array argumen dan MENGEMBALIKANNYA sebagai string (Intl Message Formatter & Query Builder).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">ARRAY SPRINTF</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 694 / 695</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏗️ String Formatter Berbasis Array (vsprintf)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>vsprintf(string $format, array $values): string</code> mengembalikan string hasil format dari array argumen. Sangat esensial untuk sistem lokalisasi multibahasa (i18n) atau query logger.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Sistem Pesan Internasionalisasi (i18n)
$templatePesan = "Pengguna %s telah berhasil menyelesaikan modul %s dengan skor %d%%.";
$parameter = ["Rahmat Fadila", "PHP 8 OOP Reference", 100];

$pesanLengkap = vsprintf($templatePesan, $parameter);

echo "<h3>Hasil Penggunaan vsprintf():</h3>";
echo "<p><strong style='color:#059669; font-size:18px;'>$pesanLengkap</strong></p>";
?>`,
    codeExplanation: [
      'vsprintf($template, $parameter) menghasilkan pesan terformat dari array dinamis.'
    ],
    challenge: {
      instruction: 'Susun string dari array dengan vsprintf("ID: %s-%04d", ["USER", 42]).',
      starterCode: `<?php
echo vsprintf("ID: %s-%04d", ["USER", 42]);
?>`,
      hint: 'Panggil vsprintf.'
    },
    quiz: {
      question: 'Apa keuntungan menggunakan `vsprintf()` dibandingkan `sprintf()` ketika jumlah dan daftar parameter didapatkan secara dinamis dari database atau payload API?',
      options: [
        'Karena `vsprintf()` dapat menerima langsung variabel array `$params` tanpa perlu memecahnya (unpacking `...$params`)',
        'Karena vsprintf lebih cepat 100x',
        'Karena sprintf tidak mendukung string',
        'Keduanya identik'
      ],
      correctIndex: 0,
      explanation: 'vsprintf menerima array langsung sebagai wadah parameter format.'
    }
  },

  // 695. WORDWRAP
  {
    id: 'php-ref-str-wordwrap',
    title: 'PHP wordwrap() & Complete String Master',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 695,
    overview: 'Kuasai fungsi wordwrap(): membungkus string kalimat panjang menjadi baris-baris berukuran kolom tetap (misal 75 karakter) tanpa memotong kata di tengah-tengah & rekapitulasi tuntas kurikulum PHP String.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">STRING WORDWRAP</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 695 / 695</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📰 Pembungkus Baris Teks (wordwrap) & PHP String Complete</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>wordwrap(string $string, int $width = 75, string $break = "\\n", bool $cut_long_words = false): string</code> memecah teks panjang menjadi baris-baris rapi selebar <code>$width</code> karakter (sangat penting untuk format teks email CLI atau faktur struk printer thermal kasir).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$paragraf = "Platform DevGrow LMS menyediakan kurikulum terlengkap pengembangan software modern dari level pemula hingga tingkat lanjut dengan panduan interaktif.";

// Bungkus kalimat per 35 karakter dipisahkan tag <br>\n
$paragrafRapi = wordwrap($paragraf, 35, "<br>\n", false);

echo "<h3>Hasil Penggunaan wordwrap() (Kolom 35 Karakter):</h3>";
echo "<div style='background:#f8fafc; padding:16px; border-left:4px solid #059669; border-radius:8px; font-family:monospace; line-height:1.6;'>";
echo $paragrafRapi;
echo "</div>";
echo "<p style='color:green; font-weight:bold; margin-top:12px;'>🎉 Selamat! Seluruh referensi PHP String Reference (667 - 695) telah selesai secara paripurna!</p>";
?>`,
    codeExplanation: [
      'wordwrap($paragraf, 35, "<br>\\n") membagi baris pada spasi terdekat tanpa memotong kata.'
    ],
    challenge: {
      instruction: 'Bungkus teks per 10 karakter dengan wordwrap("Satu dua tiga empat", 10, "\\n").',
      starterCode: `<?php
echo wordwrap("Satu dua tiga empat", 10, "\n");
?>`,
      hint: 'Panggil wordwrap.'
    },
    quiz: {
      question: 'Apa efek dari parameter `$cut_long_words = true` pada pemanggilan `wordwrap($str, $width, "\\n", true)`?',
      options: [
        'Jika ada satu kata yang panjangnya melebihi `$width` (seperti URL sangat panjang), kata tersebut akan dipotong paksa tepat pada batas `$width`',
        'Menghapus kata yang panjang',
        'Mengubah kata menjadi huruf kapital',
        'Mengabaikan kata tersebut'
      ],
      correctIndex: 0,
      explanation: 'cut_long_words = true memaksa pemotongan kata di tengah jika panjang kata melebihi lebar kolom.'
    }
  }
];

module.exports = phpPart63RefString9;
