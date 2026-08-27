module.exports = [
  // ── 23. JS LOOPS ────────────────────────────────────────────────────────
  {
    id: 'js-loops',
    title: 'JS Loops',
    chapter: 'JS Loops',
    chapterId: 'js-chap-loops',
    order: 23,
    overview: 'Pahami konsep dasar perulangan (loops) di JavaScript: bagaimana loop mengotomatisasi tugas repetitif, meningkatkan efisiensi kode (DRY - Don\'t Repeat Yourself), dan gambaran umum variasi loop yang tersedia.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS LOOPS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 23 / 39</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔄 Konsep Perulangan (Loops) di JavaScript</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Perulangan (Loop) adalah struktur kontrol yang mengeksekusi blok kode yang sama secara berulang-ulang selama kondisi tertentu bernilai benar (true). Loop sangat penting untuk memproses ribuan data dalam hitungan milidetik tanpa menulis kode berulang.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
            <strong class="text-amber-500 text-sm">1. for Loop</strong>
            <p class="text-slate-600 dark:text-slate-300">Digunakan ketika jumlah perulangan sudah diketahui dengan pasti sebelumnya.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
            <strong class="text-amber-500 text-sm">2. while Loop</strong>
            <p class="text-slate-600 dark:text-slate-300">Mengulang kode selama kondisi bernilai true (jumlah iterasi dinamis).</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
            <strong class="text-amber-500 text-sm">3. for...in Loop</strong>
            <p class="text-slate-600 dark:text-slate-300">Mengiterasi setiap nama properti (key) dari sebuah Objek JavaScript.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
            <strong class="text-amber-500 text-sm">4. for...of Loop</strong>
            <p class="text-slate-600 dark:text-slate-300">Mengiterasi nilai elemen langsung dari struktur data Iterable seperti Array atau String.</p>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Loops Overview</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Otomatisasi Tugas dengan Loop</h2>
  <div id="output-box" style="background: #f8fafc; border: 1px solid #cbd5e1; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // Tanpa Loop: Menulis manual berulang-ulang
    // log += 'Antrean ke-1<br>Antrean ke-2<br>Antrean ke-3...';

    // DENGAN LOOP: Cukup 3 baris kode untuk membuat 5 antrean!
    for (let noAntrean = 1; noAntrean <= 5; noAntrean++) {
      log += '🎟️ Memproses Tiket Antrean Nomor: <strong>#' + noAntrean + '</strong><br>';
    }

    document.getElementById('output-box').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'for (let noAntrean = 1; noAntrean <= 5; noAntrean++) mendefinisikan perulangan dari 1 hingga 5.',
      'noAntrean++ menambahkan nilai variabel sebanyak 1 pada setiap akhir putaran iterasi.',
      'Blok di dalam loop dieksekusi 5 kali secara otomatis tanpa duplikasi baris kode.'
    ],
    quiz: {
      question: 'Prinsip rekayasa perangkat lunak apa yang diwujudkan melalui penggunaan perulangan (loop)?',
      options: [
        'DRY (Don\'t Repeat Yourself)',
        'KISS (Keep It Super Simple)',
        'YAGNI (You Aren\'t Gonna Need It)',
        'SOLID Principle'
      ],
      answer: 0,
      explanation: 'Penggunaan loop menerapkan prinsip DRY (Don\'t Repeat Yourself) untuk mencegah penulisan kode berulang yang identik.'
    },
    challenge: {
      title: 'Tantangan: Buat Perulangan 3 Kali',
      description: 'Lengkapi kode perulangan `for (let i = 1; i <= 3; i++)` agar menambahkan teks "Iterasi " + i ke dalam string.',
      startingCode: `let hasil = "";\nfor (let i = 1; i <= 3; i++) {\n  // Tambahkan hasil di sini:\n}`,
      solution: `let hasil = "";\nfor (let i = 1; i <= 3; i++) {\n  hasil += "Iterasi " + i;\n}`
    }
  },

  // ── 24. JS LOOP FOR ─────────────────────────────────────────────────────
  {
    id: 'js-loop-for',
    title: 'JS Loop for',
    chapter: 'JS Loops',
    chapterId: 'js-chap-loops',
    order: 24,
    overview: 'Kuasai 3 variasi for loop: For klasik (inisialisasi, kondisi, increment), for...in (iterasi properti objek), dan for...of (iterasi elemen array).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS LOOPS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 24 / 39</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔁 Eksplorasi Mendalam Loop for, for...in, & for...of</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            JavaScript menyediakan 3 jenis variasi loop <code>for</code> yang disesuaikan dengan kebutuhan tipe data yang diiterasi.
          </p>
        </div>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 font-mono text-xs border border-slate-800 space-y-2">
          <div class="text-amber-400 font-bold">// 1. For Loop Standar:</div>
          <div>for (<span class="text-rose-400">let i = 0</span>; <span class="text-blue-400">i &lt; n</span>; <span class="text-emerald-400">i++</span>) { ... }</div>
          <div class="text-amber-400 font-bold mt-2">// 2. For...in (Objek Key):</div>
          <div>for (<span class="text-rose-400">let key</span> in <span class="text-blue-400">objek</span>) { ... }</div>
          <div class="text-amber-400 font-bold mt-2">// 3. For...of (Array Value):</div>
          <div>for (<span class="text-rose-400">let item</span> of <span class="text-blue-400">array</span>) { ... }</div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS For Loops Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Perbandingan for, for...in, dan for...of</h2>
  <div id="output" style="background: #f8fafc; border: 1px solid #cbd5e1; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. Loop for Klasik
    log += '<strong>1. For Klasik (Perkalian 5):</strong><br>';
    for (let i = 1; i <= 3; i++) {
      log += '5 x ' + i + ' = ' + (5 * i) + '<br>';
    }

    // 2. Loop for...in (Iterasi Objek)
    log += '<br><strong>2. For...in (Properti Objek Smartphone):</strong><br>';
    const spekHp = { merk: 'Samsung', ram: '8GB', baterai: '5000mAh' };
    for (let properti in spekHp) {
      log += properti + ' ➔ ' + spekHp[properti] + '<br>';
    }

    // 3. Loop for...of (Iterasi Array Langsung)
    log += '<br><strong>3. For...of (Daftar Bahasa Pemrograman):</strong><br>';
    const bahasa = ['JavaScript', 'TypeScript', 'Python'];
    for (let namaBahasa of bahasa) {
      log += '🚀 Bahasa: ' + namaBahasa + '<br>';
    }

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'for klasik menggunakan counter i yang bertambah 1 setiap putaran.',
      'for...in mengambil nama kunci/key (merk, ram, baterai) dari objek spekHp.',
      'for...of langsung mengekstrak isi nilai elemen dari array bahasa tanpa memerlukan indeks array.'
    ],
    quiz: {
      question: 'Manakah jenis loop yang paling tepat digunakan untuk mengiterasi nilai elemen sebuah Array secara langsung?',
      options: [
        'for...in',
        'for...of',
        'switch...case',
        'while (true)'
      ],
      answer: 1,
      explanation: 'Loop `for...of` khusus dirancang untuk mengiterasi langsung nilai (*values*) dari objek yang Iterable seperti Array, Set, Map, dan String.'
    },
    challenge: {
      title: 'Tantangan: Iterasi Array dengan for...of',
      description: 'Gunakan `for...of` untuk menjumlahkan semua angka di dalam array `const angka = [10, 20, 30];` ke dalam variabel `let total = 0;`.',
      startingCode: `const angka = [10, 20, 30];\nlet total = 0;\n// Tulis for...of di bawah:\n`,
      solution: `const angka = [10, 20, 30];\nlet total = 0;\nfor (let n of angka) {\n  total += n;\n}`
    }
  },

  // ── 25. JS LOOP WHILE ───────────────────────────────────────────────────
  {
    id: 'js-loop-while',
    title: 'JS Loop while',
    chapter: 'JS Loops',
    chapterId: 'js-chap-loops',
    order: 25,
    overview: 'Kuasai perulangan while statement dan do...while statement: evaluasi kondisi pra-eksekusi vs pasca-eksekusi, serta cara mencegah jebakan Infinite Loop.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS LOOPS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 25 / 39</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⏳ Perulangan while dan do...while</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Loop <code>while</code> mengevaluasi kondisi <strong>sebelum</strong> mengeksekusi blok kode. Sebaliknya, <code>do...while</code> mengeksekusi blok kode <strong>minimal satu kali terlebih dahulu</strong> sebelum memeriksa kondisi.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
            <strong class="text-amber-500 text-sm">while Loop (Cek di Awal)</strong>
            <p class="text-slate-600 dark:text-slate-300">Jika kondisi bernilai false di awal, kode di dalamnya <strong>tidak akan pernah dijalankan</strong> sama sekali.</p>
          </div>
          <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
            <strong class="text-amber-500 text-sm">do...while Loop (Cek di Akhir)</strong>
            <p class="text-slate-600 dark:text-slate-300">Blok kode <strong>pasti dieksekusi 1 kali</strong>, meskipun kondisinya sudah bernilai false sejak awal.</p>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS While vs Do While</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Simulasi Hitung Mundur (Countdown)</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. While Loop: Hitung Mundur Peluncuran Roket
    let hitungMundur = 3;
    log += '<strong>Mulai Countdown Roket (while):</strong><br>';
    while (hitungMundur > 0) {
      log += '🚀 T-minus: ' + hitungMundur + ' detik...<br>';
      hitungMundur--; // Wajib ada decrement agar tidak terjadi Infinite Loop!
    }
    log += '🔥 ROKET MELUNCUR KE LUAR ANGKASA! 🔥<br><br>';

    // 2. Do...while Loop: Menguji kondisi yang bernilai false di awal
    let nilaiAwal = 100;
    log += '<strong>Uji do...while saat kondisi langsung FALSE:</strong><br>';
    do {
      log += 'Blok ini tetap dieksekusi 1 kali! Nilai awal = ' + nilaiAwal + '<br>';
    } while (nilaiAwal < 50); // Kondisi false karena 100 tidak kurang dari 50

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'while (hitungMundur > 0) terus berputar selama variabel lebih besar dari 0.',
      'hitungMundur-- sangat krusial; jika lupa ditulis, loop akan berjalan selamanya (Infinite Loop) dan membekukan browser.',
      'do...while tetap mencetak log 1 kali meskipun kondisi 100 < 50 salah.'
    ],
    quiz: {
      question: 'Berapa kali minimal blok kode di dalam do...while dieksekusi jika kondisinya bernilai false sejak awal?',
      options: [
        '0 kali (tidak sama sekali)',
        '1 kali',
        '2 kali',
        'Tak terhingga kali'
      ],
      answer: 1,
      explanation: 'Loop `do...while` selalu mengeksekusi blok kodenya minimal 1 kali sebelum memeriksa kondisi pada klausa `while (kondisi)` di akhir.'
    },
    challenge: {
      title: 'Tantangan: While Loop Perkalian 2',
      description: 'Gunakan while loop untuk mencetak angka yang berlipat ganda: `let x = 1;` selama `x <= 8`, lakukan `x = x * 2;`.',
      startingCode: `let x = 1;\nwhile (x <= 8) {\n  // Perbarui nilai x di sini:\n}`,
      solution: `let x = 1;\nwhile (x <= 8) {\n  x = x * 2;\n}`
    }
  },

  // ── 26. JS BREAK ────────────────────────────────────────────────────────
  {
    id: 'js-break',
    title: 'JS Break',
    chapter: 'JS Loops',
    chapterId: 'js-chap-loops',
    order: 26,
    overview: 'Pahami kata kunci break: mekanisme menghentikan dan melompat keluar dari perulangan secara instan saat kondisi pencarian atau batas tercapai.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS LOOPS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 26 / 39</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛑 Menghentikan Loop dengan Kata Kunci break</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Kata kunci <code>break</code> digunakan untuk "melompat keluar" dan menghentikan seluruh proses perulangan secara permanen saat sebuah kondisi khusus terpenuhi (misalnya saat data yang dicari sudah ditemukan).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Break Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Pencarian Data Pengguna (Break Saat Ditemukan)</h2>
  <div id="output" style="background: #f8fafc; border: 1px solid #cbd5e1; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const daftarNama = ['Budi', 'Siti', 'Rahmat', 'Dewi', 'Andi'];
    const targetCari = 'Rahmat';

    for (let i = 0; i < daftarNama.length; i++) {
      log += 'Memeriksa indeks ' + i + ': ' + daftarNama[i] + '...<br>';
      
      if (daftarNama[i] === targetCari) {
        log += '<strong style="color: green;">🎯 Ditemukan! ' + targetCari + ' berada di antrean ke-' + (i + 1) + '. Loop dihentikan dengan break!</strong><br>';
        break; // Hentikan pencarian, tidak perlu periksa nama setelahnya (efisien!)
      }
    }

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Loop memeriksa nama satu per satu dari indeks 0.',
      'Saat daftarNama[i] bernilai "Rahmat", blok if terpenuhi dan memanggil perintah break.',
      'Nama "Dewi" dan "Andi" tidak lagi diperiksa karena loop telah selesai seketika, menghemat memori dan waktu komputasi.'
    ],
    quiz: {
      question: 'Apa fungsi utama kata kunci break di dalam sebuah loop for atau while?',
      options: [
        'Menghentikan seluruh perulangan dan keluar dari blok loop',
        'Melewati satu iterasi saja lalu lanjut ke iterasi berikutnya',
        'Mengulang loop dari awal (indeks 0)',
        'Menghapus isi array'
      ],
      answer: 0,
      explanation: 'Kata kunci `break` langsung menghentikan seluruh eksekusi perulangan dan memindahkan kontrol program ke baris kode setelah blok loop tersebut.'
    },
    challenge: {
      title: 'Tantangan: Hentikan Loop Saat Angka 5',
      description: 'Lengkapi perulangan for dari 1 sampai 10. Jika `i === 5`, panggil `break;` untuk menghentikan loop.',
      startingCode: `for (let i = 1; i <= 10; i++) {\n  // Tambahkan kondisi break di sini:\n}`,
      solution: `for (let i = 1; i <= 10; i++) {\n  if (i === 5) break;\n}`
    }
  },

  // ── 27. JS CONTINUE ─────────────────────────────────────────────────────
  {
    id: 'js-continue',
    title: 'JS Continue',
    chapter: 'JS Loops',
    chapterId: 'js-chap-loops',
    order: 27,
    overview: 'Pahami kata kunci continue: cara melompati (skip) satu langkah iterasi saat ini dan langsung berpindah ke iterasi putaran berikutnya.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS LOOPS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 27 / 39</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⏭️ Melewati Iterasi dengan continue</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Berbeda dengan <code>break</code> yang mematikan loop seluruhnya, <code>continue</code> hanya <strong>melewati sisa kode pada putaran iterasi saat ini</strong> dan langsung melompat ke iterasi putaran berikutnya.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Continue Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Filter Bilangan Ganjil (Skip Angka Genap dengan continue)</h2>
  <div id="output" style="background: #f8fafc; border: 1px solid #cbd5e1; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    for (let angka = 1; angka <= 8; angka++) {
      // Jika angka genap, lewati iterasi ini!
      if (angka % 2 === 0) {
        continue;
      }

      log += '👉 Angka Ganjil: <strong>' + angka + '</strong><br>';
    }

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'angka % 2 === 0 memeriksa apakah angka merupakan bilangan genap.',
      'Saat angka bernilai 2, 4, 6, 8, perintah continue langsung mengabaikan kode di bawahnya dan melompat ke putaran angka berikutnya.',
      'Hanya angka ganjil (1, 3, 5, 7) yang berhasil dicetak ke layar.'
    ],
    quiz: {
      question: 'Apa perbedaan utama antara perintah break dan continue?',
      options: [
        'break menghentikan seluruh loop, sedangkan continue hanya melompati iterasi saat ini',
        'break hanya bisa digunakan di switch, continue hanya bisa di for',
        'continue mematikan program, break melanjutkan program',
        'Tidak ada perbedaan, keduanya identik'
      ],
      answer: 0,
      explanation: '`break` menghentikan dan keluar dari seluruh perulangan, sedangkan `continue` hanya melewati sisa statement pada putaran aktif lalu lanjut ke iterasi berikutnya.'
    },
    challenge: {
      title: 'Tantangan: Skip Angka 3',
      description: 'Lengkapi loop dari 1 sampai 5. Jika `i === 3`, jalankan `continue;` agar angka 3 tidak dicetak.',
      startingCode: `let hasil = "";\nfor (let i = 1; i <= 5; i++) {\n  // Tulis kondisi continue di sini:\n  hasil += i;\n}`,
      solution: `let hasil = "";\nfor (let i = 1; i <= 5; i++) {\n  if (i === 3) continue;\n  hasil += i;\n}`
    }
  },

  // ── 28. JS CONTROL FLOW ─────────────────────────────────────────────────
  {
    id: 'js-control-flow',
    title: 'JS Control Flow',
    chapter: 'JS Loops',
    chapterId: 'js-chap-loops',
    order: 28,
    overview: 'Pahami integrasi arsitektur Control Flow: menggabungkan loops, percabangan kondisi, early return, serta penanganan eksepsi error menggunakan try...catch...finally.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS LOOPS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 28 / 39</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎛️ Arsitektur Alur Kontrol Program (Control Flow)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Control Flow adalah urutan di mana instruksi, statement, atau panggilan fungsi dieksekusi. Di aplikasi produksi nyata, kontrol alur mengombinasikan <strong>Kondisi</strong>, <strong>Perulangan</strong>, dan <strong>Error Handling (try...catch)</strong> agar aplikasi tangguh dan tidak mudah crash.
          </p>
        </div>

        <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5 text-xs">
          <strong class="text-amber-500 text-sm">Blok try...catch...finally:</strong>
          <p class="text-slate-600 dark:text-slate-300">
            <code>try</code> mencoba menjalankan kode berisiko. Jika terjadi error, alur kontrol langsung berpindah ke blok <code>catch(error)</code> tanpa mematikan seluruh aplikasi. Blok <code>finally</code> selalu dijalankan di akhir.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Control Flow Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Simulasi Validasi Batch Data & Error Handling</h2>
  <div id="output" style="background: #0f172a; color: #e2e8f0; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // Data transaksi campuran (ada data valid dan data korup/rusak)
    const transaksiList = [
      { id: 101, nominal: 50000 },
      { id: 102, nominal: -10000 }, // Error: Nominal negatif tidak valid
      { id: 103, nominal: 125000 }
    ];

    for (let t of transaksiList) {
      try {
        if (t.nominal <= 0) {
          throw new Error('Nominal transaksi ID #' + t.id + ' tidak valid (kurang dari sama dengan 0)!');
        }
        log += '✅ Transaksi ID #' + t.id + ': Rp ' + t.nominal.toLocaleString('id-ID') + ' Sukses diproses.<br>';
      } catch (err) {
        log += '<span style="color:#f87171">❌ Catch Error: ' + err.message + '</span><br>';
      } finally {
        log += '<span style="color:#94a3b8">  ➔ Selesai audit transaksi #' + t.id + '</span><br><br>';
      }
    }

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'for...of melakukan perulangan pada setiap objek transaksi.',
      'Statement throw new Error() melempar pesan kesalahan jika nominal transaksi bernilai negatif.',
      'Blok catch menangkap error tersebut dengan aman sehingga perulangan transaksi berikutnya tetap berjalan lancar.',
      'Blok finally selalu dijalankan di setiap iterasi untuk audit.'
    ],
    quiz: {
      question: 'Blok manakah dalam struktur error handling yang dijamin SELALU dijalankan terlepas dari apakah terjadi error atau tidak?',
      options: [
        'try',
        'catch',
        'finally',
        'throw'
      ],
      answer: 2,
      explanation: 'Blok `finally` selalu dieksekusi di akhir setelah blok `try` atau `catch` selesai dijalankan.'
    },
    challenge: {
      title: 'Tantangan: Tangkap Error dengan try...catch',
      description: 'Bungkus kode `JSON.parse("invalid json")` di dalam blok `try...catch` dan simpan pesan error ke variabel `let errPesan = err.message;`.',
      startingCode: `try {\n  JSON.parse("invalid json");\n} catch (err) {\n  // Tangkap error di sini:\n}`,
      solution: `try {\n  JSON.parse("invalid json");\n} catch (err) {\n  let errPesan = err.message;\n}`
    }
  }
];
