module.exports = [
  // ── 132. JS COUNTER ─────────────────────────────────────────────────────
  {
    id: 'js-counter',
    title: 'JS Counter',
    chapter: 'JS Projects',
    chapterId: 'js-chap-projects',
    order: 132,
    overview: 'Proyek Mini 1: Pembuatan Digital Counter interaktif (Tambah, Kurang, Reset) dengan pembaruan state DOM langsung dan transisi warna dinamis (Hijau, Merah, Netral).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS PROJECTS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 132 / 136</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🚀 Proyek 1: Digital Counter Interaktif</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Proyek ini melatih Anda menghubungkan logika state angka dengan pembaruan tampilan HTML DOM secara dinamis menggunakan Event Listener dan manipulasi CSS class/style.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Counter App</title>
  <style>
    body { font-family: system-ui, sans-serif; display: flex; justify-content: center; align-items: center; min-height: 250px; background: #0f172a; margin: 0; }
    .counter-card { background: #1e293b; padding: 25px 35px; border-radius: 16px; text-align: center; box-shadow: 0 10px 25px rgba(0,0,0,0.4); }
    .counter-val { font-size: 56px; font-weight: 900; margin: 10px 0; color: #f8fafc; transition: all 0.2s ease; }
    .btn-group button { padding: 8px 16px; margin: 4px; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; transition: transform 0.1s; }
    .btn-group button:active { transform: scale(0.95); }
    .btn-dec { background: #ef4444; color: white; }
    .btn-reset { background: #64748b; color: white; }
    .btn-inc { background: #22c55e; color: white; }
  </style>
</head>
<body>

  <div class="counter-card">
    <h3 style="color: #94a3b8; margin: 0;">Interactive Counter</h3>
    <div id="counterValue" class="counter-val">0</div>
    <div class="btn-group">
      <button class="btn-dec" onclick="kurang()">- Kurang</button>
      <button class="btn-reset" onclick="reset()">Reset</button>
      <button class="btn-inc" onclick="tambah()">+ Tambah</button>
    </div>
  </div>

  <script>
    let hitungan = 0;
    const angkaEl = document.getElementById('counterValue');

    function perbaruiDisplay() {
      angkaEl.innerText = hitungan;
      if (hitungan > 0) angkaEl.style.color = '#4ade80'; // Hijau
      else if (hitungan < 0) angkaEl.style.color = '#f87171'; // Merah
      else angkaEl.style.color = '#f8fafc'; // Putih
    }

    function tambah() { hitungan++; perbaruiDisplay(); }
    function kurang() { hitungan--; perbaruiDisplay(); }
    function reset() { hitungan = 0; perbaruiDisplay(); }
  </script>

</body>
</html>`,
    codeExplanation: [
      'Variabel hitungan menyimpan single source of truth untuk state angka saat ini.',
      'Fungsi perbaruiDisplay() menyinkronkan state ke antarmuka DOM dan menerapkan logika pewarnaan kondisional.'
    ],
    quiz: {
      question: 'Method JavaScript apakah yang digunakan untuk memperbarui teks angka di dalam elemen HTML?',
      options: [
        'el.innerText = nilai',
        'el.addText(nilai)',
        'el.update(nilai)',
        'document.write(nilai)'
      ],
      answer: 0,
      explanation: 'Properti `element.innerText` atau `element.textContent` digunakan untuk mengubah konten teks suatu elemen DOM.'
    },
    challenge: {
      title: 'Tantangan: Tambah Counter',
      description: 'Buat fungsi `function tambahSatu() { count++; }`.',
      startingCode: `let count = 0;\nfunction tambahSatu() {\n  // Tambah count di sini:\n}`,
      solution: `let count = 0;\nfunction tambahSatu() {\n  count++;\n}`
    }
  },

  // ── 133. JS EVENT LISTENER ──────────────────────────────────────────────
  {
    id: 'js-event-listener',
    title: 'JS Event Listener',
    chapter: 'JS Projects',
    chapterId: 'js-chap-projects',
    order: 133,
    overview: 'Proyek Mini 2: Keyboard & Mouse Event Inspector interaktif: mendeteksi event keydown (Key, Code, KeyCode), mousemove (koordinat X/Y), dan penerapan Event Delegation.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS PROJECTS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 133 / 136</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎮 Proyek 2: Event Listener & Key Inspector</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Event adalah detak jantung interaktivitas aplikasi web. Proyek ini membedah objek <code>event</code> untuk membaca input keyboard dan posisi kursor secara real-time.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Key & Mouse Inspector</title>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; background: #0f172a; color: white; }
    .box { background: #1e293b; padding: 20px; border-radius: 12px; margin-bottom: 15px; border: 1px solid #334155; }
    .badge { background: #38bdf8; color: #0f172a; padding: 4px 10px; border-radius: 6px; font-weight: bold; font-family: monospace; }
  </style>
</head>
<body>

  <div class="box" id="mouseBox">
    <h3>🖱️ Mouse Coordinates Tracker</h3>
    <p>Arahkan kursor di sini: <span id="mouseCoords" class="badge">X: 0, Y: 0</span></p>
  </div>

  <div class="box">
    <h3>⌨️ Keyboard Key Inspector</h3>
    <p>Ketik tombol apa saja di keyboard Anda!</p>
    <div id="keyOutput" style="font-family: monospace; color: #4ade80;">Menunggu ketukan keyboard...</div>
  </div>

  <script>
    // 1. Mousemove Event
    document.getElementById('mouseBox').addEventListener('mousemove', (e) => {
      document.getElementById('mouseCoords').innerText = 'X: ' + e.offsetX + ', Y: ' + e.offsetY;
    });

    // 2. Keydown Event
    window.addEventListener('keydown', (e) => {
      document.getElementById('keyOutput').innerHTML = 
        'Tombol: <strong>' + e.key + '</strong> | Code: <code>' + e.code + '</code>';
    });
  </script>

</body>
</html>`,
    codeExplanation: [
      'addEventListener("mousemove") membaca posisi offset kursor relatif terhadap kotak target.',
      'window.addEventListener("keydown") menangkap semua masukan tombol keyboard global.'
    ],
    quiz: {
      question: 'Method standar DOM manakah yang digunakan untuk memasang fungsi penangan event ke suatu elemen HTML?',
      options: [
        'element.attachEvent()',
        'element.addEventListener()',
        'element.setEvent()',
        'element.listen()'
      ],
      answer: 1,
      explanation: '`element.addEventListener("event", handler)` adalah method standar W3C untuk mendaftarkan fungsi penangan event.'
    },
    challenge: {
      title: 'Tantangan: Pasang Klik Listener',
      description: 'Pasang event klik pada tombol `btn.addEventListener("click", () => {});`.',
      startingCode: `const btn = document.createElement("button");\n// Pasang event listener di bawah:\n`,
      solution: `const btn = document.createElement("button");\nbtn.addEventListener("click", () => {});`
    }
  },

  // ── 134. JS TO-DO LIST ──────────────────────────────────────────────────
  {
    id: 'js-todo-list',
    title: 'JS To-Do List',
    chapter: 'JS Projects',
    chapterId: 'js-chap-projects',
    order: 134,
    overview: 'Proyek Mini 3: Aplikasi To-Do List CRUD lengkap dengan penyimpanan persisten di browser via LocalStorage, checklist status selesai, dan penghapusan item.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS PROJECTS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 134 / 136</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📋 Proyek 3: Aplikasi To-Do List & LocalStorage</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Aplikasi To-Do List adalah proyek fundamental terpenting yang memadukan operasi CRUD (*Create, Read, Update, Delete*), Array Manipulation, DOM Rendering, dan penyimpanan Web Storage API.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS To-Do List LocalStorage</title>
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: white; padding: 24px; }
    .todo-app { max-width: 400px; margin: auto; background: #1e293b; padding: 20px; border-radius: 12px; }
    .todo-input { width: 70%; padding: 8px; border: 1px solid #475569; border-radius: 6px; background: #0f172a; color: white; }
    .btn-add { padding: 8px 14px; background: #0284c7; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; }
    ul { list-style: none; padding: 0; margin-top: 15px; }
    li { display: flex; justify-content: space-between; align-items: center; background: #334155; padding: 8px 12px; border-radius: 6px; margin-bottom: 8px; }
    .completed { text-decoration: line-through; opacity: 0.6; }
    .btn-del { background: #ef4444; border: none; color: white; border-radius: 4px; padding: 2px 8px; cursor: pointer; }
  </style>
</head>
<body>

  <div class="todo-app">
    <h3>📝 Antigravity Task Manager</h3>
    <input type="text" id="taskInput" class="todo-input" placeholder="Tulis tugas baru...">
    <button class="btn-add" onclick="tambahTugas()">Tambah</button>
    <ul id="taskList"></ul>
  </div>

  <script>
    let todos = JSON.parse(localStorage.getItem('antigravity_tasks') || '[]');

    function simpanDanRender() {
      localStorage.setItem('antigravity_tasks', JSON.stringify(todos));
      const listEl = document.getElementById('taskList');
      listEl.innerHTML = '';

      todos.forEach((todo, i) => {
        const li = document.createElement('li');
        li.innerHTML = 
          '<span onclick="toggleStatus(' + i + ')" class="' + (todo.selesai ? 'completed' : '') + '" style="cursor:pointer;">' + todo.teks + '</span>' +
          '<button class="btn-del" onclick="hapusTugas(' + i + ')">×</button>';
        listEl.appendChild(li);
      });
    }

    function tambahTugas() {
      const input = document.getElementById('taskInput');
      if (!input.value.trim()) return;
      todos.push({ teks: input.value.trim(), selesai: false });
      input.value = '';
      simpanDanRender();
    }

    function toggleStatus(i) { todos[i].selesai = !todos[i].selesai; simpanDanRender(); }
    function hapusTugas(i) { todos.splice(i, 1); simpanDanRender(); }

    simpanDanRender(); // Render pertama kali
  </script>

</body>
</html>`,
    codeExplanation: [
      'localStorage.setItem("key", JSON.stringify(todos)) menyimpan state tugas ke hard drive browser pengguna sehingga tidak hilang saat halaman di-refresh.',
      'simpanDanRender() memusatkan sinkronisasi state data dengan tampilan DOM.'
    ],
    quiz: {
      question: 'Method apa yang digunakan untuk menyimpan objek/array JavaScript ke dalam LocalStorage?',
      options: [
        'localStorage.setObject(key, obj)',
        'localStorage.setItem(key, JSON.stringify(data))',
        'localStorage.save(data)',
        'localStorage.store(key, data)'
      ],
      answer: 1,
      explanation: 'LocalStorage hanya menerima format String, sehingga data Array/Objek harus diserialisasi terlebih dahulu menggunakan `JSON.stringify()`.'
    },
    challenge: {
      title: 'Tantangan: Simpan ke LocalStorage',
      description: 'Simpan string `"aktif"` ke key `"mode"`: `localStorage.setItem("mode", "aktif");`.',
      startingCode: `// Simpan ke LocalStorage di bawah:\n`,
      solution: `localStorage.setItem("mode", "aktif");`
    }
  },

  // ── 135. JS MODAL POPUP ─────────────────────────────────────────────────
  {
    id: 'js-modal-popup',
    title: 'JS Modal Popup',
    chapter: 'JS Projects',
    chapterId: 'js-chap-projects',
    order: 135,
    overview: 'Proyek Mini 4: Pembuatan Modal Dialog interaktif dengan backdrop blur transparan, animasi CSS fade-in, penutupan saat klik backdrop, dan event keyboard Escape.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS PROJECTS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 135 / 136</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🪟 Proyek 4: Modal Dialog Interaktif Modern</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Modal Popup adalah komponen UI penting untuk menampilkan dialog konfirmasi, peringatan, atau formulir tanpa meninggalkan halaman aktif.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Modal Popup Demo</title>
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: white; padding: 30px; text-align: center; }
    .btn-open { padding: 12px 24px; background: #0284c7; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; font-size: 15px; }
    .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.6); backdrop-filter: blur(4px); display: none; justify-content: center; align-items: center; z-index: 50; }
    .modal-box { background: #1e293b; padding: 25px; border-radius: 16px; max-width: 360px; text-align: left; box-shadow: 0 20px 40px rgba(0,0,0,0.5); border: 1px solid #334155; }
    .btn-close { padding: 8px 16px; background: #ef4444; color: white; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; float: right; }
  </style>
</head>
<body>

  <h2>Komponen Modal Dialog JavaScript</h2>
  <button class="btn-open" onclick="bukaModal()">Buka Dialog Modal</button>

  <div id="modalOverlay" class="modal-overlay" onclick="klikLuar(event)">
    <div class="modal-box">
      <h3 style="margin-top:0; color:#38bdf8;">Konfirmasi Pendaftaran LMS</h3>
      <p style="color:#94a3b8; font-size:14px;">Selamat datang di modul JavaScript! Tekan tombol di bawah atau tekan tombol <strong>ESC</strong> pada keyboard untuk menutup modal ini.</p>
      <button class="btn-close" onclick="tutupModal()">Tutup</button>
    </div>
  </div>

  <script>
    const modal = document.getElementById('modalOverlay');

    function bukaModal() { modal.style.display = 'flex'; }
    function tutupModal() { modal.style.display = 'none'; }
    function klikLuar(e) { if (e.target === modal) tutupModal(); }

    // Keyboard ESC Handler
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') tutupModal();
    });
  </script>

</body>
</html>`,
    codeExplanation: [
      'modal.style.display = "flex" dan "none" mengatur visibilitas modal overlay.',
      'e.target === modal mendeteksi apakah klik dilakukan pada area latar belakang gelap (backdrop) untuk menutup popup.',
      'Event listener Escape menambahkan kenyamanan aksesibilitas keyboard.'
    ],
    quiz: {
      question: 'Nama event key apakah yang digunakan untuk mendeteksi penekanan tombol Escape pada keyboard?',
      options: [
        'e.key === "Escape"',
        'e.key === "ESC"',
        'e.key === "Cancel"',
        'e.key === "Exit"'
      ],
      answer: 0,
      explanation: 'Nilai `e.key` standar untuk tombol Escape di browser modern adalah `"Escape"`.'
    },
    challenge: {
      title: 'Tantangan: Sembunyikan Elemen dengan Display None',
      description: 'Sembunyikan modal dengan `modal.style.display = "none";`.',
      startingCode: `const modal = document.createElement("div");\n// Sembunyikan modal di bawah:\n`,
      solution: `const modal = document.createElement("div");\nmodal.style.display = "none";`
    }
  },

  // ── 136. JS FORM VALIDATION ─────────────────────────────────────────────
  {
    id: 'js-form-validation',
    title: 'JS Form Validation',
    chapter: 'JS Projects',
    chapterId: 'js-chap-projects',
    order: 136,
    overview: 'Proyek Mini 5: Sistem Validasi Form Registrasi Real-Time komprehensif: validasi regex email, indikator kekuatan password, konfirmasi kecocokan password, dan pencegahan event.preventDefault().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS PROJECTS</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 136 / 136</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛡️ Proyek 5: Sistem Validasi Form Registrasi Lengkap</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Proyek puncak kurikulum JavaScript ini memadukan seluruh keahlian yang telah Anda pelajari: DOM Selection, Event Handling, Regular Expressions, Validasi Kondisional, dan manipulasi feedback antarmuka visual.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Form Validation Demo</title>
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: white; padding: 24px; }
    .form-card { max-width: 420px; margin: auto; background: #1e293b; padding: 25px; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
    .form-group { margin-bottom: 15px; }
    label { display: block; font-size: 13px; color: #94a3b8; margin-bottom: 6px; font-weight: bold; }
    input { width: 100%; box-sizing: border-box; padding: 10px; border-radius: 6px; border: 1px solid #475569; background: #0f172a; color: white; }
    .error-msg { color: #f87171; font-size: 12px; margin-top: 4px; display: none; }
    .btn-submit { width: 100%; padding: 12px; background: #22c55e; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; font-size: 15px; }
  </style>
</head>
<body>

  <div class="form-card">
    <h3 style="margin-top:0; color:#38bdf8; text-align:center;">Daftar Akun LMS</h3>
    <form id="regForm" onsubmit="validasiDanSubmit(event)">
      <div class="form-group">
        <label>Nama Lengkap</label>
        <input type="text" id="namaInput" placeholder="Min. 3 karakter">
        <div id="namaError" class="error-msg">Nama harus minimal 3 karakter!</div>
      </div>

      <div class="form-group">
        <label>Alamat Email</label>
        <input type="email" id="emailInput" placeholder="nama@email.com">
        <div id="emailError" class="error-msg">Format email tidak valid!</div>
      </div>

      <div class="form-group">
        <label>Password</label>
        <input type="password" id="passInput" placeholder="Min. 6 karakter">
        <div id="passError" class="error-msg">Password minimal 6 karakter!</div>
      </div>

      <button type="submit" class="btn-submit">Daftar Sekarang 🚀</button>
    </form>
    <div id="suksesBox" style="display:none; color:#4ade80; text-align:center; margin-top:15px; font-weight:bold;">
      🎉 Pendaftaran Berhasil! Akun Anda siap digunakan.
    </div>
  </div>

  <script>
    function validasiDanSubmit(e) {
      e.preventDefault(); // Mencegah reload halaman
      let isValid = true;

      const nama = document.getElementById('namaInput').value.trim();
      const email = document.getElementById('emailInput').value.trim();
      const pass = document.getElementById('passInput').value;

      // Validasi Nama
      if (nama.length < 3) {
        document.getElementById('namaError').style.display = 'block';
        isValid = false;
      } else {
        document.getElementById('namaError').style.display = 'none';
      }

      // Validasi Email Regex
      const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      if (!emailRegex.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
      } else {
        document.getElementById('emailError').style.display = 'none';
      }

      // Validasi Password
      if (pass.length < 6) {
        document.getElementById('passError').style.display = 'block';
        isValid = false;
      } else {
        document.getElementById('passError').style.display = 'none';
      }

      if (isValid) {
        document.getElementById('regForm').style.display = 'none';
        document.getElementById('suksesBox').style.display = 'block';
      }
    }
  </script>

</body>
</html>`,
    codeExplanation: [
      'e.preventDefault() menghentikan pengiriman form default browser yang merefresh halaman, memungkinkan validasi JavaScript client-side murni.',
      'Regex email memastikan alamat email memiliki struktur domain dan TLD yang sah.',
      'Jika seluruh validasi lolos, form ditutup dan pesan sukses ditampilkan secara interaktif.'
    ],
    quiz: {
      question: 'Method apa pada objek Event yang wajib dipanggil di awal fungsi submit form untuk mencegah reload halaman otomatis browser?',
      options: [
        'event.stopPropagation()',
        'event.preventDefault()',
        'event.cancel()',
        'event.halt()'
      ],
      answer: 1,
      explanation: '`event.preventDefault()` membatalkan aksi default browser (seperti reload halaman saat submit form).'
    },
    challenge: {
      title: 'Tantangan: Batalkan Submit Default',
      description: 'Gunakan `e.preventDefault();` di dalam handler form `function onSubmit(e) { e.preventDefault(); }`.',
      startingCode: `function onSubmit(e) {\n  // Cegah submit default di bawah:\n}`,
      solution: `function onSubmit(e) {\n  e.preventDefault();\n}`
    }
  }
];
