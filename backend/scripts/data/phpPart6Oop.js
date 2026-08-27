// ==========================================================
// DATA MATERI PHP: BAB 4 - PHP OOP (OBJECT-ORIENTED PROGRAMMING)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart6Oop = [
  // 1. PHP WHAT IS OOP
  {
    id: 'php-oop-what-is',
    title: 'PHP What is OOP',
    chapter: 'PHP OOP',
    chapterId: 'php-chap-oop',
    order: 1,
    overview: 'Pengantar Pemrograman Berorientasi Objek (OOP) di PHP: pahami perbedaan Paradigma Prosedural vs OOP, 4 pilar utama OOP (Encapsulation, Inheritance, Polymorphism, Abstraction), dan prinsip DRY (Don\'t Repeat Yourself).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PHP OOP</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 01 / 14</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏛️ Apa itu OOP (Object-Oriented Programming)?</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            OOP adalah paradigma pemrograman yang mengorganisasi kode menjadi unit-unit mandiri bernama <strong>Objek</strong> yang menggabungkan data (<em>Properties</em>) dan fungsi (<em>Methods</em>). OOP adalah fondasi dari seluruh framework modern seperti Laravel, Symfony, dan WordPress.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          <div class="p-3 bg-purple-50 dark:bg-purple-950/20 rounded-xl border border-purple-200 dark:border-purple-800/50">
            <strong class="text-purple-700 dark:text-purple-400 block mb-1">1. Encapsulation</strong>
            Membungkus data dan membatasi akses langsung dengan Access Modifiers.
          </div>
          <div class="p-3 bg-indigo-50 dark:bg-indigo-950/20 rounded-xl border border-indigo-200 dark:border-indigo-800/50">
            <strong class="text-indigo-700 dark:text-indigo-400 block mb-1">2. Inheritance</strong>
            Pewarisan sifat dan fungsi dari Class Induk ke Class Anak (reusable).
          </div>
          <div class="p-3 bg-cyan-50 dark:bg-cyan-950/20 rounded-xl border border-cyan-200 dark:border-cyan-800/50">
            <strong class="text-cyan-700 dark:text-cyan-400 block mb-1">3. Polymorphism</strong>
            Kemampuan satu interface atau method memiliki banyak bentuk implementasi.
          </div>
          <div class="p-3 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-800/50">
            <strong class="text-emerald-700 dark:text-emerald-400 block mb-1">4. Abstraction</strong>
            Menyembunyikan detail teknis yang rumit dan hanya mengekspos fitur penting.
          </div>
        </div>
      </div>
    `,
    code: `<?php
// Perbandingan Prosedural vs OOP

// 1. Gaya Prosedural:
$namaMobil = "Toyota Supra";
$kecepatanMobil = 0;
function gasMobil(&$kecepatan, $tambah) {
    $kecepatan += $tambah;
}
gasMobil($kecepatanMobil, 50);

// 2. Gaya OOP (Rapi & Terenkapsulasi):
class MobilSport {
    public string $nama;
    public int $kecepatan = 0;

    public function __construct(string $nama) {
        $this->nama = $nama;
    }

    public function tancapGas(int $tambah): void {
        $this->kecepatan += $tambah;
        echo "<p>🏎️ <strong>{$this->nama}</strong> melaju kencang di kecepatan: <strong>{$this->kecepatan} km/jam</strong></p>";
    }
}

echo "<h3>Demonstrasi Konsep OOP di PHP:</h3>";
$supra = new MobilSport("Toyota Supra MK5");
$supra->tancapGas(80);
$supra->tancapGas(40);
?>`,
    codeExplanation: [
      'Class MobilSport bertindak sebagai cetak biru (blueprint).',
      'Objek $supra adalah wujud nyata (instance) dari cetak biru tersebut yang memiliki state kecepatan dan perilakunya sendiri.'
    ],
    challenge: {
      instruction: 'Buat objek baru $gtr = new MobilSport("Nissan GT-R"); dan panggil method $gtr->tancapGas(100);.',
      starterCode: `<?php
class MobilSport {
    public string $nama;
    public int $kecepatan = 0;
    public function __construct(string $nama) { $this->nama = $nama; }
    public function tancapGas(int $tambah): void {
        $this->kecepatan += $tambah;
        echo "{$this->nama} melaju pada {$this->kecepatan} km/jam";
    }
}

$gtr = new MobilSport("Nissan GT-R");
$gtr->tancapGas(100);
?>`,
      hint: 'Panggil $gtr->tancapGas(100);'
    },
    quiz: {
      question: 'Manakah di bawah ini yang BUKAN merupakan salah satu dari 4 pilar utama OOP?',
      options: [
        'Compilation',
        'Encapsulation',
        'Inheritance',
        'Polymorphism'
      ],
      correctIndex: 0,
      explanation: '4 Pilar utama OOP adalah Encapsulation, Inheritance, Polymorphism, dan Abstraction.'
    }
  },

  // 2. PHP CLASSES/OBJECTS
  {
    id: 'php-oop-classes-objects',
    title: 'PHP Classes/Objects',
    chapter: 'PHP OOP',
    chapterId: 'php-chap-oop',
    order: 2,
    overview: 'Pelajari cara mendeklarasikan Class, membuat Object dengan keyword new, mengakses property dan method dengan operator panah (->), pseudo-variable $this, dan instanceof.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CLASSES & OBJECTS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 02 / 14</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📦 Class (Cetak Biru) & Object (Wujud Nyata)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <strong>Class</strong> adalah denah / cetak biru (blueprint), sedangkan <strong>Object</strong> adalah bangunan fisik yang dibuat dari denah tersebut. Anda dapat membuat banyak objek independen dari satu class yang sama.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
          <h4 class="font-bold text-indigo-600 dark:text-indigo-400 text-sm">Operator Panah (<code>-&gt;</code>) dan <code>$this</code></h4>
          <p class="text-xs text-slate-600 dark:text-slate-400">
            Gunakan operator panah tipis <code>-&gt;</code> untuk mengakses properti dan method objek. Variabel semu <code>$this</code> merujuk pada objek yang sedang aktif saat ini di dalam Class.
          </p>
        </div>
      </div>
    `,
    code: `<?php
class KursusOnline {
    // Properti (Variabel di dalam Class)
    public string $judul;
    public string $kategori;
    public int $totalMateri = 0;

    // Method (Fungsi di dalam Class)
    public function setDetail(string $judul, string $kategori, int $materi): void {
        $this->judul = $judul;
        $this->kategori = $kategori;
        $this->totalMateri = $materi;
    }

    public function getRingkasan(): string {
        return "Modul <strong>{$this->judul}</strong> ({$this->kategori}) memuat {$this->totalMateri} materi pembelajaran.";
    }
}

// Instansiasi Objek Baru menggunakan keyword 'new'
$kursusPhp = new KursusOnline();
$kursusPhp->setDetail("Mastering PHP 8.x Modern", "Backend Development", 74);

$kursusJs = new KursusOnline();
$kursusJs->setDetail("JavaScript ES6+ & React", "Frontend Development", 65);

echo "<h3>Daftar Kursus Aktif:</h3>";
echo "<ul>";
echo "<li>" . $kursusPhp->getRingkasan() . "</li>";
echo "<li>" . $kursusJs->getRingkasan() . "</li>";
echo "</ul>";

echo "<p>Apakah \$kursusPhp adalah instance dari KursusOnline? " . ($kursusPhp instanceof KursusOnline ? "<strong>Ya (instanceof)</strong>" : "Bukan") . "</p>";
?>`,
    codeExplanation: [
      'Kata kunci class diawali dengan huruf kapital (PascalCase) menurut konvensi PSR.',
      '$this->judul merujuk ke properti judul milik objek yang bersangkutan.',
      'Operator instanceof digunakan untuk memverifikasi apakah suatu variabel berasal dari class tertentu.'
    ],
    challenge: {
      instruction: 'Buat class Mobil dengan properti public string $merk; dan cetak nilainya.',
      starterCode: `<?php
class Mobil {
    public string $merk = "Honda";
}
$m = new Mobil();
echo "Merk mobil: " . $m->merk;
?>`,
      hint: 'Akses properti dengan $m->merk.'
    },
    quiz: {
      question: 'Operator apa yang digunakan di PHP untuk memanggil method atau membaca properti dari sebuah objek?',
      options: [
        '-> (Single Arrow)',
        '=> (Double Arrow)',
        ':: (Double Colon)',
        '.'
      ],
      correctIndex: 0,
      explanation: 'Operator -> digunakan untuk mengakses method dan property milik instance objek di PHP.'
    }
  },

  // 3. PHP CONSTRUCTOR
  {
    id: 'php-oop-constructor',
    title: 'PHP Constructor',
    chapter: 'PHP OOP',
    chapterId: 'php-chap-oop',
    order: 3,
    overview: 'Kuasai Magic Method __construct() untuk inisialisasi objek otomatis, nilai default parameter, dan fitur revolusioner PHP 8.0: Constructor Property Promotion.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CONSTRUCTOR</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 03 / 14</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏗️ Constructor & Inisialisasi Objek Otomatis</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Method <code>__construct()</code> adalah method khusus yang <strong>otomatis dieksekusi</strong> saat sebuah objek pertama kali dibuat dengan kata kunci <code>new</code>.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800/50">
          <h4 class="font-bold text-purple-700 dark:text-purple-400 text-sm mb-1">🚀 Constructor Property Promotion (PHP 8.0+)</h4>
          <p class="text-xs text-slate-600 dark:text-slate-400 mb-2">
            PHP 8 memungkinkan Anda mendeklarasikan visibilitas (<code>public</code>, <code>private</code>, <code>protected</code>) langsung di dalam parameter constructor tanpa perlu mengetik deklarasi properti dan <code>$this->prop = $prop</code> berulang kali!
          </p>
          <pre class="bg-slate-950 text-slate-200 p-2.5 rounded text-[11px] font-mono">class User {
    public function __construct(
        public string $nama,
        public string $email,
        public string $role = "STUDENT"
    ) {}
}</pre>
        </div>
      </div>
    `,
    code: `<?php
// Menggunakan sintaks modern PHP 8 Constructor Property Promotion
class SiswaDevGrow {
    public function __construct(
        public string $namaLengkap,
        public string $email,
        public int $xp = 100,
        public string $badge = "Pemula"
    ) {
        // Blok ini dieksekusi otomatis saat 'new SiswaDevGrow(...)' dipanggil
        echo "<p style='color: #4f46e5;'>⚡ Objek siswa <strong>{$this->namaLengkap}</strong> berhasil diinisialisasi!</p>";
    }

    public function getProfil(): string {
        return "Siswa: <strong>{$this->namaLengkap}</strong> ({$this->email}) | XP: <strong>{$this->xp} XP</strong> | Badge: <span style='background: #e0e7ff; padding: 2px 8px; border-radius: 4px;'>{$this->badge}</span>";
    }
}

echo "<h3>Hasil Instansiasi Objek Siswa:</h3>";
$siswa1 = new SiswaDevGrow("Muhammad Rahmat Fadila", "fadila@devgrow.id", 1450, "Full-Stack Master");
$siswa2 = new SiswaDevGrow("Siti Nurhaliza", "siti@gmail.com"); // Memakai nilai default XP & Badge

echo "<h4>Profil Terdaftar:</h4>";
echo "<ul>";
echo "<li>" . $siswa1->getProfil() . "</li>";
echo "<li>" . $siswa2->getProfil() . "</li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'Constructor Property Promotion di PHP 8 memangkas baris kode hingga 60% lebih ringkas dan bebas boilerplate.',
      'Nilai default parameter (seperti $xp = 100) otomatis digunakan jika argumen tidak dikirimkan.'
    ],
    challenge: {
      instruction: 'Buat objek Produk dengan parameter constructor $nama = "Laptop" dan $harga = 8000000.',
      starterCode: `<?php
class Produk {
    public function __construct(public string $nama, public int $harga) {}
}
$p = new Produk("Laptop Asus", 8500000);
echo "Produk: {$p->nama} - Rp " . number_format($p->harga, 0, ',', '.');
?>`,
      hint: 'Klik RUN untuk menguji constructor promotion.'
    },
    quiz: {
      question: 'Nama Magic Method bawaan PHP apakah yang otomatis dijalankan saat sebuah objek diinstansiasi dengan keyword new?',
      options: [
        '__construct()',
        '__init()',
        '__create()',
        '__start()'
      ],
      correctIndex: 0,
      explanation: '__construct() adalah nama method resmi constructor di PHP (diawali dua underscore).'
    }
  },

  // 4. PHP DESTRUCTOR
  {
    id: 'php-oop-destructor',
    title: 'PHP Destructor',
    chapter: 'PHP OOP',
    chapterId: 'php-chap-oop',
    order: 4,
    overview: 'Pelajari Magic Method __destruct(): pembersihan memori otomatis, penutupan koneksi database/file saat objek dihancurkan atau saat skrip PHP selesai dieksekusi.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DESTRUCTOR</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 04 / 14</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧹 Destructor & Pembersihan Resource</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Method <code>__destruct()</code> otomatis dipanggil ketika sebuah objek dihancurkan dari memori atau saat seluruh skrip PHP selesai dieksekusi. Sangat ideal untuk menutup koneksi database, menyimpan status ke disk, atau mencatat log akhir.
          </p>
        </div>
      </div>
    `,
    code: `<?php
class KoneksiDatabaseSimulator {
    public function __construct(public string $dbName) {
        echo "<p style='color: green;'>🟢 [Constructor] Berhasil terhubung ke database: <strong>{$this->dbName}</strong></p>";
    }

    public function jalankanQuery(string $sql): void {
        echo "<p>📊 Mengeksekusi query: <code>$sql</code></p>";
    }

    public function __destruct() {
        echo "<p style='color: red;'>🔴 [Destructor] Koneksi ke database <strong>{$this->dbName}</strong> ditutup secara aman.</p>";
    }
}

echo "<h3>Siklus Hidup Objek (Lifecycle):</h3>";

// Membuat objek
$db = new KoneksiDatabaseSimulator("lms_content_db");
$db->jalankanQuery("SELECT * FROM \"Module\" WHERE id = 'php'");

echo "<p><em>--- Akhir dari blok eksekusi utama skrip ---</em></p>";
// Saat skrip selesai, PHP otomatis memanggil __destruct() untuk membersihkan objek $db
?>`,
    codeExplanation: [
      '__construct() dipanggil paling awal saat objek dibuat.',
      '__destruct() dijamin otomatis dipanggil paling akhir sebelum skrip PHP berhenti total, memastikan tidak terjadi kebocoran memori (memory leak).'
    ],
    challenge: {
      instruction: 'Ketahui bahwa __destruct() tidak memerlukan parameter apa pun.',
      starterCode: `<?php
class Logger {
    public function __destruct() {
        echo "Log session ditutup.";
    }
}
$log = new Logger();
?>`,
      hint: 'Klik RUN untuk melihat eksekusi destructor otomatis.'
    },
    quiz: {
      question: 'Kapan method __destruct() dipanggil secara otomatis oleh PHP?',
      options: [
        'Ketika objek dihancurkan atau ketika skrip PHP selesai dieksekusi',
        'Tepat saat objek pertama kali dibuat',
        'Hanya ketika terjadi Fatal Error',
        'Setiap kali method objek dipanggil'
      ],
      correctIndex: 0,
      explanation: 'Destructor dipanggil saat objek tidak lagi direferensikan di memori atau saat siklus eksekusi skrip PHP berakhir.'
    }
  },

  // 5. PHP ACCESS MODIFIERS
  {
    id: 'php-oop-access-modifiers',
    title: 'PHP Access Modifiers',
    chapter: 'PHP OOP',
    chapterId: 'php-chap-oop',
    order: 5,
    overview: 'Kuasai 3 level visibilitas Enkapsulasi: public (akses bebas), protected (hanya di dalam class & subclass turunan), dan private (eksklusif hanya di class itu sendiri), serta teknik Getter & Setter.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ACCESS MODIFIERS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 05 / 14</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛡️ Enkapsulasi & 3 Tingkat Visibilitas</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Access Modifiers mengontrol dari mana properti dan method dapat diakses, mencegah modifikasi data secara sembarangan dari luar Class.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div class="p-3 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-800/50">
            <code class="text-emerald-700 dark:text-emerald-400 font-bold block mb-1">public</code>
            Dapat diakses dari <strong>mana saja</strong> (luar class, dalam class, dan class turunan).
          </div>
          <div class="p-3 bg-amber-50 dark:bg-amber-950/20 rounded-xl border border-amber-200 dark:border-amber-800/50">
            <code class="text-amber-700 dark:text-amber-400 font-bold block mb-1">protected</code>
            Hanya dapat diakses di <strong>dalam class itu sendiri dan class anak turunannya</strong>.
          </div>
          <div class="p-3 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-800/50">
            <code class="text-rose-700 dark:text-rose-400 font-bold block mb-1">private</code>
            <strong>HANYA</strong> dapat diakses oleh class tempat ia dideklarasikan (paling ketat).
          </div>
        </div>
      </div>
    `,
    code: `<?php
class RekeningBank {
    public string $namaPemilik;
    private float $saldo = 0; // Private: tidak bisa diubah langsung dari luar

    public function __construct(string $nama, float $saldoAwal) {
        $this->namaPemilik = $nama;
        $this->saldo = $saldoAwal;
    }

    // Getter Method (Membaca saldo dengan aman)
    public function getSaldo(): string {
        return "Rp " . number_format($this->saldo, 0, ',', '.');
    }

    // Setter Method dengan Validasi Keamanan
    public function setorTunai(float $nominal): void {
        if ($nominal <= 0) {
            echo "<p style='color: red;'>⚠️ Setoran harus lebih besar dari 0!</p>";
            return;
        }
        $this->saldo += $nominal;
        echo "<p style='color: green;'>✅ Berhasil setor Rp " . number_format($nominal, 0, ',', '.') . "</p>";
    }
}

$akun = new RekeningBank("Muhammad Rahmat Fadila", 500000);

echo "<h3>Akses Rekening Terenkapsulasi:</h3>";
echo "<p>Pemilik: <strong>{$akun->namaPemilik}</strong> (Public)</p>";
echo "<p>Saldo Awal: <strong>" . $akun->getSaldo() . "</strong> (Melalui Getter)</p>";

$akun->setorTunai(250000);
echo "<p>Saldo Akhir: <strong>" . $akun->getSaldo() . "</strong></p>";
?>`,
    codeExplanation: [
      'Properti private $saldo melindungi data uang agar tidak bisa diubah sembarangan seperti $akun->saldo = 999999999 (akan memicu Fatal Error).',
      'Perubahan saldo wajib melalui method setorTunai() yang memiliki aturan validasi ketat.'
    ],
    challenge: {
      instruction: 'Ketahui bahwa mengakses properti private langsung dari luar class akan memicu Error.',
      starterCode: `<?php
class Akun {
    private string $pin = "1234";
    public function cekPin(string $input): bool {
        return $this->pin === $input;
    }
}
$a = new Akun();
echo "Status PIN: " . ($a->cekPin("1234") ? "Cocok" : "Salah");
?>`,
      hint: 'Klik RUN untuk menguji validasi getter/setter.'
    },
    quiz: {
      question: 'Access modifier manakah yang membatasi akses properti HANYA untuk class tempat properti tersebut dideklarasikan, bahkan tidak bisa diakses oleh class anak turunannya?',
      options: [
        'private',
        'protected',
        'public',
        'static'
      ],
      correctIndex: 0,
      explanation: 'private adalah level visibilitas paling ketat yang hanya dapat diakses oleh metode di dalam class yang sama.'
    }
  },

  // 6. PHP INHERITANCE
  {
    id: 'php-oop-inheritance',
    title: 'PHP Inheritance',
    chapter: 'PHP OOP',
    chapterId: 'php-chap-oop',
    order: 6,
    overview: 'Kuasai konsep Pewarisan (Inheritance) dengan kata kunci extends, pemanggilan parent::__construct(), method overriding, dan kata kunci final untuk mencegah pewarisan/overriding.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PEWARISAN</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 06 / 14</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧬 Pewarisan Sifat (Inheritance) di PHP</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Inheritance memungkinkan Class Anak (<em>Child Class</em>) mewarisi semua properti dan method <code>public</code> dan <code>protected</code> dari Class Induk (<em>Parent Class</em>) menggunakan kata kunci <code>extends</code>.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-purple-600 dark:text-purple-400 block mb-1">parent::__construct()</strong>
            Memanggil constructor class induk untuk menginisialisasi properti dasar.
          </div>
          <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-rose-600 dark:text-rose-400 block mb-1">Kata Kunci final</strong>
            Mencegah class diwarisi (<code>final class</code>) atau mencegah method di-override (<code>final public function</code>).
          </div>
        </div>
      </div>
    `,
    code: `<?php
// Class Induk (Parent Class)
class PenggunaLMS {
    public function __construct(
        public string $nama,
        public string $email
    ) {}

    public function perkenalan(): string {
        return "Halo, saya {$this->nama} ({$this->email})";
    }
}

// Class Anak (Child Class) mewarisi PenggunaLMS
class Instruktur extends PenggunaLMS {
    public function __construct(
        string $nama,
        string $email,
        public string $keahlianUtama,
        public int $totalKursus = 5
    ) {
        // Panggil constructor induk
        parent::__construct($nama, $email);
    }

    // Method Overriding (Memperkaya method induk)
    public function perkenalan(): string {
        return parent::perkenalan() . " | 👨‍🏫 Instruktur Spesialis: <strong>{$this->keahlianUtama}</strong> ({$this->totalKursus} Kursus Aktif)";
    }
}

$guru = new Instruktur("Muhammad Rahmat Fadila", "fadila@devgrow.id", "PHP 8 & Laravel Architecture");

echo "<h3>Demonstrasi Inheritance & Method Overriding:</h3>";
echo "<p>" . $guru->perkenalan() . "</p>";
?>`,
    codeExplanation: [
      'Class Instruktur extends PenggunaLMS otomatis mewarisi properti $nama dan $email.',
      'parent::__construct($nama, $email) meneruskan inisialisasi ke class induk.',
      'parent::perkenalan() mengambil hasil string method induk lalu menambahkan informasi spesifik instruktur.'
    ],
    challenge: {
      instruction: 'Gunakan kata kunci extends untuk membuat class Mobil yang mewarisi Kendaraan.',
      starterCode: `<?php
class Kendaraan {
    public string $tipe = "Darat";
}
class Mobil extends Kendaraan {
    public string $roda = "4 Roda";
}
$m = new Mobil();
echo "Tipe: {$m->tipe}, Roda: {$m->roda}";
?>`,
      hint: 'Gunakan class Mobil extends Kendaraan.'
    },
    quiz: {
      question: 'Kata kunci apakah yang digunakan untuk mendeklarasikan bahwa suatu Class mewarisi Class lain di PHP?',
      options: [
        'extends',
        'implements',
        'inherits',
        'using'
      ],
      correctIndex: 0,
      explanation: 'extends digunakan untuk pewarisan class (inheritance), sedangkan implements digunakan untuk interface.'
    }
  },

  // 7. PHP CONSTANTS (CLASS CONSTANTS)
  {
    id: 'php-oop-constants',
    title: 'PHP Class Constants',
    chapter: 'PHP OOP',
    chapterId: 'php-chap-oop',
    order: 7,
    overview: 'Pelajari konstanta di dalam Class (Class Constants) menggunakan const, Scope Resolution Operator (::), keyword self::, dan visibilitas konstanta (public, protected, private) di PHP 7.1+.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CLASS CONSTANTS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 07 / 14</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔒 Konstanta di dalam Class (const)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Class Constants adalah nilai konstan yang melekat pada definisi Class itu sendiri (bukan pada instance objek individual). Diakses menggunakan <strong>Scope Resolution Operator (<code>::</code>)</strong>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
class KonfigurasiServer {
    // Class Constants dengan Visibilitas
    public const VERSI = "3.2.0-LTS";
    public const PROTOKOL = "HTTPS / TLS 1.3";
    private const ENCRYPTION_KEY = "DEVGROW_SECRET_KEY";

    public static function getInfo(): string {
        // Akses di dalam class menggunakan self::
        return "Server Berjalan di Versi " . self::VERSI . " (" . self::PROTOKOL . ")";
    }
}

// Akses dari luar class menggunakan NamaClass::KONSTANTA
echo "<h3>Informasi Konstanta Class:</h3>";
echo "<p>Versi API: <strong>" . KonfigurasiServer::VERSI . "</strong></p>";
echo "<p>Protokol: <strong>" . KonfigurasiServer::PROTOKOL . "</strong></p>";
echo "<p>Ringkasan: " . KonfigurasiServer::getInfo() . "</p>";
?>`,
    codeExplanation: [
      'Konstanta class dideklarasikan dengan kata kunci const (tanpa tanda $).',
      'Di luar class, konstanta diakses dengan NamaClass::KONSTANTA.',
      'Di dalam method class, konstanta diakses dengan self::KONSTANTA.'
    ],
    challenge: {
      instruction: 'Akses konstanta KURS dari class Finansial::KURS.',
      starterCode: `<?php
class Finansial {
    public const KURS = 16250;
}
echo "Kurs: Rp " . Finansial::KURS;
?>`,
      hint: 'Panggil Finansial::KURS.'
    },
    quiz: {
      question: 'Kata kunci apakah yang digunakan untuk merujuk pada konstanta class di dalam method internal class itu sendiri?',
      options: [
        'self::',
        '$this->',
        'parent::',
        'this::'
      ],
      correctIndex: 0,
      explanation: 'self:: digunakan untuk mengakses konstanta dan properti/method statis milik class saat ini.'
    }
  },

  // 8. PHP ABSTRACT CLASSES
  {
    id: 'php-oop-abstract-classes',
    title: 'PHP Abstract Classes',
    chapter: 'PHP OOP',
    chapterId: 'php-chap-advanced',
    order: 8,
    overview: 'Pahami Kelas Abstrak (Abstract Classes) dan Metode Abstrak (Abstract Methods): kontrak arsitektur yang mewajibkan seluruh class anak mengimplementasikan method tersebut.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ABSTRACT CLASSES</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 08 / 14</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📐 Kelas Abstrak (Abstract Classes)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Class Abstrak adalah class yang <strong>tidak dapat diinstansiasi secara langsung</strong> (tidak bisa di-<code>new</code>). Fungsinya adalah menjadi kerangka acuan dasar (templat standar) bagi class-class turunannya.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Abstract Parent Class
abstract class PaymentGateway {
    public function __construct(public float $nominal) {}

    // Method konkrit biasa (sudah ada isinya)
    public function getFormattedNominal(): string {
        return "Rp " . number_format($this->nominal, 0, ',', '.');
    }

    // Abstract Method: WAJIB diimplementasikan oleh setiap class anak!
    abstract public function prosesTransaksi(): string;
}

// Child Class 1: Gateway Midtrans
class MidtransGateway extends PaymentGateway {
    public function prosesTransaksi(): string {
        return "💳 Memproses pembayaran sebesar " . $this->getFormattedNominal() . " via Midtrans Snap API...";
    }
}

// Child Class 2: Gateway Xendit
class XenditGateway extends PaymentGateway {
    public function prosesTransaksi(): string {
        return "⚡ Membuat QRIS Dinamis sebesar " . $this->getFormattedNominal() . " via Xendit API...";
    }
}

$pay1 = new MidtransGateway(150000);
$pay2 = new XenditGateway(350000);

echo "<h3>Hasil Eksekusi Payment Gateway (Abstract Pattern):</h3>";
echo "<ul>";
echo "<li>" . $pay1->prosesTransaksi() . "</li>";
echo "<li>" . $pay2->prosesTransaksi() . "</li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'abstract public function prosesTransaksi(); tidak memiliki kurung kurawal tubuh fungsi, melainkan hanya mendeklarasikan signature kontrak.',
      'Jika class anak lupa mengimplementasikan method abstract tersebut, PHP akan memunculkan Fatal Error seketika.'
    ],
    challenge: {
      instruction: 'Ketahui bahwa class abstract tidak bisa dibuat langsung dengan new.',
      starterCode: `<?php
abstract class Hewan {
    abstract public function bersuara(): string;
}
class Kucing extends Hewan {
    public function bersuara(): string { return "Meong!"; }
}
$k = new Kucing();
echo $k->bersuara();
?>`,
      hint: 'Klik RUN untuk menguji implementasi abstract class.'
    },
    quiz: {
      question: 'Apakah kita bisa membuat objek baru secara langsung dari sebuah Abstract Class menggunakan kata kunci "new AbstractClass()"?',
      options: [
        'Tidak bisa, Abstract Class hanya bisa diwarisi oleh class anak',
        'Bisa kapan saja',
        'Bisa asalkan parameternya kosong',
        'Hanya bisa jika didefinisikan sebagai public'
      ],
      correctIndex: 0,
      explanation: 'Abstract Class tidak dapat diinstansiasi secara langsung. Anda harus membuat class anak konkrit yang mewarisinya terlebih dahulu.'
    }
  },

  // 9. PHP INTERFACES
  {
    id: 'php-oop-interfaces',
    title: 'PHP Interfaces',
    chapter: 'PHP OOP',
    chapterId: 'php-chap-oop',
    order: 9,
    overview: 'Kuasai Interface di PHP: kata kunci interface, implements, implementasi banyak interface sekaligus (Multiple Interfaces), dan perbedaan Interface vs Abstract Class.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">INTERFACES</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 09 / 14</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔌 Interface (Kontrak Standar Murni)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Interface adalah kontrak 100% murni yang menetapkan method apa saja yang <strong>wajib dimiliki</strong> oleh sebuah class, tanpa menyertakan kode implementasi apa pun. Sebuah class di PHP dapat mengimplementasikan <strong>banyak interface sekaligus (Multiple Inheritance of Interfaces)</strong>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Interface 1: Notifikasi
interface Notifiable {
    public function kirimPesan(string $penerima, string $pesan): bool;
}

// Interface 2: Log Audit
interface Auditable {
    public function catatLog(string $aktivitas): void;
}

// Class LayananNotifikasi mengimplementasikan DUA interface sekaligus
class LayananWhatsApp implements Notifiable, Auditable {
    public function kirimPesan(string $penerima, string $pesan): bool {
        echo "<p style='color: green;'>📲 [WhatsApp] Mengirim ke <strong>$penerima</strong>: \"$pesan\"</p>";
        $this->catatLog("Pesan WA berhasil terkirim ke $penerima.");
        return true;
    }

    public function catatLog(string $aktivitas): void {
        echo "<p style='font-size: 11px; color: #64748b;'>📝 [Audit Log] " . date("H:i:s") . " - $aktivitas</p>";
    }
}

$wa = new LayananWhatsApp();

echo "<h3>Hasil Pengujian Multi-Interface:</h3>";
$wa->kirimPesan("+628123456789", "Selamat, pendaftaran modul PHP Anda berhasil terverifikasi!");
?>`,
    codeExplanation: [
      'Kata kunci implements digunakan saat Class mengadopsi satu atau beberapa interface yang dipisahkan koma.',
      'Semua method di dalam interface wajib berstatus public.'
    ],
    challenge: {
      instruction: 'Gunakan kata kunci implements untuk menerapkan interface Logger ke dalam class FileLogger.',
      starterCode: `<?php
interface Logger {
    public function log(string $msg): void;
}
class FileLogger implements Logger {
    public function log(string $msg): void {
        echo "Log: $msg";
    }
}
$l = new FileLogger();
$l->log("Sistem Siap");
?>`,
      hint: 'Gunakan class FileLogger implements Logger.'
    },
    quiz: {
      question: 'Berapa banyak Interface yang dapat diimplementasikan oleh sebuah Class di PHP?',
      options: [
        'Bisa mengimplementasikan banyak Interface sekaligus (dipisahkan tanda koma)',
        'Hanya 1 Interface saja',
        'Maksimal 2 Interface',
        'Tidak terbatas tetapi hanya untuk class final'
      ],
      correctIndex: 0,
      explanation: 'PHP mendukung implementasi banyak interface sekaligus pada satu class menggunakan format: class MyClass implements InterfaceA, InterfaceB, InterfaceC.'
    }
  },

  // 10. PHP TRAITS
  {
    id: 'php-oop-traits',
    title: 'PHP Traits',
    chapter: 'PHP OOP',
    chapterId: 'php-chap-oop',
    order: 10,
    overview: 'Pelajari Traits untuk mengatasi keterbatasan Single Inheritance di PHP: kata kunci trait, use, berbagi method antar-class independen, dan resolusi konflik dengan insteadof.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TRAITS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 10 / 14</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧬 Kode Guna Ulang Lintas Class (Traits)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            PHP hanya mendukung pewarisan tunggal (Single Inheritance). <strong>Traits</strong> hadir untuk menyisipkan kumpulan method ke dalam berbagai class berbeda tanpa memerlukan hubungan pewarisan keluarga class.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Trait 1: Generator Slug URL
trait HasSlug {
    public function generateSlug(string $teks): string {
        return strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $teks)));
    }
}

// Trait 2: Timestamp Helper
trait HasTimestamps {
    public function getFormattedDate(): string {
        return date("d F Y, H:i:s");
    }
}

// Class Artikel menyisipkan kedua Trait menggunakan keyword 'use'
class ArtikelBlog {
    use HasSlug, HasTimestamps;

    public function __construct(public string $judul) {}
}

$artikel = new ArtikelBlog("Mastering PHP 8 & Modern Laravel Architecture");

echo "<h3>Demonstrasi Penggunaan Traits:</h3>";
echo "<p>Judul Asli: <strong>{$artikel->judul}</strong></p>";
echo "<p>Slug URL (dari Trait HasSlug): <code>{$artikel->generateSlug($artikel->judul)}</code></p>";
echo "<p>Waktu Terbit (dari Trait HasTimestamps): <strong>{$artikel->getFormattedDate()}</strong></p>";
?>`,
    codeExplanation: [
      'Kata kunci use HasSlug, HasTimestamps; menyuntikkan seluruh method trait ke dalam class ArtikelBlog.',
      'Sangat sering digunakan di framework seperti Laravel (misal: use HasApiTokens, HasFactory, Notifiable).'
    ],
    challenge: {
      instruction: 'Gunakan kata kunci use di dalam class untuk menyisipkan trait.',
      starterCode: `<?php
trait Pesan {
    public function halo() { return "Halo dari Trait!"; }
}
class Web {
    use Pesan;
}
$w = new Web();
echo $w->halo();
?>`,
      hint: 'Ketik use Pesan; di dalam tubuh class.'
    },
    quiz: {
      question: 'Kata kunci apakah yang digunakan di dalam Class untuk menyertakan / mengadopsi sebuah Trait?',
      options: [
        'use',
        'include',
        'implements',
        'import'
      ],
      correctIndex: 0,
      explanation: 'Kata kunci use di dalam deklarasi Class digunakan untuk menyertakan satu atau lebih Trait.'
    }
  },

  // 11. PHP STATIC METHODS
  {
    id: 'php-oop-static-methods',
    title: 'PHP Static Methods',
    chapter: 'PHP OOP',
    chapterId: 'php-chap-oop',
    order: 11,
    overview: 'Pelajari Static Methods: method yang dapat dipanggil langsung dari nama Class tanpa perlu instansiasi objek (new), kata kunci static, self::, dan Late Static Binding (static::).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">STATIC METHODS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 11 / 14</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚡ Method Statis (Tanpa Perlu Keyword 'new')</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Static Methods dideklarasikan dengan kata kunci <code>static</code> dan dapat dipanggil langsung melalui nama class: <code>NamaClass::namaMethod()</code>. Sangat ideal untuk fungsi utilitas / helper.
          </p>
        </div>
      </div>
    `,
    code: `<?php
class FormatHelper {
    // Static Method Format Rupiah
    public static function rupiah(float $angka): string {
        return "Rp " . number_format($angka, 0, ',', '.');
    }

    // Static Method Format Tanggal Indo
    public static function tanggalIndonesia(string $tanggal): string {
        return date("d F Y", strtotime($tanggal));
    }
}

// Pemanggilan langsung tanpa membuat instance objek (new)
echo "<h3>Hasil Pemanggilan Static Method:</h3>";
echo "<p>Format Uang: <strong>" . FormatHelper::rupiah(750000) . "</strong></p>";
echo "<p>Format Tanggal: <strong>" . FormatHelper::tanggalIndonesia("2026-08-27") . "</strong></p>";
?>`,
    codeExplanation: [
      'FormatHelper::rupiah() dipanggil langsung tanpa perlu $helper = new FormatHelper().',
      'Ingat: Di dalam static method, Anda TIDAK BISA menggunakan $this karena tidak ada instance objek aktif.'
    ],
    challenge: {
      instruction: 'Panggil static method Matematika::tambah(15, 25).',
      starterCode: `<?php
class Matematika {
    public static function tambah(int $a, int $b): int { return $a + $b; }
}
echo "15 + 25 = " . Matematika::tambah(15, 25);
?>`,
      hint: 'Panggil Matematika::tambah(15, 25).'
    },
    quiz: {
      question: 'Mengapa variabel pseudo $this TIDAK DAPAT digunakan di dalam sebuah Static Method?',
      options: [
        'Karena Static Method berjalan di level Class dan tidak terikat pada instance objek mana pun',
        'Karena $this hanya untuk angka',
        'Karena PHP melarang $this setelah versi 7',
        'Bisa digunakan jika diberi tanda kutip'
      ],
      correctIndex: 0,
      explanation: '$this merujuk ke instance objek aktif saat ini, sedangkan Static Method dieksekusi tanpa adanya objek instance.'
    }
  },

  // 12. PHP STATIC PROPERTIES
  {
    id: 'php-oop-static-properties',
    title: 'PHP Static Properties',
    chapter: 'PHP OOP',
    chapterId: 'php-chap-oop',
    order: 12,
    overview: 'Pelajari Static Properties: variabel yang nilainya dibagi dan dibagi-pakai bersama (shared state) oleh semua instance objek di dalam Class.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">STATIC PROPERTIES</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 12 / 14</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📊 Variabel Statis Bersama (Static Properties)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Static Property adalah variabel class yang nilainya disimpan di satu tempat memori dan <strong>dibagikan ke semua instance objek</strong>. Sering digunakan untuk menghitung total objek yang telah dibuat (Counter Tracker).
          </p>
        </div>
      </div>
    `,
    code: `<?php
class MemberDevGrow {
    // Static Property untuk menghitung total member terdaftar
    public static int $totalMember = 0;

    public function __construct(public string $nama) {
        // Setiap kali 'new MemberDevGrow' dibuat, naikkan counter statis
        self::$totalMember++;
    }
}

// Instansiasi beberapa member
$m1 = new MemberDevGrow("Andi Pratama");
$m2 = new MemberDevGrow("Budi Santoso");
$m3 = new MemberDevGrow("Citra Lestari");
$m4 = new MemberDevGrow("Muhammad Rahmat Fadila");

echo "<h3>Statistik Pendaftaran Member:</h3>";
echo "<p>Total Member Aktif Terdaftar: <strong style='color: #4f46e5; font-size: 18px;'>" . MemberDevGrow::$totalMember . " Orang</strong></p>";
?>`,
    codeExplanation: [
      'self::$totalMember++ menambahkan nilai counter bersama di memori class.',
      'Nilai $totalMember bernilai 4 karena constructor telah dijalankan 4 kali.'
    ],
    challenge: {
      instruction: 'Akses properti statis Counter::$count.',
      starterCode: `<?php
class Counter {
    public static int $count = 10;
}
echo "Jumlah Counter: " . Counter::$count;
?>`,
      hint: 'Gunakan Counter::$count.'
    },
    quiz: {
      question: 'Bagaimana cara mengakses static property dari luar class?',
      options: [
        'NamaClass::$namaProperty',
        'NamaClass->namaProperty',
        '$object.namaProperty',
        'get_static(NamaClass)'
      ],
      correctIndex: 0,
      explanation: 'Static Property diakses menggunakan Scope Resolution Operator :: dan tanda dollar (NamaClass::$property).'
    }
  },

  // 13. PHP NAMESPACES
  {
    id: 'php-oop-namespaces',
    title: 'PHP Namespaces',
    chapter: 'PHP OOP',
    chapterId: 'php-chap-oop',
    order: 13,
    overview: 'Kuasai Namespaces di PHP: mencegah konflik nama class (Name Collisions), kata kunci namespace, use, aliasing dengan as, dan standar arsitektur PSR-4 Autoloading Composer.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">NAMESPACES</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 13 / 14</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🗂️ Pengorganisasian Kode dengan Namespaces</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Namespace mirip seperti folder direktori di komputer. Dua class bernama <code>User</code> dapat hidup berdampingan tanpa bentrok jika diletakkan di namespace berbeda (misal <code>App\\Models\\User</code> dan <code>App\\Services\\User</code>).
          </p>
        </div>

        <div class="p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs border border-slate-800 space-y-2">
          <div class="text-amber-400 font-bold">Penggunaan di File Utama (use & as):</div>
          <pre class="text-sky-300">use App\\Controllers\\AdminController as Admin;
use App\\Models\\User;</pre>
        </div>
      </div>
    `,
    code: `<?php
// Simulasi Namespace Backend
namespace App\\Services {
    class PaymentProcessor {
        public function charge(float $amount): string {
            return "✅ Berhasil memproses tagihan Rp " . number_format($amount, 0, ',', '.') . " di namespace App\\Services.";
        }
    }
}

namespace App\\Models {
    class Module {
        public function getTitle(): string {
            return "PHP OOP Masterclass";
        }
    }
}

// Simulasi Konsumsi di Ruang Global
namespace {
    use App\\Services\\PaymentProcessor;
    use App\\Models\\Module as ModulPelajaran;

    $payment = new PaymentProcessor();
    $modul = new ModulPelajaran();

    echo "<h3>Hasil Pengujian Namespaces:</h3>";
    echo "<p>Judul Modul: <strong>" . $modul->getTitle() . "</strong></p>";
    echo "<p>" . $payment->charge(250000) . "</p>";
}
?>`,
    codeExplanation: [
      'Kata kunci namespace wajib ditulis di baris paling atas file PHP.',
      'Kata kunci use mengimpor class ke scope saat ini, dan as memberikan nama alias singkat.'
    ],
    challenge: {
      instruction: 'Pelajari penulisan use App\\Models\\User;',
      starterCode: `<?php
echo "Standar PSR-4 menghubungkan Namespace dengan struktur folder di server.";
?>`,
      hint: 'Klik RUN untuk mereview konsep namespace.'
    },
    quiz: {
      question: 'Apa fungsi utama dari Namespace di PHP?',
      options: [
        'Mencegah bentrokan nama class, fungsi, atau konstanta saat menggunakan banyak pustaka pihak ketiga',
        'Mempercepat kecepatan koneksi internet server',
        'Mengubah kode PHP menjadi bahasa C++',
        'Membuat database baru secara otomatis'
      ],
      correctIndex: 0,
      explanation: 'Namespace mengelompokkan class dan mencegah tabrakan nama (name collision) antar paket pustaka dalam proyek berskala besar.'
    }
  },

  // 14. PHP ITERABLES
  {
    id: 'php-oop-iterables',
    title: 'PHP Iterables',
    chapter: 'PHP OOP',
    chapterId: 'php-chap-oop',
    order: 14,
    overview: 'Kuasai pseudo-type iterable di PHP: menerima Array maupun objek yang mengimplementasikan interface Traversable/Iterator, fungsi is_iterable(), dan Generators (yield).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ITERABLES</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 14 / 14</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔄 Tipe Data Iterable & Generator (yield)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>iterable</code> adalah tipe data semu di PHP yang dapat menerima <strong>Array apa saja</strong> atau <strong>Objek apa saja yang dapat diulang dengan loop <code>foreach</code></strong>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Fungsi yang menerima tipe data iterable
function cetakDaftar(iterable $koleksiData): void {
    echo "<ul>";
    foreach ($koleksiData as $item) {
        echo "<li>$item</li>";
    }
    echo "</ul>";
}

// 1. Mengirimkan Array biasa ke iterable
$daftarArray = ["HTML5", "CSS3", "JavaScript", "PHP 8"];

// 2. Generator Function yang menggunakan yield (Sangat Hemat Memori)
function generateTahun(): iterable {
    yield "Tahun 2024 (Rilis PHP 8.3)";
    yield "Tahun 2025 (Pembaruan Ekosistem)";
    yield "Tahun 2026 (DevGrow LMS 2.0)";
}

echo "<h3>Pengujian Tipe Data Iterable:</h3>";
echo "<h4>1. Data dari Array:</h4>";
cetakDaftar($daftarArray);

echo "<h4>2. Data dari Generator (yield):</h4>";
cetakDaftar(generateTahun());
?>`,
    codeExplanation: [
      'Tipe hint iterable $koleksiData memberikan fleksibilitas tinggi pada fungsi untuk menerima array maupun generator tanpa perlu konversi tipe data.',
      'Generator yield mengalirkan data satu per satu sesuai kebutuhan, sangat menghemat RAM saat memproses jutaan baris data file besar.'
    ],
    challenge: {
      instruction: 'Uji apakah variabel $data = ["A", "B"] adalah iterable menggunakan is_iterable($data).',
      starterCode: `<?php
$data = ["A", "B", "C"];
if (is_iterable($data)) {
    echo "Variabel \$data dapat diulang dengan foreach (is_iterable)!";
}
?>`,
      hint: 'Panggil is_iterable($data).'
    },
    quiz: {
      question: 'Kata kunci apakah yang digunakan di dalam fungsi Generator PHP untuk menghasilkan nilai satu per satu secara efisien memori?',
      options: [
        'yield',
        'return',
        'generate',
        'stream'
      ],
      correctIndex: 0,
      explanation: 'Kata kunci yield mengembalikan nilai satu per satu dari fungsi generator sambil menjeda eksekusi tanpa memuat seluruh array ke RAM.'
    }
  }
];

module.exports = phpPart6Oop;
