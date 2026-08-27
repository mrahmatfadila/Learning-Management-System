module.exports = [
  // ── 258. META PROGRAMMING ───────────────────────────────────────────────
  {
    id: 'meta-programming',
    title: 'Meta Programming',
    chapter: 'JS Meta & Proxy',
    chapterId: 'js-chap-metaproxy',
    order: 258,
    overview: 'Konsep Metaprogramming di JavaScript: kemampuan program untuk menginspeksi, memodifikasi, dan mencegat perilaku internal bahasa itu sendiri melalui 3 pilar: Introspection, Self-Modification, dan Interception.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS META & PROXY</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 258 / 277</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔮 Pemrograman Tingkat Meta (Metaprogramming)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <strong>Metaprogramming</strong> adalah paradigma di mana kode dapat membaca atau mengubah jalannya eksekusi program itu sendiri. JavaScript mendukung ini melalui 3 pilar utama: <strong>Symbols</strong> (well-known symbols), <strong>Reflect API</strong> (introspeksi tingkat rendah), dan <strong>Proxy</strong> (intersepsi operasi objek).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Meta Programming Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>3 Pilar Metaprogramming di JavaScript</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    log += '<strong>3 Pilar Metaprogramming:</strong><br>';
    log += '1. <strong>Introspection:</strong> Membaca struktur internal (Object.keys, Reflect.has).<br>';
    log += '2. <strong>Self-Modification:</strong> Mengubah perilaku runtime (Symbols seperti Symbol.iterator).<br>';
    log += '3. <strong>Interception:</strong> Mencegat operasi properti menggunakan Objek <strong>Proxy</strong>.';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Metaprogramming adalah fondasi di balik framework modern seperti Vue 3 Reactivity System, MobX, dan ORM database.'
    ],
    quiz: {
      question: 'Manakah dari 3 pilar metaprogramming berikut yang bertugas mencegat (intercept) operasi get, set, dan delete pada sebuah objek?',
      options: [
        'Introspection',
        'Interception (via Proxy)',
        'Compilation',
        'Serialization'
      ],
      answer: 1,
      explanation: 'Pilar `Interception` dicapai melalui objek `Proxy` yang mencegat operasi fundamental pada objek.'
    },
    challenge: {
      title: 'Tantangan: Kenali Simbol Iterator',
      description: 'Simpan simbol iterator `const it = Symbol.iterator;`.',
      startingCode: `const it = Symbol.iterator;`,
      solution: `const it = Symbol.iterator;`
    }
  },

  // ── 259. META REFLECT ───────────────────────────────────────────────────
  {
    id: 'meta-reflect',
    title: 'Meta Reflect',
    chapter: 'JS Meta & Proxy',
    chapterId: 'js-chap-metaproxy',
    order: 259,
    overview: 'Objek Bawaan Reflect: method statis tingkat rendah (Reflect.get, Reflect.set, Reflect.has, Reflect.ownKeys) yang mengembalikan status boolean dan menyederhanakan kode.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS META & PROXY</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 259 / 277</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🪞 Operasi Introspeksi Tingkat Rendah: Reflect API</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>Reflect</code> adalah objek bawaan global yang menyediakan method statis untuk operasi yang dapat dicegat di JavaScript. Berbeda dengan operator <code>in</code> atau <code>delete</code>, method <code>Reflect</code> mengembalikan nilai boolean status keberhasilan yang elegan tanpa melempar fatal error.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Meta Reflect Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Reflect.get(), Reflect.set(), & Reflect.has()</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const materi = { id: 259, judul: 'Reflect API Mastery' };

    // Membaca properti dengan Reflect.get
    const judul = Reflect.get(materi, 'judul');
    log += '• Reflect.get: <strong>' + judul + '</strong><br>';

    // Memeriksa keberadaan properti dengan Reflect.has
    const adaId = Reflect.has(materi, 'id');
    log += '• Reflect.has("id"): <strong>' + adaId + '</strong><br>';

    // Menetapkan properti baru dengan Reflect.set (mengembalikan boolean status!)
    const berhasil = Reflect.set(materi, 'level', 'Advanced');
    log += '• Reflect.set Sukses? <strong>' + berhasil + '</strong> | Hasil: ' + JSON.stringify(materi);

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Reflect.set(target, key, val) mengembalikan true jika berhasil dan false jika gagal.',
      'Method Reflect dirancang untuk dipasangkan secara 1-to-1 dengan Proxy traps.'
    ],
    quiz: {
      question: 'Apakah nilai kembalian dari method Reflect.set(target, propertyKey, value) jika penetapan nilai berhasil?',
      options: [
        'Nilai objek target itu sendiri',
        'Boolean true',
        'Nama properti yang diset',
        'Angka 1'
      ],
      answer: 1,
      explanation: '`Reflect.set()` mengembalikan nilai boolean `true` jika berhasil menetapkan nilai properti.'
    },
    challenge: {
      title: 'Tantangan: Gunakan Reflect.get',
      description: 'Lakukan `Reflect.get(obj, "k");`.',
      startingCode: `function getProp(obj, k) {\n  return Reflect.get(obj, k);\n}`,
      solution: `function getProp(obj, k) {\n  return Reflect.get(obj, k);\n}`
    }
  },

  // ── 260. META PROXY ─────────────────────────────────────────────────────
  {
    id: 'meta-proxy',
    title: 'Meta Proxy',
    chapter: 'JS Meta & Proxy',
    chapterId: 'js-chap-metaproxy',
    order: 260,
    overview: 'Objek Proxy di JavaScript: pembungkusan target objek dengan handler traps (get, set, has, deleteProperty), validasi mutasi otomatis, dan fondasi arsitektur Reactive State.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS META & PROXY</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 260 / 277</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛡️ Mencegat Akses Data dengan JavaScript Proxy</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>new Proxy(target, handler)</code> membungkus sebuah objek dan memungkinkan kita menyisipkan logika khusus (*traps*) setiap kali ada kode yang mencoba membaca (<code>get</code>), mengubah (<code>set</code>), atau menghapus (<code>deleteProperty</code>) properti objek tersebut.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Meta Proxy Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Reaktifitas & Validasi Otomatis dengan Proxy</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const targetUser = { nama: 'Rahmat', umur: 24 };

    // Handler dengan Traps get dan set
    const userProxy = new Proxy(targetUser, {
      get(target, prop) {
        log += '👀 Membaca properti: "' + String(prop) + '"<br>';
        return Reflect.get(target, prop);
      },
      set(target, prop, value) {
        if (prop === 'umur' && (typeof value !== 'number' || value < 0)) {
          log += '❌ <strong>Validasi Proxy Ditolak:</strong> Umur harus angka positif!<br>';
          return false;
        }
        log += '✏️ Mengubah "' + String(prop) + '" menjadi: ' + value + ' ✅<br>';
        return Reflect.set(target, prop, value);
      }
    });

    log += '• Nama: ' + userProxy.nama + '<br>';
    userProxy.umur = 25; // Valid
    userProxy.umur = -10; // Ditolak oleh trap set!

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Proxy adalah inti dari sistem Reactivity di Vue.js 3, menggantikan Object.defineProperty yang memiliki banyak batasan pada array.'
    ],
    quiz: {
      question: 'Dua argumen apakah yang wajib diberikan saat membuat objek Proxy baru (new Proxy(arg1, arg2))?',
      options: [
        'target (objek asli) dan handler (objek berisi traps)',
        'nama dan fungsi',
        'url dan method',
        'key dan value'
      ],
      answer: 0,
      explanation: 'Sintaks pembuatan Proxy menerima `target` (objek yang dibungkus) dan `handler` (objek konfigurasi traps).'
    },
    challenge: {
      title: 'Tantangan: Buat Proxy Sederhana',
      description: 'Lakukan `return new Proxy(target, {});`.',
      startingCode: `function wrapProxy(target) {\n  return new Proxy(target, {});\n}`,
      solution: `function wrapProxy(target) {\n  return new Proxy(target, {});\n}`
    }
  },

  // ── 261. META REFERENCE ─────────────────────────────────────────────────
  {
    id: 'meta-reference',
    title: 'Meta Reference',
    chapter: 'JS Meta & Proxy',
    chapterId: 'js-chap-metaproxy',
    order: 261,
    overview: 'Kamus referensi lengkap 13 Proxy Traps & method Reflect pasangannya: get, set, has, deleteProperty, apply, construct, getPrototypeOf, setPrototypeOf, isExtensible, preventExtensions, getOwnPropertyDescriptor, defineProperty, ownKeys.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS META & PROXY</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 261 / 277</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📚 Kamus 13 Traps Proxy & Reflect Lengkap</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Tabel berikut merangkum seluruh 13 traps resmi yang dapat dicegat oleh objek Proxy dan dipanggil secara langsung melalui <code>Reflect</code>.
          </p>
        </div>

        <div class="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-xl text-xs">
          <table class="w-full text-left">
            <thead class="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white">
              <tr>
                <th class="p-3">Trap Name</th>
                <th class="p-3">Operasi yang Dicegat</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-800 font-mono text-slate-600 dark:text-slate-300">
              <tr><td class="p-3 font-bold text-amber-500">get</td><td>Membaca nilai properti (proxy.prop, proxy['prop']).</td></tr>
              <tr><td class="p-3 font-bold text-amber-500">set</td><td>Menetapkan nilai properti (proxy.prop = val).</td></tr>
              <tr><td class="p-3 font-bold text-amber-500">has</td><td>Operator 'in' (prop in proxy).</td></tr>
              <tr><td class="p-3 font-bold text-amber-500">deleteProperty</td><td>Operator 'delete' (delete proxy.prop).</td></tr>
              <tr><td class="p-3 font-bold text-amber-500">apply</td><td>Pemanggilan fungsi (proxy(...args)).</td></tr>
              <tr><td class="p-3 font-bold text-amber-500">construct</td><td>Instansiasi dengan new (new proxy(...args)).</td></tr>
              <tr><td class="p-3 font-bold text-amber-500">ownKeys</td><td>Object.keys(), Object.getOwnPropertyNames().</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Meta Reference Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Pencegatan Function Call dengan Trap apply</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    function hitungDiskon(harga, persen) {
      return harga - (harga * persen / 100);
    }

    // Mencegat pemanggilan fungsi menggunakan Proxy trap apply
    const proxyDiskon = new Proxy(hitungDiskon, {
      apply(target, thisArg, args) {
        log += '⚡ Trap apply terpanggil! Parameter: [' + args.join(', ') + ']<br>';
        return Reflect.apply(target, thisArg, args);
      }
    });

    const hasil = proxyDiskon(100000, 20);
    log += '• Hasil Akhir: <strong>Rp ' + hasil.toLocaleString('id-ID') + '</strong> ✅';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Trap apply memungkinkan profiling otomatis dan logging execution time pada pemanggilan fungsi apa pun.'
    ],
    quiz: {
      question: 'Trap Proxy manakah yang digunakan untuk mencegat operator delete saat sebuah properti dihapus?',
      options: [
        'removeProperty',
        'deleteProperty',
        'drop',
        'destroy'
      ],
      answer: 1,
      explanation: 'Trap `deleteProperty` mencegat operasi `delete obj.prop`.'
    },
    challenge: {
      title: 'Tantangan: Buat Handler Delete Property',
      description: 'Lengkapi handler `{ deleteProperty(t, p) { return Reflect.deleteProperty(t, p); } }`.',
      startingCode: `const h = {\n  deleteProperty(t, p) {\n    return Reflect.deleteProperty(t, p);\n  }\n};`,
      solution: `const h = {\n  deleteProperty(t, p) {\n    return Reflect.deleteProperty(t, p);\n  }\n};`
    }
  }
];
