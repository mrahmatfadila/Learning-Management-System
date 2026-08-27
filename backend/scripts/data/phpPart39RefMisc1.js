// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (MISC PART 1: 420-432)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart39RefMisc1 = [
  // 420. CONNECTION_ABORTED()
  {
    id: 'php-ref-misc-connection-aborted',
    title: 'PHP connection_aborted()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 420,
    overview: 'Kuasai fungsi connection_aborted(): mendeteksi apakah klien/browser telah memutuskan koneksi HTTP (misal: pengguna menekan tombol Stop atau menutup tab browser).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PHP MISC</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 420 / 444</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔌 Status Putus Koneksi Klien (connection_aborted)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>connection_aborted(): int</code> mengembalikan angka <code>1</code> jika koneksi jaringan ke browser terputus di tengah jalan. Sangat krusial pada skrip eksekusi berdurasi panjang (seperti file download streaming atau report export) untuk menghentikan pemrosesan yang sia-sia dan menghemat sumber daya server.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Status Koneksi HTTP:</h3>";

if (connection_aborted()) {
    echo "<p style='color: red;'>Koneksi klien telah terputus!</p>";
} else {
    echo "<p style='color: #059669;'><strong>✓ Koneksi Klien Aktif Normal</strong> (connection_aborted() = " . connection_aborted() . ")</p>";
}
?>`,
    codeExplanation: [
      'connection_aborted() mengembalikan 0 jika koneksi masih tersambung, dan 1 jika browser memutus koneksi.'
    ],
    challenge: {
      instruction: 'Periksa status koneksi dengan connection_aborted().',
      starterCode: `<?php
echo connection_aborted() ? "Terputus" : "Tersambung";
?>`,
      hint: 'Panggil connection_aborted().'
    },
    quiz: {
      question: 'Berapakah nilai yang dikembalikan oleh `connection_aborted()` ketika browser pengguna masih aktif tersambung ke server?',
      options: [
        'Integer 0',
        'Integer 1',
        'Boolean false',
        'String "connected"'
      ],
      correctIndex: 0,
      explanation: '0 menandakan koneksi tidak di-abort (masih normal).'
    }
  },

  // 421. CONNECTION_STATUS()
  {
    id: 'php-ref-misc-connection-status',
    title: 'PHP connection_status()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 421,
    overview: 'Kuasai fungsi connection_status(): membaca bitmask status koneksi aktif (CONNECTION_NORMAL, CONNECTION_ABORTED, CONNECTION_TIMEOUT).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CONNECTION STATUS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 421 / 444</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📊 Bitmask Status Koneksi (connection_status)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>connection_status(): int</code> mengembalikan status bitmask integer: <code>0 (CONNECTION_NORMAL)</code>, <code>1 (CONNECTION_ABORTED)</code>, atau <code>2 (CONNECTION_TIMEOUT)</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$status = connection_status();

echo "<h3>Hasil Penggunaan connection_status():</h3>";
switch ($status) {
    case CONNECTION_NORMAL:
        echo "<p style='color: #059669;'><strong>✓ CONNECTION_NORMAL (0)</strong>: Koneksi berjalan lancar.</p>";
        break;
    case CONNECTION_ABORTED:
        echo "<p style='color: red;'>CONNECTION_ABORTED (1): Klien memutus koneksi.</p>";
        break;
    case CONNECTION_TIMEOUT:
        echo "<p style='color: orange;'>CONNECTION_TIMEOUT (2): Batas waktu eksekusi habis.</p>";
        break;
    default:
        echo "<p>Status Kombinasi: $status</p>";
}
?>`,
    codeExplanation: [
      'CONNECTION_NORMAL bernilai 0, menandakan request sedang dilayani secara sehat.'
    ],
    challenge: {
      instruction: 'Bandingkan connection_status() dengan konstanta CONNECTION_NORMAL.',
      starterCode: `<?php
echo (connection_status() === CONNECTION_NORMAL) ? "Normal" : "Lainnya";
?>`,
      hint: 'Panggil connection_status().'
    },
    quiz: {
      question: 'Berapakah nilai konstanta `CONNECTION_NORMAL` di PHP?',
      options: [
        'Integer 0',
        'Integer 1',
        'Integer 2',
        'Integer 200'
      ],
      correctIndex: 0,
      explanation: 'CONNECTION_NORMAL bernilai 0.'
    }
  },

  // 422. CONNECTION_TIMEOUT()
  {
    id: 'php-ref-misc-connection-timeout',
    title: 'PHP connection_timeout()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 422,
    overview: 'Status fungsi connection_timeout(): fungsi historis untuk memeriksa timeout skrip (di-deprecate demi connection_status() & CONNECTION_TIMEOUT).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-slate-600 text-white">LEGACY TIMEOUT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 422 / 444</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⏳ Pemeriksaan Timeout Skrip (connection_timeout)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>connection_timeout(): int</code> mengembalikan angka 1 jika skrip melebihi batas <code>max_execution_time</code>. Di PHP modern, gunakan bitmask <code>connection_status() & CONNECTION_TIMEOUT</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Pemeriksaan Timeout Eksekusi:</h3>";
$isTimeout = connection_status() & CONNECTION_TIMEOUT;

if ($isTimeout) {
    echo "<p style='color: red;'>Skrip mengalami waktu habis (Timeout)!</p>";
} else {
    echo "<p style='color: #059669;'><strong>✓ Waktu Eksekusi Aman dalam Batas Waktu</strong></p>";
}
?>`,
    codeExplanation: [
      'Pemeriksaan bitmask connection_status() & CONNECTION_TIMEOUT adalah standar modern.'
    ],
    challenge: {
      instruction: 'Pahami status connection_timeout.',
      starterCode: `<?php
echo "Pemeriksaan timeout skrip via connection_status().";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Konfigurasi direktif `php.ini` apakah yang mengatur batas waktu maksimum eksekusi skrip PHP sebelum terjadi timeout?',
      options: [
        '`max_execution_time`',
        '`memory_limit`',
        '`timeout_duration`',
        '`upload_max_filesize`'
      ],
      correctIndex: 0,
      explanation: 'max_execution_time menentukan batas durasi proses (default 30 detik).'
    }
  },

  // 423. CONSTANT()
  {
    id: 'php-ref-misc-constant',
    title: 'PHP constant()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 423,
    overview: 'Kuasai fungsi constant(): mengambil nilai konstanta global atau Class Constant secara dinamis berdasarkan variabel nama string (Dynamic Constant Resolution).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DYNAMIC CONSTANT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 423 / 444</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Membaca Konstanta Dinamis (constant)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>constant(string $name): mixed</code> sangat berguna ketika nama konstanta yang ingin Anda baca disimpan di dalam variabel dinamis (misal: <code>$nama = 'App\\Config::DB_PORT'; $val = constant($nama);</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
define("MAX_UPLOAD_SIZE", "50MB");

class PaymentProvider {
    public const API_ENDPOINT = "https://api.devgrow.id/v1/pay";
}

// Pembacaan Dinamis Berbasis Variabel String
$targetKonstanta = "MAX_UPLOAD_SIZE";
$targetClassConst = "PaymentProvider::API_ENDPOINT";

echo "<h3>Hasil Penggunaan constant():</h3>";
echo "<p>Nilai $targetKonstanta: <strong style='color: #059669;'>" . constant($targetKonstanta) . "</strong></p>";
echo "<p>Nilai $targetClassConst: <strong style='color: #4f46e5;'>" . constant($targetClassConst) . "</strong></p>";
?>`,
    codeExplanation: [
      'constant($name) membaca nilai konstanta yang namanya tersimpan dalam variabel string secara dinamis.'
    ],
    challenge: {
      instruction: 'Baca konstanta PHP_VERSION secara dinamis dengan constant("PHP_VERSION").',
      starterCode: `<?php
echo "PHP Version: " . constant("PHP_VERSION");
?>`,
      hint: 'Panggil constant("PHP_VERSION").'
    },
    quiz: {
      question: 'Kapan programmer perlu menggunakan fungsi `constant($nama)` alih-alih memanggil nama konstanta langsung?',
      options: [
        'Ketika nama konstanta disimpan dalam variabel string atau ditentukan secara dinamis pada saat runtime',
        'Untuk membuat database',
        'Hanya saat konstanta bernilai boolean',
        'Tidak pernah'
      ],
      correctIndex: 0,
      explanation: 'constant() menyelesaikan nama konstanta dinamis dari variabel string.'
    }
  },

  // 424. DEFINE()
  {
    id: 'php-ref-misc-define',
    title: 'PHP define()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 424,
    overview: 'Kuasai fungsi define(): mendefinisikan konstanta global pada waktu berjalan (Runtime Constant) dengan dukungan array konstan (PHP 7.0+).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DEFINE CONSTANT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 424 / 444</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔒 Mendefinisikan Konstanta Runtime (define)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>define(string $name, mixed $value): bool</code> membuat konstanta global. Berbeda dengan keyword <code>const</code> yang bersifat compile-time, <code>define()</code> dapat dipanggil di dalam blok kondisi <code>if</code>, loop, atau fungsi saat runtime.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// 1. Konstanta String & Angka
define("SITE_NAME", "DevGrow Learning Center");

// 2. Konstanta Array (PHP 7+)
define("ALLOWED_EXTENSIONS", ["jpg", "png", "webp", "pdf"]);

echo "<h3>Hasil Penggunaan define():</h3>";
echo "<p>Nama Situs: <strong style='color: #059669;'>" . SITE_NAME . "</strong></p>";
echo "<p>Format Upload Diizinkan: <code>[" . implode(", ", ALLOWED_EXTENSIONS) . "]</code></p>";
?>`,
    codeExplanation: [
      'define() dapat menampung nilai skalar maupun Array.',
      'Dapat didefinisikan secara kondisional di dalam blok percabangan.'
    ],
    challenge: {
      instruction: 'Definisikan konstanta APP_ENV dengan nilai "production" menggunakan define().',
      starterCode: `<?php
define("APP_ENV", "production");
echo "Environment: " . APP_ENV;
?>`,
      hint: 'Panggil define("APP_ENV", "production").'
    },
    quiz: {
      question: 'Apa keunggulan utama `define()` dibandingkan keyword `const`?',
      options: [
        '`define()` dapat dipanggil di dalam blok percabangan kondisional (if-else) pada saat runtime, sedangkan `const` hanya di scope terluar compile-time',
        '`define()` lebih cepat dari `const`',
        '`define()` bisa diubah nilainya',
        'Tidak ada bedanya'
      ],
      correctIndex: 0,
      explanation: 'define() dievaluasi saat runtime sehingga bisa berada di dalam blok kontrol if.'
    }
  },

  // 425. DEFINED()
  {
    id: 'php-ref-misc-defined',
    title: 'PHP defined()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 425,
    overview: 'Kuasai fungsi defined(): memeriksa apakah suatu konstanta telah didefinisikan sebelumnya, standar keamanan pencegah akses direct script injection (defined("ABSPATH") or die()).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SECURITY GUARD</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 425 / 444</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛡️ Memeriksa Eksistensi Konstanta (defined)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>defined(string $name): bool</code> mengembalikan <code>true</code> jika konstanta ada. Pola keamanan paling terkenal di WordPress dan CodeIgniter: <code>defined('BASEPATH') or die('No direct script access allowed');</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
define("APP_INITIALIZED", true);

echo "<h3>Hasil Pengujian defined():</h3>";
echo "<ul>";
echo "<li>Apakah APP_INITIALIZED ada: " . (defined("APP_INITIALIZED") ? "<strong style='color: green;'>Ada (true)</strong>" : "Tidak") . "</li>";
echo "<li>Apakah SECRET_KEY ada: " . (defined("SECRET_KEY") ? "Ada" : "<strong style='color: red;'>Belum Dibuat (false)</strong>") . "</li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'defined() mencegah Notice/Warning saat membaca konstanta yang belum tentu ada.'
    ],
    challenge: {
      instruction: 'Periksa apakah konstanta "PHP_OS" telah didefinisikan dengan defined("PHP_OS").',
      starterCode: `<?php
echo defined("PHP_OS") ? "PHP_OS Ada" : "Tidak Ada";
?>`,
      hint: 'Panggil defined("PHP_OS").'
    },
    quiz: {
      question: 'Pola keamanan apakah yang paling sering menggunakan fungsi `defined()` pada framework seperti CodeIgniter dan WordPress?',
      options: [
        'Mencegah akses eksekusi file PHP secara langsung dari URL browser (`defined("BASEPATH") or exit;`)',
        'Memeriksa koneksi internet',
        'Mengenkripsi database',
        'Menghitung waktu eksekusi'
      ],
      correctIndex: 0,
      explanation: 'Guard clause `defined(...) or die(...)` mencegah eksploitasi eksekusi file independen secara langsung.'
    }
  },

  // 426. DIE()
  {
    id: 'php-ref-misc-die',
    title: 'PHP die()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 426,
    overview: 'Kuasai konstruksi bahasa die(): mencetak pesan penutup opsional dan MENGHENTIKAN seketika eksekusi seluruh skrip PHP (alias resmi 100% dari exit()).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SCRIPT TERMINATION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 426 / 444</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛑 Menghentikan Skrip Seketika (die)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>die(string|int $status = ""): never</code> langsung memutus alur program PHP saat itu juga. Dapat menerima pesan teks atau kode status integer (0 untuk sukses, 1-254 untuk error CLI).
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>1. Baris kode pertama sebelum die()...</h3>";

// Simulasi terminasi terkontrol
$aksesDitolak = false;

if ($aksesDitolak) {
    die("<p style='color: red;'>Akses Ditolak! Skrip Berhenti.</p>");
}

echo "<p style='color: #059669;'><strong>✓ Eksekusi berlanjut karena kondisi terminasi tidak terpenuhi.</strong></p>";
?>`,
    codeExplanation: [
      'die() menghentikan interpreter PHP saat itu juga dan mengirimkan output buffer terakhir ke browser.'
    ],
    challenge: {
      instruction: 'Pahami fungsi terminasi die.',
      starterCode: `<?php
echo "die() menghentikan seluruh eksekusi skrip.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Apakah perbedaan teknis antara konstruksi `die()` dan `exit()` di PHP?',
      options: [
        'Keduanya identik 100% (die adalah alias resmi persis dari exit)',
        '`die` hanya untuk error database',
        '`exit` tidak bisa mencetak pesan',
        '`die` lebih cepat'
      ],
      correctIndex: 0,
      explanation: 'die() dan exit() adalah konstruksi bahasa yang identik 100% di PHP.'
    }
  },

  // 427. EVAL()
  {
    id: 'php-ref-misc-eval',
    title: 'PHP eval()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 427,
    overview: 'Kuasai konstruksi bahasa eval(): mengeksekusi string sembarang sebagai kode PHP murni (dan aturan keamanan ketat: "eval is evil" untuk mencegah Remote Code Execution - RCE).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-red-500/15 via-pink-500/10 to-transparent p-6 rounded-2xl border border-red-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-red-600 text-white">HIGH RISK CONSTRUCT</span>
            <span class="text-xs text-red-600 dark:text-red-400 font-bold uppercase tracking-wider">Materi 427 / 444</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚠️ Eksekusi String Kode Dinamis (eval)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>eval(string $code): mixed</code> mengevaluasi string sebagai kode PHP. <strong>PERINGATAN KERAS KEAMANAN:</strong> JANGAN PERNAH memberikan input pengguna (seperti <code>$_GET</code> / <code>$_POST</code>) ke dalam <code>eval()</code> karena dapat mengakibatkan peretasan Remote Code Execution (RCE) fatal!
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Contoh Aman: Evaluasi rumus internal terisolasi
$rumus = '$total = 100 * 5;';
eval($rumus);

echo "<h3>Hasil Penggunaan eval() (Hanya untuk String Tepercaya):</h3>";
echo "<p>Hasil Eksekusi Rumus '$rumus': <strong style='color: #059669;'>\$total = $total</strong></p>";
echo "<p style='color: #dc2626;'><strong>Aturan Emas:</strong> 'eval is evil' - Hindari eval() jika ada alternatif lain.</p>";
?>`,
    codeExplanation: [
      'eval($code) mem-parsing dan mengeksekusi string PHP on-the-fly.',
      'Sangat berbahaya jika tercemar data input pengguna tanpa sanitasi ketat.'
    ],
    challenge: {
      instruction: 'Pahami bahaya keamanan eksploitasi RCE pada eval().',
      starterCode: `<?php
echo "eval() berisiko tinggi memicu Remote Code Execution (RCE).";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Mengapa komunitas arsitek PHP menjuluki `eval()` dengan slogan "eval is evil"?',
      options: [
        'Karena jika input yang dimasukkan berasal dari pengguna publik, penyerang dapat mengeksekusi perintah shell berbahaya (Remote Code Execution) dan menguasai seluruh server',
        'Karena eval memperlambat GPU',
        'Karena eval menghapus database',
        'Hanya mitos'
      ],
      correctIndex: 0,
      explanation: 'eval() adalah salah satu vektor serangan Remote Code Execution (RCE) paling berbahaya jika disalahgunakan.'
    }
  },

  // 428. EXIT()
  {
    id: 'php-ref-misc-exit',
    title: 'PHP exit()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 428,
    overview: 'Kuasai konstruksi bahasa exit(): menghentikan eksekusi skrip PHP saat itu juga dengan pengembalian exit status code standar POSIX (0 untuk sukses, non-zero untuk error CLI/API).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">EXIT CONTROL</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 428 / 444</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛑 Terminasi Skrip Anggun (exit)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>exit(string|int $status = 0): never</code> mengakhiri proses PHP. Sangat penting setelah melakukan HTTP Redirect: <code>header('Location: /login'); exit();</code> untuk mencegah crawler bot melanjutkan eksekusi konten tersembunyi.
          </p>
        </div>
      </div>
    `,
    code: `<?php
function arahkanPengguna(string $url) {
    // Pola Standar: Redirect dan langsung exit()
    echo "<p>Mengalihkan halaman ke $url...</p>";
    // header("Location: $url");
    // exit();
}

echo "<h3>Hasil Penggunaan exit():</h3>";
arahkanPengguna("/dashboard");
echo "<p style='color: #059669;'>✓ Selalu pasang exit() setelah header('Location: ...').</p>";
?>`,
    codeExplanation: [
      'exit() wajib dipanggil setelah header("Location: ...") agar skrip di bawahnya tidak bocor/dieksekusi.'
    ],
    challenge: {
      instruction: 'Pahami pentingnya exit() setelah header redirect.',
      starterCode: `<?php
echo "Pola aman: header('Location: /login'); exit;";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Mengapa seorang developer WAJIB memanggil `exit()` tepat setelah perintah redirect `header("Location: ...");`?',
      options: [
        'Agar baris kode di bawah redirect tidak terus dieksekusi oleh mesin PHP dan bot crawler tidak membaca konten privat',
        'Untuk menghapus cache browser',
        'Agar CSS halaman termuat',
        'Tidak wajib'
      ],
      correctIndex: 0,
      explanation: 'Tanpa exit(), PHP akan tetap mengeksekusi sisa skrip di bawah header Location.'
    }
  },

  // 429. GET_BROWSER()
  {
    id: 'php-ref-misc-get-browser',
    title: 'PHP get_browser()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 429,
    overview: 'Kuasai fungsi get_browser(): mendeteksi kapabilitas browser klien (nama browser, versi, dukungan JavaScript/CSS, OS) berdasarkan file definisi browscap.ini.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CLIENT DETECTION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 429 / 444</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌐 Deteksi Kapabilitas Peramban (get_browser)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>get_browser(?string $user_agent, bool $return_array): object|array|false</code> mencocokkan string HTTP User-Agent dengan database kapabilitas <code>browscap.ini</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

echo "<h3>Informasi User-Agent Klien:</h3>";
echo "<p>User-Agent: <code style='word-break: break-all;'>$userAgent</code></p>";

// Pada server dengan browscap.ini terkonfigurasi:
// $info = get_browser($userAgent, true);
echo "<p style='color: #059669;'>✓ get_browser() mengidentifikasi platform (Windows), engine (Blink), dan peramban (Chrome).</p>";
?>`,
    codeExplanation: [
      'get_browser() mem-parsing User-Agent menjadi array terstruktur fitur browser.'
    ],
    challenge: {
      instruction: 'Pahami fungsi deteksi browser get_browser().',
      starterCode: `<?php
echo "get_browser() membaca User-Agent via browscap.ini.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'File konfigurasi database apakah di php.ini yang dibutuhkan oleh fungsi `get_browser()` agar dapat mengidentifikasi fitur peramban?',
      options: [
        '`browscap.ini` (direktif browscap di php.ini)',
        '`mime.types`',
        '`cacert.pem`',
        '`php_browscap.dll`'
      ],
      correctIndex: 0,
      explanation: 'get_browser membutuhkan file definisi kapabilitas browscap.ini.'
    }
  },

  // 430. __HALT_COMPILER()
  {
    id: 'php-ref-misc-halt-compiler',
    title: 'PHP __halt_compiler()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 430,
    overview: 'Kuasai konstruksi __halt_compiler(): menghentikan compiler PHP pada titik tertentu dan memungkinkan penyimpanan data biner/arsip mentah di akhir file (fondasi paket eksekusi mandiri PHAR Composer).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PHAR FOUNDATION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 430 / 444</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📦 Fondasi Berkas PHAR (__halt_compiler)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>__halt_compiler(): void</code> memberitahu kompilator PHP untuk berhenti mem-parsing kode. Sisa byte setelah deklarasi ini disimpan sebagai payload data mentah yang dapat dibaca via konstanta <code>__COMPILER_HALT_OFFSET__</code> (digunakan oleh file <code>composer.phar</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Hasil Penggunaan __halt_compiler():</h3>";
echo "<p>Kode PHP dieksekusi normal sampai titik pemberhentian kompilator.</p>";
echo "<p style='color: #059669;'>✓ Digunakan oleh arsitektur bundle paket mandiri (PHAR).</p>";

// __halt_compiler();
// DATA BINER / ASSETS RAW DISIMPAN DI SINI
?>`,
    codeExplanation: [
      '__halt_compiler() memisahkan skrip PHP executable dengan payload data biner di akhir file.'
    ],
    challenge: {
      instruction: 'Pahami fungsi pemberhentian compiler __halt_compiler().',
      starterCode: `<?php
echo "__halt_compiler() adalah pondasi arsip PHAR PHP.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Arsitektur distribusi aplikasi PHP executable apakah yang memanfaatkan `__halt_compiler()` untuk membundel seluruh aplikasi ke dalam 1 file mandiri?',
      options: [
        'PHAR (PHP Archive, contoh: `composer.phar` atau `wp-cli.phar`)',
        'ZIP file',
        'Docker container',
        'NPM package'
      ],
      correctIndex: 0,
      explanation: 'Arsip PHAR menggunakan __halt_compiler() pada stub-nya untuk menyimpan payload arsip terkompresi.'
    }
  },

  // 431. HIGHLIGHT_FILE()
  {
    id: 'php-ref-misc-highlight-file',
    title: 'PHP highlight_file() / show_source()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 431,
    overview: 'Kuasai fungsi highlight_file() & show_source(): menghasilkan kode pewarnaan sintaks PHP (Syntax Highlighting) lengkap berformat HTML dengan tag warna bawaan.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SYNTAX HIGHLIGHT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 431 / 444</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎨 Penyorotan Sintaks Berkas (highlight_file)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>highlight_file(string $filename, bool $return = false): string|bool</code> mem-parsing file PHP dan mewarnai keyword, komentar, string, dan variabel secara otomatis. <code>show_source()</code> adalah alias resmi dari fungsi ini.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$tempCodeFile = __DIR__ . "/contoh_script.php";
file_put_contents($tempCodeFile, "<?php\n// Contoh Program PHP 8\n\$nama = 'DevGrow';\necho 'Halo ' . \$nama;\n?>");

// Highlight file ke string HTML
$htmlHighlighted = highlight_file($tempCodeFile, true);

echo "<h3>Hasil Penggunaan highlight_file():</h3>";
echo "<div style='background: #f8fafc; padding: 12px; border: 1px solid #cbd5e1; border-radius: 8px;'>";
echo $htmlHighlighted;
echo "</div>";

unlink($tempCodeFile);
?>`,
    codeExplanation: [
      'highlight_file($file, true) menghasilkan markup HTML dengan tag <code> dan warna styling PHP bawaan.'
    ],
    challenge: {
      instruction: 'Pahami fungsi highlight_file() dan show_source().',
      starterCode: `<?php
echo "highlight_file() menghasilkan pewarnaan sintaks PHP otomatis.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Fungsi apakah yang merupakan alias resmi 100% dari `highlight_file()`?',
      options: [
        '`show_source()`',
        '`display_code()`',
        '`view_source()`',
        '`print_php()`'
      ],
      correctIndex: 0,
      explanation: 'show_source() adalah nama alias bawaan untuk highlight_file().'
    }
  },

  // 432. HIGHLIGHT_STRING()
  {
    id: 'php-ref-misc-highlight-string',
    title: 'PHP highlight_string()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 432,
    overview: 'Kuasai fungsi highlight_string(): menghasilkan pewarnaan sintaks PHP (Syntax Highlighting) langsung dari sebuah potongan teks string kode PHP.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">STRING HIGHLIGHT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 432 / 444</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎨 Penyorotan Sintaks String (highlight_string)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>highlight_string(string $string, bool $return = false): string|bool</code> sangat ideal untuk membuat dokumentasi kustom, forum tanya jawab pemrograman, atau portal pembelajaran LMS.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$kodeContoh = <<<PHP
<?php
// Enkapsulasi OOP PHP 8
class Kursus {
    public function __construct(public string \$judul) {}
}
\$k = new Kursus("Belajar Fullstack");
?>
PHP;

$htmlOutput = highlight_string($kodeContoh, true);

echo "<h3>Hasil Penggunaan highlight_string():</h3>";
echo "<div style='background: #f1f5f9; padding: 14px; border-radius: 8px; border: 1px solid #cbd5e1;'>";
echo $htmlOutput;
echo "</div>";
?>`,
    codeExplanation: [
      'highlight_string($code, true) mengembalikan string HTML berformat warna sintaks tanpa langsung mencetaknya ke layar.'
    ],
    challenge: {
      instruction: 'Highlight string kode PHP dengan highlight_string("<?php echo \'Hi\'; ?>", true).',
      starterCode: `<?php
$res = highlight_string("<?php echo 'Hi'; ?>", true);
echo $res;
?>`,
      hint: 'Panggil highlight_string($str, true).'
    },
    quiz: {
      question: 'Parameter kedua apakah yang harus disetel bernilai `true` pada `highlight_string($code, true)` agar hasilnya dikembalikan sebagai string alih-alih langsung dicetak ke browser?',
      options: [
        'Parameter `$return`',
        'Parameter `$format`',
        'Parameter `$output`',
        'Parameter `$silent`'
      ],
      correctIndex: 0,
      explanation: 'Menyetel parameter kedua $return = true mengembalikan string HTML hasil highlighting.'
    }
  }
];

module.exports = phpPart39RefMisc1;
