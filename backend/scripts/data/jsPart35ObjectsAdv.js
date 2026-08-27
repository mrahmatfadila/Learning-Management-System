module.exports = [
  // ── 228. OBJECT STUDY PATH ─────────────────────────────────────────────
  {
    id: 'object-study-path',
    title: 'Object Study Path',
    chapter: 'JS Objects',
    chapterId: 'js-chap-objadv',
    order: 228,
    overview: 'Peta jalan penguasaan objek JavaScript tingkat lanjut: dari object literals dasar, property descriptors, accessor getters/setters, proteksi immutability, hingga pewarisan prototype chain murni.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS OBJECTS ADVANCED</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 228 / 239</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🗺️ Peta Jalur Penguasaan Objek JavaScript</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Di JavaScript, hampir segalanya adalah objek. Menguasai bagaimana objek dialokasikan di memory heap, bagaimana prototipe bekerja di balik layar, dan bagaimana mengamankan struktur data adalah keahlian wajib senior JavaScript engineer.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Object Study Path Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Pilar Arsitektur Objek JavaScript</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    log += '<strong>Pilar Utama Objek:</strong><br>';
    log += '1. <strong>Definisi & Alokasi:</strong> Literals, Object.create, Constructor.<br>';
    log += '2. <strong>Accessors:</strong> Getter & Setter data encapulation.<br>';
    log += '3. <strong>Proteksi:</strong> Object.seal & Object.freeze.<br>';
    log += '4. <strong>Inheritance:</strong> Prototype Chain & ES6 Classes.';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Objek di JavaScript disimpan berdasarkan referensi memori (Pass-by-reference), bukan pass-by-value.'
    ],
    quiz: {
      question: 'Bagaimana JavaScript mengelola penyimpanan objek di memori?',
      options: [
        'Disimpan sebagai nilai primitif di Call Stack',
        'Disimpan berdasarkan referensi memori di Memory Heap',
        'Disimpan di harddisk browser',
        'Dihapus otomatis setiap detik'
      ],
      answer: 1,
      explanation: 'Objek dialokasikan di Memory Heap dan variabel memegang alamat referensinya.'
    },
    challenge: {
      title: 'Tantangan: Buat Objek Literal',
      description: 'Lengkapi `const obj = { id: 1 };`.',
      startingCode: `const obj = { id: 1 };`,
      solution: `const obj = { id: 1 };`
    }
  },

  // ── 229. OBJECT DEFINITIONS ─────────────────────────────────────────────
  {
    id: 'object-definitions-adv',
    title: 'Object Definitions',
    chapter: 'JS Objects',
    chapterId: 'js-chap-objadv',
    order: 229,
    overview: '4 Cara Pembuatan Objek di JavaScript: Object Literal {}, new Object(), Object.create() (pewarisan prototype eksplisit), dan Constructor Functions.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS OBJECTS ADVANCED</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 229 / 239</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏗️ 4 Cara Pembuatan Objek & Prototype Linkage</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Selain Object Literal biasa <code>{}</code>, <code>Object.create(proto)</code> memungkinkan kita membuat objek baru yang langsung mewarisi objek prototipe tertentu tanpa menjalankan fungsi konstruktor.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Object Definitions Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Pembuatan Objek dengan Object.create()</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // Prototipe Induk
    const cetakanKendaraan = {
      jenis: 'Kendaraan Darat',
      klakson: function() { return 'BEEP BEEP! 🚗'; }
    };

    // Membuat objek baru yang langsung mewarisi cetakanKendaraan
    const mobil = Object.create(cetakanKendaraan);
    mobil.merek = 'Toyota Supra';

    log += '• Merek Mobil: <strong>' + mobil.merek + '</strong><br>';
    log += '• Suara Klakson (Warisan Prototype): ' + mobil.klakson() + '<br>';
    log += '• Jenis (Dari Prototype): ' + mobil.jenis;

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Object.create(proto) menghubungkan objek baru ke proto melalui internal prototype linkage ([[Prototype]]).'
    ],
    quiz: {
      question: 'Method statis Object manakah yang digunakan untuk membuat objek baru dengan prototipe yang ditentukan secara eksplisit?',
      options: [
        'Object.new()',
        'Object.create()',
        'Object.clone()',
        'Object.inherit()'
      ],
      answer: 1,
      explanation: '`Object.create(proto)` membuat objek baru dan menetapkan `proto` sebagai prototipenya.'
    },
    challenge: {
      title: 'Tantangan: Gunakan Object.create',
      description: 'Lakukan `const child = Object.create(parent);`.',
      startingCode: `function inherit(parent) {\n  return Object.create(parent);\n}`,
      solution: `function inherit(parent) {\n  return Object.create(parent);\n}`
    }
  },

  // ── 230. OBJECT THIS ────────────────────────────────────────────────────
  {
    id: 'object-this-adv',
    title: 'Object this',
    chapter: 'JS Objects',
    chapterId: 'js-chap-objadv',
    order: 230,
    overview: 'Kata kunci this dalam konteks method objek: ES6 method shorthand, pemanggilan bertingkat (*nested objects*), dan cara menghindari hilangnya referensi this saat method diekstrak.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS OBJECTS ADVANCED</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 230 / 239</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎯 Method Shorthand & Context Binding</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            ES6 memperkenalkan sintaks ringkas <em>Method Shorthand</em> <code>hitung() {}</code>. Ketika method dipanggil sebagai properti objek (<code>obj.hitung()</code>), <code>this</code> otomatis mengarah ke objek di sebelah kiri tanda titik.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Object this Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Method Shorthand & Method Chaining</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const kalkulator = {
      nilai: 0,
      
      // ES6 Method Shorthand & Mengembalikan this untuk mendukung Method Chaining
      tambah(n) {
        this.nilai += n;
        return this;
      },
      kali(n) {
        this.nilai *= n;
        return this;
      }
    };

    // Method Chaining yang elegan
    kalkulator.tambah(10).kali(5);

    log += '• Hasil Akhir Chaining (tambah 10 -> kali 5): <strong>' + kalkulator.nilai + '</strong> ✅';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Mengembalikan return this dari dalam method memungkinkan pemanggilan bersambung (Method Chaining), seperti pada library jQuery dan builder pattern.'
    ],
    quiz: {
      question: 'Apa yang harus dikembalikan oleh sebuah method agar objek dapat dipanggil secara bersambung (Method Chaining)?',
      options: [
        'return null',
        'return this',
        'return true',
        'return undefined'
      ],
      answer: 1,
      explanation: 'Mengembalikan `return this` memungkinkan method berikutnya dipanggil langsung pada objek yang sama.'
    },
    challenge: {
      title: 'Tantangan: Kembalikan this untuk Chaining',
      description: 'Lengkapi method `step() { return this; }`.',
      startingCode: `const chain = {\n  step() {\n    return this;\n  }\n};`,
      solution: `const chain = {\n  step() {\n    return this;\n  }\n};`
    }
  },

  // ── 231. OBJECT ITERATIONS ──────────────────────────────────────────────
  {
    id: 'object-iterations-adv',
    title: 'Object Iterations',
    chapter: 'JS Objects',
    chapterId: 'js-chap-objadv',
    order: 231,
    overview: 'Iterasi & Transformasi Objek Modern: Object.keys(), Object.values(), Object.entries(), serta konversi balik array pasangan ke objek dengan Object.fromEntries().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS OBJECTS ADVANCED</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 231 / 239</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔄 Transformasi Objek dengan entries() & fromEntries()</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Kombinasi <code>Object.entries()</code> (mengubah objek ke array <code>[key, value]</code>) dan <code>Object.fromEntries()</code> memungkinkan kita memanipulasi objek menggunakan method array (seperti <code>.map()</code> atau <code>.filter()</code>) dengan sangat mudah.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Object Iterations Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Filter & Transformasi Objek</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const hargaBarang = {
      buku: 50000,
      pulpen: 5000,
      laptop: 12000000,
      penghapus: 2000
    };

    // Filter barang yang harganya di atas 10.000 menggunakan entries -> filter -> fromEntries
    const barangMahal = Object.fromEntries(
      Object.entries(hargaBarang).filter(([nama, harga]) => harga >= 10000)
    );

    log += '• Objek Asli: ' + JSON.stringify(hargaBarang) + '<br><br>';
    log += '• Barang Mahal (>= 10rb): <strong>' + JSON.stringify(barangMahal) + '</strong> ✅';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Object.entries(obj) menghasilkan array [[key1, val1], [key2, val2]].',
      'Object.fromEntries(entriesArray) merekonstruksi array kembali menjadi objek baru.'
    ],
    quiz: {
      question: 'Method statis Object manakah yang mengubah array pasangan [key, value] kembali menjadi sebuah objek JavaScript?',
      options: [
        'Object.toObject()',
        'Object.fromEntries()',
        'Object.keys()',
        'Object.reconstruct()'
      ],
      answer: 1,
      explanation: '`Object.fromEntries(iterable)` merekonstruksi pasangan key-value menjadi objek murni.'
    },
    challenge: {
      title: 'Tantangan: Ambil Keys Objek',
      description: 'Lakukan `Object.keys(obj);`.',
      startingCode: `function getKeys(obj) {\n  return Object.keys(obj);\n}`,
      solution: `function getKeys(obj) {\n  return Object.keys(obj);\n}`
    }
  },

  // ── 232. OBJECT GET / SET ───────────────────────────────────────────────
  {
    id: 'object-get-set-adv',
    title: 'Object Get / Set',
    chapter: 'JS Objects',
    chapterId: 'js-chap-objadv',
    order: 232,
    overview: 'Accessor Properties: Getter (get) dan Setter (set) untuk membuat properti virtual, validasi mutasi data, dan enkapsulasi state.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS OBJECTS ADVANCED</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 232 / 239</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛡️ Properti Virtual & Validasi (Getter / Setter)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Kata kunci <code>get</code> dan <code>set</code> memungkinkan kita mendefinisikan fungsi yang dieksekusi secara otomatis saat properti dibaca atau diberi nilai baru, seolah-olah sedang mengakses properti biasa.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Object Get Set Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Getter & Setter dengan Proteksi Validasi</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const siswa = {
      namaDepan: 'Rahmat',
      namaBelakang: 'Fadila',
      _umur: 20,

      // Getter Properti Virtual
      get namaLengkap() {
        return this.namaDepan + ' ' + this.namaBelakang;
      },

      // Setter dengan Validasi Ketat
      set umur(nilaiBaru) {
        if (nilaiBaru < 0) {
          log += '⚠️ Validasi Gagal: Umur tidak boleh negatif!<br>';
        } else {
          this._umur = nilaiBaru;
        }
      },
      get umur() {
        return this._umur;
      }
    };

    log += '• Nama Lengkap (Getter): <strong>' + siswa.namaLengkap + '</strong><br>';
    siswa.umur = 24; // Memanggil setter
    log += '• Umur Valid: ' + siswa.umur + ' tahun<br>';
    siswa.umur = -5; // Validasi ditolak!

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Getter dipanggil tanpa tanda kurung (siswa.namaLengkap).',
      'Setter menangkap assignment (siswa.umur = 24) dan memungkinkan pengecekan validasi sebelum data diubah.'
    ],
    quiz: {
      question: 'Bagaimana cara memanggil properti Getter yang didefinisikan dengan kata kunci get di sebuah objek?',
      options: [
        'Menggunakan tanda kurung seperti fungsi: obj.properti()',
        'Mengaksesnya seperti properti biasa tanpa tanda kurung: obj.properti',
        'Dengan method obj.get("properti")',
        'Menggunakan kata kunci new'
      ],
      answer: 1,
      explanation: 'Getter diakses persis seperti properti data biasa (tanpa tanda kurung fungsi).'
    },
    challenge: {
      title: 'Tantangan: Buat Getter Sederhana',
      description: 'Lengkapi getter `get total() { return this.a + this.b; }`.',
      startingCode: `const mathObj = {\n  a: 5,\n  b: 5,\n  get total() {\n    return this.a + this.b;\n  }\n};`,
      solution: `const mathObj = {\n  a: 5,\n  b: 5,\n  get total() {\n    return this.a + this.b;\n  }\n};`
    }
  },

  // ── 233. OBJECT MANAGEMENT ──────────────────────────────────────────────
  {
    id: 'object-management-adv',
    title: 'Object Management',
    chapter: 'JS Objects',
    chapterId: 'js-chap-objadv',
    order: 233,
    overview: 'Property Descriptors di JavaScript: Object.defineProperty() dan Object.defineProperties(), mengontrol flag writable, enumerable, dan configurable.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS OBJECTS ADVANCED</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 233 / 239</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚙️ Kontrol Deskriptor Properti (Object.defineProperty)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Setiap properti objek memiliki 3 flag internal:
            1. <code>writable</code>: Apakah nilainya dapat diubah?
            2. <code>enumerable</code>: Apakah properti muncul saat di-loop <code>for...in</code> atau <code>Object.keys()</code>?
            3. <code>configurable</code>: Apakah properti bisa dihapus atau konfigurasinya diubah lagi?
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Object Management Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Properti Read-Only & Non-Enumerable</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const akun = { username: 'rahmatdev' };

    // Mendefinisikan properti ID yang Read-Only (writable: false) dan Tersembunyi (enumerable: false)
    Object.defineProperty(akun, 'idRahasia', {
      value: 'USER-99881',
      writable: false,     // Nilai tidak bisa ditimpa!
      enumerable: false,   // Tidak muncul di Object.keys()!
      configurable: false  // Tidak bisa dihapus!
    });

    log += '• ID Rahasia (Akses Langsung): <strong>' + akun.idRahasia + '</strong><br>';
    log += '• Keys yang Terlihat (Object.keys): [' + Object.keys(akun).join(', ') + '] (idRahasia tersembunyi!) ✅';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'writable: false membuat properti menjadi konstan dan kebal penimpaan nilai.',
      'enumerable: false menyembunyikan properti dari iterasi publik.'
    ],
    quiz: {
      question: 'Flag descriptor manakah yang menentukan apakah sebuah properti akan muncul saat objek diiterasi dengan Object.keys()?',
      options: [
        'writable',
        'enumerable',
        'configurable',
        'visible'
      ],
      answer: 1,
      explanation: 'Flag `enumerable: true` menentukan apakah properti dapat dihitung dan terlihat dalam iterasi enumerasi.'
    },
    challenge: {
      title: 'Tantangan: Buat Properti Read-Only',
      description: 'Gunakan `Object.defineProperty(obj, "k", { value: 1, writable: false });`.',
      startingCode: `function setReadOnly(obj) {\n  Object.defineProperty(obj, "k", { value: 1, writable: false });\n}`,
      solution: `function setReadOnly(obj) {\n  Object.defineProperty(obj, "k", { value: 1, writable: false });\n}`
    }
  },

  // ── 234. OBJECT PROTECTION ──────────────────────────────────────────────
  {
    id: 'object-protection-adv',
    title: 'Object Protection',
    chapter: 'JS Objects',
    chapterId: 'js-chap-objadv',
    order: 234,
    overview: '3 Tingkatan Proteksi Immutability Objek di JavaScript: Object.preventExtensions() (larang tambah properti), Object.seal() (larang tambah/hapus), dan Object.freeze() (bekukan total).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS OBJECTS ADVANCED</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 234 / 239</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔒 3 Tingkat Proteksi Objek (Prevent, Seal, Freeze)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            JavaScript menyediakan 3 level keamanan struktur objek:
            1. <code>Object.preventExtensions(obj)</code>: Mencegah penambahan properti baru.
            2. <code>Object.seal(obj)</code>: Mencegah tambah/hapus properti, tetapi nilai properti yang ada masih bisa diubah.
            3. <code>Object.freeze(obj)</code>: Proteksi tertinggi (100% Immutability: tidak bisa tambah, hapus, maupun ubah nilai).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Object Protection Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Uji Kekebalan Object.freeze()</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const konfigurasiApp = {
      apiEndpoint: 'https://api.lms.com/v1',
      maxRetry: 3
    };

    // Membekukan objek konfigurasi secara total
    Object.freeze(konfigurasiApp);

    // Percobaan mengubah nilai
    konfigurasiApp.maxRetry = 99; // Gagal secara diam-diam (atau error di Strict Mode)

    log += '• maxRetry setelah dibekukan: <strong>' + konfigurasiApp.maxRetry + '</strong> (Tetap 3, Aman!) ✅<br>';
    log += '• Apakah objek beku (Object.isFrozen)? ' + Object.isFrozen(konfigurasiApp);

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Object.freeze(obj) adalah proteksi dangkal (shallow freeze). Untuk objek bersarang, gunakan teknik Deep Freeze rekursif.'
    ],
    quiz: {
      question: 'Method proteksi objek manakah yang memberikan tingkat keamanan tertinggi (mencegah penambahan, penghapusan, dan pengubahan nilai properti)?',
      options: [
        'Object.protect()',
        'Object.seal()',
        'Object.freeze()',
        'Object.lock()'
      ],
      answer: 2,
      explanation: '`Object.freeze()` membekukan objek secara total menjadikannya 100% read-only.'
    },
    challenge: {
      title: 'Tantangan: Bekukan Objek dengan Freeze',
      description: 'Bekukan objek `Object.freeze(obj);`.',
      startingCode: `function freezeApp(obj) {\n  return Object.freeze(obj);\n}`,
      solution: `function freezeApp(obj) {\n  return Object.freeze(obj);\n}`
    }
  },

  // ── 235. OBJECT PROTOTYPES ──────────────────────────────────────────────
  {
    id: 'object-prototypes-adv',
    title: 'Object Prototypes',
    chapter: 'JS Objects',
    chapterId: 'js-chap-objadv',
    order: 235,
    overview: 'Mendalami Prototype Chain: Object.prototype, internal pointer [[Prototype]], Object.getPrototypeOf(), Object.setPrototypeOf(), dan pewarisan method di memori.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS OBJECTS ADVANCED</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 235 / 239</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧬 Rantai Pewarisan Prototipe (Prototype Chain)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            JavaScript tidak memiliki class murni secara native; pewarisan JavaScript sepenuhnya berbasis <strong>Prototypes</strong>. Ketika kita memanggil sebuah method pada objek, JavaScript akan mencari method tersebut di objek itu sendiri, lalu naik ke prototipenya, dan seterusnya hingga mencapai <code>Object.prototype</code>.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Object Prototypes Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Pewarisan Prototype Berbagi Memori</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    function Hero(nama, hp) {
      this.nama = nama;
      this.hp = hp;
    }

    // Method didefinisikan pada Prototype sehingga hanya memakan 1 slot memori untuk 1000 hero!
    Hero.prototype.serang = function() {
      return this.nama + ' melancarkan serangan pedang! ⚔️';
    };

    const warrior1 = new Hero('Arthur', 100);
    const warrior2 = new Hero('Lancelot', 90);

    log += '• ' + warrior1.serang() + '<br>';
    log += '• ' + warrior2.serang() + '<br>';
    log += '• Apakah kedua instansi berbagi method prototype yang sama? <strong>' + (warrior1.serang === warrior2.serang) + '</strong> ✅';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Menaruh method pada Prototype menghemat RAM karena semua instansi merujuk ke satu fungsi yang sama di memori.'
    ],
    quiz: {
      question: 'Method standar modern apakah yang disarankan untuk memeriksa prototipe dari sebuah objek?',
      options: [
        'Object.getPrototypeOf(obj)',
        'obj.__proto__',
        'Object.findProto(obj)',
        'obj.prototype'
      ],
      answer: 0,
      explanation: '`Object.getPrototypeOf(obj)` adalah method standar ECMAScript resmi untuk mengambil prototipe objek.'
    },
    challenge: {
      title: 'Tantangan: Ambil Prototype Objek',
      description: 'Lakukan `Object.getPrototypeOf(obj);`.',
      startingCode: `function getProto(obj) {\n  return Object.getPrototypeOf(obj);\n}`,
      solution: `function getProto(obj) {\n  return Object.getPrototypeOf(obj);\n}`
    }
  },

  // ── 236. OBJECT REFERENCE ───────────────────────────────────────────────
  {
    id: 'object-reference-adv',
    title: 'Object Reference',
    chapter: 'JS Objects',
    chapterId: 'js-chap-objadv',
    order: 236,
    overview: 'Kamus referensi lengkap method statis Object di JavaScript modern: Object.assign(), Object.hasOwn(), Object.is(), Object.groupBy(), dan tabel perbandingannya.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS OBJECTS ADVANCED</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 236 / 239</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📚 Kamus Referensi Method Statis Objek</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Tabel berikut merangkum seluruh method statis utama yang disediakan oleh objek bawaan <code>Object</code> di JavaScript.
          </p>
        </div>

        <div class="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-xl text-xs">
          <table class="w-full text-left">
            <thead class="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white">
              <tr>
                <th class="p-3">Method Statis</th>
                <th class="p-3">Fungsi & Peran Utama</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-800 font-mono text-slate-600 dark:text-slate-300">
              <tr><td class="p-3 font-bold text-amber-500">Object.assign(target, ...sources)</td><td>Menyalin properti dari satu atau lebih objek sumber ke target.</td></tr>
              <tr><td class="p-3 font-bold text-amber-500">Object.hasOwn(obj, prop)</td><td>Pengganti hasOwnProperty yang aman untuk mengecek properti langsung.</td></tr>
              <tr><td class="p-3 font-bold text-amber-500">Object.is(a, b)</td><td>Pengecekan kesetaraan nilai mutlak (akurat untuk NaN & -0).</td></tr>
              <tr><td class="p-3 font-bold text-amber-500">Object.groupBy(items, callback)</td><td>Mengelompokkan elemen array ke dalam objek berdasarkan kriteria.</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Object Reference Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Object.hasOwn() & Object.assign()</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const target = { a: 1 };
    Object.assign(target, { b: 2, c: 3 });

    log += '• Hasil Object.assign: ' + JSON.stringify(target) + '<br>';
    log += '• Cek Properti Sendiri (Object.hasOwn): <strong>' + Object.hasOwn(target, 'b') + '</strong> ✅';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Object.hasOwn(obj, "prop") adalah fitur modern ES2022 pengganti aman dari obj.hasOwnProperty("prop").'
    ],
    quiz: {
      question: 'Method statis modern ES2022 manakah yang direkomendasikan untuk menggantikan obj.hasOwnProperty() secara aman?',
      options: [
        'Object.hasOwn(obj, prop)',
        'Object.check(obj, prop)',
        'Object.exists(obj, prop)',
        'Object.contains(obj, prop)'
      ],
      answer: 0,
      explanation: '`Object.hasOwn(obj, prop)` adalah method modern resmi pengganti `hasOwnProperty` yang kebal dari penimpaan prototype.'
    },
    challenge: {
      title: 'Tantangan: Cek Properti dengan hasOwn',
      description: 'Lakukan `Object.hasOwn(obj, "id");`.',
      startingCode: `function checkId(obj) {\n  return Object.hasOwn(obj, "id");\n}`,
      solution: `function checkId(obj) {\n  return Object.hasOwn(obj, "id");\n}`
    }
  }
];
