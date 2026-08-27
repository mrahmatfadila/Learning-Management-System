// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (ARRAY FUNCTIONS BAGIAN 3)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart14RefArrays3 = [
  // 54. ASORT()
  {
    id: 'php-ref-asort',
    title: 'PHP asort()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 54,
    overview: 'Fungsi asort(): mengurutkan array asosiatif secara MENAIK (Ascending A-Z / Terkecil ke Terbesar) berdasarkan NILAI dan mempertahankan asosiasi kuncinya.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ASORT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 54 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📈 Pengurutan Nilai Ascending (asort)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>asort(&$array, $flags)</code> mengurutkan array asosiatif dari nilai terkecil ke terbesar (A-Z) dengan tetap mempertahankan pasangan kunci aslinya (<strong>A</strong>ssociative <strong>Sort</strong>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$hargaProduk = [
    "Monitor" => 2100000,
    "Mouse" => 150000,
    "Keyboard" => 450000,
    "Headset" => 350000
];

// Urutkan dari produk termurah ke termahal
asort($hargaProduk);

echo "<h3>Daftar Harga Termurah ke Termahal (asort):</h3>";
echo "<ul>";
foreach ($hargaProduk as $item => $harga) {
    echo "<li>$item: <strong>Rp " . number_format($harga, 0, ',', '.') . "</strong></li>";
}
echo "</ul>";
?>`,
    codeExplanation: [
      'asort menyusun item dari Mouse (150rb), Headset (350rb), Keyboard (450rb), Monitor (2.1jt).',
      'Kunci string nama produk tidak hilang dan tidak ter-reset.'
    ],
    challenge: {
      instruction: 'Urutkan usia $usia = ["Budi" => 25, "Andi" => 20] dari termuda dengan asort().',
      starterCode: `<?php
$usia = ["Budi" => 25, "Andi" => 20];
asort($usia);
echo "Termuda: " . key($usia) . " (" . current($usia) . " thn)";
?>`,
      hint: 'Panggil asort($usia).'
    },
    quiz: {
      question: 'Apa perbedaan mendasar antara sort() dan asort()?',
      options: [
        'asort() mempertahankan nama kuncinya (preserves keys), sedangkan sort() me-reset semua kunci menjadi indeks numerik 0, 1, 2...',
        'sort() untuk string dan asort() untuk angka',
        'asort() mengurutkan secara descending',
        'Tidak ada perbedaan'
      ],
      correctIndex: 0,
      explanation: 'asort mempertahankan asosiasi key-value, sedangkan sort me-reset key menjadi indeks numerik terurut 0..n.'
    }
  },

  // 55. COMPACT()
  {
    id: 'php-ref-compact',
    title: 'PHP compact()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 55,
    overview: 'Kuasai compact(): membuat array asosiatif secara instan dari sekumpulan variabel lokal berdasarkan nama string variabelnya (Pola standar Controller ke View di Laravel).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">COMPACT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 55 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📦 Mengemas Variabel ke Array (compact)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>compact("var1", "var2", ...)</code> mencari variabel lokal yang bernama <code>$var1</code> dan <code>$var2</code>, lalu mengemasnya menjadi array asosiatif <code>["var1" => $var1, "var2" => $var2]</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$nama = "Muhammad Rahmat Fadila";
$kursus = "PHP 8 & MySQL Masterclass";
$status = "LULUS";
$nilai = 98;

// Kemas seluruh variabel ke dalam satu payload array asosiatif
$payloadData = compact("nama", "kursus", "status", "nilai");

echo "<h3>Hasil Pengemasan dengan compact():</h3>";
echo "<pre style='background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 8px;'>" . print_r($payloadData, true) . "</pre>";
?>`,
    codeExplanation: [
      'compact("nama", "kursus") secara otomatis membuat pasangan key-value sesuai nama variabel tanpa simbol $.',
      'Pola yang sangat populer di framework Laravel: return view("user.profile", compact("user", "posts"));'
    ],
    challenge: {
      instruction: 'Kemas variabel $kota = "Bandung" dan $provinsi = "Jabar" dengan compact("kota", "provinsi").',
      starterCode: `<?php
$kota = "Bandung";
$provinsi = "Jabar";
$res = compact("kota", "provinsi");
echo "Kota: " . $res['kota'];
?>`,
      hint: 'Panggil compact("kota", "provinsi").'
    },
    quiz: {
      question: 'Bagaimana penulisan argumen parameter pada fungsi compact()?',
      options: [
        'Nama variabel dalam bentuk string tanpa tanda dollar (misal: compact("nama", "email"))',
        'Dengan tanda dollar (misal: compact($nama, $email))',
        'Dalam bentuk boolean',
        'Hanya angka'
      ],
      correctIndex: 0,
      explanation: 'compact menerima nama variabel dalam format string ("nama", "email") tanpa tanda $ di depannya.'
    }
  },

  // 56. COUNT()
  {
    id: 'php-ref-count',
    title: 'PHP count()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 56,
    overview: 'Kuasai fungsi count(): menghitung total jumlah elemen di dalam array, opsi recursive counting (COUNT_RECURSIVE), dan implementasinya pada objek Countable.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">COUNT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 56 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔢 Menghitung Jumlah Elemen (count)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>count($value, $mode)</code> mengembalikan banyaknya elemen di dalam array. Mode bawaannya adalah <code>COUNT_NORMAL</code> (level 1), atau <code>COUNT_RECURSIVE</code> untuk menghitung seluruh anak-cucu elemen array bertingkat.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$modul = ["HTML", "CSS", "PHP", "MySQL", "JavaScript"];

echo "<h3>Hasil Penggunaan count():</h3>";
echo "<p>Total modul yang tersedia: <strong style='color: #4f46e5; font-size: 16px;'>" . count($modul) . " Modul</strong></p>";

// Array Multidimensi
$kategori = [
    "Frontend" => ["HTML", "CSS", "React"],
    "Backend" => ["PHP", "NodeJS"]
];

echo "<p>Hitung Normal: <strong>" . count($kategori) . " Kategori</strong></p>";
echo "<p>Hitung Rekursif: <strong>" . count($kategori, COUNT_RECURSIVE) . " Total Elemen</strong></p>";
?>`,
    codeExplanation: [
      'count($modul) mengembalikan angka 5.',
      'count($kategori, COUNT_RECURSIVE) menghitung 2 kategori + 5 sub-item = 7 total elemen.'
    ],
    challenge: {
      instruction: 'Hitung jumlah elemen dari array [10, 20, 30] dengan count().',
      starterCode: `<?php
$data = [10, 20, 30];
echo "Jumlah: " . count($data);
?>`,
      hint: 'Panggil count($data).'
    },
    quiz: {
      question: 'Fungsi alias apakah yang memiliki perilaku persis 100% sama dengan count() di PHP?',
      options: [
        'sizeof()',
        'length()',
        'total()',
        'array_len()'
      ],
      correctIndex: 0,
      explanation: 'sizeof() adalah fungsi alias identik dari count().'
    }
  },

  // 57. CURRENT()
  {
    id: 'php-ref-current',
    title: 'PHP current()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 57,
    overview: 'Fungsi current(): mengembalikan nilai dari elemen array yang sedang ditunjuk oleh penunjuk internal array (Internal Array Pointer).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CURRENT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 57 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📍 Mengakses Elemen Pointer Aktif</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Setiap array di PHP memiliki penunjuk internal (internal pointer) ke elemen aktif. <code>current($array)</code> membaca nilai dari elemen yang sedang ditunjuk tanpa menggeser penunjuknya.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$tahapan = ["Tahap 1: Pendaftaran", "Tahap 2: Pembelajaran", "Tahap 3: Sertifikasi"];

echo "<h3>Navigasi Pointer Array:</h3>";
echo "<p>Elemen saat ini (current): <strong>" . current($tahapan) . "</strong></p>";

// Geser pointer ke elemen berikutnya dengan next()
next($tahapan);
echo "<p>Setelah next(), elemen saat ini: <strong>" . current($tahapan) . "</strong></p>";
?>`,
    codeExplanation: [
      'current($tahapan) pertama kali menunjuk ke indeks awal ("Tahap 1: Pendaftaran").',
      'next($tahapan) memajukan pointer sehingga current() berikutnya membaca "Tahap 2".'
    ],
    challenge: {
      instruction: 'Ambil elemen aktif pertama dengan current(["A", "B", "C"]).',
      starterCode: `<?php
$arr = ["A", "B", "C"];
echo "Current: " . current($arr);
?>`,
      hint: 'Panggil current($arr).'
    },
    quiz: {
      question: 'Apakah pemanggilan fungsi current($array) menggeser posisi penunjuk internal pointer?',
      options: [
        'Tidak, current() hanya membaca nilai elemen aktif tanpa menggeser pointer',
        'Ya, selalu maju ke depan',
        'Ya, selalu mundur ke belakang',
        'Pointer otomatis di-reset'
      ],
      correctIndex: 0,
      explanation: 'current() hanya membaca nilai pointer saat ini. Untuk menggeser pointer, gunakan next() atau prev().'
    }
  },

  // 58. EACH()
  {
    id: 'php-ref-each',
    title: 'PHP each() [Deprecated/Removed]',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 58,
    overview: 'Status fungsi each(): fungsi legacy yang telah DIHAPUS sejak PHP 8.0 dan panduan migrasi ke loop foreach modern atau iterator.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-rose-600 text-white">DEPRECATED & REMOVED</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 58 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚠️ Status Fungsi each() di PHP 8+</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>each()</code> adalah fungsi iterasi lawas yang mengembalikan pasangan kunci/nilai. Fungsi ini telah <strong>resmi DIHAPUS (Removed) di PHP 8.0</strong> karena lambat dan tidak aman. Seluruh kode modern wajib beralih ke <code>foreach ($arr as $k => $v)</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$data = ["id" => 101, "nama" => "Fadila"];

echo "<h3>Standar Migrasi Modern Pengganti each():</h3>";

// Cara Modern di PHP 8+: Gunakan foreach
foreach ($data as $kunci => $nilai) {
    echo "<p>Kunci: <code>$kunci</code> | Nilai: <strong>$nilai</strong></p>";
}
?>`,
    codeExplanation: [
      'each() sudah tidak dapat dipanggil di PHP 8.0+ dan akan memicu Fatal Error: Uncaught Error: Call to undefined function each().',
      'foreach ($array as $key => $value) adalah standar mutlak dan jauh lebih cepat.'
    ],
    challenge: {
      instruction: 'Pahami bahwa foreach adalah pengganti standar untuk each() di PHP 8.',
      starterCode: `<?php
$arr = ["a" => 1, "b" => 2];
foreach ($arr as $k => $v) {
    echo "$k: $v ";
}
?>`,
      hint: 'Klik RUN untuk mereview loop modern.'
    },
    quiz: {
      question: 'Bagaimana status fungsi each() di PHP versi 8.0 ke atas?',
      options: [
        'Telah dihapus sepenuhnya (Removed) dan wajib diganti dengan perulangan foreach',
        'Masih aktif dan disarankan',
        'Menjadi fungsi wajib',
        'Hanya berganti nama'
      ],
      correctIndex: 0,
      explanation: 'each() didepresiasi di PHP 7.2 dan resmi dihapus total dari engine pada PHP 8.0.'
    }
  },

  // 59. END()
  {
    id: 'php-ref-end',
    title: 'PHP end()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 59,
    overview: 'Fungsi end(): memindahkan penunjuk internal array langsung ke ELEMEN TERAKHIR dan mengembalikan nilainya.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">END</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 59 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏁 Menunjuk Elemen Terakhir (end)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>end(&$array)</code> menggeser internal pointer ke posisi paling ujung belakang array dan mengembalikan nilai dari elemen terakhir tersebut.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$riwayatVersi = ["v1.0.0", "v1.1.0", "v2.0.0", "v2.5.4 (Latest)"];

// Ambil versi paling mutakhir (elemen terakhir)
$rilisTerbaru = end($riwayatVersi);

echo "<h3>Hasil Penggunaan end():</h3>";
echo "<p>Versi Rilis Terbaru Platform: <strong style='color: #059669; font-size: 16px;'>$rilisTerbaru</strong></p>";
?>`,
    codeExplanation: [
      'end($riwayatVersi) mengembalikan "v2.5.4 (Latest)".',
      'Berbeda dengan array_pop(), end() TIDAK menghapus elemen tersebut dari array (hanya memindahkan pointer).'
    ],
    challenge: {
      instruction: 'Ambil elemen terakhir dari array ["HTML", "CSS", "PHP"] dengan end().',
      starterCode: `<?php
$list = ["HTML", "CSS", "PHP"];
echo "Elemen terakhir: " . end($list);
?>`,
      hint: 'Panggil end($list).'
    },
    quiz: {
      question: 'Apa perbedaan antara end($arr) dan array_pop($arr)?',
      options: [
        'end() hanya membaca nilai dan memindahkan pointer tanpa menghapus elemen, sedangkan array_pop() menghapus elemen tersebut dari array',
        'end() menghapus elemen pertama',
        'array_pop() hanya untuk angka',
        'Keduanya identik'
      ],
      correctIndex: 0,
      explanation: 'end() tidak menghapus elemen dari array, melainkan hanya mengarahkan pointer ke ujung belakang dan membaca nilainya.'
    }
  },

  // 60. EXTRACT()
  {
    id: 'php-ref-extract',
    title: 'PHP extract()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 60,
    overview: 'Kuasai extract(): mengimpor variabel dari array asosiatif ke dalam tabel simbol lokal (Symbol Table) dan aturan keamanan flag EXTR_SKIP.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">EXTRACT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 60 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔓 Mengekstrak Array ke Variabel Lokal</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>extract($array, $flags)</code> adalah kebalikan dari <code>compact()</code>. Fungsi ini mengubah setiap kunci array menjadi variabel lokal mandiri (misal <code>["judul" => "PHP"]</code> menjadi variabel <code>$judul = "PHP"</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$dataProfil = [
    "username" => "rahmatfadila",
    "pekerjaan" => "Full-Stack Software Engineer",
    "skor" => 99
];

// Ekstrak array ke variabel lokal
extract($dataProfil);

echo "<h3>Hasil Ekstraksi Variabel Lokal:</h3>";
echo "<p>Username: <strong>$username</strong></p>";
echo "<p>Pekerjaan: <strong>$pekerjaan</strong></p>";
echo "<p>Skor Ujian: <strong>$skor</strong></p>";
?>`,
    codeExplanation: [
      'extract() secara otomatis menciptakan variabel $username, $pekerjaan, dan $skor.',
      'PERINGATAN KEAMANAN: Jangan pernah memanggil extract($_POST) atau extract($_GET) tanpa flag EXTR_SKIP untuk mencegah serangan variable poisoning.'
    ],
    challenge: {
      instruction: 'Ekstrak array $arr = ["warna" => "Biru"] dan cetak $warna.',
      starterCode: `<?php
$arr = ["warna" => "Biru"];
extract($arr);
echo "Warna: $warna";
?>`,
      hint: 'Panggil extract($arr).'
    },
    quiz: {
      question: 'Flag keamanan apakah yang wajib digunakan pada extract() saat memproses data input pengguna agar variabel yang sudah ada tidak tertimpa?',
      options: [
        'EXTR_SKIP',
        'EXTR_OVERWRITE',
        'EXTR_SECURE',
        'EXTR_CLEAN'
      ],
      correctIndex: 0,
      explanation: 'EXTR_SKIP memastikan bahwa jika nama variabel sudah ada sebelumnya, extract tidak akan menimpanya sehingga aman dari manipulasi variabel global.'
    }
  },

  // 61. IN_ARRAY()
  {
    id: 'php-ref-in-array',
    title: 'PHP in_array()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 61,
    overview: 'Kuasai in_array(): memeriksa apakah suatu nilai ada di dalam array dan pentingnya parameter strict mode (true) untuk perbandingan tipe data yang aman.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">IN ARRAY</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 61 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Memeriksa Nilai di Array (in_array)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>in_array($needle, $haystack, $strict)</code> mengembalikan boolean <code>true</code> jika <code>$needle</code> ditemukan di dalam array. Selalu gunakan <code>$strict = true</code> agar tipe data (string vs integer) dicek secara ketat.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$roleIzin = ["ADMIN", "MANAGER", "EDITOR"];
$roleUser = "STUDENT";

echo "<h3>Pemeriksaan Hak Akses (in_array Strict):</h3>";

// Parameter ketiga = true (Strict Type Check)
if (in_array($roleUser, $roleIzin, true)) {
    echo "<p style='color: green;'>✓ Akses Diberikan ke Panel Kontrol Admin.</p>";
} else {
    echo "<p style='color: red;'>✗ Akses Ditolak: Anda tidak memiliki role yang sesuai.</p>";
}
?>`,
    codeExplanation: [
      'in_array("STUDENT", $roleIzin, true) bernilai false.',
      'Strict mode (true) mencegah kelemahan loose type juggling di mana string non-numerik bisa cocok dengan angka 0 di versi PHP lama.'
    ],
    challenge: {
      instruction: 'Periksa apakah "PHP" ada di array ["HTML", "CSS", "PHP"] dengan in_array("PHP", $arr, true).',
      starterCode: `<?php
$arr = ["HTML", "CSS", "PHP"];
if (in_array("PHP", $arr, true)) {
    echo "PHP ditemukan!";
}
?>`,
      hint: 'Gunakan in_array("PHP", $arr, true).'
    },
    quiz: {
      question: 'Mengapa menyetel parameter ketiga $strict = true pada in_array() sangat direkomendasikan demi keamanan aplikasi?',
      options: [
        'Untuk mencegah type-juggling bug dengan memverifikasi kesamaan nilai sekaligus kesamaan tipe datanya (===)',
        'Untuk membuat array menjadi file teks',
        'Agar array otomatis diurutkan',
        'Hanya kebiasaan koding opsional'
      ],
      correctIndex: 0,
      explanation: 'Strict mode memberlakukan perbandingan identik (===) sehingga string tidak akan salah disamakan dengan integer atau boolean.'
    }
  },

  // 62. KEY()
  {
    id: 'php-ref-key',
    title: 'PHP key()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 62,
    overview: 'Fungsi key(): mengembalikan nama KUNCI (key/index) dari elemen yang saat ini ditunjuk oleh pointer internal array.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">KEY</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 62 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🗝️ Membaca Kunci Pointer Aktif (key)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Jika <code>current()</code> membaca nilainya, maka <code>key($array)</code> membaca <strong>nama kunci / nomor indeks</strong> dari elemen yang saat ini sedang aktif ditunjuk oleh internal pointer.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$pengaturan = [
    "app_name" => "DevGrow LMS",
    "version" => "8.2.0",
    "status" => "Production"
];

echo "<h3>Pembacaan Kunci Aktif:</h3>";
echo "<p>Kunci awal: <code>" . key($pengaturan) . "</code> (Nilai: " . current($pengaturan) . ")</p>";

next($pengaturan);
echo "<p>Setelah next(), kunci aktif: <code>" . key($pengaturan) . "</code> (Nilai: " . current($pengaturan) . ")</p>";
?>`,
    codeExplanation: [
      'key($pengaturan) menghasilkan string "app_name".',
      'Setelah next(), key() menghasilkan string "version".'
    ],
    challenge: {
      instruction: 'Ambil nama kunci awal dari $arr = ["kode" => "ABC"] dengan key($arr).',
      starterCode: `<?php
$arr = ["kode" => "ABC"];
echo "Kunci: " . key($arr);
?>`,
      hint: 'Panggil key($arr).'
    },
    quiz: {
      question: 'Apa perbedaan antara current($array) dan key($array)?',
      options: [
        'current() mengembalikan Nilai (Value), sedangkan key() mengembalikan Kunci (Key/Index) dari elemen yang sedang aktif',
        'current() menghapus elemen',
        'key() hanya untuk angka',
        'Keduanya menghasilkan nilai yang sama'
      ],
      correctIndex: 0,
      explanation: 'current() membaca value elemen aktif, sedangkan key() membaca key/index elemen aktif.'
    }
  },

  // 63. KRSORT()
  {
    id: 'php-ref-krsort',
    title: 'PHP krsort()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 63,
    overview: 'Fungsi krsort(): mengurutkan array berdasarkan KUNCI (Keys) secara MENURUN (Descending Z-A / Terbesar ke Terkecil).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">KRSORT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 63 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔤 Urutkan Kunci Descending (krsort)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>krsort(&$array, $flags)</code> mengurutkan array asosiatif berdasarkan <strong>nama kuncinya (Keys)</strong> secara menurun dari Z ke A (atau nomor indeks terbesar ke terkecil).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$arsipTahun = [
    "2023" => "250 Siswa Lulus",
    "2026" => "1200 Siswa Lulus",
    "2024" => "500 Siswa Lulus",
    "2025" => "850 Siswa Lulus"
];

// Urutkan tahun terbaru ke tahun terlama (Key Descending)
krsort($arsipTahun);

echo "<h3>Arsip Kelulusan Berdasarkan Tahun Terbaru (krsort):</h3>";
echo "<ul>";
foreach ($arsipTahun as $tahun => $info) {
    echo "<li>Tahun <strong>$tahun</strong>: $info</li>";
}
echo "</ul>";
?>`,
    codeExplanation: [
      'krsort menyusun kunci dari 2026, 2025, 2024, 2023.',
      'Sangat ideal untuk pengurutan log tanggal arsip.'
    ],
    challenge: {
      instruction: 'Urutkan array $a = ["c" => 1, "a" => 2, "b" => 3] berdasarkan kunci Z-A dengan krsort($a).',
      starterCode: `<?php
$a = ["c" => 1, "a" => 2, "b" => 3];
krsort($a);
echo implode(", ", array_keys($a));
?>`,
      hint: 'Panggil krsort($a).'
    },
    quiz: {
      question: 'Huruf "k" dan "r" pada nama fungsi krsort() merupakan singkatan dari:',
      options: [
        'Key (Kunci) dan Reverse (Menurun/Descending)',
        'Keyword Random',
        'Kernel Recursive',
        'Kapasitas Realtime'
      ],
      correctIndex: 0,
      explanation: '"k" = Key (berdasarkan kunci) dan "r" = Reverse (urutan terbalik/menurun).'
    }
  },

  // 64. KSORT()
  {
    id: 'php-ref-ksort',
    title: 'PHP ksort()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 64,
    overview: 'Fungsi ksort(): mengurutkan array asosiatif berdasarkan KUNCI (Keys) secara MENAIK (Ascending A-Z / Terkecil ke Terbesar).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">KSORT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 64 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔤 Urutkan Kunci Ascending (ksort)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ksort(&$array, $flags)</code> mengurutkan array berdasarkan nama kuncinya (Keys) secara menaik dari A ke Z (atau angka indeks 0..n). Standar wajib saat membuat <em>Signature Parameter</em> pada integrasi Payment Gateway.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$paramMidtrans = [
    "order_id" => "TRX-9981",
    "gross_amount" => 350000,
    "client_key" => "SB-Mid-client-XXXX",
    "action" => "charge"
];

// Urutkan kunci A-Z untuk pembuatan SHA512 Signature Hash
ksort($paramMidtrans);

echo "<h3>Parameter Terurut A-Z (ksort):</h3>";
echo "<ul>";
foreach ($paramMidtrans as $key => $val) {
    echo "<li><code>$key</code> = $val</li>";
}
echo "</ul>";
?>`,
    codeExplanation: [
      'ksort menyusun kunci: action, client_key, gross_amount, order_id.',
      'Kerap digunakan untuk pembuatan hash signature API perbankan/fintech.'
    ],
    challenge: {
      instruction: 'Urutkan $b = ["z" => 1, "a" => 2] berdasarkan kunci A-Z dengan ksort($b).',
      starterCode: `<?php
$b = ["z" => 1, "a" => 2];
ksort($b);
echo implode(", ", array_keys($b));
?>`,
      hint: 'Panggil ksort($b).'
    },
    quiz: {
      question: 'Kapan pengurutan kunci ksort() sering diwajibkan dalam integrasi web komersial?',
      options: [
        'Saat menyusun parameter query untuk pembuatan cryptographic signature pada payment gateway (seperti Midtrans/Xendit)',
        'Saat mendownload gambar',
        'Saat menutup browser',
        'Tidak pernah dipakai'
      ],
      correctIndex: 0,
      explanation: 'Banyak payment gateway mewajibkan parameter diurutkan berdasarkan nama key secara alfabetis (A-Z) sebelum di-hash menjadi signature.'
    }
  },

  // 65. LIST()
  {
    id: 'php-ref-list',
    title: 'PHP list()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 65,
    overview: 'Konstruktor list(): melakukan pembongkaran array (Array Destructuring) ke dalam variabel-variabel terpisah secara instan dan perbandingannya dengan sintaks [].',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">LIST & DESTRUCTURING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 65 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📦 Pembongkaran Array (Destructuring)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>list($a, $b, $c) = $array</code> membongkar elemen array numerik langsung ke variabel individual. Di PHP 7.1+, sintaks singkat <code>[$a, $b, $c] = $array</code> menjadi standar modern yang lebih ringkas.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$koordinat = [-6.9175, 107.6191, "Bandung"];

// 1. Gaya Tradisional: list()
list($lat, $lng, $kota) = $koordinat;

// 2. Gaya Modern PHP 7.1+: Short Array Destructuring []
[$latitude, $longitude, $namaKota] = $koordinat;

echo "<h3>Hasil Pembongkaran Array Destructuring:</h3>";
echo "<p>Kota: <strong>$namaKota</strong></p>";
echo "<p>Titik GPS: <code>$latitude, $longitude</code></p>";
?>`,
    codeExplanation: [
      '[$lat, $lng, $kota] = $koordinat memecah array 3 elemen ke 3 variabel sekaligus dalam 1 baris kode.'
    ],
    challenge: {
      instruction: 'Bongkar array [10, 20] ke [$x, $y] dan cetak nilai $x.',
      starterCode: `<?php
[$x, $y] = [10, 20];
echo "Nilai X: $x";
?>`,
      hint: 'Gunakan destructuring [$x, $y] = [10, 20].'
    },
    quiz: {
      question: 'Sintaks modern apakah yang ekuivalen dengan fungsi list($a, $b) = $arr di PHP 7.1+?',
      options: [
        '[$a, $b] = $arr',
        '($a, $b) = $arr',
        '{$a, $b} = $arr',
        'destruct($a, $b) = $arr'
      ],
      correctIndex: 0,
      explanation: 'Sintaks [$a, $b] = $arr adalah short array destructuring yang diperkenalkan pada PHP 7.1.'
    }
  },

  // 66. NATCASESORT()
  {
    id: 'php-ref-natcasesort',
    title: 'PHP natcasesort()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 66,
    overview: 'Fungsi natcasesort(): mengurutkan array menggunakan algoritma Natural Order (seperti persepsi manusia 1, 2, 10) tanpa membedakan huruf besar/kecil (Case-Insensitive).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">NATCASESORT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 66 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧠 Pengurutan Natural Case-Insensitive</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Pada sorting standar komputer, <code>img10.png</code> muncul SEBELUM <code>img2.png</code>. <code>natcasesort()</code> menggunakan algoritma manusiawi di mana <code>img2.png</code> diletakkan lebih dahulu sebelum <code>img10.png</code> dan mengabaikan huruf besar/kecil.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$daftarFile = ["img12.png", "IMG10.png", "img2.png", "img1.png"];

// Urutkan secara natural case-insensitive
natcasesort($daftarFile);

echo "<h3>Hasil Pengurutan Natural Alami (natcasesort):</h3>";
echo "<ul>";
foreach ($daftarFile as $file) {
    echo "<li><code>$file</code></li>";
}
echo "</ul>";
?>`,
    codeExplanation: [
      'Hasil urutan menjadi img1.png, img2.png, IMG10.png, img12.png (logika urutan angka manusia).',
      'Mempertahankan key association.'
    ],
    challenge: {
      instruction: 'Urutkan ["item10", "item2"] dengan natcasesort().',
      starterCode: `<?php
$files = ["item10", "item2"];
natcasesort($files);
echo implode(" -> ", $files);
?>`,
      hint: 'Panggil natcasesort($files).'
    },
    quiz: {
      question: 'Bagaimana hasil urutan natcasesort() pada elemen ["file10.jpg", "file2.jpg"]?',
      options: [
        'file2.jpg lalu file10.jpg (karena 2 lebih kecil dari 10 menurut logika manusia)',
        'file10.jpg lalu file2.jpg (urutan standar ASCII)',
        'Keduanya ditukar acak',
        'Menghasilkan error'
      ],
      correctIndex: 0,
      explanation: 'Natural sorting mengenali angka di dalam string sebagai nilai numerik (2 < 10).'
    }
  },

  // 67. NATSORT()
  {
    id: 'php-ref-natsort',
    title: 'PHP natsort()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 67,
    overview: 'Fungsi natsort(): mengurutkan array menggunakan algoritma Natural Order (Case-Sensitive di mana huruf kapital diproses sebelum huruf kecil).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">NATSORT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 67 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧠 Pengurutan Natural Case-Sensitive</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>natsort(&$array)</code> mengurutkan array menggunakan logika natural angka manusia (1, 2, 10, 20) secara <strong>case-sensitive</strong>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$versiModul = ["PHP 8.2", "PHP 8.10", "PHP 8.1"];

natsort($versiModul);

echo "<h3>Hasil Pengurutan natsort():</h3>";
echo "<ol>";
foreach ($versiModul as $v) {
    echo "<li>$v</li>";
}
echo "</ol>";
?>`,
    codeExplanation: [
      'PHP 8.1 diletakkan sebelum PHP 8.2, dan PHP 8.2 diletakkan sebelum PHP 8.10.'
    ],
    challenge: {
      instruction: 'Urutkan nomor bab ["bab10", "bab2", "bab1"] dengan natsort().',
      starterCode: `<?php
$bab = ["bab10", "bab2", "bab1"];
natsort($bab);
echo implode(", ", $bab);
?>`,
      hint: 'Panggil natsort($bab).'
    },
    quiz: {
      question: 'Apa perbedaan antara natsort() dan natcasesort()?',
      options: [
        'natsort() bersifat Case-Sensitive, sedangkan natcasesort() bersifat Case-Insensitive',
        'natsort() hanya untuk angka murni',
        'natcasesort() menghapus file',
        'Keduanya identik'
      ],
      correctIndex: 0,
      explanation: 'natsort membedakan huruf besar/kecil (case-sensitive), sedangkan natcasesort mengabaikan perbedaan kapitalisasi.'
    }
  },

  // 68. NEXT()
  {
    id: 'php-ref-next',
    title: 'PHP next()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 68,
    overview: 'Fungsi next(): memajukan penunjuk internal array sebanyak 1 langkah ke depan dan mengembalikan nilai elemen berikutnya.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">NEXT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 68 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">➡️ Maju ke Elemen Berikutnya (next)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>next(&$array)</code> memajukan pointer array 1 posisi ke depan dan mengembalikan nilainya (atau <code>false</code> jika sudah melampaui elemen terakhir).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$level = ["Pemula", "Menengah", "Mahir", "Pakar"];

echo "<h3>Iterasi Pointer dengan next():</h3>";
echo "<p>Elemen 1: <strong>" . current($level) . "</strong></p>";

$lanjut = next($level);
echo "<p>Elemen 2: <strong>$lanjut</strong></p>";

$lanjutLagi = next($level);
echo "<p>Elemen 3: <strong>$lanjutLagi</strong></p>";
?>`,
    codeExplanation: [
      'Setiap pemanggilan next() memajukan posisi penunjuk aktif satu langkah.'
    ],
    challenge: {
      instruction: 'Maju satu elemen dari array $a = [1, 2, 3] dengan next($a).',
      starterCode: `<?php
$a = [1, 2, 3];
echo "Elemen kedua: " . next($a);
?>`,
      hint: 'Panggil next($a).'
    },
    quiz: {
      question: 'Apa yang dikembalikan oleh next($array) jika pointer sudah berada di elemen paling terakhir?',
      options: [
        'Boolean false',
        'Null',
        'Error',
        'Kembali ke elemen pertama'
      ],
      correctIndex: 0,
      explanation: 'next() mengembalikan false saat pointer digeser melampaui batas akhir array.'
    }
  },

  // 69. POS()
  {
    id: 'php-ref-pos',
    title: 'PHP pos()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 69,
    overview: 'Fungsi pos(): alias resmi yang identik 100% dengan fungsi current() untuk membaca nilai elemen pointer aktif.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">POS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 69 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📍 Alias Resmi pos() (Sama dengan current)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>pos($array)</code> adalah fungsi alias dari <code>current($array)</code> (<strong>Pos</strong>ition pointer).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$buah = ["Apel", "Jeruk", "Pisang"];

echo "<h3>Perbandingan pos() dan current():</h3>";
echo "<p>pos(\$buah): <strong>" . pos($buah) . "</strong></p>";
echo "<p>current(\$buah): <strong>" . current($buah) . "</strong></p>";
?>`,
    codeExplanation: [
      'pos() dan current() merujuk ke blok kode C internal yang persis sama di engine PHP.'
    ],
    challenge: {
      instruction: 'Gunakan pos($arr) untuk membaca elemen pertama.',
      starterCode: `<?php
$arr = ["Data 1", "Data 2"];
echo "Posisi: " . pos($arr);
?>`,
      hint: 'Panggil pos($arr).'
    },
    quiz: {
      question: 'Fungsi PHP apakah yang identik 100% perilakunya dengan pos()?',
      options: [
        'current()',
        'next()',
        'key()',
        'reset()'
      ],
      correctIndex: 0,
      explanation: 'pos() adalah alias resmi dari fungsi current().'
    }
  },

  // 70. PREV()
  {
    id: 'php-ref-prev',
    title: 'PHP prev()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 70,
    overview: 'Fungsi prev(): memundurkan penunjuk internal array sebanyak 1 langkah ke belakang dan mengembalikan nilai elemen sebelumnya.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PREV</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 70 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⬅️ Mundur ke Elemen Sebelumnya (prev)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>prev(&$array)</code> menggeser pointer internal array 1 posisi ke belakang dan membaca nilainya (kebalikan dari <code>next()</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$halamanBuku = ["Hal 1", "Hal 2", "Hal 3", "Hal 4"];

// Pindahkan pointer langsung ke halaman terakhir
end($halamanBuku);
echo "<h3>Navigasi Mundur (prev):</h3>";
echo "<p>Halaman Terakhir: <strong>" . current($halamanBuku) . "</strong></p>";

// Mundur 1 halaman
$mundur = prev($halamanBuku);
echo "<p>Setelah prev(): <strong>$mundur</strong></p>";
?>`,
    codeExplanation: [
      'end() menunjuk ke "Hal 4", lalu prev() memundurkan pointer ke "Hal 3".'
    ],
    challenge: {
      instruction: 'Mundurkan pointer dari elemen terakhir dengan prev().',
      starterCode: `<?php
$arr = [10, 20, 30];
end($arr);
echo "Sebelum terakhir: " . prev($arr);
?>`,
      hint: 'Panggil prev($arr).'
    },
    quiz: {
      question: 'Fungsi apakah yang merupakan kebalikan langsung dari next()?',
      options: [
        'prev()',
        'reset()',
        'end()',
        'back()'
      ],
      correctIndex: 0,
      explanation: 'prev() memundurkan internal pointer, sedangkan next() memajukannya.'
    }
  },

  // 71. RANGE()
  {
    id: 'php-ref-range',
    title: 'PHP range()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 71,
    overview: 'Kuasai fungsi range(): membuat array deret berurutan (angka atau alfabet huruf) dengan lompatan langkah (step) tertentu secara otomatis.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">RANGE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 71 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔢 Membuat Deret Berurutan Otomatis (range)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>range($start, $end, $step)</code> menghasilkan array berisikan rentang elemen dari nilai awal hingga akhir secara otomatis tanpa perlu menulis loop for manual.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// 1. Deret Angka 1 sampai 10
$angka1Sd10 = range(1, 10);

// 2. Deret Angka Kelipatan 10 (Lompatan Step = 10)
$kelipatan10 = range(0, 100, 10);

// 3. Deret Alfabet Huruf 'A' sampai 'F'
$hurufAtoF = range('A', 'F');

echo "<h3>Hasil Penggunaan range():</h3>";
echo "<p><strong>Angka 1-10:</strong> " . implode(", ", $angka1Sd10) . "</p>";
echo "<p><strong>Kelipatan 10:</strong> " . implode(", ", $kelipatan10) . "</p>";
echo "<p><strong>Huruf A-F:</strong> " . implode(", ", $hurufAtoF) . "</p>";
?>`,
    codeExplanation: [
      'range(1, 10) menghasilkan [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].',
      'range("A", "F") menghasilkan ["A", "B", "C", "D", "E", "F"].',
      'Sangat sering dipakai untuk membuat dropdown pilihan tahun lahir (range(1970, 2026)).'
    ],
    challenge: {
      instruction: 'Buat deret angka ganjil 1 sampai 9 dengan range(1, 9, 2).',
      starterCode: `<?php
$ganjil = range(1, 9, 2);
echo implode(", ", $ganjil);
?>`,
      hint: 'Panggil range(1, 9, 2).'
    },
    quiz: {
      question: 'Berapakah total elemen array yang dihasilkan dari pemanggilan range(1, 5)?',
      options: [
        '5 elemen (1, 2, 3, 4, 5)',
        '4 elemen',
        '6 elemen',
        '1 elemen'
      ],
      correctIndex: 0,
      explanation: 'range(1, 5) mencakup batas awal (1) hingga batas akhir (5), total tepat 5 elemen.'
    }
  },

  // 72. RESET()
  {
    id: 'php-ref-reset',
    title: 'PHP reset()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 72,
    overview: 'Fungsi reset(): mengembalikan penunjuk internal array kembali ke ELEMEN PERTAMA (posisi awal) dan mengembalikan nilainya.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">RESET</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 72 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔄 Mengembalikan Pointer ke Awal (reset)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>reset(&$array)</code> memutar balik penunjuk internal array ke indeks pertama dan mengembalikan nilai elemen pertama tersebut.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$data = ["Langkah A", "Langkah B", "Langkah C"];

// Majukan pointer ke ujung akhir
end($data);
echo "<h3>Reset Pointer Array:</h3>";
echo "<p>Posisi saat ini di ujung: <strong>" . current($data) . "</strong></p>";

// Reset pointer kembali ke awal
$awal = reset($data);
echo "<p>Setelah reset(), kembali ke: <strong style='color: #059669;'>$awal</strong></p>";
?>`,
    codeExplanation: [
      'reset($data) mengarahkan pointer kembali ke "Langkah A".'
    ],
    challenge: {
      instruction: 'Reset pointer array $a = ["X", "Y"] dengan reset($a).',
      starterCode: `<?php
$a = ["X", "Y"];
end($a);
echo "Kembali ke: " . reset($a);
?>`,
      hint: 'Panggil reset($a).'
    },
    quiz: {
      question: 'Apa yang dilakukan oleh fungsi reset($array)?',
      options: [
        'Mengembalikan penunjuk internal array ke elemen pertama dan mengembalikan nilainya',
        'Menghapus seluruh isi array',
        'Mengosongkan memori database',
        'Mengacak urutan array'
      ],
      correctIndex: 0,
      explanation: 'reset() memindahkan pointer kembali ke posisi awal (first element).'
    }
  },

  // 73. RSORT()
  {
    id: 'php-ref-rsort',
    title: 'PHP rsort()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 73,
    overview: 'Fungsi rsort(): mengurutkan array numerik secara MENURUN (Descending Z-A / Terbesar ke Terkecil) dan me-reset kunci numeriknya.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">RSORT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 73 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📉 Pengurutan Descending Numerik (rsort)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>rsort(&$array, $flags)</code> mengurutkan nilai array secara menurun (<strong>R</strong>everse <strong>Sort</strong>) dan memberi nomor indeks baru dari 0, 1, 2...
          </p>
        </div>
      </div>
    `,
    code: `<?php
$skorGame = [450, 1200, 850, 2100, 95];

// Urutkan skor tertinggi ke terendah
rsort($skorGame);

echo "<h3>Top 3 Skor Tertinggi (rsort):</h3>";
echo "<ol>";
for ($i = 0; $i < 3; $i++) {
    echo "<li>Peringkat #" . ($i + 1) . ": <strong>{$skorGame[$i]} Poin</strong></li>";
}
echo "</ol>";
?>`,
    codeExplanation: [
      'rsort menyusun angka: 2100, 1200, 850, 450, 95.',
      'Indeks array otomatis di-reset dari [0], [1], ...'
    ],
    challenge: {
      instruction: 'Urutkan angka [5, 1, 9] secara menurun dengan rsort().',
      starterCode: `<?php
$a = [5, 1, 9];
rsort($a);
echo implode(", ", $a);
?>`,
      hint: 'Panggil rsort($a).'
    },
    quiz: {
      question: 'Bagaimana perilaku rsort() terhadap kunci array lama?',
      options: [
        'Kunci lama dibuang dan diganti dengan indeks numerik baru yang terurut mulai dari 0',
        'Kunci lama dipertahankan',
        'Kunci diubah menjadi huruf besar',
        'Error jika ada kunci string'
      ],
      correctIndex: 0,
      explanation: 'rsort() me-reindex seluruh elemen menjadi array numerik terurut 0, 1, 2... (jika ingin mempertahankan key, gunakan arsort).'
    }
  },

  // 74. SHUFFLE()
  {
    id: 'php-ref-shuffle',
    title: 'PHP shuffle()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 74,
    overview: 'Fungsi shuffle(): mengacak urutan seluruh elemen di dalam array secara random (Fisher-Yates Shuffle) dan me-reset indeks kuncinya.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SHUFFLE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 74 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔀 Mengacak Urutan Array (shuffle)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>shuffle(&$array)</code> mengocok posisi seluruh elemen array secara acak. Sangat populer untuk aplikasi kuis online (mengacak urutan opsi pilihan ganda A, B, C, D) atau game kartu.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$opsiJawabanKuis = [
    "A. declare(strict_types=1);",
    "B. enable_strict_mode();",
    "C. use strict;",
    "D. #strict = true"
];

// Acak urutan pilihan jawaban
shuffle($opsiJawabanKuis);

echo "<h3>Opsi Jawaban yang Diacak (shuffle):</h3>";
echo "<ul>";
foreach ($opsiJawabanKuis as $opsi) {
    echo "<li>$opsi</li>";
}
echo "</ul>";
?>`,
    codeExplanation: [
      'shuffle() mengubah urutan elemen di array aslinya secara langsung (Pass by reference).',
      'Setiap kali halaman direfresh, susunan urutan opsi akan berbeda-beda secara acak.'
    ],
    challenge: {
      instruction: 'Acak array [1, 2, 3, 4, 5] dengan shuffle($arr).',
      starterCode: `<?php
$arr = [1, 2, 3, 4, 5];
shuffle($arr);
echo implode(", ", $arr);
?>`,
      hint: 'Panggil shuffle($arr).'
    },
    quiz: {
      question: 'Skenario apakah yang paling tepat menggunakan fungsi shuffle() di aplikasi web?',
      options: [
        'Mengacak urutan soal dan pilihan ganda pada aplikasi ujian kuis online (CBT)',
        'Menyimpan password ke database',
        'Mengurutkan nama siswa dari A-Z',
        'Menghitung total harga belanja'
      ],
      correctIndex: 0,
      explanation: 'shuffle sangat ideal untuk mengacak pertanyaan ujian atau kartu permainan agar tidak dapat ditebak polanya.'
    }
  },

  // 75. SIZEOF()
  {
    id: 'php-ref-sizeof',
    title: 'PHP sizeof()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 75,
    overview: 'Fungsi sizeof(): alias resmi dari count() untuk menghitung total jumlah elemen di dalam array.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SIZEOF</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 75 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📏 Alias Resmi sizeof()</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>sizeof($array, $mode)</code> adalah alias resmi fungsi <code>count()</code> di PHP.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$bahasa = ["PHP", "JavaScript", "Python", "Golang"];

echo "<h3>Hasil Penggunaan sizeof():</h3>";
echo "<p>Total bahasa: <strong>" . sizeof($bahasa) . "</strong></p>";
?>`,
    codeExplanation: [
      'sizeof($bahasa) menghasilkan nilai integer 4, persis sama dengan count($bahasa).'
    ],
    challenge: {
      instruction: 'Hitung panjang array [1, 2, 3] dengan sizeof().',
      starterCode: `<?php
$a = [1, 2, 3];
echo "Ukuran: " . sizeof($a);
?>`,
      hint: 'Panggil sizeof($a).'
    },
    quiz: {
      question: 'Apakah sizeof() di PHP mengembalikan ukuran memori byte atau jumlah elemen array?',
      options: [
        'Jumlah elemen array (karena sizeof() adalah alias dari count())',
        'Ukuran memori byte RAM',
        'Panjang teks string',
        'Ukuran file fisik'
      ],
      correctIndex: 0,
      explanation: 'Di PHP, sizeof() adalah alias dari count() yang menghitung total jumlah elemen, bukan ukuran memori byte.'
    }
  },

  // 76. SORT()
  {
    id: 'php-ref-sort',
    title: 'PHP sort()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 76,
    overview: 'Kuasai fungsi sort(): mengurutkan array numerik atau string secara MENAIK (Ascending A-Z / Terkecil ke Terbesar) dan me-reset kunci numeriknya.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SORT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 76 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📈 Pengurutan Standar Ascending (sort)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>sort(&$array, $flags)</code> mengurutkan array dari nilai terkecil ke terbesar (A-Z) dan menetapkan ulang nomor indeksnya dari 0, 1, 2...
          </p>
        </div>
      </div>
    `,
    code: `<?php
$namaKota = ["Surabaya", "Bandung", "Jakarta", "Medan", "Denpasar"];

// Urutkan alfabetis A-Z
sort($namaKota);

echo "<h3>Daftar Kota Terurut Alfabet (sort):</h3>";
echo "<ol>";
foreach ($namaKota as $kota) {
    echo "<li>$kota</li>";
}
echo "</ol>";
?>`,
    codeExplanation: [
      'sort menyusun: Bandung, Denpasar, Jakarta, Medan, Surabaya.',
      'Indeks lama digantikan dengan 0, 1, 2, 3, 4.'
    ],
    challenge: {
      instruction: 'Urutkan angka [9, 3, 7, 1] secara menaik dengan sort().',
      starterCode: `<?php
$num = [9, 3, 7, 1];
sort($num);
echo implode(", ", $num);
?>`,
      hint: 'Panggil sort($num).'
    },
    quiz: {
      question: 'Apa arah pengurutan bawaan dari fungsi sort() di PHP?',
      options: [
        'Ascending (Menaik dari A-Z atau angka terkecil ke terbesar)',
        'Descending (Menurun)',
        'Acak (Random)',
        'Tidak beraturan'
      ],
      correctIndex: 0,
      explanation: 'sort() mengurutkan secara Ascending (menaik).'
    }
  },

  // 77. UASORT()
  {
    id: 'php-ref-uasort',
    title: 'PHP uasort()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 77,
    overview: 'Fungsi uasort(): mengurutkan array berdasarkan NILAI menggunakan fungsi callback pembanding kustom dan mempertahankan asosiasi kuncinya (Preserve Keys).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">UASORT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 77 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛠️ Pengurutan Nilai Kustom (uasort)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>uasort(&$array, "callback")</code> mengurutkan array asosiatif menggunakan logika pembanding kustom buatan Anda dengan <strong>tetap mempertahankan nama kunci aslinya</strong> (<strong>U</strong>ser <strong>A</strong>ssociative <strong>Sort</strong>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$anggota = [
    "user_1" => ["nama" => "Fadila", "poin" => 850],
    "user_2" => ["nama" => "Budi", "poin" => 1200],
    "user_3" => ["nama" => "Siti", "poin" => 950]
];

// Urutkan poin tertinggi ke terendah dengan callback spaceship operator
uasort($anggota, fn($a, $b) => $b['poin'] <=> $a['poin']);

echo "<h3>Leaderboard Anggota (uasort):</h3>";
echo "<ul>";
foreach ($anggota as $id => $data) {
    echo "<li><code>$id</code>: <strong>{$data['nama']}</strong> ({$data['poin']} Poin)</li>";
}
echo "</ul>";
?>`,
    codeExplanation: [
      'fn($a, $b) => $b["poin"] <=> $a["poin"] mengurutkan secara descending.',
      'Kunci "user_1", "user_2", "user_3" tetap aman dan tidak hilang.'
    ],
    challenge: {
      instruction: 'Pelajari pengurutan array of objects/arrays dengan uasort.',
      starterCode: `<?php
$arr = ["a" => 3, "b" => 1, "c" => 2];
uasort($arr, fn($x, $y) => $x <=> $y);
echo "Terkecil: " . key($arr);
?>`,
      hint: 'Klik RUN untuk mencoba uasort.'
    },
    quiz: {
      question: 'Apa fungsi dari uasort() dibanding usort()?',
      options: [
        'uasort() mempertahankan pasangan nama kuncinya (Preserve Keys), sedangkan usort() me-reset kunci menjadi numerik 0, 1, 2...',
        'uasort() tidak menerima callback',
        'usort() hanya untuk string',
        'Keduanya identik'
      ],
      correctIndex: 0,
      explanation: 'Huruf "a" pada uasort memastikan key asosiatif tidak hilang setelah proses sorting.'
    }
  },

  // 78. UKSORT()
  {
    id: 'php-ref-uksort',
    title: 'PHP uksort()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 78,
    overview: 'Fungsi uksort(): mengurutkan array berdasarkan KUNCI (Keys) menggunakan fungsi callback pembanding kustom buatan pengguna.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">UKSORT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 78 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🗝️ Pengurutan Kunci Kustom (uksort)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>uksort(&$array, "callback")</code> mengurutkan array berdasarkan <strong>nama kuncinya (Keys)</strong> menggunakan logika pembanding kustom (seperti mengurutkan panjang string kunci atau case-insensitive).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$data = [
    "JavaScript" => "Frontend",
    "C" => "System",
    "PHP" => "Backend",
    "Python" => "Data Science"
];

// Urutkan kunci berdasarkan PANJANG NAMA BAHASA (terpendek ke terpanjang)
uksort($data, function($k1, $k2) {
    return strlen($k1) <=> strlen($k2);
});

echo "<h3>Hasil Pengurutan Panjang Kunci (uksort):</h3>";
echo "<ul>";
foreach ($data as $lang => $cat) {
    echo "<li><strong>$lang</strong> (" . strlen($lang) . " Karakter): $cat</li>";
}
echo "</ul>";
?>`,
    codeExplanation: [
      'uksort membandingkan strlen($k1) <=> strlen($k2).',
      'Urutan kunci menjadi C (1 huruf), PHP (3), Python (6), JavaScript (10).'
    ],
    challenge: {
      instruction: 'Urutkan kunci $a = ["tiga" => 3, "satu" => 1] dengan uksort.',
      starterCode: `<?php
$a = ["tiga" => 3, "satu" => 1];
uksort($a, fn($x, $y) => strcmp($x, $y));
echo implode(", ", array_keys($a));
?>`,
      hint: 'Klik RUN untuk mencoba uksort.'
    },
    quiz: {
      question: 'Bagian manakah dari array yang dipassing ke parameter callback pada fungsi uksort()?',
      options: [
        'Nama kuncinya (Keys)',
        'Nilainya (Values)',
        'Kunci dan Nilai sekaligus',
        'Ukuran memori'
      ],
      correctIndex: 0,
      explanation: 'uksort meneruskan nama kunci ($key1, $key2) ke dalam fungsi callback pembanding.'
    }
  },

  // 79. USORT()
  {
    id: 'php-ref-usort',
    title: 'PHP usort()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 79,
    overview: 'Kuasai usort(): mengurutkan array numerik atau array of objects menggunakan fungsi callback pembanding kustom dan operator spaceship <=>.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">USORT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 79 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">👑 Raja Pengurutan Kustom (usort)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>usort(&$array, "callback")</code> adalah fungsi pengurutan yang paling sering digunakan di level industri untuk mengurutkan kumpulan objek atau tabel data array multidimensi berdasarkan kriteria bisnis yang kompleks.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$daftarBuku = [
    ["judul" => "Clean Code", "harga" => 450000, "tahun" => 2008],
    ["judul" => "Modern PHP 8", "harga" => 350000, "tahun" => 2024],
    ["judul" => "Refactoring", "harga" => 520000, "tahun" => 2018]
];

// Urutkan buku berdasarkan TAHUN TERBIT TERBARU (Descending)
usort($daftarBuku, fn($a, $b) => $b['tahun'] <=> $a['tahun']);

echo "<h3>Katalog Buku Terurut Berdasarkan Tahun Rilis (usort):</h3>";
echo "<table border='1' cellpadding='8' style='border-collapse: collapse; width: 100%;'>";
echo "<tr style='background: #f1f5f9;'><th>Judul Buku</th><th>Tahun</th><th>Harga</th></tr>";
foreach ($daftarBuku as $buku) {
    echo "<tr>";
    echo "<td><strong>{$buku['judul']}</strong></td>";
    echo "<td>{$buku['tahun']}</td>";
    echo "<td>Rp " . number_format($buku['harga'], 0, ',', '.') . "</td>";
    echo "</tr>";
}
echo "</table>";
?>`,
    codeExplanation: [
      'fn($a, $b) => $b["tahun"] <=> $a["tahun"] mengurutkan objek buku dari tahun 2024, 2018, 2008.',
      'Sangat fleksibel untuk sorting multi-kriteria kompleks apapun.'
    ],
    challenge: {
      instruction: 'Urutkan array objek $p = [["umur" => 30], ["umur" => 20]] dengan usort($p, fn($a, $b) => $a["umur"] <=> $b["umur"]).',
      starterCode: `<?php
$p = [["umur" => 30], ["umur" => 20]];
usort($p, fn($a, $b) => $a['umur'] <=> $b['umur']);
echo "Termuda: " . $p[0]['umur'] . " thn";
?>`,
      hint: 'Gunakan usort dengan spaceship operator.'
    },
    quiz: {
      question: 'Operator PHP apakah yang paling elegan dan direkomendasikan untuk digunakan pada callback pembanding usort() sejak PHP 7.0+?',
      options: [
        'Spaceship Operator (<=>)',
        'Ternary Operator (?:)',
        'Null Coalescing (??)',
        'Bitwise XOR (^)'
      ],
      correctIndex: 0,
      explanation: 'Spaceship operator ($a <=> $b) mengembalikan -1, 0, atau 1 secara otomatis, sangat pas untuk fungsi callback usort.'
    }
  }
];

module.exports = phpPart14RefArrays3;
