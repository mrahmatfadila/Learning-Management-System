// ==========================================================
// DATA MATERI PHP: BAB 2 - PHP FORMS
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart4Forms = [
  // 1. PHP FORM HANDLING
  {
    id: 'php-forms-handling',
    title: 'PHP Form Handling',
    chapter: 'PHP Forms',
    chapterId: 'php-chap-forms',
    order: 1,
    overview: 'Pelajari dasar penanganan formulir HTML di PHP: pengiriman data dengan metode GET vs POST, penangkapan input pengguna, dan perbedaan peruntukan keduanya.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PHP FORMS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 01 / 05</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📝 Penanganan Formulir HTML di PHP</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Formulir HTML memungkinkan pengunjung mengirim data ke server web. PHP menangkap nilai setiap kolom input berdasarkan atribut <code>name="..."</code> melalui variabel superglobal <code>$_POST</code> atau <code>$_GET</code>.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800/50">
            <h4 class="font-bold text-purple-700 dark:text-purple-400 text-sm mb-1">Metode POST (Direkomendasikan)</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400">
              Data dikirim tanpa terlihat di URL, mendukung pengiriman file biner/gambar, dan tidak memiliki batasan ukuran data yang ketat.
            </p>
          </div>
          <div class="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-800/50">
            <h4 class="font-bold text-indigo-700 dark:text-indigo-400 text-sm mb-1">Metode GET</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400">
              Data dikirim melalui URL Query String. Bagus untuk filter pencarian yang bisa di-bookmark, namun tidak boleh digunakan untuk kata sandi.
            </p>
          </div>
        </div>
      </div>
    `,
    code: `<?php
// Penanganan Form Sederhana (Self-Processing)
$nama = "";
$email = "";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nama = htmlspecialchars($_POST["nama"] ?? "");
    $email = htmlspecialchars($_POST["email"] ?? "");
    
    echo "<div style='padding: 15px; background: #ecfdf5; border: 1px solid #10b981; border-radius: 10px; margin-bottom: 15px;'>";
    echo "<h4 style='color: #065f46; margin: 0 0 5px 0;'>✅ Data Formulir Berhasil Diterima!</h4>";
    echo "<p style='margin: 0;'>Nama: <strong>$nama</strong> | Email: <strong>$email</strong></p>";
    echo "</div>";
}
?>

<form method="POST" style="background: #f8fafc; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0; max-width: 450px;">
  <h4 style="margin-top: 0; color: #1e293b;">Formulir Pendaftaran Siswa:</h4>
  
  <div style="margin-bottom: 12px;">
    <label style="display: block; font-size: 12px; font-weight: bold; margin-bottom: 4px;">Nama Lengkap:</label>
    <input type="text" name="nama" value="<?php echo $nama; ?>" placeholder="Masukkan nama..." style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box;" required />
  </div>

  <div style="margin-bottom: 15px;">
    <label style="display: block; font-size: 12px; font-weight: bold; margin-bottom: 4px;">Alamat Email:</label>
    <input type="email" name="email" value="<?php echo $email; ?>" placeholder="nama@domain.com" style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box;" required />
  </div>

  <button type="submit" style="background: #4f46e5; color: white; border: none; padding: 10px 18px; border-radius: 8px; font-weight: bold; cursor: pointer;">
    Kirim Data Pendaftaran 🚀
  </button>
</form>`,
    codeExplanation: [
      'Atribut method="POST" pada tag form memberitahu browser untuk mengirimkan data ke body HTTP.',
      'Setiap kolom input dikenali oleh PHP melalui atribut name (seperti name="nama" -> $_POST["nama"]).',
      'htmlspecialchars() melindungi aplikasi dari serangan injeksi kode HTML berbahaya.'
    ],
    challenge: {
      instruction: 'Tambahkan input baru untuk nomor telepon dengan name="telepon" dan tangkap nilainya dengan $_POST["telepon"].',
      starterCode: `<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $telepon = htmlspecialchars($_POST["telepon"] ?? "");
    echo "Nomor Telepon: $telepon";
}
?>`,
      hint: 'Tangkap nilai menggunakan $_POST["telepon"].'
    },
    quiz: {
      question: 'Atribut HTML apakah pada elemen <input> yang digunakan oleh PHP untuk mengenali kunci data yang dikirimkan?',
      options: [
        'name',
        'id',
        'class',
        'value'
      ],
      correctIndex: 0,
      explanation: 'PHP memetakan data formulir berdasarkan atribut name="..." dari elemen input (misal: name="email" dibaca sebagai $_POST[\'email\']).'
    }
  },

  // 2. PHP FORM VALIDATION
  {
    id: 'php-forms-validation',
    title: 'PHP Form Validation',
    chapter: 'PHP Forms',
    chapterId: 'php-chap-forms',
    order: 2,
    overview: 'Kuasai teknik validasi dan sanitasi input form: pencegahan Cross-Site Scripting (XSS), fungsi pembersih kustom test_input(), trim(), dan stripslashes().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">KEAMANAN & VALIDASI</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 02 / 05</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛡️ Sanitasi & Validasi Input Formulir</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <strong>Prinsip Keamanan Utama:</strong> <em>"Jangan pernah mempercayai input dari pengguna (Never Trust User Input)!"</em>. Penyerang dapat menyisipkan skrip JavaScript jahat (serangan XSS) atau karakter perusak database.
          </p>
        </div>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 space-y-3 border border-slate-800">
          <h3 class="text-base font-black text-amber-400">3 Langkah Standar Fungsi Pembersih Input (Sanitasi):</h3>
          <ul class="space-y-2 text-xs md:text-sm text-slate-300">
            <li><code>1. trim($data)</code>: Menghapus spasi, tab, dan baris baru di awal & akhir teks.</li>
            <li><code>2. stripslashes($data)</code>: Menghapus karakter backslash (\\) yang tidak diinginkan.</li>
            <li><code>3. htmlspecialchars($data)</code>: Mengubah karakter khusus seperti <code>&lt;</code> dan <code>&gt;</code> menjadi entitas HTML <code>&amp;lt;</code> dan <code>&amp;gt;</code> sehingga script berbahaya tidak dapat dieksekusi oleh browser.</li>
          </ul>
        </div>
      </div>
    `,
    code: `<?php
// Fungsi Sanitasi Standar W3Schools & OWASP
function bersihkanInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

$inputKotor = "   <script>alert('Akun Anda Dihack!');</script> Halo Dunia! \\\\   ";
$inputAman = bersihkanInput($inputKotor);

echo "<h3>Demonstrasi Pencegahan XSS:</h3>";
echo "<p><strong>Input Mentah (Berbahaya):</strong></p>";
echo "<pre style='background: #fee2e2; color: #991b1b; padding: 10px; border-radius: 8px;'>" . htmlspecialchars($inputKotor) . "</pre>";

echo "<p><strong>Hasil Sanitasi (Aman Disimpan ke DB):</strong></p>";
echo "<pre style='background: #ecfdf5; color: #065f46; padding: 10px; border-radius: 8px;'>$inputAman</pre>";
?>`,
    codeExplanation: [
      'Fungsi bersihkanInput() menggabungkan trim(), stripslashes(), dan htmlspecialchars().',
      'Skrip <script>alert(...)</script> diubah menjadi teks murni &lt;script&gt;... sehingga aman ditampilkan kembali ke halaman web tanpa dieksekusi.'
    ],
    challenge: {
      instruction: 'Buat fungsi sanitasi sanitasiTeks($str) yang memanggil trim() dan htmlspecialchars().',
      starterCode: `<?php
function sanitasiTeks($str) {
    return htmlspecialchars(trim($str));
}

$teks = "   <b>Teks Tebal</b>   ";
echo sanitasiTeks($teks);
?>`,
      hint: 'Panggil htmlspecialchars(trim($str)).'
    },
    quiz: {
      question: 'Fungsi PHP apakah yang digunakan untuk mengubah karakter khusus HTML seperti < dan > menjadi entitas aman guna mencegah serangan XSS?',
      options: [
        'htmlspecialchars()',
        'strip_tags()',
        'md5()',
        'addslashes()'
      ],
      correctIndex: 0,
      explanation: 'htmlspecialchars() mengubah karakter khusus seperti <, >, &, ", dan \' menjadi entitas HTML sehingga skrip tidak dapat dieksekusi browser.'
    }
  },

  // 3. PHP FORM REQUIRED
  {
    id: 'php-forms-required',
    title: 'PHP Form Required',
    chapter: 'PHP Forms',
    chapterId: 'php-chap-forms',
    order: 3,
    overview: 'Pelajari cara membuat validasi kolom wajib diisi (Required Fields) di sisi server (Server-Side Validation) beserta penanganan pesan error per kolom input.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">REQUIRED FIELDS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 03 / 05</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚠️ Validasi Kolom Wajib Diisi (Required)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Meskipun HTML5 memiliki atribut <code>required</code>, pengguna dapat mematikannya melalui inspect element. Oleh karena itu, <strong>validasi server-side di PHP menggunakan <code>empty()</code> adalah keharusan mutlak</strong>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Inisialisasi variabel dan pesan error
$nama = $email = $gender = "";
$namaErr = $emailErr = $genderErr = "";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // 1. Validasi Nama
    if (empty($_POST["nama"])) {
        $namaErr = "* Nama lengkap wajib diisi!";
    } else {
        $nama = htmlspecialchars(trim($_POST["nama"]));
    }

    // 2. Validasi Email
    if (empty($_POST["email"])) {
        $emailErr = "* Alamat email wajib diisi!";
    } else {
        $email = htmlspecialchars(trim($_POST["email"]));
    }

    // 3. Validasi Jenis Kelamin
    if (empty($_POST["gender"])) {
        $genderErr = "* Silakan pilih jenis kelamin!";
    } else {
        $gender = htmlspecialchars($_POST["gender"]);
    }
}
?>

<form method="POST" style="background: #f8fafc; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0; max-width: 450px;">
  <h4 style="margin-top: 0; color: #1e293b;">Formulir dengan Validasi Server:</h4>
  
  <div style="margin-bottom: 10px;">
    <label style="font-size: 12px; font-weight: bold;">Nama:</label>
    <input type="text" name="nama" value="<?php echo $nama; ?>" style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box;" />
    <span style="color: red; font-size: 11px; font-weight: bold;"><?php echo $namaErr; ?></span>
  </div>

  <div style="margin-bottom: 10px;">
    <label style="font-size: 12px; font-weight: bold;">Email:</label>
    <input type="text" name="email" value="<?php echo $email; ?>" style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box;" />
    <span style="color: red; font-size: 11px; font-weight: bold;"><?php echo $emailErr; ?></span>
  </div>

  <div style="margin-bottom: 15px;">
    <label style="font-size: 12px; font-weight: bold; display: block; margin-bottom: 4px;">Gender:</label>
    <label><input type="radio" name="gender" value="Laki-laki" <?php if ($gender === "Laki-laki") echo "checked"; ?>> Laki-laki</label>
    <label style="margin-left: 10px;"><input type="radio" name="gender" value="Perempuan" <?php if ($gender === "Perempuan") echo "checked"; ?>> Perempuan</label>
    <div style="color: red; font-size: 11px; font-weight: bold;"><?php echo $genderErr; ?></div>
  </div>

  <button type="submit" style="background: #4f46e5; color: white; border: none; padding: 10px 18px; border-radius: 8px; font-weight: bold; cursor: pointer;">
    Submit Validasi
  </button>
</form>`,
    codeExplanation: [
      'empty($_POST["nama"]) mengecek apakah nilai variabel kosong, null, atau string spasi kosong.',
      'Jika input kosong, variabel pesan error ($namaErr) diisi dengan string peringatan dan ditampilkan tepat di bawah kolom input terkait.',
      'Nilai input yang sudah diketik pengguna dipertahankan kembali dengan value="<?php echo $nama; ?>" agar pengguna tidak perlu mengetik ulang.'
    ],
    challenge: {
      instruction: 'Uji fungsi empty() untuk mengecek apakah variabel $pesan kosong.',
      starterCode: `<?php
$pesan = "";
if (empty($pesan)) {
    echo "Pesan tidak boleh kosong!";
}
?>`,
      hint: 'Gunakan empty($pesan).'
    },
    quiz: {
      question: 'Mengapa validasi form wajib dilakukan di sisi Server (PHP) meskipun form HTML sudah memiliki validasi di sisi browser?',
      options: [
        'Karena validasi browser dapat dengan mudah dinonaktifkan atau dimanipulasi oleh penyerang melalui inspect element',
        'Karena PHP tidak bisa membaca tag HTML',
        'Karena validasi browser memperlambat server',
        'Agar warna tombol submit berubah menjadi biru'
      ],
      correctIndex: 0,
      explanation: 'Validasi sisi klien (browser) hanya untuk kenyamanan pengguna (UX), sedangkan validasi sisi server (PHP) adalah benteng keamanan sesungguhnya yang tidak dapat dimanipulasi.'
    }
  },

  // 4. PHP FORM URL/E-MAIL
  {
    id: 'php-forms-url-email',
    title: 'PHP Form URL/E-mail',
    chapter: 'PHP Forms',
    chapterId: 'php-chap-forms',
    order: 4,
    overview: 'Pelajari cara validasi format email dan URL website yang sah menggunakan fungsi filter_var() bawaan PHP dengan FILTER_VALIDATE_EMAIL dan FILTER_VALIDATE_URL serta preg_match() untuk validasi huruf alfabet nama.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">FORMAT VALIDATION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 04 / 05</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📧 Validasi Format Email, URL, dan Huruf</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Selain memastikan kolom tidak kosong, Anda wajib memastikan data yang diinput sesuai format yang diharapkan (misal: email memiliki <code>@</code> dan nama domain yang sah).
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-purple-600 dark:text-purple-400 block mb-1">Validasi Email</strong>
            <code>filter_var($email, FILTER_VALIDATE_EMAIL)</code>
            <p class="text-slate-600 dark:text-slate-400 mt-1">Mengembalikan alamat email jika valid, atau false jika format salah.</p>
          </div>
          <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <strong class="text-indigo-600 dark:text-indigo-400 block mb-1">Validasi URL Website</strong>
            <code>filter_var($url, FILTER_VALIDATE_URL)</code>
            <p class="text-slate-600 dark:text-slate-400 mt-1">Memastikan string diawali dengan http:// atau https:// dan format domain sah.</p>
          </div>
        </div>
      </div>
    `,
    code: `<?php
$testEmail1 = "developer@devgrow.id";
$testEmail2 = "bukan_email_valid.com";

$testUrl1 = "https://devgrow.id/courses";
$testUrl2 = "htp://link_rusak";

echo "<h3>Hasil Pengujian filter_var():</h3>";

echo "<p><strong>Email 1 ('$testEmail1'):</strong> " . (filter_var($testEmail1, FILTER_VALIDATE_EMAIL) ? "<span style='color: green;'>✓ Format Sah</span>" : "<span style='color: red;'>✗ Format Salah</span>") . "</p>";

echo "<p><strong>Email 2 ('$testEmail2'):</strong> " . (filter_var($testEmail2, FILTER_VALIDATE_EMAIL) ? "<span style='color: green;'>✓ Format Sah</span>" : "<span style='color: red;'>✗ Format Salah</span>") . "</p>";

echo "<hr>";

echo "<p><strong>URL 1 ('$testUrl1'):</strong> " . (filter_var($testUrl1, FILTER_VALIDATE_URL) ? "<span style='color: green;'>✓ URL Sah</span>" : "<span style='color: red;'>✗ URL Salah</span>") . "</p>";

echo "<p><strong>URL 2 ('$testUrl2'):</strong> " . (filter_var($testUrl2, FILTER_VALIDATE_URL) ? "<span style='color: green;'>✓ URL Sah</span>" : "<span style='color: red;'>✗ URL Salah</span>") . "</p>";
?>`,
    codeExplanation: [
      'filter_var($email, FILTER_VALIDATE_EMAIL) adalah standar bawaan PHP tercepat dan paling andal untuk validasi email menurut standar RFC.',
      'FILTER_VALIDATE_URL memverifikasi struktur protokol dan hostname dari alamat tautan web.'
    ],
    challenge: {
      instruction: 'Uji apakah variabel $web = "https://google.com" adalah URL yang sah menggunakan filter_var().',
      starterCode: `<?php
$web = "https://google.com";
if (filter_var($web, FILTER_VALIDATE_URL)) {
    echo "URL Google Valid!";
}
?>`,
      hint: 'Gunakan filter_var($web, FILTER_VALIDATE_URL).'
    },
    quiz: {
      question: 'Konstanta filter bawaan PHP apakah yang digunakan bersama filter_var() untuk memverifikasi format alamat email?',
      options: [
        'FILTER_VALIDATE_EMAIL',
        'FILTER_CHECK_EMAIL',
        'EMAIL_VALIDATE_PATTERN',
        'FILTER_SANITIZE_EMAIL'
      ],
      correctIndex: 0,
      explanation: 'FILTER_VALIDATE_EMAIL adalah konstanta filter bawaan PHP untuk memvalidasi keabsahan format alamat email.'
    }
  },

  // 5. PHP FORM COMPLETE
  {
    id: 'php-forms-complete',
    title: 'PHP Form Complete',
    chapter: 'PHP Forms',
    chapterId: 'php-chap-forms',
    order: 5,
    overview: 'Bangun studi kasus lengkap formulir pendaftaran interaktif: sanitasi input, validasi required, validasi regex huruf & email, penahanan nilai form saat error (sticky form), dan pengiriman data sukses.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">STUDI KASUS LENGKAP</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 05 / 05</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏆 Aplikasi Formulir Lengkap & Aman</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Menggabungkan seluruh konsep: sanitasi XSS, validasi kolom wajib, regex nama alfabet, filter email, radio button, dan retensi nilai input (Sticky Form).
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Inisialisasi variabel
$nama = $email = $website = $komentar = $gender = "";
$namaErr = $emailErr = $websiteErr = $genderErr = "";
$isSukses = false;

function uji_input($data) {
    return htmlspecialchars(stripslashes(trim($data)));
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Validasi Nama
    if (empty($_POST["nama"])) {
        $namaErr = "* Nama wajib diisi";
    } else {
        $nama = uji_input($_POST["nama"]);
        if (!preg_match("/^[a-zA-Z-' ]*$/", $nama)) {
            $namaErr = "* Hanya boleh huruf dan spasi";
        }
    }

    // Validasi Email
    if (empty($_POST["email"])) {
        $emailErr = "* Email wajib diisi";
    } else {
        $email = uji_input($_POST["email"]);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $emailErr = "* Format email tidak sah";
        }
    }

    // Validasi Website (Opsional)
    if (!empty($_POST["website"])) {
        $website = uji_input($_POST["website"]);
        if (!filter_var($website, FILTER_VALIDATE_URL)) {
            $websiteErr = "* Format URL tidak sah";
        }
    }

    $komentar = uji_input($_POST["komentar"] ?? "");

    // Validasi Gender
    if (empty($_POST["gender"])) {
        $genderErr = "* Silakan pilih gender";
    } else {
        $gender = uji_input($_POST["gender"]);
    }

    // Jika tidak ada error sama sekali
    if (empty($namaErr) && empty($emailErr) && empty($websiteErr) && empty($genderErr)) {
        $isSukses = true;
    }
}
?>

<?php if ($isSukses): ?>
  <div style="background: #ecfdf5; border: 2px solid #10b981; padding: 20px; border-radius: 12px; margin-bottom: 20px; max-width: 500px;">
    <h3 style="color: #065f46; margin-top: 0;">🎉 Registrasi Berhasil!</h3>
    <p><strong>Nama:</strong> <?php echo $nama; ?></p>
    <p><strong>Email:</strong> <?php echo $email; ?></p>
    <p><strong>Website:</strong> <?php echo $website ?: '-'; ?></p>
    <p><strong>Gender:</strong> <?php echo $gender; ?></p>
    <p><strong>Pesan:</strong> <?php echo $komentar ?: '-'; ?></p>
  </div>
<?php endif; ?>

<form method="POST" style="background: #f8fafc; border: 1px solid #cbd5e1; padding: 22px; border-radius: 14px; max-width: 500px;">
  <h3 style="margin-top: 0; color: #0f172a;">Formulir Pendaftaran Lengkap</h3>

  <div style="margin-bottom: 12px;">
    <label style="font-weight: bold; font-size: 12px;">Nama Lengkap: <span style="color: red;">*</span></label>
    <input type="text" name="nama" value="<?php echo $nama; ?>" style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box;" />
    <span style="color: red; font-size: 11px; font-weight: bold;"><?php echo $namaErr; ?></span>
  </div>

  <div style="margin-bottom: 12px;">
    <label style="font-weight: bold; font-size: 12px;">Email: <span style="color: red;">*</span></label>
    <input type="text" name="email" value="<?php echo $email; ?>" style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box;" />
    <span style="color: red; font-size: 11px; font-weight: bold;"><?php echo $emailErr; ?></span>
  </div>

  <div style="margin-bottom: 12px;">
    <label style="font-weight: bold; font-size: 12px;">Website / Portfolio (Opsional):</label>
    <input type="text" name="website" value="<?php echo $website; ?>" placeholder="https://..." style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box;" />
    <span style="color: red; font-size: 11px; font-weight: bold;"><?php echo $websiteErr; ?></span>
  </div>

  <div style="margin-bottom: 12px;">
    <label style="font-weight: bold; font-size: 12px;">Pesan / Catatan:</label>
    <textarea name="komentar" rows="3" style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box;"><?php echo $komentar; ?></textarea>
  </div>

  <div style="margin-bottom: 16px;">
    <label style="font-weight: bold; font-size: 12px; display: block; margin-bottom: 4px;">Gender: <span style="color: red;">*</span></label>
    <label><input type="radio" name="gender" value="Laki-laki" <?php if ($gender === "Laki-laki") echo "checked"; ?>> Laki-laki</label>
    <label style="margin-left: 12px;"><input type="radio" name="gender" value="Perempuan" <?php if ($gender === "Perempuan") echo "checked"; ?>> Perempuan</label>
    <div style="color: red; font-size: 11px; font-weight: bold;"><?php echo $genderErr; ?></div>
  </div>

  <button type="submit" style="background: #4f46e5; color: white; border: none; padding: 11px 22px; border-radius: 8px; font-weight: bold; cursor: pointer;">
    Simpan & Daftar Sekarang
  </button>
</form>`,
    codeExplanation: [
      'Pola regex /^[a-zA-Z-\' ]*$/ memastikan bahwa kolom nama hanya memuat huruf alfabet, tanda petik satu, strip, dan spasi.',
      'Sistem Sticky Form mempertahankan isi nilai input ($nama, $email, $gender) sehingga form tidak ter-reset saat ada error.',
      'Kondisi $isSukses menampilkan kartu ringkasan data hijau saat seluruh data berhasil lolos validasi.'
    ],
    challenge: {
      instruction: 'Uji coba ketik nama dan email yang valid di form, lalu submit untuk melihat notifikasi pendaftaran berhasil.',
      starterCode: `<?php
// Silakan isi formulir di panel preview dan klik RUN untuk menguji validasi lengkap.
?>`,
      hint: 'Klik RUN untuk merender antarmuka formulir interaktif.'
    },
    quiz: {
      question: 'Apa manfaat dari teknik "Sticky Form" pada pembuatan formulir web di PHP?',
      options: [
        'Mempertahankan teks yang sudah diketik pengguna di dalam input form jika terjadi error validasi, sehingga pengguna tidak perlu mengetik ulang dari awal',
        'Membuat form menempel di bagian bawah layar saat scroll',
        'Mengunci form agar tidak bisa diedit',
        'Menyimpan form ke database secara otomatis tanpa klik submit'
      ],
      correctIndex: 0,
      explanation: 'Sticky Form adalah teknik menampilkan kembali data yang telah diketik pengguna (misal value="<?php echo $nama; ?>") saat ada kolom lain yang salah/gagal validasi.'
    }
  }
];

module.exports = phpPart4Forms;
