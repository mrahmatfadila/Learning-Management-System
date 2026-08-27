module.exports = [
  // ── 49. JS TIMERS ───────────────────────────────────────────────────────
  {
    id: 'js-timers',
    title: 'JS Timers',
    chapter: 'JS Timers',
    chapterId: 'js-chap-timers',
    order: 49,
    overview: 'Kuasai pengaturan waktu asinkronus di JavaScript: setTimeout(), clearTimeout(), setInterval(), clearInterval(), pembuatan jam digital real-time, dan stopwatch.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS TIMERS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 49 / 56</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⏱️ JavaScript Timing Events (setTimeout & setInterval)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            JavaScript memungkinkan eksekusi kode ditunda atau diulang secara berkala menggunakan API timer bawaan browser (Window Timing Events).
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
            <strong class="text-amber-500 text-sm">1. setTimeout(fn, delayMs)</strong>
            <p class="text-slate-600 dark:text-slate-400">Mengeksekusi fungsi <strong>1 kali</strong> setelah jeda waktu tertentu (dalam milidetik). Dibatalkan dengan <code>clearTimeout(id)</code>.</p>
          </div>
          <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
            <strong class="text-amber-500 text-sm">2. setInterval(fn, delayMs)</strong>
            <p class="text-slate-600 dark:text-slate-400">Mengeksekusi fungsi <strong>berulang kali tanpa henti</strong> setiap interval waktu tertentu. Dibatalkan dengan <code>clearInterval(id)</code>.</p>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Jam Digital & Stopwatch JS</title>
  <style>
    body { font-family: system-ui, sans-serif; padding: 24px; background: #0f172a; color: white; text-align: center; }
    .clock-card { background: #1e293b; padding: 25px; border-radius: 16px; display: inline-block; box-shadow: 0 10px 25px rgba(0,0,0,0.5); min-width: 320px; }
    .clock-display { font-size: 38px; font-family: monospace; font-weight: bold; color: #38bdf8; margin: 15px 0; letter-spacing: 2px; }
    button { padding: 8px 16px; margin: 4px; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; }
    .btn-stop { background: #ef4444; color: white; }
    .btn-start { background: #22c55e; color: white; }
  </style>
</head>
<body>

  <div class="clock-card">
    <h2>Jam Digital Real-Time ⏰</h2>
    <div id="jam" class="clock-display">00:00:00</div>
    <button class="btn-stop" onclick="hentikanJam()">Hentikan Jam</button>
    <button class="btn-start" onclick="mulaiJam()">Nyalakan Jam</button>
  </div>

  <script>
    let timerId = null;

    function perbaruiJam() {
      const sekarang = new Date();
      document.getElementById('jam').innerText = sekarang.toLocaleTimeString('id-ID');
    }

    function mulaiJam() {
      if (!timerId) {
        perbaruiJam(); // Perbarui segera
        timerId = setInterval(perbaruiJam, 1000); // Ulangi setiap 1000ms (1 detik)
      }
    }

    function hentikanJam() {
      if (timerId) {
        clearInterval(timerId); // Batalkan timer interval
        timerId = null;
      }
    }

    // Mulai jam otomatis saat halaman dimuat
    mulaiJam();
  </script>

</body>
</html>`,
    codeExplanation: [
      'setInterval(perbaruiJam, 1000) menjalankan fungsi perbaruiJam setiap 1.000 milidetik (1 detik).',
      'timerId menyimpan ID unik pengenal timer yang dikembalikan oleh setInterval.',
      'clearInterval(timerId) menggunakan ID tersebut untuk menghentikan perulangan timer seketika.'
    ],
    quiz: {
      question: 'Fungsi manakah yang digunakan untuk membatalkan timer yang dibuat dengan setInterval()?',
      options: [
        'stopInterval()',
        'clearTimeout()',
        'clearInterval()',
        'cancelInterval()'
      ],
      answer: 2,
      explanation: 'Fungsi `clearInterval(timerId)` digunakan untuk menghentikan interval timer yang telah dibuat sebelumnya dengan `setInterval()`.'
    },
    challenge: {
      title: 'Tantangan: Jalankan Alert Setelah 3 Detik',
      description: 'Gunakan `setTimeout(() => { alert("Waktu Habis!"); }, 3000);` untuk menunda pesan selama 3 detik.',
      startingCode: `// Tulis setTimeout 3000ms di bawah:\n`,
      solution: `setTimeout(() => { alert("Waktu Habis!"); }, 3000);`
    }
  }
];
