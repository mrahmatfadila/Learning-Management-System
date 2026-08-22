import { HtmlLessonItem } from './htmlPart2';

export const htmlLessonsPart4Forms: HtmlLessonItem[] = [
  // ── 1. HTML Forms ─────────────────────────────────────────────────────────
  {
    title: 'HTML Forms - Dasar & Pengenalan Formulir Web',
    chapter: 'HTML Forms',
    type: 'code',
    order: 84,
    overview: 'Formulir HTML (<form>) digunakan untuk mengumpulkan input dari pengguna sebelum dikirimkan ke server backend untuk diproses.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">📝 Apa itu Formulir Web?</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Formulir adalah jembatan interaksi dua arah antara pengunjung website dan sistem database. Setiap kali Anda melakukan registrasi akun, login, pencarian Google, atau checkout belanja, Anda sedang berinteraksi dengan <code>&lt;form&gt;</code> HTML.
        </p>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto border border-slate-800">
          <div class="text-amber-400 mb-2 font-bold">// Struktur Dasar Tag Form:</div>
          <div>&lt;<span class="text-rose-400">form</span> <span class="text-sky-400">action</span>="/proses.php" <span class="text-sky-400">method</span>="POST"&gt;</div>
          <div class="ml-4">&lt;<span class="text-purple-400">label</span> <span class="text-sky-400">for</span>="nama"&gt;Nama Lengkap:&lt;/<span class="text-purple-400">label</span>&gt;&lt;<span class="text-rose-400">br</span>&gt;</div>
          <div class="ml-4">&lt;<span class="text-emerald-400">input</span> <span class="text-sky-400">type</span>="text" <span class="text-sky-400">id</span>="nama" <span class="text-sky-400">name</span>="nama"&gt;&lt;<span class="text-rose-400">br</span>&gt;</div>
          <div class="ml-4">&lt;<span class="text-emerald-400">input</span> <span class="text-sky-400">type</span>="submit" <span class="text-sky-400">value</span>="Kirim"&gt;</div>
          <div>&lt;/<span class="text-rose-400">form</span>&gt;</div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo Formulir HTML</title>
  <style>
    body { font-family: sans-serif; padding: 20px; background: #f8fafc; }
    form { background: white; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0; max-width: 350px; }
    label { display: block; margin-bottom: 6px; font-weight: bold; font-size: 14px; }
    input[type="text"] { width: 100%; padding: 8px; margin-bottom: 15px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; }
    input[type="submit"] { background: #4f46e5; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer; font-weight: bold; }
  </style>
</head>
<body>
  <h2>Formulir Pendaftaran Siswa</h2>
  <form action="/api/register" method="POST">
    <label for="fname">Nama Depan:</label>
    <input type="text" id="fname" name="fname" placeholder="Masukkan nama depan...">

    <label for="lname">Nama Belakang:</label>
    <input type="text" id="lname" name="lname" placeholder="Masukkan nama belakang...">

    <input type="submit" value="Daftar Sekarang">
  </form>
</body>
</html>`,
    codeExplanation: [
      'Tag <form> bertindak sebagai kontainer pembungkus elemen input.',
      'Tag <label for="id"> memberikan label teks yang terhubung dengan elemen input terkait.',
      'Atribut name="fname" adalah kunci variabel data yang dikirimkan ke server backend.',
      'input type="submit" membuat tombol pengirim form.'
    ],
    quiz: {
      question: 'Atribut apakah pada tag <input> yang wajib ada agar nilai isian data dapat dikenali dan diproses oleh server backend?',
      options: ['id', 'name', 'class', 'style'],
      answer: 1,
      explanation: 'Atribut name adalah identifier utama kunci data yang dikirimkan bersama payload HTTP ke server backend.'
    }
  },

  {
    title: 'HTML Forms - Exercises (Membuat Form Kontak Sederhana)',
    chapter: 'HTML Forms',
    type: 'challenge',
    order: 85,
    overview: 'Latihan membuat formulir dengan label dan input teks.',
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">✍️ Latihan Form Kontak</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Buatlah sebuah <code>&lt;form action="/kirim"&gt;</code> yang memuat <code>&lt;label for="email"&gt;Email:&lt;/label&gt;</code>, <code>&lt;input type="text" id="email" name="email"&gt;</code>, dan <code>&lt;input type="submit" value="Kirim"&gt;</code>.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Form</title>
</head>
<body>

</body>
</html>`,
    challenge: {
      instruction: 'Buat tag <form action="/kirim"><label for="email">Email:</label><input type="text" id="email" name="email"><input type="submit" value="Kirim"></form>.',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Form</title>
</head>
<body>

</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Form</title>
</head>
<body>
  <form action="/kirim">
    <label for="email">Email:</label>
    <input type="text" id="email" name="email">
    <input type="submit" value="Kirim">
  </form>
</body>
</html>`,
      hint: 'Gunakan <form action="/kirim"> dengan label, input text, dan input submit di dalamnya'
    }
  },

  // ── 2. HTML Form Attributes ───────────────────────────────────────────────
  {
    title: 'HTML Form Attributes - Action, Method, Target & Enctype',
    chapter: 'HTML Form Attributes',
    type: 'code',
    order: 86,
    overview: 'Atribut pada elemen <form> menentukan ke mana data dikirim, metode protokol HTTP yang digunakan, serta format pengkodeannya.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">⚙️ 5 Atribut Utama Elemen &lt;form&gt;</h2>
        <div class="space-y-3 text-xs">
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-orange-500 font-mono">1. action="URL"</strong>: Menentukan alamat file/endpoint API backend tujuan pengiriman data (contoh: <code>action="/api/login"</code>).
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-orange-500 font-mono">2. method="GET" vs "POST"</strong>:
            <ul class="list-disc list-inside mt-1 text-slate-600 dark:text-slate-400 space-y-1">
              <li><strong>GET</strong>: Mengirimkan data via query URL (cocok untuk pencarian, data terlihat di address bar, tidak aman untuk password).</li>
              <li><strong>POST</strong>: Mengirimkan data di dalam request body HTTP (aman untuk data sensitif, registrasi, password, dan file upload).</li>
            </ul>
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-orange-500 font-mono">3. target="_blank" | "_self"</strong>: Menentukan apakah respon server dibuka di tab baru atau tab saat ini.
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-orange-500 font-mono">4. enctype="multipart/form-data"</strong>: <strong>Wajib</strong> digunakan jika form memiliki fitur upload file gambar/dokumen.
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-orange-500 font-mono">5. autocomplete="on" | "off"</strong>: Mengaktifkan/menonaktifkan fitur saran otomatis dari browser.
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo Atribut Form</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Upload Berkas (enctype multipart/form-data)</h2>
  <form action="/api/upload" method="POST" enctype="multipart/form-data" target="_blank" autocomplete="off">
    <label for="foto">Pilih Foto Profil:</label><br>
    <input type="file" id="foto" name="foto"><br><br>
    <input type="submit" value="Upload Foto">
  </form>
</body>
</html>`,
    codeExplanation: [
      'method="POST" mengamankan transmisi data berkas di dalam HTTP body.',
      'enctype="multipart/form-data" memecah file biner menjadi chunk agar dapat dikirimkan ke server.',
      'target="_blank" menampilkan hasil upload di tab browser baru.'
    ],
    quiz: {
      question: 'Metode HTTP apakah yang wajib digunakan pada form saat mengirimkan data sensitif seperti kata sandi (password) atau formulir upload berkas?',
      options: ['GET', 'POST', 'PUT', 'HEAD'],
      answer: 1,
      explanation: 'Metode POST membungkus data di dalam HTTP Request Body tanpa memperlihatkannya di address bar URL.'
    }
  },

  {
    title: 'HTML Form Attributes - Exercises (Konfigurasi Form POST)',
    chapter: 'HTML Form Attributes',
    type: 'challenge',
    order: 87,
    overview: 'Latihan mengatur atribut action dan method pada formulir.',
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">✍️ Latihan Atribut Form</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Buatlah tag <code>&lt;form action="/login" method="POST" autocomplete="off"&gt;</code> yang memuat tombol submit <code>&lt;button type="submit"&gt;Masuk&lt;/button&gt;</code>.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Atribut</title>
</head>
<body>

</body>
</html>`,
    challenge: {
      instruction: 'Buat tag <form action="/login" method="POST" autocomplete="off"><button type="submit">Masuk</button></form>.',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Atribut</title>
</head>
<body>

</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Atribut</title>
</head>
<body>
  <form action="/login" method="POST" autocomplete="off">
    <button type="submit">Masuk</button>
  </form>
</body>
</html>`,
      hint: 'Gunakan <form action="/login" method="POST" autocomplete="off">'
    }
  },

  // ── 3. HTML Form Elements ─────────────────────────────────────────────────
  {
    title: 'HTML Form Elements - input, textarea, select, fieldset & datalist',
    chapter: 'HTML Form Elements',
    type: 'code',
    order: 88,
    overview: 'HTML menyediakan beragam elemen formulir untuk berbagai keperluan input teks panjang, pilihan dropdown, opsi grup, dan saran otomatis.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🧩 6 Elemen Formulir Penting</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code class="text-orange-500 font-bold">&lt;textarea&gt;</code>: Input teks panjang multi-baris (pesan, deskripsi, alamat).
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code class="text-orange-500 font-bold">&lt;select&gt; & &lt;option&gt;</code>: Menu pilihan dropdown.
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code class="text-orange-500 font-bold">&lt;fieldset&gt; & &lt;legend&gt;</code>: Mengelompokkan elemen formulir dengan garis batas kotak berlabel.
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code class="text-orange-500 font-bold">&lt;datalist&gt;</code>: Menyediakan daftar opsi autocomplete otomatis pada input teks.
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code class="text-orange-500 font-bold">&lt;optgroup&gt;</code>: Mengelompokkan opsi-opsi pilihan dropdown dengan sub-header.
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code class="text-orange-500 font-bold">&lt;output&gt;</code>: Menampilkan hasil perhitungan matematika formulir.
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo Form Elements</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Kombinasi Elemen Form Lengkap</h2>
  <form action="/submit" method="POST">
    <fieldset style="border-radius: 8px; border: 1px solid #94a3b8; padding: 15px;">
      <legend><strong>Biodata Diri</strong></legend>
      
      <!-- Select Dropdown -->
      <label for="kursus">Pilih Kursus:</label>
      <select id="kursus" name="kursus">
        <option value="html">HTML5 Mastery</option>
        <option value="css">CSS3 Styling</option>
        <option value="js">JavaScript Modern</option>
      </select><br><br>

      <!-- Datalist Autocomplete -->
      <label for="kota">Kota Asal (Ketik untuk Saran):</label>
      <input list="daftar-kota" id="kota" name="kota" placeholder="Contoh: Jakarta">
      <datalist id="daftar-kota">
        <option value="Jakarta">
        <option value="Bandung">
        <option value="Surabaya">
        <option value="Medan">
      </datalist><br><br>

      <!-- Textarea -->
      <label for="alamat">Alamat Lengkap:</label><br>
      <textarea id="alamat" name="alamat" rows="3" cols="30" placeholder="Tulis alamat rumah..."></textarea><br><br>

      <button type="submit">Kirim Data</button>
    </fieldset>
  </form>
</body>
</html>`,
    codeExplanation: [
      '<fieldset> dan <legend> mengelompokkan form menjadi seksi visual yang rapi.',
      '<select> dan <option> membuat dropdown pilihan tunggal.',
      '<datalist> terhubung ke tag <input> melalui atribut list="daftar-kota" untuk memunculkan saran pencarian.'
    ],
    quiz: {
      question: 'Tag manakah yang digunakan untuk membuat area input teks multi-baris panjang (seperti komentar atau ulasan)?',
      options: ['<text>', '<textbox>', '<textarea>', '<input type="multiline">'],
      answer: 2,
      explanation: 'Tag <textarea> dirancang khusus untuk menampung teks berukuran panjang yang terdiri dari banyak baris.'
    }
  },

  {
    title: 'HTML Form Elements - Code Challenge (Form Registrasi Kursus)',
    chapter: 'HTML Form Elements',
    type: 'challenge',
    order: 89,
    overview: 'Tantangan membuat formulir dropdown dan textarea.',
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🚀 Tantangan: Pilihan Metode Belajar</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Buatlah sebuah <code>&lt;select name="metode"&gt;</code> yang memiliki dua opsi: <code>&lt;option value="online"&gt;Online&lt;/option&gt;</code> dan <code>&lt;option value="offline"&gt;Offline&lt;/option&gt;</code>.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Select</title>
</head>
<body>

</body>
</html>`,
    challenge: {
      instruction: 'Buat tag <select name="metode"><option value="online">Online</option><option value="offline">Offline</option></select>.',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Select</title>
</head>
<body>

</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Select</title>
</head>
<body>
  <select name="metode">
    <option value="online">Online</option>
    <option value="offline">Offline</option>
  </select>
</body>
</html>`,
      hint: 'Gunakan <select name="metode"> yang membungkus dua tag <option>'
    }
  },

  // ── 4. HTML Input Types ───────────────────────────────────────────────────
  {
    title: 'HTML Input Types - Text, Password, Email, Number, Date & Color',
    chapter: 'HTML Input Types',
    type: 'code',
    order: 90,
    overview: 'HTML5 memperkenalkan lebih dari 20 tipe input yang memicu keyboard khusus di perangkat HP dan validasi otomatis di browser.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🎛️ Ragam Tipe Input HTML5</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-2.5 text-xs font-mono">
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code>type="text"</code>: Teks biasa 1 baris.
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code>type="password"</code>: Karakter disamarkan (titik/bintang).
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code>type="email"</code>: Validasi format email (@) & keyboard email HP.
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code>type="number"</code>: Angka murni dengan tombol panah naik/turun.
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code>type="date"</code>: Kalender pemilih tanggal visual.
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code>type="color"</code>: Color picker pemilih palet warna.
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code>type="range"</code>: Slider penggeser nilai angka.
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code>type="checkbox"</code>: Pilihan kotak centang (bisa pilih banyak).
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <code>type="radio"</code>: Pilihan tombol bulat (hanya pilih 1).
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo Input Types</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Showcase Tipe Input HTML5</h2>
  <form action="/test" method="GET">
    <p>Password: <input type="password" name="pwd" placeholder="Kata sandi rahasia"></p>
    <p>Email: <input type="email" name="user_email" placeholder="nama@email.com"></p>
    <p>Tanggal Lahir: <input type="date" name="tgl_lahir"></p>
    <p>Pilih Warna Favorit: <input type="color" name="warna_fav" value="#4f46e5"></p>
    <p>Volume (Slider): <input type="range" name="volume" min="0" max="100"></p>
    
    <p>Jenis Kelamin (Radio):<br>
      <input type="radio" id="pria" name="gender" value="L"> <label for="pria">Pria</label>
      <input type="radio" id="wanita" name="gender" value="P"> <label for="wanita">Wanita</label>
    </p>

    <p>Hobi (Checkbox):<br>
      <input type="checkbox" id="coding" name="hobi" value="coding"> <label for="coding">Coding</label>
      <input type="checkbox" id="gaming" name="hobi" value="gaming"> <label for="gaming">Gaming</label>
    </p>
  </form>
</body>
</html>`,
    codeExplanation: [
      'Radio button dengan name yang sama ("gender") memastikan hanya satu pilihan yang dapat aktif sekaligus.',
      'type="color" memunculkan palet warna interaktif bawaan OS/browser.'
    ],
    quiz: {
      question: 'Tipe input apakah yang digunakan untuk memilih tanggal lengkap menggunakan antarmuka visual kalender bawaan?',
      options: ['type="calendar"', 'type="date"', 'type="time"', 'type="datetime"'],
      answer: 1,
      explanation: 'type="date" memicu widget kalender pemilih hari, bulan, dan tahun.'
    }
  },

  {
    title: 'HTML Input Types - Code Challenge (Form Login Modern)',
    chapter: 'HTML Input Types',
    type: 'challenge',
    order: 91,
    overview: 'Tantangan membuat form login dengan input email dan password.',
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🚀 Tantangan: Form Login</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Buatlah form login yang memuat <code>&lt;input type="email" name="email"&gt;</code> dan <code>&lt;input type="password" name="password"&gt;</code>.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Login</title>
</head>
<body>

</body>
</html>`,
    challenge: {
      instruction: 'Buat tag <form><input type="email" name="email"><input type="password" name="password"></form>.',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Login</title>
</head>
<body>

</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Login</title>
</head>
<body>
  <form>
    <input type="email" name="email">
    <input type="password" name="password">
  </form>
</body>
</html>`,
      hint: 'Gunakan <form> dengan dua input: type="email" dan type="password"'
    }
  },

  // ── 5. HTML Input Attributes ──────────────────────────────────────────────
  {
    title: 'HTML Input Attributes - Value, Readonly, Disabled, Required & Pattern',
    chapter: 'HTML Input Attributes',
    type: 'code',
    order: 92,
    overview: 'Atribut input mengatur perilaku, batasan karakter, nilai awal, dan validasi formulir di sisi browser secara instan.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🛡️ Atribut Validasi & Kontrol Input</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-orange-500 font-mono">required</strong>: Wajib diisi (form tidak bisa dikirim jika kosong).
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-orange-500 font-mono">placeholder="..."</strong>: Teks petunjuk abu-abu sebelum diketik.
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-orange-500 font-mono">readonly vs disabled</strong>: Readonly tidak bisa diedit tapi nilainya terkirim; Disabled tidak bisa diklik dan nilainya TIDAK terkirim.
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-orange-500 font-mono">min, max, step</strong>: Batas rentang angka minimal, maksimal, dan kelipatan.
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-orange-500 font-mono">maxlength & minlength</strong>: Batas jumlah karakter minimal dan maksimal.
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-orange-500 font-mono">pattern="[0-9]{4}"</strong>: Validasi format menggunakan Regular Expression (Regex).
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo Input Attributes</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Validasi Form Terproteksi</h2>
  <form action="/checkout" method="POST">
    <!-- Input Wajib & Placeholder -->
    <p>Nama: <input type="text" name="nama" placeholder="Ketik nama lengkap" required></p>
    
    <!-- Input Angka dengan Batas Min-Max -->
    <p>Jumlah Tiket (1 - 5): <input type="number" name="qty" min="1" max="5" value="1"></p>

    <!-- Input Regex PIN 6 Digit -->
    <p>PIN Keamanan (6 Digit Angka): <input type="text" name="pin" pattern="[0-9]{6}" title="Harus 6 digit angka" required></p>

    <!-- Input Readonly -->
    <p>Kode Promo: <input type="text" name="promo" value="DISKON50" readonly></p>

    <button type="submit">Beli Sekarang</button>
  </form>
</body>
</html>`,
    codeExplanation: [
      'required mencegah submit form jika input masih kosong.',
      'pattern="[0-9]{6}" memastikan hanya angka tepat 6 digit yang diterima.',
      'readonly mengunci teks agar pengguna tidak dapat mengubah kode promo.'
    ],
    quiz: {
      question: 'Apakah perbedaan mendasar antara atribut readonly dan disabled pada elemen input saat form di-submit?',
      options: ['Nilai input readonly tetap dikirim ke server, sedangkan input disabled tidak dikirim sama sekali', 'Tidak ada bedanya, keduanya sama persis', 'Input disabled tetap dikirim ke server', 'Input readonly tidak bisa dilihat di layar'],
      answer: 0,
      explanation: 'Elemen bertanda readonly tetap menyertakan nilainya ke backend saat disubmit, sedangkan disabled diabaikan total oleh form submit.'
    }
  },

  {
    title: 'HTML Input Attributes - Exercises (Membuat Input Wajib Diisi)',
    chapter: 'HTML Input Attributes',
    type: 'challenge',
    order: 93,
    overview: 'Latihan menerapkan atribut required dan placeholder.',
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">✍️ Latihan Input Attributes</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Buatlah tag <code>&lt;input type="text" name="username" placeholder="Masukkan username" required&gt;</code>.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Input Attributes</title>
</head>
<body>

</body>
</html>`,
    challenge: {
      instruction: 'Buat tag <input type="text" name="username" placeholder="Masukkan username" required>.',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Input Attributes</title>
</head>
<body>

</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Input Attributes</title>
</head>
<body>
  <input type="text" name="username" placeholder="Masukkan username" required>
</body>
</html>`,
      hint: 'Gunakan <input type="text" name="username" placeholder="Masukkan username" required>'
    }
  },

  // ── 6. Input Form Attributes ──────────────────────────────────────────────
  {
    title: 'Input Form Attributes - Override Aksi Form pada Tombol Submit',
    chapter: 'Input Form Attributes',
    type: 'code',
    order: 94,
    overview: 'Atribut formaction, formmethod, formtarget, dan formnovalidate memungkinkan sebuah tombol input/submit menimpa (override) konfigurasi bawaan tag <form>.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🔄 Atribut Form Override</h2>
        <div class="space-y-2.5 text-xs font-mono">
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>formaction="URL"</strong>: Mengubah alamat backend tujuan khusus untuk tombol ini.
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>formmethod="POST"</strong>: Mengubah metode HTTP khusus untuk tombol ini.
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>formtarget="_blank"</strong>: Membuka hasil submit tombol ini di tab baru.
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>formnovalidate</strong>: Melewati validasi required/pattern (sangat berguna untuk tombol "Simpan Draf").
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo Input Form Attributes</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Form dengan Multi-Action Submit</h2>
  <form action="/publish" method="POST">
    <p>Judul Artikel: <input type="text" name="judul" required></p>
    <p>Konten: <textarea name="isi" required></textarea></p>

    <!-- Submit Utama (Kirim & Publish) -->
    <button type="submit">🚀 Terbitkan Artikel</button>

    <!-- Tombol Simpan Draf (Override Action & Lewati Validasi) -->
    <button type="submit" formaction="/save-draft" formnovalidate style="background: #94a3b8; color: white;">
      💾 Simpan sebagai Draf (Tanpa Validasi)
    </button>
  </form>
</body>
</html>`,
    codeExplanation: [
      'Tombol pertama mengirim data ke /publish dengan validasi wajib diisi.',
      'Tombol kedua menimpa URL tujuan ke /save-draft menggunakan formaction dan mengabaikan pengecekan required menggunakan formnovalidate.'
    ],
    quiz: {
      question: 'Atribut apakah yang dipasang pada tombol submit agar formulir dapat dikirim tanpa melakukan pengecekan validasi required?',
      options: ['formskip', 'formnovalidate', 'formbypass', 'novalidateform'],
      answer: 1,
      explanation: 'Atribut formnovalidate pada tombol submit menginstruksikan browser untuk mengirim data tanpa menjalankan validasi HTML5.'
    }
  },

  {
    title: 'Input Form Attributes - Exercises (Tombol Override Form Action)',
    chapter: 'Input Form Attributes',
    type: 'challenge',
    order: 95,
    overview: 'Latihan membuat tombol submit yang menimpa alamat action form.',
    theory: `
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">✍️ Latihan Formaction</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Buatlah tombol <code>&lt;button type="submit" formaction="/admin"&gt;Kirim ke Admin&lt;/button&gt;</code>.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Formaction</title>
</head>
<body>

</body>
</html>`,
    challenge: {
      instruction: 'Buat tag <button type="submit" formaction="/admin">Kirim ke Admin</button>.',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Formaction</title>
</head>
<body>

</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan Formaction</title>
</head>
<body>
  <button type="submit" formaction="/admin">Kirim ke Admin</button>
</body>
</html>`,
      hint: 'Gunakan <button type="submit" formaction="/admin">Kirim ke Admin</button>'
    }
  }
];
