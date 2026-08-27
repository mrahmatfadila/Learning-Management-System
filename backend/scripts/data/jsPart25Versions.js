module.exports = [
  // ── 137. JS 2027 ────────────────────────────────────────────────────────
  {
    id: 'js-2027',
    title: 'JS 2027',
    chapter: 'JS Versions',
    chapterId: 'js-chap-versions',
    order: 137,
    overview: 'Masa depan JavaScript & Proposal TC39 Stage 3/4: Temporal API v2, Record & Tuple (Struktur data primitif immutable), Decorators Metadata, dan Pipeline Operator (|>) untuk komposisi fungsi yang bersih.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS VERSIONS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 137 / 153</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🚀 Masa Depan JavaScript (ECMAScript 2027+)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            JavaScript terus berevolusi secara pesat. Fitur masa depan yang paling dinantikan di antaranya adalah <strong>Record & Tuple</strong> (objek dan array primitif yang kebal mutasi) dan <strong>Pipeline Operator (<code>|&gt;</code>)</strong>.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS 2027 Future Features Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Konsep Fitur Masa Depan: Pipeline Operator & Record/Tuple</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // Simulasi Konsep Pipeline Operator (|>)
    // Bentuk tradisional: formatUang(hitungDiskon(tambahPajak(100000)))
    // Bentuk Pipeline: 100000 |> tambahPajak |> hitungDiskon |> formatUang

    const tambahPajak = n => n * 1.11;
    const hitungDiskon = n => n * 0.9;
    const formatUang = n => 'Rp ' + Math.round(n).toLocaleString('id-ID');

    let hargaAwal = 100000;
    let hasilPipa = formatUang(hitungDiskon(tambahPajak(hargaAwal)));

    log += '• Harga Awal: Rp ' + hargaAwal.toLocaleString('id-ID') + '<br>';
    log += '• Hasil Transformasi Komposisi Pipa: <strong>' + hasilPipa + '</strong><br><br>';
    log += 'Fitur Record #{ x: 1 } dan Tuple #[1, 2] akan menghadirkan perbandingan deep equality instan (===).';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Pipeline Operator (|>) dirancang untuk membuat rantai pemanggilan fungsi bersarang menjadi sekuensial dari kiri ke kanan.',
      'Record & Tuple memungkinkan perbandingan #{ a: 1 } === #{ a: 1 } menghasilkan true.'
    ],
    quiz: {
      question: 'Fitur proposal masa depan manakah yang menghadirkan struktur data objek dan array primitif yang kebal dari mutasi (deep immutable)?',
      options: [
        'Record & Tuple',
        'Frozen Objects 2.0',
        'Const Class',
        'Static Primitives'
      ],
      answer: 0,
      explanation: 'Proposal `Record & Tuple` memperkenalkan struktur data `#{}` dan `#[]` yang bersifat primitif dan immutable secara mendalam.'
    },
    challenge: {
      title: 'Tantangan: Rantai Komposisi Fungsi',
      description: 'Hubungkan fungsi: `const hasil = f(g(10));`.',
      startingCode: `const g = x => x * 2;\nconst f = x => x + 5;\n// Hubungkan f(g(10)) di bawah:\nlet hasil = 0;`,
      solution: `const g = x => x * 2;\nconst f = x => x + 5;\nlet hasil = f(g(10));`
    }
  },

  // ── 138. JS 2026 ────────────────────────────────────────────────────────
  {
    id: 'js-2026',
    title: 'JS 2026',
    chapter: 'JS Versions',
    chapterId: 'js-chap-versions',
    order: 138,
    overview: 'ECMAScript 2026 (ES17): Standar JavaScript terbaru, integrasi Async Context untuk pelacakan request lintas asynchronous boundary, dan optimasi runtime web.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS VERSIONS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 138 / 153</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚡ Standar ECMAScript 2026 (ES17)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            ES2026 membawa standarisasi <strong>Async Context</strong> yang memungkinkan pelacakan data state (seperti User Session / Request ID) secara konsisten melewati pemanggilan asinkronus multi-tahap tanpa perlu *prop drilling*.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS 2026 Async Context Concept</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Konsep Pelacakan Konteks Asinkronus (ES2026)</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // Simulasi Async Context Flow
    const konteksRequest = {
      requestId: 'REQ-2026-99182',
      user: 'Rahmat Fadila'
    };

    async function simpanLog(pesan) {
      await new Promise(r => setTimeout(r, 100));
      return '[' + konteksRequest.requestId + '] ' + pesan + ' (Oleh: ' + konteksRequest.user + ')';
    }

    simpanLog('Memperbarui data kurikulum LMS').then(hasil => {
      log += '• Log Asinkronus: <strong>' + hasil + '</strong><br>';
      log += '• Konteks request tetap terjaga utuh melintasi asynchronous boundary!';
      document.getElementById('output').innerHTML = log;
    });
  </script>

</body>
</html>`,
    codeExplanation: [
      'Async Context memungkinkan pelacakan context identifier di backend dan browser secara otomatis di balik layar.'
    ],
    quiz: {
      question: 'Apa manfaat utama dari fitur Async Context yang distandarisasi di ES2026?',
      options: [
        'Mempercepat render grafik 3D',
        'Melacak data konteks (seperti User ID/Trace ID) melintasi operasi asinkronus tanpa mengirimkannya manual di parameter',
        'Mengganti fungsi setTimeout dengan delay sinkronus',
        'Menghapus kebutuhan async/await'
      ],
      answer: 1,
      explanation: 'Async Context menyediakan mekanisme standar untuk melacak data kontekstual melewati pemanggilan asinkronus bertingkat.'
    },
    challenge: {
      title: 'Tantangan: Cetak Request ID',
      description: 'Lengkapi fungsi untuk mengembalikan string dengan awalan `[REQ-01]`: `function getTrace() { return "[REQ-01] OK"; }`.',
      startingCode: `function getTrace() {\n  // Kembalikan string di bawah:\n}`,
      solution: `function getTrace() {\n  return "[REQ-01] OK";\n}`
    }
  },

  // ── 139. JS 2025 ────────────────────────────────────────────────────────
  {
    id: 'js-2025',
    title: 'JS 2025',
    chapter: 'JS Versions',
    chapterId: 'js-chap-versions',
    order: 139,
    overview: 'ECMAScript 2025 (ES16): Fitur Promise.try untuk standardisasi penanganan error sinkronus/asinkronus, Import Attributes (JSON modules), dan method Set baru.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS VERSIONS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 139 / 153</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌟 Fitur ECMAScript 2025 (ES16)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            ES2025 memperkenalkan <code>Promise.try(fn)</code> yang mengeksekusi fungsi apapun dan otomatis membungkus hasilnya (maupun error sinkronus) ke dalam sebuah Promise.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS 2025 Promise.try Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Penyederhanaan Penanganan Error dengan Promise.try</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // Polyfill konsep Promise.try
    const promiseTry = (fn) => new Promise(resolve => resolve(fn()));

    function hitungBeresiko(nilai) {
      if (nilai <= 0) throw new Error('Nilai tidak boleh nol atau negatif!');
      return nilai * 10;
    }

    // Menangani fungsi sinkronus beresiko dalam alur Promise yang seragam
    promiseTry(() => hitungBeresiko(50))
      .then(res => {
        log += '• Hasil Sukses: <strong>' + res + '</strong><br>';
      })
      .catch(err => {
        log += '• Error Tertangkap: ' + err.message + '<br>';
      })
      .finally(() => {
        log += '• Eksekusi Promise.try selesai seragam! ✅';
        document.getElementById('output').innerHTML = log;
      });
  </script>

</body>
</html>`,
    codeExplanation: [
      'Promise.try menjamin bahwa baik error sinkronus maupun rejection asinkronus dapat ditangkap melalui rantai .catch() yang sama.'
    ],
    quiz: {
      question: 'Apa fungsi utama dari method Promise.try() yang diperkenalkan di ES2025?',
      options: [
        'Mengulang promise yang gagal sebanyak 3 kali',
        'Mengeksekusi fungsi dan otomatis menangkap error sinkronus ke dalam rejected Promise',
        'Menghapus semua async/await',
        'Membuat timer delay 1 detik'
      ],
      answer: 1,
      explanation: '`Promise.try()` membungkus eksekusi fungsi langsung ke dalam Promise, memastikan error sinkronus tertangkap rapi di rantai `.catch()`.'
    },
    challenge: {
      title: 'Tantangan: Bungkus Nilai ke Promise Resolve',
      description: 'Bungkus angka 100 ke dalam resolved Promise `Promise.resolve(100);`.',
      startingCode: `// Buat Promise resolve di bawah:\nlet p = null;`,
      solution: `let p = Promise.resolve(100);`
    }
  },

  // ── 140. JS 2024 ────────────────────────────────────────────────────────
  {
    id: 'js-2024',
    title: 'JS 2024',
    chapter: 'JS Versions',
    chapterId: 'js-chap-versions',
    order: 140,
    overview: 'ECMAScript 2024 (ES15): Object.groupBy() & Map.groupBy() untuk pengelompokan data instan, Promise.withResolvers(), dan RegExp flag v (Set Notation).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS VERSIONS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 140 / 153</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📦 Fitur ECMAScript 2024 (ES15)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            ES2024 menghadirkan <strong><code>Object.groupBy()</code></strong> yang menjadi standar resmi untuk mengelompokkan array data berdasarkan kategori tertentu tanpa library pihak ketiga seperti Lodash.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS 2024 Object.groupBy Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Pengelompokan Siswa Berdasarkan Grade (ES2024)</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const siswaList = [
      { nama: 'Rahmat', nilai: 95, level: 'Expert' },
      { nama: 'Alex', nilai: 70, level: 'Beginner' },
      { nama: 'Siti', nilai: 88, level: 'Expert' },
      { nama: 'Budi', nilai: 65, level: 'Beginner' }
    ];

    // Mengelompokkan dengan Object.groupBy()
    // (Gunakan fallback reduce jika browser belum support ES2024 native)
    const dikelompokkan = Object.groupBy ? Object.groupBy(siswaList, s => s.level) : {
      Expert: siswaList.filter(s => s.level === 'Expert'),
      Beginner: siswaList.filter(s => s.level === 'Beginner')
    };

    log += '<strong>Grup Expert:</strong> ' + dikelompokkan.Expert.map(s => s.nama).join(', ') + '<br><br>';
    log += '<strong>Grup Beginner:</strong> ' + dikelompokkan.Beginner.map(s => s.nama).join(', ');

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Object.groupBy(array, callback) mengembalikan objek dengan key berupa nilai kembalian dari callback dan value berupa array elemen yang sesuai.'
    ],
    quiz: {
      question: 'Method statis baru manakah di ES2024 yang digunakan untuk mengelompokkan elemen array ke dalam objek berdasarkan kategori?',
      options: [
        'Array.prototype.group()',
        'Object.groupBy()',
        'Collection.categorize()',
        'Object.sortGroup()'
      ],
      answer: 1,
      explanation: '`Object.groupBy()` adalah method resmi ES2024 untuk mengelompokkan elemen array ke dalam objek.'
    },
    challenge: {
      title: 'Tantangan: Grouping Data Sederhana',
      description: 'Lakukan pengelompokan menggunakan `Object.groupBy(arr, item => item.tipe)`.',
      startingCode: `const arr = [{ tipe: "A" }, { tipe: "B" }];\n// Kelompokkan di bawah:\nlet hasil = Object.groupBy(arr, item => item.tipe);`,
      solution: `const arr = [{ tipe: "A" }, { tipe: "B" }];\nlet hasil = Object.groupBy(arr, item => item.tipe);`
    }
  },

  // ── 141. JS 2023 ────────────────────────────────────────────────────────
  {
    id: 'js-2023',
    title: 'JS 2023',
    chapter: 'JS Versions',
    chapterId: 'js-chap-versions',
    order: 141,
    overview: 'ECMAScript 2023 (ES14): Non-mutating Array methods (toSorted, toReversed, toSpliced, with), findLast(), findLastIndex(), dan Hashbang grammar (#!) untuk script executable.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS VERSIONS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 141 / 153</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛡️ Non-Mutating Array Methods (ES2023)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Sebelum ES2023, memanggil <code>arr.sort()</code> atau <code>arr.reverse()</code> akan mengubah array asli (*mutation*). ES2023 memperkenalkan <strong><code>toSorted()</code>, <code>toReversed()</code>, <code>toSpliced()</code>, dan <code>with()</code></strong> yang mengembalikan Array baru tanpa merusak array aslinya.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS 2023 toSorted Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Pengurutan Tanpa Merusak Data Asli (toSorted)</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const angkaAsli = [50, 10, 40, 20];

    // toSorted() mengembalikan copy array baru yang sudah diurutkan!
    const angkaUrut = angkaAsli.toSorted ? angkaAsli.toSorted((a, b) => a - b) : [...angkaAsli].sort((a, b) => a - b);

    log += '• Array Asli (Aman Tidak Berubah): [' + angkaAsli.join(', ') + '] ✅<br>';
    log += '• Array Baru Hasil toSorted(): [' + angkaUrut.join(', ') + ']<br><br>';

    // findLast() - Mencari elemen terakhir yang lolos kondisi
    const daftarSkor = [70, 85, 90, 85, 60];
    let skorAkhir85 = daftarSkor.findLast ? daftarSkor.findLast(s => s > 80) : 85;
    log += '• findLast(s > 80): <strong>' + skorAkhir85 + '</strong>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'toSorted() sangat disukai dalam arsitektur React dan state management Redux karena mendukung prinsip Immutability murni.'
    ],
    quiz: {
      question: 'Apa perbedaan utama antara arr.toSorted() (ES2023) dengan arr.sort() tradisional?',
      options: [
        'toSorted() hanya bisa mengurutkan huruf saja',
        'toSorted() mengembalikan salinan Array baru tanpa memodifikasi array aslinya',
        'toSorted() berjalan asinkronus',
        'toSorted() hanya tersedia di Node.js'
      ],
      answer: 1,
      explanation: '`toSorted()` adalah non-mutating method yang mengembalikan array baru dan membiarkan array sumber tetap utuh.'
    },
    challenge: {
      title: 'Tantangan: Ganti Elemen dengan with()',
      description: 'Ubah elemen indeks 0 pada array `[1, 2, 3]` menggunakan `[1, 2, 3].with(0, 99);`.',
      startingCode: `let baru = [1, 2, 3].with(0, 99);`,
      solution: `let baru = [1, 2, 3].with(0, 99);`
    }
  },

  // ── 142. JS 2022 ────────────────────────────────────────────────────────
  {
    id: 'js-2022',
    title: 'JS 2022',
    chapter: 'JS Versions',
    chapterId: 'js-chap-versions',
    order: 142,
    overview: 'ECMAScript 2022 (ES13): Class Private Fields (#field), Top-Level Await di modul, method .at(-1) untuk indeks negatif, Object.hasOwn(), dan Error cause.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS VERSIONS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 142 / 153</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔒 Class Private Fields & .at(-1) (ES2022)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            ES2022 menghadirkan enkapsulasi sejati pada Class menggunakan simbol pagar (<code>#privateField</code>) serta method <strong><code>.at(-1)</code></strong> untuk mengambil elemen terakhir tanpa perlu sintaks panjang <code>length - 1</code>.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS 2022 Features Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Class Private Fields (#) & Indeks Negatif (.at)</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. Class Private Fields (#)
    class DompetKripto {
      #privateKey = 'SEC-8829-KEY'; // Private sejati, tidak bisa diakses dari luar class!
      saldo = 2.5;

      getSaldoInfo() {
        return 'Saldo: ' + this.saldo + ' ETH (Terkunci dengan #privateKey)';
      }
    }

    const dompet = new DompetKripto();
    log += '• ' + dompet.getSaldoInfo() + '<br><br>';

    // 2. Array/String .at(-1)
    const antrean = ['User A', 'User B', 'User C', 'User Terakhir'];
    log += '• Elemen Terakhir antrean.at(-1): <strong>' + antrean.at(-1) + '</strong> ✅';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      '#privateKey dienkapsulasi pada level JavaScript engine dan melempar SyntaxError jika diakses dari luar instance.',
      'antrean.at(-1) mengambil elemen terakhir dari belakang secara elegan.'
    ],
    quiz: {
      question: 'Karakter simbol apakah yang digunakan untuk mendeklarasikan Private Field pada Class di JavaScript (ES2022)?',
      options: [
        '_ (Underscore)',
        '# (Hash / Pagar)',
        '$ (Dolar)',
        'private'
      ],
      answer: 1,
      explanation: 'Simbol `#` di depan nama properti class menandakan private field resmi (misal `#password`).'
    },
    challenge: {
      title: 'Tantangan: Ambil Elemen Terakhir dengan .at(-1)',
      description: 'Gunakan `[10, 20, 30].at(-1)` dan simpan hasilnya ke `let last = [10, 20, 30].at(-1);`.',
      startingCode: `// Ambil elemen terakhir di bawah:\nlet last = 0;`,
      solution: `let last = [10, 20, 30].at(-1);`
    }
  },

  // ── 143. JS 2021 ────────────────────────────────────────────────────────
  {
    id: 'js-2021',
    title: 'JS 2021',
    chapter: 'JS Versions',
    chapterId: 'js-chap-versions',
    order: 143,
    overview: 'ECMAScript 2021 (ES12): String.prototype.replaceAll(), Promise.any() & AggregateError, Logical Assignment Operators (&&=, ||=, ??=), dan Numeric Separators (1_000_000).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS VERSIONS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 143 / 153</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">✨ Fitur ECMAScript 2021 (ES12)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            ES2021 memperkenalkan <strong><code>replaceAll()</code></strong> untuk mengganti seluruh string tanpa regex, operator penugasan logika (<strong><code>??=</code></strong>), dan pemisah angka visual (<strong><code>1_000_000</code></strong>).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS 2021 Features Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Pemisah Angka (1_000_000) & replaceAll()</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. Numeric Separator (Underscore mempermudah membaca jutaan)
    const satuMiliar = 1_000_000_000;
    log += '• 1_000_000_000 bernilai angka murni: ' + satuMiliar + '<br><br>';

    // 2. String.prototype.replaceAll()
    const kalimat = 'kucing makan ikan, kucing tidur, kucing lari';
    const diganti = kalimat.replaceAll('kucing', 'harimau');
    log += '• replaceAll():<br>"' + diganti + '"<br><br>';

    // 3. Logical Assignment (??=)
    let skorUser = null;
    skorUser ??= 100; // Isi hanya jika bernilai null/undefined
    log += '• skorUser ??= 100 ➔ <strong>' + skorUser + '</strong>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      '1_000_000_000 dibaca oleh engine persis sebagai angka 1000000000 tanpa dampak performa.',
      'replaceAll() mengganti seluruh kecocokan substring secara langsung.'
    ],
    quiz: {
      question: 'Karakter apakah yang digunakan sebagai Numeric Separator pada angka literal di ES2021 untuk meningkatkan keterbacaan kode?',
      options: [
        ', (Koma)',
        '. (Titik)',
        '_ (Underscore)',
        '- (Minus)'
      ],
      answer: 2,
      explanation: 'Karakter underscore `_` digunakan sebagai pemisah angka numerik (contoh `1_000_000`).'
    },
    challenge: {
      title: 'Tantangan: Gunakan replaceAll',
      description: 'Ganti semua huruf "a" dengan "o" pada `"kaca"` menggunakan `"kaca".replaceAll("a", "o");`.',
      startingCode: `let hasil = "kaca".replaceAll("a", "o");`,
      solution: `let hasil = "kaca".replaceAll("a", "o");`
    }
  },

  // ── 144. JS 2020 ────────────────────────────────────────────────────────
  {
    id: 'js-2020',
    title: 'JS 2020',
    chapter: 'JS Versions',
    chapterId: 'js-chap-versions',
    order: 144,
    overview: 'ECMAScript 2020 (ES11): Revolusi Optional Chaining (?.), Nullish Coalescing (??), BigInt primitif, Dynamic import(), Promise.allSettled(), dan globalThis.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS VERSIONS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 144 / 153</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌟 Rilis Monumental ECMAScript 2020 (ES11)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            ES2020 adalah salah satu rilis terpopuler yang memperkenalkan <code>?.</code>, <code>??</code>, tipe data baru <code>BigInt</code>, dan <code>Promise.allSettled()</code> yang menunggu seluruh Promise selesai tanpa meledak saat satu gagal.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS 2020 Features Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Fitur Ikonik ES2020 (?. , ?? , Promise.allSettled)</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. BigInt Primitif (Angka Tak Terbatas dengan akhiran n)
    const angkaRaksasa = 9007199254740991n + 2n;
    log += '• BigInt (9007199254740991n + 2n) ➔ <strong>' + angkaRaksasa + '</strong><br><br>';

    // 2. Promise.allSettled()
    const p1 = Promise.resolve('API Sukses ✅');
    const p2 = Promise.reject('API Gagal ❌');

    Promise.allSettled([p1, p2]).then(results => {
      log += '• Promise.allSettled() menunggu SEMUA status selesai tanpa crash:<br>';
      results.forEach((r, i) => {
        log += '&nbsp;&nbsp;P' + (i+1) + ': ' + r.status + ' (' + (r.value || r.reason) + ')<br>';
      });
      document.getElementById('output').innerHTML = log;
    });
  </script>

</body>
</html>`,
    codeExplanation: [
      'Promise.allSettled() tidak langsung melempar exception saat ada 1 promise yang reject, melainkan mengembalikan array status lengkap dari setiap promise.'
    ],
    quiz: {
      question: 'Method Promise manakah di ES2020 yang menunggu seluruh Promise selesai (baik resolved maupun rejected) dan mengembalikan ringkasan status setiap promise?',
      options: [
        'Promise.all()',
        'Promise.race()',
        'Promise.allSettled()',
        'Promise.any()'
      ],
      answer: 2,
      explanation: '`Promise.allSettled()` menunggu semua promise selesai dan mengembalikan array berisi objek `{ status, value/reason }` untuk masing-masing promise.'
    },
    challenge: {
      title: 'Tantangan: Buat BigInt',
      description: 'Deklarasikan nilai BigInt `const b = 100n;`.',
      startingCode: `// Buat BigInt di bawah:\n`,
      solution: `const b = 100n;`
    }
  },

  // ── 145. JS 2019 ────────────────────────────────────────────────────────
  {
    id: 'js-2019',
    title: 'JS 2019',
    chapter: 'JS Versions',
    chapterId: 'js-chap-versions',
    order: 145,
    overview: 'ECMAScript 2019 (ES10): Array.prototype.flat() & flatMap(), Object.fromEntries() untuk konversi pasangan array ke objek, trimStart() & trimEnd(), serta Optional Catch Binding (catch tanpa parameter).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS VERSIONS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 145 / 153</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧹 Fitur ECMAScript 2019 (ES10)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            ES2019 menambahkan <code>Object.fromEntries()</code> (kebalikan dari <code>Object.entries()</code>), method perata array <code>flat()</code>, dan <em>Optional Catch Binding</em> di mana kita boleh menulis <code>try { ... } catch { ... }</code> tanpa tanda kurung error.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS 2019 Object.fromEntries Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Transformasi Data dengan Object.fromEntries (ES2019)</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // Array Pasangan [key, value]
    const daftarNilai = [
      ['HTML', 90],
      ['CSS', 88],
      ['JavaScript', 95]
    ];

    // Object.fromEntries() mengubah array pasangan kembali menjadi objek utuh!
    const objekNilai = Object.fromEntries(daftarNilai);
    log += '• Object.fromEntries():<br>' + JSON.stringify(objekNilai) + '<br><br>';

    // Array flat()
    const bersarang = [1, [2, 3], [4, [5]]];
    log += '• Array flat(2): [' + bersarang.flat(2).join(', ') + ']';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Object.fromEntries() menyederhanakan siklus transformasi data: Object -> entries() -> map/filter -> fromEntries() -> Object.'
    ],
    quiz: {
      question: 'Method apa di ES2019 yang merupakan kebalikan dari Object.entries() (mengubah deretan pasangan [key, value] kembali menjadi Objek)?',
      options: [
        'Object.toObject()',
        'Object.fromEntries()',
        'Object.parseEntries()',
        'Object.createFrom()'
      ],
      answer: 1,
      explanation: '`Object.fromEntries()` mengubah daftar pasangan kunci-nilai menjadi sebuah objek JavaScript baru.'
    },
    challenge: {
      title: 'Tantangan: Ubah Pasangan ke Objek',
      description: 'Gunakan `Object.fromEntries([["a", 1]]);`.',
      startingCode: `// Konversi ke objek di bawah:\nlet obj = Object.fromEntries([["a", 1]]);`,
      solution: `let obj = Object.fromEntries([["a", 1]]);`
    }
  },

  // ── 146. JS 2018 ────────────────────────────────────────────────────────
  {
    id: 'js-2018',
    title: 'JS 2018',
    chapter: 'JS Versions',
    chapterId: 'js-chap-versions',
    order: 146,
    overview: 'ECMAScript 2018 (ES9): Async Iteration (for-await-of), Rest/Spread properties pada objek literal ({ ...obj }), Promise.prototype.finally(), dan RegExp Lookbehind assertions.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS VERSIONS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 146 / 153</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📦 Object Rest/Spread & for-await-of (ES2018)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            ES2018 memperluas operator Spread (<code>...</code>) ke objek (sebelumnya hanya untuk array di ES6), menambahkan <code>Promise.finally()</code>, dan memperkenalkan perulangan asinkronus <code>for-await-of</code>.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS 2018 Features Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Penggabungan Objek (Object Spread) & Promise.finally</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. Object Spread & Rest
    const userDefault = { role: 'Student', status: 'Active' };
    const profilUser = { nama: 'Rahmat', ...userDefault, level: 'Advanced' };

    log += '• Objek Digabung (Spread):<br>' + JSON.stringify(profilUser) + '<br><br>';

    // 2. Promise.prototype.finally()
    Promise.resolve('Data Berhasil Dimuat')
      .then(res => log += '• ' + res + '<br>')
      .finally(() => {
        log += '• Promise.finally() selalu dieksekusi untuk menutup spinner loading!';
        document.getElementById('output').innerHTML = log;
      });
  </script>

</body>
</html>`,
    codeExplanation: [
      'Object Spread ({ ...obj }) menjadi standar universal kloning dan penggabungan objek di seluruh framework JavaScript modern.'
    ],
    quiz: {
      question: 'Method Promise apakah yang diperkenalkan di ES2018 yang selalu dieksekusi di akhir pemrosesan baik sukses maupun gagal?',
      options: [
        '.done()',
        '.always()',
        '.finally()',
        '.end()'
      ],
      answer: 2,
      explanation: 'Method `.finally(callback)` pada Promise selalu dieksekusi setelah promise terselesaikan (*settled*).'
    },
    challenge: {
      title: 'Tantangan: Gabung Objek dengan Spread',
      description: 'Gabungkan objek `const gabung = { ...{ a: 1 }, ...{ b: 2 } };`.',
      startingCode: `// Gabungkan objek di bawah:\nconst gabung = { ...{ a: 1 }, ...{ b: 2 } };`,
      solution: `const gabung = { ...{ a: 1 }, ...{ b: 2 } };`
    }
  },

  // ── 147. JS 2017 ────────────────────────────────────────────────────────
  {
    id: 'js-2017',
    title: 'JS 2017',
    chapter: 'JS Versions',
    chapterId: 'js-chap-versions',
    order: 147,
    overview: 'ECMAScript 2017 (ES8): Kelahiran sintaks resmi async & await yang merevolusi penulisan kode asinkronus, Object.values(), Object.entries(), dan String padding (padStart, padEnd).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS VERSIONS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 147 / 153</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚡ Revolusi Async / Await (ECMAScript 2017)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            ES2017 adalah salah satu tonggak sejarah terbesar JavaScript dengan meresmikan sintaks <strong><code>async / await</code></strong> yang membuat penulisan kode asinkronus dapat dibaca dan dieksekusi secara linear layaknya kode sinkronus.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS 2017 async/await & padStart Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Penerapan async/await & String padStart (ES2017)</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. String padStart (Memformat nomor urut 001, 002)
    let noUrut = '5'.padStart(4, '0'); // Menjadi '0005'
    log += '• Format No. Faktur (padStart): <strong>INV-' + noUrut + '</strong><br><br>';

    // 2. async / await
    async function loadData() {
      const delay = ms => new Promise(r => setTimeout(r, ms));
      log += '• [1/2] Memulai koneksi async...<br>';
      await delay(100);
      log += '• [2/2] Data berhasil di-await secara linear! ✅';
      document.getElementById('output').innerHTML = log;
    }

    loadData();
  </script>

</body>
</html>`,
    codeExplanation: [
      'async/await mengeliminasi callback hell dan rantai .then() bersarang yang rumit.',
      'padStart(targetLength, padChar) sangat berguna untuk standarisasi format nomor invoice dan jam/menit (09:05).'
    ],
    quiz: {
      question: 'Kata kunci apakah yang diperkenalkan di ES2017 untuk menunggu hasil Promise sebelum melanjutkan ke baris berikutnya?',
      options: [
        'wait',
        'await',
        'pause',
        'defer'
      ],
      answer: 1,
      explanation: 'Kata kunci `await` digunakan di dalam fungsi `async` untuk menunggu penyelesaian Promise.'
    },
    challenge: {
      title: 'Tantangan: Format Nomor dengan padStart',
      description: 'Lengkapi string padding `"7".padStart(3, "0");` (menghasilkan "007").',
      startingCode: `let agen = "7".padStart(3, "0");`,
      solution: `let agen = "7".padStart(3, "0");`
    }
  },

  // ── 148. JS 2016 ────────────────────────────────────────────────────────
  {
    id: 'js-2016',
    title: 'JS 2016',
    chapter: 'JS Versions',
    chapterId: 'js-chap-versions',
    order: 148,
    overview: 'ECMAScript 2016 (ES7): Rilis tahunan pertama TC39 pasca-ES6 yang memperkenalkan Array.prototype.includes() dan Operator Eksponensial (**).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS VERSIONS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 148 / 153</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎯 ECMAScript 2016 (ES7) & Siklus Tahunan</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            ES2016 memulai tradisi baru komite TC39: merilis pembaruan JavaScript setiap tahun dengan cakupan fitur terukur. Dua fitur utamanya adalah <code>Array.includes()</code> dan operator pangkat <code>**</code>.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS 2016 Features Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Operator Eksponensial (**) & Array.includes()</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. Operator Eksponensial (**)
    let duaPangkatDelapan = 2 ** 8; // 256
    log += '• 2 ** 8 (2 pangkat 8) ➔ <strong>' + duaPangkatDelapan + '</strong><br><br>';

    // 2. Array.prototype.includes()
    const daftarRole = ['ADMIN', 'EDITOR', 'AUTHOR'];
    log += '• daftarRole.includes("ADMIN") ➔ <strong>' + daftarRole.includes('ADMIN') + '</strong> ✅<br>';
    log += '• daftarRole.includes("GUEST") ➔ ' + daftarRole.includes('GUEST') + ' ❌';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Sebelum ES2016, kita harus menulis Math.pow(2, 8) dan arr.indexOf("item") !== -1 yang kurang intuitif.'
    ],
    quiz: {
      question: 'Method Array apa di ES2016 yang menggantikan kebiasaan lama memeriksa indexOf(val) !== -1?',
      options: [
        'arr.has()',
        'arr.contains()',
        'arr.includes()',
        'arr.exist()'
      ],
      answer: 2,
      explanation: 'Method `Array.prototype.includes()` mengembalikan nilai boolean secara langsung untuk memeriksa keberadaan elemen.'
    },
    challenge: {
      title: 'Tantangan: Cek Angka di Array',
      description: 'Gunakan `[1, 2, 3].includes(2)` dan simpan ke `let cek = [1, 2, 3].includes(2);`.',
      startingCode: `// Cek includes di bawah:\nlet cek = false;`,
      solution: `let cek = [1, 2, 3].includes(2);`
    }
  },

  // ── 149. JS 2015 (ES6) ──────────────────────────────────────────────────
  {
    id: 'js-2015-es6',
    title: 'JS 2015 (ES6)',
    chapter: 'JS Versions',
    chapterId: 'js-chap-versions',
    order: 149,
    overview: 'Milestone Revolusi Terbesar JavaScript: ECMAScript 2015 (ES6). Kelahiran let & const, Arrow Functions, Classes, Modules (import/export), Promises, Template Literals, Destructuring, dan Map/Set.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS VERSIONS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 149 / 153</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">👑 Revolusi Akbar: ECMAScript 2015 (ES6)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            ES6 adalah pembaruan terbesar dalam sejarah JavaScript yang mengubah JavaScript dari bahasa skrip web sederhana menjadi bahasa pemrograman modern berskala enterprise.
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs font-mono text-slate-600 dark:text-slate-300">
          <div class="p-2 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800"><strong class="text-amber-500">let / const</strong>: Block scope</div>
          <div class="p-2 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800"><strong class="text-amber-500">() => {}</strong>: Arrow functions</div>
          <div class="p-2 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800"><strong class="text-amber-500">class</strong>: OOP Sintaks</div>
          <div class="p-2 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800"><strong class="text-amber-500">import / export</strong>: ES Modules</div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS ES6 Landmark Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Sintaks Monumental ES6 Modern</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. ES6 Class & Template Literals
    class Pelajar {
      constructor(nama, skill = 'JavaScript') {
        this.nama = nama;
        this.skill = skill;
      }

      perkenalan() {
        return 'Halo! Saya ' + this.nama + ', sedang mendalami ' + this.skill + '.';
      }
    }

    const siswa1 = new Pelajar('Rahmat Fadila');
    log += '• ' + siswa1.perkenalan() + '<br><br>';

    // 2. Destructuring & Arrow Function
    const hitung = ([a, b]) => a + b;
    log += '• Arrow & Destructuring: hitung([15, 35]) = <strong>' + hitung([15, 35]) + '</strong>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'ES6 adalah fondasi dari ekosistem modern seperti React, Vue, Angular, Next.js, dan Node.js modern.'
    ],
    quiz: {
      question: 'Versi ECMAScript berapakah yang memperkenalkan fitur revolusioner let, const, class, dan arrow function () => {}?',
      options: [
        'ES5 (2009)',
        'ES6 / ES2015',
        'ES3 (1999)',
        'ES8 (2017)'
      ],
      answer: 1,
      explanation: 'ECMAScript 2015 (populer disebut sebagai ES6) adalah rilis monumental yang memperkenalkan seluruh fitur modern tersebut.'
    },
    challenge: {
      title: 'Tantangan: Buat Arrow Function ES6',
      description: 'Buat arrow function kuadrat `const sq = x => x * x;`.',
      startingCode: `// Buat arrow function di bawah:\n`,
      solution: `const sq = x => x * x;`
    }
  },

  // ── 150. JS 2009 (ES5) ──────────────────────────────────────────────────
  {
    id: 'js-2009-es5',
    title: 'JS 2009 (ES5)',
    chapter: 'JS Versions',
    chapterId: 'js-chap-versions',
    order: 150,
    overview: 'Milestone ECMAScript 5 (ES5): Standar JavaScript stabil pertama era modern: "use strict", JSON native parsing, Array methods (forEach, map, filter, reduce), Getters/Setters, dan Object.freeze().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS VERSIONS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 150 / 153</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏛️ Fondasi Standar: ECMAScript 5 (ES5)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Dirilis pada tahun 2009 setelah masa vakum selama 10 tahun pasca-ES3, ES5 meletakkan dasar bagi JavaScript modern dengan dukungan JSON bawaan dan method array fungsional.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS ES5 Features Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Fitur Pilar ES5 (JSON & Functional Array)</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. JSON.parse() bawaan browser
    const jsonTeks = '{"id": 1, "kursus": "LMS Edutech"}';
    const parsed = JSON.parse(jsonTeks);
    log += '• JSON.parse() ES5: ' + parsed.kursus + '<br><br>';

    // 2. Array.prototype.filter & map (ES5)
    const angka = [10, 25, 30, 45, 50];
    const genap = angka.filter(function(n) {
      return n % 2 === 0;
    });

    log += '• Array filter() ES5: [' + genap.join(', ') + ']';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'ES5 menstandarisasi JSON sehingga developer tidak perlu lagi menggunakan eval() yang berbahaya untuk membaca data JSON.'
    ],
    quiz: {
      question: 'Fitur keamanan dan parsing data terpenting apakah yang distandarisasikan di ES5 (2009)?',
      options: [
        'async/await',
        'Native JSON (JSON.parse & JSON.stringify) dan "use strict"',
        'Arrow functions',
        'TypeScript compiler'
      ],
      answer: 1,
      explanation: 'ES5 menstandarisasi objek `JSON` asli di browser dan direktif mode ketat `"use strict";`.'
    },
    challenge: {
      title: 'Tantangan: Parsing JSON String',
      description: 'Parsing string JSON `JSON.parse(\'{"ok": true}\');`.',
      startingCode: `let res = JSON.parse('{"ok": true}');`,
      solution: `let res = JSON.parse('{"ok": true}');`
    }
  },

  // ── 151. JS 1999 (ES3) ──────────────────────────────────────────────────
  {
    id: 'js-1999-es3',
    title: 'JS 1999 (ES3)',
    chapter: 'JS Versions',
    chapterId: 'js-chap-versions',
    order: 151,
    overview: 'Pondasi Web Klasik: ECMAScript 3 (ES3). Kelahiran RegExp bawaan, blok exception handling try...catch...finally, formatting do...while, dan switch statement.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS VERSIONS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 151 / 153</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📜 Fondasi Web Klasik: ECMAScript 3 (ES3 - 1999)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            ES3 adalah versi yang diadopsi oleh seluruh browser legendaris di awal era internet (seperti Internet Explorer 5/6 dan Netscape 6). ES3 membawa blok <code>try...catch</code>, dukungan Regular Expressions, dan penanganan string yang lebih matang.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS ES3 Classical Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Struktur Klasik ES3 (try/catch & RegExp)</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // Sintaks Klasik ES3 yang masih bekerja sempurna hingga hari ini
    try {
      var polaRegExp = new RegExp('^[A-Z]+$');
      var cek = polaRegExp.test('KODING');
      log += '• RegExp Klasik ES3: ' + cek + ' ✅<br>';
    } catch (e) {
      log += '• Error tertangkap ES3: ' + e.message;
    }

    log += '• Kompatibilitas mundur (Backward Compatibility) JavaScript menjaga kode tahun 1999 tetap berjalan di browser 2026!';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Filosofi "Don\'t break the web" memastikan bahwa kode yang ditulis di era ES3 tahun 1999 masih 100% dapat berjalan di browser modern.'
    ],
    quiz: {
      question: 'Blok penanganan error manakah yang pertama kali diperkenalkan ke standar resmi JavaScript pada ES3 tahun 1999?',
      options: [
        'try...catch...finally',
        'async...await',
        'Promise.catch()',
        'assert()'
      ],
      answer: 0,
      explanation: 'Blok `try...catch...finally` dan objek `Error` diperkenalkan pertama kali di ECMAScript 3.'
    },
    challenge: {
      title: 'Tantangan: Blok try...catch Klasik',
      description: 'Tulis `try {} catch(e) {}`.',
      startingCode: `try {\n} catch (e) {\n}`,
      solution: `try {\n} catch (e) {\n}`
    }
  },

  // ── 152. JS VERSIONS ────────────────────────────────────────────────────
  {
    id: 'js-versions',
    title: 'JS Versions',
    chapter: 'JS Versions',
    chapterId: 'js-chap-versions',
    order: 152,
    overview: 'Peta kronologi rilis & Proses Standardisasi TC39: dari Stage 0 (Strawman), Stage 1 (Proposal), Stage 2 (Draft), Stage 3 (Candidate), hingga Stage 4 (Finished / Official ECMAScript).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS VERSIONS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 152 / 153</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚙️ Proses Standardisasi Komite TC39 (5 Tahapan)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Setiap fitur baru di JavaScript harus melalui proses pengujian ketat 5 tahapan oleh <strong>Technical Committee 39 (TC39)</strong> sebelum resmi dirilis setiap bulan Juni.
          </p>
        </div>

        <div class="space-y-2 text-xs">
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800"><strong class="text-amber-500">Stage 0 (Strawman)</strong>: Ide awal masukan komunitas.</div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800"><strong class="text-amber-500">Stage 1 (Proposal)</strong>: Rancangan solusi & use-case resmi.</div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800"><strong class="text-amber-500">Stage 2 (Draft)</strong>: Spesifikasi formal sintaksis.</div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800"><strong class="text-amber-500">Stage 3 (Candidate)</strong>: Implementasi eksperimental di browser.</div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800"><strong class="text-emerald-500">Stage 4 (Finished)</strong>: Resmi masuk standar rilis ECMAScript tahunan!</div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS TC39 Stages Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Tahapan Proposal Fitur JavaScript (TC39)</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const stages = [
      { tahap: 'Stage 0', nama: 'Strawman (Ide Awal)' },
      { tahap: 'Stage 1', nama: 'Proposal (Argumen Kebutuhan)' },
      { tahap: 'Stage 2', nama: 'Draft (Spesifikasi Sintaks)' },
      { tahap: 'Stage 3', nama: 'Candidate (Uji Coba di V8/SpiderMonkey)' },
      { tahap: 'Stage 4', nama: 'Finished (RESMI DI RILIS ECMASCRIPT) 🚀' }
    ];

    stages.forEach(s => {
      log += '• <strong>' + s.tahap + '</strong> ➔ ' + s.nama + '<br>';
    });

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Hanya proposal yang mencapai Stage 4 yang dijamin akan dimasukkan ke dalam standar ECMAScript versi berikutnya.'
    ],
    quiz: {
      question: 'Tahapan (Stage) berapakah pada proses TC39 yang menandakan bahwa suatu fitur proposal sudah selesai diuji dan resmi masuk ke standar rilis ECMAScript berikutnya?',
      options: [
        'Stage 1',
        'Stage 2',
        'Stage 3',
        'Stage 4 (Finished)'
      ],
      answer: 3,
      explanation: '`Stage 4 (Finished)` menandakan bahwa proposal fitur telah disetujui sepenuhnya oleh TC39 dan siap diterbitkan dalam rilis ECMAScript tahunan.'
    },
    challenge: {
      title: 'Tantangan: Cetak Stage Terakhir',
      description: 'Simpan string `"Stage 4"` ke `let stage = "Stage 4";`.',
      startingCode: `let stage = "";`,
      solution: `let stage = "Stage 4";`
    }
  },

  // ── 153. JS HISTORY ─────────────────────────────────────────────────────
  {
    id: 'js-history',
    title: 'JS History',
    chapter: 'JS Versions',
    chapterId: 'js-chap-versions',
    order: 153,
    overview: 'Kisah Sejarah Epik JavaScript: Brendan Eich menciptakan Mocha dalam 10 hari di Netscape (1995), perang browser, standardisasi ECMA-262, ledakan AJAX (2005), lahirnya Node.js (2009), hingga mendominasi dunia teknologi.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS VERSIONS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 153 / 153 (FINAL MATERI)</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📖 Sejarah Epik & Evolusi JavaScript (1995 - 2026)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Pada bulan Mei 1995, <strong>Brendan Eich</strong> di Netscape menciptakan prototype bahasa pemrograman baru hanya dalam waktu <strong>10 hari</strong>. Awalnya dinamai <em>Mocha</em>, berganti nama menjadi <em>LiveScript</em>, dan akhirnya dipasarkan sebagai <strong>JavaScript</strong>.
          </p>
        </div>

        <div class="space-y-2 text-xs">
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800"><strong class="text-amber-500">1995</strong>: Brendan Eich menciptakan Mocha di Netscape dalam 10 hari.</div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800"><strong class="text-amber-500">1997</strong>: Standardisasi pertama ECMA-262 (ECMAScript 1).</div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800"><strong class="text-amber-500">2005</strong>: Jesse James Garrett memperkenalkan AJAX (Google Maps memukau dunia).</div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800"><strong class="text-amber-500">2009</strong>: Ryan Dahl menciptakan <strong>Node.js</strong> (JavaScript menembus backend server).</div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800"><strong class="text-emerald-500">2015 - Sekarang</strong>: Era Modern ES6+, TypeScript, Full-Stack JS mendominasi dunia teknologi.</div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS History Landmark</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Garis Waktu Sejarah JavaScript 🚀</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const timeline = [
      { tahun: 1995, event: 'Brendan Eich membuat Mocha/JavaScript di Netscape.' },
      { tahun: 1997, event: 'Standar ECMA-262 resmi pertama diterbitkan.' },
      { tahun: 2005, event: 'Era Web 2.0 & AJAX (Google Maps & Gmail).' },
      { tahun: 2008, event: 'Google merilis V8 Engine (Chrome) super cepat.' },
      { tahun: 2009, event: 'Ryan Dahl merilis Node.js (JavaScript di Server).' },
      { tahun: 2015, event: 'Rilis akbar ES6 (ECMAScript 2015).' },
      { tahun: 2026, event: 'JavaScript menjadi bahasa paling dominan di dunia (Frontend, Backend, Mobile, AI, IoT)!' }
    ];

    timeline.forEach(t => {
      log += '• <strong>[' + t.tahun + ']</strong> ➔ ' + t.event + '<br>';
    });

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Dari bahasa skrip 10 hari hingga bahasa nomor satu di dunia software engineering, JavaScript membuktikan ketahanan dan kemampuan adaptasi yang luar biasa.'
    ],
    quiz: {
      question: 'Siapakah nama pencipta bahasa pemrograman JavaScript pada tahun 1995 di Netscape Communications?',
      options: [
        'Guido van Rossum',
        'Brendan Eich',
        'James Gosling',
        'Dennis Ritchie'
      ],
      answer: 1,
      explanation: 'Brendan Eich adalah pencipta bahasa pemrograman JavaScript di Netscape Communications pada tahun 1995.'
    },
    challenge: {
      title: 'Tantangan Terakhir: Cetak Nama Pencipta JS',
      description: 'Simpan nama pencipta JS `"Brendan Eich"` ke `const pencipta = "Brendan Eich";`.',
      startingCode: `// Simpan nama pencipta di bawah:\nconst pencipta = "";`,
      solution: `const pencipta = "Brendan Eich";`
    }
  }
];
