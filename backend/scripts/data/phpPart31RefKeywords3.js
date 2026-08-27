// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (KEYWORDS PART 3: 327-344)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart31RefKeywords3 = [
  // 327. FN
  {
    id: 'php-kw-fn',
    title: 'PHP Keyword: fn (Arrow Functions)',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 327,
    overview: 'Kuasai keyword fn: mendeklarasikan fungsi ringkas satu baris (Arrow Functions) di PHP 7.4+ dengan penangkapan variabel scope luar secara otomatis (Auto-Capture by Value).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PHP KEYWORDS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 327 / 361</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏹 Fungsi Panah Ringkas (fn)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>fn(parameter) => ekspresi</code> menyediakan sintaks singkat untuk closure satu baris. Keunggulan utamanya: <strong>otomatis menangkap variabel dari scope induk</strong> tanpa perlu menulis klausul <code>use ($var)</code> secara manual.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$faktorPengali = 10;

// Arrow Function: otomatis membaca $faktorPengali dari scope luar
$kali = fn(int $angka): int => $angka * $faktorPengali;

$angkaList = [1, 2, 3, 4, 5];
$hasilKali = array_map(fn($n) => $n * 2, $angkaList);

echo "<h3>Hasil Penggunaan Keyword fn:</h3>";
echo "<p>5 dikali faktor ($faktorPengali) = <strong style='color: #059669; font-size: 18px;'>" . $kali(5) . "</strong></p>";
echo "<p>Array Hasil array_map: <code>[" . implode(", ", $hasilKali) . "]</code></p>";
?>`,
    codeExplanation: [
      'fn($angka) => $angka * $faktorPengali secara otomatis menangkap $faktorPengali by-value.',
      'Sangat bersih untuk callback array_map, array_filter, dan usort.'
    ],
    challenge: {
      instruction: 'Buat arrow function $kuadrat = fn($n) => $n * $n; dan cetak $kuadrat(4).',
      starterCode: `<?php
$kuadrat = fn($n) => $n * $n;
echo "Kuadrat 4: " . $kuadrat(4);
?>`,
      hint: 'Panggil $kuadrat(4).'
    },
    quiz: {
      question: 'Apa keunggulan utama Arrow Function `fn()` dibandingkan Anonymous Function `function()` tradisional?',
      options: [
        'Variabel dari scope luar otomatis ditangkap secara implisit (by-value) tanpa perlu menulis klausul `use (...)`',
        'Arrow function bisa berjalan tanpa PHP runtime',
        'Arrow function bisa multi-baris hingga 100 baris',
        'Tidak ada bedanya'
      ],
      correctIndex: 0,
      explanation: 'fn() otomatis melakukan auto-capture variabel scope luar by-value untuk ekspresi satu baris.'
    }
  },

  // 328. FOR
  {
    id: 'php-kw-for',
    title: 'PHP Keyword: for',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 328,
    overview: 'Kuasai keyword for: mengeksekusi perulangan terhitung (Count-Controlled Loop) dengan inisialisasi, kondisi terminasi, dan ekspresi increment/decrement.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">FOR LOOP</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 328 / 361</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔁 Perulangan Terhitung (for)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>for ($init; $kondisi; $step)</code> adalah struktur loop dasar saat jumlah putaran iterasi sudah diketahui secara pasti.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Tabel Perkalian 7 (for loop):</h3>";
echo "<ul>";
for ($i = 1; $i <= 5; $i++) {
    $hasil = $i * 7;
    echo "<li>$i x 7 = <strong style='color: #4f46e5;'>$hasil</strong></li>";
}
echo "</ul>";
?>`,
    codeExplanation: [
      'for ($i=1; $i<=5; $i++) mengulang tepat 5 kali dari indeks 1 sampai 5.'
    ],
    challenge: {
      instruction: 'Cetak angka genap 2 sampai 8 menggunakan for ($i = 2; $i <= 8; $i += 2).',
      starterCode: `<?php
for ($i = 2; $i <= 8; $i += 2) {
    echo $i . " ";
}
?>`,
      hint: 'Jalankan for loop dengan step $i += 2.'
    },
    quiz: {
      question: 'Bagian manakah pada `for ($a; $b; $c)` yang dievaluasi di awal setiap putaran iterasi untuk menentukan apakah loop terus berjalan?',
      options: [
        'Bagian kedua ($b: kondisi boolean terminasi)',
        'Bagian pertama ($a: inisialisasi)',
        'Bagian ketiga ($c: increment)',
        'Semua bersamaan'
      ],
      correctIndex: 0,
      explanation: 'Bagian tengah ($b) adalah ekspresi kondisi penentu kelanjutan perulangan.'
    }
  },

  // 329. FOREACH
  {
    id: 'php-kw-foreach',
    title: 'PHP Keyword: foreach',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 329,
    overview: 'Kuasai keyword foreach: konstruksi perulangan khusus dan paling aman untuk mengiterasi seluruh elemen Array atau Objek Iterator tanpa perlu mengelola index counter manual.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">FOREACH ITERATOR</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 329 / 361</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📦 Perulangan Koleksi Elemen (foreach)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>foreach ($array as $key => $value)</code> mengiterasi array asosiatif maupun indexed array secara aman tanpa risiko <em>Index Out of Bounds</em>. Mendukung modifikasi langsung nilai elemen via referensi <code>&$value</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$mahasiswa = [
    "NIM001" => ["nama" => "Budi Santoso", "jurusan" => "Informatika"],
    "NIM002" => ["nama" => "Siti Rahma", "jurusan" => "Sistem Informasi"]
];

echo "<h3>Iterasi Array Asosiatif (foreach):</h3>";
echo "<ul>";
foreach ($mahasiswa as $nim => $data) {
    echo "<li><strong>$nim</strong>: {$data['nama']} ({$data['jurusan']})</li>";
}
echo "</ul>";
?>`,
    codeExplanation: [
      'foreach memetakan key ($nim) dan value ($data) secara otomatis pada setiap putaran.'
    ],
    challenge: {
      instruction: 'Iterasikan array harga dan kalikan dua nilainya dengan foreach ($prices as &$p).',
      starterCode: `<?php
$prices = [100, 200];
foreach ($prices as &$p) {
    $p *= 2;
}
unset($p);
echo implode(", ", $prices);
?>`,
      hint: 'Gunakan foreach dengan referensi &$p.'
    },
    quiz: {
      question: 'Mengapa praktik terbaik merekomendasikan memanggil `unset($val)` setelah melakukan `foreach ($arr as &$val)` by-reference?',
      options: [
        'Untuk memutus pointer referensi agar modifikasi variabel $val berikutnya di kode tidak secara sengaja mengubah elemen terakhir array',
        'Untuk menghapus seluruh array',
        'Untuk mengosongkan RAM server',
        'Hanya aturan gaya penulisan'
      ],
      correctIndex: 0,
      explanation: 'Unset melepaskan referensi variabel penampung agar terhindar dari bug mutasi array yang tidak disengaja.'
    }
  },

  // 330. FUNCTION
  {
    id: 'php-kw-function',
    title: 'PHP Keyword: function',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 330,
    overview: 'Kuasai keyword function: mendeklarasikan fungsi bernama kustom, fungsi anonim (Closure), dan metode di dalam kelas OOP dengan deklarasi tipe data ketat.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">FUNCTION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 330 / 361</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚙️ Deklarasi Fungsi & Method (function)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>function namaFungsi(tipe $param): returnType</code> membungkus blok logika yang dapat digunakan kembali. PHP 8.x mendukung fitur modern seperti <em>Named Arguments</em>, <em>Union Types</em> (<code>string|int</code>), dan <em>Intersection Types</em>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Deklarasi fungsi modern dengan Union Return Type
function formatHarga(float $angka, string $mataUang = "IDR"): string {
    if ($mataUang === "IDR") {
        return "Rp " . number_format($angka, 0, ',', '.');
    }
    return "$mataUang " . number_format($angka, 2);
}

echo "<h3>Hasil Penggunaan function:</h3>";
echo "<p>Format IDR: <strong style='color: #059669;'>" . formatHarga(1500000) . "</strong></p>";
echo "<p>Format USD (Named Arguments): <strong>" . formatHarga(angka: 99.5, mataUang: "USD") . "</strong></p>";
?>`,
    codeExplanation: [
      'function formatHarga(...) mengenkapsulasi logika pemformatan angka.',
      'Mendukung parameter default dan pemanggilan berbasis nama parameter (Named Arguments).'
    ],
    challenge: {
      instruction: 'Buat fungsi hitungLuasPersegi(int $sisi): int dan cetak hasilnya.',
      starterCode: `<?php
function hitungLuasPersegi(int $sisi): int {
    return $sisi * $sisi;
}
echo "Luas: " . hitungLuasPersegi(6);
?>`,
      hint: 'Panggil hitungLuasPersegi(6).'
    },
    quiz: {
      question: 'Fitur pemanggilan parameter baru apakah yang diperkenalkan di PHP 8.0 pada fungsi (misal: `fn(nama: "Budi", umur: 25)`)?',
      options: [
        'Named Arguments (Argumen Bernama)',
        'Arrow Parameters',
        'Optional Destructuring',
        'Dynamic Arguments'
      ],
      correctIndex: 0,
      explanation: 'Named Arguments memungkinkan pengiriman argumen ke fungsi berdasarkan nama parameternya tanpa terikat urutan posisi.'
    }
  },

  // 331. GLOBAL
  {
    id: 'php-kw-global',
    title: 'PHP Keyword: global',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 331,
    overview: 'Kuasai keyword global: mengimpor variabel dari ruang lingkup global (Global Scope) ke dalam ruang lingkup lokal fungsi.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SCOPE BINDING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 331 / 361</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌐 Mengakses Variabel Global (global)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Secara default variabel di luar fungsi tidak dapat diakses di dalam fungsi lokal PHP. Keyword <code>global $variabel;</code> (atau array superglobal <code>$GLOBALS['variabel']</code>) mengikat variabel lokal ke memori global.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$appTitle = "DevGrow LMS Pro";
$hitCounter = 0;

function tambahPengunjung(): void {
    // Impor variabel dari scope global
    global $appTitle, $hitCounter;
    
    $hitCounter++;
    echo "<p>Selamat datang di <strong>$appTitle</strong> (Pengunjung ke: <strong style='color: #059669;'>$hitCounter</strong>)</p>";
}

echo "<h3>Hasil Penggunaan Keyword global:</h3>";
tambahPengunjung();
tambahPengunjung();
?>`,
    codeExplanation: [
      'global $appTitle, $hitCounter menghubungkan variabel lokal dengan variabel di luar fungsi.'
    ],
    challenge: {
      instruction: 'Akses variabel global $config di dalam fungsi.',
      starterCode: `<?php
$config = "Database Aktif";
function cekStatus() {
    global $config;
    return $config;
}
echo cekStatus();
?>`,
      hint: 'Gunakan global $config; di dalam fungsi.'
    },
    quiz: {
      question: 'Array superglobal apakah yang secara otomatis menampung seluruh variabel di global scope PHP?',
      options: [
        '$GLOBALS',
        '$_GLOBAL',
        '$_SERVER',
        '$_ENV'
      ],
      correctIndex: 0,
      explanation: '$GLOBALS adalah array asosiatif bawaan PHP yang memetakan seluruh variabel global scope.'
    }
  },

  // 332. IF
  {
    id: 'php-kw-if',
    title: 'PHP Keyword: if',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 332,
    overview: 'Kuasai keyword if: struktur kontrol percabangan utama untuk mengeksekusi blok kode hanya jika kondisi boolean menghasilkan true.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CONDITIONAL IF</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 332 / 361</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔀 Percabangan Kondisional (if)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>if (kondisi)</code> mengevaluasi ekspresi ke nilai boolean. Jika <code>true</code>, blok kode di dalam kurung kurawal akan dijalankan.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$stokBarang = 5;

echo "<h3>Hasil Pengujian if:</h3>";
if ($stokBarang > 0) {
    echo "<p style='color: green;'><strong>✓ Produk tersedia untuk dipesan ($stokBarang unit tersisa).</strong></p>";
}
?>`,
    codeExplanation: [
      'Kondisi $stokBarang > 0 bernilai true sehingga pesan dicetak.'
    ],
    challenge: {
      instruction: 'Cek apakah $skor >= 70 dengan if statement.',
      starterCode: `<?php
$skor = 85;
if ($skor >= 70) {
    echo "Lulus Ujian";
}
?>`,
      hint: 'Jalankan if ($skor >= 70).'
    },
    quiz: {
      question: 'Tipe data apakah yang dihasilkan oleh evaluasi ekspresi kondisi di dalam `if (...)`?',
      options: [
        'Boolean (true atau false)',
        'String',
        'Integer saja',
        'Array'
      ],
      correctIndex: 0,
      explanation: 'Ekspresi dalam tanda kurung if selalu dievaluasi menjadi nilai boolean.'
    }
  },

  // 333. IMPLEMENTS
  {
    id: 'php-kw-implements',
    title: 'PHP Keyword: implements',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 333,
    overview: 'Kuasai keyword implements: menghubungkan kelas ke satu atau beberapa Interface (Multiple Interface Implementation) untuk menjamin pemenuhan kontrak method.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">INTERFACE CONTRACT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 333 / 361</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📐 Mengimplementasikan Interface (implements)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>class Child implements InterfaceA, InterfaceB</code> mewajibkan kelas membuat isi method konkrit dari interface. Berbeda dengan pewarisan class yang hanya mendukung single inheritance, 1 kelas PHP dapat meng-<code>implements</code> banyak interface sekaligus.
          </p>
        </div>
      </div>
    `,
    code: `<?php
interface Loggable {
    public function log(string $pesan): void;
}

interface Exportable {
    public function exportJson(): string;
}

// Satu kelas mengimplementasikan DUA interface sekaligus
class AuditService implements Loggable, Exportable {
    private array $logs = [];

    public function log(string $pesan): void {
        $this->logs[] = "[" . date("H:i:s") . "] " . $pesan;
    }

    public function exportJson(): string {
        return json_encode($this->logs);
    }
}

$audit = new AuditService();
$audit->log("User login berhasil.");
$audit->log("Transaksi checkout selesai.");

echo "<h3>Hasil Penggunaan implements:</h3>";
echo "<pre style='background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 8px;'>";
echo $audit->exportJson();
echo "</pre>";
?>`,
    codeExplanation: [
      'AuditService memenuhi kontrak method log() dan exportJson() dari kedua interface.',
      'Pondasi prinsip SOLID (Interface Segregation & Dependency Inversion).'
    ],
    challenge: {
      instruction: 'Implementasikan interface Cetak pada class Laporan.',
      starterCode: `<?php
interface Cetak { public function printDoc(): string; }
class Laporan implements Cetak {
    public function printDoc(): string { return "Dokumen Siap"; }
}
$l = new Laporan();
echo $l->printDoc();
?>`,
      hint: 'Gunakan class Laporan implements Cetak.'
    },
    quiz: {
      question: 'Apakah satu kelas di PHP diizinkan mengimplementasikan lebih dari satu interface sekaligus?',
      options: [
        'Ya, sebuah kelas dapat meng-implements banyak interface yang dipisahkan dengan tanda koma',
        'Tidak, hanya boleh tepat 1 interface',
        'Maksimal 2 interface',
        'Hanya jika menggunakan abstract class'
      ],
      correctIndex: 0,
      explanation: 'PHP mendukung Multiple Interface Implementation.'
    }
  },

  // 334. INCLUDE
  {
    id: 'php-kw-include',
    title: 'PHP Keyword: include',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 334,
    overview: 'Kuasai pernyataan include: menyertakan dan mengevaluasi file PHP eksternal (jika file tidak ditemukan, hanya memicu E_WARNING dan skrip TETAP LANJUT berjalan).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">FILE INCLUSION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 334 / 361</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📥 Menyertakan Berkas Opsional (include)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>include 'header.php';</code> menyisipkan isi file lain ke dalam skrip. <strong>Karakteristik penting:</strong> Jika file yang di-include tidak ditemukan, PHP hanya mengeluarkan peringatan <code>Warning</code> dan skrip halaman web tetap terus dieksekusi sampai selesai (cocok untuk modul non-kritis seperti widget banner iklan).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$widgetFile = __DIR__ . "/banner_promo.php";
file_put_contents($widgetFile, "<?php echo '<div style=\"background: #dcfce7; padding: 10px; border-radius: 6px; color: #166534;\">🎉 Promo Spesial Belajar PHP 8!</div>'; ?>");

echo "<h3>Hasil Penggunaan include:</h3>";
include $widgetFile;

unlink($widgetFile);
?>`,
    codeExplanation: [
      'include menyisipkan file widget_promo.php secara dinamis.',
      'Jika file tidak ada, PHP tetap melanjutkan eksekusi ke baris berikutnya.'
    ],
    challenge: {
      instruction: 'Pahami perbedaan include vs require.',
      starterCode: `<?php
echo "include menghasilkan Warning jika file tidak ada, skrip tetap berjalan.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Apa tingkatan error yang dihasilkan oleh pernyataan `include` jika file yang dituju ternyata TIDAK DITEMUKAN di server?',
      options: [
        'E_WARNING (peringatan saja, skrip tetap terus berjalan)',
        'E_ERROR / Fatal Error (skrip langsung berhenti seketika)',
        'E_NOTICE',
        'E_DEPRECATED'
      ],
      correctIndex: 0,
      explanation: 'include hanya menghasilkan Warning sehingga eksekusi halaman tidak mati.'
    }
  },

  // 335. INCLUDE_ONCE
  {
    id: 'php-kw-include-once',
    title: 'PHP Keyword: include_once',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 335,
    overview: 'Kuasai keyword include_once: menyertakan file hanya SEKALI SAJA selama siklus request untuk mencegah tabrakan deklarasi ulang fungsi/kelas (Cannot redeclare error).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">INCLUDE ONCE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 335 / 361</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛡️ Menyertakan Berkas Tepat Satu Kali (include_once)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>include_once 'helper.php';</code> memeriksa apakah file tersebut sudah pernah disertakan sebelumnya. Jika sudah, PHP akan mengabaikan panggilan kedua secara otomatis. Mencegah fatal error <em>"Cannot redeclare function helper()"</em>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$helperFile = __DIR__ . "/math_helper.php";
file_put_contents($helperFile, "<?php function kaliDua(\$n) { return \$n * 2; } ?>");

// Panggil include_once dua kali berturut-turut
include_once $helperFile;
include_once $helperFile; // Aman: Diabaikan otomatis, tidak error redeclare!

echo "<h3>Hasil Penggunaan include_once:</h3>";
echo "<p>Hasil kaliDua(25) = <strong style='color: #059669;'>" . kaliDua(25) . "</strong></p>";
echo "<p style='color: green;'>✓ Aman dari error 'Cannot redeclare function'.</p>";

unlink($helperFile);
?>`,
    codeExplanation: [
      'include_once mendeteksi bahwa file math_helper.php sudah dimuat sehingga pemanggilan kedua dilewati dengan aman.'
    ],
    challenge: {
      instruction: 'Pahami fungsi proteksi include_once.',
      starterCode: `<?php
echo "include_once mencegah duplikasi load file.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Error fatal apakah yang berhasil dicegah dengan menggunakan `include_once` alih-alih `include` biasa?',
      options: [
        'Fatal Error: Cannot redeclare function ... atau Cannot declare class ... because the name is already in use',
        'Database connection error',
        'Syntax error',
        'Out of memory error'
      ],
      correctIndex: 0,
      explanation: 'include_once mencegah deklarasi ulang fungsi atau class ganda saat file dimuat berkali-kali.'
    }
  },

  // 336. INSTANCEOF
  {
    id: 'php-kw-instanceof',
    title: 'PHP Keyword: instanceof',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 336,
    overview: 'Kuasai operator instanceof: memeriksa apakah suatu variabel objek merupakan instansi dari Kelas tertentu, kelas turunan (inheritance), atau mengimplementasikan Interface tertentu.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TYPE INSPECTOR</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 336 / 361</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Memeriksa Tipe Objek (instanceof)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$obj instanceof ClassName</code> mengembalikan boolean <code>true</code> jika objek dibuat dari class tersebut, merupakan subclass dari parent class tersebut, atau mengimplementasikan interface tersebut. Sangat krusial dalam polymorfisme dan error handling.
          </p>
        </div>
      </div>
    `,
    code: `<?php
interface AuthInterface {}
class BaseUser {}
class AdminUser extends BaseUser implements AuthInterface {}

$admin = new AdminUser();

echo "<h3>Hasil Pengujian Operator instanceof:</h3>";
echo "<ul>";
echo "<li>Apakah \$admin adalah AdminUser: " . ($admin instanceof AdminUser ? "<strong style='color: green;'>Ya (true)</strong>" : "Bukan") . "</li>";
echo "<li>Apakah \$admin mewarisi BaseUser: " . ($admin instanceof BaseUser ? "<strong style='color: green;'>Ya (true)</strong>" : "Bukan") . "</li>";
echo "<li>Apakah \$admin mengimplementasikan AuthInterface: " . ($admin instanceof AuthInterface ? "<strong style='color: green;'>Ya (true)</strong>" : "Bukan") . "</li>";
echo "<li>Apakah \$admin adalah Exception: " . ($admin instanceof Exception ? "Ya" : "<strong style='color: red;'>Bukan (false)</strong>") . "</li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'instanceof mengenali relasi kelas langsung, parent class, dan interface implementation.'
    ],
    challenge: {
      instruction: 'Periksa apakah objek $date adalah instansi dari DateTime dengan $date instanceof DateTime.',
      starterCode: `<?php
$date = new DateTime();
echo ($date instanceof DateTime) ? "Objek DateTime" : "Bukan";
?>`,
      hint: 'Gunakan ($date instanceof DateTime).'
    },
    quiz: {
      question: 'Apa hasil kembalian dari `$admin instanceof BaseUser` jika class AdminUser meng-extends class BaseUser?',
      options: [
        'Boolean true (karena relasi pewarisan inheritance dikenali)',
        'Boolean false',
        'Null',
        'String nama class'
      ],
      correctIndex: 0,
      explanation: 'instanceof mengevaluasi true untuk kelas turunan dari parent class.'
    }
  },

  // 337. INSTEADOF
  {
    id: 'php-kw-insteadof',
    title: 'PHP Keyword: insteadof',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 337,
    overview: 'Kuasai keyword insteadof: menyelesaikan konflik tabrakan nama method saat satu kelas menggunakan beberapa Trait yang memiliki nama method yang sama (Trait Conflict Resolution).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TRAIT CONFLICT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 337 / 361</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚖️ Resolusi Konflik Trait (insteadof)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Jika dua Trait memiliki nama method yang persis sama (misal <code>kirimNotifikasi()</code>), PHP akan melempar Fatal Error konflik. Keyword <code>insteadof</code> menentukan secara eksplisit method dari Trait mana yang harus dipilih: <code>TraitA::kirim insteadof TraitB;</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
trait NotifikasiEmail {
    public function kirim() {
        return "Mengirim Notifikasi via EMAIL";
    }
}

trait NotifikasiWhatsapp {
    public function kirim() {
        return "Mengirim Notifikasi via WHATSAPP";
    }
}

class OrderController {
    // Selesaikan konflik: Gunakan method kirim milik NotifikasiWhatsapp
    use NotifikasiEmail, NotifikasiWhatsapp {
        NotifikasiWhatsapp::kirim insteadof NotifikasiEmail;
        NotifikasiEmail::kirim as kirimViaEmail; // Alias untuk method kedua
    }
}

$order = new OrderController();

echo "<h3>Hasil Resolusi Konflik Trait (insteadof):</h3>";
echo "<p>Method Utama (kirim): <strong style='color: #059669;'>" . $order->kirim() . "</strong></p>";
echo "<p>Method Alias (kirimViaEmail): <strong>" . $order->kirimViaEmail() . "</strong></p>";
?>`,
    codeExplanation: [
      'NotifikasiWhatsapp::kirim insteadof NotifikasiEmail menyelesaikan konflik duplikasi method kirim().',
      'NotifikasiEmail::kirim as kirimViaEmail memberikan alias agar method email tetap bisa dipanggil.'
    ],
    challenge: {
      instruction: 'Pahami sintaks resolusi konflik Trait dengan insteadof.',
      starterCode: `<?php
echo "TraitA::action insteadof TraitB;";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Kapan keyword `insteadof` wajib digunakan di PHP?',
      options: [
        'Ketika sebuah class menggunakan dua atau lebih Trait yang memiliki nama method yang sama untuk menentukan method Trait mana yang diprioritaskan',
        'Saat inheritance database',
        'Untuk membuat interface',
        'Hanya di switch-case'
      ],
      correctIndex: 0,
      explanation: 'insteadof digunakan khusus untuk Trait Conflict Resolution.'
    }
  },

  // 338. INTERFACE
  {
    id: 'php-kw-interface',
    title: 'PHP Keyword: interface',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 338,
    overview: 'Kuasai keyword interface: mendefinisikan kontrak murni (Pure Contract) yang berisi daftar signature method publik dan konstanta tanpa implementasi kode tubuh.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">INTERFACE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 338 / 361</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📐 Kontrak Antarmuka Murni (interface)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>interface NamaInterface</code> hanya mendefinisikan nama method publik, parameter, return type, dan konstanta. Seluruh kelas yang meng-<code>implements</code> interface ini terikat secara hukum kompilasi untuk menyediakan kode tubuh method tersebut.
          </p>
        </div>
      </div>
    `,
    code: `<?php
interface PaymentInterface {
    public function bayar(float $nominal): bool;
}

class QrisPayment implements PaymentInterface {
    public function bayar(float $nominal): bool {
        echo "<p style='color: green;'>✓ Pembayaran QRIS sebesar Rp " . number_format($nominal, 0, ',', '.') . " Berhasil!</p>";
        return true;
    }
}

echo "<h3>Hasil Penggunaan interface:</h3>";
$bayar = new QrisPayment();
$bayar->bayar(75000);
?>`,
    codeExplanation: [
      'interface PaymentInterface menentukan kontrak method bayar(float $nominal): bool.',
      'QrisPayment mengimplementasikan method tersebut secara konkrit.'
    ],
    challenge: {
      instruction: 'Definisikan interface NotifInterface dengan method send().',
      starterCode: `<?php
interface NotifInterface {
    public function send(string $msg): void;
}
class Sms implements NotifInterface {
    public function send(string $msg): void { echo "SMS: $msg"; }
}
$s = new Sms();
$s->send("Kode OTP: 1234");
?>`,
      hint: 'Gunakan interface NotifInterface.'
    },
    quiz: {
      question: 'Manakah visibilitas method yang DIIZINKAN di dalam sebuah `interface` PHP?',
      options: [
        'Hanya `public` (semua method di interface wajib bertipe public)',
        'Bisa private dan protected',
        'Hanya protected',
        'Bebas apapun'
      ],
      correctIndex: 0,
      explanation: 'Method yang dideklarasikan di dalam interface wajib memiliki visibilitas publik.'
    }
  },

  // 339. ISSET
  {
    id: 'php-kw-isset',
    title: 'PHP Keyword: isset',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 339,
    overview: 'Kuasai konstruksi bahasa isset: memeriksa apakah suatu variabel telah dideklarasikan dan TIDAK bernilai NULL.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">VARIABLE CHECK</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 339 / 361</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Memeriksa Inisialisasi Variabel (isset)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>isset($var1, $var2)</code> mengembalikan <code>true</code> hanya jika variabel ada DAN nilainya bukan <code>null</code>. Berbeda dengan <code>empty()</code>, angka <code>0</code> atau string <code>"0"</code> dianggap <strong>SET (true)</strong> oleh <code>isset()</code>!
          </p>
        </div>
      </div>
    `,
    code: `<?php
$data = [
    "user" => "rahmat",
    "skor" => 0,
    "foto" => null
];

echo "<h3>Hasil Pengujian isset():</h3>";
echo "<ul>";
echo "<li>isset(\$data['user']): " . (isset($data['user']) ? "<strong style='color: green;'>Ada (true)</strong>" : "Tidak") . "</li>";
echo "<li>isset(\$data['skor']) [Nilai 0]: " . (isset($data['skor']) ? "<strong style='color: green;'>Ada (true, angka 0 bukan null)</strong>" : "Tidak") . "</li>";
echo "<li>isset(\$data['foto']) [Nilai NULL]: " . (isset($data['foto']) ? "Ada" : "<strong style='color: red;'>False (Bernilai NULL)</strong>") . "</li>";
echo "<li>isset(\$data['alamat']) [Kunci Belum Ada]: " . (isset($data['alamat']) ? "Ada" : "<strong style='color: red;'>False (Kunci tidak ada)</strong>") . "</li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'isset() mengembalikan true untuk angka 0, string "0", dan array kosong [].',
      'isset() mengembalikan false hanya jika variabel belum dibuat atau bernilai persis NULL.'
    ],
    challenge: {
      instruction: 'Periksa keberadaan key "token" di array $auth dengan isset($auth[\'token\']).',
      starterCode: `<?php
$auth = ["token" => "abc123xyz"];
echo isset($auth['token']) ? "Token Ada" : "Belum Login";
?>`,
      hint: 'Panggil isset($auth[\'token\']).'
    },
    quiz: {
      question: 'Berapakah hasil dari `isset($x)` jika `$x = 0;`?',
      options: [
        'Boolean true (karena angka 0 adalah nilai yang sah dan bukan null)',
        'Boolean false',
        'Null',
        'Error'
      ],
      correctIndex: 0,
      explanation: 'isset hanya memeriksa apakah variabel ada dan tidak null (angka 0 dianggap ada/true).'
    }
  },

  // 340. LIST
  {
    id: 'php-kw-list',
    title: 'PHP Keyword: list()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 340,
    overview: 'Kuasai konstruksi bahasa list: membongkar (Destructuring) elemen Array langsung ke sekumpulan variabel independen (dan padanan sintaks modern [$a, $b] = $arr).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ARRAY DESTRUCTURING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 340 / 361</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📦 Destrukturisasi Array (list)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>list($a, $b, $c) = $array</code> (atau sintaks modern <code>[$a, $b, $c] = $array</code> sejak PHP 7.1) mengekstrak nilai-nilai array secara instan ke dalam variabel lokal.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$koordinat = [-6.2088, 106.8456];

// 1. Menggunakan konstruksi list() tradisional
list($latitude, $longitude) = $koordinat;

// 2. Menggunakan Destructuring Array Modern PHP 7.1+
[$latModern, $longModern] = $koordinat;

// 3. Swap / Tukar Nilai Variabel Instan Tanpa Variabel Sementara ($temp)
$x = 10;
$y = 20;
[$x, $y] = [$y, $x]; // Nilai x jadi 20, y jadi 10

echo "<h3>Hasil Penggunaan list & Destructuring:</h3>";
echo "<p>Latitude: <strong>$latitude</strong>, Longitude: <strong>$longitude</strong></p>";
echo "<p>Tukar Variabel (Swap): x = <strong style='color: green;'>$x</strong>, y = <strong style='color: green;'>$y</strong></p>";
?>`,
    codeExplanation: [
      'list($lat, $long) = $arr memecah elemen array 0 dan 1 ke variabel lokal.',
      'Sintaks [$x, $y] = [$y, $x] menukar nilai 2 variabel dalam 1 baris kode elegan.'
    ],
    challenge: {
      instruction: 'Bongkar array [100, 200] ke variabel $lebar dan $tinggi dengan list($lebar, $tinggi).',
      starterCode: `<?php
$dimensi = [100, 200];
list($lebar, $tinggi) = $dimensi;
echo "Dimensi: $lebar x $tinggi";
?>`,
      hint: 'Gunakan list($lebar, $tinggi) = $dimensi;.'
    },
    quiz: {
      question: 'Sintaks modern apakah di PHP 7.1+ yang merupakan padanan singkat dari `list($a, $b) = $arr`?',
      options: [
        '`[$a, $b] = $arr;`',
        '`{$a, $b} = $arr;`',
        '`($a, $b) = $arr;`',
        '`array($a, $b) = $arr;`'
      ],
      correctIndex: 0,
      explanation: 'Sintaks tanda kurung siku pendek `[$a, $b] = $arr` diperkenalkan di PHP 7.1.'
    }
  },

  // 341. NAMESPACE
  {
    id: 'php-kw-namespace',
    title: 'PHP Keyword: namespace',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 341,
    overview: 'Kuasai keyword namespace: mengisolasi dan mengelompokkan kode ke dalam ruang nama virtual untuk mencegah tabrakan nama class/fungsi (PSR-4 Autoloading).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PSR-4 NAMESPACE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 341 / 361</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📦 Ruang Nama Virtual (namespace)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>namespace App\\Services\\Payment;</code> mendeklarasikan paket ruang nama file. Mengatasi masalah name collision saat dua library Composer pihak ketiga memiliki nama class yang sama (misal <code>User</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
namespace App\\Models;

class User {
    public string $nama = "Admin DevGrow";
}

// Akses class di dalam namespace yang sama
$user = new User();

echo "<h3>Hasil Penggunaan Keyword namespace:</h3>";
echo "<p>User Name: <strong>{$user->nama}</strong></p>";
echo "<p>Nama Lengkap FQCN: <strong style='color: #4f46e5;'>" . User::class . "</strong> (App\\\\Models\\\\User)</p>";
?>`,
    codeExplanation: [
      'namespace App\\Models mengelompokkan class User ke dalam folder virtual App\\Models.',
      'User::class menghasilkan string "App\\Models\\User".'
    ],
    challenge: {
      instruction: 'Pahami struktur penempatan namespace di baris awal skrip.',
      starterCode: `<?php
namespace App\\Controllers;
class Home { public string $msg = "Home Page"; }
$h = new Home();
echo $h->msg;
?>`,
      hint: 'Jalankan skrip ber-namespace.'
    },
    quiz: {
      question: 'Standar interoperabilitas PHP apakah (PHP-FIG) yang memetakan namespace direktori ke class autoloader Composer?',
      options: [
        'PSR-4 (Autoloading Standard)',
        'PSR-1',
        'PSR-7',
        'PSR-12'
      ],
      correctIndex: 0,
      explanation: 'PSR-4 adalah standar resmi pemetaan namespace ke struktur direktori filesystem.'
    }
  },

  // 342. NEW
  {
    id: 'php-kw-new',
    title: 'PHP Keyword: new',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 342,
    overview: 'Kuasai keyword new: menginstansiasi objek baru dari sebuah Kelas (Class Instantiation) dan membuat Anonymous Class on-the-fly.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">INSTANTIATION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 342 / 361</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">✨ Menginstansiasi Objek (new)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$obj = new ClassName($arg1, $arg2)</code> mengalokasikan memori untuk objek baru dan otomatis mengeksekusi constructor <code>__construct()</code>. PHP 8.0+ mendukung sintaks chain langsung: <code>(new User())->getName()</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
class Kursus {
    public function __construct(public string $judul) {}
    public function getInfo(): string {
        return "Materi: {$this->judul}";
    }
}

// 1. Instansiasi Standar
$k = new Kursus("Mastering PHP 8");

// 2. Chaining Langsung Tanpa Variabel (PHP 8+)
$infoInstan = (new Kursus("PostgreSQL Advanced"))->getInfo();

echo "<h3>Hasil Penggunaan Keyword new:</h3>";
echo "<p>" . $k->getInfo() . "</p>";
echo "<p style='color: #059669; font-weight: bold;'>✓ " . $infoInstan . "</p>";
?>`,
    codeExplanation: [
      'new Kursus(...) membuat instance objek baru dan memanggil method konstruktor.'
    ],
    challenge: {
      instruction: 'Instansiasi objek DateTime dengan new DateTime() dan cetak tahun saat ini.',
      starterCode: `<?php
$dt = new DateTime();
echo "Tahun: " . $dt->format("Y");
?>`,
      hint: 'Panggil new DateTime().'
    },
    quiz: {
      question: 'Method ajaib (magic method) apakah yang otomatis dieksekusi saat keyword `new` dipanggil untuk menginstansiasi sebuah kelas?',
      options: [
        '__construct()',
        '__init()',
        '__create()',
        '__start()'
      ],
      correctIndex: 0,
      explanation: '__construct() adalah method konstruktor resmi PHP.'
    }
  },

  // 343. OR
  {
    id: 'php-kw-or',
    title: 'PHP Keyword: or',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 343,
    overview: 'Kuasai operator logika or: membandingkan dua kondisi boolean dengan tingkat presedensi LEBIH RENDAH dari penugasan (=) dan operator || (populer untuk idiom: doSomething() or die()).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">LOGICAL OR</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 343 / 361</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔗 Operator Logika OR (or)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>or</code> mengembalikan <code>true</code> jika salah satu operan bernilai benar. Presedensinya yang rendah membuatnya sangat populer untuk pola fallback kontrol alur (<em>short-circuit evaluation</em>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$isMember = false;
$isVip = true;

if ($isMember or $isVip) {
    echo "<h3>Hasil Pengujian Operator 'or':</h3>";
    echo "<p style='color: green;'><strong>✓ Akses Konten Premium Diizinkan.</strong></p>";
}
?>`,
    codeExplanation: [
      'or menghasilkan true karena variabel $isVip bernilai true.'
    ],
    challenge: {
      instruction: 'Uji kondisi logika dengan operator or.',
      starterCode: `<?php
$a = false;
$b = true;
if ($a or $b) {
    echo "Salah satu kondisi benar";
}
?>`,
      hint: 'Jalankan if ($a or $b).'
    },
    quiz: {
      question: 'Kapan operator `or` mengembalikan nilai TRUE?',
      options: [
        'Ketika setidaknya salah satu dari kedua operan bernilai true (atau keduanya true)',
        'Hanya jika kedua operan true',
        'Hanya jika kedua operan false',
        'Tidak pernah'
      ],
      correctIndex: 0,
      explanation: 'Logika OR bernilai true jika minimal satu kondisi terpenuhi.'
    }
  },

  // 344. PRINT
  {
    id: 'php-kw-print',
    title: 'PHP Keyword: print',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 344,
    overview: 'Kuasai konstruksi bahasa print: mencetak string ke output buffer browser dan SELALU mengembalikan nilai integer 1 (sehingga bisa digunakan di dalam ekspresi ternary).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PRINT CONSTRUCT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 344 / 361</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📢 Mencetak Teks dengan Return Value (print)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>print $string</code> mencetak string ke browser dan <strong>selalu mengembalikan nilai integer 1</strong>. Karena memiliki return value, <code>print</code> dapat disematkan di dalam ekspresi ternary: <code>$status ? print "OK" : print "Fail";</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// 1. Pencetakan teks biasa
print "<h3>Hasil Penggunaan print:</h3>";

// 2. Memanfaatkan return value print (selalu bernilai 1)
$ret = print "<p>Mencetak pesan dan mengembalikan nilai integer.</p>";
echo "<p>Return Value dari print: <strong style='color: #059669;'>$ret</strong></p>";

// 3. Digunakan dalam ternary expression
$isAktif = true;
$isAktif ? print "<p style='color: green;'>✓ Akun Aktif</p>" : print "<p>Nonaktif</p>";
?>`,
    codeExplanation: [
      'print selalu mengembalikan integer 1 sehingga valid digunakan dalam ekspresi kondisional kompleks.'
    ],
    challenge: {
      instruction: 'Cetak pesan menggunakan print "Hello DevGrow";.',
      starterCode: `<?php
print "Hello DevGrow";
?>`,
      hint: 'Panggil print.'
    },
    quiz: {
      question: 'Berapakah nilai kembalian (return value) yang SELALU dihasilkan oleh pernyataan `print`?',
      options: [
        'Integer 1',
        'Boolean true',
        'Integer 0',
        'String yang dicetak'
      ],
      correctIndex: 0,
      explanation: 'print selalu mengembalikan nilai integer 1.'
    }
  }
];

module.exports = phpPart31RefKeywords3;
