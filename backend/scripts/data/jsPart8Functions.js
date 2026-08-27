module.exports = [
  // ── 40. FUNCTION PATH ───────────────────────────────────────────────────
  {
    id: 'function-path',
    title: 'Function Path',
    chapter: 'JS Functions',
    chapterId: 'js-chap-functions',
    order: 40,
    overview: 'Peta jalur penguasaan Fungsi di JavaScript: dari deklarasi dasar, scoping, closures, pure functions, hingga higher-order functions dalam paradigma pemrograman modern.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS FUNCTIONS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 40 / 56</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🗺️ Peta Jalur Penguasaan JavaScript Functions</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Fungsi adalah "warga negara kelas satu" (*First-Class Citizens*) di JavaScript. Artinya fungsi dapat disimpan di dalam variabel, dikirim sebagai argumen ke fungsi lain (Callback), dan dikembalikan sebagai nilai return.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
            <strong class="text-amber-500 text-sm">1. Dasar (Fundamentals)</strong>
            <p class="text-slate-600 dark:text-slate-400">Deklarasi kata kunci <code>function</code>, parameter, argumen, dan kata kunci <code>return</code>.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
            <strong class="text-amber-500 text-sm">2. Menengah (Intermediate)</strong>
            <p class="text-slate-600 dark:text-slate-400">Function Expressions, Arrow Functions <code>() => {}</code>, Rest Parameters, dan Default Parameters.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
            <strong class="text-amber-500 text-sm">3. Lanjutan (Advanced)</strong>
            <p class="text-slate-600 dark:text-slate-400">Closures, Higher-Order Functions (map/filter/reduce), Currying, dan Asynchronous Functions.</p>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Function Path Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Jalur Belajar Fungsi JavaScript</h2>
  <div id="output" style="background: #f8fafc; border: 1px solid #cbd5e1; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // Tingkat 1: Fungsi Deklarasi Standar
    function hitungDiskon(harga, persen) {
      return harga * (persen / 100);
    }

    // Tingkat 2: Arrow Function ES6
    const hitungTotal = (harga, diskon) => harga - diskon;

    let hargaBarang = 500000;
    let diskonNominal = hitungDiskon(hargaBarang, 20); // Potongan 20%
    let bayar = hitungTotal(hargaBarang, diskonNominal);

    log += 'Harga Normal: Rp ' + hargaBarang.toLocaleString('id-ID') + '<br>';
    log += 'Diskon 20%: Rp ' + diskonNominal.toLocaleString('id-ID') + '<br>';
    log += '<strong>Total Bayar Akhir: Rp ' + bayar.toLocaleString('id-ID') + '</strong>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'hitungDiskon() dideklarasikan menggunakan function declaration klasik.',
      'hitungTotal() adalah arrow function ringkas yang langsung mengembalikan nilai selisih.',
      'Kedua fungsi bekerja sama secara modular dan dapat digunakan berkali-kali untuk transaksi berbeda.'
    ],
    quiz: {
      question: 'Apa arti dari konsep bahwa fungsi di JavaScript adalah "First-Class Citizen"?',
      options: [
        'Fungsi harus selalu ditaruh di baris pertama kode',
        'Fungsi dapat diperlakukan layaknya nilai data (disimpan di variabel, di-passing ke fungsi lain, atau di-return)',
        'Fungsi hanya bisa dibuat oleh user dengan role Admin',
        'Fungsi dieksekusi sebelum file HTML dimuat'
      ],
      answer: 1,
      explanation: 'First-Class Citizen berarti fungsi di JavaScript memiliki kedudukan setara dengan tipe data lainnya: bisa disimpan di variabel, dikirim sebagai argumen (callback), atau dikembalikan dari fungsi lain.'
    },
    challenge: {
      title: 'Tantangan: Buat Fungsi Perkalian',
      description: 'Deklarasikan fungsi `kaliDua(angka)` yang mengembalikan hasil `angka * 2`.',
      startingCode: `// Buat fungsi kaliDua di bawah:\n`,
      solution: `function kaliDua(angka) {\n  return angka * 2;\n}`
    }
  },

  // ── 41. FUNCTION INTRO ──────────────────────────────────────────────────
  {
    id: 'function-intro',
    title: 'Function Intro',
    chapter: 'JS Functions',
    chapterId: 'js-chap-functions',
    order: 41,
    overview: 'Pahami anatomi dasar fungsi: deklarasi function, penamaan fungsi yang deskriptif, tanda kurung parameter (), dan kurung kurawal block {}.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS FUNCTIONS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 41 / 56</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧩 Anatomi Dasar Deklarasi Fungsi</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Fungsi adalah sekumpulan statement yang dirancang untuk melakukan tugas tertentu. Fungsi hanya akan dieksekusi saat ada kode lain yang memanggil (*invoke / call*) fungsi tersebut.
          </p>
        </div>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 font-mono text-xs border border-slate-800 space-y-2">
          <div class="text-amber-400 font-bold">// Struktur Anatomi Function:</div>
          <div>function <span class="text-rose-400">namaFungsi</span>(<span class="text-blue-400">parameter1, parameter2</span>) {</div>
          <div class="pl-4 text-emerald-400">// Statement kode instruksi...</div>
          <div class="pl-4 text-emerald-400">return hasil;</div>
          <div>}</div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Function Intro</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Kalkulator Konversi Suhu Celsius ke Fahrenheit</h2>
  <div id="output" style="background: #f8fafc; border: 1px solid #cbd5e1; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    // Deklarasi fungsi konversi suhu
    function celsiusKeFahrenheit(celsius) {
      let fahrenheit = (celsius * 9/5) + 32;
      return fahrenheit;
    }

    let suhuJakarta = 30; // 30 Derajat Celsius
    let hasilKonversi = celsiusKeFahrenheit(suhuJakarta);

    document.getElementById('output').innerHTML = 
      suhuJakarta + '°C di Jakarta setara dengan <strong>' + hasilKonversi + '°F</strong>';
  </script>

</body>
</html>`,
    codeExplanation: [
      'function celsiusKeFahrenheit(celsius) mendeklarasikan blueprint perhitungan suhu.',
      'celsius adalah parameter input yang menerima nilai 30 saat fungsi dipanggil.',
      'return fahrenheit mengirimkan kembali hasil perhitungan (86) ke pemanggil fungsi.'
    ],
    quiz: {
      question: 'Kata kunci apa yang digunakan untuk mendeklarasikan fungsi standar di JavaScript?',
      options: [
        'def',
        'func',
        'function',
        'method'
      ],
      answer: 2,
      explanation: 'JavaScript menggunakan kata kunci `function` untuk mendeklarasikan sebuah fungsi standar.'
    },
    challenge: {
      title: 'Tantangan: Buat Fungsi Ucapan Salam',
      description: 'Buat fungsi `sapaPengguna(nama)` yang mengembalikan string `"Halo " + nama + "!"`.',
      startingCode: `function sapaPengguna(nama) {\n  // Kembalikan ucapan salam di sini:\n}`,
      solution: `function sapaPengguna(nama) {\n  return "Halo " + nama + "!";\n}`
    }
  },

  // ── 42. FUNCTION INVOCATION ─────────────────────────────────────────────
  {
    id: 'function-invocation',
    title: 'Function Invocation',
    chapter: 'JS Functions',
    chapterId: 'js-chap-functions',
    order: 42,
    overview: 'Pelajari 4 cara memanggil (invoke) fungsi di JavaScript: pemanggilan langsung, pemanggilan via Event Browser, method object invocation, dan IIFE (Immediately Invoked Function Expression).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS FUNCTIONS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 42 / 56</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📞 4 Mekanisme Pemanggilan Fungsi (Invocation)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Kode di dalam fungsi tidak akan dieksekusi sebelum dipanggil. Cara fungsi dipanggil menentukan nilai dari kata kunci <code>this</code> dan alur eksekusinya.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
            <strong class="text-amber-500 text-sm">1. Direct Call</strong>
            <p class="text-slate-600 dark:text-slate-400"><code>namaFungsi()</code> - Pemanggilan langsung dalam alur kode.</p>
          </div>
          <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
            <strong class="text-amber-500 text-sm">2. Event Invocation</strong>
            <p class="text-slate-600 dark:text-slate-400"><code>button.onclick = namaFungsi</code> - Dipanggil saat user berinteraksi.</p>
          </div>
          <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
            <strong class="text-amber-500 text-sm">3. Method Invocation</strong>
            <p class="text-slate-600 dark:text-slate-400"><code>user.cetakProfil()</code> - Dipanggil sebagai properti objek.</p>
          </div>
          <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
            <strong class="text-amber-500 text-sm">4. IIFE (Self-Invoking)</strong>
            <p class="text-slate-600 dark:text-slate-400"><code>(function(){ ... })()</code> - Fungsi langsung berjalan otomatis seketika.</p>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Function Invocation</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Demonstrasi Pemanggilan Fungsi & IIFE</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. Direct Function
    function getVersiAplikasi() {
      return 'v3.2.0-Production';
    }
    log += '1. Direct Invocation: ' + getVersiAplikasi() + '<br><br>';

    // 2. IIFE (Immediately Invoked Function Expression)
    (function() {
      let initTime = new Date().toLocaleTimeString();
      log += '2. IIFE Auto-run: Modul berhasil diinisialisasi otomatis pada ' + initTime + '<br><br>';
    })();

    // 3. Method Invocation
    const kalkulator = {
      nilai: 50,
      tambah: function(n) {
        return this.nilai + n;
      }
    };
    log += '3. Method Invocation: kalkulator.tambah(25) ➔ <strong>' + kalkulator.tambah(25) + '</strong>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'getVersiAplikasi() dipanggil dengan menambahkan tanda kurung () di akhir nama fungsi.',
      '(function(){ ... })() adalah IIFE yang langsung mengeksekusi kodenya sendiri begitu browser membaca script tanpa perlu dipanggil terpisah.',
      'kalkulator.tambah(25) adalah pemanggilan method di mana kata kunci this merujuk pada objek kalkulator.'
    ],
    quiz: {
      question: 'Apa nama pola fungsi di JavaScript yang langsung dieksekusi secara otomatis begitu selesai didefinisikan?',
      options: [
        'Callback Function',
        'IIFE (Immediately Invoked Function Expression)',
        'Arrow Function',
        'Recursive Function'
      ],
      answer: 1,
      explanation: 'IIFE (Immediately Invoked Function Expression) adalah pola fungsi anonim yang dibungkus kurung dan langsung dieksekusi seketika dengan penambahan tanda kurung () di ujungnya.'
    },
    challenge: {
      title: 'Tantangan: Buat IIFE Sederhana',
      description: 'Lengkapi struktur IIFE `(function() { let aktif = true; return aktif; })()` agar langsung dijalankan.',
      startingCode: `// Tulis IIFE di bawah:\n(function() {\n  let siap = true;\n})();`,
      solution: `(function() {\n  let siap = true;\n})();`
    }
  },

  // ── 43. FUNCTION PARAMETERS ─────────────────────────────────────────────
  {
    id: 'function-parameters',
    title: 'Function Parameters',
    chapter: 'JS Functions',
    chapterId: 'js-chap-functions',
    order: 43,
    overview: 'Kuasai ES6 Default Parameters, penanganan argumen undefined, serta perbedaan mendasar Pass-by-Value (tipe primitif) vs Pass-by-Reference (objek/array).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS FUNCTIONS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 43 / 56</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚙️ Parameter Default & Mekanisme Pengiriman Data</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Parameter adalah variabel yang terdaftar di definisi fungsi. ES6 memperkenalkan <strong>Default Parameters</strong> yang otomatis digunakan jika pemanggil tidak mengirimkan argumen (atau mengirim <code>undefined</code>).
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
            <strong class="text-amber-500 text-sm">Pass-by-Value (Primitif)</strong>
            <p class="text-slate-600 dark:text-slate-400">Angka dan string diduplikasi nilainya; perubahan di dalam fungsi <strong>tidak merusak</strong> variabel asli di luar.</p>
          </div>
          <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
            <strong class="text-amber-500 text-sm">Pass-by-Reference (Objek/Array)</strong>
            <p class="text-slate-600 dark:text-slate-400">Objek/Array berbagi alamat memori yang sama; mutasi properti di dalam fungsi <strong>akan mengubah</strong> objek asli di luar.</p>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Parameters Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Praktik Parameter Default & Pass-by-Reference</h2>
  <div id="output" style="background: #f8fafc; border: 1px solid #cbd5e1; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. Parameter Default (role = 'Student', diskon = 0)
    function buatAkun(nama, role = 'Student', diskon = 0) {
      return 'User: <strong>' + nama + '</strong> | Role: ' + role + ' | Diskon: ' + diskon + '%';
    }

    log += buatAkun('Rahmat') + ' (Menggunakan role default)<br>';
    log += buatAkun('Fadila', 'Instructor', 15) + '<br><br>';

    // 2. Pass by Reference Demo
    function naikkanPoin(userObj) {
      userObj.poin += 50; // Memodifikasi properti objek asli
    }

    const pemain = { nama: 'Alex', poin: 100 };
    log += 'Poin Awal Alex: ' + pemain.poin + '<br>';
    naikkanPoin(pemain);
    log += 'Poin Alex Setelah Fungsi Dipanggil: <strong>' + pemain.poin + '</strong> (Ikut bertambah karena Pass-by-Reference!)';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'role = "Student" memberikan nilai default otomatis jika pemanggil tidak menyertakan argumen kedua.',
      'Objek pemain dikirim ke fungsi naikkanPoin melalui referensi memori, sehingga perubahan properti .poin di dalam fungsi berdampak langsung ke objek di luar.'
    ],
    quiz: {
      question: 'Kapan nilai parameter default di ES6 akan otomatis diaktifkan oleh fungsi?',
      options: [
        'Ketika argumen yang dikirim adalah null',
        'Ketika argumen yang dikirim adalah 0 atau string kosong',
        'Ketika tidak ada argumen yang dikirim atau nilainya bernilai undefined',
        'Hanya ketika terjadi error'
      ],
      answer: 2,
      explanation: 'Nilai Default Parameter hanya akan aktif jika pemanggil tidak memasukkan argumen untuk parameter tersebut atau mengirimkan nilai `undefined` secara eksplisit.'
    },
    challenge: {
      title: 'Tantangan: Parameter Default Pajak',
      description: 'Buat fungsi `hitungPPN(harga, tarif = 0.11)` yang mengembalikan nilai `harga * tarif`.',
      startingCode: `function hitungPPN(harga, tarif = 0.11) {\n  // Kembalikan kalkulasi di bawah:\n}`,
      solution: `function hitungPPN(harga, tarif = 0.11) {\n  return harga * tarif;\n}`
    }
  },

  // ── 44. FUNCTION RETURNS ────────────────────────────────────────────────
  {
    id: 'function-returns',
    title: 'Function Returns',
    chapter: 'JS Functions',
    chapterId: 'js-chap-functions',
    order: 44,
    overview: 'Pahami kata kunci return: mengembalikan data hasil kalkulasi, menghentikan eksekusi fungsi seketika, dan implementasi pola Guard Clauses (Early Return).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS FUNCTIONS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 44 / 56</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">↩️ Kata Kunci return & Pola Early Return</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Statement <code>return</code> menghentikan eksekusi fungsi dan menentukan nilai apa yang dikembalikan kepada pemanggil fungsi. Jika fungsi tidak memiliki kata kunci <code>return</code>, fungsi tersebut secara otomatis mengembalikan nilai <code>undefined</code>.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Function Returns</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Pola Clean Code: Early Return (Guard Clauses)</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // Pola Guard Clauses: Menghindari nested if bercabang yang berantakan
    function prosesPenarikanDana(saldo, jumlahTarik) {
      if (jumlahTarik <= 0) {
        return '❌ Nominal penarikan harus lebih dari 0.'; // Early Return 1
      }
      if (jumlahTarik > saldo) {
        return '❌ Saldo tidak mencukupi untuk penarikan ini.'; // Early Return 2
      }

      // Logika utama hanya dieksekusi jika semua validasi lolos
      let sisaSaldo = saldo - jumlahTarik;
      return '✅ Penarikan Rp ' + jumlahTarik.toLocaleString('id-ID') + ' Berhasil! Sisa Saldo: Rp ' + sisaSaldo.toLocaleString('id-ID');
    }

    let saldoNasabah = 1000000;
    log += prosesPenarikanDana(saldoNasabah, -50000) + '<br>';
    log += prosesPenarikanDana(saldoNasabah, 1500000) + '<br>';
    log += prosesPenarikanDana(saldoNasabah, 300000);

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Pola Guard Clause memeriksa kondisi error di awal fungsi dan langsung mengembalikan pesan error (Early Return).',
      'Ini mencegah kode utama terperangkap di dalam sarang if-else bertingkat (Arrow Anti-Pattern).',
      'Baris sisaSaldo = saldo - jumlahTarik hanya tercapai jika semua pemeriksaan kondisi awal lulus.'
    ],
    quiz: {
      question: 'Berapakah nilai kembalian dari sebuah fungsi JavaScript yang tidak menyertakan statement return?',
      options: [
        'null',
        '0',
        'undefined',
        'false'
      ],
      answer: 2,
      explanation: 'Secara default, fungsi yang tidak memiliki perintah `return` eksplisit akan mengembalikan nilai `undefined`.'
    },
    challenge: {
      title: 'Tantangan: Return Perkalian',
      description: 'Lengkapi fungsi `luasSegitiga(alas, tinggi)` agar mengembalikan hasil `0.5 * alas * tinggi`.',
      startingCode: `function luasSegitiga(alas, tinggi) {\n  // Return luas di bawah:\n}`,
      solution: `function luasSegitiga(alas, tinggi) {\n  return 0.5 * alas * tinggi;\n}`
    }
  },

  // ── 45. FUNCTION ARGUMENTS ──────────────────────────────────────────────
  {
    id: 'function-arguments',
    title: 'Function Arguments',
    chapter: 'JS Functions',
    chapterId: 'js-chap-functions',
    order: 45,
    overview: 'Kuasai pengelolaan argumen dinamis: objek arguments bawaan vs Rest Parameters modern (...args) yang mengubah argumen tak terbatas menjadi Array sungguhan.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS FUNCTIONS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 45 / 56</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📦 Objek arguments & Rest Parameter (...args)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            JavaScript sangat fleksibel: Anda bisa mengirimkan jumlah argumen berapa pun saat memanggil fungsi. Di era modern, sintaks <strong>Rest Parameter (<code>...args</code>)</strong> adalah standar resmi untuk mengumpulkan seluruh argumen ke dalam sebuah Array asli.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Function Arguments Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Kalkulasi Penjumlahan Dinamis dengan Rest Parameter</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // Rest Parameter (...angkaList) mengumpulkan semua argumen menjadi Array
    function jumlahkanSemua(...angkaList) {
      let total = 0;
      for (let n of angkaList) {
        total += n;
      }
      return total;
    }

    log += 'jumlahkanSemua(10, 20) ➔ ' + jumlahkanSemua(10, 20) + '<br>';
    log += 'jumlahkanSemua(5, 10, 15, 20, 25) ➔ ' + jumlahkanSemua(5, 10, 15, 20, 25) + '<br>';
    log += 'jumlahkanSemua(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) ➔ <strong>' + jumlahkanSemua(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) + '</strong>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      '...angkaList mengumpulkan seluruh parameter yang dikirim berapapun jumlahnya menjadi satu Array angkaList.',
      'Kita dapat menggunakan method array standar atau for...of secara langsung pada angkaList.',
      'Sintaks ini jauh lebih unggul dan bersih daripada objek legacy arguments.'
    ],
    quiz: {
      question: 'Sintaks apakah yang digunakan di ES6 untuk menerima jumlah argumen yang fleksibel dan tidak terbatas sebagai Array asli?',
      options: [
        'arguments[]',
        'Rest Parameter (...args)',
        'Spread Operator saja',
        'params.all()'
      ],
      answer: 1,
      explanation: 'Sintaks Rest Parameter `...namaVariabel` di dalam daftar parameter fungsi akan membungkus seluruh argumen tambahan menjadi Array resmi.'
    },
    challenge: {
      title: 'Tantangan: Buat Rest Parameter Penggabung Nama',
      description: 'Buat fungsi `gabungKata(...kata)` yang mengembalikan `kata.join(" ")`.',
      startingCode: `function gabungKata(...kata) {\n  // Gabungkan kata di bawah:\n}`,
      solution: `function gabungKata(...kata) {\n  return kata.join(" ");\n}`
    }
  },

  // ── 46. FUNCTION EXPRESSIONS ────────────────────────────────────────────
  {
    id: 'function-expressions',
    title: 'Function Expressions',
    chapter: 'JS Functions',
    chapterId: 'js-chap-functions',
    order: 46,
    overview: 'Pahami Function Expression: mendefinisikan fungsi anonim di dalam variabel, serta perbedaan krusial perilaku Hoisting dibandingkan Function Declaration.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS FUNCTIONS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 46 / 56</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎭 Function Expressions & Perilaku Hoisting</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Sebuah fungsi dapat didefinisikan sebagai ekspresi dan disimpan langsung di dalam variabel. 
            <strong>Perbedaan vital:</strong> Function Declaration di-<em>hoist</em> (bisa dipanggil sebelum baris deklarasinya), sedangkan Function Expression <strong>TIDAK di-hoist</strong> dan hanya bisa dipanggil setelah baris definisinya dieksekusi.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Function Expressions</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Perbandingan Function Declaration vs Expression</h2>
  <div id="output" style="background: #f8fafc; border: 1px solid #cbd5e1; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. Function Declaration (Bisa dipanggil di atas sebelum dibuat karena di-hoist!)
    log += 'Panggil sebelum deklarasi: ' + sapaHalo('Budi') + '<br><br>';
    function sapaHalo(nama) {
      return 'Halo ' + nama + '! (Function Declaration)';
    }

    // 2. Function Expression (Disimpan di variabel const)
    const hitungPangkat = function(x, y) {
      return x ** y;
    };
    log += 'Function Expression: 2 pangkat 8 = <strong>' + hitungPangkat(2, 8) + '</strong>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'sapaHalo("Budi") berhasil berjalan meskipun baris function sapaHalo baru ditulis di bawahnya (fitur Hoisting).',
      'hitungPangkat disimpan di variabel const. Jika dipanggil sebelum baris const hitungPangkat, JavaScript akan melempar ReferenceError.',
      'Menyimpan fungsi di variabel const adalah praktik modern yang sangat dianjurkan karena mencegah fungsi tertimpa tanpa sengaja.'
    ],
    quiz: {
      question: 'Apa yang terjadi jika Anda memanggil sebuah Function Expression sebelum baris deklarasi variabelnya?',
      options: [
        'Fungsi tetap berjalan normal tanpa error',
        'Melempar ReferenceError (Cannot access before initialization)',
        'Mengembalikan nilai null',
        'Browser me-refresh halaman otomatis'
      ],
      answer: 1,
      explanation: 'Variabel penampung Function Expression (let / const) tidak di-hoist secara terinisialisasi, sehingga memanggilnya sebelum baris deklarasi akan memicu ReferenceError.'
    },
    challenge: {
      title: 'Tantangan: Buat Function Expression',
      description: 'Definisikan function expression di dalam variabel `const kuadrat = function(n) { return n * n; };`.',
      startingCode: `// Tulis function expression di bawah:\n`,
      solution: `const kuadrat = function(n) {\n  return n * n;\n};`
    }
  },

  // ── 47. FUNCTION ARROW ──────────────────────────────────────────────────
  {
    id: 'function-arrow',
    title: 'Function Arrow',
    chapter: 'JS Functions',
    chapterId: 'js-chap-functions',
    order: 47,
    overview: 'Kuasai sintaks modern ES6 Arrow Function: implicit return, penulisan satu baris, lexical this binding, serta kasus di mana arrow function tidak boleh digunakan.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS FUNCTIONS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 47 / 56</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏹 ES6 Arrow Functions & Lexical this</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Arrow function (<code>() => {}</code>) diperkenalkan di ES6 untuk menyederhanakan penulisan fungsi. Selain sintaks yang sangat ringkas, Arrow Function <strong>tidak memiliki <code>this</code> sendiri</strong>, melainkan mewarisi <code>this</code> dari konteks cakupan induknya (*Lexical Scoping*).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Arrow Function</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Kekuatan Sintaks ES6 Arrow Function</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. Arrow Function Standar
    const kali = (a, b) => {
      return a * b;
    };

    // 2. One-Liner Implicit Return (Tanpa kata kunci return dan tanpa kurung kurawal)
    const tambah = (a, b) => a + b;
    const kuadrat = x => x * x; // 1 parameter boleh tanpa tanda kurung

    log += 'kali(6, 7) ➔ ' + kali(6, 7) + '<br>';
    log += 'tambah(100, 50) ➔ ' + tambah(100, 50) + '<br>';
    log += 'kuadrat(9) ➔ ' + kuadrat(9) + '<br><br>';

    // 3. Arrow Function di Method Array (map & filter)
    const angka = [1, 2, 3, 4, 5];
    const genap = angka.filter(n => n % 2 === 0);
    log += 'Array Asli: [' + angka.join(', ') + ']<br>';
    log += 'Hasil Filter Genap: [' + genap.join(', ') + ']';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'const tambah = (a, b) => a + b secara otomatis me-return hasil penjumlahan tanpa perlu menulis keyword return.',
      'Jika hanya ada 1 parameter, tanda kurung bisa dihilangkan seperti const kuadrat = x => x * x.',
      'Arrow function sangat populer digunakan dalam higher-order function array seperti .filter(), .map(), dan .forEach().'
    ],
    quiz: {
      question: 'Manakah pernyataan yang BENAR mengenai sifat kata kunci this pada Arrow Function?',
      options: [
        'Arrow function memiliki kata kunci this independen tersendiri',
        'Arrow function tidak memiliki this sendiri dan mewarisi this dari scope di luarnya (Lexical this)',
        'Arrow function hanya bisa digunakan di dalam class',
        'Arrow function otomatis mengubah this menjadi global window'
      ],
      answer: 1,
      explanation: 'Arrow function tidak mengikat `this` miliknya sendiri, melainkan mengadopsi `this` dari cakupan lingkup induknya (*lexical this*).'
    },
    challenge: {
      title: 'Tantangan: Buat One-Liner Arrow Function',
      description: 'Tulis arrow function satu baris `const bagi = (a, b) => a / b;`.',
      startingCode: `// Tulis arrow function bagi di bawah:\n`,
      solution: `const bagi = (a, b) => a / b;`
    }
  },

  // ── 48. FUNCTION QUIZ ───────────────────────────────────────────────────
  {
    id: 'function-quiz',
    title: 'Function Quiz',
    chapter: 'JS Functions',
    chapterId: 'js-chap-functions',
    order: 48,
    overview: 'Uji pemahaman komprehensif seluruh konsep fungsi JavaScript: deklarasi, parameter, return, rest parameter, arrow function, dan scope.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS FUNCTIONS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 48 / 56</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏆 Uji Kompetensi & Rangkuman JavaScript Functions</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Selamat! Anda telah mempelajari seluruh pilar fungsi di JavaScript. Uji pemahaman Anda melalui kuis interaktif dan tantangan pembuatan fungsi kalkulasi transaksi di bawah ini.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Function Comprehensive Quiz</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Sistem Perhitungan Checkout E-Commerce</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    // Fungsi Komprehensif Menggabungkan Default Param, Rest Param, & Arrow Function
    const hitungTotalBelanja = (ongkir = 15000, ...daftarHarga) => {
      let subtotal = daftarHarga.reduce((acc, curr) => acc + curr, 0);
      let ppn = subtotal * 0.11;
      let totalAkhir = subtotal + ppn + ongkir;

      return {
        subtotal: subtotal,
        ppn: ppn,
        ongkir: ongkir,
        totalAkhir: totalAkhir
      };
    };

    let checkout = hitungTotalBelanja(20000, 150000, 250000, 100000);
    
    let html = 'Subtotal Barang: Rp ' + checkout.subtotal.toLocaleString('id-ID') + '<br>' +
      'PPN 11%: Rp ' + checkout.ppn.toLocaleString('id-ID') + '<br>' +
      'Ongkir: Rp ' + checkout.ongkir.toLocaleString('id-ID') + '<br>' +
      '<strong>TOTAL TAGIHAN: Rp ' + checkout.totalAkhir.toLocaleString('id-ID') + '</strong>';

    document.getElementById('output').innerHTML = html;
  </script>

</body>
</html>`,
    codeExplanation: [
      'hitungTotalBelanja menggabungkan Arrow function, Default parameter (ongkir = 15000), dan Rest parameter (...daftarHarga).',
      '.reduce() menjumlahkan seluruh harga barang dalam array secara ringkas.',
      'Fungsi mengembalikan sebuah objek berisi rincian tagihan yang terstruktur rapi.'
    ],
    quiz: {
      question: 'Manakah fitur modern ES6 yang memungkinkan sebuah fungsi menerima parameter bernilai cadangan jika pemanggil tidak menyediakannya?',
      options: [
        'Rest Parameters',
        'Default Parameters',
        'Spread Operator',
        'Arrow Binding'
      ],
      answer: 1,
      explanation: 'Fitur `Default Parameters` di ES6 memungkinkan penetapan nilai cadangan secara langsung pada definisi parameter, misal: `(ongkir = 15000)`.'
    },
    challenge: {
      title: 'Tantangan Akhir: Arrow Function Kalkulasi Pajak',
      description: 'Buat arrow function `const totalDenganPajak = (nominal) => nominal * 1.11;`.',
      startingCode: `// Tulis arrow function kalkulasi pajak di bawah:\n`,
      solution: `const totalDenganPajak = (nominal) => nominal * 1.11;`
    }
  }
];
