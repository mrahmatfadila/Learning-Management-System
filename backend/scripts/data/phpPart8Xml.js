// ==========================================================
// DATA MATERI PHP: BAB 6 - PHP XML (PARSERS, SIMPLEXML, EXPAT & DOM)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart8Xml = [
  // 1. PHP XML PARSERS
  {
    id: 'php-xml-parsers',
    title: 'PHP XML Parsers',
    chapter: 'PHP XML',
    chapterId: 'php-chap-xml',
    order: 1,
    overview: 'Pengantar pemrosesan data format XML (eXtensible Markup Language) di PHP: pahami struktur dokumen XML, hierarki elemen parent-child, dan perbandingan 3 model XML parser di PHP: SimpleXML (Tree-based), Expat (Event-based), dan DOM Parser (W3C Standard).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PHP XML</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 01 / 05</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📄 Pengolahan Data Dokumen XML di PHP</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            XML (eXtensible Markup Language) adalah format dokumen standar untuk transmisi data antar-aplikasi legacy, RSS feed, integrasi payment gateway bank, dan format sitemap Google SEO.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div class="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800/50">
            <h4 class="font-bold text-purple-700 dark:text-purple-400 text-sm mb-1">1. SimpleXML (Paling Praktis)</h4>
            <p class="text-slate-600 dark:text-slate-400">Tree-based parser yang mengubah seluruh XML menjadi objek PHP yang sangat mudah dibaca dengan operator panah <code>-&gt;</code>.</p>
          </div>
          <div class="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-800/50">
            <h4 class="font-bold text-indigo-700 dark:text-indigo-400 text-sm mb-1">2. DOM Parser (W3C DOM)</h4>
            <p class="text-slate-600 dark:text-slate-400">Menyediakan kontrol penuh untuk membuat, memodifikasi, memvalidasi skema XSD, dan menavigasi node dokumen XML.</p>
          </div>
          <div class="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/50">
            <h4 class="font-bold text-emerald-700 dark:text-emerald-400 text-sm mb-1">3. XML Expat (Event-Based)</h4>
            <p class="text-slate-600 dark:text-slate-400">Membaca file XML raksasa berbasis event (Start Element, Data, End Element) dengan konsumsi RAM yang sangat minim.</p>
          </div>
        </div>
      </div>
    `,
    code: `<?php
// Contoh String XML Sederhana
$xmlString = <<<XML
<?xml version="1.0" encoding="UTF-8"?>
<academy>
    <name>DevGrow Learning Management System</name>
    <course id="php-101">
        <title>Mastering PHP 8 & MySQL</title>
        <category>Backend</category>
        <price>350000</price>
    </course>
</academy>
XML;

echo "<h3>Struktur Dokumen XML Mentah:</h3>";
echo "<pre style='background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 10px; font-family: monospace; font-size: 12px;'>" . htmlspecialchars($xmlString) . "</pre>";
?>`,
    codeExplanation: [
      'Dokumen XML wajib diawali deklarasi prolog: <?xml version="1.0" encoding="UTF-8"?>.',
      'Sintaks Heredoc <<<XML ... XML memungkinkan penulisan teks multi-baris di PHP secara rapi.'
    ],
    challenge: {
      instruction: 'Ketahui bahwa SimpleXML adalah parser berbasis pohon (Tree-based) yang mengubah XML menjadi objek.',
      starterCode: `<?php
echo "SimpleXML adalah cara paling cepat membaca dokumen XML di PHP.";
?>`,
      hint: 'Klik RUN untuk mereview 3 jenis parser XML.'
    },
    quiz: {
      question: 'Parser XML bawaan PHP manakah yang paling mudah dan cepat digunakan untuk membaca data XML terstruktur menjadi objek PHP?',
      options: [
        'SimpleXML',
        'XML Expat',
        'RegEx Matcher',
        'JSON Parser'
      ],
      correctIndex: 0,
      explanation: 'SimpleXML adalah ekstensi bawaan PHP yang mengubah tag-tag XML menjadi properti objek dan array PHP secara otomatis.'
    }
  },

  // 2. PHP SIMPLEXML PARSER
  {
    id: 'php-xml-simplexml-parser',
    title: 'PHP SimpleXML Parser',
    chapter: 'PHP XML',
    chapterId: 'php-chap-xml',
    order: 2,
    overview: 'Kuasai fungsi simplexml_load_string() untuk membaca string XML dan simplexml_load_file() untuk membaca file fisik XML di server, serta penanganan error parsing dengan libxml_use_internal_errors().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SIMPLEXML PARSER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 02 / 05</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌿 Membaca Dokumen XML dengan SimpleXML</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            SimpleXML mem-parsing teks XML dan mengubahnya menjadi objek <code>SimpleXMLElement</code>. Anda cukup memanggil fungsi <code>simplexml_load_string($str)</code> atau <code>simplexml_load_file("file.xml")</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$dataXml = <<<XML
<?xml version="1.0" encoding="UTF-8"?>
<note>
    <to>Muhammad Rahmat Fadila</to>
    <from>DevGrow Admin</from>
    <heading>Notifikasi Kelulusan</heading>
    <body>Selamat! Anda telah menyelesaikan 100+ materi PHP & MySQL dengan predikat Sangat Baik.</body>
</note>
XML;

// Membaca XML dengan SimpleXML
$xml = simplexml_load_string($dataXml) or die("Gagal memproses XML!");

echo "<h3>Hasil Parsing Objek SimpleXML:</h3>";
echo "<ul>";
echo "<li><strong>Kepada (To):</strong> " . $xml->to . "</li>";
echo "<li><strong>Dari (From):</strong> " . $xml->from . "</li>";
echo "<li><strong>Subjek:</strong> " . $xml->heading . "</li>";
echo "<li><strong>Pesan:</strong> " . $xml->body . "</li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'simplexml_load_string() mengubah tag <to>, <from>, <heading>, dan <body> menjadi properti objek ($xml->to, $xml->from).',
      'Jika format XML rusak (misal tag penutup hilang), fungsi akan mengembalikan nilai false.'
    ],
    challenge: {
      instruction: 'Akses properti $xml->heading dari objek SimpleXML di atas.',
      starterCode: `<?php
$xml = simplexml_load_string("<pesan><judul>Halo PHP</judul></pesan>");
echo "Judul: " . $xml->judul;
?>`,
      hint: 'Akses dengan $xml->judul.'
    },
    quiz: {
      question: 'Fungsi PHP apakah yang digunakan untuk memuat dan mem-parsing berkas fisik XML langsung dari URL atau path direktori file server?',
      options: [
        'simplexml_load_file()',
        'simplexml_load_string()',
        'read_xml_file()',
        'xml_parse_file()'
      ],
      correctIndex: 0,
      explanation: 'simplexml_load_file("path/file.xml") memuat file XML dari disk atau URL dan mengonversinya menjadi objek SimpleXML.'
    }
  },

  // 3. PHP SIMPLEXML - GET
  {
    id: 'php-xml-simplexml-get',
    title: 'PHP SimpleXML - Get',
    chapter: 'PHP XML',
    chapterId: 'php-chap-xml',
    order: 3,
    overview: 'Pelajari cara mengekstrak nilai elemen (Node Values), membaca nilai Atribut (Attributes), looping elemen berulang dengan foreach, dan navigasi anak-cucu tag XML.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">EKSTRAKSI SIMPLEXML</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 03 / 05</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎯 Membaca Nilai Node & Nilai Atribut</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Dalam XML, data dapat disimpan di dalam isi tag (<em>Node Value</em>: <code>&lt;title&gt;PHP&lt;/title&gt;</code>) maupun di dalam atribut tag (<em>Attribute</em>: <code>&lt;book category="web"&gt;</code>). Nilai atribut dibaca menggunakan tanda kurung siku <code>$elem['namaAtribut']</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$xmlCatalog = <<<XML
<?xml version="1.0" encoding="UTF-8"?>
<bookstore>
    <book category="PROGRAMMING" lang="id">
        <title>Mastering PHP 8</title>
        <author>Muhammad Rahmat Fadila</author>
        <price currency="IDR">350000</price>
    </book>
    <book category="DATABASE" lang="en">
        <title>High Performance MySQL</title>
        <author>Baron Schwartz</author>
        <price currency="USD">45</price>
    </book>
    <book category="FRONTEND" lang="id">
        <title>React & Next.js Pro</title>
        <author>DevGrow Team</author>
        <price currency="IDR">275000</price>
    </book>
</bookstore>
XML;

$xml = simplexml_load_string($xmlCatalog);

echo "<h3>Daftar Buku (Ekstraksi Node & Atribut):</h3>";
echo "<table border='1' cellpadding='8' style='border-collapse: collapse; width: 100%;'>";
echo "<tr style='background: #f1f5f9;'><th>Kategori</th><th>Judul Buku</th><th>Penulis</th><th>Harga</th></tr>";

// Looping setiap tag <book>
foreach ($xml->book as $buku) {
    // Membaca atribut dengan kurung siku ['category']
    $kategori = $buku['category'];
    $mataUang = $buku->price['currency'];
    
    echo "<tr>";
    echo "<td><span style='background: #e0e7ff; padding: 2px 6px; border-radius: 4px; font-size: 11px;'>$kategori</span></td>";
    echo "<td><strong>" . $buku->title . "</strong></td>";
    echo "<td>" . $buku->author . "</td>";
    echo "<td>" . $buku->price . " $mataUang</td>";
    echo "</tr>";
}

echo "</table>";
?>`,
    codeExplanation: [
      'Foreach loop ($xml->book as $buku) secara otomatis mengulang setiap tag <book> di dalam <bookstore>.',
      '$buku["category"] membaca nilai atribut category="PROGRAMMING".',
      '$buku->title membaca nilai teks di dalam tag <title>...</title>.'
    ],
    challenge: {
      instruction: 'Akses atribut category dari buku pertama: $xml->book[0][\'category\'].',
      starterCode: `<?php
$xml = simplexml_load_string('<root><item id="101">Data A</item></root>');
echo "Atribut ID: " . $xml->item['id'];
?>`,
      hint: 'Akses atribut dengan $xml->item[\'id\'].'
    },
    quiz: {
      question: 'Bagaimana cara membaca nilai dari atribut (seperti id="123") pada tag elemen SimpleXML di PHP?',
      options: [
        'Menggunakan sintaks kurung siku: $element[\'id\']',
        'Menggunakan operator panah: $element->id',
        'Memanggil fungsi get_attr(\'id\')',
        'Atribut tidak bisa dibaca oleh SimpleXML'
      ],
      correctIndex: 0,
      explanation: 'Di SimpleXML, atribut elemen diakses menggunakan sintaks array kurung siku: $node[\'attributeName\'].'
    }
  },

  // 4. PHP XML EXPAT PARSER
  {
    id: 'php-xml-expat-parser',
    title: 'PHP XML Expat Parser',
    chapter: 'PHP XML',
    chapterId: 'php-chap-xml',
    order: 4,
    overview: 'Pelajari XML Expat Parser: model parsing event-driven berbasis callback (xml_parser_create, xml_set_element_handler, xml_set_character_data_handler, xml_parse, xml_parser_free) untuk memproses berkas XML berukuran sangat besar secara super hemat memori.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">EXPAT PARSER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 04 / 05</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚡ Event-Driven XML Expat Parser</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Jika SimpleXML memuat seluruh dokumen ke dalam memori RAM sekaligus (tidak cocok untuk file XML ratusan Megabyte), <strong>Expat Parser</strong> membaca file secara streaming dan memicu fungsi callback setiap kali menemukan tag buka, teks isi, dan tag tutup.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// 1. Fungsi Callback saat menemukan Tag Pembuka (<TAG>)
function tagBuka($parser, $namaTag, $atribut) {
    echo "🔹 <strong>Tag Buka:</strong> &lt;$namaTag&gt;<br>";
}

// 2. Fungsi Callback saat menemukan Tag Penutup (</TAG>)
function tagTutup($parser, $namaTag) {
    echo "🔸 <strong>Tag Tutup:</strong> &lt;/$namaTag&gt;<br>";
}

// 3. Fungsi Callback saat menemukan Teks di dalam Tag
function isiData($parser, $data) {
    $teks = trim($data);
    if (!empty($teks)) {
        echo "&nbsp;&nbsp;&nbsp;&nbsp;📄 <em>Teks:</em> $teks<br>";
    }
}

$xmlContent = "<kursus><judul>PHP 8 XML Expat</judul><level>Advanced</level></kursus>";

echo "<h3>Alur Eksekusi Event-Driven Expat Parser:</h3>";
echo "<div style='background: #f8fafc; padding: 15px; border-radius: 10px; border: 1px solid #cbd5e1; font-size: 12px;'>";

// Inisialisasi Expat Parser
$parser = xml_parser_create();
xml_set_element_handler($parser, "tagBuka", "tagTutup");
xml_set_character_data_handler($parser, "isiData");

// Eksekusi parsing
xml_parse($parser, $xmlContent);

// Bebaskan memori
xml_parser_free($parser);

echo "</div>";
?>`,
    codeExplanation: [
      'xml_parser_create() membuat instance parser event-driven.',
      'xml_set_element_handler() mendaftarkan callback untuk tag pembuka dan tag penutup.',
      'xml_parser_free() melepaskan memory resource sistem operasi setelah selesai.'
    ],
    challenge: {
      instruction: 'Ketahui bahwa Expat Parser adalah event-based parser yang sangat hemat RAM.',
      starterCode: `<?php
echo "Expat Parser ideal untuk memproses dokumen XML berukuran ratusan MB.";
?>`,
      hint: 'Klik RUN untuk mereview arsitektur Expat.'
    },
    quiz: {
      question: 'Mengapa XML Expat Parser lebih unggul dibandingkan SimpleXML saat membaca file XML berukuran sangat besar (ratusan Megabyte)?',
      options: [
        'Karena Expat berbasis Event-Driven streaming dan tidak memuat seluruh file ke RAM sekaligus',
        'Karena Expat mengubah XML menjadi file PDF',
        'Karena Expat tidak membutuhkan PHP',
        'Karena Expat menghapus spasi otomatis'
      ],
      correctIndex: 0,
      explanation: 'Expat membaca file XML secara streaming baris per baris tanpa memuat seluruh hierarki pohon dokumen ke dalam RAM, sehingga sangat hemat memori.'
    }
  },

  // 5. PHP DOM PARSER
  {
    id: 'php-xml-dom-parser',
    title: 'PHP DOM Parser',
    chapter: 'PHP XML',
    chapterId: 'php-chap-xml',
    order: 5,
    overview: 'Kuasai DOM Parser (W3C Document Object Model) di PHP: class DOMDocument, loadXML(), getElementsByTagName(), createElement(), appendChild(), dan saveXML() untuk manipulasi dan pembuatan file XML.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DOM PARSER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 05 / 05</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏛️ W3C DOMDocument: Manipulasi & Pembuatan XML</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Class <code>DOMDocument</code> adalah implementasi standar W3C DOM resmi di PHP. DOM memungkinkan Anda tidak hanya membaca, tetapi juga <strong>membuat dokumen XML baru dari nol, memodifikasi isi tag, dan menyisipkan node elemen baru</strong>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Membuat Dokumen XML Baru dari Nol menggunakan DOMDocument
$dom = new DOMDocument("1.0", "UTF-8");
$dom->formatOutput = true; // Merapikan indentasi XML (Pretty Print)

// 1. Buat Root Element <lms>
$root = $dom->createElement("lms");
$dom->appendChild($root);

// 2. Buat Elemen <module id="php-xml">
$module = $dom->createElement("module");
$module->setAttribute("id", "php-xml");
$root->appendChild($module);

// 3. Tambahkan Sub-Elemen <title> dan <lessons>
$title = $dom->createElement("title", "PHP XML Processing");
$module->appendChild($title);

$lessons = $dom->createElement("lessons", "5 Materi Lengkap");
$module->appendChild($lessons);

// 4. Output Hasil XML
$hasilXml = $dom->saveXML();

echo "<h3>Dokumen XML yang Dibuat Dinamis oleh DOMDocument:</h3>";
echo "<pre style='background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 10px; font-family: monospace; font-size: 12px;'>" . htmlspecialchars($hasilXml) . "</pre>";
?>`,
    codeExplanation: [
      '$dom->formatOutput = true mengatur format XML agar memiliki baris baru dan indentasi rapi.',
      '$dom->createElement("tag", "nilai") membuat node elemen baru.',
      '$root->appendChild($child) menyisipkan elemen anak ke dalam elemen induk.',
      '$dom->saveXML() mengekspor seluruh struktur objek DOM menjadi string XML yang valid.'
    ],
    challenge: {
      instruction: 'Pahami method $dom->saveXML() untuk mengekspor dokumen XML.',
      starterCode: `<?php
$dom = new DOMDocument("1.0", "UTF-8");
$root = $dom->createElement("status", "Online");
$dom->appendChild($root);
echo htmlspecialchars($dom->saveXML());
?>`,
      hint: 'Klik RUN untuk melihat pembuatan XML dengan DOMDocument.'
    },
    quiz: {
      question: 'Properti boolean apakah pada objek DOMDocument yang disetel bernilai TRUE agar hasil keluaran XML memiliki baris baru dan indentasi yang rapi (Pretty Print)?',
      options: [
        '$dom->formatOutput = true',
        '$dom->prettyPrint = true',
        '$dom->indentXml = true',
        '$dom->beautify = true'
      ],
      correctIndex: 0,
      explanation: '$dom->formatOutput = true menginstruksikan DOMDocument untuk memformat XML dengan struktur indentasi dan baris baru yang rapi.'
    }
  }
];

module.exports = phpPart8Xml;
