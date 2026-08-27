module.exports = [
  // ── 196. TEMPORAL INTRO ─────────────────────────────────────────────────
  {
    id: 'temporal-intro',
    title: 'Temporal Intro',
    chapter: 'JS Temporal',
    chapterId: 'js-chap-temporal',
    order: 196,
    overview: 'Pengenalan API Waktu Modern JavaScript: namespace Temporal standar ECMAScript terbaru yang dirancang untuk menggantikan objek Date klasik yang rentan bug.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS TEMPORAL</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 196 / 216</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⏳ Era Baru Penanganan Waktu: JavaScript Temporal</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Selama hampir 3 dekade, objek <code>Date</code> bawaan JavaScript terkenal sulit digunakan dan penuh kelemahan. <strong>Temporal API</strong> adalah solusi resmi berorientasi objek yang menghadirkan penanganan tanggal, jam, durasi, dan zona waktu secara akurat, terstruktur, dan kebal dari mutasi (<em>immutable</em>).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Temporal Intro Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Pemeriksaan Waktu Presisi dengan Temporal</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // Deteksi / Simulasi Temporal API
    if (typeof Temporal !== 'undefined') {
      const now = Temporal.Now.zonedDateTimeISO('Asia/Jakarta');
      log += '• Waktu Saat Ini (ZonedDateTime): <strong>' + now.toString() + '</strong><br>';
      log += '• Tanggal Murni (PlainDate): ' + now.toPlainDate().toString() + '<br>';
      log += '• Jam Dinding Murni (PlainTime): ' + now.toPlainTime().toString();
    } else {
      // Fallback penjelasan jika engine browser belum mengaktifkan flag Temporal
      log += '• Temporal API Namespace: <code>Temporal.Now.instant()</code><br>';
      log += '• Karakteristik Utama: <strong>100% Immutable</strong> & Mendukung Timezone IANA bawaan!';
    }

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Temporal memisahkan konsep tanggal murni (PlainDate), waktu murni (PlainTime), dan waktu dengan timezone (ZonedDateTime).',
      'Seluruh method Temporal mengembalikan objek baru tanpa pernah merusak objek sumbernya.'
    ],
    quiz: {
      question: 'Nama namespace global modern apakah yang diperkenalkan ECMAScript untuk menggantikan objek Date lama?',
      options: [
        'DateTime',
        'TimeMaster',
        'Temporal',
        'MomentNative'
      ],
      answer: 2,
      explanation: 'Namespace global resmi standar ECMAScript adalah `Temporal`.'
    },
    challenge: {
      title: 'Tantangan: Deteksi Namespace Temporal',
      description: 'Periksa ketersediaan Temporal `const isTemporal = typeof Temporal !== "undefined";`.',
      startingCode: `let isTemporal = false;`,
      solution: `let isTemporal = typeof Temporal !== "undefined";`
    }
  },

  // ── 197. TEMPORAL WHY ───────────────────────────────────────────────────
  {
    id: 'temporal-why',
    title: 'Temporal Why',
    chapter: 'JS Temporal',
    chapterId: 'js-chap-temporal',
    order: 197,
    overview: 'Alasan fundamental kelahiran Temporal: kelemahan objek Date klasik seperti mutabilitas yang memicu bug tak terduga, parsing string ISO yang tidak andal, dan indexing bulan 0-11 yang membingungkan.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS TEMPORAL</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 197 / 216</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛑 Mengapa Objek Date Lama Harus Diganti?</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Objek <code>Date</code> dibuat hanya dalam 10 hari pada tahun 1995 dengan meniru <code>java.util.Date</code> yang cacat. Beberapa masalah fatalnya:
            1. <strong>Mutasi Berbahaya</strong>: Mengubah tanggal pada satu referensi merusak data di tempat lain.
            2. <strong>Index Bulan 0-11</strong>: Januari adalah 0 dan Desember adalah 11.
            3. <strong>Ketiadaan Dukungan Timezone</strong>: Date hanya mengenal waktu UTC dan local timezone komputer user.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Temporal Why Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Bahaya Mutasi pada Objek Date Lama</h2>
  <div id="output" style="background: #0f172a; color: #f87171; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // Bug Mutasi Date Lama:
    const tglPendaftaran = new Date('2026-08-27');
    const tglExpired = tglPendaftaran; // Menyalin referensi pointer!

    tglExpired.setDate(tglExpired.getDate() + 7); // Mengubah tglExpired...

    // Akibatnya: tglPendaftaran IKUT RUSAK TERUBAH!
    log += '⚠️ <strong>Bug Mutasi Date Lama:</strong><br>';
    log += '• tglPendaftaran ikut rusak menjadi: ' + tglPendaftaran.toISOString().split('T')[0] + ' ❌<br><br>';
    log += '<span style="color:#4ade80;">✅ <strong>Solusi Temporal:</strong> Objek Temporal selalu menghasilkan instansi baru (Immutable).</span>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Objek Date lama bersifat mutable sehingga operasi modifikasi mengubah data asli.',
      'Temporal selalu bersifat Immutable sehingga aman digunakan di seluruh arsitektur aplikasi.'
    ],
    quiz: {
      question: 'Berapakah indeks angka untuk bulan Januari pada objek Date klasik JavaScript lama?',
      options: [
        '1',
        '0 (Zero-indexed)',
        '-1',
        'Jan'
      ],
      answer: 1,
      explanation: 'Pada objek Date lama, bulan diindeks dari 0 (Januari) hingga 11 (Desember), sedangkan Temporal menggunakan penomoran alami 1-12.'
    },
    challenge: {
      title: 'Tantangan: Bulan Alami Temporal',
      description: 'Di Temporal, Januari bernilai `1`. Simpan `let jan = 1;`.',
      startingCode: `let jan = 0;`,
      solution: `let jan = 1;`
    }
  },

  // ── 198. TEMPORAL VS DATE ───────────────────────────────────────────────
  {
    id: 'temporal-vs-date',
    title: 'Temporal vs Date',
    chapter: 'JS Temporal',
    chapterId: 'js-chap-temporal',
    order: 198,
    overview: 'Tabel komparasi komprehensif Temporal vs Date: Immutability murni, presisi nanodetik vs milidetik, pemisahan Wall-Clock date/time, dan dukungan zona waktu IANA.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS TEMPORAL</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 198 / 216</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚖️ Perbandingan Arsitektur: Temporal vs Date</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Tabel berikut merangkum keunggulan mutlak Temporal dibandingkan objek Date klasik.
          </p>
        </div>

        <div class="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-xl text-xs">
          <table class="w-full text-left">
            <thead class="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white">
              <tr>
                <th class="p-3">Fitur</th>
                <th class="p-3">Temporal API</th>
                <th class="p-3">Date Lama</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-800 font-mono text-slate-600 dark:text-slate-300">
              <tr><td class="p-3 font-bold">Mutabilitas</td><td class="text-emerald-500">Immutable (Kebal Mutasi)</td><td class="text-rose-500">Mutable (Rentan Bug)</td></tr>
              <tr><td class="p-3 font-bold">Tingkat Presisi</td><td class="text-emerald-500">Nanodetik (10^-9 detik)</td><td>Milidetik (10^-3 detik)</td></tr>
              <tr><td class="p-3 font-bold">Timezone IANA</td><td class="text-emerald-500">Dukungan Penuh (Asia/Jakarta, dll)</td><td>Tidak Didukung Asli</td></tr>
              <tr><td class="p-3 font-bold">Bulan (Month)</td><td class="text-emerald-500">1 - 12 (Alami)</td><td>0 - 11 (Membingungkan)</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Temporal vs Date Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Rangkuman Keunggulan Temporal</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    log += '<strong>Pilar Keunggulan Temporal:</strong><br>';
    log += '1. <strong>Tipe Data Terpisah:</strong> PlainDate, PlainTime, ZonedDateTime.<br>';
    log += '2. <strong>Aritmatika Waktu Aman:</strong> .add() dan .subtract() tanpa overflow aneh.<br>';
    log += '3. <strong>Perhitungan Interval:</strong> .since() dan .until() menghasilkan durasi eksak.';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Temporal menghilangkan kebutuhan menginstal pustaka eksternal seperti Moment.js atau date-fns.'
    ],
    quiz: {
      question: 'Berapakah tingkat resolusi presisi waktu yang didukung oleh Temporal API?',
      options: [
        'Detik',
        'Milidetik',
        'Mikrodetik',
        'Nanodetik (Nanoseconds)'
      ],
      answer: 3,
      explanation: 'Temporal mendukung presisi hingga satuan nanodetik (nanoseconds).'
    },
    challenge: {
      title: 'Tantangan: Pahami Immutability',
      description: 'Temporal bersifat immutable `const immutable = true;`.',
      startingCode: `let immutable = false;`,
      solution: `const immutable = true;`
    }
  },

  // ── 199. TEMPORAL DURATION ──────────────────────────────────────────────
  {
    id: 'temporal-duration',
    title: 'Temporal Duration',
    chapter: 'JS Temporal',
    chapterId: 'js-chap-temporal',
    order: 199,
    overview: 'Mengelola durasi waktu dengan Temporal.Duration: representasi ISO 8601 duration (misal PT1H30M), penjumlahan durasi, method total(), dan rounding durasi.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS TEMPORAL</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 199 / 216</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⏱️ Objek Durasi Waktu (Temporal.Duration)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>Temporal.Duration</code> merepresentasikan kuantitas interval waktu (misalnya "2 jam 30 menit 15 detik") terlepas dari tanggal kalender tertentu.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Temporal Duration Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Kalkulasi Durasi Kursus Belajar</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // Konseptual Temporal.Duration
    const durasiPelajaran1 = { hours: 1, minutes: 45 };
    const durasiPelajaran2 = { hours: 2, minutes: 30 };

    // Total jam: 4 jam 15 menit
    log += '• Pelajaran 1: 1 Jam 45 Menit (ISO: PT1H45M)<br>';
    log += '• Pelajaran 2: 2 Jam 30 Menit (ISO: PT2H30M)<br>';
    log += '• Total Durasi Gabungan: <strong>4 Jam 15 Menit</strong> ✅';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Temporal.Duration menggunakan format ISO 8601 (seperti "PT4H15M") yang dapat diserialisasi ke JSON dengan aman.'
    ],
    quiz: {
      question: 'Format string standar internasional apakah yang digunakan oleh Temporal.Duration untuk representasi durasi (contoh "PT2H30M")?',
      options: [
        'ISO 8601 Duration',
        'UNIX Timestamp',
        'RFC 2822',
        'ASCII Time'
      ],
      answer: 0,
      explanation: 'Format standar durasi waktu internasional adalah `ISO 8601 Duration`.'
    },
    challenge: {
      title: 'Tantangan: Buat Objek Durasi ISO',
      description: 'Simpan string durasi 1 jam `"PT1H"` ke `const dur = "PT1H";`.',
      startingCode: `const dur = "";`,
      solution: `const dur = "PT1H";`
    }
  },

  // ── 200. TEMPORAL INSTANT ───────────────────────────────────────────────
  {
    id: 'temporal-instant',
    title: 'Temporal Instant',
    chapter: 'JS Temporal',
    chapterId: 'js-chap-temporal',
    order: 200,
    overview: 'Temporal.Instant: titik waktu universal presisi tinggi pada timeline UTC (Epoch timestamp) terbebas dari kalender atau zona waktu lokasi.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS TEMPORAL</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 200 / 216</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌍 Titik Waktu Universal (Temporal.Instant)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>Temporal.Instant</code> merepresentasikan sebuah momen waktu absolut pada garis waktu UTC sejak Epoch Unix (1 Januari 1970 UTC) dengan presisi nanodetik.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Temporal Instant Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Presisi Titik Waktu Universal (Instant)</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // Representasi titik waktu instan
    const sekarangInstant = new Date().toISOString();

    log += '• Titik Momen UTC: <strong>' + sekarangInstant + '</strong><br>';
    log += '• Temporal.Instant cocok untuk timestamp database log audit keamanan backend.';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Temporal.Instant tidak memiliki konsep "hari Senin" atau "jam 3 sore", melainkan hanya titik mili/nanodetik murni dari Epoch UTC.'
    ],
    quiz: {
      question: 'Tipe objek Temporal manakah yang merepresentasikan titik waktu absolut murni di garis waktu UTC tanpa keterikatan kalender lokal?',
      options: [
        'Temporal.PlainDate',
        'Temporal.Instant',
        'Temporal.PlainTime',
        'Temporal.Duration'
      ],
      answer: 1,
      explanation: '`Temporal.Instant` merepresentasikan satu titik waktu absolut pada timeline UTC.'
    },
    challenge: {
      title: 'Tantangan: Buat Epoch Timestamp',
      description: 'Simpan Epoch milidetik `Date.now()` ke `let now = Date.now();`.',
      startingCode: `let now = 0;`,
      solution: `let now = Date.now();`
    }
  },

  // ── 201. TEMPORAL PLAINDATETIME ─────────────────────────────────────────
  {
    id: 'temporal-plaindatetime',
    title: 'Temporal PlainDateTime',
    chapter: 'JS Temporal',
    chapterId: 'js-chap-temporal',
    order: 201,
    overview: 'Temporal.PlainDateTime: representasi kombinasi tanggal dan jam dinding kalender lokal tanpa ikatan informasi zona waktu tertentu.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS TEMPORAL</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 201 / 216</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📅 Jam & Tanggal Dinding (PlainDateTime)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>Temporal.PlainDateTime</code> mewakili tanggal dan jam seperti yang terlihat di kalender dinding dan jam meja (misal: "2026-08-27 jam 14:30:00").
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Temporal PlainDateTime Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Jadwal Pertemuan Kelas Online</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // PlainDateTime (27 Agustus 2026 jam 19:30)
    const jadwalPlain = {
      year: 2026, month: 8, day: 27,
      hour: 19, minute: 30, second: 0
    };

    log += '• Jadwal Kelas: <strong>' + jadwalPlain.year + '-0' + jadwalPlain.month + '-' + jadwalPlain.day + ' ' + jadwalPlain.hour + ':' + jadwalPlain.minute + '</strong><br>';
    log += '• Karakteristik: Bebas dari ambiguitas pergeseran timezone pengguna.';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'PlainDateTime ideal untuk jadwal janji temu lokal di mana jam 19:30 harus tetap jam 19:30 di mana pun lokasi pertemuan tersebut.'
    ],
    quiz: {
      question: 'Kapan sebaiknya kita menggunakan tipe Temporal.PlainDateTime?',
      options: [
        'Untuk mencatat log waktu UTC server',
        'Untuk merepresentasikan tanggal dan jam lokal kalender tanpa ikatan zona waktu spesifik',
        'Hanya untuk menghitung selisih detik',
        'Untuk format mata uang'
      ],
      answer: 1,
      explanation: '`PlainDateTime` digunakan ketika kita memerlukan tanggal dan waktu kalender lokal tanpa terikat zona waktu.'
    },
    challenge: {
      title: 'Tantangan: Buat Objek Plain Date Time',
      description: 'Lengkapi objek `const dt = { year: 2026, month: 8, day: 27 };`.',
      startingCode: `const dt = { year: 2026, month: 8, day: 27 };`,
      solution: `const dt = { year: 2026, month: 8, day: 27 };`
    }
  },

  // ── 202. TEMPORAL PLAINDATE ─────────────────────────────────────────────
  {
    id: 'temporal-plaindate',
    title: 'Temporal PlainDate',
    chapter: 'JS Temporal',
    chapterId: 'js-chap-temporal',
    order: 202,
    overview: 'Temporal.PlainDate: representasi tanggal kalender murni (Tahun, Bulan, Hari) tanpa komponen jam/waktu (misal tanggal lahir atau tanggal libur nasional).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS TEMPORAL</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 202 / 216</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📆 Tanggal Kalender Murni (PlainDate)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Sebelum Temporal, tanggal lahir selalu terikat dengan jam (misal <code>00:00:00 UTC</code>) yang sering bergeser menjadi kemarin saat dibuka di timezone berbeda. <strong><code>Temporal.PlainDate</code></strong> menyelesaikan ini dengan hanya menyimpan Tahun, Bulan, dan Hari murni.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Temporal PlainDate Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Tanggal Lahir & Hari Libur (PlainDate)</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // Tanggal Kemerdekaan RI
    const kemerdekaan = { year: 1945, month: 8, day: 17 };

    log += '• Hari Kemerdekaan: <strong>' + kemerdekaan.year + '-0' + kemerdekaan.month + '-' + kemerdekaan.day + '</strong><br>';
    log += '• PlainDate tidak memiliki komponen jam sehingga tidak akan pernah bergeser hari karena konversi timezone!';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'PlainDate adalah tipe data yang paling tepat untuk input form tanggal lahir (HTML input type="date").'
    ],
    quiz: {
      question: 'Tipe Temporal apakah yang paling tepat digunakan untuk menyimpan data Tanggal Lahir pengguna?',
      options: [
        'Temporal.Instant',
        'Temporal.PlainDate',
        'Temporal.PlainTime',
        'Temporal.ZonedDateTime'
      ],
      answer: 1,
      explanation: '`Temporal.PlainDate` adalah tipe khusus yang hanya menyimpan tanggal kalender (Tahun-Bulan-Hari) tanpa jam.'
    },
    challenge: {
      title: 'Tantangan: Buat PlainDate Literal',
      description: 'Simpan string tanggal `"2026-08-27"` ke `let tgl = "2026-08-27";`.',
      startingCode: `let tgl = "";`,
      solution: `let tgl = "2026-08-27";`
    }
  },

  // ── 203. TEMPORAL PLAINYEARM ────────────────────────────────────────────
  {
    id: 'temporal-plainyearm',
    title: 'Temporal PlainYearM',
    chapter: 'JS Temporal',
    chapterId: 'js-chap-temporal',
    order: 203,
    overview: 'Temporal.PlainYearMonth: representasi tahun dan bulan kalender tanpa tanggal hari (misal masa kedaluwarsa kartu kredit "2028-12" atau laporan keuangan bulanan).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS TEMPORAL</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 203 / 216</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">💳 Tahun & Bulan Kalender (PlainYearMonth)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>Temporal.PlainYearMonth</code> khusus menyimpan kombinasi Tahun dan Bulan tanpa hari (misal input kartu pembayaran <code>MM/YY</code>).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Temporal PlainYearMonth Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Masa Berlaku Kartu Pembayaran (YearMonth)</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const expCard = { year: 2029, month: 12 };
    log += '• Masa Berlaku Kartu (PlainYearMonth): <strong>' + expCard.year + '-' + expCard.month + '</strong><br>';
    log += '• Jumlah Hari di Bulan Tersebut: 31 Hari.';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'PlainYearMonth memudahkan operasi iterasi kalender bulanan dan laporan akuntansi.'
    ],
    quiz: {
      question: 'Use case nyata manakah yang paling cocok menggunakan tipe Temporal.PlainYearMonth?',
      options: [
        'Jam alarm bangun pagi',
        'Masa berlaku kartu kredit (Bulan/Tahun) & Laporan periode bulanan',
        'Waktu transaksi milidetik',
        'Durasi video YouTube'
      ],
      answer: 1,
      explanation: 'Masa berlaku kartu pembayaran (MM/YY) dan periode akuntansi bulanan adalah use-case utama `PlainYearMonth`.'
    },
    challenge: {
      title: 'Tantangan: Buat PlainYearMonth',
      description: 'Lengkapi objek `const ym = { year: 2026, month: 8 };`.',
      startingCode: `const ym = { year: 2026, month: 8 };`,
      solution: `const ym = { year: 2026, month: 8 };`
    }
  },

  // ── 204. TEMPORAL PLAINMONTHD ───────────────────────────────────────────
  {
    id: 'temporal-plainmonthd',
    title: 'Temporal PlainMonthD',
    chapter: 'JS Temporal',
    chapterId: 'js-chap-temporal',
    order: 204,
    overview: 'Temporal.PlainMonthDay: representasi bulan dan tanggal tanpa komponen tahun (misal peringatan ulang tahun tahunan "17 Agustus" atau perayaan tahun baru "1 Januari").',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS TEMPORAL</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 204 / 216</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎂 Peringatan Tahunan (PlainMonthDay)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>Temporal.PlainMonthDay</code> mewakili tanggal yang berulang setiap tahun tanpa terikat angka tahun tertentu.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Temporal PlainMonthDay Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Peringatan Acara Tahunan (MonthDay)</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const hariKemerdekaan = { month: 8, day: 17 };
    log += '• Hari Kemerdekaan (PlainMonthDay): <strong>' + hariKemerdekaan.month + '-' + hariKemerdekaan.day + '</strong> (17 Agustus)<br>';
    log += '• Dapat dikonversi ke PlainDate tahun apapun dengan menambahkan properti year!';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'PlainMonthDay menangani kasus kabisat (29 Februari) secara elegan dan konsisten.'
    ],
    quiz: {
      question: 'Tipe data Temporal apakah yang digunakan untuk menyimpan tanggal peringatan hari ulang tahun yang berulang setiap tahun tanpa terikat angka tahun tertentu?',
      options: [
        'Temporal.PlainMonthDay',
        'Temporal.PlainDate',
        'Temporal.Instant',
        'Temporal.Duration'
      ],
      answer: 0,
      explanation: '`Temporal.PlainMonthDay` hanya menyimpan Bulan dan Hari (contoh 17 Agustus).'
    },
    challenge: {
      title: 'Tantangan: Buat MonthDay Literal',
      description: 'Lengkapi `const md = { month: 8, day: 17 };`.',
      startingCode: `const md = { month: 8, day: 17 };`,
      solution: `const md = { month: 8, day: 17 };`
    }
  },

  // ── 205. TEMPORAL PLAINTIME ─────────────────────────────────────────────
  {
    id: 'temporal-plaintime',
    title: 'Temporal PlainTime',
    chapter: 'JS Temporal',
    chapterId: 'js-chap-temporal',
    order: 205,
    overview: 'Temporal.PlainTime: representasi jam dinding murni (Jam:Menit:Detik:Milidetik:Nanodetik) tanpa tanggal dan tanpa ikatan zona waktu (misal jadwal alarm jam 07:00 atau jam buka toko).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS TEMPORAL</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 205 / 216</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⏰ Jam Dinding Murni (PlainTime)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>Temporal.PlainTime</code> menyimpan waktu jam sehari-hari tanpa tanggal (misal input <code>&lt;input type="time"&gt;</code>).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Temporal PlainTime Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Jadwal Jam Buka Toko (PlainTime)</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const jamBuka = { hour: 8, minute: 0, second: 0 };
    const jamTutup = { hour: 21, minute: 30, second: 0 };

    log += '• Jam Buka: <strong>08:00:00</strong><br>';
    log += '• Jam Tutup: <strong>21:30:00</strong>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'PlainTime tidak mempedulikan tanggal berapa pun, hanya menyimpan posisi jarum jam.'
    ],
    quiz: {
      question: 'Tipe data Temporal apakah yang hanya menyimpan informasi jam, menit, detik tanpa menyertakan tanggal kalender?',
      options: [
        'Temporal.PlainTime',
        'Temporal.PlainDate',
        'Temporal.Instant',
        'Temporal.ZonedDateTime'
      ],
      answer: 0,
      explanation: '`Temporal.PlainTime` khusus menangani representasi waktu jam dinding murni.'
    },
    challenge: {
      title: 'Tantangan: Buat PlainTime',
      description: 'Lengkapi objek `const t = { hour: 14, minute: 30 };`.',
      startingCode: `const t = { hour: 14, minute: 30 };`,
      solution: `const t = { hour: 14, minute: 30 };`
    }
  },

  // ── 206. TEMPORAL ZONEDDATE ─────────────────────────────────────────────
  {
    id: 'temporal-zoneddate',
    title: 'Temporal ZonedDate',
    chapter: 'JS Temporal',
    chapterId: 'js-chap-temporal',
    order: 206,
    overview: 'Temporal.ZonedDateTime: tipe data waktu terlengkap di JavaScript yang menggabungkan tanggal, jam, zona waktu IANA resmi (misal "Asia/Jakarta"), dan kalender presisi.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS TEMPORAL</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 206 / 216</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌐 Waktu Global Berzona (ZonedDateTime)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>Temporal.ZonedDateTime</code> adalah tipe paling lengkap yang secara otomatis menangani aturan Daylight Saving Time (DST) dan konversi timezone IANA global secara native.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Temporal ZonedDateTime Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Konversi Waktu Jakarta ke London</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    log += '• Waktu Jakarta (WIB): <strong>2026-08-27T19:30:00+07:00[Asia/Jakarta]</strong><br>';
    log += '• Dikonversi ke London (BST): <strong>2026-08-27T13:30:00+01:00[Europe/London]</strong><br><br>';
    log += 'ZonedDateTime menangani perbedaan offset jam dan DST secara 100% otomatis!';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'ZonedDateTime menyertakan IANA Timezone Identifier di dalam kurung siku string representasinya (contoh [Asia/Jakarta]).'
    ],
    quiz: {
      question: 'Tipe data Temporal apakah yang menyimpan informasi tanggal, jam, dan zona waktu IANA lengkap secara bersamaan?',
      options: [
        'Temporal.ZonedDateTime',
        'Temporal.PlainDateTime',
        'Temporal.Instant',
        'Temporal.Duration'
      ],
      answer: 0,
      explanation: '`Temporal.ZonedDateTime` adalah tipe terlengkap yang menggabungkan tanggal, waktu, dan zona waktu IANA.'
    },
    challenge: {
      title: 'Tantangan: Tulis Timezone ID Jakarta',
      description: 'Simpan string timezone `"Asia/Jakarta"` ke `const tz = "Asia/Jakarta";`.',
      startingCode: `const tz = "";`,
      solution: `const tz = "Asia/Jakarta";`
    }
  },

  // ── 207. TEMPORAL NOW ───────────────────────────────────────────────────
  {
    id: 'temporal-now',
    title: 'Temporal Now',
    chapter: 'JS Temporal',
    chapterId: 'js-chap-temporal',
    order: 207,
    overview: 'Temporal.Now: membaca waktu sistem saat ini secara instan (Temporal.Now.instant(), plainDateISO(), zonedDateTimeISO(), timeZoneId()).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS TEMPORAL</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 207 / 216</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚡ Mengambil Waktu Sekarang (Temporal.Now)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>Temporal.Now</code> adalah namespace utilitas yang menyediakan method untuk mendapatkan waktu sistem saat ini dalam berbagai tipe Temporal.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Temporal Now Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Method Utilitas Temporal.Now</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    log += '<strong>Daftar Method Temporal.Now:</strong><br>';
    log += '• <code>Temporal.Now.instant()</code>: Titik UTC saat ini.<br>';
    log += '• <code>Temporal.Now.plainDateISO()</code>: Tanggal hari ini.<br>';
    log += '• <code>Temporal.Now.zonedDateTimeISO()</code>: Waktu lengkap + Timezone aktif.<br>';
    log += '• <code>Temporal.Now.timeZoneId()</code>: Nama timezone sistem pengguna.';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Temporal.Now.timeZoneId() mengembalikan nama zona waktu pengguna (misal "Asia/Jakarta").'
    ],
    quiz: {
      question: 'Method Temporal.Now manakah yang mengembalikan tanggal kalender hari ini (PlainDate) sesuai kalender ISO?',
      options: [
        'Temporal.Now.plainDateISO()',
        'Temporal.Now.today()',
        'Temporal.Now.date()',
        'Temporal.Now.getCurrentDate()'
      ],
      answer: 0,
      explanation: '`Temporal.Now.plainDateISO()` mengembalikan tanggal hari ini dalam format `Temporal.PlainDate`.'
    },
    challenge: {
      title: 'Tantangan: Sebutkan Method Instant',
      description: 'Simpan nama method `"instant"` ke `let m = "instant";`.',
      startingCode: `let m = "";`,
      solution: `let m = "instant";`
    }
  },

  // ── 208. TEMPORAL ARITHMETIC ────────────────────────────────────────────
  {
    id: 'temporal-arithmetic',
    title: 'Temporal Arithmetic',
    chapter: 'JS Temporal',
    chapterId: 'js-chap-temporal',
    order: 208,
    overview: 'Operasi Aritmatika Tanggal: penambahan .add() dan pengurangan .subtract() berbasis durasi tanpa bug pergantian bulan kalender.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS TEMPORAL</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 208 / 216</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">➕ Aritmatika Tanggal Aman (.add & .subtract)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Menambah 1 bulan pada tanggal "31 Januari" di objek Date lama menghasilkan "3 Maret" (karena overflow). Di Temporal, <code>.add({ months: 1 })</code> secara cerdas dibatasi (*clamped*) menjadi "28 Februari" secara akurat!
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Temporal Arithmetic Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Simulasi Penambahan Tanggal Cerdas</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    log += '• Tanggal Awal: <strong>2026-01-31</strong> (31 Januari)<br>';
    log += '• .add({ months: 1 }) di Temporal ➔ <strong>2026-02-28</strong> (Otomatis Clamped Aman!) ✅<br><br>';
    log += '• .subtract({ days: 10 }) ➔ Mengurangi 10 hari secara presisi.';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Temporal menyediakan opsi overflow: "constrain" (default) atau "reject" untuk mengontrol bagaimana tanggal akhir bulan diproses.'
    ],
    quiz: {
      question: 'Method Temporal apakah yang digunakan untuk menambahkan durasi waktu tertentu ke objek tanggal/waktu?',
      options: [
        '.plus()',
        '.add()',
        '.increment()',
        '.append()'
      ],
      answer: 1,
      explanation: 'Method `.add(duration)` digunakan untuk operasi penambahan durasi pada objek Temporal.'
    },
    challenge: {
      title: 'Tantangan: Panggil Method Add',
      description: 'Tulis operasi add `tgl.add({ days: 7 });`.',
      startingCode: `function tambahTujuhHari(tgl) {\n  return tgl.add({ days: 7 });\n}`,
      solution: `function tambahTujuhHari(tgl) {\n  return tgl.add({ days: 7 });\n}`
    }
  },

  // ── 209. TEMPORAL SINCE/UNTIL ───────────────────────────────────────────
  {
    id: 'temporal-since-until',
    title: 'Temporal Since/Until',
    chapter: 'JS Temporal',
    chapterId: 'js-chap-temporal',
    order: 209,
    overview: 'Menghitung selisih jarak interval waktu: method .since() dan .until() dengan konfigurasi pembulatan unit (days, weeks, months, years).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS TEMPORAL</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 209 / 216</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📏 Menghitung Selisih Waktu (.since & .until)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Tidak perlu lagi mengonversi milidetik ke hari secara manual. <code>awal.until(akhir, { largestUnit: 'days' })</code> langsung mengembalikan objek <code>Temporal.Duration</code> berisi jumlah hari yang tepat.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Temporal Since Until Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Hitung Mundur Ujian Akhir LMS</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    log += '• Hari Ini: 2026-08-27<br>';
    log += '• Tanggal Ujian: 2026-09-10<br>';
    log += '• Selisih (hariIni.until(ujian)): <strong>14 Hari Menuju Ujian</strong> 🚀';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      '.until() menghitung jarak dari waktu aktif ke waktu tujuan di masa depan.',
      '.since() menghitung jarak dari waktu lampau ke waktu aktif saat ini.'
    ],
    quiz: {
      question: 'Method Temporal apakah yang menghitung selisih waktu dari objek aktif saat ini menuju ke waktu target di masa depan?',
      options: [
        '.until()',
        '.since()',
        '.diff()',
        '.to()'
      ],
      answer: 0,
      explanation: 'Method `.until(other)` menghitung durasi dari titik saat ini menuju ke titik target `other`.'
    },
    challenge: {
      title: 'Tantangan: Panggil Method Until',
      description: 'Lakukan `tglA.until(tglB);`.',
      startingCode: `function hitungSelisih(tglA, tglB) {\n  return tglA.until(tglB);\n}`,
      solution: `function hitungSelisih(tglA, tglB) {\n  return tglA.until(tglB);\n}`
    }
  },

  // ── 210. TEMPORAL COMPARE ───────────────────────────────────────────────
  {
    id: 'temporal-compare',
    title: 'Temporal Compare',
    chapter: 'JS Temporal',
    chapterId: 'js-chap-temporal',
    order: 210,
    overview: 'Pengurutan & Komparasi Waktu: fungsi statis Temporal.PlainDate.compare() (-1, 0, 1), method .equals() untuk pengecekan kesetaraan eksak, dan integrasi sort array.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS TEMPORAL</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 210 / 216</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔢 Membandingkan & Mengurutkan Tanggal</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Fungsi <code>Temporal.PlainDate.compare(a, b)</code> mengembalikan <code>-1</code> jika a lebih awal, <code>0</code> jika sama persis, dan <code>1</code> jika a lebih akhir.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Temporal Compare Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Pengurutan Array Tanggal</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const daftarTgl = ['2026-12-01', '2026-08-17', '2026-01-01'];
    // Sorting dengan fungsi komparasi
    const urut = [...daftarTgl].sort();

    log += '• Tanggal Terurut: [' + urut.join(', ') + '] ✅';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Format ISO 8601 YYYY-MM-DD secara leksikografis kompatibel dengan pengurutan alfabetis standar.'
    ],
    quiz: {
      question: 'Nilai apakah yang dikembalikan oleh Temporal.PlainDate.compare(a, b) jika tanggal a lebih awal daripada tanggal b?',
      options: [
        '-1',
        '0',
        '1',
        'false'
      ],
      answer: 0,
      explanation: 'Method compare mengembalikan `-1` jika operan pertama lebih awal dari operan kedua.'
    },
    challenge: {
      title: 'Tantangan: Cek Kesetaraan Equals',
      description: 'Panggil `a.equals(b)` dan kembalikan boolean.',
      startingCode: `function isSama(a, b) {\n  return a.equals(b);\n}`,
      solution: `function isSama(a, b) {\n  return a.equals(b);\n}`
    }
  },

  // ── 211. TEMPORAL CONVERSION ────────────────────────────────────────────
  {
    id: 'temporal-conversion',
    title: 'Temporal Conversion',
    chapter: 'JS Temporal',
    chapterId: 'js-chap-temporal',
    order: 211,
    overview: 'Konversi antar tipe Temporal: toZonedDateTime(), toPlainDate(), toPlainTime(), toInstant(), serta interoperabilitas bolak-balik dengan objek Date lama.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS TEMPORAL</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 211 / 216</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔄 Konversi Tipe & Interoperabilitas Date Lama</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Temporal dirancang untuk hidup berdampingan dengan kode lama. Objek <code>Date</code> memiliki method <code>date.toTemporalInstant()</code> untuk berpindah ke dunia Temporal secara mulus.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Temporal Conversion Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Jembatan Konversi Date Lama ke Temporal</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const legacyDate = new Date();
    log += '• Objek Date Lama: ' + legacyDate.toISOString() + '<br>';
    log += '• Jembatan Konversi: <code>legacyDate.toTemporalInstant()</code> ➔ Menghasilkan Temporal.Instant!';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'toTemporalInstant() memungkinkan adopsi Temporal secara bertahap tanpa merombak total basis kode yang sudah ada.'
    ],
    quiz: {
      question: 'Method apa yang ditambahkan ke prototype Date lama untuk mengonversinya menjadi objek Temporal.Instant?',
      options: [
        'date.toTemporalInstant()',
        'date.toInstant()',
        'date.asTemporal()',
        'date.convert()'
      ],
      answer: 0,
      explanation: '`Date.prototype.toTemporalInstant()` adalah jembatan konversi resmi dari objek Date ke Temporal.'
    },
    challenge: {
      title: 'Tantangan: Konversi ke PlainDate',
      description: 'Panggil `dt.toPlainDate()` untuk mengambil tanggal saja.',
      startingCode: `function getOnlyDate(dt) {\n  return dt.toPlainDate();\n}`,
      solution: `function getOnlyDate(dt) {\n  return dt.toPlainDate();\n}`
    }
  },

  // ── 212. TEMPORAL FORMATS ───────────────────────────────────────────────
  {
    id: 'temporal-formats',
    title: 'Temporal Formats',
    chapter: 'JS Temporal',
    chapterId: 'js-chap-temporal',
    order: 212,
    overview: 'Format representasi string ISO 8601 standar dan integrasi lokalisasi toLocaleString() menggunakan Intl.DateTimeFormat (format bahasa Indonesia id-ID).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS TEMPORAL</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 212 / 216</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌐 Format Lokalisasi (Intl & toLocaleString)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Semua objek Temporal terintegrasi penuh dengan <code>Intl.DateTimeFormat</code> sehingga memformat tanggal ke bahasa Indonesia (<code>id-ID</code>) menjadi sangat mudah.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Temporal Formats Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Format Bahasa Indonesia (id-ID)</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const formatterIndo = new Intl.DateTimeFormat('id-ID', {
      dateStyle: 'full',
      timeStyle: 'long',
      timeZone: 'Asia/Jakarta'
    });

    log += '• Format Indonesia: <strong>' + formatterIndo.format(new Date()) + '</strong>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Intl.DateTimeFormat mengubah timestamp menjadi format teks lengkap (misal "Kamis, 27 Agustus 2026").'
    ],
    quiz: {
      question: 'Kode locale standar internasional apakah yang digunakan untuk memformat waktu ke bahasa Indonesia?',
      options: [
        'in-ID',
        'id-ID',
        'id-INA',
        'indo'
      ],
      answer: 1,
      explanation: 'Kode locale BCP 47 standar untuk bahasa Indonesia adalah `id-ID`.'
    },
    challenge: {
      title: 'Tantangan: Buat Formatter Intl',
      description: 'Instansiasi `new Intl.DateTimeFormat("id-ID");`.',
      startingCode: `const fmt = new Intl.DateTimeFormat("id-ID");`,
      solution: `const fmt = new Intl.DateTimeFormat("id-ID");`
    }
  },

  // ── 213. TEMPORAL MISTAKES ──────────────────────────────────────────────
  {
    id: 'temporal-mistakes',
    title: 'Temporal Mistakes',
    chapter: 'JS Temporal',
    chapterId: 'js-chap-temporal',
    order: 213,
    overview: 'Jebakan kesalahan umum saat mengelola waktu: salah memilih tipe Plain vs Zoned, kebingungan Daylight Saving Time (DST), dan cara mitigasinya.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS TEMPORAL</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 213 / 216</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚠️ Jebakan Kesalahan Umum Penanganan Waktu</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Kesalahan paling umum adalah menggunakan <code>ZonedDateTime</code> untuk tanggal ulang tahun (yang seharusnya <code>PlainDate</code>), atau menggunakan <code>PlainDateTime</code> untuk log transaksi server (yang seharusnya <code>Instant</code>).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Temporal Mistakes Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Panduan Pemilihan Tipe yang Tepat</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    log += '<strong>Aturan Emas Pemilihan Tipe:</strong><br>';
    log += '• Log Server / Transaksi Finansial ➔ Gunakan <strong>Temporal.Instant</strong><br>';
    log += '• Tanggal Lahir / Libur Nasional ➔ Gunakan <strong>Temporal.PlainDate</strong><br>';
    log += '• Alarm Pagi / Jam Buka Toko ➔ Gunakan <strong>Temporal.PlainTime</strong><br>';
    log += '• Pertemuan Global / Jadwal Pesawat ➔ Gunakan <strong>Temporal.ZonedDateTime</strong>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Memilih tipe yang tepat sejak awal mencegah 99% bug timezone dan DST di masa depan.'
    ],
    quiz: {
      question: 'Tipe data Temporal apakah yang wajib digunakan untuk mencatat timestamp log audit transaksi finansial di database?',
      options: [
        'Temporal.PlainDate',
        'Temporal.Instant',
        'Temporal.PlainTime',
        'Temporal.PlainMonthDay'
      ],
      answer: 1,
      explanation: '`Temporal.Instant` adalah tipe yang tepat untuk mencatat audit timestamp UTC absolut di database.'
    },
    challenge: {
      title: 'Tantangan: Pilih Tipe Instant untuk Log',
      description: 'Simpan string `"Instant"` ke `let tipe = "Instant";`.',
      startingCode: `let tipe = "";`,
      solution: `let tipe = "Instant";`
    }
  },

  // ── 214. TEMPORAL MIGRATE ───────────────────────────────────────────────
  {
    id: 'temporal-migrate',
    title: 'Temporal Migrate',
    chapter: 'JS Temporal',
    chapterId: 'js-chap-temporal',
    order: 214,
    overview: 'Panduan migrasi kode: menggantikan pustaka pihak ketiga (Moment.js, date-fns, Day.js) menjadi Temporal native untuk mengurangi ukuran bundle hingga ratusan kilobyte.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS TEMPORAL</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 214 / 216</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📦 Migrasi dari Moment.js / date-fns ke Temporal</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Dengan Temporal native di browser, Anda dapat menghapus dependensi pihak ketiga seperti Moment.js (yang berukuran ~70KB gzip) dan mempercepat loading aplikasi web secara signifikan.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Temporal Migrate Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Perbandingan Sintaks Migrasi</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    log += '• <strong>Moment.js Lama:</strong> <code>moment().add(7, "days")</code><br>';
    log += '• <strong>Temporal Native:</strong> <code>Temporal.Now.plainDateISO().add({ days: 7 })</code><br><br>';
    log += '✅ Zero Bundle Size: Menghemat bandwidth pengunjung!';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Migrasi ke Temporal native mengeliminasi hutang teknis (technical debt) dependensi eksternal.'
    ],
    quiz: {
      question: 'Apa keuntungan utama memigrasikan kode aplikasi dari Moment.js ke native Temporal API?',
      options: [
        'Mengurangi ukuran bundle JavaScript aplikasi hingga puluhan kilobyte dan performa native lebih cepat',
        'Website otomatis berwarna gelap',
        'Menonaktifkan CSS',
        'Mengganti database ke SQL'
      ],
      answer: 0,
      explanation: 'Menggunakan API native browser mengeliminasi kebutuhan mengunduh library berat sehingga mempercepat loading halaman.'
    },
    challenge: {
      title: 'Tantangan: Tulis Sintaks Add Temporal',
      description: 'Lengkapi durasi `{ days: 1 }` pada `t.add({ days: 1 });`.',
      startingCode: `function addOneDay(t) {\n  return t.add({ days: 1 });\n}`,
      solution: `function addOneDay(t) {\n  return t.add({ days: 1 });\n}`
    }
  },

  // ── 215. TEMPORAL STANDARDS ─────────────────────────────────────────────
  {
    id: 'temporal-standards',
    title: 'Temporal Standards',
    chapter: 'JS Temporal',
    chapterId: 'js-chap-temporal',
    order: 215,
    overview: 'Standar ISO 8601 & RFC 9557: aturan penulisan string ekstensi timezone standar (contoh: 2026-08-27T19:30:00+07:00[Asia/Jakarta][u-ca=iso8601]).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS TEMPORAL</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 215 / 216</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📜 Standar Internasional RFC 9557 & ISO 8601</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Temporal mengadopsi standar internasional terbaru <strong>RFC 9557</strong> yang memperluas format ISO 8601 dengan anotasi kurung siku timezone <code>[Asia/Jakarta]</code> untuk memastikan format waktu interoperabel di seluruh platform.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Temporal Standards Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Anatomi String RFC 9557</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const stringRFC = '2026-08-27T19:30:00+07:00[Asia/Jakarta]';

    log += '<strong>Format String RFC 9557:</strong><br>';
    log += '<code>' + stringRFC + '</code><br><br>';
    log += '• Tanggal: 2026-08-27<br>';
    log += '• Waktu: 19:30:00<br>';
    log += '• Offset UTC: +07:00 (WIB)<br>';
    log += '• Timezone IANA: [Asia/Jakarta]';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'RFC 9557 menjamin bahwa informasi timezone tidak hilang saat data tanggal diserialisasi menjadi teks string.'
    ],
    quiz: {
      question: 'Standar RFC berapakah yang mengatur format penulisan ekstensi string timezone di dalam tanda kurung siku [TimezoneID]?',
      options: [
        'RFC 9557',
        'RFC 2616',
        'RFC 7519',
        'RFC 1035'
      ],
      answer: 0,
      explanation: '`RFC 9557` adalah standar resmi untuk ekstensi string tanggal dan waktu dengan anotasi timezone.'
    },
    challenge: {
      title: 'Tantangan: Format ISO Tanggal',
      description: 'Simpan string `"2026-08-27"` ke `let iso = "2026-08-27";`.',
      startingCode: `let iso = "";`,
      solution: `let iso = "2026-08-27";`
    }
  },

  // ── 216. TEMPORAL REFERENCE ─────────────────────────────────────────────
  {
    id: 'temporal-reference',
    title: 'Temporal Reference',
    chapter: 'JS Temporal',
    chapterId: 'js-chap-temporal',
    order: 216,
    overview: 'Kamus referensi komprehensif seluruh method, properti, dan tipe data namespace Temporal di JavaScript modern.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS TEMPORAL</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 216 / 216 (FINAL MATERI TEMPORAL)</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📚 Kamus Referensi Lengkap Objek Temporal</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Tabel berikut merangkum seluruh kelas dan utilitas inti di dalam namespace <code>Temporal</code>.
          </p>
        </div>

        <div class="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-xl text-xs">
          <table class="w-full text-left">
            <thead class="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white">
              <tr>
                <th class="p-3">Tipe / Class</th>
                <th class="p-3">Deskripsi & Peran Utama</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-800 font-mono text-slate-600 dark:text-slate-300">
              <tr><td class="p-3 font-bold text-amber-500">Temporal.Now</td><td>Utilitas membaca waktu aktif sistem saat ini.</td></tr>
              <tr><td class="p-3 font-bold text-amber-500">Temporal.Instant</td><td>Titik waktu UTC absolut pada timeline Epoch.</td></tr>
              <tr><td class="p-3 font-bold text-amber-500">Temporal.PlainDate</td><td>Tanggal kalender murni (Tahun-Bulan-Hari).</td></tr>
              <tr><td class="p-3 font-bold text-amber-500">Temporal.PlainTime</td><td>Jam dinding murni (Jam:Menit:Detik).</td></tr>
              <tr><td class="p-3 font-bold text-amber-500">Temporal.PlainDateTime</td><td>Kombinasi tanggal & jam kalender tanpa timezone.</td></tr>
              <tr><td class="p-3 font-bold text-amber-500">Temporal.ZonedDateTime</td><td>Waktu lengkap dengan zona waktu IANA resmi.</td></tr>
              <tr><td class="p-3 font-bold text-amber-500">Temporal.Duration</td><td>Kuantitas durasi interval waktu.</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Temporal Complete Reference Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Selamat! Anda Telah Menyelesaikan Materi Temporal API 🎓</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 20px; border-radius: 12px; font-family: monospace;">
    🎉 <strong>Kurikulum JavaScript Modern Telah Selesai Secara Lengkap!</strong><br><br>
    Dari materi 1 (JS Home) hingga materi 216 (Temporal Reference), Anda kini menguasai seluruh spektrum JavaScript modern dari dasar, DOM, Events, Web API, hingga Temporal API mutakhir!
  </div>

</body>
</html>`,
    codeExplanation: [
      'Temporal Reference adalah pedoman lengkap bagi developer untuk membangun aplikasi web berskala enterprise yang tangguh.'
    ],
    quiz: {
      question: 'Tipe data Temporal apakah yang digunakan untuk merepresentasikan interval durasi waktu seperti "3 jam 15 menit"?',
      options: [
        'Temporal.Duration',
        'Temporal.Instant',
        'Temporal.Interval',
        'Temporal.TimeSpan'
      ],
      answer: 0,
      explanation: '`Temporal.Duration` adalah tipe data resmi untuk merepresentasikan kuantitas interval durasi waktu.'
    },
    challenge: {
      title: 'Tantangan Puncak: Tulis Namespace Temporal',
      description: 'Simpan string nama namespace `"Temporal"` ke `const ns = "Temporal";`.',
      startingCode: `const ns = "";`,
      solution: `const ns = "Temporal";`
    }
  }
];
