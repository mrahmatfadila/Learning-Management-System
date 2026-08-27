// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (FTP PART 2: 280-296)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart27RefFtp2 = [
  // 280. FTP_NB_FPUT()
  {
    id: 'php-ref-ftp-nb-fput',
    title: 'PHP ftp_nb_fput()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 280,
    overview: 'Kuasai ftp_nb_fput(): mengunggah data dari pointer stream file lokal ke server FTP secara non-blocking (Asynchronous Stream Upload).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ASYNC STREAM PUT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 280 / 296</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📤 Inisialisasi Upload Non-Blocking Stream (ftp_nb_fput)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ftp_nb_fput($ftp, $remoteFile, $handle, $mode, $startpos)</code> memulai proses upload file dari stream pointer lokal ke server FTP tanpa memblokir thread eksekusi PHP.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Upload stream non-blocking
echo "<h3>Upload Non-Blocking Stream:</h3>";
echo "<code>\$fp = fopen('video.mp4', 'r');</code><br>";
echo "<code>\$res = ftp_nb_fput(\$conn, 'video.mp4', \$fp, FTP_BINARY);</code><br>";
echo "<code>while (\$res === FTP_MOREDATA) {\n";
echo "    \$res = ftp_nb_continue(\$conn);\n";
echo "}\n";
echo "fclose(\$fp);</code>";
?>`,
    codeExplanation: [
      'ftp_nb_fput mentransmisikan data stream berkas tanpa membuat script PHP berhenti merespon.'
    ],
    challenge: {
      instruction: 'Pahami inisialisasi upload stream non-blocking.',
      starterCode: `<?php
echo "ftp_nb_fput(\$conn, 'remote.bin', \$fp, FTP_BINARY);";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Kapan proses transfer ftp_nb_fput() dianggap telah selesai sempurna?',
      options: [
        'Ketika ftp_nb_continue() mengembalikan konstanta FTP_FINISHED',
        'Ketika bernilai FTP_MOREDATA',
        'Setelah 1 detik',
        'Saat file lokal dihapus'
      ],
      correctIndex: 0,
      explanation: 'FTP_FINISHED menandakan proses transmisi upload berkas telah tuntas 100%.'
    }
  },

  // 281. FTP_NB_GET()
  {
    id: 'php-ref-ftp-nb-get',
    title: 'PHP ftp_nb_get()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 281,
    overview: 'Kuasai ftp_nb_get(): mengunduh file dari server FTP dan menyimpannya langsung ke file path lokal secara non-blocking / asynchronous.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ASYNC DOWNLOAD</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 281 / 296</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📥 Download Berkas Non-Blocking (ftp_nb_get)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ftp_nb_get($ftp, $localFile, $remoteFile, $mode, $resumepos)</code> mengunduh file secara asynchronous langsung ke path file lokal.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Download file non-blocking
echo "<h3>Download Non-Blocking Path:</h3>";
echo "<code>\$ret = ftp_nb_get(\$conn, 'arsip.zip', 'backups/arsip.zip', FTP_BINARY);</code><br>";
echo "<code>while (\$ret === FTP_MOREDATA) {\n";
echo "    \$ret = ftp_nb_continue(\$conn);\n";
echo "}</code>";
?>`,
    codeExplanation: [
      'ftp_nb_get mengunduh langsung ke path file target lokal.'
    ],
    challenge: {
      instruction: 'Inisialisasi download non-blocking ke "out.dat".',
      starterCode: `<?php
echo "ftp_nb_get(\$conn, 'out.dat', 'data.dat', FTP_BINARY);";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Apa keuntungan ftp_nb_get() pada aplikasi background worker (CLI daemon)?',
      options: [
        'Worker dapat memproses task lain atau memeriksa sinyal termination selama proses download berlangsung',
        'Mempercepat koneksi kabel server',
        'Mengubah format file otomatis',
        'Menghapus file target'
      ],
      correctIndex: 0,
      explanation: 'Sifat non-blocking menjaga loop event daemon tetap responsif.'
    }
  },

  // 282. FTP_NB_PUT()
  {
    id: 'php-ref-ftp-nb-put',
    title: 'PHP ftp_nb_put()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 282,
    overview: 'Kuasai ftp_nb_put(): mengunggah file dari path lokal ke server FTP remote secara non-blocking / asynchronous.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ASYNC UPLOAD</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 282 / 296</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📤 Upload Berkas Non-Blocking (ftp_nb_put)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ftp_nb_put($ftp, $remoteFile, $localFile, $mode, $startpos)</code> memulai upload file dari path lokal ke server FTP tanpa memblokir eksekusi program.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Upload file non-blocking
echo "<h3>Upload Non-Blocking Path:</h3>";
echo "<code>\$ret = ftp_nb_put(\$conn, 'uploads/app.zip', 'app.zip', FTP_BINARY);</code><br>";
echo "<code>while (\$ret === FTP_MOREDATA) {\n";
echo "    \$ret = ftp_nb_continue(\$conn);\n";
echo "}</code>";
?>`,
    codeExplanation: [
      'ftp_nb_put adalah pasangan dari ftp_nb_get untuk operasi pengunggahan berkas asynchronous.'
    ],
    challenge: {
      instruction: 'Pahami inisialisasi upload non-blocking ftp_nb_put.',
      starterCode: `<?php
echo "ftp_nb_put(\$conn, 'remote.sql', 'db.sql', FTP_BINARY);";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Fungsi apakah yang digunakan untuk mengunggah file lokal ke FTP secara asynchronous tanpa perlu membuka fopen() manual?',
      options: [
        'ftp_nb_put()',
        'ftp_nb_fput()',
        'ftp_put()',
        'ftp_upload()'
      ],
      correctIndex: 0,
      explanation: 'ftp_nb_put menerima path string file lokal secara langsung.'
    }
  },

  // 283. FTP_NLIST()
  {
    id: 'php-ref-ftp-nlist',
    title: 'PHP ftp_nlist()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 283,
    overview: 'Kuasai ftp_nlist(): mengembalikan daftar nama-nama file dan direktori sederhana (Simple Name List) dari folder FTP yang ditentukan.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SIMPLE LISTING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 283 / 296</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📋 Daftar Nama Berkas FTP (ftp_nlist)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ftp_nlist($ftp, $directory)</code> mengirimkan perintah <code>NLST</code> dan mengembalikan array 1 dimensi berisi nama-nama file/folder yang ada di dalam direktori tersebut.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Membaca daftar nama berkas di folder 'uploads'
echo "<h3>Daftar Berkas via ftp_nlist():</h3>";
$simulasiList = ["avatar.jpg", "document.pdf", "backup.sql", "photos"];

echo "<ul>";
foreach ($simulasiList as $file) {
    echo "<li>📄 <strong>$file</strong></li>";
}
echo "</ul>";
?>`,
    codeExplanation: [
      'ftp_nlist() sangat cepat untuk sekadar memeriksa daftar nama file tanpa memerlukan informasi izin atau ukuran detail.'
    ],
    challenge: {
      instruction: 'Pahami cara mengambil daftar nama file dengan ftp_nlist($conn, ".").',
      starterCode: `<?php
echo "\$files = ftp_nlist(\$conn, '.');";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Apa perbedaan antara ftp_nlist() dan ftp_rawlist()?',
      options: [
        'ftp_nlist() hanya mengembalikan string nama-nama file sederhana, sedangkan ftp_rawlist() mengembalikan output detail teks stat lengkap (izin, pemilik, tanggal, ukuran)',
        'ftp_nlist() menghapus file',
        'ftp_rawlist() hanya untuk gambar',
        'Keduanya identik'
      ],
      correctIndex: 0,
      explanation: 'ftp_nlist (Name List) mengembalikan array nama bersih, sedangkan rawlist mengembalikan baris detail panjang ala command ls -l.'
    }
  },

  // 284. FTP_PASV()
  {
    id: 'php-ref-ftp-pasv',
    title: 'PHP ftp_pasv()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 284,
    overview: 'Kuasai ftp_pasv(): mengaktifkan atau menonaktifkan Mode Pasif (Passive Mode: PASV) pada koneksi FTP (kunci utama mengatasi masalah koneksi di balik Firewall / Router NAT).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PASSIVE MODE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 284 / 296</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛡️ Mengaktifkan Mode Pasif (ftp_pasv)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ftp_pasv($ftp, $enable)</code> menyetel mode pasif (<code>true</code>). <strong>SANGAT PENTING:</strong> Hampir seluruh koneksi FTP di internet modern memerlukan <code>ftp_pasv($conn, true)</code> agar saluran data transfer tidak diblokir oleh firewall jaringan atau NAT client.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Standar Emas Inisialisasi FTP Aman & Anti-Firewall Block:
echo "<h3>Inisialisasi Standar Mode Pasif:</h3>";
echo "<code>\$conn = ftp_connect('ftp.devgrow.id');</code><br>";
echo "<code>ftp_login(\$conn, 'username', 'password');</code><br>";
echo "<code>ftp_pasv(\$conn, true); // WAJIB: Aktifkan Passive Mode!</code><br>";
echo "<code>// Sekarang operasi ftp_put/ftp_get dijamin lancar</code>";
?>`,
    codeExplanation: [
      'Mode Pasif membuat client yang menginisialisasi saluran data ke server (bukan server yang menghubungi balik client), sehingga aman menembus firewall NAT.'
    ],
    challenge: {
      instruction: 'Aktifkan passive mode dengan ftp_pasv($conn, true).',
      starterCode: `<?php
echo "ftp_pasv(\$conn, true); // Aktifkan pasif mode";
?>`,
      hint: 'Panggil ftp_pasv($conn, true).'
    },
    quiz: {
      question: 'Mengapa pemanggilan ftp_pasv($conn, true) hampir selalu wajib dilakukan setelah login FTP?',
      options: [
        'Agar koneksi transfer data dapat menembus firewall dan router NAT tanpa diblokir oleh sistem keamanan jaringan',
        'Agar password dienkripsi otomatis',
        'Untuk mempercepat loading halaman web',
        'Hanya aturan formalitas'
      ],
      correctIndex: 0,
      explanation: 'Mode pasif memungkinkan koneksi data diinisiasi keluar oleh client, melewati pembatasan inbound firewall.'
    }
  },

  // 285. FTP_PUT()
  {
    id: 'php-ref-ftp-put',
    title: 'PHP ftp_put()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 285,
    overview: 'Kuasai ftp_put(): mengunggah file dari path lokal langsung ke server FTP remote berdasarkan jalur file.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">UPLOAD FILE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 285 / 296</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📤 Mengunggah Berkas ke FTP (ftp_put)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ftp_put($ftp, $remoteFile, $localFile, $mode, $startpos)</code> mengunggah file lokal ke server FTP dalam 1 baris perintah mudah.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Mengunggah file gambar ke server FTP remote
echo "<h3>Penggunaan ftp_put():</h3>";
echo "<code>if (ftp_put(\$conn, 'public_html/banner.jpg', 'local/banner.jpg', FTP_BINARY)) {\n";
echo "    echo 'Upload gambar ke server FTP berhasil!';\n";
echo "}</code>";
?>`,
    codeExplanation: [
      'ftp_put() adalah cara paling sederhana untuk mengunggah file ke FTP server.'
    ],
    challenge: {
      instruction: 'Upload file "invoice.pdf" dengan ftp_put mode FTP_BINARY.',
      starterCode: `<?php
echo "ftp_put(\$conn, 'docs/invoice.pdf', 'invoice.pdf', FTP_BINARY);";
?>`,
      hint: 'Panggil ftp_put($conn, "docs/invoice.pdf", "invoice.pdf", FTP_BINARY).'
    },
    quiz: {
      question: 'Parameter ke-4 apakah pada ftp_put() yang menentukan jenis transfer data?',
      options: [
        'Mode transfer (FTP_BINARY atau FTP_ASCII)',
        'Password FTP',
        'Ukuran file',
        'Nama user'
      ],
      correctIndex: 0,
      explanation: 'Parameter mode menentukan apakah file dikirim sebagai biner (FTP_BINARY) atau teks (FTP_ASCII).'
    }
  },

  // 286. FTP_PWD()
  {
    id: 'php-ref-ftp-pwd',
    title: 'PHP ftp_pwd()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 286,
    overview: 'Kuasai ftp_pwd(): mengembalikan nama path direktori kerja aktif saat ini (Print Working Directory) pada server FTP.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PRINT WORKING DIR</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 286 / 296</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📍 Mengetahui Direktori Aktif FTP (ftp_pwd)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ftp_pwd($ftp)</code> mengirimkan perintah <code>PWD</code> dan mengembalikan string jalur direktori yang sedang aktif di server FTP.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Mengetahui letak folder aktif di FTP
echo "<h3>Penggunaan ftp_pwd():</h3>";
echo "<code>\$currentDir = ftp_pwd(\$conn);</code><br>";
echo "<p>Contoh Hasil: <code>/home/user/public_html/storage</code></p>";
?>`,
    codeExplanation: [
      'ftp_pwd() berguna untuk melacak posisi navigasi direktori saat melakukan upload batch.'
    ],
    challenge: {
      instruction: 'Pahami cara mengambil posisi direktori aktif dengan ftp_pwd.',
      starterCode: `<?php
echo "echo 'Direktori aktif: ' . ftp_pwd(\$conn);";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Apa kepanjangan dari fungsi ftp_pwd()?',
      options: [
        'Print Working Directory',
        'Password Verification',
        'Path Web Directory',
        'Primary Working Drive'
      ],
      correctIndex: 0,
      explanation: 'PWD singkatan dari "Print Working Directory".'
    }
  },

  // 287. FTP_QUIT()
  {
    id: 'php-ref-ftp-quit',
    title: 'PHP ftp_quit()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 287,
    overview: 'Fungsi ftp_quit(): alias resmi 100% dari fungsi ftp_close() untuk menutup sesi koneksi FTP.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ALIAS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 287 / 296</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔄 Alias ftp_quit()</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ftp_quit($ftp)</code> adalah sinonim/alias resmi dari <code>ftp_close()</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Penggunaan ftp_quit():</h3>";
echo "<code>ftp_quit(\$conn); // Identik dengan ftp_close(\$conn)</code>";
?>`,
    codeExplanation: [
      'ftp_quit() dan ftp_close() bekerja secara identik.'
    ],
    challenge: {
      instruction: 'Pahami alias ftp_quit.',
      starterCode: `<?php
echo "ftp_quit(\$conn);";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Fungsi apakah yang merupakan padanan identik dari ftp_quit()?',
      options: [
        'ftp_close()',
        'ftp_delete()',
        'ftp_login()',
        'ftp_chdir()'
      ],
      correctIndex: 0,
      explanation: 'ftp_quit() adalah alias resmi dari fungsi ftp_close().'
    }
  },

  // 288. FTP_RAW()
  {
    id: 'php-ref-ftp-raw',
    title: 'PHP ftp_raw()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 288,
    overview: 'Kuasai ftp_raw(): mengirimkan perintah mentah (Raw FTP Command) apapun secara langsung ke server FTP dan mengembalikan array response teks dari server.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">RAW COMMAND</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 288 / 296</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚡ Mengirim Perintah Mentah FTP (ftp_raw)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ftp_raw($ftp, $command)</code> mengirimkan string perintah protokol FTP kustom (seperti <code>FEAT</code>, <code>OPTS UTF8 ON</code>, <code>TYPE I</code>) dan mengembalikan array pesan balasan langsung dari server.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Mengirim perintah FEAT untuk mengecek fitur server FTP
echo "<h3>Mengirim Perintah Raw FTP:</h3>";
echo "<code>\$response = ftp_raw(\$conn, 'FEAT');</code><br>";
echo "<p>Mengembalikan array response seperti '211-Features:', 'SIZE', 'MDTM', '211 End'.</p>";
?>`,
    codeExplanation: [
      'ftp_raw() memungkinkan pengiriman perintah ekstensi FTP yang tidak memiliki wrapper fungsi khusus di PHP.'
    ],
    challenge: {
      instruction: 'Kirim perintah raw "OPTS UTF8 ON" ke FTP server.',
      starterCode: `<?php
echo "\$res = ftp_raw(\$conn, 'OPTS UTF8 ON');";
?>`,
      hint: 'Panggil ftp_raw($conn, "OPTS UTF8 ON").'
    },
    quiz: {
      question: 'Tipe data apakah yang dihasilkan oleh fungsi ftp_raw($conn, $command)?',
      options: [
        'Array berisi baris-baris string respon teks yang dikembalikan oleh server FTP',
        'String tunggal',
        'Integer kode status saja',
        'Boolean'
      ],
      correctIndex: 0,
      explanation: 'ftp_raw mengembalikan array baris response dari server.'
    }
  },

  // 289. FTP_RAWLIST()
  {
    id: 'php-ref-ftp-rawlist',
    title: 'PHP ftp_rawlist()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 289,
    overview: 'Kuasai ftp_rawlist(): mengembalikan daftar lengkap isi direktori dalam format baris detail teks UNIX mentah (seperti output perintah terminal "ls -l").',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">RAW LISTING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 289 / 296</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📜 Daftar Detail Berkas Mentah (ftp_rawlist)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ftp_rawlist($ftp, $directory, $recursive)</code> mengirimkan perintah <code>LIST</code> dan mengembalikan array string output direktori UNIX (permissions, owner, group, size, date, filename).
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Membaca daftar isi folder secara detail
echo "<h3>Output ftp_rawlist():</h3>";
$simulasiRaw = [
    "drwxr-xr-x   2 user group      4096 Aug 27 15:30 documents",
    "-rw-r--r--   1 user group    245670 Aug 27 15:35 laporan.pdf"
];

echo "<pre style='background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 8px;'>";
foreach ($simulasiRaw as $line) {
    echo htmlspecialchars($line) . "\n";
}
echo "</pre>";
?>`,
    codeExplanation: [
      'ftp_rawlist mengembalikan baris detail panjang format ls -l.'
    ],
    challenge: {
      instruction: 'Pahami cara membaca direktori dengan ftp_rawlist($conn, ".").',
      starterCode: `<?php
echo "\$rawList = ftp_rawlist(\$conn, '.');";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Informasi apa sajakah yang termuat dalam setiap baris elemen array hasil ftp_rawlist()?',
      options: [
        'Izin berkas (drwxr-xr-x), jumlah link, pemilik, grup, ukuran bytes, tanggal modifikasi, dan nama file',
        'Hanya nama file saja',
        'Hanya ukuran file saja',
        'Password FTP'
      ],
      correctIndex: 0,
      explanation: 'ftp_rawlist menyediakan baris lengkap output POSIX directory listing.'
    }
  },

  // 290. FTP_RENAME()
  {
    id: 'php-ref-ftp-rename',
    title: 'PHP ftp_rename()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 290,
    overview: 'Kuasai ftp_rename(): mengganti nama file/folder atau memindahkannya ke lokasi direktori lain pada server FTP remote.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">RENAME REMOTE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 290 / 296</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔄 Mengganti Nama / Pindah File di FTP (ftp_rename)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ftp_rename($ftp, $from, $to)</code> mengirimkan perintah <code>RNFR</code> (Rename From) dan <code>RNTO</code> (Rename To) untuk mengubah nama berkas di server remote.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Mengganti nama file di server FTP
echo "<h3>Penggunaan ftp_rename():</h3>";
echo "<code>if (ftp_rename(\$conn, 'draft.txt', 'final_v1.txt')) {\n";
echo "    echo 'File di server FTP berhasil diubah namanya!';\n";
echo "}</code>";
?>`,
    codeExplanation: [
      'ftp_rename() mengembalikan boolean true jika penggantian nama sukses.'
    ],
    challenge: {
      instruction: 'Ganti nama file "old.zip" menjadi "new.zip" di FTP server.',
      starterCode: `<?php
echo "ftp_rename(\$conn, 'old.zip', 'new.zip');";
?>`,
      hint: 'Panggil ftp_rename($conn, "old.zip", "new.zip").'
    },
    quiz: {
      question: 'Perintah protokol FTP ganda apakah yang dikirimkan saat fungsi ftp_rename() dipanggil?',
      options: [
        'RNFR (Rename From) lalu RNTO (Rename To)',
        'MOVE lalu SAVE',
        'COPY lalu DELETE',
        'NAME lalu RENAME'
      ],
      correctIndex: 0,
      explanation: 'RFC 959 mendefinisikan mekanisme rename dengan sekuens perintah RNFR diikuti RNTO.'
    }
  },

  // 291. FTP_RMDIR()
  {
    id: 'php-ref-ftp-rmdir',
    title: 'PHP ftp_rmdir()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 291,
    overview: 'Kuasai ftp_rmdir(): menghapus folder direktori kosong pada server FTP remote.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">RMDIR REMOTE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 291 / 296</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📁 Menghapus Folder di FTP (ftp_rmdir)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ftp_rmdir($ftp, $directory)</code> mengirimkan perintah <code>RMD</code> untuk menghapus folder direktori yang sudah dalam kondisi kosong di server remote.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Menghapus direktori kosong di FTP
echo "<h3>Penggunaan ftp_rmdir():</h3>";
echo "<code>if (ftp_rmdir(\$conn, 'temp_folder')) {\n";
echo "    echo 'Folder direktori berhasil dihapus dari server FTP!';\n";
echo "}</code>";
?>`,
    codeExplanation: [
      'Sama seperti rmdir lokal, folder harus kosong sebelum ftp_rmdir dipanggil.'
    ],
    challenge: {
      instruction: 'Pahami cara menghapus direktori remote dengan ftp_rmdir.',
      starterCode: `<?php
echo "ftp_rmdir(\$conn, 'old_dir');";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Perintah protokol FTP apakah yang dikirim oleh ftp_rmdir() ke server?',
      options: [
        'RMD',
        'RMDIR',
        'DELDIR',
        'DROP'
      ],
      correctIndex: 0,
      explanation: 'ftp_rmdir mengirimkan perintah RFC 959 "RMD" (Remove Directory).'
    }
  },

  // 292. FTP_SET_OPTION()
  {
    id: 'php-ref-ftp-set-option',
    title: 'PHP ftp_set_option()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 292,
    overview: 'Kuasai ftp_set_option(): menyetel opsi konfigurasi runtime koneksi FTP (seperti memperpanjang durasi batas waktu timeout FTP_TIMEOUT_SEC atau mengaktifkan FTP_AUTOSEEK).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SET OPTIONS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 292 / 296</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚙️ Mengatur Opsi Koneksi FTP (ftp_set_option)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ftp_set_option($ftp, $option, $value)</code> mengatur parameter koneksi. Sangat berguna untuk menaikkan batas timeout hingga 300 detik (<code>FTP_TIMEOUT_SEC</code>) saat mentransfer file berukuran sangat besar.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Setel batas waktu timeout menjadi 300 detik (5 menit)
echo "<h3>Mengatur Timeout FTP:</h3>";
echo "<code>ftp_set_option(\$conn, FTP_TIMEOUT_SEC, 300);</code><br>";
echo "<p>Mencegah koneksi terputus saat proses upload file besar sedang berlangsung.</p>";
?>`,
    codeExplanation: [
      'ftp_set_option menerima opsi seperti FTP_TIMEOUT_SEC dan FTP_AUTOSEEK.'
    ],
    challenge: {
      instruction: 'Setel timeout FTP menjadi 120 detik dengan ftp_set_option.',
      starterCode: `<?php
echo "ftp_set_option(\$conn, FTP_TIMEOUT_SEC, 120);";
?>`,
      hint: 'Panggil ftp_set_option($conn, FTP_TIMEOUT_SEC, 120).'
    },
    quiz: {
      question: 'Kapan kita perlu memanggil ftp_set_option($conn, FTP_TIMEOUT_SEC, 600)?',
      options: [
        'Ketika akan mengunggah atau mengunduh file berukuran besar yang membutuhkan waktu transmisi lama agar socket tidak terputus karena timeout bawaan',
        'Untuk mengubah password',
        'Untuk mematikan komputer',
        'Hanya untuk file teks'
      ],
      correctIndex: 0,
      explanation: 'Menaikkan timeout mencegah error koneksi time-out saat transfer file besar.'
    }
  },

  // 293. FTP_SITE()
  {
    id: 'php-ref-ftp-site',
    title: 'PHP ftp_site()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 293,
    overview: 'Fungsi ftp_site(): mengirimkan perintah spesifik server (SITE Command) yang didefinisikan khusus oleh implementasi daemon FTP tertentu.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SITE COMMAND</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 293 / 296</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚙️ Mengirim Perintah SITE (ftp_site)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ftp_site($ftp, $command)</code> mengirimkan perintah <code>SITE</code> seperti <code>SITE CHMOD 0755 index.php</code> atau perintah khusus administrasi server.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Mengirim perintah SITE CHMOD
echo "<h3>Penggunaan ftp_site():</h3>";
echo "<code>ftp_site(\$conn, 'CHMOD 0755 script.php');</code>";
?>`,
    codeExplanation: [
      'ftp_site() mengeksekusi perintah kustom yang didukung oleh server vendor FTP.'
    ],
    challenge: {
      instruction: 'Pahami fungsi ftp_site.',
      starterCode: `<?php
echo "ftp_site(\$conn, 'HELP');";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Perintah protokol FTP apakah yang menjadi awalan pada ftp_site()?',
      options: [
        'SITE',
        'EXEC',
        'RUN',
        'ADMIN'
      ],
      correctIndex: 0,
      explanation: 'ftp_site mengirimkan awalan perintah "SITE".'
    }
  },

  // 294. FTP_SIZE()
  {
    id: 'php-ref-ftp-size',
    title: 'PHP ftp_size()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 294,
    overview: 'Kuasai ftp_size(): mengembalikan ukuran file remote dalam satuan Bytes pada server FTP.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">FILE SIZE REMOTE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 294 / 296</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📏 Menghitung Ukuran File Remote (ftp_size)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ftp_size($ftp, $filename)</code> mengirim perintah <code>SIZE</code> untuk mendapatkan ukuran berkas dalam Bytes, atau mengembalikan <code>-1</code> jika berkas adalah sebuah direktori atau tidak ditemukan.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Mengambil ukuran file remote
echo "<h3>Mengukur Ukuran Berkas di FTP:</h3>";
echo "<code>\$bytes = ftp_size(\$conn, 'downloads/installer.iso');</code><br>";
echo "<code>if (\$bytes != -1) {\n";
echo "    echo 'Ukuran file: ' . round(\$bytes / (1024*1024), 2) . ' MB';\n";
echo "}</code>";
?>`,
    codeExplanation: [
      'ftp_size mengembalikan integer ukuran bytes, atau -1 jika target adalah folder direktori.'
    ],
    challenge: {
      instruction: 'Ukur ukuran file "video.mp4" di FTP server.',
      starterCode: `<?php
echo "\$sz = ftp_size(\$conn, 'video.mp4');";
?>`,
      hint: 'Panggil ftp_size($conn, "video.mp4").'
    },
    quiz: {
      question: 'Apa nilai yang dikembalikan oleh ftp_size() jika target yang diperiksa adalah sebuah FOLDER direktori?',
      options: [
        '-1 (minus satu)',
        '0',
        'false',
        'Ukuran total folder'
      ],
      correctIndex: 0,
      explanation: 'Perintah SIZE pada FTP hanya berlaku untuk file, sehingga mengembalikan -1 untuk folder.'
    }
  },

  // 295. FTP_SSL_CONNECT()
  {
    id: 'php-ref-ftp-ssl-connect',
    title: 'PHP ftp_ssl_connect()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 295,
    overview: 'Kuasai ftp_ssl_connect(): membuka koneksi FTPS terenkripsi SSL/TLS (Explicit FTPS) untuk menjamin transmisi username, password, dan file aman dari penyadapan sniffing jaringan.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">FTPS ENCRYPTED</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 295 / 296</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔒 Membuka Koneksi FTPS Terenkripsi SSL (ftp_ssl_connect)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ftp_ssl_connect($hostname, $port, $timeout)</code> menginisialisasi koneksi aman FTPS (FTP over SSL/TLS). Mengenkripsi seluruh lalu lintas data control channel sehingga kredensial login tidak dikirimkan dalam bentuk plain-text.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Koneksi FTPS Aman Terenkripsi SSL/TLS
echo "<h3>Membuka Koneksi FTPS Aman:</h3>";
echo "<code>if (function_exists('ftp_ssl_connect')) {\n";
echo "    \$conn = ftp_ssl_connect('ftp.secure-bank.com', 21, 60);\n";
echo "    if (\$conn && ftp_login(\$conn, 'user', 'pass')) {\n";
echo "        ftp_pasv(\$conn, true);\n";
echo "        echo 'Koneksi FTPS terenkripsi berhasil!';\n";
echo "        ftp_close(\$conn);\n";
echo "    }\n";
echo "}</code>";
?>`,
    codeExplanation: [
      'ftp_ssl_connect() memerlukan ekstensi OpenSSL aktif pada instalasi PHP.',
      'Sangat direkomendasikan dibandingkan ftp_connect() biasa untuk lingkungan produksi.'
    ],
    challenge: {
      instruction: 'Buka koneksi aman FTPS dengan ftp_ssl_connect("ftp.secure.com").',
      starterCode: `<?php
echo "\$conn = ftp_ssl_connect('ftp.secure.com');";
?>`,
      hint: 'Panggil ftp_ssl_connect("ftp.secure.com").'
    },
    quiz: {
      question: 'Apa keunggulan utama ftp_ssl_connect() dibandingkan ftp_connect() standar?',
      options: [
        'Mengamankan saluran komunikasi dengan enkripsi SSL/TLS sehingga username, password, dan konten file tidak dapat disadap oleh hacker di jaringan',
        'Mempercepat koneksi 10x lipat',
        'Otomatis menghapus file duplikat',
        'Tidak membutuhkan username'
      ],
      correctIndex: 0,
      explanation: 'FTPS (Explicit SSL/TLS) melindungi privasi dan integritas data transmisi jaringan.'
    }
  },

  // 296. FTP_SYSTYPE()
  {
    id: 'php-ref-ftp-systype',
    title: 'PHP ftp_systype()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 296,
    overview: 'Kuasai ftp_systype(): mengembalikan identitas tipe sistem operasi server FTP remote (seperti "UNIX" atau "Windows_NT").',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SYSTEM IDENTIFIER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 296 / 296</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🖥️ Mengidentifikasi OS Server FTP (ftp_systype)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ftp_systype($ftp)</code> mengirimkan perintah <code>SYST</code> dan mengembalikan string identifier sistem operasi server remote (misal: <code>"UNIX"</code> atau <code>"WINDOWS_NT"</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Mengetahui tipe sistem operasi server FTP
echo "<h3>Identifikasi Sistem Operasi FTP Server:</h3>";
echo "<code>\$osType = ftp_systype(\$conn);</code><br>";
echo "<p>Hasil: <strong style='color: #059669;'>UNIX</strong> (atau Windows_NT)</p>";
?>`,
    codeExplanation: [
      'ftp_systype() berguna saat script perlu menentukan format path separator (/ vs \\) atau parser direktori yang tepat.'
    ],
    challenge: {
      instruction: 'Ambil tipe OS server FTP dengan ftp_systype($conn).',
      starterCode: `<?php
echo "echo 'Tipe OS Server: ' . ftp_systype(\$conn);";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Perintah protokol FTP apakah yang dikirimkan oleh ftp_systype() ke server?',
      options: [
        'SYST',
        'SYSTEM',
        'OS',
        'INFO'
      ],
      correctIndex: 0,
      explanation: 'ftp_systype mengirimkan command standar RFC 959 "SYST".'
    }
  }
];

module.exports = phpPart27RefFtp2;
