module.exports = [
  // ── 174. JS WINDOW ──────────────────────────────────────────────────────
  {
    id: 'js-window',
    title: 'JS Window',
    chapter: 'JS Window API',
    chapterId: 'js-chap-windowapi',
    order: 174,
    overview: 'Browser Object Model (BOM) & Objek Global Window: dimensi viewport (window.innerWidth / innerHeight), kontrol window.open(), window.close(), dan window.scrollTo().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">WINDOW API</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 174 / 195</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🪟 Browser Object Model (BOM) & Objek Window</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Objek <code>window</code> adalah objek global tertinggi di lingkungan browser. Semua variabel global, fungsi global, dan dokumen DOM secara otomatis menjadi properti dari objek <code>window</code>.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Window Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Dimensi Viewport Browser</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>
  <button onclick="scrollKeAtas()" style="margin-top: 10px; padding: 8px 16px; background: #0284c7; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">
    Scroll Halus ke Atas
  </button>

  <script>
    function updateUkuran() {
      document.getElementById('output').innerHTML = 
        '• Lebar Viewport (window.innerWidth): <strong>' + window.innerWidth + 'px</strong><br>' +
        '• Tinggi Viewport (window.innerHeight): <strong>' + window.innerHeight + 'px</strong><br>' +
        '• Rasio Piksel Layar (devicePixelRatio): ' + window.devicePixelRatio;
    }

    function scrollKeAtas() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    updateUkuran();
    window.addEventListener('resize', updateUkuran);
  </script>

</body>
</html>`,
    codeExplanation: [
      'window.innerWidth dan innerHeight mengukur area pandang aktif konten browser tanpa menyertakan toolbar.',
      'window.scrollTo({ behavior: "smooth" }) menyediakan animasi scrolling halus bawaan.'
    ],
    quiz: {
      question: 'Properti window manakah yang mengembalikan lebar area konten yang dapat dilihat (viewport) di browser dalam piksel?',
      options: [
        'window.outerWidth',
        'window.innerWidth',
        'window.screenWidth',
        'window.availWidth'
      ],
      answer: 1,
      explanation: '`window.innerWidth` mengembalikan lebar viewport browser dalam satuan piksel.'
    },
    challenge: {
      title: 'Tantangan: Scroll ke Koordinat 0',
      description: 'Lakukan scroll halus `window.scrollTo({ top: 0, behavior: "smooth" });`.',
      startingCode: `function scrollUp() {\n  // Lakukan scroll di bawah:\n}`,
      solution: `function scrollUp() {\n  window.scrollTo({ top: 0, behavior: "smooth" });\n}`
    }
  },

  // ── 175. JS SCREEN ──────────────────────────────────────────────────────
  {
    id: 'js-screen',
    title: 'JS Screen',
    chapter: 'JS Window API',
    chapterId: 'js-chap-windowapi',
    order: 175,
    overview: 'Objek window.screen: membaca resolusi fisik layar pengguna (screen.width, screen.height, screen.availWidth, screen.availHeight, dan screen.colorDepth).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">WINDOW API</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 175 / 195</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🖥️ Mengakses Informasi Layar Fisik (Screen Object)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Objek <code>window.screen</code> menyimpan informasi mengenai layar monitor fisik perangkat pengguna, seperti resolusi monitor dan kedalaman warna (*color depth*).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Screen Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Informasi Monitor Pengguna</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    log += '• Resolusi Layar Fisik: <strong>' + screen.width + ' x ' + screen.height + ' px</strong><br>';
    log += '• Area Layar Tersedia (Tanpa Taskbar): ' + screen.availWidth + ' x ' + screen.availHeight + ' px<br>';
    log += '• Kedalaman Warna: ' + screen.colorDepth + ' bit per piksel<br>';
    log += '• Orientasi Layar: ' + (screen.orientation ? screen.orientation.type : 'landscape-primary');

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'screen.availHeight mengurangi tinggi taskbar sistem operasi (seperti Windows Taskbar atau Mac Dock) dari total tinggi layar fisik.'
    ],
    quiz: {
      question: 'Apa perbedaan antara screen.height dengan screen.availHeight?',
      options: [
        'Tidak ada perbedaan sama sekali',
        'screen.availHeight tidak menyertakan area yang dipakai taskbar / dock sistem operasi',
        'screen.availHeight hanya menghitung tinggi jendela browser',
        'screen.height selalu bernilai 0'
      ],
      answer: 1,
      explanation: '`screen.availHeight` mengurangkan tinggi komponen antarmuka sistem operasi permanen (seperti Taskbar Windows) dari total resolusi monitor.'
    },
    challenge: {
      title: 'Tantangan: Baca Lebar Layar Tersedia',
      description: 'Simpan `screen.availWidth` ke variabel `let w = screen.availWidth;`.',
      startingCode: `let w = 0;`,
      solution: `let w = screen.availWidth;`
    }
  },

  // ── 176. JS LOCATION ────────────────────────────────────────────────────
  {
    id: 'js-location',
    title: 'JS Location',
    chapter: 'JS Window API',
    chapterId: 'js-chap-windowapi',
    order: 176,
    overview: 'Objek window.location: URL parser (href, protocol, host, pathname, search, hash), manipulasi parameter via URLSearchParams, serta method navigasi (assign, replace, reload).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">WINDOW API</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 176 / 195</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔗 Parsing URL & Navigasi Halaman (Location Object)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Objek <code>window.location</code> digunakan untuk membaca URL aktif halaman dan mengarahkan browser ke halaman baru (redirect).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Location Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Anatomi URL Halaman Saat Ini</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    log += '• location.href: <strong>' + location.href + '</strong><br>';
    log += '• location.protocol: ' + location.protocol + '<br>';
    log += '• location.host: ' + location.host + '<br>';
    log += '• location.pathname: ' + location.pathname + '<br>';
    log += '• location.search (Query Params): "' + location.search + '"<br><br>';

    // Parsing Query Parameters dengan URLSearchParams modern
    const params = new URLSearchParams('?modul=javascript&bab=29');
    log += '• Query "modul": <strong>' + params.get('modul') + '</strong> | Query "bab": ' + params.get('bab');

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'location.replace("url") melakukan redirect tanpa menyimpan halaman lama di history browser (user tidak bisa klik tombol Back).',
      'URLSearchParams memudahkan membaca dan menulis query string (contoh ?page=2).'
    ],
    quiz: {
      question: 'Method location manakah yang mengarahkan browser ke halaman baru TANPA mencatat halaman saat ini ke riwayat navigasi (history) browser?',
      options: [
        'location.assign()',
        'location.replace()',
        'location.href',
        'location.reload()'
      ],
      answer: 1,
      explanation: '`location.replace()` menggantikan URL aktif di riwayat penelusuran sehingga pengguna tidak dapat kembali menggunakan tombol Back.'
    },
    challenge: {
      title: 'Tantangan: Reload Halaman',
      description: 'Panggil fungsi reload `location.reload();`.',
      startingCode: `function refreshPage() {\n  // Reload di bawah:\n}`,
      solution: `function refreshPage() {\n  location.reload();\n}`
    }
  },

  // ── 177. JS HISTORY ─────────────────────────────────────────────────────
  {
    id: 'js-history',
    title: 'JS History',
    chapter: 'JS Window API',
    chapterId: 'js-chap-windowapi',
    order: 177,
    overview: 'HTML5 History API: navigasi riwayat (history.back, history.forward, history.go), serta manipulasi URL SPA tanpa reload menggunakan pushState(), replaceState(), dan event popstate.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">WINDOW API</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 177 / 195</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⏮️ History API & Client-Side Routing (SPA)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Framework SPA modern (seperti React Router & Vue Router) dibangun di atas <strong>HTML5 History API</strong> menggunakan <code>history.pushState()</code> untuk mengubah URL di address bar tanpa memicu reload halaman.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS History API Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Simulasi Router SPA dengan pushState()</h2>
  <button onclick="pindahRute('dashboard')" style="padding: 8px 16px; background: #0284c7; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">
    Buka /dashboard
  </button>
  <button onclick="pindahRute('profil')" style="padding: 8px 16px; background: #22c55e; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">
    Buka /profil
  </button>
  <div id="output" style="margin-top: 15px; background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    function pindahRute(namaRute) {
      // Mengubah URL tanpa reload halaman!
      history.pushState({ rute: namaRute }, '', '#' + namaRute);
      document.getElementById('output').innerHTML = '🚀 Rute aktif diperbarui ke: <strong>#' + namaRute + '</strong> (Panjang History: ' + history.length + ')';
    }

    // Mendengarkan tombol Back / Forward browser
    window.addEventListener('popstate', (e) => {
      document.getElementById('output').innerHTML = '⏮️ Pengguna menekan tombol Navigasi History: ' + JSON.stringify(e.state);
    });
  </script>

</body>
</html>`,
    codeExplanation: [
      'history.pushState(state, "", url) menambahkan entri baru ke riwayat browser tanpa memicu refresh halaman.',
      'Event popstate dipicu saat pengguna menekan tombol Back atau Forward browser.'
    ],
    quiz: {
      question: 'Method History API manakah yang digunakan oleh Single Page Application (SPA) untuk mengubah URL address bar tanpa memicu reload halaman?',
      options: [
        'history.navigate()',
        'history.pushState()',
        'history.setUrl()',
        'history.forward()'
      ],
      answer: 1,
      explanation: '`history.pushState()` menambahkan entri ke riwayat browser dan mengubah URL secara mulus di sisi klien.'
    },
    challenge: {
      title: 'Tantangan: Navigasi Kembali ke Belakang',
      description: 'Panggil fungsi kembali ke riwayat sebelumnya `history.back();`.',
      startingCode: `function goPrevious() {\n  // Kembali ke belakang:\n}`,
      solution: `function goPrevious() {\n  history.back();\n}`
    }
  },

  // ── 178. JS NAVIGATOR ───────────────────────────────────────────────────
  {
    id: 'js-navigator',
    title: 'JS Navigator',
    chapter: 'JS Window API',
    chapterId: 'js-chap-windowapi',
    order: 178,
    overview: 'Objek window.navigator: informasi client, OS, dan status koneksi (userAgent, language, onLine, hardwareConcurrency, clipboard, serviceWorker).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">WINDOW API</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 178 / 195</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧭 Identifikasi Browser & Perangkat (Navigator Object)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Objek <code>window.navigator</code> menyediakan informasi mengenai aplikasi browser pengguna, preferensi bahasa, jumlah core CPU (<code>hardwareConcurrency</code>), dan status koneksi internet online/offline.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Navigator Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Inspeksi Lingkungan Perangkat (Navigator)</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    log += '• Bahasa Browser: <strong>' + navigator.language + '</strong><br>';
    log += '• Status Online: <strong>' + (navigator.onLine ? 'Terhubung Internet ✅' : 'Offline ❌') + '</strong><br>';
    log += '• Jumlah Core CPU: <strong>' + navigator.hardwareConcurrency + ' Core</strong><br>';
    log += '• Cookies Diizinkan? ' + navigator.cookieEnabled + '<br>';
    log += '• User Agent: <span style="font-size:11px;">' + navigator.userAgent + '</span>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'navigator.onLine memeriksa apakah browser terhubung ke jaringan internet saat ini.',
      'navigator.hardwareConcurrency mengembalikan jumlah thread prosesor logika CPU pengguna.'
    ],
    quiz: {
      question: 'Properti navigator manakah yang mengembalikan nilai boolean untuk memeriksa apakah perangkat pengguna sedang terhubung ke koneksi internet?',
      options: [
        'navigator.isInternet',
        'navigator.onLine',
        'navigator.connected',
        'navigator.status'
      ],
      answer: 1,
      explanation: '`navigator.onLine` mengembalikan `true` jika browser mendeteksi koneksi jaringan aktif.'
    },
    challenge: {
      title: 'Tantangan: Periksa Status Online',
      description: 'Simpan `navigator.onLine` ke `let online = navigator.onLine;`.',
      startingCode: `let online = false;`,
      solution: `let online = navigator.onLine;`
    }
  },

  // ── 179. JS POPUP ALERT ─────────────────────────────────────────────────
  {
    id: 'js-popup-alert',
    title: 'JS Popup Alert',
    chapter: 'JS Window API',
    chapterId: 'js-chap-windowapi',
    order: 179,
    overview: 'Dialog popup bawaan browser: window.alert() (pemberitahuan), window.confirm() (konfirmasi boolean true/false), dan window.prompt() (menerima input teks string).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">WINDOW API</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 179 / 195</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔔 Kotak Dialog Bawaan: alert, confirm, & prompt</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Browser menyediakan 3 kotak dialog modal sinkronus: <code>alert()</code> untuk pesan satu arah, <code>confirm()</code> untuk konfirmasi Yes/No, dan <code>prompt()</code> untuk meminta masukan teks cepat.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Popup Dialogs Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Uji Kotak Dialog Native</h2>
  <button onclick="ujiConfirm()" style="padding: 8px 16px; background: #ef4444; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">
    Hapus Data (confirm)
  </button>
  <button onclick="ujiPrompt()" style="padding: 8px 16px; background: #0284c7; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">
    Input Nama (prompt)
  </button>
  <div id="output" style="margin-top: 15px; background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    function ujiConfirm() {
      const setuju = confirm('Apakah Anda yakin ingin menghapus kursus ini?');
      document.getElementById('output').innerHTML = 'Hasil Confirm: <strong>' + (setuju ? 'Disetujui (OK) ✅' : 'Dibatalkan (Cancel) ❌') + '</strong>';
    }

    function ujiPrompt() {
      const nama = prompt('Masukkan nama lengkap Anda:', 'Rahmat');
      if (nama !== null) {
        document.getElementById('output').innerHTML = 'Selamat datang, <strong>' + nama + '</strong>! 🎉';
      }
    }
  </script>

</body>
</html>`,
    codeExplanation: [
      'confirm() mengembalikan true jika user menekan tombol OK dan false jika menekan Cancel.',
      'prompt() mengembalikan string teks yang diketik atau null jika user membatalkannya.'
    ],
    quiz: {
      question: 'Tipe data apakah yang dikembalikan oleh pemanggilan fungsi window.confirm()?',
      options: [
        'String ("OK" / "Cancel")',
        'Boolean (true / false)',
        'Number (1 / 0)',
        'Object'
      ],
      answer: 1,
      explanation: '`confirm()` mengembalikan nilai bertipe Boolean (`true` jika ditekan OK, `false` jika ditekan Batal/Cancel).'
    },
    challenge: {
      title: 'Tantangan: Buat Peringatan Alert',
      description: 'Panggil fungsi alert `alert("Halo!");`.',
      startingCode: `function showAlert() {\n  // Tulis alert di bawah:\n}`,
      solution: `function showAlert() {\n  alert("Halo!");\n}`
    }
  },

  // ── 180. JS COOKIES ─────────────────────────────────────────────────────
  {
    id: 'js-cookies',
    title: 'JS Cookies',
    chapter: 'JS Window API',
    chapterId: 'js-chap-windowapi',
    order: 180,
    overview: 'Manajemen HTTP Cookies di JavaScript: membuat cookie via document.cookie, masa kedaluwarsa expires & max-age, path, SameSite, Secure, dan helper function CRUD cookie.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">WINDOW API</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 180 / 195</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🍪 Manajemen Cookies (document.cookie)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Cookies adalah potongan kecil data teks yang disimpan oleh browser dan otomatis dikirimkan ke server pada setiap request HTTP.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Cookies Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Simulasi Manajemen Cookie</h2>
  <button onclick="setCookieDemo()" style="padding: 8px 16px; background: #0284c7; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">
    Simpan Cookie Sesi
  </button>
  <div id="output" style="margin-top: 15px; background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    function setCookieDemo() {
      // Menyimpan cookie dengan durasi max-age 3600 detik (1 jam)
      document.cookie = 'user_lms=RahmatFadila; max-age=3600; path=/; SameSite=Lax';
      document.getElementById('output').innerHTML = '• Cookie berhasil disimpan: <code>' + document.cookie + '</code> ✅';
    }
  </script>

</body>
</html>`,
    codeExplanation: [
      'document.cookie bertindak sebagai getter/setter khusus di mana menetapkan nilai baru tidak menimpa cookie yang sudah ada melainkan menambahkannya.',
      'Atribut max-age menentukan masa berlaku cookie dalam satuan detik.'
    ],
    quiz: {
      question: 'Atribut apakah pada cookie yang digunakan untuk menentukan durasi masa aktif cookie dalam satuan detik?',
      options: [
        'duration',
        'max-age',
        'timeout',
        'ttl'
      ],
      answer: 1,
      explanation: 'Atribut `max-age=seconds` menentukan masa berlaku cookie dalam hitungan detik.'
    },
    challenge: {
      title: 'Tantangan: Set Cookie Sederhana',
      description: 'Set cookie `document.cookie = "tema=dark; path=/";`.',
      startingCode: `// Set cookie di bawah:\n`,
      solution: `document.cookie = "tema=dark; path=/";`
    }
  }
];
