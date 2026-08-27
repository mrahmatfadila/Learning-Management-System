// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (NETWORK PART 2: 523-533)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart48RefNetwork2 = [
  // 523. GETPROTOBYNAME
  {
    id: 'php-ref-net-getprotobyname',
    title: 'PHP getprotobyname()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 523,
    overview: 'Kuasai fungsi getprotobyname(): mendapatkan nomor protokol jaringan integer berdasarkan nama string protokol (misal: "tcp" -> 6, "udp" -> 17, "icmp" -> 1) dari file /etc/protocols.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PROTOCOL NUMBER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 523 / 544</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔢 Nomor Protokol Jaringan (getprotobyname)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>getprotobyname(string $protocol): int|false</code> mengembalikan nomor protokol IANA untuk digunakan pada fungsi <code>socket_create(AF_INET, SOCK_STREAM, getprotobyname('tcp'))</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Hasil Pemetaan Protokol Jaringan:</h3>";
echo "<ul>";
echo "<li>Protokol TCP  : <strong style='color:#059669;'>" . getprotobyname("tcp") . "</strong> (Nomor 6)</li>";
echo "<li>Protokol UDP  : <strong style='color:#4f46e5;'>" . getprotobyname("udp") . "</strong> (Nomor 17)</li>";
echo "<li>Protokol ICMP : <strong>" . getprotobyname("icmp") . "</strong> (Nomor 1)</li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'getprotobyname("tcp") menghasilkan 6 (standar RFC/IANA IP protocol number).'
    ],
    challenge: {
      instruction: 'Ambil nomor protokol "tcp" dengan getprotobyname("tcp").',
      starterCode: `<?php
echo "TCP Protocol: " . getprotobyname("tcp");
?>`,
      hint: 'Panggil getprotobyname("tcp").'
    },
    quiz: {
      question: 'Berapakah nomor protokol IP yang dikembalikan oleh `getprotobyname("tcp")`?',
      options: [
        'Integer `6`',
        'Integer `17`',
        'Integer `80`',
        'Integer `1`'
      ],
      correctIndex: 0,
      explanation: 'TCP memiliki nomor protokol IP resmi 6 (UDP adalah 17, ICMP adalah 1).'
    }
  },

  // 524. GETPROTOBYNUMBER
  {
    id: 'php-ref-net-getprotobynumber',
    title: 'PHP getprotobynumber()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 524,
    overview: 'Kuasai fungsi getprotobynumber(): mendapatkan nama string protokol jaringan berdasarkan nomor integer protokolnya (misal: 6 -> "tcp", 17 -> "udp").',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PROTOCOL NAME</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 524 / 544</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔤 Nama Protokol via Nomor (getprotobynumber)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>getprotobynumber(int $protocol): string|false</code> mengembalikan string nama protokol dari nomor IP header.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Hasil Pengujian getprotobynumber():</h3>";
echo "<p>Protokol #6  : <strong style='color:#059669;'>" . getprotobynumber(6) . "</strong></p>";
echo "<p>Protokol #17 : <strong style='color:#4f46e5;'>" . getprotobynumber(17) . "</strong></p>";
?>`,
    codeExplanation: [
      'getprotobynumber(6) mengembalikan string "tcp".'
    ],
    challenge: {
      instruction: 'Dapatkan nama protokol nomor 17 dengan getprotobynumber(17).',
      starterCode: `<?php
echo "Proto 17: " . getprotobynumber(17);
?>`,
      hint: 'Panggil getprotobynumber(17).'
    },
    quiz: {
      question: 'Apa nama protokol yang dihasilkan oleh pemanggilan `getprotobynumber(17)`?',
      options: [
        'String `"udp"`',
        'String `"tcp"`',
        'String `"http"`',
        'String `"icmp"`'
      ],
      correctIndex: 0,
      explanation: 'Protokol nomor 17 adalah UDP.'
    }
  },

  // 525. GETSERVBYNAME
  {
    id: 'php-ref-net-getservbyname',
    title: 'PHP getservbyname()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 525,
    overview: 'Kuasai fungsi getservbyname(): mendapatkan nomor Port jaringan standar internet berdasarkan nama layanan dan protokol (misal: "http", "tcp" -> 80; "https", "tcp" -> 443; "ssh", "tcp" -> 22).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SERVICE PORTS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 525 / 544</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🚪 Port Layanan Jaringan (getservbyname)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>getservbyname(string $service, string $protocol): int|false</code> mencari port standar layanan dari file konfigurasi <code>/etc/services</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Daftar Port Layanan Standar:</h3>";
echo "<ul>";
echo "<li>HTTP  (tcp): <strong style='color:#059669;'>Port " . getservbyname("http", "tcp") . "</strong></li>";
echo "<li>HTTPS (tcp): <strong style='color:#059669;'>Port " . getservbyname("https", "tcp") . "</strong></li>";
echo "<li>SSH   (tcp): <strong>Port " . getservbyname("ssh", "tcp") . "</strong></li>";
echo "<li>FTP   (tcp): <strong>Port " . getservbyname("ftp", "tcp") . "</strong></li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'getservbyname("https", "tcp") menghasilkan port integer 443.'
    ],
    challenge: {
      instruction: 'Cari port untuk "https" dengan getservbyname("https", "tcp").',
      starterCode: `<?php
echo "Port HTTPS: " . getservbyname("https", "tcp");
?>`,
      hint: 'Panggil getservbyname("https", "tcp").'
    },
    quiz: {
      question: 'Berapakah port yang dikembalikan oleh `getservbyname("http", "tcp")`?',
      options: [
        'Integer `80`',
        'Integer `443`',
        'Integer `8080`',
        'Integer `21`'
      ],
      correctIndex: 0,
      explanation: 'Port standar HTTP adalah 80.'
    }
  },

  // 526. GETSERVBYPORT
  {
    id: 'php-ref-net-getservbyport',
    title: 'PHP getservbyport()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 526,
    overview: 'Kuasai fungsi getservbyport(): mendapatkan nama layanan internet standar berdasarkan nomor port dan protokolnya (misal: 80, "tcp" -> "http"; 443, "tcp" -> "https").',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PORT TO SERVICE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 526 / 544</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Nama Layanan via Nomor Port (getservbyport)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>getservbyport(int $port, string $protocol): string|false</code> mengonversi nomor port menjadi nama service resmi IANA.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Hasil Pengujian getservbyport():</h3>";
echo "<p>Port 80 (tcp)  : <strong style='color:#059669;'>" . getservbyport(80, "tcp") . "</strong></p>";
echo "<p>Port 443 (tcp) : <strong style='color:#059669;'>" . getservbyport(443, "tcp") . "</strong></p>";
echo "<p>Port 53 (udp)  : <strong>" . getservbyport(53, "udp") . "</strong> (domain/DNS)</p>";
?>`,
    codeExplanation: [
      'getservbyport(443, "tcp") mengembalikan string "https".'
    ],
    challenge: {
      instruction: 'Dapatkan nama layanan port 80 dengan getservbyport(80, "tcp").',
      starterCode: `<?php
echo "Port 80: " . getservbyport(80, "tcp");
?>`,
      hint: 'Panggil getservbyport(80, "tcp").'
    },
    quiz: {
      question: 'Nama layanan apakah yang dikembalikan oleh `getservbyport(443, "tcp")`?',
      options: [
        'String `"https"`',
        'String `"http"`',
        'String `"ssl"`',
        'String `"ssh"`'
      ],
      correctIndex: 0,
      explanation: 'Port 443 TCP diasosiasikan dengan layanan HTTPS.'
    }
  },

  // 527. HEADER_REGISTER_CALLBACK
  {
    id: 'php-ref-net-header-register-callback',
    title: 'PHP header_register_callback()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 527,
    overview: 'Kuasai fungsi header_register_callback(): mendaftarkan fungsi handler yang otomatis dieksekusi tepat sesaat sebelum HTTP response header dikirimkan ke browser/klien.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">HEADER INTERCEPTOR</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 527 / 544</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🪝 Callback Sebelum Header Dikirim (header_register_callback)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>header_register_callback(callable $callback): bool</code> menyisipkan handler terakhir untuk memodifikasi atau menyuntikkan header keamanan (CORS, CSP, X-Frame-Options) tepat sebelum output pertama keluar ke browser.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Daftarkan callback penyisip header keamanan
header_register_callback(function() {
    // header("X-Powered-By-Platform: DevGrow LMS");
    // header("X-Content-Type-Options: nosniff");
});

echo "<h3>Hasil Penggunaan header_register_callback():</h3>";
echo "<p style='color:#059669;'>✓ Callback header terdaftar dan akan dieksekusi otomatis tepat sebelum flush buffer output pertama.</p>";
?>`,
    codeExplanation: [
      'header_register_callback() memastikan header keamanan framework selalu terpasang konsisten di setiap respons.'
    ],
    challenge: {
      instruction: 'Pahami fungsi callback header_register_callback.',
      starterCode: `<?php
echo "header_register_callback() dieksekusi sesaat sebelum header dikirim.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Kapan fungsi callback yang didaftarkan pada `header_register_callback()` akan dieksekusi oleh PHP?',
      options: [
        'Tepat sesaat sebelum HTTP response header dikirim keluar ke klien saat terjadi output pertama atau akhir skrip',
        'Saat session dimulai',
        'Sebelum koneksi database',
        'Hanya jika terjadi error 500'
      ],
      correctIndex: 0,
      explanation: 'Callback dieksekusi tepat sebelum header HTTP di-flush keluar ke browser.'
    }
  },

  // 528. HEADER_REMOVE
  {
    id: 'php-ref-net-header-remove',
    title: 'PHP header_remove()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 528,
    overview: 'Kuasai fungsi header_remove(): menghapus header HTTP tertentu (atau seluruh header yang belum terkirim) dari antrean respons PHP sebelum dikirimkan ke klien.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">HEADER SANITIZATION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 528 / 544</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🗑️ Menghapus Header Respons (header_remove)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>header_remove(?string $name = null): void</code> menghapus header bernama <code>$name</code> dari buffer. Praktik keamanan populer: <code>header_remove("X-Powered-By");</code> untuk menyembunyikan informasi versi PHP dari hacker.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Sembunyikan informasi backend untuk security hardening
header_remove("X-Powered-By");

echo "<h3>Hasil Penggunaan header_remove():</h3>";
echo "<p style='color:#059669;'>✓ Header 'X-Powered-By' berhasil dihapus dari antrean respons untuk mencegah Information Disclosure.</p>";
?>`,
    codeExplanation: [
      'header_remove("X-Powered-By") meningkatkan postur keamanan server aplikasi.'
    ],
    challenge: {
      instruction: 'Hapus header X-Powered-By dengan header_remove("X-Powered-By").',
      starterCode: `<?php
header_remove("X-Powered-By");
echo "Header dihapus.";
?>`,
      hint: 'Panggil header_remove("X-Powered-By").'
    },
    quiz: {
      question: 'Apa yang terjadi jika kita memanggil `header_remove()` tanpa memberikan parameter apapun?',
      options: [
        'Seluruh header HTTP yang sebelumnya telah di-set dalam antrean akan dihapus bersih sekaligus',
        'Error fatal',
        'Tidak terjadi apa-apa',
        'Hanya menghapus cookie'
      ],
      correctIndex: 0,
      explanation: 'Memanggil header_remove() tanpa argumen menghapus seluruh header antrean.'
    }
  },

  // 529. HEADER
  {
    id: 'php-ref-net-header',
    title: 'PHP header()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 529,
    overview: 'Kuasai fungsi header(): mengirimkan raw HTTP response header ke klien (Redirect Location, Content-Type JSON, Status Code, Cache-Control, CORS).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">HTTP RESPONSE HEADERS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 529 / 544</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📡 Mengirim Header HTTP (header)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>header(string $header, bool $replace = true, int $response_code = 0): void</code> adalah fungsi utama pembangun API RESTful. <strong>Aturan Emas:</strong> <code>header()</code> WAJIB dipanggil sebelum ada teks/HTML atau spasi kosong yang di-echo ke browser (mencegah error <em>"Headers already sent"</em>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Contoh Header-Header Paling Populer di Backend:</h3>";
$headerExamples = [
    'Content-Type: application/json; charset=utf-8' => 'Menjadikan output sebagai REST API JSON',
    'Location: https://devgrow.id/dashboard'         => 'Melakukan Redirect Halaman (HTTP 302/301)',
    'Cache-Control: no-cache, no-store, must-revalidate' => 'Mencegah caching browser',
    'Access-Control-Allow-Origin: *'                 => 'Mengizinkan request CORS dari frontend domain lain',
];

echo "<table border='1' cellpadding='8' style='border-collapse:collapse; width:100%;'>";
echo "<tr style='background:#e0e7ff;'><th>Sintaks header()</th><th>Kegunaan</th></tr>";
foreach ($headerExamples as $hdr => $desc) {
    echo "<tr><td><code>header(\"$hdr\");</code></td><td>$desc</td></tr>";
}
echo "</table>";
?>`,
    codeExplanation: [
      'header("Content-Type: application/json") memberitahu browser/klien bahwa respons berformat JSON.',
      'header("Location: /url"); exit; mengarahkan pengunjung ke halaman baru.'
    ],
    challenge: {
      instruction: 'Pahami aturan pemanggilan header() sebelum output apa pun.',
      starterCode: `<?php
echo "header('Content-Type: application/json'); wajib sebelum output teks.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Pesan kesalahan fatal apakah yang muncul jika kita memanggil fungsi `header()` setelah ada perintah `echo "hello";` atau spasi sebelum tag `<?php`?',
      options: [
        '`Warning: Cannot modify header information - headers already sent`',
        '`Fatal error: Header not found`',
        '`404 Not Found`',
        'Tidak ada error'
      ],
      correctIndex: 0,
      explanation: 'HTTP mewajibkan header terkirim sebelum body, sehingga output apa pun akan mengunci header.'
    }
  },

  // 530. HEADERS_LIST
  {
    id: 'php-ref-net-headers-list',
    title: 'PHP headers_list()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 530,
    overview: 'Kuasai fungsi headers_list(): mengambil daftar seluruh HTTP response header yang telah disiapkan dan siap dikirimkan ke klien dalam bentuk array string.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">HEADER INSPECTION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 530 / 544</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📋 Daftar Header Siap Kirim (headers_list)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>headers_list(): array</code> mengembalikan array daftar string header yang sedang antre (seperti <code>["X-Powered-By: PHP/8.2.0", "Content-Type: text/html"]</code>) untuk keperluan logging dan testing.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$listHeaders = headers_list();

echo "<h3>Daftar Header Terjadwal dalam Respons:</h3>";
echo "<ul>";
foreach ($listHeaders as $h) {
    echo "<li><code>$h</code></li>";
}
echo "</ul>";
?>`,
    codeExplanation: [
      'headers_list() memungkinkan unit testing memverifikasi keberadaan header tertentu dalam respons.'
    ],
    challenge: {
      instruction: 'Cetak daftar header dengan count(headers_list()).',
      starterCode: `<?php
echo "Total Header Antre: " . count(headers_list());
?>`,
      hint: 'Panggil headers_list().'
    },
    quiz: {
      question: 'Tipe data apakah yang dikembalikan oleh pemanggilan `headers_list()`?',
      options: [
        'Array numerik berisi string header HTTP yang siap dikirimkan',
        'String panjang',
        'Objek JSON',
        'Boolean'
      ],
      correctIndex: 0,
      explanation: 'headers_list mengembalikan array string setiap header yang sudah di-set.'
    }
  },

  // 531. HEADERS_SENT
  {
    id: 'php-ref-net-headers-sent',
    title: 'PHP headers_sent()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 531,
    overview: 'Kuasai fungsi headers_sent(): memeriksa apakah HTTP response header telah terkirim ke klien (dan mendeteksi file serta nomor baris yang memicu pengiriman output prematur).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">GUARD CHECK</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 531 / 544</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛡️ Deteksi Pengiriman Header (headers_sent)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>headers_sent(string &$file = null, int &$line = null): bool</code> mengembalikan <code>true</code> jika header sudah dikirim, serta mengisi <code>$file</code> dan <code>$line</code> dengan file dan nomor baris yang menyebabkan output bocor.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$fileBocor = "";
$barisBocor = 0;

if (!headers_sent($fileBocor, $barisBocor)) {
    echo "<p style='color:#059669;'><strong>✓ Header belum terkirim. Aman untuk memanggil header() atau setcookie().</strong></p>";
} else {
    echo "<p style='color:#dc2626;'>Header sudah terkirim pada file <strong>$fileBocor</strong> baris <strong>$barisBocor</strong></p>";
}
?>`,
    codeExplanation: [
      'headers_sent() adalah guard condition yang sangat berguna sebelum memanggil header("Location: ...") agar tidak memicu E_WARNING.'
    ],
    challenge: {
      instruction: 'Periksa status header dengan if (!headers_sent()).',
      starterCode: `<?php
echo headers_sent() ? "Header Sudah Terkirim" : "Header Belum Terkirim";
?>`,
      hint: 'Panggil headers_sent().'
    },
    quiz: {
      question: 'Informasi apa yang dapat ditangkap melalui 2 parameter referensi `headers_sent(&$file, &$line)`?',
      options: [
        'Nama file dan nomor baris skrip yang pertama kali menghasilkan output teks dan memicu pengiriman header prematur',
        'Waktu eksekusi server',
        'Ukuran RAM yang bocor',
        'IP pengunjung'
      ],
      correctIndex: 0,
      explanation: 'headers_sent mengisi variabel parameter referensi dengan file dan nomor baris pemicu output.'
    }
  },

  // 532. HTTP_RESPONSE_CODE
  {
    id: 'php-ref-net-http-response-code',
    title: 'PHP http_response_code()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 532,
    overview: 'Kuasai fungsi http_response_code(): membaca atau menyetel kode status HTTP respons (200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Server Error).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">HTTP STATUS CODES</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 532 / 544</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎯 Kode Status HTTP Respons (http_response_code)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>http_response_code(int $response_code = 0): int|bool</code> jika dipanggil tanpa parameter mengembalikan status code saat ini. Jika diisi integer (misal: <code>http_response_code(404)</code>), menyetel status code respons HTTP.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Setel status code 200 (OK)
http_response_code(200);

echo "<h3>Kode Status HTTP Terpasang:</h3>";
echo "<p>Status Code: <strong style='color:#059669; font-size:20px;'>" . http_response_code() . " OK</strong></p>";

echo "<h4>Panduan Status Code API Populer:</h4>";
echo "<ul>";
echo "<li><strong>200 OK:</strong> Permintaan sukses</li>";
echo "<li><strong>201 Created:</strong> Data baru berhasil dibuat (POST)</li>";
echo "<li><strong>400 Bad Request:</strong> Validasi data gagal</li>";
echo "<li><strong>401 Unauthorized:</strong> Token JWT tidak valid</li>";
echo "<li><strong>404 Not Found:</strong> Resource tidak ditemukan</li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'http_response_code(404) adalah cara standar dan elegan untuk menyetel HTTP Status Code di REST API.'
    ],
    challenge: {
      instruction: 'Setel response code 201 dengan http_response_code(201).',
      starterCode: `<?php
http_response_code(201);
echo "Status Code: " . http_response_code();
?>`,
      hint: 'Panggil http_response_code(201).'
    },
    quiz: {
      question: 'Kode status HTTP berapakah yang paling tepat disetel dengan `http_response_code(...)` saat endpoint REST API berhasil membuat entitas record database baru?',
      options: [
        '`201` (201 Created)',
        '`200` (OK)',
        '`301` (Moved Permanently)',
        '`204` (No Content)'
      ],
      correctIndex: 0,
      explanation: 'HTTP 201 Created adalah kode status standar RESTful API untuk entitas baru yang berhasil dibuat.'
    }
  },

  // 533. INET_NTOP & INET_PTON
  {
    id: 'php-ref-net-inet-ntop-pton',
    title: 'PHP inet_ntop() & inet_pton()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 533,
    overview: 'Kuasai fungsi inet_pton() & inet_ntop(): mengonversi alamat IP (IPv4 maupun IPv6) dari format string teks terbaca menjadi format biner (packed in_addr) dan sebaliknya untuk penyimpanan database hemat 16-byte.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">IPV4 & IPV6 CONVERSION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 533 / 544</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔄 Konversi Biner IPv4 & IPv6 (inet_pton / inet_ntop)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>inet_pton(string $ip): string|false</code> (Presentation to Numeric) mengubah string IPv4 (4 byte) atau IPv6 (16 byte) ke biner mentah. <code>inet_ntop(string $ip): string|false</code> (Numeric to Presentation) mengonversi kembali biner menjadi string teks terbaca.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$ipv6Asli = "2001:0db8:85a3:0000:0000:8a2e:0370:7334";

// 1. Ubah string IPv6 ke Biner 16-byte (untuk simpan di kolom VARBINARY(16))
$biner = inet_pton($ipv6Asli);

// 2. Ubah kembali dari biner ke teks
$ipv6Pulih = inet_ntop($biner);

echo "<h3>Hasil Pengujian inet_pton() dan inet_ntop():</h3>";
echo "<p>IPv6 String Asli : <strong style='color:#4f46e5;'>$ipv6Asli</strong></p>";
echo "<p>Ukuran Biner     : <strong>" . strlen($biner) . " bytes</strong> (Sangat hemat DB)</p>";
echo "<p>IPv6 Hasil Ntop  : <strong style='color:#059669;'>$ipv6Pulih</strong></p>";
?>`,
    codeExplanation: [
      'inet_pton() mendukung IPv4 (4 byte) dan IPv6 (16 byte) secara transparan.',
      'Sangat optimal untuk menyimpan log audit IP address di database dengan tipe data VARBINARY(16).'
    ],
    challenge: {
      instruction: 'Ubah "127.0.0.1" ke biner dengan inet_pton dan kembalikan dengan inet_ntop.',
      starterCode: `<?php
$bin = inet_pton("127.0.0.1");
echo inet_ntop($bin);
?>`,
      hint: 'Panggil inet_ntop(inet_pton("127.0.0.1")).'
    },
    quiz: {
      question: 'Berapa ukuran byte string biner yang dihasilkan oleh `inet_pton(...)` untuk alamat IPv6?',
      options: [
        'Tepat `16 byte` (128 bit)',
        'Tepat `4 byte` (32 bit)',
        '32 byte',
        '8 byte'
      ],
      correctIndex: 0,
      explanation: 'Alamat IPv6 berukuran 128 bit = 16 byte biner.'
    }
  }
];

module.exports = phpPart48RefNetwork2;
