// =========================================================================
// DATA MATERI PYTHON: BAB 1 - PYTHON TUTORIAL (BAGIAN 1: LESSONS 01 - 12)
// Standar Granularitas Mandiri per Sub-Topik Sesuai Aturan Pasal #27 AGENTS.md
// =========================================================================

module.exports = [
  // ── 01. PYTHON HOME ──────────────────────────────────────────────────────
  {
    id: 'python-home',
    title: 'Python HOME',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 1,
    overview: 'Selamat datang di modul Python 3.x modern! Kuasai bahasa pemrograman #1 di dunia untuk AI, Data Science, Backend, dan Automation.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-blue-600 text-white">PYTHON 3.X</span>
            <span class="text-xs text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">Materi 01 / 60</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🐍 Selamat Datang di Python</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Python adalah bahasa pemrograman tingkat tinggi yang bersih, serbaguna, dan berorientasi objek yang fokus pada keterbacaan kode (code readability).
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 space-y-1">
            <div class="text-xl mb-1">🤖</div>
            <h4 class="font-bold text-amber-400 text-sm">AI & Data Science</h4>
            <p class="text-xs text-slate-300">TensorFlow, PyTorch, Pandas, Scikit-learn.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 space-y-1">
            <div class="text-xl mb-1">🌐</div>
            <h4 class="font-bold text-sky-400 text-sm">Backend Web</h4>
            <p class="text-xs text-slate-300">FastAPI, Django, Flask, REST API.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 space-y-1">
            <div class="text-xl mb-1">⚡</div>
            <h4 class="font-bold text-emerald-400 text-sm">Otomasi & Scripting</h4>
            <p class="text-xs text-slate-300">Web scraping, pengolahan file Excel/PDF.</p>
          </div>
        </div>
      </div>
    `,
    code: `# Program pertama Python 3
nama = "Developer Indonesia"
bahasa = "Python 3.12"
print(f"Halo Dunia! Selamat datang di {bahasa} 🐍")
print(f"Selamat belajar, {nama}!")`,
    codeExplanation: [
      'Variabel dibuat otomatis tanpa deklarasi tipe data khusus (Dynamic Typing).',
      'Fungsi bawaan "print()" menampilkan output ke layar terminal.',
      'Sintaks f-string "f\'...{var}...\'" menyisipkan variabel langsung di dalam teks.'
    ],
    challenge: {
      instruction: 'Ubah nilai variabel "nama" dengan nama Anda dan jalankan kode.',
      starterCode: `nama = "Nama Anda"\nprint(f"Halo! Saya {nama} sedang belajar Python!")`,
      hint: 'Ganti string "Nama Anda" dengan namamu lalu klik RUN.'
    },
    quiz: {
      question: 'Karakteristik utama manakah yang membuat Python sangat populer di seluruh dunia?',
      options: [
        'Sintaks yang bersih dan mudah dibaca mirip bahasa Inggris alami',
        'Wajib menggunakan titik koma di akhir setiap baris',
        'Hanya berjalan pada sistem operasi Windows 98',
        'Tidak memiliki tipe data desimal'
      ],
      correctIndex: 0,
      explanation: 'Filosofi desain Python menekankan keterbacaan kode (code readability) dengan sintaks yang bersih dan elegan.'
    }
  },

  // ── 02. PYTHON INTRO ─────────────────────────────────────────────────────
  {
    id: 'python-intro',
    title: 'Python Intro',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 2,
    overview: 'Mengenal sejarah Python oleh Guido van Rossum, Monty Python, filosofi Zen of Python, dan konsep Interpreted Language.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">📖 Apa Itu Python & Sejarahnya?</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
            Python diciptakan oleh <strong>Guido van Rossum</strong> di Belanda pada tahun 1991. Namanya diambil dari serial komedi BBC <em>"Monty Python's Flying Circus"</em>.
          </p>
        </div>
        <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 space-y-2">
          <h4 class="font-bold text-amber-400 text-sm">⚙️ Interpreted Language</h4>
          <p class="text-xs text-slate-300 leading-relaxed">
            Python dieksekusi baris demi baris secara instan oleh Python Interpreter tanpa perlu proses kompilasi manual ke file biner exe terlebih dahulu.
          </p>
        </div>
      </div>
    `,
    code: `import this\n\nangka = 10\nif angka > 5:\n    print("Angka lebih besar dari 5!")`,
    codeExplanation: [
      '"import this" mencetak prinsip panduan desain filosofi Python (The Zen of Python).'
    ],
    challenge: {
      instruction: 'Cetak kalimat "Belajar Python Menyenangkan!" menggunakan satu baris perintah print.',
      starterCode: 'print("Belajar Python Menyenangkan!")',
      hint: 'Gunakan fungsi print().'
    },
    quiz: {
      question: 'Siapakah pencipta bahasa pemrograman Python?',
      options: ['Guido van Rossum', 'Linus Torvalds', 'Brendan Eich', 'James Gosling'],
      correctIndex: 0,
      explanation: 'Python diciptakan oleh Guido van Rossum pada tahun 1991.'
    }
  },

  // ── 03. PYTHON GET STARTED ───────────────────────────────────────────────
  {
    id: 'python-get-started',
    title: 'Python Get Started',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 3,
    overview: 'Langkah instalasi Python dari python.org, konfigurasi Add to PATH di Windows, mode interaktif REPL, dan eksekusi file skrip .py.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">💻 Menyiapkan Lingkungan Python</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Unduh installer resmi dari <strong>python.org/downloads</strong>. Pastikan mencentang <strong>"Add python.exe to PATH"</strong>.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-100">
          <div class="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-1">
            <strong class="text-emerald-400">1. Mode REPL:</strong> Ketik <code>python</code> di terminal untuk mengevaluasi kode secara langsung.
          </div>
          <div class="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-1">
            <strong class="text-sky-400">2. File Skrip:</strong> Simpan file dengan ekstensi <code>app.py</code> lalu jalankan dengan <code>python app.py</code>.
          </div>
        </div>
      </div>
    `,
    code: `app_name = "DevGrow"\nversion = "2.0"\nprint(f"Menjalankan {app_name} v{version}...")`,
    codeExplanation: [
      'File skrip Python disimpan dengan ekstensi ".py" dan dieksekusi dengan "python nama_file.py".'
    ],
    challenge: {
      instruction: 'Cetak pesan "Python siap!" dan hasil 15 + 25.',
      starterCode: `print("Python siap!")\nprint(15 + 25)`,
      hint: 'Gunakan fungsi print.'
    },
    quiz: {
      question: 'Ekstensi berkas standar untuk file kode sumber Python adalah...',
      options: ['.py', '.pt', '.python', '.pys'],
      correctIndex: 0,
      explanation: 'File kode Python menggunakan ekstensi .py.'
    }
  },

  // ── 04. PYTHON SYNTAX ────────────────────────────────────────────────────
  {
    id: 'python-syntax',
    title: 'Python Syntax - Syntax',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 4,
    overview: 'Aturan sintaks inti Python: Whitespace Indentation (spasi identasi) sebagai penanda blok kode pengganti kurung kurawal.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">📐 Aturan Identasi (Indentation)</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Python menggunakan <strong>4 spasi identasi</strong> (bukan kurung kurawal <code>{}</code>) untuk menentukan hierarki blok kode percabangan, fungsi, dan loop.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
          <div class="p-3 bg-slate-950 text-emerald-300 rounded-xl border border-emerald-500/40">
            <strong>✅ Benar (4 Spasi):</strong><br/>if 5 > 2:<br/>&nbsp;&nbsp;&nbsp;&nbsp;print("Lima lebih besar!")
          </div>
          <div class="p-3 bg-slate-950 text-rose-300 rounded-xl border border-rose-500/40">
            <strong>❌ Salah (IndentationError):</strong><br/>if 5 > 2:<br/>print("Akan Error!")
          </div>
        </div>
      </div>
    `,
    code: `nilai = 85\nif nilai >= 75:\n    print("Status: Lulus Kompetensi! ✅")`,
    codeExplanation: [
      'Tanda titik dua (:) di akhir baris if menandakan bahwa baris berikutnya harus diidentasi 4 spasi.'
    ],
    challenge: {
      instruction: 'Beri 4 spasi identasi pada baris print di bawah if usia >= 17.',
      starterCode: `usia = 18\nif usia >= 17:\nprint("Boleh memiliki KTP")`,
      hint: 'Tambahkan 4 spasi di depan print.'
    },
    quiz: {
      question: 'Berapa jumlah spasi identasi yang direkomendasikan secara resmi oleh PEP 8 untuk setiap blok kode Python?',
      options: ['4 spasi', '1 spasi', '8 spasi', 'Tidak perlu spasi sama sekali'],
      correctIndex: 0,
      explanation: 'Standar gaya penulisan resmi PEP 8 merekomendasikan 4 spasi per tingkat identasi.'
    }
  },

  // ── 05. PYTHON STATEMENTS ────────────────────────────────────────────────
  {
    id: 'python-statements',
    title: 'Python Syntax - Statements',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 5,
    overview: 'Penulisan pernyataan (Statements) di Python: satu perintah per baris, multi-line statements dengan tanda kurung () atau backslash, dan titik koma.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">📝 Python Statements</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Statement adalah satu baris instruksi yang dieksekusi oleh interpreter. Di Python, setiap baris baru (newline) menandai akhir dari satu statement tanpa perlu titik koma.
          </p>
        </div>
        <div class="p-4 bg-slate-900 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-2">
          <strong class="text-amber-400">Multi-line Statements:</strong>
          <p>Jika ekspresi terlalu panjang, gunakan kurung <code>( ... )</code> untuk memecahnya ke baris berikutnya secara rapi.</p>
        </div>
      </div>
    `,
    code: `total = (\n    10 + 20 +\n    30 + 40\n)\nprint(f"Total: {total}")`,
    codeExplanation: [
      'Tanda kurung () membungkus ekspresi multi-baris agar dievaluasi sebagai satu kesatuan statement.'
    ],
    challenge: {
      instruction: 'Buat multi-line statement untuk menghitung total 100 + 200 + 300 di dalam tanda kurung ().',
      starterCode: `total = (\n    100 +\n    200 +\n    300\n)\nprint("Total:", total)`,
      hint: 'Bungkus baris matematika di dalam tanda kurung ().'
    },
    quiz: {
      question: 'Apakah tanda titik koma (;) wajib dituliskan di setiap akhir baris kode Python?',
      options: ['Tidak wajib (Python menggunakan newline)', 'Wajib hukumnya', 'Hanya wajib pada angka desimal', 'Wajib pada variabel teks'],
      correctIndex: 0,
      explanation: 'Python tidak mewajibkan titik koma karena perpindahan baris (newline) sudah menandai akhir statement.'
    }
  },

  // ── 06. PYTHON SYNTAX CHALLENGE ──────────────────────────────────────────
  {
    id: 'python-syntax-challenge',
    title: 'Python Syntax - Code Challenge',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 6,
    overview: 'Tantangan praktikum evaluasi sintaks dan identasi bersarang (nested indentation) pada percabangan kondisi Python.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">🎯 Tantangan Sintaks Python</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Perbaiki dan lengkapi logika identasi bersarang pada editor terminal di sebelah kanan.
          </p>
        </div>
      </div>
    `,
    code: `skor = 90\nif skor >= 75:\n    print("Status: Lulus")\n    if skor >= 90:\n        print("Predikat: Luar Biasa (A) 🌟")`,
    codeExplanation: [
      'Blok if di dalam if (nested) diidentasi 8 spasi (4 spasi per tingkat kedalaman).'
    ],
    challenge: {
      instruction: 'Lengkapi blok percabangan dengan identasi yang benar.',
      starterCode: `skor = 90\nif skor >= 75:\n    print("Status: Lulus")`,
      hint: 'Pastikan 4 spasi identasi di dalam if.'
    },
    quiz: {
      question: 'Error apakah yang akan dimunculkan Python jika kita lupa memberikan spasi identasi di bawah baris if?',
      options: ['IndentationError', 'SyntaxWarning', 'ZeroDivisionError', 'TypeError'],
      correctIndex: 0,
      explanation: 'Python akan melempar error "IndentationError: expected an indented block".'
    }
  },

  // ── 07. PYTHON PRINT TEXT ────────────────────────────────────────────────
  {
    id: 'python-print-text',
    title: 'Python Output - Print Text',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 7,
    overview: 'Mencetak teks string dengan tanda kutip tunggal/ganda, penggabungan banyak argumen string, dan penggunaan f-strings.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">📜 Print Text (String)</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Teks harus diapit tanda kutip (<code>'...'</code> atau <code>"..."</code>). Anda dapat mencetak banyak teks sekaligus dengan tanda koma <code>,</code>.
          </p>
        </div>
      </div>
    `,
    code: `nama = "Rian"\nrole = "Backend Developer"\nprint("Nama:", nama, "| Role:", role)\nprint(f"Halo, {nama}! Selamat bertugas sebagai {role}.")`,
    codeExplanation: [
      'Pemisah tanda koma di dalam print() otomatis menyisipkan satu karakter spasi di antara argumen.'
    ],
    challenge: {
      instruction: 'Cetak nama depan dan nama belakang dipisahkan koma di dalam print().',
      starterCode: `print("Budi", "Santoso")`,
      hint: 'Gunakan print("NamaDepan", "NamaBelakang").'
    },
    quiz: {
      question: 'Karakter apakah yang otomatis disisipkan oleh fungsi print() di antara dua argumen teks yang dipisahkan tanda koma?',
      options: ['Satu karakter spasi', 'Karakter koma', 'Baris baru (newline)', 'Tanda titik dua'],
      correctIndex: 0,
      explanation: 'Secara default, parameter separator (sep) pada fungsi print() bernilai satu karakter spasi " ".'
    }
  },

  // ── 08. PYTHON PRINT NUMBERS ─────────────────────────────────────────────
  {
    id: 'python-print-numbers',
    title: 'Python Output - Print Numbers',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 8,
    overview: 'Mencetak bilangan numerik integer, float, operasi aritmatika langsung, dan parameter sep serta end.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">🔢 Print Numbers & Aritmatika</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Angka tidak memerlukan tanda kutip dan ekspresi matematika langsung dievaluasi sebelum dicetak.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-100">
          <div class="p-3 bg-slate-900 rounded-xl"><code>sep=" - "</code> : Mengubah pemisah argumen</div>
          <div class="p-3 bg-slate-900 rounded-xl"><code>end=" "</code> : Mencegah ganti baris baru</div>
        </div>
      </div>
    `,
    code: `print("Hasil 10 x 5 =", 10 * 5)\nprint("29", "08", "2026", sep="/")\nprint("Loading", end="... ")\nprint("Selesai! ✅")`,
    codeExplanation: [
      '"sep=\'/\'" mengganti pemisah spasi menjadi tanda garis miring.',
      '"end=\'... \'" mencegah print berganti ke baris baru.'
    ],
    challenge: {
      instruction: 'Gunakan print dengan parameter sep=" - " untuk mencetak angka 1, 2, 3.',
      starterCode: 'print(1, 2, 3, sep=" - ")',
      hint: 'Gunakan sep=" - " di dalam print.'
    },
    quiz: {
      question: 'Parameter print manakah yang mengatur karakter di akhir pencetakan agar tidak otomatis membuat baris baru?',
      options: ['end', 'sep', 'stop', 'newline'],
      correctIndex: 0,
      explanation: 'Parameter end mengatur karakter penutup pada fungsi print().'
    }
  },

  // ── 09. PYTHON OUTPUT CHALLENGE ──────────────────────────────────────────
  {
    id: 'python-output-challenge',
    title: 'Python Output - Code Challenge',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 9,
    overview: 'Tantangan praktikum menyusun laporan ringkas keuangan toko dengan format print, f-strings, dan parameter kustom.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">🎯 Tantangan Formatting Output</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Kombinasikan perhitungan perkalian harga x kuantitas dan format teks di editor.
          </p>
        </div>
      </div>
    `,
    code: `harga = 25000\nqty = 3\ntotal = harga * qty\nprint(f"Total Bayar: Rp {total:,}")`,
    codeExplanation: ['f-string "{total:,}" memformat angka dengan pemisah ribuan koma.'],
    challenge: {
      instruction: 'Cetak total belanja barang (harga 50000 * jumlah 2) menggunakan f-string.',
      starterCode: `harga = 50000\njumlah = 2\nprint(f"Total: Rp {harga * jumlah}")`,
      hint: 'Gunakan f"Total: Rp {harga * jumlah}".'
    },
    quiz: {
      question: 'Sintaks manakah yang paling modern dan efisien untuk menyisipkan variabel ke dalam string di Python 3.6+?',
      options: ['f-string (contoh: f"Halo {nama}")', 'Penggabungan tanda % (%s)', 'Fungsi concat()', 'Tanda backtick (`)'],
      correctIndex: 0,
      explanation: 'f-string (Formatted String Literals) adalah cara paling modern dan cepat di Python.'
    }
  },

  // ── 10. PYTHON COMMENTS ──────────────────────────────────────────────────
  {
    id: 'python-comments',
    title: 'Python Comments - Comments',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 10,
    overview: 'Penggunaan komentar satu baris dengan tanda tagar (#) dan komentar multi-baris docstrings ("""...""") untuk dokumentasi kode.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">💬 Komentar di Python</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Komentar adalah teks dalam kode yang <strong>diabaikan 100% oleh interpreter</strong> dan digunakan untuk dokumentasi.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-100">
          <div class="p-3 bg-slate-900 rounded-xl"><code># Komentar satu baris</code></div>
          <div class="p-3 bg-slate-900 rounded-xl"><code>""" Komentar multi-baris """</code></div>
        </div>
      </div>
    `,
    code: `# Menghitung luas persegi panjang\npanjang = 10  # nilai dalam cm\nlebar = 5     # nilai dalam cm\nluas = panjang * lebar\nprint(f"Luas: {luas} cm²")`,
    codeExplanation: ['Karakter "#" menandai bahwa semua teks setelahnya pada baris tersebut adalah komentar.'],
    challenge: {
      instruction: 'Tambahkan komentar "# Hitung keliling" di atas baris perhitungan.',
      starterCode: `# Hitung keliling\nsisi = 4\nkeliling = 4 * sisi\nprint("Keliling:", keliling)`,
      hint: 'Awali komentar dengan tanda #.'
    },
    quiz: {
      question: 'Karakter apakah yang digunakan di Python untuk membuat komentar satu baris?',
      options: ['Simbol tagar ( # )', 'Garis miring ganda ( // )', 'Simbol persen ( % )', 'Tanda minus ganda ( -- )'],
      correctIndex: 0,
      explanation: 'Komentar satu baris di Python diawali dengan simbol tagar (#).'
    }
  },

  // ── 11. PYTHON COMMENTS CHALLENGE ────────────────────────────────────────
  {
    id: 'python-comments-challenge',
    title: 'Python Comments - Code Challenge',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 11,
    overview: 'Tantangan koding menuliskan dokumentasi docstrings dan inline comments pada program kalkulasi diskon belanja.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">🎯 Tantangan Dokumentasi Kode</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Tuliskan komentar yang bersih dan jelas untuk menjelaskan rumus potongan harga.
          </p>
        </div>
      </div>
    `,
    code: `"""\nKalkulator Potongan Diskon 20%\n"""\nharga = 100000\ndiskon = 0.20 # 20 persen\nbayar = harga - (harga * diskon)\nprint(f"Bayar Bersih: Rp {int(bayar):,}")`,
    codeExplanation: ['Docstrings """...""" memberikan penjelasan ringkas di awal program.'],
    challenge: {
      instruction: 'Tulis docstring tiga kutip """...""" di baris pertama program Anda.',
      starterCode: `"""\nProgram Demo Komentar\n"""\nprint("Dokumentasi berhasil!")`,
      hint: 'Gunakan tiga tanda kutip ganda """ di awal dan akhir teks penjelasan.'
    },
    quiz: {
      question: 'Tanda apakah yang digunakan untuk membuat komentar multi-baris atau docstring di Python?',
      options: ['Tiga tanda kutip ganda ("""...""") atau tunggal (\'\'\'...\'\'\')', '<!-- ... -->', '/* ... */', '#* ... *#'],
      correctIndex: 0,
      explanation: 'Tiga tanda kutip ganda atau tunggal digunakan untuk string multi-baris / docstring.'
    }
  }
];
