// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (KEYWORDS PART 1: 300-313)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart29RefKeywords1 = [
  // 300. ABSTRACT
  {
    id: 'php-kw-abstract',
    title: 'PHP Keyword: abstract',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 300,
    overview: 'Kuasai keyword abstract: mendeklarasikan kelas abstrak (Abstract Class) dan metode abstrak (Abstract Method) sebagai cetak biru kontrak yang wajib diimplementasikan oleh kelas turunan.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PHP KEYWORDS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 300 / 326</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏛️ Kelas & Metode Abstrak (abstract)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Keyword <code>abstract</code> menandai kelas yang tidak dapat diinstansiasi secara langsung menggunakan <code>new</code>. Metode yang dideklarasikan dengan <code>abstract</code> hanya mendefinisikan tanda tangan (signature) tanpa blok tubuh kode <code>{}</code> dan mewajibkan setiap kelas anak untuk membuat implementasi konkritnya.
          </p>
        </div>
      </div>
    `,
    code: `<?php
abstract class PaymentGateway {
    protected string $merchantId;

    public function __construct(string $merchantId) {
        $this->merchantId = $merchantId;
    }

    // Metode abstrak: Wajib diimplementasikan oleh kelas turunan
    abstract public function prosesPembayaran(float $jumlah): string;
}

class MidtransGateway extends PaymentGateway {
    public function prosesPembayaran(float $jumlah): string {
        return "Pembayaran Rp " . number_format($jumlah, 0, ',', '.') . " sukses diproses via Midtrans ({$this->merchantId}).";
    }
}

$midtrans = new MidtransGateway("MID-998822");

echo "<h3>Hasil Penggunaan Keyword abstract:</h3>";
echo "<p style='color: #059669; font-weight: bold;'>✓ " . $midtrans->prosesPembayaran(250000) . "</p>";
?>`,
    codeExplanation: [
      'abstract class PaymentGateway tidak dapat diinstansiasi langsung (new PaymentGateway() akan memicu Fatal Error).',
      'MidtransGateway meng-extend kelas abstrak dan mengimplementasikan metode prosesPembayaran().'
    ],
    challenge: {
      instruction: 'Buat kelas turunan dari abstract class dan panggil metodenya.',
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
      hint: 'Instansiasi class Kucing dan panggil bersuara().'
    },
    quiz: {
      question: 'Apa yang terjadi jika kita mencoba membuat objek langsung dari sebuah Abstract Class menggunakan sintaks `new AbstractClass()`?',
      options: [
        'Memicu Fatal Error: Cannot instantiate abstract class',
        'Objek tetap terbentuk secara normal',
        'Menghasilkan nilai null',
        'PHP otomatis mengubahnya menjadi interface'
      ],
      correctIndex: 0,
      explanation: 'Abstract class dirancang sebagai cetak biru murni dan tidak boleh diinstansiasi secara langsung.'
    }
  },

  // 301. AND
  {
    id: 'php-kw-and',
    title: 'PHP Keyword: and',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 301,
    overview: 'Kuasai operator logika and: membandingkan dua kondisi boolean dengan tingkat prioritas presedensi yang LEBIH RENDAH daripada operator penugasan (=) dan operator &&.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">LOGICAL OPERATOR</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 301 / 326</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔗 Operator Logika AND (and)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Keyword <code>and</code> mengembalikan <code>true</code> jika kedua operan bernilai benar. <strong>PENTING:</strong> <code>and</code> memiliki presedensi lebih rendah dari <code>=</code> sehingga ekspresi <code>$hasil = true and false;</code> akan mengisi <code>$hasil</code> dengan <code>true</code>! Untuk evaluasi ekspresi standar selalu utamakan <code>&&</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$umur = 20;
$punyaKtp = true;

// 1. Penggunaan standar dalam if
if ($umur >= 17 and $punyaKtp) {
    echo "<h3>Hasil Penggunaan Keyword 'and':</h3>";
    echo "<p style='color: green;'><strong>✓ Memenuhi syarat pembuatan SIM.</strong></p>";
}

// 2. Jebakan Presedensi Operator 'and' vs '&&'
$res1 = false && true; // $res1 = false
$res2 = false and true; // $res2 = false (ekspresi ($res2 = false) dievaluasi lebih dulu!)

$boolTest = ($res1 === $res2);
echo "<p>Presedensi 'and' lebih rendah dari '=': <strong>" . ($boolTest ? "Benar" : "Beda") . "</strong></p>";
?>`,
    codeExplanation: [
      'and mengevaluasi logika AND.',
      'Perbedaan presedensi membuat && lebih disukai untuk penugasan variabel.'
    ],
    challenge: {
      instruction: 'Uji kondisi logika dengan keyword and.',
      starterCode: `<?php
$login = true;
$admin = true;
if ($login and $admin) {
    echo "Akses Admin Diberikan";
}
?>`,
      hint: 'Jalankan kondisi if ($login and $admin).'
    },
    quiz: {
      question: 'Berapakah nilai variabel $a pada baris kode `$a = true and false;`?',
      options: [
        'true (karena operator penugasan = memiliki presedensi lebih tinggi daripada and)',
        'false',
        'null',
        'Error syntax'
      ],
      correctIndex: 0,
      explanation: 'Karena presedensi = lebih tinggi dari and, PHP menjalankan ($a = true) terlebih dahulu sebelum operasi and.'
    }
  },

  // 302. AS
  {
    id: 'php-kw-as',
    title: 'PHP Keyword: as',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 302,
    overview: 'Kuasai keyword as: memecah elemen Array pada perulangan foreach (foreach ($items as $key => $val)) dan memberikan nama alias pada import namespace/trait (use App\\Models\\User as Account).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">KEYWORD AS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 302 / 326</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔀 Keyword Iterator & Aliasing (as)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Keyword <code>as</code> memiliki 2 fungsi vital: (1) Menunjuk variabel penampung kunci dan nilai pada perulangan <code>foreach ($arr as $key => $val)</code>, dan (2) Membuat nama alias class/trait/namespace pada pernyataan <code>use Namespace\\Class as Alias</code> untuk mencegah bentrok nama class.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// 1. Penggunaan 'as' dalam foreach
$daftarKursus = [
    "FE" => "Frontend React & Tailwind",
    "BE" => "Backend PHP 8 & PostgreSQL",
    "FS" => "Fullstack Modern Web"
];

echo "<h3>1. Penggunaan 'as' dalam foreach:</h3>";
echo "<ul>";
foreach ($daftarKursus as $kode => $namaKursus) {
    echo "<li><strong>[$kode]</strong> $namaKursus</li>";
}
echo "</ul>";
?>`,
    codeExplanation: [
      'foreach ($arr as $k => $v) memetakan array key dan value ke variabel lokal.',
      'use App\\Services\\Payment as PayService menggunakan as untuk aliasing.'
    ],
    challenge: {
      instruction: 'Lakukan perulangan array dengan foreach ($list as $item).',
      starterCode: `<?php
$list = ["PHP", "JavaScript", "Python"];
foreach ($list as $item) {
    echo $item . " ";
}
?>`,
      hint: 'Gunakan foreach ($list as $item).'
    },
    quiz: {
      question: 'Di mana sajakah keyword `as` digunakan dalam sintaks PHP?',
      options: [
        'Pada perulangan `foreach` dan pernyataan aliasing `use ... as ...` pada namespace/trait',
        'Hanya di switch-case',
        'Hanya di fungsi matematika',
        'Untuk membuat database'
      ],
      correctIndex: 0,
      explanation: 'as digunakan pada perulangan foreach dan aliasing namespace/trait.'
    }
  },

  // 303. BREAK
  {
    id: 'php-kw-break',
    title: 'PHP Keyword: break',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 303,
    overview: 'Kuasai keyword break: menghentikan seketika eksekusi perulangan (for, foreach, while, do-while) atau struktur switch-case, dengan dukungan keluar dari level bersarang (break 2).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">LOOP CONTROL</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 303 / 326</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛑 Menghentikan Loop & Switch (break)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>break</code> langsung melompat keluar dari blok perulangan atau struktur <code>switch</code> saat suatu kondisi terpenuhi. Argumen numerik opsional seperti <code>break 2;</code> memungkinkan Anda keluar dari 2 level loop bersarang (nested loops) sekaligus.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>1. Contoh break pada Perulangan:</h3>";
for ($i = 1; $i <= 10; $i++) {
    if ($i === 5) {
        echo "<p style='color: #dc2626;'><strong>Loop dihentikan paksa pada angka 5 oleh perintah break!</strong></p>";
        break;
    }
    echo "Angka: $i, ";
}

echo "<h3>2. Contoh break 2 pada Nested Loop:</h3>";
for ($baris = 1; $baris <= 3; $baris++) {
    for ($kolom = 1; $kolom <= 3; $kolom++) {
        if ($baris === 2 && $kolom === 2) {
            echo "<p>Keluar dari 2 tingkat loop sekaligus di ($baris, $kolom).</p>";
            break 2; // Keluar dari kedua loop
        }
    }
}
?>`,
    codeExplanation: [
      'break menghentikan iterasi loop saat itu juga.',
      'break 2 keluar dari loop dalam dan loop luar sekaligus.'
    ],
    challenge: {
      instruction: 'Gunakan break saat $i bernilai 3 dalam perulangan.',
      starterCode: `<?php
for ($i = 1; $i <= 5; $i++) {
    if ($i == 3) break;
    echo $i . " ";
}
?>`,
      hint: 'Gunakan if ($i == 3) break;.'
    },
    quiz: {
      question: 'Apa fungsi dari perintah `break 2;` di dalam perulangan bersarang?',
      options: [
        'Menghentikan 2 level struktur perulangan (loop dalam dan loop luar) secara bersamaan',
        'Menunda eksekusi selama 2 detik',
        'Mengulang loop 2 kali lagi',
        'Membagi angka dengan 2'
      ],
      correctIndex: 0,
      explanation: 'Argumen numerik pada break menentukan berapa tingkat blok loop/switch yang ingin dihentikan.'
    }
  },

  // 304. CALLABLE
  {
    id: 'php-kw-callable',
    title: 'PHP Type: callable',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 304,
    overview: 'Kuasai type hint callable: tipe data yang menerima fungsi anonim (Closure), nama fungsi string ("trim"), atau method array ([$obj, "method"]) sebagai callback parameter.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TYPE HINT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 304 / 326</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📞 Tipe Data Callback (callable)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>callable</code> digunakan sebagai type declaration parameter fungsi untuk memastikan nilai yang dikirim dapat dipanggil sebagai fungsi callback (seperti Arrow Function <code>fn($x) => $x * 2</code>, Closure, atau nama fungsi string).
          </p>
        </div>
      </div>
    `,
    code: `<?php
function jalankanOperasi(int $a, int $b, callable $callback): int {
    return $callback($a, $b);
}

// 1. Memanggil dengan Anonymous Function
$hasilTambah = jalankanOperasi(10, 5, function($x, $y) {
    return $x + $y;
});

// 2. Memanggil dengan Arrow Function (PHP 7.4+)
$hasilKali = jalankanOperasi(10, 5, fn($x, $y) => $x * $y);

echo "<h3>Hasil Penggunaan Type callable:</h3>";
echo "<p>Hasil Tambah Callback: <strong style='color: #059669;'>$hasilTambah</strong></p>";
echo "<p>Hasil Kali Callback: <strong style='color: #4f46e5;'>$hasilKali</strong></p>";
?>`,
    codeExplanation: [
      'callable $callback menjamin parameter adalah fungsi yang valid untuk dieksekusi dengan $callback(...).'
    ],
    challenge: {
      instruction: 'Buat fungsi yang menerima parameter callable $formatter dan cetak teks berformat.',
      starterCode: `<?php
function proses(string $teks, callable $fmt) {
    return $fmt($teks);
}
echo proses("devgrow", "strtoupper");
?>`,
      hint: 'Panggil proses("devgrow", "strtoupper").'
    },
    quiz: {
      question: 'Bentuk manakah di bawah ini yang VALID diberikan ke parameter ber-type hint `callable`?',
      options: [
        'Closure anonymous function, Arrow function, string nama fungsi ("strtoupper"), atau array method ([$obj, "method"])',
        'Hanya angka integer',
        'Hanya file .txt',
        'Hanya query SQL'
      ],
      correctIndex: 0,
      explanation: 'callable menerima segala bentuk eksekusi fungsi yang valid di PHP.'
    }
  },

  // 305. CASE
  {
    id: 'php-kw-case',
    title: 'PHP Keyword: case',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 305,
    overview: 'Kuasai keyword case: menentukan cabang pencocokan nilai dalam struktur switch-case dan mendefinisikan enumerasi nilai pada PHP 8.1 Enums.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">BRANCH & ENUMS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 305 / 326</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎯 Cabang Kondisi & Enumerasi (case)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Keyword <code>case</code> digunakan dalam pernyataan <code>switch</code> untuk mencocokkan nilai variabel, dan pada PHP 8.1+ digunakan untuk mendefinisikan anggota enum (<code>enum Status { case PENDING; case PAID; }</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
// 1. Penggunaan case dalam switch
$role = "admin";

echo "<h3>1. Case dalam switch:</h3>";
switch ($role) {
    case "superadmin":
    case "admin":
        echo "<p style='color: green;'><strong>✓ Akses penuh Dashboard Admin diberikan.</strong></p>";
        break;
    case "member":
        echo "<p>Akses Member Area.</p>";
        break;
    default:
        echo "<p>Tamu (Guest).</p>";
}

// 2. Penggunaan case dalam PHP 8.1 Enums
enum StatusPesanan: string {
    case DRAFT = 'draft';
    case PROSES = 'proses';
    case SELESAI = 'selesai';
}

echo "<h3>2. Case dalam Enum (PHP 8.1+):</h3>";
echo "<p>Status: <strong>" . StatusPesanan::SELESAI->value . "</strong></p>";
?>`,
    codeExplanation: [
      'case dalam switch mencocokkan nilai variabel.',
      'case dalam enum mendefinisikan nilai status tipe aman (Type-Safe Enum).'
    ],
    challenge: {
      instruction: 'Uji switch-case sederhana untuk hari "senin".',
      starterCode: `<?php
$hari = "senin";
switch ($hari) {
    case "senin": echo "Awal pekan"; break;
    default: echo "Hari lain";
}
?>`,
      hint: 'Jalankan switch-case.'
    },
    quiz: {
      question: 'Fitur baru apakah di PHP 8.1 yang memanfaatkan keyword `case` selain struktur switch?',
      options: [
        'Enumerations (Enums) untuk mendefinisikan setiap anggota nilai enum',
        'Generics',
        'Database migration',
        'CSS compiler'
      ],
      correctIndex: 0,
      explanation: 'PHP 8.1 memperkenalkan Enums yang mendeklarasikan anggotanya dengan sintaks `case MEMBER_NAME;`.'
    }
  },

  // 306. CATCH
  {
    id: 'php-kw-catch',
    title: 'PHP Keyword: catch',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 306,
    overview: 'Kuasai blok catch: menangkap dan menangani objek Exception atau Error yang dilemparkan (thrown) dalam blok try dengan dukungan Multi-Catch Exception (TypeA | TypeB).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">EXCEPTION HANDLING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 306 / 326</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛡️ Menangkap Exception (catch)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Blok <code>catch (ExceptionType $e)</code> mengeksekusi logika pemulihan saat error terjadi tanpa membuat aplikasi crash. PHP 7.1+ mendukung penangkapan beberapa tipe exception sekaligus dalam 1 blok: <code>catch (InvalidArgumentException | DomainException $e)</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
try {
    $pembagi = 0;
    if ($pembagi === 0) {
        throw new DivisionByZeroError("Tidak dapat membagi angka dengan nol!");
    }
    $hasil = 100 / $pembagi;
} catch (DivisionByZeroError $e) {
    echo "<h3>Hasil Penangkapan Blok catch:</h3>";
    echo "<p style='color: #dc2626;'><strong>[TERTANGKAP] " . $e->getMessage() . "</strong></p>";
    echo "<p>Aplikasi tetap berjalan normal berkat blok try-catch.</p>";
}
?>`,
    codeExplanation: [
      'catch menangkap objek DivisionByZeroError dan mengeksekusi blok recovery pesan error.'
    ],
    challenge: {
      instruction: 'Tangkap Exception dengan blok try-catch.',
      starterCode: `<?php
try {
    throw new Exception("Error Validasi");
} catch (Exception $e) {
    echo "Tertangkap: " . $e->getMessage();
}
?>`,
      hint: 'Gunakan try { ... } catch (Exception $e) { ... }.'
    },
    quiz: {
      question: 'Bagaimana sintaks menangkap dua tipe Exception berbeda dalam SATU blok catch di PHP modern (PHP 7.1+)?',
      options: [
        'catch (TypeError | InvalidArgumentException $e)',
        'catch (TypeError or InvalidArgumentException $e)',
        'catch (TypeError, InvalidArgumentException $e)',
        'catch (TypeError & InvalidArgumentException $e)'
      ],
      correctIndex: 0,
      explanation: 'Sintaks Multi-Catch menggunakan karakter pipa tunggal (|) untuk memisahkan tipe exception.'
    }
  },

  // 307. CLASS
  {
    id: 'php-kw-class',
    title: 'PHP Keyword: class',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 307,
    overview: 'Kuasai keyword class: mendeklarasikan Kelas Pemrograman Berorientasi Objek (OOP Class) sebagai blueprint pembentuk objek dan resolusi nama kelas penuh via ClassName::class.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">OOP FOUNDATION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 307 / 326</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏛️ Fondasi Kelas Objek (class)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>class NamaKelas</code> adalah fondasi OOP di PHP. Menyimpan properti (variabel), konstruktor, dan method. Sintaks <code>User::class</code> menghasilkan string Fully Qualified Class Name (FQCN) yang sangat penting untuk dependency injection dan ORM.
          </p>
        </div>
      </div>
    `,
    code: `<?php
class UserAccount {
    public function __construct(
        public string $username,
        public string $email
    ) {}

    public function getProfil(): string {
        return "User: {$this->username} ({$this->email})";
    }
}

$user = new UserAccount("rahmat_fadila", "rahmat@devgrow.id");

echo "<h3>Hasil Deklarasi class & Class Name Resolution:</h3>";
echo "<p>" . $user->getProfil() . "</p>";
echo "<p>FQCN via ::class: <strong style='color: #4f46e5;'>" . UserAccount::class . "</strong></p>";
?>`,
    codeExplanation: [
      'class UserAccount mendeklarasikan struktur objek.',
      'UserAccount::class mengembalikan string nama class yang aman untuk refactoring IDE.'
    ],
    challenge: {
      instruction: 'Deklarasikan class Siswa dan instansiasi objeknya.',
      starterCode: `<?php
class Siswa {
    public string $nama = "Budi";
}
$s = new Siswa();
echo $s->nama;
?>`,
      hint: 'Instansiasi dengan new Siswa().'
    },
    quiz: {
      question: 'Apa hasil yang dikembalikan oleh ekspresi `UserAccount::class`?',
      options: [
        'String nama kelas lengkap beserta namespace (Fully Qualified Class Name)',
        'Objek instansiasi baru',
        'Array method kelas',
        'Ukuran memori kelas'
      ],
      correctIndex: 0,
      explanation: 'Konstanta magis ::class menghasilkan string nama kelas penuh yang aman dari typo.'
    }
  },

  // 308. CLONE
  {
    id: 'php-kw-clone',
    title: 'PHP Keyword: clone',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 308,
    overview: 'Kuasai keyword clone: membuat duplikat salinan objek baru (bukan copy by reference) dan memicu method ajaib __clone() untuk melakukan deep copy objek bersarang.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">OBJECT CLONING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 308 / 326</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🐑 Kloning Salinan Objek (clone)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Secara default penugasan <code>$b = $a</code> pada objek hanya menyalin alamat memorinya (reference). Keyword <code>clone $a</code> membuat instansi objek independen baru di memori. Jika kelas mendefinisikan method <code>__clone()</code>, method tersebut otomatis dieksekusi saat kloning terjadi.
          </p>
        </div>
      </div>
    `,
    code: `<?php
class Invoice {
    public string $noInvoice;
    public float $total;

    public function __construct(string $no, float $total) {
        $this->noInvoice = $no;
        $this->total = $total;
    }

    // Dipanggil otomatis saat keyword clone dieksekusi
    public function __clone() {
        $this->noInvoice = $this->noInvoice . "-DUPLIKAT";
    }
}

$inv1 = new Invoice("INV-2026-001", 500000);
$inv2 = clone $inv1; // Duplikasi independen

echo "<h3>Hasil Penggunaan Keyword clone:</h3>";
echo "<p>Invoice Asli: <strong>{$inv1->noInvoice}</strong> (Total: Rp {$inv1->total})</p>";
echo "<p>Invoice Hasil Kloning: <strong style='color: #059669;'>{$inv2->noInvoice}</strong> (Total: Rp {$inv2->total})</p>";
?>`,
    codeExplanation: [
      'clone $inv1 membuat salinan objek terpisah.',
      'Magic method __clone() mengubah nomor invoice objek hasil kloning secara otomatis.'
    ],
    challenge: {
      instruction: 'Duplikasi objek dengan keyword clone.',
      starterCode: `<?php
class Item { public string $nama = "Buku"; }
$a = new Item();
$b = clone $a;
$b->nama = "Pensil";
echo $a->nama . " dan " . $b->nama;
?>`,
      hint: 'Gunakan $b = clone $a;.'
    },
    quiz: {
      question: 'Magic method apakah yang otomatis dipanggil oleh PHP saat kita melakukan kloning objek menggunakan keyword `clone`?',
      options: [
        '__clone()',
        '__construct()',
        '__copy()',
        '__duplicate()'
      ],
      correctIndex: 0,
      explanation: '__clone() adalah magic method resmi untuk mengontrol perilaku kloning objek.'
    }
  },

  // 309. CONST
  {
    id: 'php-kw-const',
    title: 'PHP Keyword: const',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 309,
    overview: 'Kuasai keyword const: mendefinisikan konstanta waktu-kompilasi (Compile-Time Constant) baik di level global namespace maupun di dalam Kelas OOP.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CONSTANTS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 309 / 326</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔒 Mendeklarasikan Konstanta (const)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>const NAMA_KONSTANTA = nilai</code> membuat nilai tetap yang tidak dapat diubah (immutable). Di dalam class, konstanta diakses menggunakan operator scope resolution <code>ClassName::NAMA_KONSTANTA</code> atau <code>self::NAMA_KONSTANTA</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
const APP_VERSION = "2.5.0";

class ServerConfig {
    public const MAX_CONNECTIONS = 1000;
    public const DEFAULT_PORT = 5432;
}

echo "<h3>Hasil Penggunaan Keyword const:</h3>";
echo "<p>Versi Global: <strong>" . APP_VERSION . "</strong></p>";
echo "<p>Max Connections: <strong style='color: #059669;'>" . ServerConfig::MAX_CONNECTIONS . "</strong></p>";
echo "<p>Port Database: <strong>" . ServerConfig::DEFAULT_PORT . "</strong></p>";
?>`,
    codeExplanation: [
      'const bernilai tetap dan didefinisikan pada waktu kompilasi (compile-time).',
      'Class constants dapat memiliki visibility modifier (public, protected, private) sejak PHP 7.1.'
    ],
    challenge: {
      instruction: 'Definisikan konstanta kelas dengan public const TAX = 0.11; dan cetak nilainya.',
      starterCode: `<?php
class Toko {
    public const TAX = 0.11;
}
echo "PPN: " . (Toko::TAX * 100) . "%";
?>`,
      hint: 'Akses dengan Toko::TAX.'
    },
    quiz: {
      question: 'Bagaimana cara mengakses Class Constant bernama `API_KEY` dari dalam class yang sama?',
      options: [
        'self::API_KEY',
        '$this->API_KEY',
        '$this::API_KEY',
        'parent.API_KEY'
      ],
      correctIndex: 0,
      explanation: 'Konstanta kelas diakses menggunakan keyword self:: atau static::.'
    }
  },

  // 310. CONTINUE
  {
    id: 'php-kw-continue',
    title: 'PHP Keyword: continue',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 310,
    overview: 'Kuasai keyword continue: melewati (skip) sisa kode pada iterasi perulangan saat ini dan langsung melompat ke putaran iterasi berikutnya.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">LOOP CONTROL</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 310 / 326</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⏭️ Melompati Iterasi Loop (continue)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>continue</code> menghentikan jalannya instruksi kode yang tersisa di dalam loop untuk putaran saat ini dan langsung melompat mengevaluasi kondisi iterasi selanjutnya.
          </p>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Cetak Hanya Bilangan Ganjil (Lewati Genap):</h3>";
for ($i = 1; $i <= 10; $i++) {
    // Lewati angka genap
    if ($i % 2 === 0) {
        continue;
    }
    echo "<span style='background: #e0e7ff; color: #4338ca; padding: 3px 8px; border-radius: 4px; margin-right: 4px; font-weight: bold;'>$i</span>";
}
?>`,
    codeExplanation: [
      'continue melompati sisa kode pada angka genap (2, 4, 6, 8, 10) sehingga hanya angka ganjil yang dicetak.'
    ],
    challenge: {
      instruction: 'Lewati angka 3 pada perulangan for dengan continue.',
      starterCode: `<?php
for ($i = 1; $i <= 5; $i++) {
    if ($i == 3) continue;
    echo $i . " ";
}
?>`,
      hint: 'Gunakan if ($i == 3) continue;.'
    },
    quiz: {
      question: 'Apa perbedaan utama antara `break` dan `continue` di dalam sebuah loop?',
      options: [
        '`break` menghentikan dan keluar dari seluruh perulangan, sedangkan `continue` hanya melompati putaran saat ini dan melanjutkan ke putaran berikutnya',
        '`continue` menghapus variabel',
        '`break` mengulang dari awal',
        'Keduanya identik'
      ],
      correctIndex: 0,
      explanation: 'break keluar dari loop, sedangkan continue melompati iterasi aktif ke iterasi berikutnya.'
    }
  },

  // 311. DECLARE
  {
    id: 'php-kw-declare',
    title: 'PHP Keyword: declare',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 311,
    overview: 'Kuasai pernyataan declare: menyetel direktif eksekusi compiler skrip PHP (paling krusial: declare(strict_types=1) untuk mode Type-Safety ketat, ticks, dan encoding).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DIRECTIVE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 311 / 326</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚙️ Direktif Eksekusi Kompiler (declare)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>declare(directive)</code> mengatur perilaku mesin interpreter PHP pada file tersebut. Direktif paling penting dalam arsitektur PHP modern adalah <code>declare(strict_types=1);</code> yang wajib diletakkan di baris paling awal file untuk mencegah auto-coercion tipe data.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Direktif strict types wajib diletakkan di baris pertama file
declare(strict_types=1);

function hitungTotal(int $qty, float $harga): float {
    return $qty * $harga;
}

echo "<h3>Hasil Penggunaan declare(strict_types=1):</h3>";
echo "<p>Total: <strong>Rp " . number_format(hitungTotal(5, 12500.50), 2) . "</strong></p>";
echo "<p style='color: #059669;'>Dengan strict_types=1, jika memanggil hitungTotal('5', ...) PHP akan melempar TypeError demi menjamin integritas data.</p>";
?>`,
    codeExplanation: [
      'declare(strict_types=1) mematikan konversi tipe implisit yang longgar (type coercion).',
      'Standar wajib di framework modern (Laravel, Symfony) dan library Composer.'
    ],
    challenge: {
      instruction: 'Pahami penempatan declare(strict_types=1) di baris awal skrip.',
      starterCode: `<?php
declare(strict_types=1);
echo "Strict types aktif.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Di manakah pernyataan `declare(strict_types=1);` WAJIB diletakkan di dalam file PHP?',
      options: [
        'Pada baris paling pertama tepat setelah tag pembuka `<?php` sebelum statement kode lainnya',
        'Di dalam method class',
        'Di baris paling akhir file',
        'Di dalam fungsi konstruktor'
      ],
      correctIndex: 0,
      explanation: 'declare(strict_types=1) harus menjadi pernyataan pertama dalam skrip sebelum kode lain.'
    }
  },

  // 312. DEFAULT
  {
    id: 'php-kw-default',
    title: 'PHP Keyword: default',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 312,
    overview: 'Kuasai keyword default: menentukan cabang cadangan bawaan (Fallback Clause) pada struktur switch-case dan ekspresi match (PHP 8.0+).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">FALLBACK CLAUSE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 312 / 326</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛡️ Cabang Cadangan Bawaan (default)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>default</code> dieksekusi ketika tidak ada satu pun klausul <code>case</code> yang cocok dengan nilai yang dievaluasi dalam <code>switch</code> atau ekspresi <code>match</code> PHP 8.0+.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$levelMember = "VIP";

// 1. Penggunaan default dalam match expression (PHP 8.0+)
$diskon = match ($levelMember) {
    "Silver" => 5,
    "Gold"   => 15,
    "Platinum" => 25,
    default  => 0 // Jika level tidak dikenali
};

echo "<h3>Hasil Penggunaan Keyword default:</h3>";
echo "<p>Level: <strong>$levelMember</strong> -> Diskon: <strong style='color: #059669;'>$diskon%</strong></p>";
?>`,
    codeExplanation: [
      'Klausul default menangkap seluruh nilai yang tidak terdaftar di daftar case sebelumnya.'
    ],
    challenge: {
      instruction: 'Gunakan default dalam switch untuk menangani nilai tidak dikenal.',
      starterCode: `<?php
$warna = "ungu";
switch ($warna) {
    case "merah": echo "Merah"; break;
    default: echo "Warna Tidak Dikenal";
}
?>`,
      hint: 'Jalankan switch dengan default clause.'
    },
    quiz: {
      question: 'Kapan blok kode di dalam `default:` akan dieksekusi?',
      options: [
        'Ketika tidak ada satupun kondisi `case` yang cocok dengan nilai variabel yang diperiksa',
        'Selalu dieksekusi pertama kali',
        'Hanya jika terjadi error fatal',
        'Hanya saat variabel bernilai null'
      ],
      correctIndex: 0,
      explanation: 'default bertindak sebagai fallback saat tidak ada case yang terpenuhi.'
    }
  },

  // 313. DO
  {
    id: 'php-kw-do',
    title: 'PHP Keyword: do',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 313,
    overview: 'Kuasai keyword do: mengawali perulangan do-while yang MENJAMIN blok kode dieksekusi MINIMAL SATU KALI sebelum kondisi while diperiksa.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DO-WHILE LOOP</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 313 / 326</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔄 Perulangan Post-Condition (do-while)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Perulangan <code>do { ... } while (kondisi);</code> berbeda dengan <code>while</code> biasa. Pada <code>do-while</code>, evaluasi kondisi dilakukan di AKHIR iterasi, sehingga blok kode di dalam kurung kurawal dijamin pasti berjalan minimal 1 kali meskipun kondisinya bernilai false sejak awal.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$angka = 100;

echo "<h3>Contoh do-while (Kondisi Awal Sudah False):</h3>";
do {
    echo "<p style='color: green;'><strong>✓ Blok do dieksekusi 1x (Nilai angka: $angka) meskipun kondisi while ($angka < 10) bernilai FALSE!</strong></p>";
    $angka++;
} while ($angka < 10);
?>`,
    codeExplanation: [
      'do-while mengeksekusi body loop terlebih dahulu sebelum memeriksa boolean condition di akhir.'
    ],
    challenge: {
      instruction: 'Jalankan loop do-while dari $i = 1 sampai 3.',
      starterCode: `<?php
$i = 1;
do {
    echo $i . " ";
    $i++;
} while ($i <= 3);
?>`,
      hint: 'Gunakan do { ... } while ($i <= 3);.'
    },
    quiz: {
      question: 'Berapa kali minimal sebuah blok `do { ... } while (false);` akan dieksekusi?',
      options: [
        'Tepat 1 Kali',
        '0 Kali (tidak pernah berjalan)',
        'Tak terhingga',
        'Error syntax'
      ],
      correctIndex: 0,
      explanation: 'do-while mengevaluasi kondisi di akhir putaran, menjamin eksekusi minimal 1 kali.'
    }
  }
];

module.exports = phpPart29RefKeywords1;
