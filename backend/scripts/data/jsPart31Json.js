module.exports = [
  // ── 182. JSON INTRO ─────────────────────────────────────────────────────
  {
    id: 'json-intro',
    title: 'JSON Intro',
    chapter: 'JS JSON',
    chapterId: 'js-chap-json',
    order: 182,
    overview: 'Pengenalan JavaScript Object Notation (JSON): format pertukaran data berbasis teks standar industri yang ringan, human-readable, dan independen dari bahasa pemrograman.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS JSON</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 182 / 195</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📄 Standar Pertukaran Data Universal (JSON)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <strong>JSON (JavaScript Object Notation)</strong> diciptakan oleh Douglas Crockford pada awal tahun 2000-an. Meskipun sintaksnya diturunkan dari objek literal JavaScript, JSON adalah format teks murni yang didukung oleh hampir semua bahasa pemrograman di dunia.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JSON Intro Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Contoh Payload Data JSON</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    const dataJsonContoh = {
      "kursus": "Fullstack JavaScript",
      "level": "Expert",
      "durasiJam": 40,
      "tersedia": true,
      "materi": ["DOM", "Events", "Fetch API", "Web Worker"]
    };

    document.getElementById('output').innerHTML = 
      '• JSON Payload Format:<br><pre>' + JSON.stringify(dataJsonContoh, null, 2) + '</pre>';
  </script>

</body>
</html>`,
    codeExplanation: [
      'JSON menjadi format default dalam pertukaran data REST API, GraphQL, dan penyimpanan konfigurasi (seperti package.json).'
    ],
    quiz: {
      question: 'Apa kepanjangan dari singkatan format data JSON?',
      options: [
        'JavaScript Object Network',
        'JavaScript Object Notation',
        'Java Standard Oriented Node',
        'JavaScript Online Numeric'
      ],
      answer: 1,
      explanation: 'JSON adalah singkatan dari `JavaScript Object Notation`.'
    },
    challenge: {
      title: 'Tantangan: Buat String JSON Sederhana',
      description: 'Simpan string JSON `const s = \'{"id": 1}\';`.',
      startingCode: `const s = "";`,
      solution: `const s = '{"id": 1}';`
    }
  },

  // ── 183. JSON SYNTAX ────────────────────────────────────────────────────
  {
    id: 'json-syntax',
    title: 'JSON Syntax',
    chapter: 'JS JSON',
    chapterId: 'js-chap-json',
    order: 183,
    overview: 'Aturan ketat sintaksis JSON: kewajiban tanda petik ganda (""), larangan trailing comma di akhir properti/elemen, dan larangan penulisan komentar.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS JSON</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 183 / 195</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📐 Aturan Ketat Format Sintaks JSON</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Berbeda dengan objek JavaScript biasa, JSON memiliki 3 aturan ketat:
            1. Nama properti (key) dan teks string <strong>WAJIB menggunakan tanda petik ganda (<code>"</code>)</strong>.
            2. <strong>Tidak boleh ada tanda koma gantung</strong> (*trailing comma*) di elemen terakhir.
            3. <strong>Tidak boleh ada komentar</strong> (seperti <code>//</code> atau <code>/* */</code>).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JSON Syntax Rules Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Validasi Valid vs Invalid JSON</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // BENAR: Menggunakan double quotes pada key & value
    const validJsonString = '{"nama": "Rahmat", "role": "Developer"}';

    try {
      const parsed = JSON.parse(validJsonString);
      log += '• JSON Valid Berhasil Diparsing: <strong>' + parsed.nama + '</strong> ✅<br><br>';
    } catch (e) {
      log += 'Error: ' + e.message;
    }

    // SALAH (Menggunakan petik tunggal ' '):
    // const invalid = "{'nama': 'Rahmat'}"; // JSON.parse() akan melempar SyntaxError!

    log += 'Catatan: JSON tidak mengizinkan petik tunggal (\' \') atau tanda koma berlebih di akhir.';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Pelanggaran aturan format (seperti memakai tanda petik tunggal) akan memicu SyntaxError saat diparsing dengan JSON.parse().'
    ],
    quiz: {
      question: 'Tanda petik apakah yang diwajibkan oleh spesifikasi standar JSON untuk membungkus nama properti (key) dan teks string?',
      options: [
        'Petik tunggal (\' \')',
        'Petik ganda (" ")',
        'Backticks (` `)',
        'Bebas tanda petik'
      ],
      answer: 1,
      explanation: 'Spesifikasi standar JSON mewajibkan penggunaan tanda petik ganda (`" "`) untuk semua key dan nilai string.'
    },
    challenge: {
      title: 'Tantangan: Buat JSON Valid',
      description: 'Lengkapi string JSON valid `let j = \'{"status": 200}\';`.',
      startingCode: `let j = '{"status": 200}';`,
      solution: `let j = '{"status": 200}';`
    }
  },

  // ── 184. JSON VALUES ────────────────────────────────────────────────────
  {
    id: 'json-values',
    title: 'JSON Values',
    chapter: 'JS JSON',
    chapterId: 'js-chap-json',
    order: 184,
    overview: 'Daftar 6 tipe data yang sah dalam JSON (String, Number, Object, Array, Boolean, Null) serta tipe data yang dilarang (Function, undefined, Date, Symbol).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS JSON</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 184 / 195</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">💎 6 Tipe Data yang Sah dalam JSON</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            JSON hanya mendukung 6 tipe data murni: <strong>String</strong>, <strong>Number</strong>, <strong>Object</strong>, <strong>Array</strong>, <strong>Boolean</strong>, dan <strong>Null</strong>. Nilai seperti <code>undefined</code>, fungsi/method, dan Symbol akan otomatis dibuang saat serialisasi.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JSON Values Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Eliminasi Nilai Ilegal Saat Serialisasi JSON</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const dataObjek = {
      nama: 'Rahmat', // Sah (String)
      umur: 24, // Sah (Number)
      aktif: true, // Sah (Boolean)
      hobi: ['Coding', 'Design'], // Sah (Array)
      alamat: null, // Sah (Null)
      hitungGaji: function() { return 1000; }, // ILLEGAL -> Dihapus!
      rahasia: undefined // ILLEGAL -> Dihapus!
    };

    const hasilSerialisasi = JSON.stringify(dataObjek, null, 2);

    log += '• Objek Asli memiliki method dan undefined.<br>';
    log += '• Hasil JSON.stringify():<br><pre>' + hasilSerialisasi + '</pre>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'JSON.stringify() secara otomatis membuang properti yang bernilai undefined atau fungsi karena tidak didukung oleh spesifikasi JSON.'
    ],
    quiz: {
      question: 'Manakah dari tipe nilai berikut yang TIDAK dapat disimpan di dalam format JSON standar?',
      options: [
        'null',
        'Array',
        'Function / Method',
        'Boolean'
      ],
      answer: 2,
      explanation: 'Function tidak dapat diserialisasi ke dalam format JSON standar dan akan dibuang saat dikonversi.'
    },
    challenge: {
      title: 'Tantangan: Buat Array JSON',
      description: 'Simpan string array JSON `let arrJson = "[1, 2, 3]";`.',
      startingCode: `let arrJson = "[1, 2, 3]";`,
      solution: `let arrJson = "[1, 2, 3]";`
    }
  },

  // ── 185. JSON PARSE ─────────────────────────────────────────────────────
  {
    id: 'json-parse',
    title: 'JSON Parse',
    chapter: 'JS JSON',
    chapterId: 'js-chap-json',
    order: 185,
    overview: 'Mendalami JSON.parse(): deserialisasi teks JSON menjadi Objek JavaScript murni dan pemanfaatan Reviver function untuk memulihkan objek Date dan tipe data khusus.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS JSON</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 185 / 195</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔄 Konversi Teks JSON ke Objek (JSON.parse)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>JSON.parse(text, reviver)</code> mengubah string format JSON menjadi objek JavaScript asli di RAM. Parameter kedua (<em>reviver function</em>) memungkinkan transformasi khusus saat data dibongkar.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JSON Parse Reviver Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Pemulihan Tanggal Otomatis dengan Reviver</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const payloadJson = '{"transaksiId": "TRX-99", "tanggal": "2026-08-27T10:00:00.000Z", "total": 250000}';

    // Menggunakan Reviver Function untuk mengubah string ISO Date kembali menjadi objek Date murni!
    const order = JSON.parse(payloadJson, (key, value) => {
      if (key === 'tanggal') return new Date(value);
      return value;
    });

    log += '• ID: ' + order.transaksiId + '<br>';
    log += '• Total: Rp ' + order.total.toLocaleString('id-ID') + '<br>';
    log += '• Tipe properti tanggal: <strong>' + (order.tanggal instanceof Date ? 'Objek Date Asli ✅' : 'String') + '</strong><br>';
    log += '• Tahun Transaksi: ' + order.tanggal.getFullYear();

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Reviver function menginspeksi setiap pasangan kunci-nilai dan memungkinkan pengembalian instansiasi Date asli saat parsing berlangsung.'
    ],
    quiz: {
      question: 'Parameter kedua opsional apakah yang dapat diberikan ke JSON.parse() untuk mengubah atau memfilter nilai hasil parsing?',
      options: [
        'Replacer function',
        'Reviver function',
        'Transformer',
        'Validator'
      ],
      answer: 1,
      explanation: 'Parameter kedua pada `JSON.parse(text, reviver)` dinamakan fungsi Reviver.'
    },
    challenge: {
      title: 'Tantangan: Parsing String JSON',
      description: 'Lakukan parsing JSON dari string `JSON.parse(\'{"x": 10}\');`.',
      startingCode: `let obj = JSON.parse('{"x": 10}');`,
      solution: `let obj = JSON.parse('{"x": 10}');`
    }
  },

  // ── 186. JSON STRINGIFY ─────────────────────────────────────────────────
  {
    id: 'json-stringify',
    title: 'JSON Stringify',
    chapter: 'JS JSON',
    chapterId: 'js-chap-json',
    order: 186,
    overview: 'Serialisasi objek dengan JSON.stringify(): parameter replacer untuk memfilter properti sensitif (seperti password) dan parameter space untuk formatting Pretty Print.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS JSON</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 186 / 195</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📤 Serialisasi Objek ke Teks (JSON.stringify)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>JSON.stringify(value, replacer, space)</code> mengubah objek JavaScript menjadi string. Parameter <code>replacer</code> dapat digunakan sebagai filter keamanan data, sedangkan <code>space</code> menghasilkan indentasi visual yang indah (*pretty print*).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JSON Stringify Replacer Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Filter Data Sensitif dengan Replacer</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const akunPengguna = {
      id: 101,
      nama: 'Rahmat Fadila',
      email: 'rahmat@example.com',
      passwordHash: 'SECRET_HASH_99182', // Sensitif!
      saldoToken: 500
    };

    // Filter replacer: Hanya sertakan properti publik aman
    const propertiAman = ['id', 'nama', 'email', 'saldoToken'];
    const jsonAman = JSON.stringify(akunPengguna, propertiAman, 2);

    log += '• Hasil Serialisasi Aman (Tanpa passwordHash):<br><pre>' + jsonAman + '</pre>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'JSON.stringify(obj, ["id", "nama"], 2) menyaring hanya properti yang terdaftar dan memberikan indentasi 2 spasi.'
    ],
    quiz: {
      question: 'Parameter ketiga apakah pada JSON.stringify(obj, replacer, space) yang mengatur indentasi spasi untuk membuat string JSON mudah dibaca (Pretty Print)?',
      options: [
        'indent',
        'space',
        'format',
        'tab'
      ],
      answer: 1,
      explanation: 'Parameter `space` (contoh `2` atau `4`) mengatur jumlah spasi indentasi baris baru.'
    },
    challenge: {
      title: 'Tantangan: Pretty Print JSON',
      description: 'Gunakan `JSON.stringify({ a: 1 }, null, 2);`.',
      startingCode: `let str = JSON.stringify({ a: 1 }, null, 2);`,
      solution: `let str = JSON.stringify({ a: 1 }, null, 2);`
    }
  },

  // ── 187. JSON FETCH ─────────────────────────────────────────────────────
  {
    id: 'json-fetch',
    title: 'JSON Fetch',
    chapter: 'JS JSON',
    chapterId: 'js-chap-json',
    order: 187,
    overview: 'Alur konsumsi REST API data JSON: request endpoint -> deserialisasi response.json() -> manipulasi data array of objects.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS JSON</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 187 / 195</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌐 Mengambil & Memproses Data JSON dari Server</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Mayoritas REST API di internet mengirimkan data dalam format JSON. Menggabungkan <code>fetch()</code> dengan method bawaan <code>response.json()</code> adalah pola baku aplikasi frontend modern.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JSON Fetch Stream Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Simulasi Fetch Data Kursus JSON</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    async function loadJsonContent() {
      // Mocking fetch stream
      const mockStream = {
        ok: true,
        json: async () => [
          { id: 1, judul: 'JavaScript Fundamentals', status: 'Selesai' },
          { id: 2, judul: 'Web API & DOM Mastery', status: 'Sedang Berjalan' }
        ]
      };

      const daftarKursus = await mockStream.json();
      let log = '<strong>Daftar Kursus Terambil:</strong><br>';
      daftarKursus.forEach(k => {
        log += '• [' + k.id + '] ' + k.judul + ' ➔ <span style="color:#38bdf8;">' + k.status + '</span><br>';
      });

      document.getElementById('output').innerHTML = log;
    }

    loadJsonContent();
  </script>

</body>
</html>`,
    codeExplanation: [
      'response.json() membaca body response HTTP stream hingga tuntas dan otomatis melakukan deserialisasi JSON.parse() di balik layar.'
    ],
    quiz: {
      question: 'Method apa pada objek Response Fetch API yang otomatis membaca stream data dan mem-parsingnya menjadi objek JavaScript?',
      options: [
        'response.parse()',
        'response.json()',
        'response.toJson()',
        'response.textToJson()'
      ],
      answer: 1,
      explanation: 'Method `response.json()` membaca stream response dan mem-parsing teks JSON menjadi objek/array JavaScript.'
    },
    challenge: {
      title: 'Tantangan: Panggil res.json()',
      description: 'Lakukan await `const d = await res.json();`.',
      startingCode: `async function get(res) {\n  let d = await res.json();\n  return d;\n}`,
      solution: `async function get(res) {\n  let d = await res.json();\n  return d;\n}`
    }
  },

  // ── 188. JSON HTML ──────────────────────────────────────────────────────
  {
    id: 'json-html',
    title: 'JSON HTML',
    chapter: 'JS JSON',
    chapterId: 'js-chap-json',
    order: 188,
    overview: 'Pola rendering data JSON dinamis ke elemen HTML: mentransformasi array data JSON menjadi baris tabel, kartu katalog produk, dan daftar item menggunakan map() dan template literals.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS JSON</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 188 / 195</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🖼️ Merender Data JSON ke Tampilan Antarmuka HTML</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Kekuatan utama JavaScript di browser adalah kemampuan memetakan data mentah JSON dari server langsung menjadi elemen antarmuka interaktif yang indah menggunakan metode <code>array.map()</code> dan Template Literals.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JSON to HTML Rendering Demo</title>
  <style>
    .grid-kartu { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; margin-top: 15px; }
    .kartu-materi { background: #1e293b; color: white; padding: 15px; border-radius: 10px; border: 1px solid #334155; }
    .badge-poin { background: #0284c7; padding: 3px 8px; border-radius: 4px; font-size: 12px; font-weight: bold; }
  </style>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Katalog Modul Belajar (Rendered from JSON)</h2>
  <div id="katalogContainer" class="grid-kartu"></div>

  <script>
    // Data JSON
    const dataModulJson = [
      { id: 'M-1', nama: 'DOM Tree', durasi: '45 Menit', level: 'Dasar' },
      { id: 'M-2', nama: 'Events & Listeners', durasi: '60 Menit', level: 'Menengah' },
      { id: 'M-3', nama: 'Web Worker & Multi-thread', durasi: '90 Menit', level: 'Lanjutan' }
    ];

    // Merender JSON ke Template Kartu HTML
    const htmlOutput = dataModulJson.map(m => \`
      <div class="kartu-materi">
        <h4 style="margin: 0 0 8px 0; color: #38bdf8;">\${m.nama}</h4>
        <div style="font-size: 13px; color: #94a3b8; margin-bottom: 8px;">⏱️ \${m.durasi}</div>
        <span class="badge-poin">\${m.level}</span>
      </div>
    \`).join('');

    document.getElementById('katalogContainer').innerHTML = htmlOutput;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Pola array.map(item => `template HTML`).join("") adalah fondasi deklaratif rendering UI yang juga diadopsi oleh React JSX.'
    ],
    quiz: {
      question: 'Method Array apakah yang umum dipadukan dengan Template Literals untuk mengubah deretan data JSON menjadi elemen HTML?',
      options: [
        'array.map()',
        'array.pop()',
        'array.shift()',
        'array.slice()'
      ],
      answer: 0,
      explanation: 'Method `array.map()` memetakan setiap objek data menjadi potongan markup HTML.'
    },
    challenge: {
      title: 'Tantangan: Map Data ke Tag HTML',
      description: 'Lakukan map array `const html = [1, 2].map(x => `<li>${x}</li>`).join("");`.',
      startingCode: `const html = [1, 2].map(x => \`<li>\${x}</li>\`).join("");`,
      solution: `const html = [1, 2].map(x => \`<li>\${x}</li>\`).join("");`
    }
  },

  // ── 189. JSON VS XML ────────────────────────────────────────────────────
  {
    id: 'json-vs-xml',
    title: 'JSON vs XML',
    chapter: 'JS JSON',
    chapterId: 'js-chap-json',
    order: 189,
    overview: 'Perbandingan komparatif JSON vs XML: kecepatan parsing native browser, efisiensi ukuran payload, kemudahan mapping ke objek JavaScript, dan ekosistem use-case masing-masing.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS JSON</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 189 / 195</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚖️ Komparasi: Mengapa JSON Menggantikan XML?</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Sebelum JSON mendominasi, XML (*eXtensible Markup Language*) adalah standar utama. JSON memenangkan pertarungan web karena lebih ringkas (tanpa tag penutup yang memboroskan bandwidth) dan dapat diparsing langsung menjadi objek JavaScript secara instan.
          </p>
        </div>

        <div class="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-xl text-xs">
          <table class="w-full text-left">
            <thead class="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white">
              <tr>
                <th class="p-3">Fitur</th>
                <th class="p-3">JSON</th>
                <th class="p-3">XML</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-800 font-mono text-slate-600 dark:text-slate-300">
              <tr><td class="p-3 font-bold">Ukuran Data</td><td class="text-emerald-500">Sangat Ringkas & Hemat Bandwidth</td><td>Lebih Besar (Banyak Tag Penutup)</td></tr>
              <tr><td class="p-3 font-bold">Parsing di JS</td><td class="text-emerald-500">JSON.parse() Instan (Native)</td><td>Perlu DOMParser XML Kompleks</td></tr>
              <tr><td class="p-3 font-bold">Tipe Data Asli</td><td class="text-emerald-500">Number, Boolean, Array, Object</td><td>Semua data dianggap teks murni</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JSON vs XML Comparison Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Perbandingan Visual JSON vs XML</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    log += '<strong>Format XML:</strong><br>';
    log += '&lt;user&gt;&lt;nama&gt;Rahmat&lt;/nama&gt;&lt;nilai&gt;100&lt;/nilai&gt;&lt;/user&gt;<br><br>';

    log += '<strong>Format JSON:</strong><br>';
    log += '{"nama": "Rahmat", "nilai": 100}<br><br>';

    log += '✅ JSON lebih hemat karakter dan langsung siap diproses oleh JavaScript!';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'JSON secara alami memetakan struktur data JavaScript tanpa memerlukan XML DOM traversal.'
    ],
    quiz: {
      question: 'Keunggulan utama apakah yang membuat JSON menggeser posisi XML dalam pertukaran data web modern?',
      options: [
        'JSON memiliki ukuran payload lebih ringkas dan langsung diparsing native oleh JavaScript',
        'JSON hanya bisa dibuka di browser Chrome',
        'XML tidak mendukung teks',
        'JSON tidak mendukung angka'
      ],
      answer: 0,
      explanation: 'JSON lebih ringkas dan otomatis terintegrasi langsung dengan struktur tipe data objek bawaan JavaScript.'
    },
    challenge: {
      title: 'Tantangan: Parsing JSON Cepat',
      description: 'Lakukan parsing JSON dari `JSON.parse(\'{"ok":true}\')`.',
      startingCode: `let res = JSON.parse('{"ok":true}');`,
      solution: `let res = JSON.parse('{"ok":true}');`
    }
  }
];
