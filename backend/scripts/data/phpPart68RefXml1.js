// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (XML PARSER PART 1: 731-738)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart68RefXml1 = [
  // 731. UTF8_DECODE & UTF8_ENCODE
  {
    id: 'php-ref-xml-utf8-decode',
    title: 'PHP utf8_decode() & mb_convert_encoding()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 731,
    overview: 'Kuasai fungsi utf8_decode(): fungsi historis konversi string UTF-8 ke ISO-8859-1 (Latin-1) dan padanan modernnya mb_convert_encoding().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CHARACTER ENCODING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 731 / 754</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔤 Konversi Encoding UTF-8 ke ISO-8859-1 (utf8_decode)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>utf8_decode(string $string): string</code> mengonversi string UTF-8 ke ISO-8859-1. Di PHP 8.2+ fungsi ini didepresiasi, dan digantikan oleh fungsi modern <code>mb_convert_encoding($str, "ISO-8859-1", "UTF-8")</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$teksUtf8 = "Café & Resto DevGrow";

// Standar modern konversi encoding di PHP 8.x
$teksLatin1 = mb_convert_encoding($teksUtf8, "ISO-8859-1", "UTF-8");

echo "<h3>Hasil Pengujian Konversi Encoding:</h3>";
echo "<p>Teks Asli (UTF-8)   : $teksUtf8</p>";
echo "<p>Teks ISO-8859-1      : <strong style='color:#059669;'>$teksLatin1</strong></p>";
?>`,
    codeExplanation: [
      'mb_convert_encoding() adalah standar modern teraman untuk konversi karakter multi-bahasa.'
    ],
    challenge: {
      instruction: 'Pahami fungsi konversi encoding.',
      starterCode: `<?php
echo mb_convert_encoding("PHP 8", "ISO-8859-1", "UTF-8");
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Fungsi apakah yang merupakan standar resmi pengganti `utf8_decode()` di PHP modern?',
      options: [
        '`mb_convert_encoding($str, "ISO-8859-1", "UTF-8")`',
        '`str_replace()`',
        '`iconv_mime_decode()`',
        '`htmlentities()`'
      ],
      correctIndex: 0,
      explanation: 'mb_convert_encoding menangani seluruh variasi charset secara robust.'
    }
  },

  // 732. UTF8_ENCODE
  {
    id: 'php-ref-xml-utf8-encode',
    title: 'PHP utf8_encode() & Standar UTF-8 Modern',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 732,
    overview: 'Kuasai fungsi utf8_encode(): mengonversi string ISO-8859-1 ke UTF-8 dan penggunaan multibyte string modern di PHP 8.x.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">UTF-8 ENCODER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 732 / 754</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌐 Konversi ke UTF-8 Standar (utf8_encode)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>utf8_encode(string $string): string</code> mengonversi byte Latin-1 ke UTF-8. Padanan modernnya: <code>mb_convert_encoding($str, "UTF-8", "ISO-8859-1")</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$teksInput = "Kopi Spesial";

$teksUtf8 = mb_convert_encoding($teksInput, "UTF-8", "auto");

echo "<h3>Hasil Penggunaan Konversi UTF-8:</h3>";
echo "<p>Output UTF-8: <strong style='color:#059669;'>$teksUtf8</strong></p>";
?>`,
    codeExplanation: [
      'mb_convert_encoding($str, "UTF-8", "auto") otomatis mendeteksi format sumber.'
    ],
    challenge: {
      instruction: 'Pahami fungsi utf8_encode.',
      starterCode: `<?php
echo mb_convert_encoding("Test", "UTF-8", "ISO-8859-1");
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Apa format encoding default untuk dokumen XML modern?',
      options: [
        '`UTF-8`',
        '`ASCII`',
        '`ISO-8859-1`',
        '`Windows-1252`'
      ],
      correctIndex: 0,
      explanation: 'UTF-8 adalah standar universal dokumen XML dan JSON modern.'
    }
  },

  // 733. XML_ERROR_STRING & XML_GET_ERROR_CODE
  {
    id: 'php-ref-xml-error-string',
    title: 'PHP xml_error_string() & xml_get_error_code()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 733,
    overview: 'Kuasai fungsi xml_error_string() & xml_get_error_code(): menerjemahkan kode error integer parser XML menjadi pesan string deskriptif manusiawi.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-red-600 text-white">XML ERROR HANDLER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 733 / 754</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🚨 Diagnostik Error XML (xml_error_string)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>xml_get_error_code(XMLParser $parser): int</code> mengambil kode error, dan <code>xml_error_string(int $error_code): ?string</code> menerjemahkan kode tersebut menjadi pesan teks error (misal: "mismatched tag", "syntax error", atau "unclosed token").
          </p>
        </div>
      </div>
    `,
    code: `<?php
$xmlCorrupt = "<kursus><judul>PHP 8</kursus>"; // Tag tidak tertutup rapi (<judul>)

$parser = xml_parser_create();
if (!xml_parse($parser, $xmlCorrupt, true)) {
    $kodeError = xml_get_error_code($parser);
    $pesanError = xml_error_string($kodeError);
    $baris = xml_get_current_line_number($parser);

    echo "<h3>Hasil Diagnostik Error XML:</h3>";
    echo "<p style='color:#dc2626; font-weight:bold;'>Error XML [Kode $kodeError]: $pesanError pada Baris $baris</p>";
}
xml_parser_free($parser);
?>`,
    codeExplanation: [
      'xml_get_error_code() + xml_error_string() memberikan informasi akurat tentang penyebab kegagalan parsing XML.'
    ],
    challenge: {
      instruction: 'Pahami fungsi xml_error_string.',
      starterCode: `<?php
echo xml_error_string(XML_ERROR_MISMATCHED_TAG);
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Fungsi apakah yang digunakan untuk menerjemahkan integer kode error XML menjadi teks pesan kesalahan?',
      options: [
        '`xml_error_string($code)`',
        '`xml_get_message()`',
        '`xml_strerror()`',
        '`xml_debug()`'
      ],
      correctIndex: 0,
      explanation: 'xml_error_string() memetakan kode integer error ke deskripsi teksnya.'
    }
  },

  // 734. XML_GET_CURRENT_BYTE_INDEX
  {
    id: 'php-ref-xml-get-current-byte-index',
    title: 'PHP xml_get_current_byte_index()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 734,
    overview: 'Kuasai fungsi xml_get_current_byte_index(): mendapatkan posisi indeks byte saat ini dari parser XML yang sedang berjalan.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">BYTE TRACKER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 734 / 754</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📍 Pelacakan Posisi Byte XML (xml_get_current_byte_index)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>xml_get_current_byte_index(XMLParser $parser): int</code> mengembalikan posisi offset byte parser di dalam dokumen XML.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$xml = "<root><data>Halo DevGrow</data></root>";

$parser = xml_parser_create();
xml_parse($parser, $xml, true);

$byteIndex = xml_get_current_byte_index($parser);

echo "<h3>Hasil Penggunaan xml_get_current_byte_index():</h3>";
echo "<p>Posisi Akhir Byte Parser: <strong style='color:#059669;'>$byteIndex byte</strong></p>";

xml_parser_free($parser);
?>`,
    codeExplanation: [
      'xml_get_current_byte_index() mengukur progres pemrosesan byte dokumen XML.'
    ],
    challenge: {
      instruction: 'Pahami fungsi xml_get_current_byte_index.',
      starterCode: `<?php
$p = xml_parser_create();
xml_parse($p, "<app>LMS</app>", true);
echo "Byte: " . xml_get_current_byte_index($p);
xml_parser_free($p);
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Satuan apakah yang dikembalikan oleh fungsi `xml_get_current_byte_index()`?',
      options: [
        'Integer posisi offset byte dalam dokumen',
        'Jumlah kata',
        'Nomor baris',
        'Persentase progres'
      ],
      correctIndex: 0,
      explanation: 'Fungsi ini mengembalikan offset posisi byte integer.'
    }
  },

  // 735. XML_GET_CURRENT_COLUMN_NUMBER
  {
    id: 'php-ref-xml-get-current-column-number',
    title: 'PHP xml_get_current_column_number()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 735,
    overview: 'Kuasai fungsi xml_get_current_column_number(): mendapatkan nomor kolom saat ini tempat parser XML sedang aktif atau saat terjadi kesalahan parsing.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">COLUMN TRACKER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 735 / 754</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📐 Nomor Kolom Parser XML (xml_get_current_column_number)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>xml_get_current_column_number(XMLParser $parser): int</code> mengembalikan nomor kolom horizontal di mana parser berada saat ini.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$xml = "<root>\n   <item id='1'>Data</item>\n</root>";

$parser = xml_parser_create();
xml_parse($parser, $xml, true);

$kolom = xml_get_current_column_number($parser);

echo "<h3>Hasil Penggunaan xml_get_current_column_number():</h3>";
echo "<p>Nomor Kolom Parser: <strong style='color:#059669;'>Kolom $kolom</strong></p>";

xml_parser_free($parser);
?>`,
    codeExplanation: [
      'xml_get_current_column_number() membantu menandai koordinat kolom letak kesalahan sintaks XML.'
    ],
    challenge: {
      instruction: 'Pahami fungsi xml_get_current_column_number.',
      starterCode: `<?php
$p = xml_parser_create();
xml_parse($p, "<x>1</x>", true);
echo "Kolom: " . xml_get_current_column_number($p);
xml_parser_free($p);
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Kapan `xml_get_current_column_number()` dan `xml_get_current_line_number()` paling sering digunakan bersama?',
      options: [
        'Saat menangkap error XML untuk menampilkan lokasi baris dan kolom yang tepat kepada developer',
        'Untuk membuat format CSS',
        'Untuk menghapus tag XML',
        'Hanya untuk JSON'
      ],
      correctIndex: 0,
      explanation: 'Kombinasi baris dan kolom memberikan koordinat presisi error XML.'
    }
  },

  // 736. XML_GET_CURRENT_LINE_NUMBER
  {
    id: 'php-ref-xml-get-current-line-number',
    title: 'PHP xml_get_current_line_number()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 736,
    overview: 'Kuasai fungsi xml_get_current_line_number(): mendapatkan nomor baris saat ini tempat parser XML sedang aktif.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">LINE TRACKER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 736 / 754</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📑 Nomor Baris Parser XML (xml_get_current_line_number)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>xml_get_current_line_number(XMLParser $parser): int</code> mengembalikan nomor baris vertikal (1-indexed).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$xml = "<?xml version='1.0'?>\n<katalog>\n  <buku>PHP 8</buku>\n</katalog>";

$parser = xml_parser_create();
xml_parse($parser, $xml, true);

$baris = xml_get_current_line_number($parser);

echo "<h3>Hasil Penggunaan xml_get_current_line_number():</h3>";
echo "<p>Total Baris Dokumen: <strong style='color:#059669;'>$baris baris</strong></p>";

xml_parser_free($parser);
?>`,
    codeExplanation: [
      'xml_get_current_line_number() melacak posisi nomor baris dokumen XML yang sedang diparsing.'
    ],
    challenge: {
      instruction: 'Pahami fungsi xml_get_current_line_number.',
      starterCode: `<?php
$p = xml_parser_create();
xml_parse($p, "<a>\n<b>test</b>\n</a>", true);
echo "Baris: " . xml_get_current_line_number($p);
xml_parser_free($p);
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Berapakah nomor baris awal (minimum) yang dikembalikan oleh `xml_get_current_line_number()`?',
      options: [
        'Integer `1` (1-indexed)',
        'Integer `0`',
        'Integer `-1`',
        '`null`'
      ],
      correctIndex: 0,
      explanation: 'Nomor baris dihitung mulai dari baris ke-1.'
    }
  },

  // 737. XML_GET_ERROR_CODE
  {
    id: 'php-ref-xml-get-error-code-detail',
    title: 'PHP xml_get_error_code() & Error Constants',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 737,
    overview: 'Kuasai fungsi xml_get_error_code() dan konstanta error XML PHP (XML_ERROR_NO_MEMORY, XML_ERROR_SYNTAX, XML_ERROR_NO_ELEMENTS, dll.).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-red-600 text-white">ERROR CODES</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 737 / 754</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛑 Kode Error Parser XML (xml_get_error_code)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>xml_get_error_code(XMLParser $parser): int</code> mengembalikan <code>XML_ERROR_NONE</code> (0) jika tidak ada error, atau konstanta error XML lainnya.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$parser = xml_parser_create();
$isValid = xml_parse($parser, "<valid><tag>OK</tag></valid>", true);

$errorCode = xml_get_error_code($parser);

echo "<h3>Hasil Pengujian Error Code XML:</h3>";
echo "<p>Status Parsing: " . ($isValid ? "<strong style='color:#059669;'>✓ Sukses Valid</strong>" : "Error") . "</p>";
echo "<p>Error Code    : <strong>$errorCode (XML_ERROR_NONE)</strong></p>";

xml_parser_free($parser);
?>`,
    codeExplanation: [
      'xml_get_error_code() mengembalikan 0 (XML_ERROR_NONE) ketika dokumen XML valid sempurna.'
    ],
    challenge: {
      instruction: 'Pahami fungsi xml_get_error_code.',
      starterCode: `<?php
$p = xml_parser_create();
xml_parse($p, "<x></x>", true);
echo "Error: " . xml_get_error_code($p);
xml_parser_free($p);
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Berapakah nilai return dari `xml_get_error_code()` jika pemrosesan XML berjalan sukses tanpa error?',
      options: [
        'Integer `0` (konstanta `XML_ERROR_NONE`)',
        'Boolean `true`',
        'Integer `-1`',
        '`null`'
      ],
      correctIndex: 0,
      explanation: 'Nilai 0 menandakan tidak ada kesalahan XML yang terjadi.'
    }
  },

  // 738. XML_PARSE
  {
    id: 'php-ref-xml-parse',
    title: 'PHP xml_parse() & SAX Streaming',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 738,
    overview: 'Kuasai fungsi xml_parse(): mengeksekusi parsing dokumen XML dalam bentuk chunk data bertahap (Streaming Memory-Efficient SAX Parser) untuk file raksasa.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">SAX STREAMING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 738 / 754</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚡ Eksekusi Parsing XML (xml_parse)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>xml_parse(XMLParser $parser, string $data, bool $is_final = false): int</code> memicu parsing chunk XML. Sangat hemat memori karena dapat membaca file XML bergiga-byte sepotong demi sepotong (chunk by chunk) tanpa memuat seluruh file ke RAM.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$xmlStream = "<mahasiswa><nama>Rahmat Fadila</nama><prodi>Informatika</prodi></mahasiswa>";

$parser = xml_parser_create();

// Handler event sederhana
xml_set_element_handler($parser, 
    fn($p, $name) => print("<p>&lt;<strong>$name</strong>&gt;</p>"),
    fn($p, $name) => print("<p>&lt;/<strong>$name</strong>&gt;</p>")
);

echo "<h3>Hasil Eksekusi SAX Parser via xml_parse():</h3>";
xml_parse($parser, $xmlStream, true);

xml_parser_free($parser);
?>`,
    codeExplanation: [
      'xml_parse() menjalankan event-driven parsing (SAX) saat menemukan pembuka dan penutup tag.'
    ],
    challenge: {
      instruction: 'Pahami fungsi xml_parse.',
      starterCode: `<?php
$p = xml_parser_create();
$res = xml_parse($p, "<app>DevGrow</app>", true);
echo $res ? "Parse OK" : "Failed";
xml_parser_free($p);
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Apa fungsi dari parameter ketiga `$is_final = true` pada pemanggilan `xml_parse()`?',
      options: [
        'Menandakan bahwa potongan chunk data ini adalah bagian terakhir dari dokumen XML yang diparsing',
        'Mengunci file XML',
        'Memvalidasi format XML secara ketat',
        'Menutup parser secara otomatis'
      ],
      correctIndex: 0,
      explanation: 'is_final = true memberi tahu parser bahwa tidak ada lagi data potongan berikutnya.'
    }
  }
];

module.exports = phpPart68RefXml1;
