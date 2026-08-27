// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (ZIP PART 1: 755-764)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart71RefZip = [
  // 755. ZIP_OPEN & ZIP_CLOSE
  {
    id: 'php-ref-zip-open-close',
    title: 'PHP zip_open() & zip_close()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 755,
    overview: 'Kuasai fungsi zip_open() & zip_close(): membuka arsip file ZIP untuk dibaca dan menutup resource handle arsip setelah selesai.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ZIP ARCHIVE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 755 / 771</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📦 Membuka & Menutup File ZIP (zip_open)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>zip_open(string $filename): resource|int|false</code> membuka file arsip ZIP untuk dibaca secara prosedural, dan <code>zip_close(resource $zip): void</code> menutup koneksi handle arsip.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$zipFile = "backup_project.zip";

// Buka file zip jika ekstensi Zip terpasang
if (function_exists('zip_open') && file_exists($zipFile)) {
    $zip = zip_open($zipFile);
    if (is_resource($zip)) {
        echo "<p style='color:#059669;'>✓ Berhasil membuka arsip ZIP: $zipFile</p>";
        zip_close($zip);
    }
} else {
    echo "<p>Contoh penanganan arsip ZIP via <code>zip_open()</code> & <code>zip_close()</code>.</p>";
}
?>`,
    codeExplanation: [
      'zip_open() mengembalikan resource handle arsip yang siap diiterasi oleh zip_read().'
    ],
    challenge: {
      instruction: 'Pahami fungsi zip_open.',
      starterCode: `<?php
echo "zip_open() membuka arsip zip dan zip_close() menutup handle.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Tipe data apakah yang dikembalikan oleh `zip_open()` jika file ZIP berhasil dibuka?',
      options: [
        'Resource handle arsip ZIP',
        'Array file',
        'String XML',
        'Boolean true'
      ],
      correctIndex: 0,
      explanation: 'zip_open mengembalikan resource penunjuk arsip ZIP.'
    }
  },

  // 756. ZIP_READ
  {
    id: 'php-ref-zip-read',
    title: 'PHP zip_read()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 756,
    overview: 'Kuasai fungsi zip_read(): membaca entri file berikutnya di dalam arsip ZIP secara berurutan dalam perulangan while.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ZIP ITERATOR</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 756 / 771</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📂 Membaca Entri Arsip ZIP (zip_read)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>zip_read(resource $zip): resource|false</code> mengambil entri file/folder berikutnya dari arsip ZIP yang sedang aktif.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Pola iterasi standar membaca seluruh isi file ZIP
/*
$zip = zip_open("data.zip");
if (is_resource($zip)) {
    while ($entry = zip_read($zip)) {
        echo "Nama File: " . zip_entry_name($entry) . "<br>";
    }
    zip_close($zip);
}
*/
echo "<h3>Pola Iterasi zip_read():</h3>";
echo "<p>Gunakan loop <code>while (\$entry = zip_read(\$zip))</code> untuk menelusuri seluruh file di dalam arsip.</p>";
?>`,
    codeExplanation: [
      'zip_read($zip) mengembalikan entri zip berikutnya atau false jika seluruh entri telah selesai dibaca.'
    ],
    challenge: {
      instruction: 'Pahami fungsi zip_read.',
      starterCode: `<?php
echo "zip_read() mengambil entri file berikutnya dari arsip ZIP.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Apa nilai yang dikembalikan oleh `zip_read()` ketika seluruh isi file di dalam arsip ZIP telah selesai dibaca?',
      options: [
        'Boolean `false`',
        'Integer `0`',
        '`null`',
        'Exception error'
      ],
      correctIndex: 0,
      explanation: 'zip_read mengembalikan false saat mencapai akhir arsip.'
    }
  },

  // 757. ZIP_ENTRY_NAME
  {
    id: 'php-ref-zip-entry-name',
    title: 'PHP zip_entry_name()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 757,
    overview: 'Kuasai fungsi zip_entry_name(): mendapatkan nama path file atau direktori dari sebuah entri ZIP.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">ZIP METADATA</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 757 / 771</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏷️ Nama Entri File ZIP (zip_entry_name)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>zip_entry_name(resource $zip_entry): string|false</code> mengembalikan nama relatif file (misal: <code>"images/banner.png"</code>) di dalam arsip.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Hasil Penggunaan zip_entry_name():</h3>";
echo "<ul>";
echo "<li>Entri 1: <strong style='color:#059669;'>index.php</strong></li>";
echo "<li>Entri 2: <strong style='color:#059669;'>assets/css/style.css</strong></li>";
echo "<li>Entri 3: <strong style='color:#059669;'>uploads/avatar.jpg</strong></li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'zip_entry_name($entry) membaca nama file dan struktur sub-folder relatif di dalam ZIP.'
    ],
    challenge: {
      instruction: 'Pahami fungsi zip_entry_name.',
      starterCode: `<?php
echo "zip_entry_name membaca nama file entri ZIP.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Tipe data apakah yang dikembalikan oleh `zip_entry_name()`?',
      options: [
        'String nama file/direktori entri',
        'Integer ukuran',
        'Array path',
        'Boolean true'
      ],
      correctIndex: 0,
      explanation: 'zip_entry_name menghasilkan string nama file entri.'
    }
  },

  // 758. ZIP_ENTRY_FILESIZE & COMPRESSEDSIZE
  {
    id: 'php-ref-zip-entry-filesize',
    title: 'PHP zip_entry_filesize() & zip_entry_compressedsize()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 758,
    overview: 'Kuasai fungsi zip_entry_filesize() & zip_entry_compressedsize(): membandingkan ukuran asli file sebelum kompresi dengan ukuran fisik setelah dikompresi (Compression Ratio Calculator).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">COMPRESSION STATS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 758 / 771</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📊 Rasio Kompresi File ZIP (filesize vs compressedsize)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>zip_entry_filesize(resource $zip_entry): int</code> mengembalikan ukuran uncompressed (asli) dalam byte, sedangkan <code>zip_entry_compressedsize(resource $zip_entry): int</code> mengembalikan ukuran terkompresi di dalam ZIP.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$ukuranAsli = 1048576;      // 1 MB (1024 KB)
$ukuranKompresi = 262144;   // 256 KB

$rasioHemat = (1 - ($ukuranKompresi / $ukuranAsli)) * 100;

echo "<h3>Statistik Kompresi File ZIP:</h3>";
echo "<p>Ukuran Asli (filesize)        : <strong>" . number_format($ukuranAsli / 1024, 2) . " KB</strong></p>";
echo "<p>Ukuran Kompresi (compressed) : <strong style='color:#4f46e5;'>" . number_format($ukuranKompresi / 1024, 2) . " KB</strong></p>";
echo "<p>Efisiensi Penghematan Ruang : <strong style='color:#059669; font-size:18px;'>$rasioHemat% Lebih Hemat!</strong></p>";
?>`,
    codeExplanation: [
      'zip_entry_filesize() vs zip_entry_compressedsize() menghitung persentase efisiensi kompresi data.'
    ],
    challenge: {
      instruction: 'Pahami fungsi ukuran zip.',
      starterCode: `<?php
echo "zip_entry_filesize() mengukur ukuran asli sebelum di-zip.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Manakah nilai yang lebih kecil pada file teks yang berhasil dikompresi dengan baik?',
      options: [
        '`zip_entry_compressedsize()` (ukuran setelah dikompresi)',
        '`zip_entry_filesize()` (ukuran asli sebelum dikompresi)',
        'Keduanya selalu bernilai sama persis',
        '`zip_entry_filesize` selalu bernilai 0'
      ],
      correctIndex: 0,
      explanation: 'Ukuran compressedsize lebih kecil karena algoritma kompresi Deflate mengecilkan ukuran data.'
    }
  },

  // 759. ZIP_ENTRY_COMPRESSIONMETHOD
  {
    id: 'php-ref-zip-entry-compressionmethod',
    title: 'PHP zip_entry_compressionmethod()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 759,
    overview: 'Kuasai fungsi zip_entry_compressionmethod(): mengidentifikasi metode kompresi yang digunakan pada entri ZIP (misal: "deflated" atau "stored").',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ZIP ALGORITHM</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 759 / 771</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚙️ Metode Kompresi ZIP (zip_entry_compressionmethod)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>zip_entry_compressionmethod(resource $zip_entry): string|false</code> mengembalikan nama metode kompresi (seperti <code>"deflated"</code> untuk kompresi standar Zlib atau <code>"stored"</code> untuk file tanpa kompresi).
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Hasil Penggunaan zip_entry_compressionmethod():</h3>";
echo "<p>Metode Kompresi File Teks : <strong style='color:#059669;'>deflated (Zlib Compression)</strong></p>";
echo "<p>Metode Kompresi File Biner: <strong>stored (Tanpa Kompresi Tambahan)</strong></p>";
?>`,
    codeExplanation: [
      'zip_entry_compressionmethod() mengidentifikasi algoritma encoding data di dalam arsip ZIP.'
    ],
    challenge: {
      instruction: 'Pahami fungsi zip_entry_compressionmethod.',
      starterCode: `<?php
echo "zip_entry_compressionmethod mengidentifikasi metode kompresi.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Metode kompresi apakah yang paling umum digunakan dalam arsip ZIP standar?',
      options: [
        '`deflated`',
        '`bzip2`',
        '`lzma`',
        '`tar`'
      ],
      correctIndex: 0,
      explanation: 'Deflated adalah metode kompresi ZIP paling universal yang didukung oleh semua OS.'
    }
  },

  // 760. ZIP_ENTRY_OPEN, ZIP_ENTRY_READ, ZIP_ENTRY_CLOSE
  {
    id: 'php-ref-zip-entry-open-read-close',
    title: 'PHP zip_entry_open(), zip_entry_read(), zip_entry_close()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 760,
    overview: 'Kuasai trio fungsi ekstraksi konten ZIP: zip_entry_open(), zip_entry_read(), dan zip_entry_close() untuk membaca isi file langsung dari dalam arsip tanpa mengekstraknya ke hard disk.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">IN-MEMORY EXTRACTION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 760 / 771</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📥 Ekstraksi Konten File di Memori (zip_entry_read)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>zip_entry_open(resource $zip_dp, resource $zip_entry, string $mode = "rb"): bool</code> membuka entri, <code>zip_entry_read(resource $zip_entry, int $len = 1024): string|false</code> membaca buffer konten, dan <code>zip_entry_close(resource $zip_entry): bool</code> menutup entri.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Trio Siklus Ekstraksi Entri ZIP:</h3>";
echo "<ol>";
echo "<li><code>zip_entry_open(\$zip, \$entry, 'rb')</code> - Menyiapkan stream baca entri</li>";
echo "<li><code>\$konten = zip_entry_read(\$entry, zip_entry_filesize(\$entry))</code> - Membaca isi data ke memori variabel</li>";
echo "<li><code>zip_entry_close(\$entry)</code> - Menutup stream entri file</li>";
echo "</ol>";
?>`,
    codeExplanation: [
      'Trio fungsi ini memungkinkan pembacaan file terkompresi secara on-the-fly di RAM.'
    ],
    challenge: {
      instruction: 'Pahami siklus baca entri ZIP.',
      starterCode: `<?php
echo "open -> read -> close adalah siklus baca isi entri ZIP.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Fungsi apakah yang digunakan untuk membaca isi byte file dari entri ZIP yang telah dibuka?',
      options: [
        '`zip_entry_read()`',
        '`zip_get_contents()`',
        '`zip_entry_fetch()`',
        '`zip_extract()`'
      ],
      correctIndex: 0,
      explanation: 'zip_entry_read membaca byte data dari entri ZIP.'
    }
  },

  // 761. MODERN ZIPARCHIVE CLASS
  {
    id: 'php-ref-zip-archive-modern',
    title: 'PHP ZipArchive OOP Class (Standar Modern PHP 8)',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 761,
    overview: 'Kuasai kelas OOP ZipArchive di PHP 8.x: membuat file ZIP baru ($zip->open), menambahkan file ($zip->addFile), menambahkan string ($zip->addFromString), dan mengekstrak ($zip->extractTo).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">MODERN OOP ZIP</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 761 / 771</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🚀 Kelas OOP Modern ZipArchive</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Di PHP 8.x, kelas <code>ZipArchive</code> adalah standar industri untuk membuat dan mengekstrak arsip ZIP. Metode utama: <code>open()</code>, <code>addFile()</code>, <code>addFromString()</code>, <code>extractTo()</code>, dan <code>close()</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$zip = new ZipArchive();
$namaArsip = "laporan_devgrow.zip";

// Buka dan buat file ZIP baru (ZipArchive::CREATE | ZipArchive::OVERWRITE)
if ($zip->open($namaArsip, ZipArchive::CREATE | ZipArchive::OVERWRITE) === TRUE) {
    // Tambahkan file dinamis langsung dari string memori
    $zip->addFromString("readme.txt", "Arsip Otomatis DevGrow LMS - Dibuat pada " . date('Y-m-d H:i:s'));
    $zip->addFromString("config.json", json_encode(["status" => "success", "versi" => "2.0"], JSON_PRETTY_PRINT));
    
    $totalFile = $zip->numFiles;
    $zip->close();

    echo "<h3>Hasil Pembuatan ZIP via ZipArchive OOP:</h3>";
    echo "<p style='color:#059669; font-weight:bold;'>✓ Berhasil membuat arsip: $namaArsip ($totalFile file di dalamnya)</p>";
    
    if (file_exists($namaArsip)) { unlink($namaArsip); } // Bersihkan file demo
}
?>`,
    codeExplanation: [
      'ZipArchive::addFromString() membuat file di dalam ZIP langsung dari variabel memori tanpa membuat file sementara di disk!'
    ],
    challenge: {
      instruction: 'Pahami kelas ZipArchive.',
      starterCode: `<?php
$z = new ZipArchive();
echo "Kelas ZipArchive OOP siap digunakan di PHP 8.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Metode manakah pada kelas `ZipArchive` yang digunakan untuk menambahkan isi teks langsung ke dalam arsip ZIP tanpa perlu menulis file fisik di hard disk?',
      options: [
        '`$zip->addFromString($entryName, $content)`',
        '`$zip->addFile($path)`',
        '`$zip->write($data)`',
        '`$zip->append($text)`'
      ],
      correctIndex: 0,
      explanation: 'addFromString sangat efisien untuk men-generate file PDF/CSV/JSON di memori lalu di-zip.'
    }
  },

  // 762. ZIP EXTRACTTO
  {
    id: 'php-ref-zip-extract-to',
    title: 'PHP ZipArchive::extractTo() & Batch Extractor',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 762,
    overview: 'Kuasai metode ZipArchive::extractTo(): mengekstrak seluruh arsip ZIP atau file-file spesifik ke direktori tujuan dengan proteksi Zip Slip Security.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ZIP EXTRACTOR</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 762 / 771</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📂 Ekstraksi ZIP Otomatis (extractTo)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$zip->extractTo(string $pathto, array|string|null $entries = null): bool</code> mengekstrak seluruh file ZIP ke folder <code>$pathto</code> dalam satu baris kode.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Contoh Ekstraksi ZIP via ZipArchive::extractTo():</h3>";
echo "<pre style='background:#0f172a; color:#38bdf8; padding:12px; border-radius:8px; font-family:monospace;'>";
echo "\$zip = new ZipArchive();\n";
echo "if (\$zip->open('backup.zip') === TRUE) {\n";
echo "    // Ekstrak seluruh isi ke folder destination/\n";
echo "    \$zip->extractTo('/var/www/uploads/extracted/');\n";
echo "    \$zip->close();\n";
echo "    echo 'Ekstraksi Selesai!';\n";
echo "}\n";
echo "</pre>";
?>`,
    codeExplanation: [
      'ZipArchive::extractTo() menyederhanakan proses unzipping file upload secara instan.'
    ],
    challenge: {
      instruction: 'Pahami fungsi extractTo.',
      starterCode: `<?php
echo "ZipArchive::extractTo mengekstrak file zip ke direktori target.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Bagaimana cara mengekstrak HANYA file `"invoice.pdf"` dari file ZIP menggunakan `extractTo()`?',
      options: [
        '`$zip->extractTo($destinationPath, ["invoice.pdf"])`',
        '`$zip->extractOnly("invoice.pdf")`',
        '`$zip->extractTo($destinationPath, true)`',
        '`$zip->filter("invoice.pdf")->extract()`'
      ],
      correctIndex: 0,
      explanation: 'Parameter kedua extractTo menerima array nama file spesifik yang ingin diekstrak.'
    }
  },

  // 763. ZIP PASSWORD ENCRYPTION
  {
    id: 'php-ref-zip-password-encryption',
    title: 'PHP ZipArchive Password Protection & Encryption',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 763,
    overview: 'Kuasai metode ZipArchive::setPassword() & setEncryptionName(): memproteksi file ZIP dengan kata sandi dan enkripsi AES-256 tingkat militer.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-red-600 text-white">ZIP ENCRYPTION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 763 / 771</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔒 Proteksi Password & Enkripsi AES-256 (ZipArchive)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$zip->setPassword(string $password): bool</code> dan <code>$zip->setEncryptionName(string $name, int $method): bool</code> (dengan metode <code>ZipArchive::EM_AES_256</code>) mengamankan data sensitif dalam ZIP.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Contoh Proteksi File ZIP dengan Password AES-256:</h3>";
echo "<pre style='background:#0f172a; color:#38bdf8; padding:12px; border-radius:8px; font-family:monospace;'>";
echo "\$zip = new ZipArchive();\n";
echo "if (\$zip->open('rahasia.zip', ZipArchive::CREATE) === TRUE) {\n";
echo "    \$zip->setPassword('SandiKuat@2026');\n";
echo "    \$zip->addFromString('rahasia.txt', 'Data gaji karyawan...');\n";
echo "    // Terapkan enkripsi AES-256 pada file tersebut\n";
echo "    \$zip->setEncryptionName('rahasia.txt', ZipArchive::EM_AES_256);\n";
echo "    \$zip->close();\n";
echo "}\n";
echo "</pre>";
?>`,
    codeExplanation: [
      'ZipArchive::EM_AES_256 menyediakan enkripsi standar industri untuk proteksi file arsip.'
    ],
    challenge: {
      instruction: 'Pahami enkripsi ZIP.',
      starterCode: `<?php
echo "ZipArchive mendukung proteksi password dan enkripsi AES-256.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Konstanta enkripsi manakah pada `ZipArchive` yang menyediakan keamanan kriptografi terkuat?',
      options: [
        '`ZipArchive::EM_AES_256`',
        '`ZipArchive::EM_TRAD_PKWARE`',
        '`ZipArchive::EM_AES_128`',
        '`ZipArchive::EM_NONE`'
      ],
      correctIndex: 0,
      explanation: 'EM_AES_256 adalah enkripsi 256-bit AES teraman untuk arsip ZIP modern.'
    }
  },

  // 764. ZIP MASTER RECAP
  {
    id: 'php-ref-zip-complete-master',
    title: 'PHP Zip & Compression Master Architecture',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 764,
    overview: 'Kuasai arsitektur kompresi file, automated database backup archiving, stream download ZIP, dan manajemen arsip di PHP 8 backend.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">ZIP MASTER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 764 / 771</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏆 Master Lengkap PHP Zip & Kompresi</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Seluruh fungsi kompresi arsip (prosedural <code>zip_open</code>, <code>zip_read</code>, <code>zip_entry_filesize</code> dan modern OOP <code>ZipArchive</code> dengan enkripsi AES-256) telah Anda kuasai dengan sempurna.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Ringkasan Pilar PHP Zip Reference:</h3>";
echo "<ul>";
echo "<li>✓ <strong>Arsitektur Modern:</strong> ZipArchive (open, addFile, addFromString, extractTo, close)</li>";
echo "<li>✓ <strong>Keamanan Kriptografi:</strong> setPassword() & setEncryptionName(EM_AES_256)</li>";
echo "<li>✓ <strong>Fungsi Prosedural:</strong> zip_open(), zip_read(), zip_entry_name(), zip_entry_filesize(), zip_close()</li>";
echo "<li>✓ <strong>Use Case Enterprise:</strong> Otomasi backup database snapshot harian & export multi-dokumen invoice</li>";
echo "</ul>";
echo "<p style='color:green; font-weight:bold; font-size:18px;'>🎉 Selamat! Seluruh kurikulum PHP Zip Reference (Materi 755 - 764) telah selesai secara paripurna!</p>";
?>`,
    codeExplanation: [
      'Rekapitulasi arsitektur kompresi ZIP PHP enterprise.'
    ],
    challenge: {
      instruction: 'Pahami arsitektur ZIP.',
      starterCode: `<?php
echo "PHP Zip Reference Selesai 100%!";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Kapan pembuatan arsip ZIP di memori (`addFromString`) paling optimal digunakan?',
      options: [
        'Saat sistem perlu membuat paket download berformat ZIP yang berisi kumpulan file PDF invoice/laporan CSV yang di-generate secara dinamis tanpa perlu membebani disk IO server',
        'Untuk membuat database',
        'Untuk menghapus file',
        'Keduanya identik'
      ],
      correctIndex: 0,
      explanation: 'Menghindari penulisan disk fisik meningkatkan throughput performa download file ZIP.'
    }
  }
];

module.exports = phpPart71RefZip;
