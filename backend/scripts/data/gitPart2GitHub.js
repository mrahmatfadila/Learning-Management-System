// =========================================================================
// DATA MATERI GIT: BAB 2 - GIT AND GITHUB (13 LESSONS)
// Standar Kurikulum Enterprise, GitHub Docs, W3Schools Git & DevGrow
// =========================================================================

module.exports = [
  // ── 1. GITHUB GET STARTED ────────────────────────────────────────────────
  {
    id: 'github-get-started',
    title: 'GitHub Get Started',
    chapter: 'Git and GitHub',
    chapterId: 'git-chap-github',
    order: 1,
    overview: 'Mengenal ekosistem GitHub sebagai platform kolaborasi dan hosting kode terbesar di dunia, membuat akun, dan membuat remote repository pertama.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">GIT AND GITHUB</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 01 / 13</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🐙 Selamat Datang di GitHub</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Jika <strong>Git</strong> adalah mesin pelacak versi di komputer lokal Anda, maka <strong>GitHub</strong> adalah rumah raksasa berbasis cloud di mana jutaan developer dan perusahaan di seluruh dunia menyimpan, berbagi, dan berkolaborasi membangun perangkat lunak.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800/50">
            <div class="text-purple-600 dark:text-purple-400 font-black text-base mb-1">☁️ Cloud Backup & Sync</div>
            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Kode proyek Anda tersimpan aman di server awan berstandar enterprise, terlindung dari risiko kerusakan hard disk lokal.</p>
          </div>
          <div class="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-800/50">
            <div class="text-indigo-600 dark:text-indigo-400 font-black text-base mb-1">💼 Portofolio Developer</div>
            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Profil GitHub dan kontribusi grafik hijau (green squares) menjadi bukti nyata keahlian teknis Anda saat melamar pekerjaan.</p>
          </div>
          <div class="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/50">
            <div class="text-emerald-600 dark:text-emerald-400 font-black text-base mb-1">🌍 Open Source Global</div>
            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Akses ke jutaan pustaka open-source dunia seperti React, Vue, Laravel, VS Code, dan Linux.</p>
          </div>
        </div>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-3">
          <h3 class="text-base font-bold text-amber-400">📝 Langkah Membuat Remote Repository di GitHub</h3>
          <ol class="space-y-2 text-xs md:text-sm text-slate-300 list-decimal list-inside leading-relaxed">
            <li>Buka <strong>github.com</strong> dan login ke akun Anda.</li>
            <li>Klik tombol ikon plus (<strong>+</strong>) di sudut kanan atas &rarr; pilih <strong>New repository</strong>.</li>
            <li>Beri nama repositori (contoh: <code>belajar-web-app</code>).</li>
            <li>Pilih visibilitas: <strong>Public</strong> (dapat dilihat publik) atau <strong>Private</strong> (hanya Anda dan rekan tim yang diundang).</li>
            <li>Klik <strong>Create repository</strong>.</li>
          </ol>
        </div>
      </div>
    `,
    code: `# Mengkloning repositori publik dari GitHub ke komputer lokal Anda
git clone https://github.com/torvalds/linux.git

# Output:
# Cloning into 'linux'...
# remote: Enumerating objects: 10243, done.
# remote: Counting objects: 100% (10243/10243), done.
# Receiving objects: 100% (10243/10243), 45.20 MiB | 12.50 MiB/s, done.`,
    codeExplanation: [
      '"git clone <URL>" menyalin seluruh file, seluruh branch, dan seluruh riwayat commit dari repositori GitHub ke komputer lokal Anda.',
      'Folder baru akan otomatis dibuat sesuai nama repositori yang dikloning.'
    ],
    challenge: {
      instruction: 'Tuliskan perintah untuk mengkloning repositori dengan URL https://github.com/facebook/react.git',
      starterCode: 'git clone https://github.com/facebook/react.git',
      hint: 'Gunakan perintah git clone diikuti dengan URL repositori.'
    },
    quiz: {
      question: 'Apa perbedaan mendasar antara Git dan GitHub?',
      options: [
        'Git adalah tool command-line pengelola versi lokal, sedangkan GitHub adalah layanan cloud hosting dan kolaborasi repositori Git',
        'Git hanya untuk bahasa Java, sedangkan GitHub untuk JavaScript',
        'Git berbayar sedangkan GitHub gratis',
        'Tidak ada perbedaan, keduanya adalah software yang sama persis'
      ],
      correctIndex: 0,
      explanation: 'Git adalah sistem kontrol versi lokal (tool), sedangkan GitHub adalah platform web hosting berbasis cloud untuk menyimpan dan berkolaborasi pada repositori Git.'
    }
  },

  // ── 2. GIT WHAT IS SSH? ──────────────────────────────────────────────────
  {
    id: 'git-what-is-ssh',
    title: 'Git What is SSH?',
    chapter: 'Git and GitHub',
    chapterId: 'git-chap-github',
    order: 2,
    overview: 'Memahami konsep protokol SSH (Secure Shell), kriptografi kunci asimetris (Public vs Private Key), dan mengapa SSH jauh lebih aman dan praktis dibanding HTTPS.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-pink-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">KEAMANAN & AUTENTIKASI</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 02 / 13</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔐 Apa Itu SSH (Secure Shell)?</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Saat menghubungkan Git di komputer lokal Anda dengan akun GitHub, Anda memerlukan metode autentikasi yang aman. <strong>SSH (Secure Shell)</strong> adalah protokol jaringan terenkripsi yang memungkinkan Anda berkomunikasi dengan GitHub tanpa harus mengetik password atau personal token berulang kali.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-2">
            <h4 class="font-bold text-amber-400 text-sm">🔑 1. Private Key (Kunci Rahasia)</h4>
            <p class="text-xs text-slate-300 leading-relaxed">
              Tersimpan di komputer lokal Anda (biasanya di <code>~/.ssh/id_ed25519</code>). <strong>JANGAN PERNAH</strong> membagikan file ini kepada siapa pun atau mengunggahnya ke internet.
            </p>
          </div>
          <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-2">
            <h4 class="font-bold text-emerald-400 text-sm">🔓 2. Public Key (Gembok Terbuka)</h4>
            <p class="text-xs text-slate-300 leading-relaxed">
              Berakhir dengan ekstensi <code>.pub</code> (contoh: <code>~/.ssh/id_ed25519.pub</code>). Kunci publik ini yang Anda salin dan daftarkan ke pengaturan akun GitHub Anda.
            </p>
          </div>
        </div>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-3">
          <h3 class="text-base font-bold text-sky-400">⚖️ SSH vs HTTPS di GitHub</h3>
          <div class="overflow-x-auto text-xs">
            <table class="w-full text-left text-slate-300 border-collapse">
              <thead>
                <tr class="border-b border-slate-700 text-slate-200">
                  <th class="py-2">Fitur</th>
                  <th class="py-2">HTTPS</th>
                  <th class="py-2 text-emerald-400">SSH (Direkomendasikan)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800">
                <tr>
                  <td class="py-2 font-bold">Autentikasi</td>
                  <td>Personal Access Token (PAT)</td>
                  <td class="text-emerald-400 font-bold">Key-pair kriptografi otomatis</td>
                </tr>
                <tr>
                  <td class="py-2 font-bold">Kemudahan Push</td>
                  <td>Token bisa expired</td>
                  <td class="text-emerald-400 font-bold">Sekali setup, langsung push selamanya</td>
                </tr>
                <tr>
                  <td class="py-2 font-bold">Keamanan</td>
                  <td>Tinggi</td>
                  <td class="text-emerald-400 font-bold">Sangat Tinggi (Enterprise Standard)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `,
    code: `# Memeriksa apakah Anda sudah memiliki SSH key yang terbuat sebelumnya di komputer
ls -la ~/.ssh

# Jika sudah ada, Anda akan melihat file:
# id_ed25519 (Private Key - RAHASIA)
# id_ed25519.pub (Public Key - Disalin ke GitHub)`,
    codeExplanation: [
      'Direktori "~/.ssh" adalah folder standar di sistem operasi tempat menyimpan kunci-kunci autentikasi SSH.',
      'Jika folder belum ada atau kosong, kita akan membuat pasangan kunci baru di materi berikutnya.'
    ],
    challenge: {
      instruction: 'Jalankan perintah untuk melihat isi direktori .ssh di komputer Anda.',
      starterCode: 'ls -la ~/.ssh',
      hint: 'Ketik "ls -la ~/.ssh" di terminal.'
    },
    quiz: {
      question: 'Kunci mana dari pasangan SSH Key yang boleh dan wajib disalin ke profil pengaturan GitHub?',
      options: [
        'Public Key (file berekstensi .pub)',
        'Private Key (file tanpa ekstensi)',
        'Keduanya harus diupload ke GitHub',
        'Password login Windows'
      ],
      correctIndex: 0,
      explanation: 'Hanya Public Key (.pub) yang didaftarkan ke GitHub. Private Key harus selalu dijaga kerahasiaannya di komputer lokal Anda.'
    }
  },

  // ── 3. GITHUB ADD SSH ────────────────────────────────────────────────────
  {
    id: 'github-add-ssh',
    title: 'GitHub Add SSH',
    chapter: 'Git and GitHub',
    chapterId: 'git-chap-github',
    order: 3,
    overview: 'Langkah praktis men-generate pasangan kunci SSH Ed25519, menyalin Public Key, mendaftarkannya ke GitHub Settings, dan memverifikasi koneksi aman.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PANDUAN PRAKTEK</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 03 / 13</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔑 Panduan Setup SSH Key ke GitHub</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Ikuti 4 langkah mudah berikut untuk menghubungkan komputer Anda ke GitHub menggunakan algoritma kriptografi modern <strong>Ed25519</strong>.
          </p>
        </div>

        <div class="space-y-3">
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100">
            <div class="text-emerald-400 font-bold text-sm mb-1">Langkah 1: Generate SSH Key Baru</div>
            <p class="text-xs text-slate-300 mb-2">Buka Git Bash / Terminal, jalankan:</p>
            <div class="text-xs bg-slate-950 p-2.5 rounded font-mono text-emerald-300">
              ssh-keygen -t ed25519 -C "email_anda@example.com"
            </div>
            <p class="text-xs text-slate-400 mt-1">Tekan Enter untuk semua konfirmasi lokasi file dan passphrase default.</p>
          </div>

          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100">
            <div class="text-sky-400 font-bold text-sm mb-1">Langkah 2: Salin Isi Public Key (.pub)</div>
            <p class="text-xs text-slate-300 mb-2">Tampilkan dan salin seluruh teks kuncinya:</p>
            <div class="text-xs bg-slate-950 p-2.5 rounded font-mono text-sky-300">
              cat ~/.ssh/id_ed25519.pub
            </div>
          </div>

          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100">
            <div class="text-amber-400 font-bold text-sm mb-1">Langkah 3: Tempelkan ke GitHub Settings</div>
            <p class="text-xs text-slate-300 leading-relaxed">
              Buka GitHub &rarr; <strong>Settings</strong> &rarr; <strong>SSH and GPG keys</strong> &rarr; Klik tombol hijau <strong>New SSH key</strong> &rarr; Beri judul (contoh: "Laptop Asus Kerja") &rarr; Paste teks kunci ke kotak Key &rarr; Klik <strong>Add SSH key</strong>.
            </p>
          </div>

          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100">
            <div class="text-purple-400 font-bold text-sm mb-1">Langkah 4: Tes Koneksi ke GitHub</div>
            <div class="text-xs bg-slate-950 p-2.5 rounded font-mono text-purple-300">
              ssh -T git@github.com
            </div>
            <p class="text-xs text-slate-400 mt-1">Jika sukses, GitHub akan membalas: <em>"Hi username! You've successfully authenticated..."</em></p>
          </div>
        </div>
      </div>
    `,
    code: `# 1. Membuat pasangan kunci SSH dengan algoritma modern Ed25519
ssh-keygen -t ed25519 -C "budi.developer@gmail.com"

# 2. Menguji koneksi autentikasi SSH ke server GitHub
ssh -T git@github.com

# Output sukses:
# Hi budi-dev! You've successfully authenticated, but GitHub does not provide shell access.`,
    codeExplanation: [
      'Flag "-t ed25519" memilih algoritma kurva eliptik yang jauh lebih aman, cepat, dan ringkas dibanding RSA lawas.',
      'Flag "-C" menambahkan komentar label email pemilik kunci.',
      '"ssh -T git@github.com" memverifikasi jabat tangan (handshake) aman antara komputer Anda dan GitHub.'
    ],
    challenge: {
      instruction: 'Uji koneksi SSH Anda ke server GitHub menggunakan perintah ssh -T.',
      starterCode: 'ssh -T git@github.com',
      hint: 'Jalankan "ssh -T git@github.com".'
    },
    quiz: {
      question: 'Algoritma SSH key modern apa yang paling direkomendasikan oleh GitHub saat ini karena keamanan tinggi dan performanya yang sangat cepat?',
      options: [
        'Ed25519',
        'MD5',
        'DES',
        'SHA-0'
      ],
      correctIndex: 0,
      explanation: 'Ed25519 adalah standar algoritma kunci publik kurva eliptik yang paling direkomendasikan oleh GitHub dan komunitas keamanan modern.'
    }
  },

  // ── 4. GITHUB SET REMOTE ─────────────────────────────────────────────────
  {
    id: 'github-set-remote',
    title: 'GitHub Set Remote',
    chapter: 'Git and GitHub',
    chapterId: 'git-chap-github',
    order: 4,
    overview: 'Menghubungkan repositori lokal di komputer dengan repositori remote di GitHub menggunakan git remote add, memeriksa URL remote, dan mengubah konfigurasi remote.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">KONEKSI REPOSITORY</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 04 / 13</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔗 Menghubungkan Repositori Lokal ke GitHub</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Agar Git di komputer Anda tahu ke mana data commit harus diunggah, Anda perlu mendaftarkan alamat repositori GitHub sebagai <strong>Remote</strong>.
          </p>
        </div>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-3">
          <h3 class="text-base font-bold text-amber-400">🏷️ Apa Itu "origin"?</h3>
          <p class="text-xs md:text-sm text-slate-300 leading-relaxed">
            <strong>origin</strong> hanyalah sebuah nama panggilan alias (nickname default) standar yang diberikan Git untuk merujuk ke URL repositori remote utama Anda di GitHub.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div class="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200">
            <div class="font-mono text-emerald-400 font-bold mb-1">git remote add origin &lt;url&gt;</div>
            <div>Mendaftarkan remote baru bernama origin dengan URL SSH atau HTTPS yang ditentukan.</div>
          </div>
          <div class="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200">
            <div class="font-mono text-sky-400 font-bold mb-1">git remote -v</div>
            <div>Menampilkan daftar remote yang terdaftar beserta URL fetch dan push-nya.</div>
          </div>
          <div class="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200">
            <div class="font-mono text-amber-400 font-bold mb-1">git remote set-url origin &lt;new_url&gt;</div>
            <div>Mengubah alamat URL remote jika terjadi pergantian repositori atau beralih dari HTTPS ke SSH.</div>
          </div>
        </div>
      </div>
    `,
    code: `# 1. Menghubungkan repositori lokal ke GitHub via SSH (Direkomendasikan)
git remote add origin git@github.com:username/my-awesome-project.git

# 2. Memeriksa daftar koneksi remote yang terpasang
git remote -v

# Output:
# origin  git@github.com:username/my-awesome-project.git (fetch)
# origin  git@github.com:username/my-awesome-project.git (push)`,
    codeExplanation: [
      '"git remote add origin <URL>" memberi tahu Git untuk menamai server GitHub tersebut sebagai "origin".',
      'Flag "-v" (verbose) menampilkan alamat URL lengkap yang digunakan untuk mengunduh (fetch) dan mengunggah (push).'
    ],
    challenge: {
      instruction: 'Periksa daftar remote repositori yang sedang aktif menggunakan opsi verbose (-v).',
      starterCode: 'git remote -v',
      hint: 'Jalankan "git remote -v" di terminal.'
    },
    quiz: {
      question: 'Apa nama alias konvensional yang secara default digunakan oleh Git untuk menamai repositori remote utama?',
      options: [
        'origin',
        'master',
        'upstream',
        'cloud'
      ],
      correctIndex: 0,
      explanation: '"origin" adalah nama alias standar yang digunakan Git untuk merujuk ke server repositori remote utama.'
    }
  },

  // ── 5. GITHUB EDIT CODE ──────────────────────────────────────────────────
  {
    id: 'github-edit-code',
    title: 'GitHub Edit Code',
    chapter: 'Git and GitHub',
    chapterId: 'git-chap-github',
    order: 5,
    overview: 'Mengedit kode secara langsung di antarmuka web GitHub, menggunakan fitur Web-based VS Code Editor di browser, dan membuat commit online.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">WEB EDITOR</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 05 / 13</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">✏️ Mengedit Kode Langsung di Browser GitHub</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Terkadang Anda sedang tidak berada di laptop pribadi atau hanya ingin memperbaiki kesalahan ketik (typo) kecil di file dokumentasi <code>README.md</code>. GitHub menyediakan editor web bawaan yang sangat bertenaga!
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-2">
            <h4 class="font-bold text-amber-400 text-sm">🖊️ 1. Quick File Editor</h4>
            <p class="text-xs text-slate-300 leading-relaxed">
              Buka file di halaman repositori GitHub, klik ikon pensil (<strong>Edit this file</strong>), lakukan perbaikan teks, lalu isi form pesan commit di bagian bawah halaman.
            </p>
          </div>
          <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-2">
            <h4 class="font-bold text-sky-400 text-sm">💻 2. GitHub.dev (Web VS Code)</h4>
            <p class="text-xs text-slate-300 leading-relaxed">
              Tekan tombol titik (<strong>.</strong>) pada keyboard saat membuka halaman repositori apapun di GitHub! Layar akan seketika berubah menjadi antarmuka <strong>Visual Studio Code lengkap di browser</strong>.
            </p>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs leading-relaxed">
          ⚠️ <strong>Catatan Penting:</strong> Setelah melakukan commit di antarmuka web GitHub, repositori remote Anda menjadi lebih maju dibanding repositori lokal. Anda harus menjalankan <code>git pull</code> di komputer lokal sebelum melanjutkan pekerjaan offline!
        </div>
      </div>
    `,
    code: `# Setelah Anda mengedit file di web GitHub dan membuat commit online:
# Anda WAJIB menarik perubahan tersebut ke komputer lokal:
git pull origin main

# Output:
# Updating 8f3b14a..c7d8e9f
# Fast-forward
#  README.md | 4 ++--
#  1 file changed, 2 insertions(+), 2 deletions(-)`,
    codeExplanation: [
      'Mengedit di web GitHub secara otomatis menciptakan commit baru di server.',
      'Perintah "git pull origin main" menyinkronkan editan web tersebut ke direktori komputer Anda.'
    ],
    challenge: {
      instruction: 'Tarik pembaruan dari branch main remote GitHub ke komputer lokal Anda.',
      starterCode: 'git pull origin main',
      hint: 'Jalankan "git pull origin main".'
    },
    quiz: {
      question: 'Tombol keyboard apa yang dapat ditekan saat membuka repositori di GitHub untuk langsung membuka antarmuka VS Code di browser (github.dev)?',
      options: [
        'Tombol Titik ( . )',
        'Tombol Spasi',
        'Tombol Escape (Esc)',
        'Tombol F12'
      ],
      correctIndex: 0,
      explanation: 'Menekan tombol titik (.) pada halaman repositori GitHub akan membuka Web-based Visual Studio Code Editor (github.dev) secara instan di browser.'
    }
  },

  // ── 6. PULL FROM GITHUB ──────────────────────────────────────────────────
  {
    id: 'pull-from-github',
    title: 'Pull from GitHub',
    chapter: 'Git and GitHub',
    chapterId: 'git-chap-github',
    order: 6,
    overview: 'Menarik dan menyinkronkan pembaruan commit dari GitHub ke repositori lokal dengan git pull, memahami anatomi git fetch + git merge.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">SINKRONISASI REMOTE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 06 / 13</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📥 Mengunduh Perubahan dengan Git Pull</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Ketika bekerja dalam tim, rekan kerja Anda akan sering mengirim commit baru ke GitHub. Untuk memperbarui kode di komputer lokal Anda agar selalu sinkron dengan server, gunakan perintah <strong><code>git pull</code></strong>.
          </p>
        </div>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-3">
          <h3 class="text-base font-bold text-emerald-400">⚙️ Apa yang Sebenarnya Dilakukan Git Pull?</h3>
          <p class="text-xs md:text-sm text-slate-300 leading-relaxed">
            Perintah <code>git pull</code> adalah gabungan otomatis dari 2 proses:
          </p>
          <div class="p-3 bg-slate-950 rounded-xl font-mono text-xs text-slate-300 space-y-1">
            <div class="text-sky-400">1. git fetch origin</div>
            <div class="text-slate-400">Mengunduh seluruh commit baru dan metadata dari GitHub ke database lokal tanpa mengubah file kerja.</div>
            <div class="text-emerald-400 mt-2">2. git merge origin/main</div>
            <div class="text-slate-400">Menggabungkan perubahan commit tersebut ke dalam branch aktif Anda di komputer.</div>
          </div>
        </div>
      </div>
    `,
    code: `# Menarik commit terbaru dari branch main di GitHub
git pull origin main

# Output:
# From github.com:username/my-awesome-project
#  * branch            main       -> FETCH_HEAD
# Already up to date.`,
    codeExplanation: [
      '"origin" menentukan server remote target.',
      '"main" menentukan nama branch yang ingin disinkronkan.',
      '"Already up to date" menandakan repositori lokal Anda sudah persis sama dengan kondisi terbaru di GitHub.'
    ],
    challenge: {
      instruction: 'Sinkronkan cabang aktif Anda dengan pembaruan dari remote origin branch main.',
      starterCode: 'git pull origin main',
      hint: 'Jalankan "git pull origin main".'
    },
    quiz: {
      question: 'Operasi Git apa yang merupakan paduan dari dua perintah "git fetch" diikuti oleh "git merge"?',
      options: [
        'git pull',
        'git push',
        'git clone',
        'git commit'
      ],
      correctIndex: 0,
      explanation: '"git pull" secara otomatis mengeksekusi "git fetch" untuk mengambil data dari server, lalu langsung menjalankan "git merge" untuk menyatukannya ke branch lokal.'
    }
  },

  // ── 7. PUSH TO GITHUB ────────────────────────────────────────────────────
  {
    id: 'push-to-github',
    title: 'Push to GitHub',
    chapter: 'Git and GitHub',
    chapterId: 'git-chap-github',
    order: 7,
    overview: 'Mengunggah riwayat commit lokal ke repositori GitHub dengan git push, mengatur upstream branch (-u), dan menjaga integritas remote repository.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PUBLIKASI KODE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 07 / 13</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📤 Mengunggah Commit dengan Git Push</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Setelah Anda membuat satu atau beberapa commit secara lokal, langkah terakhir untuk membagikannya ke tim dan mempublikasikannya ke cloud GitHub adalah menjalankan <strong><code>git push</code></strong>.
          </p>
        </div>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-3">
          <h3 class="text-base font-bold text-amber-400">🚀 Mengapa Menggunakan Flag "-u" (Upstream)?</h3>
          <p class="text-xs md:text-sm text-slate-300 leading-relaxed">
            Saat pertama kali melakukan push pada suatu branch, gunakan flag <code>-u</code> (atau <code>--set-upstream</code>):
          </p>
          <div class="text-xs bg-slate-950 p-3 rounded font-mono text-emerald-400">
            git push -u origin main
          </div>
          <p class="text-xs text-slate-400">
            Flag ini mengingat pasangan branch lokal dengan branch di server GitHub. Untuk commit-commit berikutnya di branch ini, Anda cukup mengetikkan <code>git push</code> saja!
          </p>
        </div>
      </div>
    `,
    code: `# 1. Push pertama kali ke branch main dengan upstream tracking
git push -u origin main

# Output Terminal:
# Enumerating objects: 5, done.
# Counting objects: 100% (5/5), done.
# Writing objects: 100% (3/3), 320 bytes | 320.00 KiB/s, done.
# Total 3 (delta 1), reused 0 (delta 0)
# To github.com:username/project.git
#  * [new branch]      main -> main
# branch 'main' set up to track 'origin/main'.

# 2. Push selanjutnya cukup dengan:
git push`,
    codeExplanation: [
      '"git push -u origin main" mentransfer data objek commit ke repositori GitHub dan menautkan branch lokal "main" dengan "origin/main".',
      'Setelah upstream diatur, Git akan memberi tahu apakah branch lokal Anda "ahead" (lebih maju) atau "behind" (tertinggal) dari GitHub.'
    ],
    challenge: {
      instruction: 'Unggah perubahan commit ke remote origin pada branch main dengan upstream tracking.',
      starterCode: 'git push -u origin main',
      hint: 'Jalankan "git push -u origin main".'
    },
    quiz: {
      question: 'Apa manfaat menggunakan flag "-u" (set-upstream) saat pertama kali menjalankan "git push -u origin main"?',
      options: [
        'Menautkan branch lokal ke branch remote sehingga ke depannya cukup mengetik "git push" tanpa menuliskan nama remote dan branch lagi',
        'Mengenkripsi file dengan password rahasia',
        'Menghapus seluruh file lama di GitHub',
        'Mengubah lisensi proyek menjadi open-source'
      ],
      correctIndex: 0,
      explanation: 'Flag -u menautkan tracking antara branch lokal dan branch remote sehingga perintah push/pull selanjutnya menjadi sangat ringkas.'
    }
  },

  // ── 8. GITHUB BRANCH ─────────────────────────────────────────────────────
  {
    id: 'github-branch',
    title: 'GitHub Branch',
    chapter: 'Git and GitHub',
    chapterId: 'git-chap-github',
    order: 8,
    overview: 'Mengelola cabang di GitHub, melihat visual tree graph di web, mengatur Default Branch, dan mengonfigurasi Branch Protection Rules untuk keamanan production.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PROTEKSI CABANG</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 08 / 13</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛡️ Manajemen Cabang & Branch Protection di GitHub</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Di lingkungan profesional, branch utama (<code>main</code>) yang berjalan di server production harus dilindungi agar tidak ada developer yang bisa melakukan <code>git push</code> langsung atau menghapus branch secara tidak sengaja.
          </p>
        </div>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-3">
          <h3 class="text-base font-bold text-amber-400">🔒 Fitur Branch Protection Rules</h3>
          <ul class="space-y-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <li class="flex items-start gap-2">
              <span class="text-emerald-400 font-bold">✓</span>
              <span><strong>Require a pull request before merging:</strong> Menolak push langsung ke main; semua perubahan wajib melalui Pull Request.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-400 font-bold">✓</span>
              <span><strong>Require approvals:</strong> Minimal 1 atau 2 Senior Developer harus menyetujui (Approve) kode sebelum boleh di-merge.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-400 font-bold">✓</span>
              <span><strong>Require status checks to pass:</strong> Automated Test (CI/CD) harus berstatus hijau/lulus sebelum merge diizinkan.</span>
            </li>
          </ul>
        </div>
      </div>
    `,
    code: `# Melihat semua branch lokal dan branch remote yang terlacak
git branch -a

# Output:
# * main
#   remotes/origin/HEAD -> origin/main
#   remotes/origin/main
#   remotes/origin/feature-auth`,
    codeExplanation: [
      'Flag "-a" (--all) menampilkan branch lokal yang ada di komputer sekaligus branch yang tersimpan di server GitHub (awalan remotes/origin/).'
    ],
    challenge: {
      instruction: 'Tampilkan seluruh cabang lokal dan remote menggunakan opsi -a.',
      starterCode: 'git branch -a',
      hint: 'Jalankan "git branch -a" di terminal.'
    },
    quiz: {
      question: 'Fitur keamanan apa di GitHub Settings yang digunakan untuk mencegah push langsung ke branch main dan mewajibkan review tim?',
      options: [
        'Branch Protection Rules',
        'GitHub Sponsors',
        'Repository Deletion',
        'SSH Key Verification'
      ],
      correctIndex: 0,
      explanation: 'Branch Protection Rules memungkinkan admin memproteksi branch krusial dengan mewajibkan Pull Request, review approval, dan automated tests sebelum merge.'
    }
  },

  // ── 9. PULL BRANCH FROM GITHUB ───────────────────────────────────────────
  {
    id: 'pull-branch-from-github',
    title: 'Pull Branch from GitHub',
    chapter: 'Git and GitHub',
    chapterId: 'git-chap-github',
    order: 9,
    overview: 'Mengambil dan bekerja pada cabang baru yang dibuat oleh rekan tim di GitHub, melacak remote tracking branch, dan berpindah cabang lokal.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">KOLABORASI TIM</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 09 / 13</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">👥 Mengambil Cabang Rekan Kerja dari GitHub</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Ketika rekan satu tim membuat branch baru di GitHub (misal <code>feature-payment-gateway</code>) dan meminta Anda membantu menyelesaikannya, Anda perlu mengunduh branch tersebut ke komputer lokal Anda.
          </p>
        </div>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-3">
          <h3 class="text-base font-bold text-emerald-400">⚡ Alur Praktis 2 Perintah:</h3>
          <div class="p-3 bg-slate-950 rounded-xl font-mono text-xs text-slate-300 space-y-2">
            <div>
              <span class="text-sky-400 font-bold">1. git fetch origin</span>
              <p class="text-slate-400 text-[11px] font-sans">Memberitahu Git lokal tentang daftar branch baru yang ada di GitHub.</p>
            </div>
            <div>
              <span class="text-emerald-400 font-bold">2. git switch feature-payment-gateway</span>
              <p class="text-slate-400 text-[11px] font-sans">Git akan otomatis mendeteksi remote branch tersebut dan membuat salinan branch lokal dengan tracking yang terhubung.</p>
            </div>
          </div>
        </div>
      </div>
    `,
    code: `# Langkah 1: Perbarui daftar referensi branch dari GitHub
git fetch origin

# Langkah 2: Pindah langsung ke nama branch remote tersebut
git switch feature-payment-gateway

# Output:
# Branch 'feature-payment-gateway' set up to track remote branch 'feature-payment-gateway' from 'origin'.
# Switched to a new branch 'feature-payment-gateway'`,
    codeExplanation: [
      '"git fetch origin" menyinkronkan daftar branch tanpa mengubah kode yang sedang aktif Anda buka.',
      '"git switch <nama_branch>" secara cerdas membuat branch lokal dan menautkannya ke origin/<nama_branch>.'
    ],
    challenge: {
      instruction: 'Perbarui daftar branch remote dari server origin menggunakan git fetch.',
      starterCode: 'git fetch origin',
      hint: 'Jalankan "git fetch origin".'
    },
    quiz: {
      question: 'Perintah apa yang digunakan untuk mengunduh daftar branch dan commit baru dari server tanpa memodifikasi file kerja lokal Anda?',
      options: [
        'git fetch',
        'git reset --hard',
        'git merge',
        'git clean'
      ],
      correctIndex: 0,
      explanation: '"git fetch" mengunduh referensi dan data commit baru dari remote repository tanpa menggabungkannya ke branch lokal aktif, menjadikannya sangat aman untuk meninjau perubahan.'
    }
  },

  // ── 10. PUSH BRANCH TO GITHUB ────────────────────────────────────────────
  {
    id: 'push-branch-to-github',
    title: 'Push Branch to GitHub',
    chapter: 'Git and GitHub',
    chapterId: 'git-chap-github',
    order: 10,
    overview: 'Mempublikasikan cabang fitur lokal ke GitHub, membuat branch baru di server, dan mempersiapkan pembukaan Pull Request.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PUBLISH FITUR</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 10 / 13</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌿 Mempublikasikan Cabang Fitur ke GitHub</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Saat Anda membuat branch baru di komputer lokal (misal: <code>feat-dark-mode</code>), branch tersebut bersifat 100% lokal sampai Anda melakukan push cabang tersebut ke GitHub.
          </p>
        </div>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-3">
          <h3 class="text-base font-bold text-amber-400">🔗 Menghapus Remote Branch yang Sudah Selesai</h3>
          <p class="text-xs text-slate-300 leading-relaxed">
            Setelah Pull Request di-merge ke main, Anda dapat menghapus branch di GitHub langsung dari terminal menggunakan:
          </p>
          <div class="text-xs bg-slate-950 p-3 rounded font-mono text-red-400">
            git push origin --delete feat-dark-mode
          </div>
        </div>
      </div>
    `,
    code: `# 1. Buat branch lokal baru
git switch -c feat-dark-mode

# 2. Lakukan perubahan kode dan commit
git commit -am "feat: implementasikan palet warna dark mode CSS"

# 3. Publikasikan branch baru ini ke GitHub
git push -u origin feat-dark-mode

# Output akan memberikan tautan otomatis untuk membuat Pull Request:
# Create a pull request for 'feat-dark-mode' on GitHub by visiting:
#   https://github.com/username/project/pull/new/feat-dark-mode`,
    codeExplanation: [
      '"git push -u origin <nama_branch>" membuat branch baru di server GitHub dengan nama yang sama.',
      'Terminal akan otomatis memberikan link URL langsung untuk membuat Pull Request di browser.'
    ],
    challenge: {
      instruction: 'Publikasikan branch "feat-profile" ke remote origin dengan opsi upstream.',
      starterCode: 'git push -u origin feat-profile',
      hint: 'Gunakan "git push -u origin feat-profile".'
    },
    quiz: {
      question: 'Perintah apa yang digunakan untuk menghapus branch remote di GitHub secara langsung melalui terminal Git?',
      options: [
        'git push origin --delete <nama_branch>',
        'git remove remote <nama_branch>',
        'git destroy <nama_branch>',
        'git clean --remote <nama_branch>'
      ],
      correctIndex: 0,
      explanation: '"git push origin --delete <nama_branch>" (atau "git push origin :<nama_branch>") menghapus cabang yang ada di server remote GitHub.'
    }
  },

  // ── 11. GITHUB FLOW ──────────────────────────────────────────────────────
  {
    id: 'github-flow',
    title: 'GitHub Flow',
    chapter: 'Git and GitHub',
    chapterId: 'git-chap-github',
    order: 11,
    overview: 'Mendalami siklus lengkap GitHub Flow: Pembuatan Branch, Pull Request (PR), Code Review, Automated Checks (CI), dan Merge ke Production.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">STANDAR INDUSTRI</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 11 / 13</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔄 Siklus Hidup GitHub Flow</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <strong>GitHub Flow</strong> adalah alur kerja berbasis branch yang ringan dan lincah, digunakan oleh ribuan tim rekayasa software modern untuk melakukan deploy secara kontinu (Continuous Delivery).
          </p>
        </div>

        <div class="space-y-3">
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 flex items-start gap-3">
            <div class="w-7 h-7 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-xs shrink-0">1</div>
            <div>
              <h4 class="font-bold text-sm text-purple-300">Create a Branch</h4>
              <p class="text-xs text-slate-300">Buat branch deskriptif dari branch main (contoh: <code>fix-cart-total</code> atau <code>feat-oauth-google</code>).</p>
            </div>
          </div>

          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 flex items-start gap-3">
            <div class="w-7 h-7 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-xs shrink-0">2</div>
            <div>
              <h4 class="font-bold text-sm text-sky-300">Add Commits & Push</h4>
              <p class="text-xs text-slate-300">Tulis kode berkualitas, buat atomic commit, lalu push branch ke GitHub.</p>
            </div>
          </div>

          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 flex items-start gap-3">
            <div class="w-7 h-7 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-xs shrink-0">3</div>
            <div>
              <h4 class="font-bold text-sm text-amber-300">Open a Pull Request (PR)</h4>
              <p class="text-xs text-slate-300">Buka PR untuk meminta tim mereview kode, memberi feedback, dan menjalankan automated testing (CI).</p>
            </div>
          </div>

          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 flex items-start gap-3">
            <div class="w-7 h-7 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-xs shrink-0">4</div>
            <div>
              <h4 class="font-bold text-sm text-emerald-300">Review, Merge & Deploy</h4>
              <p class="text-xs text-slate-300">Setelah disetujui (Approved), gabungkan (Merge) PR ke main, lalu sistem otomatis mendeploy ke server production.</p>
            </div>
          </div>
        </div>
      </div>
    `,
    code: `# Ringkasan perintah GitHub Flow di terminal pengembang:
git switch -c feat-search-filter
# ... koding & testing ...
git commit -am "feat: tambah filter kategori pencarian"
git push -u origin feat-search-filter
# Lalu buka browser dan klik tombol "Compare & pull request" di GitHub`,
    codeExplanation: [
      'GitHub Flow menekankan pada feedback cepat melalui Pull Request sebelum kode menyentuh branch utama.'
    ],
    challenge: {
      instruction: 'Buat branch baru untuk fitur pencarian menggunakan perintah git switch.',
      starterCode: 'git switch -c feat-search',
      hint: 'Ketik "git switch -c feat-search".'
    },
    quiz: {
      question: 'Apa fungsi utama dari Pull Request (PR) dalam GitHub Flow?',
      options: [
        'Sebagai ruang diskusi, code review oleh rekan tim, dan verifikasi automated tests sebelum kode digabungkan ke main',
        'Untuk mematikan server database',
        'Untuk menghapus akun pengguna lain',
        'Untuk mengunduh file video tutorial'
      ],
      correctIndex: 0,
      explanation: 'Pull Request memfasilitasi peer review, kolaborasi, feedback baris demi baris, dan pengujian otomatis sebelum penggabungan ke cabang production.'
    }
  },

  // ── 12. GITHUB PAGES ─────────────────────────────────────────────────────
  {
    id: 'github-pages',
    title: 'GitHub Pages',
    chapter: 'Git and GitHub',
    chapterId: 'git-chap-github',
    order: 12,
    overview: 'Mempublikasikan dan menghosting website statis (HTML, CSS, JavaScript) secara 100% gratis dengan domain publik langsung dari repositori GitHub.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">FREE HOSTING</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 12 / 13</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌐 Hosting Gratis dengan GitHub Pages</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <strong>GitHub Pages</strong> adalah layanan hosting gratis dari GitHub yang mengubah file HTML, CSS, dan JavaScript di repositori Anda menjadi website online yang dapat diakses oleh siapa saja di seluruh dunia dengan sertifikat HTTPS gratis!
          </p>
        </div>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-3">
          <h3 class="text-base font-bold text-amber-400">🚀 Cara Mengaktifkan GitHub Pages (3 Langkah)</h3>
          <ol class="space-y-2 text-xs md:text-sm text-slate-300 list-decimal list-inside leading-relaxed">
            <li>Pastikan di root repositori proyek Anda terdapat file bernama <strong><code>index.html</code></strong>.</li>
            <li>Buka repositori di GitHub &rarr; Klik tab <strong>Settings</strong> &rarr; Pilih menu <strong>Pages</strong> di bilah kiri.</li>
            <li>Pada bagian <em>Build and deployment &gt; Source</em>, pilih <strong>Deploy from a branch</strong> &rarr; Pilih branch <strong><code>main</code></strong> dan folder <strong><code>/ (root)</code></strong> &rarr; Klik <strong>Save</strong>.</li>
          </ol>
        </div>

        <div class="p-4 rounded-xl bg-slate-950 border border-emerald-500/40 text-xs text-slate-300 leading-relaxed">
          🎉 Dalam waktu 1-2 menit, website Anda akan live di URL publik:
          <div class="mt-1 font-mono text-emerald-400 font-bold text-sm">https://username.github.io/nama-repositori/</div>
        </div>
      </div>
    `,
    code: `# Memastikan file entry point index.html ada di direktori kerja
echo "<!DOCTYPE html><html><head><title>My Live Site</title></head><body><h1>Hello World from GitHub Pages!</h1></body></html>" > index.html

# Commit dan push ke branch main
git add index.html
git commit -m "feat: tambah index.html untuk deployment GitHub Pages"
git push origin main`,
    codeExplanation: [
      'GitHub Pages secara default mencari file "index.html" di direktori root untuk dijadikan halaman utama website Anda.',
      'Setiap kali Anda melakukan push commit baru ke branch main, GitHub Pages akan otomatis memperbarui tampilan website secara instan!'
    ],
    challenge: {
      instruction: 'Buat file index.html dan lakukan staging dengan perintah git add.',
      starterCode: 'git add index.html',
      hint: 'Jalankan "git add index.html".'
    },
    quiz: {
      question: 'Nama file apa yang wajib ada di root repositori agar GitHub Pages dapat menampilkan halaman website utama dengan benar?',
      options: [
        'index.html',
        'home.php',
        'main.py',
        'server.js'
      ],
      correctIndex: 0,
      explanation: 'Web server GitHub Pages memerlukan file "index.html" sebagai titik masuk (entry point) default halaman web statis.'
    }
  },

  // ── 13. GIT GUI CLIENTS ──────────────────────────────────────────────────
  {
    id: 'git-gui-clients',
    title: 'Git GUI Clients',
    chapter: 'Git and GitHub',
    chapterId: 'git-chap-github',
    order: 13,
    overview: 'Mengenal aplikasi Visual GUI Client untuk Git (GitHub Desktop, GitKraken, SourceTree, VS Code Source Control) untuk mempermudah visualisasi merge dan diff.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">VISUAL TOOLS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 13 / 13</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🖥️ Aplikasi GUI (Graphical User Interface) untuk Git</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Meskipun terminal CLI adalah fondasi utama, menggunakan aplikasi visual (GUI Client) sangat membantu saat membandingkan perbedaan baris kode (diff) yang rumit dan melihat percabangan branch yang kompleks.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 space-y-1">
            <h4 class="font-bold text-purple-400 text-sm">🐙 1. GitHub Desktop</h4>
            <p class="text-xs text-slate-400 leading-relaxed">Aplikasi resmi dari GitHub. Sangat ramah pemula, antarmuka minimalis, terintegrasi sempurna dengan akun GitHub.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 space-y-1">
            <h4 class="font-bold text-sky-400 text-sm">🦑 2. GitKraken</h4>
            <p class="text-xs text-slate-400 leading-relaxed">Visualisasi pohon cabang paling interaktif dan indah di industri, fitur drag-and-drop merge, dan interactive rebase canggih.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 space-y-1">
            <h4 class="font-bold text-amber-400 text-sm">🌳 3. Sourcetree</h4>
            <p class="text-xs text-slate-400 leading-relaxed">GUI gratis dari Atlassian yang kaya fitur detail pelacakan untuk proyek enterprise berskala raksasa.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 space-y-1">
            <h4 class="font-bold text-emerald-400 text-sm">⚡ 4. Built-in VS Code Source Control</h4>
            <p class="text-xs text-slate-400 leading-relaxed">Tab Source Control di sidebar VS Code (Ctrl+Shift+G) + ekstensi populer seperti <strong>GitLens</strong>.</p>
          </div>
        </div>
      </div>
    `,
    code: `# Membuka GUI bawaan Git standar yang terpasang di sistem operasi Anda
gitk

# (Perintah "gitk" membuka jendela graphical history viewer bawaan Git)`,
    codeExplanation: [
      '"gitk" adalah utilitas GUI bawaan ringan berbasis Tcl/Tk yang disertakan bersama instalasi Git.',
      'Sebagian besar developer modern menggabungkan kekuatan Terminal CLI untuk kecepatan commit/push dan VS Code GitLens / GitHub Desktop untuk visualisasi diff.'
    ],
    challenge: {
      instruction: 'Buka status ringkas git status untuk melihat perubahan sebelum menggunakan GUI tool.',
      starterCode: 'git status -s',
      hint: 'Jalankan "git status -s".'
    },
    quiz: {
      question: 'Ekstensi populer apa di Visual Studio Code yang memberikan kemampuan melihat riwayat commit langsung di atas setiap baris kode (Git Code Authorship)?',
      options: [
        'GitLens',
        'Prettier',
        'Live Server',
        'Auto Rename Tag'
      ],
      correctIndex: 0,
      explanation: 'GitLens adalah salah satu ekstensi VS Code terpopuler di dunia yang memberikan visualisasi authorship (blame annotations), commit graph, dan perbandingan riwayat kode langsung di editor.'
    }
  }
];
