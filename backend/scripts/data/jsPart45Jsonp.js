module.exports = [
  // ── 292. JS JSONP ───────────────────────────────────────────────────────
  {
    id: 'js-jsonp',
    title: 'JS JSONP',
    chapter: 'JS JSONP',
    chapterId: 'js-chap-jsonp',
    order: 292,
    overview: 'JSON with Padding (JSONP): teknik historis untuk melakukan request data lintas domain (Cross-Origin) sebelum era standar CORS modern dengan menyisipkan payload di dalam pemanggilan fungsi script tag.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS JSONP</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 292 / 292 (GRAND FINALE MATERI JAVASCRIPT LENGKAP)</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📜 Trik Historis Cross-Domain: JSONP (JSON with Padding)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Sebelum browser mendukung <strong>CORS (Cross-Origin Resource Sharing)</strong> resmi, kebijakan <em>Same-Origin Policy</em> memblokir semua request XHR lintas domain. Pengembang mengatasinya dengan <strong>JSONP</strong>: memanfaatkan celah tag <code>&lt;script src="..."&gt;</code> yang bebas memuat script dari domain mana pun, di mana server merespons data yang dibungkus (*padded*) dalam fungsi callback JavaScript.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS JSONP Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Simulasi Mekanisme Kerja JSONP</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 20px; border-radius: 12px; font-family: monospace;"></div>

  <script>
    // 1. Definisikan fungsi callback di client window
    function prosesDataJSONP(data) {
      document.getElementById('output').innerHTML = 
        '🎉 <strong>Data JSONP Diterima:</strong><br>' +
        '• Judul: ' + data.judul + '<br>' +
        '• Pengirim: ' + data.server + '<br><br>' +
        '🏆 <strong>SELAMAT! 292 MATERI KURIKULUM JAVASCRIPT RESMI TELAH SELESAI LENGKAP 100%!</strong> 🎓';
    }

    // 2. Simulasi respons dari server pihak ketiga:
    // Server mengirimkan teks: prosesDataJSONP({ judul: 'Mastering JavaScript', server: 'api.external.com' });
    setTimeout(() => {
      prosesDataJSONP({
        judul: 'JavaScript Full Spectrum Mastery (Materi 1 - 292)',
        server: 'https://api.edutech-lms.com/v1'
      });
    }, 200);
  </script>

</body>
</html>`,
    codeExplanation: [
      'JSONP bekerja dengan meminta script: <script src="https://api.com/data?callback=prosesDataJSONP"></script>.',
      'Saat ini JSONP telah digantikan sepenuhnya oleh standar modern CORS (Cross-Origin Resource Sharing) yang jauh lebih aman.'
    ],
    quiz: {
      question: 'Mengapa teknik JSONP dapat melewati batasan Same-Origin Policy pada browser zaman dahulu?',
      options: [
        'Karena tag HTML <script src="..."> diizinkan memuat dan mengeksekusi berkas JavaScript dari domain eksternal mana pun',
        'Karena JSONP menggunakan enkripsi militer',
        'Karena JSONP mematikan browser firewall',
        'Karena JSONP hanya berjalan di localhost'
      ],
      answer: 0,
      explanation: 'Tag `<script>` tidak dibatasi oleh Same-Origin Policy sehingga dapat mengeksekusi kode script dari domain lain.'
    },
    challenge: {
      title: 'Tantangan Puncak: Definisikan Callback JSONP',
      description: 'Lengkapi fungsi callback `function myCallback(data) { return data; }`.',
      startingCode: `function myCallback(data) {\n  return data;\n}`,
      solution: `function myCallback(data) {\n  return data;\n}`
    }
  }
];
