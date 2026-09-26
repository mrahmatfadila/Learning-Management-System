// =========================================================================
// DATA MATERI PYTHON: BAB 1 - PYTHON TUTORIAL (BATCH 1: LESSONS 01 - 06)
// Standar Kurikulum Enterprise Python 3.x, W3Schools, Python.org & DevGrow
// =========================================================================

module.exports = [
  // ── 01. PYTHON HOME ──────────────────────────────────────────────────────
  {
    id: 'python-home',
    title: 'Python HOME',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 1,
    overview: 'Selamat datang di modul pembelajaran Python 3.x modern! Kuasai bahasa pemrograman nomor 1 di dunia yang digunakan untuk Web Development, Data Science, Machine Learning, Artificial Intelligence, dan Otomasi Scripting.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-blue-600 text-white">PYTHON 3.X</span>
            <span class="text-xs text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">Materi 01 / 12</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🐍 Selamat Datang di Dunia Pemrograman Python</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <strong>Python</strong> adalah bahasa pemrograman tingkat tinggi (<em>high-level</em>), serbaguna (<em>general-purpose</em>), dan berorientasi objek yang dirancang dengan penekanan utama pada <strong>keterbacaan kode (code readability)</strong>.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800/50">
            <div class="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-black text-sm mb-2">🤖</div>
            <h4 class="font-bold text-slate-800 dark:text-white text-sm mb-1">AI & Data Science</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Standar emas industri untuk Machine Learning, Deep Learning, Big Data (TensorFlow, PyTorch, Pandas, NumPy, Scikit-learn).</p>
          </div>
          <div class="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/50">
            <div class="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-black text-sm mb-2">🌐</div>
            <h4 class="font-bold text-slate-800 dark:text-white text-sm mb-1">Backend & REST API</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Membangun server backend berkecepatan tinggi dan scalable dengan framework modern seperti Django, FastAPI, dan Flask.</p>
          </div>
          <div class="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/50">
            <div class="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-black text-sm mb-2">⚡</div>
            <h4 class="font-bold text-slate-800 dark:text-white text-sm mb-1">Otomasi & Scripting</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Mengotomasi tugas harian, web scraping, pengolahan file Excel/PDF, DevOps tooling, dan pengujian sistem otomatis.</p>
          </div>
        </div>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-3">
          <h3 class="text-base font-bold text-amber-400">💡 Mengapa Memilih Python?</h3>
          <ul class="space-y-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <li>✓ <strong>Mudah & Intuitif:</strong> Menulis kode terasa seperti menulis bahasa Inggris sehari-hari.</li>
            <li>✓ <strong>Cross-Platform:</strong> Berjalan lancar di Windows, macOS, Linux, dan server Cloud.</li>
            <li>✓ <strong>Ekosistem Raksasa:</strong> Tersedia ratusan ribu pustaka siap pakai di PyPI (Python Package Index).</li>
          </ul>
        </div>
      </div>
    `,
    code: `# Program pertama Python 3
nama = "Developer Indonesia"
bahasa = "Python 3.12"
print(f"Halo Dunia! Selamat datang di {bahasa} 🐍")
print(f"Selamat belajar, {nama}!")`,
    codeExplanation: [
      'Variabel di Python dibuat langsung tanpa deklarasi tipe data khusus (Dynamic Typing).',
      'Fungsi bawaan "print()" digunakan untuk menampilkan output ke layar terminal.',
      'Sintaks f-string "f\'...{variabel}...\'" memudahkan penyisipan variabel langsung di dalam teks secara modern.'
    ],
    challenge: {
      instruction: 'Ubah nilai variabel "nama" dengan nama lengkap Anda dan jalankan kode untuk melihat output sapaan.',
      starterCode: `nama = "Nama Anda"
print(f"Halo! Saya {nama} dan saya sedang belajar Python!")`,
      hint: 'Ganti string "Nama Anda" dengan namamu sendiri, lalu klik RUN.'
    },
    quiz: {
      question: 'Karakteristik utama manakah yang membuat Python sangat disukai oleh pemula maupun pakar AI?',
      options: [
        'Sintaks yang bersih, mudah dibaca mirip bahasa Inggris, dan ekosistem pustaka data/AI yang sangat melimpah',
        'Wajib menggunakan titik koma (;) di setiap akhir baris perintah',
        'Hanya bisa berjalan pada sistem operasi Windows 98',
        'Tidak memiliki fitur pengolahan angka desimal'
      ],
      correctIndex: 0,
      explanation: 'Filosofi Python menekankan keterbacaan kode (code readability) dengan sintaks yang sangat bersih dan didukung ekosistem pustaka machine learning terbesar di dunia.'
    }
  },

  // ── 02. PYTHON INTRO ─────────────────────────────────────────────────────
  {
    id: 'python-intro',
    title: 'Python Intro',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 2,
    overview: 'Mengenal sejarah Python, filosofi Zen of Python, arsitektur interpreted language, dan perbandingan efisiensi kode Python dibanding C++ dan Java.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-blue-600 text-white">PENGENALAN & SEJARAH</span>
            <span class="text-xs text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">Materi 02 / 12</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📖 Apa Itu Python & Sejarah Kelahirannya?</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Python diciptakan oleh <strong>Guido van Rossum</strong> di Centrum Wiskunde & Informatica (CWI), Belanda, dan pertama kali dirilis ke publik pada tahun 1991. Nama "Python" diambil dari serial komedi BBC favoritnya: <em>"Monty Python's Flying Circus"</em>.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-2">
            <h4 class="font-bold text-amber-400 text-sm">⚙️ Interpreted Language</h4>
            <p class="text-xs text-slate-300 leading-relaxed">
              Python dieksekusi baris demi baris oleh <em>Python Interpreter</em> tanpa perlu melalui tahapan kompilasi manual ke file biner (seperti <code>.exe</code> di C++). Ini membuat proses prototyping dan eksperimen koding menjadi super kilat!
            </p>
          </div>
          <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-2">
            <h4 class="font-bold text-emerald-400 text-sm">🧘 The Zen of Python</h4>
            <p class="text-xs text-slate-300 leading-relaxed">
              Prinsip desain Python dirangkum dalam pepatah terkenal: <em>"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex. Readability counts."</em>
            </p>
          </div>
        </div>
      </div>
    `,
    code: `# Mengakses filosofi Zen of Python langsung di interpreter
import this

# Contoh ekspresi logika sederhana di Python
angka = 10
if angka > 5:
    print("Angka lebih besar dari 5!")`,
    codeExplanation: [
      '"import this" adalah easter egg bawaan Python yang mencetak 19 prinsip panduan filosofi desain Python.',
      'Struktur percabangan "if" di Python menggunakan tanda titik dua (:) dan spasi tab/identasi untuk menandai blok kodenya.'
    ],
    challenge: {
      instruction: 'Cetak kalimat "Belajar Python Menyenangkan!" menggunakan satu baris perintah print.',
      starterCode: 'print("Belajar Python Menyenangkan!")',
      hint: 'Gunakan fungsi print() dengan teks diapit tanda kutip.'
    },
    quiz: {
      question: 'Siapakah tokoh ilmuwan komputer pencipta bahasa pemrograman Python?',
      options: [
        'Guido van Rossum',
        'Linus Torvalds',
        'Brendan Eich',
        'James Gosling'
      ],
      correctIndex: 0,
      explanation: 'Python diciptakan oleh programmer asal Belanda, Guido van Rossum, dan pertama kali dirilis pada tahun 1991.'
    }
  },

  // ── 03. PYTHON GET STARTED ───────────────────────────────────────────────
  {
    id: 'python-get-started',
    title: 'Python Get Started',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 3,
    overview: 'Langkah praktis instalasi Python 3 di Windows, macOS, dan Linux, verifikasi terminal, mode interaktif REPL, dan menjalankan file skrip .py pertama.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-blue-600 text-white">SETUP & RUN</span>
            <span class="text-xs text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">Materi 03 / 12</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">💻 Menyiapkan Lingkungan Eksekusi Python</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Untuk mulai membuat program Python di komputer Anda, unduh installer Python 3 versi terbaru dari situs resmi <strong><a href="https://www.python.org/downloads/" target="_blank" class="text-blue-400 underline">python.org</a></strong>.
          </p>
        </div>

        <div class="space-y-4">
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100">
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-bold text-sky-400 text-sm">🪟 Tips Instalasi di Windows</h4>
              <span class="text-xs bg-amber-950 text-amber-300 px-2 py-0.5 rounded border border-amber-800">Centang Add to PATH</span>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed">
              Saat menjalankan installer di Windows, <strong>WAJIB centang kotak <code>"Add python.exe to PATH"</code></strong> agar perintah <code>python</code> dapat langsung dipanggil dari Command Prompt / Terminal mana pun.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 space-y-2">
              <h4 class="font-bold text-emerald-400 text-sm">1. Mode Interaktif (REPL)</h4>
              <p class="text-xs text-slate-300 leading-relaxed">
                Ketik <code>python</code> di terminal untuk masuk ke terminal interaktif Python (ditandai tanda <code>&gt;&gt;&gt;</code>). Ketik <code>exit()</code> untuk keluar.
              </p>
            </div>
            <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 space-y-2">
              <h4 class="font-bold text-amber-400 text-sm">2. Menjalankan File Skrip (.py)</h4>
              <p class="text-xs text-slate-300 leading-relaxed">
                Tulis kode di text editor (VS Code), simpan dengan ekstensi <code>app.py</code>, lalu eksekusi di terminal dengan perintah: <code>python app.py</code>.
              </p>
            </div>
          </div>
        </div>
      </div>
    `,
    code: `# Memeriksa versi Python di terminal:
# python --version

# Isi file: app.py
nama_aplikasi = "DevGrow LMS"
versi = "2.0"
print(f"Menjalankan {nama_aplikasi} Versi {versi}...")`,
    codeExplanation: [
      '"python --version" memverifikasi nomor versi runtime Python yang aktif.',
      'File kode Python selalu disimpan dengan ekstensi berkas ".py".',
      'Eksekusi skrip dilakukan dengan mengetikkan "python nama_file.py".'
    ],
    challenge: {
      instruction: 'Buat program Python yang mencetak pesan "Python siap dijalankan!" beserta hasil penjumlahan 15 + 25.',
      starterCode: `print("Python siap dijalankan!")
print(15 + 25)`,
      hint: 'Fungsi print() dapat langsung mengevaluasi ekspresi matematika di dalam parameternya.'
    },
    quiz: {
      question: 'Ekstensi file standar apakah yang digunakan untuk menyimpan file kode sumber program Python?',
      options: [
        '.py',
        '.pt',
        '.python',
        '.pys'
      ],
      correctIndex: 0,
      explanation: 'Seluruh file skrip kode pemrograman Python menggunakan ekstensi berkas .py.'
    }
  },

  // ── 04. PYTHON SYNTAX ────────────────────────────────────────────────────
  {
    id: 'python-syntax',
    title: 'Python Syntax (Syntax, Statements, Code Challenge)',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 4,
    overview: 'Penjelasan lengkap dan mendalam mengenai Python Syntax, aturan Identasi Spasi (Whitespace Indentation), penulisan Python Statements satu baris dan multi-baris, serta Code Challenge interaktif.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-blue-600 text-white">SUB-GRUP MATERI</span>
            <span class="text-xs text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">Materi 04 / 12</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📐 Python Syntax, Statements & Challenge</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Pelajari aturan tata bahasa fundamental Python yang membedakannya secara elegan dari bahasa pemrograman lainnya.
          </p>
        </div>

        <!-- 1. PENJELASAN SUB-TOPIK: PYTHON SYNTAX & INDENTATION -->
        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-emerald-500/40 space-y-3">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 text-xs font-bold border border-emerald-800">Bagian 1</span>
            <h3 class="text-base font-bold text-emerald-400">1. Python Syntax & Indentation (Aturan Identasi)</h3>
          </div>
          <p class="text-xs md:text-sm text-slate-300 leading-relaxed">
            Jika bahasa lain menggunakan kurung kurawal <code>{ }</code>, Python menggunakan <strong>Identasi Spasi (Whitespace Indentation)</strong> untuk menentukan blok kode percabangan, fungsi, atau perulangan. Standar resmi (PEP 8) mewajibkan <strong>4 spasi</strong> per tingkatan blok.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono mt-2">
            <div class="p-3 bg-slate-950 rounded-xl border border-emerald-500/40 text-emerald-300">
              <strong>✅ Benar (4 Spasi):</strong><br/>
              if 5 > 2:<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;print("Lima lebih besar!")
            </div>
            <div class="p-3 bg-slate-950 rounded-xl border border-rose-500/40 text-rose-300">
              <strong>❌ Salah (IndentationError):</strong><br/>
              if 5 > 2:<br/>
              print("Pasti Error!")
            </div>
          </div>
        </div>

        <!-- 2. PENJELASAN SUB-TOPIK: STATEMENTS -->
        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-sky-500/40 space-y-3">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded bg-sky-950 text-sky-300 text-xs font-bold border border-sky-800">Bagian 2</span>
            <h3 class="text-base font-bold text-sky-400">2. Python Statements (Pernyataan Baris Kode)</h3>
          </div>
          <p class="text-xs md:text-sm text-slate-300 leading-relaxed">
            <strong>Statement</strong> adalah instruksi yang dieksekusi oleh Python Interpreter.
          </p>
          <ul class="text-xs md:text-sm text-slate-300 space-y-2 leading-relaxed">
            <li>• <strong>Single Statement:</strong> Diakhiri dengan baris baru (Enter), tanpa perlu tanda titik koma (<code>;</code>).</li>
            <li>• <strong>Multi-line Statements:</strong> Memecah baris panjang menggunakan kurung <code>( ... )</code> atau karakter backslash (<code>\\</code>).</li>
            <li>• <strong>Multiple Statements in One Line:</strong> Bisa dipisahkan titik koma (<code>;</code>), namun tidak disarankan menurut PEP 8.</li>
          </ul>
        </div>

        <!-- 3. PENJELASAN SUB-TOPIK: CODE CHALLENGE -->
        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-amber-500/40 space-y-3">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded bg-amber-950 text-amber-300 text-xs font-bold border border-amber-800">Bagian 3</span>
            <h3 class="text-base font-bold text-amber-400">3. Code Challenge (Tantangan Koding Praktik)</h3>
          </div>
          <p class="text-xs md:text-sm text-slate-300 leading-relaxed">
            Uji pemahaman Anda dengan memperbaiki blok percabangan bersyarat dan memastikan setiap baris kode di dalam blok memiliki identasi yang sempurna.
          </p>
        </div>
      </div>
    `,
    code: `# 1. Statement baris tunggal
angka = 20

# 2. Statement dengan blok identasi (Syntax)
if angka >= 10:
    print("Angka bernilai puluhan!")
    print("Baris ini berada dalam blok identasi yang sama.")

# 3. Multi-line Statement menggunakan tanda kurung
total = (10 + 20 + 
         30 + 40)
print(f"Total penjumlahan: {total}")`,
    codeExplanation: [
      'Tanda titik dua ":" di akhir baris "if" menandai bahwa baris berikutnya adalah awal blok kode.',
      'Semua baris di dalam blok if harus memiliki 4 spasi identasi yang seragam.',
      'Tanda kurung ( ... ) memungkinkan penulisan operasi matematika panjang terpecah rapi ke baris berikutnya.'
    ],
    challenge: {
      instruction: 'Perbaiki kesalahan identasi pada kode berikut agar berjalan lancar tanpa IndentationError.',
      starterCode: `usia = 18
if usia >= 17:
print("Anda berhak memiliki KTP!")`,
      hint: 'Tambahkan 4 spasi identasi pada baris print di bawah pernyataan if usia >= 17:.'
    },
    quiz: {
      question: 'Apa fungsi utama dari spasi identasi (whitespace indentation) di dalam bahasa Python?',
      options: [
        'Sebagai penanda batas blok kode (scope) pada percabangan, perulangan, fungsi, dan class',
        'Hanya sebagai komentar yang diabaikan oleh interpreter',
        'Untuk mengubah warna font di terminal',
        'Untuk mematikan koneksi database'
      ],
      correctIndex: 0,
      explanation: 'Identasi spasi di Python adalah aturan sintaks wajib untuk menentukan hierarki dan ruang lingkup (scope) blok kode.'
    }
  },

  // ── 05. PYTHON OUTPUT ────────────────────────────────────────────────────
  {
    id: 'python-output',
    title: 'Python Output (Print Text, Print Numbers, Code Challenge)',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 5,
    overview: 'Penjelasan lengkap dan terperinci mengenai teknik mencetak output di Python: Print Text (mencetak teks string), Print Numbers (mencetak angka & operasi matematika), parameter sep/end, serta Code Challenge interaktif.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-blue-600 text-white">SUB-GRUP MATERI</span>
            <span class="text-xs text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">Materi 05 / 12</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🖨️ Python Output: Print Text, Numbers & Challenge</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Kuasai seluruh kemampuan fungsi bawaan <code>print()</code> untuk memformat dan menampilkan segala bentuk data ke layar terminal.
          </p>
        </div>

        <!-- 1. PRINT TEXT -->
        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-sky-500/40 space-y-3">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded bg-sky-950 text-sky-300 text-xs font-bold border border-sky-800">Bagian 1</span>
            <h3 class="text-base font-bold text-sky-400">1. Print Text (Mencetak Teks String)</h3>
          </div>
          <p class="text-xs md:text-sm text-slate-300 leading-relaxed">
            Teks harus diapit tanda kutip tunggal (<code>'...'</code>) atau ganda (<code>"..."</code>). Anda dapat mencetak banyak teks sekaligus dengan memisahkannya menggunakan tanda koma (<code>,</code>).
          </p>
          <div class="text-xs bg-slate-950 p-3 rounded font-mono text-sky-300">
            print("Halo", "Dunia", "Python!") # Output: Halo Dunia Python!
          </div>
        </div>

        <!-- 2. PRINT NUMBERS -->
        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-emerald-500/40 space-y-3">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 text-xs font-bold border border-emerald-800">Bagian 2</span>
            <h3 class="text-base font-bold text-emerald-400">2. Print Numbers & Math (Mencetak Angka & Aritmatika)</h3>
          </div>
          <p class="text-xs md:text-sm text-slate-300 leading-relaxed">
            Angka tidak boleh menggunakan tanda kutip. Fungsi <code>print()</code> dapat langsung mengevaluasi operasi matematika kompleks (penjumlahan <code>+</code>, perkalian <code>*</code>, perpangkatan <code>**</code>).
          </p>
          <div class="text-xs bg-slate-950 p-3 rounded font-mono text-emerald-300">
            print(10 + 5 * 2) # Output: 20<br/>
            print("Hasil 2 pangkat 8 =", 2 ** 8) # Output: Hasil 2 pangkat 8 = 256
          </div>
        </div>

        <!-- 3. CODE CHALLENGE -->
        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-amber-500/40 space-y-3">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded bg-amber-950 text-amber-300 text-xs font-bold border border-amber-800">Bagian 3</span>
            <h3 class="text-base font-bold text-amber-400">3. Code Challenge (Tantangan Output Kustom)</h3>
          </div>
          <p class="text-xs md:text-sm text-slate-300 leading-relaxed">
            Gunakan parameter khusus <code>sep</code> (separator kustom) dan <code>end</code> (karakter akhir baris) untuk memformat laporan keuangan atau tabel mini di terminal.
          </p>
        </div>
      </div>
    `,
    code: `# 1. Print Text & f-string
nama_kursus = "Python Masterclass"
print("Selamat datang di kursus:", nama_kursus)

# 2. Print Numbers & Aritmatika
harga_satuan = 50000
jumlah = 4
print("Total Pembayaran: Rp", harga_satuan * jumlah)

# 3. Parameter sep & end
print("Senin", "Selasa", "Rabu", sep=" -> ")
print("Memproses", end="... ")
print("Selesai 100%! ✅")`,
    codeExplanation: [
      '"print()" otomatis menambahkan spasi di antara argumen yang dipisahkan tanda koma.',
      'Ekspresi perkalian "harga_satuan * jumlah" langsung dikalkulasi sebelum ditampilkan ke layar.',
      'Parameter "sep=\' -> \'" menggantikan spasi pemisah default dengan tanda panah.',
      'Parameter "end=\'... \'" mencegah print berpindah ke baris baru.'
    ],
    challenge: {
      instruction: 'Gunakan fungsi print dengan parameter sep=" : " untuk mencetak "Skor Akhir" dan angka 100.',
      starterCode: 'print("Skor Akhir", 100, sep=" : ")',
      hint: 'Sertakan argumen teks, angka, dan parameter sep=" : " di dalam fungsi print.'
    },
    quiz: {
      question: 'Parameter bawaan apakah pada fungsi print() yang mengatur karakter di akhir pencetakan agar tidak otomatis berganti baris baru?',
      options: [
        'end (contoh: end=" ")',
        'sep',
        'stop',
        'newline'
      ],
      correctIndex: 0,
      explanation: 'Parameter "end" menentukan karakter apa yang dicetak di akhir pemanggilan print(). Secara default nilainya adalah "\\n" (baris baru).'
    }
  },

  // ── 06. PYTHON COMMENTS ──────────────────────────────────────────────────
  {
    id: 'python-comments',
    title: 'Python Comments (Comments, Code Challenge)',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 6,
    overview: 'Penjelasan mendalam mengenai Python Comments: Komentar satu baris (#), komentar multi-baris docstrings ("""..."""), etika penulisan dokumentasi kode bersih, serta Code Challenge interaktif.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-blue-600 text-white">SUB-GRUP MATERI</span>
            <span class="text-xs text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">Materi 06 / 12</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">💬 Python Comments & Code Challenge</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Pelajari bagaimana cara mendokumentasikan kode secara profesional agar mudah dipelihara dan dipahami oleh rekan satu tim.
          </p>
        </div>

        <!-- 1. COMMENTS EXPLANATION -->
        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-sky-500/40 space-y-3">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded bg-sky-950 text-sky-300 text-xs font-bold border border-sky-800">Bagian 1</span>
            <h3 class="text-base font-bold text-sky-400">1. Python Comments (Jenis & Penggunaan Komentar)</h3>
          </div>
          <p class="text-xs md:text-sm text-slate-300 leading-relaxed">
            Komentar adalah teks dalam program yang <strong>diabaikan 100% oleh interpreter Python</strong>.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs mt-2">
            <div class="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <strong class="text-amber-400">A. Single-Line Comment (#):</strong><br/>
              Diawali simbol tagar (<code>#</code>). Digunakan untuk menjelaskan baris kode atau menambahkan catatan singkat.
            </div>
            <div class="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <strong class="text-emerald-400">B. Multi-line / Docstring ("""):</strong><br/>
              Diapit tiga tanda kutip (<code>"""..."""</code>). Digunakan sebagai dokumentasi resmi modul, class, dan fungsi.
            </div>
          </div>
        </div>

        <!-- 2. CODE CHALLENGE -->
        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-amber-500/40 space-y-3">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded bg-amber-950 text-amber-300 text-xs font-bold border border-amber-800">Bagian 2</span>
            <h3 class="text-base font-bold text-amber-400">2. Code Challenge (Tantangan Menulis Komentar)</h3>
          </div>
          <p class="text-xs md:text-sm text-slate-300 leading-relaxed">
            Praktikkan penulisan komentar penjelas rumus matematika sebelum baris perhitungan kode dijalankan.
          </p>
        </div>
      </div>
    `,
    code: `# ==============================================
# 1. Program Kalkulator Diskon Belanja (Single-line)
# ==============================================

"""
2. Multi-line Docstring:
Fungsi ini menghitung potongan diskon barang berdasarkan persentase.
"""

harga_awal = 100000        # Harga asli barang (inline comment)
persen_diskon = 0.25       # Diskon 25%

# Hitung nilai potongan
potongan = harga_awal * persen_diskon
harga_akhir = harga_awal - potongan

print(f"Harga Awal  : Rp {harga_awal:,}")
print(f"Potongan    : Rp {int(potongan):,}")
print(f"Bayar Bersih: Rp {int(harga_akhir):,}")`,
    codeExplanation: [
      'Simbol "#" digunakan untuk komentar satu baris di awal baris maupun di samping kanan kode.',
      'Tiga tanda kutip ganda """...""" membungkus teks penjelasan multi-baris.',
      'Komentar sama sekali tidak membebani kecepatan eksekusi program Python.'
    ],
    challenge: {
      instruction: 'Tambahkan komentar satu baris dengan simbol # yang menjelaskan rumus luas persegi di atas kode perhitungan.',
      starterCode: `# Rumus luas persegi: sisi * sisi
sisi = 8
luas = sisi * sisi
print(f"Luas Persegi dengan sisi {sisi} adalah: {luas}")`,
      hint: 'Awali baris komentar dengan simbol tagar (#).'
    },
    quiz: {
      question: 'Simbol karakter apakah yang digunakan di Python untuk menandai awal komentar satu baris?',
      options: [
        'Simbol tagar ( # )',
        'Garis miring ganda ( // )',
        'Simbol persen ( % )',
        'Tanda panah ( -> )'
      ],
      correctIndex: 0,
      explanation: 'Di Python, komentar satu baris selalu diawali dengan simbol tagar (#), berbeda dari bahasa keluarga C yang menggunakan //.'
    }
  }
];
