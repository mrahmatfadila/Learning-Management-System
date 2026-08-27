// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (EXCEPTION METHODS)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart20RefException = [
  // 166. EXCEPTION() CONSTRUCTOR
  {
    id: 'php-ref-exception-constructor',
    title: 'PHP Exception() Constructor',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 166,
    overview: 'Kuasai konstruktor new Exception($message, $code, $previous): membuat objek eksepsi kustom dengan pesan error deskriptif, kode status numerik, dan exception chaining.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">EXCEPTION REFERENCE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 166 / 173</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">💥 Konstruktor new Exception()</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>new Exception($message = "", $code = 0, ?Throwable $previous = null)</code> adalah fondasi utama penanganan kesalahan berorientasi objek di PHP. Memungkinkan pembuatan objek eksepsi dengan pesan kesalahan deskriptif, kode error HTTP (misal: 404/403/500), serta merantai eksepsi awal (Exception Chaining).
          </p>
        </div>
      </div>
    `,
    code: `<?php
function prosesPembayaran($saldo, $totalBelanja) {
    if ($totalBelanja > $saldo) {
        // Buat dan lempar objek Exception baru
        throw new Exception("Saldo tidak mencukupi untuk transaksi ini!", 402);
    }
    return "Pembayaran berhasil!";
}

try {
    echo prosesPembayaran(50000, 120000);
} catch (Exception $e) {
    echo "<h3>Terjadi Kesalahan Transaksi:</h3>";
    echo "<p>Pesan: <strong style='color: red;'>" . $e->getMessage() . "</strong></p>";
    echo "<p>Kode Status: <strong>" . $e->getCode() . "</strong></p>";
}
?>`,
    codeExplanation: [
      'new Exception("pesan", kode) menginisialisasi objek pembawa informasi error.',
      'throw melempar eksepsi keluar dari alur normal untuk ditangkap oleh blok catch.'
    ],
    challenge: {
      instruction: 'Buat Exception dengan pesan "Akses ditolak" dan kode 403.',
      starterCode: `<?php
try {
    throw new Exception("Akses ditolak", 403);
} catch (Exception $e) {
    echo $e->getMessage() . " (Kode: " . $e->getCode() . ")";
}
?>`,
      hint: 'Gunakan throw new Exception("Akses ditolak", 403);.'
    },
    quiz: {
      question: 'Parameter ketiga opsional pada konstruktor new Exception($message, $code, $previous) berguna untuk apa?',
      options: [
        'Exception Chaining (merantai eksepsi penyebab sebelumnya yang memicu error ini)',
        'Menyimpan nama database',
        'Menghitung waktu eksekusi',
        'Mengubah warna teks'
      ],
      correctIndex: 0,
      explanation: '$previous memungkinkan kita menyimpan riwayat eksepsi akar penyebab terdahulu (Exception Chaining).'
    }
  },

  // 167. GETCODE()
  {
    id: 'php-ref-getcode',
    title: 'PHP getCode()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 167,
    overview: 'Method $e->getCode(): mengembalikan kode status error (integer atau string) yang diberikan saat objek Exception dibuat.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">GET CODE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 167 / 173</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔢 Mengambil Kode Status Error ($e->getCode)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$e->getCode()</code> mengembalikan nilai numerik status error. Sangat lazim digunakan dalam arsitektur REST API untuk memetakan error internal ke HTTP Response Status Code (seperti <code>404 Not Found</code> atau <code>500 Server Error</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
function cariUser($id) {
    if ($id !== 1) {
        throw new Exception("Pengguna dengan ID $id tidak ditemukan!", 404);
    }
    return ["id" => 1, "name" => "Budi"];
}

try {
    cariUser(99);
} catch (Exception $e) {
    $httpCode = $e->getCode();
    http_response_code($httpCode);
    
    echo "<h3>Respon API Gateway:</h3>";
    echo "<p>HTTP Status: <strong style='color: #dc2626;'>$httpCode Not Found</strong></p>";
    echo "<p>Keterangan: <em>" . $e->getMessage() . "</em></p>";
}
?>`,
    codeExplanation: [
      '$e->getCode() membaca kode 404 yang disematkan saat throw new Exception().',
      'Memudahkan kontrol alur logika berdasarkan kategori kode kesalahan.'
    ],
    challenge: {
      instruction: 'Ambil kode error dari objek exception yang ditangkap.',
      starterCode: `<?php
try {
    throw new Exception("Error DB", 500);
} catch (Exception $e) {
    echo "Error Code: " . $e->getCode();
}
?>`,
      hint: 'Panggil $e->getCode().'
    },
    quiz: {
      question: 'Berapakah nilai default kembalian dari $e->getCode() jika parameter code tidak diisi saat membuat Exception?',
      options: [
        '0 (angka nol)',
        '500',
        '404',
        'null'
      ],
      correctIndex: 0,
      explanation: 'Nilai default untuk parameter kode error pada Exception adalah integer 0.'
    }
  },

  // 168. GETFILE()
  {
    id: 'php-ref-getfile',
    title: 'PHP getFile()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 168,
    overview: 'Method $e->getFile(): mengembalikan nama path file tempat eksepsi tersebut pertama kali dilemparkan (thrown).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">GET FILE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 168 / 173</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📄 Mendeteksi Lokasi File Error ($e->getFile)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$e->getFile()</code> mengembalikan string path absolut dari file sumber PHP tempat eksepsi terjadi. Sangat berguna untuk dicatat ke dalam log file server guna mempercepat proses investigasi bug.
          </p>
        </div>
      </div>
    `,
    code: `<?php
try {
    throw new Exception("Koneksi Redis Cache Terputus");
} catch (Exception $e) {
    echo "<h3>Detail Investigasi Masalah:</h3>";
    echo "<p>Pesan: <strong>" . $e->getMessage() . "</strong></p>";
    echo "<p>File Sumber: <code style='background: #f1f5f9; padding: 4px 8px; border-radius: 4px;'>" . $e->getFile() . "</code></p>";
}
?>`,
    codeExplanation: [
      '$e->getFile() secara otomatis merekam nama file secara presisi tanpa perlu diketik manual oleh programmer.'
    ],
    challenge: {
      instruction: 'Cetak nama file lokasi error dengan $e->getFile().',
      starterCode: `<?php
try {
    throw new Exception("Uji Lokasi File");
} catch (Exception $e) {
    echo "Lokasi: " . basename($e->getFile());
}
?>`,
      hint: 'Panggil $e->getFile().'
    },
    quiz: {
      question: 'Apa nilai kembalian dari method $e->getFile()?',
      options: [
        'String jalur path lengkap (absolut) file PHP tempat eksepsi dilempar',
        'Ukuran file dalam Kilobyte',
        'Waktu pembuatan file',
        'Tipe ekstensi file'
      ],
      correctIndex: 0,
      explanation: '$e->getFile() mengembalikan string path lengkap file lokasi terjadinya eksepsi.'
    }
  },

  // 169. GETMESSAGE()
  {
    id: 'php-ref-getmessage',
    title: 'PHP getMessage()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 169,
    overview: 'Kuasai $e->getMessage(): method paling fundamental untuk mengambil string teks pesan kesalahan yang menjelaskan alasan terjadinya error.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">GET MESSAGE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 169 / 173</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">💬 Membaca Pesan Kesalahan ($e->getMessage)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$e->getMessage()</code> mengembalikan string penjelasan kesalahan yang dikirimkan saat pembuatan eksepsi. Method ini adalah method yang paling sering dipanggil dalam blok <code>catch</code> di seluruh aplikasi PHP.
          </p>
        </div>
      </div>
    `,
    code: `<?php
function validasiUmur($umur) {
    if ($umur < 18) {
        throw new InvalidArgumentException("Pendaftaran gagal: Anda harus berusia minimal 18 tahun.");
    }
    return "Pendaftaran berhasil!";
}

try {
    echo validasiUmur(15);
} catch (Exception $e) {
    echo "<h3>Notifikasi Formulir:</h3>";
    echo "<div style='background: #fef2f2; border-left: 4px solid #ef4444; padding: 12px;'>";
    echo "<strong style='color: #b91c1c;'>Error: </strong>" . $e->getMessage();
    echo "</div>";
}
?>`,
    codeExplanation: [
      '$e->getMessage() membaca teks pesan deskriptif untuk ditampilkan sebagai alert error kepada pengguna.'
    ],
    challenge: {
      instruction: 'Ambil pesan error menggunakan $e->getMessage().',
      starterCode: `<?php
try {
    throw new Exception("Password terlalu pendek!");
} catch (Exception $e) {
    echo "Alert: " . $e->getMessage();
}
?>`,
      hint: 'Panggil $e->getMessage().'
    },
    quiz: {
      question: 'Method apakah pada objek Exception yang digunakan untuk membaca teks pesan kesalahan?',
      options: [
        '$e->getMessage()',
        '$e->getText()',
        '$e->readMessage()',
        '$e->getErrorString()'
      ],
      correctIndex: 0,
      explanation: '$e->getMessage() adalah method resmi standar Throwable interface di PHP.'
    }
  },

  // 170. GETLINE()
  {
    id: 'php-ref-getline',
    title: 'PHP getLine()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 170,
    overview: 'Method $e->getLine(): mengembalikan nomor baris kode (Line Number) tepat di mana eksepsi dilemparkan di dalam file sumber.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">GET LINE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 170 / 173</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📍 Mendeteksi Baris Kode Error ($e->getLine)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$e->getLine()</code> mengembalikan angka integer nomor baris tempat statement <code>throw</code> dieksekusi. Memungkinkan developer langsung melompat ke baris yang bermasalah di text editor / IDE.
          </p>
        </div>
      </div>
    `,
    code: `<?php
try {
    // Baris ke-3
    throw new Exception("Terjadi kegagalan kalkulasi matematis");
} catch (Exception $e) {
    echo "<h3>Laporan Debugging:</h3>";
    echo "<p>Pesan: <strong>" . $e->getMessage() . "</strong></p>";
    echo "<p>Lokasi Baris Kode: <strong style='color: #4f46e5;'>Baris " . $e->getLine() . "</strong></p>";
}
?>`,
    codeExplanation: [
      '$e->getLine() menghasilkan angka baris yang presisi.',
      'Sangat sering dikombinasikan dengan $e->getFile() untuk membuat string format "file.php:123".'
    ],
    challenge: {
      instruction: 'Cetak nomor baris terjadinya error dengan $e->getLine().',
      starterCode: `<?php
try {
    throw new Exception("Testing getLine");
} catch (Exception $e) {
    echo "Error pada baris: " . $e->getLine();
}
?>`,
      hint: 'Panggil $e->getLine().'
    },
    quiz: {
      question: 'Tipe data apakah yang dikembalikan oleh method $e->getLine()?',
      options: [
        'Integer (nomor baris kode)',
        'String teks baris kode',
        'Array',
        'Float'
      ],
      correctIndex: 0,
      explanation: '$e->getLine() mengembalikan integer nomor baris terjadinya eksepsi.'
    }
  },

  // 171. GETPREVIOUS()
  {
    id: 'php-ref-getprevious',
    title: 'PHP getPrevious()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 171,
    overview: 'Kuasai $e->getPrevious(): mengambil objek eksepsi akar penyebab sebelumnya (Exception Chaining) saat membungkus error level rendah ke eksepsi domain level tinggi.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">GET PREVIOUS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 171 / 173</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔗 Merantai Akar Penyebab Error ($e->getPrevious)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$e->getPrevious()</code> mengembalikan objek <code>Throwable</code> sebelumnya jika eksepsi ini dirantai (Exception Chaining). Ini adalah <em>best practice</em> arsitektur Clean Code untuk membungkus error teknis database (PDOException) menjadi error bisnis (OrderProcessingException) tanpa kehilangan riwayat teknis aslinya.
          </p>
        </div>
      </div>
    `,
    code: `<?php
function queryDatabase() {
    // 1. Error teknis tingkat rendah (Low-Level Driver Error)
    throw new PDOException("Access denied for user 'root'@'localhost'");
}

function prosesOrder() {
    try {
        queryDatabase();
    } catch (PDOException $lowLevelError) {
        // 2. Bungkus ke dalam Business Exception tingkat tinggi sambil menyematkan error aslinya sebagai $previous
        throw new Exception("Gagal memproses pesanan belanja Anda.", 500, $lowLevelError);
    }
}

try {
    prosesOrder();
} catch (Exception $e) {
    echo "<h3>Pesan untuk Pengguna:</h3>";
    echo "<p style='color: red;'><strong>" . $e->getMessage() . "</strong></p>";
    
    // 3. Inspeksi Akar Penyebab untuk Developer
    $akarPenyebab = $e->getPrevious();
    if ($akarPenyebab) {
        echo "<h3>Akar Penyebab Teknis Internal (getPrevious):</h3>";
        echo "<p style='color: #64748b;'><em>" . $akarPenyebab->getMessage() . "</em></p>";
    }
}
?>`,
    codeExplanation: [
      'new Exception("pesan bisnis", kode, $lowLevelError) menyimpan rantai error awal.',
      '$e->getPrevious() membaca kembali PDOException awal untuk keperluan logging developer.'
    ],
    challenge: {
      instruction: 'Uji pengambilan previous exception dengan $e->getPrevious().',
      starterCode: `<?php
$eAwal = new Exception("Akar Masalah");
$eBaru = new Exception("Masalah Utama", 0, $eAwal);
echo "Akar penyebab: " . $eBaru->getPrevious()->getMessage();
?>`,
      hint: 'Panggil $eBaru->getPrevious()->getMessage().'
    },
    quiz: {
      question: 'Kapan method $e->getPrevious() mengembalikan nilai NULL?',
      options: [
        'Ketika eksepsi tersebut dibuat tanpa menyematkan parameter $previous (merupakan eksepsi pertama yang terjadi)',
        'Ketika file script ditutup',
        'Selalu mengembalikan string',
        'Hanya di PHP 8'
      ],
      correctIndex: 0,
      explanation: 'Jika tidak ada eksepsi pendahulu yang dirantai, getPrevious() mengembalikan null.'
    }
  },

  // 172. GETTRACE()
  {
    id: 'php-ref-gettrace',
    title: 'PHP getTrace()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 172,
    overview: 'Kuasai $e->getTrace(): mengembalikan riwayat tumpukan jejak eksekusi (Stack Trace) sebagai array PHP multidimensi untuk analisis mendalam.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">GET TRACE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 172 / 173</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔬 Array Jejak Stack Trace ($e->getTrace)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$e->getTrace()</code> mengekstrak seluruh titik perhentian fungsi (file, line, function, class, args) yang dilewati sebelum terjadinya error dalam bentuk array terstruktur. Sangat cocok untuk dikirimkan ke APM monitoring tool seperti Sentry, Datadog, atau New Relic.
          </p>
        </div>
      </div>
    `,
    code: `<?php
class LayananAkun {
    public function aktivasi() {
        $this->kirimEmailOtp();
    }
    
    private function kirimEmailOtp() {
        throw new RuntimeException("Server SMTP Mailer sedang offline!");
    }
}

try {
    $service = new LayananAkun();
    $service->aktivasi();
} catch (Exception $e) {
    echo "<h3>Struktur Array Stack Trace (getTrace):</h3>";
    $trace = $e->getTrace();
    
    echo "<ul>";
    foreach ($trace as $i => $step) {
        $kelas = $step['class'] ?? '';
        $fungsi = $step['function'] ?? '';
        $baris = $step['line'] ?? 'N/A';
        echo "<li>Tumpukan #$i: <strong>$kelas->$fungsi()</strong> (Baris: $baris)</li>";
    }
    echo "</ul>";
}
?>`,
    codeExplanation: [
      '$e->getTrace() membongkar urutan method LayananAkun->aktivasi() hingga kirimEmailOtp().'
    ],
    challenge: {
      instruction: 'Ambil jumlah tumpukan trace dengan count($e->getTrace()).',
      starterCode: `<?php
try {
    throw new Exception("Uji Trace");
} catch (Exception $e) {
    echo "Jumlah langkah trace: " . count($e->getTrace());
}
?>`,
      hint: 'Panggil count($e->getTrace()).'
    },
    quiz: {
      question: 'Apa format data kembalian dari method $e->getTrace()?',
      options: [
        'Array multidimensi berisi detail setiap pemanggilan fungsi pada rantai eksekusi',
        'String teks panjang',
        'JSON string',
        'Objek XML'
      ],
      correctIndex: 0,
      explanation: '$e->getTrace() mengembalikan array multidimensi terstruktur.'
    }
  },

  // 173. GETTRACEASSTRING()
  {
    id: 'php-ref-gettraceasstring',
    title: 'PHP getTraceAsString()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 173,
    overview: 'Kuasai $e->getTraceAsString(): mengembalikan riwayat jejak tumpukan fungsi (Stack Trace) sebagai string teks bernomor yang siap dicetak ke log atau terminal.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">GET TRACE AS STRING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 173 / 173</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🖨️ Format String Stack Trace ($e->getTraceAsString)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$e->getTraceAsString()</code> mengonversi seluruh riwayat call stack menjadi <strong>string teks siap baca</strong> dengan format bernomor (<code>#0 {file}:{line} {class}->{function}()</code>). Cara paling praktis mencatat riwayat error ke file log harian aplikasi.
          </p>
        </div>
      </div>
    `,
    code: `<?php
function modulAutentikasi() {
    modulKeamanan();
}

function modulKeamanan() {
    throw new Exception("Sesi Token JWT Kadaluarsa!");
}

try {
    modulAutentikasi();
} catch (Exception $e) {
    echo "<h3>Laporan Log Exception Terformat (getTraceAsString):</h3>";
    echo "<pre style='background: #0f172a; color: #38bdf8; padding: 14px; border-radius: 8px; font-family: monospace; font-size: 13px;'>";
    echo "Exception: " . $e->getMessage() . "\\n";
    echo $e->getTraceAsString();
    echo "</pre>";
}
?>`,
    codeExplanation: [
      '$e->getTraceAsString() menghasilkan format teks nomor berurutan yang sangat bersih dan rapi.',
      'Format standar yang biasa Anda lihat di error log framework Laravel / Symfony.'
    ],
    challenge: {
      instruction: 'Cetak stack trace sebagai string dengan $e->getTraceAsString().',
      starterCode: `<?php
try {
    throw new Exception("Uji String Trace");
} catch (Exception $e) {
    echo $e->getTraceAsString();
}
?>`,
      hint: 'Panggil $e->getTraceAsString().'
    },
    quiz: {
      question: 'Apa keunggulan $e->getTraceAsString() dibandingkan $e->getTrace() biasa?',
      options: [
        'Menghasilkan teks string bernomor yang langsung siap dicatat ke file log atau ditampilkan di terminal tanpa perlu looping array manual',
        'Menghemat kapasitas harddisk',
        'Otomatis memperbaiki error',
        'Hanya untuk angka'
      ],
      correctIndex: 0,
      explanation: 'getTraceAsString menyajikan stack trace dalam bentuk representasi teks yang mudah dibaca oleh mata manusia.'
    }
  }
];

module.exports = phpPart20RefException;
