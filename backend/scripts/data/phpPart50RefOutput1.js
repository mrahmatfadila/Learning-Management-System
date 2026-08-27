// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (OUTPUT CONTROL PART 1: 545-552)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart50RefOutput1 = [
  // 545. FLUSH
  {
    id: 'php-ref-out-flush',
    title: 'PHP flush()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 545,
    overview: 'Kuasai fungsi flush(): membilas/mendorong buffer sistem server web ke browser klien seketika (Server-Sent Events - SSE & Real-Time Live Streaming Output).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PHP OUTPUT CONTROL</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 545 / 560</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌊 Mendorong Output ke Klien Seketika (flush)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>flush(): void</code> mengosongkan buffer penulisan server web (Apache/Nginx/FastCGI) dan langsung mengirimkan teks apa pun yang sudah di-echo ke layar browser pengguna tanpa menunggu seluruh skrip PHP selesai. Fondasi utama teknologi <strong>Server-Sent Events (SSE)</strong>, progress bar live upload, dan streaming output AI response teks per kata.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Simulasi Live Streaming Output dengan flush():</h3>";
$code = <<<PHP
<?php
// Set header untuk streaming tanpa cache
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');

for (\$i = 1; \$i <= 3; \$i++) {
    echo "data: Progress \$i dari 3 selesai...\\n\\n";
    
    // Bilas buffer PHP dan Server Web
    ob_flush();
    flush();
    
    sleep(1);
}
?>
PHP;

echo "<pre style='background:#0f172a; color:#38bdf8; padding:12px; border-radius:8px;'>";
echo htmlspecialchars($code);
echo "</pre>";
?>`,
    codeExplanation: [
      'flush() bekerja bersama ob_flush() untuk memastikan output menembus layer buffer PHP internal dan buffer web server (Nginx/Apache).'
    ],
    challenge: {
      instruction: 'Pahami fungsi pembilasan buffer flush().',
      starterCode: `<?php
echo "flush() mendorong buffer server langsung ke browser.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Kapan fungsi `flush()` paling sering digunakan dalam aplikasi web modern?',
      options: [
        'Pada skenario Server-Sent Events (SSE), streaming jawaban AI model kata demi kata, atau live progress bar proses ekspor data',
        'Hanya untuk query database',
        'Untuk menghapus tabel database',
        'Untuk membuat cookie'
      ],
      correctIndex: 0,
      explanation: 'flush() mentransmisikan data seketika untuk realtime streaming output.'
    }
  },

  // 546. OB_CLEAN
  {
    id: 'php-ref-out-ob-clean',
    title: 'PHP ob_clean()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 546,
    overview: 'Kuasai fungsi ob_clean(): menghapus/membersihkan seluruh isi buffer output aktif TANPA mematikan sistem buffering (Output Buffer Sanitization).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">BUFFER CLEAN</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 546 / 560</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧹 Membersihkan Isi Buffer (ob_clean)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ob_clean(): bool</code> membuang seluruh teks yang tidak sengaja ter-echo sebelumnya. Sangat krusial sebelum men-download file biner gambar PNG, file Excel, atau PDF: <code>ob_clean(); readfile($pdf);</code> agar file biner tidak rusak (corrupt) oleh spasi/baris kosong yang bocor.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Mulai penampungan buffer
ob_start();

echo "Teks sampah yang tidak sengaja tercetak dari file include...";

// Bersihkan buffer agar output kembali bersih steril
ob_clean();

echo "<h3>Hasil Penggunaan ob_clean():</h3>";
echo "<p style='color:#059669;'>✓ Teks sampah sebelumnya telah dihapus bersih. Buffer tetap aktif menampung konten baru.</p>";

ob_end_flush();
?>`,
    codeExplanation: [
      'ob_clean() menghapus isi buffer saat ini tanpa menonaktifkan mekanisme ob_start().'
    ],
    challenge: {
      instruction: 'Bersihkan buffer dengan ob_clean().',
      starterCode: `<?php
ob_start();
echo "Sampah";
ob_clean();
echo "Bersih";
ob_end_flush();
?>`,
      hint: 'Panggil ob_clean() di antara dua echo.'
    },
    quiz: {
      question: 'Mengapa programmer sering memanggil `ob_clean()` sebelum fungsi ekspor file `readfile("laporan.pdf")`?',
      options: [
        'Untuk membuang karakter spasi putih atau peringatan PHP yang bocor ke buffer agar file binary PDF/Excel tidak rusak (corrupt)',
        'Untuk mengompres PDF',
        'Untuk menghapus file di server',
        'Hanya aturan gaya'
      ],
      correctIndex: 0,
      explanation: 'ob_clean menjamin header biner file tidak terkontaminasi oleh karakter teks yang bocor.'
    }
  },

  // 547. OB_END_CLEAN
  {
    id: 'php-ref-out-ob-end-clean',
    title: 'PHP ob_end_clean()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 547,
    overview: 'Kuasai fungsi ob_end_clean(): membersihkan isi buffer DAN MEMATIKAN (menutup) level penampungan buffer aktif saat itu juga (Discard and Close Buffer).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DISCARD BUFFER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 547 / 560</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🗑️ Buang Buffer & Matikan Buffering (ob_end_clean)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ob_end_clean(): bool</code> membuang seluruh isi buffer aktif tanpa mencetaknya ke layar dan sekaligus menutup layer <code>ob_start()</code> tersebut.
          </p>
        </div>
      </div>
    `,
    code: `<?php
ob_start();
echo "Ini konten rahasia sementara yang tidak boleh dilihat publik...";

// Buang total dan matikan buffering
ob_end_clean();

echo "<h3>Hasil Penggunaan ob_end_clean():</h3>";
echo "<p style='color:#059669;'>✓ Konten buffer rahasia dibuang tanpa pernah dicetak ke browser dan layer buffering ditutup.</p>";
?>`,
    codeExplanation: [
      'ob_end_clean() adalah kombinasi dari ob_clean() + penutupan level buffer ob_start.'
    ],
    challenge: {
      instruction: 'Tutup dan buang buffer dengan ob_end_clean().',
      starterCode: `<?php
ob_start();
echo "Dibuang";
ob_end_clean();
echo "Selesai";
?>`,
      hint: 'Panggil ob_end_clean().'
    },
    quiz: {
      question: 'Apa perbedaan antara `ob_clean()` dan `ob_end_clean()`?',
      options: [
        '`ob_clean()` hanya membersihkan teks di dalam buffer tetapi layer buffering tetap aktif, sedangkan `ob_end_clean()` membersihkan teks sekaligus menutup layer buffering tersebut',
        '`ob_end_clean()` mencetak teks ke layar',
        'Keduanya identik',
        '`ob_clean()` hanya untuk CLI'
      ],
      correctIndex: 0,
      explanation: 'ob_end_clean membuang isi buffer DAN mengakhiri session buffer ob_start.'
    }
  },

  // 548. OB_END_FLUSH
  {
    id: 'php-ref-out-ob-end-flush',
    title: 'PHP ob_end_flush()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 548,
    overview: 'Kuasai fungsi ob_end_flush(): mengirim/mencetak seluruh isi buffer ke output browser DAN MENGAKHIRI level penampungan buffer aktif (Output and Close Buffer).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">FLUSH AND CLOSE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 548 / 560</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📤 Cetak Buffer & Tutup Layer (ob_end_flush)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ob_end_flush(): bool</code> mengeluarkan seluruh isi buffer ke browser atau buffer induknya dan menonaktifkan level buffer saat ini.
          </p>
        </div>
      </div>
    `,
    code: `<?php
ob_start();
echo "<p>Paragraf 1 yang ditampung dalam buffer.</p>";
echo "<p>Paragraf 2 yang ditampung dalam buffer.</p>";

// Cetak ke layar dan tutup buffer
ob_end_flush();
?>`,
    codeExplanation: [
      'ob_end_flush() menyelesaikan siklus penampungan ob_start dan merilis hasilnya.'
    ],
    challenge: {
      instruction: 'Cetak isi buffer dan tutup dengan ob_end_flush().',
      starterCode: `<?php
ob_start();
echo "Hello World";
ob_end_flush();
?>`,
      hint: 'Panggil ob_end_flush().'
    },
    quiz: {
      question: 'Apa aksi yang dilakukan oleh fungsi `ob_end_flush()`?',
      options: [
        'Mencetak seluruh isi buffer ke output dan sekaligus mengakhiri/menutup level buffering aktif',
        'Menghapus isi buffer tanpa mencetaknya',
        'Menyimpan buffer ke file disk',
        'Merestart web server'
      ],
      correctIndex: 0,
      explanation: 'ob_end_flush merilis seluruh konten buffer ke output dan menutup layer ob_start.'
    }
  },

  // 549. OB_FLUSH
  {
    id: 'php-ref-out-ob-flush',
    title: 'PHP ob_flush()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 549,
    overview: 'Kuasai fungsi ob_flush(): mengirim/mengeluarkan isi buffer aktif ke server web TANPA mematikan level penampungan buffer (Flush but Keep Buffering).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">INTERMEDIATE FLUSH</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 549 / 560</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📤 Keluarkan Buffer Bertahap (ob_flush)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ob_flush(): bool</code> mendorong isi buffer PHP saat ini keluar, mengosongkannya untuk menampung teks iterasi berikutnya sementara buffering tetap aktif berjalan.
          </p>
        </div>
      </div>
    `,
    code: `<?php
ob_start();

echo "<p>Chunk Bagian 1</p>";
ob_flush(); // Dorong bagian 1

echo "<p>Chunk Bagian 2</p>";
ob_end_flush(); // Dorong bagian 2 dan tutup
?>`,
    codeExplanation: [
      'ob_flush() memproses pengiriman data secara berkala per chunk tanpa menutup ob_start().'
    ],
    challenge: {
      instruction: 'Pahami fungsi ob_flush.',
      starterCode: `<?php
ob_start();
echo "Chunk data";
ob_flush();
ob_end_clean();
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Apa perbedaan antara `ob_flush()` dan `ob_end_flush()`?',
      options: [
        '`ob_flush()` mengeluarkan isi buffer tetapi buffer tetap aktif menampung teks berikutnya, sedangkan `ob_end_flush()` mengeluarkan isi buffer dan langsung menutup layer buffer',
        '`ob_flush()` mematikan server',
        'Tidak ada bedanya',
        '`ob_flush()` menghapus teks'
      ],
      correctIndex: 0,
      explanation: 'ob_flush mempertahankan layer penampungan buffer agar tetap aktif.'
    }
  },

  // 550. OB_GET_CLEAN
  {
    id: 'php-ref-out-ob-get-clean',
    title: 'PHP ob_get_clean()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 550,
    overview: 'Kuasai fungsi ob_get_clean(): mengambil seluruh isi buffer sebagai string variabel DAN sekaligus membersihkan serta mematikan buffer (metode paling populer untuk Template Engine & HTML Renderer).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">TEMPLATE ENGINE CORE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 550 / 560</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">👑 Tangkap HTML ke Variabel (ob_get_clean)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ob_get_clean(): string|false</code> setara dengan menjalankan <code>ob_get_contents()</code> lalu diikuti <code>ob_end_clean()</code>. Fondasi utama framework MVC (Laravel Blade, Symfony Twig, CodeIgniter View) untuk merender view template HTML ke dalam variabel string.
          </p>
        </div>
      </div>
    `,
    code: `<?php
function renderEmailTemplate(string $nama, string $kodeOtp): string {
    ob_start();
    ?>
    <div style="font-family: sans-serif; padding: 16px; border: 1px solid #e2e8f0; border-radius: 8px;">
        <h2 style="color: #4f46e5;">Halo, <?= htmlspecialchars($nama) ?>!</h2>
        <p>Kode verifikasi login Anda adalah:</p>
        <p style="font-size: 24px; font-weight: bold; letter-spacing: 4px; color: #059669;"><?= $kodeOtp ?></p>
    </div>
    <?php
    // Tangkap seluruh HTML di atas ke variabel string dan tutup buffer
    return ob_get_clean();
}

$htmlEmail = renderEmailTemplate("Rahmat Fadila", "982314");

echo "<h3>Hasil Penggunaan ob_get_clean() (Template Render):</h3>";
echo $htmlEmail;
?>`,
    codeExplanation: [
      'ob_get_clean() menangkap output PHP/HTML di antara ob_start() dan menyimpannya ke variabel $htmlEmail.',
      'Sangat bersih, elegan, dan standar emas pembuatan view renderer.'
    ],
    challenge: {
      instruction: 'Tangkap string "Hello" ke variabel $str menggunakan ob_start() dan ob_get_clean().',
      starterCode: `<?php
ob_start();
echo "Hello DevGrow";
$str = ob_get_clean();
echo "Captured: " . $str;
?>`,
      hint: 'Panggil $str = ob_get_clean();.'
    },
    quiz: {
      question: 'Kombinasi dua fungsi apakah yang dipermudah dan diringkas oleh fungsi `ob_get_clean()`?',
      options: [
        '`ob_get_contents()` dan `ob_end_clean()`',
        '`ob_clean()` dan `ob_flush()`',
        '`ob_start()` dan `flush()`',
        '`echo` dan `die()`'
      ],
      correctIndex: 0,
      explanation: 'ob_get_clean() membaca isi string (ob_get_contents) lalu membuang & mematikan buffer (ob_end_clean).'
    }
  },

  // 551. OB_GET_CONTENTS
  {
    id: 'php-ref-out-ob-get-contents',
    title: 'PHP ob_get_contents()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 551,
    overview: 'Kuasai fungsi ob_get_contents(): membaca isi buffer aktif saat ini sebagai string variabel TANPA menghapus atau menutup buffer penampungan.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PEEK BUFFER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 551 / 560</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Intip Isi Buffer (ob_get_contents)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ob_get_contents(): string|false</code> mengembalikan string isi buffer aktif saat ini. Berbeda dengan <code>ob_get_clean()</code>, buffer tidak dihapus dan tidak dimatikan sehingga dapat diintip berkali-kali.
          </p>
        </div>
      </div>
    `,
    code: `<?php
ob_start();
echo "Tahap 1... ";

$tahap1 = ob_get_contents(); // Intip isi buffer tahap 1

echo "Tahap 2 Selesai.";
$tahapFinal = ob_get_contents(); // Intip isi buffer total

ob_end_clean();

echo "<h3>Hasil Penggunaan ob_get_contents():</h3>";
echo "<p>Isi Tahap 1 : <strong style='color:#4f46e5;'>$tahap1</strong></p>";
echo "<p>Isi Final   : <strong style='color:#059669;'>$tahapFinal</strong></p>";
?>`,
    codeExplanation: [
      'ob_get_contents() membaca data buffer tanpa mengganggu alur penampungan buffer.'
    ],
    challenge: {
      instruction: 'Baca buffer dengan ob_get_contents().',
      starterCode: `<?php
ob_start();
echo "Data Test";
$c = ob_get_contents();
ob_end_clean();
echo "Hasil: " . $c;
?>`,
      hint: 'Panggil ob_get_contents().'
    },
    quiz: {
      question: 'Apakah pemanggilan `ob_get_contents()` akan menghapus atau mematikan buffer yang sedang aktif?',
      options: [
        'Tidak, buffer tetap aktif dan isinya tetap utuh',
        'Ya, buffer langsung dihapus',
        'Ya, buffer langsung dimatikan',
        'Tergantung versi PHP'
      ],
      correctIndex: 0,
      explanation: 'ob_get_contents bersifat read-only / peek tanpa mengubah state buffer.'
    }
  },

  // 552. OB_GET_FLUSH
  {
    id: 'php-ref-out-ob-get-flush',
    title: 'PHP ob_get_flush()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 552,
    overview: 'Kuasai fungsi ob_get_flush(): mengambil isi buffer ke variabel string, MENCETAKNYA ke output browser, dan sekaligus MEMATIKAN layer buffer.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CAPTURE & FLUSH</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 552 / 560</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📦 Tangkap, Cetak, dan Tutup Buffer (ob_get_flush)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ob_get_flush(): string|false</code> setara dengan menjalankan <code>$str = ob_get_contents(); ob_end_flush(); return $str;</code>. Sangat berguna untuk mencatat log HTML yang dikirim ke pengguna sembari tetap menampilkannya.
          </p>
        </div>
      </div>
    `,
    code: `<?php
ob_start();
echo "<p>Halaman ini dicetak langsung ke pengguna sembari disalin ke variabel log.</p>";

$salinanLog = ob_get_flush();

echo "<p style='color:#059669;'>✓ Panjang string yang tersalin ke log audit: " . strlen($salinanLog) . " karakter.</p>";
?>`,
    codeExplanation: [
      'ob_get_flush() mengembalikan string buffer sekaligus membiarkan konten tersebut tampil di layar browser.'
    ],
    challenge: {
      instruction: 'Pahami fungsi ob_get_flush.',
      starterCode: `<?php
ob_start();
echo "Data dual output";
$copy = ob_get_flush();
?>`,
      hint: 'Panggil ob_get_flush().'
    },
    quiz: {
      question: 'Kombinasi aksi apakah yang dieksekusi secara simultan oleh `ob_get_flush()`?',
      options: [
        'Mengembalikan isi buffer sebagai string (get), mencetaknya ke output layar (flush), dan menutup level buffer (end)',
        'Hanya menghapus buffer',
        'Memulai buffer baru',
        'Mengirim header HTTP'
      ],
      correctIndex: 0,
      explanation: 'ob_get_flush melakukan tiga hal: get string, flush ke output, dan end layer buffering.'
    }
  }
];

module.exports = phpPart50RefOutput1;
