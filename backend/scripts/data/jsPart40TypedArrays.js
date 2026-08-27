module.exports = [
  // ── 262. TYPED ARRAYS ───────────────────────────────────────────────────
  {
    id: 'typed-arrays',
    title: 'Typed Arrays',
    chapter: 'JS Typed Arrays',
    chapterId: 'js-chap-typedarrays',
    order: 262,
    overview: 'Pengenalan Binary Data Arrays di JavaScript: Uint8Array, Int16Array, Int32Array, Float32Array, Float64Array untuk pemrosesan citra WebGL, audio Web Audio API, dan transmisi WebSocket berkecapatan tinggi.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS TYPED ARRAYS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 262 / 277</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">💾 Manipulasi Data Biner Tingkat Tinggi (Typed Arrays)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Array JavaScript biasa fleksibel tetapi lambat karena setiap elemen dapat memiliki tipe berbeda. <strong>Typed Arrays</strong> mengalokasikan blok memori biner beralamat tetap di mana setiap elemen memiliki tipe data numerik yang seragam dan ketat (seperti 8-bit unsigned integer atau 64-bit float).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Typed Arrays Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Uint8Array (Data Biner 8-bit 0-255)</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // Membuat array 4 elemen bertipe 8-bit Unsigned Integer (0 hingga 255)
    const bytes = new Uint8Array([255, 128, 64, 0]);

    log += '• Panjang Array (Elemen): <strong>' + bytes.length + ' elemen</strong><br>';
    log += '• Ukuran Memori Fisik: <strong>' + bytes.byteLength + ' Bytes</strong><br>';
    log += '• Isi Data: [' + bytes.join(', ') + '] (Format Warna RGBA Standar Canvas!) ✅';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Uint8Array sangat efisien untuk memanipulasi piksel kanvas HTML5 ImageData (Red, Green, Blue, Alpha).'
    ],
    quiz: {
      question: 'Berapakah rentang nilai numerik yang dapat ditampung oleh setiap elemen di dalam objek Uint8Array?',
      options: [
        '0 hingga 255',
        '-128 hingga 127',
        '0 hingga 65535',
        '-32768 hingga 32767'
      ],
      answer: 0,
      explanation: '`Uint8Array` menampung unsigned 8-bit integers dengan rentang nilai `0` hingga `255`.'
    },
    challenge: {
      title: 'Tantangan: Buat Uint8Array',
      description: 'Lakukan `const arr = new Uint8Array(4);`.',
      startingCode: `const arr = new Uint8Array(4);`,
      solution: `const arr = new Uint8Array(4);`
    }
  },

  // ── 263. TYPED METHODS ──────────────────────────────────────────────────
  {
    id: 'typed-methods',
    title: 'Typed Methods',
    chapter: 'JS Typed Arrays',
    chapterId: 'js-chap-typedarrays',
    order: 263,
    overview: 'Method Khusus Manipulasi Typed Arrays: .subarray() (membuat view baru tanpa menyalin memori), .set() (menyalin blok data biner cepat), dan .slice().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS TYPED ARRAYS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 263 / 277</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚡ Operasi Memori Nol-Biaya: subarray() & set()</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Method <code>.subarray(begin, end)</code> membuat <em>window view</em> baru pada buffer memori yang sama <strong>tanpa melakukan penyalinan data sama sekali (Zero-Copy)</strong>, menjadikannya sangat cepat untuk pengolahan video dan stream audio.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Typed Methods Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Zero-Copy Subarray vs Array Copy</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const bufferAsli = new Uint8Array([10, 20, 30, 40, 50]);
    // Subarray membagi referensi memori yang sama persis!
    const subView = bufferAsli.subarray(1, 4);

    log += '• Subarray View Awal: [' + subView.join(', ') + ']<br>';
    // Mengubah nilai di subView...
    subView[0] = 99;

    log += '• Nilai bufferAsli ikut berubah menjadi: <strong>[' + bufferAsli.join(', ') + ']</strong> (Zero-Copy Terbukti!) ✅';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'subarray() merujuk ke blok ArrayBuffer yang sama, sedangkan slice() menyalin buffer ke alokasi memori baru.'
    ],
    quiz: {
      question: 'Apa perbedaan utama antara method .subarray() dan .slice() pada objek TypedArray?',
      options: [
        '.subarray() membuat view pada buffer memori yang sama (Zero-Copy), sedangkan .slice() menyalin isi ke memori baru',
        '.subarray() hanya bisa memotong angka negatif',
        '.slice() menghapus elemen asli',
        'Tidak ada perbedaan'
      ],
      answer: 0,
      explanation: '`.subarray()` membuat pandangan (*view*) baru di atas buffer yang sama tanpa mengalokasikan memori baru.'
    },
    challenge: {
      title: 'Tantangan: Potong Subarray',
      description: 'Lakukan `arr.subarray(0, 2);`.',
      startingCode: `function getSub(arr) {\n  return arr.subarray(0, 2);\n}`,
      solution: `function getSub(arr) {\n  return arr.subarray(0, 2);\n}`
    }
  },

  // ── 264. TYPED REFERENCE ────────────────────────────────────────────────
  {
    id: 'typed-reference',
    title: 'Typed Reference',
    chapter: 'JS Typed Arrays',
    chapterId: 'js-chap-typedarrays',
    order: 264,
    overview: 'Kamus referensi lengkap 11 varian TypedArray di JavaScript: ukuran bit, byte per element, rentang nilai minimal/maksimal, dan deskripsi use-case.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS TYPED ARRAYS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 264 / 277</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📚 Kamus Referensi Kelas TypedArray Lengkap</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Tabel berikut merangkum seluruh kelas TypedArray yang tersedia secara native di JavaScript.
          </p>
        </div>

        <div class="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-xl text-xs">
          <table class="w-full text-left">
            <thead class="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white">
              <tr>
                <th class="p-3">Tipe Data</th>
                <th class="p-3">Bytes / Elemen</th>
                <th class="p-3">Rentang Nilai</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-800 font-mono text-slate-600 dark:text-slate-300">
              <tr><td class="p-3 font-bold text-amber-500">Int8Array</td><td>1 Byte</td><td>-128 s/d 127</td></tr>
              <tr><td class="p-3 font-bold text-amber-500">Uint8Array</td><td>1 Byte</td><td>0 s/d 255</td></tr>
              <tr><td class="p-3 font-bold text-amber-500">Uint8ClampedArray</td><td>1 Byte</td><td>0 s/d 255 (Clamped Piksel Canvas)</td></tr>
              <tr><td class="p-3 font-bold text-amber-500">Int32Array</td><td>4 Bytes</td><td>-2,147,483,648 s/d 2,147,483,647</td></tr>
              <tr><td class="p-3 font-bold text-amber-500">Float64Array</td><td>8 Bytes</td><td>Bilangan Desimal Presisi Ganda 64-bit</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Typed Reference Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Pemeriksaan BYTES_PER_ELEMENT</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    log += '• Uint8Array.BYTES_PER_ELEMENT: <strong>' + Uint8Array.BYTES_PER_ELEMENT + ' Byte</strong><br>';
    log += '• Int32Array.BYTES_PER_ELEMENT: <strong>' + Int32Array.BYTES_PER_ELEMENT + ' Bytes</strong><br>';
    log += '• Float64Array.BYTES_PER_ELEMENT: <strong>' + Float64Array.BYTES_PER_ELEMENT + ' Bytes</strong>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Konstanta statis BYTES_PER_ELEMENT mempermudah kalkulasi ukuran alokasi memori yang diperlukan.'
    ],
    quiz: {
      question: 'Berapa banyak bytes memori fisik yang dialokasikan untuk setiap elemen di dalam objek Float64Array?',
      options: [
        '1 Byte',
        '4 Bytes',
        '8 Bytes',
        '16 Bytes'
      ],
      answer: 2,
      explanation: '`Float64Array` menggunakan 8 Bytes (64 bit) untuk setiap elemen bilangannya.'
    },
    challenge: {
      title: 'Tantangan: Periksa Bytes Per Element',
      description: 'Kembalikan `Int32Array.BYTES_PER_ELEMENT`.',
      startingCode: `function getBytes() {\n  return Int32Array.BYTES_PER_ELEMENT;\n}`,
      solution: `function getBytes() {\n  return Int32Array.BYTES_PER_ELEMENT;\n}`
    }
  },

  // ── 265. ARRAY BUFFERS ──────────────────────────────────────────────────
  {
    id: 'array-buffers',
    title: 'Array Buffers',
    chapter: 'JS Typed Arrays',
    chapterId: 'js-chap-typedarrays',
    order: 265,
    overview: 'ArrayBuffer & SharedArrayBuffer: blok memori mentah berukuran tetap (*fixed-length raw binary data*) yang menjadi fondasi penyimpanan seluruh Typed Arrays di RAM.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS TYPED ARRAYS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 265 / 277</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧱 Blok Memori Mentah (ArrayBuffer)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ArrayBuffer</code> adalah objek yang merepresentasikan blok memori berukuran tetap. ArrayBuffer tidak dapat dimanipulasi secara langsung; kita harus membuat *View* (seperti <code>Uint8Array</code> atau <code>DataView</code>) untuk membaca atau menulis byte di dalamnya.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Array Buffers Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Alokasi 16 Bytes Memori Mentah</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // Alokasi 16 Bytes memori di RAM
    const buffer = new ArrayBuffer(16);

    // Membuat dua View berbeda di atas 1 buffer yang sama!
    const view8 = new Uint8Array(buffer);
    const view32 = new Int32Array(buffer);

    view32[0] = 100000; // Mengisi 4 byte pertama dengan angka 100.000

    log += '• Ukuran Total Buffer: <strong>' + buffer.byteLength + ' Bytes</strong><br>';
    log += '• Elemen Int32 pertama: ' + view32[0] + '<br>';
    log += '• Representasi 4 Byte Mentah di Uint8: [' + view8.slice(0, 4).join(', ') + '] ✅';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'ArrayBuffer bertindak sebagai wadah byte murni, sementara Typed Array bertindak sebagai kacamata (*view*) untuk menginterpretasikan byte tersebut.'
    ],
    quiz: {
      question: 'Apakah kita dapat membaca atau memodifikasi nilai di dalam ArrayBuffer secara langsung tanpa menggunakan View (seperti TypedArray atau DataView)?',
      options: [
        'Tidak, ArrayBuffer wajib diakses menggunakan View',
        'Bisa, langsung dengan buffer[0]',
        'Hanya bisa di Node.js',
        'Bisa jika menggunakan console.log'
      ],
      answer: 0,
      explanation: '`ArrayBuffer` adalah memori mentah yang harus diakses melalui *View* (TypedArray atau DataView).'
    },
    challenge: {
      title: 'Tantangan: Buat ArrayBuffer 8 Bytes',
      description: 'Lakukan `const buf = new ArrayBuffer(8);`.',
      startingCode: `const buf = new ArrayBuffer(8);`,
      solution: `const buf = new ArrayBuffer(8);`
    }
  },

  // ── 266. DATAVIEWS ──────────────────────────────────────────────────────
  {
    id: 'dataviews',
    title: 'DataViews',
    chapter: 'JS Typed Arrays',
    chapterId: 'js-chap-typedarrays',
    order: 266,
    overview: 'DataView di JavaScript: antarmuka pembacaan dan penulisan byte fleksibel di sembarang offset dengan kendali penuh atas Endianness (Little-Endian vs Big-Endian) untuk parsing file WAV, PNG, dan protokol TCP.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS TYPED ARRAYS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 266 / 277</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔬 Parsing File Biner Kustom (DataView)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>DataView</code> memberikan kontrol penuh untuk membaca berbagai tipe data pada offset byte sembarang (contoh: <code>getInt16(byteOffset, isLittleEndian)</code>). Ini adalah alat utama untuk membaca struktur header file biner seperti MP3, WAV, atau Zip.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>DataViews Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Simulasi Parsing Header Paket Jaringan</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const buffer = new ArrayBuffer(8);
    const dv = new DataView(buffer);

    // Tulis 1 Byte Header di offset 0
    dv.setUint8(0, 0xAA); // Magic Byte (170)
    // Tulis 2 Byte Port di offset 1 (Big-Endian network byte order)
    dv.setUint16(1, 8080, false);
    // Tulis 4 Byte Payload Length di offset 3 (Little-Endian)
    dv.setUint32(3, 1024, true);

    log += '• Magic Byte (Offset 0): 0x' + dv.getUint8(0).toString(16).toUpperCase() + '<br>';
    log += '• Port Server (Offset 1): <strong>' + dv.getUint16(1, false) + '</strong><br>';
    log += '• Panjang Payload (Offset 3): <strong>' + dv.getUint32(3, true) + ' Bytes</strong> ✅';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'DataView memungkinkan penentuan endianness per-operasi pembacaan (parameter boolean littleEndian).'
    ],
    quiz: {
      question: 'Keunggulan utama apakah yang dimiliki DataView dibandingkan TypedArray biasa saat mem-parsing file biner kompleks?',
      options: [
        'Kemampuan membaca berbagai tipe data berbeda pada sembarang offset byte dengan kontrol Little-Endian / Big-Endian',
        'DataView otomatis mengompresi file ke zip',
        'DataView hanya bekerja pada string teks',
        'DataView tidak memerlukan ArrayBuffer'
      ],
      answer: 0,
      explanation: '`DataView` memungkinkan pembacaan tipe data campuran pada offset byte mana pun dengan kontrol endianness eksplisit.'
    },
    challenge: {
      title: 'Tantangan: Buat DataView',
      description: 'Lakukan `const dv = new DataView(buf);`.',
      startingCode: `function createDV(buf) {\n  return new DataView(buf);\n}`,
      solution: `function createDV(buf) {\n  return new DataView(buf);\n}`
    }
  },

  // ── 267. JS ATOMICS ─────────────────────────────────────────────────────
  {
    id: 'js-atomics',
    title: 'JS Atomics',
    chapter: 'JS Typed Arrays',
    chapterId: 'js-chap-typedarrays',
    order: 267,
    overview: 'Objek Atomics: operasi atomik thread-safe pada SharedArrayBuffer (Atomics.add, load, store, wait, notify) untuk mencegah Race Conditions pada komputasi multi-threaded Web Workers.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS TYPED ARRAYS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 267 / 277</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚛️ Sinkronisasi Multi-Thread Aman: Atomics API</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Ketika beberapa Web Worker berbagi memori yang sama via <code>SharedArrayBuffer</code>, operasi matematika biasa rentan terhadap <strong>Race Conditions</strong>. <strong>Atomics API</strong> menjamin bahwa operasi baca, tulis, dan penjumlahan dieksekusi secara atomik (tidak dapat diinterupsi oleh thread lain).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Atomics Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Operasi Atomik Thread-Safe</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // Simulasi Shared Int32 Array
    const buffer = new ArrayBuffer(16);
    const sharedArr = new Int32Array(buffer);

    // Menulis nilai awal
    Atomics.store(sharedArr, 0, 100);

    // Menambahkan 50 secara atomik
    const nilaiLama = Atomics.add(sharedArr, 0, 50);
    const nilaiBaru = Atomics.load(sharedArr, 0);

    log += '• Nilai Lama Sebelum Add: ' + nilaiLama + '<br>';
    log += '• Nilai Baru Hasil Atomics.add: <strong>' + nilaiBaru + '</strong> (150) ✅<br>';
    log += 'Atomics menjamin thread-safety tanpa bahaya tabrakan memori di Web Workers!';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Atomics.add(typedArray, index, value) menambah nilai dan mengembalikan nilai lama sebelum operasi penambahan terjadi secara atomik.'
    ],
    quiz: {
      question: 'Apa fungsi utama dari objek bawaan Atomics di JavaScript?',
      options: [
        'Membelah molekul fisika',
        'Menyediakan operasi memori atomik thread-safe pada SharedArrayBuffer untuk mencegah race conditions',
        'Mempercepat render CSS',
        'Menghubungkan database MySQL'
      ],
      answer: 1,
      explanation: 'Objek `Atomics` menyediakan operasi memori tak-terpisahkan (*atomic operations*) untuk sinkronisasi thread-safe antar Web Workers.'
    },
    challenge: {
      title: 'Tantangan: Operasi Atomics.load',
      description: 'Lakukan `Atomics.load(arr, 0);`.',
      startingCode: `function loadSafe(arr) {\n  return Atomics.load(arr, 0);\n}`,
      solution: `function loadSafe(arr) {\n  return Atomics.load(arr, 0);\n}`
    }
  }
];
