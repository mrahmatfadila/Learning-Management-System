// ==========================================================
// DATA MATERI PHP: BAB 7 - PHP AJAX (ASYNCHRONOUS JAVASCRIPT AND XML/JSON)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart9Ajax = [
  // 1. AJAX INTRO
  {
    id: 'php-ajax-intro',
    title: 'AJAX Intro',
    chapter: 'PHP - AJAX',
    chapterId: 'php-chap-ajax',
    order: 1,
    overview: 'Pengantar konsep AJAX (Asynchronous JavaScript and XML): pahami pertukaran data latar belakang tanpa reload halaman (No Page Refresh), arsitektur Client-Server Asynchronous, XMLHttpRequest vs Modern Fetch API.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PHP - AJAX</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 01 / 06</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚡ Pengenalan AJAX & Interaksi Asinkron</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            AJAX bukanlah bahasa pemrograman baru, melainkan teknik memanfaatkan JavaScript untuk berkomunikasi dengan server backend PHP di latar belakang (background) dan memperbarui sebagian tampilan halaman <strong>tanpa perlu me-reload seluruh halaman browser</strong>.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h4 class="font-bold text-purple-600 dark:text-purple-400 mb-1">Web Tradisional (Synchronous)</h4>
            <p class="text-slate-600 dark:text-slate-400">Setiap klik link atau submit form menyebabkan layar putih sejenak dan me-reload seluruh 100% halaman dari server.</p>
          </div>
          <div class="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/50">
            <h4 class="font-bold text-emerald-700 dark:text-emerald-400 mb-1">Web Modern AJAX (Asynchronous)</h4>
            <p class="text-slate-600 dark:text-slate-400">Data dikirim dan diterima di latar belakang secara senyap. Pengalaman pengguna (UX) terasa instan seperti aplikasi desktop.</p>
          </div>
        </div>
      </div>
    `,
    code: `<?php
// Backend Endpoint PHP yang merespons permintaan AJAX
if (isset($_GET['action']) && $_GET['action'] === 'get_server_time') {
    header('Content-Type: application/json');
    echo json_encode([
        "status" => "success",
        "waktu_server" => date("d F Y, H:i:s") . " WIB",
        "timestamp" => time()
    ]);
    exit;
}
?>

<div style="background: #f8fafc; border: 1px solid #cbd5e1; padding: 20px; border-radius: 12px; max-width: 450px;">
  <h4 style="margin-top: 0; color: #1e293b;">Live Waktu Server (Tanpa Reload Halaman):</h4>
  <p id="hasilWaktu" style="font-size: 16px; font-weight: bold; color: #4f46e5;">Klik tombol di bawah...</p>
  
  <button onclick="ambilWaktuServer()" style="background: #4f46e5; color: white; border: none; padding: 9px 18px; border-radius: 8px; font-weight: bold; cursor: pointer;">
    🔄 Perbarui Waktu via AJAX
  </button>
</div>

<script>
function ambilWaktuServer() {
    document.getElementById('hasilWaktu').innerText = "Sedang mengambil data dari PHP...";
    
    // Modern JavaScript Fetch API (AJAX)
    fetch('?action=get_server_time')
        .then(response => response.json())
        .then(data => {
            document.getElementById('hasilWaktu').innerText = "⏱️ " + data.waktu_server;
        })
        .catch(err => {
            document.getElementById('hasilWaktu').innerText = "Gagal memuat waktu.";
        });
}
</script>`,
    codeExplanation: [
      'JavaScript fetch(\'?action=get_server_time\') mengirim HTTP request asinkron ke server PHP di latar belakang.',
      'PHP mengembalikan respons berformat JSON dengan header Content-Type: application/json.',
      'Elemen <p id="hasilWaktu"> diperbarui secara instan oleh JavaScript tanpa merefresh halaman browser sama sekali.'
    ],
    challenge: {
      instruction: 'Pahami bahwa AJAX menggunakan Fetch API atau XMLHttpRequest untuk mengirim request latar belakang.',
      starterCode: `<?php
echo "AJAX memungkinkan pertukaran data latar belakang tanpa refresh halaman.";
?>`,
      hint: 'Klik RUN untuk mencoba interaksi AJAX.'
    },
    quiz: {
      question: 'Apa kepanjangan dan manfaat utama dari teknologi AJAX pada aplikasi web?',
      options: [
        'Asynchronous JavaScript and XML: mengirim & menerima data di latar belakang tanpa reload halaman',
        'Automatic Java and Xenon: membuat game 3D',
        'Advanced JSON and XHTML: bahasa pengganti CSS',
        'Apache JavaScript and XML: compiler PHP'
      ],
      correctIndex: 0,
      explanation: 'AJAX (Asynchronous JavaScript and XML) memungkinkan halaman web memperbarui data secara asinkron tanpa harus memuat ulang seluruh halaman.'
    }
  },

  // 2. AJAX PHP
  {
    id: 'php-ajax-php',
    title: 'AJAX PHP',
    chapter: 'PHP - AJAX',
    chapterId: 'php-chap-ajax',
    order: 2,
    overview: 'Pelajari integrasi langsung antara JavaScript Frontend dan PHP Backend: pengiriman parameter query, pemrosesan logika server-side, dan pengembalian respons teks/HTML dinamis.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">AJAX & PHP</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 02 / 06</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔄 Komunikasi Dua Arah JS & PHP</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            JavaScript menangkap input pengguna pada event <code>onkeyup</code> atau <code>onchange</code>, mengirimkannya ke file skrip PHP, dan mencetak respon kembalian PHP langsung ke elemen DOM yang dituju.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Endpoint AJAX PHP
if (isset($_GET['nama_input'])) {
    $nama = htmlspecialchars(trim($_GET['nama_input']));
    if (empty($nama)) {
        echo "<em>Silakan ketik nama Anda di atas...</em>";
    } else {
        echo "<span style='color: #059669; font-weight: bold;'>👋 Halo, $nama! Selamat datang di DevGrow LMS Platform.</span>";
    }
    exit;
}
?>

<div style="background: #f8fafc; border: 1px solid #cbd5e1; padding: 20px; border-radius: 12px; max-width: 450px;">
  <label style="font-size: 12px; font-weight: bold; display: block; margin-bottom: 6px;">Ketik Nama Lengkap:</label>
  <input type="text" id="inputNama" onkeyup="kirimNama(this.value)" placeholder="Ketik sesuatu..." style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; margin-bottom: 12px;" />
  
  <div id="responPhp" style="padding: 10px; background: #e0e7ff; border-radius: 6px; font-size: 13px;">
    <em>Silakan ketik nama Anda di atas...</em>
  </div>
</div>

<script>
function kirimNama(str) {
    fetch('?nama_input=' + encodeURIComponent(str))
        .then(res => res.text())
        .then(html => {
            document.getElementById('responPhp').innerHTML = html;
        });
}
</script>`,
    codeExplanation: [
      'Event onkeyup="kirimNama(this.value)" memicu request AJAX setiap kali jari pengguna mengetik atau melepaskan tombol keyboard.',
      'encodeURIComponent(str) mengamankan karakter khusus saat dikirimkan melalui URL parameter.',
      'Skrip PHP merespons dengan potongan HTML yang langsung diinjeksikan ke innerHTML div responPhp.'
    ],
    challenge: {
      instruction: 'Ketahui penggunaan encodeURIComponent() saat mengirim string melalui query parameter.',
      starterCode: `<?php
echo "Gunakan encodeURIComponent() di JavaScript untuk mengamankan karakter URL.";
?>`,
      hint: 'Klik RUN untuk mencoba komunikasi dua arah JS-PHP.'
    },
    quiz: {
      question: 'Event JavaScript apa yang sering digunakan pada elemen input teks untuk mengirimkan request AJAX secara realtime saat pengguna sedang mengetik?',
      options: [
        'onkeyup / oninput',
        'onload',
        'onunload',
        'ondblclick'
      ],
      correctIndex: 0,
      explanation: 'onkeyup atau oninput dipicu setiap kali nilai kolom teks berubah akibat ketikan pengguna, sangat ideal untuk realtime AJAX.'
    }
  },

  // 3. AJAX DATABASE
  {
    id: 'php-ajax-database',
    title: 'AJAX Database',
    chapter: 'PHP - AJAX',
    chapterId: 'php-chap-ajax',
    order: 3,
    overview: 'Kuasai integrasi AJAX dengan Database MySQL/PostgreSQL: pemilihan dropdown dinamis (Dynamic Select Dropdown), query data berdasarkan ID tanpa reload, dan rendering tabel data realtime.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">AJAX DATABASE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 03 / 06</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🗄️ Mengambil Data Database Realtime</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Pola ini digunakan saat pengguna memilih kategori pada dropdown (misal: Provinsi), lalu sistem secara otomatis memuat daftar Kota dari database ke dropdown kedua tanpa memuat ulang seluruh halaman.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Endpoint AJAX Pengambilan Detail Modul dari Database
if (isset($_GET['modul_id'])) {
    $id = $_GET['modul_id'];
    
    $database = [
        "html" => ["judul" => "HTML5 Fundamentals", "tingkat" => "Pemula", "durasi" => "15 Jam", "materi" => 42],
        "css" => ["judul" => "Modern Responsive CSS & Flexbox", "tingkat" => "Menengah", "durasi" => "20 Jam", "materi" => 55],
        "php" => ["judul" => "PHP 8.x Enterprise Architecture", "tingkat" => "Mahir", "durasi" => "35 Jam", "materi" => 107]
    ];
    
    if (isset($database[$id])) {
        $m = $database[$id];
        echo "<div style='padding: 12px; background: #ecfdf5; border: 1px solid #10b981; border-radius: 8px;'>";
        echo "<h4 style='margin: 0 0 5px 0; color: #065f46;'>" . $m['judul'] . "</h4>";
        echo "<p style='margin: 0; font-size: 12px;'>Tingkat: <strong>" . $m['tingkat'] . "</strong> | Total: <strong>" . $m['materi'] . " Pelajaran</strong> (" . $m['durasi'] . ")</p>";
        echo "</div>";
    } else {
        echo "<p style='color: gray;'>Pilih salah satu kursus dari dropdown di atas.</p>";
    }
    exit;
}
?>

<div style="background: #f8fafc; border: 1px solid #cbd5e1; padding: 20px; border-radius: 12px; max-width: 450px;">
  <label style="font-size: 12px; font-weight: bold; display: block; margin-bottom: 6px;">Pilih Kursus Pembelajaran:</label>
  <select onchange="muatDetailModul(this.value)" style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 6px; margin-bottom: 15px;">
    <option value="">-- Pilih Kursus --</option>
    <option value="html">HTML5 Fundamentals</option>
    <option value="css">Modern CSS & Styling</option>
    <option value="php">PHP 8.x Enterprise</option>
  </select>

  <div id="kontainerDetail">
    <p style='color: gray;'>Pilih salah satu kursus dari dropdown di atas.</p>
  </div>
</div>

<script>
function muatDetailModul(id) {
    if (!id) {
        document.getElementById('kontainerDetail').innerHTML = "<p style='color: gray;'>Pilih salah satu kursus dari dropdown di atas.</p>";
        return;
    }
    fetch('?modul_id=' + id)
        .then(res => res.text())
        .then(html => {
            document.getElementById('kontainerDetail').innerHTML = html;
        });
}
</script>`,
    codeExplanation: [
      'Dropdown onchange="muatDetailModul(this.value)" mengirim ID modul yang dipilih ke backend PHP.',
      'PHP mengeksekusi query database berdasarkan ID tersebut dan mengembalikan data spesifik.',
      'Sangat responsif dan menghemat kuota data karena hanya teks data yang ditransmisikan.'
    ],
    challenge: {
      instruction: 'Pahami pola penanganan event onchange pada elemen <select> untuk memicu request AJAX database.',
      starterCode: `<?php
echo "Event onchange pada <select> sangat ideal untuk dropdown berjenjang (Cascading Dropdowns).";
?>`,
      hint: 'Klik RUN untuk mencoba dropdown dinamis.'
    },
    quiz: {
      question: 'Apa keuntungan utama penggunaan AJAX saat mengambil data dari database untuk ditampilkan ke halaman web?',
      options: [
        'Halaman tidak perlu di-reload total sehingga transfer data jauh lebih hemat bandwidth dan interaksi terasa sangat cepat',
        'Database otomatis terenkripsi SSL',
        'Menghilangkan kebutuhan tabel MySQL',
        'Mempercepat kecepatan harddisk server'
      ],
      correctIndex: 0,
      explanation: 'AJAX hanya mentransfer data spesifik yang dibutuhkan alih-alih seluruh struktur halaman HTML, sehingga sangat hemat bandwidth dan cepat.'
    }
  },

  // 4. AJAX XML
  {
    id: 'php-ajax-xml',
    title: 'AJAX XML',
    chapter: 'PHP - AJAX',
    chapterId: 'php-chap-ajax',
    order: 4,
    overview: 'Pelajari pertukaran data format XML melalui AJAX: header Content-Type: text/xml, responseXML pada XMLHttpRequest, dan parsing tag XML di sisi browser menggunakan JavaScript DOM methods.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">AJAX XML</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 04 / 06</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📄 Mengirim & Mengurai XML via AJAX</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Saat berinteraksi dengan API perbankan atau sistem SOAP lama, backend PHP mengirimkan respons berupa dokumen XML dengan header <code>Content-Type: text/xml</code> yang kemudian diparsing oleh JavaScript menggunakan <code>getElementsByTagName()</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Endpoint AJAX Penghasil XML
if (isset($_GET['get_xml'])) {
    header("Content-Type: text/xml; charset=utf-8");
    echo '<?xml version="1.0" encoding="UTF-8"?>';
    echo '<katalog>';
    echo '  <item><nama>PHP Mastery</nama><kategori>Backend</kategori></item>';
    echo '  <item><nama>React Next.js</nama><kategori>Frontend</kategori></item>';
    echo '</katalog>';
    exit;
}
?>

<div style="background: #f8fafc; border: 1px solid #cbd5e1; padding: 20px; border-radius: 12px; max-width: 450px;">
  <button onclick="muatDataXml()" style="background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; font-weight: bold; cursor: pointer;">
    📥 Ambil & Parse XML via AJAX
  </button>
  <ul id="daftarXml" style="margin-top: 15px; font-size: 13px;"></ul>
</div>

<script>
function muatDataXml() {
    fetch('?get_xml=1')
        .then(res => res.text())
        .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
        .then(xml => {
            const items = xml.getElementsByTagName("item");
            let html = "";
            for (let i = 0; i < items.length; i++) {
                const nama = items[i].getElementsByTagName("nama")[0].childNodes[0].nodeValue;
                const kat = items[i].getElementsByTagName("kategori")[0].childNodes[0].nodeValue;
                html += "<li><strong>" + nama + "</strong> (" + kat + ")</li>";
            }
            document.getElementById('daftarXml').innerHTML = html;
        });
}
</script>`,
    codeExplanation: [
      'Backend PHP wajib menyetel header("Content-Type: text/xml") agar browser mengenalinya sebagai XML.',
      'window.DOMParser() mem-parsing string XML di browser menjadi pohon XML DOM yang dapat dinavigasi.'
    ],
    challenge: {
      instruction: 'Pahami fungsi DOMParser() di JavaScript browser untuk mengonversi string XML menjadi dokumen XML.',
      starterCode: `<?php
echo "DOMParser menguraikan string XML menjadi objek XML DOM yang dapat ditelusuri.";
?>`,
      hint: 'Klik RUN untuk mencoba XML AJAX.'
    },
    quiz: {
      question: 'Header HTTP apa yang wajib dikirim oleh skrip PHP saat merespons permintaan AJAX yang mengembalikan data format XML?',
      options: [
        'header("Content-Type: text/xml; charset=utf-8")',
        'header("Content-Type: text/html")',
        'header("Content-Type: application/json")',
        'header("Type: XML")'
      ],
      correctIndex: 0,
      explanation: 'header("Content-Type: text/xml") memberitahu browser bahwa payload respons adalah dokumen XML yang valid.'
    }
  },

  // 5. AJAX LIVE SEARCH
  {
    id: 'php-ajax-live-search',
    title: 'AJAX Live Search',
    chapter: 'PHP - AJAX',
    chapterId: 'php-chap-ajax',
    order: 5,
    overview: 'Bangun fitur pencarian langsung (Live Search Autocomplete) mirip Google Search: pencarian realtime saat mengetik, filter array/database di PHP, dan rendering dropdown saran pencarian.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">LIVE SEARCH</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 05 / 06</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Fitur Pencarian Langsung (Live Search)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Fitur Live Search menampilkan kotak saran (suggestion box) seketika saat pengguna mengetik huruf di kolom pencarian tanpa perlu menekan tombol submit atau Enter.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Dataset Judul Materi Kurikulum DevGrow
$katalogMateri = [
    "PHP Syntax & Variables",
    "PHP Functions & Named Arguments",
    "PHP Loops (For, While, Foreach)",
    "PHP Arrays & Associative Arrays",
    "PHP OOP Classes & Objects",
    "PHP OOP Inheritance & Interfaces",
    "PHP MySQL Database & PDO",
    "PHP MySQL Prepared Statements",
    "PHP XML DOM & SimpleXML",
    "PHP AJAX Live Search"
];

// Endpoint Pencarian AJAX
if (isset($_GET['query'])) {
    $q = strtolower(trim($_GET['query']));
    $saran = [];
    
    if (strlen($q) > 0) {
        foreach ($katalogMateri as $judul) {
            if (strpos(strtolower($judul), $q) !== false) {
                $saran[] = $judul;
            }
        }
    }
    
    if (empty($saran)) {
        echo "<div style='color: gray; padding: 6px;'>Tidak ada materi yang cocok...</div>";
    } else {
        echo "<ul style='margin: 0; padding-left: 20px;'>";
        foreach ($saran as $item) {
            echo "<li style='padding: 3px 0; color: #1e293b;'><strong>$item</strong></li>";
        }
        echo "</ul>";
    }
    exit;
}
?>

<div style="background: #f8fafc; border: 1px solid #cbd5e1; padding: 20px; border-radius: 12px; max-width: 480px;">
  <label style="font-size: 12px; font-weight: bold; display: block; margin-bottom: 6px;">Cari Materi Pelajaran (Live Search):</label>
  <input type="text" onkeyup="cariMateriLive(this.value)" placeholder="Ketik misal: 'oop', 'mysql', 'arrays'..." style="width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 8px; box-sizing: border-box;" />

  <div id="hasilPencarian" style="margin-top: 10px; background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 10px; font-size: 13px;">
    <em>Ketik kata kunci untuk melihat saran pencarian...</em>
  </div>
</div>

<script>
function cariMateriLive(keyword) {
    if (keyword.length === 0) {
        document.getElementById('hasilPencarian').innerHTML = "<em>Ketik kata kunci untuk melihat saran pencarian...</em>";
        return;
    }
    fetch('?query=' + encodeURIComponent(keyword))
        .then(res => res.text())
        .then(html => {
            document.getElementById('hasilPencarian').innerHTML = html;
        });
}
</script>`,
    codeExplanation: [
      'strpos(strtolower($judul), $q) melakukan pencocokan teks parsial (sub-string matching) tanpa membedakan huruf besar/kecil.',
      'Saran pencarian langsung diperbarui di DOM #hasilPencarian setiap kali ada penekanan tombol keyboard.',
      'Pola standar untuk pencarian produk toko online dan filter arsip materi belajar.'
    ],
    challenge: {
      instruction: 'Coba ketik kata "oop" atau "mysql" pada input di atas untuk melihat respon instan.',
      starterCode: `<?php
echo "Live search memberikan pengalaman UX yang sangat cepat dan interaktif.";
?>`,
      hint: 'Klik RUN untuk mencoba fitur Live Search interaktif.'
    },
    quiz: {
      question: 'Fungsi string PHP apakah yang digunakan untuk mencari posisi keberadaan kata kunci pencarian di dalam judul materi?',
      options: [
        'strpos() (atau stripos() untuk case-insensitive)',
        'strsearch()',
        'find_text()',
        'text_contains()'
      ],
      correctIndex: 0,
      explanation: 'strpos() mencari posisi pertama kemunculan string di dalam string lainnya.'
    }
  },

  // 6. AJAX POLL
  {
    id: 'php-ajax-poll',
    title: 'AJAX Poll',
    chapter: 'PHP - AJAX',
    chapterId: 'php-chap-ajax',
    order: 6,
    overview: 'Bangun aplikasi Polling / Voting interaktif berbasis AJAX: pemungutan suara instan tanpa refresh, kalkulasi persentase suara, dan visualisasi bar persentase hasil voting realtime.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">AJAX POLLING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 06 / 06</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📊 Aplikasi Polling & Voting Interaktif</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Aplikasi Polling AJAX memungkinkan pengguna memberikan suara (voting) dan <strong>melihat persentase grafik hasil suara langsung berubah</strong> di depan mata mereka secara realtime tanpa reload halaman.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Endpoint AJAX Penanganan Suara Voting
if (isset($_GET['vote'])) {
    $pilihan = $_GET['vote'];
    
    // Simulasi total suara
    $suaraPhp = 185 + ($pilihan === 'php' ? 1 : 0);
    $suaraJs = 140 + ($pilihan === 'js' ? 1 : 0);
    $total = $suaraPhp + $suaraJs;
    
    $persenPhp = round(($suaraPhp / $total) * 100);
    $persenJs = round(($suaraJs / $total) * 100);
    
    echo "<div style='padding: 10px;'>";
    echo "<h4 style='margin: 0 0 10px 0; color: #065f46;'>🎉 Suara Anda Berhasil Dicatat!</h4>";
    
    echo "<div style='margin-bottom: 8px;'>";
    echo "<strong>PHP 8.x:</strong> $suaraPhp Suara ($persenPhp%)";
    echo "<div style='background: #e2e8f0; border-radius: 6px; overflow: hidden; height: 12px; margin-top: 3px;'>";
    echo "<div style='background: #4f46e5; width: {$persenPhp}%; height: 100%;'></div>";
    echo "</div>";
    echo "</div>";

    echo "<div>";
    echo "<strong>JavaScript:</strong> $suaraJs Suara ($persenJs%)";
    echo "<div style='background: #e2e8f0; border-radius: 6px; overflow: hidden; height: 12px; margin-top: 3px;'>";
    echo "<div style='background: #f59e0b; width: {$persenJs}%; height: 100%;'></div>";
    echo "</div>";
    echo "</div>";

    echo "<p style='font-size: 11px; color: gray; margin-top: 10px;'>Total Partisipan: <strong>$total Suara</strong></p>";
    echo "</div>";
    exit;
}
?>

<div style="background: #f8fafc; border: 1px solid #cbd5e1; padding: 20px; border-radius: 12px; max-width: 450px;">
  <h3 style="margin-top: 0; color: #1e293b;">🗳️ Polling: Bahasa Favorit Anda?</h3>
  
  <div id="kotakPoll">
    <label style="display: block; margin-bottom: 8px; cursor: pointer;">
      <input type="radio" name="pilihan" value="php" onclick="kirimVote('php')" /> 🐘 PHP 8.x (Modern Backend)
    </label>
    <label style="display: block; margin-bottom: 12px; cursor: pointer;">
      <input type="radio" name="pilihan" value="js" onclick="kirimVote('js')" /> ⚡ JavaScript (Full-Stack & React)
    </label>
  </div>
</div>

<script>
function kirimVote(val) {
    document.getElementById('kotakPoll').innerHTML = "<p>Sedang merekam suara Anda...</p>";
    fetch('?vote=' + val)
        .then(res => res.text())
        .then(html => {
            document.getElementById('kotakPoll').innerHTML = html;
        });
}
</script>`,
    codeExplanation: [
      'Pengguna mengklik radio button yang memicu fungsi kirimVote("php").',
      'Backend PHP mencatat penambahan suara, menghitung persentase matematika round(($suara / $total) * 100), dan merender progress bar visual.',
      'Pengalaman pengguna terasa sangat modern dan interaktif.'
    ],
    challenge: {
      instruction: 'Klik salah satu opsi voting di preview untuk melihat grafik persentase suara ter-update.',
      starterCode: `<?php
// Silakan berikan voting pada panel preview interaktif di atas!
?>`,
      hint: 'Klik RUN untuk merender aplikasi Polling interaktif.'
    },
    quiz: {
      question: 'Bagaimana alur kerja aplikasi Polling berbasis AJAX saat pengguna memilih salah satu opsi?',
      options: [
        'JavaScript menangkap klik opsi, mengirim vote ke PHP di latar belakang, dan langsung memperbarui grafik persentase tanpa reload halaman',
        'Browser harus ditutup dan dibuka kembali',
        'Database di-reset ke awal',
        'Halaman me-refresh 3 kali'
      ],
      correctIndex: 0,
      explanation: 'AJAX merekam suara ke backend server dan langsung merender kembali persentase visual pada elemen kontainer DOM tanpa memuat ulang halaman.'
    }
  }
];

module.exports = phpPart9Ajax;
