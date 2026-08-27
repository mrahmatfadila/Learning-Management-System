module.exports = [
  // ── 29. JS STRINGS ──────────────────────────────────────────────────────
  {
    id: 'js-strings',
    title: 'JS Strings',
    chapter: 'JS Strings',
    chapterId: 'js-chap-strings',
    order: 29,
    overview: 'Kuasai tipe data teks (String) di JavaScript: petik tunggal (\'), petik ganda ("), escape character (\\), sifat immutable (tidak bisa diubah langsung), dan properti length.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS STRINGS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 29 / 39</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔤 Tipe Data Teks (String) & Escape Characters</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            String adalah urutan karakter yang digunakan untuk menyimpan dan memanipulasi teks. String dapat ditulis di dalam tanda petik tunggal (<code>'teks'</code>) atau tanda petik ganda (<code>"teks"</code>).
          </p>
        </div>

        <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
          <h3 class="text-sm font-bold text-slate-800 dark:text-white">Escape Characters Populer:</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-2 font-mono text-slate-600 dark:text-slate-300">
            <div class="p-2 bg-slate-100 dark:bg-slate-800 rounded"><code>\\'</code> : Petik Tunggal</div>
            <div class="p-2 bg-slate-100 dark:bg-slate-800 rounded"><code>\\"</code> : Petik Ganda</div>
            <div class="p-2 bg-slate-100 dark:bg-slate-800 rounded"><code>\\\\</code> : Backslash</div>
            <div class="p-2 bg-slate-100 dark:bg-slate-800 rounded"><code>\\n</code> : Baris Baru</div>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Strings Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Karakter String & Panjang String</h2>
  <div id="output" style="background: #f8fafc; border: 1px solid #cbd5e1; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    let judulBuku = "Belajar \\"JavaScript Modern\\" dari Nol";
    log += 'Judul: ' + judulBuku + '<br>';
    log += 'Jumlah Karakter (length): ' + judulBuku.length + ' huruf<br><br>';

    // Akses Karakter Berdasarkan Indeks (Dimulai dari 0)
    log += 'Karakter Pertama (indeks 0): <strong>' + judulBuku[0] + '</strong><br>';
    log += 'Karakter Terakhir: <strong>' + judulBuku[judulBuku.length - 1] + '</strong>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Simbol \\" digunakan agar tanda petik ganda dapat ditampilkan di dalam string tanda petik ganda tanpa merusak sintaks kode.',
      'Properti .length mengembalikan total jumlah karakter (termasuk spasi).',
      'judulBuku[0] mengakses karakter paling awal pada indeks 0.'
    ],
    quiz: {
      question: 'Bagaimana cara mendapatkan jumlah total karakter dari sebuah variabel string bernama teks?',
      options: [
        'teks.count()',
        'teks.length',
        'teks.size',
        'length(teks)'
      ],
      answer: 1,
      explanation: 'Di JavaScript, properti `.length` digunakan untuk membaca jumlah karakter yang ada di dalam sebuah String.'
    },
    challenge: {
      title: 'Tantangan: Hitung Karakter Nama',
      description: 'Deklarasikan `let nama = "Antigravity";`, lalu simpan panjang karakternya ke `let panjang = nama.length;`.',
      startingCode: `// Tulis kode deklarasi dan hitung length di bawah:\n`,
      solution: `let nama = "Antigravity";\nlet panjang = nama.length;`
    }
  },

  // ── 30. JS STRING TEMPLATES ─────────────────────────────────────────────
  {
    id: 'js-string-templates',
    title: 'JS String Templates',
    chapter: 'JS Strings',
    chapterId: 'js-chap-strings',
    order: 30,
    overview: 'Pelajari fitur ES6 Template Literals (Backticks ``): String Interpolation ${ekspresi}, penulisan string multi-baris tanpa \\n, dan HTML Templating yang rapi.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS STRINGS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 30 / 39</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">✨ ES6 Template Literals (\`\`) & Interpolasi</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Template Literals menggunakan tanda kutip <strong>backtick (\` \`)</strong> alih-alih tanda petik biasa. Fitur ini memungkinkan Anda menyisipkan variabel dan ekspresi langsung dengan sintaks <code>\${ekspresi}</code>.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Template Literals Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Render Kartu HTML Menggunakan Template Literals</h2>
  <div id="container"></div>

  <script>
    const user = {
      nama: 'Rahmat Fadila',
      role: 'Full-Stack Developer',
      skor: 95
    };

    // Template Literal Multi-baris & Interpolasi Variabel
    const htmlCard = \`
      <div style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px; max-width: 320px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
        <h3 style="margin: 0 0 5px 0; color: #0f172a;">\` + user.nama + \`</h3>
        <p style="margin: 0; color: #64748b; font-size: 13px;">\` + user.role + \`</p>
        <div style="margin-top: 12px; padding: 8px; background: #f0fdf4; color: #16a34a; border-radius: 6px; font-weight: bold; font-size: 12px;">
          Status: \` + (user.skor >= 90 ? 'Lulus Cumlaude 🏆' : 'Lulus Standar') + \` (\` + user.skor + \` Poin)
        </div>
      </div>
    \`;

    document.getElementById('container').innerHTML = htmlCard;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Tanda backtick (`) membungkus template HTML multi-baris secara natural tanpa perlu memotong baris.',
      'Sintaks ${user.nama} mengevaluasi variabel secara langsung.',
      'Ekspresi ternary di dalam template literal memungkinkan penyisipan kondisi dinamis secara instan.'
    ],
    quiz: {
      question: 'Karakter manakah yang digunakan untuk membungkus ES6 Template Literals?',
      options: [
        'Tanda kutip ganda (" ")',
        'Tanda kutip tunggal (\' \')',
        'Tanda backtick (` `)',
        'Tanda kurung siku ([ ])'
      ],
      answer: 2,
      explanation: 'Template Literals di ES6 ditulis menggunakan sepasang tanda backtick (` `).'
    },
    challenge: {
      title: 'Tantangan: Buat Template Salam',
      description: 'Gunakan template literal untuk menggabungkan variabel `nama = "Budi"` dan `umur = 20` menjadi string salam.',
      startingCode: 'let nama = "Budi";\nlet umur = 20;\n// Tulis template literal:\nlet salam = `Halo, nama saya ' + '${nama}' + ' dan umur saya ' + '${umur}' + ' tahun.`;',
      solution: 'let nama = "Budi";\nlet umur = 20;\nlet salam = `Halo, nama saya ' + '${nama}' + ' dan umur saya ' + '${umur}' + ' tahun.`;'
    }
  },

  // ── 31. JS STRING METHODS ───────────────────────────────────────────────
  {
    id: 'js-string-methods',
    title: 'JS String Methods',
    chapter: 'JS Strings',
    chapterId: 'js-chap-strings',
    order: 31,
    overview: 'Kuasai method manipulasi teks bawaan JavaScript: slice(), substring(), toUpperCase(), toLowerCase(), trim(), replace(), replaceAll(), dan split().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS STRINGS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 31 / 39</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">✂️ Method Manipulasi String JavaScript</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            JavaScript menyediakan puluhan method bawaan untuk memotong, mengubah huruf, membersihkan spasi, mengganti kata, dan memecah teks menjadi array. Perlu diingat: <strong>String bersifat immutable</strong>, sehingga method string selalu mengembalikan string baru tanpa mengubah string asli.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS String Methods</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Katalog Method String Populer</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    let kalimat = '   Belajar JavaScript Bersama DevGrow LMS   ';
    log += 'Teks Asli: "' + kalimat + '"<br><br>';

    // 1. trim() - Hapus spasi di awal dan akhir
    let bersih = kalimat.trim();
    log += '1. trim() ➔ "' + bersih + '"<br>';

    // 2. toUpperCase() & toLowerCase()
    log += '2. toUpperCase() ➔ "' + bersih.toUpperCase() + '"<br>';
    log += '3. toLowerCase() ➔ "' + bersih.toLowerCase() + '"<br>';

    // 4. slice(start, end) - Potong teks
    log += '4. slice(8, 18) ➔ "' + bersih.slice(8, 18) + '" (Mengambil "JavaScript")<br>';

    // 5. replace() & replaceAll()
    let baru = bersih.replace('DevGrow', 'Antigravity');
    log += '5. replace() ➔ "' + baru + '"<br>';

    // 6. split() - Pecah teks menjadi Array
    let kataArray = bersih.split(' ');
    log += '6. split(" ") (Total ' + kataArray.length + ' kata) ➔ [' + kataArray.join(', ') + ']';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      '.trim() membersihkan whitespace yang tidak diinginkan di awal dan akhir string.',
      '.slice(8, 18) memotong karakter dari indeks ke-8 hingga sebelum indeks ke-18.',
      '.replace("A", "B") mencari kata "A" pertama dan menggantikannya dengan kata "B".',
      '.split(" ") memisahkan kalimat berdasarkan spasi menjadi sebuah Array kata.'
    ],
    quiz: {
      question: 'Method string manakah yang digunakan untuk memecah sebuah kalimat string menjadi Array potongan kata?',
      options: [
        'slice()',
        'split()',
        'join()',
        'concat()'
      ],
      answer: 1,
      explanation: 'Method `.split(separator)` memecah string menjadi array string berdasarkan pemisah (*separator*) yang ditentukan.'
    },
    challenge: {
      title: 'Tantangan: Ubah Teks ke Huruf Besar',
      description: 'Gunakan method `.toUpperCase()` pada variabel `let kota = "jakarta";` dan simpan hasilnya ke `let kapital = kota.toUpperCase();`.',
      startingCode: `let kota = "jakarta";\n// Tulis pemanggilan method toUpperCase di bawah:\n`,
      solution: `let kota = "jakarta";\nlet kapital = kota.toUpperCase();`
    }
  },

  // ── 32. JS STRING SEARCH ────────────────────────────────────────────────
  {
    id: 'js-string-search',
    title: 'JS String Search',
    chapter: 'JS Strings',
    chapterId: 'js-chap-strings',
    order: 32,
    overview: 'Kuasai method pencarian teks: indexOf(), lastIndexOf(), includes(), startsWith(), endsWith(), serta pencarian pola dengan match().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS STRINGS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 32 / 39</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Teknik Pencarian Teks di JavaScript</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Untuk menemukan posisi kata, memeriksa keberadaan substring, atau memvalidasi format teks (seperti awalan URL atau ekstensi file), JavaScript menyediakan serangkaian method pencarian canggih.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS String Search Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Pencarian & Validasi String</h2>
  <div id="output" style="background: #f8fafc; border: 1px solid #cbd5e1; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    let urlWeb = 'https://lms.devgrow.com/course/javascript.pdf';

    // 1. includes() - Memeriksa apakah teks mengandung kata tertentu (true/false)
    log += '1. Mengandung "devgrow"? ➔ <strong>' + urlWeb.includes('devgrow') + '</strong><br>';

    // 2. startsWith() - Memeriksa protokol aman HTTPS
    log += '2. Diawali "https://"? ➔ <strong>' + urlWeb.startsWith('https://') + '</strong> (Aman! 🔒)<br>';

    // 3. endsWith() - Memeriksa ekstensi file
    log += '3. Berformat file ".pdf"? ➔ <strong>' + urlWeb.endsWith('.pdf') + '</strong><br><br>';

    // 4. indexOf() - Posisi indeks awal kata
    let pos = urlWeb.indexOf('course');
    log += '4. Kata "course" ditemukan pada indeks ke: <strong>' + pos + '</strong>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      '.includes("devgrow") mengembalikan boolean true jika kata ditemukan di mana saja di dalam string.',
      '.startsWith("https://") memvalidasi apakah string diawali dengan prefix protokol tertentu.',
      '.endsWith(".pdf") sangat berguna untuk memvalidasi tipe file unduhan pengguna.',
      '.indexOf("course") mengembalikan posisi nomor indeks kemunculan pertama kata (jika tidak ditemukan akan mengembalikan -1).'
    ],
    quiz: {
      question: 'Berapakah nilai yang dikembalikan oleh indexOf("kata") jika kata yang dicari TIDAK DITEMUKAN di dalam string?',
      options: [
        'null',
        '0',
        '-1',
        'false'
      ],
      answer: 2,
      explanation: 'Jika substring yang dicari tidak ditemukan, method `indexOf()` dan `lastIndexOf()` akan mengembalikan nilai `-1`.'
    },
    challenge: {
      title: 'Tantangan: Cek Ekstensi Gambar dengan endsWith',
      description: 'Periksa apakah variabel `let file = "banner.png";` berakhiran ".png" menggunakan method `file.endsWith(".png")`.',
      startingCode: `let file = "banner.png";\n// Periksa ekstensi di bawah:\nlet isPng = false;`,
      solution: `let file = "banner.png";\nlet isPng = file.endsWith(".png");`
    }
  },

  // ── 33. JS STRING REFERENCE ─────────────────────────────────────────────
  {
    id: 'js-string-reference',
    title: 'JS String Reference',
    chapter: 'JS Strings',
    chapterId: 'js-chap-strings',
    order: 33,
    overview: 'Kamus panduan referensi lengkap seluruh method dan properti objek String standar ECMAScript beserta deskripsi fungsinya.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS STRINGS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 33 / 39</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📚 Kamus Referensi Objek String JavaScript</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Gunakan tabel referensi berikut sebagai panduan cepat ketika Anda membutuhkan method pemrosesan teks di aplikasi nyata.
          </p>
        </div>

        <div class="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-xl text-xs">
          <table class="w-full text-left">
            <thead class="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white">
              <tr>
                <th class="p-3">Method / Properti</th>
                <th class="p-3">Deskripsi Singkat</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-800 font-mono text-slate-600 dark:text-slate-300">
              <tr><td class="p-3 text-amber-500 font-bold">length</td><td>Mengembalikan total jumlah karakter.</td></tr>
              <tr><td class="p-3 text-amber-500 font-bold">charAt(i)</td><td>Mengambil karakter pada posisi indeks ke-i.</td></tr>
              <tr><td class="p-3 text-amber-500 font-bold">charCodeAt(i)</td><td>Mengembalikan nilai kode Unicode (UTF-16) karakter.</td></tr>
              <tr><td class="p-3 text-amber-500 font-bold">slice(start, end)</td><td>Mengekstrak bagian string dan mengembalikannya.</td></tr>
              <tr><td class="p-3 text-amber-500 font-bold">replace(a, b)</td><td>Mengganti kecocokan pertama dengan teks baru.</td></tr>
              <tr><td class="p-3 text-amber-500 font-bold">replaceAll(a, b)</td><td>Mengganti seluruh kecocokan dengan teks baru.</td></tr>
              <tr><td class="p-3 text-amber-500 font-bold">toUpperCase()</td><td>Mengonversi seluruh huruf menjadi huruf kapital.</td></tr>
              <tr><td class="p-3 text-amber-500 font-bold">toLowerCase()</td><td>Mengonversi seluruh huruf menjadi huruf kecil.</td></tr>
              <tr><td class="p-3 text-amber-500 font-bold">trim()</td><td>Menghapus whitespace di awal dan akhir string.</td></tr>
              <tr><td class="p-3 text-amber-500 font-bold">padStart(len, pad)</td><td>Menambah karakter di awal hingga mencapai panjang target.</td></tr>
              <tr><td class="p-3 text-amber-500 font-bold">padEnd(len, pad)</td><td>Menambah karakter di akhir hingga mencapai panjang target.</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS String Reference Live Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Praktik Method padStart (Format Nomor Rekening & Invoice)</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // Format nomor urut invoice menjadi 5 digit (misal: 00042)
    let noUrut = '42';
    let invoiceNo = noUrut.padStart(5, '0');
    log += 'Nomor Invoice: <strong>INV-' + invoiceNo + '</strong><br>';

    // Sensor nomor kartu kredit (menampilkan 4 digit terakhir saja)
    let kartu = '1234567890123456';
    let empatDigitAkhir = kartu.slice(-4);
    let kartuDisensor = empatDigitAkhir.padStart(kartu.length, '*');
    log += 'Nomor Kartu Disensor: <strong>' + kartuDisensor + '</strong>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'noUrut.padStart(5, "0") menambahkan karakter "0" di awal hingga string memiliki panjang tepat 5 karakter (menghasilkan "00042").',
      'kartu.slice(-4) mengambil 4 karakter terakhir dari ujung belakang string.',
      'padStart(kartu.length, "*") menutupi digit sebelumnya dengan karakter bintang * untuk keamanan data.'
    ],
    quiz: {
      question: 'Method string manakah yang digunakan untuk menambahkan karakter di awal string hingga mencapai panjang tertentu?',
      options: [
        'padEnd()',
        'padStart()',
        'repeat()',
        'append()'
      ],
      answer: 1,
      explanation: 'Method `padStart(targetLength, padString)` menambahkan karakter di awal string sampai mencapai panjang karakter yang ditentukan.'
    },
    challenge: {
      title: 'Tantangan: Format Nomor Transaksi dengan padStart',
      description: 'Format variabel `let id = "7";` agar menjadi 4 digit dengan awalan angka nol menggunakan `id.padStart(4, "0")`.',
      startingCode: `let id = "7";\n// Format dengan padStart di bawah:\nlet hasil = "";`,
      solution: `let id = "7";\nlet hasil = id.padStart(4, "0");`
    }
  }
];
