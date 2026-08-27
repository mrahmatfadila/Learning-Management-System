// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (DIRECTORY FUNCTIONS)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart18RefDirectory = [
  // 147. CHDIR()
  {
    id: 'php-ref-chdir',
    title: 'PHP chdir()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 147,
    overview: 'Fungsi chdir(): mengubah direktori kerja aktif (Current Working Directory) pada proses runtime PHP saat ini.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DIRECTORY REFERENCE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 147 / 155</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📁 Mengubah Direktori Kerja (chdir)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>chdir($directory)</code> mengubah direktori kerja aktif proses PHP saat ini (seperti perintah <code>cd</code> di Terminal/Command Prompt). Mengembalikan boolean <code>true</code> jika berhasil atau <code>false</code> jika direktori tidak ditemukan.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Sebelum Berpindah Direktori:</h3>";
$dirAwal = getcwd();
echo "<p>Direktori Kerja Saat Ini: <code>$dirAwal</code></p>";

// Pindah ke folder root sistem operasi (atau folder parent)
if (@chdir("..")) {
    echo "<h3>Setelah Berpindah Direktori (chdir('..')):</h3>";
    echo "<p>Direktori Kerja Baru: <strong style='color: #059669;'>" . getcwd() . "</strong></p>";
    
    // Kembalikan ke direktori awal
    chdir($dirAwal);
}
?>`,
    codeExplanation: [
      'chdir("..") memindahkan proses ke satu folder di atas direktori saat ini.',
      'getcwd() membaca kembali jalur path aktif untuk memverifikasi perubahan.'
    ],
    challenge: {
      instruction: 'Periksa fungsi chdir() dengan berpindah ke direktori saat ini chdir(".").',
      starterCode: `<?php
if (chdir(".")) {
    echo "Direktori aktif: " . getcwd();
}
?>`,
      hint: 'Panggil chdir(".").'
    },
    quiz: {
      question: 'Apa fungsi dari chdir() di PHP?',
      options: [
        'Mengubah direktori kerja aktif proses PHP saat ini (mirip perintah "cd")',
        'Menghapus folder',
        'Membuat folder baru',
        'Mengubah nama file'
      ],
      correctIndex: 0,
      explanation: 'chdir() adalah singkatan dari "change directory" untuk berpindah direktori kerja aktif.'
    }
  },

  // 148. CHROOT()
  {
    id: 'php-ref-chroot',
    title: 'PHP chroot()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 148,
    overview: 'Fungsi chroot(): mengisolasi proses ke direktori root baru (chroot jail sandbox), mencegah skrip mengakses file di luar folder yang ditentukan (khusus server Unix/Linux CLI).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SECURITY SANDBOX</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 148 / 155</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔒 Isolasi Root Sandbox (chroot)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>chroot($directory)</code> mengunci direktori root sistem <code>/</code> ke folder tertentu (Chroot Jail). Ini adalah fitur keamanan tingkat tinggi di Linux untuk mencegah hacker mengeksploitasi <code>/etc/passwd</code> atau file sistem penting lainnya.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Catatan: chroot() hanya tersedia pada sistem operasi berbasis Unix/Linux dan memerlukan hak akses root/superuser
if (function_exists('chroot')) {
    echo "<p>Fungsi chroot() tersedia di server Linux ini.</p>";
    // Contoh isolasi: chroot("/var/sandbox");
} else {
    echo "<h3>Informasi Kompatibilitas chroot():</h3>";
    echo "<p style='color: #4f46e5;'>Fungsi chroot() adalah proteksi keamanan tingkat kernel pada sistem operasi Linux/Unix (tidak aktif pada platform Windows).</p>";
}
?>`,
    codeExplanation: [
      'chroot() mengurung proses di dalam sandbox direktori tertentu.',
      'Sangat sering digunakan pada sistem Online Judge koding dan web hosting multi-tenant.'
    ],
    challenge: {
      instruction: 'Periksa apakah fungsi chroot tersedia dengan function_exists("chroot").',
      starterCode: `<?php
echo function_exists("chroot") ? "chroot tersedia" : "chroot khusus lingkungan Unix/Linux";
?>`,
      hint: 'Panggil function_exists("chroot").'
    },
    quiz: {
      question: 'Apa tujuan utama dari operasi chroot() pada sistem server Linux?',
      options: [
        'Mengisolasi proses ke dalam subfolder tertentu (sandbox) sehingga skrip tidak dapat menyusup ke file sistem di luarnya',
        'Menghapus seluruh file harddisk',
        'Mengganti nama folder secara otomatis',
        'Mempercepat koneksi internet'
      ],
      correctIndex: 0,
      explanation: 'chroot (change root) mengunci root direktori / ke folder yang aman untuk mencegah akses tidak sah.'
    }
  },

  // 149. CLOSEDIR()
  {
    id: 'php-ref-closedir',
    title: 'PHP closedir()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 149,
    overview: 'Fungsi closedir(): menutup resource stream handle direktori yang sebelumnya dibuka menggunakan opendir() untuk membebaskan alokasi memori sistem.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CLOSEDIR</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 149 / 155</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🚪 Menutup Stream Direktori (closedir)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>closedir($dir_handle)</code> menutup koneksi stream direktori. Merupakan <em>best practice</em> manajemen memori agar tidak terjadi kebocoran file descriptor (Memory Leak) di server produksi.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$handle = opendir(".");

if ($handle) {
    echo "<h3>Membuka dan Menutup Stream Direktori:</h3>";
    echo "<p>Status: <strong style='color: green;'>Direktori berhasil dibuka.</strong></p>";
    
    // Selalu tutup handle setelah selesai digunakan
    closedir($handle);
    echo "<p>Status: <strong style='color: #4f46e5;'>Stream direktori berhasil ditutup dengan closedir().</strong></p>";
}
?>`,
    codeExplanation: [
      'closedir($handle) melepaskan resource handle dari memori.',
      'Sangat penting ketika membaca ribuan folder dalam proses batch background.'
    ],
    challenge: {
      instruction: 'Buka direktori dengan opendir(".") lalu tutup dengan closedir($h).',
      starterCode: `<?php
$h = opendir(".");
closedir($h);
echo "Handle telah ditutup.";
?>`,
      hint: 'Panggil closedir($h).'
    },
    quiz: {
      question: 'Mengapa pemanggilan closedir() sangat direkomendasikan setelah membaca folder dengan opendir()?',
      options: [
        'Untuk membebaskan resource pointer file descriptor dari memori sistem server',
        'Agar file tidak terhapus otomatis',
        'Untuk menyimpan perubahan file',
        'Hanya formalitas'
      ],
      correctIndex: 0,
      explanation: 'Menutup handle direktori mencegah kebocoran file descriptor dan menjaga kebersihan alokasi memori server.'
    }
  },

  // 150. DIR()
  {
    id: 'php-ref-dir',
    title: 'PHP dir()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 150,
    overview: 'Kuasai kelas dir(): membuat instance objek Directory (OOP) yang memiliki properti ->handle, ->path, dan method ->read(), ->rewind(), ->close().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">OOP DIRECTORY</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 150 / 155</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏛️ Objek Direktori OOP (dir)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>dir($directory)</code> mengembalikan instance objek dari kelas <code>Directory</code> bawaan PHP. Memberikan antarmuka berorientasi objek yang elegan untuk membaca isi folder melalui method <code>$d->read()</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$d = dir(".");

echo "<h3>Eksplorasi Folder dengan Objek Directory:</h3>";
echo "<p>Jalur Path: <strong>{$d->path}</strong></p>";
echo "<ul>";

// Baca file satu per satu menggunakan method ->read()
$count = 0;
while (false !== ($file = $d->read()) && $count < 5) {
    echo "<li>Nama Item: <code>$file</code></li>";
    $count++;
}
echo "</ul>";

// Tutup objek direktori
$d->close();
?>`,
    codeExplanation: [
      '$d->path menyimpan jalur path direktori.',
      '$d->read() membaca entri file berikutnya dari pointer folder.',
      '$d->close() menutup stream secara OOP.'
    ],
    challenge: {
      instruction: 'Buat objek Directory dengan $d = dir("."); lalu tutup dengan $d->close();.',
      starterCode: `<?php
$d = dir(".");
echo "Path: " . $d->path;
$d->close();
?>`,
      hint: 'Panggil $d = dir("."); lalu $d->close();.'
    },
    quiz: {
      question: 'Method apakah pada objek Directory hasil pemanggilan dir() yang digunakan untuk membaca entri file berikutnya?',
      options: [
        '$d->read()',
        '$d->next()',
        '$d->fetch()',
        '$d->getItem()'
      ],
      correctIndex: 0,
      explanation: '$d->read() membaca satu entri nama file/folder dari pointer stream aktif.'
    }
  },

  // 151. GETCWD()
  {
    id: 'php-ref-getcwd',
    title: 'PHP getcwd()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 151,
    overview: 'Kuasai getcwd(): mengambil jalur path direktori kerja yang sedang aktif saat ini (Current Working Directory) secara absolut.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">GETCWD</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 151 / 155</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📍 Mendeteksi Direktori Kerja Aktif (getcwd)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>getcwd()</code> (Get Current Working Directory) mengembalikan string path absolut direktori tempat script PHP sedang beroperasi. Sangat penting untuk menyusun path upload file yang akurat.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$cwd = getcwd();

echo "<h3>Informasi Direktori Kerja Aktif:</h3>";
echo "<p>Jalur Path Absolut: <strong style='color: #4f46e5;'>$cwd</strong></p>";
echo "<p>Path Folder Uploads: <code>$cwd/uploads</code></p>";
?>`,
    codeExplanation: [
      'getcwd() mengembalikan jalur path lengkap seperti "C:\\xampp\\htdocs\\Learning Management System".'
    ],
    challenge: {
      instruction: 'Cetak direktori aktif dengan getcwd().',
      starterCode: `<?php
echo "Current Working Directory: " . getcwd();
?>`,
      hint: 'Panggil getcwd().'
    },
    quiz: {
      question: 'Apa kepanjangan dan kegunaan dari fungsi getcwd()?',
      options: [
        'Get Current Working Directory - Mengambil string path folder kerja aktif saat ini',
        'Get Clock World Data',
        'Generate Code Web Design',
        'Get Child Window Document'
      ],
      correctIndex: 0,
      explanation: 'getcwd singkatan dari "Get Current Working Directory".'
    }
  },

  // 152. OPENDIR()
  {
    id: 'php-ref-opendir',
    title: 'PHP opendir()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 152,
    overview: 'Kuasai opendir(): membuka stream koneksi handle ke folder tertentu agar isinya dapat diiterasi menggunakan readdir().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">OPENDIR</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 152 / 155</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📂 Membuka Handle Direktori (opendir)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>opendir($path)</code> membuka direktori dan menghasilkan tipe data <em>directory handle resource</em> yang siap dibaca langkah demi langkah.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$path = ".";

if (is_dir($path)) {
    $dirHandle = opendir($path);
    echo "<h3>Hasil Pemeriksaan opendir():</h3>";
    echo "<p>Berhasil membuka stream ke path <code>$path</code> (Resource ID terverifikasi).</p>";
    
    // Tutup kembali
    closedir($dirHandle);
} else {
    echo "<p>Folder tidak ditemukan.</p>";
}
?>`,
    codeExplanation: [
      'Selalu gabungkan dengan is_dir() sebelum memanggil opendir() untuk menghindari warning fatal.'
    ],
    challenge: {
      instruction: 'Buka dan tutup direktori "." dengan aman.',
      starterCode: `<?php
if ($h = opendir(".")) {
    echo "Direktori berhasil dibuka!";
    closedir($h);
}
?>`,
      hint: 'Gunakan if ($h = opendir(".")) { ... closedir($h); }'
    },
    quiz: {
      question: 'Tipe data apakah yang dihasilkan oleh fungsi opendir() saat berhasil membuka folder?',
      options: [
        'Directory Handle Resource (atau false jika gagal)',
        'Array string',
        'Integer 0',
        'String nama file'
      ],
      correctIndex: 0,
      explanation: 'opendir() mengembalikan directory handle resource stream.'
    }
  },

  // 153. READDIR()
  {
    id: 'php-ref-readdir',
    title: 'PHP readdir()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 153,
    overview: 'Kuasai readdir(): membaca nama entri file/folder berikutnya dari directory handle dan aturan perbandingan ketat !== false.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">READDIR</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 153 / 155</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Membaca Nama File (readdir)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>readdir($dir_handle)</code> membaca nama satu file/folder berikutnya. <strong>PENTING:</strong> Selalu gunakan pembanding identik <code>while (($file = readdir($handle)) !== false)</code> agar file yang bernama <code>"0"</code> tidak menghentikan loop sebelum waktunya!
          </p>
        </div>
      </div>
    `,
    code: `<?php
if ($handle = opendir(".")) {
    echo "<h3>Daftar Entri File di Direktori:</h3>";
    echo "<ul>";
    
    // Menggunakan perbandingan ketat !== false
    while (false !== ($entry = readdir($handle))) {
        // Abaikan folder navigasi bawaan . dan ..
        if ($entry != "." && $entry != "..") {
            $tipe = is_dir($entry) ? "📁 [FOLDER]" : "📄 [FILE]";
            echo "<li>$tipe <strong>$entry</strong></li>";
        }
    }
    echo "</ul>";
    closedir($handle);
}
?>`,
    codeExplanation: [
      'Pemeriksaan ($entry != "." && $entry != "..") berguna untuk menyaring folder navigasi sistem.',
      'while (false !== ($entry = readdir($handle))) adalah pola resmi membaca direktori di PHP.'
    ],
    challenge: {
      instruction: 'Baca 1 entri file pertama dengan readdir($h).',
      starterCode: `<?php
$h = opendir(".");
$file = readdir($h);
echo "Entri pertama: " . $file;
closedir($h);
?>`,
      hint: 'Panggil readdir($h).'
    },
    quiz: {
      question: 'Mengapa kondisi while loop pada readdir() wajib menggunakan perbandingan ketat `false !== ($file = readdir($h))`?',
      options: [
        'Karena jika terdapat file dengan nama "0" (angka nol), PHP akan mengevaluasinya sebagai false dan menghentikan loop sebelum selesai',
        'Karena readdir() hanya membaca angka',
        'Agar script berjalan lebih cepat',
        'Tidak ada alasan khusus'
      ],
      correctIndex: 0,
      explanation: 'File dengan nama "0" memiliki nilai truthy false di PHP sehingga perbandingan jenis dan nilai strict (false !==) mutlak diperlukan.'
    }
  },

  // 154. REWINDDIR()
  {
    id: 'php-ref-rewinddir',
    title: 'PHP rewinddir()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 154,
    overview: 'Fungsi rewinddir(): mengembalikan pointer stream direktori ke posisi entri paling awal (me-reset pembacaan folder dari awal).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">REWINDDIR</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 154 / 155</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⏪ Me-reset Pointer Direktori (rewinddir)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>rewinddir($dir_handle)</code> memundurkan pointer direktori kembali ke item pertama. Berguna jika Anda ingin membaca ulang seluruh isi folder untuk kedua kalinya tanpa harus menutup dan membuka ulang handle (<code>closedir</code> / <code>opendir</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
if ($handle = opendir(".")) {
    // 1. Pembacaan Pertama: Ambil 2 file pertama
    echo "<h3>Pembacaan Tahap 1:</h3>";
    echo "<p>Item 1: <strong>" . readdir($handle) . "</strong></p>";
    echo "<p>Item 2: <strong>" . readdir($handle) . "</strong></p>";

    // 2. Reset Pointer ke awal
    rewinddir($handle);

    // 3. Pembacaan Tahap 2: Mengulang dari item pertama lagi
    echo "<h3>Setelah rewinddir():</h3>";
    echo "<p>Item 1 (Diulang): <strong style='color: #059669;'>" . readdir($handle) . "</strong></p>";

    closedir($handle);
}
?>`,
    codeExplanation: [
      'rewinddir() secara instan mengembalikan pointer pembacaan ke file urutan nomor 1.'
    ],
    challenge: {
      instruction: 'Uji fungsi rewinddir($h) pada direktori handle aktif.',
      starterCode: `<?php
$h = opendir(".");
readdir($h);
rewinddir($h);
echo "Pointer berhasil di-reset ke: " . readdir($h);
closedir($h);
?>`,
      hint: 'Panggil rewinddir($h).'
    },
    quiz: {
      question: 'Apa fungsi dari rewinddir()?',
      options: [
        'Mengembalikan pointer pembacaan direktori kembali ke entri paling awal',
        'Menghapus isi direktori',
        'Membalik nama file',
        'Mengubah urutan file di harddisk'
      ],
      correctIndex: 0,
      explanation: 'rewinddir() memindahkan pointer pembacaan stream kembali ke posisi awal.'
    }
  },

  // 155. SCANDIR()
  {
    id: 'php-ref-scandir',
    title: 'PHP scandir()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 155,
    overview: 'Kuasai scandir(): fungsi paling modern dan praktis untuk membaca seluruh daftar file dan folder dalam direktori langsung ke dalam satu Array PHP dengan opsi pengurutan (Ascending/Descending).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SCANDIR</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 155 / 155</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">👑 Raja Manajemen Folder: scandir()</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>scandir($directory, $sorting_order)</code> adalah cara tercepat dan terbersih di PHP modern. Mengembalikan <strong>array berisi seluruh nama file</strong> tanpa perlu repot memanggil <code>opendir</code>, <code>while loop</code>, dan <code>closedir</code> secara manual.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// 1. Ambil seluruh file terurut A-Z (SCANDIR_SORT_ASCENDING / Default 0)
$daftarFile = scandir(".");

// 2. Ambil seluruh file terurut Z-A (SCANDIR_SORT_DESCENDING / 1)
$daftarFileDesc = scandir(".", SCANDIR_SORT_DESCENDING);

echo "<h3>Daftar File dengan scandir() (Total " . count($daftarFile) . " Item):</h3>";
echo "<ul>";
foreach (array_slice($daftarFile, 0, 6) as $item) {
    if ($item != "." && $item != "..") {
        echo "<li>📄 <strong>$item</strong></li>";
    }
}
echo "</ul>";

echo "<p>File Pertama Urutan Z-A: <strong>" . $daftarFileDesc[0] . "</strong></p>";
?>`,
    codeExplanation: [
      'scandir() otomatis membuka, membaca, mengurutkan, dan menutup direktori dalam 1 baris kode saja.',
      'Sangat mudah dipadukan dengan array_diff($files, [".", ".."]) untuk membersihkan item navigasi.'
    ],
    challenge: {
      instruction: 'Ambil daftar file dengan $files = scandir("."); dan cetak jumlah totalnya.',
      starterCode: `<?php
$files = scandir(".");
echo "Total item: " . count($files);
?>`,
      hint: 'Panggil scandir(".").'
    },
    quiz: {
      question: 'Apa keunggulan terbesar scandir() dibanding kombinasi opendir() + readdir() + closedir()?',
      options: [
        'scandir() langsung mengembalikan array seluruh nama file dalam 1 baris kode yang rapi serta mendukung pengurutan otomatis (A-Z / Z-A)',
        'scandir() tidak memakan memori sama sekali',
        'scandir() hanya bisa membaca file .txt',
        'scandir() menghapus file duplikat'
      ],
      correctIndex: 0,
      explanation: 'scandir() adalah fungsi praktis modern serba-dalam-satu yang mengembalikan array file terurut secara instan.'
    }
  }
];

module.exports = phpPart18RefDirectory;
