// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (OUTPUT CONTROL PART 2: 553-560)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart51RefOutput2 = [
  // 553. OB_GET_LENGTH
  {
    id: 'php-ref-out-ob-get-length',
    title: 'PHP ob_get_length()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 553,
    overview: 'Kuasai fungsi ob_get_length(): mendapatkan ukuran panjang (panjang byte/karakter) dari isi buffer output yang sedang aktif (Content-Length Header calculation).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">BUFFER LENGTH</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 553 / 560</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📏 Menghitung Ukuran Buffer (ob_get_length)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ob_get_length(): int|false</code> mengembalikan jumlah byte data yang saat ini tersimpan dalam buffer. Sangat berguna untuk mengirimkan header <code>header("Content-Length: " . ob_get_length());</code> sebelum flushing output.
          </p>
        </div>
      </div>
    `,
    code: `<?php
ob_start();
echo "Belajar Backend PHP 8 di DevGrow LMS";

$panjangBuffer = ob_get_length();
ob_end_clean();

echo "<h3>Hasil Penggunaan ob_get_length():</h3>";
echo "<p>Ukuran Konten Buffer: <strong style='color:#059669; font-size:18px;'>$panjangBuffer byte</strong></p>";
?>`,
    codeExplanation: [
      'ob_get_length() menghitung ukuran payload byte buffer untuk optimalisasi Content-Length HTTP header.'
    ],
    challenge: {
      instruction: 'Ukur panjang string buffer "Test" dengan ob_get_length().',
      starterCode: `<?php
ob_start();
echo "12345";
$len = ob_get_length();
ob_end_clean();
echo "Panjang: " . $len;
?>`,
      hint: 'Panggil ob_get_length().'
    },
    quiz: {
      question: 'Apa nilai yang dikembalikan oleh `ob_get_length()` jika saat ini tidak ada output buffering yang sedang aktif?',
      options: [
        'Boolean `false`',
        'Integer `0`',
        '`null`',
        'Fatal Error'
      ],
      correctIndex: 0,
      explanation: 'Jika tidak ada buffer aktif, ob_get_length mengembalikan false.'
    }
  },

  // 554. OB_GET_LEVEL
  {
    id: 'php-ref-out-ob-get-level',
    title: 'PHP ob_get_level()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 554,
    overview: 'Kuasai fungsi ob_get_level(): mengetahui tingkat kedalaman nesting buffering output aktif (Nested Buffering Level) untuk pembersihan buffer bertingkat yang aman.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">NESTED BUFFERS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 554 / 560</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🪜 Tingkat Kedalaman Buffer (ob_get_level)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ob_get_level(): int</code> mengembalikan angka integer kedalaman layer buffer saat ini (0 jika tidak ada buffer). Pola pembersihan total framework: <code>while (ob_get_level() > 0) { ob_end_clean(); }</code> untuk mereset seluruh layer buffer saat terjadi error 500 fatal.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Tingkat Kedalaman Buffering (ob_get_level):</h3>";
echo "<p>Level Awal: <strong>" . ob_get_level() . "</strong></p>";

ob_start();
echo "<p>Level Setelah 1x ob_start(): <strong style='color:#059669;'>" . ob_get_level() . "</strong></p>";

ob_start();
echo "<p>Level Setelah 2x ob_start() (Nested): <strong style='color:#4f46e5;'>" . ob_get_level() . "</strong></p>";

// Bersihkan seluruh layer buffer secara berulang
while (ob_get_level() > 1) {
    ob_end_flush();
}
ob_end_flush();
?>`,
    codeExplanation: [
      'ob_get_level() melacak jumlah tumpukan stack ob_start().',
      'Pola while(ob_get_level() > 0) ob_end_clean() adalah standar error handler framework.'
    ],
    challenge: {
      instruction: 'Periksa level buffer dengan ob_get_level().',
      starterCode: `<?php
echo "Level: " . ob_get_level();
?>`,
      hint: 'Panggil ob_get_level().'
    },
    quiz: {
      question: 'Berapakah nilai yang dihasilkan oleh `ob_get_level()` jika terdapat 2 buah `ob_start()` yang saling bertumpuk (nested)?',
      options: [
        'Integer `2` (atau lebih tergantung konfigurasi output_buffering php.ini)',
        'Integer `1`',
        'Integer `0`',
        'Boolean `true`'
      ],
      correctIndex: 0,
      explanation: 'Setiap pemanggilan ob_start() menaikkan counter ob_get_level sebesar 1.'
    }
  },

  // 555. OB_GZHANDLER
  {
    id: 'php-ref-out-ob-gzhandler',
    title: 'PHP ob_gzhandler()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 555,
    overview: 'Kuasai fungsi ob_gzhandler(): callback kompresi GZIP otomatis untuk ob_start() — mengompresi payload halaman web hingga 70-80% lebih kecil sebelum dikirimkan ke browser.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">GZIP COMPRESSION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 555 / 560</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🗜️ Kompresi Respons GZIP Otomatis (ob_gzhandler)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ob_gzhandler(string $data, int $flags): string|false</code> membaca header <code>Accept-Encoding: gzip, deflate</code> browser pengguna dan mengompresi seluruh output HTML/JSON secara transparan dengan header <code>Content-Encoding: gzip</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Cara Mengaktifkan Kompresi GZIP di PHP:</h3>";
$gzCode = <<<PHP
<?php
// Letakkan di baris paling pertama file index.php
ob_start("ob_gzhandler");

// Seluruh HTML / JSON berikut otomatis dikompresi 70-80% lebih kecil
echo "<h1>Website Super Cepat Berkompresi GZIP</h1>";
?>
PHP;

echo "<pre style='background:#0f172a; color:#38bdf8; padding:12px; border-radius:8px;'>";
echo htmlspecialchars($gzCode);
echo "</pre>";
echo "<p style='color:#059669;'>✓ Menghemat bandwidth server dan mempercepat loading time halaman secara drastis.</p>";
?>`,
    codeExplanation: [
      'ob_start("ob_gzhandler") secara cerdas hanya mengompresi jika browser klien mendukung gzip.'
    ],
    challenge: {
      instruction: 'Pahami inisialisasi kompresi dengan ob_start("ob_gzhandler").',
      starterCode: `<?php
echo "ob_start('ob_gzhandler') mengompresi output dengan algoritma GZIP.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Header HTTP apakah yang dikirimkan oleh `ob_gzhandler` ke browser klien untuk memberitahukan bahwa konten telah dikompresi?',
      options: [
        '`Content-Encoding: gzip`',
        '`Transfer-Encoding: chunked`',
        '`Content-Type: gzip`',
        '`X-Compressed: true`'
      ],
      correctIndex: 0,
      explanation: 'Content-Encoding: gzip memberitahu peramban untuk mendekompresi payload sebelum merendernya.'
    }
  },

  // 556. OB_IMPLICIT_FLUSH
  {
    id: 'php-ref-out-ob-implicit-flush',
    title: 'PHP ob_implicit_flush()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 556,
    overview: 'Kuasai fungsi ob_implicit_flush(): mengaktifkan atau menonaktifkan pembilasan otomatis seketika setiap kali ada perintah echo/print/HTML (Auto-Flushing Mode).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">AUTO FLUSH</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 556 / 560</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚡ Pembilasan Otomatis Setiap Echo (ob_implicit_flush)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ob_implicit_flush(bool $enable = true): void</code> jika disetel <code>true</code> (atau <code>1</code>), PHP akan otomatis memanggil <code>flush()</code> setiap kali ada teks yang dicetak, meniadakan kebutuhan memanggil <code>flush()</code> manual di setiap baris loop.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Simulasi ob_implicit_flush(true):</h3>";
$implicitCode = <<<PHP
<?php
// Aktifkan auto-flush
ob_implicit_flush(true);

for (\$i = 1; \$i <= 5; \$i++) {
    echo "Langkah \$i selesai...<br>";
    // Tidak perlu lagi memanggil flush() manual!
    sleep(1);
}
?>
PHP;

echo "<pre style='background:#0f172a; color:#38bdf8; padding:12px; border-radius:8px;'>";
echo htmlspecialchars($implicitCode);
echo "</pre>";
?>`,
    codeExplanation: [
      'ob_implicit_flush(true) sangat populer pada skrip PHP CLI dan live worker progress reporting.'
    ],
    challenge: {
      instruction: 'Aktifkan implicit flush dengan ob_implicit_flush(true).',
      starterCode: `<?php
ob_implicit_flush(true);
echo "Implicit flush aktif.";
?>`,
      hint: 'Panggil ob_implicit_flush(true).'
    },
    quiz: {
      question: 'Apa efek utama dari memanggil `ob_implicit_flush(true)` di skrip PHP?',
      options: [
        'Setiap perintah `echo` atau `print` akan langsung di-flush otomatis ke output tanpa perlu memanggil `flush()` secara manual',
        'Menonaktifkan semua fungsi print',
        'Membuat skrip berjalan di background',
        'Menghapus output buffer'
      ],
      correctIndex: 0,
      explanation: 'Implicit flush mengotomatisasi pemanggilan flush() pasca setiap blok output.'
    }
  },

  // 557. OB_LIST_HANDLERS
  {
    id: 'php-ref-out-ob-list-handlers',
    title: 'PHP ob_list_handlers()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 557,
    overview: 'Kuasai fungsi ob_list_handlers(): mengambil daftar nama handler yang sedang aktif mengontrol setiap level output buffer (misal: "default output handler", "ob_gzhandler", atau nama callback kustom).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">BUFFER INTROSPECTION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 557 / 560</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📋 Daftar Handler Buffer Aktif (ob_list_handlers)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ob_list_handlers(): array</code> mengembalikan array string berisi nama fungsi callback handler yang dipasang pada setiap level buffering aktif.
          </p>
        </div>
      </div>
    `,
    code: `<?php
ob_start(); // Level 1: default output handler
ob_start("mb_output_handler"); // Level 2: Multibyte output handler

$handlers = ob_list_handlers();

ob_end_clean();
ob_end_clean();

echo "<h3>Daftar Handler Buffer yang Terpasang:</h3>";
echo "<ul>";
foreach ($handlers as $lvl => $name) {
    echo "<li>Layer #$lvl: <strong style='color:#059669;'>$name</strong></li>";
}
echo "</ul>";
?>`,
    codeExplanation: [
      'ob_list_handlers() berguna untuk debugging arsitektur middleware dan verifikasi plugin caching.'
    ],
    challenge: {
      instruction: 'Ambil daftar handler dengan ob_list_handlers().',
      starterCode: `<?php
ob_start();
$h = ob_list_handlers();
ob_end_clean();
echo "Handler: " . implode(", ", $h);
?>`,
      hint: 'Panggil ob_list_handlers().'
    },
    quiz: {
      question: 'Tipe data apakah yang dikembalikan oleh `ob_list_handlers()`?',
      options: [
        'Array string berisi nama-nama handler yang terpasang di setiap layer output buffer',
        'String tunggal',
        'Integer jumlah handler',
        'Boolean'
      ],
      correctIndex: 0,
      explanation: 'ob_list_handlers mengembalikan array yang memetakan layer buffer ke nama handlernya.'
    }
  },

  // 558. OB_START
  {
    id: 'php-ref-out-ob-start',
    title: 'PHP ob_start()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 558,
    overview: 'Kuasai fungsi ob_start(): mengaktifkan penampungan output buffer PHP (Output Buffering) dengan dukungan callback transformator kustom (HTML Minifier, Sanitizer, Caching Layer).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">FOUNDATION OF BUFFERING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 558 / 560</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🚀 Mengaktifkan Output Buffering (ob_start)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ob_start(?callable $callback = null, int $chunk_size = 0, int $flags = PHP_OUTPUT_HANDLER_STDFLAGS): bool</code> menahan seluruh output teks/HTML di memori. Jika diberikan callback, seluruh HTML dapat dimodifikasi (misal: minifikasi HTML otomatis) sebelum dikirimkan ke browser.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Contoh Canggih: ob_start dengan Callback Minifikasi HTML Otomatis
ob_start(function(string $html) {
    // Hapus spasi ganda dan baris baru
    return preg_replace('/\\s+/', ' ', $html);
});
?>
<div class="kartu">
    <h2>   Judul dengan Spasi Berlebih   </h2>
    <p>    Paragraf HTML yang otomatis diminifikasi.    </p>
</div>
<?php
// Rilis output yang sudah diminifikasi
ob_end_flush();
?>`,
    codeExplanation: [
      'ob_start(callback) mencegat seluruh HTML sebelum keluar dan memprosesnya via fungsi transformator kustom.',
      'Sangat ampuh untuk implementasi full-page caching dan HTML minifier.'
    ],
    challenge: {
      instruction: 'Mulai penampungan buffer dengan ob_start().',
      starterCode: `<?php
ob_start();
echo "Buffer Test";
ob_end_flush();
?>`,
      hint: 'Panggil ob_start().'
    },
    quiz: {
      question: 'Apa fungsi parameter pertama `$callback` pada pemanggilan `ob_start($callback)`?',
      options: [
        'Fungsi transformator opsional yang akan secara otomatis memodifikasi seluruh konten string buffer sebelum dikirim keluar',
        'Menghapus buffer',
        'Menutup koneksi database',
        'Mengatur waktu timeout'
      ],
      correctIndex: 0,
      explanation: 'Callback pada ob_start menerima string buffer dan mengembalikan string hasil modifikasi.'
    }
  },

  // 559. OUTPUT_ADD_REWRITE_VAR
  {
    id: 'php-ref-out-output-add-rewrite-var',
    title: 'PHP output_add_rewrite_var()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 559,
    overview: 'Kuasai fungsi output_add_rewrite_var(): menyuntikkan pasangan nama/nilai variabel tersembunyi secara otomatis ke seluruh tag formulir HTML (<form>) dan link URL halaman.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">FORM REWRITER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 559 / 560</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📝 Suntikkan Variabel Otomatis ke Form (output_add_rewrite_var)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>output_add_rewrite_var(string $name, string $value): bool</code> secara otomatis menyisipkan elemen <code><input type="hidden" name="csrf_token" value="..."></code> ke dalam semua form HTML yang di-render di halaman.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Mulai rewrite rewriter dengan menyuntikkan CSRF token ke setiap form
output_add_rewrite_var('csrf_token', 'secret_xyz123_token');

echo "<h3>Hasil Render Form Otomatis Disuntik CSRF Token:</h3>";
echo '<form action="/submit" method="post"><input type="text" name="pesan"><button type="submit">Kirim</button></form>';

// Reset rewriter
output_reset_rewrite_vars();
?>`,
    codeExplanation: [
      'output_add_rewrite_var() mengotomatisasi injeksi hidden input token keamanan ke setiap tag <form>.'
    ],
    challenge: {
      instruction: 'Pahami fungsi output_add_rewrite_var.',
      starterCode: `<?php
output_add_rewrite_var('session_id', '12345');
output_reset_rewrite_vars();
echo "Rewrite configured.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Elemen HTML apakah yang secara otomatis disisipkan ke dalam tag `<form>` oleh `output_add_rewrite_var("token", "abc")`?',
      options: [
        '`<input type="hidden" name="token" value="abc" />`',
        '`<script>` tag',
        '`<button>`',
        '`<meta>` tag'
      ],
      correctIndex: 0,
      explanation: 'output_add_rewrite_var otomatis menyisipkan hidden input field pada form HTML.'
    }
  },

  // 560. OUTPUT_RESET_REWRITE_VARS
  {
    id: 'php-ref-out-output-reset-rewrite-vars',
    title: 'PHP output_reset_rewrite_vars()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 560,
    overview: 'Kuasai fungsi output_reset_rewrite_vars(): mereset/menonaktifkan seluruh aturan penulisan ulang URL dan penyuntikan form yang sebelumnya dibuat dengan output_add_rewrite_var().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">REWRITE RESET</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 560 / 560</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔄 Reset Variabel Rewrite (output_reset_rewrite_vars)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>output_reset_rewrite_vars(): bool</code> mengosongkan variabel URL rewriter agar form dan link HTML berikutnya tidak lagi disuntikkan parameter tambahan.
          </p>
        </div>
      </div>
    `,
    code: `<?php
output_add_rewrite_var('tracking_id', 'campaign_99');

// Reset seluruh variabel rewrite
$resetOk = output_reset_rewrite_vars();

echo "<h3>Hasil Penggunaan output_reset_rewrite_vars():</h3>";
echo "<p>Status Reset: <strong style='color:#059669;'>" . ($resetOk ? "Berhasil Direset" : "Gagal") . "</strong></p>";
echo "<p style='color:green;'>🎉 Selamat! Seluruh referensi Output Control PHP berhasil Anda kuasai!</p>";
?>`,
    codeExplanation: [
      'output_reset_rewrite_vars() mengembalikan rewriter engine ke kondisi default netral.'
    ],
    challenge: {
      instruction: 'Reset variabel rewriter dengan output_reset_rewrite_vars().',
      starterCode: `<?php
$res = output_reset_rewrite_vars();
echo "Reset: " . ($res ? "OK" : "Failed");
?>`,
      hint: 'Panggil output_reset_rewrite_vars().'
    },
    quiz: {
      question: 'Kapan programmer perlu memanggil `output_reset_rewrite_vars()`?',
      options: [
        'Setelah selesai me-render form yang membutuhkan variabel khusus agar form/link berikutnya di halaman tidak terkontaminasi variabel yang sama',
        'Sebelum koneksi database',
        'Untuk mematikan server',
        'Hanya saat session expired'
      ],
      correctIndex: 0,
      explanation: 'output_reset_rewrite_vars membersihkan aturan rewrite agar form berikutnya tetap bersih.'
    }
  }
];

module.exports = phpPart51RefOutput2;
