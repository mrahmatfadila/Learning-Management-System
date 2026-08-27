module.exports = [
  // ── 154. HTML DOM ───────────────────────────────────────────────────────
  {
    id: 'html-dom',
    title: 'HTML DOM',
    chapter: 'JS HTML DOM',
    chapterId: 'js-chap-htmldom',
    order: 154,
    overview: 'Pengenalan Document Object Model (DOM): pohon hierarki node (Document, Element, Attribute, Text node) yang menjadi jembatan antara dokumen HTML dan JavaScript.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">HTML DOM</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 154 / 173</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌳 Pohon Struktur Document Object Model (DOM)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Saat browser memuat halaman HTML, browser otomatis membuat model representasi berorientasi objek dari dokumen tersebut yang dinamakan <strong>DOM Tree</strong>. JavaScript menggunakan DOM untuk membaca dan memanipulasi struktur halaman web secara dinamis.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>HTML DOM Tree Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2 id="judulUtama">Judul Awal Dokumen</h2>
  <button onclick="ubahJudulLive()" style="padding: 8px 16px; background: #0284c7; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">
    Manipulasi DOM Node
  </button>
  <div id="output" style="margin-top: 15px; background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    function ubahJudulLive() {
      // Mengakses node elemen h2 melalui DOM API
      const el = document.getElementById('judulUtama');
      el.innerText = '✨ Judul Telah Diubah via JavaScript DOM!';
      el.style.color = '#22c55e';

      document.getElementById('output').innerHTML = 
        '• Node Name: <code>' + el.nodeName + '</code><br>' +
        '• Node Type: <strong>Element Node (' + el.nodeType + ')</strong><br>' +
        '• Parent: <code>' + el.parentNode.nodeName + '</code>';
    }
  </script>

</body>
</html>`,
    codeExplanation: [
      'document.getElementById("judulUtama") mengambil referensi Element Node dari pohon DOM.',
      'Perubahan pada properti elemen langsung memicu rendering ulang (repaint) pada layar browser.'
    ],
    quiz: {
      question: 'Apa kepanjangan dari singkatan DOM di dunia pengembangan web?',
      options: [
        'Data Object Model',
        'Document Object Model',
        'Digital Orientation Mapping',
        'Desktop Oriented Module'
      ],
      answer: 1,
      explanation: 'DOM adalah singkatan dari `Document Object Model`.'
    },
    challenge: {
      title: 'Tantangan: Ubah Teks Elemen DOM',
      description: 'Ubah teks elemen `document.body.innerText = "Halo DOM";`.',
      startingCode: `// Ubah teks body di bawah:\n`,
      solution: `document.body.innerText = "Halo DOM";`
    }
  },

  // ── 155. HTML DOM API ───────────────────────────────────────────────────
  {
    id: 'html-dom-api',
    title: 'HTML DOM API',
    chapter: 'JS HTML DOM',
    chapterId: 'js-chap-htmldom',
    order: 155,
    overview: 'Arsitektur Web API DOM: hierarki antarmuka EventTarget -> Node -> Element -> HTMLElement, dan navigasi traversal (parentNode, children, nextElementSibling, previousElementSibling).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">HTML DOM</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 155 / 173</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧭 Navigasi & Traversal Pohon DOM</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            DOM menyediakan properti relasional untuk menjelajahi elemen sekitar: ke atas (<code>parentElement</code>), ke bawah (<code>children</code>, <code>firstElementChild</code>), dan ke samping (<code>nextElementSibling</code>).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>DOM API Traversal Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <ul id="menuList">
    <li>Menu Beranda</li>
    <li id="itemTengah">Menu Kursus (Target)</li>
    <li>Menu Profil</li>
  </ul>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    const target = document.getElementById('itemTengah');
    let log = '';

    log += '• Target Aktif: <strong>' + target.innerText + '</strong><br>';
    log += '• Parent Node: <code>' + target.parentElement.id + '</code><br>';
    log += '• Previous Sibling: ' + target.previousElementSibling.innerText + '<br>';
    log += '• Next Sibling: ' + target.nextElementSibling.innerText;

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'previousElementSibling dan nextElementSibling mengambil elemen saudara terdekat tanpa terganggu oleh text node spasi kosong.'
    ],
    quiz: {
      question: 'Properti manakah yang digunakan untuk mendapatkan daftar seluruh anak elemen HTML tanpa menyertakan node teks spasi putih?',
      options: [
        'element.childNodes',
        'element.children',
        'element.childElements',
        'element.subNodes'
      ],
      answer: 1,
      explanation: 'Properti `element.children` mengembalikan HTMLCollection yang hanya berisi node bertipe Element.'
    },
    challenge: {
      title: 'Tantangan: Ambil Parent Element',
      description: 'Ambil elemen induk `const p = el.parentElement;`.',
      startingCode: `const el = document.createElement("div");\n// Ambil parentElement di bawah:\nlet p = null;`,
      solution: `const el = document.createElement("div");\nlet p = el.parentElement;`
    }
  },

  // ── 156. SELECTING ELEMENTS ─────────────────────────────────────────────
  {
    id: 'selecting-elements',
    title: 'Selecting Elements',
    chapter: 'JS HTML DOM',
    chapterId: 'js-chap-htmldom',
    order: 156,
    overview: 'Metode seleksi elemen DOM: querySelector() & querySelectorAll() (CSS selector modern), getElementById(), getElementsByClassName(), dan getElementsByTagName().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">HTML DOM</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 156 / 173</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎯 Memilih Elemen dengan CSS Selector</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>document.querySelector()</code> adalah method paling fleksibel karena mendukung sintaks CSS selector lengkap (seperti <code>.class</code>, <code>#id</code>, <code>[attr=val]</code>, hingga kombinator bersarang).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Selecting Elements Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <div class="kartu-box" data-id="101">Kartu 1</div>
  <div class="kartu-box favorit" data-id="102">Kartu 2 (Favorit)</div>
  <div class="kartu-box" data-id="103">Kartu 3</div>

  <div id="output" style="margin-top: 15px; background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. querySelector (Mengambil elemen pertama yang cocok)
    const cardFav = document.querySelector('.kartu-box.favorit');
    log += '• querySelector: <strong>' + cardFav.innerText + '</strong><br><br>';

    // 2. querySelectorAll (Mengambil seluruh elemen yang cocok sebagai NodeList)
    const semuaKartu = document.querySelectorAll('.kartu-box');
    log += '• querySelectorAll Total: <strong>' + semuaKartu.length + ' elemen</strong><br>';
    semuaKartu.forEach((k, idx) => {
      log += '&nbsp;&nbsp;[' + idx + '] data-id: ' + k.dataset.id + '<br>';
    });

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'querySelector() mengembalikan elemen pertama yang cocok atau null jika tidak ditemukan.',
      'querySelectorAll() mengembalikan NodeList statis yang mendukung method .forEach() secara langsung.'
    ],
    quiz: {
      question: 'Method seleksi DOM manakah yang menerima selector CSS arbitrary dan mengembalikan semua elemen yang cocok dalam bentuk NodeList?',
      options: [
        'document.getElementsByTagName()',
        'document.querySelectorAll()',
        'document.selectNodes()',
        'document.findAll()'
      ],
      answer: 1,
      explanation: '`document.querySelectorAll(selector)` mengembalikan seluruh elemen yang cocok dengan CSS selector yang diberikan.'
    },
    challenge: {
      title: 'Tantangan: Pilih Elemen Pertama dengan QuerySelector',
      description: 'Pilih elemen dengan id "app" menggunakan `const app = document.querySelector("#app");`.',
      startingCode: `// Pilih elemen di bawah:\nlet app = null;`,
      solution: `let app = document.querySelector("#app");`
    }
  },

  // ── 157. CHANGING HTML ──────────────────────────────────────────────────
  {
    id: 'changing-html',
    title: 'Changing HTML',
    chapter: 'JS HTML DOM',
    chapterId: 'js-chap-htmldom',
    order: 157,
    overview: 'Manipulasi konten & atribut HTML: innerHTML vs textContent (keamanan XSS), setAttribute(), getAttribute(), removeAttribute(), createElement(), appendChild(), dan remove().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">HTML DOM</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 157 / 173</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔨 Membuat, Mengubah, & Menghapus Elemen</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            JavaScript memungkinkan pembuatan elemen baru dari nol menggunakan <code>document.createElement()</code>, mengatur atributnya, dan menyisipkannya ke dalam struktur halaman dengan <code>append()</code>.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Changing HTML Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Daftar Materi Dinamis</h2>
  <div id="containerMateri" style="border: 1px dashed #64748b; padding: 15px; border-radius: 8px;"></div>
  <button onclick="tambahBadgeMateri()" style="margin-top: 10px; padding: 8px 16px; background: #22c55e; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">
    + Tambah Elemen Baru
  </button>

  <script>
    let hitung = 1;

    function tambahBadgeMateri() {
      // 1. Buat elemen baru di memori
      const badge = document.createElement('div');
      
      // 2. Set teks dan atribut
      badge.textContent = 'Materi Bab ' + hitung;
      badge.style.background = '#0284c7';
      badge.style.color = 'white';
      badge.style.padding = '6px 12px';
      badge.style.margin = '4px 0';
      badge.style.borderRadius = '4px';
      badge.style.display = 'inline-block';
      badge.style.marginRight = '6px';

      // 3. Sisipkan ke container DOM
      document.getElementById('containerMateri').appendChild(badge);
      hitung++;
    }
  </script>

</body>
</html>`,
    codeExplanation: [
      'document.createElement("div") membuat node elemen baru di RAM.',
      'appendChild() menyisipkan elemen ke dalam DOM pohon aktif.'
    ],
    quiz: {
      question: 'Properti manakah yang lebih aman digunakan untuk mengubah teks pengguna guna mencegah serangan Cross-Site Scripting (XSS)?',
      options: [
        'element.innerHTML',
        'element.textContent',
        'element.rawHTML',
        'document.write()'
      ],
      answer: 1,
      explanation: '`element.textContent` memperlakukan semua input sebagai teks murni tanpa mengeksekusi tag HTML/script berbahaya.'
    },
    challenge: {
      title: 'Tantangan: Buat Elemen Paragraf',
      description: 'Buat elemen paragraf `const p = document.createElement("p");`.',
      startingCode: `// Buat elemen di bawah:\nlet p = null;`,
      solution: `let p = document.createElement("p");`
    }
  },

  // ── 158. CHANGING CSS ───────────────────────────────────────────────────
  {
    id: 'changing-css',
    title: 'Changing CSS',
    chapter: 'JS HTML DOM',
    chapterId: 'js-chap-htmldom',
    order: 158,
    overview: 'Manipulasi style & class CSS melalui DOM: properti element.style, API classList (add, remove, toggle, contains, replace), dan getComputedStyle().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">HTML DOM</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 158 / 173</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎨 Mengubah Gaya Tampilan dengan classList</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Praktik terbaik dalam memanipulasi tampilan CSS adalah dengan menambahkan atau menghapus nama class CSS menggunakan <strong><code>element.classList.toggle()</code></strong>, bukan mengubah inline-style satu per satu.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Changing CSS Demo</title>
  <style>
    .mode-terang { background: #f8fafc; color: #0f172a; border: 2px solid #cbd5e1; }
    .mode-gelap { background: #0f172a; color: #38bdf8; border: 2px solid #0284c7; }
    .box-tema { padding: 25px; border-radius: 12px; transition: all 0.3s ease; text-align: center; }
  </style>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <div id="temaBox" class="box-tema mode-terang">
    <h3 style="margin: 0 0 10px 0;">Kotak Tema Interaktif</h3>
    <button onclick="toggleTemaLive()" style="padding: 8px 16px; background: #0284c7; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">
      Ganti Mode Gelap / Terang
    </button>
  </div>

  <script>
    function toggleTemaLive() {
      const box = document.getElementById('temaBox');
      box.classList.toggle('mode-gelap');
      box.classList.toggle('mode-terang');
    }
  </script>

</body>
</html>`,
    codeExplanation: [
      'box.classList.toggle("nama-class") menambah class jika belum ada, atau menghapusnya jika sudah ada.',
      'Memisahkan aturan visual di CSS dan hanya mengontrol status class di JS adalah best practice industri.'
    ],
    quiz: {
      question: 'Method classList manakah yang secara cerdas menambah class jika belum ada dan menghapus class jika sudah ada?',
      options: [
        'classList.switch()',
        'classList.toggle()',
        'classList.swap()',
        'classList.flip()'
      ],
      answer: 1,
      explanation: '`element.classList.toggle(className)` otomatis membolak-balik keberadaan nama class pada elemen.'
    },
    challenge: {
      title: 'Tantangan: Tambah Class dengan classList',
      description: 'Tambahkan class "aktif" menggunakan `el.classList.add("aktif");`.',
      startingCode: `const el = document.createElement("div");\n// Tambahkan class di bawah:\n`,
      solution: `const el = document.createElement("div");\nel.classList.add("aktif");`
    }
  },

  // ── 159. FORM VALIDATION DOM ────────────────────────────────────────────
  {
    id: 'form-validation-dom',
    title: 'Form Validation DOM',
    chapter: 'JS HTML DOM',
    chapterId: 'js-chap-htmldom',
    order: 159,
    overview: 'Constraint Validation API bawaan browser: checkValidity(), validity object (valueMissing, typeMismatch, patternMismatch, tooShort), dan setCustomValidity().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">HTML DOM</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 159 / 173</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛡️ Constraint Validation API</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Browser modern memiliki mesin validasi bawaan bernama <strong>Constraint Validation API</strong> yang dapat diakses melalui properti <code>input.validity</code> tanpa perlu menulis regex manual yang panjang.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Constraint Validation API Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Uji Validasi Form Native DOM</h2>
  <form id="testForm" onsubmit="event.preventDefault(); cekValiditas();">
    <input type="number" id="inputUmur" min="18" max="65" required placeholder="Usia 18 - 65 tahun" style="padding: 8px; border-radius: 6px; border: 1px solid #94a3b8;">
    <button type="submit" style="padding: 8px 16px; background: #0284c7; color: white; border: none; border-radius: 6px; font-weight: bold; cursor: pointer;">
      Verifikasi
    </button>
  </form>
  <div id="output" style="margin-top: 15px; background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    function cekValiditas() {
      const input = document.getElementById('inputUmur');
      let log = '';

      if (input.checkValidity()) {
        log += '✅ Validitas Lolos! Nilai sah: ' + input.value + ' tahun.';
      } else {
        log += '❌ <strong>Validitas Gagal:</strong><br>';
        log += '• Kosong (valueMissing): ' + input.validity.valueMissing + '<br>';
        log += '• Di bawah minimum (rangeUnderflow): ' + input.validity.rangeUnderflow + '<br>';
        log += '• Di atas maksimum (rangeOverflow): ' + input.validity.rangeOverflow + '<br>';
        log += '• Pesan Native: ' + input.validationMessage;
      }

      document.getElementById('output').innerHTML = log;
    }
  </script>

</body>
</html>`,
    codeExplanation: [
      'input.checkValidity() memeriksa apakah nilai input memenuhi seluruh batasan HTML (required, min, max).',
      'input.validity menyimpan detail jenis pelanggaran secara granular.'
    ],
    quiz: {
      question: 'Method DOM manakah yang digunakan untuk memicu pemeriksaan validitas form dan mengembalikan true/false?',
      options: [
        'input.validate()',
        'input.checkValidity()',
        'input.isInputValid()',
        'input.test()'
      ],
      answer: 1,
      explanation: '`element.checkValidity()` memeriksa kesesuaian input terhadap batasan HTML5 dan mengembalikan boolean.'
    },
    challenge: {
      title: 'Tantangan: Periksa Validitas Input',
      description: 'Panggil `input.checkValidity()` dan simpan ke `let valid = input.checkValidity();`.',
      startingCode: `const input = document.createElement("input");\nlet valid = false;`,
      solution: `const input = document.createElement("input");\nlet valid = input.checkValidity();`
    }
  },

  // ── 160. DOM ANIMATIONS ─────────────────────────────────────────────────
  {
    id: 'dom-animations',
    title: 'DOM Animations',
    chapter: 'JS HTML DOM',
    chapterId: 'js-chap-htmldom',
    order: 160,
    overview: 'Animasi DOM berkecepatan 60 FPS: requestAnimationFrame(), sinkronisasi refresh rate monitor, penghitungan delta time, dan cancelAnimationFrame().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">HTML DOM</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 160 / 173</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎬 Animasi Mulus 60 FPS dengan requestAnimationFrame</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Jangan gunakan <code>setInterval</code> untuk membuat animasi. <strong><code>requestAnimationFrame()</code></strong> menyinkronkan animasi dengan refresh rate layar monitor sehingga menghasilkan gerakan ultra-halus dan hemat baterai.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>DOM requestAnimationFrame Demo</title>
  <style>
    .track { width: 100%; height: 50px; background: #1e293b; border-radius: 8px; position: relative; overflow: hidden; }
    .box-anim { width: 40px; height: 40px; background: #38bdf8; border-radius: 6px; position: absolute; top: 5px; left: 0; }
  </style>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Simulasi requestAnimationFrame (60 FPS)</h2>
  <div class="track">
    <div id="animBox" class="box-anim"></div>
  </div>
  <button onclick="mulaiAnimasi()" style="margin-top: 10px; padding: 8px 16px; background: #0284c7; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">
    Mulai Gerak 🚀
  </button>

  <script>
    let pos = 0;
    let animId = null;

    function renderFrame() {
      pos += 3;
      document.getElementById('animBox').style.left = pos + 'px';

      if (pos < 260) {
        animId = requestAnimationFrame(renderFrame);
      }
    }

    function mulaiAnimasi() {
      pos = 0;
      if (animId) cancelAnimationFrame(animId);
      animId = requestAnimationFrame(renderFrame);
    }
  </script>

</body>
</html>`,
    codeExplanation: [
      'requestAnimationFrame(renderFrame) meminta browser memanggil fungsi sebelum repaint layar berikutnya (biasanya 60-144 kali per detik).',
      'Animasi otomatis dijeda ketika tab browser tidak aktif, menghemat penggunaan CPU dan RAM.'
    ],
    quiz: {
      question: 'Method browser apakah yang direkomendasikan untuk membuat animasi JavaScript berkinerja tinggi yang tersinkronisasi dengan refresh rate monitor?',
      options: [
        'setTimeout()',
        'setInterval()',
        'requestAnimationFrame()',
        'setImmediate()'
      ],
      answer: 2,
      explanation: '`window.requestAnimationFrame()` adalah standar performa tinggi untuk animasi JavaScript di browser.'
    },
    challenge: {
      title: 'Tantangan: Panggil requestAnimationFrame',
      description: 'Jadwalkan frame berikutnya `requestAnimationFrame(loop);`.',
      startingCode: `function loop() {\n  // Jadwalkan frame di bawah:\n}`,
      solution: `function loop() {\n  requestAnimationFrame(loop);\n}`
    }
  },

  // ── 161. DOCUMENT REFERENCE ─────────────────────────────────────────────
  {
    id: 'document-reference',
    title: 'Document Reference',
    chapter: 'JS HTML DOM',
    chapterId: 'js-chap-htmldom',
    order: 161,
    overview: 'Kamus referensi lengkap objek document: document.title, document.body, document.head, document.activeElement, document.cookie, document.referrer, dan document.readyState.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">HTML DOM</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 161 / 173</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📄 Referensi Properti Objek Document</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Objek <code>document</code> adalah titik masuk (*entry point*) utama ke seluruh struktur konten halaman web.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Document Reference Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Inspeksi Properti Objek Document</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    log += '• document.title: <strong>' + document.title + '</strong><br>';
    log += '• document.characterSet: ' + document.characterSet + '<br>';
    log += '• document.readyState: <strong>' + document.readyState + '</strong><br>';
    log += '• document.URL: ' + document.URL + '<br>';
    log += '• document.contentType: ' + document.contentType;

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'document.title membaca dan dapat mengubah teks tab browser secara langsung.',
      'document.readyState mengindikasikan status pemuatan halaman (loading, interactive, atau complete).'
    ],
    quiz: {
      question: 'Properti document manakah yang berisi status kesiapan pemuatan dokumen HTML (loading, interactive, atau complete)?',
      options: [
        'document.status',
        'document.readyState',
        'document.isLoaded',
        'document.loadState'
      ],
      answer: 1,
      explanation: '`document.readyState` menyediakan status lifecycle pemuatan dokumen.'
    },
    challenge: {
      title: 'Tantangan: Ubah Judul Halaman',
      description: 'Ubah judul dokumen `document.title = "LMS Baru";`.',
      startingCode: `// Ubah document.title di bawah:\n`,
      solution: `document.title = "LMS Baru";`
    }
  },

  // ── 162. ELEMENT REFERENCE ─────────────────────────────────────────────
  {
    id: 'element-reference',
    title: 'Element Reference',
    chapter: 'JS HTML DOM',
    chapterId: 'js-chap-htmldom',
    order: 162,
    overview: 'Kamus referensi properti & method objek Element: getBoundingClientRect() (dimensi & koordinat absolut), scrollHeight/scrollTop, clientWidth/offsetWidth, dan dataset.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">HTML DOM</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 162 / 173</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📐 Dimensi Geometri & getBoundingClientRect</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Method <strong><code>getBoundingClientRect()</code></strong> adalah senjata utama untuk membaca posisi piksel elemen (top, left, width, height) relatif terhadap viewport browser untuk keperluan animasi scroll dan positioning tooltip.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Element Reference Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <div id="targetBox" style="width: 200px; height: 60px; background: #0284c7; color: white; padding: 10px; border-radius: 8px;">
    Kotak Target Geometri
  </div>
  <div id="output" style="margin-top: 15px; background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    const el = document.getElementById('targetBox');
    const rect = el.getBoundingClientRect();
    let log = '';

    log += '<strong>getBoundingClientRect():</strong><br>';
    log += '• Width: ' + rect.width + 'px<br>';
    log += '• Height: ' + rect.height + 'px<br>';
    log += '• Top Viewport: ' + Math.round(rect.top) + 'px<br>';
    log += '• Left Viewport: ' + Math.round(rect.left) + 'px';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'getBoundingClientRect() mengembalikan objek DOMRect berisi posisi koordinat akurat elemen dalam piksel.'
    ],
    quiz: {
      question: 'Method Element manakah yang mengembalikan ukuran elemen dan posisinya relatif terhadap viewport?',
      options: [
        'element.getCoordinates()',
        'element.getBoundingClientRect()',
        'element.getPosition()',
        'element.getLayout()'
      ],
      answer: 1,
      explanation: '`element.getBoundingClientRect()` mengembalikan koordinat geometris elemen (top, right, bottom, left, width, height).'
    },
    challenge: {
      title: 'Tantangan: Ambil Rect Elemen',
      description: 'Panggil `el.getBoundingClientRect()` dan simpan ke `let r = el.getBoundingClientRect();`.',
      startingCode: `const el = document.createElement("div");\nlet r = null;`,
      solution: `const el = document.createElement("div");\nlet r = el.getBoundingClientRect();`
    }
  }
];
