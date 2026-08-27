// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (SIMPLEXML PART 1: 571-582)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart53RefSimpleXml1 = [
  // 571. __CONSTRUCT
  {
    id: 'php-ref-sxml-construct',
    title: 'PHP SimpleXMLElement::__construct()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 571,
    overview: 'Kuasai konstruktor new SimpleXMLElement(): membuat objek representasi dokumen XML dari string data mentah atau URL file untuk navigasi berorientasi objek.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SIMPLEXML CORE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 571 / 594</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌳 Inisialisasi Objek XML (new SimpleXMLElement)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>new SimpleXMLElement(string $data, int $options = 0, bool $data_is_url = false, string $namespace_or_prefix = "", bool $is_prefix = false)</code> mengurai (parse) dokumen XML menjadi pohon objek hirarkis. Setiap tag XML menjadi properti objek dan setiap tag berulang menjadi array elemen.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$xmlString = <<<XML
<?xml version="1.0" encoding="UTF-8"?>
<kursus>
    <judul>Mastering PHP 8 OOP</judul>
    <instruktur>Rahmat Fadila</instruktur>
    <harga>350000</harga>
</kursus>
XML;

$xml = new SimpleXMLElement($xmlString);

echo "<h3>Hasil Penggunaan new SimpleXMLElement():</h3>";
echo "<p>Judul Kursus : <strong style='color:#059669;'>{$xml->judul}</strong></p>";
echo "<p>Instruktur   : <strong>{$xml->instruktur}</strong></p>";
echo "<p>Harga        : Rp " . number_format((int)$xml->harga, 0, ',', '.') . "</p>";
?>`,
    codeExplanation: [
      'new SimpleXMLElement($xmlString) mengonversi teks XML menjadi objek yang dapat diakses dengan notasi panah ->judul.'
    ],
    challenge: {
      instruction: 'Akses elemen <nama> dari objek XML $xml = new SimpleXMLElement("<user><nama>Budi</nama></user>").',
      starterCode: `<?php
$xml = new SimpleXMLElement("<user><nama>Budi</nama></user>");
echo $xml->nama;
?>`,
      hint: 'Akses $xml->nama.'
    },
    quiz: {
      question: 'Parameter apakah yang harus disetel bernilai `true` jika string `$data` pada `new SimpleXMLElement($data, 0, ...)` adalah path file atau URL dokumen XML?',
      options: [
        'Parameter ke-3: `$data_is_url`',
        'Parameter ke-2: `$options`',
        'Parameter ke-4: `$is_prefix`',
        'Parameter ke-1: `$data`'
      ],
      correctIndex: 0,
      explanation: 'Parameter ketiga $data_is_url bernilai true memberitahu SimpleXMLElement untuk memuat dari path/URL.'
    }
  },

  // 572. __TOSTRING
  {
    id: 'php-ref-sxml-tostring',
    title: 'PHP SimpleXMLElement::__toString()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 572,
    overview: 'Kuasai method SimpleXMLElement::__toString(): mengonversi node elemen XML menjadi nilai teks murni (string casting: (string)$node).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">STRING CASTING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 572 / 594</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔤 Konversi Node XML ke String Teks (__toString)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$node->__toString(): string</code> (atau tipe casting <code>(string)$node</code>) mengekstrak isi teks murni dari elemen XML tanpa pembungkus tag. Selalu gunakan <code>(string)$xml->elemen</code> saat menyimpan nilai node ke dalam array atau database agar tidak menyimpan referensi objek.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$xml = new SimpleXMLElement("<item><deskripsi>Belajar SimpleXML di DevGrow LMS</deskripsi></item>");

// Menggunakan casting string (memanggil __toString di balik layar)
$teksMurni = (string)$xml->deskripsi;

echo "<h3>Hasil Penggunaan __toString() / (string) Casting:</h3>";
echo "<p>Tipe Data: <strong>" . gettype($teksMurni) . "</strong></p>";
echo "<p>Nilai Teks: <strong style='color:#059669;'>$teksMurni</strong></p>";
?>`,
    codeExplanation: [
      '(string)$xml->deskripsi mengubah objek SimpleXMLElement menjadi tipe data primitive string PHP.'
    ],
    challenge: {
      instruction: 'Ubah node $xml->email menjadi string murni dengan (string)$xml->email.',
      starterCode: `<?php
$xml = new SimpleXMLElement("<user><email>test@devgrow.id</email></user>");
$em = (string)$xml->email;
echo $em;
?>`,
      hint: 'Gunakan casting (string).'
    },
    quiz: {
      question: 'Mengapa sangat direkomendasikan melakukan casting `(string)$node` saat membaca nilai elemen dari objek SimpleXMLElement?',
      options: [
        'Untuk mendapatkan nilai teks primitif murni dan mencegah masalah serialisasi atau memory leak objek SimpleXMLElement saat disimpan ke array/sesi',
        'Karena SimpleXML tidak bisa dicetak tanpa casting',
        'Agar tag XML ikut tercetak',
        'Hanya untuk angka'
      ],
      correctIndex: 0,
      explanation: 'Casting (string)$node membebaskan nilai teks dari objek pembungkus SimpleXMLElement.'
    }
  },

  // 573. ADDATTRIBUTE
  {
    id: 'php-ref-sxml-addattribute',
    title: 'PHP SimpleXMLElement::addAttribute()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 573,
    overview: 'Kuasai method SimpleXMLElement::addAttribute(): menambahkan atribut baru pada elemen XML (misal: id="101", status="aktif", lang="id").',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">XML ATTRIBUTES</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 573 / 594</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏷️ Menambahkan Atribut Elemen (addAttribute)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$node->addAttribute(string $qualifiedName, string $value, ?string $namespace = null): void</code> menyisipkan atribut ke dalam tag XML yang bersangkutan.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$xml = new SimpleXMLElement("<toko></toko>");

$produk = $xml->addChild("produk", "MacBook Pro M3");
$produk->addAttribute("id", "PROD-998");
$produk->addAttribute("kategori", "Laptop");
$produk->addAttribute("stok", "15");

echo "<h3>Hasil Penggunaan addAttribute():</h3>";
echo "<pre style='background:#0f172a; color:#38bdf8; padding:12px; border-radius:8px;'>";
echo htmlspecialchars($xml->asXML());
echo "</pre>";
?>`,
    codeExplanation: [
      '$produk->addAttribute("id", "PROD-998") menghasilkan tag <produk id="PROD-998" kategori="Laptop" stok="15">.'
    ],
    challenge: {
      instruction: 'Tambahkan atribut id="1" pada elemen dengan $xml->addAttribute("id", "1").',
      starterCode: `<?php
$xml = new SimpleXMLElement("<user>Budi</user>");
$xml->addAttribute("id", "1");
echo $xml['id'];
?>`,
      hint: 'Panggil $xml->addAttribute("id", "1").'
    },
    quiz: {
      question: 'Bagaimana cara membaca kembali nilai atribut yang ditambahkan dengan `$node->addAttribute("id", "101")`?',
      options: [
        'Menggunakan notasi array kurung siku: `(string)$node[\'id\']` atau method `$node->attributes()`',
        'Menggunakan `$node->id`',
        'Menggunakan `$node->getAttr("id")`',
        'Tidak bisa dibaca kembali'
      ],
      correctIndex: 0,
      explanation: 'Atribut XML pada SimpleXML diakses menggunakan notasi array $node["nama_atribut"].'
    }
  },

  // 574. ADDCHILD
  {
    id: 'php-ref-sxml-addchild',
    title: 'PHP SimpleXMLElement::addChild()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 574,
    overview: 'Kuasai method SimpleXMLElement::addChild(): menambahkan child node baru ke dalam struktur XML dan mengembalikan instance node baru tersebut untuk chaining.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">XML BUILDER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 574 / 594</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌿 Menambahkan Child Node Baru (addChild)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$node->addChild(string $qualifiedName, ?string $value = null, ?string $namespace = null): ?SimpleXMLElement</code> menyisipkan sub-elemen baru di bawah node saat ini. Sangat esensial untuk membuat dokumen Sitemap XML (sitemap.xml) atau Feed RSS/Atom.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Membuat Sitemap XML secara programatis
$sitemap = new SimpleXMLElement('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>');

$url1 = $sitemap->addChild("url");
$url1->addChild("loc", "https://devgrow.id/");
$url1->addChild("lastmod", "2026-08-27");
$url1->addChild("priority", "1.0");

$url2 = $sitemap->addChild("url");
$url2->addChild("loc", "https://devgrow.id/courses");
$url2->addChild("priority", "0.8");

echo "<h3>Hasil Dokumen Sitemap XML (addChild):</h3>";
echo "<pre style='background:#0f172a; color:#38bdf8; padding:12px; border-radius:8px;'>";
echo htmlspecialchars($sitemap->asXML());
echo "</pre>";
?>`,
    codeExplanation: [
      'addChild("url") mengembalikan objek SimpleXMLElement dari node baru sehingga dapat diisi sub-child selanjutnya.'
    ],
    challenge: {
      instruction: 'Tambahkan child <role>admin</role> ke objek $xml dengan $xml->addChild("role", "admin").',
      starterCode: `<?php
$xml = new SimpleXMLElement("<user><nama>Budi</nama></user>");
$xml->addChild("role", "admin");
echo $xml->role;
?>`,
      hint: 'Panggil $xml->addChild("role", "admin").'
    },
    quiz: {
      question: 'Tipe data apakah yang dikembalikan oleh pemanggilan `$node->addChild(...)`?',
      options: [
        'Objek `SimpleXMLElement` yang mewakili elemen anak baru yang baru saja disisipkan',
        'Boolean `true`',
        'String XML',
        'Integer nomor node'
      ],
      correctIndex: 0,
      explanation: 'addChild mengembalikan objek SimpleXMLElement baru untuk memfasilitasi penambahan atribut/anak berikutnya.'
    }
  },

  // 575. ASXML
  {
    id: 'php-ref-sxml-asxml',
    title: 'PHP SimpleXMLElement::asXML() / saveXML()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 575,
    overview: 'Kuasai method SimpleXMLElement::asXML() & saveXML(): mengekspor seluruh struktur objek SimpleXML kembali menjadi string XML berformat valid (atau menyimpannya langsung ke file disk).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">XML EXPORT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 575 / 594</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">💾 Ekspor & Simpan File XML (asXML)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$node->asXML(?string $filename = null): string|bool</code> jika dipanggil tanpa argumen mengembalikan string dokumen XML lengkap (beserta deklarasi <code>&lt;?xml version="1.0"?&gt;</code>). Jika diisi nama file (misal: <code>$xml->asXML("feed.xml")</code>), menyimpannya langsung ke file disk.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$xml = new SimpleXMLElement("<katalog></katalog>");
$item = $xml->addChild("item");
$item->addChild("nama", "Keyboard Mechanical");
$item->addChild("harga", "850000");

// 1. Ekspor ke String
$xmlString = $xml->asXML();

echo "<h3>Hasil Penggunaan asXML() (String XML):</h3>";
echo "<pre style='background:#0f172a; color:#38bdf8; padding:12px; border-radius:8px;'>";
echo htmlspecialchars($xmlString);
echo "</pre>";
?>`,
    codeExplanation: [
      '$xml->asXML() merender seluruh pohon elemen menjadi string XML berformat baku.',
      'saveXML() adalah alias identik 100% dari asXML().'
    ],
    challenge: {
      instruction: 'Ekspor objek XML ke string dengan $xml->asXML().',
      starterCode: `<?php
$xml = new SimpleXMLElement("<app><name>LMS</name></app>");
echo $xml->asXML();
?>`,
      hint: 'Panggil $xml->asXML().'
    },
    quiz: {
      question: 'Apa yang terjadi jika parameter string `$filename` diberikan pada pemanggilan `$xml->asXML("output.xml")`?',
      options: [
        'PHP akan langsung menulis dan menyimpan dokumen XML ke file fisik `output.xml` di disk (mengembalikan `true` jika sukses)',
        'Mencetak ke console terminal',
        'Mengirim email',
        'Menghapus file'
      ],
      correctIndex: 0,
      explanation: 'asXML($filename) otomatis menyimpan data XML ke file target.'
    }
  },

  // 576. ATTRIBUTES
  {
    id: 'php-ref-sxml-attributes',
    title: 'PHP SimpleXMLElement::attributes()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 576,
    overview: 'Kuasai method SimpleXMLElement::attributes(): mengambil seluruh atribut dari sebuah elemen XML dalam bentuk objek iterator untuk di-looping dengan foreach.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ATTRIBUTE ITERATOR</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 576 / 594</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📋 Membaca Seluruh Atribut Node (attributes)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$node->attributes(?string $namespaceOrPrefix = null, bool $isPrefix = false): ?SimpleXMLElement</code> mengembalikan iterator berisi semua pasangan nama/nilai atribut pada tag tersebut.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$xml = new SimpleXMLElement('<user id="402" role="instructor" status="verified" lang="id">Rahmat Fadila</user>');

echo "<h3>Daftar Seluruh Atribut Elemen <user>:</h3>";
echo "<ul>";
foreach ($xml->attributes() as $namaAttr => $nilaiAttr) {
    echo "<li>Atribut <code>$namaAttr</code> : <strong style='color:#059669;'>$nilaiAttr</strong></li>";
}
echo "</ul>";
?>`,
    codeExplanation: [
      '$xml->attributes() memudahkan iterasi dinamik seluruh atribut tanpa perlu mengetahui nama atribut di awal.'
    ],
    challenge: {
      instruction: 'Loop semua atribut dari $xml->attributes().',
      starterCode: `<?php
$xml = new SimpleXMLElement('<tag a="1" b="2">Konten</tag>');
foreach ($xml->attributes() as $k => $v) echo "$k=$v ";
?>`,
      hint: 'Loop foreach pada $xml->attributes().'
    },
    quiz: {
      question: 'Struktur apakah yang digunakan untuk mengiterasi seluruh atribut dari pemanggilan `$node->attributes()`?',
      options: [
        'Loop `foreach ($node->attributes() as $name => $val)`',
        'Loop `while ($node->next_attr())`',
        '`for ($i=0; $i<count; $i++)`',
        'Fungsi `array_map()` saja'
      ],
      correctIndex: 0,
      explanation: 'attributes() mengimplementasikan Traversible Iterator sehingga dapat di-loop langsung via foreach.'
    }
  },

  // 577. CHILDREN
  {
    id: 'php-ref-sxml-children',
    title: 'PHP SimpleXMLElement::children()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 577,
    overview: 'Kuasai method SimpleXMLElement::children(): mengambil seluruh child node (elemen anak) dari node saat ini (termasuk filter berdasarkan XML Namespace).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CHILDREN ITERATOR</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 577 / 594</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌿 Navigasi Elemen Anak (children)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$node->children(?string $namespaceOrPrefix = null, bool $isPrefix = false): ?SimpleXMLElement</code> mengembalikan kumpulan elemen anak. Sangat berguna untuk membaca tag XML dengan namespace kustom (seperti <code>&lt;content:encoded&gt;</code> atau <code>&lt;media:thumbnail&gt;</code> pada RSS feed).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$xml = new SimpleXMLElement <<<XML
<kursus>
    <modul>Pengenalan PHP 8</modul>
    <modul>Object Oriented Programming</modul>
    <modul>Database MySQLi & PostgreSQL</modul>
</kursus>
XML;

echo "<h3>Daftar Seluruh Child Node (children):</h3>";
echo "<ol>";
foreach ($xml->children() as $childName => $childValue) {
    echo "<li>Tag <code>&lt;$childName&gt;</code>: <strong style='color:#059669;'>$childValue</strong></li>";
}
echo "</ol>";
?>`,
    codeExplanation: [
      '$xml->children() mengembalikan seluruh sub-elemen di bawah node root <kursus>.'
    ],
    challenge: {
      instruction: 'Iterasi anak dari $xml->children().',
      starterCode: `<?php
$xml = new SimpleXMLElement("<root><a>1</a><b>2</b></root>");
foreach ($xml->children() as $k => $v) echo "$k: $v, ";
?>`,
      hint: 'Loop foreach pada $xml->children().'
    },
    quiz: {
      question: 'Bagaimana cara membaca elemen anak yang berada di bawah XML Namespace khusus menggunakan method `children()`?',
      options: [
        'Mengoperkan prefix namespace ke parameter: `$node->children(\'media\', true)`',
        'Menggunakan `$node->namespace->media`',
        'Menggunakan XPath saja',
        'Tidak didukung SimpleXML'
      ],
      correctIndex: 0,
      explanation: 'children($prefix, true) mengembalikan sub-elemen yang memiliki prefix namespace tertentu.'
    }
  },

  // 578. COUNT
  {
    id: 'php-ref-sxml-count',
    title: 'PHP SimpleXMLElement::count()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 578,
    overview: 'Kuasai method SimpleXMLElement::count() & fungsi global count(): menghitung jumlah elemen anak (child nodes) yang dimiliki oleh sebuah node XML.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">NODE COUNTING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 578 / 594</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔢 Menghitung Jumlah Child Node (count)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$node->count(): int</code> (atau <code>count($node->produk)</code>) mengembalikan jumlah total child elemen.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$xml = new SimpleXMLElement <<<XML
<perpustakaan>
    <buku>Clean Code</buku>
    <buku>Refactoring</buku>
    <buku>Design Patterns</buku>
    <buku>Domain-Driven Design</buku>
</perpustakaan>
XML;

$totalBuku = $xml->count(); // atau count($xml->buku)

echo "<h3>Hasil Penggunaan \$xml->count():</h3>";
echo "<p>Total Buku dalam XML: <strong style='color:#059669; font-size:18px;'>$totalBuku buku</strong></p>";
?>`,
    codeExplanation: [
      '$xml->count() menghitung 4 node <buku> secara instan.'
    ],
    challenge: {
      instruction: 'Hitung jumlah child node dengan $xml->count().',
      starterCode: `<?php
$xml = new SimpleXMLElement("<root><x/><y/><z/></root>");
echo "Total: " . $xml->count();
?>`,
      hint: 'Panggil $xml->count().'
    },
    quiz: {
      question: 'Berapakah nilai yang dikembalikan oleh `$xml->count()` untuk dokumen `<data><a>1</a><b>2</b><c>3</c></data>`?',
      options: [
        'Integer `3`',
        'Integer `1`',
        'Integer `0`',
        'String `"3"`'
      ],
      correctIndex: 0,
      explanation: 'Ada 3 elemen anak (a, b, c) di bawah node data.'
    }
  },

  // 579. GETDOCNAMESPACES
  {
    id: 'php-ref-sxml-getdocnamespaces',
    title: 'PHP SimpleXMLElement::getDocNamespaces()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 579,
    overview: 'Kuasai method SimpleXMLElement::getDocNamespaces(): mengambil daftar seluruh namespace XML yang dideklarasikan di seluruh dokumen (termasuk sub-node jika recursive = true).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">XML NAMESPACES</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 579 / 594</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌐 Namespace Dokumen Lengkap (getDocNamespaces)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$node->getDocNamespaces(bool $recursive = false, bool $fromRoot = true): array|false</code> mengembalikan array pemetaan prefix ke URI namespace (seperti <code>["media" => "http://search.yahoo.com/mrss/"]</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$xml = new SimpleXMLElement <<<XML
<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/">
    <channel><title>DevGrow Blog</title></channel>
</rss>
XML;

$namespaces = $xml->getDocNamespaces();

echo "<h3>Namespace yang Terdaftar dalam Dokumen:</h3>";
echo "<ul>";
foreach ($namespaces as $prefix => $uri) {
    echo "<li>Prefix <code>$prefix</code> -> URI: <strong style='color:#059669;'>$uri</strong></li>";
}
echo "</ul>";
?>`,
    codeExplanation: [
      'getDocNamespaces() mendeteksi namespace dc dan content pada dokumen RSS feed.'
    ],
    challenge: {
      instruction: 'Ambil daftar namespace dengan $xml->getDocNamespaces().',
      starterCode: `<?php
$xml = new SimpleXMLElement('<root xmlns:h="http://www.w3.org/TR/html4/"/>');
$ns = $xml->getDocNamespaces();
echo "Prefix: " . array_key_first($ns);
?>`,
      hint: 'Panggil $xml->getDocNamespaces().'
    },
    quiz: {
      question: 'Apa fungsi parameter `$recursive = true` pada pemanggilan `$xml->getDocNamespaces(true)`?',
      options: [
        'Mencari dan mengumpulkan deklarasi namespace di seluruh hierarki sub-node anak terdalam dokumen, bukan hanya pada node root saja',
        'Mengganti URL namespace',
        'Menghapus namespace',
        'Mengekspor ke format JSON'
      ],
      correctIndex: 0,
      explanation: 'Mode recursive memindai namespace yang mungkin dideklarasikan di level tag anak yang lebih dalam.'
    }
  },

  // 580. GETNAME
  {
    id: 'php-ref-sxml-getname',
    title: 'PHP SimpleXMLElement::getName()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 580,
    overview: 'Kuasai method SimpleXMLElement::getName(): mendapatkan string nama tag dari elemen XML saat ini (Tag Name Introspection).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TAG INTROSPECTION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 580 / 594</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏷️ Nama Tag Elemen (getName)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$node->getName(): string</code> mengembalikan nama tag elemen XML (misal <code>&lt;artikel&gt;</code> menghasilkan string <code>"artikel"</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$xml = new SimpleXMLElement("<transaksi_pembayaran><id>9901</id></transaksi_pembayaran>");

$namaTagRoot = $xml->getName();
$namaTagAnak = $xml->id->getName();

echo "<h3>Hasil Penggunaan getName():</h3>";
echo "<p>Nama Tag Root : <strong style='color:#059669;'>$namaTagRoot</strong></p>";
echo "<p>Nama Tag Child: <strong style='color:#4f46e5;'>$namaTagAnak</strong></p>";
?>`,
    codeExplanation: [
      'getName() memudahkan pembuatan XML parser generik yang memvalidasi nama tag saat runtime.'
    ],
    challenge: {
      instruction: 'Ambil nama tag root dengan $xml->getName().',
      starterCode: `<?php
$xml = new SimpleXMLElement("<produk><nama>Kopi</nama></produk>");
echo $xml->getName();
?>`,
      hint: 'Panggil $xml->getName().'
    },
    quiz: {
      question: 'Berapakah string yang dikembalikan oleh `$xml->getName()` untuk dokumen `<pesanan id="1" />`?',
      options: [
        'String `"pesanan"`',
        'String `"<pesanan>"`',
        'String `"1"`',
        'Array atribut'
      ],
      correctIndex: 0,
      explanation: 'getName() mengembalikan nama string tag XML murni tanpa tanda kurung siku.'
    }
  },

  // 581. GETNAMESPACES
  {
    id: 'php-ref-sxml-getnamespaces',
    title: 'PHP SimpleXMLElement::getNamespaces()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 581,
    overview: 'Kuasai method SimpleXMLElement::getNamespaces(): mendapatkan daftar namespace XML yang digunakan dan aktif pada node saat ini.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ACTIVE NAMESPACES</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 581 / 594</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Namespace Aktif pada Node (getNamespaces)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$node->getNamespaces(bool $recursive = false): array</code> mengembalikan namespace yang secara aktif digunakan oleh node target saat ini.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$xml = new SimpleXMLElement('<root xmlns:env="http://schemas.xmlsoap.org/soap/envelope/"><env:Body/></root>');

$ns = $xml->getNamespaces();

echo "<h3>Hasil Penggunaan getNamespaces():</h3>";
echo "<p>Namespace SOAP Aktif: <strong style='color:#059669;'>" . ($ns['env'] ?? 'None') . "</strong></p>";
?>`,
    codeExplanation: [
      'getNamespaces() memeriksa namespace aktif pada node tersebut.'
    ],
    challenge: {
      instruction: 'Ambil namespaces aktif dengan $xml->getNamespaces().',
      starterCode: `<?php
$xml = new SimpleXMLElement('<root xmlns:a="http://example.com"/>');
$ns = $xml->getNamespaces();
echo $ns['a'];
?>`,
      hint: 'Panggil $xml->getNamespaces().'
    },
    quiz: {
      question: 'Apa perbedaan antara `getDocNamespaces()` dan `getNamespaces()`?',
      options: [
        '`getDocNamespaces()` membaca namespace yang dideklarasikan di seluruh dokumen, sedangkan `getNamespaces()` membaca namespace yang digunakan pada node spesifik saat ini',
        '`getNamespaces()` hanya untuk SOAP',
        'Keduanya identik',
        '`getDocNamespaces()` mengembalikan integer'
      ],
      correctIndex: 0,
      explanation: 'getDocNamespaces mengambil namespace scope dokumen, getNamespaces mengambil scope node.'
    }
  },

  // 582. REGISTERXPATHNAMESPACE
  {
    id: 'php-ref-sxml-registerxpathnamespace',
    title: 'PHP SimpleXMLElement::registerXPathNamespace()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 582,
    overview: 'Kuasai method SimpleXMLElement::registerXPathNamespace(): mendaftarkan prefix namespace untuk digunakan dalam query XPath pada dokumen XML ber-namespace.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">XPATH NAMESPACES</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 582 / 594</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎯 Registrasi Prefix XPath Namespace (registerXPathNamespace)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$node->registerXPathNamespace(string $prefix, string $namespace): bool</code> memetakan prefix lokal (misal: <code>"g"</code>) ke URI namespace sehingga Anda dapat mengeksekusi query XPath seperti <code>$xml->xpath('//g:item')</code> pada dokumen SOAP / RSS / Atom.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$xml = new SimpleXMLElement <<<XML
<feed xmlns:g="http://base.google.com/ns/1.0">
    <item>
        <title>Laptop Gaming</title>
        <g:price>15000000 IDR</g:price>
    </item>
</feed>
XML;

// Daftarkan prefix 'google' untuk query XPath
$xml->registerXPathNamespace('google', 'http://base.google.com/ns/1.0');

// Query XPath menggunakan prefix yang didaftarkan
$prices = $xml->xpath('//google:price');

echo "<h3>Hasil Query XPath Namespace:</h3>";
echo "<p>Harga Produk Google Merchant: <strong style='color:#059669;'>{$prices[0]}</strong></p>";
?>`,
    codeExplanation: [
      'registerXPathNamespace("google", "http://base.google.com/ns/1.0") memungkinkan pencarian //google:price pada elemen dengan namespace.'
    ],
    challenge: {
      instruction: 'Daftarkan namespace "ns" dan query dengan xpath("//ns:item").',
      starterCode: `<?php
$xml = new SimpleXMLElement('<feed xmlns:a="http://example.com"><a:item>OK</a:item></feed>');
$xml->registerXPathNamespace('ns', 'http://example.com');
$res = $xml->xpath('//ns:item');
echo $res[0];
?>`,
      hint: 'Panggil registerXPathNamespace lalu xpath.'
    },
    quiz: {
      question: 'Mengapa kita WAJIB memanggil `registerXPathNamespace()` sebelum menjalankan query XPath pada tag yang memiliki namespace XML?',
      options: [
        'Karena query engine XPath memerlukan pemetaan formal antara alias prefix dalam ekspresi XPath dengan URI namespace otoritatif dokumen XML',
        'Karena XPath tidak mendukung XML',
        'Hanya untuk mempercepat query',
        'Tidak wajib'
      ],
      correctIndex: 0,
      explanation: 'Engine XPath memverifikasi kecocokan namespace berdasarkan URI melalui registrasi prefix.'
    }
  }
];

module.exports = phpPart53RefSimpleXml1;
