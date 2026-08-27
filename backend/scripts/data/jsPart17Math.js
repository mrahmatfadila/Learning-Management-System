module.exports = [
  // ── 88. JS MATH ─────────────────────────────────────────────────────────
  {
    id: 'js-math',
    title: 'JS Math',
    chapter: 'JS Math',
    chapterId: 'js-chap-math',
    order: 88,
    overview: 'Kuasai objek statis Math di JavaScript: konstanta presisi tinggi (Math.PI, Math.E), fungsi pembulatan (round, ceil, floor, trunc), dan komputasi (pow, sqrt, abs, min, max).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS MATH</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 88 / 90</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📐 Objek Matematika Bawaan (JavaScript Math)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Tidak seperti objek lainnya, <code>Math</code> bukanlah fungsi konstruktor. Seluruh properti dan method pada <code>Math</code> bersifat <strong>Statis</strong> dan dapat langsung dipanggil tanpa perlu membuat objek instansiasi baru.
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs font-mono text-slate-600 dark:text-slate-300">
          <div class="p-2 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800"><strong class="text-amber-500">round(x)</strong>: Bulatkan terdekat</div>
          <div class="p-2 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800"><strong class="text-amber-500">ceil(x)</strong>: Bulatkan ke ATAS</div>
          <div class="p-2 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800"><strong class="text-amber-500">floor(x)</strong>: Bulatkan ke BAWAH</div>
          <div class="p-2 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800"><strong class="text-amber-500">trunc(x)</strong>: Buang desimal</div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Math Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Kalkulasi Geometri & Pembulatan</h2>
  <div id="output" style="background: #f8fafc; border: 1px solid #cbd5e1; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. Luas Lingkaran (PI * r^2)
    let radius = 7;
    let luasLingkaran = Math.PI * Math.pow(radius, 2);
    log += 'Luas Lingkaran (r=7): ' + luasLingkaran.toFixed(2) + '<br><br>';

    // 2. Eksperimen 4 Fungsi Pembulatan pada 4.7 & 4.2
    log += '<strong>Perbandingan Pembulatan:</strong><br>';
    log += '• Math.round(4.5) ➔ ' + Math.round(4.5) + '<br>';
    log += '• Math.ceil(4.1) ➔ ' + Math.ceil(4.1) + ' (Naik ke atas)<br>';
    log += '• Math.floor(4.9) ➔ ' + Math.floor(4.9) + ' (Turun ke bawah)<br>';
    log += '• Math.trunc(4.88) ➔ ' + Math.trunc(4.88) + ' (Hanya ambil integer)<br><br>';

    // 3. Min & Max
    log += 'Nilai Terbesar Math.max(10, 85, 42, 99) ➔ <strong>' + Math.max(10, 85, 42, 99) + '</strong>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Math.PI menyediakan nilai presisi tinggi konstanta pi (3.14159...).',
      'Math.ceil() selalu membulatkan ke integer atas terdekat bahkan jika pecahan hanya 0.1.',
      'Math.floor() selalu membulatkan ke integer bawah terdekat.',
      'Math.max() mencari nilai terbesar dari rentetan argumen numerik.'
    ],
    quiz: {
      question: 'Method Math manakah yang selalu membulatkan bilangan desimal ke integer ATAS terdekat?',
      options: [
        'Math.floor()',
        'Math.ceil()',
        'Math.round()',
        'Math.up()'
      ],
      answer: 1,
      explanation: 'Method `Math.ceil()` selalu membulatkan angka ke atas ke bilangan bulat terdekat berikutnya.'
    },
    challenge: {
      title: 'Tantangan: Hitung Akar Kuadrat',
      description: 'Hitung akar dari 64 dengan `let hasil = Math.sqrt(64);`.',
      startingCode: `// Hitung akar kuadrat 64 di bawah:\nlet hasil = 0;`,
      solution: `let hasil = Math.sqrt(64);`
    }
  },

  // ── 89. JS MATH REFERENCE ───────────────────────────────────────────────
  {
    id: 'js-math-reference',
    title: 'JS Math Reference',
    chapter: 'JS Math',
    chapterId: 'js-chap-math',
    order: 89,
    overview: 'Kamus referensi komprehensif seluruh method matematika dan konstanta presisi tinggi pada objek Math bawaan JavaScript.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS MATH</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 89 / 90</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📚 Kamus Referensi Statis Objek Math</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Tabel berikut merangkum seluruh method matematika tingkat lanjut di JavaScript.
          </p>
        </div>

        <div class="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-xl text-xs">
          <table class="w-full text-left">
            <thead class="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white">
              <tr>
                <th class="p-3">Method / Konstanta</th>
                <th class="p-3">Deskripsi</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-800 font-mono text-slate-600 dark:text-slate-300">
              <tr><td class="p-3 text-amber-500 font-bold">Math.abs(x)</td><td>Mengembalikan nilai absolut (positif) dari angka.</td></tr>
              <tr><td class="p-3 text-amber-500 font-bold">Math.pow(x, y)</td><td>Menghitung x pangkat y.</td></tr>
              <tr><td class="p-3 text-amber-500 font-bold">Math.sqrt(x)</td><td>Menghitung akar kuadrat dari x.</td></tr>
              <tr><td class="p-3 text-amber-500 font-bold">Math.sign(x)</td><td>Mengembalikan status tanda: -1 (negatif), 0, atau 1 (positif).</td></tr>
              <tr><td class="p-3 text-amber-500 font-bold">Math.sin, cos, tan</td><td>Fungsi trigonometri sudut radian.</td></tr>
              <tr><td class="p-3 text-amber-500 font-bold">Math.hypot(a, b)</td><td>Menghitung sisi miring Pythagoras sqrt(a^2 + b^2).</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Math Reference Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Kalkulasi Pythagoras (Math.hypot) & Nilai Absolut</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. Sisi Miring Segitiga Siku-Siku (Alas: 3, Tinggi: 4 ➔ Hipotenusa: 5)
    let sisiMiring = Math.hypot(3, 4);
    log += '1. Hipotenusa Pythagoras (3 & 4): <strong>' + sisiMiring + '</strong><br><br>';

    // 2. Nilai Absolut Math.abs()
    let saldoMinus = -450000;
    log += '2. Nilai Absolut dari ' + saldoMinus + ' ➔ ' + Math.abs(saldoMinus) + '<br><br>';

    // 3. Math.sign()
    log += '3. Tanda Angka Math.sign(-25) ➔ ' + Math.sign(-25) + ' (Negatif)';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Math.hypot(3, 4) menghitung akar kuadrat dari penjumlahan kuadrat argumen (rumus Pythagoras).',
      'Math.abs(-450000) selalu mengembalikan angka positif 450000.',
      'Math.sign() mempermudah pengecekan polaritas angka tanpa perlu if bercabang.'
    ],
    quiz: {
      question: 'Method Math apakah yang digunakan untuk menghitung sisi miring segitiga siku-siku (Pythagoras) secara langsung?',
      options: [
        'Math.pythagoras()',
        'Math.hypot()',
        'Math.triangle()',
        'Math.sqrtSum()'
      ],
      answer: 1,
      explanation: '`Math.hypot(a, b)` menghitung hipotenusa (sisi miring) dari segitiga siku-siku secara langsung.'
    },
    challenge: {
      title: 'Tantangan: Ambil Nilai Absolut',
      description: 'Gunakan `Math.abs(-15)` dan simpan ke `let positif = Math.abs(-15);`.',
      startingCode: `// Konversi ke absolut di bawah:\nlet positif = 0;`,
      solution: `let positif = Math.abs(-15);`
    }
  },

  // ── 90. JS MATH RANDOM ──────────────────────────────────────────────────
  {
    id: 'js-math-random',
    title: 'JS Math Random',
    chapter: 'JS Math',
    chapterId: 'js-chap-math',
    order: 90,
    overview: 'Kuasai pembuatan angka acak dengan Math.random(): rumus rentang bilangan bulat kustom (min hingga max), simulator dadu, pengacak pemenang undian, dan generator OTP 6 digit.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS MATH</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 90 / 90</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎲 Generator Bilangan Acak (Math.random)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>Math.random()</code> menghasilkan angka desimal acak semu antara <code>0</code> (inklusif) dan <code>1</code> (eksklusif). Untuk mendapatkan bilangan bulat dalam rentang tertentu, gunakan kombinasi dengan <code>Math.floor()</code>.
          </p>
        </div>

        <div class="p-4 bg-slate-900 text-slate-100 font-mono text-xs border border-slate-800 rounded-xl space-y-1">
          <div class="text-amber-400 font-bold">// Rumus Standar Angka Acak Integer (min s/d max inklusif):</div>
          <div class="text-emerald-400">function getRandomInt(min, max) {</div>
          <div class="pl-4 text-emerald-400">return Math.floor(Math.random() * (max - min + 1)) + min;</div>
          <div class="text-emerald-400">}</div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Math Random Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Generator Dadu & Kode OTP Otentikasi</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // Fungsi Helper Angka Acak Inklusif
    function acakRentang(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // 1. Lempar Dadu (1 s/d 6)
    let dadu = acakRentang(1, 6);
    log += '🎲 Hasil Lempar Dadu: <strong>' + dadu + '</strong><br><br>';

    // 2. Generator Kode OTP 6 Digit (100000 s/d 999999)
    let kodeOtp = acakRentang(100000, 999999);
    log += '🔐 <strong>Kode OTP Login Anda:</strong> ' + kodeOtp + '<br><br>';

    // 3. Pengacak Pemenang Undian dari Array
    const peserta = ['Rahmat', 'Alex', 'Siti', 'Budi', 'Dewi'];
    let pemenang = peserta[acakRentang(0, peserta.length - 1)];
    log += '🏆 <strong>Pemenang Undian: ' + pemenang + '</strong>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Math.random() * (max - min + 1) menghasilkan rentang yang sesuai.',
      'Math.floor() membulatkan ke bawah sehingga menghasilkan bilangan bulat acak.',
      'Teknik ini digunakan secara universal untuk pengacakan dadu, game, undian, dan token OTP.'
    ],
    quiz: {
      question: 'Berapakah rentang nilai desimal yang dihasilkan oleh pemanggilan fungsi Math.random() bawaan?',
      options: [
        '0 hingga 100',
        '0 (inklusif) hingga 1 (eksklusif)',
        '1 hingga 10',
        '-1 hingga 1'
      ],
      answer: 1,
      explanation: '`Math.random()` menghasilkan bilangan floating-point desimal acak antara 0 (termasuk 0) hingga kurang dari 1 (tidak termasuk 1).'
    },
    challenge: {
      title: 'Tantangan: Buat Generator Dadu (1-6)',
      description: 'Lengkapi rumus dadu `let dadu = Math.floor(Math.random() * 6) + 1;`.',
      startingCode: `// Lempar dadu 1-6 di bawah:\nlet dadu = 0;`,
      solution: `let dadu = Math.floor(Math.random() * 6) + 1;`
    }
  }
];
