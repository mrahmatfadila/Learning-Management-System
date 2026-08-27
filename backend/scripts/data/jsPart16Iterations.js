module.exports = [
  // ── 84. JS ITERATION LOOPS ──────────────────────────────────────────────
  {
    id: 'js-iteration-loops',
    title: 'JS Iteration Loops',
    chapter: 'JS Iterations',
    chapterId: 'js-chap-iterations',
    order: 84,
    overview: 'Kuasai dan bandingkan seluruh protokol perulangan di JavaScript: for tradisional, for...in (iterasi nama kunci objek), dan for...of (iterasi langsung isi nilai struktur data Iterable).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS ITERATIONS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 84 / 90</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔄 Perbandingan Protokol Loop (for...in vs for...of)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Jangan sampai tertukar: <code>for...in</code> digunakan untuk mengiterasi <strong>Kunci / Properti Objek</strong>, sedangkan <code>for...of</code> digunakan untuk mengiterasi <strong>Nilai Data Koleksi (Iterable seperti Array, Set, Map, String)</strong>.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Iteration Loops Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Perbandingan for...in vs for...of</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. for...in untuk Objek (Membaca Kunci/Key)
    const laptop = { merk: 'MacBook Pro', chip: 'M3 Max', ram: '36GB' };
    log += '<strong>1. for...in pada Objek:</strong><br>';
    for (let key in laptop) {
      log += '&nbsp;&nbsp;🔑 ' + key + ': ' + laptop[key] + '<br>';
    }

    // 2. for...of pada Array (Membaca Nilai/Value Langsung)
    const frameworks = ['Next.js', 'Express', 'Prisma'];
    log += '<br><strong>2. for...of pada Array:</strong><br>';
    for (let fw of frameworks) {
      log += '&nbsp;&nbsp;🚀 ' + fw + '<br>';
    }

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'for...in mengambil string nama properti (key) dari objek laptop.',
      'for...of mengekstrak isi nilai (value) dari array frameworks secara langsung tanpa perlu indeks angka.',
      'Gunakan selalu for...of ketika bekerja dengan array dan iterable collections.'
    ],
    quiz: {
      question: 'Manakah jenis perulangan yang dirancang khusus untuk mengiterasi nilai elemen dari struktur data Iterable (seperti Array, Set, dan Map)?',
      options: [
        'for...in',
        'for...of',
        'do...while',
        'switch...case'
      ],
      answer: 1,
      explanation: '`for...of` diperkenalkan di ES6 khusus untuk mengiterasi nilai dari objek yang mengimplementasikan protokol Iterable.'
    },
    challenge: {
      title: 'Tantangan: Iterasi dengan for...of',
      description: 'Lakukan iterasi pada `const arr = ["A", "B"];` menggunakan `for (let item of arr) { console.log(item); }`.',
      startingCode: `const arr = ["A", "B"];\n// Tulis for...of di bawah:\n`,
      solution: `const arr = ["A", "B"];\nfor (let item of arr) {\n  console.log(item);\n}`
    }
  },

  // ── 85. JS ITERABLES ────────────────────────────────────────────────────
  {
    id: 'js-iterables',
    title: 'JS Iterables',
    chapter: 'JS Iterations',
    chapterId: 'js-chap-iterations',
    order: 85,
    overview: 'Kuasai konsep Iterable Object: struktur data yang mengimplementasikan protokol [Symbol.iterator] bawaan (String, Array, Set, Map, TypedArray, NodeList, arguments).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS ITERATIONS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 85 / 90</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌐 Protokol Iterable & Symbol.iterator</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Sebuah objek disebut <strong>Iterable</strong> jika objek tersebut mendefinisikan method khusus dengan kunci <code>[Symbol.iterator]</code> yang mengembalikan sebuah objek Iterator.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Iterables Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Iterasi Berbagai Tipe Iterable</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. String adalah Iterable (Iterasi huruf per huruf)
    const kata = 'KODING';
    log += '<strong>1. Iterasi String "KODING":</strong> ';
    for (let char of kata) {
      log += char + ' • ';
    }
    log += '<br><br>';

    // 2. Set adalah Iterable
    const setAngka = new Set([10, 20, 30]);
    log += '<strong>2. Iterasi Set:</strong><br>';
    for (let n of setAngka) {
      log += '&nbsp;&nbsp;➔ Nilai: ' + n + '<br>';
    }

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'String di JavaScript adalah iterable bawaan sehingga bisa dipecah karakter per karakter menggunakan for...of.',
      'Set, Map, dan Array semuanya mematuhi protokol Iterable yang sama.'
    ],
    quiz: {
      question: 'Method simbolik apakah yang wajib dimiliki oleh suatu objek agar dapat dinyatakan sebagai Iterable di JavaScript?',
      options: [
        'Symbol.iterable',
        'Symbol.iterator',
        'Symbol.loop',
        'Symbol.next'
      ],
      answer: 1,
      explanation: 'Sebuah objek menjadi Iterable jika memiliki method yang didefinisikan dengan properti `[Symbol.iterator]`.'
    },
    challenge: {
      title: 'Tantangan: Iterasi Karakter String',
      description: 'Lakukan perulangan huruf pada string `const teks = "JS";` dengan `for (let h of teks) {}`.',
      startingCode: `const teks = "JS";\n// Perulangan for...of di bawah:\nfor (let h of teks) {\n}`,
      solution: `const teks = "JS";\nfor (let h of teks) {\n}`
    }
  },

  // ── 86. JS ITERATORS ────────────────────────────────────────────────────
  {
    id: 'js-iterators',
    title: 'JS Iterators',
    chapter: 'JS Iterations',
    chapterId: 'js-chap-iterations',
    order: 86,
    overview: 'Kuasai protokol Iterator: pembuatan objek iterator manual dengan method next() yang mengembalikan pasangan objek status { value, done } hingga selesai.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS ITERATIONS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 86 / 90</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎯 Protokol Iterator & Method next()</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Iterator adalah objek yang menyediakan method <code>next()</code>. Setiap kali <code>next()</code> dipanggil, ia mengembalikan objek dengan 2 properti: <code>value</code> (nilai data saat ini) dan <code>done</code> (boolean apakah iterasi sudah tamat).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Iterator Protocol Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Eksperimen Custom Iterator Manual</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // Membuat Custom Iterator Penghitung Rentang Angka
    function buatRangeIterator(start, end) {
      let current = start;
      return {
        next: function() {
          if (current <= end) {
            return { value: current++, done: false };
          } else {
            return { value: undefined, done: true };
          }
        }
      };
    }

    const hitung = buatRangeIterator(1, 3);

    log += 'Panggilan 1: ' + JSON.stringify(hitung.next()) + '<br>';
    log += 'Panggilan 2: ' + JSON.stringify(hitung.next()) + '<br>';
    log += 'Panggilan 3: ' + JSON.stringify(hitung.next()) + '<br>';
    log += 'Panggilan 4 (Tamat): <strong>' + JSON.stringify(hitung.next()) + '</strong>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'buatRangeIterator mengembalikan objek dengan method .next().',
      'Ketika current > end, iterator mengembalikan { value: undefined, done: true } yang menandakan iterasi telah berakhir.',
      'Inilah mekanisme internal yang bekerja di balik layar setiap kali JavaScript menjalankan perulangan for...of.'
    ],
    quiz: {
      question: 'Objek struktur apakah yang dikembalikan oleh pemanggilan method next() pada sebuah Iterator?',
      options: [
        '[value, done]',
        '{ value, done }',
        '{ current, total }',
        'boolean true/false'
      ],
      answer: 1,
      explanation: 'Method `next()` selalu mengembalikan objek berformat `{ value: any, done: boolean }`.'
    },
    challenge: {
      title: 'Tantangan: Struktur Return Iterator',
      description: 'Lengkapi return `{ value: 10, done: false }`.',
      startingCode: `function getNext() {\n  return { value: 10, done: false };\n}`,
      solution: `function getNext() {\n  return { value: 10, done: false };\n}`
    }
  },

  // ── 87. JS GENERATORS ───────────────────────────────────────────────────
  {
    id: 'js-generators',
    title: 'JS Generators',
    chapter: 'JS Iterations',
    chapterId: 'js-chap-iterations',
    order: 87,
    overview: 'Kuasai fungsi Generator di JavaScript: deklarasi function*, kata kunci yield untuk menjeda eksekusi fungsi on-demand, streaming data sekuensial tak terbatas, dan komunikasi bidirectional.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS ITERATIONS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 87 / 90</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚡ JavaScript Generator Functions (function* & yield)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Fungsi generator dapat <strong>dijeda (*paused*)</strong> di tengah eksekusi dan <strong>dilanjutkan kembali (*resumed*)</strong> di kemudian hari menggunakan kata kunci <code>yield</code>. Generator mengotomatiskan pembuatan Iterator secara elegan.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Generators Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Generator Auto-Increment ID Unik</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // Generator Function (Ditandai dengan simbol bintang *)
    function* generatorIdOtomatis() {
      let id = 1001;
      while (true) { // Infinite Generator aman karena dijeda oleh yield!
        yield 'TRANS-' + id++;
      }
    }

    const gen = generatorIdOtomatis();

    log += 'ID Transaksi 1: <strong>' + gen.next().value + '</strong><br>';
    log += 'ID Transaksi 2: <strong>' + gen.next().value + '</strong><br>';
    log += 'ID Transaksi 3: <strong>' + gen.next().value + '</strong><br>';
    log += 'ID Transaksi 4: <strong>' + gen.next().value + '</strong>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'function* menandai deklarasi sebuah Generator Function.',
      'yield menjeda eksekusi fungsi dan mengirimkan nilainya ke pemanggil .next().',
      'Perulangan while (true) di dalam generator tidak menyebabkan crash browser karena kode berhenti menunggu pemanggilan .next() berikutnya.'
    ],
    quiz: {
      question: 'Kata kunci apakah yang digunakan di dalam fungsi generator untuk menjeda eksekusi dan mengembalikan nilai parsial?',
      options: [
        'pause',
        'yield',
        'wait',
        'stop'
      ],
      answer: 1,
      explanation: 'Kata kunci `yield` digunakan untuk menjeda eksekusi generator dan menyerahkan nilai keluar.'
    },
    challenge: {
      title: 'Tantangan: Buat Generator Sederhana',
      description: 'Buat fungsi generator `function* testGen() { yield 1; yield 2; }`.',
      startingCode: `// Tulis generator function di bawah:\n`,
      solution: `function* testGen() {\n  yield 1;\n  yield 2;\n}`
    }
  }
];
