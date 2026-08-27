module.exports = [
  // ── 123. JS STYLE GUIDE ─────────────────────────────────────────────────
  {
    id: 'js-style-guide',
    title: 'JS Style Guide',
    chapter: 'JS Style Guide',
    chapterId: 'js-chap-styleguide',
    order: 123,
    overview: 'Standar konvensi kode JavaScript industri: Airbnb Style Guide, Google JS Guide, konvensi penamaan CamelCase variabel/fungsi, PascalCase Class/Komponen, dan UPPER_SNAKE_CASE konstanta.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS STYLE GUIDE</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 123 / 126</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📐 Pedoman Gaya Penulisan Kode (Style Guide)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Menulis kode yang berjalan saja tidak cukup. Kode harus bersih, konsisten, dan mudah dibaca oleh tim pengembang lain. Mengikuti panduan gaya standar industri (seperti Airbnb Style Guide) adalah tanda profesionalisme software engineer.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800"><strong class="text-amber-500">camelCase</strong>: Variabel dan fungsi (<code>totalHarga</code>, <code>hitungDiskon()</code>).</div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800"><strong class="text-amber-500">PascalCase</strong>: Class dan Konstruktor (<code>UserAccount</code>, <code>PaymentGateway</code>).</div>
          <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800"><strong class="text-amber-500">UPPER_SNAKE</strong>: Konstanta global (<code>MAX_UPLOAD_SIZE</code>, <code>API_KEY</code>).</div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Style Guide Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Contoh Penerapan Konvensi Penamaan Standar</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. Konstanta Global Konfigurasi (UPPER_SNAKE_CASE)
    const DEFAULT_TIMEOUT_MS = 5000;
    const APP_VERSION = 'v4.0.0';

    // 2. Class & Konstruktor (PascalCase)
    class KursusOnline {
      constructor(judulKursus, instrukturNama) {
        this.judulKursus = judulKursus; // camelCase
        this.instrukturNama = instrukturNama;
      }

      // 3. Method Fungsi (camelCase)
      getInfoLengkap() {
        return this.judulKursus + ' bersama ' + this.instrukturNama;
      }
    }

    const kursusJS = new KursusOnline('Mastering JavaScript', 'Rahmat Fadila');
    log += '• Versi Aplikasi: ' + APP_VERSION + '<br>';
    log += '• Info Modul: <strong>' + kursusJS.getInfoLengkap() + '</strong>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Konvensi penamaan yang konsisten memudahkan identifikasi tipe entitas (konstanta, class, atau variabel/method) hanya dengan melihat gaya tulisannya.'
    ],
    quiz: {
      question: 'Format penamaan apakah yang menjadi konvensi standar untuk variabel dan fungsi biasa di JavaScript?',
      options: [
        'kebab-case',
        'snake_case',
        'camelCase',
        'PascalCase'
      ],
      answer: 2,
      explanation: 'Konvensi standar JavaScript untuk variabel dan method adalah `camelCase` (huruf pertama kecil, kata kedua kapital).'
    },
    challenge: {
      title: 'Tantangan: Deklarasi Konstanta Global',
      description: 'Deklarasikan konstanta global `const MAX_USERS = 100;`.',
      startingCode: `// Deklarasi konstanta di bawah:\n`,
      solution: `const MAX_USERS = 100;`
    }
  },

  // ── 124. JS BEST PRACTICES ──────────────────────────────────────────────
  {
    id: 'js-best-practices',
    title: 'JS Best Practices',
    chapter: 'JS Style Guide',
    chapterId: 'js-chap-styleguide',
    order: 124,
    overview: 'Kuasai prinsip Clean Code JavaScript: DRY (Don\'t Repeat Yourself), KISS, Pure Functions, Immutability, dan pola Early Return Guard Clauses.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS STYLE GUIDE</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 124 / 126</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏆 Kaidah Praktik Terbaik (Clean Code Best Practices)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Praktik terbaik mencakup: deklarasi variabel dengan <code>const</code>/<code>let</code>, selalu menggunakan kesetaraan ketat <code>===</code>, menghindari *side-effects* dengan Pure Functions, dan menghindari nesting kode yang terlalu dalam.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Best Practices Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Pola Pure Function & Immutability</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // Pure Function: Tidak mengubah data input asli dan selalu menghasilkan output konsisten
    function tambahDiskon(daftarBarang, persenDiskon) {
      return daftarBarang.map(item => ({
        ...item,
        hargaAkhir: item.harga * (1 - persenDiskon / 100)
      }));
    }

    const katalogAsli = [
      { id: 1, nama: 'Kaos Coding', harga: 100000 }
    ];

    const katalogDiskon = tambahDiskon(katalogAsli, 20);

    log += 'Katalog Asli (Tetap Murni Rp 100.000): ' + katalogAsli[0].harga + ' ✅<br>';
    log += 'Katalog Baru Diskon 20%: <strong>Rp ' + katalogDiskon[0].hargaAkhir.toLocaleString('id-ID') + '</strong>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Pure Function tidak mengubah array katalogAsli secara langsung, melainkan mengembalikan array baru (Immutability).',
      'Pola ini mencegah side-effects dan bug tersembunyi pada aplikasi skala besar.'
    ],
    quiz: {
      question: 'Apa definisi dari Pure Function di JavaScript?',
      options: [
        'Fungsi yang tidak memiliki parameter',
        'Fungsi yang dengan input yang sama selalu menghasilkan output yang sama tanpa memicu efek samping (side-effects)',
        'Fungsi yang ditulis dalam satu baris saja',
        'Fungsi yang otomatis dieksekusi saat halaman dimuat'
      ],
      answer: 1,
      explanation: 'Pure Function adalah fungsi yang bebas efek samping (*no side-effects*) dan selalu mengembalikan hasil yang identik untuk input argumen yang sama.'
    },
    challenge: {
      title: 'Tantangan: Buat Pure Function Penjumlahan',
      description: 'Buat pure function `function tambah(a, b) { return a + b; }`.',
      startingCode: `// Tulis pure function di bawah:\n`,
      solution: `function tambah(a, b) {\n  return a + b;\n}`
    }
  },

  // ── 125. JS MISTAKES ────────────────────────────────────────────────────
  {
    id: 'js-mistakes',
    title: 'JS Mistakes',
    chapter: 'JS Style Guide',
    chapterId: 'js-chap-styleguide',
    order: 125,
    overview: 'Hindari 4 jebakan kesalahan fatal pemula: presisi bilangan pecahan (0.1 + 0.2 !== 0.3), variabel global tidak disengaja, lupa tanda titik koma pada baris sebelum IIFE, dan mutasi array saat perulangan aktif.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS STYLE GUIDE</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 125 / 126</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚠️ Jebakan Kesalahan Fatal yang Wajib Dihindari</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            JavaScript memiliki beberapa keanehan bawaan. Mengetahui jebakan-jebakan umum ini akan menghindarkan Anda dari bug runtime yang membingungkan.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Common Mistakes Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Jebakan Presisi Pecahan (0.1 + 0.2) & Solusinya</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. Jebakan Floating Point Binary Presisi
    let kalkulasiSalah = 0.1 + 0.2;
    log += '• 0.1 + 0.2 ➔ <strong>' + kalkulasiSalah + '</strong> (Bukan 0.3 persis!) ⚠️<br>';
    log += '• 0.1 + 0.2 === 0.3 ➔ <strong>' + (0.1 + 0.2 === 0.3) + '</strong><br><br>';

    // Solusi: Menggunakan Number.EPSILON atau pembulatan Math.round
    let isEqual = Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON;
    log += '• Solusi Number.EPSILON: <strong>' + isEqual + '</strong> ✅ (Aman & Akurat!)';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Dalam standar biner 64-bit IEEE 754, angka 0.1 dan 0.2 adalah pecahan berulang tak terhingga sehingga menghasilkan 0.30000000000000004.',
      'Gunakan perbandingan selisih dengan Number.EPSILON untuk membandingkan kesetaraan angka desimal secara aman.'
    ],
    quiz: {
      question: 'Berapakah hasil dari evaluasi 0.1 + 0.2 === 0.3 di JavaScript?',
      options: [
        'true',
        'false (karena floating point imprecision menghasilkan 0.30000000000000004)',
        'undefined',
        'NaN'
      ],
      answer: 1,
      explanation: 'Karena representasi floating point biner IEEE 754, `0.1 + 0.2` menghasilkan `0.30000000000000004` sehingga perbandingan dengan `0.3` bernilai `false`.'
    },
    challenge: {
      title: 'Tantangan: Perbandingan Pecahan Aman',
      description: 'Lengkapi perbandingan aman menggunakan `Math.abs(a - b) < Number.EPSILON`.',
      startingCode: `function cekPecahan(a, b) {\n  return Math.abs(a - b) < Number.EPSILON;\n}`,
      solution: `function cekPecahan(a, b) {\n  return Math.abs(a - b) < Number.EPSILON;\n}`
    }
  },

  // ── 126. JS PERFORMANCE ─────────────────────────────────────────────────
  {
    id: 'js-performance',
    title: 'JS Performance',
    chapter: 'JS Style Guide',
    chapterId: 'js-chap-styleguide',
    order: 126,
    overview: 'Kuasai teknik optimasi performa JavaScript: Debounce & Throttle pada event interaksi, DocumentFragment untuk meminimalisir DOM Reflow/Repaint, dan pencegahan Memory Leaks.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS STYLE GUIDE</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 126 / 126</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚡ Optimasi Performa Eksekusi (High Performance JS)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Manipulasi DOM yang terlalu sering memicu <em>Reflow</em> dan <em>Repaint</em> yang membebani GPU/CPU browser. Gunakan teknik <strong>DocumentFragment</strong> dan <strong>Debouncing</strong> untuk menjaga aplikasi berjalan mulus pada 60 FPS.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Performance Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Pola Debounce pada Input Pencarian Real-Time</h2>
  <input type="text" id="searchInput" placeholder="Ketik kata kunci pencarian..." style="padding: 10px; width: 300px; border-radius: 6px; border: 1px solid #ccc;">
  <div id="output" style="margin-top: 15px; background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    // Fungsi Debounce: Menunda eksekusi API sampai user selesai mengetik (jeda 500ms)
    function debounce(callback, jedaMs = 500) {
      let timer;
      return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => callback.apply(this, args), jedaMs);
      };
    }

    function kirimPencarianAPI(query) {
      document.getElementById('output').innerHTML = '🚀 Request API Terkirim untuk kata kunci: <strong>"' + query + '"</strong> (Hemat Bandwidth!)';
    }

    const pencarianDebounced = debounce((e) => {
      kirimPencarianAPI(e.target.value);
    }, 500);

    document.getElementById('searchInput').addEventListener('input', pencarianDebounced);
  </script>

</body>
</html>`,
    codeExplanation: [
      'Fungsi debounce menunda pengiriman request API pencarian hingga pengguna berhenti mengetik selama 500 milidetik.',
      'Ini mencegah puluhan request API sia-sia terkirim pada setiap ketukan keyboard, menghemat bandwidth server dan RAM browser.'
    ],
    quiz: {
      question: 'Teknik optimasi manakah yang digunakan untuk menunda eksekusi fungsi hingga jeda waktu tertentu setelah event terakhir berhenti dipicu?',
      options: [
        'Debouncing',
        'Throttling',
        'Memoization',
        'Currying'
      ],
      answer: 0,
      explanation: '`Debouncing` menunda eksekusi fungsi hingga tidak ada lagi event baru yang dipicu dalam durasi interval waktu yang ditentukan.'
    },
    challenge: {
      title: 'Tantangan: Buat Debounce Helper Sederhana',
      description: 'Lengkapi struktur debounce timer: `clearTimeout(timer); timer = setTimeout(fn, 300);`.',
      startingCode: `let timer;\nfunction debounceTrigger(fn) {\n  clearTimeout(timer);\n  timer = setTimeout(fn, 300);\n}`,
      solution: `let timer;\nfunction debounceTrigger(fn) {\n  clearTimeout(timer);\n  timer = setTimeout(fn, 300);\n}`
    }
  }
];
