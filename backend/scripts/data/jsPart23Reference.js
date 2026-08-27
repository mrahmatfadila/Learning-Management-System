module.exports = [
  // ── 127. JS ALPHABETIC ──────────────────────────────────────────────────
  {
    id: 'js-alphabetic',
    title: 'JS Alphabetic',
    chapter: 'JS Reference',
    chapterId: 'js-chap-reference',
    order: 127,
    overview: 'Indeks glosarium komprehensif alfabetis (A-Z) seluruh API bawaan JavaScript, objek global, fungsi built-in, dan method standar ECMAScript.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS REFERENCE</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 127 / 136</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔤 Glosarium Alfabetis API JavaScript (A - Z)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Glosarium cepat untuk menemukan objek dan fungsi built-in JavaScript berdasarkan urutan abjad.
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs font-mono text-slate-600 dark:text-slate-300">
          <div class="p-2.5 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800"><strong class="text-amber-500">A</strong>: Array, ArrayBuffer, async, await</div>
          <div class="p-2.5 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800"><strong class="text-amber-500">B</strong>: BigInt, Boolean, break, bind</div>
          <div class="p-2.5 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800"><strong class="text-amber-500">C</strong>: class, const, continue, console</div>
          <div class="p-2.5 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800"><strong class="text-amber-500">D</strong>: Date, debugger, delete, do...while</div>
          <div class="p-2.5 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800"><strong class="text-amber-500">E</strong>: Error, eval, export, extends</div>
          <div class="p-2.5 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800"><strong class="text-amber-500">F</strong>: fetch, filter, find, Function</div>
          <div class="p-2.5 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800"><strong class="text-amber-500">J</strong>: JSON, join, JavaScript Engine</div>
          <div class="p-2.5 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800"><strong class="text-amber-500">M</strong>: Map, Math, match, module</div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Alphabetic Reference Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Katalog Kamus Objek Bawaan JavaScript</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const glosariumAwal = [
      { huruf: 'A', item: 'Array, ArrayBuffer, Atomics' },
      { huruf: 'B', item: 'BigInt, Boolean' },
      { huruf: 'D', item: 'DataView, Date' },
      { huruf: 'E', item: 'Error, EvalError' },
      { huruf: 'I', item: 'Intl, Infinity, isNaN' },
      { huruf: 'J', item: 'JSON (parse, stringify)' },
      { huruf: 'M', item: 'Map, Math' },
      { huruf: 'P', item: 'Promise, Proxy' },
      { huruf: 'R', item: 'Reflect, RegExp' },
      { huruf: 'S', item: 'Set, String, Symbol' },
      { huruf: 'W', item: 'WeakMap, WeakSet' }
    ];

    for (let g of glosariumAwal) {
      log += '<strong>[' + g.huruf + ']</strong> ➔ ' + g.item + '<br>';
    }

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Glosarium alfabetis memetakan seluruh konstruktor dan namespace built-in standar ECMAScript.'
    ],
    quiz: {
      question: 'Objek bawaan apakah di bawah huruf "J" yang digunakan untuk manipulasi format data pertukaran web (JSON)?',
      options: [
        'JavaScriptObject',
        'JSON',
        'JavaParser',
        'JQuery'
      ],
      answer: 1,
      explanation: 'Objek `JSON` adalah namespace bawaan JavaScript untuk mem-parsing dan membuat string JSON.'
    },
    challenge: {
      title: 'Tantangan: Cetak Objek JSON',
      description: 'Gunakan `JSON.stringify({ a: 1 });`.',
      startingCode: `// Konversi objek ke JSON string di bawah:\nlet s = "";`,
      solution: `let s = JSON.stringify({ a: 1 });`
    }
  },

  // ── 128. JS STATEMENTS ──────────────────────────────────────────────────
  {
    id: 'js-statements',
    title: 'JS Statements',
    chapter: 'JS Reference',
    chapterId: 'js-chap-reference',
    order: 128,
    overview: 'Rangkuman lengkap seluruh sintaks Statements di JavaScript: Control Flow (if, switch), Iteration (for, while, for...of), Jump Statements (break, continue, return), dan Exception Statements (try, catch, throw).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS REFERENCE</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 128 / 136</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📜 Taksonomi Statements di JavaScript</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Statement adalah instruksi aksi yang dieksekusi oleh interpreter. Berbeda dengan *Expression* yang selalu menghasilkan suatu nilai, statement mengatur alur logika dan kontrol program.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Statements Reference Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Kategori Statements di JavaScript</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    log += '<strong>1. Declaration Statements:</strong> <code>let</code>, <code>const</code>, <code>var</code>, <code>function</code>, <code>class</code><br>';
    log += '<strong>2. Conditional Statements:</strong> <code>if...else</code>, <code>switch...case</code><br>';
    log += '<strong>3. Loop Statements:</strong> <code>for</code>, <code>for...in</code>, <code>for...of</code>, <code>while</code>, <code>do...while</code><br>';
    log += '<strong>4. Jump Statements:</strong> <code>break</code>, <code>continue</code>, <code>return</code>, <code>yield</code><br>';
    log += '<strong>5. Exception Statements:</strong> <code>throw</code>, <code>try...catch...finally</code>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Memahami taksonomi statements membantu menstrukturkan alur logika program secara tepat dan efisien.'
    ],
    quiz: {
      question: 'Manakah dari kata kunci berikut yang tergolong sebagai Jump Statement untuk keluar dari perulangan secara instan?',
      options: [
        'if',
        'break',
        'catch',
        'let'
      ],
      answer: 1,
      explanation: 'Statement `break` adalah Jump Statement yang menghentikan loop atau switch block seketika.'
    },
    challenge: {
      title: 'Tantangan: Tulis Statement Return',
      description: 'Lengkapi fungsi untuk mengembalikan nilai `true`: `function isOk() { return true; }`.',
      startingCode: `function isOk() {\n  // Kembalikan true di bawah:\n}`,
      solution: `function isOk() {\n  return true;\n}`
    }
  },

  // ── 129. JS KEYWORDS ────────────────────────────────────────────────────
  {
    id: 'js-keywords',
    title: 'JS Keywords',
    chapter: 'JS Reference',
    chapterId: 'js-chap-reference',
    order: 129,
    overview: 'Kamus kata kunci yang dicadangkan (Reserved Keywords) di JavaScript: kata kunci yang tidak boleh digunakan sebagai nama variabel atau nama fungsi.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS REFERENCE</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 129 / 136</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🚫 Kata Kunci Terlarang untuk Variabel (Reserved Words)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Kata kunci yang dicadangkan (*Reserved Keywords*) memiliki makna khusus dalam sintaks JavaScript dan <strong>dilarang keras digunakan sebagai identifier</strong> (nama variabel, fungsi, atau label).
          </p>
        </div>

        <div class="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-xl text-xs">
          <div class="p-3 bg-slate-900 text-slate-100 font-mono grid grid-cols-3 md:grid-cols-6 gap-2">
            <div>await</div><div>break</div><div>case</div><div>catch</div><div>class</div><div>const</div>
            <div>continue</div><div>debugger</div><div>default</div><div>delete</div><div>do</div><div>else</div>
            <div>export</div><div>extends</div><div>finally</div><div>for</div><div>function</div><div>if</div>
            <div>import</div><div>in</div><div>instanceof</div><div>new</div><div>return</div><div>super</div>
            <div>switch</div><div>this</div><div>throw</div><div>try</div><div>typeof</div><div>var</div>
            <div>void</div><div>while</div><div>with</div><div>yield</div><div>let</div><div>static</div>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Reserved Keywords Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Pemeriksaan Reserved Keywords</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // BENAR: Menggunakan nama variabel yang valid
    let myClass = 'Informatika';
    let userFunction = 'Kirim Email';

    // SALAH (SyntaxError jika diaktifkan):
    // let class = "Informatika"; // Error: 'class' is a reserved keyword!
    // let function = "Test"; // Error: 'function' is a reserved keyword!

    log += '• let myClass: ' + myClass + ' (SAH) ✅<br>';
    log += '• let userFunction: ' + userFunction + ' (SAH) ✅<br><br>';
    log += 'Menggunakan keyword seperti "class" atau "function" sebagai nama variabel akan memicu SyntaxError fatal.';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Menghindari reserved keyword pada penamaan variabel mencegah error kompilasi SyntaxError sejak awal.'
    ],
    quiz: {
      question: 'Manakah nama variabel di bawah ini yang ILEGAL dan menyebabkan SyntaxError di JavaScript?',
      options: [
        'let userClass = "A";',
        'let className = "B";',
        'let class = "C";',
        'let _class = "D";'
      ],
      answer: 2,
      explanation: '`class` adalah reserved keyword di JavaScript, sehingga `let class = ...` dilarang dan memicu SyntaxError.'
    },
    challenge: {
      title: 'Tantangan: Deklarasi Variabel Sah',
      description: 'Deklarasikan variabel `let isPublic = true;` (menghindari keyword public).',
      startingCode: `// Deklarasikan variabel di bawah:\n`,
      solution: `let isPublic = true;`
    }
  },

  // ── 130. JS OPERATORS REFERENCE ─────────────────────────────────────────
  {
    id: 'js-operators-reference',
    title: 'JS Operators Reference',
    chapter: 'JS Reference',
    chapterId: 'js-chap-reference',
    order: 130,
    overview: 'Tabel referensi komprehensif seluruh operator JavaScript: Aritmatika, Assignment, Perbandingan, Logika, Bitwise, Unary, Ternary, Optional Chaining (?.), dan Nullish Coalescing (??).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS REFERENCE</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 130 / 136</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚡ Kamus Seluruh Operator di JavaScript</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Tabel berikut merangkum seluruh operator standar dan modern (ES6 - ES2024).
          </p>
        </div>

        <div class="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-xl text-xs">
          <table class="w-full text-left">
            <thead class="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white">
              <tr>
                <th class="p-3">Kategori</th>
                <th class="p-3">Operator</th>
                <th class="p-3">Contoh</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-800 font-mono text-slate-600 dark:text-slate-300">
              <tr><td class="p-3 font-bold">Aritmatika</td><td>+, -, *, /, %, **</td><td>x ** 2 (Pangkat)</td></tr>
              <tr><td class="p-3 font-bold">Kesetaraan</td><td>===, !==, ==, !=</td><td>a === b (Ketat)</td></tr>
              <tr><td class="p-3 font-bold">Logika Modern</td><td>&&, ||, ??, !</td><td>a ?? b (Nullish)</td></tr>
              <tr><td class="p-3 font-bold">Akses Aman</td><td>?. (Optional Chaining)</td><td>user?.alamat</td></tr>
              <tr><td class="p-3 font-bold">Ternary</td><td>kondisi ? true : false</td><td>skor > 70 ? 'Lulus' : 'Remidi'</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Operators Reference Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Demonstrasi Operator Modern (?. & ??)</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const settingPengguna = {
      tema: 'dark',
      animasi: 0 // 0 adalah angka valid, bukan ketiadaan data
    };

    // Perbedaan || (Falsy) vs ?? (Nullish)
    // 0 dianggap falsy oleh ||, sehingga salah memilih 'aktif'
    let animasiLogicalOr = settingPengguna.animasi || 'aktif'; 
    // ?? hanya aktif jika null/undefined, sehingga angka 0 dipertahankan!
    let animasiNullish = settingPengguna.animasi ?? 'aktif';

    log += '• Menggunakan || : ' + animasiLogicalOr + ' (Salah! Menimpa angka 0)<br>';
    log += '• Menggunakan ?? : <strong>' + animasiNullish + '</strong> (Benar! Mempertahankan nilai 0) ✅';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Operator ?? hanya mengganti nilai jika operan sebelah kiri bernilai null atau undefined, sedangkan 0 dan false dipertahankan secara utuh.'
    ],
    quiz: {
      question: 'Manakah operator yang digunakan untuk melakukan perpangkatan eksponensial di JavaScript modern?',
      options: [
        '^',
        '**',
        '^^',
        'pow'
      ],
      answer: 1,
      explanation: 'Operator `**` adalah operator eksponensial standar di ES6 (misal `2 ** 3` bernilai 8).'
    },
    challenge: {
      title: 'Tantangan: Hitung Pangkat dengan **',
      description: 'Hitung 2 pangkat 5 menggunakan `2 ** 5` dan simpan ke `let p = 2 ** 5;`.',
      startingCode: `// Hitung pangkat di bawah:\nlet p = 0;`,
      solution: `let p = 2 ** 5;`
    }
  },

  // ── 131. JS PRECEDENCE ──────────────────────────────────────────────────
  {
    id: 'js-precedence',
    title: 'JS Precedence',
    chapter: 'JS Reference',
    chapterId: 'js-chap-reference',
    order: 131,
    overview: 'Kuasai urutan prioritas evaluasi operator (Operator Precedence & Associativity): hierarki tanda kurung (), perkalian/pembagian di atas penjumlahan, dan arah evaluasi kiri-ke-kanan vs kanan-ke-kiri.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS REFERENCE</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 131 / 136</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎯 Tingkat Prioritas Operator (Operator Precedence)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Tingkat prioritas (*precedence*) menentukan urutan operator mana yang akan dieksekusi terlebih dahulu dalam sebuah ekspresi yang rumit. Tanda kurung <code>( ... )</code> memiliki prioritas paling tinggi (Level 18 tertinggi).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Precedence Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Eksperimen Tingkat Prioritas Operator</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. Tanpa kurung: Perkalian (*) dievaluasi sebelum Penjumlahan (+)
    let hitung1 = 5 + 3 * 2; // 5 + 6 = 11
    log += '• 5 + 3 * 2 ➔ <strong>' + hitung1 + '</strong> (* menang atas +)<br><br>';

    // 2. Dengan tanda kurung (): Kurung memegang kedaulatan tertinggi
    let hitung2 = (5 + 3) * 2; // 8 * 2 = 16
    log += '• (5 + 3) * 2 ➔ <strong>' + hitung2 + '</strong> (Kurung mengubah alur)<br><br>';

    // 3. Logical Precedence: && dievaluasi sebelum ||
    let hasilLogika = true || false && false; // true || (false && false) ➔ true
    log += '• true || false && false ➔ <strong>' + hasilLogika + '</strong> (&& lebih tinggi dari ||)';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Perkalian dan pembagian memiliki prioritas lebih tinggi dari penjumlahan dan pengurangan.',
      'Tanda kurung selalu disarankan untuk memperjelas alur perhitungan dan menghindari ambiguitas kode.'
    ],
    quiz: {
      question: 'Operator manakah yang memiliki tingkat prioritas (precedence) paling tinggi di JavaScript?',
      options: [
        '+ (Penjumlahan)',
        '* (Perkalian)',
        '( ) (Grouping / Tanda Kurung)',
        '&& (Logical AND)'
      ],
      answer: 2,
      explanation: 'Tanda kurung pengelompokan `( )` memiliki prioritas tertinggi sehingga ekspresi di dalamnya selalu dihitung pertama kali.'
    },
    challenge: {
      title: 'Tantangan: Gunakan Tanda Kurung',
      description: 'Ubah alur perhitungan agar penjumlahan terjadi dahulu: `let r = (10 + 2) * 3;`.',
      startingCode: `// Tulis perhitungan dengan kurung di bawah:\nlet r = 0;`,
      solution: `let r = (10 + 2) * 3;`
    }
  }
];
