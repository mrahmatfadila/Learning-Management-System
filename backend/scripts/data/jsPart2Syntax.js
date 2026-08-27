module.exports = [
  // ── 5. JS SYNTAX ────────────────────────────────────────────────────────
  {
    id: 'js-syntax',
    title: 'JS Syntax',
    chapter: 'JS Syntax',
    chapterId: 'js-chap-syntax',
    order: 5,
    overview: 'Pahami aturan fundamental tata bahasa JavaScript: Fixed Values (Literals), Variable Values, Operators, Expressions, Keywords, dan aturan Case Sensitivity (camelCase).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS SYNTAX</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 05 / 22</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📐 Anatomi Sintaks JavaScript</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Sintaks JavaScript adalah seperangkat aturan tentang bagaimana program JavaScript harus ditulis dan distrukturkan agar dapat diinterpretasikan dengan benar oleh mesin JavaScript (seperti V8 di Chrome/Node.js).
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
            <strong class="text-amber-500 text-sm">1. Nilai Tetap (Literals)</strong>
            <p class="text-slate-600 dark:text-slate-300">Nilai data langsung seperti angka (<code>10.5</code>, <code>1001</code>) atau teks string yang diapit tanda petik (<code>'Halo'</code> atau <code>"Dunia"</code>).</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
            <strong class="text-amber-500 text-sm">2. Nilai Variabel</strong>
            <p class="text-slate-600 dark:text-slate-300">Wadah penyimpan data yang dideklarasikan dengan kata kunci <code>let</code>, <code>const</code>, atau <code>var</code>.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
            <strong class="text-amber-500 text-sm">3. Operator & Ekspresi</strong>
            <p class="text-slate-600 dark:text-slate-300">Penggabungan nilai dan operator untuk menghasilkan nilai baru (contoh: <code>(5 * 10) + ' poin'</code> menghasilkan <code>"50 poin"</code>).</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
            <strong class="text-amber-500 text-sm">4. Case Sensitivity & camelCase</strong>
            <p class="text-slate-600 dark:text-slate-300">JavaScript <strong>membedakan huruf besar dan kecil</strong>. <code>namaUser</code>, <code>NamaUser</code>, dan <code>NAMAUSER</code> adalah variabel yang sepenuhnya berbeda!</p>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Syntax Demo</title>
  <style>
    body { font-family: sans-serif; padding: 20px; background: #fafafa; }
    .box { background: white; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0; max-width: 450px; }
    .code-preview { background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 8px; font-family: monospace; font-size: 13px; }
  </style>
</head>
<body>

  <div class="box">
    <h3>Demonstrasi Sintaks JavaScript</h3>
    <div class="code-preview" id="log-area">Hasil akan muncul di sini...</div>
  </div>

  <script>
    // 1. Literal dan Variabel
    let hargaBarang = 150000;
    let diskonPersen = 10;

    // 2. Ekspresi matematika
    let potonganHarga = (hargaBarang * diskonPersen) / 100;
    let totalBayar = hargaBarang - potonganHarga;

    // 3. String Concatenation & camelCase Identifier
    let ringkasanBelanja = 'Harga Awal: Rp ' + hargaBarang.toLocaleString('id-ID') +
      '\\nDiskon ' + diskonPersen + '%: Rp ' + potonganHarga.toLocaleString('id-ID') +
      '\\nTotal Bayar: Rp ' + totalBayar.toLocaleString('id-ID');

    document.getElementById('log-area').innerText = ringkasanBelanja;
  </script>

</body>
</html>`,
    codeExplanation: [
      'let hargaBarang = 150000; adalah deklarasi variabel dengan penamaan standar Lower CamelCase.',
      'Ekspresi matematika dihitung berdasarkan aturan operator precedence.',
      'Metode .toLocaleString("id-ID") memformat angka menjadi format mata uang Indonesia.',
      'Escape character "\\n" membuat baris baru di dalam teks.'
    ],
    quiz: {
      question: 'Manakah penamaan variabel yang mengikuti konvensi standar JavaScript (Lower CamelCase)?',
      options: [
        'user_first_name',
        'UserFirstName',
        'userFirstName',
        'USERFIRSTNAME'
      ],
      answer: 2,
      explanation: 'Standar penulisan identifier di JavaScript adalah Lower CamelCase (huruf pertama kecil, kata selanjutnya diawali huruf kapital), contoh: userFirstName.'
    },
    challenge: {
      title: 'Tantangan: Hitung Luas Persegi Panjang',
      description: 'Deklarasikan variabel `panjang` bernilai 12 dan `lebar` bernilai 5, kemudian buat variabel `luas` yang mengalikan keduanya.',
      startingCode: `// Tulis deklarasi variabel panjang, lebar, dan luas di bawah:\n`,
      solution: `let panjang = 12;\nlet lebar = 5;\nlet luas = panjang * lebar;`
    }
  },

  // ── 6. JS STATEMENTS ────────────────────────────────────────────────────
  {
    id: 'js-statements',
    title: 'JS Statements',
    chapter: 'JS Syntax',
    chapterId: 'js-chap-syntax',
    order: 6,
    overview: 'Pahami instruksi statement, fungsi titik koma (semicolon), pemecahan baris kode, dan pengelompokan statement dalam Code Block {}.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS STATEMENTS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 06 / 22</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📜 Instruksi Program (Statements)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Program JavaScript adalah rangkaian instruksi (disebut <strong>Statements</strong>) yang dieksekusi satu per satu oleh komputer dari atas ke bawah.
          </p>
        </div>

        <div class="space-y-3 text-xs">
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-amber-500 text-sm">1. Pemisah Titik Koma (Semicolon ;)</strong>
            <p class="text-slate-600 dark:text-slate-300 mt-1">
              Titik koma memisahkan antar statement. Menuliskan titik koma di akhir setiap baris adalah <em>best practice</em> yang melindungi kode dari kesalahan parsing (Automatic Semicolon Insertion ambiguity).
            </p>
          </div>

          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-amber-500 text-sm">2. Pengelompokan Kode (Code Blocks {})</strong>
            <p class="text-slate-600 dark:text-slate-300 mt-1">
              Tanda kurung kurawal <code>{ ... }</code> digunakan untuk mengelompokkan serangkaian statement agar dieksekusi bersamaan, misalnya di dalam fungsi atau percabangan kondisi.
            </p>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Statements</title>
  <style>
    body { font-family: sans-serif; padding: 24px; background: #0f172a; color: white; }
    .card { background: #1e293b; padding: 20px; border-radius: 12px; max-width: 460px; }
    .btn { background: #eab308; color: black; border: none; padding: 10px 16px; border-radius: 8px; font-weight: bold; cursor: pointer; }
    ul { background: #0f172a; padding: 15px 25px; border-radius: 8px; font-family: monospace; }
  </style>
</head>
<body>

  <div class="card">
    <h2>Eksekusi Blok Statement ⚙️</h2>
    <p>Klik tombol untuk menjalankan 3 statement berurutan di dalam fungsi:</p>
    <button class="btn" onclick="jalankanProses()">Jalankan Program</button>
    <ul id="log-list">
      <li>Menunggu proses dimulai...</li>
    </ul>
  </div>

  <script>
    // Deklarasi fungsi yang berisi blok beberapa statement
    function jalankanProses() {
      const list = document.getElementById('log-list');
      list.innerHTML = ''; // Statement 1: Kosongkan list

      let step1 = 'Langkah 1: Menginisialisasi sistem...'; // Statement 2
      let step2 = 'Langkah 2: Memeriksa integritas data...'; // Statement 3
      let step3 = 'Langkah 3: Semua proses sukses selesai! 🎉'; // Statement 4

      // Memasukkan hasil statement ke DOM
      list.innerHTML += '<li>' + step1 + '</li>';
      list.innerHTML += '<li>' + step2 + '</li>';
      list.innerHTML += '<li><strong style="color:#4ade80">' + step3 + '</strong></li>';
    }
  </script>

</body>
</html>`,
    codeExplanation: [
      'Setiap baris di dalam fungsi jalankanProses() adalah statement instruksi yang dieksekusi berurutan.',
      'Operator += menambahkan elemen baru ke dalam .innerHTML tanpa menimpa elemen yang baru saja dimasukkan.',
      'Blok kurung kurawal { ... } membungkus semua statement menjadi satu kesatuan fungsi.'
    ],
    quiz: {
      question: 'Karakter apa yang digunakan untuk mengelompokkan beberapa statement JavaScript menjadi satu blok?',
      options: [
        'Tanda kurung siku [ ]',
        'Tanda kurung kurawal { }',
        'Tanda kurung biasa ( )',
        'Tanda kutip ganda " "'
      ],
      answer: 1,
      explanation: 'Kurung kurawal { } digunakan di JavaScript untuk membungkus beberapa statement ke dalam satu blok (misal pada fungsi, if, atau loop).'
    },
    challenge: {
      title: 'Tantangan: Buat Blok Fungsi Perhitungan',
      description: 'Buat fungsi `tambahTigaAngka(a, b, c)` yang berisi statement untuk menjumlahkan ketiga angka dan mengembalikan hasilnya via `return`.',
      startingCode: `function tambahTigaAngka(a, b, c) {\n  // Tulis statement di dalam code block ini:\n}`,
      solution: `function tambahTigaAngka(a, b, c) {\n  let total = a + b + c;\n  return total;\n}`
    }
  },

  // ── 7. JS COMMENTS ──────────────────────────────────────────────────────
  {
    id: 'js-comments',
    title: 'JS Comments',
    chapter: 'JS Syntax',
    chapterId: 'js-chap-syntax',
    order: 7,
    overview: 'Gunakan komentar satu baris (//) dan multi-baris (/* */) untuk dokumentasi logika, catatan developer, dan pengujian kode tanpa menghapusnya.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS COMMENTS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 07 / 22</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">💬 Dokumentasi Kode dengan Komentar</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Komentar JavaScript adalah baris teks yang <strong>diabaikan sepenuhnya oleh browser</strong>. Komentar sangat penting untuk menjelaskan maksud kode, catatan tim, dan menonaktifkan kode sementara saat debugging.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <strong class="text-amber-500 text-sm">1. Single-Line Comment (//)</strong>
            <p class="text-slate-600 dark:text-slate-300">Semua teks setelah dua garis miring <code>//</code> hingga akhir baris tersebut akan diabaikan.</p>
            <div class="p-2 bg-slate-100 dark:bg-slate-800 rounded font-mono text-[11px] text-slate-500">
              // Ini adalah komentar satu baris<br>
              let x = 5; // Variabel nilai awal
            </div>
          </div>

          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <strong class="text-amber-500 text-sm">2. Multi-Line Comment (/* ... */)</strong>
            <p class="text-slate-600 dark:text-slate-300">Bisa membentang di banyak baris. Sangat cocok untuk penjelasan arsitektur kompleks atau dokumentasi JSDoc fungsi.</p>
            <div class="p-2 bg-slate-100 dark:bg-slate-800 rounded font-mono text-[11px] text-slate-500">
              /*<br>
              &nbsp;Fungsi ini menghitung diskon<br>
              &nbsp;berdasarkan status membership.<br>
              */
            </div>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Comments</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">

  <h2>Contoh Praktik Penggunaan Komentar</h2>
  <div id="output" style="padding: 15px; background: #e0f2fe; border-radius: 8px; font-weight: bold; color: #0369a1;"></div>

  <script>
    /*
      ======================================================
      SISTEM KALKULASI PAJAK KENDARAAN
      Dibuat oleh: Tim Developer LMS
      Versi: 2.0.1
      ======================================================
    */

    const TARIF_PAJAK = 0.11; // PPN 11%

    // Data transaksi
    let nominalBeli = 5000000;

    // let diskonMusiman = 500000; // Komentar untuk menonaktifkan diskon sementara

    let totalPajak = nominalBeli * TARIF_PAJAK; // Menghitung besaran PPN
    let totalKeseluruhan = nominalBeli + totalPajak;

    document.getElementById('output').innerText = 
      'Total yang harus dibayar: Rp ' + totalKeseluruhan.toLocaleString('id-ID');
  </script>

</body>
</html>`,
    codeExplanation: [
      'Komentar multi-baris /* ... */ di awal script memberikan informasi judul dan metadata pembuat kode.',
      'Komentar single-line // PPN 11% memberikan keterangan langsung di samping konstanta.',
      'Baris let diskonMusiman di-nonaktifkan menggunakan komentar (commented-out) sehingga tidak memengaruhi nilai kalkulasi.'
    ],
    quiz: {
      question: 'Simbol manakah yang digunakan untuk membuat komentar yang mencakup beberapa baris sekaligus di JavaScript?',
      options: [
        '<!-- Komentar -->',
        '// Komentar //',
        '/* Komentar */',
        '# Komentar'
      ],
      answer: 2,
      explanation: 'Komentar multi-baris di JavaScript diawali dengan /* dan diakhiri dengan */.'
    },
    challenge: {
      title: 'Tantangan: Dokumentasikan Fungsi',
      description: 'Tambahkan komentar multi-baris di atas fungsi `hitungTotal()` yang menjelaskan bahwa fungsi ini menerima parameter `harga` dan `jumlah`.',
      startingCode: `// Tambahkan multi-line comment di atas fungsi:\nfunction hitungTotal(harga, jumlah) {\n  return harga * jumlah;\n}`,
      solution: `/*\n  Fungsi hitungTotal\n  Parameter: harga dan jumlah\n*/\nfunction hitungTotal(harga, jumlah) {\n  return harga * jumlah;\n}`
    }
  },

  // ── 8. JS VARIABLES ─────────────────────────────────────────────────────
  {
    id: 'js-variables',
    title: 'JS Variables',
    chapter: 'JS Syntax',
    chapterId: 'js-chap-syntax',
    order: 8,
    overview: 'Kuasai konsep variabel sebagai wadah penyimpanan memori: deklarasi, inisialisasi, aturan penamaan identifier yang valid, dan peran historis kata kunci var.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS VARIABLES</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 08 / 22</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📦 Konsep Variabel JavaScript</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Variabel adalah label wadah memori untuk menyimpan nilai data. Di JavaScript modern (ES6+), kita mendeklarasikan variabel menggunakan 4 cara: <code>const</code> (default), <code>let</code> (bisa berubah), <code>var</code> (gaya lama), atau otomatis tanpa keyword.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
          <h3 class="text-sm font-bold text-slate-800 dark:text-white">📜 Aturan Resmi Penamaan Variabel (Identifiers):</h3>
          <ul class="list-disc list-inside text-xs text-slate-600 dark:text-slate-400 space-y-1.5 leading-relaxed">
            <li>Nama <strong>boleh</strong> mengandung huruf, angka, garis bawah (<code>_</code>), dan tanda dollar (<code>$</code>).</li>
            <li>Nama <strong>harus diawali</strong> dengan huruf, <code>$</code>, atau <code>_</code> (<strong>TIDAK BOLEH diawali angka</strong>).</li>
            <li>Nama bersifat <strong>Case Sensitive</strong> (<code>umur</code> berbeda dengan <code>Umur</code>).</li>
            <li>Nama <strong>tidak boleh</strong> menggunakan Reserved Keywords JS (seperti <code>class</code>, <code>return</code>, <code>function</code>, <code>if</code>).</li>
          </ul>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Variables Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px; background: #f8fafc;">

  <div style="background: white; padding: 20px; border-radius: 12px; max-width: 420px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
    <h3>Profil Pengguna (Variabel JS)</h3>
    <p id="info-user">Memuat...</p>
  </div>

  <script>
    // Deklarasi dan inisialisasi variabel
    let namaDepan = 'Budi';
    let namaBelakang = 'Santoso';
    let $saldoAkun = 750000;
    let _statusMember = 'Gold VIP';
    let umur = 24;

    // Menggabungkan variabel menjadi satu string
    let ringkasan = 'Nama Lengkap: ' + namaDepan + ' ' + namaBelakang + '<br>' +
      'Umur: ' + umur + ' tahun<br>' +
      'Status: ' + _statusMember + '<br>' +
      'Saldo: Rp ' + $saldoAkun.toLocaleString('id-ID');

    document.getElementById('info-user').innerHTML = ringkasan;
  </script>

</body>
</html>`,
    codeExplanation: [
      'namaDepan dan namaBelakang menyimpan data bertipe string.',
      '$saldoAkun adalah contoh identifier yang valid diawali dengan tanda dollar $.',
      '_statusMember adalah identifier yang valid diawali dengan garis bawah _.',
      'Variabel digabungkan bersama tag <br> untuk dirender sebagai format HTML berbaris.'
    ],
    quiz: {
      question: 'Manakah nama variabel di bawah ini yang TIDAK VALID dan akan menyebabkan SyntaxError di JavaScript?',
      options: [
        'let _totalUser = 10;',
        'let $hargaDiskon = 5000;',
        'let 2ndWinner = "Budi";',
        'let namaPengguna2 = "Siti";'
      ],
      answer: 2,
      explanation: 'Nama variabel di JavaScript TIDAK BOLEH diawali dengan angka (seperti 2ndWinner). Namun angka boleh diletakkan di tengah atau akhir (seperti namaPengguna2).'
    },
    challenge: {
      title: 'Tantangan: Deklarasikan Variabel Produk',
      description: 'Deklarasikan 3 variabel: `namaProduk` (string "Laptop"), `harga` (number 8500000), dan `tersedia` (boolean true).',
      startingCode: `// Deklarasikan ketiga variabel di bawah ini:\n`,
      solution: `let namaProduk = "Laptop";\nlet harga = 8500000;\nlet tersedia = true;`
    }
  },

  // ── 9. JS LET ───────────────────────────────────────────────────────────
  {
    id: 'js-let',
    title: 'JS Let',
    chapter: 'JS Syntax',
    chapterId: 'js-chap-syntax',
    order: 9,
    overview: 'Pahami kata kunci let yang diperkenalkan pada ES6: Block Scope {}, aturan Re-assign tanpa Re-declare, serta perbandingannya dengan var.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS LET</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 09 / 22</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔒 Memahami Kata Kunci let & Block Scope</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Kata kunci <code>let</code> diperkenalkan di JavaScript ES6 (2015) untuk memperbaiki kelemahan fatal <code>var</code>. Variabel yang dideklarasikan dengan <code>let</code> memiliki <strong>Block Scope</strong>, yang berarti hanya hidup di dalam blok kurung kurawal <code>{ }</code> tempat ia dibuat.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div class="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 space-y-2">
            <strong class="text-emerald-700 dark:text-emerald-400 text-sm">Fitur Utama let:</strong>
            <ul class="space-y-1 text-slate-600 dark:text-slate-300">
              <li>✅ <strong>Block Scoped:</strong> Aman dari kebocoran scope.</li>
              <li>✅ <strong>Bisa di-Reassign:</strong> Nilainya bisa diubah kapan saja.</li>
              <li>❌ <strong>TIDAK BISA di-Redeclare:</strong> Mencegah penimpaan variabel tanpa sengaja di scope yang sama.</li>
            </ul>
          </div>

          <div class="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 space-y-2">
            <strong class="text-rose-700 dark:text-rose-400 text-sm">Masalah pada var (Lama):</strong>
            <ul class="space-y-1 text-slate-600 dark:text-slate-300">
              <li>❌ <strong>Function/Global Scoped:</strong> Bocor keluar dari blok <code>if</code> atau <code>for</code>.</li>
              <li>❌ <strong>Bisa di-Redeclare:</strong> Rentan bug jika nama variabel sama dideklarasikan ulang.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Let Scope Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Demonstrasi Block Scope let vs var</h2>
  <div id="hasil" style="background: #f1f5f9; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let output = '';

    let skor = 100; // Variabel Global / Luar Blok
    output += '1. Nilai skor di luar blok: ' + skor + '<br>';

    {
      let skor = 50; // Variabel Local di dalam Block Scope {}
      output += '2. Nilai skor di dalam blok: ' + skor + '<br>';
    }

    output += '3. Nilai skor setelah keluar blok tetap: ' + skor + ' (Aman, tidak tercemar!)<br>';

    // Re-assigning let
    skor = 120;
    output += '4. Nilai skor setelah di-update (re-assigned): ' + skor;

    document.getElementById('hasil').innerHTML = output;
  </script>

</body>
</html>`,
    codeExplanation: [
      'let skor di luar blok bernilai 100.',
      'Di dalam { ... }, let skor = 50 mendeklarasikan variabel baru yang sepenuhnya terisolasi dalam blok tersebut.',
      'Saat kode keluar dari blok kurung kurawal, nilai skor kembali ke 100 karena let memiliki Block Scope sejati.',
      'skor = 120 memperbarui nilai variabel luar secara sah (Re-assignment).'
    ],
    quiz: {
      question: 'Apa yang terjadi jika kita mendeklarasikan let dengan nama yang sama dua kali di dalam scope yang sama?',
      options: [
        'Nilai lama otomatis tertimpa tanpa error',
        'Browser akan menghasilkan SyntaxError (Identifier already declared)',
        'Nilai pertama akan dihapus dari memori',
        'Kedua variabel akan digabungkan menjadi array'
      ],
      answer: 1,
      explanation: 'Variabel yang dideklarasikan dengan `let` tidak boleh dideklarasikan ulang (`re-declared`) dalam cakupan yang sama, dan browser akan memunculkan SyntaxError.'
    },
    challenge: {
      title: 'Tantangan: Perbarui Nilai Let',
      description: 'Deklarasikan variabel `let counter = 0;`, kemudian pada baris berikutnya tambahkan nilainya sebanyak 5 menggunakan `counter = counter + 5;`.',
      startingCode: `// Tulis kode deklarasi dan update nilai let di sini:\n`,
      solution: `let counter = 0;\ncounter = counter + 5;`
    }
  },

  // ── 10. JS CONST ────────────────────────────────────────────────────────
  {
    id: 'js-const',
    title: 'JS Const',
    chapter: 'JS Syntax',
    chapterId: 'js-chap-syntax',
    order: 10,
    overview: 'Pelajari kata kunci const untuk nilai tetap yang tidak boleh di-reassign, immutable binding, serta manipulasi mutasi pada Array dan Objek bertipe const.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS CONST</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 10 / 22</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛡️ Konstanta (const) & Aturan Mutasi</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Kata kunci <code>const</code> mendefinisikan <strong>Constant Reference (Binding Tetap)</strong>. Artinya, variabel tidak dapat di-reassign ke nilai baru dan wajib langsung diinisialisasi saat dideklarasikan.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 space-y-2">
          <h3 class="text-sm font-bold text-amber-900 dark:text-amber-300">⚠️ PENTING: const TIDAK Berarti Nilai Objek Tidak Bisa Berubah!</h3>
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            <code>const</code> mengunci <strong>referensi variabel</strong>, bukan isi internal dari objek atau array. Anda tetap bisa menambah elemen ke Array <code>const</code> atau mengubah properti Objek <code>const</code>!
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Const Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Praktik Konstanta, Objek, dan Array (const)</h2>
  <div id="output" style="background: #f8fafc; border: 1px solid #cbd5e1; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. Primitive const (Benar-benar tidak bisa diubah)
    const PI = 3.14159;
    const KODE_NEGARA = 'ID';
    log += 'Konstanta Primitif: PI = ' + PI + ', Negara = ' + KODE_NEGARA + '<br><br>';

    // 2. Objek const (Propertinya bisa dimutasi)
    const mobil = {
      merk: 'Toyota',
      tipe: 'Avanza',
      warna: 'Hitam'
    };
    log += 'Mobil Awal: ' + mobil.merk + ' ' + mobil.tipe + ' (' + mobil.warna + ')<br>';

    // Mengubah properti objek
    mobil.warna = 'Merah Metalik';
    mobil.tahun = 2024;
    log += 'Mobil Setelah Dimutasi: ' + mobil.merk + ' ' + mobil.tipe + ' (' + mobil.warna + ', Tahun ' + mobil.tahun + ')<br><br>';

    // 3. Array const (Elemen bisa ditambah / diubah)
    const daftarBahasa = ['HTML', 'CSS'];
    daftarBahasa.push('JavaScript'); // Menambah elemen baru
    daftarBahasa.push('TypeScript');
    log += 'Daftar Bahasa Array const: ' + daftarBahasa.join(', ');

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'const PI = 3.14159 mengunci nilai primitif agar tidak bisa diubah selamanya.',
      'const mobil mengunci referensi objek mobil. Anda tidak bisa melakukan mobil = { lain: true }, namun Anda bebas mengubah mobil.warna = "Merah Metalik".',
      'daftarBahasa.push("JavaScript") sukses menambahkan data baru ke dalam array const.'
    ],
    quiz: {
      question: 'Manakah operasi di bawah ini yang akan menghasilkan TypeError pada variabel const?',
      options: [
        'const arr = [1, 2]; arr.push(3);',
        'const user = { name: "Ali" }; user.name = "Budi";',
        'const PI = 3.14; PI = 3.14159;',
        'const data = []; data[0] = "Item 1";'
      ],
      answer: 2,
      explanation: 'Re-assigning nilai primitif pada variabel const (PI = 3.14159) dilarang dan akan melempar TypeError: Assignment to constant variable.'
    },
    challenge: {
      title: 'Tantangan: Mutasi Array const',
      description: 'Deklarasikan array `const framework = ["React", "Vue"];`, lalu gunakan method `.push("Angular")` untuk menambahkan item baru ke array tersebut.',
      startingCode: `// Tulis kode deklarasi const dan push di bawah:\n`,
      solution: `const framework = ["React", "Vue"];\nframework.push("Angular");`
    }
  },

  // ── 11. JS TYPES ────────────────────────────────────────────────────────
  {
    id: 'js-types',
    title: 'JS Types',
    chapter: 'JS Syntax',
    chapterId: 'js-chap-syntax',
    order: 11,
    overview: 'Kuasai 8 Tipe Data JavaScript (String, Number, BigInt, Boolean, Undefined, Null, Symbol, Object), Dynamic Typing, serta operator typeof.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS TYPES</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 11 / 22</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧬 8 Tipe Data Utama di JavaScript</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            JavaScript adalah bahasa <strong>Dynamically Typed</strong>, artinya sebuah variabel tidak terikat pada satu tipe data tetap dan tipenya ditentukan secara otomatis berdasarkan nilai yang dimilikinya saat runtime.
          </p>
        </div>

        <div class="space-y-2 text-xs">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
              <strong class="text-amber-500">1. String:</strong> Teks (<code>"Halo"</code>, <code>'Dunia'</code>)
            </div>
            <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
              <strong class="text-amber-500">2. Number:</strong> Bilangan bulat & desimal (<code>42</code>, <code>3.14</code>)
            </div>
            <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
              <strong class="text-amber-500">3. BigInt:</strong> Angka berukuran sangat besar (<code>9007199254740991n</code>)
            </div>
            <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
              <strong class="text-amber-500">4. Boolean:</strong> Nilai logika (<code>true</code> atau <code>false</code>)
            </div>
            <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
              <strong class="text-amber-500">5. Undefined:</strong> Variabel yang belum diberi nilai
            </div>
            <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
              <strong class="text-amber-500">6. Null:</strong> Representasi nilai kosong yang disengaja
            </div>
            <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
              <strong class="text-amber-500">7. Symbol:</strong> Identifier unik yang tidak dapat diduplikasi
            </div>
            <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
              <strong class="text-amber-500">8. Object:</strong> Kumpulan data (Object, Array, Date)
            </div>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Data Types</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Pengecekan Tipe Data dengan Operator typeof</h2>
  <div id="type-list" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let list = '';

    let nama = 'Antigravity LMS';
    let harga = 250000;
    let isActive = true;
    let belumDiisi;
    let dataKosong = null;
    let murid = { id: 1, nama: 'Rahmat' };
    let tags = ['js', 'web', 'dev'];

    list += 'typeof nama ("' + nama + '") ➔ ' + typeof nama + '<br>';
    list += 'typeof harga (' + harga + ') ➔ ' + typeof harga + '<br>';
    list += 'typeof isActive (' + isActive + ') ➔ ' + typeof isActive + '<br>';
    list += 'typeof belumDiisi ➔ ' + typeof belumDiisi + '<br>';
    list += 'typeof dataKosong (null) ➔ ' + typeof dataKosong + ' (Bug historis JS: objek kosong)<br>';
    list += 'typeof murid ➔ ' + typeof murid + '<br>';
    list += 'typeof tags (Array) ➔ ' + typeof tags + ' (Array adalah turunan Object)<br>';
    list += 'Array.isArray(tags) ➔ ' + Array.isArray(tags);

    document.getElementById('type-list').innerHTML = list;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Operator typeof mengembalikan string nama tipe data dari suatu variabel.',
      'typeof null menghasilkan "object" karena alasan historis kompabilitas sejak versi awal JavaScript.',
      'Array di JavaScript adalah turunan dari tipe Object, dan dapat diperiksa secara spesifik menggunakan fungsi bawaan Array.isArray(tags).'
    ],
    quiz: {
      question: 'Manakah operator JavaScript yang digunakan untuk memeriksa tipe data dari sebuah variabel?',
      options: [
        'instanceof',
        'typeOf()',
        'typeof',
        'dataType'
      ],
      answer: 2,
      explanation: 'Operator `typeof` digunakan untuk memeriksa dan mengembalikan tipe data dari sebuah operan/variabel dalam bentuk string.'
    },
    challenge: {
      title: 'Tantangan: Cek Tipe Data Boolean',
      description: 'Deklarasikan variabel `let isLulus = true;`, lalu buat variabel `let tipe = typeof isLulus;`.',
      startingCode: `// Tulis deklarasi variabel dan pengecekan typeof di sini:\n`,
      solution: `let isLulus = true;\nlet tipe = typeof isLulus;`
    }
  }
];
