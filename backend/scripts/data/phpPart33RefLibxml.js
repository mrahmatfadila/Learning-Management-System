// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (LIBXML: 362-368)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart33RefLibxml = [
  // 362. LIBXML_CLEAR_ERRORS()
  {
    id: 'php-ref-libxml-clear-errors',
    title: 'PHP libxml_clear_errors()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 362,
    overview: 'Kuasai libxml_clear_errors(): membersihkan dan mengosongkan antrean buffer error Libxml internal agar siap memproses dokumen XML/HTML berikutnya tanpa residu error lama.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PHP LIBXML</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 362 / 368</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧹 Mengosongkan Buffer Error XML (libxml_clear_errors)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Ketika mengaktifkan <code>libxml_use_internal_errors(true)</code>, setiap kesalahan sintaks XML disimpan dalam buffer internal. Fungsi <code>libxml_clear_errors()</code> mengosongkan antrean error tersebut sehingga tidak tercampur dengan validasi dokumen XML berikutnya.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// 1. Aktifkan penanganan error internal
libxml_use_internal_errors(true);

// 2. Coba parse XML rusak
$xmlRusak = "<root><item>Data Tanpa Tutup Tag</root>";
$doc = simplexml_load_string($xmlRusak);

$errorCountSebelum = count(libxml_get_errors());

// 3. Bersihkan buffer error
libxml_clear_errors();
$errorCountSesudah = count(libxml_get_errors());

echo "<h3>Hasil Penggunaan libxml_clear_errors():</h3>";
echo "<p>Jumlah error sebelum dibersihkan: <strong style='color: #dc2626;'>$errorCountSebelum error</strong></p>";
echo "<p>Jumlah error setelah libxml_clear_errors(): <strong style='color: #059669;'>$errorCountSesudah error (Buffer Bersih)</strong></p>";
?>`,
    codeExplanation: [
      'libxml_clear_errors() mereset antrean error internal libxml menjadi kosong ([]).'
    ],
    challenge: {
      instruction: 'Bersihkan buffer error libxml dengan memanggil libxml_clear_errors().',
      starterCode: `<?php
libxml_use_internal_errors(true);
simplexml_load_string("<invalid>");
libxml_clear_errors();
echo "Buffer tersisa: " . count(libxml_get_errors());
?>`,
      hint: 'Panggil libxml_clear_errors().'
    },
    quiz: {
      question: 'Kapan programmer sebaiknya memanggil `libxml_clear_errors()`?',
      options: [
        'Setelah selesai membaca/menangani error XML dan sebelum memproses dokumen XML berikutnya agar buffer bersih',
        'Sebelum menginstal PHP',
        'Hanya saat server crash',
        'Untuk menghapus file XML di disk'
      ],
      correctIndex: 0,
      explanation: 'libxml_clear_errors() mencegah akumulasi error lama ke proses validasi berikutnya.'
    }
  },

  // 363. LIBXML_DISABLE_ENTITY_LOADER()
  {
    id: 'php-ref-libxml-disable-entity-loader',
    title: 'PHP libxml_disable_entity_loader()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 363,
    overview: 'Kuasai fungsi libxml_disable_entity_loader(): menonaktifkan pemuatan entitas eksternal XML untuk mitigasi serangan berbahaya XML External Entity (XXE Injection). Catatan: Sejak PHP 8.0 pemuatan entitas eksternal sudah dinonaktifkan secara aman secara default.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">XXE PROTECTION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 363 / 368</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛡️ Mitigasi Serangan XXE (libxml_disable_entity_loader)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Fungsi <code>libxml_disable_entity_loader(true)</code> menonaktifkan resolusi entitas eksternal DTD (misal: <code>&lt;!ENTITY xxe SYSTEM "file:///etc/passwd"&gt;</code>). Pada PHP 8.0+, PHP secara default telah mematikan loader entitas eksternal sehingga fungsi ini di-deprecate demi pendekatan <code>LIBXML_NOENT</code> yang lebih modern.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Status Keamanan Libxml & Mitigasi XXE:</h3>";
if (PHP_VERSION_ID >= 80000) {
    echo "<p style='color: #059669;'><strong>✓ PHP " . PHP_VERSION . " Aktif:</strong> Pemuatan entitas eksternal sudah dinonaktifkan secara default oleh arsitektur inti Libxml tanpa perlu memanggil fungsi manual.</p>";
} else {
    // Pada PHP 7.x
    $oldVal = libxml_disable_entity_loader(true);
    echo "<p>Entity Loader berhasil dinonaktifkan untuk keamanan (Nilai sebelumnya: " . var_export($oldVal, true) . ").</p>";
}
?>`,
    codeExplanation: [
      'libxml_disable_entity_loader(true) melindungi server dari serangan pembacaan file rahasia via XXE injection.',
      'PHP 8.0+ mengunci fitur ini secara aman secara default di level core C.'
    ],
    challenge: {
      instruction: 'Pahami pentingnya mitigasi XXE injection pada pemrosesan dokumen XML.',
      starterCode: `<?php
echo "Mitigasi XXE mencegah serangan pembacaan file sensitif via XML.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Jenis kerentanan keamanan siber apakah yang dicegah dengan menonaktifkan Entity Loader pada parser XML?',
      options: [
        'XML External Entity (XXE) Injection',
        'Cross-Site Scripting (XSS)',
        'SQL Injection',
        'Buffer Overflow'
      ],
      correctIndex: 0,
      explanation: 'XXE Injection adalah eksploitasi di mana penyerang menyisipkan DTD entity SYSTEM untuk mencuri file server.'
    }
  },

  // 364. LIBXML_GET_ERRORS()
  {
    id: 'php-ref-libxml-get-errors',
    title: 'PHP libxml_get_errors()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 364,
    overview: 'Kuasai libxml_get_errors(): mengambil seluruh daftar objek LibXMLError yang menampung rincian nomor baris (line), kolom (column), level keparahan, dan pesan kesalahan parsing XML.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ERROR INSPECTION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 364 / 368</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📋 Membaca Seluruh Error XML (libxml_get_errors)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>libxml_get_errors()</code> mengembalikan array berisi objek-objek <code>LibXMLError</code>. Setiap objek menyediakan properti detail: <code>$error->message</code>, <code>$error->line</code>, <code>$error->column</code>, <code>$error->code</code>, dan <code>$error->level</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
libxml_use_internal_errors(true);

$xmlInvalid = <<<XML
<?xml version="1.0" encoding="UTF-8"?>
<katalog>
    <buku id="1">
        <judul>Mastering PHP 8</judul
        <harga>150000</harga>
    </buku>
</katalog>
XML;

$doc = simplexml_load_string($xmlInvalid);
$errors = libxml_get_errors();

echo "<h3>Daftar Kesalahan XML (libxml_get_errors):</h3>";
echo "<ul>";
foreach ($errors as $err) {
    echo "<li style='color: #dc2626; margin-bottom: 6px;'>";
    echo "<strong>[Baris {$err->line}, Kolom {$err->column}]</strong>: " . trim($err->message);
    echo "</li>";
}
echo "</ul>";

libxml_clear_errors();
?>`,
    codeExplanation: [
      'libxml_get_errors() mengembalikan daftar objek LibXMLError.',
      '$err->line dan $err->column mempermudah pelacakan posisi sintaks XML yang cacat.'
    ],
    challenge: {
      instruction: 'Iterasi error XML dan cetak baris tempat kesalahan terjadi.',
      starterCode: `<?php
libxml_use_internal_errors(true);
simplexml_load_string("<test><unclosed>");
foreach (libxml_get_errors() as $e) {
    echo "Error baris: " . $e->line . " ";
}
libxml_clear_errors();
?>`,
      hint: 'Akses properti $e->line.'
    },
    quiz: {
      question: 'Objek apakah yang menyusun elemen array kembalian `libxml_get_errors()`?',
      options: [
        'Objek dari kelas bawaan `LibXMLError`',
        'Objek Exception biasa',
        'String pesan error mentah',
        'Array numerik sederhana'
      ],
      correctIndex: 0,
      explanation: 'libxml_get_errors() mengembalikan array objek LibXMLError.'
    }
  },

  // 365. LIBXML_GET_LAST_ERROR()
  {
    id: 'php-ref-libxml-get-last-error',
    title: 'PHP libxml_get_last_error()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 365,
    overview: 'Kuasai libxml_get_last_error(): mengambil objek LibXMLError tunggal yang merepresentasikan kesalahan parsing XML paling terakhir terjadi.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">LAST ERROR</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 365 / 368</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🩺 Mengambil Error XML Terakhir (libxml_get_last_error)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>libxml_get_last_error()</code> mengembalikan objek <code>LibXMLError</code> terakhir dari buffer, atau <code>false</code> jika tidak ada kesalahan yang tercatat.
          </p>
        </div>
      </div>
    `,
    code: `<?php
libxml_use_internal_errors(true);

$xmlContent = "<data><user>Ahmad</data>"; // Tag user tidak ditutup
$res = simplexml_load_string($xmlContent);

$lastError = libxml_get_last_error();

echo "<h3>Hasil Penggunaan libxml_get_last_error():</h3>";
if ($lastError) {
    echo "<div style='background: #fee2e2; border-left: 4px solid #ef4444; padding: 12px; border-radius: 6px;'>";
    echo "<h4 style='color: #991b1b; margin: 0;'>✗ Error Terakhir Ditemukan:</h4>";
    echo "<p style='margin: 4px 0;'>Pesan: <strong>" . trim($lastError->message) . "</strong></p>";
    echo "<p style='margin: 4px 0;'>Posisi: Baris {$lastError->line}, Kolom {$lastError->column}</p>";
    echo "</div>";
}

libxml_clear_errors();
?>`,
    codeExplanation: [
      'libxml_get_last_error() sangat praktis saat hanya membutuhkan pesan kesalahan penentu tanpa meloop seluruh array error.'
    ],
    challenge: {
      instruction: 'Ambil pesan error XML terakhir dengan libxml_get_last_error()->message.',
      starterCode: `<?php
libxml_use_internal_errors(true);
simplexml_load_string("<root><bad>");
$err = libxml_get_last_error();
if ($err) echo "Pesan: " . trim($err->message);
libxml_clear_errors();
?>`,
      hint: 'Panggil libxml_get_last_error().'
    },
    quiz: {
      question: 'Apa nilai yang dikembalikan oleh `libxml_get_last_error()` jika dokumen XML valid tanpa satupun error?',
      options: [
        'Boolean false',
        'Null',
        'Array kosong',
        'Angka 0'
      ],
      correctIndex: 0,
      explanation: 'Jika tidak ada error dalam buffer, libxml_get_last_error() mengembalikan boolean false.'
    }
  },

  // 366. LIBXML_SET_EXTERNAL_ENTITY_LOADER()
  {
    id: 'php-ref-libxml-set-external-entity-loader',
    title: 'PHP libxml_set_external_entity_loader()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 366,
    overview: 'Kuasai libxml_set_external_entity_loader(): mendaftarkan fungsi callback kustom untuk mengontrol, mencegat, atau memblokir pemuatan DTD/Entitas Eksternal XML (Custom Entity Resolver).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CUSTOM ENTITY LOADER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 366 / 368</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔒 Kustom Resolver Entitas XML (libxml_set_external_entity_loader)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>libxml_set_external_entity_loader(?callable $resolver)</code> memungkinkan arsitek sistem menyaring permintaan pemuatan DTD eksternal. Mengembalikan <code>null</code> dari callback akan menolak pemuatan file eksternal yang mencurigakan.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Daftarkan Custom Entity Loader yang memblokir semua request eksternal
libxml_set_external_entity_loader(function (?string $publicId, string $systemId, array $context) {
    echo "<p style='color: #d97706;'>[PENCEGATAN] Mencoba memuat entitas: <code>$systemId</code> -> <strong>DIBLOKIR DEMI KEAMANAN</strong></p>";
    return null; // Blokir entitas eksternal
});

echo "<h3>Hasil Pengaturan libxml_set_external_entity_loader:</h3>";
echo "<p style='color: #059669;'>✓ Custom Entity Loader aman berhasil didaftarkan.</p>";

// Reset kembali ke default loader
libxml_set_external_entity_loader(null);
?>`,
    codeExplanation: [
      'libxml_set_external_entity_loader mencegat upaya pemuatan resource eksternal.',
      'Mengembalikan null menjamin proteksi terhadap eksploitasi XXE.'
    ],
    challenge: {
      instruction: 'Reset external entity loader ke default dengan libxml_set_external_entity_loader(null).',
      starterCode: `<?php
libxml_set_external_entity_loader(null);
echo "Entity loader default.";
?>`,
      hint: 'Kirim argumen null.'
    },
    quiz: {
      question: 'Apa parameter yang harus dikirim ke `libxml_set_external_entity_loader()` untuk mereset resolver entitas kembali ke konfigurasi default bawaan PHP?',
      options: [
        '`null`',
        '`false`',
        '`"default"`',
        '`0`'
      ],
      correctIndex: 0,
      explanation: 'Mengirimkan null akan mereset custom entity loader ke default handler PHP.'
    }
  },

  // 367. LIBXML_SET_STREAMS_CONTEXT()
  {
    id: 'php-ref-libxml-set-streams-context',
    title: 'PHP libxml_set_streams_context()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 367,
    overview: 'Kuasai libxml_set_streams_context(): menyetel Stream Context HTTP/HTTPS kustom (seperti Custom User-Agent, Header Autentikasi, atau SSL Verify) untuk operasi unduhan dokumen XML Libxml.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">STREAM CONTEXT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 367 / 368</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌐 Opsi Stream Jaringan XML (libxml_set_streams_context)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>libxml_set_streams_context($context)</code> mengikat context yang dibuat via <code>stream_context_create()</code> ke seluruh operasi Libxml (misal saat <code>simplexml_load_file('https://api.site/feed.xml')</code> membutuhkan HTTP Header <code>Authorization: Bearer token</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
// 1. Buat stream context dengan custom header HTTP
$opts = [
    'http' => [
        'method'     => 'GET',
        'user_agent' => 'DevGrow-XML-Parser/2.0',
        'timeout'    => 10
    ]
];
$context = stream_context_create($opts);

// 2. Terapkan context ke Libxml
libxml_set_streams_context($context);

echo "<h3>Hasil Penggunaan libxml_set_streams_context():</h3>";
echo "<p style='color: #059669;'>✓ Stream context (User-Agent: DevGrow-XML-Parser/2.0) berhasil disetel untuk parser Libxml.</p>";
?>`,
    codeExplanation: [
      'libxml_set_streams_context() memungkinkan konfigurasi proxy, timeout, dan header otentikasi saat memuat feed XML jarak jauh.'
    ],
    challenge: {
      instruction: 'Buat stream context dan pasang ke Libxml.',
      starterCode: `<?php
$ctx = stream_context_create(['http' => ['timeout' => 5]]);
libxml_set_streams_context($ctx);
echo "Context siap.";
?>`,
      hint: 'Panggil libxml_set_streams_context($ctx).'
    },
    quiz: {
      question: 'Fungsi bawaan PHP apakah yang digunakan untuk membuat resource context sebelum diberikan ke `libxml_set_streams_context()`?',
      options: [
        '`stream_context_create()`',
        '`create_context()`',
        '`http_context_init()`',
        '`curl_init()`'
      ],
      correctIndex: 0,
      explanation: 'stream_context_create() membuat resource stream context yang sah di PHP.'
    }
  },

  // 368. LIBXML_USE_INTERNAL_ERRORS()
  {
    id: 'php-ref-libxml-use-internal-errors',
    title: 'PHP libxml_use_internal_errors()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 368,
    overview: 'Kuasai libxml_use_internal_errors(): mematikan pesan peringatan standar PHP (E_WARNING) saat mem-parsing XML/HTML cacat dan mengalihkan seluruh error ke buffer internal untuk penanganan terisolasi.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">INTERNAL ERROR SWITCH</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 368 / 368</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛡️ Meredam Peringatan Parsing (libxml_use_internal_errors)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Secara default ketika <code>simplexml_load_string()</code> atau <code>DOMDocument::loadHTML()</code> menemui tag HTML5 modern/XML yang rusak, PHP akan membanjiri layar browser dengan pesan <code>Warning</code>. Dengan <code>libxml_use_internal_errors(true)</code>, seluruh warning diredam dan ditampung rapi di memori.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Redam seluruh peringatan warning XML ke buffer internal
$statusSebelumnya = libxml_use_internal_errors(true);

$xmlCacat = "<feed><entry>Data rusak";
$doc = simplexml_load_string($xmlCacat);

echo "<h3>Hasil Penggunaan libxml_use_internal_errors(true):</h3>";
if ($doc === false) {
    echo "<p style='color: green;'><strong>✓ Sukses: Layar bersih tanpa banjir warning error PHP!</strong></p>";
    echo "<p>Total error tersimpan di buffer: <strong>" . count(libxml_get_errors()) . " error</strong></p>";
}

// Bersihkan buffer dan kembalikan setelan semula
libxml_clear_errors();
libxml_use_internal_errors($statusSebelumnya);
?>`,
    codeExplanation: [
      'libxml_use_internal_errors(true) adalah fungsi paling krusial saat mem-parsing HTML/XML dari input publik tanpa mengotori log atau layar pengguna.'
    ],
    challenge: {
      instruction: 'Aktifkan penanganan error internal dengan libxml_use_internal_errors(true).',
      starterCode: `<?php
libxml_use_internal_errors(true);
echo "Internal errors aktif: " . (libxml_use_internal_errors() ? "YA" : "TIDAK");
?>`,
      hint: 'Panggil libxml_use_internal_errors(true).'
    },
    quiz: {
      question: 'Apa efek langsung dari pemanggilan `libxml_use_internal_errors(true)` sebelum mem-parsing dokumen HTML/XML yang tidak valid?',
      options: [
        'PHP tidak akan menampilkan pesan PHP Warning di browser/output dan mengalihkan seluruh catatan kesalahan ke buffer internal Libxml',
        'Dokumen XML otomatis diperbaiki',
        'Mempercepat kecepatan CPU',
        'Menonaktifkan modul XML'
      ],
      correctIndex: 0,
      explanation: 'libxml_use_internal_errors(true) meredam warning standar dan menampung error di memory buffer LibXMLError.'
    }
  }
];

module.exports = phpPart33RefLibxml;
