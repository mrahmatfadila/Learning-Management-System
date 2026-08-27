// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (FILESYSTEM PART 3: 221-237)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart23RefFilesystem3 = [
  // 221. IS_FILE()
  {
    id: 'php-ref-is-file',
    title: 'PHP is_file()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 221,
    overview: 'Kuasai is_file(): memeriksa apakah suatu path adalah BERKAS REGULER (bukan folder direktori dan bukan device/socket).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">FILESYSTEM</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 221 / 254</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📄 Validasi Berkas Reguler (is_file)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>is_file($filename)</code> mengembalikan boolean <code>true</code> jika target ada dan merupakan file berkas reguler (bukan folder direktori). Sangat umum digunakan saat memfilter hasil looping folder agar tidak memproses subfolder secara tidak sengaja.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$targetFile = __FILE__;
$targetDir = __DIR__;

echo "<h3>Hasil Pemeriksaan is_file():</h3>";
echo "<ul>";
echo "<li>__FILE__: " . (is_file($targetFile) ? "<strong style='color: green;'>✓ Valid File Berkas</strong>" : "Bukan file") . "</li>";
echo "<li>__DIR__: " . (is_file($targetDir) ? "✓ Valid File" : "<strong style='color: red;'>✗ Bukan File (Ini adalah Direktori)</strong>") . "</li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'is_file() mengembalikan true hanya untuk file berkas nyata.',
      'Membedakan file dari folder, symlink ke folder, atau stream device.'
    ],
    challenge: {
      instruction: 'Periksa apakah __FILE__ adalah berkas reguler dengan is_file(__FILE__).',
      starterCode: `<?php
echo is_file(__FILE__) ? "Berkas valid" : "Bukan berkas";
?>`,
      hint: 'Panggil is_file(__FILE__).'
    },
    quiz: {
      question: 'Apa hasil kembalian dari is_file($path) jika $path menunjuk ke sebuah folder direktori?',
      options: [
        'Boolean false',
        'Boolean true',
        'Null',
        'Fatal Error'
      ],
      correctIndex: 0,
      explanation: 'is_file mengembalikan false untuk folder direktori.'
    }
  },

  // 222. IS_LINK()
  {
    id: 'php-ref-is-link',
    title: 'PHP is_link()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 222,
    overview: 'Fungsi is_link(): memeriksa apakah suatu path merupakan tautan simbolik (Symbolic Link / Symlink).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SYMLINK CHECK</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 222 / 254</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔗 Memeriksa Tautan Simbolik (is_link)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>is_link($filename)</code> mengembalikan boolean <code>true</code> jika path tersebut adalah sebuah symbolic link (pintasan filesystem yang menunjuk ke target lain).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$fileAsli = __DIR__ . "/asli.txt";
$fileLink = __DIR__ . "/tautan.lnk";

file_put_contents($fileAsli, "Data Asli");

echo "<h3>Hasil Pemeriksaan is_link():</h3>";
echo "<p>Apakah file asli adalah symlink: <strong>" . (is_link($fileAsli) ? "Ya" : "Bukan (File Fisik)") . "</strong></p>";

unlink($fileAsli);
?>`,
    codeExplanation: [
      'is_link() membedakan antara file fisik asli dan tautan shortcut simbolik.'
    ],
    challenge: {
      instruction: 'Periksa status is_link pada file saat ini.',
      starterCode: `<?php
echo "Status link: " . (is_link(__FILE__) ? "Symlink" : "File Asli");
?>`,
      hint: 'Panggil is_link(__FILE__).'
    },
    quiz: {
      question: 'Apa fungsi dari is_link()?',
      options: [
        'Memeriksa apakah sebuah file merupakan symbolic link (shortcut)',
        'Memeriksa apakah URL website aktif',
        'Memeriksa hyperlink HTML',
        'Membuat symlink baru'
      ],
      correctIndex: 0,
      explanation: 'is_link() khusus memeriksa apakah berkas bertipe symbolic link pada filesystem.'
    }
  },

  // 223. IS_READABLE()
  {
    id: 'php-ref-is-readable',
    title: 'PHP is_readable()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 223,
    overview: 'Kuasai is_readable(): memeriksa apakah file atau folder memiliki izin untuk dibaca (Read Permission) oleh user proses server PHP.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">READ PERMISSION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 223 / 254</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📖 Memeriksa Izin Baca (is_readable)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>is_readable($filename)</code> mengembalikan boolean <code>true</code> jika file ada dan sistem operasi mengizinkan PHP untuk membaca isinya. Pemeriksaan wajib sebelum <code>file_get_contents()</code> untuk mencegah Permission Denied warning.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$target = __FILE__;

echo "<h3>Hasil Pemeriksaan is_readable():</h3>";
if (is_readable($target)) {
    echo "<p style='color: green;'><strong>✓ File dapat dibaca oleh PHP server dengan aman.</strong></p>";
} else {
    echo "<p style='color: red;'><strong>✗ Akses baca ditolak oleh sistem operasi.</strong></p>";
}
?>`,
    codeExplanation: [
      'is_readable() memastikan hak akses read sudah diberikan di level OS.'
    ],
    challenge: {
      instruction: 'Periksa apakah __FILE__ dapat dibaca dengan is_readable(__FILE__).',
      starterCode: `<?php
echo is_readable(__FILE__) ? "Dapat dibaca" : "Tidak dapat dibaca";
?>`,
      hint: 'Panggil is_readable(__FILE__).'
    },
    quiz: {
      question: 'Kapan is_readable() wajib dipanggil sebelum membaca file?',
      options: [
        'Sebelum memanggil file_get_contents() atau fopen("r") untuk menghindari error "Permission denied"',
        'Hanya saat upload gambar',
        'Untuk memformat tanggal',
        'Tidak pernah'
      ],
      correctIndex: 0,
      explanation: 'is_readable mencegah kegagalan runtime saat file tidak memiliki izin baca.'
    }
  },

  // 224. IS_UPLOADED_FILE()
  {
    id: 'php-ref-is-uploaded-file',
    title: 'PHP is_uploaded_file()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 224,
    overview: 'Kuasai is_uploaded_file(): standar wajib keamanan OWASP untuk memvalidasi bahwa file sementara benar-benar diunggah melalui protokol HTTP POST form multipart/form-data.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SECURITY SHIELD</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 224 / 254</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛡️ Keamanan Validasi File Upload (is_uploaded_file)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>is_uploaded_file($filename)</code> memverifikasi bahwa file di <code>$_FILES['userfile']['tmp_name']</code> benar-benar hasil upload formulir pengguna. Mencegah hacker memanipulasi parameter form untuk menyusup dan membaca file internal server (seperti <code>/etc/passwd</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Simulasi penanganan upload file
$fakePath = "/tmp/phpXYZ123";

echo "<h3>Hasil Pengujian Keamanan is_uploaded_file():</h3>";
if (is_uploaded_file($fakePath)) {
    echo "<p style='color: green;'>File adalah hasil upload HTTP POST yang sah.</p>";
} else {
    echo "<p style='color: #dc2626;'><strong>[PROTEKSI AKTIF] File bukan hasil upload HTTP POST yang sah. Operasi ditolak!</strong></p>";
}
?>`,
    codeExplanation: [
      'is_uploaded_file() adalah pertahanan pertama anti-Local File Inclusion (LFI).',
      'Wajib dipanggil sebelum memindahkan file dengan move_uploaded_file().'
    ],
    challenge: {
      instruction: 'Uji fungsi keamanan is_uploaded_file.',
      starterCode: `<?php
echo is_uploaded_file(__FILE__) ? "File Upload" : "Bukan File Upload HTTP";
?>`,
      hint: 'Panggil is_uploaded_file(__FILE__).'
    },
    quiz: {
      question: 'Mengapa is_uploaded_file() sangat penting dalam aspek keamanan web (OWASP)?',
      options: [
        'Mencegah penyerang memanipulasi jalur file sistem internal (LFI Attack) dengan memastikan file benar-benar diunggah via HTTP POST',
        'Mempercepat kecepatan koneksi internet upload',
        'Mengubah ukuran file otomatis',
        'Hanya untuk file ZIP'
      ],
      correctIndex: 0,
      explanation: 'is_uploaded_file menjamin integritas jalur file tmp_name berasal dari upload HTTP resmi.'
    }
  },

  // 225. IS_WRITABLE()
  {
    id: 'php-ref-is-writable',
    title: 'PHP is_writable()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 225,
    overview: 'Kuasai is_writable(): memeriksa apakah suatu file atau folder direktori memiliki izin untuk ditulis/diedit (Write Permission) oleh proses server PHP.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">WRITE PERMISSION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 225 / 254</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">✍️ Memeriksa Izin Tulis (is_writable)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>is_writable($filename)</code> mengembalikan boolean <code>true</code> jika PHP memiliki hak akses untuk membuat, mengedit, atau menghapus file di direktori tersebut. Wajib diperiksa saat installer CMS / aplikasi mengecek kesiapan folder <code>storage/</code> dan <code>uploads/</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$target = __DIR__;

echo "<h3>Hasil Pemeriksaan Izin Tulis Direktori (is_writable):</h3>";
if (is_writable($target)) {
    echo "<p style='color: green;'><strong>✓ Folder dapat ditulisi (Siap menyimpan file upload & cache).</strong></p>";
} else {
    echo "<p style='color: red;'><strong>✗ Folder Read-Only (Harap ubah izin dengan chmod 0755 / 0775).</strong></p>";
}
?>`,
    codeExplanation: [
      'is_writable() memeriksa apakah folder siap menampung file baru.'
    ],
    challenge: {
      instruction: 'Periksa apakah folder __DIR__ dapat ditulisi dengan is_writable(__DIR__).',
      starterCode: `<?php
echo is_writable(__DIR__) ? "Folder Writable" : "Folder Read-Only";
?>`,
      hint: 'Panggil is_writable(__DIR__).'
    },
    quiz: {
      question: 'Kapan fungsi is_writable() paling sering dimanfaatkan?',
      options: [
        'Pada halaman installer / health check aplikasi untuk memastikan folder storage, logs, dan uploads memiliki izin tulis',
        'Saat menghubungkan database MySQL',
        'Untuk memvalidasi format email',
        'Hanya saat user logout'
      ],
      correctIndex: 0,
      explanation: 'is_writable memvalidasi hak akses tulis folder sebelum aplikasi memproses file upload atau menulis log.'
    }
  },

  // 226. IS_WRITEABLE()
  {
    id: 'php-ref-is-writeable',
    title: 'PHP is_writeable()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 226,
    overview: 'Fungsi is_writeable(): alias resmi 100% dari fungsi is_writable().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ALIAS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 226 / 254</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔄 Alias is_writeable()</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>is_writeable($filename)</code> adalah sinonim/alias resmi dari <code>is_writable()</code> (perbedaan ejaan bahasa Inggris dengan huruf 'e').
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<p>Status is_writeable: <strong>" . (is_writeable(__DIR__) ? "Writable" : "Read-Only") . "</strong></p>";
?>`,
    codeExplanation: [
      'is_writeable() identik dengan is_writable().'
    ],
    challenge: {
      instruction: 'Uji fungsi is_writeable(__DIR__).',
      starterCode: `<?php
echo is_writeable(__DIR__) ? "Ya" : "Tidak";
?>`,
      hint: 'Panggil is_writeable(__DIR__).'
    },
    quiz: {
      question: 'Fungsi apakah yang merupakan padanan identik dari is_writeable()?',
      options: [
        'is_writable()',
        'is_readable()',
        'is_file()',
        'chmod()'
      ],
      correctIndex: 0,
      explanation: 'is_writeable adalah alias ejaan alternatif dari is_writable.'
    }
  },

  // 227. LCHGRP()
  {
    id: 'php-ref-lchgrp',
    title: 'PHP lchgrp()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 227,
    overview: 'Fungsi lchgrp(): mengubah grup kepemilikan dari sebuah tautan simbolik (symlink) itu sendiri, bukan file yang ditunjuknya.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SYMLINK GROUP</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 227 / 254</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">👥 Mengubah Grup Tautan Simbolik (lchgrp)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>lchgrp($filename, $group)</code> mengubah kepemilikan grup pada file symlink tanpa mengikuti target rujukan aslinya (berbeda dengan <code>chgrp</code> yang mengubah target).
          </p>
        </div>
      </div>
    `,
    code: `<?php
if (function_exists('lchgrp')) {
    echo "<h3>Fungsi lchgrp() Tersedia di Server Linux ini.</h3>";
} else {
    echo "<p>lchgrp() khusus digunakan pada sistem operasi Unix/Linux.</p>";
}
?>`,
    codeExplanation: [
      'Awalan huruf "l" menandakan operasi dilakukan pada link itu sendiri.'
    ],
    challenge: {
      instruction: 'Periksa ketersediaan fungsi lchgrp.',
      starterCode: `<?php
echo function_exists("lchgrp") ? "lchgrp didukung" : "Khusus Unix/Linux";
?>`,
      hint: 'Panggil function_exists("lchgrp").'
    },
    quiz: {
      question: 'Apa perbedaan antara chgrp() dan lchgrp() saat diterapkan pada sebuah Symbolic Link?',
      options: [
        'lchgrp() mengubah grup pada file symlink itu sendiri, sedangkan chgrp() mengikuti link dan mengubah grup file target aslinya',
        'lchgrp() hanya untuk gambar',
        'chgrp() menghapus file',
        'Keduanya identik'
      ],
      correctIndex: 0,
      explanation: 'lchgrp (Link Change Group) memodifikasi symlink langsung tanpa dereferencing target.'
    }
  },

  // 228. LCHOWN()
  {
    id: 'php-ref-lchown',
    title: 'PHP lchown()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 228,
    overview: 'Fungsi lchown(): mengubah user pemilik (owner) dari sebuah tautan simbolik (symlink) itu sendiri di sistem Unix/Linux.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SYMLINK OWNER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 228 / 254</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">👤 Mengubah Pemilik Tautan Simbolik (lchown)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>lchown($filename, $user)</code> mengubah user pemilik pada symlink tanpa mengubah pemilik dari file target yang dirujuknya.
          </p>
        </div>
      </div>
    `,
    code: `<?php
if (function_exists('lchown')) {
    echo "<h3>Fungsi lchown() Tersedia di Server Linux.</h3>";
} else {
    echo "<p>lchown() khusus untuk lingkungan Unix/Linux.</p>";
}
?>`,
    codeExplanation: [
      'lchown beroperasi langsung pada entri symlink.'
    ],
    challenge: {
      instruction: 'Periksa ketersediaan fungsi lchown.',
      starterCode: `<?php
echo function_exists("lchown") ? "lchown didukung" : "Khusus Unix/Linux";
?>`,
      hint: 'Panggil function_exists("lchown").'
    },
    quiz: {
      question: 'Apa fungsi dari lchown()?',
      options: [
        'Mengubah pemilik dari file symlink itu sendiri tanpa mengubah pemilik target aslinya',
        'Mengubah nama folder',
        'Menghapus user',
        'Mengubah database'
      ],
      correctIndex: 0,
      explanation: 'lchown (Link Change Owner) mengubah pemilik berkas symlink.'
    }
  },

  // 229. LINK()
  {
    id: 'php-ref-link',
    title: 'PHP link()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 229,
    overview: 'Fungsi link(): membuat Hard Link fisik pada filesystem sistem operasi (menunjuk ke inode yang sama).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">HARD LINK</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 229 / 254</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔗 Membuat Hard Link (link)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>link($target, $link)</code> membuat <em>Hard Link</em>. Berbeda dengan soft link (symlink), hard link menunjuk langsung ke blok Inode fisik file sehingga data tetap utuh meskipun file aslinya dihapus.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$fileAsli = __DIR__ . "/master_data.txt";
$fileHardLink = __DIR__ . "/linked_data.txt";

file_put_contents($fileAsli, "Data Master Penting");

if (@link($fileAsli, $fileHardLink)) {
    echo "<h3>Hasil Pembuatan Hard Link:</h3>";
    echo "<p style='color: green;'>Hard link berhasil dibuat. Keduanya berbagi Inode yang sama.</p>";
    unlink($fileHardLink);
} else {
    echo "<p>Operasi link() memerlukan izin filesystem khusus.</p>";
}

unlink($fileAsli);
?>`,
    codeExplanation: [
      'Hard Link menghubungkan 2 nama berkas berbeda ke 1 data fisik harddisk yang sama.'
    ],
    challenge: {
      instruction: 'Pahami perbedaan antara link() (Hard Link) dan symlink() (Soft Link).',
      starterCode: `<?php
echo "link() membuat Hard Link, symlink() membuat Soft Link.";
?>`,
      hint: 'Klik RUN untuk mereview link().'
    },
    quiz: {
      question: 'Apa karakteristik utama dari sebuah Hard Link yang dibuat dengan link()?',
      options: [
        'Kedua file menunjuk ke Inode fisik yang sama sehingga jika salah satu file dihapus, data fisik di harddisk tidak akan hilang',
        'Hard link hanya berupa shortcut kecil',
        'Hard link otomatis menghapus file target',
        'Hanya untuk file gambar'
      ],
      correctIndex: 0,
      explanation: 'Hard Link adalah referensi nama kedua yang langsung terikat pada Inode fisik file di disk.'
    }
  },

  // 230. LINKINFO()
  {
    id: 'php-ref-linkinfo',
    title: 'PHP linkinfo()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 230,
    overview: 'Fungsi linkinfo(): mengembalikan nilai field st_dev (Device ID) dari tautan berkas di sistem Unix/Linux.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">LINK INFO</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 230 / 254</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">ℹ️ Informasi Perangkat Link (linkinfo)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>linkinfo($path)</code> memverifikasi apakah suatu link benar-benar ada dan mengembalikan device ID dari struktur data stat C.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$info = @linkinfo(__FILE__);
echo "<h3>Hasil Penggunaan linkinfo():</h3>";
echo "<p>Status Link Device ID: <strong>" . ($info ? $info : "Bukan symlink / Tidak terdeteksi") . "</strong></p>";
?>`,
    codeExplanation: [
      'linkinfo() mengembalikan integer st_dev atau 0/false jika link rusak (broken link).'
    ],
    challenge: {
      instruction: 'Uji fungsi linkinfo(__FILE__).',
      starterCode: `<?php
echo "Linkinfo: " . @linkinfo(__FILE__);
?>`,
      hint: 'Panggil linkinfo(__FILE__).'
    },
    quiz: {
      question: 'Kapan linkinfo() paling sering digunakan?',
      options: [
        'Untuk memverifikasi apakah sebuah link rujukan benar-benar ada dan tidak rusak (broken)',
        'Untuk mengukur kecepatan internet',
        'Untuk menghapus cache',
        'Hanya untuk JSON'
      ],
      correctIndex: 0,
      explanation: 'linkinfo memeriksa keabsahan link dan mengembalikan device ID sistem.'
    }
  },

  // 231. LSTAT()
  {
    id: 'php-ref-lstat',
    title: 'PHP lstat()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 231,
    overview: 'Fungsi lstat(): mengembalikan array statistik informasi dari sebuah file atau symbolic link itu sendiri (tanpa dereferencing target).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">LSTAT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 231 / 254</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📊 Statistik Tautan Simbolik (lstat)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>lstat($filename)</code> identik dengan <code>stat()</code>, namun jika diterapkan pada symlink, <code>lstat()</code> membaca metadata dari file symlink itu sendiri.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$stat = lstat(__FILE__);

echo "<h3>Hasil Pengukuran lstat():</h3>";
echo "<ul>";
echo "<li>Ukuran: <strong>{$stat['size']} Bytes</strong></li>";
echo "<li>Inode: <strong>{$stat['ino']}</strong></li>";
echo "<li>Permissions: <strong>" . substr(sprintf('%o', $stat['mode']), -4) . "</strong></li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'lstat() mengembalikan array 13 elemen statistik berkas.'
    ],
    challenge: {
      instruction: 'Ambil statistik ukuran file dari lstat(__FILE__)[\'size\'].',
      starterCode: `<?php
$s = lstat(__FILE__);
echo "Ukuran: " . $s['size'] . " bytes";
?>`,
      hint: 'Panggil lstat(__FILE__).'
    },
    quiz: {
      question: 'Apa perbedaan antara stat() dan lstat() ketika dijalankan pada file Symbolic Link?',
      options: [
        'lstat() mengembalikan statistik dari file symlink itu sendiri, sedangkan stat() mengembalikan statistik dari file target yang ditunjuk',
        'lstat() hanya untuk folder',
        'stat() menghapus file',
        'Keduanya identik'
      ],
      correctIndex: 0,
      explanation: 'lstat menginspeksi symlink langsung tanpa dereferencing ke target aslinya.'
    }
  },

  // 232. MKDIR()
  {
    id: 'php-ref-mkdir',
    title: 'PHP mkdir()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 232,
    overview: 'Kuasai mkdir(): membuat folder direktori baru dengan dukungan pembuatan folder bersarang otomatis (Recursive: $recursive = true) dan izin akses kustom.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">MKDIR</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 232 / 254</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📁 Membuat Folder Direktori Baru (mkdir)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>mkdir($pathname, $mode, $recursive)</code> membuat folder baru. <strong>PENTING:</strong> Selalu gunakan <code>$recursive = true</code> (parameter ke-3) agar PHP otomatis membuat seluruh subfolder induk jika belum ada (misal: <code>uploads/2026/08/avatars/</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$folderUpload = __DIR__ . "/storage/uploads/2026/08";

// Buat folder bersarang otomatis (Recursive = true)
if (!is_dir($folderUpload)) {
    mkdir($folderUpload, 0755, true);
    echo "<h3>Hasil Penggunaan mkdir(..., 0755, true):</h3>";
    echo "<p style='color: green;'><strong>✓ Seluruh pohon folder storage/uploads/2026/08 berhasil dibuat!</strong></p>";
}

// Bersihkan folder demo
rmdir($folderUpload);
rmdir(dirname($folderUpload));
rmdir(dirname($folderUpload, 2));
rmdir(dirname($folderUpload, 3));
?>`,
    codeExplanation: [
      'Parameter ketiga true (recursive) mencegah error "No such file or directory" saat parent folder belum dibuat.'
    ],
    challenge: {
      instruction: 'Buat folder sementara "test_dir" dengan mkdir("test_dir", 0755) lalu hapus dengan rmdir("test_dir").',
      starterCode: `<?php
if (!is_dir("test_dir")) {
    mkdir("test_dir", 0755);
    echo "Folder dibuat!";
    rmdir("test_dir");
}
?>`,
      hint: 'Panggil mkdir("test_dir", 0755).'
    },
    quiz: {
      question: 'Parameter ketiga boolean pada fungsi mkdir($path, $mode, $recursive) berfungsi untuk apa?',
      options: [
        'Membuat folder bersarang (nested subdirectories) secara rekursif jika folder induknya belum ada',
        'Menghapus folder secara otomatis',
        'Mengunci folder dengan password',
        'Mengubah nama folder'
      ],
      correctIndex: 0,
      explanation: 'Nilai true pada parameter recursive mengizinkan pembuatan seluruh struktur hierarki subfolder yang belum ada.'
    }
  },

  // 233. MOVE_UPLOADED_FILE()
  {
    id: 'php-ref-move-uploaded-file',
    title: 'PHP move_uploaded_file()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 233,
    overview: 'Kuasai move_uploaded_file(): standar resmi memindahkan file hasil upload pengguna dari folder temporary server ke direktori penyimpanan permanen aplikasi.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">FILE UPLOAD</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 233 / 254</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🚀 Memindahkan Berkas Upload (move_uploaded_file)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>move_uploaded_file($from, $to)</code> memverifikasi validitas upload HTTP POST secara internal dan memindahkan file dari temporary ke folder penyimpanan permanen secara aman.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Pola Standar Pemrosesan Upload File di Backend PHP:
function simpanFotoProfil($fileUpload) {
    $targetDir = __DIR__ . "/uploads/avatars/";
    if (!is_dir($targetDir)) mkdir($targetDir, 0755, true);
    
    // Generate nama file unik agar tidak bentrok
    $namaUnik = uniqid("avatar_") . ".jpg";
    $tujuanAkhir = $targetDir . $namaUnik;
    
    // Pindahkan file upload
    if (move_uploaded_file($fileUpload['tmp_name'], $tujuanAkhir)) {
        return "Upload berhasil: $namaUnik";
    }
    return "Gagal memindahkan file upload.";
}

echo "<h3>Pola Penanganan Upload File Aman:</h3>";
echo "<p>Gunakan selalu <code>move_uploaded_file()</code> alih-alih <code>copy()</code> atau <code>rename()</code> untuk keamanan maksimal.</p>";
?>`,
    codeExplanation: [
      'move_uploaded_file() otomatis memvalidasi is_uploaded_file() secara internal.',
      'Satu-satunya cara yang aman untuk memindahkan file upload pengguna.'
    ],
    challenge: {
      instruction: 'Pahami fungsi pemindahan file upload dengan move_uploaded_file.',
      starterCode: `<?php
echo "move_uploaded_file(\$_FILES['file']['tmp_name'], 'uploads/file.png');";
?>`,
      hint: 'Klik RUN untuk mereview sintaks.'
    },
    quiz: {
      question: 'Mengapa kita TIDAK boleh menggunakan fungsi rename() atau copy() untuk memindahkan file upload $_FILES?',
      options: [
        'Karena rename() dan copy() tidak memeriksa validitas upload HTTP POST sehingga rentan dieksploitasi oleh serangan LFI hacker',
        'Karena rename() terlalu lambat',
        'Karena copy() merusak gambar',
        'Tidak ada bedanya'
      ],
      correctIndex: 0,
      explanation: 'move_uploaded_file memiliki pemeriksaan internal untuk menjamin keamanan file temporary upload.'
    }
  },

  // 234. PARSE_INI_FILE()
  {
    id: 'php-ref-parse-ini-file',
    title: 'PHP parse_ini_file()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 234,
    overview: 'Kuasai parse_ini_file(): membaca dan mem-parsing file konfigurasi .ini / .env menjadi Array PHP multidimensi dengan dukungan section grup ([database], [app]).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">INI CONFIG PARSER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 234 / 254</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚙️ Membaca Konfigurasi File INI (parse_ini_file)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>parse_ini_file($filename, $process_sections)</code> mem-parsing file konfigurasi <code>.ini</code> atau <code>.env</code> langsung ke dalam Array asosiatif. Parameter kedua <code>true</code> mengelompokkan data berdasarkan section <code>[database]</code> dan <code>[mail]</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$iniPath = __DIR__ . "/app_config.ini";
$kontenIni = "
[database]
host = '127.0.0.1'
port = 5432
dbname = 'lms_db'

[app]
name = 'DevGrow Learning'
debug = true
";
file_put_contents($iniPath, $kontenIni);

// Parsing file INI dengan mengaktifkan pengelompokan section (true)
$config = parse_ini_file($iniPath, true);

echo "<h3>Hasil Parsing parse_ini_file():</h3>";
echo "<pre style='background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 8px;'>";
print_r($config);
echo "</pre>";

echo "<p>Database Host: <strong style='color: #059669;'>{$config['database']['host']}</strong> (Port: {$config['database']['port']})</p>";

unlink($iniPath);
?>`,
    codeExplanation: [
      'parse_ini_file($path, true) menghasilkan array multidimensi terstruktur berdasarkan tag section [nama_section].'
    ],
    challenge: {
      instruction: 'Uji parse_ini_file pada konfigurasi sederhana.',
      starterCode: `<?php
file_put_contents("test.ini", "version = 8.3\\nenv = production");
$cfg = parse_ini_file("test.ini");
echo "Versi: " . $cfg['version'];
unlink("test.ini");
?>`,
      hint: 'Panggil parse_ini_file("test.ini").'
    },
    quiz: {
      question: 'Apa fungsi parameter kedua bernilai TRUE pada pemanggilan parse_ini_file($file, true)?',
      options: [
        'Mengelompokkan array berdasarkan nama section [section_name] menjadi array multidimensi',
        'Menghapus komentar file',
        'Mengubah nilai string menjadi uppercase',
        'Membuat backup'
      ],
      correctIndex: 0,
      explanation: 'Parameter $process_sections = true memecah konfigurasi berdasarkan blok header [section].'
    }
  },

  // 235. PARSE_INI_STRING()
  {
    id: 'php-ref-parse-ini-string',
    title: 'PHP parse_ini_string()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 235,
    overview: 'Kuasai parse_ini_string(): mem-parsing string teks berformat INI langsung dari memori menjadi Array PHP tanpa harus menyimpannya ke file harddisk.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">INI STRING PARSER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 235 / 254</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📝 Parsing String INI In-Memory (parse_ini_string)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>parse_ini_string($iniString, $process_sections)</code> bekerja persis seperti <code>parse_ini_file()</code>, namun menerima string langsung dari variabel memori (misal: payload dari cloud storage atau API konfigurasi).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$stringConfig = "
app_env = staging
api_url = https://api.devgrow.id
max_upload = 50
";

$parsed = parse_ini_string($stringConfig);

echo "<h3>Hasil Penggunaan parse_ini_string():</h3>";
echo "<ul>";
echo "<li>Environment: <strong>{$parsed['app_env']}</strong></li>";
echo "<li>API URL: <code>{$parsed['api_url']}</code></li>";
echo "<li>Max Upload: <strong>{$parsed['max_upload']} MB</strong></li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'parse_ini_string() mem-parsing konfigurasi in-memory dengan sangat cepat.'
    ],
    challenge: {
      instruction: 'Parse string "timeout = 30" dengan parse_ini_string.',
      starterCode: `<?php
$str = "timeout = 30";
$arr = parse_ini_string($str);
echo "Timeout: " . $arr['timeout'] . "s";
?>`,
      hint: 'Panggil parse_ini_string($str).'
    },
    quiz: {
      question: 'Apa perbedaan utama antara parse_ini_file() dan parse_ini_string()?',
      options: [
        'parse_ini_file() membaca konfigurasi dari file harddisk, sedangkan parse_ini_string() mem-parsing string teks langsung dari memori variabel',
        'parse_ini_string() hanya untuk angka',
        'parse_ini_file() menghapus file',
        'Keduanya identik'
      ],
      correctIndex: 0,
      explanation: 'parse_ini_string menguraikan string teks in-memory tanpa operasi I/O file fisik.'
    }
  },

  // 236. PATHINFO()
  {
    id: 'php-ref-pathinfo',
    title: 'PHP pathinfo()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 236,
    overview: 'Kuasai pathinfo(): membedah jalur path file menjadi array 4 bagian penting: dirname (folder), basename (nama file+ext), extension (ekstensi .jpg/.php), dan filename (nama file murni).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PATH PARSER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 236 / 254</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔬 Membedah Komponen Path File (pathinfo)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>pathinfo($path, $flags)</code> adalah fungsi paling populer untuk mengambil ekstensi file (<code>PATHINFO_EXTENSION</code>) saat memvalidasi format file upload gambar atau dokumen.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$samplePath = "/var/www/uploads/avatars/user_99_foto.png";

// 1. Bedah seluruh komponen sekaligus ke dalam Array
$info = pathinfo($samplePath);

// 2. Ambil hanya ekstensinya saja
$ekstensi = pathinfo($samplePath, PATHINFO_EXTENSION);

echo "<h3>Hasil Penguraian pathinfo():</h3>";
echo "<ul>";
echo "<li>Folder (dirname): <code>{$info['dirname']}</code></li>";
echo "<li>Nama Lengkap (basename): <strong>{$info['basename']}</strong></li>";
echo "<li>Nama Murni (filename): <strong>{$info['filename']}</strong></li>";
echo "<li>Ekstensi (extension): <strong style='color: #059669;'>{$info['extension']}</strong></li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'pathinfo($path, PATHINFO_EXTENSION) mengembalikan string ekstensi seperti "png" atau "pdf".',
      'Standar emas validasi ekstensi upload file di PHP.'
    ],
    challenge: {
      instruction: 'Ambil ekstensi file dari "document.pdf" dengan pathinfo("document.pdf", PATHINFO_EXTENSION).',
      starterCode: `<?php
echo "Ekstensi: " . pathinfo("document.pdf", PATHINFO_EXTENSION);
?>`,
      hint: 'Panggil pathinfo("document.pdf", PATHINFO_EXTENSION).'
    },
    quiz: {
      question: 'Flag konstanta apakah pada pathinfo() yang digunakan untuk mengekstrak hanya ekstensi file saja?',
      options: [
        'PATHINFO_EXTENSION',
        'PATHINFO_FILENAME',
        'PATHINFO_DIRNAME',
        'PATHINFO_BASENAME'
      ],
      correctIndex: 0,
      explanation: 'PATHINFO_EXTENSION mengembalikan string ekstensi berkas (misal: "jpg", "pdf").'
    }
  },

  // 237. PCLOSE()
  {
    id: 'php-ref-pclose',
    title: 'PHP pclose()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 237,
    overview: 'Fungsi pclose(): menutup stream pipa proses (Pipe Stream) yang dibuka oleh popen() dan mengembalikan exit status code proses tersebut.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PIPE CLOSE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 237 / 254</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🚪 Menutup Pipa Proses CLI (pclose)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>pclose($handle)</code> menutup koneksi stream pipa ke proses shell eksternal dan mengembalikan integer exit code (0 = sukses).
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Buka pipa stream ke perintah echo
$handle = popen("echo Hello CLI Process", "r");
$output = fgets($handle);

// Tutup pipa proses
$exitCode = pclose($handle);

echo "<h3>Hasil Penggunaan pclose():</h3>";
echo "<p>Output Proses: <strong>" . trim($output) . "</strong></p>";
echo "<p>Exit Status Code: <strong style='color: green;'>$exitCode (Sukses)</strong></p>";
?>`,
    codeExplanation: [
      'pclose($handle) melepaskan resource process pipe dan mengembalikan exit code dari command shell.'
    ],
    challenge: {
      instruction: 'Buka dan tutup pipe proses dengan popen dan pclose.',
      starterCode: `<?php
$h = popen("echo Test", "r");
$code = pclose($h);
echo "Exit code: " . $code;
?>`,
      hint: 'Panggil pclose($h).'
    },
    quiz: {
      question: 'Apa nilai kembalian dari fungsi pclose($handle)?',
      options: [
        'Integer exit status code yang dihasilkan oleh proses eksternal tersebut (0 = sukses)',
        'String output proses',
        'Boolean false saja',
        'Array'
      ],
      correctIndex: 0,
      explanation: 'pclose mengembalikan termination exit status code dari proses program yang ditutup.'
    }
  }
];

module.exports = phpPart23RefFilesystem3;
