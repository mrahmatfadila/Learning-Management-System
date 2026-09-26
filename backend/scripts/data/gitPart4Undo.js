// =========================================================================
// DATA MATERI GIT: BAB 4 - GIT UNDO (6 LESSONS)
// Standar Keselamatan Data, Pro Git Book, GitHub Docs & DevGrow
// =========================================================================

module.exports = [
  // ── 1. GIT REVERT ────────────────────────────────────────────────────────
  {
    id: 'git-revert',
    title: 'Git Revert',
    chapter: 'Git Undo',
    chapterId: 'git-chap-undo',
    order: 1,
    overview: 'Membatalkan dampak commit tertentu secara aman pada branch publik dengan membuat commit pembalik baru tanpa menghapus atau menulis ulang riwayat git.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-rose-500/15 via-pink-500/10 to-transparent p-6 rounded-2xl border border-rose-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-rose-600 text-white">PEMBATALAN AMAN</span>
            <span class="text-xs text-rose-600 dark:text-rose-400 font-bold uppercase tracking-wider">Materi 01 / 06</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⏪ Membatalkan Perubahan dengan Git Revert</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Ketika commit yang mengandung bug sudah terlanjur di-push ke branch publik (seperti <code>main</code>) dan ditarik oleh rekan tim lain, Anda <strong>DILARANG</strong> menghapus riwayat tersebut. Cara yang benar dan 100% aman adalah menggunakan <strong><code>git revert</code></strong>.
          </p>
        </div>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-3">
          <h3 class="text-base font-bold text-amber-400">🧠 Cara Kerja Git Revert</h3>
          <p class="text-xs md:text-sm text-slate-300 leading-relaxed">
            <code>git revert &lt;commit_id&gt;</code> tidak menghapus commit lama dari grafik riwayat. Sebaliknya, Git secara cerdas menganalisis perubahan pada commit tersebut, lalu membuat <strong>satu commit baru</strong> yang isinya membalikkan (inverse) perubahan tersebut secara persis (yang ditambah dihapus, yang dihapus dikembalikan).
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-slate-100 space-y-1">
            <div class="text-emerald-400 font-bold text-sm">✅ Gunakan git revert jika:</div>
            <p class="text-xs text-slate-300 leading-relaxed">Commit sudah pernah di-push ke server GitHub dan sudah diakses oleh developer lain.</p>
          </div>
          <div class="p-4 rounded-xl bg-red-950/30 border border-red-500/40 text-slate-100 space-y-1">
            <div class="text-red-400 font-bold text-sm">⚠️ Gunakan git reset jika:</div>
            <p class="text-xs text-slate-300 leading-relaxed">Commit masih murni bersifat lokal di laptop Anda dan belum pernah di-push ke server.</p>
          </div>
        </div>
      </div>
    `,
    code: `# 1. Lihat log riwayat untuk menemukan ID commit yang bermasalah
git log --oneline -3
# Output:
# c4d5e6f (HEAD -> main) fix: update konfigurasi database server (SALAH KONFIGURASI)
# b2c3d4e feat: tambah halaman katalog produk
# a1b2c3d feat: inisialisasi awal proyek

# 2. Buat commit pembalik untuk membatalkan commit c4d5e6f
git revert c4d5e6f --no-edit

# Output:
# [main e7f8g9h] Revert "fix: update konfigurasi database server"
#  1 file changed, 1 insertion(+), 1 deletion(-)`,
    codeExplanation: [
      '"git revert <commit_id>" menganalisis perbedaan kode dan membuat commit baru dengan pesan otomatis Revert "...".',
      'Flag "--no-edit" menggunakan pesan commit revert default tanpa membuka text editor interaktif.',
      'Riwayat proyek tetap aman dan tim lain bisa langsung melakukan git pull tanpa mengalami konflik riwayat.'
    ],
    challenge: {
      instruction: 'Batalkan commit dengan ID "a1b2c3d" secara aman tanpa membuka editor menggunakan opsi --no-edit.',
      starterCode: 'git revert a1b2c3d --no-edit',
      hint: 'Jalankan "git revert a1b2c3d --no-edit".'
    },
    quiz: {
      question: 'Mengapa "git revert" adalah metode yang paling disarankan untuk membatalkan perubahan pada branch yang sudah di-push ke GitHub?',
      options: [
        'Karena membuat commit baru yang membalikkan perubahan tanpa merusak atau menulis ulang riwayat commit tim',
        'Karena menghapus akun GitHub developer yang membuat bug',
        'Karena mempercepat koneksi internet terminal',
        'Karena mengompres database menjadi file zip'
      ],
      correctIndex: 0,
      explanation: 'Git Revert mempertahankan integritas riwayat kolaborasi tim dengan mencatat pembatalan sebagai commit baru alih-alih menghapus commit masa lalu.'
    }
  },

  // ── 2. GIT RESET ─────────────────────────────────────────────────────────
  {
    id: 'git-reset',
    title: 'Git Reset',
    chapter: 'Git Undo',
    chapterId: 'git-chap-undo',
    order: 2,
    overview: 'Memundurkan pointer HEAD ke commit masa lalu, memahami perbedaan mode --soft, --mixed, dan --hard, serta aturan keselamatan penggunaannya.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-rose-500/15 via-pink-500/10 to-transparent p-6 rounded-2xl border border-rose-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-rose-600 text-white">RESET REPOSITORI</span>
            <span class="text-xs text-rose-600 dark:text-rose-400 font-bold uppercase tracking-wider">Materi 02 / 06</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⏪ 3 Mode Git Reset: Soft, Mixed, Hard</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Perintah <strong><code>git reset</code></strong> memindahkan pointer branch (HEAD) mundur ke titik commit sebelumnya. Git menyediakan 3 mode dengan dampak yang sangat berbeda terhadap file Anda.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div class="p-4 rounded-xl bg-slate-900 border border-emerald-500/40 text-slate-100 space-y-1.5">
            <div class="text-emerald-400 font-bold text-sm">1. --soft (Paling Aman)</div>
            <p class="text-slate-300">Commit dibatalkan, tetapi semua perubahan file <strong>tetap berada di Staging Area</strong> dalam kondisi hijau siap di-commit ulang.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-900 border border-amber-500/40 text-slate-100 space-y-1.5">
            <div class="text-amber-400 font-bold text-sm">2. --mixed (Default)</div>
            <p class="text-slate-300">Commit dibatalkan, file dikeluarkan dari Staging Area dan <strong>kembali ke Working Directory</strong> (status unstaged/merah).</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-900 border border-red-500/50 text-slate-100 space-y-1.5">
            <div class="text-red-400 font-bold text-sm">3. --hard (DESTRUKTIF ⚠️)</div>
            <p class="text-slate-300">Commit dibatalkan dan <strong>seluruh editan file dihapus permanen</strong> seketika! Gunakan hanya jika yakin ingin membuang semua kode.</p>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-red-950/40 border border-red-500/40 text-red-200 text-xs leading-relaxed">
          🚫 <strong>ATURAN EMAS:</strong> Jangan pernah menjalankan <code>git reset --hard</code> pada branch publik yang sudah di-push ke remote, karena akan merusak sinkronisasi repositori seluruh rekan tim Anda!
        </div>
      </div>
    `,
    code: `# Membatalkan 1 commit terakhir tetapi tetap menyimpan file di Staging Area (Soft Reset)
git reset --soft HEAD~1

# Membatalkan 1 commit terakhir dan mengembalikan file ke Working Directory (Mixed Reset)
git reset HEAD~1

# Membatalkan commit dan membuang SELURUH perubahan file secara total (Hard Reset)
# git reset --hard HEAD~1`,
    codeExplanation: [
      '"HEAD~1" berarti mundur 1 commit ke belakang dari posisi commit saat ini.',
      'Soft reset sangat cocok jika Anda ingin menggabungkan beberapa commit lokal atau memperbaiki isi pesan commit dengan tenang.',
      'Hard reset mengembalikan seluruh sistem file persis seperti kondisi pada commit tujuan.'
    ],
    challenge: {
      instruction: 'Batalkan commit terakhir menggunakan mode --soft agar perubahan tetap tersimpan di Staging Area.',
      starterCode: 'git reset --soft HEAD~1',
      hint: 'Jalankan "git reset --soft HEAD~1".'
    },
    quiz: {
      question: 'Opsi flag apa pada perintah "git reset" yang membatalkan commit tetapi tetap menjaga semua baris kode perubahan berada di Staging Area?',
      options: [
        '--soft',
        '--hard',
        '--clean',
        '--delete'
      ],
      correctIndex: 0,
      explanation: 'Flag "--soft" memundurkan pointer commit tetapi mempertahankan seluruh perubahan file di dalam Staging Area (Index).'
    }
  },

  // ── 3. GIT AMEND ─────────────────────────────────────────────────────────
  {
    id: 'git-amend',
    title: 'Git Amend',
    chapter: 'Git Undo',
    chapterId: 'git-chap-undo',
    order: 3,
    overview: 'Memperbaiki commit terakhir secara instan: memperbaiki kesalahan ketik (typo) pada pesan commit atau menyisipkan file yang tertinggal ke commit terakhir.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-rose-500/15 via-pink-500/10 to-transparent p-6 rounded-2xl border border-rose-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-rose-600 text-white">REVISI CEPAT</span>
            <span class="text-xs text-rose-600 dark:text-rose-400 font-bold uppercase tracking-wider">Materi 03 / 06</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">✏️ Memperbaiki Commit Terakhir dengan Amend</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Pernahkah Anda baru saja menekan Enter pada <code>git commit -m "feat: login"</code>, lalu 5 detik kemudian Anda sadar ada 1 file icon yang lupa di-stage atau ada typo pada pesan commit? Jangan buat commit baru terpisah! Gunakan <strong><code>--amend</code></strong>.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-2">
            <h4 class="font-bold text-amber-400 text-sm">📝 Kasus A: Hanya Mengubah Pesan Commit</h4>
            <p class="text-xs text-slate-300 leading-relaxed">
              Jika isi kode sudah benar tetapi Anda ingin memperbaiki typo pesan:
            </p>
            <div class="text-xs font-mono bg-slate-950 p-2.5 rounded text-amber-300">
              git commit --amend -m "feat(auth): perbaiki penulisan pesan commit"
            </div>
          </div>
          <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-2">
            <h4 class="font-bold text-emerald-400 text-sm">📎 Kasus B: Menambahkan File yang Ketinggalan</h4>
            <p class="text-xs text-slate-300 leading-relaxed">
              Stage file yang tertinggal, lalu leburkan ke commit sebelumnya tanpa mengubah pesan:
            </p>
            <div class="text-xs font-mono bg-slate-950 p-2.5 rounded text-emerald-300">
              git add icon.png<br/>
              git commit --amend --no-edit
            </div>
          </div>
        </div>
      </div>
    `,
    code: `# Contoh alur menambahkan file yang ketinggalan ke commit terakhir:
# 1. Masukkan file yang tertinggal ke Staging Area
git add assets/logo.svg

# 2. Sisipkan file tersebut ke dalam commit terakhir tanpa mengubah pesan commit
git commit --amend --no-edit

# Output:
# [main 9d8e7f6] feat: tambahkan komponen header navigasi
#  Date: Fri Aug 28 17:00:00 2026
#  2 files changed, 45 insertions(+)`,
    codeExplanation: [
      'Flag "--amend" mengganti commit terakhir dengan commit baru yang memuat seluruh perubahan baru yang di-stage.',
      'Flag "--no-edit" mempertahankan pesan commit sebelumnya sehingga Anda tidak perlu mengetik ulang pesan.'
    ],
    challenge: {
      instruction: 'Ubah pesan commit terakhir menjadi "docs: update API documentation" menggunakan flag --amend.',
      starterCode: 'git commit --amend -m "docs: update API documentation"',
      hint: 'Gunakan sintaks: git commit --amend -m "pesan baru".'
    },
    quiz: {
      question: 'Flag apa yang ditambahkan pada "git commit --amend" agar pesan commit terakhir tidak berubah saat menyisipkan file baru?',
      options: [
        '--no-edit',
        '--skip-message',
        '--keep-text',
        '--quiet'
      ],
      correctIndex: 0,
      explanation: 'Flag "--no-edit" menginstruksikan Git untuk menggunakan pesan commit yang sudah ada tanpa membuka editor teks.'
    }
  },

  // ── 4. GIT REBASE ────────────────────────────────────────────────────────
  {
    id: 'git-rebase',
    title: 'Git Rebase',
    chapter: 'Git Undo',
    chapterId: 'git-chap-undo',
    order: 4,
    overview: 'Menyelaraskan cabang fitur dengan memindahkan basis commit ke pucuk teratas branch main (Linear History) dan merapikan commit dengan Interactive Rebase.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-rose-500/15 via-pink-500/10 to-transparent p-6 rounded-2xl border border-rose-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-rose-600 text-white">LINEAR HISTORY</span>
            <span class="text-xs text-rose-600 dark:text-rose-400 font-bold uppercase tracking-wider">Materi 04 / 06</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔀 Merapikan Riwayat dengan Git Rebase</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Ada dua cara mengintegrasikan perubahan dari <code>main</code> ke branch fitur Anda: <strong>Git Merge</strong> (membuat Merge Commit bersilang) atau <strong>Git Rebase</strong> (memindahkan titik tolak cabang sehingga menghasilkan garis riwayat linear yang lurus dan sangat rapi).
          </p>
        </div>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-3">
          <h3 class="text-base font-bold text-amber-400">✨ Interactive Rebase (git rebase -i)</h3>
          <p class="text-xs text-slate-300 leading-relaxed">
            Fitur paling populer dari Rebase adalah Interactive Mode. Anda dapat merapikan beberapa commit kecil menjadi satu commit bersih (<strong>Squash</strong>) sebelum membuat Pull Request:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs font-mono">
            <div class="p-2 rounded bg-slate-950 text-emerald-400"><strong>pick:</strong> Pertahankan commit</div>
            <div class="p-2 rounded bg-slate-950 text-sky-400"><strong>squash (s):</strong> Leburkan commit ke commit sebelumnya</div>
            <div class="p-2 rounded bg-slate-950 text-amber-400"><strong>reword (r):</strong> Ubah pesan commit</div>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-red-950/40 border border-red-500/40 text-red-200 text-xs leading-relaxed">
          ⚠️ <strong>Hukum Mutlak Git:</strong> JANGAN PERNAH me-rebase commit yang sudah berada di repositori publik/shared! Hanya gunakan rebase pada feature branch lokal pribadi Anda.
        </div>
      </div>
    `,
    code: `# 1. Pindah ke branch fitur Anda
git switch feature-checkout

# 2. Pindahkan basis branch fitur ke atas commit terbaru branch main
git rebase main

# 3. Menjalankan interactive rebase pada 3 commit terakhir untuk merapikan riwayat
# git rebase -i HEAD~3`,
    codeExplanation: [
      '"git rebase main" memindahkan seluruh commit unik di feature branch seolah-olah baru dibuat dari commit terdepan main.',
      'Hasilnya adalah riwayat commit linear tanpa ada merge commit yang berantakan.'
    ],
    challenge: {
      instruction: 'Pindahkan basis branch fitur aktif saat ini ke pucuk teratas branch main menggunakan git rebase.',
      starterCode: 'git rebase main',
      hint: 'Jalankan "git rebase main".'
    },
    quiz: {
      question: 'Perintah pada Interactive Rebase (git rebase -i) apa yang digunakan untuk menggabungkan beberapa commit kecil menjadi satu commit tunggal?',
      options: [
        'squash (atau s)',
        'drop',
        'exec',
        'break'
      ],
      correctIndex: 0,
      explanation: 'Perintah "squash" meleburkan (merge) perubahan commit tersebut ke commit di atasnya sehingga riwayat menjadi jauh lebih ringkas.'
    }
  },

  // ── 5. GIT REFLOG ────────────────────────────────────────────────────────
  {
    id: 'git-reflog',
    title: 'Git Reflog',
    chapter: 'Git Undo',
    chapterId: 'git-chap-undo',
    order: 5,
    overview: 'Mengenal Reference Log (Reflog) sebagai buku catatan harian terlengkap Git yang merekam setiap detak perpindahan pointer HEAD lokal untuk menyelamatkan commit yang hilang.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-rose-500/15 via-pink-500/10 to-transparent p-6 rounded-2xl border border-rose-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-rose-600 text-white">JATUH & SELAMAT</span>
            <span class="text-xs text-rose-600 dark:text-rose-400 font-bold uppercase tracking-wider">Materi 05 / 06</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛡️ Git Reflog: Jaring Penyelamat Terakhir</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Pernahkah Anda tidak sengaja menjalankan <code>git reset --hard</code> atau menghapus branch yang ternyata masih dibutuhkan? Jangan panik! Di Git, <strong>hampir tidak ada commit yang benar-benar hilang</strong> selama tersimpan di <strong><code>git reflog</code></strong>.
          </p>
        </div>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-3">
          <h3 class="text-base font-bold text-emerald-400">📖 Apa Perbedaan Git Log vs Git Reflog?</h3>
          <ul class="space-y-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <li><strong>git log:</strong> Hanya menampilkan riwayat commit yang berada di jalur branch aktif saat ini.</li>
            <li><strong>git reflog:</strong> Menampilkan <em>diary</em> kronologis lengkap setiap aksi lokal yang memindahkan pointer HEAD (commit, checkout, switch, rebase, merge, reset, dll).</li>
          </ul>
        </div>
      </div>
    `,
    code: `# Melihat buku catatan kronologis perpindahan pointer HEAD lokal Anda
git reflog

# Output Terminal:
# 9a8b7c6 (HEAD -> main) HEAD@{0}: reset: moving to HEAD~1
# f5e4d3c HEAD@{1}: commit: feat: implementasi payment gateway Stripe
# a1b2c3d HEAD@{2}: checkout: moving from feature-auth to main`,
    codeExplanation: [
      '"HEAD@{0}" adalah posisi pointer Anda saat ini.',
      '"HEAD@{1}" adalah posisi tepat 1 langkah sebelum aksi terakhir Anda.',
      'Dengan melihat SHA hash (seperti f5e4d3c), Anda dapat mengembalikan kondisi proyek ke titik mana pun di masa lalu.'
    ],
    challenge: {
      instruction: 'Buka catatan kronologis perpindahan HEAD lokal menggunakan perintah git reflog.',
      starterCode: 'git reflog',
      hint: 'Ketik "git reflog" di terminal.'
    },
    quiz: {
      question: 'Informasi apa yang dicatat di dalam "git reflog"?',
      options: [
        'Catatan kronologis setiap perpindahan pointer HEAD lokal di komputer Anda, termasuk aksi reset, commit, switch branch, dan rebase',
        'Daftar password user GitHub',
        'Ukuran RAM komputer pengguna',
        'Daftar file yang diabaikan di .gitignore'
      ],
      correctIndex: 0,
      explanation: 'Reflog mencatat seluruh histori perpindahan pointer HEAD lokal sehingga memudahkan pemulihan commit yang terhapus.'
    }
  },

  // ── 6. GIT RECOVERY ──────────────────────────────────────────────────────
  {
    id: 'git-recovery',
    title: 'Git Recovery',
    chapter: 'Git Undo',
    chapterId: 'git-chap-undo',
    order: 6,
    overview: 'Langkah praktis memulihkan commit yang hilang, menyelamatkan branch yang terlanjur dihapus, dan mengembalikan file terhapus menggunakan kombinasi reflog dan git restore.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-rose-500/15 via-pink-500/10 to-transparent p-6 rounded-2xl border border-rose-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-rose-600 text-white">RECOVERY MASTER</span>
            <span class="text-xs text-rose-600 dark:text-rose-400 font-bold uppercase tracking-wider">Materi 06 / 06</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🚑 Skenario Pemulihan Proyek (Disaster Recovery)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Berikut adalah resep penyelamatan darurat untuk 3 skenario bencana yang paling sering dihadapi oleh pengembang perangkat lunak.
          </p>
        </div>

        <div class="space-y-4">
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100">
            <div class="text-emerald-400 font-bold text-sm mb-1">🚨 Skenario 1: Salah Menjalankan "git reset --hard"</div>
            <p class="text-xs text-slate-300 leading-relaxed mb-2">
              Jalankan <code>git reflog</code>, temukan titik sebelum reset (misal <code>HEAD@{1}</code>), lalu kembalikan seketika:
            </p>
            <div class="text-xs bg-slate-950 p-2.5 rounded font-mono text-emerald-300">
              git reset --hard HEAD@{1}
            </div>
          </div>

          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100">
            <div class="text-sky-400 font-bold text-sm mb-1">🚨 Skenario 2: Tidak Sengaja Menghapus Branch (git branch -D)</div>
            <p class="text-xs text-slate-300 leading-relaxed mb-2">
              Temukan SHA commit terakhir dari branch tersebut di reflog (misal <code>f5e4d3c</code>), lalu buat kembali branch di titik tersebut:
            </p>
            <div class="text-xs bg-slate-950 p-2.5 rounded font-mono text-sky-300">
              git switch -c branch-yang-hilang f5e4d3c
            </div>
          </div>

          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100">
            <div class="text-amber-400 font-bold text-sm mb-1">🚨 Skenario 3: Mengembalikan File yang Terhapus di Working Directory</div>
            <p class="text-xs text-slate-300 leading-relaxed mb-2">
              Jika file tidak sengaja terhapus di folder kerja dan belum di-commit:
            </p>
            <div class="text-xs bg-slate-950 p-2.5 rounded font-mono text-amber-300">
              git restore nama-file-yang-terhapus.js
            </div>
          </div>
        </div>
      </div>
    `,
    code: `# 1. Contoh memulihkan file yang terhapus secara instan
git restore app.js

# 2. Contoh memulihkan branch yang tidak sengaja terhapus ke titik commit di reflog
git switch -c feature-restored HEAD@{2}`,
    codeExplanation: [
      '"git restore <file>" mengembalikan isi file yang belum di-stage ke kondisi commit terakhir.',
      '"git switch -c <nama> <SHA/HEAD@{n}>" membangkitkan kembali branch utuh pada posisi commit yang dipilih.'
    ],
    challenge: {
      instruction: 'Pulihkan file index.html yang tidak sengaja terhapus menggunakan perintah git restore.',
      starterCode: 'git restore index.html',
      hint: 'Jalankan "git restore index.html".'
    },
    quiz: {
      question: 'Bagaimana cara membangkitkan kembali sebuah branch yang terlanjur dihapus dengan "git branch -D" setelah kita menemukan commit SHA-nya di reflog?',
      options: [
        'git switch -c <nama_branch_baru> <commit_SHA>',
        'git delete origin',
        'git init --force',
        'git commit --destroy'
      ],
      correctIndex: 0,
      explanation: '"git switch -c <nama_branch> <commit_SHA>" membuat branch baru yang langsung mengacu pada titik commit tersebut, memulihkan seluruh riwayat branch yang hilang.'
    }
  }
];
