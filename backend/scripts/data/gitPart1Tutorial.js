// =========================================================================
// DATA MATERI GIT: BAB 1 - GIT TUTORIAL (17 LESSONS)
// Standar Kurikulum Enterprise, W3Schools Git, Pro Git Book & DevGrow
// =========================================================================

module.exports = [
  // ── 1. GIT HOME ──────────────────────────────────────────────────────────
  {
    id: 'git-home',
    title: 'Git HOME',
    chapter: 'Git Tutorial',
    chapterId: 'git-chap-tutorial',
    order: 1,
    overview: 'Selamat datang di kurikulum pembelajaran Git & GitHub Version Control! Pelajari sistem kontrol versi terpopuler di dunia yang menjadi standar mutlak industri rekayasa perangkat lunak modern.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-red-500/15 via-orange-500/10 to-transparent p-6 rounded-2xl border border-red-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-red-600 text-white">GIT TUTORIAL</span>
            <span class="text-xs text-red-600 dark:text-red-400 font-bold uppercase tracking-wider">Materi 01 / 17</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚡ Selamat Datang di Dunia Git & Version Control</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <strong>Git</strong> adalah <em>Distributed Version Control System (DVCS)</em> gratis dan open-source yang dirancang untuk mengelola proyek perangkat lunak dari skala kecil hingga enterprise raksasa dengan kecepatan dan integritas data yang luar biasa.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="p-4 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40">
            <div class="text-red-600 dark:text-red-400 font-black text-base mb-1">⏱️ Time Machine Kode</div>
            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Merekam setiap riwayat perubahan kode file demi file, memungkinkan Anda kembali ke kondisi kerja masa lalu kapan saja jika terjadi bug.</p>
          </div>
          <div class="p-4 rounded-xl bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900/40">
            <div class="text-orange-600 dark:text-orange-400 font-black text-base mb-1">🌿 Percabangan (Branching) Cepat</div>
            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Mengerjakan banyak fitur atau perbaikan bug secara terisolasi tanpa merusak kode utama tim yang sedang berjalan di production.</p>
          </div>
          <div class="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40">
            <div class="text-amber-600 dark:text-amber-400 font-black text-base mb-1">🤝 Kolaborasi Tim Skala Global</div>
            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Memungkinkan puluhan hingga ribuan developer bekerja bersamaan pada satu repositori kode melalui platform seperti GitHub, GitLab, atau Bitbucket.</p>
          </div>
        </div>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-3">
          <h3 class="text-base font-bold text-amber-400 flex items-center gap-2">
            <span>💡</span> Mengapa Git Menjadi Syarat Wajib Developer?
          </h3>
          <ul class="space-y-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <li class="flex items-start gap-2">
              <span class="text-emerald-400 font-bold">✓</span>
              <span><strong>Tidak Ada Lagi File Duplikat Berantakan:</strong> Ucapkan selamat tinggal pada nama folder seperti <code>skripsi_final_v2_revisi_beneran_FIX.zip</code>.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-400 font-bold">✓</span>
              <span><strong>Pelacakan Siapa Mengubah Apa:</strong> Setiap baris kode tercatat siapa pembuatnya, tanggal perubahannya, dan pesan alasannya.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-400 font-bold">✓</span>
              <span><strong>Standar Industri Global:</strong> Digunakan oleh Google, Microsoft, Meta, Netflix, Linux Foundation, dan 95%+ tim rekayasa software dunia.</span>
            </li>
          </ul>
        </div>
      </div>
    `,
    code: `# Mengecek versi Git yang terpasang di sistem operasi Anda
git --version

# Menampilkan bantuan ringkas perintah Git yang sering digunakan
git help -a`,
    codeExplanation: [
      'Perintah "git --version" digunakan untuk memverifikasi apakah Git sudah terpasang dan menampilkan nomor versi aktif.',
      'Perintah "git help -a" menampilkan daftar lengkap sub-perintah umum yang didukung oleh Git CLI.'
    ],
    challenge: {
      instruction: 'Jalankan perintah untuk memeriksa versi Git yang terpasang di komputer Anda.',
      starterCode: 'git --version',
      hint: 'Ketik perintah "git --version" di terminal untuk melihat nomor versi Git Anda.'
    },
    quiz: {
      question: 'Apa fungsi utama dari Git dalam proses pengembangan perangkat lunak?',
      options: [
        'Mengelola riwayat versi kode, percabangan fitur, dan kolaborasi tim',
        'Mengompilasi file kode JavaScript menjadi file binary .exe',
        'Menjalankan web server lokal untuk hosting database',
        'Mengompres file gambar agar ukuran website lebih ringan'
      ],
      correctIndex: 0,
      explanation: 'Git adalah Distributed Version Control System yang mencatat riwayat perubahan kode sumber serta memudahkan percabangan dan kolaborasi.'
    }
  },

  // ── 2. GIT INTRO ─────────────────────────────────────────────────────────
  {
    id: 'git-intro',
    title: 'Git Intro',
    chapter: 'Git Tutorial',
    chapterId: 'git-chap-tutorial',
    order: 2,
    overview: 'Pahami arsitektur internal Git, perbedaan mendasar antara Centralized VCS dan Distributed VCS, serta konsep penyimpanan Snapshot berbasis SHA-1.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-red-500/15 via-pink-500/10 to-transparent p-6 rounded-2xl border border-red-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-red-600 text-white">ARSITEKTUR GIT</span>
            <span class="text-xs text-red-600 dark:text-red-400 font-bold uppercase tracking-wider">Materi 02 / 17</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧠 Bagaimana Cara Kerja Git?</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Git diciptakan oleh <strong>Linus Torvalds</strong> (pencipta kernel Linux) pada tahun 2005. Filosofi utama Git berbeda total dari sistem kontrol versi lama seperti SVN atau CVS.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-2">
            <h4 class="text-base font-bold text-amber-400">🏛️ Centralized VCS (SVN, CVS)</h4>
            <p class="text-xs text-slate-300 leading-relaxed">
              Semua riwayat hanya ada di satu server pusat. Jika server mati atau jaringan terputus, developer tidak bisa melakukan commit riwayat atau melihat log masa lalu.
            </p>
          </div>
          <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-2">
            <h4 class="text-base font-bold text-emerald-400">🌐 Distributed VCS (Git)</h4>
            <p class="text-xs text-slate-300 leading-relaxed">
              Setiap developer memiliki <strong>salinan penuh (Full Mirror)</strong> dari seluruh repositori beserta riwayatnya di hard disk lokal. Bisa bekerja 100% offline dengan kecepatan kilat.
            </p>
          </div>
        </div>

        <div class="p-5 rounded-2xl bg-slate-950 text-slate-100 border border-slate-800 space-y-3">
          <h3 class="text-base font-bold text-red-400 flex items-center gap-2">
            <span>📸</span> Konsep Snapshot Bukan Delta
          </h3>
          <p class="text-xs md:text-sm text-slate-300 leading-relaxed">
            VCS tradisional menyimpan perbedaan antar baris (<em>delta/diff-based</em>). Git memperlakukan data sebagai <strong>kumpulan Snapshot (rekaman potret utuh)</strong> dari seluruh sistem file pada saat commit dilakukan. Jika suatu file tidak mengalami perubahan, Git hanya membuat tautan (link) ke file identik sebelumnya, menjadikannya sangat hemat storage dan super cepat!
          </p>
        </div>
      </div>
    `,
    code: `# Contoh memverifikasi informasi Git dan status sistem lokal
git --version
# Output: git version 2.44.0 (atau versi terbaru yang terpasang)`,
    codeExplanation: [
      'Git bekerja secara lokal di komputer Anda tanpa memerlukan koneksi internet untuk membuat commit, branch, atau melihat riwayat log.',
      'Koneksi internet hanya dibutuhkan ketika ingin menyinkronkan (push/pull/fetch) kode dengan server remote seperti GitHub.'
    ],
    challenge: {
      instruction: 'Tampilkan bantuan perintah Git untuk melihat opsi yang tersedia.',
      starterCode: 'git help',
      hint: 'Jalankan "git help" pada terminal Anda.'
    },
    quiz: {
      question: 'Apa perbedaan utama sistem Distributed Version Control (Git) dibanding Centralized Version Control (SVN)?',
      options: [
        'Setiap developer memiliki salinan utuh seluruh riwayat repositori secara lokal di komputernya',
        'Git hanya bisa dijalankan jika komputer selalu terhubung ke jaringan internet stabil',
        'Git hanya mampu melacak satu file dalam satu waktu',
        'Git tidak mendukung percabangan cabang (branching)'
      ],
      correctIndex: 0,
      explanation: 'Pada Distributed VCS, setiap komputer developer menyimpan database riwayat lengkap sehingga operasi commit, branching, dan log berjalan offline.'
    }
  },

  // ── 3. GIT INSTALL ───────────────────────────────────────────────────────
  {
    id: 'git-install',
    title: 'Git Install',
    chapter: 'Git Tutorial',
    chapterId: 'git-chap-tutorial',
    order: 3,
    overview: 'Panduan langkah demi langkah mengunduh dan menginstal Git pada sistem operasi Windows, macOS, dan Linux dengan pengaturan yang direkomendasikan.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-red-500/15 via-orange-500/10 to-transparent p-6 rounded-2xl border border-red-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-red-600 text-white">INSTALASI</span>
            <span class="text-xs text-red-600 dark:text-red-400 font-bold uppercase tracking-wider">Materi 03 / 17</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">💻 Panduan Instalasi Git Multi-Platform</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Sebelum memulai petualangan membuat repositori kode, pastikan Git CLI terpasang dengan benar di sistem operasi Anda.
          </p>
        </div>

        <div class="space-y-4">
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100">
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-bold text-sky-400 text-sm">🪟 1. Instalasi di Windows</h4>
              <span class="text-xs bg-sky-950 text-sky-300 px-2 py-0.5 rounded border border-sky-800">Git for Windows</span>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed mb-2">
              Unduh installer resmi dari <strong><a href="https://git-scm.com/download/win" target="_blank" class="text-sky-400 underline">git-scm.com</a></strong>. Paket ini sudah mencakup <strong>Git Bash</strong> (terminal emulasi Unix canggih) dan <strong>Git GUI</strong>.
            </p>
            <div class="text-xs bg-slate-950 p-2.5 rounded font-mono text-emerald-400">
              winget install --id Git.Git -e --source winget
            </div>
          </div>

          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100">
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-bold text-slate-200 text-sm">🍎 2. Instalasi di macOS</h4>
              <span class="text-xs bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700">Homebrew / Xcode</span>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed mb-2">
              Gunakan paket manajer Homebrew di Terminal Mac:
            </p>
            <div class="text-xs bg-slate-950 p-2.5 rounded font-mono text-emerald-400">
              brew install git
            </div>
          </div>

          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100">
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-bold text-amber-400 text-sm">🐧 3. Instalasi di Linux (Ubuntu / Debian / Fedora)</h4>
              <span class="text-xs bg-amber-950 text-amber-300 px-2 py-0.5 rounded border border-amber-800">APT / DNF</span>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed mb-2">
              Jalankan perintah paket manajer distro Linux Anda:
            </p>
            <div class="text-xs bg-slate-950 p-2.5 rounded font-mono text-emerald-400">
              sudo apt update && sudo apt install git -y
            </div>
          </div>
        </div>
      </div>
    `,
    code: `# Memeriksa apakah Git berhasil terpasang dan siap digunakan
git --version

# Output yang diharapkan (contoh):
# git version 2.43.0`,
    codeExplanation: [
      'Menjalankan "git --version" di Terminal atau PowerShell memverifikasi bahwa path eksekusi Git sudah terdaftar di environment variable sistem.',
      'Jika muncul pesan "command not found" atau "is not recognized", restart terminal Anda atau periksa PATH sistem operasi.'
    ],
    challenge: {
      instruction: 'Periksa versi Git yang sudah terinstal untuk memastikan kesiapan sistem.',
      starterCode: 'git --version',
      hint: 'Jalankan perintah "git --version".'
    },
    quiz: {
      question: 'Aplikasi terminal bawaan apa yang disertakan saat menginstal Git di sistem operasi Windows?',
      options: [
        'Git Bash (berbasis MinGW/Bash Linux)',
        'Notepad++',
        'Visual Studio IDE',
        'Command Prompt Klasik MS-DOS'
      ],
      correctIndex: 0,
      explanation: 'Git for Windows menyertakan terminal Git Bash yang memberikan lingkungan baris perintah mirip Linux lengkap dengan utilitas Unix standar.'
    }
  },

  // ── 4. GIT CONFIG ────────────────────────────────────────────────────────
  {
    id: 'git-config',
    title: 'Git Config',
    chapter: 'Git Tutorial',
    chapterId: 'git-chap-tutorial',
    order: 4,
    overview: 'Konfigurasi identitas developer (nama, email), nama default branch, text editor, dan cara memeriksa daftar konfigurasi global Git.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-red-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-red-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-red-600 text-white">KONFIGURASI</span>
            <span class="text-xs text-red-600 dark:text-red-400 font-bold uppercase tracking-wider">Materi 04 / 17</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚙️ Mengatur Identitas & Konfigurasi Git</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Hal pertama yang <strong>WAJIB</strong> dilakukan setelah memasang Git adalah mengatur identitas nama dan alamat email Anda. Identitas ini akan disematkan secara permanen pada setiap commit yang Anda buat.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100">
            <div class="text-amber-400 font-bold text-sm mb-1">1. Level System</div>
            <p class="text-xs text-slate-400"><code>--system</code>: Berlaku untuk semua pengguna di komputer (disimpan di file konfigurasi OS pusat).</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100">
            <div class="text-emerald-400 font-bold text-sm mb-1">2. Level Global (Paling Umum)</div>
            <p class="text-xs text-slate-400"><code>--global</code>: Berlaku untuk semua repositori milik akun user saat ini (disimpan di <code>~/.gitconfig</code>).</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100">
            <div class="text-sky-400 font-bold text-sm mb-1">3. Level Local</div>
            <p class="text-xs text-slate-400"><code>--local</code>: Berlaku spesifik hanya pada satu repositori tertentu (disimpan di <code>.git/config</code>).</p>
          </div>
        </div>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-3">
          <h3 class="text-base font-bold text-amber-400">📌 Konfigurasi Default Modern (Standar Industri)</h3>
          <p class="text-xs md:text-sm text-slate-300 leading-relaxed">
            Secara default, Git versi lama menggunakan nama cabang utama <code>master</code>. Standar industri modern saat ini menggunakan nama cabang <strong><code>main</code></strong>. Anda dapat mengaturnya secara otomatis untuk setiap repositori baru:
          </p>
          <div class="text-xs bg-slate-950 p-3 rounded-lg font-mono text-emerald-400">
            git config --global init.defaultBranch main
          </div>
        </div>
      </div>
    `,
    code: `# 1. Mengatur Nama Pengembang
git config --global user.name "Budi Developer"

# 2. Mengatur Alamat Email (Gunakan email yang sama dengan akun GitHub Anda)
git config --global user.email "budi.dev@example.com"

# 3. Mengatur Default Branch Baru menjadi 'main'
git config --global init.defaultBranch main

# 4. Memeriksa semua konfigurasi yang sedang aktif
git config --list --show-origin`,
    codeExplanation: [
      'Flag "--global" memastikan konfigurasi ini berlaku otomatis untuk semua proyek Git yang Anda buka di komputer ini.',
      'Nilai "user.name" dan "user.email" bersifat wajib agar platform seperti GitHub dapat menautkan commit Anda ke profil akun yang tepat.',
      '"git config --list" menampilkan seluruh daftar variabel konfigurasi beserta sumber file pengaturannya.'
    ],
    challenge: {
      instruction: 'Atur nama global Git Anda menjadi "Software Engineer" menggunakan perintah git config.',
      starterCode: 'git config --global user.name "Software Engineer"',
      hint: 'Gunakan perintah git config dengan flag --global diikuti parameter user.name dan nama Anda.'
    },
    quiz: {
      question: 'File di mana konfigurasi level global Git disimpan pada direktori profil pengguna (Home directory)?',
      options: [
        '~/.gitconfig',
        '/etc/git.conf',
        '.git/config',
        'C:\\Program Files\\git.ini'
      ],
      correctIndex: 0,
      explanation: 'Konfigurasi dengan flag --global disimpan pada file tersembunyi bernama .gitconfig di direktori home pengguna (~/.gitconfig).'
    }
  },

  // ── 5. GIT GET STARTED ───────────────────────────────────────────────────
  {
    id: 'git-get-started',
    title: 'Git Get Started',
    chapter: 'Git Tutorial',
    chapterId: 'git-chap-tutorial',
    order: 5,
    overview: 'Mulai membuat repositori Git pertama dengan git init, memahami struktur folder tersembunyi .git, atau mengkloning repositori dari remote dengan git clone.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-red-500/15 via-orange-500/10 to-transparent p-6 rounded-2xl border border-red-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-red-600 text-white">MEMULAI REPO</span>
            <span class="text-xs text-red-600 dark:text-red-400 font-bold uppercase tracking-wider">Materi 05 / 17</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🚀 Dua Cara Memulai Proyek Git</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Ada dua skenario awal saat Anda mulai bekerja dengan Git: membuat repositori baru dari awal di folder lokal, atau mengunduh repositori yang sudah ada dari GitHub.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-3">
            <div class="flex items-center gap-2 text-emerald-400 font-bold text-sm">
              <span>🆕 Skenario A: Inisialisasi Baru</span>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed">
              Jika Anda memiliki folder proyek lokal baru dan ingin mulai melacak versinya:
            </p>
            <div class="text-xs bg-slate-950 p-2.5 rounded font-mono text-emerald-300">
              cd folder-proyek-saya<br/>
              git init
            </div>
            <p class="text-xs text-slate-400">
              Perintah ini akan membuat subdirektori tersembunyi bernama <code>.git</code> yang memuat seluruh metadata database pelacakan.
            </p>
          </div>

          <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-3">
            <div class="flex items-center gap-2 text-sky-400 font-bold text-sm">
              <span>📥 Skenario B: Clone Repositori</span>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed">
              Jika repositori sudah ada di GitHub atau GitLab dan Anda ingin mengunduh seluruh salinan kode beserta riwayat commit-nya:
            </p>
            <div class="text-xs bg-slate-950 p-2.5 rounded font-mono text-sky-300">
              git clone https://github.com/user/project.git
            </div>
            <p class="text-xs text-slate-400">
              Git akan membuat folder baru dan mengunduh seluruh cabang, riwayat, dan file secara otomatis.
            </p>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs leading-relaxed">
          ⚠️ <strong>Penting:</strong> Jangan pernah menghapus atau mengubah isi folder <code>.git</code> secara manual, karena folder tersebut adalah jantung database yang menyimpan seluruh riwayat proyek Anda!
        </div>
      </div>
    `,
    code: `# Langkah 1: Buat folder proyek baru dan masuk ke dalamnya
mkdir my-first-git-project
cd my-first-git-project

# Langkah 2: Inisialisasi Git repositori di dalam folder ini
git init

# Output:
# Initialized empty Git repository in /path/my-first-git-project/.git/

# Langkah 3: Periksa status repositori
git status`,
    codeExplanation: [
      '"mkdir" dan "cd" adalah perintah terminal untuk membuat dan memasuki direktori baru.',
      '"git init" mengubah folder biasa menjadi Git Repository yang aktif dipantau perubahannya.',
      '"git status" adalah perintah paling sering dipakai untuk melihat kondisi file yang sedang diedit.'
    ],
    challenge: {
      instruction: 'Inisialisasi repositori Git baru di direktori saat ini menggunakan perintah git init.',
      starterCode: 'git init',
      hint: 'Cukup ketik "git init" pada terminal.'
    },
    quiz: {
      question: 'Folder apa yang otomatis dibuat oleh Git untuk menyimpan seluruh database riwayat pelacakan ketika menjalankan "git init"?',
      options: [
        '.git (folder tersembunyi di root proyek)',
        '.node_modules',
        '.github-history',
        'system32/git'
      ],
      correctIndex: 0,
      explanation: 'Folder tersembunyi .git berisi seluruh konfigurasi, snapshot objek, riwayat commit, dan pointer branch dari repositori tersebut.'
    }
  },

  // ── 6. GIT NEW FILES ─────────────────────────────────────────────────────
  {
    id: 'git-new-files',
    title: 'Git New Files',
    chapter: 'Git Tutorial',
    chapterId: 'git-chap-tutorial',
    order: 6,
    overview: 'Mempelajari siklus hidup status file di Git (Untracked vs Tracked), memeriksa status dengan git status, dan mengabaikan file rahasia dengan .gitignore.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-red-500/15 via-orange-500/10 to-transparent p-6 rounded-2xl border border-red-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-red-600 text-white">STATUS FILE</span>
            <span class="text-xs text-red-600 dark:text-red-400 font-bold uppercase tracking-wider">Materi 06 / 17</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📄 Siklus Hidup File di Git</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Setiap file yang berada di dalam direktori kerja Anda memiliki status tertentu dalam sudut pandang Git.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 space-y-2">
            <div class="text-red-400 font-bold text-sm">🔴 1. Untracked Files</div>
            <p class="text-xs text-slate-300 leading-relaxed">
              File baru yang dibuat di folder kerja Anda namun belum pernah didaftarkan ke sistem pelacakan Git. Git memberi tahu bahwa file ini ada, tetapi tidak akan menyimpannya ke riwayat commit sampai Anda memasukkannya ke staging area.
            </p>
          </div>
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 space-y-2">
            <div class="text-emerald-400 font-bold text-sm">🟢 2. Tracked Files</div>
            <p class="text-xs text-slate-300 leading-relaxed">
              File yang sudah pernah dicatat dalam snapshot commit sebelumnya. File ini bisa berada dalam 3 kondisi: <em>Unmodified</em> (belum diedit), <em>Modified</em> (sudah diedit), atau <em>Staged</em> (siap di-commit).
            </p>
          </div>
        </div>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-3">
          <h3 class="text-base font-bold text-amber-400">🛡️ Mengabaikan File dengan .gitignore</h3>
          <p class="text-xs md:text-sm text-slate-300 leading-relaxed">
            Tidak semua file boleh dimasukkan ke Git! File kredensial (<code>.env</code>), direktori dependensi (<code>node_modules/</code>, <code>vendor/</code>), serta file log/temporary sistem operasi harus diabaikan dengan mencantumkannya di file <strong><code>.gitignore</code></strong>.
          </p>
          <div class="text-xs bg-slate-950 p-3 rounded font-mono text-slate-300 space-y-1">
            <div class="text-slate-500"># Contoh isi file .gitignore</div>
            <div>.env</div>
            <div>node_modules/</div>
            <div>*.log</div>
            <div>dist/</div>
          </div>
        </div>
      </div>
    `,
    code: `# 1. Buat file baru
echo "# My Awesome App" > README.md
echo "console.log('Hello');" > app.js

# 2. Periksa status repositori
git status

# Output Terminal:
# On branch main
# Untracked files:
#   (use "git add <file>..." to include in what will be committed)
#	README.md
#	app.js`,
    codeExplanation: [
      'Perintah "echo ... > namafile" membuat file teks baru di direktori kerja.',
      '"git status" mendeteksi bahwa ada 2 file baru berstatus "Untracked" yang belum masuk ke Staging Area.',
      'Git menyarankan perintah "git add <file>..." untuk memindahkan file tersebut ke Staging Area.'
    ],
    challenge: {
      instruction: 'Jalankan perintah git status dalam mode ringkas (short format).',
      starterCode: 'git status -s',
      hint: 'Gunakan flag "-s" atau "--short" pada perintah git status.'
    },
    quiz: {
      question: 'File apa yang digunakan untuk memberi tahu Git agar tidak melacak file rahasia seperti file .env atau folder node_modules?',
      options: [
        '.gitignore',
        '.gitkeep',
        '.gitconfig',
        'package.json'
      ],
      correctIndex: 0,
      explanation: 'File .gitignore memuat daftar pola nama file dan direktori yang akan diabaikan oleh Git dari pelacakan.'
    }
  },

  // ── 7. GIT STAGING ───────────────────────────────────────────────────────
  {
    id: 'git-staging',
    title: 'Git Staging',
    chapter: 'Git Tutorial',
    chapterId: 'git-chap-tutorial',
    order: 7,
    overview: 'Memahami konsep 3 Area Inti Git (Working Directory, Staging Area, Repository), perintah git add, dan cara membatalkan staging dengan git restore.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-red-500/15 via-orange-500/10 to-transparent p-6 rounded-2xl border border-red-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-red-600 text-white">STAGING AREA</span>
            <span class="text-xs text-red-600 dark:text-red-400 font-bold uppercase tracking-wider">Materi 07 / 17</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎯 Konsep 3 Pohon / Area Git</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Kekuatan terbesar Git terletak pada <strong>Staging Area (disebut juga Index)</strong>. Staging Area adalah ruang persiapan di mana Anda memilih perubahan mana saja yang akan dibungkus ke dalam commit berikutnya.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100">
            <div class="text-red-400 font-bold text-sm mb-1">1. Working Directory</div>
            <p class="text-xs text-slate-400 leading-relaxed">Tempat Anda mengetik dan mengedit kode di text editor (VS Code, dll). Perubahan di sini masih mentah.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-900 border border-emerald-500/50 text-slate-100">
            <div class="text-emerald-400 font-bold text-sm mb-1">2. Staging Area (Index)</div>
            <p class="text-xs text-slate-400 leading-relaxed">Ruang transit! Menggunakan <code>git add</code> untuk memilih file yang siap dibungkus dalam commit.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100">
            <div class="text-sky-400 font-bold text-sm mb-1">3. Git Directory (.git)</div>
            <p class="text-xs text-slate-400 leading-relaxed">Database riwayat permanen. Perubahan disimpan permanen dengan <code>git commit</code>.</p>
          </div>
        </div>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-3">
          <h3 class="text-base font-bold text-amber-400">📋 Perintah Staging Utama</h3>
          <ul class="space-y-2 text-xs md:text-sm text-slate-300 font-mono">
            <li><span class="text-emerald-400 font-bold">git add index.html</span> : Menambahkan file spesifik ke staging area.</li>
            <li><span class="text-emerald-400 font-bold">git add .</span> : Menambahkan seluruh file yang berubah di direktori saat ini ke staging area.</li>
            <li><span class="text-amber-400 font-bold">git restore --staged index.html</span> : Membatalkan staging file tanpa menghapus editan kodenya.</li>
          </ul>
        </div>
      </div>
    `,
    code: `# Menambahkan file spesifik ke Staging Area
git add README.md

# Menambahkan SEMUA perubahan file ke Staging Area sekaligus
git add .

# Memeriksa status setelah di-staging
git status

# Output Terminal:
# Changes to be committed:
#   (use "git restore --staged <file>..." to unstage)
#	new file:   README.md
#	new file:   app.js`,
    codeExplanation: [
      '"git add <nama_file>" memindahkan file dari Working Directory ke Staging Area.',
      '"git add ." menambahkan semua file baru dan file yang dimodifikasi dalam direktori aktif.',
      'File yang berstatus hijau pada "Changes to be committed" berarti siap dibungkus permanen ke commit.'
    ],
    challenge: {
      instruction: 'Tambahkan seluruh file yang berubah ke Staging Area dengan perintah git add.',
      starterCode: 'git add .',
      hint: 'Gunakan titik (.) setelah git add untuk menyertakan semua file di folder saat ini.'
    },
    quiz: {
      question: 'Bagaimana cara membatalkan status staging pada suatu file tanpa menghapus editan kode di dalam file tersebut?',
      options: [
        'git restore --staged <nama_file>',
        'git delete <nama_file>',
        'git rm -rf .',
        'git clean -fd'
      ],
      correctIndex: 0,
      explanation: 'Perintah "git restore --staged <nama_file>" mengembalikan file dari Staging Area ke Working Directory tanpa menghilangkan perubahan teks di dalamnya.'
    }
  },

  // ── 8. GIT COMMIT ────────────────────────────────────────────────────────
  {
    id: 'git-commit',
    title: 'Git Commit',
    chapter: 'Git Tutorial',
    chapterId: 'git-chap-tutorial',
    order: 8,
    overview: 'Merekam snapshot riwayat permanen dengan git commit, panduan penulisan Conventional Commits standar industri, dan opsi commit penting.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-red-500/15 via-orange-500/10 to-transparent p-6 rounded-2xl border border-red-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-red-600 text-white">REKAM SNAPSHOT</span>
            <span class="text-xs text-red-600 dark:text-red-400 font-bold uppercase tracking-wider">Materi 08 / 17</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">💾 Membuat Snapshot dengan Git Commit</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <strong>Commit</strong> adalah titik penyimpanan (<em>checkpoint/save point</em>) permanen dalam riwayat proyek. Setiap commit memiliki <strong>SHA-1 Hash unik</strong> (misal: <code>7a8f9b2...</code>) yang merekam siapa pembuatnya, waktu pencatatan, dan daftar perubahan file.
          </p>
        </div>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-3">
          <h3 class="text-base font-bold text-amber-400">📝 Standar Penulisan Pesan Commit Profesional (Conventional Commits)</h3>
          <p class="text-xs text-slate-300 leading-relaxed">
            Hindari pesan commit yang tidak bermakna seperti <code>"update"</code> atau <code>"fix error"</code>. Gunakan format standar industri:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
            <div class="p-2 rounded bg-slate-950 font-mono"><strong class="text-emerald-400">feat:</strong> Menambah fitur baru (contoh: <code>feat: add user login API</code>)</div>
            <div class="p-2 rounded bg-slate-950 font-mono"><strong class="text-red-400">fix:</strong> Memperbaiki bug (contoh: <code>fix: resolve password hashing issue</code>)</div>
            <div class="p-2 rounded bg-slate-950 font-mono"><strong class="text-sky-400">docs:</strong> Perubahan dokumentasi saja (contoh: <code>docs: update README guide</code>)</div>
            <div class="p-2 rounded bg-slate-950 font-mono"><strong class="text-purple-400">refactor:</strong> Refactoring kode tanpa mengubah fitur</div>
            <div class="p-2 rounded bg-slate-950 font-mono"><strong class="text-amber-400">style:</strong> Perapihan format spasi/CSS tanpa ubah logika</div>
            <div class="p-2 rounded bg-slate-950 font-mono"><strong class="text-teal-400">test:</strong> Menambahkan unit test atau automated testing</div>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-xs leading-relaxed space-y-1">
          <span class="text-amber-400 font-bold">💡 Opsi Praktis:</span>
          <div><code>git commit -am "pesan"</code> : Men-stage file yang telah dimodifikasi (tracked) dan melakukan commit sekaligus dalam satu perintah.</div>
          <div><code>git commit --amend -m "pesan baru"</code> : Mengubah pesan commit terakhir atau menambahkan file yang tertinggal ke commit terakhir.</div>
        </div>
      </div>
    `,
    code: `# 1. Melakukan commit dengan pesan deskriptif
git commit -m "feat: inisialisasi struktur awal proyek dan README"

# Output Terminal:
# [main (root-commit) 8f3b14a] feat: inisialisasi struktur awal proyek dan README
#  2 files changed, 15 insertions(+)
#  create mode 100644 README.md
#  create mode 100644 app.js

# 2. Periksa status kembali setelah commit
git status
# Output: nothing to commit, working tree clean`,
    codeExplanation: [
      'Flag "-m" memungkinkan kita menyertakan pesan commit langsung tanpa membuka editor eksternal.',
      'Output "8f3b14a" adalah 7 karakter awal dari SHA-1 Hash yang menjadi pengenal unik commit tersebut.',
      '"working tree clean" menandakan seluruh perubahan telah tersimpan dengan aman di database Git.'
    ],
    challenge: {
      instruction: 'Buat commit dengan pesan "feat: initial commit" untuk menyimpan file di Staging Area.',
      starterCode: 'git commit -m "feat: initial commit"',
      hint: 'Gunakan sintaks: git commit -m "feat: initial commit"'
    },
    quiz: {
      question: 'Menurut standar Conventional Commits, prefix apa yang tepat digunakan ketika menambahkan fitur baru pada aplikasi?',
      options: [
        'feat: (contoh: feat: add search bar)',
        'fix: (contoh: fix: search bar error)',
        'docs: (contoh: docs: add search bar)',
        'chore: (contoh: chore: search bar)'
      ],
      correctIndex: 0,
      explanation: 'Prefix "feat:" digunakan secara global untuk menandai penambahan fitur baru pada aplikasi.'
    }
  },

  // ── 9. GIT TAGGING ───────────────────────────────────────────────────────
  {
    id: 'git-tagging',
    title: 'Git Tagging',
    chapter: 'Git Tutorial',
    chapterId: 'git-chap-tutorial',
    order: 9,
    overview: 'Memberikan label versi rilis perangkat lunak (Release Versioning) menggunakan Git Tag, perbedaan Annotated Tag vs Lightweight Tag, serta Semantic Versioning.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-red-500/15 via-orange-500/10 to-transparent p-6 rounded-2xl border border-red-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-red-600 text-white">RELEASE VERSIONING</span>
            <span class="text-xs text-red-600 dark:text-red-400 font-bold uppercase tracking-wider">Materi 09 / 17</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🏷️ Menandai Versi Rilis dengan Git Tag</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <strong>Git Tag</strong> digunakan untuk menandai titik penting dalam riwayat proyek sebagai rilis versi tertentu (misal: <code>v1.0.0</code>, <code>v2.1.3</code>). Tag bertindak seperti bookmark permanen pada commit tertentu.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-2">
            <h4 class="font-bold text-amber-400 text-sm">🔖 1. Lightweight Tag</h4>
            <p class="text-xs text-slate-300 leading-relaxed">
              Hanya penunjuk (pointer) langsung ke SHA commit tertentu tanpa metadata tambahan.
            </p>
            <div class="text-xs font-mono bg-slate-950 p-2 rounded text-slate-300">git tag v1.0.0</div>
          </div>
          <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-2">
            <h4 class="font-bold text-emerald-400 text-sm">📜 2. Annotated Tag (Sangat Direkomendasikan)</h4>
            <p class="text-xs text-slate-300 leading-relaxed">
              Menyimpan informasi lengkap pembuat tag, tanggal pembuatan, pesan deskripsi rilis, dan checksum integritas.
            </p>
            <div class="text-xs font-mono bg-slate-950 p-2 rounded text-emerald-300">git tag -a v1.0.0 -m "Release Version 1.0.0"</div>
          </div>
        </div>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-3">
          <h3 class="text-base font-bold text-sky-400">🔢 Semantic Versioning (SemVer: MAJOR.MINOR.PATCH)</h3>
          <ul class="space-y-2 text-xs md:text-sm text-slate-300">
            <li><strong class="text-red-400">MAJOR (v2.0.0):</strong> Terdapat perubahan besar yang merusak kompatibilitas mundur (Breaking Changes).</li>
            <li><strong class="text-amber-400">MINOR (v1.1.0):</strong> Penambahan fitur baru yang tetap kompatibel dengan versi sebelumnya.</li>
            <li><strong class="text-emerald-400">PATCH (v1.0.1):</strong> Perbaikan bug tanpa menambah fitur baru.</li>
          </ul>
        </div>
      </div>
    `,
    code: `# 1. Membuat Annotated Tag untuk rilis v1.0.0
git tag -a v1.0.0 -m "Release: Versi produksi pertama aplikasi"

# 2. Menampilkan daftar semua tag yang ada
git tag

# 3. Melihat detail informasi tag v1.0.0 beserta data commit-nya
git show v1.0.0

# 4. Mengirim (push) tag ke repositori remote di GitHub
# git push origin v1.0.0   (atau git push origin --tags)`,
    codeExplanation: [
      'Flag "-a" membuat Annotated Tag yang menyimpan metadata lengkap.',
      'Flag "-m" memberikan deskripsi rilis.',
      '"git tag" menampilkan seluruh tag yang tersimpan di repositori.',
      'Secara default "git push" biasa tidak otomatis mengunggah tag, sehingga Anda perlu menambahkan nama tag atau flag "--tags".'
    ],
    challenge: {
      instruction: 'Buat sebuah annotated tag dengan nama v1.0.0 dan pesan "First stable release".',
      starterCode: 'git tag -a v1.0.0 -m "First stable release"',
      hint: 'Gunakan perintah git tag dengan flag -a dan -m.'
    },
    quiz: {
      question: 'Pada aturan Semantic Versioning (v1.2.3), angka mana yang dinaikkan ketika Anda hanya memperbaiki sebuah bug (bugfix)?',
      options: [
        'Angka terakhir (PATCH, yaitu 3 menjadi 4 -> v1.2.4)',
        'Angka pertama (MAJOR, yaitu 1 menjadi 2 -> v2.0.0)',
        'Angka tengah (MINOR, yaitu 2 menjadi 3 -> v1.3.0)',
        'Semua angka direset menjadi nol'
      ],
      correctIndex: 0,
      explanation: 'PATCH (angka ketiga) dinaikkan ketika pengembang hanya memperbaiki bug tanpa merusak kompatibilitas atau menambah fitur baru.'
    }
  },

  // ── 10. GIT STASH ────────────────────────────────────────────────────────
  {
    id: 'git-stash',
    title: 'Git Stash',
    chapter: 'Git Tutorial',
    chapterId: 'git-chap-tutorial',
    order: 10,
    overview: 'Menyimpan pekerjaan sementara ke laci penyimpanan (stash) tanpa perlu membuat commit setengah jadi saat harus berpindah tugas atau menangani bug darurat.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-red-500/15 via-orange-500/10 to-transparent p-6 rounded-2xl border border-red-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-red-600 text-white">PENYIMPANAN SEMENTARA</span>
            <span class="text-xs text-red-600 dark:text-red-400 font-bold uppercase tracking-wider">Materi 10 / 17</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📦 Git Stash: Laci Ajaib Pengembang</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Bayangkan Anda sedang asyik menulis kode fitur baru yang belum selesai, tiba-tiba bos meminta Anda segera memperbaiki bug kritis di branch production. Anda tidak ingin men-commit kode yang belum jadi. Solusinya: <strong>Git Stash!</strong>
          </p>
        </div>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-3">
          <h3 class="text-base font-bold text-amber-400">⚡ Alur Kerja Praktis Git Stash</h3>
          <ol class="space-y-2 text-xs md:text-sm text-slate-300 list-decimal list-inside leading-relaxed">
            <li>Simpan perubahan mentah ke stash: <code>git stash save "fitur pembayaran belum kelar"</code>.</li>
            <li>Working directory Anda kembali bersih seketika (sesuai commit terakhir).</li>
            <li>Pindah branch, perbaiki bug, lakukan commit dan push.</li>
            <li>Kembali ke branch semula, lalu ambil kembali kode yang disimpan di stash: <code>git stash pop</code>.</li>
          </ol>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div class="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200">
            <div class="font-mono text-emerald-400 font-bold mb-1">git stash list</div>
            <div>Melihat seluruh daftar antrean perubahan yang tersimpan di laci stash.</div>
          </div>
          <div class="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200">
            <div class="font-mono text-sky-400 font-bold mb-1">git stash pop</div>
            <div>Mengeluarkan perubahan teratas dan langsung menghapusnya dari daftar stash.</div>
          </div>
          <div class="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200">
            <div class="font-mono text-red-400 font-bold mb-1">git stash clear</div>
            <div>Membersihkan dan menghapus seluruh isi laci stash yang sudah tidak terpakai.</div>
          </div>
        </div>
      </div>
    `,
    code: `# 1. Simpan perubahan kode yang belum selesai ke stash
git stash -u -m "WIP: kerangka fitur login"

# Output:
# Saved working directory and index state On main: WIP: kerangka fitur login

# 2. Periksa daftar stash yang tersimpan
git stash list
# Output: stash@{0}: On main: WIP: kerangka fitur login

# 3. Kembalikan perubahan kode setelah selesai urusan lain
git stash pop`,
    codeExplanation: [
      'Flag "-u" (include-untracked) memastikan file baru yang belum di-stage juga ikut disimpan ke dalam stash.',
      'Flag "-m" memberikan catatan agar Anda ingat apa isi kode yang Anda simpan di stash.',
      '"git stash pop" menerapkan kembali perubahan tersebut ke file kerja Anda.'
    ],
    challenge: {
      instruction: 'Simpan perubahan yang sedang dikerjakan ke dalam stash dengan perintah git stash.',
      starterCode: 'git stash',
      hint: 'Cukup ketik "git stash" di terminal.'
    },
    quiz: {
      question: 'Perintah apa yang digunakan untuk mengembalikan perubahan dari stash sekaligus menghapus data stash tersebut dari daftar antrean?',
      options: [
        'git stash pop',
        'git stash apply',
        'git stash drop',
        'git stash clean'
      ],
      correctIndex: 0,
      explanation: '"git stash pop" menerapkan perubahan kode ke working directory dan otomatis menghapus entry stash tersebut, sedangkan "git stash apply" menerapkannya namun tetap membiarkan datanya di daftar stash.'
    }
  },

  // ── 11. GIT HISTORY ──────────────────────────────────────────────────────
  {
    id: 'git-history',
    title: 'Git History',
    chapter: 'Git Tutorial',
    chapterId: 'git-chap-tutorial',
    order: 11,
    overview: 'Menelusuri dan memvisualisasikan riwayat commit dengan git log, memfilter berdasarkan penulis atau tanggal, serta melihat visualisasi pohon cabang di terminal.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-red-500/15 via-orange-500/10 to-transparent p-6 rounded-2xl border border-red-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-red-600 text-white">RIWAYAT COMMIT</span>
            <span class="text-xs text-red-600 dark:text-red-400 font-bold uppercase tracking-wider">Materi 11 / 17</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📜 Menjelajahi Riwayat dengan Git Log</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Setiap commit yang pernah dibuat tercatat rapi di Git. Dengan perintah <code>git log</code>, Anda dapat melacak riwayat pengembangan, mencari siapa yang memperkenalkan bug, atau melihat evolusi kode dari waktu ke waktu.
          </p>
        </div>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-3">
          <h3 class="text-base font-bold text-amber-400">✨ Perintah Sakti Visualisasi Git Log</h3>
          <p class="text-xs text-slate-300 leading-relaxed">
            Perintah <code>git log</code> standar seringkali terlalu panjang. Gunakan kombinasi flag berikut untuk mendapatkan tampilan grafik cabang yang ringkas dan indah:
          </p>
          <div class="text-xs bg-slate-950 p-3 rounded-lg font-mono text-emerald-400">
            git log --oneline --graph --decorate --all
          </div>
          <p class="text-xs text-slate-400">
            Perintah ini menampilkan garis ASCII percabangan branch, ID commit 7-karakter, label tag, dan pesan commit dalam satu baris per commit.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div class="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200">
            <div class="font-mono text-sky-400 font-bold mb-1">git log -p -2</div>
            <div>Melihat perbedaan baris kode (diff) pada 2 commit terakhir.</div>
          </div>
          <div class="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200">
            <div class="font-mono text-teal-400 font-bold mb-1">git show &lt;commit_id&gt;</div>
            <div>Menampilkan detail lengkap satu commit spesifik beserta daftar file yang berubah.</div>
          </div>
        </div>
      </div>
    `,
    code: `# Menampilkan riwayat commit secara ringkas dalam satu baris per commit
git log --oneline

# Output Contoh:
# a1b2c3d (HEAD -> main) feat: tambah halaman login dan validasi
# e4f5g6h docs: perbarui panduan instalasi di README
# 8f3b14a feat: inisialisasi struktur awal proyek

# Menampilkan grafik percabangan secara visual di terminal
git log --graph --oneline --all`,
    codeExplanation: [
      '"git log --oneline" memadatkan setiap commit menjadi SHA pendek dan pesan commit.',
      '"--graph" menggambar pohon cabang secara visual langsung di layar terminal Anda.',
      '"HEAD -> main" menunjukkan posisi branch dan commit yang sedang aktif Anda buka saat ini.'
    ],
    challenge: {
      instruction: 'Tampilkan riwayat commit dalam format ringkas satu baris menggunakan flag --oneline.',
      starterCode: 'git log --oneline',
      hint: 'Jalankan perintah "git log --oneline".'
    },
    quiz: {
      question: 'Flag apa pada perintah "git log" yang digunakan untuk menampilkan visualisasi garis cabang (ASCII branch graph)?',
      options: [
        '--graph',
        '--tree',
        '--draw',
        '--branches'
      ],
      correctIndex: 0,
      explanation: 'Flag "--graph" menggambar representasi grafikal teks (ASCII tree) dari sejarah percabangan dan penggabungan commit.'
    }
  },

  // ── 12. GIT HELP ─────────────────────────────────────────────────────────
  {
    id: 'git-help',
    title: 'Git Help',
    chapter: 'Git Tutorial',
    chapterId: 'git-chap-tutorial',
    order: 12,
    overview: 'Cara mencari dokumentasi resmi dan panduan perintah Git secara instan langsung dari terminal menggunakan git help dan opsi flag.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-red-500/15 via-orange-500/10 to-transparent p-6 rounded-2xl border border-red-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-red-600 text-white">DOKUMENTASI LOKAL</span>
            <span class="text-xs text-red-600 dark:text-red-400 font-bold uppercase tracking-wider">Materi 12 / 17</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📖 Mencari Bantuan & Dokumentasi Perintah</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Git menyediakan manual dan dokumentasi resmi yang sangat lengkap yang tersimpan langsung di komputer Anda, sehingga Anda bisa membaca dokumentasi parameter tanpa butuh koneksi internet.
          </p>
        </div>

        <div class="space-y-3">
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100">
            <div class="text-emerald-400 font-bold text-sm mb-1 font-mono">1. Bantuan Singkat di Terminal: git &lt;command&gt; -h</div>
            <p class="text-xs text-slate-300">Menampilkan opsi flag dan parameter yang tersedia secara ringkas dan cepat tanpa meninggalkan layar kerja terminal.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100">
            <div class="text-sky-400 font-bold text-sm mb-1 font-mono">2. Manual Lengkap: git help &lt;command&gt; atau git &lt;command&gt; --help</div>
            <p class="text-xs text-slate-300">Membuka halaman manual (man page) komprehensif lengkap dengan contoh kasus penggunaan dan penjelasan teknis.</p>
          </div>
        </div>
      </div>
    `,
    code: `# Melihat bantuan cepat opsi perintah commit
git commit -h

# Membuka halaman manual lengkap perintah branch di browser/man-pager
git help branch`,
    codeExplanation: [
      'Flag "-h" menampilkan bantuan singkat parameter yang dapat digunakan pada sub-perintah tersebut.',
      'Perintah "git help <command>" membuka dokumentasi lengkap komprehensif.'
    ],
    challenge: {
      instruction: 'Jalankan perintah untuk melihat bantuan ringkas perintah git push.',
      starterCode: 'git push -h',
      hint: 'Ketik "git push -h" di terminal.'
    },
    quiz: {
      question: 'Perintah mana yang digunakan untuk menampilkan manual lengkap dokumentasi resmi dari perintah "git checkout"?',
      options: [
        'git help checkout (atau git checkout --help)',
        'git docs checkout',
        'git search checkout',
        'git find checkout'
      ],
      correctIndex: 0,
      explanation: 'Perintah "git help <perintah>" atau "git <perintah> --help" membuka halaman manual resmi dari perintah yang bersangkutan.'
    }
  },

  // ── 13. GIT BRANCH ───────────────────────────────────────────────────────
  {
    id: 'git-branch',
    title: 'Git Branch',
    chapter: 'Git Tutorial',
    chapterId: 'git-chap-tutorial',
    order: 13,
    overview: 'Menguasai percabangan kode (branching) untuk membuat fitur secara independen, berpindah cabang dengan git switch / checkout, dan menghapus cabang yang selesai.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-red-500/15 via-orange-500/10 to-transparent p-6 rounded-2xl border border-red-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-red-600 text-white">PERCABANGAN FITUR</span>
            <span class="text-xs text-red-600 dark:text-red-400 font-bold uppercase tracking-wider">Materi 13 / 17</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌿 Mengapa Harus Menggunakan Branch?</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <strong>Branch (Cabang)</strong> memungkinkan Anda memisahkan alur pengembangan utama (<code>main</code>) saat mengerjakan fitur baru atau eksperimen. Jika fitur tersebut bermasalah, Anda cukup menghapus branch tersebut tanpa merusak kode utama!
          </p>
        </div>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-3">
          <h3 class="text-base font-bold text-amber-400">🔄 Perintah Switch Modern vs Checkout Klasik</h3>
          <p class="text-xs text-slate-300 leading-relaxed">
            Sejak Git versi 2.23+, diperkenalkan perintah <code>git switch</code> yang lebih intuitif khusus untuk berpindah branch:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-mono">
            <div class="p-2.5 rounded bg-slate-950 text-slate-300">
              <span class="text-amber-400 font-bold">Cara Klasik:</span><br/>
              git checkout -b feature-payment
            </div>
            <div class="p-2.5 rounded bg-slate-950 text-slate-300">
              <span class="text-emerald-400 font-bold">Cara Modern (Direkomendasikan):</span><br/>
              git switch -c feature-payment
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div class="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200">
            <div class="font-mono text-emerald-400 font-bold mb-1">git branch</div>
            <div>Melihat daftar semua branch lokal dan branch yang sedang aktif ditandai tanda (*).</div>
          </div>
          <div class="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200">
            <div class="font-mono text-sky-400 font-bold mb-1">git switch main</div>
            <div>Beralih kembali ke branch utama.</div>
          </div>
          <div class="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200">
            <div class="font-mono text-red-400 font-bold mb-1">git branch -d &lt;nama&gt;</div>
            <div>Menghapus branch lokal yang sudah selesai digabungkan (safe delete).</div>
          </div>
        </div>
      </div>
    `,
    code: `# 1. Melihat branch yang sedang aktif saat ini
git branch

# 2. Membuat branch baru bernama "feature-navbar" dan langsung berpindah ke sana
git switch -c feature-navbar
# (atau: git checkout -b feature-navbar)

# 3. Lakukan pengeditan kode dan commit pada branch ini
git commit -am "feat: tambah komponen navigasi responsif"

# 4. Berpindah kembali ke branch utama (main)
git switch main`,
    codeExplanation: [
      '"git switch -c <nama>" (create) membuat branch baru sekaligus memindahkan pointer HEAD ke branch tersebut.',
      'Perubahan commit yang dilakukan saat berada di "feature-navbar" terisolasi dan tidak mempengaruhi branch "main".',
      '"git switch main" mengembalikan file kerja ke kondisi branch main.'
    ],
    challenge: {
      instruction: 'Buat branch baru bernama "feature-login" dan langsung berpindah ke branch tersebut.',
      starterCode: 'git switch -c feature-login',
      hint: 'Gunakan perintah "git switch -c feature-login" atau "git checkout -b feature-login".'
    },
    quiz: {
      question: 'Apa flag yang digunakan pada perintah "git branch" untuk menghapus sebuah branch lokal yang sudah selesai di-merge secara aman?',
      options: [
        '-d (contoh: git branch -d feature-navbar)',
        '-r',
        '-m',
        '-a'
      ],
      correctIndex: 0,
      explanation: 'Flag "-d" (--delete) digunakan untuk menghapus branch lokal dengan aman jika commit-nya sudah di-merge.'
    }
  },

  // ── 14. GIT MERGE ────────────────────────────────────────────────────────
  {
    id: 'git-merge',
    title: 'Git Merge',
    chapter: 'Git Tutorial',
    chapterId: 'git-chap-tutorial',
    order: 14,
    overview: 'Menggabungkan cabang fitur ke cabang utama dengan git merge, memahami Fast-Forward vs 3-Way Merge, dan cara menyelesaikan Merge Conflict dengan tenang.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-red-500/15 via-orange-500/10 to-transparent p-6 rounded-2xl border border-red-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-red-600 text-white">INTEGRASI KODE</span>
            <span class="text-xs text-red-600 dark:text-red-400 font-bold uppercase tracking-wider">Materi 14 / 17</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔀 Menggabungkan Kode dengan Git Merge</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Setelah pengerjaan fitur pada branch terpisah selesai dan diuji, langkah berikutnya adalah <strong>menggabungkan (merge)</strong> riwayat perubahan tersebut kembali ke cabang utama (<code>main</code>).
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-2">
            <h4 class="font-bold text-emerald-400 text-sm">⚡ 1. Fast-Forward Merge</h4>
            <p class="text-xs text-slate-300 leading-relaxed">
              Terjadi jika branch tujuan tidak memiliki commit baru sejak branch fitur dibuat. Git hanya perlu menggeser pointer branch maju ke depan.
            </p>
          </div>
          <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-2">
            <h4 class="font-bold text-sky-400 text-sm">🌐 2. 3-Way Merge (Recursive)</h4>
            <p class="text-xs text-slate-300 leading-relaxed">
              Terjadi jika branch utama dan branch fitur sama-sama memiliki commit baru yang berbeda. Git otomatis membuat satu <strong>Merge Commit</strong> baru.
            </p>
          </div>
        </div>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-red-500/40 space-y-3">
          <h3 class="text-base font-bold text-red-400">💥 Menangani Merge Conflict Tanpa Panik</h3>
          <p class="text-xs md:text-sm text-slate-300 leading-relaxed">
            Conflict terjadi jika dua developer mengedit <strong>baris yang sama pada file yang sama</strong> dengan isi yang berbeda. Git akan menandai baris yang konflik seperti ini:
          </p>
          <div class="text-xs bg-slate-950 p-3 rounded font-mono text-slate-300 space-y-1">
            <div class="text-red-400">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD (Perubahan di main)</div>
            <div>const API_URL = "https://api.production.com";</div>
            <div class="text-amber-400">=======</div>
            <div>const API_URL = "https://api.v2.production.com";</div>
            <div class="text-sky-400">&gt;&gt;&gt;&gt;&gt;&gt;&gt; feature-api (Perubahan di branch fitur)</div>
          </div>
          <p class="text-xs text-slate-400">
            <strong>Cara Menyelesaikannya:</strong> Hapus tanda penanda konflik, pilih baris kode yang benar, simpan file, lakukan <code>git add .</code> dan selesaikan dengan <code>git commit</code>.
          </p>
        </div>
      </div>
    `,
    code: `# Langkah 1: Pastikan Anda berada di branch tujuan (misalnya main)
git switch main

# Langkah 2: Gabungkan perubahan dari branch fitur ke main
git merge feature-navbar

# Output:
# Updating 8f3b14a..a1b2c3d
# Fast-forward
#  navbar.html | 25 +++++++++++++++++++++++++
#  1 file changed, 25 insertions(+)

# Langkah 3: Hapus branch fitur yang sudah selesai di-merge
git branch -d feature-navbar`,
    codeExplanation: [
      'Selalu lakukan "git switch main" sebelum menjalankan "git merge <nama_branch_fitur>".',
      'Fast-forward berarti penggabungan berjalan mulus tanpa konflik.',
      '"git branch -d" membersihkan branch lokal yang sudah tidak digunakan lagi agar repositori tetap rapi.'
    ],
    challenge: {
      instruction: 'Gabungkan perubahan dari branch "feature-login" ke branch aktif saat ini.',
      starterCode: 'git merge feature-login',
      hint: 'Jalankan perintah "git merge feature-login".'
    },
    quiz: {
      question: 'Kapan situasi Merge Conflict terjadi di Git saat menggabungkan dua branch?',
      options: [
        'Ketika terdapat modifikasi yang berbeda pada baris yang sama di file yang sama pada kedua branch',
        'Ketika ukuran file proyek melebihi 100MB',
        'Ketika koneksi internet terputus saat proses merge',
        'Ketika nama author commit berbeda'
      ],
      correctIndex: 0,
      explanation: 'Merge Conflict terjadi ketika Git mendeteksi dua branch mengubah baris kode yang sama dengan teks berbeda dan Git memerlukan keputusan developer untuk memilih versi yang benar.'
    }
  },

  // ── 15. GIT WORKFLOW ─────────────────────────────────────────────────────
  {
    id: 'git-workflow',
    title: 'Git Workflow',
    chapter: 'Git Tutorial',
    chapterId: 'git-chap-tutorial',
    order: 15,
    overview: 'Standar alur kerja kolaborasi Git di industri teknologi: GitHub Flow, GitFlow Enterprise, dan Trunk-Based Development.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-red-500/15 via-orange-500/10 to-transparent p-6 rounded-2xl border border-red-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-red-600 text-white">ALUR KERJA TIM</span>
            <span class="text-xs text-red-600 dark:text-red-400 font-bold uppercase tracking-wider">Materi 15 / 17</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🚀 Standar Git Workflow di Perusahaan Teknologi</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Dalam tim profesional, developer tidak pernah melakukan push langsung ke branch <code>main</code>. Tim menerapkan <strong>Workflow Terstruktur</strong> untuk menjaga stabilitas kode production.
          </p>
        </div>

        <div class="space-y-4">
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100">
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-bold text-emerald-400 text-sm">🌟 1. GitHub Flow (Paling Populer & Modern)</h4>
              <span class="text-xs bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800">CI/CD Friendly</span>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed">
              Cabang <code>main</code> selalu siap dideploy. Developer membuat feature branch &rarr; Buat Pull Request (PR) &rarr; Code Review tim &rarr; Merge ke <code>main</code> &rarr; Deploy otomatis.
            </p>
          </div>

          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100">
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-bold text-sky-400 text-sm">🏛️ 2. GitFlow (Enterprise & Scheduled Releases)</h4>
              <span class="text-xs bg-sky-950 text-sky-300 px-2 py-0.5 rounded border border-sky-800">Multi-Branch Model</span>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed">
              Memiliki branch khusus: <code>main</code> (production), <code>develop</code> (integrasi), <code>feature/*</code>, <code>release/*</code>, dan <code>hotfix/*</code> untuk perbaikan darurat production.
            </p>
          </div>
        </div>
      </div>
    `,
    code: `# Langkah-langkah standar GitHub Flow sehari-hari:
# 1. Pastikan main lokal terupdate dengan server
git switch main
git pull origin main

# 2. Buat branch fitur baru
git switch -c feat-user-profile

# 3. Koding dan commit
git add .
git commit -m "feat: tambahkan halaman profil pengguna"

# 4. Unggah branch ke remote GitHub untuk dibuatkan Pull Request (PR)
git push -u origin feat-user-profile`,
    codeExplanation: [
      '"git pull origin main" mengunduh perubahan terbaru dari tim sebelum Anda mulai membuat branch baru.',
      'Flag "-u" (upstream) pada git push menautkan branch lokal Anda dengan branch di GitHub sehingga berikutnya cukup mengetik "git push".'
    ],
    challenge: {
      instruction: 'Tuliskan perintah untuk mengunggah branch lokal baru ke remote origin dengan flag upstream (-u).',
      starterCode: 'git push -u origin feature-branch',
      hint: 'Gunakan sintaks: git push -u origin <nama_branch>'
    },
    quiz: {
      question: 'Pada alur kerja modern GitHub Flow, apa mekanisme yang digunakan untuk mereview kode bersama tim sebelum digabungkan ke cabang utama?',
      options: [
        'Pull Request (PR) / Merge Request (MR)',
        'Mengirim file .zip melalui email',
        'Langsung melakukan force push ke branch main',
        'Menjalankan git reset --hard'
      ],
      correctIndex: 0,
      explanation: 'Pull Request (PR) memungkinkan tim melakukan peer code review, menjalankan automated testing (CI/CD), dan berdiskusi sebelum kode di-merge ke main.'
    }
  },

  // ── 16. GIT BEST PRACTICES ───────────────────────────────────────────────
  {
    id: 'git-best-practices',
    title: 'Git Best Practices',
    chapter: 'Git Tutorial',
    chapterId: 'git-chap-tutorial',
    order: 16,
    overview: 'Kumpulan prinsip emas dan etika profesional dalam menggunakan Git: Atomic Commits, keamanan credential, pesan deskriptif, dan kebiasaan pull sebelum push.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-red-500/15 via-orange-500/10 to-transparent p-6 rounded-2xl border border-red-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-red-600 text-white">ATURAN EMAS</span>
            <span class="text-xs text-red-600 dark:text-red-400 font-bold uppercase tracking-wider">Materi 16 / 17</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">💎 6 Praktik Terbaik Git Kelas Dunia</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Menguasai perintah Git saja tidak cukup. Menjadi developer profesional berarti memahami etika dan standar kerja terbaik agar riwayat repositori tetap bersih, aman, dan mudah dipelihara.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 space-y-1">
            <div class="text-amber-400 font-bold text-sm">1. Commit Kecil & Sering (Atomic Commits)</div>
            <p class="text-xs text-slate-400 leading-relaxed">Satu commit hanya boleh menyelesaikan satu tugas spesifik. Jangan menimbun perubahan seminggu penuh ke dalam satu commit raksasa.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 space-y-1">
            <div class="text-red-400 font-bold text-sm">2. JANGAN PERNAH Commit File Rahasia</div>
            <p class="text-xs text-slate-400 leading-relaxed">Pastikan file <code>.env</code>, API keys, password database, dan private key selalu terdaftar di <code>.gitignore</code>.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 space-y-1">
            <div class="text-emerald-400 font-bold text-sm">3. Biasakan Pull Sebelum Mulai Bekerja</div>
            <p class="text-xs text-slate-400 leading-relaxed">Selalu jalankan <code>git pull</code> di pagi hari untuk memastikan kode lokal Anda sinkron dengan perubahan rekan satu tim.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 space-y-1">
            <div class="text-sky-400 font-bold text-sm">4. Tulis Pesan Commit yang Menjelaskan 'Mengapa'</div>
            <p class="text-xs text-slate-400 leading-relaxed">Diff sudah menjelaskan 'apa' yang berubah. Pesan commit harus menjelaskan 'mengapa' perubahan itu diperlukan.</p>
          </div>
        </div>
      </div>
    `,
    code: `# Contoh Praktik Terbaik: Meninjau perubahan sebelum membuat commit
git diff --staged

# Menjalankan status untuk verifikasi akhir
git status

# Commit dengan pesan yang jelas dan spesifik
git commit -m "fix(auth): perbaiki validasi token JWT yang expired"`,
    codeExplanation: [
      '"git diff --staged" menampilkan baris kode apa saja yang siap di-commit sehingga Anda bisa mereview pekerjaan sendiri terlebih dahulu.',
      'Menyertakan scope pada pesan commit (contoh: "fix(auth)") memudahkan pembacaan riwayat proyek berskala besar.'
    ],
    challenge: {
      instruction: 'Tinjau baris perubahan kode yang berada di Staging Area menggunakan perintah git diff.',
      starterCode: 'git diff --staged',
      hint: 'Gunakan flag "--staged" atau "--cached" pada perintah git diff.'
    },
    quiz: {
      question: 'Apa yang dimaksud dengan prinsip "Atomic Commit" dalam penggunaan Git profesional?',
      options: [
        'Setiap commit hanya mencakup satu perubahan logis mandiri yang fokus dan dapat diuji secara independen',
        'Melakukan commit hanya sekali dalam sebulan',
        'Menghapus seluruh database sebelum melakukan commit',
        'Menggabungkan seluruh perbaikan bug dan 10 fitur baru ke dalam 1 commit tunggal'
      ],
      correctIndex: 0,
      explanation: 'Atomic Commit berarti memecah pekerjaan menjadi commit-commit kecil yang mandiri sehingga mudah ditelusuri, di-review, dan di-revert jika ditemukan kesalahan.'
    }
  },

  // ── 17. GIT GLOSSARY ─────────────────────────────────────────────────────
  {
    id: 'git-glossary',
    title: 'Git Glossary',
    chapter: 'Git Tutorial',
    chapterId: 'git-chap-tutorial',
    order: 17,
    overview: 'Kamus glosarium istilah-istilah penting Git terlengkap: Repository, Commit, Branch, HEAD, Remote, Origin, Merge, Rebase, Cherry-Pick, dan Fetch.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-red-500/15 via-orange-500/10 to-transparent p-6 rounded-2xl border border-red-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-red-600 text-white">KAMUS LENGKAP</span>
            <span class="text-xs text-red-600 dark:text-red-400 font-bold uppercase tracking-wider">Materi 17 / 17</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📚 Glosarium Istilah Penting Git & GitHub</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Rangkuman kamus referensi cepat untuk memahami seluruh terminologi teknis yang sering ditemui dalam dunia Git dan rekayasa perangkat lunak.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div class="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200">
            <strong class="text-amber-400 font-mono text-sm block mb-1">Repository (Repo)</strong>
            <span>Folder proyek yang dikelola oleh Git yang memuat seluruh file dan riwayat komplit perubahannya.</span>
          </div>
          <div class="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200">
            <strong class="text-emerald-400 font-mono text-sm block mb-1">HEAD</strong>
            <span>Pointer penunjuk khusus yang mengacu pada commit atau branch yang sedang aktif Anda buka saat ini di working directory.</span>
          </div>
          <div class="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200">
            <strong class="text-sky-400 font-mono text-sm block mb-1">Remote & Origin</strong>
            <span><strong>Remote</strong> adalah repositori yang di-hosting di server internet (GitHub). <strong>Origin</strong> adalah nama alias default untuk remote utama Anda.</span>
          </div>
          <div class="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200">
            <strong class="text-purple-400 font-mono text-sm block mb-1">Fetch vs Pull</strong>
            <span><strong>Fetch</strong> mengunduh metadata terbaru dari server tanpa mengubah file lokal Anda. <strong>Pull</strong> mengunduh sekaligus langsung menggabungkannya (fetch + merge).</span>
          </div>
          <div class="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200">
            <strong class="text-pink-400 font-mono text-sm block mb-1">Rebase</strong>
            <span>Memindahkan basis urutan commit cabang fitur ke pucuk teratas branch utama untuk menghasilkan riwayat linear lurus yang rapi.</span>
          </div>
          <div class="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200">
            <strong class="text-teal-400 font-mono text-sm block mb-1">Cherry-Pick</strong>
            <span>Memilih dan menyalin satu commit spesifik dari branch lain untuk diterapkan langsung ke branch aktif saat ini.</span>
          </div>
        </div>
      </div>
    `,
    code: `# Contoh perintah-perintah glosarium:
# 1. Menampilkan nama alias remote dan URL repositorinya
git remote -v

# 2. Mengunduh perubahan terbaru dari remote tanpa otomatis me-merge
git fetch origin

# 3. Menerapkan commit spesifik ke branch aktif (Cherry-Pick)
# git cherry-pick a1b2c3d`,
    codeExplanation: [
      '"git remote -v" menampilkan daftar koneksi server remote beserta URL GitHub/GitLab terkait.',
      '"git fetch origin" sangat berguna untuk melihat apa yang sedang dikerjakan tim di server tanpa mengganggu file kerja Anda.'
    ],
    challenge: {
      instruction: 'Periksa URL remote repositori yang sedang terhubung menggunakan git remote.',
      starterCode: 'git remote -v',
      hint: 'Jalankan "git remote -v" di terminal.'
    },
    quiz: {
      question: 'Apa arti istilah pointer "HEAD" di dalam sistem Git?',
      options: [
        'Pointer penunjuk yang merujuk ke branch atau commit yang sedang aktif dibuka saat ini',
        'Server utama GitHub yang berada di cloud',
        'File konfigurasi rahasia pengguna',
        'Perintah untuk menghapus seluruh riwayat commit'
      ],
      correctIndex: 0,
      explanation: 'HEAD adalah simbol penunjuk (pointer) di Git yang mengindikasikan di mana posisi branch dan commit yang sedang aktif Anda gunakan saat ini.'
    }
  }
];
