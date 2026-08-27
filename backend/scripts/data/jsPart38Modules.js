module.exports = [
  // ── 253. MODULES INTRO ──────────────────────────────────────────────────
  {
    id: 'modules-intro',
    title: 'Modules Intro',
    chapter: 'JS Modules',
    chapterId: 'js-chap-modules',
    order: 253,
    overview: 'Pengenalan JavaScript Modules (ESM): evolusi sistem modular JavaScript dari script tag klasik & CommonJS (CJS) menuju standar ES Modules native dengan <script type="module">.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS MODULES</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 253 / 257</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📦 Standar Modular JavaScript: ES Modules (ESM)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Sebelum ES6, pengembang terpaksa menggunakan tag <code>&lt;script&gt;</code> berulang yang mencemari global namespace. <strong>ES Modules</strong> memisahkan kode ke dalam berkas-berkas terisolasi yang otomatis berjalan dalam <strong>Strict Mode</strong> dan hanya mengekspos apa yang di-export secara eksplisit.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Modules Intro Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Penyertaan Modul di HTML</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <!-- Memuat berkas JavaScript sebagai modul -->
  <script type="module">
    const versiModul = 'ES2026 Module Standard';
    document.getElementById('output').innerHTML = 
      '• Modul Berhasil Dimuat: <strong>' + versiModul + '</strong><br>' +
      '• Otomatis berjalan dalam <strong>Strict Mode</strong> murni! ✅';
  </script>

</body>
</html>`,
    codeExplanation: [
      'Atribut type="module" pada tag script memberi tahu browser untuk memperlakukan script sebagai modul dengan scope terisolasi.',
      'Modul dieksekusi secara otomatis dengan atribut defer bawaan.'
    ],
    quiz: {
      question: 'Atribut apakah yang wajib ditambahkan pada tag <script> di HTML agar file JavaScript dieksekusi sebagai ES Module?',
      options: [
        'type="javascript"',
        'type="module"',
        'mode="esm"',
        'async="module"'
      ],
      answer: 1,
      explanation: 'Atribut `type="module"` menandakan bahwa file script adalah ES Module.'
    },
    challenge: {
      title: 'Tantangan: Buat Tag Script Module',
      description: 'Simpan string atribut `"type=\\"module\\""` ke `const attr = \'type="module"\';`.',
      startingCode: `const attr = "";`,
      solution: `const attr = 'type="module"';`
    }
  },

  // ── 254. MODULES EXPORT ─────────────────────────────────────────────────
  {
    id: 'modules-export',
    title: 'Modules Export',
    chapter: 'JS Modules',
    chapterId: 'js-chap-modules',
    order: 254,
    overview: 'Mendalami Ekspor Modul: Named Exports (inline export & export clause) vs Default Export (export default), serta panduan memilih pola ekspor yang tepat.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS MODULES</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 254 / 257</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📤 Named Exports vs Default Export</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Sebuah modul dapat memiliki <strong>banyak Named Exports</strong> dan <strong>maksimal 1 Default Export</strong>. Named Exports cocok untuk sekumpulan fungsi utilitas, sedangkan Default Export ideal untuk satu komponen utama.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Modules Export Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Anatomi Sintaks Ekspor Modul</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    log += '<strong>Contoh Named Exports:</strong><br>';
    log += '<code>export const NAMA_APP = "LMS Portal";</code><br>';
    log += '<code>export function hitungTotal() { ... }</code><br><br>';

    log += '<strong>Contoh Default Export:</strong><br>';
    log += '<code>export default class UserAuthService { ... }</code>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Named exports harus di-import dengan nama yang sama persis (atau menggunakan alias as).',
      'Default export dapat di-import dengan nama bebas apa pun.'
    ],
    quiz: {
      question: 'Berapa jumlah maksimal Default Export yang diizinkan dalam satu berkas file modul JavaScript?',
      options: [
        'Tidak terbatas',
        'Tepat 1 (Satu)',
        'Maksimal 5',
        'Nol (Tidak boleh ada)'
      ],
      answer: 1,
      explanation: 'Satu file modul JavaScript hanya boleh memiliki tepat maksimal satu `export default`.'
    },
    challenge: {
      title: 'Tantangan: Ekspor Variabel',
      description: 'Lengkapi sintaks `export const API_KEY = "SECRET";`.',
      startingCode: `export const API_KEY = "SECRET";`,
      solution: `export const API_KEY = "SECRET";`
    }
  },

  // ── 255. MODULES IMPORT ─────────────────────────────────────────────────
  {
    id: 'modules-import',
    title: 'Modules Import',
    chapter: 'JS Modules',
    chapterId: 'js-chap-modules',
    order: 255,
    overview: 'Mengimpor Modul: Named Imports dengan kurung kurawal { a, b }, Default Import, menggabungkan keduanya, serta penggunaan kata kunci as untuk mencegah tabrakan nama.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS MODULES</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 255 / 257</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📥 Sintaks Impor & Penggantian Nama (Aliasing)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Kata kunci <code>import</code> memuat binding dari modul lain. Jika dua modul mengekspor nama fungsi yang sama (misal <code>render</code>), kita bisa menggunakan alias <code>as</code> (contoh: <code>import { render as renderCanvas }</code>).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Modules Import Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Contoh Pola Impor Modul</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    log += '<strong>Pola Impor Standar:</strong><br>';
    log += '• Named: <code>import { formatRupiah } from "./format.js";</code><br>';
    log += '• Alias: <code>import { hitung as hitungDiskon } from "./diskon.js";</code><br>';
    log += '• Default: <code>import AuthService from "./auth.js";</code><br>';
    log += '• Gabungan: <code>import AuthService, { TOKEN } from "./auth.js";</code>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Import binding bersifat Read-Only (Live Binding) yang tidak dapat dimutasi secara langsung oleh modul pengimpor.'
    ],
    quiz: {
      question: 'Kata kunci apakah yang digunakan saat melakukan Named Import untuk memberikan nama alias baru pada fungsi yang diimpor?',
      options: [
        'alias',
        'as',
        'to',
        'rename'
      ],
      answer: 1,
      explanation: 'Kata kunci `as` digunakan untuk memberikan nama alias baru pada import (contoh: `import { x as y }`).'
    },
    challenge: {
      title: 'Tantangan: Tulis Import Alias',
      description: 'Lengkapi sintaks import: import { a as b } from "./m.js";',
      startingCode: `const imp = 'import { a as b } from "./m.js";';`,
      solution: `const imp = 'import { a as b } from "./m.js";';`
    }
  },

  // ── 256. MODULES NAMESPACE ──────────────────────────────────────────────
  {
    id: 'modules-namespace',
    title: 'Modules Namespace',
    chapter: 'JS Modules',
    chapterId: 'js-chap-modules',
    order: 256,
    overview: 'Namespace Imports (import * as Namespace) dan Re-exporting: mengemas seluruh ekspor modul ke dalam satu objek namespace dan pola Barrel File (index.js).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS MODULES</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 256 / 257</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌐 Namespace Imports & Barrel Files Pattern</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Dengan <code>import * as MathUtils from './math.js'</code>, seluruh fungsi di dalam modul akan dikemas rapi sebagai properti dari objek <code>MathUtils</code>. Pola ini sangat populer untuk membangun SDK dan library besar.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Modules Namespace Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Pola Barrel File & Namespace</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    log += '<strong>Namespace Import:</strong><br>';
    log += '<code>import * as LMS from "./lmsCore.js";</code><br>';
    log += '➔ Dipanggil: <code>LMS.hitungNilai()</code>, <code>LMS.kirimSertifikat()</code><br><br>';

    log += '<strong>Barrel File Pattern (index.js):</strong><br>';
    log += '<code>export * from "./auth.js";</code><br>';
    log += '<code>export * from "./kursus.js";</code>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Barrel file menyederhanakan struktur import bagi konsumen library sehingga cukup mengimpor dari satu titik berkas utama.'
    ],
    quiz: {
      question: 'Sintaks manakah yang digunakan untuk mengimpor seluruh ekspor dari sebuah modul ke dalam satu objek namespace tunggal?',
      options: [
        'import all from "./modul.js"',
        'import * as NamaNamespace from "./modul.js"',
        'import { * } from "./modul.js"',
        'import @ from "./modul.js"'
      ],
      answer: 1,
      explanation: 'Sintaks `import * as Namespace from "./path.js"` mengumpulkan semua ekspor ke dalam objek tunggal `Namespace`.'
    },
    challenge: {
      title: 'Tantangan: Namespace Import',
      description: 'Lengkapi sintaks `import * as Utils from "./u.js";`.',
      startingCode: `const s = 'import * as Utils from "./u.js";';`,
      solution: `const s = 'import * as Utils from "./u.js";';`
    }
  },

  // ── 257. MODULES DYNAMIC ────────────────────────────────────────────────
  {
    id: 'modules-dynamic',
    title: 'Modules Dynamic',
    chapter: 'JS Modules',
    chapterId: 'js-chap-modules',
    order: 257,
    overview: 'Dynamic Import: fungsi import() berbasis Promise untuk Code Splitting, Lazy Loading modul hanya saat dibutuhkan, dan optimasi performa aplikasi web modern.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS MODULES</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 257 / 257 (FINAL MATERI JS LENGKAP)</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚡ Code Splitting & Lazy Loading (Dynamic import())</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Berbeda dengan import statis yang selalu di-load di awal, <strong>Dynamic Import</strong> <code>import('./modul.js')</code> mengembalikan sebuah Promise dan hanya mengunduh file modul saat dibutuhkan (misal saat pengguna mengklik tombol ekspor PDF atau membuka modal).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Modules Dynamic Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Simulasi Lazy Loading Modul saat Tombol Diklik</h2>
  <button onclick="muatModulLazy()" style="padding: 10px 20px; background: #0284c7; color: white; border: none; border-radius: 6px; font-weight: bold; cursor: pointer;">
    📥 Unduh Modul Sertifikat PDF (On-Demand)
  </button>
  <div id="output" style="margin-top: 15px; background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    async function muatModulLazy() {
      const output = document.getElementById('output');
      output.innerHTML = '⏳ Mengunduh modul secara asinkronus on-demand...';

      // Simulasi dynamic import
      const modulPalsu = await new Promise(r => setTimeout(() => r({ buatSertifikat: () => 'Sertifikat LMS 257 Materi Siap Diunduh!' }), 300));

      output.innerHTML = '🎉 <strong>' + modulPalsu.buatSertifikat() + '</strong> ✅';
    }
  </script>

</body>
</html>`,
    codeExplanation: [
      'Dynamic import import("./file.js") membagi bundle aplikasi menjadi potongan-potongan kecil (chunks) sehingga initial load halaman web sangat cepat.'
    ],
    quiz: {
      question: 'Tipe nilai apakah yang dikembalikan saat memanggil fungsi Dynamic Import import("./path.js")?',
      options: [
        'Objek Promise yang me-resolve modul tersebut',
        'Nilai null',
        'Elemen DOM',
        'String URL'
      ],
      answer: 0,
      explanation: 'Fungsi `import(specifier)` mengembalikan sebuah objek `Promise` yang me-resolve modul yang diminta.'
    },
    challenge: {
      title: 'Tantangan Terakhir: Dynamic Import',
      description: 'Lakukan await dynamic import `const mod = await import("./mod.js");`.',
      startingCode: `async function loadMod() {\n  let mod = await import("./mod.js");\n  return mod;\n}`,
      solution: `async function loadMod() {\n  let mod = await import("./mod.js");\n  return mod;\n}`
    }
  }
];
