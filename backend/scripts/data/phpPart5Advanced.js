// ==========================================================
// DATA MATERI PHP: BAB 3 - PHP ADVANCED
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart5Advanced = [
  // 1. PHP DATE AND TIME
  {
    id: 'php-adv-datetime',
    title: 'PHP Date and Time',
    chapter: 'PHP Advanced',
    chapterId: 'php-chap-advanced',
    order: 1,
    overview: 'Kuasai pengelolaan tanggal, waktu, dan zona waktu di PHP: fungsi date(), time(), strtotime(), mktime(), date_default_timezone_set(), dan objek modern DateTime & DateTimeImmutable.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PHP ADVANCED</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 01 / 13</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⏰ Manajemen Tanggal & Waktu di PHP</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            PHP menyediakan fungsi pemformatan waktu yang sangat kuat. Pastikan zona waktu (timezone) selalu disetel ke lokasi yang tepat (seperti <code>Asia/Jakarta</code> untuk WIB).
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <code class="text-purple-600 dark:text-purple-400 font-bold block mb-1">d / m / Y</code>
            Hari (01-31), Bulan (01-12), Tahun 4 digit (2026).
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <code class="text-indigo-600 dark:text-indigo-400 font-bold block mb-1">H:i:s</code>
            Jam 24-format (00-23), Menit (00-59), Detik.
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <code class="text-cyan-600 dark:text-cyan-400 font-bold block mb-1">strtotime($str)</code>
            Mengubah teks manusia ("next Monday", "+2 days") menjadi timestamp Unix.
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <code class="text-emerald-600 dark:text-emerald-400 font-bold block mb-1">DateTimeImmutable</code>
            Objek waktu modern thread-safe & immutable.
          </div>
        </div>
      </div>
    `,
    code: `<?php
// Set zona waktu ke Waktu Indonesia Barat (WIB)
date_default_timezone_set("Asia/Jakarta");

$sekarang = date("d F Y, H:i:s");
$hariIni = date("l"); // Nama hari dalam bahasa Inggris (Monday, Tuesday, etc.)

// Menghitung waktu di masa depan dengan strtotime()
$tigaHariKedepan = date("d-m-Y", strtotime("+3 days"));
$seninDepan = date("d F Y", strtotime("next Monday"));

echo "<h3>Waktu Server Saat Ini:</h3>";
echo "<p>Hari & Tanggal: <strong>$hariIni, $sekarang WIB</strong></p>";
echo "<ul>";
echo "<li>Batas Pembayaran (+3 Hari): <strong>$tigaHariKedepan</strong></li>";
echo "<li>Jadwal Kuliah Berikutnya (Next Monday): <strong>$seninDepan</strong></li>";
echo "<li>Unix Timestamp Saat Ini (time()): <code>" . time() . "</code></li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'date_default_timezone_set("Asia/Jakarta") memastikan fungsi date() menampilkan waktu lokal WIB yang tepat.',
      'strtotime("+3 days") secara cerdas mengonversi string bahasa manusia menjadi detik Unix Epoch.',
      'time() mengembalikan total detik sejak 1 Januari 1970 (standar Unix timestamp).'
    ],
    challenge: {
      instruction: 'Cetak tanggal untuk 1 minggu ke depan menggunakan date("d-m-Y", strtotime("+1 week")).',
      starterCode: `<?php
date_default_timezone_set("Asia/Jakarta");
$satuMinggu = date("d-m-Y", strtotime("+1 week"));
echo "Tanggal 1 minggu ke depan: " . $satuMinggu;
?>`,
      hint: 'Gunakan strtotime("+1 week").'
    },
    quiz: {
      question: 'Fungsi PHP apa yang digunakan untuk mengatur zona waktu default skrip agar sesuai dengan waktu Indonesia?',
      options: [
        'date_default_timezone_set("Asia/Jakarta")',
        'set_timezone("WIB")',
        'time_zone("Jakarta")',
        'date_zone_init()'
      ],
      correctIndex: 0,
      explanation: 'date_default_timezone_set("Asia/Jakarta") adalah fungsi resmi PHP untuk mengatur zona waktu lokal.'
    }
  },

  // 2. PHP INCLUDE
  {
    id: 'php-adv-include',
    title: 'PHP Include',
    chapter: 'PHP Advanced',
    chapterId: 'php-chap-advanced',
    order: 2,
    overview: 'Pelajari pemisahan komponen modular halaman web: perbedaan mendasar include vs require, serta include_once vs require_once.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">MODULARITAS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 02 / 13</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📦 Pemisahan File Modular (include vs require)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Alih-alih menuliskan kode header, navbar, footer, dan koneksi database di setiap file, Anda dapat memisahkannya ke file terpisah dan memuatnya menggunakan <code>include</code> atau <code>require</code>.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800/50">
            <h4 class="font-bold text-purple-700 dark:text-purple-400 text-sm mb-1"><code>include</code> (Non-Kritis)</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400">Jika file tidak ditemukan, PHP hanya memunculkan <strong>Warning</strong> dan skrip di bawahnya TETAP lanjut berjalan.</p>
          </div>
          <div class="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-800/50">
            <h4 class="font-bold text-rose-700 dark:text-rose-400 text-sm mb-1"><code>require</code> (Kritis / Fatal)</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400">Jika file tidak ditemukan, PHP memunculkan <strong>Fatal Error</strong> dan langsung MENGHENTIKAN seluruh eksekusi program.</p>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
          <h4 class="font-bold text-emerald-600 dark:text-emerald-400 text-sm">✓ Mengapa Memakai <code>require_once</code>?</h4>
          <p class="text-xs text-slate-600 dark:text-slate-400">
            <code>require_once</code> memastikan file hanya dimuat satu kali saja, mencegah error akibat deklarasi ulang fungsi atau class ganda (Cannot redeclare function).
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Simulasi Komponen Modular Header & Footer
$headerHtml = "<header style='background: #4f46e5; color: white; padding: 15px; border-radius: 8px;'><h2>🎓 DevGrow Learning Management System</h2></header>";
$footerHtml = "<footer style='margin-top: 20px; padding: 10px; border-top: 1px solid #cbd5e1; font-size: 12px; color: #64748b;'>Hak Cipta &copy; " . date("Y") . " DevGrow Academy. All rights reserved.</footer>";

echo $headerHtml;
echo "<main style='padding: 15px 0;'>";
echo "<h3>Konten Utama Modul</h3>";
echo "<p>Halaman ini memuat komponen header dan footer secara modular menggunakan konsep include/require.</p>";
echo "</main>";
echo $footerHtml;
?>`,
    codeExplanation: [
      'Pemisahan komponen seperti header, navbar, dan footer membuat pemeliharaan website berskala besar menjadi sangat efisien.',
      'Gunakan require_once untuk file konfigurasi database dan include untuk template tampilan visual.'
    ],
    challenge: {
      instruction: 'Tampilkan teks footer dinamis yang memuat tahun sekarang dengan date("Y").',
      starterCode: `<?php
$tahun = date("Y");
echo "Copyright &copy; $tahun DevGrow";
?>`,
      hint: 'Panggil date("Y") untuk tahun saat ini.'
    },
    quiz: {
      question: 'Apa perbedaan utama antara perintah include dan require jika file target yang dipanggil ternyata TIDAK ditemukan?',
      options: [
        'include hanya memicu Warning dan skrip tetap lanjut, sedangkan require memicu Fatal Error dan skrip langsung berhenti',
        'require mengabaikan error, sedangkan include mematikan server',
        'Keduanya mematikan server secara langsung',
        'Tidak ada perbedaan sama sekali'
      ],
      correctIndex: 0,
      explanation: 'require memicu Fatal Error dan menghentikan eksekusi skrip karena file dianggap krusial (misal koneksi DB), sedangkan include hanya memunculkan Warning peringatan.'
    }
  },

  // 3. PHP FILE HANDLING
  {
    id: 'php-adv-file-handling',
    title: 'PHP File Handling',
    chapter: 'PHP Advanced',
    chapterId: 'php-chap-advanced',
    order: 3,
    overview: 'Pelajari konsep manipulasi berkas file di server: readfile(), file_exists(), filesize(), dan pengecekan izin akses file.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">FILE SYSTEM</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 03 / 13</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📁 Pengelolaan File di Server (File Handling)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            PHP dapat berinteraksi langsung dengan sistem berkas (file system) di server untuk membaca file teks, menyimpan log error, dan memproses file dokumen.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <code class="text-purple-600 dark:text-purple-400 font-bold block mb-1">file_exists($path)</code>
            Memeriksa apakah suatu file benar-benar ada di server.
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <code class="text-indigo-600 dark:text-indigo-400 font-bold block mb-1">filesize($path)</code>
            Mengembalikan ukuran file dalam satuan byte.
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <code class="text-emerald-600 dark:text-emerald-400 font-bold block mb-1">readfile($path)</code>
            Membaca dan langsung mencetak isi seluruh file ke output buffer.
          </div>
        </div>
      </div>
    `,
    code: `<?php
// Simulasi pengecekan status file di server
$namaFile = "app_log.txt";
$fileAda = false; // Simulasi status

echo "<h3>Status File System:</h3>";
echo "<ul>";
echo "<li>Target Berkas: <code>$namaFile</code></li>";
echo "<li>Status Ketersediaan: " . ($fileAda ? "<span style='color: green;'>Ditemukan</span>" : "<span style='color: orange;'>Belum Dibuat (Siap dibuat baru)</span>") . "</li>";
echo "<li>Direktori Penyimpanan Aktif: <code>" . __DIR__ . "</code></li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'file_exists() wajib dipanggil sebelum mencoba membuka file agar terhindar dari peringatan File Not Found.',
      'readfile() adalah cara tercepat untuk membaca dan mengalirkan file langsung ke browser pengguna.'
    ],
    challenge: {
      instruction: 'Gunakan file_exists() untuk memeriksa ketersediaan file konfigurasi.',
      starterCode: `<?php
$file = "config.php";
if (file_exists($file)) {
    echo "File ada";
} else {
    echo "File $file tidak ditemukan di server.";
}
?>`,
      hint: 'Gunakan fungsi file_exists($file).'
    },
    quiz: {
      question: 'Fungsi PHP apa yang digunakan untuk membaca seluruh isi file teks dan langsung menampilkannya ke layar browser?',
      options: [
        'readfile()',
        'openfile()',
        'getfile()',
        'file_show()'
      ],
      correctIndex: 0,
      explanation: 'readfile($path) membuka file, membaca seluruh isinya, dan langsung menuliskannya ke output buffer browser.'
    }
  },

  // 4. PHP FILE OPEN/READ
  {
    id: 'php-adv-file-open-read',
    title: 'PHP File Open/Read',
    chapter: 'PHP Advanced',
    chapterId: 'php-chap-advanced',
    order: 4,
    overview: 'Kuasai fungsi fopen(), fread(), fgets() (baca baris per baris), feof() (deteksi akhir file), dan fclose(). Pahami mode akses "r" dan "r+".',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">OPEN & READ</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 04 / 13</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📖 Membuka & Membaca Berkas (fopen/fgets)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Metode <code>fopen()</code> memberikan kontrol tingkat lanjut saat membaca file besar secara bertahap baris demi baris (<em>line-by-line streaming</em>) untuk menghemat RAM server.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-purple-600 dark:text-purple-400 block mb-1">fgets($handle)</strong>
            Membaca satu baris tunggal dari file dan menggeser pointer ke baris berikutnya.
          </div>
          <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-indigo-600 dark:text-indigo-400 block mb-1">feof($handle)</strong>
            Memeriksa apakah pointer file telah mencapai akhir berkas (End-Of-File).
          </div>
        </div>
      </div>
    `,
    code: `<?php
// Simulasi membaca baris log menggunakan generator memori
$barisData = [
    "[2026-08-27 10:00:15] INFO: User 'fadila' berhasil login.",
    "[2026-08-27 10:05:22] INFO: Modul 'PHP Advanced' dibuka.",
    "[2026-08-27 10:15:40] SUCCESS: Kuis Bab 2 diselesaikan dengan nilai 100."
];

echo "<h3>Pembacaan Berkas Log Baris-per-Baris:</h3>";
echo "<div style='background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 10px; font-family: monospace; font-size: 12px;'>";

foreach ($barisData as $idx => $line) {
    echo "Line " . ($idx + 1) . ": $line<br>";
}

echo "</div>";
echo "<p style='font-size: 11px; color: #64748b;'>Status: File ditutup dengan fclose() secara aman.</p>";
?>`,
    codeExplanation: [
      'fopen($namaFile, "r") membuka file dalam mode Read-Only.',
      'Perulangan while (!feof($file)) { $baris = fgets($file); } membaca isi file baris demi baris hingga selesai.',
      'fclose($file) wajib dipanggil untuk membebaskan memory handle sistem operasi.'
    ],
    challenge: {
      instruction: 'Jelaskan apa fungsi mode "r" pada fopen($path, "r").',
      starterCode: `<?php
echo "Mode 'r' pada fopen berarti: Read Only (Hanya Baca dari awal file).";
?>`,
      hint: 'Mode "r" membuka berkas untuk pembacaan saja.'
    },
    quiz: {
      question: 'Fungsi manakah yang digunakan untuk mendeteksi apakah pembacaan file telah mencapai akhir baris (End-Of-File)?',
      options: [
        'feof()',
        'is_end_file()',
        'file_finished()',
        'eof_check()'
      ],
      correctIndex: 0,
      explanation: 'feof() (File End-Of-File) mengembalikan nilai TRUE jika pointer pembacaan file telah sampai pada akhir berkas.'
    }
  },

  // 5. PHP FILE CREATE/WRITE
  {
    id: 'php-adv-file-create-write',
    title: 'PHP File Create/Write',
    chapter: 'PHP Advanced',
    chapterId: 'php-chap-advanced',
    order: 5,
    overview: 'Pelajari cara membuat dan menulis data ke file: mode "w" (overwrite), mode "a" (append), fwrite(), dan file_put_contents().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CREATE & WRITE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 05 / 13</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">✍️ Membuat & Menulis File di PHP</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Gunakan mode <code>"w"</code> untuk membuat file baru atau menimpa (overwrite) isi file lama, dan gunakan mode <code>"a"</code> (append) untuk menambahkan teks baru di akhir baris tanpa menghapus data sebelumnya.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800/50">
            <h4 class="font-bold text-purple-700 dark:text-purple-400 text-sm mb-1">Mode "w" (Write / Overwrite)</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400">Menghapus seluruh isi file lama dan menulis dari awal. Jika file belum ada, file baru akan otomatis dibuat.</p>
          </div>
          <div class="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/50">
            <h4 class="font-bold text-emerald-700 dark:text-emerald-400 text-sm mb-1">Mode "a" (Append / Tambah)</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400">Mempertahankan isi file yang sudah ada dan menyisipkan teks baru di baris paling bawah. Sangat ideal untuk file catatan aktivitas (Log Activity).</p>
          </div>
        </div>
      </div>
    `,
    code: `<?php
$pesanLog = "[" . date("Y-m-d H:i:s") . "] Aktivitas: Pengguna mengunduh sertifikat kelulusan.\n";

echo "<h3>Simulasi Penulisan File Log (Mode Append):</h3>";
echo "<div style='background: #f8fafc; border-left: 4px solid #4f46e5; padding: 12px;'>";
echo "<code>file_put_contents('aktivitas.log', \$pesanLog, FILE_APPEND);</code>";
echo "</div>";

echo "<p>Pesan yang ditambahkan: <strong>$pesanLog</strong></p>";
?>`,
    codeExplanation: [
      'file_put_contents($namaFile, $data, FILE_APPEND) adalah fungsi praktis modern untuk menulis file dalam satu baris tanpa perlu memanggil fopen, fwrite, dan fclose terpisah.',
      'Karakter \\n menambahkan baris baru pada file teks di server.'
    ],
    challenge: {
      instruction: 'Pelajari perbedaan mode "w" dan "a" pada fopen().',
      starterCode: `<?php
echo "Mode 'w' = Overwrite (Timpa) | Mode 'a' = Append (Tambahkan ke akhir)";
?>`,
      hint: 'Klik RUN untuk mereview kedua mode penulisan berkas.'
    },
    quiz: {
      question: 'Mode akses file apakah yang digunakan agar data baru ditambahkan ke akhir file tanpa menghapus teks yang sudah ada sebelumnya?',
      options: [
        'Mode "a" (Append)',
        'Mode "w" (Write)',
        'Mode "r" (Read)',
        'Mode "x" (Exclusive)'
      ],
      correctIndex: 0,
      explanation: 'Mode "a" (Append) membuka file dan meletakkan pointer di akhir berkas sehingga teks baru ditambahkan tanpa menghapus data sebelumnya.'
    }
  },

  // 6. PHP FILE UPLOAD
  {
    id: 'php-adv-file-upload',
    title: 'PHP File Upload',
    chapter: 'PHP Advanced',
    chapterId: 'php-chap-advanced',
    order: 6,
    overview: 'Kuasai alur unggah file (File Upload) di PHP: atribut enctype="multipart/form-data", array superglobal $_FILES, validasi ekstensi/MIME-type, batasan ukuran file, dan move_uploaded_file().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">FILE UPLOAD</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 06 / 13</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📤 Unggah Berkas & Gambar di PHP</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Untuk mengunggah file, form HTML <strong>WAJIB memiliki atribut <code>enctype="multipart/form-data"</code></strong> dan metode <code>method="POST"</code>.
          </p>
        </div>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 space-y-3 border border-slate-800">
          <h3 class="text-base font-black text-amber-400">Struktur Array $_FILES['foto']:</h3>
          <ul class="space-y-1.5 text-xs text-slate-300">
            <li><code>$_FILES['foto']['name']</code>: Nama asli file (contoh: "profil.jpg").</li>
            <li><code>$_FILES['foto']['tmp_name']</code>: Lokasi penyimpanan sementara di server.</li>
            <li><code>$_FILES['foto']['size']</code>: Ukuran file dalam satuan byte.</li>
            <li><code>$_FILES['foto']['error']</code>: Kode status error (0 = Sukses UPLOAD_ERR_OK).</li>
            <li><code>$_FILES['foto']['type']</code>: Tipe MIME file (misal: "image/jpeg").</li>
          </ul>
        </div>
      </div>
    `,
    code: `<?php
// Penanganan Upload File Gambar
$pesanStatus = "";

if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_FILES["dokumen"])) {
    $file = $_FILES["dokumen"];
    $namaFile = $file["name"];
    $tmpFile = $file["tmp_name"];
    $ukuran = $file["size"];
    $error = $file["error"];
    
    // 1. Ekstrak ekstensi file
    $ekstensi = strtolower(pathinfo($namaFile, PATHINFO_EXTENSION));
    $ekstensiBoleh = ["jpg", "jpeg", "png", "pdf"];
    
    // 2. Validasi Ekstensi & Ukuran (Maks 2MB)
    if (!in_array($ekstensi, $ekstensiBoleh)) {
        $pesanStatus = "<div style='color: red;'>⚠️ Ekstensi .$ekstensi tidak diizinkan! Hanya JPG, PNG, dan PDF.</div>";
    } elseif ($ukuran > 2097152) { // 2MB = 2 * 1024 * 1024
        $pesanStatus = "<div style='color: red;'>⚠️ Ukuran file melebihi batas 2MB!</div>";
    } elseif ($error === 0) {
        $pesanStatus = "<div style='color: green; font-weight: bold;'>✅ File '$namaFile' sah (" . round($ukuran / 1024, 2) . " KB) dan siap dipindahkan dengan move_uploaded_file()!</div>";
    }
}
?>

<?php echo $pesanStatus; ?>

<form method="POST" enctype="multipart/form-data" style="background: #f8fafc; padding: 20px; border: 1px solid #cbd5e1; border-radius: 12px; max-width: 450px;">
  <h4 style="margin-top: 0; color: #1e293b;">Unggah Berkas Tugas:</h4>
  
  <div style="margin-bottom: 15px;">
    <label style="font-size: 12px; font-weight: bold; display: block; margin-bottom: 6px;">Pilih File (JPG, PNG, PDF maks 2MB):</label>
    <input type="file" name="dokumen" required style="font-size: 12px;" />
  </div>

  <button type="submit" style="background: #4f46e5; color: white; border: none; padding: 9px 18px; border-radius: 8px; font-weight: bold; cursor: pointer;">
    Unggah Sekarang
  </button>
</form>`,
    codeExplanation: [
      'enctype="multipart/form-data" memecah file menjadi potongan biner sebelum dikirim ke server web.',
      'pathinfo($namaFile, PATHINFO_EXTENSION) mengekstrak format file (.jpg, .pdf) untuk divalidasi ke daftar whitelist aman.',
      'move_uploaded_file($tmp_name, $tujuan) memindahkan file dari folder temporary server ke direktori permanen aplikasi.'
    ],
    challenge: {
      instruction: 'Ketahui kode error 0 pada $_FILES["file"]["error"] menandakan UPLOAD_ERR_OK (sukses).',
      starterCode: `<?php
$statusError = 0;
if ($statusError === 0) {
    echo "Upload berhasil tanpa error (UPLOAD_ERR_OK)!";
}
?>`,
      hint: 'Klik RUN untuk mereview kode status upload.'
    },
    quiz: {
      question: 'Atribut wajib apa yang harus ditambahkan pada tag <form> HTML agar form tersebut dapat mengirimkan file ke server?',
      options: [
        'enctype="multipart/form-data"',
        'type="file-uploader"',
        'method="FILE"',
        'action="upload.php" saja'
      ],
      correctIndex: 0,
      explanation: 'Tag form wajib memiliki atribut enctype="multipart/form-data" dan method="POST" agar browser dapat memproses dan mengunggah data berkas/gambar.'
    }
  },

  // 7. PHP COOKIES
  {
    id: 'php-adv-cookies',
    title: 'PHP Cookies',
    chapter: 'PHP Advanced',
    chapterId: 'php-chap-advanced',
    order: 7,
    overview: 'Pelajari cara membuat, membaca, memperbarui, dan menghapus Cookie di browser pengguna menggunakan setcookie(), array $_COOKIE, opsi httponly, samesite, dan secure flags.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">COOKIES</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 07 / 13</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🍪 Pengelolaan Cookie di Browser Klien</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Cookie adalah berkas data teks kecil yang disimpan oleh web server di dalam browser komputer pengguna. Cookie sering digunakan untuk mengingat preferensi tema (Dark/Light mode) atau bahasa pilihan.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs border border-slate-800 space-y-2">
          <div class="text-amber-400 font-bold">Sintaks Standar setcookie():</div>
          <pre class="text-sky-300">setcookie($nama, $nilai, $waktu_kedaluwarsa, $path, $domain, $secure, $httponly);</pre>
        </div>
      </div>
    `,
    code: `<?php
// Mensimulasikan pembacaan cookie preferensi pengguna
$temaAktif = $_COOKIE['user_theme'] ?? 'dark';
$bahasa = $_COOKIE['user_lang'] ?? 'id';

echo "<h3>Preferensi Pengguna dari Cookie:</h3>";
echo "<ul>";
echo "<li><strong>Tema Pilihan:</strong> " . ucfirst($temaAktif) . " Mode</li>";
echo "<li><strong>Bahasa:</strong> " . strtoupper($bahasa) . " (Indonesia)</li>";
echo "</ul>";

echo "<div style='padding: 12px; background: #e0e7ff; border-radius: 8px;'>";
echo "💡 <em>Tips: Fungsi setcookie() harus dipanggil SEBELUM ada output HTML atau tag spasi apa pun yang dikirim ke browser!</em>";
echo "</div>";
?>`,
    codeExplanation: [
      'setcookie("user_theme", "dark", time() + 86400 * 30, "/") menyimpan preferensi selama 30 hari ke depan.',
      'Data cookie dibaca kembali oleh PHP melalui array superglobal $_COOKIE["namaCookie"].',
      'Untuk menghapus cookie, atur waktu kedaluwarsanya ke masa lalu (time() - 3600).'
    ],
    challenge: {
      instruction: 'Pelajari cara membaca cookie $tema = $_COOKIE["tema"] ?? "light";',
      starterCode: `<?php
$_COOKIE["tema"] = "dark";
$tema = $_COOKIE["tema"] ?? "light";
echo "Tema saat ini: $tema";
?>`,
      hint: 'Panggil $_COOKIE["nama"].'
    },
    quiz: {
      question: 'Bagaimana cara menghapus cookie yang sudah tersimpan di browser pengguna menggunakan PHP?',
      options: [
        'Memanggil setcookie() dengan waktu kedaluwarsa (expiration time) di masa lalu (misal: time() - 3600)',
        'Memanggil fungsi delete_cookie()',
        'Menghapus file php.ini',
        'Cookie tidak bisa dihapus sampai browser ditutup'
      ],
      correctIndex: 0,
      explanation: 'Untuk menghapus cookie, panggil setcookie() dengan nilai kosong dan waktu kedaluwarsa di masa lampau (misal: time() - 3600).'
    }
  },

  // 8. PHP SESSIONS
  {
    id: 'php-adv-sessions',
    title: 'PHP Sessions',
    chapter: 'PHP Advanced',
    chapterId: 'php-chap-advanced',
    order: 8,
    overview: 'Kuasai sistem autentikasi dan manajemen sesi pengguna (Sessions): session_start(), array superglobal $_SESSION, session_unset(), session_destroy(), dan keamanan session fixation.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SESI PENGGUNA</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 08 / 13</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔐 Manajemen Sesi Login (Sessions) di PHP</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Berbeda dengan Cookie yang disimpan di browser klien, <strong>Session menyimpan data sensitif secara aman di sisi SERVER</strong>. Browser hanya memegang kunci acak bernama <code>PHPSESSID</code>. Sangat ideal untuk sistem login akun pengguna.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <code class="text-purple-600 dark:text-purple-400 font-bold block mb-1">session_start()</code>
            Memulai atau melanjutkan sesi aktif (wajib di baris pertama).
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <code class="text-indigo-600 dark:text-indigo-400 font-bold block mb-1">$_SESSION['user'] = ...</code>
            Menyimpan data sesi pengguna.
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <code class="text-rose-600 dark:text-rose-400 font-bold block mb-1">session_destroy()</code>
            Menghancurkan seluruh data sesi saat pengguna Logout.
          </div>
        </div>
      </div>
    `,
    code: `<?php
// Simulasi Data Sesi Pengguna Login
$_SESSION['user_id'] = "USR-99841";
$_SESSION['user_name'] = "Muhammad Rahmat Fadila";
$_SESSION['user_role'] = "STUDENT_PRO";
$_SESSION['login_time'] = date("d F Y, H:i:s");

echo "<h3>Status Autentikasi Pengguna:</h3>";
echo "<div style='padding: 15px; background: #ecfdf5; border: 1px solid #10b981; border-radius: 10px;'>";
echo "<p style='margin: 0 0 5px 0;'>ID Pengguna: <code>" . $_SESSION['user_id'] . "</code></p>";
echo "<p style='margin: 0 0 5px 0;'>Nama Akun: <strong>" . $_SESSION['user_name'] . "</strong></p>";
echo "<p style='margin: 0 0 5px 0;'>Hak Akses: <span style='background: #10b981; color: white; padding: 2px 8px; border-radius: 4px; font-weight: bold;'>" . $_SESSION['user_role'] . "</span></p>";
echo "<p style='margin: 0;'>Waktu Login: " . $_SESSION['login_time'] . "</p>";
echo "</div>";
?>`,
    codeExplanation: [
      'session_start() menginisialisasi sistem sesi dan memeriksa apakah cookie PHPSESSID sudah ada di browser klien.',
      'Data di dalam $_SESSION aman dan tidak dapat diedit langsung oleh pengguna melalui inspect element.',
      'Saat logout, panggil session_unset() dan session_destroy() untuk membersihkan seluruh data dari memori server.'
    ],
    challenge: {
      instruction: 'Simpan nama pengguna "Fadila" ke dalam $_SESSION["username"] dan cetak nilainya.',
      starterCode: `<?php
$_SESSION["username"] = "Fadila";
echo "Pengguna aktif: " . $_SESSION["username"];
?>`,
      hint: 'Gunakan $_SESSION["username"].'
    },
    quiz: {
      question: 'Fungsi apakah yang WAJIB dipanggil di baris paling atas skrip PHP sebelum Anda dapat membaca atau menulis data sesi di $_SESSION?',
      options: [
        'session_start()',
        'session_init()',
        'start_session()',
        'session_begin()'
      ],
      correctIndex: 0,
      explanation: 'session_start() wajib dipanggil di setiap halaman yang membutuhkan akses ke variabel $_SESSION sebelum ada output HTML yang dikirim.'
    }
  },

  // 9. PHP FILTERS
  {
    id: 'php-adv-filters',
    title: 'PHP Filters',
    chapter: 'PHP Advanced',
    chapterId: 'php-chap-advanced',
    order: 9,
    overview: 'Pelajari fungsi ekstensi filter bawaan PHP: filter_var(), filter_has_var(), FILTER_VALIDATE_INT, FILTER_VALIDATE_IP, dan FILTER_SANITIZE_STRING.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DATA FILTERS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 09 / 13</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧹 Validasi & Sanitasi dengan PHP Filter Extension</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Ekstensi Filter PHP dirancang khusus untuk memvalidasi dan membersihkan data input eksternal secara aman dan berkecepatan tinggi.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <code class="text-purple-600 dark:text-purple-400 font-bold block mb-1">FILTER_VALIDATE_INT</code>
            Memvalidasi apakah nilai adalah integer yang sah.
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <code class="text-indigo-600 dark:text-indigo-400 font-bold block mb-1">FILTER_VALIDATE_IP</code>
            Memvalidasi keabsahan format IP Address (IPv4 & IPv6).
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <code class="text-emerald-600 dark:text-emerald-400 font-bold block mb-1">FILTER_VALIDATE_MAC</code>
            Memvalidasi format fisik MAC Address perangkat.
          </div>
        </div>
      </div>
    `,
    code: `<?php
$umurInput = "25";
$ipAddress = "192.168.1.100";
$ipSalah = "999.888.777.666";

echo "<h3>Hasil Pengujian Ekstensi Filter PHP:</h3>";

// 1. Validasi Integer
echo "<p>Apakah '$umurInput' Integer Valid? " . (filter_var($umurInput, FILTER_VALIDATE_INT) !== false ? "<span style='color: green;'>✓ Valid</span>" : "<span style='color: red;'>✗ Tidak Valid</span>") . "</p>";

// 2. Validasi IP Address Sah
echo "<p>IP '$ipAddress': " . (filter_var($ipAddress, FILTER_VALIDATE_IP) ? "<span style='color: green;'>✓ Alamat IP Sah</span>" : "<span style='color: red;'>✗ Format IP Salah</span>") . "</p>";

// 3. Validasi IP Salah
echo "<p>IP '$ipSalah': " . (filter_var($ipSalah, FILTER_VALIDATE_IP) ? "<span style='color: green;'>✓ Alamat IP Sah</span>" : "<span style='color: red;'>✗ Format IP Salah</span>") . "</p>";
?>`,
    codeExplanation: [
      'filter_var($val, FILTER_VALIDATE_INT) mengembalikan nilai integer jika valid, atau false jika bukan integer.',
      'FILTER_VALIDATE_IP memverifikasi empat oktet IPv4 (0-255) atau notasi hex IPv6 secara presisi.'
    ],
    challenge: {
      instruction: 'Uji apakah "127.0.0.1" adalah IP yang valid menggunakan filter_var(..., FILTER_VALIDATE_IP).',
      starterCode: `<?php
$ip = "127.0.0.1";
if (filter_var($ip, FILTER_VALIDATE_IP)) {
    echo "Alamat IP $ip Valid!";
}
?>`,
      hint: 'Gunakan filter_var($ip, FILTER_VALIDATE_IP).'
    },
    quiz: {
      question: 'Konstanta filter apa yang digunakan untuk memeriksa apakah string berisi format alamat IP yang sah di PHP?',
      options: [
        'FILTER_VALIDATE_IP',
        'FILTER_CHECK_IP',
        'FILTER_IP_FORMAT',
        'FILTER_IS_IP'
      ],
      correctIndex: 0,
      explanation: 'FILTER_VALIDATE_IP adalah konstanta bawaan PHP untuk memverifikasi keabsahan alamat IPv4 dan IPv6.'
    }
  },

  // 10. PHP FILTERS ADVANCED
  {
    id: 'php-adv-filters-advanced',
    title: 'PHP Filters Advanced',
    chapter: 'PHP Advanced',
    chapterId: 'php-chap-advanced',
    order: 10,
    overview: 'Pelajari validasi filter lanjutan menggunakan flag options: validasi rentang angka (min_range & max_range), filter URL dengan query string, dan sanitasi ASCII khusus.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ADVANCED FILTERS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 10 / 13</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎛️ Opsi & Flag Lanjutan pada Filter PHP</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Anda dapat menyertakan parameter <code>options</code> (seperti batas minimum dan maksimum) ke dalam fungsi <code>filter_var()</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$umurSiswa = 22;

// Opsi rentang umur yang diizinkan (17 sampai 40 tahun)
$opsiUmur = [
    "options" => [
        "min_range" => 17,
        "max_range" => 40
    ]
];

echo "<h3>Validasi Rentang Umur (17 - 40 Tahun):</h3>";

if (filter_var($umurSiswa, FILTER_VALIDATE_INT, $opsiUmur) !== false) {
    echo "<p style='color: green; font-weight: bold;'>✅ Usia $umurSiswa tahun berada di dalam rentang syarat pendaftaran.</p>";
} else {
    echo "<p style='color: red; font-weight: bold;'>✗ Usia $umurSiswa tahun berada di luar rentang yang diizinkan.</p>";
}
?>`,
    codeExplanation: [
      'Array opsi "min_range" dan "max_range" membatasi nilai angka yang sah secara otomatis dalam satu baris panggilan filter_var().'
    ],
    challenge: {
      instruction: 'Uji apakah nilai $skor = 95 berada di dalam rentang 0 sampai 100.',
      starterCode: `<?php
$skor = 95;
$opsi = ["options" => ["min_range" => 0, "max_range" => 100]];
if (filter_var($skor, FILTER_VALIDATE_INT, $opsi) !== false) {
    echo "Skor $skor sah dalam rentang 0-100!";
}
?>`,
      hint: 'Gunakan filter_var($skor, FILTER_VALIDATE_INT, $opsi).'
    },
    quiz: {
      question: 'Bagaimana cara membatasi nilai integer agar berada di antara nilai minimum dan maksimum menggunakan filter_var()?',
      options: [
        'Menyertakan array $options berisi "min_range" dan "max_range"',
        'Menggunakan tanda kurung siku di dalam string',
        'Menambahkan operator if 10 kali',
        'Mengubah PHP ke mode strict_range'
      ],
      correctIndex: 0,
      explanation: 'filter_var mendukung array konfigurasi $options yang memiliki kunci "min_range" dan "max_range".'
    }
  },

  // 11. PHP CALLBACK FUNCTIONS
  {
    id: 'php-adv-callbacks',
    title: 'PHP Callback Functions',
    chapter: 'PHP Advanced',
    chapterId: 'php-chap-advanced',
    order: 11,
    overview: 'Kuasai Callback Functions di PHP: Anonymous Functions (Closures), Arrow Functions (fn => ...), dan pemanggilan fungsi kustom sebagai argumen menggunakan callable type hint.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CALLBACKS & CLOSURES</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 11 / 13</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚡ Callback Functions & Arrow Functions di PHP 8</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Callback adalah fungsi yang dilewatkan sebagai argumen ke dalam fungsi lain untuk dipanggil kembali saat proses tertentu selesai.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-purple-600 dark:text-purple-400 block mb-1">Anonymous Function (Closure)</strong>
            <pre class="bg-slate-950 text-slate-200 p-2 rounded text-[11px] font-mono">$format = function($nama) {
    return strtoupper($nama);
};</pre>
          </div>
          <div class="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-800/50">
            <strong class="text-emerald-700 dark:text-emerald-400 block mb-1">Arrow Function (PHP 7.4+)</strong>
            <pre class="bg-slate-950 text-slate-200 p-2 rounded text-[11px] font-mono">$kaliDua = fn($n) => $n * 2;</pre>
          </div>
        </div>
      </div>
    `,
    code: `<?php
// Fungsi Higher-Order yang menerima parameter callable
function prosesTeks(string $teks, callable $formatCallback): string {
    return $formatCallback($teks);
}

// 1. Menggunakan Anonymous Function
$salamFormal = prosesTeks("halo dunia", function($str) {
    return "📢 " . ucwords($str) . "!";
});

// 2. Menggunakan Arrow Function
$potongTeks = prosesTeks("Belajar PHP Sangat Seru", fn($str) => substr($str, 0, 11) . "...");

echo "<h3>Hasil Eksekusi Callback:</h3>";
echo "<p>Formal: <strong>$salamFormal</strong></p>";
echo "<p>Singkat: <strong>$potongTeks</strong></p>";
?>`,
    codeExplanation: [
      'Type hint callable pada parameter fungsi memastikan hanya fungsi sah yang dapat dilewatkan.',
      'Arrow Function fn($x) => ... otomatis menangkap variabel dari scope terluar tanpa memerlukan keyword use().'
    ],
    challenge: {
      instruction: 'Buat arrow function $kuadrat = fn($n) => $n * $n; dan hitung kuadrat dari 7.',
      starterCode: `<?php
$kuadrat = fn($n) => $n * $n;
echo "Kuadrat dari 7 adalah: " . $kuadrat(7);
?>`,
      hint: 'Panggil $kuadrat(7).'
    },
    quiz: {
      question: 'Sintaks manakah yang merupakan penulisan Arrow Function yang sah di PHP modern?',
      options: [
        'fn($param) => $ekspresi',
        '($param) => { return $ekspresi; }',
        'def($param) -> $ekspresi',
        'lambda $param: $ekspresi'
      ],
      correctIndex: 0,
      explanation: 'PHP menggunakan sintaks fn($param) => $ekspresi untuk Arrow Functions.'
    }
  },

  // 12. PHP JSON
  {
    id: 'php-adv-json',
    title: 'PHP JSON',
    chapter: 'PHP Advanced',
    chapterId: 'php-chap-advanced',
    order: 12,
    overview: 'Kuasai pertukaran data REST API menggunakan json_encode() dan json_decode() di PHP. Pahami flag JSON_PRETTY_PRINT, JSON_UNESCAPED_UNICODE, dan konversi ke Associative Array ($assoc = true).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">REST API & JSON</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 12 / 13</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📡 Pengolahan Data JSON di PHP</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            JSON (JavaScript Object Notation) adalah format standar pertukaran data API global. PHP memiliki dua fungsi utama: <code>json_encode()</code> (Array/Object -> String JSON) dan <code>json_decode()</code> (String JSON -> Array/Object PHP).
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-purple-600 dark:text-purple-400 block mb-1">json_encode($data, $flags)</strong>
            Mengubah array PHP menjadi string JSON standar API.
          </div>
          <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-indigo-600 dark:text-indigo-400 block mb-1">json_decode($jsonString, true)</strong>
            Mengubah string JSON kembali menjadi Associative Array PHP (jika parameter kedua true).
          </div>
        </div>
      </div>
    `,
    code: `<?php
// 1. Mengubah Array PHP ke JSON (json_encode)
$responApi = [
    "status" => "success",
    "kode" => 200,
    "pesan" => "Data modul berhasil diambil",
    "data" => [
        "id" => "php-adv-json",
        "judul" => "PHP JSON & REST API",
        "totalSiswa" => 1250,
        "isVerified" => true
    ]
];

$jsonString = json_encode($responApi, JSON_PRETTY_PRINT);

echo "<h3>Output Respon REST API (JSON):</h3>";
echo "<pre style='background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 10px; font-family: monospace;'>$jsonString</pre>";

// 2. Mengubah JSON String kembali ke Associative Array (json_decode)
$arrayHasil = json_decode($jsonString, true);
echo "<p>Judul dari JSON decode: <strong>" . $arrayHasil['data']['judul'] . "</strong></p>";
?>`,
    codeExplanation: [
      'json_encode($data, JSON_PRETTY_PRINT) merapikan indentasi JSON agar nyaman dibaca manusia saat debugging.',
      'Parameter kedua json_decode($json, true) sangat penting agar hasil decode berupa Associative Array (bukan stdClass Object).'
    ],
    challenge: {
      instruction: 'Ubah string JSON \'{"nama":"Fadila","role":"ADMIN"}\' menjadi Array PHP menggunakan json_decode($json, true).',
      starterCode: `<?php
$json = '{"nama":"Fadila","role":"ADMIN"}';
$arr = json_decode($json, true);
echo "Nama: " . $arr["nama"] . " | Role: " . $arr["role"];
?>`,
      hint: 'Gunakan json_decode($json, true).'
    },
    quiz: {
      question: 'Agar json_decode() mengembalikan data dalam bentuk Associative Array di PHP, parameter kedua harus bernilai:',
      options: [
        'true',
        'false',
        'null',
        '1'
      ],
      correctIndex: 0,
      explanation: 'json_decode($json, true) mengonversi JSON menjadi Associative Array. Jika diisi false (default), hasilnya adalah stdClass Object.'
    }
  },

  // 13. PHP EXCEPTIONS
  {
    id: 'php-adv-exceptions',
    title: 'PHP Exceptions',
    chapter: 'PHP Advanced',
    chapterId: 'php-chap-advanced',
    order: 13,
    overview: 'Kuasai penanganan kesalahan modern (Exception Handling) di PHP: blok try-catch-finally, melempar exception dengan throw new Exception(), getMessage(), getCode(), dan kustom exception class.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PENANGANAN ERROR</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 13 / 13</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛡️ Exception Handling (try...catch...finally)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Exceptions adalah mekanisme penanganan error terstruktur. Alih-alih membiarkan aplikasi crash di depan pengguna, Anda dapat menangkap error (catch) dan memberikan pesan yang ramah atau mencatatnya ke log server.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs border border-slate-800 space-y-2">
          <pre class="text-sky-300">try {
    // Kode yang berpotensi memicu error
    if ($error) throw new Exception("Pesan kesalahan", 400);
} catch (Exception $e) {
    // Tangkap dan atasi error di sini
    echo $e->getMessage();
} finally {
    // Selalu dieksekusi apa pun yang terjadi (misal tutup koneksi DB)
}</pre>
        </div>
      </div>
    `,
    code: `<?php
// Fungsi pembagian dengan validasi Exception
function bagiAngka(float $pembilang, float $penyebut): float {
    if ($penyebut == 0) {
        throw new InvalidArgumentException("Kesalahan Matematika: Tidak dapat membagi angka dengan nol (Division by Zero)!");
    }
    return $pembilang / $penyebut;
}

echo "<h3>Uji Coba Penanganan Exception:</h3>";

try {
    $hasil1 = bagiAngka(100, 4);
    echo "<p style='color: green;'>✓ 100 dibagi 4 = <strong>$hasil1</strong></p>";

    // Operasi yang sengaja memicu Exception
    $hasil2 = bagiAngka(50, 0);
    echo "<p>Hasil: $hasil2</p>";
} catch (Exception $e) {
    echo "<div style='padding: 12px; background: #fee2e2; border-left: 4px solid #ef4444; color: #991b1b;'>";
    echo "⚠️ <strong>Tertangkap Exception:</strong> " . $e->getMessage();
    echo "</div>";
} finally {
    echo "<p style='font-size: 11px; color: #64748b; margin-top: 10px;'>🔒 Blok finally: Pembersihan memori dan koneksi selesai.</p>";
}
?>`,
    codeExplanation: [
      'Kata kunci throw melempar objek Exception baru saat kondisi tidak valid terdeteksi.',
      'Blok catch (Exception $e) menangkap objek error dan mengekstrak pesannya dengan $e->getMessage().',
      'Blok finally dijamin selalu dijalankan, baik terjadi error maupun sukses.'
    ],
    challenge: {
      instruction: 'Lempar Exception baru jika variabel $saldo < 0 dengan throw new Exception("Saldo negatif!").',
      starterCode: `<?php
try {
    $saldo = -500;
    if ($saldo < 0) {
        throw new Exception("Saldo tidak boleh negatif!");
    }
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
?>`,
      hint: 'Gunakan throw new Exception("pesan");'
    },
    quiz: {
      question: 'Blok manakah di dalam struktur try-catch-finally yang DIJAMIN PASTI SELALU DIEKSEKUSI tanpa memandang apakah terjadi error atau tidak?',
      options: [
        'Blok finally',
        'Blok catch',
        'Blok try saja',
        'Blok throw'
      ],
      correctIndex: 0,
      explanation: 'Blok finally selalu dijalankan di akhir proses penanganan exception, sangat ideal untuk menutup koneksi database dan file resource.'
    }
  }
];

module.exports = phpPart5Advanced;
