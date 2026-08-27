// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (XML PARSER PART 3: 747-754)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart70RefXml3 = [
  // 747. XML_SET_ELEMENT_HANDLER
  {
    id: 'php-ref-xml-set-element-handler',
    title: 'PHP xml_set_element_handler()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 747,
    overview: 'Kuasai fungsi xml_set_element_handler(): mendaftarkan dua fungsi callback untuk menangani tag pembuka (start element) dan tag penutup (end element) pada parser event-driven SAX.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">SAX ELEMENT HANDLER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 747 / 754</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏷️ Handler Pembuka & Penutup Tag (xml_set_element_handler)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>xml_set_element_handler(XMLParser $parser, callable $start_handler, callable $end_handler): true</code> menetapkan fungsi yang dipanggil saat parser menemukan <code>&lt;tag atribut='nilai'&gt;</code> dan <code>&lt;/tag&gt;</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$xml = "<kursus><materi id='101'>PHP OOP</materi><materi id='102'>PostgreSQL</materi></kursus>";

$parser = xml_parser_create();
xml_parser_set_option($parser, XML_OPTION_CASE_FOLDING, 0);

// Handler Tag Pembuka & Tag Penutup
xml_set_element_handler(
    $parser,
    function($p, $name, $attrs) {
        $attrStr = !empty($attrs) ? " (ID: " . json_encode($attrs) . ")" : "";
        echo "<p style='margin:0; color:#059669;'>&lt;<strong>$name</strong>$attrStr&gt;</p>";
    },
    function($p, $name) {
        echo "<p style='margin:0; color:#dc2626;'>&lt;/<strong>$name</strong>&gt;</p>";
    }
);

echo "<h3>Hasil Pelacakan Tag XML:</h3>";
xml_parse($parser, $xml, true);

xml_parser_free($parser);
?>`,
    codeExplanation: [
      'xml_set_element_handler() menangkap tag pembuka beserta atributnya dan tag penutup.'
    ],
    challenge: {
      instruction: 'Pahami fungsi xml_set_element_handler.',
      starterCode: `<?php
$p = xml_parser_create();
xml_set_element_handler($p, fn($p,$n)=>$n, fn($p,$n)=>$n);
xml_parse($p, "<x></x>", true);
xml_parser_free($p);
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Berapakah jumlah callback fungsi yang diterima oleh parameter `xml_set_element_handler()`?',
      options: [
        '2 fungsi callback (`$start_element_handler` dan `$end_element_handler`)',
        '1 fungsi callback',
        '3 fungsi callback',
        'Array konfigurasi'
      ],
      correctIndex: 0,
      explanation: 'xml_set_element_handler membutuhkan handler untuk tag pembuka dan tag penutup.'
    }
  },

  // 748. XML_SET_END_NAMESPACE_DECL_HANDLER & START_NAMESPACE
  {
    id: 'php-ref-xml-set-end-namespace-decl-handler',
    title: 'PHP xml_set_end_namespace_decl_handler()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 748,
    overview: 'Kuasai fungsi xml_set_end_namespace_decl_handler(): mendaftarkan fungsi callback yang dipanggil saat scope deklarasi namespace XML berakhir.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">NAMESPACE SCOPE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 748 / 754</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌐 Akhir Scope Namespace (xml_set_end_namespace_decl_handler)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>xml_set_end_namespace_decl_handler(XMLParser $parser, callable $handler): true</code> menerima notifikasi ketika elemen pembungkus namespace xmlns selesai diparsing.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$xml = '<root xmlns:dg="https://devgrow.id"><dg:sub>Content</dg:sub></root>';

$parser = xml_parser_create_ns();

xml_set_end_namespace_decl_handler($parser, function($p, $prefix) {
    echo "<p>Scope Namespace Prefix Selesai: <strong style='color:#059669;'>$prefix</strong></p>";
});

echo "<h3>Hasil Pengujian End Namespace Handler:</h3>";
xml_parse($parser, $xml, true);

xml_parser_free($parser);
?>`,
    codeExplanation: [
      'xml_set_end_namespace_decl_handler() menandai penutupan scope deklarasi namespace XML.'
    ],
    challenge: {
      instruction: 'Pahami fungsi xml_set_end_namespace_decl_handler.',
      starterCode: `<?php
echo "xml_set_end_namespace_decl_handler menangkap akhir deklarasi namespace XML.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Kapan handler `xml_set_end_namespace_decl_handler()` dieksekusi?',
      options: [
        'Saat parser meninggalkan scope elemen tempat deklarasi `xmlns` didefinisikan',
        'Saat awal dokumen',
        'Saat terjadi error',
        'Hanya saat tag <root> ditutup'
      ],
      correctIndex: 0,
      explanation: 'Handler ini dipicu saat scope dari namespace berakhir.'
    }
  },

  // 749. XML_SET_EXTERNAL_ENTITY_REF_HANDLER
  {
    id: 'php-ref-xml-set-external-entity-ref-handler',
    title: 'PHP xml_set_external_entity_ref_handler() & Proteksi XXE',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 749,
    overview: 'Kuasai fungsi xml_set_external_entity_ref_handler(): menangani referensi entitas eksternal XML dan mengamankan aplikasi dari kerentanan XML External Entity (XXE) Injection.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-red-600 text-white">SECURITY XXE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 749 / 754</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛡️ Penanganan Entitas Eksternal & XXE (xml_set_external_entity_ref_handler)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>xml_set_external_entity_ref_handler(XMLParser $parser, callable $handler): true</code> mengontrol bagaimana parser menyelesaikan entitas eksternal (seperti <code>SYSTEM "http://..."</code> atau file lokal).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$parser = xml_parser_create();

// Handler untuk memblokir entitas eksternal tak dikenal (Proteksi XXE)
xml_set_external_entity_ref_handler($parser, function($p, $openEntityNames, $base, $systemId, $publicId) {
    echo "<p style='color:#dc2626;'>⚠️ Memblokir Akses Entitas Eksternal: $systemId (XXE Protection)</p>";
    return false; // Tolak entitas
});

echo "<h3>Proteksi XML External Entity (XXE) Aktif!</h3>";

xml_parser_free($parser);
?>`,
    codeExplanation: [
      'xml_set_external_entity_ref_handler() memungkinkan developer memblokir pembacaan file sistem sensitif via XML entity.'
    ],
    challenge: {
      instruction: 'Pahami fungsi xml_set_external_entity_ref_handler.',
      starterCode: `<?php
echo "Handler entitas eksternal melindungi aplikasi dari serangan XXE.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Kerentanan keamanan siber apakah yang dicegah dengan memvalidasi atau memblokir entitas eksternal pada XML parser?',
      options: [
        'XML External Entity (XXE) Injection yang dapat menyebabkan kebocoran file lokal server atau Server-Side Request Forgery (SSRF)',
        'SQL Injection',
        'Cross-Site Scripting (XSS)',
        'Clickjacking'
      ],
      correctIndex: 0,
      explanation: 'XXE memanfaatkan entity parser XML untuk membaca file sensitif seperti /etc/passwd.'
    }
  },

  // 750. XML_SET_NOTATION_DECL_HANDLER
  {
    id: 'php-ref-xml-set-notation-decl-handler',
    title: 'PHP xml_set_notation_decl_handler()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 750,
    overview: 'Kuasai fungsi xml_set_notation_decl_handler(): mendaftarkan fungsi callback untuk menangani deklarasi notasi DTD (<!NOTATION ...>) dalam dokumen XML.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DTD NOTATION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 750 / 754</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📜 Handler Deklarasi Notasi DTD (xml_set_notation_decl_handler)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>xml_set_notation_decl_handler(XMLParser $parser, callable $handler): true</code> memproses definisi format data non-XML dalam DTD.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$parser = xml_parser_create();

xml_set_notation_decl_handler($parser, function($p, $notationName, $base, $systemId, $publicId) {
    echo "<p>Deklarasi Notasi: <strong>$notationName</strong></p>";
});

echo "<h3>Handler Deklarasi Notasi DTD Terdaftar!</h3>";

xml_parser_free($parser);
?>`,
    codeExplanation: [
      'xml_set_notation_decl_handler() menangani notasi DTD format multimedia/biner.'
    ],
    challenge: {
      instruction: 'Pahami fungsi xml_set_notation_decl_handler.',
      starterCode: `<?php
echo "xml_set_notation_decl_handler memproses notasi format DTD.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Di bagian manakah deklarasi notasi (`<!NOTATION ...>`) didefinisikan dalam dokumen XML?',
      options: [
        'Di dalam Document Type Definition (DTD)',
        'Di dalam tag <body>',
        'Di URL query',
        'Di CSS'
      ],
      correctIndex: 0,
      explanation: 'Notasi XML dideklarasikan di dalam blok DTD doctype.'
    }
  },

  // 751. XML_SET_OBJECT
  {
    id: 'php-ref-xml-set-object',
    title: 'PHP xml_set_object() & OOP SAX Parser',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 751,
    overview: 'Kuasai fungsi xml_set_object(): mengikat parser XML ke instance objek PHP sehingga callback handler dapat ditulis sebagai method kelas ($this->startElement).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">OOP PARSER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 751 / 754</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏛️ Mengikat Parser ke Objek OOP (xml_set_object)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>xml_set_object(XMLParser $parser, object &$object): true</code> mengizinkan callback handler didaftarkan hanya dengan nama string method (misal <code>"onTagStart"</code>) pada objek target.
          </p>
        </div>
      </div>
    `,
    code: `<?php
class CustomXmlParser {
    public array $tags = [];

    public function parse($xml) {
        $p = xml_parser_create();
        xml_set_object($p, $this);
        xml_set_element_handler($p, "onTagOpen", "onTagClose");
        xml_parse($p, $xml, true);
        xml_parser_free($p);
    }

    public function onTagOpen($parser, $name, $attrs) {
        $this->tags[] = $name;
    }

    public function onTagClose($parser, $name) {}
}

$myParser = new CustomXmlParser();
$myParser->parse("<catalog><item>Buku</item><item>Kamera</item></catalog>");

echo "<h3>Tag yang Ditemukan oleh Parser OOP:</h3>";
echo "<ul>";
foreach ($myParser->tags as $t) {
    echo "<li>Tag: <strong style='color:#059669;'>$t</strong></li>";
}
echo "</ul>";
?>`,
    codeExplanation: [
      'xml_set_object($p, $this) menghubungkan method kelas OOP sebagai handler event SAX parser.'
    ],
    challenge: {
      instruction: 'Pahami fungsi xml_set_object.',
      starterCode: `<?php
echo "xml_set_object mengikat parser XML ke instance kelas OOP.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Apa manfaat menggunakan `xml_set_object()` dalam arsitektur OOP PHP?',
      options: [
        'Memungkinkan callback handler didaftarkan langsung ke method-method instance kelas tanpa perlu closure terpisah',
        'Mengonversi XML ke database',
        'Menghapus tag XML',
        'Keduanya identik'
      ],
      correctIndex: 0,
      explanation: 'xml_set_object mengintegrasikan SAX parser secara elegan ke dalam class method OOP.'
    }
  },

  // 752. XML_SET_PROCESSING_INSTRUCTION_HANDLER
  {
    id: 'php-ref-xml-set-processing-instruction-handler',
    title: 'PHP xml_set_processing_instruction_handler()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 752,
    overview: 'Kuasai fungsi xml_set_processing_instruction_handler(): menangani tag instruksi pemrosesan khusus (Processing Instruction <?target data?>) seperti <?xml-stylesheet ...?>.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PROCESSING INSTRUCTION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 752 / 754</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚙️ Instruksi Pemrosesan Khusus (xml_set_processing_instruction_handler)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>xml_set_processing_instruction_handler(XMLParser $parser, callable $handler): true</code> menangkap tag <code>&lt;?target data?&gt;</code> di dalam dokumen XML.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$xml = "<?xml version='1.0'?><?xml-stylesheet href='style.css'?><root>Data</root>";

$parser = xml_parser_create();

xml_set_processing_instruction_handler($parser, function($p, $target, $data) {
    echo "<p>Processing Instruction Ditemukan: Target = <strong>$target</strong> | Data = <strong style='color:#059669;'>$data</strong></p>";
});

echo "<h3>Hasil Pengujian Processing Instruction Handler:</h3>";
xml_parse($parser, $xml, true);

xml_parser_free($parser);
?>`,
    codeExplanation: [
      'xml_set_processing_instruction_handler() mengekstrak target "xml-stylesheet" dan argumen datanya.'
    ],
    challenge: {
      instruction: 'Pahami fungsi xml_set_processing_instruction_handler.',
      starterCode: `<?php
echo "xml_set_processing_instruction_handler menangani tag <?target data?>.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Contoh tag XML manakah yang ditangani oleh `xml_set_processing_instruction_handler()`?',
      options: [
        '`<?xml-stylesheet href="style.css"?>`',
        '`<!-- Komentar -->`',
        '`<tag attr="val">`',
        '`<!DOCTYPE ...>`'
      ],
      correctIndex: 0,
      explanation: 'Tag <?target data?> adalah contoh standar Processing Instruction XML.'
    }
  },

  // 753. XML_SET_START_NAMESPACE_DECL_HANDLER
  {
    id: 'php-ref-xml-set-start-namespace-decl-handler',
    title: 'PHP xml_set_start_namespace_decl_handler()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 753,
    overview: 'Kuasai fungsi xml_set_start_namespace_decl_handler(): mendaftarkan fungsi callback yang dipanggil tepat saat deklarasi namespace baru ditemukan dalam dokumen XML.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">START NAMESPACE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 753 / 754</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌐 Awal Deklarasi Namespace (xml_set_start_namespace_decl_handler)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>xml_set_start_namespace_decl_handler(XMLParser $parser, callable $handler): true</code> menangkap prefix dan URI dari deklarasi namespace XML <code>xmlns:prefix="uri"</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$xml = '<root xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body/></root>';

$parser = xml_parser_create_ns();

xml_set_start_namespace_decl_handler($parser, function($p, $prefix, $uri) {
    echo "<p>Namespace Baru: Prefix = <strong>$prefix</strong> | URI = <strong style='color:#059669;'>$uri</strong></p>";
});

echo "<h3>Hasil Pengujian Start Namespace Handler:</h3>";
xml_parse($parser, $xml, true);

xml_parser_free($parser);
?>`,
    codeExplanation: [
      'xml_set_start_namespace_decl_handler() mendeteksi prefix "soap" dan URI "http://schemas.xmlsoap.org/soap/envelope/".'
    ],
    challenge: {
      instruction: 'Pahami fungsi xml_set_start_namespace_decl_handler.',
      starterCode: `<?php
echo "xml_set_start_namespace_decl_handler menangkap awal deklarasi namespace.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Parameter apa sajakah yang dioperkan ke fungsi callback `xml_set_start_namespace_decl_handler()`?',
      options: [
        '`XMLParser $parser`, `string $prefix`, dan `string $uri`',
        'Hanya nama tag',
        'Nomor baris saja',
        'String XML mentah'
      ],
      correctIndex: 0,
      explanation: 'Callback menerima instance parser, prefix namespace, dan target URI.'
    }
  },

  // 754. XML_SET_UNPARSED_ENTITY_DECL_HANDLER & MASTER XML RECAP
  {
    id: 'php-ref-xml-set-unparsed-entity-decl-handler',
    title: 'PHP xml_set_unparsed_entity_decl_handler() & XML Parser Master',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 754,
    overview: 'Kuasai fungsi xml_set_unparsed_entity_decl_handler(): menangani deklarasi entitas unparsed NDATA DTD serta rekapitulasi tuntas arsitektur XML Parser SAX di PHP 8 backend.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">XML MASTER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 754 / 754</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏆 Master Lengkap PHP XML Parser (SAX)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>xml_set_unparsed_entity_decl_handler(XMLParser $parser, callable $handler): true</code> menangani deklarasi entitas unparsed <code>&lt;!ENTITY ... NDATA ...&gt;</code>. Seluruh fungsi XML Parser (Event-Driven SAX Streaming) kini telah Anda kuasai dengan paripurna.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Ringkasan Pilar PHP XML Parser (SAX Streaming):</h3>";
echo "<ul>";
echo "<li>✓ <strong>Lifecycle Parser:</strong> xml_parser_create(), xml_parser_create_ns(), xml_parser_free()</li>";
echo "<li>✓ <strong>SAX Event Handlers:</strong> xml_set_element_handler(), xml_set_character_data_handler(), xml_set_default_handler()</li>";
echo "<li>✓ <strong>Keamanan & Namespace:</strong> xml_set_external_entity_ref_handler() (XXE Protection), xml_set_start/end_namespace_decl_handler()</li>";
echo "<li>✓ <strong>Konfigurasi & Error:</strong> xml_parser_set_option(CASE_FOLDING), xml_get_error_code(), xml_error_string()</li>";
echo "<li>✓ <strong>Parsing Efisien:</strong> xml_parse() streaming, xml_parse_into_struct()</li>";
echo "</ul>";
echo "<p style='color:green; font-weight:bold; font-size:18px;'>🎉 Selamat! Seluruh kurikulum PHP XML Parser Reference (Materi 731 - 754) berhasil Anda kuasai secara komprehensif!</p>";
?>`,
    codeExplanation: [
      'Rekapitulasi lengkap fondasi SAX Event-Driven XML Parser PHP 8.'
    ],
    challenge: {
      instruction: 'Pahami arsitektur XML Parser PHP.',
      starterCode: `<?php
echo "PHP XML Parser SAX Selesai 100%!";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Kapan penggunaan XML Parser (SAX / `xml_parse()`) jauh lebih direkomendasikan dibandingkan SimpleXML atau DOMDocument di lingkungan produksi?',
      options: [
        'Ketika memproses dokumen XML berukuran sangat besar (ratusan MB hingga beberapa GB) dengan batas RAM terbatas, karena SAX mem-parsing secara streaming potongan demi potongan tanpa memuat seluruh pohon DOM ke memori server',
        'Hanya untuk file teks kecil',
        'Karena SAX mengubah XML ke JSON',
        'Keduanya identik'
      ],
      correctIndex: 0,
      explanation: 'SAX parser dirancang khusus untuk efisiensi memori ekstrem pada file XML raksasa.'
    }
  }
];

module.exports = phpPart70RefXml3;
