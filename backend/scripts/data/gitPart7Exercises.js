// =========================================================================
// DATA MATERI GIT: BAB 7 - GIT EXERCISES (4 LESSONS)
// Standar Latihan Hands-on, Quiz Komprehensif, Silabus & Study Plan DevGrow
// =========================================================================

module.exports = [
  // ── 1. GIT EXERCISES ─────────────────────────────────────────────────────
  {
    id: 'git-exercises',
    title: 'Git Exercises',
    chapter: 'Git Exercises',
    chapterId: 'git-chap-exercises',
    order: 1,
    overview: 'Latihan praktikum interaktif menyelesaikan tantangan kasus Git dunia nyata dari inisialisasi repositori, branching, penggabungan merge, hingga penanganan konflik.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-blue-600 text-white">PRAKTIK HANDS-ON</span>
            <span class="text-xs text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">Materi 01 / 04</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏋️ Latihan Praktik Simulasi Git Mandiri</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Uji kemampuan otot terminal Anda dengan menyelesaikan simulasi 5 skenario praktikum berikut secara berurutan.
          </p>
        </div>

        <div class="space-y-3">
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100">
            <h4 class="font-bold text-amber-400 text-sm mb-1">🎯 Latihan 1: Inisialisasi & Commit Pertama</h4>
            <p class="text-xs text-slate-300">Buat repositori baru, tambahkan file <code>index.html</code> dan <code>style.css</code>, lalu buat commit dengan pesan Conventional Commits.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100">
            <h4 class="font-bold text-emerald-400 text-sm mb-1">🎯 Latihan 2: Percabangan Fitur Isolasi</h4>
            <p class="text-xs text-slate-300">Buat branch <code>feature-dark-mode</code>, lakukan modifikasi CSS, commit, lalu merge kembali ke <code>main</code> dengan <code>fast-forward</code>.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100">
            <h4 class="font-bold text-sky-400 text-sm mb-1">🎯 Latihan 3: Remote Push & Pull</h4>
            <p class="text-xs text-slate-300">Hubungkan remote <code>origin</code> via SSH, lakukan push dengan flag upstream <code>-u</code>, lalu simulasikan <code>git pull</code>.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100">
            <h4 class="font-bold text-rose-400 text-sm mb-1">🎯 Latihan 4: Penyelamatan Darurat Undo</h4>
            <p class="text-xs text-slate-300">Lakukan simulasi salah commit, perbaiki dengan <code>git commit --amend</code>, lalu batalkan commit publik dengan <code>git revert</code>.</p>
          </div>
        </div>
      </div>
    `,
    code: `# Skrip simulasi latihan praktikum lengkap:
# 1. Inisialisasi
git init
echo "# Proyek Latihan" > README.md
git add README.md
git commit -m "feat: inisialisasi repositori latihan"

# 2. Buat branch dan koding fitur
git switch -c feature-header
echo "<header>Navigasi</header>" > header.html
git add header.html
git commit -m "feat(ui): tambah komponen header navigasi"

# 3. Merge kembali ke main
git switch main
git merge feature-header
git branch -d feature-header`,
    codeExplanation: [
      'Alur praktikum di atas mensimulasikan alur kerja harian developer profesional secara lengkap dan terstruktur.'
    ],
    challenge: {
      instruction: 'Inisialisasi repositori Git dan tambahkan file README.md ke Staging Area.',
      starterCode: 'git init && git add README.md',
      hint: 'Jalankan "git init && git add README.md".'
    },
    quiz: {
      question: 'Setelah selesai menggabungkan (merge) cabang fitur ke cabang utama dan fitur sudah teruji, langkah apa yang sebaiknya dilakukan untuk menjaga repositori tetap bersih?',
      options: [
        'Menghapus branch fitur lokal yang sudah selesai di-merge dengan "git branch -d <nama_branch>"',
        'Menghapus folder .git',
        'Menginstal ulang Git',
        'Mematikan koneksi internet'
      ],
      correctIndex: 0,
      explanation: 'Menghapus cabang fitur lokal yang sudah selesai digabungkan (safe delete via -d) adalah best practice untuk menjaga daftar branch tetap rapi.'
    }
  },

  // ── 2. GIT QUIZ ──────────────────────────────────────────────────────────
  {
    id: 'git-quiz',
    title: 'Git Quiz',
    chapter: 'Git Exercises',
    chapterId: 'git-chap-exercises',
    order: 2,
    overview: 'Uji wawasan dan pemahaman konseptual Anda terhadap seluruh perintah, sintaks, dan terminologi Git melalui serangkaian kuis interaktif.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-blue-600 text-white">EVALUASI PEMAHAMAN</span>
            <span class="text-xs text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">Materi 02 / 04</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧠 Bank Soal & Kuis Pemahaman Git</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Uji ketelitian dan pemahaman logika kontrol versi Anda melalui studi kasus umum yang sering muncul dalam wawancara kerja (Technical Interview) Software Engineer.
          </p>
        </div>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-3">
          <h3 class="text-base font-bold text-amber-400">💡 Topik Utama yang Diuji pada Kuis:</h3>
          <ul class="space-y-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <li>✓ Perbedaan Staging Area, Working Directory, dan Repository Commit.</li>
            <li>✓ Perbedaan Git Revert vs Git Reset (Soft vs Mixed vs Hard).</li>
            <li>✓ Perbedaan Git Fetch vs Git Pull dan Git Merge vs Git Rebase.</li>
            <li>✓ Penggunaan SSH Key, Forking, Upstream, dan GitHub Actions CI/CD.</li>
          </ul>
        </div>
      </div>
    `,
    code: `# Menampilkan riwayat ringkas repositori untuk memeriksa urutan commit
git log --oneline --graph --all`,
    codeExplanation: [
      '"git log --oneline --graph --all" memberikan gambaran visual instan tentang seluruh cabang dan commit yang ada di repositori.'
    ],
    challenge: {
      instruction: 'Periksa status repositori secara ringkas menggunakan git status -s.',
      starterCode: 'git status -s',
      hint: 'Jalankan "git status -s".'
    },
    quiz: {
      question: 'Manakah dari pernyataan berikut yang BENAR mengenai perbedaan Git Fetch dan Git Pull?',
      options: [
        'Git Fetch hanya mengunduh data baru dari remote tanpa memodifikasi file kerja lokal, sedangkan Git Pull langsung mengunduh dan menggabungkannya ke branch aktif',
        'Git Fetch digunakan untuk mengunggah file, sedangkan Git Pull untuk menghapus file',
        'Git Fetch menghapus branch lokal, sedangkan Git Pull membuat branch baru',
        'Keduanya adalah perintah yang sama persis'
      ],
      correctIndex: 0,
      explanation: 'Git Fetch mengunduh metadata dan commit terbaru ke repositori lokal dengan aman tanpa menyentuh file kerja Anda, sedangkan Git Pull langsung melakukan fetch diikuti merge.'
    }
  },

  // ── 3. GIT SYLLABUS ──────────────────────────────────────────────────────
  {
    id: 'git-syllabus',
    title: 'Git Syllabus',
    chapter: 'Git Exercises',
    chapterId: 'git-chap-exercises',
    order: 3,
    overview: 'Peta kurikulum lengkap (Syllabus Roadmap) pembelajaran Git & GitHub Version Control dari tingkat Pemula (Beginner), Menengah (Intermediate), hingga Mahir (Advanced/DevOps).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-blue-600 text-white">KURIKULUM ROADMAP</span>
            <span class="text-xs text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">Materi 03 / 04</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🗺️ Peta Silabus Kurikulum Git & GitHub</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Struktur kurikulum berstandar enterprise yang dirancang untuk membimbing siswa langkah demi langkah menuju kemahiran kontrol versi profesional.
          </p>
        </div>

        <div class="space-y-4">
          <div class="p-4 rounded-xl bg-slate-900 border border-emerald-500/40 text-slate-100">
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-bold text-emerald-400 text-sm">🟢 LEVEL 1: GIT FUNDAMENTALS (Dasar)</h4>
              <span class="text-xs bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800">Minggu 1</span>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed">
              Konsep Version Control &bull; Instalasi & Konfigurasi Global &bull; Inisialisasi Repo (<code>git init</code>) &bull; Siklus Hidup File &bull; Staging Area &bull; Conventional Commits &bull; Git Tagging &bull; Git Stash &bull; Git History (<code>git log</code>) &bull; Branching Dasar (<code>git switch</code>).
            </p>
          </div>

          <div class="p-4 rounded-xl bg-slate-900 border border-sky-500/40 text-slate-100">
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-bold text-sky-400 text-sm">🔵 LEVEL 2: GITHUB & TEAM COLLABORATION (Menengah)</h4>
              <span class="text-xs bg-sky-950 text-sky-300 px-2 py-0.5 rounded border border-sky-800">Minggu 2</span>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed">
              Autentikasi SSH Ed25519 &bull; Remote Management (<code>origin</code>) &bull; Push & Pull &bull; GitHub Flow &bull; Branch Protection Rules &bull; Forking Open Source &bull; Upstream Remote Sync &bull; Pull Requests (PR) & Code Review &bull; GitHub Pages.
            </p>
          </div>

          <div class="p-4 rounded-xl bg-slate-900 border border-purple-500/40 text-slate-100">
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-bold text-purple-400 text-sm">🟣 LEVEL 3: UNDO, ADVANCED & DEVOPS (Mahir)</h4>
              <span class="text-xs bg-purple-950 text-purple-300 px-2 py-0.5 rounded border border-purple-800">Minggu 3-4</span>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed">
              Git Revert vs Reset (<code>--soft</code>, <code>--mixed</code>, <code>--hard</code>) &bull; Commit Amend &bull; Linear Rebase & Interactive Rebase (<code>squash</code>) &bull; Reflog Disaster Recovery &bull; .gitignore Lanjutan &bull; .gitattributes &bull; Git LFS &bull; GPG/SSH Signing &bull; Cherry-Pick &bull; Resolusi Merge Conflicts &bull; GitHub Actions CI/CD &bull; Git Hooks & Husky &bull; Submodules & Pruning.
            </p>
          </div>
        </div>
      </div>
    `,
    code: `# Memeriksa informasi versi Git dan status repositori
git --version
git status`,
    codeExplanation: [
      'Silabus di atas mencakup seluruh materi kurikulum Git profesional secara terpadu.'
    ],
    challenge: {
      instruction: 'Periksa versi Git yang sedang aktif pada komputer Anda.',
      starterCode: 'git --version',
      hint: 'Jalankan "git --version".'
    },
    quiz: {
      question: 'Pada roadmap silabus pembelajaran Git profesional, level materi apa yang mencakup topik Git Hooks, Interactive Rebase, dan GitHub Actions CI/CD?',
      options: [
        'Level 3: Undo, Advanced & DevOps (Mahir)',
        'Level 1: Git Fundamentals',
        'Level Dasar HTML',
        'Level Desain Grafis'
      ],
      correctIndex: 0,
      explanation: 'Topik otomasi skrip (Git Hooks), pembersihan riwayat (Interactive Rebase), dan CI/CD pipelines tergolong dalam ranah materi tingkat mahir (Advanced/DevOps).'
    }
  },

  // ── 4. GIT STUDY PLAN ────────────────────────────────────────────────────
  {
    id: 'git-study-plan',
    title: 'Git Study Plan',
    chapter: 'Git Exercises',
    chapterId: 'git-chap-exercises',
    order: 4,
    overview: 'Rencana belajar terarah 4 Minggu (30 Hari) untuk menguasai kontrol versi Git & GitHub secara konsisten, aplikatif, dan terstruktur dari nol hingga mahir.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-blue-600 text-white">RENCANA BELAJAR 30 HARI</span>
            <span class="text-xs text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">Materi 04 / 04</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📅 Rencana Belajar Git Terarah (Study Plan)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Alokasikan waktu 30-45 menit per hari mengikuti panduan belajar bertahap 4 minggu berikut untuk menguasai Git secara mendalam dan percaya diri saat bekerja di tim engineering.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 space-y-2">
            <div class="flex items-center justify-between">
              <strong class="text-emerald-400 font-bold text-sm">📅 Minggu 1: Fondasi Lokal</strong>
              <span class="text-slate-500">Hari 1 - 7</span>
            </div>
            <p class="text-slate-300 leading-relaxed">
              Pelajari konsep 3 pohon Git, instalasi, konfigurasi, inisialisasi repo, latihan staging (<code>git add</code>), atomic commit, tagging, stash, dan percabangan branch lokal (<code>git switch</code>).
            </p>
          </div>

          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 space-y-2">
            <div class="flex items-center justify-between">
              <strong class="text-sky-400 font-bold text-sm">📅 Minggu 2: Cloud & GitHub</strong>
              <span class="text-slate-500">Hari 8 - 15</span>
            </div>
            <p class="text-slate-300 leading-relaxed">
              Setup SSH Key Ed25519, menghubungkan remote <code>origin</code>, push & pull, GitHub Flow, branch protection, forking open source, sync upstream, dan membuat Pull Request pertama.
            </p>
          </div>

          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 space-y-2">
            <div class="flex items-center justify-between">
              <strong class="text-rose-400 font-bold text-sm">📅 Minggu 3: Undo & Recovery</strong>
              <span class="text-slate-500">Hari 16 - 22</span>
            </div>
            <p class="text-slate-300 leading-relaxed">
              Membatalkan commit publik dengan <code>git revert</code>, mode soft/mixed/hard reset, amend, interactive rebase squash, serta simulasi pemulihan branch hilang dengan <code>git reflog</code>.
            </p>
          </div>

          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 space-y-2">
            <div class="flex items-center justify-between">
              <strong class="text-purple-400 font-bold text-sm">📅 Minggu 4: Advanced, CI/CD & Cert</strong>
              <span class="text-slate-500">Hari 23 - 30</span>
            </div>
            <p class="text-slate-300 leading-relaxed">
              Git LFS, Verified Commit Signing, Cherry-pick, resolusi merge conflict otomatis, pipeline GitHub Actions CI/CD, Git Hooks/Husky, dan Ujian Sertifikasi Git Professional.
            </p>
          </div>
        </div>
      </div>
    `,
    code: `# Mengecek status kesiapan repositori harian Anda
git status
git log --oneline -5`,
    codeExplanation: [
      'Konsistensi praktek harian adalah kunci utama membangun memori otot (muscle memory) perintah terminal Git.'
    ],
    challenge: {
      instruction: 'Tampilkan status repositori Anda untuk memulai sesi belajar hari ini.',
      starterCode: 'git status',
      hint: 'Jalankan "git status".'
    },
    quiz: {
      question: 'Berapa durasi waktu rekomendasi harian yang efektif untuk mempelajari modul Git agar terbangun muscle memory perintah terminal yang kuat?',
      options: [
        '30 - 45 menit per hari secara konsisten dan langsung dipraktekkan di terminal',
        '10 jam berturut-turut hanya sekali setahun',
        'Hanya membaca tanpa pernah mengetik perintah sama sekali',
        'Menghafal tanpa memahami alur kerja'
      ],
      correctIndex: 0,
      explanation: 'Praktik konsisten 30-45 menit per hari dengan mengetik langsung perintah terminal jauh lebih efektif membangun pemahaman intuitif kontrol versi dibanding belajar maraton tanpa praktek.'
    }
  }
];
