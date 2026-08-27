// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (FILTER FUNCTIONS: 255-261)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart25RefFilter = [
  // 255. FILTER_HAS_VAR()
  {
    id: 'php-ref-filter-has-var',
    title: 'PHP filter_has_var()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 255,
    overview: 'Kuasai filter_has_var(): memeriksa apakah suatu variabel masukan eksternal (INPUT_GET, INPUT_POST, INPUT_COOKIE, INPUT_SERVER, INPUT_ENV) benar-benar dikirimkan oleh klien ke server.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PHP FILTER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 255 / 261</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Memeriksa Keberadaan Input Eksternal (filter_has_var)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>filter_has_var($input_type, $var_name)</code> memeriksa apakah variabel dengan nama tertentu benar-benar diterima dari payload HTTP request asli (bukan variabel yang dimodifikasi manual di dalam skrip PHP). Tipe input yang didukung: <code>INPUT_GET</code>, <code>INPUT_POST</code>, <code>INPUT_COOKIE</code>, <code>INPUT_SERVER</code>, dan <code>INPUT_ENV</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// 1. Periksa apakah parameter URL '?email=...' dikirimkan via GET
if (filter_has_var(INPUT_GET, "email")) {
    echo "<p style='color: green;'>✓ Parameter 'email' terdeteksi di Query String GET.</p>";
} else {
    echo "<p style='color: #64748b;'>✗ Parameter 'email' tidak dikirimkan via GET URL.</p>";
}

// 2. Periksa apakah header HTTP_USER_AGENT ada di SERVER input
if (filter_has_var(INPUT_SERVER, "HTTP_USER_AGENT")) {
    echo "<p style='color: #059669;'>✓ Browser User-Agent terdeteksi pada INPUT_SERVER.</p>";
}
?>`,
    codeExplanation: [
      'filter_has_var() membaca langsung dari raw request body dan query buffer sebelum diubah oleh PHP code.',
      'Mengembalikan boolean true jika variabel ada, atau false jika tidak ditemukan.'
    ],
    challenge: {
      instruction: 'Periksa keberadaan parameter POST "username" dengan filter_has_var.',
      starterCode: `<?php
$ada = filter_has_var(INPUT_POST, "username");
echo $ada ? "Form submitted" : "No submission";
?>`,
      hint: 'Panggil filter_has_var(INPUT_POST, "username").'
    },
    quiz: {
      question: 'Apa keunggulan filter_has_var(INPUT_GET, "q") dibandingkan isset($_GET["q"])?',
      options: [
        'filter_has_var() membaca langsung dari HTTP request asli tanpa terpengaruh jika programmer secara tidak sengaja memodifikasi nilai $_GET di dalam skrip',
        'filter_has_var() otomatis menghapus virus',
        'isset() tidak bisa membaca string',
        'Tidak ada perbedaan'
      ],
      correctIndex: 0,
      explanation: 'filter_has_var mengecek payload raw request asli yang masuk ke server web.'
    }
  },

  // 256. FILTER_ID()
  {
    id: 'php-ref-filter-id',
    title: 'PHP filter_id()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 256,
    overview: 'Fungsi filter_id(): mengembalikan nomor ID numerik internal dari suatu nama filter validasi/sanitasi PHP (seperti "validate_email", "validate_int").',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">FILTER ID</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 256 / 261</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🆔 Mengambil ID Numerik Filter (filter_id)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>filter_id($filtername)</code> mengembalikan nomor ID integer dari nama filter PHP. Misal <code>filter_id("validate_email")</code> menghasilkan konstanta numerik dari <code>FILTER_VALIDATE_EMAIL</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$idEmail = filter_id("validate_email");
$idIp    = filter_id("validate_ip");
$idUrl   = filter_id("validate_url");

echo "<h3>Nomor ID Filter Validasi PHP:</h3>";
echo "<ul>";
echo "<li>Filter 'validate_email' -> ID: <strong style='color: #4f46e5;'>$idEmail</strong> (FILTER_VALIDATE_EMAIL = " . FILTER_VALIDATE_EMAIL . ")</li>";
echo "<li>Filter 'validate_ip' -> ID: <strong style='color: #059669;'>$idIp</strong></li>";
echo "<li>Filter 'validate_url' -> ID: <strong style='color: #d97706;'>$idUrl</strong></li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'filter_id("validate_email") mengembalikan integer ID yang sama persis dengan konstanta FILTER_VALIDATE_EMAIL.'
    ],
    challenge: {
      instruction: 'Ambil ID numerik dari filter "validate_int" dengan filter_id("validate_int").',
      starterCode: `<?php
echo "ID validate_int: " . filter_id("validate_int");
?>`,
      hint: 'Panggil filter_id("validate_int").'
    },
    quiz: {
      question: 'Apa tipe data nilai kembalian dari fungsi filter_id("validate_email")?',
      options: [
        'Integer nomor ID filter (atau false jika nama filter tidak dikenal)',
        'String nama fungsi',
        'Array opsi filter',
        'Boolean true saja'
      ],
      correctIndex: 0,
      explanation: 'filter_id mengembalikan integer nomor identifier filter internal PHP.'
    }
  },

  // 257. FILTER_INPUT()
  {
    id: 'php-ref-filter-input',
    title: 'PHP filter_input()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 257,
    overview: 'Kuasai filter_input(): mengambil dan sekaligus memvalidasi / membersihkan (Sanitize) variabel input formulir HTTP (GET, POST, COOKIE) secara aman tanpa perlu mengakses variabel global $_GET/$_POST secara mentah.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">INPUT VALIDATOR</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 257 / 261</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛡️ Mengambil & Memvalidasi Input Request (filter_input)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>filter_input($type, $var_name, $filter, $options)</code> adalah standar emas untuk membaca data masukan user. Menggabungkan pengambilan nilai dan validasi dalam 1 perintah. Mengembalikan nilai yang telah divalidasi, <code>false</code> jika gagal validasi, atau <code>null</code> jika variabel tidak dikirim.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// 1. Validasi integer ID halaman dari parameter URL '?page=5'
$page = filter_input(INPUT_GET, 'page', FILTER_VALIDATE_INT, [
    'options' => ['default' => 1, 'min_range' => 1]
]);

// 2. Validasi input email dari formulir POST
$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);

echo "<h3>Hasil Penggunaan filter_input():</h3>";
echo "<p>Halaman Aktif: <strong style='color: #059669;'>Halaman $page</strong> (Otomatis default ke 1 jika input tidak valid)</p>";
echo "<p>Status Validasi Email: <strong>" . ($email !== false ? "Valid" : "Format Email Salah") . "</strong></p>";
?>`,
    codeExplanation: [
      'filter_input(INPUT_GET, "page", FILTER_VALIDATE_INT, ["options" => ["default" => 1]]) otomatis menerapkan fallback default bernilai 1 jika user menginputkan teks non-angka.',
      'Mencegah eksploitasi SQL Injection dan TypeError di layer penerimaan input controller.'
    ],
    challenge: {
      instruction: 'Ambil parameter GET "id" dengan filter_input dan validasi FILTER_VALIDATE_INT.',
      starterCode: `<?php
$id = filter_input(INPUT_GET, "id", FILTER_VALIDATE_INT);
echo $id !== false ? "ID valid" : "ID tidak valid";
?>`,
      hint: 'Panggil filter_input(INPUT_GET, "id", FILTER_VALIDATE_INT).'
    },
    quiz: {
      question: 'Apa nilai yang dikembalikan oleh filter_input(INPUT_GET, "umur", FILTER_VALIDATE_INT) jika parameter ?umur=rahasia (berupa huruf)?',
      options: [
        'Boolean false (karena gagal validasi format integer)',
        'Null',
        'Angka 0',
        'Fatal Error'
      ],
      correctIndex: 0,
      explanation: 'Jika variabel ada namun tidak lolos filter validasi, fungsi mengembalikan false.'
    }
  },

  // 258. FILTER_INPUT_ARRAY()
  {
    id: 'php-ref-filter-input-array',
    title: 'PHP filter_input_array()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 258,
    overview: 'Kuasai filter_input_array(): memvalidasi dan memfilter seluruh formulir input HTTP secara massal dalam satu definisi skema aturan validation array.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">BATCH VALIDATION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 258 / 261</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📦 Validasi Skema Formulir Massal (filter_input_array)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>filter_input_array($type, $definition)</code> memungkinkan Anda menentukan aturan validasi untuk setiap field formulir (nama, email, usia, website) secara terpusat. Fondasi pembuatan Form Request Validator pada MVC framework.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Skema Aturan Validasi Formulir Pendaftaran:
$skemaForm = [
    'nama'    => FILTER_DEFAULT,
    'email'   => FILTER_VALIDATE_EMAIL,
    'umur'    => [
        'filter'  => FILTER_VALIDATE_INT,
        'options' => ['min_range' => 17, 'max_range' => 60]
    ],
    'website' => FILTER_VALIDATE_URL
];

// Simulasi eksekusi validasi massal dari POST
$hasilValidasi = filter_input_array(INPUT_POST, $skemaForm);

echo "<h3>Skema Validasi Form Massal (filter_input_array):</h3>";
echo "<pre style='background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 8px;'>";
print_r($hasilValidasi);
echo "</pre>";
?>`,
    codeExplanation: [
      'filter_input_array memproses seluruh field form dalam satu batch eksekusi yang rapi dan terstruktur.'
    ],
    challenge: {
      instruction: 'Tentukan skema filter array untuk "email" dan "age".',
      starterCode: `<?php
$rules = [
    "email" => FILTER_VALIDATE_EMAIL,
    "age"   => FILTER_VALIDATE_INT
];
$data = filter_input_array(INPUT_POST, $rules);
echo is_array($data) ? "Validasi selesai" : "Tidak ada input";
?>`,
      hint: 'Panggil filter_input_array(INPUT_POST, $rules).'
    },
    quiz: {
      question: 'Apa manfaat utama menggunakan filter_input_array() pada form submission yang memiliki puluhan input field?',
      options: [
        'Mendefinisikan skema validasi seluruh field secara terpusat dalam 1 array tanpa perlu menulis puluhan if-else manual',
        'Menghapus database',
        'Mengirim email otomatis',
        'Menutup form'
      ],
      correctIndex: 0,
      explanation: 'filter_input_array mempermudah validasi massal formulir besar dengan skema deklaratif.'
    }
  },

  // 259. FILTER_LIST()
  {
    id: 'php-ref-filter-list',
    title: 'PHP filter_list()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 259,
    overview: 'Kuasai filter_list(): mengembalikan daftar lengkap seluruh nama filter bawaan yang didukung oleh instalasi PHP runtime saat ini.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">FILTER DISCOVERY</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 259 / 261</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📋 Daftar Seluruh Filter PHP (filter_list)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>filter_list()</code> mengembalikan Array berisi nama-nama seluruh filter yang tersedia (seperti <code>"int"</code>, <code>"boolean"</code>, <code>"float"</code>, <code>"validate_email"</code>, <code>"validate_domain"</code>, <code>"validate_url"</code>, <code>"validate_ip"</code>, <code>"special_chars"</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$semuaFilter = filter_list();

echo "<h3>Daftar Filter yang Didukung di Server PHP Ini (" . count($semuaFilter) . " Filter):</h3>";
echo "<div style='display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 8px;'>";

foreach ($semuaFilter as $namaFilter) {
    $id = filter_id($namaFilter);
    echo "<div style='background: #f1f5f9; padding: 6px 10px; border-radius: 6px; font-family: monospace; font-size: 12px;'>
            <strong>$namaFilter</strong> <span style='color: #64748b;'>(ID: $id)</span>
          </div>";
}

echo "</div>";
?>`,
    codeExplanation: [
      'filter_list() menampilkan kapabilitas filter ekstensi filter PHP.'
    ],
    challenge: {
      instruction: 'Cetak total filter yang tersedia dengan count(filter_list()).',
      starterCode: `<?php
echo "Total filter tersedia: " . count(filter_list());
?>`,
      hint: 'Panggil filter_list().'
    },
    quiz: {
      question: 'Tipe data apakah yang dihasilkan oleh pemanggilan filter_list()?',
      options: [
        'Array berisi string nama-nama seluruh filter yang didukung PHP',
        'String panjang dipisahkan koma',
        'Integer jumlah filter',
        'Objek class'
      ],
      correctIndex: 0,
      explanation: 'filter_list mengembalikan array terindeks berisi nama string filter.'
    }
  },

  // 260. FILTER_VAR()
  {
    id: 'php-ref-filter-var',
    title: 'PHP filter_var()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 260,
    overview: 'Kuasai filter_var(): fungsi paling populer di PHP untuk memvalidasi atau membersihkan nilai variabel tunggal (Email, URL, IP Address v4/v6, Integer Range, Float, Domain, Boolean, Mac Address).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">THE KING OF VALIDATION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 260 / 261</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">👑 Raja Validasi Data PHP (filter_var)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>filter_var($value, $filter, $options)</code> adalah fungsi validasi nomor 1 di PHP. Memeriksa format data standar industri tanpa perlu menulis pola Regex rumit yang rawan celah keamanan (ReDoS).
          </p>
        </div>
      </div>
    `,
    code: `<?php
// 1. Validasi Format Email
$email = "developer@devgrow.id";
$isEmailValid = filter_var($email, FILTER_VALIDATE_EMAIL);

// 2. Validasi Alamat IP Publik (Hanya IPv4 Publik, Tolak Private Range 192.168.x.x)
$ip = "8.8.8.8";
$isIpValid = filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_IPV4 | FILTER_FLAG_NO_PRIV_RANGE);

// 3. Validasi Angka Integer dengan Rentang Nilai (Range 1-100)
$nilai = 88;
$isNilaiValid = filter_var($nilai, FILTER_VALIDATE_INT, [
    "options" => ["min_range" => 1, "max_range" => 100]
]);

// 4. Validasi URL Website Resmi
$url = "https://devgrow.id/courses";
$isUrlValid = filter_var($url, FILTER_VALIDATE_URL);

echo "<h3>Hasil Pengujian filter_var():</h3>";
echo "<ul>";
echo "<li>Email '$email': " . ($isEmailValid ? "<strong style='color: green;'>✓ Valid</strong>" : "Salah") . "</li>";
echo "<li>IP Public '$ip': " . ($isIpValid ? "<strong style='color: green;'>✓ Valid IPv4 Public</strong>" : "Private / Invalid") . "</li>";
echo "<li>Rentang Nilai '$nilai' (1-100): " . ($isNilaiValid !== false ? "<strong style='color: green;'>✓ Masuk Rentang</strong>" : "Diluar Batas") . "</li>";
echo "<li>URL '$url': " . ($isUrlValid ? "<strong style='color: green;'>✓ Valid URL</strong>" : "Salah") . "</li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'filter_var mengembalikan nilai yang divalidasi jika sukses, atau boolean false jika gagal.',
      'Mendukung flag FILTER_FLAG_NO_PRIV_RANGE, FILTER_FLAG_PATH_REQUIRED, FILTER_FLAG_EMAIL_UNICODE.'
    ],
    challenge: {
      instruction: 'Validasi apakah "user@domain.com" adalah email yang valid dengan filter_var.',
      starterCode: `<?php
$cek = filter_var("user@domain.com", FILTER_VALIDATE_EMAIL);
echo $cek ? "Email Valid" : "Email Tidak Valid";
?>`,
      hint: 'Panggil filter_var("user@domain.com", FILTER_VALIDATE_EMAIL).'
    },
    quiz: {
      question: 'Filter konstanta apakah yang digunakan untuk memvalidasi alamat URL website?',
      options: [
        'FILTER_VALIDATE_URL',
        'FILTER_VALIDATE_LINK',
        'FILTER_VALIDATE_HTTP',
        'FILTER_VALIDATE_WEB'
      ],
      correctIndex: 0,
      explanation: 'FILTER_VALIDATE_URL memvalidasi apakah string merupakan skema URL RFC yang sah.'
    }
  },

  // 261. FILTER_VAR_ARRAY()
  {
    id: 'php-ref-filter-var-array',
    title: 'PHP filter_var_array()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 261,
    overview: 'Kuasai filter_var_array(): memvalidasi dan memfilter seluruh elemen Array asosiatif secara massal sesuai skema filter yang telah ditentukan.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ARRAY VALIDATION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 261 / 261</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📦 Validasi Array Data Massal (filter_var_array)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>filter_var_array($dataArray, $definition)</code> memvalidasi array payload (seperti request body JSON dari API) terhadap sekumpulan aturan filter terpusat.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Data payload yang diterima dari JSON API Client
$payload = [
    'product_id' => '105',
    'price'      => '250000.50',
    'in_stock'   => 'true',
    'seller_url' => 'https://devgrow.id'
];

// Skema Validasi Payload
$skema = [
    'product_id' => FILTER_VALIDATE_INT,
    'price'      => FILTER_VALIDATE_FLOAT,
    'in_stock'   => FILTER_VALIDATE_BOOLEAN,
    'seller_url' => FILTER_VALIDATE_URL
];

$hasil = filter_var_array($payload, $skema);

echo "<h3>Hasil Validasi Massal Payload Array (filter_var_array):</h3>";
echo "<ul>";
echo "<li>Product ID (Int): <strong>{$hasil['product_id']}</strong> (Tipe: " . gettype($hasil['product_id']) . ")</li>";
echo "<li>Harga (Float): <strong>Rp " . number_format($hasil['price'], 2) . "</strong> (Tipe: " . gettype($hasil['price']) . ")</li>";
echo "<li>In Stock (Boolean): <strong>" . ($hasil['in_stock'] ? "Tersedia (true)" : "Habis") . "</strong> (Tipe: " . gettype($hasil['in_stock']) . ")</li>";
echo "<li>Seller URL: <code>{$hasil['seller_url']}</code></li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'filter_var_array otomatis melakukan type casting: string "105" menjadi int 105, string "true" menjadi boolean true, string "250000.50" menjadi float.'
    ],
    challenge: {
      instruction: 'Uji validasi array data dengan filter_var_array.',
      starterCode: `<?php
$data = ["score" => "95"];
$rules = ["score" => FILTER_VALIDATE_INT];
$res = filter_var_array($data, $rules);
echo "Skor: " . $res['score'] . " (" . gettype($res['score']) . ")";
?>`,
      hint: 'Panggil filter_var_array($data, $rules).'
    },
    quiz: {
      question: 'Apa yang dilakukan FILTER_VALIDATE_BOOLEAN pada string "true", "1", "yes", atau "on"?',
      options: [
        'Mengonversinya menjadi nilai boolean murni true',
        'Mengembalikannya sebagai string',
        'Menghasilkan false',
        'Menghasilkan error'
      ],
      correctIndex: 0,
      explanation: 'FILTER_VALIDATE_BOOLEAN mengenali string "true", "1", "yes", "on" sebagai boolean true.'
    }
  }
];

module.exports = phpPart25RefFilter;
