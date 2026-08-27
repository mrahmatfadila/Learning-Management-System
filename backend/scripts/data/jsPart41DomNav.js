module.exports = [
  // ── 268. DOM NAVIGATION ─────────────────────────────────────────────────
  {
    id: 'dom-navigation',
    title: 'DOM Navigation',
    chapter: 'JS DOM Navigation',
    chapterId: 'js-chap-domnav',
    order: 268,
    overview: 'Menjelajahi Hubungan Silsilah Pohon DOM: parentNode vs parentElement, children vs childNodes, firstElementChild vs firstChild, dan traversal sibling (nextElementSibling, previousElementSibling).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS DOM NAVIGATION</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 268 / 277</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌳 Traversal & Navigasi Pohon Elemen DOM</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Setiap elemen di halaman HTML terhubung dalam hierarki pohon keluarga. Properti berakhiran <code>*Element*</code> (seperti <code>parentElement</code>, <code>children</code>, <code>nextElementSibling</code>) hanya menavigasi elemen tag HTML murni dan secara cerdas mengabaikan spasi/enter teks kosong.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>DOM Navigation Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Pohon Menu Navigasi</h2>
  <ul id="daftarMateri">
    <li>Materi 1: HTML Dasar</li>
    <li id="itemAktif">Materi 2: DOM Navigation (Aktif)</li>
    <li>Materi 3: JavaScript Graphics</li>
  </ul>
  <div id="output" style="margin-top: 15px; background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    const aktif = document.getElementById('itemAktif');
    let log = '';

    log += '• Elemen Induk (parentElement): &lt;' + aktif.parentElement.tagName.toLowerCase() + '&gt;<br>';
    log += '• Saudara Sebelumnya (previousElementSibling): "' + aktif.previousElementSibling.textContent + '"<br>';
    log += '• Saudara Berikutnya (nextElementSibling): "<strong>' + aktif.nextElementSibling.textContent + '</strong>"';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Gunakan nextElementSibling dan previousElementSibling untuk menjelajahi elemen tag HTML tanpa terganggu oleh whitespace text nodes.'
    ],
    quiz: {
      question: 'Properti DOM manakah yang digunakan untuk mengambil elemen HTML saudara tepat setelah elemen saat ini?',
      options: [
        'nextSibling',
        'nextElementSibling',
        'afterElement',
        'siblingAfter'
      ],
      answer: 1,
      explanation: '`nextElementSibling` mengambil elemen HTML tag saudara berikutnya tanpa menyertakan node teks kosong.'
    },
    challenge: {
      title: 'Tantangan: Ambil Elemen Induk',
      description: 'Lakukan `const p = el.parentElement;`.',
      startingCode: `function getParent(el) {\n  return el.parentElement;\n}`,
      solution: `function getParent(el) {\n  return el.parentElement;\n}`
    }
  },

  // ── 269. DOM NODES ──────────────────────────────────────────────────────
  {
    id: 'dom-nodes',
    title: 'DOM Nodes',
    chapter: 'JS DOM Navigation',
    chapterId: 'js-chap-domnav',
    order: 269,
    overview: 'Konsep Fundamental DOM Nodes: perbedaan mendasar Node vs Element, nodeType (1=Element, 3=Text, 8=Comment), nodeName, nodeValue, pembuatan node dengan document.createTextNode() dan optimasi DocumentFragment.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS DOM NAVIGATION</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 269 / 277</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌿 Anatomi Node & Optimasi DocumentFragment</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Semua hal di dalam dokumen adalah <strong>Node</strong>: tag adalah <em>Element Node (type 1)</em>, tulisan di dalamnya adalah <em>Text Node (type 3)</em>, dan komentar HTML adalah <em>Comment Node (type 8)</em>. <code>DocumentFragment</code> digunakan sebagai wadah memori virtual sementara untuk merender ribuan elemen sekaligus tanpa memicu layout reflow berulang.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>DOM Nodes Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Batch Rendering Cepat dengan DocumentFragment</h2>
  <ul id="listKontainer"></ul>
  <div id="output" style="margin-top: 15px; background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    // Membuat virtual container DocumentFragment
    const fragmen = document.createDocumentFragment();

    for (let i = 1; i <= 3; i++) {
      const li = document.createElement('li');
      li.textContent = 'Materi Batch #' + i;
      fragmen.appendChild(li); // Dimasukkan ke fragment virtual (tanpa DOM Reflow!)
    }

    // Hanya 1 kali menempel ke DOM nyata
    document.getElementById('listKontainer').appendChild(fragmen);

    document.getElementById('output').innerHTML = '✅ 3 Node berhasil dirender dalam 1 kali reflow menggunakan DocumentFragment!';
  </script>

</body>
</html>`,
    codeExplanation: [
      'DocumentFragment tidak memiliki representasi visual di DOM; saat di-append, hanya anak-anaknya yang dipindahkan ke DOM nyata.'
    ],
    quiz: {
      question: 'Berapakah nilai angka nodeType untuk sebuah Element Node (seperti tag <div> atau <p>)?',
      options: [
        '1',
        '2',
        '3',
        '8'
      ],
      answer: 0,
      explanation: 'Nilai `nodeType === 1` merepresentasikan sebuah Node Elemen HTML (Node.ELEMENT_NODE).'
    },
    challenge: {
      title: 'Tantangan: Buat DocumentFragment',
      description: 'Lakukan `const frag = document.createDocumentFragment();`.',
      startingCode: `function makeFrag() {\n  return document.createDocumentFragment();\n}`,
      solution: `function makeFrag() {\n  return document.createDocumentFragment();\n}`
    }
  },

  // ── 270. DOM COLLECTIONS ────────────────────────────────────────────────
  {
    id: 'dom-collections',
    title: 'DOM Collections',
    chapter: 'JS DOM Navigation',
    chapterId: 'js-chap-domnav',
    order: 270,
    overview: 'HTMLCollection di JavaScript: karakteristik Live Collection hasil getElementsByTagName / getElementsByClassName, akses indeks numerik dan namedItem(), serta bahaya infinite loop saat mutasi DOM.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS DOM NAVIGATION</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 270 / 277</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚡ Koleksi Hidup (Live HTMLCollection)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>HTMLCollection</code> adalah koleksi elemen yang bersifat <strong>Live</strong>: jika sebuah elemen ditambahkan atau dihapus dari dokumen HTML, panjang <code>HTMLCollection.length</code> akan otomatis berubah secara instan tanpa perlu query ulang!
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>DOM Collections Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Karakteristik Live HTMLCollection</h2>
  <div id="kotakGrup">
    <span class="badge">Badge 1</span>
    <span class="badge">Badge 2</span>
  </div>
  <button onclick="tambahBadge()" style="margin-top: 10px; padding: 8px 16px; background: #0284c7; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">
    Tambah Badge Baru
  </button>
  <div id="output" style="margin-top: 15px; background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    // Mengambil Live Collection
    const koleksiBadge = document.getElementsByClassName('badge');

    function updateInfo() {
      document.getElementById('output').innerHTML = '• Jumlah Badge (koleksiBadge.length): <strong>' + koleksiBadge.length + ' Elemen</strong> (Otomatis Sync!) ✅';
    }

    function tambahBadge() {
      const baru = document.createElement('span');
      baru.className = 'badge';
      baru.textContent = 'Badge Baru ';
      document.getElementById('kotakGrup').appendChild(baru);
      updateInfo();
    }

    updateInfo();
  </script>

</body>
</html>`,
    codeExplanation: [
      'getElementsByClassName mengembalikan HTMLCollection yang otomatis ter-update saat DOM dimutasi.'
    ],
    quiz: {
      question: 'Apakah sifat khusus dari HTMLCollection yang membedakannya dari Array biasa saat terjadi perubahan pada struktur DOM HTML?',
      options: [
        'Bersifat statis dan tidak pernah berubah',
        'Bersifat Live (otomatis menyesuaikan jumlah elemen yang ada di DOM secara real-time)',
        'Hanya bisa menampung 10 elemen',
        'Otomatis terhapus saat reload'
      ],
      answer: 1,
      explanation: '`HTMLCollection` bersifat Live, yang berarti perubahannya selalu tersinkronisasi langsung dengan status dokumen DOM terkini.'
    },
    challenge: {
      title: 'Tantangan: Ambil Koleksi Tag',
      description: 'Lakukan `document.getElementsByTagName("p");`.',
      startingCode: `function getP() {\n  return document.getElementsByTagName("p");\n}`,
      solution: `function getP() {\n  return document.getElementsByTagName("p");\n}`
    }
  },

  // ── 271. DOM NODE LISTS ─────────────────────────────────────────────────
  {
    id: 'dom-node-lists',
    title: 'DOM Node Lists',
    chapter: 'JS DOM Navigation',
    chapterId: 'js-chap-domnav',
    order: 271,
    overview: 'NodeList di JavaScript: Static NodeList hasil querySelectorAll() vs Live NodeList hasil childNodes, method bawaan .forEach(), dan konversi ke Array asli dengan Array.from() atau spread operator [...list].',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS DOM NAVIGATION</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 271 / 277</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📋 Koleksi Node (NodeList) & querySelectorAll</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>document.querySelectorAll()</code> mengembalikan <strong>Static NodeList</strong> (foto snapshot pada saat query dipanggil). NodeList memiliki method bawaan <code>.forEach()</code> dan dapat dikonversi ke Array penuh menggunakan <code>Array.from(nodeList)</code>.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>DOM Node Lists Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Iterasi NodeList dengan .forEach()</h2>
  <div class="kartu-materi">Modul 1: Dasar</div>
  <div class="kartu-materi">Modul 2: DOM & Events</div>
  <div class="kartu-materi">Modul 3: Web API & Graphics</div>
  <div id="output" style="margin-top: 15px; background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    const daftarKartu = document.querySelectorAll('.kartu-materi');
    let log = '<strong>Hasil Iterasi NodeList:</strong><br>';

    // NodeList mendukung forEach native!
    daftarKartu.forEach((el, index) => {
      log += '• [' + index + '] ' + el.textContent + '<br>';
    });

    // Konversi ke Array asli untuk method .map() atau .filter()
    const arrayAsli = Array.from(daftarKartu);
    log += '<br>• Konversi ke Array Asli: ' + (Array.isArray(arrayAsli) ? 'Array Asli ✅' : 'Bukan');

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'querySelectorAll menghasilkan Static NodeList yang aman dari infinite loop saat elemen baru disisipkan.',
      'Array.from(nodeList) membuka akses ke seluruh method array modern seperti .map(), .filter(), dan .reduce().'
    ],
    quiz: {
      question: 'Method Array manakah yang digunakan untuk mengonversi objek NodeList menjadi Array JavaScript asli?',
      options: [
        'Array.from(nodeList) atau [...nodeList]',
        'NodeList.toArray()',
        'Array.convert()',
        'document.toArray()'
      ],
      answer: 0,
      explanation: '`Array.from(nodeList)` atau spread operator `[...nodeList]` mengonversi NodeList menjadi Array sejati.'
    },
    challenge: {
      title: 'Tantangan: Query Selector All',
      description: 'Lakukan `document.querySelectorAll(".item");`.',
      startingCode: `function getItems() {\n  return document.querySelectorAll(".item");\n}`,
      solution: `function getItems() {\n  return document.querySelectorAll(".item");\n}`
    }
  }
];
