// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (ERROR & DEBUGGING FUNCTIONS)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart19RefError = [
  // 156. DEBUG_BACKTRACE()
  {
    id: 'php-ref-debug-backtrace',
    title: 'PHP debug_backtrace()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 156,
    overview: 'Kuasai debug_backtrace(): menghasilkan riwayat jejak tumpukan eksekusi fungsi (Call Stack Backtrace) sebagai array PHP untuk melacak letak bug secara presisi.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ERROR & DEBUGGING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 156 / 165</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Melacak Jejak Panggilan Fungsi (debug_backtrace)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>debug_backtrace($options, $limit)</code> mengembalikan array berisi setiap fungsi, file, baris kode, dan argumen yang dipanggil sebelum titik ini. Sangat krusial untuk membuat sistem logger internal dan framework debugger seperti Laravel Ignition atau Symfony VarDumper.
          </p>
        </div>
      </div>
    `,
    code: `<?php
function prosesPembayaran($userId, $nominal) {
    verifikasiSaldo($userId, $nominal);
}

function verifikasiSaldo($userId, $nominal) {
    catatLogDebug();
}

function catatLogDebug() {
    // Ambil jejak tumpukan fungsi yang memanggil
    $trace = debug_backtrace(DEBUG_BACKTRACE_IGNORE_ARGS);
    
    echo "<h3>Jejak Eksekusi Call Stack:</h3>";
    echo "<ol>";
    foreach ($trace as $step) {
        $fungsi = $step['function'] ?? 'main';
        $line = $step['line'] ?? 'N/A';
        echo "<li>Fungsi: <strong>$fungsi()</strong> (Baris: $line)</li>";
    }
    echo "</ol>";
}

prosesPembayaran(101, 250000);
?>`,
    codeExplanation: [
      'debug_backtrace() memperlihatkan urutan rantai pemanggilan: catatLogDebug() -> verifikasiSaldo() -> prosesPembayaran().',
      'DEBUG_BACKTRACE_IGNORE_ARGS menghemat memori dengan tidak menyalin nilai argumen besar.'
    ],
    challenge: {
      instruction: 'Uji debug_backtrace() di dalam fungsi sederhana.',
      starterCode: `<?php
function tes() {
    $trace = debug_backtrace();
    echo "Total tumpukan: " . count($trace);
}
tes();
?>`,
      hint: 'Panggil debug_backtrace() di dalam fungsi.'
    },
    quiz: {
      question: 'Apa fungsi utama dari debug_backtrace() di PHP?',
      options: [
        'Mengembalikan array riwayat tumpukan panggilan fungsi (Call Stack) dari awal eksekusi hingga titik pemanggilan',
        'Menghapus log error',
        'Memperbaiki bug secara otomatis',
        'Mengirim email ke developer'
      ],
      correctIndex: 0,
      explanation: 'debug_backtrace menghasilkan jejak rantai fungsi yang sedang aktif dieksekusi.'
    }
  },

  // 157. DEBUG_PRINT_BACKTRACE()
  {
    id: 'php-ref-debug-print-backtrace',
    title: 'PHP debug_print_backtrace()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 157,
    overview: 'Fungsi debug_print_backtrace(): mencetak riwayat jejak tumpukan fungsi (Stack Trace) langsung ke output layar dalam format teks bernomor yang mudah dibaca.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PRINT BACKTRACE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 157 / 165</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🖨️ Cetak Langsung Stack Trace ke Layar</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Berbeda dengan <code>debug_backtrace()</code> yang mengembalikan array, <code>debug_print_backtrace()</code> langsung mencetak string stack trace berformat rapi ke browser atau terminal tanpa perlu looping manual.
          </p>
        </div>
      </div>
    `,
    code: `<?php
function langkahA() {
    langkahB();
}

function langkahB() {
    echo "<h3>Hasil debug_print_backtrace():</h3>";
    echo "<pre style='background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 8px;'>";
    debug_print_backtrace();
    echo "</pre>";
}

langkahA();
?>`,
    codeExplanation: [
      'debug_print_backtrace() langsung mencetak urutan #0 langkahB(), #1 langkahA() dengan rapi.'
    ],
    challenge: {
      instruction: 'Cetak stack trace menggunakan debug_print_backtrace().',
      starterCode: `<?php
function coba() {
    debug_print_backtrace();
}
coba();
?>`,
      hint: 'Panggil debug_print_backtrace().'
    },
    quiz: {
      question: 'Apa perbedaan antara debug_backtrace() dan debug_print_backtrace()?',
      options: [
        'debug_backtrace() mengembalikan data sebagai array PHP, sedangkan debug_print_backtrace() langsung mencetaknya ke output layar sebagai teks terformat',
        'debug_print_backtrace() hanya bekerja di printer',
        'debug_backtrace() menghapus file error',
        'Keduanya identik'
      ],
      correctIndex: 0,
      explanation: 'debug_print_backtrace langsung menampilkan format teks bernomor ke layar.'
    }
  },

  // 158. ERROR_GET_LAST()
  {
    id: 'php-ref-error-get-last',
    title: 'PHP error_get_last()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 158,
    overview: 'Kuasai error_get_last(): menangkap informasi kesalahan terakhir (tipe, pesan, nama file, nomor baris) yang terjadi, sangat vital dalam shutdown handler.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ERROR GET LAST</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 158 / 165</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📥 Menangkap Error Terakhir (error_get_last)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>error_get_last()</code> mengembalikan array asosiatif (<code>type</code>, <code>message</code>, <code>file</code>, <code>line</code>) dari error terakhir yang terjadi (atau <code>null</code> jika tidak ada error). Sangat ampuh dipakai dalam fungsi <code>register_shutdown_function()</code> untuk menangkap Fatal Error.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Picu warning ringan dengan membaca variabel yang belum didefinisikan
@$varTidakAda = $variabelPalsu;

$lastError = error_get_last();

echo "<h3>Hasil Pemeriksaan error_get_last():</h3>";
if ($lastError) {
    echo "<ul>";
    echo "<li>Pesan Error: <strong style='color: red;'>{$lastError['message']}</strong></li>";
    echo "<li>Nama File: <code>{$lastError['file']}</code></li>";
    echo "<li>Baris Kode: <strong>Baris {$lastError['line']}</strong></li>";
    echo "</ul>";
} else {
    echo "<p style='color: green;'>Tidak ada error yang tercatat.</p>";
}
?>`,
    codeExplanation: [
      'error_get_last() menangkap detail error bahkan jika pesan error tersebut disembunyikan oleh operator @.'
    ],
    challenge: {
      instruction: 'Periksa error terakhir dengan error_get_last().',
      starterCode: `<?php
$err = error_get_last();
echo is_null($err) ? "Bersih dari error" : "Ada error";
?>`,
      hint: 'Panggil error_get_last().'
    },
    quiz: {
      question: 'Kunci apa saja yang termuat di dalam array kembalian error_get_last()?',
      options: [
        'type, message, file, dan line',
        'id, title, content',
        'username, password',
        'status, code'
      ],
      correctIndex: 0,
      explanation: 'error_get_last mengembalikan 4 rincian kunci: tipe error, pesan error, nama file, dan baris terjadinya error.'
    }
  },

  // 159. ERROR_LOG()
  {
    id: 'php-ref-error-log',
    title: 'PHP error_log()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 159,
    overview: 'Kuasai error_log(): mencatat pesan kesalahan ke file log server (error.log), mengirim notifikasi email admin, atau ke sistem syslog operasi.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ERROR LOGGING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 159 / 165</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📝 Pencatatan Log Kesalahan Server (error_log)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>error_log($message, $message_type, $destination)</code> mencatat pesan ke file log internal server tanpa menampilkannya ke layar pengguna. Ini adalah <strong>standar wajib keamanan OWASP</strong> agar kredensial database tidak bocor ke publik saat aplikasi mengalami kegagalan.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// 1. Tulis pesan log ke default PHP/Apache error log
error_log("[SECURITY] Percobaan login gagal dari IP: 192.168.1.50");

// 2. Tulis ke file log kustom khusus aplikasi (Type = 3)
$fileLogKustom = __DIR__ . "/app_error.log";
$pesanLog = "[" . date("Y-m-d H:i:s") . "] Transaksi Pembayaran Order #991 Berhasil.\\n";

// Simpan ke file log
error_log($pesanLog, 3, $fileLogKustom);

echo "<h3>Hasil Penggunaan error_log():</h3>";
echo "<p>Pesan keamanan berhasil dicatat ke sistem log server secara aman tanpa membocorkan data ke layar pengguna.</p>";

// Bersihkan file log demo jika ada
if (file_exists($fileLogKustom)) {
    unlink($fileLogKustom);
}
?>`,
    codeExplanation: [
      'Type 0 (Default): Menyimpan ke error log bawaan server web (misal: Apache / Nginx / PHP-FPM).',
      'Type 3: Menyimpan ke file teks log kustom yang ditentukan di $destination.'
    ],
    challenge: {
      instruction: 'Catat pesan log keamanan menggunakan error_log("Pesan Uji").',
      starterCode: `<?php
error_log("Test Log Entry");
echo "Log berhasil dicatat.";
?>`,
      hint: 'Panggil error_log("Test Log Entry").'
    },
    quiz: {
      question: 'Mengapa di server produksi kita wajib menggunakan error_log() alih-alih mencetak error langsung ke browser menggunakan echo/var_dump?',
      options: [
        'Untuk mencegah Information Disclosure Vulnerability (kebocoran password DB, direktori path server, dan struktur tabel) kepada hacker',
        'Agar script berjalan 100x lebih cepat',
        'Karena echo dilarang di PHP',
        'Hanya opsional'
      ],
      correctIndex: 0,
      explanation: 'Mencetak error ke browser dapat dieksploitasi oleh penyerang untuk meretas struktur backend aplikasi.'
    }
  },

  // 160. ERROR_REPORTING()
  {
    id: 'php-ref-error-reporting',
    title: 'PHP error_reporting()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 160,
    overview: 'Kuasai error_reporting(): mengonfigurasi tingkat sensitivitas pelaporan error PHP pada level runtime (Development: E_ALL vs Production: 0).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ERROR REPORTING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 160 / 165</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎛️ Mengatur Sensitivitas Error (error_reporting)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>error_reporting($level)</code> menyetel level error mana saja yang dilaporkan runtime PHP. Gunakan <code>error_reporting(E_ALL)</code> saat tahap development, dan matikan dengan <code>error_reporting(0)</code> di server live production.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// 1. Mode Development: Laporkan semua jenis error dan warning
error_reporting(E_ALL);
echo "<h3>Mode Development (E_ALL):</h3>";
echo "<p>Tingkat error aktif: <strong>" . error_reporting() . "</strong></p>";

// 2. Matikan pelaporan notice (hanya error dan warning)
error_reporting(E_ALL & ~E_NOTICE);

// 3. Kembalikan ke E_ALL
error_reporting(E_ALL);
?>`,
    codeExplanation: [
      'E_ALL mencakup seluruh tingkatan: E_ERROR, E_WARNING, E_PARSE, E_NOTICE, E_DEPRECATED.',
      'error_reporting() tanpa argumen mengembalikan integer bitmask level error yang sedang aktif.'
    ],
    challenge: {
      instruction: 'Setel error_reporting(E_ALL) dan cetak nilainya.',
      starterCode: `<?php
error_reporting(E_ALL);
echo "Level: " . error_reporting();
?>`,
      hint: 'Panggil error_reporting(E_ALL).'
    },
    quiz: {
      question: 'Konstanta bitmask apakah yang digunakan untuk melaporkan seluruh kategori error di PHP modern?',
      options: [
        'E_ALL',
        'E_ERROR_ONLY',
        'ALL_ERRORS',
        'E_FULL'
      ],
      correctIndex: 0,
      explanation: 'E_ALL adalah konstanta bitmask bawaan PHP untuk menangkap seluruh jenis kesalahan dan peringatan.'
    }
  },

  // 161. RESTORE_ERROR_HANDLER()
  {
    id: 'php-ref-restore-error-handler',
    title: 'PHP restore_error_handler()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 161,
    overview: 'Fungsi restore_error_handler(): memulihkan fungsi penangan error sebelumnya (mengembalikan error handler ke kondisi sebelum set_error_handler dipanggil).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">RESTORE ERROR HANDLER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 161 / 165</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">↩️ Memulihkan Penangan Error (restore_error_handler)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            PHP menyimpan tumpukan (stack) error handler. Jika Anda memasang error handler kustom sementara untuk blok kode tertentu, panggil <code>restore_error_handler()</code> setelah selesai agar penangan error global kembali aktif.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// 1. Pasang custom handler sementara
set_error_handler(function($errno, $errstr) {
    echo "<p style='color: orange;'>[Custom Handler] Terdeteksi: $errstr</p>";
    return true;
});

// Picu warning
trigger_error("Peringatan tahap 1", E_USER_WARNING);

// 2. Pulihkan handler bawaan
restore_error_handler();
echo "<p style='color: green;'>Error handler berhasil dipulihkan ke default.</p>";
?>`,
    codeExplanation: [
      'restore_error_handler() me-pop handler teratas dari stack penangan kesalahan PHP.'
    ],
    challenge: {
      instruction: 'Uji pemulihan handler dengan restore_error_handler().',
      starterCode: `<?php
set_error_handler(fn() => true);
restore_error_handler();
echo "Handler pulih!";
?>`,
      hint: 'Panggil restore_error_handler().'
    },
    quiz: {
      question: 'Apa kegunaan dari fungsi restore_error_handler()?',
      options: [
        'Mengembalikan fungsi penangan error ke handler sebelumnya yang tersimpan di stack',
        'Menghapus seluruh file skrip',
        'Mengabaikan semua error selamanya',
        'Membuat database baru'
      ],
      correctIndex: 0,
      explanation: 'restore_error_handler memulihkan penangan error sebelumnya dari tumpukan internal PHP.'
    }
  },

  // 162. RESTORE_EXCEPTION_HANDLER()
  {
    id: 'php-ref-restore-exception-handler',
    title: 'PHP restore_exception_handler()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 162,
    overview: 'Fungsi restore_exception_handler(): memulihkan fungsi penangan eksepsi sebelumnya (mengembalikan exception handler ke kondisi sebelum set_exception_handler dipanggil).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">RESTORE EXCEPTION HANDLER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 162 / 165</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">↩️ Memulihkan Penangan Eksepsi (restore_exception_handler)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>restore_exception_handler()</code> mengembalikan exception handler ke penangan eksepsi sebelumnya pada tumpukan handler eksepsi runtime PHP.
          </p>
        </div>
      </div>
    `,
    code: `<?php
set_exception_handler(function($e) {
    echo "Custom Exception: " . $e->getMessage();
});

// Kembalikan ke penangan eksepsi awal
restore_exception_handler();

echo "<h3>Hasil Penggunaan restore_exception_handler():</h3>";
echo "<p style='color: green;'>Exception handler berhasil dikembalikan ke penangan awal sistem.</p>";
?>`,
    codeExplanation: [
      'restore_exception_handler() menjaga agar konfigurasi handler framework tidak rusak setelah eksekusi modul selesai.'
    ],
    challenge: {
      instruction: 'Uji restore_exception_handler().',
      starterCode: `<?php
set_exception_handler(fn($e) => null);
restore_exception_handler();
echo "Exception handler dipulihkan.";
?>`,
      hint: 'Panggil restore_exception_handler().'
    },
    quiz: {
      question: 'Fungsi apakah yang digunakan untuk memulihkan penangan eksepsi (uncaught exceptions) sebelumnya?',
      options: [
        'restore_exception_handler()',
        'restore_error_handler()',
        'reset_exception()',
        'clear_exception()'
      ],
      correctIndex: 0,
      explanation: 'restore_exception_handler() memulihkan penangan eksepsi sebelumnya.'
    }
  },

  // 163. SET_ERROR_HANDLER()
  {
    id: 'php-ref-set-error-handler',
    title: 'PHP set_error_handler()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 163,
    overview: 'Kuasai set_error_handler(): mendaftarkan fungsi penangan error kustom buatan Anda sendiri untuk menangani warning, notice, dan error koding secara terpusat (Centralized Error Pipeline).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SET ERROR HANDLER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 163 / 165</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛡️ Penangan Error Kustom (set_error_handler)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>set_error_handler(callable $callback)</code> mengalihkan seluruh warning dan notice PHP ke fungsi callback buatan Anda. Anda dapat mengubah error biasa menjadi <code>ErrorException</code> yang bisa ditangkap oleh blok <code>try...catch</code>!
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Daftarkan Custom Error Handler yang Elegan
set_error_handler(function($errno, $errstr, $errfile, $errline) {
    echo "<div style='background: #fef2f2; border: 1px solid #f87171; padding: 12px; border-radius: 8px; margin-bottom: 10px;'>";
    echo "<strong style='color: #dc2626;'>[LMS Security Warning]</strong>: $errstr<br>";
    echo "<small style='color: #64748b;'>Lokasi: $errfile pada baris $errline</small>";
    echo "</div>";
    return true; // Mencegah PHP menampilkan pesan error bawaan
});

// Picu warning buatan
trigger_error("Koneksi API Payment Gateway sedang lambat (Percobaan #2)", E_USER_WARNING);

// Bersihkan handler
restore_error_handler();
?>`,
    codeExplanation: [
      'Jika callback mengembalikan true, PHP tidak akan menjalankan penangan error bawaan internalnya.',
      'Sangat sering digunakan di framework modern untuk menyajikan tampilan error UI yang cantik.'
    ],
    challenge: {
      instruction: 'Daftarkan custom error handler sederhana dengan set_error_handler.',
      starterCode: `<?php
set_error_handler(function($no, $msg) {
    echo "Error ditangkap: $msg";
    return true;
});
trigger_error("Tes Error Handler", E_USER_NOTICE);
restore_error_handler();
?>`,
      hint: 'Gunakan set_error_handler(function($no, $msg){ ... return true; });'
    },
    quiz: {
      question: 'Apa arti nilai kembalian boolean TRUE dari fungsi callback di set_error_handler()?',
      options: [
        'Menandakan error telah berhasil ditangani sehingga PHP internal tidak perlu menampilkan pesan error bawaan lagi',
        'Menghentikan eksekusi script seketika',
        'Menghapus database',
        'Membuat file baru'
      ],
      correctIndex: 0,
      explanation: 'Mengembalikan true mencegah PHP menjalankan penangan error internal standar.'
    }
  },

  // 164. SET_EXCEPTION_HANDLER()
  {
    id: 'php-ref-set-exception-handler',
    title: 'PHP set_exception_handler()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 164,
    overview: 'Kuasai set_exception_handler(): mendaftarkan fungsi penangkap eksepsi global (Uncaught Exceptions) agar aplikasi tidak pernah menampilkan layar putih kosong (White Screen of Death) kepada pengguna.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SET EXCEPTION HANDLER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 164 / 165</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌐 Penangan Eksepsi Global (set_exception_handler)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>set_exception_handler(callable $callback)</code> bertindak sebagai jaring pengaman terakhir (Safety Net) untuk menangani seluruh <code>Exception</code> dan <code>Throwable</code> yang tidak sempat ditangkap oleh blok <code>try...catch</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Jaring Pengaman Global Aplikasi (Global Safety Net)
set_exception_handler(function(Throwable $e) {
    echo "<div style='background: #0f172a; color: #f87171; padding: 16px; border-radius: 8px;'>";
    echo "<h3>🚨 Terjadi Kesalahan Sistem yang Ditangkap Global:</h3>";
    echo "<p>Pesan: <strong>" . $e->getMessage() . "</strong></p>";
    echo "<p>Kode Status: <strong>" . $e->getCode() . "</strong></p>";
    echo "</div>";
});

// Simulasi pelemparan Exception yang tidak di-catch
throw new Exception("Saldo User tidak mencukupi untuk checkout", 402);
?>`,
    codeExplanation: [
      'set_exception_handler menangkap objek Throwable (Exception atau Error di PHP 7+ / 8+).',
      'Memungkinkan rendering halaman kustom 500 Internal Server Error yang profesional.'
    ],
    challenge: {
      instruction: 'Pelajari mekanisme penanganan eksepsi global dengan set_exception_handler.',
      starterCode: `<?php
set_exception_handler(function(Throwable $e) {
    echo "Tertangkap Global: " . $e->getMessage();
});
throw new Exception("Tes Global Exception");
?>`,
      hint: 'Klik RUN untuk mencoba set_exception_handler.'
    },
    quiz: {
      question: 'Kapan fungsi callback yang didaftarkan pada set_exception_handler() akan otomatis dieksekusi?',
      options: [
        'Ketika terjadi sebuah Exception yang tidak ditangkap (uncaught) di dalam blok try...catch manapun',
        'Setiap kali script mulai dijalankan',
        'Hanya saat user menekan tombol refresh',
        'Hanya di PHP 5'
      ],
      correctIndex: 0,
      explanation: 'Fungsi terpanggil otomatis sebagai pertahanan terakhir saat ada eksepsi yang lolos dari try...catch.'
    }
  },

  // 165. TRIGGER_ERROR()
  {
    id: 'php-ref-trigger-error',
    title: 'PHP trigger_error()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 165,
    overview: 'Kuasai trigger_error(): memicu pesan kesalahan tingkat pengguna buatan sendiri (E_USER_ERROR, E_USER_WARNING, E_USER_NOTICE, E_USER_DEPRECATED) pada kondisi bisnis tertentu.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TRIGGER ERROR</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 165 / 165</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🚨 Memicu Error Kustom (trigger_error)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>trigger_error($message, $error_level)</code> memungkinkan Anda membangkitkan sinyal kesalahan manual. Sangat umum digunakan untuk memberitahu developer lain bahwa sebuah fungsi akan segera dihapus (<code>E_USER_DEPRECATED</code>) atau ada nilai input parameter yang melanggar aturan.
          </p>
        </div>
      </div>
    `,
    code: `<?php
function hitungDiskon($persen) {
    if ($persen > 100 || $persen < 0) {
        // Picu E_USER_WARNING jika diskon di luar logika akal sehat
        trigger_error("Nilai diskon harus antara 0-100%, input: $persen%", E_USER_WARNING);
        return 0;
    }
    return $persen;
}

// Uji fungsi dengan nilai salah
hitungDiskon(150);

echo "<p style='color: green;'>Fungsi trigger_error() berhasil membangkitkan sinyal peringatan kustom.</p>";
?>`,
    codeExplanation: [
      'Level error yang didukung: E_USER_NOTICE, E_USER_WARNING, E_USER_ERROR, E_USER_DEPRECATED.',
      'E_USER_ERROR akan menghentikan eksekusi script seketika jika tidak ditangkap oleh custom error handler.'
    ],
    challenge: {
      instruction: 'Picu sebuah pesan notice dengan trigger_error("Pesan info", E_USER_NOTICE).',
      starterCode: `<?php
trigger_error("Pesan info", E_USER_NOTICE);
echo "Selesai memicu notice!";
?>`,
      hint: 'Panggil trigger_error("Pesan info", E_USER_NOTICE).'
    },
    quiz: {
      question: 'Level error manakah pada trigger_error() yang akan menghentikan eksekusi skrip PHP seketika (Fatal Error)?',
      options: [
        'E_USER_ERROR',
        'E_USER_WARNING',
        'E_USER_NOTICE',
        'E_USER_DEPRECATED'
      ],
      correctIndex: 0,
      explanation: 'E_USER_ERROR membangkitkan kesalahan fatal tingkat pengguna yang menghentikan eksekusi program.'
    }
  }
];

module.exports = phpPart19RefError;
