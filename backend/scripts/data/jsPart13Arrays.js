module.exports = [
  // ── 67. JS ARRAYS ───────────────────────────────────────────────────────
  {
    id: 'js-arrays',
    title: 'JS Arrays',
    chapter: 'JS Arrays',
    chapterId: 'js-chap-arrays',
    order: 67,
    overview: 'Kuasai struktur data Array di JavaScript: array literal [], akses elemen berbasis nol-indeks, properti length, dan array berisi data campuran.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS ARRAYS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 67 / 74</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📚 Konsep Dasar Array di JavaScript</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Array adalah variabel khusus yang dapat menampung lebih dari satu nilai sekaligus dalam satu nama variabel. Array di JavaScript berindeks nol (elemen pertama berada pada indeks <code>0</code>).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Arrays Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Katalog Modul Kursus (Array)</h2>
  <div id="output" style="background: #f8fafc; border: 1px solid #cbd5e1; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const daftarModul = ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'PostgreSQL'];

    log += 'Total Modul (length): <strong>' + daftarModul.length + ' Modul</strong><br><br>';
    log += '• Modul Pertama (indeks 0): ' + daftarModul[0] + '<br>';
    log += '• Modul Ketiga (indeks 2): ' + daftarModul[2] + '<br>';
    log += '• Modul Terakhir: ' + daftarModul[daftarModul.length - 1];

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'const daftarModul = [...] mendefinisikan array menggunakan array literal.',
      'daftarModul.length menghitung total 5 elemen.',
      'daftarModul[daftarModul.length - 1] adalah trik standar untuk selalu mengambil elemen terakhir dalam array.'
    ],
    quiz: {
      question: 'Berapakah nomor indeks untuk elemen pertama dari sebuah Array di JavaScript?',
      options: [
        '1',
        '0',
        '-1',
        'Pertama'
      ],
      answer: 1,
      explanation: 'Array di JavaScript menggunakan sistem penomoran indeks berbasis nol (*zero-indexed*), sehingga elemen pertama selalu berada di indeks 0.'
    },
    challenge: {
      title: 'Tantangan: Buat Array 3 Buah',
      description: 'Deklarasikan array `const buah = ["Apel", "Jeruk", "Mangga"];`.',
      startingCode: `// Buat array buah di bawah:\n`,
      solution: `const buah = ["Apel", "Jeruk", "Mangga"];`
    }
  },

  // ── 68. JS ARRAY CONSTRUCTOR ────────────────────────────────────────────
  {
    id: 'js-array-constructor',
    title: 'JS Array Constructor',
    chapter: 'JS Arrays',
    chapterId: 'js-chap-arrays',
    order: 68,
    overview: 'Pahami konstruktor Array dan method statis pembuat array: new Array(), Array.of(), Array.from() (mengonversi String/NodeList/Set menjadi Array), serta Array.isArray().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS ARRAYS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 68 / 74</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏗️ Method Konstruktor & Array.from()</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Selain tanda kurung siku <code>[]</code>, JavaScript menyediakan fungsi pembantu statis pada objek <code>Array</code> untuk membuat dan mengonversi struktur data lain menjadi array.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Array Constructor</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Konversi Data dengan Array.from() & Array.isArray()</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. Array.from() - Mengubah string menjadi Array per huruf
    const huruf = Array.from('JAVASCRIPT');
    log += 'Array.from("JAVASCRIPT") ➔ [' + huruf.join(', ') + ']<br><br>';

    // 2. Array.from() dengan Mapping Function
    const kuadratList = Array.from([1, 2, 3, 4], x => x * x);
    log += 'Array.from([1,2,3,4], x => x*x) ➔ [' + kuadratList.join(', ') + ']<br><br>';

    // 3. Array.isArray() - Verifikasi tipe array
    log += 'Array.isArray(huruf)? ➔ <strong>' + Array.isArray(huruf) + '</strong> ✅';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Array.from("JAVASCRIPT") memecah string menjadi array karakter individual.',
      'Array.from() menerima fungsi transformasi sebagai argumen kedua, seperti Array.from([1, 2, 3, 4], x => x * x).',
      'Array.isArray() adalah satu-satunya cara resmi dan aman untuk membedakan Array dari Objek biasa.'
    ],
    quiz: {
      question: 'Method statis manakah yang digunakan untuk memeriksa secara akurat apakah suatu variabel adalah Array murni?',
      options: [
        'typeof arr === "array"',
        'Array.isArray(arr)',
        'arr.isArray()',
        'arr instanceof ArrayOnly'
      ],
      answer: 1,
      explanation: '`Array.isArray(arr)` adalah method standar ECMAScript untuk memverifikasi apakah suatu variabel bertipe Array.'
    },
    challenge: {
      title: 'Tantangan: Cek Tipe Array',
      description: 'Gunakan `Array.isArray([1, 2, 3])` dan simpan hasilnya ke variabel `let cek = Array.isArray([1, 2, 3]);`.',
      startingCode: `// Cek array di bawah:\nlet cek = false;`,
      solution: `let cek = Array.isArray([1, 2, 3]);`
    }
  },

  // ── 69. JS ARRAY METHODS ────────────────────────────────────────────────
  {
    id: 'js-array-methods',
    title: 'JS Array Methods',
    chapter: 'JS Arrays',
    chapterId: 'js-chap-arrays',
    order: 69,
    overview: 'Kuasai method esensial manipulasi array: push(), pop(), shift(), unshift(), splice() (tambah/hapus di tengah), slice(), concat(), join(), dan flat().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS ARRAYS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 69 / 74</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛠️ Method Manipulasi Elemen Array</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            JavaScript menyediakan beragam method untuk memodifikasi elemen di awal, akhir, maupun tengah-tengah array.
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs font-mono text-slate-600 dark:text-slate-300">
          <div class="p-2 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800"><strong class="text-amber-500">push()</strong>: Tambah di akhir</div>
          <div class="p-2 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800"><strong class="text-amber-500">pop()</strong>: Hapus di akhir</div>
          <div class="p-2 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800"><strong class="text-amber-500">unshift()</strong>: Tambah di awal</div>
          <div class="p-2 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800"><strong class="text-amber-500">shift()</strong>: Hapus di awal</div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Array Methods Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Operasi Antrean Array (Queue & Stack)</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    let stack = ['Item 1', 'Item 2'];
    log += 'Awal: [' + stack.join(', ') + ']<br>';

    // 1. push() - Tambah ke ujung belakang
    stack.push('Item 3');
    log += 'Setelah push("Item 3"): [' + stack.join(', ') + ']<br>';

    // 2. pop() - Ambil dari ujung belakang
    let itemDihapus = stack.pop();
    log += 'Setelah pop(): [' + stack.join(', ') + '] (Dihapus: ' + itemDihapus + ')<br><br>';

    // 3. splice(start, deleteCount, itemBaru) - Sisipkan di indeks 1
    stack.splice(1, 0, 'Item Sisipan Spesial');
    log += 'Setelah splice(1, 0, "Item Sisipan"): [' + stack.join(', ') + ']';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'stack.push("Item 3") menambahkan elemen baru ke posisi paling belakang.',
      'stack.pop() menghapus dan mengembalikan elemen paling belakang.',
      'stack.splice(1, 0, "Item Sisipan") menyisipkan data baru tepat pada indeks ke-1 tanpa menghapus elemen yang ada.'
    ],
    quiz: {
      question: 'Method manakah yang digunakan untuk menghapus elemen pertama (paling depan) dari sebuah Array?',
      options: [
        'pop()',
        'shift()',
        'unshift()',
        'slice()'
      ],
      answer: 1,
      explanation: 'Method `shift()` menghapus elemen pertama dari array dan menggeser seluruh elemen tersisa ke indeks yang lebih rendah.'
    },
    challenge: {
      title: 'Tantangan: Tambah Elemen dengan push()',
      description: 'Tambahkan angka 4 ke array `const arr = [1, 2, 3];` menggunakan method `.push(4)`.',
      startingCode: `const arr = [1, 2, 3];\n// Tambah angka 4 di bawah:\n`,
      solution: `const arr = [1, 2, 3];\narr.push(4);`
    }
  },

  // ── 70. JS ARRAY SEARCH ─────────────────────────────────────────────────
  {
    id: 'js-array-search',
    title: 'JS Array Search',
    chapter: 'JS Arrays',
    chapterId: 'js-chap-arrays',
    order: 70,
    overview: 'Kuasai method pencarian elemen array: indexOf(), lastIndexOf(), includes(), find() (pencarian objek dengan predikat), findIndex(), dan findLast().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS ARRAYS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 70 / 74</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Pencarian Data Sederhana & Kompleks pada Array</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Untuk data primitif gunakan <code>includes()</code> atau <code>indexOf()</code>. Untuk mencari data objek di dalam kumpulan Array of Objects, gunakan <code>find()</code> atau <code>findIndex()</code>.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Array Search Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Pencarian Objek Pengguna dengan find()</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const daftarSiswa = [
      { id: 101, nama: 'Budi', nilai: 78 },
      { id: 102, nama: 'Rahmat Fadila', nilai: 98 },
      { id: 103, nama: 'Siti', nilai: 85 }
    ];

    // 1. find() - Mencari objek pertama yang memenuhi kriteria fungsi
    let siswaTop = daftarSiswa.find(s => s.nilai > 90);
    log += 'Siswa dengan nilai > 90 (find): <strong>' + siswaTop.nama + ' (' + siswaTop.nilai + ' Poin)</strong><br><br>';

    // 2. findIndex() - Mengambil posisi indeks objek
    let posIndex = daftarSiswa.findIndex(s => s.id === 102);
    log += 'Indeks Siswa ID #102: <strong>' + posIndex + '</strong><br><br>';

    // 3. includes() pada Array Primitif
    const tags = ['javascript', 'frontend', 'react'];
    log += 'Apakah mengandung tag "react"? ➔ ' + tags.includes('react') + ' ✅';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'daftarSiswa.find(s => s.nilai > 90) mengembalikan objek siswa pertama yang memiliki nilai di atas 90.',
      'daftarSiswa.findIndex(s => s.id === 102) mengembalikan angka nomor indeks (1).',
      'tags.includes("react") memeriksa apakah elemen string ada di dalam array secara instan.'
    ],
    quiz: {
      question: 'Method array manakah yang mengembalikan objek elemen pertama yang lolos uji kondisi fungsi predikat?',
      options: [
        'filter()',
        'find()',
        'search()',
        'indexOf()'
      ],
      answer: 1,
      explanation: 'Method `find()` mengembalikan nilai elemen pertama yang memenuhi fungsi pengujian yang diberikan.'
    },
    challenge: {
      title: 'Tantangan: Cari Angka Lebih Besar dari 50',
      description: 'Gunakan `.find(x => x > 50)` pada array `const nums = [10, 25, 75, 40];` dan simpan ke `let ketemu = nums.find(x => x > 50);`.',
      startingCode: `const nums = [10, 25, 75, 40];\n// Cari angka > 50 di bawah:\nlet ketemu = 0;`,
      solution: `const nums = [10, 25, 75, 40];\nlet ketemu = nums.find(x => x > 50);`
    }
  },

  // ── 71. JS ARRAY SORT ───────────────────────────────────────────────────
  {
    id: 'js-array-sort',
    title: 'JS Array Sort',
    chapter: 'JS Arrays',
    chapterId: 'js-chap-arrays',
    order: 71,
    overview: 'Kuasai pengurutan array: sort() alfabetis, reverse(), fungsi pembanding numerik compare function ((a, b) => a - b), sorting objek, dan method modern toSorted().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS ARRAYS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 71 / 74</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔀 Pengurutan Array (Sort & Compare Function)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Secara default, <code>sort()</code> mengurutkan elemen sebagai <strong>String alfabetis</strong> (sehingga <code>"25"</code> dianggap lebih besar dari <code>"100"</code> karena karakter '2' > '1'). Untuk mengurutkan angka, wajib menyertakan <strong>Compare Function</strong>.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Array Sort Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Pengurutan Angka & Objek</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. Sorting Angka Ascending (Kecil ke Besar)
    const skor = [40, 100, 1, 5, 25, 10];
    skor.sort((a, b) => a - b);
    log += '1. Skor Ascending ((a,b) => a-b): [' + skor.join(', ') + ']<br>';

    // 2. Sorting Angka Descending (Besar ke Kecil)
    skor.sort((a, b) => b - a);
    log += '2. Skor Descending ((a,b) => b-a): [' + skor.join(', ') + ']<br><br>';

    // 3. Sorting Array of Objects Berdasarkan Harga Termurah
    const produkList = [
      { nama: 'Monitor 4K', harga: 4500000 },
      { nama: 'Mouse Wireless', harga: 150000 },
      { nama: 'Keyboard Mekanikal', harga: 850000 }
    ];
    produkList.sort((a, b) => a.harga - b.harga);
    
    log += '3. Produk Urut Harga Termurah:<br>';
    for (let p of produkList) {
      log += '   • ' + p.nama + ' (Rp ' + p.harga.toLocaleString('id-ID') + ')<br>';
    }

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'skor.sort((a, b) => a - b) mengurangkan a dengan b. Jika negatif maka a ditaruh sebelum b (Ascending).',
      'skor.sort((a, b) => b - a) membalik urutan menjadi Descending.',
      'produkList.sort((a, b) => a.harga - b.harga) mengurutkan objek berdasarkan properti numerik harga.'
    ],
    quiz: {
      question: 'Bagaimana rumus Compare Function untuk mengurutkan array angka dari nilai terkecil ke terbesar (Ascending)?',
      options: [
        '(a, b) => a + b',
        '(a, b) => a - b',
        '(a, b) => b - a',
        '(a, b) => a * b'
      ],
      answer: 1,
      explanation: 'Rumus `(a, b) => a - b` digunakan untuk mengurutkan angka secara menaik (Ascending).'
    },
    challenge: {
      title: 'Tantangan: Sort Array Angka Ascending',
      description: 'Urutkan array `const data = [50, 10, 80, 20];` dengan `data.sort((a, b) => a - b);`.',
      startingCode: `const data = [50, 10, 80, 20];\n// Urutkan angka di bawah:\n`,
      solution: `const data = [50, 10, 80, 20];\ndata.sort((a, b) => a - b);`
    }
  },

  // ── 72. JS ARRAY ITERATIONS ─────────────────────────────────────────────
  {
    id: 'js-array-iterations',
    title: 'JS Array Iterations',
    chapter: 'JS Arrays',
    chapterId: 'js-chap-arrays',
    order: 72,
    overview: 'Kuasai Higher-Order Array Iteration Methods: forEach(), map() (transformasi elemen), filter() (penyaringan), reduce() (akumulasi total), every(), dan some().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS ARRAYS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 72 / 74</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚡ Functional Array Iterations (map, filter, reduce)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Method iterasi fungsional adalah jantung dari pemrograman JavaScript modern (seperti di React dan Node.js) yang memungkinkan transformasi dan pemrosesan data deklaratif tanpa perulangan manual.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Array Iterations Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Pemrosesan Data E-Commerce (map, filter, reduce)</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const cart = [
      { nama: 'Buku JS', harga: 120000, kategori: 'Buku' },
      { nama: 'Headphone', harga: 450000, kategori: 'Elektronik' },
      { nama: 'Buku React', harga: 150000, kategori: 'Buku' }
    ];

    // 1. filter() - Ambil hanya barang kategori "Buku"
    const bukuList = cart.filter(item => item.kategori === 'Buku');
    log += '1. filter() Kategori Buku (Total ' + bukuList.length + ' buku): ' + bukuList.map(b => b.nama).join(', ') + '<br><br>';

    // 2. map() - Tambah diskon 10% ke setiap barang
    const cartDiskon = cart.map(item => ({
      nama: item.nama,
      hargaDiskon: item.harga * 0.9
    }));
    log += '2. map() Harga Setelah Diskon 10%:<br>';
    cartDiskon.forEach(item => {
      log += '   • ' + item.nama + ': Rp ' + item.hargaDiskon.toLocaleString('id-ID') + '<br>';
    });

    // 3. reduce() - Akumulasi total belanja
    const grandTotal = cart.reduce((total, item) => total + item.harga, 0);
    log += '<br>3. reduce() <strong>Grand Total Belanja: Rp ' + grandTotal.toLocaleString('id-ID') + '</strong>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'cart.filter() menyaring elemen yang sesuai dengan syarat kategori === "Buku".',
      'cart.map() mentransformasikan setiap objek barang menjadi format baru dengan harga diskon.',
      'cart.reduce() mengakumulasikan nilai harga dari semua barang menjadi satu angka grand total.'
    ],
    quiz: {
      question: 'Method array manakah yang digunakan untuk mentransformasikan setiap elemen array dan mengembalikan Array baru dengan panjang yang sama?',
      options: [
        'filter()',
        'forEach()',
        'map()',
        'reduce()'
      ],
      answer: 2,
      explanation: 'Method `map()` menerapkan fungsi pada setiap elemen array dan mengembalikan array baru berisi hasil transformasinya.'
    },
    challenge: {
      title: 'Tantangan: Gandakan Angka dengan map()',
      description: 'Gunakan `.map(n => n * 2)` pada array `const angka = [1, 2, 3];` dan simpan ke `let kaliDua = angka.map(n => n * 2);`.',
      startingCode: `const angka = [1, 2, 3];\n// Gandakan angka dengan map di bawah:\nlet kaliDua = [];`,
      solution: `const angka = [1, 2, 3];\nlet kaliDua = angka.map(n => n * 2);`
    }
  },

  // ── 73. JS ARRAY REFERENCE ──────────────────────────────────────────────
  {
    id: 'js-array-reference',
    title: 'JS Array Reference',
    chapter: 'JS Arrays',
    chapterId: 'js-chap-arrays',
    order: 73,
    overview: 'Kamus panduan referensi lengkap seluruh method dan properti Array standar ECMAScript beserta deskripsi fungsinya.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS ARRAYS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 73 / 74</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📚 Kamus Referensi Objek Array JavaScript</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Tabel berikut merangkum seluruh method manipulasi, pencarian, dan iterasi array standar.
          </p>
        </div>

        <div class="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-xl text-xs">
          <table class="w-full text-left">
            <thead class="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white">
              <tr>
                <th class="p-3">Method</th>
                <th class="p-3">Deskripsi Singkat</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-800 font-mono text-slate-600 dark:text-slate-300">
              <tr><td class="p-3 text-amber-500 font-bold">concat()</td><td>Menggabungkan dua atau lebih array menjadi satu.</td></tr>
              <tr><td class="p-3 text-amber-500 font-bold">every(fn)</td><td>Memeriksa apakah SEMUA elemen memenuhi kondisi.</td></tr>
              <tr><td class="p-3 text-amber-500 font-bold">some(fn)</td><td>Memeriksa apakah MINIMAL SATU elemen memenuhi kondisi.</td></tr>
              <tr><td class="p-3 text-amber-500 font-bold">flat(depth)</td><td>Meratakan array bersarang (nested array).</td></tr>
              <tr><td class="p-3 text-amber-500 font-bold">join(separator)</td><td>Menggabungkan elemen array menjadi string dengan pemisah.</td></tr>
              <tr><td class="p-3 text-amber-500 font-bold">slice(start, end)</td><td>Mengekstrak bagian array menjadi array baru.</td></tr>
              <tr><td class="p-3 text-amber-500 font-bold">splice(i, n, items)</td><td>Menambah/menghapus elemen di indeks tertentu.</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Array Reference Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Praktik method flat(), every(), dan some()</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. flat() - Meratakan array bersarang
    const nested = [1, [2, 3], [4, [5, 6]]];
    const rata = nested.flat(2);
    log += '1. nested.flat(2) ➔ [' + rata.join(', ') + ']<br><br>';

    // 2. every() & some()
    const umurList = [18, 22, 25, 19];
    let semuaDewasa = umurList.every(u => u >= 17);
    let adaYangDiAtas20 = umurList.some(u => u > 20);

    log += '2. every (Semua >= 17): <strong>' + semuaDewasa + '</strong> ✅<br>';
    log += '3. some (Ada yang > 20): <strong>' + adaYangDiAtas20 + '</strong> ✅';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'nested.flat(2) meratakan array bertingkat hingga kedalaman 2 level.',
      'umurList.every() mengembalikan true hanya jika semua angka >= 17.',
      'umurList.some() mengembalikan true jika minimal ada 1 angka yang > 20.'
    ],
    quiz: {
      question: 'Method array manakah yang digunakan untuk meratakan array bertingkat (nested array)?',
      options: [
        'merge()',
        'flat()',
        'unroll()',
        'concatAll()'
      ],
      answer: 1,
      explanation: 'Method `flat()` membuat array baru dengan semua sub-elemen array bersarang diratakan sesuai kedalaman yang ditentukan.'
    },
    challenge: {
      title: 'Tantangan: Gabungkan Array dengan concat()',
      description: 'Gabungkan `[1, 2]` dan `[3, 4]` menggunakan `[1, 2].concat([3, 4]);`.',
      startingCode: `let gabung = [1, 2].concat([3, 4]);`,
      solution: `let gabung = [1, 2].concat([3, 4]);`
    }
  },

  // ── 74. JS ARRAY CONST ──────────────────────────────────────────────────
  {
    id: 'js-array-const',
    title: 'JS Array const',
    chapter: 'JS Arrays',
    chapterId: 'js-chap-arrays',
    order: 74,
    overview: 'Kuasai deklarasi array dengan const: pemahaman mutasi elemen array vs re-assignment referensi variabel, serta cara mengunci array permanen dengan Object.freeze().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS ARRAYS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 74 / 74</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛡️ Array const & Pembekuan Objek (Object.freeze)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Kata kunci <code>const</code> pada array <strong>tidak membuat elemen array kebal dari mutasi</strong>, melainkan mengunci referensi variabelnya agar tidak bisa diganti dengan array baru. Jika Anda ingin membuat array benar-benar tidak bisa diubah sama sekali, gunakan <code>Object.freeze()</code>.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Array const Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Mutasi Array const vs Object.freeze()</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. Array const Standar (Bisa ditambah / diubah elemennya)
    const warna = ['Merah', 'Hijau'];
    warna.push('Biru'); // SAH
    warna[0] = 'Kuning'; // SAH
    log += 'Array const setelah dimutasi: [' + warna.join(', ') + ']<br><br>';

    // 2. Mengunci Array Secara Permanen dengan Object.freeze()
    const roleList = Object.freeze(['ADMIN', 'INSTRUCTOR', 'STUDENT']);
    try {
      // roleList.push('GUEST'); // Akan Error atau diabaikan
      log += 'Array Terkunci (Object.freeze): [' + roleList.join(', ') + '] 🔒';
    } catch (e) {
      log += 'Error Freeze: ' + e.message;
    }

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'const warna mengunci variabel warna sehingga tidak bisa dilakukan warna = ["Lain"]. Namun isinya tetap bisa ditambah via .push().',
      'Object.freeze(roleList) membekukan array secara mendalam sehingga penambahan atau perubahan elemen dicegah sepenuhnya.'
    ],
    quiz: {
      question: 'Manakah operasi pada array const arr = [1, 2]; yang TIDAK DIPERBOLEHKAN dan melempar TypeError?',
      options: [
        'arr.push(3);',
        'arr[0] = 10;',
        'arr = [4, 5];',
        'arr.pop();'
      ],
      answer: 2,
      explanation: 'Re-assigning variabel const ke array baru (`arr = [4, 5]`) dilarang dan akan menghasilkan TypeError.'
    },
    challenge: {
      title: 'Tantangan: Bekukan Array dengan Object.freeze',
      description: 'Kunci array `const status = Object.freeze(["Aktif", "Nonaktif"]);`.',
      startingCode: `// Bekukan array di bawah:\nconst status = ["Aktif", "Nonaktif"];`,
      solution: `const status = Object.freeze(["Aktif", "Nonaktif"]);`
    }
  }
];
