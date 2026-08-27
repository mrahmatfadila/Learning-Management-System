module.exports = [
  // ── 101. JS DATA TYPES ──────────────────────────────────────────────────
  {
    id: 'js-data-types',
    title: 'JS Data Types',
    chapter: 'JS Data Types',
    chapterId: 'js-chap-datatypes',
    order: 101,
    overview: 'Tinjauan menyeluruh 8 tipe data resmi di JavaScript: 7 tipe primitif (String, Number, BigInt, Boolean, Undefined, Null, Symbol) dan 1 tipe kompleks (Object), serta paradigma Dynamic Typing.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS DATA TYPES</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 101 / 112</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">💎 8 Tipe Data Resmi JavaScript & Dynamic Typing</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            JavaScript adalah bahasa pemrograman dengan <em>Dynamic Typing</em>: tipe data tidak terikat pada nama variabel, melainkan terikat pada nilai yang sedang disimpannya.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
            <strong class="text-amber-500 text-sm">7 Tipe Primitif</strong>
            <p class="text-slate-600 dark:text-slate-400">String, Number, BigInt, Boolean, Undefined, Null, Symbol (Immutable, Pass-by-Value).</p>
          </div>
          <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
            <strong class="text-amber-500 text-sm">1 Tipe Kompleks (Object)</strong>
            <p class="text-slate-600 dark:text-slate-400">Object, Array, Function, Date, RegExp, Map, Set (Mutable, Pass-by-Reference).</p>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Data Types Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Demonstrasi Dynamic Typing di JavaScript</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // Variabel yang sama dapat menampung tipe data berbeda secara dinamis
    let data = 'Teks String';
    log += '1. data = "Teks String" ➔ Tipe: <strong>' + typeof data + '</strong><br>';

    data = 100;
    log += '2. data = 100 ➔ Tipe: <strong>' + typeof data + '</strong><br>';

    data = true;
    log += '3. data = true ➔ Tipe: <strong>' + typeof data + '</strong><br>';

    data = { id: 1, judul: 'LMS' };
    log += '4. data = { id: 1 } ➔ Tipe: <strong>' + typeof data + '</strong>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Variabel data berubah tipe secara dinamis dari string ke number, boolean, dan object tanpa perlu kompilasi ulang.',
      'typeof mengembalikan nama string dari tipe data yang sedang aktif.'
    ],
    quiz: {
      question: 'Berapa total tipe data resmi standar di JavaScript modern saat ini?',
      options: [
        '5 Tipe',
        '8 Tipe (7 Primitif + 1 Objek)',
        '10 Tipe',
        'Hanya 2 Tipe'
      ],
      answer: 1,
      explanation: 'Standar ECMAScript mendefinisikan 8 tipe data: 7 tipe data primitif (String, Number, BigInt, Boolean, Undefined, Null, Symbol) dan 1 tipe kompleks (Object).'
    },
    challenge: {
      title: 'Tantangan: Cek Tipe Data',
      description: 'Gunakan operator `typeof 123` dan simpan hasilnya ke `let tipe = typeof 123;`.',
      startingCode: `// Cek tipe di bawah:\nlet tipe = "";`,
      solution: `let tipe = typeof 123;`
    }
  },

  // ── 102. JS PRIMITIVE DATA ──────────────────────────────────────────────
  {
    id: 'js-primitive-data',
    title: 'JS Primitive Data',
    chapter: 'JS Data Types',
    chapterId: 'js-chap-datatypes',
    order: 102,
    overview: 'Pahami sifat fundamental 7 tipe data primitif: Immutability (nilai tidak dapat diubah secara internal), alokasi memori Stack, dan mekanisme Pass-by-Value.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS DATA TYPES</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 102 / 112</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧊 Tipe Data Primitif & Sifat Immutability</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Semua tipe data primitif di JavaScript bersifat <strong>Immutable</strong> (tidak dapat dimodifikasi isinya di memori). Ketika Anda mengubah string atau angka, JavaScript sebenarnya membuat nilai baru di lokasi memori baru.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Primitive Data Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Eksperimen Immutability & Pass-by-Value</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. Pass-by-Value pada Primitif (Duplikasi Nilai Mandiri)
    let skorA = 100;
    let skorB = skorA; // Nilai 100 dicopy secara terpisah
    skorB = 200; // Mengubah skorB TIDAK merusak skorA

    log += 'skorA: <strong>' + skorA + '</strong> (Tetap 100) ✅<br>';
    log += 'skorB: <strong>' + skorB + '</strong> (Berubah jadi 200)<br><br>';

    // 2. Immutability String
    let kata = 'hello';
    kata[0] = 'H'; // Gagal diam-diam karena string primitif tidak bisa dimutasi per karakter
    log += 'kata setelah kata[0] = "H": "' + kata + '" (Tidak berubah!)';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'skorB = skorA menyalin nilai murni 100 ke slot memori baru (Pass-by-Value).',
      'kata[0] = "H" tidak memodifikasi string asli karena string adalah tipe data primitif yang immutable.'
    ],
    quiz: {
      question: 'Manakah pernyataan yang BENAR tentang tipe data primitif di JavaScript?',
      options: [
        'Primitif diteruskan melalui referensi alamat memori yang sama',
        'Primitif bersifat immutable dan diteruskan melalui penyalinan nilai (Pass-by-Value)',
        'Primitif bisa memiliki properti kustom baru yang menempel permanen',
        'Primitif hanya terdiri dari Number dan String saja'
      ],
      answer: 1,
      explanation: 'Nilai data primitif bersifat immutable dan disalin secara independen saat di-assign ke variabel baru (*Pass-by-Value*).'
    },
    challenge: {
      title: 'Tantangan: Salin Nilai Primitif',
      description: 'Salin nilai `let a = 10;` ke variabel baru `let b = a;`.',
      startingCode: `let a = 10;\n// Salin nilai a ke b di bawah:\nlet b = 0;`,
      solution: `let a = 10;\nlet b = a;`
    }
  },

  // ── 103. JS OBJECT TYPES ────────────────────────────────────────────────
  {
    id: 'js-object-types',
    title: 'JS Object Types',
    chapter: 'JS Data Types',
    chapterId: 'js-chap-datatypes',
    order: 103,
    overview: 'Kuasai tipe data Objek Kompleks: Object Literal, Array, Function, Date, Map, Set, alokasi memori Heap, Mutabilitas, dan Pass-by-Reference.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS DATA TYPES</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 103 / 112</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📦 Tipe Data Objek & Pass-by-Reference</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Semua tipe non-primitif di JavaScript adalah turunan dari <code>Object</code>. Objek disimpan di memori <em>Heap</em> dan variabel hanya menyimpan <strong>alamat referensi</strong> ke lokasi memori tersebut.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Object Types Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Demonstrasi Pass-by-Reference & Kloning Aman</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. Pass-by-Reference Berbahaya (Berbagi Objek yang Sama)
    const userA = { nama: 'Rahmat', role: 'Student' };
    const userB = userA; // Berbagi alamat memori yang sama!
    userB.role = 'ADMIN'; // Ikut merusak userA!

    log += 'userA.role (Ikut berubah karena referensi sama): <strong>' + userA.role + '</strong> ⚠️<br><br>';

    // 2. Kloning Aman dengan Spread Operator {...}
    const userC = { ...userA, role: 'Instructor' };
    log += 'userC.role (Kloning Baru): ' + userC.role + ' | userA.role: ' + userA.role + ' (Aman tidak tertimpa) ✅';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'userB = userA tidak menduplikasi objek, melainkan hanya menyalin pointer referensi memori.',
      'Untuk membuat duplikasi objek mandiri yang aman, gunakan spread operator {...userA} atau structuredClone(userA).'
    ],
    quiz: {
      question: 'Apa yang terjadi ketika sebuah variabel objek di-assign ke variabel baru (objB = objA)?',
      options: [
        'Objek baru diduplikasi sepenuhnya di memori terpisah',
        'Kedua variabel berbagi alamat referensi memori yang sama ke objek yang sama',
        'Objek pertama otomatis terhapus',
        'Tipe data berubah menjadi primitif'
      ],
      answer: 1,
      explanation: 'Variabel objek di JavaScript menyimpan pointer alamat memori sehingga pengikatan baru membuat kedua variabel merujuk pada objek yang sama (*Pass-by-Reference*).'
    },
    challenge: {
      title: 'Tantangan: Kloning Objek Aman',
      description: 'Kloning objek `const a = { x: 1 };` menggunakan spread operator `const b = { ...a };`.',
      startingCode: `const a = { x: 1 };\n// Kloning objek a ke b di bawah:\n`,
      solution: `const a = { x: 1 };\nconst b = { ...a };`
    }
  },

  // ── 104. JS SYMBOLS ─────────────────────────────────────────────────────
  {
    id: 'js-symbols',
    title: 'JS Symbols',
    chapter: 'JS Data Types',
    chapterId: 'js-chap-datatypes',
    order: 104,
    overview: 'Kuasai tipe data primitif Symbol(): pembuatan pengenal unik anti-bentrok, penggunaan kunci properti tersembunyi objek, dan well-known symbols.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS DATA TYPES</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 104 / 112</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔑 Tipe Data Symbol (Unique Identifier)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>Symbol</code> adalah tipe data primitif yang dijamin <strong>100% unik dan tidak pernah bertabrakan</strong> dengan symbol lainnya, bahkan jika memiliki deskripsi teks yang sama persis.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Symbols Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Kunci Properti Unik Tersembunyi (Symbol)</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. Symbol selalu unik
    const id1 = Symbol('USER_ID');
    const id2 = Symbol('USER_ID');
    log += 'Apakah Symbol("USER_ID") === Symbol("USER_ID")? ➔ <strong>' + (id1 === id2) + '</strong> (Selalu Unik!)<br><br>';

    // 2. Menggunakan Symbol sebagai Kunci Properti Privat Objek
    const API_SECRET = Symbol('secret_token');
    const user = {
      nama: 'Rahmat',
      [API_SECRET]: 'SECRET_KEY_9921'
    };

    log += 'Akses via Symbol: ' + user[API_SECRET] + '<br>';
    log += 'Object.keys(user): [' + Object.keys(user).join(', ') + '] (Symbol tersembunyi dari loop biasa!)';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Symbol("USER_ID") menghasilkan pengenal unik baru sehingga id1 !== id2.',
      'Properti objek yang dibuat dengan Symbol tidak akan muncul pada loop for...in atau Object.keys(), sangat ideal untuk data privat.'
    ],
    quiz: {
      question: 'Manakah nilai yang dihasilkan dari perbandingan dua Symbol: Symbol("key") === Symbol("key")?',
      options: [
        'true',
        'false',
        'undefined',
        'NaN'
      ],
      answer: 1,
      explanation: 'Setiap pemanggilan fungsi `Symbol()` selalu menghasilkan nilai unik yang baru, sehingga dua Symbol dengan deskripsi identik tidak akan pernah sama (`false`).'
    },
    challenge: {
      title: 'Tantangan: Buat Symbol Baru',
      description: 'Buat konstanta Symbol `const s = Symbol("token");`.',
      startingCode: `// Buat Symbol di bawah:\n`,
      solution: `const s = Symbol("token");`
    }
  },

  // ── 105. JS TYPEOF ──────────────────────────────────────────────────────
  {
    id: 'js-typeof',
    title: 'JS typeof',
    chapter: 'JS Data Types',
    chapterId: 'js-chap-datatypes',
    order: 105,
    overview: 'Kuasai operator typeof: nilai kembalian untuk seluruh tipe data, gotcha historis terkenal (typeof null === "object"), dan cara mendeteksi tipe data sejati menggunakan Object.prototype.toString.call().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS DATA TYPES</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 105 / 112</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Operator typeof & Gotcha typeof null</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Operator <code>typeof</code> mengembalikan string yang menunjukkan tipe dari operan. Namun ada <em>bug historis JavaScript sejak 1995</em>: <code>typeof null</code> menghasilkan <code>"object"</code>.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS typeof Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Pengecekan Tipe Data dengan typeof & toString</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. Pengujian typeof Standar
    log += '• typeof "Halo": ' + typeof 'Halo' + '<br>';
    log += '• typeof 42: ' + typeof 42 + '<br>';
    log += '• typeof true: ' + typeof true + '<br>';
    log += '• typeof undefined: ' + typeof undefined + '<br>';
    log += '• typeof null: <strong>' + typeof null + '</strong> (Gotcha historis!)<br><br>';

    // 2. Deteksi Tipe Presisi Tinggi dengan Object.prototype.toString.call()
    function getTipeAkurat(val) {
      return Object.prototype.toString.call(val).slice(8, -1);
    }

    log += '<strong>Deteksi Tipe Akurat 100%:</strong><br>';
    log += '• null ➔ ' + getTipeAkurat(null) + ' ✅<br>';
    log += '• [] (Array) ➔ ' + getTipeAkurat([]) + ' ✅<br>';
    log += '• new Date() ➔ ' + getTipeAkurat(new Date()) + ' ✅';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'typeof null menghasilkan "object" karena kesalahan representasi tipe biner pada versi awal JavaScript yang dipertahankan untuk kompatibilitas web lama.',
      'Object.prototype.toString.call(val) adalah standar deteksi tipe data yang paling akurat di JavaScript.'
    ],
    quiz: {
      question: 'Berapakah hasil dari evaluasi typeof null di JavaScript?',
      options: [
        '"null"',
        '"undefined"',
        '"object"',
        '"boolean"'
      ],
      answer: 2,
      explanation: 'Karena alasan kompatibilitas historis sejak awal pembuatan JavaScript, `typeof null` mengembalikan string `"object"`.'
    },
    challenge: {
      title: 'Tantangan: Cek Tipe Fungsi',
      description: 'Gunakan `typeof function(){}` dan simpan ke `let t = typeof function(){};`.',
      startingCode: `// Cek tipe fungsi di bawah:\nlet t = "";`,
      solution: `let t = typeof function(){};`
    }
  },

  // ── 106. JS UNDEFINED ───────────────────────────────────────────────────
  {
    id: 'js-undefined',
    title: 'JS undefined',
    chapter: 'JS Data Types',
    chapterId: 'js-chap-datatypes',
    order: 106,
    overview: 'Pahami tipe data undefined: variabel tanpa inisialisasi, properti objek yang tidak ada, fungsi tanpa return, serta perbedaan mendalam undefined vs null vs undeclared.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS DATA TYPES</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 106 / 112</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">❓ Memahami undefined vs null</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>undefined</code> berarti <em>variabel telah dideklarasikan tetapi belum diberi nilai</em> (kekosongan tidak sengaja / default JavaScript). Sedangkan <code>null</code> adalah <em>nilai penanda kekosongan yang sengaja diisi oleh programmer</em>.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS undefined vs null Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Perbandingan Komparatif undefined vs null</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    let belumDiisi; // undefined (otomatis oleh JS)
    let sengajaKosong = null; // null (sengaja oleh programmer)

    log += '• belumDiisi: ' + belumDiisi + ' (tipe: ' + typeof belumDiisi + ')<br>';
    log += '• sengajaKosong: ' + sengajaKosong + ' (tipe: ' + typeof sengajaKosong + ')<br><br>';

    // Perbandingan Kesetaraan
    log += '• undefined == null ➔ <strong>' + (undefined == null) + '</strong> (Sama-sama falsy) ✅<br>';
    log += '• undefined === null ➔ <strong>' + (undefined === null) + '</strong> (Beda tipe data) ❌';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'belumDiisi bernilai undefined karena baru dideklarasikan tanpa nilai inisialisasi.',
      'undefined == null bernilai true karena sama-sama dianggap bernilai kosong pada loose equality.',
      'undefined === null bernilai false karena tipe datanya berbeda (undefined vs object).'
    ],
    quiz: {
      question: 'Kapan sebuah variabel di JavaScript secara otomatis memiliki nilai undefined?',
      options: [
        'Ketika variabel dideklarasikan tetapi belum diisi nilai apapun',
        'Ketika variabel dihapus dengan kata kunci delete',
        'Ketika terjadi error matematika pembagian dengan nol',
        'Hanya saat browser dimatikan'
      ],
      answer: 0,
      explanation: 'Variabel yang dideklarasikan dengan `let` atau `var` tanpa nilai awal akan secara otomatis diinisialisasi dengan nilai `undefined`.'
    },
    challenge: {
      title: 'Tantangan: Deklarasi Variabel undefined',
      description: 'Deklarasikan variabel `let status;` tanpa nilai.',
      startingCode: `// Deklarasi variabel di bawah:\n`,
      solution: `let status;`
    }
  },

  // ── 107. JS NAN ─────────────────────────────────────────────────────────
  {
    id: 'js-nan',
    title: 'JS NaN',
    chapter: 'JS Data Types',
    chapterId: 'js-chap-datatypes',
    order: 107,
    overview: 'Kuasai nilai NaN (Not-a-Number): penyebab terjadinya operasi kalkulasi invalid, gotcha unik NaN !== NaN, dan penggunaan method Number.isNaN() yang aman.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS DATA TYPES</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 107 / 112</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚠️ Memahami NaN (Not-a-Number) & Number.isNaN()</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>NaN</code> adalah nilai bertipe <code>number</code> yang menandakan bahwa suatu operasi komputasi numerik gagal menghasilkan angka yang valid (misal mengalikan teks dengan angka). 
            <strong>Ciri unik:</strong> <code>NaN</code> adalah satu-satunya nilai di JavaScript yang <strong>TIDAK SAMA DENGAN DIRINYA SENDIRI</strong> (<code>NaN === NaN</code> menghasilkan <code>false</code>).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS NaN Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Eksperimen NaN & Deteksi Number.isNaN()</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. Operasi yang menghasilkan NaN
    let hasilSalah = 'abc' * 10;
    log += '• "abc" * 10 ➔ <strong>' + hasilSalah + '</strong> (tipe: ' + typeof hasilSalah + ')<br><br>';

    // 2. Gotcha NaN !== NaN
    log += '• NaN === NaN ➔ <strong>' + (NaN === NaN) + '</strong> (Unik di JS!) ❌<br><br>';

    // 3. Cara pemeriksaan resmi: Number.isNaN()
    log += '• Number.isNaN(hasilSalah) ➔ <strong>' + Number.isNaN(hasilSalah) + '</strong> ✅<br>';
    log += '• Number.isNaN(100) ➔ ' + Number.isNaN(100) + ' ❌';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Operasi perkalian string non-numerik menghasilkan NaN.',
      'Karena NaN === NaN selalu bernilai false, gunakan method Number.isNaN(val) untuk memeriksa apakah suatu nilai adalah NaN.'
    ],
    quiz: {
      question: 'Method manakah yang merupakan cara resmi dan paling aman di ES6 untuk memeriksa apakah suatu nilai adalah NaN?',
      options: [
        'val === NaN',
        'Number.isNaN(val)',
        'val.isNotNumber()',
        'typeof val === "NaN"'
      ],
      answer: 1,
      explanation: '`Number.isNaN(val)` adalah method standar ES6 yang memeriksa secara ketat apakah sebuah nilai bernilai NaN tanpa melakukan konversi tipe implisit yang keliru.'
    },
    challenge: {
      title: 'Tantangan: Cek NaN dengan Number.isNaN',
      description: 'Gunakan `Number.isNaN("teks" * 5)` dan simpan ke `let cek = Number.isNaN("teks" * 5);`.',
      startingCode: `// Cek NaN di bawah:\nlet cek = false;`,
      solution: `let cek = Number.isNaN("teks" * 5);`
    }
  },

  // ── 108. JS TOSTRING() ──────────────────────────────────────────────────
  {
    id: 'js-tostring',
    title: 'JS toString()',
    chapter: 'JS Data Types',
    chapterId: 'js-chap-datatypes',
    order: 108,
    overview: 'Kuasai method .toString(): konversi nilai ke string, konversi bilangan ke berbagai basis (Radix: Biner basis 2, Oktal 8, Heksadesimal 16), dan kustomisasi .toString() pada objek.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS DATA TYPES</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 108 / 112</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔄 Method .toString() & Konversi Radix Basis Angka</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Method <code>.toString()</code> mengubah data menjadi representasi string teks. Pada tipe angka (Number), <code>.toString(radix)</code> dapat menerima parameter basis bilangan dari basis 2 (Biner) hingga basis 36.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS toString Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Konversi Angka 255 ke Biner & Heksadesimal</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    let angka = 255;

    log += '• Desimal (Basis 10): ' + angka.toString() + '<br>';
    log += '• Biner (Basis 2): <strong>' + angka.toString(2) + '</strong><br>';
    log += '• Oktal (Basis 8): ' + angka.toString(8) + '<br>';
    log += '• Heksadesimal (Basis 16): <strong>#' + angka.toString(16).toUpperCase() + '</strong> (Kode Warna Putih FF)';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'angka.toString(2) mengonversi bilangan integer 255 menjadi representasi string biner (11111111).',
      'angka.toString(16) mengonversi bilangan menjadi string heksadesimal (ff).'
    ],
    quiz: {
      question: 'Berapakah hasil dari (10).toString(2) di JavaScript?',
      options: [
        '"10"',
        '"1010"',
        '"2"',
        '"0101"'
      ],
      answer: 1,
      explanation: 'Angka 10 dalam sistem bilangan biner (basis 2) adalah `1010`.'
    },
    challenge: {
      title: 'Tantangan: Konversi ke Biner',
      description: 'Konversi angka 8 ke string biner dengan `let biner = (8).toString(2);`.',
      startingCode: `// Konversi ke biner di bawah:\nlet biner = "";`,
      solution: `let biner = (8).toString(2);`
    }
  },

  // ── 109. JS TOLOCALESTRING() ────────────────────────────────────────────
  {
    id: 'js-tolocalestring',
    title: 'JS toLocaleString()',
    chapter: 'JS Data Types',
    chapterId: 'js-chap-datatypes',
    order: 109,
    overview: 'Kuasai pemformatan angka, mata uang, dan tanggal sesuai lokalisasi pengguna: Intl.NumberFormat, format mata uang Rupiah Indonesia (IDR), pemisah ribuan titik vs koma.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS DATA TYPES</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 109 / 112</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🇮🇩 Format Mata Uang & Angka Terlokalisasi</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>toLocaleString()</code> memformat angka dan tanggal sesuai dengan konvensi bahasa dan negara pengguna (seperti penulisan pemisah ribuan titik pada format Indonesia <code>id-ID</code> dan simbol mata uang <code>IDR</code>).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS toLocaleString Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Pemformatan Mata Uang Rupiah & Dolar</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const nominal = 14500000;

    // 1. Format Ribuan Indonesia (Pemisah Titik)
    log += '• Pemisah Ribuan (id-ID): ' + nominal.toLocaleString('id-ID') + '<br><br>';

    // 2. Format Mata Uang Rupiah Resmi
    const formatRupiah = nominal.toLocaleString('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    });
    log += '• Format Mata Uang IDR: <strong>' + formatRupiah + '</strong><br><br>';

    // 3. Format Dolar AS (USD)
    const formatUSD = (nominal / 16000).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    });
    log += '• Setara Dolar AS: ' + formatUSD;

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'nominal.toLocaleString("id-ID") memformat angka menjadi "14.500.000" dengan titik sebagai pemisah ribuan.',
      '{ style: "currency", currency: "IDR" } secara otomatis menambahkan prefix "Rp" dan format finansial yang benar.'
    ],
    quiz: {
      question: 'Opsi apakah yang dikirimkan ke toLocaleString() untuk menampilkan format mata uang resmi?',
      options: [
        '{ type: "money" }',
        '{ style: "currency", currency: "IDR" }',
        '{ format: "Rupiah" }',
        '{ mode: "finance" }'
      ],
      answer: 1,
      explanation: 'Opsi `{ style: "currency", currency: "IDR" }` mengaktifkan pemformatan mata uang resmi internasional.'
    },
    challenge: {
      title: 'Tantangan: Format Pemisah Ribuan',
      description: 'Format angka `const gaji = 5000000;` ke format Indonesia menggunakan `gaji.toLocaleString("id-ID")`.',
      startingCode: `const gaji = 5000000;\n// Format di bawah:\nlet hasil = "";`,
      solution: `const gaji = 5000000;\nlet hasil = gaji.toLocaleString("id-ID");`
    }
  },

  // ── 110. JS TYPE COERCION ───────────────────────────────────────────────
  {
    id: 'js-type-coercion',
    title: 'JS Type Coercion',
    chapter: 'JS Data Types',
    chapterId: 'js-chap-datatypes',
    order: 110,
    overview: 'Kuasai konversi tipe implisit (Type Coercion): operator penjumlahan string vs numerik, pemaksaan nilai boolean (Truthy & Falsy), dan perbedaan kesetaraan longgar == vs ketat ===.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS DATA TYPES</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 110 / 112</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎭 Konversi Implisit (Type Coercion)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Type Coercion adalah proses otomatis di mana mesin JavaScript mengubah tipe data dari satu tipe ke tipe lain secara diam-diam di balik layar saat mengeksekusi operasi tertentu.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Type Coercion Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Eksperimen Perilaku Type Coercion</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. Operator + (Mengutamakan String Concatenation)
    log += '• "5" + 2 ➔ <strong>"' + ('5' + 2) + '"</strong> (String concatenation)<br>';

    // 2. Operator Matematika Lain (- , * , /) Memaksa ke Number
    log += '• "5" - 2 ➔ <strong>' + ('5' - 2) + '</strong> (Numeric subtraction)<br>';
    log += '• "6" * "2" ➔ <strong>' + ('6' * '2') + '</strong> (Numeric multiplication)<br><br>';

    // 3. Bahaya Loose Equality (==) vs Strict Equality (===)
    log += '• 0 == false ➔ ' + (0 == false) + ' (Coerced to boolean)<br>';
    log += '• 0 === false ➔ <strong>' + (0 === false) + '</strong> (Aman: Tipe beda!) ✅';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      '"5" + 2 menghasilkan string "52" karena operator + bertindak sebagai penyambung teks jika salah satu operan adalah string.',
      '"5" - 2 mengonversi string "5" menjadi angka 5 secara implisit karena operator - hanya ada untuk matematika numerik.',
      'Gunakan selalu === (Strict Equality) untuk menghindari bug konversi implisit tak terduga.'
    ],
    quiz: {
      question: 'Berapakah hasil dari evaluasi ekspresi "10" - 4 di JavaScript?',
      options: [
        '"104"',
        '6 (Number)',
        'NaN',
        'TypeError'
      ],
      answer: 1,
      explanation: 'Operator `-` memaksa string `"10"` menjadi number `10`, sehingga `10 - 4` menghasilkan angka `6`.'
    },
    challenge: {
      title: 'Tantangan: Hindari Coercion dengan Strict Equality',
      description: 'Bandingkan `10 === "10"` dengan strict equality dan simpan ke `let cek = 10 === "10";`.',
      startingCode: `// Bandingkan dengan === di bawah:\nlet cek = false;`,
      solution: `let cek = 10 === "10";`
    }
  },

  // ── 111. JS TYPE CONVERSION ─────────────────────────────────────────────
  {
    id: 'js-type-conversion',
    title: 'JS Type Conversion',
    chapter: 'JS Data Types',
    chapterId: 'js-chap-datatypes',
    order: 111,
    overview: 'Kuasai konversi tipe data eksplisit (Type Casting): Number(), String(), Boolean(), parseInt(), parseFloat(), dan unary plus (+) untuk pengolahan data yang aman dan terprediksi.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS DATA TYPES</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 111 / 112</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎯 Konversi Tipe Data Eksplisit (Type Casting)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Berbeda dengan Coercion yang terjadi otomatis, <strong>Type Conversion</strong> dilakukan secara sadar oleh developer menggunakan fungsi konversi standar seperti <code>Number()</code>, <code>String()</code>, dan <code>Boolean()</code>.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Type Conversion Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Kalkulasi Input Form dengan Konversi Eksplisit</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // Simulasi nilai yang didapat dari elemen HTML input (selalu berupa String)
    let inputQty = '5';
    let inputHarga = '25000.50';

    // Konversi Eksplisit yang Aman
    let qty = Number(inputQty);
    let harga = parseFloat(inputHarga);
    let total = qty * harga;

    log += 'Input Qty (string): "' + inputQty + '" ➔ Konversi: ' + qty + ' (' + typeof qty + ')<br>';
    log += 'Input Harga: "' + inputHarga + '" ➔ parseFloat: ' + harga + '<br><br>';
    log += '<strong>Total Tagihan: Rp ' + total.toLocaleString('id-ID') + '</strong>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Number(inputQty) mengubah string "5" menjadi integer 5.',
      'parseFloat(inputHarga) membaca nilai desimal 25000.50 secara presisi.',
      'Melakukan konversi tipe eksplisit pada input form adalah praktik wajib untuk mencegah bug kalkulasi string.'
    ],
    quiz: {
      question: 'Fungsi bawaan JavaScript manakah yang digunakan untuk mengonversi string menjadi bilangan desimal pecahan (floating point)?',
      options: [
        'parseInt()',
        'parseFloat()',
        'toDecimal()',
        'Number.float()'
      ],
      answer: 1,
      explanation: '`parseFloat(string)` digunakan untuk mem-parsing string teks menjadi bilangan desimal pecahan.'
    },
    challenge: {
      title: 'Tantangan: Konversi String ke Number',
      description: 'Konversikan `"99"` ke angka menggunakan `Number("99")`.',
      startingCode: `let str = "99";\n// Konversikan str ke angka di bawah:\nlet num = 0;`,
      solution: `let str = "99";\nlet num = Number(str);`
    }
  },

  // ── 112. JS DESTRUCTURING ───────────────────────────────────────────────
  {
    id: 'js-destructuring',
    title: 'JS Destructuring',
    chapter: 'JS Data Types',
    chapterId: 'js-chap-datatypes',
    order: 112,
    overview: 'Kuasai ES6 Destructuring Assignment: membongkar elemen Array [a, b] = arr dan Objek { name, role } = user, penamaan ulang variabel, nilai default cadangan, dan nested destructuring.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS DATA TYPES</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 112 / 112</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚡ ES6 Destructuring Assignment</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Destructuring adalah sintaks praktis yang memungkinkan Anda membongkar (*unpack*) nilai dari Array atau properti dari Objek langsung ke dalam variabel individual yang terpisah dalam satu baris.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Destructuring Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Destructuring Objek & Array Modern</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. Object Destructuring dengan Renaming & Default Value
    const profilUser = {
      namaLengkap: 'Rahmat Fadila',
      role: 'Instruktur Utama',
      kota: 'Bandung'
    };

    const { namaLengkap: nama, role, foto = 'default-avatar.png' } = profilUser;
    log += '<strong>1. Object Destructuring:</strong><br>';
    log += '• Nama: ' + nama + '<br>';
    log += '• Role: ' + role + '<br>';
    log += '• Foto (Default): ' + foto + '<br><br>';

    // 2. Array Destructuring & Rest Pattern
    const koordinat = [107.6191, -6.9175, 750];
    const [bujur, lintang, elevasi] = koordinat;
    log += '<strong>2. Array Destructuring:</strong><br>';
    log += 'Bujur: ' + bujur + ' | Lintang: ' + lintang + ' | Elevasi: ' + elevasi + ' mdpl';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'const { namaLengkap: nama, role, foto = "..." } membongkar objek profilUser, mengubah nama properti menjadi variabel nama, dan memberikan default value pada foto.',
      'const [bujur, lintang, elevasi] = koordinat mengekstrak isi elemen array secara terurut.'
    ],
    quiz: {
      question: 'Bagaimana cara mengubah nama variabel saat melakukan destructuring properti objek di JavaScript (Object Renaming)?',
      options: [
        'const { nama as namaUser } = user;',
        'const { nama: namaUser } = user;',
        'const { nama -> namaUser } = user;',
        'const { nama = namaUser } = user;'
      ],
      answer: 1,
      explanation: 'Sintaks renaming pada object destructuring ditulis dengan tanda titik dua: `const { namaProperti: namaVariabelBaru } = objek;`.'
    },
    challenge: {
      title: 'Tantangan: Destructuring Objek Sederhana',
      description: 'Bongkar properti `x` dan `y` dari objek `const pos = { x: 10, y: 20 };` menggunakan `const { x, y } = pos;`.',
      startingCode: `const pos = { x: 10, y: 20 };\n// Bongkar properti pos di bawah:\n`,
      solution: `const pos = { x: 10, y: 20 };\nconst { x, y } = pos;`
    }
  }
];
