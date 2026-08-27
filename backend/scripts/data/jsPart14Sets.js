module.exports = [
  // ── 75. JS SETS ─────────────────────────────────────────────────────────
  {
    id: 'js-sets',
    title: 'JS Sets',
    chapter: 'JS Sets',
    chapterId: 'js-chap-sets',
    order: 75,
    overview: 'Kuasai struktur data Set di JavaScript: koleksi nilai unik tanpa duplikasi elemen, inisialisasi new Set(), properti size, dan konversi instan Array ke Set untuk deduplikasi data.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS SETS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 75 / 90</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">💎 Koleksi Nilai Unik (JavaScript Set)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>Set</code> adalah struktur data bawaan JavaScript yang menyimpan sekumpulan nilai unik. Setiap nilai hanya boleh muncul <strong>tepat satu kali</strong> di dalam sebuah Set; nilai duplikat akan otomatis diabaikan.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Sets Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Deduplikasi Data dengan JavaScript Set</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. Array awal yang memiliki banyak duplikasi
    const tagList = ['html', 'css', 'javascript', 'react', 'css', 'html', 'nodejs'];
    log += 'Array Asli (Ada duplikasi): [' + tagList.join(', ') + ']<br>';
    log += 'Panjang Array Asli: ' + tagList.length + '<br><br>';

    // 2. Membersihkan duplikasi dengan new Set()
    const uniqueTagsSet = new Set(tagList);
    log += 'Total Elemen Unik (Set.size): <strong>' + uniqueTagsSet.size + '</strong><br>';

    // 3. Mengubah kembali ke Array menggunakan Spread Operator [...]
    const cleanTagsArray = [...uniqueTagsSet];
    log += 'Array Bersih (Bebas Duplikat): [' + cleanTagsArray.join(', ') + '] ✅';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'new Set(tagList) secara otomatis memfilter dan menghapus semua nilai duplikat ("html" dan "css").',
      'uniqueTagsSet.size mengembalikan jumlah elemen unik di dalam Set.',
      '[...uniqueTagsSet] mengonversi kembali Set menjadi Array reguler dengan cepat.'
    ],
    quiz: {
      question: 'Apa yang terjadi jika kita mencoba menambahkan nilai yang sudah ada ke dalam objek Set?',
      options: [
        'Melempar error DuplicateValueError',
        'Nilai duplikat diabaikan secara diam-diam dan ukuran Set tidak bertambah',
        'Nilai lama ditimpa dan dipindahkan ke posisi akhir',
        'Set otomatis berubah menjadi Array'
      ],
      answer: 1,
      explanation: 'Set hanya menyimpan nilai unik. Jika kita menambahkan nilai yang sudah ada, penambahan tersebut otomatis diabaikan tanpa error.'
    },
    challenge: {
      title: 'Tantangan: Buat Set dari Array',
      description: 'Bersihkan duplikasi dari `[1, 2, 2, 3]` dengan membuat `const s = new Set([1, 2, 2, 3]);`.',
      startingCode: `// Buat Set unik di bawah:\n`,
      solution: `const s = new Set([1, 2, 2, 3]);`
    }
  },

  // ── 76. JS SET METHODS ──────────────────────────────────────────────────
  {
    id: 'js-set-methods',
    title: 'JS Set Methods',
    chapter: 'JS Sets',
    chapterId: 'js-chap-sets',
    order: 76,
    overview: 'Kuasai seluruh method esensial objek Set: add(), delete(), has() (pemeriksaan keanggotaan O(1)), clear(), serta perulangan forEach() dan values().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS SETS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 76 / 90</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚡ Method Manipulasi & Pencarian Cepat Set</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Keunggulan utama <code>Set</code> dibanding Array adalah kecepatan pengecekan keanggotaan (<code>set.has()</code>) yang beroperasi dalam kompleksitas waktu <strong>O(1)</strong> konstan super cepat.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Set Methods Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Sistem Whitelist Akses User (Set Methods)</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const whitelist = new Set();

    // 1. add() - Menambah anggota baru
    whitelist.add('user_rahmat');
    whitelist.add('user_alex');
    whitelist.add('user_siti');

    log += 'Whitelist Terdaftar (' + whitelist.size + ' user): ' + [...whitelist].join(', ') + '<br><br>';

    // 2. has() - Pemeriksaan cepat O(1)
    log += 'Apakah user_alex ada di whitelist? ➔ <strong>' + whitelist.has('user_alex') + '</strong> ✅<br>';
    log += 'Apakah user_hacker ada di whitelist? ➔ <strong>' + whitelist.has('user_hacker') + '</strong> ❌<br><br>';

    // 3. delete() - Menghapus anggota
    whitelist.delete('user_alex');
    log += 'Setelah delete("user_alex"): ' + [...whitelist].join(', ');

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'whitelist.add() menambahkan elemen baru ke dalam himpunan.',
      'whitelist.has("user_alex") memeriksa keberadaan data secara instan tanpa perlu iterasi lambat seperti di array.',
      'whitelist.delete("user_alex") menghapus elemen spesifik dari Set.'
    ],
    quiz: {
      question: 'Method Set manakah yang digunakan untuk memeriksa apakah suatu nilai terdapat di dalam Set?',
      options: [
        'contains()',
        'includes()',
        'has()',
        'exists()'
      ],
      answer: 2,
      explanation: 'Method `set.has(value)` digunakan untuk memeriksa apakah sebuah nilai ada di dalam Set.'
    },
    challenge: {
      title: 'Tantangan: Periksa Nilai dengan has()',
      description: 'Gunakan `mySet.has(10)` untuk memeriksa nilai 10 pada Set `const mySet = new Set([10, 20]);`.',
      startingCode: `const mySet = new Set([10, 20]);\n// Cek nilai 10 di bawah:\nlet ada = false;`,
      solution: `const mySet = new Set([10, 20]);\nlet ada = mySet.has(10);`
    }
  },

  // ── 77. JS SET LOGIC ────────────────────────────────────────────────────
  {
    id: 'js-set-logic',
    title: 'JS Set Logic',
    chapter: 'JS Sets',
    chapterId: 'js-chap-sets',
    order: 77,
    overview: 'Kuasai operasi logika himpunan matematika modern (ES2024): Union (gabungan), Intersection (irisan), Difference (selisih), Symmetric Difference, dan subset testing.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS SETS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 77 / 90</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧮 Logika Himpunan (Union, Intersection, Difference)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Operasi logika himpunan memungkinkan Anda membandingkan dua kelompok data: mencari irisan keanggotaan bersama (*Intersection*), menggabungkan keduanya (*Union*), atau mencari selisih data (*Difference*).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Set Logic Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Operasi Himpunan: Skill Karyawan A vs B</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const skillA = new Set(['HTML', 'CSS', 'JavaScript', 'React']);
    const skillB = new Set(['JavaScript', 'React', 'NodeJS', 'PostgreSQL']);

    // 1. Intersection (Irisan Skill yang sama-sama dikuasai)
    const irisan = new Set([...skillA].filter(x => skillB.has(x)));
    log += '1. <strong>Intersection (Skill Bersama):</strong> [' + [...irisan].join(', ') + ']<br><br>';

    // 2. Union (Semua Skill Gabungan)
    const gabungan = new Set([...skillA, ...skillB]);
    log += '2. <strong>Union (Total Skill Gabungan):</strong> [' + [...gabungan].join(', ') + ']<br><br>';

    // 3. Difference (Skill yang hanya dimiliki oleh A tetapi TIDAK oleh B)
    const selisih = new Set([...skillA].filter(x => !skillB.has(x)));
    log += '3. <strong>Difference (Hanya Milik A):</strong> [' + [...selisih].join(', ') + ']';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Intersection mengambil elemen dari skillA yang juga ada di skillB dengan [.filter(x => skillB.has(x))].',
      'Union menggabungkan kedua Set menggunakan spread operator [...skillA, ...skillB] yang otomatis menduplikasi.',
      'Difference menyaring elemen skillA yang tidak dimiliki oleh skillB.'
    ],
    quiz: {
      question: 'Operasi logika himpunan manakah yang mencari data yang sama-sama terdapat di kedua himpunan?',
      options: [
        'Union',
        'Intersection (Irisan)',
        'Difference (Selisih)',
        'Complement'
      ],
      answer: 1,
      explanation: 'Operasi `Intersection` (Irisan) menghasilkan himpunan baru yang hanya berisi elemen yang ada di kedua himpunan sekaligus.'
    },
    challenge: {
      title: 'Tantangan: Gabungkan Dua Set (Union)',
      description: 'Gabungkan `setA` dan `setB` ke Set baru `const gabung = new Set([...setA, ...setB]);`.',
      startingCode: `const setA = new Set([1, 2]);\nconst setB = new Set([2, 3]);\n// Buat Set gabung di bawah:\n`,
      solution: `const setA = new Set([1, 2]);\nconst setB = new Set([2, 3]);\nconst gabung = new Set([...setA, ...setB]);`
    }
  },

  // ── 78. JS SET WEAKSET ──────────────────────────────────────────────────
  {
    id: 'js-set-weakset',
    title: 'JS Set WeakSet',
    chapter: 'JS Sets',
    chapterId: 'js-chap-sets',
    order: 78,
    overview: 'Pelajari WeakSet: struktur data khusus objek yang memegang referensi lemah (Weak Reference) sehingga objek dapat otomatis dibersihkan oleh Garbage Collector saat tidak lagi terpakai.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS SETS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 78 / 90</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛡️ Pencegahan Kebocoran Memori dengan WeakSet</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>WeakSet</code> hanya dapat menyimpan <strong>Objek</strong> (bukan tipe primitif). Karakteristik utamanya adalah referensi lemah (*weakly held*): jika objek di dalamnya tidak lagi dirujuk di variabel lain, Garbage Collector akan otomatis menghapus objek tersebut dari memori.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS WeakSet Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Penanda Objek yang Sudah Diproses (WeakSet)</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const processedDOMNodes = new WeakSet();

    let userCard1 = { id: 'card-1', title: 'User Card Rahmat' };
    let userCard2 = { id: 'card-2', title: 'User Card Alex' };

    // Tandai bahwa userCard1 sudah diproses
    processedDOMNodes.add(userCard1);

    log += 'Apakah userCard1 sudah diproses? ➔ ' + processedDOMNodes.has(userCard1) + ' ✅<br>';
    log += 'Apakah userCard2 sudah diproses? ➔ ' + processedDOMNodes.has(userCard2) + ' ❌<br><br>';
    log += 'WeakSet mencegah memory leak karena objek akan otomatis lenyap saat elemen di-destroy!';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'WeakSet hanya menerima objek (bukan string/angka).',
      'Jika userCard1 di-assign ke null di masa depan, entri di processedDOMNodes otomatis dibersihkan oleh Garbage Collector.',
      'WeakSet tidak memiliki properti .size dan tidak bisa di-iterasi dengan for...of.'
    ],
    quiz: {
      question: 'Tipe data apakah yang BISA disimpan di dalam sebuah WeakSet?',
      options: [
        'Hanya angka integer',
        'Hanya String teks',
        'Hanya Objek (Object references)',
        'Semua jenis tipe data'
      ],
      answer: 2,
      explanation: 'WeakSet secara khusus hanya menerima kumpulan referensi Objek.'
    },
    challenge: {
      title: 'Tantangan: Buat Instansiasi WeakSet',
      description: 'Buat instansiasi WeakSet baru `const ws = new WeakSet();`.',
      startingCode: `// Buat WeakSet di bawah:\n`,
      solution: `const ws = new WeakSet();`
    }
  },

  // ── 79. JS SET REFERENCE ────────────────────────────────────────────────
  {
    id: 'js-set-reference',
    title: 'JS Set Reference',
    chapter: 'JS Sets',
    chapterId: 'js-chap-sets',
    order: 79,
    overview: 'Kamus referensi lengkap seluruh method, properti, dan kompleksitas waktu dari objek Set dan WeakSet di standar ECMAScript.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS SETS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 79 / 90</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📚 Kamus Referensi Objek Set</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Tabel berikut merangkum seluruh method dan properti standar objek Set.
          </p>
        </div>

        <div class="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-xl text-xs">
          <table class="w-full text-left">
            <thead class="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white">
              <tr>
                <th class="p-3">Method / Properti</th>
                <th class="p-3">Deskripsi</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-800 font-mono text-slate-600 dark:text-slate-300">
              <tr><td class="p-3 text-amber-500 font-bold">size</td><td>Mengembalikan jumlah total elemen dalam Set.</td></tr>
              <tr><td class="p-3 text-amber-500 font-bold">add(val)</td><td>Menyisipkan elemen baru ke Set.</td></tr>
              <tr><td class="p-3 text-amber-500 font-bold">delete(val)</td><td>Menghapus elemen spesifik.</td></tr>
              <tr><td class="p-3 text-amber-500 font-bold">has(val)</td><td>Mengembalikan true jika elemen ada di Set.</td></tr>
              <tr><td class="p-3 text-amber-500 font-bold">clear()</td><td>Mengosongkan seluruh isi Set.</td></tr>
              <tr><td class="p-3 text-amber-500 font-bold">values()</td><td>Mengembalikan iterator seluruh nilai elemen.</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Set Reference Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Demonstrasi Set.clear() & Set.values()</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const sessionTokens = new Set(['tok_abc', 'tok_def', 'tok_ghi']);
    log += 'Jumlah Token Awal: ' + sessionTokens.size + '<br>';

    // Iterasi values()
    log += 'Daftar Token Aktif:<br>';
    for (let token of sessionTokens.values()) {
      log += '&nbsp;&nbsp;🔑 ' + token + '<br>';
    }

    // Mengosongkan Set dengan clear()
    sessionTokens.clear();
    log += '<br>Setelah sessionTokens.clear(): Jumlah Token = <strong>' + sessionTokens.size + '</strong>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'sessionTokens.values() menghasilkan iterator untuk mengiterasi seluruh elemen Set.',
      'sessionTokens.clear() menghapus seluruh isi Set seketika dan membuat size menjadi 0.'
    ],
    quiz: {
      question: 'Method apa yang digunakan untuk menghapus SELURUH elemen di dalam sebuah Set sekaligus?',
      options: [
        'deleteAll()',
        'clear()',
        'reset()',
        'empty()'
      ],
      answer: 1,
      explanation: 'Method `set.clear()` digunakan untuk menghapus semua elemen dari Set.'
    },
    challenge: {
      title: 'Tantangan: Kosongkan Set dengan clear()',
      description: 'Kosongkan `s` dengan memanggil `s.clear();`.',
      startingCode: `const s = new Set([1, 2, 3]);\n// Kosongkan Set di bawah:\n`,
      solution: `const s = new Set([1, 2, 3]);\ns.clear();`
    }
  }
];
