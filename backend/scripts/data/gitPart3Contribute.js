// =========================================================================
// DATA MATERI GIT: BAB 3 - GIT CONTRIBUTE (3 LESSONS)
// Standar Kontribusi Open-Source, GitHub Docs & Enterprise Workflow
// =========================================================================

module.exports = [
  // ── 1. GITHUB FORK ───────────────────────────────────────────────────────
  {
    id: 'github-fork',
    title: 'GitHub Fork',
    chapter: 'Git Contribute',
    chapterId: 'git-chap-contribute',
    order: 1,
    overview: 'Mengenal mekanisme Fork di GitHub untuk berkontribusi pada proyek open source dunia tanpa memiliki izin akses tulis (write access) langsung ke repositori utama.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-transparent p-6 rounded-2xl border border-emerald-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-emerald-600 text-white">OPEN SOURCE</span>
            <span class="text-xs text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">Materi 01 / 03</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🍴 Apa Itu Forking di GitHub?</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Di platform GitHub, Anda tidak bisa langsung melakukan <code>git push</code> ke proyek milik orang lain atau organisasi besar (seperti repositori React, Linux, atau Vue). Solusinya adalah melakukan <strong>Fork</strong>.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-2">
            <h4 class="font-bold text-amber-400 text-sm">🍴 1. Konsep Fork (Server-to-Server)</h4>
            <p class="text-xs text-slate-300 leading-relaxed">
              Membuat salinan utuh (duplikat independen) dari repositori orang lain langsung di server cloud akun GitHub Anda sendiri. Anda memiliki hak akses penuh (100% Admin) atas repositori hasil Fork tersebut.
            </p>
          </div>
          <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-2">
            <h4 class="font-bold text-sky-400 text-sm">📥 2. Perbedaan Fork vs Clone</h4>
            <p class="text-xs text-slate-300 leading-relaxed">
              <strong>Fork</strong> menyalin repositori di level cloud (GitHub &rarr; GitHub Anda).<br/>
              <strong>Clone</strong> mengunduh repositori dari cloud ke hard disk komputer lokal Anda (GitHub &rarr; Laptop).
            </p>
          </div>
        </div>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-3">
          <h3 class="text-base font-bold text-emerald-400">🚀 Cara Melakukan Fork di GitHub</h3>
          <ol class="space-y-2 text-xs md:text-sm text-slate-300 list-decimal list-inside leading-relaxed">
            <li>Kunjungi halaman repositori open-source yang ingin Anda kontribusikan (misal: <code>https://github.com/facebook/react</code>).</li>
            <li>Klik tombol <strong>Fork</strong> di pojok kanan atas halaman.</li>
            <li>Pilih akun personal Anda sebagai destinasi pemilik.</li>
            <li>GitHub akan membuat salinan baru di alamat: <code>https://github.com/username-anda/react</code>.</li>
          </ol>
        </div>
      </div>
    `,
    code: `# Setelah melakukan Fork di antarmuka web GitHub:
# Repositori Anda sekarang beralamat di akun Anda sendiri:
# https://github.com/username-anda/project-target.git`,
    codeExplanation: [
      'Operasi Fork dilakukan di antarmuka web GitHub dengan menekan tombol "Fork".',
      'Repositori hasil fork tetap mengingat tautan ke repositori sumber aslinya (upstream repository).'
    ],
    challenge: {
      instruction: 'Periksa status repositori lokal Anda untuk memastikan cabang siap dihubungkan ke repositori fork.',
      starterCode: 'git status',
      hint: 'Jalankan "git status" di terminal.'
    },
    quiz: {
      question: 'Apa tujuan utama dari melakukan "Fork" pada sebuah repositori open-source di GitHub?',
      options: [
        'Membuat salinan repositori independen di bawah akun GitHub pribadi agar kita bebas memodifikasi kode sebelum mengirim Pull Request',
        'Menghapus repositori asli milik developer lain',
        'Mengubah nama pemilik asli proyek',
        'Mengunci repositori agar tidak bisa dibaca publik'
      ],
      correctIndex: 0,
      explanation: 'Fork menduplikasi repositori publik ke akun Anda sendiri sehingga Anda memiliki izin tulis penuh untuk mengembangkan fitur atau perbaikan bug.'
    }
  },

  // ── 2. GIT CLONE FROM GITHUB ─────────────────────────────────────────────
  {
    id: 'git-clone-from-github',
    title: 'Git Clone from GitHub',
    chapter: 'Git Contribute',
    chapterId: 'git-chap-contribute',
    order: 2,
    overview: 'Mengkloning repositori hasil fork ke komputer lokal, memahami arsitektur 2 Remote (origin vs upstream), dan cara menjaga repositori lokal tetap sinkron dengan perubahan terbaru.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-transparent p-6 rounded-2xl border border-emerald-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-emerald-600 text-white">DUAL REMOTE SETUP</span>
            <span class="text-xs text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">Materi 02 / 03</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📥 Setup Kloning & Upstream Remote</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Saat berkontribusi pada proyek open-source, Anda harus mengkloning <strong>repositori Fork Anda (origin)</strong>, kemudian mendaftarkan <strong>repositori asli pemilik proyek (upstream)</strong> agar Anda selalu bisa mengambil pembaruan terbaru dari tim inti.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 space-y-1">
            <div class="text-sky-400 font-bold text-sm">1. origin (Fork Anda)</div>
            <p class="text-xs text-slate-400 leading-relaxed">Merujuk ke repositori di akun GitHub Anda sendiri tempat Anda melakukan push branch fitur.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 space-y-1">
            <div class="text-amber-400 font-bold text-sm">2. upstream (Repo Asli)</div>
            <p class="text-xs text-slate-400 leading-relaxed">Merujuk ke repositori asli komunitas/organisasi tempat Anda mengambil update terkini.</p>
          </div>
        </div>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-3">
          <h3 class="text-base font-bold text-emerald-400">🔄 Cara Sinkronisasi Fork Lokal dengan Upstream</h3>
          <div class="text-xs bg-slate-950 p-3 rounded font-mono text-slate-300 space-y-1.5">
            <div class="text-sky-400"># 1. Unduh commit terbaru dari repo asli upstream</div>
            <div>git fetch upstream</div>
            <div class="text-emerald-400 mt-2"># 2. Pindah ke branch main lokal dan gabungkan update</div>
            <div>git switch main</div>
            <div>git merge upstream/main</div>
          </div>
        </div>
      </div>
    `,
    code: `# Langkah 1: Kloning repositori hasil Fork Anda
git clone git@github.com:username-anda/open-source-project.git
cd open-source-project

# Langkah 2: Tambahkan remote upstream yang mengarah ke repositori asli
git remote add upstream git@github.com:original-creator/open-source-project.git

# Langkah 3: Verifikasi kedua koneksi remote
git remote -v

# Output:
# origin    git@github.com:username-anda/open-source-project.git (fetch)
# origin    git@github.com:username-anda/open-source-project.git (push)
# upstream  git@github.com:original-creator/open-source-project.git (fetch)
# upstream  git@github.com:original-creator/open-source-project.git (push)`,
    codeExplanation: [
      '"git clone" mengunduh repositori fork milik Anda dan otomatis menamainya "origin".',
      '"git remote add upstream <URL_ASLI>" menambahkan koneksi kedua ke repositori sumber asli komunitas.',
      '"git remote -v" memastikan Anda memiliki 2 remote aktif: origin dan upstream.'
    ],
    challenge: {
      instruction: 'Tambahkan remote bernama "upstream" dengan URL git@github.com:facebook/react.git',
      starterCode: 'git remote add upstream git@github.com:facebook/react.git',
      hint: 'Gunakan sintaks: git remote add upstream <URL>'
    },
    quiz: {
      question: 'Apa nama konvensional standar yang digunakan oleh developer untuk menamai remote repositori sumber asli dalam alur kontribusi open source?',
      options: [
        'upstream',
        'master',
        'original_server',
        'parent_node'
      ],
      correctIndex: 0,
      explanation: '"upstream" adalah nama alias standar global untuk repositori sumber asli tempat proyek di-fork.'
    }
  },

  // ── 3. GITHUB SEND PULL REQUEST ──────────────────────────────────────────
  {
    id: 'github-send-pull-request',
    title: 'GitHub Send Pull Request',
    chapter: 'Git Contribute',
    chapterId: 'git-chap-contribute',
    order: 3,
    overview: 'Langkah lengkap mengirim Pull Request (PR) ke repositori open-source, etika penulisan deskripsi PR, merespons review maintainer, dan menyelesaikan kontribusi.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-transparent p-6 rounded-2xl border border-emerald-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-emerald-600 text-white">KIRIM KONTRIBUSI</span>
            <span class="text-xs text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">Materi 03 / 03</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🚀 Mengirim Pull Request (PR) ke Proyek Open Source</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Saat perbaikan bug atau fitur baru yang Anda buat sudah selesai diuji di repositori lokal dan di-push ke fork Anda, saatnya mengirimkan <strong>Pull Request</strong> ke maintainer repositori asli untuk dimasukkan ke proyek utama!
          </p>
        </div>

        <div class="space-y-3">
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 flex items-start gap-3">
            <div class="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs shrink-0">1</div>
            <div>
              <h4 class="font-bold text-sm text-emerald-300">Buat Branch Fitur di Fork Anda</h4>
              <p class="text-xs text-slate-300">Jangan koding di branch main. Buat branch baru: <code>git switch -c fix-typo-docs</code>.</p>
            </div>
          </div>

          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 flex items-start gap-3">
            <div class="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs shrink-0">2</div>
            <div>
              <h4 class="font-bold text-sm text-sky-300">Commit & Push ke Origin (Fork Anda)</h4>
              <p class="text-xs text-slate-300">Lakukan commit rapi dan unggah ke remote fork Anda: <code>git push -u origin fix-typo-docs</code>.</p>
            </div>
          </div>

          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 flex items-start gap-3">
            <div class="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs shrink-0">3</div>
            <div>
              <h4 class="font-bold text-sm text-amber-300">Buka GitHub & Klik "Compare & Pull Request"</h4>
              <p class="text-xs text-slate-300">GitHub akan menampilkan banner hijau otomatis. Klik tombol tersebut untuk membuka form PR.</p>
            </div>
          </div>

          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 flex items-start gap-3">
            <div class="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs shrink-0">4</div>
            <div>
              <h4 class="font-bold text-sm text-purple-300">Tulis Deskripsi PR yang Sopan & Jelas</h4>
              <p class="text-xs text-slate-300">Jelaskan masalah apa yang diselesaikan, bagaimana cara mengujinya, dan tautkan ke nomor issue (contoh: <code>Closes #42</code>).</p>
            </div>
          </div>
        </div>
      </div>
    `,
    code: `# Alur lengkap pengiriman kontribusi PR di terminal:
# 1. Buat branch fitur
git switch -c fix-button-alignment

# 2. Lakukan perbaikan dan commit
git commit -am "fix(ui): perbaiki alignment tombol submit pada form kontak"

# 3. Push ke remote fork Anda (origin)
git push -u origin fix-button-alignment

# 4. Kunjungi repositori asli di GitHub untuk mengklik "Create Pull Request"`,
    codeExplanation: [
      'Branch fitur yang di-push ke origin Anda menjadi sumber referensi yang akan ditarik oleh maintainer proyek asli ke branch main mereka.',
      'Jika maintainer meminta revisi kode, Anda cukup menambahkan commit baru di branch yang sama dan melakukan "git push", maka PR di GitHub otomatis terupdate!'
    ],
    challenge: {
      instruction: 'Unggah branch perbaikan "fix-docs" ke remote fork Anda (origin) dengan flag upstream.',
      starterCode: 'git push -u origin fix-docs',
      hint: 'Jalankan "git push -u origin fix-docs".'
    },
    quiz: {
      question: 'Jika maintainer proyek open source meminta Anda merevisi kode pada Pull Request yang sedang terbuka, apa yang harus Anda lakukan?',
      options: [
        'Cukup lakukan perbaikan di branch lokal yang sama, commit, dan push kembali ke origin; PR di GitHub akan otomatis terupdate',
        'Menghapus akun GitHub dan membuat akun baru',
        'Menutup PR dan menghapus seluruh repositori',
        'Mengirim file revisi via email'
      ],
      correctIndex: 0,
      explanation: 'Setiap commit baru yang Anda push ke branch yang sama di fork Anda akan otomatis muncul dan memperbarui Pull Request yang sedang aktif di GitHub.'
    }
  }
];
