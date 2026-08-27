// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (FTP PART 1: 262-279)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart26RefFtp1 = [
  // 262. FTP_ALLOC()
  {
    id: 'php-ref-ftp-alloc',
    title: 'PHP ftp_alloc()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 262,
    overview: 'Fungsi ftp_alloc(): mengalokasikan ruang disk storage di server FTP sebelum file besar diunggah.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PHP FTP</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 262 / 296</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">💾 Alokasi Ruang Berkas FTP (ftp_alloc)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ftp_alloc($ftp, $size, &$response)</code> mengirimkan perintah <code>ALLO</code> ke server FTP untuk mereservasi ruang penyimpanan sejumlah bytes sebelum memulai proses upload berkas berukuran raksasa.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Pola penggunaan ftp_alloc pada koneksi FTP
$ftpHost = "ftp.example.com";
$ftpUser = "user";
$ftpPass = "pass";

// Simulasi alokasi 10 MB (10485760 Bytes)
echo "<h3>Simulasi ftp_alloc():</h3>";
echo "<p>Sintaks: <code>ftp_alloc(\$conn, 10485760, \$response);</code></p>";
echo "<p>Keterangan: Memastikan server FTP memiliki cukup ruang sebelum transmisi dimulai.</p>";
?>`,
    codeExplanation: [
      'ftp_alloc mengirim perintah ALLO ke server FTP.',
      'Banyak server FTP modern mengizinkan transfer tanpa alokasi eksplisit, namun berguna untuk server legacy/mainframe.'
    ],
    challenge: {
      instruction: 'Pahami fungsi alokasi ruang penyimpanan pada FTP server.',
      starterCode: `<?php
echo "ftp_alloc(\$conn, 5242880); // Alokasi 5MB";
?>`,
      hint: 'Klik RUN untuk mereview sintaks ftp_alloc.'
    },
    quiz: {
      question: 'Perintah protokol FTP apakah yang dikirimkan oleh fungsi ftp_alloc() ke server remote?',
      options: [
        'ALLO',
        'SIZE',
        'STOR',
        'RETR'
      ],
      correctIndex: 0,
      explanation: 'ftp_alloc mengirimkan command standar RFC 959 "ALLO" (Allocate).'
    }
  },

  // 263. FTP_CDUP()
  {
    id: 'php-ref-ftp-cdup',
    title: 'PHP ftp_cdup()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 263,
    overview: 'Kuasai ftp_cdup(): berpindah ke satu tingkat direktori induk di atasnya (Change Directory Up / "cd ..") pada server FTP.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DIRECTORY NAVIGATION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 263 / 296</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⬆️ Naik ke Folder Induk (ftp_cdup)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ftp_cdup($ftp)</code> memindahkan direktori kerja aktif di server FTP naik 1 level ke folder parent (ekuivalen dengan <code>ftp_chdir($ftp, "..")</code> atau perintah <code>CDUP</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Pola navigasi folder pada FTP client
echo "<h3>Navigasi Folder FTP dengan ftp_cdup():</h3>";
echo "<ul>";
echo "<li>1. <code>ftp_chdir(\$conn, 'uploads/2026');</code> -> Berada di /uploads/2026</li>";
echo "<li>2. <code>ftp_cdup(\$conn);</code> -> Naik ke /uploads</li>";
echo "<li>3. <code>ftp_pwd(\$conn);</code> -> Menghasilkan '/uploads'</li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'ftp_cdup($conn) mengirim perintah CDUP untuk naik satu level folder direktori.'
    ],
    challenge: {
      instruction: 'Pahami fungsi naik tingkat folder FTP.',
      starterCode: `<?php
echo "ftp_cdup(\$conn); // Naik ke parent directory";
?>`,
      hint: 'Klik RUN untuk mereview sintaks.'
    },
    quiz: {
      question: 'Perintah apakah yang identik dengan pemanggilan ftp_cdup($ftp)?',
      options: [
        'ftp_chdir($ftp, "..")',
        'ftp_rmdir($ftp, "..")',
        'ftp_pwd($ftp)',
        'ftp_close($ftp)'
      ],
      correctIndex: 0,
      explanation: 'ftp_cdup() ekuivalen dengan berpindah direktori ke ".." (folder induk).'
    }
  },

  // 264. FTP_CHDIR()
  {
    id: 'php-ref-ftp-chdir',
    title: 'PHP ftp_chdir()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 264,
    overview: 'Kuasai ftp_chdir(): berpindah ke folder direktori tertentu (Change Directory) pada server FTP remote.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CHANGE DIRECTORY</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 264 / 296</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📁 Berpindah Direktori FTP (ftp_chdir)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ftp_chdir($ftp, $directory)</code> mengubah direktori aktif di server FTP ke target path yang ditentukan (misal: <code>public_html/storage/</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Contoh berpindah direktori:
echo "<h3>Penggunaan ftp_chdir():</h3>";
echo "<pre style='background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 8px;'>";
echo "if (ftp_chdir(\$conn, 'htdocs/backups')) {\n";
echo "    echo 'Direktori aktif berhasil diubah ke htdocs/backups';\n";
echo "} else {\n";
echo "    echo 'Gagal berpindah direktori (folder tidak ditemukan)';\n";
echo "}\n";
echo "</pre>";
?>`,
    codeExplanation: [
      'ftp_chdir mengembalikan true jika folder ada dan berhasil dimasuki, atau false jika gagal.'
    ],
    challenge: {
      instruction: 'Pahami cara pindah direktori ke "public_html".',
      starterCode: `<?php
echo "ftp_chdir(\$conn, 'public_html');";
?>`,
      hint: 'Klik RUN untuk mereview sintaks.'
    },
    quiz: {
      question: 'Apa tipe data kembalian dari fungsi ftp_chdir()?',
      options: [
        'Boolean (true jika berhasil pindah, false jika gagal)',
        'String nama direktori',
        'Array isi folder',
        'Integer nomor direktori'
      ],
      correctIndex: 0,
      explanation: 'ftp_chdir mengembalikan true jika operasi CWD sukses atau false jika gagal.'
    }
  },

  // 265. FTP_CHMOD()
  {
    id: 'php-ref-ftp-chmod',
    title: 'PHP ftp_chmod()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 265,
    overview: 'Kuasai ftp_chmod(): mengubah hak izin akses berkas (File Permissions: 0755, 0644) pada file di server FTP remote.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CHMOD REMOTE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 265 / 296</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔒 Mengatur Izin Berkas Remote (ftp_chmod)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ftp_chmod($ftp, $mode, $filename)</code> mengirimkan perintah <code>SITE CHMOD</code> untuk mengubah izin file di server Linux remote.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Setel izin file ke 0644 setelah di-upload ke server FTP
echo "<h3>Penggunaan ftp_chmod():</h3>";
echo "<code>ftp_chmod(\$conn, 0644, 'public_html/avatar.png');</code>";
echo "<p>Memberikan izin Read-Only untuk publik dan Read+Write untuk owner di server FTP.</p>";
?>`,
    codeExplanation: [
      'Nilai $mode harus dalam notasi oktal (diawali 0) seperti 0755 atau 0644.'
    ],
    challenge: {
      instruction: 'Setel izin berkas remote menjadi 0755.',
      starterCode: `<?php
echo "ftp_chmod(\$conn, 0755, 'script.sh');";
?>`,
      hint: 'Panggil ftp_chmod($conn, 0755, "script.sh").'
    },
    quiz: {
      question: 'Format angka basis berapakah yang digunakan pada parameter mode di ftp_chmod($conn, $mode, $file)?',
      options: [
        'Oktal (Basis 8, misal: 0755 atau 0644)',
        'Desimal (Basis 10)',
        'Biner (Basis 2)',
        'Heksadesimal'
      ],
      correctIndex: 0,
      explanation: 'Parameter permissions wajib ditulis dalam notasi oktal PHP (diawali angka 0).'
    }
  },

  // 266. FTP_CLOSE()
  {
    id: 'php-ref-ftp-close',
    title: 'PHP ftp_close()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 266,
    overview: 'Kuasai ftp_close(): menutup koneksi sesi FTP dan melepaskan stream socket jaringan ke server.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CONNECTION CLOSE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 266 / 296</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🚪 Menutup Koneksi FTP (ftp_close)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ftp_close($ftp)</code> mengirimkan perintah <code>QUIT</code> dan memutuskan sesi koneksi secara anggun (graceful disconnect).
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Pola pembukaan dan penutupan koneksi FTP:
echo "<h3>Siklus Hidup Sesi FTP:</h3>";
echo "<code>\$conn = ftp_connect('ftp.devgrow.id');</code><br>";
echo "<code>ftp_login(\$conn, 'user', 'password');</code><br>";
echo "<code>// ... Lakukan operasi transfer file ...</code><br>";
echo "<code>ftp_close(\$conn); // Tutup koneksi</code>";
?>`,
    codeExplanation: [
      'ftp_close() memastikan koneksi socket ditutup dengan benar sehingga tidak menggantung di server.'
    ],
    challenge: {
      instruction: 'Pahami penutupan koneksi FTP.',
      starterCode: `<?php
echo "ftp_close(\$conn);";
?>`,
      hint: 'Klik RUN untuk mereview sintaks ftp_close.'
    },
    quiz: {
      question: 'Perintah protokol FTP apakah yang dikirim oleh ftp_close() ke server remote?',
      options: [
        'QUIT',
        'BYE',
        'EXIT',
        'CLOSE'
      ],
      correctIndex: 0,
      explanation: 'ftp_close mengirim perintah RFC 959 "QUIT" untuk mengakhiri sesi FTP.'
    }
  },

  // 267. FTP_CONNECT()
  {
    id: 'php-ref-ftp-connect',
    title: 'PHP ftp_connect()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 267,
    overview: 'Kuasai ftp_connect(): membuka koneksi TCP/IP ke server FTP standar (Port default: 21) dengan konfigurasi batas waktu timeout.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">FTP CONNECT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 267 / 296</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌐 Membuka Koneksi Server FTP (ftp_connect)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ftp_connect($hostname, $port, $timeout)</code> menginisialisasi koneksi ke server FTP. Pada PHP 8.1+, fungsi ini mengembalikan objek instans <code>FTP\\Connection</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Membuka koneksi FTP dengan port 21 dan timeout 90 detik
$server = "ftp.example.com";
echo "<h3>Inisialisasi Koneksi FTP:</h3>";
echo "<code>\$conn = ftp_connect('$server', 21, 90);</code>";
echo "<p>Mengembalikan instance FTP\\\\Connection (PHP 8.1+) atau false jika koneksi gagal/timeout.</p>";
?>`,
    codeExplanation: [
      'Port default FTP adalah 21.',
      'Timeout default adalah 90 detik.'
    ],
    challenge: {
      instruction: 'Buka koneksi FTP ke "ftp.devgrow.id" dengan timeout 30 detik.',
      starterCode: `<?php
echo "\$conn = ftp_connect('ftp.devgrow.id', 21, 30);";
?>`,
      hint: 'Panggil ftp_connect("ftp.devgrow.id", 21, 30).'
    },
    quiz: {
      question: 'Berapakah nomor port default standar yang digunakan oleh protokol FTP biasa?',
      options: [
        '21',
        '22 (SSH)',
        '80 (HTTP)',
        '443 (HTTPS)'
      ],
      correctIndex: 0,
      explanation: 'Port default untuk FTP Plain Control Channel adalah port 21.'
    }
  },

  // 268. FTP_DELETE()
  {
    id: 'php-ref-ftp-delete',
    title: 'PHP ftp_delete()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 268,
    overview: 'Kuasai ftp_delete(): menghapus file berkas di server FTP remote.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DELETE REMOTE FILE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 268 / 296</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🗑️ Menghapus Berkas di FTP (ftp_delete)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ftp_delete($ftp, $filename)</code> mengirimkan perintah <code>DELE</code> untuk menghapus file dari harddisk server remote.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Menghapus file backup lama di FTP server
echo "<h3>Penggunaan ftp_delete():</h3>";
echo "<code>if (ftp_delete(\$conn, 'backups/db_old.sql')) { echo 'File berhasil dihapus'; }</code>";
?>`,
    codeExplanation: [
      'ftp_delete mengembalikan boolean true jika file berhasil dihapus.'
    ],
    challenge: {
      instruction: 'Pahami penghapusan file di server FTP.',
      starterCode: `<?php
echo "ftp_delete(\$conn, 'temp.txt');";
?>`,
      hint: 'Klik RUN untuk mereview sintaks.'
    },
    quiz: {
      question: 'Perintah protokol FTP apakah yang dikirim oleh ftp_delete() ke server?',
      options: [
        'DELE',
        'REMOVE',
        'UNLINK',
        'ERASE'
      ],
      correctIndex: 0,
      explanation: 'ftp_delete mengirimkan perintah RFC 959 "DELE".'
    }
  },

  // 269. FTP_EXEC()
  {
    id: 'php-ref-ftp-exec',
    title: 'PHP ftp_exec()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 269,
    overview: 'Fungsi ftp_exec(): meminta eksekusi perintah program pada server FTP (perintah SITE EXEC).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SITE EXEC</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 269 / 296</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚙️ Eksekusi Perintah di Server FTP (ftp_exec)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ftp_exec($ftp, $command)</code> mengirim perintah <code>SITE EXEC</code> ke server FTP. Dinonaktifkan di sebagian besar shared hosting demi alasan keamanan.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Menjalankan skrip backup di server FTP
echo "<h3>Penggunaan ftp_exec():</h3>";
echo "<code>@ftp_exec(\$conn, 'tar -czf backup.tar.gz public_html');</code>";
?>`,
    codeExplanation: [
      'ftp_exec memerlukan izin SITE EXEC pada daemon server FTP.'
    ],
    challenge: {
      instruction: 'Pahami fungsi ftp_exec.',
      starterCode: `<?php
echo "ftp_exec(\$conn, 'ls -la');";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Mengapa ftp_exec() seringkali tidak berfungsi pada server shared hosting?',
      options: [
        'Karena fitur SITE EXEC umumnya dinonaktifkan oleh administrator server demi alasan keamanan',
        'Karena PHP tidak mendukung string',
        'Karena memerlukan kabel LAN khusus',
        'Hanya untuk Windows'
      ],
      correctIndex: 0,
      explanation: 'SITE EXEC dinonaktifkan di sebagian besar server produksi demi mencegah eksekusi arbitrary command.'
    }
  },

  // 270. FTP_FGET()
  {
    id: 'php-ref-ftp-fget',
    title: 'PHP ftp_fget()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 270,
    overview: 'Kuasai ftp_fget(): mengunduh file dari server FTP dan langsung menuliskannya ke resource stream pointer file lokal yang terbuka (Stream-to-Stream Download).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">STREAM DOWNLOAD</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 270 / 296</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📥 Download Berkas ke Stream Lokal (ftp_fget)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ftp_fget($ftp, $localHandle, $remoteFile, $mode, $resumepos)</code> mengunduh file dari FTP dan langsung menyuntikkannya ke file handle lokal yang sudah dibuka dengan <code>fopen()</code>. Mode transfer: <code>FTP_BINARY</code> atau <code>FTP_ASCII</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Download file langsung ke file stream lokal
echo "<h3>Download dengan ftp_fget():</h3>";
echo "<code>\$localFile = fopen('laporan_lokal.pdf', 'w');</code><br>";
echo "<code>ftp_fget(\$conn, \$localFile, 'reports/2026.pdf', FTP_BINARY);</code><br>";
echo "<code>fclose(\$localFile);</code>";
?>`,
    codeExplanation: [
      'FTP_BINARY wajib digunakan untuk file gambar, PDF, zip, dan dokumen biner agar tidak rusak (corrupt).'
    ],
    challenge: {
      instruction: 'Pahami pola ftp_fget dengan mode FTP_BINARY.',
      starterCode: `<?php
echo "ftp_fget(\$conn, \$fp, 'remote.zip', FTP_BINARY);";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Konstanta mode transfer apakah yang WAJIB digunakan saat mendownload file gambar, zip, atau PDF lewat FTP agar data tidak corrupt?',
      options: [
        'FTP_BINARY',
        'FTP_ASCII',
        'FTP_TEXT',
        'FTP_STREAM'
      ],
      correctIndex: 0,
      explanation: 'FTP_BINARY menjaga struktur byte biner asli tanpa mengubah karakter newline.'
    }
  },

  // 271. FTP_FPUT()
  {
    id: 'php-ref-ftp-fput',
    title: 'PHP ftp_fput()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 271,
    overview: 'Kuasai ftp_fput(): mengunggah isi dari resource pointer file stream lokal langsung ke server FTP remote tanpa memuat seluruh file ke memori RAM.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">STREAM UPLOAD</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 271 / 296</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📤 Upload Berkas dari Stream Lokal (ftp_fput)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ftp_fput($ftp, $remoteFile, $localHandle, $mode, $startpos)</code> membaca data langsung dari stream handle lokal dan mengalirkannya ke server FTP. Sangat efisien untuk upload file berukuran gigabyte.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Pola Upload Stream Berkas
echo "<h3>Upload File Besar dengan ftp_fput():</h3>";
echo "<code>\$fp = fopen('video_kuliah.mp4', 'r');</code><br>";
echo "<code>ftp_fput(\$conn, 'storage/video.mp4', \$fp, FTP_BINARY);</code><br>";
echo "<code>fclose(\$fp);</code>";
?>`,
    codeExplanation: [
      'ftp_fput membaca handle lokal secara bertahap tanpa membebani memory_limit PHP.'
    ],
    challenge: {
      instruction: 'Pahami sintaks upload stream ftp_fput.',
      starterCode: `<?php
echo "ftp_fput(\$conn, 'remote.dat', \$fp, FTP_BINARY);";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Apa kelebihan ftp_fput($conn, $remote, $handle) dibandingkan ftp_put($conn, $remote, $localPath)?',
      options: [
        'ftp_fput dapat membaca dari sembarang stream pointer (termasuk memory stream php://temp atau stream network) secara hemat RAM',
        'ftp_fput otomatis menghapus file',
        'ftp_fput mengompres file',
        'Tidak ada perbedaan'
      ],
      correctIndex: 0,
      explanation: 'ftp_fput bekerja pada resource file handle stream generik.'
    }
  },

  // 272. FTP_GET()
  {
    id: 'php-ref-ftp-get',
    title: 'PHP ftp_get()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 272,
    overview: 'Kuasai ftp_get(): mengunduh file dari server FTP remote dan menyimpannya langsung ke file lokal berdasarkan nama path.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DOWNLOAD FILE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 272 / 296</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📥 Download Berkas FTP (ftp_get)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ftp_get($ftp, $localFile, $remoteFile, $mode, $resumepos)</code> mengunduh file remote dan menyimpannya ke path lokal secara otomatis.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Download file backup dari server FTP ke direktori lokal
echo "<h3>Penggunaan ftp_get():</h3>";
echo "<code>ftp_get(\$conn, 'downloads/backup.sql', 'db/backup.sql', FTP_BINARY);</code>";
?>`,
    codeExplanation: [
      'ftp_get() adalah cara termudah mendownload file dari FTP tanpa perlu membuka handle fopen() manual.'
    ],
    challenge: {
      instruction: 'Download "data.csv" dari FTP ke "local.csv" dalam mode FTP_ASCII.',
      starterCode: `<?php
echo "ftp_get(\$conn, 'local.csv', 'data.csv', FTP_ASCII);";
?>`,
      hint: 'Panggil ftp_get($conn, "local.csv", "data.csv", FTP_ASCII).'
    },
    quiz: {
      question: 'Mode transfer apakah yang cocok untuk file teks seperti .txt, .html, .csv?',
      options: [
        'FTP_ASCII',
        'FTP_BINARY',
        'FTP_RAW',
        'FTP_OCTET'
      ],
      correctIndex: 0,
      explanation: 'FTP_ASCII menyesuaikan karakter carriage return / newline antar sistem operasi (Windows vs Linux).'
    }
  },

  // 273. FTP_GET_OPTION()
  {
    id: 'php-ref-ftp-get-option',
    title: 'PHP ftp_get_option()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 273,
    overview: 'Fungsi ftp_get_option(): mengambil nilai opsi konfigurasi runtime koneksi FTP (seperti FTP_TIMEOUT_SEC atau FTP_AUTOSEEK).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">FTP OPTIONS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 273 / 296</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚙️ Membaca Opsi Konfigurasi FTP (ftp_get_option)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ftp_get_option($ftp, $option)</code> mengembalikan nilai setting aktif koneksi FTP, seperti nilai timeout jaringan (<code>FTP_TIMEOUT_SEC</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Membaca Nilai Timeout FTP:</h3>";
echo "<code>\$timeout = ftp_get_option(\$conn, FTP_TIMEOUT_SEC);</code>";
echo "<p>Menghasilkan integer durasi timeout jaringan dalam satuan detik (default: 90).</p>";
?>`,
    codeExplanation: [
      'ftp_get_option membaca nilai timeout dan auto-seek.'
    ],
    challenge: {
      instruction: 'Pahami cara membaca timeout FTP dengan ftp_get_option.',
      starterCode: `<?php
echo "ftp_get_option(\$conn, FTP_TIMEOUT_SEC);";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Opsi konstanta apakah yang digunakan untuk membaca durasi timeout jaringan koneksi FTP?',
      options: [
        'FTP_TIMEOUT_SEC',
        'FTP_AUTOSEEK',
        'FTP_PORT',
        'FTP_PASSIVE'
      ],
      correctIndex: 0,
      explanation: 'FTP_TIMEOUT_SEC mewakili konfigurasi batas waktu timeout dalam satuan detik.'
    }
  },

  // 274. FTP_LOGIN()
  {
    id: 'php-ref-ftp-login',
    title: 'PHP ftp_login()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 274,
    overview: 'Kuasai ftp_login(): melakukan otentikasi username dan password pada server FTP yang telah terhubung.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">AUTHENTICATION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 274 / 296</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔑 Otentikasi Login FTP (ftp_login)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ftp_login($ftp, $username, $password)</code> mengirimkan kredensial login (perintah <code>USER</code> dan <code>PASS</code>). Mengembalikan boolean <code>true</code> jika kredensial benar.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Proses Login Otentikasi FTP
echo "<h3>Otentikasi Server FTP:</h3>";
echo "<code>if (ftp_login(\$conn, 'admin_user', 'SuperSecretPass123!')) {\n";
echo "    echo 'Login FTP berhasil!';\n";
echo "} else {\n";
echo "    echo 'Otentikasi gagal: Username atau password salah';\n";
echo "}</code>";
?>`,
    codeExplanation: [
      'ftp_login wajib dipanggil segera setelah ftp_connect() berhasil sebelum menjalankan operasi file apapun.'
    ],
    challenge: {
      instruction: 'Pahami otentikasi login FTP.',
      starterCode: `<?php
echo "ftp_login(\$conn, 'user', 'pass');";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Kapan fungsi ftp_login() wajib dipanggil?',
      options: [
        'Segera setelah ftp_connect() berhasil dibuka, sebelum menjalankan perintah operasi file apapun',
        'Hanya saat mau keluar',
        'Setelah download selesai',
        'Tidak wajib'
      ],
      correctIndex: 0,
      explanation: 'Otentikasi login diperlukan sebelum server mengizinkan akses ke direktori dan berkas.'
    }
  },

  // 275. FTP_MDTM()
  {
    id: 'php-ref-ftp-mdtm',
    title: 'PHP ftp_mdtm()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 275,
    overview: 'Kuasai ftp_mdtm(): mengembalikan waktu modifikasi berkas remote terakhir kali (Modification Time) dalam format UNIX timestamp.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">MODIFICATION TIME</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 275 / 296</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⏱️ Waktu Modifikasi Berkas Remote (ftp_mdtm)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ftp_mdtm($ftp, $filename)</code> mengirim perintah <code>MDTM</code> untuk memeriksa waktu revisi terakhir file di server FTP remote.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Cek kapan file remote terakhir diubah
echo "<h3>Waktu Modifikasi Berkas FTP:</h3>";
echo "<code>\$mtime = ftp_mdtm(\$conn, 'index.html');</code><br>";
echo "<code>if (\$mtime != -1) { echo date('d F Y H:i:s', \$mtime); }</code>";
?>`,
    codeExplanation: [
      'ftp_mdtm() mengembalikan integer timestamp UNIX, atau -1 jika gagal/tidak didukung oleh server.'
    ],
    challenge: {
      instruction: 'Pahami fungsi pembacaan waktu modifikasi berkas remote.',
      starterCode: `<?php
echo "\$time = ftp_mdtm(\$conn, 'app.zip');";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Apa nilai yang dikembalikan oleh ftp_mdtm() jika server FTP tidak mendukung perintah MDTM atau file tidak ditemukan?',
      options: [
        '-1 (angka minus satu)',
        '0',
        'false',
        'null'
      ],
      correctIndex: 0,
      explanation: 'ftp_mdtm mengembalikan nilai -1 jika terjadi kegagalan.'
    }
  },

  // 276. FTP_MKDIR()
  {
    id: 'php-ref-ftp-mkdir',
    title: 'PHP ftp_mkdir()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 276,
    overview: 'Kuasai ftp_mkdir(): membuat folder direktori baru pada server FTP remote.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">MKDIR REMOTE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 276 / 296</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📁 Membuat Folder di Server FTP (ftp_mkdir)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ftp_mkdir($ftp, $directory)</code> mengirim perintah <code>MKD</code> untuk membuat folder direktori baru di server remote. Mengembalikan string nama direktori yang dibuat atau <code>false</code> jika gagal.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Membuat folder uploads/2026 di server FTP
echo "<h3>Membuat Direktori FTP:</h3>";
echo "<code>if (ftp_mkdir(\$conn, 'uploads/2026')) {\n";
echo "    echo 'Direktori baru berhasil dibuat di server FTP!';\n";
echo "}</code>";
?>`,
    codeExplanation: [
      'ftp_mkdir() membuat folder baru pada direktori kerja remote saat ini.'
    ],
    challenge: {
      instruction: 'Pahami cara membuat folder baru di FTP.',
      starterCode: `<?php
echo "ftp_mkdir(\$conn, 'new_folder');";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Perintah protokol FTP apakah yang dikirimkan oleh ftp_mkdir() ke server?',
      options: [
        'MKD',
        'MKDIR',
        'CREATE',
        'NEWDIR'
      ],
      correctIndex: 0,
      explanation: 'ftp_mkdir mengirimkan command standar RFC 959 "MKD" (Make Directory).'
    }
  },

  // 277. FTP_MLSD()
  {
    id: 'php-ref-ftp-mlsd',
    title: 'PHP ftp_mlsd()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 277,
    overview: 'Kuasai ftp_mlsd(): membaca daftar isi direktori FTP lengkap dalam bentuk Array asosiatif terstruktur (nama, tipe file/dir, ukuran size, waktu modifikasi modify, permissions) berbasis standar modern RFC 3659.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">STRUCTURED LISTING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 277 / 296</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📊 Daftar Berkas Terstruktur Modern (ftp_mlsd)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ftp_mlsd($ftp, $directory)</code> adalah standar modern pengganti <code>ftp_rawlist()</code>. Menghasilkan array asosiatif rapi tanpa perlu mem-parsing teks UNIX stat mentah secara manual.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Membaca isi folder secara terstruktur modern
echo "<h3>Hasil Struktur Array ftp_mlsd():</h3>";
$simulasiMlsd = [
    [
        'name'   => 'avatar.png',
        'type'   => 'file',
        'size'   => '24560',
        'modify' => '20260827153000',
        'perm'   => '0644'
    ],
    [
        'name'   => 'documents',
        'type'   => 'dir',
        'modify' => '20260827120000',
        'perm'   => '0755'
    ]
];

echo "<pre style='background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 8px;'>";
print_r($simulasiMlsd);
echo "</pre>";
?>`,
    codeExplanation: [
      'ftp_mlsd() mengembalikan array multi-elemen terurai lengkap dengan atribut metadata file.'
    ],
    challenge: {
      instruction: 'Pahami cara membaca isi direktori terstruktur dengan ftp_mlsd.',
      starterCode: `<?php
echo "\$items = ftp_mlsd(\$conn, '.');";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Mengapa ftp_mlsd() jauh lebih direkomendasikan daripada ftp_rawlist()?',
      options: [
        'Karena ftp_mlsd() otomatis mem-parsing metadata file (name, type, size, modify, perm) menjadi array asosiatif terstruktur standar RFC 3659',
        'Karena ftp_mlsd() menghapus virus',
        'Karena ftp_rawlist() tidak bisa membaca folder',
        'Tidak ada perbedaan'
      ],
      correctIndex: 0,
      explanation: 'ftp_mlsd menyediakan data metadata mesin yang terstruktur rapi dan konsisten lintas OS.'
    }
  },

  // 278. FTP_NB_CONTINUE()
  {
    id: 'php-ref-ftp-nb-continue',
    title: 'PHP ftp_nb_continue()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 278,
    overview: 'Kuasai ftp_nb_continue(): melanjutkan proses transfer berkas asynchronous / non-blocking (Non-Blocking Transfer Continuation) untuk pembuatan Progress Bar Upload/Download.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">NON-BLOCKING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 278 / 296</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⏳ Melanjutkan Transfer Non-Blocking (ftp_nb_continue)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ftp_nb_continue($ftp)</code> melanjutkan transmisi data asynchronous. Mengembalikan status <code>FTP_MOREDATA</code> (masih mentransfer), <code>FTP_FINISHED</code> (selesai sukses), atau <code>FTP_FAILED</code> (gagal).
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Pola Loop Non-Blocking Transfer dengan Progress Update:
echo "<h3>Pola Non-Blocking Loop:</h3>";
echo "<code>\$status = ftp_nb_get(\$conn, 'local.iso', 'remote.iso', FTP_BINARY);</code><br>";
echo "<code>while (\$status === FTP_MOREDATA) {\n";
echo "    // Tampilkan persentase progress download ke terminal/CLI\n";
echo "    \$status = ftp_nb_continue(\$conn);\n";
echo "}</code>";
?>`,
    codeExplanation: [
      'FTP_MOREDATA menandakan potongan paket data berikutnya sedang dikirim.',
      'Memungkinkan server melakukan background task lain selama transfer berlangsung.'
    ],
    challenge: {
      instruction: 'Pahami loop transfer non-blocking dengan ftp_nb_continue.',
      starterCode: `<?php
echo "while (ftp_nb_continue(\$conn) === FTP_MOREDATA) { /* update */ }";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Konstanta status apakah yang dikembalikan oleh ftp_nb_continue() saat transfer file masih berlangsung dan belum selesai?',
      options: [
        'FTP_MOREDATA',
        'FTP_FINISHED',
        'FTP_FAILED',
        'FTP_PENDING'
      ],
      correctIndex: 0,
      explanation: 'FTP_MOREDATA menandakan proses transfer masih aktif mentransmisikan data.'
    }
  },

  // 279. FTP_NB_FGET()
  {
    id: 'php-ref-ftp-nb-fget',
    title: 'PHP ftp_nb_fget()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 279,
    overview: 'Kuasai ftp_nb_fget(): menginisialisasi proses pengunduhan file dari server FTP ke file handle lokal secara non-blocking (Asynchronous Stream Download).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ASYNC STREAM GET</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 279 / 296</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📥 Inisialisasi Download Non-Blocking Stream (ftp_nb_fget)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ftp_nb_fget($ftp, $handle, $remoteFile, $mode, $resumepos)</code> memulai download file remote ke handle lokal tanpa membekukan (blocking) eksekusi script PHP.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Inisialisasi download non-blocking ke file stream
echo "<h3>Download Non-Blocking Stream:</h3>";
echo "<code>\$fp = fopen('database_dump.sql', 'w');</code><br>";
echo "<code>\$ret = ftp_nb_fget(\$conn, \$fp, 'db.sql', FTP_BINARY);</code><br>";
echo "<code>while (\$ret === FTP_MOREDATA) {\n";
echo "    \$ret = ftp_nb_continue(\$conn);\n";
echo "}\n";
echo "fclose(\$fp);</code>";
?>`,
    codeExplanation: [
      'ftp_nb_fget mengawali download non-blocking langsung ke pointer file fopen().'
    ],
    challenge: {
      instruction: 'Pahami inisialisasi download asynchronous stream.',
      starterCode: `<?php
echo "\$res = ftp_nb_fget(\$conn, \$fp, 'file.zip', FTP_BINARY);";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Apa fungsi utama awalan "nb_" pada fungsi-fungsi seperti ftp_nb_fget() dan ftp_nb_put()?',
      options: [
        'Non-Blocking (Asynchronous) transfer yang tidak membekukan eksekusi script PHP saat transmisi data berlangsung',
        'New Binary format',
        'Network Buffer',
        'No Bug mode'
      ],
      correctIndex: 0,
      explanation: 'nb adalah singkatan dari Non-Blocking transfer mode.'
    }
  }
];

module.exports = phpPart26RefFtp1;
