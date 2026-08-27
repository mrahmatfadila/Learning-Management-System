module.exports = [
  // ── 170. HTML FIRST ─────────────────────────────────────────────────────
  {
    id: 'html-first',
    title: 'HTML First',
    chapter: 'JS HTML First',
    chapterId: 'js-chap-htmlfirst',
    order: 170,
    overview: 'Prinsip & Filosofi Modern "HTML First": memprioritaskan semantik HTML murni dan kapabilitas native browser sebelum menambahkan lapisan kompleksitas JavaScript runtime.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">HTML FIRST</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 170 / 173</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏛️ Paradigma & Filosofi "HTML First"</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Gerakan <strong>HTML First</strong> menekankan bahwa fitur web sebaiknya dibangun menggunakan elemen HTML dan kapabilitas bawaan platform browser terlebih dahulu. JavaScript hanya ditambahkan sebagai lapisan peningkatan interaktivitas (bukan menggantikan peran HTML).
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>HTML First Philosophy Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Formulir HTML First (Bekerja Tanpa 1 Baris JS!)</h2>
  
  <!-- Formulir murni dengan atribut semantik native -->
  <form action="#" style="max-width: 320px; background: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid #cbd5e1;">
    <label style="display:block; margin-bottom:4px; font-weight:bold;">Nama Pengguna:</label>
    <input type="text" required minlength="3" placeholder="Min. 3 huruf" style="width: 100%; box-sizing: border-box; padding: 8px; margin-bottom: 12px;">

    <label style="display:block; margin-bottom:4px; font-weight:bold;">Pilih Tanggal Mulai:</label>
    <input type="date" required style="width: 100%; box-sizing: border-box; padding: 8px; margin-bottom: 12px;">

    <button type="submit" style="padding: 10px; width: 100%; background: #0284c7; color: white; border: none; border-radius: 6px; font-weight: bold; cursor: pointer;">
      Kirim Data Native
    </button>
  </form>

</body>
</html>`,
    codeExplanation: [
      'Input type="date", required, dan minlength="3" menangani UI datepicker dan validasi input secara langsung dari browser tanpa perlu library JS eksternal yang berat.'
    ],
    quiz: {
      question: 'Apa esensi utama dari filosofi arsitektur "HTML First" dalam pengembangan web modern?',
      options: [
        'Menolak penggunaan CSS sama sekali',
        'Memaksimalkan fitur native HTML dan kapabilitas platform sebelum menambahkan beban script JavaScript',
        'Menulis seluruh kode di dalam tag script',
        'Hanya membuat website statis'
      ],
      answer: 1,
      explanation: 'HTML First mengutamakan pemanfaatan fitur semantik dan kapabilitas bawaan HTML/browser untuk menciptakan web yang lebih cepat, tahan banting, dan aksesibel.'
    },
    challenge: {
      title: 'Tantangan: Buat Input Wajib dengan Required',
      description: 'Lengkapi input dengan atribut required: `<input type="text" required>`.',
      startingCode: `// Tulis string tag input required di bawah:\nlet tag = '<input type="text" required>';`,
      solution: `let tag = '<input type="text" required>';`
    }
  },

  // ── 171. HTML PROGRESSIVE ────────────────────────────────────────────────
  {
    id: 'html-progressive',
    title: 'HTML Progressive',
    chapter: 'JS HTML First',
    chapterId: 'js-chap-htmlfirst',
    order: 171,
    overview: 'Prinsip Progressive Enhancement & Graceful Degradation: strategi merancang aplikasi web yang tetap fungsional pada kondisi koneksi lambat atau saat JavaScript dimatikan, lalu diperkaya interaktivitasnya dengan JS.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">HTML FIRST</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 171 / 173</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📈 Peningkatan Bertahap (Progressive Enhancement)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <strong>Progressive Enhancement</strong> adalah strategi di mana fondasi konten dasar HTML selalu dapat diakses dan digunakan oleh semua orang, kemudian lapisan CSS mempercantik tampilan, dan lapisan JavaScript menambahkan interaktivitas mutakhir di atasnya.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Progressive Enhancement Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Formulir Pencarian Progresif</h2>
  <!-- Lapisan 1: Bekerja dengan metode GET standar jika JS gagal load -->
  <form id="formCari" action="/search" method="GET">
    <input type="text" name="q" id="queryInput" placeholder="Cari materi..." style="padding: 8px; border-radius: 6px; border: 1px solid #cbd5e1;">
    <button type="submit" id="btnSubmit" style="padding: 8px 16px; background: #0284c7; color: white; border: none; border-radius: 6px; cursor: pointer;">
      Cari
    </button>
  </form>
  <div id="hasilInstan" style="margin-top: 15px; color: #22c55e; font-weight: bold;"></div>

  <script>
    // Lapisan 2 (Progressive Enhancement): Jika JavaScript aktif, tingkatkan menjadi pencarian instan (AJAX/Fetch)!
    document.getElementById('formCari').addEventListener('submit', (e) => {
      e.preventDefault(); // Mengintersepsi submit reguler
      const query = document.getElementById('queryInput').value;
      document.getElementById('hasilInstan').innerHTML = '🚀 [Enhanced AJAX] Menampilkan hasil instan untuk: "' + query + '"';
    });
  </script>

</body>
</html>`,
    codeExplanation: [
      'Jika script JS gagal dimuat (misal jaringan lemot), formulir tetap berfungsi dengan submit navigasi browser biasa.',
      'Jika JS berjalan, aplikasi ditingkatkan menjadi Single Page Application (SPA) tanpa reload.'
    ],
    quiz: {
      question: 'Apa prinsip dasar dari metodologi Progressive Enhancement?',
      options: [
        'Membangun web yang hanya bisa dibuka di browser terbaru',
        'Menyediakan fondasi konten dan fungsionalitas dasar yang bekerja untuk semua orang, lalu menambahkan peningkatan interaktivitas bagi browser yang mendukung',
        'Menulis seluruh aplikasi dengan framework berat',
        'Menolak pemakaian JavaScript'
      ],
      answer: 1,
      explanation: 'Progressive Enhancement membangun lapisan fungsional dasar terlebih dahulu sebelum menambahkan lapisan interaktivitas tingkat lanjut.'
    },
    challenge: {
      title: 'Tantangan: Intersepsi Submit Progresif',
      description: 'Lengkapi handler `form.addEventListener("submit", e => e.preventDefault());`.',
      startingCode: `const form = document.createElement("form");\n// Pasang handler submit di bawah:\n`,
      solution: `const form = document.createElement("form");\nform.addEventListener("submit", e => e.preventDefault());`
    }
  },

  // ── 172. HTML FIRST FEATURES ────────────────────────────────────────────
  {
    id: 'html-first-features',
    title: 'HTML First Features',
    chapter: 'JS HTML First',
    chapterId: 'js-chap-htmlfirst',
    order: 172,
    overview: 'Fitur native HTML5 modern yang menggantikan ratusan baris JavaScript: elemen <dialog> (modal native), Popover API, <details> & <summary> (accordion native), dan autocomplete.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">HTML FIRST</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 172 / 173</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🚀 Fitur Native Modern: &lt;dialog&gt; & Popover API</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Browser modern kini memiliki elemen <strong><code>&lt;dialog&gt;</code></strong> untuk popup modal lengkap dengan focus-trapping dan penutupan otomatis via tombol ESC, serta <strong><code>&lt;details&gt;</code></strong> untuk akordion tanpa JS sama sekali.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>HTML First Native Features Demo</title>
  <style>
    dialog::backdrop { background: rgba(0,0,0,0.6); backdrop-filter: blur(3px); }
    dialog { border: none; border-radius: 12px; padding: 24px; box-shadow: 0 20px 40px rgba(0,0,0,0.4); max-width: 340px; }
  </style>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Fitur Native HTML Modern</h2>

  <!-- 1. Akordion Native (0 Baris JS!) -->
  <details style="margin-bottom: 20px; background: #f1f5f9; padding: 10px; border-radius: 8px;">
    <summary style="font-weight: bold; cursor: pointer;">❓ Apa itu Modul LMS Antigravity? (Klik untuk Buka)</summary>
    <p style="margin-top: 10px; color: #475569;">Modul LMS kami menyediakan kurikulum pemrograman lengkap dari nol hingga mahir.</p>
  </details>

  <!-- 2. Modal Dialog Native (<dialog>) -->
  <button onclick="document.getElementById('nativeModal').showModal()" style="padding: 10px 18px; background: #0284c7; color: white; border: none; border-radius: 6px; font-weight: bold; cursor: pointer;">
    Buka Modal Native (&lt;dialog&gt;)
  </button>

  <dialog id="nativeModal">
    <h3 style="margin-top: 0;">Dialog Native Browser</h3>
    <p>Modal ini otomatis memiliki aksesibilitas keyboard (Tekan ESC untuk tutup) dan backdrop native!</p>
    <button onclick="document.getElementById('nativeModal').close()" style="padding: 6px 14px; background: #ef4444; color: white; border: none; border-radius: 4px; cursor: pointer;">
      Tutup
    </button>
  </dialog>

</body>
</html>`,
    codeExplanation: [
      '<details> dan <summary> membuat accordion interaktif secara murni di HTML tanpa memerlukan JavaScript.',
      'dialog.showModal() membuka modal tingkat sistem dengan backdrop rendering dan focus lock bawaan.'
    ],
    quiz: {
      question: 'Method JavaScript native manakah yang digunakan untuk membuka elemen <dialog> sebagai modal dialog dengan latar belakang backdrop?',
      options: [
        'dialog.open()',
        'dialog.showModal()',
        'dialog.display()',
        'dialog.popup()'
      ],
      answer: 1,
      explanation: '`dialogElement.showModal()` membuka elemen `<dialog>` sebagai modal interaktif di lapisan Top Layer browser.'
    },
    challenge: {
      title: 'Tantangan: Buka Modal Native',
      description: 'Panggil method `modal.showModal();`.',
      startingCode: `const modal = document.createElement("dialog");\n// Buka modal di bawah:\n`,
      solution: `const modal = document.createElement("dialog");\nmodal.showModal();`
    }
  },

  // ── 173. HTML FIRST CSS ─────────────────────────────────────────────────
  {
    id: 'html-first-css',
    title: 'HTML First CSS',
    chapter: 'JS HTML First',
    chapterId: 'js-chap-htmlfirst',
    order: 173,
    overview: 'Sinergi Modern HTML First + CSS Mutakhir: selector induk :has(), @starting-style untuk transisi pembukaan dialog/popover, Scroll-driven animations, dan View Transitions API.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">HTML FIRST</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 173 / 173 (FINAL KURIKULUM LENGKAP)</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">✨ Sinergi CSS Modern (:has & @starting-style)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Dengan hadirnya fitur CSS modern seperti parent selector <strong><code>:has()</code></strong> dan transisi entry <strong><code>@starting-style</code></strong>, banyak logika interaksi antarmuka yang dulunya memerlukan ratusan baris JavaScript kini dapat ditangani sepenuhnya oleh CSS murni berkecepatan native.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>HTML First Modern CSS Demo</title>
  <style>
    /* Mengubah styling kartu induk jika checkbox di dalamnya dicentang (:has selector) */
    .card-item {
      background: #f8fafc;
      padding: 16px;
      border-radius: 10px;
      border: 2px solid #cbd5e1;
      transition: all 0.3s ease;
    }

    /* CSS :has() bertindak sebagai Parent Selector murni tanpa JS! */
    .card-item:has(input[type="checkbox"]:checked) {
      background: #0284c7;
      color: white;
      border-color: #38bdf8;
      box-shadow: 0 10px 20px rgba(2, 132, 199, 0.3);
    }
  </style>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Parent Selector (:has) Murni CSS</h2>

  <div class="card-item">
    <label style="cursor: pointer; display: flex; align-items: center; gap: 10px; font-weight: bold;">
      <input type="checkbox">
      Centang untuk Mengubah Gaya Induk (:has)
    </label>
    <p style="margin: 8px 0 0 0; font-size: 13px;">Gaya kotak ini berubah otomatis saat checkbox dicentang tanpa 1 baris kode JavaScript pun!</p>
  </div>

</body>
</html>`,
    codeExplanation: [
      'Pseudo-class :has() memungkinkan elemen induk merespons kondisi elemen anaknya secara langsung di stylesheet CSS.',
      'Memadukan semantik HTML dan CSS modern menghasilkan aplikasi web berkinerja tinggi, ringan, dan mudah dirawat.'
    ],
    quiz: {
      question: 'Pseudo-class CSS modern apakah yang berfungsi sebagai "Parent Selector" untuk menargetkan elemen induk berdasarkan kondisi elemen anaknya?',
      options: [
        ':parent()',
        ':has()',
        ':contains()',
        ':within()'
      ],
      answer: 1,
      explanation: 'Pseudo-class `:has()` adalah selector relasional CSS modern yang memungkinkan penargetan elemen berdasarkan elemen turunannya.'
    },
    challenge: {
      title: 'Tantangan Terakhir: Selector Relasional :has()',
      description: 'Tulis selector `:has(input:checked)`.',
      startingCode: `let sel = ":has(input:checked)";`,
      solution: `let sel = ":has(input:checked)";`
    }
  }
];
