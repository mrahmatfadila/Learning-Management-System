// ==========================================
// DATA MATERI PHP: BAB 1 (LANJUTAN) - CONSTANTS, OPERATORS & CONTROL FLOW
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================

const phpPart2ControlFlow = [
  // 20. PHP CONSTANTS
  {
    id: 'php-constants',
    title: 'PHP Constants',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 20,
    overview: 'Pelajari konsep konstanta (Constants) di PHP menggunakan define() dan keyword const. Pahami sifat immutable (tidak dapat diubah), otomatis global, dan perbedaan define vs const.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">KONSTANTA</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 20 / 36</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔒 Nilai Tetap (Constants) di PHP</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Konstanta adalah penampung data yang nilainya <strong>tetap dan tidak dapat diubah (immutable)</strong> selama skrip berjalan. Berbeda dengan variabel biasa, konstanta <strong>TIDAK menggunakan simbol dollar ($)</strong> dan otomatis bersifat Global di seluruh fungsi.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800/50">
            <h4 class="font-bold text-purple-700 dark:text-purple-400 text-sm mb-1">1. Menggunakan <code>define()</code></h4>
            <p class="text-xs text-slate-600 dark:text-slate-400 mb-2">Didefinisikan saat runtime. Dapat digunakan di dalam struktur percabangan atau file konfigurasi global.</p>
            <pre class="bg-slate-950 text-slate-200 p-2.5 rounded text-[11px] font-mono">define("NAMA_APLIKASI", "DevGrow LMS");</pre>
          </div>

          <div class="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-800/50">
            <h4 class="font-bold text-indigo-700 dark:text-indigo-400 text-sm mb-1">2. Menggunakan Kata Kunci <code>const</code></h4>
            <p class="text-xs text-slate-600 dark:text-slate-400 mb-2">Didefinisikan saat compile-time. Sangat cocok di dalam Class OOP atau di tingkat terluar file.</p>
            <pre class="bg-slate-950 text-slate-200 p-2.5 rounded text-[11px] font-mono">const VERSI_API = "v2.5.0";</pre>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
          <h4 class="font-bold text-emerald-600 dark:text-emerald-400 text-sm">✓ Konstanta Berbentuk Array (PHP 7+)</h4>
          <p class="text-xs text-slate-600 dark:text-slate-400">
            Anda dapat menyimpan sekumpulan nilai array ke dalam satu konstanta:
          </p>
          <pre class="bg-slate-950 text-slate-200 p-2.5 rounded text-[11px] font-mono">define("PERAN_PENGGUNA", ["ADMIN", "INSTRUKTUR", "SISWA"]);</pre>
        </div>
      </div>
    `,
    code: `<?php
// Deklarasi Konstanta Global
define("SITE_NAME", "DevGrow Academy");
define("BIAYA_LAYANAN", 5000);
const MAX_UPLOAD_MB = 25;

// Konstanta Array
define("FITUR_PRO", [
    "Akses 300+ Materi",
    "Live Code Playground",
    "Sertifikat Kelulusan Terverifikasi"
]);

function tampilkanInformasi() {
    // Konstanta otomatis dapat diakses di dalam fungsi tanpa kata kunci 'global'
    echo "<h3>Selamat Datang di " . SITE_NAME . "</h3>";
    echo "<p>Batas Upload File: " . MAX_UPLOAD_MB . " MB</p>";
    echo "<p>Biaya Admin: Rp " . number_format(BIAYA_LAYANAN, 0, ',', '.') . "</p>";
}

tampilkanInformasi();

echo "<h4>Daftar Keuntungan Member PRO:</h4>";
echo "<ol>";
foreach (FITUR_PRO as $fitur) {
    echo "<li>$fitur</li>";
}
echo "</ol>";
?>`,
    codeExplanation: [
      'Konstanta SITE_NAME didefinisikan menggunakan define() dengan konvensi huruf kapital (ALL_CAPS).',
      'Di dalam fungsi tampilkanInformasi(), konstanta dapat langsung dibaca tanpa perlu deklarasi global $SITE_NAME.',
      'Konstanta array FITUR_PRO dapat diulang dengan loop foreach secara mulus.'
    ],
    challenge: {
      instruction: 'Buat konstanta bernama KURS_USD bernilai 16200 dan cetak pesan "Kurs dollar saat ini: Rp [KURS_USD]".',
      starterCode: `<?php
define("KURS_USD", 16200);
echo "Kurs dollar saat ini: Rp " . KURS_USD;
?>`,
      hint: 'Panggil konstanta KURS_USD tanpa tanda dollar ($).'
    },
    quiz: {
      question: 'Manakah pernyataan yang BENAR mengenai konstanta di PHP?',
      options: [
        'Konstanta tidak menggunakan tanda dollar ($) dan nilainya tidak dapat diubah setelah didefinisikan',
        'Konstanta wajib diawali dengan tanda dollar ($)',
        'Konstanta hanya bisa diakses di dalam fungsi lokal',
        'Nilai konstanta dapat diubah kapan saja dengan operator assignment ='
      ],
      correctIndex: 0,
      explanation: 'Konstanta tidak menggunakan simbol $, bersifat global secara otomatis, dan nilainya bersifat permanen (immutable) selama proses skrip berlangsung.'
    }
  },

  // 21. PHP MAGIC CONSTANTS
  {
    id: 'php-magic-constants',
    title: 'PHP Magic Constants',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 21,
    overview: 'Pahami 9 Magic Constants bawaan PHP (__LINE__, __FILE__, __DIR__, __FUNCTION__, __CLASS__, __METHOD__, __TRAIT__, __NAMESPACE__, ClassName::class) yang nilainya berubah dinamis sesuai konteks eksekusi kode.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">MAGIC CONSTANTS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 21 / 36</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🪄 Magic Constants Bawaan PHP</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            PHP menyediakan 9 konstanta khusus (diawali dan diakhiri dua underscore <code>__</code>) yang nilainya otomatis berubah sesuai di mana baris kode tersebut sedang dieksekusi.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <code class="text-purple-600 dark:text-purple-400 font-bold block mb-1">__LINE__</code>
            Nomor baris kode saat ini di file.
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <code class="text-indigo-600 dark:text-indigo-400 font-bold block mb-1">__FILE__</code>
            Jalur lengkap (full path) & nama file aktif.
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <code class="text-cyan-600 dark:text-cyan-400 font-bold block mb-1">__DIR__</code>
            Folder direktori tempat file disimpan.
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <code class="text-emerald-600 dark:text-emerald-400 font-bold block mb-1">__FUNCTION__</code>
            Nama fungsi yang sedang berjalan.
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <code class="text-amber-600 dark:text-amber-400 font-bold block mb-1">__CLASS__</code>
            Nama Class OOP tempat kode berada.
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <code class="text-rose-600 dark:text-rose-400 font-bold block mb-1">__METHOD__</code>
            Nama Class beserta nama Method-nya.
          </div>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Inspeksi Magic Constants:</h3>";
echo "<ul>";
echo "<li><strong>Nomor Baris (__LINE__):</strong> Baris ke-" . __LINE__ . "</li>";
echo "<li><strong>Direktori File (__DIR__):</strong> " . __DIR__ . "</li>";
echo "<li><strong>Nama File Lengkap (__FILE__):</strong> " . __FILE__ . "</li>";
echo "</ul>";

function prosesPembayaran() {
    echo "<p>Sedang mengeksekusi fungsi: <strong>" . __FUNCTION__ . "()</strong> pada baris ke-" . __LINE__ . "</p>";
}

prosesPembayaran();
?>`,
    codeExplanation: [
      '__LINE__ sangat berguna saat mencatat log error (misal: "Terjadi kegagalan query di baris " . __LINE__).',
      '__DIR__ adalah standar industri untuk memuat file lain secara aman dengan require_once __DIR__ . "/config.php".',
      '__FUNCTION__ mengembalikan nama fungsi aktif secara otomatis.'
    ],
    challenge: {
      instruction: 'Cetak nomor baris aktif menggunakan __LINE__ di dalam fungsi baru.',
      starterCode: `<?php
function logSistem() {
    echo "Pesan dicatat di baris: " . __LINE__;
}

logSistem();
?>`,
      hint: 'Panggil __LINE__ untuk mendapatkan nomor baris kode.'
    },
    quiz: {
      question: 'Magic constant apa yang paling sering digunakan untuk menentukan direktori absolut file saat melakukan require/include?',
      options: [
        '__DIR__',
        '__PATH__',
        '__FOLDER__',
        '__LOCATION__'
      ],
      correctIndex: 0,
      explanation: '__DIR__ mengembalikan path direktori absolut tempat file skrip PHP tersebut berada di filesystem server.'
    }
  },

  // 22. PHP OPERATORS
  {
    id: 'php-operators',
    title: 'PHP Operators',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 22,
    overview: 'Kuasai seluruh operator penting PHP: Aritmatika (+, -, *, /, %, **), Penugasan (Assignment), Pembanding (==, ===, !=, !==, <=>, ??), Logika (&&, ||, !), dan Increment/Decrement.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">OPERATOR</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 22 / 36</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚡ Kumpulan Operator di PHP 8.x</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Operator digunakan untuk melakukan manipulasi matematis, perbandingan nilai, dan evaluasi logika antar variabel.
          </p>
        </div>

        <div class="space-y-3">
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h4 class="font-bold text-purple-600 dark:text-purple-400 text-sm mb-1">1. Spaceship Operator (<code>&lt;=&gt;</code>)</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400">
              Membandingkan dua nilai sekaligus: menghasilkan <code>-1</code> jika nilai kiri lebih kecil, <code>0</code> jika sama besar, dan <code>1</code> jika nilai kiri lebih besar. Sangat berguna untuk pengurutan data kustom (usort).
            </p>
          </div>

          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h4 class="font-bold text-indigo-600 dark:text-indigo-400 text-sm mb-1">2. Null Coalescing Operator (<code>??</code>)</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400">
              Memberikan nilai default jika variabel bernilai null atau belum terdefinisi: <code>$user = $_GET['user'] ?? 'Tamu';</code>
            </p>
          </div>

          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h4 class="font-bold text-emerald-600 dark:text-emerald-400 text-sm mb-1">3. Strict Equality (<code>===</code> vs <code>==</code>)</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400">
              <code>===</code> memeriksa nilai DAN tipe data sekaligus (tipe aman), sedangkan <code>==</code> melakukan konversi otomatis yang berisiko bug.
            </p>
          </div>
        </div>
      </div>
    `,
    code: `<?php
// 1. Eksponensial (Pangkat)
$pangkat = 2 ** 8; // 2 pangkat 8 = 256

// 2. Modulus (Sisa Bagi)
$sisaBagi = 10 % 3; // 1

// 3. Spaceship Operator (<=>)
$banding1 = 5 <=> 10; // -1 (kiri < kanan)
$banding2 = 10 <=> 10; // 0  (kiri == kanan)
$banding3 = 15 <=> 10; // 1  (kiri > kanan)

// 4. Null Coalescing (??)
$namaAkun = null;
$namaFinal = $namaAkun ?? "Pengguna Anonim";

echo "<h3>Hasil Uji Operator:</h3>";
echo "<ul>";
echo "<li><strong>2 Pangkat 8:</strong> $pangkat</li>";
echo "<li><strong>10 Modulus 3:</strong> $sisaBagi</li>";
echo "<li><strong>Spaceship 5 <=> 10:</strong> $banding1</li>";
echo "<li><strong>Spaceship 15 <=> 10:</strong> $banding3</li>";
echo "<li><strong>Nama Akun Terpilih:</strong> $namaFinal</li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'Operator ** adalah cara modern PHP untuk perpangkatan angka.',
      'Spaceship operator <=> menyederhanakan logika pembandingan 3 cabang menjadi satu baris saja.',
      'Operator ?? mencegah peringatan "Undefined variable" pada input pengguna.'
    ],
    challenge: {
      instruction: 'Gunakan operator null coalescing (??) untuk mengisi variabel $role dengan default "STUDENT" jika $inputRole bernilai null.',
      starterCode: `<?php
$inputRole = null;
$role = $inputRole ?? "STUDENT";
echo "Role akun: $role";
?>`,
      hint: 'Format: $role = $inputRole ?? "STUDENT";'
    },
    quiz: {
      question: 'Berapakah hasil evaluasi dari ekspresi 20 <=> 10 di PHP?',
      options: [
        '1 (karena 20 lebih besar dari 10)',
        '-1',
        '0',
        'true'
      ],
      correctIndex: 0,
      explanation: 'Spaceship operator (<=>) mengembalikan angka integer 1 jika operand sebelah kiri bernilai lebih besar dari operand kanan.'
    }
  },

  // 23. PHP IF
  {
    id: 'php-if',
    title: 'PHP If',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 23,
    overview: 'Pelajari struktur kendali paling mendasar: pernyataan if statement untuk mengeksekusi blok kode hanya jika kondisi bernilai TRUE.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PERCABANGAN</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 23 / 36</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔀 Pernyataan if (Kondisi Tunggal)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Pernyataan <code>if</code> mengevaluasi ekspresi logika di dalam tanda kurung <code>(kondisi)</code>. Jika bernilai <code>true</code>, blok kode di dalam kurung kurawal <code>{ ... }</code> akan dijalankan.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs border border-slate-800">
          <div class="text-amber-400 font-bold mb-1">Sintaks Dasar:</div>
          <pre class="text-sky-300">if (kondisi_bernilai_true) {
    // Jalankan kode di sini
}</pre>
        </div>
      </div>
    `,
    code: `<?php
$nilaiUjian = 85;
$batasKelulusan = 75;

echo "<h3>Status Kelulusan Siswa:</h3>";

if ($nilaiUjian >= $batasKelulusan) {
    echo "<div style='padding: 15px; background: #ecfdf5; border-left: 4px solid #10b981; color: #065f46;'>";
    echo "<strong>Selamat! Anda Dinyatakan LULUS!</strong><br>";
    echo "Nilai Anda: $nilaiUjian (Di atas KKM $batasKelulusan)";
    echo "</div>";
}
?>`,
    codeExplanation: [
      'Ekspresi ($nilaiUjian >= $batasKelulusan) menghasilkan nilai true karena 85 >= 75.',
      'Blok HTML di dalam kurung kurawal dieksekusi dan dicetak ke layar browser.'
    ],
    challenge: {
      instruction: 'Buat if statement yang mengecek jika variabel $umur >= 17, cetak "Boleh membuat KTP".',
      starterCode: `<?php
$umur = 19;
if ($umur >= 17) {
    echo "Boleh membuat KTP";
}
?>`,
      hint: 'Gunakan kondisi ($umur >= 17).'
    },
    quiz: {
      question: 'Kapan blok kode di dalam pernyataan if akan dieksekusi?',
      options: [
        'Hanya ketika kondisi logika di dalam kurung bernilai TRUE',
        'Setiap saat tanpa memandang nilai kondisi',
        'Hanya ketika kondisi logika bernilai FALSE',
        'Hanya saat halaman di-refresh dua kali'
      ],
      correctIndex: 0,
      explanation: 'Pernyataan if hanya akan mengeksekusi blok kodenya jika hasil evaluasi kondisinya menghasilkan nilai boolean TRUE.'
    }
  },

  // 24. PHP IF OPERATORS
  {
    id: 'php-if-operators',
    title: 'PHP If Operators',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 24,
    overview: 'Kombinasikan beberapa syarat kondisi di dalam if statement menggunakan operator logika AND (&&), OR (||), dan NOT (!).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">OPERATOR LOGIKA</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 24 / 36</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧩 Menggabungkan Syarat Kondisi Majemuk</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Dalam dunia nyata, keputusan program sering kali membutuhkan lebih dari satu syarat validasi.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <code class="text-purple-600 dark:text-purple-400 font-bold block mb-1">&& (AND)</code>
            Semua syarat harus TRUE agar bernilai TRUE.
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <code class="text-indigo-600 dark:text-indigo-400 font-bold block mb-1">|| (OR)</code>
            Cukup salah satu syarat TRUE agar bernilai TRUE.
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <code class="text-rose-600 dark:text-rose-400 font-bold block mb-1">! (NOT)</code>
            Membalikkan nilai logika (TRUE jadi FALSE).
          </div>
        </div>
      </div>
    `,
    code: `<?php
$isLoggedIn = true;
$role = "ADMIN";
$isAccountActive = true;

echo "<h3>Verifikasi Hak Akses Panel Kontrol:</h3>";

// Semua 3 syarat harus terpenuhi menggunakan operator &&
if ($isLoggedIn && $role === "ADMIN" && $isAccountActive) {
    echo "<div style='padding: 12px; background: #fdf2f8; border: 1px solid #f472b6; border-radius: 8px; color: #831843;'>";
    echo "🛡️ <strong>Akses Diberikan:</strong> Anda memiliki izin penuh Administrator.";
    echo "</div>";
}
?>`,
    codeExplanation: [
      'Operator && memastikan bahwa pengguna wajib login ($isLoggedIn), memiliki role "ADMIN", dan akun berstatus aktif.',
      'Jika salah satu bernilai false, seluruh blok akan dilewati secara aman.'
    ],
    challenge: {
      instruction: 'Buat kondisi yang mengecek jika nilai >= 80 DAN kehadiran >= 75, cetak "Nilai A".',
      starterCode: `<?php
$nilai = 85;
$kehadiran = 90;

if ($nilai >= 80 && $kehadiran >= 75) {
    echo "Selamat, Anda mendapatkan Nilai A!";
}
?>`,
      hint: 'Gunakan operator && di antara dua kondisi pembanding.'
    },
    quiz: {
      question: 'Manakah operator yang menghasilkan nilai TRUE jika SALAH SATU saja dari kedua kondisi terpenuhi?',
      options: [
        '|| (OR)',
        '&& (AND)',
        '! (NOT)',
        '==='
      ],
      correctIndex: 0,
      explanation: 'Operator logika OR (||) bernilai TRUE jika salah satu atau kedua syarat yang diuji bernilai TRUE.'
    }
  },

  // 25. PHP IF...ELSE
  {
    id: 'php-if-else',
    title: 'PHP If...Else',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 25,
    overview: 'Pelajari percabangan dua arah atau lebih menggunakan pernyataan if, elseif, dan else untuk menangani berbagai skenario kondisi program.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">IF ELSE ELSEIF</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 25 / 36</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚖️ Percabangan Multi-Kondisi di PHP</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Gunakan <code>if</code> untuk kondisi pertama, <code>elseif</code> untuk menguji kondisi alternatif jika kondisi sebelumnya salah, dan <code>else</code> sebagai jalan keluar terakhir jika semua kondisi tidak terpenuhi.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs border border-slate-800">
          <pre class="text-sky-300">if (kondisi1) {
    // jika kondisi1 benar
} elseif (kondisi2) {
    // jika kondisi1 salah tapi kondisi2 benar
} else {
    // jika semua kondisi di atas salah
}</pre>
        </div>
      </div>
    `,
    code: `<?php
$skor = 78;

echo "<h3>Hasil Penilaian Rapor:</h3>";
echo "<p>Nilai Angka: <strong>$skor</strong></p>";

if ($skor >= 90) {
    $predikat = "A (Sangat Memuaskan)";
    $warna = "#10b981";
} elseif ($skor >= 75) {
    $predikat = "B (Baik)";
    $warna = "#3b82f6";
} elseif ($skor >= 60) {
    $predikat = "C (Cukup)";
    $warna = "#f59e0b";
} else {
    $predikat = "D (Perlu Remedial)";
    $warna = "#ef4444";
}

echo "<div style='padding: 12px; border-radius: 8px; color: white; background: $warna;'>";
echo "Predikat Kelulusan: <strong>$predikat</strong>";
echo "</div>";
?>`,
    codeExplanation: [
      'PHP menguji kondisi dari atas ke bawah secara berurutan.',
      'Begitu satu kondisi bernilai true (misal $skor >= 75), blok tersebut dieksekusi dan sisa cabang elseif/else di bawahnya langsung dilewati.'
    ],
    challenge: {
      instruction: 'Buat percabangan if-else yang memeriksa jika $saldo >= $harga, cetak "Pembelian Berhasil", jika tidak cetak "Saldo Kurang".',
      starterCode: `<?php
$saldo = 50000;
$harga = 75000;

if ($saldo >= $harga) {
    echo "Pembelian Berhasil!";
} else {
    echo "Saldo Kurang!";
}
?>`,
      hint: 'Gunakan struktur if ($saldo >= $harga) { ... } else { ... }'
    },
    quiz: {
      question: 'Blok kode manakah yang akan dijalankan jika SEMUA pernyataan if dan elseif bernilai FALSE?',
      options: [
        'Blok else',
        'Blok if pertama',
        'Semua blok akan dijalankan',
        'Program akan error'
      ],
      correctIndex: 0,
      explanation: 'Blok else bertindak sebagai default fallback yang dijalankan jika tidak ada satu pun kondisi if/elseif sebelumnya yang bernilai true.'
    }
  },

  // 26. PHP SHORTHAND IF
  {
    id: 'php-if-shorthand',
    title: 'PHP Shorthand if',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 26,
    overview: 'Kuasai teknik penulisan kondisi ringkas: Ternary Operator (? :) dan Short Ternary (Elvis Operator ?:) untuk kode yang bersih dan elegan.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SHORTHAND IF</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 26 / 36</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚡ Ternary Operator (? :)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Ternary operator memungkinkan Anda menuliskan if-else sederhana hanya dalam satu baris ekspresi.
          </p>
        </div>

        <div class="space-y-3">
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h4 class="font-bold text-purple-600 dark:text-purple-400 text-sm mb-1">Sintaks Ternary Standar</h4>
            <pre class="bg-slate-950 text-slate-200 p-2.5 rounded text-[11px] font-mono">$status = ($umur >= 18) ? "Dewasa" : "Anak-anak";</pre>
          </div>

          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h4 class="font-bold text-indigo-600 dark:text-indigo-400 text-sm mb-1">Short Ternary (Elvis Operator ?:)</h4>
            <pre class="bg-slate-950 text-slate-200 p-2.5 rounded text-[11px] font-mono">$display = $namaInput ?: "Nama Default";</pre>
          </div>
        </div>
      </div>
    `,
    code: `<?php
$isMemberVIP = true;
$poinBelanja = 1200;

// Shorthand Ternary
$diskonTambahan = $isMemberVIP ? "Dapat Diskon 15%" : "Harga Normal";

// Elvis Operator ?: (jika falsy/kosong, ambil nilai kanan)
$namaPelanggan = "" ?: "Pelanggan Umum";

echo "<h3>Status Akun:</h3>";
echo "<p>Kategori: <strong>$diskonTambahan</strong></p>";
echo "<p>Nama Faktur: <strong>$namaPelanggan</strong></p>";
?>`,
    codeExplanation: [
      'Format ternary: ($kondisi) ? nilai_jika_true : nilai_jika_false;',
      'Elvis operator $a ?: $b adalah bentuk singkat dari $a ? $a : $b.'
    ],
    challenge: {
      instruction: 'Gunakan ternary operator untuk mengisi $hasil dengan "Lulus" jika $nilai >= 70, atau "Gagal".',
      starterCode: `<?php
$nilai = 80;
$hasil = ($nilai >= 70) ? "Lulus" : "Gagal";
echo "Status: $hasil";
?>`,
      hint: 'Format: ($kondisi) ? "Lulus" : "Gagal";'
    },
    quiz: {
      question: 'Apa fungsi dari operator ternary ($a ? $b : $c)?',
      options: [
        'Menjadi bentuk ringkas satu baris dari percabangan if-else',
        'Mengulang kode sebanyak 3 kali',
        'Menggabungkan tiga buah array',
        'Membuat fungsi baru secara otomatis'
      ],
      correctIndex: 0,
      explanation: 'Ternary operator adalah shorthand untuk if-else yang mengembalikan nilai berdasarkan kondisi logika boolean.'
    }
  },

  // 27. PHP NESTED IF
  {
    id: 'php-if-nested',
    title: 'PHP Nested if',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 27,
    overview: 'Pelajari konsep percabangan bersarang (Nested if) di mana sebuah if statement diletakkan di dalam blok if lainnya untuk validasi berjenjang.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">NESTED IF</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 27 / 36</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌳 Percabangan Bersarang (Nested if)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Nested if digunakan saat suatu keputusan lanjutan hanya relevan jika keputusan awal telah terbukti benar (validasi bertingkat).
          </p>
        </div>

        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <h4 class="font-bold text-slate-800 dark:text-white text-sm mb-1">Tips Clean Code:</h4>
          <p class="text-xs text-slate-600 dark:text-slate-400">
            Hindari sarang if yang terlalu dalam (lebih dari 3 tingkat) menggunakan teknik <em>Early Return</em> atau <em>Guard Clauses</em> agar kode tetap mudah dibaca dan dirawat.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$umur = 22;
$punyaSIM = true;

echo "<h3>Pemeriksaan Izin Mengemudi:</h3>";

if ($umur >= 17) {
    echo "<p>✓ Usia memenuhi syarat (di atas 17 tahun).</p>";
    
    // Nested if di dalam blok usia
    if ($punyaSIM) {
        echo "<div style='color: green; font-weight: bold;'>🎉 Diizinkan mengendarai kendaraan bermotor di jalan raya.</div>";
    } else {
        echo "<div style='color: orange; font-weight: bold;'>⚠️ Belum memiliki SIM. Silakan membuat SIM terlebih dahulu.</div>";
    }
} else {
    echo "<div style='color: red;'>✗ Usia belum mencukupi untuk mengemudi.</div>";
}
?>`,
    codeExplanation: [
      'Pemeriksaan kepemilikan SIM hanya akan dijalankan jika pemeriksaan umur ($umur >= 17) telah lolos terlebih dahulu.',
      'Nested if memetakan skenario keputusan bercabang secara terstruktur.'
    ],
    challenge: {
      instruction: 'Ubah variabel $punyaSIM menjadi false dan klik RUN untuk melihat respon percabangan kedua.',
      starterCode: `<?php
$umur = 20;
$punyaSIM = false;

if ($umur >= 17) {
    if ($punyaSIM) {
        echo "Boleh Mengemudi";
    } else {
        echo "Wajib punya SIM dulu!";
    }
}
?>`,
      hint: 'Klik RUN untuk melihat respon if bagian dalam.'
    },
    quiz: {
      question: 'Apa yang dimaksud dengan Nested if di PHP?',
      options: [
        'Struktur pernyataan if yang berada di dalam blok pernyataan if lainnya',
        'Pernyataan if yang diulang menggunakan loop',
        'Fungsi bawaan untuk mengenkripsi password',
        'Konstanta yang menyimpan array'
      ],
      correctIndex: 0,
      explanation: 'Nested if adalah penempatan struktur percabangan if di dalam blok if lainnya untuk melakukan pengecekan berjenjang.'
    }
  },

  // 28. PHP SWITCH
  {
    id: 'php-switch',
    title: 'PHP Switch',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 28,
    overview: 'Pelajari pernyataan switch statement untuk mengevaluasi satu ekspresi terhadap banyak kemungkinan nilai case, penggunaan break, dan default case.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SWITCH CASE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 28 / 36</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎛️ Pernyataan switch di PHP</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Pernyataan <code>switch</code> adalah alternatif yang rapi untuk menggantikan rangkaian panjang <code>if...elseif...elseif</code> ketika Anda membandingkan satu variabel yang sama dengan banyak nilai tetap.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs border border-slate-800 space-y-2">
          <pre class="text-sky-300">switch ($nilai) {
    case "A":
        // kode jika nilai === "A"
        break;
    case "B":
        // kode jika nilai === "B"
        break;
    default:
        // kode jika tidak ada case yang cocok
}</pre>
        </div>
      </div>
    `,
    code: `<?php
$metodePembayaran = "QRIS";

echo "<h3>Instruksi Pembayaran:</h3>";

switch ($metodePembayaran) {
    case "BCA_VA":
        echo "<p>Silakan transfer ke nomor Virtual Account BCA: <strong>8800991234</strong></p>";
        break;
    case "MANDIRI_VA":
        echo "<p>Silakan transfer ke Virtual Account Mandiri: <strong>7000123456</strong></p>";
        break;
    case "QRIS":
        echo "<p>⚡ Silakan scan QRIS dinamis menggunakan aplikasi e-Wallet apa saja.</p>";
        break;
    case "COD":
        echo "<p>Siapkan uang tunai pas saat kurir tiba di alamat Anda.</p>";
        break;
    default:
        echo "<p>Metode pembayaran tidak dikenali. Silakan pilih metode lain.</p>";
        break;
}
?>`,
    codeExplanation: [
      'Pernyataan break sangat penting untuk menghentikan eksekusi agar program tidak merembes ke case berikutnya (fall-through).',
      'default dieksekusi jika tidak ada satupun case yang cocok dengan nilai $metodePembayaran.'
    ],
    challenge: {
      instruction: 'Ubah $metodePembayaran menjadi "BCA_VA" dan klik RUN untuk melihat instruksi yang berubah.',
      starterCode: `<?php
$metode = "BCA_VA";
switch ($metode) {
    case "BCA_VA":
        echo "Bayar via BCA VA";
        break;
    default:
        echo "Metode Lain";
}
?>`,
      hint: 'Klik RUN untuk menguji case BCA_VA.'
    },
    quiz: {
      question: 'Apa akibatnya jika Anda lupa menuliskan kata kunci break pada akhir blok case di dalam switch statement?',
      options: [
        'Eksekusi akan terus berlanjut ke case berikutnya (fall-through) meskipun kondisinya tidak cocok',
        'Program akan langsung crash dengan Fatal Error',
        'PHP akan otomatis mengulangi switch dari awal',
        'Tidak terjadi apa-apa'
      ],
      correctIndex: 0,
      explanation: 'Tanpa break, PHP akan melanjutkan eksekusi ke blok case di bawahnya tanpa memeriksa kecocokan kondisinya lagi (dikenal sebagai fall-through).'
    }
  },

  // 29. PHP MATCH
  {
    id: 'php-match',
    title: 'PHP Match',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 29,
    overview: 'Kuasai fitur modern PHP 8.0+: Match Expression. Pahami keunggulannya dibanding switch: strict comparison (===), mengembalikan nilai langsung (expression), dan tanpa perlu break.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PHP 8.0+ MATCH</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 29 / 36</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🚀 Match Expression Modern di PHP 8</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>match</code> adalah evolusi modern dari <code>switch</code> yang diperkenalkan di PHP 8.0. Match adalah sebuah <strong>ekspresi</strong> yang menghasilkan nilai kembalian, menggunakan perbandingan tipe ketat (<code>===</code>), dan tidak memerlukan <code>break</code>.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <h4 class="font-bold text-rose-600 dark:text-rose-400 mb-1">Switch Tradisional</h4>
            <ul class="space-y-1 text-slate-600 dark:text-slate-400">
              <li>• Memakai perbandingan longgar (<code>==</code>).</li>
              <li>• Wajib menulis <code>break;</code> berulang kali.</li>
              <li>• Sintaks panjang dan rawan bug fall-through.</li>
            </ul>
          </div>
          <div class="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-800/50">
            <h4 class="font-bold text-emerald-700 dark:text-emerald-400 mb-1">Match Modern (PHP 8.x)</h4>
            <ul class="space-y-1 text-slate-600 dark:text-slate-400">
              <li>• Memakai strict comparison (<code>===</code>).</li>
              <li>• Mengembalikan nilai langsung ke variabel.</li>
              <li>• Ringkas, aman, dan dapat menggabungkan banyak kondisi dengan koma (<code>,</code>).</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    code: `<?php
$statusCode = 404;

// Menggunakan match expression PHP 8
$pesanStatus = match ($statusCode) {
    200, 201 => "✅ Sukses (OK / Created)",
    400 => "⚠️ Bad Request (Format input salah)",
    401, 403 => "⛔ Unauthorized / Forbidden (Akses Ditolak)",
    404 => "🔍 Not Found (Halaman / Data Tidak Ditemukan)",
    500 => "💥 Internal Server Error",
    default => "❓ Status Code Tidak Diketahui"
};

echo "<h3>Respons HTTP Server:</h3>";
echo "<p>Kode: <strong>$statusCode</strong></p>";
echo "<p>Keterangan: <strong>$pesanStatus</strong></p>";
?>`,
    codeExplanation: [
      'match ($statusCode) mengevaluasi nilai dan langsung memasukkan hasil string ke variabel $pesanStatus.',
      'Beberapa nilai dapat digabungkan sekaligus menggunakan koma (seperti 200, 201 => ... dan 401, 403 => ...).',
      'Jika tidak ada case yang cocok dan tidak ada default, PHP akan melempar UnhandledMatchError yang aman.'
    ],
    challenge: {
      instruction: 'Gunakan match untuk memetakan role "ADMIN" menjadi "Akses Penuh" dan "STUDENT" menjadi "Akses Belajar".',
      starterCode: `<?php
$role = "ADMIN";
$izin = match ($role) {
    "ADMIN" => "Akses Penuh",
    "STUDENT" => "Akses Belajar",
    default => "Tamu"
};

echo "Hak Akses: $izin";
?>`,
      hint: 'Klik RUN untuk melihat kekuatan match expression.'
    },
    quiz: {
      question: 'Manakah keunggulan utama dari match expression PHP 8 dibandingkan switch tradisional?',
      options: [
        'Menggunakan perbandingan ketat (===), mengembalikan nilai langsung, dan tidak membutuhkan break',
        'Hanya bisa digunakan untuk angka',
        'Lebih lambat dari switch',
        'Membutuhkan tag <script> tambahan'
      ],
      correctIndex: 0,
      explanation: 'match menggunakan strict comparison (===), langsung mengembalikan nilai (return value), dan bebas dari bug fall-through tanpa perlu keyword break.'
    }
  },

  // 30. PHP LOOPS
  {
    id: 'php-loops',
    title: 'PHP Loops',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 30,
    overview: 'Pengantar konsep perulangan (Loops) di PHP. Pahami 4 jenis perulangan: while, do...while, for, dan foreach untuk mengotomatisasi pemrosesan data berulang.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PERULANGAN</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 30 / 36</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔄 Konsep Perulangan (Loops) di PHP</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Perulangan digunakan untuk menjalankan blok kode yang sama berulang kali selama kondisi yang ditentukan masih bernilai TRUE.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-purple-600 dark:text-purple-400 block mb-1">1. while</strong>
            Mengulang selama kondisi bernilai true (dicek di awal).
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-indigo-600 dark:text-indigo-400 block mb-1">2. do...while</strong>
            Jalankan minimal 1 kali, baru cek kondisi di akhir.
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-cyan-600 dark:text-cyan-400 block mb-1">3. for</strong>
            Mengulang dengan jumlah iterasi yang sudah diketahui pasti.
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-emerald-600 dark:text-emerald-400 block mb-1">4. foreach</strong>
            Khusus mengulang setiap elemen pada Array atau Object.
          </div>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Demonstrasi Singkat Perulangan di PHP:</h3>";

// Contoh cepat loop for mencetak angka 1 sampai 5
echo "<p><strong>Menghitung 1 sampai 5:</strong> ";
for ($i = 1; $i <= 5; $i++) {
    echo "<span style='padding: 2px 8px; background: #e0e7ff; margin-right: 4px; border-radius: 4px;'>$i</span>";
}
echo "</p>";
?>`,
    codeExplanation: [
      'Loop for ($i = 1; $i <= 5; $i++) mengulang baris kode sebanyak 5 kali dengan nilai $i bertambah 1 setiap iterasi.'
    ],
    challenge: {
      instruction: 'Ubah batas $i <= 5 menjadi $i <= 10 agar menghitung angka 1 sampai 10.',
      starterCode: `<?php
for ($i = 1; $i <= 10; $i++) {
    echo "$i ";
}
?>`,
      hint: 'Ubah kondisi batas perulangan.'
    },
    quiz: {
      question: 'Jenis perulangan manakah yang dirancang khusus dan paling efisien untuk mengiterasi elemen-elemen di dalam Array?',
      options: [
        'foreach loop',
        'while loop',
        'do...while loop',
        'infinite loop'
      ],
      correctIndex: 0,
      explanation: 'foreach loop dirancang khusus di PHP untuk membaca dan mengiterasi seluruh pasangan key-value pada Array dan Object.'
    }
  },

  // 31. WHILE LOOP
  {
    id: 'php-loop-while',
    title: 'While Loop',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 31,
    overview: 'Pelajari struktur perulangan while loop: inisialisasi counter, evaluasi kondisi di awal, dan increment counter untuk menghindari infinite loop.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">WHILE LOOP</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 31 / 36</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔄 Perulangan while di PHP</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Perulangan <code>while</code> memeriksa kondisi terlebih dahulu sebelum mengeksekusi blok kode. Jika kondisi bernilai <code>false</code> sejak awal, blok kode tidak akan pernah dijalankan sama sekali.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs border border-slate-800">
          <pre class="text-sky-300">while (kondisi_true) {
    // kode yang diulang
    $counter++; // Jangan lupa increment agar tidak infinite loop!
}</pre>
        </div>
      </div>
    `,
    code: `<?php
$detikMundur = 5;

echo "<h3>Hitung Mundur Peluncuran Server:</h3>";
echo "<ul>";

while ($detikMundur > 0) {
    echo "<li>T-minus <strong>$detikMundur</strong> detik...</li>";
    $detikMundur--; // Mengurangi counter (decrement)
}

echo "</ul>";
echo "<p style='color: green; font-weight: bold;'>🚀 Server Berhasil Diluncurkan ke Produksi!</p>";
?>`,
    codeExplanation: [
      'Setiap putaran perulangan, nilai $detikMundur berkurang 1 ($detikMundur--).',
      'Saat nilai mencapai 0, kondisi ($detikMundur > 0) menghasilkan false dan loop berhenti secara mulus.'
    ],
    challenge: {
      instruction: 'Buat while loop yang mencetak angka kelipatan 10 dari 10 sampai 50.',
      starterCode: `<?php
$angka = 10;
while ($angka <= 50) {
    echo "$angka ";
    $angka += 10;
}
?>`,
      hint: 'Gunakan operator $angka += 10 di dalam while loop.'
    },
    quiz: {
      question: 'Apa yang akan terjadi jika Anda lupa menuliskan increment/decrement ($i++ atau $i--) pada while loop?',
      options: [
        'Terjadi Infinite Loop (perulangan tak terhingga) yang dapat membekukan server',
        'PHP akan otomatis berhenti setelah 3 kali putaran',
        'Program akan langsung selesai tanpa error',
        'Nilai variabel akan otomatis dikosongkan'
      ],
      correctIndex: 0,
      explanation: 'Tanpa increment/decrement, kondisi akan selalu bernilai TRUE sehingga loop tidak pernah berhenti (Infinite Loop).'
    }
  },

  // 32. DO WHILE LOOP
  {
    id: 'php-loop-dowhile',
    title: 'Do While Loop',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 32,
    overview: 'Pahami perbedaan penting do...while loop dibanding while: kode pasti dieksekusi minimal satu kali sebelum kondisi dievaluasi.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DO WHILE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 32 / 36</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔁 Perulangan do...while</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>do...while</code> mengeksekusi blok kode terlebih dahulu, baru kemudian memeriksa kondisi di bagian akhir. Ini menjamin blok kode <strong>dijalankan setidaknya 1 kali</strong>, bahkan jika kondisinya sudah salah sejak awal.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Contoh: Kondisi sudah bernilai FALSE sejak awal ($i bernilai 10)
$i = 10;

echo "<h3>Eksperimen do...while (Kondisi Awal False):</h3>";

do {
    echo "<p>Pesan ini tetap muncul setidaknya <strong>1 kali</strong>! Nilai saat ini: $i</p>";
    $i++;
} while ($i < 5); // 11 < 5 bernilai FALSE, loop langsung berhenti

echo "<p>Status: Loop telah selesai.</p>";
?>`,
    codeExplanation: [
      'Meskipun kondisi ($i < 5) bernilai false saat $i bernilai 10, blok di dalam do { ... } tetap dijalankan satu kali sebelum pengecekan dilakukan.'
    ],
    challenge: {
      instruction: 'Jalankan do-while loop dari $angka = 1 sampai $angka <= 3.',
      starterCode: `<?php
$angka = 1;
do {
    echo "Putaran ke-$angka <br>";
    $angka++;
} while ($angka <= 3);
?>`,
      hint: 'Klik RUN untuk melihat 3 putaran perulangan.'
    },
    quiz: {
      question: 'Berapa kali minimal blok kode di dalam perulangan do...while akan dijalankan jika kondisinya bernilai FALSE?',
      options: [
        'Tepat 1 kali',
        '0 kali (tidak pernah)',
        'Tak terhingga kali',
        '2 kali'
      ],
      correctIndex: 0,
      explanation: 'do...while selalu mengeksekusi blok kode terlebih dahulu sebelum mengevaluasi kondisi di bagian while(kondisi).'
    }
  },

  // 33. FOR LOOP
  {
    id: 'php-loop-for',
    title: 'For Loop',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 33,
    overview: 'Kuasai sintaks for loop terstruktur: initialization, condition, dan increment/decrement dalam satu baris deklarasi yang rapi.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">FOR LOOP</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 33 / 36</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔢 Perulangan Terstruktur for Loop</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Gunakan <code>for</code> jika Anda sudah mengetahui dengan pasti berapa kali suatu blok kode harus diulang.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs border border-slate-800">
          <pre class="text-sky-300">for ($init; $kondisi; $increment) {
    // kode dieksekusi setiap iterasi
}</pre>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Tabel Perkalian 7:</h3>";
echo "<table border='1' cellpadding='8' style='border-collapse: collapse; width: 100%; max-width: 400px;'>";
echo "<tr style='background: #f1f5f9;'><th>Operasi</th><th>Hasil</th></tr>";

for ($i = 1; $i <= 10; $i++) {
    $hasil = 7 * $i;
    echo "<tr><td>7 x $i</td><td><strong>$hasil</strong></td></tr>";
}

echo "</table>";
?>`,
    codeExplanation: [
      'for ($i = 1; $i <= 10; $i++) menginisialisasi $i = 1, memeriksa $i <= 10, dan menaikkan $i++ di setiap akhir putaran tabel.'
    ],
    challenge: {
      instruction: 'Buat for loop yang mencetak bilangan genap dari 2 sampai 20 dengan increment $i += 2.',
      starterCode: `<?php
for ($i = 2; $i <= 20; $i += 2) {
    echo "$i ";
}
?>`,
      hint: 'Gunakan increment $i += 2.'
    },
    quiz: {
      question: 'Tiga bagian utama di dalam tanda kurung for loop dipisahkan oleh tanda:',
      options: [
        'Titik koma (;)',
        'Koma (,)',
        'Titik dua (:)',
        'Spasi'
      ],
      correctIndex: 0,
      explanation: 'Ketiga parameter for loop (inisialisasi; kondisi; increment) wajib dipisahkan menggunakan tanda titik koma (;).'
    }
  },

  // 34. FOREACH LOOP
  {
    id: 'php-loop-foreach',
    title: 'Foreach Loop',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 34,
    overview: 'Kuasai foreach loop untuk membaca Indexed Array dan Associative Array (key => value) secara efisien dan elegan.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">FOREACH LOOP</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 34 / 36</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📦 Mengiterasi Array dengan foreach</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>foreach</code> adalah cara paling praktis untuk memproses elemen data array tanpa perlu repot mengelola indeks manual.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h4 class="font-bold text-purple-600 dark:text-purple-400 text-sm mb-1">Indexed Array (Hanya Value)</h4>
            <pre class="bg-slate-950 text-slate-200 p-2.5 rounded text-[11px] font-mono">foreach ($items as $val) {
    echo $val;
}</pre>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h4 class="font-bold text-indigo-600 dark:text-indigo-400 text-sm mb-1">Associative Array (Key => Value)</h4>
            <pre class="bg-slate-950 text-slate-200 p-2.5 rounded text-[11px] font-mono">foreach ($user as $key => $val) {
    echo "$key: $val";
}</pre>
          </div>
        </div>
      </div>
    `,
    code: `<?php
// Associative Array Data Profil Pengguna
$profilSiswa = [
    "Nama Lengkap" => "Muhammad Rahmat Fadila",
    "Peran" => "Full-Stack Developer",
    "Status" => "Aktif",
    "Total XP" => "1,450 XP",
    "Kursus Selesai" => "HTML, CSS, JavaScript"
];

echo "<h3>Kartu Profil Pengguna (foreach key => value):</h3>";
echo "<div style='background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 15px;'>";
echo "<table style='width: 100%; border-collapse: collapse;'>";

foreach ($profilSiswa as $kategori => $nilai) {
    echo "<tr style='border-bottom: 1px solid #e2e8f0;'>";
    echo "<td style='padding: 8px; font-weight: bold; color: #475569;'>$kategori</td>";
    echo "<td style='padding: 8px; color: #0f172a;'>$nilai</td>";
    echo "</tr>";
}

echo "</table>";
echo "</div>";
?>`,
    codeExplanation: [
      'foreach ($profilSiswa as $kategori => $nilai) secara otomatis membongkar array menjadi pasangan kunci ($kategori) dan nilainya ($nilai).',
      'Sangat efisien saat membangun tabel dinamis dari hasil kueri database.'
    ],
    challenge: {
      instruction: 'Ulangi array $warna = ["Merah", "Hijau", "Biru"] menggunakan foreach dan cetak setiap warnanya.',
      starterCode: `<?php
$warna = ["Merah", "Hijau", "Biru"];
foreach ($warna as $w) {
    echo "Warna: $w <br>";
}
?>`,
      hint: 'Gunakan foreach ($warna as $w).'
    },
    quiz: {
      question: 'Sintaks mana yang digunakan untuk mendapatkan KUNCI (key) dan NILAI (value) sekaligus pada foreach loop?',
      options: [
        'foreach ($array as $key => $value)',
        'foreach ($array as $value)',
        'for ($key in $array)',
        'while ($array as $key = $value)'
      ],
      correctIndex: 0,
      explanation: 'Sintaks foreach ($array as $key => $value) memungkinkan Anda mengakses nama kunci asosiatif sekaligus isi datanya.'
    }
  },

  // 35. BREAK STATEMENT
  {
    id: 'php-loop-break',
    title: 'Break Statement',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 35,
    overview: 'Pelajari cara menghentikan dan keluar dari perulangan secara paksa menggunakan kata kunci break ketika suatu target kondisi telah ditemukan.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">BREAK</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 35 / 36</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛑 Menghentikan Loop dengan break</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Kata kunci <code>break</code> digunakan untuk langsung keluar dari struktur loop (<code>for</code>, <code>foreach</code>, <code>while</code>, <code>do...while</code>) tanpa menunggu kondisi loop berakhir secara alami.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$antrian = [101, 102, 103, 104, 105, 106, 107, 108];
$targetNomor = 104;

echo "<h3>Proses Pencarian Antrian:</h3>";

foreach ($antrian as $nomor) {
    echo "Memeriksa tiket nomor: <strong>#$nomor</strong>...<br>";
    
    if ($nomor === $targetNomor) {
        echo "<div style='color: green; font-weight: bold; margin-top: 8px;'>🎯 Nomor tiket #$targetNomor DITEMUKAN! Menghentikan pencarian (break).</div>";
        break; // Langsung hentikan loop, abaikan sisa antrian 105-108
    }
}
?>`,
    codeExplanation: [
      'Ketika $nomor === 104, perintah break dieksekusi.',
      'Sisa elemen array (105, 106, 107, 108) tidak diproses lagi, sehingga menghemat memori dan waktu eksekusi server.'
    ],
    challenge: {
      instruction: 'Buat loop 1 sampai 10, namun jika angka bernilai 5, hentikan loop dengan break.',
      starterCode: `<?php
for ($i = 1; $i <= 10; $i++) {
    if ($i === 5) {
        echo "Stop di $i!";
        break;
    }
    echo "$i ";
}
?>`,
      hint: 'Ketik break; di dalam blok if.'
    },
    quiz: {
      question: 'Apa fungsi utama dari kata kunci break di dalam sebuah perulangan?',
      options: [
        'Langsung menghentikan perulangan dan melompat keluar dari blok loop',
        'Menghentikan seluruh server web',
        'Hanya melewati satu iterasi saja',
        'Menghapus isi array'
      ],
      correctIndex: 0,
      explanation: 'break segera mengakhiri eksekusi perulangan saat itu juga dan melanjutkan eksekusi kode setelah blok loop.'
    }
  },

  // 36. CONTINUE STATEMENT
  {
    id: 'php-loop-continue',
    title: 'Continue Statement',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 36,
    overview: 'Pelajari cara melewati (skip) iterasi saat ini dan langsung melanjutkan ke putaran perulangan berikutnya menggunakan kata kunci continue.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CONTINUE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 36 / 36</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⏭️ Melewati Iterasi dengan continue</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Berbeda dengan <code>break</code> yang membatalkan seluruh sisa loop, <code>continue</code> hanya <strong>melewati putaran iterasi saat ini</strong> dan langsung melompat ke iterasi berikutnya.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Daftar Angka Ganjil (Melewati Genap dengan continue):</h3>";

for ($i = 1; $i <= 10; $i++) {
    // Jika angka genap, lewati (skip) iterasi ini
    if ($i % 2 === 0) {
        continue;
    }
    
    echo "<span style='display: inline-block; padding: 4px 10px; margin: 3px; background: #fef08a; border: 1px solid #fde047; border-radius: 6px; font-weight: bold;'>$i</span>";
}
?>`,
    codeExplanation: [
      'Ketika $i adalah bilangan genap (2, 4, 6, 8, 10), kondisi ($i % 2 === 0) bernilai true dan continue dipanggil.',
      'Perintah echo di bawahnya dilewati untuk angka genap tersebut, dan loop langsung berlanjut ke angka berikutnya.'
    ],
    challenge: {
      instruction: 'Gunakan continue untuk melewati angka 3 saat mengulang angka 1 sampai 5.',
      starterCode: `<?php
for ($i = 1; $i <= 5; $i++) {
    if ($i === 3) {
        continue;
    }
    echo "$i ";
}
?>`,
      hint: 'Jika $i === 3, panggil continue;'
    },
    quiz: {
      question: 'Apa perbedaan mendasar antara perintah break dan continue di dalam loop?',
      options: [
        'break menghentikan seluruh perulangan, sedangkan continue hanya melewati iterasi saat ini dan lanjut ke putaran berikutnya',
        'continue menghentikan seluruh program, sedangkan break hanya jeda sejenak',
        'Keduanya memiliki fungsi yang identik tanpa perbedaan',
        'break hanya bisa digunakan di switch'
      ],
      correctIndex: 0,
      explanation: 'break memutus total perulangan, sementara continue melompati sisa kode di iterasi saat ini dan lanjut ke iterasi berikutnya.'
    }
  }
];

module.exports = phpPart2ControlFlow;
