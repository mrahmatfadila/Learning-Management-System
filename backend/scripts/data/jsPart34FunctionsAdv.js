module.exports = [
  // ── 217. FUNCTIONS ADVANCED ─────────────────────────────────────────────
  {
    id: 'functions-advanced',
    title: 'Functions Advanced',
    chapter: 'JS Functions',
    chapterId: 'js-chap-funcadv',
    order: 217,
    overview: 'Konsep Fungsi Tingkat Lanjut di JavaScript: paradigma First-Class Citizens, Higher-Order Functions (HOF), fungsi sebagai nilai variabel, argumen fungsi lain, dan return value.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS FUNCTIONS ADVANCED</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 217 / 227</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">👑 Fungsi sebagai First-Class Citizens & Higher-Order Functions</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Di JavaScript, fungsi adalah warga negara kelas satu (*First-Class Citizens*). Artinya, fungsi dapat disimpan di dalam variabel, dikirimkan sebagai argumen ke fungsi lain, atau dikembalikan dari dalam fungsi sebagai nilai kembalian (*Higher-Order Functions*).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Functions Advanced Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Higher-Order Function Factory</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // Higher-Order Function yang mengembalikan fungsi baru (Pabrik Fungsi)
    function buatPengali(faktor) {
      return function(angka) {
        return angka * faktor;
      };
    }

    const kaliDua = buatPengali(2);
    const kaliSepuluh = buatPengali(10);

    log += '• kaliDua(25) ➔ <strong>' + kaliDua(25) + '</strong><br>';
    log += '• kaliSepuluh(25) ➔ <strong>' + kaliSepuluh(25) + '</strong><br><br>';
    log += 'Higher-Order Functions adalah fondasi dari paradigma Functional Programming!';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'buatPengali(faktor) adalah Higher-Order Function karena menghasilkan fungsi baru sebagai return value-nya.',
      'kaliDua dan kaliSepuluh mempertahankan nilai faktor masing-masing melalui mekanisme closure.'
    ],
    quiz: {
      question: 'Apa definisi dari Higher-Order Function di JavaScript?',
      options: [
        'Fungsi yang memiliki lebih dari 100 baris kode',
        'Fungsi yang menerima fungsi lain sebagai argumen atau mengembalikan fungsi sebagai return value-nya',
        'Fungsi yang hanya berjalan di server',
        'Fungsi yang otomatis dipanggil saat startup'
      ],
      answer: 1,
      explanation: 'Higher-Order Function adalah fungsi yang menerima fungsi lain sebagai parameter atau mengembalikan fungsi sebagai hasilnya.'
    },
    challenge: {
      title: 'Tantangan: Buat Higher-Order Function',
      description: 'Lengkapi fungsi yang mengembalikan fungsi `function factory() { return () => "OK"; }`.',
      startingCode: `function factory() {\n  // Kembalikan arrow function di bawah:\n}`,
      solution: `function factory() {\n  return () => "OK";\n}`
    }
  },

  // ── 218. FUNCTION DEFINITIONS ───────────────────────────────────────────
  {
    id: 'function-definitions-adv',
    title: 'Function Definitions',
    chapter: 'JS Functions',
    chapterId: 'js-chap-funcadv',
    order: 218,
    overview: '4 Cara Mendefinisikan Fungsi di JavaScript: Function Declaration vs Function Expression vs Arrow Function vs new Function(), serta dampaknya terhadap Hoisting dan Execution Context.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS FUNCTIONS ADVANCED</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 218 / 227</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📐 4 Cara Deklarasi Fungsi & Perbedaan Hoisting</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <strong>Function Declaration</strong> di-hoist sepenuhnya ke atas scope sehingga dapat dipanggil sebelum baris deklarasinya, sedangkan <strong>Function Expression</strong> dan <strong>Arrow Function</strong> terikat pada aturan Temporal Dead Zone variabelnya.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Function Definitions Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Perilaku Hoisting Function Declaration</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. Function Declaration (Bisa dipanggil SEBELUM baris kodenya!)
    log += '• ' + sapaDeclaration('Rahmat') + ' (Hoisting Aktif ✅)<br><br>';

    function sapaDeclaration(nama) {
      return 'Halo ' + nama + ', ini Function Declaration!';
    }

    // 2. Function Expression
    const sapaExpression = function(nama) {
      return 'Halo ' + nama + ', ini Function Expression!';
    };

    // 3. Arrow Function
    const sapaArrow = (nama) => 'Halo ' + nama + ', ini Arrow Function!';

    log += '• ' + sapaExpression('Alex') + '<br>';
    log += '• ' + sapaArrow('Siti');

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Function Declaration di-hoist bersama definisi isinya, menjadikannya dapat dipanggil di awal script.',
      'Function Expression yang disimpan di dalam const/let tidak bisa dipanggil sebelum diinisialisasi.'
    ],
    quiz: {
      question: 'Bentuk pendefinisian fungsi manakah yang di-hoist sepenuhnya oleh interpreter JavaScript sehingga dapat dipanggil sebelum baris deklarasinya?',
      options: [
        'Arrow Function (() => {})',
        'Function Declaration (function nama() {})',
        'Anonymous Function Expression',
        'Method Objek'
      ],
      answer: 1,
      explanation: '`Function Declaration` di-hoist sepenuhnya beserta isi implementasinya ke bagian atas scope eksekusi.'
    },
    challenge: {
      title: 'Tantangan: Buat Function Declaration',
      description: 'Deklarasikan `function tes() { return true; }`.',
      startingCode: `// Tulis deklarasi di bawah:\n`,
      solution: `function tes() { return true; }`
    }
  },

  // ── 219. FUNCTION CALLBACKS ─────────────────────────────────────────────
  {
    id: 'function-callbacks-adv',
    title: 'Function Callbacks',
    chapter: 'JS Functions',
    chapterId: 'js-chap-funcadv',
    order: 219,
    overview: 'Mendalami pola Callbacks di JavaScript: Synchronous Callbacks (array methods) vs Asynchronous Callbacks (timers, event listeners), bahaya Callback Hell, dan mitigasi error-first callbacks.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS FUNCTIONS ADVANCED</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 219 / 227</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📞 Pola Callback & Arsitektur Asinkronus</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Callback adalah fungsi yang diteruskan ke fungsi lain sebagai argumen untuk dieksekusi kemudian. Callback adalah fondasi utama arsitektur asynchronous di Node.js dan browser.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Function Callbacks Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Pola Error-First Callback (Standar Node.js)</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // Simulasi Fungsi Asinkronus dengan Error-First Callback
    function ambilDataUser(id, callback) {
      log += '1. Mengambil data user ID: ' + id + '...<br>';
      
      setTimeout(() => {
        if (id <= 0) {
          callback(new Error('ID User tidak valid!'), null);
        } else {
          callback(null, { id: id, nama: 'Rahmat Fadila', role: 'Fullstack Dev' });
        }
      }, 500);
    }

    ambilDataUser(101, (err, user) => {
      if (err) {
        log += '❌ Error: ' + err.message;
      } else {
        log += '2. ✅ <strong>Callback Sukses Terpanggil:</strong> ' + user.nama + ' (' + user.role + ')';
      }
      document.getElementById('output').innerHTML = log;
    });
  </script>

</body>
</html>`,
    codeExplanation: [
      'Pola Error-First Callback menerima argumen pertama sebagai error (jika ada) dan argumen kedua sebagai data sukses.',
      'Jika callback bersarang terlalu dalam (Callback Hell), modern JavaScript menyelesaikannya dengan Promises dan async/await.'
    ],
    quiz: {
      question: 'Pada konvensi Error-First Callback, parameter pertama fungsi callback selalu digunakan untuk?',
      options: [
        'Data hasil sukses',
        'Objek Error (atau null jika tidak ada error)',
        'Nomor baris kode',
        'Status HTTP'
      ],
      answer: 1,
      explanation: 'Konvensi Error-First Callback menempatkan parameter `(error, data)` di mana parameter pertama adalah objek error jika terjadi kesalahan.'
    },
    challenge: {
      title: 'Tantangan: Eksekusi Fungsi Callback',
      description: 'Panggil callback `cb("Sukses");`.',
      startingCode: `function proses(cb) {\n  // Panggil cb di bawah:\n}`,
      solution: `function proses(cb) {\n  cb("Sukses");\n}`
    }
  },

  // ── 220. FUNCTION THIS ──────────────────────────────────────────────────
  {
    id: 'function-this-adv',
    title: 'Function this',
    chapter: 'JS Functions',
    chapterId: 'js-chap-funcadv',
    order: 220,
    overview: 'Menyelami 4 Aturan Binding kata kunci this: Default Binding, Implicit Binding, Explicit Binding (call/apply/bind), New Binding, dan perilaku Lexical this pada Arrow Functions.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS FUNCTIONS ADVANCED</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 220 / 227</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎯 4 Aturan Sakti Kata Kunci "this"</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Nilai kata kunci <code>this</code> ditentukan oleh <strong>bagaimana dan di mana fungsi tersebut dipanggil</strong> (*call-site*), bukan di mana fungsi tersebut didefinisikan (kecuali Arrow Functions yang menggunakan <em>Lexical this</em>).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Function this Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Implicit Binding vs Lexical Arrow this</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const siswa = {
      nama: 'Rahmat Fadila',
      skill: 'JavaScript',
      
      // Regular Method: Implicit Binding (this = objek siswa)
      perkenalanReguler: function() {
        return 'Nama: ' + this.nama;
      },

      // Arrow Function di dalam method mempertahankan this dari scope luar (Lexical this)
      ujiTimer: function() {
        setTimeout(() => {
          log += '• Timer Arrow Function mempertahankan this.nama: <strong>' + this.nama + '</strong> ✅';
          document.getElementById('output').innerHTML = log;
        }, 100);
      }
    };

    log += '• ' + siswa.perkenalanReguler() + '<br>';
    siswa.ujiTimer();
  </script>

</body>
</html>`,
    codeExplanation: [
      'Pada method reguler, this merujuk pada objek di sebelah kiri tanda titik saat dipanggil (siswa.perkenalanReguler()).',
      'Arrow Function tidak memiliki binding this sendiri, melainkan mengambil this dari lexical enclosing context di sekitarnya.'
    ],
    quiz: {
      question: 'Bagaimanakah Arrow Function () => {} menentukan nilai kata kunci this di dalamnya?',
      options: [
        'Otomatis merujuk ke objek window',
        'Mengambil nilai this dari scope leksikal di luarnya (Lexical this)',
        'Selalu bernilai undefined',
        'Bisa diubah bebas dengan method .call()'
      ],
      answer: 1,
      explanation: 'Arrow function tidak memiliki `this` sendiri, melainkan mewarisi `this` secara leksikal dari scope tempat ia didefinisikan.'
    },
    challenge: {
      title: 'Tantangan: Implicit Binding Method',
      description: 'Kembalikan `this.nama` pada method `getName() { return this.nama; }`.',
      startingCode: `const obj = {\n  nama: "LMS",\n  getName() {\n    return this.nama;\n  }\n};`,
      solution: `const obj = {\n  nama: "LMS",\n  getName() {\n    return this.nama;\n  }\n};`
    }
  },

  // ── 221. FUNCTION CALL ──────────────────────────────────────────────────
  {
    id: 'function-call-adv',
    title: 'Function Call',
    chapter: 'JS Functions',
    chapterId: 'js-chap-funcadv',
    order: 221,
    overview: 'Function.prototype.call(): mengeksekusi fungsi secara langsung dengan menentukan nilai konteks this secara eksplisit dan mengirimkan argumen secara individual sekuensial.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS FUNCTIONS ADVANCED</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 221 / 227</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📞 Peminjaman Method dengan Function.prototype.call()</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Method <code>call(thisArg, arg1, arg2, ...)</code> memungkinkan kita meminjam method dari sebuah objek dan mengeksekusinya pada objek lain dengan menetapkan konteks <code>this</code> secara eksplisit.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Function call Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Eksplisit Binding dengan .call()</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    function sapaPengguna(salam, role) {
      return salam + ', Saya ' + this.nama + ' sebagai ' + role + '!';
    }

    const user1 = { nama: 'Rahmat' };
    const user2 = { nama: 'Alex' };

    // Memanggil sapaPengguna dengan mengarahkan this ke user1
    const hasil1 = sapaPengguna.call(user1, 'Halo Selamat Pagi', 'Lead Instructor');
    const hasil2 = sapaPengguna.call(user2, 'Hai', 'Frontend Engineer');

    log += '• Hasil 1 (.call user1): <strong>' + hasil1 + '</strong><br>';
    log += '• Hasil 2 (.call user2): <strong>' + hasil2 + '</strong>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'sapaPengguna.call(user1, "Halo", "Instructor") menetapkan this = user1 dan menyalurkan argumen individual ke fungsi.'
    ],
    quiz: {
      question: 'Bagaimana cara mengirimkan argumen fungsi saat menggunakan method Function.prototype.call()?',
      options: [
        'Sebagai satu array tunggal',
        'Secara individual dipisahkan dengan tanda koma: fn.call(thisArg, arg1, arg2)',
        'Sebagai objek JSON',
        'Tidak bisa menerima argumen'
      ],
      answer: 1,
      explanation: 'Method `.call()` menerima argumen satu per satu secara berurutan dipisahkan tanda koma.'
    },
    challenge: {
      title: 'Tantangan: Panggil Fungsi dengan Call',
      description: 'Panggil `fn.call(obj);`.',
      startingCode: `function run(fn, obj) {\n  return fn.call(obj);\n}`,
      solution: `function run(fn, obj) {\n  return fn.call(obj);\n}`
    }
  },

  // ── 222. FUNCTION APPLY ─────────────────────────────────────────────────
  {
    id: 'function-apply-adv',
    title: 'Function Apply',
    chapter: 'JS Functions',
    chapterId: 'js-chap-funcadv',
    order: 222,
    overview: 'Function.prototype.apply(): mengeksekusi fungsi dengan menentukan nilai this eksplisit dan menerima parameter dalam bentuk array tunggal [arg1, arg2].',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS FUNCTIONS ADVANCED</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 222 / 227</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📋 Eksekusi dengan Argumen Array: Function.prototype.apply()</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Perbedaan utama antara <code>.call()</code> dan <code>.apply()</code> adalah: <code>.apply()</code> menerima argumen fungsi dalam bentuk <strong>Array</strong> (<code>fn.apply(thisArg, [arg1, arg2])</code>).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Function apply Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Trik Mencari Angka Maksimum dengan .apply()</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const daftarNilai = [45, 88, 95, 72, 99, 60];

    // Math.max tidak menerima array secara langsung, namun .apply memecah array menjadi argumen!
    const nilaiTertinggi = Math.max.apply(null, daftarNilai);

    log += '• Daftar Nilai Siswa: [' + daftarNilai.join(', ') + ']<br>';
    log += '• Nilai Tertinggi (Math.max.apply): <strong>' + nilaiTertinggi + '</strong> ✅';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Math.max.apply(null, [10, 20, 30]) menyalurkan seluruh elemen array sebagai argumen individual ke Math.max().'
    ],
    quiz: {
      question: 'Apa perbedaan mendasar antara method .call() dan .apply() di JavaScript?',
      options: [
        '.call() menerima argumen array, sedangkan .apply() menerima argumen koma',
        '.apply() menerima argumen dalam bentuk Array, sedangkan .call() menerima argumen individual terpisah koma',
        '.apply() hanya bisa digunakan pada objek Date',
        'Tidak ada perbedaan, keduanya identik'
      ],
      answer: 1,
      explanation: '`.apply()` menerima argumen fungsi yang dibungkus dalam bentuk Array (contoh `fn.apply(thisArg, [a, b])`).'
    },
    challenge: {
      title: 'Tantangan: Panggil Fungsi dengan Apply',
      description: 'Panggil `fn.apply(obj, [10, 20]);`.',
      startingCode: `function runApply(fn, obj, args) {\n  return fn.apply(obj, args);\n}`,
      solution: `function runApply(fn, obj, args) {\n  return fn.apply(obj, args);\n}`
    }
  },

  // ── 223. FUNCTION BIND ──────────────────────────────────────────────────
  {
    id: 'function-bind-adv',
    title: 'Function Bind',
    chapter: 'JS Functions',
    chapterId: 'js-chap-funcadv',
    order: 223,
    overview: 'Function.prototype.bind(): mengunci konteks this secara permanen dan menghasilkan fungsi baru (*bound function*), pencegahan kehilangan this pada event handler, dan Partial Application (Currying).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS FUNCTIONS ADVANCED</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 223 / 227</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔒 Mengunci Konteks Permanen: Function.prototype.bind()</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Berbeda dengan <code>.call()</code> dan <code>.apply()</code> yang langsung mengeksekusi fungsi, <strong><code>.bind()</code> mengembalikan fungsi baru</strong> dengan konteks <code>this</code> yang telah terkunci permanen.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Function bind Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Pencegahan Hilangnya Konteks pada Callback</h2>
  <button id="btnKlik" style="padding: 8px 16px; background: #0284c7; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">
    Klik Saya (Test Bind)
  </button>
  <div id="output" style="margin-top: 15px; background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    const modulKursus = {
      namaModul: 'Advanced JavaScript Mastery',
      tampilkanJudul: function() {
        document.getElementById('output').innerHTML = 'Modul: <strong>' + this.namaModul + '</strong> (this aman terkunci!) ✅';
      }
    };

    // Mengunci method ke objek modulKursus dengan .bind()
    const boundHandler = modulKursus.tampilkanJudul.bind(modulKursus);

    document.getElementById('btnKlik').addEventListener('click', boundHandler);
  </script>

</body>
</html>`,
    codeExplanation: [
      'Tanpa .bind(modulKursus), event listener akan mengarahkan this ke elemen button HTML dan menghasilkan this.namaModul = undefined.',
      '.bind() menjamin method selalu terikat ke modulKursus di mana pun dipanggil.'
    ],
    quiz: {
      question: 'Apa hasil kembalian dari pemanggilan method Function.prototype.bind(thisArg)?',
      options: [
        'Nilai hasil eksekusi fungsi langsung',
        'Fungsi baru dengan konteks this yang terkunci secara permanen',
        'Objek Promise',
        'Angka status code'
      ],
      answer: 1,
      explanation: '`bind()` mengembalikan fungsi baru (*bound function*) dengan nilai `this` yang terkunci permanen ke `thisArg`.'
    },
    challenge: {
      title: 'Tantangan: Kunci Konteks dengan Bind',
      description: 'Kunci fungsi `const boundFn = fn.bind(obj);`.',
      startingCode: `function kunci(fn, obj) {\n  return fn.bind(obj);\n}`,
      solution: `function kunci(fn, obj) {\n  return fn.bind(obj);\n}`
    }
  },

  // ── 224. FUNCTION IIFE ──────────────────────────────────────────────────
  {
    id: 'function-iife-adv',
    title: 'Function IIFE',
    chapter: 'JS Functions',
    chapterId: 'js-chap-funcadv',
    order: 224,
    overview: 'Immediately Invoked Function Expression (IIFE): pola fungsi yang langsung dieksekusi saat didefinisikan (function() {})(), isolasi private scope, dan perlindungan global namespace.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS FUNCTIONS ADVANCED</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 224 / 227</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛡️ Isolasi Scope Mandiri: IIFE</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <strong>IIFE (Immediately Invoked Function Expression)</strong> adalah fungsi JavaScript yang langsung dieksekusi tepat saat pertama kali didefinisikan. Pola ini sangat populer untuk membuat variabel privat dan mencegah tabrakan nama variabel di global scope.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Function IIFE Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Modul Privat Mandiri dengan IIFE</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    // IIFE Module Pattern
    const CounterModul = (function() {
      let hitunganRahasia = 0; // Variabel privat (tidak bisa diakses langsung dari window!)

      return {
        tambah: function() { hitunganRahasia++; },
        ambilNilai: function() { return hitunganRahasia; }
      };
    })();

    CounterModul.tambah();
    CounterModul.tambah();

    let log = '';
    log += '• Nilai Counter Modul: <strong>' + CounterModul.ambilNilai() + '</strong><br>';
    log += '• Akses langsung window.hitunganRahasia: <strong>' + typeof window.hitunganRahasia + '</strong> (Aman Terisolasi!) ✅';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Sintaks (function() { ... })() membungkus fungsi dalam tanda kurung ekspresi lalu memanggilnya langsung dengan ().',
      'Variabel di dalam IIFE tidak akan bocor ke window global namespace.'
    ],
    quiz: {
      question: 'Apa manfaat utama dari penggunaan pola IIFE (Immediately Invoked Function Expression)?',
      options: [
        'Membuat kode berjalan otomatis di GPU',
        'Menciptakan ruang lingkup privat (private scope) dan mencegah polusi pada global namespace',
        'Menghapus penggunaan memory RAM',
        'Mempercepat kecepatan internet'
      ],
      answer: 1,
      explanation: 'IIFE menciptakan scope privat terisolasi sehingga variabel di dalamnya tidak mencemari global window scope.'
    },
    challenge: {
      title: 'Tantangan: Buat Struktur IIFE Sederhana',
      description: 'Lengkapi struktur IIFE `(function() { return 1; })();`.',
      startingCode: `let res = (function() {\n  return 1;\n})();`,
      solution: `let res = (function() {\n  return 1;\n})();`
    }
  },

  // ── 225. FUNCTION CLOSURES ──────────────────────────────────────────────
  {
    id: 'function-closures-adv',
    title: 'Function Closures',
    chapter: 'JS Functions',
    chapterId: 'js-chap-funcadv',
    order: 225,
    overview: 'Konsep Sakti Closures di JavaScript: lexical scope preservation, data encapsulation (private state), fungsi pabrik memoization, dan pencegahan stale closures.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS FUNCTIONS ADVANCED</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 225 / 227</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧠 Keajaiban Closure: Mengingat Scope Lingkungannya</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <strong>Closure</strong> adalah kombinasi antara sebuah fungsi dan lingkungan leksikal tempat fungsi tersebut dibuat. Closure memungkinkan fungsi dalam tetap <strong>mengingat dan mengakses variabel di fungsi luarnya</strong> bahkan setelah fungsi luar tersebut selesai dieksekusi!
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Function Closures Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Enkapsulasi State Privat dengan Closure</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    function buatAkunBank(namaPemilik, saldoAwal) {
      let saldo = saldoAwal; // Variabel privat yang dilindungi closure!

      return {
        setor: function(jumlah) {
          saldo += jumlah;
          return 'Setor Rp ' + jumlah.toLocaleString('id-ID') + ' | Saldo: Rp ' + saldo.toLocaleString('id-ID');
        },
        cekSaldo: function() {
          return 'Saldo ' + namaPemilik + ': Rp ' + saldo.toLocaleString('id-ID');
        }
      };
    }

    const rekeningRahmat = buatAkunBank('Rahmat', 500000);
    log += '• ' + rekeningRahmat.cekSaldo() + '<br>';
    log += '• ' + rekeningRahmat.setor(250000) + '<br><br>';
    log += 'Variabel "saldo" tidak bisa dimanipulasi dari luar selain lewat method resmi (Enkapsulasi Sempurna) ✅';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Fungsi setor dan cekSaldo mempertahankan referensi hidup ke variabel saldo di scope induknya (buatAkunBank).',
      'Ini adalah pola OOP Enkapsulasi murni tanpa memerlukan class.'
    ],
    quiz: {
      question: 'Bagaimana fungsi anak di dalam Closure dapat mengakses variabel fungsi induknya?',
      options: [
        'Melalui koneksi internet',
        'Karena fungsi mempertahankan referensi ke Lexical Scope lingkungannya saat dibuat',
        'Dengan menyalin data ke LocalStorage',
        'Hanya bisa diakses jika variabel bertipe global'
      ],
      answer: 1,
      explanation: 'Closure mempertahankan referensi hidup ke Lexical Scope induknya di memori heap.'
    },
    challenge: {
      title: 'Tantangan: Buat Counter dengan Closure',
      description: 'Lengkapi closure `function createCounter() { let c = 0; return () => ++c; }`.',
      startingCode: `function createCounter() {\n  let c = 0;\n  return () => ++c;\n}`,
      solution: `function createCounter() {\n  let c = 0;\n  return () => ++c;\n}`
    }
  },

  // ── 226. FUNCTION REFERENCE ─────────────────────────────────────────────
  {
    id: 'function-reference-adv',
    title: 'Function Reference',
    chapter: 'JS Functions',
    chapterId: 'js-chap-funcadv',
    order: 226,
    overview: 'Kamus referensi lengkap properti & method objek Function: Function.length (jumlah parameter), Function.name, arguments object, Function.prototype.toString(), dan Function constructor.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS FUNCTIONS ADVANCED</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 226 / 227</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📚 Kamus Properti & Method Objek Function</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Di JavaScript, fungsi adalah objek instansi dari <code>Function.prototype</code> dan memiliki metadata bawaan seperti <code>name</code> dan <code>length</code>.
          </p>
        </div>

        <div class="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-xl text-xs">
          <table class="w-full text-left">
            <thead class="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white">
              <tr>
                <th class="p-3">Properti / Method</th>
                <th class="p-3">Fungsi & Peran</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-800 font-mono text-slate-600 dark:text-slate-300">
              <tr><td class="p-3 font-bold text-amber-500">fn.name</td><td>Nama string dari fungsi tersebut.</td></tr>
              <tr><td class="p-3 font-bold text-amber-500">fn.length</td><td>Jumlah parameter formal yang diharapkan fungsi (arity).</td></tr>
              <tr><td class="p-3 font-bold text-amber-500">fn.call(this, ...args)</td><td>Eksekusi dengan konteks this eksplisit & argumen koma.</td></tr>
              <tr><td class="p-3 font-bold text-amber-500">fn.apply(this, [args])</td><td>Eksekusi dengan konteks this eksplisit & argumen array.</td></tr>
              <tr><td class="p-3 font-bold text-amber-500">fn.bind(this, ...args)</td><td>Mengembalikan bound function dengan this terkunci permanen.</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Function Reference Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Inspeksi Metadata Objek Fungsi</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    function hitungPajakDiskon(harga, pajak, diskon) {
      return harga + pajak - diskon;
    }

    let log = '';
    log += '• Nama Fungsi (fn.name): <strong>' + hitungPajakDiskon.name + '</strong><br>';
    log += '• Jumlah Parameter Formal (fn.length): <strong>' + hitungPajakDiskon.length + ' parameter</strong><br>';
    log += '• Apakah instanceof Function? ' + (hitungPajakDiskon instanceof Function);

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'fn.length menghitung jumlah parameter formal yang dideklarasikan pada fungsi (disebut sebagai arity).'
    ],
    quiz: {
      question: 'Properti bawaan apakah pada objek fungsi yang mengembalikan jumlah parameter formal yang dideklarasikan fungsi tersebut?',
      options: [
        'fn.size',
        'fn.count',
        'fn.length',
        'fn.params'
      ],
      answer: 2,
      explanation: '`fn.length` mengembalikan jumlah parameter formal yang diterima oleh fungsi.'
    },
    challenge: {
      title: 'Tantangan: Baca Nama Fungsi',
      description: 'Simpan nama fungsi `const n = fn.name;`.',
      startingCode: `function getFnName(fn) {\n  return fn.name;\n}`,
      solution: `function getFnName(fn) {\n  return fn.name;\n}`
    }
  },

  // ── 227. FUNCTION QUIZ ──────────────────────────────────────────────────
  {
    id: 'function-quiz-adv',
    title: 'Function Quiz',
    chapter: 'JS Functions',
    chapterId: 'js-chap-funcadv',
    order: 227,
    overview: 'Kuis Evaluasi Komprehensif: menguji pemahaman mendalam tentang eksekusi fungsi tingkat lanjut, Closures, IIFE, this binding, dan Higher-Order Functions.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS FUNCTIONS ADVANCED</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 227 / 227 (FINAL MATERI KURIKULUM)</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏆 Uji Kompetensi Fungsi Tingkat Lanjut</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Uji pemahaman Anda tentang bagaimana JavaScript mengeksekusi fungsi di memori, mengelola context <code>this</code>, dan memanfaatkan closure untuk arsitektur aplikasi modular berskala besar.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Function Quiz Landmark</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Selamat! Anda Telah Menyelesaikan Seluruh 227 Materi JavaScript 🎓</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 20px; border-radius: 12px; font-family: monospace;">
    🎉 <strong>Mastery Milestone Tercapai: 227 Materi JavaScript Komprehensif!</strong><br><br>
    Dari Dasar Fundamental (Order 1) hingga Konsep Arsitektur Fungsi Tingkat Lanjut (Order 227), Anda kini memiliki fondasi terkuat sebagai Professional Fullstack JavaScript Engineer!
  </div>

</body>
</html>`,
    codeExplanation: [
      'Selamat! Anda telah menguasai seluruh spektrum kurikulum JavaScript di LMS.'
    ],
    quiz: {
      question: 'Manakah kombinasi yang benar mengenai 3 method manipulasi konteks this pada Function prototype?',
      options: [
        '.call() langsung eksekusi argumen koma, .apply() langsung eksekusi argumen array, .bind() mengembalikan fungsi baru dengan this terkunci',
        '.call() membuat promise, .apply() membuat array, .bind() membatalkan event',
        'Semuanya langsung mengeksekusi fungsi tanpa parameter',
        'Hanya .bind() yang bisa menerima parameter'
      ],
      answer: 0,
      explanation: '`.call()` mengeksekusi langsung dengan argumen individual, `.apply()` mengeksekusi dengan argumen array, dan `.bind()` mengembalikan fungsi baru dengan `this` yang terkunci permanen.'
    },
    challenge: {
      title: 'Tantangan Terakhir: Eksekusi Fungsi Sempurna',
      description: 'Lengkapi `const finish = () => "JavaScript Mastered";`.',
      startingCode: `const finish = () => "JavaScript Mastered";`,
      solution: `const finish = () => "JavaScript Mastered";`
    }
  }
];
