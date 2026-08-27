// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (XML PARSER PART 2: 739-746)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart69RefXml2 = [
  // 739. XML_PARSE_INTO_STRUCT
  {
    id: 'php-ref-xml-parse-into-struct',
    title: 'PHP xml_parse_into_struct()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 739,
    overview: 'Kuasai fungsi xml_parse_into_struct(): mem-parsing seluruh struktur dokumen XML langsung ke dalam 2 array multidimensi terstruktur (array nilai dan array indeks tag).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">XML TO ARRAY</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 739 / 754</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌳 Parsing XML ke Struktur Array (xml_parse_into_struct)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>xml_parse_into_struct(XMLParser $parser, string $data, array &$values, array &$index = []): int</code> mengubah string XML menjadi array pohon data yang mudah diiterasi tanpa perlu mendefinisikan callback handler manual.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$xml = "<toko><produk id='101'><nama>Buku PHP 8</nama><harga>150000</harga></produk></toko>";

$parser = xml_parser_create();
$values = [];
$index = [];

xml_parse_into_struct($parser, $xml, $values, $index);
xml_parser_free($parser);

echo "<h3>Hasil Penggunaan xml_parse_into_struct():</h3>";
echo "<pre style='background:#0f172a; color:#38bdf8; padding:12px; border-radius:8px;'>";
print_r($values);
echo "</pre>";
?>`,
    codeExplanation: [
      'xml_parse_into_struct() menghasilkan array dengan properti tag, type (open/complete/close), level, dan value.'
    ],
    challenge: {
      instruction: 'Pahami fungsi xml_parse_into_struct.',
      starterCode: `<?php
$p = xml_parser_create();
xml_parse_into_struct($p, "<x>1</x>", $v, $i);
echo "Total elemen: " . count($v);
xml_parser_free($p);
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Informasi apa saja yang disimpan dalam array `$values` hasil dari `xml_parse_into_struct()`?',
      options: [
        'Nama tag, jenis tag (open/complete/close), level kedalaman hirarki XML, dan nilai teks elemen',
        'Hanya nama tag saja',
        'Ukuran byte dokumen',
        'Kode error'
      ],
      correctIndex: 0,
      explanation: 'Array values memuat metadata lengkap hierarki XML secara terstruktur.'
    }
  },

  // 740. XML_PARSER_CREATE_NS
  {
    id: 'php-ref-xml-parser-create-ns',
    title: 'PHP xml_parser_create_ns()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 740,
    overview: 'Kuasai fungsi xml_parser_create_ns(): membuat instance parser XML dengan dukungan parsing namespace (XML Namespaces xmlns).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">XML NAMESPACE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 740 / 754</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌐 Parser XML dengan Dukungan Namespace (xml_parser_create_ns)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>xml_parser_create_ns(?string $encoding = null, string $separator = ":"): XMLParser</code> menginisialisasi parser yang mengenali URI namespace XML (seperti SOAP envelope atau RSS feeds).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$xml = '<root xmlns:dg="https://devgrow.id/schema"><dg:modul>Mastering PHP</dg:modul></root>';

// Inisialisasi parser dengan pemisah namespace ":"
$parser = xml_parser_create_ns("UTF-8", ":");

xml_set_element_handler($parser,
    fn($p, $name) => print("<p>Tag dengan Namespace: <strong style='color:#059669;'>$name</strong></p>"),
    fn($p, $name) => null
);

echo "<h3>Hasil Penggunaan xml_parser_create_ns():</h3>";
xml_parse($parser, $xml, true);

xml_parser_free($parser);
?>`,
    codeExplanation: [
      'xml_parser_create_ns() menggabungkan URI namespace dengan nama tag.'
    ],
    challenge: {
      instruction: 'Pahami fungsi xml_parser_create_ns.',
      starterCode: `<?php
$p = xml_parser_create_ns("UTF-8");
echo gettype($p) === 'object' ? "Parser Objek Terbuat" : "Resource";
xml_parser_free($p);
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Apa keuntungan menggunakan `xml_parser_create_ns()` dibandingkan `xml_parser_create()` biasa?',
      options: [
        'Mampu memisahkan dan memetakan elemen XML berdasarkan Uniform Resource Identifier (URI) namespace-nya secara otomatis',
        'Mengonversi XML ke JSON',
        'Lebih hemat 10x',
        'Keduanya identik'
      ],
      correctIndex: 0,
      explanation: 'xml_parser_create_ns mengenali dan mengisolasi namespace XML.'
    }
  },

  // 741. XML_PARSER_CREATE
  {
    id: 'php-ref-xml-parser-create-detail',
    title: 'PHP xml_parser_create() & XMLParser Instance',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 741,
    overview: 'Kuasai fungsi xml_parser_create(): menginisialisasi instance objek parser XML (XMLParser di PHP 8.x / resource di PHP 7) dengan opsi encoding kustom (UTF-8, US-ASCII, ISO-8859-1).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">PARSER FACTORY</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 741 / 754</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏗️ Inisialisasi Parser XML (xml_parser_create)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>xml_parser_create(?string $encoding = null): XMLParser</code> adalah titik awal dari setiap operasi parsing XML berbasis SAX di PHP. Di PHP 8.0+, fungsi ini mengembalikan objek kelas <code>XMLParser</code> (bukan lagi resource).
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Inisialisasi parser dengan UTF-8
$parser = xml_parser_create("UTF-8");

echo "<h3>Status Instance XMLParser PHP 8.x:</h3>";
echo "<p>Tipe Objek: <strong style='color:#059669;'>" . get_class($parser) . "</strong></p>";

xml_parser_free($parser);
?>`,
    codeExplanation: [
      'xml_parser_create() membuat instance engine parser Expat C yang siap dipasangi handler event.'
    ],
    challenge: {
      instruction: 'Buat parser XML baru dengan xml_parser_create().',
      starterCode: `<?php
$p = xml_parser_create();
echo "Parser siap: " . (is_object($p) ? "Ya (PHP 8)" : "Resource");
xml_parser_free($p);
?>`,
      hint: 'Panggil xml_parser_create().'
    },
    quiz: {
      question: 'Tipe data apakah yang dikembalikan oleh `xml_parser_create()` pada PHP 8.0 ke atas?',
      options: [
        'Instance objek kelas `XMLParser`',
        'Tipe data primitif `resource`',
        'Array konfigurasi',
        'Integer handle ID'
      ],
      correctIndex: 0,
      explanation: 'Di PHP 8.0+, resource parser XML dimigrasikan menjadi instance objek kelas XMLParser.'
    }
  },

  // 742. XML_PARSER_FREE
  {
    id: 'php-ref-xml-parser-free-detail',
    title: 'PHP xml_parser_free() & Garbage Collection',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 742,
    overview: 'Kuasai fungsi xml_parser_free(): membebaskan dan menghancurkan alokasi memori instance parser XML setelah proses parsing selesai.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">MEMORY CLEANUP</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 742 / 754</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧹 Pembebasan Memori Parser (xml_parser_free)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>xml_parser_free(XMLParser $parser): bool</code> menutup handle parser XML Expat dan membebaskan RAM server.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$parser = xml_parser_create();

// Eksekusi operasi parsing...
xml_parse($parser, "<status>OK</status>", true);

// Bebaskan memori parser
$isFreed = xml_parser_free($parser);

echo "<h3>Hasil Penggunaan xml_parser_free():</h3>";
echo "<p>Status Pembebasan Memori: <strong style='color:#059669;'>" . ($isFreed ? '✓ Berhasil Dibebaskan' : 'Gagal') . "</strong></p>";
?>`,
    codeExplanation: [
      'xml_parser_free($parser) mencegah kebocoran memori (memory leak) pada script daemon/CLI yang memproses banyak file XML.'
    ],
    challenge: {
      instruction: 'Bebaskan parser dengan xml_parser_free($p).',
      starterCode: `<?php
$p = xml_parser_create();
echo xml_parser_free($p) ? "Freed" : "Error";
?>`,
      hint: 'Panggil xml_parser_free($p).'
    },
    quiz: {
      question: 'Mengapa memanggil `xml_parser_free()` sangat dianjurkan setelah selesai parsing XML?',
      options: [
        'Untuk membebaskan alokasi memori parser Expat C dan mencegah memory leak pada background worker / CLI script',
        'Agar file XML di-save',
        'Untuk mematikan koneksi database',
        'Hanya untuk styling'
      ],
      correctIndex: 0,
      explanation: 'Pembebasan memori memastikan resource RAM server segera dapat digunakan kembali.'
    }
  },

  // 743. XML_PARSER_GET_OPTION & XML_PARSER_SET_OPTION
  {
    id: 'php-ref-xml-parser-get-option',
    title: 'PHP xml_parser_get_option() & xml_parser_set_option()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 743,
    overview: 'Kuasai fungsi xml_parser_get_option() & xml_parser_set_option(): mengonfigurasi opsi parser XML (seperti CASE_FOLDING, SKIP_TAGSTART, SKIP_WHITE).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PARSER CONFIG</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 743 / 754</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚙️ Opsi Konfigurasi Parser (xml_parser_set_option)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>xml_parser_set_option(XMLParser $parser, int $option, string|int $value): bool</code> mengatur perilaku parser. Opsi terpenting adalah <code>XML_OPTION_CASE_FOLDING</code> (secara default bernilai 1 yang mengubah semua tag menjadi UPPERCASE; setel ke 0 untuk mempertahankan huruf kecil asli).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$parser = xml_parser_create();

// Matikan Case Folding agar tag tetap dalam huruf kecil aslinya
xml_parser_set_option($parser, XML_OPTION_CASE_FOLDING, 0);

$caseFolding = xml_parser_get_option($parser, XML_OPTION_CASE_FOLDING);

echo "<h3>Konfigurasi Opsi XML Parser:</h3>";
echo "<p>Status CASE_FOLDING: <strong style='color:#059669;'>$caseFolding (0 = Nonaktif / Huruf Asli Dipertahankan)</strong></p>";

xml_parser_free($parser);
?>`,
    codeExplanation: [
      'xml_parser_set_option($parser, XML_OPTION_CASE_FOLDING, 0) mempertahankan nama tag persis seperti dokumen XML asli tanpa diubah ke uppercase.'
    ],
    challenge: {
      instruction: 'Pahami fungsi xml_parser_set_option.',
      starterCode: `<?php
$p = xml_parser_create();
xml_parser_set_option($p, XML_OPTION_CASE_FOLDING, 0);
echo xml_parser_get_option($p, XML_OPTION_CASE_FOLDING);
xml_parser_free($p);
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Apa dampak dari menyetel `XML_OPTION_CASE_FOLDING` ke nilai `0`?',
      options: [
        'Nama tag XML tidak akan otomatis diubah menjadi huruf kapital (uppercase), melainkan mempertahankan case asli dari file sumber',
        'Mengabaikan whitespace',
        'Mengaktifkan enkripsi XML',
        'Menghapus tag XML'
      ],
      correctIndex: 0,
      explanation: 'Case folding 0 mempertahankan original casing dari nama tag XML.'
    }
  },

  // 744. XML_PARSER_SET_OPTION (DETAIL)
  {
    id: 'php-ref-xml-parser-set-option-detail',
    title: 'PHP XML Parser Options Reference',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 744,
    overview: 'Kuasai daftar lengkap opsi parser XML PHP: XML_OPTION_CASE_FOLDING, XML_OPTION_SKIP_TAGSTART, XML_OPTION_SKIP_WHITE, dan XML_OPTION_TARGET_ENCODING.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">OPTIONS MATRIX</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 744 / 754</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📋 Matriks Konstanta Opsi XML Parser</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>XML_OPTION_SKIP_WHITE</code> (mengabaikan spasi kosong antar-tag), <code>XML_OPTION_TARGET_ENCODING</code> (mengatur encoding output UTF-8 / ISO-8859-1 / US-ASCII).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$parser = xml_parser_create();

// Konfigurasi target encoding ke UTF-8 dan skip whitespace
xml_parser_set_option($parser, XML_OPTION_TARGET_ENCODING, "UTF-8");
xml_parser_set_option($parser, XML_OPTION_SKIP_WHITE, 1);

echo "<h3>Target Encoding Parser XML Berhasil Dikonfigurasi ke UTF-8!</h3>";

xml_parser_free($parser);
?>`,
    codeExplanation: [
      'Pengaturan target encoding memastikan output callback selalu dalam format UTF-8 yang seragam.'
    ],
    challenge: {
      instruction: 'Pahami opsi XML parser.',
      starterCode: `<?php
echo "XML_OPTION_TARGET_ENCODING mengontrol format encoding keluaran parser.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Opsi manakah yang digunakan untuk mengabaikan nilai whitespace/spasi kosong antar tag XML?',
      options: [
        '`XML_OPTION_SKIP_WHITE`',
        '`XML_OPTION_CASE_FOLDING`',
        '`XML_OPTION_TRIM`',
        '`XML_OPTION_NO_SPACE`'
      ],
      correctIndex: 0,
      explanation: 'XML_OPTION_SKIP_WHITE mengabaikan nilai whitespace murni.'
    }
  },

  // 745. XML_SET_CHARACTER_DATA_HANDLER
  {
    id: 'php-ref-xml-set-character-data-handler',
    title: 'PHP xml_set_character_data_handler()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 745,
    overview: 'Kuasai fungsi xml_set_character_data_handler(): mendaftarkan fungsi callback untuk menangani dan mengekstrak isi teks di dalam elemen XML (CDAT / Character Data).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">SAX DATA HANDLER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 745 / 754</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📝 Penanganan Data Teks Elemen (xml_set_character_data_handler)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>xml_set_character_data_handler(XMLParser $parser, callable $handler): true</code> memanggil fungsi <code>handler(XMLParser $parser, string $data)</code> setiap kali parser menemukan teks isi di antara tag pembuka dan penutup.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$xml = "<kursus><instruktur>Rahmat Fadila</instruktur><materi>PHP 8 XML SAX</materi></kursus>";

$parser = xml_parser_create();
xml_parser_set_option($parser, XML_OPTION_CASE_FOLDING, 0);

// Handler untuk menangkap teks konten
xml_set_character_data_handler($parser, function($p, $teks) {
    $teksBersih = trim($teks);
    if (!empty($teksBersih)) {
        echo "<p>Teks Ditemukan: <strong style='color:#059669;'>$teksBersih</strong></p>";
    }
});

echo "<h3>Hasil Penggunaan xml_set_character_data_handler():</h3>";
xml_parse($parser, $xml, true);

xml_parser_free($parser);
?>`,
    codeExplanation: [
      'xml_set_character_data_handler() mengekstrak konten string "Rahmat Fadila" dan "PHP 8 XML SAX".'
    ],
    challenge: {
      instruction: 'Pahami fungsi xml_set_character_data_handler.',
      starterCode: `<?php
$p = xml_parser_create();
xml_set_character_data_handler($p, fn($p, $d) => print($d));
xml_parse($p, "<x>DevGrow</x>", true);
xml_parser_free($p);
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Kapan callback handler yang didaftarkan pada `xml_set_character_data_handler()` dipanggil oleh parser?',
      options: [
        'Setiap kali parser menemukan isi teks (karakter) di antara tag pembuka dan penutup XML',
        'Saat tag pembuka ditemukan',
        'Saat terjadi error',
        'Saat file dibuka'
      ],
      correctIndex: 0,
      explanation: 'Fungsi ini menangani payload character data di dalam elemen.'
    }
  },

  // 746. XML_SET_DEFAULT_HANDLER
  {
    id: 'php-ref-xml-set-default-handler',
    title: 'PHP xml_set_default_handler()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 746,
    overview: 'Kuasai fungsi xml_set_default_handler(): mendaftarkan fungsi fallback default handler untuk menangkap data atau entitas XML apa pun yang tidak ditangani oleh handler spesifik lainnya.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">FALLBACK HANDLER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 746 / 754</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛡️ Handler Fallback Default XML (xml_set_default_handler)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>xml_set_default_handler(XMLParser $parser, callable $handler): true</code> menangkap deklarasi XML, komentar <code>&lt;!-- ... --&gt;</code>, atau doctype yang tidak memiliki handler khusus.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$xml = "<?xml version='1.0'?><!-- Komentar Konfigurasi --><app>DevGrow</app>";

$parser = xml_parser_create();

xml_set_default_handler($parser, function($p, $data) {
    if (str_contains($data, "Komentar")) {
        echo "<p>Komentar XML Tertangkap oleh Default Handler: <strong style='color:#4f46e5;'>$data</strong></p>";
    }
});

echo "<h3>Hasil Penggunaan xml_set_default_handler():</h3>";
xml_parse($parser, $xml, true);

xml_parser_free($parser);
?>`,
    codeExplanation: [
      'xml_set_default_handler() menangkap seluruh data XML yang tidak diproses oleh handler spesifik.'
    ],
    challenge: {
      instruction: 'Pahami fungsi xml_set_default_handler.',
      starterCode: `<?php
echo "Default handler menangkap sisa entitas dan komentar XML.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Data apakah yang dapat ditangkap oleh `xml_set_default_handler()`?',
      options: [
        'Komentar XML, prolog deklarasi XML `<?xml ... ?>`, dan entitas lain yang tidak memiliki handler spesifik',
        'Hanya tag pembuka',
        'Hanya tag penutup',
        'Error saja'
      ],
      correctIndex: 0,
      explanation: 'Default handler bertindak sebagai catch-all fallback untuk seluruh data XML.'
    }
  }
];

module.exports = phpPart69RefXml2;
