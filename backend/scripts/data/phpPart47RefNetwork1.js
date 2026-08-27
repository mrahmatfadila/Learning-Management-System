// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (NETWORK PART 1: 512-522)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart47RefNetwork1 = [
  // 512. CHECKDNSRR
  {
    id: 'php-ref-net-checkdnsrr',
    title: 'PHP checkdnsrr() / dns_check_record()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 512,
    overview: 'Kuasai fungsi checkdnsrr() & dns_check_record(): memeriksa keberadaan rekaman DNS (MX, A, AAAA, TXT, CNAME) dari sebuah domain internet untuk validasi email asli.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PHP NETWORK</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 512 / 544</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌐 Validasi Rekaman DNS Domain (checkdnsrr)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>checkdnsrr(string $host, string $type = "MX"): bool</code> mencari rekaman DNS pada nameserver domain target. <code>dns_check_record()</code> adalah alias resmi dari fungsi ini. Sangat ampuh untuk memverifikasi apakah domain email pendaftar benar-benar memiliki server email aktif sebelum mengirim kode OTP/aktivasi.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$domainEmail = "google.com";

// Periksa apakah domain memiliki Mail Exchange (MX) record
$adaMx = checkdnsrr($domainEmail, "MX");

echo "<h3>Hasil Pengujian checkdnsrr():</h3>";
echo "<p>Domain: <strong>$domainEmail</strong></p>";
echo "<p>Pemeriksaan DNS MX Record: <strong style='color:" . ($adaMx ? '#059669' : '#dc2626') . ";'>";
echo $adaMx ? "✓ Valid (Domain memiliki Mail Server)" : "✗ Gagal (Mail Server Tidak Ditemukan)";
echo "</strong></p>";
?>`,
    codeExplanation: [
      'checkdnsrr($domain, "MX") memverifikasi apakah domain target dapat menerima email.',
      'Mendukung tipe rekaman DNS: A, MX, NS, SOA, PTR, CNAME, AAAA, A6, SRV, NAPTR, TXT, ANY.'
    ],
    challenge: {
      instruction: 'Periksa DNS record "A" pada domain google.com.',
      starterCode: `<?php
echo checkdnsrr("google.com", "A") ? "DNS A Ditemukan" : "Tidak Ditemukan";
?>`,
      hint: 'Panggil checkdnsrr("google.com", "A").'
    },
    quiz: {
      question: 'Tipe record DNS default apakah yang diperiksa oleh `checkdnsrr($domain)` jika parameter tipe tidak diisi?',
      options: [
        '`"MX"` (Mail Exchange Record)',
        '`"A"` (IPv4 Address)',
        '`"TXT"`',
        '`"CNAME"`'
      ],
      correctIndex: 0,
      explanation: 'Tipe default parameter kedua checkdnsrr adalah "MX".'
    }
  },

  // 513. CLOSELOG
  {
    id: 'php-ref-net-closelog',
    title: 'PHP closelog()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 513,
    overview: 'Kuasai fungsi closelog(): menutup koneksi socket ke fasilitas logging sistem operasi (Syslog daemon) yang sebelumnya dibuka dengan openlog().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SYSTEM LOGGING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 513 / 544</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📋 Menutup Koneksi Syslog (closelog)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>closelog(): bool</code> melepaskan descriptor logger sistem UNIX/Linux yang dibuka oleh <code>openlog()</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Buka log dengan identitas aplikasi
openlog("DevGrowApp", LOG_PID | LOG_PERROR, LOG_USER);

// Tulis pesan log
syslog(LOG_INFO, "User berhasil login dari IP 192.168.1.50");

// Tutup handle log sistem
$status = closelog();

echo "<h3>Hasil Penggunaan closelog():</h3>";
echo "<p>Status Penutupan Syslog: <strong style='color:#059669;'>" . ($status ? "Sukses Ditutup" : "Gagal") . "</strong></p>";
?>`,
    codeExplanation: [
      'closelog() memutus sambungan ke rsyslog/systemd-journald.'
    ],
    challenge: {
      instruction: 'Panggil closelog() untuk menutup log sistem.',
      starterCode: `<?php
closelog();
echo "Koneksi log ditutup.";
?>`,
      hint: 'Panggil closelog().'
    },
    quiz: {
      question: 'Fungsi apakah yang merupakan pasangan pembuka dari fungsi `closelog()`?',
      options: [
        '`openlog()`',
        '`startlog()`',
        '`initlog()`',
        '`syslog_open()`'
      ],
      correctIndex: 0,
      explanation: 'openlog() membuka koneksi logger sistem dan closelog() menutupnya.'
    }
  },

  // 514. DNS_CHECK_RECORD
  {
    id: 'php-ref-net-dns-check-record',
    title: 'PHP dns_check_record()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 514,
    overview: 'Kuasai fungsi dns_check_record(): alias resmi 100% dari fungsi checkdnsrr() untuk memeriksa eksistensi rekaman DNS domain.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DNS ALIAS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 514 / 544</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌐 Alias Pemeriksaan DNS (dns_check_record)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>dns_check_record(string $host, string $type = "MX"): bool</code> bekerja identik persis dengan <code>checkdnsrr()</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$domain = "github.com";
$isExist = dns_check_record($domain, "A");

echo "<h3>Hasil Penggunaan dns_check_record():</h3>";
echo "<p>Domain: <strong>$domain</strong></p>";
echo "<p>Status Record A: <strong style='color:#059669;'>" . ($isExist ? "Aktif & Terdaftar" : "Tidak Ditemukan") . "</strong></p>";
?>`,
    codeExplanation: [
      'dns_check_record() adalah nama alias modern yang lebih deskriptif untuk checkdnsrr().'
    ],
    challenge: {
      instruction: 'Gunakan dns_check_record("github.com", "A").',
      starterCode: `<?php
echo dns_check_record("github.com", "A") ? "Ada" : "Tidak Ada";
?>`,
      hint: 'Panggil dns_check_record.'
    },
    quiz: {
      question: 'Fungsi utama apakah yang di-alias oleh `dns_check_record()`?',
      options: [
        '`checkdnsrr()`',
        '`gethostbyname()`',
        '`dns_get_record()`',
        '`getmxrr()`'
      ],
      correctIndex: 0,
      explanation: 'dns_check_record adalah alias resmi dari checkdnsrr.'
    }
  },

  // 515. DNS_GET_MX
  {
    id: 'php-ref-net-dns-get-mx',
    title: 'PHP dns_get_mx() / getmxrr()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 515,
    overview: 'Kuasai fungsi dns_get_mx() & getmxrr(): mengambil daftar nama host Mail Exchange (MX) beserta bobot prioritasnya (weights) dari sebuah nama domain.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">MAIL SERVERS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 515 / 544</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📬 Mengambil Server Email Domain (dns_get_mx)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>dns_get_mx(string $hostname, array &$hosts, array &$weights = null): bool</code> mengisi array <code>$hosts</code> dengan alamat server email domain target dan array <code>$weights</code> dengan urutan prioritasnya.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$domain = "google.com";
$mxHosts = [];
$mxWeights = [];

dns_get_mx($domain, $mxHosts, $mxWeights);

echo "<h3>Daftar Server Email (MX Records) $domain:</h3>";
echo "<ul>";
foreach ($mxHosts as $i => $host) {
    $prioritas = $mxWeights[$i] ?? 'N/A';
    echo "<li>Prioritas: <strong>$prioritas</strong> | Server: <strong style='color:#059669;'>$host</strong></li>";
}
echo "</ul>";
?>`,
    codeExplanation: [
      'dns_get_mx() mengisi array by-reference dengan daftar mail server dan bobot prioritasnya.'
    ],
    challenge: {
      instruction: 'Pahami fungsi dns_get_mx($domain, $hosts, $weights).',
      starterCode: `<?php
echo "dns_get_mx mengambil server email dan bobot prioritas.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Bagaimana fungsi `dns_get_mx()` mengembalikan data daftar host dan bobot prioritas?',
      options: [
        'Melalui parameter referensi array (`&$hosts` dan `&$weights`)',
        'Sebagai return value array 2D',
        'Sebagai objek JSON',
        'Mencetak langsung ke layar'
      ],
      correctIndex: 0,
      explanation: 'dns_get_mx menggunakan pass-by-reference untuk mengisi variabel array penampung.'
    }
  },

  // 516. DNS_GET_RECORD
  {
    id: 'php-ref-net-dns-get-record',
    title: 'PHP dns_get_record()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 516,
    overview: 'Kuasai fungsi dns_get_record(): mengambil seluruh informasi rekaman DNS terstruktur (A, AAAA, CNAME, MX, TXT, SOA, NS) beserta TTL dan target IP.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DNS LOOKUP</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 516 / 544</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Inspeksi Rekaman DNS Lengkap (dns_get_record)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>dns_get_record(string $hostname, int $type = DNS_ANY, array &$authoritative_name_servers = null, array &$additional_records = null, bool $raw = false): array|false</code> mengembalikan array asosiatif kaya detail berisi tipe record, host, TTL (Time-to-Live), class, dan IP/target target.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$domain = "php.net";
$records = dns_get_record($domain, DNS_A);

echo "<h3>Rekaman DNS Tipe A (IPv4) untuk $domain:</h3>";
echo "<ul>";
foreach ($records as $rec) {
    echo "<li>Host: <code>{$rec['host']}</code> | IP: <strong style='color:#059669;'>{$rec['ip']}</strong> | TTL: {$rec['ttl']}s</li>";
}
echo "</ul>";
?>`,
    codeExplanation: [
      'dns_get_record($domain, DNS_A) mengembalikan array rekaman A record IPv4 lengkap dengan TTL.'
    ],
    challenge: {
      instruction: 'Ambil DNS record A untuk "php.net" dengan dns_get_record("php.net", DNS_A).',
      starterCode: `<?php
$res = dns_get_record("php.net", DNS_A);
echo "Jumlah Record A: " . count($res);
?>`,
      hint: 'Panggil dns_get_record("php.net", DNS_A).'
    },
    quiz: {
      question: 'Konstanta filter apakah yang digunakan pada parameter kedua `dns_get_record()` untuk mengambil seluruh jenis rekaman DNS yang ada?',
      options: [
        '`DNS_ANY`',
        '`DNS_ALL`',
        '`DNS_FULL`',
        '`DNS_EVERYTHING`'
      ],
      correctIndex: 0,
      explanation: 'DNS_ANY meminta nameserver mengembalikan semua jenis record DNS.'
    }
  },

  // 517. FSOCKOPEN
  {
    id: 'php-ref-net-fsockopen',
    title: 'PHP fsockopen()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 517,
    overview: 'Kuasai fungsi fsockopen(): membuka koneksi socket Internet TCP/IP atau UNIX domain socket tingkat rendah untuk komunikasi protokol mentah (HTTP, SMTP, Whois, WebSocket handshake).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">RAW SOCKETS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 517 / 544</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔌 Buka Socket Jaringan Mentah (fsockopen)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>fsockopen(string $hostname, int $port = -1, int &$error_code = null, string &$error_message = null, ?float $timeout = null): resource|false</code> membuat stream socket. Anda dapat menulis perintah protokol via <code>fwrite()</code> dan membaca respons server via <code>fgets()</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Contoh Request HTTP Manual via Socket TCP fsockopen():</h3>";
$code = <<<PHP
<?php
// Buka koneksi TCP port 80 ke server web
\$fp = fsockopen("example.com", 80, \$errno, \$errstr, 5);

if (!\$fp) {
    echo "Koneksi Error: \$errstr (\$errno)";
} else {
    // Kirim HTTP Request Header Mentah
    \$out = "GET / HTTP/1.1\\r\\n";
    \$out .= "Host: example.com\\r\\n";
    \$out .= "Connection: Close\\r\\n\\r\\n";
    fwrite(\$fp, \$out);

    // Baca Respons Header
    \$header = fgets(\$fp, 128);
    echo "Respons Server: " . htmlspecialchars(\$header);
    fclose(\$fp);
}
?>
PHP;

echo "<pre style='background:#0f172a; color:#38bdf8; padding:12px; border-radius:8px;'>";
echo htmlspecialchars($code);
echo "</pre>";
?>`,
    codeExplanation: [
      'fsockopen() membuka channel socket bidirectional mentah untuk membangun custom client protokol apa pun.'
    ],
    challenge: {
      instruction: 'Pahami fsockopen untuk membuka koneksi TCP.',
      starterCode: `<?php
echo "fsockopen() membuka socket koneksi TCP/IP tingkat rendah.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Tipe data resource apakah yang dikembalikan oleh fungsi `fsockopen()` ketika koneksi socket berhasil dibuka?',
      options: [
        'Stream file pointer resource (dapat dibaca/tulis dengan `fgets()` dan `fwrite()`)',
        'String',
        'Objek Socket',
        'Array bytes'
      ],
      correctIndex: 0,
      explanation: 'fsockopen mengembalikan standard stream pointer resource.'
    }
  },

  // 518. GETHOSTBYADDR
  {
    id: 'php-ref-net-gethostbyaddr',
    title: 'PHP gethostbyaddr()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 518,
    overview: 'Kuasai fungsi gethostbyaddr(): melakukan Reverse DNS Lookup untuk mencari nama domain/hostname internet yang terasosiasi dengan sebuah alamat IP.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">REVERSE DNS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 518 / 544</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔄 Reverse DNS Lookup (gethostbyaddr)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>gethostbyaddr(string $ip): string|false</code> mengonversi alamat IPv4 atau IPv6 menjadi nama host asalnya via rekaman PTR DNS (misal: <code>8.8.8.8</code> -> <code>dns.google</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$ipPublic = "8.8.8.8"; // Public DNS Google
$hostname = gethostbyaddr($ipPublic);

echo "<h3>Hasil Pengujian Reverse DNS (gethostbyaddr):</h3>";
echo "<p>Alamat IP: <code>$ipPublic</code></p>";
echo "<p>Nama Host: <strong style='color:#059669; font-size:18px;'>$hostname</strong> (dns.google)</p>";
?>`,
    codeExplanation: [
      'gethostbyaddr() mengubah IP pengunjung menjadi hostname ISP/organisasi pemilik IP.'
    ],
    challenge: {
      instruction: 'Cari hostname dari IP "127.0.0.1" dengan gethostbyaddr("127.0.0.1").',
      starterCode: `<?php
echo "Host: " . gethostbyaddr("127.0.0.1");
?>`,
      hint: 'Panggil gethostbyaddr("127.0.0.1").'
    },
    quiz: {
      question: 'Jenis query DNS apakah yang dieksekusi di balik layar saat memanggil `gethostbyaddr($ip)`?',
      options: [
        'Reverse DNS Lookup (Pointer / PTR Record)',
        'Address Record (A Record)',
        'Name Server (NS Record)',
        'TXT Record'
      ],
      correctIndex: 0,
      explanation: 'gethostbyaddr melakukan query rekaman PTR reverse DNS.'
    }
  },

  // 519. GETHOSTBYNAME
  {
    id: 'php-ref-net-gethostbyname',
    title: 'PHP gethostbyname()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 519,
    overview: 'Kuasai fungsi gethostbyname(): melakukan Forward DNS Lookup untuk menerjemahkan nama domain/hostname menjadi alamat IPv4 desimal bertitik.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">FORWARD DNS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 519 / 544</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Forward DNS Resolution (gethostbyname)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>gethostbyname(string $hostname): string</code> mengembalikan satu alamat IPv4 dari domain yang diminta. Jika domain tidak ditemukan, fungsi mengembalikan string nama hostname aslinya tanpa perubahan.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$domain = "google.com";
$ip = gethostbyname($domain);

echo "<h3>Hasil Penggunaan gethostbyname():</h3>";
echo "<p>Domain : <strong>$domain</strong></p>";
echo "<p>IPv4   : <strong style='color:#059669; font-size:18px;'>$ip</strong></p>";
?>`,
    codeExplanation: [
      'gethostbyname() menyelesaikan domain ke satu IP address.'
    ],
    challenge: {
      instruction: 'Dapatkan IP dari domain "localhost" dengan gethostbyname("localhost").',
      starterCode: `<?php
echo "IP Local: " . gethostbyname("localhost");
?>`,
      hint: 'Panggil gethostbyname("localhost").'
    },
    quiz: {
      question: 'Apa yang dikembalikan oleh `gethostbyname($domain)` jika domain gagal di-resolve oleh nameserver DNS?',
      options: [
        'String nama `$domain` aslinya tanpa perubahan',
        '`false`',
        '`null`',
        '`"0.0.0.0"`'
      ],
      correctIndex: 0,
      explanation: 'Jika resolusi gagal, gethostbyname mengembalikan string input unmodified.'
    }
  },

  // 520. GETHOSTBYNAMEL
  {
    id: 'php-ref-net-gethostbynamel',
    title: 'PHP gethostbynamel()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 520,
    overview: 'Kuasai fungsi gethostbynamel(): mengambil DAFTAR SELURUH alamat IPv4 (Array of IPs) dari sebuah nama domain yang menggunakan load balancing DNS multi-IP (Round-Robin DNS).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DNS LOAD BALANCING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 520 / 544</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📑 Daftar Lengkap IP Domain (gethostbynamel)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>gethostbynamel(string $hostname): array|false</code> mengembalikan array berisi semua IP address yang terdaftar pada DNS record A domain tersebut.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$domain = "google.com";
$daftarIp = gethostbynamel($domain);

echo "<h3>Daftar Seluruh IP Load Balancing untuk $domain:</h3>";
if ($daftarIp) {
    echo "<ol>";
    foreach ($daftarIp as $ip) {
        echo "<li>IP Pool: <strong style='color:#059669;'>$ip</strong></li>";
    }
    echo "</ol>";
}
?>`,
    codeExplanation: [
      'gethostbynamel() (dengan huruf "l" di akhir = list) mengembalikan array semua IP tujuan.'
    ],
    challenge: {
      instruction: 'Pahami fungsi gethostbynamel() untuk membaca multi-IP.',
      starterCode: `<?php
echo "gethostbynamel() mengembalikan array berisi seluruh IP address domain.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Apa perbedaan antara `gethostbyname()` dan `gethostbynamel()`?',
      options: [
        '`gethostbyname` hanya mengembalikan 1 IP address (string), sedangkan `gethostbynamel` mengembalikan array berisi seluruh IP address domain',
        '`gethostbynamel` hanya untuk IPv6',
        '`gethostbyname` lebih baru',
        'Tidak ada bedanya'
      ],
      correctIndex: 0,
      explanation: 'gethostbyname mengembalikan 1 IP string, sedangkan gethostbynamel (list) mengembalikan array list IP.'
    }
  },

  // 521. GETHOSTNAME
  {
    id: 'php-ref-net-gethostname',
    title: 'PHP gethostname()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 521,
    overview: 'Kuasai fungsi gethostname(): mendapatkan nama host lokal mesin server tempat skrip PHP sedang berjalan (Server Instance Hostname identifier di cloud cluster).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">LOCAL HOSTNAME</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 521 / 544</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🖥️ Nama Mesin Server Lokal (gethostname)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>gethostname(): string|false</code> mengembalikan hostname mesin lokal (misal: <code>"web-server-node-03"</code>). Sangat krusial pada arsitektur microservices dan Kubernetes Pod untuk menandai pod mana yang memproses request di header HTTP/log audit.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$serverHost = gethostname();

echo "<h3>Hasil Penggunaan gethostname():</h3>";
echo "<p>Nama Node Server Lokal: <strong style='color:#059669; font-size:18px;'>$serverHost</strong></p>";
echo "<p style='color:green;'>✓ Bermanfaat untuk tracking server origin pada arsitektur Load Balancer Nginx cluster.</p>";
?>`,
    codeExplanation: [
      'gethostname() membaca nama host sistem operasi secara instan.'
    ],
    challenge: {
      instruction: 'Cetak nama host lokal dengan gethostname().',
      starterCode: `<?php
echo "Hostname: " . gethostname();
?>`,
      hint: 'Panggil gethostname().'
    },
    quiz: {
      question: 'Kapan `gethostname()` sangat bermanfaat dalam arsitektur sistem backend modern?',
      options: [
        'Untuk melacak dan mengidentifikasi instance container / node server cluster Kubernetes yang melayani request pengguna',
        'Untuk mengubah password root',
        'Untuk mengukur kecepatan internet',
        'Hanya saat koneksi database mati'
      ],
      correctIndex: 0,
      explanation: 'gethostname mengidentifikasi identitas nama node server lokal di cluster.'
    }
  },

  // 522. GETMXRR
  {
    id: 'php-ref-net-getmxrr',
    title: 'PHP getmxrr()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 522,
    overview: 'Kuasai fungsi getmxrr(): alias historis fungsi dns_get_mx() untuk mengambil rekaman MX server email.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">MX ALIAS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 522 / 544</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📬 Rekaman MX Server Email (getmxrr)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>getmxrr(string $hostname, array &$hosts, array &$weights = null): bool</code> adalah fungsi alias dari <code>dns_get_mx()</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$domain = "php.net";
$hosts = [];
$weights = [];

if (getmxrr($domain, $hosts, $weights)) {
    echo "<h3>Hasil Penggunaan getmxrr($domain):</h3>";
    echo "<p>Primary Mail Server: <strong style='color:#059669;'>{$hosts[0]}</strong> (Prioritas: {$weights[0]})</p>";
}
?>`,
    codeExplanation: [
      'getmxrr() dan dns_get_mx() berfungsi identik 100%.'
    ],
    challenge: {
      instruction: 'Pahami fungsi getmxrr.',
      starterCode: `<?php
echo "getmxrr() adalah alias dari dns_get_mx().";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Fungsi manakah yang identik 100% dengan `getmxrr()` di PHP?',
      options: [
        '`dns_get_mx()`',
        '`dns_get_record()`',
        '`gethostbyname()`',
        '`checkdnsrr()`'
      ],
      correctIndex: 0,
      explanation: 'getmxrr adalah nama alias bawaan untuk dns_get_mx.'
    }
  }
];

module.exports = phpPart47RefNetwork1;
