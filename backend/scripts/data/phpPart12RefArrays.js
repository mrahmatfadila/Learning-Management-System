// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (OVERVIEW & ARRAY FUNCTIONS 1)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart12RefArrays = [
  // 1. PHP OVERVIEW
  {
    id: 'php-ref-overview',
    title: 'PHP Overview',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 1,
    overview: 'Kamus Referensi Lengkap (PHP Reference): ringkasan cepat seluruh fungsi bawaan (Built-in Functions), konstanta global, direktif php.ini, dan kategori pustaka standar PHP.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PHP REFERENCE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 01 / 27</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📚 Kamus Referensi Pustaka Standar PHP</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Bab referensi ini berfungsi sebagai <strong>buku saku dan panduan cepat</strong> bagi developer untuk memahami cara kerja, parameter, nilai kembalian, dan contoh penggunaan setiap fungsi bawaan PHP secara mendalam.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          <div class="p-3 bg-purple-50 dark:bg-purple-950/20 rounded-xl border border-purple-200 dark:border-purple-800/50">
            <strong class="text-purple-700 dark:text-purple-400 block mb-1">Array Reference</strong>
            80+ Fungsi manipulasi array, filter, sorting, dan merging.
          </div>
          <div class="p-3 bg-indigo-50 dark:bg-indigo-950/20 rounded-xl border border-indigo-200 dark:border-indigo-800/50">
            <strong class="text-indigo-700 dark:text-indigo-400 block mb-1">String Reference</strong>
            Manipulasi teks, regex, hashing, dan sanitasi HTML.
          </div>
          <div class="p-3 bg-cyan-50 dark:bg-cyan-950/20 rounded-xl border border-cyan-200 dark:border-cyan-800/50">
            <strong class="text-cyan-700 dark:text-cyan-400 block mb-1">Math & Date</strong>
            Kalkulasi ilmiah, CSPRNG token, dan DateTimeImmutable.
          </div>
          <div class="p-3 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-800/50">
            <strong class="text-emerald-700 dark:text-emerald-400 block mb-1">Network & Files</strong>
            cURL HTTP Client, Header, Session, dan File Streaming.
          </div>
        </div>
      </div>
    `,
    code: `<?php
echo "<h3>Selamat Datang di PHP Reference Guide:</h3>";
echo "<p>Gunakan materi di bab ini sebagai panduan referensi cepat saat Anda membutuhkan fungsi spesifik untuk memproses data.</p>";
echo "<div style='padding: 12px; background: #ecfdf5; border-left: 4px solid #10b981; color: #065f46;'>";
echo "💡 <em>Setiap fungsi dilengkapi dengan penjelasan parameter, studi kasus nyata, dan sandbox koding interaktif.</em>";
echo "</div>";
?>`,
    codeExplanation: [
      'PHP Reference menyediakan dokumentasi komprehensif seluruh fungsi bawaan standar.'
    ],
    challenge: {
      instruction: 'Jelajahi fungsi-fungsi array pada materi berikutnya.',
      starterCode: `<?php
echo "Memulai eksplorasi 26 fungsi array esensial PHP...";
?>`,
      hint: 'Klik RUN untuk melanjutkan.'
    },
    quiz: {
      question: 'Apa tujuan utama dari modul PHP Reference?',
      options: [
        'Sebagai panduan dokumentasi dan kamus fungsi bawaan PHP beserta contoh penggunaannya',
        'Menginstal server baru',
        'Menghapus database',
        'Mengganti file konfigurasi browser'
      ],
      correctIndex: 0,
      explanation: 'PHP Reference menyediakan dokumentasi lengkap setiap fungsi standar beserta parameter dan contoh penggunaannya.'
    }
  },

  // 2. ARRAY()
  {
    id: 'php-ref-array-construct',
    title: 'PHP array()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 2,
    overview: 'Konstruktor array(): cara mendefinisikan indexed array, associative array, dan perbandingannya dengan short array syntax [].',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ARRAY CONSTRUCT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 02 / 27</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📦 Fungsi Konstruktor array()</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array()</code> adalah konstruktor bahasa bawaan untuk membuat array. Di PHP 5.4+, sintaks singkat <code>[]</code> diperkenalkan sebagai bentuk ekuivalen yang lebih ringkas.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// 1. Gaya Tradisional: array()
$a = array("PHP", "MySQL", "Laravel");

// 2. Gaya Modern: []
$b = ["PHP", "MySQL", "Laravel"];

echo "<h3>Perbandingan array() vs []:</h3>";
echo "<p>Apakah keduanya menghasilkan array yang identik? " . ($a === $b ? "<strong style='color: green;'>Ya, 100% Identik!</strong>" : "Tidak") . "</p>";
?>`,
    codeExplanation: [
      'Kedua sintaks menghasilkan struktur data array yang persis sama di memori PHP.'
    ],
    challenge: {
      instruction: 'Buat array menggunakan array("A", "B", "C") dan cetak elemen pertamanya.',
      starterCode: `<?php
$huruf = array("A", "B", "C");
echo "Elemen pertama: " . $huruf[0];
?>`,
      hint: 'Akses dengan $huruf[0].'
    },
    quiz: {
      question: 'Apakah sintaks short array [] dan fungsi array() memiliki performa dan hasil yang sama di PHP modern?',
      options: [
        'Ya, keduanya menghasilkan struktur data array yang identik',
        'Tidak, [] jauh lebih lambat',
        'array() hanya bisa untuk angka',
        '[] hanya bisa untuk teks'
      ],
      correctIndex: 0,
      explanation: 'Sintaks [] hanyalah syntactic sugar dari array() yang menghasilkan struktur memori yang identik.'
    }
  },

  // 3. ARRAY_CHANGE_KEY_CASE()
  {
    id: 'php-ref-array-change-key-case',
    title: 'PHP array_change_key_case()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 3,
    overview: 'Fungsi array_change_key_case(): mengubah semua nama kunci (keys) array asosiatif menjadi huruf kecil (CASE_LOWER) atau huruf kapital (CASE_UPPER).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">KEY CASE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 03 / 27</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔤 Mengubah Huruf Kunci Array</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_change_key_case($array, $case)</code> digunakan untuk menormalisasi nama kunci array (misal header HTTP atau input form) menjadi huruf kecil semua (<code>CASE_LOWER</code> - default) atau huruf besar semua (<code>CASE_UPPER</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$headerKlien = [
    "Authorization" => "Bearer token_rahasia_123",
    "Content-Type" => "application/json",
    "X-Api-Key" => "API_99841"
];

// Ubah semua nama kunci menjadi huruf kecil (CASE_LOWER)
$headerNormal = array_change_key_case($headerKlien, CASE_LOWER);

echo "<h3>Hasil Normalisasi Kunci Array:</h3>";
echo "<pre style='background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 8px;'>" . print_r($headerNormal, true) . "</pre>";
?>`,
    codeExplanation: [
      'Kunci "Authorization" otomatis diubah menjadi "authorization".',
      'Sangat berguna saat memproses HTTP Request Header yang tidak konsisten huruf kapitalnya.'
    ],
    challenge: {
      instruction: 'Ubah kunci array $arr = ["Nama" => "Budi"] menjadi UPPERCASE dengan CASE_UPPER.',
      starterCode: `<?php
$arr = ["Nama" => "Budi"];
$res = array_change_key_case($arr, CASE_UPPER);
echo "Kunci baru: " . key($res);
?>`,
      hint: 'Gunakan array_change_key_case($arr, CASE_UPPER).'
    },
    quiz: {
      question: 'Konstanta apa yang digunakan pada parameter kedua array_change_key_case() untuk mengubah kunci menjadi huruf kapital semua?',
      options: [
        'CASE_UPPER',
        'CASE_LOWER',
        'STR_UPPER',
        'TO_UPPERCASE'
      ],
      correctIndex: 0,
      explanation: 'CASE_UPPER mengubah seluruh key menjadi huruf besar, sedangkan CASE_LOWER (default) mengubah menjadi huruf kecil.'
    }
  },

  // 4. ARRAY_CHUNK()
  {
    id: 'php-ref-array-chunk',
    title: 'PHP array_chunk()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 4,
    overview: 'Fungsi array_chunk(): memecah satu array besar menjadi potongan-potongan array yang lebih kecil (multidimensi) berdasarkan ukuran tertentu, sangat ideal untuk sistem grid layout dan batch processing.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ARRAY CHUNK</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 04 / 27</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">✂️ Memecah Array Menjadi Potongan Kecil</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_chunk($array, $size, $preserve_keys)</code> membagi satu array panjang menjadi kumpulan sub-array dengan ukuran masing-masing <code>$size</code> elemen.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$produkList = ["Laptop", "Mouse", "Keyboard", "Monitor", "Headset", "Webcam", "Speaker"];

// Pecah array menjadi sub-array beranggotakan 3 item per kelompok
$kelompok = array_chunk($produkList, 3);

echo "<h3>Hasil Pemecahan Array (Grid 3 Kolom):</h3>";
foreach ($kelompok as $barisKe => $barisProduk) {
    echo "<p><strong>Baris #" . ($barisKe + 1) . ":</strong> " . implode(", ", $barisProduk) . "</p>";
}
?>`,
    codeExplanation: [
      'Array dengan 7 elemen dipecah menjadi 3 sub-array (3 item, 3 item, 1 item).',
      'Pola ini adalah cara termudah merender layout baris-kolom tabel HTML.'
    ],
    challenge: {
      instruction: 'Pecah array 4 elemen menjadi sub-array berisi 2 elemen dengan array_chunk($arr, 2).',
      starterCode: `<?php
$arr = [1, 2, 3, 4];
$chunks = array_chunk($arr, 2);
echo "Jumlah potongan: " . count($chunks);
?>`,
      hint: 'Panggil array_chunk($arr, 2).'
    },
    quiz: {
      question: 'Berapa banyak sub-array yang dihasilkan jika sebuah array berisi 10 elemen dipecah dengan array_chunk($arr, 4)?',
      options: [
        '3 sub-array (berisi 4, 4, dan 2 elemen)',
        '2 sub-array',
        '4 sub-array',
        '10 sub-array'
      ],
      correctIndex: 0,
      explanation: '10 dibagi 4 menghasilkan 2 potongan penuh (masing-masing 4 item) dan 1 potongan sisa (2 item), total 3 sub-array.'
    }
  },

  // 5. ARRAY_COLUMN()
  {
    id: 'php-ref-array-column',
    title: 'PHP array_column()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 5,
    overview: 'Fungsi array_column(): mengambil seluruh nilai dari satu kolom spesifik pada array multidimensi atau array of objects, serta penggunaan parameter index_key.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ARRAY COLUMN</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 05 / 27</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📊 Mengekstrak Satu Kolom Tunggal</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_column($input, $column_key, $index_key)</code> mengekstrak seluruh nilai dari satu kolom tertentu dari tabel array multidimensi tanpa perlu menuliskan loop <code>foreach</code> manual.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$dataSiswa = [
    ["id" => 101, "nama" => "Muhammad Rahmat Fadila", "email" => "fadila@devgrow.id"],
    ["id" => 102, "nama" => "Siti Nurhaliza", "email" => "siti@gmail.com"],
    ["id" => 103, "nama" => "Budi Santoso", "email" => "budi@yahoo.com"]
];

// 1. Ekstrak hanya kolom 'email'
$daftarEmail = array_column($dataSiswa, 'email');

// 2. Ekstrak kolom 'nama' dan gunakan 'id' sebagai kunci array baru
$namaById = array_column($dataSiswa, 'nama', 'id');

echo "<h3>Hasil Ekstraksi array_column():</h3>";
echo "<p><strong>Daftar Email Saja:</strong> " . implode(", ", $daftarEmail) . "</p>";

echo "<h4>Peta Siswa berdasarkan ID (Nama by ID):</h4>";
echo "<ul>";
foreach ($namaById as $id => $nama) {
    echo "<li>ID #$id: <strong>$nama</strong></li>";
}
echo "</ul>";
?>`,
    codeExplanation: [
      'array_column($dataSiswa, "email") menghasilkan array 1 dimensi ["fadila@...", "siti@...", "budi@..."].',
      'Parameter ketiga ("id") menjadikan nomor ID sebagai key array baru ([101 => "Fadila", 102 => "Siti", ...]).'
    ],
    challenge: {
      instruction: 'Ekstrak kolom "harga" dari array produk menggunakan array_column($produk, "harga").',
      starterCode: `<?php
$produk = [["nama" => "A", "harga" => 5000], ["nama" => "B", "harga" => 8000]];
$harga = array_column($produk, "harga");
echo "Total item harga: " . count($harga);
?>`,
      hint: 'Gunakan array_column($produk, "harga").'
    },
    quiz: {
      question: 'Fungsi bawaan PHP apa yang digunakan untuk mengekstrak seluruh nilai dari satu kolom spesifik pada array tabel multidimensi?',
      options: [
        'array_column()',
        'array_extract()',
        'array_pluck()',
        'get_column()'
      ],
      correctIndex: 0,
      explanation: 'array_column() mengekstrak kolom tertentu dari array multidimensi atau array of objects.'
    }
  },

  // 6. ARRAY_COMBINE()
  {
    id: 'php-ref-array-combine',
    title: 'PHP array_combine()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 6,
    overview: 'Fungsi array_combine(): menggabungkan dua array terpisah (satu array kunci dan satu array nilai) menjadi satu array asosiatif baru.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ARRAY COMBINE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 06 / 27</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔗 Menggabungkan Array Kunci & Nilai</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_combine($keys, $values)</code> membuat array asosiatif dengan mengambil elemen dari array pertama sebagai Kunci (Keys) dan elemen array kedua sebagai Nilai (Values). Kedua array <strong>wajib memiliki jumlah elemen yang sama persis</strong>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$headerKolom = ["kode", "nama_barang", "harga", "stok"];
$dataBarang = ["BRG-01", "Monitor Gaming 24 Inch", 2100000, 15];

// Gabungkan kedua array
$recordBarang = array_combine($headerKolom, $dataBarang);

echo "<h3>Hasil Penggabungan array_combine():</h3>";
echo "<pre style='background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 8px;'>" . print_r($recordBarang, true) . "</pre>";
?>`,
    codeExplanation: [
      'array_combine() menghasilkan array asosiatif ["kode" => "BRG-01", "nama_barang" => "...", ...].',
      'Sangat sering dipakai saat memproses pembacaan file spreadsheet CSV (header baris 1 digabungkan dengan baris data).'
    ],
    challenge: {
      instruction: 'Gabungkan $kunci = ["a", "b"] dengan $nilai = [1, 2] menggunakan array_combine().',
      starterCode: `<?php
$kunci = ["a", "b"];
$nilai = [1, 2];
$hasil = array_combine($kunci, $nilai);
echo "Nilai kunci 'a': " . $hasil['a'];
?>`,
      hint: 'Panggil array_combine($kunci, $nilai).'
    },
    quiz: {
      question: 'Syarat mutlak apa yang harus dipenuhi agar fungsi array_combine($keys, $values) tidak menghasilkan Fatal Error?',
      options: [
        'Kedua array harus memiliki jumlah total elemen yang sama persis',
        'Kedua array harus bertipe data integer',
        'Array keys harus berurutan alfabet',
        'Array values tidak boleh bernilai string'
      ],
      correctIndex: 0,
      explanation: 'array_combine() mewajibkan count($keys) === count($values). Jika berbeda, PHP akan melempar ValueError.'
    }
  },

  // 7. ARRAY_COUNT_VALUES()
  {
    id: 'php-ref-array-count-values',
    title: 'PHP array_count_values()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 7,
    overview: 'Fungsi array_count_values(): menghitung frekuensi kemunculan setiap nilai (string & integer) di dalam array.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">COUNT VALUES</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 07 / 27</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📊 Menghitung Frekuensi Kemunculan Nilai</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_count_values($array)</code> mengembalikan array asosiatif di mana setiap nilai unik menjadi Kunci dan total frekuensi kemunculannya menjadi Nilai.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$nilaiUjian = ["A", "B", "A", "C", "A", "B", "A", "D", "B", "A"];

// Hitung frekuensi setiap grade nilai
$frekuensi = array_count_values($nilaiUjian);

echo "<h3>Statistik Distribusi Nilai Kelas:</h3>";
echo "<ul>";
foreach ($frekuensi as $grade => $jumlah) {
    echo "<li>Grade <strong>$grade</strong>: $jumlah Siswa</li>";
}
echo "</ul>";
?>`,
    codeExplanation: [
      'array_count_values($nilaiUjian) menghasilkan ["A" => 5, "B" => 3, "C" => 1, "D" => 1].',
      'Sangat efisien untuk menghitung statistik jajak pendapat atau pemungutan suara (voting).'
    ],
    challenge: {
      instruction: 'Hitung frekuensi nilai pada array $suara = ["PHP", "JS", "PHP"] dengan array_count_values().',
      starterCode: `<?php
$suara = ["PHP", "JS", "PHP"];
$hasil = array_count_values($suara);
echo "Total suara PHP: " . $hasil["PHP"];
?>`,
      hint: 'Gunakan array_count_values($suara).'
    },
    quiz: {
      question: 'Apa format nilai kembalian dari fungsi array_count_values($arr)?',
      options: [
        'Array asosiatif dengan nilai unik sebagai key dan jumlah kemunculannya sebagai value',
        'Angka integer tunggal',
        'Nilai boolean true/false',
        'String dipisahkan koma'
      ],
      correctIndex: 0,
      explanation: 'array_count_values() mengembalikan array asosiatif [nilai => jumlah_kemunculan].'
    }
  },

  // 8. ARRAY_DIFF()
  {
    id: 'php-ref-array-diff',
    title: 'PHP array_diff()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 8,
    overview: 'Fungsi array_diff(): membandingkan nilai (values) dari dua atau lebih array dan mengembalikan elemen yang HANYA ada di array pertama.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ARRAY DIFF</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 08 / 27</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Mencari Selisih Nilai (Array Difference)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_diff($array1, $array2, ...)</code> membandingkan nilai array pertama dengan array lainnya dan mengembalikan nilai yang <strong>ada di array 1 namun TIDAK ada di array pembanding lainnya</strong>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$semuaSiswa = ["Andi", "Budi", "Citra", "Dewi", "Eko"];
$siswaHadir = ["Andi", "Citra", "Eko"];

// Cari siswa yang TIDAK hadir (Alpha / Absen)
$siswaAbsen = array_diff($semuaSiswa, $siswaHadir);

echo "<h3>Daftar Siswa yang Tidak Hadir (array_diff):</h3>";
echo "<p style='color: red; font-weight: bold;'>" . implode(", ", $siswaAbsen) . "</p>";
?>`,
    codeExplanation: [
      'array_diff() menemukan bahwa "Budi" dan "Dewi" tidak ada di array $siswaHadir.',
      'Hanya memeriksa kesamaan nilai (values), tanpa memeriksa nama kunci (keys).'
    ],
    challenge: {
      instruction: 'Cari elemen unik pada $a1 = ["PHP", "JS", "Python"] dibanding $a2 = ["JS"] dengan array_diff.',
      starterCode: `<?php
$a1 = ["PHP", "JS", "Python"];
$a2 = ["JS"];
$diff = array_diff($a1, $a2);
echo implode(", ", $diff);
?>`,
      hint: 'Gunakan array_diff($a1, $a2).'
    },
    quiz: {
      question: 'Elemen dari array manakah yang menjadi dasar pengembalian data pada fungsi array_diff($array1, $array2)?',
      options: [
        'Elemen yang ada di $array1 tetapi tidak ditemukan di $array2',
        'Elemen yang ada di kedua array',
        'Elemen yang ada di $array2 saja',
        'Semua elemen digabung'
      ],
      correctIndex: 0,
      explanation: 'array_diff mengembalikan selisih nilai yang ada pada array pertama ($array1) yang tidak terdapat pada array pembanding berikutnya.'
    }
  },

  // 9. ARRAY_DIFF_ASSOC()
  {
    id: 'php-ref-array-diff-assoc',
    title: 'PHP array_diff_assoc()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 9,
    overview: 'Fungsi array_diff_assoc(): membandingkan KUNCI dan NILAI sekaligus (Key + Value) dari dua array asosiatif.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DIFF ASSOC</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 09 / 27</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔑 Selisih Kunci & Nilai (Key-Value Diff)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Berbeda dengan <code>array_diff()</code> yang hanya mengecek nilai, <code>array_diff_assoc()</code> memeriksa pasangan <strong>KUNCI dan NILAI sekaligus</strong>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$dataLama = ["role" => "STUDENT", "status" => "PENDING", "paket" => "FREE"];
$dataBaru = ["role" => "STUDENT", "status" => "ACTIVE", "paket" => "FREE"];

// Temukan kolom yang mengalami perubahan nilai
$perubahan = array_diff_assoc($dataLama, $dataBaru);

echo "<h3>Kolom yang Berubah (array_diff_assoc):</h3>";
echo "<pre style='background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 8px;'>" . print_r($perubahan, true) . "</pre>";
?>`,
    codeExplanation: [
      'array_diff_assoc mengidentifikasi bahwa pasangan "status" => "PENDING" tidak cocok dengan "status" => "ACTIVE".'
    ],
    challenge: {
      instruction: 'Pelajari bahwa array_diff_assoc membandingkan key dan value sekaligus.',
      starterCode: `<?php
$arr1 = ["a" => "merah", "b" => "hijau"];
$arr2 = ["a" => "merah", "b" => "biru"];
$diff = array_diff_assoc($arr1, $arr2);
echo "Kunci yang berbeda: " . key($diff);
?>`,
      hint: 'Klik RUN untuk mencoba array_diff_assoc.'
    },
    quiz: {
      question: 'Apa perbedaan mendasar antara array_diff() dan array_diff_assoc()?',
      options: [
        'array_diff() hanya membandingkan nilai, sedangkan array_diff_assoc() membandingkan nama kunci dan nilai sekaligus',
        'array_diff_assoc() hanya untuk angka',
        'array_diff() menghapus data otomatis',
        'Tidak ada perbedaan'
      ],
      correctIndex: 0,
      explanation: 'array_diff_assoc() memverifikasi kecocokan nama kunci (keys) dan nilainya (values) secara bersamaan.'
    }
  },

  // 10. ARRAY_DIFF_KEY()
  {
    id: 'php-ref-array-diff-key',
    title: 'PHP array_diff_key()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 10,
    overview: 'Fungsi array_diff_key(): membandingkan hanya nama KUNCI (Keys) dari dua array tanpa mempedulikan isi nilainya.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DIFF KEY</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 10 / 27</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🗝️ Selisih Nama Kunci (Key Diff)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_diff_key($array1, $array2)</code> mengembalikan elemen yang <strong>nama kuncinya (keys) ada di array 1 tetapi tidak ada di array 2</strong>, tanpa memedulikan apa pun isi nilainya.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$skemaLengkap = ["nama" => "", "email" => "", "telepon" => "", "alamat" => ""];
$inputForm = ["nama" => "Fadila", "email" => "fadila@devgrow.id"];

// Cari field yang belum diinput oleh form
$fieldKosong = array_diff_key($skemaLengkap, $inputForm);

echo "<h3>Kolom Formulir yang Belum Diisi:</h3>";
echo "<ul>";
foreach (array_keys($fieldKosong) as $kunci) {
    echo "<li>Kolom: <code>$kunci</code></li>";
}
echo "</ul>";
?>`,
    codeExplanation: [
      'array_diff_key mendeteksi bahwa kunci "telepon" dan "alamat" tidak ada di $inputForm.'
    ],
    challenge: {
      instruction: 'Uji fungsi array_diff_key($a1, $a2) untuk menemukan selisih kunci.',
      starterCode: `<?php
$a1 = ["x" => 1, "y" => 2];
$a2 = ["x" => 99];
$diff = array_diff_key($a1, $a2);
echo "Kunci yang hilang: " . key($diff);
?>`,
      hint: 'Gunakan array_diff_key($a1, $a2).'
    },
    quiz: {
      question: 'Fungsi apakah yang digunakan untuk mencari selisih array HANYA berdasarkan nama Kuncinya (keys)?',
      options: [
        'array_diff_key()',
        'array_diff()',
        'array_diff_assoc()',
        'array_keys_diff()'
      ],
      correctIndex: 0,
      explanation: 'array_diff_key() hanya membandingkan nama kuncinya saja dan mengabaikan isi nilai.'
    }
  },

  // 11. ARRAY_DIFF_UASSOC()
  {
    id: 'php-ref-array-diff-uassoc',
    title: 'PHP array_diff_uassoc()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 11,
    overview: 'Fungsi array_diff_uassoc(): membandingkan kunci dan nilai dengan fungsi callback pembanding kustom (User-defined callback).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DIFF UASSOC</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 11 / 27</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛠️ Selisih dengan Callback Pembanding Kunci</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_diff_uassoc($arr1, $arr2, "fungsiCallback")</code> menggunakan fungsi logika kustom buatan Anda untuk menentukan kesamaan nama kunci.
          </p>
        </div>
      </div>
    `,
    code: `<?php
function bandingKunciKustom($a, $b) {
    if ($a === $b) return 0;
    return ($a > $b) ? 1 : -1;
}

$a1 = ["a" => "merah", "b" => "hijau", "c" => "biru"];
$a2 = ["a" => "merah", "b" => "kuning"];

$hasil = array_diff_uassoc($a1, $a2, "bandingKunciKustom");

echo "<h3>Hasil array_diff_uassoc():</h3>";
echo "<pre style='background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 8px;'>" . print_r($hasil, true) . "</pre>";
?>`,
    codeExplanation: [
      'Huruf "u" pada nama fungsi menandakan User-defined callback comparison.'
    ],
    challenge: {
      instruction: 'Pelajari format fungsi pembanding tiga arah (-1, 0, 1) atau operator spaceship <=> pada callback.',
      starterCode: `<?php
echo "Callback pembanding mengembalikan 0 jika sama, 1 jika lebih besar, dan -1 jika lebih kecil.";
?>`,
      hint: 'Klik RUN untuk mencoba callback pembanding.'
    },
    quiz: {
      question: 'Huruf "u" pada fungsi array_diff_uassoc() merupakan singkatan dari:',
      options: [
        'User-defined (Fungsi buatan pengguna / callback)',
        'Universal',
        'Unicode',
        'Uppercase'
      ],
      correctIndex: 0,
      explanation: 'Awalan/sisipan "u" pada fungsi array PHP berarti User-defined comparison function (fungsi callback pengguna).'
    }
  },

  // 12. ARRAY_DIFF_UKEY()
  {
    id: 'php-ref-array-diff-ukey',
    title: 'PHP array_diff_ukey()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 12,
    overview: 'Fungsi array_diff_ukey(): membandingkan nama kunci array menggunakan fungsi callback kustom buatan pengguna.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">DIFF UKEY</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 12 / 27</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🗝️ Selisih Kunci dengan Callback</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_diff_ukey($arr1, $arr2, "callback")</code> membandingkan kunci dari dua array dengan logika kustom (misal mengabaikan perbedaan huruf besar/kecil dengan <code>strcasecmp</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$a1 = ["ID" => 1, "NAMA" => "Fadila", "KOTA" => "Bandung"];
$a2 = ["id" => 99, "nama" => "Budi"];

// Bandingkan kunci dengan strcasecmp (abaikan kapitalisasi)
$hasil = array_diff_ukey($a1, $a2, "strcasecmp");

echo "<h3>Hasil array_diff_ukey (Case-Insensitive Keys):</h3>";
echo "<pre style='background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 8px;'>" . print_r($hasil, true) . "</pre>";
?>`,
    codeExplanation: [
      'strcasecmp menganggap "ID" sama dengan "id", sehingga hanya kunci "KOTA" yang dikembalikan sebagai selisih.'
    ],
    challenge: {
      instruction: 'Gunakan strcasecmp sebagai callback pembanding case-insensitive.',
      starterCode: `<?php
$a = ["A" => 1];
$b = ["a" => 2];
$diff = array_diff_ukey($a, $b, "strcasecmp");
echo "Jumlah selisih: " . count($diff); // 0 karena 'A' sama dengan 'a'
?>`,
      hint: 'Klik RUN untuk menguji case-insensitive ukey.'
    },
    quiz: {
      question: 'Fungsi standar PHP apakah yang sering dijadikan callback pada array_diff_ukey untuk membandingkan kunci tanpa membedakan huruf besar/kecil?',
      options: [
        'strcasecmp',
        'strcmp',
        'strpos',
        'strtolower'
      ],
      correctIndex: 0,
      explanation: 'strcasecmp membandingkan dua string secara binary-safe tanpa membedakan huruf besar/kecil (case-insensitive).'
    }
  },

  // 13. ARRAY_FILL()
  {
    id: 'php-ref-array-fill',
    title: 'PHP array_fill()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 13,
    overview: 'Fungsi array_fill(): mengisi array dengan nilai yang sama sebanyak jumlah (count) tertentu dimulai dari nomor indeks awal (start_index).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ARRAY FILL</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 13 / 27</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📦 Mengisi Array Otomatis dengan array_fill()</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_fill($start_index, $count, $value)</code> membuat array baru berisikan nilai <code>$value</code> sebanyak <code>$count</code> elemen dimulai dari nomor indeks <code>$start_index</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Buat array berisi 5 elemen "Belum Selesai" dimulai dari indeks 1
$tugasSiswa = array_fill(1, 5, "Belum Selesai");

echo "<h3>Hasil Pengisian Otomatis array_fill():</h3>";
echo "<pre style='background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 8px;'>" . print_r($tugasSiswa, true) . "</pre>";
?>`,
    codeExplanation: [
      'array_fill(1, 5, "...") menghasilkan indeks [1], [2], [3], [4], [5] dengan nilai yang seragam.'
    ],
    challenge: {
      instruction: 'Buat array 3 elemen berisi angka 0 dimulai dari indeks 0.',
      starterCode: `<?php
$nol = array_fill(0, 3, 0);
echo implode(", ", $nol);
?>`,
      hint: 'Panggil array_fill(0, 3, 0).'
    },
    quiz: {
      question: 'Berapakah jumlah elemen yang dihasilkan dari pemanggilan array_fill(0, 7, "aktif")?',
      options: [
        '7 elemen',
        '0 elemen',
        '8 elemen',
        '1 elemen'
      ],
      correctIndex: 0,
      explanation: 'Parameter kedua ($count = 7) menentukan bahwa array akan berisi tepat 7 elemen.'
    }
  },

  // 14. ARRAY_FILL_KEYS()
  {
    id: 'php-ref-array-fill-keys',
    title: 'PHP array_fill_keys()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 14,
    overview: 'Fungsi array_fill_keys(): mengisi array asosiatif dengan nilai seragam berdasarkan daftar array kunci yang ditentukan.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">FILL KEYS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 14 / 27</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔑 Mengisi Nilai Seragam Berdasarkan Kunci</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_fill_keys($keysArray, $value)</code> membuat array asosiatif menggunakan setiap elemen di <code>$keysArray</code> sebagai nama kunci dan mengisinya dengan nilai <code>$value</code> yang sama.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$fiturAplikasi = ["dark_mode", "notifikasi_email", "autentikasi_2fa", "auto_save"];

// Setel nilai default seluruh fitur menjadi false (nonaktif)
$pengaturanAwal = array_fill_keys($fiturAplikasi, false);

echo "<h3>Konfigurasi Default Pengguna:</h3>";
echo "<pre style='background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 8px;'>" . print_r($pengaturanAwal, true) . "</pre>";
?>`,
    codeExplanation: [
      'array_fill_keys sangat ideal untuk menginisialisasi skema pengaturan default profil pengguna.'
    ],
    challenge: {
      instruction: 'Inisialisasi kunci ["senin", "selasa"] dengan nilai "Libur".',
      starterCode: `<?php
$hari = ["senin", "selasa"];
$jadwal = array_fill_keys($hari, "Libur");
echo "Senin: " . $jadwal["senin"];
?>`,
      hint: 'Gunakan array_fill_keys($hari, "Libur").'
    },
    quiz: {
      question: 'Apa perbedaan utama antara array_fill() dan array_fill_keys()?',
      options: [
        'array_fill() mengisi indexed array numerik berurutan, sedangkan array_fill_keys() mengisi array asosiatif berdasarkan daftar nama kunci',
        'array_fill_keys() hanya untuk angka',
        'Keduanya identik tanpa perbedaan',
        'array_fill() membuat file fisik'
      ],
      correctIndex: 0,
      explanation: 'array_fill_keys menggunakan array string sebagai nama kunci, sedangkan array_fill menggunakan nomor indeks integer.'
    }
  },

  // 15. ARRAY_FILTER()
  {
    id: 'php-ref-array-filter',
    title: 'PHP array_filter()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 15,
    overview: 'Kuasai array_filter(): menyaring data array dengan callback kondisi boolean, menghapus nilai falsy/null otomatis tanpa callback, dan flag ARRAY_FILTER_USE_KEY / ARRAY_FILTER_USE_BOTH.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ARRAY FILTER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 15 / 27</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎯 Menyaring Array (Fungsional Filter)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_filter($array, $callback, $mode)</code> memfilter elemen array dan hanya mempertahankan elemen yang menghasilkan nilai <code>true</code> pada fungsi callback. Jika callback dikosongkan, fungsi akan otomatis membuang seluruh nilai <em>falsy</em> (null, false, "", 0).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$dataCampur = ["Fadila", "", null, "Budi", false, "Siti", 0, "Dewi"];

// 1. Bersihkan elemen kosong/null secara instan tanpa callback
$dataBersih = array_filter($dataCampur);

// 2. Filter nilai angka kelulusan >= 75
$nilai = [65, 88, 45, 90, 78, 55, 92];
$lulus = array_filter($nilai, fn($n) => $n >= 75);

echo "<h3>Hasil Pengujian array_filter():</h3>";
echo "<p><strong>Array Bersih dari Null/Kosong:</strong> " . implode(", ", $dataBersih) . "</p>";
echo "<p><strong>Nilai Siswa yang Lulus (>=75):</strong> " . implode(", ", $lulus) . "</p>";
?>`,
    codeExplanation: [
      'array_filter($arr) tanpa parameter kedua secara otomatis membersihkan string kosong, null, dan false.',
      'Sintaks Arrow Function fn($n) => $n >= 75 menyaring nilai secara sangat ringkas.'
    ],
    challenge: {
      instruction: 'Saring array angka $angka = [1, 2, 3, 4, 5, 6] untuk mengambil hanya angka genap ($n % 2 === 0).',
      starterCode: `<?php
$angka = [1, 2, 3, 4, 5, 6];
$genap = array_filter($angka, fn($n) => $n % 2 === 0);
echo implode(", ", $genap);
?>`,
      hint: 'Gunakan fn($n) => $n % 2 === 0.'
    },
    quiz: {
      question: 'Apa yang terjadi jika array_filter($array) dipanggil tanpa menyertakan fungsi callback kedua?',
      options: [
        'Otomatis membuang semua elemen yang bernilai falsy (seperti null, false, "", 0)',
        'Menghasilkan Fatal Error',
        'Mengosongkan seluruh isi array',
        'Mengurutkan array dari A-Z'
      ],
      correctIndex: 0,
      explanation: 'Tanpa callback, array_filter() secara default membuang semua elemen yang setara dengan boolean FALSE.'
    }
  },

  // 16. ARRAY_FLIP()
  {
    id: 'php-ref-array-flip',
    title: 'PHP array_flip()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 16,
    overview: 'Fungsi array_flip(): menukar posisi seluruh KUNCI (keys) menjadi NILAI (values) dan seluruh NILAI menjadi KUNCI.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ARRAY FLIP</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 16 / 27</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔄 Membalik Posisi Kunci & Nilai (array_flip)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_flip($array)</code> menukar tempat di mana nama kunci menjadi nilai dan nilai menjadi nama kunci. Sangat berguna untuk pencarian cepat <code>O(1)</code> menggunakan <code>isset()</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$roleMap = [
    "admin" => 1,
    "instructor" => 2,
    "student" => 3
];

// Balikkan kunci dan nilainya
$idToRole = array_flip($roleMap);

echo "<h3>Hasil Pembalikan array_flip():</h3>";
echo "<pre style='background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 8px;'>" . print_r($idToRole, true) . "</pre>";
echo "<p>Role untuk ID 1 adalah: <strong>{$idToRole[1]}</strong></p>";
?>`,
    codeExplanation: [
      'array_flip() mengubah [1 => "admin", 2 => "instructor", 3 => "student"].',
      'Nilai yang dibalik wajib bertipe data integer atau string yang valid sebagai key.'
    ],
    challenge: {
      instruction: 'Tukar kunci dan nilai dari $arr = ["a" => 10, "b" => 20] dengan array_flip($arr).',
      starterCode: `<?php
$arr = ["a" => 10, "b" => 20];
$flip = array_flip($arr);
echo "Key 10 bernilai: " . $flip[10];
?>`,
      hint: 'Panggil array_flip($arr).'
    },
    quiz: {
      question: 'Apa yang dilakukan oleh fungsi array_flip() di PHP?',
      options: [
        'Menukar posisi setiap key menjadi value dan setiap value menjadi key',
        'Membalik urutan elemen dari belakang ke depan',
        'Mengacak urutan array secara random',
        'Menghapus kunci ganda'
      ],
      correctIndex: 0,
      explanation: 'array_flip() menukar pasangan key dan value pada array.'
    }
  },

  // 17. ARRAY_INTERSECT()
  {
    id: 'php-ref-array-intersect',
    title: 'PHP array_intersect()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 17,
    overview: 'Fungsi array_intersect(): mencari irisan nilai (Intersection) yang ADA dan SAMA di semua array pembanding.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ARRAY INTERSECT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 17 / 27</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎯 Mencari Irisan Nilai (array_intersect)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_intersect($array1, $array2, ...)</code> mengembalikan elemen yang nilainya <strong>ada di SEMUA array</strong> yang dibandingkan (irisan himpunan matematika).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$keahlianFrontend = ["HTML", "CSS", "JavaScript", "React", "Vue"];
$keahlianSiswa = ["Python", "JavaScript", "PHP", "HTML", "C++"];

// Cari keterampilan frontend yang sudah dikuasai siswa (Irisan)
$dikuasai = array_intersect($keahlianFrontend, $keahlianSiswa);

echo "<h3>Keahlian Frontend yang Cocok (Irisan):</h3>";
echo "<p style='color: green; font-weight: bold;'>" . implode(", ", $dikuasai) . "</p>";
?>`,
    codeExplanation: [
      'array_intersect() mengembalikan ["HTML", "JavaScript"] karena kedua nilai ini ada di kedua array.'
    ],
    challenge: {
      instruction: 'Cari irisan antara $a = [1, 2, 3] dan $b = [2, 3, 4] dengan array_intersect.',
      starterCode: `<?php
$a = [1, 2, 3];
$b = [2, 3, 4];
$irisan = array_intersect($a, $b);
echo implode(", ", $irisan);
?>`,
      hint: 'Gunakan array_intersect($a, $b).'
    },
    quiz: {
      question: 'Elemen apa yang dikembalikan oleh fungsi array_intersect($a, $b)?',
      options: [
        'Elemen-elemen yang nilainya ada di kedua array ($a dan $b)',
        'Elemen yang hanya ada di $a saja',
        'Semua elemen digabung',
        'Elemen yang tidak ada di keduanya'
      ],
      correctIndex: 0,
      explanation: 'array_intersect mengembalikan irisan nilai yang sama-sama hadir pada seluruh array pembanding.'
    }
  },

  // 18. ARRAY_INTERSECT_ASSOC()
  {
    id: 'php-ref-array-intersect-assoc',
    title: 'PHP array_intersect_assoc()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 18,
    overview: 'Fungsi array_intersect_assoc(): mencari irisan di mana KUNCI dan NILAI harus sama persis di semua array pembanding.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">INTERSECT ASSOC</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 18 / 27</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔑 Irisan Kunci & Nilai (Key-Value Match)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_intersect_assoc()</code> hanya mengembalikan elemen jika <strong>nama kuncinya SAMA dan nilainya juga SAMA</strong> pada seluruh array pembanding.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$userA = ["tema" => "dark", "bahasa" => "id", "role" => "admin"];
$userB = ["tema" => "dark", "bahasa" => "en", "role" => "admin"];

// Cari preferensi yang sama persis (Kunci & Nilai cocok)
$cocok = array_intersect_assoc($userA, $userB);

echo "<h3>Pengaturan yang Sama Persis (Kunci & Nilai Cocok):</h3>";
echo "<pre style='background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 8px;'>" . print_r($cocok, true) . "</pre>";
?>`,
    codeExplanation: [
      'Hanya "tema" => "dark" dan "role" => "admin" yang dikembalikan karena "bahasa" memiliki nilai berbeda ("id" vs "en").'
    ],
    challenge: {
      instruction: 'Pelajari bahwa array_intersect_assoc membandingkan kecocokan key dan value sekaligus.',
      starterCode: `<?php
$a = ["x" => 10, "y" => 20];
$b = ["x" => 10, "y" => 99];
$res = array_intersect_assoc($a, $b);
echo "Jumlah elemen cocok: " . count($res);
?>`,
      hint: 'Klik RUN untuk mencoba array_intersect_assoc.'
    },
    quiz: {
      question: 'Kapan sebuah elemen akan dikembalikan oleh array_intersect_assoc()?',
      options: [
        'Ketika nama kunci dan nilainya sama-sama cocok di semua array',
        'Ketika nilainya saja yang cocok',
        'Ketika kuncinya saja yang cocok',
        'Kapan saja'
      ],
      correctIndex: 0,
      explanation: 'array_intersect_assoc mengharuskan nama key dan isi valuenya sama persis.'
    }
  },

  // 19. ARRAY_INTERSECT_KEY()
  {
    id: 'php-ref-array-intersect-key',
    title: 'PHP array_intersect_key()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 19,
    overview: 'Fungsi array_intersect_key(): mencari irisan nama KUNCI (Keys) yang sama di semua array tanpa mempedulikan isi nilainya.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">INTERSECT KEY</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 19 / 27</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🗝️ Irisan Nama Kunci (Key Match)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_intersect_key($arr1, $arr2)</code> mengambil elemen dari array 1 yang <strong>nama kuncinya juga terdapat di array 2</strong>, sangat berguna untuk sanitasi whitelist parameter API.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Seluruh input masukan dari request klien (ada input berbahaya 'is_admin')
$inputKlien = [
    "nama" => "Fadila",
    "email" => "fadila@devgrow.id",
    "is_admin" => true, // Parameter berbahaya yang tidak boleh diubah
    "hacker_field" => "inject"
];

// Daftar Whitelist Kolom yang Boleh Diubah
$whitelist = ["nama" => true, "email" => true];

// Filter hanya kunci yang ada di whitelist
$dataAman = array_intersect_key($inputKlien, $whitelist);

echo "<h3>Hasil Filter Whitelist Parameter Aman:</h3>";
echo "<pre style='background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 8px;'>" . print_r($dataAman, true) . "</pre>";
?>`,
    codeExplanation: [
      'array_intersect_key membuang parameter "is_admin" dan "hacker_field" secara otomatis karena tidak terdaftar di whitelist.',
      'Salah satu teknik keamanan Mass Assignment Protection terbaik di PHP murni.'
    ],
    challenge: {
      instruction: 'Gunakan array_intersect_key untuk mengambil hanya kunci yang diizinkan pada whitelist.',
      starterCode: `<?php
$data = ["a" => 1, "b" => 2, "c" => 3];
$allow = ["a" => 1, "c" => 1];
$clean = array_intersect_key($data, $allow);
echo implode(", ", array_keys($clean));
?>`,
      hint: 'Gunakan array_intersect_key($data, $allow).'
    },
    quiz: {
      question: 'Pola keamanan apakah yang sangat efektif dibangun menggunakan array_intersect_key() pada pemrosesan formulir backend?',
      options: [
        'Mass Assignment Whitelist Protection (Hanya menerima field input yang diizinkan)',
        'Enkripsi SSL otomatis',
        'Mempercepat koneksi internet',
        'Menghapus file log'
      ],
      correctIndex: 0,
      explanation: 'array_intersect_key sangat ampuh memfilter input POST/JSON hanya untuk nama kolom yang sah di daftar whitelist.'
    }
  },

  // 20. ARRAY_INTERSECT_UASSOC()
  {
    id: 'php-ref-array-intersect-uassoc',
    title: 'PHP array_intersect_uassoc()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 20,
    overview: 'Fungsi array_intersect_uassoc(): mencari irisan kunci dan nilai dengan fungsi callback pembanding kustom.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">INTERSECT UASSOC</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 20 / 27</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛠️ Irisan Kunci & Nilai dengan Callback</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_intersect_uassoc($arr1, $arr2, "callback")</code> mencari irisan dengan mengevaluasi kunci menggunakan fungsi logika pembanding kustom pengguna.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$a1 = ["a" => "merah", "b" => "hijau", "c" => "biru"];
$a2 = ["a" => "merah", "b" => "kuning", "d" => "biru"];

$hasil = array_intersect_uassoc($a1, $a2, "strcasecmp");

echo "<h3>Hasil array_intersect_uassoc:</h3>";
echo "<pre style='background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 8px;'>" . print_r($hasil, true) . "</pre>";
?>`,
    codeExplanation: [
      'Hanya ["a" => "merah"] yang dikembalikan karena kunci "a" dan nilainya "merah" cocok di kedua array.'
    ],
    challenge: {
      instruction: 'Pelajari pemakaian callback pembanding pada array_intersect_uassoc.',
      starterCode: `<?php
echo "array_intersect_uassoc membandingkan kecocokan dengan callback buatan pengguna.";
?>`,
      hint: 'Klik RUN untuk mencoba uassoc.'
    },
    quiz: {
      question: 'Parameter terakhir pada array_intersect_uassoc() wajib diisi dengan:',
      options: [
        'Nama fungsi callback pembanding (callable)',
        'Angka limit hasil',
        'Tipe data return',
        'Boolean true/false'
      ],
      correctIndex: 0,
      explanation: 'Parameter terakhir adalah callable fungsi pembanding yang mengembalikan integer (-1, 0, 1).'
    }
  },

  // 21. ARRAY_INTERSECT_UKEY()
  {
    id: 'php-ref-array-intersect-ukey',
    title: 'PHP array_intersect_ukey()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 21,
    overview: 'Fungsi array_intersect_ukey(): mencari irisan nama kunci menggunakan fungsi callback pembanding kustom.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">INTERSECT UKEY</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 21 / 27</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🗝️ Irisan Kunci Menggunakan Callback</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_intersect_ukey($arr1, $arr2, "callback")</code> mencari kecocokan nama kunci antar-array menggunakan fungsi pembanding kustom (seperti <code>strcasecmp</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$data1 = ["ID" => 10, "NAMA" => "DevGrow", "STATUS" => "AKTIF"];
$data2 = ["id" => 99, "nama" => "Platform"];

// Temukan irisan kunci tanpa memedulikan kapitalisasi huruf
$hasil = array_intersect_ukey($data1, $data2, "strcasecmp");

echo "<h3>Hasil Irisan Kunci (array_intersect_ukey):</h3>";
echo "<pre style='background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 8px;'>" . print_r($hasil, true) . "</pre>";
?>`,
    codeExplanation: [
      'strcasecmp menganggap kunci "ID" sama dengan "id" dan "NAMA" sama dengan "nama".'
    ],
    challenge: {
      instruction: 'Uji fungsi array_intersect_ukey dengan callback strcasecmp.',
      starterCode: `<?php
$a = ["KEY" => 1];
$b = ["key" => 2];
$res = array_intersect_ukey($a, $b, "strcasecmp");
echo "Kunci ditemukan: " . key($res);
?>`,
      hint: 'Gunakan strcasecmp sebagai callback pembanding.'
    },
    quiz: {
      question: 'Apa fungsi dari array_intersect_ukey()?',
      options: [
        'Mencari irisan nama kunci antar-array menggunakan fungsi callback pembanding kustom',
        'Menggabungkan string',
        'Membuat database baru',
        'Menghitung panjang string'
      ],
      correctIndex: 0,
      explanation: 'array_intersect_ukey mencari kecocokan key array berdasarkan evaluasi fungsi callback.'
    }
  },

  // 22. ARRAY_KEY_EXISTS()
  {
    id: 'php-ref-array-key-exists',
    title: 'PHP array_key_exists()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 22,
    overview: 'Fungsi array_key_exists(): memeriksa apakah nama kunci atau indeks tertentu ada di dalam array, dan perbedaan pentingnya dibanding isset() saat nilai kunci bernilai NULL.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">KEY EXISTS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 22 / 27</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Memeriksa Keberadaan Kunci (array_key_exists)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_key_exists($key, $array)</code> mengembalikan <code>true</code> jika kunci tersebut ADA di array, <strong>bahkan jika nilainya bernilai NULL</strong> (berbeda dengan <code>isset()</code> yang menghasilkan <code>false</code> jika nilainya null).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$dataAkun = [
    "username" => "rahmat123",
    "nomor_telepon" => null // Kunci ADA tetapi bernilai NULL
];

echo "<h3>Perbedaan array_key_exists() vs isset():</h3>";
echo "<ul>";
echo "<li><strong>array_key_exists('nomor_telepon'):</strong> " . (array_key_exists('nomor_telepon', $dataAkun) ? "<span style='color: green;'>TRUE (Kunci Ditemukan di Array)</span>" : "FALSE") . "</li>";
echo "<li><strong>isset(\$dataAkun['nomor_telepon']):</strong> " . (isset($dataAkun['nomor_telepon']) ? "TRUE" : "<span style='color: red;'>FALSE (Karena nilainya NULL)</span>") . "</li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'array_key_exists() murni memeriksa apakah nama kunci didefinisikan di dalam struktur array.',
      'isset() memeriksa apakah kunci ada DAN nilainya TIDAK null.'
    ],
    challenge: {
      instruction: 'Periksa apakah kunci "email" ada di array $user menggunakan array_key_exists("email", $user).',
      starterCode: `<?php
$user = ["email" => "user@devgrow.id"];
if (array_key_exists("email", $user)) {
    echo "Kunci 'email' terdaftar!";
}
?>`,
      hint: 'Gunakan array_key_exists("email", $user).'
    },
    quiz: {
      question: 'Apa hasil evaluasi array_key_exists("foto", ["foto" => null]) dibandingkan dengan isset($arr["foto"])?',
      options: [
        'array_key_exists bernilai TRUE, sedangkan isset bernilai FALSE',
        'Keduanya bernilai TRUE',
        'Keduanya bernilai FALSE',
        'Memicu Fatal Error'
      ],
      correctIndex: 0,
      explanation: 'array_key_exists() tetap mengembalikan TRUE karena kuncinya ada, sedangkan isset() mengembalikan FALSE karena nilainya adalah NULL.'
    }
  },

  // 23. ARRAY_KEYS()
  {
    id: 'php-ref-array-keys',
    title: 'PHP array_keys()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 23,
    overview: 'Fungsi array_keys(): mengekstrak semua nama kunci (keys) dari array menjadi indexed array, dan pencarian kunci berdasarkan nilai tertentu (filter by search_value).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ARRAY KEYS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 23 / 27</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🗝️ Mengambil Semua Nama Kunci (array_keys)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_keys($array, $filter_value, $strict)</code> mengembalikan array numerik baru yang berisi seluruh nama kunci dari array target.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$statusPesanan = [
    "ORD-101" => "SELESAI",
    "ORD-102" => "PROSES",
    "ORD-103" => "SELESAI",
    "ORD-104" => "BATAL",
    "ORD-105" => "SELESAI"
];

// 1. Ambil semua nomor pesanan (semua keys)
$semuaNomor = array_keys($statusPesanan);

// 2. Ambil hanya nomor pesanan yang statusnya "SELESAI"
$pesananSelesai = array_keys($statusPesanan, "SELESAI");

echo "<h3>Hasil Pengambilan Kunci (array_keys):</h3>";
echo "<p><strong>Semua Order:</strong> " . implode(", ", $semuaNomor) . "</p>";
echo "<p><strong>Order yang Berstatus SELESAI Saja:</strong> " . implode(", ", $pesananSelesai) . "</p>";
?>`,
    codeExplanation: [
      'array_keys($arr) mengekstrak semua nama index/kunci array.',
      'Parameter kedua ($filter_value = "SELESAI") menyaring dan hanya mengambil kunci yang memiliki nilai tersebut.'
    ],
    challenge: {
      instruction: 'Ambil seluruh nama kunci dari $m = ["nama" => "A", "umur" => 20] dengan array_keys($m).',
      starterCode: `<?php
$m = ["nama" => "A", "umur" => 20];
$kunci = array_keys($m);
echo implode(", ", $kunci);
?>`,
      hint: 'Panggil array_keys($m).'
    },
    quiz: {
      question: 'Fungsi bawaan PHP apa yang digunakan untuk mengekstrak seluruh nama kunci (keys) dari sebuah array asosiatif?',
      options: [
        'array_keys()',
        'array_values()',
        'get_keys()',
        'key_list()'
      ],
      correctIndex: 0,
      explanation: 'array_keys() mengembalikan array berisi semua nama kunci dari array input.'
    }
  },

  // 24. ARRAY_MAP()
  {
    id: 'php-ref-array-map',
    title: 'PHP array_map()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 24,
    overview: 'Kuasai array_map(): mentransformasi setiap elemen array menggunakan fungsi callback, pemetaan banyak array sekaligus (Parallel Mapping), dan penggunaan Arrow Functions PHP 7.4+.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ARRAY MAP</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 24 / 27</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🗺️ Transformasi Data (array_map)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_map($callback, $array1, $array2, ...)</code> menerapkan fungsi transformasi ke setiap elemen dan mengembalikan array baru dengan hasil olahan tersebut tanpa mengubah array aslinya (Immutable).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$daftarNama = ["   muhammad rahmat fadila  ", "   siti nurhaliza  ", "  budi santoso  "];

// 1. Bersihkan spasi dan ubah ke Title Case (Ucwords)
$namaRapi = array_map(fn($str) => ucwords(trim($str)), $daftarNama);

// 2. Format Uang Rupiah
$hargaBarang = [25000, 75000, 150000];
$hargaFormatted = array_map(fn($h) => "Rp " . number_format($h, 0, ',', '.'), $hargaBarang);

echo "<h3>Hasil Transformasi array_map():</h3>";
echo "<p><strong>Nama Rapi:</strong> " . implode(" | ", $namaRapi) . "</p>";
echo "<p><strong>Harga Format:</strong> " . implode(" | ", $hargaFormatted) . "</p>";
?>`,
    codeExplanation: [
      'array_map memproses setiap item dalam satu ekspresi fungsional yang bersih dan bebas dari efek samping (Side-Effects).',
      'Urutan parameter array_map adalah ($callback, $array), berbeda dengan array_filter($array, $callback).'
    ],
    challenge: {
      instruction: 'Kalikan setiap angka dalam [1, 2, 3] dengan 10 menggunakan array_map(fn($n) => $n * 10, [1, 2, 3]).',
      starterCode: `<?php
$res = array_map(fn($n) => $n * 10, [1, 2, 3]);
echo implode(", ", $res);
?>`,
      hint: 'Gunakan array_map(fn($n) => $n * 10, ...).'
    },
    quiz: {
      question: 'Bagaimanakah urutan parameter pada fungsi array_map() di PHP?',
      options: [
        'array_map($callback, $array1, ...)',
        'array_map($array1, $callback)',
        'array_map($array1, $array2)',
        'array_map($flag, $array1)'
      ],
      correctIndex: 0,
      explanation: 'array_map menerima fungsi callback sebagai parameter pertama, diikuti dengan array yang akan ditransformasi.'
    }
  },

  // 25. ARRAY_MERGE()
  {
    id: 'php-ref-array-merge',
    title: 'PHP array_merge()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 25,
    overview: 'Fungsi array_merge(): menggabungkan dua atau lebih array menjadi satu. Pahami perilaku penimpaan kunci string yang sama dan re-indeks kunci numerik.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ARRAY MERGE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 25 / 27</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔀 Menggabungkan Array (array_merge)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_merge($array1, $array2, ...)</code> menyatukan beberapa array. Jika terdapat <strong>kunci string yang sama</strong>, nilai dari array belakang akan menimpa nilai array depan. Jika kuncinya numerik, indeks akan otomatis diurutkan ulang (re-indexed).
          </p>
        </div>
      </div>
    `,
    code: `<?php
// 1. Penggabungan Konfigurasi Default & Kustom
$defaultConfig = [
    "theme" => "light",
    "pagination" => 10,
    "debug" => false
];

$userConfig = [
    "theme" => "dark", // Menimpa light
    "debug" => true    // Menimpa false
];

$finalConfig = array_merge($defaultConfig, $userConfig);

echo "<h3>Hasil Penggabungan Konfigurasi (array_merge):</h3>";
echo "<pre style='background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 8px;'>" . print_r($finalConfig, true) . "</pre>";
?>`,
    codeExplanation: [
      'array_merge() menimpa nilai kunci string "theme" menjadi "dark" dan "debug" menjadi true.',
      'Kunci "pagination" tetap dipertahankan karena tidak ada di $userConfig.'
    ],
    challenge: {
      instruction: 'Gabungkan array $a = ["PHP"] dengan $b = ["Laravel"] menggunakan array_merge($a, $b).',
      starterCode: `<?php
$a = ["PHP"];
$b = ["Laravel"];
$gabung = array_merge($a, $b);
echo implode(" & ", $gabung);
?>`,
      hint: 'Panggil array_merge($a, $b).'
    },
    quiz: {
      question: 'Apa yang terjadi jika dua array yang memiliki KUNCI STRING YANG SAMA digabungkan menggunakan array_merge($arr1, $arr2)?',
      options: [
        'Nilai dari $arr2 akan menimpa (overwrite) nilai dari $arr1 untuk kunci tersebut',
        'Kunci akan otomatis digandakan',
        'Program menghasilkan error',
        'Nilai $arr1 yang menang dan menolak $arr2'
      ],
      correctIndex: 0,
      explanation: 'Pada array_merge(), nilai dari array yang diletakkan di parameter belakang akan menimpa nilai dengan string key yang sama dari array depan.'
    }
  },

  // 26. ARRAY_MERGE_RECURSIVE()
  {
    id: 'php-ref-array-merge-recursive',
    title: 'PHP array_merge_recursive()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 26,
    overview: 'Fungsi array_merge_recursive(): menggabungkan array bersarang (nested/multidimensi) secara rekursif, di mana kunci string yang sama akan digabungkan menjadi array sub-elemen alih-alih ditimpa.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">MERGE RECURSIVE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 26 / 27</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌳 Penggabungan Rekursif (array_merge_recursive)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Berbeda dengan <code>array_merge()</code> yang menimpa nilai kunci string, <code>array_merge_recursive()</code> <strong>menggabungkan kedua nilai menjadi array baru</strong> di bawah kunci yang sama secara rekursif.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$koleksi1 = [
    "warna" => ["favorit" => "merah"],
    "angka" => [1, 2]
];

$koleksi2 = [
    "warna" => ["favorit" => "hijau", "tambahan" => "biru"],
    "angka" => [3, 4]
];

$hasilRekursif = array_merge_recursive($koleksi1, $koleksi2);

echo "<h3>Hasil Penggabungan Rekursif (array_merge_recursive):</h3>";
echo "<pre style='background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 8px;'>" . print_r($hasilRekursif, true) . "</pre>";
?>`,
    codeExplanation: [
      'Kunci "favorit" tidak hilang, melainkan digabung menjadi array: ["merah", "hijau"].'
    ],
    challenge: {
      instruction: 'Pelajari bahwa array_merge_recursive menggabungkan nilai dengan kunci sama menjadi sub-array.',
      starterCode: `<?php
$a = ["tag" => "web"];
$b = ["tag" => "dev"];
$res = array_merge_recursive($a, $b);
echo "Tag 1: " . $res['tag'][0] . " | Tag 2: " . $res['tag'][1];
?>`,
      hint: 'Klik RUN untuk mencoba merge recursive.'
    },
    quiz: {
      question: 'Apa yang dilakukan array_merge_recursive() ketika menemukan dua array yang memiliki nama kunci string yang sama?',
      options: [
        'Menggabungkan kedua nilai menjadi sebuah sub-array di bawah kunci tersebut',
        'Menimpa nilai pertama dengan nilai kedua',
        'Menghapus kunci tersebut',
        'Menghentikan eksekusi skrip'
      ],
      correctIndex: 0,
      explanation: 'array_merge_recursive menyatukan nilai-nilai dengan kunci yang sama ke dalam bentuk array rekursif.'
    }
  },

  // 27. ARRAY_MULTISORT()
  {
    id: 'php-ref-array-multisort',
    title: 'PHP array_multisort()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 27,
    overview: 'Kuasai fungsi array_multisort(): mengurutkan beberapa array sekaligus atau mengurutkan array multidimensi berdasarkan kolom tertentu (seperti SQL ORDER BY).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">MULTISORT</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 27 / 27</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔢 Pengurutan Multi-Array (array_multisort)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>array_multisort()</code> dapat mengurutkan beberapa array secara serempak atau mengurutkan array multidimensi berdasarkan kolom kustom dengan flag <code>SORT_ASC</code> / <code>SORT_DESC</code> dan <code>SORT_NUMERIC</code> / <code>SORT_REGULAR</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$dataSiswa = [
    ["nama" => "Andi", "skor" => 85],
    ["nama" => "Budi", "skor" => 95],
    ["nama" => "Citra", "skor" => 90],
    ["nama" => "Dewi", "skor" => 95]
];

// 1. Ekstrak kolom skor dan nama untuk kriteria sorting
$kolomSkor = array_column($dataSiswa, 'skor');
$kolomNama = array_column($dataSiswa, 'nama');

// 2. Urutkan berdasarkan Skor DESC (tertinggi), lalu Nama ASC (A-Z)
array_multisort($kolomSkor, SORT_DESC, $kolomNama, SORT_ASC, $dataSiswa);

echo "<h3>Hasil Pengurutan Multi-Kolom (Skor DESC, Nama ASC):</h3>";
echo "<ol>";
foreach ($dataSiswa as $s) {
    echo "<li><strong>{$s['nama']}</strong> - Skor: {$s['skor']}</li>";
}
echo "</ol>";
?>`,
    codeExplanation: [
      'array_multisort bekerja persis seperti SQL "ORDER BY skor DESC, nama ASC".',
      'Budi dan Dewi sama-sama mendapat skor 95, namun Budi muncul lebih dahulu karena namanya berawalan "B" (SORT_ASC).'
    ],
    challenge: {
      instruction: 'Pelajari pengurutan multi-kolom dengan array_multisort.',
      starterCode: `<?php
$angka = [3, 1, 2];
$huruf = ["tiga", "satu", "dua"];
array_multisort($angka, $huruf);
echo "Terkecil: {$angka[0]} ({$huruf[0]})";
?>`,
      hint: 'Klik RUN untuk mencoba array_multisort.'
    },
    quiz: {
      question: 'Operasi SQL apakah yang perilakunya sangat mirip dengan fungsi array_multisort() di PHP?',
      options: [
        'ORDER BY kolom1 DESC, kolom2 ASC',
        'GROUP BY',
        'INNER JOIN',
        'CREATE TABLE'
      ],
      correctIndex: 0,
      explanation: 'array_multisort() memungkinkan pengurutan tabel array multidimensi berdasarkan beberapa kolom sekaligus layaknya klausa ORDER BY di SQL.'
    }
  }
];

module.exports = phpPart12RefArrays;
