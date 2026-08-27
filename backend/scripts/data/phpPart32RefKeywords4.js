// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (KEYWORDS PART 4: 345-361)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart32RefKeywords4 = [
  // 345. PRIVATE
  {
    id: 'php-kw-private',
    title: 'PHP Keyword: private',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 345,
    overview: 'Kuasai access modifier private: mengunci properti dan method agar HANYA BISA DIAKSES DARI DALAM KELAS ITU SENDIRI (enkapsulasi data ketat, tidak bisa diakses oleh subclass/kelas turunan).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ACCESS MODIFIER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 345 / 361</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔒 Visibilitas Privat (private)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>private</code> memberikan tingkat proteksi enkapsulasi tertinggi. Anggota privat tidak dapat dibaca atau dimodifikasi dari luar objek maupun oleh kelas anak yang meng-extends kelas tersebut.
          </p>
        </div>
      </div>
    `,
    code: `<?php
class RekeningBank {
    // Properti private: Terkunci aman di dalam kelas
    private float $saldo = 0;

    public function setor(float $jumlah): void {
        if ($jumlah > 0) {
            $this->saldo += $jumlah;
        }
    }

    public function getSaldo(): float {
        return $this->saldo;
    }
}

$rek = new RekeningBank();
$rek->setor(500000);

echo "<h3>Hasil Penggunaan Keyword private:</h3>";
echo "<p>Saldo Rekening: <strong style='color: #059669;'>Rp " . number_format($rek->getSaldo(), 0, ',', '.') . "</strong></p>";
echo "<p style='color: green;'>Properti \$saldo tidak bisa dimanipulasi langsung dari luar (misal: \$rek->saldo = 999999 akan error).</p>";
?>`,
    codeExplanation: [
      'private float $saldo hanya dapat dimodifikasi melalui method publik setor().'
    ],
    challenge: {
      instruction: 'Buat kelas dengan properti private string $password dan getter getPassword().',
      starterCode: `<?php
class Akun {
    private string $pin = "1234";
    public function getPin(): string { return $this->pin; }
}
$a = new Akun();
echo "PIN: " . $a->getPin();
?>`,
      hint: 'Gunakan private string $pin.'
    },
    quiz: {
      question: 'Apakah properti yang diberi modifier `private` dapat diakses oleh kelas anak (subclass) yang meng-extends kelas tersebut?',
      options: [
        'Tidak bisa (private hanya dapat diakses oleh kelas tempat properti dideklarasikan)',
        'Bisa jika menggunakan parent::$prop',
        'Bisa tanpa batasan',
        'Hanya di PHP 7'
      ],
      correctIndex: 0,
      explanation: 'Properti private diisolasi khusus untuk kelas aslinya saja (subclass harus menggunakan visibility protected).'
    }
  },

  // 346. PROTECTED
  {
    id: 'php-kw-protected',
    title: 'PHP Keyword: protected',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 346,
    overview: 'Kuasai access modifier protected: membatasi akses properti dan method agar hanya bisa diakses dari dalam kelas itu sendiri DAN kelas-kelas turunannya (Subclasses).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ACCESS MODIFIER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 346 / 361</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛡️ Visibilitas Terproteksi (protected)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>protected</code> menyembunyikan anggota dari akses luar publik, namun tetap mengizinkan kelas anak (subclass yang meng-<code>extends</code> kelas induk) untuk membaca dan mengubahnya.
          </p>
        </div>
      </div>
    `,
    code: `<?php
class Kendaraan {
    protected string $nomorRangka = "MH1234567890";
}

class Mobil extends Kendaraan {
    public function getIdentitas(): string {
        // Berhasil: Bisa mengakses properti protected milik kelas induk
        return "No. Rangka Mobil: " . $this->nomorRangka;
    }
}

$mobil = new Mobil();

echo "<h3>Hasil Penggunaan Keyword protected:</h3>";
echo "<p><strong style='color: #4f46e5;'>" . $mobil->getIdentitas() . "</strong></p>";
?>`,
    codeExplanation: [
      'protected string $nomorRangka aman dari akses luar publik namun dapat dibaca oleh class Mobil (subclass).'
    ],
    challenge: {
      instruction: 'Akses properti protected $kategori dari subclass ProdukDigital.',
      starterCode: `<?php
class Produk { protected string $kategori = "Elektronik"; }
class Ebook extends Produk { public function getKat() { return $this->kategori; } }
$e = new Ebook();
echo $e->getKat();
?>`,
      hint: 'Gunakan $this->kategori di subclass.'
    },
    quiz: {
      question: 'Apa perbedaan utama antara visibilitas `private` dan `protected`?',
      options: [
        '`protected` dapat diakses oleh kelas turunan (subclass), sedangkan `private` tidak dapat diakses sama sekali oleh kelas turunan',
        '`private` bisa diakses publik',
        '`protected` hanya untuk fungsi static',
        'Keduanya identik'
      ],
      correctIndex: 0,
      explanation: 'protected mengizinkan akses inheritance oleh kelas anak, sedangkan private tertutup rapat.'
    }
  },

  // 347. PUBLIC
  {
    id: 'php-kw-public',
    title: 'PHP Keyword: public',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 347,
    overview: 'Kuasai access modifier public: membuka akses properti, method, dan konstanta secara bebas dari mana saja (di dalam kelas, kelas turunan, maupun dari luar objek).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ACCESS MODIFIER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 347 / 361</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌍 Visibilitas Publik Terbuka (public)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>public</code> adalah visibilitas default untuk method di PHP jika tidak ditentukan secara eksplisit. Anggota publik membentuk Antarmuka API Publik (Public API) dari suatu kelas.
          </p>
        </div>
      </div>
    `,
    code: `<?php
class BannerPromo {
    public string $judul = "Diskon 50% Kursus Pemrograman";
    
    public function render(): string {
        return "<div style='background: #fef08a; padding: 10px; border-radius: 6px; color: #854d0e; font-weight: bold;'>🎉 {$this->judul}</div>";
    }
}

$banner = new BannerPromo();
// Akses properti dan method publik langsung dari luar
$banner->judul = "Spesial Kemerdekaan - Promo Belajar PHP 8!";

echo "<h3>Hasil Penggunaan Keyword public:</h3>";
echo $banner->render();
?>`,
    codeExplanation: [
      'public string $judul dan public function render() dapat dipanggil bebas dari luar objek.'
    ],
    challenge: {
      instruction: 'Buat method public sapa() pada class Robot.',
      starterCode: `<?php
class Robot {
    public function sapa(): string { return "Bip Bop!"; }
}
$r = new Robot();
echo $r->sapa();
?>`,
      hint: 'Panggil $r->sapa().'
    },
    quiz: {
      question: 'Jika seorang developer mendeklarasikan `function render() {}` di dalam kelas tanpa menuliskan modifier, apa visibilitas default-nya?',
      options: [
        '`public`',
        '`private`',
        '`protected`',
        'Syntax error'
      ],
      correctIndex: 0,
      explanation: 'Method dalam kelas PHP secara default memiliki visibilitas publik.'
    }
  },

  // 348. REQUIRE
  {
    id: 'php-kw-require',
    title: 'PHP Keyword: require',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 348,
    overview: 'Kuasai pernyataan require: menyertakan file PHP wajib (jika file tidak ditemukan, PHP langsung melempar FATAL ERROR dan MENGHENTIKAN skrip seketika).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CRITICAL INCLUSION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 348 / 361</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚠️ Menyertakan Berkas Kritis (require)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>require 'config.php';</code> digunakan untuk file yang mutlak dibutuhkan oleh aplikasi (seperti file koneksi database, autoloader, atau class inti). Jika file hilang, aplikasi langsung berhenti demi integritas keamanan.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$dbConfigFile = __DIR__ . "/db_config_temp.php";
file_put_contents($dbConfigFile, "<?php \$dbStatus = 'Connected to PostgreSQL'; ?>");

// Sertakan file kritis dengan require
require $dbConfigFile;

echo "<h3>Hasil Penggunaan require:</h3>";
echo "<p>Status Database: <strong style='color: #059669;'>$dbStatus</strong></p>";

unlink($dbConfigFile);
?>`,
    codeExplanation: [
      'require menjamin bahwa jika file konfigurasi tidak ada, aplikasi tidak akan melanjutkan eksekusi dengan state yang rusak.'
    ],
    challenge: {
      instruction: 'Pahami karakteristik fatal error pada require.',
      starterCode: `<?php
echo "require memicu Fatal Error jika file tidak ditemukan.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Kapan programmer WAJIB memilih `require` dibandingkan `include`?',
      options: [
        'Untuk memuat file kritis seperti konfigurasi database, autoloader framework, atau kelas controller inti yang tanpanya aplikasi tidak bisa berjalan',
        'Hanya untuk file gambar',
        'Untuk file CSS opsional',
        'Tidak ada bedanya'
      ],
      correctIndex: 0,
      explanation: 'require menghentikan eksekusi saat file kritis hilang sehingga mencegah eksekusi state berbahaya.'
    }
  },

  // 349. REQUIRE_ONCE
  {
    id: 'php-kw-require-once',
    title: 'PHP Keyword: require_once',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 349,
    overview: 'Kuasai keyword require_once: standar emas pemuatan file autoloader/konfigurasi kritis tepat satu kali saja (paling populer: require_once __DIR__ . "/vendor/autoload.php").',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">AUTOLOAD STANDARD</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 349 / 361</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">👑 Standar Pemuatan Composer (require_once)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>require_once __DIR__ . '/vendor/autoload.php';</code> adalah baris pertama pada setiap framework PHP modern (Laravel, Symfony, WordPress). Menggabungkan sifat kritis <code>require</code> (fatal error jika hilang) dan proteksi deduplikasi <code>once</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$coreFile = __DIR__ . "/app_core.php";
file_put_contents($coreFile, "<?php define('APP_ENV', 'production'); ?>");

// Muat tepat satu kali
require_once $coreFile;
require_once $coreFile; // Diabaikan otomatis tanpa error

echo "<h3>Hasil Penggunaan require_once:</h3>";
echo "<p>Environment Aplikasi: <strong style='color: #059669;'>" . APP_ENV . "</strong></p>";

unlink($coreFile);
?>`,
    codeExplanation: [
      'require_once adalah baris kode pembuka standar di file public/index.php seluruh framework PHP.'
    ],
    challenge: {
      instruction: 'Pahami pemanggilan require_once vendor/autoload.php.',
      starterCode: `<?php
echo "require_once __DIR__ . '/vendor/autoload.php';";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Baris kode pembuka apakah yang menjadi standar emas di file `public/index.php` pada seluruh framework modern untuk memuat pustaka Composer?',
      options: [
        '`require_once __DIR__ . "/../vendor/autoload.php";`',
        '`include "vendor/autoload.php";`',
        '`import "vendor/autoload.php";`',
        '`load "vendor/autoload.php";`'
      ],
      correctIndex: 0,
      explanation: 'require_once pada vendor/autoload.php menginisialisasi sistem autoloading paket PSR-4.'
    }
  },

  // 350. RETURN
  {
    id: 'php-kw-return',
    title: 'PHP Keyword: return',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 350,
    overview: 'Kuasai keyword return: menghentikan eksekusi fungsi saat itu juga dan mengembalikan nilai ke pemanggil, atau mengembalikan array konfigurasi dari file yang di-require.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">RETURN VALUE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 350 / 361</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">↩️ Mengembalikan Nilai (return)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>return $nilai;</code> langsung mengakhiri fungsi dan mengembalikan hasilnya. Pola <em>Early Return</em> (Guard Clause) sangat dianjurkan untuk menghindari kode bersarang (nested if) yang dalam.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Pola Early Return / Guard Clause yang Bersih
function hitungDiskon(float $total, bool $isVip): float {
    // Guard Clause 1: Belanja dibawah 100rb tidak dapat diskon
    if ($total < 100000) {
        return 0;
    }
    
    // Guard Clause 2: Member VIP dapat diskon 20%
    if ($isVip) {
        return $total * 0.20;
    }
    
    // Default diskon reguler 10%
    return $total * 0.10;
}

echo "<h3>Hasil Penggunaan Early Return:</h3>";
echo "<p>Diskon VIP (Rp 500.000): <strong style='color: #059669;'>Rp " . number_format(hitungDiskon(500000, true), 0, ',', '.') . "</strong></p>";
?>`,
    codeExplanation: [
      'return langsung keluar dari fungsi tanpa perlu menuliskan banyak else bersarang.'
    ],
    challenge: {
      instruction: 'Buat fungsi kuadrat(int $x): int yang mengembalikan nilai $x * $x dengan return.',
      starterCode: `<?php
function kuadrat(int $x): int {
    return $x * $x;
}
echo kuadrat(5);
?>`,
      hint: 'Gunakan return $x * $x;.'
    },
    quiz: {
      question: 'Apa keuntungan menerapkan teknik "Early Return" di dalam fungsi?',
      options: [
        'Mengurangi indentasi kode bercabang (nested if-else) sehingga logika fungsi menjadi jauh lebih bersih dan mudah dibaca',
        'Menghapus variabel otomatis',
        'Mempercepat query SQL',
        'Hanya untuk fungsi matematika'
      ],
      correctIndex: 0,
      explanation: 'Early return memutus eksekusi lebih cepat pada kasus batas/edge case.'
    }
  },

  // 351. STATIC
  {
    id: 'php-kw-static',
    title: 'PHP Keyword: static',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 351,
    overview: 'Kuasai keyword static: mendeklarasikan variabel statis lokal yang mempertahankan nilainya antar pemanggilan fungsi, method/properti kelas statis (ClassName::$prop), dan Late Static Bindings (static::method()).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">STATIC BINDING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 351 / 361</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚡ Anggota Statis & Late Static Binding (static)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Keyword <code>static</code> memiliki 3 peran: (1) Variabel lokal statis yang tidak di-reset saat fungsi selesai, (2) Method/properti kelas yang dipanggil tanpa instansiasi <code>Math::tambah()</code>, dan (3) <strong>Late Static Binding</strong> (<code>static::class</code>) yang merujuk ke kelas pemanggil runtime sebenarnya.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// 1. Variabel Statis Lokal
function hitungPanggilan(): int {
    static $counter = 0; // Hanya diinisialisasi 1x
    $counter++;
    return $counter;
}

// 2. Properti & Method Statis Kelas
class IDGenerator {
    public static int $lastId = 1000;
    
    public static function next(): int {
        return ++self::$lastId;
    }
}

echo "<h3>Hasil Penggunaan Keyword static:</h3>";
echo "<p>Panggilan Fungsi ke-1: " . hitungPanggilan() . "</p>";
echo "<p>Panggilan Fungsi ke-2: " . hitungPanggilan() . "</p>";
echo "<p>ID Statis Berikutnya: <strong style='color: #059669;'>" . IDGenerator::next() . "</strong></p>";
?>`,
    codeExplanation: [
      'static $counter mempertahankan nilai antar pemanggilan fungsi.',
      'IDGenerator::next() dipanggil langsung tanpa perlu new IDGenerator().'
    ],
    challenge: {
      instruction: 'Buat static method tambah(int $a, int $b) pada class Math.',
      starterCode: `<?php
class Math {
    public static function tambah(int $a, int $b): int { return $a + $b; }
}
echo Math::tambah(15, 25);
?>`,
      hint: 'Panggil Math::tambah(15, 25).'
    },
    quiz: {
      question: 'Apa perbedaan antara `self::method()` dan `static::method()` dalam konsep Late Static Bindings di PHP?',
      options: [
        '`self::` merujuk ke kelas tempat kode ditulis, sedangkan `static::` merujuk ke kelas turunan yang memanggilnya pada runtime',
        '`static::` hanya untuk database',
        '`self::` memicu error',
        'Keduanya identik'
      ],
      correctIndex: 0,
      explanation: 'Late Static Binding (static::) menyelesaikan resolusi scope pada saat runtime inheritance.'
    }
  },

  // 352. SWITCH
  {
    id: 'php-kw-switch',
    title: 'PHP Keyword: switch',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 352,
    overview: 'Kuasai keyword switch: struktur percabangan multi-kondisi berbasis perbandingan longgar (Loose Equality ==) dengan klausul case dan default.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CONTROL STRUCTURE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 352 / 361</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎯 Percabangan Multi-Kondisi (switch)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>switch ($variabel)</code> membandingkan nilai terhadap serangkaian blok <code>case</code>. Selalu sertakan <code>break;</code> di akhir setiap case untuk mencegah <em>fall-through</em> ke case berikutnya.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$metodeBayar = "QRIS";

echo "<h3>Hasil Percabangan switch:</h3>";
switch ($metodeBayar) {
    case "BCA_VA":
    case "MANDIRI_VA":
        echo "<p>Instruksi Transfer Virtual Account Diterbitkan.</p>";
        break;
    case "QRIS":
        echo "<p style='color: green;'><strong>✓ Silakan scan kode QRIS melalui e-wallet Anda.</strong></p>";
        break;
    default:
        echo "<p>Pilih metode pembayaran yang tersedia.</p>";
}
?>`,
    codeExplanation: [
      'switch mencocokkan string "QRIS" dan mengeksekusi blok kode terkait.'
    ],
    challenge: {
      instruction: 'Uji switch statement untuk status "PAID".',
      starterCode: `<?php
$status = "PAID";
switch ($status) {
    case "PAID": echo "Lunas"; break;
    default: echo "Belum Bayar";
}
?>`,
      hint: 'Jalankan switch-case.'
    },
    quiz: {
      question: 'Apa jenis perbandingan kesetaraan yang digunakan oleh struktur `switch` di PHP?',
      options: [
        'Loose Equality (`==`) perbandingan longgar',
        'Strict Equality (`===`) perbandingan ketat',
        'Pencocokan regex',
        'Case-insensitive saja'
      ],
      correctIndex: 0,
      explanation: 'switch menggunakan loose comparison (==), sedangkan match expression (PHP 8) menggunakan strict comparison (===).'
    }
  },

  // 353. THROW
  {
    id: 'php-kw-throw',
    title: 'PHP Keyword: throw',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 353,
    overview: 'Kuasai keyword throw: melemparkan objek Exception atau Error secara eksplisit (sejak PHP 8.0 throw dapat digunakan sebagai Expression di dalam ternary / null coalescing operator).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">EXCEPTION THROW</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 353 / 361</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🚀 Melemparkan Exception (throw)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>throw new Exception($pesan);</code> memicu penanganan kesalahan. Di PHP 8.0+, <code>throw</code> adalah sebuah <strong>Expression</strong> sehingga bisa ditulis langsung pada null coalescing: <code>$id = $_GET['id'] ?? throw new InvalidArgumentException("ID wajib ada!");</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
function validasiUmur(int $umur): bool {
    if ($umur < 17) {
        throw new InvalidArgumentException("Syarat umur minimal 17 tahun!");
    }
    return true;
}

try {
    validasiUmur(15);
} catch (InvalidArgumentException $e) {
    echo "<h3>Hasil Penggunaan Keyword throw:</h3>";
    echo "<p style='color: #dc2626;'><strong>[TERTANGKAP] " . $e->getMessage() . "</strong></p>";
}
?>`,
    codeExplanation: [
      'throw new InvalidArgumentException(...) melempar objek error ke blok catch terdekat.'
    ],
    challenge: {
      instruction: 'Lempar Exception dengan throw new Exception("Error Pesan");.',
      starterCode: `<?php
try {
    throw new Exception("Tes Throw");
} catch (Exception $e) {
    echo $e->getMessage();
}
?>`,
      hint: 'Gunakan throw new Exception(...).'
    },
    quiz: {
      question: 'Kemampuan baru apakah yang dimiliki keyword `throw` sejak PHP 8.0?',
      options: [
        '`throw` berubah menjadi Expression sehingga bisa digunakan di dalam operator ternary, null coalescing (??), dan arrow function',
        '`throw` otomatis mengirim email error',
        '`throw` bisa melempar array biasa',
        'Tidak ada perubahan'
      ],
      correctIndex: 0,
      explanation: 'PHP 8.0 menjadikan throw sebagai ekspresi (Throw Expression).'
    }
  },

  // 354. TRAIT
  {
    id: 'php-kw-trait',
    title: 'PHP Keyword: trait',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 354,
    overview: 'Kuasai keyword trait: mekanisme penggunaan kembali kode secara horizontal (Horizontal Code Reuse) antar kelas independen tanpa batasan Single Inheritance.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CODE REUSE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 354 / 361</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧩 Trait Komposisi Kode (trait)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>trait NamaTrait</code> memungkinkan sekumpulan method disisipkan ke dalam berbagai kelas berbeda menggunakan keyword <code>use NamaTrait;</code> (contoh populer Laravel: <code>use HasApiTokens, HasFactory;</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
trait Timestamps {
    public string $createdAt;
    
    public function setTimestamp(): void {
        $this->createdAt = date("Y-m-d H:i:s");
    }
}

class Artikel {
    use Timestamps; // Sisipkan method & properti trait
    public string $judul = "Belajar PHP 8 Trait";
}

$art = new Artikel();
$art->setTimestamp();

echo "<h3>Hasil Penggunaan Keyword trait:</h3>";
echo "<p>Artikel: <strong>{$art->judul}</strong></p>";
echo "<p>Waktu Dibuat: <strong style='color: #059669;'>{$art->createdAt}</strong></p>";
?>`,
    codeExplanation: [
      'trait Timestamps membagikan fungsionalitas timestamp ke berbagai model class yang membutuhkan.'
    ],
    challenge: {
      instruction: 'Buat trait Logger dan gunakan pada class Order dengan `use Logger;`.',
      starterCode: `<?php
trait Logger {
    public function log(string $m) { echo "Log: $m"; }
}
class Order { use Logger; }
$o = new Order();
$o->log("Order dibuat");
?>`,
      hint: 'Gunakan use Logger; di dalam class.'
    },
    quiz: {
      question: 'Apakah sebuah `trait` dapat diinstansiasi langsung menggunakan keyword `new NamaTrait()`?',
      options: [
        'Tidak bisa (Trait hanya bisa disisipkan ke dalam Class menggunakan keyword `use`)',
        'Bisa seperti class biasa',
        'Hanya di PHP 8.2',
        'Bisa jika bertipe abstract'
      ],
      correctIndex: 0,
      explanation: 'Trait tidak dapat diinstansiasi mandiri dan hanya berfungsi sebagai modul penyisip kode kelas.'
    }
  },

  // 355. TRY
  {
    id: 'php-kw-try',
    title: 'PHP Keyword: try',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 355,
    overview: 'Kuasai keyword try: membungkus blok kode yang berpotensi memicu Exception atau Fatal Error untuk penanganan kesalahan yang aman.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TRY BLOCK</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 355 / 361</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛡️ Blok Pengawasan Error (try)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>try { ... }</code> mengawasi blok instruksi. Jika terjadi error/exception di dalamnya, eksekusi kode langsung dialihkan ke blok <code>catch</code> atau <code>finally</code> pasangannya.
          </p>
        </div>
      </div>
    `,
    code: `<?php
try {
    $file = "tidak_ada.json";
    if (!file_exists($file)) {
        throw new RuntimeException("File konfigurasi $file tidak ditemukan di server!");
    }
} catch (RuntimeException $e) {
    echo "<h3>Hasil Penggunaan Blok try:</h3>";
    echo "<p style='color: #dc2626;'><strong>[PENANGANAN AMAN] " . $e->getMessage() . "</strong></p>";
}
?>`,
    codeExplanation: [
      'try mengawasi eksekusi dan mengalihkan exception ke blok catch tanpa merusak UI halaman web.'
    ],
    challenge: {
      instruction: 'Bungkus pemanggilan json_decode("{bad}") dalam blok try-catch.',
      starterCode: `<?php
try {
    echo "Mencoba proses...";
} catch (Exception $e) {
    echo "Error";
}
?>`,
      hint: 'Jalankan blok try.'
    },
    quiz: {
      question: 'Blok apakah yang WAJIB mendampingi pernyataan `try { ... }`?',
      options: [
        'Setidaknya satu blok `catch` ATAU satu blok `finally`',
        'Hanya blok while',
        'Hanya blok switch',
        'Tidak wajib ada pendamping'
      ],
      correctIndex: 0,
      explanation: 'Pernyataan try harus diikuti minimal satu blok catch atau satu blok finally.'
    }
  },

  // 356. USE
  {
    id: 'php-kw-use',
    title: 'PHP Keyword: use',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 356,
    overview: 'Kuasai keyword use: (1) Mengimpor kelas/namespace (use App\\Models\\User), (2) Menyisipkan Trait ke dalam class, dan (3) Mengikat variabel luar ke Anonymous Function Closure (function() use ($var)).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TRIPLE USE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 356 / 361</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔀 Tiga Peran Vital Keyword (use)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Keyword <code>use</code> memiliki 3 peran: (1) Mengimpor class namespace (<code>use Illuminate\\Support\\Facades\\DB;</code>), (2) Menyisipkan Trait (<code>use HasFactory;</code>), dan (3) Mewariskan variabel scope luar ke dalam Anonymous Function Closure (<code>function() use ($pajak)</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$tarifPajak = 0.11;

// 1. Penggunaan 'use' pada Closure Anonymous Function
$hitungPajak = function(float $harga) use ($tarifPajak): float {
    return $harga * $tarifPajak;
};

echo "<h3>Hasil Penggunaan Keyword use pada Closure:</h3>";
echo "<p>Pajak Belanja Rp 1.000.000 = <strong style='color: #059669;'>Rp " . number_format($hitungPajak(1000000), 0, ',', '.') . "</strong></p>";
?>`,
    codeExplanation: [
      'function() use ($tarifPajak) membawa variabel $tarifPajak dari luar masuk ke dalam fungsi anonim.'
    ],
    challenge: {
      instruction: 'Bawa variabel $diskon ke dalam closure dengan function() use ($diskon).',
      starterCode: `<?php
$diskon = 10000;
$hitung = function($total) use ($diskon) { return $total - $diskon; };
echo "Total: " . $hitung(50000);
?>`,
      hint: 'Gunakan use ($diskon).'
    },
    quiz: {
      question: 'Tiga peran apakah yang dimiliki oleh keyword `use` di PHP?',
      options: [
        'Import namespace/class, penyisipan Trait ke class, dan pengikatan variabel scope luar ke Closure anonymous function',
        'Hanya untuk database query',
        'Hanya untuk switch-case',
        'Hanya untuk include file'
      ],
      correctIndex: 0,
      explanation: 'use memiliki 3 konteks sintaks: namespace import, trait usage, dan closure variable binding.'
    }
  },

  // 357. VAR
  {
    id: 'php-kw-var',
    title: 'PHP Keyword: var',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 357,
    overview: 'Status keyword var: sintaks lama deklarasi properti kelas PHP 4 (ekuivalen dengan public) dan praktik modern menggantinya dengan public/protected/private bertipe data.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-slate-600 text-white">LEGACY KEYWORD</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 357 / 361</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📜 Keyword Warisan PHP 4 (var)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>var $nama;</code> adalah sintaks lama deklarasi properti kelas dari era PHP 4. Di PHP modern (PHP 5, 7, 8), <code>var</code> dianggap ekuivalen dengan <code>public</code>, namun selalu disarankan menggunakan <code>public/protected/private</code> eksplisit dengan Type Hinting.
          </p>
        </div>
      </div>
    `,
    code: `<?php
class ProdukLama {
    var $namaProduk = "Buku Pemrograman PHP";
}

$p = new ProdukLama();

echo "<h3>Hasil Penggunaan Keyword var (Legacy):</h3>";
echo "<p>Nama Produk: <strong>{$p->namaProduk}</strong></p>";
echo "<p style='color: #059669;'>Catatan: Pada kode modern PHP 8.x, gantilah 'var' dengan 'public string \$namaProduk;'.</p>";
?>`,
    codeExplanation: [
      'var diperlakukan sebagai public property di PHP modern demi backward-compatibility.'
    ],
    challenge: {
      instruction: 'Pahami status legacy keyword var.',
      starterCode: `<?php
class Item { var $x = 10; }
$i = new Item();
echo $i->x;
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Pada PHP modern (PHP 7.x & 8.x), keyword `var` di dalam class diperlakukan sama persis dengan modifier apa?',
      options: [
        '`public`',
        '`private`',
        '`protected`',
        '`static`'
      ],
      correctIndex: 0,
      explanation: 'var diperlakukan sebagai sinonim dari visibilitas public.'
    }
  },

  // 358. WHILE
  {
    id: 'php-kw-while',
    title: 'PHP Keyword: while',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 358,
    overview: 'Kuasai keyword while: mengeksekusi perulangan berbasis kondisi pra-evaluasi (Pre-Condition Loop) yang berjalan selama kondisi boolean bernilai true.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">WHILE LOOP</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 358 / 361</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔁 Perulangan Pra-Kondisi (while)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>while (kondisi) { ... }</code> mengevaluasi ekspresi sebelum setiap putaran. Sangat populer untuk membaca baris file stream (<code>while (!feof($h))</code>) atau membaca baris data hasil query database (<code>while ($row = $stmt->fetch())</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$nomorAntrian = 1;

echo "<h3>Pemanggilan Antrian (while loop):</h3>";
echo "<ul>";
while ($nomorAntrian <= 3) {
    echo "<li>Nomor Antrian: <strong style='color: #4f46e5;'>A-00$nomorAntrian</strong> dipanggil ke Loket 1</li>";
    $nomorAntrian++;
}
echo "</ul>";
?>`,
    codeExplanation: [
      'while ($nomorAntrian <= 3) mengulang selama kondisi bernilai true.'
    ],
    challenge: {
      instruction: 'Jalankan while loop dari $i = 1 sampai 3.',
      starterCode: `<?php
$i = 1;
while ($i <= 3) {
    echo $i . " ";
    $i++;
}
?>`,
      hint: 'Jalankan while ($i <= 3).'
    },
    quiz: {
      question: 'Kapan evaluasi kondisi pada perulangan `while (kondisi)` dilakukan?',
      options: [
        'Di AWAL setiap putaran iterasi sebelum blok kode dijalankan',
        'Di akhir perulangan',
        'Hanya sekali di awal program',
        'Tidak pernah'
      ],
      correctIndex: 0,
      explanation: 'while memeriksa kondisi di awal (jika false sejak awal, body loop tidak pernah dieksekusi).'
    }
  },

  // 359. XOR
  {
    id: 'php-kw-xor',
    title: 'PHP Keyword: xor',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 359,
    overview: 'Kuasai operator logika xor: Exclusive OR yang mengembalikan TRUE jika SALAH SATU operan bernilai benar, tapi mengembalikan FALSE jika KEDUANYA benar atau keduanya salah.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">EXCLUSIVE OR</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 359 / 361</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚖️ Logika Exclusive OR (xor)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$a xor $b</code> menghasilkan <code>true</code> HANYA jika tepat satu kondisi yang benar (contoh: user boleh memilih diskon kupon ATAU gratis ongkir, tapi TIDAK BOLEH keduanya sekaligus).
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Kasus: Promo Eksklusif (Hanya boleh pilih 1 benefit)
$pilihDiskon = true;
$pilihGratisOngkir = false;

echo "<h3>Tabel Kebenaran Logika xor:</h3>";
echo "<ul>";
echo "<li>true xor false = <strong style='color: green;'>" . ((true xor false) ? "TRUE (Valid, Tepat 1 Promo)" : "FALSE") . "</strong></li>";
echo "<li>true xor true = <strong style='color: red;'>" . ((true xor true) ? "TRUE" : "FALSE (Batal, Tidak Boleh Dobel)") . "</strong></li>";
echo "<li>false xor false = <strong>" . ((false xor false) ? "TRUE" : "FALSE (Tidak Ada Promo)") . "</strong></li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'xor menghasilkan true hanya saat salah satu operand bernilai true dan yang lain false.'
    ],
    challenge: {
      instruction: 'Uji ekspresi (true xor false) dengan echo.',
      starterCode: `<?php
echo (true xor false) ? "XOR Sukses" : "Gagal";
?>`,
      hint: 'Jalankan logika xor.'
    },
    quiz: {
      question: 'Berapakah hasil dari ekspresi `true xor true` di PHP?',
      options: [
        'Boolean false (karena XOR mengharuskan tepat satu operan yang benar, bukan keduanya)',
        'Boolean true',
        'Null',
        'Error syntax'
      ],
      correctIndex: 0,
      explanation: 'Exclusive OR bernilai false jika kedua kondisi bernilai true.'
    }
  },

  // 360. YIELD
  {
    id: 'php-kw-yield',
    title: 'PHP Keyword: yield (Generators)',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 360,
    overview: 'Kuasai keyword yield: membuat fungsi Generator PHP untuk menghasilkan deretan data besar secara bertahap (Streaming Data) dengan konsumsi memori RAM mendekati nol (Zero-Memory Stream).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">GENERATORS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 360 / 361</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚡ Generator & Hemat Memori (yield)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>yield $nilai;</code> menghentikan eksekusi fungsi sementara (pause) dan mengembalikan nilai ke loop pemanggil tanpa membuat array besar di memori. Memungkinkan pemrosesan jutaan baris database tanpa takut error <em>"Allowed memory size exhausted"</em>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Generator hemat memori: Menghasilkan 1 Juta angka tanpa array!
function generateAngka(int $maksimal): Generator {
    for ($i = 1; $i <= $maksimal; $i++) {
        yield $i; // Mengalirkan angka satu per satu on-demand
    }
}

echo "<h3>Hasil Penggunaan Generator (yield):</h3>";
echo "<p>Mengalirkan 5 data pertama dari generator:</p>";
echo "<div style='display: flex; gap: 6px;'>";
foreach (generateAngka(5) as $angka) {
    echo "<span style='background: #e0e7ff; color: #4338ca; padding: 4px 10px; border-radius: 6px; font-weight: bold;'>Data #$angka</span>";
}
echo "</div>";
?>`,
    codeExplanation: [
      'yield mengembalikan Generator object yang dievaluasi secara lazy (on-demand) per iterasi.',
      'Sangat hemat RAM untuk export jutaan baris CSV/Excel di server produksi.'
    ],
    challenge: {
      instruction: 'Buat generator function angkaGenap() dengan yield.',
      starterCode: `<?php
function genap() {
    yield 2;
    yield 4;
    yield 6;
}
foreach (genap() as $v) { echo $v . " "; }
?>`,
      hint: 'Jalankan generator function.'
    },
    quiz: {
      question: 'Tipe objek apakah yang otomatis dikembalikan oleh fungsi PHP yang memuat keyword `yield`?',
      options: [
        'Objek `Generator` (mengimplementasikan Iterator interface)',
        'Array biasa',
        'String',
        'Resource handle'
      ],
      correctIndex: 0,
      explanation: 'Fungsi yang memuat yield otomatis menghasilkan instance dari built-in class Generator.'
    }
  },

  // 361. YIELD FROM
  {
    id: 'php-kw-yield-from',
    title: 'PHP Keyword: yield from',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 361,
    overview: 'Kuasai keyword yield from: mendelegasikan perulangan generator ke generator lain, Array, atau objek Traversable (Generator Delegation) secara elegan.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">GENERATOR DELEGATION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 361 / 361</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔀 Delegasi Generator (yield from)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>yield from $subGenerator;</code> mengalirkan seluruh nilai dari sub-generator atau array lain secara langsung tanpa perlu menulis perulangan <code>foreach ($sub as $item) { yield $item; }</code> manual.
          </p>
        </div>
      </div>
    `,
    code: `<?php
function subBagianA(): Generator {
    yield "Modul 1: Dasar PHP";
    yield "Modul 2: OOP PHP";
}

function subBagianB(): Generator {
    yield "Modul 3: PostgreSQL & PDO";
    yield "Modul 4: RESTful API";
}

// Generator Utama yang mendelegasikan tugas
function kurikulumLengkap(): Generator {
    yield from subBagianA(); // Delegasi ke subBagianA
    yield from subBagianB(); // Delegasi ke subBagianB
    yield "Modul 5: Proyek Akhir Fullstack";
}

echo "<h3>Kurikulum Lengkap via Delegasi yield from:</h3>";
echo "<ol>";
foreach (kurikulumLengkap() as $materi) {
    echo "<li><strong>$materi</strong></li>";
}
echo "</ol>";
?>`,
    codeExplanation: [
      'yield from subBagianA() mengekstrak seluruh aliran data dari sub-generator secara efisien.'
    ],
    challenge: {
      instruction: 'Delegasikan array [1, 2] dengan yield from [1, 2];.',
      starterCode: `<?php
function gabung() {
    yield from [1, 2];
    yield 3;
}
foreach (gabung() as $n) { echo $n . " "; }
?>`,
      hint: 'Jalankan yield from.'
    },
    quiz: {
      question: 'Apa fungsi dari `yield from` di PHP 7.0+?',
      options: [
        'Mendelegasikan yield secara langsung ke generator lain atau array/Traversable tanpa perlu perulangan foreach manual',
        'Mengimpor file PHP',
        'Menghapus generator',
        'Mengubah yield menjadi array'
      ],
      correctIndex: 0,
      explanation: 'yield from melakukan delegasi generator ke sub-iterator atau array.'
    }
  }
];

module.exports = phpPart32RefKeywords4;
