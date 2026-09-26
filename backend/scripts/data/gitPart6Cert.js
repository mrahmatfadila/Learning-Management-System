// =========================================================================
// DATA MATERI GIT: BAB 6 - GIT CERT (1 LESSON)
// Sertifikasi Resmi DevGrow & Standar Kompetensi Git/GitHub Global
// =========================================================================

module.exports = [
  // ── 1. GIT CERTIFICATE ───────────────────────────────────────────────────
  {
    id: 'git-certificate',
    title: 'Git Certificate',
    chapter: 'Git Cert',
    chapterId: 'git-chap-cert',
    order: 1,
    overview: 'Uji kompetensi komprehensif Anda dan raih Sertifikat Resmi Git & GitHub Version Control Professional dari DevGrow untuk memvalidasi keahlian kontrol versi dan kolaborasi tim berstandar enterprise.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-amber-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-amber-500 text-slate-950">SERTIFIKASI PROFESIONAL</span>
            <span class="text-xs text-amber-600 dark:text-amber-400 font-bold uppercase tracking-wider">Materi Final / 01</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎓 Sertifikasi Resmi Git & GitHub Professional</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Selamat! Anda telah mempelajari seluruh spektrum materi Git dan GitHub dari tingkat dasar hingga tingkat mahir (Advanced). Uji pemahaman Anda melalui ujian evaluasi akhir untuk mengklaim <strong>Sertifikat Kompetensi Terverifikasi</strong> yang dapat dilampirkan di profil LinkedIn dan CV Anda.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40">
            <div class="text-amber-600 dark:text-amber-400 font-black text-base mb-1">📝 Format Evaluasi</div>
            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Ujian pilihan ganda dan studi kasus teknis mencakup seluruh skenario Git dunia kerja nyata.</p>
          </div>
          <div class="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40">
            <div class="text-emerald-600 dark:text-emerald-400 font-black text-base mb-1">🎯 Passing Grade 80%</div>
            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Skor minimum kelulusan 80% untuk memastikan standar kualitas lulusan berdaya saing industri.</p>
          </div>
          <div class="p-4 rounded-xl bg-sky-50 dark:bg-sky-950/20 border border-sky-200 dark:border-sky-900/40">
            <div class="text-sky-600 dark:text-sky-400 font-black text-base mb-1">🔒 Kredensial Unik</div>
            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Dilengkapi ID Sertifikat unik dan tautan verifikasi online instan untuk recruiter/perusahaan.</p>
          </div>
        </div>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-3">
          <h3 class="text-base font-bold text-amber-400">📊 Domain Kompetensi yang Diuji</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div class="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <strong class="text-emerald-400 block">1. Git Fundamentals (25%)</strong>
              <p class="text-slate-400">Konsep 3 Pohon Git, Snapshot, git init, add, commit, conventional commits, status, dan log.</p>
            </div>
            <div class="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <strong class="text-sky-400 block">2. Branching, Merging & Undo (25%)</strong>
              <p class="text-slate-400">Branching modern (switch), fast-forward vs 3-way merge, revert, soft/mixed/hard reset, reflog recovery.</p>
            </div>
            <div class="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <strong class="text-purple-400 block">3. GitHub & Open Source (25%)</strong>
              <p class="text-slate-400">SSH Key auth, Forking, Upstream vs Origin, Pull Requests, Code Review, dan Branch Protection Rules.</p>
            </div>
            <div class="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <strong class="text-amber-400 block">4. Advanced & DevOps (25%)</strong>
              <p class="text-slate-400">Git LFS, GPG/SSH Signing, Cherry-pick, Git Hooks/Husky, GitHub Actions CI/CD, Submodules, dan Pruning.</p>
            </div>
          </div>
        </div>

        <div class="p-5 rounded-2xl bg-slate-950 text-slate-100 border border-amber-500/40 text-center space-y-2">
          <h4 class="text-base font-black text-amber-400">🏆 Siap Mengklaim Sertifikat Anda?</h4>
          <p class="text-xs text-slate-300 max-w-xl mx-auto leading-relaxed">
            Selesaikan kuis final di bawah ini dengan benar untuk membuktikan penguasaan penuh Anda terhadap ekosistem Git & GitHub!
          </p>
        </div>
      </div>
    `,
    code: `# Verifikasi kesiapan akhir seluruh konfigurasi Git developer profesional
git config --list --show-origin

# Memeriksa status repositori dan integritas branch
git status
git log --oneline --graph --decorate -5`,
    codeExplanation: [
      '"git config --list" memastikan identitas developer, default branch main, dan signing key sudah terkonfigurasi dengan benar.',
      'Log grafik linear memastikan workflow commit berjalan rapi sesuai standar industri.'
    ],
    challenge: {
      instruction: 'Jalankan perintah untuk menampilkan 5 commit terakhir dalam format satu baris grafikal.',
      starterCode: 'git log --oneline --graph -5',
      hint: 'Gunakan "git log --oneline --graph -5".'
    },
    quiz: {
      question: 'Kombinasi alur kerja mana yang paling mencerminkan standar rekayasa perangkat lunak modern tingkat industri (Professional Git Workflow)?',
      options: [
        'Membuat branch fitur baru -> commit atomic -> push ke remote -> buka Pull Request untuk code review & CI testing -> merge ke main setelah approved',
        'Semua developer langsung commit dan push langsung ke branch production tanpa testing',
        'Mengirim kode revisi dalam bentuk file zip melalui pesan chat',
        'Melakukan git reset --hard setiap pagi sebelum mulai koding'
      ],
      correctIndex: 0,
      explanation: 'Alur berbasis branch, atomic commits, Pull Request, automated testing (CI), dan peer review adalah pilar utama pengembangan software modern berskala global.'
    }
  }
];
