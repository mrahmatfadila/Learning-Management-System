// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (ARRAY FUNCTIONS BAGIAN 2)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart13RefArrays2 = [
  // 28. ARRAY_PAD()
  {
    id: 'php-ref-array-pad',
    title: 'PHP array_pad()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 28,
    overview: 'Fungsi array_pad(): melengkapi atau memperpanjang ukuran array hingga mencapai panjang tertentu dengan nilai pengisi (padding value).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ARRAY PAD</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 28 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📐 Melengkapi Panjang Array (array_pad)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_pad($array, $size, $value)</code> memastikan array memiliki panjang minimal sebanyak <code>$size</code>. Jika ukuran bernilai positif, elemen pengisi ditambahkan di belakang. Jika negatif, elemen pengisi ditambahkan di depan.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$dataAwal = ["merah", "hijau"];

// 1. Tambah padding di belakang hingga 5 elemen
$padBelakang = array_pad($dataAwal, 5, "biru");

// 2. Tambah padding di depan hingga 5 elemen (ukuran negatif)
$padDepan = array_pad($dataAwal, -5, "kuning");

echo "<h3>Hasil Penggunaan array_pad():</h3>";
echo "<p><strong>Padding Belakang (+5):</strong> " . implode(", ", $padBelakang) . "</p>";
echo "<p><strong>Padding Depan (-5):</strong> " . implode(", ", $padDepan) . "</p>";
?>`,
    codeExplanation: [
      'array_pad($arr, 5, "biru") menambahkan 3 elemen "biru" di akhir array.',
      'array_pad($arr, -5, "kuning") menambahkan 3 elemen "kuning" di awal array.'
    ],
    challenge: {
      instruction: 'Lengkapi array [1, 2] menjadi 4 elemen dengan nilai 0 menggunakan array_pad([1, 2], 4, 0).',
      starterCode: `<?php
$res = array_pad([1, 2], 4, 0);
echo implode(", ", $res);
?>`,
      hint: 'Panggil array_pad([1, 2], 4, 0).'
    },
    quiz: {
      question: 'Bagaimana cara menambahkan elemen padding di posisi awal (depan) array pada fungsi array_pad()?',
      options: [
        'Menggunakan angka ukuran bernilai negatif pada parameter kedua (misal: -5)',
        'Menambahkan parameter "prepend"',
        'Menggunakan fungsi array_pad_front()',
        'Tidak bisa dilakukan'
      ],
      correctIndex: 0,
      explanation: 'Nilai negatif pada parameter $size menginstruksikan array_pad untuk menyisipkan elemen di awal (kiri) array.'
    }
  },

  // 29. ARRAY_POP()
  {
    id: 'php-ref-array-pop',
    title: 'PHP array_pop()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 29,
    overview: 'Fungsi array_pop(): menghapus dan mengambil elemen TERAKHIR dari array (operasi Stack LIFO - Last In First Out).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ARRAY POP</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 29 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📤 Mengambil Elemen Terakhir (array_pop)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_pop(&$array)</code> memotong dan mengembalikan nilai dari elemen paling ujung belakang array, serta memperpendek panjang array sebanyak 1 elemen.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$tumpukan = ["Materi 1", "Materi 2", "Materi 3", "Materi 4"];

// Ambil elemen terakhir
$terakhir = array_pop($tumpukan);

echo "<h3>Hasil Penggunaan array_pop():</h3>";
echo "<p>Elemen yang diambil: <strong style='color: red;'>$terakhir</strong></p>";
echo "<p>Sisa tumpukan array: <strong>" . implode(", ", $tumpukan) . "</strong></p>";
?>`,
    codeExplanation: [
      'array_pop() memodifikasi array asli secara langsung (Pass by reference).',
      'Nilai "Materi 4" dikeluarkan dari array dan ditampung ke variabel $terakhir.'
    ],
    challenge: {
      instruction: 'Keluarkan elemen terakhir dari array ["A", "B", "C"] dengan array_pop().',
      starterCode: `<?php
$huruf = ["A", "B", "C"];
$ambil = array_pop($huruf);
echo "Diambil: $ambil | Sisa: " . implode(", ", $huruf);
?>`,
      hint: 'Panggil array_pop($huruf).'
    },
    quiz: {
      question: 'Struktur data apa yang perilakunya diimplementasikan oleh array_pop() bersama array_push()?',
      options: [
        'Stack (LIFO - Last In First Out)',
        'Queue (FIFO)',
        'Binary Tree',
        'Linked List'
      ],
      correctIndex: 0,
      explanation: 'array_push() dan array_pop() membentuk operasi struktur data Stack (Tumpukan LIFO).'
    }
  },

  // 30. ARRAY_PRODUCT()
  {
    id: 'php-ref-array-product',
    title: 'PHP array_product()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 30,
    overview: 'Fungsi array_product(): mengalikan seluruh elemen angka di dalam array dan mengembalikan hasil kali perkalian totalnya.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ARRAY PRODUCT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 30 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">✖️ Mengalikan Seluruh Angka (array_product)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_product($array)</code> menghitung perkalian kumulatif dari seluruh nilai numerik di dalam array (misal: <code>2 * 3 * 4 = 24</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$dimensiKotak = [5, 4, 3]; // Panjang, Lebar, Tinggi

// Hitung volume kotak (p * l * t)
$volume = array_product($dimensiKotak);

echo "<h3>Hasil Kalkulasi array_product():</h3>";
echo "<p>Dimensi: 5 x 4 x 3</p>";
echo "<p>Total Volume: <strong style='color: #4f46e5; font-size: 16px;'>$volume cm³</strong></p>";
?>`,
    codeExplanation: [
      'array_product($dimensiKotak) mengalikan 5 * 4 * 3 = 60.',
      'Jika array kosong, array_product() mengembalikan angka 1.'
    ],
    challenge: {
      instruction: 'Hitung hasil kali [2, 5, 10] dengan array_product().',
      starterCode: `<?php
$angka = [2, 5, 10];
echo "Hasil kali: " . array_product($angka);
?>`,
      hint: 'Panggil array_product($angka).'
    },
    quiz: {
      question: 'Berapakah nilai yang dikembalikan oleh array_product([2, 3, 5])?',
      options: [
        '30 (karena 2 * 3 * 5 = 30)',
        '10',
        '15',
        '25'
      ],
      correctIndex: 0,
      explanation: '2 dikali 3 adalah 6, lalu 6 dikali 5 menghasilkan 30.'
    }
  },

  // 31. ARRAY_PUSH()
  {
    id: 'php-ref-array-push',
    title: 'PHP array_push()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 31,
    overview: 'Fungsi array_push(): menambahkan satu atau lebih elemen baru ke ujung paling belakang array, dan perbandingannya dengan $array[] = $value.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ARRAY PUSH</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 31 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📥 Menambah Elemen ke Belakang (array_push)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_push(&$array, ...$values)</code> menyisipkan satu atau beberapa nilai sekaligus ke bagian akhir array dan mengembalikan total panjang elemen array yang baru.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$keranjang = ["Apel", "Jeruk"];

// 1. Tambah banyak elemen sekaligus dengan array_push
$totalItem = array_push($keranjang, "Pisang", "Mangga", "Alpukat");

// 2. Tambah 1 elemen dengan sintaks singkat $array[]
$keranjang[] = "Anggur";

echo "<h3>Hasil Penambahan array_push():</h3>";
echo "<p>Total isi keranjang saat ini: <strong>" . count($keranjang) . " buah</strong></p>";
echo "<p>Daftar buah: <strong>" . implode(", ", $keranjang) . "</strong></p>";
?>`,
    codeExplanation: [
      'array_push() mampu menerima banyak argumen sekaligus ($val1, $val2, $val3).',
      'Untuk menambahkan 1 elemen tunggal, $array[] = $val lebih direkomendasikan karena tidak memiliki overhead pemanggilan fungsi.'
    ],
    challenge: {
      instruction: 'Tambahkan "PHP" dan "MySQL" ke dalam array $skills = [] menggunakan array_push($skills, "PHP", "MySQL").',
      starterCode: `<?php
$skills = [];
array_push($skills, "PHP", "MySQL");
echo implode(", ", $skills);
?>`,
      hint: 'Gunakan array_push($skills, "PHP", "MySQL").'
    },
    quiz: {
      question: 'Apa nilai kembalian dari fungsi array_push(&$array, $val)?',
      options: [
        'Total jumlah elemen baru di dalam array setelah ditambahkan',
        'Nilai elemen yang baru ditambahkan',
        'Array baru yang terduplikasi',
        'Boolean true'
      ],
      correctIndex: 0,
      explanation: 'array_push mengembalikan bilangan bulat integer yang mewakili total panjang elemen array yang baru.'
    }
  },

  // 32. ARRAY_RAND()
  {
    id: 'php-ref-array-rand',
    title: 'PHP array_rand()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 32,
    overview: 'Fungsi array_rand(): memilih satu atau lebih KUNCI (keys) acak dari array, sangat berguna untuk sistem undian doorprize atau pembuat kuis acak.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ARRAY RAND</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 32 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎲 Mengambil Kunci Acak (array_rand)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_rand($array, $num)</code> memilih <code>$num</code> nama kunci secara acak. Ingat: fungsi ini <strong>mengembalikan KUNCI (Key/Index)</strong>, bukan nilai elemennya langsung!
          </p>
        </div>
      </div>
    `,
    code: `<?php
$pesertaDoorprize = [
    "USR-01" => "Muhammad Rahmat Fadila",
    "USR-02" => "Siti Nurhaliza",
    "USR-03" => "Budi Santoso",
    "USR-04" => "Dewi Lestari",
    "USR-05" => "Eko Prasetyo"
];

// Pilih 1 kunci pemenang secara acak
$kunciPemenang = array_rand($pesertaDoorprize);
$namaPemenang = $pesertaDoorprize[$kunciPemenang];

echo "<h3>🎉 Pengundian Doorprize Acak (array_rand):</h3>";
echo "<p>Kunci Terpilih: <code>$kunciPemenang</code></p>";
echo "<p>Selamat kepada Pemenang: <strong style='color: #059669; font-size: 16px;'>$namaPemenang</strong></p>";
?>`,
    codeExplanation: [
      'array_rand mengembalikan Kunci acak (misal: "USR-03").',
      'Untuk mendapatkan namanya, gunakan $pesertaDoorprize[$kunciPemenang].'
    ],
    challenge: {
      instruction: 'Ambil kunci acak dari $arr = ["A", "B", "C"] dengan array_rand($arr).',
      starterCode: `<?php
$arr = ["A", "B", "C"];
$key = array_rand($arr);
echo "Nilai terpilih: " . $arr[$key];
?>`,
      hint: 'Panggil array_rand($arr).'
    },
    quiz: {
      question: 'Apa yang dikembalikan oleh fungsi array_rand($array) saat memilih elemen acak?',
      options: [
        'Nama Kunci (Key / Index) dari elemen yang terpilih',
        'Nilai (Value) elemennya langsung',
        'Array yang diacak',
        'Angka persentase'
      ],
      correctIndex: 0,
      explanation: 'array_rand mengembalikan Kunci (Key/Index) acak, bukan nilainya secara langsung.'
    }
  },

  // 33. ARRAY_REDUCE()
  {
    id: 'php-ref-array-reduce',
    title: 'PHP array_reduce()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 33,
    overview: 'Kuasai array_reduce(): mereduksi seluruh elemen array menjadi satu nilai akumulasi tunggal menggunakan fungsi reducer (Functional Programming).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ARRAY REDUCE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 33 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧮 Akumulasi Nilai Tunggal (array_reduce)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_reduce($array, $callback, $initial)</code> mengiterasi array dan mengumpulkan hasil kalkulasi ke dalam satu variabel penampung (<em>accumulator</em>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$keranjangBelanja = [
    ["barang" => "Buku PHP 8", "harga" => 150000, "qty" => 2],
    ["barang" => "Mouse Pad", "harga" => 50000, "qty" => 1],
    ["barang" => "Flashdisk 64GB", "harga" => 100000, "qty" => 3]
];

// Akumulasi total belanja (subtotal = harga * qty) dimulai dari $initial = 0
$totalBayar = array_reduce($keranjangBelanja, function($carry, $item) {
    return $carry + ($item['harga'] * $item['qty']);
}, 0);

echo "<h3>Hasil Akumulasi array_reduce():</h3>";
echo "<p>Total Tagihan Belanja: <strong style='color: #4f46e5; font-size: 16px;'>Rp " . number_format($totalBayar, 0, ',', '.') . "</strong></p>";
?>`,
    codeExplanation: [
      '$carry adalah nilai akumulasi yang diteruskan dari iterasi sebelumnya (dimulai dari nilai awal 0).',
      '$item adalah elemen array saat ini yang sedang diproses.'
    ],
    challenge: {
      instruction: 'Jumlahkan angka [10, 20, 30] dengan array_reduce(fn($carry, $n) => $carry + $n, [10, 20, 30], 0).',
      starterCode: `<?php
$sum = array_reduce([10, 20, 30], fn($carry, $n) => $carry + $n, 0);
echo "Total sum: $sum";
?>`,
      hint: 'Gunakan array_reduce dengan callback akumulator.'
    },
    quiz: {
      question: 'Apa fungsi dari parameter $carry pada callback fungsi array_reduce($arr, function($carry, $item){...})?',
      options: [
        'Menyimpan nilai akumulasi sementara dari iterasi sebelumnya',
        'Menghitung jumlah array',
        'Menyimpan kunci array',
        'Menghapus item saat ini'
      ],
      correctIndex: 0,
      explanation: '$carry (accumulator) menampung hasil perhitungan yang terus diakumulasikan sepanjang iterasi array.'
    }
  },

  // 34. ARRAY_REPLACE()
  {
    id: 'php-ref-array-replace',
    title: 'PHP array_replace()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 34,
    overview: 'Fungsi array_replace(): menggantikan nilai dari array pertama dengan nilai dari array-array berikutnya berdasarkan kesamaan kunci (keys).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ARRAY REPLACE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 34 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔄 Mengganti Nilai Berdasarkan Kunci</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_replace($array1, $array2, ...)</code> menimpa nilai elemen pada <code>$array1</code> jika kunci yang sama ditemukan pada <code>$array2</code>. Kunci numerik <strong>TIDAK di-reindex</strong> (berbeda dengan <code>array_merge</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$dataAwal = [0 => "Apel", 1 => "Pisang", 2 => "Jeruk"];
$dataPengganti = [1 => "Melon", 3 => "Pepaya"];

$hasil = array_replace($dataAwal, $dataPengganti);

echo "<h3>Hasil Penggantian array_replace():</h3>";
echo "<pre style='background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 8px;'>" . print_r($hasil, true) . "</pre>";
?>`,
    codeExplanation: [
      'Indeks [1] "Pisang" ditimpa menjadi "Melon".',
      'Indeks [3] "Pepaya" yang sebelumnya tidak ada, ditambahkan ke dalam array.'
    ],
    challenge: {
      instruction: 'Gantikan elemen indeks 0 pada ["merah", "hijau"] dengan [0 => "biru"] menggunakan array_replace.',
      starterCode: `<?php
$res = array_replace(["merah", "hijau"], [0 => "biru"]);
echo "Indeks 0 sekarang: " . $res[0];
?>`,
      hint: 'Panggil array_replace($arr1, $arr2).'
    },
    quiz: {
      question: 'Apa perbedaan array_replace() dibanding array_merge() saat menangani indeks numerik?',
      options: [
        'array_replace() menimpa nilai pada indeks numerik yang sama persis tanpa me-reindex nomornya',
        'array_replace() menghapus indeks numerik',
        'array_merge() selalu error',
        'Keduanya identik'
      ],
      correctIndex: 0,
      explanation: 'array_replace menimpa nilai dengan key yang sama (termasuk numeric key), sedangkan array_merge akan menambahkan nilai baru di akhir dan me-reindex key numeriknya.'
    }
  },

  // 35. ARRAY_REPLACE_RECURSIVE()
  {
    id: 'php-ref-array-replace-recursive',
    title: 'PHP array_replace_recursive()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 35,
    overview: 'Fungsi array_replace_recursive(): menggantikan nilai pada array bersarang (nested) secara mendalam (rekursif) tanpa merusak struktur sub-array lainnya.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">REPLACE RECURSIVE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 35 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌳 Mengganti Konfigurasi Bersarang</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_replace_recursive()</code> menembus seluruh tingkatan pohon array multidimensi dan hanya menimpa daun nilai yang didefinisikan pada array penimpa. Sangat ideal untuk menimpa file konfigurasi nested di framework.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$configBawaan = [
    "database" => [
        "host" => "localhost",
        "port" => 5432,
        "username" => "postgres",
        "options" => ["timeout" => 30, "ssl" => false]
    ],
    "app" => ["env" => "production"]
];

$configKustom = [
    "database" => [
        "host" => "192.168.1.100", // Hanya ubah host
        "options" => ["ssl" => true] // Hanya ubah ssl
    ]
];

$finalConfig = array_replace_recursive($configBawaan, $configKustom);

echo "<h3>Hasil Penggantian Rekursif:</h3>";
echo "<pre style='background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 8px;'>" . print_r($finalConfig, true) . "</pre>";
?>`,
    codeExplanation: [
      'Port 5432, username postgres, dan timeout 30 tetap aman dan tidak hilang.',
      'Hanya host dan ssl yang diperbarui secara presisi.'
    ],
    challenge: {
      instruction: 'Pelajari mekanisme penimpaan konfigurasi nested dengan array_replace_recursive.',
      starterCode: `<?php
echo "array_replace_recursive adalah standar industri untuk merger konfigurasi multi-level.";
?>`,
      hint: 'Klik RUN untuk mereview replace recursive.'
    },
    quiz: {
      question: 'Kapan fungsi array_replace_recursive() paling ideal digunakan?',
      options: [
        'Saat menggabungkan pengaturan konfigurasi aplikasi bersarang (Nested Configuration Files)',
        'Saat mengurutkan data string',
        'Saat menghapus tabel database',
        'Saat membagi angka'
      ],
      correctIndex: 0,
      explanation: 'Sangat ideal untuk menimpa nilai default konfigurasi aplikasi bertingkat tanpa menghilangkan cabang pengaturan lainnya.'
    }
  },

  // 36. ARRAY_REVERSE()
  {
    id: 'php-ref-array-reverse',
    title: 'PHP array_reverse()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 36,
    overview: 'Fungsi array_reverse(): membalik urutan elemen array dari belakang ke depan (elemen terakhir menjadi elemen pertama) dan opsi preserve_keys.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ARRAY REVERSE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 36 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔄 Membalik Urutan Array (array_reverse)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_reverse($array, $preserve_keys)</code> mengembalikan array baru dengan urutan elemen yang dibalik dari belakang ke depan. Jika <code>$preserve_keys = true</code>, nomor indeks numerik aslinya akan tetap dipertahankan.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$alurBelajar = ["1. HTML Dasar", "2. CSS Responsive", "3. JavaScript", "4. PHP & MySQL"];

// Balikkan urutan
$terbalik = array_reverse($alurBelajar);

echo "<h3>Hasil Pembalikan array_reverse():</h3>";
echo "<ol>";
foreach ($terbalik as $item) {
    echo "<li>$item</li>";
}
echo "</ol>";
?>`,
    codeExplanation: [
      'Item "4. PHP & MySQL" kini berada di posisi paling depan.',
      'Sangat sering dipakai untuk menampilkan log aktivitas terbaru (Latest First).'
    ],
    challenge: {
      instruction: 'Balikkan array [1, 2, 3] dengan array_reverse([1, 2, 3]).',
      starterCode: `<?php
$rev = array_reverse([1, 2, 3]);
echo implode(", ", $rev);
?>`,
      hint: 'Panggil array_reverse([1, 2, 3]).'
    },
    quiz: {
      question: 'Apa fungsi dari parameter kedua ($preserve_keys = true) pada array_reverse()?',
      options: [
        'Mempertahankan nomor indeks numerik asli elemen alih-alih me-reset dari 0',
        'Mengubah nilai menjadi string',
        'Mengenkripsi array',
        'Menghapus spasi'
      ],
      correctIndex: 0,
      explanation: 'Jika preserve_keys bernilai TRUE, array_reverse mempertahankan nomor index asli dari setiap elemen.'
    }
  },

  // 37. ARRAY_SEARCH()
  {
    id: 'php-ref-array-search',
    title: 'PHP array_search()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 37,
    overview: 'Fungsi array_search(): mencari sebuah nilai di dalam array dan mengembalikan KUNCI (key/index) dari elemen pertama yang cocok (atau false jika tidak ditemukan).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ARRAY SEARCH</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 37 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Mencari Posisi Nilai (array_search)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_search($needle, $haystack, $strict)</code> mencari keberadaan <code>$needle</code>. Jika ditemukan, fungsi mengembalikan nama kunci/indeksnya. Jika tidak ada, mengembalikan boolean <code>false</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$daftarBahasa = ["html" => "HTML5", "css" => "CSS3", "js" => "JavaScript", "php" => "PHP 8"];

// Cari kunci untuk nilai "PHP 8"
$kunciDitemukan = array_search("PHP 8", $daftarBahasa);

echo "<h3>Hasil Pencarian array_search():</h3>";
if ($kunciDitemukan !== false) {
    echo "<p>Nilai 'PHP 8' ditemukan pada kunci: <strong style='color: green;'>$kunciDitemukan</strong></p>";
} else {
    echo "<p style='color: red;'>Tidak ditemukan.</p>";
}
?>`,
    codeExplanation: [
      'Gunakan perbandingan ketat !== false karena jika kunci ditemukan di indeks 0, pengecekan if ($key) tanpa !== false akan dianggap false (falsy).'
    ],
    challenge: {
      instruction: 'Cari indeks nilai "Jeruk" pada $buah = ["Apel", "Jeruk", "Mangga"] dengan array_search("Jeruk", $buah).',
      starterCode: `<?php
$buah = ["Apel", "Jeruk", "Mangga"];
$idx = array_search("Jeruk", $buah);
echo "Ditemukan di indeks: $idx";
?>`,
      hint: 'Panggil array_search("Jeruk", $buah).'
    },
    quiz: {
      question: 'Mengapa hasil pemanggilan array_search() wajib diperiksa menggunakan operator identik !== false?',
      options: [
        'Karena jika elemen ditemukan pada indeks 0, evaluasi if ($key) bernilai falsy sehingga disalahartikan sebagai tidak ditemukan',
        'Karena array_search selalu melempar error',
        'Karena PHP tidak mendukung boolean',
        'Agar fungsi lebih cepat'
      ],
      correctIndex: 0,
      explanation: 'Indeks 0 bernilai falsy di PHP. Pengecekan !== false memastikan indeks 0 tetap diakui sebagai hasil pencarian yang sukses.'
    }
  },

  // 38. ARRAY_SHIFT()
  {
    id: 'php-ref-array-shift',
    title: 'PHP array_shift()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 38,
    overview: 'Fungsi array_shift(): menghapus dan mengambil elemen PERTAMA dari array dan menggeser seluruh nomor indeks ke bawah (Operasi Antrean Queue FIFO).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ARRAY SHIFT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 38 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🚶 Mengambil Elemen Pertama (array_shift)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_shift(&$array)</code> mengeluarkan elemen paling depan dari array. Sangat ideal untuk sistem antrean tiket (<em>Queue FIFO - First In First Out</em>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$antreanBank = ["Nomor A-01 (Fadila)", "Nomor A-02 (Budi)", "Nomor A-03 (Siti)"];

// Panggil dan layani antrean pertama
$dipanggil = array_shift($antreanBank);

echo "<h3>Sistem Antrean Bank (array_shift):</h3>";
echo "<p>Sekarang Dilayani di Teller: <strong style='color: #059669;'>$dipanggil</strong></p>";
echo "<p>Sisa Antrean Berikutnya: <strong>" . implode(" -> ", $antreanBank) . "</strong></p>";
?>`,
    codeExplanation: [
      'array_shift() mengeluarkan elemen pertama ("Nomor A-01") dan otomatis menggeser indeks "Nomor A-02" menjadi indeks [0].'
    ],
    challenge: {
      instruction: 'Keluarkan elemen pertama dari $antre = [1, 2, 3] dengan array_shift().',
      starterCode: `<?php
$antre = [1, 2, 3];
$first = array_shift($antre);
echo "Pertama: $first | Sisa: " . implode(", ", $antre);
?>`,
      hint: 'Panggil array_shift($antre).'
    },
    quiz: {
      question: 'Struktur data apa yang direpresentasikan saat array_shift() dikombinasikan dengan array_push()?',
      options: [
        'Queue / Antrean (FIFO - First In First Out)',
        'Stack (LIFO)',
        'Graph',
        'Associative Map'
      ],
      correctIndex: 0,
      explanation: 'array_push (masuk belakang) dan array_shift (keluar depan) membentuk sistem antrean Queue (FIFO).'
    }
  },

  // 39. ARRAY_SLICE()
  {
    id: 'php-ref-array-slice',
    title: 'PHP array_slice()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 39,
    overview: 'Kuasai array_slice(): memotong dan mengambil sebagian irisan elemen array berdasarkan offset dan length tanpa mengubah array aslinya (Paginasi Array In-Memory).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ARRAY SLICE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 39 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🍰 Mengiris Sebagian Array (array_slice)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_slice($array, $offset, $length, $preserve_keys)</code> mengekstrak potongan array mulai dari indeks <code>$offset</code> sebanyak <code>$length</code> elemen.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$semuaData = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8"];

// Paginasi In-Memory: Halaman 2 (Limit 3 item per halaman)
$halaman = 2;
$perPage = 3;
$offset = ($halaman - 1) * $perPage; // Offset = 3

$itemHalaman2 = array_slice($semuaData, $offset, $perPage);

echo "<h3>Hasil Paginasi Halaman 2 (array_slice):</h3>";
echo "<ul>";
foreach ($itemHalaman2 as $item) {
    echo "<li><strong>$item</strong></li>";
}
echo "</ul>";
?>`,
    codeExplanation: [
      'array_slice mengambil 3 elemen dimulai dari indeks ke-3 (Item 4, Item 5, Item 6).',
      'Array asli $semuaData tetap utuh dan tidak terhapus.'
    ],
    challenge: {
      instruction: 'Ambil 2 elemen pertama dari $arr = ["A", "B", "C", "D"] dengan array_slice($arr, 0, 2).',
      starterCode: `<?php
$arr = ["A", "B", "C", "D"];
$slice = array_slice($arr, 0, 2);
echo implode(", ", $slice);
?>`,
      hint: 'Panggil array_slice($arr, 0, 2).'
    },
    quiz: {
      question: 'Apakah fungsi array_slice() memodifikasi array aslinya?',
      options: [
        'Tidak, array_slice() mengembalikan array baru dan membiarkan array asli tetap utuh',
        'Ya, elemen yang diiris akan terhapus dari array asli',
        'Hanya menghapus elemen terakhir',
        'Tergantung versi PHP'
      ],
      correctIndex: 0,
      explanation: 'array_slice bersifat non-destructive dan tidak mengubah array aslinya (berbeda dengan array_splice).'
    }
  },

  // 40. ARRAY_SPLICE()
  {
    id: 'php-ref-array-splice',
    title: 'PHP array_splice()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 40,
    overview: 'Kuasai array_splice(): membuang sebagian elemen array asli dan menyisipkan elemen-elemen baru sebagai penggantinya (Destructive Splicing).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ARRAY SPLICE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 40 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">✂️ Memotong & Menyisipkan Elemen (array_splice)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_splice(&$array, $offset, $length, $replacement)</code> menghapus <code>$length</code> elemen dari <code>$offset</code> pada array asli dan menggantikannya dengan <code>$replacement</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$warna = ["merah", "hijau", "biru", "kuning"];

// Hapus 2 elemen mulai dari indeks 1 ("hijau", "biru") dan gantikan dengan "ungu" & "oranye"
$elemenTerhapus = array_splice($warna, 1, 2, ["ungu", "oranye"]);

echo "<h3>Hasil Penggunaan array_splice():</h3>";
echo "<p>Elemen yang dihapus: <strong>" . implode(", ", $elemenTerhapus) . "</strong></p>";
echo "<p>Isi Array Baru setelah Modifikasi: <strong>" . implode(", ", $warna) . "</strong></p>";
?>`,
    codeExplanation: [
      'array_splice mengubah isi $warna menjadi ["merah", "ungu", "oranye", "kuning"].',
      'Elemen yang terbuang dikembalikan sebagai array oleh fungsi.'
    ],
    challenge: {
      instruction: 'Sisipkan elemen "tengah" pada indeks 1 tanpa menghapus elemen lain (length = 0) dengan array_splice($a, 1, 0, "tengah").',
      starterCode: `<?php
$a = ["awal", "akhir"];
array_splice($a, 1, 0, "tengah");
echo implode(" -> ", $a);
?>`,
      hint: 'Gunakan parameter length = 0 untuk menyisipkan tanpa menghapus.'
    },
    quiz: {
      question: 'Bagaimana cara menyisipkan elemen baru di tengah-tengah array tanpa menghapus elemen yang ada menggunakan array_splice()?',
      options: [
        'Mengatur parameter $length bernilai 0',
        'Mengatur parameter $offset bernilai 0',
        'Menggunakan array_insert()',
        'Tidak bisa dilakukan'
      ],
      correctIndex: 0,
      explanation: 'Jika parameter $length = 0, array_splice akan menyisipkan elemen pengganti tepat di posisi offset tanpa menghapus elemen apapun.'
    }
  },

  // 41. ARRAY_SUM()
  {
    id: 'php-ref-array-sum',
    title: 'PHP array_sum()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 41,
    overview: 'Fungsi array_sum(): menjumlahkan seluruh nilai angka (integer & float) di dalam array.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ARRAY SUM</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 41 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">➕ Menjumlahkan Seluruh Angka (array_sum)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_sum($array)</code> menghitung total penjumlahan seluruh angka di dalam array (baik bilangan bulat integer maupun desimal float).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$poinTugas = [85, 90, 78, 92, 88];

$totalPoin = array_sum($poinTugas);
$rataRata = $totalPoin / count($poinTugas);

echo "<h3>Hasil Perhitungan array_sum():</h3>";
echo "<p>Total Poin Siswa: <strong>$totalPoin</strong></p>";
echo "<p>Nilai Rata-rata: <strong style='color: #059669;'>$rataRata</strong></p>";
?>`,
    codeExplanation: [
      'array_sum($poinTugas) menjumlahkan 85 + 90 + 78 + 92 + 88 = 433.',
      'Sangat cepat dan optimal dibanding loop for penjumlahan manual.'
    ],
    challenge: {
      instruction: 'Hitung jumlah dari [10, 20, 30, 40] dengan array_sum().',
      starterCode: `<?php
$angka = [10, 20, 30, 40];
echo "Total: " . array_sum($angka);
?>`,
      hint: 'Panggil array_sum($angka).'
    },
    quiz: {
      question: 'Berapakah hasil dari array_sum([10.5, 20.5, 9])?',
      options: [
        '40',
        '39',
        '40.5',
        '30'
      ],
      correctIndex: 0,
      explanation: '10.5 + 20.5 = 31, ditambah 9 menghasilkan 40.'
    }
  },

  // 42. ARRAY_UDIFF()
  {
    id: 'php-ref-array-udiff',
    title: 'PHP array_udiff()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 42,
    overview: 'Fungsi array_udiff(): membandingkan data array berdasarkan NILAI menggunakan fungsi callback pembanding kustom buatan pengguna.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ARRAY UDIFF</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 42 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Selisih Nilai dengan Callback (array_udiff)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_udiff($arr1, $arr2, "callback")</code> mencari selisih nilai antar-array dengan membiarkan fungsi callback menentukan apakah dua objek/nilai setara atau tidak.
          </p>
        </div>
      </div>
    `,
    code: `<?php
class Mahasiswa {
    public function __construct(public int $id, public string $nama) {}
}

$kelasA = [new Mahasiswa(1, "Fadila"), new Mahasiswa(2, "Budi"), new Mahasiswa(3, "Siti")];
$kelasB = [new Mahasiswa(2, "Budi")];

// Bandingkan objek berdasarkan properti ID
$selisih = array_udiff($kelasA, $kelasB, function($a, $b) {
    return $a->id <=> $b->id;
});

echo "<h3>Hasil array_udiff (Selisih Objek by ID):</h3>";
echo "<ul>";
foreach ($selisih as $mhs) {
    echo "<li>ID #{$mhs->id}: <strong>{$mhs->nama}</strong></li>";
}
echo "</ul>";
?>`,
    codeExplanation: [
      'Operator spaceship $a->id <=> $b->id membandingkan properti ID objek secara rapi.',
      'Hanya mahasiswa ID 1 (Fadila) dan ID 3 (Siti) yang dikembalikan.'
    ],
    challenge: {
      instruction: 'Pelajari pembandingan objek array dengan operator spaceship pada callback array_udiff.',
      starterCode: `<?php
echo "array_udiff memungkinkan pencarian selisih struktur data objek yang kompleks.";
?>`,
      hint: 'Klik RUN untuk mereview array_udiff.'
    },
    quiz: {
      question: 'Bagian manakah dari data array yang dievaluasi oleh fungsi callback pada array_udiff()?',
      options: [
        'Nilai elemennya (Data Values)',
        'Nama kuncinya saja (Keys)',
        'Panjang memorinya',
        'Tipe datanya saja'
      ],
      correctIndex: 0,
      explanation: 'array_udiff menggunakan callback untuk membandingkan nilainya (values).'
    }
  },

  // 43. ARRAY_UDIFF_ASSOC()
  {
    id: 'php-ref-array-udiff-assoc',
    title: 'PHP array_udiff_assoc()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 43,
    overview: 'Fungsi array_udiff_assoc(): membandingkan array berdasarkan KUNCI (pemeriksaan internal standar) dan NILAI (menggunakan fungsi callback kustom).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">UDIFF ASSOC</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 43 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔑 Selisih Kunci & Nilai (Value by Callback)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_udiff_assoc($arr1, $arr2, "value_compare_func")</code> membandingkan nama kunci menggunakan algoritma bawaan PHP, namun mengevaluasi kesamaan nilainya menggunakan fungsi callback buatan Anda.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$a1 = ["a" => "PHP8", "b" => "MYSQL", "c" => "JS"];
$a2 = ["a" => "php8", "b" => "ORACLE"];

// Bandingkan nilai secara case-insensitive dengan strcasecmp
$diff = array_udiff_assoc($a1, $a2, "strcasecmp");

echo "<h3>Hasil array_udiff_assoc():</h3>";
echo "<pre style='background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 8px;'>" . print_r($diff, true) . "</pre>";
?>`,
    codeExplanation: [
      'Kunci "a" dianggap cocok karena "PHP8" setara dengan "php8" menurut strcasecmp.',
      'Kunci "b" ("MYSQL" vs "ORACLE") dan "c" ("JS") dikembalikan sebagai selisih.'
    ],
    challenge: {
      instruction: 'Uji fungsi array_udiff_assoc dengan callback strcasecmp.',
      starterCode: `<?php
$res = array_udiff_assoc(["a" => "A"], ["a" => "a"], "strcasecmp");
echo "Jumlah selisih: " . count($res); // 0 karena 'A' sama dengan 'a'
?>`,
      hint: 'Klik RUN untuk mencoba udiff_assoc.'
    },
    quiz: {
      question: 'Pada array_udiff_assoc(), bagian apa yang dibandingkan menggunakan fungsi callback kustom pengguna?',
      options: [
        'Nilainya (Values)',
        'Kuncinya (Keys)',
        'Kunci dan Nilai sekaligus',
        'Ukuran byte array'
      ],
      correctIndex: 0,
      explanation: 'array_udiff_assoc menggunakan callback untuk membandingkan values, sedangkan keys dibandingkan menggunakan fungsi internal bawaan.'
    }
  },

  // 44. ARRAY_UDIFF_UASSOC()
  {
    id: 'php-ref-array-udiff-uassoc',
    title: 'PHP array_udiff_uassoc()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 44,
    overview: 'Fungsi array_udiff_uassoc(): membandingkan KUNCI dan NILAI sekaligus di mana keduanya menggunakan dua fungsi callback kustom yang terpisah.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">UDIFF UASSOC</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 44 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛠️ Selisih dengan 2 Callback Kustom</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_udiff_uassoc($arr1, $arr2, "val_compare_func", "key_compare_func")</code> memberikan kontrol penuh atas pembandingan nilai dan pembandingan nama kunci.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$a1 = ["0.1" => new stdClass, "0.5" => new stdClass];
$a2 = ["0.1" => new stdClass];

// Callback perbandingan nilai dan perbandingan kunci
$diff = array_udiff_uassoc(
    $a1, 
    $a2, 
    fn($v1, $v2) => $v1 === $v2 ? 0 : 1, // Callback Nilai
    fn($k1, $k2) => (float)$k1 <=> (float)$k2 // Callback Kunci
);

echo "<h3>Hasil array_udiff_uassoc:</h3>";
echo "<p>Total elemen selisih: <strong>" . count($diff) . "</strong></p>";
?>`,
    codeExplanation: [
      'Menerima 2 fungsi callback: parameter ke-3 untuk membandingkan Nilai, parameter ke-4 untuk membandingkan Kunci.'
    ],
    challenge: {
      instruction: 'Pelajari struktur penerimaan 2 callback pada array_udiff_uassoc.',
      starterCode: `<?php
echo "array_udiff_uassoc menerima callback nilai dan callback kunci secara terpisah.";
?>`,
      hint: 'Klik RUN untuk mereview uassoc.'
    },
    quiz: {
      question: 'Berapa jumlah fungsi callback yang diterima oleh array_udiff_uassoc($arr1, $arr2, ...)?',
      options: [
        '2 fungsi callback (satu untuk nilai dan satu untuk kunci)',
        '1 fungsi callback',
        '3 fungsi callback',
        'Tidak menerima callback'
      ],
      correctIndex: 0,
      explanation: 'array_udiff_uassoc menerima dua callback: satu untuk evaluasi value dan satu untuk evaluasi key.'
    }
  },

  // 45. ARRAY_UINTERSECT()
  {
    id: 'php-ref-array-uintersect',
    title: 'PHP array_uintersect()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 45,
    overview: 'Fungsi array_uintersect(): mencari irisan nilai (intersection) menggunakan fungsi callback pembanding kustom buatan pengguna.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ARRAY UINTERSECT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 45 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎯 Irisan Nilai dengan Callback (array_uintersect)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_uintersect($arr1, $arr2, "callback")</code> mencari nilai yang sama di semua array menggunakan fungsi evaluasi kustom (seperti membandingkan data objek).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$produk1 = [["id" => 1, "nama" => "Laptop"], ["id" => 2, "nama" => "Mouse"]];
$produk2 = [["id" => 2, "nama" => "Mouse Wireless"], ["id" => 3, "nama" => "Keyboard"]];

// Cari irisan produk berdasarkan kesamaan ID
$irisan = array_uintersect($produk1, $produk2, fn($a, $b) => $a['id'] <=> $b['id']);

echo "<h3>Hasil Irisan Produk by ID (array_uintersect):</h3>";
echo "<pre style='background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 8px;'>" . print_r($irisan, true) . "</pre>";
?>`,
    codeExplanation: [
      'Produk ID 2 ("Mouse") ditemukan di kedua array sehingga dikembalikan sebagai irisan.'
    ],
    challenge: {
      instruction: 'Uji fungsi array_uintersect untuk mencari irisan objek array.',
      starterCode: `<?php
$a = [10, 20];
$b = [20, 30];
$res = array_uintersect($a, $b, fn($x, $y) => $x <=> $y);
echo "Irisan: " . implode(", ", $res);
?>`,
      hint: 'Panggil array_uintersect dengan callback.'
    },
    quiz: {
      question: 'Apa fungsi utama dari array_uintersect()?',
      options: [
        'Mencari irisan nilai antar-array menggunakan fungsi callback pembanding kustom',
        'Menggabungkan semua elemen array',
        'Menghapus elemen duplikat',
        'Mengubah huruf string'
      ],
      correctIndex: 0,
      explanation: 'array_uintersect menghitung irisan data berdasarkan kriteria logika yang didefinisikan pada callback.'
    }
  },

  // 46. ARRAY_UINTERSECT_ASSOC()
  {
    id: 'php-ref-array-uintersect-assoc',
    title: 'PHP array_uintersect_assoc()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 46,
    overview: 'Fungsi array_uintersect_assoc(): mencari irisan kunci dan nilai, di mana kunci diperiksa secara internal dan nilainya dievaluasi dengan callback kustom.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">UINTERSECT ASSOC</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 46 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔑 Irisan Kunci & Nilai (Value by Callback)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_uintersect_assoc($arr1, $arr2, "callback")</code> memastikan nama kuncinya sama persis dan nilainya cocok berdasarkan evaluasi fungsi callback.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$a1 = ["a" => "MERAH", "b" => "HIJAU", "c" => "BIRU"];
$a2 = ["a" => "merah", "b" => "kuning"];

// Cari irisan dengan strcasecmp (case-insensitive value)
$cocok = array_uintersect_assoc($a1, $a2, "strcasecmp");

echo "<h3>Hasil array_uintersect_assoc:</h3>";
echo "<pre style='background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 8px;'>" . print_r($cocok, true) . "</pre>";
?>`,
    codeExplanation: [
      'Kunci "a" cocok di kedua array dan nilai "MERAH" setara dengan "merah" menurut strcasecmp.'
    ],
    challenge: {
      instruction: 'Uji fungsi array_uintersect_assoc dengan strcasecmp.',
      starterCode: `<?php
$res = array_uintersect_assoc(["k" => "PHP"], ["k" => "php"], "strcasecmp");
echo "Kunci cocok: " . key($res);
?>`,
      hint: 'Panggil array_uintersect_assoc.'
    },
    quiz: {
      question: 'Kapan elemen dikembalikan oleh array_uintersect_assoc()?',
      options: [
        'Ketika nama kunci sama persis dan callback mengembalikan 0 (nilai cocok)',
        'Ketika nilainya berbeda',
        'Ketika kuncinya berupa angka',
        'Kapan saja'
      ],
      correctIndex: 0,
      explanation: 'Elemen harus memiliki key yang identik dan value yang dinyatakan sama oleh fungsi callback pembanding.'
    }
  },

  // 47. ARRAY_UINTERSECT_UASSOC()
  {
    id: 'php-ref-array-uintersect-uassoc',
    title: 'PHP array_uintersect_uassoc()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 47,
    overview: 'Fungsi array_uintersect_uassoc(): mencari irisan kunci dan nilai di mana evaluasi kunci dan evaluasi nilainya menggunakan dua fungsi callback terpisah.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">UINTERSECT UASSOC</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 47 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛠️ Irisan dengan 2 Callback Terpisah</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_uintersect_uassoc($arr1, $arr2, "value_cb", "key_cb")</code> mencari irisan dengan callback khusus untuk nilai dan callback khusus untuk nama kunci.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$a1 = ["KODE_A" => "Aktif", "KODE_B" => "Nonaktif"];
$a2 = ["kode_a" => "aktif"];

$irisan = array_uintersect_uassoc(
    $a1, 
    $a2, 
    "strcasecmp", // Evaluasi Nilai Case-Insensitive
    "strcasecmp"  // Evaluasi Kunci Case-Insensitive
);

echo "<h3>Hasil array_uintersect_uassoc:</h3>";
echo "<pre style='background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 8px;'>" . print_r($irisan, true) . "</pre>";
?>`,
    codeExplanation: [
      'Kunci "KODE_A" cocok dengan "kode_a" dan nilai "Aktif" cocok dengan "aktif".'
    ],
    challenge: {
      instruction: 'Pelajari pemakaian 2 callback pada array_uintersect_uassoc.',
      starterCode: `<?php
echo "array_uintersect_uassoc membandingkan kecocokan kunci dan nilai secara independen.";
?>`,
      hint: 'Klik RUN untuk mereview uintersect_uassoc.'
    },
    quiz: {
      question: 'Apa parameter ke-3 dan ke-4 pada array_uintersect_uassoc($a, $b, $cb1, $cb2)?',
      options: [
        '$cb1 untuk membandingkan Value, $cb2 untuk membandingkan Key',
        '$cb1 untuk Key, $cb2 untuk Value',
        'Keduanya untuk Key',
        'Keduanya untuk Value'
      ],
      correctIndex: 0,
      explanation: 'Secara konvensi, callback pertama mengevaluasi value dan callback kedua mengevaluasi key.'
    }
  },

  // 48. ARRAY_UNIQUE()
  {
    id: 'php-ref-array-unique',
    title: 'PHP array_unique()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 48,
    overview: 'Kuasai array_unique(): menghapus seluruh elemen duplikat di dalam array dan mempertahankan hanya nilai-nilai unik (Deduplication).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ARRAY UNIQUE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 48 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧹 Menghapus Duplikat (array_unique)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_unique($array, $flags)</code> menyaring array dan membuang elemen yang bernilai ganda sehingga setiap data hanya muncul tepat 1 kali.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$emailPeserta = [
    "fadila@devgrow.id",
    "budi@gmail.com",
    "fadila@devgrow.id", // Duplikat
    "siti@yahoo.com",
    "budi@gmail.com"     // Duplikat
];

// Bersihkan email ganda
$emailUnik = array_unique($emailPeserta);

echo "<h3>Daftar Email Setelah Dibersihkan (array_unique):</h3>";
echo "<ul>";
foreach ($emailUnik as $email) {
    echo "<li><strong>$email</strong></li>";
}
echo "</ul>";
?>`,
    codeExplanation: [
      'array_unique membuang email kedua yang duplikat dan mempertahankan kemunculan pertama.',
      'Sangat penting saat mengirim email massal (Newsletter) agar pelanggan tidak menerima email ganda.'
    ],
    challenge: {
      instruction: 'Bersihkan angka duplikat pada $angka = [1, 2, 2, 3, 3, 3, 4] dengan array_unique($angka).',
      starterCode: `<?php
$angka = [1, 2, 2, 3, 3, 3, 4];
$unik = array_unique($angka);
echo implode(", ", $unik);
?>`,
      hint: 'Panggil array_unique($angka).'
    },
    quiz: {
      question: 'Apa fungsi dari array_unique() pada array PHP?',
      options: [
        'Menghapus seluruh nilai elemen duplikat dan hanya menyisakan nilai unik',
        'Mengurutkan array dari Z-A',
        'Mengacak posisi array',
        'Menghitung jumlah array'
      ],
      correctIndex: 0,
      explanation: 'array_unique() menghilangkan data kembar/duplikat sehingga setiap nilai hanya tersisa satu.'
    }
  },

  // 49. ARRAY_UNSHIFT()
  {
    id: 'php-ref-array-unshift',
    title: 'PHP array_unshift()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 49,
    overview: 'Fungsi array_unshift(): menyisipkan satu atau beberapa elemen baru tepat di POSISI PALING AWAL (depan) array dan menggeser indeks numerik ke atas.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ARRAY UNSHIFT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 49 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📌 Menyisipkan di Posisi Awal (array_unshift)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_unshift(&$array, ...$values)</code> menambahkan satu atau beberapa elemen baru ke bagian depan (kepala) array dan mengembalikan total panjang array yang baru.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$opsiKategori = ["Backend", "Frontend", "Mobile"];

// Sisipkan opsi default di posisi paling awal
array_unshift($opsiKategori, "-- Pilih Semua Kategori --");

echo "<h3>Hasil Penggunaan array_unshift():</h3>";
echo "<select style='padding: 8px; border-radius: 6px; border: 1px solid #cbd5e1;'>";
foreach ($opsiKategori as $kat) {
    echo "<option>$kat</option>";
}
echo "</select>";
?>`,
    codeExplanation: [
      '"-- Pilih Semua Kategori --" otomatis menjadi elemen indeks [0].',
      'Elemen "Backend" yang semula di indeks [0] digeser ke indeks [1].'
    ],
    challenge: {
      instruction: 'Sisipkan "A" di awal array ["B", "C"] dengan array_unshift($huruf, "A").',
      starterCode: `<?php
$huruf = ["B", "C"];
array_unshift($huruf, "A");
echo implode(", ", $huruf);
?>`,
      hint: 'Panggil array_unshift($huruf, "A").'
    },
    quiz: {
      question: 'Apa perbedaan antara array_push() dan array_unshift()?',
      options: [
        'array_push() menambah di posisi paling belakang, sedangkan array_unshift() menambah di posisi paling depan',
        'array_unshift() hanya untuk angka',
        'array_push() menghapus elemen',
        'Keduanya identik'
      ],
      correctIndex: 0,
      explanation: 'array_push menambahkan item di akhir (tail), sedangkan array_unshift menyisipkan item di awal (head).'
    }
  },

  // 50. ARRAY_VALUES()
  {
    id: 'php-ref-array-values',
    title: 'PHP array_values()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 50,
    overview: 'Fungsi array_values(): mengambil semua NILAI (values) dari array dan me-reset kunci numerik menjadi berurutan kembali dari 0, 1, 2, ...',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ARRAY VALUES</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 50 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔢 Mengambil Nilai & Re-Index dari 0</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_values($array)</code> mengembalikan indexed array berurutan mulai dari indeks 0 yang berisikan seluruh nilai dari array target (menghilangkan string keys atau nomor index yang bolong).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$dataAcak = [
    "user_10" => "Muhammad Rahmat Fadila",
    "user_55" => "Siti Nurhaliza",
    "user_99" => "Budi Santoso"
];

// Ubah ke array numerik berurutan murni dari [0], [1], [2]
$dataNumerik = array_values($dataAcak);

echo "<h3>Hasil Penggunaan array_values():</h3>";
echo "<pre style='background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 8px;'>" . print_r($dataNumerik, true) . "</pre>";
?>`,
    codeExplanation: [
      'array_values() membuang string keys ("user_10", "user_55") dan menggantinya dengan indeks [0], [1], [2].',
      'Sangat sering digunakan sebelum json_encode() agar hasil JSON menjadi format array [...] murni alih-alih objek {...}.'
    ],
    challenge: {
      instruction: 'Ubah array asosiatif $m = ["a" => 1, "b" => 2] menjadi indexed array dengan array_values($m).',
      starterCode: `<?php
$m = ["a" => 1, "b" => 2];
$vals = array_values($m);
echo "Indeks 0 bernilai: " . $vals[0];
?>`,
      hint: 'Panggil array_values($m).'
    },
    quiz: {
      question: 'Mengapa array_values() sering dipanggil setelah array_filter() sebelum diekspor ke format JSON (json_encode)?',
      options: [
        'Agar indeks numerik yang bolong setelah difilter di-reset kembali dari 0 sehingga json_encode menghasilkan JSON Array murni ([]) bukan JSON Object ({})',
        'Karena json_encode tidak mendukung angka',
        'Untuk mempercepat koneksi database',
        'Hanya formalitas'
      ],
      correctIndex: 0,
      explanation: 'Di JavaScript/JSON, array yang indeksnya tidak berurutan dari 0 akan dianggap objek {}. array_values merapikan kembali indeks menjadi 0..n sehingga menghasilkan JSON Array [] murni.'
    }
  },

  // 51. ARRAY_WALK()
  {
    id: 'php-ref-array-walk',
    title: 'PHP array_walk()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 51,
    overview: 'Kuasai array_walk(): mengiterasi seluruh elemen array dan menerapkan fungsi callback ke setiap pasangan kunci-nilai secara langsung (In-Place Modification by Reference).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ARRAY WALK</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 51 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🚶 Iterasi Modifikasi Langsung (array_walk)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_walk(&$array, $callback, $userdata)</code> menjalankan callback pada setiap elemen. Jika parameter nilai pada callback menggunakan simbol referensi <code>&$value</code>, isi array aslinya dapat dimodifikasi secara langsung.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$produk = [
    "p1" => "laptop gaming",
    "p2" => "keyboard mekanikal",
    "p3" => "mouse wireless"
];

// Ubah seluruh teks produk menjadi huruf kapital langsung di array aslinya (Pass by reference)
array_walk($produk, function(&$value, $key) {
    $value = strtoupper($value);
});

echo "<h3>Hasil Penggunaan array_walk():</h3>";
echo "<pre style='background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 8px;'>" . print_r($produk, true) . "</pre>";
?>`,
    codeExplanation: [
      'Simbol &$value memungkinkan callback mengubah nilai array $produk secara langsung tanpa perlu return value baru.'
    ],
    challenge: {
      instruction: 'Pelajari penggunaan simbol referensi &$value pada callback array_walk.',
      starterCode: `<?php
$angka = [1, 2, 3];
array_walk($angka, function(&$v) { $v *= 2; });
echo implode(", ", $angka);
?>`,
      hint: 'Klik RUN untuk mencoba array_walk.'
    },
    quiz: {
      question: 'Bagaimana cara memodifikasi nilai elemen array secara langsung di tempat saat menggunakan array_walk()?',
      options: [
        'Menambahkan simbol referensi (&) pada parameter nilai fungsi callback (misal: function(&$value, $key))',
        'Mengembalikan nilai dengan return $value',
        'Menambahkan parameter "mutate = true"',
        'array_walk tidak bisa mengubah nilai'
      ],
      correctIndex: 0,
      explanation: 'Menambahkan tanda referensi (&) sebelum variabel value pada signature callback memungkinkan modifikasi nilai asli di memori.'
    }
  },

  // 52. ARRAY_WALK_RECURSIVE()
  {
    id: 'php-ref-array-walk-recursive',
    title: 'PHP array_walk_recursive()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 52,
    overview: 'Fungsi array_walk_recursive(): menerapkan fungsi callback ke setiap daun elemen pada struktur array bersarang (nested multidimensional array).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">WALK RECURSIVE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 52 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌳 Iterasi Rekursif Array Bersarang</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_walk_recursive(&$array, $callback)</code> menelusuri setiap tingkatan array multidimensi dan hanya mengeksekusi callback pada elemen daun data (bukan pada sub-array penampungnya).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$dataSiswaLengkap = [
    "biodata" => [
        "nama" => "  muhammad rahmat fadila  ",
        "kontak" => ["email" => "  FADILA@DEVGROW.ID  "]
    ],
    "status" => "  AKTIF  "
];

// Bersihkan spasi dan ubah string ke huruf kecil di semua level kedalaman
array_walk_recursive($dataSiswaLengkap, function(&$val, $key) {
    if (is_string($val)) {
        $val = strtolower(trim($val));
    }
});

echo "<h3>Hasil array_walk_recursive():</h3>";
echo "<pre style='background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 8px;'>" . print_r($dataSiswaLengkap, true) . "</pre>";
?>`,
    codeExplanation: [
      'Seluruh teks di dalam sub-array "biodata" dan "kontak" otomatis dibersihkan dan diubah menjadi lowercase.'
    ],
    challenge: {
      instruction: 'Pelajari pembersihan data multi-level dengan array_walk_recursive.',
      starterCode: `<?php
echo "array_walk_recursive menembus seluruh tingkatan pohon array bersarang secara otomatis.";
?>`,
      hint: 'Klik RUN untuk mereview walk recursive.'
    },
    quiz: {
      question: 'Elemen apa yang diproses oleh fungsi callback pada array_walk_recursive()?',
      options: [
        'Hanya elemen daun data (skalar) di seluruh level kedalaman array bersarang',
        'Hanya array di level pertama',
        'Hanya kunci numerik',
        'Semua sub-array sebagai objek'
      ],
      correctIndex: 0,
      explanation: 'array_walk_recursive otomatis melintasi sub-array dan hanya menerapkan callback pada elemen daun nilai.'
    }
  },

  // 53. ARSORT()
  {
    id: 'php-ref-arsort',
    title: 'PHP arsort()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 53,
    overview: 'Fungsi arsort(): mengurutkan array asosiatif secara MENURUN (Descending Z-A / Terbesar ke Terkecil) berdasarkan NILAI dan mempertahankan asosiasi kuncinya (Preserve Keys).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ARSORT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 53 / 79</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📉 Pengurutan Nilai Descending (arsort)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>arsort(&$array, $flags)</code> mengurutkan array berdasarkan nilai secara menurun (<strong>A</strong>ssociative <strong>R</strong>everse <strong>Sort</strong>) tanpa mengubah keterikatan nama kuncinya (Keys tetap utuh). Sangat ideal untuk Leaderboard skor tertinggi.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$papanPeringkat = [
    "Fadila" => 98,
    "Budi" => 75,
    "Siti" => 92,
    "Dewi" => 88
];

// Urutkan skor tertinggi ke terendah
arsort($papanPeringkat);

echo "<h3>🏆 Leaderboard Skor Ujian (arsort):</h3>";
echo "<ol>";
foreach ($papanPeringkat as $nama => $skor) {
    echo "<li><strong>$nama</strong>: $skor Poin</li>";
}
echo "</ol>";
?>`,
    codeExplanation: [
      'arsort mengurutkan nilai dari 98, 92, 88, 75.',
      'Nama kunci ("Fadila", "Siti", dll.) tetap terikat pada skor masing-masing.'
    ],
    challenge: {
      instruction: 'Urutkan skor ["A" => 10, "B" => 30, "C" => 20] dari terbesar ke terkecil dengan arsort().',
      starterCode: `<?php
$skor = ["A" => 10, "B" => 30, "C" => 20];
arsort($skor);
echo "Skor tertinggi: " . key($skor) . " (" . current($skor) . ")";
?>`,
      hint: 'Panggil arsort($skor).'
    },
    quiz: {
      question: 'Apa arti huruf "a" dan "r" pada nama fungsi arsort() di PHP?',
      options: [
        'Associative (mempertahankan key) dan Reverse (menurun / descending)',
        'Automatic Random',
        'Array Reindex',
        'Alphabetical Realtime'
      ],
      correctIndex: 0,
      explanation: '"a" = associative (mempertahankan kunci) dan "r" = reverse (urutan menurun / descending).'
    }
  }
];

module.exports = phpPart13RefArrays2;
