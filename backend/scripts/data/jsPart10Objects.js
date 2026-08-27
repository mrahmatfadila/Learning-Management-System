module.exports = [
  // ── 50. OBJECT PATH ─────────────────────────────────────────────────────
  {
    id: 'object-path',
    title: 'Object Path',
    chapter: 'JS Objects',
    chapterId: 'js-chap-objects',
    order: 50,
    overview: 'Peta jalur penguasaan Objek JavaScript: dari Object Literals dasar, Prototype Chains, Object Methods, Destructuring, hingga Class Oriented Programming di ES6+.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS OBJECTS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 50 / 56</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🗺️ Peta Jalur Penguasaan JavaScript Objects</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Di JavaScript, <em>hampir semua hal adalah objek</em> (kecuali tipe data primitif). Objek adalah struktur data utama yang digunakan untuk merepresentasikan entitas nyata dalam aplikasi seperti User, Produk, Transaksi, dan Pengaturan Sistem.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
            <strong class="text-amber-500 text-sm">1. Object Literals</strong>
            <p class="text-slate-600 dark:text-slate-400">Membuat objek dengan kurung kurawal <code>{ key: value }</code>.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
            <strong class="text-amber-500 text-sm">2. Constructor & Prototype</strong>
            <p class="text-slate-600 dark:text-slate-400">Mencetak blueprint banyak objek dan pewarisan sifat via prototype.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
            <strong class="text-amber-500 text-sm">3. ES6 Classes</strong>
            <p class="text-slate-600 dark:text-slate-400">Sintaks OOP modern dengan <code>class</code>, <code>constructor</code>, dan <code>extends</code>.</p>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Object Path Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Jalur Struktur Objek di JavaScript</h2>
  <div id="output" style="background: #f8fafc; border: 1px solid #cbd5e1; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    // Objek Literal Terstruktur
    const kursus = {
      id: 'js-mastery',
      judul: 'JavaScript Masterclass',
      level: 'Semua Level',
      rating: 4.9,
      siswaTerdaftar: 1250,
      ringkasan: function() {
        return this.judul + ' (' + this.level + ') - Rating: ⭐ ' + this.rating + ' (' + this.siswaTerdaftar + ' Siswa)';
      }
    };

    document.getElementById('output').innerHTML = '<strong>Informasi Modul:</strong><br>' + kursus.ringkasan();
  </script>

</body>
</html>`,
    codeExplanation: [
      'kursus adalah objek literal yang menggabungkan properti data (judul, level, rating) dan fungsi perilaku (method ringkasan).',
      'this.judul di dalam method merujuk pada properti objek kursus itu sendiri.'
    ],
    quiz: {
      question: 'Manakah cara paling umum dan ringkas untuk membuat objek tunggal di JavaScript modern?',
      options: [
        'new Object()',
        'Object Literal { }',
        'Object.create()',
        'Class instance'
      ],
      answer: 1,
      explanation: 'Object Literal `{ key: value }` adalah cara paling umum, elegan, dan direkomendasikan untuk mendefinisikan objek tunggal di JavaScript.'
    },
    challenge: {
      title: 'Tantangan: Buat Objek Mobil',
      description: 'Buat objek literal `const mobil = { merk: "Honda", tahun: 2024 };`.',
      startingCode: `// Buat objek mobil di bawah:\n`,
      solution: `const mobil = { merk: "Honda", tahun: 2024 };`
    }
  },

  // ── 51. OBJECT INTRO ────────────────────────────────────────────────────
  {
    id: 'object-intro',
    title: 'Object Intro',
    chapter: 'JS Objects',
    chapterId: 'js-chap-objects',
    order: 51,
    overview: 'Pahami konsep objek sebagai kumpulan pasangan kunci dan nilai (key-value pairs) untuk memodelkan data kompleks dalam satu variabel.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS OBJECTS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 51 / 56</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📦 Konsep Pasangan Kunci & Nilai (Key-Value)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Jika variabel biasa hanya menampung satu nilai, objek dapat menampung banyak nilai dengan nama label properti yang jelas.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Object Intro</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Profil Siswa LMS (Object)</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    const siswa = {
      namaLengkap: 'Ahmad Dahlan',
      umur: 21,
      jurusan: 'Rekayasa Perangkat Lunak',
      isAktif: true,
      hobi: ['Coding', 'Gaming', 'Membaca']
    };

    let log = 'Nama: ' + siswa.namaLengkap + '<br>' +
      'Umur: ' + siswa.umur + ' tahun<br>' +
      'Jurusan: ' + siswa.jurusan + '<br>' +
      'Status Aktif: ' + (siswa.isAktif ? 'Aktif Kuliah ✅' : 'Cuti') + '<br>' +
      'Hobi Utama: ' + siswa.hobi[0];

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Objek siswa menampung berbagai tipe data sekaligus: string, number, boolean, hingga array.',
      'Data dibaca dengan dot notation seperti siswa.namaLengkap dan siswa.hobi[0].'
    ],
    quiz: {
      question: 'Kumpulan data seperti apakah yang disimpan di dalam sebuah objek JavaScript?',
      options: [
        'Hanya deretan angka terurut berindeks nomor',
        'Pasangan Kunci dan Nilai (Key-Value Pairs)',
        'Hanya teks string murni',
        'Hanya fungsi saja'
      ],
      answer: 1,
      explanation: 'Objek di JavaScript menyimpan data dalam format pasangan kunci dan nilai (*key-value pairs*).'
    },
    challenge: {
      title: 'Tantangan: Buat Objek Produk',
      description: 'Deklarasikan objek `const produk = { nama: "Mouse", harga: 150000 };`.',
      startingCode: `// Buat objek produk di bawah:\n`,
      solution: `const produk = { nama: "Mouse", harga: 150000 };`
    }
  },

  // ── 52. OBJECT PROPERTIES ───────────────────────────────────────────────
  {
    id: 'object-properties',
    title: 'Object Properties',
    chapter: 'JS Objects',
    chapterId: 'js-chap-objects',
    order: 52,
    overview: 'Kuasai 2 cara mengakses properti objek (Dot notation obj.prop vs Bracket notation obj["prop"]), penambahan properti baru, modifikasi nilai, dan penghapusan properti dengan keyword delete.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS OBJECTS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 52 / 56</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔑 Akses, Mutasi, & Hapus Properti Objek</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Properti objek dapat diakses menggunakan <strong>Dot Notation</strong> (<code>obj.nama</code>) atau <strong>Bracket Notation</strong> (<code>obj["nama"]</code>). Bracket notation wajib digunakan jika nama properti berupa variabel dinamis atau mengandung spasi/tanda hubung.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Object Properties</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Manipulasi Properti Objek</h2>
  <div id="output" style="background: #f8fafc; border: 1px solid #cbd5e1; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const laptop = {
      merk: 'Asus ROG',
      ram: '16GB',
      'tipe-prosesor': 'Intel Core i9' // Properti dengan tanda minus
    };

    // 1. Dot Notation
    log += 'Dot Notation: ' + laptop.merk + '<br>';

    // 2. Bracket Notation (Wajib untuk nama properti berkarakter khusus)
    log += 'Bracket Notation: ' + laptop['tipe-prosesor'] + '<br><br>';

    // 3. Menambah properti baru secara dinamis
    laptop.storage = '1TB NVMe SSD';
    laptop.harga = 28500000;
    log += 'Storage Baru: ' + laptop.storage + '<br>';

    // 4. Menghapus properti dengan kata kunci delete
    delete laptop.ram;
    log += 'RAM setelah delete: ' + laptop.ram + ' (undefined)';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'laptop["tipe-prosesor"] menggunakan bracket notation karena ada karakter minus yang tidak bisa dibaca oleh dot notation.',
      'laptop.storage = "1TB..." langsung menambahkan properti baru ke objek.',
      'delete laptop.ram menghapus properti ram dari objek laptop.'
    ],
    quiz: {
      question: 'Kapan Bracket Notation obj["properti"] WAJIB digunakan dibandingkan Dot Notation obj.properti?',
      options: [
        'Ketika nilai propertinya adalah angka',
        'Ketika nama properti disimpan di dalam variabel atau mengandung karakter khusus/spasi',
        'Hanya ketika objek dibuat dengan class',
        'Bracket notation tidak pernah wajib'
      ],
      answer: 1,
      explanation: 'Bracket notation wajib digunakan saat nama properti bersifat dinamis (berupa variabel) atau mengandung karakter khusus seperti spasi dan tanda minus.'
    },
    challenge: {
      title: 'Tantangan: Hapus Properti dengan delete',
      description: 'Hapus properti `temp` dari objek `const user = { id: 1, temp: "hapus saya" };` menggunakan kata kunci `delete user.temp;`.',
      startingCode: `const user = { id: 1, temp: "hapus saya" };\n// Hapus properti temp di bawah:\n`,
      solution: `const user = { id: 1, temp: "hapus saya" };\ndelete user.temp;`
    }
  },

  // ── 53. OBJECT METHODS ──────────────────────────────────────────────────
  {
    id: 'object-methods',
    title: 'Object Methods',
    chapter: 'JS Objects',
    chapterId: 'js-chap-objects',
    order: 53,
    overview: 'Pelajari method objek: properti yang bernilai fungsi, sintaks ES6 method shorthand, dan pola Method Chaining.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS OBJECTS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 53 / 56</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚙️ Method Objek & Sintaks Shorthand ES6</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Method adalah tindakan yang dapat dilakukan pada objek. Di JavaScript, method adalah properti yang menyimpan definisi fungsi.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Object Methods</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Simulasi Dompet Digital (Object Methods)</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const dompet = {
      pemilik: 'Rahmat',
      saldo: 200000,
      
      // ES6 Method Shorthand
      topUp(nominal) {
        this.saldo += nominal;
        return 'Top Up Rp ' + nominal.toLocaleString('id-ID') + ' Berhasil! Saldo: Rp ' + this.saldo.toLocaleString('id-ID');
      },

      bayar(nominal) {
        if (nominal > this.saldo) {
          return '❌ Saldo tidak cukup!';
        }
        this.saldo -= nominal;
        return 'Pembayaran Rp ' + nominal.toLocaleString('id-ID') + ' Sukses. Sisa: Rp ' + this.saldo.toLocaleString('id-ID');
      }
    };

    log += 'Saldo Awal: Rp ' + dompet.saldo.toLocaleString('id-ID') + '<br>';
    log += dompet.topUp(300000) + '<br>';
    log += dompet.bayar(150000);

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'topUp(nominal) dan bayar(nominal) adalah method yang memanipulasi properti internal this.saldo.',
      'Sintaks ES6 memungkinkan penulisan method ringkas topUp() {} tanpa perlu menulis topUp: function() {}.'
    ],
    quiz: {
      question: 'Apa definisi paling tepat dari Method di dalam objek JavaScript?',
      options: [
        'Variabel angka di luar fungsi',
        'Properti objek yang berisi definisi fungsi',
        'Perulangan loop khusus objek',
        'Tipe data string'
      ],
      answer: 1,
      explanation: 'Method adalah properti di dalam objek yang nilainya berupa sebuah fungsi.'
    },
    challenge: {
      title: 'Tantangan: Buat Method Sapa di Objek',
      description: 'Tambahkan method `sapa()` di dalam objek `const orang = { nama: "Ali", sapa() { return "Halo " + this.nama; } };`.',
      startingCode: `const orang = {\n  nama: "Ali",\n  // Tulis method sapa di sini:\n};`,
      solution: `const orang = {\n  nama: "Ali",\n  sapa() {\n    return "Halo " + this.nama;\n  }\n};`
    }
  },

  // ── 54. OBJECT THIS ─────────────────────────────────────────────────────
  {
    id: 'object-this',
    title: 'Object this',
    chapter: 'JS Objects',
    chapterId: 'js-chap-objects',
    order: 54,
    overview: 'Kuasai kata kunci this: representasi konteks eksekusi pemilik saat ini, perilaku this di method objek vs fungsi global vs event listener, serta method call(), apply(), bind().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS OBJECTS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 54 / 56</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧭 Memahami Kata Kunci this di JavaScript</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Kata kunci <code>this</code> merujuk pada <strong>objek yang sedang mengeksekusi kode saat ini</strong>. Nilai <code>this</code> bergantung sepenuhnya pada <em>bagaimana fungsi tersebut dipanggil</em> saat runtime.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Object this Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Eksperimen Konteks this</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const person1 = {
      namaDepan: 'Budi',
      namaBelakang: 'Pratama',
      namaLengkap() {
        return this.namaDepan + ' ' + this.namaBelakang;
      }
    };

    const person2 = {
      namaDepan: 'Siti',
      namaBelakang: 'Rahmawati'
    };

    log += '1. Method this Person1: <strong>' + person1.namaLengkap() + '</strong><br>';

    // Meminjam method person1 untuk person2 dengan .call(person2)
    let namaPerson2 = person1.namaLengkap.call(person2);
    log += '2. Method Borrowing (call) untuk Person2: <strong>' + namaPerson2 + '</strong>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Di dalam method person1.namaLengkap(), this otomatis merujuk ke objek person1.',
      'person1.namaLengkap.call(person2) secara eksplisit mengubah target this menjadi person2 sehingga menghasilkan "Siti Rahmawati".'
    ],
    quiz: {
      question: 'Di dalam sebuah method objek standar, kata kunci this merujuk kepada siapa?',
      options: [
        'Objek global window',
        'Objek pemilik yang memanggil method tersebut',
        'Tag HTML pembuka',
        'Tipe data undefined'
      ],
      answer: 1,
      explanation: 'Di dalam method objek standar, `this` merujuk langsung kepada objek pemilik (*owner object*) tempat method tersebut dipanggil.'
    },
    challenge: {
      title: 'Tantangan: Gunakan this untuk Mengambil Nama',
      description: 'Lengkapi method `getNama()` agar mengembalikan `this.nama`.',
      startingCode: `const user = {\n  nama: "Fadila",\n  getNama() {\n    // Return nama via this:\n  }\n};`,
      solution: `const user = {\n  nama: "Fadila",\n  getNama() {\n    return this.nama;\n  }\n};`
    }
  },

  // ── 55. OBJECT DISPLAY ──────────────────────────────────────────────────
  {
    id: 'object-display',
    title: 'Object Display',
    chapter: 'JS Objects',
    chapterId: 'js-chap-objects',
    order: 55,
    overview: 'Kuasai teknik menampilkan objek: JSON.stringify(), Object.values(), Object.entries(), serta perulangan for...in tanpa menghasilkan [object Object].',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS OBJECTS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 55 / 56</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🖥️ 4 Cara Menampilkan Objek ke Layar</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Jika Anda langsung mencetak objek ke HTML (misal <code>el.innerHTML = obj</code>), browser hanya menampilkan <code>[object Object]</code>. Untuk menampilkannya secara bermakna, gunakan <code>JSON.stringify()</code>, <code>Object.values()</code>, atau loop.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Object Display</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Teknik Serialisasi & Menampilkan Objek</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const hero = {
      nama: 'Gatotkaca',
      role: 'Tank / Fighter',
      level: 15,
      hp: 8500
    };

    // 1. JSON.stringify() - Format String JSON Standar
    log += '<strong>1. JSON.stringify():</strong><br>' + JSON.stringify(hero, null, 2) + '<br><br>';

    // 2. Object.values() - Menampilkan seluruh nilai properti sebagai Array
    log += '<strong>2. Object.values():</strong> [' + Object.values(hero).join(', ') + ']<br><br>';

    // 3. Object.entries() - Mengiterasi key & value
    log += '<strong>3. Object.entries() Iterasi:</strong><br>';
    for (let [kunci, nilai] of Object.entries(hero)) {
      log += '&nbsp;&nbsp;• ' + kunci + ': ' + nilai + '<br>';
    }

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'JSON.stringify(hero) mengonversi seluruh struktur objek menjadi string JSON yang mudah dibaca.',
      'Object.values(hero) mengumpulkan seluruh isi nilai properti menjadi Array sederhana.',
      'Object.entries(hero) memecah objek menjadi pasangan [key, value] untuk iterasi cepat dengan for...of.'
    ],
    quiz: {
      question: 'Method bawaan JavaScript manakah yang digunakan untuk mengubah objek menjadi string teks JSON?',
      options: [
        'JSON.parse()',
        'JSON.stringify()',
        'Object.toString()',
        'Object.toJSON()'
      ],
      answer: 1,
      explanation: '`JSON.stringify(object)` digunakan untuk mengonversi objek JavaScript menjadi format string teks JSON.'
    },
    challenge: {
      title: 'Tantangan: Konversi Objek ke JSON String',
      description: 'Konversikan objek `const data = { id: 10 };` ke string JSON menggunakan `JSON.stringify(data);`.',
      startingCode: `const data = { id: 10 };\n// Konversi ke string JSON di bawah:\nlet jsonString = "";`,
      solution: `const data = { id: 10 };\nlet jsonString = JSON.stringify(data);`
    }
  },

  // ── 56. OBJECT CONSTRUCTORS ─────────────────────────────────────────────
  {
    id: 'object-constructors',
    title: 'Object Constructors',
    chapter: 'JS Objects',
    chapterId: 'js-chap-objects',
    order: 56,
    overview: 'Kuasai fungsi konstruktor (Constructor Functions) dengan operator new, blueprint cetak banyak objek, prototipe objek (prototype), dan efisiensi memori method.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS OBJECTS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 56 / 56</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏗️ Constructor Functions & Blueprint Objek (new)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Jika Anda perlu membuat puluhan objek bertipe sama (misal 100 data user), membuat object literal satu per satu tidak efisien. Gunakan <strong>Constructor Function</strong> dengan huruf kapital awal dan panggil menggunakan kata kunci <code>new</code>.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Object Constructors Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Blueprint Cetak Banyak Objek dengan Constructor Function</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // Blueprint Constructor Function (Diawali Huruf Kapital)
    function SiswaLMS(nama, jurusan, angkatan) {
      this.nama = nama;
      this.jurusan = jurusan;
      this.angkatan = angkatan;
    }

    // Menambahkan method bersama via Prototype (Hemat Memori!)
    SiswaLMS.prototype.sapa = function() {
      return 'Halo, saya ' + this.nama + ' dari jurusan ' + this.jurusan + ' (' + this.angkatan + ')';
    };

    // Mencetak objek instan menggunakan kata kunci "new"
    const siswa1 = new SiswaLMS('Rahmat', 'Informatika', 2024);
    const siswa2 = new SiswaLMS('Fadila', 'Sistem Informasi', 2023);

    log += 'Siswa 1: <strong>' + siswa1.sapa() + '</strong><br>';
    log += 'Siswa 2: <strong>' + siswa2.sapa() + '</strong>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'function SiswaLMS() bertindak sebagai cetak biru (blueprint).',
      'Operator new membuat objek kosong baru, mengikat this ke objek tersebut, dan mengembalikan objek hasil instansiasi.',
      'SiswaLMS.prototype.sapa membagikan 1 method fungsi yang sama untuk seluruh instansiasi objek tanpa menduplikasi memori.'
    ],
    quiz: {
      question: 'Operator apa yang digunakan untuk membuat instansiasi objek baru dari sebuah Constructor Function?',
      options: [
        'create',
        'new',
        'make',
        'instance'
      ],
      answer: 1,
      explanation: 'Operator `new` digunakan untuk menginstansiasi objek baru dari sebuah fungsi konstruktor.'
    },
    challenge: {
      title: 'Tantangan: Buat Constructor Mobil',
      description: 'Buat constructor `function Mobil(merk) { this.merk = merk; }` dan instansiasi `const m1 = new Mobil("Toyota");`.',
      startingCode: `// Buat constructor dan instansiasi di bawah:\n`,
      solution: `function Mobil(merk) {\n  this.merk = merk;\n}\nconst m1 = new Mobil("Toyota");`
    }
  }
];
