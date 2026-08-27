// ==========================================
// DATA MATERI PHP: BAB 1 - PHP TUTORIAL
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================

const phpPart1Tutorial = [
  // 1. PHP HOME
  {
    id: 'php-home',
    title: 'PHP HOME',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 1,
    overview: 'Selamat datang di modul pembelajaran PHP 8.x modern! Pelajari bahasa pemrograman server-side terpopuler di dunia yang menggerakkan lebih dari 75% website di internet termasuk WordPress, Wikipedia, dan Facebook.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PHP 8.X</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 01 / 19</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🐘 Selamat Datang di Dunia Pemrograman PHP</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <strong>PHP</strong> (akronim rekursif untuk <em>PHP: Hypertext Preprocessor</em>) adalah bahasa skrip server-side sumber terbuka (open-source) yang dirancang khusus untuk membangun aplikasi web dinamis, REST API yang kuat, dan manajemen database berskala global.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800/50">
            <div class="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center font-black text-sm mb-2">⚡</div>
            <h4 class="font-bold text-slate-800 dark:text-white text-sm mb-1">Server-Side Execution</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400">Kode dieksekusi di server web, dan hasilnya dikirimkan ke browser pengguna dalam bentuk HTML murni.</p>
          </div>
          <div class="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-800/50">
            <div class="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-black text-sm mb-2">🗄️</div>
            <h4 class="font-bold text-slate-800 dark:text-white text-sm mb-1">Integrasi Database Luas</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400">Mendukung koneksi langsung ke MySQL, PostgreSQL, SQLite, Oracle, dan MongoDB dengan PDO yang aman.</p>
          </div>
          <div class="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/50">
            <div class="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-black text-sm mb-2">🚀</div>
            <h4 class="font-bold text-slate-800 dark:text-white text-sm mb-1">Ekosistem Raksasa</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400">Fondasi utama framework modern berstandar enterprise seperti Laravel, Symfony, serta platform CMS terbesar dunia.</p>
          </div>
        </div>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 space-y-3 border border-slate-800">
          <h3 class="text-base font-black text-amber-400 flex items-center gap-2">
            <span>💡</span> Fakta Menarik Mengapa Harus Belajar PHP:
          </h3>
          <ul class="space-y-2 text-xs md:text-sm text-slate-300">
            <li class="flex items-start gap-2">
              <span class="text-emerald-400 font-bold">✓</span>
              <span><strong>Mudah Dipelajari:</strong> Sintaks PHP ramah pemula dan langsung dapat disisipkan di dalam kode HTML.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-400 font-bold">✓</span>
              <span><strong>PHP 8.x Performa Tinggi:</strong> Dilengkapi JIT (Just-In-Time) compiler, Named Arguments, Match Expressions, dan Typed Properties.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-400 font-bold">✓</span>
              <span><strong>Peluang Karir Terbuka Lebar:</strong> Ribuan perusahaan dan agensi teknologi global terus mencari Backend Developer PHP & Laravel.</span>
            </li>
          </ul>
        </div>
      </div>
    `,
    code: `<?php
// Contoh Skrip Pertama PHP 8.x
$bahasa = "PHP";
$versi = "8.3";
$status = "Modern & Cepat";

echo "<h1>Selamat Datang di Pembelajaran " . $bahasa . " " . $versi . "!</h1>";
echo "<p>Status: <strong style='color: green;'>" . $status . "</strong></p>";
echo "<p>Waktu Server Sekarang: " . date("d F Y, H:i:s") . " WIB</p>";
?>`,
    codeExplanation: [
      'Tag pembuka <?php menandai awal blok kode PHP yang akan diproses oleh web server.',
      'Variabel dalam PHP selalu diawali dengan simbol dollar ($), contoh: $bahasa dan $versi.',
      'Perintah echo digunakan untuk mencetak output teks atau kode HTML ke browser pengguna.',
      'Operator titik (.) digunakan untuk menggabungkan (concatenate) string dan variabel.',
      'Fungsi bawaan date("d F Y, H:i:s") menghasilkan waktu server saat ini secara realtime.'
    ],
    challenge: {
      instruction: 'Ubah nilai variabel $nama dengan namamu dan cetak kalimat sapaan menggunakan echo.',
      starterCode: `<?php
$nama = "Pengembang Web";
echo "Halo dunia, perkenalkan saya " . $nama . "!";
?>`,
      hint: 'Ganti string "Pengembang Web" dengan namamu sendiri, lalu klik RUN untuk melihat hasilnya.'
    },
    quiz: {
      question: 'Di mana kode PHP dieksekusi saat pengguna mengakses suatu website?',
      options: [
        'Di Web Server sebelum dikirimkan ke browser pengguna sebagai HTML',
        'Langsung di dalam browser pengguna (Client-Side)',
        'Di dalam aplikasi text editor pengembang',
        'Di perangkat router internet'
      ],
      correctIndex: 0,
      explanation: 'PHP adalah bahasa pemrograman server-side. Skrip diproses sepenuhnya di server web, kemudian hasilnya dikirimkan ke browser pengguna dalam bentuk HTML biasa.'
    }
  },

  // 2. PHP INTRO
  {
    id: 'php-intro',
    title: 'PHP Intro',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 2,
    overview: 'Pahami apa itu PHP, bagaimana cara kerjanya di balik layar, kelebihan utamanya dibanding bahasa server lain, dan mengapa PHP tetap menjadi tulang punggung web modern.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PENGENALAN</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 02 / 19</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Apa Itu Sebenarnya PHP?</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            File PHP memiliki ekstensi default <code>.php</code> dan dapat memuat campuran teks biasa, tag HTML, CSS, JavaScript, serta skrip PHP itu sendiri.
          </p>
        </div>

        <div class="space-y-3">
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h4 class="font-bold text-slate-800 dark:text-white text-sm mb-1 text-purple-600 dark:text-purple-400">1. Alur Kerja Server-Side PHP (Request - Response Cycle)</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400 mb-2">
              Klien meminta halaman -> Web Server (Apache/Nginx) memanggil PHP Engine -> PHP memproses logika dan database -> Server mengirimkan output HTML bersih ke browser. Klien tidak pernah melihat kode sumber PHP aslinya.
            </p>
          </div>

          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h4 class="font-bold text-slate-800 dark:text-white text-sm mb-1 text-indigo-600 dark:text-indigo-400">2. Kemampuan Utama PHP</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400 mb-2">
              Menghasilkan halaman dinamis, membuat, membuka, membaca, menulis, dan menutup file di server, mengumpulkan data formulir form (POST/GET), mengirim dan menerima cookie serta sesi autentikasi pengguna.
            </p>
          </div>

          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h4 class="font-bold text-slate-800 dark:text-white text-sm mb-1 text-emerald-600 dark:text-emerald-400">3. Keamanan & Enkripsi</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400 mb-2">
              PHP dapat mengenkripsi data sensitif (seperti hash password <code>password_hash()</code>), membatasi hak akses halaman admin, dan memfilter input dari serangan XSS & SQL Injection.
            </p>
          </div>
        </div>
      </div>
    `,
    code: `<?php
// Mengecek versi PHP dan informasi server
$namaServer = $_SERVER['SERVER_SOFTWARE'] ?? 'Local Server DevGrow';
$phpVersion = phpversion();

echo "<h3>Informasi Lingkungan Server:</h3>";
echo "<ul>";
echo "<li><strong>Versi PHP:</strong> " . $phpVersion . "</li>";
echo "<li><strong>Web Server:</strong> " . $namaServer . "</li>";
echo "<li><strong>Protokol:</strong> " . ($_SERVER['SERVER_PROTOCOL'] ?? 'HTTP/1.1') . "</li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'Variabel global $_SERVER adalah array bawaan PHP yang menyimpan informasi server, header, dan jalur eksekusi.',
      'Fungsi phpversion() mengembalikan nomor versi PHP yang sedang aktif.',
      'Operator null coalescing (??) memberikan nilai cadangan (default) jika variabel tidak didefinisikan.'
    ],
    challenge: {
      instruction: 'Tambahkan baris echo baru untuk menampilkan teks "PHP Siap Digunakan!" dengan gaya font tebal.',
      starterCode: `<?php
echo "<h3>Status PHP:</h3>";
// Tulis baris echo kamu di bawah ini
`,
      hint: 'Gunakan echo "<strong>PHP Siap Digunakan!</strong>";'
    },
    quiz: {
      question: 'Apakah pengguna (client) di browser dapat melihat kode sumber PHP asli dengan Inspect Element / View Page Source?',
      options: [
        'Tidak, karena PHP dieksekusi di server dan browser hanya menerima output HTML murni',
        'Ya, semua kode PHP terlihat jelas di menu inspect element',
        'Hanya jika pengguna menggunakan browser Google Chrome',
        'Ya, jika pengguna membuka file dengan ekstensi .php'
      ],
      correctIndex: 0,
      explanation: 'Tidak bisa. Browser hanya menerima hasil akhir (HTML/CSS/JS/JSON) yang dikirim oleh web server. Kode PHP mentah tetap aman tersimpan di dalam server.'
    }
  },

  // 3. PHP INSTALL
  {
    id: 'php-install',
    title: 'PHP Install',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 3,
    overview: 'Pelajari cara instalasi dan penyiapan lingkungan pengembangan lokal (Local Development Environment) untuk PHP menggunakan XAMPP, Laragon, Docker, atau PHP Built-in Web Server.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SETUP & INSTALL</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 03 / 19</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚙️ Mempersiapkan Web Server Lokal</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Untuk menjalankan skrip PHP di komputer lokal, Anda membutuhkan 3 komponen utama: <strong>Web Server (Apache/Nginx)</strong>, <strong>PHP Interpreter</strong>, dan <strong>Database Engine (MySQL/MariaDB)</strong>.
          </p>
        </div>

        <div class="space-y-4">
          <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <h3 class="text-base font-black text-slate-800 dark:text-white flex items-center gap-2">
              <span class="w-7 h-7 rounded-lg bg-purple-600 text-white flex items-center justify-center text-xs font-black">1</span>
              <span>Paket All-in-One (XAMPP / Laragon)</span>
            </h3>
            <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Pilihan paling populer bagi pemula. Cukup unduh dan instal XAMPP dari apachefriends.org atau Laragon dari laragon.org. Letakkan file proyek Anda di folder <code>htdocs/</code> (XAMPP) atau <code>www/</code> (Laragon).
            </p>
          </div>

          <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <h3 class="text-base font-black text-slate-800 dark:text-white flex items-center gap-2">
              <span class="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-black">2</span>
              <span>PHP Built-In Web Server (Command Line)</span>
            </h3>
            <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              PHP memiliki server bawaan ringan tanpa perlu konfigurasi Apache. Buka terminal di folder proyek Anda dan ketikkan perintah:
            </p>
            <pre class="bg-slate-950 text-slate-200 p-2.5 rounded text-[11px] font-mono">php -S localhost:8000</pre>
          </div>
        </div>
      </div>
    `,
    code: `<?php
// Skrip cek status konfigurasi PHP (phpinfo singkat)
$memoryLimit = ini_get('memory_limit');
$maxExecutionTime = ini_get('max_execution_time');
$uploadMaxFilesize = ini_get('upload_max_filesize');

echo "<h3>Konfigurasi PHP Aktif:</h3>";
echo "<table border='1' cellpadding='8' style='border-collapse: collapse; width: 100%;'>";
echo "<tr style='background: #f1f5f9;'><th>Parameter</th><th>Nilai Saat Ini</th></tr>";
echo "<tr><td>Batas Memori (memory_limit)</td><td>" . $memoryLimit . "</td></tr>";
echo "<tr><td>Maks Waktu Eksekusi (detik)</td><td>" . $maxExecutionTime . "s</td></tr>";
echo "<tr><td>Maks Ukuran Upload File</td><td>" . $uploadMaxFilesize . "</td></tr>";
echo "</table>";
?>`,
    codeExplanation: [
      'Fungsi ini_get() digunakan untuk membaca nilai pengaturan konfigurasi dari file php.ini.',
      'memory_limit menentukan batas maksimal RAM yang boleh digunakan oleh satu proses skrip PHP.',
      'Kombinasi tag HTML dan PHP memungkinkan pembuatan tabel laporan sistem secara instan.'
    ],
    challenge: {
      instruction: 'Coba panggil fungsi timezone aktif menggunakan date_default_timezone_get() dan tampilkan nilainya.',
      starterCode: `<?php
$tz = date_default_timezone_get();
echo "Zona waktu server: " . $tz;
?>`,
      hint: 'Klik RUN untuk melihat zona waktu yang sedang digunakan oleh interpreter PHP.'
    },
    quiz: {
      question: 'File konfigurasi utama untuk mengatur settingan PHP (seperti memory limit dan upload limit) bernama:',
      options: [
        'php.ini',
        'config.php',
        'server.conf',
        'settings.json'
      ],
      correctIndex: 0,
      explanation: 'File php.ini adalah file konfigurasi utama yang dibaca saat PHP pertama kali dinyalakan oleh web server.'
    }
  },

  // 4. PHP SYNTAX
  {
    id: 'php-syntax',
    title: 'PHP Syntax',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 4,
    overview: 'Kuasai aturan dasar penulisan sintaks PHP: tag pembuka & penutup, case-sensitivity pada variabel vs fungsi, dan tanda titik koma (semicolon) yang wajib.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SINTAKS DASAR</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 04 / 19</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">✍️ Aturan Dasar Sintaks PHP</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Setiap pernyataan dalam PHP harus diakhiri dengan tanda titik koma (<code>;</code>). Jika file murni hanya berisi kode PHP tanpa HTML penutup, tag penutup <code>?&gt;</code> di akhir file sebaiknya dihilangkan untuk mencegah whitespace yang tidak disengaja.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h4 class="font-bold text-rose-600 dark:text-rose-400 text-sm mb-1">⚠️ Variabel bersifat Case-Sensitive</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400">
              <code>$warna</code>, <code>$Warna</code>, dan <code>$WARNA</code> dianggap sebagai 3 variabel yang sepenuhnya berbeda!
            </p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h4 class="font-bold text-emerald-600 dark:text-emerald-400 text-sm mb-1">✓ Keyword & Fungsi Case-Insensitive</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400">
              Kata kunci seperti <code>if</code>, <code>else</code>, <code>while</code>, <code>echo</code>, dan fungsi bawaan tidak membedakan huruf besar/kecil.
            </p>
          </div>
        </div>
      </div>
    `,
    code: `<?php
// Demonstrasi Case-Sensitivity pada PHP
$warnaMobil = "Merah";
$warnamobil = "Biru";

// Fungsi dan keyword bebas huruf besar/kecil (namun disarankan lowercase)
ECHO "Mobil 1 berwarna: " . $warnaMobil . "<br>";
echo "Mobil 2 berwarna: " . $warnamobil . "<br>";

// Variabel berbeda menghasilkan nilai berbeda
?>`,
    codeExplanation: [
      'Variabel $warnaMobil dan $warnamobil memiliki kapitalisasi berbeda, sehingga menyimpan nilai yang terpisah.',
      'Perintah ECHO dan echo keduanya valid dan dapat mengeksekusi fungsi cetak yang sama.',
      'Tag <br> menghasilkan baris baru di browser output.'
    ],
    challenge: {
      instruction: 'Buat 2 variabel bernama $kota dan $KOTA dengan nama kota berbeda, lalu cetak keduanya.',
      starterCode: `<?php
$kota = "Jakarta";
$KOTA = "Bandung";

echo "Kota 1: " . $kota . " | Kota 2: " . $KOTA;
?>`,
      hint: 'Klik RUN untuk membuktikan bahwa PHP membedakan kedua variabel tersebut.'
    },
    quiz: {
      question: 'Manakah dari pernyataan berikut yang BENAR mengenai sifat case-sensitivity di PHP?',
      options: [
        'Nama variabel bersifat Case-Sensitive, sedangkan fungsi & keyword bawaan bersifat Case-Insensitive',
        'Semua variabel dan fungsi di PHP sepenuhnya case-insensitive',
        'Semua variabel dan fungsi di PHP sepenuhnya case-sensitive',
        'PHP tidak memerlukan tanda titik koma di akhir baris'
      ],
      correctIndex: 0,
      explanation: 'Di PHP, nama variabel ($variabel) membedakan huruf besar dan kecil, sedangkan nama fungsi, class, dan keyword bawaan (seperti echo, if, while) tidak membedakannya.'
    }
  },

  // 5. PHP COMMENTS
  {
    id: 'php-comments',
    title: 'PHP Comments',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 5,
    overview: 'Pelajari cara menulis komentar satu baris (single-line comments) menggunakan // dan # untuk mendokumentasikan alur logika kode Anda.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">KOMENTAR</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 05 / 19</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">💬 Komentar Satu Baris di PHP</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Komentar adalah catatan yang ditulis di dalam kode sumber untuk membantu manusia membaca alur program. Komentar diabaikan sepenuhnya oleh PHP interpreter saat eksekusi.
          </p>
        </div>

        <div class="space-y-3">
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h4 class="font-bold text-slate-800 dark:text-white text-sm mb-1 text-purple-600 dark:text-purple-400">1. Menggunakan Garis Miring Ganda (//)</h4>
            <pre class="bg-slate-950 text-slate-200 p-2.5 rounded text-[11px] font-mono">// Ini adalah komentar satu baris standar</pre>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h4 class="font-bold text-slate-800 dark:text-white text-sm mb-1 text-indigo-600 dark:text-indigo-400">2. Menggunakan Simbol Hash (#)</h4>
            <pre class="bg-slate-950 text-slate-200 p-2.5 rounded text-[11px] font-mono"># Gaya Unix / Shell script comment</pre>
          </div>
        </div>
      </div>
    `,
    code: `<?php
// Deklarasi variabel harga dasar
$harga = 150000;

# Menambahkan PPN 11%
$ppn = $harga * 0.11;

// Hitung total akhir
$total = $harga + $ppn;

echo "Harga Dasar: Rp " . number_format($harga, 0, ',', '.') . "<br>";
echo "PPN (11%): Rp " . number_format($ppn, 0, ',', '.') . "<br>";
echo "<strong>Total Bayar: Rp " . number_format($total, 0, ',', '.') . "</strong>";
?>`,
    codeExplanation: [
      'Komentar // dan # hanya berlaku pada baris tersebut hingga akhir baris.',
      'Fungsi number_format() mengubah angka mentah menjadi format mata uang dengan pemisah ribuan titik (.) dan desimal koma (,).'
    ],
    challenge: {
      instruction: 'Tambahkan komentar // sebelum kode echo yang menghitung total belanjaan.',
      starterCode: `<?php
$item = "Buku Pemrograman PHP";
// Cetak nama item
echo "Item: " . $item;
?>`,
      hint: 'Gunakan tanda // di awal baris komentar.'
    },
    quiz: {
      question: 'Simbol manakah yang dapat digunakan untuk membuat komentar satu baris di PHP?',
      options: [
        '// dan #',
        '<!-- dan -->',
        '/* dan */ saja',
        '-- dan **'
      ],
      correctIndex: 0,
      explanation: 'PHP mendukung komentar satu baris menggunakan dua garis miring (//) atau simbol tanda pagar (#).'
    }
  },

  // 6. PHP MULTILINE COMMENTS
  {
    id: 'php-comments-multiline',
    title: 'PHP Multiline Comments',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 6,
    overview: 'Pelajari penulisan komentar multi-baris (/* ... */) serta PHPDoc standar industri untuk dokumentasi fungsi dan class profesional.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">MULTILINE COMMENTS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 06 / 19</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📑 Komentar Multi-Baris & PHPDoc</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Komentar multi-baris diawali dengan <code>/*</code> dan diakhiri dengan <code>*/</code>. Sangat berguna untuk menonaktifkan blok kode saat debugging atau menulis dokumentasi fungsi (PHPDoc).
          </p>
        </div>

        <div class="p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs space-y-2 border border-slate-800">
          <div class="text-amber-400 font-bold">Contoh Standar PHPDoc:</div>
          <pre class="text-sky-300">/**
 * Menghitung diskon belanja pelanggan.
 * @param float $totalBelanja Total nilai belanja
 * @param float $persenDiskon Persentase potongan (0 - 100)
 * @return float Nilai setelah dipotong diskon
 */</pre>
        </div>
      </div>
    `,
    code: `<?php
/*
  Sistem Perhitungan Diskon
  Dibuat oleh: Tim Pengembang DevGrow
  Versi: 1.0.0
*/

function hitungDiskon(float $total, float $diskon): float {
    return $total - ($total * ($diskon / 100));
}

$belanja = 500000;
$diskon = 20; // 20%
$bayar = hitungDiskon($belanja, $diskon);

echo "Total Awal: Rp " . number_format($belanja, 0, ',', '.') . "<br>";
echo "Diskon: " . $diskon . "%<br>";
echo "<strong>Harus Dibayar: Rp " . number_format($bayar, 0, ',', '.') . "</strong>";
?>`,
    codeExplanation: [
      'Blok /* ... */ merangkum beberapa baris catatan tanpa harus menulis // di setiap baris.',
      'Sintaks pengetikan tipe parameter (float $total) adalah standar modern PHP 8 untuk kode yang aman dan minim bug.'
    ],
    challenge: {
      instruction: 'Buat blok komentar multi-baris yang menjelaskan tujuan program sederhana Anda.',
      starterCode: `<?php
/*
  Tulis deskripsi programmu di sini
*/
echo "Program berhasil dijalankan!";
?>`,
      hint: 'Pastikan blok komentar ditutup dengan */'
    },
    quiz: {
      question: 'Bagaimana sintaks untuk membuka dan menutup komentar multi-baris di PHP?',
      options: [
        '/* untuk buka dan */ untuk tutup',
        '<!-- untuk buka dan --> untuk tutup',
        '// untuk buka dan // untuk tutup',
        '{{ untuk buka dan }} untuk tutup'
      ],
      correctIndex: 0,
      explanation: 'Komentar multi-baris di PHP selalu dibuka dengan /* dan ditutup dengan */.'
    }
  },

  // 7. PHP VARIABLES
  {
    id: 'php-variables',
    title: 'PHP Variables',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 7,
    overview: 'Pahami cara deklarasi variabel dengan tanda $, aturan penamaan identifier yang valid, sifat loosely typed pada PHP, serta string interpolation.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">VARIABEL</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 07 / 19</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📦 Konsep Variabel di PHP</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Variabel adalah wadah penyimpanan nilai di memori. Di PHP, Anda tidak perlu mendeklarasikan tipe data secara eksplisit (<em>loosely typed</em>), PHP akan otomatis mendeteksi tipenya sesuai nilai yang dimasukkan.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/50">
            <h4 class="font-bold text-emerald-700 dark:text-emerald-400 text-sm mb-1">✓ Nama Variabel yang Valid</h4>
            <ul class="text-xs space-y-1 text-slate-600 dark:text-slate-400">
              <li><code>$nama</code> (huruf kecil)</li>
              <li><code>$_idPengguna</code> (diawali underscore)</li>
              <li><code>$totalBayar2024</code> (huruf & angka)</li>
            </ul>
          </div>
          <div class="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-800/50">
            <h4 class="font-bold text-rose-700 dark:text-rose-400 text-sm mb-1">✗ Nama Variabel yang SALAH</h4>
            <ul class="text-xs space-y-1 text-slate-600 dark:text-slate-400">
              <li><code>$1nama</code> (tidak boleh diawali angka)</li>
              <li><code>$nama user</code> (tidak boleh ada spasi)</li>
              <li><code>$total-harga</code> (tidak boleh tanda minus)</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    code: `<?php
// Deklarasi berbagai variabel
$namaProduk = "Laptop Ultrabook"; // String
$stok = 15;                       // Integer
$harga = 12500000.50;             // Float
$isTersedia = true;               // Boolean

// String Interpolation (hanya berlaku dalam tanda petik ganda "")
echo "<h3>Informasi Produk:</h3>";
echo "<p>Produk: <strong>$namaProduk</strong></p>";
echo "<p>Stok Tersedia: $stok unit</p>";
echo "<p>Harga Satuan: Rp " . number_format($harga, 2, ',', '.') . "</p>";
echo "<p>Status: " . ($isTersedia ? "Tersedia Siap Kirim" : "Habis") . "</p>";
?>`,
    codeExplanation: [
      'Tanda petik ganda ("") mendukung interpolasi variabel langsung di dalam string (seperti "$namaProduk").',
      'Tanda petik tunggal (\'\') memperlakukan teks apa adanya tanpa mengurai variabel di dalamnya.',
      'Operator ternary (? :) adalah bentuk singkat dari percabangan if-else.'
    ],
    challenge: {
      instruction: 'Deklarasikan variabel $umur dan cetak kalimat "Umur saya adalah [umur] tahun".',
      starterCode: `<?php
$umur = 20;
echo "Umur saya adalah $umur tahun.";
?>`,
      hint: 'Gunakan string interpolation dengan tanda petik ganda.'
    },
    quiz: {
      question: 'Manakah nama variabel PHP yang TIDAK VALID dan akan menyebabkan error?',
      options: [
        '$4score',
        '$_user_id',
        '$totalScore',
        '$nama_lengkap'
      ],
      correctIndex: 0,
      explanation: 'Nama variabel di PHP tidak boleh diawali dengan angka setelah tanda dollar ($).'
    }
  },

  // 8. PHP VARIABLES SCOPE
  {
    id: 'php-variables-scope',
    title: 'Variables Scope',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 8,
    overview: 'Pahami 3 ruang lingkup (scope) variabel dalam PHP: Local Scope, Global Scope (beserta keyword global & array $GLOBALS), dan Static Scope.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">VARIABLE SCOPE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 08 / 19</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎯 Ruang Lingkup Variabel (Variable Scope)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Scope menentukan di mana suatu variabel dapat diakses di dalam kode program Anda.
          </p>
        </div>

        <div class="space-y-3">
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h4 class="font-bold text-purple-600 dark:text-purple-400 text-sm mb-1">1. Global Scope</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400">
              Variabel yang dideklarasikan di luar fungsi. Hanya bisa diakses di luar fungsi, kecuali menggunakan kata kunci <code>global $var;</code> atau array superglobal <code>$GLOBALS['var']</code> di dalam fungsi.
            </p>
          </div>

          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h4 class="font-bold text-indigo-600 dark:text-indigo-400 text-sm mb-1">2. Local Scope</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400">
              Variabel yang dideklarasikan di dalam suatu fungsi. Bersifat privat dan hanya hidup selama fungsi tersebut dieksekusi.
            </p>
          </div>

          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h4 class="font-bold text-amber-600 dark:text-amber-400 text-sm mb-1">3. Static Scope</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400">
              Dengan menambahkan kata kunci <code>static</code> di depan variabel lokal, nilainya TIDAK akan dihapus setelah fungsi selesai dijalankan, melainkan dipertahankan untuk pemanggilan berikutnya.
            </p>
          </div>
        </div>
      </div>
    `,
    code: `<?php
$kursDollar = 16000; // Global Variable

function konversiRupiah($dollar) {
    global $kursDollar; // Mengakses variabel global di dalam fungsi
    return $dollar * $kursDollar;
}

function hitungKunjungan() {
    static $counter = 0; // Static variable mempertahankan nilainya
    $counter++;
    echo "Pengunjung ke-" . $counter . "<br>";
}

echo "Hasil Konversi $100: Rp " . number_format(konversiRupiah(100), 0, ',', '.') . "<br><br>";

echo "<strong>Panggilan Fungsi Berulang (Static Scope):</strong><br>";
hitungKunjungan();
hitungKunjungan();
hitungKunjungan();
?>`,
    codeExplanation: [
      'Kata kunci global $kursDollar memberitahu PHP untuk menggunakan variabel yang ada di scope global terluar.',
      'Variabel static $counter nilainya terus bertambah (1 -> 2 -> 3) setiap kali fungsi hitungKunjungan() dipanggil.'
    ],
    challenge: {
      instruction: 'Panggil fungsi hitungKunjungan() sebanyak 2 kali lagi untuk melihat counter bertambah ke 4 dan 5.',
      starterCode: `<?php
function hitungKunjungan() {
    static $counter = 0;
    $counter++;
    echo "Kunjungan: $counter <br>";
}

hitungKunjungan();
hitungKunjungan();
// Tambahkan 2 pemanggilan lagi di bawah ini:
?>`,
      hint: 'Tuliskan hitungKunjungan(); dua kali lagi.'
    },
    quiz: {
      question: 'Kata kunci apa yang digunakan untuk mempertahankan nilai variabel lokal agar tidak di-reset saat fungsi dipanggil berulang kali?',
      options: [
        'static',
        'global',
        'constant',
        'final'
      ],
      correctIndex: 0,
      explanation: 'Kata kunci static di dalam fungsi membuat variabel mempertahankan nilai terakhirnya di antara pemanggilan fungsi.'
    }
  },

  // 9. PHP ECHO / PRINT
  {
    id: 'php-echo-print',
    title: 'PHP Echo / Print',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 9,
    overview: 'Pahami perbedaan mendasar antara echo dan print dalam PHP, performa eksekusi, serta cara mencetak teks, variabel, dan struktur HTML secara efisien.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">OUTPUT STATEMENTS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 09 / 19</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📢 Perbedaan echo vs print di PHP</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Keduanya digunakan untuk menampilkan data ke layar browser, namun memiliki perbedaan teknis penting.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800/50">
            <h4 class="font-bold text-purple-700 dark:text-purple-400 text-sm mb-1">Perintah <code>echo</code></h4>
            <ul class="text-xs space-y-1 text-slate-600 dark:text-slate-400">
              <li>• Tidak mengembalikan nilai apa pun (void).</li>
              <li>• Sedikit lebih cepat dari print.</li>
              <li>• Dapat menerima beberapa argumen dipisahkan koma: <code>echo "A", "B", "C";</code>.</li>
            </ul>
          </div>
          <div class="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-800/50">
            <h4 class="font-bold text-indigo-700 dark:text-indigo-400 text-sm mb-1">Perintah <code>print</code></h4>
            <ul class="text-xs space-y-1 text-slate-600 dark:text-slate-400">
              <li>• Selalu mengembalikan nilai integer <code>1</code>.</li>
              <li>• Dapat digunakan di dalam ekspresi kondisional.</li>
              <li>• Hanya dapat menerima satu argumen saja.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    code: `<?php
$judul = "Tutorial PHP 8";
$topik = "Output Statements";

// Menggunakan echo dengan koma (multi-argumen)
echo "<h3>", $judul, "</h3>";
echo "<p>Materi hari ini membahas: <strong>", $topik, "</strong></p>";

// Menggunakan print (mengembalikan nilai 1)
$hasilPrint = print("Teks ini dicetak menggunakan fungsi print().<br>");
echo "Nilai kembalian dari print: " . $hasilPrint;
?>`,
    codeExplanation: [
      'echo dapat mencetak banyak string sekaligus dengan memisahkannya menggunakan tanda koma (,).',
      'print selalu menghasilkan return value bernilai 1 setelah sukses mencetak teks.'
    ],
    challenge: {
      instruction: 'Cetak sebuah heading <h2> dan paragraf <p> menggunakan perintah echo.',
      starterCode: `<?php
echo "<h2>Belajar Web Backend</h2>";
echo "<p>PHP sangat mudah dan menyenangkan!</p>";
?>`,
      hint: 'Gunakan echo untuk mengeluarkan tag HTML ke halaman.'
    },
    quiz: {
      question: 'Manakah pernyataan yang benar mengenai echo dan print?',
      options: [
        'echo sedikit lebih cepat dan dapat menerima banyak parameter dipisahkan koma',
        'print jauh lebih cepat daripada echo',
        'echo selalu mengembalikan angka 1',
        'print dapat menerima banyak parameter koma sekaligus'
      ],
      correctIndex: 0,
      explanation: 'echo lebih cepat karena tidak memiliki nilai kembalian (return value) dan mendukung banyak parameter dipisahkan koma.'
    }
  },

  // 10. PHP DATA TYPES
  {
    id: 'php-datatypes',
    title: 'PHP Data Types',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 10,
    overview: 'Kuasai 8 tipe data primitif dan komposit di PHP: String, Integer, Float, Boolean, Array, Object, NULL, dan Resource beserta fungsi var_dump().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TIPE DATA</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 10 / 19</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📊 Ragam Tipe Data di PHP</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Variabel dapat menampung data dari berbagai tipe, dan masing-masing memiliki karakteristik operasi yang berbeda.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-purple-600 dark:text-purple-400 block mb-1">1. String</strong>
            Teks berurutan: <code>"Halo"</code>
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-indigo-600 dark:text-indigo-400 block mb-1">2. Integer</strong>
            Bilangan bulat: <code>42, -10</code>
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-cyan-600 dark:text-cyan-400 block mb-1">3. Float (Double)</strong>
            Bilangan desimal: <code>3.14159</code>
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-emerald-600 dark:text-emerald-400 block mb-1">4. Boolean</strong>
            Kebenaran: <code>true / false</code>
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-amber-600 dark:text-amber-400 block mb-1">5. Array</strong>
            Kumpulan nilai: <code>[1, 2, 3]</code>
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-pink-600 dark:text-pink-400 block mb-1">6. Object</strong>
            Instansiasi Class OOP
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-rose-600 dark:text-rose-400 block mb-1">7. NULL</strong>
            Variabel tanpa nilai
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-slate-600 dark:text-slate-400 block mb-1">8. Resource</strong>
            Handle eksternal (DB/File)
          </div>
        </div>
      </div>
    `,
    code: `<?php
// Menguji berbagai tipe data dengan var_dump()
$str = "DevGrow Academy";
$angka = 2024;
$pi = 3.14;
$aktif = true;
$daftar = ["PHP", "Laravel", "MySQL"];
$kosong = null;

echo "<h3>Hasil Inspeksi var_dump():</h3>";
echo "<pre style='background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 10px;'>";
var_dump($str);
echo "\n";
var_dump($angka);
echo "\n";
var_dump($pi);
echo "\n";
var_dump($aktif);
echo "\n";
var_dump($daftar);
echo "\n";
var_dump($kosong);
echo "</pre>";
?>`,
    codeExplanation: [
      'Fungsi var_dump() mencetak informasi rinci mengenai tipe data dan nilai dari variabel.',
      'Sangat berguna untuk proses penelusuran error (debugging) dan memahami struktur data kompleks.'
    ],
    challenge: {
      instruction: 'Buat sebuah variabel array berisi 3 nama makanan favorit dan inspeksi dengan var_dump().',
      starterCode: `<?php
$makanan = ["Nasi Goreng", "Sate Ayam", "Rendang"];
var_dump($makanan);
?>`,
      hint: 'Klik RUN untuk melihat struktur array yang ditampilkan.'
    },
    quiz: {
      question: 'Fungsi PHP apa yang paling sering digunakan untuk debugging karena menampilkan tipe data dan isi variabel secara rinci?',
      options: [
        'var_dump()',
        'echo()',
        'print_r() tanpa tipe data',
        'typeof()'
      ],
      correctIndex: 0,
      explanation: 'var_dump() menampilkan tipe data, panjang karakter (length), dan isi dari variabel secara mendetail.'
    }
  },

  // 11. PHP STRINGS
  {
    id: 'php-strings',
    title: 'PHP Strings',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 11,
    overview: 'Pelajari manipulasi teks string pada PHP: single quotes vs double quotes, string length, dan kata kunci dasar.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">STRINGS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 11 / 19</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧵 Bekerja dengan String di PHP</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            String adalah urutan karakter. Di PHP, string dapat diapit oleh tanda petik tunggal (<code>'...'</code>) atau tanda petik ganda (<code>"..."</code>).
          </p>
        </div>

        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
          <h4 class="font-bold text-slate-800 dark:text-white text-sm">Fungsi Dasar Panjang String:</h4>
          <p class="text-xs text-slate-600 dark:text-slate-400">
            <code>strlen($teks)</code> menghitung total panjang byte/karakter, dan <code>str_word_count($teks)</code> menghitung jumlah kata di dalam kalimat.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$kalimat = "Belajar PHP 8 di DevGrow Academy sangat menyenangkan!";

$panjangKarakter = strlen($kalimat);
$jumlahKata = str_word_count($kalimat);

echo "<h3>Analisis Teks:</h3>";
echo "<p>Kalimat: <em>\"$kalimat\"</em></p>";
echo "<ul>";
echo "<li><strong>Total Karakter:</strong> $panjangKarakter karakter</li>";
echo "<li><strong>Total Kata:</strong> $jumlahKata kata</li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'strlen() menghitung panjang total karakter termasuk spasi dan tanda baca.',
      'str_word_count() menghitung jumlah kata yang dipisahkan oleh spasi.'
    ],
    challenge: {
      instruction: 'Cari tahu berapa panjang karakter dari string "Pemrograman Web Modern".',
      starterCode: `<?php
$teks = "Pemrograman Web Modern";
echo "Panjang teks: " . strlen($teks);
?>`,
      hint: 'Gunakan fungsi strlen($teks).'
    },
    quiz: {
      question: 'Fungsi PHP apa yang digunakan untuk menghitung jumlah kata dalam sebuah string?',
      options: [
        'str_word_count()',
        'strlen()',
        'count_words()',
        'word_length()'
      ],
      correctIndex: 0,
      explanation: 'str_word_count() menghitung berapa banyak kata yang terdapat di dalam sebuah string.'
    }
  },

  // 12. STRING FUNCTIONS
  {
    id: 'php-strings-functions',
    title: 'String Functions',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 12,
    overview: 'Kuasai fungsi-fungsi bawaan pemroses string terpopuler: strpos(), str_replace(), strrev(), dan trim().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">STRING FUNCTIONS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 12 / 19</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛠️ Fungsi-Fungsi Manipulasi Teks</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            PHP menyediakan ratusan fungsi bawaan untuk mencari kata, mengganti substring, dan membersihkan teks input.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-purple-600 dark:text-purple-400 block mb-1">strpos($str, $search)</strong>
            Mencari posisi indeks awal kata (0-indexed). Jika tidak ditemukan menghasilkan false.
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-indigo-600 dark:text-indigo-400 block mb-1">str_replace($cari, $ganti, $str)</strong>
            Mengganti semua kemunculan kata tertentu dengan kata baru.
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-cyan-600 dark:text-cyan-400 block mb-1">strrev($str)</strong>
            Membalik urutan karakter dari belakang ke depan.
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-emerald-600 dark:text-emerald-400 block mb-1">trim($str)</strong>
            Menghapus spasi dan tab di awal serta akhir teks.
          </div>
        </div>
      </div>
    `,
    code: `<?php
$teksAsli = "   Halo Dunia Pemrograman PHP!   ";

// 1. Membersihkan spasi di ujung
$bersih = trim($teksAsli);

// 2. Mencari posisi kata 'PHP'
$posisiPHP = strpos($bersih, "PHP");

// 3. Mengganti kata 'Dunia' menjadi 'Semesta'
$diganti = str_replace("Dunia", "Semesta", $bersih);

// 4. Membalik teks
$terbalik = strrev("KODING");

echo "<p><strong>Teks Bersih:</strong> \"$bersih\"</p>";
echo "<p><strong>Posisi kata 'PHP':</strong> Indeks ke-$posisiPHP</p>";
echo "<p><strong>Hasil Replace:</strong> $diganti</p>";
echo "<p><strong>Hasil Reverse:</strong> $terbalik</p>";
?>`,
    codeExplanation: [
      'trim() sangat penting digunakan sebelum menyimpan input formulir ke database agar terbebas dari spasi tak terlihat.',
      'strpos() mengembalikan indeks posisi karakter pertama yang cocok (berbasis 0).',
      'str_replace() melakukan penggantian teks secara instan tanpa mengubah variabel aslinya.'
    ],
    challenge: {
      instruction: 'Gunakan str_replace untuk mengganti kata "buruk" menjadi "hebat" pada kalimat "$status = \"Kinerja sangat buruk!\";".',
      starterCode: `<?php
$status = "Kinerja sangat buruk!";
$hasil = str_replace("buruk", "hebat", $status);
echo $hasil;
?>`,
      hint: 'Format fungsi: str_replace("yang_dicari", "pengganti", $sumber);'
    },
    quiz: {
      question: 'Apa output dari fungsi strpos("Halo Indonesia", "Indonesia")?',
      options: [
        '5 (indeks ke-5)',
        '1 (karena ditemukan)',
        'true',
        '0'
      ],
      correctIndex: 0,
      explanation: 'Indeks huruf "I" dimulai pada posisi ke-5 ("H"=0, "a"=1, "l"=2, "o"=3, " "=4, "I"=5).'
    }
  },

  // 13. MODIFY STRINGS
  {
    id: 'php-strings-modify',
    title: 'Modify Strings',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 13,
    overview: 'Pelajari cara mengubah huruf besar/kecil (strtoupper, strtolower, ucfirst, ucwords) dan memotong string menjadi array (explode).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">MODIFY STRINGS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 13 / 19</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔡 Mengubah Format Huruf & Memecah String</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Mengatur standarisasi huruf kapital sangat krusial dalam pemrosesan data nama pengguna, email, dan judul artikel.
          </p>
        </div>

        <div class="space-y-3">
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h4 class="font-bold text-purple-600 dark:text-purple-400 text-sm mb-1">Kapitalisasi:</h4>
            <ul class="text-xs space-y-1 text-slate-600 dark:text-slate-400">
              <li><code>strtoupper($str)</code>: Mengubah SEMUA huruf menjadi KAPITAL.</li>
              <li><code>strtolower($str)</code>: Mengubah SEMUA huruf menjadi kecil.</li>
              <li><code>ucwords($str)</code>: Mengubah Huruf Pertama Setiap Kata Menjadi Kapital (Title Case).</li>
              <li><code>ucfirst($str)</code>: Mengubah hanya huruf pertama dari seluruh kalimat.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    code: `<?php
$namaLengkap = "muhammad rahmat fadila";
$emailInput = "USER.DEV@GMAIL.COM";

echo "<h3>Contoh Modifikasi String:</h3>";
echo "<p><strong>Nama Asli:</strong> $namaLengkap</p>";
echo "<p><strong>Kapital Total (strtoupper):</strong> " . strtoupper($namaLengkap) . "</p>";
echo "<p><strong>Format Nama Rapi (ucwords):</strong> " . ucwords($namaLengkap) . "</p>";
echo "<p><strong>Email Bersih (strtolower):</strong> " . strtolower($emailInput) . "</p>";

// Memecah string menjadi Array dengan explode()
$hobi = "Koding, Gaming, Membaca, Musik";
$arrayHobi = explode(", ", $hobi);

echo "<h4>Daftar Hobi (Hasil explode):</h4>";
echo "<ol>";
foreach ($arrayHobi as $item) {
    echo "<li>$item</li>";
}
echo "</ol>";
?>`,
    codeExplanation: [
      'ucwords() sangat ideal untuk merapikan nama pengguna sebelum ditampilkan di dashboard atau sertifikat.',
      'explode(", ", $hobi) memecah string menjadi elemen array berdasarkan pembatas koma dan spasi.'
    ],
    challenge: {
      instruction: 'Ubah teks "selamat datang di devgrow" menjadi format Title Case menggunakan ucwords().',
      starterCode: `<?php
$salam = "selamat datang di devgrow";
echo ucwords($salam);
?>`,
      hint: 'Panggil ucwords($salam) dan cetak hasilnya.'
    },
    quiz: {
      question: 'Fungsi mana yang digunakan untuk mengubah huruf pertama pada SETIAP KATA menjadi huruf kapital?',
      options: [
        'ucwords()',
        'ucfirst()',
        'strtoupper()',
        'capitalize()'
      ],
      correctIndex: 0,
      explanation: 'ucwords() mengubah karakter pertama dari setiap kata menjadi huruf besar (Uppercase Words).'
    }
  },

  // 14. CONCATENATE STRINGS
  {
    id: 'php-strings-concat',
    title: 'Concatenate Strings',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 14,
    overview: 'Pelajari cara menggabungkan teks string menggunakan operator titik (.) dan concatenation assignment operator (.=).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CONCATENATION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 14 / 19</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔗 Penggabungan String di PHP</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Berbeda dengan JavaScript yang menggunakan tanda plus (<code>+</code>), PHP menggunakan operator titik (<code>.</code>) untuk menggabungkan string.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h4 class="font-bold text-purple-600 dark:text-purple-400 text-sm mb-1">Operator Titik (<code>.</code>)</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400">
              <code>$lengkap = $depan . " " . $belakang;</code>
            </p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h4 class="font-bold text-indigo-600 dark:text-indigo-400 text-sm mb-1">Operator Assignment (<code>.=</code>)</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400">
              <code>$teks .= " tambahan kata";</code> (menambahkan teks ke akhir variabel yang sudah ada).
            </p>
          </div>
        </div>
      </div>
    `,
    code: `<?php
$namaDepan = "Budi";
$namaBelakang = "Santoso";

// Menggabungkan dengan operator .
$namaLengkap = $namaDepan . " " . $namaBelakang;

// Menggabungkan pesan bertahap dengan operator .=
$laporan = "Status Transaksi: Sukses!";
$laporan .= "<br>Nomor Resi: JP-889920";
$laporan .= "<br>Kurir: Kilat Express";

echo "<h3>Profil Pelanggan:</h3>";
echo "<p>Nama: <strong>$namaLengkap</strong></p>";
echo "<div style='background: #f8fafc; padding: 12px; border-left: 4px solid #10b981;'>$laporan</div>";
?>`,
    codeExplanation: [
      'Operator titik (.) menyambung dua atau lebih variabel/string menjadi satu kesatuan teks.',
      'Operator .= berguna saat membangun blok HTML bertingkat di dalam loop atau percabangan.'
    ],
    challenge: {
      instruction: 'Gabungkan variabel $salam dan $tujuan menggunakan operator titik (.).',
      starterCode: `<?php
$salam = "Selamat Pagi";
$tujuan = "Dunia Coding";
$gabung = $salam . ", " . $tujuan . "!";
echo $gabung;
?>`,
      hint: 'Gunakan operator titik (.) untuk menggabungkan string.'
    },
    quiz: {
      question: 'Simbol apa yang digunakan untuk menggabungkan dua string di PHP?',
      options: [
        'Titik (.)',
        'Plus (+)',
        'Ampersand (&)',
        'Koma (,)'
      ],
      correctIndex: 0,
      explanation: 'Di PHP, penggabungan string dilakukan menggunakan operator titik (.). Tanda plus (+) hanya digunakan untuk penjumlahan aritmatika.'
    }
  },

  // 15. SLICING STRINGS
  {
    id: 'php-strings-slicing',
    title: 'Slicing Strings',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 15,
    overview: 'Pelajari cara mengambil potongan substring menggunakan fungsi substr() dengan indeks positif, negatif, dan batas panjang karakter.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SUBSTR / SLICING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 15 / 19</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">✂️ Memotong Teks dengan substr()</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Fungsi <code>substr($string, $start, $length)</code> digunakan untuk mengambil bagian tertentu dari string.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
          <h4 class="font-bold text-slate-800 dark:text-white text-sm">Aturan Indeks substr():</h4>
          <ul class="text-xs space-y-1.5 text-slate-600 dark:text-slate-400">
            <li><code>substr("Hello World", 6, 5)</code> -> Menghasilkan <code>"World"</code> (mulai indeks 6 sebanyak 5 huruf).</li>
            <li><code>substr("Hello World", 6)</code> -> Menghasilkan <code>"World"</code> (mulai indeks 6 sampai akhir string).</li>
            <li><code>substr("Hello World", -5)</code> -> Menghasilkan <code>"World"</code> (mengambil 5 karakter dari belakang).</li>
          </ul>
        </div>
      </div>
    `,
    code: `<?php
$kodeInvoice = "INV-2024-08-99482";

// Mengambil awalan kode (3 huruf pertama)
$tipe = substr($kodeInvoice, 0, 3);

// Mengambil tahun (indeks 4 sebanyak 4 karakter)
$tahun = substr($kodeInvoice, 4, 4);

// Mengambil nomor urut unik dari 5 karakter paling belakang
$nomorUnik = substr($kodeInvoice, -5);

echo "<h3>Bedah Kode Invoice: $kodeInvoice</h3>";
echo "<ul>";
echo "<li><strong>Tipe Dokumen:</strong> $tipe</li>";
echo "<li><strong>Tahun Terbit:</strong> $tahun</li>";
echo "<li><strong>Nomor Urut:</strong> $nomorUnik</li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'substr($str, 0, 3) mengambil potongan dari karakter ke-0 hingga 3 karakter ke depan.',
      'Indeks negatif (-5) secara otomatis menghitung posisi dari ujung belakang string.'
    ],
    challenge: {
      instruction: 'Ambil 4 digit tahun dari string $tanggal = "27-08-2026"; menggunakan substr().',
      starterCode: `<?php
$tanggal = "27-08-2026";
$tahun = substr($tanggal, -4);
echo "Tahun: $tahun";
?>`,
      hint: 'substr($tanggal, -4) mengambil 4 karakter terakhir.'
    },
    quiz: {
      question: 'Apa hasil dari pemanggilan substr("BelajarPHP", 7, 3)?',
      options: [
        '"PHP"',
        '"Belajar"',
        '"ajar"',
        'false'
      ],
      correctIndex: 0,
      explanation: 'Indeks ke-7 adalah huruf "P", dan mengambil 3 karakter menghasilkan string "PHP".'
    }
  },

  // 16. ESCAPE CHARACTERS
  {
    id: 'php-strings-escape',
    title: 'Escape Characters',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 16,
    overview: 'Pelajari karakter escape dengan backslash (\\) untuk menyisipkan tanda petik, baris baru (\\n), tab (\\t), dan simbol dollar (\\$) di dalam string PHP.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ESCAPE CHARACTERS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 16 / 19</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛡️ Karakter Escape di PHP</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Karakter escape diawali dengan simbol backslash (<code>\\</code>) untuk memasukkan karakter khusus yang biasanya memiliki arti sintaksis di PHP.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <code class="text-purple-600 dark:text-purple-400 font-bold block mb-1">\\\"</code>
            Tanda petik ganda
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <code class="text-indigo-600 dark:text-indigo-400 font-bold block mb-1">\\'</code>
            Tanda petik tunggal
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <code class="text-cyan-600 dark:text-cyan-400 font-bold block mb-1">\\$</code>
            Karakter simbol Dollar asli
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <code class="text-emerald-600 dark:text-emerald-400 font-bold block mb-1">\\n / \\t</code>
            Baris Baru / Tabulasi
          </div>
        </div>
      </div>
    `,
    code: `<?php
// Menyisipkan tanda petik dan simbol dollar tanpa error
$kutipan = "Dia berkata, \"PHP 8 sangat menyenangkan untuk dipelajari!\"";
$hargaBarang = "Harga buku ini adalah \\$25 USD.";

echo "<p>$kutipan</p>";
echo "<p>$hargaBarang</p>";

// Mencetak path direktori Windows dengan double backslash
$pathWindows = "C:\\\\xampp\\\\htdocs\\\\proyek-web";
echo "<p>Direktori: <code>$pathWindows</code></p>";
?>`,
    codeExplanation: [
      'Backslash sebelum petik ganda (\\") mencegah PHP mengakhiri string secara prematur.',
      '\\$ mencegah PHP menganggap kata setelahnya sebagai variabel yang belum didefinisikan.'
    ],
    challenge: {
      instruction: 'Cetak kalimat: Dia memanggilku "Master Developer" menggunakan karakter escape \\".',
      starterCode: `<?php
$pesan = "Dia memanggilku \\\"Master Developer\\\"";
echo $pesan;
?>`,
      hint: 'Gunakan backslash sebelum setiap tanda petik ganda.'
    },
    quiz: {
      question: 'Karakter escape apa yang digunakan agar simbol dollar ($) dicetak apa adanya tanpa dianggap sebagai nama variabel?',
      options: [
        '\\$',
        '$$',
        '/$',
        '&$'
      ],
      correctIndex: 0,
      explanation: '\\$ memberi sinyal kepada PHP parser untuk mencetak karakter $ sebagai teks biasa.'
    }
  },

  // 17. PHP NUMBERS
  {
    id: 'php-numbers',
    title: 'PHP Numbers',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 17,
    overview: 'Pelajari tipe data numerik di PHP: Integer, Float, Infinity, NaN (Not a Number), Number Strings, dan fungsi validasi is_numeric(), is_int(), is_float().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">NUMBERS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 17 / 19</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔢 Tipe Data Numerik di PHP</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            PHP mengelola angka secara otomatis dan menyediakan fungsi pengecekan tipe numerik yang komprehensif.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h4 class="font-bold text-purple-600 dark:text-purple-400 text-sm mb-1">is_int($val)</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400">Mengecek apakah nilai adalah bilangan bulat murni.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h4 class="font-bold text-indigo-600 dark:text-indigo-400 text-sm mb-1">is_float($val)</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400">Mengecek apakah nilai memiliki angka desimal.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h4 class="font-bold text-emerald-600 dark:text-emerald-400 text-sm mb-1">is_numeric($val)</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400">Mengecek apakah nilai adalah angka atau string angka (seperti "12500").</p>
          </div>
        </div>
      </div>
    `,
    code: `<?php
$a = 5985;
$b = 10.365;
$c = "5985"; // Number String
$d = "Bukan Angka";

echo "<h3>Validasi Tipe Angka:</h3>";
echo "<ul>";
echo "<li>$a adalah Integer? " . (is_int($a) ? 'Ya (True)' : 'Bukan') . "</li>";
echo "<li>$b adalah Float? " . (is_float($b) ? 'Ya (True)' : 'Bukan') . "</li>";
echo "<li>\"$c\" adalah Numeric? " . (is_numeric($c) ? 'Ya (Bisa dihitung)' : 'Bukan') . "</li>";
echo "<li>\"$d\" adalah Numeric? " . (is_numeric($d) ? 'Ya' : 'Bukan (False)') . "</li>";
echo "</ul>";

// Konstanta batas integer PHP
echo "<p>Batas Maksimum Integer di Server Ini: <strong>" . PHP_INT_MAX . "</strong></p>";
?>`,
    codeExplanation: [
      'is_numeric() sangat krusial saat memvalidasi input dari formulir HTTP $_POST sebelum melakukan perhitungan matematika.',
      'PHP_INT_MAX adalah konstanta bawaan yang memberitahukan batas angka bulat terbesar yang dapat disimpan (hingga 9 quintillion pada sistem 64-bit).'
    ],
    challenge: {
      instruction: 'Uji apakah string "75000" dianggap numerik oleh is_numeric().',
      starterCode: `<?php
$harga = "75000";
if (is_numeric($harga)) {
    echo "Valid: $harga adalah angka yang sah!";
}
?>`,
      hint: 'Klik RUN untuk melihat validasi numerik.'
    },
    quiz: {
      question: 'Fungsi manakah yang mengembalikan TRUE baik untuk integer 50 maupun string angka "50"?',
      options: [
        'is_numeric()',
        'is_int()',
        'is_float()',
        'is_string_only()'
      ],
      correctIndex: 0,
      explanation: 'is_numeric() memeriksa apakah suatu variabel berisi angka atau string yang dapat dikonversi menjadi angka sah.'
    }
  },

  // 18. PHP CASTING
  {
    id: 'php-casting',
    title: 'PHP Casting',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 18,
    overview: 'Pelajari konversi tipe data eksplisit (Type Casting) di PHP: (string), (int), (float), (bool), dan (array).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TYPE CASTING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 18 / 19</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔄 Konversi Tipe Data (Casting)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Casting memungkinkan Anda mengubah tipe data variabel dari satu jenis ke jenis lainnya secara sengaja.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <code class="text-purple-600 dark:text-purple-400 font-bold block mb-1">(int) / (integer)</code>
            Konversi ke Bilangan Bulat
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <code class="text-indigo-600 dark:text-indigo-400 font-bold block mb-1">(float) / (double)</code>
            Konversi ke Bilangan Desimal
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <code class="text-cyan-600 dark:text-cyan-400 font-bold block mb-1">(string)</code>
            Konversi ke Teks String
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <code class="text-emerald-600 dark:text-emerald-400 font-bold block mb-1">(bool) / (boolean)</code>
            Konversi ke True/False
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <code class="text-amber-600 dark:text-amber-400 font-bold block mb-1">(array)</code>
            Konversi ke Struktur Array
          </div>
        </div>
      </div>
    `,
    code: `<?php
$strAngka = "1250.75";
$floatVal = (float)$strAngka; // Menjadi float: 1250.75
$intVal = (int)$strAngka;     // Menjadi int: 1250 (desimal terpotong)

$nilaiKosong = 0;
$boolVal = (bool)$nilaiKosong; // Menjadi boolean: false

$nama = "Fadila";
$arrayVal = (array)$nama;     // Menjadi array: ["Fadila"]

echo "<h3>Hasil Type Casting:</h3>";
echo "<ul>";
echo "<li>String Asli: \"$strAngka\" (" . gettype($strAngka) . ")</li>";
echo "<li>Hasil (float): $floatVal (" . gettype($floatVal) . ")</li>";
echo "<li>Hasil (int): $intVal (" . gettype($intVal) . ")</li>";
echo "<li>Hasil (bool) dari 0: " . ($boolVal ? 'true' : 'false') . " (" . gettype($boolVal) . ")</li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'Menuliskan tanda kurung tipe (seperti (int)) di depan variabel memaksa nilai tersebut dikonversi.',
      'gettype() mengembalikan nama tipe data variabel saat ini.'
    ],
    challenge: {
      instruction: 'Ubah variabel float $rating = 4.9; menjadi integer bulat menggunakan (int).',
      starterCode: `<?php
$rating = 4.9;
$bulat = (int)$rating;
echo "Rating Bulat: $bulat";
?>`,
      hint: 'Ketik (int)$rating untuk memotong angka di belakang koma.'
    },
    quiz: {
      question: 'Berapakah nilai dari (int)"250 mobil"?',
      options: [
        '250 (angka integer)',
        '0',
        'Error',
        '"250"'
      ],
      correctIndex: 0,
      explanation: 'PHP akan mengambil digit angka di awal string dan mengabaikan sisa karakter teks saat di-cast menjadi (int).'
    }
  },

  // 19. PHP MATH
  {
    id: 'php-math',
    title: 'PHP Math',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 19,
    overview: 'Pelajari fungsi matematika bawaan PHP: pi(), min(), max(), abs(), sqrt(), round(), ceil(), floor(), dan random number generator rand() / random_int().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PHP MATH</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 19 / 19</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧮 Fungsi Matematika di PHP</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            PHP memiliki serangkaian fungsi matematika lengkap untuk menyelesaikan kalkulasi nilai ekstrem, pembulatan, trigonometri, dan pengacakan angka (cryptographically secure random).
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-purple-600 dark:text-purple-400 block mb-1">min(...) & max(...)</strong>
            Mencari nilai terendah dan tertinggi dari daftar parameter.
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-indigo-600 dark:text-indigo-400 block mb-1">abs($num)</strong>
            Mengembalikan nilai absolut / mutlak (selalu positif).
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-cyan-600 dark:text-cyan-400 block mb-1">sqrt($num)</strong>
            Menghitung akar kuadrat (square root) dari suatu angka.
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-emerald-600 dark:text-emerald-400 block mb-1">round(), ceil(), floor()</strong>
            Pembulatan terdekat, pembulatan ke atas (ceil), dan pembulatan ke bawah (floor).
          </div>
        </div>
      </div>
    `,
    code: `<?php
// Uji coba berbagai fungsi matematika PHP
$nilaiTerkecil = min(15, 80, 5, 200, 99);
$nilaiTerbesar = max(15, 80, 5, 200, 99);
$akarKuadrat = sqrt(144);
$angkaAcak = random_int(1000, 9999); // Angka acak aman untuk kode OTP

echo "<h3>Kalkulasi Matematika PHP:</h3>";
echo "<ul>";
echo "<li><strong>Nilai Min:</strong> $nilaiTerkecil | <strong>Nilai Max:</strong> $nilaiTerbesar</li>";
echo "<li><strong>Akar dari 144 (sqrt):</strong> $akarKuadrat</li>";
echo "<li><strong>Nilai Absolut abs(-45):</strong> " . abs(-45) . "</li>";
echo "<li><strong>round(4.6):</strong> " . round(4.6) . " (dibulatkan ke 5)</li>";
echo "<li><strong>ceil(4.1):</strong> " . ceil(4.1) . " (dibulatkan ke atas = 5)</li>";
echo "<li><strong>floor(4.9):</strong> " . floor(4.9) . " (dibulatkan ke bawah = 4)</li>";
echo "<li><strong>Kode OTP Acak (random_int):</strong> <span style='background: #fef08a; padding: 2px 8px; border-radius: 4px; font-weight: bold;'>$angkaAcak</span></li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'random_int($min, $max) menghasilkan angka acak yang aman secara kriptografi (CSPRNG), sangat ideal untuk token autentikasi dan kode OTP.',
      'ceil() selalu membulatkan ke atas ke bilangan bulat terdekat, sangat berguna untuk sistem paginasi (total halaman = ceil(total_data / per_halaman)).'
    ],
    challenge: {
      instruction: 'Gunakan fungsi random_int(1, 100) untuk menghasilkan angka acak antara 1 sampai 100.',
      starterCode: `<?php
$dadu = random_int(1, 6);
echo "Angka dadu yang keluar: $dadu";
?>`,
      hint: 'Klik RUN berulang kali untuk melihat angka dadu berubah secara acak.'
    },
    quiz: {
      question: 'Fungsi pembulatan manakah yang selalu membulatkan angka desimal ke atas ke bilangan bulat terdekat (contoh: 3.1 menjadi 4)?',
      options: [
        'ceil()',
        'floor()',
        'round()',
        'abs()'
      ],
      correctIndex: 0,
      explanation: 'ceil() (singkatan dari ceiling/langit-langit) selalu membulatkan angka ke atas ke bilangan bulat terdekat.'
    }
  }
];

module.exports = phpPart1Tutorial;
