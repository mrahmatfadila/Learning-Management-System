// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (FILESYSTEM PART 4: 238-254)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart24RefFilesystem4 = [
  // 238. POPEN()
  {
    id: 'php-ref-popen',
    title: 'PHP popen()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 238,
    overview: 'Kuasai popen(): membuka koneksi pipa stream (Process Pipe Stream) ke perintah eksekusi command line sistem operasi secara terarah ("r" read / "w" write).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PROCESS PIPE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 238 / 254</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚡ Menjalankan Perintah CLI Berbasis Pipa (popen)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>popen($command, $mode)</code> mengeksekusi perintah shell dan mengembalikan file pointer yang bisa dibaca (mode <code>"r"</code>) atau ditulisi (mode <code>"w"</code>) secara real-time seperti file stream biasa.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Buka stream pembacaan ke perintah CLI 'php -v'
$handle = popen("php -v", "r");

echo "<h3>Versi PHP Server Melalui popen():</h3>";
echo "<blockquote>";
while (!feof($handle)) {
    $line = fgets($handle);
    if ($line) echo htmlspecialchars($line) . "<br>";
    break; // Ambil baris pertama saja
}
echo "</blockquote>";

pclose($handle);
?>`,
    codeExplanation: [
      'popen() mengizinkan komunikasi bidirectional satu arah (read atau write) ke proses eksternal.'
    ],
    challenge: {
      instruction: 'Buka proses perintah CLI dengan popen("whoami", "r") atau echo.',
      starterCode: `<?php
$h = popen("echo Hello Popen", "r");
echo fgets($h);
pclose($h);
?>`,
      hint: 'Panggil popen("echo Hello Popen", "r").'
    },
    quiz: {
      question: 'Apa fungsi utama dari popen()?',
      options: [
        'Membuka pointer stream dua arah atau satu arah ke proses command line eksternal',
        'Membuka browser popup',
        'Memutar video',
        'Menghapus database'
      ],
      correctIndex: 0,
      explanation: 'popen (Process Open) membuka koneksi pipa I/O ke program CLI yang berjalan.'
    }
  },

  // 239. READFILE()
  {
    id: 'php-ref-readfile',
    title: 'PHP readfile()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 239,
    overview: 'Kuasai readfile(): membaca seluruh file dan langsung menuliskannya ke output buffer browser dalam 1 baris kode (sangat populer untuk file download PDF, gambar, dan zip).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DIRECT STREAMING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 239 / 254</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🚀 Streaming File Langsung (readfile)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>readfile($filename)</code> membaca file dan langsung mengalirkannya ke output browser tanpa memuat seluruh file ke variabel RAM PHP. Mengembalikan total byte yang berhasil dialirkan.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$sampleFile = __DIR__ . "/download_sample.txt";
file_put_contents($sampleFile, "Isi dokumen rahasia langsung dialirkan ke browser.");

echo "<h3>Hasil Penggunaan readfile():</h3>";
echo "<blockquote>";
$totalBytes = readfile($sampleFile);
echo "</blockquote>";

echo "<p>Total Byte Dialirkan: <strong style='color: #059669;'>$totalBytes Bytes</strong></p>";

unlink($sampleFile);
?>`,
    codeExplanation: [
      'readfile() tidak memerlukan fopen() atau fclose(), langsung mengalirkan isi ke browser.'
    ],
    challenge: {
      instruction: 'Uji readfile() pada file sementara.',
      starterCode: `<?php
file_put_contents("rf.txt", "Teks readfile");
readfile("rf.txt");
unlink("rf.txt");
?>`,
      hint: 'Panggil readfile("rf.txt").'
    },
    quiz: {
      question: 'Kapan readfile() paling tepat digunakan dalam pembuatan endpoint download berkas?',
      options: [
        'Setelah mengirim header Content-Type dan Content-Disposition (attachment) agar browser mendownload file tanpa menghabiskan RAM server',
        'Untuk memformat tabel HTML',
        'Untuk meng-hash password',
        'Hanya saat error 404'
      ],
      correctIndex: 0,
      explanation: 'readfile sangat cepat dan efisien memori untuk endpoint pengunduhan file.'
    }
  },

  // 240. READLINK()
  {
    id: 'php-ref-readlink',
    title: 'PHP readlink()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 240,
    overview: 'Fungsi readlink(): mengembalikan target path asli yang ditunjuk oleh sebuah tautan simbolik (Symbolic Link).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SYMLINK TARGET</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 240 / 254</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎯 Membaca Target Tautan Simbolik (readlink)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>readlink($path)</code> membaca isi konten symlink dan mengembalikan string target alamat file/folder yang ditunjuk oleh shortcut tersebut.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$target = __FILE__;
$link = __DIR__ . "/symlink_test.lnk";

if (@symlink($target, $link)) {
    $asalTarget = readlink($link);
    echo "<h3>Hasil Penggunaan readlink():</h3>";
    echo "<p>Target Asli dari Symlink: <code>$asalTarget</code></p>";
    unlink($link);
} else {
    echo "<p>readlink() membaca path target yang ditunjuk oleh symbolic link.</p>";
}
?>`,
    codeExplanation: [
      'readlink() mengekstrak path referensi yang disimpan di dalam symlink.'
    ],
    challenge: {
      instruction: 'Pahami fungsi readlink pada symbolic link.',
      starterCode: `<?php
echo "readlink(\$symlinkPath) mengembalikan target path asli.";
?>`,
      hint: 'Klik RUN untuk mereview readlink.'
    },
    quiz: {
      question: 'Apa nilai kembalian dari fungsi readlink($path)?',
      options: [
        'String jalur path target yang ditunjuk oleh symlink tersebut',
        'Ukuran file target',
        'Array file',
        'Boolean true saja'
      ],
      correctIndex: 0,
      explanation: 'readlink mengembalikan string path target dari symbolic link.'
    }
  },

  // 241. REALPATH()
  {
    id: 'php-ref-realpath',
    title: 'PHP realpath()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 241,
    overview: 'Kuasai realpath(): menyelesaikan jalur relatif (../, ./) dan tautan symlink menjadi JALUR KANONIKAL MUTLAK (Absolute Canonical Path) yang aman dari serangan Path Traversal.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PATH RESOLUTION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 241 / 254</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛡️ Resolusi Path Kanonikal Mutlak (realpath)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>realpath($path)</code> mengubah path relatif berantakan (seperti <code>../../app/./Config/../Models</code>) menjadi alamat absolut bersih tanpa symlink. <strong>Krusial untuk keamanan:</strong> Jika file tidak ada, <code>realpath()</code> mengembalikan <code>false</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$relatifPath = __DIR__ . "/../data/../../backend/scripts/data/phpPart24RefFilesystem4.js";

// Resolusi ke Absolute Canonical Path
$absolutPath = realpath($relatifPath);

echo "<h3>Hasil Resolusi realpath():</h3>";
echo "<p>Path Relatif Awal: <code>$relatifPath</code></p>";
echo "<p>Path Absolut Bersih: <strong style='color: #059669;'>$absolutPath</strong></p>";
?>`,
    codeExplanation: [
      'realpath() menghapus semua ../, ./, dan symbolic link serta memastikan file benar-benar eksis.'
    ],
    challenge: {
      instruction: 'Uji resolusi path dengan realpath(__DIR__ . "/../").',
      starterCode: `<?php
echo "Parent Path Absolut: " . realpath(__DIR__ . "/../");
?>`,
      hint: 'Panggil realpath(__DIR__ . "/../").'
    },
    quiz: {
      question: 'Apa yang dikembalikan oleh realpath($path) jika target file atau direktori ternyata TIDAK ADA di filesystem?',
      options: [
        'Boolean false',
        'String kosong',
        'Null',
        'Fatal error'
      ],
      correctIndex: 0,
      explanation: 'Jika file yang dituju tidak ada atau hak akses diblokir, realpath mengembalikan false.'
    }
  },

  // 242. REALPATH_CACHE_GET()
  {
    id: 'php-ref-realpath-cache-get',
    title: 'PHP realpath_cache_get()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 242,
    overview: 'Fungsi realpath_cache_get(): mengembalikan array seluruh entri cache resolusi path internal PHP di memori.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CACHE INSPECTION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 242 / 254</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Memeriksa Realpath Cache Internal (realpath_cache_get)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>realpath_cache_get()</code> membaca daftar path file yang sedang disimpan dalam cache memori PHP agar tidak berulang kali mengakses disk.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$cacheEntries = realpath_cache_get();

echo "<h3>Entri Realpath Cache PHP:</h3>";
echo "<p>Total Path Ter-cache di RAM: <strong>" . count($cacheEntries) . " Entri</strong></p>";
?>`,
    codeExplanation: [
      'realpath_cache_get() berguna untuk profiling performa autoloader composer & framework.'
    ],
    challenge: {
      instruction: 'Cek total entri realpath cache dengan count(realpath_cache_get()).',
      starterCode: `<?php
echo "Total cache path: " . count(realpath_cache_get());
?>`,
      hint: 'Panggil count(realpath_cache_get()).'
    },
    quiz: {
      question: 'Tipe data apakah yang dihasilkan oleh fungsi realpath_cache_get()?',
      options: [
        'Array asosiatif berisi daftar path file yang di-cache beserta informasi kuncinya',
        'String',
        'Integer',
        'Boolean'
      ],
      correctIndex: 0,
      explanation: 'realpath_cache_get() mengembalikan array entri cache path.'
    }
  },

  // 243. REALPATH_CACHE_SIZE()
  {
    id: 'php-ref-realpath-cache-size',
    title: 'PHP realpath_cache_size()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 243,
    overview: 'Fungsi realpath_cache_size(): mengembalikan total ukuran memori RAM (dalam satuan Bytes) yang sedang digunakan oleh cache realpath.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">MEMORY USAGE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 243 / 254</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">💾 Ukuran Penggunaan Realpath Cache (realpath_cache_size)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>realpath_cache_size()</code> mengembalikan jumlah byte memori yang dikonsumsi oleh realpath cache. Membantu sysadmin menentukan setting <code>realpath_cache_size = 4096k</code> di <code>php.ini</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$size = realpath_cache_size();
echo "<h3>Penggunaan Memori Realpath Cache:</h3>";
echo "<p>Memori Cache: <strong>" . round($size / 1024, 2) . " KB</strong> ($size Bytes)</p>";
?>`,
    codeExplanation: [
      'Menampilkan penggunaan memori realpath cache saat runtime.'
    ],
    challenge: {
      instruction: 'Ukur memori cache realpath dengan realpath_cache_size().',
      starterCode: `<?php
echo "Cache Size: " . realpath_cache_size() . " bytes";
?>`,
      hint: 'Panggil realpath_cache_size().'
    },
    quiz: {
      question: 'Di file konfigurasi manakah developer dapat memperbesar batas kapasitas realpath cache?',
      options: [
        'php.ini',
        'composer.json',
        'package.json',
        '.gitignore'
      ],
      correctIndex: 0,
      explanation: 'Opsi realpath_cache_size disetel pada file php.ini.'
    }
  },

  // 244. RENAME()
  {
    id: 'php-ref-rename',
    title: 'PHP rename()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 244,
    overview: 'Kuasai rename(): mengganti nama file/folder ATAU memindahkannya ke lokasi direktori lain (Move / Rename File) secara instan dan atomik.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">RENAME & MOVE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 244 / 254</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔄 Mengganti Nama & Memindahkan Berkas (rename)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>rename($oldname, $newname)</code> mengganti nama berkas atau memindahkan berkas antar direktori dalam partisi yang sama secara instan.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$fileLama = __DIR__ . "/draft_v1.txt";
$fileBaru = __DIR__ . "/laporan_final.txt";

file_put_contents($fileLama, "Konten laporan selesai.");

// Ganti nama file
if (rename($fileLama, $fileBaru)) {
    echo "<h3>Hasil Penggunaan rename():</h3>";
    echo "<p style='color: green;'><strong>✓ File draft_v1.txt berhasil diubah namanya menjadi laporan_final.txt!</strong></p>";
}

if (file_exists($fileBaru)) unlink($fileBaru);
?>`,
    codeExplanation: [
      'rename($lama, $baru) mengganti nama atau memindahkan file dalam satu perintah.'
    ],
    challenge: {
      instruction: 'Ganti nama file "old.txt" menjadi "new.txt" dengan rename.',
      starterCode: `<?php
file_put_contents("old.txt", "123");
rename("old.txt", "new.txt");
echo file_exists("new.txt") ? "Rename sukses" : "Gagal";
unlink("new.txt");
?>`,
      hint: 'Panggil rename("old.txt", "new.txt").'
    },
    quiz: {
      question: 'Apakah fungsi rename() dapat digunakan untuk memindahkan file ke direktori folder yang berbeda?',
      options: [
        'Ya, rename() dapat memindahkan file ke folder lain sekaligus mengganti namanya',
        'Tidak, hanya bisa di folder yang sama',
        'Hanya untuk file gambar',
        'Menghasilkan error'
      ],
      correctIndex: 0,
      explanation: 'rename() berfungsi ganda sebagai pengubah nama berkas dan pemindah berkas (Move).'
    }
  },

  // 245. REWIND()
  {
    id: 'php-ref-rewind',
    title: 'PHP rewind()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 245,
    overview: 'Kuasai rewind(): mengembalikan posisi pointer pembacaan stream file kembali ke awal (Byte ke-0: fseek($handle, 0, SEEK_SET)).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">REWIND POINTER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 245 / 254</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⏮️ Reset Pointer Berkas ke Awal (rewind)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>rewind($fileHandle)</code> menggeser pointer pembacaan stream kembali ke posisi awal byte 0, sehingga file dapat dibaca ulang dari awal tanpa perlu menutup dan membuka kembali handle file.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$f = __DIR__ . "/demo_rewind.txt";
file_put_contents($f, "DevGrow LMS");

$h = fopen($f, "r");
$baca1 = fread($h, 7); // Baca "DevGrow"

// Reset pointer kembali ke awal
rewind($h);
$bacaUlang = fread($h, 7); // Baca ulang "DevGrow"
fclose($h);

echo "<h3>Hasil Penggunaan rewind():</h3>";
echo "<p>Pembacaan Awal: <strong>'$baca1'</strong></p>";
echo "<p>Pembacaan Setelah rewind(): <strong style='color: #059669;'>'$bacaUlang'</strong></p>";

unlink($f);
?>`,
    codeExplanation: [
      'rewind($h) identik dengan fseek($h, 0, SEEK_SET).'
    ],
    challenge: {
      instruction: 'Gunakan rewind($h) untuk mengulang pembacaan berkas dari byte 0.',
      starterCode: `<?php
file_put_contents("r.txt", "12345");
$h = fopen("r.txt", "r");
fread($h, 3);
rewind($h);
echo "Posisi setelah rewind: " . ftell($h);
fclose($h);
unlink("r.txt");
?>`,
      hint: 'Panggil rewind($h).'
    },
    quiz: {
      question: 'Fungsi manakah di bawah ini yang ekuivalen penuh dengan panggilan rewind($handle)?',
      options: [
        'fseek($handle, 0, SEEK_SET)',
        'fseek($handle, 0, SEEK_END)',
        'ftruncate($handle, 0)',
        'fclose($handle)'
      ],
      correctIndex: 0,
      explanation: 'rewind menggeser pointer stream kembali ke byte 0 dari awal file.'
    }
  },

  // 246. RMDIR()
  {
    id: 'php-ref-rmdir',
    title: 'PHP rmdir()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 246,
    overview: 'Kuasai rmdir(): menghapus folder direktori kosong dari filesystem sistem operasi.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">REMOVE DIRECTORY</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 246 / 254</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📁 Menghapus Folder Direktori (rmdir)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>rmdir($dirname)</code> menghapus folder direktori yang sudah kosong. Jika folder masih berisi file atau subfolder, seluruh isinya harus dihapus terlebih dahulu sebelum <code>rmdir()</code> dipanggil.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$folder = __DIR__ . "/folder_sementara";
if (!is_dir($folder)) mkdir($folder);

if (is_dir($folder)) {
    rmdir($folder);
    echo "<p style='color: green;'><strong>✓ Folder direktori berhasil dihapus dengan rmdir().</strong></p>";
}
?>`,
    codeExplanation: [
      'rmdir() menghapus direktori kosong.',
      'Mengembalikan boolean true jika berhasil.'
    ],
    challenge: {
      instruction: 'Buat dan hapus folder dengan mkdir dan rmdir.',
      starterCode: `<?php
mkdir("dummy_dir");
rmdir("dummy_dir");
echo "Direktori berhasil dihapus.";
?>`,
      hint: 'Panggil rmdir("dummy_dir").'
    },
    quiz: {
      question: 'Syarat utama apakah yang harus dipenuhi agar rmdir($path) berhasil menghapus folder tanpa error?',
      options: [
        'Folder direktori harus dalam keadaan KOSONG (tidak ada file atau subfolder di dalamnya)',
        'Folder harus berisi file .txt',
        'Folder harus berumur lebih dari 24 jam',
        'Tidak ada syarat'
      ],
      correctIndex: 0,
      explanation: 'rmdir mewajibkan folder target kosong bersih.'
    }
  },

  // 247. SET_FILE_BUFFER()
  {
    id: 'php-ref-set-file-buffer',
    title: 'PHP set_file_buffer()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 247,
    overview: 'Fungsi set_file_buffer(): alias resmi dari stream_set_write_buffer() untuk mengatur ukuran write buffer stream file.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">WRITE BUFFERING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 247 / 254</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚙️ Mengatur Ukuran Buffer Stream (set_file_buffer)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>set_file_buffer($handle, $size)</code> menyetel ukuran write buffer pada stream. Nilai <code>0</code> menonaktifkan buffering sehingga setiap <code>fwrite()</code> langsung ditulis tanpa buffer.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$f = __DIR__ . "/buffer_test.txt";
$h = fopen($f, "w");

// Setel buffer ke 0 (unbuffered output)
set_file_buffer($h, 0);

fwrite($h, "Data instan unbuffered");
fclose($h);

unlink($f);
echo "<p style='color: green;'>Stream write buffer berhasil disetel.</p>";
?>`,
    codeExplanation: [
      'set_file_buffer($h, 0) memastikan data langsung ditulis tanpa penundaan buffering.'
    ],
    challenge: {
      instruction: 'Uji fungsi set_file_buffer($h, 0).',
      starterCode: `<?php
$h = fopen("b.txt", "w");
set_file_buffer($h, 0);
fclose($h);
unlink("b.txt");
echo "Buffer disetel.";
?>`,
      hint: 'Panggil set_file_buffer($h, 0).'
    },
    quiz: {
      question: 'Apa dampak menyetel set_file_buffer($handle, 0)?',
      options: [
        'Menonaktifkan buffering penulisan (unbuffered write) sehingga setiap operasi tulis langsung mendarat ke disk',
        'Menghapus isi buffer',
        'Mengunci file',
        'Menutup file'
      ],
      correctIndex: 0,
      explanation: 'Nilai buffer 0 menonaktifkan sistem caching buffer stream.'
    }
  },

  // 248. STAT()
  {
    id: 'php-ref-stat',
    title: 'PHP stat()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 248,
    overview: 'Kuasai stat(): mengembalikan array 13 metadata statistik lengkap file (ukuran, inode, uid, gid, mtime, atime, ctime, mode permission) dari string path file.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">STAT METADATA</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 248 / 254</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📊 Statistik Lengkap Berkas (stat)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>stat($filename)</code> membaca seluruh struktur metadata file POSIX C dan mengembalikannya sebagai Array asosiatif dan numerik (ukuran, waktu akses, waktu modifikasi, hak akses, user & group ID).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$stat = stat(__FILE__);

echo "<h3>Hasil Penggunaan stat():</h3>";
echo "<ul>";
echo "<li>Ukuran: <strong>{$stat['size']} Bytes</strong></li>";
echo "<li>Waktu Modifikasi: <strong>" . date("Y-m-d H:i:s", $stat['mtime']) . "</strong></li>";
echo "<li>Inode Number: <strong>{$stat['ino']}</strong></li>";
echo "<li>Permissions: <strong>" . substr(sprintf('%o', $stat['mode']), -4) . "</strong></li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'stat() membaca seluruh metadata file dalam 1 pemanggilan efisien.'
    ],
    challenge: {
      instruction: 'Ambil ukuran file dari stat(__FILE__)[\'size\'].',
      starterCode: `<?php
$s = stat(__FILE__);
echo "Ukuran: " . $s['size'] . " bytes";
?>`,
      hint: 'Panggil stat(__FILE__).'
    },
    quiz: {
      question: 'Kunci array asosiatif apakah pada hasil stat() yang menunjukkan waktu modifikasi isi file terakhir?',
      options: [
        '\'mtime\'',
        '\'atime\'',
        '\'ctime\'',
        '\'size\''
      ],
      correctIndex: 0,
      explanation: '\'mtime\' singkatan dari modification time.'
    }
  },

  // 249. SYMLINK()
  {
    id: 'php-ref-symlink',
    title: 'PHP symlink()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 249,
    overview: 'Kuasai symlink(): membuat tautan simbolik (Symbolic Link / Shortcut Sistem Berkas) ke target file atau folder (pondasi perintah php artisan storage:link pada framework).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SYMLINK CREATOR</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 249 / 254</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔗 Membuat Symbolic Link (symlink)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>symlink($target, $link)</code> membuat tautan simbolik (pointer shortcut). Inilah fungsi di balik perintah populer <code>storage:link</code> pada Laravel/modern framework untuk memublikasikan folder upload private ke web root <code>public/storage</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$targetDir = __DIR__ . "/storage/app/public";
$linkDir = __DIR__ . "/public_storage";

if (!is_dir($targetDir)) mkdir($targetDir, 0755, true);

if (@symlink($targetDir, $linkDir)) {
    echo "<h3>Hasil Pembuatan Symlink:</h3>";
    echo "<p style='color: green;'><strong>✓ Symbolic Link public_storage -> storage/app/public berhasil dibuat!</strong></p>";
    @unlink($linkDir);
} else {
    echo "<p>symlink() menghubungkan folder storage privat ke public web root.</p>";
}

@rmdir($targetDir);
@rmdir(dirname($targetDir));
@rmdir(dirname($targetDir, 2));
?>`,
    codeExplanation: [
      'symlink menghubungkan folder publik ke folder penyimpanan privat.'
    ],
    challenge: {
      instruction: 'Pahami fungsi pembuatan tautan simbolik dengan symlink.',
      starterCode: `<?php
echo "symlink('storage/app/public', 'public/storage');";
?>`,
      hint: 'Klik RUN untuk mereview symlink.'
    },
    quiz: {
      question: 'Fitur framework PHP modern apakah yang memanfaatkan fungsi symlink() secara mendasar?',
      options: [
        'Penerbitan folder penyimpanan file upload private ke folder web root publik (misal: php artisan storage:link)',
        'Koneksi database PDO',
        'Pengiriman email SMTP',
        'Validasi password hashing'
      ],
      correctIndex: 0,
      explanation: 'storage:link menggunakan symlink untuk menghubungkan folder storage ke public root.'
    }
  },

  // 250. TEMPNAM()
  {
    id: 'php-ref-tempnam',
    title: 'PHP tempnam()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 250,
    overview: 'Kuasai tempnam(): membuat berkas sementara unik (Unique Temporary File) di folder sistem dengan awalan prefix tertentu tanpa risiko tabrakan nama.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TEMP FILE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 250 / 254</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📁 Membuat Berkas Sementara Unik (tempnam)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>tempnam($directory, $prefix)</code> membuat file sementara berizin aman (0600) dengan nama unik otomatis di folder <code>sys_get_temp_dir()</code>. Sangat ideal untuk proses kompilasi PDF atau render gambar sementara.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Buat file temporary dengan prefix 'pdf_'
$tempPath = tempnam(sys_get_temp_dir(), "pdf_");

file_put_contents($tempPath, "Data sementara untuk export PDF.");

echo "<h3>Hasil Penggunaan tempnam():</h3>";
echo "<p>Jalur File Sementara: <code style='color: #4f46e5;'>$tempPath</code></p>";
echo "<p>Ukuran: <strong>" . filesize($tempPath) . " Bytes</strong></p>";

unlink($tempPath); // Bersihkan setelah selesai
?>`,
    codeExplanation: [
      'tempnam() menjamin nama file selalu unik dan tidak akan menimpa file proses lain.'
    ],
    challenge: {
      instruction: 'Buat file sementara dengan tempnam(sys_get_temp_dir(), "tmp_").',
      starterCode: `<?php
$tmp = tempnam(sys_get_temp_dir(), "tmp_");
echo "Temp: " . basename($tmp);
unlink($tmp);
?>`,
      hint: 'Panggil tempnam(sys_get_temp_dir(), "tmp_").'
    },
    quiz: {
      question: 'Apa keunggulan tempnam() dibandingkan membuat nama file manual seperti "temp.txt"?',
      options: [
        'tempnam() menjamin nama file dibuat secara unik dan atomik sehingga tidak ada risiko tabrakan nama saat multi-user request',
        'tempnam() tidak memakan memori',
        'tempnam() otomatis diupload ke cloud',
        'tempnam() tidak bisa dihapus'
      ],
      correctIndex: 0,
      explanation: 'tempnam membuat file unik dengan proteksi izin 0600 anti tabrakan nama.'
    }
  },

  // 251. TMPFILE()
  {
    id: 'php-ref-tmpfile',
    title: 'PHP tmpfile()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 251,
    overview: 'Kuasai tmpfile(): membuat file sementara di memori/disk yang OTOMATIS TERHAPUS SECARA MANDIRI ketika stream ditutup dengan fclose() atau script PHP selesai.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">AUTO-CLEANUP FILE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 251 / 254</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧹 File Sementara Hapus Mandiri (tmpfile)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>tmpfile()</code> membuka file stream sementara dalam mode baca-tulis (<code>r+</code>). Keunggulan magisnya: <strong>file akan otomatis terhapus dari harddisk saat <code>fclose()</code> dipanggil</strong>!
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Buka file sementara self-cleaning
$temp = tmpfile();

fwrite($temp, "Data komputasi sementara di memori buffer.\\n");
rewind($temp);

echo "<h3>Isi tmpfile():</h3>";
echo "<blockquote>" . fgets($temp) . "</blockquote>";

// Menutup handle otomatis MENGHAPUS file dari disk!
fclose($temp);
echo "<p style='color: green;'>✓ File temporary otomatis terhapus dari disk tanpa perlu memanggil unlink()!</p>";
?>`,
    codeExplanation: [
      'tmpfile() sangat bersih karena bebas dari risiko file sampah temporary tertinggal di server.'
    ],
    challenge: {
      instruction: 'Uji pembuatan tmpfile() dan tulis data ke dalamnya.',
      starterCode: `<?php
$h = tmpfile();
fwrite($h, "Data");
rewind($h);
echo fgets($h);
fclose($h);
?>`,
      hint: 'Panggil tmpfile().'
    },
    quiz: {
      question: 'Kapan file yang dibuat dengan tmpfile() akan dihapus secara otomatis dari harddisk server?',
      options: [
        'Tepat saat resource stream ditutup dengan fclose() atau saat script PHP selesai dieksekusi',
        'Setelah 7 hari',
        'Saat server di-restart',
        'Harus dihapus manual dengan unlink()'
      ],
      correctIndex: 0,
      explanation: 'tmpfile secara otomatis terhapus saat handle stream ditutup atau saat skrip berakhir.'
    }
  },

  // 252. TOUCH()
  {
    id: 'php-ref-touch',
    title: 'PHP touch()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 252,
    overview: 'Kuasai touch(): menyetel waktu modifikasi/akses file (Modification Time) ke waktu tertentu ATAU membuat file kosong baru secara instan jika file belum ada.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TOUCH</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 252 / 254</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">✨ Membuat File Kosong & Mengubah Timestamp (touch)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>touch($filename, $time, $atime)</code> membuat file baru jika belum ada, atau memperbarui timestamp file jika sudah ada.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$flagFile = __DIR__ . "/system_ready.flag";

// Buat file flag kosong
touch($flagFile);

echo "<h3>Hasil Penggunaan touch():</h3>";
echo "<p>Status Flag File: <strong>" . (file_exists($flagFile) ? "✓ Berhasil Dibuat" : "Gagal") . "</strong></p>";
echo "<p>Waktu Pembuatan: <strong>" . date("Y-m-d H:i:s", filemtime($flagFile)) . "</strong></p>";

unlink($flagFile);
?>`,
    codeExplanation: [
      'touch() adalah cara paling cepat membuat file kosong baru tanpa overhead stream I/O.'
    ],
    challenge: {
      instruction: 'Buat file kosong dengan touch("new.flag") dan hapus.',
      starterCode: `<?php
touch("new.flag");
echo file_exists("new.flag") ? "File terbuat" : "Gagal";
unlink("new.flag");
?>`,
      hint: 'Panggil touch("new.flag").'
    },
    quiz: {
      question: 'Apa yang terjadi jika kita menjalankan touch($filename) pada file yang SUDAH ADA di server?',
      options: [
        'Waktu modifikasi (mtime) dan akses (atime) file tersebut akan diperbarui ke waktu saat ini tanpa mengubah isi konten filenya',
        'Isi file akan terhapus',
        'File akan diduplikasi',
        'Terjadi error'
      ],
      correctIndex: 0,
      explanation: 'touch memperbarui timestamp mtime/atime file yang sudah ada tanpa merusak isi berkas.'
    }
  },

  // 253. UMASK()
  {
    id: 'php-ref-umask',
    title: 'PHP umask()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 253,
    overview: 'Kuasai umask(): menyetel atau membaca User File Creation Mask default untuk membatasi hak akses file baru yang dibuat oleh PHP.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">UMASK</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 253 / 254</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎭 Masking Izin Default Berkas (umask)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>umask($mask)</code> mengatur bitmask izin default sistem. Nilai mask dikurangkan dari izin dasar (misal izin 0777 dikurangi umask 0022 menghasilkan izin 0755).
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Ambil nilai umask saat ini
$oldUmask = umask(0);

// Kembalikan ke umask semula
umask($oldUmask);

echo "<h3>Hasil Pemeriksaan umask():</h3>";
echo "<p>Umask Sistem Saat Ini: <strong>" . sprintf('%04o', $oldUmask) . "</strong></p>";
?>`,
    codeExplanation: [
      'umask() memastikan file/folder baru yang dibuat memiliki izin yang aman sesuai konfigurasi server.'
    ],
    challenge: {
      instruction: 'Baca nilai umask aktif sistem.',
      starterCode: `<?php
$u = umask();
echo "Umask: " . sprintf('%04o', $u);
?>`,
      hint: 'Panggil umask().'
    },
    quiz: {
      question: 'Jika izin default pembuatan direktori adalah 0777 dan umask bernilai 0022, berapa izin akhir direktori yang terbentuk?',
      options: [
        '0755 (0777 - 0022)',
        '0777',
        '0644',
        '0000'
      ],
      correctIndex: 0,
      explanation: 'Umask bertindak sebagai pengurang bitmask izin sehingga 0777 - 0022 = 0755.'
    }
  },

  // 254. UNLINK()
  {
    id: 'php-ref-unlink',
    title: 'PHP unlink()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 254,
    overview: 'Kuasai unlink(): fungsi inti PHP untuk menghapus berkas file fisik dari media penyimpanan disk server.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DELETE FILE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 254 / 254</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🗑️ Menghapus Berkas dari Disk (unlink)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>unlink($filename, $context)</code> menghapus file dari storage secara permanen. Selalu padukan dengan <code>if (file_exists($file))</code> untuk menghindari warning PHP saat file yang ingin dihapus tidak ditemukan.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$fileSampah = __DIR__ . "/trash.log";
file_put_contents($fileSampah, "Log sementara");

// Pola Hapus Berkas yang Aman
if (file_exists($fileSampah)) {
    unlink($fileSampah);
    echo "<p style='color: green;'><strong>✓ Berkas sampah trash.log berhasil dihapus permanen dari disk.</strong></p>";
}
?>`,
    codeExplanation: [
      'unlink() menghapus file fisik.',
      'Mengembalikan true jika berhasil atau false jika gagal.'
    ],
    challenge: {
      instruction: 'Buat file dan hapus dengan unlink.',
      starterCode: `<?php
file_put_contents("del.txt", "123");
unlink("del.txt");
echo "File del.txt telah terhapus.";
?>`,
      hint: 'Panggil unlink("del.txt").'
    },
    quiz: {
      question: 'Pola apakah yang paling aman diterapkan sebelum memanggil unlink($file)?',
      options: [
        'Memeriksa keberadaan file dengan if (file_exists($file)) terlebih dahulu untuk menghindari PHP Warning',
        'Langsung memanggil unlink tanpa pengecekan',
        'Memanggil chmod 0000',
        'Restart server'
      ],
      correctIndex: 0,
      explanation: 'Pengecekan file_exists() mencegah timbulnya warning jika file target sudah tidak ada.'
    }
  }
];

module.exports = phpPart24RefFilesystem4;
