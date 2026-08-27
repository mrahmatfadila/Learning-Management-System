module.exports = [
  // ── 17. JS IF ───────────────────────────────────────────────────────────
  {
    id: 'js-if',
    title: 'JS If',
    chapter: 'JS If Conditions',
    chapterId: 'js-chap-if-conditions',
    order: 17,
    overview: 'Pahami struktur percabangan dasar if statement: sintaks if (kondisi) { ... }, evaluasi kondisi boolean, dan eksekusi kondisional.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS IF CONDITIONS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 17 / 22</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🚦 Percabangan Kondisi Dasar (if Statement)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Statement <code>if</code> digunakan untuk mengeksekusi sekumpulan kode <strong>hanya jika kondisi yang ditentukan bernilai benar (true)</strong>. Jika kondisi bernilai salah (false), blok kode tersebut akan dilewati begitu saja.
          </p>
        </div>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 font-mono text-xs border border-slate-800 space-y-2">
          <div class="text-amber-400 font-bold">// Sintaks Dasar if Statement:</div>
          <div>if (<span class="text-rose-400">kondisi_ekspresi</span>) {</div>
          <div class="pl-4 text-emerald-400">// Blok kode yang dieksekusi jika kondisi bernilai TRUE</div>
          <div>}</div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS If Statement Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Contoh Percabangan if Sederhana</h2>
  <div id="pesan" style="padding: 15px; background: #fef08a; border-radius: 8px; font-weight: bold; color: #854d0e;"></div>

  <script>
    let waktuSekarang = 14; // Jam 14:00 (Siang)
    let salam = 'Halo Pengunjung!';

    // Jika jam kurang dari jam 18:00
    if (waktuSekarang < 18) {
      salam = 'Selamat Siang! Selamat beraktivitas di LMS DevGrow ☀️';
    }

    document.getElementById('pesan').innerText = salam;
  </script>

</body>
</html>`,
    codeExplanation: [
      'waktuSekarang memiliki nilai 14.',
      'Kondisi if (waktuSekarang < 18) dievaluasi: 14 < 18 bernilai true.',
      'Karena bernilai true, kode di dalam blok kurung kurawal dieksekusi dan variabel salam diubah.'
    ],
    quiz: {
      question: 'Kapan statement di dalam blok if (kondisi) { ... } akan dieksekusi oleh JavaScript?',
      options: [
        'Hanya ketika kondisi menghasilkan nilai boolean true',
        'Hanya ketika kondisi bernilai 0 atau false',
        'Selalu dieksekusi tanpa peduli isi kondisinya',
        'Hanya saat browser dimuat ulang'
      ],
      answer: 0,
      explanation: 'Blok statement di dalam kurung kurawal `if` hanya akan dieksekusi jika ekspresi kondisi di dalam tanda kurung bernilai `true` (atau nilai Truthy).'
    },
    challenge: {
      title: 'Tantangan: Buat Kondisi if Nilai Positif',
      description: 'Buat statement `if (angka > 0)` yang mengubah `pesan = "Angka Positif"` jika `angka` bernilai lebih dari 0.',
      startingCode: `let angka = 10;\nlet pesan = "Netral";\n// Tulis if statement di bawah:\n`,
      solution: `let angka = 10;\nlet pesan = "Netral";\nif (angka > 0) {\n  pesan = "Angka Positif";\n}`
    }
  },

  // ── 18. JS IF ELSE ──────────────────────────────────────────────────────
  {
    id: 'js-ifelse',
    title: 'JS If Else',
    chapter: 'JS If Conditions',
    chapterId: 'js-chap-if-conditions',
    order: 18,
    overview: 'Kuasai percabangan dua arah (if...else) serta multi-kondisi berantai (if...else if...else) untuk menangani berbagai skenario logika program.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS IF CONDITIONS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 18 / 22</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔀 Percabangan Ganda & Majemuk (if...else if...else)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Gunakan <code>else</code> untuk mengeksekusi blok kode alternatif saat kondisi <code>if</code> bernilai salah. Gunakan <code>else if</code> jika terdapat 3 skenario atau lebih yang ingin diuji secara berjenjang.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
          <h3 class="text-sm font-bold text-slate-800 dark:text-white">Alur Logika Berjenjang:</h3>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
            Mesin JS akan menguji kondisi pertama <code>if</code>. Jika salah, ia menguji <code>else if</code> berikutnya. Jika semua kondisi sebelumnya salah, blok default <code>else</code> paling akhir yang akan dieksekusi.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS If Else Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Penentuan Grade Nilai Ujian Siswa</h2>
  <div id="grade-box" style="padding: 20px; border-radius: 10px; max-width: 400px; font-family: monospace;"></div>

  <script>
    let nilaiUjian = 88;
    let grade = '';
    let warnaLatar = '';

    if (nilaiUjian >= 90) {
      grade = 'Grade A (Sangat Memuaskan! 🏆)';
      warnaLatar = '#dcfce7'; // Hijau muda
    } else if (nilaiUjian >= 80) {
      grade = 'Grade B (Bagus Sekali! 👍)';
      warnaLatar = '#e0f2fe'; // Biru muda
    } else if (nilaiUjian >= 70) {
      grade = 'Grade C (Cukup, Perlu Ditingkatkan)';
      warnaLatar = '#fef9c3'; // Kuning muda
    } else {
      grade = 'Grade D (Harus Mengikuti Remedial)';
      warnaLatar = '#fee2e2'; // Merah muda
    }

    const box = document.getElementById('grade-box');
    box.style.background = warnaLatar;
    box.innerHTML = '<strong>Skor: ' + nilaiUjian + '</strong><br>' + grade;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Nilai ujian = 88 diuji pertama kali pada if (nilaiUjian >= 90) ➔ bernilai false.',
      'Alur berlanjut ke else if (nilaiUjian >= 80) ➔ 88 >= 80 bernilai true.',
      'Blok Grade B dieksekusi, dan JavaScript langsung keluar dari seluruh rantai if-else tanpa memeriksa kondisi di bawahnya lagi.'
    ],
    quiz: {
      question: 'Apa fungsi dari klausa else dalam struktur if-else?',
      options: [
        'Mengulang program dari awal',
        'Mengeksekusi blok kode ketika semua kondisi if dan else if sebelumnya bernilai false',
        'Menghentikan eksekusi browser',
        'Mengubah nilai variabel menjadi null'
      ],
      answer: 1,
      explanation: 'Klausa `else` bertindak sebagai fallback default yang hanya dieksekusi jika seluruh kondisi `if` dan `else if` di atasnya bernilai `false`.'
    },
    challenge: {
      title: 'Tantangan: Cek Kelulusan Berjenjang',
      description: 'Lengkapi struktur if-else untuk variabel `let skor = 65;`. Jika `skor >= 70` set `status = "Lulus"`, jika tidak set `status = "Gagal"`.',
      startingCode: `let skor = 65;\nlet status = "";\n// Tulis percabangan if-else di bawah:\n`,
      solution: `let skor = 65;\nlet status = "";\nif (skor >= 70) {\n  status = "Lulus";\n} else {\n  status = "Gagal";\n}`
    }
  },

  // ── 19. JS TERNARY ──────────────────────────────────────────────────────
  {
    id: 'js-ternary',
    title: 'JS Ternary',
    chapter: 'JS If Conditions',
    chapterId: 'js-chap-if-conditions',
    order: 19,
    overview: 'Kuasai penggunaan Operator Ternary untuk conditional assignment, conditional function calls, nested ternary, dan tips clean code.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS IF CONDITIONS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 19 / 22</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚡ Operator Ternary (Percabangan 1 Baris)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Operator ternary adalah satu-satunya operator JavaScript yang membutuhkan 3 operan. Operator ini sering digunakan sebagai pengganti praktis dari blok statement <code>if...else</code> sederhana.
          </p>
        </div>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 font-mono text-xs border border-slate-800">
          <div class="text-amber-400 font-bold">// Format Anatomi Ternary:</div>
          <div>variabel = <span class="text-rose-400">kondisi</span> ? <span class="text-emerald-400">nilai_jika_true</span> : <span class="text-blue-400">nilai_jika_false</span>;</div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Ternary Operator</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Kalkulasi Ongkir dengan Ternary</h2>
  <div id="output" style="background: #f8fafc; border: 1px solid #cbd5e1; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    let totalBelanja = 150000;
    let isMemberVIP = true;

    // Ternary 1: Gratis ongkir jika belanja >= 100.000
    let ongkir = (totalBelanja >= 100000) ? 0 : 20000;
    log += 'Total Belanja: Rp ' + totalBelanja.toLocaleString('id-ID') + '<br>';
    log += 'Biaya Ongkir: ' + (ongkir === 0 ? 'GRATIS (Promo Belanja > 100rb) 🚚' : 'Rp ' + ongkir) + '<br><br>';

    // Ternary 2: Diskon khusus member
    let diskonTambahan = isMemberVIP ? 'Mendapat Potongan VIP 10% 🌟' : 'Tidak ada diskon';
    log += 'Status VIP: ' + diskonTambahan;

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Ekspresi (totalBelanja >= 100000) bernilai true, sehingga nilai 0 (gratis) yang disimpan ke variabel ongkir.',
      'Ternary dapat disisipkan langsung di dalam ekspresi string concatenation, contoh: (ongkir === 0 ? "GRATIS" : "Rp " + ongkir).'
    ],
    quiz: {
      question: 'Berapakah nilai variabel hasil dari: let hasil = (5 > 10) ? "A" : "B"; ?',
      options: [
        '"A"',
        '"B"',
        'true',
        'undefined'
      ],
      answer: 1,
      explanation: 'Karena kondisi 5 > 10 bernilai false, operator ternary akan mengembalikan nilai setelah tanda titik dua (:), yaitu "B".'
    },
    challenge: {
      title: 'Tantangan: Cek Angka Genap / Ganjil',
      description: 'Gunakan operator ternary untuk mengisi variabel `let jenis = (angka % 2 === 0) ? "Genap" : "Ganjil";` dengan `let angka = 7;`.',
      startingCode: `let angka = 7;\n// Tulis ternary penentuan genap/ganjil di bawah:\n`,
      solution: `let angka = 7;\nlet jenis = (angka % 2 === 0) ? "Genap" : "Ganjil";`
    }
  },

  // ── 20. JS SWITCH ───────────────────────────────────────────────────────
  {
    id: 'js-switch',
    title: 'JS Switch',
    chapter: 'JS If Conditions',
    chapterId: 'js-chap-if-conditions',
    order: 20,
    overview: 'Kuasai statement switch case untuk mencocokkan ekspresi terhadap banyak opsi nilai, fungsi kata kunci break, klausa default, dan perbandingan ketat (===).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS IF CONDITIONS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 20 / 22</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎛️ Struktur Kontrol Percabangan switch...case</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Statement <code>switch</code> digunakan untuk mengeksekusi salah satu dari sekian banyak blok kode berdasarkan kecocokan nilai ekspresi. Struktur ini jauh lebih bersih dan mudah dibaca dibanding menulis puluhan <code>if...else if</code> beruntun.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
            <strong class="text-amber-500 text-sm">Kata Kunci break</strong>
            <p class="text-slate-600 dark:text-slate-300">
              Menghentikan eksekusi dan keluar dari blok switch. Jika <code>break</code> lupa ditulis, JavaScript akan melanjutkan eksekusi ke case berikutnya secara tidak sengaja (<em>Fallthrough</em>).
            </p>
          </div>
          <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
            <strong class="text-amber-500 text-sm">Klausa default</strong>
            <p class="text-slate-600 dark:text-slate-300">
              Dijalankan jika tidak ada satu pun nilai <code>case</code> yang cocok dengan ekspresi yang diuji.
            </p>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Switch Case Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Jadwal Menu Makanan Harian (switch...case)</h2>
  <div id="menu-box" style="padding: 15px; background: #e0e7ff; border-radius: 8px; color: #3730a3; font-weight: bold;"></div>

  <script>
    let hari = new Date().getDay(); // Mengembalikan angka 0 (Minggu) sampai 6 (Sabtu)
    let menuHariIni = '';

    switch (hari) {
      case 0:
        menuHariIni = 'Hari Minggu: Pancake Madu & Jus Jeruk Segar 🥞';
        break;
      case 1:
        menuHariIni = 'Hari Senin: Nasi Goreng Spesial + Telur Mata Sapi 🍳';
        break;
      case 2:
        menuHariIni = 'Hari Selasa: Soto Ayam Madura Hangat 🍲';
        break;
      case 3:
        menuHariIni = 'Hari Rabu: Gado-Gado Segar Bumbu Kacang 🥗';
        break;
      case 4:
        menuHariIni = 'Hari Kamis: Ayam Bakar Taliwang Pedas 🍗';
        break;
      case 5:
        menuHariIni = 'Hari Jumat: Ikan Bakar Bumbu Jimbaran 🐟';
        break;
      case 6:
        menuHariIni = 'Hari Sabtu: Pizza Meat Lovers BBQ 🍕';
        break;
      default:
        menuHariIni = 'Menu belum ditentukan';
    }

    document.getElementById('menu-box').innerText = menuHariIni;
  </script>

</body>
</html>`,
    codeExplanation: [
      'new Date().getDay() menghasilkan angka 0 hingga 6 yang mewakili hari saat ini.',
      'switch mencocokkan nilai hari secara ketat (===) dengan label case 0 hingga 6.',
      'Kata kunci break memastikan program langsung keluar dari switch setelah case yang sesuai berhasil dijalankan.'
    ],
    quiz: {
      question: 'Apa dampak yang terjadi jika kita tidak menyertakan kata kunci break di akhir sebuah blok case?',
      options: [
        'Browser akan menghasilkan runtime syntax error',
        'JavaScript akan terus mengeksekusi case berikutnya meskipun kondisinya tidak cocok (Fallthrough)',
        'Seluruh variabel di dalam switch akan dihapus otomatis',
        'Fungsi default akan langsung dipanggil'
      ],
      answer: 1,
      explanation: 'Tanpa keyword `break`, eksekusi kode akan bocor dan terus menjalankan statement case di bawahnya tanpa mempedulikan kecocokan nilai (fenomena ini disebut fallthrough).'
    },
    challenge: {
      title: 'Tantangan: Switch Peran Pengguna (Role)',
      description: 'Lengkapi struktur switch untuk variabel `role = "ADMIN"`. Jika "ADMIN" kembalikan "Akses Penuh", jika "USER" kembalikan "Akses Standar", selain itu kembalikan "Tamu".',
      startingCode: `let role = "ADMIN";\nlet akses = "";\n// Tulis switch case di bawah:\n`,
      solution: `let role = "ADMIN";\nlet akses = "";\nswitch(role) {\n  case "ADMIN": akses = "Akses Penuh"; break;\n  case "USER": akses = "Akses Standar"; break;\n  default: akses = "Tamu";\n}`
    }
  },

  // ── 21. JS BOOLEANS ─────────────────────────────────────────────────────
  {
    id: 'js-booleans',
    title: 'JS Booleans',
    chapter: 'JS If Conditions',
    chapterId: 'js-chap-if-conditions',
    order: 21,
    overview: 'Pahami tipe data Boolean (true / false), fungsi konstruktor Boolean(), serta konsep krusial nilai Truthy vs Falsy di JavaScript.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS IF CONDITIONS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 21 / 22</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">☯️ Tipe Boolean & Konsep Truthy vs Falsy</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Boolean adalah tipe data yang hanya memiliki dua kemungkinan nilai: <code>true</code> atau <code>false</code>. Di JavaScript, semua tipe data lain dapat dievaluasi secara implisit menjadi boolean (Truthy atau Falsy).
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div class="p-4 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-900/40 space-y-2">
            <strong class="text-rose-700 dark:text-rose-400 text-sm">6 Nilai Falsy Resmi di JavaScript:</strong>
            <ul class="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-1 font-mono">
              <li>false</li>
              <li>0 dan -0</li>
              <li>"" (string kosong)</li>
              <li>null</li>
              <li>undefined</li>
              <li>NaN (Not a Number)</li>
            </ul>
          </div>

          <div class="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-900/40 space-y-2">
            <strong class="text-emerald-700 dark:text-emerald-400 text-sm">Contoh Nilai Truthy:</strong>
            <ul class="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-1 font-mono">
              <li>Semua angka bukan nol (1, -5, 3.14)</li>
              <li>String berisi karakter ("Halo", "0", "false")</li>
              <li>Array ([]) dan Objek ({}) meskipun kosong</li>
              <li>Fungsi (function(){})</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Truthy vs Falsy Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Evaluasi Nilai Truthy vs Falsy</h2>
  <div id="eval-box" style="background: #0f172a; color: #f8fafc; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // Uji nilai Falsy
    log += 'Boolean(0) ➔ <span style="color:#f87171">' + Boolean(0) + '</span> (Falsy)<br>';
    log += 'Boolean("") ➔ <span style="color:#f87171">' + Boolean("") + '</span> (Falsy)<br>';
    log += 'Boolean(null) ➔ <span style="color:#f87171">' + Boolean(null) + '</span> (Falsy)<br>';
    log += 'Boolean(undefined) ➔ <span style="color:#f87171">' + Boolean(undefined) + '</span> (Falsy)<br>';
    log += 'Boolean(NaN) ➔ <span style="color:#f87171">' + Boolean(NaN) + '</span> (Falsy)<br><br>';

    // Uji nilai Truthy
    log += 'Boolean("Hello") ➔ <span style="color:#4ade80">' + Boolean("Hello") + '</span> (Truthy)<br>';
    log += 'Boolean(100) ➔ <span style="color:#4ade80">' + Boolean(100) + '</span> (Truthy)<br>';
    log += 'Boolean([]) ➔ <span style="color:#4ade80">' + Boolean([]) + '</span> (Truthy - Array Kosong tetap bernilai True!)<br>';
    log += 'Boolean({}) ➔ <span style="color:#4ade80">' + Boolean({}) + '</span> (Truthy - Objek Kosong tetap bernilai True!)';

    document.getElementById('eval-box').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Fungsi Boolean(nilai) digunakan untuk mengonversi nilai apa pun menjadi representasi boolean murninya.',
      'Array kosong [] dan objek kosong {} selalu bernilai true (Truthy) karena objek referensi telah dialokasikan di memori.',
      'Angka 0 dan string kosong "" secara konsisten bernilai false (Falsy).'
    ],
    quiz: {
      question: 'Manakah nilai di bawah ini yang dievaluasi sebagai TRUTHY di dalam kondisi if statement?',
      options: [
        '"" (string kosong)',
        '0',
        '"0" (string berisi karakter nol)',
        'undefined'
      ],
      answer: 2,
      explanation: '"0" adalah string yang tidak kosong (memiliki panjang 1 karakter), sehingga dievaluasi sebagai Truthy, berbeda dengan angka 0 yang merupakan nilai Falsy.'
    },
    challenge: {
      title: 'Tantangan: Evaluasi Truthy String',
      description: 'Gunakan fungsi `Boolean("JavaScript")` untuk mengisi variabel `let isAdaTeks` dan pastikan nilainya true.',
      startingCode: `// Tulis kode konversi boolean di sini:\n`,
      solution: `let isAdaTeks = Boolean("JavaScript");`
    }
  },

  // ── 22. JS LOGICAL ──────────────────────────────────────────────────────
  {
    id: 'js-logical',
    title: 'JS Logical',
    chapter: 'JS If Conditions',
    chapterId: 'js-chap-if-conditions',
    order: 22,
    overview: 'Kuasai operator logika AND (&&), OR (||), NOT (!), cara kerja Short-Circuit Evaluation, serta pola penulisan default value dan guard clauses.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS IF CONDITIONS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 22 / 22</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧠 Operator Logika & Short-Circuit Evaluation</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Operator logika digunakan untuk menentukan logika antara variabel atau nilai kondisi. JavaScript memiliki 3 operator logika utama: <code>&&</code> (Logical AND), <code>||</code> (Logical OR), dan <code>!</code> (Logical NOT).
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
            <strong class="text-amber-500 text-sm">1. AND (&&)</strong>
            <p class="text-slate-600 dark:text-slate-300">Bernilai <code>true</code> HANYA jika <strong>KEDUA</strong> operan bernilai benar.</p>
          </div>
          <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
            <strong class="text-amber-500 text-sm">2. OR (||)</strong>
            <p class="text-slate-600 dark:text-slate-300">Bernilai <code>true</code> jika <strong>SALAH SATU</strong> atau kedua operan bernilai benar.</p>
          </div>
          <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
            <strong class="text-amber-500 text-sm">3. NOT (!)</strong>
            <p class="text-slate-600 dark:text-slate-300">Membalik nilai kebenaran (mengubah <code>true</code> menjadi <code>false</code> dan sebaliknya).</p>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Logical Operators</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Simulasi Validasi Akses (Operator Logika)</h2>
  <div id="output" style="background: #f8fafc; border: 1px solid #cbd5e1; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    let umur = 22;
    let punyaTiket = true;
    let isBlacklist = false;

    // 1. Operator AND (&&) dan NOT (!)
    let bolehMasuk = (umur >= 18) && punyaTiket && !isBlacklist;
    log += 'Boleh Masuk Konser (Umur >= 18 && Tiket && !Blacklist): <strong style="color:green">' + bolehMasuk + '</strong><br><br>';

    // 2. Operator OR (||)
    let isMemberGold = false;
    let isMemberPlatinum = true;
    let dapatLoungeVIP = isMemberGold || isMemberPlatinum;
    log += 'Akses Lounge VIP (Gold || Platinum): ' + dapatLoungeVIP + '<br><br>';

    // 3. Short-Circuit Evaluation untuk Default Value
    let inputUser = '';
    let namaTampilan = inputUser || 'Pengguna Anonim';
    log += 'Short-Circuit OR Default: "' + namaTampilan + '"';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      '(umur >= 18) && punyaTiket && !isBlacklist bernilai true karena semua syarat terpenuhi.',
      '!isBlacklist membalik nilai false menjadi true.',
      'Short-circuit OR (inputUser || "Pengguna Anonim") langsung mengambil nilai sisi kanan karena inputUser berupa string kosong (falsy).'
    ],
    quiz: {
      question: 'Berapakah hasil evaluasi ekspresi: true && false || true ?',
      options: [
        'false',
        'true',
        'undefined',
        'null'
      ],
      answer: 1,
      explanation: 'Operator AND (&&) dievaluasi lebih dahulu: true && false menghasilkan false. Kemudian false || true menghasilkan true.'
    },
    challenge: {
      title: 'Tantangan: Gabungkan Kondisi Logika',
      description: 'Deklarasikan variabel `let isBisaLogin = (emailValid && passwordBenar);` di mana `let emailValid = true;` dan `let passwordBenar = true;`.',
      startingCode: `let emailValid = true;\nlet passwordBenar = true;\n// Tulis ekspresi logika AND di bawah:\n`,
      solution: `let emailValid = true;\nlet passwordBenar = true;\nlet isBisaLogin = (emailValid && passwordBenar);`
    }
  }
];
