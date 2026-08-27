module.exports = [
  // ── 12. JS OPERATORS ────────────────────────────────────────────────────
  {
    id: 'js-operators',
    title: 'JS Operators',
    chapter: 'JS Operators',
    chapterId: 'js-chap-operators',
    order: 12,
    overview: 'Pahami peta konsep lengkap seluruh kategori operator di JavaScript: Aritmatika, Assignment, String, Perbandingan, Logika, Bitwise, dan Type Operators.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS OPERATION</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 12 / 22</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚡ Peta Lengkap Operator JavaScript</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Operator adalah simbol khusus yang digunakan untuk memproses komputasi, membandingkan nilai, mengubah status variabel, dan menentukan alur logika program.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
            <strong class="text-amber-500 text-sm">1. Arithmetic (+, -, *, /, %, **)</strong>
            <p class="text-slate-600 dark:text-slate-300">Menghitung nilai matematis angka.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
            <strong class="text-amber-500 text-sm">2. Assignment (=, +=, -=, *=)</strong>
            <p class="text-slate-600 dark:text-slate-300">Menetapkan atau mengupdate nilai ke variabel.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
            <strong class="text-amber-500 text-sm">3. Comparison (==, ===, !=, !==, >, <)</strong>
            <p class="text-slate-600 dark:text-slate-300">Membandingkan dua nilai dan menghasilkan boolean.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
            <strong class="text-amber-500 text-sm">4. Logical (&&, ||, !)</strong>
            <p class="text-slate-600 dark:text-slate-300">Mengombinasikan kondisi logika majemuk.</p>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Operators Overview</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Katalog Demonstrasi Operator JS</h2>
  <div id="demo-box" style="background: #f8fafc; border: 1px solid #cbd5e1; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let res = '';

    // Aritmatika
    let a = 10, b = 3;
    res += 'Aritmatika (10 % 3) ➔ ' + (a % b) + ' (Sisa bagi)<br>';
    res += 'Eksponensial (10 ** 3) ➔ ' + (a ** b) + ' (10 pangkat 3)<br><br>';

    // String Operator (+)
    let salam = 'Halo ' + 'Dunia!';
    res += 'String Concatenation ➔ "' + salam + '"<br><br>';

    // Perbandingan Tipe
    res += 'Perbandingan Longgar (5 == "5") ➔ ' + (5 == '5') + '<br>';
    res += 'Perbandingan Ketat (5 === "5") ➔ ' + (5 === '5') + '<br><br>';

    // Logika
    let umur = 20, punyaSIM = true;
    res += 'Boleh Menyetir (umur >= 17 && punyaSIM) ➔ ' + (umur >= 17 && punyaSIM);

    document.getElementById('demo-box').innerHTML = res;
  </script>

</body>
</html>`,
    codeExplanation: [
      '10 % 3 menghitung modulus atau sisa hasil bagi matematika (10 dibagi 3 menghasilkan 3 sisa 1).',
      'Operator ** adalah exponentiation operator (pangkat).',
      '5 == "5" bernilai true karena type coercion otomatis, sedangkan 5 === "5" bernilai false karena memeriksa tipe data secara ketat.'
    ],
    quiz: {
      question: 'Manakah operator JavaScript yang digunakan untuk operasi pemangkatan bilangan (pangkat)?',
      options: [
        '^',
        '**',
        '^^',
        'pow()'
      ],
      answer: 1,
      explanation: 'Operator `**` (Exponentiation) diperkenalkan di ES6 untuk menghitung pemangkatan matematika (contoh: 2 ** 3 = 8).'
    },
    challenge: {
      title: 'Tantangan: Gabungkan String dan Angka',
      description: 'Buat variabel `let pesan = "Total Skor: " + (50 + 50);` dan cetak nilainya.',
      startingCode: `// Tulis kode penggabungan string dan operasi matematika di bawah:\n`,
      solution: `let pesan = "Total Skor: " + (50 + 50);`
    }
  },

  // ── 13. JS ARITHMETIC ───────────────────────────────────────────────────
  {
    id: 'js-arithmetic',
    title: 'JS Arithmetic',
    chapter: 'JS Operators',
    chapterId: 'js-chap-operators',
    order: 13,
    overview: 'Kuasai seluruh operator aritmatika (+, -, *, /, %, **, ++, --) dan pahami urutan prioritas eksekusi (Operator Precedence).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS ARITHMETIC</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 13 / 22</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">➕ Operator Aritmatika & Presedensi</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Operator aritmatika melakukan kalkulasi matematika pada bilangan bulat atau desimal.
          </p>
        </div>

        <div class="space-y-2 text-xs">
          <div class="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-xl">
            <table class="w-full text-left">
              <thead class="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white">
                <tr>
                  <th class="p-3">Operator</th>
                  <th class="p-3">Nama</th>
                  <th class="p-3">Contoh</th>
                  <th class="p-3">Hasil</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200 dark:divide-slate-800 text-slate-600 dark:text-slate-300 font-mono">
                <tr><td class="p-3 text-amber-500 font-bold">+</td><td>Penjumlahan</td><td>10 + 5</td><td>15</td></tr>
                <tr><td class="p-3 text-amber-500 font-bold">-</td><td>Pengurangan</td><td>10 - 5</td><td>5</td></tr>
                <tr><td class="p-3 text-amber-500 font-bold">*</td><td>Perkalian</td><td>10 * 5</td><td>50</td></tr>
                <tr><td class="p-3 text-amber-500 font-bold">/</td><td>Pembagian</td><td>10 / 4</td><td>2.5</td></tr>
                <tr><td class="p-3 text-amber-500 font-bold">%</td><td>Modulus (Sisa Bagi)</td><td>10 % 3</td><td>1</td></tr>
                <tr><td class="p-3 text-amber-500 font-bold">**</td><td>Eksponensial (Pangkat)</td><td>2 ** 4</td><td>16</td></tr>
                <tr><td class="p-3 text-amber-500 font-bold">++</td><td>Increment (Tambah 1)</td><td>x++</td><td>x bertambah 1</td></tr>
                <tr><td class="p-3 text-amber-500 font-bold">--</td><td>Decrement (Kurang 1)</td><td>x--</td><td>x berkurang 1</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Kalkulator Sederhana JS</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">

  <h2>Simulasi Operator Aritmatika</h2>
  <div id="hasil" style="background: #f8fafc; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let out = '';

    let x = 15;
    let y = 4;

    out += 'Nilai x = ' + x + ', y = ' + y + '<br><br>';
    out += 'x + y = ' + (x + y) + '<br>';
    out += 'x - y = ' + (x - y) + '<br>';
    out += 'x * y = ' + (x * y) + '<br>';
    out += 'x / y = ' + (x / y) + '<br>';
    out += 'x % y (Sisa Bagi) = ' + (x % y) + '<br>';
    out += 'y ** 3 (4 pangkat 3) = ' + (y ** 3) + '<br><br>';

    // Demonstrasi Increment
    let counter = 10;
    counter++; // bertambah 1
    out += 'counter++ setelah nilai 10 ➔ ' + counter + '<br>';

    // Prioritas Operator (PEMDAS: Kurung duluan daripada perkalian/penjumlahan)
    let prioritas = (10 + 5) * 2;
    out += '(10 + 5) * 2 = ' + prioritas;

    document.getElementById('hasil').innerHTML = out;
  </script>

</body>
</html>`,
    codeExplanation: [
      'x % y menghasilkan sisa bagi 3 (karena 15 / 4 = 3 sisa 3).',
      'y ** 3 menghitung 4 * 4 * 4 = 64.',
      'counter++ menaikkan nilai counter sebesar 1 secara instan.',
      'Tanda kurung (10 + 5) memaksa penjumlahan dieksekusi terlebih dahulu sebelum perkalian * 2.'
    ],
    quiz: {
      question: 'Berapakah hasil dari ekspresi JavaScript: 10 + 5 * 2?',
      options: [
        '30',
        '20',
        '25',
        '100'
      ],
      answer: 1,
      explanation: 'Sesuai aturan presedensi operator aritmatika, perkalian (*) dieksekusi lebih dahulu daripada penjumlahan (+). Jadi 5 * 2 = 10, lalu 10 + 10 = 20.'
    },
    challenge: {
      title: 'Tantangan: Hitung Sisa Bagi',
      description: 'Buat variabel `let sisaBagi = 25 % 7;` dan pastikan hasilnya adalah 4.',
      startingCode: `// Tulis kode modulus di sini:\n`,
      solution: `let sisaBagi = 25 % 7;`
    }
  },

  // ── 14. JS ASSIGNMENT ───────────────────────────────────────────────────
  {
    id: 'js-assignment',
    title: 'JS Assignment',
    chapter: 'JS Operators',
    chapterId: 'js-chap-operators',
    order: 14,
    overview: 'Pahami operator penugasan dasar (=) serta compound assignment shorthand (+=, -=, *=, /=, %=, **=, &&=, ||=, ??=).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS ASSIGNMENT</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 14 / 22</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📝 Operator Assignment & Shorthand</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Operator assignment menetapkan nilai di sisi kanan ke variabel di sisi kiri. Compound Assignment adalah penulisan ringkas (shorthand) untuk operasi aritmatika dan penugasan sekaligus.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1 font-mono">
            <div class="text-amber-500 font-bold">x += y  ➔  x = x + y</div>
            <div class="text-amber-500 font-bold">x -= y  ➔  x = x - y</div>
            <div class="text-amber-500 font-bold">x *= y  ➔  x = x * y</div>
            <div class="text-amber-500 font-bold">x /= y  ➔  x = x / y</div>
          </div>
          <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1 font-mono">
            <div class="text-amber-500 font-bold">x %= y  ➔  x = x % y</div>
            <div class="text-amber-500 font-bold">x **= y ➔  x = x ** y</div>
            <div class="text-emerald-500 font-bold">x &&= y ➔  Logical AND Assign</div>
            <div class="text-emerald-500 font-bold">x ??= y ➔  Nullish Assign</div>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Assignment Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Praktik Compound Assignment</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    let skor = 100;
    log += 'Skor Awal = ' + skor + '<br>';

    skor += 50; // Setara dengan: skor = skor + 50
    log += 'Setelah skor += 50 ➔ ' + skor + '<br>';

    skor -= 20; // Setara dengan: skor = skor - 20
    log += 'Setelah skor -= 20 ➔ ' + skor + '<br>';

    skor *= 2;  // Setara dengan: skor = skor * 2
    log += 'Setelah skor *= 2 ➔ ' + skor + '<br>';

    skor /= 4;  // Setara dengan: skor = skor / 4
    log += 'Setelah skor /= 4 ➔ ' + skor + '<br><br>';

    // Logical Nullish Assignment (??=)
    let namaUser = null;
    namaUser ??= 'Tamu Anonim'; // Mengisi hanya jika nilainya null/undefined
    log += 'namaUser setelah ??= "Tamu Anonim" ➔ "' + namaUser + '"';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'skor += 50 memodifikasi nilai variabel yang ada tanpa perlu menulis ulang variabelnya dua kali.',
      'Operator ??= (Nullish Coalescing Assignment) sangat berguna untuk menetapkan nilai default jika suatu variabel masih bernilai null atau undefined.'
    ],
    quiz: {
      question: 'Jika let x = 10; lalu dijalankan x *= 5; berapakah nilai akhir x?',
      options: [
        '15',
        '50',
        '2',
        '500'
      ],
      answer: 1,
      explanation: 'x *= 5 ekuivalen dengan x = x * 5 (yaitu 10 * 5 = 50).'
    },
    challenge: {
      title: 'Tantangan: Gunakan += untuk Menambah Poin',
      description: 'Deklarasikan variabel `let saldo = 50000;`, lalu gunakan operator `+=` untuk menambahkannya sebesar 25000.',
      startingCode: `// Tulis kode assignment shorthand di bawah:\n`,
      solution: `let saldo = 50000;\nsaldo += 25000;`
    }
  },

  // ── 15. JS COMPARISONS ──────────────────────────────────────────────────
  {
    id: 'js-comparisons',
    title: 'JS Comparisons',
    chapter: 'JS Operators',
    chapterId: 'js-chap-operators',
    order: 15,
    overview: 'Kuasai perbedaan krusial kesetaraan longgar (==) vs kesetaraan ketat (===), ketidaksamaan (!= vs !==), serta operator relasional (<, >, <=, >=).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS COMPARISONS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 15 / 22</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚖️ Operator Perbandingan (Equality & Relational)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Operator perbandingan membandingkan dua operan dan <strong>selalu mengembalikan nilai Boolean (true atau false)</strong>.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 space-y-2">
          <strong class="text-amber-900 dark:text-amber-300 text-sm">💡 Golden Rule: Selalu Gunakan === (Strict Equality)</strong>
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            <code>==</code> melakukan konversi tipe data otomatis (Type Coercion) yang sering menghasilkan bug tak terduga (misal <code>false == 0</code> adalah <code>true</code>). Sedangkan <code>===</code> memeriksa <strong>nilai dan tipe data secara ketat</strong>.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Comparisons Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Tabel Hasil Uji Perbandingan</h2>
  <div id="table-box" style="background: #f8fafc; border: 1px solid #cbd5e1; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let html = '';

    let a = 10;
    let b = '10';

    html += 'a = 10 (number), b = "10" (string)<br><br>';
    html += 'a == b  (Loose Equality)  ➔ <strong style="color:green">' + (a == b) + '</strong> (Hanya cek nilai)<br>';
    html += 'a === b (Strict Equality) ➔ <strong style="color:red">' + (a === b) + '</strong> (Cek nilai & tipe data)<br><br>';

    html += 'a != b  (Loose Inequality)  ➔ ' + (a != b) + '<br>';
    html += 'a !== b (Strict Inequality) ➔ ' + (a !== b) + '<br><br>';

    html += '15 > 10  ➔ ' + (15 > 10) + '<br>';
    html += '10 >= 10 ➔ ' + (10 >= 10) + '<br>';
    html += '5 < 2    ➔ ' + (5 < 2);

    document.getElementById('table-box').innerHTML = html;
  </script>

</body>
</html>`,
    codeExplanation: [
      'a == b menghasilkan true karena string "10" dikonversi secara implisit menjadi angka 10.',
      'a === b menghasilkan false karena tipe number tidak sama dengan tipe string.',
      'Operator relasional (>, <, >=, <=) mengevaluasi perbandingan kuantitatif angka.'
    ],
    quiz: {
      question: 'Manakah perbandingan JavaScript di bawah ini yang akan menghasilkan nilai FALSE?',
      options: [
        '0 == false',
        '"" == false',
        '0 === false',
        'null == undefined'
      ],
      answer: 2,
      explanation: '0 === false menghasilkan false karena 0 bertipe Number dan false bertipe Boolean, sehingga tipe keduanya berbeda dalam perbandingan ketat (strict equality).'
    },
    challenge: {
      title: 'Tantangan: Periksa Kesetaraan Ketat',
      description: 'Deklarasikan variabel `let isIdentik = (100 === 100);` dan pastikan nilainya menghasilkan boolean true.',
      startingCode: `// Tulis kode perbandingan ketat di bawah:\n`,
      solution: `let isIdentik = (100 === 100);`
    }
  },

  // ── 16. JS CONDITIONAL ──────────────────────────────────────────────────
  {
    id: 'js-conditional',
    title: 'JS Conditional',
    chapter: 'JS Operators',
    chapterId: 'js-chap-operators',
    order: 16,
    overview: 'Kuasai Operator Ternary (? :), Nullish Coalescing (??), dan Optional Chaining (?.) untuk penulisan kode ringkas, elegan, dan defensif.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS CONDITIONAL</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 16 / 22</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">✨ Operator Kondisional Modern (? :, ??, ?.)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            JavaScript modern menyediakan operator kondisional ekspresi yang dapat langsung mengembalikan nilai tanpa perlu menuliskan blok statement yang panjang.
          </p>
        </div>

        <div class="space-y-3 text-xs">
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-amber-500 text-sm">1. Ternary Operator: (kondisi ? nilaiTrue : nilaiFalse)</strong>
            <p class="text-slate-600 dark:text-slate-300 mt-1">
              Shorthand satu baris untuk ekspresi if-else sederhana.
            </p>
          </div>

          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-amber-500 text-sm">2. Nullish Coalescing: (nilai ?? nilaiDefault)</strong>
            <p class="text-slate-600 dark:text-slate-300 mt-1">
              Mengembalikan nilai sisi kanan hanya jika nilai sisi kiri adalah <code>null</code> atau <code>undefined</code>.
            </p>
          </div>

          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-amber-500 text-sm">3. Optional Chaining: (objek?.properti)</strong>
            <p class="text-slate-600 dark:text-slate-300 mt-1">
              Mencegah error runtime "Cannot read properties of undefined" jika properti bersarang tidak ditemukan.
            </p>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Conditional Operators</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Eksperimen Operator Kondisional</h2>
  <div id="output" style="background: #1e293b; color: #f8fafc; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. Ternary Operator
    let umur = 18;
    let statusKTP = (umur >= 17) ? 'Sudah Berhak Memiliki KTP ✅' : 'Belum Berhak Memiliki KTP ❌';
    log += 'Ternary: ' + statusKTP + '<br><br>';

    // 2. Nullish Coalescing Operator (??)
    let skorUjian = 0; // 0 adalah nilai sah yang bukan null
    let nilaiAkhir = skorUjian ?? 100;
    log += 'Nullish Coalescing: Nilai tetap ' + nilaiAkhir + ' (karena 0 bukan null/undefined)<br><br>';

    // 3. Optional Chaining (?.)
    const user = {
      nama: 'Fadila',
      kontak: {
        email: 'fadila@example.com'
      }
    };
    log += 'Optional Chaining Email: ' + user.kontak?.email + '<br>';
    log += 'Optional Chaining Telepon (Tidak ada): ' + user.kontak?.telepon; // menghasilkan undefined tanpa error crash

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      '(umur >= 17) ? "A" : "B" mengevaluasi kondisi. Karena 18 >= 17 bernilai true, maka nilai "A" yang dikembalikan.',
      'Operator ?? mempertahankan nilai 0 (berbeda dengan operator || yang menganggap 0 sebagai falsy).',
      'user.kontak?.telepon membaca properti opsional dengan aman tanpa memicu crash runtime.'
    ],
    quiz: {
      question: 'Kapan operator Nullish Coalescing (??) akan mengambil nilai default di sisi kanan?',
      options: [
        'Ketika nilai di sisi kiri bernilai false atau 0',
        'Hanya ketika nilai di sisi kiri adalah null atau undefined',
        'Ketika nilai di sisi kiri berupa string kosong ("")',
        'Ketika nilai di sisi kiri adalah bilangan negatif'
      ],
      answer: 1,
      explanation: 'Operator `??` secara spesifik hanya memeriksa apakah operan bernilai nullish (`null` atau `undefined`), sehingga angka 0 atau string kosong `""` tetap dipertahankan sebagai nilai yang sah.'
    },
    challenge: {
      title: 'Tantangan: Ternary Cek Kelulusan',
      description: 'Gunakan operator ternary untuk mengisi variabel `let status = (nilai >= 75) ? "Lulus" : "Remedial";` dengan `let nilai = 80;`.',
      startingCode: `let nilai = 80;\n// Tulis ternary operator di bawah:\n`,
      solution: `let nilai = 80;\nlet status = (nilai >= 75) ? "Lulus" : "Remedial";`
    }
  }
];
