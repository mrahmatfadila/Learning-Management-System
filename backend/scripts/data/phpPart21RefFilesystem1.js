// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (FILESYSTEM PART 1: 174-197)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart21RefFilesystem1 = [
  // 174. BASENAME()
  {
    id: 'php-ref-basename',
    title: 'PHP basename()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 174,
    overview: 'Kuasai basename(): mengekstrak nama file saja dari jalur path lengkap (dengan opsi membuang ekstensi file seperti .php atau .jpg).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">FILESYSTEM</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 174 / 220</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📄 Mengambil Nama File (basename)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>basename($path, $suffix)</code> memotong bagian direktori depan dan mengembalikan komponen nama file paling ujung. Parameter kedua <code>$suffix</code> memungkinkan Anda membuang ekstensi file secara instan.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$fullPath = "/var/www/html/storage/documents/laporan_tahunan_2026.pdf";

// 1. Ambil nama file lengkap beserta ekstensi
$namaFile = basename($fullPath);

// 2. Ambil nama file tanpa ekstensi .pdf
$namaFileTanpaExt = basename($fullPath, ".pdf");

echo "<h3>Hasil Penggunaan basename():</h3>";
echo "<p>Jalur Lengkap: <code>$fullPath</code></p>";
echo "<p>Nama File: <strong style='color: #4f46e5;'>$namaFile</strong></p>";
echo "<p>Nama Tanpa Ekstensi: <strong style='color: #059669;'>$namaFileTanpaExt</strong></p>";
?>`,
    codeExplanation: [
      'basename("/a/b/c.pdf") menghasilkan "c.pdf".',
      'basename("/a/b/c.pdf", ".pdf") menghasilkan "c".'
    ],
    challenge: {
      instruction: 'Ambil nama file dari path "/images/avatar.png" dengan basename.',
      starterCode: `<?php
echo "Nama file: " . basename("/images/avatar.png");
?>`,
      hint: 'Panggil basename("/images/avatar.png").'
    },
    quiz: {
      question: 'Apa hasil dari basename("/var/www/index.php", ".php")?',
      options: [
        '"index"',
        '"index.php"',
        '"/var/www"',
        '".php"'
      ],
      correctIndex: 0,
      explanation: 'Ekstensi ".php" pada parameter kedua akan dipotong dari akhir string nama file.'
    }
  },

  // 175. CHGRP()
  {
    id: 'php-ref-chgrp',
    title: 'PHP chgrp()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 175,
    overview: 'Fungsi chgrp(): mengubah kepemilikan grup pengguna (user group ownership) dari file atau folder tertentu di sistem Linux/Unix.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">FILE OWNERSHIP</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 175 / 220</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">👥 Mengubah Grup Pemilik File (chgrp)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>chgrp($filename, $group)</code> mengubah user group dari file (seperti <code>www-data</code> atau <code>nginx</code>). Sangat krusial saat mengelola file upload di server Linux agar web server dapat membaca dan menulis file.
          </p>
        </div>
      </div>
    `,
    code: `<?php
if (function_exists('chgrp')) {
    echo "<h3>Fungsi chgrp() Tersedia:</h3>";
    echo "<p>Contoh: <code>@chgrp('/var/www/uploads/avatar.jpg', 'www-data');</code></p>";
} else {
    echo "<p>chgrp() khusus digunakan pada sistem operasi Unix/Linux.</p>";
}
?>`,
    codeExplanation: [
      'chgrp menerima path file dan nama/ID grup sistem operasi.',
      'Mengembalikan boolean true jika sukses atau false jika tidak ada izin.'
    ],
    challenge: {
      instruction: 'Periksa ketersediaan fungsi chgrp di runtime server.',
      starterCode: `<?php
echo function_exists("chgrp") ? "chgrp aktif" : "chgrp nonaktif di lingkungan ini";
?>`,
      hint: 'Panggil function_exists("chgrp").'
    },
    quiz: {
      question: 'Apa fungsi utama dari chgrp() di PHP?',
      options: [
        'Mengubah grup kepemilikan file/folder pada server Linux/Unix',
        'Mengelompokkan array',
        'Membuat grup chat',
        'Menghapus grup database'
      ],
      correctIndex: 0,
      explanation: 'chgrp (change group) mengubah grup pemilik berkas di level sistem operasi.'
    }
  },

  // 176. CHMOD()
  {
    id: 'php-ref-chmod',
    title: 'PHP chmod()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 176,
    overview: 'Kuasai chmod(): mengubah izin akses (Permission Read, Write, Execute: 0755, 0777, 0644) pada file atau folder dengan notasi oktal (diawali 0).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PERMISSIONS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 176 / 220</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔒 Mengatur Izin Akses Berkas (chmod)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>chmod($filename, $permissions)</code> menyetel izin akses baca/tulis/eksekusi. <strong>Wajib diawali angka 0</strong> (notasi oktal PHP): <code>0644</code> (file standar), <code>0755</code> (folder standar), <code>0777</code> (akses penuh).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$tmpFile = __DIR__ . "/demo_chmod.txt";
file_put_contents($tmpFile, "Demo Hak Akses Berkas");

// Setel izin ke 0644 (Owner: Read+Write, Group: Read, Public: Read)
chmod($tmpFile, 0644);

echo "<h3>Hasil Penggunaan chmod():</h3>";
echo "<p>Izin file berhasil diubah menjadi standar aman <strong>0644 (Read-Only untuk Publik)</strong>.</p>";

if (file_exists($tmpFile)) unlink($tmpFile);
?>`,
    codeExplanation: [
      'Penulisan nilai permission harus dalam format oktal dengan awalan nol: 0644 atau 0755.'
    ],
    challenge: {
      instruction: 'Uji penyetelan izin berkas dengan chmod.',
      starterCode: `<?php
$f = "test_perm.txt";
file_put_contents($f, "test");
chmod($f, 0644);
echo "Izin 0644 diterapkan.";
unlink($f);
?>`,
      hint: 'Gunakan chmod($f, 0644).'
    },
    quiz: {
      question: 'Mengapa parameter kedua pada fungsi chmod($file, $mode) wajib diawali dengan angka 0 (seperti 0755)?',
      options: [
        'Agar PHP mengenali nilai tersebut sebagai bilangan basis Oktal (Octal Mode)',
        'Sebagai penanda bahwa file bersifat rahasia',
        'Agar file tidak terhapus',
        'Hanya aturan estetika kode'
      ],
      correctIndex: 0,
      explanation: 'Awalan angka 0 memberitahu compiler PHP bahwa angka tersebut adalah notasi oktal izin POSIX.'
    }
  },

  // 177. CHOWN()
  {
    id: 'php-ref-chown',
    title: 'PHP chown()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 177,
    overview: 'Fungsi chown(): mengubah pemilik user (User Ownership) dari suatu file atau folder pada server Unix/Linux.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CHOWN</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 177 / 220</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">👤 Mengubah Pemilik File (chown)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>chown($filename, $user)</code> mengubah user pemilik file (seperti <code>"www-data"</code> atau <code>"root"</code>). Hanya bisa dijalankan oleh user root/superuser pada sistem operasi Linux.
          </p>
        </div>
      </div>
    `,
    code: `<?php
if (function_exists('chown')) {
    echo "<h3>Fungsi chown() Tersedia:</h3>";
    echo "<p>Sintaks: <code>@chown('/var/www/html/file.txt', 'www-data');</code></p>";
} else {
    echo "<p>chown() khusus untuk lingkungan Unix/Linux.</p>";
}
?>`,
    codeExplanation: [
      'chown menerima nama username (string) atau user ID numeric (integer).'
    ],
    challenge: {
      instruction: 'Periksa ketersediaan fungsi chown().',
      starterCode: `<?php
echo function_exists("chown") ? "chown didukung" : "chown khusus Unix/Linux";
?>`,
      hint: 'Panggil function_exists("chown").'
    },
    quiz: {
      question: 'Apa fungsi dari chown()?',
      options: [
        'Mengubah pemilik (user owner) dari file atau folder',
        'Mengubah nama folder',
        'Mengganti password user',
        'Menghapus user database'
      ],
      correctIndex: 0,
      explanation: 'chown singkatan dari "change owner" untuk mengubah pemilik berkas.'
    }
  },

  // 178. CLEARSTATCACHE()
  {
    id: 'php-ref-clearstatcache',
    title: 'PHP clearstatcache()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 178,
    overview: 'Kuasai clearstatcache(): membersihkan cache internal status file PHP agar fungsi seperti filesize(), filemtime(), dan file_exists() membaca data terbaru dari disk.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">STAT CACHE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 178 / 220</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧹 Membersihkan Cache File Status (clearstatcache)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Demi performa, PHP meng-cache hasil panggilan <code>filesize()</code>, <code>is_file()</code>, <code>filemtime()</code>. Jika file dimodifikasi secara berulang dalam satu request, panggil <code>clearstatcache()</code> agar informasi ukuran file tidak tertinggal.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$file = __DIR__ . "/test_cache.txt";
file_put_contents($file, "Data Awal");

$size1 = filesize($file);
file_put_contents($file, "Data Awal + Penambahan Teks Baru");

clearstatcache();
$size2 = filesize($file);

echo "<h3>Hasil Penggunaan clearstatcache():</h3>";
echo "<p>Ukuran Awal: <strong>$size1 Bytes</strong></p>";
echo "<p>Ukuran Terbaru Setelah clearstatcache: <strong style='color: #059669;'>$size2 Bytes</strong></p>";

if (file_exists($file)) unlink($file);
?>`,
    codeExplanation: [
      'clearstatcache() memaksa PHP mengabaikan cache memori dan membaca metadata fresh langsung dari storage.'
    ],
    challenge: {
      instruction: 'Panggil clearstatcache() untuk membersihkan cache stat berkas.',
      starterCode: `<?php
clearstatcache();
echo "Cache status file telah dibersihkan.";
?>`,
      hint: 'Panggil clearstatcache().'
    },
    quiz: {
      question: 'Fungsi file apa sajakah yang di-cache oleh PHP dan dapat disegarkan dengan clearstatcache()?',
      options: [
        'filesize(), filemtime(), file_exists(), is_file(), is_dir(), fileperms()',
        'Hanya date()',
        'Hanya json_encode()',
        'Query MySQL'
      ],
      correctIndex: 0,
      explanation: 'PHP meng-cache seluruh fungsi stat berkas untuk menghemat operasi I/O harddisk.'
    }
  },

  // 179. COPY()
  {
    id: 'php-ref-copy',
    title: 'PHP copy()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 179,
    overview: 'Kuasai copy(): menyalin file dari sumber ($source) ke destinasi baru ($destination) secara cepat dan aman.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">COPY FILE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 179 / 220</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📋 Menyalin Berkas (copy)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>copy($from, $to, $context)</code> membuat duplikat file dari path sumber ke path tujuan. Mengembalikan boolean <code>true</code> jika berhasil.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$sumber = __DIR__ . "/dokumen_asli.txt";
$tujuan = __DIR__ . "/dokumen_backup.txt";

file_put_contents($sumber, "Ini adalah konten dokumen penting.");

if (copy($sumber, $tujuan)) {
    echo "<h3>Hasil Penggunaan copy():</h3>";
    echo "<p style='color: green;'><strong>✓ Berkas berhasil diduplikasi ke dokumen_backup.txt!</strong></p>";
}

if (file_exists($sumber)) unlink($sumber);
if (file_exists($tujuan)) unlink($tujuan);
?>`,
    codeExplanation: [
      'copy($sumber, $tujuan) adalah cara paling ringkas menduplikasi file tanpa perlu membuka filestream manual.'
    ],
    challenge: {
      instruction: 'Duplikasi file "a.txt" ke "b.txt" dengan copy("a.txt", "b.txt").',
      starterCode: `<?php
file_put_contents("a.txt", "Data");
copy("a.txt", "b.txt");
echo file_exists("b.txt") ? "Duplikasi sukses" : "Gagal";
unlink("a.txt");
unlink("b.txt");
?>`,
      hint: 'Panggil copy("a.txt", "b.txt").'
    },
    quiz: {
      question: 'Apa yang terjadi jika file tujuan pada pemanggilan copy($from, $to) sudah ada di harddisk?',
      options: [
        'File tujuan akan langsung ditimpa (overwritten)',
        'Menghasilkan fatal error',
        'File sumber terhapus',
        'PHP mati mendadak'
      ],
      correctIndex: 0,
      explanation: 'copy() secara default akan menimpa file target yang sudah ada jika hak akses mengizinkan.'
    }
  },

  // 180. DELETE()
  {
    id: 'php-ref-delete',
    title: 'PHP delete() / unlink()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 180,
    overview: 'Kuasai delete() / unlink(): menghapus file permanen dari filesystem sistem operasi.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DELETE & UNLINK</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 180 / 220</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🗑️ Menghapus Berkas Permanen (unlink / delete)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Di PHP, <code>unlink($filename)</code> (dan aliasnya <code>delete()</code>) menghapus file dari storage secara permanen.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$fileSampah = __DIR__ . "/temporary_cache.tmp";
file_put_contents($fileSampah, "Temporary Data");

if (file_exists($fileSampah)) {
    unlink($fileSampah);
    echo "<p style='color: #dc2626;'><strong>✓ File temporary_cache.tmp berhasil dihapus dengan aman.</strong></p>";
}
?>`,
    codeExplanation: [
      'unlink() menghapus file secara permanen dari sistem file.'
    ],
    challenge: {
      instruction: 'Buat dan hapus file sementara dengan unlink().',
      starterCode: `<?php
file_put_contents("temp.txt", "123");
unlink("temp.txt");
echo "File temp.txt telah dihapus.";
?>`,
      hint: 'Panggil unlink("temp.txt").'
    },
    quiz: {
      question: 'Fungsi utama apakah di PHP yang digunakan untuk menghapus sebuah berkas (file)?',
      options: [
        'unlink()',
        'rmdir()',
        'remove_folder()',
        'file_clear()'
      ],
      correctIndex: 0,
      explanation: 'unlink() adalah fungsi standar resmi di PHP untuk menghapus file dari disk.'
    }
  },

  // 181. DIRNAME()
  {
    id: 'php-ref-dirname',
    title: 'PHP dirname()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 181,
    overview: 'Kuasai dirname(): mengambil jalur path folder induk (Parent Directory Path) dengan dukungan navigasi naik $levels bertingkat.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DIRNAME</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 181 / 220</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📁 Mengambil Path Folder Induk (dirname)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>dirname($path, $levels)</code> mengembalikan nama direktori dari suatu path file. Parameter <code>$levels</code> memungkinkan Anda melompat naik tingkat folder ke atas.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$pathFile = "/var/www/html/app/Http/Controllers/UserController.php";

$dir1 = dirname($pathFile);
$dir3 = dirname($pathFile, 3);

echo "<h3>Hasil Penggunaan dirname():</h3>";
echo "<p>Folder 1 Level di Atas: <strong>$dir1</strong></p>";
echo "<p>Folder 3 Level di Atas: <strong style='color: #059669;'>$dir3</strong></p>";
?>`,
    codeExplanation: [
      'dirname($path, 3) naik 3 tingkat direktori sekaligus.'
    ],
    challenge: {
      instruction: 'Ambil nama folder induk dari path "/var/www/index.php" dengan dirname.',
      starterCode: `<?php
echo "Folder induk: " . dirname("/var/www/index.php");
?>`,
      hint: 'Panggil dirname("/var/www/index.php").'
    },
    quiz: {
      question: 'Apa hasil dari dirname("/a/b/c/d.php", 2)?',
      options: [
        '"/a/b"',
        '"/a/b/c"',
        '"/a"',
        '"d.php"'
      ],
      correctIndex: 0,
      explanation: 'Menaikkan 2 tingkat dari file "d.php" akan menghasilkan direktori "/a/b".'
    }
  },

  // 182. DISK_FREE_SPACE()
  {
    id: 'php-ref-disk-free-space',
    title: 'PHP disk_free_space()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 182,
    overview: 'Kuasai disk_free_space(): mengukur sisa ruang kosong harddisk (Free Storage Space) dalam satuan Bytes pada partisi atau direktori tertentu.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DISK MONITORING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 182 / 220</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">💾 Mengukur Sisa Ruang Harddisk (disk_free_space)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>disk_free_space($directory)</code> mengembalikan float/integer jumlah bytes ruang kosong yang masih tersedia pada drive partisi.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$freeBytes = disk_free_space(".");
$freeGB = round($freeBytes / (1024**3), 2);

echo "<h3>Kapasitas Sisa Harddisk Server:</h3>";
echo "<p>Sisa Ruang Kosong: <strong style='color: #059669;'>$freeGB GB Tersedia</strong></p>";
?>`,
    codeExplanation: [
      'Membagi dengan (1024^3) mengonversi satuan Bytes ke Gigabytes (GB).'
    ],
    challenge: {
      instruction: 'Ukur sisa ruang disk saat ini dalam satuan GB.',
      starterCode: `<?php
$gb = round(disk_free_space(".") / (1024**3), 2);
echo "Sisa disk: $gb GB";
?>`,
      hint: 'Panggil disk_free_space(".").'
    },
    quiz: {
      question: 'Satuan ukuran default apakah yang dikembalikan oleh fungsi disk_free_space()?',
      options: [
        'Bytes',
        'Kilobytes (KB)',
        'Megabytes (MB)',
        'Gigabytes (GB)'
      ],
      correctIndex: 0,
      explanation: 'disk_free_space() mengembalikan nilai murni dalam satuan Bytes.'
    }
  },

  // 183. DISK_TOTAL_SPACE()
  {
    id: 'php-ref-disk-total-space',
    title: 'PHP disk_total_space()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 183,
    overview: 'Kuasai disk_total_space(): menghitung total kapasitas penuh harddisk (Total Disk Capacity) pada partisi drive yang ditentukan.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TOTAL STORAGE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 183 / 220</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">💽 Total Kapasitas Partisi Drive (disk_total_space)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>disk_total_space($directory)</code> mengembalikan total kapasitas maksimum penyimpanan pada partisi disk dalam satuan Bytes.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$totalBytes = disk_total_space(".");
$totalGB = round($totalBytes / (1024**3), 2);

echo "<h3>Total Kapasitas Partisi Harddisk:</h3>";
echo "<p>Total Storage: <strong>$totalGB GB</strong></p>";
?>`,
    codeExplanation: [
      'disk_total_space mengembalikan kapasitas total partisi dalam satuan Bytes.'
    ],
    challenge: {
      instruction: 'Hitung total kapasitas disk dalam GB dengan disk_total_space(".").',
      starterCode: `<?php
echo "Total Storage: " . round(disk_total_space(".") / (1024**3), 2) . " GB";
?>`,
      hint: 'Panggil disk_total_space(".").'
    },
    quiz: {
      question: 'Bagaimana cara menghitung persentase ruang disk yang terpakai (Disk Usage %)?',
      options: [
        '( (disk_total_space - disk_free_space) / disk_total_space ) * 100',
        'disk_total_space / 100',
        'disk_free_space * 100',
        'filesize() * 100'
      ],
      correctIndex: 0,
      explanation: 'Ruang terpakai dihitung dari selisih total dikurangi sisa kosong, dibagi total dikalikan 100%.'
    }
  },

  // 184. DISKFREESPACE()
  {
    id: 'php-ref-diskfreespace',
    title: 'PHP diskfreespace()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 184,
    overview: 'Fungsi diskfreespace(): alias resmi bawaan dari fungsi disk_free_space().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ALIAS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 184 / 220</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔄 Alias diskfreespace()</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>diskfreespace($directory)</code> adalah sinonim/alias langsung dari <code>disk_free_space()</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$free = diskfreespace(".");
echo "<h3>Hasil Penggunaan diskfreespace():</h3>";
echo "<p>Sisa Ruang Disk: <strong>" . round($free / (1024**3), 2) . " GB</strong></p>";
?>`,
    codeExplanation: [
      'diskfreespace() berperilaku persis sama dengan disk_free_space().'
    ],
    challenge: {
      instruction: 'Uji fungsi diskfreespace(".").',
      starterCode: `<?php
echo "Sisa: " . diskfreespace(".");
?>`,
      hint: 'Panggil diskfreespace(".").'
    },
    quiz: {
      question: 'Fungsi apakah yang merupakan alias resmi dari diskfreespace()?',
      options: [
        'disk_free_space()',
        'disk_total_space()',
        'clearstatcache()',
        'filesize()'
      ],
      correctIndex: 0,
      explanation: 'diskfreespace() adalah alias resmi lama dari disk_free_space().'
    }
  },

  // 185. FCLOSE()
  {
    id: 'php-ref-fclose',
    title: 'PHP fclose()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 185,
    overview: 'Kuasai fclose(): menutup pointer stream file yang dibuka oleh fopen() untuk mencegah kebocoran resource handle dan memastikan seluruh buffer data ter-flush sempurna ke disk.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">STREAM CLOSE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 185 / 220</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🚪 Menutup Stream File (fclose)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>fclose($fileHandle)</code> melepaskan kunci file dan menutup koneksi resource ke sistem file.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$path = __DIR__ . "/demo_close.txt";
$handle = fopen($path, "w");

if ($handle) {
    fwrite($handle, "Menulis data aman ke file.");
    fclose($handle);
    echo "<p style='color: green;'><strong>✓ Stream file berhasil ditutup dengan fclose().</strong></p>";
}

if (file_exists($path)) unlink($path);
?>`,
    codeExplanation: [
      'fclose($handle) melepaskan file descriptor kembali ke sistem operasi.'
    ],
    challenge: {
      instruction: 'Buka dan tutup file dengan fopen dan fclose.',
      starterCode: `<?php
$h = fopen("test.txt", "w");
fclose($h);
unlink("test.txt");
echo "Stream sukses ditutup.";
?>`,
      hint: 'Panggil fclose($h).'
    },
    quiz: {
      question: 'Apa dampak buruk jika programmer lupa memanggil fclose() setelah operasi penulisan fopen("w")?',
      options: [
        'Data di memory buffer mungkin belum sempat tersimpan ke disk dan terjadi kebocoran resource file descriptor',
        'File terhapus otomatis',
        'PHP akan error syntax',
        'Tidak ada dampak apa-apa'
      ],
      correctIndex: 0,
      explanation: 'fclose memastikan buffer ter-flush ke disk dan melepaskan lock file descriptor sistem.'
    }
  },

  // 186. FEOF()
  {
    id: 'php-ref-feof',
    title: 'PHP feof()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 186,
    overview: 'Kuasai feof(): menguji apakah posisi pointer pembacaan file telah mencapai akhir berkas (End of File).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">END OF FILE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 186 / 220</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏁 Mendeteksi Akhir Berkas (feof)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>feof($fileHandle)</code> mengembalikan boolean <code>true</code> jika pointer pembacaan sudah berada di akhir baris terakhir file.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$path = __DIR__ . "/data_kota.txt";
file_put_contents($path, "Jakarta\\nBandung\\nSurabaya\\n");

$handle = fopen($path, "r");
echo "<ul>";
while (!feof($handle)) {
    $baris = fgets($handle);
    if (trim($baris) !== "") {
        echo "<li>" . htmlspecialchars($baris) . "</li>";
    }
}
echo "</ul>";
fclose($handle);
unlink($path);
?>`,
    codeExplanation: [
      'while (!feof($handle)) membaca file sampai baris terakhir secara hemat memori.'
    ],
    challenge: {
      instruction: 'Uji pembacaan file dengan while (!feof($h)).',
      starterCode: `<?php
file_put_contents("tmp.txt", "A\\nB\\n");
$h = fopen("tmp.txt", "r");
while(!feof($h)) { echo fgets($h); }
fclose($h);
unlink("tmp.txt");
?>`,
      hint: 'Gunakan while(!feof($h)).'
    },
    quiz: {
      question: 'Apa kepanjangan dari fungsi feof()?',
      options: [
        'File End-Of-File',
        'Fast Execution Of File',
        'File Extension Open Format',
        'Find Error On File'
      ],
      correctIndex: 0,
      explanation: 'feof singkatan dari "File End-Of-File".'
    }
  },

  // 187. FFLUSH()
  {
    id: 'php-ref-fflush',
    title: 'PHP fflush()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 187,
    overview: 'Fungsi fflush(): memaksa penulisan seluruh data yang tertahan di memory buffer internal langsung ke disk secara instan.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">BUFFER FLUSH</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 187 / 220</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚡ Memaksa Flush Buffer ke Disk (fflush)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>fflush($fileHandle)</code> memaksa seluruh isi write-buffer yang belum sempat ditulis ke harddisk agar segera ditulis saat itu juga.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$path = __DIR__ . "/realtime_log.txt";
$h = fopen($path, "a");

fwrite($h, "[" . date("H:i:s") . "] Event Penting Terjadi\\n");
fflush($h);

echo "<p style='color: green;'>Data berhasil di-flush ke disk secara instan.</p>";
fclose($h);
unlink($path);
?>`,
    codeExplanation: [
      'fflush() mencegah kehilangan data saat terjadi crash sebelum stream ditutup.'
    ],
    challenge: {
      instruction: 'Tulis data dan panggil fflush($h) sebelum menutup file.',
      starterCode: `<?php
$h = fopen("log.txt", "w");
fwrite($h, "Log urgent");
fflush($h);
fclose($h);
unlink("log.txt");
echo "Data ter-flush.";
?>`,
      hint: 'Panggil fflush($h).'
    },
    quiz: {
      question: 'Kapan fflush() sangat dibutuhkan dalam aplikasi backend?',
      options: [
        'Pada pencatatan log transaksi kritis di mana data harus langsung mendarat di disk fisik tanpa tertahan di buffer memori',
        'Untuk memformat JSON',
        'Untuk enkripsi password',
        'Hanya saat download file'
      ],
      correctIndex: 0,
      explanation: 'fflush menjamin integritas data instan dengan mengosongkan buffer memori langsung ke storage.'
    }
  },

  // 188. FGETC()
  {
    id: 'php-ref-fgetc',
    title: 'PHP fgetc()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 188,
    overview: 'Fungsi fgetc(): membaca 1 karakter tunggal dari posisi pointer file saat ini (File Get Character).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CHAR BY CHAR</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 188 / 220</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔤 Membaca Karakter per Karakter (fgetc)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>fgetc($fileHandle)</code> membaca tepat 1 karakter (1 byte) dari file dan memajukan posisi pointer.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$path = __DIR__ . "/demo_char.txt";
file_put_contents($path, "PHP8");

$h = fopen($path, "r");
echo "<ul>";
while (false !== ($char = fgetc($h))) {
    echo "<li>Karakter: <strong>'$char'</strong></li>";
}
echo "</ul>";
fclose($h);
unlink($path);
?>`,
    codeExplanation: [
      'fgetc() membaca file karakter demi karakter sampai habis.'
    ],
    challenge: {
      instruction: 'Baca karakter pertama file dengan fgetc($h).',
      starterCode: `<?php
file_put_contents("c.txt", "DevGrow");
$h = fopen("c.txt", "r");
echo "Karakter #1: " . fgetc($h);
fclose($h);
unlink("c.txt");
?>`,
      hint: 'Panggil fgetc($h).'
    },
    quiz: {
      question: 'Berapa banyak karakter yang dibaca oleh setiap pemanggilan fgetc()?',
      options: [
        'Tepat 1 Karakter',
        '1 Baris',
        '1024 Karakter',
        'Seluruh file'
      ],
      correctIndex: 0,
      explanation: 'fgetc singkatan dari "file get character" yang membaca tepat 1 karakter tunggal.'
    }
  },

  // 189. FGETCSV()
  {
    id: 'php-ref-fgetcsv',
    title: 'PHP fgetcsv()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 189,
    overview: 'Kuasai fgetcsv(): mem-parsing baris file CSV (Comma-Separated Values) langsung menjadi Array PHP terstruktur.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CSV PARSER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 189 / 220</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📊 Import & Parsing File CSV (fgetcsv)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>fgetcsv($handle, $length, $separator, $enclosure)</code> memecah baris CSV menjadi array kolom secara otomatis.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$path = __DIR__ . "/produk.csv";
file_put_contents($path, "ID,Nama,Harga\\n1,Laptop,15000000\\n2,Mouse,150000");

$h = fopen($path, "r");
echo "<ul>";
while (($data = fgetcsv($h, 1000, ",")) !== false) {
    echo "<li>" . implode(" | ", $data) . "</li>";
}
echo "</ul>";
fclose($h);
unlink($path);
?>`,
    codeExplanation: [
      'fgetcsv otomatis mengenali pemisah koma dan kutip.'
    ],
    challenge: {
      instruction: 'Uji fgetcsv pada data CSV sederhana.',
      starterCode: `<?php
file_put_contents("test.csv", "A,B,C");
$h = fopen("test.csv", "r");
$row = fgetcsv($h);
echo "Kolom 1: " . $row[0];
fclose($h);
unlink("test.csv");
?>`,
      hint: 'Panggil fgetcsv($h).'
    },
    quiz: {
      question: 'Tipe data apakah yang dihasilkan oleh fungsi fgetcsv() untuk setiap baris file CSV?',
      options: [
        'Array berisi nilai kolom-kolom pada baris tersebut',
        'String panjang yang dipisahkan koma',
        'Objek XML',
        'Integer nomor baris'
      ],
      correctIndex: 0,
      explanation: 'fgetcsv() mengembalikan array indeks dari kolom-kolom yang ada pada baris tersebut.'
    }
  },

  // 190. FGETS()
  {
    id: 'php-ref-fgets',
    title: 'PHP fgets()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 190,
    overview: 'Kuasai fgets(): membaca 1 baris teks lengkap (sampai karakter newline \\n) dari stream pointer file.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">LINE BY LINE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 190 / 220</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📜 Membaca Berkas Baris per Baris (fgets)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>fgets($fileHandle, $length)</code> membaca teks dari file hingga menemukan karakter baris baru (<code>\\n</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$path = __DIR__ . "/artikel.txt";
file_put_contents($path, "Baris 1\\nBaris 2");

$h = fopen($path, "r");
echo "<p>Baris 1: " . trim(fgets($h)) . "</p>";
echo "<p>Baris 2: " . trim(fgets($h)) . "</p>";
fclose($h);
unlink($path);
?>`,
    codeExplanation: [
      'fgets() membaca sampai baris baru dan memajukan pointer file.'
    ],
    challenge: {
      instruction: 'Baca baris pertama file menggunakan fgets($h).',
      starterCode: `<?php
file_put_contents("line.txt", "Halo DevGrow\\nBaris 2");
$h = fopen("line.txt", "r");
echo fgets($h);
fclose($h);
unlink("line.txt");
?>`,
      hint: 'Panggil fgets($h).'
    },
    quiz: {
      question: 'Kapan fgets() berhenti membaca karakter pada suatu baris?',
      options: [
        'Ketika menemukan karakter newline (\\n), mencapai akhir file (EOF), atau mencapai batas $length - 1 bytes',
        'Ketika menemukan spasi',
        'Ketika menemukan tanda titik',
        'Hanya saat file ditutup'
      ],
      correctIndex: 0,
      explanation: 'fgets membaca hingga batas newline (\\n), EOF, atau parameter panjang yang ditentukan.'
    }
  },

  // 191. FGETSS()
  {
    id: 'php-ref-fgetss',
    title: 'PHP fgetss() [Removed in PHP 8.0]',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 191,
    overview: 'Status fgetss(): fungsi pembersih tag HTML yang telah RESMI DIHAPUS di PHP 8.0, dan panduan migrasi ke fgets() + strip_tags().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-rose-600 text-white">REMOVED (PHP 8.0+)</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 191 / 220</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚠️ Status fgetss() & Migrasi Modern</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>fgetss()</code> dihapus di PHP 8.0. Gunakan kombinasi modern: <code>strip_tags(fgets($handle))</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$html = "<h1>Judul</h1> Teks";
echo "<p>Hasil strip_tags: <strong>" . strip_tags($html) . "</strong></p>";
?>`,
    codeExplanation: [
      'strip_tags() membuang seluruh tag HTML dengan aman.'
    ],
    challenge: {
      instruction: 'Pahami migrasi dari fgetss ke strip_tags(fgets()).',
      starterCode: `<?php
echo "Gunakan strip_tags(fgets(\$handle)) untuk kode modern PHP 8.x.";
?>`,
      hint: 'Klik RUN untuk mereview standar modern.'
    },
    quiz: {
      question: 'Kombinasi fungsi apakah di PHP 8.x yang resmi menggantikan fungsi fgetss() yang telah dihapus?',
      options: [
        'strip_tags(fgets($handle))',
        'htmlentities(fgetc())',
        'clean_html()',
        'fread_clean()'
      ],
      correctIndex: 0,
      explanation: 'strip_tags(fgets($handle)) adalah padanan resmi modern di PHP 8.'
    }
  },

  // 192. FILE()
  {
    id: 'php-ref-file',
    title: 'PHP file()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 192,
    overview: 'Kuasai file(): membaca seluruh isi file teks dan membaginya langsung ke dalam Array PHP (1 baris teks = 1 elemen array).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">FILE TO ARRAY</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 192 / 220</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📥 Baca Seluruh File ke Array (file)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>file($filename, $flags)</code> membaca file secara instan menjadi array baris.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$path = __DIR__ . "/demo_file.txt";
file_put_contents($path, "Baris A\\nBaris B\\nBaris C");

$lines = file($path, FILE_IGNORE_NEW_LINES);
echo "<h3>Hasil Penggunaan file():</h3>";
echo "<ol>";
foreach ($lines as $l) {
    echo "<li>$l</li>";
}
echo "</ol>";
unlink($path);
?>`,
    codeExplanation: [
      'file() membaca file langsung ke array dalam 1 baris kode.'
    ],
    challenge: {
      instruction: 'Baca file ke dalam array dengan $arr = file($path, FILE_IGNORE_NEW_LINES);.',
      starterCode: `<?php
file_put_contents("m.txt", "Item 1\\nItem 2");
$lines = file("m.txt", FILE_IGNORE_NEW_LINES);
echo "Total item: " . count($lines);
unlink("m.txt");
?>`,
      hint: 'Panggil file("m.txt", FILE_IGNORE_NEW_LINES).'
    },
    quiz: {
      question: 'Flag apakah pada fungsi file() yang berguna untuk membuang karakter \\n pada ujung setiap elemen array?',
      options: [
        'FILE_IGNORE_NEW_LINES',
        'FILE_SKIP_EMPTY_LINES',
        'FILE_USE_INCLUDE_PATH',
        'FILE_BINARY'
      ],
      correctIndex: 0,
      explanation: 'FILE_IGNORE_NEW_LINES menghapus karakter newline di akhir setiap elemen baris.'
    }
  },

  // 193. FILE_EXISTS()
  {
    id: 'php-ref-file-exists',
    title: 'PHP file_exists()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 193,
    overview: 'Kuasai file_exists(): memeriksa apakah suatu file atau direktori benar-benar ada di storage filesystem.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">FILE EXISTS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 193 / 220</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Memeriksa Keberadaan Berkas (file_exists)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>file_exists($filename)</code> mengembalikan boolean <code>true</code> jika file atau folder tersebut ada.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<p>Apakah file ini ada: <strong>" . (file_exists(__FILE__) ? "Ya" : "Tidak") . "</strong></p>";
?>`,
    codeExplanation: [
      'file_exists() memeriksa file berkas maupun direktori.'
    ],
    challenge: {
      instruction: 'Periksa apakah file saat ini ada dengan file_exists(__FILE__).',
      starterCode: `<?php
echo file_exists(__FILE__) ? "File script ini ada" : "Tidak ada";
?>`,
      hint: 'Panggil file_exists(__FILE__).'
    },
    quiz: {
      question: 'Apakah file_exists() juga dapat digunakan untuk memeriksa keberadaan sebuah FOLDER (direktori)?',
      options: [
        'Ya, file_exists() memeriksa keberadaan file maupun folder direktori',
        'Tidak, hanya untuk file .txt',
        'Hanya untuk gambar',
        'Menghasilkan error'
      ],
      correctIndex: 0,
      explanation: 'file_exists() mengembalikan true baik untuk file berkas maupun direktori folder.'
    }
  },

  // 194. FILE_GET_CONTENTS()
  {
    id: 'php-ref-file-get-contents',
    title: 'PHP file_get_contents()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 194,
    overview: 'Kuasai file_get_contents(): membaca seluruh isi file lokal ATAU konten response URL web API eksternal menjadi satu string PHP.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">GET CONTENTS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 194 / 220</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">👑 Raja Membaca File & HTTP (file_get_contents)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>file_get_contents($path)</code> membaca file teks/JSON lokal atau mengambil response web API menjadi satu string.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$f = __DIR__ . "/info.txt";
file_put_contents($f, "Belajar PHP 8 Modern");

$isi = file_get_contents($f);
echo "<p>Isi Berkas: <strong>$isi</strong></p>";

unlink($f);
?>`,
    codeExplanation: [
      'file_get_contents() membaca seluruh file dalam 1 fungsi.'
    ],
    challenge: {
      instruction: 'Baca konten string dari file menggunakan file_get_contents.',
      starterCode: `<?php
file_put_contents("msg.txt", "Halo PHP Reference!");
echo file_get_contents("msg.txt");
unlink("msg.txt");
?>`,
      hint: 'Panggil file_get_contents("msg.txt").'
    },
    quiz: {
      question: 'Apa tipe data nilai kembalian dari fungsi file_get_contents() saat berhasil?',
      options: [
        'String teks berisi seluruh konten file (atau false jika gagal)',
        'Array baris',
        'Resource stream handle',
        'Integer'
      ],
      correctIndex: 0,
      explanation: 'file_get_contents() mengembalikan seluruh konten file sebagai sebuah string tunggal.'
    }
  },

  // 195. FILE_PUT_CONTENTS()
  {
    id: 'php-ref-file-put-contents',
    title: 'PHP file_put_contents()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 195,
    overview: 'Kuasai file_put_contents(): menulis data string atau array ke dalam file secara instan dengan dukungan flag FILE_APPEND.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PUT CONTENTS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 195 / 220</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">✍️ Menulis Berkas Kilat (file_put_contents)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>file_put_contents($filename, $data, $flags)</code> menulis data ke file secara instan.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$f = __DIR__ . "/catatan.log";
file_put_contents($f, "Awal\\n");
file_put_contents($f, "Lanjutan\\n", FILE_APPEND);

echo "<pre>" . file_get_contents($f) . "</pre>";
unlink($f);
?>`,
    codeExplanation: [
      'FILE_APPEND memastikan data baru disambung di akhir berkas.'
    ],
    challenge: {
      instruction: 'Tulis string "Hello World" ke file "out.txt" dengan file_put_contents.',
      starterCode: `<?php
file_put_contents("out.txt", "Hello World");
echo file_get_contents("out.txt");
unlink("out.txt");
?>`,
      hint: 'Panggil file_put_contents("out.txt", "Hello World").'
    },
    quiz: {
      question: 'Flag apakah yang wajib disertakan pada file_put_contents() agar data baru tidak menimpa (overwrite) isi file lama?',
      options: [
        'FILE_APPEND',
        'FILE_INSERT',
        'FILE_NEW',
        'FILE_SAVE'
      ],
      correctIndex: 0,
      explanation: 'FILE_APPEND menyambung konten ke akhir file yang sudah ada.'
    }
  },

  // 196. FILEATIME()
  {
    id: 'php-ref-fileatime',
    title: 'PHP fileatime()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 196,
    overview: 'Fungsi fileatime(): mengembalikan waktu terakhir kali file diakses atau dibaca (File Last Access Time) dalam format UNIX timestamp.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ACCESS TIME</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 196 / 220</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⏱️ Waktu Terakhir File Dibaca (fileatime)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>fileatime($filename)</code> mengembalikan timestamp saat file terakhir kali dibaca.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<p>Waktu Akses File: <strong>" . date("Y-m-d H:i:s", fileatime(__FILE__)) . "</strong></p>";
?>`,
    codeExplanation: [
      'fileatime() membaca metadata access time berkas.'
    ],
    challenge: {
      instruction: 'Cek waktu akses file saat ini dengan date("Y-m-d", fileatime(__FILE__)).',
      starterCode: `<?php
echo "Waktu akses: " . date("Y-m-d H:i", fileatime(__FILE__));
?>`,
      hint: 'Panggil fileatime(__FILE__).'
    },
    quiz: {
      question: 'Apa yang diukur oleh fungsi fileatime()?',
      options: [
        'Waktu saat file terakhir kali diakses / dibaca (Last Access Time)',
        'Waktu saat file terakhir kali diedit isinya',
        'Waktu pembuatan file',
        'Ukuran file'
      ],
      correctIndex: 0,
      explanation: 'fileatime (Access Time) mengukur waktu terakhir berkas dibaca.'
    }
  },

  // 197. FILECTIME()
  {
    id: 'php-ref-filectime',
    title: 'PHP filectime()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 197,
    overview: 'Fungsi filectime(): mengembalikan waktu perubahan inode/metadata/permission file terakhir kali (File Inode Change Time).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">INODE CHANGE TIME</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 197 / 220</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⏱️ Waktu Perubahan Inode / Izin (filectime)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>filectime($filename)</code> mengembalikan timestamp saat metadata file diubah.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<p>Waktu Inode Diubah: <strong>" . date("Y-m-d H:i:s", filectime(__FILE__)) . "</strong></p>";
?>`,
    codeExplanation: [
      'filectime mendeteksi perubahan atribut dan permission berkas.'
    ],
    challenge: {
      instruction: 'Ukur filectime pada file saat ini.',
      starterCode: `<?php
echo "ctime: " . date("Y-m-d H:i", filectime(__FILE__));
?>`,
      hint: 'Panggil filectime(__FILE__).'
    },
    quiz: {
      question: 'Apa perbedaan mendasar antara filemtime() dan filectime() pada sistem Unix/Linux?',
      options: [
        'filemtime() mengukur waktu perubahan ISI konten file, sedangkan filectime() mengukur waktu perubahan METADATA/INODE (seperti izin chmod/chown)',
        'filectime() hanya untuk file audio',
        'filemtime() mengukur waktu pembuatan',
        'Keduanya identik'
      ],
      correctIndex: 0,
      explanation: 'filemtime (Modification Time) untuk isi konten, sedangkan filectime (Change Time) untuk metadata/inode berkas.'
    }
  }
];

module.exports = phpPart21RefFilesystem1;
