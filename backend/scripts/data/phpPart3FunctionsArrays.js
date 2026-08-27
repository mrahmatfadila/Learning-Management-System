// ==========================================================
// DATA MATERI PHP: BAB 1 (LANJUTAN) - FUNCTIONS, ARRAYS, SUPERGLOBALS & REGEX
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart3FunctionsArrays = [
  // 37. PHP FUNCTIONS
  {
    id: 'php-functions',
    title: 'PHP Functions',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 37,
    overview: 'Kuasai pembuatan fungsi di PHP: parameter & argumen, default values, return type declarations, passing by reference (&), variadic arguments (...), dan fitur PHP 8.0 Named Arguments.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">FUNGSI</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 37 / 56</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧩 Fungsi & Deklarasi Tipe di PHP 8</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Fungsi adalah blok kode modular yang dapat dipanggil berkali-kali untuk menjalankan tugas spesifik. Di PHP 8.x, fungsi mendukung deklarasi tipe parameter yang ketat (Type Hints), Return Types, dan Named Arguments.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800/50">
            <h4 class="font-bold text-purple-700 dark:text-purple-400 text-sm mb-1">1. Typed Parameters & Return Types</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400 mb-2">Mendefinisikan tipe data masukan dan tipe data keluaran secara eksplisit.</p>
            <pre class="bg-slate-950 text-slate-200 p-2.5 rounded text-[11px] font-mono">function hitung(int $a, int $b): int {
    return $a + $b;
}</pre>
          </div>

          <div class="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-800/50">
            <h4 class="font-bold text-indigo-700 dark:text-indigo-400 text-sm mb-1">2. Named Arguments (PHP 8.0+)</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400 mb-2">Mengirimkan argumen berdasarkan nama parameternya tanpa harus terikat urutan posisi.</p>
            <pre class="bg-slate-950 text-slate-200 p-2.5 rounded text-[11px] font-mono">kirimPesan(pesan: "Halo", penerima: "Budi");</pre>
          </div>
        </div>
      </div>
    `,
    code: `<?php
// Deklarasi fungsi modern dengan Type Hinting dan Return Type
function formatGaji(string $nama, float $gajiPokok, float $bonus = 0): string {
    $total = $gajiPokok + $bonus;
    return "$nama menerima total: Rp " . number_format($total, 0, ',', '.');
}

// 1. Pemanggilan standar berdasarkan urutan
echo "<p>" . formatGaji("Andi", 8500000, 1500000) . "</p>";

// 2. Pemanggilan dengan Default Value (tanpa bonus)
echo "<p>" . formatGaji("Siti", 6000000) . "</p>";

// 3. Pemanggilan menggunakan Named Arguments PHP 8 (urutan bebas)
echo "<p>" . formatGaji(bonus: 2000000, nama: "Budi Santoso", gajiPokok: 10000000) . "</p>";
?>`,
    codeExplanation: [
      'Tipe data parameter (string $nama, float $gajiPokok) memastikan data yang dikirim sesuai kontrak.',
      'Sintaks : string di akhir deklarasi fungsi menetapkan bahwa fungsi ini wajib mengembalikan nilai string.',
      'Named arguments (bonus: 2000000, nama: "Budi") membuat kode sangat mudah dibaca dan fleksibel.'
    ],
    challenge: {
      instruction: 'Buat fungsi hitungLuasPersegi(int $sisi): int yang mengembalikan nilai $sisi * $sisi.',
      starterCode: `<?php
function hitungLuasPersegi(int $sisi): int {
    return $sisi * $sisi;
}

echo "Luas persegi (sisi 8): " . hitungLuasPersegi(8);
?>`,
      hint: 'Gunakan return $sisi * $sisi;'
    },
    quiz: {
      question: 'Fitur baru apakah di PHP 8 yang memungkinkan pengembang memanggil fungsi dengan menyebutkan nama parameter sehingga urutan argumen tidak lagi kaku?',
      options: [
        'Named Arguments',
        'Arrow Functions',
        'Nullable Types',
        'Generator Functions'
      ],
      correctIndex: 0,
      explanation: 'Named Arguments di PHP 8 memungkinkan pengiriman argumen fungsi berdasarkan nama parameternya (misal: func(nama: "Budi")).'
    }
  },

  // 38. PHP ARRAYS
  {
    id: 'php-arrays',
    title: 'PHP Arrays',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 38,
    overview: 'Pengantar struktur data Array di PHP: Indexed Arrays, Associative Arrays, dan Multidimensional Arrays untuk mengelola koleksi data.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ARRAYS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 38 / 56</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📚 Struktur Data Array di PHP</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Array adalah variabel khusus yang dapat menampung lebih dari satu nilai dalam satu nama variabel. Array di PHP sangat fleksibel dan dapat menampung tipe data campuran.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800/50">
            <h4 class="font-bold text-purple-700 dark:text-purple-400 text-sm mb-1">1. Indexed Array</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400">Array dengan indeks numerik otomatis dimulai dari 0.</p>
          </div>
          <div class="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-800/50">
            <h4 class="font-bold text-indigo-700 dark:text-indigo-400 text-sm mb-1">2. Associative Array</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400">Array dengan nama kunci (key) kustom berupa string.</p>
          </div>
          <div class="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/50">
            <h4 class="font-bold text-emerald-700 dark:text-emerald-400 text-sm mb-1">3. Multidimensional</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400">Array di dalam array (struktur tabel data matriks/nested).</p>
          </div>
        </div>
      </div>
    `,
    code: `<?php
// Deklarasi array menggunakan sintaks kurung siku []
$teknologi = ["PHP 8.3", "Laravel 11", "MySQL", "PostgreSQL", "Redis"];

// Menghitung total elemen dengan count()
$total = count($teknologi);

echo "<h3>Daftar Tech Stack ($total item):</h3>";
echo "<ul>";
foreach ($teknologi as $index => $item) {
    echo "<li>Indeks [$index]: <strong>$item</strong></li>";
}
echo "</ul>";
?>`,
    codeExplanation: [
      'Sintaks tanda kurung siku [] adalah standar penulisan array modern di PHP (menggantikan fungsi array()).',
      'Fungsi count($teknologi) mengembalikan total jumlah elemen di dalam array.'
    ],
    challenge: {
      instruction: 'Buat array $framework berisi 3 nama framework web dan hitung jumlahnya dengan count().',
      starterCode: `<?php
$framework = ["Laravel", "Symfony", "CodeIgniter"];
echo "Total framework: " . count($framework);
?>`,
      hint: 'Gunakan fungsi count().'
    },
    quiz: {
      question: 'Fungsi bawaan PHP apa yang digunakan untuk menghitung jumlah total elemen di dalam sebuah array?',
      options: [
        'count()',
        'length()',
        'sizeof_all()',
        'total()'
      ],
      correctIndex: 0,
      explanation: 'count() (atau aliasnya sizeof()) digunakan untuk menghitung berapa banyak elemen yang ada di dalam array.'
    }
  },

  // 39. INDEXED ARRAYS
  {
    id: 'php-arrays-indexed',
    title: 'Indexed Arrays',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 39,
    overview: 'Pelajari array terindeks numerik: cara akses elemen berbasis 0, looping dengan for & foreach, dan menambahkan elemen baru.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">INDEXED ARRAYS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 39 / 56</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔢 Array Berindeks Numerik</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Setiap elemen pada Indexed Array memiliki nomor posisi indeks yang dimulai dari angka <code>0</code> untuk elemen pertama, <code>1</code> untuk elemen kedua, dan seterusnya.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$mobil = ["Toyota Supra", "Nissan GT-R", "Honda NSX", "Mazda RX-7"];

// Mengakses elemen berdasarkan indeks
echo "<p>Mobil Favorit 1: <strong>" . $mobil[0] . "</strong></p>";
echo "<p>Mobil Favorit 2: <strong>" . $mobil[1] . "</strong></p>";

// Menambahkan elemen baru ke urutan paling akhir
$mobil[] = "Mitsubishi Lancer Evo";

echo "<h4>Semua Koleksi Mobil Sport:</h4>";
echo "<ol>";
for ($i = 0; $i < count($mobil); $i++) {
    echo "<li>" . $mobil[$i] . "</li>";
}
echo "</ol>";
?>`,
    codeExplanation: [
      '$mobil[0] mengambil elemen pertama yaitu "Toyota Supra".',
      'Sintaks $mobil[] = "..." secara otomatis menambahkan elemen baru ke indeks numerik berikutnya di urutan paling belakang.'
    ],
    challenge: {
      instruction: 'Akses dan cetak elemen ke-3 dari array $bahasa = ["HTML", "CSS", "PHP", "JS"]; (ingat indeks dimulai dari 0).',
      starterCode: `<?php
$bahasa = ["HTML", "CSS", "PHP", "JS"];
echo "Elemen ke-3 adalah: " . $bahasa[2];
?>`,
      hint: 'Elemen ke-3 berada di indeks [2].'
    },
    quiz: {
      question: 'Berapakah nomor indeks dari elemen pertama pada Indexed Array di PHP?',
      options: [
        '0',
        '1',
        '-1',
        'null'
      ],
      correctIndex: 0,
      explanation: 'Indeks array di PHP selalu berbasis nol (0-indexed).'
    }
  },

  // 40. ASSOCIATIVE ARRAYS
  {
    id: 'php-arrays-assoc',
    title: 'Associative Arrays',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 40,
    overview: 'Kuasai Associative Array di mana setiap elemen disimpan dengan pasangan kunci bernama (Key => Value) untuk representasi data objek/entitas.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ASSOCIATIVE ARRAYS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 40 / 56</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔑 Array Asosiatif (Key => Value)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Associative Array menggunakan string bernama (kunci/key) sebagai pengganti nomor indeks numerik. Sangat ideal untuk merepresentasikan baris data record pengguna atau konfigurasi.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$kursus = [
    "kode" => "DEV-PHP-01",
    "judul" => "Mastering PHP 8 & Laravel",
    "instruktur" => "Muhammad Rahmat Fadila",
    "level" => "Semua Tingkat (Pemula ke Mahir)",
    "harga" => 350000,
    "status" => "Tersedia"
];

echo "<h3>Informasi Detail Modul:</h3>";
echo "<ul>";
echo "<li><strong>Judul:</strong> " . $kursus['judul'] . "</li>";
echo "<li><strong>Instruktur:</strong> " . $kursus['instruktur'] . "</li>";
echo "<li><strong>Biaya:</strong> Rp " . number_format($kursus['harga'], 0, ',', '.') . "</li>";
echo "<li><strong>Status:</strong> " . $kursus['status'] . "</li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'Setiap data diakses menggunakan nama kuncinya di dalam tanda petik, seperti $kursus["judul"].',
      'Operator => (fat arrow) digunakan untuk memasangkan kunci dengan nilainya.'
    ],
    challenge: {
      instruction: 'Buat array asosiatif $user berisi "nama" dan "email", lalu cetak nilai email-nya.',
      starterCode: `<?php
$user = [
    "nama" => "Fadila",
    "email" => "fadila@devgrow.id"
];

echo "Email pengguna: " . $user["email"];
?>`,
      hint: 'Gunakan $user["email"].'
    },
    quiz: {
      question: 'Simbol apa yang digunakan untuk menghubungkan nama kunci (key) dengan nilainya (value) pada Associative Array?',
      options: [
        '=> (Fat Arrow)',
        '-> (Thin Arrow)',
        ':: (Double Colon)',
        '=='
      ],
      correctIndex: 0,
      explanation: 'Operator => (key => value) digunakan saat mendefinisikan array asosiatif di PHP.'
    }
  },

  // 41. CREATE ARRAYS
  {
    id: 'php-arrays-create',
    title: 'Create Arrays',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 41,
    overview: 'Pelajari berbagai cara membuat array di PHP: short array syntax [], array() construct, range(), dan array_fill().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PEMBUATAN ARRAY</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 41 / 56</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛠️ Metode Pembuatan Array di PHP</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Selain deklarasi manual dengan <code>[]</code>, PHP menyediakan fungsi cerdas seperti <code>range()</code> untuk membuat deret angka otomatis.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// 1. Short Array Syntax []
$buah = ["Apel", "Mangga", "Jeruk"];

// 2. Menggunakan range() untuk membuat deret angka 1 sampai 10
$deretAngka = range(1, 10);

// 3. Menggunakan range() dengan step kelipatan 5 (0 s/d 50)
$kelipatanLima = range(0, 50, 5);

// 4. Deret huruf alfabet A sampai F
$alfabet = range('A', 'F');

echo "<h3>Contoh Pembuatan Array Cepat (range):</h3>";
echo "<p><strong>Deret 1-10:</strong> " . implode(", ", $deretAngka) . "</p>";
echo "<p><strong>Kelipatan 5:</strong> " . implode(", ", $kelipatanLima) . "</p>";
echo "<p><strong>Alfabet A-F:</strong> " . implode(" - ", $alfabet) . "</p>";
?>`,
    codeExplanation: [
      'range(start, end, step) menghasilkan array berisi urutan data otomatis tanpa perlu loop manual.',
      'implode(", ", $array) menggabungkan seluruh elemen array menjadi satu string rapi.'
    ],
    challenge: {
      instruction: 'Buat deret angka dari 10 sampai 100 dengan kelipatan 10 menggunakan range(10, 100, 10).',
      starterCode: `<?php
$puluhan = range(10, 100, 10);
echo implode(", ", $puluhan);
?>`,
      hint: 'Panggil range(10, 100, 10).'
    },
    quiz: {
      question: 'Fungsi bawaan PHP apa yang digunakan untuk membuat array berisi deret angka atau huruf secara otomatis?',
      options: [
        'range()',
        'sequence()',
        'array_create()',
        'generate()'
      ],
      correctIndex: 0,
      explanation: 'range(start, end, step) membuat array berisi elemen berurutan secara otomatis.'
    }
  },

  // 42. ACCESS ARRAY ITEMS
  {
    id: 'php-arrays-access',
    title: 'Access Array Items',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 42,
    overview: 'Pelajari cara aman mengakses data array: kurung siku [], isset(), array_key_exists(), dan penanganan undefined index.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ACCESS ITEMS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 42 / 56</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Mengakses Elemen Array dengan Aman</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Mengakses kunci array yang tidak ada akan memicu peringatan <em>Warning: Undefined array key</em>. Gunakan operator null coalescing (<code>??</code>) atau <code>isset()</code> untuk akses yang tahan error.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$konfigurasi = [
    "app_name" => "DevGrow Learning Center",
    "debug" => true,
    "theme" => "dark"
];

// Akses aman dengan Null Coalescing (??)
$namaApp = $konfigurasi['app_name'] ?? 'Default App';
$portServer = $konfigurasi['port'] ?? 8080; // Kunci 'port' tidak ada, otomatis ambil 8080

// Pengecekan dengan isset()
$hasTheme = isset($konfigurasi['theme']);

echo "<h3>Konfigurasi Sistem:</h3>";
echo "<ul>";
echo "<li><strong>Nama Aplikasi:</strong> $namaApp</li>";
echo "<li><strong>Port Server:</strong> $portServer (Menggunakan Default)</li>";
echo "<li><strong>Tema Ditemukan?</strong> " . ($hasTheme ? "Ya (" . $konfigurasi['theme'] . ")" : "Tidak") . "</li>";
echo "</ul>";
?>`,
    codeExplanation: [
      '$konfigurasi["port"] ?? 8080 mengembalikan 8080 secara mulus tanpa menghasilkan warning di log server.',
      'isset() menguji apakah kunci ada DAN nilainya tidak bernilai null.'
    ],
    challenge: {
      instruction: 'Gunakan operator ?? untuk mengambil kunci "kota" dari $alamat dengan default "Jakarta".',
      starterCode: `<?php
$alamat = ["provinsi" => "Jawa Barat"];
$kota = $alamat["kota"] ?? "Jakarta";
echo "Kota: $kota";
?>`,
      hint: 'Gunakan $alamat["kota"] ?? "Jakarta";'
    },
    quiz: {
      question: 'Operator apa yang paling elegan dan aman di PHP untuk mengakses elemen array yang mungkin belum terdefinisi tanpa memicu error warning?',
      options: [
        '?? (Null Coalescing Operator)',
        '?: (Elvis Operator)',
        '===',
        '->'
      ],
      correctIndex: 0,
      explanation: 'Operator ?? secara khusus dirancang untuk menangani nilai null dan array key yang belum terdefinisi (undefined key).'
    }
  },

  // 43. UPDATE ARRAY ITEMS
  {
    id: 'php-arrays-update',
    title: 'Update Array Items',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 43,
    overview: 'Pelajari cara mengubah nilai elemen array yang sudah ada berdasarkan nomor indeks atau nama kunci, serta teknik update by reference di dalam foreach (&).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">UPDATE ITEMS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 43 / 56</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">✏️ Mengubah (Update) Nilai Array</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Untuk mengubah nilai elemen, cukup targetkan indeks atau kuncinya dan masukkan nilai baru menggunakan operator assignment (<code>=</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
// 1. Update Indexed Array
$statusTugas = ["Belum Selesai", "Belum Selesai", "Belum Selesai"];
$statusTugas[0] = "Selesai (100%)"; // Mengubah elemen pertama

// 2. Update Associative Array
$pengguna = [
    "username" => "rahmat123",
    "role" => "STUDENT",
    "xp" => 200
];

// Naikkan XP dan ubah role
$pengguna['xp'] += 150; // Menjadi 350
$pengguna['role'] = "PRO_STUDENT";

// 3. Update masal dengan reference (&) di foreach
$hargaItem = [10000, 20000, 30000];
foreach ($hargaItem as &$harga) {
    $harga = $harga * 1.1; // Naikkan 10%
}
unset($harga); // Selalu putus reference setelah loop selesai!

echo "<h3>Hasil Pembaruan Data Pengguna:</h3>";
echo "<p>Role Baru: <strong>" . $pengguna['role'] . "</strong> | Total XP: <strong>" . $pengguna['xp'] . " XP</strong></p>";

echo "<h4>Harga Setelah Naik 10%:</h4>";
echo "<p>" . implode(", ", $hargaItem) . "</p>";
?>`,
    codeExplanation: [
      '$pengguna["xp"] += 150 langsung menambah nilai pada kunci "xp" yang ada.',
      'Tanda ampersand (&) pada foreach ($hargaItem as &$harga) memungkinkan modifikasi elemen asli secara in-place.'
    ],
    challenge: {
      instruction: 'Ubah elemen ke-2 ($daftar[1]) dari array $daftar = ["A", "B", "C"] menjadi "Z".',
      starterCode: `<?php
$daftar = ["A", "B", "C"];
$daftar[1] = "Z";
echo implode(", ", $daftar);
?>`,
      hint: 'Tetapkan $daftar[1] = "Z";'
    },
    quiz: {
      question: 'Karakter apa yang ditambahkan di depan variabel loop foreach (seperti &$item) agar perubahan nilai langsung berdampak ke array aslinya?',
      options: [
        '& (Ampersand / Reference)',
        '* (Pointer)',
        '$ (Dollar)',
        '# (Hash)'
      ],
      correctIndex: 0,
      explanation: 'Simbol & (passing by reference) membuat variabel loop terhubung langsung ke alamat memori elemen array asli.'
    }
  },

  // 44. ADD ARRAY ITEMS
  {
    id: 'php-arrays-add',
    title: 'Add Array Items',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 44,
    overview: 'Pelajari cara menambahkan elemen baru ke dalam array: sintaks kurung siku [], array_push(), array_unshift(), dan spread operator (...).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ADD ITEMS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 44 / 56</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">➕ Menambahkan Elemen ke Array</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Anda dapat menambahkan item di bagian akhir array (<code>array_push()</code> / <code>$arr[]</code>) atau di bagian paling awal (<code>array_unshift()</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$koleksi = ["React", "Vue"];

// 1. Menambah di akhir dengan $arr[] (Paling Cepat & Direkomendasikan)
$koleksi[] = "Angular";

// 2. Menambah beberapa item sekaligus di akhir dengan array_push()
array_push($koleksi, "Svelte", "Next.js");

// 3. Menambah di awal antrian dengan array_unshift()
array_unshift($koleksi, "Vanilla JS");

// 4. Menggabungkan array dengan Spread Operator (...) PHP 7.4+
$backend = ["Node.js", "PHP Laravel"];
$fullStack = [...$koleksi, ...$backend];

echo "<h3>Tech Stack Full-Stack Lengkap:</h3>";
echo "<ol>";
foreach ($fullStack as $item) {
    echo "<li>$item</li>";
}
echo "</ol>";
?>`,
    codeExplanation: [
      'Sintaks $arr[] = $val lebih cepat secara performa dibanding memanggil fungsi array_push() untuk satu item.',
      'array_unshift() menyisipkan item ke indeks ke-0 dan menggeser seluruh indeks lainnya ke kanan.',
      'Spread operator (...) menggabungkan array secara elegan tanpa perlu array_merge().'
    ],
    challenge: {
      instruction: 'Tambahkan elemen "PostgreSQL" ke dalam array $db = ["MySQL", "SQLite"] menggunakan sintaks $db[] = ...;',
      starterCode: `<?php
$db = ["MySQL", "SQLite"];
$db[] = "PostgreSQL";
echo implode(", ", $db);
?>`,
      hint: 'Gunakan $db[] = "PostgreSQL";'
    },
    quiz: {
      question: 'Fungsi bawaan PHP apa yang digunakan untuk menyisipkan satu atau beberapa elemen baru ke bagian PALING AWAL dari suatu array?',
      options: [
        'array_unshift()',
        'array_push()',
        'array_shift()',
        'array_insert_first()'
      ],
      correctIndex: 0,
      explanation: 'array_unshift() menyisipkan elemen baru ke posisi paling depan (indeks 0) dari array.'
    }
  },

  // 45. REMOVE ARRAY ITEMS
  {
    id: 'php-arrays-remove',
    title: 'Remove Array Items',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 45,
    overview: 'Pelajari cara menghapus elemen array menggunakan unset(), array_pop() (hapus dari belakang), array_shift() (hapus dari depan), dan array_splice().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">REMOVE ITEMS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 45 / 56</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🗑️ Menghapus Elemen dari Array</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            PHP menyediakan fungsi untuk menghapus data berdasarkan posisi (depan/belakang) maupun menghapus kunci tertentu menggunakan <code>unset()</code>.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <code class="text-purple-600 dark:text-purple-400 font-bold block mb-1">array_pop($arr)</code>
            Menghapus dan mengembalikan elemen terakhir.
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <code class="text-indigo-600 dark:text-indigo-400 font-bold block mb-1">array_shift($arr)</code>
            Menghapus elemen pertama dan me-reindex sisa elemen.
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <code class="text-rose-600 dark:text-rose-400 font-bold block mb-1">unset($arr['key'])</code>
            Menghapus elemen spesifik berdasarkan kuncinya.
          </div>
        </div>
      </div>
    `,
    code: `<?php
$antrian = ["Pasien 1", "Pasien 2", "Pasien 3", "Pasien 4"];

// 1. Melayani pasien paling depan (Hapus dengan array_shift)
$dilayani = array_shift($antrian);

// 2. Membatalkan pasien paling belakang (Hapus dengan array_pop)
$batal = array_pop($antrian);

// 3. Menghapus kunci tertentu pada Associative Array
$pengguna = [
    "nama" => "Fadila",
    "password_rahasia" => "123456",
    "email" => "fadila@devgrow.id"
];
unset($pengguna['password_rahasia']); // Sangat penting sebelum mengirim data ke frontend

echo "<h3>Laporan Pemrosesan Array:</h3>";
echo "<p>Pasien Dilayani: <strong>$dilayani</strong></p>";
echo "<p>Pasien Batal: <strong>$batal</strong></p>";
echo "<p>Sisa Antrian: " . implode(", ", $antrian) . "</p>";
echo "<h4>Data Pengguna Aman (Password Terhapus):</h4>";
echo "<pre style='background: #0f172a; color: #38bdf8; padding: 10px; border-radius: 8px;'>" . print_r($pengguna, true) . "</pre>";
?>`,
    codeExplanation: [
      'array_shift() mengambil elemen pertama dan secara otomatis merapikan kembali indeks numerik array.',
      'unset($pengguna["password_rahasia"]) menghapus kunci sensitif dari memori sehingga tidak bocor ke klien API.'
    ],
    challenge: {
      instruction: 'Hapus elemen terakhir dari array $log = ["Login", "Edit Profil", "Logout"] menggunakan array_pop().',
      starterCode: `<?php
$log = ["Login", "Edit Profil", "Logout"];
$terakhir = array_pop($log);
echo "Log dihapus: $terakhir | Sisa: " . implode(", ", $log);
?>`,
      hint: 'Gunakan array_pop($log).'
    },
    quiz: {
      question: 'Fungsi manakah yang digunakan untuk menghapus elemen terakhir dari suatu array di PHP?',
      options: [
        'array_pop()',
        'array_shift()',
        'array_push()',
        'unset_last()'
      ],
      correctIndex: 0,
      explanation: 'array_pop() menghapus dan mengembalikan elemen paling belakang (terakhir) dari array.'
    }
  },

  // 46. SORTING ARRAYS
  {
    id: 'php-arrays-sorting',
    title: 'Sorting Arrays',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 46,
    overview: 'Kuasai 6 fungsi pengurutan array di PHP: sort(), rsort(), asort(), arsort(), ksort(), dan krsort().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SORTING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 46 / 56</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔤 Mengurutkan Array (Sorting) di PHP</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            PHP menyediakan fungsi pengurutan alfabetis maupun numerik, baik urutan menaik (Ascending A-Z / 0-9) maupun menurun (Descending Z-A / 9-0).
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-purple-600 dark:text-purple-400 block mb-1">sort() & rsort()</strong>
            Mengurutkan Indexed Array (A-Z / Z-A).
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-indigo-600 dark:text-indigo-400 block mb-1">asort() & arsort()</strong>
            Mengurutkan Associative Array berdasarkan NILAI (Value).
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-emerald-600 dark:text-emerald-400 block mb-1">ksort() & krsort()</strong>
            Mengurutkan Associative Array berdasarkan KUNCI (Key).
          </div>
        </div>
      </div>
    `,
    code: `<?php
// 1. Mengurutkan Angka secara Menaik dengan sort()
$nilaiSiswa = [88, 45, 95, 72, 60];
sort($nilaiSiswa);

// 2. Mengurutkan Array Asosiatif berdasarkan Nilai (Tertinggi ke Terendah) dengan arsort()
$leaderboard = [
    "Andi" => 450,
    "Budi" => 890,
    "Citra" => 920,
    "Dewi" => 670
];
arsort($leaderboard);

echo "<h3>Hasil Pengurutan Nilai:</h3>";
echo "<p><strong>Nilai Terurut (sort):</strong> " . implode(", ", $nilaiSiswa) . "</p>";

echo "<h4>Papan Peringkat (Leaderboard arsort):</h4>";
echo "<ol>";
foreach ($leaderboard as $nama => $xp) {
    echo "<li><strong>$nama</strong>: $xp XP</li>";
}
echo "</ol>";
?>`,
    codeExplanation: [
      'sort() mengurutkan dari kecil ke besar dan mereset indeks menjadi numerik 0, 1, 2...',
      'arsort() mempertahankan hubungan kunci "Citra" => 920 sambil mengurutkan nilainya dari yang terbesar.'
    ],
    challenge: {
      instruction: 'Urutkan array $buah = ["Jeruk", "Apel", "Mangga"] dari A ke Z menggunakan sort().',
      starterCode: `<?php
$buah = ["Jeruk", "Apel", "Mangga"];
sort($buah);
echo implode(", ", $buah);
?>`,
      hint: 'Gunakan sort($buah);'
    },
    quiz: {
      question: 'Fungsi mana yang digunakan untuk mengurutkan Associative Array berdasarkan KUNCI (key) dari A sampai Z?',
      options: [
        'ksort()',
        'asort()',
        'sort()',
        'krsort()'
      ],
      correctIndex: 0,
      explanation: 'ksort() (Key Sort) mengurutkan associative array berdasarkan abjad nama kuncinya secara ascending (A-Z).'
    }
  },

  // 47. MULTIDIMENSIONAL ARRAYS
  {
    id: 'php-arrays-multi',
    title: 'Multidimensional Arrays',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 47,
    overview: 'Kuasai array multi-dimensi (Nested Arrays) untuk merepresentasikan tabel data kompleks seperti database records dan respon JSON API.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">MULTIDIMENSIONAL</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 47 / 56</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📊 Array Multidimensi (Nested Arrays)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Array multidimensi adalah array yang berisi satu atau lebih array di dalamnya. Struktur ini adalah format standar pengolahan tabel database di backend web.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Dataset Produk Toko Online (Array of Associative Arrays)
$produkCatalog = [
    [
        "id" => 1,
        "nama" => "Mechanical Keyboard RGB",
        "kategori" => "Aksesoris",
        "harga" => 750000,
        "stok" => 12
    ],
    [
        "id" => 2,
        "nama" => "Gaming Mouse Wireless",
        "kategori" => "Aksesoris",
        "harga" => 450000,
        "stok" => 25
    ],
    [
        "id" => 3,
        "nama" => "Monitor Ultra-Wide 34\"",
        "kategori" => "Display",
        "harga" => 6200000,
        "stok" => 5
    ]
];

echo "<h3>Katalog Produk (Tabel Dinamis):</h3>";
echo "<table border='1' cellpadding='8' style='border-collapse: collapse; width: 100%;'>";
echo "<tr style='background: #f1f5f9;'><th>ID</th><th>Nama Produk</th><th>Kategori</th><th>Harga</th><th>Stok</th></tr>";

foreach ($produkCatalog as $item) {
    echo "<tr>";
    echo "<td>#" . $item['id'] . "</td>";
    echo "<td><strong>" . $item['nama'] . "</strong></td>";
    echo "<td>" . $item['kategori'] . "</td>";
    echo "<td>Rp " . number_format($item['harga'], 0, ',', '.') . "</td>";
    echo "<td>" . $item['stok'] . " unit</td>";
    echo "</tr>";
}

echo "</table>";
?>`,
    codeExplanation: [
      '$produkCatalog[0]["nama"] mengakses nama produk pertama ("Mechanical Keyboard RGB").',
      'Foreach loop bersarang atau berulang adalah pola standar untuk menampilkan data tabel dari database ke halaman HTML.'
    ],
    challenge: {
      instruction: 'Akses dan cetak harga produk kedua ($produkCatalog[1]["harga"]).',
      starterCode: `<?php
$produk = [
    ["nama" => "Buku A", "harga" => 50000],
    ["nama" => "Buku B", "harga" => 75000]
];
echo "Harga Buku B: Rp " . $produk[1]["harga"];
?>`,
      hint: 'Gunakan $produk[1]["harga"].'
    },
    quiz: {
      question: 'Bagaimana cara mengakses nilai pada baris ke-2 kolom "email" dari array multidimensi $karyawan?',
      options: [
        '$karyawan[1][\'email\']',
        '$karyawan->email[1]',
        '$karyawan[2][\'email\']',
        '$karyawan[\'email\'][2]'
      ],
      correctIndex: 0,
      explanation: 'Indeks baris ke-2 adalah [1] (berbasis 0), diikuti dengan kunci kolom [\'email\'].'
    }
  },

  // 48. ARRAY FUNCTIONS
  {
    id: 'php-arrays-functions',
    title: 'Array Functions',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 48,
    overview: 'Kuasai fungsi fungsional array modern: array_map(), array_filter(), array_reduce(), in_array(), dan array_column().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ARRAY FUNCTIONS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 48 / 56</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚡ Pemrograman Fungsional Array di PHP</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Fungsi array bawaan memungkinkan transformasi data, filter selektif, dan kalkulasi agregat tanpa perlu menulis loop manual yang panjang.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-purple-600 dark:text-purple-400 block mb-1">array_map()</strong>
            Mentransformasi setiap elemen dengan fungsi callback.
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-indigo-600 dark:text-indigo-400 block mb-1">array_filter()</strong>
            Menyaring elemen berdasarkan kondisi kebenaran callback.
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-emerald-600 dark:text-emerald-400 block mb-1">in_array($cari, $arr)</strong>
            Memeriksa apakah nilai tertentu ada di dalam array.
          </div>
        </div>
      </div>
    `,
    code: `<?php
$angka = [12, 45, 68, 23, 89, 90, 34];

// 1. array_filter: Ambil hanya angka genap
$angkaGenap = array_filter($angka, fn($n) => $n % 2 === 0);

// 2. array_map: Kalikan setiap angka dengan 2
$dikaliDua = array_map(fn($n) => $n * 2, [1, 2, 3, 4, 5]);

// 3. array_reduce: Hitung total penjumlahan (sum)
$totalSum = array_reduce($angka, fn($carry, $item) => $carry + $item, 0);

// 4. in_array: Pengecekan cepat
$ada90 = in_array(90, $angka);

echo "<h3>Hasil Transformasi Fungsional:</h3>";
echo "<p><strong>Angka Genap Saja:</strong> " . implode(", ", $angkaGenap) . "</p>";
echo "<p><strong>Hasil Array Map (x2):</strong> " . implode(", ", $dikaliDua) . "</p>";
echo "<p><strong>Total Akumulasi (Reduce):</strong> $totalSum</p>";
echo "<p><strong>Apakah angka 90 ada di array?</strong> " . ($ada90 ? "Ya, ditemukan!" : "Tidak") . "</p>";
?>`,
    codeExplanation: [
      'Sintaks fn($n) => ... adalah Arrow Function modern PHP 7.4+ yang sangat ringkas dan otomatis mengikat variabel scope luar.',
      'array_filter() mengembalikan array baru berisi hanya elemen yang lolos seleksi boolean.',
      'in_array() mengembalikan nilai true/false instan.'
    ],
    challenge: {
      instruction: 'Gunakan in_array() untuk mengecek apakah "ADMIN" ada di dalam $roles = ["USER", "GUEST", "ADMIN"].',
      starterCode: `<?php
$roles = ["USER", "GUEST", "ADMIN"];
if (in_array("ADMIN", $roles)) {
    echo "Izin Administrator Ditemukan!";
}
?>`,
      hint: 'Gunakan in_array("ADMIN", $roles).'
    },
    quiz: {
      question: 'Fungsi manakah yang digunakan untuk memfilter dan membuang elemen array yang tidak memenuhi syarat kondisi callback?',
      options: [
        'array_filter()',
        'array_map()',
        'array_reduce()',
        'array_search()'
      ],
      correctIndex: 0,
      explanation: 'array_filter() menyaring elemen array dan hanya mempertahankan elemen yang menghasilkan TRUE pada fungsi callback.'
    }
  },

  // 49. PHP SUPERGLOBALS
  {
    id: 'php-superglobals',
    title: 'PHP Superglobals',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 49,
    overview: 'Pahami variabel bawaan superglobal di PHP ($GLOBALS, $_SERVER, $_REQUEST, $_POST, $_GET, $_FILES, $_ENV, $_COOKIE, $_SESSION) yang otomatis tersedia di seluruh scope tanpa deklarasi global.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SUPERGLOBALS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 49 / 56</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌐 Variabel Superglobal di PHP</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Superglobal adalah variabel array bawaan PHP yang <strong>selalu dapat diakses di mana saja</strong> dalam seluruh kode program (di dalam fungsi, class, maupun file terpisah) tanpa perlu menuliskan <code>global $var;</code>.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <code class="text-purple-600 dark:text-purple-400 font-bold block mb-1">$_GET</code>
            Data URL Query Parameters
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <code class="text-indigo-600 dark:text-indigo-400 font-bold block mb-1">$_POST</code>
            Data HTTP POST Formulir Form
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <code class="text-cyan-600 dark:text-cyan-400 font-bold block mb-1">$_SERVER</code>
            Header, Environment, & Path
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <code class="text-emerald-600 dark:text-emerald-400 font-bold block mb-1">$_SESSION</code>
            Autentikasi Sesi Pengguna
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <code class="text-amber-600 dark:text-amber-400 font-bold block mb-1">$_COOKIE</code>
            Penyimpanan Cookie Klien
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <code class="text-rose-600 dark:text-rose-400 font-bold block mb-1">$_FILES</code>
            File Upload Input Formulir
          </div>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Daftar Variabel Superglobal Aktif:</h3>";
echo "<ul>";
echo "<li><strong>Metode Request:</strong> " . ($_SERVER['REQUEST_METHOD'] ?? 'CLI') . "</li>";
echo "<li><strong>Nama Host Server:</strong> " . ($_SERVER['SERVER_NAME'] ?? 'localhost') . "</li>";
echo "<li><strong>IP Klien:</strong> " . ($_SERVER['REMOTE_ADDR'] ?? '127.0.0.1') . "</li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'Semua variabel superglobal diawali dengan tanda dollar dan underscore (seperti $_GET, $_POST), kecuali $GLOBALS.'
    ],
    challenge: {
      instruction: 'Cetak nilai dari $_SERVER["REQUEST_METHOD"] ?? "GET";',
      starterCode: `<?php
echo "Metode HTTP: " . ($_SERVER["REQUEST_METHOD"] ?? "GET");
?>`,
      hint: 'Panggil $_SERVER["REQUEST_METHOD"].'
    },
    quiz: {
      question: 'Manakah dari variabel berikut yang BUKAN merupakan variabel Superglobal di PHP?',
      options: [
        '$_LOCAL',
        '$_POST',
        '$_SERVER',
        '$GLOBALS'
      ],
      correctIndex: 0,
      explanation: '$_LOCAL bukan superglobal di PHP. Variabel lokal biasa didefinisikan secara independen oleh developer.'
    }
  },

  // 50. $GLOBALS
  {
    id: 'php-superglobals-globals',
    title: '$GLOBALS',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 50,
    overview: 'Pelajari array superglobal $GLOBALS untuk mengakses dan memodifikasi semua variabel yang berada di global scope dari mana saja di dalam fungsi.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">$GLOBALS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 50 / 56</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌐 Array Superglobal $GLOBALS</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$GLOBALS</code> adalah array asosiatif yang menyimpan referensi ke semua variabel yang saat ini didefinisikan di ruang lingkup global skrip Anda.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$skorTotal = 500;
$namaSiswa = "Fadila";

function tambahBonus() {
    // Mengakses dan memodifikasi variabel global langsung melalui $GLOBALS
    $GLOBALS['skorTotal'] += 250;
}

tambahBonus();

echo "<h3>Informasi Pengguna:</h3>";
echo "<p>Nama: <strong>" . $GLOBALS['namaSiswa'] . "</strong></p>";
echo "<p>Skor Akhir: <strong>" . $skorTotal . " XP</strong> (Setelah Ditambah Bonus)</p>";
?>`,
    codeExplanation: [
      '$GLOBALS["skorTotal"] mengakses variabel $skorTotal di luar fungsi secara langsung.',
      'Perubahan nilai di dalam fungsi langsung tercermin pada variabel global aslinya.'
    ],
    challenge: {
      instruction: 'Ubah $GLOBALS["skorTotal"] menjadi 1000 di dalam fungsi.',
      starterCode: `<?php
$skorTotal = 100;
function resetSkor() {
    $GLOBALS['skorTotal'] = 1000;
}
resetSkor();
echo "Skor Baru: $skorTotal";
?>`,
      hint: 'Gunakan $GLOBALS["skorTotal"] = 1000;'
    },
    quiz: {
      question: 'Nama kunci di dalam array $GLOBALS[\'namaVariabel\'] sesuai dengan:',
      options: [
        'Nama variabel global tanpa simbol dollar ($)',
        'Nama variabel dengan simbol dollar ($)',
        'Nomor baris file',
        'Tipe data variabel'
      ],
      correctIndex: 0,
      explanation: 'Nama kunci di dalam array $GLOBALS adalah nama variabel tanpa menyertakan tanda dollar (misal: $nama -> $GLOBALS[\'nama\']).'
    }
  },

  // 51. $_SERVER
  {
    id: 'php-superglobals-server',
    title: '$_SERVER',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 51,
    overview: 'Pelajari array $_SERVER: membaca informasi header HTTP, jalur file (SCRIPT_NAME, PHP_SELF), metode request (GET/POST), dan informasi client browser.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">$_SERVER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 51 / 56</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🖥️ Menginspeksi Informasi Server & Klien</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$_SERVER</code> menyimpan informasi penting seputar header HTTP, konfigurasi web server, path URL yang diminta, serta User-Agent browser pengunjung.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$serverInfo = [
    "PHP_SELF" => $_SERVER['PHP_SELF'] ?? '/index.php',
    "SERVER_NAME" => $_SERVER['SERVER_NAME'] ?? 'localhost',
    "HTTP_HOST" => $_SERVER['HTTP_HOST'] ?? 'localhost:3000',
    "REQUEST_METHOD" => $_SERVER['REQUEST_METHOD'] ?? 'GET',
    "SCRIPT_NAME" => $_SERVER['SCRIPT_NAME'] ?? '/index.php'
];

echo "<h3>Parameter $_SERVER Utama:</h3>";
echo "<table border='1' cellpadding='8' style='border-collapse: collapse; width: 100%;'>";
echo "<tr style='background: #f1f5f9;'><th>Key</th><th>Nilai Saat Ini</th></tr>";

foreach ($serverInfo as $key => $val) {
    echo "<tr><td><code>\$_SERVER['$key']</code></td><td>$val</td></tr>";
}

echo "</table>";
?>`,
    codeExplanation: [
      '$_SERVER["REQUEST_METHOD"] sangat krusial di backend router untuk membedakan request GET, POST, PUT, DELETE.',
      '$_SERVER["PHP_SELF"] sering digunakan sebagai action tujuan form pada halaman yang sama.'
    ],
    challenge: {
      instruction: 'Cetak nama domain/host yang sedang aktif menggunakan $_SERVER["HTTP_HOST"] ?? "localhost".',
      starterCode: `<?php
$host = $_SERVER["HTTP_HOST"] ?? "localhost";
echo "Host aktif: $host";
?>`,
      hint: 'Panggil $_SERVER["HTTP_HOST"].'
    },
    quiz: {
      question: 'Kunci $_SERVER manakah yang digunakan untuk mengetahui metode HTTP yang dikirim oleh klien (misal GET atau POST)?',
      options: [
        '$_SERVER[\'REQUEST_METHOD\']',
        '$_SERVER[\'HTTP_METHOD\']',
        '$_SERVER[\'METHOD_TYPE\']',
        '$_SERVER[\'ACTION\']'
      ],
      correctIndex: 0,
      explanation: '$_SERVER[\'REQUEST_METHOD\'] mengembalikan string metode request HTTP yang digunakan seperti "GET", "POST", "PUT", dll.'
    }
  },

  // 52. $_REQUEST
  {
    id: 'php-superglobals-request',
    title: '$_REQUEST',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 52,
    overview: 'Pahami array $_REQUEST yang menggabungkan data dari $_GET, $_POST, dan $_COOKIE secara otomatis.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">$_REQUEST</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 52 / 56</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📦 Array Superglobal $_REQUEST</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$_REQUEST</code> adalah array gabungan yang secara default memuat isi dari <code>$_GET</code>, <code>$_POST</code>, dan <code>$_COOKIE</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Mensimulasikan data masukan request
$_REQUEST['kataKunci'] = $_REQUEST['kataKunci'] ?? "Tutorial PHP 8";

$search = htmlspecialchars($_REQUEST['kataKunci']);

echo "<h3>Hasil Pencarian:</h3>";
echo "<p>Menampilkan hasil untuk kata kunci: <strong style='color: #4f46e5;'>\"$search\"</strong></p>";
?>`,
    codeExplanation: [
      'htmlspecialchars() wajib digunakan untuk mencegah serangan Cross-Site Scripting (XSS) sebelum mencetak input pengguna ke layar.'
    ],
    challenge: {
      instruction: 'Bersihkan input dengan htmlspecialchars() sebelum mencetaknya.',
      starterCode: `<?php
$input = "<script>alert('hack')</script>";
$aman = htmlspecialchars($input);
echo "Teks aman: " . $aman;
?>`,
      hint: 'Panggil htmlspecialchars($input).'
    },
    quiz: {
      question: 'Data dari sumber manakah yang digabungkan secara otomatis di dalam superglobal $_REQUEST?',
      options: [
        '$_GET, $_POST, dan $_COOKIE',
        '$_SERVER dan $_ENV saja',
        'Hanya file database',
        'Hanya $_SESSION'
      ],
      correctIndex: 0,
      explanation: '$_REQUEST mengumpulkan parameter masukan dari query URL ($_GET), data form body ($_POST), dan cookie ($_COOKIE).'
    }
  },

  // 53. $_POST
  {
    id: 'php-superglobals-post',
    title: '$_POST',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 53,
    overview: 'Kuasai penanganan formulir HTML dengan metode HTTP POST: pengiriman data aman, tidak terlihat di URL bar, dan sanitasi input form.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">$_POST</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 53 / 56</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📨 Mengolah Form dengan $_POST</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$_POST</code> digunakan untuk menerima data formulir yang dikirim melalui metode <code>POST</code>. Data dikirimkan di dalam body request HTTP sehingga tidak terekspos di URL bar browser, sangat ideal untuk data sensitif seperti password dan transaksi.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Simulasi penanganan submit formulir POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = htmlspecialchars(trim($_POST['email'] ?? ''));
    $password = $_POST['password'] ?? '';
    
    if (!empty($email) && !empty($password)) {
        echo "<div style='padding: 12px; background: #ecfdf5; border: 1px solid #10b981; border-radius: 8px; color: #065f46;'>";
        echo "✅ <strong>Login Berhasil:</strong> Selamat datang kembali, $email!";
        echo "</div>";
    } else {
        echo "<div style='color: red;'>⚠️ Harap isi semua kolom formulir!</div>";
    }
} else {
    echo "<p>Silakan kirimkan data melalui formulir POST.</p>";
}
?>`,
    codeExplanation: [
      'Pengecekan $_SERVER["REQUEST_METHOD"] === "POST" memastikan bahwa logika hanya dieksekusi saat form di-submit.',
      'trim() dan htmlspecialchars() membersihkan input string dari spasi kosong dan tag berbahaya.'
    ],
    challenge: {
      instruction: 'Buat pengecekan jika isset($_POST["username"]), cetak nama usernamenya.',
      starterCode: `<?php
$_POST["username"] = "devgrow_student";
if (isset($_POST["username"])) {
    echo "Username: " . htmlspecialchars($_POST["username"]);
}
?>`,
      hint: 'Gunakan isset($_POST["username"]).'
    },
    quiz: {
      question: 'Mengapa metode POST lebih disukai dibandingkan GET saat mengirimkan data login (password)?',
      options: [
        'Karena data POST dikirim di dalam HTTP body dan tidak terlihat di bilah URL browser',
        'Karena POST hanya bisa menampung 100 karakter',
        'Karena POST mengubah password menjadi hash secara otomatis',
        'Karena GET tidak bisa memproses angka'
      ],
      correctIndex: 0,
      explanation: 'Metode POST menyembunyikan data di dalam body request HTTP sehingga tidak tercatat di riwayat URL browser maupun log akses proxy.'
    }
  },

  // 54. $_GET
  {
    id: 'php-superglobals-get',
    title: '$_GET',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 54,
    overview: 'Kuasai penanganan URL Query Parameters dengan superglobal $_GET: pagination, filter kategori, dan sanitasi parameter URL.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">$_GET</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 54 / 56</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔗 Query Parameters dengan $_GET</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>$_GET</code> digunakan untuk mengumpulkan data yang dikirim melalui URL parameter (contoh: <code>page.php?kategori=php&halaman=2</code>). Sangat ideal untuk tautan bookmarkable, filter pencarian, dan sistem paginasi.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Mensimulasikan parameter URL: kursus.php?kategori=backend&page=3
$_GET['kategori'] = $_GET['kategori'] ?? 'backend';
$_GET['page'] = $_GET['page'] ?? 1;

$kategoriTerpilih = htmlspecialchars($_GET['kategori']);
$halamanAktif = (int)$_GET['page'];

echo "<h3>Filter Katalog Kursus:</h3>";
echo "<p>Kategori Aktif: <span style='background: #e0e7ff; padding: 2px 8px; border-radius: 4px; font-weight: bold;'>$kategoriTerpilih</span></p>";
echo "<p>Halaman Saat Ini: <strong>Halaman ke-$halamanAktif</strong></p>";
?>`,
    codeExplanation: [
      'Data $_GET diambil langsung dari URL setelah tanda tanya (?).',
      '(int)$_GET["page"] melakukan type casting ke bilangan bulat untuk memastikan parameter halaman selalu angka valid.'
    ],
    challenge: {
      instruction: 'Ambil parameter $_GET["id"] dengan default nilai 1.',
      starterCode: `<?php
$_GET["id"] = 42;
$id = (int)($_GET["id"] ?? 1);
echo "ID Modul: $id";
?>`,
      hint: 'Gunakan (int)($_GET["id"] ?? 1);'
    },
    quiz: {
      question: 'Di manakah data yang dikirim menggunakan metode GET ditampilkan?',
      options: [
        'Tampil terlihat langsung di bilah alamat URL browser setelah tanda tanya (?)',
        'Di dalam header enkripsi SSL',
        'Di dalam file database php.ini',
        'Tidak terlihat di mana pun'
      ],
      correctIndex: 0,
      explanation: 'Data GET dikirim sebagai Query String yang terlihat langsung pada URL browser (contoh: /search?q=php).'
    }
  },

  // 55. PHP REGEX
  {
    id: 'php-regex',
    title: 'PHP RegEx',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 55,
    overview: 'Pengantar Regular Expressions (RegEx) di PHP: delimiter (/.../), pola pattern, modifier (i, m, s), dan karakter metakarakter untuk validasi data tingkat lanjut.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">REGEX</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 55 / 56</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎯 Pola Pencarian Teks dengan RegEx</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Regular Expression (RegEx) adalah urutan karakter yang membentuk pola pencarian teks (search pattern) untuk validasi email, nomor telepon, dan pencocokan teks kompleks.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-purple-600 dark:text-purple-400 block mb-1">Delimiter (/)</strong>
            Pola diapit oleh garis miring: <code>/pola/</code>
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-indigo-600 dark:text-indigo-400 block mb-1">Modifier (i)</strong>
            Pencarian case-insensitive (abaikan huruf besar/kecil): <code>/php/i</code>
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-emerald-600 dark:text-emerald-400 block mb-1">Karakter ^ dan $</strong>
            <code>^</code> awal kalimat, <code>$</code> akhir kalimat.
          </div>
        </div>
      </div>
    `,
    code: `<?php
$teks = "Selamat Datang di DevGrow Academy Platform!";
$pola = "/devgrow/i"; // Pencarian kata 'devgrow' tanpa membedakan huruf besar/kecil

$isCocok = preg_match($pola, $teks);

echo "<h3>Uji Kecocokan Pola RegEx:</h3>";
echo "<p>Kalimat: <em>\"$teks\"</em></p>";
echo "<p>Pola: <code>$pola</code></p>";
echo "<p>Hasil Evaluasi: " . ($isCocok ? "<strong style='color: green;'>✓ Pola Ditemukan!</strong>" : "<strong style='color: red;'>✗ Tidak Cocok</strong>") . "</p>";
?>`,
    codeExplanation: [
      'Modifier i di ujung /devgrow/i membuat pencarian mencocokkan kata "DevGrow", "DEVGROW", maupun "devgrow".',
      'preg_match() mengembalikan angka 1 jika pola cocok dan 0 jika tidak.'
    ],
    challenge: {
      instruction: 'Uji apakah string $email memiliki domain "@gmail.com" menggunakan preg_match("/@gmail\\.com$/i", $email).',
      starterCode: `<?php
$email = "developer@gmail.com";
$pola = "/@gmail\\.com$/i";
if (preg_match($pola, $email)) {
    echo "Email Gmail Valid!";
}
?>`,
      hint: 'Karakter $ menandakan akhir dari string.'
    },
    quiz: {
      question: 'Modifier RegEx apa yang digunakan agar pencarian teks bersifat Case-Insensitive (mengabaikan perbedaan huruf kapital/kecil)?',
      options: [
        'Modifier i',
        'Modifier m',
        'Modifier g',
        'Modifier s'
      ],
      correctIndex: 0,
      explanation: 'Modifier i (contoh: /pattern/i) membuat pencocokan RegEx mengabaikan huruf besar/kecil.'
    }
  },

  // 56. PHP REGEX FUNCTIONS
  {
    id: 'php-regex-functions',
    title: 'PHP RegEx Functions',
    chapter: 'PHP Tutorial',
    chapterId: 'php-chap-tutorial',
    order: 56,
    overview: 'Kuasai fungsi pemroses RegEx terpopuler di PHP: preg_match(), preg_match_all(), preg_replace(), dan preg_split().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">REGEX FUNCTIONS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 56 / 56</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛠️ Fungsi Pemroses RegEx di PHP</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Fungsi berawalan <code>preg_</code> (Perl-Compatible Regular Expressions) adalah engine RegEx resmi dan berperforma tinggi di PHP.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-purple-600 dark:text-purple-400 block mb-1">preg_match_all($pola, $str, $matches)</strong>
            Menangkap SEMUA kemunculan pola teks di seluruh kalimat ke dalam array.
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-indigo-600 dark:text-indigo-400 block mb-1">preg_replace($pola, $ganti, $str)</strong>
            Mengganti semua teks yang cocok dengan pola RegEx secara serentak.
          </div>
        </div>
      </div>
    `,
    code: `<?php
$artikel = "Hubungi kami di halo@devgrow.id atau support@devgrow.id untuk informasi.";

// 1. Ekstraksi semua alamat email menggunakan preg_match_all
$polaEmail = "/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}/";
preg_match_all($polaEmail, $artikel, $hasilEmail);

// 2. Sensor nomor HP atau digit angka dengan preg_replace
$pesanKlien = "Nomor rekening rahasia saya adalah 5544332211.";
$sensor = preg_replace("/[0-9]/", "*", $pesanKlien);

echo "<h3>Hasil Ekstraksi & Sensor RegEx:</h3>";
echo "<p><strong>Email yang Ditemukan:</strong> " . implode(", ", $hasilEmail[0]) . "</p>";
echo "<p><strong>Pesan Tersensor:</strong> $sensor</p>";
?>`,
    codeExplanation: [
      'preg_match_all() mengumpulkan semua pola yang cocok ke dalam variabel array $hasilEmail.',
      'preg_replace("/[0-9]/", "*", $str) mengganti setiap digit angka 0-9 menjadi karakter bintang (*).'
    ],
    challenge: {
      instruction: 'Gunakan preg_replace("/[0-9]/", "#", $str) untuk menyensor semua angka pada string $str = "Pin: 1234";.',
      starterCode: `<?php
$str = "Pin: 1234";
$sensor = preg_replace("/[0-9]/", "#", $str);
echo $sensor;
?>`,
      hint: 'Format: preg_replace("/[0-9]/", "#", $str);'
    },
    quiz: {
      question: 'Fungsi PHP apa yang digunakan untuk mengganti substring berdasarkan pola ekspresi reguler (RegEx)?',
      options: [
        'preg_replace()',
        'str_replace()',
        'regex_change()',
        'preg_match()'
      ],
      correctIndex: 0,
      explanation: 'preg_replace() mencari pola ekspresi reguler dan menggantinya dengan teks string baru.'
    }
  }
];

module.exports = phpPart3FunctionsArrays;
