// =========================================================================
// DATA MATERI GIT: BAB 5 - GIT ADVANCED (10 LESSONS)
// Standar Enterprise DevOps, Pro Git Book, GitHub Actions & DevGrow
// =========================================================================

module.exports = [
  // ── 1. GIT .GITIGNORE ────────────────────────────────────────────────────
  {
    id: 'git-gitignore-adv',
    title: 'Git .gitignore',
    chapter: 'Git Advanced',
    chapterId: 'git-chap-advanced',
    order: 1,
    overview: 'Menguasai pola pencocokan .gitignore tingkat lanjut (wildcard, negasi, direktori), serta trik membersihkan cache file yang sudah terlanjur ter-track.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-violet-500/15 via-purple-500/10 to-transparent p-6 rounded-2xl border border-violet-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-violet-600 text-white">GIT ADVANCED</span>
            <span class="text-xs text-violet-600 dark:text-violet-400 font-bold uppercase tracking-wider">Materi 01 / 10</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛡️ Pola Pencocokan Tingkat Lanjut .gitignore</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            File <strong><code>.gitignore</code></strong> mendukung sintaks pencocokan pola glob yang sangat fleksibel untuk mengabaikan file build, file binary, log, dan kredensial sensitif.
          </p>
        </div>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-3">
          <h3 class="text-base font-bold text-amber-400">📋 Aturan Sintaks & Pola Glob</h3>
          <div class="space-y-2 text-xs font-mono">
            <div class="p-2.5 rounded bg-slate-950 text-slate-300"><span class="text-sky-400 font-bold">*.log</span> : Mengabaikan semua file berakhiran .log di semua folder.</div>
            <div class="p-2.5 rounded bg-slate-950 text-slate-300"><span class="text-sky-400 font-bold">build/</span> : Mengabaikan seluruh folder bernama "build" beserta isinya.</div>
            <div class="p-2.5 rounded bg-slate-950 text-slate-300"><span class="text-sky-400 font-bold">!build/special.js</span> : Simbol seru (<strong>!</strong>) adalah <em>negasi</em> (tetap lacak file ini meskipun folder build diabaikan).</div>
            <div class="p-2.5 rounded bg-slate-950 text-slate-300"><span class="text-sky-400 font-bold">**/logs</span> : Mencocokkan folder "logs" di kedalaman direktori manapun.</div>
          </div>
        </div>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-red-500/40 space-y-2">
          <h4 class="font-bold text-red-400 text-sm">🚨 Trik Membersihkan File yang Terlanjur Ter-Track</h4>
          <p class="text-xs text-slate-300 leading-relaxed">
            Jika Anda baru menambahkan file ke <code>.gitignore</code> setelah file tersebut pernah di-commit, Git akan tetap melacaknya. Cara membersihkan cache pelacakannya:
          </p>
          <div class="text-xs bg-slate-950 p-2.5 rounded font-mono text-emerald-400">
            git rm -r --cached .<br/>
            git add .<br/>
            git commit -m "chore: bersihkan cache file yang di-ignore"
          </div>
        </div>
      </div>
    `,
    code: `# Menghapus file sensitif dari pelacakan Git tanpa menghapus file fisiknya di disk
git rm --cached .env

# Membersihkan seluruh cache index agar aturan .gitignore baru langsung berlaku
git rm -r --cached .
git add .
git commit -m "chore: terapkan aturan .gitignore terbaru"`,
    codeExplanation: [
      'Flag "--cached" menghapus file dari Staging Area/Index Git, namun membiarkan file aslinya tetap aman di hard disk lokal Anda.',
      'Kombinasi "git rm -r --cached . && git add ." memperbarui seluruh status file sesuai isi .gitignore terkini.'
    ],
    challenge: {
      instruction: 'Hapus file .env dari pelacakan Git tanpa menghapus file fisiknya menggunakan opsi --cached.',
      starterCode: 'git rm --cached .env',
      hint: 'Jalankan "git rm --cached .env".'
    },
    quiz: {
      question: 'Simbol apa yang digunakan pada file .gitignore sebagai aturan negasi (mengecualikan file agar tetap dilacak)?',
      options: [
        'Tanda seru ( ! )',
        'Tanda bintang ( * )',
        'Tanda pagar ( # )',
        'Tanda tanya ( ? )'
      ],
      correctIndex: 0,
      explanation: 'Tanda seru (!) di awal baris pada .gitignore berfungsi sebagai negasi untuk memaksa Git tetap melacak file tertentu meskipun berada dalam folder yang diabaikan.'
    }
  },

  // ── 2. GIT .GITATTRIBUTES ────────────────────────────────────────────────
  {
    id: 'git-gitattributes',
    title: 'Git .gitattributes',
    chapter: 'Git Advanced',
    chapterId: 'git-chap-advanced',
    order: 2,
    overview: 'Menangani standarisasi Line Endings (CRLF Windows vs LF Unix), konfigurasi bahasa repositori di GitHub, dan pengaturan file binary.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-violet-500/15 via-purple-500/10 to-transparent p-6 rounded-2xl border border-violet-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-violet-600 text-white">FILE ATTRIBUTES</span>
            <span class="text-xs text-violet-600 dark:text-violet-400 font-bold uppercase tracking-wider">Materi 02 / 10</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚙️ Standardisasi Format dengan .gitattributes</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Masalah paling klasik saat developer Windows dan Mac/Linux bekerja bersama adalah perbedaan <strong>Line Endings</strong>: Windows menggunakan <code>CRLF (\\r\\n)</code> sedangkan Linux/macOS menggunakan <code>LF (\\n)</code>. File <strong><code>.gitattributes</code></strong> menyatukan standar ini secara permanen.
          </p>
        </div>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-3">
          <h3 class="text-base font-bold text-amber-400">📄 Contoh Konfigurasi Standar .gitattributes</h3>
          <div class="text-xs bg-slate-950 p-3 rounded font-mono text-slate-300 space-y-1">
            <div class="text-slate-500"># Otomatis standarisasi teks line endings menjadi LF di repository</div>
            <div class="text-emerald-400">* text=auto eol=lf</div>
            <div class="text-slate-500 mt-2"># Pastikan script shell selalu berformat LF (Linux)</div>
            <div class="text-sky-400">*.sh text eol=lf</div>
            <div class="text-slate-500 mt-2"># Perlakukan file gambar/font sebagai binary murni (hindari korupsi konversi)</div>
            <div class="text-amber-400">*.png binary</div>
            <div class="text-amber-400">*.jpg binary</div>
          </div>
        </div>
      </div>
    `,
    code: `# Membuat file .gitattributes dengan standardisasi LF line ending
echo "* text=auto eol=lf" > .gitattributes
git add .gitattributes
git commit -m "chore: standarisasi line endings LF via .gitattributes"`,
    codeExplanation: [
      '"* text=auto eol=lf" memastikan Git secara otomatis mengonversi line endings menjadi LF saat commit disimpan ke repositori.',
      'Ini mencegah munculnya warning "LF will be replaced by CRLF" dan mencegah diff konflik palsu di seluruh baris file.'
    ],
    challenge: {
      instruction: 'Tambahkan file .gitattributes ke Staging Area.',
      starterCode: 'git add .gitattributes',
      hint: 'Jalankan "git add .gitattributes".'
    },
    quiz: {
      question: 'Masalah utama apa yang diatasi oleh konfigurasi "* text=auto eol=lf" di dalam file .gitattributes?',
      options: [
        'Perbedaan format baris baru (Line Endings) antara pengguna sistem operasi Windows (CRLF) dan Linux/macOS (LF)',
        'Membatasi ukuran upload file ke server',
        'Mengubah lisensi software menjadi MIT',
        'Mempercepat kecepatan download internet'
      ],
      correctIndex: 0,
      explanation: 'File .gitattributes menyelaraskan karakter line ending (CRLF vs LF) agar tidak terjadi konflik diff baris ketika dikerjakan lintas sistem operasi berbeda.'
    }
  },

  // ── 3. GIT LARGE FILE STORAGE (LFS) ──────────────────────────────────────
  {
    id: 'git-lfs',
    title: 'Git Large File Storage (LFS)',
    chapter: 'Git Advanced',
    chapterId: 'git-chap-advanced',
    order: 3,
    overview: 'Mengelola file berukuran raksasa (video, audio, model AI, file PSD/ZIP) di Git tanpa membuat ukuran repositori membengkak menggunakan Git LFS.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-violet-500/15 via-purple-500/10 to-transparent p-6 rounded-2xl border border-violet-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-violet-600 text-white">LARGE FILES</span>
            <span class="text-xs text-violet-600 dark:text-violet-400 font-bold uppercase tracking-wider">Materi 03 / 10</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🐘 Git Large File Storage (LFS)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            GitHub membatasi ukuran file maksimal 100MB per file dan menolak push jika melebihi batas ini. <strong>Git LFS</strong> menggantikan file raksasa di repositori dengan <em>pointer teks kecil berukuran beberapa byte</em>, sedangkan file fisiknya disimpan di storage cloud terpisah.
          </p>
        </div>

        <div class="space-y-3">
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100">
            <div class="text-emerald-400 font-bold text-sm mb-1">Langkah 1: Inisialisasi Git LFS di komputer Anda</div>
            <div class="text-xs font-mono bg-slate-950 p-2 rounded text-emerald-300">git lfs install</div>
          </div>
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100">
            <div class="text-sky-400 font-bold text-sm mb-1">Langkah 2: Tentukan ekstensi file besar yang ingin dilacak</div>
            <div class="text-xs font-mono bg-slate-950 p-2 rounded text-sky-300">git lfs track "*.psd" "*.mp4" "*.onnx"</div>
            <p class="text-xs text-slate-400 mt-1">Perintah ini akan otomatis mencatat aturan ke file <code>.gitattributes</code>.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100">
            <div class="text-amber-400 font-bold text-sm mb-1">Langkah 3: Commit dan Push seperti biasa</div>
            <div class="text-xs font-mono bg-slate-950 p-2 rounded text-amber-300">git add .gitattributes && git commit -m "chore: track LFS files"</div>
          </div>
        </div>
      </div>
    `,
    code: `# 1. Mengaktifkan Git LFS pada repositori lokal
git lfs install

# 2. Melacak semua file video MP4 dan model AI ONNX dengan LFS
git lfs track "*.mp4"
git lfs track "*.onnx"

# 3. Memeriksa daftar file yang aktif dilacak oleh LFS
git lfs ls-files`,
    codeExplanation: [
      '"git lfs install" mendaftarkan filter hooks LFS ke sistem Git Anda.',
      '"git lfs track" mencatat pola file ke dalam .gitattributes agar Git mengunggahnya ke server LFS khusus.',
      '"git lfs ls-files" menampilkan file binary apa saja yang saat ini dikelola oleh LFS.'
    ],
    challenge: {
      instruction: 'Aktifkan filter Git LFS di komputer lokal Anda menggunakan perintah git lfs install.',
      starterCode: 'git lfs install',
      hint: 'Jalankan "git lfs install".'
    },
    quiz: {
      question: 'Bagaimana cara Git LFS mengelola file binary raksasa di dalam repositori kode?',
      options: [
        'Menggantikan file besar di riwayat repositori dengan file penunjuk (pointer teks kecil) dan menyimpan file aslinya di storage terpisah',
        'Mengompres file menjadi resolusi rendah',
        'Menghapus file tersebut secara permanen',
        'Mengubah file video menjadi file teks HTML'
      ],
      correctIndex: 0,
      explanation: 'Git LFS hanya menyimpan metadata pointer teks ringan di repositori Git utama sehingga proses clone dan fetch tetap super cepat dan ringan.'
    }
  },

  // ── 4. GIT SIGNING COMMITS/TAGS ──────────────────────────────────────────
  {
    id: 'git-signing-commits-tags',
    title: 'Git Signing Commits/Tags',
    chapter: 'Git Advanced',
    chapterId: 'git-chap-advanced',
    order: 4,
    overview: 'Mendapatkan badge hijau Verified di GitHub menggunakan tanda tangan kriptografi GPG atau SSH Key Signing untuk menjamin keaslian identitas pembuat commit.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-violet-500/15 via-purple-500/10 to-transparent p-6 rounded-2xl border border-violet-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-violet-600 text-white">KRIPTOGRAFI</span>
            <span class="text-xs text-violet-600 dark:text-violet-400 font-bold uppercase tracking-wider">Materi 04 / 10</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔒 Menandatangani Commit (Verified Badge)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Secara default, siapapun bisa memalsukan identitas nama dan email orang lain di Git (impersonation). Untuk membuktikan bahwa commit tersebut 100% dibuat oleh Anda yang sah, gunakan <strong>Tanda Tangan Kriptografi (Commit Signing)</strong>.
          </p>
        </div>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-3">
          <h3 class="text-base font-bold text-emerald-400">✨ Cara Termudah: SSH Commit Signing (Git 2.34+)</h3>
          <p class="text-xs text-slate-300 leading-relaxed">
            Anda tidak perlu lagi repot membuat GPG Key yang rumit. Anda bisa langsung menggunakan kunci SSH yang sudah Anda miliki untuk menandatangani commit:
          </p>
          <div class="text-xs bg-slate-950 p-3 rounded font-mono text-emerald-300 space-y-1">
            <div>git config --global gpg.format ssh</div>
            <div>git config --global user.signingkey ~/.ssh/id_ed25519.pub</div>
            <div>git config --global commit.gpgsign true</div>
          </div>
          <p class="text-xs text-slate-400">
            Setelah ini, setiap commit Anda akan otomatis bertanda tangan dan mendapatkan lencana hijau <strong>Verified</strong> di GitHub!
          </p>
        </div>
      </div>
    `,
    code: `# Melakukan commit manual dengan flag tanda tangan (-S)
git commit -S -m "feat(security): implementasikan enkripsi data pengguna"

# Mengonfigurasi Git agar SEMUA commit otomatis ditandatangani secara default
git config --global commit.gpgsign true`,
    codeExplanation: [
      'Flag "-S" menandatangani commit menggunakan kunci kriptografi aktif.',
      '"commit.gpgsign true" memastikan Anda tidak perlu mengetikkan flag -S manual di setiap commit.'
    ],
    challenge: {
      instruction: 'Aktifkan penandatanganan commit otomatis secara global dengan commit.gpgsign true.',
      starterCode: 'git config --global commit.gpgsign true',
      hint: 'Jalankan "git config --global commit.gpgsign true".'
    },
    quiz: {
      question: 'Apa fungsi utama dari menandatangani commit dengan GPG atau SSH Key Signing di GitHub?',
      options: [
        'Membuktikan keaslian identitas pembuat commit dan mencegah pemalsuan author (impersonation), ditandai dengan badge "Verified"',
        'Mengunci file agar tidak bisa dibaca oleh siapapun',
        'Mengubah kode menjadi bahasa C++',
        'Mempercepat proses render website di browser'
      ],
      correctIndex: 0,
      explanation: 'Commit Signing membuktikan secara matematis bahwa commit tersebut benar-benar dibuat oleh pemilik kunci privat yang sah.'
    }
  },

  // ── 5. GIT CHERRYPICK & PATCH ────────────────────────────────────────────
  {
    id: 'git-cherrypick-patch',
    title: 'Git Cherrypick & Patch',
    chapter: 'Git Advanced',
    chapterId: 'git-chap-advanced',
    order: 5,
    overview: 'Menyalin satu commit spesifik dari cabang lain tanpa me-merge seluruh branch dengan git cherry-pick, serta membuat file patch portabel.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-violet-500/15 via-purple-500/10 to-transparent p-6 rounded-2xl border border-violet-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-violet-600 text-white">CHERRY PICK & PATCH</span>
            <span class="text-xs text-violet-600 dark:text-violet-400 font-bold uppercase tracking-wider">Materi 05 / 10</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🍒 Memetik Commit dengan Git Cherry-Pick</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Bayangkan ada perbaikan bug kritis di branch <code>experimental-v3</code>, tetapi branch tersebut memuat 50 commit lain yang belum siap di-merge ke <code>main</code>. Anda hanya butuh 1 commit bugfix tersebut! Solusinya: <strong>Git Cherry-Pick</strong>.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-2">
            <h4 class="font-bold text-emerald-400 text-sm">🍒 1. Git Cherry-Pick</h4>
            <p class="text-xs text-slate-300 leading-relaxed">
              Memetik satu SHA commit spesifik dari branch manapun dan langsung menerapkannya sebagai commit baru di branch yang sedang aktif Anda buka.
            </p>
          </div>
          <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-2">
            <h4 class="font-bold text-sky-400 text-sm">🩹 2. Git Patch (File .patch)</h4>
            <p class="text-xs text-slate-300 leading-relaxed">
              Mengekspor perbedaan commit menjadi file teks <code>.patch</code> mandiri yang bisa dikirimkan lewat email/chat untuk diterapkan dengan <code>git apply</code>.
            </p>
          </div>
        </div>
      </div>
    `,
    code: `# 1. Pastikan Anda berada di branch tujuan (misal main)
git switch main

# 2. Petik commit perbaikan spesifik (SHA: 7a8b9c0) dari branch lain
git cherry-pick 7a8b9c0

# Output:
# [main e1f2a3b] fix: perbaiki kebocoran memori pada koneksi database
#  Date: Fri Aug 28 17:00:00 2026
#  1 file changed, 12 insertions(+), 3 deletions(-)

# 3. Membuat file patch dari 1 commit terakhir
# git format-patch -1 HEAD`,
    codeExplanation: [
      '"git cherry-pick <SHA>" menyalin perubahan yang ada pada commit tersebut dan otomatis membuat commit baru di branch aktif Anda.',
      'Sangat berguna untuk porting hotfix darurat antar branch rilis.'
    ],
    challenge: {
      instruction: 'Petik commit dengan SHA "7a8b9c0" ke branch aktif saat ini menggunakan git cherry-pick.',
      starterCode: 'git cherry-pick 7a8b9c0',
      hint: 'Jalankan "git cherry-pick 7a8b9c0".'
    },
    quiz: {
      question: 'Kapan skenario terbaik untuk menggunakan perintah "git cherry-pick"?',
      options: [
        'Ketika kita hanya ingin mengambil satu commit perbaikan bug tertentu dari branch eksperimental tanpa menggabungkan seluruh branch tersebut',
        'Ketika ingin menghapus seluruh repositori',
        'Ketika ingin mengubah email GitHub',
        'Ketika ingin menginstal ulang sistem operasi'
      ],
      correctIndex: 0,
      explanation: 'Cherry-pick dirancang khusus untuk memetik dan menyalin commit tertentu secara selektif dari satu branch ke branch lain.'
    }
  },

  // ── 6. GIT MERGE CONFLICTS ───────────────────────────────────────────────
  {
    id: 'git-merge-conflicts-adv',
    title: 'Git Merge Conflicts',
    chapter: 'Git Advanced',
    chapterId: 'git-chap-advanced',
    order: 6,
    overview: 'Teknik mendalam menyelesaikan konflik penggabungan cabang tingkat lanjut, strategi checkout ours vs theirs, dan membatalkan merge dengan tenang.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-violet-500/15 via-purple-500/10 to-transparent p-6 rounded-2xl border border-violet-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-violet-600 text-white">RESOLUSI KONFLIK</span>
            <span class="text-xs text-violet-600 dark:text-violet-400 font-bold uppercase tracking-wider">Materi 06 / 10</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">💥 Resolusi Merge Conflict Tingkat Lanjut</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Saat terjadi konflik pada puluhan file sekaligus, menyelesaikan satu per satu secara manual bisa melelahkan. Git menyediakan strategi otomatis untuk mempercepat resolusi.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 space-y-1">
            <div class="font-mono text-emerald-400 font-bold mb-1">git checkout --ours &lt;file&gt;</div>
            <p class="text-slate-300">Pilih secara mutlak versi kode milik branch Anda saat ini (abaikan editan branch yang di-merge).</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 space-y-1">
            <div class="font-mono text-sky-400 font-bold mb-1">git checkout --theirs &lt;file&gt;</div>
            <p class="text-slate-300">Pilih secara mutlak versi kode milik branch lawan yang sedang dimasukkan.</p>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-red-950/40 border border-red-500/40 text-red-200 text-xs leading-relaxed">
          🛑 <strong>Tombol Darurat (Batal Merge):</strong> Jika proses merge terlalu kacau dan Anda ingin kembali ke kondisi bersih sebelum merge dimulai:
          <div class="mt-1 font-mono text-emerald-400 font-bold text-sm">git merge --abort</div>
        </div>
      </div>
    `,
    code: `# Membatalkan proses merge yang sedang berkonflik dan kembali ke kondisi awal
git merge --abort

# Menyelesaikan konflik pada file konfigurasi dengan memilih versi branch kita (--ours)
# git checkout --ours config/settings.json
# git add config/settings.json
# git commit -m "fix(merge): selesaikan konflik menggunakan konfigurasi ours"`,
    codeExplanation: [
      '"git merge --abort" membersihkan seluruh penanda konflik dan mengembalikan working directory persis ke kondisi sebelum perintah git merge dijalankan.'
    ],
    challenge: {
      instruction: 'Batalkan proses merge yang sedang berkonflik menggunakan perintah git merge --abort.',
      starterCode: 'git merge --abort',
      hint: 'Jalankan "git merge --abort".'
    },
    quiz: {
      question: 'Perintah apa yang digunakan untuk membatalkan proses merge yang sedang berkonflik dan mengembalikan repositori ke kondisi sebelum merge dimulai?',
      options: [
        'git merge --abort',
        'git merge --delete',
        'git stop merge',
        'git remove conflict'
      ],
      correctIndex: 0,
      explanation: '"git merge --abort" menghentikan proses merge dan mengembalikan kondisi working tree ke titik sebelum merge dipanggil.'
    }
  },

  // ── 7. GIT CI/CD ─────────────────────────────────────────────────────────
  {
    id: 'git-ci-cd',
    title: 'Git CI/CD',
    chapter: 'Git Advanced',
    chapterId: 'git-chap-advanced',
    order: 7,
    overview: 'Mengotomasi Continuous Integration & Continuous Deployment menggunakan GitHub Actions, membuat workflow YAML otomatis untuk testing dan auto-deploy.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-violet-500/15 via-purple-500/10 to-transparent p-6 rounded-2xl border border-violet-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-violet-600 text-white">DEVOPS OTOMASI</span>
            <span class="text-xs text-violet-600 dark:text-violet-400 font-bold uppercase tracking-wider">Materi 07 / 10</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🤖 Otomasi CI/CD dengan GitHub Actions</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <strong>CI/CD (Continuous Integration / Continuous Deployment)</strong> mengotomasi proses build, pengujian unit test otomatis, linter kode, hingga deployment ke server setiap kali ada developer yang melakukan <code>git push</code> atau membuka Pull Request.
          </p>
        </div>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-3">
          <h3 class="text-base font-bold text-amber-400">📄 Struktur File Workflow (.github/workflows/ci.yml)</h3>
          <div class="text-xs bg-slate-950 p-3 rounded font-mono text-slate-300 space-y-1">
            <div class="text-purple-400">name: Node.js CI</div>
            <div class="text-sky-400">on: [push, pull_request]</div>
            <div class="text-emerald-400">jobs:</div>
            <div class="text-slate-300">&nbsp;&nbsp;build-and-test:</div>
            <div class="text-slate-300">&nbsp;&nbsp;&nbsp;&nbsp;runs-on: ubuntu-latest</div>
            <div class="text-slate-300">&nbsp;&nbsp;&nbsp;&nbsp;steps:</div>
            <div class="text-slate-300">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- uses: actions/checkout@v4</div>
            <div class="text-slate-300">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- name: Install Dependencies</div>
            <div class="text-slate-300">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;run: npm ci</div>
            <div class="text-slate-300">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- name: Run Automated Tests</div>
            <div class="text-slate-300">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;run: npm test</div>
          </div>
        </div>
      </div>
    `,
    code: `# Struktur folder konfigurasi GitHub Actions di root proyek:
# .github/
#   workflows/
#     ci.yml

git add .github/workflows/ci.yml
git commit -m "ci: tambahkan automated testing workflow GitHub Actions"
git push origin main`,
    codeExplanation: [
      'GitHub akan secara otomatis mendeteksi file ".yml" di dalam folder ".github/workflows/" dan mengeksekusinya di server Linux cloud setiap kali ada push.'
    ],
    challenge: {
      instruction: 'Lakukan staging pada file workflow CI menggunakan git add.',
      starterCode: 'git add .github/workflows/ci.yml',
      hint: 'Jalankan "git add .github/workflows/ci.yml".'
    },
    quiz: {
      question: 'Di folder mana file konfigurasi alur kerja otomasi GitHub Actions (YAML) harus diletakkan di dalam repositori proyek?',
      options: [
        '.github/workflows/',
        '.git/actions/',
        'config/ci/',
        'system/github/'
      ],
      correctIndex: 0,
      explanation: 'GitHub Actions secara otomatis mencari file konfigurasi workflow YAML di dalam direktori .github/workflows/.'
    }
  },

  // ── 8. GIT HOOKS ─────────────────────────────────────────────────────────
  {
    id: 'git-hooks',
    title: 'Git Hooks',
    chapter: 'Git Advanced',
    chapterId: 'git-chap-advanced',
    order: 8,
    overview: 'Membuat skrip otomasi lokal dengan Git Hooks (pre-commit, post-commit) untuk mencegah commit file rahasia, auto-formatting kode, dan integrasi Husky.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-violet-500/15 via-purple-500/10 to-transparent p-6 rounded-2xl border border-violet-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-violet-600 text-white">SKRIP OTOMASI LOKAL</span>
            <span class="text-xs text-violet-600 dark:text-violet-400 font-bold uppercase tracking-wider">Materi 08 / 10</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🪝 Otomasi dengan Git Hooks</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <strong>Git Hooks</strong> adalah skrip yang dieksekusi secara otomatis oleh Git sebelum atau sesudah peristiwa penting terjadi (seperti commit, push, atau receive). Disimpan di folder lokal <code>.git/hooks/</code>.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 space-y-1">
            <div class="text-amber-400 font-bold text-sm">🪝 1. pre-commit Hook</div>
            <p class="text-slate-300">Dijalankan tepat sebelum commit dibuat. Sangat berguna untuk menjalankan ESLint / Prettier dan menolak commit jika ada error sintaks atau jika ada file <code>.env</code> yang tidak sengaja ter-stage!</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 space-y-1">
            <div class="text-emerald-400 font-bold text-sm">🐶 2. Husky (Modern Node.js Hook Manager)</div>
            <p class="text-slate-300">Karena folder <code>.git/hooks</code> tidak ikut ter-push ke GitHub, developer modern menggunakan library <strong>Husky</strong> agar seluruh anggota tim otomatis memiliki hook yang sama.</p>
          </div>
        </div>
      </div>
    `,
    code: `# Contoh melihat contoh script hooks bawaan Git di folder lokal:
ls -la .git/hooks

# Output:
# pre-commit.sample
# pre-push.sample
# commit-msg.sample`,
    codeExplanation: [
      'Menghapus akhiran ".sample" pada file di dalam folder .git/hooks akan langsung mengaktifkan script hook tersebut.'
    ],
    challenge: {
      instruction: 'Periksa isi direktori hooks lokal Git menggunakan perintah ls.',
      starterCode: 'ls -la .git/hooks',
      hint: 'Jalankan "ls -la .git/hooks".'
    },
    quiz: {
      question: 'Hook Git mana yang berjalan tepat sebelum commit dibuat dan sering digunakan untuk memvalidasi formatting kode serta mencegah commit file rahasia?',
      options: [
        'pre-commit',
        'post-merge',
        'pre-rebase',
        'post-receive'
      ],
      correctIndex: 0,
      explanation: 'pre-commit hook dieksekusi sebelum commit disimpan. Jika skrip menghasilkan exit code bukan nol (error), maka proses commit akan dibatalkan.'
    }
  },

  // ── 9. GIT SUBMODULES ────────────────────────────────────────────────────
  {
    id: 'git-submodules',
    title: 'Git Submodules',
    chapter: 'Git Advanced',
    chapterId: 'git-chap-advanced',
    order: 9,
    overview: 'Menyematkan repositori Git lain di dalam repositori proyek utama, mengelola dependensi multi-repo, dan melakukan kloning rekursif.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-violet-500/15 via-purple-500/10 to-transparent p-6 rounded-2xl border border-violet-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-violet-600 text-white">MULTI-REPOSITORY</span>
            <span class="text-xs text-violet-600 dark:text-violet-400 font-bold uppercase tracking-wider">Materi 09 / 10</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📦 Mengelola Sub-Repositori dengan Submodules</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <strong>Git Submodule</strong> memungkinkan Anda menyimpan satu repositori Git sebagai subdirektori di dalam repositori Git lainnya, sambil tetap mempertahankan riwayat commit yang terpisah dan independen.
          </p>
        </div>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-3">
          <h3 class="text-base font-bold text-amber-400">📥 Kloning Repositori yang Memiliki Submodule</h3>
          <p class="text-xs text-slate-300 leading-relaxed">
            Jika Anda mengkloning proyek yang memiliki submodule, folder submodule akan kosong secara default. Anda wajib menggunakan flag <code>--recursive</code>:
          </p>
          <div class="text-xs bg-slate-950 p-3 rounded font-mono text-emerald-300">
            git clone --recurse-submodules https://github.com/user/project.git
          </div>
        </div>
      </div>
    `,
    code: `# Menambahkan submodule repositori pustaka ke dalam folder "libs/ui-kit"
git submodule add https://github.com/company/ui-kit.git libs/ui-kit

# Memperbarui isi seluruh submodule yang ada di proyek ke commit terbaru
git submodule update --init --recursive`,
    codeExplanation: [
      '"git submodule add <URL> <path>" menyematkan repositori eksternal dan mencatat URL-nya ke file konfigurasi ".gitmodules".',
      '"git submodule update --init --recursive" mengunduh dan menyelaraskan isi seluruh sub-repositori.'
    ],
    challenge: {
      instruction: 'Inisialisasi dan perbarui seluruh submodule proyek menggunakan perintah submodule update.',
      starterCode: 'git submodule update --init --recursive',
      hint: 'Jalankan "git submodule update --init --recursive".'
    },
    quiz: {
      question: 'Flag apa yang ditambahkan pada perintah "git clone" agar seluruh sub-repositori (submodules) ikut diunduh secara otomatis?',
      options: [
        '--recurse-submodules (atau --recursive)',
        '--all-files',
        '--with-submodules',
        '--deep-clone'
      ],
      correctIndex: 0,
      explanation: 'Flag "--recurse-submodules" menginstruksikan Git untuk otomatis menginisialisasi dan mengkloning setiap submodule yang ada di dalam proyek.'
    }
  },

  // ── 10. GIT REMOTE ADVANCED ──────────────────────────────────────────────
  {
    id: 'git-remote-advanced',
    title: 'Git Remote Advanced',
    chapter: 'Git Advanced',
    chapterId: 'git-chap-advanced',
    order: 10,
    overview: 'Membersihkan stale branch dengan git remote prune, multi-remote mirroring, mengganti nama remote, dan teknik Shallow Clone untuk menghemat kuota dan waktu.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-violet-500/15 via-purple-500/10 to-transparent p-6 rounded-2xl border border-violet-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-violet-600 text-white">MANAJEMEN REMOTE</span>
            <span class="text-xs text-violet-600 dark:text-violet-400 font-bold uppercase tracking-wider">Materi 10 / 10</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🚀 Trik Manajemen Remote Tingkat Lanjut</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Kumpulan perintah tingkat lanjut untuk merawat kesehatan koneksi remote, membersihkan cabang usang (*stale branches*), dan optimasi kecepatan transfer data.
          </p>
        </div>

        <div class="space-y-3">
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100">
            <div class="text-amber-400 font-bold text-sm mb-1">🧹 1. Membersihkan Referensi Branch yang Sudah Dihapus di GitHub</div>
            <p class="text-xs text-slate-300 mb-2">Jika branch di GitHub sudah dihapus setelah merge, hapus referensi lokalnya dengan:</p>
            <div class="text-xs bg-slate-950 p-2.5 rounded font-mono text-amber-300">git fetch --prune (atau git remote prune origin)</div>
          </div>

          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100">
            <div class="text-emerald-400 font-bold text-sm mb-1">⚡ 2. Shallow Clone (Kloning Super Cepat & Hemat Kuota)</div>
            <p class="text-xs text-slate-300 mb-2">Hanya mengunduh 1 commit terakhir tanpa mengunduh riwayat masa lalu sebesar gigabytes (sangat berguna di CI/CD):</p>
            <div class="text-xs bg-slate-950 p-2.5 rounded font-mono text-emerald-300">git clone --depth 1 https://github.com/user/huge-repo.git</div>
          </div>
        </div>
      </div>
    `,
    code: `# 1. Menarik data dan otomatis membersihkan stale branch remote yang sudah dihapus di GitHub
git fetch -p
# (flag -p sama dengan --prune)

# 2. Mengubah nama alias remote (contoh: dari origin menjadi upstream)
# git remote rename origin upstream

# 3. Kloning shallow clone dengan kedalaman 1 commit terakhir
# git clone --depth 1 https://github.com/facebook/react.git`,
    codeExplanation: [
      '"git fetch -p" (prune) menghapus pointer "origin/nama-branch" lokal yang sudah tidak ada lagi di server GitHub.',
      '"--depth 1" menghemat hingga 95% waktu download dan kuota internet saat mengkloning proyek raksasa.'
    ],
    challenge: {
      instruction: 'Jalankan perintah git fetch dengan opsi prune (-p) untuk membersihkan referensi branch yang sudah dihapus di server.',
      starterCode: 'git fetch -p',
      hint: 'Jalankan "git fetch -p" di terminal.'
    },
    quiz: {
      question: 'Flag apa yang digunakan pada "git clone" untuk hanya mengunduh 1 commit terakhir tanpa mengunduh seluruh riwayat masa lalu (Shallow Clone)?',
      options: [
        '--depth 1',
        '--fast-mode',
        '--quick-clone',
        '--no-history'
      ],
      correctIndex: 0,
      explanation: '"--depth <n>" membuat shallow clone yang membatasi riwayat ke sejumlah commit tertentu untuk menghemat bandwidth dan waktu secara drastis.'
    }
  }
];
