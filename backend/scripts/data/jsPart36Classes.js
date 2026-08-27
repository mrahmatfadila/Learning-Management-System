module.exports = [
  // ── 237. JS CLASSES ─────────────────────────────────────────────────────
  {
    id: 'js-classes',
    title: 'JS Classes',
    chapter: 'JS Classes',
    chapterId: 'js-chap-classes',
    order: 237,
    overview: 'Sintaks ES6 Class di JavaScript: constructor(), method deklarasi, instance properties, class field declarations, dan enkapsulasi private fields (#privateField).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS CLASSES</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 237 / 239</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏛️ Paradigma OOP Modern: ES6 Classes</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Class diperkenalkan pada ES6 sebagai <em>syntactic sugar</em> di atas sistem pewarisan prototipe JavaScript. Class membuat penulisan kode berorientasi objek (OOP) menjadi jauh lebih rapi, terstruktur, dan mudah dipahami.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Classes Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Class dengan Enkapsulasi Private Field (#)</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    class UserAccount {
      // Public Field
      nama;
      // Private Field murni (dimulai dengan tanda pagar #)
      #passwordHash;

      constructor(nama, password) {
        this.nama = nama;
        this.#passwordHash = 'HASH_' + password + '_SECURE';
      }

      cekAutentikasi(inputPassword) {
        return this.#passwordHash === ('HASH_' + inputPassword + '_SECURE');
      }
    }

    const akunUser = new UserAccount('Rahmat Fadila', '123456');

    log += '• Nama Pengguna: <strong>' + akunUser.nama + '</strong><br>';
    log += '• Login dengan Password Benar: <strong>' + akunUser.cekAutentikasi('123456') + '</strong> ✅<br>';
    log += '• Private Field #passwordHash terlindungi dari akses luar!';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'constructor() dijalankan otomatis saat instansiasi objek baru dibuat dengan kata kunci new.',
      'Field yang diawali tanda pagar (#) adalah private field resmi yang tidak dapat diakses atau diubah dari luar class.'
    ],
    quiz: {
      question: 'Karakter simbol apakah yang digunakan di JavaScript modern untuk mendeklarasikan Private Field pada sebuah Class?',
      options: [
        '_ (Underscore)',
        '# (Hash / Pagar)',
        '$ (Dolar)',
        '@ (At)'
      ],
      answer: 1,
      explanation: 'Simbol `#` (hash) digunakan untuk mendefinisikan field privat murni pada class di JavaScript modern.'
    },
    challenge: {
      title: 'Tantangan: Deklarasikan Class Sederhana',
      description: 'Buat class `class Car { constructor(m) { this.m = m; } }`.',
      startingCode: `// Tulis class Car di bawah:\n`,
      solution: `class Car { constructor(m) { this.m = m; } }`
    }
  },

  // ── 238. JS CLASS INHERITANCE ───────────────────────────────────────────
  {
    id: 'js-class-inheritance',
    title: 'JS Class Inheritance',
    chapter: 'JS Classes',
    chapterId: 'js-chap-classes',
    order: 238,
    overview: 'Pewarisan Kelas di JavaScript: kata kunci extends, pemanggilan super constructor dengan super(), method overriding, dan prinsip Polimorfisme.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS CLASSES</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 238 / 239</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧬 Pewarisan Kelas (extends & super)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Kata kunci <code>extends</code> digunakan untuk membuat subclass turunan dari superclass induk. Method <code>super()</code> <strong>wajib dipanggil</strong> di dalam constructor subclass sebelum mengakses kata kunci <code>this</code>.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Class Inheritance Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Pewarisan Superclass & Subclass</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // Superclass Induk
    class User {
      constructor(nama, email) {
        this.nama = nama;
        this.email = email;
      }

      perkenalan() {
        return 'Nama: ' + this.nama + ' (' + this.email + ')';
      }
    }

    // Subclass Turunan
    class Instructor extends User {
      constructor(nama, email, spesialisasi) {
        super(nama, email); // Memanggil constructor User induk!
        this.spesialisasi = spesialisasi;
      }

      // Method Overriding
      perkenalan() {
        return super.perkenalan() + ' | Instruktur Spesialis: <strong>' + this.spesialisasi + '</strong> 🎓';
      }
    }

    const pakGuru = new Instructor('Rahmat Fadila', 'rahmat@lms.com', 'Fullstack JavaScript');

    log += '• ' + pakGuru.perkenalan() + '<br>';
    log += '• Apakah pakGuru instanceof User? <strong>' + (pakGuru instanceof User) + '</strong> ✅';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'super(args) menjalankan inisialisasi constructor milik kelas induk.',
      'super.method() memungkinkan subclass memanggil implementasi method kelas induk sebelum menambahkan logika kustom.'
    ],
    quiz: {
      question: 'Method apa yang WAJIB dipanggil di dalam constructor subclass turunan sebelum kata kunci this dapat digunakan?',
      options: [
        'super()',
        'parent()',
        'this.super()',
        'base()'
      ],
      answer: 0,
      explanation: 'Pemanggilan `super()` wajib dilakukan terlebih dahulu di dalam constructor subclass sebelum menyentuh `this`.'
    },
    challenge: {
      title: 'Tantangan: Buat Subclass dengan extends',
      description: 'Lengkapi pewarisan `class Dog extends Animal { constructor() { super(); } }`.',
      startingCode: `class Animal {}\nclass Dog extends Animal {\n  constructor() {\n    super();\n  }\n}`,
      solution: `class Animal {}\nclass Dog extends Animal {\n  constructor() {\n    super();\n  }\n}`
    }
  },

  // ── 239. JS CLASS STATIC ────────────────────────────────────────────────
  {
    id: 'js-class-static',
    title: 'JS Class Static',
    chapter: 'JS Classes',
    chapterId: 'js-chap-classes',
    order: 239,
    overview: 'Static Methods & Static Fields di JavaScript: kata kunci static, utility helpers level kelas tanpa instansiasi objek, dan Static Initialization Blocks (static {}).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS CLASSES</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 239 / 239 (FINAL MATERI JS LENGKAP)</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚡ Method & Field Statis (static)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Kata kunci <code>static</code> mendefinisikan method atau properti yang melekat pada <strong>Class itu sendiri</strong>, bukan pada objek instansi yang dibuat dari class tersebut (seperti halnya <code>Math.max()</code> atau <code>Array.from()</code>).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Class Static Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Utility Helper Tanpa Instansiasi Objek</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    class FormatHelper {
      // Static Field
      static MATA_UANG = 'IDR';

      // Static Method (Dipanggil langsung dari FormatHelper.rupiah())
      static rupiah(nominal) {
        return 'Rp ' + Number(nominal).toLocaleString('id-ID');
      }

      static slugify(teks) {
        return teks.toLowerCase().trim().replace(/\\s+/g, '-');
      }
    }

    log += '• Format Rupiah: <strong>' + FormatHelper.rupiah(1500000) + '</strong><br>';
    log += '• Format Slug URL: <strong>' + FormatHelper.slugify('Mastering Fullstack JavaScript') + '</strong><br><br>';
    log += '🎉 <strong>SELAMAT! 239 MATERI KURIKULUM JAVASCRIPT LENGKAP TELAH BERHASIL DI-SEED!</strong>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Static method dipanggil langsung pada NamaKelas.namaMethod() tanpa memerlukan kata kunci new.',
      'Static methods ideal untuk membuat fungsi pembantu umum (*utility functions*).'
    ],
    quiz: {
      question: 'Bagaimana cara memanggil sebuah static method yang didefinisikan di dalam class bernama MathUtil?',
      options: [
        'const m = new MathUtil(); m.hitung();',
        'MathUtil.hitung(); (Langsung pada nama class)',
        'this.hitung();',
        'static.hitung();'
      ],
      answer: 1,
      explanation: 'Static method dipanggil langsung pada nama Class-nya (`NamaClass.method()`) tanpa perlu membuat objek instansi dengan `new`.'
    },
    challenge: {
      title: 'Tantangan Terakhir: Buat Static Method',
      description: 'Lengkapi class `class Util { static run() { return "OK"; } }`.',
      startingCode: `class Util {\n  static run() {\n    return "OK";\n  }\n}`,
      solution: `class Util {\n  static run() {\n    return "OK";\n  }\n}`
    }
  }
];
