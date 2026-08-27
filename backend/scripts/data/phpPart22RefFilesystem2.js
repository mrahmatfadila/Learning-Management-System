// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (FILESYSTEM PART 2: 198-220)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart22RefFilesystem2 = [
  // 198. FILEGROUP()
  {
    id: 'php-ref-filegroup',
    title: 'PHP filegroup()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 198,
    overview: 'Fungsi filegroup(): mengembalikan Group ID (GID numerik) pemilik dari file yang ditentukan.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">FILESYSTEM</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 198 / 220</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">👥 Mengambil ID Grup Pemilik Berkas (filegroup)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>filegroup($filename)</code> mengembalikan nomor ID numerik (GID) dari kelompok pengguna yang memiliki file tersebut pada filesystem Linux/Unix.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$gid = filegroup(__FILE__);
echo "<h3>Hasil Penggunaan filegroup():</h3>";
echo "<p>Group ID (GID) file ini: <strong style='color: #4f46e5;'>$gid</strong></p>";
?>`,
    codeExplanation: [
      'filegroup() membaca informasi GID dari tabel stat filesystem.'
    ],
    challenge: {
      instruction: 'Cetak group ID dari file saat ini.',
      starterCode: `<?php
echo "GID: " . filegroup(__FILE__);
?>`,
      hint: 'Panggil filegroup(__FILE__).'
    },
    quiz: {
      question: 'Apa tipe data nilai kembalian dari fungsi filegroup()?',
      options: [
        'Integer Group ID (GID) atau false jika gagal',
        'String nama grup',
        'Array',
        'Boolean'
      ],
      correctIndex: 0,
      explanation: 'filegroup mengembalikan integer numerik Group ID.'
    }
  },

  // 199. FILEINODE()
  {
    id: 'php-ref-fileinode',
    title: 'PHP fileinode()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 199,
    overview: 'Fungsi fileinode(): mengembalikan nomor Inode (identitas fisik file pada harddisk filesystem Unix/Linux).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">INODE NUMBER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 199 / 220</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏷️ Nomor Identitas Fisik Berkas (fileinode)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>fileinode($filename)</code> mengembalikan nomor Inode file. Nomor unik ini digunakan oleh kernel sistem operasi untuk memetakan blok data fisik di harddisk.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$inode = fileinode(__FILE__);
echo "<h3>Hasil Penggunaan fileinode():</h3>";
echo "<p>Nomor Inode File: <strong style='color: #059669;'>$inode</strong></p>";
?>`,
    codeExplanation: [
      'Inode adalah struktur data internal penunjuk berkas di filesystem.'
    ],
    challenge: {
      instruction: 'Ambil nomor inode file saat ini dengan fileinode(__FILE__).',
      starterCode: `<?php
echo "Inode: " . fileinode(__FILE__);
?>`,
      hint: 'Panggil fileinode(__FILE__).'
    },
    quiz: {
      question: 'Apa fungsi dari nomor Inode di sistem file?',
      options: [
        'Sebagai ID unik penunjuk data fisik berkas pada tabel indeks filesystem',
        'Sebagai password file',
        'Sebagai ukuran file',
        'Hanya untuk virus'
      ],
      correctIndex: 0,
      explanation: 'Inode adalah identifier unik pada tabel indeks sistem file Unix.'
    }
  },

  // 200. FILEMTIME()
  {
    id: 'php-ref-filemtime',
    title: 'PHP filemtime()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 200,
    overview: 'Kuasai filemtime(): mengembalikan waktu modifikasi isi file terakhir kali (File Modification Time), teknik penting dalam Cache Busting file CSS/JS.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CACHE BUSTING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 200 / 220</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⏱️ Waktu Modifikasi Isi Berkas (filemtime)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>filemtime($filename)</code> mengembalikan timestamp kapan isi teks file terakhir diedit. Sangat populer untuk teknik <strong>Cache Busting Asset</strong>: <code>&lt;link rel="stylesheet" href="style.css?v=&lt;?= filemtime('style.css') ?&gt;"&gt;</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$mtime = filemtime(__FILE__);
$waktuEdit = date("d F Y - H:i:s", $mtime);

echo "<h3>Hasil Penggunaan filemtime():</h3>";
echo "<p>File Ini Terakhir Dimodifikasi: <strong>$waktuEdit</strong></p>";
echo "<p>Contoh URL Cache Busting: <code>style.css?v=$mtime</code></p>";
?>`,
    codeExplanation: [
      'Cache Busting memastikan browser pengunjung tidak menahan cache CSS lama setelah developer melakukan update kode.'
    ],
    challenge: {
      instruction: 'Cetak waktu modifikasi file saat ini dengan date("Y-m-d H:i", filemtime(__FILE__)).',
      starterCode: `<?php
echo "Terakhir diubah: " . date("Y-m-d H:i:s", filemtime(__FILE__));
?>`,
      hint: 'Panggil filemtime(__FILE__).'
    },
    quiz: {
      question: 'Bagaimana fungsi filemtime() dimanfaatkan dalam teknik modern Asset Cache Busting di HTML?',
      options: [
        'Dengan menyematkan timestamp versi file sebagai query string parameter (misal: main.js?v=1767225600) sehingga browser selalu memuat asset terbaru saat file diedit',
        'Untuk menghapus cache database',
        'Untuk mematikan koneksi internet',
        'Hanya untuk file gambar'
      ],
      correctIndex: 0,
      explanation: 'filemtime menghasilkan query parameter dinamis yang memaksa browser mengambil versi asset termutakhir.'
    }
  },

  // 201. FILEOWNER()
  {
    id: 'php-ref-fileowner',
    title: 'PHP fileowner()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 201,
    overview: 'Fungsi fileowner(): mengembalikan User ID (UID numerik) pemilik berkas di sistem operasi.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">USER ID</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 201 / 220</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">👤 Mengambil User ID Pemilik Berkas (fileowner)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>fileowner($filename)</code> mengembalikan nomor User ID (UID) pemilik berkas (misal: <code>0</code> untuk root atau <code>33</code> untuk www-data).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$uid = fileowner(__FILE__);
echo "<h3>Hasil Penggunaan fileowner():</h3>";
echo "<p>User ID (UID) Pemilik Berkas: <strong style='color: #4f46e5;'>$uid</strong></p>";
?>`,
    codeExplanation: [
      'fileowner() mengembalikan integer UID pemilik file.'
    ],
    challenge: {
      instruction: 'Cetak UID file saat ini dengan fileowner(__FILE__).',
      starterCode: `<?php
echo "UID: " . fileowner(__FILE__);
?>`,
      hint: 'Panggil fileowner(__FILE__).'
    },
    quiz: {
      question: 'Berapakah UID standar untuk user superuser "root" di sistem Linux?',
      options: [
        '0 (angka nol)',
        '1000',
        '33',
        '1'
      ],
      correctIndex: 0,
      explanation: 'User root di Linux selalu memiliki UID bernilai 0.'
    }
  },

  // 202. FILEPERMS()
  {
    id: 'php-ref-fileperms',
    title: 'PHP fileperms()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 202,
    overview: 'Kuasai fileperms(): mengembalikan bit izin akses berkas lengkap (permissions) dan mengonversinya ke notasi oktal terbaca (seperti 0755 atau 0644).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PERMS INSPECT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 202 / 220</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Memeriksa Izin Berkas (fileperms)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>fileperms($filename)</code> membaca bit permission berkas. Gunakan pemotongan <code>substr(sprintf('%o', fileperms($file)), -4)</code> untuk mendapatkan string format oktal standar seperti <code>"0644"</code> atau <code>"0755"</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$perms = fileperms(__FILE__);
$oktal = substr(sprintf('%o', $perms), -4);

echo "<h3>Hasil Penggunaan fileperms():</h3>";
echo "<p>Raw Permissions (Bitmask): <code>$perms</code></p>";
echo "<p>Format Notasi Oktal Standar: <strong style='color: #059669; font-size: 16px;'>$oktal</strong></p>";
?>`,
    codeExplanation: [
      'sprintf("%o", $perms) mengubah bitmask integer menjadi representasi string oktal.'
    ],
    challenge: {
      instruction: 'Uji pembacaan izin oktal dengan sprintf("%o", fileperms(__FILE__)).',
      starterCode: `<?php
echo "Perms: " . substr(sprintf('%o', fileperms(__FILE__)), -4);
?>`,
      hint: 'Panggil fileperms(__FILE__).'
    },
    quiz: {
      question: 'Format angka basis berapakah yang digunakan untuk menampilkan izin akses berkas 0755 atau 0644?',
      options: [
        'Oktal (Basis 8)',
        'Desimal (Basis 10)',
        'Heksadesimal (Basis 16)',
        'Biner (Basis 2)'
      ],
      correctIndex: 0,
      explanation: 'Izin file UNIX diwakili dalam sistem bilangan basis 8 (Oktal).'
    }
  },

  // 203. FILESIZE()
  {
    id: 'php-ref-filesize',
    title: 'PHP filesize()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 203,
    overview: 'Kuasai filesize(): mengembalikan ukuran file dalam satuan Bytes dan membuat helper formatter ke KB, MB, GB yang rapi.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">FILE SIZE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 203 / 220</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📏 Menghitung Ukuran Berkas (filesize)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>filesize($filename)</code> mengembalikan angka ukuran file dalam Bytes. Sangat krusial untuk validasi batas maksimum ukuran file upload.
          </p>
        </div>
      </div>
    `,
    code: `<?php
function formatUkuran($bytes) {
    if ($bytes >= 1048576) return round($bytes / 1048576, 2) . " MB";
    if ($bytes >= 1024)    return round($bytes / 1024, 2) . " KB";
    return $bytes . " Bytes";
}

$bytes = filesize(__FILE__);
echo "<p>Ukuran file ini: <strong>" . formatUkuran($bytes) . "</strong></p>";
?>`,
    codeExplanation: [
      'filesize() mengembalikan integer ukuran berkas dalam satuan Bytes.'
    ],
    challenge: {
      instruction: 'Ukur ukuran file saat ini dengan filesize(__FILE__).',
      starterCode: `<?php
echo "Ukuran: " . filesize(__FILE__) . " Bytes";
?>`,
      hint: 'Panggil filesize(__FILE__).'
    },
    quiz: {
      question: 'Berapakah batas ukuran dalam satuan Bytes untuk batas upload 2 Megabytes (2 MB)?',
      options: [
        '2.097.152 Bytes (2 * 1024 * 1024)',
        '2.000 Bytes',
        '20.000 Bytes',
        '100.000 Bytes'
      ],
      correctIndex: 0,
      explanation: '2 MB = 2 * 1024 KB * 1024 Bytes = 2.097.152 Bytes.'
    }
  },

  // 204. FILETYPE()
  {
    id: 'php-ref-filetype',
    title: 'PHP filetype()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 204,
    overview: 'Fungsi filetype(): mengembalikan tipe dari berkas (file, dir, link, fifo, char, block, atau unknown).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">FILE TYPE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 204 / 220</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏷️ Mengidentifikasi Tipe Berkas (filetype)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>filetype($filename)</code> mendeteksi apakah path yang ditunjuk merupakan file biasa (<code>"file"</code>), folder direktori (<code>"dir"</code>), atau symbolic link (<code>"link"</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<p>Tipe file ini: <strong>" . filetype(__FILE__) . "</strong></p>";
echo "<p>Tipe folder ini: <strong>" . filetype(__DIR__) . "</strong></p>";
?>`,
    codeExplanation: [
      'filetype() mengembalikan string tipe berkas.'
    ],
    challenge: {
      instruction: 'Cek tipe file script ini dengan filetype(__FILE__).',
      starterCode: `<?php
echo "Tipe: " . filetype(__FILE__);
?>`,
      hint: 'Panggil filetype(__FILE__).'
    },
    quiz: {
      question: 'String apakah yang dikembalikan oleh filetype() ketika memeriksa sebuah folder direktori?',
      options: [
        '"dir"',
        '"folder"',
        '"directory"',
        '"path"'
      ],
      correctIndex: 0,
      explanation: 'filetype() mengembalikan string "dir" untuk folder.'
    }
  },

  // 205. FLOCK()
  {
    id: 'php-ref-flock',
    title: 'PHP flock()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 205,
    overview: 'Kuasai flock(): mengunci file (File Advisory Locking: LOCK_EX eksklusif, LOCK_SH shared, LOCK_UN unlock) untuk mencegah tabrakan penulisan konkuren (Race Condition).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">RACE CONDITION SHIELD</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 205 / 220</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔒 Penguncian Berkas Konkuren (flock)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>flock($handle, $operation)</code> mencegah proses lain menulis ke file yang sama pada saat bersamaan. Gunakan <code>LOCK_EX</code> saat menulis dan <code>LOCK_UN</code> setelah selesai.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$f = __DIR__ . "/lock_test.txt";
$h = fopen($f, "w");
if (flock($h, LOCK_EX)) {
    fwrite($h, "Data Aman");
    flock($h, LOCK_UN);
}
fclose($h);
unlink($f);
echo "<p style='color: green;'>Operasi lock & write berhasil.</p>";
?>`,
    codeExplanation: [
      'LOCK_EX mengunci file secara eksklusif.'
    ],
    challenge: {
      instruction: 'Uji mekanisme lock dan unlock dengan flock.',
      starterCode: `<?php
$h = fopen("l.txt", "w");
flock($h, LOCK_EX);
fwrite($h, "Aman");
flock($h, LOCK_UN);
fclose($h);
unlink("l.txt");
echo "Operasi lock selesai.";
?>`,
      hint: 'Gunakan flock($h, LOCK_EX) dan flock($h, LOCK_UN).'
    },
    quiz: {
      question: 'Operasi flock apakah yang digunakan saat proses ingin menulis (write) data secara eksklusif tanpa gangguan proses lain?',
      options: [
        'LOCK_EX (Exclusive Lock)',
        'LOCK_SH (Shared Lock)',
        'LOCK_UN (Unlock)',
        'LOCK_NB (Non-blocking)'
      ],
      correctIndex: 0,
      explanation: 'LOCK_EX (Exclusive Lock) memberikan hak akses penulisan tunggal eksklusif.'
    }
  },

  // 206. FNMATCH()
  {
    id: 'php-ref-fnmatch',
    title: 'PHP fnmatch()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 206,
    overview: 'Kuasai fnmatch(): mencocokkan nama file dengan pola wildcard Shell (*.jpg, doc_??.pdf) yang intuitif tanpa regex rumit.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">WILDCARD MATCH</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 206 / 220</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎯 Mencocokkan Pola File Wildcard (fnmatch)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>fnmatch($pattern, $string)</code> memeriksa apakah nama file cocok dengan pola wildcard shell (<code>*</code> dan <code>?</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$file = "foto_profil.jpg";
if (fnmatch("*.jpg", $file)) {
    echo "<p>✓ File '$file' adalah gambar JPG yang valid.</p>";
}
?>`,
    codeExplanation: [
      'fnmatch("*.jpg", $file) mengecek ekstensi dengan pola wildcard.'
    ],
    challenge: {
      instruction: 'Periksa apakah "report.pdf" cocok dengan pola "*.pdf".',
      starterCode: `<?php
if (fnmatch("*.pdf", "report.pdf")) {
    echo "Cocok dengan pola PDF!";
}
?>`,
      hint: 'Panggil fnmatch("*.pdf", "report.pdf").'
    },
    quiz: {
      question: 'Karakter wildcard apakah pada fnmatch() yang mewakili tepat 1 karakter tunggal apa saja?',
      options: [
        'Tanda tanya (?)',
        'Tanda bintang (*)',
        'Tanda pagar (#)',
        'Tanda persen (%)'
      ],
      correctIndex: 0,
      explanation: 'Tanda bintang (*) mewakili nol atau banyak karakter, sedangkan tanda tanya (?) mewakili tepat satu karakter.'
    }
  },

  // 207. FOPEN()
  {
    id: 'php-ref-fopen',
    title: 'PHP fopen()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 207,
    overview: 'Kuasai fopen(): membuka koneksi stream file atau URL internet dengan mode akses lengkap ("r" read, "w" write, "a" append, "x" exclusive, "c" create).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">STREAM OPEN</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 207 / 220</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📂 Membuka Stream Berkas (fopen)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>fopen($filename, $mode)</code> membuka koneksi stream file dan mengembalikan handle resource.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$path = __DIR__ . "/catatan.txt";
$handle = fopen($path, "w");
if ($handle) {
    fwrite($handle, "Belajar fopen() PHP 8 Reference");
    fclose($handle);
    echo "<p style='color: green;'><strong>✓ Berkas catatan.txt berhasil dibuat dan ditulis.</strong></p>";
}
unlink($path);
?>`,
    codeExplanation: [
      'fopen mengembalikan resource stream file handle.'
    ],
    challenge: {
      instruction: 'Buka file dalam mode baca "r" dengan fopen.',
      starterCode: `<?php
file_put_contents("f.txt", "123");
$h = fopen("f.txt", "r");
echo is_resource($h) ? "Stream aktif" : "Gagal";
fclose($h);
unlink("f.txt");
?>`,
      hint: 'Panggil fopen("f.txt", "r").'
    },
    quiz: {
      question: 'Mode akses apakah pada fopen() yang memposisikan pointer di AKHIR file untuk menambah data baru tanpa menghapus data yang ada?',
      options: [
        '"a" (Append)',
        '"w" (Write)',
        '"r" (Read)',
        '"x" (Exclusive)'
      ],
      correctIndex: 0,
      explanation: 'Mode "a" (Append) membuka file untuk penulisan di ujung akhir berkas.'
    }
  },

  // 208. FPASSTHRU()
  {
    id: 'php-ref-fpassthru',
    title: 'PHP fpassthru()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 208,
    overview: 'Kuasai fpassthru(): mengalirkan sisa seluruh data dari stream pointer file langsung ke output buffer browser.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">STREAMING PASSTHRU</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 208 / 220</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🚀 Streaming File Langsung ke Browser (fpassthru)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>fpassthru($fileHandle)</code> membaca sisa isi file dan langsung mengalirkannya ke output browser secara streaming.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$path = __DIR__ . "/konten_stream.txt";
file_put_contents($path, "Streaming data cepat tanpa membebani RAM.");

$h = fopen($path, "r");
fpassthru($h);
unlink($path);
?>`,
    codeExplanation: [
      'fpassthru() mengalirkan data langsung ke browser dan otomatis menutup handle.'
    ],
    challenge: {
      instruction: 'Uji fpassthru($h) pada file teks sementara.',
      starterCode: `<?php
file_put_contents("p.txt", "Stream Data");
$h = fopen("p.txt", "r");
fpassthru($h);
unlink("p.txt");
?>`,
      hint: 'Panggil fpassthru($h).'
    },
    quiz: {
      question: 'Apa keunggulan utama fpassthru() untuk fitur download file berukuran ratusan MB?',
      options: [
        'Mengalirkan data secara bertahap (streaming) langsung ke output browser tanpa memuat seluruh isi file ratusan MB ke memori RAM PHP',
        'Menghapus file setelah didownload',
        'Mengubah file menjadi zip otomatis',
        'Mempercepat koneksi WiFi'
      ],
      correctIndex: 0,
      explanation: 'fpassthru mengalirkan data langsung ke output tanpa membebani batas memory_limit PHP.'
    }
  },

  // 209. FPUTCVS()
  {
    id: 'php-ref-fputcsv',
    title: 'PHP fputcsv()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 209,
    overview: 'Kuasai fputcsv(): memformat dan menuliskan baris data Array PHP langsung ke dalam format file CSV.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CSV EXPORT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 209 / 220</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📊 Export Data ke File CSV (fputcsv)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>fputcsv($handle, $fields, $separator, $enclosure)</code> menulis satu baris array ke dalam file CSV dengan escape tanda kutip otomatis.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$path = __DIR__ . "/export.csv";
$h = fopen($path, "w");
fputcsv($h, ["ID", "Nama", "Email"]);
fputcsv($h, [1, "Budi", "budi@email.com"]);
fclose($h);

echo "<pre>" . file_get_contents($path) . "</pre>";
unlink($path);
?>`,
    codeExplanation: [
      'fputcsv() otomatis memformat array menjadi baris CSV yang valid.'
    ],
    challenge: {
      instruction: 'Tulis array ["A", "B", "C"] ke file CSV dengan fputcsv($h, $arr).',
      starterCode: `<?php
$h = fopen("out.csv", "w");
fputcsv($h, ["A", "B", "C"]);
fclose($h);
echo file_get_contents("out.csv");
unlink("out.csv");
?>`,
      hint: 'Panggil fputcsv($h, ["A", "B", "C"]).'
    },
    quiz: {
      question: 'Parameter kedua apakah yang wajib diberikan pada pemanggilan fputcsv($handle, ...)?',
      options: [
        'Array berisi nilai kolom-kolom untuk baris tersebut',
        'String teks biasa',
        'Integer nomor baris',
        'Objek XML'
      ],
      correctIndex: 0,
      explanation: 'fputcsv menerima parameter kedua berupa array 1 dimensi berisi daftar nilai kolom.'
    }
  },

  // 210. FPUTS()
  {
    id: 'php-ref-fputs',
    title: 'PHP fputs()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 210,
    overview: 'Fungsi fputs(): alias resmi 100% dari fungsi fwrite() untuk menuliskan data string ke dalam stream file.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ALIAS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 210 / 220</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔄 Alias fputs()</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>fputs($handle, $string)</code> adalah alias resmi dari <code>fwrite()</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$path = __DIR__ . "/fputs.txt";
$h = fopen($path, "w");
fputs($h, "Hello from fputs");
fclose($h);
echo "<p>Konten: " . file_get_contents($path) . "</p>";
unlink($path);
?>`,
    codeExplanation: [
      'fputs() dan fwrite() bekerja secara identik.'
    ],
    challenge: {
      instruction: 'Tulis teks menggunakan fputs($h, "Test").',
      starterCode: `<?php
$h = fopen("demo.txt", "w");
fputs($h, "Test fputs");
fclose($h);
unlink("demo.txt");
echo "fputs sukses dieksekusi.";
?>`,
      hint: 'Panggil fputs($h, "Test fputs").'
    },
    quiz: {
      question: 'Fungsi apakah yang merupakan padanan identik dari fputs()?',
      options: [
        'fwrite()',
        'fread()',
        'file_get_contents()',
        'fgets()'
      ],
      correctIndex: 0,
      explanation: 'fputs() adalah alias resmi dari fungsi fwrite().'
    }
  },

  // 211. FREAD()
  {
    id: 'php-ref-fread',
    title: 'PHP fread()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 211,
    overview: 'Kuasai fread(): membaca sejumlah byte data biner (Binary-Safe) dari stream file yang terbuka.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">BINARY READ</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 211 / 220</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📖 Membaca Data Biner File (fread)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>fread($handle, $length)</code> membaca hingga <code>$length</code> bytes dari file secara aman (binary-safe).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$path = __DIR__ . "/sample.txt";
file_put_contents($path, "Belajar PHP 8");
$h = fopen($path, "r");
$teks = fread($h, 7);
fclose($h);
echo "<p>7 Byte Pertama: <strong>'$teks'</strong></p>";
unlink($path);
?>`,
    codeExplanation: [
      'fread($h, 7) membaca 7 karakter pertama ("Belajar").'
    ],
    challenge: {
      instruction: 'Baca 5 byte pertama file dengan fread($h, 5).',
      starterCode: `<?php
file_put_contents("bin.txt", "1234567890");
$h = fopen("bin.txt", "r");
echo fread($h, 5);
fclose($h);
unlink("bin.txt");
?>`,
      hint: 'Panggil fread($h, 5).'
    },
    quiz: {
      question: 'Berapa byte yang dibaca jika kita menjalankan fread($handle, filesize($path))?',
      options: [
        'Seluruh isi file sampai selesai',
        'Hanya 1 baris',
        'Hanya 1024 byte',
        'Nol byte'
      ],
      correctIndex: 0,
      explanation: 'filesize() mengembalikan total ukuran byte file sehingga fread membaca seluruh berkas.'
    }
  },

  // 212. FSCANF()
  {
    id: 'php-ref-fscanf',
    title: 'PHP fscanf()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 212,
    overview: 'Kuasai fscanf(): mem-parsing data dari stream file berdasarkan pola format karakter (seperti %s string, %d integer, %f float).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">FORMAT PARSER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 212 / 220</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎯 Parsing Format dari File (fscanf)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>fscanf($handle, $format, &...$vars)</code> membedah baris data file sesuai format specifier C.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$path = __DIR__ . "/data.txt";
file_put_contents($path, "Budi 25");
$h = fopen($path, "r");
[$nama, $umur] = fscanf($h, "%s %d");
echo "<p>Nama: $nama, Umur: $umur</p>";
fclose($h);
unlink($path);
?>`,
    codeExplanation: [
      'fscanf otomatis menguraikan string dan integer.'
    ],
    challenge: {
      instruction: 'Uji fscanf untuk membaca pola string dan integer.',
      starterCode: `<?php
file_put_contents("scan.txt", "Item 100");
$h = fopen("scan.txt", "r");
[$item, $qty] = fscanf($h, "%s %d");
echo "$item berjumlah $qty";
fclose($h);
unlink("scan.txt");
?>`,
      hint: 'Panggil fscanf($h, "%s %d").'
    },
    quiz: {
      question: 'Format specifier apakah pada fscanf() yang digunakan untuk membaca angka bilangan bulat (integer)?',
      options: [
        '%d',
        '%s',
        '%f',
        '%c'
      ],
      correctIndex: 0,
      explanation: '%d mewakili digit bilangan bulat (integer desimal).'
    }
  },

  // 213. FSEEK()
  {
    id: 'php-ref-fseek',
    title: 'PHP fseek()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 213,
    overview: 'Kuasai fseek(): memindahkan posisi pointer stream file ke byte tertentu (SEEK_SET dari awal, SEEK_CUR dari posisi saat ini, SEEK_END dari akhir).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">POINTER NAVIGATOR</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 213 / 220</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎯 Navigasi Posisi Pointer File (fseek)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>fseek($handle, $offset, $whence)</code> memindahkan pointer ke posisi byte spesifik.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$path = __DIR__ . "/seek.txt";
file_put_contents($path, "ABCDEFGHIJ");
$h = fopen($path, "r");
fseek($h, 3);
echo "<p>Mulai dari byte ke-3: " . fread($h, 3) . " (DEF)</p>";
fclose($h);
unlink($path);
?>`,
    codeExplanation: [
      'fseek($h, 3) memajukan pointer ke karakter ke-4 (indeks 3).'
    ],
    challenge: {
      instruction: 'Lompat ke byte ke-2 dan baca 3 karakter dengan fseek($h, 2) + fread($h, 3).',
      starterCode: `<?php
file_put_contents("s.txt", "12345678");
$h = fopen("s.txt", "r");
fseek($h, 2);
echo "Hasil: " . fread($h, 3);
fclose($h);
unlink("s.txt");
?>`,
      hint: 'Panggil fseek($h, 2).'
    },
    quiz: {
      question: 'Konstanta $whence manakah pada fseek() yang menghitung pergeseran byte relatif dari AKHIR file?',
      options: [
        'SEEK_END',
        'SEEK_SET',
        'SEEK_CUR',
        'SEEK_START'
      ],
      correctIndex: 0,
      explanation: 'SEEK_END menetapkan posisi relatif terhadap titik akhir berkas.'
    }
  },

  // 214. FSTAT()
  {
    id: 'php-ref-fstat',
    title: 'PHP fstat()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 214,
    overview: 'Fungsi fstat(): mengembalikan array informasi statistik lengkap dari stream pointer file yang sedang terbuka.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">STREAM STAT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 214 / 220</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📊 Statistik Lengkap Stream Terbuka (fstat)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>fstat($fileHandle)</code> membaca seluruh metadata file melalui resource stream handle.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$h = fopen(__FILE__, "r");
$stat = fstat($h);
fclose($h);
echo "<p>Ukuran via fstat: " . $stat['size'] . " bytes</p>";
?>`,
    codeExplanation: [
      'fstat() membaca metadata dari handle yang aktif.'
    ],
    challenge: {
      instruction: 'Ambil ukuran file dari fstat($h)[\'size\'].',
      starterCode: `<?php
$h = fopen(__FILE__, "r");
$s = fstat($h);
echo "Ukuran: " . $s['size'] . " bytes";
fclose($h);
?>`,
      hint: 'Panggil fstat($h).'
    },
    quiz: {
      question: 'Apa perbedaan antara stat($filename) dan fstat($handle)?',
      options: [
        'stat() menerima string nama file, sedangkan fstat() menerima resource stream handle yang sudah terbuka',
        'fstat() hanya untuk format PDF',
        'stat() menghapus file',
        'Keduanya identik'
      ],
      correctIndex: 0,
      explanation: 'fstat bekerja pada pointer file stream handle yang sedang aktif.'
    }
  },

  // 215. FTELL()
  {
    id: 'php-ref-ftell',
    title: 'PHP ftell()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 215,
    overview: 'Fungsi ftell(): mengembalikan posisi offset byte pembacaan/penulisan pointer file saat ini.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TELL POSITION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 215 / 220</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📍 Mengetahui Posisi Pointer Berkas (ftell)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ftell($fileHandle)</code> mengembalikan angka integer posisi offset byte pointer file saat ini.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$path = __DIR__ . "/pos.txt";
file_put_contents($path, "123456");
$h = fopen($path, "r");
fread($h, 3);
echo "<p>Posisi pointer saat ini: byte ke-" . ftell($h) . "</p>";
fclose($h);
unlink($path);
?>`,
    codeExplanation: [
      'ftell() mengembalikan posisi byte aktif.'
    ],
    challenge: {
      instruction: 'Cek posisi awal pointer file dengan ftell($h).',
      starterCode: `<?php
file_put_contents("t.txt", "abc");
$h = fopen("t.txt", "r");
echo "Posisi awal: " . ftell($h);
fclose($h);
unlink("t.txt");
?>`,
      hint: 'Panggil ftell($h).'
    },
    quiz: {
      question: 'Berapakah nilai yang dikembalikan oleh ftell() tepat saat file baru saja dibuka dengan fopen(..., "r")?',
      options: [
        '0 (byte ke-0)',
        '1',
        '100',
        'null'
      ],
      correctIndex: 0,
      explanation: 'Posisi awal pointer pembacaan file baru dimulai dari byte ke-0.'
    }
  },

  // 216. FTRUNCATE()
  {
    id: 'php-ref-ftruncate',
    title: 'PHP ftruncate()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 216,
    overview: 'Kuasai ftruncate(): memotong ukuran file (Truncate) ke panjang byte tertentu.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TRUNCATE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 216 / 220</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">✂️ Memotong Ukuran Berkas (ftruncate)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ftruncate($handle, $size)</code> memotong file hingga tepat berukuran <code>$size</code> bytes.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$path = __DIR__ . "/trunc.txt";
file_put_contents($path, "HelloWorld");
$h = fopen($path, "r+");
ftruncate($h, 5);
fclose($h);
echo "<p>Hasil truncate: " . file_get_contents($path) . " (Hello)</p>";
unlink($path);
?>`,
    codeExplanation: [
      'ftruncate($h, 5) memotong isi file menjadi 5 byte pertama.'
    ],
    challenge: {
      instruction: 'Kosongkan isi file dengan ftruncate($h, 0).',
      starterCode: `<?php
file_put_contents("x.txt", "Teks");
$h = fopen("x.txt", "r+");
ftruncate($h, 0);
fclose($h);
echo "Ukuran: " . filesize("x.txt") . " bytes";
unlink("x.txt");
?>`,
      hint: 'Panggil ftruncate($h, 0).'
    },
    quiz: {
      question: 'Apa fungsi dari ftruncate($handle, 0)?',
      options: [
        'Mengosongkan seluruh isi file hingga berukuran 0 Bytes tanpa menghapus filenya',
        'Menghapus file dari harddisk',
        'Menggandakan file',
        'Mengubah nama file'
      ],
      correctIndex: 0,
      explanation: 'ftruncate($h, 0) memotong ukuran berkas menjadi 0 byte (kosong bersih).'
    }
  },

  // 217. FWRITE()
  {
    id: 'php-ref-fwrite',
    title: 'PHP fwrite()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 217,
    overview: 'Kuasai fwrite(): menuliskan string teks atau data biner ke stream file yang terbuka secara aman (Binary-Safe File Writing).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">BINARY WRITE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 217 / 220</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">✍️ Menulis Data ke Berkas (fwrite)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>fwrite($handle, $string, $length)</code> menulis data ke stream file.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$path = __DIR__ . "/out.txt";
$h = fopen($path, "w");
$bytes = fwrite($h, "PHP 8.3 Reference");
fclose($h);
echo "<p>Berhasil menulis: <strong>$bytes Bytes</strong></p>";
unlink($path);
?>`,
    codeExplanation: [
      'fwrite mengembalikan jumlah byte yang berhasil ditulis.'
    ],
    challenge: {
      instruction: 'Tulis pesan dengan fwrite($h, "Hello") dan tutup stream.',
      starterCode: `<?php
$h = fopen("w.txt", "w");
$b = fwrite($h, "Hello");
fclose($h);
echo "Bytes: " . $b;
unlink("w.txt");
?>`,
      hint: 'Panggil fwrite($h, "Hello").'
    },
    quiz: {
      question: 'Tipe data apakah yang dikembalikan oleh fungsi fwrite() saat sukses menulis data?',
      options: [
        'Integer jumlah bytes yang berhasil ditulis ke file',
        'Boolean true saja',
        'String pesan',
        'Array'
      ],
      correctIndex: 0,
      explanation: 'fwrite() mengembalikan bilangan bulat (integer) jumlah bytes yang tertulis.'
    }
  },

  // 218. GLOB()
  {
    id: 'php-ref-glob',
    title: 'PHP glob()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 218,
    overview: 'Kuasai glob(): mencari file atau folder yang cocok dengan pola wildcard shell (seperti "*.json", "images/*.{jpg,png}") langsung ke dalam Array path.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PATTERN SEARCH</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 218 / 220</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Pencarian Berkas Wildcard Cerdas (glob)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>glob($pattern, $flags)</code> mencari seluruh file yang cocok dengan pola path (misal: <code>"storage/*.log"</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$fileList = glob(__DIR__ . "/*.js");
echo "<h3>Hasil glob('*.js'):</h3>";
echo "<ul>";
foreach (array_slice($fileList, 0, 5) as $f) {
    echo "<li>" . basename($f) . "</li>";
}
echo "</ul>";
?>`,
    codeExplanation: [
      'glob("*.js") mengembalikan array file berekstensi .js.'
    ],
    challenge: {
      instruction: 'Cari file menggunakan glob("*.php") dan cetak total yang ditemukan.',
      starterCode: `<?php
$phpFiles = glob("*.php");
echo "Total file PHP: " . count($phpFiles);
?>`,
      hint: 'Panggil glob("*.php").'
    },
    quiz: {
      question: 'Flag apakah pada glob() yang memungkinkan pencarian beberapa ekstensi sekaligus seperti `*.{jpg,png,gif}`?',
      options: [
        'GLOB_BRACE',
        'GLOB_MARK',
        'GLOB_ONLYDIR',
        'GLOB_NOSORT'
      ],
      correctIndex: 0,
      explanation: 'GLOB_BRACE mengaktifkan ekspresi kurung kurawal {a,b,c} ala shell Unix.'
    }
  },

  // 219. IS_DIR()
  {
    id: 'php-ref-is-dir',
    title: 'PHP is_dir()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 219,
    overview: 'Kuasai is_dir(): memeriksa apakah suatu path yang diberikan adalah sebuah direktori FOLDER yang valid (bukan file biasa).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">IS DIR</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 219 / 220</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📁 Validasi Folder Direktori (is_dir)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>is_dir($filename)</code> mengembalikan boolean <code>true</code> jika path tersebut ada dan merupakan sebuah folder direktori.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<p>__DIR__ adalah folder: <strong>" . (is_dir(__DIR__) ? "Ya" : "Bukan") . "</strong></p>";
?>`,
    codeExplanation: [
      'is_dir() memeriksa keabsahan folder direktori.'
    ],
    challenge: {
      instruction: 'Periksa apakah __DIR__ adalah direktori dengan is_dir(__DIR__).',
      starterCode: `<?php
echo is_dir(__DIR__) ? "Direktori valid" : "Bukan direktori";
?>`,
      hint: 'Panggil is_dir(__DIR__).'
    },
    quiz: {
      question: 'Apa nilai kembalian dari is_dir($path) jika $path adalah file berkas biasa (misal: gambar.jpg)?',
      options: [
        'Boolean false',
        'Boolean true',
        'Null',
        'Fatal error'
      ],
      correctIndex: 0,
      explanation: 'is_dir() mengembalikan false untuk file berkas biasa.'
    }
  },

  // 220. IS_EXECUTABLE()
  {
    id: 'php-ref-is-executable',
    title: 'PHP is_executable()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 220,
    overview: 'Kuasai is_executable(): memeriksa apakah suatu file memiliki izin untuk dieksekusi (Executable Permission) sebagai binary/program di sistem operasi.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">EXECUTABLE PERMISSION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 220 / 220</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚙️ Memeriksa Izin Eksekusi (is_executable)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>is_executable($filename)</code> mengembalikan boolean <code>true</code> jika file memiliki bit permission <code>+x</code> di Linux.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<p>Status Executable: <strong>" . (is_executable(__FILE__) ? "Dapat dieksekusi" : "Non-executable script") . "</strong></p>";
?>`,
    codeExplanation: [
      'is_executable() memeriksa izin eksekusi berkas.'
    ],
    challenge: {
      instruction: 'Uji fungsi is_executable(__FILE__).',
      starterCode: `<?php
echo "Executable: " . (is_executable(__FILE__) ? "Ya" : "Tidak");
?>`,
      hint: 'Panggil is_executable(__FILE__).'
    },
    quiz: {
      question: 'Kapan fungsi is_executable() paling sering dimanfaatkan?',
      options: [
        'Sebelum menjalankan perintah CLI eksternal menggunakan exec() atau shell_exec() untuk memastikan file binary program diizinkan dieksekusi',
        'Untuk memutar musik',
        'Untuk menghapus database',
        'Hanya di browser'
      ],
      correctIndex: 0,
      explanation: 'is_executable memastikan berkas binary/skrip shell memiliki izin eksekusi sebelum dijalankan oleh sistem.'
    }
  }
];

module.exports = phpPart22RefFilesystem2;
