// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (STRING PART 2: 607-619)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart56RefString2 = [
  // 607. EXPLODE
  {
    id: 'php-ref-str-explode',
    title: 'PHP explode()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 607,
    overview: 'Kuasai fungsi explode(): memecah string menjadi array berdasarkan string delimiter pemisah (String Tokenizer & CSV Parser).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">STRING SPLITTER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 607 / 631</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">✂️ Memecah String Jadi Array (explode)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>explode(string $separator, string $string, int $limit = PHP_INT_MAX): array</code> memisahkan teks setiap kali menemukan karakter <code>$separator</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$hobiCsv = "Coding, Membaca, Desain, Gaming";
$daftarHobi = array_map('trim', explode(',', $hobiCsv));

echo "<h3>Hasil Penggunaan explode():</h3>";
echo "<ol>";
foreach ($daftarHobi as $hobi) {
    echo "<li><strong style='color:#059669;'>$hobi</strong></li>";
}
echo "</ol>";
?>`,
    codeExplanation: [
      'explode(",", $hobiCsv) memecah teks CSV menjadi array 4 elemen.'
    ],
    challenge: {
      instruction: 'Pecah email "user@domain.com" dengan explode("@", $email).',
      starterCode: `<?php
$parts = explode("@", "user@domain.com");
echo "User: " . $parts[0] . " | Domain: " . $parts[1];
?>`,
      hint: 'Panggil explode("@", "user@domain.com").'
    },
    quiz: {
      question: 'Apa yang dikembalikan oleh `explode()` jika string delimiter `$separator` tidak ditemukan di dalam `$string`?',
      options: [
        'Array yang berisi 1 elemen berupa string `$string` itu sendiri',
        'Array kosong `[]`',
        'Boolean `false`',
        '`null`'
      ],
      correctIndex: 0,
      explanation: 'Jika delimiter tidak ada, explode menghasilkan array berisi 1 elemen teks utuh.'
    }
  },

  // 608. FPRINT / FPRINTF
  {
    id: 'php-ref-str-fprintf',
    title: 'PHP fprintf()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 608,
    overview: 'Kuasai fungsi fprintf(): menulis string berformat (format string %s, %d, %f) langsung ke stream file pointer yang terbuka.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">FORMATTED FILE STREAM</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 608 / 631</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📄 Menulis String Berformat ke Stream (fprintf)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>fprintf(resource $stream, string $format, mixed ...$values): int</code> menulis langsung teks berformat ke stream file descriptor atau output stream.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$stream = fopen("php://memory", "r+");

// Tulis data terformat ke stream
fprintf($stream, "Item: %s | Harga: Rp %01.2f | Qty: %d\n", "Buku PHP 8", 250000.5, 3);

rewind($stream);
$hasil = stream_get_contents($stream);
fclose($stream);

echo "<h3>Hasil Penggunaan fprintf():</h3>";
echo "<pre style='background:#0f172a; color:#38bdf8; padding:12px; border-radius:8px;'>";
echo htmlspecialchars($hasil);
echo "</pre>";
?>`,
    codeExplanation: [
      'fprintf() memadukan kemampuan format printf dengan penulisan langsung ke file pointer.'
    ],
    challenge: {
      instruction: 'Pahami fungsi fprintf.',
      starterCode: `<?php
$fp = fopen("php://temp", "w+");
fprintf($fp, "Total: %d", 100);
fclose($fp);
echo "Written.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Apa perbedaan antara `printf()` dan `fprintf()`?',
      options: [
        '`printf()` mencetak langsung ke output browser/console, sedangkan `fprintf()` menulis ke stream resource file yang ditentukan',
        '`fprintf` lebih lambat',
        'Keduanya identik',
        '`fprintf` hanya untuk float'
      ],
      correctIndex: 0,
      explanation: 'fprintf membutuhkan argumen stream resource file pointer pertama.'
    }
  },

  // 609. GET_HTML_TRANSLATION_TABLE
  {
    id: 'php-ref-str-get-html-translation-table',
    title: 'PHP get_html_translation_table()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 609,
    overview: 'Kuasai fungsi get_html_translation_table(): mendapatkan tabel translasi entitas HTML yang digunakan secara internal oleh htmlspecialchars() dan htmlentities().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">HTML TRANSLATION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 609 / 631</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📋 Tabel Entitas HTML (get_html_translation_table)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>get_html_translation_table(int $table = HTML_SPECIALCHARS, int $flags = ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML401, string $encoding = "UTF-8"): array</code> mengembalikan array pemetaan karakter simbol ke kode entitas HTML.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$tabel = get_html_translation_table(HTML_SPECIALCHARS, ENT_QUOTES);

echo "<h3>Tabel Konversi htmlspecialchars (ENT_QUOTES):</h3>";
echo "<table border='1' cellpadding='6' style='border-collapse:collapse;'>";
echo "<tr style='background:#e0e7ff;'><th>Karakter Asli</th><th>Entitas HTML</th></tr>";
foreach ($tabel as $char => $entity) {
    echo "<tr><td><code>" . htmlspecialchars($char) . "</code></td><td><strong style='color:#059669;'>$entity</strong></td></tr>";
}
echo "</table>";
?>`,
    codeExplanation: [
      'Tabel menunjukkan bagaimana < diubah ke &lt;, > ke &gt;, & ke &amp;, " ke &quot;, dan \' ke &#039;.'
    ],
    challenge: {
      instruction: 'Ambil tabel translasi HTML_SPECIALCHARS dengan get_html_translation_table().',
      starterCode: `<?php
$tbl = get_html_translation_table(HTML_SPECIALCHARS);
echo "Total entitas dasar: " . count($tbl);
?>`,
      hint: 'Panggil get_html_translation_table().'
    },
    quiz: {
      question: 'Tabel manakah yang berisi pemetaan ratusan entitas simbol lengkap (seperti `&copy;`, `&euro;`, `&trade;`)?',
      options: [
        '`HTML_ENTITIES`',
        '`HTML_SPECIALCHARS`',
        '`HTML_TAGS`',
        '`HTML_CHARS`'
      ],
      correctIndex: 0,
      explanation: 'Konstanta HTML_ENTITIES mencakup seluruh entitas HTML lengkap.'
    }
  },

  // 610. HEBREW & HEBREVC
  {
    id: 'php-ref-str-hebrev-hebrevc',
    title: 'PHP hebrev() & hebrevc()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 610,
    overview: 'Kuasai fungsi hebrev() & hebrevc(): mengonversi teks berarah kanan-ke-kiri (Right-to-Left / RTL) bahasa Ibrani ke teks visual kiri-ke-kanan untuk peramban teks.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">RTL BIDIRECTIONAL</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 610 / 631</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🇮🇱 Konversi Teks Right-to-Left (hebrev)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>hebrev(string $string, int $max_chars_per_line = 0): string</code> mengubah urutan logika teks RTL menjadi urutan visual LTR. <code>hebrevc()</code> juga otomatis mengonversi baris baru <code>\n</code> menjadi tag <code>&lt;br&gt;\n</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Fungsi Pemrosesan Teks Right-to-Left (RTL):</h3>";
echo "<ul>";
echo "<li><code>hebrev(\$str)</code>: Mengonversi teks logikal Ibrani ke teks visual LTR.</li>";
echo "<li><code>hebrevc(\$str)</code>: Mengonversi teks visual dan menyisipkan &lt;br&gt; pada setiap baris baru.</li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'hebrev() memfasilitasi rendering teks bidirectional Ibrani pada legacy output terminal.'
    ],
    challenge: {
      instruction: 'Pahami fungsi hebrev.',
      starterCode: `<?php
echo "hebrev() memproses teks arah RTL.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Apa perbedaan antara `hebrev()` dan `hebrevc()`?',
      options: [
        '`hebrevc()` otomatis mengonversi newline `\n` menjadi tag `<br />\n`, sedangkan `hebrev()` tidak',
        '`hebrev()` untuk bahasa Arab',
        'Keduanya identik',
        '`hebrevc()` mengenkripsi teks'
      ],
      correctIndex: 0,
      explanation: 'Huruf "c" pada hebrevc menandakan penambahan konversi newline ke tag <br>.'
    }
  },

  // 611. HEX2BIN
  {
    id: 'php-ref-str-hex2bin',
    title: 'PHP hex2bin()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 611,
    overview: 'Kuasai fungsi hex2bin(): mengonversi string heksadesimal kembali menjadi format string biner murni (kebalikan dari bin2hex()).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">HEX DECODING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 611 / 631</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔄 Heksadesimal ke Biner (hex2bin)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>hex2bin(string $string): string|false</code> membaca representasi hex (misal <code>"48656c6c6f"</code>) dan mengonversinya kembali menjadi teks/biner asli (<code>"Hello"</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$hexString = "44657647726f77204c4d53"; // Hex untuk "DevGrow LMS"

$teksAsli = hex2bin($hexString);

echo "<h3>Hasil Penggunaan hex2bin():</h3>";
echo "<p>String Hex  : <code>$hexString</code></p>";
echo "<p>Teks Pulih  : <strong style='color:#059669; font-size:18px;'>$teksAsli</strong></p>";
?>`,
    codeExplanation: [
      'hex2bin("446576...") mendekode pasangan hex ke karakter aslinya.'
    ],
    challenge: {
      instruction: 'Ubah hex "504850" ke teks dengan hex2bin("504850").',
      starterCode: `<?php
echo hex2bin("504850");
?>`,
      hint: 'Panggil hex2bin("504850").'
    },
    quiz: {
      question: 'Teks apakah yang dihasilkan oleh pemanggilan `hex2bin("504850")`?',
      options: [
        'String `"PHP"`',
        'String `"504850"`',
        'Angka 504850',
        'Boolean true'
      ],
      correctIndex: 0,
      explanation: '50=P, 48=H, 50=P dalam heksadesimal ASCII.'
    }
  },

  // 612. HTML_ENTITY_DECODE
  {
    id: 'php-ref-str-html-entity-decode',
    title: 'PHP html_entity_decode()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 612,
    overview: 'Kuasai fungsi html_entity_decode(): mengonversi semua entitas HTML (seperti &copy;, &euro;, &amp;) kembali menjadi karakter aslinya.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">HTML DECODER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 612 / 631</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔓 Decode Entitas HTML (html_entity_decode)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>html_entity_decode(string $string, int $flags = ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML401, ?string $encoding = null): string</code> membalikkan hasil dari <code>htmlentities()</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$htmlEncoded = "&copy; 2026 DevGrow LMS &euro; 50 &amp; &quot;Master&quot;";
$decoded = html_entity_decode($htmlEncoded, ENT_QUOTES, 'UTF-8');

echo "<h3>Hasil Penggunaan html_entity_decode():</h3>";
echo "<p>Sebelum : <code>" . htmlspecialchars($htmlEncoded) . "</code></p>";
echo "<p>Sesudah : <strong style='color:#059669;'>$decoded</strong></p>";
?>`,
    codeExplanation: [
      'html_entity_decode() mengonversi &copy; menjadi simbol © dan &euro; menjadi simbol €.'
    ],
    challenge: {
      instruction: 'Decode "&copy; 2026" dengan html_entity_decode("&copy; 2026").',
      starterCode: `<?php
echo html_entity_decode("&copy; 2026");
?>`,
      hint: 'Panggil html_entity_decode.'
    },
    quiz: {
      question: 'Fungsi apakah yang merupakan kebalikan dari `html_entity_decode()`?',
      options: [
        '`htmlentities()`',
        '`htmlspecialchars()`',
        '`urlencode()`',
        '`strip_tags()`'
      ],
      correctIndex: 0,
      explanation: 'htmlentities() adalah pasangan encoder dari html_entity_decode().'
    }
  },

  // 613. HTMLENTITIES
  {
    id: 'php-ref-str-htmlentities',
    title: 'PHP htmlentities()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 613,
    overview: 'Kuasai fungsi htmlentities(): mengonversi SEMUA karakter yang memiliki padanan entitas HTML (termasuk huruf beraksen, simbol mata uang €, ©, ®) menjadi kode entitas HTML.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ALL HTML ENTITIES</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 613 / 631</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛡️ Konversi Semua Simbol ke Entitas (htmlentities)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>htmlentities(string $string, int $flags = ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML401, ?string $encoding = null, bool $double_encode = true): string</code> mengonversi seluruh karakter khusus ke entitas HTML.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$teksSimbol = "© 2026 DevGrow • Harga: €50 & 'Diskon'";
$encoded = htmlentities($teksSimbol, ENT_QUOTES, 'UTF-8');

echo "<h3>Hasil Penggunaan htmlentities():</h3>";
echo "<p>Hasil Entity : <strong style='color:#059669;'>" . nl2br(htmlspecialchars($encoded)) . "</strong></p>";
?>`,
    codeExplanation: [
      'htmlentities() mengonversi simbol copyright © menjadi &copy; dan euro € menjadi &euro;.'
    ],
    challenge: {
      instruction: 'Ubah "© DevGrow" ke entitas HTML dengan htmlentities("© DevGrow").',
      starterCode: `<?php
echo htmlentities("© DevGrow");
?>`,
      hint: 'Panggil htmlentities.'
    },
    quiz: {
      question: 'Apa perbedaan utama antara `htmlspecialchars()` dan `htmlentities()`?',
      options: [
        '`htmlspecialchars()` hanya mengonversi 5 karakter penting (`<`, `>`, `&`, `"`, `\'`), sedangkan `htmlentities()` mengonversi SELURUH karakter yang memiliki padanan entitas HTML (seperti `©`, `€`, `é`)',
        '`htmlentities` lebih lambat 1000x',
        'Keduanya identik',
        '`htmlspecialchars` menghapus tag'
      ],
      correctIndex: 0,
      explanation: 'htmlspecialchars hanya mengonversi 5 karakter esensial HTML, sedangkan htmlentities mengonversi semua karakter non-ASCII.'
    }
  },

  // 614. HTMLSPECIALCHARS_DECODE
  {
    id: 'php-ref-str-htmlspecialchars-decode',
    title: 'PHP htmlspecialchars_decode()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 614,
    overview: 'Kuasai fungsi htmlspecialchars_decode(): mengonversi entitas HTML khusus (&amp;, &quot;, &#039;, &lt;, &gt;) kembali menjadi karakter simbol aslinya.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SPECIALCHARS DECODER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 614 / 631</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔓 Decode Karakter HTML Spesial (htmlspecialchars_decode)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>htmlspecialchars_decode(string $string, int $flags = ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML401): string</code> adalah kebalikan langsung dari fungsi <code>htmlspecialchars()</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$htmlSafe = "&lt;h1&gt;Halo &amp; Selamat Datang&lt;/h1&gt;";
$asli = htmlspecialchars_decode($htmlSafe);

echo "<h3>Hasil Penggunaan htmlspecialchars_decode():</h3>";
echo "<p>Sebelum : <code>$htmlSafe</code></p>";
echo "<p>Sesudah : <strong style='color:#059669;'>" . htmlspecialchars($asli) . "</strong></p>";
?>`,
    codeExplanation: [
      'htmlspecialchars_decode() mengembalikan string ke format markup HTML asli.'
    ],
    challenge: {
      instruction: 'Decode "&lt;b&gt;Test&lt;/b&gt;" dengan htmlspecialchars_decode.',
      starterCode: `<?php
echo htmlspecialchars_decode("&lt;b&gt;Test&lt;/b&gt;");
?>`,
      hint: 'Panggil htmlspecialchars_decode.'
    },
    quiz: {
      question: 'Karakter apakah yang dihasilkan dari decoding entitas `&amp;` oleh `htmlspecialchars_decode()`?',
      options: [
        'Simbol Ampersand `&`',
        'Tanda kutip `"`',
        'Tanda kurung `<`',
        'Spasi'
      ],
      correctIndex: 0,
      explanation: '&amp; di-decode kembali menjadi karakter &.'
    }
  },

  // 615. HTMLSPECIALCHARS
  {
    id: 'php-ref-str-htmlspecialchars',
    title: 'PHP htmlspecialchars()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 615,
    overview: 'Kuasai fungsi htmlspecialchars(): fungsi paling penting dan wajib di seluruh pengembangan web PHP untuk mencegah serangan Cross-Site Scripting (XSS) saat mencetak data pengguna ke HTML.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">XSS PREVENTION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 615 / 631</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛡️ Sanitasi Wajib Anti-XSS (htmlspecialchars)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>htmlspecialchars(string $string, int $flags = ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML401, ?string $encoding = null, bool $double_encode = true): string</code> mengonversi <code>&lt;</code> menjadi <code>&amp;lt;</code>, <code>&gt;</code> menjadi <code>&amp;gt;</code>, <code>&amp;</code> menjadi <code>&amp;amp;</code>, <code>"</code> menjadi <code>&amp;quot;</code>, dan <code>'</code> menjadi <code>&amp;#039;</code>. <strong>Wajib digunakan setiap kali me-render input user ke HTML!</strong>
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Simulasi input serangan XSS dari hacker
$inputJahat = '<script>alert("Cookie dicuri: " + document.cookie);</script>';

// Sanitasi dengan htmlspecialchars
$outputAman = htmlspecialchars($inputJahat, ENT_QUOTES, 'UTF-8');

echo "<h3>Hasil Penggunaan htmlspecialchars() (Perlindungan XSS):</h3>";
echo "<p>Input Berbahaya : <code>" . $outputAman . "</code></p>";
echo "<p style='color:#059669;'>✓ Script hacker dinetralisir dan hanya tampil sebagai teks biasa tanpa dieksekusi oleh browser!</p>";
?>`,
    codeExplanation: [
      'htmlspecialchars($input, ENT_QUOTES, "UTF-8") adalah benteng pertahanan utama aplikasi PHP terhadap serangan XSS.'
    ],
    challenge: {
      instruction: 'Amankan string $input = "<script>alert(1)</script>" dengan htmlspecialchars($input, ENT_QUOTES).',
      starterCode: `<?php
$str = "<script>alert(1)</script>";
echo htmlspecialchars($str, ENT_QUOTES);
?>`,
      hint: 'Panggil htmlspecialchars($str, ENT_QUOTES).'
    },
    quiz: {
      question: 'Flag konstanta apakah yang direkomendasikan pada `htmlspecialchars()` untuk meng-escape tanda kutip ganda (") DAN tanda kutip tunggal (\') sekaligus?',
      options: [
        '`ENT_QUOTES`',
        '`ENT_COMPAT` (hanya tanda kutip ganda)',
        '`ENT_NOQUOTES`',
        '`ENT_HTML5`'
      ],
      correctIndex: 0,
      explanation: 'ENT_QUOTES meng-escape tanda kutip ganda dan tunggal untuk keamanan maksimal.'
    }
  },

  // 616. IMPLODE / JOIN
  {
    id: 'php-ref-str-implode',
    title: 'PHP implode() / join()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 616,
    overview: 'Kuasai fungsi implode() & join(): menggabungkan seluruh elemen array menjadi satu string tunggal dengan karakter pemisah (glue separator) tertentu.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ARRAY TO STRING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 616 / 631</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔗 Menggabungkan Array Jadi String (implode)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>implode(string $separator, array $array): string</code> (dan aliasnya <code>join()</code>) merekatkan semua elemen array dengan separator pemisah.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$daftarBahasa = ["PHP", "JavaScript", "TypeScript", "PostgreSQL"];

$stringGabungan = implode(", ", $daftarBahasa);

echo "<h3>Hasil Penggunaan implode():</h3>";
echo "<p>Tech Stack: <strong style='color:#059669; font-size:18px;'>$stringGabungan</strong></p>";
?>`,
    codeExplanation: [
      'implode(", ", $array) menghasilkan string "PHP, JavaScript, TypeScript, PostgreSQL".'
    ],
    challenge: {
      instruction: 'Gabungkan array ["A", "B", "C"] dengan tanda pemisah "-" menggunakan implode("-", $arr).',
      starterCode: `<?php
echo implode("-", ["A", "B", "C"]);
?>`,
      hint: 'Panggil implode("-", $arr).'
    },
    quiz: {
      question: 'Fungsi apakah yang merupakan alias resmi 100% dari fungsi `implode()` di PHP?',
      options: [
        '`join()`',
        '`concat()`',
        '`merge()`',
        '`combine()`'
      ],
      correctIndex: 0,
      explanation: 'join() adalah alias resmi bawaan dari implode().'
    }
  },

  // 617. LCFIRST
  {
    id: 'php-ref-str-lcfirst',
    title: 'PHP lcfirst()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 617,
    overview: 'Kuasai fungsi lcfirst(): mengubah karakter pertama dari sebuah string menjadi huruf kecil (Lower Case First) — standar konversi nama method camelCase.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CAMELCASE FORMATTER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 617 / 631</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔤 Huruf Pertama Menjadi Kecil (lcfirst)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>lcfirst(string $string): string</code> mengubah huruf pertama menjadi lowercase. Kebalikannya adalah fungsi <code>ucfirst()</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$namaKelas = "UserProfileController";

// Konversi nama kelas PascalCase menjadi nama variabel camelCase
$namaVariabel = lcfirst($namaKelas);

echo "<h3>Hasil Penggunaan lcfirst():</h3>";
echo "<p>PascalCase : <code>$namaKelas</code></p>";
echo "<p>camelCase  : <strong style='color:#059669;'>\$$namaVariabel</strong></p>";
?>`,
    codeExplanation: [
      'lcfirst("UserProfileController") menghasilkan "userProfileController".'
    ],
    challenge: {
      instruction: 'Ubah "DevGrow" huruf depannya menjadi kecil dengan lcfirst("DevGrow").',
      starterCode: `<?php
echo lcfirst("DevGrow");
?>`,
      hint: 'Panggil lcfirst("DevGrow").'
    },
    quiz: {
      question: 'Berapakah string yang dihasilkan oleh `lcfirst("PHP")`?',
      options: [
        'String `"pHP"`',
        'String `"php"`',
        'String `"Php"`',
        'String `"PHP"`'
      ],
      correctIndex: 0,
      explanation: 'lcfirst hanya mengubah 1 karakter pertama menjadi huruf kecil, sehingga "PHP" menjadi "pHP".'
    }
  },

  // 618. LEVENSHTEIN
  {
    id: 'php-ref-str-levenshtein',
    title: 'PHP levenshtein()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 618,
    overview: 'Kuasai fungsi levenshtein(): menghitung jarak Levenshtein (jumlah operasi edit insert/replace/delete karakter) antara dua string untuk fitur Typo Correction / "Did You Mean?".',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TYPO TOLERANCE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 618 / 631</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Jarak Kemiripan String (levenshtein)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>levenshtein(string $string1, string $string2, int $insertion_cost = 1, int $replacement_cost = 1, int $deletion_cost = 1): int</code> menghitung jarak perbedaan karakter. Semakin kecil nilainya (misal 0 atau 1), semakin mirip kedua string tersebut.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$inputUser = "javaskrip"; // Typo dari "javascript"
$kamusKata = ["php", "python", "javascript", "golang", "ruby"];

$terdekat = "";
$jarakTerdekat = -1;

foreach ($kamusKata as $kata) {
    $jarak = levenshtein($inputUser, $kata);
    if ($jarakTerdekat < 0 || $jarak < $jarakTerdekat) {
        $jarakTerdekat = $jarak;
        $terdekat = $kata;
    }
}

echo "<h3>Fitur 'Did You Mean?' via levenshtein():</h3>";
echo "<p>Kata Kunci User : <code style='color:red;'>$inputUser</code></p>";
echo "<p>Maksud Anda      : <strong style='color:#059669; font-size:18px;'>$terdekat</strong> (Jarak Edit: $jarakTerdekat)</p>";
?>`,
    codeExplanation: [
      'levenshtein("javaskrip", "javascript") menghitung jarak edit sebesar 2 karakter.'
    ],
    challenge: {
      instruction: 'Hitung jarak levenshtein antara "cat" dan "bat" dengan levenshtein("cat", "bat").',
      starterCode: `<?php
echo "Jarak: " . levenshtein("cat", "bat");
?>`,
      hint: 'Panggil levenshtein("cat", "bat").'
    },
    quiz: {
      question: 'Berapakah nilai `levenshtein($str1, $str2)` jika kedua string identik sama persis?',
      options: [
        'Integer `0`',
        'Integer `1`',
        'Boolean `true`',
        'Integer `-1`'
      ],
      correctIndex: 0,
      explanation: 'Jarak Levenshtein bernilai 0 jika tidak ada karakter yang perlu diubah.'
    }
  },

  // 619. LOCALECONV
  {
    id: 'php-ref-str-localeconv',
    title: 'PHP localeconv()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 619,
    overview: 'Kuasai fungsi localeconv(): mengambil informasi format pemformatan angka dan mata uang lokal (simbol mata uang, pemisah ribuan, titik desimal).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">LOCALE FORMATTING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 619 / 631</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌐 Informasi Format Angka Lokal (localeconv)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>localeconv(): array</code> mengembalikan array asosiatif berisi <code>decimal_point</code>, <code>thousands_sep</code>, <code>currency_symbol</code>, <code>mon_decimal_point</code>, dll.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$localeInfo = localeconv();

echo "<h3>Pengaturan Format Lokal Saat Ini (localeconv):</h3>";
echo "<ul>";
echo "<li>Pemisah Desimal (decimal_point) : '<strong>{$localeInfo['decimal_point']}</strong>'</li>";
echo "<li>Pemisah Ribuan (thousands_sep)  : '<strong>{$localeInfo['thousands_sep']}</strong>'</li>";
echo "<li>Simbol Mata Uang               : '<strong>{$localeInfo['currency_symbol']}</strong>'</li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'localeconv() membaca konfigurasi setlocale() aktif untuk format angka akuntansi.'
    ],
    challenge: {
      instruction: 'Ambil pemisah desimal dengan localeconv()["decimal_point"].',
      starterCode: `<?php
$l = localeconv();
echo "Desimal: " . $l['decimal_point'];
?>`,
      hint: 'Akses $l["decimal_point"].'
    },
    quiz: {
      question: 'Informasi apa sajakah yang terdapat pada array hasil kembalian `localeconv()`?',
      options: [
        'Simbol pemisah desimal, pemisah ribuan, simbol mata uang, dan aturan penempatan tanda plus/minus moneter',
        'Daftar bahasa di dunia',
        'Waktu saat ini',
        'Versi PHP'
      ],
      correctIndex: 0,
      explanation: 'localeconv menyediakan data konvensi pemformatan angka dan moneter lokal.'
    }
  }
];

module.exports = phpPart56RefString2;
