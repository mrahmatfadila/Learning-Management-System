module.exports = [
  // ── 91. JS REGEXP ───────────────────────────────────────────────────────
  {
    id: 'js-regexp',
    title: 'JS RegExp',
    chapter: 'JS RegExp',
    chapterId: 'js-chap-regexp',
    order: 91,
    overview: 'Kuasai konsep dasar Regular Expressions (RegExp) di JavaScript: pola pencarian teks dan validasi string menggunakan sintaks literal /pola/flags dan konstruktor new RegExp().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS REGEXP</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 91 / 112</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Pengenalan Regular Expressions (RegExp)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Regular Expression (RegExp) adalah rangkaian karakter yang membentuk pola pencarian teks (*search pattern*). RegExp digunakan untuk mencocokkan, memvalidasi format input (seperti email/password), dan mengganti teks secara otomatis.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS RegExp Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Pencarian Pola Kata dengan RegExp</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const teks = 'Belajar JavaScript di LMS Antigravity sangat menyenangkan!';

    // 1. RegExp Literal (/pola/flags)
    const regex1 = /javascript/i; // i = case-insensitive
    log += 'Apakah ada kata "javascript" (regex1.test)? ➔ <strong>' + regex1.test(teks) + '</strong> ✅<br><br>';

    // 2. RegExp Constructor (new RegExp('pola', 'flags'))
    const kataKunci = 'Antigravity';
    const regex2 = new RegExp(kataKunci, 'i');
    log += 'Pencarian dinamis kata "' + kataKunci + '" ➔ ' + regex2.test(teks) + ' ✅';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      '/javascript/i adalah sintaks RegExp literal di mana karakter i membuat pencarian tidak membedakan huruf besar dan kecil.',
      'regex.test(teks) mengembalikan nilai boolean true jika pola ditemukan di dalam string teks.',
      'new RegExp() sangat berguna ketika pola regex dibuat dari variabel dinamis.'
    ],
    quiz: {
      question: 'Method RegExp manakah yang mengembalikan nilai boolean (true/false) untuk menguji apakah suatu pola cocok dengan string?',
      options: [
        'match()',
        'test()',
        'search()',
        'check()'
      ],
      answer: 1,
      explanation: 'Method `regexp.test(string)` mengembalikan nilai boolean `true` jika pola ditemukan atau `false` jika tidak.'
    },
    challenge: {
      title: 'Tantangan: Uji Kata dengan test()',
      description: 'Gunakan `/kode/i.test("Belajar KODE")` dan simpan ke `let cocok = /kode/i.test("Belajar KODE");`.',
      startingCode: `// Uji regex di bawah:\nlet cocok = false;`,
      solution: `let cocok = /kode/i.test("Belajar KODE");`
    }
  },

  // ── 92. JS REGEXP FLAGS ─────────────────────────────────────────────────
  {
    id: 'js-regexp-flags',
    title: 'JS RegExp Flags',
    chapter: 'JS RegExp',
    chapterId: 'js-chap-regexp',
    order: 92,
    overview: 'Kuasai seluruh modifier flags pada RegExp: g (global match), i (case-insensitive), m (multiline), s (dotAll), u (unicode), y (sticky), dan d (indices).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS REGEXP</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 92 / 112</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🚩 Modifier Flags pada RegExp</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Flags ditempatkan setelah garis miring penutup regex (misal <code>/pola/gi</code>) untuk mengubah aturan pencocokan mesin regex.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800"><strong class="text-amber-500">g (Global)</strong>: Cari SEMUA kemunculan, bukan hanya yang pertama.</div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800"><strong class="text-amber-500">i (Ignore Case)</strong>: Abaikan perbedaan huruf kapital/kecil.</div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800"><strong class="text-amber-500">m (Multiline)</strong>: ^ dan $ mencocokkan awal/akhir setiap baris.</div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS RegExp Flags Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Penggantian Kata Massal dengan Flag /gi</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const artikel = 'HTML adalah dasar web. html itu mudah. Belajar hTmL di LMS!';

    // Tanpa flag g dan i: Hanya mengganti kata pertama yang sama persis
    let hasilBiasa = artikel.replace(/HTML/, 'CSS');
    log += '1. Tanpa flags (/HTML/):<br>' + hasilBiasa + '<br><br>';

    // Dengan flag /gi: Mengganti SEMUA variasi kata HTML
    let hasilGlobalCase = artikel.replace(/HTML/gi, '<strong style="color:#38bdf8;">JavaScript</strong>');
    log += '2. Dengan flags (/HTML/gi):<br>' + hasilGlobalCase;

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Flag g (global) memastikan seluruh kemunculan kata HTML di dalam string diganti.',
      'Flag i (ignore-case) menangani variasi huruf besar-kecil seperti HTML, html, dan hTmL.',
      'Kombinasi /gi adalah flag yang paling sering digunakan dalam pengolahan teks.'
    ],
    quiz: {
      question: 'Flag RegExp apakah yang digunakan untuk mencari SEMUA kemunculan pola teks di seluruh string (bukan hanya yang pertama kali ditemukan)?',
      options: [
        'i',
        'g',
        'm',
        'a'
      ],
      answer: 1,
      explanation: 'Flag `g` (*global*) menginstruksikan regex untuk menemukan semua kecocokan di seluruh teks.'
    },
    challenge: {
      title: 'Tantangan: Buat Regex Global Case-Insensitive',
      description: 'Buat regex literal `const rg = /react/gi;`.',
      startingCode: `// Buat regex di bawah:\n`,
      solution: `const rg = /react/gi;`
    }
  },

  // ── 93. JS REGEXP CLASSES ───────────────────────────────────────────────
  {
    id: 'js-regexp-classes',
    title: 'JS RegExp Classes',
    chapter: 'JS RegExp',
    chapterId: 'js-chap-regexp',
    order: 93,
    overview: 'Kuasai Character Classes dalam kurung siku []: [abc], negasi [^abc], rentang angka [0-9], rentang huruf [a-z], [A-Z], dan kombinasi [a-zA-Z0-9].',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS REGEXP</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 93 / 112</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔠 Kelas Karakter (Character Classes)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Kurung siku <code>[ ]</code> digunakan untuk mendefinisikan himpunan karakter apa pun yang diizinkan untuk dicocokkan pada posisi tertentu. Tanda sisip <code>^</code> di dalam kurung siku berfungsi sebagai negasi (TIDAK BOLEH mengandung karakter tersebut).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS RegExp Classes Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Ekstraksi Karakter Tertentu dengan Classes</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const kodeProduk = 'SKU-9021-XL-ID';

    // 1. [0-9] - Ambil hanya angka
    let hanyaAngka = kodeProduk.match(/[0-9]/g);
    log += '1. Karakter Angka [0-9]: [' + hanyaAngka.join(', ') + ']<br><br>';

    // 2. [A-Z] - Ambil hanya huruf kapital
    let hanyaHurufKapital = kodeProduk.match(/[A-Z]/g);
    log += '2. Huruf Kapital [A-Z]: [' + hanyaHurufKapital.join(', ') + ']<br><br>';

    // 3. [^0-9] - Negasi: Ambil semua karakter yang BUKAN angka
    let bukanAngka = kodeProduk.match(/[^0-9]/g);
    log += '3. Karakter Non-Angka [^0-9]: [' + bukanAngka.join(', ') + ']';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      '[0-9] mencocokkan digit angka antara 0 hingga 9.',
      '[A-Z] mencocokkan huruf besar latin.',
      '[^0-9] adalah negasi yang mencocokkan semua karakter selain angka (seperti tanda hubung dan huruf).'
    ],
    quiz: {
      question: 'Apa arti dari pola regex [^abc]?',
      options: [
        'Mencocokkan huruf a, b, atau c di awal baris',
        'Mencocokkan karakter apa saja KECUALI huruf a, b, dan c',
        'Mencocokkan huruf a diikuti b dan c',
        'Mencocokkan hanya huruf kapital ABC'
      ],
      answer: 1,
      explanation: 'Tanda `^` di dalam kurung siku `[^abc]` menyatakan negasi, yaitu mencocokkan karakter apa pun selain a, b, atau c.'
    },
    challenge: {
      title: 'Tantangan: Pola Huruf Kecil',
      description: 'Buat regex karakter kelas huruf kecil `const re = /[a-z]/g;`.',
      startingCode: `// Buat regex di bawah:\n`,
      solution: `const re = /[a-z]/g;`
    }
  },

  // ── 94. JS REGEXP METACHARS ─────────────────────────────────────────────
  {
    id: 'js-regexp-metachars',
    title: 'JS RegExp Metachars',
    chapter: 'JS RegExp',
    chapterId: 'js-chap-regexp',
    order: 94,
    overview: 'Kuasai Metakarakter esensial: \\d (digit angka), \\D (non-digit), \\w (word char: alfanumerik & underscore), \\W, \\s (whitespace spasi/tab), \\S, \\b (word boundary), dan titik . (karakter sembarang).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS REGEXP</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 94 / 112</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚡ Pintasan Metakarakter (Metacharacters)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Metakarakter adalah karakter khusus yang diawali dengan garis miring terbalik (<em>backslash</em> <code>\\</code>) sebagai jalan pintas cepat untuk mencocokkan kategori karakter umum.
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs font-mono text-slate-600 dark:text-slate-300">
          <div class="p-2 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800"><strong class="text-amber-500">\\d</strong>: Digit angka [0-9]</div>
          <div class="p-2 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800"><strong class="text-amber-500">\\w</strong>: Huruf/angka/underscore [a-zA-Z0-9_]</div>
          <div class="p-2 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800"><strong class="text-amber-500">\\s</strong>: Spasi, tab, newline</div>
          <div class="p-2 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800"><strong class="text-amber-500">\\b</strong>: Batas kata (Word boundary)</div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS RegExp Metachars Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Pembersihan & Ekstraksi Data dengan Metakarakter</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const inputForm = 'Total Tagihan: Rp 1.250.000 (Ongkir: Rp 15.000)';

    // 1. Ekstraksi semua digit angka (\\d+)
    let daftarAngka = inputForm.match(/\\d+/g);
    log += 'Semua Blok Angka (\\\\d+): [' + daftarAngka.join(', ') + ']<br><br>';

    // 2. Membersihkan spasi ganda (\\s+) menjadi 1 spasi
    const teksBerantakan = 'Belajar    JavaScript      itu   menyenangkan';
    const teksRapi = teksBerantakan.replace(/\\s+/g, ' ');
    log += 'Teks Rapi (\\\\s+ ➔ spasi tunggal):<br>"' + teksRapi + '"';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      '\\d+ mencocokkan satu atau lebih digit angka yang berurutan.',
      '\\s+ mencocokkan satu atau beberapa spasi kosong berurutan dan menggantinya dengan 1 spasi rapi.'
    ],
    quiz: {
      question: 'Metakarakter manakah yang merupakan pintasan untuk mencocokkan karakter digit angka apa saja [0-9]?',
      options: [
        '\\w',
        '\\d',
        '\\s',
        '\\n'
      ],
      answer: 1,
      explanation: 'Metakarakter `\\d` (digit) setara dengan penulisan kelas karakter `[0-9]`.'
    },
    challenge: {
      title: 'Tantangan: Regex Digit Angka',
      description: 'Buat regex yang mencocokkan digit angka `const regDigit = /\\d+/g;`.',
      startingCode: `// Buat regex digit di bawah:\n`,
      solution: `const regDigit = /\\d+/g;`
    }
  },

  // ── 95. JS REGEXP ASSERTIONS ────────────────────────────────────────────
  {
    id: 'js-regexp-assertions',
    title: 'JS RegExp Assertions',
    chapter: 'JS RegExp',
    chapterId: 'js-chap-regexp',
    order: 95,
    overview: 'Kuasai Assertions pada RegExp: Anchors awal string (^) & akhir string ($), serta Lookahead positif (?=...), Lookahead negatif (?!...), dan Lookbehind (?<=...).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS REGEXP</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 95 / 112</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚓ Posisi Anchors & Lookaround Assertions</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Assertions menguji kondisi posisi tanpa memakan karakter teks (*zero-width match*). <code>^</code> mengunci pencocokan di awal teks, <code>$</code> mengunci di akhir teks, dan Lookahead <code>(?=...)</code> memastikan ada pola tertentu di depannya.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS RegExp Assertions Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Validasi Format dengan Anchors (^ & $)</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // Pola: Wajib 5 digit angka persis dari AWAL (^) hingga AKHIR ($)
    const regexKodePos = /^\\d{5}$/;

    log += 'Kode Pos "12345": ' + regexKodePos.test('12345') + ' ✅ (Valid 5 digit)<br>';
    log += 'Kode Pos "1234": ' + regexKodePos.test('1234') + ' ❌ (Kurang digit)<br>';
    log += 'Kode Pos "12345abc": ' + regexKodePos.test('12345abc') + ' ❌ (Ada karakter haram)<br><br>';

    // Lookahead: Ambil harga hanya yang berawalan mata uang USD ($)
    const kalimat = 'Harga buku adalah $45 dan tiket Rp50000';
    let hargaDolar = kalimat.match(/(?<=\\$)\\d+/); // Lookbehind (?<=\\$)
    log += 'Harga Dolar yang diekstrak: $' + hargaDolar[0];

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      '^\\d{5}$ memastikan seluruh string hanya berisi tepat 5 digit angka dari awal hingga akhir tanpa karakter liar tambahan.',
      '(?<=\\$) adalah Lookbehind yang mencari digit angka yang persis diawali simbol $.'
    ],
    quiz: {
      question: 'Karakter anchor manakah yang digunakan untuk mengunci pencocokan tepat di AKHIR string?',
      options: [
        '^',
        '$',
        '@',
        '#'
      ],
      answer: 1,
      explanation: 'Karakter `$` mengunci pencocokan pada akhir string (*end of string*).'
    },
    challenge: {
      title: 'Tantangan: Kunci Awal dan Akhir String',
      description: 'Buat regex yang mencocokkan kata "ADMIN" dari awal hingga akhir `const re = /^ADMIN$/;`.',
      startingCode: `// Buat regex di bawah:\n`,
      solution: `const re = /^ADMIN$/;`
    }
  },

  // ── 96. JS REGEXP GROUPS ────────────────────────────────────────────────
  {
    id: 'js-regexp-groups',
    title: 'JS RegExp Groups',
    chapter: 'JS RegExp',
    chapterId: 'js-chap-regexp',
    order: 96,
    overview: 'Kuasai Capturing Groups dalam kurung (...): ekstraksi substring hasil tangkapan, Non-Capturing groups (?:...), Named Capturing Groups (?<nama>...), dan Backreferences \\1.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS REGEXP</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 96 / 112</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📦 Capturing Groups & Named Groups</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Tanda kurung <code>( ... )</code> mengelompokkan bagian dari pola regex dan "menangkap" (*captures*) teks yang cocok sehingga dapat diekstrak secara terpisah. ES2018 memperkenalkan <strong>Named Capturing Groups (<code>(?&lt;name&gt;...)</code>)</strong> yang membuat hasil ekstraksi memiliki nama properti yang jelas.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS RegExp Groups Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Parsing Format Tanggal dengan Named Groups</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const teksTanggal = '2026-08-27';

    // Named Capturing Groups: (?<tahun>...), (?<bulan>...), (?<hari>...)
    const regexTgl = /(?<tahun>\\d{4})-(?<bulan>\\d{2})-(?<hari>\\d{2})/;
    const hasil = regexTgl.exec(teksTanggal);

    if (hasil) {
      log += 'Tahun: <strong>' + hasil.groups.tahun + '</strong><br>';
      log += 'Bulan: <strong>' + hasil.groups.bulan + '</strong><br>';
      log += 'Hari: <strong>' + hasil.groups.hari + '</strong><br><br>';
      log += 'Format Indonesia: ' + hasil.groups.hari + '/' + hasil.groups.bulan + '/' + hasil.groups.tahun;
    }

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      '(?<tahun>\\d{4}) menangkap 4 digit angka dan menyimpannya di properti hasil.groups.tahun.',
      'Named groups membuat kode parsing string jauh lebih mudah dibaca dan bebas dari bug nomor indeks array.'
    ],
    quiz: {
      question: 'Sintaks modern apakah yang digunakan untuk memberi nama spesifik pada Capturing Group di RegExp?',
      options: [
        '(name:pattern)',
        '(?<name>pattern)',
        '(:name pattern)',
        '[name=pattern]'
      ],
      answer: 1,
      explanation: 'Sintaks Named Capturing Group ditulis dengan format `(?<name>pattern)`.'
    },
    challenge: {
      title: 'Tantangan: Buat Capturing Group',
      description: 'Bungkus kata "ID" dalam capturing group `const re = /(ID)/;`.',
      startingCode: `// Tulis regex capturing group di bawah:\n`,
      solution: `const re = /(ID)/;`
    }
  },

  // ── 97. JS REGEXP QUANTIFIERS ───────────────────────────────────────────
  {
    id: 'js-regexp-quantifiers',
    title: 'JS RegExp Quantifiers',
    chapter: 'JS RegExp',
    chapterId: 'js-chap-regexp',
    order: 97,
    overview: 'Kuasai simbol pengukur jumlah pengulangan: + (1 atau lebih), * (0 atau lebih), ? (opsional 0 atau 1), {n} (tepat n), {n,} (minimal n), {n,m} (rentang), serta Greedy vs Lazy matching (+?).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS REGEXP</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 97 / 112</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔢 Pengukur Jumlah Pengulangan (Quantifiers)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Quantifiers menentukan berapa kali suatu karakter atau kelompok karakter boleh atau wajib berulang.
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs font-mono text-slate-600 dark:text-slate-300">
          <div class="p-2 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800"><strong class="text-amber-500">+</strong>: 1 atau lebih</div>
          <div class="p-2 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800"><strong class="text-amber-500">*</strong>: 0 atau lebih</div>
          <div class="p-2 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800"><strong class="text-amber-500">?</strong>: 0 atau 1 (Opsional)</div>
          <div class="p-2 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800"><strong class="text-amber-500">{3,8}</strong>: Antara 3 s/d 8 kali</div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS RegExp Quantifiers Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Validasi Panjang Password & URL Opsional</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. {8,16} - Panjang karakter wajib antara 8 s/d 16
    const regexPanjang = /^\\w{8,16}$/;
    log += 'Password "secret123" (9 char): ' + regexPanjang.test('secret123') + ' ✅<br>';
    log += 'Password "pendek" (6 char): ' + regexPanjang.test('pendek') + ' ❌<br><br>';

    // 2. https? - Karakter 's' bersifat opsional (0 atau 1)
    const regexHttp = /^https?:\\/\\//;
    log += '"http://web.com": ' + regexHttp.test('http://web.com') + ' ✅<br>';
    log += '"https://web.com": ' + regexHttp.test('https://web.com') + ' ✅';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      '^\\w{8,16}$ membatasi panjang karakter alfanumerik antara 8 hingga 16 karakter.',
      'https? menandai karakter s sebagai opsional sehingga mencocokkan baik http:// maupun https://.'
    ],
    quiz: {
      question: 'Simbol quantifier manakah yang menandakan bahwa karakter di depannya bersifat opsional (boleh muncul 0 kali atau 1 kali)?',
      options: [
        '+',
        '*',
        '?',
        '#'
      ],
      answer: 2,
      explanation: 'Simbol `?` menyatakan bahwa karakter sebelumnya bersifat opsional (muncul 0 atau 1 kali).'
    },
    challenge: {
      title: 'Tantangan: Buat Pola 4 Digit Angka',
      description: 'Buat regex yang mencocokkan tepat 4 digit angka `const pin = /^\\d{4}$/;`.',
      startingCode: `// Tulis regex 4 digit di bawah:\n`,
      solution: `const pin = /^\\d{4}$/;`
    }
  },

  // ── 98. JS REGEXP PATTERNS ──────────────────────────────────────────────
  {
    id: 'js-regexp-patterns',
    title: 'JS RegExp Patterns',
    chapter: 'JS RegExp',
    chapterId: 'js-chap-regexp',
    order: 98,
    overview: 'Koleksi pola regex standar industri untuk validasi produksi: validasi format Email, Nomor HP Indonesia (+62 / 08), Password Kuat (Huruf Besar, Angka, Simbol), Slug URL, dan Username.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS REGEXP</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 98 / 112</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛡️ Pola Regex Validasi Produksi (Real-World Patterns)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Berikut adalah kumpulan pola regex siap pakai yang umum digunakan pada formulir pendaftaran dan autentikasi web.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS RegExp Patterns Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Form Validator: Email & No. HP Indonesia</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. Pola Validasi Email Standar
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
    log += 'Email "user@gmail.com": ' + emailPattern.test('user@gmail.com') + ' ✅<br>';
    log += 'Email "invalid-email": ' + emailPattern.test('invalid-email') + ' ❌<br><br>';

    // 2. Pola Nomor HP Indonesia (Mulai 08 atau +628, panjang 10-13 digit)
    const phonePattern = /^(\\+62|62|0)8[1-9][0-9]{7,10}$/;
    log += 'No HP "081234567890": ' + phonePattern.test('081234567890') + ' ✅<br>';
    log += 'No HP "+628198765432": ' + phonePattern.test('+628198765432') + ' ✅<br>';
    log += 'No HP "0217654321": ' + phonePattern.test('0217654321') + ' ❌ (Nomor Rumah/Bukan HP)';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'emailPattern memvalidasi bagian username, simbol @, nama domain, dan ekstensi TLD minimal 2 huruf.',
      'phonePattern mengenali awalan +628, 628, maupun 08 dan membatasi panjang digit khas operator seluler Indonesia.'
    ],
    quiz: {
      question: 'Manakah pola regex yang benar untuk mencocokkan awal string email yang valid?',
      options: [
        '^[a-zA-Z0-9._%+-]+@',
        '\\d+@',
        '^[0-9]@',
        '@email$'
      ],
      answer: 0,
      explanation: 'Pola `^[a-zA-Z0-9._%+-]+@` mencocokkan karakter alfanumerik serta titik/minus yang valid sebelum tanda `@`.'
    },
    challenge: {
      title: 'Tantangan: Buat Pola Slug URL',
      description: 'Buat regex slug yang hanya menerima huruf kecil, angka, dan tanda hubung: `const slug = /^[a-z0-9-]+$/;`.',
      startingCode: `// Buat regex slug di bawah:\n`,
      solution: `const slug = /^[a-z0-9-]+$/;`
    }
  },

  // ── 99. JS REGEXP OBJECTS ───────────────────────────────────────────────
  {
    id: 'js-regexp-objects',
    title: 'JS RegExp Objects',
    chapter: 'JS RegExp',
    chapterId: 'js-chap-regexp',
    order: 99,
    overview: 'Kuasai properti objek RegExp: source (pola string mentah), flags, lastIndex (posisi pointer saat iterasi global regex), global, dan ignoreCase.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS REGEXP</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 99 / 112</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚙️ Properti Internal Objek RegExp & lastIndex</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Saat menggunakan flag global <code>g</code>, objek RegExp bersifat <em>stateful</em>: properti <code>lastIndex</code> menyimpan posisi indeks karakter terakhir yang cocok untuk melanjutkan pencarian berikutnya.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS RegExp Objects Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Inspeksi Properti RegExp & Iterasi lastIndex</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const regex = /JS/gi;

    log += '• source: <strong>' + regex.source + '</strong><br>';
    log += '• flags: ' + regex.flags + '<br>';
    log += '• global?: ' + regex.global + '<br><br>';

    // Eksperimen lastIndex dengan loop .exec()
    const teks = 'Belajar JS itu seru. JS sangat cepat.';
    let match;
    log += '<strong>Iterasi posisi kecocokan (lastIndex):</strong><br>';
    while ((match = regex.exec(teks)) !== null) {
      log += '&nbsp;&nbsp;🎯 Ditemukan "' + match[0] + '" pada indeks ' + match.index + ' (lastIndex pointer: ' + regex.lastIndex + ')<br>';
    }

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'regex.source mengembalikan string mentah dari pola tanpa tanda garis miring.',
      'regex.lastIndex secara dinamis maju setiap kali .exec() dijalankan hingga akhir teks tercapai.'
    ],
    quiz: {
      question: 'Properti RegExp manakah yang menyimpan indeks posisi pencarian berikutnya saat menggunakan flag global /g?',
      options: [
        'nextIndex',
        'currentIndex',
        'lastIndex',
        'pointer'
      ],
      answer: 2,
      explanation: 'Properti `lastIndex` menyimpan indeks posisi karakter tempat regex akan memulai pencocokan berikutnya.'
    },
    challenge: {
      title: 'Tantangan: Baca Properti source',
      description: 'Ambil properti `.source` dari regex `const rg = /abc/;` dan simpan ke `let s = rg.source;`.',
      startingCode: `const rg = /abc/;\n// Ambil source di bawah:\nlet s = "";`,
      solution: `const rg = /abc/;\nlet s = rg.source;`
    }
  },

  // ── 100. JS REGEXP METHODS ──────────────────────────────────────────────
  {
    id: 'js-regexp-methods',
    title: 'JS RegExp Methods',
    chapter: 'JS RegExp',
    chapterId: 'js-chap-regexp',
    order: 100,
    overview: 'Kuasai seluruh method pengujian dan pengolahan teks berbasis regex: regexp.test(), regexp.exec(), string.match(), string.matchAll(), string.replace(), string.replaceAll(), string.search(), dan string.split().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS REGEXP</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 100 / 112</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛠️ Kamus Method RegExp & String Regex</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            JavaScript membagi method pemrosesan regex menjadi dua: method milik objek <code>RegExp</code> (<code>test</code>, <code>exec</code>) dan method milik objek <code>String</code> (<code>match</code>, <code>replace</code>, <code>split</code>, <code>search</code>).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS RegExp Methods Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Pemecahan String & Penggantian dengan Regex</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. string.split(regex) - Memecah teks dengan pemisah koma, titik koma, atau spasi
    const dataCSV = 'Apel, Jeruk; Mangga   Pisang';
    const buahList = dataCSV.split(/[,;\\s]+/);
    log += '1. Hasil string.split(/[,;\\\\s]+/):<br>[' + buahList.join(', ') + ']<br><br>';

    // 2. string.search(regex) - Mengembalikan indeks posisi pertama
    const teks = 'Belajar JavaScript Modern';
    let pos = teks.search(/Java/);
    log += '2. Indeks posisi "Java" (search): ' + pos + '<br><br>';

    // 3. string.replace() dengan fungsi pengubah kapital
    let teksTitel = 'belajar koding mandiri'.replace(/\\b\\w/g, c => c.toUpperCase());
    log += '3. Title Case Otomatis: <strong>' + teksTitel + '</strong>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'dataCSV.split(/[,;\\s]+/) mampu memecah string dengan berbagai jenis tanda pemisah sekaligus (koma, titik koma, dan spasi).',
      'teks.replace(/\\b\\w/g, c => c.toUpperCase()) memanfaatkan fungsi callback untuk mengubah setiap huruf awal kata menjadi kapital secara otomatis.'
    ],
    quiz: {
      question: 'Method string manakah yang memecah string menjadi array berdasarkan pemisah pola RegExp?',
      options: [
        'string.slice()',
        'string.split()',
        'string.break()',
        'string.divide()'
      ],
      answer: 1,
      explanation: 'Method `string.split(regexp)` memecah string menjadi array berdasarkan pola regex pemisah yang ditentukan.'
    },
    challenge: {
      title: 'Tantangan: Pecah String dengan Regex Split',
      description: 'Pecah string `const s = "a-b_c";` berdasarkan tanda minus atau underscore dengan `s.split(/[-_]/);`.',
      startingCode: `const s = "a-b_c";\n// Pecah string di bawah:\nlet hasil = [];`,
      solution: `const s = "a-b_c";\nlet hasil = s.split(/[-_]/);`
    }
  }
];
