module.exports = [
  // ── 62. JS DATES ────────────────────────────────────────────────────────
  {
    id: 'js-dates',
    title: 'JS Dates',
    chapter: 'JS Dates',
    chapterId: 'js-chap-dates',
    order: 62,
    overview: 'Kuasai objek Date bawaan JavaScript: epoch timestamp milidetik sejak 1 Januari 1970 UTC, instansiasi new Date(), dan penanganan waktu lokal vs zona waktu UTC.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS DATES</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 62 / 74</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📅 Objek Tanggal & Waktu (Date Object)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            JavaScript merepresentasikan waktu menggunakan objek <code>Date</code>. Objek ini melacak waktu sebagai jumlah milidetik yang telah berlalu sejak <strong>1 Januari 1970 00:00:00 UTC</strong> (disebut sebagai <em>Unix Epoch</em>).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Dates Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Instansiasi Objek Date</h2>
  <div id="output" style="background: #f8fafc; border: 1px solid #cbd5e1; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. Tanggal & Waktu Sekarang
    const saatIni = new Date();
    log += '1. Waktu Sekarang (Lokal): ' + saatIni.toString() + '<br><br>';

    // 2. Dari String Tanggal Tertentu
    const hariMerdeka = new Date('1945-08-17T10:00:00');
    log += '2. Hari Proklamasi RI: ' + hariMerdeka.toLocaleDateString('id-ID', { dateStyle: 'full' }) + '<br><br>';

    // 3. Unix Timestamp (Milidetik sejak 1 Jan 1970)
    log += '3. Date.now() Timestamp: <strong>' + Date.now() + ' ms</strong>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'new Date() tanpa argumen secara otomatis mengambil tanggal dan jam saat ini dari sistem operasi pengguna.',
      'new Date("1945-08-17T10:00:00") mem-parsing string ISO menjadi objek Date yang valid.',
      'Date.now() mengembalikan nilai integer milidetik timestamp yang sangat berguna untuk pengukuran durasi eksekusi.'
    ],
    quiz: {
      question: 'Kapan titik awal perhitungan waktu (Unix Epoch) yang menjadi acuan objek Date di JavaScript?',
      options: [
        '1 Januari 2000',
        '1 Januari 1970 UTC',
        '1 Januari 1900',
        '31 Desember 1999'
      ],
      answer: 1,
      explanation: 'Unix Epoch dimulai pada tanggal 1 Januari 1970 00:00:00 UTC.'
    },
    challenge: {
      title: 'Tantangan: Buat Objek Date Sekarang',
      description: 'Buat variabel `const sekarang = new Date();`.',
      startingCode: `// Buat objek date sekarang di bawah:\n`,
      solution: `const sekarang = new Date();`
    }
  },

  // ── 63. JS DATE FORMATS ─────────────────────────────────────────────────
  {
    id: 'js-date-formats',
    title: 'JS Date Formats',
    chapter: 'JS Dates',
    chapterId: 'js-chap-dates',
    order: 63,
    overview: 'Kuasai standar format penulisan string tanggal: ISO 8601 (YYYY-MM-DDTHH:mm:ss.sssZ), Short Date (MM/DD/YYYY), dan Long Date (MMM DD YYYY).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS DATES</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 63 / 74</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📄 Standar Format Tanggal di JavaScript</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Format resmi yang paling direkomendasikan secara global adalah <strong>ISO 8601</strong> (<code>YYYY-MM-DD</code>). Format ini tidak ambigu dan diproses secara konsisten di seluruh browser di dunia.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Date Formats</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Parsing Berbagai Format Tanggal</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. ISO 8601 Format (Standar Terbaik)
    const isoDate = new Date('2026-08-27');
    log += '1. ISO Format (2026-08-27) ➔ ' + isoDate.toDateString() + '<br>';

    // 2. ISO dengan Waktu & Zona UTC (Z)
    const isoFull = new Date('2026-08-27T12:00:00Z');
    log += '2. ISO UTC (2026-08-27T12:00:00Z) ➔ ' + isoFull.toISOString() + '<br><br>';

    // 3. Long Date Format
    const longDate = new Date('Aug 27 2026');
    log += '3. Long Date ("Aug 27 2026") ➔ ' + longDate.toLocaleDateString('id-ID');

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Format ISO "YYYY-MM-DD" adalah standar internasional W3C yang dijamin bebas dari kesalahan interpretasi urutan bulan/hari.',
      'Karakter T memisahkan tanggal dan waktu, sedangkan karakter Z di ujung menandakan zona waktu UTC (Greenwich Mean Time).'
    ],
    quiz: {
      question: 'Manakah format string tanggal yang merupakan standar internasional (ISO 8601) paling direkomendasikan?',
      options: [
        'DD-MM-YYYY',
        'YYYY-MM-DD',
        'MM/DD/YYYY',
        'DD/MM/YYYY'
      ],
      answer: 1,
      explanation: 'Format internasional ISO 8601 ditulis dalam urutan tahun, bulan, hari: `YYYY-MM-DD`.'
    },
    challenge: {
      title: 'Tantangan: Parsing String Tanggal ISO',
      description: 'Buat objek `const tgl = new Date("2026-01-01");`.',
      startingCode: `// Parsing tanggal ISO di bawah:\n`,
      solution: `const tgl = new Date("2026-01-01");`
    }
  },

  // ── 64. JS DATE GET ─────────────────────────────────────────────────────
  {
    id: 'js-date-get',
    title: 'JS Date Get',
    chapter: 'JS Dates',
    chapterId: 'js-chap-dates',
    order: 64,
    overview: 'Kuasai seluruh method pembaca tanggal (Getter Methods): getFullYear(), getMonth() (indeks 0-11), getDate(), getDay() (0-6), getHours(), getMinutes(), dan getTime().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS DATES</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 64 / 74</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Method Ekstraksi Tanggal (Get Methods)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Untuk mengambil komponen tertentu dari sebuah objek Date (seperti tahun, nama hari, atau menit), JavaScript menyediakan serangkaian method Getter.
          </p>
        </div>

        <div class="p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 rounded-xl space-y-1 text-xs">
          <strong class="text-amber-900 dark:text-amber-300">⚠️ PENTING: getMonth() Dimulai dari Indeks 0!</strong>
          <p class="text-slate-600 dark:text-slate-300">
            Januari = <code>0</code>, Februari = <code>1</code>, ... Desember = <code>11</code>. Jangan lupa tambahkan <code>+ 1</code> jika ingin menampilkan nomor bulan ke pengguna.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Date Get Methods</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Rincian Komponen Waktu Saat Ini (Get Methods)</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const d = new Date();
    const namaBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    const namaHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

    log += '• Tahun (getFullYear): ' + d.getFullYear() + '<br>';
    log += '• Bulan (getMonth + 1): ' + (d.getMonth() + 1) + ' (' + namaBulan[d.getMonth()] + ')<br>';
    log += '• Tanggal (getDate): ' + d.getDate() + '<br>';
    log += '• Hari ke (getDay): ' + d.getDay() + ' (' + namaHari[d.getDay()] + ')<br>';
    log += '• Jam (getHours): ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'd.getFullYear() mengambil 4 digit tahun secara akurat.',
      'namaBulan[d.getMonth()] memetakan angka indeks 0-11 menjadi nama bulan bahasa Indonesia.',
      'd.getDate() mengembalikan tanggal hari ini (1-31).'
    ],
    quiz: {
      question: 'Berapakah nilai yang dikembalikan oleh d.getMonth() pada tanggal 1 Januari?',
      options: [
        '1',
        '0',
        'Jan',
        '31'
      ],
      answer: 1,
      explanation: 'Method `getMonth()` di JavaScript menggunakan sistem zero-indexed, sehingga bulan Januari bernilai `0` dan Desember bernilai `11`.'
    },
    challenge: {
      title: 'Tantangan: Ambil Tahun Saat Ini',
      description: 'Gunakan method `.getFullYear()` pada `new Date()` dan simpan ke `let tahun = new Date().getFullYear();`.',
      startingCode: `// Ambil tahun saat ini di bawah:\nlet tahun = 0;`,
      solution: `let tahun = new Date().getFullYear();`
    }
  },

  // ── 65. JS DATE SET ─────────────────────────────────────────────────────
  {
    id: 'js-date-set',
    title: 'JS Date Set',
    chapter: 'JS Dates',
    chapterId: 'js-chap-dates',
    order: 65,
    overview: 'Kuasai method pemodifikasi tanggal (Setter Methods): setFullYear(), setMonth(), setDate(), setHours(), serta kalkulasi otomatis penambahan hari dan jatuh tempo tagihan.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS DATES</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 65 / 74</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚙️ Modifikasi Tanggal & Kalkulasi Jatuh Tempo (Set Methods)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Method Setter memungkinkan Anda mengubah komponen tanggal dan secara cerdas menangani perpindahan bulan otomatis saat tanggal melebihi batas hari dalam bulan tersebut (*Auto-rollover*).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Date Set Methods</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Kalkulasi Tanggal Jatuh Tempo Tagihan (+30 Hari)</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const tglTransaksi = new Date();
    log += 'Tanggal Transaksi: ' + tglTransaksi.toLocaleDateString('id-ID', { dateStyle: 'full' }) + '<br><br>';

    // Buat tanggal jatuh tempo 30 hari ke depan
    const tglJatuhTempo = new Date(tglTransaksi);
    tglJatuhTempo.setDate(tglJatuhTempo.getDate() + 30); // Tambah 30 hari otomatis

    log += '📅 <strong>Batas Akhir Jatuh Tempo (Invoice +30 Hari):</strong><br>';
    log += '<span style="color:#4ade80; font-size:16px;">' + tglJatuhTempo.toLocaleDateString('id-ID', { dateStyle: 'full' }) + '</span>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'tglJatuhTempo.setDate(tglJatuhTempo.getDate() + 30) menambahkan 30 hari ke tanggal saat ini.',
      'JavaScript secara cerdas menangani pergantian bulan dan tahun jika penambahan hari melewati akhir bulan (misal dari 28 Februari ke Maret).'
    ],
    quiz: {
      question: 'Apa yang terjadi jika kita menjalankan d.setDate(35) pada objek tanggal di bulan yang hanya memiliki 30 hari?',
      options: [
        'Menghasilkan RangeError',
        'Tanggal otomatis bergulir (auto-rollover) menjadi tanggal 5 di bulan berikutnya',
        'Tanggal diubah menjadi 30',
        'Nilai date menjadi NaN'
      ],
      answer: 1,
      explanation: 'JavaScript memiliki fitur auto-rollover pada method setter tanggal: kelebihan 5 hari akan otomatis memajukan tanggal ke tanggal 5 di bulan berikutnya.'
    },
    challenge: {
      title: 'Tantangan: Tambah 7 Hari ke Objek Date',
      description: 'Lengkapi kode untuk menambahkan 7 hari ke objek `d`: `d.setDate(d.getDate() + 7);`.',
      startingCode: `const d = new Date();\n// Tambah 7 hari di bawah:\n`,
      solution: `const d = new Date();\nd.setDate(d.getDate() + 7);`
    }
  },

  // ── 66. JS DATE METHODS ─────────────────────────────────────────────────
  {
    id: 'js-date-methods',
    title: 'JS Date Methods',
    chapter: 'JS Dates',
    chapterId: 'js-chap-dates',
    order: 66,
    overview: 'Kuasai method konversi dan format lokal: toLocaleDateString(), toLocaleTimeString(), toISOString(), serta rumus kalkulasi selisih hari antar dua tanggal.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS DATES</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 66 / 74</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌐 Format Lokalisasi (Intl) & Perhitungan Selisih Hari</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Untuk menyajikan tanggal yang ramah pengguna sesuai bahasa dan format negara (misal format Indonesia <code>id-ID</code>), gunakan <code>toLocaleDateString()</code>.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Date Methods & Selisih Waktu</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Perhitungan Selisih Hari Antara Dua Tanggal</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const tglMulai = new Date('2026-08-01');
    const tglSelesai = new Date('2026-08-27');

    // 1. Hitung selisih dalam milidetik
    let selisihMs = tglSelesai.getTime() - tglMulai.getTime();

    // 2. Konversi milidetik ke hari (1 hari = 1000ms * 60s * 60m * 24h = 86.400.000 ms)
    let totalHari = selisihMs / (1000 * 60 * 60 * 24);

    log += 'Tanggal Mulai Kursus: ' + tglMulai.toLocaleDateString('id-ID', { dateStyle: 'medium' }) + '<br>';
    log += 'Tanggal Kelulusan: ' + tglSelesai.toLocaleDateString('id-ID', { dateStyle: 'medium' }) + '<br><br>';
    log += '🎯 <strong>Lama Belajar: ' + totalHari + ' Hari Penuh</strong>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      '.getTime() mengambil representasi milidetik numerik dari kedua tanggal.',
      'Pengurangan selisih milidetik dibagi (1000 * 60 * 60 * 24) menghasilkan selisih eksak dalam satuan hari.',
      'toLocaleDateString("id-ID") memformat output sesuai standar penanggalan Indonesia.'
    ],
    quiz: {
      question: 'Berapa milidetik dalam 1 hari penuh yang digunakan sebagai pembagi perhitungan selisih tanggal?',
      options: [
        '86.400.000 ms (1000 * 60 * 60 * 24)',
        '3.600.000 ms',
        '60.000 ms',
        '1.000.000 ms'
      ],
      answer: 0,
      explanation: 'Satu hari terdiri dari 24 jam * 60 menit * 60 detik * 1000 milidetik = 86.400.000 milidetik.'
    },
    challenge: {
      title: 'Tantangan: Format Tanggal Indonesia',
      description: 'Format objek `new Date()` ke format lokal Indonesia menggunakan `.toLocaleDateString("id-ID")`.',
      startingCode: `const d = new Date();\n// Format ke bahasa Indonesia di bawah:\nlet lokal = "";`,
      solution: `const d = new Date();\nlet lokal = d.toLocaleDateString("id-ID");`
    }
  }
];
