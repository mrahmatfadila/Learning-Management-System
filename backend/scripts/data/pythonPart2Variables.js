// =========================================================================
// DATA MATERI PYTHON: BAB 1 - PYTHON TUTORIAL (BAGIAN 2: LESSONS 13 - 25)
// Standar Granularitas Mandiri per Sub-Topik Sesuai Aturan Pasal #27 AGENTS.md
// =========================================================================

module.exports = [
  // ── 13. PYTHON VARIABLES ─────────────────────────────────────────────────
  {
    id: 'python-variables',
    title: 'Python Variables - Python Variables',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 12,
    overview: 'Konsep dasar variabel di Python sebagai wadah penyimpanan nilai data dengan sifat Dynamic Typing tanpa deklarasi tipe khusus.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">📦 Python Variables</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Variabel dibuat saat pertama kali Anda memberikan nilai padanya menggunakan tanda sama dengan (<code>=</code>). Tipe data dapat berubah secara dinamis.
          </p>
        </div>
      </div>
    `,
    code: `x = 5\nnama = "Budi"\nprint("Nilai x:", x)\nprint("Nama   :", nama)`,
    codeExplanation: ['Variabel di Python langsung tercipta saat diinisialisasi nilai pertamanya.'],
    challenge: {
      instruction: 'Buat variabel "kota" bernilai "Jakarta" dan cetak nilainya.',
      starterCode: `kota = "Jakarta"\nprint(f"Ibukota: {kota}")`,
      hint: 'Gunakan kota = "Jakarta".'
    },
    quiz: {
      question: 'Apakah kita perlu menuliskan kata kunci tipe data (seperti int atau string) saat membuat variabel baru di Python?',
      options: ['Tidak perlu (Python bertipe Dynamic Typing)', 'Wajib hukumnya', 'Hanya wajib pada angka', 'Wajib pada teks'],
      correctIndex: 0,
      explanation: 'Python adalah Dynamically Typed language sehingga tipe data dideteksi secara otomatis saat runtime.'
    }
  },

  // ── 14. PYTHON VARIABLE NAMES ────────────────────────────────────────────
  {
    id: 'python-variable-names',
    title: 'Python Variables - Variable Names',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 13,
    overview: 'Aturan baku penamaan variabel di Python: karakter legal, case-sensitivity, dan konvensi penamaan standar snake_case (PEP 8).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">🏷️ Aturan Penamaan Variabel</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Nama variabel harus diawali huruf atau underscore (<code>_</code>), tidak boleh diawali angka, dan bersifat <strong>case-sensitive</strong>.
          </p>
        </div>
        <div class="p-4 bg-slate-900 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-1 font-mono">
          <div><code>nama_siswa</code> : snake_case (Rekomendasi Python PEP 8)</div>
          <div><code>namaSiswa</code> : camelCase</div>
          <div><code>NamaSiswa</code> : PascalCase (digunakan untuk Class)</div>
        </div>
      </div>
    `,
    code: `nama_depan = "Ahmad"\nnama_belakang = "Dahlan"\n_id_karyawan = 1001\nprint(f"Nama: {nama_depan} {nama_belakang} | ID: {_id_karyawan}")`,
    codeExplanation: ['snake_case menggunakan huruf kecil dipisahkan garis bawah (_) antar kata.'],
    challenge: {
      instruction: 'Buat variabel valid dengan nama "total_harga_barang" bernilai 75000.',
      starterCode: `total_harga_barang = 75000\nprint(f"Total: Rp {total_harga_barang:,}")`,
      hint: 'Gunakan penamaan snake_case.'
    },
    quiz: {
      question: 'Manakah nama variabel berikut yang TIDAK VALID di Python?',
      options: ['2_nama_pengguna', 'nama_pengguna_2', '_nama_pengguna', 'namaPengguna'],
      correctIndex: 0,
      explanation: 'Nama variabel Python TIDAK boleh diawali dengan angka.'
    }
  },

  // ── 15. PYTHON ASSIGN MULTIPLE VALUES ────────────────────────────────────
  {
    id: 'python-assign-multiple-values',
    title: 'Python Variables - Assign Multiple Values',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 14,
    overview: 'Teknik menetapkan banyak nilai ke banyak variabel dalam satu baris (Multiple Assignment) dan Unpacking koleksi.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">⚡ Penetapan Banyak Nilai</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Python memungkinkan Anda mengisikan banyak variabel sekaligus dalam satu baris kode yang ringkas.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono text-slate-100">
          <div class="p-3 bg-slate-900 rounded-xl"><code>x, y, z = 1, 2, 3</code><br/>(Banyak nilai beda)</div>
          <div class="p-3 bg-slate-900 rounded-xl"><code>x = y = z = 100</code><br/>(Satu nilai sama)</div>
        </div>
      </div>
    `,
    code: `p, l, t = 10, 5, 2\nvol = p * l * t\nprint(f"Volume: {vol} cm³")`,
    codeExplanation: ['Nilai di sebelah kanan tanda = diekstrak berurutan ke variabel di sebelah kiri.'],
    challenge: {
      instruction: 'Tetapkan a, b, c dengan nilai 10, 20, 30 dalam satu baris.',
      starterCode: `a, b, c = 10, 20, 30\nprint("Total:", a + b + c)`,
      hint: 'Gunakan a, b, c = 10, 20, 30.'
    },
    quiz: {
      question: 'Apakah nilai dari variabel y setelah baris kode: x = y = z = 50 ?',
      options: ['50', 'null', 'undefined', 'Error Syntax'],
      correctIndex: 0,
      explanation: 'Sintaks x = y = z = 50 menetapkan nilai 50 ke ketiga variabel secara bersamaan.'
    }
  },

  // ── 16. PYTHON OUTPUT VARIABLES ──────────────────────────────────────────
  {
    id: 'python-output-variables',
    title: 'Python Variables - Output Variables',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 15,
    overview: 'Menampilkan nilai variabel ke terminal menggunakan fungsi print(), tanda koma, operator +, dan f-string formatting.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">📢 Menampilkan Nilai Variabel</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Gunakan f-strings (<code>f"...{var}..."</code>) sebagai standar modern untuk mencetak teks dan variabel secara terintegrasi.
          </p>
        </div>
      </div>
    `,
    code: `produk = "Laptop"\nharga = 8500000\nprint(f"Item: {produk} | Harga: Rp {harga:,}")`,
    codeExplanation: ['Format "{harga:,}" otomatis menambahkan koma pemisah ribuan.'],
    challenge: {
      instruction: 'Cetak pesan "Produk: Mouse | Stok: 10" menggunakan f-string.',
      starterCode: `item = "Mouse"\nstok = 10\nprint(f"Produk: {item} | Stok: {stok}")`,
      hint: 'Gunakan f"Produk: {item} | Stok: {stok}".'
    },
    quiz: {
      question: 'Awalan karakter apakah yang harus diletakkan di depan tanda kutip untuk membuat formatted string di Python 3?',
      options: ['Huruf f (contoh: f"...")', 'Huruf s', 'Simbol $', 'Simbol @'],
      correctIndex: 0,
      explanation: 'Awalan f atau F menandai bahwa string tersebut adalah f-string (formatted string literal).'
    }
  },

  // ── 17. PYTHON GLOBAL VARIABLES ──────────────────────────────────────────
  {
    id: 'python-global-variables',
    title: 'Python Variables - Global Variables',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 16,
    overview: 'Ruang lingkup variabel Local vs Global di Python dan penggunaan kata kunci global untuk memodifikasi variabel dari dalam fungsi.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">🌐 Ruang Lingkup Global & Keyword global</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Variabel di luar fungsi bersifat global. Gunakan kata kunci <strong><code>global</code></strong> jika Anda ingin mengubah isi variabel global dari dalam fungsi.
          </p>
        </div>
      </div>
    `,
    code: `skor_global = 10\n\ndef tambah():\n    global skor_global\n    skor_global += 5\n\ntambah()\nprint(f"Skor Akhir: {skor_global}")`,
    codeExplanation: ['"global skor_global" memberi izin bagi fungsi untuk memperbarui variabel di scope modul.'],
    challenge: {
      instruction: 'Gunakan keyword global di dalam fungsi untuk mengubah variabel saldo menjadi 20000.',
      starterCode: `saldo = 10000\ndef update():\n    global saldo\n    saldo = 20000\nupdate()\nprint("Saldo:", saldo)`,
      hint: 'Gunakan keyword global saldo.'
    },
    quiz: {
      question: 'Kata kunci apakah yang digunakan untuk memodifikasi variabel global dari dalam scope lokal fungsi?',
      options: ['global', 'public', 'export', 'outer'],
      correctIndex: 0,
      explanation: 'Kata kunci "global" memberitahu interpreter bahwa variabel yang dimodifikasi adalah variabel global.'
    }
  },

  // ── 18. PYTHON VARIABLE EXERCISES ────────────────────────────────────────
  {
    id: 'python-variable-exercises',
    title: 'Python Variables - Variable Exercises',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 17,
    overview: 'Latihan praktikum mandiri menyelesaikan studi kasus kalkulasi tarif parkir dan diskon menggunakan variabel dinamis.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">🏋️ Latihan Praktik Variabel</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Selesaikan studi kasus kalkulasi tarif sewa mobil harian di live editor.
          </p>
        </div>
      </div>
    `,
    code: `tarif_per_hari = 350000\njumlah_hari = 4\ntotal_biaya = tarif_per_hari * jumlah_hari\nprint(f"Total Sewa {jumlah_hari} Hari: Rp {total_biaya:,}")`,
    codeExplanation: ['Kombinasi operasi variabel integer untuk menghasilkan output bisnis nyata.'],
    challenge: {
      instruction: 'Hitung total biaya sewa 5 hari dengan tarif 300.000 per hari.',
      starterCode: `tarif = 300000\nhari = 5\ntotal = tarif * hari\nprint(f"Total: Rp {total:,}")`,
      hint: 'Kalikan tarif dengan hari.'
    },
    quiz: {
      question: 'Apakah hasil perkalian variabel tarif = 100000 dan durasi = 3 di Python?',
      options: ['300000', '1000003', 'Error', 'Null'],
      correctIndex: 0,
      explanation: 'Perkalian dua integer menghasilkan nilai integer 300000.'
    }
  },

  // ── 19. PYTHON VARIABLES CHALLENGE ───────────────────────────────────────
  {
    id: 'python-variables-challenge',
    title: 'Python Variables - Code Challenge',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 18,
    overview: 'Tantangan integrasi multiple assignment dan modifikasi variabel global pada sistem simulasi kasir belanja.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">🎯 Tantangan Variabel Kasir</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Uji kemampuan variabel Anda dengan menyelesaikan kalkulasi total kasir belanja.
          </p>
        </div>
      </div>
    `,
    code: `item, harga, qty = "Headset", 150000, 2\ntotal = harga * qty\nprint(f"Item: {item} | Total: Rp {total:,}")`,
    codeExplanation: ['Multiple assignment variabel produk dalam satu baris instruksi.'],
    challenge: {
      instruction: 'Buat multiple assignment untuk nama_barang, harga, qty lalu cetak totalnya.',
      starterCode: `nama_barang, harga, qty = "Keyboard", 250000, 2\nprint(f"Total: Rp {harga * qty:,}")`,
      hint: 'Gunakan format multiple assignment.'
    },
    quiz: {
      question: 'Apakah kelebihan utama menggunakan Multiple Assignment di Python?',
      options: ['Kode lebih ringkas, bersih, dan ekspresif', 'Membuat program berjalan 100x lebih lambat', 'Menghapus file secara otomatis', 'Mematikan memori komputer'],
      correctIndex: 0,
      explanation: 'Multiple assignment meningkatkan kebersihan dan keringkasan kode program.'
    }
  },

  // ── 20. PYTHON DATA TYPES ────────────────────────────────────────────────
  {
    id: 'python-data-types',
    title: 'Python Data Types - Data Types',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 19,
    overview: 'Tipe data bawaan Python: Text (str), Numeric (int, float, complex), Sequence (list, tuple, range), Mapping (dict), Set, Boolean (bool), NoneType, dan fungsi type().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">🧬 Tipe Data Standar Python</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Gunakan fungsi bawaan <code>type(x)</code> untuk memeriksa kelas tipe data suatu variabel saat runtime.
          </p>
        </div>
      </div>
    `,
    code: `teks = "Python"\nangka = 100\ndesimal = 3.14\nis_active = True\ndaftar = [1, 2, 3]\nprint(type(teks))\nprint(type(angka))\nprint(type(daftar))`,
    codeExplanation: ['type() mengembalikan kelas tipe objek (<class \'str\'>, <class \'int\'>, dll).'],
    challenge: {
      instruction: 'Cetak tipe data dari variabel list [1, 2, 3] menggunakan type().',
      starterCode: `data = [1, 2, 3]\nprint(type(data))`,
      hint: 'Gunakan print(type(data)).'
    },
    quiz: {
      question: 'Fungsi bawaan Python apakah yang digunakan untuk memeriksa tipe data suatu variabel?',
      options: ['type()', 'typeof()', 'datatype()', 'inspect()'],
      correctIndex: 0,
      explanation: 'Fungsi standar Python adalah type().'
    }
  },

  // ── 21. PYTHON DATA TYPES CHALLENGE ──────────────────────────────────────
  {
    id: 'python-data-types-challenge',
    title: 'Python Data Types - Code Challenge',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 20,
    overview: 'Tantangan membuat struktur data profil karyawan (Dictionary) dan menguji kebenaran tipe datanya.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">🎯 Tantangan Dictionary & Type Check</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Buat pasangan key-value dict profil dan cetak tipe datanya.
          </p>
        </div>
      </div>
    `,
    code: `profil = {"nama": "Budi", "umur": 25, "role": "Engineer"}\nprint(f"Data Profil: {profil}")\nprint(f"Tipe: {type(profil)}")`,
    codeExplanation: ['Dictionary menggunakan kurung kurawal {} dengan pasangan "kunci": nilai.'],
    challenge: {
      instruction: 'Buat dictionary dengan key "kursus" dan value "Python", lalu cetak tipe datanya.',
      starterCode: `kursus_dict = {"kursus": "Python"}\nprint(type(kursus_dict))`,
      hint: 'Gunakan kurung kurawal {"kursus": "Python"}.'
    },
    quiz: {
      question: 'Tipe data koleksi apakah yang menyimpan pasangan Key-Value di Python?',
      options: ['dict (Dictionary)', 'list', 'tuple', 'set'],
      correctIndex: 0,
      explanation: 'Tipe data dict (Dictionary) menyimpan data dalam format pasangan kunci dan nilai.'
    }
  },

  // ── 22. PYTHON NUMBERS ───────────────────────────────────────────────────
  {
    id: 'python-numbers',
    title: 'Python Numbers - Numbers',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 21,
    overview: 'Tiga tipe numerik di Python: Integer (int tanpa batas digit), Float (float desimal & notasi ilmiah), Complex (angka imajiner j), dan modul random.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">🔢 Bilangan Numerik Python</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Python mendukung bilangan bulat <code>int</code>, pecahan <code>float</code>, dan bilangan kompleks <code>complex</code> (menggunakan huruf <code>j</code>).
          </p>
        </div>
      </div>
    `,
    code: `a = 100\nb = 3.14\nz = 2 + 3j\nprint(type(a), type(b), type(z))`,
    codeExplanation: ['Tipe complex ditandai huruf j sebagai bagian imajiner.'],
    challenge: {
      instruction: 'Buat variabel bilangan kompleks z = 4 + 5j dan cetak tipe datanya.',
      starterCode: `z = 4 + 5j\nprint(type(z))`,
      hint: 'Gunakan z = 4 + 5j.'
    },
    quiz: {
      question: 'Karakter apakah yang digunakan di Python untuk menandai bagian imajiner pada bilangan kompleks?',
      options: ['Huruf j', 'Huruf i', 'Simbol $', 'Simbol %'],
      correctIndex: 0,
      explanation: 'Python menggunakan huruf "j" atau "J" untuk bagian imajiner.'
    }
  },

  // ── 23. PYTHON NUMBERS CHALLENGE ─────────────────────────────────────────
  {
    id: 'python-numbers-challenge',
    title: 'Python Numbers - Code Challenge',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 22,
    overview: 'Tantangan menghasilkan angka acak menggunakan modul random.randint() untuk kode verifikasi OTP.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">🎯 Tantangan Angka Acak (Random)</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Gunakan modul <code>random</code> untuk membuat generator nomor acak.
          </p>
        </div>
      </div>
    `,
    code: `import random\notp = random.randint(1000, 9999)\nprint(f"Kode OTP Anda: {otp}")`,
    codeExplanation: ['random.randint(1000, 9999) menghasilkan 4 digit integer acak inklusif.'],
    challenge: {
      instruction: 'Gunakan random.randint(1, 100) untuk menghasilkan angka keberuntungan acak.',
      starterCode: `import random\nangka = random.randint(1, 100)\nprint(f"Angka: {angka}")`,
      hint: 'Gunakan random.randint(1, 100).'
    },
    quiz: {
      question: 'Modul bawaan Python apakah yang digunakan untuk menghasilkan angka acak?',
      options: ['random', 'math', 'numbers', 'crypto'],
      correctIndex: 0,
      explanation: 'Modul "random" adalah pustaka bawaan standar Python untuk kalkulasi bilangan acak.'
    }
  },

  // ── 24. PYTHON CASTING ───────────────────────────────────────────────────
  {
    id: 'python-casting',
    title: 'Python Casting - Casting',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 23,
    overview: 'Konversi tipe data eksplisit (Type Casting) menggunakan int(), float(), dan str() untuk mengubah teks input menjadi angka numerik.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">🔄 Konversi Tipe Data (Casting)</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Ubah tipe variabel secara eksplisit: <code>int("25")</code> &rarr; 25, <code>float(10)</code> &rarr; 10.0, <code>str(100)</code> &rarr; "100".
          </p>
        </div>
      </div>
    `,
    code: `teks_harga = "75000"\nharga_int = int(teks_harga)\nprint(f"Harga Asli: {harga_int} | Tipe: {type(harga_int)}")`,
    codeExplanation: ['int("75000") mengubah string teks menjadi integer numerik.'],
    challenge: {
      instruction: 'Konversikan string "50" menjadi integer dan kalikan dengan 4.',
      starterCode: `s = "50"\nhasil = int(s) * 4\nprint("Hasil:", hasil)`,
      hint: 'Gunakan int(s) * 4.'
    },
    quiz: {
      question: 'Apakah hasil keluaran dari fungsi int(4.9) di Python?',
      options: ['4 (desimal dipotong)', '5 (dibulatkan ke atas)', '4.9', 'ValueError'],
      correctIndex: 0,
      explanation: 'Konstruktor int() memotong angka di belakang koma (truncation).'
    }
  },

  // ── 25. PYTHON CASTING CHALLENGE ─────────────────────────────────────────
  {
    id: 'python-casting-challenge',
    title: 'Python Casting - Code Challenge',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 24,
    overview: 'Tantangan koding mengonversi input string desimal float dan melakukan kalkulasi diskon belanja.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">🎯 Tantangan Konversi Desimal</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Konversi string desimal <code>"120.75"</code> menjadi float dan kalikan dengan 2.
          </p>
        </div>
      </div>
    `,
    code: `input_nilai = "120.75"\nnilai_float = float(input_nilai)\nprint(f"Hasil Kali 2: {nilai_float * 2}")`,
    codeExplanation: ['float("120.75") mengonversi string ke bilangan pecahan desimal.'],
    challenge: {
      instruction: 'Ubah string "99.5" menjadi float dan tambahkan 0.5.',
      starterCode: `s = "99.5"\ntotal = float(s) + 0.5\nprint("Total:", total)`,
      hint: 'Gunakan float(s) + 0.5.'
    },
    quiz: {
      question: 'Konstruktor manakah yang digunakan untuk mengonversi nilai angka ke dalam bentuk teks String?',
      options: ['str()', 'string()', 'toString()', 'text()'],
      correctIndex: 0,
      explanation: 'Konstruktor str() mengubah nilai apapun menjadi tipe data String.'
    }
  }
];
