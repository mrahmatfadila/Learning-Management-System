module.exports = [
  // ── 190. APIS INTRO ─────────────────────────────────────────────────────
  {
    id: 'apis-intro',
    title: 'APIs Intro',
    chapter: 'JS Web API',
    chapterId: 'js-chap-webapi',
    order: 190,
    overview: 'Pengenalan ekosistem Web APIs di browser: perbedaan Browser Native API vs Third-Party Web Services API, model perizinan (Permissions API), dan asynchronous Web API architecture.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">WEB APIS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 190 / 195</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔌 Pengenalan Ekosistem Web API</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <strong>Web API</strong> adalah antarmuka bawaan yang disediakan oleh browser untuk memperluas kemampuan JavaScript, memungkinkan akses ke sensor perangkat keras, penyimpanan lokal, pemrosesan multi-thread, hingga koordinat GPS.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Web APIs Intro Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Pemeriksaan Dukungan Fitur Web API</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    log += '• Geolocation API: <strong>' + ('geolocation' in navigator ? 'Didukung ✅' : 'Tidak') + '</strong><br>';
    log += '• LocalStorage API: <strong>' + ('localStorage' in window ? 'Didukung ✅' : 'Tidak') + '</strong><br>';
    log += '• Web Worker API: <strong>' + ('Worker' in window ? 'Didukung ✅' : 'Tidak') + '</strong><br>';
    log += '• Clipboard API: <strong>' + ('clipboard' in navigator ? 'Didukung ✅' : 'Tidak') + '</strong><br>';
    log += '• Service Worker (PWA): <strong>' + ('serviceWorker' in navigator ? 'Didukung ✅' : 'Tidak') + '</strong>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Pemeriksaan ("fitur" in window/navigator) adalah teknik Feature Detection untuk memastikan kompatibilitas sebelum menggunakan Web API.'
    ],
    quiz: {
      question: 'Manakah dari berikut ini yang merupakan contoh Browser Native Web API?',
      options: [
        'React Router',
        'Geolocation API & Web Storage API',
        'Bootstrap CSS',
        'Lodash Library'
      ],
      answer: 1,
      explanation: '`Geolocation API` dan `Web Storage API` adalah Web API resmi bawaan browser standar W3C.'
    },
    challenge: {
      title: 'Tantangan: Deteksi Dukungan Web Worker',
      description: 'Periksa dukungan Worker `const support = "Worker" in window;`.',
      startingCode: `let support = false;`,
      solution: `let support = "Worker" in window;`
    }
  },

  // ── 191. API GEOLOCATION ────────────────────────────────────────────────
  {
    id: 'api-geolocation',
    title: 'API Geolocation',
    chapter: 'JS Web API',
    chapterId: 'js-chap-webapi',
    order: 191,
    overview: 'Geolocation API: membaca posisi koordinat fisik pengguna (latitude, longitude, accuracy) via navigator.geolocation.getCurrentPosition(), pelacakan pergerakan dengan watchPosition(), dan penanganan izin (Permission Denied).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">WEB APIS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 191 / 195</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📍 Melacak Koordinat Geografis (Geolocation API)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <strong>Geolocation API</strong> memungkinkan aplikasi web meminta izin akses ke sensor GPS, Wi-Fi, dan IP pengguna untuk mendapatkan posisi koordinat garis lintang (*Latitude*) dan garis bujur (*Longitude*).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>API Geolocation Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Ambil Koordinat Lokasi Anda</h2>
  <button onclick="dapatkanLokasi()" style="padding: 10px 18px; background: #0284c7; color: white; border: none; border-radius: 6px; font-weight: bold; cursor: pointer;">
    📍 Dapatkan Posisi GPS
  </button>
  <div id="output" style="margin-top: 15px; background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    function dapatkanLokasi() {
      const output = document.getElementById('output');

      if (!('geolocation' in navigator)) {
        output.innerHTML = '❌ Browser Anda tidak mendukung Geolocation API.';
        return;
      }

      output.innerHTML = '⏳ Menunggu izin dan membaca sensor GPS...';

      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const crd = pos.coords;
          output.innerHTML = 
            '✅ <strong>Lokasi Berhasil Ditemukan:</strong><br>' +
            '• Garis Lintang (Latitude): ' + crd.latitude + '<br>' +
            '• Garis Bujur (Longitude): ' + crd.longitude + '<br>' +
            '• Tingkat Akurasi: ± ' + Math.round(crd.accuracy) + ' meter';
        },
        (err) => {
          output.innerHTML = '❌ Gagal mendapatkan lokasi (' + err.code + '): ' + err.message;
        },
        { enableHighAccuracy: true, timeout: 10000 }
      );
    }
  </script>

</body>
</html>`,
    codeExplanation: [
      'navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options) meminta persetujuan pengguna sebelum membaca koordinat GPS.',
      'Aplikasi wajib berjalan di protokol HTTPS yang aman untuk mengakses data lokasi.'
    ],
    quiz: {
      question: 'Method Geolocation API manakah yang digunakan untuk membaca koordinat lokasi perangkat saat ini sekali panggil?',
      options: [
        'navigator.geolocation.getPosition()',
        'navigator.geolocation.getCurrentPosition()',
        'navigator.geolocation.locate()',
        'navigator.geolocation.findCoords()'
      ],
      answer: 1,
      explanation: '`navigator.geolocation.getCurrentPosition()` adalah method standar untuk mengambil posisi koordinat saat ini.'
    },
    challenge: {
      title: 'Tantangan: Baca Koordinat Latitude',
      description: 'Ambil properti latitude `const lat = pos.coords.latitude;`.',
      startingCode: `function onPos(pos) {\n  let lat = pos.coords.latitude;\n  return lat;\n}`,
      solution: `function onPos(pos) {\n  let lat = pos.coords.latitude;\n  return lat;\n}`
    }
  },

  // ── 192. API WEB POINTER ────────────────────────────────────────────────
  {
    id: 'api-web-pointer',
    title: 'API Web Pointer',
    chapter: 'JS Web API',
    chapterId: 'js-chap-webapi',
    order: 192,
    overview: 'Pointer Events & Pointer Lock API: menyatukan penanganan input mouse, sentuhan jari layar sentuh (touchscreen), dan pena digital (stylus pen) dalam satu antarmuka terpadu.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">WEB APIS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 192 / 195</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">👆 Pointer Events API Terpadu</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Daripada menulis dua handler terpisah untuk Mouse (<code>mousedown</code>) dan Layar Sentuh (<code>touchstart</code>), <strong>Pointer Events API</strong> menyediakan event universal (<code>pointerdown</code>, <code>pointermove</code>, <code>pointerup</code>) yang mengenali semua jenis perangkat input.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>API Pointer Events Demo</title>
  <style>
    .canvas-box { width: 100%; height: 120px; background: #1e293b; color: white; display: flex; align-items: center; justify-content: center; border-radius: 12px; touch-action: none; cursor: pointer; }
  </style>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Kanvas Deteksi Pointer Universal</h2>
  <div id="pointerBox" class="canvas-box">
    Sentuh dengan jari atau klik mouse di kotak ini!
  </div>
  <div id="output" style="margin-top: 15px; background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    const pBox = document.getElementById('pointerBox');

    pBox.addEventListener('pointerdown', (e) => {
      document.getElementById('output').innerHTML = 
        '• Jenis Pointer (pointerType): <strong>' + e.pointerType + '</strong> (mouse / touch / pen)<br>' +
        '• Tekanan Sentuh (pressure): ' + e.pressure + '<br>' +
        '• Pointer ID: ' + e.pointerId;
    });
  </script>

</body>
</html>`,
    codeExplanation: [
      'e.pointerType mengidentifikasi apakah interaksi berasal dari "mouse", "touch" (jari), atau "pen" (stylus).',
      'e.pressure membaca tingkat kekuatan tekanan pada stylus pen digital.'
    ],
    quiz: {
      question: 'Event apakah yang menggantikan kebutuhan menulis kode terpisah untuk mousedown dan touchstart secara universal?',
      options: [
        'pointerdown',
        'clickstart',
        'touchmouse',
        'inputdown'
      ],
      answer: 0,
      explanation: '`pointerdown` menangkap event sentuhan jari, klik mouse, maupun pena stylus secara terpadu.'
    },
    challenge: {
      title: 'Tantangan: Pasang Pointerdown Listener',
      description: 'Pasang listener `box.addEventListener("pointerdown", () => {});`.',
      startingCode: `const box = document.createElement("div");\n// Pasang pointerdown di bawah:\n`,
      solution: `const box = document.createElement("div");\nbox.addEventListener("pointerdown", () => {});`
    }
  },

  // ── 193. API WEB STORAGE ────────────────────────────────────────────────
  {
    id: 'api-web-storage',
    title: 'API Web Storage',
    chapter: 'JS Web API',
    chapterId: 'js-chap-webapi',
    order: 193,
    overview: 'Web Storage API mendalam: komparasi localStorage (persisten permanen) vs sessionStorage (sementara per-tab), kapasitas 5-10MB, dan event storage untuk sinkronisasi multi-tab.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">WEB APIS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 193 / 195</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">💾 Penyimpanan Lokal: localStorage vs sessionStorage</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Web Storage API menyediakan mekanisme penyimpanan data key-value di browser dengan kapasitas hingga 5MB–10MB (jauh lebih besar dari Cookies yang hanya 4KB) tanpa pernah dikirim otomatis ke server.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>API Web Storage Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Simulasi localStorage vs sessionStorage</h2>
  <button onclick="ujiStorage()" style="padding: 8px 16px; background: #0284c7; color: white; border: none; border-radius: 6px; font-weight: bold; cursor: pointer;">
    Simpan Data Sesi & Lokal
  </button>
  <div id="output" style="margin-top: 15px; background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    function ujiStorage() {
      // 1. localStorage: Bertahan selamanya bahkan saat browser ditutup
      localStorage.setItem('lms_token', 'JWT_PERMANENT_TOKEN_123');

      // 2. sessionStorage: Dihapus otomatis saat tab browser ditutup
      sessionStorage.setItem('temp_step', 'Langkah 3 Pendaftaran');

      document.getElementById('output').innerHTML = 
        '• localStorage.getItem("lms_token"): <strong>' + localStorage.getItem('lms_token') + '</strong><br>' +
        '• sessionStorage.getItem("temp_step"): <strong>' + sessionStorage.getItem('temp_step') + '</strong>';
    }
  </script>

</body>
</html>`,
    codeExplanation: [
      'localStorage menyimpan data secara permanen hingga dibersihkan secara eksplisit oleh kode atau pengguna.',
      'sessionStorage mengisolasi data per-tab dan otomatis musnah saat tab ditutup.'
    ],
    quiz: {
      question: 'Manakah dari mekanisme penyimpanan berikut yang datanya otomatis terhapus ketika pengguna menutup tab browser?',
      options: [
        'localStorage',
        'sessionStorage',
        'IndexedDB',
        'Cookies (dengan max-age)'
      ],
      answer: 1,
      explanation: '`sessionStorage` hanya berlaku selama siklus hidup tab browser aktif berlangsung.'
    },
    challenge: {
      title: 'Tantangan: Bersihkan localStorage',
      description: 'Panggil pembersihan `localStorage.clear();`.',
      startingCode: `function clearAll() {\n  // Bersihkan di bawah:\n}`,
      solution: `function clearAll() {\n  localStorage.clear();\n}`
    }
  },

  // ── 194. API VALIDATION ─────────────────────────────────────────────────
  {
    id: 'api-validation',
    title: 'API Validation',
    chapter: 'JS Web API',
    chapterId: 'js-chap-webapi',
    order: 194,
    overview: 'Constraint Validation Web API: arsitektur validasi client-side, evaluasi objek ValidityState (badInput, customError, patternMismatch, rangeOverflow, stepMismatch, valid), dan proteksi submit.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">WEB APIS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 194 / 195</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛡️ Evaluasi Lengkap Objek ValidityState</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Properti <code>input.validity</code> mengembalikan objek <strong>ValidityState</strong> yang berisi sekumpulan flag boolean untuk mengetahui alasan pasti kegagalan validasi.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>API Validation ValidityState Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Inspeksi Flag Objek ValidityState</h2>
  <input type="email" id="testEmail" placeholder="nama@domain.com" required style="padding: 8px; width: 250px; border-radius: 6px; border: 1px solid #cbd5e1;">
  <button onclick="periksaValidityState()" style="padding: 8px 16px; background: #0284c7; color: white; border: none; border-radius: 6px; font-weight: bold; cursor: pointer;">
    Inspeksi Flags
  </button>
  <div id="output" style="margin-top: 15px; background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    function periksaValidityState() {
      const input = document.getElementById('testEmail');
      const state = input.validity;
      let log = '';

      log += '• validity.valid: <strong>' + state.valid + '</strong><br>';
      log += '• validity.valueMissing (Kosong): ' + state.valueMissing + '<br>';
      log += '• validity.typeMismatch (Format Email Salah): ' + state.typeMismatch + '<br>';
      log += '• validationMessage: "' + input.validationMessage + '"';

      document.getElementById('output').innerHTML = log;
    }
  </script>

</body>
</html>`,
    codeExplanation: [
      'state.valid bernilai true hanya jika seluruh flag pelanggaran lainnya bernilai false.'
    ],
    quiz: {
      question: 'Flag boolean apakah pada input.validity yang bernilai true jika pengguna belum mengisi input yang memiliki atribut required?',
      options: [
        'validity.isEmpty',
        'validity.valueMissing',
        'validity.requiredError',
        'validity.noValue'
      ],
      answer: 1,
      explanation: 'Flag `validity.valueMissing` bernilai `true` jika input bertanda `required` dibiarkan kosong oleh pengguna.'
    },
    challenge: {
      title: 'Tantangan: Set Pesan Kustom Validasi',
      description: 'Gunakan `input.setCustomValidity("Email wajib diisi!");`.',
      startingCode: `const input = document.createElement("input");\n// Set custom validity di bawah:\n`,
      solution: `const input = document.createElement("input");\ninput.setCustomValidity("Email wajib diisi!");`
    }
  },

  // ── 195. API WEB WORKER ─────────────────────────────────────────────────
  {
    id: 'api-web-worker',
    title: 'API Web Worker',
    chapter: 'JS Web API',
    chapterId: 'js-chap-webapi',
    order: 195,
    overview: 'Web Workers API: multi-threading di JavaScript untuk menjalankan tugas komputasi berat di background thread tanpa membuat antarmuka UI freeze (postMessage, onmessage, terminate).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">WEB APIS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 195 / 195 (FINAL MATERI JS LENGKAP)</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧵 Eksekusi Multi-Thread dengan Web Workers</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Secara default, JavaScript berjalan pada satu alur utama (<em>Single-Threaded Main Thread</em>). Jika ada komputasi berat (seperti enkripsi data atau pengolahan gambar), antarmuka UI browser akan membeku (*freeze*). <strong>Web Worker</strong> memecahkan ini dengan mengeksekusi script pada <strong>Background Thread</strong> yang terpisah.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>API Web Worker Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Simulasi Multi-Thread Komputasi Latar Belakang</h2>
  <button onclick="jalankanWorker()" style="padding: 10px 18px; background: #0284c7; color: white; border: none; border-radius: 6px; font-weight: bold; cursor: pointer;">
    ⚙️ Jalankan Worker Komputasi
  </button>
  <div id="output" style="margin-top: 15px; background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    function jalankanWorker() {
      const output = document.getElementById('output');
      output.innerHTML = '⏳ Menjalankan komputasi 10 juta data di Background Thread... (UI tetap responsif 60 FPS!)';

      // Membuat Inline Worker Blob
      const workerCode = \`
        self.onmessage = function(e) {
          let total = 0;
          for (let i = 0; i < 10000000; i++) {
            total += i;
          }
          self.postMessage(total);
        };
      \`;

      const blob = new Blob([workerCode], { type: 'application/javascript' });
      const worker = new Worker(URL.createObjectURL(blob));

      // Mengirim sinyal mulai ke worker
      worker.postMessage('START');

      // Menerima hasil dari worker
      worker.onmessage = function(e) {
        output.innerHTML = '🎉 <strong>Hasil Komputasi Worker Selesai:</strong> ' + e.data.toLocaleString('id-ID') + ' (UI tidak pernah lag!) ✅';
        worker.terminate(); // Hentikan thread worker setelah selesai
      };
    }
  </script>

</body>
</html>`,
    codeExplanation: [
      'new Worker("script.js") memulai thread komputasi baru yang independen dari Main Thread UI browser.',
      'Komunikasi antara Main Thread dan Worker Thread berlangsung asinkronus menggunakan postMessage() dan listener onmessage.',
      'Worker tidak memiliki akses langsung ke DOM objek (seperti document) demi menjamin keamanan konkurensi (Thread-safety).'
    ],
    quiz: {
      question: 'Manakah dari komponen browser berikut yang TIDAK dapat diakses secara langsung dari dalam thread Web Worker?',
      options: [
        'DOM (document & element)',
        'Fetch API',
        'Navigator (userAgent, onLine)',
        'setTimeout & setInterval'
      ],
      answer: 0,
      explanation: 'Web Worker tidak memiliki akses ke objek `document` atau manipulasi DOM langsung guna menjaga thread safety.'
    },
    challenge: {
      title: 'Tantangan Terakhir: Kirim Pesan ke Worker',
      description: 'Kirim pesan ke worker `worker.postMessage({ task: "start" });`.',
      startingCode: `function sendTask(worker) {\n  // Kirim pesan ke worker di bawah:\n}`,
      solution: `function sendTask(worker) {\n  worker.postMessage({ task: "start" });\n}`
    }
  }
];
