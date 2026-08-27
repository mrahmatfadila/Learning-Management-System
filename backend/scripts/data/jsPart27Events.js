module.exports = [
  // ── 163. INTRO TO EVENTS ────────────────────────────────────────────────
  {
    id: 'intro-to-events',
    title: 'Intro to Events',
    chapter: 'JS HTML Events',
    chapterId: 'js-chap-htmlevents',
    order: 163,
    overview: 'Konsep Event-Driven Programming di JavaScript: siklus hidup event, interaksi pengguna vs sistem, dan alur propagasi event (Capturing Phase, Target Phase, Bubbling Phase).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">HTML EVENTS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 163 / 173</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚡ Pemrograman Berbasis Peristiwa (Event-Driven)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            JavaScript beroperasi secara asinkronus berbasis *event*. Saat pengguna mengklik tombol atau menekan keyboard, browser menghasilkan objek <code>Event</code> yang merambat melalui 3 fase: <strong>Capturing</strong> (dari window ke target), <strong>Target</strong>, dan <strong>Bubbling</strong> (naik kembali ke window).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Event Propagation Bubbling Demo</title>
  <style>
    .parent-box { background: #1e293b; padding: 20px; border-radius: 12px; color: white; }
    .child-btn { padding: 10px 20px; background: #0284c7; color: white; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; }
  </style>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Simulasi Event Bubbling</h2>
  <div id="parentBox" class="parent-box">
    Induk (Parent Div)
    <br><br>
    <button id="childBtn" class="child-btn">Klik Saya (Tombol Anak)</button>
  </div>
  <div id="output" style="margin-top: 15px; background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // Event Listener pada Anak
    document.getElementById('childBtn').addEventListener('click', (e) => {
      log += '1. [Target] Tombol Anak Diklik! (e.target: ' + e.target.tagName + ')<br>';
      document.getElementById('output').innerHTML = log;
    });

    // Event Listener pada Induk (Menerima gelembung event bubbling)
    document.getElementById('parentBox').addEventListener('click', (e) => {
      log += '2. [Bubbling] Event merambat naik ke Induk DIV!<br>';
      document.getElementById('output').innerHTML = log;
    });
  </script>

</body>
</html>`,
    codeExplanation: [
      'Event Bubbling adalah perilaku default di mana event pada elemen anak akan terus merambat ke elemen-elemen induknya di atas pohon DOM.'
    ],
    quiz: {
      question: 'Fase propagasi event di mana peristiwa merambat naik dari elemen target menuju ke window di puncak hierarki DOM disebut?',
      options: [
        'Capturing Phase',
        'Target Phase',
        'Bubbling Phase',
        'Floating Phase'
      ],
      answer: 2,
      explanation: '`Bubbling Phase` adalah fase di mana event mengalir naik dari target terdalam ke induk-induknya.'
    },
    challenge: {
      title: 'Tantangan: Hentikan Event Bubbling',
      description: 'Gunakan `e.stopPropagation();` di dalam handler event.',
      startingCode: `function handle(e) {\n  // Hentikan bubbling di bawah:\n}`,
      solution: `function handle(e) {\n  e.stopPropagation();\n}`
    }
  },

  // ── 164. MOUSE EVENTS ───────────────────────────────────────────────────
  {
    id: 'mouse-events',
    title: 'Mouse Events',
    chapter: 'JS HTML Events',
    chapterId: 'js-chap-htmlevents',
    order: 164,
    overview: 'Event Mouse & Pointer lengkap: click, dblclick, mousedown, mouseup, mousemove, mouseenter, mouseleave, contextmenu, dan pembacaan koordinat kursor (clientX, pageX, screenX).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">HTML EVENTS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 164 / 173</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🖱️ Menguasai Seluruh Event Interaksi Mouse</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Event mouse menyediakan objek <code>MouseEvent</code> yang berisi informasi detail tentang tombol mouse mana yang ditekan (<code>e.button</code>) dan posisi akurat kursor (<code>e.clientX</code>, <code>e.clientY</code>).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Mouse Events Demo</title>
  <style>
    .area-mouse { width: 100%; height: 120px; background: #1e293b; color: white; display: flex; align-items: center; justify-content: center; border-radius: 12px; cursor: crosshair; transition: background 0.2s; }
  </style>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Area Interaktif Deteksi Mouse</h2>
  <div id="interactiveArea" class="area-mouse">
    Gerakkan mouse atau Klik Kanan di area ini!
  </div>
  <div id="output" style="margin-top: 15px; background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    const box = document.getElementById('interactiveArea');

    box.addEventListener('mousemove', (e) => {
      document.getElementById('output').innerHTML = 
        '• clientX: ' + e.clientX + 'px | clientY: ' + e.clientY + 'px<br>' +
        '• offsetX: ' + e.offsetX + 'px | offsetY: ' + e.offsetY + 'px';
    });

    box.addEventListener('mouseenter', () => box.style.background = '#0369a1');
    box.addEventListener('mouseleave', () => box.style.background = '#1e293b');

    // Mencegah menu konteks klik kanan default
    box.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      alert('🖱️ Klik kanan kustom terdeteksi!');
    });
  </script>

</body>
</html>`,
    codeExplanation: [
      'e.clientX / clientY mengukur posisi relatif terhadap viewport browser.',
      'e.preventDefault() pada event contextmenu mematikan menu klik kanan bawaan browser.'
    ],
    quiz: {
      question: 'Event mouse manakah yang dipicu saat kursor pointer mulai memasuki area batas suatu elemen?',
      options: [
        'mousemove',
        'mouseenter',
        'mouseoverload',
        'mousedown'
      ],
      answer: 1,
      explanation: '`mouseenter` dipicu tepat saat pointer kursor memasuki batas elemen.'
    },
    challenge: {
      title: 'Tantangan: Event Double Click',
      description: 'Pasang event dblclick `el.addEventListener("dblclick", () => {});`.',
      startingCode: `const el = document.createElement("div");\n// Pasang listener di bawah:\n`,
      solution: `const el = document.createElement("div");\nel.addEventListener("dblclick", () => {});`
    }
  },

  // ── 165. KEYBOARD EVENTS ────────────────────────────────────────────────
  {
    id: 'keyboard-events',
    title: 'Keyboard Events',
    chapter: 'JS HTML Events',
    chapterId: 'js-chap-htmlevents',
    order: 165,
    overview: 'Event Keyboard modern: keydown, keyup, membaca karakter e.key vs posisi fisik e.code, serta deteksi tombol kombinasi (e.ctrlKey, e.shiftKey, e.metaKey, e.altKey).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">HTML EVENTS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 165 / 173</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⌨️ Menangani Input Keyboard & Pintasan Tombol (Hotkeys)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Gunakan properti modern <strong><code>e.key</code></strong> (menghasilkan nilai karakter aktual seperti <code>"Enter"</code> atau <code>"a"</code>) dan <strong><code>e.code</code></strong> (menghasilkan nama tombol fisik seperti <code>"KeyA"</code> terlepas dari layout bahasa keyboard).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Keyboard Events Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Uji Pintasan Keyboard (Contoh: Tekan Ctrl + S)</h2>
  <input type="text" id="inputKetik" placeholder="Ketik sesuatu di sini..." style="padding: 10px; width: 280px; border-radius: 6px; border: 1px solid #94a3b8;">
  <div id="output" style="margin-top: 15px; background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    window.addEventListener('keydown', (e) => {
      let log = '';
      log += '• e.key (Karakter): <strong>"' + e.key + '"</strong><br>';
      log += '• e.code (Posisi Fisik): <code>' + e.code + '</code><br>';
      log += '• Ctrl Ditekan? ' + e.ctrlKey + '<br>';

      // Deteksi Pintasan Ctrl + S
      if (e.ctrlKey && e.key.toLowerCase() === 's') {
        e.preventDefault(); // Cegah dialog Save As browser!
        log += '⚡ <strong>PINTASAN CUSTOM TERDETEKSI: Dokumen Tersimpan Otomatis!</strong> ✅';
      }

      document.getElementById('output').innerHTML = log;
    });
  </script>

</body>
</html>`,
    codeExplanation: [
      'e.ctrlKey bernilai true jika tombol Ctrl sedang ditahan.',
      'e.preventDefault() pada pintasan Ctrl+S mencegah browser membuka popup dialog penyimpanan halaman default.'
    ],
    quiz: {
      question: 'Properti KeyboardEvent manakah yang menghasilkan representasi karakter teks sebenarnya dari tombol yang ditekan?',
      options: [
        'e.keyCode (Deprecated)',
        'e.which',
        'e.key',
        'e.code'
      ],
      answer: 2,
      explanation: '`e.key` mengembalikan nilai string karakter yang dihasilkan (contoh `"Enter"`, `"ArrowUp"`, `"a"`).'
    },
    challenge: {
      title: 'Tantangan: Deteksi Tombol Enter',
      description: 'Periksa jika tombol yang ditekan adalah Enter: `if (e.key === "Enter") {}`.',
      startingCode: `function onKey(e) {\n  // Cek Enter di bawah:\n}`,
      solution: `function onKey(e) {\n  if (e.key === "Enter") {}\n}`
    }
  },

  // ── 166. LOAD EVENTS ────────────────────────────────────────────────────
  {
    id: 'load-events',
    title: 'Load Events',
    chapter: 'JS HTML Events',
    chapterId: 'js-chap-htmlevents',
    order: 166,
    overview: 'Siklus hidup pemuatan halaman: DOMContentLoaded (pohon DOM selesai dibangun tanpa menunggu stylesheet/gambar) vs window.onload (seluruh resource selesai diunduh), beforeunload, dan penanganan error aset.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">HTML EVENTS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 166 / 173</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⏳ DOMContentLoaded vs window.onload</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <strong><code>DOMContentLoaded</code></strong> dipicu segera setelah HTML selesai diurai menjadi pohon DOM tanpa perlu menunggu gambar berukuran besar selesai diunduh, membuat aplikasi terasa jauh lebih responsif.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Load Events Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Pemeriksaan Lifecycle Halaman</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    // 1. DOMContentLoaded (Paling cepat!)
    document.addEventListener('DOMContentLoaded', () => {
      log += '• [1] <strong>DOMContentLoaded:</strong> Pohon DOM siap dimanipulasi!<br>';
      document.getElementById('output').innerHTML = log;
    });

    // 2. window.onload (Menunggu gambar & stylesheet selesai)
    window.addEventListener('load', () => {
      log += '• [2] <strong>window.load:</strong> Seluruh gambar & asset eksternal selesai diunduh!';
      document.getElementById('output').innerHTML = log;
    });
  </script>

</body>
</html>`,
    codeExplanation: [
      'Gunakan DOMContentLoaded untuk menginisialisasi skrip UI utama agar pengguna tidak perlu menunggu seluruh gambar berat selesai dimuat.'
    ],
    quiz: {
      question: 'Event apakah yang dipicu saat struktur pohon HTML DOM selesai diuraikan tanpa perlu menunggu gambar atau stylesheet eksternal selesai dimuat?',
      options: [
        'window.onload',
        'document.DOMContentLoaded',
        'document.onready',
        'window.oncomplete'
      ],
      answer: 1,
      explanation: '`DOMContentLoaded` dipicu segera setelah parsing dokumen HTML selesai, sebelum seluruh stylesheet dan gambar selesai diunduh.'
    },
    challenge: {
      title: 'Tantangan: Listener DOMContentLoaded',
      description: 'Pasang listener `document.addEventListener("DOMContentLoaded", () => {});`.',
      startingCode: `// Pasang DOMContentLoaded listener di bawah:\n`,
      solution: `document.addEventListener("DOMContentLoaded", () => {});`
    }
  },

  // ── 167. MANAGE EVENTS ──────────────────────────────────────────────────
  {
    id: 'manage-events',
    title: 'Manage Events',
    chapter: 'JS HTML Events',
    chapterId: 'js-chap-htmlevents',
    order: 167,
    overview: 'Kontrol & optimasi event tingkat lanjut: stopPropagation(), preventDefault(), parameter options addEventListener ({ passive: true, once: true, capture: true }), dan AbortController untuk membatalkan listener massal.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">HTML EVENTS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 167 / 173</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚙️ Opsi Mutakhir addEventListener & AbortSignal</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Opsi <code>{ once: true }</code> memastikan event hanya dipicu satu kali saja, sedangkan <strong><code>AbortController</code></strong> memungkinkan pelepasan puluhan event listener sekaligus hanya dengan satu sinyal pemutus (<code>abort()</code>).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Manage Events Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>One-Time Event & AbortController</h2>
  <button id="btnSekali" style="padding: 8px 16px; background: #0284c7; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">
    Klaim Hadiah (Hanya Bisa 1x Klik)
  </button>
  <div id="output" style="margin-top: 15px; background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    // { once: true } otomatis mencabut listener setelah eksekusi pertama!
    document.getElementById('btnSekali').addEventListener('click', () => {
      document.getElementById('output').innerHTML = '🎉 Selamat! Hadiah Anda berhasil diklaim (Listener otomatis dinonaktifkan).';
      document.getElementById('btnSekali').disabled = true;
    }, { once: true });
  </script>

</body>
</html>`,
    codeExplanation: [
      '{ once: true } menghindarkan kebutuhan memanggil removeEventListener() secara manual untuk event yang hanya boleh dijalankan sekali.'
    ],
    quiz: {
      question: 'Opsi ketiga manakah pada addEventListener yang membuat listener otomatis terlepas dan tidak aktif lagi setelah dijalankan satu kali?',
      options: [
        '{ single: true }',
        '{ once: true }',
        '{ autoRemove: true }',
        '{ passive: true }'
      ],
      answer: 1,
      explanation: 'Opsi `{ once: true }` secara otomatis mencabut listener setelah pertama kali dipicu.'
    },
    challenge: {
      title: 'Tantangan: Listener dengan Opsi Once',
      description: 'Pasang listener sekali jalan `btn.addEventListener("click", fn, { once: true });`.',
      startingCode: `const btn = document.createElement("button");\nconst fn = () => {};\n// Pasang listener once di bawah:\n`,
      solution: `const btn = document.createElement("button");\nconst fn = () => {};\nbtn.addEventListener("click", fn, { once: true });`
    }
  },

  // ── 168. EVENT EXAMPLES ─────────────────────────────────────────────────
  {
    id: 'event-examples',
    title: 'Event Examples',
    chapter: 'JS HTML Events',
    chapterId: 'js-chap-htmlevents',
    order: 168,
    overview: 'Studi kasus praktis implementasi event: Pembuatan Accordion FAQ interaktif, Copy to Clipboard dengan feedback tooltip, dan Real-time Word Counter.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">HTML EVENTS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 168 / 173</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">💡 Studi Kasus Nyata: Copy to Clipboard & Accordion</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Menggabungkan Event Listener dengan Web API modern seperti <code>navigator.clipboard.writeText()</code> memungkinkan pembuatan fitur produktivitas interaktif yang disukai pengguna.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Event Examples Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Salin Kode Voucher Kursus LMS</h2>
  <div style="display: flex; gap: 10px; align-items: center;">
    <input type="text" id="voucherCode" value="LMS-DISCOUNT-50" readonly style="padding: 8px 12px; font-family: monospace; font-weight: bold; background: #f1f5f9; border: 1px solid #cbd5e1; border-radius: 6px;">
    <button id="btnCopy" onclick="salinVoucher()" style="padding: 8px 16px; background: #22c55e; color: white; border: none; border-radius: 6px; font-weight: bold; cursor: pointer;">
      📋 Salin Kode
    </button>
  </div>
  <div id="statusSalin" style="margin-top: 10px; color: #22c55e; font-size: 14px; font-weight: bold;"></div>

  <script>
    async function salinVoucher() {
      const teks = document.getElementById('voucherCode').value;
      
      try {
        await navigator.clipboard.writeText(teks);
        const status = document.getElementById('statusSalin');
        status.innerText = '✅ Kode voucher berhasil disalin ke clipboard!';
        setTimeout(() => status.innerText = '', 3000);
      } catch (err) {
        alert('Gagal menyalin kode!');
      }
    }
  </script>

</body>
</html>`,
    codeExplanation: [
      'navigator.clipboard.writeText() adalah API standar modern untuk menyalin teks ke papan klip sistem operasi secara asinkronus.'
    ],
    quiz: {
      question: 'API JavaScript modern apakah yang digunakan untuk menulis data teks ke clipboard pengguna secara asinkronus?',
      options: [
        'document.copy()',
        'navigator.clipboard.writeText()',
        'window.clipboardData()',
        'document.execCommand("copy")'
      ],
      answer: 1,
      explanation: '`navigator.clipboard.writeText(text)` adalah Web API resmi modern untuk menyalin teks ke clipboard.'
    },
    challenge: {
      title: 'Tantangan: Salin Teks ke Clipboard',
      description: 'Panggil `navigator.clipboard.writeText("OK");`.',
      startingCode: `async function copyTest() {\n  // Salin teks di bawah:\n}`,
      solution: `async function copyTest() {\n  await navigator.clipboard.writeText("OK");\n}`
    }
  },

  // ── 169. EVENT LISTENER DOM ─────────────────────────────────────────────
  {
    id: 'event-listener',
    title: 'Event Listener',
    chapter: 'JS HTML Events',
    chapterId: 'js-chap-htmlevents',
    order: 169,
    overview: 'Teknik Event Delegation tingkat lanjut: efisiensi memori dengan memasang satu listener pada induk untuk mengelola ratusan elemen anak dinamis menggunakan e.target.closest().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">HTML EVENTS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 169 / 173</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🚀 Arsitektur Event Delegation & e.target.closest()</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Daripada memasang ratusan event listener pada setiap baris tabel atau kartu, <strong>Event Delegation</strong> memanfaatkan Event Bubbling dengan memasang <em>hanya satu</em> listener pada elemen kontainer induk, menghemat penggunaan memori RAM secara signifikan.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Event Delegation Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Daftar Item (Event Delegation Pola)</h2>
  <ul id="daftarItem" style="background: #1e293b; padding: 15px 30px; border-radius: 12px; color: white;">
    <li data-action="beli" data-item="Kursus JS" style="cursor: pointer; padding: 6px 0;">🛒 Kursus JavaScript (Klik untuk Beli)</li>
    <li data-action="beli" data-item="Kursus CSS" style="cursor: pointer; padding: 6px 0;">🛒 Kursus CSS Grid (Klik untuk Beli)</li>
    <li data-action="detail" data-item="Tentang LMS" style="cursor: pointer; padding: 6px 0;">ℹ️ Informasi Kurikulum LMS</li>
  </ul>
  <div id="output" style="margin-top: 15px; background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    // Memasang HANYA SATU listener pada induk <ul>!
    document.getElementById('daftarItem').addEventListener('click', (e) => {
      const li = e.target.closest('li');
      if (!li) return; // Klik bukan pada li

      const aksi = li.dataset.action;
      const nama = li.dataset.item;

      document.getElementById('output').innerHTML = 
        '• Aksi: <strong>' + aksi.toUpperCase() + '</strong><br>' +
        '• Item Terpilih: <strong>' + nama + '</strong> (Ditangani oleh 1 Listener Induk) ✅';
    });
  </script>

</body>
</html>`,
    codeExplanation: [
      'Event Delegation bekerja untuk seluruh item yang ada saat ini maupun item baru yang ditambahkan secara dinamis di kemudian hari.',
      'e.target.closest("li") mencari leluhur terdekat yang cocok dengan selector li.'
    ],
    quiz: {
      question: 'Method DOM manakah yang digunakan dalam Event Delegation untuk mencari elemen target atau leluhur terdekatnya yang cocok dengan CSS selector?',
      options: [
        'element.findParent()',
        'element.closest()',
        'element.matchAncestor()',
        'element.seek()'
      ],
      answer: 1,
      explanation: '`element.closest(selector)` menjelajahi elemen dan leluhurnya ke atas hingga menemukan elemen yang cocok.'
    },
    challenge: {
      title: 'Tantangan: Gunakan e.target.closest',
      description: 'Ambil tombol terdekat dengan `const btn = e.target.closest("button");`.',
      startingCode: `function onClick(e) {\n  // Ambil button terdekat di bawah:\n  let btn = null;\n}`,
      solution: `function onClick(e) {\n  let btn = e.target.closest("button");\n}`
    }
  }
];
