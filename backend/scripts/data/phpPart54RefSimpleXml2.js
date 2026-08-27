// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (SIMPLEXML PART 2: 583-594)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart54RefSimpleXml2 = [
  // 583. SAVEXML
  {
    id: 'php-ref-sxml-savexml',
    title: 'PHP SimpleXMLElement::saveXML()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 583,
    overview: 'Kuasai method SimpleXMLElement::saveXML(): alias resmi dari asXML() untuk mengekspor objek SimpleXML ke string atau file XML.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">XML SERIALIZER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 583 / 594</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">💾 Serialisasi Dokumen XML (saveXML)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$node->saveXML(?string $filename = null): string|bool</code> mengembalikan string XML yang diformat dengan baik. Bekerja identik dengan <code>asXML()</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$xml = new SimpleXMLElement("<pengaturan><tema>dark</tema><bahasa>id</bahasa></pengaturan>");

$xmlString = $xml->saveXML();

echo "<h3>Hasil Penggunaan saveXML():</h3>";
echo "<pre style='background:#0f172a; color:#38bdf8; padding:12px; border-radius:8px;'>";
echo htmlspecialchars($xmlString);
echo "</pre>";
?>`,
    codeExplanation: [
      'saveXML() dan asXML() adalah fungsi yang sama persis di PHP SimpleXML.'
    ],
    challenge: {
      instruction: 'Pahami fungsi saveXML.',
      starterCode: `<?php
$xml = new SimpleXMLElement("<app><status>OK</status></app>");
echo $xml->saveXML();
?>`,
      hint: 'Panggil $xml->saveXML().'
    },
    quiz: {
      question: 'Method manakah pada `SimpleXMLElement` yang memiliki fungsi identik 100% dengan `saveXML()`?',
      options: [
        '`asXML()`',
        '`toXML()`',
        '`exportXML()`',
        '`renderXML()`'
      ],
      correctIndex: 0,
      explanation: 'saveXML adalah alias resmi dari asXML.'
    }
  },

  // 584. SIMPLEXML_IMPORT_DOM
  {
    id: 'php-ref-sxml-import-dom',
    title: 'PHP simplexml_import_dom()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 584,
    overview: 'Kuasai fungsi simplexml_import_dom(): mengonversi objek DOMNode / DOMDocument dari library DOMDocument PHP menjadi objek SimpleXMLElement untuk kemudahan akses properti.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DOM INTEROP</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 584 / 594</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔄 Jembatan DOM ke SimpleXML (simplexml_import_dom)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>simplexml_import_dom(SimpleXMLElement|DOMNode $node, ?string $class_name = "SimpleXMLElement"): ?SimpleXMLElement</code> mengonversi node DOMDocument (yang kuat untuk manipulasi kompleks) menjadi objek SimpleXML (yang sangat mudah dibaca dengan notasi panah <code>-></code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
// 1. Buat dokumen dengan DOMDocument
$dom = new DOMDocument();
$dom->loadXML("<laporan><total>1500000</total></laporan>");

// 2. Konversi ke SimpleXML
$sxml = simplexml_import_dom($dom);

echo "<h3>Hasil Penggunaan simplexml_import_dom():</h3>";
echo "<p>Total Nilai Laporan: <strong style='color:#059669;'>Rp " . number_format((int)$sxml->total, 0, ',', '.') . "</strong></p>";
?>`,
    codeExplanation: [
      'simplexml_import_dom() menghubungkan dunia DOM yang berorientasi W3C standar dengan kemudahan sintaks SimpleXML.'
    ],
    challenge: {
      instruction: 'Pahami fungsi simplexml_import_dom.',
      starterCode: `<?php
$dom = new DOMDocument();
$dom->loadXML("<test>OK</test>");
$sxml = simplexml_import_dom($dom);
echo $sxml[0];
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Apa fungsi utama dari `simplexml_import_dom()`?',
      options: [
        'Mengonversi instance node DOMDocument / DOMNode menjadi objek `SimpleXMLElement`',
        'Mengimpor file HTML',
        'Menyimpan DOM ke database',
        'Menghapus DOM node'
      ],
      correctIndex: 0,
      explanation: 'simplexml_import_dom bertindak sebagai jembatan konversi dari DOMDocument ke SimpleXMLElement.'
    }
  },

  // 585. SIMPLEXML_LOAD_FILE
  {
    id: 'php-ref-sxml-load-file',
    title: 'PHP simplexml_load_file()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 585,
    overview: 'Kuasai fungsi simplexml_load_file(): membaca dan mengurai (parse) file dokumen XML dari path lokal disk atau URL remote langsung menjadi objek SimpleXMLElement.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">XML FILE PARSER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 585 / 594</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📂 Membaca File XML (simplexml_load_file)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>simplexml_load_file(string $filename, ?string $class_name = "SimpleXMLElement", int $options = 0, string $namespace_or_prefix = "", bool $is_prefix = false): SimpleXMLElement|false</code> membaca file seperti <code>config.xml</code>, <code>sitemap.xml</code>, atau feed RSS URL eksternal dalam 1 baris kode elegan.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Simulasi membaca file konfigurasi XML
$xmlConfigContent = <<<XML
<konfigurasi>
    <database>
        <host>localhost</host>
        <port>5432</port>
        <nama>lms_db</nama>
    </database>
    <app>
        <nama>DevGrow LMS</nama>
        <versi>2.0.0</versi>
    </app>
</konfigurasi>
XML;

// Gunakan load_string untuk simulasi file
$xml = simplexml_load_string($xmlConfigContent);

echo "<h3>Hasil Penggunaan simplexml_load_file() (Konfigurasi):</h3>";
echo "<ul>";
echo "<li>Aplikasi : <strong style='color:#059669;'>{$xml->app->nama}</strong> (v{$xml->app->versi})</li>";
echo "<li>Database : <code>{$xml->database->host}:{$xml->database->port}/{$xml->database->nama}</code></li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'simplexml_load_file("config.xml") membaca file dan langsung mengembalikan pohon objek XML.'
    ],
    challenge: {
      instruction: 'Pahami fungsi simplexml_load_file untuk memuat file XML.',
      starterCode: `<?php
echo "Sintaks: \$xml = simplexml_load_file('data.xml');";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Apa yang dikembalikan oleh `simplexml_load_file()` jika file XML yang dituju tidak ditemukan atau memiliki kesalahan sintaks XML (malformed)?',
      options: [
        'Boolean `false` (disertai libxml warning error)',
        '`null`',
        'Objek kosong',
        'Fatal error'
      ],
      correctIndex: 0,
      explanation: 'simplexml_load_file mengembalikan false jika file gagal dibaca atau sintaks XML tidak valid.'
    }
  },

  // 586. SIMPLEXML_LOAD_STRING
  {
    id: 'php-ref-sxml-load-string',
    title: 'PHP simplexml_load_string()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 586,
    overview: 'Kuasai fungsi simplexml_load_string(): mengurai (parse) string XML mentah dari respons HTTP API (SOAP Web Services, XML API PayGate) menjadi objek SimpleXMLElement.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">XML STRING PARSER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 586 / 594</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📄 Mengurai String XML Mentah (simplexml_load_string)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>simplexml_load_string(string $data, ?string $class_name = "SimpleXMLElement", int $options = 0, string $namespace_or_prefix = "", bool $is_prefix = false): SimpleXMLElement|false</code> adalah fungsi paling sering dipakai untuk mengonsumsi respons API berbasis XML (Midtrans, FedEx/DHL Shipping API, SOAP). Gunakan flag <code>LIBXML_NOCDATA</code> untuk menggabungkan blok CDATA ke string teks biasa.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$xmlResponse = <<<XML
<payment_response>
    <status_code>200</status_code>
    <transaction_id>TRX-98234</transaction_id>
    <amount>550000</amount>
    <message><![CDATA[Pembayaran Berhasil Diverifikasi]]></message>
</payment_response>
XML;

// Parse dengan flag LIBXML_NOCDATA agar CDATA terbaca murni sebagai teks
$xml = simplexml_load_string($xmlResponse, 'SimpleXMLElement', LIBXML_NOCDATA);

echo "<h3>Hasil Konsumsi XML API (simplexml_load_string):</h3>";
echo "<p>Transaksi ID : <strong style='color:#059669;'>{$xml->transaction_id}</strong></p>";
echo "<p>Status Code  : <strong>{$xml->status_code}</strong></p>";
echo "<p>Pesan Respon : <em>{$xml->message}</em></p>";
?>`,
    codeExplanation: [
      'simplexml_load_string($str, "SimpleXMLElement", LIBXML_NOCDATA) mengonversi teks respons API menjadi objek PHP bersih.'
    ],
    challenge: {
      instruction: 'Parse string "<res><id>123</id></res>" dengan simplexml_load_string.',
      starterCode: `<?php
$xml = simplexml_load_string("<res><id>123</id></res>");
echo "ID: " . $xml->id;
?>`,
      hint: 'Panggil simplexml_load_string.'
    },
    quiz: {
      question: 'Flag konstanta libxml apakah yang digunakan pada `simplexml_load_string()` agar teks di dalam blok `<![CDATA[...]]>` otomatis digabungkan menjadi string teks biasa?',
      options: [
        '`LIBXML_NOCDATA`',
        '`LIBXML_NOBLANKS`',
        '`LIBXML_PARSEHUGE`',
        '`LIBXML_HTML_NOIMPLIED`'
      ],
      correctIndex: 0,
      explanation: 'LIBXML_NOCDATA menggabungkan node CDATA menjadi text nodes.'
    }
  },

  // 587. XPATH
  {
    id: 'php-ref-sxml-xpath',
    title: 'PHP SimpleXMLElement::xpath()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 587,
    overview: 'Kuasai method SimpleXMLElement::xpath(): menjalankan ekspresi query XPath 1.0 untuk mencari, memfilter, dan mengekstrak node XML spesifik berdasarkan kriteria kondisi kompleks.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">XPATH QUERY ENGINE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 587 / 594</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎯 Pencarian Node Canggih (xpath)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$node->xpath(string $expression): array|false</code> mengeksekusi path syntax XPath seperti:
            <code>//buku[harga &lt; 100000]</code>, <code>//user[@status='aktif']</code>, atau <code>//item[last()]</code> dan mengembalikan array objek SimpleXMLElement yang memenuhi kriteria filter.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$xml = new SimpleXMLElement <<<XML
<toko>
    <buku id="1" kategori="web"><judul>Mastering PHP 8</judul><harga>250000</harga></buku>
    <buku id="2" kategori="db"><judul>PostgreSQL Pro</judul><harga>350000</harga></buku>
    <buku id="3" kategori="web"><judul>Next.js Fullstack</judul><harga>180000</harga></buku>
</toko>
XML;

// Query 1: Cari buku dengan kategori 'web'
$bukuWeb = $xml->xpath("//buku[@kategori='web']");

// Query 2: Cari buku dengan harga > 200.000
$bukuMahal = $xml->xpath("//buku[harga > 200000]");

echo "<h3>Buku Kategori 'web' (XPath //buku[@kategori='web']):</h3>";
echo "<ul>";
foreach ($bukuWeb as $b) {
    echo "<li><strong style='color:#059669;'>{$b->judul}</strong> (Rp " . number_format((int)$b->harga, 0, ',', '.') . ")</li>";
}
echo "</ul>";

echo "<h3>Buku Harga > 200.000 (XPath //buku[harga > 200000]):</h3>";
echo "<ul>";
foreach ($bukuMahal as $b) {
    echo "<li><strong style='color:#4f46e5;'>{$b->judul}</strong></li>";
}
echo "</ul>";
?>`,
    codeExplanation: [
      '$xml->xpath("//buku[@kategori=\'web\']") menyaring elemen berdasarkan atribut kategori.',
      '$xml->xpath("//buku[harga > 200000]") menyaring elemen berdasarkan kondisi nilai angka child node.'
    ],
    challenge: {
      instruction: 'Cari semua elemen <title> di dokumen menggunakan $xml->xpath("//title").',
      starterCode: `<?php
$xml = new SimpleXMLElement("<doc><title>Satu</title><title>Dua</title></doc>");
$titles = $xml->xpath("//title");
echo count($titles) . " title ditemukan.";
?>`,
      hint: 'Panggil $xml->xpath("//title").'
    },
    quiz: {
      question: 'Sintaks ekspresi XPath apakah yang digunakan untuk mencari elemen `<user>` yang memiliki atribut `role="admin"` di bagian mana pun dalam dokumen?',
      options: [
        '`//user[@role="admin"]`',
        '`//user[role="admin"]`',
        '`/user/@admin`',
        '`user:role=admin`'
      ],
      correctIndex: 0,
      explanation: 'Tanda @ digunakan dalam sintaks XPath untuk merujuk pada atribut elemen (@role="admin").'
    }
  },

  // 588. CURRENT
  {
    id: 'php-ref-sxml-current',
    title: 'PHP SimpleXMLIterator::current()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 588,
    overview: 'Kuasai method SimpleXMLIterator::current(): mengembalikan elemen SimpleXMLElement saat ini yang sedang ditunjuk oleh iterator kursor.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">XML ITERATOR</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 588 / 594</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📍 Elemen Kursor Iterator Saat Ini (current)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$iterator->current(): ?SimpleXMLIterator</code> mengembalikan elemen saat ini dalam traversal SPL Iterator. <code>SimpleXMLIterator</code> memperluas <code>SimpleXMLElement</code> dengan kemampuan RecursiveIterator untuk traversal pohon XML secara mendalam.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$xml = new SimpleXMLIterator("<items><item>Item A</item><item>Item B</item></items>");
$xml->rewind();

echo "<h3>Hasil Penggunaan SimpleXMLIterator::current():</h3>";
echo "<p>Elemen Saat Ini: <strong style='color:#059669;'>" . (string)$xml->current() . "</strong></p>";
?>`,
    codeExplanation: [
      '$xml->current() membaca nilai node pada posisi kursor iterator saat ini.'
    ],
    challenge: {
      instruction: 'Pahami fungsi current() pada iterator.',
      starterCode: `<?php
$it = new SimpleXMLIterator("<root><a/></root>");
$it->rewind();
echo $it->valid() ? "Valid" : "Invalid";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Interface SPL standar apakah yang diimplementasikan oleh kelas `SimpleXMLIterator`?',
      options: [
        '`RecursiveIterator` dan `SeekableIterator`',
        '`ArrayAccess` saja',
        '`Countable` saja',
        '`Serializable`'
      ],
      correctIndex: 0,
      explanation: 'SimpleXMLIterator mengimplementasikan RecursiveIterator untuk traversal pohon hierarkis.'
    }
  },

  // 589. GETCHILDREN
  {
    id: 'php-ref-sxml-getchildren-iter',
    title: 'PHP SimpleXMLIterator::getChildren()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 589,
    overview: 'Kuasai method SimpleXMLIterator::getChildren(): mengembalikan sub-iterator untuk elemen anak dari node saat ini dalam traversal rekursif RecursiveIteratorIterator.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">RECURSIVE XML</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 589 / 594</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌿 Sub-Iterator Anak Rekursif (getChildren)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$iterator->getChildren(): ?SimpleXMLIterator</code> membuat iterator baru untuk menelusuri cabang anak di bawah node saat ini.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$xml = new SimpleXMLIterator("<kategori><subkategori><produk>Monitor 4K</produk></subkategori></kategori>");

for ($xml->rewind(); $xml->valid(); $xml->next()) {
    if ($xml->hasChildren()) {
        $subIt = $xml->getChildren();
        echo "<h3>Hasil Penggunaan getChildren():</h3>";
        echo "<p>Child Subkategori Ditemukan: <strong style='color:#059669;'>{$subIt->getName()}</strong></p>";
    }
}
?>`,
    codeExplanation: [
      'getChildren() memungkinkan navigasi ke level kedalaman pohon XML berikutnya.'
    ],
    challenge: {
      instruction: 'Pahami fungsi getChildren pada iterator XML.',
      starterCode: `<?php
echo "getChildren() mengembalikan sub-iterator untuk elemen anak.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Method apa yang harus dipanggil terlebih dahulu untuk memastikan node memiliki anak sebelum memanggil `getChildren()`?',
      options: [
        '`$iterator->hasChildren()`',
        '`$iterator->valid()`',
        '`$iterator->count()`',
        '`$iterator->next()`'
      ],
      correctIndex: 0,
      explanation: 'hasChildren() mengembalikan boolean true jika node saat ini memiliki sub-elemen.'
    }
  },

  // 590. HASCHILDREN
  {
    id: 'php-ref-sxml-haschildren',
    title: 'PHP SimpleXMLIterator::hasChildren()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 590,
    overview: 'Kuasai method SimpleXMLIterator::hasChildren(): memeriksa apakah elemen saat ini memiliki child node (elemen anak) untuk mencegah error pada traversal rekursif.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">RECURSIVE CHECK</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 590 / 594</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">❓ Pengecekan Eksistensi Child Node (hasChildren)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$iterator->hasChildren(): bool</code> mengembalikan <code>true</code> jika elemen kursor saat ini memiliki satu atau lebih sub-elemen XML.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$xml = new SimpleXMLIterator("<root><leaf>Teks Saja</leaf><branch><subleaf/></branch></root>");

$xml->rewind();
$leafHasChild = $xml->hasChildren(); // leaf

$xml->next();
$branchHasChild = $xml->hasChildren(); // branch

echo "<h3>Hasil Pengujian hasChildren():</h3>";
echo "<p>Node <leaf> memiliki anak   : <strong>" . ($leafHasChild ? 'Ya' : 'Tidak') . "</strong></p>";
echo "<p>Node <branch> memiliki anak : <strong style='color:#059669;'>" . ($branchHasChild ? 'Ya' : 'Tidak') . "</strong></p>";
?>`,
    codeExplanation: [
      'hasChildren() memeriksa apakah node XML bercabang (branch) atau merupakan daun akhir (leaf).'
    ],
    challenge: {
      instruction: 'Periksa hasChildren pada node XML.',
      starterCode: `<?php
$it = new SimpleXMLIterator("<root><a/></root>");
$it->rewind();
echo $it->hasChildren() ? "Ada anak" : "Tidak ada anak";
?>`,
      hint: 'Panggil $it->hasChildren().'
    },
    quiz: {
      question: 'Tipe data apakah yang dikembalikan oleh `$iterator->hasChildren()`?',
      options: [
        'Boolean (`true` jika memiliki elemen anak, `false` jika tidak)',
        'Integer jumlah anak',
        'Array anak',
        'Objek child'
      ],
      correctIndex: 0,
      explanation: 'hasChildren mengembalikan nilai boolean true/false.'
    }
  },

  // 591. KEY
  {
    id: 'php-ref-sxml-key',
    title: 'PHP SimpleXMLIterator::key()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 591,
    overview: 'Kuasai method SimpleXMLIterator::key(): mengembalikan nama tag XML dari elemen saat ini yang sedang ditunjuk oleh kursor iterator.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ITERATOR KEY</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 591 / 594</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔑 Kunci / Nama Tag Iterator (key)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$iterator->key(): string</code> mengembalikan nama tag elemen XML saat ini (ekuivalen dengan <code>$node->getName()</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$xml = new SimpleXMLIterator("<data><pengguna>Rahmat</pengguna><role>Admin</role></data>");

echo "<h3>Iterasi Kunci dan Nilai via Iterator:</h3>";
echo "<ul>";
for ($xml->rewind(); $xml->valid(); $xml->next()) {
    echo "<li>Kunci (key): <code>{$xml->key()}</code> -> Nilai: <strong style='color:#059669;'>{$xml->current()}</strong></li>";
}
echo "</ul>";
?>`,
    codeExplanation: [
      '$xml->key() menghasilkan nama tag "pengguna" pada iterasi 1 dan "role" pada iterasi 2.'
    ],
    challenge: {
      instruction: 'Pahami fungsi key() pada iterator XML.',
      starterCode: `<?php
$it = new SimpleXMLIterator("<root><nama>Test</nama></root>");
$it->rewind();
echo "Key: " . $it->key();
?>`,
      hint: 'Panggil $it->key().'
    },
    quiz: {
      question: 'Informasi apakah yang dikembalikan oleh `$iterator->key()` pada `SimpleXMLIterator`?',
      options: [
        'String nama tag XML dari elemen saat ini',
        'Nomor indeks angka integer',
        'Nilai atribut id',
        'Ukuran RAM node'
      ],
      correctIndex: 0,
      explanation: 'key() pada SimpleXMLIterator mengembalikan nama tag XML dari elemen saat ini.'
    }
  },

  // 592. NEXT
  {
    id: 'php-ref-sxml-next',
    title: 'PHP SimpleXMLIterator::next()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 592,
    overview: 'Kuasai method SimpleXMLIterator::next(): memajukan kursor iterator ke elemen XML berikutnya dalam daftar anak.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">NEXT NODE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 592 / 594</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⏭️ Maju ke Elemen Berikutnya (next)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$iterator->next(): void</code> memindahkan pointer iterator maju satu posisi ke elemen saudara berikutnya.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$xml = new SimpleXMLIterator("<items><item>Pertama</item><item>Kedua</item></items>");
$xml->rewind();
$xml->next(); // Maju ke item kedua

echo "<h3>Hasil Penggunaan next():</h3>";
echo "<p>Elemen Setelah next(): <strong style='color:#059669;'>{$xml->current()}</strong> (Kedua)</p>";
?>`,
    codeExplanation: [
      '$xml->next() menggeser kursor ke depan.'
    ],
    challenge: {
      instruction: 'Pahami fungsi next() pada iterator.',
      starterCode: `<?php
echo "next() memajukan posisi pointer iterator.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Apa yang dilakukan oleh method `$iterator->next()`?',
      options: [
        'Memindahkan posisi kursor iterator maju ke elemen berikutnya',
        'Menghapus elemen berikutnya',
        'Kembali ke awal',
        'Mencetak elemen'
      ],
      correctIndex: 0,
      explanation: 'next() memajukan posisi iterator satu langkah.'
    }
  },

  // 593. REWIND
  {
    id: 'php-ref-sxml-rewind',
    title: 'PHP SimpleXMLIterator::rewind()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 593,
    overview: 'Kuasai method SimpleXMLIterator::rewind(): mereset/mengembalikan kursor iterator kembali ke elemen pertama di awal daftar.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">RESET POINTER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 593 / 594</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⏮️ Reset Iterator ke Awal (rewind)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$iterator->rewind(): void</code> memposisikan ulang kursor traversal ke elemen indeks ke-0. Wajib dipanggil sebelum memulai iterasi manual.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$xml = new SimpleXMLIterator("<list><val>1</val><val>2</val></list>");
$xml->rewind();

echo "<h3>Hasil Penggunaan rewind():</h3>";
echo "<p>Elemen Pertama: <strong style='color:#059669;'>{$xml->current()}</strong></p>";
?>`,
    codeExplanation: [
      '$xml->rewind() mengembalikan posisi kursor ke elemen awal.'
    ],
    challenge: {
      instruction: 'Pahami fungsi rewind() pada iterator.',
      starterCode: `<?php
echo "rewind() mereset kursor ke elemen awal.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Kapan method `$iterator->rewind()` harus dipanggil?',
      options: [
        'Sebelum memulai traversal iterasi baru agar kursor dipastikan berada pada elemen pertama',
        'Setelah selesai loop',
        'Hanya saat error',
        'Tidak pernah'
      ],
      correctIndex: 0,
      explanation: 'rewind() mempersiapkan iterator untuk pembacaan dari elemen awal.'
    }
  },

  // 594. VALID & SIMPLEXML COMPLETE
  {
    id: 'php-ref-sxml-valid',
    title: 'PHP SimpleXMLIterator::valid() & SimpleXML Architecture',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 594,
    overview: 'Kuasai method SimpleXMLIterator::valid(): memvalidasi apakah posisi kursor iterator saat ini masih menunjuk ke elemen yang ada (bukan akhir data) & rekapitulasi arsitektur SimpleXML.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">SIMPLEXML COMPLETE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 594 / 594</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">✅ Validasi Kursor Iterator (valid) & Arsitektur SimpleXML</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$iterator->valid(): bool</code> mengembalikan <code>true</code> jika elemen saat ini valid untuk dibaca. SimpleXML adalah standar industri tercepat dan termudah di PHP untuk mengonsumsi API feed XML, SOAP envelope, konfigurasi sitemap, dan ekspor data e-commerce.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$xml = new SimpleXMLIterator("<catalog><item>Buku</item><item>Pena</item></catalog>");

echo "<h3>Status Traversal Lengkap:</h3>";
echo "<ul>";
for ($xml->rewind(); $xml->valid(); $xml->next()) {
    echo "<li>Posisi Valid [{$xml->key()}]: <strong style='color:#059669;'>{$xml->current()}</strong></li>";
}
echo "</ul>";
echo "<p style='color:green;'>🎉 Selamat! Seluruh referensi SimpleXML & XML Iterator PHP berhasil Anda kuasai!</p>";
?>`,
    codeExplanation: [
      '$xml->valid() menjadi kondisi boolean pengendali loop traversal.'
    ],
    challenge: {
      instruction: 'Pahami fungsi valid() pada iterator.',
      starterCode: `<?php
echo "valid() mengembalikan true jika kursor iterator berada pada elemen yang sah.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Apa nilai yang dikembalikan oleh `$iterator->valid()` ketika kursor telah melewati elemen terakhir (End of File / Out of Bounds)?',
      options: [
        'Boolean `false`',
        'Boolean `true`',
        '`null`',
        'Fatal Error'
      ],
      correctIndex: 0,
      explanation: 'valid() mengembalikan false saat kursor telah melewati akhir elemen.'
    }
  }
];

module.exports = phpPart54RefSimpleXml2;
