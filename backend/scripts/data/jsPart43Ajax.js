module.exports = [
  // ── 278. AJAX INTRO ─────────────────────────────────────────────────────
  {
    id: 'ajax-intro',
    title: 'AJAX Intro',
    chapter: 'JS AJAX',
    chapterId: 'js-chap-ajax',
    order: 278,
    overview: 'Pengenalan AJAX (Asynchronous JavaScript and XML): konsep revolusioner pembaruan konten halaman web di latar belakang tanpa me-reload seluruh halaman browser.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS AJAX</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 278 / 292</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔄 Konsep Revolusioner AJAX</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <strong>AJAX (Asynchronous JavaScript And XML)</strong> bukanlah bahasa pemrograman baru, melainkan teknik memanfaatkan objek <code>XMLHttpRequest</code> untuk meminta dan menerima data dari server web di latar belakang secara asinkronus tanpa mengganggu tampilan halaman pengguna.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>AJAX Intro Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Pembaruan Konten Tanpa Reload (AJAX)</h2>
  <div id="targetKonten" style="background: #1e293b; color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
    Konten awal halaman sebelum request AJAX...
  </div>
  <button onclick="muatKontenAjax()" style="padding: 8px 16px; background: #0284c7; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">
    Muat Pesan dari Server (AJAX)
  </button>

  <script>
    function muatKontenAjax() {
      // 1. Buat objek XMLHttpRequest
      const xhr = new XMLHttpRequest();

      // 2. Tentukan callback saat data selesai dimuat
      xhr.onload = function() {
        if (xhr.status === 200) {
          document.getElementById('targetKonten').innerHTML = '🎉 <strong>' + xhr.responseText + '</strong> (Halaman Tidak Reload!) ✅';
        }
      };

      // 3. Simulasi permintaan data
      document.getElementById('targetKonten').innerHTML = '⏳ Menghubungi server via AJAX...';
      setTimeout(() => {
        // Simulasi respons HTTP 200
        xhr.onload.call({ status: 200, responseText: 'Selamat Datang di Kursus JavaScript LMS!' });
      }, 300);
    }
  </script>

</body>
</html>`,
    codeExplanation: [
      'AJAX memungkinkan pengiriman dan penerimaan data di belakang layar (background request).',
      'Pengguna tetap dapat berinteraksi dengan antarmuka saat pertukaran data berlangsung.'
    ],
    quiz: {
      question: 'Apa kepanjangan dari singkatan teknologi AJAX di web?',
      options: [
        'Asynchronous JavaScript And XML',
        'Advanced Java And XHTML',
        'Automated JSON And XML',
        'Async Joint Application Xenon'
      ],
      answer: 0,
      explanation: 'AJAX adalah singkatan dari `Asynchronous JavaScript And XML`.'
    },
    challenge: {
      title: 'Tantangan: Buat Objek XMLHttpRequest',
      description: 'Lakukan `const xhr = new XMLHttpRequest();`.',
      startingCode: `function makeXHR() {\n  return new XMLHttpRequest();\n}`,
      solution: `function makeXHR() {\n  return new XMLHttpRequest();\n}`
    }
  },

  // ── 279. AJAX XMLHTTP ───────────────────────────────────────────────────
  {
    id: 'ajax-xmlhttp',
    title: 'AJAX XMLHttp',
    chapter: 'JS AJAX',
    chapterId: 'js-chap-ajax',
    order: 279,
    overview: 'Objek XMLHttpRequest (XHR): instansiasi new XMLHttpRequest(), event handler modern xhr.onload vs klasik xhr.onreadystatechange, dan siklus hidup request.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS AJAX</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 279 / 292</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📡 Objek Inti: XMLHttpRequest</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Semua browser modern memiliki objek bawaan <code>XMLHttpRequest</code> untuk berkomunikasi dengan server. Event modern <code>xhr.onload</code> dipicu ketika transaksi telah selesai sepenuhnya.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>AJAX XMLHttp Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Pemeriksaan Status XMLHttpRequest</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    const xhr = new XMLHttpRequest();
    log += '• Objek XHR Tercipta: <strong>' + (xhr instanceof XMLHttpRequest) + '</strong><br>';
    log += '• Initial readyState: ' + xhr.readyState + ' (UNSENT)<br>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'new XMLHttpRequest() membuat instansi baru objek komunikasi XHR.',
      'xhr.onload adalah event handler standar yang paling bersih untuk menangani respons yang berhasil.'
    ],
    quiz: {
      question: 'Event handler manakah pada XMLHttpRequest modern yang dipicu ketika request berhasil diselesaikan secara tuntas?',
      options: [
        'xhr.onload',
        'xhr.onstart',
        'xhr.onfinish',
        'xhr.oncomplete'
      ],
      answer: 0,
      explanation: '`xhr.onload` dipicu ketika operasi transfer HTTP selesai dengan sukses.'
    },
    challenge: {
      title: 'Tantangan: Pasang Onload Handler',
      description: 'Pasang `xhr.onload = function() {};`.',
      startingCode: `const xhr = new XMLHttpRequest();\n// Pasang onload di bawah:\n`,
      solution: `const xhr = new XMLHttpRequest();\nxhr.onload = function() {};`
    }
  },

  // ── 280. AJAX REQUEST ───────────────────────────────────────────────────
  {
    id: 'ajax-request',
    title: 'AJAX Request',
    chapter: 'JS AJAX',
    chapterId: 'js-chap-ajax',
    order: 280,
    overview: 'Mengirim Request HTTP via XHR: method open(method, url, async), send(body), setRequestHeader("Content-Type", ...), serta perbandingan GET vs POST.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS AJAX</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 280 / 292</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📤 Mengonfigurasi & Mengirim Request (open & send)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Method <code>xhr.open(method, url, async)</code> mengonfigurasi tujuan request. Untuk request POST dengan data form atau JSON, kita wajib menambahkan header via <code>xhr.setRequestHeader()</code> sebelum memanggil <code>xhr.send(payload)</code>.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>AJAX Request Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Sintaks Pengiriman Request POST</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    log += '<strong>Pola Pengiriman Request POST:</strong><br><br>';
    log += '<code>const xhr = new XMLHttpRequest();</code><br>';
    log += '<code>xhr.open("POST", "/api/submit", true);</code><br>';
    log += '<code>xhr.setRequestHeader("Content-Type", "application/json");</code><br>';
    log += '<code>xhr.send(JSON.stringify({ nama: "Rahmat" }));</code>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'xhr.open(method, url, true) menetapkan parameter ke-3 true agar request berjalan asinkronus (tidak membekukan UI).',
      'xhr.send(body) mengeksekusi pengiriman payload ke server.'
    ],
    quiz: {
      question: 'Method XMLHttpRequest manakah yang digunakan untuk menginisialisasi konfigurasi jenis HTTP method (GET/POST) dan URL tujuan?',
      options: [
        'xhr.init()',
        'xhr.open()',
        'xhr.connect()',
        'xhr.start()'
      ],
      answer: 1,
      explanation: '`xhr.open(method, url, async)` menginisialisasi parameter konfigurasi request HTTP.'
    },
    challenge: {
      title: 'Tantangan: Panggil xhr.open',
      description: 'Lakukan `xhr.open("GET", "/data", true);`.',
      startingCode: `function initReq(xhr) {\n  xhr.open("GET", "/data", true);\n}`,
      solution: `function initReq(xhr) {\n  xhr.open("GET", "/data", true);\n}`
    }
  },

  // ── 281. AJAX RESPONSE ──────────────────────────────────────────────────
  {
    id: 'ajax-response',
    title: 'AJAX Response',
    chapter: 'JS AJAX',
    chapterId: 'js-chap-ajax',
    order: 281,
    overview: 'Membaca Response dari Server: properti responseText, responseXML, kode status HTTP (200, 404, 500), statusText, dan evaluasi readyState (0 s/d 4).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS AJAX</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 281 / 292</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📥 Membaca Status & Data Respons (responseText)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Data teks yang dikirimkan server dapat dibaca melalui <code>xhr.responseText</code>. Status koneksi diwakili oleh <code>xhr.status</code> (200 = Sukses, 404 = Not Found) dan <code>xhr.readyState</code> (4 = DONE).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>AJAX Response Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Evaluasi 5 Tingkat readyState</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    log += '<strong>Tahapan readyState XHR:</strong><br>';
    log += '• 0: UNSENT (Client baru dibuat)<br>';
    log += '• 1: OPENED (open() telah dipanggil)<br>';
    log += '• 2: HEADERS_RECEIVED (send() telah dipanggil)<br>';
    log += '• 3: LOADING (Mengunduh data respon)<br>';
    log += '• 4: <strong>DONE (Operasi selesai sempurna!)</strong> ✅';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Pemeriksaan klasik: if (xhr.readyState === 4 && xhr.status === 200) memastikan transfer data telah selesai dan sukses.'
    ],
    quiz: {
      question: 'Berapakah nilai readyState pada XMLHttpRequest yang menandakan bahwa seluruh operasi transfer data telah selesai sempurna (DONE)?',
      options: [
        '1',
        '2',
        '3',
        '4'
      ],
      answer: 3,
      explanation: 'Nilai `readyState === 4` menandakan status `DONE` (operasi telah selesai secara lengkap).'
    },
    challenge: {
      title: 'Tantangan: Ambil responseText',
      description: 'Kembalikan `xhr.responseText;`.',
      startingCode: `function getText(xhr) {\n  return xhr.responseText;\n}`,
      solution: `function getText(xhr) {\n  return xhr.responseText;\n}`
    }
  },

  // ── 282. AJAX XML FILE ──────────────────────────────────────────────────
  {
    id: 'ajax-xml-file',
    title: 'AJAX XML File',
    chapter: 'JS AJAX',
    chapterId: 'js-chap-ajax',
    order: 282,
    overview: 'Mengambil & Mem-parsing File XML dengan AJAX: membaca properti responseXML dan menavigasi elemen tag XML menggunakan XML DOM methods (getElementsByTagName).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS AJAX</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 282 / 292</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📄 Parsing Dokumen XML (responseXML)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Ketika server merespons dengan header <code>Content-Type: text/xml</code>, browser otomatis mem-parsing dokumen menjadi objek XML DOM yang dapat diakses via <code>xhr.responseXML</code>.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>AJAX XML File Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Ekstraksi Data dari XML DOM</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    // Simulasi respons dokumen XML
    const teksXML = \`
      <katalog>
        <kursus id="1">
          <judul>JavaScript Mastery</judul>
          <level>Advanced</level>
        </kursus>
      </katalog>
    \`;

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(teksXML, 'text/xml');

    const judul = xmlDoc.getElementsByTagName('judul')[0].childNodes[0].nodeValue;
    const level = xmlDoc.getElementsByTagName('level')[0].childNodes[0].nodeValue;

    let log = '';
    log += '• Judul Kursus (dari XML): <strong>' + judul + '</strong><br>';
    log += '• Level: ' + level + ' ✅';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'DOMParser().parseFromString(teks, "text/xml") mengubah string teks XML menjadi objek dokumen XML DOM.'
    ],
    quiz: {
      question: 'Properti XMLHttpRequest manakah yang otomatis berisi dokumen XML DOM hasil parsing ketika server merespons dengan data XML?',
      options: [
        'xhr.responseText',
        'xhr.responseXML',
        'xhr.xmlData',
        'xhr.bodyXML'
      ],
      answer: 1,
      explanation: '`xhr.responseXML` menyimpan dokumen XML DOM yang telah diparsing oleh browser.'
    },
    challenge: {
      title: 'Tantangan: Baca Properti responseXML',
      description: 'Kembalikan `xhr.responseXML;`.',
      startingCode: `function getXML(xhr) {\n  return xhr.responseXML;\n}`,
      solution: `function getXML(xhr) {\n  return xhr.responseXML;\n}`
    }
  },

  // ── 283. AJAX PHP ───────────────────────────────────────────────────────
  {
    id: 'ajax-php',
    title: 'AJAX PHP',
    chapter: 'JS AJAX',
    chapterId: 'js-chap-ajax',
    order: 283,
    overview: 'Integrasi AJAX dengan Backend PHP: pengiriman query pencarian live search ke script backend PHP (contoh gethint.php) dan menampilkan saran kata secara real-time.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS AJAX</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 283 / 292</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🐘 Kolaborasi AJAX & PHP: Live Search</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Pola klasik web interaktif adalah mengirimkan karakter yang diketik pengguna di form input ke script PHP di server (misal <code>gethint.php?q=java</code>) dan menampilkan saran kata kunci tanpa refresh halaman.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>AJAX PHP Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Fitur Pencarian Live Search AJAX + PHP</h2>
  <input type="text" id="inputCari" onkeyup="cariSaran(this.value)" placeholder="Ketik: 'java'..." style="padding: 8px; width: 220px; border-radius: 6px; border: 1px solid #cbd5e1;">
  <div id="hasilSaran" style="margin-top: 15px; background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;">
    Saran pencarian akan muncul di sini...
  </div>

  <script>
    function cariSaran(str) {
      if (str.length === 0) {
        document.getElementById('hasilSaran').innerHTML = 'Ketik sesuatu untuk mencari...';
        return;
      }

      // Simulasi panggilan endpoint PHP: gethint.php?q=...
      const mockDatabasePHP = ['JavaScript', 'Java', 'JSON', 'JQuery', 'Julia'];
      const kecocokan = mockDatabasePHP.filter(item => item.toLowerCase().startsWith(str.toLowerCase()));

      document.getElementById('hasilSaran').innerHTML = 
        '• Saran dari PHP: <strong>' + (kecocokan.length > 0 ? kecocokan.join(', ') : 'Tidak ada saran') + '</strong>';
    }
  </script>

</body>
</html>`,
    codeExplanation: [
      'Event onkeyup memicu fungsi AJAX setiap kali ada ketikan baru dari keyboard pengguna.'
    ],
    quiz: {
      question: 'Event keyboard HTML apakah yang paling umum digunakan untuk memicu pencarian Live Search AJAX saat pengguna mengetik huruf?',
      options: [
        'onkeyup',
        'onload',
        'onsubmit',
        'onresize'
      ],
      answer: 0,
      explanation: '`onkeyup` menangkap pelepasan tombol ketikan dan cocok untuk fitur pencarian instan real-time.'
    },
    challenge: {
      title: 'Tantangan: Buat URL Query PHP',
      description: 'Lakukan `const url = "gethint.php?q=" + query;`.',
      startingCode: `function makeQuery(query) {\n  return "gethint.php?q=" + query;\n}`,
      solution: `function makeQuery(query) {\n  return "gethint.php?q=" + query;\n}`
    }
  },

  // ── 284. AJAX ASP ───────────────────────────────────────────────────────
  {
    id: 'ajax-asp',
    title: 'AJAX ASP',
    chapter: 'JS AJAX',
    chapterId: 'js-chap-ajax',
    order: 284,
    overview: 'Integrasi AJAX dengan Server ASP / ASP.NET: pengiriman data form asynchronous ke endpoint .asp/.aspx dan pemrosesan respons server klasik.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS AJAX</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 284 / 292</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔷 Komunikasi AJAX dengan Backend ASP / ASP.NET</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Prinsip AJAX bersifat universal terlepas dari bahasa backend yang digunakan. Pola komunikasi AJAX dengan script Active Server Pages (<code>.asp</code>) bekerja persis sama dengan PHP maupun Node.js.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>AJAX ASP Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Arsitektur AJAX Universal Backend</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    log += '<strong>Protokol AJAX Bersifat Netral Terhadap Bahasa Backend:</strong><br><br>';
    log += '• Browser (JavaScript XHR) ➔ Mengirim HTTP Request<br>';
    log += '• Web Server (PHP / ASP / Node.js / Python) ➔ Memproses & Query Database<br>';
    log += '• Web Server ➔ Mengembalikan Teks / JSON / XML<br>';
    log += '• Browser ➔ Menerima di xhr.responseText dan memperbarui UI.';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'AJAX memisahkan layer presentasi (frontend) dari layer logika bisnis backend server.'
    ],
    quiz: {
      question: 'Apakah AJAX terikat hanya pada satu bahasa backend tertentu (seperti PHP saja)?',
      options: [
        'Tidak, AJAX berbasis protokol standar HTTP sehingga dapat berkomunikasi dengan backend apapun (PHP, ASP, Node.js, Python, Java)',
        'Ya, AJAX hanya bisa digunakan bersama PHP',
        'Ya, AJAX hanya bisa digunakan bersama ASP',
        'AJAX tidak memerlukan backend'
      ],
      answer: 0,
      explanation: 'AJAX menggunakan protokol standar HTTP sehingga kompatibel dengan semua bahasa pemrograman backend di dunia.'
    },
    challenge: {
      title: 'Tantangan: Tentukan URL ASP',
      description: 'Lengkapi string `"getcustomer.asp"`.',
      startingCode: `const endpoint = "getcustomer.asp";`,
      solution: `const endpoint = "getcustomer.asp";`
    }
  },

  // ── 285. AJAX DATABASE ──────────────────────────────────────────────────
  {
    id: 'ajax-database',
    title: 'AJAX Database',
    chapter: 'JS AJAX',
    chapterId: 'js-chap-ajax',
    order: 285,
    overview: 'Arsitektur AJAX ke Database: alur komunikasi Client UI -> AJAX Request -> Backend Server -> Database SQL (SELECT / INSERT) -> Pengembalian tabel data dinamis.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS AJAX</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 285 / 292</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🗄️ Mengambil Data Database Secara Dinamis</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            JavaScript di browser tidak boleh (dan tidak bisa) terhubung langsung ke database SQL demi alasan keamanan. AJAX menjadi jembatan perantara yang meminta data ke endpoint API server, yang kemudian mengeksekusi query database dan mengembalikan hasilnya.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>AJAX Database Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Pilih Kategori Kursus (Live Database Sync)</h2>
  <select onchange="ambilDataKategori(this.value)" style="padding: 8px; border-radius: 6px; border: 1px solid #cbd5e1;">
    <option value="">-- Pilih Kategori --</option>
    <option value="frontend">Frontend Development</option>
    <option value="backend">Backend Engineering</option>
  </select>

  <div id="tabelHasil" style="margin-top: 15px; background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;">
    Pilih kategori di atas untuk memuat data dari database...
  </div>

  <script>
    function ambilDataKategori(kategori) {
      if (!kategori) return;

      document.getElementById('tabelHasil').innerHTML = '⏳ Menjalankan SQL Query di Server...';

      // Simulasi query DB
      setTimeout(() => {
        if (kategori === 'frontend') {
          document.getElementById('tabelHasil').innerHTML = 
            '✅ <strong>Data SQL Ditemukan (2 baris):</strong><br>' +
            '1. React.js Fundamentals (ID: 101)<br>' +
            '2. Vue.js 3 Masterclass (ID: 102)';
        } else {
          document.getElementById('tabelHasil').innerHTML = 
            '✅ <strong>Data SQL Ditemukan (2 baris):</strong><br>' +
            '1. Node.js & Express REST API (ID: 201)<br>' +
            '2. PostgreSQL Database Mastery (ID: 202)';
        }
      }, 250);
    }
  </script>

</body>
</html>`,
    codeExplanation: [
      'Dropdown memicu AJAX saat nilai berubah (onchange), mengirim parameter ID ke backend untuk difilter pada klausa WHERE SQL query.'
    ],
    quiz: {
      question: 'Mengapa kode JavaScript di browser tidak diizinkan membuka koneksi port database SQL (seperti MySQL atau PostgreSQL) secara langsung?',
      options: [
        'Karena alasan keamanan fatal (kredensial password database akan terekspos ke publik) dan browser tidak memiliki TCP socket database driver',
        'Karena database tidak mendukung internet',
        'Karena database hanya bisa dibuka di malam hari',
        'Karena browser tidak memiliki memori'
      ],
      answer: 0,
      explanation: 'Demi keamanan data dan arsitektur, browser wajib berkomunikasi melalui layer backend API perantara.'
    },
    challenge: {
      title: 'Tantangan: Buat Query Param URL',
      description: 'Lakukan `const u = "getdata.php?kategori=" + cat;`.',
      startingCode: `function getUrl(cat) {\n  return "getdata.php?kategori=" + cat;\n}`,
      solution: `function getUrl(cat) {\n  return "getdata.php?kategori=" + cat;\n}`
    }
  },

  // ── 286. AJAX APPLICATIONS ──────────────────────────────────────────────
  {
    id: 'ajax-applications',
    title: 'AJAX Applications',
    chapter: 'JS AJAX',
    chapterId: 'js-chap-ajax',
    order: 286,
    overview: 'Pola Aplikasi AJAX Klasik: Live Search Autocomplete, Validasi Ketersediaan Username secara Instan, dan Cascading Dependent Dropdown (Provinsi -> Kota/Kabupaten).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS AJAX</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 286 / 292</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">💡 Pola Aplikasi Nyata Berbasis AJAX</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            3 contoh penerapan AJAX paling umum di dunia nyata adalah:
            1. <strong>Cek Ketersediaan Username</strong> saat pendaftaran akun baru.
            2. <strong>Dropdown Bertingkat</strong> (memilih Negara otomatis mengisi daftar Provinsi).
            3. <strong>Auto-save Draft</strong> tulisan pengguna setiap beberapa detik.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>AJAX Applications Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Cek Ketersediaan Username (Instant Validation)</h2>
  <input type="text" id="usernameInput" onblur="cekUsername(this.value)" placeholder="Ketik: 'admin'..." style="padding: 8px; border-radius: 6px; border: 1px solid #cbd5e1;">
  <span id="statusUser" style="margin-left: 10px; font-weight: bold;"></span>

  <script>
    function cekUsername(username) {
      const statusEl = document.getElementById('statusUser');
      if (!username) return;

      statusEl.innerHTML = '⏳ Memeriksa...';
      statusEl.style.color = '#38bdf8';

      // Simulasi AJAX endpoint check-user
      setTimeout(() => {
        if (username.toLowerCase() === 'admin' || username.toLowerCase() === 'root') {
          statusEl.innerHTML = '❌ Username sudah digunakan!';
          statusEl.style.color = '#ef4444';
        } else {
          statusEl.innerHTML = '✅ Username tersedia!';
          statusEl.style.color = '#22c55e';
        }
      }, 300);
    }
  </script>

</body>
</html>`,
    codeExplanation: [
      'Event onblur memicu pemeriksaan AJAX saat kursor pengguna keluar dari kotak input username.'
    ],
    quiz: {
      question: 'Event form apakah yang dipicu ketika pengguna memindahkan fokus kursor keluar dari elemen input teks?',
      options: [
        'onblur',
        'onfocus',
        'onhover',
        'onscroll'
      ],
      answer: 0,
      explanation: '`onblur` dipicu ketika elemen input kehilangan fokus kursor.'
    },
    challenge: {
      title: 'Tantangan: Event Onblur',
      description: 'Pasang handler onblur `input.onblur = function() {};`.',
      startingCode: `const input = document.createElement("input");\ninput.onblur = function() {};`,
      solution: `const input = document.createElement("input");\ninput.onblur = function() {};`
    }
  },

  // ── 287. AJAX EXAMPLES ──────────────────────────────────────────────────
  {
    id: 'ajax-examples',
    title: 'AJAX Examples',
    chapter: 'JS AJAX',
    chapterId: 'js-chap-ajax',
    order: 287,
    overview: 'Koleksi Contoh Studi Kasus Komprehensif AJAX: polling berkala, pembaruan grafik real-time, dan perbandingan pola XHR klasik vs Fetch API modern.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS AJAX</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 287 / 292</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎓 Rangkuman & Studi Kasus AJAX Lengkap</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Meskipun aplikasi modern telah banyak bermigrasi ke <code>fetch()</code> dan <code>axios</code>, memahami mekanisme internal <code>XMLHttpRequest</code> adalah pondasi penting dalam memahami bagaimana web asinkronus bekerja.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>AJAX Examples Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Rangkuman Komparasi XHR vs Fetch</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    log += '<strong>XHR vs Fetch API:</strong><br>';
    log += '• <strong>XHR (AJAX Klasik):</strong> Berbasis Event Listener (onload, onreadystatechange), callback-heavy.<br>';
    log += '• <strong>Fetch API (Modern):</strong> Berbasis Promise, clean async/await, streaming response.<br><br>';
    log += '✅ Keduanya menggunakan protokol HTTP yang sama di jaringan!';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'XHR dan Fetch adalah dua antarmuka berbeda untuk tujuan yang sama: komunikasi jaringan HTTP asinkronus.'
    ],
    quiz: {
      question: 'Manakah dari berikut ini yang merupakan fitur modern pengganti XMLHttpRequest berbasis Promise bawaan browser?',
      options: [
        'Fetch API',
        'Flash Player',
        'Applet Java',
        'VBScript'
      ],
      answer: 0,
      explanation: '`Fetch API` adalah standar modern berbasis Promise pengganti `XMLHttpRequest`.'
    },
    challenge: {
      title: 'Tantangan: Status Sukses HTTP',
      description: 'Periksa status 200 `const ok = xhr.status === 200;`.',
      startingCode: `function isSuccess(xhr) {\n  return xhr.status === 200;\n}`,
      solution: `function isSuccess(xhr) {\n  return xhr.status === 200;\n}`
    }
  }
];
