module.exports = [
  // ── 80. JS MAPS ─────────────────────────────────────────────────────────
  {
    id: 'js-maps',
    title: 'JS Maps',
    chapter: 'JS Maps',
    chapterId: 'js-chap-maps',
    order: 80,
    overview: 'Kuasai struktur data Map di JavaScript: koleksi pasangan kunci-nilai berurutan di mana kunci dapat berupa tipe data apa saja (objek, fungsi, boolean), serta perbandingan Map vs Objek biasa.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS MAPS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 80 / 90</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🗺️ Koleksi Key-Value Fleksibel (JavaScript Map)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>Map</code> menyimpan pasangan kunci-nilai dan mengingat urutan penyisipan aslinya. Tidak seperti objek JavaScript biasa yang kuncinya harus bertipe String/Symbol, kunci pada <code>Map</code> dapat berupa <strong>tipe data apa pun</strong> (termasuk Objek, Array, dan Fungsi).
          </p>
        </div>

        <div class="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-xl text-xs">
          <table class="w-full text-left">
            <thead class="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white">
              <tr>
                <th class="p-3">Fitur</th>
                <th class="p-3">JavaScript Map</th>
                <th class="p-3">Objek Biasa {}</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-800 font-mono text-slate-600 dark:text-slate-300">
              <tr><td class="p-3 font-bold">Tipe Kunci (Keys)</td><td>Tipe data apa saja (Objek/Fungsi)</td><td>Hanya String atau Symbol</td></tr>
              <tr><td class="p-3 font-bold">Menghitung Ukuran</td><td>Mudah via properti <code>map.size</code></td><td>Manual (Object.keys(obj).length)</td></tr>
              <tr><td class="p-3 font-bold">Performa</td><td>Sangat cepat untuk sering add/delete</td><td>Kurang dioptimalkan untuk frekuensi tinggi</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Maps Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Penyimpanan Data dengan Objek Sebagai Kunci (Map)</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const userRoles = new Map();

    const user1 = { id: 1, nama: 'Rahmat' };
    const user2 = { id: 2, nama: 'Fadila' };

    // Menggunakan objek user1 dan user2 sebagai KUNCI di dalam Map!
    userRoles.set(user1, 'SUPER_ADMIN');
    userRoles.set(user2, 'STUDENT');

    log += 'Role Rahmat: <strong>' + userRoles.get(user1) + '</strong><br>';
    log += 'Role Fadila: <strong>' + userRoles.get(user2) + '</strong><br><br>';
    log += 'Total Pasangan di Map (.size): ' + userRoles.size;

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'userRoles.set(user1, "SUPER_ADMIN") mengaitkan objek user1 secara langsung sebagai kunci unik.',
      'userRoles.get(user1) mengambil kembali value yang tersimpan.',
      'userRoles.size langsung mengembalikan jumlah pasangan kunci-nilai tanpa perlu kalkulasi loop manual.'
    ],
    quiz: {
      question: 'Manakah keunggulan utama dari Map dibandingkan Objek literal standar {} di JavaScript?',
      options: [
        'Map tidak bisa menyimpan nilai string',
        'Kunci (key) pada Map bisa berupa tipe data apa saja termasuk Objek dan Fungsi',
        'Map otomatis mengubah teks menjadi kapital',
        'Map hanya bisa menampung 10 elemen'
      ],
      answer: 1,
      explanation: 'Pada Map, tipe kunci tidak dibatasi hanya pada string/symbol; Anda bisa menggunakan objek atau fungsi sebagai key.'
    },
    challenge: {
      title: 'Tantangan: Buat Map Baru',
      description: 'Buat Map baru `const m = new Map();` dan set pasangan `m.set("id", 100);`.',
      startingCode: `// Inisialisasi Map di bawah:\nconst m = new Map();\n`,
      solution: `const m = new Map();\nm.set("id", 100);`
    }
  },

  // ── 81. JS MAP METHODS ──────────────────────────────────────────────────
  {
    id: 'js-map-methods',
    title: 'JS Map Methods',
    chapter: 'JS Maps',
    chapterId: 'js-chap-maps',
    order: 81,
    overview: 'Kuasai seluruh method esensial Map: set(k, v), get(k), has(k), delete(k), clear(), properti size, serta iterasi entries(), keys(), dan values().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS MAPS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 81 / 90</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚙️ Method Manipulasi & Iterasi Map</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Map menyediakan antarmuka CRUD (*Create, Read, Update, Delete*) terstandarisasi yang sangat bersih dan mudah diiterasi menggunakan <code>for...of</code>.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Map Methods Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Katalog Harga Produk dengan Map.entries()</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const daftarHarga = new Map();
    daftarHarga.set('Laptop Gaming', 18500000);
    daftarHarga.set('Mechanical Keyboard', 750000);
    daftarHarga.set('Wireless Mouse', 250000);

    // 1. has() & get()
    if (daftarHarga.has('Laptop Gaming')) {
      log += 'Harga Laptop: Rp ' + daftarHarga.get('Laptop Gaming').toLocaleString('id-ID') + '<br><br>';
    }

    // 2. Iterasi entries() dengan for...of
    log += '<strong>Daftar Semua Barang & Harga (entries):</strong><br>';
    for (let [barang, harga] of daftarHarga.entries()) {
      log += '&nbsp;&nbsp;🏷️ ' + barang + ' ➔ Rp ' + harga.toLocaleString('id-ID') + '<br>';
    }

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'daftarHarga.set(k, v) menyimpan pasangan nama barang dan harga.',
      'daftarHarga.has("Laptop Gaming") memeriksa keberadaan kunci secara instan.',
      'for (let [barang, harga] of daftarHarga.entries()) mempermudah iterasi pasangan key-value.'
    ],
    quiz: {
      question: 'Method apa yang digunakan untuk membaca nilai value dari suatu kunci di dalam Map?',
      options: [
        'map.read(key)',
        'map.get(key)',
        'map.fetch(key)',
        'map.value(key)'
      ],
      answer: 1,
      explanation: 'Method `map.get(key)` digunakan untuk mengambil nilai value yang tersimpan pada kunci tertentu di Map.'
    },
    challenge: {
      title: 'Tantangan: Baca Nilai dari Map dengan get()',
      description: 'Ambil nilai dari kunci `"status"` pada `const m = new Map([["status", "active"]]);` menggunakan `m.get("status")`.',
      startingCode: `const m = new Map([["status", "active"]]);\n// Ambil nilai status di bawah:\nlet s = "";`,
      solution: `const m = new Map([["status", "active"]]);\nlet s = m.get("status");`
    }
  },

  // ── 82. JS MAP WEAKMAP ──────────────────────────────────────────────────
  {
    id: 'js-map-weakmap',
    title: 'JS Map WeakMap',
    chapter: 'JS Maps',
    chapterId: 'js-chap-maps',
    order: 82,
    overview: 'Pelajari WeakMap: struktur data di mana seluruh kunci (keys) WAJIB berupa objek dengan referensi lemah, ideal untuk menyimpan data privat modul tanpa memicu kebocoran memori.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS MAPS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 82 / 90</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔒 Metadata Privat & Manajemen Memori dengan WeakMap</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>WeakMap</code> adalah varian Map di mana <strong>kunci harus berupa Objek</strong>. Kunci dipegang secara lemah: jika objek kunci tersebut dihapus dari referensi aplikasi, entri di dalam WeakMap akan otomatis dihapus oleh Garbage Collector.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS WeakMap Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Penyimpanan Data Metadata Privat (WeakMap)</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const privateVisitCount = new WeakMap();

    let userSession = { token: 'AUTH_SESSION_9918' };

    // Simpan metadata jumlah klik userSession secara privat
    privateVisitCount.set(userSession, 12);

    log += 'Jumlah Kunjungan Session: ' + privateVisitCount.get(userSession) + ' kali<br><br>';
    log += 'Ketika userSession logout dan di-assign null, data kunjungan di WeakMap otomatis dibersihkan dari RAM!';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'privateVisitCount.set(userSession, 12) mengaitkan metadata ke objek userSession tanpa memodifikasi objek tersebut secara langsung.',
      'Ketika userSession dihancurkan, referensi di WeakMap tidak mencegah Garbage Collector membersihkan memori.'
    ],
    quiz: {
      question: 'Tipe data apakah yang WAJIB digunakan sebagai kunci (key) pada sebuah WeakMap?',
      options: [
        'String atau Number',
        'Objek (Object references)',
        'Boolean',
        'Array angka'
      ],
      answer: 1,
      explanation: 'Pada `WeakMap`, seluruh kunci (keys) wajib berupa referensi Objek.'
    },
    challenge: {
      title: 'Tantangan: Buat Instansiasi WeakMap',
      description: 'Buat objek WeakMap baru `const wm = new WeakMap();`.',
      startingCode: `// Buat WeakMap di bawah:\n`,
      solution: `const wm = new WeakMap();`
    }
  },

  // ── 83. JS MAP REFERENCE ────────────────────────────────────────────────
  {
    id: 'js-map-reference',
    title: 'JS Map Reference',
    chapter: 'JS Maps',
    chapterId: 'js-chap-maps',
    order: 83,
    overview: 'Kamus referensi tabel komprehensif seluruh method, properti, dan perbandingan performa objek Map dan WeakMap standar ECMAScript.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS MAPS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 83 / 90</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📚 Kamus Referensi Objek Map</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Tabel berikut merangkum seluruh method dan properti standar objek Map.
          </p>
        </div>

        <div class="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-xl text-xs">
          <table class="w-full text-left">
            <thead class="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white">
              <tr>
                <th class="p-3">Method / Properti</th>
                <th class="p-3">Deskripsi</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-800 font-mono text-slate-600 dark:text-slate-300">
              <tr><td class="p-3 text-amber-500 font-bold">size</td><td>Mengembalikan total jumlah pasangan kunci-nilai.</td></tr>
              <tr><td class="p-3 text-amber-500 font-bold">set(k, v)</td><td>Menyimpan atau memperbarui nilai untuk kunci tertentu.</td></tr>
              <tr><td class="p-3 text-amber-500 font-bold">get(k)</td><td>Mengambil nilai berdasarkan kuncinya.</td></tr>
              <tr><td class="p-3 text-amber-500 font-bold">has(k)</td><td>Mengembalikan true jika kunci ada di dalam Map.</td></tr>
              <tr><td class="p-3 text-amber-500 font-bold">delete(k)</td><td>Menghapus pasangan kunci-nilai spesifik.</td></tr>
              <tr><td class="p-3 text-amber-500 font-bold">clear()</td><td>Mengosongkan seluruh isi Map.</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Map Reference Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Demonstrasi Map.delete() & Map.clear()</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const appConfig = new Map([
      ['theme', 'dark'],
      ['language', 'id'],
      ['notifications', true]
    ]);

    log += 'Konfigurasi Awal (.size): ' + appConfig.size + '<br>';

    // Hapus satu konfigurasi
    appConfig.delete('notifications');
    log += 'Setelah delete("notifications"): Ukuran = ' + appConfig.size + '<br>';

    // Kosongkan semua
    appConfig.clear();
    log += 'Setelah clear(): Ukuran = <strong>' + appConfig.size + '</strong>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'new Map([["k", "v"], ...]) memungkinkan inisialisasi Map langsung dari Array of Pairs.',
      'appConfig.delete("notifications") menghapus satu kunci.',
      'appConfig.clear() mengosongkan seluruh Map.'
    ],
    quiz: {
      question: 'Method apa yang digunakan untuk menghapus satu pasangan key-value spesifik dari Map?',
      options: [
        'map.remove(key)',
        'map.delete(key)',
        'map.drop(key)',
        'delete map[key]'
      ],
      answer: 1,
      explanation: 'Method `map.delete(key)` digunakan untuk menghapus entri spesifik dari Map.'
    },
    challenge: {
      title: 'Tantangan: Hapus Entri dengan delete()',
      description: 'Hapus kunci `"temp"` pada `const m = new Map([["temp", 1]]);` menggunakan `m.delete("temp");`.',
      startingCode: `const m = new Map([["temp", 1]]);\n// Hapus kunci temp di bawah:\n`,
      solution: `const m = new Map([["temp", 1]]);\nm.delete("temp");`
    }
  }
];
